import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestModule } from '../../shared-test.module';
import { GenericFilterComponent } from './generic-filter.component';
import { InputSearchComponent } from '../input-search/input-search.component';

describe('GenericFilterComponent', () => {
  let component: GenericFilterComponent;
  let fixture: ComponentFixture<GenericFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFilterComponent, InputSearchComponent],
      imports:[SharedTestModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
