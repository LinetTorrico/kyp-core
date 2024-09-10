import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionmanagerService {
  public assingedcaselist = 'assingedcaselist';
  public caseDetails = 'CaseDetails';
  public metabaseSessionId = 'metabaseSessionId';
  public AppSelectedTab = 'AppSelectedTab';
  public ScreeningHmsDetails = 'ScreeningHmsDetails';
  public ScreeningPartyDetails = 'ScreeningPartyDetails';
  public ScreeningPersonDetails = 'ScreeningPersonDetails';
  public ScreeningProviderDetails = 'ScreeningProviderDetails';
  public ScreeningOrgDetails = 'ScreeningOrgDetails';
  public ScreeningTabDetails = 'ScreeningTabDetails';
  public assignedSelectedRow = 'assignedSelectedRow';
  public closedSelectedRow = 'closedSelectedRow';
  public teamSelectedRow = 'teamSelectedRow';
  public unassignedSelectedRow = 'unassignedSelectedRow';
  public caselistDetails = 'caselistDetails';
  public linkedAppDetails = 'linkedAppDetails';
  public userDetails = 'userDetails';
  public indicator = 'indicator';
  public value = 'value';
  public userdata = 'userdata';
  public selectedrole = 'selectedrole';
  public LastMilestone = 'lastMilestone';
  public alertDetails = 'AlertDetails';
  public watchListName = 'WatchListName';
  public resolutionDetails = 'resolutionDetails';
  public screeningDetails = 'screeningDetails';
  public moniteringTabDetails = 'moniteringTabDetails';
  public userSlug = 'user_slug';
  public caseData = 'caseData';
  public topicId$ = new BehaviorSubject<string>(null);
  constructor() {}

  // Save data to sessionStorage
  setItem(key: string, obj: any) {
    sessionStorage.setItem(key, obj);
    this.setSuggestions(key, obj);
  }

  private setSuggestions(key: string, obj: any) {
    if (obj && obj !== 'null' && key === 'CaseDetails') {
      this.setTopicId$(JSON.parse(obj)['applnNumber']);
    }
  }

  setTopicId$(key: string): void {
    this.topicId$.next(key);
  }

  getTopicId$(): Observable<string> {
    return this.topicId$.asObservable();
  }

  // Get saved data from sessionStorage
  getItem(key: string): any {
    return sessionStorage.getItem(key);
  }

  // Remove saved data from sessionStorage
  removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  //Insert Item into the Saved data from sessionStorage
  insertItem(indexKey: string, key: string, value: any) {
    const obj = JSON.parse(sessionStorage.getItem(indexKey))
      ? JSON.parse(sessionStorage.getItem(indexKey))
      : {};
    obj[key] = value;
    this.setItem(indexKey, JSON.stringify(obj));
  }

  //Bulk Update Item  into Saved data from sessionStorage
  updateBulkItem(indexKey: string, data: Map<string, string>) {
    let obj = JSON.parse(sessionStorage.getItem(indexKey));
    data.forEach((value, key) => {
      obj[key] = value;
    });
    this.setItem(indexKey, JSON.stringify(obj));
  }

  //Fetch Item from the Saved Data in Session Storage
  fetchItem(indexKey: string, key: string) {
    const obj = JSON.parse(sessionStorage.getItem(indexKey));
    if (obj != null) {
      return obj[key];
    } else {
      return '';
    }
  }

  // Remove all saved data from sessionStorage
  clearSession() {
    sessionStorage.clear();
  }

  setSessionStorageItem(
    attributeToCompare: string,
    dataToSet: any,
    indexKey: string,
    key: string
  ): void {
    const item = this.fetchItem(indexKey, key);
    if (item !== attributeToCompare) {
      let strObject = JSON.stringify(dataToSet);
      strObject = `${strObject}`
        .replace(/"auto_suggestion"/g, '"w"')
        .replace(/"providerName"/g, '"ApplicantProviderName"')
        .replace(/"number"/g, '"ApplicationNumberNo"')
        .replace(/"index"/g, '"i"')
        .replace(/"ein"/g, '"einTaxId"')
        .replace(/"providerType"/g, '"type"')
        .replace(/"modeSuggestion"/g, '"m"')
        .replace(/"application"/g, '"a"');
      this.setItem(indexKey, strObject);
    }
  }

  public setHeadersTags() {
    const map: Map<string, string> = new Map();
    map.set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    map.set('TransactionId', '1');
    map.set(
      'X-TENANT-ID',
      `${sessionStorage.getItem('SOCIAL_SERVICE_TENANT_ID_SESSION')}`
    );
    map.set('X-USERID', sessionStorage.getItem('user_slug'));
    return sessionStorage.setItem(
      'headers-tags',
      JSON.stringify(Array.from(map.entries()))
    );
  }
}
