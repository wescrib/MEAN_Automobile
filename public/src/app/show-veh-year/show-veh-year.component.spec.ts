import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehYearComponent } from './show-veh-year.component';

describe('ShowVehYearComponent', () => {
  let component: ShowVehYearComponent;
  let fixture: ComponentFixture<ShowVehYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVehYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVehYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
