"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const PORT = 3000;
/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        // Express middleware
        this.app.use((0, cors_1.default)({
            optionsSuccessStatus: 200
        }));
        this.app.use((0, body_parser_1.urlencoded)({
            extended: true
        }));
        this.app.use((0, body_parser_1.json)());
        this.app.listen(PORT, () => {
            console.log('info', '--> Server successfully started at port %d', PORT);
        });
        // routes.initRoutes(this.app)
    }
}
exports.Server = Server;
new Server();
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.send('The sedulous hyena ate the antelope!');
// });
// app.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(`server is listening on ${port}`);
// });
//# sourceMappingURL=app.js.map