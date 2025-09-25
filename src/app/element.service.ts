import { Injectable, signal } from '@angular/core';

export interface Element {
  id: string;
  type: string;
  text?: string;
  style: {
    position: string;
    left: string;
    top: string;
    fontSize?: string;
    color?: string;
    backgroundColor?: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  selectedElement = signal<Element | null>(null);

  selectElement(element: Element | null) {
    this.selectedElement.set(element);
  }

  updateElement(element: Element) {
    this.selectedElement.set(element);
  }
}
