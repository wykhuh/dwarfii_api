/*** ---------------------------------------------------- ***/
/*** ---------------- MODULE CAMERA WIDE ---------------- ***/
/*** ---------------------------------------------------- ***/
/**
 * 4.9.3 Turn on the camera
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_OPEN_CAMERA
 * @returns {Uint8Array}
 */
export function messageCameraWideOpenCamera(): Uint8Array;
/**
 * 4.9.4 Turn off the camera
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_CLOSE_CAMERA
 * @returns {Uint8Array}
 */
export function messageCameraWideCloseCamera(): Uint8Array;
/**
 * 4.9.5 Take photos
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_PHOTOGRAPH
 * @returns {Uint8Array}
 */
export function messageCameraWidePhotograph(): Uint8Array;
/**
 * 4.9.6 Start recording
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_START_RECORD
 * @returns {Uint8Array}
 */
export function messageCameraWideStartRecord(): Uint8Array;
/**
 * 4.9.7 Stop recording
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_STOP_RECORD
 * @returns {Uint8Array}
 */
export function messageCameraWideStopRecord(): Uint8Array;
/**
 * 4.9.8 Start continuous shooting
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_BURST
 * @returns {Uint8Array}
 */
export function messageCameraWideStartBurst(): Uint8Array;
/**
 * 4.9.9 Stop continuous shooting
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_STOP_BURST
 * @returns {Uint8Array}
 */
export function messageCameraWideStopBurst(): Uint8Array;
/**
 * 4.9.10 Get all parameters
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_ALL_PARAMS
 * @returns {Uint8Array}
 */
export function messageCameraWideGetAllParams(): Uint8Array;
/**
 * 4.9.11 Set exposure mode
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_EXP_MODE
 * @param {number} mode ; //0: Auto 1: Manual  ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetExpMode(mode: number): Uint8Array;
/**
 * 4.9.12 Acquire exposure mode
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_EXP_MODE
 * @returns {Uint8Array}
 */
export function messageCameraWideGetExpMode(): Uint8Array;
/**
 * 4.9.13 Set exposure value
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_EXP
 * @param {number} index  ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetExp(index: number): Uint8Array;
/**
 * 4.9.14 Get exposure value
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_EXP
 * @returns {Uint8Array}
 */
export function messageCameraWideGetExp(): Uint8Array;
/**
 * 4.9.15 Set gain mode
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_GAIN_MODE
 * @param {number} mode ; //0: Auto 1: Manual  ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetGainMode(mode: number): Uint8Array;
/**
 * 4.9.16 Acquisition gain mode
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_GAIN_MODE
 * @returns {Uint8Array}
 */
export function messageCameraWideGetGainMode(): Uint8Array;
/**
 * 4.9.17 Set gain value
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_GAIN
 * @param {number} index  ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetGain(index: number): Uint8Array;
/**
 * 4.9.18 Get gain value
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_GAIN
 * @returns {Uint8Array}
 */
export function messageCameraWideGetGain(): Uint8Array;
/**
 * 4.9.19 Set white balance mode
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_WB_MODE
 * @param {number} mode ; //0: Auto 1: Manual  ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetWBMode(mode: number): Uint8Array;
/**
 * 4.9.20 Set the white balance color temperature value
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_WB_CT
 * @param {number} index ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetWBColorTemp(index: number): Uint8Array;
/**
 * 4.9.21 Set brightness
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_BRIGHTNESS
 * UI value (A) -100  100  0 (Default)
 * @param {number} value  ; B = A * 64.0 / 10
 * @returns {Uint8Array}
 */
export function messageCameraWideSetBrightness(value: number): Uint8Array;
/**
 * 4.9.22 Set contrast
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_CONTRAST
 * UI value (A) -100  100  0 (Default)
 * @param {number} value  ; B = (A + 100) * 95.0 / 200
 * @returns {Uint8Array}
 */
export function messageCameraWideSetContrast(value: number): Uint8Array;
/**
 * 4.9.23 Set saturation
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_SATURATION
 * UI value (A) -100  100  60 (Default)
 * @param {number} value  ; B =(A + 100) * 100.0 / 200
 * @returns {Uint8Array}
 */
export function messageCameraWideSetSaturation(value: number): Uint8Array;
/**
 * 4.9.24 Set tone
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_HUE
 * UI value (A) -180  180  0 (Default)
 * @param {number} value  ; B = A * 2000.0 / 180
 * @returns {Uint8Array}
 */
export function messageCameraWideSetHue(value: number): Uint8Array;
/**
 * 4.9.25 Set sharpness
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_SHARPNESS
 * UI value (A) 0  100  17 (Default)
 * @param {number} value  ; B = A * 6.0 / 100 + 1
 * @returns {Uint8Array}
 */
export function messageCameraWideSetSharpness(value: number): Uint8Array;
/**
 * 4.9.26 Start time-lapse photography
 * Not documented
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_START_TIMELAPSE_PHOTO
 * @returns {Uint8Array}
 */
export function messageCameraWideStartTimeLapsePhoto(): Uint8Array;
/**
 * 4.9.27 Stop time-lapse photography
 * Not documented
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_STOP_TIMELAPSE_PHOTO
 * @returns {Uint8Array}
 */
export function messageCameraWideStopTimeLapsePhoto(): Uint8Array;
/**
 * 4.9.28 Set all camera parameters
 * Not documented
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_ALL_PARAMS
 * @param {number} exp_mode ; // 0: Auto 1: Manual
 * @param {number} exp_index ;
 * @param {number} gain_mode ;
 * @param {number} gain_index ;
 * @param {number} ircut_value ; //IRCUT value 0: CUT 1: PASS
 * @param {number} wb_mode ; //white balance mode 0: automatic 1: manual
 * @param {number} wb_index_type ; //White Balance Manual Mode Index Type: 0: Color Temperature Mode 1: Scene Mode
 * @param {number} wb_index ;
 * @param {number} brightness ;
 * @param {number} contrast ;
 * @param {number} hue ;
 * @param {number} saturation ;
 * @param {number} sharpness ;
 * @param {number} jpg_quality ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetAllParams(exp_mode: number, exp_index: number, gain_mode: number, gain_index: number, ircut_value: number, wb_mode: number, wb_index_type: number, wb_index: number, brightness: number, contrast: number, hue: number, saturation: number, sharpness: number, jpg_quality: number): Uint8Array;
//# sourceMappingURL=camera_wide.d.ts.map