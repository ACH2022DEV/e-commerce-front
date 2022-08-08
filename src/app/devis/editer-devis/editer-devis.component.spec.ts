import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerDevisComponent } from './editer-devis.component';

describe('EditerDevisComponent', () => {
  let component: EditerDevisComponent;
  let fixture: ComponentFixture<EditerDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
