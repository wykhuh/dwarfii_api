/*** --------------------------------------------- ***/
/*** ---------------- MODULE TRACK---------------- ***/
/*** --------------------------------------------- ***/
/**
 * 4.14.3 Started tracking
 * Create Encoded Packet for the command CMD_TRACK_START_TRACK
 * @param {number} x ; //x coordinate of the upper left point of the target box
 * @param {number} y ; // The y coordinate of the upper left point of the target box
 * @param {number} w ; // width of the target box
 * @param {number} h ; //The length of the target box
 * @returns {Uint8Array}
 */
export function messageTrackStartTrack(x: number, y: number, w: number, h: number): Uint8Array;
/**
 * 3.14.4 Stop tracking
 * Create Encoded Packet for the command CMD_TRACK_STOP_TRACK
 * @returns {Uint8Array}
 */
export function messageTrackStopTrack(): Uint8Array;
/**
 * 3.14.5 Start Sentinel Mode
 * Create Encoded Packet for the command CMD_SENTRY_MODE_START
 * @param {number} mode ; //Reserved field, you can pass 0 now
 * @returns {Uint8Array}
 */
export function messageSentryModeStart(mode?: number): Uint8Array;
/**
 * 3.14.6 Stop Sentinel Mode
 * Create Encoded Packet for the command CMD_SENTRY_MODE_STOP
 * @returns {Uint8Array}
 */
export function messageSentryModeStop(): Uint8Array;
/**
 * 3.14.7 Start "Multi-Object Tracking"
 * Create Encoded Packet for the command CMD_MOT_START
 * @returns {Uint8Array}
 */
export function messageMOTStart(): Uint8Array;
/**
 * 3.14.8 "Multi-Object Tracking" feature starts tracking a target
 * Create Encoded Packet for the command CMD_MOT_TRACK_ONE
 * @param {number} id ; // target id
 * @returns {Uint8Array}
 */
export function messageMOTStartOne(id: number): Uint8Array;
/**
 * 3.14.9 Start UFO Mode
 * Create Encoded Packet for the command CMD_UFOTRACK_MODE_START
 * @param {number} mode ; //Reserved field, you can pass 0 now
 * @returns {Uint8Array}
 */
export function messageUFOTrackModeStart(mode?: number): Uint8Array;
/**
 * 3.14.10 Stop UFO Mode
 * Create Encoded Packet for the command CMD_UFOTRACK_MODE_STOP
 * @returns {Uint8Array}
 */
export function messageUFOTrackModeStop(): Uint8Array;
//# sourceMappingURL=tracking.d.ts.map