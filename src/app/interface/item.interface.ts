export interface Item {
  id: string;
  name: string;
  type: 'button' | 'input' | 'label' | 'textarea' | 'custom-html';
  position: { x: number; y: number };
  style: { [key: string]: string };
  inputs: {
    text?: string;
    color?: string;
    disabled?: boolean;
    placeholder?: string;
    customHtml?: string;
    [key: string]: any;
  };
  label?: string;
  action?: 'customJavaScript' | 'apiCall';
  apiUrl?: string;
  httpMethod?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  requestBody?: string;
  customJavaScript?: string;
}
