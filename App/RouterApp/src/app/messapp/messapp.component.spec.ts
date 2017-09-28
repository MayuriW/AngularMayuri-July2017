import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessappComponent } from './messapp.component';

describe('MessappComponent', () => {
  let component: MessappComponent;
  let fixture: ComponentFixture<MessappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
