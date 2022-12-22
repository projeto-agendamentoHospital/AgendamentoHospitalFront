import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFooterComponent } from './schedule-footer.component';

describe('ScheduleFooterComponent', () => {
  let component: ScheduleFooterComponent;
  let fixture: ComponentFixture<ScheduleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
