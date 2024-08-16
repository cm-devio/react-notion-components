import path, { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [react(), dts({ include: ["src", "lib"] })],
	build: {
		lib: {
			entry: resolve(__dirname, "src/lib/main.ts"),
			formats: ["es"],
		},
		copyPublicDir: false,
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
