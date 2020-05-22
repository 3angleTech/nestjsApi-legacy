import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getAll', () => {
    it('should return "getAll dummy API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getAll()).toBe('getAll dummy API');
    });
  });
});
