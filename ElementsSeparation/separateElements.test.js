const separateElements = require('./separateElements');

test("Arranged numbers and non numbers of [1, 3, 8, 'a', 5, '', 6]", () => {
    expect(separateElements([1, 3, 8, 'a', 5, '', 6])).toEqual([ 'a', '', 1, 3, 5, 6, 8 ]);
});

test("Arranged numbers and non numbers of [1, 3.7, 8,'0' ,'hi' , 6]", () => {
    expect(separateElements([1, 3.7, 8,'0' ,'hi' , 6])).toEqual([ '0', 'hi', 1, 3, 6, 8 ]);
});

test("Arranged numbers and non numbers of ['Hello' ,'hi']", () => {
    expect(separateElements([ 'Hello', 'hi' ])).toEqual([ 'Hello', 'hi' ]);
});

test("Arranged numbers and non numbers of ['NaN' , 'undefined']", () => {
    expect(separateElements([ NaN, undefined ])).toEqual([undefined, NaN]);
});

test("Arranged numbers and non numbers of ['NaN' , 'undefined']", () => {
    expect(separateElements([ NaN, undefined ])).toEqual([undefined, NaN]);
});

test("Arranged numbers and non numbers of [10, 6.0 , 4.8 , , NaN]", () => {
    expect(separateElements([10, 6.0 , 4.8 , , NaN])).toEqual([ undefined, 10, 4, 6, NaN ]);
});

test("Arranged numbers and non numbers of [null, '@&*', 9, 09]", () => {
    expect(separateElements([null, '@&*', 9, 0.9])).not.toEqual([ null, '@&*', 1, 9 ]);
});

test("Arranged numbers and non numbers of [null, '@&*', 9, 09]", () => {
    expect(separateElements([null, '@&*', 9, 0.9])).not.toEqual([ null, '@&*', 1, 9 ]);
});

test("Arranged numbers and non numbers of [1.2, 1.3, 1.4, 1.5]", () => {
    expect(separateElements([1.2, 1.3, 1.4, 1.5])).not.toEqual([1.2, 1.3, 1.4, 1.5]);
});

test("Arranged numbers and non numbers of [1, '#', 'ywfw']", () => {
    expect(separateElements([1, '#', 'ywfw'])).toEqual([ '#', 'ywfw', 1 ]);
});








