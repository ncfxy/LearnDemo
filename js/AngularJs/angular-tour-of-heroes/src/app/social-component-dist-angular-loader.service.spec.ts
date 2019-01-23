import { TestBed } from '@angular/core/testing';

import { SocialComponentDistAngularLoaderService } from './social-component-dist-angular-loader.service';

describe('SocialComponentDistAngularLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialComponentDistAngularLoaderService = TestBed.get(SocialComponentDistAngularLoaderService);
    expect(service).toBeTruthy();
  });
});
