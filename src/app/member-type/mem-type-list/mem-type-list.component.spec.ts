import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemTypeListComponent } from './mem-type-list.component';

describe('MemTypeListComponent', () => {
  let component: MemTypeListComponent;
  let fixture: ComponentFixture<MemTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
