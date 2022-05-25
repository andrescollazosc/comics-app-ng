import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteresPageComponent } from './characteres-page.component';

describe('CharacteresPageComponent', () => {
  let component: CharacteresPageComponent;
  let fixture: ComponentFixture<CharacteresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteresPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
