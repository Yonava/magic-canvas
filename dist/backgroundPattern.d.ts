import type { Camera } from './camera';
import type { Coordinate, DrawFns } from './types';
export type DrawPattern = (ctx: CanvasRenderingContext2D, at: Coordinate, alpha: string) => void;
export declare const useBackgroundPattern: ({ panX, panY, zoom }: Camera["state"], drawPattern: DrawFns["backgroundPattern"]) => {
    draw: (ctx: CanvasRenderingContext2D) => void;
};
