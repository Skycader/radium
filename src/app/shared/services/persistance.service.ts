import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error while saving data to local storage', e)
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || '')
    } catch (e) {
      console.error('Error while getting data', e)
      return null
    }
  }
}
