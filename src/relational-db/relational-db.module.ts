import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  RelationalDbModuleAsyncOptions as RelationalDbModuleAsyncOptions,
  RelationalDbModuleOptions as RelationalDbModuleOptions,
} from './interfaces';
import { RelationalDbService } from './relational-db.service';

@Module({})
export class RelationalDbModule {
  static forRoot(options: RelationalDbModuleOptions): DynamicModule {
    const { isGlobal, ...typeormOptions } = options;

    return {
      module: RelationalDbModule,
      imports: [TypeOrmModule.forRoot(typeormOptions)],
      global: isGlobal,
      providers: [RelationalDbService],
      exports: [RelationalDbService],
    };
  }

  static forRootAsync(options: RelationalDbModuleAsyncOptions): DynamicModule {
    const { isGlobal, ...typeormAsyncOptions } = options;
    return {
      module: RelationalDbModule,
      global: isGlobal,
      imports: [TypeOrmModule.forRootAsync(typeormAsyncOptions)],
      providers: [RelationalDbService],
      exports: [RelationalDbService],
    };
  }

  static forFeature = TypeOrmModule.forFeature;
}
