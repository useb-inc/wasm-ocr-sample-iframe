function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable */
/* global-module */
import detector from './helpers/detector.js';
import parser from './helpers/parser.js';
import { simd, threads } from './helpers/wasm-feature-detect.js';
var instance;
class UseBOCR {
  /** public properties */

  /** private properties */

  // 임시
  // 임시

  // 수정불가
  // 수정불가
  // 수정불가

  /** Default options */

  /** constructor */
  constructor() {
    _defineProperty(this, "IN_PROGRESS", {
      NONE: 'none',
      NOT_READY: 'not_ready',
      READY: 'ready',
      CARD_DETECT_SUCCESS: 'detect_success',
      CARD_DETECT_FAILED: 'detect_failed',
      MANUAL_CAPTURE_SUCCESS: 'manual_capture_success',
      MANUAL_CAPTURE_FAILED: 'manual_capture_failed',
      OCR_RECOGNIZED: 'recognized',
      OCR_RECOGNIZED_WITH_SSA: 'recognized_with_ssa',
      OCR_SUCCESS: 'ocr_success',
      OCR_SUCCESS_WITH_SSA: 'ocr_success_with_ssa',
      OCR_FAILED: 'ocr_failed'
    });
    _defineProperty(this, "OCR_STATUS", {
      NOT_READY: -1,
      READY: 0,
      OCR_SUCCESS: 1,
      DONE: 2
    });
    _defineProperty(this, "PRELOADING_STATUS", {
      NOT_STARTED: -1,
      STARTED: 0,
      DONE: 1
    });
    _defineProperty(this, "__debugMode", false);
    _defineProperty(this, "__OCREngine", null);
    _defineProperty(this, "__initialized", false);
    _defineProperty(this, "__preloaded", false);
    _defineProperty(this, "__preloadingStatus", this.PRELOADING_STATUS.NOT_STARTED);
    _defineProperty(this, "__license", void 0);
    _defineProperty(this, "__ocrType", null);
    _defineProperty(this, "__ssaMode", false);
    _defineProperty(this, "__ocrStatus", this.OCR_STATUS.NOT_READY);
    _defineProperty(this, "__manualOCRMaxRetryCount", 10);
    _defineProperty(this, "__manualOCRRetryCount", 0);
    _defineProperty(this, "__ssaRetryCount", 0);
    _defineProperty(this, "__detectedCardQueue", []);
    _defineProperty(this, "__detectedCardQueueBase64", []);
    _defineProperty(this, "__onSuccess", null);
    _defineProperty(this, "__onFailure", null);
    _defineProperty(this, "__onInProgressChange", null);
    _defineProperty(this, "__ocrTypeList", ['idcard', 'driver', 'passport', 'foreign-passport', 'alien', 'credit', 'idcard-ssa', 'driver-ssa', 'passport-ssa', 'foreign-passport-ssa', 'alien-ssa', 'credit-ssa']);
    _defineProperty(this, "__ocrTypeString", new Map([['1', 'idcard'], ['2', 'driver'], ['3', 'passport'], ['4', 'foreign-passport'], ['5', 'alien'], ['5-1', 'alien'], ['5-2', 'alien'], ['5-3', 'alien']]));
    _defineProperty(this, "__pageEnd", false);
    _defineProperty(this, "__ocr", void 0);
    _defineProperty(this, "__canvas", void 0);
    _defineProperty(this, "__rotationCanvas", void 0);
    _defineProperty(this, "__video", void 0);
    _defineProperty(this, "__videoWrap", void 0);
    _defineProperty(this, "__guideBox", void 0);
    _defineProperty(this, "__guideBoxWrap", void 0);
    _defineProperty(this, "__maskBoxWrap", void 0);
    _defineProperty(this, "__preventToFreezeVideo", void 0);
    _defineProperty(this, "__customUIWrap", void 0);
    _defineProperty(this, "__topUI", void 0);
    _defineProperty(this, "__middleUI", void 0);
    _defineProperty(this, "__bottomUI", void 0);
    _defineProperty(this, "__previewUIWrap", void 0);
    _defineProperty(this, "__previewUI", void 0);
    _defineProperty(this, "__previewImage", void 0);
    _defineProperty(this, "__captureUIWrap", void 0);
    _defineProperty(this, "__captureUI", void 0);
    _defineProperty(this, "__captureButton", void 0);
    _defineProperty(this, "__address", 0);
    _defineProperty(this, "__detected", false);
    _defineProperty(this, "__recovered", false);
    _defineProperty(this, "__Buffer", null);
    _defineProperty(this, "__resultBuffer", null);
    _defineProperty(this, "__maskInfoResultBuf", null);
    _defineProperty(this, "__PrevImage", null);
    _defineProperty(this, "__stringOnWasmHeap", null);
    _defineProperty(this, "__camSetComplete", false);
    _defineProperty(this, "__resolutionWidth", 0);
    _defineProperty(this, "__resolutionHeight", 0);
    _defineProperty(this, "__videoWidth", 0);
    _defineProperty(this, "__videoHeight", 0);
    _defineProperty(this, "__resourcesLoaded", false);
    _defineProperty(this, "__intervalTimer", void 0);
    _defineProperty(this, "__cameraPermissionTimeoutTimer", void 0);
    _defineProperty(this, "__requestAnimationFrameId", void 0);
    _defineProperty(this, "__stream", void 0);
    _defineProperty(this, "__destroyScannerCallback", null);
    _defineProperty(this, "__facingModeConstraint", 'environment');
    _defineProperty(this, "__uiOrientation", '');
    _defineProperty(this, "__prevUiOrientation", '');
    _defineProperty(this, "__videoOrientation", '');
    _defineProperty(this, "__throttlingResizeTimer", null);
    _defineProperty(this, "__throttlingResizeDelay", 500);
    _defineProperty(this, "__maxRetryCountGetAddress", 300);
    _defineProperty(this, "__retryCountGetAddress", 0);
    _defineProperty(this, "__deviceInfo", void 0);
    _defineProperty(this, "__isRotated90or270", false);
    _defineProperty(this, "__inProgressStep", this.IN_PROGRESS.NOT_READY);
    _defineProperty(this, "__previousInProgressStep", this.IN_PROGRESS.NONE);
    _defineProperty(this, "__isInProgressHandleResize", false);
    _defineProperty(this, "__guideBoxRatioByWidth", 1.0);
    _defineProperty(this, "__videoRatioByHeight", 0.9);
    _defineProperty(this, "__guideBoxReduceRatio", 0.8);
    _defineProperty(this, "__cropImageSizeWidth", 0);
    _defineProperty(this, "__cropImageSizeHeight", 0);
    _defineProperty(this, "__options", new Object({
      showClipFrame: false,
      showCanvasPreview: false,
      useTopUI: true,
      useTopUITextMsg: false,
      useMiddleUI: true,
      useMiddleUITextMsg: true,
      useBottomUI: true,
      useBottomUITextMsg: false,
      usePreviewUI: true,
      useCaptureUI: true,
      useMaskInfo: true,
      frameBorderStyle: {
        width: 5,
        style: 'solid',
        radius: 20,
        not_ready: '#000000',
        // 검정
        ready: '#b8b8b8',
        // 회색
        detect_failed: '#725b67',
        // 보라
        detect_success: '#5e8fff',
        // 하늘
        manual_capture_failed: '#725b67',
        // 보라
        manual_capture_success: '#5e8fff',
        // 하늘
        recognized: '#003ac2',
        // 파랑
        recognized_with_ssa: '#003ac2',
        // 파랑
        ocr_failed: '#FA113D',
        // 빨강
        ocr_success: '#14b00e',
        // 초록
        ocr_success_with_ssa: '#14b00e' // 초록
      },

      useMaskFrameColorChange: true,
      maskFrameStyle: {
        clip_frame: '#ff00bf',
        // 딥퍼플 (수정불가)
        base_color: '#333333',
        // 다크그레이 (투명도는 수정불가 ff로 고정)
        not_ready: '#333333',
        ready: '#333333',
        detect_failed: '#333333',
        detect_success: '#222222',
        manual_capture_failed: '#333333',
        manual_capture_success: '#222222',
        recognized: '#222222',
        recognized_with_ssa: '#222222',
        ocr_failed: '#111111',
        ocr_success: '#111111',
        ocr_success_with_ssa: '#111111'
      },
      useCaptureButtonColorChange: true,
      captureButtonStyle: {
        stroke_color: '#ffffff',
        not_ready: '#000000',
        ready: '#b8b8b8',
        detect_failed: '#725b67',
        detect_success: '#5e8fff',
        manual_capture_failed: '#725b67',
        manual_capture_success: '#5e8fff',
        recognized: '#003ac2',
        recognized_with_ssa: '#003ac2',
        ocr_failed: '#FA113D',
        ocr_success: '#14b00e',
        ocr_success_with_ssa: '#14b00e'
      },
      resourceBaseUrl: window.location.origin,
      deviceLabel: '',
      videoTargetId: '',
      rotationDegree: 0,
      mirrorMode: false,
      ssaMaxRetryCount: 0,
      useLegacyFormat: true
    }));
    if (instance) return instance;
    instance = this;
    return instance;
  }

  /** public methods */
  preloading() {
    var _this = this;
    return _asyncToGenerator(function* () {
      if (_this.isPreloaded()) {
        void 0;
      } else {
        void 0;
        _this.__preloadingStatus = _this.PRELOADING_STATUS.STARTED;
        yield _this.__loadResources();
        _this.__preloadingStatus = _this.PRELOADING_STATUS.DONE;
        _this.__preloaded = true;
        void 0;
      }
    })();
  }
  isInitialized() {
    return this.__initialized;
  }
  isPreloaded() {
    return this.__preloaded;
  }
  getPreloadingStatus() {
    return this.__preloadingStatus;
  }
  getOCREngine() {
    return this.__OCREngine;
  }
  init(settings) {
    if (!!!settings.licenseKey) throw new Error('License key is empty');
    this.__license = settings.licenseKey;
    var mergedOptions = _.merge({}, this.__options, settings);
    this.setOption(mergedOptions);
    void 0;
    if (!this.isInitialized()) {
      this.__windowEventBind();
      this.__deviceInfo = detector.getOsVersion();
      void 0;
      this.__initialized = true;
    }
  }
  setOption(settings) {
    this.__options = settings;
  }
  getOption() {
    return this.__options;
  }
  getOcrType(type) {
    return this.__ocrTypeString.get(type);
  }
  getUIOrientation() {
    return this.__uiOrientation;
  }
  getVideoOrientation() {
    return this.__videoOrientation;
  }
  startOCR(type, onSuccess, onFailure) {
    var _arguments = arguments,
      _this2 = this;
    return _asyncToGenerator(function* () {
      var onInProgressChange = _arguments.length > 3 && _arguments[3] !== undefined ? _arguments[3] : null;
      if (!!!type || !!!onSuccess || !!!onFailure) {
        void 0;
        return;
      }
      _this2.__ocrType = type;
      _this2.__ssaMode = _this2.__ocrType.indexOf('-ssa') > -1;
      _this2.__onSuccess = onSuccess;
      _this2.__onFailure = onFailure;
      _this2.__onInProgressChange = onInProgressChange;
      if (onInProgressChange) {
        if (_this2.__options.useTopUI) {
          _this2.__topUI = detector.getOCRElements().topUI;
        }
        if (_this2.__options.useMiddleUI) {
          _this2.__middleUI = detector.getOCRElements().middleUI;
        }
        if (_this2.__options.useBottomUI) {
          _this2.__bottomUI = detector.getOCRElements().bottomUI;
        }
      }
      yield _this2.__changeStage(_this2.IN_PROGRESS.NOT_READY);
      if (!_this2.isInitialized()) {
        throw new Error('Not initialized!');
      }
      try {
        var preloadingStatus = _this2.getPreloadingStatus();
        if (!_this2.isPreloaded() && preloadingStatus === _this2.PRELOADING_STATUS.NOT_STARTED) {
          void 0;
          yield _this2.preloading();
        } else {
          if (preloadingStatus === _this2.PRELOADING_STATUS.STARTED) {
            void 0;
            yield _this2.__waitPreloaded();
          } else if (preloadingStatus === _this2.PRELOADING_STATUS.DONE) {
            void 0;
          } else {
            throw new Error("abnormally preloading status, preloaded: ".concat(_this2.isPreloaded(), " / preloadingStatus: ").concat(_this2.getPreloadingStatus()));
          }
        }
        yield _this2.__startScan();
      } catch (e) {
        void 0;
      } finally {
        _this2.stopOCR();
      }
    })();
  }
  stopOCR() {
    this.cleanup();
    this.__closeCamera();
    this.__onSuccess = null;
    this.__onFailure = null;
  }
  setIgnoreComplete(val) {
    this.__OCREngine.setIgnoreComplete(val);
  }
  restartOCR(ocrType, onSuccess, onFailure, onInProgressChange) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      // await this.stopOCR();
      _this3.__closeCamera();
      yield _this3.startOCR(ocrType, onSuccess, onFailure, onInProgressChange);
    })();
  }

  /** private methods */
  __waitPreloaded() {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      var waitingRetryCount = 0;
      return new Promise(resolve => {
        var check = () => {
          setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
            if (_this4.isPreloaded()) {
              resolve();
            } else {
              waitingRetryCount++;
              void 0;
              check();
            }
          }), 500);
        };
        check();
      });
    })();
  }
  __windowEventBind() {
    var _this_ = this;
    if (/iphone|ipod|ipad/.test(window.navigator.userAgent.toLowerCase())) {
      var skipTouchActionforZoom = ev => {
        if (ev.touches.length > 1) {
          ev.preventDefault();
          ev.stopImmediatePropagation();
        }
      };
      window.addEventListener('touchstart', skipTouchActionforZoom, {
        passive: false
      });
      window.addEventListener('touchmove', skipTouchActionforZoom, {
        passive: false
      });
      window.addEventListener('touchend', skipTouchActionforZoom, {
        passive: false
      });
    }
    window.onbeforeunload = function () {
      _this_.__pageEnd = true;
      _this_.cleanup();
    };
    var handleResize = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        if (!!!_this_.__ocrType) return;
        if (!_this_.__isInProgressHandleResize) {
          _this_.__isInProgressHandleResize = true;
          _this_.__throttlingResizeTimer = null;
          void 0;
          _this_.__isInProgressHandleResize = false;
          yield _this_.restartOCR(_this_.__ocrType, _this_.__onSuccess, _this_.__onFailure, _this_.__onInProgressChange);
        } else {
          void 0;
        }
      });
      return function handleResize() {
        return _ref2.apply(this, arguments);
      };
    }();
    window.addEventListener('resize', /*#__PURE__*/_asyncToGenerator(function* () {
      if (!!!_this_.__throttlingResizeTimer) {
        _this_.__throttlingResizeTimer = setTimeout(handleResize, _this_.__throttlingResizeDelay);
      }
    }));
  }
  __sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  __blobToBase64(blob) {
    return new Promise((resolve, _) => {
      var reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  /** 라이센스 키를 heap 에 allocation */
  __getStringOnWasmHeap() {
    if (!!!this.__license) {
      throw new Error('License Key is empty');
    }
    var lengthBytes = this.__OCREngine.lengthBytesUTF8(this.__license) + 1;
    this.__stringOnWasmHeap = this.__OCREngine._malloc(lengthBytes);
    this.__OCREngine.stringToUTF8(this.__license, this.__stringOnWasmHeap, lengthBytes);
    return this.__stringOnWasmHeap;
  }
  __setVideoResolution(videoElement) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      var isSupportedResolution = false;
      var resolutionText = 'not ready';
      if (!_this5.__camSetComplete) {
        return {
          isSupportedResolution,
          resolutionText
        };
      }
      if (videoElement.videoWidth === 0 && videoElement.videoHeight === 0) {
        yield _this5.__changeStage(_this5.IN_PROGRESS.NOT_READY);
        return {
          isSupportedResolution,
          resolutionText
        };
      }
      resolutionText = videoElement.videoWidth + 'x' + videoElement.videoHeight;
      if (videoElement.videoWidth === 1080 && videoElement.videoHeight === 1920 || videoElement.videoWidth === 1920 && videoElement.videoHeight === 1080) {
        isSupportedResolution = true;
      } else if (videoElement.videoWidth === 1280 && videoElement.videoHeight === 720 || videoElement.videoWidth === 720 && videoElement.videoHeight === 1280) {
        isSupportedResolution = true;
      } else {
        videoElement.srcObject = null;
        isSupportedResolution = false;
      }
      _this5.__videoWidth = videoElement.videoWidth;
      _this5.__videoHeight = videoElement.videoHeight;
      return {
        isSupportedResolution,
        resolutionText
      };
    })();
  }
  __getScannerAddress(ocrType) {
    if (!this.__ocrTypeList.includes(ocrType)) throw new Error('Unsupported OCR type');
    try {
      var address = 0;
      var destroyCallback = null;
      var stringOnWasmHeap = this.__getStringOnWasmHeap();
      switch (ocrType) {
        // OCR
        case 'idcard':
        case 'driver':
        case 'idcard-ssa':
        case 'driver-ssa':
          address = this.__OCREngine.getIDCardScanner(stringOnWasmHeap);
          destroyCallback = () => this.__OCREngine.destroyIDCardScanner(address);
          break;
        case 'passport':
        case 'foreign-passport':
        case 'passport-ssa':
        case 'foreign-passport-ssa':
          address = this.__OCREngine.getPassportScanner(stringOnWasmHeap);
          destroyCallback = () => this.__OCREngine.destroyPassportScanner(address);
          break;
        case 'alien':
        case 'alien-ssa':
          address = this.__OCREngine.getAlienScanner(stringOnWasmHeap);
          destroyCallback = () => this.__OCREngine.destroyAlienScanner(address);
          break;
        case 'credit':
        case 'credit-ssa':
          address = this.__OCREngine.getCreditScanner(stringOnWasmHeap);
          destroyCallback = () => this.__OCREngine.destroyCreditScanner(address);
          break;
        default:
          throw new Error('Scanner does not exists');
      }
      this.__OCREngine._free(stringOnWasmHeap);
      if (address === 0) {
        if (this.__maxRetryCountGetAddress === this.__retryCountGetAddress) {
          throw new Error('Wrong License Key');
        }
        this.__retryCountGetAddress++;
      }
      return [address, destroyCallback];
    } catch (e) {
      // TODO : License Issue인 경우 에러 값을 받아서 error 로그를 찍을 수 있게 요청필요 (임시 N번 이상 address를 못받으면 강제 에러)
      void 0;
      void 0;
      throw e;
    }
  }
  __getBuffer() {
    if (!this.__Buffer) {
      this.__Buffer = this.__OCREngine._malloc(this.__resolutionWidth * this.__resolutionHeight * 4);
    }
    if (!this.__resultBuffer) {
      this.__resultBuffer = this.__OCREngine._malloc(4096);
    }
    if (this.__options.useMaskInfo) {
      if (!this.__maskInfoResultBuf) {
        this.__maskInfoResultBuf = this.__OCREngine._malloc(4096);
      }
    }
    return [this.__Buffer, this.__resultBuffer, this.__maskInfoResultBuf];
  }
  __getImageBase64(address, maskMode, cropMode) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      try {
        _this6.__OCREngine.encodeJpgDetectedFrameImage(address, maskMode, cropMode);
        var jpgSize = _this6.__OCREngine.getEncodedJpgSize();
        var jpgPointer = _this6.__OCREngine.getEncodedJpgBuffer();
        var resultView = new Uint8Array(_this6.__OCREngine.HEAP8.buffer, jpgPointer, jpgSize);
        var result = new Uint8Array(resultView);
        var blob = new Blob([result], {
          type: 'image/jpeg'
        });
        return yield _this6.__blobToBase64(blob);
      } catch (e) {
        void 0;
        throw e;
      } finally {
        _this6.__OCREngine.destroyEncodedJpg();
      }
    })();
  }

  /** Free buffer */
  __destroyBuffer() {
    if (this.__Buffer) {
      this.__OCREngine._free(this.__Buffer);
      this.__Buffer = null;
    }
    this.__destroyResultBuffer();
    this.__destroyMaskInfoResultBuffer();
  }
  __destroyResultBuffer() {
    if (this.__resultBuffer !== null) {
      this.__OCREngine._free(this.__resultBuffer);
      this.__resultBuffer = null;
    }
  }
  __destroyMaskInfoResultBuffer() {
    if (this.__maskInfoResultBuf !== null) {
      this.__OCREngine._free(this.__maskInfoResultBuf);
      this.__maskInfoResultBuf = null;
    }
  }

  /** Free PrevImage buffer */
  __destroyPrevImage() {
    if (this.__PrevImage !== null) {
      this.__OCREngine._free(this.__PrevImage);
      this.__PrevImage = null;
    }
  }

  /** free string heap buffer */
  __destroyStringOnWasmHeap() {
    if (this.__stringOnWasmHeap) {
      this.__OCREngine._free(this.__stringOnWasmHeap);
      this.__stringOnWasmHeap = null;
    }
  }

  /** free scanner address */
  __destroyScannerAddress() {
    if (this.__destroyScannerCallback) {
      this.__destroyScannerCallback();
      this.__destroyScannerCallback = null;
    }
  }
  __isVideoResolutionCompatible(videoElement) {
    var _this7 = this;
    return _asyncToGenerator(function* () {
      var {
        isSupportedResolution,
        resolutionText
      } = yield _this7.__setVideoResolution(videoElement);
      if (!isSupportedResolution) {
        if (resolutionText !== 'not ready') {
          void 0;
        }
      }
      return isSupportedResolution;
    })();
  }
  __getRotationDegree() {
    return (this.__options.rotationDegree % 360 + 360) % 360;
  }
  __getMirrorMode() {
    return this.__options.mirrorMode;
  }
  __cropImageFromVideo() {
    var _this8 = this;
    return _asyncToGenerator(function* () {
      if (!_this8.__camSetComplete) return [null, null];
      var [calcResolution_w, calcResolution_h] = [_this8.__resolutionWidth, _this8.__resolutionHeight];
      var {
        video,
        canvas,
        rotationCanvas
      } = detector.getOCRElements();

      // source image (or video)
      // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
      // ┃     ┊ sy                              ┃
      // ┃┈┈┈┈ ┏━━━━━━━━━━━━━━━┓ ┊               ┃
      // ┃ sx  ┃               ┃ ┊               ┃
      // ┃     ┃               ┃ ┊ sHeight       ┃
      // ┃     ┃               ┃ ┊               ┃               destination canvas
      // ┃     ┗━━━━━━━━━━━━━━━┛ ┊               ┃━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
      // ┃     ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈                 ┃    ┊                           ┃
      // ┃           sWidth                      ┃    ┊ dy                        ┃
      // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛    ┏━━━━━━━━━━━━━━━┓ ┊         ┃
      //                                  ┃┈┈┈┈┈┈┈┈┈┈┈┃               ┃ ┊         ┃
      //                                  ┃    dx     ┃               ┃ ┊ dHeight ┃
      //                                  ┃           ┃               ┃ ┊         ┃
      //                                  ┃           ┗━━━━━━━━━━━━━━━┛ ┊         ┃
      //                                  ┃           ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈           ┃
      //                                  ┃                 dWidth                ┃
      //                                  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
      // drawImage(image, dx, dy)
      // drawImage(image, dx, dy, dWidth, dHeight)
      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

      var calcCanvas = canvas;
      var calcVideoWidth = video.videoWidth;
      var calcVideoHeight = video.videoHeight;
      var calcVideoClientWidth = video.clientWidth;
      var calcVideoClientHeight = video.clientHeight;
      var calcCropImageSizeWidth = _this8.__cropImageSizeWidth;
      var calcCropImageSizeHeight = _this8.__cropImageSizeHeight;
      var calcVideoOrientation = _this8.__videoOrientation;
      if (_this8.__isRotated90or270) {
        [calcCropImageSizeWidth, calcCropImageSizeHeight] = [calcCropImageSizeHeight, calcCropImageSizeWidth];
        [calcResolution_w, calcResolution_h] = [calcResolution_h, calcResolution_w];
        calcCanvas = rotationCanvas;
        calcVideoOrientation = _this8.__videoOrientation === 'portrait' ? 'landscape' : 'portrait';
      }
      var calcMaxSWidth = 99999;
      var calcMaxSHeight = 99999;
      if (_this8.__uiOrientation === 'portrait') {
        if (calcVideoOrientation === _this8.__uiOrientation) {
          // 세로 UI / 세로 카메라
          calcMaxSWidth = calcVideoWidth;
          calcMaxSHeight = calcVideoHeight;
        } else {
          // 세로 UI / 가로 카메라
          calcMaxSHeight = calcVideoHeight;
        }
      } else {
        if (calcVideoOrientation === _this8.__uiOrientation) {
          // 가로 UI / 가로 카메라
          calcMaxSHeight = calcVideoHeight;
        } else {
          // 가로 UI / 세로 카메라
          calcMaxSWidth = calcVideoWidth;
          calcMaxSHeight = calcVideoHeight;
        }
      }
      var sx, sy;
      var ratio = calcVideoWidth / calcVideoClientWidth;
      var sWidth = Math.min(Math.round(calcCropImageSizeWidth * ratio), calcMaxSWidth);
      var sHeight = Math.min(Math.round(calcCropImageSizeHeight * ratio), calcMaxSHeight);
      sx = Math.round((calcVideoClientWidth - calcCropImageSizeWidth) / 2 * ratio);
      sy = Math.round((calcVideoClientHeight - calcCropImageSizeHeight) / 2 * ratio);
      var calcContext = calcCanvas.getContext('2d', {
        willReadFrequently: true
      });
      // console.debug('sx, sy, sWidth(resolution_w), sHeight(resolution_h), video.videoWidth, video.videoHeight', sx, sy, sWidth, sHeight, video.videoWidth, video.videoHeight);
      calcContext.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, calcResolution_w, calcResolution_h);
      var imgData = calcContext.getImageData(0, 0, calcResolution_w, calcResolution_h);
      var imgDataUrl = calcCanvas.toDataURL('image/jpeg');
      if (_this8.__isRotated90or270) {
        return yield _this8.__rotate(imgData, imgDataUrl, _this8.__getRotationDegree());
      } else {
        return [imgData, imgDataUrl];
      }
    })();
  }
  __rotate(imgData, imgDataUrl, degree) {
    return _asyncToGenerator(function* () {
      return new Promise(resolve => {
        if (degree === 0) {
          resolve([imgData, imgDataUrl]);
        }
        var img = new Image();
        img.src = imgDataUrl;
        img.addEventListener('load', () => {
          var tempCanvas = document.createElement('canvas');
          // canvas = rotationCanvas;
          var tempContext = tempCanvas.getContext('2d');
          tempCanvas.style.position = 'absolute';
          if ([90, 270].includes(degree)) {
            tempCanvas.width = img.height;
            tempCanvas.height = img.width;
          } else if ([0, 180].includes(degree)) {
            tempCanvas.width = img.width;
            tempCanvas.height = img.height;
          }
          if (degree === 90) tempContext.translate(img.height, 0);else if (degree === 180) tempContext.translate(img.width, img.height);else if (degree === 270) tempContext.translate(0, img.width);
          tempContext.rotate(degree * Math.PI / 180);
          tempContext.drawImage(img, 0, 0);
          var newImageData = [90, 270].includes(degree) ? tempContext.getImageData(0, 0, img.height, img.width) : tempContext.getImageData(0, 0, img.width, img.height, tempContext);
          resolve([newImageData, tempCanvas.toDataURL('image/jpeg')]);
          tempContext.restore();
        });
      });
    })();
  }
  __isCardboxDetected(address) {
    var _arguments2 = arguments,
      _this9 = this;
    return _asyncToGenerator(function* () {
      var boxType = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 0;
      var retryImg = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : null;
      if (!address || address < 0) {
        return [false, null];
      }
      try {
        var imgData;
        var imgDataUrl = null;
        var [buffer] = _this9.__getBuffer();
        if (retryImg !== null) {
          imgData = retryImg;
        } else {
          [imgData, imgDataUrl] = yield _this9.__cropImageFromVideo();
        }
        if (!!!imgData) {
          return [false, null];
        }
        _this9.__OCREngine.HEAP8.set(imgData.data, buffer);
        var kor = false,
          alien = false,
          passport = false;
        switch (_this9.__ocrType) {
          case 'idcard':
          case 'driver':
          case 'idcard-ssa':
          case 'driver-ssa':
            kor = true;
            break;
          case 'passport':
          case 'passport-ssa':
          case 'foreign-passport':
          case 'foreign-passport-ssa':
            passport = true;
            break;
          case 'alien':
          case 'alien-ssa':
            alien = true;
            break;
          case 'credit':
          case 'credit-ssa':
            // nothing
            break;
          default:
            throw new Error('Unsupported OCR type');
        }
        var result = null;
        if (kor || passport || alien) {
          result = _this9.__OCREngine.detect_idcard_opt(buffer, _this9.__resolutionWidth, _this9.__resolutionHeight, address, kor, alien, passport);
        } else {
          result = _this9.__OCREngine.detect_idcard(buffer, _this9.__resolutionWidth, _this9.__resolutionHeight, address, boxType);
        }

        // console.log('isCardboxDetected result -=-----', result)
        return [!!result, imgData, imgDataUrl];
      } catch (e) {
        var message = 'Card detection error : ' + e;
        if (e.toString().includes('memory')) {
          void 0;
        } else {
          void 0;
          throw e;
        }
      }
    })();
  }
  __startRecognition(address, ocrType, ssaMode, isSetIgnoreComplete, imgData, imgDataUrl) {
    var _this10 = this;
    return _asyncToGenerator(function* () {
      try {
        if (address === null) {
          return '';
        } else if (address === -1) {
          return 'checkValidation Fail';
        }
        var ocrResult = null;
        if (!_this10.__ocrTypeList.includes(ocrType)) throw new Error('Unsupported OCR type');
        var [, resultBuffer] = _this10.__getBuffer();
        var recognition = /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator(function* (isSetIgnoreComplete) {
            var _ocrResult, _ocrResult2;
            if (isSetIgnoreComplete) {
              yield _this10.__isCardboxDetected(address, 0, imgData);
            }
            switch (ocrType) {
              case 'idcard':
              case 'driver':
              case 'idcard-ssa':
              case 'driver-ssa':
                ocrResult = _this10.__OCREngine.scanIDCard(address, resultBuffer);
                break;
              case 'passport':
              case 'foreign-passport':
              case 'passport-ssa':
              case 'foreign-passport-ssa':
                ocrResult = _this10.__OCREngine.scanPassport(address, resultBuffer);
                break;
              case 'alien':
              case 'alien-ssa':
                ocrResult = _this10.__OCREngine.scanAlien(address, resultBuffer);
                break;
              case 'credit':
              case 'credit-ssa':
                ocrResult = _this10.__OCREngine.scanCredit(address, resultBuffer);
                break;
              default:
                throw new Error('Scanner does not exists');
            }
            ocrResult = _this10.__csvToObject(ocrResult);
            if (((_ocrResult = ocrResult) === null || _ocrResult === void 0 ? void 0 : _ocrResult.complete) !== 'undefined' && ((_ocrResult2 = ocrResult) === null || _ocrResult2 === void 0 ? void 0 : _ocrResult2.complete) === 'true') {
              return true;
            } else {
              if (isSetIgnoreComplete) {
                if (_this10.__manualOCRRetryCount < _this10.__manualOCRMaxRetryCount) {
                  // detectedCardQueue에서 한장을 꺼내서 갱신한다.
                  // 저장되어있는 이미지의 숫자가 retry 보다 작은경우 대비하여 %를 사용함
                  var queueIdx = _this10.__manualOCRRetryCount % _this10.__detectedCardQueue.length;
                  imgData = _this10.__detectedCardQueue[queueIdx];
                  _this10.__manualOCRRetryCount++;
                  return yield recognition(isSetIgnoreComplete);
                  yield _this10.__sleep(1); // for UI update
                } else {
                  // 사진 한장으로 OCR 실패 (popup 내리고 setIgnoreComplete(false) 처리?
                  _this10.__manualOCRRetryCount = 0;
                  _this10.setIgnoreComplete(false);
                  _this10.__blurCaptureButton(); // 팝업이 내려갈때 처리되지만 미리 처리
                  yield _this10.__changeStage(_this10.IN_PROGRESS.MANUAL_CAPTURE_FAILED, false, imgDataUrl);
                  _this10.__setStyle(detector.getOCRElements().video, {
                    display: ''
                  });
                  return false;
                }
              } else {
                return false;
              }
            }
          });
          return function recognition(_x) {
            return _ref4.apply(this, arguments);
          };
        }();
        if (yield recognition(isSetIgnoreComplete)) {
          // let cropMode = false;
          // if (ocrType.indexOf('credit') > -1) {
          //   cropMode = true;
          // }
          var originImage = yield _this10.__getImageBase64(address, false, false);
          var maskImage = yield _this10.__getImageBase64(address, true, true);
          maskImage = maskImage === 'data:' ? null : maskImage;
          if (ssaMode) {
            yield _this10.__changeStage(_this10.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA, false, maskImage);
          } else {
            yield _this10.__changeStage(_this10.IN_PROGRESS.OCR_RECOGNIZED);
          }
          return [ocrResult, originImage, maskImage];
        } else {
          return [false, null, null];
        }
      } catch (e) {
        void 0;
        throw e;
      }
    })();
  }
  __startTruth(ocrType, address) {
    return new Promise((resolve, reject) => {
      var [, resultBuffer] = this.__getBuffer();
      if (ocrType.indexOf('-ssa') > -1) {
        // TODO: worker를 사용하여 메인(UI 랜더링) 스레드가 멈추지 않도록 처리 필요 (현재 loading UI 띄우면 애니메이션 멈춤)
        // TODO: setTimeout 으로 나누더라도 효과 없음 setTimeout 지우고, worker로 변경 필요
        setTimeout(() => {
          resolve(this.__OCREngine.scanTruth(address, resultBuffer));
        }, 500);
      } else {
        reject(new Error('SSA Mode is true. but, ocrType is invalid : ' + ocrType));
      }
    });
  }
  __csvToObject(str) {
    var pairs = str.split(';');
    var obj = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split(':');
      if (pair.length === 2) obj[pair[0]] = pair[1];
    }
    return obj;
  }
  __getMaskInfo(address) {
    if (address == null) {
      return '';
    } else if (address === -1) {
      return 'checkValidation Fail';
    }
    var [,, maskInfoResultBuf] = this.__getBuffer();
    var result = null;
    result = this.__OCREngine.getMaskRect(address, maskInfoResultBuf);
    if (result == null || result === '') {
      void 0;
    }

    // this.__destroyMaskInfoResultBuffer();

    return result === null ? null : this.__csvToObject(result);
  }
  __startTruthRetry(ocrType, address, imgData) {
    var _this11 = this;
    return _asyncToGenerator(function* () {
      yield _this11.__isCardboxDetected(address, 0, imgData);
      // await this.__startRecognition(address, ocrType, true);      // for 성능을 위해 진행 X
      return yield _this11.__startTruth(ocrType, address);
    })();
  }
  __setCameraPermissionTimeoutTimer() {
    var _this12 = this;
    this.__clearCameraPermissionTimeoutTimer();
    this.__cameraPermissionTimeoutTimer = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
      // 1초 delay 후 실행
      yield _this12.__proceedCameraPermission();
    }), 1000);
  }
  __proceedCameraPermission() {
    var _this13 = this;
    return _asyncToGenerator(function* () {
      try {
        _this13.__closeCamera();
        var isPassport = _this13.__ocrType.includes('passport');
        yield _this13.__setupVideo(isPassport);
        var {
          video
        } = detector.getOCRElements();
        if (video) {
          // const [track] = this.__stream.getVideoTracks();
          // const capability = track.getCapabilities();
          // console.debug('CardScan__initialize capability', capability);
          if ('srcObject' in video) {
            video.srcObject = _this13.__stream;
          } else {
            // Avoid using this in new browsers, as it is going away.
            video.src = window.URL.createObjectURL(_this13.__stream);
          }
          video.addEventListener('loadedmetadata', () => {
            // console.debug('proceedCameraPermission - onloadedmetadata');
            video.play();
          });
          video.addEventListener('canplay', /*#__PURE__*/_asyncToGenerator(function* () {
            void 0;

            // video element style 설정
            _this13.__videoOrientation = video.videoWidth / video.videoHeight < 1 ? 'portrait' : 'landscape';
            void 0;
            void 0;
            void 0;
            _this13.__camSetComplete = true;
            yield _this13.__adjustStyle();
          }));
          yield _this13.__changeStage(_this13.IN_PROGRESS.READY);
          video.webkitExitFullscreen();
        } else {
          yield _this13.__changeStage(_this13.IN_PROGRESS.NOT_READY);
          _this13.__closeCamera();
        }
      } catch (e) {
        void 0;
        if (e.name === 'NotAllowedError') {
          var errorMessage = 'Camera Access Permission is not allowed';
          void 0;
          void 0;
          _this13.__onFailureProcess('E403', e, errorMessage);
        } else if (e.name === 'NotReadableError') {
          // 다른곳에서 카메라 자원을 사용중
          yield _this13.__changeStage(_this13.IN_PROGRESS.NOT_READY);
          _this13.stopStream();
          _this13.__setCameraPermissionTimeoutTimer(); // 재귀 호출
        }
      }
    })();
  }

  __setStyle(el, style) {
    if (el && style) {
      Object.assign(el.style, style);
    }
  }
  __changeOCRStatus(val) {
    switch (val) {
      // OCR
      case this.IN_PROGRESS.NOT_READY:
        this.__ocrStatus = this.OCR_STATUS.NOT_READY;
        break;
      case this.IN_PROGRESS.READY:
        this.__ocrStatus = this.OCR_STATUS.READY;
        break;
      case this.IN_PROGRESS.OCR_RECOGNIZED:
      case this.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA:
        this.__ocrStatus = this.OCR_STATUS.OCR_SUCCESS;
        break;
      case this.IN_PROGRESS.OCR_SUCCESS:
      case this.IN_PROGRESS.OCR_SUCCESS_WITH_SSA:
      case this.IN_PROGRESS.OCR_FAILED:
        this.__ocrStatus = this.OCR_STATUS.DONE;
        break;
    }
  }
  __changeStage(val) {
    var _arguments3 = arguments,
      _this14 = this;
    return _asyncToGenerator(function* () {
      var forceUpdate = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : false;
      var recognizedImage = _arguments3.length > 2 && _arguments3[2] !== undefined ? _arguments3[2] : null;
      if (_this14.__previousInProgressStep === val && forceUpdate === false) {
        return;
      }
      _this14.__changeOCRStatus(val);
      _this14.__previousInProgressStep = val;
      _this14.__inProgressStep = val;
      var {
        guideBox,
        maskBoxWrap,
        captureButton
      } = detector.getOCRElements();
      var style = {
        borderWidth: _this14.__options.frameBorderStyle.width + 'px',
        borderStyle: _this14.__options.frameBorderStyle.style,
        borderRadius: _this14.__options.frameBorderStyle.radius + 'px',
        borderColor: _this14.__options.frameBorderStyle[val]
      };
      if (guideBox) {
        _this14.__setStyle(guideBox, style);
      }
      if (_this14.__options.useMaskFrameColorChange) {
        var _maskBoxWrap$querySel;
        maskBoxWrap === null || maskBoxWrap === void 0 ? void 0 : (_maskBoxWrap$querySel = maskBoxWrap.querySelector('#maskBoxOuter')) === null || _maskBoxWrap$querySel === void 0 ? void 0 : _maskBoxWrap$querySel.setAttribute('fill', _this14.__options.maskFrameStyle[val]);
      }
      if (_this14.__options.useCaptureUI && _this14.__options.useCaptureButtonColorChange) {
        var _captureButton$queryS;
        captureButton === null || captureButton === void 0 ? void 0 : (_captureButton$queryS = captureButton.querySelector('#captureButton')) === null || _captureButton$queryS === void 0 ? void 0 : _captureButton$queryS.setAttribute('fill', _this14.__options.captureButtonStyle[val]);
      }
      if (_this14.__onInProgressChange) {
        if (_this14.__options.useTopUI || _this14.__options.useTopUITextMsg) {
          _this14.__onInProgressChange.call(_this14, _this14.__ocrType, _this14.__inProgressStep, _this14.__topUI, 'top', _this14.__options.useTopUITextMsg, _this14.__options.useCaptureUI, _this14.__options.usePreviewUI, recognizedImage);
        }
        if (_this14.__options.useMiddleUI || _this14.__options.useMiddleUITextMsg) {
          _this14.__onInProgressChange.call(_this14, _this14.__ocrType, _this14.__inProgressStep, _this14.__middleUI, 'middle', _this14.__options.useMiddleUITextMsg, _this14.__options.useCaptureUI, _this14.__options.usePreviewUI, recognizedImage);
        }
        if (_this14.__options.useBottomUI || _this14.__options.useBottomUITextMsg) {
          _this14.__onInProgressChange.call(_this14, _this14.__ocrType, _this14.__inProgressStep, _this14.__bottomUI, 'bottom', _this14.__options.useBottomUITextMsg, _this14.__options.useCaptureUI, _this14.__options.usePreviewUI, recognizedImage);
        }
      }
      if (val === _this14.IN_PROGRESS.MANUAL_CAPTURE_SUCCESS || val === _this14.IN_PROGRESS.MANUAL_CAPTURE_FAILED) {
        if (_this14.__options.usePreviewUI) {
          _this14.__updatePreviewUI(recognizedImage);

          // FAIL인 경우 5초후 자동을 창닫음
          if (val === _this14.IN_PROGRESS.MANUAL_CAPTURE_FAILED) {
            setTimeout(_this14.__hidePreviewUI, 3000, _this14);
          }
        }
      }
      if (val === _this14.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA) {
        var {
          video
        } = detector.getOCRElements();
        _this14.__setStyle(video, {
          display: 'none'
        });
        if (_this14.__options.usePreviewUI) {
          _this14.__updatePreviewUI(recognizedImage);
        }
      }
      if (val === _this14.IN_PROGRESS.OCR_SUCCESS_WITH_SSA) {
        if (_this14.__options.usePreviewUI) {
          _this14.__hidePreviewUI();
        }
      }
      yield _this14.__sleep(1); // for UI update
    })();
  }

  __updatePreviewUI(recognizedImage) {
    var {
      previewUIWrap,
      previewImage
    } = detector.getOCRElements();
    previewImage.src = recognizedImage;
    var imgStyle = {
      'max-width': '70%',
      'max-height': '60%'
    };
    this.__setStyle(previewImage, imgStyle);
    this.__setStyle(previewUIWrap, {
      display: 'flex'
    });
  }
  __hidePreviewUI(context) {
    var _this_ = this;
    if (context) {
      _this_ = context;
    }
    var {
      video,
      previewUIWrap,
      previewImage
    } = detector.getOCRElements();
    _this_.__setStyle(video, {
      display: 'block'
    });
    _this_.__setStyle(previewUIWrap, {
      display: 'none'
    });
    previewImage.src = '';
  }
  __getInputDevices(kind, label) {
    var _this15 = this;
    return _asyncToGenerator(function* () {
      // throw error if navigator.mediaDevices is not supported
      if (!navigator.mediaDevices) {
        throw new Error('navigator.mediaDevices is not supported');
      }
      var devices = yield navigator.mediaDevices.enumerateDevices();
      var videoDevices = devices.filter(device => {
        if (device.kind === "".concat(kind, "input") && device.getCapabilities) {
          var _cap$facingMode;
          var cap = device.getCapabilities();
          if (cap !== null && cap !== void 0 && (_cap$facingMode = cap.facingMode) !== null && _cap$facingMode !== void 0 && _cap$facingMode.includes(_this15.__facingModeConstraint)) {
            return true;
          }
        }
        return false;
      });
      return videoDevices.length <= 1 ? videoDevices : videoDevices.filter(device => label ? device.label.includes(label) : true);
    })();
  }
  checkUIOrientation() {
    var current = detector.getUIOrientation(detector.getOCRElements().ocr);
    var isChanged = false;
    if (current !== this.__prevUiOrientation) {
      this.__uiOrientation = current;
      this.__prevUiOrientation = current;
      isChanged = true;
    }
    return {
      current,
      isChanged
    };
  }
  __clearCustomUI(obj) {
    obj.innerHTML = '';
    obj.removeAttribute('style');
    obj.removeAttribute('class');
    this.__setStyle(obj, {
      display: 'none'
    });
  }
  __setupDomElements() {
    var _this16 = this;
    return _asyncToGenerator(function* () {
      var {
        ocr,
        video,
        canvas,
        rotationCanvas,
        guideBox,
        videoWrap,
        guideBoxWrap,
        maskBoxWrap,
        preventToFreezeVideo,
        customUIWrap,
        topUI,
        middleUI,
        bottomUI,
        captureUIWrap,
        captureUI,
        captureButton,
        previewUIWrap,
        previewUI,
        previewImage
      } = detector.getOCRElements();
      if (!ocr) throw new Error('ocr div element is not exist');
      if (videoWrap) videoWrap.remove();
      if (guideBoxWrap) guideBoxWrap.remove();
      if (video) video.remove();
      if (canvas) canvas.remove();
      if (rotationCanvas) rotationCanvas.remove();
      if (guideBox) guideBox.remove();
      if (maskBoxWrap) maskBoxWrap.remove();
      if (preventToFreezeVideo) preventToFreezeVideo.remove();
      if (customUIWrap) customUIWrap.remove();
      // 각 top, middle, bottom UI를 미사용일 경우 안의 내용을 삭제
      if (topUI && !_this16.__options.useTopUI) _this16.__clearCustomUI(topUI);
      if (middleUI && !_this16.__options.useMiddleUI) _this16.__clearCustomUI(middleUI);
      if (bottomUI && !_this16.__options.useBottomUI) _this16.__clearCustomUI(bottomUI);
      if (captureUIWrap) captureUIWrap.remove();
      // capture UI를 미사용일 경우 안의 내용을 삭제
      if (captureUI && !_this16.__options.useCaptureUI) _this16.__clearCustomUI(captureUI);
      if (previewUIWrap) previewUIWrap.remove();
      // preview UI를 미사용일 경우 안의 내용을 삭제
      if (previewUI && !_this16.__options.usePreviewUI) _this16.__clearCustomUI(previewUI);
      var rotationDegree = _this16.__getRotationDegree();
      _this16.__isRotated90or270 = [90, 270].includes(rotationDegree);
      var ocrStyle = {
        width: '100%',
        height: '100%'
      };
      _this16.__setStyle(ocr, ocrStyle);
      var wrapStyle = {
        position: 'absolute',
        display: 'flex',
        // vertical align middle
        'align-items': 'center',
        'justify-content': 'center',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        overflow: 'hidden'
      };
      videoWrap = document.createElement('div');
      videoWrap.setAttribute('data-useb-ocr', 'videoWrap');
      if (videoWrap) {
        while (videoWrap.firstChild) {
          videoWrap.removeChild(videoWrap.lastChild);
        }
        _this16.__setStyle(videoWrap, wrapStyle);
      }
      ocr.appendChild(videoWrap);
      maskBoxWrap = document.createElement('svg');
      maskBoxWrap.setAttribute('data-useb-ocr', 'maskBoxWrap');
      maskBoxWrap.setAttribute('fill', 'none');
      maskBoxWrap.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      _this16.__setStyle(maskBoxWrap, wrapStyle);
      var mask_frame = _this16.__options.maskFrameStyle.base_color + 'ff';
      if (!!_this16.__options.showClipFrame) {
        mask_frame = _this16.__options.maskFrameStyle.clip_frame + '55';
      }
      maskBoxWrap.innerHTML = '' + "  <svg id='maskBoxContainer' width='100%' height='100%' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" + "    <mask id='mask-rect'>\n" + "      <rect width='100%' height='100%' fill='white'></rect>\n" + "      <svg x='50%' y='50%' overflow='visible'>\n" + "          <rect id='maskBoxInner'\n" + "            width='400' height='260'\n" + "            x='-200' y='-130'\n" + "            rx='10' ry='10'\n" + "            fill='black' stroke='black'></rect>\n" + '      </svg>\n' + '    </mask>\n' + "    <rect id='maskBoxOuter'\n" + "          x='0' y='0' width='100%' height='100%'\n" + "          fill='" + mask_frame + "' mask='url(#mask-rect)'></rect>\n" + '  </svg>';
      ocr.appendChild(maskBoxWrap);
      video = document.createElement('video');
      video.setAttribute('data-useb-ocr', 'video');
      video.setAttribute('autoplay', 'true');
      video.setAttribute('muted', 'true');
      video.setAttribute('playsinline', 'true');
      var videoStyle = {
        position: 'relative',
        width: '100%'
      };
      var rotateCss = 'rotate(' + rotationDegree + 'deg)';
      var mirrorCss = 'rotateY(180deg)';
      var rotateAndMirrorCss = mirrorCss + ' ' + rotateCss;
      if (_this16.__isRotated90or270) {
        if (_this16.__getMirrorMode()) {
          videoStyle = _objectSpread(_objectSpread({}, videoStyle), {}, {
            '-webkit-transform': rotateAndMirrorCss,
            '-moz-transform': rotateAndMirrorCss,
            '-o-transform': rotateAndMirrorCss,
            '-ms-transform': rotateAndMirrorCss,
            transform: rotateAndMirrorCss
          });
        } else {
          videoStyle = _objectSpread(_objectSpread({}, videoStyle), {}, {
            '-webkit-transform': rotateCss,
            '-moz-transform': rotateCss,
            '-o-transform': rotateCss,
            '-ms-transform': rotateCss,
            transform: rotateCss
          });
        }
      } else {
        if (_this16.__getMirrorMode()) {
          videoStyle = _objectSpread(_objectSpread({}, videoStyle), {}, {
            '-webkit-transform': mirrorCss,
            '-moz-transform': mirrorCss,
            '-o-transform': mirrorCss,
            '-ms-transform': mirrorCss,
            transform: mirrorCss
          });
        }
      }
      _this16.__setStyle(video, videoStyle);
      videoWrap.appendChild(video);
      guideBoxWrap = document.createElement('div');
      guideBoxWrap.setAttribute('data-useb-ocr', 'guideBoxWrap');
      _this16.__setStyle(guideBoxWrap, wrapStyle);
      ocr.appendChild(guideBoxWrap);
      guideBox = document.createElement('svg');
      guideBox.setAttribute('data-useb-ocr', 'guideBox');
      guideBox.setAttribute('fill', 'none');
      guideBox.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      _this16.__setStyle(guideBox, {
        width: '100%',
        margin: '0 auto',
        position: 'absolute'
      });
      guideBoxWrap.appendChild(guideBox);
      canvas = document.createElement('canvas');
      canvas.setAttribute('data-useb-ocr', 'canvas');
      var canvasStyle = {
        display: _this16.__options.showCanvasPreview ? _this16.__isRotated90or270 ? 'none' : 'display' : 'none',
        width: '25%',
        position: 'absolute',
        left: '0px',
        top: '30px',
        border: 'green 2px solid'
      };
      _this16.__setStyle(canvas, canvasStyle);
      ocr.appendChild(canvas);
      rotationCanvas = document.createElement('canvas');
      rotationCanvas.setAttribute('data-useb-ocr', 'rotationCanvas');
      _this16.__setStyle(rotationCanvas, {
        display: _this16.__options.showCanvasPreview ? _this16.__isRotated90or270 ? 'display' : 'none' : 'none',
        height: '25%',
        position: 'absolute',
        right: '0px',
        top: '30px',
        border: 'blue 2px solid'
      });
      ocr.appendChild(rotationCanvas);
      preventToFreezeVideo = document.createElement('div');
      preventToFreezeVideo.setAttribute('data-useb-ocr', 'preventToFreezeVideo');
      _this16.__setStyle(preventToFreezeVideo, {
        position: 'absolute',
        bottom: '10',
        right: '10'
      });
      preventToFreezeVideo.innerHTML = '' + '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="32px" height="32px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n' + '  <circle cx="84" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="0.5555555555555556s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>\n' + '    <animate attributeName="fill" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#86868600;#86868600;#86868600;#86868600;#86868600" begin="0s"></animate>\n' + '  </circle>' + '  <circle cx="16" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>\n' + '  </circle>' + '  <circle cx="50" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5555555555555556s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5555555555555556s"></animate>\n' + '  </circle>' + '  <circle cx="84" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.1111111111111112s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.1111111111111112s"></animate>\n' + '  </circle>' + '  <circle cx="16" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666665s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666665s"></animate>\n' + '  </circle>';
      '</svg>';
      ocr.appendChild(preventToFreezeVideo);
      customUIWrap = document.createElement('div');
      customUIWrap.setAttribute('data-useb-ocr', 'customUIWrap');
      var customUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
        'flex-direction': 'column'
      });
      _this16.__setStyle(customUIWrap, customUIWrapStyle);
      ocr.appendChild(customUIWrap);

      // 각 top, middle, bottom UI 사용(use)여부와 관계없이 영역을 잡기 위해, div가 없으면 생성
      // adjustStyle() 에서 세부적인 사이즈와 위치값 동적으로 설정됨.
      if (!topUI) {
        topUI = document.createElement('div');
        topUI.setAttribute('data-useb-ocr', 'topUI');
      }
      customUIWrap.appendChild(topUI);
      if (!middleUI) {
        middleUI = document.createElement('div');
        middleUI.setAttribute('data-useb-ocr', 'middleUI');
      }
      customUIWrap.appendChild(middleUI);
      if (!bottomUI) {
        bottomUI = document.createElement('div');
        bottomUI.setAttribute('data-useb-ocr', 'bottomUI');
      }
      customUIWrap.appendChild(bottomUI);
      captureUIWrap = document.createElement('div');
      captureUIWrap.setAttribute('data-useb-ocr', 'captureUIWrap');
      var captureUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
        'flex-direction': 'center'
      });
      _this16.__setStyle(captureUIWrap, captureUIWrapStyle);
      ocr.appendChild(captureUIWrap);
      if (_this16.__options.useCaptureUI) {
        if (!captureUI) {
          captureUI = document.createElement('div');
          captureUI.setAttribute('data-useb-ocr', 'captureUI');
          _this16.__setStyle(captureUI, {
            display: 'none'
          });
        }
        if (!captureButton) {
          captureButton = document.createElement('div');
          captureButton.setAttribute('data-useb-ocr', 'captureButton');
          var captureButtonSrcSVG = "";
          captureButtonSrcSVG += "<svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>";
          captureButtonSrcSVG += "  <circle id='captureButton' cx='40' cy='40' r='38' fill='#555555' stroke='#ffffff' stroke-width='4'/>";
          captureButtonSrcSVG += "</svg>";
          captureButton.innerHTML = captureButtonSrcSVG;
          captureUI.appendChild(captureButton);
        }
        captureUIWrap.appendChild(captureUI);
        var that = _this16;
        var __onClickCaptureButton = function __onClickCaptureButton() {
          detector.getOCRElements().captureButton.setAttribute('is-clicked', 'true');
          that.__setStyle(detector.getOCRElements().video, {
            display: 'none'
          });
          that.__setStyle(detector.getOCRElements().captureButton, {
            display: 'none'
          });
        };
        captureButton.addEventListener('click', __onClickCaptureButton);
      }
      if (_this16.__options.usePreviewUI) {
        previewUIWrap = document.createElement('div');
        previewUIWrap.setAttribute('data-useb-ocr', 'previewUIWrap');
        var previewUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
          'flex-direction': 'column',
          display: 'none',
          'background-color': '#000000aa'
        });
        _this16.__setStyle(previewUIWrap, previewUIWrapStyle);
        ocr.appendChild(previewUIWrap);
        if (_this16.__options.usePreviewUI) {
          if (!previewUI) {
            previewUI = document.createElement('div');
            previewUI.setAttribute('data-useb-ocr', 'previewUI');
          }
          _this16.__setStyle(previewUI, _objectSpread(_objectSpread({}, wrapStyle), {}, {
            'flex-direction': 'column',
            width: '',
            height: '',
            'max-width': '90%',
            'max-height': '90%'
          }));
          previewUIWrap.appendChild(previewUI);
          if (!previewImage) {
            previewImage = document.createElement('img');
            previewImage.setAttribute('data-useb-ocr', 'previewImage');
            previewUI.appendChild(previewImage);
          }
        }
      }

      // loading UI 위치 자리잡게 하기 위해
      yield _this16.__adjustStyle(true);

      // 화면과도 현상 해결
      _this16.__setStyle(ocr, {
        display: ''
      });
      _this16.__ocr = ocr;
      _this16.__canvas = canvas;
      _this16.__rotationCanvas = rotationCanvas;
      _this16.__video = video;
      _this16.__videoWrap = videoWrap;
      _this16.__guideBox = guideBox;
      _this16.__guideBoxWrap = guideBoxWrap;
      _this16.__maskBoxWrap = maskBoxWrap;
      _this16.__preventToFreezeVideo = preventToFreezeVideo;
      _this16.__customUIWrap = customUIWrap;
      _this16.__topUI = topUI;
      _this16.__middleUI = middleUI;
      _this16.__bottomUI = bottomUI;
      _this16.__captureUIWrap = captureUIWrap;
      _this16.__captureUI = captureUI;
      _this16.__captureButton = captureButton;
      _this16.__previewUIWrap = previewUIWrap;
      _this16.__previewUI = previewUI;
      _this16.__previewImage = previewImage;
      return {
        ocr,
        canvas,
        rotationCanvas,
        video,
        videoWrap,
        guideBox,
        guideBoxWrap,
        maskBoxWrap,
        preventToFreezeVideo,
        customUIWrap,
        topUI,
        middleUI,
        bottomUI,
        captureUIWrap,
        captureUI,
        captureButton,
        previewUIWrap,
        previewUI,
        previewImage
      };
    })();
  }
  __blurCaptureButton() {
    this.__setStyle(detector.getOCRElements().video, {
      display: ''
    });
    var {
      captureButton
    } = detector.getOCRElements();
    if (captureButton) {
      captureButton.setAttribute('is-clicked', 'false');
      this.__setStyle(captureButton, {
        display: ''
      });
    }
  }
  __isClickedCaptureButton() {
    var {
      captureButton
    } = detector.getOCRElements();
    return captureButton ? captureButton.getAttribute('is-clicked') === 'true' : false;
  }
  __setupVideo(isPassport) {
    var _this17 = this;
    return _asyncToGenerator(function* () {
      // wasm 인식성능 최적화된 해상도
      _this17.__resolutionWidth = 1080;
      _this17.__resolutionHeight = 720;
      _this17.__camSetComplete = false;
      var {
        video,
        canvas,
        rotationCanvas
      } = yield _this17.__setupDomElements();
      var videoDevices = yield _this17.__getInputDevices('video');
      // console.log('videoDevices :: ', videoDevices)
      var deviceIdList = videoDevices.map(device => device.deviceId);
      _this17.checkUIOrientation();
      var constraintWidth, constraintHeight;
      if (_this17.__uiOrientation === 'portrait') {
        // ui : portrait
        constraintWidth = {
          ideal: 1920,
          // portrait 이지만 카메라는 landscape 인경우
          min: 1080 // portrait 이고 카메라도 portrait 인경우
        };

        constraintHeight = {
          ideal: 1080,
          // portrait 이지만 카메라는 landscape 인경우
          min: 720 // portrait 이고 카메라도 portrait 인경우
        };
      } else {
        // ui : landscape
        constraintWidth = {
          ideal: 1920,
          min: 1280
        };
        constraintHeight = {
          ideal: 1080,
          min: 720
        };
      }
      var constraints = {
        audio: false,
        video: {
          zoom: {
            ideal: 1
          },
          facingMode: {
            ideal: _this17.__facingModeConstraint
          },
          focusMode: {
            ideal: 'continuous'
          },
          whiteBalanceMode: {
            ideal: 'continuous'
          },
          deviceId: videoDevices.length ? {
            ideal: deviceIdList[deviceIdList.length - 1]
          } : null,
          width: constraintWidth,
          height: constraintHeight
        }
      };

      // 최초 진입 이어서 videoDeivce 리스트를 가져올 수 없으면,
      // getUserMedia를 임의 호출하여 권한을 받은뒤 다시 가져옴
      if (videoDevices.length === 0) {
        _this17.__stream = yield navigator.mediaDevices.getUserMedia(constraints);
        _this17.stopStream();
        videoDevices = yield _this17.__getInputDevices('video');
        deviceIdList = videoDevices.map(device => device.deviceId);
        constraints.video.deviceId = videoDevices.length ? {
          ideal: deviceIdList[deviceIdList.length - 1]
        } : null;
      }
      try {
        // const dumptrack = ([a, b], track) =>
        //   `${a}${track.kind == 'video' ? 'Camera' : 'Microphone'} (${track.readyState}): ${track.label}${b}`;

        var stream = yield navigator.mediaDevices.getUserMedia(constraints);
        // console.log('videoTracks :: ', stream.getVideoTracks())
        // const streamSettings = stream.getVideoTracks()[0].getSettings();
        // console.log('streamCapabilities :: ', stream.getVideoTracks()[0].getCapabilities())
        // console.log('stream :: ', stream.getVideoTracks()[0].getConstraints())
        // console.log('streamSettings :: ', streamSettings)
        // console.log('stream width :: ' + streamSettings.width);
        // console.log('stream height :: ' + streamSettings.height);
        // console.log('stream width / height :: ' + streamSettings.width / streamSettings.height);
        // console.log('stream aspectRatio :: ' + streamSettings.aspectRatio);

        [canvas.width, canvas.height] = [_this17.__resolutionWidth, _this17.__resolutionHeight];
        if (_this17.__isRotated90or270) {
          [rotationCanvas.width, rotationCanvas.height] = [_this17.__resolutionHeight, _this17.__resolutionWidth];
        }
        video.srcObject = stream;
        _this17.__stream = stream;
      } catch (e) {
        void 0;
        throw e;
      }
    })();
  }
  __adjustStyle() {
    var _arguments4 = arguments,
      _this18 = this;
    return _asyncToGenerator(function* () {
      var isFirstCalled = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : false;
      void 0;
      var {
        ocr,
        video,
        guideBox,
        maskBoxWrap,
        topUI,
        middleUI,
        bottomUI,
        captureUIWrap,
        captureUI,
        captureButton
      } = detector.getOCRElements();
      _this18.__setStyle(captureUI, {
        display: 'none'
      });

      // 기준정보
      var baseWidth = 400;
      var baseHeight = 260;
      var scannerFrameRatio = baseHeight / baseWidth; // 신분증 비율

      var guideBoxWidth, guideBoxHeight;
      var calcOcrClientWidth = ocr.clientWidth;
      var calcOcrClientHeight = ocr.clientHeight;
      var calcVideoWidth = video.videoWidth;
      var calcVideoHeight = video.videoHeight;
      var calcVideoClientWidth = video.clientWidth;
      var calcVideoClientHeight = video.clientHeight;
      var calcVideoOrientation = _this18.__videoOrientation;
      var borderWidth = _this18.__options.frameBorderStyle.width;
      var borderRadius = _this18.__options.frameBorderStyle.radius;
      if (_this18.__isRotated90or270) {
        [calcVideoWidth, calcVideoHeight] = [calcVideoHeight, calcVideoWidth];
        [calcVideoClientWidth, calcVideoClientHeight] = [calcVideoClientHeight, calcVideoClientWidth];
        calcVideoOrientation = _this18.__videoOrientation === 'portrait' ? 'landscape' : 'portrait';
      }
      var newVideoWidth = calcVideoClientWidth;
      var newVideoHeight = calcVideoClientHeight;
      var guideBoxRatioByWidth = _this18.__guideBoxRatioByWidth;
      var videoRatioByHeight = _this18.__videoRatioByHeight;
      if (_this18.__uiOrientation === 'portrait') {
        // 세로 UI
        _this18.__setStyle(captureUIWrap, {
          'justify-content': 'center',
          'align-items': 'flex-end'
        });
        // video 가로 기준 100% 유지 (변경없음)
        if (calcVideoOrientation === _this18.__uiOrientation) {
          // 카메라도 세로
          // 세로 UI && 세로 비디오
          // 가로 기준으로 가이드박스 계산
          guideBoxWidth = calcOcrClientWidth * guideBoxRatioByWidth;
          guideBoxHeight = guideBoxWidth * scannerFrameRatio;

          // 가이드 박스 가로 기준으로 비디오 확대
          newVideoWidth = guideBoxWidth;
          newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
          if (_this18.__isRotated90or270) {
            [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
          }
        } else {
          // 카메라는 가로
          // 세로 UI && 가로 비디오
          // 가이드 박스를 비디오 세로 길이에 맞춤
          guideBoxHeight = calcVideoClientHeight;
          guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;
        }
      } else {
        // 가로 UI
        _this18.__setStyle(captureUIWrap, {
          'justify-content': 'end',
          'align-items': 'center'
        });
        if (calcVideoOrientation === _this18.__uiOrientation) {
          // 가로 UI && 가로 비디오
          // 비디오를 가로 UI의 height 기준으로 줄이고
          // 가로 UI height 기준으로 비디오의 width 계산
          newVideoHeight = calcOcrClientHeight * videoRatioByHeight;
          newVideoWidth = newVideoHeight * (calcVideoWidth / calcVideoHeight);

          // 가이드박스는 비디오를 세로 기준으로 맞춤
          guideBoxHeight = newVideoHeight;
          guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;

          // 가이드박스의 가로 크기가 가로 UI width * ratio 값보다 크면,
          if (guideBoxWidth > calcOcrClientWidth * guideBoxRatioByWidth) {
            // 계산 방식을 바꾼다 (사유 : 거의 정사각형에 가까운 경우 가이드 박스 가로가 꽉차게 됨.)
            guideBoxWidth = calcOcrClientWidth * guideBoxRatioByWidth;
            guideBoxHeight = guideBoxWidth * scannerFrameRatio;

            // 가이드 박스 가로 기준으로 비디오 확대
            newVideoWidth = guideBoxWidth;
            newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
          }
        } else {
          // 가로 UI && 세로 비디오
          // 가로 기준으로 가이드박스 계산

          // 가이드박스의 height 크기를 UI의 height 기준에 맞춤
          guideBoxHeight = calcOcrClientHeight * videoRatioByHeight;
          guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;

          // 가이드박스의 가로 크기가 가로 UI width * ratio 값보다 크면,
          if (guideBoxWidth > calcOcrClientWidth * guideBoxRatioByWidth) {
            // 계산 방식을 바꾼다 (사유 : 거의 정사각형에 가까운 경우 가이드 박스 가로가 꽉차게 됨.)
            guideBoxWidth = calcOcrClientWidth * guideBoxRatioByWidth;
            guideBoxHeight = guideBoxWidth * scannerFrameRatio;
          }

          // 가이드 박스 가로 기준으로 비디오 축소
          newVideoWidth = guideBoxWidth;
          newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
          if (_this18.__isRotated90or270) {
            [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
          }
        }
      }
      guideBoxWidth += borderWidth * 2;
      guideBoxHeight += borderWidth * 2;
      _this18.__cropImageSizeWidth = Math.min(guideBoxWidth, newVideoWidth);
      _this18.__cropImageSizeHeight = Math.min(guideBoxHeight, newVideoHeight);
      var reducedGuideBoxWidth = guideBoxWidth * _this18.__guideBoxReduceRatio;
      var reducedGuideBoxHeight = guideBoxHeight * _this18.__guideBoxReduceRatio;
      if (topUI) {
        _this18.__setStyle(topUI, {
          'padding-bottom': '10px',
          height: (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          display: 'flex',
          'flex-direction': 'column-reverse'
        });
      }
      if (middleUI) {
        _this18.__setStyle(middleUI, {
          width: reducedGuideBoxWidth - borderWidth * 2 + 'px',
          height: reducedGuideBoxHeight - borderWidth * 2 + 'px',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          padding: '10px'
        });
      }
      if (bottomUI) {
        _this18.__setStyle(bottomUI, {
          'padding-top': '10px',
          height: (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          display: 'flex',
          'flex-direction': 'column'
        });
      }
      if (newVideoWidth !== calcVideoClientWidth) {
        _this18.__setStyle(video, {
          width: newVideoWidth + 'px'
        });
      }
      if (newVideoHeight !== calcVideoClientHeight) {
        _this18.__setStyle(video, {
          height: newVideoHeight + 'px'
        });
      }
      var videoInnerGap = 2; // 미세하게 maskBoxInner보다 guideBox가 작은것 보정
      _this18.__setStyle(guideBox, {
        width: reducedGuideBoxWidth - videoInnerGap + 'px',
        height: reducedGuideBoxHeight - videoInnerGap + 'px',
        backgroundColor: 'transparent'
      });
      var maskBoxInner = maskBoxWrap.querySelector('#maskBoxInner');
      var r = borderRadius - borderWidth * 2;
      r = r < 0 ? 0 : r;
      if (!isNaN(reducedGuideBoxWidth) && !isNaN(reducedGuideBoxHeight) && !isNaN(borderRadius) && !isNaN(borderWidth)) {
        var maskBoxInnerWidth = Math.max(reducedGuideBoxWidth - borderWidth * 2 - videoInnerGap, 0);
        var maskBoxInnerHeight = Math.max(reducedGuideBoxHeight - borderWidth * 2 - videoInnerGap, 0);
        maskBoxInner.setAttribute('width', maskBoxInnerWidth + '');
        maskBoxInner.setAttribute('height', maskBoxInnerHeight + '');
        maskBoxInner.setAttribute('x', maskBoxInnerWidth / 2 * -1 + '');
        maskBoxInner.setAttribute('y', maskBoxInnerHeight / 2 * -1 + '');
        maskBoxInner.setAttribute('rx', r + '');
        maskBoxInner.setAttribute('ry', r + '');
      }

      // 수동 촬영 UI 사용
      // firstCalled인 경우 아직 captureUI가 그려지지 않아 무의미
      if (_this18.__options.useCaptureUI && !isFirstCalled) {
        _this18.__setStyle(captureUI, {
          display: ''
        });
        if (_this18.__uiOrientation === 'portrait' && bottomUI && captureUI) {
          var calcSumOfHeightBottomUIChildNodes = _this18.__calcSumOfHeightChildNodes(bottomUI);
          var calcCaptureButtonHeight = captureButton.querySelector('svg').getAttribute('height');
          calcCaptureButtonHeight = calcCaptureButtonHeight === 0 ? 80 : calcCaptureButtonHeight;
          var captureUIPaddingBottom = bottomUI.clientHeight;
          captureUIPaddingBottom -= isNaN(parseInt(bottomUI.style.paddingTop)) ? 0 : parseInt(bottomUI.style.paddingTop);
          captureUIPaddingBottom -= calcSumOfHeightBottomUIChildNodes;
          captureUIPaddingBottom -= calcCaptureButtonHeight;
          var baseline = calcOcrClientHeight - (calcOcrClientHeight / 2 + guideBoxHeight / 2);
          if (captureUIPaddingBottom > 0 && captureUIPaddingBottom < baseline) {
            _this18.__setStyle(captureUI, {
              'padding-right': '',
              'padding-bottom': captureUIPaddingBottom + 'px'
            });
          }
        } else {
          _this18.__setStyle(captureUI, {
            'padding-right': '10px',
            'padding-bottom': ''
          });
        }
      }
      yield _this18.__changeStage(_this18.__inProgressStep, true);
      void 0;
    })();
  }
  __calcSumOfHeightChildNodes(obj) {
    var sum = 0;
    for (var item of obj === null || obj === void 0 ? void 0 : obj.childNodes) {
      sum += item.clientHeight ? item.clientHeight : 0;
    }
    return sum;
  }
  __closeCamera() {
    this.__clearCameraPermissionTimeoutTimer();
    this.stopScan();
    this.stopStream();
  }
  __loadResources() {
    var _this19 = this;
    return _asyncToGenerator(function* () {
      void 0;
      if (_this19.__resourcesLoaded) {
        void 0;
        return;
      }
      var sdkSupportEnv = 'quram';
      var isSupportSimd = yield simd();
      var envInfo = '';
      envInfo += "os : ".concat(_this19.__deviceInfo.os, "\n");
      envInfo += "osSimple : ".concat(_this19.__deviceInfo.osSimple, "\n");
      envInfo += "simd(wasm-feature-detect) : ".concat(isSupportSimd, "\n");
      if (_this19.__deviceInfo.osSimple === 'IOS' || _this19.__deviceInfo.osSimple === 'MAC') {
        isSupportSimd = false;
      }
      envInfo += "isSupportSimd(final) : ".concat(isSupportSimd, "\n");
      envInfo += "UserAgent : ".concat(navigator.userAgent, "\n");
      if (isSupportSimd) {
        void 0;
        sdkSupportEnv += '_simd.js';
      } else {
        void 0;
        sdkSupportEnv += '.js';
      }
      void 0;
      window.usebOCREnvInfo = envInfo;
      void 0;
      var url = new URL(sdkSupportEnv, _this19.__options.resourceBaseUrl);
      var src = yield fetch(url.href).then(res => res.text()).then(text => {
        var regex = /(.*) = Module.cwrap/gm;
        var source = text.replace(regex, 'Module.$1 = Module.cwrap');

        // data(model)
        source = source.replace(/^\(function\(\) \{/m, 'var createModelData = async function() {\n' + ' return new Promise(async function (resolve, reject) {\n');
        source = source.replace('   console.error("package error:", error);', '   reject();\n' + '   console.error("package error:", error);');
        source = source.replace('  }, handleError)', '  resolve();\n' + '  }, handleError)');
        source = source.replace(/^\}\)\(\);/m, '\n })\n' + '};');

        // wasm
        source = source.replace('quram.wasm', new URL('quram.wasm', _this19.__options.resourceBaseUrl).href);
        source = source.replace(/REMOTE_PACKAGE_BASE = ['"]quram\.data["']/gm, "REMOTE_PACKAGE_BASE = \"".concat(new URL('quram.data', _this19.__options.resourceBaseUrl).href, "\""));
        source = source.replace('function createWasm', 'async function createWasm');
        source = source.replace('instantiateAsync();', 'await instantiateAsync();');

        // wasm and data(model) file 병렬로 fetch 하기 위해
        source = source.replace('var asm = createWasm();', 'console.log("create wasm and data - start")\n' + 'await (async function() {\n' + '  return new Promise(function(resolve) {\n' + '    var isCreatedWasm = false;\n' + '    var isCreatedData = false;\n' + '    createWasm().then(() => {\n' + '      isCreatedWasm = true;\n' + '      if (isCreatedData) { resolve(); }\n' + '    });\n' + '    createModelData().then(() => {\n' + '      isCreatedData = true;\n' + '      if (isCreatedWasm) { resolve(); }\n' + '    })\n' + '  });\n' + '})();\n' + 'console.log("create wasm and data - end")');
        return source;
      });
      src = "\n    (async function() {\n      ".concat(src, "\n      Module.lengthBytesUTF8 = lengthBytesUTF8\n      Module.stringToUTF8 = stringToUTF8\n      return Module\n    })()\n        ");
      _this19.__OCREngine = yield eval(src);
      _this19.__OCREngine.onRuntimeInitialized = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator(function* (_) {
          void 0;
        });
        return function (_x2) {
          return _ref7.apply(this, arguments);
        };
      }();
      yield _this19.__OCREngine.onRuntimeInitialized();
      _this19.__resourcesLoaded = true;
      void 0;
    })();
  }
  __startScanImpl() {
    var _this20 = this;
    return new Promise((resolve, reject) => {
      this.__detected = false;
      this.setIgnoreComplete(false);
      this.__blurCaptureButton();
      this.__address = 0;
      this.__pageEnd = false;
      // 방어코드 문자가들어가 있는경우
      this.__options.ssaMaxRetryCount = isNaN(parseInt(this.__options.ssaMaxRetryCount)) ? 0 : parseInt(this.__options.ssaMaxRetryCount);
      this.__manualOCRRetryCount = 0;
      this.__ssaRetryCount = 0;
      var scan = /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator(function* () {
          try {
            var ocrResult = null,
              isDetectedCard = null,
              imgData = null,
              imgDataUrl = null,
              maskImage = null,
              ssaResult = null,
              ssaResultList = [],
              maskInfo = null;

            // await this.__changeStage(IN_PROGRESS.READY);
            if (!_this20.__OCREngine['asm']) return;

            // TODO : 설정할수 있게 변경  default 값도 제공
            var [resolution_w, resolution_h] = [_this20.__resolutionWidth, _this20.__resolutionHeight];
            var {
              video
            } = detector.getOCRElements();
            if (resolution_w === 0 || resolution_h === 0) return;
            if (_this20.__detected) {
              yield _this20.__sleep(100);
              return;
            }
            // console.log('address before ---------', address);
            if (_this20.__address === 0 && !_this20.__pageEnd && (yield _this20.__isVideoResolutionCompatible(video))) {
              [_this20.__address, _this20.__destroyScannerCallback] = _this20.__getScannerAddress(_this20.__ocrType);
            }
            if (!_this20.__address || _this20.__pageEnd) {
              yield _this20.__sleep(100);
              return;
            }
            // console.log('address after ---------', address);

            if (_this20.__ocrStatus < _this20.OCR_STATUS.OCR_SUCCESS) {
              // OCR 완료 이전 상태

              // card not detected
              [isDetectedCard, imgData, imgDataUrl] = yield _this20.__isCardboxDetected(_this20.__address, 0);
              if (!isDetectedCard) {
                if (_this20.__inProgressStep !== _this20.IN_PROGRESS.READY) {
                  yield _this20.__changeStage(_this20.IN_PROGRESS.CARD_DETECT_FAILED);
                }
                if (_this20.__isClickedCaptureButton()) {
                  yield _this20.__changeStage(_this20.IN_PROGRESS.MANUAL_CAPTURE_FAILED, false, imgDataUrl);
                  _this20.__blurCaptureButton();
                  _this20.setIgnoreComplete(false); // 필요한가?
                }

                return;
              }

              // card is detected
              yield _this20.__changeStage(_this20.IN_PROGRESS.CARD_DETECT_SUCCESS);

              // ssa retry 설정이 되어 있으거나, 수동촬영UI를 사용하는 경우, card detect 성공시 이미지 저장
              _this20.__enqueueDetectedCardQueue(imgData, imgDataUrl);
              if (_this20.__isClickedCaptureButton()) {
                _this20.setIgnoreComplete(true);
                yield _this20.__changeStage(_this20.IN_PROGRESS.MANUAL_CAPTURE_SUCCESS, false, imgDataUrl);
              }
              [ocrResult, imgDataUrl, maskImage] = yield _this20.__startRecognition(_this20.__address, _this20.__ocrType, _this20.__ssaMode, _this20.__isClickedCaptureButton(), imgData, imgDataUrl);

              // if (this.__isClickedCaptureButton()) {
              //   this.__blurCaptureButton();
              //   this.setIgnoreComplete(false);        // 필요한가?
              // }
            }

            if (_this20.__ocrStatus >= _this20.OCR_STATUS.OCR_SUCCESS) {
              // ocr 완료 이후 상태

              // failure case
              if (ocrResult === false) {
                throw new Error("OCR Status is ".concat(_this20.__ocrStatus, ", but ocrResult is false"));
              }

              // success case
              _this20.__setStyle(video, {
                display: 'none'
              }); // OCR 완료 시점에 camera preview off

              if (_this20.__ssaMode) {
                void 0;
                // 최초 시도
                ssaResult = yield _this20.__startTruth(_this20.__ocrType, _this20.__address);
                if (ssaResult === null) {
                  throw new Error('[ERR] SSA MODE is true. but, ssaResult is null');
                }
                ssaResultList.push(ssaResult);
                if (_this20.__options.ssaMaxRetryCount > 0) {
                  var retryStartDate = new Date();
                  for (var item of _this20.__detectedCardQueue) {
                    if (ssaResult.indexOf('FAKE') > -1) {
                      _this20.__ssaRetryCount++;
                      void 0;
                      ssaResult = yield _this20.__startTruthRetry(_this20.__ocrType, _this20.__address, item);
                      if (ssaResult === null) {
                        throw new Error('[ERR] SSA MODE is true. but, ssaResult is null');
                      }
                      ssaResultList.push(ssaResult);
                    } else {
                      break;
                    }
                  }
                  var retryWorkingTime = new Date() - retryStartDate;
                  void 0;
                } else {
                  void 0;
                }
              }
              if (_this20.__options.useMaskInfo) {
                maskInfo = JSON.stringify(_this20.__getMaskInfo(_this20.__address));
              }
              void 0;
              var {
                legacyFormat,
                newFormat
              } = parser.parseOcrResult(_this20.__ocrType, _this20.__ssaMode, ocrResult, ssaResult, _this20.__ssaRetryCount, ssaResultList);
              var review_result = {
                ocr_type: _this20.__ocrType,
                ocr_result: newFormat,
                ocr_origin_image: imgDataUrl,
                ocr_masking_image: maskImage,
                maskInfo: maskInfo,
                ssa_mode: _this20.__ssaMode
              };
              if (_this20.__options.useLegacyFormat) {
                review_result.ocr_data = legacyFormat;
              }
              yield _this20.__onSuccessProcess(review_result);
              _this20.__closeCamera();
              _this20.__detected = true;
              resolve();
            }
          } catch (e) {
            var errorMessage = 'Card detection error';
            if (e.message) {
              errorMessage += ': ' + e.message;
            }
            void 0;

            // if (e.toString().includes('memory')) {
            //   await this.__recoveryScan();
            //   this.__recovered = true;
            // } else {
            yield _this20.__onFailureProcess('WA001', e, errorMessage);
            _this20.__closeCamera();
            _this20.__detected = true;
            reject();
            // }
          } finally {
            if (_this20.__recovered) {
              _this20.__recovered = false;
              return;
            }
            if (!_this20.__detected) {
              setTimeout(scan, 1); // 재귀
            }
          }
        });
        return function scan() {
          return _ref8.apply(this, arguments);
        };
      }();
      setTimeout(scan, 1); // UI 랜더링 blocking 방지 (setTimeout)
    });
  }

  __enqueueDetectedCardQueue(imgData, imgDataURL) {
    // ssa retry 설정이 되어 있으거나, 수동촬영UI를 사용하는 경우, card detect 성공시 이미지 저장
    if (this.__ssaMode && this.__options.ssaMaxRetryCount > 0 || this.__options.useCaptureUI && this.__manualOCRMaxRetryCount > 0) {
      var limitSaveImageCount = Math.max(this.__options.ssaMaxRetryCount, this.__manualOCRMaxRetryCount);
      if (this.__detectedCardQueue.length === limitSaveImageCount) {
        this.__detectedCardQueue.shift();
        if (this.__debugMode) this.__detectedCardQueueBase64.shift();
      }
      this.__detectedCardQueue.push(imgData);
      if (this.__debugMode) {
        this.__detectedCardQueueBase64.push(imgDataURL);
        void 0; // should be removed
      }

      void 0; // should be removed
    }
  }

  __onSuccessProcess(review_result) {
    var _this21 = this;
    return _asyncToGenerator(function* () {
      // 인식 성공 스캔 루프 종료
      if (review_result.ssa_mode) {
        yield _this21.__changeStage(_this21.IN_PROGRESS.OCR_SUCCESS_WITH_SSA);
      } else {
        yield _this21.__changeStage(_this21.IN_PROGRESS.OCR_SUCCESS);
      }
      var result = {
        api_response: {
          result_code: 'N100',
          result_message: 'OK.'
        },
        result: 'success',
        review_result: review_result
      };
      if (_this21.__onSuccess) {
        _this21.__onSuccess(result);
        _this21.__onSuccess = null;
      } else {
        void 0;
      }
    })();
  }
  __onFailureProcess(resultCode, e, errorMessage) {
    var _this22 = this;
    return _asyncToGenerator(function* () {
      yield _this22.__changeStage(_this22.IN_PROGRESS.OCR_FAILED);
      var errorDetail = '';
      if (e !== null && e !== void 0 && e.toString()) errorDetail += e.toString();
      if (e !== null && e !== void 0 && e.stack) errorDetail += e.stack;
      var result = {
        api_response: {
          result_code: resultCode,
          result_message: errorMessage
        },
        result: 'failed',
        review_result: {
          ocr_type: _this22.__ocrType,
          error_detail: errorDetail
        }
      };
      if (_this22.__onFailure) {
        _this22.__onFailure(result);
        _this22.__onFailure = null;
      } else {
        void 0;
      }
    })();
  }
  __startScan() {
    var _this23 = this;
    return _asyncToGenerator(function* () {
      _this23.cleanup();
      yield _this23.__proceedCameraPermission();
      yield _this23.__startScanImpl();
      void 0;
    })();
  }
  __recoveryScan() {
    var _this24 = this;
    return _asyncToGenerator(function* () {
      void 0;
      _this24.__resourcesLoaded = false;
      _this24.stopScan();
      yield _this24.__startScan();
    })();
  }
  stopScan() {
    var {
      canvas
    } = detector.getOCRElements();
    if (canvas) {
      var canvasContext = canvas.getContext('2d', {
        willReadFrequently: true
      });
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  stopStream() {
    cancelAnimationFrame(this.__requestAnimationFrameId);
    if (this.__stream) {
      this.__stream.stop && this.__stream.stop();
      var tracks = this.__stream.getTracks && this.__stream.getTracks();
      void 0;
      if (tracks && tracks.length) {
        tracks.forEach(track => track.stop());
      }
      this.__stream = null;
    }
  }

  /** 메모리 allocation free 함수 */
  cleanup() {
    this.__destroyScannerAddress();
    this.__destroyBuffer();
    this.__destroyPrevImage();
    this.__destroyStringOnWasmHeap();
  }
  __clearCameraPermissionTimeoutTimer() {
    if (this.__cameraPermissionTimeoutTimer) {
      clearTimeout(this.__cameraPermissionTimeoutTimer);
      this.__cameraPermissionTimeoutTimer = null;
    }
  }
}
export default UseBOCR;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJzaW1kIiwidGhyZWFkcyIsImluc3RhbmNlIiwiVXNlQk9DUiIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiTk9ORSIsIk5PVF9SRUFEWSIsIlJFQURZIiwiQ0FSRF9ERVRFQ1RfU1VDQ0VTUyIsIkNBUkRfREVURUNUX0ZBSUxFRCIsIk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MiLCJNQU5VQUxfQ0FQVFVSRV9GQUlMRUQiLCJPQ1JfUkVDT0dOSVpFRCIsIk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBIiwiT0NSX1NVQ0NFU1MiLCJPQ1JfU1VDQ0VTU19XSVRIX1NTQSIsIk9DUl9GQUlMRUQiLCJET05FIiwiTk9UX1NUQVJURUQiLCJTVEFSVEVEIiwiUFJFTE9BRElOR19TVEFUVVMiLCJPQ1JfU1RBVFVTIiwiTWFwIiwiSU5fUFJPR1JFU1MiLCJPYmplY3QiLCJzaG93Q2xpcEZyYW1lIiwic2hvd0NhbnZhc1ByZXZpZXciLCJ1c2VUb3BVSSIsInVzZVRvcFVJVGV4dE1zZyIsInVzZU1pZGRsZVVJIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUkiLCJ1c2VCb3R0b21VSVRleHRNc2ciLCJ1c2VQcmV2aWV3VUkiLCJ1c2VDYXB0dXJlVUkiLCJ1c2VNYXNrSW5mbyIsImZyYW1lQm9yZGVyU3R5bGUiLCJ3aWR0aCIsInN0eWxlIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJtYW51YWxfY2FwdHVyZV9mYWlsZWQiLCJtYW51YWxfY2FwdHVyZV9zdWNjZXNzIiwicmVjb2duaXplZCIsInJlY29nbml6ZWRfd2l0aF9zc2EiLCJvY3JfZmFpbGVkIiwib2NyX3N1Y2Nlc3MiLCJvY3Jfc3VjY2Vzc193aXRoX3NzYSIsInVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlIiwibWFza0ZyYW1lU3R5bGUiLCJjbGlwX2ZyYW1lIiwiYmFzZV9jb2xvciIsInVzZUNhcHR1cmVCdXR0b25Db2xvckNoYW5nZSIsImNhcHR1cmVCdXR0b25TdHlsZSIsInN0cm9rZV9jb2xvciIsInJlc291cmNlQmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiZGV2aWNlTGFiZWwiLCJ2aWRlb1RhcmdldElkIiwicm90YXRpb25EZWdyZWUiLCJtaXJyb3JNb2RlIiwic3NhTWF4UmV0cnlDb3VudCIsInVzZUxlZ2FjeUZvcm1hdCIsInByZWxvYWRpbmciLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiaXNQcmVsb2FkZWQiLCJfX3ByZWxvYWRpbmdTdGF0dXMiLCJfX2xvYWRSZXNvdXJjZXMiLCJfX3ByZWxvYWRlZCIsImlzSW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVkIiwiZ2V0UHJlbG9hZGluZ1N0YXR1cyIsImdldE9DUkVuZ2luZSIsIl9fT0NSRW5naW5lIiwiaW5pdCIsInNldHRpbmdzIiwibGljZW5zZUtleSIsIkVycm9yIiwiX19saWNlbnNlIiwibWVyZ2VkT3B0aW9ucyIsIl8iLCJtZXJnZSIsIl9fb3B0aW9ucyIsInNldE9wdGlvbiIsIl9fd2luZG93RXZlbnRCaW5kIiwiX19kZXZpY2VJbmZvIiwiZ2V0T3NWZXJzaW9uIiwiZ2V0T3B0aW9uIiwiZ2V0T2NyVHlwZSIsInR5cGUiLCJfX29jclR5cGVTdHJpbmciLCJnZXQiLCJnZXRVSU9yaWVudGF0aW9uIiwiX191aU9yaWVudGF0aW9uIiwiZ2V0VmlkZW9PcmllbnRhdGlvbiIsIl9fdmlkZW9PcmllbnRhdGlvbiIsInN0YXJ0T0NSIiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiX2FyZ3VtZW50cyIsImFyZ3VtZW50cyIsIl90aGlzMiIsIm9uSW5Qcm9ncmVzc0NoYW5nZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9fb2NyVHlwZSIsIl9fc3NhTW9kZSIsImluZGV4T2YiLCJfX29uU3VjY2VzcyIsIl9fb25GYWlsdXJlIiwiX19vbkluUHJvZ3Jlc3NDaGFuZ2UiLCJfX3RvcFVJIiwiZ2V0T0NSRWxlbWVudHMiLCJ0b3BVSSIsIl9fbWlkZGxlVUkiLCJtaWRkbGVVSSIsIl9fYm90dG9tVUkiLCJib3R0b21VSSIsIl9fY2hhbmdlU3RhZ2UiLCJwcmVsb2FkaW5nU3RhdHVzIiwiX193YWl0UHJlbG9hZGVkIiwiY29uY2F0IiwiX19zdGFydFNjYW4iLCJlIiwic3RvcE9DUiIsImNsZWFudXAiLCJfX2Nsb3NlQ2FtZXJhIiwic2V0SWdub3JlQ29tcGxldGUiLCJ2YWwiLCJyZXN0YXJ0T0NSIiwib2NyVHlwZSIsIl90aGlzMyIsIl90aGlzNCIsIndhaXRpbmdSZXRyeUNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVjayIsInNldFRpbWVvdXQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiX19wYWdlRW5kIiwiaGFuZGxlUmVzaXplIiwiX3JlZjIiLCJfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiYXBwbHkiLCJfX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIl9fc2xlZXAiLCJtcyIsIl9fYmxvYlRvQmFzZTY0IiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX19nZXRTdHJpbmdPbldhc21IZWFwIiwibGVuZ3RoQnl0ZXMiLCJsZW5ndGhCeXRlc1VURjgiLCJfX3N0cmluZ09uV2FzbUhlYXAiLCJfbWFsbG9jIiwic3RyaW5nVG9VVEY4IiwiX19zZXRWaWRlb1Jlc29sdXRpb24iLCJ2aWRlb0VsZW1lbnQiLCJfdGhpczUiLCJpc1N1cHBvcnRlZFJlc29sdXRpb24iLCJyZXNvbHV0aW9uVGV4dCIsIl9fY2FtU2V0Q29tcGxldGUiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJzcmNPYmplY3QiLCJfX3ZpZGVvV2lkdGgiLCJfX3ZpZGVvSGVpZ2h0IiwiX19nZXRTY2FubmVyQWRkcmVzcyIsIl9fb2NyVHlwZUxpc3QiLCJpbmNsdWRlcyIsImFkZHJlc3MiLCJkZXN0cm95Q2FsbGJhY2siLCJzdHJpbmdPbldhc21IZWFwIiwiZ2V0SURDYXJkU2Nhbm5lciIsImRlc3Ryb3lJRENhcmRTY2FubmVyIiwiZ2V0UGFzc3BvcnRTY2FubmVyIiwiZGVzdHJveVBhc3Nwb3J0U2Nhbm5lciIsImdldEFsaWVuU2Nhbm5lciIsImRlc3Ryb3lBbGllblNjYW5uZXIiLCJnZXRDcmVkaXRTY2FubmVyIiwiZGVzdHJveUNyZWRpdFNjYW5uZXIiLCJfZnJlZSIsIl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MiLCJfX3JldHJ5Q291bnRHZXRBZGRyZXNzIiwiX19nZXRCdWZmZXIiLCJfX0J1ZmZlciIsIl9fcmVzb2x1dGlvbldpZHRoIiwiX19yZXNvbHV0aW9uSGVpZ2h0IiwiX19yZXN1bHRCdWZmZXIiLCJfX21hc2tJbmZvUmVzdWx0QnVmIiwiX19nZXRJbWFnZUJhc2U2NCIsIm1hc2tNb2RlIiwiY3JvcE1vZGUiLCJfdGhpczYiLCJlbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UiLCJqcGdTaXplIiwiZ2V0RW5jb2RlZEpwZ1NpemUiLCJqcGdQb2ludGVyIiwiZ2V0RW5jb2RlZEpwZ0J1ZmZlciIsInJlc3VsdFZpZXciLCJVaW50OEFycmF5IiwiSEVBUDgiLCJidWZmZXIiLCJCbG9iIiwiZGVzdHJveUVuY29kZWRKcGciLCJfX2Rlc3Ryb3lCdWZmZXIiLCJfX2Rlc3Ryb3lSZXN1bHRCdWZmZXIiLCJfX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlciIsIl9fZGVzdHJveVByZXZJbWFnZSIsIl9fUHJldkltYWdlIiwiX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCIsIl9fZGVzdHJveVNjYW5uZXJBZGRyZXNzIiwiX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrIiwiX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUiLCJfdGhpczciLCJfX2dldFJvdGF0aW9uRGVncmVlIiwiX19nZXRNaXJyb3JNb2RlIiwiX19jcm9wSW1hZ2VGcm9tVmlkZW8iLCJfdGhpczgiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwiY2FudmFzIiwicm90YXRpb25DYW52YXMiLCJjYWxjQ2FudmFzIiwiY2FsY1ZpZGVvV2lkdGgiLCJjYWxjVmlkZW9IZWlnaHQiLCJjYWxjVmlkZW9DbGllbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCIsIl9fY3JvcEltYWdlU2l6ZVdpZHRoIiwiY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQiLCJfX2Nyb3BJbWFnZVNpemVIZWlnaHQiLCJjYWxjVmlkZW9PcmllbnRhdGlvbiIsIl9faXNSb3RhdGVkOTBvcjI3MCIsImNhbGNNYXhTV2lkdGgiLCJjYWxjTWF4U0hlaWdodCIsInN4Iiwic3kiLCJyYXRpbyIsInNXaWR0aCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsInNIZWlnaHQiLCJjYWxjQ29udGV4dCIsImdldENvbnRleHQiLCJ3aWxsUmVhZEZyZXF1ZW50bHkiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9fcm90YXRlIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsImhlaWdodCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9faXNDYXJkYm94RGV0ZWN0ZWQiLCJfYXJndW1lbnRzMiIsIl90aGlzOSIsImJveFR5cGUiLCJyZXRyeUltZyIsInNldCIsImRhdGEiLCJrb3IiLCJhbGllbiIsInBhc3Nwb3J0IiwiZGV0ZWN0X2lkY2FyZF9vcHQiLCJkZXRlY3RfaWRjYXJkIiwibWVzc2FnZSIsInRvU3RyaW5nIiwiX19zdGFydFJlY29nbml0aW9uIiwic3NhTW9kZSIsImlzU2V0SWdub3JlQ29tcGxldGUiLCJfdGhpczEwIiwib2NyUmVzdWx0IiwicmVzdWx0QnVmZmVyIiwicmVjb2duaXRpb24iLCJfcmVmNCIsIl9vY3JSZXN1bHQiLCJfb2NyUmVzdWx0MiIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0IiwiX19jc3ZUb09iamVjdCIsImNvbXBsZXRlIiwiX19tYW51YWxPQ1JSZXRyeUNvdW50IiwiX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50IiwicXVldWVJZHgiLCJfX2RldGVjdGVkQ2FyZFF1ZXVlIiwiX19ibHVyQ2FwdHVyZUJ1dHRvbiIsIl9fc2V0U3R5bGUiLCJkaXNwbGF5IiwiX3giLCJvcmlnaW5JbWFnZSIsIm1hc2tJbWFnZSIsIl9fc3RhcnRUcnV0aCIsInJlamVjdCIsInNjYW5UcnV0aCIsInN0ciIsInBhaXJzIiwic3BsaXQiLCJvYmoiLCJpIiwicGFpciIsIl9fZ2V0TWFza0luZm8iLCJtYXNrSW5mb1Jlc3VsdEJ1ZiIsImdldE1hc2tSZWN0IiwiX19zdGFydFRydXRoUmV0cnkiLCJfdGhpczExIiwiX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX3RoaXMxMiIsIl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiIsIl90aGlzMTMiLCJpc1Bhc3Nwb3J0IiwiX19zZXR1cFZpZGVvIiwiX19zdHJlYW0iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwbGF5IiwiX19hZGp1c3RTdHlsZSIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwibmFtZSIsImVycm9yTWVzc2FnZSIsIl9fb25GYWlsdXJlUHJvY2VzcyIsInN0b3BTdHJlYW0iLCJlbCIsImFzc2lnbiIsIl9fY2hhbmdlT0NSU3RhdHVzIiwiX19vY3JTdGF0dXMiLCJfYXJndW1lbnRzMyIsIl90aGlzMTQiLCJmb3JjZVVwZGF0ZSIsInJlY29nbml6ZWRJbWFnZSIsIl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCIsIl9faW5Qcm9ncmVzc1N0ZXAiLCJndWlkZUJveCIsIm1hc2tCb3hXcmFwIiwiY2FwdHVyZUJ1dHRvbiIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsIl9tYXNrQm94V3JhcCRxdWVyeVNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJfY2FwdHVyZUJ1dHRvbiRxdWVyeVMiLCJjYWxsIiwiX191cGRhdGVQcmV2aWV3VUkiLCJfX2hpZGVQcmV2aWV3VUkiLCJwcmV2aWV3VUlXcmFwIiwicHJldmlld0ltYWdlIiwiaW1nU3R5bGUiLCJjb250ZXh0IiwiX19nZXRJbnB1dERldmljZXMiLCJraW5kIiwibGFiZWwiLCJfdGhpczE1IiwibWVkaWFEZXZpY2VzIiwiZGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ2aWRlb0RldmljZXMiLCJmaWx0ZXIiLCJkZXZpY2UiLCJnZXRDYXBhYmlsaXRpZXMiLCJfY2FwJGZhY2luZ01vZGUiLCJjYXAiLCJmYWNpbmdNb2RlIiwiX19mYWNpbmdNb2RlQ29uc3RyYWludCIsImNoZWNrVUlPcmllbnRhdGlvbiIsImN1cnJlbnQiLCJvY3IiLCJpc0NoYW5nZWQiLCJfX3ByZXZVaU9yaWVudGF0aW9uIiwiX19jbGVhckN1c3RvbVVJIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiX19zZXR1cERvbUVsZW1lbnRzIiwiX3RoaXMxNiIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiY3VzdG9tVUlXcmFwIiwiY2FwdHVyZVVJV3JhcCIsImNhcHR1cmVVSSIsInByZXZpZXdVSSIsInJlbW92ZSIsIm9jclN0eWxlIiwid3JhcFN0eWxlIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsIm1hc2tfZnJhbWUiLCJ2aWRlb1N0eWxlIiwicm90YXRlQ3NzIiwibWlycm9yQ3NzIiwicm90YXRlQW5kTWlycm9yQ3NzIiwiX29iamVjdFNwcmVhZCIsInRyYW5zZm9ybSIsImNhbnZhc1N0eWxlIiwibGVmdCIsInRvcCIsImJvcmRlciIsInJpZ2h0IiwiYm90dG9tIiwiY3VzdG9tVUlXcmFwU3R5bGUiLCJjYXB0dXJlVUlXcmFwU3R5bGUiLCJjYXB0dXJlQnV0dG9uU3JjU1ZHIiwidGhhdCIsIl9fb25DbGlja0NhcHR1cmVCdXR0b24iLCJwcmV2aWV3VUlXcmFwU3R5bGUiLCJfX29jciIsIl9fY2FudmFzIiwiX19yb3RhdGlvbkNhbnZhcyIsIl9fdmlkZW8iLCJfX3ZpZGVvV3JhcCIsIl9fZ3VpZGVCb3giLCJfX2d1aWRlQm94V3JhcCIsIl9fbWFza0JveFdyYXAiLCJfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiX19jdXN0b21VSVdyYXAiLCJfX2NhcHR1cmVVSVdyYXAiLCJfX2NhcHR1cmVVSSIsIl9fY2FwdHVyZUJ1dHRvbiIsIl9fcHJldmlld1VJV3JhcCIsIl9fcHJldmlld1VJIiwiX19wcmV2aWV3SW1hZ2UiLCJfX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJfdGhpczE3IiwiZGV2aWNlSWRMaXN0IiwibWFwIiwiZGV2aWNlSWQiLCJjb25zdHJhaW50V2lkdGgiLCJjb25zdHJhaW50SGVpZ2h0IiwiaWRlYWwiLCJjb25zdHJhaW50cyIsImF1ZGlvIiwiem9vbSIsImZvY3VzTW9kZSIsIndoaXRlQmFsYW5jZU1vZGUiLCJnZXRVc2VyTWVkaWEiLCJzdHJlYW0iLCJfYXJndW1lbnRzNCIsIl90aGlzMTgiLCJpc0ZpcnN0Q2FsbGVkIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsIm5ld1ZpZGVvV2lkdGgiLCJuZXdWaWRlb0hlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwiX19ndWlkZUJveFJhdGlvQnlXaWR0aCIsInZpZGVvUmF0aW9CeUhlaWdodCIsIl9fdmlkZW9SYXRpb0J5SGVpZ2h0IiwicmVkdWNlZEd1aWRlQm94V2lkdGgiLCJfX2d1aWRlQm94UmVkdWNlUmF0aW8iLCJyZWR1Y2VkR3VpZGVCb3hIZWlnaHQiLCJwYWRkaW5nIiwidmlkZW9Jbm5lckdhcCIsImJhY2tncm91bmRDb2xvciIsIm1hc2tCb3hJbm5lciIsInIiLCJpc05hTiIsIm1hc2tCb3hJbm5lcldpZHRoIiwibWF4IiwibWFza0JveElubmVySGVpZ2h0IiwiY2FsY1N1bU9mSGVpZ2h0Qm90dG9tVUlDaGlsZE5vZGVzIiwiX19jYWxjU3VtT2ZIZWlnaHRDaGlsZE5vZGVzIiwiY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQiLCJjYXB0dXJlVUlQYWRkaW5nQm90dG9tIiwicGFyc2VJbnQiLCJwYWRkaW5nVG9wIiwiYmFzZWxpbmUiLCJzdW0iLCJpdGVtIiwiY2hpbGROb2RlcyIsInN0b3BTY2FuIiwiX3RoaXMxOSIsIl9fcmVzb3VyY2VzTG9hZGVkIiwic2RrU3VwcG9ydEVudiIsImlzU3VwcG9ydFNpbWQiLCJlbnZJbmZvIiwib3MiLCJvc1NpbXBsZSIsInVzZWJPQ1JFbnZJbmZvIiwidXJsIiwiZmV0Y2giLCJocmVmIiwidGhlbiIsInJlcyIsInRleHQiLCJyZWdleCIsInNvdXJjZSIsInJlcGxhY2UiLCJldmFsIiwib25SdW50aW1lSW5pdGlhbGl6ZWQiLCJfcmVmNyIsIl94MiIsIl9fc3RhcnRTY2FuSW1wbCIsIl90aGlzMjAiLCJfX2RldGVjdGVkIiwiX19hZGRyZXNzIiwiX19zc2FSZXRyeUNvdW50Iiwic2NhbiIsIl9yZWY4IiwiaXNEZXRlY3RlZENhcmQiLCJzc2FSZXN1bHQiLCJzc2FSZXN1bHRMaXN0IiwibWFza0luZm8iLCJyZXNvbHV0aW9uX3ciLCJyZXNvbHV0aW9uX2giLCJfX2VucXVldWVEZXRlY3RlZENhcmRRdWV1ZSIsInB1c2giLCJyZXRyeVN0YXJ0RGF0ZSIsIkRhdGUiLCJyZXRyeVdvcmtpbmdUaW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsImxlZ2FjeUZvcm1hdCIsIm5ld0Zvcm1hdCIsInBhcnNlT2NyUmVzdWx0IiwicmV2aWV3X3Jlc3VsdCIsIm9jcl90eXBlIiwib2NyX3Jlc3VsdCIsIm9jcl9vcmlnaW5faW1hZ2UiLCJvY3JfbWFza2luZ19pbWFnZSIsInNzYV9tb2RlIiwib2NyX2RhdGEiLCJfX29uU3VjY2Vzc1Byb2Nlc3MiLCJfX3JlY292ZXJlZCIsImltZ0RhdGFVUkwiLCJsaW1pdFNhdmVJbWFnZUNvdW50Iiwic2hpZnQiLCJfX2RlYnVnTW9kZSIsIl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQiLCJfdGhpczIxIiwiYXBpX3Jlc3BvbnNlIiwicmVzdWx0X2NvZGUiLCJyZXN1bHRfbWVzc2FnZSIsInJlc3VsdENvZGUiLCJfdGhpczIyIiwiZXJyb3JEZXRhaWwiLCJzdGFjayIsImVycm9yX2RldGFpbCIsIl90aGlzMjMiLCJfX3JlY292ZXJ5U2NhbiIsIl90aGlzMjQiLCJjYW52YXNDb250ZXh0IiwiY2xlYXJSZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VzIjpbIm9jci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogZ2xvYmFsLW1vZHVsZSAqL1xuaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgcGFyc2VyIGZyb20gJy4vaGVscGVycy9wYXJzZXIuanMnO1xuaW1wb3J0IHsgc2ltZCwgdGhyZWFkcyB9IGZyb20gJy4vaGVscGVycy93YXNtLWZlYXR1cmUtZGV0ZWN0LmpzJztcbmxldCBpbnN0YW5jZTtcbmNsYXNzIFVzZUJPQ1Ige1xuICBJTl9QUk9HUkVTUyA9IHtcbiAgICBOT05FOiAnbm9uZScsXG4gICAgTk9UX1JFQURZOiAnbm90X3JlYWR5JyxcbiAgICBSRUFEWTogJ3JlYWR5JyxcbiAgICBDQVJEX0RFVEVDVF9TVUNDRVNTOiAnZGV0ZWN0X3N1Y2Nlc3MnLFxuICAgIENBUkRfREVURUNUX0ZBSUxFRDogJ2RldGVjdF9mYWlsZWQnLFxuICAgIE1BTlVBTF9DQVBUVVJFX1NVQ0NFU1M6ICdtYW51YWxfY2FwdHVyZV9zdWNjZXNzJyxcbiAgICBNQU5VQUxfQ0FQVFVSRV9GQUlMRUQ6ICdtYW51YWxfY2FwdHVyZV9mYWlsZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEOiAncmVjb2duaXplZCcsXG4gICAgT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6ICdyZWNvZ25pemVkX3dpdGhfc3NhJyxcbiAgICBPQ1JfU1VDQ0VTUzogJ29jcl9zdWNjZXNzJyxcbiAgICBPQ1JfU1VDQ0VTU19XSVRIX1NTQTogJ29jcl9zdWNjZXNzX3dpdGhfc3NhJyxcbiAgICBPQ1JfRkFJTEVEOiAnb2NyX2ZhaWxlZCdcbiAgfTtcbiAgT0NSX1NUQVRVUyA9IHtcbiAgICBOT1RfUkVBRFk6IC0xLFxuICAgIFJFQURZOiAwLFxuICAgIE9DUl9TVUNDRVNTOiAxLFxuICAgIERPTkU6IDJcbiAgfTtcbiAgUFJFTE9BRElOR19TVEFUVVMgPSB7XG4gICAgTk9UX1NUQVJURUQ6IC0xLFxuICAgIFNUQVJURUQ6IDAsXG4gICAgRE9ORTogMVxuICB9O1xuXG4gIC8qKiBwdWJsaWMgcHJvcGVydGllcyAqL1xuXG4gIC8qKiBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgX19kZWJ1Z01vZGUgPSBmYWxzZTtcbiAgX19PQ1JFbmdpbmUgPSBudWxsO1xuICBfX2luaXRpYWxpemVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQ7XG4gIF9fbGljZW5zZTtcbiAgX19vY3JUeXBlID0gbnVsbDtcbiAgX19zc2FNb2RlID0gZmFsc2U7XG4gIF9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50ID0gMTA7XG4gIF9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gIF9fc3NhUmV0cnlDb3VudCA9IDA7XG4gIF9fZGV0ZWN0ZWRDYXJkUXVldWUgPSBbXTtcbiAgX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NCA9IFtdO1xuICBfX29uU3VjY2VzcyA9IG51bGw7XG4gIF9fb25GYWlsdXJlID0gbnVsbDtcbiAgX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsO1xuICBfX29jclR5cGVMaXN0ID0gWydpZGNhcmQnLCAnZHJpdmVyJywgJ3Bhc3Nwb3J0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnYWxpZW4nLCAnY3JlZGl0JywgJ2lkY2FyZC1zc2EnLCAnZHJpdmVyLXNzYScsICdwYXNzcG9ydC1zc2EnLCAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLCAnYWxpZW4tc3NhJywgJ2NyZWRpdC1zc2EnXTtcbiAgX19vY3JUeXBlU3RyaW5nID0gbmV3IE1hcChbWycxJywgJ2lkY2FyZCddLCBbJzInLCAnZHJpdmVyJ10sIFsnMycsICdwYXNzcG9ydCddLCBbJzQnLCAnZm9yZWlnbi1wYXNzcG9ydCddLCBbJzUnLCAnYWxpZW4nXSwgWyc1LTEnLCAnYWxpZW4nXSwgWyc1LTInLCAnYWxpZW4nXSwgWyc1LTMnLCAnYWxpZW4nXV0pO1xuICBfX3BhZ2VFbmQgPSBmYWxzZTtcbiAgX19vY3I7XG4gIF9fY2FudmFzO1xuICBfX3JvdGF0aW9uQ2FudmFzO1xuICBfX3ZpZGVvO1xuICBfX3ZpZGVvV3JhcDtcbiAgX19ndWlkZUJveDtcbiAgX19ndWlkZUJveFdyYXA7XG4gIF9fbWFza0JveFdyYXA7XG4gIF9fcHJldmVudFRvRnJlZXplVmlkZW87XG4gIF9fY3VzdG9tVUlXcmFwO1xuICBfX3RvcFVJO1xuICBfX21pZGRsZVVJO1xuICBfX2JvdHRvbVVJO1xuICBfX3ByZXZpZXdVSVdyYXA7XG4gIF9fcHJldmlld1VJO1xuICBfX3ByZXZpZXdJbWFnZTtcbiAgX19jYXB0dXJlVUlXcmFwO1xuICBfX2NhcHR1cmVVSTtcbiAgX19jYXB0dXJlQnV0dG9uO1xuICBfX2FkZHJlc3MgPSAwO1xuICBfX2RldGVjdGVkID0gZmFsc2U7XG4gIF9fcmVjb3ZlcmVkID0gZmFsc2U7XG4gIF9fQnVmZmVyID0gbnVsbDtcbiAgX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICBfX21hc2tJbmZvUmVzdWx0QnVmID0gbnVsbDtcbiAgX19QcmV2SW1hZ2UgPSBudWxsO1xuICBfX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICBfX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gIF9fcmVzb2x1dGlvbldpZHRoID0gMDtcbiAgX19yZXNvbHV0aW9uSGVpZ2h0ID0gMDtcbiAgX192aWRlb1dpZHRoID0gMDtcbiAgX192aWRlb0hlaWdodCA9IDA7XG4gIF9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gIF9faW50ZXJ2YWxUaW1lcjtcbiAgX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyO1xuICBfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuICBfX3N0cmVhbTtcbiAgX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgX19mYWNpbmdNb2RlQ29uc3RyYWludCA9ICdlbnZpcm9ubWVudCc7XG4gIF9fdWlPcmllbnRhdGlvbiA9ICcnO1xuICBfX3ByZXZVaU9yaWVudGF0aW9uID0gJyc7XG4gIF9fdmlkZW9PcmllbnRhdGlvbiA9ICcnO1xuICBfX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5ID0gNTAwO1xuICBfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzID0gMzAwOyAvLyDsnoTsi5xcbiAgX19yZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7IC8vIOyehOyLnFxuICBfX2RldmljZUluZm87XG4gIF9faXNSb3RhdGVkOTBvcjI3MCA9IGZhbHNlO1xuICBfX2luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk7XG4gIF9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHRoaXMuSU5fUFJPR1JFU1MuTk9ORTtcbiAgX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgX19ndWlkZUJveFJhdGlvQnlXaWR0aCA9IDEuMDsgLy8g7IiY7KCV67aI6rCAXG4gIF9fdmlkZW9SYXRpb0J5SGVpZ2h0ID0gMC45OyAvLyDsiJjsoJXrtojqsIBcbiAgX19ndWlkZUJveFJlZHVjZVJhdGlvID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgX19jcm9wSW1hZ2VTaXplV2lkdGggPSAwO1xuICBfX2Nyb3BJbWFnZVNpemVIZWlnaHQgPSAwO1xuXG4gIC8qKiBEZWZhdWx0IG9wdGlvbnMgKi9cbiAgX19vcHRpb25zID0gbmV3IE9iamVjdCh7XG4gICAgc2hvd0NsaXBGcmFtZTogZmFsc2UsXG4gICAgc2hvd0NhbnZhc1ByZXZpZXc6IGZhbHNlLFxuICAgIHVzZVRvcFVJOiB0cnVlLFxuICAgIHVzZVRvcFVJVGV4dE1zZzogZmFsc2UsXG4gICAgdXNlTWlkZGxlVUk6IHRydWUsXG4gICAgdXNlTWlkZGxlVUlUZXh0TXNnOiB0cnVlLFxuICAgIHVzZUJvdHRvbVVJOiB0cnVlLFxuICAgIHVzZUJvdHRvbVVJVGV4dE1zZzogZmFsc2UsXG4gICAgdXNlUHJldmlld1VJOiB0cnVlLFxuICAgIHVzZUNhcHR1cmVVSTogdHJ1ZSxcbiAgICB1c2VNYXNrSW5mbzogdHJ1ZSxcbiAgICBmcmFtZUJvcmRlclN0eWxlOiB7XG4gICAgICB3aWR0aDogNSxcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIG5vdF9yZWFkeTogJyMwMDAwMDAnLFxuICAgICAgLy8g6rKA7KCVXG4gICAgICByZWFkeTogJyNiOGI4YjgnLFxuICAgICAgLy8g7ZqM7IOJXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICAvLyDrs7TrnbxcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzVlOGZmZicsXG4gICAgICAvLyDtlZjriphcbiAgICAgIG1hbnVhbF9jYXB0dXJlX2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g67O06528XG4gICAgICBtYW51YWxfY2FwdHVyZV9zdWNjZXNzOiAnIzVlOGZmZicsXG4gICAgICAvLyDtlZjriphcbiAgICAgIHJlY29nbml6ZWQ6ICcjMDAzYWMyJyxcbiAgICAgIC8vIO2MjOuekVxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMwMDNhYzInLFxuICAgICAgLy8g7YyM656RXG4gICAgICBvY3JfZmFpbGVkOiAnI0ZBMTEzRCcsXG4gICAgICAvLyDruajqsJVcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzE0YjAwZScsXG4gICAgICAvLyDstIjroZ1cbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzE0YjAwZScgLy8g7LSI66GdXG4gICAgfSxcblxuICAgIHVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlOiB0cnVlLFxuICAgIG1hc2tGcmFtZVN0eWxlOiB7XG4gICAgICBjbGlwX2ZyYW1lOiAnI2ZmMDBiZicsXG4gICAgICAvLyDrlKXtjbztlIwgKOyImOygleu2iOqwgClcbiAgICAgIGJhc2VfY29sb3I6ICcjMzMzMzMzJyxcbiAgICAgIC8vIOuLpO2BrOq3uOugiOydtCAo7Yis66qF64+E64qUIOyImOygleu2iOqwgCBmZuuhnCDqs6DsoJUpXG4gICAgICBub3RfcmVhZHk6ICcjMzMzMzMzJyxcbiAgICAgIHJlYWR5OiAnIzMzMzMzMycsXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzMzMzMzMycsXG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyMyMjIyMjInLFxuICAgICAgbWFudWFsX2NhcHR1cmVfZmFpbGVkOiAnIzMzMzMzMycsXG4gICAgICBtYW51YWxfY2FwdHVyZV9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICByZWNvZ25pemVkOiAnIzIyMjIyMicsXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzIyMjIyMicsXG4gICAgICBvY3JfZmFpbGVkOiAnIzExMTExMScsXG4gICAgICBvY3Jfc3VjY2VzczogJyMxMTExMTEnLFxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTExMTExJ1xuICAgIH0sXG4gICAgdXNlQ2FwdHVyZUJ1dHRvbkNvbG9yQ2hhbmdlOiB0cnVlLFxuICAgIGNhcHR1cmVCdXR0b25TdHlsZToge1xuICAgICAgc3Ryb2tlX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBub3RfcmVhZHk6ICcjMDAwMDAwJyxcbiAgICAgIHJlYWR5OiAnI2I4YjhiOCcsXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgbWFudWFsX2NhcHR1cmVfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICBtYW51YWxfY2FwdHVyZV9zdWNjZXNzOiAnIzVlOGZmZicsXG4gICAgICByZWNvZ25pemVkOiAnIzAwM2FjMicsXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzAwM2FjMicsXG4gICAgICBvY3JfZmFpbGVkOiAnI0ZBMTEzRCcsXG4gICAgICBvY3Jfc3VjY2VzczogJyMxNGIwMGUnLFxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTRiMDBlJ1xuICAgIH0sXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgIGRldmljZUxhYmVsOiAnJyxcbiAgICB2aWRlb1RhcmdldElkOiAnJyxcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgICBzc2FNYXhSZXRyeUNvdW50OiAwLFxuICAgIHVzZUxlZ2FjeUZvcm1hdDogdHJ1ZVxuICB9KTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBhc3luYyBwcmVsb2FkaW5nKCkge1xuICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLlNUQVJURUQ7XG4gICAgICBhd2FpdCB0aGlzLl9fbG9hZFJlc291cmNlcygpO1xuICAgICAgdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkU7XG4gICAgICB0aGlzLl9fcHJlbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2luaXRpYWxpemVkO1xuICB9XG4gIGlzUHJlbG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9fcHJlbG9hZGVkO1xuICB9XG4gIGdldFByZWxvYWRpbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzO1xuICB9XG4gIGdldE9DUkVuZ2luZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZTtcbiAgfVxuICBpbml0KHNldHRpbmdzKSB7XG4gICAgaWYgKCEhIXNldHRpbmdzLmxpY2Vuc2VLZXkpIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBrZXkgaXMgZW1wdHknKTtcbiAgICB0aGlzLl9fbGljZW5zZSA9IHNldHRpbmdzLmxpY2Vuc2VLZXk7XG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuX19vcHRpb25zLCBzZXR0aW5ncyk7XG4gICAgdGhpcy5zZXRPcHRpb24obWVyZ2VkT3B0aW9ucyk7XG4gICAgdm9pZCAwO1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRoaXMuX193aW5kb3dFdmVudEJpbmQoKTtcbiAgICAgIHRoaXMuX19kZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBzZXRPcHRpb24oc2V0dGluZ3MpIHtcbiAgICB0aGlzLl9fb3B0aW9ucyA9IHNldHRpbmdzO1xuICB9XG4gIGdldE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX29wdGlvbnM7XG4gIH1cbiAgZ2V0T2NyVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vY3JUeXBlU3RyaW5nLmdldCh0eXBlKTtcbiAgfVxuICBnZXRVSU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdWlPcmllbnRhdGlvbjtcbiAgfVxuICBnZXRWaWRlb09yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX29jclR5cGUgPSB0eXBlO1xuICAgIHRoaXMuX19zc2FNb2RlID0gdGhpcy5fX29jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTE7XG4gICAgdGhpcy5fX29uU3VjY2VzcyA9IG9uU3VjY2VzcztcbiAgICB0aGlzLl9fb25GYWlsdXJlID0gb25GYWlsdXJlO1xuICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBvbkluUHJvZ3Jlc3NDaGFuZ2U7XG4gICAgaWYgKG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVRvcFVJKSB7XG4gICAgICAgIHRoaXMuX190b3BVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudG9wVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkpIHtcbiAgICAgICAgdGhpcy5fX21pZGRsZVVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5taWRkbGVVSTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSkge1xuICAgICAgICB0aGlzLl9fYm90dG9tVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmJvdHRvbVVJO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGluaXRpYWxpemVkIScpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpO1xuICAgICAgaWYgKCF0aGlzLmlzUHJlbG9hZGVkKCkgJiYgcHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRCkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIGF3YWl0IHRoaXMucHJlbG9hZGluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRCkge1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fd2FpdFByZWxvYWRlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORSkge1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFibm9ybWFsbHkgcHJlbG9hZGluZyBzdGF0dXMsIHByZWxvYWRlZDogJHt0aGlzLmlzUHJlbG9hZGVkKCl9IC8gcHJlbG9hZGluZ1N0YXR1czogJHt0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2NhbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zdG9wT0NSKCk7XG4gICAgfVxuICB9XG4gIHN0b3BPQ1IoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgdGhpcy5fX29uRmFpbHVyZSA9IG51bGw7XG4gIH1cbiAgc2V0SWdub3JlQ29tcGxldGUodmFsKSB7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5zZXRJZ25vcmVDb21wbGV0ZSh2YWwpO1xuICB9XG4gIGFzeW5jIHJlc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgIC8vIGF3YWl0IHRoaXMuc3RvcE9DUigpO1xuICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIGF3YWl0IHRoaXMuc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gIH1cblxuICAvKiogcHJpdmF0ZSBtZXRob2RzICovXG4gIGFzeW5jIF9fd2FpdFByZWxvYWRlZCgpIHtcbiAgICBsZXQgd2FpdGluZ1JldHJ5Q291bnQgPSAwO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ByZWxvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhaXRpbmdSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH07XG4gICAgICBjaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIF9fd2luZG93RXZlbnRCaW5kKCkge1xuICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKC9pcGhvbmV8aXBvZHxpcGFkLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBjb25zdCBza2lwVG91Y2hBY3Rpb25mb3Jab29tID0gZXYgPT4ge1xuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXNfLl9fcGFnZUVuZCA9IHRydWU7XG4gICAgICBfdGhpc18uY2xlYW51cCgpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy5fX29jclR5cGUpIHJldHVybjtcbiAgICAgIGlmICghX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplKSB7XG4gICAgICAgIF90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IHRydWU7XG4gICAgICAgIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IF90aGlzXy5yZXN0YXJ0T0NSKF90aGlzXy5fX29jclR5cGUsIF90aGlzXy5fX29uU3VjY2VzcywgX3RoaXNfLl9fb25GYWlsdXJlLCBfdGhpc18uX19vbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIpIHtcbiAgICAgICAgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dChoYW5kbGVSZXNpemUsIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVEZWxheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19zbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxuICBfX2Jsb2JUb0Jhc2U2NChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDrnbzsnbTshLzsiqQg7YKk66W8IGhlYXAg7JeQIGFsbG9jYXRpb24gKi9cbiAgX19nZXRTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICghISF0aGlzLl9fbGljZW5zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIEtleSBpcyBlbXB0eScpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGhCeXRlcyA9IHRoaXMuX19PQ1JFbmdpbmUubGVuZ3RoQnl0ZXNVVEY4KHRoaXMuX19saWNlbnNlKSArIDE7XG4gICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MobGVuZ3RoQnl0ZXMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KHRoaXMuX19saWNlbnNlLCB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCwgbGVuZ3RoQnl0ZXMpO1xuICAgIHJldHVybiB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcDtcbiAgfVxuICBhc3luYyBfX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgbGV0IHJlc29sdXRpb25UZXh0ID0gJ25vdCByZWFkeSc7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX192aWRlb1dpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgdGhpcy5fX3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH07XG4gIH1cbiAgX19nZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGFkZHJlc3MgPSAwO1xuICAgICAgbGV0IGRlc3Ryb3lDYWxsYmFjayA9IG51bGw7XG4gICAgICBjb25zdCBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX2dldFN0cmluZ09uV2FzbUhlYXAoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95SURDYXJkU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRBbGllblNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95QWxpZW5TY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUNyZWRpdFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgTGljZW5zZSBLZXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICB2b2lkIDA7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2dldEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2ModGhpcy5fX3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ICogNCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fX3Jlc3VsdEJ1ZmZlcikge1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyg0MDk2KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tJbmZvKSB7XG4gICAgICBpZiAoIXRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1Zikge1xuICAgICAgICB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MoNDA5Nik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy5fX0J1ZmZlciwgdGhpcy5fX3Jlc3VsdEJ1ZmZlciwgdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmXTtcbiAgfVxuICBhc3luYyBfX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIG1hc2tNb2RlLCBjcm9wTW9kZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZShhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpO1xuICAgICAgY29uc3QganBnU2l6ZSA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ1NpemUoKTtcbiAgICAgIGNvbnN0IGpwZ1BvaW50ZXIgPSB0aGlzLl9fT0NSRW5naW5lLmdldEVuY29kZWRKcGdCdWZmZXIoKTtcbiAgICAgIGNvbnN0IHJlc3VsdFZpZXcgPSBuZXcgVWludDhBcnJheSh0aGlzLl9fT0NSRW5naW5lLkhFQVA4LmJ1ZmZlciwganBnUG9pbnRlciwganBnU2l6ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShyZXN1bHRWaWV3KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzdWx0XSwge1xuICAgICAgICB0eXBlOiAnaW1hZ2UvanBlZydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19ibG9iVG9CYXNlNjQoYmxvYik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95RW5jb2RlZEpwZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGcmVlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX0J1ZmZlcik7XG4gICAgICB0aGlzLl9fQnVmZmVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fX2Rlc3Ryb3lSZXN1bHRCdWZmZXIoKTtcbiAgICB0aGlzLl9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyKCk7XG4gIH1cbiAgX19kZXN0cm95UmVzdWx0QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fcmVzdWx0QnVmZmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19yZXN1bHRCdWZmZXIpO1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gICAgfVxuICB9XG4gIF9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmKTtcbiAgICAgIHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1ZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIEZyZWUgUHJldkltYWdlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lQcmV2SW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuX19QcmV2SW1hZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX1ByZXZJbWFnZSk7XG4gICAgICB0aGlzLl9fUHJldkltYWdlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogZnJlZSBzdHJpbmcgaGVhcCBidWZmZXIgKi9cbiAgX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApO1xuICAgICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBmcmVlIHNjYW5uZXIgYWRkcmVzcyAqL1xuICBfX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpIHtcbiAgICBpZiAodGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvRWxlbWVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgfSA9IGF3YWl0IHRoaXMuX19zZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KTtcbiAgICBpZiAoIWlzU3VwcG9ydGVkUmVzb2x1dGlvbikge1xuICAgICAgaWYgKHJlc29sdXRpb25UZXh0ICE9PSAnbm90IHJlYWR5Jykge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1N1cHBvcnRlZFJlc29sdXRpb247XG4gIH1cbiAgX19nZXRSb3RhdGlvbkRlZ3JlZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX19vcHRpb25zLnJvdGF0aW9uRGVncmVlICUgMzYwICsgMzYwKSAlIDM2MDtcbiAgfVxuICBfX2dldE1pcnJvck1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vcHRpb25zLm1pcnJvck1vZGU7XG4gIH1cbiAgYXN5bmMgX19jcm9wSW1hZ2VGcm9tVmlkZW8oKSB7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHJldHVybiBbbnVsbCwgbnVsbF07XG4gICAgbGV0IFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuXG4gICAgLy8gc291cmNlIGltYWdlIChvciB2aWRlbylcbiAgICAvLyDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiiBzeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUg+KUiOKUiOKUiOKUiCDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDIHN4ICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIHNIZWlnaHQgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgZGVzdGluYXRpb24gY2FudmFzXG4gICAgLy8g4pSDICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAgICAgICAg4pSD4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgICAgICAgIOKUgyAgICDilIogICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgICAgICAgIHNXaWR0aCAgICAgICAgICAgICAgICAgICAgICDilIMgICAg4pSKIGR5ICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbICAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIPilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgIGR4ICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIGRIZWlnaHQg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgZFdpZHRoICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUm1xuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC9kcmF3SW1hZ2VcblxuICAgIGxldCBjYWxjQ2FudmFzID0gY2FudmFzO1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNDcm9wSW1hZ2VTaXplV2lkdGggPSB0aGlzLl9fY3JvcEltYWdlU2l6ZVdpZHRoO1xuICAgIGxldCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCA9IHRoaXMuX19jcm9wSW1hZ2VTaXplSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW2NhbGNDcm9wSW1hZ2VTaXplV2lkdGgsIGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0XSA9IFtjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCwgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aF07XG4gICAgICBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbY2FsY1Jlc29sdXRpb25faCwgY2FsY1Jlc29sdXRpb25fd107XG4gICAgICBjYWxjQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgY2FsY01heFNXaWR0aCA9IDk5OTk5O1xuICAgIGxldCBjYWxjTWF4U0hlaWdodCA9IDk5OTk5O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzeCwgc3k7XG4gICAgY29uc3QgcmF0aW8gPSBjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgKiByYXRpbyksIGNhbGNNYXhTSGVpZ2h0KTtcbiAgICBzeCA9IE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudFdpZHRoIC0gY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCkgLyAyICogcmF0aW8pO1xuICAgIHN5ID0gTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC0gY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQpIC8gMiAqIHJhdGlvKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgdGhpcy5fX2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCBkZWdyZWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoZGVncmVlID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoW2ltZ0RhdGEsIGltZ0RhdGFVcmxdKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9IGltZ0RhdGFVcmw7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAvLyBjYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgICAgY29uc3QgdGVtcENvbnRleHQgPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRlbXBDYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChbMCwgMTgwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gOTApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcuaGVpZ2h0LCAwKTtlbHNlIGlmIChkZWdyZWUgPT09IDE4MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy53aWR0aCwgaW1nLmhlaWdodCk7ZWxzZSBpZiAoZGVncmVlID09PSAyNzApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZSgwLCBpbWcud2lkdGgpO1xuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBjb25zdCBuZXdJbWFnZURhdGEgPSBbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSA/IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcuaGVpZ2h0LCBpbWcud2lkdGgpIDogdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgdGVtcENvbnRleHQpO1xuICAgICAgICByZXNvbHZlKFtuZXdJbWFnZURhdGEsIHRlbXBDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyldKTtcbiAgICAgICAgdGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCwgcmV0cnlJbWcgPSBudWxsKSB7XG4gICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPCAwKSB7XG4gICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbWdEYXRhO1xuICAgICAgbGV0IGltZ0RhdGFVcmwgPSBudWxsO1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAocmV0cnlJbWcgIT09IG51bGwpIHtcbiAgICAgICAgaW1nRGF0YSA9IHJldHJ5SW1nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgW2ltZ0RhdGEsIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy5fX2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgfVxuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBsZXQga29yID0gZmFsc2UsXG4gICAgICAgIGFsaWVuID0gZmFsc2UsXG4gICAgICAgIHBhc3Nwb3J0ID0gZmFsc2U7XG4gICAgICBzd2l0Y2ggKHRoaXMuX19vY3JUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBrb3IgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgcGFzc3BvcnQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWxpZW4gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgICAgfVxuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoa29yIHx8IHBhc3Nwb3J0IHx8IGFsaWVuKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuZGV0ZWN0X2lkY2FyZF9vcHQoYnVmZmVyLCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywga29yLCBhbGllbiwgcGFzc3BvcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5kZXRlY3RfaWRjYXJkKGJ1ZmZlciwgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIGFkZHJlc3MsIGJveFR5cGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZygnaXNDYXJkYm94RGV0ZWN0ZWQgcmVzdWx0IC09LS0tLS0nLCByZXN1bHQpXG4gICAgICByZXR1cm4gWyEhcmVzdWx0LCBpbWdEYXRhLCBpbWdEYXRhVXJsXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yIDogJyArIGU7XG4gICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCBzc2FNb2RlLCBpc1NldElnbm9yZUNvbXBsZXRlLCBpbWdEYXRhLCBpbWdEYXRhVXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhZGRyZXNzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICdjaGVja1ZhbGlkYXRpb24gRmFpbCc7XG4gICAgICB9XG4gICAgICBsZXQgb2NyUmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmICghdGhpcy5fX29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgICAgY29uc3QgcmVjb2duaXRpb24gPSBhc3luYyBpc1NldElnbm9yZUNvbXBsZXRlID0+IHtcbiAgICAgICAgaWYgKGlzU2V0SWdub3JlQ29tcGxldGUpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcywgMCwgaW1nRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuSURDYXJkKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5QYXNzcG9ydChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5BbGllbihhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkNyZWRpdChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fY3N2VG9PYmplY3Qob2NyUmVzdWx0KTtcbiAgICAgICAgaWYgKG9jclJlc3VsdD8uY29tcGxldGUgIT09ICd1bmRlZmluZWQnICYmIG9jclJlc3VsdD8uY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc1NldElnbm9yZUNvbXBsZXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPCB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCkge1xuICAgICAgICAgICAgICAvLyBkZXRlY3RlZENhcmRRdWV1ZeyXkOyEnCDtlZzsnqXsnYQg6rq864K07IScIOqwseyLoO2VnOuLpC5cbiAgICAgICAgICAgICAgLy8g7KCA7J6l65CY7Ja07J6I64qUIOydtOuvuOyngOydmCDsiKvsnpDqsIAgcmV0cnkg67O064ukIOyekeydgOqyveyasCDrjIDruYTtlZjsl6wgJeulvCDsgqzsmqntlahcbiAgICAgICAgICAgICAgY29uc3QgcXVldWVJZHggPSB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCAlIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgIGltZ0RhdGEgPSB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVbcXVldWVJZHhdO1xuICAgICAgICAgICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVjb2duaXRpb24oaXNTZXRJZ25vcmVDb21wbGV0ZSk7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxKTsgLy8gZm9yIFVJIHVwZGF0ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8g7IKs7KeEIO2VnOyepeycvOuhnCBPQ1Ig7Iuk7YyoIChwb3B1cCDrgrTrpqzqs6Agc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpIOyymOumrD9cbiAgICAgICAgICAgICAgdGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPSAwO1xuICAgICAgICAgICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7IC8vIO2MneyXheydtCDrgrTroKTqsIjrlYwg7LKY66as65CY7KeA66eMIOuvuOumrCDsspjrpqxcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVELCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnZpZGVvLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJydcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChhd2FpdCByZWNvZ25pdGlvbihpc1NldElnbm9yZUNvbXBsZXRlKSkge1xuICAgICAgICAvLyBsZXQgY3JvcE1vZGUgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgKG9jclR5cGUuaW5kZXhPZignY3JlZGl0JykgPiAtMSkge1xuICAgICAgICAvLyAgIGNyb3BNb2RlID0gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgb3JpZ2luSW1hZ2UgPSBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgbGV0IG1hc2tJbWFnZSA9IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgbWFza0ltYWdlID0gbWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZTtcbiAgICAgICAgaWYgKHNzYU1vZGUpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSwgZmFsc2UsIG1hc2tJbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGwsIG51bGxdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAob2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMSkge1xuICAgICAgICAvLyBUT0RPOiB3b3JrZXLrpbwg7IKs7Jqp7ZWY7JesIOuplOyduChVSSDrnpzrjZTrp4EpIOyKpOugiOuTnOqwgCDrqYjstpTsp4Ag7JWK64+E66GdIOyymOumrCDtlYTsmpQgKO2YhOyerCBsb2FkaW5nIFVJIOudhOyasOuptCDslaDri4jrqZTsnbTshZgg66mI7LakKVxuICAgICAgICAvLyBUT0RPOiBzZXRUaW1lb3V0IOycvOuhnCDrgpjriITrjZTrnbzrj4Qg7Zqo6rO8IOyXhuydjCBzZXRUaW1lb3V0IOyngOyasOqzoCwgd29ya2Vy66GcIOuzgOqyvSDtlYTsmpRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLl9fT0NSRW5naW5lLnNjYW5UcnV0aChhZGRyZXNzLCByZXN1bHRCdWZmZXIpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NTQSBNb2RlIGlzIHRydWUuIGJ1dCwgb2NyVHlwZSBpcyBpbnZhbGlkIDogJyArIG9jclR5cGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX2NzdlRvT2JqZWN0KHN0cikge1xuICAgIGxldCBwYWlycyA9IHN0ci5zcGxpdCgnOycpO1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG4gICAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIG9ialtwYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgX19nZXRNYXNrSW5mbyhhZGRyZXNzKSB7XG4gICAgaWYgKGFkZHJlc3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAnY2hlY2tWYWxpZGF0aW9uIEZhaWwnO1xuICAgIH1cbiAgICBjb25zdCBbLCwgbWFza0luZm9SZXN1bHRCdWZdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIHJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0TWFza1JlY3QoYWRkcmVzcywgbWFza0luZm9SZXN1bHRCdWYpO1xuICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCByZXN1bHQgPT09ICcnKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5fX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpO1xuXG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9fY3N2VG9PYmplY3QocmVzdWx0KTtcbiAgfVxuICBhc3luYyBfX3N0YXJ0VHJ1dGhSZXRyeShvY3JUeXBlLCBhZGRyZXNzLCBpbWdEYXRhKSB7XG4gICAgYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDAsIGltZ0RhdGEpO1xuICAgIC8vIGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHRydWUpOyAgICAgIC8vIGZvciDshLHriqXsnYQg7JyE7ZW0IOynhO2WiSBYXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX19zdGFydFRydXRoKG9jclR5cGUsIGFkZHJlc3MpO1xuICB9XG4gIF9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy5fX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgYXN5bmMgX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy5fX29jclR5cGUuaW5jbHVkZXMoJ3Bhc3Nwb3J0Jyk7XG4gICAgICBhd2FpdCB0aGlzLl9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgIC8vIGNvbnN0IFt0cmFja10gPSB0aGlzLl9fc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW5fX2luaXRpYWxpemUgY2FwYWJpbGl0eScsIGNhcGFiaWxpdHkpO1xuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gdmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSB0aGlzLl9fc3RyZWFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEF2b2lkIHVzaW5nIHRoaXMgaW4gbmV3IGJyb3dzZXJzLCBhcyBpdCBpcyBnb2luZyBhd2F5LlxuICAgICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuX19zdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9IHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlby52aWRlb0hlaWdodCA8IDEgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgdmlkZW8ud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYW1lcmEgQWNjZXNzIFBlcm1pc3Npb24gaXMgbm90IGFsbG93ZWQnO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoJ0U0MDMnLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdOb3RSZWFkYWJsZUVycm9yJykge1xuICAgICAgICAvLyDri6Trpbjqs7Psl5DshJwg7Lm066mU6528IOyekOybkOydhCDsgqzsmqnspJFcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7IC8vIOyerOq3gCDtmLjstpxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfX3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIGlmIChlbCAmJiBzdHlsZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgc3R5bGUpO1xuICAgIH1cbiAgfVxuICBfX2NoYW5nZU9DUlN0YXR1cyh2YWwpIHtcbiAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgLy8gT0NSXG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuUkVBRFk6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUzpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQTpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLkRPTkU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2NoYW5nZVN0YWdlKHZhbCwgZm9yY2VVcGRhdGUgPSBmYWxzZSwgcmVjb2duaXplZEltYWdlID0gbnVsbCkge1xuICAgIGlmICh0aGlzLl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9PT0gdmFsICYmIGZvcmNlVXBkYXRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fY2hhbmdlT0NSU3RhdHVzKHZhbCk7XG4gICAgdGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB2YWw7XG4gICAgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIGNvbnN0IHtcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5zdHlsZSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXVxuICAgIH07XG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHN0eWxlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlKSB7XG4gICAgICBtYXNrQm94V3JhcD8ucXVlcnlTZWxlY3RvcignI21hc2tCb3hPdXRlcicpPy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZVt2YWxdKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSAmJiB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlQnV0dG9uQ29sb3JDaGFuZ2UpIHtcbiAgICAgIGNhcHR1cmVCdXR0b24/LnF1ZXJ5U2VsZWN0b3IoJyNjYXB0dXJlQnV0dG9uJyk/LnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX19vcHRpb25zLmNhcHR1cmVCdXR0b25TdHlsZVt2YWxdKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VUb3BVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX190b3BVSSwgJ3RvcCcsIHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fbWlkZGxlVUksICdtaWRkbGUnLCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSwgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJIHx8IHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX2JvdHRvbVVJLCAnYm90dG9tJywgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUksIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9TVUNDRVNTIHx8IHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuXG4gICAgICAgIC8vIEZBSUzsnbgg6rK97JqwIDXstIjtm4Qg7J6Q64+Z7J2EIOywveuLq+ydjFxuICAgICAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCkge1xuICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5fX2hpZGVQcmV2aWV3VUksIDMwMDAsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9faGlkZVByZXZpZXdVSSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMSk7IC8vIGZvciBVSSB1cGRhdGVcbiAgfVxuXG4gIF9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBwcmV2aWV3SW1hZ2Uuc3JjID0gcmVjb2duaXplZEltYWdlO1xuICAgIGNvbnN0IGltZ1N0eWxlID0ge1xuICAgICAgJ21heC13aWR0aCc6ICc3MCUnLFxuICAgICAgJ21heC1oZWlnaHQnOiAnNjAlJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdJbWFnZSwgaW1nU3R5bGUpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9KTtcbiAgfVxuICBfX2hpZGVQcmV2aWV3VUkoY29udGV4dCkge1xuICAgIGxldCBfdGhpc18gPSB0aGlzO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBfdGhpc18gPSBjb250ZXh0O1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBfdGhpc18uX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICAgIF90aGlzXy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSAnJztcbiAgfVxuICBhc3luYyBfX2dldElucHV0RGV2aWNlcyhraW5kLCBsYWJlbCkge1xuICAgIC8vIHRocm93IGVycm9yIGlmIG5hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZFxuICAgIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIGNvbnN0IHZpZGVvRGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKGRldmljZSA9PiB7XG4gICAgICBpZiAoZGV2aWNlLmtpbmQgPT09IGAke2tpbmR9aW5wdXRgICYmIGRldmljZS5nZXRDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgY29uc3QgY2FwID0gZGV2aWNlLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICBpZiAoY2FwPy5mYWNpbmdNb2RlPy5pbmNsdWRlcyh0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmlkZW9EZXZpY2VzLmxlbmd0aCA8PSAxID8gdmlkZW9EZXZpY2VzIDogdmlkZW9EZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gbGFiZWwgPyBkZXZpY2UubGFiZWwuaW5jbHVkZXMobGFiZWwpIDogdHJ1ZSk7XG4gIH1cbiAgY2hlY2tVSU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkZXRlY3Rvci5nZXRVSU9yaWVudGF0aW9uKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkub2NyKTtcbiAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnQgIT09IHRoaXMuX19wcmV2VWlPcmllbnRhdGlvbikge1xuICAgICAgdGhpcy5fX3VpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgaXNDaGFuZ2VkXG4gICAgfTtcbiAgfVxuICBfX2NsZWFyQ3VzdG9tVUkob2JqKSB7XG4gICAgb2JqLmlubmVySFRNTCA9ICcnO1xuICAgIG9iai5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgb2JqLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUob2JqLCB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfX3NldHVwRG9tRWxlbWVudHMoKSB7XG4gICAgbGV0IHtcbiAgICAgIG9jcixcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICBndWlkZUJveCxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94V3JhcCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgcHJldmVudFRvRnJlZXplVmlkZW8sXG4gICAgICBjdXN0b21VSVdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlXcmFwLFxuICAgICAgY2FwdHVyZVVJLFxuICAgICAgY2FwdHVyZUJ1dHRvbixcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoIW9jcikgdGhyb3cgbmV3IEVycm9yKCdvY3IgZGl2IGVsZW1lbnQgaXMgbm90IGV4aXN0Jyk7XG4gICAgaWYgKHZpZGVvV3JhcCkgdmlkZW9XcmFwLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveFdyYXApIGd1aWRlQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAodmlkZW8pIHZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjYW52YXMpIGNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAocm90YXRpb25DYW52YXMpIHJvdGF0aW9uQ2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveCkgZ3VpZGVCb3gucmVtb3ZlKCk7XG4gICAgaWYgKG1hc2tCb3hXcmFwKSBtYXNrQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAocHJldmVudFRvRnJlZXplVmlkZW8pIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjdXN0b21VSVdyYXApIGN1c3RvbVVJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHRvcFVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkodG9wVUkpO1xuICAgIGlmIChtaWRkbGVVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKG1pZGRsZVVJKTtcbiAgICBpZiAoYm90dG9tVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShib3R0b21VSSk7XG4gICAgaWYgKGNhcHR1cmVVSVdyYXApIGNhcHR1cmVVSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8gY2FwdHVyZSBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKGNhcHR1cmVVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShjYXB0dXJlVUkpO1xuICAgIGlmIChwcmV2aWV3VUlXcmFwKSBwcmV2aWV3VUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIHByZXZpZXcgVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmIChwcmV2aWV3VUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkocHJldmlld1VJKTtcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZSA9IHRoaXMuX19nZXRSb3RhdGlvbkRlZ3JlZSgpO1xuICAgIHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID0gWzkwLCAyNzBdLmluY2x1ZGVzKHJvdGF0aW9uRGVncmVlKTtcbiAgICBsZXQgb2NyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShvY3IsIG9jclN0eWxlKTtcbiAgICBjb25zdCB3cmFwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIC8vIHZlcnRpY2FsIGFsaWduIG1pZGRsZVxuICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfTtcbiAgICB2aWRlb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWRlb1dyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvV3JhcCcpO1xuICAgIGlmICh2aWRlb1dyYXApIHtcbiAgICAgIHdoaWxlICh2aWRlb1dyYXAuZmlyc3RDaGlsZCkge1xuICAgICAgICB2aWRlb1dyYXAucmVtb3ZlQ2hpbGQodmlkZW9XcmFwLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW9XcmFwLCB3cmFwU3R5bGUpO1xuICAgIH1cbiAgICBvY3IuYXBwZW5kQ2hpbGQodmlkZW9XcmFwKTtcbiAgICBtYXNrQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtYXNrQm94V3JhcCcpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShtYXNrQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBsZXQgbWFza19mcmFtZSA9IHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlLmJhc2VfY29sb3IgKyAnZmYnO1xuICAgIGlmICghIXRoaXMuX19vcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZS5jbGlwX2ZyYW1lICsgJzU1JztcbiAgICB9XG4gICAgbWFza0JveFdyYXAuaW5uZXJIVE1MID0gJycgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyAnICAgICAgPC9zdmc+XFxuJyArICcgICAgPC9tYXNrPlxcbicgKyBcIiAgICA8cmVjdCBpZD0nbWFza0JveE91dGVyJ1xcblwiICsgXCIgICAgICAgICAgeD0nMCcgeT0nMCcgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJSdcXG5cIiArIFwiICAgICAgICAgIGZpbGw9J1wiICsgbWFza19mcmFtZSArIFwiJyBtYXNrPSd1cmwoI21hc2stcmVjdCknPjwvcmVjdD5cXG5cIiArICcgIDwvc3ZnPic7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVBbmRNaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVDc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX19nZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICB0cmFuc2Zvcm06IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHZpZGVvU3R5bGUpO1xuICAgIHZpZGVvV3JhcC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgZ3VpZGVCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3VpZGVCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveFdyYXAnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChndWlkZUJveFdyYXApO1xuICAgIGd1aWRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94Jyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdub25lJyA6ICdkaXNwbGF5JyA6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzBweCcsXG4gICAgICB0b3A6ICczMHB4JyxcbiAgICAgIGJvcmRlcjogJ2dyZWVuIDJweCBzb2xpZCdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByb3RhdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJvdGF0aW9uQ2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdyb3RhdGlvbkNhbnZhcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShyb3RhdGlvbkNhbnZhcywge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdkaXNwbGF5JyA6ICdub25lJyA6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnYmx1ZSAycHggc29saWQnXG4gICAgfSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHJvdGF0aW9uQ2FudmFzKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2ZW50VG9GcmVlemVWaWRlbywge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206ICcxMCcsXG4gICAgICByaWdodDogJzEwJ1xuICAgIH0pO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLmlubmVySFRNTCA9ICcnICsgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHN0eWxlPVwibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1wiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIj5cXG4nICsgJyAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjAuNTU1NTU1NTU1NTU1NTU1NnNcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsxXCIgdmFsdWVzPVwiMTA7MFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMVwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImZpbGxcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJkaXNjcmV0ZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCIxNlwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0wLjU1NTU1NTU1NTU1NTU1NTZzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiODRcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuMTExMTExMTExMTExMTExMnNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS4xMTExMTExMTExMTExMTEyc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCIxNlwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS42NjY2NjY2NjY2NjY2NjY1c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjY2NjY2NjY2NjY2NjY2NjVzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nO1xuICAgICc8L3N2Zz4nO1xuICAgIG9jci5hcHBlbmRDaGlsZChwcmV2ZW50VG9GcmVlemVWaWRlbyk7XG4gICAgY3VzdG9tVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VzdG9tVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjdXN0b21VSVdyYXAnKTtcbiAgICBjb25zdCBjdXN0b21VSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY3VzdG9tVUlXcmFwLCBjdXN0b21VSVdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGN1c3RvbVVJV3JhcCk7XG5cbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSSDsgqzsmqkodXNlKeyXrOu2gOyZgCDqtIDqs4Tsl4bsnbQg7JiB7Jet7J2EIOyeoeq4sCDsnITtlbQsIGRpduqwgCDsl4bsnLzrqbQg7IOd7ISxXG4gICAgLy8gYWRqdXN0U3R5bGUoKSDsl5DshJwg7IS467aA7KCB7J24IOyCrOydtOymiOyZgCDsnITsuZjqsJIg64+Z7KCB7Jy866GcIOyEpOygleuQqC5cbiAgICBpZiAoIXRvcFVJKSB7XG4gICAgICB0b3BVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3RvcFVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZCh0b3BVSSk7XG4gICAgaWYgKCFtaWRkbGVVSSkge1xuICAgICAgbWlkZGxlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtaWRkbGVVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQobWlkZGxlVUkpO1xuICAgIGlmICghYm90dG9tVUkpIHtcbiAgICAgIGJvdHRvbVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib3R0b21VSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnYm90dG9tVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKGJvdHRvbVVJKTtcbiAgICBjYXB0dXJlVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FwdHVyZVVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FwdHVyZVVJV3JhcCcpO1xuICAgIGNvbnN0IGNhcHR1cmVVSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjZW50ZXInXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJV3JhcCwgY2FwdHVyZVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FwdHVyZVVJV3JhcCk7XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkge1xuICAgICAgaWYgKCFjYXB0dXJlVUkpIHtcbiAgICAgICAgY2FwdHVyZVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcHR1cmVVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FwdHVyZVVJJyk7XG4gICAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIWNhcHR1cmVCdXR0b24pIHtcbiAgICAgICAgY2FwdHVyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYXB0dXJlQnV0dG9uJyk7XG4gICAgICAgIGxldCBjYXB0dXJlQnV0dG9uU3JjU1ZHID0gYGA7XG4gICAgICAgIGNhcHR1cmVCdXR0b25TcmNTVkcgKz0gYDxzdmcgd2lkdGg9JzgwJyBoZWlnaHQ9JzgwJyB2aWV3Qm94PScwIDAgODAgODAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+YDtcbiAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgICA8Y2lyY2xlIGlkPSdjYXB0dXJlQnV0dG9uJyBjeD0nNDAnIGN5PSc0MCcgcj0nMzgnIGZpbGw9JyM1NTU1NTUnIHN0cm9rZT0nI2ZmZmZmZicgc3Ryb2tlLXdpZHRoPSc0Jy8+YDtcbiAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgPC9zdmc+YDtcbiAgICAgICAgY2FwdHVyZUJ1dHRvbi5pbm5lckhUTUwgPSBjYXB0dXJlQnV0dG9uU3JjU1ZHO1xuICAgICAgICBjYXB0dXJlVUkuYXBwZW5kQ2hpbGQoY2FwdHVyZUJ1dHRvbik7XG4gICAgICB9XG4gICAgICBjYXB0dXJlVUlXcmFwLmFwcGVuZENoaWxkKGNhcHR1cmVVSSk7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgIGNvbnN0IF9fb25DbGlja0NhcHR1cmVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICB0aGF0Ll9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS52aWRlbywge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhhdC5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgIHByZXZpZXdVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByZXZpZXdVSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdVSVdyYXAnKTtcbiAgICAgIGNvbnN0IHByZXZpZXdVSVdyYXBTdHlsZSA9IHtcbiAgICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMDAwMDAwYWEnXG4gICAgICB9O1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHByZXZpZXdVSVdyYXBTdHlsZSk7XG4gICAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmlld1VJV3JhcCk7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIGlmICghcHJldmlld1VJKSB7XG4gICAgICAgICAgcHJldmlld1VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgcHJldmlld1VJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJLCB7XG4gICAgICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nLFxuICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAgICdtYXgtd2lkdGgnOiAnOTAlJyxcbiAgICAgICAgICAnbWF4LWhlaWdodCc6ICc5MCUnXG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2aWV3VUlXcmFwLmFwcGVuZENoaWxkKHByZXZpZXdVSSk7XG4gICAgICAgIGlmICghcHJldmlld0ltYWdlKSB7XG4gICAgICAgICAgcHJldmlld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgcHJldmlld0ltYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3SW1hZ2UnKTtcbiAgICAgICAgICBwcmV2aWV3VUkuYXBwZW5kQ2hpbGQocHJldmlld0ltYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxvYWRpbmcgVUkg7JyE7LmYIOyekOumrOyeoeqyjCDtlZjquLAg7JyE7ZW0XG4gICAgYXdhaXQgdGhpcy5fX2FkanVzdFN0eWxlKHRydWUpO1xuXG4gICAgLy8g7ZmU66m06rO864+EIO2YhOyDgSDtlbTqsrBcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCB7XG4gICAgICBkaXNwbGF5OiAnJ1xuICAgIH0pO1xuICAgIHRoaXMuX19vY3IgPSBvY3I7XG4gICAgdGhpcy5fX2NhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLl9fcm90YXRpb25DYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICB0aGlzLl9fdmlkZW8gPSB2aWRlbztcbiAgICB0aGlzLl9fdmlkZW9XcmFwID0gdmlkZW9XcmFwO1xuICAgIHRoaXMuX19ndWlkZUJveCA9IGd1aWRlQm94O1xuICAgIHRoaXMuX19ndWlkZUJveFdyYXAgPSBndWlkZUJveFdyYXA7XG4gICAgdGhpcy5fX21hc2tCb3hXcmFwID0gbWFza0JveFdyYXA7XG4gICAgdGhpcy5fX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gcHJldmVudFRvRnJlZXplVmlkZW87XG4gICAgdGhpcy5fX2N1c3RvbVVJV3JhcCA9IGN1c3RvbVVJV3JhcDtcbiAgICB0aGlzLl9fdG9wVUkgPSB0b3BVSTtcbiAgICB0aGlzLl9fbWlkZGxlVUkgPSBtaWRkbGVVSTtcbiAgICB0aGlzLl9fYm90dG9tVUkgPSBib3R0b21VSTtcbiAgICB0aGlzLl9fY2FwdHVyZVVJV3JhcCA9IGNhcHR1cmVVSVdyYXA7XG4gICAgdGhpcy5fX2NhcHR1cmVVSSA9IGNhcHR1cmVVSTtcbiAgICB0aGlzLl9fY2FwdHVyZUJ1dHRvbiA9IGNhcHR1cmVCdXR0b247XG4gICAgdGhpcy5fX3ByZXZpZXdVSVdyYXAgPSBwcmV2aWV3VUlXcmFwO1xuICAgIHRoaXMuX19wcmV2aWV3VUkgPSBwcmV2aWV3VUk7XG4gICAgdGhpcy5fX3ByZXZpZXdJbWFnZSA9IHByZXZpZXdJbWFnZTtcbiAgICByZXR1cm4ge1xuICAgICAgb2NyLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICB2aWRlbyxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH07XG4gIH1cbiAgX19ibHVyQ2FwdHVyZUJ1dHRvbigpIHtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS52aWRlbywge1xuICAgICAgZGlzcGxheTogJydcbiAgICB9KTtcbiAgICBjb25zdCB7XG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhcHR1cmVCdXR0b24pIHtcbiAgICAgIGNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJywgJ2ZhbHNlJyk7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIF9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgcmV0dXJuIGNhcHR1cmVCdXR0b24gPyBjYXB0dXJlQnV0dG9uLmdldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcpID09PSAndHJ1ZScgOiBmYWxzZTtcbiAgfVxuICBhc3luYyBfX3NldHVwVmlkZW8oaXNQYXNzcG9ydCkge1xuICAgIC8vIHdhc20g7J247Iud7ISx64qlIOy1nOygge2ZlOuQnCDtlbTsg4Hrj4RcbiAgICB0aGlzLl9fcmVzb2x1dGlvbldpZHRoID0gMTA4MDtcbiAgICB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCA9IDcyMDtcbiAgICB0aGlzLl9fY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IGF3YWl0IHRoaXMuX19zZXR1cERvbUVsZW1lbnRzKCk7XG4gICAgbGV0IHZpZGVvRGV2aWNlcyA9IGF3YWl0IHRoaXMuX19nZXRJbnB1dERldmljZXMoJ3ZpZGVvJyk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvRGV2aWNlcyA6OiAnLCB2aWRlb0RldmljZXMpXG4gICAgbGV0IGRldmljZUlkTGlzdCA9IHZpZGVvRGV2aWNlcy5tYXAoZGV2aWNlID0+IGRldmljZS5kZXZpY2VJZCk7XG4gICAgdGhpcy5jaGVja1VJT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29uc3RyYWludFdpZHRoLCBjb25zdHJhaW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgLy8gdWkgOiBwb3J0cmFpdFxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogMTA4MCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcblxuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDcyMCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdWkgOiBsYW5kc2NhcGVcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIG1pbjogMTI4MFxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICBtaW46IDcyMFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB2aWRlbzoge1xuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgaWRlYWw6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZmFjaW5nTW9kZToge1xuICAgICAgICAgIGlkZWFsOiB0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnRcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICB3aGl0ZUJhbGFuY2VNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2VJZDogdmlkZW9EZXZpY2VzLmxlbmd0aCA/IHtcbiAgICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0W2RldmljZUlkTGlzdC5sZW5ndGggLSAxXVxuICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgd2lkdGg6IGNvbnN0cmFpbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb25zdHJhaW50SGVpZ2h0XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOy1nOy0iCDsp4TsnoUg7J207Ja07IScIHZpZGVvRGVpdmNlIOumrOyKpO2KuOulvCDqsIDsoLjsmKwg7IiYIOyXhuycvOuptCxcbiAgICAvLyBnZXRVc2VyTWVkaWHrpbwg7J6E7J2YIO2YuOy2nO2VmOyXrCDqtoztlZzsnYQg67Cb7J2A65KkIOuLpOyLnCDqsIDsoLjsmLRcbiAgICBpZiAodmlkZW9EZXZpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgdmlkZW9EZXZpY2VzID0gYXdhaXQgdGhpcy5fX2dldElucHV0RGV2aWNlcygndmlkZW8nKTtcbiAgICAgIGRldmljZUlkTGlzdCA9IHZpZGVvRGV2aWNlcy5tYXAoZGV2aWNlID0+IGRldmljZS5kZXZpY2VJZCk7XG4gICAgICBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCA9IHZpZGVvRGV2aWNlcy5sZW5ndGggPyB7XG4gICAgICAgIGlkZWFsOiBkZXZpY2VJZExpc3RbZGV2aWNlSWRMaXN0Lmxlbmd0aCAtIDFdXG4gICAgICB9IDogbnVsbDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0IGR1bXB0cmFjayA9IChbYSwgYl0sIHRyYWNrKSA9PlxuICAgICAgLy8gICBgJHthfSR7dHJhY2sua2luZCA9PSAndmlkZW8nID8gJ0NhbWVyYScgOiAnTWljcm9waG9uZSd9ICgke3RyYWNrLnJlYWR5U3RhdGV9KTogJHt0cmFjay5sYWJlbH0ke2J9YDtcblxuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvVHJhY2tzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpKVxuICAgICAgLy8gY29uc3Qgc3RyZWFtU2V0dGluZ3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRTZXR0aW5ncygpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbUNhcGFiaWxpdGllcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDYXBhYmlsaXRpZXMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q29uc3RyYWludHMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1TZXR0aW5ncyA6OiAnLCBzdHJlYW1TZXR0aW5ncylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCAvIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGggLyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBhc3BlY3RSYXRpbyA6OiAnICsgc3RyZWFtU2V0dGluZ3MuYXNwZWN0UmF0aW8pO1xuXG4gICAgICBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgW3JvdGF0aW9uQ2FudmFzLndpZHRoLCByb3RhdGlvbkNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoXTtcbiAgICAgIH1cbiAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgIHRoaXMuX19zdHJlYW0gPSBzdHJlYW07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19hZGp1c3RTdHlsZShpc0ZpcnN0Q2FsbGVkID0gZmFsc2UpIHtcbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgY2FwdHVyZVVJV3JhcCxcbiAgICAgIGNhcHR1cmVVSSxcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KTtcblxuICAgIC8vIOq4sOykgOygleuztFxuICAgIGNvbnN0IGJhc2VXaWR0aCA9IDQwMDtcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMjYwO1xuICAgIGNvbnN0IHNjYW5uZXJGcmFtZVJhdGlvID0gYmFzZUhlaWdodCAvIGJhc2VXaWR0aDsgLy8g7Iug67aE7KadIOu5hOycqFxuXG4gICAgbGV0IGd1aWRlQm94V2lkdGgsIGd1aWRlQm94SGVpZ2h0O1xuICAgIGxldCBjYWxjT2NyQ2xpZW50V2lkdGggPSBvY3IuY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRIZWlnaHQgPSBvY3IuY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb247XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW2NhbGNWaWRlb1dpZHRoLCBjYWxjVmlkZW9IZWlnaHRdID0gW2NhbGNWaWRlb0hlaWdodCwgY2FsY1ZpZGVvV2lkdGhdO1xuICAgICAgW2NhbGNWaWRlb0NsaWVudFdpZHRoLCBjYWxjVmlkZW9DbGllbnRIZWlnaHRdID0gW2NhbGNWaWRlb0NsaWVudEhlaWdodCwgY2FsY1ZpZGVvQ2xpZW50V2lkdGhdO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgbGV0IG5ld1ZpZGVvV2lkdGggPSBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBsZXQgbmV3VmlkZW9IZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSB0aGlzLl9fZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgY29uc3QgdmlkZW9SYXRpb0J5SGVpZ2h0ID0gdGhpcy5fX3ZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIC8vIOyEuOuhnCBVSVxuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSVdyYXAsIHtcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnZmxleC1lbmQnXG4gICAgICB9KTtcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7Lm066mU652864+EIOyEuOuhnFxuICAgICAgICAvLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDruYTrlJTsmKQg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSVxuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSVdyYXAsIHtcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdlbmQnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJ1xuICAgICAgfSk7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOu5hOuUlOyYpOulvCDqsIDroZwgVUnsnZggaGVpZ2h0IOq4sOykgOycvOuhnCDspITsnbTqs6BcbiAgICAgICAgLy8g6rCA66GcIFVJIGhlaWdodCDquLDspIDsnLzroZwg67mE65SU7Jik7J2YIHdpZHRoIOqzhOyCsFxuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IGNhbGNPY3JDbGllbnRIZWlnaHQgKiB2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBuZXdWaWRlb0hlaWdodCAqIChjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0hlaWdodCk7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk64qUIOu5hOuUlOyYpOulvCDshLjroZwg6riw7KSA7Jy866GcIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IG5ld1ZpZGVvSGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCDqsIDroZwg7YGs6riw6rCAIOqwgOuhnCBVSSB3aWR0aCAqIHJhdGlvIOqwkuuztOuLpCDtgazrqbQsXG4gICAgICAgIGlmIChndWlkZUJveFdpZHRoID4gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGgpIHtcbiAgICAgICAgICAvLyDqs4TsgrAg67Cp7Iud7J2EIOuwlOq+vOuLpCAo7IKs7JygIDog6rGw7J2YIOygleyCrOqwge2YleyXkCDqsIDquYzsmrQg6rK97JqwIOqwgOydtOuTnCDrsJXsiqQg6rCA66Gc6rCAIOq9ieywqOqyjCDrkKguKVxuICAgICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7ZmV64yAXG4gICAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIGhlaWdodCDtgazquLDrpbwgVUnsnZggaGVpZ2h0IOq4sOykgOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCDqsIDroZwg7YGs6riw6rCAIOqwgOuhnCBVSSB3aWR0aCAqIHJhdGlvIOqwkuuztOuLpCDtgazrqbQsXG4gICAgICAgIGlmIChndWlkZUJveFdpZHRoID4gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGgpIHtcbiAgICAgICAgICAvLyDqs4TsgrAg67Cp7Iud7J2EIOuwlOq+vOuLpCAo7IKs7JygIDog6rGw7J2YIOygleyCrOqwge2YleyXkCDqsIDquYzsmrQg6rK97JqwIOqwgOydtOuTnCDrsJXsiqQg6rCA66Gc6rCAIOq9ieywqOqyjCDrkKguKVxuICAgICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7LaV7IaMXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiAoY2FsY1ZpZGVvSGVpZ2h0IC8gY2FsY1ZpZGVvV2lkdGgpO1xuICAgICAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBndWlkZUJveFdpZHRoICs9IGJvcmRlcldpZHRoICogMjtcbiAgICBndWlkZUJveEhlaWdodCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aCA9IE1hdGgubWluKGd1aWRlQm94V2lkdGgsIG5ld1ZpZGVvV2lkdGgpO1xuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplSGVpZ2h0ID0gTWF0aC5taW4oZ3VpZGVCb3hIZWlnaHQsIG5ld1ZpZGVvSGVpZ2h0KTtcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94V2lkdGggKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveEhlaWdodCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGlmICh0b3BVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHRvcFVJLCB7XG4gICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcxMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobWlkZGxlVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShtaWRkbGVVSSwge1xuICAgICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogJzEwcHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobmV3VmlkZW9XaWR0aCAhPT0gY2FsY1ZpZGVvQ2xpZW50V2lkdGgpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICB3aWR0aDogbmV3VmlkZW9XaWR0aCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobmV3VmlkZW9IZWlnaHQgIT09IGNhbGNWaWRlb0NsaWVudEhlaWdodCkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIGhlaWdodDogbmV3VmlkZW9IZWlnaHQgKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgdmlkZW9Jbm5lckdhcCA9IDI7IC8vIOuvuOyEuO2VmOqyjCBtYXNrQm94SW5uZXLrs7Tri6QgZ3VpZGVCb3jqsIAg7J6R7J2A6rKDIOuztOyglVxuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwge1xuICAgICAgd2lkdGg6IHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBoZWlnaHQ6IHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgfSk7XG4gICAgY29uc3QgbWFza0JveElubmVyID0gbWFza0JveFdyYXAucXVlcnlTZWxlY3RvcignI21hc2tCb3hJbm5lcicpO1xuICAgIGxldCByID0gYm9yZGVyUmFkaXVzIC0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHIgPSByIDwgMCA/IDAgOiByO1xuICAgIGlmICghaXNOYU4ocmVkdWNlZEd1aWRlQm94V2lkdGgpICYmICFpc05hTihyZWR1Y2VkR3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lckhlaWdodCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBtYXNrQm94SW5uZXJXaWR0aCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIG1hc2tCb3hJbm5lckhlaWdodCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3gnLCBtYXNrQm94SW5uZXJXaWR0aCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3knLCBtYXNrQm94SW5uZXJIZWlnaHQgLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIHIgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeScsIHIgKyAnJyk7XG4gICAgfVxuXG4gICAgLy8g7IiY64+ZIOy0rOyYgSBVSSDsgqzsmqlcbiAgICAvLyBmaXJzdENhbGxlZOyduCDqsr3smrAg7JWE7KeBIGNhcHR1cmVVSeqwgCDqt7jroKTsp4Dsp4Ag7JWK7JWEIOustOydmOuvuFxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkgJiYgIWlzRmlyc3RDYWxsZWQpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnICYmIGJvdHRvbVVJICYmIGNhcHR1cmVVSSkge1xuICAgICAgICBjb25zdCBjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXMgPSB0aGlzLl9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2Rlcyhib3R0b21VSSk7XG4gICAgICAgIGxldCBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9IGNhcHR1cmVCdXR0b24ucXVlcnlTZWxlY3Rvcignc3ZnJykuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPSBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9PT0gMCA/IDgwIDogY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQ7XG4gICAgICAgIGxldCBjYXB0dXJlVUlQYWRkaW5nQm90dG9tID0gYm90dG9tVUkuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIC09IGlzTmFOKHBhcnNlSW50KGJvdHRvbVVJLnN0eWxlLnBhZGRpbmdUb3ApKSA/IDAgOiBwYXJzZUludChib3R0b21VSS5zdHlsZS5wYWRkaW5nVG9wKTtcbiAgICAgICAgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSAtPSBjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXM7XG4gICAgICAgIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gLT0gY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQ7XG4gICAgICAgIGNvbnN0IGJhc2VsaW5lID0gY2FsY09jckNsaWVudEhlaWdodCAtIChjYWxjT2NyQ2xpZW50SGVpZ2h0IC8gMiArIGd1aWRlQm94SGVpZ2h0IC8gMik7XG4gICAgICAgIGlmIChjYXB0dXJlVUlQYWRkaW5nQm90dG9tID4gMCAmJiBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIDwgYmFzZWxpbmUpIHtcbiAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgICAgICAncGFkZGluZy1yaWdodCc6ICcnLFxuICAgICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgICdwYWRkaW5nLXJpZ2h0JzogJzEwcHgnLFxuICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0cnVlKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19jYWxjU3VtT2ZIZWlnaHRDaGlsZE5vZGVzKG9iaikge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBvYmo/LmNoaWxkTm9kZXMpIHtcbiAgICAgIHN1bSArPSBpdGVtLmNsaWVudEhlaWdodCA/IGl0ZW0uY2xpZW50SGVpZ2h0IDogMDtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfVxuICBfX2Nsb3NlQ2FtZXJhKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cbiAgYXN5bmMgX19sb2FkUmVzb3VyY2VzKCkge1xuICAgIHZvaWQgMDtcbiAgICBpZiAodGhpcy5fX3Jlc291cmNlc0xvYWRlZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2RrU3VwcG9ydEVudiA9ICdxdXJhbSc7XG4gICAgbGV0IGlzU3VwcG9ydFNpbWQgPSBhd2FpdCBzaW1kKCk7XG4gICAgbGV0IGVudkluZm8gPSAnJztcbiAgICBlbnZJbmZvICs9IGBvcyA6ICR7dGhpcy5fX2RldmljZUluZm8ub3N9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBvc1NpbXBsZSA6ICR7dGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGV9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBzaW1kKHdhc20tZmVhdHVyZS1kZXRlY3QpIDogJHtpc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgaWYgKHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnSU9TJyB8fCB0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZSA9PT0gJ01BQycpIHtcbiAgICAgIGlzU3VwcG9ydFNpbWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZW52SW5mbyArPSBgaXNTdXBwb3J0U2ltZChmaW5hbCkgOiAke2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBVc2VyQWdlbnQgOiAke25hdmlnYXRvci51c2VyQWdlbnR9XFxuYDtcbiAgICBpZiAoaXNTdXBwb3J0U2ltZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgc2RrU3VwcG9ydEVudiArPSAnX3NpbWQuanMnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBzZGtTdXBwb3J0RW52ICs9ICcuanMnO1xuICAgIH1cbiAgICB2b2lkIDA7XG4gICAgd2luZG93LnVzZWJPQ1JFbnZJbmZvID0gZW52SW5mbztcbiAgICB2b2lkIDA7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChzZGtTdXBwb3J0RW52LCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpO1xuICAgIGxldCBzcmMgPSBhd2FpdCBmZXRjaCh1cmwuaHJlZikudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcbiAgICAgIGxldCByZWdleCA9IC8oLiopID0gTW9kdWxlLmN3cmFwL2dtO1xuICAgICAgbGV0IHNvdXJjZSA9IHRleHQucmVwbGFjZShyZWdleCwgJ01vZHVsZS4kMSA9IE1vZHVsZS5jd3JhcCcpO1xuXG4gICAgICAvLyBkYXRhKG1vZGVsKVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL15cXChmdW5jdGlvblxcKFxcKSBcXHsvbSwgJ3ZhciBjcmVhdGVNb2RlbERhdGEgPSBhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xcbicpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgIGNvbnNvbGUuZXJyb3IoXCJwYWNrYWdlIGVycm9yOlwiLCBlcnJvcik7JywgJyAgIHJlamVjdCgpO1xcbicgKyAnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCcgIH0sIGhhbmRsZUVycm9yKScsICcgIHJlc29sdmUoKTtcXG4nICsgJyAgfSwgaGFuZGxlRXJyb3IpJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcfVxcKVxcKFxcKTsvbSwgJ1xcbiB9KVxcbicgKyAnfTsnKTtcblxuICAgICAgLy8gd2FzbVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ3F1cmFtLndhc20nLCBuZXcgVVJMKCdxdXJhbS53YXNtJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9SRU1PVEVfUEFDS0FHRV9CQVNFID0gWydcIl1xdXJhbVxcLmRhdGFbXCInXS9nbSwgYFJFTU9URV9QQUNLQUdFX0JBU0UgPSBcIiR7bmV3IFVSTCgncXVyYW0uZGF0YScsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZn1cImApO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2Z1bmN0aW9uIGNyZWF0ZVdhc20nLCAnYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2FzbScpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2luc3RhbnRpYXRlQXN5bmMoKTsnLCAnYXdhaXQgaW5zdGFudGlhdGVBc3luYygpOycpO1xuXG4gICAgICAvLyB3YXNtIGFuZCBkYXRhKG1vZGVsKSBmaWxlIOuzkeugrOuhnCBmZXRjaCDtlZjquLAg7JyE7ZW0XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgndmFyIGFzbSA9IGNyZWF0ZVdhc20oKTsnLCAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIHN0YXJ0XCIpXFxuJyArICdhd2FpdCAoYXN5bmMgZnVuY3Rpb24oKSB7XFxuJyArICcgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XFxuJyArICcgICAgdmFyIGlzQ3JlYXRlZFdhc20gPSBmYWxzZTtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkRGF0YSA9IGZhbHNlO1xcbicgKyAnICAgIGNyZWF0ZVdhc20oKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZFdhc20gPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZERhdGEpIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSk7XFxuJyArICcgICAgY3JlYXRlTW9kZWxEYXRhKCkudGhlbigoKSA9PiB7XFxuJyArICcgICAgICBpc0NyZWF0ZWREYXRhID0gdHJ1ZTtcXG4nICsgJyAgICAgIGlmIChpc0NyZWF0ZWRXYXNtKSB7IHJlc29sdmUoKTsgfVxcbicgKyAnICAgIH0pXFxuJyArICcgIH0pO1xcbicgKyAnfSkoKTtcXG4nICsgJ2NvbnNvbGUubG9nKFwiY3JlYXRlIHdhc20gYW5kIGRhdGEgLSBlbmRcIiknKTtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSk7XG4gICAgc3JjID0gYFxuICAgIChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICR7c3JjfVxuICAgICAgTW9kdWxlLmxlbmd0aEJ5dGVzVVRGOCA9IGxlbmd0aEJ5dGVzVVRGOFxuICAgICAgTW9kdWxlLnN0cmluZ1RvVVRGOCA9IHN0cmluZ1RvVVRGOFxuICAgICAgcmV0dXJuIE1vZHVsZVxuICAgIH0pKClcbiAgICAgICAgYDtcbiAgICB0aGlzLl9fT0NSRW5naW5lID0gYXdhaXQgZXZhbChzcmMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQgPSBhc3luYyBfID0+IHtcbiAgICAgIHZvaWQgMDtcbiAgICB9O1xuICAgIGF3YWl0IHRoaXMuX19PQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQoKTtcbiAgICB0aGlzLl9fcmVzb3VyY2VzTG9hZGVkID0gdHJ1ZTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19zdGFydFNjYW5JbXBsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpO1xuICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICB0aGlzLl9fYWRkcmVzcyA9IDA7XG4gICAgICB0aGlzLl9fcGFnZUVuZCA9IGZhbHNlO1xuICAgICAgLy8g67Cp7Ja07L2U65OcIOusuOyekOqwgOuTpOyWtOqwgCDsnojripTqsr3smrBcbiAgICAgIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPSBpc05hTihwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSkgPyAwIDogcGFyc2VJbnQodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCk7XG4gICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gICAgICB0aGlzLl9fc3NhUmV0cnlDb3VudCA9IDA7XG4gICAgICBjb25zdCBzY2FuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsLFxuICAgICAgICAgICAgaXNEZXRlY3RlZENhcmQgPSBudWxsLFxuICAgICAgICAgICAgaW1nRGF0YSA9IG51bGwsXG4gICAgICAgICAgICBpbWdEYXRhVXJsID0gbnVsbCxcbiAgICAgICAgICAgIG1hc2tJbWFnZSA9IG51bGwsXG4gICAgICAgICAgICBzc2FSZXN1bHQgPSBudWxsLFxuICAgICAgICAgICAgc3NhUmVzdWx0TGlzdCA9IFtdLFxuICAgICAgICAgICAgbWFza0luZm8gPSBudWxsO1xuXG4gICAgICAgICAgLy8gYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgICBpZiAoIXRoaXMuX19PQ1JFbmdpbmVbJ2FzbSddKSByZXR1cm47XG5cbiAgICAgICAgICAvLyBUT0RPIDog7ISk7KCV7ZWg7IiYIOyeiOqyjCDrs4Dqsr0gIGRlZmF1bHQg6rCS64+EIOygnOqztVxuICAgICAgICAgIGNvbnN0IFtyZXNvbHV0aW9uX3csIHJlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHZpZGVvXG4gICAgICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICAgICAgaWYgKHJlc29sdXRpb25fdyA9PT0gMCB8fCByZXNvbHV0aW9uX2ggPT09IDApIHJldHVybjtcbiAgICAgICAgICBpZiAodGhpcy5fX2RldGVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYmVmb3JlIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuICAgICAgICAgIGlmICh0aGlzLl9fYWRkcmVzcyA9PT0gMCAmJiAhdGhpcy5fX3BhZ2VFbmQgJiYgKGF3YWl0IHRoaXMuX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW8pKSkge1xuICAgICAgICAgICAgW3RoaXMuX19hZGRyZXNzLCB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFja10gPSB0aGlzLl9fZ2V0U2Nhbm5lckFkZHJlc3ModGhpcy5fX29jclR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuX19hZGRyZXNzIHx8IHRoaXMuX19wYWdlRW5kKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYWZ0ZXIgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fX29jclN0YXR1cyA8IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUykge1xuICAgICAgICAgICAgLy8gT0NSIOyZhOujjCDsnbTsoIQg7IOB7YOcXG5cbiAgICAgICAgICAgIC8vIGNhcmQgbm90IGRldGVjdGVkXG4gICAgICAgICAgICBbaXNEZXRlY3RlZENhcmQsIGltZ0RhdGEsIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKHRoaXMuX19hZGRyZXNzLCAwKTtcbiAgICAgICAgICAgIGlmICghaXNEZXRlY3RlZENhcmQpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX19pblByb2dyZXNzU3RlcCAhPT0gdGhpcy5JTl9QUk9HUkVTUy5SRUFEWSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX0ZBSUxFRCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQsIGZhbHNlLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKGZhbHNlKTsgLy8g7ZWE7JqU7ZWc6rCAP1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjYXJkIGlzIGRldGVjdGVkXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9TVUNDRVNTKTtcblxuICAgICAgICAgICAgLy8gc3NhIHJldHJ5IOyEpOygleydtCDrkJjslrQg7J6I7Jy86rGw64KYLCDsiJjrj5nstKzsmIFVSeulvCDsgqzsmqntlZjripQg6rK97JqwLCBjYXJkIGRldGVjdCDshLHqs7Xsi5wg7J2066+47KeAIOyggOyepVxuICAgICAgICAgICAgdGhpcy5fX2VucXVldWVEZXRlY3RlZENhcmRRdWV1ZShpbWdEYXRhLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUodHJ1ZSk7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MsIGZhbHNlLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtvY3JSZXN1bHQsIGltZ0RhdGFVcmwsIG1hc2tJbWFnZV0gPSBhd2FpdCB0aGlzLl9fc3RhcnRSZWNvZ25pdGlvbih0aGlzLl9fYWRkcmVzcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCB0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpLCBpbWdEYXRhLCBpbWdEYXRhVXJsKTtcblxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgIC8vICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICAgICAgICAvLyAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpOyAgICAgICAgLy8g7ZWE7JqU7ZWc6rCAP1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9fb2NyU3RhdHVzID49IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUykge1xuICAgICAgICAgICAgLy8gb2NyIOyZhOujjCDsnbTtm4Qg7IOB7YOcXG5cbiAgICAgICAgICAgIC8vIGZhaWx1cmUgY2FzZVxuICAgICAgICAgICAgaWYgKG9jclJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPQ1IgU3RhdHVzIGlzICR7dGhpcy5fX29jclN0YXR1c30sIGJ1dCBvY3JSZXN1bHQgaXMgZmFsc2VgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTsgLy8gT0NSIOyZhOujjCDsi5zsoJDsl5AgY2FtZXJhIHByZXZpZXcgb2ZmXG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9fc3NhTW9kZSkge1xuICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgIC8vIOy1nOy0iCDsi5zrj4RcbiAgICAgICAgICAgICAgc3NhUmVzdWx0ID0gYXdhaXQgdGhpcy5fX3N0YXJ0VHJ1dGgodGhpcy5fX29jclR5cGUsIHRoaXMuX19hZGRyZXNzKTtcbiAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW0VSUl0gU1NBIE1PREUgaXMgdHJ1ZS4gYnV0LCBzc2FSZXN1bHQgaXMgbnVsbCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0cnlTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQuaW5kZXhPZignRkFLRScpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3NzYVJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aFJldHJ5KHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tFUlJdIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzc2FSZXN1bHRMaXN0LnB1c2goc3NhUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXRyeVdvcmtpbmdUaW1lID0gbmV3IERhdGUoKSAtIHJldHJ5U3RhcnREYXRlO1xuICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYXNrSW5mbykge1xuICAgICAgICAgICAgICBtYXNrSW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX19nZXRNYXNrSW5mbyh0aGlzLl9fYWRkcmVzcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBsZWdhY3lGb3JtYXQsXG4gICAgICAgICAgICAgIG5ld0Zvcm1hdFxuICAgICAgICAgICAgfSA9IHBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLl9fc3NhUmV0cnlDb3VudCwgc3NhUmVzdWx0TGlzdCk7XG4gICAgICAgICAgICBsZXQgcmV2aWV3X3Jlc3VsdCA9IHtcbiAgICAgICAgICAgICAgb2NyX3R5cGU6IHRoaXMuX19vY3JUeXBlLFxuICAgICAgICAgICAgICBvY3JfcmVzdWx0OiBuZXdGb3JtYXQsXG4gICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBtYXNrSW1hZ2UsXG4gICAgICAgICAgICAgIG1hc2tJbmZvOiBtYXNrSW5mbyxcbiAgICAgICAgICAgICAgc3NhX21vZGU6IHRoaXMuX19zc2FNb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUxlZ2FjeUZvcm1hdCkge1xuICAgICAgICAgICAgICByZXZpZXdfcmVzdWx0Lm9jcl9kYXRhID0gbGVnYWN5Rm9ybWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvcic7XG4gICAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICc6ICcgKyBlLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZvaWQgMDtcblxuICAgICAgICAgIC8vIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgICAgLy8gICBhd2FpdCB0aGlzLl9fcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgLy8gICB0aGlzLl9fcmVjb3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKCdXQTAwMScsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgdGhpcy5fX2RldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHRoaXMuX19yZWNvdmVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX19yZWNvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl9fZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2NhbiwgMSk7IC8vIOyerOq3gFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8gVUkg656c642U66eBIGJsb2NraW5nIOuwqeyngCAoc2V0VGltZW91dClcbiAgICB9KTtcbiAgfVxuXG4gIF9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEsIGltZ0RhdGFVUkwpIHtcbiAgICAvLyBzc2EgcmV0cnkg7ISk7KCV7J20IOuQmOyWtCDsnojsnLzqsbDrgpgsIOyImOuPmey0rOyYgVVJ66W8IOyCrOyaqe2VmOuKlCDqsr3smrAsIGNhcmQgZGV0ZWN0IOyEseqzteyLnCDsnbTrr7jsp4Ag7KCA7J6lXG4gICAgaWYgKHRoaXMuX19zc2FNb2RlICYmIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPiAwIHx8IHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSAmJiB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgIGxldCBsaW1pdFNhdmVJbWFnZUNvdW50ID0gTWF0aC5tYXgodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCwgdGhpcy5fX21hbnVhbE9DUk1heFJldHJ5Q291bnQpO1xuICAgICAgaWYgKHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5sZW5ndGggPT09IGxpbWl0U2F2ZUltYWdlQ291bnQpIHtcbiAgICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0aGlzLl9fZGVidWdNb2RlKSB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQuc2hpZnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5wdXNoKGltZ0RhdGEpO1xuICAgICAgaWYgKHRoaXMuX19kZWJ1Z01vZGUpIHtcbiAgICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlQmFzZTY0LnB1c2goaW1nRGF0YVVSTCk7XG4gICAgICAgIHZvaWQgMDsgLy8gc2hvdWxkIGJlIHJlbW92ZWRcbiAgICAgIH1cblxuICAgICAgdm9pZCAwOyAvLyBzaG91bGQgYmUgcmVtb3ZlZFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KSB7XG4gICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgIGlmIChyZXZpZXdfcmVzdWx0LnNzYV9tb2RlKSB7XG4gICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIHJlc3VsdF9jb2RlOiAnTjEwMCcsXG4gICAgICAgIHJlc3VsdF9tZXNzYWdlOiAnT0suJ1xuICAgICAgfSxcbiAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnLFxuICAgICAgcmV2aWV3X3Jlc3VsdDogcmV2aWV3X3Jlc3VsdFxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vblN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fb25GYWlsdXJlUHJvY2VzcyhyZXN1bHRDb2RlLCBlLCBlcnJvck1lc3NhZ2UpIHtcbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEKTtcbiAgICBsZXQgZXJyb3JEZXRhaWwgPSAnJztcbiAgICBpZiAoZT8udG9TdHJpbmcoKSkgZXJyb3JEZXRhaWwgKz0gZS50b1N0cmluZygpO1xuICAgIGlmIChlPy5zdGFjaykgZXJyb3JEZXRhaWwgKz0gZS5zdGFjaztcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgcmVzdWx0X2NvZGU6IHJlc3VsdENvZGUsXG4gICAgICAgIHJlc3VsdF9tZXNzYWdlOiBlcnJvck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6ICdmYWlsZWQnLFxuICAgICAgcmV2aWV3X3Jlc3VsdDoge1xuICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgIGVycm9yX2RldGFpbDogZXJyb3JEZXRhaWxcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0aGlzLl9fb25GYWlsdXJlKSB7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlKHJlc3VsdCk7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3N0YXJ0U2NhbigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuSW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyBfX3JlY292ZXJ5U2NhbigpIHtcbiAgICB2b2lkIDA7XG4gICAgdGhpcy5fX3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuKCk7XG4gIH1cbiAgc3RvcFNjYW4oKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9XG4gIHN0b3BTdHJlYW0oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy5fX3N0cmVhbSkge1xuICAgICAgdGhpcy5fX3N0cmVhbS5zdG9wICYmIHRoaXMuX19zdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzICYmIHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhY2tzLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdHJlYW0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDrqZTrqqjrpqwgYWxsb2NhdGlvbiBmcmVlIO2VqOyImCAqL1xuICBjbGVhbnVwKCkge1xuICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKTtcbiAgICB0aGlzLl9fZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuX19kZXN0cm95UHJldkltYWdlKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCk7XG4gIH1cbiAgX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgaWYgKHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlQk9DUjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsUUFBUSxNQUFNLHVCQUF1QjtBQUM1QyxPQUFPQyxNQUFNLE1BQU0scUJBQXFCO0FBQ3hDLFNBQVNDLElBQUksRUFBRUMsT0FBTyxRQUFRLGtDQUFrQztBQUNoRSxJQUFJQyxRQUFRO0FBQ1osTUFBTUMsT0FBTyxDQUFDO0VBMkJaOztFQUVBOztFQWlFaUM7RUFDTDs7RUFNRTtFQUNGO0VBQ0M7O0VBSTdCOztFQWtGQTtFQUNBQyxXQUFXQSxDQUFBLEVBQUc7SUFBQUMsZUFBQSxzQkE3TEE7TUFDWkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsU0FBUyxFQUFFLFdBQVc7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLG1CQUFtQixFQUFFLGdCQUFnQjtNQUNyQ0Msa0JBQWtCLEVBQUUsZUFBZTtNQUNu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
