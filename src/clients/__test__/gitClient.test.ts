import {GitClient} from '@src/clients/gitClient';
import axios from 'axios';
// import searchOrgRomulo from '@test/fixtures/gitClient_searchOrg_romulo.json';
// import searchOrgRomuloNormalized from '@test/fixtures/gitClient_searchOrg_romulo_normalized.json';
import searchRepoReact from '@test/fixtures/gitClient_searchRepo_React.json';
import searchRepoReactNormalized from '@test/fixtures/gitClient_searchRepo_React_normalized.json';
import searchFirstPullReact from '@test/fixtures/gitClient_searchFirstPull_React.json';

// jest.mock('axios');
describe("Search Repos in GitHub", ()=>{
    it("This test request a repository-list from GitHub and return the filtered information in the first element", async()=>{

        const strRepoSeach= "React";
        
        // axios.get = jest.fn().mockResolvedValue({data: searchOrgRomulo});
        // const mockedAxios = axios as jest.Mocked<typeof axios>;
        // mockedAxios.get.mockResolvedValue({data: searchRepoReact});

        const gitClient = new GitClient(axios);//(mockedAxios);
        const response = await gitClient.searchRepo(strRepoSeach);
        expect(response).toEqual(searchRepoReactNormalized);
    })
    // it("This test request for the first pull_request object from a GitHub project", async()=>{

    //     const strRepoSeach= "facebook/react";
        
    //     // const mockedAxios = axios as jest.Mocked<typeof axios>;
    //     // mockedAxios.get.mockResolvedValue(searchFirstPullReact);

    //     const gitClient = new GitClient(axios);//(mockedAxios);
    //     const response = await gitClient.searchOnePullRequest(strRepoSeach);
    //     expect(response).toEqual(searchFirstPullReact);
    // })
});