import MagicCanvas from "./MagicCanvas.vue";
export * from "./types";
export * from "./useMagicCanvas";
export * from "./coordinates";
export { getDevicePixelRatio } from "./camera/utils";
export { MagicCanvas };
export default {
    install(app) {
        app.component("MagicCanvas", MagicCanvas);
    },
};
