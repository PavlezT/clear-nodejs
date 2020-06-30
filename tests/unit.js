const api = require('../services/api');

describe('Start unit tests', () => {
    it('Test discount calculation', () => {
        const result = api.caculateDiscount(100,20);
        expect(result).equil(80);
    })

    it('Should throw error if price is invalid', () => {
        let result;

        try {
            api.caculateDiscount(100, 110);
            result = false;
        } catch(e){
            result = true;
        }

        expect(result).equil(true);
    })
})