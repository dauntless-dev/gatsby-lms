import * as React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { default as defaultTheme } from "./theme";
import Header from './Header';
import './styles.css';

export default function ThemeProvider({ children, theme={}, location, lang }) {
	return (
  	<div>
  		<Header location={location} lang={lang} />
	    <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
	      {children}
	    </EmotionThemeProvider>
    </div>
  );
}
