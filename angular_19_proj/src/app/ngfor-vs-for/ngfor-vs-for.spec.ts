import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforVsFor } from './ngfor-vs-for';

describe('NgforVsFor', () => {
  let component: NgforVsFor;
  let fixture: ComponentFixture<NgforVsFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgforVsFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforVsFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
