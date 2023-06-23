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
    _defineProperty(this, "__onSuccess", null);
    _defineProperty(this, "__onFailure", null);
    _defineProperty(this, "__onInProgressChange", null);
    _defineProperty(this, "__ocrTypeList", ['idcard', 'driver', 'passport', 'foreign-passport', 'alien', 'credit', 'idcard-ssa', 'driver-ssa', 'passport-ssa', 'foreign-passport-ssa', 'alien-ssa', 'credit-ssa']);
    _defineProperty(this, "__ocrTypeString", new Map([["1", "idcard"], ["2", "driver"], ["3", "passport"], ["4", "foreign-passport"], ["5", "alien"], ["5-1", "alien"], ["5-2", "alien"], ["5-3", "alien"]]));
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
    _defineProperty(this, "__Buffer", null);
    _defineProperty(this, "__resultBuffer", null);
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
      ssaMaxRetryCount: 0
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
      throw new Error("License Key is empty");
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
          throw new Error("Wrong License Key");
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
      this.__resultBuffer = this.__OCREngine._malloc(256);
    }
    return [this.__Buffer, this.__resultBuffer];
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
    if (this.__resultBuffer !== null) {
      this.__OCREngine._free(this.__resultBuffer);
      this.__resultBuffer = null;
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
          tempCanvas.style.position = "absolute";
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
        var result = _this9.__OCREngine.detect_idcard(buffer, _this9.__resolutionWidth, _this9.__resolutionHeight, address, boxType);
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
            if (ocrResult === null || ocrResult === '' || ocrResult === 'false' || ocrResult[0] === 'false') {
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
            } else {
              return true;
            }
          });
          return function recognition(_x) {
            return _ref4.apply(this, arguments);
          };
        }();
        if (yield recognition(isSetIgnoreComplete)) {
          var cropMode = false;
          if (ocrType.indexOf("credit") > -1) {
            cropMode = true;
          }
          var originImage = yield _this10.__getImageBase64(address, false, cropMode);
          var maskImage = yield _this10.__getImageBase64(address, true, cropMode);
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
      if (ocrType.indexOf("-ssa") > -1) {
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
          _this13.__onFailureProcess("E403", e, errorMessage);
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
        maskBoxWrap === null || maskBoxWrap === void 0 ? void 0 : (_maskBoxWrap$querySel = maskBoxWrap.querySelector("#maskBoxOuter")) === null || _maskBoxWrap$querySel === void 0 ? void 0 : _maskBoxWrap$querySel.setAttribute("fill", _this14.__options.maskFrameStyle[val]);
      }
      if (_this14.__options.useCaptureUI && _this14.__options.useCaptureButtonColorChange) {
        var _captureButton$queryS;
        captureButton === null || captureButton === void 0 ? void 0 : (_captureButton$queryS = captureButton.querySelector("#captureButton")) === null || _captureButton$queryS === void 0 ? void 0 : _captureButton$queryS.setAttribute("fill", _this14.__options.captureButtonStyle[val]);
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
    previewImage.src = "";
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
      if (!ocr) throw new Error("ocr div element is not exist");
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
      maskBoxWrap.innerHTML = "" + "  <svg id='maskBoxContainer' width='100%' height='100%' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" + "    <mask id='mask-rect'>\n" + "      <rect width='100%' height='100%' fill='white'></rect>\n" + "      <svg x='50%' y='50%' overflow='visible'>\n" + "          <rect id='maskBoxInner'\n" + "            width='400' height='260'\n" + "            x='-200' y='-130'\n" + "            rx='10' ry='10'\n" + "            fill='black' stroke='black'></rect>\n" + "      </svg>\n" + "    </mask>\n" + "    <rect id='maskBoxOuter'\n" + "          x='0' y='0' width='100%' height='100%'\n" + "          fill='" + mask_frame + "' mask='url(#mask-rect)'></rect>\n" + "  </svg>";
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
            'transform': rotateAndMirrorCss
          });
        } else {
          videoStyle = _objectSpread(_objectSpread({}, videoStyle), {}, {
            '-webkit-transform': rotateCss,
            '-moz-transform': rotateCss,
            '-o-transform': rotateCss,
            '-ms-transform': rotateCss,
            'transform': rotateCss
          });
        }
      } else {
        if (_this16.__getMirrorMode()) {
          videoStyle = _objectSpread(_objectSpread({}, videoStyle), {}, {
            '-webkit-transform': mirrorCss,
            '-moz-transform': mirrorCss,
            '-o-transform': mirrorCss,
            '-ms-transform': mirrorCss,
            'transform': mirrorCss
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
      preventToFreezeVideo.innerHTML = "" + "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"margin: auto; background: none; display: block; shape-rendering: auto;\" width=\"32px\" height=\"32px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n" + "  <circle cx=\"84\" cy=\"50\" r=\"10\" fill=\"#86868600\">\n" + "    <animate attributeName=\"r\" repeatCount=\"indefinite\" dur=\"0.5555555555555556s\" calcMode=\"spline\" keyTimes=\"0;1\" values=\"10;0\" keySplines=\"0 0.5 0.5 1\" begin=\"0s\"></animate>\n" + "    <animate attributeName=\"fill\" repeatCount=\"indefinite\" dur=\"2.2222222222222223s\" calcMode=\"discrete\" keyTimes=\"0;0.25;0.5;0.75;1\" values=\"#86868600;#86868600;#86868600;#86868600;#86868600\" begin=\"0s\"></animate>\n" + "  </circle>" + "  <circle cx=\"16\" cy=\"50\" r=\"10\" fill=\"#86868600\">\n" + "    <animate attributeName=\"r\" repeatCount=\"indefinite\" dur=\"2.2222222222222223s\" calcMode=\"spline\" keyTimes=\"0;0.25;0.5;0.75;1\" values=\"0;0;10;10;10\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"0s\"></animate>\n" + "    <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"2.2222222222222223s\" calcMode=\"spline\" keyTimes=\"0;0.25;0.5;0.75;1\" values=\"16;16;16;50;84\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"0s\"></animate>\n" + "  </circle>" + "  <circle cx=\"50\" cy=\"50\" r=\"10\" fill=\"#86868600\">\n" + "    <animate attributeName=\"r\" repeatCount=\"indefinite\" dur=\"2.2222222222222223s\" calcMode=\"spline\" keyTimes=\"0;0.25;0.5;0.75;1\" values=\"0;0;10;10;10\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-0.5555555555555556s\"></animate>\n" + "    <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"2.2222222222222223s\" calcMode=\"spline\" keyTimes=\"0;0.25;0.5;0.75;1\" values=\"16;16;16;50;84\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-0.5555555555555556s\"></animate>\n" + "  </circle>" + "  <circle cx=\"84\" cy=\"50\" r=\"10\" fill=\"#86868600\">\n" + "    <animate attributeName=\"r\" repeatCount=\"indefinite\" dur=\"2.2222222222222223s\" calcMode=\"spline\" keyTimes=\"0;0.25;0.5;0.75;1\" values=\"0;0;10;10;10\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-1.1111111111111112s\"></animate>\n" + "    <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"2.2222222222222223s\" calcMode=\"spline\" keyTimes=\"0;0.25;0.5;0.75;1\" values=\"16;16;16;50;84\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-1.1111111111111112s\"></animate>\n" + "  </circle>" + "  <circle cx=\"16\" cy=\"50\" r=\"10\" fill=\"#86868600\">\n" + "    <animate attributeName=\"r\" repeatCount=\"indefinite\" dur=\"2.2222222222222223s\" calcMode=\"spline\" keyTimes=\"0;0.25;0.5;0.75;1\" values=\"0;0;10;10;10\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-1.6666666666666665s\"></animate>\n" + "    <animate attributeName=\"cx\" repeatCount=\"indefinite\" dur=\"2.2222222222222223s\" calcMode=\"spline\" keyTimes=\"0;0.25;0.5;0.75;1\" values=\"16;16;16;50;84\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-1.6666666666666665s\"></animate>\n" + "  </circle>";
      "</svg>";
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
          captureButtonSrcSVG += "<svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">";
          captureButtonSrcSVG += "  <circle id=\"captureButton\" cx=\"40\" cy=\"40\" r=\"38\" fill=\"#555555\" stroke=\"#ffffff\" stroke-width=\"4\"/>";
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
        captureButton.addEventListener("click", __onClickCaptureButton);
      }
      if (_this16.__options.usePreviewUI) {
        previewUIWrap = document.createElement('div');
        previewUIWrap.setAttribute('data-useb-ocr', 'previewUIWrap');
        var previewUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
          'flex-direction': 'column',
          'display': 'none',
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
            'width': '',
            'height': '',
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
          'height': (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          'display': 'flex',
          'flex-direction': 'column-reverse'
        });
      }
      if (middleUI) {
        _this18.__setStyle(middleUI, {
          width: reducedGuideBoxWidth - borderWidth * 2 + 'px',
          height: reducedGuideBoxHeight - borderWidth * 2 + 'px',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'padding': '10px'
        });
      }
      if (bottomUI) {
        _this18.__setStyle(bottomUI, {
          'padding-top': '10px',
          'height': (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          'display': 'flex',
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
      var maskBoxInner = maskBoxWrap.querySelector("#maskBoxInner");
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
              ssaResultList = [];

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
              _this20.__enqueueDetectedCardQueue(imgData);
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
                  throw new Error("[ERR] SSA MODE is true. but, ssaResult is null");
                }
                ssaResultList.push(ssaResult);
                if (_this20.__options.ssaMaxRetryCount > 0) {
                  var retryStartDate = new Date();
                  for (var item of _this20.__detectedCardQueue) {
                    if (ssaResult.indexOf("FAKE") > -1) {
                      _this20.__ssaRetryCount++;
                      void 0;
                      ssaResult = yield _this20.__startTruthRetry(_this20.__ocrType, _this20.__address, item);
                      if (ssaResult === null) {
                        throw new Error("[ERR] SSA MODE is true. but, ssaResult is null");
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
              void 0;
              yield _this20.__onSuccessProcess({
                ocr_type: _this20.__ocrType,
                ocr_data: parser.parseOcrResult(_this20.__ocrType, _this20.__ssaMode, ocrResult, ssaResult, _this20.__ssaRetryCount, ssaResultList),
                ocr_origin_image: imgDataUrl,
                ocr_masking_image: maskImage,
                ssa_mode: _this20.__ssaMode
              });
              _this20.__closeCamera();
              _this20.__detected = true;
              resolve();
            }
          } catch (e) {
            var errorMessage = 'Card detection error';
            if (e.message) {
              errorMessage += ": " + e.message;
            }
            void 0;
            if (e.toString().includes('memory')) {
              yield _this20.__recoveryScan();
            } else {
              yield _this20.__onFailureProcess("WA001", e, errorMessage);
              _this20.__closeCamera();
              _this20.__detected = true;
              reject();
            }
          } finally {
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

  __enqueueDetectedCardQueue(imgData) {
    // ssa retry 설정이 되어 있으거나, 수동촬영UI를 사용하는 경우, card detect 성공시 이미지 저장
    if (this.__ssaMode && this.__options.ssaMaxRetryCount > 0 || this.__options.useCaptureUI && this.__manualOCRMaxRetryCount > 0) {
      var limitSaveImageCount = Math.max(this.__options.ssaMaxRetryCount, this.__manualOCRMaxRetryCount);
      if (this.__detectedCardQueue.length === limitSaveImageCount) {
        this.__detectedCardQueue.shift();
      }
      this.__detectedCardQueue.push(imgData);
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
          "result_code": "N100",
          "result_message": "OK."
        },
        result: "success",
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
      var errorDetail = "";
      if (e !== null && e !== void 0 && e.toString()) errorDetail += e.toString();
      if (e !== null && e !== void 0 && e.stack) errorDetail += e.stack;
      var result = {
        api_response: {
          "result_code": resultCode,
          "result_message": errorMessage
        },
        result: "failed",
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJzaW1kIiwidGhyZWFkcyIsImluc3RhbmNlIiwiVXNlQk9DUiIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiTk9ORSIsIk5PVF9SRUFEWSIsIlJFQURZIiwiQ0FSRF9ERVRFQ1RfU1VDQ0VTUyIsIkNBUkRfREVURUNUX0ZBSUxFRCIsIk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MiLCJNQU5VQUxfQ0FQVFVSRV9GQUlMRUQiLCJPQ1JfUkVDT0dOSVpFRCIsIk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBIiwiT0NSX1NVQ0NFU1MiLCJPQ1JfU1VDQ0VTU19XSVRIX1NTQSIsIk9DUl9GQUlMRUQiLCJET05FIiwiTk9UX1NUQVJURUQiLCJTVEFSVEVEIiwiUFJFTE9BRElOR19TVEFUVVMiLCJPQ1JfU1RBVFVTIiwiTWFwIiwiSU5fUFJPR1JFU1MiLCJPYmplY3QiLCJzaG93Q2xpcEZyYW1lIiwic2hvd0NhbnZhc1ByZXZpZXciLCJ1c2VUb3BVSSIsInVzZVRvcFVJVGV4dE1zZyIsInVzZU1pZGRsZVVJIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUkiLCJ1c2VCb3R0b21VSVRleHRNc2ciLCJ1c2VQcmV2aWV3VUkiLCJ1c2VDYXB0dXJlVUkiLCJmcmFtZUJvcmRlclN0eWxlIiwid2lkdGgiLCJzdHlsZSIsInJhZGl1cyIsIm5vdF9yZWFkeSIsInJlYWR5IiwiZGV0ZWN0X2ZhaWxlZCIsImRldGVjdF9zdWNjZXNzIiwibWFudWFsX2NhcHR1cmVfZmFpbGVkIiwibWFudWFsX2NhcHR1cmVfc3VjY2VzcyIsInJlY29nbml6ZWQiLCJyZWNvZ25pemVkX3dpdGhfc3NhIiwib2NyX2ZhaWxlZCIsIm9jcl9zdWNjZXNzIiwib2NyX3N1Y2Nlc3Nfd2l0aF9zc2EiLCJ1c2VNYXNrRnJhbWVDb2xvckNoYW5nZSIsIm1hc2tGcmFtZVN0eWxlIiwiY2xpcF9mcmFtZSIsImJhc2VfY29sb3IiLCJ1c2VDYXB0dXJlQnV0dG9uQ29sb3JDaGFuZ2UiLCJjYXB0dXJlQnV0dG9uU3R5bGUiLCJzdHJva2VfY29sb3IiLCJyZXNvdXJjZUJhc2VVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImRldmljZUxhYmVsIiwidmlkZW9UYXJnZXRJZCIsInJvdGF0aW9uRGVncmVlIiwibWlycm9yTW9kZSIsInNzYU1heFJldHJ5Q291bnQiLCJwcmVsb2FkaW5nIiwiX3RoaXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsImlzUHJlbG9hZGVkIiwiX19wcmVsb2FkaW5nU3RhdHVzIiwiX19sb2FkUmVzb3VyY2VzIiwiX19wcmVsb2FkZWQiLCJpc0luaXRpYWxpemVkIiwiX19pbml0aWFsaXplZCIsImdldFByZWxvYWRpbmdTdGF0dXMiLCJnZXRPQ1JFbmdpbmUiLCJfX09DUkVuZ2luZSIsImluaXQiLCJzZXR0aW5ncyIsImxpY2Vuc2VLZXkiLCJFcnJvciIsIl9fbGljZW5zZSIsIm1lcmdlZE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJfX29wdGlvbnMiLCJzZXRPcHRpb24iLCJfX3dpbmRvd0V2ZW50QmluZCIsIl9fZGV2aWNlSW5mbyIsImdldE9zVmVyc2lvbiIsImdldE9wdGlvbiIsImdldE9jclR5cGUiLCJ0eXBlIiwiX19vY3JUeXBlU3RyaW5nIiwiZ2V0IiwiZ2V0VUlPcmllbnRhdGlvbiIsIl9fdWlPcmllbnRhdGlvbiIsImdldFZpZGVvT3JpZW50YXRpb24iLCJfX3ZpZGVvT3JpZW50YXRpb24iLCJzdGFydE9DUiIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIl9hcmd1bWVudHMiLCJhcmd1bWVudHMiLCJfdGhpczIiLCJvbkluUHJvZ3Jlc3NDaGFuZ2UiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfX29jclR5cGUiLCJfX3NzYU1vZGUiLCJpbmRleE9mIiwiX19vblN1Y2Nlc3MiLCJfX29uRmFpbHVyZSIsIl9fb25JblByb2dyZXNzQ2hhbmdlIiwiX190b3BVSSIsImdldE9DUkVsZW1lbnRzIiwidG9wVUkiLCJfX21pZGRsZVVJIiwibWlkZGxlVUkiLCJfX2JvdHRvbVVJIiwiYm90dG9tVUkiLCJfX2NoYW5nZVN0YWdlIiwicHJlbG9hZGluZ1N0YXR1cyIsIl9fd2FpdFByZWxvYWRlZCIsImNvbmNhdCIsIl9fc3RhcnRTY2FuIiwiZSIsInN0b3BPQ1IiLCJjbGVhbnVwIiwiX19jbG9zZUNhbWVyYSIsInNldElnbm9yZUNvbXBsZXRlIiwidmFsIiwicmVzdGFydE9DUiIsIm9jclR5cGUiLCJfdGhpczMiLCJfdGhpczQiLCJ3YWl0aW5nUmV0cnlDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hlY2siLCJzZXRUaW1lb3V0IiwiX3RoaXNfIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwic2tpcFRvdWNoQWN0aW9uZm9yWm9vbSIsImV2IiwidG91Y2hlcyIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJvbmJlZm9yZXVubG9hZCIsIl9fcGFnZUVuZCIsImhhbmRsZVJlc2l6ZSIsIl9yZWYyIiwiX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUiLCJfX3Rocm90dGxpbmdSZXNpemVUaW1lciIsImFwcGx5IiwiX190aHJvdHRsaW5nUmVzaXplRGVsYXkiLCJfX3NsZWVwIiwibXMiLCJfX2Jsb2JUb0Jhc2U2NCIsImJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIl9fZ2V0U3RyaW5nT25XYXNtSGVhcCIsImxlbmd0aEJ5dGVzIiwibGVuZ3RoQnl0ZXNVVEY4IiwiX19zdHJpbmdPbldhc21IZWFwIiwiX21hbGxvYyIsInN0cmluZ1RvVVRGOCIsIl9fc2V0VmlkZW9SZXNvbHV0aW9uIiwidmlkZW9FbGVtZW50IiwiX3RoaXM1IiwiaXNTdXBwb3J0ZWRSZXNvbHV0aW9uIiwicmVzb2x1dGlvblRleHQiLCJfX2NhbVNldENvbXBsZXRlIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0Iiwic3JjT2JqZWN0IiwiX192aWRlb1dpZHRoIiwiX192aWRlb0hlaWdodCIsIl9fZ2V0U2Nhbm5lckFkZHJlc3MiLCJfX29jclR5cGVMaXN0IiwiaW5jbHVkZXMiLCJhZGRyZXNzIiwiZGVzdHJveUNhbGxiYWNrIiwic3RyaW5nT25XYXNtSGVhcCIsImdldElEQ2FyZFNjYW5uZXIiLCJkZXN0cm95SURDYXJkU2Nhbm5lciIsImdldFBhc3Nwb3J0U2Nhbm5lciIsImRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIiLCJnZXRBbGllblNjYW5uZXIiLCJkZXN0cm95QWxpZW5TY2FubmVyIiwiZ2V0Q3JlZGl0U2Nhbm5lciIsImRlc3Ryb3lDcmVkaXRTY2FubmVyIiwiX2ZyZWUiLCJfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzIiwiX19yZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9fZ2V0QnVmZmVyIiwiX19CdWZmZXIiLCJfX3Jlc29sdXRpb25XaWR0aCIsIl9fcmVzb2x1dGlvbkhlaWdodCIsIl9fcmVzdWx0QnVmZmVyIiwiX19nZXRJbWFnZUJhc2U2NCIsIm1hc2tNb2RlIiwiY3JvcE1vZGUiLCJfdGhpczYiLCJlbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UiLCJqcGdTaXplIiwiZ2V0RW5jb2RlZEpwZ1NpemUiLCJqcGdQb2ludGVyIiwiZ2V0RW5jb2RlZEpwZ0J1ZmZlciIsInJlc3VsdFZpZXciLCJVaW50OEFycmF5IiwiSEVBUDgiLCJidWZmZXIiLCJCbG9iIiwiZGVzdHJveUVuY29kZWRKcGciLCJfX2Rlc3Ryb3lCdWZmZXIiLCJfX2Rlc3Ryb3lQcmV2SW1hZ2UiLCJfX1ByZXZJbWFnZSIsIl9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAiLCJfX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcyIsIl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayIsIl9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlIiwiX3RoaXM3IiwiX19nZXRSb3RhdGlvbkRlZ3JlZSIsIl9fZ2V0TWlycm9yTW9kZSIsIl9fY3JvcEltYWdlRnJvbVZpZGVvIiwiX3RoaXM4IiwiY2FsY1Jlc29sdXRpb25fdyIsImNhbGNSZXNvbHV0aW9uX2giLCJ2aWRlbyIsImNhbnZhcyIsInJvdGF0aW9uQ2FudmFzIiwiY2FsY0NhbnZhcyIsImNhbGNWaWRlb1dpZHRoIiwiY2FsY1ZpZGVvSGVpZ2h0IiwiY2FsY1ZpZGVvQ2xpZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbGNWaWRlb0NsaWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImNhbGNDcm9wSW1hZ2VTaXplV2lkdGgiLCJfX2Nyb3BJbWFnZVNpemVXaWR0aCIsImNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0IiwiX19jcm9wSW1hZ2VTaXplSGVpZ2h0IiwiY2FsY1ZpZGVvT3JpZW50YXRpb24iLCJfX2lzUm90YXRlZDkwb3IyNzAiLCJjYWxjTWF4U1dpZHRoIiwiY2FsY01heFNIZWlnaHQiLCJzeCIsInN5IiwicmF0aW8iLCJzV2lkdGgiLCJNYXRoIiwibWluIiwicm91bmQiLCJzSGVpZ2h0IiwiY2FsY0NvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lsbFJlYWRGcmVxdWVudGx5IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsImltZ0RhdGFVcmwiLCJ0b0RhdGFVUkwiLCJfX3JvdGF0ZSIsImRlZ3JlZSIsImltZyIsIkltYWdlIiwic3JjIiwidGVtcENhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRlbXBDb250ZXh0IiwicG9zaXRpb24iLCJoZWlnaHQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJQSSIsIm5ld0ltYWdlRGF0YSIsInJlc3RvcmUiLCJfX2lzQ2FyZGJveERldGVjdGVkIiwiX2FyZ3VtZW50czIiLCJfdGhpczkiLCJib3hUeXBlIiwicmV0cnlJbWciLCJzZXQiLCJkYXRhIiwiZGV0ZWN0X2lkY2FyZCIsIm1lc3NhZ2UiLCJ0b1N0cmluZyIsIl9fc3RhcnRSZWNvZ25pdGlvbiIsInNzYU1vZGUiLCJpc1NldElnbm9yZUNvbXBsZXRlIiwiX3RoaXMxMCIsIm9jclJlc3VsdCIsInJlc3VsdEJ1ZmZlciIsInJlY29nbml0aW9uIiwiX3JlZjQiLCJzY2FuSURDYXJkIiwic2NhblBhc3Nwb3J0Iiwic2NhbkFsaWVuIiwic2NhbkNyZWRpdCIsIl9fbWFudWFsT0NSUmV0cnlDb3VudCIsIl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCIsInF1ZXVlSWR4IiwiX19kZXRlY3RlZENhcmRRdWV1ZSIsIl9fYmx1ckNhcHR1cmVCdXR0b24iLCJfX3NldFN0eWxlIiwiZGlzcGxheSIsIl94Iiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJfX3N0YXJ0VHJ1dGgiLCJyZWplY3QiLCJzY2FuVHJ1dGgiLCJfX3N0YXJ0VHJ1dGhSZXRyeSIsIl90aGlzMTEiLCJfX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfdGhpczEyIiwiX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIiwiX3RoaXMxMyIsImlzUGFzc3BvcnQiLCJfX3NldHVwVmlkZW8iLCJfX3N0cmVhbSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfX2FkanVzdFN0eWxlIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX19vbkZhaWx1cmVQcm9jZXNzIiwic3RvcFN0cmVhbSIsImVsIiwiYXNzaWduIiwiX19jaGFuZ2VPQ1JTdGF0dXMiLCJfX29jclN0YXR1cyIsIl9hcmd1bWVudHMzIiwiX3RoaXMxNCIsImZvcmNlVXBkYXRlIiwicmVjb2duaXplZEltYWdlIiwiX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwIiwiX19pblByb2dyZXNzU3RlcCIsImd1aWRlQm94IiwibWFza0JveFdyYXAiLCJjYXB0dXJlQnV0dG9uIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiX21hc2tCb3hXcmFwJHF1ZXJ5U2VsIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIl9jYXB0dXJlQnV0dG9uJHF1ZXJ5UyIsImNhbGwiLCJfX3VwZGF0ZVByZXZpZXdVSSIsIl9faGlkZVByZXZpZXdVSSIsInByZXZpZXdVSVdyYXAiLCJwcmV2aWV3SW1hZ2UiLCJpbWdTdHlsZSIsImNvbnRleHQiLCJfX2dldElucHV0RGV2aWNlcyIsImtpbmQiLCJsYWJlbCIsIl90aGlzMTUiLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsInZpZGVvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImdldENhcGFiaWxpdGllcyIsIl9jYXAkZmFjaW5nTW9kZSIsImNhcCIsImZhY2luZ01vZGUiLCJfX2ZhY2luZ01vZGVDb25zdHJhaW50IiwiY2hlY2tVSU9yaWVudGF0aW9uIiwiY3VycmVudCIsIm9jciIsImlzQ2hhbmdlZCIsIl9fcHJldlVpT3JpZW50YXRpb24iLCJfX2NsZWFyQ3VzdG9tVUkiLCJvYmoiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfX3NldHVwRG9tRWxlbWVudHMiLCJfdGhpczE2IiwidmlkZW9XcmFwIiwiZ3VpZGVCb3hXcmFwIiwicHJldmVudFRvRnJlZXplVmlkZW8iLCJjdXN0b21VSVdyYXAiLCJjYXB0dXJlVUlXcmFwIiwiY2FwdHVyZVVJIiwicHJldmlld1VJIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJtYXJnaW4iLCJvdmVyZmxvdyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwibWFza19mcmFtZSIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJfb2JqZWN0U3ByZWFkIiwiY2FudmFzU3R5bGUiLCJsZWZ0IiwidG9wIiwiYm9yZGVyIiwicmlnaHQiLCJib3R0b20iLCJjdXN0b21VSVdyYXBTdHlsZSIsImNhcHR1cmVVSVdyYXBTdHlsZSIsImNhcHR1cmVCdXR0b25TcmNTVkciLCJ0aGF0IiwiX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbiIsInByZXZpZXdVSVdyYXBTdHlsZSIsIl9fb2NyIiwiX19jYW52YXMiLCJfX3JvdGF0aW9uQ2FudmFzIiwiX192aWRlbyIsIl9fdmlkZW9XcmFwIiwiX19ndWlkZUJveCIsIl9fZ3VpZGVCb3hXcmFwIiwiX19tYXNrQm94V3JhcCIsIl9fcHJldmVudFRvRnJlZXplVmlkZW8iLCJfX2N1c3RvbVVJV3JhcCIsIl9fY2FwdHVyZVVJV3JhcCIsIl9fY2FwdHVyZVVJIiwiX19jYXB0dXJlQnV0dG9uIiwiX19wcmV2aWV3VUlXcmFwIiwiX19wcmV2aWV3VUkiLCJfX3ByZXZpZXdJbWFnZSIsIl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbiIsImdldEF0dHJpYnV0ZSIsIl90aGlzMTciLCJkZXZpY2VJZExpc3QiLCJtYXAiLCJkZXZpY2VJZCIsImNvbnN0cmFpbnRXaWR0aCIsImNvbnN0cmFpbnRIZWlnaHQiLCJpZGVhbCIsImNvbnN0cmFpbnRzIiwiYXVkaW8iLCJ6b29tIiwiZm9jdXNNb2RlIiwid2hpdGVCYWxhbmNlTW9kZSIsImdldFVzZXJNZWRpYSIsInN0cmVhbSIsIl9hcmd1bWVudHM0IiwiX3RoaXMxOCIsImlzRmlyc3RDYWxsZWQiLCJiYXNlV2lkdGgiLCJiYXNlSGVpZ2h0Iiwic2Nhbm5lckZyYW1lUmF0aW8iLCJndWlkZUJveFdpZHRoIiwiZ3VpZGVCb3hIZWlnaHQiLCJjYWxjT2NyQ2xpZW50V2lkdGgiLCJjYWxjT2NyQ2xpZW50SGVpZ2h0IiwibmV3VmlkZW9XaWR0aCIsIm5ld1ZpZGVvSGVpZ2h0IiwiZ3VpZGVCb3hSYXRpb0J5V2lkdGgiLCJfX2d1aWRlQm94UmF0aW9CeVdpZHRoIiwidmlkZW9SYXRpb0J5SGVpZ2h0IiwiX192aWRlb1JhdGlvQnlIZWlnaHQiLCJyZWR1Y2VkR3VpZGVCb3hXaWR0aCIsIl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbyIsInJlZHVjZWRHdWlkZUJveEhlaWdodCIsInZpZGVvSW5uZXJHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXNrQm94SW5uZXIiLCJyIiwiaXNOYU4iLCJtYXNrQm94SW5uZXJXaWR0aCIsIm1heCIsIm1hc2tCb3hJbm5lckhlaWdodCIsImNhbGNTdW1PZkhlaWdodEJvdHRvbVVJQ2hpbGROb2RlcyIsIl9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2RlcyIsImNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0IiwiY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSIsInBhcnNlSW50IiwicGFkZGluZ1RvcCIsImJhc2VsaW5lIiwic3VtIiwiaXRlbSIsImNoaWxkTm9kZXMiLCJzdG9wU2NhbiIsIl90aGlzMTkiLCJfX3Jlc291cmNlc0xvYWRlZCIsInNka1N1cHBvcnRFbnYiLCJpc1N1cHBvcnRTaW1kIiwiZW52SW5mbyIsIm9zIiwib3NTaW1wbGUiLCJ1c2ViT0NSRW52SW5mbyIsInVybCIsImZldGNoIiwiaHJlZiIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwicmVnZXgiLCJzb3VyY2UiLCJyZXBsYWNlIiwiZXZhbCIsIm9uUnVudGltZUluaXRpYWxpemVkIiwiX3JlZjciLCJfeDIiLCJfX3N0YXJ0U2NhbkltcGwiLCJfdGhpczIwIiwiX19kZXRlY3RlZCIsIl9fYWRkcmVzcyIsIl9fc3NhUmV0cnlDb3VudCIsInNjYW4iLCJfcmVmOCIsImlzRGV0ZWN0ZWRDYXJkIiwic3NhUmVzdWx0Iiwic3NhUmVzdWx0TGlzdCIsInJlc29sdXRpb25fdyIsInJlc29sdXRpb25faCIsIl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlIiwicHVzaCIsInJldHJ5U3RhcnREYXRlIiwiRGF0ZSIsInJldHJ5V29ya2luZ1RpbWUiLCJfX29uU3VjY2Vzc1Byb2Nlc3MiLCJvY3JfdHlwZSIsIm9jcl9kYXRhIiwicGFyc2VPY3JSZXN1bHQiLCJvY3Jfb3JpZ2luX2ltYWdlIiwib2NyX21hc2tpbmdfaW1hZ2UiLCJzc2FfbW9kZSIsIl9fcmVjb3ZlcnlTY2FuIiwibGltaXRTYXZlSW1hZ2VDb3VudCIsInNoaWZ0IiwicmV2aWV3X3Jlc3VsdCIsIl90aGlzMjEiLCJhcGlfcmVzcG9uc2UiLCJyZXN1bHRDb2RlIiwiX3RoaXMyMiIsImVycm9yRGV0YWlsIiwic3RhY2siLCJlcnJvcl9kZXRhaWwiLCJfdGhpczIzIiwiX3RoaXMyNCIsImNhbnZhc0NvbnRleHQiLCJjbGVhclJlY3QiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQiLCJzdG9wIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZXMiOlsib2NyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiBnbG9iYWwtbW9kdWxlICovXG5pbXBvcnQgZGV0ZWN0b3IgZnJvbSAnLi9oZWxwZXJzL2RldGVjdG9yLmpzJztcbmltcG9ydCBwYXJzZXIgZnJvbSAnLi9oZWxwZXJzL3BhcnNlci5qcyc7XG5pbXBvcnQgeyBzaW1kLCB0aHJlYWRzIH0gZnJvbSAnLi9oZWxwZXJzL3dhc20tZmVhdHVyZS1kZXRlY3QuanMnO1xubGV0IGluc3RhbmNlO1xuY2xhc3MgVXNlQk9DUiB7XG4gIElOX1BST0dSRVNTID0ge1xuICAgIE5PTkU6ICdub25lJyxcbiAgICBOT1RfUkVBRFk6ICdub3RfcmVhZHknLFxuICAgIFJFQURZOiAncmVhZHknLFxuICAgIENBUkRfREVURUNUX1NVQ0NFU1M6ICdkZXRlY3Rfc3VjY2VzcycsXG4gICAgQ0FSRF9ERVRFQ1RfRkFJTEVEOiAnZGV0ZWN0X2ZhaWxlZCcsXG4gICAgTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUzogJ21hbnVhbF9jYXB0dXJlX3N1Y2Nlc3MnLFxuICAgIE1BTlVBTF9DQVBUVVJFX0ZBSUxFRDogJ21hbnVhbF9jYXB0dXJlX2ZhaWxlZCcsXG4gICAgT0NSX1JFQ09HTklaRUQ6ICdyZWNvZ25pemVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQTogJ3JlY29nbml6ZWRfd2l0aF9zc2EnLFxuICAgIE9DUl9TVUNDRVNTOiAnb2NyX3N1Y2Nlc3MnLFxuICAgIE9DUl9TVUNDRVNTX1dJVEhfU1NBOiAnb2NyX3N1Y2Nlc3Nfd2l0aF9zc2EnLFxuICAgIE9DUl9GQUlMRUQ6ICdvY3JfZmFpbGVkJ1xuICB9O1xuICBPQ1JfU1RBVFVTID0ge1xuICAgIE5PVF9SRUFEWTogLTEsXG4gICAgUkVBRFk6IDAsXG4gICAgT0NSX1NVQ0NFU1M6IDEsXG4gICAgRE9ORTogMlxuICB9O1xuICBQUkVMT0FESU5HX1NUQVRVUyA9IHtcbiAgICBOT1RfU1RBUlRFRDogLTEsXG4gICAgU1RBUlRFRDogMCxcbiAgICBET05FOiAxXG4gIH07XG5cbiAgLyoqIHB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBfX09DUkVuZ2luZSA9IG51bGw7XG4gIF9faW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgX19wcmVsb2FkZWQgPSBmYWxzZTtcbiAgX19wcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRDtcbiAgX19saWNlbnNlO1xuICBfX29jclR5cGUgPSBudWxsO1xuICBfX3NzYU1vZGUgPSBmYWxzZTtcbiAgX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuTk9UX1JFQURZO1xuICBfX21hbnVhbE9DUk1heFJldHJ5Q291bnQgPSAxMDtcbiAgX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgX19zc2FSZXRyeUNvdW50ID0gMDtcbiAgX19kZXRlY3RlZENhcmRRdWV1ZSA9IFtdO1xuICBfX29uU3VjY2VzcyA9IG51bGw7XG4gIF9fb25GYWlsdXJlID0gbnVsbDtcbiAgX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsO1xuICBfX29jclR5cGVMaXN0ID0gWydpZGNhcmQnLCAnZHJpdmVyJywgJ3Bhc3Nwb3J0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnYWxpZW4nLCAnY3JlZGl0JywgJ2lkY2FyZC1zc2EnLCAnZHJpdmVyLXNzYScsICdwYXNzcG9ydC1zc2EnLCAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLCAnYWxpZW4tc3NhJywgJ2NyZWRpdC1zc2EnXTtcbiAgX19vY3JUeXBlU3RyaW5nID0gbmV3IE1hcChbW1wiMVwiLCBcImlkY2FyZFwiXSwgW1wiMlwiLCBcImRyaXZlclwiXSwgW1wiM1wiLCBcInBhc3Nwb3J0XCJdLCBbXCI0XCIsIFwiZm9yZWlnbi1wYXNzcG9ydFwiXSwgW1wiNVwiLCBcImFsaWVuXCJdLCBbXCI1LTFcIiwgXCJhbGllblwiXSwgW1wiNS0yXCIsIFwiYWxpZW5cIl0sIFtcIjUtM1wiLCBcImFsaWVuXCJdXSk7XG4gIF9fcGFnZUVuZCA9IGZhbHNlO1xuICBfX29jcjtcbiAgX19jYW52YXM7XG4gIF9fcm90YXRpb25DYW52YXM7XG4gIF9fdmlkZW87XG4gIF9fdmlkZW9XcmFwO1xuICBfX2d1aWRlQm94O1xuICBfX2d1aWRlQm94V3JhcDtcbiAgX19tYXNrQm94V3JhcDtcbiAgX19wcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgX19jdXN0b21VSVdyYXA7XG4gIF9fdG9wVUk7XG4gIF9fbWlkZGxlVUk7XG4gIF9fYm90dG9tVUk7XG4gIF9fcHJldmlld1VJV3JhcDtcbiAgX19wcmV2aWV3VUk7XG4gIF9fcHJldmlld0ltYWdlO1xuICBfX2NhcHR1cmVVSVdyYXA7XG4gIF9fY2FwdHVyZVVJO1xuICBfX2NhcHR1cmVCdXR0b247XG4gIF9fYWRkcmVzcyA9IDA7XG4gIF9fZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgX19CdWZmZXIgPSBudWxsO1xuICBfX3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gIF9fUHJldkltYWdlID0gbnVsbDtcbiAgX19zdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgX19jYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICBfX3Jlc29sdXRpb25XaWR0aCA9IDA7XG4gIF9fcmVzb2x1dGlvbkhlaWdodCA9IDA7XG4gIF9fdmlkZW9XaWR0aCA9IDA7XG4gIF9fdmlkZW9IZWlnaHQgPSAwO1xuICBfX3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICBfX2ludGVydmFsVGltZXI7XG4gIF9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjtcbiAgX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZDtcbiAgX19zdHJlYW07XG4gIF9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gIF9fZmFjaW5nTW9kZUNvbnN0cmFpbnQgPSAnZW52aXJvbm1lbnQnO1xuICBfX3VpT3JpZW50YXRpb24gPSAnJztcbiAgX19wcmV2VWlPcmllbnRhdGlvbiA9ICcnO1xuICBfX3ZpZGVvT3JpZW50YXRpb24gPSAnJztcbiAgX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICBfX3Rocm90dGxpbmdSZXNpemVEZWxheSA9IDUwMDtcbiAgX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9IDMwMDsgLy8g7J6E7IucXG4gIF9fcmV0cnlDb3VudEdldEFkZHJlc3MgPSAwOyAvLyDsnoTsi5xcbiAgX19kZXZpY2VJbmZvO1xuICBfX2lzUm90YXRlZDkwb3IyNzAgPSBmYWxzZTtcbiAgX19pblByb2dyZXNzU3RlcCA9IHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZO1xuICBfX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PTkU7XG4gIF9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gIF9fZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSAxLjA7IC8vIOyImOygleu2iOqwgFxuICBfX3ZpZGVvUmF0aW9CeUhlaWdodCA9IDAuOTsgLy8g7IiY7KCV67aI6rCAXG4gIF9fZ3VpZGVCb3hSZWR1Y2VSYXRpbyA9IDAuODsgLy8g7IiY7KCV67aI6rCAXG4gIF9fY3JvcEltYWdlU2l6ZVdpZHRoID0gMDtcbiAgX19jcm9wSW1hZ2VTaXplSGVpZ2h0ID0gMDtcblxuICAvKiogRGVmYXVsdCBvcHRpb25zICovXG4gIF9fb3B0aW9ucyA9IG5ldyBPYmplY3Qoe1xuICAgIHNob3dDbGlwRnJhbWU6IGZhbHNlLFxuICAgIHNob3dDYW52YXNQcmV2aWV3OiBmYWxzZSxcbiAgICB1c2VUb3BVSTogdHJ1ZSxcbiAgICB1c2VUb3BVSVRleHRNc2c6IGZhbHNlLFxuICAgIHVzZU1pZGRsZVVJOiB0cnVlLFxuICAgIHVzZU1pZGRsZVVJVGV4dE1zZzogdHJ1ZSxcbiAgICB1c2VCb3R0b21VSTogdHJ1ZSxcbiAgICB1c2VCb3R0b21VSVRleHRNc2c6IGZhbHNlLFxuICAgIHVzZVByZXZpZXdVSTogdHJ1ZSxcbiAgICB1c2VDYXB0dXJlVUk6IHRydWUsXG4gICAgZnJhbWVCb3JkZXJTdHlsZToge1xuICAgICAgd2lkdGg6IDUsXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcbiAgICAgIHJhZGl1czogMjAsXG4gICAgICBub3RfcmVhZHk6ICcjMDAwMDAwJyxcbiAgICAgIC8vIOqygOyglVxuICAgICAgcmVhZHk6ICcjYjhiOGI4JyxcbiAgICAgIC8vIO2ajOyDiVxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g67O06528XG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgLy8g7ZWY64qYXG4gICAgICBtYW51YWxfY2FwdHVyZV9mYWlsZWQ6ICcjNzI1YjY3JyxcbiAgICAgIC8vIOuztOudvFxuICAgICAgbWFudWFsX2NhcHR1cmVfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgLy8g7ZWY64qYXG4gICAgICByZWNvZ25pemVkOiAnIzAwM2FjMicsXG4gICAgICAvLyDtjIzrnpFcbiAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6ICcjMDAzYWMyJyxcbiAgICAgIC8vIO2MjOuekVxuICAgICAgb2NyX2ZhaWxlZDogJyNGQTExM0QnLFxuICAgICAgLy8g67mo6rCVXG4gICAgICBvY3Jfc3VjY2VzczogJyMxNGIwMGUnLFxuICAgICAgLy8g7LSI66GdXG4gICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogJyMxNGIwMGUnIC8vIOy0iOuhnVxuICAgIH0sXG5cbiAgICB1c2VNYXNrRnJhbWVDb2xvckNoYW5nZTogdHJ1ZSxcbiAgICBtYXNrRnJhbWVTdHlsZToge1xuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLFxuICAgICAgLy8g65Sl7Y287ZSMICjsiJjsoJXrtojqsIApXG4gICAgICBiYXNlX2NvbG9yOiAnIzMzMzMzMycsXG4gICAgICAvLyDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuICAgICAgbm90X3JlYWR5OiAnIzMzMzMzMycsXG4gICAgICByZWFkeTogJyMzMzMzMzMnLFxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyMzMzMzMzMnLFxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjMjIyMjIyJyxcbiAgICAgIG1hbnVhbF9jYXB0dXJlX2ZhaWxlZDogJyMzMzMzMzMnLFxuICAgICAgbWFudWFsX2NhcHR1cmVfc3VjY2VzczogJyMyMjIyMjInLFxuICAgICAgcmVjb2duaXplZDogJyMyMjIyMjInLFxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMyMjIyMjInLFxuICAgICAgb2NyX2ZhaWxlZDogJyMxMTExMTEnLFxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTExMTExJyxcbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzExMTExMSdcbiAgICB9LFxuICAgIHVzZUNhcHR1cmVCdXR0b25Db2xvckNoYW5nZTogdHJ1ZSxcbiAgICBjYXB0dXJlQnV0dG9uU3R5bGU6IHtcbiAgICAgIHN0cm9rZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbm90X3JlYWR5OiAnIzAwMDAwMCcsXG4gICAgICByZWFkeTogJyNiOGI4YjgnLFxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIG1hbnVhbF9jYXB0dXJlX2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgbWFudWFsX2NhcHR1cmVfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgcmVjb2duaXplZDogJyMwMDNhYzInLFxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMwMDNhYzInLFxuICAgICAgb2NyX2ZhaWxlZDogJyNGQTExM0QnLFxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTRiMDBlJyxcbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzE0YjAwZSdcbiAgICB9LFxuICAgIHJlc291cmNlQmFzZVVybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICBkZXZpY2VMYWJlbDogJycsXG4gICAgdmlkZW9UYXJnZXRJZDogJycsXG4gICAgcm90YXRpb25EZWdyZWU6IDAsXG4gICAgbWlycm9yTW9kZTogZmFsc2UsXG4gICAgc3NhTWF4UmV0cnlDb3VudDogMFxuICB9KTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBhc3luYyBwcmVsb2FkaW5nKCkge1xuICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLlNUQVJURUQ7XG4gICAgICBhd2FpdCB0aGlzLl9fbG9hZFJlc291cmNlcygpO1xuICAgICAgdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkU7XG4gICAgICB0aGlzLl9fcHJlbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2luaXRpYWxpemVkO1xuICB9XG4gIGlzUHJlbG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9fcHJlbG9hZGVkO1xuICB9XG4gIGdldFByZWxvYWRpbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzO1xuICB9XG4gIGdldE9DUkVuZ2luZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZTtcbiAgfVxuICBpbml0KHNldHRpbmdzKSB7XG4gICAgaWYgKCEhIXNldHRpbmdzLmxpY2Vuc2VLZXkpIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBrZXkgaXMgZW1wdHknKTtcbiAgICB0aGlzLl9fbGljZW5zZSA9IHNldHRpbmdzLmxpY2Vuc2VLZXk7XG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuX19vcHRpb25zLCBzZXR0aW5ncyk7XG4gICAgdGhpcy5zZXRPcHRpb24obWVyZ2VkT3B0aW9ucyk7XG4gICAgdm9pZCAwO1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRoaXMuX193aW5kb3dFdmVudEJpbmQoKTtcbiAgICAgIHRoaXMuX19kZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBzZXRPcHRpb24oc2V0dGluZ3MpIHtcbiAgICB0aGlzLl9fb3B0aW9ucyA9IHNldHRpbmdzO1xuICB9XG4gIGdldE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX29wdGlvbnM7XG4gIH1cbiAgZ2V0T2NyVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vY3JUeXBlU3RyaW5nLmdldCh0eXBlKTtcbiAgfVxuICBnZXRVSU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdWlPcmllbnRhdGlvbjtcbiAgfVxuICBnZXRWaWRlb09yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX29jclR5cGUgPSB0eXBlO1xuICAgIHRoaXMuX19zc2FNb2RlID0gdGhpcy5fX29jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTE7XG4gICAgdGhpcy5fX29uU3VjY2VzcyA9IG9uU3VjY2VzcztcbiAgICB0aGlzLl9fb25GYWlsdXJlID0gb25GYWlsdXJlO1xuICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBvbkluUHJvZ3Jlc3NDaGFuZ2U7XG4gICAgaWYgKG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVRvcFVJKSB7XG4gICAgICAgIHRoaXMuX190b3BVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudG9wVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkpIHtcbiAgICAgICAgdGhpcy5fX21pZGRsZVVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5taWRkbGVVSTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSkge1xuICAgICAgICB0aGlzLl9fYm90dG9tVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmJvdHRvbVVJO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGluaXRpYWxpemVkIScpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpO1xuICAgICAgaWYgKCF0aGlzLmlzUHJlbG9hZGVkKCkgJiYgcHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRCkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIGF3YWl0IHRoaXMucHJlbG9hZGluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRCkge1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fd2FpdFByZWxvYWRlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORSkge1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFibm9ybWFsbHkgcHJlbG9hZGluZyBzdGF0dXMsIHByZWxvYWRlZDogJHt0aGlzLmlzUHJlbG9hZGVkKCl9IC8gcHJlbG9hZGluZ1N0YXR1czogJHt0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2NhbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zdG9wT0NSKCk7XG4gICAgfVxuICB9XG4gIHN0b3BPQ1IoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgdGhpcy5fX29uRmFpbHVyZSA9IG51bGw7XG4gIH1cbiAgc2V0SWdub3JlQ29tcGxldGUodmFsKSB7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5zZXRJZ25vcmVDb21wbGV0ZSh2YWwpO1xuICB9XG4gIGFzeW5jIHJlc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgIC8vIGF3YWl0IHRoaXMuc3RvcE9DUigpO1xuICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIGF3YWl0IHRoaXMuc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gIH1cblxuICAvKiogcHJpdmF0ZSBtZXRob2RzICovXG4gIGFzeW5jIF9fd2FpdFByZWxvYWRlZCgpIHtcbiAgICBsZXQgd2FpdGluZ1JldHJ5Q291bnQgPSAwO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ByZWxvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhaXRpbmdSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH07XG4gICAgICBjaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIF9fd2luZG93RXZlbnRCaW5kKCkge1xuICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKC9pcGhvbmV8aXBvZHxpcGFkLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBjb25zdCBza2lwVG91Y2hBY3Rpb25mb3Jab29tID0gZXYgPT4ge1xuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXNfLl9fcGFnZUVuZCA9IHRydWU7XG4gICAgICBfdGhpc18uY2xlYW51cCgpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy5fX29jclR5cGUpIHJldHVybjtcbiAgICAgIGlmICghX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplKSB7XG4gICAgICAgIF90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IHRydWU7XG4gICAgICAgIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IF90aGlzXy5yZXN0YXJ0T0NSKF90aGlzXy5fX29jclR5cGUsIF90aGlzXy5fX29uU3VjY2VzcywgX3RoaXNfLl9fb25GYWlsdXJlLCBfdGhpc18uX19vbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIpIHtcbiAgICAgICAgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dChoYW5kbGVSZXNpemUsIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVEZWxheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19zbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxuICBfX2Jsb2JUb0Jhc2U2NChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICB9KTtcbiAgfVxuICAvKiog65287J207IS87IqkIO2CpOulvCBoZWFwIOyXkCBhbGxvY2F0aW9uICovXG4gIF9fZ2V0U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAoISEhdGhpcy5fX2xpY2Vuc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkxpY2Vuc2UgS2V5IGlzIGVtcHR5XCIpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGhCeXRlcyA9IHRoaXMuX19PQ1JFbmdpbmUubGVuZ3RoQnl0ZXNVVEY4KHRoaXMuX19saWNlbnNlKSArIDE7XG4gICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MobGVuZ3RoQnl0ZXMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KHRoaXMuX19saWNlbnNlLCB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCwgbGVuZ3RoQnl0ZXMpO1xuICAgIHJldHVybiB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcDtcbiAgfVxuICBhc3luYyBfX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgbGV0IHJlc29sdXRpb25UZXh0ID0gJ25vdCByZWFkeSc7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX192aWRlb1dpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgdGhpcy5fX3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH07XG4gIH1cbiAgX19nZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGFkZHJlc3MgPSAwO1xuICAgICAgbGV0IGRlc3Ryb3lDYWxsYmFjayA9IG51bGw7XG4gICAgICBjb25zdCBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX2dldFN0cmluZ09uV2FzbUhlYXAoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95SURDYXJkU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRBbGllblNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95QWxpZW5TY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUNyZWRpdFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIExpY2Vuc2UgS2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcysrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFthZGRyZXNzLCBkZXN0cm95Q2FsbGJhY2tdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gOiBMaWNlbnNlIElzc3Vl7J24IOqyveyasCDsl5Drn6wg6rCS7J2EIOuwm+yVhOyEnCBlcnJvciDroZzqt7jrpbwg7LCN7J2EIOyImCDsnojqsowg7JqU7LKt7ZWE7JqUICjsnoTsi5wgTuuyiCDsnbTsg4EgYWRkcmVzc+ulvCDrqrvrsJvsnLzrqbQg6rCV7KCcIOyXkOufrClcbiAgICAgIHZvaWQgMDtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fZ2V0QnVmZmVyKCkge1xuICAgIGlmICghdGhpcy5fX0J1ZmZlcikge1xuICAgICAgdGhpcy5fX0J1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyh0aGlzLl9fcmVzb2x1dGlvbldpZHRoICogdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgKiA0KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9fcmVzdWx0QnVmZmVyKSB7XG4gICAgICB0aGlzLl9fcmVzdWx0QnVmZmVyID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKDI1Nik7XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy5fX0J1ZmZlciwgdGhpcy5fX3Jlc3VsdEJ1ZmZlcl07XG4gIH1cbiAgYXN5bmMgX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKTtcbiAgICAgIGNvbnN0IGpwZ1NpemUgPSB0aGlzLl9fT0NSRW5naW5lLmdldEVuY29kZWRKcGdTaXplKCk7XG4gICAgICBjb25zdCBqcGdQb2ludGVyID0gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnQnVmZmVyKCk7XG4gICAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fX09DUkVuZ2luZS5IRUFQOC5idWZmZXIsIGpwZ1BvaW50ZXIsIGpwZ1NpemUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0Vmlldyk7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3VsdF0sIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9fYmxvYlRvQmFzZTY0KGJsb2IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUVuY29kZWRKcGcoKTtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgYnVmZmVyICovXG4gIF9fZGVzdHJveUJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX0J1ZmZlcikge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fQnVmZmVyKTtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX3Jlc3VsdEJ1ZmZlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fcmVzdWx0QnVmZmVyKTtcbiAgICAgIHRoaXMuX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogRnJlZSBQcmV2SW1hZ2UgYnVmZmVyICovXG4gIF9fZGVzdHJveVByZXZJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5fX1ByZXZJbWFnZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fUHJldkltYWdlKTtcbiAgICAgIHRoaXMuX19QcmV2SW1hZ2UgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogZnJlZSBzdHJpbmcgaGVhcCBidWZmZXIgKi9cbiAgX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApO1xuICAgICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogZnJlZSBzY2FubmVyIGFkZHJlc3MgKi9cbiAgX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrKSB7XG4gICAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlb0VsZW1lbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH0gPSBhd2FpdCB0aGlzLl9fc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFJlc29sdXRpb24pIHtcbiAgICAgIGlmIChyZXNvbHV0aW9uVGV4dCAhPT0gJ25vdCByZWFkeScpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSZXNvbHV0aW9uO1xuICB9XG4gIF9fZ2V0Um90YXRpb25EZWdyZWUoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9fb3B0aW9ucy5yb3RhdGlvbkRlZ3JlZSAlIDM2MCArIDM2MCkgJSAzNjA7XG4gIH1cbiAgX19nZXRNaXJyb3JNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucy5taXJyb3JNb2RlO1xuICB9XG4gIGFzeW5jIF9fY3JvcEltYWdlRnJvbVZpZGVvKCkge1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSByZXR1cm4gW251bGwsIG51bGxdO1xuICAgIGxldCBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcblxuICAgIC8vIHNvdXJjZSBpbWFnZSAob3IgdmlkZW8pXG4gICAgLy8g4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIogc3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIPilIjilIjilIjilIgg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyBzeCAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBzSGVpZ2h0ICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uIGNhbnZhc1xuICAgIC8vIOKUgyAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgICAgICAgIOKUg+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICAgICAgICDilIMgICAg4pSKICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICAgICAgICBzV2lkdGggICAgICAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiBkeSAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyAgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSD4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICBkeCAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBkSGVpZ2h0IOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgIGRXaWR0aCAgICAgICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJtcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSlcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQvZHJhd0ltYWdlXG5cbiAgICBsZXQgY2FsY0NhbnZhcyA9IGNhbnZhcztcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgPSB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoLCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodF0gPSBbY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQsIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGhdO1xuICAgICAgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW2NhbGNSZXNvbHV0aW9uX2gsIGNhbGNSZXNvbHV0aW9uX3ddO1xuICAgICAgY2FsY0NhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgbGV0IGNhbGNNYXhTV2lkdGggPSA5OTk5OTtcbiAgICBsZXQgY2FsY01heFNIZWlnaHQgPSA5OTk5OTtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3gsIHN5O1xuICAgIGNvbnN0IHJhdGlvID0gY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBjb25zdCBzV2lkdGggPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplV2lkdGggKiByYXRpbyksIGNhbGNNYXhTV2lkdGgpO1xuICAgIGNvbnN0IHNIZWlnaHQgPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0ICogcmF0aW8pLCBjYWxjTWF4U0hlaWdodCk7XG4gICAgc3ggPSBNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRXaWR0aCAtIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGgpIC8gMiAqIHJhdGlvKTtcbiAgICBzeSA9IE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudEhlaWdodCAtIGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0KSAvIDIgKiByYXRpbyk7XG4gICAgY29uc3QgY2FsY0NvbnRleHQgPSBjYWxjQ2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5kZWJ1Zygnc3gsIHN5LCBzV2lkdGgocmVzb2x1dGlvbl93KSwgc0hlaWdodChyZXNvbHV0aW9uX2gpLCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCcsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCk7XG4gICAgY2FsY0NvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgMCwgMCwgY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faCk7XG4gICAgY29uc3QgaW1nRGF0YSA9IGNhbGNDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhVXJsID0gY2FsY0NhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9fcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIHRoaXMuX19nZXRSb3RhdGlvbkRlZ3JlZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtpbWdEYXRhLCBpbWdEYXRhVXJsXTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgZGVncmVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKGRlZ3JlZSA9PT0gMCkge1xuICAgICAgICByZXNvbHZlKFtpbWdEYXRhLCBpbWdEYXRhVXJsXSk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBpbWdEYXRhVXJsO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgLy8gY2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICAgIGNvbnN0IHRlbXBDb250ZXh0ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0ZW1wQ2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChbMCwgMTgwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gOTApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcuaGVpZ2h0LCAwKTtlbHNlIGlmIChkZWdyZWUgPT09IDE4MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy53aWR0aCwgaW1nLmhlaWdodCk7ZWxzZSBpZiAoZGVncmVlID09PSAyNzApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZSgwLCBpbWcud2lkdGgpO1xuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBjb25zdCBuZXdJbWFnZURhdGEgPSBbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSA/IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcuaGVpZ2h0LCBpbWcud2lkdGgpIDogdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgdGVtcENvbnRleHQpO1xuICAgICAgICByZXNvbHZlKFtuZXdJbWFnZURhdGEsIHRlbXBDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyldKTtcbiAgICAgICAgdGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCwgcmV0cnlJbWcgPSBudWxsKSB7XG4gICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPCAwKSB7XG4gICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbWdEYXRhO1xuICAgICAgbGV0IGltZ0RhdGFVcmwgPSBudWxsO1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAocmV0cnlJbWcgIT09IG51bGwpIHtcbiAgICAgICAgaW1nRGF0YSA9IHJldHJ5SW1nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgW2ltZ0RhdGEsIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy5fX2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgfVxuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmRldGVjdF9pZGNhcmQoYnVmZmVyLCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaXNDYXJkYm94RGV0ZWN0ZWQgcmVzdWx0IC09LS0tLS0nLCByZXN1bHQpXG4gICAgICByZXR1cm4gWyEhcmVzdWx0LCBpbWdEYXRhLCBpbWdEYXRhVXJsXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yIDogJyArIGU7XG4gICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCBzc2FNb2RlLCBpc1NldElnbm9yZUNvbXBsZXRlLCBpbWdEYXRhLCBpbWdEYXRhVXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhZGRyZXNzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICdjaGVja1ZhbGlkYXRpb24gRmFpbCc7XG4gICAgICB9XG4gICAgICBsZXQgb2NyUmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmICghdGhpcy5fX29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgICAgY29uc3QgcmVjb2duaXRpb24gPSBhc3luYyBpc1NldElnbm9yZUNvbXBsZXRlID0+IHtcbiAgICAgICAgaWYgKGlzU2V0SWdub3JlQ29tcGxldGUpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcywgMCwgaW1nRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuSURDYXJkKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5QYXNzcG9ydChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5BbGllbihhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkNyZWRpdChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2NyUmVzdWx0ID09PSBudWxsIHx8IG9jclJlc3VsdCA9PT0gJycgfHwgb2NyUmVzdWx0ID09PSAnZmFsc2UnIHx8IG9jclJlc3VsdFswXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgIGlmIChpc1NldElnbm9yZUNvbXBsZXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPCB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCkge1xuICAgICAgICAgICAgICAvLyBkZXRlY3RlZENhcmRRdWV1ZeyXkOyEnCDtlZzsnqXsnYQg6rq864K07IScIOqwseyLoO2VnOuLpC5cbiAgICAgICAgICAgICAgLy8g7KCA7J6l65CY7Ja07J6I64qUIOydtOuvuOyngOydmCDsiKvsnpDqsIAgcmV0cnkg67O064ukIOyekeydgOqyveyasCDrjIDruYTtlZjsl6wgJeulvCDsgqzsmqntlahcbiAgICAgICAgICAgICAgY29uc3QgcXVldWVJZHggPSB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCAlIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgIGltZ0RhdGEgPSB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVbcXVldWVJZHhdO1xuICAgICAgICAgICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVjb2duaXRpb24oaXNTZXRJZ25vcmVDb21wbGV0ZSk7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxKTsgLy8gZm9yIFVJIHVwZGF0ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8g7IKs7KeEIO2VnOyepeycvOuhnCBPQ1Ig7Iuk7YyoIChwb3B1cCDrgrTrpqzqs6Agc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpIOyymOumrD9cbiAgICAgICAgICAgICAgdGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPSAwO1xuICAgICAgICAgICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7IC8vIO2MneyXheydtCDrgrTroKTqsIjrlYwg7LKY66as65CY7KeA66eMIOuvuOumrCDsspjrpqxcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVELCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnZpZGVvLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJydcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChhd2FpdCByZWNvZ25pdGlvbihpc1NldElnbm9yZUNvbXBsZXRlKSkge1xuICAgICAgICBsZXQgY3JvcE1vZGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcImNyZWRpdFwiKSA+IC0xKSB7XG4gICAgICAgICAgY3JvcE1vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcmlnaW5JbWFnZSA9IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBmYWxzZSwgY3JvcE1vZGUpO1xuICAgICAgICBsZXQgbWFza0ltYWdlID0gYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRydWUsIGNyb3BNb2RlKTtcbiAgICAgICAgbWFza0ltYWdlID0gbWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZTtcbiAgICAgICAgaWYgKHNzYU1vZGUpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSwgZmFsc2UsIG1hc2tJbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGwsIG51bGxdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAob2NyVHlwZS5pbmRleE9mKFwiLXNzYVwiKSA+IC0xKSB7XG4gICAgICAgIC8vIFRPRE86IHdvcmtlcuulvCDsgqzsmqntlZjsl6wg66mU7J24KFVJIOuenOuNlOungSkg7Iqk66CI65Oc6rCAIOupiOy2lOyngCDslYrrj4TroZ0g7LKY66asIO2VhOyalCAo7ZiE7J6sIGxvYWRpbmcgVUkg652E7Jqw66m0IOyVoOuLiOuplOydtOyFmCDrqYjstqQpXG4gICAgICAgIC8vIFRPRE86IHNldFRpbWVvdXQg7Jy866GcIOuCmOuIhOuNlOudvOuPhCDtmqjqs7wg7JeG7J2MIHNldFRpbWVvdXQg7KeA7Jqw6rOgLCB3b3JrZXLroZwg67OA6rK9IO2VhOyalFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHRoaXMuX19PQ1JFbmdpbmUuc2NhblRydXRoKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcikpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU1NBIE1vZGUgaXMgdHJ1ZS4gYnV0LCBvY3JUeXBlIGlzIGludmFsaWQgOiAnICsgb2NyVHlwZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9fc3RhcnRUcnV0aFJldHJ5KG9jclR5cGUsIGFkZHJlc3MsIGltZ0RhdGEpIHtcbiAgICBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcywgMCwgaW1nRGF0YSk7XG4gICAgLy8gYXdhaXQgdGhpcy5fX3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgdHJ1ZSk7ICAgICAgLy8gZm9yIOyEseuKpeydhCDsnITtlbQg7KeE7ZaJIFhcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fX3N0YXJ0VHJ1dGgob2NyVHlwZSwgYWRkcmVzcyk7XG4gIH1cbiAgX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gMey0iCBkZWxheSDtm4Qg7Iuk7ZaJXG4gICAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBhc3luYyBfX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgIGNvbnN0IGlzUGFzc3BvcnQgPSB0aGlzLl9fb2NyVHlwZS5pbmNsdWRlcygncGFzc3BvcnQnKTtcbiAgICAgIGF3YWl0IHRoaXMuX19zZXR1cFZpZGVvKGlzUGFzc3BvcnQpO1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgLy8gY29uc3QgW3RyYWNrXSA9IHRoaXMuX19zdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcbiAgICAgICAgLy8gY29uc3QgY2FwYWJpbGl0eSA9IHRyYWNrLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdDYXJkU2Nhbl9faW5pdGlhbGl6ZSBjYXBhYmlsaXR5JywgY2FwYWJpbGl0eSk7XG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiB2aWRlbykge1xuICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHRoaXMuX19zdHJlYW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQXZvaWQgdXNpbmcgdGhpcyBpbiBuZXcgYnJvd3NlcnMsIGFzIGl0IGlzIGdvaW5nIGF3YXkuXG4gICAgICAgICAgdmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5fX3N0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygncHJvY2VlZENhbWVyYVBlcm1pc3Npb24gLSBvbmxvYWRlZG1ldGFkYXRhJyk7XG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICB2b2lkIDA7XG5cbiAgICAgICAgICAvLyB2aWRlbyBlbGVtZW50IHN0eWxlIOyEpOyglVxuICAgICAgICAgIHRoaXMuX192aWRlb09yaWVudGF0aW9uID0gdmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvLnZpZGVvSGVpZ2h0IDwgMSA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB0aGlzLl9fY2FtU2V0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19hZGp1c3RTdHlsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICB2aWRlby53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ05vdEFsbG93ZWRFcnJvcicpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ0NhbWVyYSBBY2Nlc3MgUGVybWlzc2lvbiBpcyBub3QgYWxsb3dlZCc7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcyhcIkU0MDNcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5uYW1lID09PSAnTm90UmVhZGFibGVFcnJvcicpIHtcbiAgICAgICAgLy8g64uk66W46rOz7JeQ7IScIOy5tOuplOudvCDsnpDsm5DsnYQg7IKs7Jqp7KSRXG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgICB0aGlzLl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpOyAvLyDsnqzqt4Ag7Zi47LacXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX19zZXRTdHlsZShlbCwgc3R5bGUpIHtcbiAgICBpZiAoZWwgJiYgc3R5bGUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHN0eWxlKTtcbiAgICB9XG4gIH1cbiAgX19jaGFuZ2VPQ1JTdGF0dXModmFsKSB7XG4gICAgc3dpdGNoICh2YWwpIHtcbiAgICAgIC8vIE9DUlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5OT1RfUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLlJFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLlJFQURZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRDpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1M6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0E6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRDpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5ET05FO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19jaGFuZ2VTdGFnZSh2YWwsIGZvcmNlVXBkYXRlID0gZmFsc2UsIHJlY29nbml6ZWRJbWFnZSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPT09IHZhbCAmJiBmb3JjZVVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2NoYW5nZU9DUlN0YXR1cyh2YWwpO1xuICAgIHRoaXMuX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIHRoaXMuX19pblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGggKyAncHgnLFxuICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuc3R5bGUsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzICsgJ3B4JyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlW3ZhbF1cbiAgICB9O1xuICAgIGlmIChndWlkZUJveCkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCBzdHlsZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYXNrRnJhbWVDb2xvckNoYW5nZSkge1xuICAgICAgbWFza0JveFdyYXA/LnF1ZXJ5U2VsZWN0b3IoXCIjbWFza0JveE91dGVyXCIpPy5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlW3ZhbF0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJICYmIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVCdXR0b25Db2xvckNoYW5nZSkge1xuICAgICAgY2FwdHVyZUJ1dHRvbj8ucXVlcnlTZWxlY3RvcihcIiNjYXB0dXJlQnV0dG9uXCIpPy5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHRoaXMuX19vcHRpb25zLmNhcHR1cmVCdXR0b25TdHlsZVt2YWxdKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VUb3BVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX190b3BVSSwgJ3RvcCcsIHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fbWlkZGxlVUksICdtaWRkbGUnLCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSwgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJIHx8IHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX2JvdHRvbVVJLCAnYm90dG9tJywgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUksIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9TVUNDRVNTIHx8IHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuXG4gICAgICAgIC8vIEZBSUzsnbgg6rK97JqwIDXstIjtm4Qg7J6Q64+Z7J2EIOywveuLq+ydjFxuICAgICAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCkge1xuICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5fX2hpZGVQcmV2aWV3VUksIDMwMDAsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9faGlkZVByZXZpZXdVSSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMSk7IC8vIGZvciBVSSB1cGRhdGVcbiAgfVxuXG4gIF9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBwcmV2aWV3SW1hZ2Uuc3JjID0gcmVjb2duaXplZEltYWdlO1xuICAgIGNvbnN0IGltZ1N0eWxlID0ge1xuICAgICAgJ21heC13aWR0aCc6ICc3MCUnLFxuICAgICAgJ21heC1oZWlnaHQnOiAnNjAlJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdJbWFnZSwgaW1nU3R5bGUpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9KTtcbiAgfVxuICBfX2hpZGVQcmV2aWV3VUkoY29udGV4dCkge1xuICAgIGxldCBfdGhpc18gPSB0aGlzO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBfdGhpc18gPSBjb250ZXh0O1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBfdGhpc18uX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICAgIF90aGlzXy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSBcIlwiO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW5wdXREZXZpY2VzKGtpbmQsIGxhYmVsKSB7XG4gICAgLy8gdGhyb3cgZXJyb3IgaWYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IHtcbiAgICAgIGlmIChkZXZpY2Uua2luZCA9PT0gYCR7a2luZH1pbnB1dGAgJiYgZGV2aWNlLmdldENhcGFiaWxpdGllcykge1xuICAgICAgICBjb25zdCBjYXAgPSBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIGlmIChjYXA/LmZhY2luZ01vZGU/LmluY2x1ZGVzKHRoaXMuX19mYWNpbmdNb2RlQ29uc3RyYWludCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiB2aWRlb0RldmljZXMubGVuZ3RoIDw9IDEgPyB2aWRlb0RldmljZXMgOiB2aWRlb0RldmljZXMuZmlsdGVyKGRldmljZSA9PiBsYWJlbCA/IGRldmljZS5sYWJlbC5pbmNsdWRlcyhsYWJlbCkgOiB0cnVlKTtcbiAgfVxuICBjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLl9fdWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBpc0NoYW5nZWRcbiAgICB9O1xuICB9XG4gIF9fY2xlYXJDdXN0b21VSShvYmopIHtcbiAgICBvYmouaW5uZXJIVE1MID0gJyc7XG4gICAgb2JqLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShvYmosIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9fc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmICghb2NyKSB0aHJvdyBuZXcgRXJyb3IoXCJvY3IgZGl2IGVsZW1lbnQgaXMgbm90IGV4aXN0XCIpO1xuICAgIGlmICh2aWRlb1dyYXApIHZpZGVvV3JhcC5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3hXcmFwKSBndWlkZUJveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHZpZGVvKSB2aWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY2FudmFzKSBjYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKHJvdGF0aW9uQ2FudmFzKSByb3RhdGlvbkNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3gpIGd1aWRlQm94LnJlbW92ZSgpO1xuICAgIGlmIChtYXNrQm94V3JhcCkgbWFza0JveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKSBwcmV2ZW50VG9GcmVlemVWaWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY3VzdG9tVUlXcmFwKSBjdXN0b21VSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8g6rCBIHRvcCwgbWlkZGxlLCBib3R0b20gVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmICh0b3BVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlVG9wVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKHRvcFVJKTtcbiAgICBpZiAobWlkZGxlVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShtaWRkbGVVSSk7XG4gICAgaWYgKGJvdHRvbVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkoYm90dG9tVUkpO1xuICAgIGlmIChjYXB0dXJlVUlXcmFwKSBjYXB0dXJlVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIGNhcHR1cmUgVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmIChjYXB0dXJlVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkoY2FwdHVyZVVJKTtcbiAgICBpZiAocHJldmlld1VJV3JhcCkgcHJldmlld1VJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBwcmV2aWV3IFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAocHJldmlld1VJICYmICF0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKHByZXZpZXdVSSk7XG4gICAgY29uc3Qgcm90YXRpb25EZWdyZWUgPSB0aGlzLl9fZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA9IFs5MCwgMjcwXS5pbmNsdWRlcyhyb3RhdGlvbkRlZ3JlZSk7XG4gICAgbGV0IG9jclN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCBvY3JTdHlsZSk7XG4gICAgY29uc3Qgd3JhcFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyB2ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcbiAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH07XG4gICAgdmlkZW9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlkZW9XcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlb1dyYXAnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB7XG4gICAgICB3aGlsZSAodmlkZW9XcmFwLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdmlkZW9XcmFwLnJlbW92ZUNoaWxkKHZpZGVvV3JhcC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUobWFza0JveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgbGV0IG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZS5iYXNlX2NvbG9yICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLl9fb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICBtYXNrX2ZyYW1lID0gdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDwvc3ZnPlxcblwiICsgXCIgICAgPC9tYXNrPlxcblwiICsgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgKyBcIiAgICAgICAgICBmaWxsPSdcIiArIG1hc2tfZnJhbWUgKyBcIicgbWFzaz0ndXJsKCNtYXNrLXJlY3QpJz48L3JlY3Q+XFxuXCIgKyBcIiAgPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQ3NzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHZpZGVvU3R5bGUpO1xuICAgIHZpZGVvV3JhcC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgZ3VpZGVCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3VpZGVCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveFdyYXAnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChndWlkZUJveFdyYXApO1xuICAgIGd1aWRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94Jyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdub25lJyA6ICdkaXNwbGF5JyA6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzBweCcsXG4gICAgICB0b3A6ICczMHB4JyxcbiAgICAgIGJvcmRlcjogJ2dyZWVuIDJweCBzb2xpZCdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByb3RhdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJvdGF0aW9uQ2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdyb3RhdGlvbkNhbnZhcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShyb3RhdGlvbkNhbnZhcywge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdkaXNwbGF5JyA6ICdub25lJyA6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnYmx1ZSAycHggc29saWQnXG4gICAgfSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHJvdGF0aW9uQ2FudmFzKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2ZW50VG9GcmVlemVWaWRlbywge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206ICcxMCcsXG4gICAgICByaWdodDogJzEwJ1xuICAgIH0pO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLmlubmVySFRNTCA9IFwiXCIgKyBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcXFwiIHdpZHRoPVxcXCIzMnB4XFxcIiBoZWlnaHQ9XFxcIjMycHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCI+XFxuXCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiODRcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIwLjU1NTU1NTU1NTU1NTU1NTZzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiB2YWx1ZXM9XFxcIjEwOzBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImZpbGxcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJkaXNjcmV0ZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjg0XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiO1xuICAgIFwiPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKTtcbiAgICBjdXN0b21VSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXN0b21VSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2N1c3RvbVVJV3JhcCcpO1xuICAgIGNvbnN0IGN1c3RvbVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjdXN0b21VSVdyYXAsIGN1c3RvbVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY3VzdG9tVUlXcmFwKTtcblxuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJIOyCrOyaqSh1c2Up7Jes67aA7JmAIOq0gOqzhOyXhuydtCDsmIHsl63snYQg7J6h6riwIOychO2VtCwgZGl26rCAIOyXhuycvOuptCDsg53shLFcbiAgICAvLyBhZGp1c3RTdHlsZSgpIOyXkOyEnCDshLjrtoDsoIHsnbgg7IKs7J207KaI7JmAIOychOy5mOqwkiDrj5nsoIHsnLzroZwg7ISk7KCV65CoLlxuICAgIGlmICghdG9wVUkpIHtcbiAgICAgIHRvcFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndG9wVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKHRvcFVJKTtcbiAgICBpZiAoIW1pZGRsZVVJKSB7XG4gICAgICBtaWRkbGVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWlkZGxlVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21pZGRsZVVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZChtaWRkbGVVSSk7XG4gICAgaWYgKCFib3R0b21VSSkge1xuICAgICAgYm90dG9tVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJvdHRvbVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdib3R0b21VSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQoYm90dG9tVUkpO1xuICAgIGNhcHR1cmVVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXB0dXJlVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYXB0dXJlVUlXcmFwJyk7XG4gICAgY29uc3QgY2FwdHVyZVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NlbnRlcidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCBjYXB0dXJlVUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYXB0dXJlVUlXcmFwKTtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB7XG4gICAgICBpZiAoIWNhcHR1cmVVSSkge1xuICAgICAgICBjYXB0dXJlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FwdHVyZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYXB0dXJlVUknKTtcbiAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghY2FwdHVyZUJ1dHRvbikge1xuICAgICAgICBjYXB0dXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhcHR1cmVCdXR0b24nKTtcbiAgICAgICAgbGV0IGNhcHR1cmVCdXR0b25TcmNTVkcgPSBgYDtcbiAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgPHN2ZyB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiB2aWV3Qm94PVwiMCAwIDgwIDgwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+YDtcbiAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgICA8Y2lyY2xlIGlkPVwiY2FwdHVyZUJ1dHRvblwiIGN4PVwiNDBcIiBjeT1cIjQwXCIgcj1cIjM4XCIgZmlsbD1cIiM1NTU1NTVcIiBzdHJva2U9XCIjZmZmZmZmXCIgc3Ryb2tlLXdpZHRoPVwiNFwiLz5gO1xuICAgICAgICBjYXB0dXJlQnV0dG9uU3JjU1ZHICs9IGA8L3N2Zz5gO1xuICAgICAgICBjYXB0dXJlQnV0dG9uLmlubmVySFRNTCA9IGNhcHR1cmVCdXR0b25TcmNTVkc7XG4gICAgICAgIGNhcHR1cmVVSS5hcHBlbmRDaGlsZChjYXB0dXJlQnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIGNhcHR1cmVVSVdyYXAuYXBwZW5kQ2hpbGQoY2FwdHVyZVVJKTtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgY29uc3QgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgIHRoYXQuX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnZpZGVvLCB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0Ll9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLCB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNhcHR1cmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9fb25DbGlja0NhcHR1cmVCdXR0b24pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICBwcmV2aWV3VUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcmV2aWV3VUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUlXcmFwJyk7XG4gICAgICBjb25zdCBwcmV2aWV3VUlXcmFwU3R5bGUgPSB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICAgICdkaXNwbGF5JzogJ25vbmUnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMDAwMDAwYWEnXG4gICAgICB9O1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHByZXZpZXdVSVdyYXBTdHlsZSk7XG4gICAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmlld1VJV3JhcCk7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIGlmICghcHJldmlld1VJKSB7XG4gICAgICAgICAgcHJldmlld1VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgcHJldmlld1VJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJLCB7XG4gICAgICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nLFxuICAgICAgICAgICd3aWR0aCc6ICcnLFxuICAgICAgICAgICdoZWlnaHQnOiAnJyxcbiAgICAgICAgICAnbWF4LXdpZHRoJzogJzkwJScsXG4gICAgICAgICAgJ21heC1oZWlnaHQnOiAnOTAlJ1xuICAgICAgICB9KTtcbiAgICAgICAgcHJldmlld1VJV3JhcC5hcHBlbmRDaGlsZChwcmV2aWV3VUkpO1xuICAgICAgICBpZiAoIXByZXZpZXdJbWFnZSkge1xuICAgICAgICAgIHByZXZpZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgIHByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld0ltYWdlJyk7XG4gICAgICAgICAgcHJldmlld1VJLmFwcGVuZENoaWxkKHByZXZpZXdJbWFnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsb2FkaW5nIFVJIOychOy5mCDsnpDrpqzsnqHqsowg7ZWY6riwIOychO2VtFxuICAgIGF3YWl0IHRoaXMuX19hZGp1c3RTdHlsZSh0cnVlKTtcblxuICAgIC8vIO2ZlOuptOqzvOuPhCDtmITsg4Eg7ZW06rKwXG4gICAgdGhpcy5fX3NldFN0eWxlKG9jciwge1xuICAgICAgZGlzcGxheTogJydcbiAgICB9KTtcbiAgICB0aGlzLl9fb2NyID0gb2NyO1xuICAgIHRoaXMuX19jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5fX3JvdGF0aW9uQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgdGhpcy5fX3ZpZGVvID0gdmlkZW87XG4gICAgdGhpcy5fX3ZpZGVvV3JhcCA9IHZpZGVvV3JhcDtcbiAgICB0aGlzLl9fZ3VpZGVCb3ggPSBndWlkZUJveDtcbiAgICB0aGlzLl9fZ3VpZGVCb3hXcmFwID0gZ3VpZGVCb3hXcmFwO1xuICAgIHRoaXMuX19tYXNrQm94V3JhcCA9IG1hc2tCb3hXcmFwO1xuICAgIHRoaXMuX19wcmV2ZW50VG9GcmVlemVWaWRlbyA9IHByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICAgIHRoaXMuX19jdXN0b21VSVdyYXAgPSBjdXN0b21VSVdyYXA7XG4gICAgdGhpcy5fX3RvcFVJID0gdG9wVUk7XG4gICAgdGhpcy5fX21pZGRsZVVJID0gbWlkZGxlVUk7XG4gICAgdGhpcy5fX2JvdHRvbVVJID0gYm90dG9tVUk7XG4gICAgdGhpcy5fX2NhcHR1cmVVSVdyYXAgPSBjYXB0dXJlVUlXcmFwO1xuICAgIHRoaXMuX19jYXB0dXJlVUkgPSBjYXB0dXJlVUk7XG4gICAgdGhpcy5fX2NhcHR1cmVCdXR0b24gPSBjYXB0dXJlQnV0dG9uO1xuICAgIHRoaXMuX19wcmV2aWV3VUlXcmFwID0gcHJldmlld1VJV3JhcDtcbiAgICB0aGlzLl9fcHJldmlld1VJID0gcHJldmlld1VJO1xuICAgIHRoaXMuX19wcmV2aWV3SW1hZ2UgPSBwcmV2aWV3SW1hZ2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9jcixcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgdmlkZW8sXG4gICAgICB2aWRlb1dyYXAsXG4gICAgICBndWlkZUJveCxcbiAgICAgIGd1aWRlQm94V3JhcCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgcHJldmVudFRvRnJlZXplVmlkZW8sXG4gICAgICBjdXN0b21VSVdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlXcmFwLFxuICAgICAgY2FwdHVyZVVJLFxuICAgICAgY2FwdHVyZUJ1dHRvbixcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9O1xuICB9XG4gIF9fYmx1ckNhcHR1cmVCdXR0b24oKSB7XG4gICAgdGhpcy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudmlkZW8sIHtcbiAgICAgIGRpc3BsYXk6ICcnXG4gICAgfSk7XG4gICAgY29uc3Qge1xuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmIChjYXB0dXJlQnV0dG9uKSB7XG4gICAgICBjYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcsICdmYWxzZScpO1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVCdXR0b24sIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBfX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHJldHVybiBjYXB0dXJlQnV0dG9uID8gY2FwdHVyZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnKSA9PT0gJ3RydWUnIDogZmFsc2U7XG4gIH1cbiAgYXN5bmMgX19zZXR1cFZpZGVvKGlzUGFzc3BvcnQpIHtcbiAgICAvLyB3YXNtIOyduOyLneyEseuKpSDstZzsoIHtmZTrkJwg7ZW07IOB64+EXG4gICAgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCA9IDEwODA7XG4gICAgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgPSA3MjA7XG4gICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSBhd2FpdCB0aGlzLl9fc2V0dXBEb21FbGVtZW50cygpO1xuICAgIGxldCB2aWRlb0RldmljZXMgPSBhd2FpdCB0aGlzLl9fZ2V0SW5wdXREZXZpY2VzKCd2aWRlbycpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb0RldmljZXMgOjogJywgdmlkZW9EZXZpY2VzKVxuICAgIGxldCBkZXZpY2VJZExpc3QgPSB2aWRlb0RldmljZXMubWFwKGRldmljZSA9PiBkZXZpY2UuZGV2aWNlSWQpO1xuICAgIHRoaXMuY2hlY2tVSU9yaWVudGF0aW9uKCk7XG4gICAgbGV0IGNvbnN0cmFpbnRXaWR0aCwgY29uc3RyYWludEhlaWdodDtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIC8vIHVpIDogcG9ydHJhaXRcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDEwODAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiA3MjAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVpIDogbGFuZHNjYXBlXG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICBtaW46IDEyODBcbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgbWluOiA3MjBcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge1xuICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgdmlkZW86IHtcbiAgICAgICAgem9vbToge1xuICAgICAgICAgIGlkZWFsOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGZhY2luZ01vZGU6IHtcbiAgICAgICAgICBpZGVhbDogdGhpcy5fX2ZhY2luZ01vZGVDb25zdHJhaW50XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgd2hpdGVCYWxhbmNlTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgZGV2aWNlSWQ6IHZpZGVvRGV2aWNlcy5sZW5ndGggPyB7XG4gICAgICAgICAgaWRlYWw6IGRldmljZUlkTGlzdFtkZXZpY2VJZExpc3QubGVuZ3RoIC0gMV1cbiAgICAgICAgfSA6IG51bGwsXG4gICAgICAgIHdpZHRoOiBjb25zdHJhaW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogY29uc3RyYWludEhlaWdodFxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDstZzstIgg7KeE7J6FIOydtOyWtOyEnCB2aWRlb0RlaXZjZSDrpqzsiqTtirjrpbwg6rCA7KC47JisIOyImCDsl4bsnLzrqbQsXG4gICAgLy8gZ2V0VXNlck1lZGlh66W8IOyehOydmCDtmLjstpztlZjsl6wg6raM7ZWc7J2EIOuwm+ydgOuSpCDri6Tsi5wg6rCA7KC47Ji0XG4gICAgaWYgKHZpZGVvRGV2aWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX19zdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgIHZpZGVvRGV2aWNlcyA9IGF3YWl0IHRoaXMuX19nZXRJbnB1dERldmljZXMoJ3ZpZGVvJyk7XG4gICAgICBkZXZpY2VJZExpc3QgPSB2aWRlb0RldmljZXMubWFwKGRldmljZSA9PiBkZXZpY2UuZGV2aWNlSWQpO1xuICAgICAgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSB2aWRlb0RldmljZXMubGVuZ3RoID8ge1xuICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0W2RldmljZUlkTGlzdC5sZW5ndGggLSAxXVxuICAgICAgfSA6IG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBkdW1wdHJhY2sgPSAoW2EsIGJdLCB0cmFjaykgPT5cbiAgICAgIC8vICAgYCR7YX0ke3RyYWNrLmtpbmQgPT0gJ3ZpZGVvJyA/ICdDYW1lcmEnIDogJ01pY3JvcGhvbmUnfSAoJHt0cmFjay5yZWFkeVN0YXRlfSk6ICR7dHJhY2subGFiZWx9JHtifWA7XG5cbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb1RyYWNrcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKSlcbiAgICAgIC8vIGNvbnN0IHN0cmVhbVNldHRpbmdzID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1DYXBhYmlsaXRpZXMgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q2FwYWJpbGl0aWVzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENvbnN0cmFpbnRzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtU2V0dGluZ3MgOjogJywgc3RyZWFtU2V0dGluZ3MpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggLyBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoIC8gc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gYXNwZWN0UmF0aW8gOjogJyArIHN0cmVhbVNldHRpbmdzLmFzcGVjdFJhdGlvKTtcblxuICAgICAgW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgIFtyb3RhdGlvbkNhbnZhcy53aWR0aCwgcm90YXRpb25DYW52YXMuaGVpZ2h0XSA9IFt0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCwgdGhpcy5fX3Jlc29sdXRpb25XaWR0aF07XG4gICAgICB9XG4gICAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICB0aGlzLl9fc3RyZWFtID0gc3RyZWFtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fYWRqdXN0U3R5bGUoaXNGaXJzdENhbGxlZCA9IGZhbHNlKSB7XG4gICAgdm9pZCAwO1xuICAgIGNvbnN0IHtcbiAgICAgIG9jcixcbiAgICAgIHZpZGVvLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG5cbiAgICAvLyDquLDspIDsoJXrs7RcbiAgICBjb25zdCBiYXNlV2lkdGggPSA0MDA7XG4gICAgY29uc3QgYmFzZUhlaWdodCA9IDI2MDtcbiAgICBjb25zdCBzY2FubmVyRnJhbWVSYXRpbyA9IGJhc2VIZWlnaHQgLyBiYXNlV2lkdGg7IC8vIOyLoOu2hOymnSDruYTsnKhcblxuICAgIGxldCBndWlkZUJveFdpZHRoLCBndWlkZUJveEhlaWdodDtcbiAgICBsZXQgY2FsY09jckNsaWVudFdpZHRoID0gb2NyLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjT2NyQ2xpZW50SGVpZ2h0ID0gb2NyLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aDtcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBuZXdWaWRlb1dpZHRoID0gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgbGV0IG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy5fX2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuX192aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUlcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCB7XG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2ZsZXgtZW5kJ1xuICAgICAgfSk7XG4gICAgICAvLyB2aWRlbyDqsIDroZwg6riw7KSAIDEwMCUg7Jyg7KeAICjrs4Dqsr3sl4bsnYwpXG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuPhCDshLjroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDsubTrqZTrnbzripQg6rCA66GcXG4gICAgICAgIC8vIOyEuOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqTrpbwg67mE65SU7JikIOyEuOuhnCDquLjsnbTsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDqsIDroZwgVUlcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCB7XG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnZW5kJyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcidcbiAgICAgIH0pO1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDruYTrlJTsmKTrpbwg6rCA66GcIFVJ7J2YIGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIC8vIOqwgOuhnCBVSSBoZWlnaHQg6riw7KSA7Jy866GcIOu5hOuUlOyYpOydmCB3aWR0aCDqs4TsgrBcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gbmV3VmlkZW9IZWlnaHQgKiAoY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9IZWlnaHQpO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOuKlCDruYTrlJTsmKTrpbwg7IS466GcIOq4sOykgOycvOuhnCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBuZXdWaWRlb0hlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCBoZWlnaHQg7YGs6riw66W8IFVJ7J2YIGhlaWdodCDquLDspIDsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIOy2leyGjFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGggPSBNYXRoLm1pbihndWlkZUJveFdpZHRoLCBuZXdWaWRlb1dpZHRoKTtcbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IE1hdGgubWluKGd1aWRlQm94SGVpZ2h0LCBuZXdWaWRlb0hlaWdodCk7XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94V2lkdGggPSBndWlkZUJveFdpZHRoICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hIZWlnaHQgKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBpZiAodG9wVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh0b3BVSSwge1xuICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnMTBweCcsXG4gICAgICAgICdoZWlnaHQnOiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICAgICdwYWRkaW5nJzogJzEwcHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgICAnaGVpZ2h0JzogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvV2lkdGggIT09IGNhbGNWaWRlb0NsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvSGVpZ2h0ICE9PSBjYWxjVmlkZW9DbGllbnRIZWlnaHQpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICBoZWlnaHQ6IG5ld1ZpZGVvSGVpZ2h0ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIjbWFza0JveElubmVyXCIpO1xuICAgIGxldCByID0gYm9yZGVyUmFkaXVzIC0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHIgPSByIDwgMCA/IDAgOiByO1xuICAgIGlmICghaXNOYU4ocmVkdWNlZEd1aWRlQm94V2lkdGgpICYmICFpc05hTihyZWR1Y2VkR3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lckhlaWdodCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBtYXNrQm94SW5uZXJXaWR0aCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIG1hc2tCb3hJbm5lckhlaWdodCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3gnLCBtYXNrQm94SW5uZXJXaWR0aCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3knLCBtYXNrQm94SW5uZXJIZWlnaHQgLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIHIgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeScsIHIgKyAnJyk7XG4gICAgfVxuXG4gICAgLy8g7IiY64+ZIOy0rOyYgSBVSSDsgqzsmqlcbiAgICAvLyBmaXJzdENhbGxlZOyduCDqsr3smrAg7JWE7KeBIGNhcHR1cmVVSeqwgCDqt7jroKTsp4Dsp4Ag7JWK7JWEIOustOydmOuvuFxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkgJiYgIWlzRmlyc3RDYWxsZWQpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnICYmIGJvdHRvbVVJICYmIGNhcHR1cmVVSSkge1xuICAgICAgICBjb25zdCBjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXMgPSB0aGlzLl9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2Rlcyhib3R0b21VSSk7XG4gICAgICAgIGxldCBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9IGNhcHR1cmVCdXR0b24ucXVlcnlTZWxlY3Rvcignc3ZnJykuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPSBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9PT0gMCA/IDgwIDogY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQ7XG4gICAgICAgIGxldCBjYXB0dXJlVUlQYWRkaW5nQm90dG9tID0gYm90dG9tVUkuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIC09IGlzTmFOKHBhcnNlSW50KGJvdHRvbVVJLnN0eWxlLnBhZGRpbmdUb3ApKSA/IDAgOiBwYXJzZUludChib3R0b21VSS5zdHlsZS5wYWRkaW5nVG9wKTtcbiAgICAgICAgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSAtPSBjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXM7XG4gICAgICAgIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gLT0gY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQ7XG4gICAgICAgIGNvbnN0IGJhc2VsaW5lID0gY2FsY09jckNsaWVudEhlaWdodCAtIChjYWxjT2NyQ2xpZW50SGVpZ2h0IC8gMiArIGd1aWRlQm94SGVpZ2h0IC8gMik7XG4gICAgICAgIGlmIChjYXB0dXJlVUlQYWRkaW5nQm90dG9tID4gMCAmJiBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIDwgYmFzZWxpbmUpIHtcbiAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgICAgICAncGFkZGluZy1yaWdodCc6ICcnLFxuICAgICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgICdwYWRkaW5nLXJpZ2h0JzogJzEwcHgnLFxuICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0cnVlKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19jYWxjU3VtT2ZIZWlnaHRDaGlsZE5vZGVzKG9iaikge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBvYmo/LmNoaWxkTm9kZXMpIHtcbiAgICAgIHN1bSArPSBpdGVtLmNsaWVudEhlaWdodCA/IGl0ZW0uY2xpZW50SGVpZ2h0IDogMDtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfVxuICBfX2Nsb3NlQ2FtZXJhKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cbiAgYXN5bmMgX19sb2FkUmVzb3VyY2VzKCkge1xuICAgIHZvaWQgMDtcbiAgICBpZiAodGhpcy5fX3Jlc291cmNlc0xvYWRlZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2RrU3VwcG9ydEVudiA9ICdxdXJhbSc7XG4gICAgbGV0IGlzU3VwcG9ydFNpbWQgPSBhd2FpdCBzaW1kKCk7XG4gICAgbGV0IGVudkluZm8gPSAnJztcbiAgICBlbnZJbmZvICs9IGBvcyA6ICR7dGhpcy5fX2RldmljZUluZm8ub3N9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBvc1NpbXBsZSA6ICR7dGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGV9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBzaW1kKHdhc20tZmVhdHVyZS1kZXRlY3QpIDogJHtpc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgaWYgKHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnSU9TJyB8fCB0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZSA9PT0gJ01BQycpIHtcbiAgICAgIGlzU3VwcG9ydFNpbWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZW52SW5mbyArPSBgaXNTdXBwb3J0U2ltZChmaW5hbCkgOiAke2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBVc2VyQWdlbnQgOiAke25hdmlnYXRvci51c2VyQWdlbnR9XFxuYDtcbiAgICBpZiAoaXNTdXBwb3J0U2ltZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgc2RrU3VwcG9ydEVudiArPSAnX3NpbWQuanMnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBzZGtTdXBwb3J0RW52ICs9ICcuanMnO1xuICAgIH1cbiAgICB2b2lkIDA7XG4gICAgd2luZG93LnVzZWJPQ1JFbnZJbmZvID0gZW52SW5mbztcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNka1N1cHBvcnRFbnYsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xuICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG5cbiAgICAgIC8vIGRhdGEobW9kZWwpXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcKGZ1bmN0aW9uXFwoXFwpIFxcey9tLCAndmFyIGNyZWF0ZU1vZGVsRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnLCAnICAgcmVqZWN0KCk7XFxuJyArICcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgfSwgaGFuZGxlRXJyb3IpJywgJyAgcmVzb2x2ZSgpO1xcbicgKyAnICB9LCBoYW5kbGVFcnJvciknKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFx9XFwpXFwoXFwpOy9tLCAnXFxuIH0pXFxuJyArICd9OycpO1xuXG4gICAgICAvLyB3YXNtXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgncXVyYW0ud2FzbScsIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWYpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL1JFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXXF1cmFtXFwuZGF0YVtcIiddL2dtLCBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwiJHtuZXcgVVJMKCdxdXJhbS5kYXRhJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmfVwiYCk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnZnVuY3Rpb24gY3JlYXRlV2FzbScsICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnaW5zdGFudGlhdGVBc3luYygpOycsICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7Jyk7XG5cbiAgICAgIC8vIHdhc20gYW5kIGRhdGEobW9kZWwpIGZpbGUg67OR66Cs66GcIGZldGNoIO2VmOq4sCDsnITtlbRcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gc3RhcnRcIilcXG4nICsgJ2F3YWl0IChhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkV2FzbSA9IGZhbHNlO1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWREYXRhID0gZmFsc2U7XFxuJyArICcgICAgY3JlYXRlV2FzbSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkV2FzbSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkRGF0YSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KTtcXG4nICsgJyAgICBjcmVhdGVNb2RlbERhdGEoKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZERhdGEgPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZFdhc20pIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSlcXG4nICsgJyAgfSk7XFxuJyArICd9KSgpO1xcbicgKyAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIGVuZFwiKScpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9KTtcbiAgICBzcmMgPSBgXG4gICAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgJHtzcmN9XG4gICAgICBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4ID0gbGVuZ3RoQnl0ZXNVVEY4XG4gICAgICBNb2R1bGUuc3RyaW5nVG9VVEY4ID0gc3RyaW5nVG9VVEY4XG4gICAgICByZXR1cm4gTW9kdWxlXG4gICAgfSkoKVxuICAgICAgICBgO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCA9IGFzeW5jIF8gPT4ge1xuICAgICAgdm9pZCAwO1xuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpO1xuICAgIHRoaXMuX19yZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX3N0YXJ0U2NhbkltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX19kZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7XG4gICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgIHRoaXMuX19hZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuX19wYWdlRW5kID0gZmFsc2U7XG4gICAgICAvLyDrsKnslrTsvZTrk5wg66y47J6Q6rCA65Ok7Ja06rCAIOyeiOuKlOqyveyasFxuICAgICAgdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA9IGlzTmFOKHBhcnNlSW50KHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQpKSA/IDAgOiBwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KTtcbiAgICAgIHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgICAgIHRoaXMuX19zc2FSZXRyeUNvdW50ID0gMDtcbiAgICAgIGNvbnN0IHNjYW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgICBpc0RldGVjdGVkQ2FyZCA9IG51bGwsXG4gICAgICAgICAgICBpbWdEYXRhID0gbnVsbCxcbiAgICAgICAgICAgIGltZ0RhdGFVcmwgPSBudWxsLFxuICAgICAgICAgICAgbWFza0ltYWdlID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgICBzc2FSZXN1bHRMaXN0ID0gW107XG5cbiAgICAgICAgICAvLyBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICAgIGlmICghdGhpcy5fX09DUkVuZ2luZVsnYXNtJ10pIHJldHVybjtcblxuICAgICAgICAgIC8vIFRPRE8gOiDshKTsoJXtlaDsiJgg7J6I6rKMIOuzgOqyvSAgZGVmYXVsdCDqsJLrj4Qg7KCc6rO1XG4gICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25fdywgcmVzb2x1dGlvbl9oXSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdmlkZW9cbiAgICAgICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICBpZiAocmVzb2x1dGlvbl93ID09PSAwIHx8IHJlc29sdXRpb25faCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgIGlmICh0aGlzLl9fZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBiZWZvcmUgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG4gICAgICAgICAgaWYgKHRoaXMuX19hZGRyZXNzID09PSAwICYmICF0aGlzLl9fcGFnZUVuZCAmJiAoYXdhaXQgdGhpcy5fX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpKSB7XG4gICAgICAgICAgICBbdGhpcy5fX2FkZHJlc3MsIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrXSA9IHRoaXMuX19nZXRTY2FubmVyQWRkcmVzcyh0aGlzLl9fb2NyVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5fX2FkZHJlc3MgfHwgdGhpcy5fX3BhZ2VFbmQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBhZnRlciAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9fb2NyU3RhdHVzIDwgdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBPQ1Ig7JmE66OMIOydtOyghCDsg4Htg5xcblxuICAgICAgICAgICAgLy8gY2FyZCBub3QgZGV0ZWN0ZWRcbiAgICAgICAgICAgIFtpc0RldGVjdGVkQ2FyZCwgaW1nRGF0YSwgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQodGhpcy5fX2FkZHJlc3MsIDApO1xuICAgICAgICAgICAgaWYgKCFpc0RldGVjdGVkQ2FyZCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLlJFQURZKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfRkFJTEVEKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCwgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpOyAvLyDtlYTsmpTtlZzqsIA/XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhcmQgaXMgZGV0ZWN0ZWRcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX1NVQ0NFU1MpO1xuXG4gICAgICAgICAgICAvLyBzc2EgcmV0cnkg7ISk7KCV7J20IOuQmOyWtCDsnojsnLzqsbDrgpgsIOyImOuPmey0rOyYgVVJ66W8IOyCrOyaqe2VmOuKlCDqsr3smrAsIGNhcmQgZGV0ZWN0IOyEseqzteyLnCDsnbTrr7jsp4Ag7KCA7J6lXG4gICAgICAgICAgICB0aGlzLl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUywgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlXSA9IGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKHRoaXMuX19hZGRyZXNzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCksIGltZ0RhdGEsIGltZ0RhdGFVcmwpO1xuXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgLy8gICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgICAgICAgIC8vICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7ICAgICAgICAvLyDtlYTsmpTtlZzqsIA/XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPj0gdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBvY3Ig7JmE66OMIOydtO2bhCDsg4Htg5xcblxuICAgICAgICAgICAgLy8gZmFpbHVyZSBjYXNlXG4gICAgICAgICAgICBpZiAob2NyUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9DUiBTdGF0dXMgaXMgJHt0aGlzLl9fb2NyU3RhdHVzfSwgYnV0IG9jclJlc3VsdCBpcyBmYWxzZWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pOyAvLyBPQ1Ig7JmE66OMIOyLnOygkOyXkCBjYW1lcmEgcHJldmlldyBvZmZcblxuICAgICAgICAgICAgaWYgKHRoaXMuX19zc2FNb2RlKSB7XG4gICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgLy8g7LWc7LSIIOyLnOuPhFxuICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2FkZHJlc3MpO1xuICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW0VSUl0gU1NBIE1PREUgaXMgdHJ1ZS4gYnV0LCBzc2FSZXN1bHQgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzc2FSZXN1bHRMaXN0LnB1c2goc3NhUmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldHJ5U3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0LmluZGV4T2YoXCJGQUtFXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3NzYVJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aFJldHJ5KHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHJ5V29ya2luZ1RpbWUgPSBuZXcgRGF0ZSgpIC0gcmV0cnlTdGFydERhdGU7XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX29uU3VjY2Vzc1Byb2Nlc3Moe1xuICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgICAgICAgIG9jcl9kYXRhOiBwYXJzZXIucGFyc2VPY3JSZXN1bHQodGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCBvY3JSZXN1bHQsIHNzYVJlc3VsdCwgdGhpcy5fX3NzYVJldHJ5Q291bnQsIHNzYVJlc3VsdExpc3QpLFxuICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiBpbWdEYXRhVXJsLFxuICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogbWFza0ltYWdlLFxuICAgICAgICAgICAgICBzc2FfbW9kZTogdGhpcy5fX3NzYU1vZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3InO1xuICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBcIjogXCIgKyBlLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3JlY292ZXJ5U2NhbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcyhcIldBMDAxXCIsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9fZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2NhbiwgMSk7IC8vIOyerOq3gFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8gVUkg656c642U66eBIGJsb2NraW5nIOuwqeyngCAoc2V0VGltZW91dClcbiAgICB9KTtcbiAgfVxuXG4gIF9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEpIHtcbiAgICAvLyBzc2EgcmV0cnkg7ISk7KCV7J20IOuQmOyWtCDsnojsnLzqsbDrgpgsIOyImOuPmey0rOyYgVVJ66W8IOyCrOyaqe2VmOuKlCDqsr3smrAsIGNhcmQgZGV0ZWN0IOyEseqzteyLnCDsnbTrr7jsp4Ag7KCA7J6lXG4gICAgaWYgKHRoaXMuX19zc2FNb2RlICYmIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPiAwIHx8IHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSAmJiB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgIGxldCBsaW1pdFNhdmVJbWFnZUNvdW50ID0gTWF0aC5tYXgodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCwgdGhpcy5fX21hbnVhbE9DUk1heFJldHJ5Q291bnQpO1xuICAgICAgaWYgKHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5sZW5ndGggPT09IGxpbWl0U2F2ZUltYWdlQ291bnQpIHtcbiAgICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUucHVzaChpbWdEYXRhKTtcbiAgICAgIHZvaWQgMDsgLy8gc2hvdWxkIGJlIHJlbW92ZWRcbiAgICB9XG4gIH1cblxuICBhc3luYyBfX29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCkge1xuICAgIC8vIOyduOyLnSDshLHqs7Ug7Iqk7LqUIOujqO2UhCDsooXro4xcbiAgICBpZiAocmV2aWV3X3Jlc3VsdC5zc2FfbW9kZSkge1xuICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0EpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUyk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICBcInJlc3VsdF9jb2RlXCI6IFwiTjEwMFwiLFxuICAgICAgICBcInJlc3VsdF9tZXNzYWdlXCI6IFwiT0suXCJcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwic3VjY2Vzc1wiLFxuICAgICAgcmV2aWV3X3Jlc3VsdDogcmV2aWV3X3Jlc3VsdFxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vblN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fb25GYWlsdXJlUHJvY2VzcyhyZXN1bHRDb2RlLCBlLCBlcnJvck1lc3NhZ2UpIHtcbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEKTtcbiAgICBsZXQgZXJyb3JEZXRhaWwgPSBcIlwiO1xuICAgIGlmIChlPy50b1N0cmluZygpKSBlcnJvckRldGFpbCArPSBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGU/LnN0YWNrKSBlcnJvckRldGFpbCArPSBlLnN0YWNrO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICBcInJlc3VsdF9jb2RlXCI6IHJlc3VsdENvZGUsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogZXJyb3JNZXNzYWdlXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiBcImZhaWxlZFwiLFxuICAgICAgcmV2aWV3X3Jlc3VsdDoge1xuICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgIGVycm9yX2RldGFpbDogZXJyb3JEZXRhaWxcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0aGlzLl9fb25GYWlsdXJlKSB7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlKHJlc3VsdCk7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3N0YXJ0U2NhbigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuSW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyBfX3JlY292ZXJ5U2NhbigpIHtcbiAgICB2b2lkIDA7XG4gICAgdGhpcy5fX3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuKCk7XG4gIH1cbiAgc3RvcFNjYW4oKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9XG4gIHN0b3BTdHJlYW0oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy5fX3N0cmVhbSkge1xuICAgICAgdGhpcy5fX3N0cmVhbS5zdG9wICYmIHRoaXMuX19zdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzICYmIHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhY2tzLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdHJlYW0gPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiog66mU66qo66asIGFsbG9jYXRpb24gZnJlZSDtlajsiJggKi9cbiAgY2xlYW51cCgpIHtcbiAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJBZGRyZXNzKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lCdWZmZXIoKTtcbiAgICB0aGlzLl9fZGVzdHJveVByZXZJbWFnZSgpO1xuICAgIHRoaXMuX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpO1xuICB9XG4gIF9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIGlmICh0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKTtcbiAgICAgIHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVzZUJPQ1I7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU9BLFFBQVEsTUFBTSx1QkFBdUI7QUFDNUMsT0FBT0MsTUFBTSxNQUFNLHFCQUFxQjtBQUN4QyxTQUFTQyxJQUFJLEVBQUVDLE9BQU8sUUFBUSxrQ0FBa0M7QUFDaEUsSUFBSUMsUUFBUTtBQUNaLE1BQU1DLE9BQU8sQ0FBQztFQTJCWjs7RUFFQTs7RUE2RGlDO0VBQ0w7O0VBTUU7RUFDRjtFQUNDOztFQUk3Qjs7RUFnRkE7RUFDQUMsV0FBV0EsQ0FBQSxFQUFHO0lBQUFDLGVBQUEsc0JBdkxBO01BQ1pDLElBQUksRUFBRSxNQUFNO01BQ1pDLFNBQVMsRUFBRSxXQUFXO01BQ3RCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxtQkFBbUIsRUFBRSxnQkFBZ0I7TUFDckNDLGtCQUFrQixFQUFFLGVBQWU7TUFDbkNDLHNCQUFzQixFQUFFLHdCQUF3QjtNQUNoREMscUJBQXFCLEVBQUUsdUJBQXVCO01BQzlDQyxjQUFjLEVBQUUsWUFBWTtNQUM1QkMsdUJBQXVCLEVBQUUscUJBQXFCO01BQzlDQyxXQUFXLEVBQUUsYUFBYTtNQUMxQkMsb0JBQW9CLEVBQUUsc0JBQXNCO01BQzVDQyxVQUFVLEVBQUU7SUFDZCxDQUFDO0lBQUFaLGVBQUEscUJBQ1k7TUFDWEUsU0FBUyxFQUFFLENBQUMsQ0FBQztNQUNiQyxLQUFLLEVBQUUsQ0FBQztNQUNSTyxXQUFXLEVBQUUsQ0FBQztNQUNkRyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBQUFiLGVBQUEsNEJBQ21CO01BQ2xCYyxXQUFXLEVBQUUsQ0FBQyxDQUFDO01BQ2ZDLE9BQU8sRUFBRSxDQUFDO01BQ1ZGLElBQUksRUFBRTtJQUNSLENBQUM7SUFBQWIsZUFBQSxzQkFLYSxJQUFJO0lBQUFBLGVB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
