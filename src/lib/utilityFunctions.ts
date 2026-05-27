import { useEffect, useState } from "react";
import { format } from 'date-fns';

type Theme = 'light' | 'dark';

export function useMediaQuery(maxWidth: Number) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(`(max-width: ${maxWidth}px)`).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler); // cleanup
  }, [maxWidth]);
  return matches;
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme(): { theme: Theme; setTheme: (t: Theme) => void } {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return { theme, setTheme };
}

export function currentDate() {
  return new Date();
}

export function formatDate(date: Date) {
  return format(date, 'dd MMMM yyyy');
}
