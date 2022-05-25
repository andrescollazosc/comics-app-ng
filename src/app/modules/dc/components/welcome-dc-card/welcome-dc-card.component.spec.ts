import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDcCardComponent } from './welcome-dc-card.component';

describe('WelcomeDcCardComponent', () => {
  let component: WelcomeDcCardComponent;
  let fixture: ComponentFixture<WelcomeDcCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeDcCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeDcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
