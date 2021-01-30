import { Module } from '@nestjs/common';
import { RelationalDbModule } from './relational-db/relational-db.module';

@Module({
  imports: [RelationalDbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
