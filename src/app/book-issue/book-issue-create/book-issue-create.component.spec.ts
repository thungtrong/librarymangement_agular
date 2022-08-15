import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIssueCreateComponent } from './book-issue-create.component';

describe('BookIssueCreateComponent', () => {
  let component: BookIssueCreateComponent;
  let fixture: ComponentFixture<BookIssueCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookIssueCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookIssueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
