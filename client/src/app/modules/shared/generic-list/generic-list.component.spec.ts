import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LastUpercasePipe } from '../pipes/last-upercase.pipe';
import { GenericListComponent } from './generic-list.component';
import { ColorChangeOnClickDirective } from '../directives/color-change-on-click.directive';
import { SharedTestModule } from '../shared-test.module';

describe('GenericListComponent', () => {
  let component: GenericListComponent;
  let fixture: ComponentFixture<GenericListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestModule],
      declarations: [ GenericListComponent, LastUpercasePipe,  ColorChangeOnClickDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
