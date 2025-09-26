import { ChangeDetectionStrategy, Component, ElementRef, inject, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, CdkDragEnd, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Item } from '../../interface/item.interface';
import { ButtonComponent } from '../../common-ui-elements/button/button.component';
import { InputComponent } from '../../common-ui-elements/input/input.component';
import { LabelComponent } from '../../common-ui-elements/label/label.component';
import { TextareaComponent } from '../../common-ui-elements/textarea/textarea.component';
import { CustomComponent } from '../../common-ui-elements/custom-component/custom.component';

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
    CustomComponent
  ]
})
export class CanvasComponent {
  previewMode = input.required<boolean>();
  items = model<Item[]>([]);
  selectedElement = model<Item | null>(null);
  private elementRef = inject(ElementRef<HTMLElement>);

  private getComponentByType(type: string) {
    switch (type) {
      case 'button':
        return ButtonComponent;
      case 'input':
        return InputComponent;
      case 'label':
        return LabelComponent;
      case 'textarea':
        return TextareaComponent;
      case 'custom-component':
        return CustomComponent;
      default:
        return null;
    }
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (this.previewMode()) {
      return;
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const itemType = event.previousContainer.data[event.previousIndex] as 'button' | 'input' | 'label' | 'textarea' | 'custom-component';
      
      // Get the exact drop position relative to the canvas
      const canvasRect = this.elementRef.nativeElement.getBoundingClientRect();
      const exactX = event.dropPoint.x - canvasRect.left;
      const exactY = event.dropPoint.y - canvasRect.top;
      
      // Apply grid snapping (optional - can be removed for exact positioning)
      const snappedX = Math.round(exactX / 20) * 20;
      const snappedY = Math.round(exactY / 20) * 20;

      const newElement: Item = {
        id: Date.now().toString(),
        name: `New ${itemType}`,
        label: `New ${itemType}`,
        type: itemType,
        position: {
          x: snappedX,
          y: snappedY
        },
        inputs: {
          text: `New ${itemType}`,
          customHtml: '<p>Custom HTML</p>'
        },
        style: {
          left: `${snappedX}px`,
          top: `${snappedY}px`,
          width: '250px',
          height: '100px',
          'background-color': '#ffffff',
          'border-color': '#000000',
          'border-width': '1px',
          'border-style': 'solid',
          color: '#000000',
          'font-size': '16px',
          'font-weight': 'normal'
        }
      };

      this.items.update(currentItems => [...currentItems, newElement]);
      this.selectedElement.set(newElement);
    }
  }


  onElementDragEnded(event: CdkDragEnd, item: Item) {
    if (this.previewMode()) {
      return;
    }
    const newPosition = event.source.getFreeDragPosition();
    const snappedX = Math.round(newPosition.x / 20) * 20;
    const snappedY = Math.round(newPosition.y / 20) * 20;

    this.items.update(items => {
      return items.map(i => {
        if (i.id === item.id) {
          return {
            ...i,
            position: { x: snappedX, y: snappedY },
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
    this.selectedElement.set({ ...item, position: { x: snappedX, y: snappedY }, style: { ...item.style, left: `${snappedX}px`, top: `${snappedY}px` } });
  }

  selectElement(element: Item, event: MouseEvent) {
    event.stopPropagation();
    this.selectedElement.set(element);
  }

  deselectElement() {
    this.selectedElement.set(null);
  }
}
