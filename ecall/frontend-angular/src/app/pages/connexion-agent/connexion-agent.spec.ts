import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionAgent } from './connexion-agent';

describe('ConnexionAgent', () => {
  let component: ConnexionAgent;
  let fixture: ComponentFixture<ConnexionAgent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionAgent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionAgent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
