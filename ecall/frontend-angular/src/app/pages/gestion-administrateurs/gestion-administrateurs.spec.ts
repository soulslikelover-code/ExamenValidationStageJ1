import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdministrateurs } from './gestion-administrateurs';

describe('GestionAdministrateurs', () => {
  let component: GestionAdministrateurs;
  let fixture: ComponentFixture<GestionAdministrateurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAdministrateurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAdministrateurs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
