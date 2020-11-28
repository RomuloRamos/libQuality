import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import {QualityAnalizer, iSearchRepoResult} from '@src/services/qualityAnalizer';

@Controller('gitRequest')
export class GitRequestController {

  /****** This service Should return the métrics to a repository */
  @Get('metrics')
  public async searchRepository( req: Request, res: Response): Promise<void> {

    console.info('gitResquest/metrics: ',req.body);
    const strRepository:string = req.body.strFullName; 
    const qualityAnalizer = new QualityAnalizer();
    const result = await qualityAnalizer.searchRepositoryData(strRepository);
    res.status(200).send(result);
  }

    /****** This service Should return the métrics to a repository */
}
