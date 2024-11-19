import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a ReqStartCalibration. */
export interface IReqStartCalibration {
}

/** Represents a ReqStartCalibration. */
export class ReqStartCalibration implements IReqStartCalibration {

    /**
     * Constructs a new ReqStartCalibration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartCalibration);

    /**
     * Creates a new ReqStartCalibration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartCalibration instance
     */
    public static create(properties?: IReqStartCalibration): ReqStartCalibration;

    /**
     * Encodes the specified ReqStartCalibration message. Does not implicitly {@link ReqStartCalibration.verify|verify} messages.
     * @param message ReqStartCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartCalibration message, length delimited. Does not implicitly {@link ReqStartCalibration.verify|verify} messages.
     * @param message ReqStartCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartCalibration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartCalibration;

    /**
     * Decodes a ReqStartCalibration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartCalibration;

    /**
     * Verifies a ReqStartCalibration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartCalibration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartCalibration
     */
    public static fromObject(object: { [k: string]: any }): ReqStartCalibration;

    /**
     * Creates a plain object from a ReqStartCalibration message. Also converts values to other types if specified.
     * @param message ReqStartCalibration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartCalibration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartCalibration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopCalibration. */
export interface IReqStopCalibration {
}

/** Represents a ReqStopCalibration. */
export class ReqStopCalibration implements IReqStopCalibration {

    /**
     * Constructs a new ReqStopCalibration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopCalibration);

    /**
     * Creates a new ReqStopCalibration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopCalibration instance
     */
    public static create(properties?: IReqStopCalibration): ReqStopCalibration;

    /**
     * Encodes the specified ReqStopCalibration message. Does not implicitly {@link ReqStopCalibration.verify|verify} messages.
     * @param message ReqStopCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopCalibration message, length delimited. Does not implicitly {@link ReqStopCalibration.verify|verify} messages.
     * @param message ReqStopCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopCalibration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopCalibration;

    /**
     * Decodes a ReqStopCalibration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopCalibration;

    /**
     * Verifies a ReqStopCalibration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopCalibration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopCalibration
     */
    public static fromObject(object: { [k: string]: any }): ReqStopCalibration;

    /**
     * Creates a plain object from a ReqStopCalibration message. Also converts values to other types if specified.
     * @param message ReqStopCalibration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopCalibration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopCalibration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqGotoDSO. */
export interface IReqGotoDSO {

    /** ReqGotoDSO ra */
    ra?: (number|null);

    /** ReqGotoDSO dec */
    dec?: (number|null);

    /** ReqGotoDSO targetName */
    targetName?: (string|null);
}

/** Represents a ReqGotoDSO. */
export class ReqGotoDSO implements IReqGotoDSO {

    /**
     * Constructs a new ReqGotoDSO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGotoDSO);

    /** ReqGotoDSO ra. */
    public ra: number;

    /** ReqGotoDSO dec. */
    public dec: number;

    /** ReqGotoDSO targetName. */
    public targetName: string;

    /**
     * Creates a new ReqGotoDSO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGotoDSO instance
     */
    public static create(properties?: IReqGotoDSO): ReqGotoDSO;

    /**
     * Encodes the specified ReqGotoDSO message. Does not implicitly {@link ReqGotoDSO.verify|verify} messages.
     * @param message ReqGotoDSO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGotoDSO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGotoDSO message, length delimited. Does not implicitly {@link ReqGotoDSO.verify|verify} messages.
     * @param message ReqGotoDSO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGotoDSO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGotoDSO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGotoDSO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGotoDSO;

    /**
     * Decodes a ReqGotoDSO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGotoDSO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGotoDSO;

    /**
     * Verifies a ReqGotoDSO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGotoDSO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGotoDSO
     */
    public static fromObject(object: { [k: string]: any }): ReqGotoDSO;

    /**
     * Creates a plain object from a ReqGotoDSO message. Also converts values to other types if specified.
     * @param message ReqGotoDSO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGotoDSO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGotoDSO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGotoDSO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqGotoSolarSystem. */
export interface IReqGotoSolarSystem {

    /** ReqGotoSolarSystem index */
    index?: (number|null);

    /** ReqGotoSolarSystem lon */
    lon?: (number|null);

    /** ReqGotoSolarSystem lat */
    lat?: (number|null);

    /** ReqGotoSolarSystem targetName */
    targetName?: (string|null);
}

/** Represents a ReqGotoSolarSystem. */
export class ReqGotoSolarSystem implements IReqGotoSolarSystem {

    /**
     * Constructs a new ReqGotoSolarSystem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGotoSolarSystem);

    /** ReqGotoSolarSystem index. */
    public index: number;

    /** ReqGotoSolarSystem lon. */
    public lon: number;

    /** ReqGotoSolarSystem lat. */
    public lat: number;

    /** ReqGotoSolarSystem targetName. */
    public targetName: string;

    /**
     * Creates a new ReqGotoSolarSystem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGotoSolarSystem instance
     */
    public static create(properties?: IReqGotoSolarSystem): ReqGotoSolarSystem;

    /**
     * Encodes the specified ReqGotoSolarSystem message. Does not implicitly {@link ReqGotoSolarSystem.verify|verify} messages.
     * @param message ReqGotoSolarSystem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGotoSolarSystem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGotoSolarSystem message, length delimited. Does not implicitly {@link ReqGotoSolarSystem.verify|verify} messages.
     * @param message ReqGotoSolarSystem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGotoSolarSystem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGotoSolarSystem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGotoSolarSystem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGotoSolarSystem;

    /**
     * Decodes a ReqGotoSolarSystem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGotoSolarSystem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGotoSolarSystem;

    /**
     * Verifies a ReqGotoSolarSystem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGotoSolarSystem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGotoSolarSystem
     */
    public static fromObject(object: { [k: string]: any }): ReqGotoSolarSystem;

    /**
     * Creates a plain object from a ReqGotoSolarSystem message. Also converts values to other types if specified.
     * @param message ReqGotoSolarSystem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGotoSolarSystem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGotoSolarSystem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGotoSolarSystem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopGoto. */
export interface IReqStopGoto {
}

/** Represents a ReqStopGoto. */
export class ReqStopGoto implements IReqStopGoto {

    /**
     * Constructs a new ReqStopGoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopGoto);

    /**
     * Creates a new ReqStopGoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopGoto instance
     */
    public static create(properties?: IReqStopGoto): ReqStopGoto;

    /**
     * Encodes the specified ReqStopGoto message. Does not implicitly {@link ReqStopGoto.verify|verify} messages.
     * @param message ReqStopGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopGoto message, length delimited. Does not implicitly {@link ReqStopGoto.verify|verify} messages.
     * @param message ReqStopGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopGoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopGoto;

    /**
     * Decodes a ReqStopGoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopGoto;

    /**
     * Verifies a ReqStopGoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopGoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopGoto
     */
    public static fromObject(object: { [k: string]: any }): ReqStopGoto;

    /**
     * Creates a plain object from a ReqStopGoto message. Also converts values to other types if specified.
     * @param message ReqStopGoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopGoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopGoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopGoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqCaptureRawLiveStacking. */
export interface IReqCaptureRawLiveStacking {
}

/** Represents a ReqCaptureRawLiveStacking. */
export class ReqCaptureRawLiveStacking implements IReqCaptureRawLiveStacking {

    /**
     * Constructs a new ReqCaptureRawLiveStacking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCaptureRawLiveStacking);

    /**
     * Creates a new ReqCaptureRawLiveStacking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCaptureRawLiveStacking instance
     */
    public static create(properties?: IReqCaptureRawLiveStacking): ReqCaptureRawLiveStacking;

    /**
     * Encodes the specified ReqCaptureRawLiveStacking message. Does not implicitly {@link ReqCaptureRawLiveStacking.verify|verify} messages.
     * @param message ReqCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCaptureRawLiveStacking message, length delimited. Does not implicitly {@link ReqCaptureRawLiveStacking.verify|verify} messages.
     * @param message ReqCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCaptureRawLiveStacking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCaptureRawLiveStacking;

    /**
     * Decodes a ReqCaptureRawLiveStacking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCaptureRawLiveStacking;

    /**
     * Verifies a ReqCaptureRawLiveStacking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCaptureRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCaptureRawLiveStacking
     */
    public static fromObject(object: { [k: string]: any }): ReqCaptureRawLiveStacking;

    /**
     * Creates a plain object from a ReqCaptureRawLiveStacking message. Also converts values to other types if specified.
     * @param message ReqCaptureRawLiveStacking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCaptureRawLiveStacking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCaptureRawLiveStacking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCaptureRawLiveStacking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopCaptureRawLiveStacking. */
export interface IReqStopCaptureRawLiveStacking {
}

/** Represents a ReqStopCaptureRawLiveStacking. */
export class ReqStopCaptureRawLiveStacking implements IReqStopCaptureRawLiveStacking {

    /**
     * Constructs a new ReqStopCaptureRawLiveStacking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopCaptureRawLiveStacking);

    /**
     * Creates a new ReqStopCaptureRawLiveStacking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopCaptureRawLiveStacking instance
     */
    public static create(properties?: IReqStopCaptureRawLiveStacking): ReqStopCaptureRawLiveStacking;

    /**
     * Encodes the specified ReqStopCaptureRawLiveStacking message. Does not implicitly {@link ReqStopCaptureRawLiveStacking.verify|verify} messages.
     * @param message ReqStopCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopCaptureRawLiveStacking message, length delimited. Does not implicitly {@link ReqStopCaptureRawLiveStacking.verify|verify} messages.
     * @param message ReqStopCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopCaptureRawLiveStacking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopCaptureRawLiveStacking;

    /**
     * Decodes a ReqStopCaptureRawLiveStacking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopCaptureRawLiveStacking;

    /**
     * Verifies a ReqStopCaptureRawLiveStacking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopCaptureRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopCaptureRawLiveStacking
     */
    public static fromObject(object: { [k: string]: any }): ReqStopCaptureRawLiveStacking;

    /**
     * Creates a plain object from a ReqStopCaptureRawLiveStacking message. Also converts values to other types if specified.
     * @param message ReqStopCaptureRawLiveStacking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopCaptureRawLiveStacking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopCaptureRawLiveStacking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopCaptureRawLiveStacking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqCheckDarkFrame. */
export interface IReqCheckDarkFrame {
}

/** Represents a ReqCheckDarkFrame. */
export class ReqCheckDarkFrame implements IReqCheckDarkFrame {

    /**
     * Constructs a new ReqCheckDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCheckDarkFrame);

    /**
     * Creates a new ReqCheckDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCheckDarkFrame instance
     */
    public static create(properties?: IReqCheckDarkFrame): ReqCheckDarkFrame;

    /**
     * Encodes the specified ReqCheckDarkFrame message. Does not implicitly {@link ReqCheckDarkFrame.verify|verify} messages.
     * @param message ReqCheckDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCheckDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCheckDarkFrame message, length delimited. Does not implicitly {@link ReqCheckDarkFrame.verify|verify} messages.
     * @param message ReqCheckDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCheckDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCheckDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCheckDarkFrame;

    /**
     * Decodes a ReqCheckDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCheckDarkFrame;

    /**
     * Verifies a ReqCheckDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCheckDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCheckDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ReqCheckDarkFrame;

    /**
     * Creates a plain object from a ReqCheckDarkFrame message. Also converts values to other types if specified.
     * @param message ReqCheckDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCheckDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCheckDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCheckDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResCheckDarkFrame. */
export interface IResCheckDarkFrame {

    /** ResCheckDarkFrame progress */
    progress?: (number|null);

    /** ResCheckDarkFrame code */
    code?: (number|null);
}

/** Represents a ResCheckDarkFrame. */
export class ResCheckDarkFrame implements IResCheckDarkFrame {

    /**
     * Constructs a new ResCheckDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResCheckDarkFrame);

    /** ResCheckDarkFrame progress. */
    public progress: number;

    /** ResCheckDarkFrame code. */
    public code: number;

    /**
     * Creates a new ResCheckDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResCheckDarkFrame instance
     */
    public static create(properties?: IResCheckDarkFrame): ResCheckDarkFrame;

    /**
     * Encodes the specified ResCheckDarkFrame message. Does not implicitly {@link ResCheckDarkFrame.verify|verify} messages.
     * @param message ResCheckDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResCheckDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResCheckDarkFrame message, length delimited. Does not implicitly {@link ResCheckDarkFrame.verify|verify} messages.
     * @param message ResCheckDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResCheckDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResCheckDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResCheckDarkFrame;

    /**
     * Decodes a ResCheckDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResCheckDarkFrame;

    /**
     * Verifies a ResCheckDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResCheckDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResCheckDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ResCheckDarkFrame;

    /**
     * Creates a plain object from a ResCheckDarkFrame message. Also converts values to other types if specified.
     * @param message ResCheckDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResCheckDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResCheckDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResCheckDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqCaptureDarkFrame. */
export interface IReqCaptureDarkFrame {

    /** ReqCaptureDarkFrame reshoot */
    reshoot?: (number|null);
}

/** Represents a ReqCaptureDarkFrame. */
export class ReqCaptureDarkFrame implements IReqCaptureDarkFrame {

    /**
     * Constructs a new ReqCaptureDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCaptureDarkFrame);

    /** ReqCaptureDarkFrame reshoot. */
    public reshoot: number;

    /**
     * Creates a new ReqCaptureDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCaptureDarkFrame instance
     */
    public static create(properties?: IReqCaptureDarkFrame): ReqCaptureDarkFrame;

    /**
     * Encodes the specified ReqCaptureDarkFrame message. Does not implicitly {@link ReqCaptureDarkFrame.verify|verify} messages.
     * @param message ReqCaptureDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCaptureDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCaptureDarkFrame message, length delimited. Does not implicitly {@link ReqCaptureDarkFrame.verify|verify} messages.
     * @param message ReqCaptureDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCaptureDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCaptureDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCaptureDarkFrame;

    /**
     * Decodes a ReqCaptureDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCaptureDarkFrame;

    /**
     * Verifies a ReqCaptureDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCaptureDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCaptureDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ReqCaptureDarkFrame;

    /**
     * Creates a plain object from a ReqCaptureDarkFrame message. Also converts values to other types if specified.
     * @param message ReqCaptureDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCaptureDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCaptureDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCaptureDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopCaptureDarkFrame. */
export interface IReqStopCaptureDarkFrame {
}

/** Represents a ReqStopCaptureDarkFrame. */
export class ReqStopCaptureDarkFrame implements IReqStopCaptureDarkFrame {

    /**
     * Constructs a new ReqStopCaptureDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopCaptureDarkFrame);

    /**
     * Creates a new ReqStopCaptureDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopCaptureDarkFrame instance
     */
    public static create(properties?: IReqStopCaptureDarkFrame): ReqStopCaptureDarkFrame;

    /**
     * Encodes the specified ReqStopCaptureDarkFrame message. Does not implicitly {@link ReqStopCaptureDarkFrame.verify|verify} messages.
     * @param message ReqStopCaptureDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopCaptureDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopCaptureDarkFrame message, length delimited. Does not implicitly {@link ReqStopCaptureDarkFrame.verify|verify} messages.
     * @param message ReqStopCaptureDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopCaptureDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopCaptureDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopCaptureDarkFrame;

    /**
     * Decodes a ReqStopCaptureDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopCaptureDarkFrame;

    /**
     * Verifies a ReqStopCaptureDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopCaptureDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopCaptureDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ReqStopCaptureDarkFrame;

    /**
     * Creates a plain object from a ReqStopCaptureDarkFrame message. Also converts values to other types if specified.
     * @param message ReqStopCaptureDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopCaptureDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopCaptureDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopCaptureDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqCaptureDarkFrameWithParam. */
export interface IReqCaptureDarkFrameWithParam {

    /** ReqCaptureDarkFrameWithParam expIndex */
    expIndex?: (number|null);

    /** ReqCaptureDarkFrameWithParam gainIndex */
    gainIndex?: (number|null);

    /** ReqCaptureDarkFrameWithParam binIndex */
    binIndex?: (number|null);

    /** ReqCaptureDarkFrameWithParam capSize */
    capSize?: (number|null);
}

/** Represents a ReqCaptureDarkFrameWithParam. */
export class ReqCaptureDarkFrameWithParam implements IReqCaptureDarkFrameWithParam {

    /**
     * Constructs a new ReqCaptureDarkFrameWithParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCaptureDarkFrameWithParam);

    /** ReqCaptureDarkFrameWithParam expIndex. */
    public expIndex: number;

    /** ReqCaptureDarkFrameWithParam gainIndex. */
    public gainIndex: number;

    /** ReqCaptureDarkFrameWithParam binIndex. */
    public binIndex: number;

    /** ReqCaptureDarkFrameWithParam capSize. */
    public capSize: number;

    /**
     * Creates a new ReqCaptureDarkFrameWithParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCaptureDarkFrameWithParam instance
     */
    public static create(properties?: IReqCaptureDarkFrameWithParam): ReqCaptureDarkFrameWithParam;

    /**
     * Encodes the specified ReqCaptureDarkFrameWithParam message. Does not implicitly {@link ReqCaptureDarkFrameWithParam.verify|verify} messages.
     * @param message ReqCaptureDarkFrameWithParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCaptureDarkFrameWithParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCaptureDarkFrameWithParam message, length delimited. Does not implicitly {@link ReqCaptureDarkFrameWithParam.verify|verify} messages.
     * @param message ReqCaptureDarkFrameWithParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCaptureDarkFrameWithParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCaptureDarkFrameWithParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCaptureDarkFrameWithParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCaptureDarkFrameWithParam;

    /**
     * Decodes a ReqCaptureDarkFrameWithParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCaptureDarkFrameWithParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCaptureDarkFrameWithParam;

    /**
     * Verifies a ReqCaptureDarkFrameWithParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCaptureDarkFrameWithParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCaptureDarkFrameWithParam
     */
    public static fromObject(object: { [k: string]: any }): ReqCaptureDarkFrameWithParam;

    /**
     * Creates a plain object from a ReqCaptureDarkFrameWithParam message. Also converts values to other types if specified.
     * @param message ReqCaptureDarkFrameWithParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCaptureDarkFrameWithParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCaptureDarkFrameWithParam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCaptureDarkFrameWithParam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopCaptureDarkFrameWithParam. */
export interface IReqStopCaptureDarkFrameWithParam {
}

/** Represents a ReqStopCaptureDarkFrameWithParam. */
export class ReqStopCaptureDarkFrameWithParam implements IReqStopCaptureDarkFrameWithParam {

    /**
     * Constructs a new ReqStopCaptureDarkFrameWithParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopCaptureDarkFrameWithParam);

    /**
     * Creates a new ReqStopCaptureDarkFrameWithParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopCaptureDarkFrameWithParam instance
     */
    public static create(properties?: IReqStopCaptureDarkFrameWithParam): ReqStopCaptureDarkFrameWithParam;

    /**
     * Encodes the specified ReqStopCaptureDarkFrameWithParam message. Does not implicitly {@link ReqStopCaptureDarkFrameWithParam.verify|verify} messages.
     * @param message ReqStopCaptureDarkFrameWithParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopCaptureDarkFrameWithParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopCaptureDarkFrameWithParam message, length delimited. Does not implicitly {@link ReqStopCaptureDarkFrameWithParam.verify|verify} messages.
     * @param message ReqStopCaptureDarkFrameWithParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopCaptureDarkFrameWithParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopCaptureDarkFrameWithParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopCaptureDarkFrameWithParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopCaptureDarkFrameWithParam;

    /**
     * Decodes a ReqStopCaptureDarkFrameWithParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopCaptureDarkFrameWithParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopCaptureDarkFrameWithParam;

    /**
     * Verifies a ReqStopCaptureDarkFrameWithParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopCaptureDarkFrameWithParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopCaptureDarkFrameWithParam
     */
    public static fromObject(object: { [k: string]: any }): ReqStopCaptureDarkFrameWithParam;

    /**
     * Creates a plain object from a ReqStopCaptureDarkFrameWithParam message. Also converts values to other types if specified.
     * @param message ReqStopCaptureDarkFrameWithParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopCaptureDarkFrameWithParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopCaptureDarkFrameWithParam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopCaptureDarkFrameWithParam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqGetDarkFrameList. */
export interface IReqGetDarkFrameList {
}

/** Represents a ReqGetDarkFrameList. */
export class ReqGetDarkFrameList implements IReqGetDarkFrameList {

    /**
     * Constructs a new ReqGetDarkFrameList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetDarkFrameList);

    /**
     * Creates a new ReqGetDarkFrameList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetDarkFrameList instance
     */
    public static create(properties?: IReqGetDarkFrameList): ReqGetDarkFrameList;

    /**
     * Encodes the specified ReqGetDarkFrameList message. Does not implicitly {@link ReqGetDarkFrameList.verify|verify} messages.
     * @param message ReqGetDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetDarkFrameList message, length delimited. Does not implicitly {@link ReqGetDarkFrameList.verify|verify} messages.
     * @param message ReqGetDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetDarkFrameList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetDarkFrameList;

    /**
     * Decodes a ReqGetDarkFrameList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetDarkFrameList;

    /**
     * Verifies a ReqGetDarkFrameList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetDarkFrameList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetDarkFrameList
     */
    public static fromObject(object: { [k: string]: any }): ReqGetDarkFrameList;

    /**
     * Creates a plain object from a ReqGetDarkFrameList message. Also converts values to other types if specified.
     * @param message ReqGetDarkFrameList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetDarkFrameList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetDarkFrameList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetDarkFrameList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResGetDarkFrameInfo. */
export interface IResGetDarkFrameInfo {

    /** ResGetDarkFrameInfo expIndex */
    expIndex?: (number|null);

    /** ResGetDarkFrameInfo gainIndex */
    gainIndex?: (number|null);

    /** ResGetDarkFrameInfo binIndex */
    binIndex?: (number|null);

    /** ResGetDarkFrameInfo expName */
    expName?: (string|null);

    /** ResGetDarkFrameInfo gainName */
    gainName?: (string|null);

    /** ResGetDarkFrameInfo binName */
    binName?: (string|null);

    /** ResGetDarkFrameInfo temperature */
    temperature?: (number|null);
}

/** Represents a ResGetDarkFrameInfo. */
export class ResGetDarkFrameInfo implements IResGetDarkFrameInfo {

    /**
     * Constructs a new ResGetDarkFrameInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetDarkFrameInfo);

    /** ResGetDarkFrameInfo expIndex. */
    public expIndex: number;

    /** ResGetDarkFrameInfo gainIndex. */
    public gainIndex: number;

    /** ResGetDarkFrameInfo binIndex. */
    public binIndex: number;

    /** ResGetDarkFrameInfo expName. */
    public expName: string;

    /** ResGetDarkFrameInfo gainName. */
    public gainName: string;

    /** ResGetDarkFrameInfo binName. */
    public binName: string;

    /** ResGetDarkFrameInfo temperature. */
    public temperature: number;

    /**
     * Creates a new ResGetDarkFrameInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetDarkFrameInfo instance
     */
    public static create(properties?: IResGetDarkFrameInfo): ResGetDarkFrameInfo;

    /**
     * Encodes the specified ResGetDarkFrameInfo message. Does not implicitly {@link ResGetDarkFrameInfo.verify|verify} messages.
     * @param message ResGetDarkFrameInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetDarkFrameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetDarkFrameInfo message, length delimited. Does not implicitly {@link ResGetDarkFrameInfo.verify|verify} messages.
     * @param message ResGetDarkFrameInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetDarkFrameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetDarkFrameInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetDarkFrameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetDarkFrameInfo;

    /**
     * Decodes a ResGetDarkFrameInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetDarkFrameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetDarkFrameInfo;

    /**
     * Verifies a ResGetDarkFrameInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetDarkFrameInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetDarkFrameInfo
     */
    public static fromObject(object: { [k: string]: any }): ResGetDarkFrameInfo;

    /**
     * Creates a plain object from a ResGetDarkFrameInfo message. Also converts values to other types if specified.
     * @param message ResGetDarkFrameInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetDarkFrameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetDarkFrameInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetDarkFrameInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResGetDarkFrameInfoList. */
export interface IResGetDarkFrameInfoList {

    /** ResGetDarkFrameInfoList code */
    code?: (number|null);

    /** ResGetDarkFrameInfoList results */
    results?: (IResGetDarkFrameInfo[]|null);
}

/** Represents a ResGetDarkFrameInfoList. */
export class ResGetDarkFrameInfoList implements IResGetDarkFrameInfoList {

    /**
     * Constructs a new ResGetDarkFrameInfoList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetDarkFrameInfoList);

    /** ResGetDarkFrameInfoList code. */
    public code: number;

    /** ResGetDarkFrameInfoList results. */
    public results: IResGetDarkFrameInfo[];

    /**
     * Creates a new ResGetDarkFrameInfoList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetDarkFrameInfoList instance
     */
    public static create(properties?: IResGetDarkFrameInfoList): ResGetDarkFrameInfoList;

    /**
     * Encodes the specified ResGetDarkFrameInfoList message. Does not implicitly {@link ResGetDarkFrameInfoList.verify|verify} messages.
     * @param message ResGetDarkFrameInfoList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetDarkFrameInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetDarkFrameInfoList message, length delimited. Does not implicitly {@link ResGetDarkFrameInfoList.verify|verify} messages.
     * @param message ResGetDarkFrameInfoList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetDarkFrameInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetDarkFrameInfoList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetDarkFrameInfoList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetDarkFrameInfoList;

    /**
     * Decodes a ResGetDarkFrameInfoList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetDarkFrameInfoList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetDarkFrameInfoList;

    /**
     * Verifies a ResGetDarkFrameInfoList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetDarkFrameInfoList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetDarkFrameInfoList
     */
    public static fromObject(object: { [k: string]: any }): ResGetDarkFrameInfoList;

    /**
     * Creates a plain object from a ResGetDarkFrameInfoList message. Also converts values to other types if specified.
     * @param message ResGetDarkFrameInfoList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetDarkFrameInfoList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetDarkFrameInfoList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetDarkFrameInfoList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqDelDarkFrame. */
export interface IReqDelDarkFrame {

    /** ReqDelDarkFrame expIndex */
    expIndex?: (number|null);

    /** ReqDelDarkFrame gainIndex */
    gainIndex?: (number|null);

    /** ReqDelDarkFrame binIndex */
    binIndex?: (number|null);
}

/** Represents a ReqDelDarkFrame. */
export class ReqDelDarkFrame implements IReqDelDarkFrame {

    /**
     * Constructs a new ReqDelDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDelDarkFrame);

    /** ReqDelDarkFrame expIndex. */
    public expIndex: number;

    /** ReqDelDarkFrame gainIndex. */
    public gainIndex: number;

    /** ReqDelDarkFrame binIndex. */
    public binIndex: number;

    /**
     * Creates a new ReqDelDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDelDarkFrame instance
     */
    public static create(properties?: IReqDelDarkFrame): ReqDelDarkFrame;

    /**
     * Encodes the specified ReqDelDarkFrame message. Does not implicitly {@link ReqDelDarkFrame.verify|verify} messages.
     * @param message ReqDelDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDelDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDelDarkFrame message, length delimited. Does not implicitly {@link ReqDelDarkFrame.verify|verify} messages.
     * @param message ReqDelDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDelDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDelDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDelDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDelDarkFrame;

    /**
     * Decodes a ReqDelDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDelDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDelDarkFrame;

    /**
     * Verifies a ReqDelDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDelDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDelDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ReqDelDarkFrame;

    /**
     * Creates a plain object from a ReqDelDarkFrame message. Also converts values to other types if specified.
     * @param message ReqDelDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDelDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDelDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDelDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqDelDarkFrameList. */
export interface IReqDelDarkFrameList {

    /** ReqDelDarkFrameList darkList */
    darkList?: (IReqDelDarkFrame[]|null);
}

/** Represents a ReqDelDarkFrameList. */
export class ReqDelDarkFrameList implements IReqDelDarkFrameList {

    /**
     * Constructs a new ReqDelDarkFrameList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDelDarkFrameList);

    /** ReqDelDarkFrameList darkList. */
    public darkList: IReqDelDarkFrame[];

    /**
     * Creates a new ReqDelDarkFrameList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDelDarkFrameList instance
     */
    public static create(properties?: IReqDelDarkFrameList): ReqDelDarkFrameList;

    /**
     * Encodes the specified ReqDelDarkFrameList message. Does not implicitly {@link ReqDelDarkFrameList.verify|verify} messages.
     * @param message ReqDelDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDelDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDelDarkFrameList message, length delimited. Does not implicitly {@link ReqDelDarkFrameList.verify|verify} messages.
     * @param message ReqDelDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDelDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDelDarkFrameList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDelDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDelDarkFrameList;

    /**
     * Decodes a ReqDelDarkFrameList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDelDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDelDarkFrameList;

    /**
     * Verifies a ReqDelDarkFrameList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDelDarkFrameList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDelDarkFrameList
     */
    public static fromObject(object: { [k: string]: any }): ReqDelDarkFrameList;

    /**
     * Creates a plain object from a ReqDelDarkFrameList message. Also converts values to other types if specified.
     * @param message ReqDelDarkFrameList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDelDarkFrameList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDelDarkFrameList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDelDarkFrameList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResDelDarkFrameList. */
export interface IResDelDarkFrameList {

    /** ResDelDarkFrameList code */
    code?: (number|null);
}

/** Represents a ResDelDarkFrameList. */
export class ResDelDarkFrameList implements IResDelDarkFrameList {

    /**
     * Constructs a new ResDelDarkFrameList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResDelDarkFrameList);

    /** ResDelDarkFrameList code. */
    public code: number;

    /**
     * Creates a new ResDelDarkFrameList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResDelDarkFrameList instance
     */
    public static create(properties?: IResDelDarkFrameList): ResDelDarkFrameList;

    /**
     * Encodes the specified ResDelDarkFrameList message. Does not implicitly {@link ResDelDarkFrameList.verify|verify} messages.
     * @param message ResDelDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResDelDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResDelDarkFrameList message, length delimited. Does not implicitly {@link ResDelDarkFrameList.verify|verify} messages.
     * @param message ResDelDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResDelDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResDelDarkFrameList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResDelDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResDelDarkFrameList;

    /**
     * Decodes a ResDelDarkFrameList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResDelDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResDelDarkFrameList;

    /**
     * Verifies a ResDelDarkFrameList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResDelDarkFrameList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResDelDarkFrameList
     */
    public static fromObject(object: { [k: string]: any }): ResDelDarkFrameList;

    /**
     * Creates a plain object from a ResDelDarkFrameList message. Also converts values to other types if specified.
     * @param message ResDelDarkFrameList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResDelDarkFrameList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResDelDarkFrameList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResDelDarkFrameList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqGoLive. */
export interface IReqGoLive {
}

/** Represents a ReqGoLive. */
export class ReqGoLive implements IReqGoLive {

    /**
     * Constructs a new ReqGoLive.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGoLive);

    /**
     * Creates a new ReqGoLive instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGoLive instance
     */
    public static create(properties?: IReqGoLive): ReqGoLive;

    /**
     * Encodes the specified ReqGoLive message. Does not implicitly {@link ReqGoLive.verify|verify} messages.
     * @param message ReqGoLive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGoLive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGoLive message, length delimited. Does not implicitly {@link ReqGoLive.verify|verify} messages.
     * @param message ReqGoLive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGoLive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGoLive message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGoLive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGoLive;

    /**
     * Decodes a ReqGoLive message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGoLive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGoLive;

    /**
     * Verifies a ReqGoLive message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGoLive message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGoLive
     */
    public static fromObject(object: { [k: string]: any }): ReqGoLive;

    /**
     * Creates a plain object from a ReqGoLive message. Also converts values to other types if specified.
     * @param message ReqGoLive
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGoLive, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGoLive to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGoLive
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqTrackSpecialTarget. */
export interface IReqTrackSpecialTarget {

    /** ReqTrackSpecialTarget index */
    index?: (number|null);

    /** ReqTrackSpecialTarget lon */
    lon?: (number|null);

    /** ReqTrackSpecialTarget lat */
    lat?: (number|null);
}

/** Represents a ReqTrackSpecialTarget. */
export class ReqTrackSpecialTarget implements IReqTrackSpecialTarget {

    /**
     * Constructs a new ReqTrackSpecialTarget.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqTrackSpecialTarget);

    /** ReqTrackSpecialTarget index. */
    public index: number;

    /** ReqTrackSpecialTarget lon. */
    public lon: number;

    /** ReqTrackSpecialTarget lat. */
    public lat: number;

    /**
     * Creates a new ReqTrackSpecialTarget instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqTrackSpecialTarget instance
     */
    public static create(properties?: IReqTrackSpecialTarget): ReqTrackSpecialTarget;

    /**
     * Encodes the specified ReqTrackSpecialTarget message. Does not implicitly {@link ReqTrackSpecialTarget.verify|verify} messages.
     * @param message ReqTrackSpecialTarget message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqTrackSpecialTarget, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqTrackSpecialTarget message, length delimited. Does not implicitly {@link ReqTrackSpecialTarget.verify|verify} messages.
     * @param message ReqTrackSpecialTarget message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqTrackSpecialTarget, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqTrackSpecialTarget message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqTrackSpecialTarget;

    /**
     * Decodes a ReqTrackSpecialTarget message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqTrackSpecialTarget;

    /**
     * Verifies a ReqTrackSpecialTarget message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqTrackSpecialTarget message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqTrackSpecialTarget
     */
    public static fromObject(object: { [k: string]: any }): ReqTrackSpecialTarget;

    /**
     * Creates a plain object from a ReqTrackSpecialTarget message. Also converts values to other types if specified.
     * @param message ReqTrackSpecialTarget
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqTrackSpecialTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqTrackSpecialTarget to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqTrackSpecialTarget
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopTrackSpecialTarget. */
export interface IReqStopTrackSpecialTarget {
}

/** Represents a ReqStopTrackSpecialTarget. */
export class ReqStopTrackSpecialTarget implements IReqStopTrackSpecialTarget {

    /**
     * Constructs a new ReqStopTrackSpecialTarget.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopTrackSpecialTarget);

    /**
     * Creates a new ReqStopTrackSpecialTarget instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopTrackSpecialTarget instance
     */
    public static create(properties?: IReqStopTrackSpecialTarget): ReqStopTrackSpecialTarget;

    /**
     * Encodes the specified ReqStopTrackSpecialTarget message. Does not implicitly {@link ReqStopTrackSpecialTarget.verify|verify} messages.
     * @param message ReqStopTrackSpecialTarget message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopTrackSpecialTarget, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopTrackSpecialTarget message, length delimited. Does not implicitly {@link ReqStopTrackSpecialTarget.verify|verify} messages.
     * @param message ReqStopTrackSpecialTarget message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopTrackSpecialTarget, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopTrackSpecialTarget message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopTrackSpecialTarget;

    /**
     * Decodes a ReqStopTrackSpecialTarget message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopTrackSpecialTarget;

    /**
     * Verifies a ReqStopTrackSpecialTarget message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopTrackSpecialTarget message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopTrackSpecialTarget
     */
    public static fromObject(object: { [k: string]: any }): ReqStopTrackSpecialTarget;

    /**
     * Creates a plain object from a ReqStopTrackSpecialTarget message. Also converts values to other types if specified.
     * @param message ReqStopTrackSpecialTarget
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopTrackSpecialTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopTrackSpecialTarget to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopTrackSpecialTarget
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqOneClickGotoDSO. */
export interface IReqOneClickGotoDSO {

    /** ReqOneClickGotoDSO ra */
    ra?: (number|null);

    /** ReqOneClickGotoDSO dec */
    dec?: (number|null);

    /** ReqOneClickGotoDSO targetName */
    targetName?: (string|null);
}

/** Represents a ReqOneClickGotoDSO. */
export class ReqOneClickGotoDSO implements IReqOneClickGotoDSO {

    /**
     * Constructs a new ReqOneClickGotoDSO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqOneClickGotoDSO);

    /** ReqOneClickGotoDSO ra. */
    public ra: number;

    /** ReqOneClickGotoDSO dec. */
    public dec: number;

    /** ReqOneClickGotoDSO targetName. */
    public targetName: string;

    /**
     * Creates a new ReqOneClickGotoDSO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqOneClickGotoDSO instance
     */
    public static create(properties?: IReqOneClickGotoDSO): ReqOneClickGotoDSO;

    /**
     * Encodes the specified ReqOneClickGotoDSO message. Does not implicitly {@link ReqOneClickGotoDSO.verify|verify} messages.
     * @param message ReqOneClickGotoDSO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqOneClickGotoDSO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqOneClickGotoDSO message, length delimited. Does not implicitly {@link ReqOneClickGotoDSO.verify|verify} messages.
     * @param message ReqOneClickGotoDSO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqOneClickGotoDSO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqOneClickGotoDSO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqOneClickGotoDSO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqOneClickGotoDSO;

    /**
     * Decodes a ReqOneClickGotoDSO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqOneClickGotoDSO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqOneClickGotoDSO;

    /**
     * Verifies a ReqOneClickGotoDSO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqOneClickGotoDSO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqOneClickGotoDSO
     */
    public static fromObject(object: { [k: string]: any }): ReqOneClickGotoDSO;

    /**
     * Creates a plain object from a ReqOneClickGotoDSO message. Also converts values to other types if specified.
     * @param message ReqOneClickGotoDSO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqOneClickGotoDSO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqOneClickGotoDSO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqOneClickGotoDSO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqOneClickGotoSolarSystem. */
export interface IReqOneClickGotoSolarSystem {

    /** ReqOneClickGotoSolarSystem index */
    index?: (number|null);

    /** ReqOneClickGotoSolarSystem lon */
    lon?: (number|null);

    /** ReqOneClickGotoSolarSystem lat */
    lat?: (number|null);

    /** ReqOneClickGotoSolarSystem targetName */
    targetName?: (string|null);
}

/** Represents a ReqOneClickGotoSolarSystem. */
export class ReqOneClickGotoSolarSystem implements IReqOneClickGotoSolarSystem {

    /**
     * Constructs a new ReqOneClickGotoSolarSystem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqOneClickGotoSolarSystem);

    /** ReqOneClickGotoSolarSystem index. */
    public index: number;

    /** ReqOneClickGotoSolarSystem lon. */
    public lon: number;

    /** ReqOneClickGotoSolarSystem lat. */
    public lat: number;

    /** ReqOneClickGotoSolarSystem targetName. */
    public targetName: string;

    /**
     * Creates a new ReqOneClickGotoSolarSystem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqOneClickGotoSolarSystem instance
     */
    public static create(properties?: IReqOneClickGotoSolarSystem): ReqOneClickGotoSolarSystem;

    /**
     * Encodes the specified ReqOneClickGotoSolarSystem message. Does not implicitly {@link ReqOneClickGotoSolarSystem.verify|verify} messages.
     * @param message ReqOneClickGotoSolarSystem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqOneClickGotoSolarSystem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqOneClickGotoSolarSystem message, length delimited. Does not implicitly {@link ReqOneClickGotoSolarSystem.verify|verify} messages.
     * @param message ReqOneClickGotoSolarSystem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqOneClickGotoSolarSystem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqOneClickGotoSolarSystem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqOneClickGotoSolarSystem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqOneClickGotoSolarSystem;

    /**
     * Decodes a ReqOneClickGotoSolarSystem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqOneClickGotoSolarSystem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqOneClickGotoSolarSystem;

    /**
     * Verifies a ReqOneClickGotoSolarSystem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqOneClickGotoSolarSystem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqOneClickGotoSolarSystem
     */
    public static fromObject(object: { [k: string]: any }): ReqOneClickGotoSolarSystem;

    /**
     * Creates a plain object from a ReqOneClickGotoSolarSystem message. Also converts values to other types if specified.
     * @param message ReqOneClickGotoSolarSystem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqOneClickGotoSolarSystem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqOneClickGotoSolarSystem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqOneClickGotoSolarSystem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResOneClickGoto. */
export interface IResOneClickGoto {

    /** ResOneClickGoto step */
    step?: (number|null);

    /** ResOneClickGoto code */
    code?: (number|null);

    /** ResOneClickGoto allEnd */
    allEnd?: (boolean|null);
}

/** Represents a ResOneClickGoto. */
export class ResOneClickGoto implements IResOneClickGoto {

    /**
     * Constructs a new ResOneClickGoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResOneClickGoto);

    /** ResOneClickGoto step. */
    public step: number;

    /** ResOneClickGoto code. */
    public code: number;

    /** ResOneClickGoto allEnd. */
    public allEnd: boolean;

    /**
     * Creates a new ResOneClickGoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResOneClickGoto instance
     */
    public static create(properties?: IResOneClickGoto): ResOneClickGoto;

    /**
     * Encodes the specified ResOneClickGoto message. Does not implicitly {@link ResOneClickGoto.verify|verify} messages.
     * @param message ResOneClickGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResOneClickGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResOneClickGoto message, length delimited. Does not implicitly {@link ResOneClickGoto.verify|verify} messages.
     * @param message ResOneClickGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResOneClickGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResOneClickGoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResOneClickGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResOneClickGoto;

    /**
     * Decodes a ResOneClickGoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResOneClickGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResOneClickGoto;

    /**
     * Verifies a ResOneClickGoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResOneClickGoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResOneClickGoto
     */
    public static fromObject(object: { [k: string]: any }): ResOneClickGoto;

    /**
     * Creates a plain object from a ResOneClickGoto message. Also converts values to other types if specified.
     * @param message ResOneClickGoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResOneClickGoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResOneClickGoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResOneClickGoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopOneClickGoto. */
export interface IReqStopOneClickGoto {
}

/** Represents a ReqStopOneClickGoto. */
export class ReqStopOneClickGoto implements IReqStopOneClickGoto {

    /**
     * Constructs a new ReqStopOneClickGoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopOneClickGoto);

    /**
     * Creates a new ReqStopOneClickGoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopOneClickGoto instance
     */
    public static create(properties?: IReqStopOneClickGoto): ReqStopOneClickGoto;

    /**
     * Encodes the specified ReqStopOneClickGoto message. Does not implicitly {@link ReqStopOneClickGoto.verify|verify} messages.
     * @param message ReqStopOneClickGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopOneClickGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopOneClickGoto message, length delimited. Does not implicitly {@link ReqStopOneClickGoto.verify|verify} messages.
     * @param message ReqStopOneClickGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopOneClickGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopOneClickGoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopOneClickGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopOneClickGoto;

    /**
     * Decodes a ReqStopOneClickGoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopOneClickGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopOneClickGoto;

    /**
     * Verifies a ReqStopOneClickGoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopOneClickGoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopOneClickGoto
     */
    public static fromObject(object: { [k: string]: any }): ReqStopOneClickGoto;

    /**
     * Creates a plain object from a ReqStopOneClickGoto message. Also converts values to other types if specified.
     * @param message ReqStopOneClickGoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopOneClickGoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopOneClickGoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopOneClickGoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqCaptureWideRawLiveStacking. */
export interface IReqCaptureWideRawLiveStacking {
}

/** Represents a ReqCaptureWideRawLiveStacking. */
export class ReqCaptureWideRawLiveStacking implements IReqCaptureWideRawLiveStacking {

    /**
     * Constructs a new ReqCaptureWideRawLiveStacking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCaptureWideRawLiveStacking);

    /**
     * Creates a new ReqCaptureWideRawLiveStacking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCaptureWideRawLiveStacking instance
     */
    public static create(properties?: IReqCaptureWideRawLiveStacking): ReqCaptureWideRawLiveStacking;

    /**
     * Encodes the specified ReqCaptureWideRawLiveStacking message. Does not implicitly {@link ReqCaptureWideRawLiveStacking.verify|verify} messages.
     * @param message ReqCaptureWideRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCaptureWideRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCaptureWideRawLiveStacking message, length delimited. Does not implicitly {@link ReqCaptureWideRawLiveStacking.verify|verify} messages.
     * @param message ReqCaptureWideRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCaptureWideRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCaptureWideRawLiveStacking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCaptureWideRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCaptureWideRawLiveStacking;

    /**
     * Decodes a ReqCaptureWideRawLiveStacking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCaptureWideRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCaptureWideRawLiveStacking;

    /**
     * Verifies a ReqCaptureWideRawLiveStacking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCaptureWideRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCaptureWideRawLiveStacking
     */
    public static fromObject(object: { [k: string]: any }): ReqCaptureWideRawLiveStacking;

    /**
     * Creates a plain object from a ReqCaptureWideRawLiveStacking message. Also converts values to other types if specified.
     * @param message ReqCaptureWideRawLiveStacking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCaptureWideRawLiveStacking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCaptureWideRawLiveStacking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCaptureWideRawLiveStacking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopCaptureWideRawLiveStacking. */
export interface IReqStopCaptureWideRawLiveStacking {
}

/** Represents a ReqStopCaptureWideRawLiveStacking. */
export class ReqStopCaptureWideRawLiveStacking implements IReqStopCaptureWideRawLiveStacking {

    /**
     * Constructs a new ReqStopCaptureWideRawLiveStacking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopCaptureWideRawLiveStacking);

    /**
     * Creates a new ReqStopCaptureWideRawLiveStacking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopCaptureWideRawLiveStacking instance
     */
    public static create(properties?: IReqStopCaptureWideRawLiveStacking): ReqStopCaptureWideRawLiveStacking;

    /**
     * Encodes the specified ReqStopCaptureWideRawLiveStacking message. Does not implicitly {@link ReqStopCaptureWideRawLiveStacking.verify|verify} messages.
     * @param message ReqStopCaptureWideRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopCaptureWideRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopCaptureWideRawLiveStacking message, length delimited. Does not implicitly {@link ReqStopCaptureWideRawLiveStacking.verify|verify} messages.
     * @param message ReqStopCaptureWideRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopCaptureWideRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopCaptureWideRawLiveStacking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopCaptureWideRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopCaptureWideRawLiveStacking;

    /**
     * Decodes a ReqStopCaptureWideRawLiveStacking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopCaptureWideRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopCaptureWideRawLiveStacking;

    /**
     * Verifies a ReqStopCaptureWideRawLiveStacking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopCaptureWideRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopCaptureWideRawLiveStacking
     */
    public static fromObject(object: { [k: string]: any }): ReqStopCaptureWideRawLiveStacking;

    /**
     * Creates a plain object from a ReqStopCaptureWideRawLiveStacking message. Also converts values to other types if specified.
     * @param message ReqStopCaptureWideRawLiveStacking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopCaptureWideRawLiveStacking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopCaptureWideRawLiveStacking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopCaptureWideRawLiveStacking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStartEqSolving. */
export interface IReqStartEqSolving {

    /** ReqStartEqSolving lon */
    lon?: (number|null);

    /** ReqStartEqSolving lat */
    lat?: (number|null);
}

/** Represents a ReqStartEqSolving. */
export class ReqStartEqSolving implements IReqStartEqSolving {

    /**
     * Constructs a new ReqStartEqSolving.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartEqSolving);

    /** ReqStartEqSolving lon. */
    public lon: number;

    /** ReqStartEqSolving lat. */
    public lat: number;

    /**
     * Creates a new ReqStartEqSolving instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartEqSolving instance
     */
    public static create(properties?: IReqStartEqSolving): ReqStartEqSolving;

    /**
     * Encodes the specified ReqStartEqSolving message. Does not implicitly {@link ReqStartEqSolving.verify|verify} messages.
     * @param message ReqStartEqSolving message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartEqSolving, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartEqSolving message, length delimited. Does not implicitly {@link ReqStartEqSolving.verify|verify} messages.
     * @param message ReqStartEqSolving message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartEqSolving, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartEqSolving message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartEqSolving
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartEqSolving;

    /**
     * Decodes a ReqStartEqSolving message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartEqSolving
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartEqSolving;

    /**
     * Verifies a ReqStartEqSolving message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartEqSolving message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartEqSolving
     */
    public static fromObject(object: { [k: string]: any }): ReqStartEqSolving;

    /**
     * Creates a plain object from a ReqStartEqSolving message. Also converts values to other types if specified.
     * @param message ReqStartEqSolving
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartEqSolving, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartEqSolving to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartEqSolving
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResStartEqSolving. */
export interface IResStartEqSolving {

    /** ResStartEqSolving aziErr */
    aziErr?: (number|null);

    /** ResStartEqSolving altErr */
    altErr?: (number|null);

    /** ResStartEqSolving code */
    code?: (number|null);
}

/** Represents a ResStartEqSolving. */
export class ResStartEqSolving implements IResStartEqSolving {

    /**
     * Constructs a new ResStartEqSolving.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResStartEqSolving);

    /** ResStartEqSolving aziErr. */
    public aziErr: number;

    /** ResStartEqSolving altErr. */
    public altErr: number;

    /** ResStartEqSolving code. */
    public code: number;

    /**
     * Creates a new ResStartEqSolving instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResStartEqSolving instance
     */
    public static create(properties?: IResStartEqSolving): ResStartEqSolving;

    /**
     * Encodes the specified ResStartEqSolving message. Does not implicitly {@link ResStartEqSolving.verify|verify} messages.
     * @param message ResStartEqSolving message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResStartEqSolving, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResStartEqSolving message, length delimited. Does not implicitly {@link ResStartEqSolving.verify|verify} messages.
     * @param message ResStartEqSolving message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResStartEqSolving, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResStartEqSolving message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResStartEqSolving
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResStartEqSolving;

    /**
     * Decodes a ResStartEqSolving message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResStartEqSolving
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResStartEqSolving;

    /**
     * Verifies a ResStartEqSolving message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResStartEqSolving message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResStartEqSolving
     */
    public static fromObject(object: { [k: string]: any }): ResStartEqSolving;

    /**
     * Creates a plain object from a ResStartEqSolving message. Also converts values to other types if specified.
     * @param message ResStartEqSolving
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResStartEqSolving, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResStartEqSolving to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResStartEqSolving
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopEqSolving. */
export interface IReqStopEqSolving {
}

/** Represents a ReqStopEqSolving. */
export class ReqStopEqSolving implements IReqStopEqSolving {

    /**
     * Constructs a new ReqStopEqSolving.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopEqSolving);

    /**
     * Creates a new ReqStopEqSolving instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopEqSolving instance
     */
    public static create(properties?: IReqStopEqSolving): ReqStopEqSolving;

    /**
     * Encodes the specified ReqStopEqSolving message. Does not implicitly {@link ReqStopEqSolving.verify|verify} messages.
     * @param message ReqStopEqSolving message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopEqSolving, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopEqSolving message, length delimited. Does not implicitly {@link ReqStopEqSolving.verify|verify} messages.
     * @param message ReqStopEqSolving message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopEqSolving, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopEqSolving message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopEqSolving
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopEqSolving;

    /**
     * Decodes a ReqStopEqSolving message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopEqSolving
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopEqSolving;

    /**
     * Verifies a ReqStopEqSolving message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopEqSolving message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopEqSolving
     */
    public static fromObject(object: { [k: string]: any }): ReqStopEqSolving;

    /**
     * Creates a plain object from a ReqStopEqSolving message. Also converts values to other types if specified.
     * @param message ReqStopEqSolving
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopEqSolving, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopEqSolving to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopEqSolving
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqCaptureWideDarkFrameWithParam. */
export interface IReqCaptureWideDarkFrameWithParam {

    /** ReqCaptureWideDarkFrameWithParam expIndex */
    expIndex?: (number|null);

    /** ReqCaptureWideDarkFrameWithParam gainIndex */
    gainIndex?: (number|null);

    /** ReqCaptureWideDarkFrameWithParam binIndex */
    binIndex?: (number|null);

    /** ReqCaptureWideDarkFrameWithParam capSize */
    capSize?: (number|null);
}

/** Represents a ReqCaptureWideDarkFrameWithParam. */
export class ReqCaptureWideDarkFrameWithParam implements IReqCaptureWideDarkFrameWithParam {

    /**
     * Constructs a new ReqCaptureWideDarkFrameWithParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCaptureWideDarkFrameWithParam);

    /** ReqCaptureWideDarkFrameWithParam expIndex. */
    public expIndex: number;

    /** ReqCaptureWideDarkFrameWithParam gainIndex. */
    public gainIndex: number;

    /** ReqCaptureWideDarkFrameWithParam binIndex. */
    public binIndex: number;

    /** ReqCaptureWideDarkFrameWithParam capSize. */
    public capSize: number;

    /**
     * Creates a new ReqCaptureWideDarkFrameWithParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCaptureWideDarkFrameWithParam instance
     */
    public static create(properties?: IReqCaptureWideDarkFrameWithParam): ReqCaptureWideDarkFrameWithParam;

    /**
     * Encodes the specified ReqCaptureWideDarkFrameWithParam message. Does not implicitly {@link ReqCaptureWideDarkFrameWithParam.verify|verify} messages.
     * @param message ReqCaptureWideDarkFrameWithParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCaptureWideDarkFrameWithParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCaptureWideDarkFrameWithParam message, length delimited. Does not implicitly {@link ReqCaptureWideDarkFrameWithParam.verify|verify} messages.
     * @param message ReqCaptureWideDarkFrameWithParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCaptureWideDarkFrameWithParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCaptureWideDarkFrameWithParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCaptureWideDarkFrameWithParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCaptureWideDarkFrameWithParam;

    /**
     * Decodes a ReqCaptureWideDarkFrameWithParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCaptureWideDarkFrameWithParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCaptureWideDarkFrameWithParam;

    /**
     * Verifies a ReqCaptureWideDarkFrameWithParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCaptureWideDarkFrameWithParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCaptureWideDarkFrameWithParam
     */
    public static fromObject(object: { [k: string]: any }): ReqCaptureWideDarkFrameWithParam;

    /**
     * Creates a plain object from a ReqCaptureWideDarkFrameWithParam message. Also converts values to other types if specified.
     * @param message ReqCaptureWideDarkFrameWithParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCaptureWideDarkFrameWithParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCaptureWideDarkFrameWithParam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCaptureWideDarkFrameWithParam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopCaptureWideDarkFrameWithParam. */
export interface IReqStopCaptureWideDarkFrameWithParam {
}

/** Represents a ReqStopCaptureWideDarkFrameWithParam. */
export class ReqStopCaptureWideDarkFrameWithParam implements IReqStopCaptureWideDarkFrameWithParam {

    /**
     * Constructs a new ReqStopCaptureWideDarkFrameWithParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopCaptureWideDarkFrameWithParam);

    /**
     * Creates a new ReqStopCaptureWideDarkFrameWithParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopCaptureWideDarkFrameWithParam instance
     */
    public static create(properties?: IReqStopCaptureWideDarkFrameWithParam): ReqStopCaptureWideDarkFrameWithParam;

    /**
     * Encodes the specified ReqStopCaptureWideDarkFrameWithParam message. Does not implicitly {@link ReqStopCaptureWideDarkFrameWithParam.verify|verify} messages.
     * @param message ReqStopCaptureWideDarkFrameWithParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopCaptureWideDarkFrameWithParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopCaptureWideDarkFrameWithParam message, length delimited. Does not implicitly {@link ReqStopCaptureWideDarkFrameWithParam.verify|verify} messages.
     * @param message ReqStopCaptureWideDarkFrameWithParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopCaptureWideDarkFrameWithParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopCaptureWideDarkFrameWithParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopCaptureWideDarkFrameWithParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopCaptureWideDarkFrameWithParam;

    /**
     * Decodes a ReqStopCaptureWideDarkFrameWithParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopCaptureWideDarkFrameWithParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopCaptureWideDarkFrameWithParam;

    /**
     * Verifies a ReqStopCaptureWideDarkFrameWithParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopCaptureWideDarkFrameWithParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopCaptureWideDarkFrameWithParam
     */
    public static fromObject(object: { [k: string]: any }): ReqStopCaptureWideDarkFrameWithParam;

    /**
     * Creates a plain object from a ReqStopCaptureWideDarkFrameWithParam message. Also converts values to other types if specified.
     * @param message ReqStopCaptureWideDarkFrameWithParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopCaptureWideDarkFrameWithParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopCaptureWideDarkFrameWithParam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopCaptureWideDarkFrameWithParam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqGetWideDarkFrameList. */
export interface IReqGetWideDarkFrameList {
}

/** Represents a ReqGetWideDarkFrameList. */
export class ReqGetWideDarkFrameList implements IReqGetWideDarkFrameList {

    /**
     * Constructs a new ReqGetWideDarkFrameList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetWideDarkFrameList);

    /**
     * Creates a new ReqGetWideDarkFrameList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetWideDarkFrameList instance
     */
    public static create(properties?: IReqGetWideDarkFrameList): ReqGetWideDarkFrameList;

    /**
     * Encodes the specified ReqGetWideDarkFrameList message. Does not implicitly {@link ReqGetWideDarkFrameList.verify|verify} messages.
     * @param message ReqGetWideDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetWideDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetWideDarkFrameList message, length delimited. Does not implicitly {@link ReqGetWideDarkFrameList.verify|verify} messages.
     * @param message ReqGetWideDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetWideDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetWideDarkFrameList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetWideDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetWideDarkFrameList;

    /**
     * Decodes a ReqGetWideDarkFrameList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetWideDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetWideDarkFrameList;

    /**
     * Verifies a ReqGetWideDarkFrameList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetWideDarkFrameList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetWideDarkFrameList
     */
    public static fromObject(object: { [k: string]: any }): ReqGetWideDarkFrameList;

    /**
     * Creates a plain object from a ReqGetWideDarkFrameList message. Also converts values to other types if specified.
     * @param message ReqGetWideDarkFrameList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetWideDarkFrameList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetWideDarkFrameList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetWideDarkFrameList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResGetWideDarkFrameInfo. */
export interface IResGetWideDarkFrameInfo {

    /** ResGetWideDarkFrameInfo expIndex */
    expIndex?: (number|null);

    /** ResGetWideDarkFrameInfo gainIndex */
    gainIndex?: (number|null);

    /** ResGetWideDarkFrameInfo binIndex */
    binIndex?: (number|null);

    /** ResGetWideDarkFrameInfo expName */
    expName?: (string|null);

    /** ResGetWideDarkFrameInfo gainName */
    gainName?: (string|null);

    /** ResGetWideDarkFrameInfo binName */
    binName?: (string|null);

    /** ResGetWideDarkFrameInfo temperature */
    temperature?: (number|null);
}

/** Represents a ResGetWideDarkFrameInfo. */
export class ResGetWideDarkFrameInfo implements IResGetWideDarkFrameInfo {

    /**
     * Constructs a new ResGetWideDarkFrameInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetWideDarkFrameInfo);

    /** ResGetWideDarkFrameInfo expIndex. */
    public expIndex: number;

    /** ResGetWideDarkFrameInfo gainIndex. */
    public gainIndex: number;

    /** ResGetWideDarkFrameInfo binIndex. */
    public binIndex: number;

    /** ResGetWideDarkFrameInfo expName. */
    public expName: string;

    /** ResGetWideDarkFrameInfo gainName. */
    public gainName: string;

    /** ResGetWideDarkFrameInfo binName. */
    public binName: string;

    /** ResGetWideDarkFrameInfo temperature. */
    public temperature: number;

    /**
     * Creates a new ResGetWideDarkFrameInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetWideDarkFrameInfo instance
     */
    public static create(properties?: IResGetWideDarkFrameInfo): ResGetWideDarkFrameInfo;

    /**
     * Encodes the specified ResGetWideDarkFrameInfo message. Does not implicitly {@link ResGetWideDarkFrameInfo.verify|verify} messages.
     * @param message ResGetWideDarkFrameInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetWideDarkFrameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetWideDarkFrameInfo message, length delimited. Does not implicitly {@link ResGetWideDarkFrameInfo.verify|verify} messages.
     * @param message ResGetWideDarkFrameInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetWideDarkFrameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetWideDarkFrameInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetWideDarkFrameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetWideDarkFrameInfo;

    /**
     * Decodes a ResGetWideDarkFrameInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetWideDarkFrameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetWideDarkFrameInfo;

    /**
     * Verifies a ResGetWideDarkFrameInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetWideDarkFrameInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetWideDarkFrameInfo
     */
    public static fromObject(object: { [k: string]: any }): ResGetWideDarkFrameInfo;

    /**
     * Creates a plain object from a ResGetWideDarkFrameInfo message. Also converts values to other types if specified.
     * @param message ResGetWideDarkFrameInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetWideDarkFrameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetWideDarkFrameInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetWideDarkFrameInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResGetWideDarkFrameInfoList. */
export interface IResGetWideDarkFrameInfoList {

    /** ResGetWideDarkFrameInfoList code */
    code?: (number|null);

    /** ResGetWideDarkFrameInfoList results */
    results?: (IResGetDarkFrameInfo[]|null);
}

/** Represents a ResGetWideDarkFrameInfoList. */
export class ResGetWideDarkFrameInfoList implements IResGetWideDarkFrameInfoList {

    /**
     * Constructs a new ResGetWideDarkFrameInfoList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetWideDarkFrameInfoList);

    /** ResGetWideDarkFrameInfoList code. */
    public code: number;

    /** ResGetWideDarkFrameInfoList results. */
    public results: IResGetDarkFrameInfo[];

    /**
     * Creates a new ResGetWideDarkFrameInfoList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetWideDarkFrameInfoList instance
     */
    public static create(properties?: IResGetWideDarkFrameInfoList): ResGetWideDarkFrameInfoList;

    /**
     * Encodes the specified ResGetWideDarkFrameInfoList message. Does not implicitly {@link ResGetWideDarkFrameInfoList.verify|verify} messages.
     * @param message ResGetWideDarkFrameInfoList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetWideDarkFrameInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetWideDarkFrameInfoList message, length delimited. Does not implicitly {@link ResGetWideDarkFrameInfoList.verify|verify} messages.
     * @param message ResGetWideDarkFrameInfoList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetWideDarkFrameInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetWideDarkFrameInfoList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetWideDarkFrameInfoList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetWideDarkFrameInfoList;

    /**
     * Decodes a ResGetWideDarkFrameInfoList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetWideDarkFrameInfoList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetWideDarkFrameInfoList;

    /**
     * Verifies a ResGetWideDarkFrameInfoList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetWideDarkFrameInfoList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetWideDarkFrameInfoList
     */
    public static fromObject(object: { [k: string]: any }): ResGetWideDarkFrameInfoList;

    /**
     * Creates a plain object from a ResGetWideDarkFrameInfoList message. Also converts values to other types if specified.
     * @param message ResGetWideDarkFrameInfoList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetWideDarkFrameInfoList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetWideDarkFrameInfoList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetWideDarkFrameInfoList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqDelWideDarkFrame. */
export interface IReqDelWideDarkFrame {

    /** ReqDelWideDarkFrame expIndex */
    expIndex?: (number|null);

    /** ReqDelWideDarkFrame gainIndex */
    gainIndex?: (number|null);

    /** ReqDelWideDarkFrame binIndex */
    binIndex?: (number|null);
}

/** Represents a ReqDelWideDarkFrame. */
export class ReqDelWideDarkFrame implements IReqDelWideDarkFrame {

    /**
     * Constructs a new ReqDelWideDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDelWideDarkFrame);

    /** ReqDelWideDarkFrame expIndex. */
    public expIndex: number;

    /** ReqDelWideDarkFrame gainIndex. */
    public gainIndex: number;

    /** ReqDelWideDarkFrame binIndex. */
    public binIndex: number;

    /**
     * Creates a new ReqDelWideDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDelWideDarkFrame instance
     */
    public static create(properties?: IReqDelWideDarkFrame): ReqDelWideDarkFrame;

    /**
     * Encodes the specified ReqDelWideDarkFrame message. Does not implicitly {@link ReqDelWideDarkFrame.verify|verify} messages.
     * @param message ReqDelWideDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDelWideDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDelWideDarkFrame message, length delimited. Does not implicitly {@link ReqDelWideDarkFrame.verify|verify} messages.
     * @param message ReqDelWideDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDelWideDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDelWideDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDelWideDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDelWideDarkFrame;

    /**
     * Decodes a ReqDelWideDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDelWideDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDelWideDarkFrame;

    /**
     * Verifies a ReqDelWideDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDelWideDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDelWideDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ReqDelWideDarkFrame;

    /**
     * Creates a plain object from a ReqDelWideDarkFrame message. Also converts values to other types if specified.
     * @param message ReqDelWideDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDelWideDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDelWideDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDelWideDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqDelWideDarkFrameList. */
export interface IReqDelWideDarkFrameList {

    /** ReqDelWideDarkFrameList darkList */
    darkList?: (IReqDelDarkFrame[]|null);
}

/** Represents a ReqDelWideDarkFrameList. */
export class ReqDelWideDarkFrameList implements IReqDelWideDarkFrameList {

    /**
     * Constructs a new ReqDelWideDarkFrameList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDelWideDarkFrameList);

    /** ReqDelWideDarkFrameList darkList. */
    public darkList: IReqDelDarkFrame[];

    /**
     * Creates a new ReqDelWideDarkFrameList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDelWideDarkFrameList instance
     */
    public static create(properties?: IReqDelWideDarkFrameList): ReqDelWideDarkFrameList;

    /**
     * Encodes the specified ReqDelWideDarkFrameList message. Does not implicitly {@link ReqDelWideDarkFrameList.verify|verify} messages.
     * @param message ReqDelWideDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDelWideDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDelWideDarkFrameList message, length delimited. Does not implicitly {@link ReqDelWideDarkFrameList.verify|verify} messages.
     * @param message ReqDelWideDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDelWideDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDelWideDarkFrameList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDelWideDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDelWideDarkFrameList;

    /**
     * Decodes a ReqDelWideDarkFrameList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDelWideDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDelWideDarkFrameList;

    /**
     * Verifies a ReqDelWideDarkFrameList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDelWideDarkFrameList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDelWideDarkFrameList
     */
    public static fromObject(object: { [k: string]: any }): ReqDelWideDarkFrameList;

    /**
     * Creates a plain object from a ReqDelWideDarkFrameList message. Also converts values to other types if specified.
     * @param message ReqDelWideDarkFrameList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDelWideDarkFrameList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDelWideDarkFrameList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDelWideDarkFrameList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResDelWideDarkFrameList. */
export interface IResDelWideDarkFrameList {

    /** ResDelWideDarkFrameList code */
    code?: (number|null);
}

/** Represents a ResDelWideDarkFrameList. */
export class ResDelWideDarkFrameList implements IResDelWideDarkFrameList {

    /**
     * Constructs a new ResDelWideDarkFrameList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResDelWideDarkFrameList);

    /** ResDelWideDarkFrameList code. */
    public code: number;

    /**
     * Creates a new ResDelWideDarkFrameList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResDelWideDarkFrameList instance
     */
    public static create(properties?: IResDelWideDarkFrameList): ResDelWideDarkFrameList;

    /**
     * Encodes the specified ResDelWideDarkFrameList message. Does not implicitly {@link ResDelWideDarkFrameList.verify|verify} messages.
     * @param message ResDelWideDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResDelWideDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResDelWideDarkFrameList message, length delimited. Does not implicitly {@link ResDelWideDarkFrameList.verify|verify} messages.
     * @param message ResDelWideDarkFrameList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResDelWideDarkFrameList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResDelWideDarkFrameList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResDelWideDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResDelWideDarkFrameList;

    /**
     * Decodes a ResDelWideDarkFrameList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResDelWideDarkFrameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResDelWideDarkFrameList;

    /**
     * Verifies a ResDelWideDarkFrameList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResDelWideDarkFrameList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResDelWideDarkFrameList
     */
    public static fromObject(object: { [k: string]: any }): ResDelWideDarkFrameList;

    /**
     * Creates a plain object from a ResDelWideDarkFrameList message. Also converts values to other types if specified.
     * @param message ResDelWideDarkFrameList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResDelWideDarkFrameList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResDelWideDarkFrameList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResDelWideDarkFrameList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** WsMajorVersion enum. */
export enum WsMajorVersion {
    WS_MAJOR_VERSION_UNKNOWN = 0,
    WS_MAJOR_VERSION_NUMBER = 1
}

/** WsMinorVersion enum. */
export enum WsMinorVersion {
    WS_MINOR_VERSION_UNKNOWN = 0,
    WS_MINOR_VERSION_NUMBER = 9
}

/** Represents a WsPacket. */
export class WsPacket implements IWsPacket {

    /**
     * Constructs a new WsPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWsPacket);

    /** WsPacket majorVersion. */
    public majorVersion: number;

    /** WsPacket minorVersion. */
    public minorVersion: number;

    /** WsPacket deviceId. */
    public deviceId: number;

    /** WsPacket moduleId. */
    public moduleId: number;

    /** WsPacket cmd. */
    public cmd: number;

    /** WsPacket type. */
    public type: number;

    /** WsPacket data. */
    public data: Uint8Array;

    /** WsPacket clientId. */
    public clientId: string;

    /**
     * Creates a new WsPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WsPacket instance
     */
    public static create(properties?: IWsPacket): WsPacket;

    /**
     * Encodes the specified WsPacket message. Does not implicitly {@link WsPacket.verify|verify} messages.
     * @param message WsPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWsPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WsPacket message, length delimited. Does not implicitly {@link WsPacket.verify|verify} messages.
     * @param message WsPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWsPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WsPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WsPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WsPacket;

    /**
     * Decodes a WsPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WsPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WsPacket;

    /**
     * Verifies a WsPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WsPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WsPacket
     */
    public static fromObject(object: { [k: string]: any }): WsPacket;

    /**
     * Creates a plain object from a WsPacket message. Also converts values to other types if specified.
     * @param message WsPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WsPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WsPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for WsPacket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ComResponse. */
export class ComResponse implements IComResponse {

    /**
     * Constructs a new ComResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComResponse);

    /** ComResponse code. */
    public code: number;

    /**
     * Creates a new ComResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComResponse instance
     */
    public static create(properties?: IComResponse): ComResponse;

    /**
     * Encodes the specified ComResponse message. Does not implicitly {@link ComResponse.verify|verify} messages.
     * @param message ComResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ComResponse message, length delimited. Does not implicitly {@link ComResponse.verify|verify} messages.
     * @param message ComResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ComResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ComResponse;

    /**
     * Decodes a ComResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ComResponse;

    /**
     * Verifies a ComResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ComResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComResponse
     */
    public static fromObject(object: { [k: string]: any }): ComResponse;

    /**
     * Creates a plain object from a ComResponse message. Also converts values to other types if specified.
     * @param message ComResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ComResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ComResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ComResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ComResWithInt. */
export class ComResWithInt implements IComResWithInt {

    /**
     * Constructs a new ComResWithInt.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComResWithInt);

    /** ComResWithInt value. */
    public value: number;

    /** ComResWithInt code. */
    public code: number;

    /**
     * Creates a new ComResWithInt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComResWithInt instance
     */
    public static create(properties?: IComResWithInt): ComResWithInt;

    /**
     * Encodes the specified ComResWithInt message. Does not implicitly {@link ComResWithInt.verify|verify} messages.
     * @param message ComResWithInt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComResWithInt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ComResWithInt message, length delimited. Does not implicitly {@link ComResWithInt.verify|verify} messages.
     * @param message ComResWithInt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComResWithInt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ComResWithInt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComResWithInt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ComResWithInt;

    /**
     * Decodes a ComResWithInt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComResWithInt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ComResWithInt;

    /**
     * Verifies a ComResWithInt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ComResWithInt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComResWithInt
     */
    public static fromObject(object: { [k: string]: any }): ComResWithInt;

    /**
     * Creates a plain object from a ComResWithInt message. Also converts values to other types if specified.
     * @param message ComResWithInt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ComResWithInt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ComResWithInt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ComResWithInt
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ComResWithDouble. */
export class ComResWithDouble implements IComResWithDouble {

    /**
     * Constructs a new ComResWithDouble.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComResWithDouble);

    /** ComResWithDouble value. */
    public value: number;

    /** ComResWithDouble code. */
    public code: number;

    /**
     * Creates a new ComResWithDouble instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComResWithDouble instance
     */
    public static create(properties?: IComResWithDouble): ComResWithDouble;

    /**
     * Encodes the specified ComResWithDouble message. Does not implicitly {@link ComResWithDouble.verify|verify} messages.
     * @param message ComResWithDouble message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComResWithDouble, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ComResWithDouble message, length delimited. Does not implicitly {@link ComResWithDouble.verify|verify} messages.
     * @param message ComResWithDouble message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComResWithDouble, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ComResWithDouble message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComResWithDouble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ComResWithDouble;

    /**
     * Decodes a ComResWithDouble message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComResWithDouble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ComResWithDouble;

    /**
     * Verifies a ComResWithDouble message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ComResWithDouble message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComResWithDouble
     */
    public static fromObject(object: { [k: string]: any }): ComResWithDouble;

    /**
     * Creates a plain object from a ComResWithDouble message. Also converts values to other types if specified.
     * @param message ComResWithDouble
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ComResWithDouble, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ComResWithDouble to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ComResWithDouble
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ComResWithString. */
export class ComResWithString implements IComResWithString {

    /**
     * Constructs a new ComResWithString.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComResWithString);

    /** ComResWithString str. */
    public str: string;

    /** ComResWithString code. */
    public code: number;

    /**
     * Creates a new ComResWithString instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComResWithString instance
     */
    public static create(properties?: IComResWithString): ComResWithString;

    /**
     * Encodes the specified ComResWithString message. Does not implicitly {@link ComResWithString.verify|verify} messages.
     * @param message ComResWithString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComResWithString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ComResWithString message, length delimited. Does not implicitly {@link ComResWithString.verify|verify} messages.
     * @param message ComResWithString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComResWithString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ComResWithString message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComResWithString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ComResWithString;

    /**
     * Decodes a ComResWithString message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComResWithString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ComResWithString;

    /**
     * Verifies a ComResWithString message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ComResWithString message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComResWithString
     */
    public static fromObject(object: { [k: string]: any }): ComResWithString;

    /**
     * Creates a plain object from a ComResWithString message. Also converts values to other types if specified.
     * @param message ComResWithString
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ComResWithString, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ComResWithString to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ComResWithString
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CommonParam. */
export class CommonParam implements ICommonParam {

    /**
     * Constructs a new CommonParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommonParam);

    /** CommonParam hasAuto. */
    public hasAuto: boolean;

    /** CommonParam autoMode. */
    public autoMode: number;

    /** CommonParam id. */
    public id: number;

    /** CommonParam modeIndex. */
    public modeIndex: number;

    /** CommonParam index. */
    public index: number;

    /** CommonParam continueValue. */
    public continueValue: number;

    /**
     * Creates a new CommonParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommonParam instance
     */
    public static create(properties?: ICommonParam): CommonParam;

    /**
     * Encodes the specified CommonParam message. Does not implicitly {@link CommonParam.verify|verify} messages.
     * @param message CommonParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommonParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommonParam message, length delimited. Does not implicitly {@link CommonParam.verify|verify} messages.
     * @param message CommonParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommonParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommonParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommonParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonParam;

    /**
     * Decodes a CommonParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommonParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonParam;

    /**
     * Verifies a CommonParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommonParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommonParam
     */
    public static fromObject(object: { [k: string]: any }): CommonParam;

    /**
     * Creates a plain object from a CommonParam message. Also converts values to other types if specified.
     * @param message CommonParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommonParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommonParam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CommonParam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** DwarfBleErrorCode enum. */
export enum DwarfBleErrorCode {
    BLE_OK = 0,
    BLE_PASSWORD_ERROR = -1,
    BLE_MESSAGE_MALLOC_ERROR = -2,
    BLE_MESSAGE_PARSE_ERROR = -3,
    BLE_MESSAGE_CRC_ERROR = -4,
    BLE_WIFI_CONFIGING = -5,
    BLE_WIFI_CONFIGED = -6,
    BLE_GET_WIFI_LIST_ERROR = -7,
    BLE_WIFI_STA_PASSWORD_EMPTY = -8,
    BLE_WIFI_STA_PASSWORD_ERROR = -9,
    BLE_WIFI_SET_SSID_PSD_ERROR = -10,
    BLE_WIFI_RESET_WAITING = -11,
    BLE_WIFI_RESETED = -12,
    BLE_GET_SYSTEM_INFO_ERROR = -13,
    BLE_RECEIVE_FRAME_HEAD_ERROR = -14,
    BLE_RECEIVE_FRAME_TAIL_ERROR = -15,
    BLE_CHECK_FILE_NOT_EXIST = -16,
    BLE_CHECK_FILE_MD5_ERROR = -17,
    BLE_WIFI_RESET_FAILED = -18
}

/** Represents a ReqGetconfig. */
export class ReqGetconfig implements IReqGetconfig {

    /**
     * Constructs a new ReqGetconfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetconfig);

    /** ReqGetconfig cmd. */
    public cmd: number;

    /** ReqGetconfig blePsd. */
    public blePsd: string;

    /**
     * Creates a new ReqGetconfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetconfig instance
     */
    public static create(properties?: IReqGetconfig): ReqGetconfig;

    /**
     * Encodes the specified ReqGetconfig message. Does not implicitly {@link ReqGetconfig.verify|verify} messages.
     * @param message ReqGetconfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetconfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetconfig message, length delimited. Does not implicitly {@link ReqGetconfig.verify|verify} messages.
     * @param message ReqGetconfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetconfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetconfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetconfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetconfig;

    /**
     * Decodes a ReqGetconfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetconfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetconfig;

    /**
     * Verifies a ReqGetconfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetconfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetconfig
     */
    public static fromObject(object: { [k: string]: any }): ReqGetconfig;

    /**
     * Creates a plain object from a ReqGetconfig message. Also converts values to other types if specified.
     * @param message ReqGetconfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetconfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetconfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetconfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqAp. */
export class ReqAp implements IReqAp {

    /**
     * Constructs a new ReqAp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqAp);

    /** ReqAp cmd. */
    public cmd: number;

    /** ReqAp wifiType. */
    public wifiType: number;

    /** ReqAp autoStart. */
    public autoStart: number;

    /** ReqAp countryList. */
    public countryList: number;

    /** ReqAp country. */
    public country: string;

    /** ReqAp blePsd. */
    public blePsd: string;

    /**
     * Creates a new ReqAp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqAp instance
     */
    public static create(properties?: IReqAp): ReqAp;

    /**
     * Encodes the specified ReqAp message. Does not implicitly {@link ReqAp.verify|verify} messages.
     * @param message ReqAp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqAp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqAp message, length delimited. Does not implicitly {@link ReqAp.verify|verify} messages.
     * @param message ReqAp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqAp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqAp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqAp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqAp;

    /**
     * Decodes a ReqAp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqAp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqAp;

    /**
     * Verifies a ReqAp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqAp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqAp
     */
    public static fromObject(object: { [k: string]: any }): ReqAp;

    /**
     * Creates a plain object from a ReqAp message. Also converts values to other types if specified.
     * @param message ReqAp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqAp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqAp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqAp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSta. */
export class ReqSta implements IReqSta {

    /**
     * Constructs a new ReqSta.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSta);

    /** ReqSta cmd. */
    public cmd: number;

    /** ReqSta autoStart. */
    public autoStart: number;

    /** ReqSta blePsd. */
    public blePsd: string;

    /** ReqSta ssid. */
    public ssid: string;

    /** ReqSta psd. */
    public psd: string;

    /**
     * Creates a new ReqSta instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSta instance
     */
    public static create(properties?: IReqSta): ReqSta;

    /**
     * Encodes the specified ReqSta message. Does not implicitly {@link ReqSta.verify|verify} messages.
     * @param message ReqSta message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSta, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSta message, length delimited. Does not implicitly {@link ReqSta.verify|verify} messages.
     * @param message ReqSta message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSta, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSta message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSta;

    /**
     * Decodes a ReqSta message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSta;

    /**
     * Verifies a ReqSta message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSta message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSta
     */
    public static fromObject(object: { [k: string]: any }): ReqSta;

    /**
     * Creates a plain object from a ReqSta message. Also converts values to other types if specified.
     * @param message ReqSta
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSta, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSta to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSta
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetblewifi. */
export class ReqSetblewifi implements IReqSetblewifi {

    /**
     * Constructs a new ReqSetblewifi.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetblewifi);

    /** ReqSetblewifi cmd. */
    public cmd: number;

    /** ReqSetblewifi mode. */
    public mode: number;

    /** ReqSetblewifi blePsd. */
    public blePsd: string;

    /** ReqSetblewifi value. */
    public value: string;

    /**
     * Creates a new ReqSetblewifi instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetblewifi instance
     */
    public static create(properties?: IReqSetblewifi): ReqSetblewifi;

    /**
     * Encodes the specified ReqSetblewifi message. Does not implicitly {@link ReqSetblewifi.verify|verify} messages.
     * @param message ReqSetblewifi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetblewifi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetblewifi message, length delimited. Does not implicitly {@link ReqSetblewifi.verify|verify} messages.
     * @param message ReqSetblewifi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetblewifi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetblewifi message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetblewifi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetblewifi;

    /**
     * Decodes a ReqSetblewifi message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetblewifi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetblewifi;

    /**
     * Verifies a ReqSetblewifi message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetblewifi message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetblewifi
     */
    public static fromObject(object: { [k: string]: any }): ReqSetblewifi;

    /**
     * Creates a plain object from a ReqSetblewifi message. Also converts values to other types if specified.
     * @param message ReqSetblewifi
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetblewifi, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetblewifi to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetblewifi
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqReset. */
export class ReqReset implements IReqReset {

    /**
     * Constructs a new ReqReset.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqReset);

    /** ReqReset cmd. */
    public cmd: number;

    /**
     * Creates a new ReqReset instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqReset instance
     */
    public static create(properties?: IReqReset): ReqReset;

    /**
     * Encodes the specified ReqReset message. Does not implicitly {@link ReqReset.verify|verify} messages.
     * @param message ReqReset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqReset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqReset message, length delimited. Does not implicitly {@link ReqReset.verify|verify} messages.
     * @param message ReqReset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqReset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqReset message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqReset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqReset;

    /**
     * Decodes a ReqReset message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqReset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqReset;

    /**
     * Verifies a ReqReset message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqReset message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqReset
     */
    public static fromObject(object: { [k: string]: any }): ReqReset;

    /**
     * Creates a plain object from a ReqReset message. Also converts values to other types if specified.
     * @param message ReqReset
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqReset, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqReset to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqReset
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetwifilist. */
export class ReqGetwifilist implements IReqGetwifilist {

    /**
     * Constructs a new ReqGetwifilist.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetwifilist);

    /** ReqGetwifilist cmd. */
    public cmd: number;

    /**
     * Creates a new ReqGetwifilist instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetwifilist instance
     */
    public static create(properties?: IReqGetwifilist): ReqGetwifilist;

    /**
     * Encodes the specified ReqGetwifilist message. Does not implicitly {@link ReqGetwifilist.verify|verify} messages.
     * @param message ReqGetwifilist message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetwifilist, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetwifilist message, length delimited. Does not implicitly {@link ReqGetwifilist.verify|verify} messages.
     * @param message ReqGetwifilist message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetwifilist, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetwifilist message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetwifilist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetwifilist;

    /**
     * Decodes a ReqGetwifilist message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetwifilist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetwifilist;

    /**
     * Verifies a ReqGetwifilist message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetwifilist message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetwifilist
     */
    public static fromObject(object: { [k: string]: any }): ReqGetwifilist;

    /**
     * Creates a plain object from a ReqGetwifilist message. Also converts values to other types if specified.
     * @param message ReqGetwifilist
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetwifilist, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetwifilist to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetwifilist
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetsysteminfo. */
export class ReqGetsysteminfo implements IReqGetsysteminfo {

    /**
     * Constructs a new ReqGetsysteminfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetsysteminfo);

    /** ReqGetsysteminfo cmd. */
    public cmd: number;

    /**
     * Creates a new ReqGetsysteminfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetsysteminfo instance
     */
    public static create(properties?: IReqGetsysteminfo): ReqGetsysteminfo;

    /**
     * Encodes the specified ReqGetsysteminfo message. Does not implicitly {@link ReqGetsysteminfo.verify|verify} messages.
     * @param message ReqGetsysteminfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetsysteminfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetsysteminfo message, length delimited. Does not implicitly {@link ReqGetsysteminfo.verify|verify} messages.
     * @param message ReqGetsysteminfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetsysteminfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetsysteminfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetsysteminfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetsysteminfo;

    /**
     * Decodes a ReqGetsysteminfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetsysteminfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetsysteminfo;

    /**
     * Verifies a ReqGetsysteminfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetsysteminfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetsysteminfo
     */
    public static fromObject(object: { [k: string]: any }): ReqGetsysteminfo;

    /**
     * Creates a plain object from a ReqGetsysteminfo message. Also converts values to other types if specified.
     * @param message ReqGetsysteminfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetsysteminfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetsysteminfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetsysteminfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqCheckFile. */
export class ReqCheckFile implements IReqCheckFile {

    /**
     * Constructs a new ReqCheckFile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCheckFile);

    /** ReqCheckFile cmd. */
    public cmd: number;

    /** ReqCheckFile filePath. */
    public filePath: string;

    /** ReqCheckFile md5. */
    public md5: string;

    /**
     * Creates a new ReqCheckFile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCheckFile instance
     */
    public static create(properties?: IReqCheckFile): ReqCheckFile;

    /**
     * Encodes the specified ReqCheckFile message. Does not implicitly {@link ReqCheckFile.verify|verify} messages.
     * @param message ReqCheckFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCheckFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCheckFile message, length delimited. Does not implicitly {@link ReqCheckFile.verify|verify} messages.
     * @param message ReqCheckFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCheckFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCheckFile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCheckFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCheckFile;

    /**
     * Decodes a ReqCheckFile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCheckFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCheckFile;

    /**
     * Verifies a ReqCheckFile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCheckFile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCheckFile
     */
    public static fromObject(object: { [k: string]: any }): ReqCheckFile;

    /**
     * Creates a plain object from a ReqCheckFile message. Also converts values to other types if specified.
     * @param message ReqCheckFile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCheckFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCheckFile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCheckFile
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetconfig. */
export class ResGetconfig implements IResGetconfig {

    /**
     * Constructs a new ResGetconfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetconfig);

    /** ResGetconfig cmd. */
    public cmd: number;

    /** ResGetconfig code. */
    public code: number;

    /** ResGetconfig state. */
    public state: number;

    /** ResGetconfig wifiMode. */
    public wifiMode: number;

    /** ResGetconfig apMode. */
    public apMode: number;

    /** ResGetconfig autoStart. */
    public autoStart: number;

    /** ResGetconfig apCountryList. */
    public apCountryList: number;

    /** ResGetconfig ssid. */
    public ssid: string;

    /** ResGetconfig psd. */
    public psd: string;

    /** ResGetconfig ip. */
    public ip: string;

    /** ResGetconfig apCountry. */
    public apCountry: string;

    /**
     * Creates a new ResGetconfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetconfig instance
     */
    public static create(properties?: IResGetconfig): ResGetconfig;

    /**
     * Encodes the specified ResGetconfig message. Does not implicitly {@link ResGetconfig.verify|verify} messages.
     * @param message ResGetconfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetconfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetconfig message, length delimited. Does not implicitly {@link ResGetconfig.verify|verify} messages.
     * @param message ResGetconfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetconfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetconfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetconfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetconfig;

    /**
     * Decodes a ResGetconfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetconfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetconfig;

    /**
     * Verifies a ResGetconfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetconfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetconfig
     */
    public static fromObject(object: { [k: string]: any }): ResGetconfig;

    /**
     * Creates a plain object from a ResGetconfig message. Also converts values to other types if specified.
     * @param message ResGetconfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetconfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetconfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetconfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResAp. */
export class ResAp implements IResAp {

    /**
     * Constructs a new ResAp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResAp);

    /** ResAp cmd. */
    public cmd: number;

    /** ResAp code. */
    public code: number;

    /** ResAp mode. */
    public mode: number;

    /** ResAp ssid. */
    public ssid: string;

    /** ResAp psd. */
    public psd: string;

    /**
     * Creates a new ResAp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResAp instance
     */
    public static create(properties?: IResAp): ResAp;

    /**
     * Encodes the specified ResAp message. Does not implicitly {@link ResAp.verify|verify} messages.
     * @param message ResAp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResAp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResAp message, length delimited. Does not implicitly {@link ResAp.verify|verify} messages.
     * @param message ResAp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResAp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResAp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResAp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResAp;

    /**
     * Decodes a ResAp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResAp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResAp;

    /**
     * Verifies a ResAp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResAp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResAp
     */
    public static fromObject(object: { [k: string]: any }): ResAp;

    /**
     * Creates a plain object from a ResAp message. Also converts values to other types if specified.
     * @param message ResAp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResAp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResAp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResAp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResSta. */
export class ResSta implements IResSta {

    /**
     * Constructs a new ResSta.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResSta);

    /** ResSta cmd. */
    public cmd: number;

    /** ResSta code. */
    public code: number;

    /** ResSta ssid. */
    public ssid: string;

    /** ResSta psd. */
    public psd: string;

    /** ResSta ip. */
    public ip: string;

    /**
     * Creates a new ResSta instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResSta instance
     */
    public static create(properties?: IResSta): ResSta;

    /**
     * Encodes the specified ResSta message. Does not implicitly {@link ResSta.verify|verify} messages.
     * @param message ResSta message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResSta, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResSta message, length delimited. Does not implicitly {@link ResSta.verify|verify} messages.
     * @param message ResSta message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResSta, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResSta message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResSta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResSta;

    /**
     * Decodes a ResSta message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResSta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResSta;

    /**
     * Verifies a ResSta message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResSta message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResSta
     */
    public static fromObject(object: { [k: string]: any }): ResSta;

    /**
     * Creates a plain object from a ResSta message. Also converts values to other types if specified.
     * @param message ResSta
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResSta, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResSta to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResSta
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResSetblewifi. */
export class ResSetblewifi implements IResSetblewifi {

    /**
     * Constructs a new ResSetblewifi.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResSetblewifi);

    /** ResSetblewifi cmd. */
    public cmd: number;

    /** ResSetblewifi code. */
    public code: number;

    /** ResSetblewifi mode. */
    public mode: number;

    /** ResSetblewifi value. */
    public value: string;

    /**
     * Creates a new ResSetblewifi instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResSetblewifi instance
     */
    public static create(properties?: IResSetblewifi): ResSetblewifi;

    /**
     * Encodes the specified ResSetblewifi message. Does not implicitly {@link ResSetblewifi.verify|verify} messages.
     * @param message ResSetblewifi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResSetblewifi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResSetblewifi message, length delimited. Does not implicitly {@link ResSetblewifi.verify|verify} messages.
     * @param message ResSetblewifi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResSetblewifi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResSetblewifi message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResSetblewifi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResSetblewifi;

    /**
     * Decodes a ResSetblewifi message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResSetblewifi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResSetblewifi;

    /**
     * Verifies a ResSetblewifi message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResSetblewifi message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResSetblewifi
     */
    public static fromObject(object: { [k: string]: any }): ResSetblewifi;

    /**
     * Creates a plain object from a ResSetblewifi message. Also converts values to other types if specified.
     * @param message ResSetblewifi
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResSetblewifi, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResSetblewifi to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResSetblewifi
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResReset. */
export class ResReset implements IResReset {

    /**
     * Constructs a new ResReset.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResReset);

    /** ResReset cmd. */
    public cmd: number;

    /** ResReset code. */
    public code: number;

    /**
     * Creates a new ResReset instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResReset instance
     */
    public static create(properties?: IResReset): ResReset;

    /**
     * Encodes the specified ResReset message. Does not implicitly {@link ResReset.verify|verify} messages.
     * @param message ResReset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResReset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResReset message, length delimited. Does not implicitly {@link ResReset.verify|verify} messages.
     * @param message ResReset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResReset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResReset message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResReset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResReset;

    /**
     * Decodes a ResReset message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResReset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResReset;

    /**
     * Verifies a ResReset message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResReset message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResReset
     */
    public static fromObject(object: { [k: string]: any }): ResReset;

    /**
     * Creates a plain object from a ResReset message. Also converts values to other types if specified.
     * @param message ResReset
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResReset, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResReset to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResReset
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResWifilist. */
export class ResWifilist implements IResWifilist {

    /**
     * Constructs a new ResWifilist.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResWifilist);

    /** ResWifilist cmd. */
    public cmd: number;

    /** ResWifilist code. */
    public code: number;

    /** ResWifilist ssid. */
    public ssid: string[];

    /**
     * Creates a new ResWifilist instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResWifilist instance
     */
    public static create(properties?: IResWifilist): ResWifilist;

    /**
     * Encodes the specified ResWifilist message. Does not implicitly {@link ResWifilist.verify|verify} messages.
     * @param message ResWifilist message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResWifilist, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResWifilist message, length delimited. Does not implicitly {@link ResWifilist.verify|verify} messages.
     * @param message ResWifilist message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResWifilist, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResWifilist message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResWifilist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResWifilist;

    /**
     * Decodes a ResWifilist message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResWifilist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResWifilist;

    /**
     * Verifies a ResWifilist message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResWifilist message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResWifilist
     */
    public static fromObject(object: { [k: string]: any }): ResWifilist;

    /**
     * Creates a plain object from a ResWifilist message. Also converts values to other types if specified.
     * @param message ResWifilist
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResWifilist, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResWifilist to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResWifilist
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetsysteminfo. */
export class ResGetsysteminfo implements IResGetsysteminfo {

    /**
     * Constructs a new ResGetsysteminfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetsysteminfo);

    /** ResGetsysteminfo cmd. */
    public cmd: number;

    /** ResGetsysteminfo code. */
    public code: number;

    /** ResGetsysteminfo protocolVersion. */
    public protocolVersion: number;

    /** ResGetsysteminfo device. */
    public device: string;

    /** ResGetsysteminfo macAddress. */
    public macAddress: string;

    /** ResGetsysteminfo dwarfOtaVersion. */
    public dwarfOtaVersion: string;

    /**
     * Creates a new ResGetsysteminfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetsysteminfo instance
     */
    public static create(properties?: IResGetsysteminfo): ResGetsysteminfo;

    /**
     * Encodes the specified ResGetsysteminfo message. Does not implicitly {@link ResGetsysteminfo.verify|verify} messages.
     * @param message ResGetsysteminfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetsysteminfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetsysteminfo message, length delimited. Does not implicitly {@link ResGetsysteminfo.verify|verify} messages.
     * @param message ResGetsysteminfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetsysteminfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetsysteminfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetsysteminfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetsysteminfo;

    /**
     * Decodes a ResGetsysteminfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetsysteminfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetsysteminfo;

    /**
     * Verifies a ResGetsysteminfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetsysteminfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetsysteminfo
     */
    public static fromObject(object: { [k: string]: any }): ResGetsysteminfo;

    /**
     * Creates a plain object from a ResGetsysteminfo message. Also converts values to other types if specified.
     * @param message ResGetsysteminfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetsysteminfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetsysteminfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetsysteminfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResReceiveDataError. */
export class ResReceiveDataError implements IResReceiveDataError {

    /**
     * Constructs a new ResReceiveDataError.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResReceiveDataError);

    /** ResReceiveDataError cmd. */
    public cmd: number;

    /** ResReceiveDataError code. */
    public code: number;

    /**
     * Creates a new ResReceiveDataError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResReceiveDataError instance
     */
    public static create(properties?: IResReceiveDataError): ResReceiveDataError;

    /**
     * Encodes the specified ResReceiveDataError message. Does not implicitly {@link ResReceiveDataError.verify|verify} messages.
     * @param message ResReceiveDataError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResReceiveDataError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResReceiveDataError message, length delimited. Does not implicitly {@link ResReceiveDataError.verify|verify} messages.
     * @param message ResReceiveDataError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResReceiveDataError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResReceiveDataError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResReceiveDataError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResReceiveDataError;

    /**
     * Decodes a ResReceiveDataError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResReceiveDataError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResReceiveDataError;

    /**
     * Verifies a ResReceiveDataError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResReceiveDataError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResReceiveDataError
     */
    public static fromObject(object: { [k: string]: any }): ResReceiveDataError;

    /**
     * Creates a plain object from a ResReceiveDataError message. Also converts values to other types if specified.
     * @param message ResReceiveDataError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResReceiveDataError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResReceiveDataError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResReceiveDataError
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResCheckFile. */
export class ResCheckFile implements IResCheckFile {

    /**
     * Constructs a new ResCheckFile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResCheckFile);

    /** ResCheckFile cmd. */
    public cmd: number;

    /** ResCheckFile code. */
    public code: number;

    /**
     * Creates a new ResCheckFile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResCheckFile instance
     */
    public static create(properties?: IResCheckFile): ResCheckFile;

    /**
     * Encodes the specified ResCheckFile message. Does not implicitly {@link ResCheckFile.verify|verify} messages.
     * @param message ResCheckFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResCheckFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResCheckFile message, length delimited. Does not implicitly {@link ResCheckFile.verify|verify} messages.
     * @param message ResCheckFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResCheckFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResCheckFile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResCheckFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResCheckFile;

    /**
     * Decodes a ResCheckFile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResCheckFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResCheckFile;

    /**
     * Verifies a ResCheckFile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResCheckFile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResCheckFile
     */
    public static fromObject(object: { [k: string]: any }): ResCheckFile;

    /**
     * Creates a plain object from a ResCheckFile message. Also converts values to other types if specified.
     * @param message ResCheckFile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResCheckFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResCheckFile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResCheckFile
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqOpenCamera. */
export class ReqOpenCamera implements IReqOpenCamera {

    /**
     * Constructs a new ReqOpenCamera.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqOpenCamera);

    /** ReqOpenCamera binning. */
    public binning: boolean;

    /** ReqOpenCamera rtspEncodeType. */
    public rtspEncodeType: number;

    /**
     * Creates a new ReqOpenCamera instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqOpenCamera instance
     */
    public static create(properties?: IReqOpenCamera): ReqOpenCamera;

    /**
     * Encodes the specified ReqOpenCamera message. Does not implicitly {@link ReqOpenCamera.verify|verify} messages.
     * @param message ReqOpenCamera message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqOpenCamera, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqOpenCamera message, length delimited. Does not implicitly {@link ReqOpenCamera.verify|verify} messages.
     * @param message ReqOpenCamera message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqOpenCamera, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqOpenCamera message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqOpenCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqOpenCamera;

    /**
     * Decodes a ReqOpenCamera message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqOpenCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqOpenCamera;

    /**
     * Verifies a ReqOpenCamera message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqOpenCamera message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqOpenCamera
     */
    public static fromObject(object: { [k: string]: any }): ReqOpenCamera;

    /**
     * Creates a plain object from a ReqOpenCamera message. Also converts values to other types if specified.
     * @param message ReqOpenCamera
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqOpenCamera, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqOpenCamera to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqOpenCamera
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqCloseCamera. */
export class ReqCloseCamera implements IReqCloseCamera {

    /**
     * Constructs a new ReqCloseCamera.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCloseCamera);

    /**
     * Creates a new ReqCloseCamera instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCloseCamera instance
     */
    public static create(properties?: IReqCloseCamera): ReqCloseCamera;

    /**
     * Encodes the specified ReqCloseCamera message. Does not implicitly {@link ReqCloseCamera.verify|verify} messages.
     * @param message ReqCloseCamera message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCloseCamera, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCloseCamera message, length delimited. Does not implicitly {@link ReqCloseCamera.verify|verify} messages.
     * @param message ReqCloseCamera message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCloseCamera, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCloseCamera message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCloseCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCloseCamera;

    /**
     * Decodes a ReqCloseCamera message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCloseCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCloseCamera;

    /**
     * Verifies a ReqCloseCamera message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCloseCamera message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCloseCamera
     */
    public static fromObject(object: { [k: string]: any }): ReqCloseCamera;

    /**
     * Creates a plain object from a ReqCloseCamera message. Also converts values to other types if specified.
     * @param message ReqCloseCamera
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCloseCamera, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCloseCamera to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCloseCamera
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqPhoto. */
export class ReqPhoto implements IReqPhoto {

    /**
     * Constructs a new ReqPhoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPhoto);

    /**
     * Creates a new ReqPhoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPhoto instance
     */
    public static create(properties?: IReqPhoto): ReqPhoto;

    /**
     * Encodes the specified ReqPhoto message. Does not implicitly {@link ReqPhoto.verify|verify} messages.
     * @param message ReqPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPhoto message, length delimited. Does not implicitly {@link ReqPhoto.verify|verify} messages.
     * @param message ReqPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPhoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPhoto;

    /**
     * Decodes a ReqPhoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPhoto;

    /**
     * Verifies a ReqPhoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPhoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPhoto
     */
    public static fromObject(object: { [k: string]: any }): ReqPhoto;

    /**
     * Creates a plain object from a ReqPhoto message. Also converts values to other types if specified.
     * @param message ReqPhoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPhoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPhoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqPhoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqBurstPhoto. */
export class ReqBurstPhoto implements IReqBurstPhoto {

    /**
     * Constructs a new ReqBurstPhoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqBurstPhoto);

    /** ReqBurstPhoto count. */
    public count: number;

    /**
     * Creates a new ReqBurstPhoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqBurstPhoto instance
     */
    public static create(properties?: IReqBurstPhoto): ReqBurstPhoto;

    /**
     * Encodes the specified ReqBurstPhoto message. Does not implicitly {@link ReqBurstPhoto.verify|verify} messages.
     * @param message ReqBurstPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqBurstPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqBurstPhoto message, length delimited. Does not implicitly {@link ReqBurstPhoto.verify|verify} messages.
     * @param message ReqBurstPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqBurstPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqBurstPhoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqBurstPhoto;

    /**
     * Decodes a ReqBurstPhoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqBurstPhoto;

    /**
     * Verifies a ReqBurstPhoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqBurstPhoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqBurstPhoto
     */
    public static fromObject(object: { [k: string]: any }): ReqBurstPhoto;

    /**
     * Creates a plain object from a ReqBurstPhoto message. Also converts values to other types if specified.
     * @param message ReqBurstPhoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqBurstPhoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqBurstPhoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqBurstPhoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopBurstPhoto. */
export class ReqStopBurstPhoto implements IReqStopBurstPhoto {

    /**
     * Constructs a new ReqStopBurstPhoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopBurstPhoto);

    /**
     * Creates a new ReqStopBurstPhoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopBurstPhoto instance
     */
    public static create(properties?: IReqStopBurstPhoto): ReqStopBurstPhoto;

    /**
     * Encodes the specified ReqStopBurstPhoto message. Does not implicitly {@link ReqStopBurstPhoto.verify|verify} messages.
     * @param message ReqStopBurstPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopBurstPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopBurstPhoto message, length delimited. Does not implicitly {@link ReqStopBurstPhoto.verify|verify} messages.
     * @param message ReqStopBurstPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopBurstPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopBurstPhoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopBurstPhoto;

    /**
     * Decodes a ReqStopBurstPhoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopBurstPhoto;

    /**
     * Verifies a ReqStopBurstPhoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopBurstPhoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopBurstPhoto
     */
    public static fromObject(object: { [k: string]: any }): ReqStopBurstPhoto;

    /**
     * Creates a plain object from a ReqStopBurstPhoto message. Also converts values to other types if specified.
     * @param message ReqStopBurstPhoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopBurstPhoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopBurstPhoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopBurstPhoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStartRecord. */
export class ReqStartRecord implements IReqStartRecord {

    /**
     * Constructs a new ReqStartRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartRecord);

    /** ReqStartRecord encodeType. */
    public encodeType: number;

    /**
     * Creates a new ReqStartRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartRecord instance
     */
    public static create(properties?: IReqStartRecord): ReqStartRecord;

    /**
     * Encodes the specified ReqStartRecord message. Does not implicitly {@link ReqStartRecord.verify|verify} messages.
     * @param message ReqStartRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartRecord message, length delimited. Does not implicitly {@link ReqStartRecord.verify|verify} messages.
     * @param message ReqStartRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartRecord;

    /**
     * Decodes a ReqStartRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartRecord;

    /**
     * Verifies a ReqStartRecord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartRecord
     */
    public static fromObject(object: { [k: string]: any }): ReqStartRecord;

    /**
     * Creates a plain object from a ReqStartRecord message. Also converts values to other types if specified.
     * @param message ReqStartRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartRecord
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopRecord. */
export class ReqStopRecord implements IReqStopRecord {

    /**
     * Constructs a new ReqStopRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopRecord);

    /**
     * Creates a new ReqStopRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopRecord instance
     */
    public static create(properties?: IReqStopRecord): ReqStopRecord;

    /**
     * Encodes the specified ReqStopRecord message. Does not implicitly {@link ReqStopRecord.verify|verify} messages.
     * @param message ReqStopRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopRecord message, length delimited. Does not implicitly {@link ReqStopRecord.verify|verify} messages.
     * @param message ReqStopRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopRecord;

    /**
     * Decodes a ReqStopRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopRecord;

    /**
     * Verifies a ReqStopRecord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopRecord
     */
    public static fromObject(object: { [k: string]: any }): ReqStopRecord;

    /**
     * Creates a plain object from a ReqStopRecord message. Also converts values to other types if specified.
     * @param message ReqStopRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopRecord
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetExpMode. */
export class ReqSetExpMode implements IReqSetExpMode {

    /**
     * Constructs a new ReqSetExpMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetExpMode);

    /** ReqSetExpMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetExpMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetExpMode instance
     */
    public static create(properties?: IReqSetExpMode): ReqSetExpMode;

    /**
     * Encodes the specified ReqSetExpMode message. Does not implicitly {@link ReqSetExpMode.verify|verify} messages.
     * @param message ReqSetExpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetExpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetExpMode message, length delimited. Does not implicitly {@link ReqSetExpMode.verify|verify} messages.
     * @param message ReqSetExpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetExpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetExpMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetExpMode;

    /**
     * Decodes a ReqSetExpMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetExpMode;

    /**
     * Verifies a ReqSetExpMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetExpMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetExpMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetExpMode;

    /**
     * Creates a plain object from a ReqSetExpMode message. Also converts values to other types if specified.
     * @param message ReqSetExpMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetExpMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetExpMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetExpMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetExpMode. */
export class ReqGetExpMode implements IReqGetExpMode {

    /**
     * Constructs a new ReqGetExpMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetExpMode);

    /**
     * Creates a new ReqGetExpMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetExpMode instance
     */
    public static create(properties?: IReqGetExpMode): ReqGetExpMode;

    /**
     * Encodes the specified ReqGetExpMode message. Does not implicitly {@link ReqGetExpMode.verify|verify} messages.
     * @param message ReqGetExpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetExpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetExpMode message, length delimited. Does not implicitly {@link ReqGetExpMode.verify|verify} messages.
     * @param message ReqGetExpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetExpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetExpMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetExpMode;

    /**
     * Decodes a ReqGetExpMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetExpMode;

    /**
     * Verifies a ReqGetExpMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetExpMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetExpMode
     */
    public static fromObject(object: { [k: string]: any }): ReqGetExpMode;

    /**
     * Creates a plain object from a ReqGetExpMode message. Also converts values to other types if specified.
     * @param message ReqGetExpMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetExpMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetExpMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetExpMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetExp. */
export class ReqSetExp implements IReqSetExp {

    /**
     * Constructs a new ReqSetExp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetExp);

    /** ReqSetExp index. */
    public index: number;

    /**
     * Creates a new ReqSetExp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetExp instance
     */
    public static create(properties?: IReqSetExp): ReqSetExp;

    /**
     * Encodes the specified ReqSetExp message. Does not implicitly {@link ReqSetExp.verify|verify} messages.
     * @param message ReqSetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetExp message, length delimited. Does not implicitly {@link ReqSetExp.verify|verify} messages.
     * @param message ReqSetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetExp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetExp;

    /**
     * Decodes a ReqSetExp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetExp;

    /**
     * Verifies a ReqSetExp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetExp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetExp
     */
    public static fromObject(object: { [k: string]: any }): ReqSetExp;

    /**
     * Creates a plain object from a ReqSetExp message. Also converts values to other types if specified.
     * @param message ReqSetExp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetExp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetExp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetExp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetExp. */
export class ReqGetExp implements IReqGetExp {

    /**
     * Constructs a new ReqGetExp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetExp);

    /**
     * Creates a new ReqGetExp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetExp instance
     */
    public static create(properties?: IReqGetExp): ReqGetExp;

    /**
     * Encodes the specified ReqGetExp message. Does not implicitly {@link ReqGetExp.verify|verify} messages.
     * @param message ReqGetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetExp message, length delimited. Does not implicitly {@link ReqGetExp.verify|verify} messages.
     * @param message ReqGetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetExp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetExp;

    /**
     * Decodes a ReqGetExp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetExp;

    /**
     * Verifies a ReqGetExp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetExp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetExp
     */
    public static fromObject(object: { [k: string]: any }): ReqGetExp;

    /**
     * Creates a plain object from a ReqGetExp message. Also converts values to other types if specified.
     * @param message ReqGetExp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetExp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetExp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetExp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetGainMode. */
export class ReqSetGainMode implements IReqSetGainMode {

    /**
     * Constructs a new ReqSetGainMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetGainMode);

    /** ReqSetGainMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetGainMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetGainMode instance
     */
    public static create(properties?: IReqSetGainMode): ReqSetGainMode;

    /**
     * Encodes the specified ReqSetGainMode message. Does not implicitly {@link ReqSetGainMode.verify|verify} messages.
     * @param message ReqSetGainMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetGainMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetGainMode message, length delimited. Does not implicitly {@link ReqSetGainMode.verify|verify} messages.
     * @param message ReqSetGainMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetGainMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetGainMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetGainMode;

    /**
     * Decodes a ReqSetGainMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetGainMode;

    /**
     * Verifies a ReqSetGainMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetGainMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetGainMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetGainMode;

    /**
     * Creates a plain object from a ReqSetGainMode message. Also converts values to other types if specified.
     * @param message ReqSetGainMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetGainMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetGainMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetGainMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetGainMode. */
export class ReqGetGainMode implements IReqGetGainMode {

    /**
     * Constructs a new ReqGetGainMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetGainMode);

    /**
     * Creates a new ReqGetGainMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetGainMode instance
     */
    public static create(properties?: IReqGetGainMode): ReqGetGainMode;

    /**
     * Encodes the specified ReqGetGainMode message. Does not implicitly {@link ReqGetGainMode.verify|verify} messages.
     * @param message ReqGetGainMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetGainMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetGainMode message, length delimited. Does not implicitly {@link ReqGetGainMode.verify|verify} messages.
     * @param message ReqGetGainMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetGainMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetGainMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetGainMode;

    /**
     * Decodes a ReqGetGainMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetGainMode;

    /**
     * Verifies a ReqGetGainMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetGainMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetGainMode
     */
    public static fromObject(object: { [k: string]: any }): ReqGetGainMode;

    /**
     * Creates a plain object from a ReqGetGainMode message. Also converts values to other types if specified.
     * @param message ReqGetGainMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetGainMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetGainMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetGainMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetGain. */
export class ReqSetGain implements IReqSetGain {

    /**
     * Constructs a new ReqSetGain.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetGain);

    /** ReqSetGain index. */
    public index: number;

    /**
     * Creates a new ReqSetGain instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetGain instance
     */
    public static create(properties?: IReqSetGain): ReqSetGain;

    /**
     * Encodes the specified ReqSetGain message. Does not implicitly {@link ReqSetGain.verify|verify} messages.
     * @param message ReqSetGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetGain message, length delimited. Does not implicitly {@link ReqSetGain.verify|verify} messages.
     * @param message ReqSetGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetGain message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetGain;

    /**
     * Decodes a ReqSetGain message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetGain;

    /**
     * Verifies a ReqSetGain message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetGain message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetGain
     */
    public static fromObject(object: { [k: string]: any }): ReqSetGain;

    /**
     * Creates a plain object from a ReqSetGain message. Also converts values to other types if specified.
     * @param message ReqSetGain
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetGain, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetGain to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetGain
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetGain. */
export class ReqGetGain implements IReqGetGain {

    /**
     * Constructs a new ReqGetGain.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetGain);

    /**
     * Creates a new ReqGetGain instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetGain instance
     */
    public static create(properties?: IReqGetGain): ReqGetGain;

    /**
     * Encodes the specified ReqGetGain message. Does not implicitly {@link ReqGetGain.verify|verify} messages.
     * @param message ReqGetGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetGain message, length delimited. Does not implicitly {@link ReqGetGain.verify|verify} messages.
     * @param message ReqGetGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetGain message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetGain;

    /**
     * Decodes a ReqGetGain message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetGain;

    /**
     * Verifies a ReqGetGain message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetGain message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetGain
     */
    public static fromObject(object: { [k: string]: any }): ReqGetGain;

    /**
     * Creates a plain object from a ReqGetGain message. Also converts values to other types if specified.
     * @param message ReqGetGain
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetGain, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetGain to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetGain
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetBrightness. */
export class ReqSetBrightness implements IReqSetBrightness {

    /**
     * Constructs a new ReqSetBrightness.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetBrightness);

    /** ReqSetBrightness value. */
    public value: number;

    /**
     * Creates a new ReqSetBrightness instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetBrightness instance
     */
    public static create(properties?: IReqSetBrightness): ReqSetBrightness;

    /**
     * Encodes the specified ReqSetBrightness message. Does not implicitly {@link ReqSetBrightness.verify|verify} messages.
     * @param message ReqSetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetBrightness message, length delimited. Does not implicitly {@link ReqSetBrightness.verify|verify} messages.
     * @param message ReqSetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetBrightness message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetBrightness;

    /**
     * Decodes a ReqSetBrightness message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetBrightness;

    /**
     * Verifies a ReqSetBrightness message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetBrightness message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetBrightness
     */
    public static fromObject(object: { [k: string]: any }): ReqSetBrightness;

    /**
     * Creates a plain object from a ReqSetBrightness message. Also converts values to other types if specified.
     * @param message ReqSetBrightness
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetBrightness, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetBrightness to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetBrightness
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetBrightness. */
export class ReqGetBrightness implements IReqGetBrightness {

    /**
     * Constructs a new ReqGetBrightness.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetBrightness);

    /**
     * Creates a new ReqGetBrightness instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetBrightness instance
     */
    public static create(properties?: IReqGetBrightness): ReqGetBrightness;

    /**
     * Encodes the specified ReqGetBrightness message. Does not implicitly {@link ReqGetBrightness.verify|verify} messages.
     * @param message ReqGetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetBrightness message, length delimited. Does not implicitly {@link ReqGetBrightness.verify|verify} messages.
     * @param message ReqGetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetBrightness message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetBrightness;

    /**
     * Decodes a ReqGetBrightness message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetBrightness;

    /**
     * Verifies a ReqGetBrightness message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetBrightness message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetBrightness
     */
    public static fromObject(object: { [k: string]: any }): ReqGetBrightness;

    /**
     * Creates a plain object from a ReqGetBrightness message. Also converts values to other types if specified.
     * @param message ReqGetBrightness
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetBrightness, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetBrightness to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetBrightness
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetContrast. */
export class ReqSetContrast implements IReqSetContrast {

    /**
     * Constructs a new ReqSetContrast.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetContrast);

    /** ReqSetContrast value. */
    public value: number;

    /**
     * Creates a new ReqSetContrast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetContrast instance
     */
    public static create(properties?: IReqSetContrast): ReqSetContrast;

    /**
     * Encodes the specified ReqSetContrast message. Does not implicitly {@link ReqSetContrast.verify|verify} messages.
     * @param message ReqSetContrast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetContrast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetContrast message, length delimited. Does not implicitly {@link ReqSetContrast.verify|verify} messages.
     * @param message ReqSetContrast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetContrast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetContrast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetContrast;

    /**
     * Decodes a ReqSetContrast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetContrast;

    /**
     * Verifies a ReqSetContrast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetContrast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetContrast
     */
    public static fromObject(object: { [k: string]: any }): ReqSetContrast;

    /**
     * Creates a plain object from a ReqSetContrast message. Also converts values to other types if specified.
     * @param message ReqSetContrast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetContrast, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetContrast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetContrast
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetContrast. */
export class ReqGetContrast implements IReqGetContrast {

    /**
     * Constructs a new ReqGetContrast.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetContrast);

    /**
     * Creates a new ReqGetContrast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetContrast instance
     */
    public static create(properties?: IReqGetContrast): ReqGetContrast;

    /**
     * Encodes the specified ReqGetContrast message. Does not implicitly {@link ReqGetContrast.verify|verify} messages.
     * @param message ReqGetContrast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetContrast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetContrast message, length delimited. Does not implicitly {@link ReqGetContrast.verify|verify} messages.
     * @param message ReqGetContrast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetContrast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetContrast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetContrast;

    /**
     * Decodes a ReqGetContrast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetContrast;

    /**
     * Verifies a ReqGetContrast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetContrast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetContrast
     */
    public static fromObject(object: { [k: string]: any }): ReqGetContrast;

    /**
     * Creates a plain object from a ReqGetContrast message. Also converts values to other types if specified.
     * @param message ReqGetContrast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetContrast, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetContrast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetContrast
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetHue. */
export class ReqSetHue implements IReqSetHue {

    /**
     * Constructs a new ReqSetHue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetHue);

    /** ReqSetHue value. */
    public value: number;

    /**
     * Creates a new ReqSetHue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetHue instance
     */
    public static create(properties?: IReqSetHue): ReqSetHue;

    /**
     * Encodes the specified ReqSetHue message. Does not implicitly {@link ReqSetHue.verify|verify} messages.
     * @param message ReqSetHue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetHue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetHue message, length delimited. Does not implicitly {@link ReqSetHue.verify|verify} messages.
     * @param message ReqSetHue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetHue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetHue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetHue;

    /**
     * Decodes a ReqSetHue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetHue;

    /**
     * Verifies a ReqSetHue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetHue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetHue
     */
    public static fromObject(object: { [k: string]: any }): ReqSetHue;

    /**
     * Creates a plain object from a ReqSetHue message. Also converts values to other types if specified.
     * @param message ReqSetHue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetHue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetHue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetHue
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetHue. */
export class ReqGetHue implements IReqGetHue {

    /**
     * Constructs a new ReqGetHue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetHue);

    /**
     * Creates a new ReqGetHue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetHue instance
     */
    public static create(properties?: IReqGetHue): ReqGetHue;

    /**
     * Encodes the specified ReqGetHue message. Does not implicitly {@link ReqGetHue.verify|verify} messages.
     * @param message ReqGetHue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetHue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetHue message, length delimited. Does not implicitly {@link ReqGetHue.verify|verify} messages.
     * @param message ReqGetHue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetHue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetHue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetHue;

    /**
     * Decodes a ReqGetHue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetHue;

    /**
     * Verifies a ReqGetHue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetHue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetHue
     */
    public static fromObject(object: { [k: string]: any }): ReqGetHue;

    /**
     * Creates a plain object from a ReqGetHue message. Also converts values to other types if specified.
     * @param message ReqGetHue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetHue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetHue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetHue
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetSaturation. */
export class ReqSetSaturation implements IReqSetSaturation {

    /**
     * Constructs a new ReqSetSaturation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetSaturation);

    /** ReqSetSaturation value. */
    public value: number;

    /**
     * Creates a new ReqSetSaturation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetSaturation instance
     */
    public static create(properties?: IReqSetSaturation): ReqSetSaturation;

    /**
     * Encodes the specified ReqSetSaturation message. Does not implicitly {@link ReqSetSaturation.verify|verify} messages.
     * @param message ReqSetSaturation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetSaturation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetSaturation message, length delimited. Does not implicitly {@link ReqSetSaturation.verify|verify} messages.
     * @param message ReqSetSaturation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetSaturation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetSaturation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetSaturation;

    /**
     * Decodes a ReqSetSaturation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetSaturation;

    /**
     * Verifies a ReqSetSaturation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetSaturation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetSaturation
     */
    public static fromObject(object: { [k: string]: any }): ReqSetSaturation;

    /**
     * Creates a plain object from a ReqSetSaturation message. Also converts values to other types if specified.
     * @param message ReqSetSaturation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetSaturation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetSaturation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetSaturation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetSaturation. */
export class ReqGetSaturation implements IReqGetSaturation {

    /**
     * Constructs a new ReqGetSaturation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetSaturation);

    /**
     * Creates a new ReqGetSaturation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetSaturation instance
     */
    public static create(properties?: IReqGetSaturation): ReqGetSaturation;

    /**
     * Encodes the specified ReqGetSaturation message. Does not implicitly {@link ReqGetSaturation.verify|verify} messages.
     * @param message ReqGetSaturation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetSaturation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetSaturation message, length delimited. Does not implicitly {@link ReqGetSaturation.verify|verify} messages.
     * @param message ReqGetSaturation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetSaturation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetSaturation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetSaturation;

    /**
     * Decodes a ReqGetSaturation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetSaturation;

    /**
     * Verifies a ReqGetSaturation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetSaturation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetSaturation
     */
    public static fromObject(object: { [k: string]: any }): ReqGetSaturation;

    /**
     * Creates a plain object from a ReqGetSaturation message. Also converts values to other types if specified.
     * @param message ReqGetSaturation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetSaturation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetSaturation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetSaturation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetSharpness. */
export class ReqSetSharpness implements IReqSetSharpness {

    /**
     * Constructs a new ReqSetSharpness.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetSharpness);

    /** ReqSetSharpness value. */
    public value: number;

    /**
     * Creates a new ReqSetSharpness instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetSharpness instance
     */
    public static create(properties?: IReqSetSharpness): ReqSetSharpness;

    /**
     * Encodes the specified ReqSetSharpness message. Does not implicitly {@link ReqSetSharpness.verify|verify} messages.
     * @param message ReqSetSharpness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetSharpness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetSharpness message, length delimited. Does not implicitly {@link ReqSetSharpness.verify|verify} messages.
     * @param message ReqSetSharpness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetSharpness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetSharpness message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetSharpness;

    /**
     * Decodes a ReqSetSharpness message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetSharpness;

    /**
     * Verifies a ReqSetSharpness message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetSharpness message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetSharpness
     */
    public static fromObject(object: { [k: string]: any }): ReqSetSharpness;

    /**
     * Creates a plain object from a ReqSetSharpness message. Also converts values to other types if specified.
     * @param message ReqSetSharpness
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetSharpness, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetSharpness to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetSharpness
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetSharpness. */
export class ReqGetSharpness implements IReqGetSharpness {

    /**
     * Constructs a new ReqGetSharpness.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetSharpness);

    /**
     * Creates a new ReqGetSharpness instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetSharpness instance
     */
    public static create(properties?: IReqGetSharpness): ReqGetSharpness;

    /**
     * Encodes the specified ReqGetSharpness message. Does not implicitly {@link ReqGetSharpness.verify|verify} messages.
     * @param message ReqGetSharpness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetSharpness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetSharpness message, length delimited. Does not implicitly {@link ReqGetSharpness.verify|verify} messages.
     * @param message ReqGetSharpness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetSharpness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetSharpness message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetSharpness;

    /**
     * Decodes a ReqGetSharpness message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetSharpness;

    /**
     * Verifies a ReqGetSharpness message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetSharpness message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetSharpness
     */
    public static fromObject(object: { [k: string]: any }): ReqGetSharpness;

    /**
     * Creates a plain object from a ReqGetSharpness message. Also converts values to other types if specified.
     * @param message ReqGetSharpness
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetSharpness, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetSharpness to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetSharpness
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetWBMode. */
export class ReqSetWBMode implements IReqSetWBMode {

    /**
     * Constructs a new ReqSetWBMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetWBMode);

    /** ReqSetWBMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetWBMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetWBMode instance
     */
    public static create(properties?: IReqSetWBMode): ReqSetWBMode;

    /**
     * Encodes the specified ReqSetWBMode message. Does not implicitly {@link ReqSetWBMode.verify|verify} messages.
     * @param message ReqSetWBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetWBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetWBMode message, length delimited. Does not implicitly {@link ReqSetWBMode.verify|verify} messages.
     * @param message ReqSetWBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetWBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetWBMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetWBMode;

    /**
     * Decodes a ReqSetWBMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetWBMode;

    /**
     * Verifies a ReqSetWBMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetWBMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetWBMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetWBMode;

    /**
     * Creates a plain object from a ReqSetWBMode message. Also converts values to other types if specified.
     * @param message ReqSetWBMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetWBMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetWBMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetWBMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetWBMode. */
export class ReqGetWBMode implements IReqGetWBMode {

    /**
     * Constructs a new ReqGetWBMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetWBMode);

    /**
     * Creates a new ReqGetWBMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetWBMode instance
     */
    public static create(properties?: IReqGetWBMode): ReqGetWBMode;

    /**
     * Encodes the specified ReqGetWBMode message. Does not implicitly {@link ReqGetWBMode.verify|verify} messages.
     * @param message ReqGetWBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetWBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetWBMode message, length delimited. Does not implicitly {@link ReqGetWBMode.verify|verify} messages.
     * @param message ReqGetWBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetWBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetWBMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetWBMode;

    /**
     * Decodes a ReqGetWBMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetWBMode;

    /**
     * Verifies a ReqGetWBMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetWBMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetWBMode
     */
    public static fromObject(object: { [k: string]: any }): ReqGetWBMode;

    /**
     * Creates a plain object from a ReqGetWBMode message. Also converts values to other types if specified.
     * @param message ReqGetWBMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetWBMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetWBMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetWBMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetWBSence. */
export class ReqSetWBSence implements IReqSetWBSence {

    /**
     * Constructs a new ReqSetWBSence.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetWBSence);

    /** ReqSetWBSence value. */
    public value: number;

    /**
     * Creates a new ReqSetWBSence instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetWBSence instance
     */
    public static create(properties?: IReqSetWBSence): ReqSetWBSence;

    /**
     * Encodes the specified ReqSetWBSence message. Does not implicitly {@link ReqSetWBSence.verify|verify} messages.
     * @param message ReqSetWBSence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetWBSence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetWBSence message, length delimited. Does not implicitly {@link ReqSetWBSence.verify|verify} messages.
     * @param message ReqSetWBSence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetWBSence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetWBSence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetWBSence;

    /**
     * Decodes a ReqSetWBSence message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetWBSence;

    /**
     * Verifies a ReqSetWBSence message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetWBSence message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetWBSence
     */
    public static fromObject(object: { [k: string]: any }): ReqSetWBSence;

    /**
     * Creates a plain object from a ReqSetWBSence message. Also converts values to other types if specified.
     * @param message ReqSetWBSence
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetWBSence, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetWBSence to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetWBSence
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetWBSence. */
export class ReqGetWBSence implements IReqGetWBSence {

    /**
     * Constructs a new ReqGetWBSence.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetWBSence);

    /**
     * Creates a new ReqGetWBSence instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetWBSence instance
     */
    public static create(properties?: IReqGetWBSence): ReqGetWBSence;

    /**
     * Encodes the specified ReqGetWBSence message. Does not implicitly {@link ReqGetWBSence.verify|verify} messages.
     * @param message ReqGetWBSence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetWBSence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetWBSence message, length delimited. Does not implicitly {@link ReqGetWBSence.verify|verify} messages.
     * @param message ReqGetWBSence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetWBSence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetWBSence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetWBSence;

    /**
     * Decodes a ReqGetWBSence message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetWBSence;

    /**
     * Verifies a ReqGetWBSence message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetWBSence message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetWBSence
     */
    public static fromObject(object: { [k: string]: any }): ReqGetWBSence;

    /**
     * Creates a plain object from a ReqGetWBSence message. Also converts values to other types if specified.
     * @param message ReqGetWBSence
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetWBSence, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetWBSence to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetWBSence
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetWBCT. */
export class ReqSetWBCT implements IReqSetWBCT {

    /**
     * Constructs a new ReqSetWBCT.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetWBCT);

    /** ReqSetWBCT index. */
    public index: number;

    /**
     * Creates a new ReqSetWBCT instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetWBCT instance
     */
    public static create(properties?: IReqSetWBCT): ReqSetWBCT;

    /**
     * Encodes the specified ReqSetWBCT message. Does not implicitly {@link ReqSetWBCT.verify|verify} messages.
     * @param message ReqSetWBCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetWBCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetWBCT message, length delimited. Does not implicitly {@link ReqSetWBCT.verify|verify} messages.
     * @param message ReqSetWBCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetWBCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetWBCT message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetWBCT;

    /**
     * Decodes a ReqSetWBCT message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetWBCT;

    /**
     * Verifies a ReqSetWBCT message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetWBCT message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetWBCT
     */
    public static fromObject(object: { [k: string]: any }): ReqSetWBCT;

    /**
     * Creates a plain object from a ReqSetWBCT message. Also converts values to other types if specified.
     * @param message ReqSetWBCT
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetWBCT, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetWBCT to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetWBCT
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetWBCT. */
export class ReqGetWBCT implements IReqGetWBCT {

    /**
     * Constructs a new ReqGetWBCT.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetWBCT);

    /**
     * Creates a new ReqGetWBCT instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetWBCT instance
     */
    public static create(properties?: IReqGetWBCT): ReqGetWBCT;

    /**
     * Encodes the specified ReqGetWBCT message. Does not implicitly {@link ReqGetWBCT.verify|verify} messages.
     * @param message ReqGetWBCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetWBCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetWBCT message, length delimited. Does not implicitly {@link ReqGetWBCT.verify|verify} messages.
     * @param message ReqGetWBCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetWBCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetWBCT message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetWBCT;

    /**
     * Decodes a ReqGetWBCT message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetWBCT;

    /**
     * Verifies a ReqGetWBCT message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetWBCT message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetWBCT
     */
    public static fromObject(object: { [k: string]: any }): ReqGetWBCT;

    /**
     * Creates a plain object from a ReqGetWBCT message. Also converts values to other types if specified.
     * @param message ReqGetWBCT
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetWBCT, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetWBCT to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetWBCT
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetIrCut. */
export class ReqSetIrCut implements IReqSetIrCut {

    /**
     * Constructs a new ReqSetIrCut.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetIrCut);

    /** ReqSetIrCut value. */
    public value: number;

    /**
     * Creates a new ReqSetIrCut instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetIrCut instance
     */
    public static create(properties?: IReqSetIrCut): ReqSetIrCut;

    /**
     * Encodes the specified ReqSetIrCut message. Does not implicitly {@link ReqSetIrCut.verify|verify} messages.
     * @param message ReqSetIrCut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetIrCut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetIrCut message, length delimited. Does not implicitly {@link ReqSetIrCut.verify|verify} messages.
     * @param message ReqSetIrCut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetIrCut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetIrCut message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetIrCut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetIrCut;

    /**
     * Decodes a ReqSetIrCut message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetIrCut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetIrCut;

    /**
     * Verifies a ReqSetIrCut message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetIrCut message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetIrCut
     */
    public static fromObject(object: { [k: string]: any }): ReqSetIrCut;

    /**
     * Creates a plain object from a ReqSetIrCut message. Also converts values to other types if specified.
     * @param message ReqSetIrCut
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetIrCut, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetIrCut to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetIrCut
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetIrcut. */
export class ReqGetIrcut implements IReqGetIrcut {

    /**
     * Constructs a new ReqGetIrcut.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetIrcut);

    /**
     * Creates a new ReqGetIrcut instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetIrcut instance
     */
    public static create(properties?: IReqGetIrcut): ReqGetIrcut;

    /**
     * Encodes the specified ReqGetIrcut message. Does not implicitly {@link ReqGetIrcut.verify|verify} messages.
     * @param message ReqGetIrcut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetIrcut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetIrcut message, length delimited. Does not implicitly {@link ReqGetIrcut.verify|verify} messages.
     * @param message ReqGetIrcut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetIrcut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetIrcut message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetIrcut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetIrcut;

    /**
     * Decodes a ReqGetIrcut message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetIrcut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetIrcut;

    /**
     * Verifies a ReqGetIrcut message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetIrcut message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetIrcut
     */
    public static fromObject(object: { [k: string]: any }): ReqGetIrcut;

    /**
     * Creates a plain object from a ReqGetIrcut message. Also converts values to other types if specified.
     * @param message ReqGetIrcut
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetIrcut, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetIrcut to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetIrcut
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStartTimeLapse. */
export class ReqStartTimeLapse implements IReqStartTimeLapse {

    /**
     * Constructs a new ReqStartTimeLapse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartTimeLapse);

    /**
     * Creates a new ReqStartTimeLapse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartTimeLapse instance
     */
    public static create(properties?: IReqStartTimeLapse): ReqStartTimeLapse;

    /**
     * Encodes the specified ReqStartTimeLapse message. Does not implicitly {@link ReqStartTimeLapse.verify|verify} messages.
     * @param message ReqStartTimeLapse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartTimeLapse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartTimeLapse message, length delimited. Does not implicitly {@link ReqStartTimeLapse.verify|verify} messages.
     * @param message ReqStartTimeLapse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartTimeLapse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartTimeLapse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartTimeLapse;

    /**
     * Decodes a ReqStartTimeLapse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartTimeLapse;

    /**
     * Verifies a ReqStartTimeLapse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartTimeLapse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartTimeLapse
     */
    public static fromObject(object: { [k: string]: any }): ReqStartTimeLapse;

    /**
     * Creates a plain object from a ReqStartTimeLapse message. Also converts values to other types if specified.
     * @param message ReqStartTimeLapse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartTimeLapse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartTimeLapse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartTimeLapse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopTimeLapse. */
export class ReqStopTimeLapse implements IReqStopTimeLapse {

    /**
     * Constructs a new ReqStopTimeLapse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopTimeLapse);

    /**
     * Creates a new ReqStopTimeLapse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopTimeLapse instance
     */
    public static create(properties?: IReqStopTimeLapse): ReqStopTimeLapse;

    /**
     * Encodes the specified ReqStopTimeLapse message. Does not implicitly {@link ReqStopTimeLapse.verify|verify} messages.
     * @param message ReqStopTimeLapse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopTimeLapse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopTimeLapse message, length delimited. Does not implicitly {@link ReqStopTimeLapse.verify|verify} messages.
     * @param message ReqStopTimeLapse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopTimeLapse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopTimeLapse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopTimeLapse;

    /**
     * Decodes a ReqStopTimeLapse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopTimeLapse;

    /**
     * Verifies a ReqStopTimeLapse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopTimeLapse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopTimeLapse
     */
    public static fromObject(object: { [k: string]: any }): ReqStopTimeLapse;

    /**
     * Creates a plain object from a ReqStopTimeLapse message. Also converts values to other types if specified.
     * @param message ReqStopTimeLapse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopTimeLapse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopTimeLapse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopTimeLapse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetAllParams. */
export class ReqSetAllParams implements IReqSetAllParams {

    /**
     * Constructs a new ReqSetAllParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetAllParams);

    /** ReqSetAllParams expMode. */
    public expMode: number;

    /** ReqSetAllParams expIndex. */
    public expIndex: number;

    /** ReqSetAllParams gainMode. */
    public gainMode: number;

    /** ReqSetAllParams gainIndex. */
    public gainIndex: number;

    /** ReqSetAllParams ircutValue. */
    public ircutValue: number;

    /** ReqSetAllParams wbMode. */
    public wbMode: number;

    /** ReqSetAllParams wbIndexType. */
    public wbIndexType: number;

    /** ReqSetAllParams wbIndex. */
    public wbIndex: number;

    /** ReqSetAllParams brightness. */
    public brightness: number;

    /** ReqSetAllParams contrast. */
    public contrast: number;

    /** ReqSetAllParams hue. */
    public hue: number;

    /** ReqSetAllParams saturation. */
    public saturation: number;

    /** ReqSetAllParams sharpness. */
    public sharpness: number;

    /** ReqSetAllParams jpgQuality. */
    public jpgQuality: number;

    /**
     * Creates a new ReqSetAllParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetAllParams instance
     */
    public static create(properties?: IReqSetAllParams): ReqSetAllParams;

    /**
     * Encodes the specified ReqSetAllParams message. Does not implicitly {@link ReqSetAllParams.verify|verify} messages.
     * @param message ReqSetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetAllParams message, length delimited. Does not implicitly {@link ReqSetAllParams.verify|verify} messages.
     * @param message ReqSetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetAllParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetAllParams;

    /**
     * Decodes a ReqSetAllParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetAllParams;

    /**
     * Verifies a ReqSetAllParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetAllParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetAllParams
     */
    public static fromObject(object: { [k: string]: any }): ReqSetAllParams;

    /**
     * Creates a plain object from a ReqSetAllParams message. Also converts values to other types if specified.
     * @param message ReqSetAllParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetAllParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetAllParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetAllParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetAllParams. */
export class ReqGetAllParams implements IReqGetAllParams {

    /**
     * Constructs a new ReqGetAllParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetAllParams);

    /**
     * Creates a new ReqGetAllParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetAllParams instance
     */
    public static create(properties?: IReqGetAllParams): ReqGetAllParams;

    /**
     * Encodes the specified ReqGetAllParams message. Does not implicitly {@link ReqGetAllParams.verify|verify} messages.
     * @param message ReqGetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetAllParams message, length delimited. Does not implicitly {@link ReqGetAllParams.verify|verify} messages.
     * @param message ReqGetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetAllParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetAllParams;

    /**
     * Decodes a ReqGetAllParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetAllParams;

    /**
     * Verifies a ReqGetAllParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetAllParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetAllParams
     */
    public static fromObject(object: { [k: string]: any }): ReqGetAllParams;

    /**
     * Creates a plain object from a ReqGetAllParams message. Also converts values to other types if specified.
     * @param message ReqGetAllParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetAllParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetAllParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetAllParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetAllParams. */
export class ResGetAllParams implements IResGetAllParams {

    /**
     * Constructs a new ResGetAllParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetAllParams);

    /** ResGetAllParams allParams. */
    public allParams: ICommonParam[];

    /** ResGetAllParams code. */
    public code: number;

    /**
     * Creates a new ResGetAllParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetAllParams instance
     */
    public static create(properties?: IResGetAllParams): ResGetAllParams;

    /**
     * Encodes the specified ResGetAllParams message. Does not implicitly {@link ResGetAllParams.verify|verify} messages.
     * @param message ResGetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetAllParams message, length delimited. Does not implicitly {@link ResGetAllParams.verify|verify} messages.
     * @param message ResGetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetAllParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetAllParams;

    /**
     * Decodes a ResGetAllParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetAllParams;

    /**
     * Verifies a ResGetAllParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetAllParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetAllParams
     */
    public static fromObject(object: { [k: string]: any }): ResGetAllParams;

    /**
     * Creates a plain object from a ResGetAllParams message. Also converts values to other types if specified.
     * @param message ResGetAllParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetAllParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetAllParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetAllParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetFeatureParams. */
export class ReqSetFeatureParams implements IReqSetFeatureParams {

    /**
     * Constructs a new ReqSetFeatureParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetFeatureParams);

    /** ReqSetFeatureParams param. */
    public param?: (ICommonParam|null);

    /**
     * Creates a new ReqSetFeatureParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetFeatureParams instance
     */
    public static create(properties?: IReqSetFeatureParams): ReqSetFeatureParams;

    /**
     * Encodes the specified ReqSetFeatureParams message. Does not implicitly {@link ReqSetFeatureParams.verify|verify} messages.
     * @param message ReqSetFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetFeatureParams message, length delimited. Does not implicitly {@link ReqSetFeatureParams.verify|verify} messages.
     * @param message ReqSetFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetFeatureParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetFeatureParams;

    /**
     * Decodes a ReqSetFeatureParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetFeatureParams;

    /**
     * Verifies a ReqSetFeatureParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetFeatureParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetFeatureParams
     */
    public static fromObject(object: { [k: string]: any }): ReqSetFeatureParams;

    /**
     * Creates a plain object from a ReqSetFeatureParams message. Also converts values to other types if specified.
     * @param message ReqSetFeatureParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetFeatureParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetFeatureParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetFeatureParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetAllFeatureParams. */
export class ReqGetAllFeatureParams implements IReqGetAllFeatureParams {

    /**
     * Constructs a new ReqGetAllFeatureParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetAllFeatureParams);

    /**
     * Creates a new ReqGetAllFeatureParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetAllFeatureParams instance
     */
    public static create(properties?: IReqGetAllFeatureParams): ReqGetAllFeatureParams;

    /**
     * Encodes the specified ReqGetAllFeatureParams message. Does not implicitly {@link ReqGetAllFeatureParams.verify|verify} messages.
     * @param message ReqGetAllFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetAllFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetAllFeatureParams message, length delimited. Does not implicitly {@link ReqGetAllFeatureParams.verify|verify} messages.
     * @param message ReqGetAllFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetAllFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetAllFeatureParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetAllFeatureParams;

    /**
     * Decodes a ReqGetAllFeatureParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetAllFeatureParams;

    /**
     * Verifies a ReqGetAllFeatureParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetAllFeatureParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetAllFeatureParams
     */
    public static fromObject(object: { [k: string]: any }): ReqGetAllFeatureParams;

    /**
     * Creates a plain object from a ReqGetAllFeatureParams message. Also converts values to other types if specified.
     * @param message ReqGetAllFeatureParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetAllFeatureParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetAllFeatureParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetAllFeatureParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetAllFeatureParams. */
export class ResGetAllFeatureParams implements IResGetAllFeatureParams {

    /**
     * Constructs a new ResGetAllFeatureParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetAllFeatureParams);

    /** ResGetAllFeatureParams allFeatureParams. */
    public allFeatureParams: ICommonParam[];

    /** ResGetAllFeatureParams code. */
    public code: number;

    /**
     * Creates a new ResGetAllFeatureParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetAllFeatureParams instance
     */
    public static create(properties?: IResGetAllFeatureParams): ResGetAllFeatureParams;

    /**
     * Encodes the specified ResGetAllFeatureParams message. Does not implicitly {@link ResGetAllFeatureParams.verify|verify} messages.
     * @param message ResGetAllFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetAllFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetAllFeatureParams message, length delimited. Does not implicitly {@link ResGetAllFeatureParams.verify|verify} messages.
     * @param message ResGetAllFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetAllFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetAllFeatureParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetAllFeatureParams;

    /**
     * Decodes a ResGetAllFeatureParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetAllFeatureParams;

    /**
     * Verifies a ResGetAllFeatureParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetAllFeatureParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetAllFeatureParams
     */
    public static fromObject(object: { [k: string]: any }): ResGetAllFeatureParams;

    /**
     * Creates a plain object from a ResGetAllFeatureParams message. Also converts values to other types if specified.
     * @param message ResGetAllFeatureParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetAllFeatureParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetAllFeatureParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetAllFeatureParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetSystemWorkingState. */
export class ReqGetSystemWorkingState implements IReqGetSystemWorkingState {

    /**
     * Constructs a new ReqGetSystemWorkingState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetSystemWorkingState);

    /**
     * Creates a new ReqGetSystemWorkingState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetSystemWorkingState instance
     */
    public static create(properties?: IReqGetSystemWorkingState): ReqGetSystemWorkingState;

    /**
     * Encodes the specified ReqGetSystemWorkingState message. Does not implicitly {@link ReqGetSystemWorkingState.verify|verify} messages.
     * @param message ReqGetSystemWorkingState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetSystemWorkingState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetSystemWorkingState message, length delimited. Does not implicitly {@link ReqGetSystemWorkingState.verify|verify} messages.
     * @param message ReqGetSystemWorkingState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetSystemWorkingState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetSystemWorkingState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetSystemWorkingState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetSystemWorkingState;

    /**
     * Decodes a ReqGetSystemWorkingState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetSystemWorkingState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetSystemWorkingState;

    /**
     * Verifies a ReqGetSystemWorkingState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetSystemWorkingState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetSystemWorkingState
     */
    public static fromObject(object: { [k: string]: any }): ReqGetSystemWorkingState;

    /**
     * Creates a plain object from a ReqGetSystemWorkingState message. Also converts values to other types if specified.
     * @param message ReqGetSystemWorkingState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetSystemWorkingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetSystemWorkingState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetSystemWorkingState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetJpgQuality. */
export class ReqSetJpgQuality implements IReqSetJpgQuality {

    /**
     * Constructs a new ReqSetJpgQuality.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetJpgQuality);

    /** ReqSetJpgQuality quality. */
    public quality: number;

    /**
     * Creates a new ReqSetJpgQuality instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetJpgQuality instance
     */
    public static create(properties?: IReqSetJpgQuality): ReqSetJpgQuality;

    /**
     * Encodes the specified ReqSetJpgQuality message. Does not implicitly {@link ReqSetJpgQuality.verify|verify} messages.
     * @param message ReqSetJpgQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetJpgQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetJpgQuality message, length delimited. Does not implicitly {@link ReqSetJpgQuality.verify|verify} messages.
     * @param message ReqSetJpgQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetJpgQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetJpgQuality message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetJpgQuality;

    /**
     * Decodes a ReqSetJpgQuality message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetJpgQuality;

    /**
     * Verifies a ReqSetJpgQuality message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetJpgQuality message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetJpgQuality
     */
    public static fromObject(object: { [k: string]: any }): ReqSetJpgQuality;

    /**
     * Creates a plain object from a ReqSetJpgQuality message. Also converts values to other types if specified.
     * @param message ReqSetJpgQuality
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetJpgQuality, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetJpgQuality to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetJpgQuality
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetJpgQuality. */
export class ReqGetJpgQuality implements IReqGetJpgQuality {

    /**
     * Constructs a new ReqGetJpgQuality.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetJpgQuality);

    /**
     * Creates a new ReqGetJpgQuality instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetJpgQuality instance
     */
    public static create(properties?: IReqGetJpgQuality): ReqGetJpgQuality;

    /**
     * Encodes the specified ReqGetJpgQuality message. Does not implicitly {@link ReqGetJpgQuality.verify|verify} messages.
     * @param message ReqGetJpgQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetJpgQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetJpgQuality message, length delimited. Does not implicitly {@link ReqGetJpgQuality.verify|verify} messages.
     * @param message ReqGetJpgQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetJpgQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetJpgQuality message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetJpgQuality;

    /**
     * Decodes a ReqGetJpgQuality message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetJpgQuality;

    /**
     * Verifies a ReqGetJpgQuality message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetJpgQuality message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetJpgQuality
     */
    public static fromObject(object: { [k: string]: any }): ReqGetJpgQuality;

    /**
     * Creates a plain object from a ReqGetJpgQuality message. Also converts values to other types if specified.
     * @param message ReqGetJpgQuality
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetJpgQuality, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetJpgQuality to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetJpgQuality
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqPhotoRaw. */
export class ReqPhotoRaw implements IReqPhotoRaw {

    /**
     * Constructs a new ReqPhotoRaw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPhotoRaw);

    /**
     * Creates a new ReqPhotoRaw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPhotoRaw instance
     */
    public static create(properties?: IReqPhotoRaw): ReqPhotoRaw;

    /**
     * Encodes the specified ReqPhotoRaw message. Does not implicitly {@link ReqPhotoRaw.verify|verify} messages.
     * @param message ReqPhotoRaw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPhotoRaw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPhotoRaw message, length delimited. Does not implicitly {@link ReqPhotoRaw.verify|verify} messages.
     * @param message ReqPhotoRaw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPhotoRaw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPhotoRaw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPhotoRaw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPhotoRaw;

    /**
     * Decodes a ReqPhotoRaw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPhotoRaw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPhotoRaw;

    /**
     * Verifies a ReqPhotoRaw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPhotoRaw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPhotoRaw
     */
    public static fromObject(object: { [k: string]: any }): ReqPhotoRaw;

    /**
     * Creates a plain object from a ReqPhotoRaw message. Also converts values to other types if specified.
     * @param message ReqPhotoRaw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPhotoRaw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPhotoRaw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqPhotoRaw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetRtspBitRateType. */
export class ReqSetRtspBitRateType implements IReqSetRtspBitRateType {

    /**
     * Constructs a new ReqSetRtspBitRateType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetRtspBitRateType);

    /** ReqSetRtspBitRateType bitrateType. */
    public bitrateType: number;

    /**
     * Creates a new ReqSetRtspBitRateType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetRtspBitRateType instance
     */
    public static create(properties?: IReqSetRtspBitRateType): ReqSetRtspBitRateType;

    /**
     * Encodes the specified ReqSetRtspBitRateType message. Does not implicitly {@link ReqSetRtspBitRateType.verify|verify} messages.
     * @param message ReqSetRtspBitRateType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetRtspBitRateType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetRtspBitRateType message, length delimited. Does not implicitly {@link ReqSetRtspBitRateType.verify|verify} messages.
     * @param message ReqSetRtspBitRateType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetRtspBitRateType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetRtspBitRateType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetRtspBitRateType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetRtspBitRateType;

    /**
     * Decodes a ReqSetRtspBitRateType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetRtspBitRateType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetRtspBitRateType;

    /**
     * Verifies a ReqSetRtspBitRateType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetRtspBitRateType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetRtspBitRateType
     */
    public static fromObject(object: { [k: string]: any }): ReqSetRtspBitRateType;

    /**
     * Creates a plain object from a ReqSetRtspBitRateType message. Also converts values to other types if specified.
     * @param message ReqSetRtspBitRateType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetRtspBitRateType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetRtspBitRateType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetRtspBitRateType
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqDisableAllIspProcessing. */
export class ReqDisableAllIspProcessing implements IReqDisableAllIspProcessing {

    /**
     * Constructs a new ReqDisableAllIspProcessing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDisableAllIspProcessing);

    /**
     * Creates a new ReqDisableAllIspProcessing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDisableAllIspProcessing instance
     */
    public static create(properties?: IReqDisableAllIspProcessing): ReqDisableAllIspProcessing;

    /**
     * Encodes the specified ReqDisableAllIspProcessing message. Does not implicitly {@link ReqDisableAllIspProcessing.verify|verify} messages.
     * @param message ReqDisableAllIspProcessing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDisableAllIspProcessing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDisableAllIspProcessing message, length delimited. Does not implicitly {@link ReqDisableAllIspProcessing.verify|verify} messages.
     * @param message ReqDisableAllIspProcessing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDisableAllIspProcessing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDisableAllIspProcessing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDisableAllIspProcessing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDisableAllIspProcessing;

    /**
     * Decodes a ReqDisableAllIspProcessing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDisableAllIspProcessing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDisableAllIspProcessing;

    /**
     * Verifies a ReqDisableAllIspProcessing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDisableAllIspProcessing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDisableAllIspProcessing
     */
    public static fromObject(object: { [k: string]: any }): ReqDisableAllIspProcessing;

    /**
     * Creates a plain object from a ReqDisableAllIspProcessing message. Also converts values to other types if specified.
     * @param message ReqDisableAllIspProcessing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDisableAllIspProcessing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDisableAllIspProcessing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDisableAllIspProcessing
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqEnableAllIspProcessing. */
export class ReqEnableAllIspProcessing implements IReqEnableAllIspProcessing {

    /**
     * Constructs a new ReqEnableAllIspProcessing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqEnableAllIspProcessing);

    /**
     * Creates a new ReqEnableAllIspProcessing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqEnableAllIspProcessing instance
     */
    public static create(properties?: IReqEnableAllIspProcessing): ReqEnableAllIspProcessing;

    /**
     * Encodes the specified ReqEnableAllIspProcessing message. Does not implicitly {@link ReqEnableAllIspProcessing.verify|verify} messages.
     * @param message ReqEnableAllIspProcessing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqEnableAllIspProcessing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqEnableAllIspProcessing message, length delimited. Does not implicitly {@link ReqEnableAllIspProcessing.verify|verify} messages.
     * @param message ReqEnableAllIspProcessing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqEnableAllIspProcessing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqEnableAllIspProcessing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqEnableAllIspProcessing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqEnableAllIspProcessing;

    /**
     * Decodes a ReqEnableAllIspProcessing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqEnableAllIspProcessing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqEnableAllIspProcessing;

    /**
     * Verifies a ReqEnableAllIspProcessing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqEnableAllIspProcessing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqEnableAllIspProcessing
     */
    public static fromObject(object: { [k: string]: any }): ReqEnableAllIspProcessing;

    /**
     * Creates a plain object from a ReqEnableAllIspProcessing message. Also converts values to other types if specified.
     * @param message ReqEnableAllIspProcessing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqEnableAllIspProcessing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqEnableAllIspProcessing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqEnableAllIspProcessing
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqManualSingleStepFocus. */
export class ReqManualSingleStepFocus implements IReqManualSingleStepFocus {

    /**
     * Constructs a new ReqManualSingleStepFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqManualSingleStepFocus);

    /** ReqManualSingleStepFocus direction. */
    public direction: number;

    /**
     * Creates a new ReqManualSingleStepFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqManualSingleStepFocus instance
     */
    public static create(properties?: IReqManualSingleStepFocus): ReqManualSingleStepFocus;

    /**
     * Encodes the specified ReqManualSingleStepFocus message. Does not implicitly {@link ReqManualSingleStepFocus.verify|verify} messages.
     * @param message ReqManualSingleStepFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqManualSingleStepFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqManualSingleStepFocus message, length delimited. Does not implicitly {@link ReqManualSingleStepFocus.verify|verify} messages.
     * @param message ReqManualSingleStepFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqManualSingleStepFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqManualSingleStepFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqManualSingleStepFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqManualSingleStepFocus;

    /**
     * Decodes a ReqManualSingleStepFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqManualSingleStepFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqManualSingleStepFocus;

    /**
     * Verifies a ReqManualSingleStepFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqManualSingleStepFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqManualSingleStepFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqManualSingleStepFocus;

    /**
     * Creates a plain object from a ReqManualSingleStepFocus message. Also converts values to other types if specified.
     * @param message ReqManualSingleStepFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqManualSingleStepFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqManualSingleStepFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqManualSingleStepFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqManualContinuFocus. */
export class ReqManualContinuFocus implements IReqManualContinuFocus {

    /**
     * Constructs a new ReqManualContinuFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqManualContinuFocus);

    /** ReqManualContinuFocus direction. */
    public direction: number;

    /**
     * Creates a new ReqManualContinuFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqManualContinuFocus instance
     */
    public static create(properties?: IReqManualContinuFocus): ReqManualContinuFocus;

    /**
     * Encodes the specified ReqManualContinuFocus message. Does not implicitly {@link ReqManualContinuFocus.verify|verify} messages.
     * @param message ReqManualContinuFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqManualContinuFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqManualContinuFocus message, length delimited. Does not implicitly {@link ReqManualContinuFocus.verify|verify} messages.
     * @param message ReqManualContinuFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqManualContinuFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqManualContinuFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqManualContinuFocus;

    /**
     * Decodes a ReqManualContinuFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqManualContinuFocus;

    /**
     * Verifies a ReqManualContinuFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqManualContinuFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqManualContinuFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqManualContinuFocus;

    /**
     * Creates a plain object from a ReqManualContinuFocus message. Also converts values to other types if specified.
     * @param message ReqManualContinuFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqManualContinuFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqManualContinuFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqManualContinuFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopManualContinuFocus. */
export class ReqStopManualContinuFocus implements IReqStopManualContinuFocus {

    /**
     * Constructs a new ReqStopManualContinuFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopManualContinuFocus);

    /**
     * Creates a new ReqStopManualContinuFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopManualContinuFocus instance
     */
    public static create(properties?: IReqStopManualContinuFocus): ReqStopManualContinuFocus;

    /**
     * Encodes the specified ReqStopManualContinuFocus message. Does not implicitly {@link ReqStopManualContinuFocus.verify|verify} messages.
     * @param message ReqStopManualContinuFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopManualContinuFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopManualContinuFocus message, length delimited. Does not implicitly {@link ReqStopManualContinuFocus.verify|verify} messages.
     * @param message ReqStopManualContinuFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopManualContinuFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopManualContinuFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopManualContinuFocus;

    /**
     * Decodes a ReqStopManualContinuFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopManualContinuFocus;

    /**
     * Verifies a ReqStopManualContinuFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopManualContinuFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopManualContinuFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqStopManualContinuFocus;

    /**
     * Creates a plain object from a ReqStopManualContinuFocus message. Also converts values to other types if specified.
     * @param message ReqStopManualContinuFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopManualContinuFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopManualContinuFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopManualContinuFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqNormalAutoFocus. */
export class ReqNormalAutoFocus implements IReqNormalAutoFocus {

    /**
     * Constructs a new ReqNormalAutoFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqNormalAutoFocus);

    /** ReqNormalAutoFocus mode. */
    public mode: number;

    /** ReqNormalAutoFocus centerX. */
    public centerX: number;

    /** ReqNormalAutoFocus centerY. */
    public centerY: number;

    /**
     * Creates a new ReqNormalAutoFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqNormalAutoFocus instance
     */
    public static create(properties?: IReqNormalAutoFocus): ReqNormalAutoFocus;

    /**
     * Encodes the specified ReqNormalAutoFocus message. Does not implicitly {@link ReqNormalAutoFocus.verify|verify} messages.
     * @param message ReqNormalAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqNormalAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqNormalAutoFocus message, length delimited. Does not implicitly {@link ReqNormalAutoFocus.verify|verify} messages.
     * @param message ReqNormalAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqNormalAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqNormalAutoFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqNormalAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqNormalAutoFocus;

    /**
     * Decodes a ReqNormalAutoFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqNormalAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqNormalAutoFocus;

    /**
     * Verifies a ReqNormalAutoFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqNormalAutoFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqNormalAutoFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqNormalAutoFocus;

    /**
     * Creates a plain object from a ReqNormalAutoFocus message. Also converts values to other types if specified.
     * @param message ReqNormalAutoFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqNormalAutoFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqNormalAutoFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqNormalAutoFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqAstroAutoFocus. */
export class ReqAstroAutoFocus implements IReqAstroAutoFocus {

    /**
     * Constructs a new ReqAstroAutoFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqAstroAutoFocus);

    /** ReqAstroAutoFocus mode. */
    public mode: number;

    /**
     * Creates a new ReqAstroAutoFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqAstroAutoFocus instance
     */
    public static create(properties?: IReqAstroAutoFocus): ReqAstroAutoFocus;

    /**
     * Encodes the specified ReqAstroAutoFocus message. Does not implicitly {@link ReqAstroAutoFocus.verify|verify} messages.
     * @param message ReqAstroAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqAstroAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqAstroAutoFocus message, length delimited. Does not implicitly {@link ReqAstroAutoFocus.verify|verify} messages.
     * @param message ReqAstroAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqAstroAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqAstroAutoFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqAstroAutoFocus;

    /**
     * Decodes a ReqAstroAutoFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqAstroAutoFocus;

    /**
     * Verifies a ReqAstroAutoFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqAstroAutoFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqAstroAutoFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqAstroAutoFocus;

    /**
     * Creates a plain object from a ReqAstroAutoFocus message. Also converts values to other types if specified.
     * @param message ReqAstroAutoFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqAstroAutoFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqAstroAutoFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqAstroAutoFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopAstroAutoFocus. */
export class ReqStopAstroAutoFocus implements IReqStopAstroAutoFocus {

    /**
     * Constructs a new ReqStopAstroAutoFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopAstroAutoFocus);

    /**
     * Creates a new ReqStopAstroAutoFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopAstroAutoFocus instance
     */
    public static create(properties?: IReqStopAstroAutoFocus): ReqStopAstroAutoFocus;

    /**
     * Encodes the specified ReqStopAstroAutoFocus message. Does not implicitly {@link ReqStopAstroAutoFocus.verify|verify} messages.
     * @param message ReqStopAstroAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopAstroAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopAstroAutoFocus message, length delimited. Does not implicitly {@link ReqStopAstroAutoFocus.verify|verify} messages.
     * @param message ReqStopAstroAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopAstroAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopAstroAutoFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopAstroAutoFocus;

    /**
     * Decodes a ReqStopAstroAutoFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopAstroAutoFocus;

    /**
     * Verifies a ReqStopAstroAutoFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopAstroAutoFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopAstroAutoFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqStopAstroAutoFocus;

    /**
     * Creates a plain object from a ReqStopAstroAutoFocus message. Also converts values to other types if specified.
     * @param message ReqStopAstroAutoFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopAstroAutoFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopAstroAutoFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopAstroAutoFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorServiceJoystick. */
export class ReqMotorServiceJoystick implements IReqMotorServiceJoystick {

    /**
     * Constructs a new ReqMotorServiceJoystick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorServiceJoystick);

    /** ReqMotorServiceJoystick vectorAngle. */
    public vectorAngle: number;

    /** ReqMotorServiceJoystick vectorLength. */
    public vectorLength: number;

    /** ReqMotorServiceJoystick speed. */
    public speed: number;

    /**
     * Creates a new ReqMotorServiceJoystick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorServiceJoystick instance
     */
    public static create(properties?: IReqMotorServiceJoystick): ReqMotorServiceJoystick;

    /**
     * Encodes the specified ReqMotorServiceJoystick message. Does not implicitly {@link ReqMotorServiceJoystick.verify|verify} messages.
     * @param message ReqMotorServiceJoystick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorServiceJoystick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorServiceJoystick message, length delimited. Does not implicitly {@link ReqMotorServiceJoystick.verify|verify} messages.
     * @param message ReqMotorServiceJoystick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorServiceJoystick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorServiceJoystick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorServiceJoystick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorServiceJoystick;

    /**
     * Decodes a ReqMotorServiceJoystick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorServiceJoystick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorServiceJoystick;

    /**
     * Verifies a ReqMotorServiceJoystick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorServiceJoystick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorServiceJoystick
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorServiceJoystick;

    /**
     * Creates a plain object from a ReqMotorServiceJoystick message. Also converts values to other types if specified.
     * @param message ReqMotorServiceJoystick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorServiceJoystick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorServiceJoystick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorServiceJoystick
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorServiceJoystickFixedAngle. */
export class ReqMotorServiceJoystickFixedAngle implements IReqMotorServiceJoystickFixedAngle {

    /**
     * Constructs a new ReqMotorServiceJoystickFixedAngle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorServiceJoystickFixedAngle);

    /** ReqMotorServiceJoystickFixedAngle vectorAngle. */
    public vectorAngle: number;

    /** ReqMotorServiceJoystickFixedAngle vectorLength. */
    public vectorLength: number;

    /** ReqMotorServiceJoystickFixedAngle speed. */
    public speed: number;

    /**
     * Creates a new ReqMotorServiceJoystickFixedAngle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorServiceJoystickFixedAngle instance
     */
    public static create(properties?: IReqMotorServiceJoystickFixedAngle): ReqMotorServiceJoystickFixedAngle;

    /**
     * Encodes the specified ReqMotorServiceJoystickFixedAngle message. Does not implicitly {@link ReqMotorServiceJoystickFixedAngle.verify|verify} messages.
     * @param message ReqMotorServiceJoystickFixedAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorServiceJoystickFixedAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorServiceJoystickFixedAngle message, length delimited. Does not implicitly {@link ReqMotorServiceJoystickFixedAngle.verify|verify} messages.
     * @param message ReqMotorServiceJoystickFixedAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorServiceJoystickFixedAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorServiceJoystickFixedAngle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorServiceJoystickFixedAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorServiceJoystickFixedAngle;

    /**
     * Decodes a ReqMotorServiceJoystickFixedAngle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorServiceJoystickFixedAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorServiceJoystickFixedAngle;

    /**
     * Verifies a ReqMotorServiceJoystickFixedAngle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorServiceJoystickFixedAngle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorServiceJoystickFixedAngle
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorServiceJoystickFixedAngle;

    /**
     * Creates a plain object from a ReqMotorServiceJoystickFixedAngle message. Also converts values to other types if specified.
     * @param message ReqMotorServiceJoystickFixedAngle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorServiceJoystickFixedAngle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorServiceJoystickFixedAngle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorServiceJoystickFixedAngle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorServiceJoystickStop. */
export class ReqMotorServiceJoystickStop implements IReqMotorServiceJoystickStop {

    /**
     * Constructs a new ReqMotorServiceJoystickStop.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorServiceJoystickStop);

    /**
     * Creates a new ReqMotorServiceJoystickStop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorServiceJoystickStop instance
     */
    public static create(properties?: IReqMotorServiceJoystickStop): ReqMotorServiceJoystickStop;

    /**
     * Encodes the specified ReqMotorServiceJoystickStop message. Does not implicitly {@link ReqMotorServiceJoystickStop.verify|verify} messages.
     * @param message ReqMotorServiceJoystickStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorServiceJoystickStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorServiceJoystickStop message, length delimited. Does not implicitly {@link ReqMotorServiceJoystickStop.verify|verify} messages.
     * @param message ReqMotorServiceJoystickStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorServiceJoystickStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorServiceJoystickStop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorServiceJoystickStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorServiceJoystickStop;

    /**
     * Decodes a ReqMotorServiceJoystickStop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorServiceJoystickStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorServiceJoystickStop;

    /**
     * Verifies a ReqMotorServiceJoystickStop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorServiceJoystickStop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorServiceJoystickStop
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorServiceJoystickStop;

    /**
     * Creates a plain object from a ReqMotorServiceJoystickStop message. Also converts values to other types if specified.
     * @param message ReqMotorServiceJoystickStop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorServiceJoystickStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorServiceJoystickStop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorServiceJoystickStop
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorRun. */
export class ReqMotorRun implements IReqMotorRun {

    /**
     * Constructs a new ReqMotorRun.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorRun);

    /** ReqMotorRun id. */
    public id: number;

    /** ReqMotorRun speed. */
    public speed: number;

    /** ReqMotorRun direction. */
    public direction: boolean;

    /** ReqMotorRun speedRamping. */
    public speedRamping: number;

    /** ReqMotorRun resolutionLevel. */
    public resolutionLevel: number;

    /**
     * Creates a new ReqMotorRun instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorRun instance
     */
    public static create(properties?: IReqMotorRun): ReqMotorRun;

    /**
     * Encodes the specified ReqMotorRun message. Does not implicitly {@link ReqMotorRun.verify|verify} messages.
     * @param message ReqMotorRun message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorRun, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorRun message, length delimited. Does not implicitly {@link ReqMotorRun.verify|verify} messages.
     * @param message ReqMotorRun message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorRun, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorRun message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorRun;

    /**
     * Decodes a ReqMotorRun message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorRun;

    /**
     * Verifies a ReqMotorRun message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorRun message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorRun
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorRun;

    /**
     * Creates a plain object from a ReqMotorRun message. Also converts values to other types if specified.
     * @param message ReqMotorRun
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorRun, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorRun to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorRun
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorRunInPulse. */
export class ReqMotorRunInPulse implements IReqMotorRunInPulse {

    /**
     * Constructs a new ReqMotorRunInPulse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorRunInPulse);

    /** ReqMotorRunInPulse id. */
    public id: number;

    /** ReqMotorRunInPulse frequency. */
    public frequency: number;

    /** ReqMotorRunInPulse direction. */
    public direction: boolean;

    /** ReqMotorRunInPulse speedRamping. */
    public speedRamping: number;

    /** ReqMotorRunInPulse resolution. */
    public resolution: number;

    /** ReqMotorRunInPulse pulse. */
    public pulse: number;

    /** ReqMotorRunInPulse mode. */
    public mode: boolean;

    /**
     * Creates a new ReqMotorRunInPulse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorRunInPulse instance
     */
    public static create(properties?: IReqMotorRunInPulse): ReqMotorRunInPulse;

    /**
     * Encodes the specified ReqMotorRunInPulse message. Does not implicitly {@link ReqMotorRunInPulse.verify|verify} messages.
     * @param message ReqMotorRunInPulse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorRunInPulse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorRunInPulse message, length delimited. Does not implicitly {@link ReqMotorRunInPulse.verify|verify} messages.
     * @param message ReqMotorRunInPulse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorRunInPulse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorRunInPulse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorRunInPulse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorRunInPulse;

    /**
     * Decodes a ReqMotorRunInPulse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorRunInPulse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorRunInPulse;

    /**
     * Verifies a ReqMotorRunInPulse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorRunInPulse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorRunInPulse
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorRunInPulse;

    /**
     * Creates a plain object from a ReqMotorRunInPulse message. Also converts values to other types if specified.
     * @param message ReqMotorRunInPulse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorRunInPulse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorRunInPulse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorRunInPulse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorRunTo. */
export class ReqMotorRunTo implements IReqMotorRunTo {

    /**
     * Constructs a new ReqMotorRunTo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorRunTo);

    /** ReqMotorRunTo id. */
    public id: number;

    /** ReqMotorRunTo endPosition. */
    public endPosition: number;

    /** ReqMotorRunTo speed. */
    public speed: number;

    /** ReqMotorRunTo speedRamping. */
    public speedRamping: number;

    /** ReqMotorRunTo resolutionLevel. */
    public resolutionLevel: number;

    /**
     * Creates a new ReqMotorRunTo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorRunTo instance
     */
    public static create(properties?: IReqMotorRunTo): ReqMotorRunTo;

    /**
     * Encodes the specified ReqMotorRunTo message. Does not implicitly {@link ReqMotorRunTo.verify|verify} messages.
     * @param message ReqMotorRunTo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorRunTo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorRunTo message, length delimited. Does not implicitly {@link ReqMotorRunTo.verify|verify} messages.
     * @param message ReqMotorRunTo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorRunTo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorRunTo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorRunTo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorRunTo;

    /**
     * Decodes a ReqMotorRunTo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorRunTo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorRunTo;

    /**
     * Verifies a ReqMotorRunTo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorRunTo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorRunTo
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorRunTo;

    /**
     * Creates a plain object from a ReqMotorRunTo message. Also converts values to other types if specified.
     * @param message ReqMotorRunTo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorRunTo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorRunTo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorRunTo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorGetPosition. */
export class ReqMotorGetPosition implements IReqMotorGetPosition {

    /**
     * Constructs a new ReqMotorGetPosition.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorGetPosition);

    /** ReqMotorGetPosition id. */
    public id: number;

    /**
     * Creates a new ReqMotorGetPosition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorGetPosition instance
     */
    public static create(properties?: IReqMotorGetPosition): ReqMotorGetPosition;

    /**
     * Encodes the specified ReqMotorGetPosition message. Does not implicitly {@link ReqMotorGetPosition.verify|verify} messages.
     * @param message ReqMotorGetPosition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorGetPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorGetPosition message, length delimited. Does not implicitly {@link ReqMotorGetPosition.verify|verify} messages.
     * @param message ReqMotorGetPosition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorGetPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorGetPosition message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorGetPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorGetPosition;

    /**
     * Decodes a ReqMotorGetPosition message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorGetPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorGetPosition;

    /**
     * Verifies a ReqMotorGetPosition message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorGetPosition message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorGetPosition
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorGetPosition;

    /**
     * Creates a plain object from a ReqMotorGetPosition message. Also converts values to other types if specified.
     * @param message ReqMotorGetPosition
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorGetPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorGetPosition to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorGetPosition
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorStop. */
export class ReqMotorStop implements IReqMotorStop {

    /**
     * Constructs a new ReqMotorStop.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorStop);

    /** ReqMotorStop id. */
    public id: number;

    /**
     * Creates a new ReqMotorStop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorStop instance
     */
    public static create(properties?: IReqMotorStop): ReqMotorStop;

    /**
     * Encodes the specified ReqMotorStop message. Does not implicitly {@link ReqMotorStop.verify|verify} messages.
     * @param message ReqMotorStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorStop message, length delimited. Does not implicitly {@link ReqMotorStop.verify|verify} messages.
     * @param message ReqMotorStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorStop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorStop;

    /**
     * Decodes a ReqMotorStop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorStop;

    /**
     * Verifies a ReqMotorStop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorStop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorStop
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorStop;

    /**
     * Creates a plain object from a ReqMotorStop message. Also converts values to other types if specified.
     * @param message ReqMotorStop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorStop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorStop
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorReset. */
export class ReqMotorReset implements IReqMotorReset {

    /**
     * Constructs a new ReqMotorReset.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorReset);

    /** ReqMotorReset id. */
    public id: number;

    /** ReqMotorReset direction. */
    public direction: boolean;

    /**
     * Creates a new ReqMotorReset instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorReset instance
     */
    public static create(properties?: IReqMotorReset): ReqMotorReset;

    /**
     * Encodes the specified ReqMotorReset message. Does not implicitly {@link ReqMotorReset.verify|verify} messages.
     * @param message ReqMotorReset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorReset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorReset message, length delimited. Does not implicitly {@link ReqMotorReset.verify|verify} messages.
     * @param message ReqMotorReset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorReset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorReset message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorReset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorReset;

    /**
     * Decodes a ReqMotorReset message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorReset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorReset;

    /**
     * Verifies a ReqMotorReset message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorReset message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorReset
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorReset;

    /**
     * Creates a plain object from a ReqMotorReset message. Also converts values to other types if specified.
     * @param message ReqMotorReset
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorReset, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorReset to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorReset
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorChangeSpeed. */
export class ReqMotorChangeSpeed implements IReqMotorChangeSpeed {

    /**
     * Constructs a new ReqMotorChangeSpeed.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorChangeSpeed);

    /** ReqMotorChangeSpeed id. */
    public id: number;

    /** ReqMotorChangeSpeed speed. */
    public speed: number;

    /**
     * Creates a new ReqMotorChangeSpeed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorChangeSpeed instance
     */
    public static create(properties?: IReqMotorChangeSpeed): ReqMotorChangeSpeed;

    /**
     * Encodes the specified ReqMotorChangeSpeed message. Does not implicitly {@link ReqMotorChangeSpeed.verify|verify} messages.
     * @param message ReqMotorChangeSpeed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorChangeSpeed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorChangeSpeed message, length delimited. Does not implicitly {@link ReqMotorChangeSpeed.verify|verify} messages.
     * @param message ReqMotorChangeSpeed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorChangeSpeed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorChangeSpeed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorChangeSpeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorChangeSpeed;

    /**
     * Decodes a ReqMotorChangeSpeed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorChangeSpeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorChangeSpeed;

    /**
     * Verifies a ReqMotorChangeSpeed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorChangeSpeed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorChangeSpeed
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorChangeSpeed;

    /**
     * Creates a plain object from a ReqMotorChangeSpeed message. Also converts values to other types if specified.
     * @param message ReqMotorChangeSpeed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorChangeSpeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorChangeSpeed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorChangeSpeed
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMotorChangeDirection. */
export class ReqMotorChangeDirection implements IReqMotorChangeDirection {

    /**
     * Constructs a new ReqMotorChangeDirection.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMotorChangeDirection);

    /** ReqMotorChangeDirection id. */
    public id: number;

    /** ReqMotorChangeDirection direction. */
    public direction: boolean;

    /**
     * Creates a new ReqMotorChangeDirection instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMotorChangeDirection instance
     */
    public static create(properties?: IReqMotorChangeDirection): ReqMotorChangeDirection;

    /**
     * Encodes the specified ReqMotorChangeDirection message. Does not implicitly {@link ReqMotorChangeDirection.verify|verify} messages.
     * @param message ReqMotorChangeDirection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMotorChangeDirection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMotorChangeDirection message, length delimited. Does not implicitly {@link ReqMotorChangeDirection.verify|verify} messages.
     * @param message ReqMotorChangeDirection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMotorChangeDirection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMotorChangeDirection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMotorChangeDirection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMotorChangeDirection;

    /**
     * Decodes a ReqMotorChangeDirection message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMotorChangeDirection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMotorChangeDirection;

    /**
     * Verifies a ReqMotorChangeDirection message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMotorChangeDirection message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMotorChangeDirection
     */
    public static fromObject(object: { [k: string]: any }): ReqMotorChangeDirection;

    /**
     * Creates a plain object from a ReqMotorChangeDirection message. Also converts values to other types if specified.
     * @param message ReqMotorChangeDirection
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMotorChangeDirection, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMotorChangeDirection to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMotorChangeDirection
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResMotor. */
export class ResMotor implements IResMotor {

    /**
     * Constructs a new ResMotor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResMotor);

    /** ResMotor id. */
    public id: number;

    /** ResMotor code. */
    public code: number;

    /**
     * Creates a new ResMotor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResMotor instance
     */
    public static create(properties?: IResMotor): ResMotor;

    /**
     * Encodes the specified ResMotor message. Does not implicitly {@link ResMotor.verify|verify} messages.
     * @param message ResMotor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResMotor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResMotor message, length delimited. Does not implicitly {@link ResMotor.verify|verify} messages.
     * @param message ResMotor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResMotor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResMotor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResMotor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResMotor;

    /**
     * Decodes a ResMotor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResMotor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResMotor;

    /**
     * Verifies a ResMotor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResMotor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResMotor
     */
    public static fromObject(object: { [k: string]: any }): ResMotor;

    /**
     * Creates a plain object from a ResMotor message. Also converts values to other types if specified.
     * @param message ResMotor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResMotor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResMotor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResMotor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResMotorPosition. */
export class ResMotorPosition implements IResMotorPosition {

    /**
     * Constructs a new ResMotorPosition.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResMotorPosition);

    /** ResMotorPosition id. */
    public id: number;

    /** ResMotorPosition code. */
    public code: number;

    /** ResMotorPosition position. */
    public position: number;

    /**
     * Creates a new ResMotorPosition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResMotorPosition instance
     */
    public static create(properties?: IResMotorPosition): ResMotorPosition;

    /**
     * Encodes the specified ResMotorPosition message. Does not implicitly {@link ResMotorPosition.verify|verify} messages.
     * @param message ResMotorPosition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResMotorPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResMotorPosition message, length delimited. Does not implicitly {@link ResMotorPosition.verify|verify} messages.
     * @param message ResMotorPosition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResMotorPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResMotorPosition message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResMotorPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResMotorPosition;

    /**
     * Decodes a ResMotorPosition message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResMotorPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResMotorPosition;

    /**
     * Verifies a ResMotorPosition message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResMotorPosition message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResMotorPosition
     */
    public static fromObject(object: { [k: string]: any }): ResMotorPosition;

    /**
     * Creates a plain object from a ResMotorPosition message. Also converts values to other types if specified.
     * @param message ResMotorPosition
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResMotorPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResMotorPosition to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResMotorPosition
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqDualCameraLinkage. */
export class ReqDualCameraLinkage implements IReqDualCameraLinkage {

    /**
     * Constructs a new ReqDualCameraLinkage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDualCameraLinkage);

    /** ReqDualCameraLinkage x. */
    public x: number;

    /** ReqDualCameraLinkage y. */
    public y: number;

    /**
     * Creates a new ReqDualCameraLinkage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDualCameraLinkage instance
     */
    public static create(properties?: IReqDualCameraLinkage): ReqDualCameraLinkage;

    /**
     * Encodes the specified ReqDualCameraLinkage message. Does not implicitly {@link ReqDualCameraLinkage.verify|verify} messages.
     * @param message ReqDualCameraLinkage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDualCameraLinkage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDualCameraLinkage message, length delimited. Does not implicitly {@link ReqDualCameraLinkage.verify|verify} messages.
     * @param message ReqDualCameraLinkage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDualCameraLinkage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDualCameraLinkage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDualCameraLinkage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDualCameraLinkage;

    /**
     * Decodes a ReqDualCameraLinkage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDualCameraLinkage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDualCameraLinkage;

    /**
     * Verifies a ReqDualCameraLinkage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDualCameraLinkage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDualCameraLinkage
     */
    public static fromObject(object: { [k: string]: any }): ReqDualCameraLinkage;

    /**
     * Creates a plain object from a ReqDualCameraLinkage message. Also converts values to other types if specified.
     * @param message ReqDualCameraLinkage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDualCameraLinkage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDualCameraLinkage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDualCameraLinkage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** State enum. */
export enum State {
    STATE_IDLE = 0,
    STATE_RUNNING = 1,
    STATE_STOPPING = 2,
    STATE_STOPPED = 3,
    STATE_SUCCESS = 4,
    STATE_FAILED = 5,
    STATE_ASTRO_PLATE_SOLVING = 6
}

/** OperationState enum. */
export enum OperationState {
    OPERATION_STATE_IDLE = 0,
    OPERATION_STATE_RUNNING = 1,
    OPERATION_STATE_STOPPING = 2,
    OPERATION_STATE_STOPPED = 3
}

/** AstroState enum. */
export enum AstroState {
    ASTRO_STATE_IDLE = 0,
    ASTRO_STATE_RUNNING = 1,
    ASTRO_STATE_STOPPING = 2,
    ASTRO_STATE_STOPPED = 3,
    ASTRO_STATE_PLATE_SOLVING = 4
}

/** SentryModeState enum. */
export enum SentryModeState {
    SENTRY_MODE_STATE_IDLE = 0,
    SENTRY_MODE_STATE_INIT = 1,
    SENTRY_MODE_STATE_DETECT = 2,
    SENTRY_MODE_STATE_TRACK = 3,
    SENTRY_MODE_STATE_TRACK_FINISH = 4,
    SENTRY_MODE_STATE_STOPPING = 5
}

/** Represents a ResNotifyPictureMatching. */
export class ResNotifyPictureMatching implements IResNotifyPictureMatching {

    /**
     * Constructs a new ResNotifyPictureMatching.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPictureMatching);

    /** ResNotifyPictureMatching x. */
    public x: number;

    /** ResNotifyPictureMatching y. */
    public y: number;

    /** ResNotifyPictureMatching width. */
    public width: number;

    /** ResNotifyPictureMatching height. */
    public height: number;

    /** ResNotifyPictureMatching value. */
    public value: number;

    /** ResNotifyPictureMatching code. */
    public code: number;

    /**
     * Creates a new ResNotifyPictureMatching instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPictureMatching instance
     */
    public static create(properties?: IResNotifyPictureMatching): ResNotifyPictureMatching;

    /**
     * Encodes the specified ResNotifyPictureMatching message. Does not implicitly {@link ResNotifyPictureMatching.verify|verify} messages.
     * @param message ResNotifyPictureMatching message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPictureMatching, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPictureMatching message, length delimited. Does not implicitly {@link ResNotifyPictureMatching.verify|verify} messages.
     * @param message ResNotifyPictureMatching message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPictureMatching, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPictureMatching message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPictureMatching
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPictureMatching;

    /**
     * Decodes a ResNotifyPictureMatching message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPictureMatching
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPictureMatching;

    /**
     * Verifies a ResNotifyPictureMatching message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPictureMatching message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPictureMatching
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPictureMatching;

    /**
     * Creates a plain object from a ResNotifyPictureMatching message. Also converts values to other types if specified.
     * @param message ResNotifyPictureMatching
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPictureMatching, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPictureMatching to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPictureMatching
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifySDcardInfo. */
export class ResNotifySDcardInfo implements IResNotifySDcardInfo {

    /**
     * Constructs a new ResNotifySDcardInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifySDcardInfo);

    /** ResNotifySDcardInfo availableSize. */
    public availableSize: number;

    /** ResNotifySDcardInfo totalSize. */
    public totalSize: number;

    /** ResNotifySDcardInfo code. */
    public code: number;

    /**
     * Creates a new ResNotifySDcardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifySDcardInfo instance
     */
    public static create(properties?: IResNotifySDcardInfo): ResNotifySDcardInfo;

    /**
     * Encodes the specified ResNotifySDcardInfo message. Does not implicitly {@link ResNotifySDcardInfo.verify|verify} messages.
     * @param message ResNotifySDcardInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifySDcardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifySDcardInfo message, length delimited. Does not implicitly {@link ResNotifySDcardInfo.verify|verify} messages.
     * @param message ResNotifySDcardInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifySDcardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifySDcardInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifySDcardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifySDcardInfo;

    /**
     * Decodes a ResNotifySDcardInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifySDcardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifySDcardInfo;

    /**
     * Verifies a ResNotifySDcardInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifySDcardInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifySDcardInfo
     */
    public static fromObject(object: { [k: string]: any }): ResNotifySDcardInfo;

    /**
     * Creates a plain object from a ResNotifySDcardInfo message. Also converts values to other types if specified.
     * @param message ResNotifySDcardInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifySDcardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifySDcardInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifySDcardInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyTemperature. */
export class ResNotifyTemperature implements IResNotifyTemperature {

    /**
     * Constructs a new ResNotifyTemperature.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyTemperature);

    /** ResNotifyTemperature code. */
    public code: number;

    /** ResNotifyTemperature temperature. */
    public temperature: number;

    /**
     * Creates a new ResNotifyTemperature instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyTemperature instance
     */
    public static create(properties?: IResNotifyTemperature): ResNotifyTemperature;

    /**
     * Encodes the specified ResNotifyTemperature message. Does not implicitly {@link ResNotifyTemperature.verify|verify} messages.
     * @param message ResNotifyTemperature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyTemperature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyTemperature message, length delimited. Does not implicitly {@link ResNotifyTemperature.verify|verify} messages.
     * @param message ResNotifyTemperature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyTemperature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyTemperature message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyTemperature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyTemperature;

    /**
     * Decodes a ResNotifyTemperature message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyTemperature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyTemperature;

    /**
     * Verifies a ResNotifyTemperature message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyTemperature message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyTemperature
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyTemperature;

    /**
     * Creates a plain object from a ResNotifyTemperature message. Also converts values to other types if specified.
     * @param message ResNotifyTemperature
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyTemperature, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyTemperature to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyTemperature
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyRecordTime. */
export class ResNotifyRecordTime implements IResNotifyRecordTime {

    /**
     * Constructs a new ResNotifyRecordTime.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyRecordTime);

    /** ResNotifyRecordTime recordTime. */
    public recordTime: number;

    /**
     * Creates a new ResNotifyRecordTime instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyRecordTime instance
     */
    public static create(properties?: IResNotifyRecordTime): ResNotifyRecordTime;

    /**
     * Encodes the specified ResNotifyRecordTime message. Does not implicitly {@link ResNotifyRecordTime.verify|verify} messages.
     * @param message ResNotifyRecordTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyRecordTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyRecordTime message, length delimited. Does not implicitly {@link ResNotifyRecordTime.verify|verify} messages.
     * @param message ResNotifyRecordTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyRecordTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyRecordTime message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyRecordTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyRecordTime;

    /**
     * Decodes a ResNotifyRecordTime message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyRecordTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyRecordTime;

    /**
     * Verifies a ResNotifyRecordTime message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyRecordTime message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyRecordTime
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyRecordTime;

    /**
     * Creates a plain object from a ResNotifyRecordTime message. Also converts values to other types if specified.
     * @param message ResNotifyRecordTime
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyRecordTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyRecordTime to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyRecordTime
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyTimeLapseOutTime. */
export class ResNotifyTimeLapseOutTime implements IResNotifyTimeLapseOutTime {

    /**
     * Constructs a new ResNotifyTimeLapseOutTime.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyTimeLapseOutTime);

    /** ResNotifyTimeLapseOutTime interval. */
    public interval: number;

    /** ResNotifyTimeLapseOutTime outTime. */
    public outTime: number;

    /** ResNotifyTimeLapseOutTime totalTime. */
    public totalTime: number;

    /**
     * Creates a new ResNotifyTimeLapseOutTime instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyTimeLapseOutTime instance
     */
    public static create(properties?: IResNotifyTimeLapseOutTime): ResNotifyTimeLapseOutTime;

    /**
     * Encodes the specified ResNotifyTimeLapseOutTime message. Does not implicitly {@link ResNotifyTimeLapseOutTime.verify|verify} messages.
     * @param message ResNotifyTimeLapseOutTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyTimeLapseOutTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyTimeLapseOutTime message, length delimited. Does not implicitly {@link ResNotifyTimeLapseOutTime.verify|verify} messages.
     * @param message ResNotifyTimeLapseOutTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyTimeLapseOutTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyTimeLapseOutTime message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyTimeLapseOutTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyTimeLapseOutTime;

    /**
     * Decodes a ResNotifyTimeLapseOutTime message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyTimeLapseOutTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyTimeLapseOutTime;

    /**
     * Verifies a ResNotifyTimeLapseOutTime message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyTimeLapseOutTime message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyTimeLapseOutTime
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyTimeLapseOutTime;

    /**
     * Creates a plain object from a ResNotifyTimeLapseOutTime message. Also converts values to other types if specified.
     * @param message ResNotifyTimeLapseOutTime
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyTimeLapseOutTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyTimeLapseOutTime to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyTimeLapseOutTime
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyOperationState. */
export class ResNotifyOperationState implements IResNotifyOperationState {

    /**
     * Constructs a new ResNotifyOperationState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyOperationState);

    /** ResNotifyOperationState state. */
    public state: OperationState;

    /**
     * Creates a new ResNotifyOperationState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyOperationState instance
     */
    public static create(properties?: IResNotifyOperationState): ResNotifyOperationState;

    /**
     * Encodes the specified ResNotifyOperationState message. Does not implicitly {@link ResNotifyOperationState.verify|verify} messages.
     * @param message ResNotifyOperationState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyOperationState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyOperationState message, length delimited. Does not implicitly {@link ResNotifyOperationState.verify|verify} messages.
     * @param message ResNotifyOperationState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyOperationState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyOperationState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyOperationState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyOperationState;

    /**
     * Decodes a ResNotifyOperationState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyOperationState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyOperationState;

    /**
     * Verifies a ResNotifyOperationState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyOperationState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyOperationState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyOperationState;

    /**
     * Creates a plain object from a ResNotifyOperationState message. Also converts values to other types if specified.
     * @param message ResNotifyOperationState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyOperationState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyOperationState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyOperationState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStateAstroCalibration. */
export class ResNotifyStateAstroCalibration implements IResNotifyStateAstroCalibration {

    /**
     * Constructs a new ResNotifyStateAstroCalibration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStateAstroCalibration);

    /** ResNotifyStateAstroCalibration state. */
    public state: AstroState;

    /** ResNotifyStateAstroCalibration plateSolvingTimes. */
    public plateSolvingTimes: number;

    /**
     * Creates a new ResNotifyStateAstroCalibration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStateAstroCalibration instance
     */
    public static create(properties?: IResNotifyStateAstroCalibration): ResNotifyStateAstroCalibration;

    /**
     * Encodes the specified ResNotifyStateAstroCalibration message. Does not implicitly {@link ResNotifyStateAstroCalibration.verify|verify} messages.
     * @param message ResNotifyStateAstroCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStateAstroCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStateAstroCalibration message, length delimited. Does not implicitly {@link ResNotifyStateAstroCalibration.verify|verify} messages.
     * @param message ResNotifyStateAstroCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStateAstroCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStateAstroCalibration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStateAstroCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStateAstroCalibration;

    /**
     * Decodes a ResNotifyStateAstroCalibration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStateAstroCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStateAstroCalibration;

    /**
     * Verifies a ResNotifyStateAstroCalibration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStateAstroCalibration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStateAstroCalibration
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStateAstroCalibration;

    /**
     * Creates a plain object from a ResNotifyStateAstroCalibration message. Also converts values to other types if specified.
     * @param message ResNotifyStateAstroCalibration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStateAstroCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStateAstroCalibration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStateAstroCalibration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStateAstroGoto. */
export class ResNotifyStateAstroGoto implements IResNotifyStateAstroGoto {

    /**
     * Constructs a new ResNotifyStateAstroGoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStateAstroGoto);

    /** ResNotifyStateAstroGoto state. */
    public state: AstroState;

    /**
     * Creates a new ResNotifyStateAstroGoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStateAstroGoto instance
     */
    public static create(properties?: IResNotifyStateAstroGoto): ResNotifyStateAstroGoto;

    /**
     * Encodes the specified ResNotifyStateAstroGoto message. Does not implicitly {@link ResNotifyStateAstroGoto.verify|verify} messages.
     * @param message ResNotifyStateAstroGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStateAstroGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStateAstroGoto message, length delimited. Does not implicitly {@link ResNotifyStateAstroGoto.verify|verify} messages.
     * @param message ResNotifyStateAstroGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStateAstroGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStateAstroGoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStateAstroGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStateAstroGoto;

    /**
     * Decodes a ResNotifyStateAstroGoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStateAstroGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStateAstroGoto;

    /**
     * Verifies a ResNotifyStateAstroGoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStateAstroGoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStateAstroGoto
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStateAstroGoto;

    /**
     * Creates a plain object from a ResNotifyStateAstroGoto message. Also converts values to other types if specified.
     * @param message ResNotifyStateAstroGoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStateAstroGoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStateAstroGoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStateAstroGoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStateAstroTracking. */
export class ResNotifyStateAstroTracking implements IResNotifyStateAstroTracking {

    /**
     * Constructs a new ResNotifyStateAstroTracking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStateAstroTracking);

    /** ResNotifyStateAstroTracking state. */
    public state: OperationState;

    /** ResNotifyStateAstroTracking targetName. */
    public targetName: string;

    /**
     * Creates a new ResNotifyStateAstroTracking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStateAstroTracking instance
     */
    public static create(properties?: IResNotifyStateAstroTracking): ResNotifyStateAstroTracking;

    /**
     * Encodes the specified ResNotifyStateAstroTracking message. Does not implicitly {@link ResNotifyStateAstroTracking.verify|verify} messages.
     * @param message ResNotifyStateAstroTracking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStateAstroTracking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStateAstroTracking message, length delimited. Does not implicitly {@link ResNotifyStateAstroTracking.verify|verify} messages.
     * @param message ResNotifyStateAstroTracking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStateAstroTracking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStateAstroTracking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStateAstroTracking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStateAstroTracking;

    /**
     * Decodes a ResNotifyStateAstroTracking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStateAstroTracking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStateAstroTracking;

    /**
     * Verifies a ResNotifyStateAstroTracking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStateAstroTracking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStateAstroTracking
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStateAstroTracking;

    /**
     * Creates a plain object from a ResNotifyStateAstroTracking message. Also converts values to other types if specified.
     * @param message ResNotifyStateAstroTracking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStateAstroTracking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStateAstroTracking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStateAstroTracking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyProgressCaptureRawDark. */
export class ResNotifyProgressCaptureRawDark implements IResNotifyProgressCaptureRawDark {

    /**
     * Constructs a new ResNotifyProgressCaptureRawDark.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyProgressCaptureRawDark);

    /** ResNotifyProgressCaptureRawDark progress. */
    public progress: number;

    /** ResNotifyProgressCaptureRawDark remainingTime. */
    public remainingTime: number;

    /**
     * Creates a new ResNotifyProgressCaptureRawDark instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyProgressCaptureRawDark instance
     */
    public static create(properties?: IResNotifyProgressCaptureRawDark): ResNotifyProgressCaptureRawDark;

    /**
     * Encodes the specified ResNotifyProgressCaptureRawDark message. Does not implicitly {@link ResNotifyProgressCaptureRawDark.verify|verify} messages.
     * @param message ResNotifyProgressCaptureRawDark message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyProgressCaptureRawDark, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyProgressCaptureRawDark message, length delimited. Does not implicitly {@link ResNotifyProgressCaptureRawDark.verify|verify} messages.
     * @param message ResNotifyProgressCaptureRawDark message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyProgressCaptureRawDark, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyProgressCaptureRawDark message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyProgressCaptureRawDark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyProgressCaptureRawDark;

    /**
     * Decodes a ResNotifyProgressCaptureRawDark message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyProgressCaptureRawDark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyProgressCaptureRawDark;

    /**
     * Verifies a ResNotifyProgressCaptureRawDark message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyProgressCaptureRawDark message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyProgressCaptureRawDark
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyProgressCaptureRawDark;

    /**
     * Creates a plain object from a ResNotifyProgressCaptureRawDark message. Also converts values to other types if specified.
     * @param message ResNotifyProgressCaptureRawDark
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyProgressCaptureRawDark, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyProgressCaptureRawDark to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyProgressCaptureRawDark
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyProgressCaptureRawLiveStacking. */
export class ResNotifyProgressCaptureRawLiveStacking implements IResNotifyProgressCaptureRawLiveStacking {

    /**
     * Constructs a new ResNotifyProgressCaptureRawLiveStacking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyProgressCaptureRawLiveStacking);

    /** ResNotifyProgressCaptureRawLiveStacking totalCount. */
    public totalCount: number;

    /** ResNotifyProgressCaptureRawLiveStacking updateCountType. */
    public updateCountType: number;

    /** ResNotifyProgressCaptureRawLiveStacking currentCount. */
    public currentCount: number;

    /** ResNotifyProgressCaptureRawLiveStacking stackedCount. */
    public stackedCount: number;

    /** ResNotifyProgressCaptureRawLiveStacking expIndex. */
    public expIndex: number;

    /** ResNotifyProgressCaptureRawLiveStacking gainIndex. */
    public gainIndex: number;

    /** ResNotifyProgressCaptureRawLiveStacking targetName. */
    public targetName: string;

    /**
     * Creates a new ResNotifyProgressCaptureRawLiveStacking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyProgressCaptureRawLiveStacking instance
     */
    public static create(properties?: IResNotifyProgressCaptureRawLiveStacking): ResNotifyProgressCaptureRawLiveStacking;

    /**
     * Encodes the specified ResNotifyProgressCaptureRawLiveStacking message. Does not implicitly {@link ResNotifyProgressCaptureRawLiveStacking.verify|verify} messages.
     * @param message ResNotifyProgressCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyProgressCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyProgressCaptureRawLiveStacking message, length delimited. Does not implicitly {@link ResNotifyProgressCaptureRawLiveStacking.verify|verify} messages.
     * @param message ResNotifyProgressCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyProgressCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyProgressCaptureRawLiveStacking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyProgressCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyProgressCaptureRawLiveStacking;

    /**
     * Decodes a ResNotifyProgressCaptureRawLiveStacking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyProgressCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyProgressCaptureRawLiveStacking;

    /**
     * Verifies a ResNotifyProgressCaptureRawLiveStacking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyProgressCaptureRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyProgressCaptureRawLiveStacking
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyProgressCaptureRawLiveStacking;

    /**
     * Creates a plain object from a ResNotifyProgressCaptureRawLiveStacking message. Also converts values to other types if specified.
     * @param message ResNotifyProgressCaptureRawLiveStacking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyProgressCaptureRawLiveStacking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyProgressCaptureRawLiveStacking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyProgressCaptureRawLiveStacking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyParam. */
export class ResNotifyParam implements IResNotifyParam {

    /**
     * Constructs a new ResNotifyParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyParam);

    /** ResNotifyParam param. */
    public param: ICommonParam[];

    /**
     * Creates a new ResNotifyParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyParam instance
     */
    public static create(properties?: IResNotifyParam): ResNotifyParam;

    /**
     * Encodes the specified ResNotifyParam message. Does not implicitly {@link ResNotifyParam.verify|verify} messages.
     * @param message ResNotifyParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyParam message, length delimited. Does not implicitly {@link ResNotifyParam.verify|verify} messages.
     * @param message ResNotifyParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyParam;

    /**
     * Decodes a ResNotifyParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyParam;

    /**
     * Verifies a ResNotifyParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyParam
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyParam;

    /**
     * Creates a plain object from a ResNotifyParam message. Also converts values to other types if specified.
     * @param message ResNotifyParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyParam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyParam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyCamFunctionState. */
export class ResNotifyCamFunctionState implements IResNotifyCamFunctionState {

    /**
     * Constructs a new ResNotifyCamFunctionState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyCamFunctionState);

    /** ResNotifyCamFunctionState state. */
    public state: OperationState;

    /** ResNotifyCamFunctionState functionId. */
    public functionId: number;

    /**
     * Creates a new ResNotifyCamFunctionState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyCamFunctionState instance
     */
    public static create(properties?: IResNotifyCamFunctionState): ResNotifyCamFunctionState;

    /**
     * Encodes the specified ResNotifyCamFunctionState message. Does not implicitly {@link ResNotifyCamFunctionState.verify|verify} messages.
     * @param message ResNotifyCamFunctionState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyCamFunctionState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyCamFunctionState message, length delimited. Does not implicitly {@link ResNotifyCamFunctionState.verify|verify} messages.
     * @param message ResNotifyCamFunctionState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyCamFunctionState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyCamFunctionState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyCamFunctionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyCamFunctionState;

    /**
     * Decodes a ResNotifyCamFunctionState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyCamFunctionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyCamFunctionState;

    /**
     * Verifies a ResNotifyCamFunctionState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyCamFunctionState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyCamFunctionState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyCamFunctionState;

    /**
     * Creates a plain object from a ResNotifyCamFunctionState message. Also converts values to other types if specified.
     * @param message ResNotifyCamFunctionState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyCamFunctionState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyCamFunctionState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyCamFunctionState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyBurstProgress. */
export class ResNotifyBurstProgress implements IResNotifyBurstProgress {

    /**
     * Constructs a new ResNotifyBurstProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyBurstProgress);

    /** ResNotifyBurstProgress totalCount. */
    public totalCount: number;

    /** ResNotifyBurstProgress completedCount. */
    public completedCount: number;

    /**
     * Creates a new ResNotifyBurstProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyBurstProgress instance
     */
    public static create(properties?: IResNotifyBurstProgress): ResNotifyBurstProgress;

    /**
     * Encodes the specified ResNotifyBurstProgress message. Does not implicitly {@link ResNotifyBurstProgress.verify|verify} messages.
     * @param message ResNotifyBurstProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyBurstProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyBurstProgress message, length delimited. Does not implicitly {@link ResNotifyBurstProgress.verify|verify} messages.
     * @param message ResNotifyBurstProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyBurstProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyBurstProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyBurstProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyBurstProgress;

    /**
     * Decodes a ResNotifyBurstProgress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyBurstProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyBurstProgress;

    /**
     * Verifies a ResNotifyBurstProgress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyBurstProgress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyBurstProgress
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyBurstProgress;

    /**
     * Creates a plain object from a ResNotifyBurstProgress message. Also converts values to other types if specified.
     * @param message ResNotifyBurstProgress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyBurstProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyBurstProgress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyBurstProgress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyPanoramaProgress. */
export class ResNotifyPanoramaProgress implements IResNotifyPanoramaProgress {

    /**
     * Constructs a new ResNotifyPanoramaProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPanoramaProgress);

    /** ResNotifyPanoramaProgress totalCount. */
    public totalCount: number;

    /** ResNotifyPanoramaProgress completedCount. */
    public completedCount: number;

    /**
     * Creates a new ResNotifyPanoramaProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPanoramaProgress instance
     */
    public static create(properties?: IResNotifyPanoramaProgress): ResNotifyPanoramaProgress;

    /**
     * Encodes the specified ResNotifyPanoramaProgress message. Does not implicitly {@link ResNotifyPanoramaProgress.verify|verify} messages.
     * @param message ResNotifyPanoramaProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPanoramaProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPanoramaProgress message, length delimited. Does not implicitly {@link ResNotifyPanoramaProgress.verify|verify} messages.
     * @param message ResNotifyPanoramaProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPanoramaProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPanoramaProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPanoramaProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPanoramaProgress;

    /**
     * Decodes a ResNotifyPanoramaProgress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPanoramaProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPanoramaProgress;

    /**
     * Verifies a ResNotifyPanoramaProgress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPanoramaProgress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPanoramaProgress
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPanoramaProgress;

    /**
     * Creates a plain object from a ResNotifyPanoramaProgress message. Also converts values to other types if specified.
     * @param message ResNotifyPanoramaProgress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPanoramaProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPanoramaProgress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPanoramaProgress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyRgbState. */
export class ResNotifyRgbState implements IResNotifyRgbState {

    /**
     * Constructs a new ResNotifyRgbState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyRgbState);

    /** ResNotifyRgbState state. */
    public state: number;

    /**
     * Creates a new ResNotifyRgbState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyRgbState instance
     */
    public static create(properties?: IResNotifyRgbState): ResNotifyRgbState;

    /**
     * Encodes the specified ResNotifyRgbState message. Does not implicitly {@link ResNotifyRgbState.verify|verify} messages.
     * @param message ResNotifyRgbState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyRgbState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyRgbState message, length delimited. Does not implicitly {@link ResNotifyRgbState.verify|verify} messages.
     * @param message ResNotifyRgbState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyRgbState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyRgbState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyRgbState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyRgbState;

    /**
     * Decodes a ResNotifyRgbState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyRgbState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyRgbState;

    /**
     * Verifies a ResNotifyRgbState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyRgbState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyRgbState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyRgbState;

    /**
     * Creates a plain object from a ResNotifyRgbState message. Also converts values to other types if specified.
     * @param message ResNotifyRgbState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyRgbState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyRgbState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyRgbState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyPowerIndState. */
export class ResNotifyPowerIndState implements IResNotifyPowerIndState {

    /**
     * Constructs a new ResNotifyPowerIndState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPowerIndState);

    /** ResNotifyPowerIndState state. */
    public state: number;

    /**
     * Creates a new ResNotifyPowerIndState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPowerIndState instance
     */
    public static create(properties?: IResNotifyPowerIndState): ResNotifyPowerIndState;

    /**
     * Encodes the specified ResNotifyPowerIndState message. Does not implicitly {@link ResNotifyPowerIndState.verify|verify} messages.
     * @param message ResNotifyPowerIndState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPowerIndState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPowerIndState message, length delimited. Does not implicitly {@link ResNotifyPowerIndState.verify|verify} messages.
     * @param message ResNotifyPowerIndState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPowerIndState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPowerIndState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPowerIndState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPowerIndState;

    /**
     * Decodes a ResNotifyPowerIndState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPowerIndState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPowerIndState;

    /**
     * Verifies a ResNotifyPowerIndState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPowerIndState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPowerIndState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPowerIndState;

    /**
     * Creates a plain object from a ResNotifyPowerIndState message. Also converts values to other types if specified.
     * @param message ResNotifyPowerIndState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPowerIndState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPowerIndState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPowerIndState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyHostSlaveMode. */
export class ResNotifyHostSlaveMode implements IResNotifyHostSlaveMode {

    /**
     * Constructs a new ResNotifyHostSlaveMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyHostSlaveMode);

    /** ResNotifyHostSlaveMode mode. */
    public mode: number;

    /** ResNotifyHostSlaveMode lock. */
    public lock: boolean;

    /**
     * Creates a new ResNotifyHostSlaveMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyHostSlaveMode instance
     */
    public static create(properties?: IResNotifyHostSlaveMode): ResNotifyHostSlaveMode;

    /**
     * Encodes the specified ResNotifyHostSlaveMode message. Does not implicitly {@link ResNotifyHostSlaveMode.verify|verify} messages.
     * @param message ResNotifyHostSlaveMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyHostSlaveMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyHostSlaveMode message, length delimited. Does not implicitly {@link ResNotifyHostSlaveMode.verify|verify} messages.
     * @param message ResNotifyHostSlaveMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyHostSlaveMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyHostSlaveMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyHostSlaveMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyHostSlaveMode;

    /**
     * Decodes a ResNotifyHostSlaveMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyHostSlaveMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyHostSlaveMode;

    /**
     * Verifies a ResNotifyHostSlaveMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyHostSlaveMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyHostSlaveMode
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyHostSlaveMode;

    /**
     * Creates a plain object from a ResNotifyHostSlaveMode message. Also converts values to other types if specified.
     * @param message ResNotifyHostSlaveMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyHostSlaveMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyHostSlaveMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyHostSlaveMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyMTPState. */
export class ResNotifyMTPState implements IResNotifyMTPState {

    /**
     * Constructs a new ResNotifyMTPState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyMTPState);

    /** ResNotifyMTPState mode. */
    public mode: number;

    /**
     * Creates a new ResNotifyMTPState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyMTPState instance
     */
    public static create(properties?: IResNotifyMTPState): ResNotifyMTPState;

    /**
     * Encodes the specified ResNotifyMTPState message. Does not implicitly {@link ResNotifyMTPState.verify|verify} messages.
     * @param message ResNotifyMTPState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyMTPState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyMTPState message, length delimited. Does not implicitly {@link ResNotifyMTPState.verify|verify} messages.
     * @param message ResNotifyMTPState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyMTPState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyMTPState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyMTPState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyMTPState;

    /**
     * Decodes a ResNotifyMTPState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyMTPState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyMTPState;

    /**
     * Verifies a ResNotifyMTPState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyMTPState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyMTPState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyMTPState;

    /**
     * Creates a plain object from a ResNotifyMTPState message. Also converts values to other types if specified.
     * @param message ResNotifyMTPState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyMTPState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyMTPState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyMTPState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyTrackResult. */
export class ResNotifyTrackResult implements IResNotifyTrackResult {

    /**
     * Constructs a new ResNotifyTrackResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyTrackResult);

    /** ResNotifyTrackResult x. */
    public x: number;

    /** ResNotifyTrackResult y. */
    public y: number;

    /** ResNotifyTrackResult w. */
    public w: number;

    /** ResNotifyTrackResult h. */
    public h: number;

    /**
     * Creates a new ResNotifyTrackResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyTrackResult instance
     */
    public static create(properties?: IResNotifyTrackResult): ResNotifyTrackResult;

    /**
     * Encodes the specified ResNotifyTrackResult message. Does not implicitly {@link ResNotifyTrackResult.verify|verify} messages.
     * @param message ResNotifyTrackResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyTrackResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyTrackResult message, length delimited. Does not implicitly {@link ResNotifyTrackResult.verify|verify} messages.
     * @param message ResNotifyTrackResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyTrackResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyTrackResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyTrackResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyTrackResult;

    /**
     * Decodes a ResNotifyTrackResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyTrackResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyTrackResult;

    /**
     * Verifies a ResNotifyTrackResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyTrackResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyTrackResult
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyTrackResult;

    /**
     * Creates a plain object from a ResNotifyTrackResult message. Also converts values to other types if specified.
     * @param message ResNotifyTrackResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyTrackResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyTrackResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyTrackResult
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyCPUMode. */
export class ResNotifyCPUMode implements IResNotifyCPUMode {

    /**
     * Constructs a new ResNotifyCPUMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyCPUMode);

    /** ResNotifyCPUMode mode. */
    public mode: number;

    /**
     * Creates a new ResNotifyCPUMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyCPUMode instance
     */
    public static create(properties?: IResNotifyCPUMode): ResNotifyCPUMode;

    /**
     * Encodes the specified ResNotifyCPUMode message. Does not implicitly {@link ResNotifyCPUMode.verify|verify} messages.
     * @param message ResNotifyCPUMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyCPUMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyCPUMode message, length delimited. Does not implicitly {@link ResNotifyCPUMode.verify|verify} messages.
     * @param message ResNotifyCPUMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyCPUMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyCPUMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyCPUMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyCPUMode;

    /**
     * Decodes a ResNotifyCPUMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyCPUMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyCPUMode;

    /**
     * Verifies a ResNotifyCPUMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyCPUMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyCPUMode
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyCPUMode;

    /**
     * Creates a plain object from a ResNotifyCPUMode message. Also converts values to other types if specified.
     * @param message ResNotifyCPUMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyCPUMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyCPUMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyCPUMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStateAstroTrackingSpecial. */
export class ResNotifyStateAstroTrackingSpecial implements IResNotifyStateAstroTrackingSpecial {

    /**
     * Constructs a new ResNotifyStateAstroTrackingSpecial.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStateAstroTrackingSpecial);

    /** ResNotifyStateAstroTrackingSpecial state. */
    public state: OperationState;

    /** ResNotifyStateAstroTrackingSpecial targetName. */
    public targetName: string;

    /** ResNotifyStateAstroTrackingSpecial index. */
    public index: number;

    /**
     * Creates a new ResNotifyStateAstroTrackingSpecial instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStateAstroTrackingSpecial instance
     */
    public static create(properties?: IResNotifyStateAstroTrackingSpecial): ResNotifyStateAstroTrackingSpecial;

    /**
     * Encodes the specified ResNotifyStateAstroTrackingSpecial message. Does not implicitly {@link ResNotifyStateAstroTrackingSpecial.verify|verify} messages.
     * @param message ResNotifyStateAstroTrackingSpecial message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStateAstroTrackingSpecial, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStateAstroTrackingSpecial message, length delimited. Does not implicitly {@link ResNotifyStateAstroTrackingSpecial.verify|verify} messages.
     * @param message ResNotifyStateAstroTrackingSpecial message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStateAstroTrackingSpecial, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStateAstroTrackingSpecial message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStateAstroTrackingSpecial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStateAstroTrackingSpecial;

    /**
     * Decodes a ResNotifyStateAstroTrackingSpecial message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStateAstroTrackingSpecial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStateAstroTrackingSpecial;

    /**
     * Verifies a ResNotifyStateAstroTrackingSpecial message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStateAstroTrackingSpecial message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStateAstroTrackingSpecial
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStateAstroTrackingSpecial;

    /**
     * Creates a plain object from a ResNotifyStateAstroTrackingSpecial message. Also converts values to other types if specified.
     * @param message ResNotifyStateAstroTrackingSpecial
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStateAstroTrackingSpecial, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStateAstroTrackingSpecial to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStateAstroTrackingSpecial
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyPowerOff. */
export class ResNotifyPowerOff implements IResNotifyPowerOff {

    /**
     * Constructs a new ResNotifyPowerOff.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPowerOff);

    /**
     * Creates a new ResNotifyPowerOff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPowerOff instance
     */
    public static create(properties?: IResNotifyPowerOff): ResNotifyPowerOff;

    /**
     * Encodes the specified ResNotifyPowerOff message. Does not implicitly {@link ResNotifyPowerOff.verify|verify} messages.
     * @param message ResNotifyPowerOff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPowerOff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPowerOff message, length delimited. Does not implicitly {@link ResNotifyPowerOff.verify|verify} messages.
     * @param message ResNotifyPowerOff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPowerOff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPowerOff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPowerOff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPowerOff;

    /**
     * Decodes a ResNotifyPowerOff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPowerOff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPowerOff;

    /**
     * Verifies a ResNotifyPowerOff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPowerOff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPowerOff
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPowerOff;

    /**
     * Creates a plain object from a ResNotifyPowerOff message. Also converts values to other types if specified.
     * @param message ResNotifyPowerOff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPowerOff, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPowerOff to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPowerOff
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyAlbumUpdate. */
export class ResNotifyAlbumUpdate implements IResNotifyAlbumUpdate {

    /**
     * Constructs a new ResNotifyAlbumUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyAlbumUpdate);

    /** ResNotifyAlbumUpdate mediaType. */
    public mediaType: number;

    /**
     * Creates a new ResNotifyAlbumUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyAlbumUpdate instance
     */
    public static create(properties?: IResNotifyAlbumUpdate): ResNotifyAlbumUpdate;

    /**
     * Encodes the specified ResNotifyAlbumUpdate message. Does not implicitly {@link ResNotifyAlbumUpdate.verify|verify} messages.
     * @param message ResNotifyAlbumUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyAlbumUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyAlbumUpdate message, length delimited. Does not implicitly {@link ResNotifyAlbumUpdate.verify|verify} messages.
     * @param message ResNotifyAlbumUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyAlbumUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyAlbumUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyAlbumUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyAlbumUpdate;

    /**
     * Decodes a ResNotifyAlbumUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyAlbumUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyAlbumUpdate;

    /**
     * Verifies a ResNotifyAlbumUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyAlbumUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyAlbumUpdate
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyAlbumUpdate;

    /**
     * Creates a plain object from a ResNotifyAlbumUpdate message. Also converts values to other types if specified.
     * @param message ResNotifyAlbumUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyAlbumUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyAlbumUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyAlbumUpdate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStateSentryMode. */
export class ResNotifyStateSentryMode implements IResNotifyStateSentryMode {

    /**
     * Constructs a new ResNotifyStateSentryMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStateSentryMode);

    /** ResNotifyStateSentryMode state. */
    public state: SentryModeState;

    /**
     * Creates a new ResNotifyStateSentryMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStateSentryMode instance
     */
    public static create(properties?: IResNotifyStateSentryMode): ResNotifyStateSentryMode;

    /**
     * Encodes the specified ResNotifyStateSentryMode message. Does not implicitly {@link ResNotifyStateSentryMode.verify|verify} messages.
     * @param message ResNotifyStateSentryMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStateSentryMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStateSentryMode message, length delimited. Does not implicitly {@link ResNotifyStateSentryMode.verify|verify} messages.
     * @param message ResNotifyStateSentryMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStateSentryMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStateSentryMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStateSentryMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStateSentryMode;

    /**
     * Decodes a ResNotifyStateSentryMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStateSentryMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStateSentryMode;

    /**
     * Verifies a ResNotifyStateSentryMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStateSentryMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStateSentryMode
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStateSentryMode;

    /**
     * Creates a plain object from a ResNotifyStateSentryMode message. Also converts values to other types if specified.
     * @param message ResNotifyStateSentryMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStateSentryMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStateSentryMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStateSentryMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyOneClickGotoState. */
export class ResNotifyOneClickGotoState implements IResNotifyOneClickGotoState {

    /**
     * Constructs a new ResNotifyOneClickGotoState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyOneClickGotoState);

    /** ResNotifyOneClickGotoState state. */
    public state: OperationState;

    /**
     * Creates a new ResNotifyOneClickGotoState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyOneClickGotoState instance
     */
    public static create(properties?: IResNotifyOneClickGotoState): ResNotifyOneClickGotoState;

    /**
     * Encodes the specified ResNotifyOneClickGotoState message. Does not implicitly {@link ResNotifyOneClickGotoState.verify|verify} messages.
     * @param message ResNotifyOneClickGotoState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyOneClickGotoState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyOneClickGotoState message, length delimited. Does not implicitly {@link ResNotifyOneClickGotoState.verify|verify} messages.
     * @param message ResNotifyOneClickGotoState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyOneClickGotoState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyOneClickGotoState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyOneClickGotoState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyOneClickGotoState;

    /**
     * Decodes a ResNotifyOneClickGotoState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyOneClickGotoState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyOneClickGotoState;

    /**
     * Verifies a ResNotifyOneClickGotoState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyOneClickGotoState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyOneClickGotoState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyOneClickGotoState;

    /**
     * Creates a plain object from a ResNotifyOneClickGotoState message. Also converts values to other types if specified.
     * @param message ResNotifyOneClickGotoState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyOneClickGotoState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyOneClickGotoState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyOneClickGotoState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStreamType. */
export class ResNotifyStreamType implements IResNotifyStreamType {

    /**
     * Constructs a new ResNotifyStreamType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStreamType);

    /** ResNotifyStreamType streamType. */
    public streamType: number;

    /** ResNotifyStreamType camId. */
    public camId: number;

    /**
     * Creates a new ResNotifyStreamType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStreamType instance
     */
    public static create(properties?: IResNotifyStreamType): ResNotifyStreamType;

    /**
     * Encodes the specified ResNotifyStreamType message. Does not implicitly {@link ResNotifyStreamType.verify|verify} messages.
     * @param message ResNotifyStreamType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStreamType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStreamType message, length delimited. Does not implicitly {@link ResNotifyStreamType.verify|verify} messages.
     * @param message ResNotifyStreamType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStreamType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStreamType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStreamType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStreamType;

    /**
     * Decodes a ResNotifyStreamType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStreamType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStreamType;

    /**
     * Verifies a ResNotifyStreamType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStreamType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStreamType
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStreamType;

    /**
     * Creates a plain object from a ResNotifyStreamType message. Also converts values to other types if specified.
     * @param message ResNotifyStreamType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStreamType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStreamType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStreamType
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyEqSolvingState. */
export class ResNotifyEqSolvingState implements IResNotifyEqSolvingState {

    /**
     * Constructs a new ResNotifyEqSolvingState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyEqSolvingState);

    /** ResNotifyEqSolvingState step. */
    public step: ResNotifyEqSolvingState.Action;

    /** ResNotifyEqSolvingState state. */
    public state: OperationState;

    /**
     * Creates a new ResNotifyEqSolvingState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyEqSolvingState instance
     */
    public static create(properties?: IResNotifyEqSolvingState): ResNotifyEqSolvingState;

    /**
     * Encodes the specified ResNotifyEqSolvingState message. Does not implicitly {@link ResNotifyEqSolvingState.verify|verify} messages.
     * @param message ResNotifyEqSolvingState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyEqSolvingState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyEqSolvingState message, length delimited. Does not implicitly {@link ResNotifyEqSolvingState.verify|verify} messages.
     * @param message ResNotifyEqSolvingState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyEqSolvingState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyEqSolvingState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyEqSolvingState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyEqSolvingState;

    /**
     * Decodes a ResNotifyEqSolvingState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyEqSolvingState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyEqSolvingState;

    /**
     * Verifies a ResNotifyEqSolvingState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyEqSolvingState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyEqSolvingState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyEqSolvingState;

    /**
     * Creates a plain object from a ResNotifyEqSolvingState message. Also converts values to other types if specified.
     * @param message ResNotifyEqSolvingState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyEqSolvingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyEqSolvingState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyEqSolvingState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ResNotifyEqSolvingState {

    /** Action enum. */
    enum Action {
        UNSPECIFIED = 0,
        FOCUS = 1,
        SOLVING = 2
    }
}

/** Represents a ResNotifyLongExpPhotoProgress. */
export class ResNotifyLongExpPhotoProgress implements IResNotifyLongExpPhotoProgress {

    /**
     * Constructs a new ResNotifyLongExpPhotoProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyLongExpPhotoProgress);

    /** ResNotifyLongExpPhotoProgress functionId. */
    public functionId: number;

    /** ResNotifyLongExpPhotoProgress totalTime. */
    public totalTime: number;

    /** ResNotifyLongExpPhotoProgress exposuredTime. */
    public exposuredTime: number;

    /**
     * Creates a new ResNotifyLongExpPhotoProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyLongExpPhotoProgress instance
     */
    public static create(properties?: IResNotifyLongExpPhotoProgress): ResNotifyLongExpPhotoProgress;

    /**
     * Encodes the specified ResNotifyLongExpPhotoProgress message. Does not implicitly {@link ResNotifyLongExpPhotoProgress.verify|verify} messages.
     * @param message ResNotifyLongExpPhotoProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyLongExpPhotoProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyLongExpPhotoProgress message, length delimited. Does not implicitly {@link ResNotifyLongExpPhotoProgress.verify|verify} messages.
     * @param message ResNotifyLongExpPhotoProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyLongExpPhotoProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyLongExpPhotoProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyLongExpPhotoProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyLongExpPhotoProgress;

    /**
     * Decodes a ResNotifyLongExpPhotoProgress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyLongExpPhotoProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyLongExpPhotoProgress;

    /**
     * Verifies a ResNotifyLongExpPhotoProgress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyLongExpPhotoProgress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyLongExpPhotoProgress
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyLongExpPhotoProgress;

    /**
     * Creates a plain object from a ResNotifyLongExpPhotoProgress message. Also converts values to other types if specified.
     * @param message ResNotifyLongExpPhotoProgress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyLongExpPhotoProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyLongExpPhotoProgress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyLongExpPhotoProgress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyShootingScheduleResultAndState. */
export class ResNotifyShootingScheduleResultAndState implements IResNotifyShootingScheduleResultAndState {

    /**
     * Constructs a new ResNotifyShootingScheduleResultAndState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyShootingScheduleResultAndState);

    /** ResNotifyShootingScheduleResultAndState scheduleId. */
    public scheduleId: string;

    /** ResNotifyShootingScheduleResultAndState result. */
    public result: number;

    /** ResNotifyShootingScheduleResultAndState state. */
    public state: number;

    /**
     * Creates a new ResNotifyShootingScheduleResultAndState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyShootingScheduleResultAndState instance
     */
    public static create(properties?: IResNotifyShootingScheduleResultAndState): ResNotifyShootingScheduleResultAndState;

    /**
     * Encodes the specified ResNotifyShootingScheduleResultAndState message. Does not implicitly {@link ResNotifyShootingScheduleResultAndState.verify|verify} messages.
     * @param message ResNotifyShootingScheduleResultAndState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyShootingScheduleResultAndState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyShootingScheduleResultAndState message, length delimited. Does not implicitly {@link ResNotifyShootingScheduleResultAndState.verify|verify} messages.
     * @param message ResNotifyShootingScheduleResultAndState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyShootingScheduleResultAndState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyShootingScheduleResultAndState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyShootingScheduleResultAndState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyShootingScheduleResultAndState;

    /**
     * Decodes a ResNotifyShootingScheduleResultAndState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyShootingScheduleResultAndState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyShootingScheduleResultAndState;

    /**
     * Verifies a ResNotifyShootingScheduleResultAndState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyShootingScheduleResultAndState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyShootingScheduleResultAndState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyShootingScheduleResultAndState;

    /**
     * Creates a plain object from a ResNotifyShootingScheduleResultAndState message. Also converts values to other types if specified.
     * @param message ResNotifyShootingScheduleResultAndState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyShootingScheduleResultAndState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyShootingScheduleResultAndState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyShootingScheduleResultAndState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyShootingTaskState. */
export class ResNotifyShootingTaskState implements IResNotifyShootingTaskState {

    /**
     * Constructs a new ResNotifyShootingTaskState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyShootingTaskState);

    /** ResNotifyShootingTaskState scheduleTaskId. */
    public scheduleTaskId: string;

    /** ResNotifyShootingTaskState state. */
    public state: number;

    /** ResNotifyShootingTaskState code. */
    public code: number;

    /**
     * Creates a new ResNotifyShootingTaskState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyShootingTaskState instance
     */
    public static create(properties?: IResNotifyShootingTaskState): ResNotifyShootingTaskState;

    /**
     * Encodes the specified ResNotifyShootingTaskState message. Does not implicitly {@link ResNotifyShootingTaskState.verify|verify} messages.
     * @param message ResNotifyShootingTaskState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyShootingTaskState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyShootingTaskState message, length delimited. Does not implicitly {@link ResNotifyShootingTaskState.verify|verify} messages.
     * @param message ResNotifyShootingTaskState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyShootingTaskState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyShootingTaskState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyShootingTaskState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyShootingTaskState;

    /**
     * Decodes a ResNotifyShootingTaskState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyShootingTaskState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyShootingTaskState;

    /**
     * Verifies a ResNotifyShootingTaskState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyShootingTaskState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyShootingTaskState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyShootingTaskState;

    /**
     * Creates a plain object from a ResNotifyShootingTaskState message. Also converts values to other types if specified.
     * @param message ResNotifyShootingTaskState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyShootingTaskState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyShootingTaskState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyShootingTaskState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifySkySeacherState. */
export class ResNotifySkySeacherState implements IResNotifySkySeacherState {

    /**
     * Constructs a new ResNotifySkySeacherState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifySkySeacherState);

    /** ResNotifySkySeacherState state. */
    public state: OperationState;

    /**
     * Creates a new ResNotifySkySeacherState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifySkySeacherState instance
     */
    public static create(properties?: IResNotifySkySeacherState): ResNotifySkySeacherState;

    /**
     * Encodes the specified ResNotifySkySeacherState message. Does not implicitly {@link ResNotifySkySeacherState.verify|verify} messages.
     * @param message ResNotifySkySeacherState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifySkySeacherState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifySkySeacherState message, length delimited. Does not implicitly {@link ResNotifySkySeacherState.verify|verify} messages.
     * @param message ResNotifySkySeacherState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifySkySeacherState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifySkySeacherState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifySkySeacherState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifySkySeacherState;

    /**
     * Decodes a ResNotifySkySeacherState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifySkySeacherState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifySkySeacherState;

    /**
     * Verifies a ResNotifySkySeacherState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifySkySeacherState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifySkySeacherState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifySkySeacherState;

    /**
     * Creates a plain object from a ResNotifySkySeacherState message. Also converts values to other types if specified.
     * @param message ResNotifySkySeacherState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifySkySeacherState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifySkySeacherState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifySkySeacherState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStartPanoramaByGrid. */
export class ReqStartPanoramaByGrid implements IReqStartPanoramaByGrid {

    /**
     * Constructs a new ReqStartPanoramaByGrid.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartPanoramaByGrid);

    /**
     * Creates a new ReqStartPanoramaByGrid instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartPanoramaByGrid instance
     */
    public static create(properties?: IReqStartPanoramaByGrid): ReqStartPanoramaByGrid;

    /**
     * Encodes the specified ReqStartPanoramaByGrid message. Does not implicitly {@link ReqStartPanoramaByGrid.verify|verify} messages.
     * @param message ReqStartPanoramaByGrid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartPanoramaByGrid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartPanoramaByGrid message, length delimited. Does not implicitly {@link ReqStartPanoramaByGrid.verify|verify} messages.
     * @param message ReqStartPanoramaByGrid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartPanoramaByGrid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartPanoramaByGrid message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartPanoramaByGrid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartPanoramaByGrid;

    /**
     * Decodes a ReqStartPanoramaByGrid message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartPanoramaByGrid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartPanoramaByGrid;

    /**
     * Verifies a ReqStartPanoramaByGrid message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartPanoramaByGrid message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartPanoramaByGrid
     */
    public static fromObject(object: { [k: string]: any }): ReqStartPanoramaByGrid;

    /**
     * Creates a plain object from a ReqStartPanoramaByGrid message. Also converts values to other types if specified.
     * @param message ReqStartPanoramaByGrid
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartPanoramaByGrid, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartPanoramaByGrid to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartPanoramaByGrid
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStartPanoramaByEulerRange. */
export class ReqStartPanoramaByEulerRange implements IReqStartPanoramaByEulerRange {

    /**
     * Constructs a new ReqStartPanoramaByEulerRange.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartPanoramaByEulerRange);

    /** ReqStartPanoramaByEulerRange yawRange. */
    public yawRange: number;

    /** ReqStartPanoramaByEulerRange pitchRange. */
    public pitchRange: number;

    /**
     * Creates a new ReqStartPanoramaByEulerRange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartPanoramaByEulerRange instance
     */
    public static create(properties?: IReqStartPanoramaByEulerRange): ReqStartPanoramaByEulerRange;

    /**
     * Encodes the specified ReqStartPanoramaByEulerRange message. Does not implicitly {@link ReqStartPanoramaByEulerRange.verify|verify} messages.
     * @param message ReqStartPanoramaByEulerRange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartPanoramaByEulerRange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartPanoramaByEulerRange message, length delimited. Does not implicitly {@link ReqStartPanoramaByEulerRange.verify|verify} messages.
     * @param message ReqStartPanoramaByEulerRange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartPanoramaByEulerRange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartPanoramaByEulerRange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartPanoramaByEulerRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartPanoramaByEulerRange;

    /**
     * Decodes a ReqStartPanoramaByEulerRange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartPanoramaByEulerRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartPanoramaByEulerRange;

    /**
     * Verifies a ReqStartPanoramaByEulerRange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartPanoramaByEulerRange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartPanoramaByEulerRange
     */
    public static fromObject(object: { [k: string]: any }): ReqStartPanoramaByEulerRange;

    /**
     * Creates a plain object from a ReqStartPanoramaByEulerRange message. Also converts values to other types if specified.
     * @param message ReqStartPanoramaByEulerRange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartPanoramaByEulerRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartPanoramaByEulerRange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartPanoramaByEulerRange
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStartPanoramaStitchUpload. */
export class ReqStartPanoramaStitchUpload implements IReqStartPanoramaStitchUpload {

    /**
     * Constructs a new ReqStartPanoramaStitchUpload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartPanoramaStitchUpload);

    /** ReqStartPanoramaStitchUpload userId. */
    public userId: string;

    /** ReqStartPanoramaStitchUpload busiNo. */
    public busiNo: string;

    /** ReqStartPanoramaStitchUpload appPlatform. */
    public appPlatform: number;

    /** ReqStartPanoramaStitchUpload panoramaName. */
    public panoramaName: string;

    /** ReqStartPanoramaStitchUpload ak. */
    public ak: string;

    /** ReqStartPanoramaStitchUpload sk. */
    public sk: string;

    /** ReqStartPanoramaStitchUpload token. */
    public token: string;

    /**
     * Creates a new ReqStartPanoramaStitchUpload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartPanoramaStitchUpload instance
     */
    public static create(properties?: IReqStartPanoramaStitchUpload): ReqStartPanoramaStitchUpload;

    /**
     * Encodes the specified ReqStartPanoramaStitchUpload message. Does not implicitly {@link ReqStartPanoramaStitchUpload.verify|verify} messages.
     * @param message ReqStartPanoramaStitchUpload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartPanoramaStitchUpload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartPanoramaStitchUpload message, length delimited. Does not implicitly {@link ReqStartPanoramaStitchUpload.verify|verify} messages.
     * @param message ReqStartPanoramaStitchUpload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartPanoramaStitchUpload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartPanoramaStitchUpload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartPanoramaStitchUpload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartPanoramaStitchUpload;

    /**
     * Decodes a ReqStartPanoramaStitchUpload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartPanoramaStitchUpload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartPanoramaStitchUpload;

    /**
     * Verifies a ReqStartPanoramaStitchUpload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartPanoramaStitchUpload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartPanoramaStitchUpload
     */
    public static fromObject(object: { [k: string]: any }): ReqStartPanoramaStitchUpload;

    /**
     * Creates a plain object from a ReqStartPanoramaStitchUpload message. Also converts values to other types if specified.
     * @param message ReqStartPanoramaStitchUpload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartPanoramaStitchUpload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartPanoramaStitchUpload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartPanoramaStitchUpload
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopPanorama. */
export class ReqStopPanorama implements IReqStopPanorama {

    /**
     * Constructs a new ReqStopPanorama.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopPanorama);

    /**
     * Creates a new ReqStopPanorama instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopPanorama instance
     */
    public static create(properties?: IReqStopPanorama): ReqStopPanorama;

    /**
     * Encodes the specified ReqStopPanorama message. Does not implicitly {@link ReqStopPanorama.verify|verify} messages.
     * @param message ReqStopPanorama message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopPanorama, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopPanorama message, length delimited. Does not implicitly {@link ReqStopPanorama.verify|verify} messages.
     * @param message ReqStopPanorama message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopPanorama, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopPanorama message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopPanorama
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopPanorama;

    /**
     * Decodes a ReqStopPanorama message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopPanorama
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopPanorama;

    /**
     * Verifies a ReqStopPanorama message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopPanorama message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopPanorama
     */
    public static fromObject(object: { [k: string]: any }): ReqStopPanorama;

    /**
     * Creates a plain object from a ReqStopPanorama message. Also converts values to other types if specified.
     * @param message ReqStopPanorama
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopPanorama, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopPanorama to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopPanorama
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopPanoramaStitchUpload. */
export class ReqStopPanoramaStitchUpload implements IReqStopPanoramaStitchUpload {

    /**
     * Constructs a new ReqStopPanoramaStitchUpload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopPanoramaStitchUpload);

    /**
     * Creates a new ReqStopPanoramaStitchUpload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopPanoramaStitchUpload instance
     */
    public static create(properties?: IReqStopPanoramaStitchUpload): ReqStopPanoramaStitchUpload;

    /**
     * Encodes the specified ReqStopPanoramaStitchUpload message. Does not implicitly {@link ReqStopPanoramaStitchUpload.verify|verify} messages.
     * @param message ReqStopPanoramaStitchUpload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopPanoramaStitchUpload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopPanoramaStitchUpload message, length delimited. Does not implicitly {@link ReqStopPanoramaStitchUpload.verify|verify} messages.
     * @param message ReqStopPanoramaStitchUpload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopPanoramaStitchUpload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopPanoramaStitchUpload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopPanoramaStitchUpload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopPanoramaStitchUpload;

    /**
     * Decodes a ReqStopPanoramaStitchUpload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopPanoramaStitchUpload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopPanoramaStitchUpload;

    /**
     * Verifies a ReqStopPanoramaStitchUpload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopPanoramaStitchUpload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopPanoramaStitchUpload
     */
    public static fromObject(object: { [k: string]: any }): ReqStopPanoramaStitchUpload;

    /**
     * Creates a plain object from a ReqStopPanoramaStitchUpload message. Also converts values to other types if specified.
     * @param message ReqStopPanoramaStitchUpload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopPanoramaStitchUpload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopPanoramaStitchUpload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopPanoramaStitchUpload
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyPanoramaStitchUploadComplete. */
export class ResNotifyPanoramaStitchUploadComplete implements IResNotifyPanoramaStitchUploadComplete {

    /**
     * Constructs a new ResNotifyPanoramaStitchUploadComplete.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPanoramaStitchUploadComplete);

    /** ResNotifyPanoramaStitchUploadComplete userId. */
    public userId: string;

    /** ResNotifyPanoramaStitchUploadComplete busiNo. */
    public busiNo: string;

    /** ResNotifyPanoramaStitchUploadComplete panoramaName. */
    public panoramaName: string;

    /** ResNotifyPanoramaStitchUploadComplete mac. */
    public mac: string;

    /** ResNotifyPanoramaStitchUploadComplete uploadRes. */
    public uploadRes: boolean;

    /**
     * Creates a new ResNotifyPanoramaStitchUploadComplete instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPanoramaStitchUploadComplete instance
     */
    public static create(properties?: IResNotifyPanoramaStitchUploadComplete): ResNotifyPanoramaStitchUploadComplete;

    /**
     * Encodes the specified ResNotifyPanoramaStitchUploadComplete message. Does not implicitly {@link ResNotifyPanoramaStitchUploadComplete.verify|verify} messages.
     * @param message ResNotifyPanoramaStitchUploadComplete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPanoramaStitchUploadComplete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPanoramaStitchUploadComplete message, length delimited. Does not implicitly {@link ResNotifyPanoramaStitchUploadComplete.verify|verify} messages.
     * @param message ResNotifyPanoramaStitchUploadComplete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPanoramaStitchUploadComplete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPanoramaStitchUploadComplete message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPanoramaStitchUploadComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPanoramaStitchUploadComplete;

    /**
     * Decodes a ResNotifyPanoramaStitchUploadComplete message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPanoramaStitchUploadComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPanoramaStitchUploadComplete;

    /**
     * Verifies a ResNotifyPanoramaStitchUploadComplete message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPanoramaStitchUploadComplete message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPanoramaStitchUploadComplete
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPanoramaStitchUploadComplete;

    /**
     * Creates a plain object from a ResNotifyPanoramaStitchUploadComplete message. Also converts values to other types if specified.
     * @param message ResNotifyPanoramaStitchUploadComplete
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPanoramaStitchUploadComplete, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPanoramaStitchUploadComplete to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPanoramaStitchUploadComplete
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyPanoramaCompressionProgress. */
export class ResNotifyPanoramaCompressionProgress implements IResNotifyPanoramaCompressionProgress {

    /**
     * Constructs a new ResNotifyPanoramaCompressionProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPanoramaCompressionProgress);

    /** ResNotifyPanoramaCompressionProgress userId. */
    public userId: string;

    /** ResNotifyPanoramaCompressionProgress busiNo. */
    public busiNo: string;

    /** ResNotifyPanoramaCompressionProgress panoramaName. */
    public panoramaName: string;

    /** ResNotifyPanoramaCompressionProgress mac. */
    public mac: string;

    /** ResNotifyPanoramaCompressionProgress totalFilesNum. */
    public totalFilesNum: number;

    /** ResNotifyPanoramaCompressionProgress compressedFilesNum. */
    public compressedFilesNum: number;

    /**
     * Creates a new ResNotifyPanoramaCompressionProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPanoramaCompressionProgress instance
     */
    public static create(properties?: IResNotifyPanoramaCompressionProgress): ResNotifyPanoramaCompressionProgress;

    /**
     * Encodes the specified ResNotifyPanoramaCompressionProgress message. Does not implicitly {@link ResNotifyPanoramaCompressionProgress.verify|verify} messages.
     * @param message ResNotifyPanoramaCompressionProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPanoramaCompressionProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPanoramaCompressionProgress message, length delimited. Does not implicitly {@link ResNotifyPanoramaCompressionProgress.verify|verify} messages.
     * @param message ResNotifyPanoramaCompressionProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPanoramaCompressionProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPanoramaCompressionProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPanoramaCompressionProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPanoramaCompressionProgress;

    /**
     * Decodes a ResNotifyPanoramaCompressionProgress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPanoramaCompressionProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPanoramaCompressionProgress;

    /**
     * Verifies a ResNotifyPanoramaCompressionProgress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPanoramaCompressionProgress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPanoramaCompressionProgress
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPanoramaCompressionProgress;

    /**
     * Creates a plain object from a ResNotifyPanoramaCompressionProgress message. Also converts values to other types if specified.
     * @param message ResNotifyPanoramaCompressionProgress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPanoramaCompressionProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPanoramaCompressionProgress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPanoramaCompressionProgress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyPanoramaUploadProgress. */
export class ResNotifyPanoramaUploadProgress implements IResNotifyPanoramaUploadProgress {

    /**
     * Constructs a new ResNotifyPanoramaUploadProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPanoramaUploadProgress);

    /** ResNotifyPanoramaUploadProgress userId. */
    public userId: string;

    /** ResNotifyPanoramaUploadProgress busiNo. */
    public busiNo: string;

    /** ResNotifyPanoramaUploadProgress panoramaName. */
    public panoramaName: string;

    /** ResNotifyPanoramaUploadProgress mac. */
    public mac: string;

    /** ResNotifyPanoramaUploadProgress totalSize. */
    public totalSize: (number|Long);

    /** ResNotifyPanoramaUploadProgress uploadedSize. */
    public uploadedSize: (number|Long);

    /**
     * Creates a new ResNotifyPanoramaUploadProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPanoramaUploadProgress instance
     */
    public static create(properties?: IResNotifyPanoramaUploadProgress): ResNotifyPanoramaUploadProgress;

    /**
     * Encodes the specified ResNotifyPanoramaUploadProgress message. Does not implicitly {@link ResNotifyPanoramaUploadProgress.verify|verify} messages.
     * @param message ResNotifyPanoramaUploadProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPanoramaUploadProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPanoramaUploadProgress message, length delimited. Does not implicitly {@link ResNotifyPanoramaUploadProgress.verify|verify} messages.
     * @param message ResNotifyPanoramaUploadProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPanoramaUploadProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPanoramaUploadProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPanoramaUploadProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPanoramaUploadProgress;

    /**
     * Decodes a ResNotifyPanoramaUploadProgress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPanoramaUploadProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPanoramaUploadProgress;

    /**
     * Verifies a ResNotifyPanoramaUploadProgress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPanoramaUploadProgress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPanoramaUploadProgress
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPanoramaUploadProgress;

    /**
     * Creates a plain object from a ResNotifyPanoramaUploadProgress message. Also converts values to other types if specified.
     * @param message ResNotifyPanoramaUploadProgress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPanoramaUploadProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPanoramaUploadProgress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPanoramaUploadProgress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetStitchUploadState. */
export class ResGetStitchUploadState implements IResGetStitchUploadState {

    /**
     * Constructs a new ResGetStitchUploadState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetStitchUploadState);

    /** ResGetStitchUploadState code. */
    public code: number;

    /** ResGetStitchUploadState userId. */
    public userId: string;

    /** ResGetStitchUploadState busiNo. */
    public busiNo: string;

    /** ResGetStitchUploadState panoramaName. */
    public panoramaName: string;

    /** ResGetStitchUploadState mac. */
    public mac: string;

    /** ResGetStitchUploadState totalFilesNum. */
    public totalFilesNum: number;

    /** ResGetStitchUploadState compressedFilesNum. */
    public compressedFilesNum: number;

    /** ResGetStitchUploadState totalSize. */
    public totalSize: (number|Long);

    /** ResGetStitchUploadState uploadedSize. */
    public uploadedSize: (number|Long);

    /** ResGetStitchUploadState step. */
    public step: number;

    /**
     * Creates a new ResGetStitchUploadState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetStitchUploadState instance
     */
    public static create(properties?: IResGetStitchUploadState): ResGetStitchUploadState;

    /**
     * Encodes the specified ResGetStitchUploadState message. Does not implicitly {@link ResGetStitchUploadState.verify|verify} messages.
     * @param message ResGetStitchUploadState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetStitchUploadState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetStitchUploadState message, length delimited. Does not implicitly {@link ResGetStitchUploadState.verify|verify} messages.
     * @param message ResGetStitchUploadState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetStitchUploadState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetStitchUploadState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetStitchUploadState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetStitchUploadState;

    /**
     * Decodes a ResGetStitchUploadState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetStitchUploadState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetStitchUploadState;

    /**
     * Verifies a ResGetStitchUploadState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetStitchUploadState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetStitchUploadState
     */
    public static fromObject(object: { [k: string]: any }): ResGetStitchUploadState;

    /**
     * Creates a plain object from a ResGetStitchUploadState message. Also converts values to other types if specified.
     * @param message ResGetStitchUploadState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetStitchUploadState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetStitchUploadState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetStitchUploadState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ModuleId enum. */
export enum ModuleId {
    MODULE_NONE = 0,
    MODULE_CAMERA_TELE = 1,
    MODULE_CAMERA_WIDE = 2,
    MODULE_ASTRO = 3,
    MODULE_SYSTEM = 4,
    MODULE_RGB_POWER = 5,
    MODULE_MOTOR = 6,
    MODULE_TRACK = 7,
    MODULE_FOCUS = 8,
    MODULE_NOTIFY = 9,
    MODULE_PANORAMA = 10,
    MODULE_SHOOTING_SCHEDULE = 13
}

/** MessageTypeId enum. */
export enum MessageTypeId {
    TYPE_REQUEST = 0,
    TYPE_REQUEST_RESPONSE = 1,
    TYPE_NOTIFICATION = 2,
    TYPE_NOTIFICATION_RESPONSE = 3
}

/** DwarfCMD enum. */
export enum DwarfCMD {
    NO_CMD = 0,
    CMD_CAMERA_TELE_OPEN_CAMERA = 10000,
    CMD_CAMERA_TELE_CLOSE_CAMERA = 10001,
    CMD_CAMERA_TELE_PHOTOGRAPH = 10002,
    CMD_CAMERA_TELE_BURST = 10003,
    CMD_CAMERA_TELE_STOP_BURST = 10004,
    CMD_CAMERA_TELE_START_RECORD = 10005,
    CMD_CAMERA_TELE_STOP_RECORD = 10006,
    CMD_CAMERA_TELE_SET_EXP_MODE = 10007,
    CMD_CAMERA_TELE_GET_EXP_MODE = 10008,
    CMD_CAMERA_TELE_SET_EXP = 10009,
    CMD_CAMERA_TELE_GET_EXP = 10010,
    CMD_CAMERA_TELE_SET_GAIN_MODE = 10011,
    CMD_CAMERA_TELE_GET_GAIN_MODE = 10012,
    CMD_CAMERA_TELE_SET_GAIN = 10013,
    CMD_CAMERA_TELE_GET_GAIN = 10014,
    CMD_CAMERA_TELE_SET_BRIGHTNESS = 10015,
    CMD_CAMERA_TELE_GET_BRIGHTNESS = 10016,
    CMD_CAMERA_TELE_SET_CONTRAST = 10017,
    CMD_CAMERA_TELE_GET_CONTRAST = 10018,
    CMD_CAMERA_TELE_SET_SATURATION = 10019,
    CMD_CAMERA_TELE_GET_SATURATION = 10020,
    CMD_CAMERA_TELE_SET_HUE = 10021,
    CMD_CAMERA_TELE_GET_HUE = 10022,
    CMD_CAMERA_TELE_SET_SHARPNESS = 10023,
    CMD_CAMERA_TELE_GET_SHARPNESS = 10024,
    CMD_CAMERA_TELE_SET_WB_MODE = 10025,
    CMD_CAMERA_TELE_GET_WB_MODE = 10026,
    CMD_CAMERA_TELE_SET_WB_SCENE = 10027,
    CMD_CAMERA_TELE_GET_WB_SCENE = 10028,
    CMD_CAMERA_TELE_SET_WB_CT = 10029,
    CMD_CAMERA_TELE_GET_WB_CT = 10030,
    CMD_CAMERA_TELE_SET_IRCUT = 10031,
    CMD_CAMERA_TELE_GET_IRCUT = 10032,
    CMD_CAMERA_TELE_START_TIMELAPSE_PHOTO = 10033,
    CMD_CAMERA_TELE_STOP_TIMELAPSE_PHOTO = 10034,
    CMD_CAMERA_TELE_SET_ALL_PARAMS = 10035,
    CMD_CAMERA_TELE_GET_ALL_PARAMS = 10036,
    CMD_CAMERA_TELE_SET_FEATURE_PARAM = 10037,
    CMD_CAMERA_TELE_GET_ALL_FEATURE_PARAMS = 10038,
    CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE = 10039,
    CMD_CAMERA_TELE_SET_JPG_QUALITY = 10040,
    CMD_CAMERA_TELE_PHOTO_RAW = 10041,
    CMD_CAMERA_TELE_SET_RTSP_BITRATE_TYPE = 10042,
    CMD_ASTRO_START_CALIBRATION = 11000,
    CMD_ASTRO_STOP_CALIBRATION = 11001,
    CMD_ASTRO_START_GOTO_DSO = 11002,
    CMD_ASTRO_START_GOTO_SOLAR_SYSTEM = 11003,
    CMD_ASTRO_STOP_GOTO = 11004,
    CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING = 11005,
    CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING = 11006,
    CMD_ASTRO_START_CAPTURE_RAW_DARK = 11007,
    CMD_ASTRO_STOP_CAPTURE_RAW_DARK = 11008,
    CMD_ASTRO_CHECK_GOT_DARK = 11009,
    CMD_ASTRO_GO_LIVE = 11010,
    CMD_ASTRO_START_TRACK_SPECIAL_TARGET = 11011,
    CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET = 11012,
    CMD_ASTRO_START_ONE_CLICK_GOTO_DSO = 11013,
    CMD_ASTRO_START_ONE_CLICK_GOTO_SOLAR_SYSTEM = 11014,
    CMD_ASTRO_STOP_ONE_CLICK_GOTO = 11015,
    CMD_ASTRO_START_WIDE_CAPTURE_LIVE_STACKING = 11016,
    CMD_ASTRO_STOP_WIDE_CAPTURE_LIVE_STACKING = 11017,
    CMD_ASTRO_START_EQ_SOLVING = 11018,
    CMD_ASTRO_STOP_EQ_SOLVING = 11019,
    CMD_ASTRO_WIDE_GO_LIVE = 11020,
    CMD_ASTRO_START_CAPTURE_RAW_DARK_WITH_PARAM = 11021,
    CMD_ASTRO_STOP_CAPTURE_RAW_DARK_WITH_PARAM = 11022,
    CMD_ASTRO_GET_DARK_FRAME_LIST = 11023,
    CMD_ASTRO_DEL_DARK_FRAME_LIST = 11024,
    CMD_ASTRO_START_CAPTURE_WIDE_RAW_DARK_WITH_PARAM = 11025,
    CMD_ASTRO_STOP_CAPTURE_WIDE_RAW_DARK_WITH_PARAM = 11026,
    CMD_ASTRO_GET_WIDE_DARK_FRAME_LIST = 11027,
    CMD_ASTRO_DEL_WIDE_DARK_FRAME_LIST = 11028,
    CMD_CAMERA_WIDE_OPEN_CAMERA = 12000,
    CMD_CAMERA_WIDE_CLOSE_CAMERA = 12001,
    CMD_CAMERA_WIDE_SET_EXP_MODE = 12002,
    CMD_CAMERA_WIDE_GET_EXP_MODE = 12003,
    CMD_CAMERA_WIDE_SET_EXP = 12004,
    CMD_CAMERA_WIDE_GET_EXP = 12005,
    CMD_CAMERA_WIDE_SET_GAIN = 12006,
    CMD_CAMERA_WIDE_GET_GAIN = 12007,
    CMD_CAMERA_WIDE_SET_BRIGHTNESS = 12008,
    CMD_CAMERA_WIDE_GET_BRIGHTNESS = 12009,
    CMD_CAMERA_WIDE_SET_CONTRAST = 12010,
    CMD_CAMERA_WIDE_GET_CONTRAST = 12011,
    CMD_CAMERA_WIDE_SET_SATURATION = 12012,
    CMD_CAMERA_WIDE_GET_SATURATION = 12013,
    CMD_CAMERA_WIDE_SET_HUE = 12014,
    CMD_CAMERA_WIDE_GET_HUE = 12015,
    CMD_CAMERA_WIDE_SET_SHARPNESS = 12016,
    CMD_CAMERA_WIDE_GET_SHARPNESS = 12017,
    CMD_CAMERA_WIDE_SET_WB_MODE = 12018,
    CMD_CAMERA_WIDE_GET_WB_MODE = 12019,
    CMD_CAMERA_WIDE_SET_WB_CT = 12020,
    CMD_CAMERA_WIDE_GET_WB_CT = 12021,
    CMD_CAMERA_WIDE_PHOTOGRAPH = 12022,
    CMD_CAMERA_WIDE_BURST = 12023,
    CMD_CAMERA_WIDE_STOP_BURST = 12024,
    CMD_CAMERA_WIDE_START_TIMELAPSE_PHOTO = 12025,
    CMD_CAMERA_WIDE_STOP_TIMELAPSE_PHOTO = 12026,
    CMD_CAMERA_WIDE_GET_ALL_PARAMS = 12027,
    CMD_CAMERA_WIDE_SET_ALL_PARAMS = 12028,
    CMD_CAMERA_WIDE_START_RECORD = 12030,
    CMD_CAMERA_WIDE_STOP_RECORD = 12031,
    CMD_SYSTEM_SET_TIME = 13000,
    CMD_SYSTEM_SET_TIME_ZONE = 13001,
    CMD_SYSTEM_SET_MTP_MODE = 13002,
    CMD_SYSTEM_SET_CPU_MODE = 13003,
    CMD_SYSTEM_SET_MASTERLOCK = 13004,
    CMD_RGB_POWER_OPEN_RGB = 13500,
    CMD_RGB_POWER_CLOSE_RGB = 13501,
    CMD_RGB_POWER_POWER_DOWN = 13502,
    CMD_RGB_POWER_POWERIND_ON = 13503,
    CMD_RGB_POWER_POWERIND_OFF = 13504,
    CMD_RGB_POWER_REBOOT = 13505,
    CMD_STEP_MOTOR_RUN = 14000,
    CMD_STEP_MOTOR_RUN_TO = 14001,
    CMD_STEP_MOTOR_STOP = 14002,
    CMD_STEP_MOTOR_RESET = 14003,
    CMD_STEP_MOTOR_CHANGE_SPEED = 14004,
    CMD_STEP_MOTOR_CHANGE_DIRECTION = 14005,
    CMD_STEP_MOTOR_SERVICE_JOYSTICK = 14006,
    CMD_STEP_MOTOR_SERVICE_JOYSTICK_FIXED_ANGLE = 14007,
    CMD_STEP_MOTOR_SERVICE_JOYSTICK_STOP = 14008,
    CMD_STEP_MOTOR_SERVICE_DUAL_CAMERA_LINKAGE = 14009,
    CMD_STEP_MOTOR_RUN_IN_PULSE = 14010,
    CMD_STEP_MOTOR_GET_POSITION = 14011,
    CMD_TRACK_START_TRACK = 14800,
    CMD_TRACK_STOP_TRACK = 14801,
    CMD_SENTRY_MODE_START = 14802,
    CMD_SENTRY_MODE_STOP = 14803,
    CMD_MOT_START = 14804,
    CMD_MOT_TRACK_ONE = 14805,
    CMD_UFOTRACK_MODE_START = 14806,
    CMD_UFOTRACK_MODE_STOP = 14807,
    CMD_MOT_WIDE_TRACK_ONE = 14808,
    CMD_WIDE_TELE_TRACK_SWITCH = 14809,
    CMD_UFO_HAND_AOTO_MODE = 14810,
    CMD_FOCUS_AUTO_FOCUS = 15000,
    CMD_FOCUS_MANUAL_SINGLE_STEP_FOCUS = 15001,
    CMD_FOCUS_START_MANUAL_CONTINU_FOCUS = 15002,
    CMD_FOCUS_STOP_MANUAL_CONTINU_FOCUS = 15003,
    CMD_FOCUS_START_ASTRO_AUTO_FOCUS = 15004,
    CMD_FOCUS_STOP_ASTRO_AUTO_FOCUS = 15005,
    CMD_NOTIFY_TELE_WIDI_PICTURE_MATCHING = 15200,
    CMD_NOTIFY_ELE = 15201,
    CMD_NOTIFY_CHARGE = 15202,
    CMD_NOTIFY_SDCARD_INFO = 15203,
    CMD_NOTIFY_TELE_RECORD_TIME = 15204,
    CMD_NOTIFY_TELE_TIMELAPSE_OUT_TIME = 15205,
    CMD_NOTIFY_STATE_CAPTURE_RAW_DARK = 15206,
    CMD_NOTIFY_PROGRASS_CAPTURE_RAW_DARK = 15207,
    CMD_NOTIFY_STATE_CAPTURE_RAW_LIVE_STACKING = 15208,
    CMD_NOTIFY_PROGRASS_CAPTURE_RAW_LIVE_STACKING = 15209,
    CMD_NOTIFY_STATE_ASTRO_CALIBRATION = 15210,
    CMD_NOTIFY_STATE_ASTRO_GOTO = 15211,
    CMD_NOTIFY_STATE_ASTRO_TRACKING = 15212,
    CMD_NOTIFY_TELE_SET_PARAM = 15213,
    CMD_NOTIFY_WIDE_SET_PARAM = 15214,
    CMD_NOTIFY_TELE_FUNCTION_STATE = 15215,
    CMD_NOTIFY_WIDE_FUNCTION_STATE = 15216,
    CMD_NOTIFY_SET_FEATURE_PARAM = 15217,
    CMD_NOTIFY_TELE_BURST_PROGRESS = 15218,
    CMD_NOTIFY_PANORAMA_PROGRESS = 15219,
    CMD_NOTIFY_WIDE_BURST_PROGRESS = 15220,
    CMD_NOTIFY_RGB_STATE = 15221,
    CMD_NOTIFY_POWER_IND_STATE = 15222,
    CMD_NOTIFY_WS_HOST_SLAVE_MODE = 15223,
    CMD_NOTIFY_MTP_STATE = 15224,
    CMD_NOTIFY_TRACK_RESULT = 15225,
    CMD_NOTIFY_WIDE_TIMELAPSE_OUT_TIME = 15226,
    CMD_NOTIFY_CPU_MODE = 15227,
    CMD_NOTIFY_STATE_ASTRO_TRACKING_SPECIAL = 15228,
    CMD_NOTIFY_POWER_OFF = 15229,
    CMD_NOTIFY_ALBUM_UPDATE = 15230,
    CMD_NOTIFY_SENTRY_MODE_STATE = 15231,
    CMD_NOTIFY_SENTRY_MODE_TRACK_RESULT = 15232,
    CMD_NOTIFY_STATE_ASTRO_ONE_CLICK_GOTO = 15233,
    CMD_NOTIFY_STREAM_TYPE = 15234,
    CMD_NOTIFY_WIDE_RECORD_TIME = 15235,
    CMD_NOTIFY_STATE_WIDE_CAPTURE_RAW_LIVE_STACKING = 15236,
    CMD_NOTIFY_PROGRASS_WIDE_CAPTURE_RAW_LIVE_STACKING = 15237,
    CMD_NOTIFY_MULTI_TRACK_RESULT = 15238,
    CMD_NOTIFY_EQ_SOLVING_STATE = 15239,
    CMD_NOTIFY_UFO_MODE_STATE = 15240,
    CMD_NOTIFY_TELE_LONG_EXP_PROGRESS = 15241,
    CMD_NOTIFY_WIDE_LONG_EXP_PROGRESS = 15242,
    CMD_NOTIFY_TEMPERATURE = 15243,
    CMD_NOTIFY_PANORAMA_UPLOAD_COMPRESS_PROGRESS = 15244,
    CMD_NOTIFY_PANORAMA_UPLOAD_UPLOAD_PROGRESS = 15245,
    CMD_NOTIFY_PANORAMA_UPLOAD_COMPLETE = 15246,
    CMD_NOTIFY_STATE_CAPTURE_WIDE_RAW_DARK = 15247,
    CMD_NOTIFY_SHOOTING_SCHEDULE_RESULT_AND_STATE = 15248,
    CMD_NOTIFY_SHOOTING_TASK_STATE = 15249,
    CMD_NOTIFY_SKY_SEACHER_STATE = 15250,
    CMD_NOTIFY_WIDE_MULTI_TRACK_RESULT = 15251,
    CMD_NOTIFY_WIDE_TRACK_RESULT = 15252,
    CMD_PANORAMA_START_GRID = 15500,
    CMD_PANORAMA_STOP = 15501,
    CMD_PANORAMA_START_EULER_RANGE = 15502
}

/** DwarfErrorCode enum. */
export enum DwarfErrorCode {
    OK = 0,
    WS_PARSE_PROTOBUF_ERROR = -1,
    WS_SDCARD_NOT_EXIST = -2,
    WS_INVALID_PARAM = -3,
    WS_SDCARD_WRITE_ERROR = -4,
    CODE_CAMERA_TELE_OPENED = -10500,
    CODE_CAMERA_TELE_CLOSED = -10501,
    CODE_CAMERA_TELE_ISP_SET_FAILED = -10502,
    CODE_CAMERA_TELE_OPEN_FAILED = -10504,
    CODE_CAMERA_TELE_RECORDING = -10506,
    CODE_CAMERA_TELE_WORKING_BUSY_STACK = -10507,
    CODE_CAMERA_TELE_CAPTURE_RAW_FAILED = -10510,
    CODE_CAMERA_TELE_WORKING_BUSY = -10511,
    CODE_ASTRO_PLATE_SOLVING_FAILED = -11500,
    CODE_ASTRO_FUNCTION_BUSY = -11501,
    CODE_ASTRO_DARK_GAIN_OUT_OF_RANGE = -11502,
    CODE_ASTRO_DARK_NOT_FOUND = -11503,
    CODE_ASTRO_CALIBRATION_FAILED = -11504,
    CODE_ASTRO_GOTO_FAILED = -11505,
    CODE_ASTRO_NEED_GOTO = -11513,
    CODE_ASTRO_NEED_ADJUST_SHOOT_PARAM = -11514,
    CODE_ASTRO_EQ_SOLVING_FAILED = -11516,
    CODE_ASTRO_SKY_SEARCH_FAILED = -11517,
    CODE_CAMERA_WIDE_OPENED = -12500,
    CODE_CAMERA_WIDE_CLOSED = -12501,
    CODE_CAMERA_WIDE_CANNOT_FOUND = -12502,
    CODE_CAMERA_WIDE_OPEN_FAILED = -12503,
    CODE_CAMERA_WIDE_CLOSE_FAILED = -12504,
    CODE_CAMERA_WIDE_SET_ISP_FAILED = -12505,
    CODE_CAMERA_WIDE_PHOTOGRAPHING = -12506,
    CODE_CAMERA_WIDE_EXP_TOO_LONG = -12508,
    CODE_SYSTEM_SET_TIME_FAILED = -13300,
    CODE_SYSTEM_SET_TIMEZONE_FAILED = -13301,
    CODE_SYSTEM_SETTING_TIMEZONE_FAILED = -13302,
    CODE_RGB_POWER_UART_INIT_FAILED = -13800,
    CODE_STEP_MOTOR_INVALID_PARAMETER_ID = -14504,
    CODE_STEP_MOTOR_LIMIT_POSITION_WARNING = -14518,
    CODE_STEP_MOTOR_LIMIT_POSITION_HITTED = -14519,
    CODE_STEP_MOTOR_POSITION_NEED_RESET = -14520,
    CODE_TRACK_TRACKER_INITING = -14900,
    CODE_TRACK_TRACKER_FAILED = -14901,
    CODE_FOCUS_ASTRO_AUTO_FOCUS_SLOW_ERROR = -15100,
    CODE_FOCUS_ASTRO_AUTO_FOCUS_FAST_ERROR = -15101,
    CODE_PANORAMA_PHOTO_FAILED = -15600,
    CODE_PANORAMA_MOTOR_RESET_FAILED = -15601
}

/** AstroTrackingSpecial enum. */
export enum AstroTrackingSpecial {
    TRACKING_SUN = 0,
    TRACKING_MOON = 1
}

/** SolarSystemTarget enum. */
export enum SolarSystemTarget {
    Unknown = 0,
    Mercury = 1,
    Venus = 2,
    Mars = 3,
    Jupiter = 4,
    Saturn = 5,
    Uranus = 6,
    Neptune = 7,
    Moon = 8,
    Sun = 9
}

/** PhotoMode enum. */
export enum PhotoMode {
    Auto = 0,
    Manual = 1
}

/** WBMode enum. */
export enum WBMode {
    ColorTemperature = 0,
    SceneMode = 1
}

/** IrCut enum. */
export enum IrCut {
    CUT = 0,
    PASS = 1
}

/** Represents a ReqOpenRgb. */
export class ReqOpenRgb implements IReqOpenRgb {

    /**
     * Constructs a new ReqOpenRgb.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqOpenRgb);

    /**
     * Creates a new ReqOpenRgb instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqOpenRgb instance
     */
    public static create(properties?: IReqOpenRgb): ReqOpenRgb;

    /**
     * Encodes the specified ReqOpenRgb message. Does not implicitly {@link ReqOpenRgb.verify|verify} messages.
     * @param message ReqOpenRgb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqOpenRgb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqOpenRgb message, length delimited. Does not implicitly {@link ReqOpenRgb.verify|verify} messages.
     * @param message ReqOpenRgb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqOpenRgb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqOpenRgb message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqOpenRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqOpenRgb;

    /**
     * Decodes a ReqOpenRgb message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqOpenRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqOpenRgb;

    /**
     * Verifies a ReqOpenRgb message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqOpenRgb message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqOpenRgb
     */
    public static fromObject(object: { [k: string]: any }): ReqOpenRgb;

    /**
     * Creates a plain object from a ReqOpenRgb message. Also converts values to other types if specified.
     * @param message ReqOpenRgb
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqOpenRgb, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqOpenRgb to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqOpenRgb
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqCloseRgb. */
export class ReqCloseRgb implements IReqCloseRgb {

    /**
     * Constructs a new ReqCloseRgb.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCloseRgb);

    /**
     * Creates a new ReqCloseRgb instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCloseRgb instance
     */
    public static create(properties?: IReqCloseRgb): ReqCloseRgb;

    /**
     * Encodes the specified ReqCloseRgb message. Does not implicitly {@link ReqCloseRgb.verify|verify} messages.
     * @param message ReqCloseRgb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCloseRgb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCloseRgb message, length delimited. Does not implicitly {@link ReqCloseRgb.verify|verify} messages.
     * @param message ReqCloseRgb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCloseRgb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCloseRgb message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCloseRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCloseRgb;

    /**
     * Decodes a ReqCloseRgb message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCloseRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCloseRgb;

    /**
     * Verifies a ReqCloseRgb message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCloseRgb message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCloseRgb
     */
    public static fromObject(object: { [k: string]: any }): ReqCloseRgb;

    /**
     * Creates a plain object from a ReqCloseRgb message. Also converts values to other types if specified.
     * @param message ReqCloseRgb
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCloseRgb, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCloseRgb to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCloseRgb
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqPowerDown. */
export class ReqPowerDown implements IReqPowerDown {

    /**
     * Constructs a new ReqPowerDown.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPowerDown);

    /**
     * Creates a new ReqPowerDown instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPowerDown instance
     */
    public static create(properties?: IReqPowerDown): ReqPowerDown;

    /**
     * Encodes the specified ReqPowerDown message. Does not implicitly {@link ReqPowerDown.verify|verify} messages.
     * @param message ReqPowerDown message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPowerDown, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPowerDown message, length delimited. Does not implicitly {@link ReqPowerDown.verify|verify} messages.
     * @param message ReqPowerDown message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPowerDown, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPowerDown message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPowerDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPowerDown;

    /**
     * Decodes a ReqPowerDown message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPowerDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPowerDown;

    /**
     * Verifies a ReqPowerDown message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPowerDown message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPowerDown
     */
    public static fromObject(object: { [k: string]: any }): ReqPowerDown;

    /**
     * Creates a plain object from a ReqPowerDown message. Also converts values to other types if specified.
     * @param message ReqPowerDown
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPowerDown, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPowerDown to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqPowerDown
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqOpenPowerInd. */
export class ReqOpenPowerInd implements IReqOpenPowerInd {

    /**
     * Constructs a new ReqOpenPowerInd.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqOpenPowerInd);

    /**
     * Creates a new ReqOpenPowerInd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqOpenPowerInd instance
     */
    public static create(properties?: IReqOpenPowerInd): ReqOpenPowerInd;

    /**
     * Encodes the specified ReqOpenPowerInd message. Does not implicitly {@link ReqOpenPowerInd.verify|verify} messages.
     * @param message ReqOpenPowerInd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqOpenPowerInd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqOpenPowerInd message, length delimited. Does not implicitly {@link ReqOpenPowerInd.verify|verify} messages.
     * @param message ReqOpenPowerInd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqOpenPowerInd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqOpenPowerInd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqOpenPowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqOpenPowerInd;

    /**
     * Decodes a ReqOpenPowerInd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqOpenPowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqOpenPowerInd;

    /**
     * Verifies a ReqOpenPowerInd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqOpenPowerInd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqOpenPowerInd
     */
    public static fromObject(object: { [k: string]: any }): ReqOpenPowerInd;

    /**
     * Creates a plain object from a ReqOpenPowerInd message. Also converts values to other types if specified.
     * @param message ReqOpenPowerInd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqOpenPowerInd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqOpenPowerInd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqOpenPowerInd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqClosePowerInd. */
export class ReqClosePowerInd implements IReqClosePowerInd {

    /**
     * Constructs a new ReqClosePowerInd.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqClosePowerInd);

    /**
     * Creates a new ReqClosePowerInd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqClosePowerInd instance
     */
    public static create(properties?: IReqClosePowerInd): ReqClosePowerInd;

    /**
     * Encodes the specified ReqClosePowerInd message. Does not implicitly {@link ReqClosePowerInd.verify|verify} messages.
     * @param message ReqClosePowerInd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqClosePowerInd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqClosePowerInd message, length delimited. Does not implicitly {@link ReqClosePowerInd.verify|verify} messages.
     * @param message ReqClosePowerInd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqClosePowerInd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqClosePowerInd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqClosePowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqClosePowerInd;

    /**
     * Decodes a ReqClosePowerInd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqClosePowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqClosePowerInd;

    /**
     * Verifies a ReqClosePowerInd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqClosePowerInd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqClosePowerInd
     */
    public static fromObject(object: { [k: string]: any }): ReqClosePowerInd;

    /**
     * Creates a plain object from a ReqClosePowerInd message. Also converts values to other types if specified.
     * @param message ReqClosePowerInd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqClosePowerInd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqClosePowerInd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqClosePowerInd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqReboot. */
export class ReqReboot implements IReqReboot {

    /**
     * Constructs a new ReqReboot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqReboot);

    /**
     * Creates a new ReqReboot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqReboot instance
     */
    public static create(properties?: IReqReboot): ReqReboot;

    /**
     * Encodes the specified ReqReboot message. Does not implicitly {@link ReqReboot.verify|verify} messages.
     * @param message ReqReboot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqReboot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqReboot message, length delimited. Does not implicitly {@link ReqReboot.verify|verify} messages.
     * @param message ReqReboot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqReboot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqReboot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqReboot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqReboot;

    /**
     * Decodes a ReqReboot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqReboot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqReboot;

    /**
     * Verifies a ReqReboot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqReboot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqReboot
     */
    public static fromObject(object: { [k: string]: any }): ReqReboot;

    /**
     * Creates a plain object from a ReqReboot message. Also converts values to other types if specified.
     * @param message ReqReboot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqReboot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqReboot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqReboot
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ShootingScheduleState enum. */
export enum ShootingScheduleState {
    SHOOTING_SCHEDULE_STATE_INITIALIZED = 0,
    SHOOTING_SCHEDULE_STATE_PENDING_SHOOT = 1,
    SHOOTING_SCHEDULE_STATE_SHOOTING = 2,
    SHOOTING_SCHEDULE_STATE_COMPLETED = 3,
    SHOOTING_SCHEDULE_STATE_EXPIRED = 4
}

/** ShootingScheduleSyncState enum. */
export enum ShootingScheduleSyncState {
    SHOOTING_SCHEDULE_SYNC_STATE_PENDING_SYNC = 0,
    SHOOTING_SCHEDULE_SYNC_STATE_SYNCED = 1
}

/** ShootingScheduleResult enum. */
export enum ShootingScheduleResult {
    SHOOTING_SCHEDULE_RESULT_PENDING_START = 0,
    SHOOTING_SCHEDULE_RESULT_ALL_COMPLETED = 1,
    SHOOTING_SCHEDULE_RESULT_PARTIALLY_COMPLETED = 2,
    SHOOTING_SCHEDULE_RESULT_ALL_FAILED = 3
}

/** ShootingTaskState enum. */
export enum ShootingTaskState {
    SHOOTING_TASK_STATUS_IDLE = 0,
    SHOOTING_TASK_STATUS_SHOOTING = 1,
    SHOOTING_TASK_STATUS_SUCCESS = 2,
    SHOOTING_TASK_STATUS_FAILED = 3,
    SHOOTING_TASK_STATUS_INTERRUPTED = 4
}

/** ShootingScheduleMode enum. */
export enum ShootingScheduleMode {
    SHOOTING_SCHEDULE_MODE_ASTRO_DEEP_SKY = 0
}

/** Represents a ShootingTaskMsg. */
export class ShootingTaskMsg implements IShootingTaskMsg {

    /**
     * Constructs a new ShootingTaskMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShootingTaskMsg);

    /** ShootingTaskMsg scheduleId. */
    public scheduleId: string;

    /** ShootingTaskMsg params. */
    public params: string;

    /** ShootingTaskMsg state. */
    public state: ShootingTaskState;

    /** ShootingTaskMsg code. */
    public code: number;

    /** ShootingTaskMsg createdTime. */
    public createdTime: (number|Long);

    /** ShootingTaskMsg updatedTime. */
    public updatedTime: (number|Long);

    /** ShootingTaskMsg scheduleTaskId. */
    public scheduleTaskId: string;

    /** ShootingTaskMsg paramMode. */
    public paramMode: number;

    /** ShootingTaskMsg paramVersion. */
    public paramVersion: number;

    /** ShootingTaskMsg createFrom. */
    public createFrom: number;

    /**
     * Creates a new ShootingTaskMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShootingTaskMsg instance
     */
    public static create(properties?: IShootingTaskMsg): ShootingTaskMsg;

    /**
     * Encodes the specified ShootingTaskMsg message. Does not implicitly {@link ShootingTaskMsg.verify|verify} messages.
     * @param message ShootingTaskMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IShootingTaskMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ShootingTaskMsg message, length delimited. Does not implicitly {@link ShootingTaskMsg.verify|verify} messages.
     * @param message ShootingTaskMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IShootingTaskMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShootingTaskMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShootingTaskMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShootingTaskMsg;

    /**
     * Decodes a ShootingTaskMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShootingTaskMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShootingTaskMsg;

    /**
     * Verifies a ShootingTaskMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ShootingTaskMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShootingTaskMsg
     */
    public static fromObject(object: { [k: string]: any }): ShootingTaskMsg;

    /**
     * Creates a plain object from a ShootingTaskMsg message. Also converts values to other types if specified.
     * @param message ShootingTaskMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ShootingTaskMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ShootingTaskMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ShootingTaskMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ShootingScheduleMsg. */
export class ShootingScheduleMsg implements IShootingScheduleMsg {

    /**
     * Constructs a new ShootingScheduleMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShootingScheduleMsg);

    /** ShootingScheduleMsg scheduleId. */
    public scheduleId: string;

    /** ShootingScheduleMsg scheduleName. */
    public scheduleName: string;

    /** ShootingScheduleMsg deviceId. */
    public deviceId: number;

    /** ShootingScheduleMsg macAddress. */
    public macAddress: string;

    /** ShootingScheduleMsg startTime. */
    public startTime: (number|Long);

    /** ShootingScheduleMsg endTime. */
    public endTime: (number|Long);

    /** ShootingScheduleMsg result. */
    public result: ShootingScheduleResult;

    /** ShootingScheduleMsg createdTime. */
    public createdTime: (number|Long);

    /** ShootingScheduleMsg updatedTime. */
    public updatedTime: (number|Long);

    /** ShootingScheduleMsg state. */
    public state: ShootingScheduleState;

    /** ShootingScheduleMsg lock. */
    public lock: number;

    /** ShootingScheduleMsg password. */
    public password: string;

    /** ShootingScheduleMsg shootingTasks. */
    public shootingTasks: IShootingTaskMsg[];

    /** ShootingScheduleMsg paramMode. */
    public paramMode: number;

    /** ShootingScheduleMsg paramVersion. */
    public paramVersion: number;

    /** ShootingScheduleMsg params. */
    public params: string;

    /** ShootingScheduleMsg scheduleTime. */
    public scheduleTime: (number|Long);

    /** ShootingScheduleMsg syncState. */
    public syncState: ShootingScheduleSyncState;

    /**
     * Creates a new ShootingScheduleMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShootingScheduleMsg instance
     */
    public static create(properties?: IShootingScheduleMsg): ShootingScheduleMsg;

    /**
     * Encodes the specified ShootingScheduleMsg message. Does not implicitly {@link ShootingScheduleMsg.verify|verify} messages.
     * @param message ShootingScheduleMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IShootingScheduleMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ShootingScheduleMsg message, length delimited. Does not implicitly {@link ShootingScheduleMsg.verify|verify} messages.
     * @param message ShootingScheduleMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IShootingScheduleMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShootingScheduleMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShootingScheduleMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShootingScheduleMsg;

    /**
     * Decodes a ShootingScheduleMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShootingScheduleMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShootingScheduleMsg;

    /**
     * Verifies a ShootingScheduleMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ShootingScheduleMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShootingScheduleMsg
     */
    public static fromObject(object: { [k: string]: any }): ShootingScheduleMsg;

    /**
     * Creates a plain object from a ShootingScheduleMsg message. Also converts values to other types if specified.
     * @param message ShootingScheduleMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ShootingScheduleMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ShootingScheduleMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ShootingScheduleMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSyncShootingSchedule. */
export class ReqSyncShootingSchedule implements IReqSyncShootingSchedule {

    /**
     * Constructs a new ReqSyncShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSyncShootingSchedule);

    /** ReqSyncShootingSchedule shootingSchedule. */
    public shootingSchedule?: (IShootingScheduleMsg|null);

    /**
     * Creates a new ReqSyncShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSyncShootingSchedule instance
     */
    public static create(properties?: IReqSyncShootingSchedule): ReqSyncShootingSchedule;

    /**
     * Encodes the specified ReqSyncShootingSchedule message. Does not implicitly {@link ReqSyncShootingSchedule.verify|verify} messages.
     * @param message ReqSyncShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSyncShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSyncShootingSchedule message, length delimited. Does not implicitly {@link ReqSyncShootingSchedule.verify|verify} messages.
     * @param message ReqSyncShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSyncShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSyncShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSyncShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSyncShootingSchedule;

    /**
     * Decodes a ReqSyncShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSyncShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSyncShootingSchedule;

    /**
     * Verifies a ReqSyncShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSyncShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSyncShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ReqSyncShootingSchedule;

    /**
     * Creates a plain object from a ReqSyncShootingSchedule message. Also converts values to other types if specified.
     * @param message ReqSyncShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSyncShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSyncShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSyncShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResSyncShootingSchedule. */
export class ResSyncShootingSchedule implements IResSyncShootingSchedule {

    /**
     * Constructs a new ResSyncShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResSyncShootingSchedule);

    /** ResSyncShootingSchedule shootingSchedule. */
    public shootingSchedule?: (IShootingScheduleMsg|null);

    /** ResSyncShootingSchedule timeConflictScheduleIds. */
    public timeConflictScheduleIds: string[];

    /** ResSyncShootingSchedule code. */
    public code: number;

    /** ResSyncShootingSchedule canReplace. */
    public canReplace: boolean;

    /**
     * Creates a new ResSyncShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResSyncShootingSchedule instance
     */
    public static create(properties?: IResSyncShootingSchedule): ResSyncShootingSchedule;

    /**
     * Encodes the specified ResSyncShootingSchedule message. Does not implicitly {@link ResSyncShootingSchedule.verify|verify} messages.
     * @param message ResSyncShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResSyncShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResSyncShootingSchedule message, length delimited. Does not implicitly {@link ResSyncShootingSchedule.verify|verify} messages.
     * @param message ResSyncShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResSyncShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResSyncShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResSyncShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResSyncShootingSchedule;

    /**
     * Decodes a ResSyncShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResSyncShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResSyncShootingSchedule;

    /**
     * Verifies a ResSyncShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResSyncShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResSyncShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ResSyncShootingSchedule;

    /**
     * Creates a plain object from a ResSyncShootingSchedule message. Also converts values to other types if specified.
     * @param message ResSyncShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResSyncShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResSyncShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResSyncShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqCancelShootingSchedule. */
export class ReqCancelShootingSchedule implements IReqCancelShootingSchedule {

    /**
     * Constructs a new ReqCancelShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCancelShootingSchedule);

    /** ReqCancelShootingSchedule id. */
    public id: string;

    /** ReqCancelShootingSchedule password. */
    public password: string;

    /**
     * Creates a new ReqCancelShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCancelShootingSchedule instance
     */
    public static create(properties?: IReqCancelShootingSchedule): ReqCancelShootingSchedule;

    /**
     * Encodes the specified ReqCancelShootingSchedule message. Does not implicitly {@link ReqCancelShootingSchedule.verify|verify} messages.
     * @param message ReqCancelShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCancelShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCancelShootingSchedule message, length delimited. Does not implicitly {@link ReqCancelShootingSchedule.verify|verify} messages.
     * @param message ReqCancelShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCancelShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCancelShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCancelShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCancelShootingSchedule;

    /**
     * Decodes a ReqCancelShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCancelShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCancelShootingSchedule;

    /**
     * Verifies a ReqCancelShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCancelShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCancelShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ReqCancelShootingSchedule;

    /**
     * Creates a plain object from a ReqCancelShootingSchedule message. Also converts values to other types if specified.
     * @param message ReqCancelShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCancelShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCancelShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCancelShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResCancelShootingSchedule. */
export class ResCancelShootingSchedule implements IResCancelShootingSchedule {

    /**
     * Constructs a new ResCancelShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResCancelShootingSchedule);

    /** ResCancelShootingSchedule id. */
    public id: string;

    /** ResCancelShootingSchedule code. */
    public code: number;

    /**
     * Creates a new ResCancelShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResCancelShootingSchedule instance
     */
    public static create(properties?: IResCancelShootingSchedule): ResCancelShootingSchedule;

    /**
     * Encodes the specified ResCancelShootingSchedule message. Does not implicitly {@link ResCancelShootingSchedule.verify|verify} messages.
     * @param message ResCancelShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResCancelShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResCancelShootingSchedule message, length delimited. Does not implicitly {@link ResCancelShootingSchedule.verify|verify} messages.
     * @param message ResCancelShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResCancelShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResCancelShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResCancelShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResCancelShootingSchedule;

    /**
     * Decodes a ResCancelShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResCancelShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResCancelShootingSchedule;

    /**
     * Verifies a ResCancelShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResCancelShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResCancelShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ResCancelShootingSchedule;

    /**
     * Creates a plain object from a ResCancelShootingSchedule message. Also converts values to other types if specified.
     * @param message ResCancelShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResCancelShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResCancelShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResCancelShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetAllShootingSchedule. */
export class ReqGetAllShootingSchedule implements IReqGetAllShootingSchedule {

    /**
     * Constructs a new ReqGetAllShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetAllShootingSchedule);

    /**
     * Creates a new ReqGetAllShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetAllShootingSchedule instance
     */
    public static create(properties?: IReqGetAllShootingSchedule): ReqGetAllShootingSchedule;

    /**
     * Encodes the specified ReqGetAllShootingSchedule message. Does not implicitly {@link ReqGetAllShootingSchedule.verify|verify} messages.
     * @param message ReqGetAllShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetAllShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetAllShootingSchedule message, length delimited. Does not implicitly {@link ReqGetAllShootingSchedule.verify|verify} messages.
     * @param message ReqGetAllShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetAllShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetAllShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetAllShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetAllShootingSchedule;

    /**
     * Decodes a ReqGetAllShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetAllShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetAllShootingSchedule;

    /**
     * Verifies a ReqGetAllShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetAllShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetAllShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ReqGetAllShootingSchedule;

    /**
     * Creates a plain object from a ReqGetAllShootingSchedule message. Also converts values to other types if specified.
     * @param message ReqGetAllShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetAllShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetAllShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetAllShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetAllShootingSchedule. */
export class ResGetAllShootingSchedule implements IResGetAllShootingSchedule {

    /**
     * Constructs a new ResGetAllShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetAllShootingSchedule);

    /** ResGetAllShootingSchedule shootingSchedule. */
    public shootingSchedule: IShootingScheduleMsg[];

    /** ResGetAllShootingSchedule code. */
    public code: number;

    /**
     * Creates a new ResGetAllShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetAllShootingSchedule instance
     */
    public static create(properties?: IResGetAllShootingSchedule): ResGetAllShootingSchedule;

    /**
     * Encodes the specified ResGetAllShootingSchedule message. Does not implicitly {@link ResGetAllShootingSchedule.verify|verify} messages.
     * @param message ResGetAllShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetAllShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetAllShootingSchedule message, length delimited. Does not implicitly {@link ResGetAllShootingSchedule.verify|verify} messages.
     * @param message ResGetAllShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetAllShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetAllShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetAllShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetAllShootingSchedule;

    /**
     * Decodes a ResGetAllShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetAllShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetAllShootingSchedule;

    /**
     * Verifies a ResGetAllShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetAllShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetAllShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ResGetAllShootingSchedule;

    /**
     * Creates a plain object from a ResGetAllShootingSchedule message. Also converts values to other types if specified.
     * @param message ResGetAllShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetAllShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetAllShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetAllShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetShootingScheduleById. */
export class ReqGetShootingScheduleById implements IReqGetShootingScheduleById {

    /**
     * Constructs a new ReqGetShootingScheduleById.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetShootingScheduleById);

    /** ReqGetShootingScheduleById id. */
    public id: string;

    /**
     * Creates a new ReqGetShootingScheduleById instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetShootingScheduleById instance
     */
    public static create(properties?: IReqGetShootingScheduleById): ReqGetShootingScheduleById;

    /**
     * Encodes the specified ReqGetShootingScheduleById message. Does not implicitly {@link ReqGetShootingScheduleById.verify|verify} messages.
     * @param message ReqGetShootingScheduleById message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetShootingScheduleById, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetShootingScheduleById message, length delimited. Does not implicitly {@link ReqGetShootingScheduleById.verify|verify} messages.
     * @param message ReqGetShootingScheduleById message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetShootingScheduleById, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetShootingScheduleById message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetShootingScheduleById
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetShootingScheduleById;

    /**
     * Decodes a ReqGetShootingScheduleById message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetShootingScheduleById
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetShootingScheduleById;

    /**
     * Verifies a ReqGetShootingScheduleById message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetShootingScheduleById message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetShootingScheduleById
     */
    public static fromObject(object: { [k: string]: any }): ReqGetShootingScheduleById;

    /**
     * Creates a plain object from a ReqGetShootingScheduleById message. Also converts values to other types if specified.
     * @param message ReqGetShootingScheduleById
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetShootingScheduleById, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetShootingScheduleById to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetShootingScheduleById
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetShootingScheduleById. */
export class ResGetShootingScheduleById implements IResGetShootingScheduleById {

    /**
     * Constructs a new ResGetShootingScheduleById.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetShootingScheduleById);

    /** ResGetShootingScheduleById shootingSchedule. */
    public shootingSchedule?: (IShootingScheduleMsg|null);

    /** ResGetShootingScheduleById code. */
    public code: number;

    /**
     * Creates a new ResGetShootingScheduleById instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetShootingScheduleById instance
     */
    public static create(properties?: IResGetShootingScheduleById): ResGetShootingScheduleById;

    /**
     * Encodes the specified ResGetShootingScheduleById message. Does not implicitly {@link ResGetShootingScheduleById.verify|verify} messages.
     * @param message ResGetShootingScheduleById message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetShootingScheduleById, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetShootingScheduleById message, length delimited. Does not implicitly {@link ResGetShootingScheduleById.verify|verify} messages.
     * @param message ResGetShootingScheduleById message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetShootingScheduleById, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetShootingScheduleById message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetShootingScheduleById
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetShootingScheduleById;

    /**
     * Decodes a ResGetShootingScheduleById message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetShootingScheduleById
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetShootingScheduleById;

    /**
     * Verifies a ResGetShootingScheduleById message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetShootingScheduleById message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetShootingScheduleById
     */
    public static fromObject(object: { [k: string]: any }): ResGetShootingScheduleById;

    /**
     * Creates a plain object from a ResGetShootingScheduleById message. Also converts values to other types if specified.
     * @param message ResGetShootingScheduleById
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetShootingScheduleById, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetShootingScheduleById to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetShootingScheduleById
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetShootingTaskById. */
export class ReqGetShootingTaskById implements IReqGetShootingTaskById {

    /**
     * Constructs a new ReqGetShootingTaskById.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetShootingTaskById);

    /** ReqGetShootingTaskById id. */
    public id: string;

    /**
     * Creates a new ReqGetShootingTaskById instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetShootingTaskById instance
     */
    public static create(properties?: IReqGetShootingTaskById): ReqGetShootingTaskById;

    /**
     * Encodes the specified ReqGetShootingTaskById message. Does not implicitly {@link ReqGetShootingTaskById.verify|verify} messages.
     * @param message ReqGetShootingTaskById message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetShootingTaskById, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetShootingTaskById message, length delimited. Does not implicitly {@link ReqGetShootingTaskById.verify|verify} messages.
     * @param message ReqGetShootingTaskById message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetShootingTaskById, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetShootingTaskById message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetShootingTaskById
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetShootingTaskById;

    /**
     * Decodes a ReqGetShootingTaskById message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetShootingTaskById
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetShootingTaskById;

    /**
     * Verifies a ReqGetShootingTaskById message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetShootingTaskById message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetShootingTaskById
     */
    public static fromObject(object: { [k: string]: any }): ReqGetShootingTaskById;

    /**
     * Creates a plain object from a ReqGetShootingTaskById message. Also converts values to other types if specified.
     * @param message ReqGetShootingTaskById
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetShootingTaskById, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetShootingTaskById to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetShootingTaskById
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetShootingTaskById. */
export class ResGetShootingTaskById implements IResGetShootingTaskById {

    /**
     * Constructs a new ResGetShootingTaskById.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetShootingTaskById);

    /** ResGetShootingTaskById shootingTask. */
    public shootingTask?: (IShootingTaskMsg|null);

    /** ResGetShootingTaskById code. */
    public code: number;

    /**
     * Creates a new ResGetShootingTaskById instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetShootingTaskById instance
     */
    public static create(properties?: IResGetShootingTaskById): ResGetShootingTaskById;

    /**
     * Encodes the specified ResGetShootingTaskById message. Does not implicitly {@link ResGetShootingTaskById.verify|verify} messages.
     * @param message ResGetShootingTaskById message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetShootingTaskById, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetShootingTaskById message, length delimited. Does not implicitly {@link ResGetShootingTaskById.verify|verify} messages.
     * @param message ResGetShootingTaskById message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetShootingTaskById, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetShootingTaskById message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetShootingTaskById
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetShootingTaskById;

    /**
     * Decodes a ResGetShootingTaskById message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetShootingTaskById
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetShootingTaskById;

    /**
     * Verifies a ResGetShootingTaskById message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetShootingTaskById message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetShootingTaskById
     */
    public static fromObject(object: { [k: string]: any }): ResGetShootingTaskById;

    /**
     * Creates a plain object from a ResGetShootingTaskById message. Also converts values to other types if specified.
     * @param message ResGetShootingTaskById
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetShootingTaskById, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetShootingTaskById to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetShootingTaskById
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqReplaceShootingSchedule. */
export class ReqReplaceShootingSchedule implements IReqReplaceShootingSchedule {

    /**
     * Constructs a new ReqReplaceShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqReplaceShootingSchedule);

    /** ReqReplaceShootingSchedule shootingSchedule. */
    public shootingSchedule?: (IShootingScheduleMsg|null);

    /**
     * Creates a new ReqReplaceShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqReplaceShootingSchedule instance
     */
    public static create(properties?: IReqReplaceShootingSchedule): ReqReplaceShootingSchedule;

    /**
     * Encodes the specified ReqReplaceShootingSchedule message. Does not implicitly {@link ReqReplaceShootingSchedule.verify|verify} messages.
     * @param message ReqReplaceShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqReplaceShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqReplaceShootingSchedule message, length delimited. Does not implicitly {@link ReqReplaceShootingSchedule.verify|verify} messages.
     * @param message ReqReplaceShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqReplaceShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqReplaceShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqReplaceShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqReplaceShootingSchedule;

    /**
     * Decodes a ReqReplaceShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqReplaceShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqReplaceShootingSchedule;

    /**
     * Verifies a ReqReplaceShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqReplaceShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqReplaceShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ReqReplaceShootingSchedule;

    /**
     * Creates a plain object from a ReqReplaceShootingSchedule message. Also converts values to other types if specified.
     * @param message ReqReplaceShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqReplaceShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqReplaceShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqReplaceShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResReplaceShootingSchedule. */
export class ResReplaceShootingSchedule implements IResReplaceShootingSchedule {

    /**
     * Constructs a new ResReplaceShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResReplaceShootingSchedule);

    /** ResReplaceShootingSchedule shootingSchedule. */
    public shootingSchedule?: (IShootingScheduleMsg|null);

    /** ResReplaceShootingSchedule code. */
    public code: number;

    /**
     * Creates a new ResReplaceShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResReplaceShootingSchedule instance
     */
    public static create(properties?: IResReplaceShootingSchedule): ResReplaceShootingSchedule;

    /**
     * Encodes the specified ResReplaceShootingSchedule message. Does not implicitly {@link ResReplaceShootingSchedule.verify|verify} messages.
     * @param message ResReplaceShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResReplaceShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResReplaceShootingSchedule message, length delimited. Does not implicitly {@link ResReplaceShootingSchedule.verify|verify} messages.
     * @param message ResReplaceShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResReplaceShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResReplaceShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResReplaceShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResReplaceShootingSchedule;

    /**
     * Decodes a ResReplaceShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResReplaceShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResReplaceShootingSchedule;

    /**
     * Verifies a ResReplaceShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResReplaceShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResReplaceShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ResReplaceShootingSchedule;

    /**
     * Creates a plain object from a ResReplaceShootingSchedule message. Also converts values to other types if specified.
     * @param message ResReplaceShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResReplaceShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResReplaceShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResReplaceShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqUnlockShootingSchedule. */
export class ReqUnlockShootingSchedule implements IReqUnlockShootingSchedule {

    /**
     * Constructs a new ReqUnlockShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqUnlockShootingSchedule);

    /** ReqUnlockShootingSchedule id. */
    public id: string;

    /** ReqUnlockShootingSchedule password. */
    public password: string;

    /**
     * Creates a new ReqUnlockShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqUnlockShootingSchedule instance
     */
    public static create(properties?: IReqUnlockShootingSchedule): ReqUnlockShootingSchedule;

    /**
     * Encodes the specified ReqUnlockShootingSchedule message. Does not implicitly {@link ReqUnlockShootingSchedule.verify|verify} messages.
     * @param message ReqUnlockShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqUnlockShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqUnlockShootingSchedule message, length delimited. Does not implicitly {@link ReqUnlockShootingSchedule.verify|verify} messages.
     * @param message ReqUnlockShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqUnlockShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqUnlockShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqUnlockShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqUnlockShootingSchedule;

    /**
     * Decodes a ReqUnlockShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqUnlockShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqUnlockShootingSchedule;

    /**
     * Verifies a ReqUnlockShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqUnlockShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqUnlockShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ReqUnlockShootingSchedule;

    /**
     * Creates a plain object from a ReqUnlockShootingSchedule message. Also converts values to other types if specified.
     * @param message ReqUnlockShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqUnlockShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqUnlockShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqUnlockShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResUnlockShootingSchedule. */
export class ResUnlockShootingSchedule implements IResUnlockShootingSchedule {

    /**
     * Constructs a new ResUnlockShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResUnlockShootingSchedule);

    /** ResUnlockShootingSchedule id. */
    public id: string;

    /** ResUnlockShootingSchedule code. */
    public code: number;

    /**
     * Creates a new ResUnlockShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResUnlockShootingSchedule instance
     */
    public static create(properties?: IResUnlockShootingSchedule): ResUnlockShootingSchedule;

    /**
     * Encodes the specified ResUnlockShootingSchedule message. Does not implicitly {@link ResUnlockShootingSchedule.verify|verify} messages.
     * @param message ResUnlockShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResUnlockShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResUnlockShootingSchedule message, length delimited. Does not implicitly {@link ResUnlockShootingSchedule.verify|verify} messages.
     * @param message ResUnlockShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResUnlockShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResUnlockShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResUnlockShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResUnlockShootingSchedule;

    /**
     * Decodes a ResUnlockShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResUnlockShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResUnlockShootingSchedule;

    /**
     * Verifies a ResUnlockShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResUnlockShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResUnlockShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ResUnlockShootingSchedule;

    /**
     * Creates a plain object from a ResUnlockShootingSchedule message. Also converts values to other types if specified.
     * @param message ResUnlockShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResUnlockShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResUnlockShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResUnlockShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqLockShootingSchedule. */
export class ReqLockShootingSchedule implements IReqLockShootingSchedule {

    /**
     * Constructs a new ReqLockShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqLockShootingSchedule);

    /** ReqLockShootingSchedule id. */
    public id: string;

    /** ReqLockShootingSchedule password. */
    public password: string;

    /**
     * Creates a new ReqLockShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqLockShootingSchedule instance
     */
    public static create(properties?: IReqLockShootingSchedule): ReqLockShootingSchedule;

    /**
     * Encodes the specified ReqLockShootingSchedule message. Does not implicitly {@link ReqLockShootingSchedule.verify|verify} messages.
     * @param message ReqLockShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqLockShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqLockShootingSchedule message, length delimited. Does not implicitly {@link ReqLockShootingSchedule.verify|verify} messages.
     * @param message ReqLockShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqLockShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqLockShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqLockShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqLockShootingSchedule;

    /**
     * Decodes a ReqLockShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqLockShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqLockShootingSchedule;

    /**
     * Verifies a ReqLockShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqLockShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqLockShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ReqLockShootingSchedule;

    /**
     * Creates a plain object from a ReqLockShootingSchedule message. Also converts values to other types if specified.
     * @param message ReqLockShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqLockShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqLockShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqLockShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResLockShootingSchedule. */
export class ResLockShootingSchedule implements IResLockShootingSchedule {

    /**
     * Constructs a new ResLockShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResLockShootingSchedule);

    /** ResLockShootingSchedule id. */
    public id: string;

    /** ResLockShootingSchedule code. */
    public code: number;

    /**
     * Creates a new ResLockShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResLockShootingSchedule instance
     */
    public static create(properties?: IResLockShootingSchedule): ResLockShootingSchedule;

    /**
     * Encodes the specified ResLockShootingSchedule message. Does not implicitly {@link ResLockShootingSchedule.verify|verify} messages.
     * @param message ResLockShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResLockShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResLockShootingSchedule message, length delimited. Does not implicitly {@link ResLockShootingSchedule.verify|verify} messages.
     * @param message ResLockShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResLockShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResLockShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResLockShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResLockShootingSchedule;

    /**
     * Decodes a ResLockShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResLockShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResLockShootingSchedule;

    /**
     * Verifies a ResLockShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResLockShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResLockShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ResLockShootingSchedule;

    /**
     * Creates a plain object from a ResLockShootingSchedule message. Also converts values to other types if specified.
     * @param message ResLockShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResLockShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResLockShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResLockShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqDeleteShootingSchedule. */
export class ReqDeleteShootingSchedule implements IReqDeleteShootingSchedule {

    /**
     * Constructs a new ReqDeleteShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDeleteShootingSchedule);

    /** ReqDeleteShootingSchedule id. */
    public id: string;

    /** ReqDeleteShootingSchedule password. */
    public password: string;

    /**
     * Creates a new ReqDeleteShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDeleteShootingSchedule instance
     */
    public static create(properties?: IReqDeleteShootingSchedule): ReqDeleteShootingSchedule;

    /**
     * Encodes the specified ReqDeleteShootingSchedule message. Does not implicitly {@link ReqDeleteShootingSchedule.verify|verify} messages.
     * @param message ReqDeleteShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDeleteShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDeleteShootingSchedule message, length delimited. Does not implicitly {@link ReqDeleteShootingSchedule.verify|verify} messages.
     * @param message ReqDeleteShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDeleteShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDeleteShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDeleteShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDeleteShootingSchedule;

    /**
     * Decodes a ReqDeleteShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDeleteShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDeleteShootingSchedule;

    /**
     * Verifies a ReqDeleteShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDeleteShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDeleteShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ReqDeleteShootingSchedule;

    /**
     * Creates a plain object from a ReqDeleteShootingSchedule message. Also converts values to other types if specified.
     * @param message ReqDeleteShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDeleteShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDeleteShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDeleteShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResDeleteShootingSchedule. */
export class ResDeleteShootingSchedule implements IResDeleteShootingSchedule {

    /**
     * Constructs a new ResDeleteShootingSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResDeleteShootingSchedule);

    /** ResDeleteShootingSchedule id. */
    public id: string;

    /** ResDeleteShootingSchedule code. */
    public code: number;

    /**
     * Creates a new ResDeleteShootingSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResDeleteShootingSchedule instance
     */
    public static create(properties?: IResDeleteShootingSchedule): ResDeleteShootingSchedule;

    /**
     * Encodes the specified ResDeleteShootingSchedule message. Does not implicitly {@link ResDeleteShootingSchedule.verify|verify} messages.
     * @param message ResDeleteShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResDeleteShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResDeleteShootingSchedule message, length delimited. Does not implicitly {@link ResDeleteShootingSchedule.verify|verify} messages.
     * @param message ResDeleteShootingSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResDeleteShootingSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResDeleteShootingSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResDeleteShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResDeleteShootingSchedule;

    /**
     * Decodes a ResDeleteShootingSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResDeleteShootingSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResDeleteShootingSchedule;

    /**
     * Verifies a ResDeleteShootingSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResDeleteShootingSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResDeleteShootingSchedule
     */
    public static fromObject(object: { [k: string]: any }): ResDeleteShootingSchedule;

    /**
     * Creates a plain object from a ResDeleteShootingSchedule message. Also converts values to other types if specified.
     * @param message ResDeleteShootingSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResDeleteShootingSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResDeleteShootingSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResDeleteShootingSchedule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetTime. */
export class ReqSetTime implements IReqSetTime {

    /**
     * Constructs a new ReqSetTime.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetTime);

    /** ReqSetTime timestamp. */
    public timestamp: (number|Long);

    /** ReqSetTime timezoneOffset. */
    public timezoneOffset: number;

    /**
     * Creates a new ReqSetTime instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetTime instance
     */
    public static create(properties?: IReqSetTime): ReqSetTime;

    /**
     * Encodes the specified ReqSetTime message. Does not implicitly {@link ReqSetTime.verify|verify} messages.
     * @param message ReqSetTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetTime message, length delimited. Does not implicitly {@link ReqSetTime.verify|verify} messages.
     * @param message ReqSetTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetTime message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetTime;

    /**
     * Decodes a ReqSetTime message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetTime;

    /**
     * Verifies a ReqSetTime message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetTime message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetTime
     */
    public static fromObject(object: { [k: string]: any }): ReqSetTime;

    /**
     * Creates a plain object from a ReqSetTime message. Also converts values to other types if specified.
     * @param message ReqSetTime
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetTime to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetTime
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetTimezone. */
export class ReqSetTimezone implements IReqSetTimezone {

    /**
     * Constructs a new ReqSetTimezone.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetTimezone);

    /** ReqSetTimezone timezone. */
    public timezone: string;

    /**
     * Creates a new ReqSetTimezone instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetTimezone instance
     */
    public static create(properties?: IReqSetTimezone): ReqSetTimezone;

    /**
     * Encodes the specified ReqSetTimezone message. Does not implicitly {@link ReqSetTimezone.verify|verify} messages.
     * @param message ReqSetTimezone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetTimezone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetTimezone message, length delimited. Does not implicitly {@link ReqSetTimezone.verify|verify} messages.
     * @param message ReqSetTimezone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetTimezone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetTimezone message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetTimezone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetTimezone;

    /**
     * Decodes a ReqSetTimezone message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetTimezone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetTimezone;

    /**
     * Verifies a ReqSetTimezone message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetTimezone message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetTimezone
     */
    public static fromObject(object: { [k: string]: any }): ReqSetTimezone;

    /**
     * Creates a plain object from a ReqSetTimezone message. Also converts values to other types if specified.
     * @param message ReqSetTimezone
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetTimezone, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetTimezone to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetTimezone
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetMtpMode. */
export class ReqSetMtpMode implements IReqSetMtpMode {

    /**
     * Constructs a new ReqSetMtpMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetMtpMode);

    /** ReqSetMtpMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetMtpMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetMtpMode instance
     */
    public static create(properties?: IReqSetMtpMode): ReqSetMtpMode;

    /**
     * Encodes the specified ReqSetMtpMode message. Does not implicitly {@link ReqSetMtpMode.verify|verify} messages.
     * @param message ReqSetMtpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetMtpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetMtpMode message, length delimited. Does not implicitly {@link ReqSetMtpMode.verify|verify} messages.
     * @param message ReqSetMtpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetMtpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetMtpMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetMtpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetMtpMode;

    /**
     * Decodes a ReqSetMtpMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetMtpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetMtpMode;

    /**
     * Verifies a ReqSetMtpMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetMtpMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetMtpMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetMtpMode;

    /**
     * Creates a plain object from a ReqSetMtpMode message. Also converts values to other types if specified.
     * @param message ReqSetMtpMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetMtpMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetMtpMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetMtpMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetCpuMode. */
export class ReqSetCpuMode implements IReqSetCpuMode {

    /**
     * Constructs a new ReqSetCpuMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetCpuMode);

    /** ReqSetCpuMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetCpuMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetCpuMode instance
     */
    public static create(properties?: IReqSetCpuMode): ReqSetCpuMode;

    /**
     * Encodes the specified ReqSetCpuMode message. Does not implicitly {@link ReqSetCpuMode.verify|verify} messages.
     * @param message ReqSetCpuMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetCpuMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetCpuMode message, length delimited. Does not implicitly {@link ReqSetCpuMode.verify|verify} messages.
     * @param message ReqSetCpuMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetCpuMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetCpuMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetCpuMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetCpuMode;

    /**
     * Decodes a ReqSetCpuMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetCpuMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetCpuMode;

    /**
     * Verifies a ReqSetCpuMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetCpuMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetCpuMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetCpuMode;

    /**
     * Creates a plain object from a ReqSetCpuMode message. Also converts values to other types if specified.
     * @param message ReqSetCpuMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetCpuMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetCpuMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetCpuMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqsetMasterLock. */
export class ReqsetMasterLock implements IReqsetMasterLock {

    /**
     * Constructs a new ReqsetMasterLock.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqsetMasterLock);

    /** ReqsetMasterLock lock. */
    public lock: boolean;

    /**
     * Creates a new ReqsetMasterLock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqsetMasterLock instance
     */
    public static create(properties?: IReqsetMasterLock): ReqsetMasterLock;

    /**
     * Encodes the specified ReqsetMasterLock message. Does not implicitly {@link ReqsetMasterLock.verify|verify} messages.
     * @param message ReqsetMasterLock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqsetMasterLock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqsetMasterLock message, length delimited. Does not implicitly {@link ReqsetMasterLock.verify|verify} messages.
     * @param message ReqsetMasterLock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqsetMasterLock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqsetMasterLock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqsetMasterLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqsetMasterLock;

    /**
     * Decodes a ReqsetMasterLock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqsetMasterLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqsetMasterLock;

    /**
     * Verifies a ReqsetMasterLock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqsetMasterLock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqsetMasterLock
     */
    public static fromObject(object: { [k: string]: any }): ReqsetMasterLock;

    /**
     * Creates a plain object from a ReqsetMasterLock message. Also converts values to other types if specified.
     * @param message ReqsetMasterLock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqsetMasterLock, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqsetMasterLock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqsetMasterLock
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetDeviceActivateInfo. */
export class ReqGetDeviceActivateInfo implements IReqGetDeviceActivateInfo {

    /**
     * Constructs a new ReqGetDeviceActivateInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetDeviceActivateInfo);

    /** ReqGetDeviceActivateInfo issuer. */
    public issuer: number;

    /**
     * Creates a new ReqGetDeviceActivateInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetDeviceActivateInfo instance
     */
    public static create(properties?: IReqGetDeviceActivateInfo): ReqGetDeviceActivateInfo;

    /**
     * Encodes the specified ReqGetDeviceActivateInfo message. Does not implicitly {@link ReqGetDeviceActivateInfo.verify|verify} messages.
     * @param message ReqGetDeviceActivateInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetDeviceActivateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetDeviceActivateInfo message, length delimited. Does not implicitly {@link ReqGetDeviceActivateInfo.verify|verify} messages.
     * @param message ReqGetDeviceActivateInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetDeviceActivateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetDeviceActivateInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetDeviceActivateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetDeviceActivateInfo;

    /**
     * Decodes a ReqGetDeviceActivateInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetDeviceActivateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetDeviceActivateInfo;

    /**
     * Verifies a ReqGetDeviceActivateInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetDeviceActivateInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetDeviceActivateInfo
     */
    public static fromObject(object: { [k: string]: any }): ReqGetDeviceActivateInfo;

    /**
     * Creates a plain object from a ReqGetDeviceActivateInfo message. Also converts values to other types if specified.
     * @param message ReqGetDeviceActivateInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetDeviceActivateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetDeviceActivateInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetDeviceActivateInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResDeviceActivateInfo. */
export class ResDeviceActivateInfo implements IResDeviceActivateInfo {

    /**
     * Constructs a new ResDeviceActivateInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResDeviceActivateInfo);

    /** ResDeviceActivateInfo activateState. */
    public activateState: number;

    /** ResDeviceActivateInfo activateProcessState. */
    public activateProcessState: number;

    /** ResDeviceActivateInfo requestParam. */
    public requestParam: string;

    /**
     * Creates a new ResDeviceActivateInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResDeviceActivateInfo instance
     */
    public static create(properties?: IResDeviceActivateInfo): ResDeviceActivateInfo;

    /**
     * Encodes the specified ResDeviceActivateInfo message. Does not implicitly {@link ResDeviceActivateInfo.verify|verify} messages.
     * @param message ResDeviceActivateInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResDeviceActivateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResDeviceActivateInfo message, length delimited. Does not implicitly {@link ResDeviceActivateInfo.verify|verify} messages.
     * @param message ResDeviceActivateInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResDeviceActivateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResDeviceActivateInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResDeviceActivateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResDeviceActivateInfo;

    /**
     * Decodes a ResDeviceActivateInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResDeviceActivateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResDeviceActivateInfo;

    /**
     * Verifies a ResDeviceActivateInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResDeviceActivateInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResDeviceActivateInfo
     */
    public static fromObject(object: { [k: string]: any }): ResDeviceActivateInfo;

    /**
     * Creates a plain object from a ResDeviceActivateInfo message. Also converts values to other types if specified.
     * @param message ResDeviceActivateInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResDeviceActivateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResDeviceActivateInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResDeviceActivateInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqDeviceActivateWriteFile. */
export class ReqDeviceActivateWriteFile implements IReqDeviceActivateWriteFile {

    /**
     * Constructs a new ReqDeviceActivateWriteFile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDeviceActivateWriteFile);

    /** ReqDeviceActivateWriteFile requestParam. */
    public requestParam: string;

    /**
     * Creates a new ReqDeviceActivateWriteFile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDeviceActivateWriteFile instance
     */
    public static create(properties?: IReqDeviceActivateWriteFile): ReqDeviceActivateWriteFile;

    /**
     * Encodes the specified ReqDeviceActivateWriteFile message. Does not implicitly {@link ReqDeviceActivateWriteFile.verify|verify} messages.
     * @param message ReqDeviceActivateWriteFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDeviceActivateWriteFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDeviceActivateWriteFile message, length delimited. Does not implicitly {@link ReqDeviceActivateWriteFile.verify|verify} messages.
     * @param message ReqDeviceActivateWriteFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDeviceActivateWriteFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDeviceActivateWriteFile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDeviceActivateWriteFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDeviceActivateWriteFile;

    /**
     * Decodes a ReqDeviceActivateWriteFile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDeviceActivateWriteFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDeviceActivateWriteFile;

    /**
     * Verifies a ReqDeviceActivateWriteFile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDeviceActivateWriteFile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDeviceActivateWriteFile
     */
    public static fromObject(object: { [k: string]: any }): ReqDeviceActivateWriteFile;

    /**
     * Creates a plain object from a ReqDeviceActivateWriteFile message. Also converts values to other types if specified.
     * @param message ReqDeviceActivateWriteFile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDeviceActivateWriteFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDeviceActivateWriteFile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDeviceActivateWriteFile
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResDeviceActivateWriteFile. */
export class ResDeviceActivateWriteFile implements IResDeviceActivateWriteFile {

    /**
     * Constructs a new ResDeviceActivateWriteFile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResDeviceActivateWriteFile);

    /** ResDeviceActivateWriteFile code. */
    public code: number;

    /** ResDeviceActivateWriteFile requestParam. */
    public requestParam: string;

    /**
     * Creates a new ResDeviceActivateWriteFile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResDeviceActivateWriteFile instance
     */
    public static create(properties?: IResDeviceActivateWriteFile): ResDeviceActivateWriteFile;

    /**
     * Encodes the specified ResDeviceActivateWriteFile message. Does not implicitly {@link ResDeviceActivateWriteFile.verify|verify} messages.
     * @param message ResDeviceActivateWriteFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResDeviceActivateWriteFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResDeviceActivateWriteFile message, length delimited. Does not implicitly {@link ResDeviceActivateWriteFile.verify|verify} messages.
     * @param message ResDeviceActivateWriteFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResDeviceActivateWriteFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResDeviceActivateWriteFile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResDeviceActivateWriteFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResDeviceActivateWriteFile;

    /**
     * Decodes a ResDeviceActivateWriteFile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResDeviceActivateWriteFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResDeviceActivateWriteFile;

    /**
     * Verifies a ResDeviceActivateWriteFile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResDeviceActivateWriteFile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResDeviceActivateWriteFile
     */
    public static fromObject(object: { [k: string]: any }): ResDeviceActivateWriteFile;

    /**
     * Creates a plain object from a ResDeviceActivateWriteFile message. Also converts values to other types if specified.
     * @param message ResDeviceActivateWriteFile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResDeviceActivateWriteFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResDeviceActivateWriteFile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResDeviceActivateWriteFile
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqDeviceActivateSuccessfull. */
export class ReqDeviceActivateSuccessfull implements IReqDeviceActivateSuccessfull {

    /**
     * Constructs a new ReqDeviceActivateSuccessfull.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDeviceActivateSuccessfull);

    /** ReqDeviceActivateSuccessfull requestParam. */
    public requestParam: string;

    /**
     * Creates a new ReqDeviceActivateSuccessfull instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDeviceActivateSuccessfull instance
     */
    public static create(properties?: IReqDeviceActivateSuccessfull): ReqDeviceActivateSuccessfull;

    /**
     * Encodes the specified ReqDeviceActivateSuccessfull message. Does not implicitly {@link ReqDeviceActivateSuccessfull.verify|verify} messages.
     * @param message ReqDeviceActivateSuccessfull message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDeviceActivateSuccessfull, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDeviceActivateSuccessfull message, length delimited. Does not implicitly {@link ReqDeviceActivateSuccessfull.verify|verify} messages.
     * @param message ReqDeviceActivateSuccessfull message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDeviceActivateSuccessfull, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDeviceActivateSuccessfull message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDeviceActivateSuccessfull
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDeviceActivateSuccessfull;

    /**
     * Decodes a ReqDeviceActivateSuccessfull message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDeviceActivateSuccessfull
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDeviceActivateSuccessfull;

    /**
     * Verifies a ReqDeviceActivateSuccessfull message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDeviceActivateSuccessfull message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDeviceActivateSuccessfull
     */
    public static fromObject(object: { [k: string]: any }): ReqDeviceActivateSuccessfull;

    /**
     * Creates a plain object from a ReqDeviceActivateSuccessfull message. Also converts values to other types if specified.
     * @param message ReqDeviceActivateSuccessfull
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDeviceActivateSuccessfull, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDeviceActivateSuccessfull to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDeviceActivateSuccessfull
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResDeviceActivateSuccessfull. */
export class ResDeviceActivateSuccessfull implements IResDeviceActivateSuccessfull {

    /**
     * Constructs a new ResDeviceActivateSuccessfull.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResDeviceActivateSuccessfull);

    /** ResDeviceActivateSuccessfull code. */
    public code: number;

    /** ResDeviceActivateSuccessfull activateState. */
    public activateState: number;

    /**
     * Creates a new ResDeviceActivateSuccessfull instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResDeviceActivateSuccessfull instance
     */
    public static create(properties?: IResDeviceActivateSuccessfull): ResDeviceActivateSuccessfull;

    /**
     * Encodes the specified ResDeviceActivateSuccessfull message. Does not implicitly {@link ResDeviceActivateSuccessfull.verify|verify} messages.
     * @param message ResDeviceActivateSuccessfull message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResDeviceActivateSuccessfull, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResDeviceActivateSuccessfull message, length delimited. Does not implicitly {@link ResDeviceActivateSuccessfull.verify|verify} messages.
     * @param message ResDeviceActivateSuccessfull message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResDeviceActivateSuccessfull, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResDeviceActivateSuccessfull message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResDeviceActivateSuccessfull
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResDeviceActivateSuccessfull;

    /**
     * Decodes a ResDeviceActivateSuccessfull message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResDeviceActivateSuccessfull
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResDeviceActivateSuccessfull;

    /**
     * Verifies a ResDeviceActivateSuccessfull message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResDeviceActivateSuccessfull message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResDeviceActivateSuccessfull
     */
    public static fromObject(object: { [k: string]: any }): ResDeviceActivateSuccessfull;

    /**
     * Creates a plain object from a ResDeviceActivateSuccessfull message. Also converts values to other types if specified.
     * @param message ResDeviceActivateSuccessfull
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResDeviceActivateSuccessfull, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResDeviceActivateSuccessfull to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResDeviceActivateSuccessfull
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqDisableDeviceActivate. */
export class ReqDisableDeviceActivate implements IReqDisableDeviceActivate {

    /**
     * Constructs a new ReqDisableDeviceActivate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqDisableDeviceActivate);

    /** ReqDisableDeviceActivate requestParam. */
    public requestParam: string;

    /**
     * Creates a new ReqDisableDeviceActivate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqDisableDeviceActivate instance
     */
    public static create(properties?: IReqDisableDeviceActivate): ReqDisableDeviceActivate;

    /**
     * Encodes the specified ReqDisableDeviceActivate message. Does not implicitly {@link ReqDisableDeviceActivate.verify|verify} messages.
     * @param message ReqDisableDeviceActivate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqDisableDeviceActivate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqDisableDeviceActivate message, length delimited. Does not implicitly {@link ReqDisableDeviceActivate.verify|verify} messages.
     * @param message ReqDisableDeviceActivate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqDisableDeviceActivate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqDisableDeviceActivate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqDisableDeviceActivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqDisableDeviceActivate;

    /**
     * Decodes a ReqDisableDeviceActivate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqDisableDeviceActivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqDisableDeviceActivate;

    /**
     * Verifies a ReqDisableDeviceActivate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqDisableDeviceActivate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqDisableDeviceActivate
     */
    public static fromObject(object: { [k: string]: any }): ReqDisableDeviceActivate;

    /**
     * Creates a plain object from a ReqDisableDeviceActivate message. Also converts values to other types if specified.
     * @param message ReqDisableDeviceActivate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqDisableDeviceActivate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqDisableDeviceActivate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqDisableDeviceActivate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResDisableDeviceActivate. */
export class ResDisableDeviceActivate implements IResDisableDeviceActivate {

    /**
     * Constructs a new ResDisableDeviceActivate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResDisableDeviceActivate);

    /** ResDisableDeviceActivate code. */
    public code: number;

    /** ResDisableDeviceActivate activateState. */
    public activateState: number;

    /**
     * Creates a new ResDisableDeviceActivate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResDisableDeviceActivate instance
     */
    public static create(properties?: IResDisableDeviceActivate): ResDisableDeviceActivate;

    /**
     * Encodes the specified ResDisableDeviceActivate message. Does not implicitly {@link ResDisableDeviceActivate.verify|verify} messages.
     * @param message ResDisableDeviceActivate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResDisableDeviceActivate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResDisableDeviceActivate message, length delimited. Does not implicitly {@link ResDisableDeviceActivate.verify|verify} messages.
     * @param message ResDisableDeviceActivate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResDisableDeviceActivate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResDisableDeviceActivate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResDisableDeviceActivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResDisableDeviceActivate;

    /**
     * Decodes a ResDisableDeviceActivate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResDisableDeviceActivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResDisableDeviceActivate;

    /**
     * Verifies a ResDisableDeviceActivate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResDisableDeviceActivate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResDisableDeviceActivate
     */
    public static fromObject(object: { [k: string]: any }): ResDisableDeviceActivate;

    /**
     * Creates a plain object from a ResDisableDeviceActivate message. Also converts values to other types if specified.
     * @param message ResDisableDeviceActivate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResDisableDeviceActivate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResDisableDeviceActivate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResDisableDeviceActivate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStartTrack. */
export class ReqStartTrack implements IReqStartTrack {

    /**
     * Constructs a new ReqStartTrack.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartTrack);

    /** ReqStartTrack x. */
    public x: number;

    /** ReqStartTrack y. */
    public y: number;

    /** ReqStartTrack w. */
    public w: number;

    /** ReqStartTrack h. */
    public h: number;

    /**
     * Creates a new ReqStartTrack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartTrack instance
     */
    public static create(properties?: IReqStartTrack): ReqStartTrack;

    /**
     * Encodes the specified ReqStartTrack message. Does not implicitly {@link ReqStartTrack.verify|verify} messages.
     * @param message ReqStartTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartTrack message, length delimited. Does not implicitly {@link ReqStartTrack.verify|verify} messages.
     * @param message ReqStartTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartTrack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartTrack;

    /**
     * Decodes a ReqStartTrack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartTrack;

    /**
     * Verifies a ReqStartTrack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartTrack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartTrack
     */
    public static fromObject(object: { [k: string]: any }): ReqStartTrack;

    /**
     * Creates a plain object from a ReqStartTrack message. Also converts values to other types if specified.
     * @param message ReqStartTrack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartTrack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartTrack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartTrack
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopTrack. */
export class ReqStopTrack implements IReqStopTrack {

    /**
     * Constructs a new ReqStopTrack.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopTrack);

    /**
     * Creates a new ReqStopTrack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopTrack instance
     */
    public static create(properties?: IReqStopTrack): ReqStopTrack;

    /**
     * Encodes the specified ReqStopTrack message. Does not implicitly {@link ReqStopTrack.verify|verify} messages.
     * @param message ReqStopTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopTrack message, length delimited. Does not implicitly {@link ReqStopTrack.verify|verify} messages.
     * @param message ReqStopTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopTrack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopTrack;

    /**
     * Decodes a ReqStopTrack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopTrack;

    /**
     * Verifies a ReqStopTrack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopTrack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopTrack
     */
    public static fromObject(object: { [k: string]: any }): ReqStopTrack;

    /**
     * Creates a plain object from a ReqStopTrack message. Also converts values to other types if specified.
     * @param message ReqStopTrack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopTrack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopTrack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopTrack
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqPauseTrack. */
export class ReqPauseTrack implements IReqPauseTrack {

    /**
     * Constructs a new ReqPauseTrack.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPauseTrack);

    /**
     * Creates a new ReqPauseTrack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPauseTrack instance
     */
    public static create(properties?: IReqPauseTrack): ReqPauseTrack;

    /**
     * Encodes the specified ReqPauseTrack message. Does not implicitly {@link ReqPauseTrack.verify|verify} messages.
     * @param message ReqPauseTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPauseTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPauseTrack message, length delimited. Does not implicitly {@link ReqPauseTrack.verify|verify} messages.
     * @param message ReqPauseTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPauseTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPauseTrack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPauseTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPauseTrack;

    /**
     * Decodes a ReqPauseTrack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPauseTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPauseTrack;

    /**
     * Verifies a ReqPauseTrack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPauseTrack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPauseTrack
     */
    public static fromObject(object: { [k: string]: any }): ReqPauseTrack;

    /**
     * Creates a plain object from a ReqPauseTrack message. Also converts values to other types if specified.
     * @param message ReqPauseTrack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPauseTrack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPauseTrack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqPauseTrack
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqContinueTrack. */
export class ReqContinueTrack implements IReqContinueTrack {

    /**
     * Constructs a new ReqContinueTrack.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqContinueTrack);

    /**
     * Creates a new ReqContinueTrack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqContinueTrack instance
     */
    public static create(properties?: IReqContinueTrack): ReqContinueTrack;

    /**
     * Encodes the specified ReqContinueTrack message. Does not implicitly {@link ReqContinueTrack.verify|verify} messages.
     * @param message ReqContinueTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqContinueTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqContinueTrack message, length delimited. Does not implicitly {@link ReqContinueTrack.verify|verify} messages.
     * @param message ReqContinueTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqContinueTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqContinueTrack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqContinueTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqContinueTrack;

    /**
     * Decodes a ReqContinueTrack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqContinueTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqContinueTrack;

    /**
     * Verifies a ReqContinueTrack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqContinueTrack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqContinueTrack
     */
    public static fromObject(object: { [k: string]: any }): ReqContinueTrack;

    /**
     * Creates a plain object from a ReqContinueTrack message. Also converts values to other types if specified.
     * @param message ReqContinueTrack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqContinueTrack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqContinueTrack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqContinueTrack
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStartSentryMode. */
export class ReqStartSentryMode implements IReqStartSentryMode {

    /**
     * Constructs a new ReqStartSentryMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartSentryMode);

    /** ReqStartSentryMode mode. */
    public mode: number;

    /**
     * Creates a new ReqStartSentryMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartSentryMode instance
     */
    public static create(properties?: IReqStartSentryMode): ReqStartSentryMode;

    /**
     * Encodes the specified ReqStartSentryMode message. Does not implicitly {@link ReqStartSentryMode.verify|verify} messages.
     * @param message ReqStartSentryMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartSentryMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartSentryMode message, length delimited. Does not implicitly {@link ReqStartSentryMode.verify|verify} messages.
     * @param message ReqStartSentryMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartSentryMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartSentryMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartSentryMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartSentryMode;

    /**
     * Decodes a ReqStartSentryMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartSentryMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartSentryMode;

    /**
     * Verifies a ReqStartSentryMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartSentryMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartSentryMode
     */
    public static fromObject(object: { [k: string]: any }): ReqStartSentryMode;

    /**
     * Creates a plain object from a ReqStartSentryMode message. Also converts values to other types if specified.
     * @param message ReqStartSentryMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartSentryMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartSentryMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartSentryMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopSentryMode. */
export class ReqStopSentryMode implements IReqStopSentryMode {

    /**
     * Constructs a new ReqStopSentryMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopSentryMode);

    /**
     * Creates a new ReqStopSentryMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopSentryMode instance
     */
    public static create(properties?: IReqStopSentryMode): ReqStopSentryMode;

    /**
     * Encodes the specified ReqStopSentryMode message. Does not implicitly {@link ReqStopSentryMode.verify|verify} messages.
     * @param message ReqStopSentryMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopSentryMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopSentryMode message, length delimited. Does not implicitly {@link ReqStopSentryMode.verify|verify} messages.
     * @param message ReqStopSentryMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopSentryMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopSentryMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopSentryMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopSentryMode;

    /**
     * Decodes a ReqStopSentryMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopSentryMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopSentryMode;

    /**
     * Verifies a ReqStopSentryMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopSentryMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopSentryMode
     */
    public static fromObject(object: { [k: string]: any }): ReqStopSentryMode;

    /**
     * Creates a plain object from a ReqStopSentryMode message. Also converts values to other types if specified.
     * @param message ReqStopSentryMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopSentryMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopSentryMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopSentryMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMOTTrack. */
export class ReqMOTTrack implements IReqMOTTrack {

    /**
     * Constructs a new ReqMOTTrack.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMOTTrack);

    /**
     * Creates a new ReqMOTTrack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMOTTrack instance
     */
    public static create(properties?: IReqMOTTrack): ReqMOTTrack;

    /**
     * Encodes the specified ReqMOTTrack message. Does not implicitly {@link ReqMOTTrack.verify|verify} messages.
     * @param message ReqMOTTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMOTTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMOTTrack message, length delimited. Does not implicitly {@link ReqMOTTrack.verify|verify} messages.
     * @param message ReqMOTTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMOTTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMOTTrack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMOTTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMOTTrack;

    /**
     * Decodes a ReqMOTTrack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMOTTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMOTTrack;

    /**
     * Verifies a ReqMOTTrack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMOTTrack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMOTTrack
     */
    public static fromObject(object: { [k: string]: any }): ReqMOTTrack;

    /**
     * Creates a plain object from a ReqMOTTrack message. Also converts values to other types if specified.
     * @param message ReqMOTTrack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMOTTrack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMOTTrack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMOTTrack
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqMOTTrackOne. */
export class ReqMOTTrackOne implements IReqMOTTrackOne {

    /**
     * Constructs a new ReqMOTTrackOne.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqMOTTrackOne);

    /** ReqMOTTrackOne id. */
    public id: number;

    /**
     * Creates a new ReqMOTTrackOne instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqMOTTrackOne instance
     */
    public static create(properties?: IReqMOTTrackOne): ReqMOTTrackOne;

    /**
     * Encodes the specified ReqMOTTrackOne message. Does not implicitly {@link ReqMOTTrackOne.verify|verify} messages.
     * @param message ReqMOTTrackOne message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqMOTTrackOne, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqMOTTrackOne message, length delimited. Does not implicitly {@link ReqMOTTrackOne.verify|verify} messages.
     * @param message ReqMOTTrackOne message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqMOTTrackOne, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqMOTTrackOne message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqMOTTrackOne
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqMOTTrackOne;

    /**
     * Decodes a ReqMOTTrackOne message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqMOTTrackOne
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqMOTTrackOne;

    /**
     * Verifies a ReqMOTTrackOne message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqMOTTrackOne message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqMOTTrackOne
     */
    public static fromObject(object: { [k: string]: any }): ReqMOTTrackOne;

    /**
     * Creates a plain object from a ReqMOTTrackOne message. Also converts values to other types if specified.
     * @param message ReqMOTTrackOne
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqMOTTrackOne, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqMOTTrackOne to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqMOTTrackOne
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
