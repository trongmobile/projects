import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default () => {
//   return defineConfig({
//     root: "./src",
//     base: "",
//     plugins: [tsconfigPaths(), react()],
//   });
// };
export default defineConfig({
  base: '/solution/',  // Đúng với GitHub Pages
  plugins: [tsconfigPaths(), react()],
  root: '.',            // <== đảm bảo dùng root thư mục hiện tại
});