import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule]
})
export class ButtonComponent {
  item = input.required<Item>();
  selected = input<boolean>();
  previewMode = input<boolean>();
  onClick = output<Event>();

  handleClick(event: Event) {
    if (this.previewMode() && this.item().inputs.onClickCode) {
      try {
        const onClickFunction = new Function('event', this.item().inputs.onClickCode as string);
        onClickFunction(event);
      } catch (error) {
        console.error('Error executing onClick code:', error);
      }
    } else {
      this.onClick.emit(event);
    }
  }
}
