import searchRepoNormalized from '@test/fixtures/gitClient_searchRepo_React_normalized.json';
import {RepositorySearch,iRepositorySearch,iRepositoryData} from '@src/models/repositorySearch';

describe('Search functional tests', ()=>{

    beforeAll(async ()=> await RepositorySearch.deleteMany({}));//Clean the Database before tests
    describe('When a user make a search', ()=>{

        it('It should create a register about the search on database', async ()=>{

            const newSearch : iRepositorySearch = {
                user_id: 45272564,
                repositoryData: {... searchRepoNormalized.data},
            }

            const response = await global.testRequest.post('/search_repository/new').send(newSearch);
            expect(response.status).toBe(201);
            expect(response.body).toEqual(
                expect.objectContaining(newSearch));
        });


        it('It should return a 422 code when there is a validation error', async ()=>{

            const newSearch = {
                user_id: 'testeError',
                repositoryData: {... searchRepoNormalized.data},
            }

            const response = await global.testRequest.post('/search_repository/new').send(newSearch);
            expect(response.status).toBe(422);
            expect(response.body).toEqual({
                error:
                'RepositorySearch validation failed: user_id: Cast to Number failed for value "testeError" at path "user_id"'
            });
        });
    })
});