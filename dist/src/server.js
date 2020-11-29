"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupServer = void 0;
require("./util/module-alias");
const core_1 = require("@overnightjs/core");
const body_parser_1 = __importDefault(require("body-parser"));
const gitRequest_1 = require("./controllers/gitRequest");
const userRepositories_1 = require("./controllers/userRepositories");
const database = __importStar(require("@src/database"));
const api_schema_json_1 = __importDefault(require("./api.schema.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_openapi_validator_1 = require("express-openapi-validator");
class SetupServer extends core_1.Server {
    constructor(port = 3000) {
        super();
        this.port = port;
    }
    setupExpress() {
        this.app.use(body_parser_1.default.json());
        this.setupControllers();
    }
    setupControllers() {
        const gitRequestController = new gitRequest_1.GitRequestController();
        const userRepositoriesController = new userRepositories_1.UserRepositoriesController();
        this.addControllers([gitRequestController, userRepositoriesController]);
    }
    async init() {
        this.setupExpress();
        this.setupControllers();
        await this.setupDatabase();
    }
    start() {
        this.app.listen(this.port, () => {
            console.info('Server listening of port: ', this.port);
        });
    }
    async close() {
        await database.close();
    }
    async setupDatabase() {
        await database.connect();
    }
    async docSetup() {
        this.app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(api_schema_json_1.default));
        await new express_openapi_validator_1.OpenApiValidator({
            apiSpec: api_schema_json_1.default,
            validateRequests: true,
            validateResponses: true,
        }).install(this.app);
    }
    getApp() {
        return this.app;
    }
}
exports.SetupServer = SetupServer;
//# sourceMappingURL=server.js.map