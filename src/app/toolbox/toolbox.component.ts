import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DragDropModule]
})
export class ToolboxComponent {
  toolboxItems = ['button', 'input', 'label', 'textarea'];
}
