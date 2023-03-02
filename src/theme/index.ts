import { setRootVar } from '../utils/set-root-variable';

enum RootColorVariables {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  DARK_GRAY = 'darkGray',
  LIGHT_GRAY = 'lightGray',
}

enum RootFontVariables {
  ALEGREYA = 'alegreya',
  ALEGREYA_SANS = 'alegreyaSans',
}

type MyColor = Record<RootColorVariables, string>;
type MyFonts = Record<RootFontVariables, string>;

type Theme = { colors: MyColor; fonts: MyFonts };

export const theme: Theme = {
  colors: {
    red: setRootVar(RootColorVariables.RED),
    green: setRootVar(RootColorVariables.GREEN),
    blue: setRootVar(RootColorVariables.BLUE),
    darkGray: setRootVar(RootColorVariables.DARK_GRAY),
    lightGray: setRootVar(RootColorVariables.LIGHT_GRAY),
  },
  fonts: {
    alegreya: setRootVar(RootFontVariables.ALEGREYA),
    alegreyaSans: setRootVar(RootFontVariables.ALEGREYA_SANS),
  },
};
