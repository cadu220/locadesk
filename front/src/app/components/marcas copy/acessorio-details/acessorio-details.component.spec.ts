import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessorioDetailsComponent } from './acessorio-details.component';

describe('AcessorioDetailsComponent', () => {
  let component: AcessorioDetailsComponent;
  let fixture: ComponentFixture<AcessorioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessorioDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessorioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
