import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('gitRequest')
export class GitRequestController {
  @Get('')
  public async searchRepository( _: Request, res: Response): Promise<void> {
     await function(){console.log("Parei aqui")};
  }
}
