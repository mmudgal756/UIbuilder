import { ChangeDetectionStrategy, Component, ElementRef, inject, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDragDrop, CdkDragEnd, CdkDropList, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Item } from '../item.interface';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { LabelComponent } from '../label/label.component';
import { TextareaComponent } from '../textarea/textarea.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    DragDropModule,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    TextareaComponent,
  ]
})
export class CanvasComponent {
  previewMode = input.required<boolean>();
  items = model<Item[]>([]);
  selectedElement = model<Item | null>(null);
  private elementRef = inject(ElementRef<HTMLElement>);

  onDrop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const itemType = event.previousContainer.data[event.previousIndex] as unknown as Item['type'];
      const dropPoint = this.getDropPoint(event.dropPoint.x, event.dropPoint.y);

      const newElement: Item = {
        id: Date.now().toString(),
        type: itemType,
        style: {
          left: `${dropPoint.x}px`,
          top: `${dropPoint.y}px`,
          width: '100px',
          height: '40px',
          'background-color': '#ccc',
          'border-color': '#333',
          'border-width': '1px',
          'border-style': 'solid',
          color: '#000',
          'font-size': '16px',
        },
        text: 'New Element'
      };

      this.items.update(currentItems => [...currentItems, newElement]);
      this.selectedElement.set(newElement);
    }
  }

  private getDropPoint(dropX: number, dropY: number) {
    const canvasRect = this.elementRef.nativeElement.getBoundingClientRect();
    const x = dropX - canvasRect.left;
    const y = dropY - canvasRect.top;

    const snappedX = Math.round(x / 20) * 20;
    const snappedY = Math.round(y / 20) * 20;

    return { x: snappedX, y: snappedY };
  }

  onElementDragEnded(event: CdkDragEnd, item: Item) {
    const newPosition = event.source.getFreeDragPosition();
    const snappedX = Math.round(newPosition.x / 20) * 20;
    const snappedY = Math.round(newPosition.y / 20) * 20;

    this.items.update(items => {
      return items.map(i => {
        if (i.id === item.id) {
          return {
            ...i,
            style: {
              ...i.style,
              left: `${snappedX}px`,
              top: `${snappedY}px`,
            }
          };
        }
        return i;
      });
    });
    this.selectedElement.set({ ...item, style: { ...item.style, left: `${snappedX}px`, top: `${snappedY}px` } });
  }

  selectElement(element: Item, event: MouseEvent) {
    event.stopPropagation();
    this.selectedElement.set(element);
  }

  deselectElement() {
    this.selectedElement.set(null);
  }
}
