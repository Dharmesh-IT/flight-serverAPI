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
exports.BaseRepository = void 0;
class BaseRepository {
    constructor() {
        this.items = [];
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.items;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = this.items.find((i) => i.id === id);
            return item || null;
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.items.push(item);
            return item;
        });
    }
    update(id, updatedItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.items.findIndex((i) => i.id === id);
            if (index === -1)
                return null;
            this.items[index] = Object.assign(Object.assign({}, this.items[index]), updatedItem);
            return this.items[index];
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.items.findIndex((i) => i.id === id);
            if (index === -1)
                return false;
            this.items.splice(index, 1);
            return true;
        });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map