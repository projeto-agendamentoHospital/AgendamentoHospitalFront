import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSettingsConfirmComponent } from './delete-settings-confirm.component';

describe('DeleteSettingsConfirmComponent', () => {
  let component: DeleteSettingsConfirmComponent;
  let fixture: ComponentFixture<DeleteSettingsConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSettingsConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSettingsConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
