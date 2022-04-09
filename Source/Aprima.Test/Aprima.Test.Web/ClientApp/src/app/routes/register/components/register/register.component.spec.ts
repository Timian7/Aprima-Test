import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterModule } from '../../register.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        SharedModule.forRoot(),
        RegisterModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Registration Form'`, () => {
    //Assert
    expect(component.title).toEqual('Registration Form');
  });
});
