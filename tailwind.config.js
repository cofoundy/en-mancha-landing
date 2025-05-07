/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Neutrals
        'neutral-white': '#FFFFFF',
        'neutral-lightest': '#F2F2F2',
        'neutral-lighter': '#DADAD8',
        'neutral-light': '#B6B5B2',
        'neutral': '#86847F',
        'neutral-dark': '#55534C',
        'neutral-darker': '#252219',
        'neutral-darkest': '#0D0A00',
        
        // Guardsman Red
        'guardsman-lightest': '#FAE5E5',
        'guardsman-lighter': '#F6CCCC',
        'guardsman-light': '#E14C4C',
        'guardsman': '#D50000',
        'guardsman-dark': '#AA0000',
        'guardsman-darker': '#550000',
        'guardsman-darkest': '#3F0000',
        
        // Amber
        'amber-lightest': '#FFF8E6',
        'amber-lighter': '#FFF2CD',
        'amber-light': '#FFD351',
        'amber': '#FFC107',
        'amber-dark': '#CC9A05',
        'amber-darker': '#664D02',
        'amber-darkest': '#4C3902',
        
        // Green Haze
        'green-haze-lightest': '#E5F4ED',
        'green-haze-lighter': '#CCEADC',
        'green-haze-light': '#4CB584',
        'green-haze': '#009650',
        'green-haze-dark': '#007840',
        'green-haze-darker': '#003C20',
        'green-haze-darkest': '#002D18',
        
        // Catalina Blue
        'catalina-lightest': '#E6EAF1',
        'catalina-lighter': '#CED5E4',
        'catalina-light': '#536CA0',
        'catalina': '#0A2D78',
        'catalina-dark': '#082460',
        'catalina-darker': '#041230',
        'catalina-darkest': '#030D24',
        
        // Emperor
        'emperor-lightest': '#EDEDED',
        'emperor-lighter': '#DCDCDC',
        'emperor-light': '#848484',
        'emperor': '#505050',
        'emperor-dark': '#404040',
        'emperor-darker': '#202020',
        'emperor-darkest': '#181818',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', {
          lineHeight: '120%',
        }],
        'h1-sm': ['2.5rem', {
          lineHeight: '120%',
        }],
        'h2': ['3rem', {
          lineHeight: '120%',
        }],
        'h2-sm': ['2.25rem', {
          lineHeight: '120%',
        }],
        'h3': ['2.5rem', {
          lineHeight: '120%',
        }],
        'h3-sm': ['2rem', {
          lineHeight: '130%',
        }],
        'h4': ['1.5rem', {
          lineHeight: '130%',
        }],
        'h4-sm': ['1.5rem', {
          lineHeight: '140%',
        }],
        'h5': ['1.25rem', {
          lineHeight: '140%',
        }],
        'h6': ['1.125rem', {
          lineHeight: '140%',
        }],
        'h6-sm': ['1rem', {
          lineHeight: '150%',
        }],
        'tagline': ['1.25rem', {
          lineHeight: '150%',
        }],
        'lg': ['1.125rem', { // 18px
          lineHeight: '150%',
        }],
        'md': ['1rem', { // 16px
          lineHeight: '150%',
        }],
        'base': ['0.875rem', { // 14px
          lineHeight: '150%',
        }],
        'sm': ['0.75rem', { // 12px
          lineHeight: '150%',
        }],
        'xs': ['0.75rem', { // 12px (tiny)
          lineHeight: '150%',
        }],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
    },
  },
  plugins: [],
}

