import {AxiosResponse, AxiosStatic} from 'axios';

//Creating a interface to response shape
export interface searchOrgResponse {
    login: string;//"RomuloRamos",
    id: number;// 45272564,
    node_id: string;// "MDQ6VXNlcjQ1MjcyNTY0",
    url: string;// "https://api.github.com/users/RomuloRamos",
    html_url: string;// "https://github.com/RomuloRamos",
    gists_url: string;// "https://api.github.com/users/RomuloRamos/gists{/gist_id}",
    organizations_url: string;// "https://api.github.com/users/RomuloRamos/orgs",
    repos_url: string;// "https://api.github.com/users/RomuloRamos/repos",
    type: string;// "User",
    site_admin: boolean;// false,
    name: string;//" "RÔMULO FRANKLIN DE MEIRA RAMOS",
    company: string;// null,
    public_repos: number;// 5,
    public_gists: number;// 0,
    followers: number;// 0,
    following: number;// 0,
    created_at: string;// "2018-11-22T20:10:16Z",
    updated_at: string;// "2020-11-06T03:33:42Z"
}

export interface pointRepositories{
    [index: string]: string|boolean|number;
    name: string;
    full_name: string;
    private: boolean;
    description: string;
    open_issues: number;
    pulls_url: string;
}

export interface searchRepositoriesResponse {
    total_count: number;
    incomplete_results: boolean;
    items: pointRepositories[];  
}

export interface iRepositoryFound {
    bFound: boolean;
    data: pointRepositories|null;
    numberOfPullRequests: number;
    numberOfIssues: number;
    issuesList: unknown[];
    bIssueIsNormalized: boolean;
    averageDays: number;
    varianceValue: number;
    stdDeviation: number;
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

export class GitClient {
    private pvStrBaseUrl: string;
    private pvStrUrlMiddle: string;
    private pvStrQuery: string;
    private pvObjHeader = {};

    constructor(protected request: AxiosStatic){//This constructor expect a axios instance, atributed to property "request" inside the class
        this.pvStrBaseUrl = 'https://api.github.com/';
        this.pvStrUrlMiddle = '/search/repositories';
        this.pvStrQuery = '';
        const objHeader = {
                Accept: 'application/vnd.github.v3+json',
                Authorization: "token c08b844f099835e41fa70640b3da47982fabdb22"
        };
        this.setHeader(objHeader);
    }

    //Checking Key validation to each element received on object
    private isValidPoint(pointRerence: any, pointReceived: Partial<searchOrgResponse>): boolean{

            const bResult: boolean = Object.keys(pointRerence).every(keyFound=>{
                const otherRESULT = !!(keyFound in pointReceived);
                return otherRESULT;
            });
            return bResult;//It shoul return true if all necessary object-keys existing in pointReceived
    }

    private normalizeResponseRepo(objResponse:searchRepositoriesResponse): iRepositoryFound{
        
        const objNormalized: pointRepositories = {
            name: "",
            full_name: "",
            private: false,
            description: "",
            open_issues: 0,
            pulls_url:"",
        };
        const objRepositoryFound: iRepositoryFound = {
            bFound: false,
            data: null,
            numberOfPullRequests: 0,
            numberOfIssues:0,
            issuesList: [],
            bIssueIsNormalized: false,
            averageDays:0,
            varianceValue:0,
            stdDeviation:0,
        }
        objRepositoryFound.bFound = this.isValidPoint(objNormalized, objResponse.items[0]);
        if(objRepositoryFound.bFound){
            const objToCopy:pointRepositories = objResponse.items[0];
            Object.keys(objNormalized).forEach((key, other) => {

                objNormalized[key] = objToCopy[key];
            });
            objRepositoryFound.data = objNormalized;
        }

        return objRepositoryFound;
    }

    private normalizeIssue(objRepositoryFound: iRepositoryFound): boolean{
        
        let bResult = false;
        let arrIssueNomalized: iIssueNormalized[] = [];
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
            }
            arrIssueNomalized = [...arrIssueNomalized, objIssueNomalized];   
        });
        if(bResult){
            objRepositoryFound.issuesList = [...arrIssueNomalized];
            objRepositoryFound.bIssueIsNormalized =true;
        }   

        return objRepositoryFound.bFound;
    }

    private calculateAvgAgeIssue(objRepositoryFound: iRepositoryFound): boolean{
        
        let timestampDifference = 0;
        let numbOfDaysTotal = 0;
        objRepositoryFound.issuesList.forEach((objIssueNormalized:any) =>{

            const dateAux = new Date(objIssueNormalized.created_at);
            const dateNow = new Date();
            timestampDifference = (dateNow.getTime() - dateAux.getTime());
            numbOfDaysTotal += timestampDifference/(1000*60*60*24);
        });
        objRepositoryFound.averageDays = numbOfDaysTotal/objRepositoryFound.numberOfIssues;

        this.calculateVarianceAgeIssue(objRepositoryFound); //TODO - MUDAR DE LUGAR!
        return true;
    }

    private calculateVarianceAgeIssue(objRepositoryFound: iRepositoryFound): boolean{
        
        let timestampDiference = 0;
        let numbOfDaysTotal = 0;
        let varianceValue = 0;
        objRepositoryFound.issuesList.forEach((objIssueNormalized:any) =>{

            const dateAux = new Date(objIssueNormalized.created_at);
            const dateNow = new Date();
            timestampDiference = (dateNow.getTime() - dateAux.getTime());
            numbOfDaysTotal = timestampDiference/(1000*60*60*24);
            const differenceValue = (numbOfDaysTotal - objRepositoryFound.averageDays);
            varianceValue += ((differenceValue*differenceValue)/objRepositoryFound.numberOfIssues);
        });
        objRepositoryFound.varianceValue = varianceValue;
        objRepositoryFound.stdDeviation = Math.sqrt(varianceValue);
        return true;
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
        bResult = await this.searchOneIssue(objPagination)
        .then(async(objResponse: AxiosResponse)=>{
            bResult = true;
            objRepositoryFound.issuesList = objRepositoryFound.issuesList.concat(objResponse.data);
            if(!(objPagination.strCurrent === objPagination.strLast)){

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
  
    public async searchRepo(strRepo: string): Promise<iRepositoryFound>{
        this.setBaseUrl('https://api.github.com');
        this.setUrlMiddle('/search/repositories');
        this.setUrlQuery(`?q=${strRepo}`);
        const response = await this.request.get<searchRepositoriesResponse>(
            `${this.pvStrBaseUrl + this.pvStrUrlMiddle + this.pvStrQuery}`, this.pvObjHeader
        );
        const objRepositoryFound: iRepositoryFound = this.normalizeResponseRepo(response.data);//Now, its only the first element on items array.
        if(objRepositoryFound.bFound){
            // objRepositoryFound.bFound = await this.searchNuberOfIssus(objRepositoryFound);
            objRepositoryFound.bFound = await this.searchIssues(objRepositoryFound);
        }
        return objRepositoryFound;
    }

    public async searchPullRequest(strRepoName: string, intPage = 1): Promise<AxiosResponse>{
        this.setBaseUrl('https://api.github.com');
        this.setUrlMiddle(`/repos/${strRepoName}/pulls`);
        this.setUrlQuery(`?state:open&per_page=${intPage}`);
        const response = await this.request.get(
            `${this.pvStrBaseUrl + this.pvStrUrlMiddle + this.pvStrQuery}`, this.pvObjHeader
        );
        return response;
    }

    private async searchNuberOfIssus(objRepositoryFound: iRepositoryFound): Promise<boolean>{

        if(objRepositoryFound?.bFound){
            const strRepoName:string = objRepositoryFound.data?.full_name ||"";
            const objPullRequest:AxiosResponse = await this.searchPullRequest(strRepoName);
            // let strLinkToIssuesPages: string = objPullRequest.headers.link.split('>');
            // strLinkToIssuesPages = strLinkToIssuesPages[1];
            // strLinkToIssuesPages = strLinkToIssuesPages.split('&')[2].split('=')[1];
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

    public async searchOneIssue(objPagination: iPagination): Promise<AxiosResponse>{

        const response = await this.request.get(
            objPagination.strCurrent, this.pvObjHeader
        );
        return response;
    }

    public async searchIssues(objRepositoryFound: iRepositoryFound): Promise<boolean>{

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
            bResult = this.normalizeIssue(objRepositoryFound);

            objRepositoryFound.numberOfIssues = objRepositoryFound.issuesList.length;

            this.calculateAvgAgeIssue(objRepositoryFound);
        }
        return bResult;
        
    }
}