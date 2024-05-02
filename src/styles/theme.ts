
export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: {
      xxsmall: '0.4rem',
      xsmall: '0.8rem',
      small: '1rem',
      medium: '1.6rem',
      large: '2rem',
      rounded: '50%'
    }
  },
  font: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    sizes: {
      '2xsmall': '0.8rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      '2xlarge': '2.4rem',
      '3xlarge': '5rem',
      '4xlarge': '6rem'
    }
  },
  colors: {
    primary: '#0F52BA',
    secondary: '#373737',
    title: '#2C2C2C',
    white: '#FFFFFF',
    black: '#000000',
    footer: '#EEEEEE'
  },
  gradients: {},
  shadows: {
    minimal: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    default: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    darker: '0px 6px 10px rgba(0, 0, 0, 0.15)',
    modal: '0px 4px 4px rgba(0, 0, 0, 0.15)'
  },
  spacings: {
    xxsmall: '1.2rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  index: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
