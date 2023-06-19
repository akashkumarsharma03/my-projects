import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivemeetComponent } from './livemeet.component';

describe('LivemeetComponent', () => {
  let component: LivemeetComponent;
  let fixture: ComponentFixture<LivemeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivemeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivemeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
