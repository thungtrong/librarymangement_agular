import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianViewComponent } from './librarian-view.component';

describe('LibrarianViewComponent', () => {
  let component: LibrarianViewComponent;
  let fixture: ComponentFixture<LibrarianViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
