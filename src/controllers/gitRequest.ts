import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('gitRequest')
export class GitRequestController {
  @Get('')
  public getGitData(_: Request, res: Response): void {
    res.send([{ resp: 'TODO - Objeto de retorno' }]);
  }
}
