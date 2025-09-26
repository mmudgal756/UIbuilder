import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CanvasComponent } from './main-ui-components/canvas/canvas.component';
import { ToolboxComponent } from './main-ui-components/toolbox/toolbox.component';
import { Item } from './interface/item.interface';
import { HeaderComponent } from "./main-ui-components/header/header.component";
import { PropertiesPanelComponent } from "./main-ui-components/properties-panel/properties-panel.component";
import { StorageService } from './services/storage.service';
import { inject } from '@angular/core';

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

  private storageService = inject(StorageService);

  constructor() {
    // Load components from localStorage on initialization
    const savedComponents = this.storageService.loadComponents();
    if (savedComponents.length > 0) {
      this.items.set(savedComponents);
    }

    // Save components to localStorage whenever items change
    effect(() => {
      const currentItems = this.items();
      this.storageService.saveComponents(currentItems);
    });

    // Update items when selectedElement changes
    effect(() => {
      const selected = this.selectedElement();
      if (selected) {
        this.items.update(items =>
          items.map(item => (item.id === selected.id ? selected : item))
        );
      }
    });
  }

  clearCanvas() {
    this.items.set([]);
    this.selectedElement.set(null);
    this.storageService.clearComponents();
  }
}
