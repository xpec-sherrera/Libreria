import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoregComponent } from './autoreg.component';

describe('AutoregComponent', () => {
  let component: AutoregComponent;
  let fixture: ComponentFixture<AutoregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
