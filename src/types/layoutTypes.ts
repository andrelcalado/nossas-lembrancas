export interface LoginFormType {
  phone: {
    value: '',
    code: '',
    formCode: false,
  }
}

export interface ApplicationThemes {
  default: Theme;
}

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