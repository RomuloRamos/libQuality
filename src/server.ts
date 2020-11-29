import './util/module-alias';
import { Server } from '@overnightjs/core'; //Through this class, Overnight server the express to application
import { Application } from 'express';
import bodyParser from 'body-parser';
import { GitRequestController } from './controllers/gitRequest';
import { UserRepositoriesController } from './controllers/userRepositories';
import * as database from '@src/database';
import apiSchema from './api.schema.json';
import swaggerUi from 'swagger-ui-express';
import { OpenApiValidator} from 'express-openapi-validator';
import {OpenAPIV3} from 'express-openapi-validator/dist/framework/types';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  //This is responsible to configure the Server and Express
  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.setupControllers();
  }

  private setupControllers(): void {
    const gitRequestController = new GitRequestController();
    const userRepositoriesController = new UserRepositoriesController();
    this.addControllers([gitRequestController,userRepositoriesController]);
  }

  //This is responsible to Server Initializing
  public async init(): Promise<void> {
    this.setupExpress();
    // await this.docSetup();
    this.setupControllers();
    await  this.setupDatabase();
  }

  public start(): void{
    this.app.listen(this.port, ()=>{
      console.info('Server listening of port: ', this.port);
    })
  }
  
  public async close(): Promise<void>{
    await database.close();
  }

  private async setupDatabase():Promise<void>{
    await database.connect();
  }

  private async docSetup(): Promise<void>{
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSchema));
    await new OpenApiValidator({
      apiSpec: apiSchema as OpenAPIV3.Document,
      validateRequests: true,
      validateResponses: true,
    }).install(this.app);
  }

  public getApp(): Application {
    return this.app;
  }
  
}
