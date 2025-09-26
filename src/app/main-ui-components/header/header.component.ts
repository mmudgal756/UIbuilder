import { ChangeDetectionStrategy, Component, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class HeaderComponent {
  previewMode = model.required<boolean>();
  clearCanvasEvent = output<void>();

  togglePreviewMode() {
    this.previewMode.set(!this.previewMode());
  }

  clearCanvas() {
    if (confirm('Are you sure you want to clear all components? This action cannot be undone.')) {
      this.clearCanvasEvent.emit();
    }
  }
}
