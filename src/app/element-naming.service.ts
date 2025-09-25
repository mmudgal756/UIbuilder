import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementNamingService {
  elementName = signal<string>('');
}
