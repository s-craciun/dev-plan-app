import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import ViteJest from 'vite-plugin-jest';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        expandProps: 'start',
        svgProps: {
          className:
            "{props.className ? props.className + ' svgr-icon' : 'svgr-icon'}",
        },
      },
      include: '**/*.svg',
    }),
    ViteJest(),
  ],
});
