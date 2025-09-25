export interface Item {
  id: string;
  type: 'button' | 'input' | 'label' | 'textarea';
  style: Style;
  text?: string;
}

export interface Style {
  [key: string]: string | number;
}
