'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function ThemeToggle(){
  const { theme, setTheme } = useTheme();
  const [mounted,setMounted] = useState(false);
  useEffect(()=>setMounted(true),[]);
  if(!mounted) return null;
  const isDark = theme === 'dark';
  return (
    <button aria-label="Toggle Theme" className="btn btn-ghost" onClick={()=> setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? '🌙' : '☀️'} <span className="hidden sm:inline">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
