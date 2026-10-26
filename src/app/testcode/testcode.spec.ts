import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testcode } from './testcode';

describe('Testcode', () => {
  let component: Testcode;
  let fixture: ComponentFixture<Testcode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testcode],
    }).compileComponents();

    fixture = TestBed.createComponent(Testcode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
