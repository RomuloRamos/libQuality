import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import {QualityAnalizer, iSearchRepoResult} from '@src/services/qualityAnalizer';

@Controller('gitRequest')
export class GitRequestController {

/****** This service Should return the métrics to a repository */

/**
 * Search for a repository on GitHub, and calculate metrics about it issues, 
 * like avarage and standart deviation
 *
 * @author Rômulo Ramos
 * @param string - One string representing the Name or Full Name to Repository
 * @return {Object} Javascript Object representing the Repository found, the issues and metrics.
 */
  @Get('metrics/')
  public async searchRepository( req: Request, res: Response): Promise<void> {

    console.info('gitResquest/metrics/ ',req.query.strFullName);
    try {
          const strRepository:string = req.query.strFullName as string; 
          const qualityAnalizer = new QualityAnalizer();
          const result = await qualityAnalizer.searchRepositoryData(strRepository);
          console.info('gitResquest: ',result);
          res.status(200).send(result);
        
    } catch (error) {
      console.error("gitResquest :", error);
      res.status(401).send(error.message);      
    }
  }
}
