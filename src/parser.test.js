const fs = require('fs');
const { test, expect } = require('@jest/globals');
import { Parser } from './parser.js';
import { Cell } from './puzzle.js';

function readPuzzle(filename) {
    let json = fs.readFileSync(`${__dirname}/fixtures/${filename}`);
    let ipuz = JSON.parse(json);
    let puzzle = Parser.parse(ipuz);
    return (puzzle);
}

describe('parsing 3x3 barred puzzle', () => {
    let puzzle = readPuzzle('3x3-barred.ipuz');
    test('parses barred cells correctly', () => {
        let expected = [
            ["", "", ""],
            ["", "barred-left", "barred-top-left"],
            ["barred-top", "", ""]
        ];
        puzzle.cells.forEach((row, y) => {
            row.forEach((cell, x) => {
                expect(cell.style).toEqual(expected[y][x]);
            });
        });
    });

    test('parses numbers correctly', () => {
        let expected = [
            [1, 2, 0],
            [0, 0, 3],
            [4, 0, 0]
        ];
        puzzle.cells.forEach((row, y) => row.forEach((cell, x) => expect(cell.number).toEqual(expected[y][x])))
    });
})

describe('parsing 3x3 puzzle', () => {
    let puzzle = readPuzzle('3x3.ipuz');

    test('parses numbers correctly', () => {
        let expected = [
            [1, 0, 2],
            [0, NaN, 0],
            [3, 0, 0]
        ];
        puzzle.cells.forEach((cells, row) => cells.forEach((cell, col) => expect(cell.number).toEqual(expected[row][col])))
    });
    test('populates cell positions correctly', () => {
        puzzle.cells.forEach((cells, row) => cells.forEach((cell, col) => {
            expect(cell.position.row).toEqual(row);
            expect(cell.position.col).toEqual(col);
        }));
    });
    test('parses blocks correctly', () => {
        let expected = [
            ["", "", ""],
            ["", "block", ""],
            ["", "", ""]
        ];
        puzzle.cells.forEach((row, y) => {
            row.forEach((cell, x) => {
                expect(cell.style).toEqual(expected[y][x]);
            });
        });
    });

    test('parses cells correctly', () => {
        expect(puzzle.cells.length).toBe(3);
        puzzle.cells.forEach(row => expect(row.length).toBe(3));
    });

    test('reads Across clues', () => {
        expect(puzzle.clues.across.filter(c => c).length).toBe(2);
        expect(puzzle.clues.across[1].text).toBe("Leatherworking tool");
        expect(puzzle.clues.across[3].text).toBe("Church bench");
    });

    test('reads Down clues', () => {
        expect(puzzle.clues.down.filter(c => c).length).toBe(2);
        expect(puzzle.clues.down[1].text).toBe("Unit of current");
        expect(puzzle.clues.down[2].text).toBe("Rules");
    });
});

describe('cell indicates end of a range', () => {
    test('when it is a block', () => {
        let cell = new Cell('#');
        expect(cell.isEndOfRange('across')).toBe(true);
        expect(cell.isEndOfRange('down')).toBe(true);
    });

    let ac = { across: new Cell(0) };
    let dn = { down: new Cell(0) };
    let ad = { across: new Cell(0), down: new Cell(0) };
    const cases = [
        // cells without a bar style will not be an end of range in a barred puzzle
        [null, {}, "across", false],
        [null, ac, "across", false],
        [null, dn, "across", false],
        [null, ad, "across", false],

        [null, {}, "down", false],
        [null, ac, "down", false],
        [null, dn, "down", false],
        [null, ad, "down", false],

        // cells with a top barred style will only be the end 
        // if the cell has a previous down cell 
        ["T", {}, "across", false],
        ["T", ac, "across", false],
        ["T", dn, "across", false],
        ["T", ad, "across", false],

        ["T", {}, "down", false],
        ["T", ac, "down", false],
        ["T", dn, "down", true],
        ["T", ad, "down", true],

        ["TL", {}, "across", false],
        ["TL", ac, "across", true],
        ["TL", dn, "across", false],
        ["TL", ad, "across", true],

        ["TL", {}, "down", false],
        ["TL", ac, "down", false],
        ["TL", dn, "down", true],
        ["TL", ad, "down", true],

        ["L", {}, "across", false],
        ["L", ac, "across", true],
        ["L", dn, "across", false],
        ["L", ad, "across", true],

        ["L", {}, "down", false],
        ["L", ac, "down", false],
        ["L", dn, "down", false],
        ["L", ad, "down", false],
    ];

    test.each(cases)("style %p, previous %p, test direction %p, returns %p",
        (style, previous, direction, expected) => {
            let ipuz = previous[0] ? 0 : { "style": { "barred": style }, "cell": 0 };
            let cell = new Cell(ipuz);
            cell.previous = previous;
            expect(cell.isEndOfRange(direction)).toBe(expected);
        });
});

describe('parsing clue/cell relationships', () => {
    let puzzle = readPuzzle('5x5-cell-ranges.ipuz');

    function range(clueNumber, direction, row, col, length) {
        return () => {
            let clue = puzzle.clues[direction][clueNumber];
            expect(clue.cells.length).toBe(length);
            for (let i = 0; i < length; i++) {
                expect(clue.cells[i].position.row).toBe(row + (direction == 'across' ? 0 : i));
                expect(clue.cells[i].position.col).toBe(col + (direction == 'down' ? 0 : i));
            }
        }
    }

    test('1 across', range(1, 'across', 0, 0, 5));
    test('5 across', range(5, 'across', 2, 0, 5));
    test('7 across', range(7, 'across', 3, 1, 3));
    test('8 across', range(8, 'across', 4, 0, 5));

    test('1 down', range(1, 'down', 0, 0, 3));
    test('2 down', range(2, 'down', 0, 2, 5));
    test('3 down', range(3, 'down', 0, 3, 4));
    // test('4 down', range(4, 'down', 1, 1, 4));
    // test('6 down', range(6, 'down', 4, 2, 3));

});
