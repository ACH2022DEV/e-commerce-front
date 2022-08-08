import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeisComponent } from './liste-deis.component';

describe('ListeDeisComponent', () => {
  let component: ListeDeisComponent;
  let fixture: ComponentFixture<ListeDeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
