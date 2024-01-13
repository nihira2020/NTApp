import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuheaderComponent } from './menuheader.component';

describe('MenuheaderComponent', () => {
  let component: MenuheaderComponent;
  let fixture: ComponentFixture<MenuheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
