import { ChangeDetectionStrategy, Component, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class HeaderComponent {
  previewMode = model.required<boolean>();
  clone = output<void>();

  togglePreviewMode() {
    this.previewMode.set(!this.previewMode());
  }
}
