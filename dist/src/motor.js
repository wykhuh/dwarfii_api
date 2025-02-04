/** @module motor */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";
/*** ---------------------------------------------- ***/
/*** ---------------- MODULE_MOTOR ---------------- ***/
/*** ---------------------------------------------- ***/
/**
 * 4.13.3 Motor motion
 * Create Encoded Packet for the command CMD_STEP_MOTOR_RUN
 * @param {number} id ; //1  : Rotation axis   2:   Pitch axis
 * @param {number} speed ; //5 gears: 0.1, 1, 5, 10, 30 degrees/s, supports maximum speed of 32 degrees/s
 * @param {boolean} direction ; //0: left/down 1: right/up
 * @param {number} speed_ramping ; //Acceleration and deceleration: 0-1000, 100 gears, a total of 11 gears
 * @param {number} resolution_level ; //Subdivision: 5:32 subdivision
  //     Subdivision:
  // 0：256 Subdivision
  // 1：128 Subdivision
  // 2：64 Subdivision
  // 3：32 Subdivision
  // 4：16 Subdivision
  // 5：8 Subdivision
  // 6：4 Subdivision
  // 7：2 Subdivision
  // 8：1 Subdivision
  * @returns {Uint8Array}
 */
export function messageStepMotorMotion(id, speed, direction, speed_ramping, resolution_level) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_RUN;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        id: id,
        speed: speed,
        direction: direction,
        speedRamping: speed_ramping,
        resolutionLevel: resolution_level,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * Create Encoded Packet for the command CMD_STEP_MOTOR_STOP
 * 4.13.4 Motor stop
 * @param {number} id ; //0: Rotation axis 1: Pitch axis
 * @returns {Uint8Array}
 */
export function messageStepMotorStop(id) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_STOP;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ id: id });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.13.5 Joystick
 * Create Encoded Packet for the command CMD_STEP_MOTOR_SERVICE_JOYSTICK
 * @param {number} vector_angle ; //The angle of the direction vector, indicating the direction of motion of the field of view, 0-360 degrees, 0 degrees starting from the positive x-axis and increasing counterclockwise
 * @param {number} vector_length ; //The length of the direction vector represents the scaling factor of the speed, 0-1, and the speed is finely adjusted according to the range of the joystick drag
 * @param {number} speed ; //speed along the direction vector, 0.1 �/s-30 �/s
 * @returns {Uint8Array}

 */
export function messageStepMotorServiceJoystick(vector_angle, vector_length, speed) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_SERVICE_JOYSTICK;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        vectorAngle: vector_angle,
        vectorLength: vector_length,
        speed: speed,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.13.6 Short press the arrow keys with the joystick
 * Create Encoded Packet for the command CMD_STEP_MOTOR_SERVICE_JOYSTICK_FIXED_ANGLE
 * @param {number} vector_angle ; //The angle of the direction vector, indicating the direction of motion of the field of view, 0-360 degrees, 0 degrees starting from the positive x-axis and increasing counterclockwise
 * @param {number} vector_length ; //The length of the direction vector represents the scaling factor of the speed, 0-1, and the speed is finely adjusted according to the range of the joystick drag
 * @param {number} speed ; //speed along the direction vector, 0.1 �/s-30 �/s
 * @returns {Uint8Array}
 */
export function messageStepMotorServiceJoystickFixedAngle(vector_angle, vector_length, speed) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_SERVICE_JOYSTICK_FIXED_ANGLE;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        vectorAngle: vector_angle,
        vectorLength: vector_length,
        speed: speed,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.13.7 Stop joystick
 * Create Encoded Packet for the command CMD_STEP_MOTOR_SERVICE_JOYSTICK_STOP
 * @returns {Uint8Array}
 */
export function messageStepMotorServiceJoystickStop() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_SERVICE_JOYSTICK_STOP;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({});
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.13.8 Dual camera linkage
 * Create Encoded Packet for the command CMD_STEP_MOTOR_SERVICE_DUAL_CAMERA_LINKAGE
 * @param {number} x ;
 * @param {number} y ;
 * @returns {Uint8Array}
 */
export function messageStepMotorServiceDualCameraLinkage(x, y) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_SERVICE_DUAL_CAMERA_LINKAGE;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ x: x, y: y });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.13.9 Motor Run To (Not Documented)
 * Create Encoded Packet for the command CMD_STEP_MOTOR_RUN_TO
 * @param {number} id ; // 1  : Rotation axis   2:   Pitch axis
 * @param {number} end_position ;
 * @param {number} speed ; //5 gears: 0.1, 1, 5, 10, 30 degrees/s, supports maximum speed of 32 degrees/s
 * @param {number} speed_ramping ; //Acceleration and deceleration: 0-1000, 100 gears, a total of 11 gears
 * @param {number} resolution_level ; //Subdivision: 5:32 subdivision
 * @returns {Uint8Array}
 */
export function messageStepMotorMotionTo(id, end_position, speed, speed_ramping, resolution_level) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_RUN_TO;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        id: id,
        endPosition: end_position,
        speed: speed,
        speedRamping: speed_ramping,
        resolutionLevel: resolution_level,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.13.10 Motor Reset (Not Documented)
 * Create Encoded Packet for the command CMD_STEP_MOTOR_RESET
 * @param {number} id ; // 1  : Rotation axis   2:   Pitch axis
 * @param {boolean} direction; //2 : 0: left/down 1: right/up
 * @returns {Uint8Array}
 */
export function messageStepMotorReset(id, direction) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_RESET;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        id: id,
        direction: direction,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.13.11 Motor Change Speed (Not Documented)
 * Create Encoded Packet for the command CMD_STEP_MOTOR_CHANGE_SPEED
 * @param {number} id ; // 1  : Rotation axis   2:   Pitch axis
 * @param {number} speed; //2 : 5 gears: 0.1, 1, 5, 10, 30 degrees/s, supports maximum speed of 32 degrees/s
 * @returns {Uint8Array}
 */
export function messageStepMotorChangeSpeed(id, speed) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_CHANGE_SPEED;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        id: id,
        speed: speed,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.13.12 Motor Change direction (Not Documented)
 * Create Encoded Packet for the command CMD_STEP_MOTOR_CHANGE_DIRECTION
 * @param {number} id ; // 1  : Rotation axis   2:   Pitch axis
 * @param {boolean} direction ; //0: left/down 1: right/up
 * @returns {Uint8Array}
 */
export function messageStepMotorChangeDirection(id, direction) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_CHANGE_DIRECTION;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        id: id,
        direction: direction,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 4.13.14 Motor Get Position (Not Documented)
 * Create Encoded Packet for the command CMD_STEP_MOTOR_GET_POSITION
 * @param {number} id ; // 1  : Rotation axis   2:   Pitch axis
 * @returns {Uint8Array}
 */
export function messageStepMotorGetPosition(id) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_MOTOR;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_STEP_MOTOR_GET_POSITION;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        id: id,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
