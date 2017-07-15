const colors = {
  blue: '#1565C0',
  blueDark: '#0D47A1',
  green: '#2E7D32',
  greenDark: '#1B5E20',
  red: '#D32F2F',
  redDark: '#B71C1C',
};

const theme = {
  buttons: {
    danger: {
      default: colors.red,
      hover: colors.redDark,
    },
    primary: {
      default: colors.blue,
      hover: colors.blueDark,
    },
    success: {
      default: colors.green,
      hover: colors.greenDark,
    },
  },
  colors,
};

export default theme;
