import { ChangeDetectionStrategy, Component, HostListener, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class ButtonComponent {
  item = input.required<Item>();
  selected = input.required<boolean>();
  previewMode = input.required<boolean>();

  @HostListener('click')
  onClick(): void {
    if (this.previewMode()) {
      alert('Button clicked!');
    }
  }
}
