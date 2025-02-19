import { Model, ModelCtor } from 'sequelize-typescript';
import { IRepository } from './IRepository';
import { RepositoryError } from './RepositoryError';
import { WhereOptions } from 'sequelize';

export abstract class BaseSequelizeRepository<T extends Model> implements IRepository<T> {
    constructor(protected readonly model: ModelCtor<T>) { }

    async getAll(options: { where?: WhereOptions<T>; limit?: number; offset?: number } = {}): Promise<T[]> {
        try {
            return await this.model.findAll({
                where: options.where,
                limit: options.limit,
                offset: options.offset
            });
        } catch (error) {
            throw new RepositoryError('Failed to fetch records', error);
        }
    }

    async getById(id: number): Promise<T | null> {
        try {
            const record = await this.model.findByPk(id);
            return record;
        } catch (error) {
            throw new RepositoryError(`Failed to fetch record with id ${id}`, error);
        }
    }

    async create(data: Partial<T>): Promise<T> {
        try {
            const record = await this.model.create(data as any);
            return record;
        } catch (error) {
            throw new RepositoryError('Failed to create record', error);
        }
    }

    async update(id: number, data: Partial<T>): Promise<T | null> {
        try {
            const record = await this.getById(id);
            if (!record) return null;

            return await record.update(data);
        } catch (error) {
            throw new RepositoryError(`Failed to update record with id ${id}`, error);
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            const deleted = await this.model.destroy({
                where: { id } as WhereOptions<T>
            });
            return deleted > 0;
        } catch (error) {
            throw new RepositoryError(`Failed to delete record with id ${id}`, error);
        }
    }

    protected async findOne(where: WhereOptions<T>): Promise<T | null> {
        try {
            return await this.model.findOne({ where });
        } catch (error) {
            throw new RepositoryError('Failed to fetch record', error);
        }
    }
}