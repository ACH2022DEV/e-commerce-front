import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrreFactureComponent } from './crre-facture.component';

describe('CrreFactureComponent', () => {
  let component: CrreFactureComponent;
  let fixture: ComponentFixture<CrreFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrreFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrreFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
