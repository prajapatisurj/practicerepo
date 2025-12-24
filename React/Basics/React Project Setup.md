```bash
npm create vite@latest
```

```bash
# npm 7+, extra double-dash is needed:
#Creating with project name
npm create vite@latest my-vue-app -- --template vue
```


```bash
cd my-project
npm install
npm run dev
```

## Tailwind CSS with react

```bash
npm install tailwindcss @tailwindcss/vite
```


content of the file
```jsx
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig({

  plugins: [react(),    tailwindcss(),],

})
```


**for intellisense** 
```bash
npx tailwindcss init -p
```

Content of the file Tailwind.config.js
```jsx
/** @type {import('tailwindcss').Config} */

export default {

  content: ["./src/**/*.{html,js,jsx,ts,tsx}",],

  theme: {

    extend: {},

  },

  plugins: [],

}
```
