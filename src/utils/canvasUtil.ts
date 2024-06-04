import {newId} from './idUtil'

export const newCanvas = () => {
    const canvas = document.createElement('canvas');

    canvas.id = newId('webgl_lib0_canvas')
    // canvas.width = 1224;
    // canvas.height = 768;
    // canvas.style.zIndex = '8';
    // canvas.style.position = "absolute";
    // canvas.style.border = "1px solid";

    return canvas
}