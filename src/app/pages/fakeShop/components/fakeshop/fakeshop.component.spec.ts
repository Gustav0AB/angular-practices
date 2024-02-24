import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeshopComponent } from './fakeshop.component';

describe('FakeshopComponent', () => {
  let component: FakeshopComponent;
  let fixture: ComponentFixture<FakeshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FakeshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
