const stack = require('../src/stack');

test('size räknar antalet element', () => {
    expect(stack.size()).toBe(0);
    stack.push("a");
    stack.push("b");
    expect(stack.size()).toBe(2);
    stack.pop();
    expect(stack.size()).toBe(1);
});