import {Injectable} from '@angular/core';
import {FingerPrintPlugin} from '@set/fingerprint-plugin/lib';
import {CookieService} from 'ngx-cookie';
import {ConfigService} from '../../config-service';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  roleName: string | null = null;
  private _fingerPrintPlugin: FingerPrintPlugin;

  constructor(
    private cookieService: CookieService,
    private configService: ConfigService
  ) {
    this._fingerPrintPlugin = FingerPrintPlugin.getInstance();
    this.logLibraryUsage();
  }

  private logLibraryUsage(): void {
    console.debug('AuthenticationService from the kyp-core library is being used.');
  }

  getValue(key: string): string {
    let value = sessionStorage.getItem(key);
    if (!value) {
      value = this.cookieService.get(key);
      if (value) {
        sessionStorage.setItem(key, value);
      }
    }
    return value || '';
  }

  public getToken(): string {
    return this.getValue('token');
  }

  public getAuthHeaderObject(): { name: string; value: string }[] {
    return [
      {
        name: 'Authorization',
        value: `Bearer ${this.getToken()}`,
      },
    ];
  }

  public getUserSlug(): string {
    return this.isProduction() ? this.getValue('user_slug') : this.getDevUserID() || '';
  }

  public getUserID(): string {
    return this.isProduction() ? this.getValue('userid') : this.getDevUserID() || '';
  }

  public getRoleName(): string {
    return this.isProduction() ? this.getValue('selectedrole') : this.getDevSelectedRole() || '';
  }

  private isProduction(): boolean {
    return this.configService.getEnvironment().production;
  }

  public getDevUserID(): string | null {
    return sessionStorage.getItem('user_slug');
  }

  public setDevUserID(userSlug: string): void {
    sessionStorage.setItem('user_slug', userSlug);
  }

  public getDevSelectedRole(): string | null {
    return sessionStorage.getItem('selectedrole');
  }

  public setDevSelectedRole(role: string): void {
    sessionStorage.setItem('selectedrole', role);
  }

  public setUserID(userId: string): void {
    sessionStorage.setItem('userid', userId);
  }

  public setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  public setRoleName(roleName: string): void {
    sessionStorage.setItem('selectedrole', roleName);
  }
}
