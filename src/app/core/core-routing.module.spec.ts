import { Core\coreRoutingModule } from './core\core-routing.module';

describe('Core\coreRoutingModule', () => {
  let core\coreRoutingModule: Core\coreRoutingModule;

  beforeEach(() => {
    core\coreRoutingModule = new Core\coreRoutingModule();
  });

  it('should create an instance', () => {
    expect(core\coreRoutingModule).toBeTruthy();
  });
});
