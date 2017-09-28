import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeRouterComponent } from './welcome-router.component';

describe('WelcomeRouterComponent', () => {
  let component: WelcomeRouterComponent;
  let fixture: ComponentFixture<WelcomeRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
