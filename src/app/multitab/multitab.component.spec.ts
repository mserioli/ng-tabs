import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultitabComponent } from './multitab.component';

describe('MultitabComponentComponent', () => {
  let component: MultitabComponent;
  let fixture: ComponentFixture<MultitabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultitabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultitabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
