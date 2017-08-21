import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenDemoComponentComponent } from './template-driven-demo-component.component';

describe('TemplateDrivenDemoComponentComponent', () => {
  let component: TemplateDrivenDemoComponentComponent;
  let fixture: ComponentFixture<TemplateDrivenDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
