const fs = require('fs');
const { test, expect } = require('@jest/globals');
import { IPuzzler } from '../ipuzzler.js';

function html(tagName, attributes) {
    const element = document.createElement(tagName);
    for (const [key, value] of Object.entries(attributes || {})) element.setAttribute(key, value);
    return (element);
}

describe('test event handlers', () => {
    let ipuzzler;
    let updated;
    beforeEach(() => {
        let json = JSON.parse(fs.readFileSync(`${__dirname}/fixtures/3x3.ipuz`));
        ipuzzler = new IPuzzler();
        ipuzzler.init(json);
        updated = null;
        // Override the DOM-based renderer with a really simple mock
        ipuzzler.renderer.update = puzzle => updated = puzzle;
    });

    describe('clicking a clue sets grid focus to first cell of clue', () => {
        const cases = [
            [1, 'across'],
            [3, 'across'],
            [1, 'down'],
            [2, 'down']
        ];
        test.each(cases)("clicking %p %p", (clueNumber, clueDirection) => {
            let item = html('li', { 'data-clue-number': clueNumber, 'data-clue-direction': clueDirection });
            let a = html('a');
            item.appendChild(a);
            let event = { composedPath: () => [a], preventDefault: () => { } };
            ipuzzler.click(event);
            let clue = updated.clues[clueDirection][clueNumber];
            expect(updated.focusedCell).toBe(clue.cells[0]);
        });
    });

    test('mousedown sets cell focus', () => {

        let input = html('input', { 'data-row': 1, 'data-col': 2 });
        let event = { composedPath: () => [input], preventDefault: () => { } };

        expect(ipuzzler.puzzle.focusedCell).toBeNull();
        ipuzzler.mousedown(event);
        expect(updated).not.toBeNull();
        expect(updated.focusedCell).not.toBeNull();
    });

    test('mousedown highlights row', () => {
        // We pick a cell that only associates with an Across clue
        let input = html('input', { 'data-row': 0, 'data-col': 1 });
        let event = { composedPath: () => [input], preventDefault: () => { } };

        ipuzzler.mousedown(event);
        let cells = ipuzzler.puzzle.cells;
        let expected = [
            [true, true, true],
            [false, false, false],
            [false, false, false]
        ]
        expected.forEach((line, row) => line.forEach((bool, col) => expect(cells[row][col].isActive).toBe(bool)));
    });

    test('mousedown highlights column', () => {
        // we pick a cell that only associates with a Down clue
        let input = html('input', { 'data-row': 1, 'data-col': 0 });
        let event = { composedPath: () => [input], preventDefault: () => { } };

        ipuzzler.mousedown(event);
        let cells = ipuzzler.puzzle.cells;
        let expected = [
            [true, false, false],
            [true, false, false],
            [true, false, false]
        ];
        expected.forEach((line, row) => line.forEach((bool, col) => expect(cells[row][col].isActive).toBe(bool)));
    });

    test('mousedown switches direction', () => {
        // we pick a cell that associates with both an Across and a Down clue
        let input = html('input', { 'data-row': 0, 'data-col': 0 });
        let event = { composedPath: () => [input], preventDefault: () => { } };
        ipuzzler.puzzle.direction = "across";
        ipuzzler.mousedown(event);
        let cells = ipuzzler.puzzle.cells;

        let expected1 = [[true, true, true], [false, false, false], [false, false, false]];
        expected1.forEach((line, row) => line.forEach((bool, col) => expect(cells[row][col].isActive).toBe(bool)));

        ipuzzler.mousedown(event);
        let expected2 = [[true, false, false], [true, false, false], [true, false, false]];
        expected2.forEach((line, row) => line.forEach((bool, col) => expect(cells[row][col].isActive).toBe(bool)));
    });

    test('puzzle handles backspace', () => {
        let mock = jest.fn(event => event);
        ipuzzler.puzzle.backspace = mock;
        let event = { composedPath: () => [html('input')], preventDefault: () => { }, code: "Backspace" };
        ipuzzler.keydown(event);
        expect(mock).toHaveBeenCalledTimes(1);
    });
    
    test('puzzle handles delete', () => {
        let mock = jest.fn(event => event);
        ipuzzler.puzzle.setCellValue = mock;
        let event = { composedPath: () => [html('input')], preventDefault: () => { }, code: "Delete" };
        ipuzzler.keydown(event);
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith("");
    });

    test('puzzle handles Escape key', () => {
        let mock = jest.fn(event => event);
        ipuzzler.puzzle.clearFocus = mock;
        let event = { composedPath: () => [html('input')], preventDefault: () => { }, code: "Escape" };
        ipuzzler.keydown(event);
        expect(mock).toHaveBeenCalledTimes(1);
    });

    describe('alphanumeric keys set input values via mocks', () => {
        const cases = "abcdefghijklmnopqrstuvwxyz".split("");
        test.each(cases)("key down %p", (key) => {
            let input = html('input', { });
            let event = { composedPath: () => [input], preventDefault: () => { }, key: key };
            ipuzzler.puzzle.setCellValue = jest.fn(v => v);
            ipuzzler.keydown(event);
            expect(ipuzzler.puzzle.setCellValue).toHaveBeenCalledWith(key);        
        });
    });

    describe('alphanumeric keys set input values', () => {
        const cases = "abcdefghijklmnopqrstuvwxyz".split("");
        test.each(cases)("key down %p", (key) => {
            let cell = ipuzzler.puzzle.cells[0][0];
            ipuzzler.puzzle.setFocus(0, 0);
            let input = html('input', { "data-row": cell.position.row, "data-col": cell.position.col });
            let event = { composedPath: () => [input], preventDefault: () => { }, key: key };
            ipuzzler.keydown(event);
            expect(cell.value).toBe(key.toUpperCase());
        });
    });

    describe('alphanumeric keys move focus to next cell', () => {
        test('when direction is across', () => {
            let input = html('input', { "data-row": 0, "data-col": 0 });
            let event = { composedPath: () => [input], preventDefault: () => { }, key: "a" };
            ipuzzler.puzzle.setFocus(0, 0);
            ipuzzler.keydown(event);
            expect(updated.focusedCell.position.row).toBe(0);
            expect(updated.focusedCell.position.col).toBe(1);

            input = html('input', { "data-row": 0, "data-col": 1 });
            event = { composedPath: () => [input], preventDefault: () => { }, key: "b" };
            ipuzzler.puzzle.setFocus(0, 1);
            ipuzzler.keydown(event);
            expect(updated.focusedCell.position.row).toBe(0);
            expect(updated.focusedCell.position.col).toBe(2);
        });

        test('when direction is down', () => {
            let input = html('input', { "data-row": 0, "data-col": 0 });
            let event = { composedPath: () => [input], preventDefault: () => { }, key: "a" };
            ipuzzler.puzzle.direction = "down";
            ipuzzler.puzzle.setFocus(0, 0);
            ipuzzler.keydown(event);
            expect(updated.focusedCell.position.row).toBe(1);
            expect(updated.focusedCell.position.col).toBe(0);

            input = html('input', { "data-row": 0, "data-col": 1 });
            event = { composedPath: () => [input], preventDefault: () => { }, key: "b" };
            ipuzzler.puzzle.setFocus(1, 0);
            ipuzzler.keydown(event);
            expect(updated.focusedCell.position.row).toBe(2);
            expect(updated.focusedCell.position.col).toBe(0);
        });
    });

    describe('arrow keys move focus', () => {
        const cases = [
            [0, 0, "ArrowUp", 0, 0], [0, 1, "ArrowUp", 0, 1], [0, 2, "ArrowUp", 0, 2],
            [1, 0, "ArrowUp", 0, 0], /****** ArrowUp ******/[1, 2, "ArrowUp", 0, 2],
            [2, 0, "ArrowUp", 1, 0], [2, 1, "ArrowUp", 2, 1], [2, 2, "ArrowUp", 1, 2],

            [0, 0, "ArrowLeft", 0, 0], [0, 1, "ArrowLeft", 0, 0], [0, 2, "ArrowLeft", 0, 1],
            [1, 0, "ArrowLeft", 1, 0], /****** ArrowLeft ******/[1, 2, "ArrowLeft", 1, 2],
            [2, 0, "ArrowLeft", 2, 0], [2, 1, "ArrowLeft", 2, 0], [2, 2, "ArrowLeft", 2, 1],

            [0, 0, "ArrowDown", 1, 0], [0, 1, "ArrowDown", 0, 1], [0, 2, "ArrowDown", 1, 2],
            [1, 0, "ArrowDown", 2, 0], /****** ArrowDown ******/[1, 2, "ArrowDown", 2, 2],
            [2, 0, "ArrowDown", 2, 0], [2, 1, "ArrowDown", 2, 1], [2, 2, "ArrowDown", 2, 2],

            [0, 0, "ArrowRight", 0, 1], [0, 1, "ArrowRight", 0, 2], [0, 2, "ArrowRight", 0, 2],
            [1, 0, "ArrowRight", 1, 0], /****** ArrowRight ******/[1, 2, "ArrowRight", 1, 2],
            [2, 0, "ArrowRight", 2, 1], [2, 1, "ArrowRight", 2, 2], [2, 2, "ArrowRight", 2, 2],
        ];

        test.each(cases)("%p in (%p,%p) focuses (%p,%p)", (oldRow, oldCol, code, newRow, newCol) => {
            let input = html('input', { "data-row": oldRow, "data-col": oldCol });
            let event = { composedPath: () => [input], preventDefault: () => { }, code: code };
            ipuzzler.puzzle.setFocus(oldRow, oldCol);
            ipuzzler.keydown(event);
            expect(updated.focusedCell.position.row).toBe(newRow);
            expect(updated.focusedCell.position.col).toBe(newCol);
        });
    });
});

describe('arrow keys change puzzle direction', () => {
    let ipuzzler;
    let updated;
    beforeEach(() => {
        let json = JSON.parse(fs.readFileSync(`${__dirname}/fixtures/11x11-barred.ipuz`));
        ipuzzler = new IPuzzler();
        ipuzzler.init(json);
        updated = null;
        // Override the DOM-based renderer with a really simple mock
        ipuzzler.renderer.update = puzzle => updated = puzzle;
    });
    const cases = [
        ["ArrowDown", "across", "down"],
        ["ArrowRight", "down", "across"],
        ["ArrowUp", "across", "down"],
        ["ArrowLeft", "down", "across"],
    ];
    test.each(cases)("%p key changes puzzle direction from %p to %p", (code, oldDirection, newDirection) => {
        let input = html('input', { "data-row": 1, "data-col": 1 });
        let event = { composedPath: () => [input], preventDefault: () => { }, code: code };
        ipuzzler.puzzle.setFocus(1, 1);
        ipuzzler.puzzle.direction = oldDirection;
        expect(ipuzzler.puzzle.direction).toBe(oldDirection);
        ipuzzler.keydown(event);
        expect(ipuzzler.puzzle.direction).toBe(newDirection);
    });
});