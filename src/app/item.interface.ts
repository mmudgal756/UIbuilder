export interface Item {
  id: number;
  name: string;
  type: string;
  component: any;
  position: { x: number; y: number };
  inputs: {
    text?: string;
    placeholder?: string;
    disabled?: boolean;
    buttonType?: 'button' | 'submit';
    loading?: boolean;
    formDataKey?: string;
    onClickCode?: string; // Add this line
  };
  style: {
    width?: string;
    height?: string;
    'height.px'?: number;
    'background-color'?: string;
    'border-color'?: string;
    'border-width'?: string;
    'border-style'?: string;
    color?: string;
    'font-size'?: string;
    'font-weight'?: string;
    margin?: 'normal' | 'none';
    'text-align'?: 'left' | 'center' | 'right' | 'justify';
    left?: string;
    top?: string;
  };
  text: string;
  zIndex?: number;
}
