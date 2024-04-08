import { Test, TestingModule } from '@nestjs/testing';
import { ExtensionWorkerController } from './extension-worker.controller';

describe('ExtensionWorkerController', () => {
  let controller: ExtensionWorkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtensionWorkerController],
    }).compile();

    controller = module.get<ExtensionWorkerController>(ExtensionWorkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
