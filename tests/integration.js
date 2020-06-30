const config = require('../config');
const makeRequest = require('../helpers/makeRequest');

const hostname = `127.0.0.1:${config.port}`;
const url = '/orders/estimate';

describe('Start integration tests', () => {
    it('Should return proper data', async () => {
        const data = {
            from: 'Vatslava‌ ‌Havela‌ Boulevard‌ ‌6, ‌Kiev, Kyiv‌ ‌city',
            to: 'Velyka‌ Vasylkivska‌ Street‌ 22,‌ Kiev,‌ Kyiv‌ city'
        };
        const result = await makeRequest(hostname, url, 'POST', data, {}, true);
        console.log('result:', result);
    })

    it('Should return 400 for incorrect positions', () => {
        // expect(result).equil(80);
    })
})