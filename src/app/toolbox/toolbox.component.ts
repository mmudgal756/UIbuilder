import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DragDropModule, MatCardModule, MatIconModule, MatTooltipModule, TitleCasePipe]
})
export class ToolboxComponent {
  toolboxItems = ['button', 'input', 'label', 'textarea'];

  getIcon(item: string): string {
    switch (item) {
      case 'button':
        return 'smart_button';
      case 'input':
        return 'text_fields';
      case 'label':
        return 'label';
      case 'textarea':
        return 'notes';
      default:
        return ''
    }
  }
}
