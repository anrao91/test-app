import { createContext } from "react";

export const ThemeContext = createContext({
	theme: {
		workTheme: "cadetblue-bg",
		personalTheme: "gainsboto-bg",
		plainTheme: "white-bg"
	}
});

export const LocaleContext = createContext({
	locale: {
		local: "₹",
		crypto: "₿"
	}
});
