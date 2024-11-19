/*** ------------------------------------------------ ***/
/*** ---------------- MODULE PANORAMA---------------- ***/
/*** ------------------------------------------------ ***/
/**
 * 3.15.3 Start Panorama
 * Create Encoded Packet for the command CMD_PANORAMA_START_GRID
 * @returns {Uint8Array}
 */
export function messagePanoramaStartGrid(): Uint8Array;
/**
 * 3.15.4 Stop Panorama
 * Create Encoded Packet for the command CMD_PANORAMA_STOP
 * @returns {Uint8Array}
 */
export function messagePanoramaStop(): Uint8Array;
/**
 * 3.15.5 Start Panorama
 * Create Encoded Packet for the command CMD_PANORAMA_START_EULER_RANGE
 * @param {number} yaw_range ; // yaw range
 * @param {number} pitch_range ; // pitch range
 * @returns {Uint8Array}
 */
export function messagePanoramaStartPanoramaByEulerRange(yaw_range: number, pitch_range: number): Uint8Array;
//# sourceMappingURL=panorama.d.ts.map