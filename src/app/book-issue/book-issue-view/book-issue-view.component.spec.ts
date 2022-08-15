import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIssueViewComponent } from './book-issue-view.component';

describe('BookIssueViewComponent', () => {
  let component: BookIssueViewComponent;
  let fixture: ComponentFixture<BookIssueViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookIssueViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookIssueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
