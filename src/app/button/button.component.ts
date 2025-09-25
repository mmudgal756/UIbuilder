import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
