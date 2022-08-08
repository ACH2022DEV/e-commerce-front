import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmployeComponent } from './page-employe.component';

describe('PageEmployeComponent', () => {
  let component: PageEmployeComponent;
  let fixture: ComponentFixture<PageEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
