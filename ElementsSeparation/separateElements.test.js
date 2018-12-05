const separateElements = require('./separateElements');

test("Arranged numbers and non numbers of [1, 3, 8, 'a', 5, '', 6]", () => {
    expect(separateElements([1, 3, 8, 'a', 5, '', 6])).toEqual([ 'a', '', 1, 3, 5, 6, 8 ]);
});



