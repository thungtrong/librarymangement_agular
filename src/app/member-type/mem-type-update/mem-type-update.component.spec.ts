import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemTypeUpdateComponent } from './mem-type-update.component';

describe('MemTypeUpdateComponent', () => {
  let component: MemTypeUpdateComponent;
  let fixture: ComponentFixture<MemTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemTypeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
