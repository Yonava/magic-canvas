import { Ref } from 'vue';
export declare const MIN_ZOOM = 0.2;
export declare const MAX_ZOOM = 10;
export declare const ZOOM_SENSITIVITY = 0.02;
export declare const PAN_SENSITIVITY = 1;
export declare const usePanAndZoom: (canvas: Ref<HTMLCanvasElement | undefined>, storageKey: string) => {
    actions: {
        zoomIn: (increment?: number) => void;
        zoomOut: (decrement?: number) => void;
    };
    state: {
        panX: import('@vueuse/shared').RemovableRef<number>;
        panY: import('@vueuse/shared').RemovableRef<number>;
        zoom: import('@vueuse/shared').RemovableRef<number>;
    };
    getTransform: () => {
        scaleX: number;
        scaleY: number;
        translateX: number;
        translateY: number;
    };
    cleanup: (ref: HTMLCanvasElement) => void;
};
