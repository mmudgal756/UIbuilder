
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../interface/item.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class CustomComponent {
  item = input.required<Item>();
  selected = input.required<boolean>();
  previewMode = input.required<boolean>();

  private sanitizer = inject(DomSanitizer);

  safeHtml = computed<SafeHtml>(() => {
    const html = this.item().inputs.customHtml || '';
    return this.sanitizer.bypassSecurityTrustHtml(html);
  });
}
