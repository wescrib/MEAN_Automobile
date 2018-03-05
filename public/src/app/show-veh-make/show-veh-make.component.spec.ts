import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehMakeComponent } from './show-veh-make.component';

describe('ShowVehMakeComponent', () => {
  let component: ShowVehMakeComponent;
  let fixture: ComponentFixture<ShowVehMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVehMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVehMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
