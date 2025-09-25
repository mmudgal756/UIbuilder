import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CanvasComponent } from './canvas/canvas.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { Item } from './item.interface';
import { ToolboxComponent } from './toolbox/toolbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HeaderComponent,
    CanvasComponent,
    RightSidebarComponent,
    ToolboxComponent
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

  handleStyleChange(change: { property: string; value: string }) {
    if (!this.selectedElement()) return;

    let value = change.value;
    if (change.property === 'width' || change.property === 'height' || change.property === 'font-size') {
      value += 'px';
    }

    this.selectedElement.update(element => {
      if (!element) return null;
      return {
        ...element,
        style: {
          ...element.style,
          [change.property]: value
        }
      };
    });

    this.items.update(items => {
      return items.map(i => {
        if (i.id === this.selectedElement()?.id) {
          return this.selectedElement()!;
        }
        return i;
      });
    });
  }

  handleTextChange(text: string) {
    if (!this.selectedElement()) return;

    this.selectedElement.update(element => {
      if (!element) return null;
      return { ...element, text };
    });

    this.items.update(items => {
      return items.map(i => {
        if (i.id === this.selectedElement()?.id) {
          return this.selectedElement()!;
        }
        return i;
      });
    });
  }
}
