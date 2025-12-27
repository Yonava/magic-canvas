import { Ref } from 'vue';
import { Coordinate } from '../types';
export declare const getCanvasTransform: (ctx: CanvasRenderingContext2D) => {
    panX: number;
    panY: number;
    zoom: number;
};
/**
 * the coordinates in the real world. aka the browser
 */
export type ClientCoords = Pick<MouseEvent, "clientX" | "clientY">;
/**
 * the coordinates in the magic canvas world
 */
export type MagicCoords = Coordinate;
export type WithZoom<T> = T & {
    /**
     * the scale factor of the canvas
     */
    zoom: number;
};
/**
 * magic coordinates are coordinates transformed by the pan and zoom of the camera.
 *
 * if the user has panned their camera 10px to the left, running this function with
 * `clientCoords` set to (0, 0) will return (-10, 0, 1)
 */
export declare const getMagicCoordinates: (clientCoords: ClientCoords, ctx: CanvasRenderingContext2D) => WithZoom<MagicCoords>;
/**
 * client coordinates are the raw coordinates corresponding to the clients physical screen.
 *
 * the top left corner is (0, 0) and bottom right corner is (window.innerWidth, window.innerHeight).
 */
export declare const getClientCoordinates: (magicCoords: MagicCoords, ctx: CanvasRenderingContext2D) => WithZoom<ClientCoords>;
export declare const useMagicCoordinates: (canvas: Ref<HTMLCanvasElement | undefined>) => {
    coordinates: Ref<{
        x: number;
        y: number;
    }, Coordinate | {
        x: number;
        y: number;
    }>;
    cleanup: (ref: HTMLCanvasElement) => void;
};
