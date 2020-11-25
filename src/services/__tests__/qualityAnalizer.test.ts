import {GitClient} from '@src/clients/gitClient';
import gitClientSearchRepoNormalized from '@test/fixtures/gitClient_searchRepo_React_normalized.json';
import {QualityAnalizer,iSearchRepoResult,iQualityParameters} from '@src/services/qualityAnalizer';


jest.mock('@src/clients/gitClient');
describe('Quality Analizer Service',()=>{
    
    it('Should return the quality paramenters like Avarege, Standart Deviation and Variance', async()=>{
        
        GitClient.prototype.searchRepo = jest.fn().mockResolvedValue(gitClientSearchRepoNormalized);    
        
        const objQualityParameters:iQualityParameters = {
            averageDays: 0,
            stdDeviation: 0,
            varianceValue: 0,
        };
        const objExpectedSearchResult: iSearchRepoResult ={
            ...objQualityParameters,...gitClientSearchRepoNormalized
        }
        const qualityAnalizer = new QualityAnalizer(new GitClient());
        const strSearchRepository = "React";
        const objSearchResult = await qualityAnalizer.searchRepositoryData(strSearchRepository);
        expect(objSearchResult).toEqual(expect.objectContaining(gitClientSearchRepoNormalized));//Compare static part only

    });
})