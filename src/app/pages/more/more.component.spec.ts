import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePage } from './more.component';

describe('MoreComponent', () => {
  let component: MorePage;
  let fixture: ComponentFixture<MorePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MorePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
