import { Injectable } from '@angular/core';
import { LocalizationService } from './localization.service';

@Injectable({
  providedIn: 'root',
})
export class LocalizationConfigService {
  public locale_id: string = '';

  constructor() {}
}
