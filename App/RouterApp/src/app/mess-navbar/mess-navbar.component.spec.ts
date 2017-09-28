import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessNavbarComponent } from './mess-navbar.component';

describe('MessNavbarComponent', () => {
  let component: MessNavbarComponent;
  let fixture: ComponentFixture<MessNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
