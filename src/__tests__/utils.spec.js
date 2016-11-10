test('An array is correctly recognized', () => {
    const isArray = require('../utils.ts').isArray;
    const received = isArray([1,0]) 
    expect(received).toBe(true);
})

test('An object is correctly seen as a non-array', () => {
    const isArray = require('../utils.ts').isArray;
    const received = isArray({}) 
    expect(received).toBe(false);
})


test('A string starts with another', () => {
    const startsWith = require('../utils.ts').startsWith;
    const received = startsWith("abc", "ab");
    expect(received).toBe(true);
})


test("A string don't starts with another", () => {
    const startsWith = require('../utils.ts').startsWith;
    const received = startsWith("abc", "zb");
    expect(received).toBe(false);
})