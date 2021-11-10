// this file declare our own types to TypeScript
declare namespace NodeJS {
  interface Global {
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
