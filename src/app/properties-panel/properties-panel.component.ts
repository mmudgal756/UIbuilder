import { ChangeDetectionStrategy, Component, model, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatIconModule]
})
export class PropertiesPanelComponent {
  element = model<Item | null>(null);
  previewMode = input<boolean>(false);
}
