import {GitClient,iRepositoryFound} from '@src/clients/gitClient';
import axios from 'axios';
// import searchOrgRomulo from '@test/fixtures/gitClient_searchOrg_romulo.json';
// import searchOrgRomuloNormalized from '@test/fixtures/gitClient_searchOrg_romulo_normalized.json';
import searchRepoReact from '@test/fixtures/gitClient_searchRepo_React.json';
import searchRepoReactNormalized from '@test/fixtures/gitClient_searchRepo_React_normalized.json';
import searchFirstPullReact from '@test/fixtures/gitClient_searchFirstPull_React.json';
import searchIssues from '@test/fixtures/gitClient_searchIssues.json';

jest.mock('axios');
describe("Search Repos in GitHub", ()=>{
    it("This test request a repository-list from GitHub and return the filtered information in the first element", async()=>{

        const strRepoSeach= "React";
        
        // axios.get = jest.fn().mockResolvedValue({data: searchOrgRomulo});
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        mockedAxios.get.mockResolvedValueOnce({data: searchRepoReact});//gitClient.searchRepo
        mockedAxios.get.mockResolvedValueOnce(searchIssues);//gitClient.searchIssue

        const gitClient = new GitClient(mockedAxios);
        const response:iRepositoryFound = await gitClient.searchRepo(strRepoSeach);
        const objToCompare = {
            bFound: response.bFound,
            data: response.data,
            numberOfPullRequests: response.numberOfPullRequests,
            numberOfIssues: response.numberOfIssues,
            issuesList: response.issuesList
        };
        expect(objToCompare).toEqual(searchRepoReactNormalized);
    })
    it("This test request for the first pull_request object from a GitHub project", async()=>{

        const strRepoSeach= "facebook/react";
        
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        mockedAxios.get.mockResolvedValue(searchFirstPullReact);

        const gitClient = new GitClient(mockedAxios);
        const response = await gitClient.searchPullRequest(strRepoSeach);
        expect(response).toEqual(searchFirstPullReact);
    })
});