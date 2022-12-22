import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhichDeleteProfessionalComponent } from './which-delete-professional.component';

describe('WhichDeleteProfessionalComponent', () => {
  let component: WhichDeleteProfessionalComponent;
  let fixture: ComponentFixture<WhichDeleteProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhichDeleteProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhichDeleteProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
