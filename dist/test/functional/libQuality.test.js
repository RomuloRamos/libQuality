"use strict";
describe('Git parameters for repository searchs', () => {
    it('Should return the parameters to some repositoty searched', async () => {
        const { body, status } = await global.testRequest.get('/gitRequest');
        expect(status).toBe(200);
        expect(body).toEqual([{ resp: 'TODO - Objeto de retorno' }]);
    });
});
//# sourceMappingURL=libQuality.test.js.map