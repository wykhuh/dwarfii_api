/** @module api_codes */
/* eslint no-unused-vars: 0 */

export const DwarfIP = "192.168.88.1";

/**
 * @param {string} IP
 * @returns {string}
 */
export const wsURL = (IP) => `ws://${IP}:9900`;

/**
 * @param {string} IP
 * @returns {string}
 */
export const wideangleURL = (IP) => `http://${IP}:8092/secondstream`;

/**
 * @param {string} IP
 * @returns {string}
 */
export const telephotoURL = (IP) => `http://${IP}:8092/mainstream`;

/**
 * @param {string} IP
 * @returns {string}
 */

// old ip : not working anymore in V2
//export const rawPreviewURL = (IP) => `http://${IP}:8092/rawstream`;
export const rawPreviewURL = (IP) => `http://${IP}:8092/mainstream`;

/**
 * @param {string} IP
 * @returns {string}
 */
export const firmwareVersion = (IP) => `http://${IP}:8082/firmwareVersion`;

/**
 * @param {string} IP
 * @returns {string}
 */
export const getDefaultParamsConfig = (IP) =>
  `http://${IP}:8082/getDefaultParamsConfig`;

/**
 * POST Request
 * data.deviceID 1:DWARF II 2:DWARF3
 * data.deviceName 1:DWARF_XXXXXX  2:DWARF3_XXXXXX
 * @param {string} IP
 * @returns {string}
 */
export const deviceInfo = (IP) => `http://${IP}:8082/deviceInfo`;

// ===============
// ===============

// exposition - gain
export const modeAuto = 0;
export const modeManual = 1;

// autofocus
export const autofocusGlobal = 0;
export const autofocusArea = 1;

export const exposureTelephotoModeAuto = 0;
export const exposureWideangleModeAuto = 3;

// whitebalance
export const whiteBalanceScenesIDValue = {
  0: "incandescent",
  1: "warm fluorescent",
  2: "fluorescent",
  3: "sunlight",
  4: "cloudy",
  5: "shadow",
  6: "twilight",
};
export const whiteBalanceScenesValueID = {
  incandescent: 0,
  "warm fluorescent": 1,
  fluorescent: 2,
  sunlight: 3,
  cloudy: 4,
  shadow: 5,
  twilight: 6,
};

// IR
export const IRCut = 0;
export const IRPass = 1;

export const binning1x1 = 0;
export const binning2x2 = 1;

export const fileFits = 0;
export const fileTiff = 1;

// raw preview
export const rawPreviewContinousSuperimpose = 0;
export const rawPreviewSingle15 = 1;
export const rawPreviewSingleComposite = 2;

// ===============
// 5 motion control
// ===============

export const continuous_mode = 1;
export const pulse_mode = 2;

export const speedDecelerate = 0;
export const speedAccelerate = 1;

export const anticlockwise = 0;
export const clockwise = 1;

export const spinMotor = 1;
export const pitchMotor = 2;
