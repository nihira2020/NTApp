import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerComponent } from './cutomer.component';

describe('CutomerComponent', () => {
  let component: CutomerComponent;
  let fixture: ComponentFixture<CutomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CutomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
