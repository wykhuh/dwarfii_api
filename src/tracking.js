/** @module track */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";

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
export function messageTrackStartTrack(x, y, w, h) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_TRACK_START_TRACK;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({ x: x, y: y, w: w, h: h });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.14.4 Stop tracking
 * Create Encoded Packet for the command CMD_TRACK_STOP_TRACK
 * @returns {Uint8Array}
 */
export function messageTrackStopTrack() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_TRACK_STOP_TRACK;
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
 * 3.14.5 Start Sentinel Mode
 * Create Encoded Packet for the command CMD_SENTRY_MODE_START
 * @param {number} mode ; //Reserved field, you can pass 0 now
 * @returns {Uint8Array}
 */
export function messageSentryModeStart(mode = 0) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_SENTRY_MODE_START;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({ mode: mode });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.14.6 Stop Sentinel Mode
 * Create Encoded Packet for the command CMD_SENTRY_MODE_STOP
 * @returns {Uint8Array}
 */
export function messageSentryModeStop() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_SENTRY_MODE_STOP;
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
 * 3.14.7 Start "Multi-Object Tracking"
 * Create Encoded Packet for the command CMD_MOT_START
 * @returns {Uint8Array}
 */
export function messageMOTStart() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_MOT_START;
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
 * 3.14.8 "Multi-Object Tracking" feature starts tracking a target
 * Create Encoded Packet for the command CMD_MOT_TRACK_ONE
 * @param {number} id ; // target id
 * @returns {Uint8Array}
 */
export function messageMOTStartOne(id) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_MOT_TRACK_ONE;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({ id: id });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.14.9 Start UFO Mode
 * Create Encoded Packet for the command CMD_UFOTRACK_MODE_START
 * @param {number} mode ; //Reserved field, you can pass 0 now
 * @returns {Uint8Array}
 */
export function messageUFOTrackModeStart(mode = 0) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_UFOTRACK_MODE_START;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({ mode: mode });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.14.10 Stop UFO Mode
 * Create Encoded Packet for the command CMD_UFOTRACK_MODE_STOP
 * @returns {Uint8Array}
 */
export function messageUFOTrackModeStop() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_UFOTRACK_MODE_STOP;
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
