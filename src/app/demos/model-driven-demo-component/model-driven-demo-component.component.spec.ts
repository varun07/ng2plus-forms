import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenDemoComponentComponent } from './model-driven-demo-component.component';

describe('ModelDrivenDemoComponentComponent', () => {
  let component: ModelDrivenDemoComponentComponent;
  let fixture: ComponentFixture<ModelDrivenDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
