import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestModule } from '../../shared/shared-test.module';
import { LoginComponent } from './login.component';
import { SDKBrowserModule } from '../../shared/sdk/index';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestModule, SDKBrowserModule.forRoot()],
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
