import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CABECALHOComponent } from './cabecalho.component';

describe('CABECALHOComponent', () => {
  let component: CABECALHOComponent;
  let fixture: ComponentFixture<CABECALHOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CABECALHOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CABECALHOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
