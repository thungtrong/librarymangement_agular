import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIssueUpdateComponent } from './book-issue-update.component';

describe('BookIssueUpdateComponent', () => {
  let component: BookIssueUpdateComponent;
  let fixture: ComponentFixture<BookIssueUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookIssueUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookIssueUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
