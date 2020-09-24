import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberConsoleComponent } from './member-console.component';

describe('MemberConsoleComponent', () => {
  let component: MemberConsoleComponent;
  let fixture: ComponentFixture<MemberConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
