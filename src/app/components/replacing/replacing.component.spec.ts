import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacingComponent } from './replacing.component';

describe('ReplacingComponent', () => {
  let component: ReplacingComponent;
  let fixture: ComponentFixture<ReplacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplacingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
