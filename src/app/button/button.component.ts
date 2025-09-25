import { ChangeDetectionStrategy, Component, effect, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.interface';
import { MatButtonModule } from '@angular/material/button';
import { ElementNamingService } from '../element-naming.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule]
})
export class ButtonComponent {
  item = input.required<Item>();
  selected = input<boolean>();
  previewMode = input<boolean>();
  onClick = output<Event>();
  unquieName='#button';

  private elementNamingService = inject(ElementNamingService);
  private http = inject(HttpClient);

  constructor() {
    effect(() => {
      if (this.selected()) {
        this.elementNamingService.elementName.set(this.unquieName);
      }
    });
  }

  handleClick(event: Event) {
    if (this.previewMode()) {
      const item = this.item();
      if (item.action === 'apiCall') {
        if (!item.apiUrl || !item.httpMethod) {
          console.error('API URL and HTTP Method are required for API Call action.');
          return;
        }

        const { apiUrl, httpMethod, requestBody } = item;
        let body: any;
        try {
          body = requestBody ? JSON.parse(requestBody) : null;
        } catch (error) {
          console.error('Invalid JSON in Request Body:', error);
          return;
        }

        this.http.request(httpMethod, apiUrl, { body }).subscribe({
          next: (response) => alert("API Response: " + JSON.stringify(response)),
          error: (error) => console.error('API Error:', error),
        });
      } else if (item.action === 'customJavaScript') {
        try {
          const func = new Function('event', item.customJavaScript as string);
          func(event);
        } catch (error) {
          console.error('Error executing custom JavaScript:', error);
        }
      }
    } else {
      this.onClick.emit(event);
    }
  }
}
