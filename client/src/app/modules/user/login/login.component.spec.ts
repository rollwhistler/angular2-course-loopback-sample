import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestModule } from '../../shared/shared-test.module';
import { LoginComponent } from './login.component';
import { UserApi } from '../../shared/sdk/services/index';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    let userApiStub = {
      login: () =>{}
    };
    TestBed.configureTestingModule({
      imports: [SharedTestModule],
      providers: [{provide: UserApi, useValue: userApiStub}],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
