"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gitClient_1 = require("@src/clients/gitClient");
const axios_1 = __importDefault(require("axios"));
const gitClient_searchOrg_romulo_json_1 = __importDefault(require("@test/fixtures/gitClient_searchOrg_romulo.json"));
const gitClient_searchOrg_romulo_normalized_json_1 = __importDefault(require("@test/fixtures/gitClient_searchOrg_romulo_normalized.json"));
jest.mock('axios');
describe("Git Client", () => {
    it("Should return a list-organization-repositories to a seach", async () => {
        const strOrg = "octokit";
        const strType = "private";
        axios_1.default.get = jest.fn().mockResolvedValue(gitClient_searchOrg_romulo_json_1.default);
        const gitClient = new gitClient_1.GitClient(axios_1.default);
        const response = await gitClient.searchOrg(strOrg, strType);
        expect(response).toEqual({ searchOrgRomuloNormalized: gitClient_searchOrg_romulo_normalized_json_1.default });
    });
});
//# sourceMappingURL=gitClient.test.js.map