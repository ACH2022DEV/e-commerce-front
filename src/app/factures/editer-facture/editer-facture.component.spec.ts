import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerFactureComponent } from './editer-facture.component';

describe('EditerFactureComponent', () => {
  let component: EditerFactureComponent;
  let fixture: ComponentFixture<EditerFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
