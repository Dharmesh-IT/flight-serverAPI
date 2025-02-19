"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSequelizeRepository = void 0;
const RepositoryError_1 = require("./RepositoryError");
class BaseSequelizeRepository {
    constructor(model) {
        this.model = model;
    }
    getAll() {
        return __awaiter(this, arguments, void 0, function* (options = {}) {
            try {
                return yield this.model.findAll({
                    where: options.where,
                    limit: options.limit,
                    offset: options.offset
                });
            }
            catch (error) {
                throw new RepositoryError_1.RepositoryError('Failed to fetch records', error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.model.findByPk(id);
                return record;
            }
            catch (error) {
                throw new RepositoryError_1.RepositoryError(`Failed to fetch record with id ${id}`, error);
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.model.create(data);
                return record;
            }
            catch (error) {
                throw new RepositoryError_1.RepositoryError('Failed to create record', error);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.getById(id);
                if (!record)
                    return null;
                return yield record.update(data);
            }
            catch (error) {
                throw new RepositoryError_1.RepositoryError(`Failed to update record with id ${id}`, error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield this.model.destroy({
                    where: { id }
                });
                return deleted > 0;
            }
            catch (error) {
                throw new RepositoryError_1.RepositoryError(`Failed to delete record with id ${id}`, error);
            }
        });
    }
    findOne(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.findOne({ where });
            }
            catch (error) {
                throw new RepositoryError_1.RepositoryError('Failed to fetch record', error);
            }
        });
    }
}
exports.BaseSequelizeRepository = BaseSequelizeRepository;
//# sourceMappingURL=BaseSquelizeRepository.js.map