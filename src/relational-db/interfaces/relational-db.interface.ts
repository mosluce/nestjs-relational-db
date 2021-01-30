import { ModuleMetadata } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export type RelationalDbModuleOptions = TypeOrmModuleOptions & {
  isGlobal?: boolean;
};

export interface RelationalDbModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  isGlobal?: boolean;
  useFactory?: (
    ...args: any[]
  ) => Promise<RelationalDbModuleOptions> | RelationalDbModuleOptions;
  inject?: any[];
}
