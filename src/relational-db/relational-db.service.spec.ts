import { Test, TestingModule } from '@nestjs/testing';
import { RelationalDbService } from './relational-db.service';

describe('RelationalDbService', () => {
  let service: RelationalDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationalDbService],
    }).compile();

    service = module.get<RelationalDbService>(RelationalDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
