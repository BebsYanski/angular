import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifVsIf } from './ngif-vs-if';

describe('NgifVsIf', () => {
  let component: NgifVsIf;
  let fixture: ComponentFixture<NgifVsIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifVsIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifVsIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
