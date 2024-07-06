import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Conquest Relay",
      fileName: `conquest-relay`,
    },
    rollupOptions: {
      external: [],
    },
  },
})