import { usePanAndZoom } from './panZoom';
import { addTransform, getDevicePixelRatio, } from './utils';
export const useCamera = (canvas, storageKey) => {
    const { getTransform: getPZTransform, ...rest } = usePanAndZoom(canvas, storageKey);
    const dpr = getDevicePixelRatio();
    const dprTransform = {
        scaleX: dpr,
        scaleY: dpr,
    };
    return {
        ...rest,
        transformAndClear: (ctx) => {
            ctx.resetTransform();
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            const transforms = [dprTransform, getPZTransform()];
            for (const t of transforms)
                addTransform(ctx, t);
        },
    };
};
