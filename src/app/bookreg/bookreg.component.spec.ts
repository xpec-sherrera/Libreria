import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookregComponent } from './bookreg.component';

describe('BookregComponent', () => {
  let component: BookregComponent;
  let fixture: ComponentFixture<BookregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
