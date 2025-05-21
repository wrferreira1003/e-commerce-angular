import { authGuard } from './auth.guard';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

describe('AuthGuard', () => {
  it('should return true when user is not truthy', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });

    TestBed.overrideProvider(AuthService, {
      useValue: {
        email$: of(null),
      },
    });

    const guard = TestBed.runInInjectionContext(authGuard());
    guard.subscribe((isActive) => {
      expect(isActive).toBe(true);
    });
  });

  it('should not return true when user is truthy', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });

    TestBed.overrideProvider(AuthService, {
      useValue: { email$: of('test@test.com') },
    });

    const guard = TestBed.runInInjectionContext(authGuard());
    guard.subscribe((isActive) => {
      expect(isActive).toBe(false);
    });
  });
});
