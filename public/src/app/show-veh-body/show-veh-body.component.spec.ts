import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehBodyComponent } from './show-veh-body.component';

describe('ShowVehBodyComponent', () => {
  let component: ShowVehBodyComponent;
  let fixture: ComponentFixture<ShowVehBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVehBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVehBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
