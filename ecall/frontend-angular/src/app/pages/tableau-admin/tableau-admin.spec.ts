import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAdmin } from './tableau-admin';

describe('TableauAdmin', () => {
  let component: TableauAdmin;
  let fixture: ComponentFixture<TableauAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
