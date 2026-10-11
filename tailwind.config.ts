import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { acid: '#D8FF35', ink: '#11110F' }, fontFamily: { display: ['Arial', 'Helvetica', 'sans-serif'] } } }, plugins: [] };
export default config;
