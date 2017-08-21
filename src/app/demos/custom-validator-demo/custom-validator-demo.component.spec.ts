import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorDemoComponent } from './custom-validator-demo.component';

describe('CustomValidatorDemoComponent', () => {
  let component: CustomValidatorDemoComponent;
  let fixture: ComponentFixture<CustomValidatorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomValidatorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidatorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
