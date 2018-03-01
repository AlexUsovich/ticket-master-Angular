import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningSoonComponent } from './happening-soon.component';

describe('HappeningSoonComponent', () => {
  let component: HappeningSoonComponent;
  let fixture: ComponentFixture<HappeningSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappeningSoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappeningSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
