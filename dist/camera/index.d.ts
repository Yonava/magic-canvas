import type { Ref } from 'vue';
export declare const useCamera: (canvas: Ref<HTMLCanvasElement | undefined>, storageKey: string) => {
    transformAndClear: (ctx: CanvasRenderingContext2D) => void;
    actions: {
        zoomIn: (increment?: number) => void;
        zoomOut: (decrement?: number) => void;
    };
    state: {
        panX: import("@vueuse/shared").RemovableRef<number>;
        panY: import("@vueuse/shared").RemovableRef<number>;
        zoom: import("@vueuse/shared").RemovableRef<number>;
    };
    cleanup: (ref: HTMLCanvasElement) => void;
};
export type Camera = ReturnType<typeof useCamera>;
