import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiserDevisComponent } from './visualiser-devis.component';

describe('VisualiserDevisComponent', () => {
  let component: VisualiserDevisComponent;
  let fixture: ComponentFixture<VisualiserDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualiserDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiserDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
