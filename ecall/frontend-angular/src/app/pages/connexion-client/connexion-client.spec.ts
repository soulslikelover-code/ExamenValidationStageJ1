import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionClient } from './connexion-client';

describe('ConnexionClient', () => {
  let component: ConnexionClient;
  let fixture: ComponentFixture<ConnexionClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionClient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
