import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauClient } from './tableau-client';

describe('TableauClient', () => {
  let component: TableauClient;
  let fixture: ComponentFixture<TableauClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauClient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
