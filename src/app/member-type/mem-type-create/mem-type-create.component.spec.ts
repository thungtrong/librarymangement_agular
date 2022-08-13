import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemTypeCreateComponent } from './mem-type-create.component';

describe('MemTypeCreateComponent', () => {
  let component: MemTypeCreateComponent;
  let fixture: ComponentFixture<MemTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemTypeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
