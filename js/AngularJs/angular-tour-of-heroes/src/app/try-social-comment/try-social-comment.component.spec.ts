import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrySocialCommentComponent } from './try-social-comment.component';

describe('TrySocialCommentComponent', () => {
  let component: TrySocialCommentComponent;
  let fixture: ComponentFixture<TrySocialCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrySocialCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrySocialCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
