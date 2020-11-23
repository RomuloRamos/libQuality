"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupServer = void 0;
require("./util/module-alias");
const core_1 = require("@overnightjs/core");
const body_parser_1 = __importDefault(require("body-parser"));
const gitRequest_1 = require("./controllers/gitRequest");
class SetupServer extends core_1.Server {
    constructor(port = 3000) {
        super();
        this.port = port;
    }
    setupExpress() {
        this.app.use(body_parser_1.default.json());
    }
    setupControllers() {
        const gitRequestController = new gitRequest_1.GitRequestController();
        this.addControllers([gitRequestController]);
    }
    init() {
        this.setupExpress();
        this.setupControllers();
    }
    getApp() {
        return this.app;
    }
}
exports.SetupServer = SetupServer;
//# sourceMappingURL=server.js.map