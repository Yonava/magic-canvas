import { getDevicePixelRatio } from "../camera/utils";
import { onMounted, ref } from "vue";
import { getCtx } from "magic-utils-yonava";
export const getCanvasTransform = (ctx) => {
    const { a, e, f } = ctx.getTransform();
    // TODO investigate why dpr isn't already factored into ctx. Camera should add it with the PZ transform!
    const dpr = getDevicePixelRatio();
    const zoom = a / dpr;
    const panX = e / dpr;
    const panY = f / dpr;
    return { panX, panY, zoom };
};
/**
 * magic coordinates are coordinates transformed by the pan and zoom of the camera.
 *
 * if the user has panned their camera 10px to the left, running this function with
 * `clientCoords` set to (0, 0) will return (-10, 0, 1)
 */
export const getMagicCoordinates = (clientCoords, ctx) => {
    const rect = ctx.canvas.getBoundingClientRect();
    const localX = clientCoords.clientX - rect.left;
    const localY = clientCoords.clientY - rect.top;
    const { panX, panY, zoom } = getCanvasTransform(ctx);
    const x = (localX - panX) / zoom;
    const y = (localY - panY) / zoom;
    return { x, y, zoom };
};
/**
 * client coordinates are the raw coordinates corresponding to the clients physical screen.
 *
 * the top left corner is (0, 0) and bottom right corner is (window.innerWidth, window.innerHeight).
 */
export const getClientCoordinates = (magicCoords, ctx) => {
    const { panX, panY, zoom } = getCanvasTransform(ctx);
    const { x, y } = magicCoords;
    return {
        clientX: x * zoom + panX,
        clientY: y * zoom + panY,
        zoom,
    };
};
export const useMagicCoordinates = (canvas) => {
    const coordinates = ref({ x: 0, y: 0 });
    const captureCoords = (ev) => (coordinates.value = getMagicCoordinates(ev, getCtx(canvas)));
    onMounted(() => {
        if (!canvas.value)
            throw new Error("Canvas not found in DOM. Check ref link.");
        canvas.value.addEventListener("mousemove", captureCoords);
        canvas.value.addEventListener("wheel", captureCoords);
    });
    return {
        coordinates,
        cleanup: (ref) => {
            ref.removeEventListener("mousemove", captureCoords);
            ref.removeEventListener("wheel", captureCoords);
        },
    };
};
