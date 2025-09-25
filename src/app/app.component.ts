import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CanvasComponent } from './canvas/canvas.component';
import { Item } from './item.interface';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { PropertiesPanelComponent } from './properties-panel/properties-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HeaderComponent,
    CanvasComponent,
    ToolboxComponent,
    PropertiesPanelComponent
  ]
})
export class AppComponent {
  previewMode = signal(false);
  items = signal<Item[]>([]);
  selectedElement = signal<Item | null>(null);

  onClone() {
    if (this.selectedElement()) {
      const newElement: Item = {
        ...this.selectedElement()!,
        id: Date.now().toString(),
        style: {
          ...this.selectedElement()!.style,
          left: `${parseInt(String(this.selectedElement()!.style['left'] ?? '0')) + 20}px`,
          top: `${parseInt(String(this.selectedElement()!.style['top'] ?? '0')) + 20}px`,
        }
      };
      this.items.update(items => [...items, newElement]);
      this.selectedElement.set(newElement);
    }
  }
}
