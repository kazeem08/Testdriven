const decipher = require('./decipher');

test('Expect "EHQAbnqByPOjauhMLASVzvBZlfyO/OQFulCDnMMfmUizRX!wn%" to return "RUDNOADOLCBWNHUZYNFIMIOMYSLB/BDSHYPQAZZSZHVMEK!JA%" ', () => {
    expect(decipher('EHQAbnqByPOjauhMLASVzvBZlfyO/OQFulCDnMMfmUizRX!wn%').toEqual('RUDNOADOLCBWNHUZYNFIMIOMYSLB/BDSHYPQAZZSZHVMEK!JA%'));
});

