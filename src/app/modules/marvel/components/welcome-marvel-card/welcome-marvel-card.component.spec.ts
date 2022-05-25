import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMarvelCardComponent } from './welcome-marvel-card.component';

describe('WelcomeMarvelCardComponent', () => {
  let component: WelcomeMarvelCardComponent;
  let fixture: ComponentFixture<WelcomeMarvelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeMarvelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMarvelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
