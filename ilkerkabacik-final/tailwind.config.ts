import type { Config } from 'tailwindcss'
const config: Config = {darkMode:'class',content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{brand:{DEFAULT:'#0A84FF',dark:'#0B5ED7'}},boxShadow:{soft:'0 10px 30px rgba(0,0,0,0.08)'}}},plugins:[]}
export default config
