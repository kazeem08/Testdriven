const decipher = require("./decipher")


test('Decipher expects EHQAbnqByPOjauhMLASVzvBZlfyO/OQFulCDnMMfmUizRX!wn% and return RUDNOADOLCBWNHUZYNFIMIOMYSLB/BDSHYPQAZZSZHVMEK!JA%', () => {
    expect(decipher('EHQAbnqByPOjauhMLASVzvBZlfyO/OQFulCDnMMfmUizRX!wn%')).toEqual('RUDNOADOLCBWNHUZYNFIMIOMYSLB/BDSHYPQAZZSZHVMEK!JA%');
})

test('Decipher expects PbQr and return CODE', () => {
    expect(decipher('PbQr')).toEqual('CODE');
})

test('Decipher expects terljuvgr and return GREYWHITE', () => {
    expect(decipher('terljuvgR')).toEqual('GREYWHITE');
})


test('Decipher expects 1290303949883773894949 and return 1290303949883773894949', () => {
    expect(decipher('1290303949883773894949')).toEqual('1290303949883773894949');
})

test('Decipher expects FM6KGrCBjj and return SZ6XTEPOWW', () => {
    expect(decipher('FM6KGrCBjj')).toEqual('SZ6XTEPOWW');
})

test('Decipher expects FM6KGrCBjj and return SZ6XTEPOWW', () => {
    expect(decipher('FM6KGrCBjj')).toEqual('SZ6XTEPOWW');
})

test('GUR DHVPX OEBJA SBK WHZCRQ BIRE GUR YNML QBT and return THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG', () => {
    expect(decipher('GUR DHVPX OEBJA SBK WHZCRQ BIRE GUR YNML QBT')).toEqual('THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG');
})

test("expect RNG NG WBR'F NG 1:00CZ and return EAT AT JOE\'S AT 1:00PM", () => {
    expect(decipher("RNG NG WBR'F NG 1:00CZ")).toEqual('EAT AT JOE\'S AT 1:00PM');
})

test("expect LNL!!! to return YAY!!!", () => {
    expect(decipher("LNL!!!")).toEqual('YAY!!!');
})

test("1234567890 to return 1234567890", () => {
    expect(decipher("1234567890")).toEqual('1234567890');
})

