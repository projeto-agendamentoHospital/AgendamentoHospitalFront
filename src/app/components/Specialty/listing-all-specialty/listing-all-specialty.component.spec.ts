import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingAllSpecialtyComponent } from './listing-all-specialty.component';

describe('ListingAllSpecialtyComponent', () => {
  let component: ListingAllSpecialtyComponent;
  let fixture: ComponentFixture<ListingAllSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingAllSpecialtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingAllSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
