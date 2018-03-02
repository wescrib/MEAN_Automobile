import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleShowOneComponent } from './vehicle-show-one.component';

describe('VehicleShowOneComponent', () => {
  let component: VehicleShowOneComponent;
  let fixture: ComponentFixture<VehicleShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
