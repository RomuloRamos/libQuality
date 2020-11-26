//Main file

import { Application } from 'express';
import { Server } from '@overnightjs/core'; //Through this class, Overnight server the express to application
import bodyParser from 'body-parser';
import * as database from '@src/database';
import { GitRequestController } from './controllers/gitRequest';
import { RepositorySearchController } from './controllers/searchRepository';
import './util/module-alias';


export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  //This is responsible to configure the Server and Express
  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const gitRequestController = new GitRequestController();
    const repositorySearchController = new RepositorySearchController();
    this.addControllers([gitRequestController,repositorySearchController]);
  }

  //This is responsible to Server Initializing
  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
    await  this.setupDatabase();
  }

  public async close(): Promise<void>{
    await database.close();
  }

  private async setupDatabase():Promise<void>{
    await database.connect();
  }

  public getApp(): Application {
    return this.app;
  }
}
