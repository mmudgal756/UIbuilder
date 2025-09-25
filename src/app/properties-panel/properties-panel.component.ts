import { ChangeDetectionStrategy, Component, model, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.interface';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ElementNamingService } from '../element-naming.service';

@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatIconModule
  ]
})
export class PropertiesPanelComponent {
  element = model<Item | null>(null);
  previewMode = input<boolean>(false);

  private elementNamingService = inject(ElementNamingService);
  elementName = this.elementNamingService.elementName;

  updateInput(property: keyof Item, event: Event) {
    const el = this.element();
    if (el) {
      const value = (event.target as HTMLInputElement).value;
      this.element.set({ ...el, [property]: value });
    }
  }

  updateInputs(key: keyof Item['inputs'], event: Event) {
    const el = this.element();
    if (el) {
      const value = (event.target as HTMLInputElement).value;
      const updatedInputs = { ...el.inputs, [key]: value };
      this.element.set({ ...el, inputs: updatedInputs });
    }
  }

  updateAction(event: any) {
    const el = this.element();
    if (el) {
      this.element.set({ ...el, action: event.value });
    }
  }

  updateHttpMethod(event: any) {
    const el = this.element();
    if (el) {
      this.element.set({ ...el, httpMethod: event.value });
    }
  }

  updateStyle(style: string, event: any) {
    const el = this.element();
    if (el) {
      const value = event.target ? (event.target as HTMLInputElement).value : event;
      this.element.set({ ...el, style: { ...el.style, [style]: value } });
    }
  }
}
