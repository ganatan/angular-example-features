import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciceComponent } from './exercice.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('Continents - Component', () => {
  let component: ExerciceComponent;
  let fixture: ComponentFixture<ExerciceComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule],
      declarations: [ExerciceComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
