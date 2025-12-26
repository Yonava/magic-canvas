import MagicCanvas from "./MagicCanvas.vue";
import { App } from "vue";

export * from "./types";
export * from "./useMagicCanvas";
export * from "./coordinates";
export { getDevicePixelRatio } from "./camera/utils";
export { MagicCanvas };
declare module "vue" {
  export interface GlobalComponents {
    MagicCanvas: typeof MagicCanvas;
  }
}

export default {
  install(app: App) {
    app.component("MagicCanvas", MagicCanvas);
  },
};
