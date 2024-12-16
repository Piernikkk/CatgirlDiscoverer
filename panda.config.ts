import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  'html, body': {
    backgroundColor: 'background',
    fontFamily: 'var(--font-poppins)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  }
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./lib/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./mdx-components.tsx"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          background: {
            value: '#0A0A0B',
          },
          tile: {
            0: { value: '#121212' },
            1: { value: '#242424' },
          },
          text: {
            0: { value: '#E9ECEF' },
            1: { value: '#A1A1AA' },
            2: { value: '#898989' },
            3: { value: '#7A7A7A' },
          },
          border: {
            value: '#ffffff10',
          },
          gray: {
            0: { value: '#f5f5f5' },
            1: { value: '#e7e7e7' },
            2: { value: '#cdcdcd' },
            3: { value: '#b2b2b2' },
            4: { value: '#9a9a9a' },
            5: { value: '#8b8b8b' },
            6: { value: '#848484' },
            7: { value: '#717171' },
            8: { value: '#656565' },
            9: { value: '#575757' },
          },
          blue: {
            0: { value: '#e5f4ff' },
            1: { value: '#cde2ff' },
            2: { value: '#9bc2ff' },
            3: { value: '#64a0ff' },
            4: { value: '#3984fe' },
            5: { value: '#1d72fe' },
            6: { value: '#0969ff' },
            7: { value: '#0058e4' },
            8: { value: '#004ecc' },
            9: { value: '#0043b5' },
          },
          orange: {
            0: { value: '#fff8e1' },
            1: { value: '#ffefcb' },
            2: { value: '#ffdd9a' },
            3: { value: '#ffca64' },
            4: { value: '#ffba38' },
            5: { value: '#ffb01b' },
            6: { value: '#ffab09' },
            7: { value: '#e39500' },
            8: { value: '#cb8400' },
            9: { value: '#b07100' },
          },
          red: {
            0: { value: '#ffe9e9' },
            1: { value: '#ffd1d1' },
            2: { value: '#fba0a1' },
            3: { value: '#f76d6d' },
            4: { value: '#f34141' },
            5: { value: '#f22625' },
            6: { value: '#f21616' },
            7: { value: '#d8070b' },
            8: { value: '#c10008' },
            9: { value: '#a90003' },
          },
          dimmed: {
            blue: {
              0: { value: '#e5f4ff20' },
              1: { value: '#cde2ff20' },
              2: { value: '#9bc2ff20' },
              3: { value: '#64a0ff20' },
              4: { value: '#3984fe20' },
              5: { value: '#1d72fe20' },
              6: { value: '#0969ff20' },
              7: { value: '#0058e420' },
              8: { value: '#004ecc20' },
              9: { value: '#0043b520' },
            },
            red: {
              0: { value: '#ffe9e920' },
              1: { value: '#ffd1d120' },
              2: { value: '#fba0a120' },
              3: { value: '#f76d6d20' },
              4: { value: '#f3414120' },
              5: { value: '#f2262520' },
              6: { value: '#f2161620' },
              7: { value: '#d8070b20' },
              8: { value: '#c1000820' },
              9: { value: '#a9000320' },
            },
            gray: {
              0: { value: '#f5f5f520' },
              1: { value: '#e7e7e720' },
              2: { value: '#cdcdcd20' },
              3: { value: '#b2b2b220' },
              4: { value: '#9a9a9a20' },
              5: { value: '#8b8b8b20' },
              6: { value: '#84848420' },
              7: { value: '#71717120' },
              8: { value: '#65656520' },
              9: { value: '#57575720' },
            },
            orange: {
              0: { value: '#fff8e120' },
              1: { value: '#ffefcb20' },
              2: { value: '#ffdd9a20' },
              3: { value: '#ffca6420' },
              4: { value: '#ffba3820' },
              5: { value: '#ffb01b20' },
              6: { value: '#ffab0920' },
              7: { value: '#e3950020' },
              8: { value: '#cb840020' },
              9: { value: '#b0710020' },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  globalCss,
});
