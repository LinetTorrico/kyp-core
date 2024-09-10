import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from './config-service';
import {AuthenticationService} from './services/auth/authentication.service';


@NgModule({
  imports: [HttpClientModule],
})
export class KypCoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: KypCoreModule) {
    if (parentModule) {
      throw new Error(
        'KypCoreModule is already loaded. Import it in your root module only.');
    }
  }

  static forRoot(): ModuleWithProviders<KypCoreModule> {
    return {
      ngModule: KypCoreModule,
      providers: [ConfigService, AuthenticationService]
    };
  }
}

