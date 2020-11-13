import 'styled-components';

import {colors} from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
  }
}
