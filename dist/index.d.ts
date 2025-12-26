import MagicCanvas from "./MagicCanvas.vue";
import { App } from "vue";
export * from "./types";
export * from "./useMagicCanvas";
export * from "./coordinates";
export { getDevicePixelRatio } from "./camera/utils";
export { MagicCanvas };
declare module "vue" {
    interface GlobalComponents {
        MagicCanvas: typeof MagicCanvas;
    }
}
declare const _default: {
    install(app: App): void;
};
export default _default;
