import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeConsoleComponent } from './exchange-console.component';

describe('ExchangeConsoleComponent', () => {
  let component: ExchangeConsoleComponent;
  let fixture: ComponentFixture<ExchangeConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
