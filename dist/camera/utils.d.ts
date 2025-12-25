export type TransformProps = {
    /** corresponds to `a` in {@link CanvasRenderingContext2D.setTransform} */
    scaleX: number;
    /** corresponds to `b` in {@link CanvasRenderingContext2D.setTransform} */
    skewY: number;
    /** corresponds to `c` in {@link CanvasRenderingContext2D.setTransform} */
    skewX: number;
    /** corresponds to `d` in {@link CanvasRenderingContext2D.setTransform} */
    scaleY: number;
    /** corresponds to `e` in {@link CanvasRenderingContext2D.setTransform} */
    translateX: number;
    /** corresponds to `f` in {@link CanvasRenderingContext2D.setTransform} */
    translateY: number;
};
export type TransformOptions = Partial<TransformProps>;
export declare const getDevicePixelRatio: () => number;
export declare const addTransform: (ctx: CanvasRenderingContext2D, t: TransformOptions) => void;
