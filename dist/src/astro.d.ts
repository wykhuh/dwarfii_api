/*** ---------------------------------------------- ***/
/*** ---------------- MODULE ASTRO ---------------- ***/
/*** ---------------------------------------------- ***/
/**
 * 4.10.2 Start calibration
 * Create Encoded Packet for the command CMD_ASTRO_START_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStartCalibration(): Uint8Array;
/**
 * 4.10.3 Stop calibration
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStopCalibration(): Uint8Array;
/**
 * 4.10.4 Start GOTO and track deep space objects
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_DSO
 * @param {number} ra Right Ascension
 * @param {number} dec Declination
 * @param {string} target_name
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoDso(ra: number, dec: number, target_name: string): Uint8Array;
/**
 * 4.10.5 Start GOTO and track solar system targets
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_SOLAR_SYSTEM
 * @param {number} index SolarSystemTargetNumber
 * @param {number} lon Longitude
 * @param {number} lat Lattitude
 * @param {string} targetName
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoSolarSystem(index: number, lon: number, lat: number, targetName: string): Uint8Array;
/**
 * 4.10.6 Stop GOTO
 * Create Encoded Packet for the command CMD_ASTRO_STOP_GOTO
 * @returns {Uint8Array}
 */
export function messageAstroStopGoto(): Uint8Array;
/**
 * 4.10.7 Start Sun track & & Moon track
 * Create Encoded Packet for the command CMD_ASTRO_START_TRACK_SPECIAL_TARGET
 * @returns {Uint8Array}
 */
export function messageAstroStartTrackSpecialTarget(index: any, lon: any, lat: any): Uint8Array;
/**
 * 4.10.8 Stop sun and moon tracking
 * Create Encoded Packet for the command CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET
 * @returns {Uint8Array}
 */
export function messageAstroStopTrackSpecialTarget(): Uint8Array;
/**
 * 4.10.9 Start stack
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStartCaptureRawLiveStacking(): Uint8Array;
/**
 * 4.10.10 stop stack
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureRawLiveStacking(): Uint8Array;
/**
 * 4.10.11 Start Wide stack
 * Create Encoded Packet for the command CMD_ASTRO_START_WIDE_CAPTURE_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStartWideCaptureLiveStacking(): Uint8Array;
/**
 * 4.10.12 stop stack
 * Create Encoded Packet for the command CMD_ASTRO_STOP_WIDE_CAPTURE_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStopWideCaptureLiveStacking(): Uint8Array;
/**
 * 4.10.13 Inquire about the dark field that has been shot
 * Create Encoded Packet for the command CMD_ASTRO_CHECK_GOT_DARK
 * @returns {Uint8Array}
 */
export function messageAstroCheckGotDark(): Uint8Array;
/**
 * 4.10.14 Start shooting dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_DARK
 * @param {number} reshoot // Whether to reshoot, 0: No; 1: Remake
 * @returns {Uint8Array}
 */
export function messageAstroStartCaptureRawDark(reshoot: number): Uint8Array;
/**
 * 4.10.15 Stop shooting dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_DARK
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureRawDark(): Uint8Array;
/**
 * 4.10.16 GO LIVE interface
 * Create Encoded Packet for the command CMD_ASTRO_GO_LIVE
 * @returns {Uint8Array}
 */
export function messageAstroGoLive(): Uint8Array;
/**
 * 4.10.17 One-click GOTO deep space celestial body
 * Create Encoded Packet for the command CMD_ASTRO_START_ONE_CLICK_GOTO_DSO
 * @param {number} ra Right Ascension
 * @param {number} dec Declination
 * @param {string} target_name
 * @returns {Uint8Array}
 */
export function messageAstroStartOneClickGotoDso(ra: number, dec: number, target_name: string): Uint8Array;
/**
 * 4.10.18 One-click GOTO solar system target
 * Create Encoded Packet for the command CMD_ASTRO_START_ONE_CLICK_GOTO_SOLAR_SYSTEM
 * @param {number} index SolarSystemTargetNumber
 * @param {number} lon Longitude
 * @param {number} lat Lattitude
 * @param {string} targetName
 * @returns {Uint8Array}
 */
export function messageAstroStartOneClickGotoSolarSystem(index: number, lon: number, lat: number, targetName: string): Uint8Array;
/**
 * 4.10.19 Stop one-click GOTO
 * Create Encoded Packet for the command CMD_ASTRO_STOP_ONE_CLICK_GOTO
 * @returns {Uint8Array}
 */
export function messageAstroStopOneClickGoto(): Uint8Array;
/**
 * 4.10.20 Start EQ verification
 * Create Encoded Packet for the command CMD_ASTRO_START_EQ_SOLVING
 * @param {number} lon Longitude
 * @param {number} lat Lattitude
 * @returns {Uint8Array}
 */
export function messageAstroStartEqSolving(lon: number, lat: number): Uint8Array;
/**
 * 4.10.21 Stop EQ verification
 * Create Encoded Packet for the command CMD_ASTRO_STOP_EQ_SOLVING
 * @returns {Uint8Array}
 */
export function messageAstroStopEqSolving(): Uint8Array;
/**
 * 4.10.22 Start shooting the dark field with specified parameters
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_DARK_WITH_PARAM
 * @param {number} exp_index // Exposure parameter index value
 * @param {number} gain_index // Gain parameter index value
 * @param {number} bin_index // Binning parameter index value
 * @param {number} cap_size // Number of shots
 * @returns {Uint8Array}
 */
export function messageAstroCaptureDarkFrameWithParam(exp_index: number, gain_index: number, bin_index: number, cap_size: number): Uint8Array;
/**
 * 4.10.23 Stop shooting the dark field with specified parameters
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_DARK_WITH_PARAM
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureDarkFrameWithParam(): Uint8Array;
/**
 * 4.10.24 Query the list of recorded dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_GET_DARK_FRAME_LIST
 * @returns {Uint8Array}
 */
export function messageAstroGetDarkFrameList(): Uint8Array;
/**
 * 4.10.25 Delete the specified dark field list
 * Create Encoded Packet for the command CMD_ASTRO_DEL_DARK_FRAME_LIST
 * @param {number} exp_index // Exposure parameter index value
 * @param {number} gain_index // Gain parameter index value
 * @param {number} bin_index // Binning parameter index value
 * @returns {Uint8Array}
 */
export function messageAstroDelDarkFrameList(exp_index: number, gain_index: number, bin_index: number): Uint8Array;
/**
 * 4.10.26 Start shooting wide-angle dark field with specified parameters
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_WIDE_RAW_DARK_WITH_PARAM
 * @param {number} exp_index // Exposure parameter index value
 * @param {number} gain_index // Gain parameter index value
 * @param {number} bin_index // Binning parameter index value
 * @param {number} cap_size // Number of shots
 * @returns {Uint8Array}
 */
export function messageAstroCaptureWideDarkFrameWithParam(exp_index: number, gain_index: number, bin_index: number, cap_size: number): Uint8Array;
/**
 * 4.10.27 Stop shooting the dark field with wide-angle specified parameters
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_WIDE_RAW_DARK_WITH_PARAM
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureWideDarkFrameWithParam(): Uint8Array;
/**
 * 4.10.28 Query the list of wide-angle recorded dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_GET_WIDE_DARK_FRAME_LIST
 * @returns {Uint8Array}
 */
export function messageAstroGetWideDarkFrameList(): Uint8Array;
/**
 * 4.10.29 Delete the specified wide-angle dark field list
 * Create Encoded Packet for the command CMD_ASTRO_DEL_WIDE_DARK_FRAME_LIST
 * @param {number} exp_index // Exposure parameter index value
 * @param {number} gain_index // Gain parameter index value
 * @param {number} bin_index // Binning parameter index value
 * @returns {Uint8Array}
 */
export function messageAstroDelWideDarkFrameList(exp_index: number, gain_index: number, bin_index: number): Uint8Array;
//# sourceMappingURL=astro.d.ts.map