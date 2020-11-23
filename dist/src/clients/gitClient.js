"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitClient = void 0;
class GitClient {
    constructor(request) {
        this.request = request;
        this.pvObjHeader = {};
        this.pvStrBaseUrl = 'https://api.github.com/';
        this.pvStrUrlMiddle = '/search/repositories';
        this.pvStrQuery = '';
        const objHeader = {
            Accept: 'application/vnd.github.v3+json',
            Authorization: "token c08b844f099835e41fa70640b3da47982fabdb22"
        };
        this.setHeader(objHeader);
    }
    isValidPoint(pointRerence, pointReceived) {
        const bResult = Object.keys(pointRerence).every(keyFound => {
            const otherRESULT = !!(keyFound in pointReceived);
            return otherRESULT;
        });
        return bResult;
    }
    normalizeResponseRepo(objResponse) {
        const objNormalized = {
            name: "",
            full_name: "",
            private: false,
            description: "",
            open_issues: 0,
            pulls_url: "",
        };
        const objRepositoryFound = {
            bFound: false,
            data: null,
            numberOfPullRequests: 0,
            numberOfIssues: 0,
            issuesList: [],
            bIssueIsNormalized: false,
            averageDays: 0,
            varianceValue: 0,
            stdDeviation: 0,
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
    normalizeIssue(objRepositoryFound) {
        let bResult = false;
        let arrIssueNomalized = [];
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
            }
            arrIssueNomalized = [...arrIssueNomalized, objIssueNomalized];
        });
        if (bResult) {
            objRepositoryFound.issuesList = [...arrIssueNomalized];
            objRepositoryFound.bIssueIsNormalized = true;
        }
        return objRepositoryFound.bFound;
    }
    calculateAvgAgeIssue(objRepositoryFound) {
        let timestampDifference = 0;
        let numbOfDaysTotal = 0;
        objRepositoryFound.issuesList.forEach((objIssueNormalized) => {
            const dateAux = new Date(objIssueNormalized.created_at);
            const dateNow = new Date();
            timestampDifference = (dateNow.getTime() - dateAux.getTime());
            numbOfDaysTotal += timestampDifference / (1000 * 60 * 60 * 24);
        });
        objRepositoryFound.averageDays = numbOfDaysTotal / objRepositoryFound.numberOfIssues;
        this.calculateVarianceAgeIssue(objRepositoryFound);
        return true;
    }
    calculateVarianceAgeIssue(objRepositoryFound) {
        let timestampDiference = 0;
        let numbOfDaysTotal = 0;
        let varianceValue = 0;
        objRepositoryFound.issuesList.forEach((objIssueNormalized) => {
            const dateAux = new Date(objIssueNormalized.created_at);
            const dateNow = new Date();
            timestampDiference = (dateNow.getTime() - dateAux.getTime());
            numbOfDaysTotal = timestampDiference / (1000 * 60 * 60 * 24);
            const differenceValue = (numbOfDaysTotal - objRepositoryFound.averageDays);
            varianceValue += ((differenceValue * differenceValue) / objRepositoryFound.numberOfIssues);
        });
        objRepositoryFound.varianceValue = varianceValue;
        objRepositoryFound.stdDeviation = Math.sqrt(varianceValue);
        return true;
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
        bResult = await this.searchIssue(objPagination)
            .then(async (objResponse) => {
            var _a;
            bResult = true;
            objRepositoryFound.issuesList = objRepositoryFound.issuesList.concat(objResponse.data);
            if ((!(objPagination.strCurrent === objPagination.strLast)) && (objResponse.headers.link)) {
                bResult = this.getPaginationValue(objPagination, (_a = objResponse.headers) === null || _a === void 0 ? void 0 : _a.link);
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
    async searchRepo(strRepo) {
        this.setBaseUrl('https://api.github.com');
        this.setUrlMiddle('/search/repositories');
        this.setUrlQuery(`?q=${strRepo}`);
        const response = await this.request.get(`${this.pvStrBaseUrl + this.pvStrUrlMiddle + this.pvStrQuery}`, this.pvObjHeader);
        const objRepositoryFound = this.normalizeResponseRepo(response.data);
        if (objRepositoryFound.bFound) {
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
    async searchIssue(objPagination) {
        const response = await this.request.get(objPagination.strCurrent, this.pvObjHeader);
        return response;
    }
    async searchAllIssues(objRepositoryFound) {
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
            bResult = this.normalizeIssue(objRepositoryFound);
            objRepositoryFound.numberOfIssues = objRepositoryFound.issuesList.length;
            this.calculateAvgAgeIssue(objRepositoryFound);
        }
        return bResult;
    }
}
exports.GitClient = GitClient;
//# sourceMappingURL=gitClient.js.map