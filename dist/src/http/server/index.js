"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baserouter = exports.app = void 0;
const bootstrap_1 = __importDefault(require("./bootstrap"));
exports.app = bootstrap_1.default;
const routes_1 = __importDefault(require("./routes"));
exports.baserouter = routes_1.default;
//# sourceMappingURL=index.js.map