import searchRepoNormalized from '@test/fixtures/gitClient_searchRepo_React_normalized.json';
import {UserRepositories,iUserRepositories,iRepositoryData} from '@src/models/userRepositories';

async function saveRepositoryData(objToSave:iUserRepositories): Promise<any>{
    
    const response = await global.testRequest.post('/user_repositories/new').send(objToSave);

    return response;
}

describe('Save Iterest Reposoties functional tests', ()=>{

    beforeAll(async ()=> await UserRepositories.deleteMany({}));//Clean the Database before tests
    describe('When a user need register a repository as interesting', ()=>{

        it('CREATING: -> It should create a new interest repository to a user list', async ()=>{

            const newSearch : iUserRepositories = {
                user_id: 45272564,
                repo_id: searchRepoNormalized.data.id,
                repositoryData: {... searchRepoNormalized.data},
            }

            const response = await saveRepositoryData(newSearch);
            expect(response.status).toBe(201);
            expect(response.body).toEqual(
                expect.objectContaining(newSearch));    
        });


        it('VALIDATION: -> It should return a 422 code when there is a validation error', async ()=>{

            const newSearch = {
                user_id: 'testeError',
                repo_id: 11111,
                repositoryData: {... searchRepoNormalized.data},
            }

            const response = await global.testRequest.post('/user_repositories/new').send(newSearch);
            expect(response.status).toBe(422);
            expect(response.body).toEqual({
                error:
                'UserRepositories validation failed: user_id: Cast to Number failed for value "testeError" at path "user_id"'
            });
        });

        it('GET: -> It should return repository interest list to a specific User', async ()=>{

            const objSearch0 : iUserRepositories = {
                user_id: 45272560,
                repo_id: 10270250,
                repositoryData: {... searchRepoNormalized.data} as iRepositoryData,
            }

            const objSearch1 : iUserRepositories = {
                user_id: objSearch0.user_id,
                repo_id: 10270251,
                repositoryData: {...searchRepoNormalized.data, name:'Angular', full_name:'angular/angular'}
            }

            const objSearch2 : iUserRepositories = {
                user_id: objSearch0.user_id,
                repo_id: 10270252,
                repositoryData: {...searchRepoNormalized.data, name:'Django', full_name:'django/django'},
            }
            const objSearch3 : iUserRepositories = {
                user_id: 111111,
                repo_id: 10270253,
                repositoryData: {... searchRepoNormalized.data},
            }
            await UserRepositories.deleteMany({});
            let response = await saveRepositoryData(objSearch0);
            expect(response.status).toBe(201);
            response = await saveRepositoryData(objSearch1);
            expect(response.status).toBe(201);
            response = await saveRepositoryData(objSearch2);
            expect(response.status).toBe(201);
            response = await saveRepositoryData(objSearch3);
            expect(response.status).toBe(201);
            
            const extectedDatabaseReturn = [
                {
                  user_id: 45272560,
                  repo_id: 10270250,
                  repositoryData: {
                    id: 10270250,
                    name: "react",
                    full_name: "facebook/react",
                    private: false,
                    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
                    open_issues: 645,
                    pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
                    forks_count: 31645,
                    forks_url: "https://api.github.com/repos/facebook/react/forks",
                    stargazers_count: 159354,
                    collaborators_url: "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
                  },
                },
                {
                  user_id: 45272560,
                  repo_id: 10270251,
                  repositoryData: {
                    id: 10270250,
                    name: "Angular",
                    full_name: "angular/angular",
                    private: false,
                    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
                    open_issues: 645,
                    pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
                    forks_count: 31645,
                    forks_url: "https://api.github.com/repos/facebook/react/forks",
                    stargazers_count: 159354,
                    collaborators_url: "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
                  },
                },
                {
                  user_id: 45272560,
                  repo_id: 10270252,
                  repositoryData: {
                    id: 10270250,
                    name: "Django",
                    full_name: "django/django",
                    private: false,
                    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
                    open_issues: 645,
                    pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
                    forks_count: 31645,
                    forks_url: "https://api.github.com/repos/facebook/react/forks",
                    stargazers_count: 159354,
                    collaborators_url: "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
                  },
                },
            ]

            const userToSearch = { user_id: 45272560};
            const getDatabaseResponse = await global.testRequest.get('/user_repositories/request').send(userToSearch);
            // console.log("getDatabaseResponse:",getDatabaseResponse.body);
            expect(getDatabaseResponse.body).toEqual(
                expect.arrayContaining(extectedDatabaseReturn));
        });

        it('UPDATING: -> It should update data to one repository in a user repository interest list', async ()=>{

            const objSearch0 : iUserRepositories = {
                user_id: 45272564,
                repo_id: 10270250,
                repositoryData: {... searchRepoNormalized.data} as iRepositoryData,
            }

            objSearch0.repositoryData.name="";
            objSearch0.repositoryData.description="";
            objSearch0.repositoryData.pulls_url="";
            objSearch0.repositoryData.forks_url="";
            objSearch0.repositoryData.collaborators_url="";
            

            const extectedDatabaseReturn = {
                user_id: 45272564,
                repo_id: 10270250,
                repositoryData: {
                    id: 10270250,
                    name: "react",
                    full_name: "facebook/react",
                    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
                    pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
                    forks_url: "https://api.github.com/repos/facebook/react/forks",
                    collaborators_url: "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
                }
            }
            await UserRepositories.deleteMany({});
            const response = await saveRepositoryData(objSearch0);
            expect(response.status).toBe(201);

            let getDatabaseResponse = await global.testRequest.put('/user_repositories/update').send(extectedDatabaseReturn);

            const userToSearch = { user_id: 45272564};
            getDatabaseResponse = await global.testRequest.get('/user_repositories/request').send(userToSearch);
            expect(getDatabaseResponse.body[0]).toEqual(
                expect.objectContaining(extectedDatabaseReturn));
        });

        it('DELETING: -> It should test the deleting proccess, creating some objects to Database, erasing one, and testing with a search if data was erased', async ()=>{

            const objSearch0 : iUserRepositories = {
                user_id: 45272560,
                repo_id: 10270250,
                repositoryData: {... searchRepoNormalized.data} as iRepositoryData,
            }

            const objSearch1 : iUserRepositories = {
                user_id: objSearch0.user_id,
                repo_id: 10270251,
                repositoryData: {...objSearch0.repositoryData}
            }

            const objSearch2 : iUserRepositories = {
                user_id: objSearch0.user_id,
                repo_id: 10270252,
                repositoryData: {...objSearch0.repositoryData}
            }

            await UserRepositories.deleteMany({});
            let response = await saveRepositoryData(objSearch0);
            expect(response.status).toBe(201);
            response = await saveRepositoryData(objSearch1);
            expect(response.status).toBe(201);
            response = await saveRepositoryData(objSearch2);
            expect(response.status).toBe(201);
            
            const extectedDatabaseReturn = [
                {
                  user_id: 45272560,
                  repo_id: 10270250,
                  repositoryData: {
                    id: 10270250,
                    name: "react",
                    full_name: "facebook/react",
                    private: false,
                    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
                    open_issues: 645,
                    pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
                    forks_count: 31645,
                    forks_url: "https://api.github.com/repos/facebook/react/forks",
                    stargazers_count: 159354,
                    collaborators_url: "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
                  },
                },
                {
                  user_id: 45272560,
                  repo_id: 10270252,
                  repositoryData: {
                    id: 10270250,
                    name: "react",
                    full_name: "facebook/react",
                    private: false,
                    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
                    open_issues: 645,
                    pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
                    forks_count: 31645,
                    forks_url: "https://api.github.com/repos/facebook/react/forks",
                    stargazers_count: 159354,
                    collaborators_url: "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
                  },
                },
            ]

            /******* Deleting to repo_id: 10270251 */
            const deleteResult = await global.testRequest.delete('/user_repositories/delete').send(objSearch1);

            const userToSearch = { user_id: 45272560};
            const getDatabaseResponse = await global.testRequest.get('/user_repositories/request').send(userToSearch);
            // console.log("getDatabaseResponse:",getDatabaseResponse.body);
            expect(getDatabaseResponse.body).toEqual(extectedDatabaseReturn);
        });
    })
});