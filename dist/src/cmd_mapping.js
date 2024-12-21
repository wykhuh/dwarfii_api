// Access the class name associated with a command
// const openCameraClass = cmdMapping[10000];
// console.log(openCameraClass); // diplay "ReqOpenCamera"
export const cmdMapping = {
    // BLE Class Command
    1: "ReqGetconfig", // Get WiFi configuration
    2: "ReqAp", // Configure WiFi AP mode
    3: "ReqSta", // Configure WiFi STA mode
    4: "ReqSetblewifi", // Configure BLE wifi
    5: "ReqReset", // Reset Bluetooth WiFi
    6: "ReqWifilist", // Get WiFi list
    7: "ReqGetsysteminfo", // Obtain device information
    8: "ReqCheckFile", // Check File
    10000: "ReqOpenCamera", // Turn on the camera
    10001: "ReqCloseCamera", // Turn off the camera
    10002: "ReqPhoto", // Take photos
    10003: "ReqBurstPhoto", // Start continuous shooting
    10004: "ReqStopBurstPhoto", // Stop continuous shooting
    10005: "ReqStartRecord", // Start recording
    10006: "ReqStopRecord", // Stop recording
    10007: "ReqSetExpMode", // Set exposure mode
    10008: "ReqGetExpMode", // Acquire exposure mode
    10009: "ReqSetExp", // Set exposure value
    10010: "ReqGetExp", // Get exposure value
    10011: "ReqSetGainMode", // Set gain mode
    10012: "ReqGetGainMode", // Acquisition gain mode
    10013: "ReqSetGain", // Set gain value
    10014: "ReqGetGain", // Get gain value
    10015: "ReqSetBrightness", // Set brightness
    10016: "ReqGetBrightness", // Acquire brightness
    10017: "ReqSetContrast", // Set contrast
    10018: "ReqGetContrast", // Get contrast
    10019: "ReqSetSaturation", // Set saturation
    10020: "ReqGetSaturation", // Acquire saturation
    10021: "ReqSetHue", // Set tone
    10022: "ReqGetHue", // Get hue
    10023: "ReqSetSharpness", // Set sharpness
    10024: "ReqGetSharpness", // Acquire sharpness
    10025: "ReqSetWBMode", // Set white balance mode
    10026: "ReqGetWBMode", // Acquire white balance mode
    10027: "ReqSetWBSence", // Set white balance scene
    10028: "ReqGetWBSence", // Get white balance scene
    10029: "ReqSetWBCT", // Set the white balance color temperature value
    10030: "ReqGetWBCT", // Obtain the white balance color temperature value
    10031: "ReqSetIrCut", // Set IRCUT
    10032: "ReqGetIrcut", // Get IRCUT status
    10033: "ReqStartTimeLapse", // Start time-lapse photography
    10034: "ReqStopTimeLapse", // Stop time-lapse photography
    10035: "ReqSetAllParams", // Set all parameters
    10036: "ReqGetAllParams", // Get all parameters
    10037: "ReqSetFeatureParams", // Set feature parameters
    10038: "ReqGetAllFeatureParams", // Get all feature parameters
    10039: "ReqGetSystemWorkingState", // Get the working status of the whole machine
    10040: "ReqSetJpgQuality", // Set jpg preview quality
    10041: "ReqPhotoRaw", // Shoot RAW image
    10042: "ReqSetRtspBitRateType", // Set rtsp preview bit rate type
    11000: "ReqStartCalibration", // Start calibration
    11001: "ReqStopCalibration", // Stop calibration
    11002: "ReqGotoDSO", // Start GOTO Deep Space Object
    11003: "ReqGotoSolarSystem", // Start GOTO Solar System Target
    11004: "ReqStopGoto", // Stop GOTO
    11005: "ReqCaptureRawLiveStacking", // Start stacking
    11006: "ReqStopCaptureRawLiveStacking", // Stop overlay
    11007: "ReqCaptureDarkFrame", // Start shooting dark scenes
    11008: "ReqStopCaptureDarkFrame", // Stop filming darkfield
    11009: "ReqCheckDarkFrame", // Inquire about the dark field that has been shot
    11010: "ReqGoLive", // GO LIVE interface
    11011: "ReqTrackSpecialTarget", // Start tracking the sun and moon
    11012: "ReqStopTrackSpecialTarget", // Stop tracking the sun and moon
    11013: "ReqOneClickGotoDSO", // One-click GOTO deep space celestial body
    11014: "ReqOneClickGotoSolarSystem", // One-click GOTO solar system target
    11015: "ReqStopOneClickGoto", // Stop one-click GOTO
    11016: "ReqCaptureWideRawLiveStacking", // Start wide-angle overlay
    11017: "ReqStopCaptureWideRawLiveStacking", // Stop wide-angle overlay
    11018: "ReqStartEqSolving", // Start EQ verification
    11019: "ReqStopEqSolving", // Stop EQ verification
    11020: "ReqGoLive", // Wide-angle GO LIVE interface
    11021: "ReqCaptureDarkFrame", // Start shooting the dark field with specified parameters (manually set exposure, gain, binning).
    11022: "ReqStopCaptureDarkFrame", // Stop shooting the dark field with specified parameters
    11023: "ReqCheckDarkFrame", // Query the list of recorded dark scenes
    11024: "ReqDelDarkFrame", // Delete the specified dark field list
    11025: "ReqCaptureWideDarkFrame", // Start shooting wide-angle dark field with specified parameters (manually set exposure and gain. Binning is fixed to 1 internally, setting does not work).
    11026: "ReqStopCaptureWideDarkFrame", // Stop shooting dark field with wide-angle specified parameters
    11027: "ReqCheckWideDarkFrame", // Query the list of wide-angle dark scenes taken
    11028: "ReqDelWideDarkFrame", // Delete the specified wide-angle dark field list
    12000: "ReqOpenCamera", // Turn on the camera
    12001: "ReqCloseCamera", // Turn off the camera
    12002: "ReqSetExpMode", // Set exposure mode
    12003: "ReqGetExpMode", // Acquire exposure mode
    12004: "ReqSetExp", // Set exposure value
    12005: "ReqGetExp", // Get exposure value
    12006: "ReqSetGain", // Set gain
    12007: "ReqGetGain", // Acquisition gain
    12008: "ReqSetBrightness", // Set brightness
    12009: "ReqGetBrightness", // Acquire brightness
    12010: "ReqSetContrast", // Set contrast
    12011: "ReqGetContrast", // Get contrast
    12012: "ReqSetSaturation", // Set saturation
    12013: "ReqGetSaturation", // Acquire saturation
    12014: "ReqSetHue", // Set tone
    12015: "ReqGetHue", // Get hue
    12016: "ReqSetSharpness", // Set sharpness
    12017: "ReqGetSharpness", // Acquire sharpness
    12018: "ReqSetWBMode", // Set white balance mode
    12019: "ReqGetWBMode", // Acquire white balance mode
    12020: "ReqSetWBCT", // Set white balance color temperature
    12021: "ReqGetWBCT", // Obtain white balance color temperature
    12022: "ReqPhoto", // Take photos
    12023: "ReqBurstPhoto", // Continuous shooting
    12024: "ReqStopBurstPhoto", // Stop continuous shooting
    12025: "ReqStartTimeLapse", // Start time-lapse photography
    12026: "ReqStopTimeLapse", // Stop time-lapse photography
    12027: "ReqGetAllParams", // Get all parameters
    12028: "ReqSetAllParams", // Set all parameters
    12030: "ReqStartRecord", // Start wide recording
    12031: "ReqStopRecord", // Stop wide recording
    13000: "ReqSetTime", // Set the system time
    13001: "ReqSetTimezone", // Set the time zone
    13002: "ReqSetMtpMode", // Set MTP mode
    13003: "ReqSetCpuMode", // Set CPU mode
    13004: "ReqsetMasterLock", // Set HOST SLAVE mode
    13500: "ReqOpenRgb", // Turn on the ring light
    13501: "ReqCloseRgb", // Turn off the ring light
    13502: "ReqPowerDown", // Shut down
    13503: "ReqOpenPowerInd", // Turn on the battery indicator
    13504: "ReqClosePowerInd", // Turn off battery indicator =
    13505: "ReqReboot", // Restart
    14000: "ReqMotorRun", // Motor motion
    14001: "ReqMotorRunTo", // Motor motion to
    14002: "ReqMotorStop", // Motor stop
    14003: "ReqMotorReset", // Motor Reset
    14004: "ReqMotorChangeSpeed", // Motor Change Speed
    14005: "ReqMotorChangeDirection", // Motor ChangeDirection
    14006: "ReqMotorServiceJoystick", // Joystick
    14007: "ReqMotorServiceJoystickFixedAngle", // Short press the arrow keys with the joystick
    14008: "ReqMotorServiceJoystickStop", // Stop joystick
    14009: "ReqDualCameraLinkage", // Dual camera linkage
    14010: "ReqMotorRunInPulse", // Motor run in pulse
    14011: "ReqMotorGetPosition", // Motor get Position
    14800: "ReqStartTrack", // Started tracking
    14801: "ReqStopTrack", // Stop tracking
    14802: "ReqStartSentryMode", // Start Sentinel Mode
    14803: "ReqStopSentryMode", // Stop Sentinel Mode
    14804: "ReqMOTTrack", // Start "Multi-Object Tracking" feature
    14805: "ReqMOTTrackOne", // Telephoto: "Multi-Object Tracking" starts tracking a target (the firmware will return an identification box and ID, and track the target according to the user's click confirmation)
    14806: "ReqStartSentryMode", // Start sentinel UFO mode
    14807: "ReqStopSentryMode", // Stop Sentinel UFO Mode
    14808: "ReqMOTTrackOne", // Wide-angle: "Multi-Object Tracking" starts tracking a specific target (firmware will return an identification box and ID, confirm tracking target based on user clicks)
    15000: "ReqNormalAutoFocus", // Normal mode autofocus
    15001: "ReqManualSingleStepFocus", // Manual single-step focusing
    15002: "ReqManualContinuFocus", // Start manual continuous focus
    15003: "ReqStopManualContinuFocus", // Stop manual continuous focus
    15004: "ReqAstroAutoFocus", // Start astronomical autofocus
    15005: "ReqStopAstroAutoFocus", // Stop astronomical autofocus
    15500: "ReqStartPanoramaByGrid", // Start panorama
    15501: "ReqStopPanorama", // Stop panorama
    15502: "ReqStartPanoramaByEulerRange", // Start panorama Euler Range
};
export const responseMapping = {
    // BLE Class Response
    0: "ResReceiveDataError", // Get Error
    1: "ResGetconfig", // Get WiFi configuration
    2: "ResAp", // Configure WiFi AP mode
    3: "ResSta", // Configure WiFi STA mode
    4: "ResSetblewifi", // Configure BLE wifi
    5: "ResReset", // Reset Bluetooth WiFi
    6: "ResWifilist", // Get WiFi list
    7: "ResGetsysteminfo", // Obtain device information
    8: "ResCheckFile", // Check File
    10000: "ComResponse", // Turn on the camera
    10001: "ComResponse", // Turn off the camera
    10002: "ComResponse", // Take photos
    10003: "ComResponse", // Start continuous shooting
    10004: "ComResponse", // Stop continuous shooting
    10005: "ComResponse", // Start recording
    10006: "ComResponse", // Stop recording
    10007: "ComResponse", // Set exposure mode
    10008: "ComResponse", // Acquire exposure mode
    10009: "ComResponse", // Set exposure value
    10010: "ComResponse", // Get exposure value
    10011: "ComResponse", // Set gain mode
    10012: "ComResponse", // Acquisition gain mode
    10013: "ComResponse", // Set gain value
    10014: "ComResponse", // Get gain value
    10015: "ComResponse", // Set brightness
    10016: "ComResponse", // Acquire brightness
    10017: "ComResponse", // Set contrast
    10018: "ComResponse", // Get contrast
    10019: "ComResponse", // Set saturation
    10020: "ComResponse", // Acquire saturation
    10021: "ComResponse", // Set tone
    10022: "ComResponse", // Get hue
    10023: "ComResponse", // Set sharpness
    10024: "ComResponse", // Acquire sharpness
    10025: "ComResponse", // Set white balance mode
    10026: "ComResponse", // Acquire white balance mode
    10027: "ComResponse", // Set white balance scene
    10028: "ComResponse", // Get white balance scene
    10029: "ComResponse", // Set the white balance color temperature value
    10030: "ComResponse", // Obtain the white balance color temperature value
    10031: "ComResponse", // Set IRCUT
    10032: "ComResponse", // Get IRCUT status
    10033: "ComResponse", // Start time-lapse photography
    10034: "ComResponse", // Stop time-lapse photography
    10035: "ComResponse", // Set all parameters
    10036: "ResGetAllParams", // Get all parameters
    10037: "ComResponse", // Set feature parameters
    10038: "ResGetAllFeatureParams", // Get all feature parameters
    10039: "ComResponse", // Get the working status of the whole machine
    10040: "ComResponse", // Set jpg preview quality
    10041: "ComResponse", // Shoot RAW image
    10042: "ComResponse", // Set rtsp preview bit rate type
    11000: "ComResponse", // Start calibration
    11001: "ComResponse", // Stop calibration
    11002: "ComResponse", // Start GOTO Deep Space Object
    11003: "ComResponse", // Start GOTO Solar System Target
    11004: "ComResponse", // Stop GOTO
    11005: "ComResponse", // Start stacking
    11006: "ComResponse", // Stop overlay
    11007: "ComResponse", // Start shooting dark scenes
    11008: "ComResponse", // Stop filming darkfield
    11009: "ResCheckDarkFrame", // Inquire about the dark field that has been shot
    11010: "ComResponse", // GO LIVE interface
    11011: "ComResponse", // Start tracking the sun and moon
    11012: "ComResponse", // Stop tracking the sun and moon
    11013: "ResOneClickGoto ", // One-click GOTO deep space celestial body
    11014: "ResOneClickGoto ", // One-click GOTO solar system target
    11015: "ComResponse", // Stop one-click GOTO
    11016: "ComResponse", // Start wide-angle overlay
    11017: "ComResponse", // Stop wide-angle overlay
    11018: "ResStartEqSolving ", // Start EQ verification
    11019: "ComResponse", // Stop EQ verification
    11020: "ComResponse", // Wide-angle GO LIVE interface
    11021: "ComResponse", // Start shooting the dark field with specified parameters (manually set exposure, gain, binning).
    11022: "ComResponse", // Stop shooting the dark field with specified parameters
    11023: "ResGetDarkFrameInfoList", // Query the list of recorded dark scenes
    11024: "ResDelDarkFrameList", // Delete the specified dark field list
    11025: "ComResponse", // Start shooting wide-angle dark field with specified parameters (manually set exposure and gain. Binning is fixed to 1 internally, setting does not work).
    11026: "ComResponse", // Stop shooting dark field with wide-angle specified parameters
    11027: "ResGetWideDarkFrameInfoList", // Query the list of wide-angle dark scenes taken
    11028: "ResDelWideDarkFrameList", // Delete the specified wide-angle dark field list
    12000: "ComResponse", // Turn on the camera
    12001: "ComResponse", // Turn off the camera
    12002: "ComResponse", // Set exposure mode
    12003: "ComResponse", // Acquire exposure mode
    12004: "ComResponse", // Set exposure value
    12005: "ComResponse", // Get exposure value
    12006: "ComResponse", // Set gain
    12007: "ComResponse", // Acquisition gain
    12008: "ComResponse", // Set brightness
    12009: "ComResponse", // Acquire brightness
    12010: "ComResponse", // Set contrast
    12011: "ComResponse", // Get contrast
    12012: "ComResponse", // Set saturation
    12013: "ComResponse", // Acquire saturation
    12014: "ComResponse", // Set tone
    12015: "ComResponse", // Get hue
    12016: "ComResponse", // Set sharpness
    12017: "ComResponse", // Acquire sharpness
    12018: "ComResponse", // Set white balance mode
    12019: "ComResponse", // Acquire white balance mode
    12020: "ComResponse", // Set white balance color temperature
    12021: "ComResponse", // Obtain white balance color temperature
    12022: "ComResponse", // Take photos
    12023: "ComResponse", // Continuous shooting
    12024: "ComResponse", // Stop continuous shooting
    12025: "ComResponse", // Start time-lapse photography
    12026: "ComResponse", // Stop time-lapse photography
    12027: "ResGetAllParams", // Get all parameters
    12028: "ComResponse", // Set all parameters
    12030: "ComResponse", // Start wide recording
    12031: "ComResponse", // Stop wide recording
    13000: "ComResponse", // Set the system time
    13001: "ComResponse", // Set the time zone
    13002: "ComResponse", // Set MTP mode
    13003: "ComResponse", // Set CPU mode
    13004: "ComResponse", // Set HOST SLAVE mode
    13500: "ComResponse", // Turn on the ring light
    13501: "ComResponse", // Turn off the ring light
    13502: "ComResponse", // Shut down
    13503: "ComResponse", // Turn on the battery indicator
    13504: "ComResponse", // Turn off battery indicator =
    13505: "ComResponse", // Restart
    14000: "ResMotor", // Motor motion
    14001: "ResMotor", // Motor motion to
    14002: "ResMotor", // Motor stop
    14003: "ResMotor", // Motor Reset
    14004: "ResMotor", // Motor Change Speed
    14005: "ResMotor", // Motor ChangeDirection
    14006: "ComResponse", // Joystick
    14007: "ComResponse", // Short press the arrow keys with the joystick
    14008: "ComResponse", // Stop joystick
    14009: "ComResponse", // Dual camera linkage
    14010: "ResMotor", // Motor run in pulse
    14011: "ResMotorPosition", // Motor get Position
    14800: "ComResponse", // Started tracking
    14801: "ComResponse", // Stop tracking
    14802: "ComResponse", // Start Sentinel Mode
    14803: "ComResponse", // Stop Sentinel Mode
    14804: "ComResponse", // Start "Multi-Object Tracking" feature
    14805: "ComResponse", // Telephoto: "Multi-Object Tracking" starts tracking a target (the firmware will return an identification box and ID, and track the target according to the user's click confirmation)
    14806: "ComResponse", // Start sentinel UFO mode
    14807: "ComResponse", // Stop Sentinel UFO Mode
    14808: "ComResponse", // Wide-angle: "Multi-Object Tracking" starts tracking a specific target (firmware will return an identification box and ID, confirm tracking target based on user clicks)
    15000: "ComResponse", // Normal mode autofocus
    15001: "ComResponse", // Manual single-step focusing
    15002: "ComResponse", // Start manual continuous focus
    15003: "ComResponse", // Stop manual continuous focus
    15004: "ComResponse", // Start astronomical autofocus
    15005: "ComResponse", // Stop astronomical autofocus
    15500: "ComResponse", // Start panorama
    15501: "ComResponse", // Stop panorama
    15502: "ComResponse", // Start panorama Euler Range
};
export const notifyMapping = {
    15200: "ResNotifyPictureMatching", // Telephoto wide-angle image matching
    15201: "ComResWithInt", // Battery Notification
    15202: "ComResWithInt", // Charge status notification
    15203: "ResNotifySDcardInfo", // SD card capacity notification
    15204: "ResNotifyRecordTime", // Recording time
    15205: "ResNotifyTimeLapseOutTime", // Telephoto time-lapse photography time
    15206: "ResNotifyOperationState", // Dark field shooting state
    15207: "ResNotifyProgressCaptureRawDark", // Dark field shooting progress
    15208: "ResNotifyOperationState", // Astronomical overlay shooting status
    15209: "ResNotifyProgressCaptureRawLiveStacking", // Astronomical overlay shooting progress
    15210: "ResNotifyStateAstroCalibration", // Astronomical calibration status
    15211: "ResNotifyStateAstroGoto", // Astronomical GOTO status
    15212: "ResNotifyStateAstroTracking", // Astronomical tracking status
    15213: "ResNotifyParam", // Telephoto parameter echo
    15214: "ResNotifyParam", // Wide-angle parametric echo
    15215: "ResNotifyCamFunctionState", // Telephoto functional status
    15216: "ResNotifyCamFunctionState", // Wide-angle functional status
    15217: "ResNotifyParam", // Feature parameter echo
    15218: "ResNotifyBurstProgress", // Telephoto continuous shooting progress
    15219: "ResNotifyPanoramaProgress", // Telephoto panoramic shooting progress
    15220: "ResNotifyBurstProgress", // Wide-angle continuous shooting progress
    15221: "ResNotifyRgbState", // RGB Ring Light Status
    15222: "ResNotifyPowerIndState", // Power indicator status
    15223: "ResNotifyHostSlaveMode", // Leader/follower mode notification
    15224: "ResNotifyMTPState", // MTP mode notification
    15225: "ResNotifyTrackResult", // Tracking result notification
    15226: "ResNotifyTimeLapseOutTime", // Wide-angle time-lapse photography time
    15227: "ResNotifyCPUMode", // CPU mode
    15228: "ResNotifyStateAstroTrackingSpecial", // Sun and moon tracking status
    15229: "ResNotifyPowerOff", // Shutdown notification
    15230: "ResNotifyAlbumUpdate", // New Media Created
    15231: "ResNotifyStateSentryMode", // Sentinel mode status
    15232: "ResNotifyTrackResult", // Sentinel mode tracking box result notification
    15233: "ResNotifyOneClickGotoState", // One-click GOTO status
    15234: "ResNotifyStreamType", // Image type notification
    15235: "ResNotifyRecordTime", // Wide Recording time
    15236: "ResNotifyOperationState", // Astronomical overlay wide shooting status
    15237: "ResNotifyProgressCaptureRawLiveStacking", // Astronomical overlay wide shooting progress
    15238: "ResNotifyMultiTrackResult", // Multi-Object Tracking Result Notification
    15239: "ResNotifyEqSolvingState", // EQ check status
    15240: "ResNotifyStateSentryMode", // Sentinel-UFO Mode Status
    15241: "ResNotifyLongExpPhotoProgress", // Telephoto long exposure progress
    15242: "ResNotifyLongExpPhotoProgress", // Wide-angle long exposure progress
    15243: "ResNotifyTemperature", // Movement temperature
    //  CMD_NOTIFY_PANORAMA_UPLOAD_COMPRESS_PROGRESS = 15244; //
    //  CMD_NOTIFY_PANORAMA_UPLOAD_UPLOAD_PROGRESS = 15245; //
    //  CMD_NOTIFY_PANORAMA_UPLOAD_COMPLETE = 15246; //
    15247: "ResNotifyOperationState", // Wide-angle dark field shooting state
    15248: "ResNotifyShootingScheduleResultAndState", // Shooting plan results and status notifications
    15249: "ResNotifyShootingTaskState", // Shooting task status notification
    15250: "ResNotifySkySeacherState", // Sky detection status
    //  CMD_NOTIFY_WIDE_MULTI_TRACK_RESULT = 15251; // Wide-angle multi-target box result notification
    //  CMD_NOTIFY_WIDE_TRACK_RESULT = 15252; // Wide-angle single target box result notification
};
export const notifyResponseMapping = {
    10000: "ComResponse", // Turn on the camera
    10001: "ComResponse", // Turn off the camera
    10002: "ComResponse", // Take photos
    10003: "ComResponse", // Start continuous shooting
    10004: "ComResponse", // Stop continuous shooting
    10005: "ComResponse", // Start recording
    10006: "ComResponse", // Stop recording
    10007: "ComResponse", // Set exposure mode
    10008: "ComResWithInt", // Acquire exposure mode
    10009: "ComResponse", // Set exposure value
    10010: "ComResWithDouble", // Get exposure value
    10011: "ComResponse", // Set gain mode
    10012: "ComResWithInt", // Acquisition gain mode
    10013: "ComResponse", // Set gain value
    10014: "ComResWithInt", // Get gain value
    10015: "ComResponse", // Set brightness
    10016: "ComResWithInt", // Acquire brightness
    10017: "ComResponse", // Set contrast
    10018: "ComResWithInt", // Get contrast
    10019: "ComResponse", // Set saturation
    10020: "ComResWithInt", // Acquire saturation
    10021: "ComResponse", // Set tone
    10022: "ComResWithInt", // Get hue
    10023: "ComResponse", // Set sharpness
    10024: "ComResWithInt", // Acquire sharpness
    10025: "ComResponse", // Set white balance mode
    10026: "ComResWithInt", // Acquire white balance mode
    10027: "ComResponse", // Set white balance scene
    10028: "ComResWithInt", // Get white balance scene
    10029: "ComResponse", // Set the white balance color temperature value
    10030: "ComResWithInt", // Obtain the white balance color temperature value
    10031: "ComResponse", // Set IRCUT
    10032: "ComResWithInt", // Get IRCUT status
    10033: "ComResponse", // Start time-lapse photography
    10034: "ComResponse", // Stop time-lapse photography
    10035: "ComResponse", // Set all parameters
    10036: "ResGetAllParams", // Get all parameters
    10037: "ComResponse", // Set feature parameters
    10038: "ResGetAllFeatureParams", // Get all feature parameters
    10039: "ComResponse", // Get the working status of the whole machine
    10040: "ComResponse", // Set jpg preview quality
    10041: "ComResWithInt", // Shoot RAW image
    10042: "ComResponse", // Set rtsp preview bit rate type
    11000: "ComResponse", // Start calibration
    11001: "ComResponse", // Stop calibration
    11002: "ComResponse", // Start GOTO Deep Space Object
    11003: "ComResponse", // Start GOTO Solar System Target
    11004: "ComResponse", // Stop GOTO
    11005: "ComResponse", // Start stacking
    11006: "ComResponse", // Stop overlay
    11007: "ComResponse", // Start shooting dark scenes
    11008: "ComResponse", // Stop filming darkfield
    11009: "ResCheckDarkFrame", // Inquire about the dark field that has been shot
    11010: "ComResponse", // GO LIVE interface
    11011: "ComResponse", // Start tracking the sun and moon
    11012: "ComResponse", // Stop tracking the sun and moon
    11013: "ResOneClickGoto", // One-click GOTO deep space celestial body
    11014: "ResOneClickGoto", // One-click GOTO solar system target
    11015: "ComResponse", // Stop one-click GOTO
    11016: "ComResponse", // Start wide-angle overlay
    11017: "ComResponse", // Stop wide-angle overlay
    11018: "ResStartEqSolving", // Start EQ verification
    11019: "ComResponse", // Stop EQ verification
    11020: "ComResponse", // Wide-angle GO LIVE interface
    11021: "ComResponse", // Start shooting the dark field with specified parameters (manually set exposure, gain, binning).
    11022: "ComResponse", // Stop shooting the dark field with specified parameters
    11023: "ResGetDarkFrameInfoList", // Query the list of recorded dark scenes
    11024: "ResDelDarkFrameList", // Delete the specified dark field list
    11025: "ComResponse", // Start shooting wide-angle dark field with specified parameters (manually set exposure and gain. Binning is fixed to 1 internally, setting does not work).
    11026: "ComResponse", // Stop shooting dark field with wide-angle specified parameters
    11027: "ResGetWideDarkFrameInfoList", // Query the list of wide-angle dark scenes taken
    11028: "ResDelWideDarkFrameList", // Delete the specified wide-angle dark field list
    12000: "ComResponse", // Turn on the camera
    12001: "ComResponse", // Turn off the camera
    12002: "ComResponse", // Set exposure mode
    12003: "ComResWithInt", // Acquire exposure mode
    12004: "ComResponse", // Set exposure value
    12005: "ComResWithDouble", // Get exposure value
    12006: "ComResponse", // Set gain
    12007: "ComResWithInt", // Acquisition gain
    12008: "ComResponse", // Set brightness
    12009: "ComResWithInt", // Acquire brightness
    12010: "ComResponse", // Set contrast
    12011: "ComResWithInt", // Get contrast
    12012: "ComResponse", // Set saturation
    12013: "ComResWithInt", // Acquire saturation
    12014: "ComResponse", // Set tone
    12015: "ComResWithInt", // Get hue
    12016: "ComResponse", // Set sharpness
    12017: "ComResWithInt", // Acquire sharpness
    12018: "ComResponse", // Set white balance mode
    12019: "ComResWithInt", // Acquire white balance mode
    12020: "ComResponse", // Set white balance color temperature
    12021: "ComResWithInt", // Obtain white balance color temperature
    12022: "ComResponse", // Take photos
    12023: "ComResponse", // Continuous shooting
    12024: "ComResponse", // Stop continuous shooting
    12025: "ComResponse", // Start time-lapse photography
    12026: "ComResponse", // Stop time-lapse photography
    12027: "ResGetAllParams", // Get all parameters
    12028: "ComResponse", // Set all parameters
    12030: "ComResponse", // Start wide recording
    12031: "ComResponse", // Stop wide recording
    13000: "ComResponse", // Set the system time
    13001: "ComResponse", // Set the time zone
    13002: "ComResponse", // Set MTP mode
    13003: "ComResponse", // Set CPU mode
    13004: "ComResponse", // Set HOST SLAVE mode
    13500: "ComResponse", // Turn on the ring light
    13501: "ComResponse", // Turn off the ring light
    13502: "ComResponse", // Shut down
    13503: "ComResponse", // Turn on the battery indicator
    13504: "ComResponse", // Turn off battery indicator =
    13505: "ComResponse", // Restart
    14000: "ReqMotorRun", // Motor motion
    14001: "ResMotorPosition", // Motor motion to
    14002: "ResMotor", // Motor stop
    14003: "ResMotor", // Motor Reset
    14004: "ResMotor", // Motor Change Speed
    14005: "ResMotor", // Motor ChangeDirection
    14006: "ComResponse", // Joystick
    14007: "ComResponse", // Short press the arrow keys with the joystick
    14008: "ComResponse", // Stop joystick
    14009: "ComResponse", // Dual camera linkage
    14010: "ResMotor", // Motor run in pulse
    14011: "ResMotorPosition", // Motor get Position
    14800: "ComResponse", // Started tracking
    14801: "ComResponse", // Stop tracking
    14802: "ComResponse", // Start Sentinel Mode (Pack
    14803: "ComResponse", // Stop Sentinel Mode
    14804: "ComResponse", // Start "Multi-Object Tracking" feature
    14805: "ComResponse", // Telephoto: "Multi-Object Tracking" starts tracking a target (the firmware will return an identification box and ID, and track the target according to the user's click confirmation)
    14806: "ComResponse", // Start sentinel UFO mode
    14807: "ComResponse", // Stop Sentinel UFO Mode
    14808: "ComResponse", // Wide-angle: "Multi-Object Tracking" starts tracking a specific target (firmware will return an identification box and ID, confirm tracking target based on user clicks)
    15000: "ComResponse", // Normal mode autofocus
    15001: "ComResponse", // Manual single-step focusing
    15002: "ComResponse", // Start manual continuous focus
    15003: "ComResponse", // Stop manual continuous focus
    15004: "ComResponse", // Start astronomical autofocus
    15005: "ComResponse", // Stop astronomical autofocus
    15500: "ComResponse", // Start panorama
    15501: "ComResponse", // Stop panorama
    15502: "ComResponse", // Start panorama Euler Range
};
const classStateMappings = {
    "Dwarfii_Api.ResNotifyStateAstroGoto:0": "ASTRO_STATE_IDLE",
    "Dwarfii_Api.ResNotifyStateAstroCalibration:0": "ASTRO_STATE_IDLE",
    "Dwarfii_Api.ResNotifyStateAstroTracking:0": "OPERATION_STATE_IDLE",
    "Dwarfii_Api.ResNotifyStateAstroTrackingSpecial:0": "OPERATION_STATE_IDLE",
    "Dwarfii_Api.ResNotifyOperationState:0": "OPERATION_STATE_IDLE",
    "Dwarfii_Api.ResNotifyCamFunctionState:0": "OPERATION_STATE_IDLE",
    "Dwarfii_Api.ResNotifyRgbState:0": "OFF",
    "Dwarfii_Api.ResNotifyRgbState:1": "ON",
    "Dwarfii_Api.ResNotifyPowerIndState:0": "OFF",
    "Dwarfii_Api.ResNotifyPowerIndState:1": "ON",
};
const classModeMappings = {
    "Dwarfii_Api.ResNotifyHostSlaveMode:0": "HOST",
    "Dwarfii_Api.ResNotifyHostSlaveMode:1": "SLAVE",
    "Dwarfii_Api.ResNotifyMTPState:0": "OFF",
    "Dwarfii_Api.Dwarfii_Api.ResNotifyMTPState:1": "ON",
    "Dwarfii_Api.ResNotifyCPUMode:0": "Normal",
    "Dwarfii_Api.ResNotifyCPUMode:1": "Performance",
    "Dwarfii_Api.ReqSetExpMod:0": "Auto",
    "Dwarfii_Api.ReqSetExpMod:1": "Manual",
    "Dwarfii_Api.ReqSetGainMode:0": "Auto",
    "Dwarfii_Api.ReqSetGainMode:1": "Manual",
    "Dwarfii_Api.ReqSetIrCut:0": "CUT",
    "Dwarfii_Api.ReqSetIrCut:1": "PASS",
    "Dwarfii_Api.ReqSetWBMode:0": "ColorTemperature",
    "Dwarfii_Api.ReqSetWBMode:1": "SceneMode",
    "Dwarfii_Api.ReqAstroAutoFocus:0": "Auto",
    "Dwarfii_Api.ReqAstroAutoFocus:1": "Manual",
    "Dwarfii_Api.Dwarfii_Api.ReqSetMtpMode:0": "OFF",
    "Dwarfii_Api.ReqSetMtpMode:1": "ON",
    "Dwarfii_Api.ReqSetCpuMode:0": "Normal",
    "Dwarfii_Api.ReqSetCpuMode:1": "Performance",
    "Dwarfii_Api.ReqSetHostSlaveMode:0": "HOST",
    "Dwarfii_Api.ReqSetHostSlaveMode:1": "SLAVE",
};
export function getClassStateMappings(className, value) {
    const key = `${className + ":" + value}`;
    return classStateMappings[key] || "";
}
export function getClassModeMappings(className, value) {
    const key = `${className + ":" + value}`;
    return classModeMappings[key] || "";
}
