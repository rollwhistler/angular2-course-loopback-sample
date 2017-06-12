import { async, tick, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestModule } from '../../shared-test.module';
import { InputSearchComponent } from './input-search.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;
  let expectedValue: string;
  let valueEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SharedTestModule],
      declarations: [ InputSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    valueEl  = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //onItemUpdate
  it('should raise onItemUpdate when value change',async(() => {
    let updatedValue: string = '';
    component.onItemUpdate.subscribe((value: string) => {
      updatedValue = value;
    }, ()=>{
      fail("onItemUpdate subscription failed");
    });
    valueEl.triggerEventHandler('keyUp', {keyCode: 65});
    fixture.whenStable().then(() => { 
      //fixture.detectChanges();      
      expect(updatedValue).toBe('a');
    });
    
  })); 
});
