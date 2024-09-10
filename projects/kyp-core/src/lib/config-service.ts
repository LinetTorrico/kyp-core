import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private environment: { secretKey?: string; production?: boolean } | null = null;

  constructor() {
    this.logLibraryUsage();
  }

  private logLibraryUsage(): void {
    console.debug('ConfigService from the kyp-core library is being used.');
  }

  setEnvironment(env: { secretKey?: string; production?: boolean }): void {
    this.environment = env;
  }

  getEnvironment(): { secretKey?: string; production?: boolean } | null {
    return this.environment;
  }

  getSecretKey(): string {
    if (this.environment && this.environment.secretKey) {
      return this.environment.secretKey;
    }
    console.warn('Secret key is not defined in the environment configuration.');
    return '';
  }
}
