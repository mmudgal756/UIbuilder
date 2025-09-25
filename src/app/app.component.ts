import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CanvasComponent } from './canvas/canvas.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { Item } from './item.interface';
import { HeaderComponent } from "./header/header.component";
import { PropertiesPanelComponent } from "./properties-panel/properties-panel.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ToolboxComponent,
    CanvasComponent,
    HeaderComponent,
    PropertiesPanelComponent
]
})
export class AppComponent {
  items = signal<Item[]>([]);
  selectedElement = signal<Item | null>(null);
  previewMode = signal(false);

  constructor() {
    effect(() => {
      const selected = this.selectedElement();
      if (selected) {
        this.items.update(items =>
          items.map(item => (item.id === selected.id ? selected : item))
        );
      }
    });
  }
}
