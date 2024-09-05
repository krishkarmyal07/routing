import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { canMachGuardGuard } from './can-mach-guard.guard';

describe('canMachGuardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canMachGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
