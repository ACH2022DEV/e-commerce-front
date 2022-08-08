import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrerDevisComponent } from './crer-devis.component';

describe('CrerDevisComponent', () => {
  let component: CrerDevisComponent;
  let fixture: ComponentFixture<CrerDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrerDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrerDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
