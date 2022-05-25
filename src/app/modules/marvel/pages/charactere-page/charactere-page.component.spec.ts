import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterePageComponent } from './charactere-page.component';

describe('CharacterePageComponent', () => {
  let component: CharacterePageComponent;
  let fixture: ComponentFixture<CharacterePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
