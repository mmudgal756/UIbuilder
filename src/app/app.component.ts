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
}
