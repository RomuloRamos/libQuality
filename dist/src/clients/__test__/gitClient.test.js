"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gitClient_1 = require("@src/clients/gitClient");
const HttpUtil = __importStar(require("@src/util/request"));
const gitClient_searchRepo_React_json_1 = __importDefault(require("@test/fixtures/gitClient_searchRepo_React.json"));
const gitClient_searchRepo_React_normalized_json_1 = __importDefault(require("@test/fixtures/gitClient_searchRepo_React_normalized.json"));
const gitClient_searchFirstPull_React_json_1 = __importDefault(require("@test/fixtures/gitClient_searchFirstPull_React.json"));
const gitClient_searchIssues_json_1 = __importDefault(require("@test/fixtures/gitClient_searchIssues.json"));
jest.mock('@src/util/request');
describe("Search Repos in GitHub", () => {
    const mockedRequest = new HttpUtil.Request;
    it("This test request a repository-list from GitHub and return the filtered information in the first element", async () => {
        mockedRequest.get.mockResolvedValueOnce({ data: gitClient_searchRepo_React_json_1.default });
        mockedRequest.get.mockResolvedValueOnce(gitClient_searchIssues_json_1.default);
        const gitClient = new gitClient_1.GitClient(mockedRequest);
        const strRepoSeach = "React";
        const response = await gitClient.searchRepo(strRepoSeach);
        expect(response).toEqual(gitClient_searchRepo_React_normalized_json_1.default);
    });
    it("This test request for the first pull_request object from a GitHub project", async () => {
        const strRepoSeach = "facebook/react";
        mockedRequest.get.mockResolvedValue(gitClient_searchFirstPull_React_json_1.default);
        const gitClient = new gitClient_1.GitClient(mockedRequest);
        const response = await gitClient.searchPullRequest(strRepoSeach);
        expect(response).toEqual(gitClient_searchFirstPull_React_json_1.default);
    });
});
//# sourceMappingURL=gitClient.test.js.map