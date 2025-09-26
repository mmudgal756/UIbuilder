import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CdkDropList,
    CdkDrag,
    TitleCasePipe,
    MatCardModule,
    MatTooltipModule,
    CommonModule
  ]
})
export class ToolboxComponent {
  toolboxItems = ['button', 'input', 'label', 'textarea', 'custom-component'];
  previewMode = input.required<boolean>();
}
