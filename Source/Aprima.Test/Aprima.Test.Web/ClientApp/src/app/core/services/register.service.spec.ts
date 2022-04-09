import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterService } from './register.service';
import { FeatureModule } from 'src/app/feature/feature.module';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FeatureModule
      ],
    });
  });

  it('should be created', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));
});
