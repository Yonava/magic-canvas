import { default as MagicCanvas } from './MagicCanvas.vue';
import { App } from 'vue';
export * from './types.js';
export * from './useMagicCanvas.js';
export * from './coordinates/index.js';
export { getDevicePixelRatio } from './camera/utils.js';
export { MagicCanvas };
declare module "vue" {
    interface GlobalComponents {
        MagicCanvas: typeof MagicCanvas;
    }
}
export declare const MagicCanvasPlugin: {
    install(app: App): void;
};
