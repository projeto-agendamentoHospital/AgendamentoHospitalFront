import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentationSpecialtyComponent } from './apresentation-specialty.component';

describe('ApresentationSpecialtyComponent', () => {
  let component: ApresentationSpecialtyComponent;
  let fixture: ComponentFixture<ApresentationSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentationSpecialtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentationSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
