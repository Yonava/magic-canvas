import "./tailwind.css";
import MagicCanvas from "./MagicCanvas.vue";
import { App } from "vue";

export * from "./types.js";
export * from "./useMagicCanvas.js";
export * from "./coordinates/index.js";
export { getDevicePixelRatio } from "./camera/utils.js";
export { MagicCanvas };
declare module "vue" {
  export interface GlobalComponents {
    MagicCanvas: typeof MagicCanvas;
  }
}

export const MagicCanvasPlugin = {
  install(app: App) {
    app.component("MagicCanvas", MagicCanvas);
  },
};
