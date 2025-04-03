import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewABookComponent } from './view-abook.component';

describe('ViewABookComponent', () => {
  let component: ViewABookComponent;
  let fixture: ComponentFixture<ViewABookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewABookComponent]
    });
    fixture = TestBed.createComponent(ViewABookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
