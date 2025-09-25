export interface Item {
  id: string;
  type: 'button' | 'input' | 'textarea' | 'label';
  style: {
    left: string;
    top: string;
    width: string;
    height: string;
    'background-color': string;
    'border-color': string;
    'border-width': string;
    'border-style': string;
    color: string;
    'font-size': string;
    'font-weight': string;
  };
  position: { x: number; y: number };
  text?: string;
  placeholder?: string;
  buttonType?: 'button' | 'submit';
  eventHandlers?: string;
  loading?: boolean | string;
  disabled?: boolean | string;
  formDataKey?: string;
  heightValue?: string;
  margin?: 'normal' | 'none';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  height?: 'auto' | 'fixed';
}
