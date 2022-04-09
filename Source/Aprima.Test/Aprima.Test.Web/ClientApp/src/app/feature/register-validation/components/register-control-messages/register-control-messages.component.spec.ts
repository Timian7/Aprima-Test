import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterControlMessagesComponent } from './register-control-messages.component';
import { RegisterValidationModule } from '../../register-validation.module';

describe('RegisterControlMessagesComponent', () => {
  let component: RegisterControlMessagesComponent;
  let fixture: ComponentFixture<RegisterControlMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RegisterValidationModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterControlMessagesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
