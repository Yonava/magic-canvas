/**
 * a registry for all localStorage keys this application uses
 */
export const localKeys = {
    /** camera `panX` state in magic canvas - {@link Camera.state} */
    cameraPanX: (key) => `camera-pan-x-${key}`,
    /** camera `panY` state in magic canvas - {@link Camera.state} */
    cameraPanY: (key) => `camera-pan-y-${key}`,
    /** camera `zoom` state in magic canvas - {@link Camera.state} */
    cameraZoom: (key) => `camera-zoom-${key}`,
};
/**
 * perform **type safe** localStorage actions
 */
export const local = {
    get: (key) => localStorage.getItem(key),
    set: (key, value) => localStorage.setItem(key, value),
    remove: (key) => localStorage.removeItem(key),
    clear: localStorage.clear,
};
