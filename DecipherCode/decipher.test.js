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


