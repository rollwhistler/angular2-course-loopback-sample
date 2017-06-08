import { TestBed, inject } from '@angular/core/testing';
import { SharedTestModule } from '../../../shared/shared-test.module';
import { UserApi } from '../../../shared/sdk/services/index';
import { LoginGuardService } from './login-guard.service';

describe('LoginGuardService', () => {
  beforeEach(() => {
    let userApiStub = {
      isAuthenticated: ()=>{}
    };
    TestBed.configureTestingModule({
     imports: [SharedTestModule],
     providers: [LoginGuardService, {provide: UserApi, useValue:userApiStub}]
    });
  });

  it('should ...', inject([LoginGuardService], (service: LoginGuardService) => {
    expect(service).toBeTruthy();
  }));
});
