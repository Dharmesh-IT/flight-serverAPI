import { IRepository } from "./IRepository";

export abstract class BaseRepository<T> implements IRepository<T> {

    protected items: T[] = [];

    async getAll(): Promise<T[]> {
        return this.items;
    }

    async getById(id: number): Promise<T | null> {
        const item = this.items.find((i: any) => i.id === id);
        return item || null;
    }
    async create(item: T): Promise<T> {
        this.items.push(item);
        return item;
    }

    async update(id: number, updatedItem: T): Promise<T | null> {
        const index = this.items.findIndex((i: any) => i.id === id);
        if (index === -1) return null;

        this.items[index] = { ...(this.items[index] as any), ...updatedItem };
        return this.items[index];
    }

    async delete(id: number): Promise<boolean> {
        const index = this.items.findIndex((i: any) => i.id === id);
        if (index === -1) return false;

        this.items.splice(index, 1);
        return true;
    }
}