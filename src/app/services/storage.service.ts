import { Injectable, signal } from '@angular/core';
import { Item } from '../interface/item.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly STORAGE_KEY = 'ui-builder-components';

  saveComponents(components: Item[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(components));
    } catch (error) {
      console.error('Failed to save components to localStorage:', error);
    }
  }

  loadComponents(): Item[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load components from localStorage:', error);
      return [];
    }
  }

  clearComponents(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear components from localStorage:', error);
    }
  }
}