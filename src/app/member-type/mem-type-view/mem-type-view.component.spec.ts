import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemTypeViewComponent } from './mem-type-view.component';

describe('MemTypeViewComponent', () => {
  let component: MemTypeViewComponent;
  let fixture: ComponentFixture<MemTypeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemTypeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
