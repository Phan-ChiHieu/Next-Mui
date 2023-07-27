import { Theme } from '@mui/material/styles';
import { cssBaseline } from './components/css-baseline';
import { merge } from 'lodash';


// ghi de css
export function componentsOverrides(theme: Theme) {
    const components = merge(
      cssBaseline(theme),
    );
  
    return components;
  }