import { SetupServer } from '@src/server'; //<===from main file using alias
import supertest from 'supertest';

let server: SetupServer;
beforeAll(async () => {
  //This will run before all initializing
  server = new SetupServer();
  await server.init();
  global.testRequest = supertest(server.getApp());
});

afterAll(async () => await server.close());
