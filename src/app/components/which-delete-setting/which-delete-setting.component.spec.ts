import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhichDeleteSettingComponent } from './which-delete-setting.component';

describe('WhichDeleteSettingComponent', () => {
  let component: WhichDeleteSettingComponent;
  let fixture: ComponentFixture<WhichDeleteSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhichDeleteSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhichDeleteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
