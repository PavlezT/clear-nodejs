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

        expect(result).have('amount');
        expect(result.amount).greatThen(0);
    })

    it('Should return 400 for incorrect positions', async () => {
        const data = {
            from: 'Not_real_address',
            to: 'Velyka‌ Vasylkivska‌ Street‌ 22,‌ Kiev,‌ Kyiv‌ city'
        };
        let result
        
        try {
            await makeRequest(hostname, url, 'POST', data, {}, true);
            result = false;
        } catch(e) {
            result = true;
        }

        expect(result).equil(true);
    })
})