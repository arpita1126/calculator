import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './App.component'; // Class names in TypeScript are typically PascalCase

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Correct class name
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Ensures the component is created
  });
});
