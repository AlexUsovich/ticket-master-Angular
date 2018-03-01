import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustAnnouncedComponent } from './just-announced.component';

describe('JustAnnouncedComponent', () => {
  let component: JustAnnouncedComponent;
  let fixture: ComponentFixture<JustAnnouncedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustAnnouncedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustAnnouncedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
