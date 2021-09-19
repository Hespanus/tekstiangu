import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelialueComponent } from './pelialue.component';

describe('PelialueComponent', () => {
  let component: PelialueComponent;
  let fixture: ComponentFixture<PelialueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelialueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelialueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
