"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = void 0;
const userRepository_1 = require("../../database/repositories/userRepository");
class UserStore {
    constructor() {
        this.repository = new userRepository_1.UserRepository();
    }
    getUserbyEmailOrId(id, email) {
        throw new Error("Method not implemented.");
    }
    // }
    addUser(request) {
        return this.repository.createUser(request);
    }
    deleteUser(id) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
}
exports.UserStore = UserStore;
//# sourceMappingURL=userStore.js.map