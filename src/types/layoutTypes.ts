export type ColorLightEnum = 100 | 200 | 300 | 400 | 500 | 600 | 700;
export interface Theme {
  colors: {
    white: string,
    black: string,
    gray: Record<ColorLightEnum, string>,
    secondary: Record<ColorLightEnum, string>,
    primary: Record<ColorLightEnum, string>
  }
}

export type ElementSizeENUM = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  size?: ElementSizeENUM;
}