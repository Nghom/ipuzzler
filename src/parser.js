import { Puzzle, Cell, Clue } from './puzzle.js';

export class Parser {
    static parse(ipuzData) {

        let cells = ipuzData.puzzle.map((ipuzCells, row) => ipuzCells.map((ipuzCell, col) => new Cell(ipuzCell, row, col)));

        let cluesFromAcross = ipuzData.clues.Across.map(c => new Clue(c, "across").toClueList()).flat();
        let cluesFromDown = ipuzData.clues.Down.map(c => new Clue(c, "down").toClueList()).flat();

        const clues = { across: [], down: [] };
        cluesFromAcross.concat(cluesFromDown).forEach(clue => {
            let cell = Parser.findCellForClue(cells, clue);
            clue.position = cell.position;
            clue.cells = Parser.findCellList(cells, clue.position, clue.direction);
            clue.cells.forEach(cell => cell.clues[clue.direction] = clue);
            clues[clue.direction][clue.number] = clue;
        });

        return new Puzzle(cells, clues);
    }

    static findCellForClue(cells, clue) {
        return cells.flat().find(cell => cell.number == clue.number);
    }

    static findCellList(cells, position, direction, previousCell) {
        if (! position.isInside(cells)) return [];
        var cell = cells[position.row][position.col];        
        cell.previous[direction] = previousCell;
        if (cell.isEndOfRange(direction)) return [];
        if (previousCell) previousCell.next[direction] = cell;
        return ([cell].concat(Parser.findCellList(cells, position.increment(direction), direction, cell)));
    };
}