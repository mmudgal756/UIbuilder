import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
  selected = input.required<boolean>();
}
