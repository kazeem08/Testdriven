const geo = require('./geometricSequence');

test('case where the first position is given and also required', function() {
	expect(geo([2, 4, 8, 16], 2, 1)).toBe(2);
});

test('case where the 7th position is required', function() {
	expect(geo([8, 16, 32, 64], 2, 7)).toBe(128);
});

test('case where there is no difference in the sequence', function() {
	expect(geo([6, 6, 6, 6], 6, 10)).toBe(6);
});

test('case where the first number is negative', function() {
	expect(geo([-8, -32, -128, -512], -2, 7)).toBe(-8192);
});

test('case where the first number and the geometric ratio are negative', function() {
	expect(geo([12, -36, 108, -324], -4, 5)).toBe(-324);
});

test('case where the first number is a decimal', function() {
	expect(geo([0.4, 0.8, 1.6, 3.2], 0.4, 6)).toBe(12.8);
});

test('case where the first number is a negative decimal and geometric ratio is -1', function() {
	expect(geo([1.4, -1.4, 1.4, -1.4], -1.4, 6)).toBe(1.4);
});

test('case where the first number and geometric ratio are decimals', function() {
	expect(geo([0.06, 0.012000000000000002, 0.0024000000000000007, 0.0004800000000000002], 0.3, 5)).toBe(0.000480);
});

test('case where only the geometric ratio is decimal', function() {
	expect(geo([1.2000000000000002, 0.24000000000000005, 0.048000000000000015, 0.009600000000000004], 6, 6)).toBe(0.001920);
});

test('case where the first number is zero (0)', function() {
	expect(geo([0, 0, 0, 0], 0, 10)).toBe(0);
});