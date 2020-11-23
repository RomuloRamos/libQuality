"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gitClient_1 = require("@src/clients/gitClient");
const axios_1 = __importDefault(require("axios"));
const gitClient_searchRepo_React_json_1 = __importDefault(require("@test/fixtures/gitClient_searchRepo_React.json"));
const gitClient_searchRepo_React_normalized_json_1 = __importDefault(require("@test/fixtures/gitClient_searchRepo_React_normalized.json"));
const gitClient_searchFirstPull_React_json_1 = __importDefault(require("@test/fixtures/gitClient_searchFirstPull_React.json"));
const gitClient_searchIssues_json_1 = __importDefault(require("@test/fixtures/gitClient_searchIssues.json"));
jest.mock('axios');
describe("Search Repos in GitHub", () => {
    it("This test request a repository-list from GitHub and return the filtered information in the first element", async () => {
        const strRepoSeach = "React";
        const mockedAxios = axios_1.default;
        mockedAxios.get.mockResolvedValueOnce({ data: gitClient_searchRepo_React_json_1.default });
        mockedAxios.get.mockResolvedValueOnce(gitClient_searchIssues_json_1.default);
        const gitClient = new gitClient_1.GitClient(mockedAxios);
        const response = await gitClient.searchRepo(strRepoSeach);
        const objToCompare = {
            bFound: response.bFound,
            data: response.data,
            numberOfPullRequests: response.numberOfPullRequests,
            numberOfIssues: response.numberOfIssues,
            issuesList: response.issuesList
        };
        expect(objToCompare).toEqual(gitClient_searchRepo_React_normalized_json_1.default);
    });
    it("This test request for the first pull_request object from a GitHub project", async () => {
        const strRepoSeach = "facebook/react";
        const mockedAxios = axios_1.default;
        mockedAxios.get.mockResolvedValue(gitClient_searchFirstPull_React_json_1.default);
        const gitClient = new gitClient_1.GitClient(mockedAxios);
        const response = await gitClient.searchPullRequest(strRepoSeach);
        expect(response).toEqual(gitClient_searchFirstPull_React_json_1.default);
    });
});
//# sourceMappingURL=gitClient.test.js.map