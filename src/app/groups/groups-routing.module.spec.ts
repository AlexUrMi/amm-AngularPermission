import { GroupsRoutingModule } from './groups-routing.module';

describe('GroupsRoutingModule', () => {
  let groupsRoutingModule: GroupsRoutingModule;

  beforeEach(() => {
    groupsRoutingModule = new GroupsRoutingModule();
  });

  it('should create an instance', () => {
    expect(groupsRoutingModule).toBeTruthy();
  });
});
