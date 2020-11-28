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
exports.GitClient = void 0;
const config_1 = __importDefault(require("config"));
const HttpUtil = __importStar(require("@src/util/request"));
const gitHubResourceConfig = config_1.default.get('App.resources.Github');
class GitClient {
    constructor(request = new HttpUtil.Request()) {
        this.request = request;
        this.pvStrBaseUrl = "";
        this.pvStrUrlMiddle = "";
        this.pvStrQuery = "";
        this.pvObjHeader = {};
        this.setBaseUrl(gitHubResourceConfig.get('apiUrl'));
        this.setUrlMiddle('/search/repositories');
        this.setUrlQuery('');
        const objHeader = {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${gitHubResourceConfig.get('apiToken')}`
        };
        this.setHeader(objHeader);
    }
    isValidPoint(pointRerence, pointReceived) {
        if (pointReceived && pointRerence) {
            const bResult = Object.keys(pointRerence).every(keyFound => {
                const otherRESULT = !!(keyFound in pointReceived);
                return otherRESULT;
            });
            return bResult;
        }
        return false;
    }
    normalizeResponseRepo(objResponse) {
        const objNormalized = {
            name: "",
            id: 0,
            full_name: "",
            private: false,
            description: "",
            open_issues: 0,
            pulls_url: "",
            forks_count: 0,
            forks_url: "",
            stargazers_count: 0,
            collaborators_url: "",
        };
        const objRepositoryFound = {
            bFound: false,
            data: {},
            numberOfPullRequests: 0,
            numberOfIssues: 0,
            issuesList: [],
            bIssueIsNormalized: false,
        };
        objRepositoryFound.bFound = this.isValidPoint(objNormalized, objResponse.items[0]);
        if (objRepositoryFound.bFound) {
            const objToCopy = objResponse.items[0];
            Object.keys(objNormalized).forEach((key, other) => {
                objNormalized[key] = objToCopy[key];
            });
            objRepositoryFound.data = objNormalized;
        }
        return objRepositoryFound;
    }
    getPaginationValue(objPagination, strHeaderLink) {
        const strLinkToIssuesPages = strHeaderLink.split(',');
        if (strLinkToIssuesPages.length === 2) {
            const strArrFirstLink = strLinkToIssuesPages[0].split('; rel="next"');
            const strArrSecoundLink = strLinkToIssuesPages[1].split('; rel="last"');
            if ((strArrFirstLink.length === 2) && (strArrSecoundLink.length === 2)) {
                objPagination.strCurrent = strArrFirstLink[0].trim().slice(1, -1);
                objPagination.strLast = strArrSecoundLink[0].trim().slice(1, -1);
                if ((objPagination.strCurrent.length > 0) && (objPagination.strLast.length > 0)) {
                    return true;
                }
            }
        }
        else if (strLinkToIssuesPages.length === 4) {
            const strArrFirstLink = strLinkToIssuesPages[0].split('; rel="prev"');
            const strArrSecoundLink = strLinkToIssuesPages[1].split('; rel="next"');
            const strArrThirdLink = strLinkToIssuesPages[2].split('; rel="last"');
            const strArrFourthlink = strLinkToIssuesPages[3].split('; rel="first"');
            if ((strArrFirstLink.length === 2) && (strArrSecoundLink.length === 2)
                && (strArrThirdLink.length === 2) && (strArrFourthlink.length === 2)) {
                objPagination.strPrev = objPagination.strCurrent;
                objPagination.strCurrent = strArrSecoundLink[0].trim().slice(1, -1);
                if (!(objPagination.strCurrent === "") && !(objPagination.strPrev === "")) {
                    return true;
                }
            }
        }
        return false;
    }
    async getIssuesAllPages(objPagination, objRepositoryFound) {
        let bResult = false;
        bResult = await this.searchIssues(objPagination)
            .then(async (objResponse) => {
            var _a, _b;
            bResult = true;
            objRepositoryFound.issuesList = objRepositoryFound.issuesList.concat(objResponse.data);
            if ((!(objPagination.strCurrent === objPagination.strLast)) && ((_a = objResponse.headers) === null || _a === void 0 ? void 0 : _a.link)) {
                bResult = this.getPaginationValue(objPagination, (_b = objResponse.headers) === null || _b === void 0 ? void 0 : _b.link);
                bResult = (bResult && await this.getIssuesAllPages(objPagination, objRepositoryFound));
            }
            return bResult;
        }).catch(error => {
            console.log("getIssuesAllPages: error\n", error);
            return false;
        });
        return bResult;
    }
    getBaseUrl() {
        return this.pvStrBaseUrl;
    }
    getUrlMiddle() {
        return this.pvStrUrlMiddle;
    }
    getUrlQuery() {
        return this.pvStrQuery;
    }
    getHeader() {
        return this.pvObjHeader;
    }
    setBaseUrl(strBaseUrl) {
        this.pvStrBaseUrl = strBaseUrl;
    }
    setUrlMiddle(strUrlMiddle) {
        this.pvStrUrlMiddle = strUrlMiddle;
    }
    setUrlQuery(strQuery) {
        this.pvStrQuery = strQuery;
    }
    setHeader(objHeader) {
        this.pvObjHeader = {
            headers: objHeader
        };
    }
    async searchRepo(strRepo, bSearchIssues = true) {
        this.setBaseUrl('https://api.github.com');
        this.setUrlMiddle('/search/repositories');
        this.setUrlQuery(`?q=${strRepo}`);
        const response = await this.request.get(`${this.pvStrBaseUrl + this.pvStrUrlMiddle + this.pvStrQuery}`, this.pvObjHeader);
        const objRepositoryFound = this.normalizeResponseRepo(response.data);
        if (objRepositoryFound.bFound && bSearchIssues) {
            objRepositoryFound.bFound = await this.searchAllIssues(objRepositoryFound);
        }
        return objRepositoryFound;
    }
    async searchPullRequest(strRepoName, intPage = 1) {
        this.setBaseUrl('https://api.github.com');
        this.setUrlMiddle(`/repos/${strRepoName}/pulls`);
        this.setUrlQuery(`?state:open&per_page=${intPage}`);
        const response = await this.request.get(`${this.pvStrBaseUrl + this.pvStrUrlMiddle + this.pvStrQuery}`, this.pvObjHeader);
        return response;
    }
    async searchNuberOfIssus(objRepositoryFound) {
        var _a, _b, _c, _d;
        if (objRepositoryFound === null || objRepositoryFound === void 0 ? void 0 : objRepositoryFound.bFound) {
            const strRepoName = ((_a = objRepositoryFound.data) === null || _a === void 0 ? void 0 : _a.full_name) || "";
            const objPullRequest = await this.searchPullRequest(strRepoName);
            const strLinkToIssuesPages = objPullRequest.headers.link.split('>')[1].split('&')[2].split('=')[1];
            objRepositoryFound.numberOfPullRequests = Number(strLinkToIssuesPages);
            if ((_b = objRepositoryFound.data) === null || _b === void 0 ? void 0 : _b.open_issues) {
                if (((_c = objRepositoryFound.data) === null || _c === void 0 ? void 0 : _c.open_issues) > objRepositoryFound.numberOfPullRequests) {
                    objRepositoryFound.numberOfIssues = ((_d = objRepositoryFound.data) === null || _d === void 0 ? void 0 : _d.open_issues) - objRepositoryFound.numberOfPullRequests;
                    return true;
                }
            }
        }
        return false;
    }
    normalizeIssues(objRepositoryFound) {
        let bResult = false;
        let arrIssueNomalized = [];
        if (objRepositoryFound.bFound) {
            objRepositoryFound.issuesList.forEach((objIssue) => {
                const objIssueNomalized = {
                    url: "",
                    title: "",
                    state: "",
                    assignees: [],
                    created_at: "",
                    updated_at: "",
                };
                bResult = this.isValidPoint(objIssue, objIssue);
                if (bResult) {
                    Object.keys(objIssueNomalized).forEach((key, index) => {
                        objIssueNomalized[key] = objIssue[key];
                    });
                    arrIssueNomalized = [...arrIssueNomalized, objIssueNomalized];
                }
            });
            if (bResult) {
                objRepositoryFound.issuesList = [...arrIssueNomalized];
                objRepositoryFound.bIssueIsNormalized = true;
            }
        }
        return bResult;
    }
    async searchIssues(objPagination) {
        const response = await this.request.get(objPagination.strCurrent, this.pvObjHeader);
        return response;
    }
    async searchAllIssues(objRepositoryFound, bNormalizeIssue = true) {
        var _a;
        const strRepoName = ((_a = objRepositoryFound.data) === null || _a === void 0 ? void 0 : _a.full_name) || "";
        const issuesPagination = 100;
        const objPagination = {
            strCurrent: `https://api.github.com/repos/${strRepoName}/issues?per_page=${issuesPagination}&page=1&state=open`,
            strFirst: `https://api.github.com/repos/${strRepoName}/issues?per_page=${issuesPagination}&page=1&state=open`,
            strLast: "",
            strPrev: "",
            strNext: ""
        };
        let bResult = await this.getIssuesAllPages(objPagination, objRepositoryFound);
        if (bResult === true) {
            objRepositoryFound.numberOfPullRequests = 0;
            objRepositoryFound.numberOfIssues = 0;
            objRepositoryFound.issuesList = objRepositoryFound.issuesList.filter((objIssue) => {
                if (objIssue.pull_request) {
                    objRepositoryFound.numberOfPullRequests++;
                    return false;
                }
                return true;
            });
            if (bNormalizeIssue) {
                bResult = this.normalizeIssues(objRepositoryFound);
            }
            objRepositoryFound.numberOfIssues = objRepositoryFound.issuesList.length;
        }
        return bResult;
    }
    async updateIssues(objRepositoryFound) {
        var _a;
        if (objRepositoryFound.bFound && ((_a = objRepositoryFound.data) === null || _a === void 0 ? void 0 : _a.name)) {
            const objOldList = { ...objRepositoryFound.issuesList || [] };
            const bResult = await this.searchAllIssues(objRepositoryFound);
            if (bResult) {
                objRepositoryFound.data.open_issues = objRepositoryFound.numberOfIssues + objRepositoryFound.numberOfPullRequests;
                return true;
            }
            objRepositoryFound.issuesList = objOldList;
        }
        return false;
    }
    async updateRepoInfo(objRepositoryFound) {
        var _a;
        if (objRepositoryFound.bFound && ((_a = objRepositoryFound.data) === null || _a === void 0 ? void 0 : _a.name)) {
            const objNewRepositoryFound = await this.searchRepo(objRepositoryFound.data.name);
            if (objNewRepositoryFound.bFound) {
                objRepositoryFound.data = objNewRepositoryFound.data;
                return true;
            }
        }
        return false;
    }
}
exports.GitClient = GitClient;
//# sourceMappingURL=gitClient.js.map