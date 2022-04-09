import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFormModule } from '../../register-form.module';
import { RegisterFormComponent } from './register-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureModule } from 'src/app/feature/feature.module';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        FeatureModule,
        RegisterFormModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
