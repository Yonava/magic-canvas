export const getDevicePixelRatio = () => window.devicePixelRatio ?? 1;
export const addTransform = (ctx, t) => {
    const translateX = t.translateX ?? 0;
    const translateY = t.translateY ?? 0;
    if (translateX !== 0 || translateY !== 0) {
        ctx.translate(translateX, translateY);
    }
    const scaleX = t.scaleX ?? 1;
    const scaleY = t.scaleY ?? 1;
    if (scaleX !== 1 || scaleY !== 1) {
        ctx.scale(scaleX, scaleY);
    }
    const skewX = t.skewX ?? 0;
    const skewY = t.skewY ?? 0;
    if (skewX !== 0 || skewY !== 0) {
        ctx.transform(1, skewY, skewX, 1, 0, 0);
    }
};
