import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiserFactureComponent } from './visualiser-facture.component';

describe('VisualiserFactureComponent', () => {
  let component: VisualiserFactureComponent;
  let fixture: ComponentFixture<VisualiserFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualiserFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiserFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
