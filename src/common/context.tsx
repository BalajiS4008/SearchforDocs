import { createContext } from "react";

export interface ThemeContextType {
  themeName: string;
}

export interface LoadContextType {
   loading: boolean;
   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RefreshContextType {
   refresh: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  themeName: 'material3'
});

export const LoadContext = createContext<LoadContextType>({
  loading: true,
  setLoading: () => {}
});

export const RefreshContext = createContext<RefreshContextType>({
  refresh: false
});

export interface TocContextType {
  routeToc: boolean | undefined;
  setRouteToc: (toc: boolean | undefined) => void;
}

export const TocContext = createContext<TocContextType>({
  routeToc: undefined,
  setRouteToc: () => {}
});