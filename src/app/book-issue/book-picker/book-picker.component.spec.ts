import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPickerComponent } from './book-picker.component';

describe('BookPickerComponent', () => {
  let component: BookPickerComponent;
  let fixture: ComponentFixture<BookPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
