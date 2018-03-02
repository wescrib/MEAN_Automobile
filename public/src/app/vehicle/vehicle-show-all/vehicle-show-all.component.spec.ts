import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleShowAllComponent } from './vehicle-show-all.component';

describe('VehicleShowAllComponent', () => {
  let component: VehicleShowAllComponent;
  let fixture: ComponentFixture<VehicleShowAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleShowAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
