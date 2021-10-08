import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaDocComponent } from './sinhala-doc.component';

describe('SinhalaDocComponent', () => {
  let component: SinhalaDocComponent;
  let fixture: ComponentFixture<SinhalaDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
