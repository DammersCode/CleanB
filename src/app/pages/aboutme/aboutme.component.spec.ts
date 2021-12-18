import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmePage } from './aboutme.component';

describe('AboutmeComponent', () => {
  let component: AboutmePage;
  let fixture: ComponentFixture<AboutmePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutmePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
