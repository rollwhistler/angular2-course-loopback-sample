import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestModule } from '../../shared-test.module';
import { GenericFilterComponent } from './generic-filter.component';
import { InputSearchComponent } from '../input-search/input-search.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core'

describe('GenericFilterComponent', () => {
  let component: GenericFilterComponent;
  let fixture: ComponentFixture<GenericFilterComponent>;
  let titleEl: DebugElement;
  let expectedTitle: string = 'Hola Caracola';

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
    titleEl  = fixture.debugElement.query(By.css('h5'));
    component.title = expectedTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display expected title', () => {
    expect(titleEl.nativeElement.textContent).toContain(expectedTitle);
  });
});