import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassObjComponent } from './class-obj.component';

describe('ClassObjComponent', () => {
  let component: ClassObjComponent;
  let fixture: ComponentFixture<ClassObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
