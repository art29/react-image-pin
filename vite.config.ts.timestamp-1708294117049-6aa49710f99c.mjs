// vite.config.ts
import { defineConfig } from "file:///Users/arthur/Desktop/sites/react-image-pin/node_modules/vite/dist/node/index.js";
import react from "file:///Users/arthur/Desktop/sites/react-image-pin/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
import dts from "file:///Users/arthur/Desktop/sites/react-image-pin/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///Users/arthur/Desktop/sites/react-image-pin/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/arthur/Desktop/sites/react-image-pin";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["lib"], insertTypesEntry: true })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"],
      fileName: "main"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJ0aHVyL0Rlc2t0b3Avc2l0ZXMvcmVhY3QtaW1hZ2UtcGluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJ0aHVyL0Rlc2t0b3Avc2l0ZXMvcmVhY3QtaW1hZ2UtcGluL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcnRodXIvRGVza3RvcC9zaXRlcy9yZWFjdC1pbWFnZS1waW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tIFwidml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3NcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGxpYkluamVjdENzcygpLFxuICAgIGR0cyh7IGluY2x1ZGU6IFtcImxpYlwiXSwgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImxpYi9tYWluLnRzXCIpLFxuICAgICAgZm9ybWF0czogW1wiZXNcIl0sXG4gICAgICBmaWxlTmFtZTogXCJtYWluXCJcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiLCBcInJlYWN0L2pzeC1ydW50aW1lXCIsIFwidGFpbHdpbmRjc3NcIl0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLG9CQUFvQjtBQUNoVixPQUFPLFdBQVc7QUFDbEIsWUFBWSxVQUFVO0FBQ3RCLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUo3QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxrQkFBa0IsS0FBSyxDQUFDO0FBQUEsRUFDbEQ7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxJQUNmLEtBQUs7QUFBQSxNQUNILE9BQVksYUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDNUMsU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNkLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxhQUFhLHFCQUFxQixhQUFhO0FBQUEsSUFDckU7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
