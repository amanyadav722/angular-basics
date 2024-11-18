import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verifier1Component } from './verifier1.component';

describe('Verifier1Component', () => {
  let component: Verifier1Component;
  let fixture: ComponentFixture<Verifier1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verifier1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verifier1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
