import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAgent } from './tableau-agent';

describe('TableauAgent', () => {
  let component: TableauAgent;
  let fixture: ComponentFixture<TableauAgent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauAgent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauAgent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
