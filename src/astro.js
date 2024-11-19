/** @module astro */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";

/*** ---------------------------------------------- ***/
/*** ---------------- MODULE ASTRO ---------------- ***/
/*** ---------------------------------------------- ***/
/**
 * 4.10.2 Start calibration
 * Create Encoded Packet for the command CMD_ASTRO_START_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStartCalibration() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_CALIBRATION;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.3 Stop calibration
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStopCalibration() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_CALIBRATION;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.4 Start GOTO and track deep space objects
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_DSO
 * @param {number} ra Right Ascension
 * @param {number} dec Declination
 * @param {string} target_name
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoDso(ra, dec, target_name) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_GOTO_DSO;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    ra: ra,
    dec: dec,
    targetName: target_name,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.5 Start GOTO and track solar system targets
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_SOLAR_SYSTEM
 * @param {number} index SolarSystemTargetNumber
 * @param {number} lon Longitude
 * @param {number} lat Lattitude
 * @param {string} targetName
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoSolarSystem(index, lon, lat, targetName) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_GOTO_SOLAR_SYSTEM;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    index: index,
    lon: lon,
    lat: lat,
    targetName: targetName,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.6 Stop GOTO
 * Create Encoded Packet for the command CMD_ASTRO_STOP_GOTO
 * @returns {Uint8Array}
 */
export function messageAstroStopGoto() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_GOTO;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.7 Start Sun track & & Moon track
 * Create Encoded Packet for the command CMD_ASTRO_START_TRACK_SPECIAL_TARGET
 * @returns {Uint8Array}
 */
export function messageAstroStartTrackSpecialTarget(index, lon, lat) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_TRACK_SPECIAL_TARGET;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    index: index,
    lon: lon,
    lat: lat,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.8 Stop sun and moon tracking
 * Create Encoded Packet for the command CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET
 * @returns {Uint8Array}
 */
export function messageAstroStopTrackSpecialTarget() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.9 Start stack
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStartCaptureRawLiveStacking() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id =
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.10 stop stack
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureRawLiveStacking() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id =
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.11 Start Wide stack
 * Create Encoded Packet for the command CMD_ASTRO_START_WIDE_CAPTURE_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStartWideCaptureLiveStacking() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id =
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_WIDE_CAPTURE_LIVE_STACKING;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.12 stop stack
 * Create Encoded Packet for the command CMD_ASTRO_STOP_WIDE_CAPTURE_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStopWideCaptureLiveStacking() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id =
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_WIDE_CAPTURE_LIVE_STACKING;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.13 Inquire about the dark field that has been shot
 * Create Encoded Packet for the command CMD_ASTRO_CHECK_GOT_DARK
 * @returns {Uint8Array}
 */
export function messageAstroCheckGotDark() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_CHECK_GOT_DARK;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.14 Start shooting dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_DARK
 * @param {number} reshoot // Whether to reshoot, 0: No; 1: Remake
 * @returns {Uint8Array}
 */
export function messageAstroStartCaptureRawDark(reshoot) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_CAPTURE_RAW_DARK;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({ reshoot: reshoot });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.15 Stop shooting dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_DARK
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureRawDark() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_CAPTURE_RAW_DARK;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.16 GO LIVE interface
 * Create Encoded Packet for the command CMD_ASTRO_GO_LIVE
 * @returns {Uint8Array}
 */
export function messageAstroGoLive() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_GO_LIVE;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.17 One-click GOTO deep space celestial body
 * Create Encoded Packet for the command CMD_ASTRO_START_ONE_CLICK_GOTO_DSO
 * @param {number} ra Right Ascension
 * @param {number} dec Declination
 * @param {string} target_name
 * @returns {Uint8Array}
 */
export function messageAstroStartOneClickGotoDso(ra, dec, target_name) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_ONE_CLICK_GOTO_DSO;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    ra: ra,
    dec: dec,
    targetName: target_name,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.18 One-click GOTO solar system target
 * Create Encoded Packet for the command CMD_ASTRO_START_ONE_CLICK_GOTO_SOLAR_SYSTEM
 * @param {number} index SolarSystemTargetNumber
 * @param {number} lon Longitude
 * @param {number} lat Lattitude
 * @param {string} targetName
 * @returns {Uint8Array}
 */
export function messageAstroStartOneClickGotoSolarSystem(
  index,
  lon,
  lat,
  targetName
) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id =
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_ONE_CLICK_GOTO_SOLAR_SYSTEM;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    index: index,
    lon: lon,
    lat: lat,
    targetName: targetName,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.19 Stop one-click GOTO
 * Create Encoded Packet for the command CMD_ASTRO_STOP_ONE_CLICK_GOTO
 * @returns {Uint8Array}
 */
export function messageAstroStopOneClickGoto() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_ONE_CLICK_GOTO;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.20 Start EQ verification
 * Create Encoded Packet for the command CMD_ASTRO_START_EQ_SOLVING
 * @param {number} lon Longitude
 * @param {number} lat Lattitude
 * @returns {Uint8Array}
 */
export function messageAstroStartEqSolving(lon, lat) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_EQ_SOLVING;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    lon: lon,
    lat: lat,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.21 Stop EQ verification
 * Create Encoded Packet for the command CMD_ASTRO_STOP_EQ_SOLVING
 * @returns {Uint8Array}
 */
export function messageAstroStopEqSolving() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_EQ_SOLVING;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.22 Start shooting the dark field with specified parameters
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_DARK_WITH_PARAM
 * @param {number} exp_index // Exposure parameter index value
 * @param {number} gain_index // Gain parameter index value
 * @param {number} bin_index // Binning parameter index value
 * @param {number} cap_size // Number of shots
 * @returns {Uint8Array}
 */
export function messageAstroCaptureDarkFrameWithParam(
  exp_index,
  gain_index,
  bin_index,
  cap_size
) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id =
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_CAPTURE_RAW_DARK_WITH_PARAM;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    expIndex: exp_index,
    gainIndex: gain_index,
    binIndex: bin_index,
    capSize: cap_size,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.23 Stop shooting the dark field with specified parameters
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_DARK_WITH_PARAM
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureDarkFrameWithParam() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id =
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_CAPTURE_RAW_DARK_WITH_PARAM;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.24 Query the list of recorded dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_GET_DARK_FRAME_LIST
 * @returns {Uint8Array}
 */
export function messageAstroGetDarkFrameList() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_GET_DARK_FRAME_LIST;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.25 Delete the specified dark field list
 * Create Encoded Packet for the command CMD_ASTRO_DEL_DARK_FRAME_LIST
 * @param {number} exp_index // Exposure parameter index value
 * @param {number} gain_index // Gain parameter index value
 * @param {number} bin_index // Binning parameter index value
 * @returns {Uint8Array}
 */
export function messageAstroDelDarkFrameList(exp_index, gain_index, bin_index) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_DEL_DARK_FRAME_LIST;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    expIndex: exp_index,
    gainIndex: gain_index,
    binIndex: bin_index,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.26 Start shooting wide-angle dark field with specified parameters
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_WIDE_RAW_DARK_WITH_PARAM
 * @param {number} exp_index // Exposure parameter index value
 * @param {number} gain_index // Gain parameter index value
 * @param {number} bin_index // Binning parameter index value
 * @param {number} cap_size // Number of shots
 * @returns {Uint8Array}
 */
export function messageAstroCaptureWideDarkFrameWithParam(
  exp_index,
  gain_index,
  bin_index,
  cap_size
) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id =
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_CAPTURE_WIDE_RAW_DARK_WITH_PARAM;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    expIndex: exp_index,
    gainIndex: gain_index,
    binIndex: bin_index,
    capSize: cap_size,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.27 Stop shooting the dark field with wide-angle specified parameters
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_WIDE_RAW_DARK_WITH_PARAM
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureWideDarkFrameWithParam() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id =
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_CAPTURE_WIDE_RAW_DARK_WITH_PARAM;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.28 Query the list of wide-angle recorded dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_GET_WIDE_DARK_FRAME_LIST
 * @returns {Uint8Array}
 */
export function messageAstroGetWideDarkFrameList() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_GET_WIDE_DARK_FRAME_LIST;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.10.29 Delete the specified wide-angle dark field list
 * Create Encoded Packet for the command CMD_ASTRO_DEL_WIDE_DARK_FRAME_LIST
 * @param {number} exp_index // Exposure parameter index value
 * @param {number} gain_index // Gain parameter index value
 * @param {number} bin_index // Binning parameter index value
 * @returns {Uint8Array}
 */
export function messageAstroDelWideDarkFrameList(
  exp_index,
  gain_index,
  bin_index
) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_DEL_WIDE_DARK_FRAME_LIST;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    expIndex: exp_index,
    gainIndex: gain_index,
    binIndex: bin_index,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
