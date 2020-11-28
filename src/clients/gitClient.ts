import {AxiosResponse, AxiosStatic} from 'axios';//Changed to HttpUtil
import config, {IConfig} from 'config';
import * as HttpUtil from '@src/util/request';
import {iRepositoryData} from '@src/models/userRepositories';

//Creating a interface to response shape
export interface searchOrgResponse {    //Example:
    login: string;                      // "RomuloRamos",
    id: number;                         // 45272564,
    node_id: string;                    // "MDQ6VXNlcjQ1MjcyNTY0",
    url: string;                        // "https://api.github.com/users/RomuloRamos",
    html_url: string;                   // "https://github.com/RomuloRamos",
    gists_url: string;                  // "https://api.github.com/users/RomuloRamos/gists{/gist_id}",
    organizations_url: string;          // "https://api.github.com/users/RomuloRamos/orgs",
    repos_url: string;                  // "https://api.github.com/users/RomuloRamos/repos",
    type: string;                       // "User",
    site_admin: boolean;                // false,
    name: string;                       // RÔMULO FRANKLIN DE MEIRA RAMOS",
    company: string;                    // null,
    public_repos: number;               // 5,
    public_gists: number;               // 0,
    followers: number;                  // 0,
    following: number;                  // 0,
    created_at: string;                 // "2018-11-22T20:10:16Z",
    updated_at: string;                 // "2020-11-06T03:33:42Z"
}



export interface iRepositoryFound {
    bFound: boolean;
    data: iRepositoryData;
    numberOfPullRequests: number;
    numberOfIssues: number;
    issuesList: unknown[];
    bIssueIsNormalized: boolean;
}

export interface searchRepositoriesResponse {
    total_count: number;
    incomplete_results: boolean;
    items: iRepositoryData[];  
}

export interface iPagination {
    strPrev: string;
    strCurrent: string;
    strNext: string;
    strLast: string;
    strFirst: string;
}

export interface iIssueNormalized {
    [index: string]: string|unknown[];
    url: string;
    title: string;
    state: string;
    assignees: unknown[];
    created_at: string;
    updated_at: string;
}

const gitHubResourceConfig: IConfig = config.get('App.resources.Github');
export class GitClient {

    private pvStrBaseUrl = "";
    private pvStrUrlMiddle = "";
    private pvStrQuery = "";
    private pvObjHeader = {};

    constructor(protected request = new HttpUtil.Request()) {
        this.setBaseUrl(gitHubResourceConfig.get('apiUrl'));
        this.setUrlMiddle('/search/repositories');
        this.setUrlQuery('');

        const objHeader = {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${gitHubResourceConfig.get('apiToken')}`
        };
        this.setHeader(objHeader);
    }

    //Checking Key validation to each element received on object
    private isValidPoint(pointRerence: any, pointReceived: Partial<searchOrgResponse>): boolean{
        if(pointReceived && pointRerence) {
            
            const bResult: boolean = Object.keys(pointRerence).every(keyFound=>{
                const otherRESULT = !!(keyFound in pointReceived);
                return otherRESULT;
            });
            return bResult;//It shoul return true if all necessary object-keys existing in pointReceived
        }
        return false;
    }

    private normalizeResponseRepo(objResponse:searchRepositoriesResponse): iRepositoryFound{
        
        const objNormalized: iRepositoryData = {
            name: "",
            id:0,
            full_name: "",
            private: false,
            description: "",
            open_issues: 0,
            pulls_url:"",
            forks_count: 0,
            forks_url: "",
            stargazers_count: 0,
            collaborators_url: "",
        };
        const objRepositoryFound: iRepositoryFound = {
            bFound: false,
            data: {} as iRepositoryData,
            numberOfPullRequests: 0,
            numberOfIssues:0,
            issuesList: [],
            bIssueIsNormalized: false,
        }
        objRepositoryFound.bFound = this.isValidPoint(objNormalized, objResponse.items[0]);
        if(objRepositoryFound.bFound){
            const objToCopy:iRepositoryData = objResponse.items[0];
            Object.keys(objNormalized).forEach((key, other) => {

                objNormalized[key] = objToCopy[key];
            });
            objRepositoryFound.data = objNormalized;
        }

        return objRepositoryFound;
    }

    private getPaginationValue(objPagination: iPagination,strHeaderLink: string): boolean {
        const strLinkToIssuesPages = strHeaderLink.split(',');
        if(strLinkToIssuesPages.length === 2){//First or Last page
            const strArrFirstLink = strLinkToIssuesPages[0].split('; rel="next"');
            const strArrSecoundLink = strLinkToIssuesPages[1].split('; rel="last"')
            if((strArrFirstLink.length === 2) && (strArrSecoundLink.length === 2)){
               objPagination.strCurrent =  strArrFirstLink[0].trim().slice(1,-1);
               objPagination.strLast = strArrSecoundLink[0].trim().slice(1,-1);
               if((objPagination.strCurrent.length > 0) && (objPagination.strLast.length > 0)){
                   return true;
               }            
            }    
        }else if(strLinkToIssuesPages.length === 4){//Other wise
            const strArrFirstLink = strLinkToIssuesPages[0].split('; rel="prev"');
            const strArrSecoundLink = strLinkToIssuesPages[1].split('; rel="next"');
            const strArrThirdLink = strLinkToIssuesPages[2].split('; rel="last"');
            const strArrFourthlink = strLinkToIssuesPages[3].split('; rel="first"');
            if((strArrFirstLink.length === 2) && (strArrSecoundLink.length === 2)
            && (strArrThirdLink.length === 2)&& (strArrFourthlink.length === 2)){
                objPagination.strPrev = objPagination.strCurrent;
               objPagination.strCurrent =  strArrSecoundLink[0].trim().slice(1,-1);//Point current to next
               if(!(objPagination.strCurrent === "") && !(objPagination.strPrev === "")){
                   return true;
               }
            }
        }
        return false;
    }
    
    private async getIssuesAllPages(objPagination: iPagination,objRepositoryFound: iRepositoryFound): Promise<boolean>{
        
        let bResult = false;
        bResult = await this.searchIssues(objPagination)
        .then(async(objResponse: HttpUtil.Response)=>{
            bResult = true;
            objRepositoryFound.issuesList = objRepositoryFound.issuesList.concat(objResponse.data);
            if((!(objPagination.strCurrent === objPagination.strLast)) && (objResponse.headers?.link)){

                bResult = this.getPaginationValue(objPagination, objResponse.headers?.link)
                bResult = (bResult && await this.getIssuesAllPages(objPagination, objRepositoryFound));
            }    
            return bResult;
        }).catch(error=>{
            // bResult = false;
            console.log("getIssuesAllPages: error\n",error);
            return false
        });
        return bResult
    }

    public getBaseUrl(): string{

        return this.pvStrBaseUrl;
    }
    public getUrlMiddle(): string{
        
        return this.pvStrUrlMiddle;
    }
    public getUrlQuery(): string{
        
        return this.pvStrQuery;
    }
    public getHeader(): Record<string,unknown>{
        
        return this.pvObjHeader;
    }
    public setBaseUrl(strBaseUrl: string): void{
        
        this.pvStrBaseUrl = strBaseUrl;
    }
    public setUrlMiddle(strUrlMiddle: string): void{
        
        this.pvStrUrlMiddle = strUrlMiddle;
    }
    public setUrlQuery(strQuery: string): void{
        
        this.pvStrQuery = strQuery;
    }
    public setHeader(objHeader:Record<string,unknown>): void{
        
        this.pvObjHeader = {
            headers: objHeader
        };
    }
  
    public async searchRepo(strRepo: string, bSearchIssues = true): Promise<iRepositoryFound>{
        this.setBaseUrl('https://api.github.com');
        this.setUrlMiddle('/search/repositories');
        this.setUrlQuery(`?q=${strRepo}`);
        const response = await this.request.get<searchRepositoriesResponse>(
            `${this.pvStrBaseUrl + this.pvStrUrlMiddle + this.pvStrQuery}`, this.pvObjHeader
        );
        const objRepositoryFound: iRepositoryFound = this.normalizeResponseRepo(response.data);//Now, its only the first element on items array.
        if(objRepositoryFound.bFound && bSearchIssues){
            // objRepositoryFound.bFound = await this.searchNuberOfIssus(objRepositoryFound);
            objRepositoryFound.bFound = await this.searchAllIssues(objRepositoryFound);
        }
        return objRepositoryFound;
    }

    public async searchPullRequest(strRepoName: string, intPage = 1): Promise<HttpUtil.Response>{
        this.setBaseUrl('https://api.github.com');
        this.setUrlMiddle(`/repos/${strRepoName}/pulls`);
        this.setUrlQuery(`?state:open&per_page=${intPage}`);
        const response = await this.request.get(
            `${this.pvStrBaseUrl + this.pvStrUrlMiddle + this.pvStrQuery}`, this.pvObjHeader
        );
        return response;
    }

    public async searchNuberOfIssus(objRepositoryFound: iRepositoryFound): Promise<boolean>{

        if(objRepositoryFound?.bFound){
            const strRepoName:string = objRepositoryFound.data?.full_name ||"";
            const objPullRequest:HttpUtil.Response = await this.searchPullRequest(strRepoName);
            const strLinkToIssuesPages: string = objPullRequest.headers.link.split('>')[1].split('&')[2].split('=')[1];//This, clean the string until the interested number
            objRepositoryFound.numberOfPullRequests = Number(strLinkToIssuesPages);
            
            if(objRepositoryFound.data?.open_issues){//I'm testing, but other wise is impossible, because the object should be descarted if occur
                if(objRepositoryFound.data?.open_issues > objRepositoryFound.numberOfPullRequests){

                    objRepositoryFound.numberOfIssues = objRepositoryFound.data?.open_issues - objRepositoryFound.numberOfPullRequests;
                    return true;
                }
            }
        }
        return false;
    }

    public normalizeIssues(objRepositoryFound: iRepositoryFound): boolean{
        
        let bResult = false;
        let arrIssueNomalized: iIssueNormalized[] = [];
        if(objRepositoryFound.bFound){

            objRepositoryFound.issuesList.forEach((objIssue:any)=>{
                const objIssueNomalized: iIssueNormalized = {
                    url: "",
                    title:  "",
                    state:  "",
                    assignees: [],
                    created_at: "",
                    updated_at: "",
                }
                bResult = this.isValidPoint(objIssue, objIssue);
                if(bResult){//Valid object Issue
                    Object.keys(objIssueNomalized).forEach((key, index) => {
        
                        objIssueNomalized[key] = objIssue[key];
                    });    
                    arrIssueNomalized = [...arrIssueNomalized, objIssueNomalized];   
                }
            });
            if(bResult){
                objRepositoryFound.issuesList = [...arrIssueNomalized];
                objRepositoryFound.bIssueIsNormalized =true;
            }   
        }

        return bResult;
    }

    public async searchIssues(objPagination: iPagination): Promise<HttpUtil.Response>{

        const response = await this.request.get(
            objPagination.strCurrent, this.pvObjHeader
        );
        return response;
    }

    public async searchAllIssues(objRepositoryFound: iRepositoryFound, bNormalizeIssue = true): Promise<boolean>{

        const strRepoName:string = objRepositoryFound.data?.full_name ||"";
        const issuesPagination = 100;
        const objPagination: iPagination = {
            strCurrent : `https://api.github.com/repos/${strRepoName}/issues?per_page=${issuesPagination}&page=1&state=open`,
            strFirst : `https://api.github.com/repos/${strRepoName}/issues?per_page=${issuesPagination}&page=1&state=open`,
            strLast : "",
            strPrev: "",
            strNext: ""
        }
        let bResult = await this.getIssuesAllPages(objPagination, objRepositoryFound);
        if(bResult === true){
            objRepositoryFound.numberOfPullRequests = 0;
            objRepositoryFound.numberOfIssues = 0;
            objRepositoryFound.issuesList = objRepositoryFound.issuesList.filter((objIssue:any)=>{
                if(objIssue.pull_request){
                    objRepositoryFound.numberOfPullRequests++;
                    return false;
                }
                return true;
            });
            if(bNormalizeIssue){
                bResult = this.normalizeIssues(objRepositoryFound);
            }

            objRepositoryFound.numberOfIssues = objRepositoryFound.issuesList.length;
        }
        return bResult;
        
    }

    public async updateIssues(objRepositoryFound: iRepositoryFound): Promise<boolean>{
        if(objRepositoryFound.bFound && objRepositoryFound.data?.name){
            const objOldList = {...objRepositoryFound.issuesList||[]}
            const bResult = await this.searchAllIssues(objRepositoryFound);
            if(bResult){
                objRepositoryFound.data.open_issues = objRepositoryFound.numberOfIssues + objRepositoryFound.numberOfPullRequests;
                return true;
            }
            objRepositoryFound.issuesList = objOldList;
        }
        return false;
    }

    public async updateRepoInfo(objRepositoryFound: iRepositoryFound): Promise<boolean>{
        if(objRepositoryFound.bFound && objRepositoryFound.data?.name){
            const objNewRepositoryFound: iRepositoryFound = await this.searchRepo(objRepositoryFound.data.name);
            if(objNewRepositoryFound.bFound){
                objRepositoryFound.data = objNewRepositoryFound.data;
                return true;
            }
        }
        return false;
    }
}