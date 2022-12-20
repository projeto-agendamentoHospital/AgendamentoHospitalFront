import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSettingsComponent } from './listing-settings.component';

describe('ListingSettingsComponent', () => {
  let component: ListingSettingsComponent;
  let fixture: ComponentFixture<ListingSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
