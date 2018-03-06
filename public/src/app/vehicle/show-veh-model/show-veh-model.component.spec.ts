import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehModelComponent } from './show-veh-model.component';

describe('ShowVehModelComponent', () => {
  let component: ShowVehModelComponent;
  let fixture: ComponentFixture<ShowVehModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVehModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVehModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
