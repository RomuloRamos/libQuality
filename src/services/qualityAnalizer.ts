import {GitClient, iRepositoryFound} from '@src/clients/gitClient';

export interface iQualityParameters {
    averageDays: number,
    varianceValue: number,
    stdDeviation: number,  
}

export interface iSearchRepoResult extends iQualityParameters, iRepositoryFound{}

export class QualityAnalizer {

    constructor(protected gitClient = new GitClient()){}

    public async searchRepositoryData(strRepository:string): Promise<iSearchRepoResult>{

        const objRepositoryFound = await this.gitClient.searchRepo(strRepository);        
        const objQualityParameters:iQualityParameters = {
            averageDays: 0,
            stdDeviation: 0,
            varianceValue: 0,
        };
        const objSearchRepoResult:iSearchRepoResult = {
            ...objQualityParameters, ...objRepositoryFound
        };
        const bResult = this.calculateAvgAgeIssue(objSearchRepoResult);
        if(!(bResult === true)){
            objSearchRepoResult.bFound = false;
        }
        return objSearchRepoResult;
    }

    //
    private calculateAvgAgeIssue(objSearchRepoResult: iSearchRepoResult): boolean{
        
        let timestampDifference = 0;
        let numbOfDaysTotal = 0;
        objSearchRepoResult.issuesList.forEach((objIssueNormalized:any) =>{

            const dateAux = new Date(objIssueNormalized.created_at);
            const dateNow = new Date();
            timestampDifference = (dateNow.getTime() - dateAux.getTime());
            numbOfDaysTotal += timestampDifference/(1000*60*60*24);
        });
        objSearchRepoResult.averageDays = numbOfDaysTotal/objSearchRepoResult.numberOfIssues;

        const bResult = this.calculateVarianceAgeIssue(objSearchRepoResult);
        return bResult;
    }

    private calculateVarianceAgeIssue(objSearchRepoResult: iSearchRepoResult): boolean{
        
        let timestampDiference = 0;
        let numbOfDaysTotal = 0;
        let varianceValue = 0;
        objSearchRepoResult.issuesList.forEach((objIssueNormalized:any) =>{

            const dateAux = new Date(objIssueNormalized.created_at);
            const dateNow = new Date();
            timestampDiference = (dateNow.getTime() - dateAux.getTime());
            numbOfDaysTotal = timestampDiference/(1000*60*60*24);
            const differenceValue = (numbOfDaysTotal - objSearchRepoResult.averageDays);
            varianceValue += ((differenceValue*differenceValue)/objSearchRepoResult.numberOfIssues);
        });
        objSearchRepoResult.varianceValue = varianceValue;
        objSearchRepoResult.stdDeviation = Math.sqrt(varianceValue);
        return true;
    }
}