import {GitClient,iRepositoryFound} from '@src/clients/gitClient';
import * as HttpUtil from '@src/util/request';
import searchRepoReact from '@test/fixtures/gitClient_searchRepo_React.json';
import searchRepoReactNormalized from '@test/fixtures/gitClient_searchRepo_React_normalized.json';
import searchFirstPullReact from '@test/fixtures/gitClient_searchFirstPull_React.json';
import searchIssues from '@test/fixtures/gitClient_searchIssues.json';

jest.mock('@src/util/request');

describe("Search Repos in GitHub", ()=>{

    const mockedRequest = new HttpUtil.Request as jest.Mocked<HttpUtil.Request>;
    
    it("This test request a repository-list from GitHub and return the filtered information in the first element", async()=>{

        mockedRequest.get.mockResolvedValueOnce({data: searchRepoReact} as HttpUtil.Response);//gitClient.searchRepo
        mockedRequest.get.mockResolvedValueOnce(searchIssues as HttpUtil.Response);//gitClient.searchIssue
        
        const gitClient = new GitClient(mockedRequest);
        const strRepoSeach= "React";    
        const response:iRepositoryFound = await gitClient.searchRepo(strRepoSeach);

        expect(response).toEqual(searchRepoReactNormalized);
    })
    it("This test request for the first pull_request object from a GitHub project", async()=>{

        const strRepoSeach= "facebook/react";
        
        mockedRequest.get.mockResolvedValue(searchFirstPullReact as HttpUtil.Response);

        const gitClient = new GitClient(mockedRequest);
        const response = await gitClient.searchPullRequest(strRepoSeach);
        expect(response).toEqual(searchFirstPullReact);
    })
});