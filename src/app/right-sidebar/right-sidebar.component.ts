import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.interface';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class RightSidebarComponent {
  selectedElement = input.required<Item | null>();

  styleChange = output<{ property: string; value: string }>();
  textChange = output<string>();

  updateStyle(property: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.styleChange.emit({ property, value });
  }

  updateText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.textChange.emit(value);
  }

  getStyle(property: string): string {
    const element = this.selectedElement();
    if (element && element.style) {
      const value = element.style[property];
      if (typeof value === 'string') {
        return value.replace(/px$/, '');
      }
    }
    return '';
  }

  getColor(property: string): string {
    const element = this.selectedElement();
    if (element && element.style) {
      const value = element.style[property];
      if (typeof value === 'string') {
        return value;
      }
    }
    return '';
  }
}
