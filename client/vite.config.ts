/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
    globals: true,
    include: ["**/?(*.)test.ts?(x)"],
    setupFiles: ["./tests/unit/setup.ts"],
  },
});
