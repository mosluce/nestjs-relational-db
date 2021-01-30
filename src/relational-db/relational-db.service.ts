import { WinstonLoggerService } from '@ccmos/nestjs-winston-logger';
import { Injectable } from '@nestjs/common';
import { Connection, EntityManager } from 'typeorm';

@Injectable()
export class RelationalDbService {
  constructor(
    private connection: Connection,
    private logger?: WinstonLoggerService,
  ) {
    this.logger.setContext(RelationalDbService.name);
  }

  async transiction<T>(fn: (manager: EntityManager) => Promise<T>) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const result = await fn(queryRunner.manager);
      await queryRunner.commitTransaction();
      return result;
    } catch (err) {
      this.logger?.warn('transiction.error', {
        error: {
          name: err.name,
          code: err.code,
          message: err.message,
          stack: err.stack,
        },
      });
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
