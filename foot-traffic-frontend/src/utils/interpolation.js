// Author: Dawson De Mond 4/24/2024
function componentToHex(c) {
    let hex = Math.round(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
function rgbToHex(r, g, b, a) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + a;
}

export default function interpolateRGB(rgbA, rgbB, percent){
    const {r:rStart, g:gStart, b:bStart} = rgbA;
    const {r:rEnd, g:gEnd, b:bEnd} = rgbB;

    const interpolatedR = rStart + (rEnd - rStart) * percent/ 100;
    const interpolatedG = gStart + (gEnd - gStart) * percent/ 100;
    const interpolatedB = bStart + (bEnd - bStart) * percent/ 100;
    return rgbToHex(interpolatedR, interpolatedG, interpolatedB, "80");
}

export {interpolateRGB};

