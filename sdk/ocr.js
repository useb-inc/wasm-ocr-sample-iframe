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
        recognized: '#222222',
        recognized_with_ssa: '#222222',
        ocr_failed: '#111111',
        ocr_success: '#111111',
        ocr_success_with_ssa: '#111111'
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
      _this2.__changeStage(_this2.IN_PROGRESS.NOT_READY);
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
    var isSupportedResolution = false;
    var resolutionText = 'not ready';
    if (!this.__camSetComplete) {
      return {
        isSupportedResolution,
        resolutionText
      };
    }
    if (videoElement.videoWidth === 0 && videoElement.videoHeight === 0) {
      this.__changeStage(this.IN_PROGRESS.NOT_READY);
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
    this.__videoWidth = videoElement.videoWidth;
    this.__videoHeight = videoElement.videoHeight;
    return {
      isSupportedResolution,
      resolutionText
    };
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
    var _this5 = this;
    return _asyncToGenerator(function* () {
      try {
        _this5.__OCREngine.encodeJpgDetectedFrameImage(address, maskMode, cropMode);
        var jpgSize = _this5.__OCREngine.getEncodedJpgSize();
        var jpgPointer = _this5.__OCREngine.getEncodedJpgBuffer();
        var resultView = new Uint8Array(_this5.__OCREngine.HEAP8.buffer, jpgPointer, jpgSize);
        var result = new Uint8Array(resultView);
        var blob = new Blob([result], {
          type: 'image/jpeg'
        });
        return yield _this5.__blobToBase64(blob);
      } catch (e) {
        void 0;
        throw e;
      } finally {
        _this5.__OCREngine.destroyEncodedJpg();
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
    var {
      isSupportedResolution,
      resolutionText
    } = this.__setVideoResolution(videoElement);
    if (!isSupportedResolution) {
      if (resolutionText !== 'not ready') {
        void 0;
      }
    }
    return isSupportedResolution;
  }
  __getRotationDegree() {
    return (this.__options.rotationDegree % 360 + 360) % 360;
  }
  __getMirrorMode() {
    return this.__options.mirrorMode;
  }
  __cropImageFromVideo() {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      if (!_this6.__camSetComplete) return [null, null];
      var [calcResolution_w, calcResolution_h] = [_this6.__resolutionWidth, _this6.__resolutionHeight];
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
      var calcCropImageSizeWidth = _this6.__cropImageSizeWidth;
      var calcCropImageSizeHeight = _this6.__cropImageSizeHeight;
      var calcVideoOrientation = _this6.__videoOrientation;
      if (_this6.__isRotated90or270) {
        [calcCropImageSizeWidth, calcCropImageSizeHeight] = [calcCropImageSizeHeight, calcCropImageSizeWidth];
        [calcResolution_w, calcResolution_h] = [calcResolution_h, calcResolution_w];
        calcCanvas = rotationCanvas;
        calcVideoOrientation = _this6.__videoOrientation === 'portrait' ? 'landscape' : 'portrait';
      }
      var calcMaxSWidth = 99999;
      var calcMaxSHeight = 99999;
      if (_this6.__uiOrientation === 'portrait') {
        if (calcVideoOrientation === _this6.__uiOrientation) {
          // 세로 UI / 세로 카메라
          calcMaxSWidth = calcVideoWidth;
          calcMaxSHeight = calcVideoHeight;
        } else {
          // 세로 UI / 가로 카메라
          calcMaxSHeight = calcVideoHeight;
        }
      } else {
        if (calcVideoOrientation === _this6.__uiOrientation) {
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
      if (_this6.__isRotated90or270) {
        return yield _this6.__rotate(imgData, imgDataUrl, _this6.__getRotationDegree());
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
      _this7 = this;
    return _asyncToGenerator(function* () {
      var boxType = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 0;
      var retryImg = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : null;
      if (!address || address < 0) {
        return [false, null];
      }
      try {
        var imgData;
        var [buffer] = _this7.__getBuffer();
        if (retryImg !== null) {
          imgData = retryImg;
        } else {
          [imgData] = yield _this7.__cropImageFromVideo();
        }
        if (!!!imgData) {
          return [false, null];
        }
        _this7.__OCREngine.HEAP8.set(imgData.data, buffer);
        var result = _this7.__OCREngine.detect_idcard(buffer, _this7.__resolutionWidth, _this7.__resolutionHeight, address, boxType);
        // console.log('isCardboxDetected result -=-----', result)
        return [!!result, imgData];
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
  __startRecognition(address, ocrType, ssaMode) {
    var _this8 = this;
    return _asyncToGenerator(function* () {
      try {
        if (address === null) {
          return '';
        } else if (address === -1) {
          return 'checkValidation Fail';
        }
        var ocrResult = null;
        if (!_this8.__ocrTypeList.includes(ocrType)) throw new Error('Unsupported OCR type');
        var [, resultBuffer] = _this8.__getBuffer();
        switch (ocrType) {
          case 'idcard':
          case 'driver':
          case 'idcard-ssa':
          case 'driver-ssa':
            ocrResult = _this8.__OCREngine.scanIDCard(address, resultBuffer);
            break;
          case 'passport':
          case 'foreign-passport':
          case 'passport-ssa':
          case 'foreign-passport-ssa':
            ocrResult = _this8.__OCREngine.scanPassport(address, resultBuffer);
            break;
          case 'alien':
          case 'alien-ssa':
            ocrResult = _this8.__OCREngine.scanAlien(address, resultBuffer);
            break;
          case 'credit':
          case 'credit-ssa':
            ocrResult = _this8.__OCREngine.scanCredit(address, resultBuffer);
            break;
          default:
            throw new Error('Scanner does not exists');
        }
        if (ocrResult === null || ocrResult === '' || ocrResult === 'false' || ocrResult[0] === 'false') {
          return [false, null, null];
        } else {
          var cropMode = false;
          if (ocrType.indexOf("credit") > -1) {
            cropMode = true;
          }
          var originImage = yield _this8.__getImageBase64(address, false, cropMode);
          var maskImage = yield _this8.__getImageBase64(address, true, cropMode);
          maskImage = maskImage === 'data:' ? null : maskImage;
          if (ssaMode) {
            _this8.__changeStage(_this8.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA, false, maskImage);
          } else {
            _this8.__changeStage(_this8.IN_PROGRESS.OCR_RECOGNIZED);
          }
          return [ocrResult, originImage, maskImage];
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
    var _this9 = this;
    return _asyncToGenerator(function* () {
      yield _this9.__isCardboxDetected(address, 0, imgData);
      // await this.__startRecognition(address, ocrType, true);      // for 성능을 위해 진행 X
      return yield _this9.__startTruth(ocrType, address);
    })();
  }
  __setCameraPermissionTimeoutTimer() {
    var _this10 = this;
    this.__clearCameraPermissionTimeoutTimer();
    this.__cameraPermissionTimeoutTimer = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
      // 1초 delay 후 실행
      yield _this10.__proceedCameraPermission();
    }), 1000);
  }
  __proceedCameraPermission() {
    var _this11 = this;
    return _asyncToGenerator(function* () {
      try {
        _this11.__closeCamera();
        var isPassport = _this11.__ocrType.includes('passport');
        yield _this11.__setupVideo(isPassport);
        var {
          video
        } = detector.getOCRElements();
        if (video) {
          // const [track] = this.__stream.getVideoTracks();
          // const capability = track.getCapabilities();
          // console.debug('CardScan__initialize capability', capability);
          if ('srcObject' in video) {
            video.srcObject = _this11.__stream;
          } else {
            // Avoid using this in new browsers, as it is going away.
            video.src = window.URL.createObjectURL(_this11.__stream);
          }
          video.addEventListener('loadedmetadata', () => {
            // console.debug('proceedCameraPermission - onloadedmetadata');
            video.play();
          });
          video.addEventListener('canplay', () => {
            void 0;

            // video element style 설정
            _this11.__videoOrientation = video.videoWidth / video.videoHeight < 1 ? 'portrait' : 'landscape';
            void 0;
            void 0;
            void 0;
            _this11.__camSetComplete = true;
            _this11.__adjustStyle();
          });
          _this11.__changeStage(_this11.IN_PROGRESS.READY);
          video.webkitExitFullscreen();
        } else {
          _this11.__changeStage(_this11.IN_PROGRESS.NOT_READY);
          _this11.__closeCamera();
        }
      } catch (e) {
        void 0;
        if (e.name === 'NotAllowedError') {
          var errorMessage = 'Camera Access Permission is not allowed';
          void 0;
          void 0;
          _this11.__onFailureProcess("E403", e, errorMessage);
        } else if (e.name === 'NotReadableError') {
          _this11.__changeStage(_this11.IN_PROGRESS.NOT_READY);
          _this11.stopStream();
          _this11.__setCameraPermissionTimeoutTimer(); // 재귀 호출
        }
      }
    })();
  }

  __setStyle(el, style) {
    Object.assign(el.style, style);
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
    var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var recognizedImage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (this.__previousInProgressStep === val && forceUpdate === false) {
      return;
    }
    this.__changeOCRStatus(val);
    this.__previousInProgressStep = val;
    this.__inProgressStep = val;
    var {
      guideBox,
      maskBoxWrap
    } = detector.getOCRElements();
    var style = {
      borderWidth: this.__options.frameBorderStyle.width + 'px',
      borderStyle: this.__options.frameBorderStyle.style,
      borderRadius: this.__options.frameBorderStyle.radius + 'px',
      borderColor: this.__options.frameBorderStyle[val]
    };
    if (guideBox) {
      this.__setStyle(guideBox, style);
    }
    if (this.__options.useMaskFrameColorChange) {
      var _maskBoxWrap$querySel;
      maskBoxWrap === null || maskBoxWrap === void 0 ? void 0 : (_maskBoxWrap$querySel = maskBoxWrap.querySelector("#maskBoxOuter")) === null || _maskBoxWrap$querySel === void 0 ? void 0 : _maskBoxWrap$querySel.setAttribute("fill", this.__options.maskFrameStyle[val]);
    }
    if (this.__onInProgressChange) {
      if (this.__options.useTopUI || this.__options.useTopUITextMsg) {
        this.__onInProgressChange.call(this, this.__ocrType, this.__inProgressStep, this.__topUI, 'top', this.__options.useTopUITextMsg, this.__options.usePreviewUI, recognizedImage);
      }
      if (this.__options.useMiddleUI || this.__options.useMiddleUITextMsg) {
        this.__onInProgressChange.call(this, this.__ocrType, this.__inProgressStep, this.__middleUI, 'middle', this.__options.useMiddleUITextMsg, this.__options.usePreviewUI, recognizedImage);
      }
      if (this.__options.useBottomUI || this.__options.useBottomUITextMsg) {
        this.__onInProgressChange.call(this, this.__ocrType, this.__inProgressStep, this.__bottomUI, 'bottom', this.__options.useBottomUITextMsg, this.__options.usePreviewUI, recognizedImage);
      }
    }
    if (val === this.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA) {
      var {
        video
      } = detector.getOCRElements();
      this.__setStyle(video, {
        display: 'none'
      });
      if (this.__options.usePreviewUI) {
        this.__updatePreviewUI(recognizedImage);
      }
    }
    if (val === this.IN_PROGRESS.OCR_SUCCESS_WITH_SSA) {
      if (this.__options.usePreviewUI) {
        this.__hidePreviewUI();
      }
    }
  }
  __updatePreviewUI(recognizedImage) {
    var {
      guideBox,
      previewUI,
      previewImage
    } = detector.getOCRElements();
    previewImage.src = recognizedImage;
    var imgStyle = {
      width: guideBox.clientWidth + 'px',
      height: guideBox.clientHeight + 'px'
    };
    this.__setStyle(previewImage, imgStyle);
    this.__setStyle(previewUI, {
      display: 'block'
    });
  }
  __hidePreviewUI() {
    var {
      video,
      previewUI,
      previewImage
    } = detector.getOCRElements();
    this.__setStyle(video, {
      display: 'block'
    });
    this.__setStyle(previewUI, {
      display: 'none'
    });
    previewImage.src = "";
  }
  __getInputDevices(kind, label) {
    var _this12 = this;
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
          if (cap !== null && cap !== void 0 && (_cap$facingMode = cap.facingMode) !== null && _cap$facingMode !== void 0 && _cap$facingMode.includes(_this12.__facingModeConstraint)) {
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
    if (topUI && !this.__options.useTopUI) this.__clearCustomUI(topUI);
    if (middleUI && !this.__options.useMiddleUI) this.__clearCustomUI(middleUI);
    if (bottomUI && !this.__options.useBottomUI) this.__clearCustomUI(bottomUI);
    if (previewUIWrap) previewUIWrap.remove();
    // preview UI를 미사용일 경우 안의 내용을 삭제
    if (previewUI && !this.__options.usePreviewUI) this.__clearCustomUI(previewUI);
    var rotationDegree = this.__getRotationDegree();
    this.__isRotated90or270 = [90, 270].includes(rotationDegree);
    var ocrStyle = {
      width: '100%',
      height: '100%'
    };
    this.__setStyle(ocr, ocrStyle);
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
      this.__setStyle(videoWrap, wrapStyle);
    }
    ocr.appendChild(videoWrap);
    maskBoxWrap = document.createElement('svg');
    maskBoxWrap.setAttribute('data-useb-ocr', 'maskBoxWrap');
    maskBoxWrap.setAttribute('fill', 'none');
    maskBoxWrap.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.__setStyle(maskBoxWrap, wrapStyle);
    var mask_frame = this.__options.maskFrameStyle.base_color + 'ff';
    if (!!this.__options.showClipFrame) {
      mask_frame = this.__options.maskFrameStyle.clip_frame + '55';
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
    if (this.__isRotated90or270) {
      if (this.__getMirrorMode()) {
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
      if (this.__getMirrorMode()) {
        videoStyle = _objectSpread(_objectSpread({}, videoStyle), {}, {
          '-webkit-transform': mirrorCss,
          '-moz-transform': mirrorCss,
          '-o-transform': mirrorCss,
          '-ms-transform': mirrorCss,
          'transform': mirrorCss
        });
      }
    }
    this.__setStyle(video, videoStyle);
    videoWrap.appendChild(video);
    guideBoxWrap = document.createElement('div');
    guideBoxWrap.setAttribute('data-useb-ocr', 'guideBoxWrap');
    this.__setStyle(guideBoxWrap, wrapStyle);
    ocr.appendChild(guideBoxWrap);
    guideBox = document.createElement('svg');
    guideBox.setAttribute('data-useb-ocr', 'guideBox');
    guideBox.setAttribute('fill', 'none');
    guideBox.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.__setStyle(guideBox, {
      width: '100%',
      margin: '0 auto',
      position: 'absolute'
    });
    guideBoxWrap.appendChild(guideBox);
    canvas = document.createElement('canvas');
    canvas.setAttribute('data-useb-ocr', 'canvas');
    var canvasStyle = {
      display: this.__options.showCanvasPreview ? this.__isRotated90or270 ? 'none' : 'display' : 'none',
      width: '25%',
      position: 'absolute',
      left: '0px',
      top: '30px',
      border: 'green 2px solid'
    };
    this.__setStyle(canvas, canvasStyle);
    ocr.appendChild(canvas);
    rotationCanvas = document.createElement('canvas');
    rotationCanvas.setAttribute('data-useb-ocr', 'rotationCanvas');
    this.__setStyle(rotationCanvas, {
      display: this.__options.showCanvasPreview ? this.__isRotated90or270 ? 'display' : 'none' : 'none',
      height: '25%',
      position: 'absolute',
      right: '0px',
      top: '30px',
      border: 'blue 2px solid'
    });
    ocr.appendChild(rotationCanvas);
    preventToFreezeVideo = document.createElement('div');
    preventToFreezeVideo.setAttribute('data-useb-ocr', 'preventToFreezeVideo');
    this.__setStyle(preventToFreezeVideo, {
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
    this.__setStyle(customUIWrap, customUIWrapStyle);
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
    previewUIWrap = document.createElement('div');
    previewUIWrap.setAttribute('data-useb-ocr', 'previewUIWrap');
    var previewUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
      'flex-direction': 'column'
    });
    this.__setStyle(previewUIWrap, previewUIWrapStyle);
    ocr.appendChild(previewUIWrap);
    if (this.__options.usePreviewUI) {
      if (!previewUI) {
        previewUI = document.createElement('div');
        previewUI.setAttribute('data-useb-ocr', 'previewUI');
      }
      this.__setStyle(previewUI, {
        display: 'none'
      });
      previewUIWrap.appendChild(previewUI);
      if (!previewImage) {
        previewImage = document.createElement('img');
        previewImage.setAttribute('data-useb-ocr', 'previewImage');
        previewUI.appendChild(previewImage);
      }
    }

    // loading UI 위치 자리잡게 하기 위해
    this.__adjustStyle();
    // 화면과도 현상 해결
    this.__setStyle(ocr, {
      display: ''
    });
    this.__ocr = ocr;
    this.__canvas = canvas;
    this.__rotationCanvas = rotationCanvas;
    this.__video = video;
    this.__videoWrap = videoWrap;
    this.__guideBox = guideBox;
    this.__guideBoxWrap = guideBoxWrap;
    this.__maskBoxWrap = maskBoxWrap;
    this.__preventToFreezeVideo = preventToFreezeVideo;
    this.__customUIWrap = customUIWrap;
    this.__topUI = topUI;
    this.__middleUI = middleUI;
    this.__bottomUI = bottomUI;
    this.__previewUIWrap = previewUIWrap;
    this.__previewUI = previewUI;
    this.__previewImage = previewImage;
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
      previewUIWrap,
      previewUI,
      previewImage
    };
  }
  __setupVideo(isPassport) {
    var _this13 = this;
    return _asyncToGenerator(function* () {
      // wasm 인식성능 최적화된 해상도
      _this13.__resolutionWidth = 1080;
      _this13.__resolutionHeight = 720;
      _this13.__camSetComplete = false;
      var {
        video,
        canvas,
        rotationCanvas
      } = _this13.__setupDomElements();
      var videoDevices = yield _this13.__getInputDevices('video', _this13.__options.deviceLabel);
      // console.log('videoDevices :: ', videoDevices)
      var deviceIdList = videoDevices.map(device => device.deviceId);
      _this13.checkUIOrientation();
      var constraintWidth, constraintHeight;
      if (_this13.__uiOrientation === 'portrait') {
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
            ideal: _this13.__facingModeConstraint
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

        [canvas.width, canvas.height] = [_this13.__resolutionWidth, _this13.__resolutionHeight];
        if (_this13.__isRotated90or270) {
          [rotationCanvas.width, rotationCanvas.height] = [_this13.__resolutionHeight, _this13.__resolutionWidth];
        }
        video.srcObject = stream;
        _this13.__stream = stream;
      } catch (e) {
        void 0;
        throw e;
      }
    })();
  }
  __adjustStyle() {
    void 0;
    var {
      ocr,
      video,
      guideBox,
      maskBoxWrap,
      topUI,
      middleUI,
      bottomUI
    } = detector.getOCRElements();
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
    var calcVideoOrientation = this.__videoOrientation;
    var borderWidth = this.__options.frameBorderStyle.width;
    var borderRadius = this.__options.frameBorderStyle.radius;
    if (this.__isRotated90or270) {
      [calcVideoWidth, calcVideoHeight] = [calcVideoHeight, calcVideoWidth];
      [calcVideoClientWidth, calcVideoClientHeight] = [calcVideoClientHeight, calcVideoClientWidth];
      calcVideoOrientation = this.__videoOrientation === 'portrait' ? 'landscape' : 'portrait';
    }
    var newVideoWidth = calcVideoClientWidth;
    var newVideoHeight = calcVideoClientHeight;
    var guideBoxRatioByWidth = this.__guideBoxRatioByWidth;
    var videoRatioByHeight = this.__videoRatioByHeight;
    if (this.__uiOrientation === 'portrait') {
      // 세로 UI
      // video 가로 기준 100% 유지 (변경없음)
      if (calcVideoOrientation === this.__uiOrientation) {
        // 카메라도 세로
        // 세로 UI && 세로 비디오
        // 가로 기준으로 가이드박스 계산
        guideBoxWidth = calcOcrClientWidth * guideBoxRatioByWidth;
        guideBoxHeight = guideBoxWidth * scannerFrameRatio;

        // 가이드 박스 가로 기준으로 비디오 확대
        newVideoWidth = guideBoxWidth;
        newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
        if (this.__isRotated90or270) {
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
      if (calcVideoOrientation === this.__uiOrientation) {
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
        if (this.__isRotated90or270) {
          [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
        }
      }
    }
    guideBoxWidth += borderWidth * 2;
    guideBoxHeight += borderWidth * 2;
    this.__cropImageSizeWidth = Math.min(guideBoxWidth, newVideoWidth);
    this.__cropImageSizeHeight = Math.min(guideBoxHeight, newVideoHeight);
    var reducedGuideBoxWidth = guideBoxWidth * this.__guideBoxReduceRatio;
    var reducedGuideBoxHeight = guideBoxHeight * this.__guideBoxReduceRatio;
    if (topUI) {
      this.__setStyle(topUI, {
        'padding-bottom': '10px',
        'height': (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
        'display': 'flex',
        'flex-direction': 'column-reverse'
      });
    }
    if (middleUI) {
      this.__setStyle(middleUI, {
        width: reducedGuideBoxWidth - borderWidth * 2 + 'px',
        height: reducedGuideBoxHeight - borderWidth * 2 + 'px',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'padding': '10px'
      });
    }
    if (bottomUI) {
      this.__setStyle(bottomUI, {
        'padding-top': '10px',
        'height': (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
        'display': 'flex',
        'flex-direction': 'column'
      });
    }
    if (newVideoWidth !== calcVideoClientWidth) {
      this.__setStyle(video, {
        width: newVideoWidth + 'px'
      });
    }
    if (newVideoHeight !== calcVideoClientHeight) {
      this.__setStyle(video, {
        height: newVideoHeight + 'px'
      });
    }
    var videoInnerGap = 2; // 미세하게 maskBoxInner보다 guideBox가 작은것 보정
    this.__setStyle(guideBox, {
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
    this.__changeStage(this.__inProgressStep, true);
    void 0;
  }
  __closeCamera() {
    this.__clearCameraPermissionTimeoutTimer();
    this.stopScan();
    this.stopStream();
  }
  __loadResources() {
    var _this14 = this;
    return _asyncToGenerator(function* () {
      void 0;
      if (_this14.__resourcesLoaded) {
        void 0;
        return;
      }
      var sdkSupportEnv = 'quram';
      var isSupportSimd = yield simd();
      var envInfo = '';
      envInfo += "os : ".concat(_this14.__deviceInfo.os, "\n");
      envInfo += "osSimple : ".concat(_this14.__deviceInfo.osSimple, "\n");
      envInfo += "simd(wasm-feature-detect) : ".concat(isSupportSimd, "\n");
      if (_this14.__deviceInfo.osSimple === 'IOS' || _this14.__deviceInfo.osSimple === 'MAC') {
        isSupportSimd = false;
      }
      envInfo += "isSupportSimd(final) : ".concat(isSupportSimd, "\n");
      envInfo += "UserAgent : ".concat(navigator.userAgent, "\n");
      if (isSupportSimd) {
        void 0;
        sdkSupportEnv += '_simd.js';
        if (window.location.hostname === 'ocr-demo-test.useb.co.kr') {
          void 0;
        }
      } else {
        void 0;
        sdkSupportEnv += '.js';
        if (window.location.hostname === 'ocr-demo-test.useb.co.kr') {
          void 0;
        }
      }
      var url = new URL(sdkSupportEnv, _this14.__options.resourceBaseUrl);
      var src = yield fetch(url.href).then(res => res.text()).then(text => {
        var regex = /(.*) = Module.cwrap/gm;
        var source = text.replace(regex, 'Module.$1 = Module.cwrap');

        // data(model)
        source = source.replace(/^\(function\(\) \{/m, 'var createModelData = async function() {\n' + ' return new Promise(async function (resolve, reject) {\n');
        source = source.replace('   console.error("package error:", error);', '   reject();\n' + '   console.error("package error:", error);');
        source = source.replace('  }, handleError)', '  resolve();\n' + '  }, handleError)');
        source = source.replace(/^\}\)\(\);/m, '\n })\n' + '};');

        // wasm
        source = source.replace('quram.wasm', new URL('quram.wasm', _this14.__options.resourceBaseUrl).href);
        source = source.replace(/REMOTE_PACKAGE_BASE = ['"]quram\.data["']/gm, "REMOTE_PACKAGE_BASE = \"".concat(new URL('quram.data', _this14.__options.resourceBaseUrl).href, "\""));
        source = source.replace('function createWasm', 'async function createWasm');
        source = source.replace('instantiateAsync();', 'await instantiateAsync();');

        // wasm and data(model) file 병렬로 fetch 하기 위해
        source = source.replace('var asm = createWasm();', 'console.log("create wasm and data - start")\n' + 'await (async function() {\n' + '  return new Promise(function(resolve) {\n' + '    var isCreatedWasm = false;\n' + '    var isCreatedData = false;\n' + '    createWasm().then(() => {\n' + '      isCreatedWasm = true;\n' + '      if (isCreatedData) { resolve(); }\n' + '    });\n' + '    createModelData().then(() => {\n' + '      isCreatedData = true;\n' + '      if (isCreatedWasm) { resolve(); }\n' + '    })\n' + '  });\n' + '})();\n' + 'console.log("create wasm and data - end")');
        return source;
      });
      src = "\n    (async function() {\n      ".concat(src, "\n      Module.lengthBytesUTF8 = lengthBytesUTF8\n      Module.stringToUTF8 = stringToUTF8\n      return Module\n    })()\n        ");
      _this14.__OCREngine = yield eval(src);
      _this14.__OCREngine.onRuntimeInitialized = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(function* (_) {
          void 0;
        });
        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }();
      yield _this14.__OCREngine.onRuntimeInitialized();
      _this14.__resourcesLoaded = true;
      void 0;
    })();
  }
  __startScanImpl() {
    var _this15 = this;
    return new Promise((resolve, reject) => {
      this.__detected = false;
      this.__address = 0;
      this.__pageEnd = false;
      this.__options.ssaMaxRetryCount = isNaN(parseInt(this.__options.ssaMaxRetryCount)) ? 0 : parseInt(this.__options.ssaMaxRetryCount);
      var scan = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator(function* () {
          try {
            var ocrResult = null,
              imgDataUrl = null,
              maskImage = null,
              ssaResult = null,
              ssaResultList = [];

            // this.__changeStage(IN_PROGRESS.READY);
            if (!_this15.__OCREngine['asm']) return;

            // TODO : 설정할수 있게 변경 default 값도 제공
            var [resolution_w, resolution_h] = [_this15.__resolutionWidth, _this15.__resolutionHeight];
            var {
              video
            } = detector.getOCRElements();
            if (resolution_w === 0 || resolution_h === 0) return;
            if (_this15.__detected) {
              yield _this15.__sleep(100);
              return;
            }
            // console.log('address before ---------', address);
            if (_this15.__address === 0 && !_this15.__pageEnd && _this15.__isVideoResolutionCompatible(video)) {
              [_this15.__address, _this15.__destroyScannerCallback] = _this15.__getScannerAddress(_this15.__ocrType);
            }
            if (!_this15.__address || _this15.__pageEnd) {
              yield _this15.__sleep(100);
              return;
            }
            // console.log('address after ---------', address);

            if (_this15.__ocrStatus < _this15.OCR_STATUS.OCR_SUCCESS) {
              // OCR 완료 이전 상태

              // card not detected
              var [isDetectedCard, imgData] = yield _this15.__isCardboxDetected(_this15.__address, 0);
              if (!isDetectedCard) {
                if (_this15.__inProgressStep !== _this15.IN_PROGRESS.READY) {
                  _this15.__changeStage(_this15.IN_PROGRESS.CARD_DETECT_FAILED);
                }
                return;
              }

              // card is detected
              _this15.__changeStage(_this15.IN_PROGRESS.CARD_DETECT_SUCCESS);

              // ssa retry 설정이 되어 있으면, card detect 성공시 이미지 저장
              if (_this15.__ssaMode && _this15.__options.ssaMaxRetryCount > 0) {
                _this15.__enqueueDetectedCardQueue(imgData);
              }
              [ocrResult, imgDataUrl, maskImage] = yield _this15.__startRecognition(_this15.__address, _this15.__ocrType, _this15.__ssaMode);
            }
            if (_this15.__ocrStatus >= _this15.OCR_STATUS.OCR_SUCCESS) {
              // ocr 완료 이후 상태

              // failure case
              if (ocrResult === false) {
                throw new Error("OCR Status is ".concat(_this15.__ocrStatus, ", but ocrResult is false"));
              }

              // success case
              _this15.__setStyle(video, {
                display: 'none'
              }); // OCR 완료 시점에 camera preview off

              if (_this15.__ssaMode) {
                void 0;
                // 최초 시도
                ssaResult = yield _this15.__startTruth(_this15.__ocrType, _this15.__address);
                if (ssaResult === null) {
                  throw new Error("[ERR] SSA MODE is true. but, ssaResult is null");
                }
                ssaResultList.push(ssaResult);
                if (_this15.__options.ssaMaxRetryCount > 0) {
                  var retryStartDate = new Date();
                  for (var item of _this15.__detectedCardQueue) {
                    if (ssaResult.indexOf("FAKE") > -1) {
                      _this15.__ssaRetryCount++;
                      void 0;
                      ssaResult = yield _this15.__startTruthRetry(_this15.__ocrType, _this15.__address, item);
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
              _this15.__onSuccessProcess({
                ocr_type: _this15.__ocrType,
                ocr_data: parser.parseOcrResult(_this15.__ocrType, _this15.__ssaMode, ocrResult, ssaResult, _this15.__ssaRetryCount, ssaResultList),
                ocr_origin_image: imgDataUrl,
                ocr_masking_image: maskImage,
                ssa_mode: _this15.__ssaMode
              });
              _this15.__closeCamera();
              _this15.__detected = true;
              resolve();
            }
          } catch (e) {
            var errorMessage = 'Card detection error';
            if (e.message) {
              errorMessage += ": " + e.message;
            }
            void 0;
            if (e.toString().includes('memory')) {
              yield _this15.__recoveryScan();
            } else {
              _this15.__onFailureProcess("WA001", e, errorMessage);
              _this15.__closeCamera();
              _this15.__detected = true;
              reject();
            }
          } finally {
            if (!_this15.__detected) {
              setTimeout(scan, 1); // 재귀
            }
          }
        });
        return function scan() {
          return _ref6.apply(this, arguments);
        };
      }();
      setTimeout(scan, 1); // UI 랜더링 blocking 방지 (setTimeout)
    });
  }

  __enqueueDetectedCardQueue(imgData) {
    if (this.__options.ssaMaxRetryCount === 0) {
      return;
    }
    if (this.__detectedCardQueue.length === parseInt(this.__options.ssaMaxRetryCount)) {
      this.__detectedCardQueue.shift();
    }
    this.__detectedCardQueue.push(imgData);
    void 0; // should be removed
  }

  __onSuccessProcess(review_result) {
    // 인식 성공 스캔 루프 종료
    if (review_result.ssa_mode) {
      this.__changeStage(this.IN_PROGRESS.OCR_SUCCESS_WITH_SSA);
    } else {
      this.__changeStage(this.IN_PROGRESS.OCR_SUCCESS);
    }
    var result = {
      api_response: {
        "result_code": "N100",
        "result_message": "OK."
      },
      result: "success",
      review_result: review_result
    };
    if (this.__onSuccess) {
      this.__onSuccess(result);
      this.__onSuccess = null;
    } else {
      void 0;
    }
  }
  __onFailureProcess(resultCode, e, errorMessage) {
    this.__changeStage(this.IN_PROGRESS.OCR_FAILED);
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
        ocr_type: this.__ocrType,
        error_detail: errorDetail
      }
    };
    if (this.__onFailure) {
      this.__onFailure(result);
      this.__onFailure = null;
    } else {
      void 0;
    }
  }
  __startScan() {
    var _this16 = this;
    return _asyncToGenerator(function* () {
      _this16.cleanup();
      yield _this16.__proceedCameraPermission();
      yield _this16.__startScanImpl();
      void 0;
    })();
  }
  __recoveryScan() {
    var _this17 = this;
    return _asyncToGenerator(function* () {
      void 0;
      _this17.__resourcesLoaded = false;
      _this17.stopScan();
      yield _this17.__startScan();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJzaW1kIiwidGhyZWFkcyIsImluc3RhbmNlIiwiVXNlQk9DUiIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiTk9ORSIsIk5PVF9SRUFEWSIsIlJFQURZIiwiQ0FSRF9ERVRFQ1RfU1VDQ0VTUyIsIkNBUkRfREVURUNUX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZVRvcFVJIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUkiLCJ1c2VNaWRkbGVVSVRleHRNc2ciLCJ1c2VCb3R0b21VSSIsInVzZUJvdHRvbVVJVGV4dE1zZyIsInVzZVByZXZpZXdVSSIsImZyYW1lQm9yZGVyU3R5bGUiLCJ3aWR0aCIsInN0eWxlIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwidXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UiLCJtYXNrRnJhbWVTdHlsZSIsImNsaXBfZnJhbWUiLCJiYXNlX2NvbG9yIiwicmVzb3VyY2VCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJkZXZpY2VMYWJlbCIsInZpZGVvVGFyZ2V0SWQiLCJyb3RhdGlvbkRlZ3JlZSIsIm1pcnJvck1vZGUiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRlZCIsIl9fcHJlbG9hZGluZ1N0YXR1cyIsIl9fbG9hZFJlc291cmNlcyIsIl9fcHJlbG9hZGVkIiwiaXNJbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZWQiLCJnZXRQcmVsb2FkaW5nU3RhdHVzIiwiZ2V0T0NSRW5naW5lIiwiX19PQ1JFbmdpbmUiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJfX2xpY2Vuc2UiLCJtZXJnZWRPcHRpb25zIiwiXyIsIm1lcmdlIiwiX19vcHRpb25zIiwic2V0T3B0aW9uIiwiX193aW5kb3dFdmVudEJpbmQiLCJfX2RldmljZUluZm8iLCJnZXRPc1ZlcnNpb24iLCJnZXRPcHRpb24iLCJnZXRPY3JUeXBlIiwidHlwZSIsIl9fb2NyVHlwZVN0cmluZyIsImdldCIsImdldFVJT3JpZW50YXRpb24iLCJfX3VpT3JpZW50YXRpb24iLCJnZXRWaWRlb09yaWVudGF0aW9uIiwiX192aWRlb09yaWVudGF0aW9uIiwic3RhcnRPQ1IiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJfYXJndW1lbnRzIiwiYXJndW1lbnRzIiwiX3RoaXMyIiwib25JblByb2dyZXNzQ2hhbmdlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX19vY3JUeXBlIiwiX19zc2FNb2RlIiwiaW5kZXhPZiIsIl9fb25TdWNjZXNzIiwiX19vbkZhaWx1cmUiLCJfX29uSW5Qcm9ncmVzc0NoYW5nZSIsIl9fdG9wVUkiLCJnZXRPQ1JFbGVtZW50cyIsInRvcFVJIiwiX19taWRkbGVVSSIsIm1pZGRsZVVJIiwiX19ib3R0b21VSSIsImJvdHRvbVVJIiwiX19jaGFuZ2VTdGFnZSIsInByZWxvYWRpbmdTdGF0dXMiLCJfX3dhaXRQcmVsb2FkZWQiLCJjb25jYXQiLCJfX3N0YXJ0U2NhbiIsImUiLCJzdG9wT0NSIiwiY2xlYW51cCIsIl9fY2xvc2VDYW1lcmEiLCJyZXN0YXJ0T0NSIiwib2NyVHlwZSIsIl90aGlzMyIsIl90aGlzNCIsIndhaXRpbmdSZXRyeUNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVjayIsInNldFRpbWVvdXQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiX19wYWdlRW5kIiwiaGFuZGxlUmVzaXplIiwiX3JlZjIiLCJfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiYXBwbHkiLCJfX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIl9fc2xlZXAiLCJtcyIsIl9fYmxvYlRvQmFzZTY0IiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX19nZXRTdHJpbmdPbldhc21IZWFwIiwibGVuZ3RoQnl0ZXMiLCJsZW5ndGhCeXRlc1VURjgiLCJfX3N0cmluZ09uV2FzbUhlYXAiLCJfbWFsbG9jIiwic3RyaW5nVG9VVEY4IiwiX19zZXRWaWRlb1Jlc29sdXRpb24iLCJ2aWRlb0VsZW1lbnQiLCJpc1N1cHBvcnRlZFJlc29sdXRpb24iLCJyZXNvbHV0aW9uVGV4dCIsIl9fY2FtU2V0Q29tcGxldGUiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJzcmNPYmplY3QiLCJfX3ZpZGVvV2lkdGgiLCJfX3ZpZGVvSGVpZ2h0IiwiX19nZXRTY2FubmVyQWRkcmVzcyIsIl9fb2NyVHlwZUxpc3QiLCJpbmNsdWRlcyIsImFkZHJlc3MiLCJkZXN0cm95Q2FsbGJhY2siLCJzdHJpbmdPbldhc21IZWFwIiwiZ2V0SURDYXJkU2Nhbm5lciIsImRlc3Ryb3lJRENhcmRTY2FubmVyIiwiZ2V0UGFzc3BvcnRTY2FubmVyIiwiZGVzdHJveVBhc3Nwb3J0U2Nhbm5lciIsImdldEFsaWVuU2Nhbm5lciIsImRlc3Ryb3lBbGllblNjYW5uZXIiLCJnZXRDcmVkaXRTY2FubmVyIiwiZGVzdHJveUNyZWRpdFNjYW5uZXIiLCJfZnJlZSIsIl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MiLCJfX3JldHJ5Q291bnRHZXRBZGRyZXNzIiwiX19nZXRCdWZmZXIiLCJfX0J1ZmZlciIsIl9fcmVzb2x1dGlvbldpZHRoIiwiX19yZXNvbHV0aW9uSGVpZ2h0IiwiX19yZXN1bHRCdWZmZXIiLCJfX2dldEltYWdlQmFzZTY0IiwibWFza01vZGUiLCJjcm9wTW9kZSIsIl90aGlzNSIsImVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZSIsImpwZ1NpemUiLCJnZXRFbmNvZGVkSnBnU2l6ZSIsImpwZ1BvaW50ZXIiLCJnZXRFbmNvZGVkSnBnQnVmZmVyIiwicmVzdWx0VmlldyIsIlVpbnQ4QXJyYXkiLCJIRUFQOCIsImJ1ZmZlciIsIkJsb2IiLCJkZXN0cm95RW5jb2RlZEpwZyIsIl9fZGVzdHJveUJ1ZmZlciIsIl9fZGVzdHJveVByZXZJbWFnZSIsIl9fUHJldkltYWdlIiwiX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCIsIl9fZGVzdHJveVNjYW5uZXJBZGRyZXNzIiwiX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrIiwiX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUiLCJfX2dldFJvdGF0aW9uRGVncmVlIiwiX19nZXRNaXJyb3JNb2RlIiwiX19jcm9wSW1hZ2VGcm9tVmlkZW8iLCJfdGhpczYiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwiY2FudmFzIiwicm90YXRpb25DYW52YXMiLCJjYWxjQ2FudmFzIiwiY2FsY1ZpZGVvV2lkdGgiLCJjYWxjVmlkZW9IZWlnaHQiLCJjYWxjVmlkZW9DbGllbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCIsIl9fY3JvcEltYWdlU2l6ZVdpZHRoIiwiY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQiLCJfX2Nyb3BJbWFnZVNpemVIZWlnaHQiLCJjYWxjVmlkZW9PcmllbnRhdGlvbiIsIl9faXNSb3RhdGVkOTBvcjI3MCIsImNhbGNNYXhTV2lkdGgiLCJjYWxjTWF4U0hlaWdodCIsInN4Iiwic3kiLCJyYXRpbyIsInNXaWR0aCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsInNIZWlnaHQiLCJjYWxjQ29udGV4dCIsImdldENvbnRleHQiLCJ3aWxsUmVhZEZyZXF1ZW50bHkiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9fcm90YXRlIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsImhlaWdodCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9faXNDYXJkYm94RGV0ZWN0ZWQiLCJfYXJndW1lbnRzMiIsIl90aGlzNyIsImJveFR5cGUiLCJyZXRyeUltZyIsInNldCIsImRhdGEiLCJkZXRlY3RfaWRjYXJkIiwibWVzc2FnZSIsInRvU3RyaW5nIiwiX19zdGFydFJlY29nbml0aW9uIiwic3NhTW9kZSIsIl90aGlzOCIsIm9jclJlc3VsdCIsInJlc3VsdEJ1ZmZlciIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0Iiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJfX3N0YXJ0VHJ1dGgiLCJyZWplY3QiLCJzY2FuVHJ1dGgiLCJfX3N0YXJ0VHJ1dGhSZXRyeSIsIl90aGlzOSIsIl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl90aGlzMTAiLCJfX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24iLCJfdGhpczExIiwiaXNQYXNzcG9ydCIsIl9fc2V0dXBWaWRlbyIsIl9fc3RyZWFtIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicGxheSIsIl9fYWRqdXN0U3R5bGUiLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIm5hbWUiLCJlcnJvck1lc3NhZ2UiLCJfX29uRmFpbHVyZVByb2Nlc3MiLCJzdG9wU3RyZWFtIiwiX19zZXRTdHlsZSIsImVsIiwiYXNzaWduIiwiX19jaGFuZ2VPQ1JTdGF0dXMiLCJ2YWwiLCJfX29jclN0YXR1cyIsImZvcmNlVXBkYXRlIiwicmVjb2duaXplZEltYWdlIiwiX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwIiwiX19pblByb2dyZXNzU3RlcCIsImd1aWRlQm94IiwibWFza0JveFdyYXAiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJfbWFza0JveFdyYXAkcXVlcnlTZWwiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiY2FsbCIsImRpc3BsYXkiLCJfX3VwZGF0ZVByZXZpZXdVSSIsIl9faGlkZVByZXZpZXdVSSIsInByZXZpZXdVSSIsInByZXZpZXdJbWFnZSIsImltZ1N0eWxlIiwiX19nZXRJbnB1dERldmljZXMiLCJraW5kIiwibGFiZWwiLCJfdGhpczEyIiwibWVkaWFEZXZpY2VzIiwiZGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ2aWRlb0RldmljZXMiLCJmaWx0ZXIiLCJkZXZpY2UiLCJnZXRDYXBhYmlsaXRpZXMiLCJfY2FwJGZhY2luZ01vZGUiLCJjYXAiLCJmYWNpbmdNb2RlIiwiX19mYWNpbmdNb2RlQ29uc3RyYWludCIsImNoZWNrVUlPcmllbnRhdGlvbiIsImN1cnJlbnQiLCJvY3IiLCJpc0NoYW5nZWQiLCJfX3ByZXZVaU9yaWVudGF0aW9uIiwiX19jbGVhckN1c3RvbVVJIiwib2JqIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiX19zZXR1cERvbUVsZW1lbnRzIiwidmlkZW9XcmFwIiwiZ3VpZGVCb3hXcmFwIiwicHJldmVudFRvRnJlZXplVmlkZW8iLCJjdXN0b21VSVdyYXAiLCJwcmV2aWV3VUlXcmFwIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJtYXJnaW4iLCJvdmVyZmxvdyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwibWFza19mcmFtZSIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJfb2JqZWN0U3ByZWFkIiwiY2FudmFzU3R5bGUiLCJsZWZ0IiwidG9wIiwiYm9yZGVyIiwicmlnaHQiLCJib3R0b20iLCJjdXN0b21VSVdyYXBTdHlsZSIsInByZXZpZXdVSVdyYXBTdHlsZSIsIl9fb2NyIiwiX19jYW52YXMiLCJfX3JvdGF0aW9uQ2FudmFzIiwiX192aWRlbyIsIl9fdmlkZW9XcmFwIiwiX19ndWlkZUJveCIsIl9fZ3VpZGVCb3hXcmFwIiwiX19tYXNrQm94V3JhcCIsIl9fcHJldmVudFRvRnJlZXplVmlkZW8iLCJfX2N1c3RvbVVJV3JhcCIsIl9fcHJldmlld1VJV3JhcCIsIl9fcHJldmlld1VJIiwiX19wcmV2aWV3SW1hZ2UiLCJfdGhpczEzIiwiZGV2aWNlSWRMaXN0IiwibWFwIiwiZGV2aWNlSWQiLCJjb25zdHJhaW50V2lkdGgiLCJjb25zdHJhaW50SGVpZ2h0IiwiaWRlYWwiLCJjb25zdHJhaW50cyIsImF1ZGlvIiwiem9vbSIsImZvY3VzTW9kZSIsIndoaXRlQmFsYW5jZU1vZGUiLCJzdHJlYW0iLCJnZXRVc2VyTWVkaWEiLCJiYXNlV2lkdGgiLCJiYXNlSGVpZ2h0Iiwic2Nhbm5lckZyYW1lUmF0aW8iLCJndWlkZUJveFdpZHRoIiwiZ3VpZGVCb3hIZWlnaHQiLCJjYWxjT2NyQ2xpZW50V2lkdGgiLCJjYWxjT2NyQ2xpZW50SGVpZ2h0IiwibmV3VmlkZW9XaWR0aCIsIm5ld1ZpZGVvSGVpZ2h0IiwiZ3VpZGVCb3hSYXRpb0J5V2lkdGgiLCJfX2d1aWRlQm94UmF0aW9CeVdpZHRoIiwidmlkZW9SYXRpb0J5SGVpZ2h0IiwiX192aWRlb1JhdGlvQnlIZWlnaHQiLCJyZWR1Y2VkR3VpZGVCb3hXaWR0aCIsIl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbyIsInJlZHVjZWRHdWlkZUJveEhlaWdodCIsInZpZGVvSW5uZXJHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXNrQm94SW5uZXIiLCJyIiwiaXNOYU4iLCJtYXNrQm94SW5uZXJXaWR0aCIsIm1heCIsIm1hc2tCb3hJbm5lckhlaWdodCIsInN0b3BTY2FuIiwiX3RoaXMxNCIsIl9fcmVzb3VyY2VzTG9hZGVkIiwic2RrU3VwcG9ydEVudiIsImlzU3VwcG9ydFNpbWQiLCJlbnZJbmZvIiwib3MiLCJvc1NpbXBsZSIsImhvc3RuYW1lIiwidXJsIiwiZmV0Y2giLCJocmVmIiwidGhlbiIsInJlcyIsInRleHQiLCJyZWdleCIsInNvdXJjZSIsInJlcGxhY2UiLCJldmFsIiwib25SdW50aW1lSW5pdGlhbGl6ZWQiLCJfcmVmNSIsIl94IiwiX19zdGFydFNjYW5JbXBsIiwiX3RoaXMxNSIsIl9fZGV0ZWN0ZWQiLCJfX2FkZHJlc3MiLCJwYXJzZUludCIsInNjYW4iLCJfcmVmNiIsInNzYVJlc3VsdCIsInNzYVJlc3VsdExpc3QiLCJyZXNvbHV0aW9uX3ciLCJyZXNvbHV0aW9uX2giLCJpc0RldGVjdGVkQ2FyZCIsIl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlIiwicHVzaCIsInJldHJ5U3RhcnREYXRlIiwiRGF0ZSIsIml0ZW0iLCJfX2RldGVjdGVkQ2FyZFF1ZXVlIiwiX19zc2FSZXRyeUNvdW50IiwicmV0cnlXb3JraW5nVGltZSIsIl9fb25TdWNjZXNzUHJvY2VzcyIsIm9jcl90eXBlIiwib2NyX2RhdGEiLCJwYXJzZU9jclJlc3VsdCIsIm9jcl9vcmlnaW5faW1hZ2UiLCJvY3JfbWFza2luZ19pbWFnZSIsInNzYV9tb2RlIiwiX19yZWNvdmVyeVNjYW4iLCJzaGlmdCIsInJldmlld19yZXN1bHQiLCJhcGlfcmVzcG9uc2UiLCJyZXN1bHRDb2RlIiwiZXJyb3JEZXRhaWwiLCJzdGFjayIsImVycm9yX2RldGFpbCIsIl90aGlzMTYiLCJfdGhpczE3IiwiY2FudmFzQ29udGV4dCIsImNsZWFyUmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCIsInN0b3AiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJjbGVhclRpbWVvdXQiXSwic291cmNlcyI6WyJvY3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIGdsb2JhbC1tb2R1bGUgKi9cbmltcG9ydCBkZXRlY3RvciBmcm9tICcuL2hlbHBlcnMvZGV0ZWN0b3IuanMnO1xuaW1wb3J0IHBhcnNlciBmcm9tICcuL2hlbHBlcnMvcGFyc2VyLmpzJztcbmltcG9ydCB7IHNpbWQsIHRocmVhZHMgfSBmcm9tICcuL2hlbHBlcnMvd2FzbS1mZWF0dXJlLWRldGVjdC5qcyc7XG5sZXQgaW5zdGFuY2U7XG5jbGFzcyBVc2VCT0NSIHtcbiAgSU5fUFJPR1JFU1MgPSB7XG4gICAgTk9ORTogJ25vbmUnLFxuICAgIE5PVF9SRUFEWTogJ25vdF9yZWFkeScsXG4gICAgUkVBRFk6ICdyZWFkeScsXG4gICAgQ0FSRF9ERVRFQ1RfU1VDQ0VTUzogJ2RldGVjdF9zdWNjZXNzJyxcbiAgICBDQVJEX0RFVEVDVF9GQUlMRUQ6ICdkZXRlY3RfZmFpbGVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRDogJ3JlY29nbml6ZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOiAncmVjb2duaXplZF93aXRoX3NzYScsXG4gICAgT0NSX1NVQ0NFU1M6ICdvY3Jfc3VjY2VzcycsXG4gICAgT0NSX1NVQ0NFU1NfV0lUSF9TU0E6ICdvY3Jfc3VjY2Vzc193aXRoX3NzYScsXG4gICAgT0NSX0ZBSUxFRDogJ29jcl9mYWlsZWQnXG4gIH07XG4gIE9DUl9TVEFUVVMgPSB7XG4gICAgTk9UX1JFQURZOiAtMSxcbiAgICBSRUFEWTogMCxcbiAgICBPQ1JfU1VDQ0VTUzogMSxcbiAgICBET05FOiAyXG4gIH07XG4gIFBSRUxPQURJTkdfU1RBVFVTID0ge1xuICAgIE5PVF9TVEFSVEVEOiAtMSxcbiAgICBTVEFSVEVEOiAwLFxuICAgIERPTkU6IDFcbiAgfTtcblxuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cblxuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIF9fT0NSRW5naW5lID0gbnVsbDtcbiAgX19pbml0aWFsaXplZCA9IGZhbHNlO1xuICBfX3ByZWxvYWRlZCA9IGZhbHNlO1xuICBfX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEO1xuICBfX2xpY2Vuc2U7XG4gIF9fb2NyVHlwZSA9IG51bGw7XG4gIF9fc3NhTW9kZSA9IGZhbHNlO1xuICBfX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5OT1RfUkVBRFk7XG4gIF9fc3NhUmV0cnlDb3VudCA9IDA7XG4gIF9fZGV0ZWN0ZWRDYXJkUXVldWUgPSBbXTtcbiAgX19vblN1Y2Nlc3MgPSBudWxsO1xuICBfX29uRmFpbHVyZSA9IG51bGw7XG4gIF9fb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbDtcbiAgX19vY3JUeXBlTGlzdCA9IFsnaWRjYXJkJywgJ2RyaXZlcicsICdwYXNzcG9ydCcsICdmb3JlaWduLXBhc3Nwb3J0JywgJ2FsaWVuJywgJ2NyZWRpdCcsICdpZGNhcmQtc3NhJywgJ2RyaXZlci1zc2EnLCAncGFzc3BvcnQtc3NhJywgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJywgJ2FsaWVuLXNzYScsICdjcmVkaXQtc3NhJ107XG4gIF9fb2NyVHlwZVN0cmluZyA9IG5ldyBNYXAoW1tcIjFcIiwgXCJpZGNhcmRcIl0sIFtcIjJcIiwgXCJkcml2ZXJcIl0sIFtcIjNcIiwgXCJwYXNzcG9ydFwiXSwgW1wiNFwiLCBcImZvcmVpZ24tcGFzc3BvcnRcIl0sIFtcIjVcIiwgXCJhbGllblwiXSwgW1wiNS0xXCIsIFwiYWxpZW5cIl0sIFtcIjUtMlwiLCBcImFsaWVuXCJdLCBbXCI1LTNcIiwgXCJhbGllblwiXV0pO1xuICBfX3BhZ2VFbmQgPSBmYWxzZTtcbiAgX19vY3I7XG4gIF9fY2FudmFzO1xuICBfX3JvdGF0aW9uQ2FudmFzO1xuICBfX3ZpZGVvO1xuICBfX3ZpZGVvV3JhcDtcbiAgX19ndWlkZUJveDtcbiAgX19ndWlkZUJveFdyYXA7XG4gIF9fbWFza0JveFdyYXA7XG4gIF9fcHJldmVudFRvRnJlZXplVmlkZW87XG4gIF9fY3VzdG9tVUlXcmFwO1xuICBfX3RvcFVJO1xuICBfX21pZGRsZVVJO1xuICBfX2JvdHRvbVVJO1xuICBfX3ByZXZpZXdVSVdyYXA7XG4gIF9fcHJldmlld1VJO1xuICBfX3ByZXZpZXdJbWFnZTtcbiAgX19hZGRyZXNzID0gMDtcbiAgX19kZXRlY3RlZCA9IGZhbHNlO1xuICBfX0J1ZmZlciA9IG51bGw7XG4gIF9fcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgX19QcmV2SW1hZ2UgPSBudWxsO1xuICBfX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICBfX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gIF9fcmVzb2x1dGlvbldpZHRoID0gMDtcbiAgX19yZXNvbHV0aW9uSGVpZ2h0ID0gMDtcbiAgX192aWRlb1dpZHRoID0gMDtcbiAgX192aWRlb0hlaWdodCA9IDA7XG4gIF9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gIF9faW50ZXJ2YWxUaW1lcjtcbiAgX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyO1xuICBfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuICBfX3N0cmVhbTtcbiAgX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgX19mYWNpbmdNb2RlQ29uc3RyYWludCA9ICdlbnZpcm9ubWVudCc7XG4gIF9fdWlPcmllbnRhdGlvbiA9ICcnO1xuICBfX3ByZXZVaU9yaWVudGF0aW9uID0gJyc7XG4gIF9fdmlkZW9PcmllbnRhdGlvbiA9ICcnO1xuICBfX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5ID0gNTAwO1xuICBfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzID0gMzAwOyAvLyDsnoTsi5xcbiAgX19yZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7IC8vIOyehOyLnFxuICBfX2RldmljZUluZm87XG4gIF9faXNSb3RhdGVkOTBvcjI3MCA9IGZhbHNlO1xuICBfX2luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk7XG4gIF9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHRoaXMuSU5fUFJPR1JFU1MuTk9ORTtcbiAgX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgX19ndWlkZUJveFJhdGlvQnlXaWR0aCA9IDEuMDsgLy8g7IiY7KCV67aI6rCAXG4gIF9fdmlkZW9SYXRpb0J5SGVpZ2h0ID0gMC45OyAvLyDsiJjsoJXrtojqsIBcbiAgX19ndWlkZUJveFJlZHVjZVJhdGlvID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgX19jcm9wSW1hZ2VTaXplV2lkdGggPSAwO1xuICBfX2Nyb3BJbWFnZVNpemVIZWlnaHQgPSAwO1xuXG4gIC8qKiBEZWZhdWx0IG9wdGlvbnMgKi9cbiAgX19vcHRpb25zID0gbmV3IE9iamVjdCh7XG4gICAgc2hvd0NsaXBGcmFtZTogZmFsc2UsXG4gICAgc2hvd0NhbnZhc1ByZXZpZXc6IGZhbHNlLFxuICAgIHVzZVRvcFVJOiB0cnVlLFxuICAgIHVzZVRvcFVJVGV4dE1zZzogZmFsc2UsXG4gICAgdXNlTWlkZGxlVUk6IHRydWUsXG4gICAgdXNlTWlkZGxlVUlUZXh0TXNnOiB0cnVlLFxuICAgIHVzZUJvdHRvbVVJOiB0cnVlLFxuICAgIHVzZUJvdHRvbVVJVGV4dE1zZzogZmFsc2UsXG4gICAgdXNlUHJldmlld1VJOiB0cnVlLFxuICAgIGZyYW1lQm9yZGVyU3R5bGU6IHtcbiAgICAgIHdpZHRoOiA1LFxuICAgICAgc3R5bGU6ICdzb2xpZCcsXG4gICAgICByYWRpdXM6IDIwLFxuICAgICAgbm90X3JlYWR5OiAnIzAwMDAwMCcsXG4gICAgICAvLyDqsoDsoJVcbiAgICAgIHJlYWR5OiAnI2I4YjhiOCcsXG4gICAgICAvLyDtmozsg4lcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjNzI1YjY3JyxcbiAgICAgIC8vIOuztOudvFxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIO2VmOuKmFxuICAgICAgcmVjb2duaXplZDogJyMwMDNhYzInLFxuICAgICAgLy8g7YyM656RXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzAwM2FjMicsXG4gICAgICAvLyDtjIzrnpFcbiAgICAgIG9jcl9mYWlsZWQ6ICcjRkExMTNEJyxcbiAgICAgIC8vIOu5qOqwlVxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTRiMDBlJyxcbiAgICAgIC8vIOy0iOuhnVxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTRiMDBlJyAvLyDstIjroZ1cbiAgICB9LFxuXG4gICAgdXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2U6IHRydWUsXG4gICAgbWFza0ZyYW1lU3R5bGU6IHtcbiAgICAgIGNsaXBfZnJhbWU6ICcjZmYwMGJmJyxcbiAgICAgIC8vIOuUpe2NvO2UjCAo7IiY7KCV67aI6rCAKVxuICAgICAgYmFzZV9jb2xvcjogJyMzMzMzMzMnLFxuICAgICAgLy8g64uk7YGs6re466CI7J20ICjtiKzrqoXrj4TripQg7IiY7KCV67aI6rCAIGZm66GcIOqzoOyglSlcbiAgICAgIG5vdF9yZWFkeTogJyMzMzMzMzMnLFxuICAgICAgcmVhZHk6ICcjMzMzMzMzJyxcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjMzMzMzMzJyxcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICByZWNvZ25pemVkOiAnIzIyMjIyMicsXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzIyMjIyMicsXG4gICAgICBvY3JfZmFpbGVkOiAnIzExMTExMScsXG4gICAgICBvY3Jfc3VjY2VzczogJyMxMTExMTEnLFxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTExMTExJ1xuICAgIH0sXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgIGRldmljZUxhYmVsOiAnJyxcbiAgICB2aWRlb1RhcmdldElkOiAnJyxcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgICBzc2FNYXhSZXRyeUNvdW50OiAwXG4gIH0pO1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqIHB1YmxpYyBtZXRob2RzICovXG4gIGFzeW5jIHByZWxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRDtcbiAgICAgIGF3YWl0IHRoaXMuX19sb2FkUmVzb3VyY2VzKCk7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORTtcbiAgICAgIHRoaXMuX19wcmVsb2FkZWQgPSB0cnVlO1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLl9faW5pdGlhbGl6ZWQ7XG4gIH1cbiAgaXNQcmVsb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkZWQ7XG4gIH1cbiAgZ2V0UHJlbG9hZGluZ1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lO1xuICB9XG4gIGluaXQoc2V0dGluZ3MpIHtcbiAgICBpZiAoISEhc2V0dGluZ3MubGljZW5zZUtleSkgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIGtleSBpcyBlbXB0eScpO1xuICAgIHRoaXMuX19saWNlbnNlID0gc2V0dGluZ3MubGljZW5zZUtleTtcbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5fX29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy5fX3dpbmRvd0V2ZW50QmluZCgpO1xuICAgICAgdGhpcy5fX2RldmljZUluZm8gPSBkZXRlY3Rvci5nZXRPc1ZlcnNpb24oKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldE9wdGlvbihzZXR0aW5ncykge1xuICAgIHRoaXMuX19vcHRpb25zID0gc2V0dGluZ3M7XG4gIH1cbiAgZ2V0T3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucztcbiAgfVxuICBnZXRPY3JUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclR5cGVTdHJpbmcuZ2V0KHR5cGUpO1xuICB9XG4gIGdldFVJT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX191aU9yaWVudGF0aW9uO1xuICB9XG4gIGdldFZpZGVvT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICB9XG4gIGFzeW5jIHN0YXJ0T0NSKHR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsKSB7XG4gICAgaWYgKCEhIXR5cGUgfHwgISEhb25TdWNjZXNzIHx8ICEhIW9uRmFpbHVyZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fb2NyVHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fX3NzYU1vZGUgPSB0aGlzLl9fb2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMTtcbiAgICB0aGlzLl9fb25TdWNjZXNzID0gb25TdWNjZXNzO1xuICAgIHRoaXMuX19vbkZhaWx1cmUgPSBvbkZhaWx1cmU7XG4gICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZSA9IG9uSW5Qcm9ncmVzc0NoYW5nZTtcbiAgICBpZiAob25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlVG9wVUkpIHtcbiAgICAgICAgdGhpcy5fX3RvcFVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS50b3BVSTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkge1xuICAgICAgICB0aGlzLl9fbWlkZGxlVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm1pZGRsZVVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJKSB7XG4gICAgICAgIHRoaXMuX19ib3R0b21VSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuYm90dG9tVUk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW5pdGlhbGl6ZWQhJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCk7XG4gICAgICBpZiAoIXRoaXMuaXNQcmVsb2FkZWQoKSAmJiBwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX193YWl0UHJlbG9hZGVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5ET05FKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgYWJub3JtYWxseSBwcmVsb2FkaW5nIHN0YXR1cywgcHJlbG9hZGVkOiAke3RoaXMuaXNQcmVsb2FkZWQoKX0gLyBwcmVsb2FkaW5nU3RhdHVzOiAke3RoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9XG4gIH1cbiAgc3RvcE9DUigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICB0aGlzLl9fb25TdWNjZXNzID0gbnVsbDtcbiAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgfVxuICBhc3luYyByZXN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAvLyBhd2FpdCB0aGlzLnN0b3BPQ1IoKTtcbiAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICBhd2FpdCB0aGlzLnN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICB9XG5cbiAgLyoqIHByaXZhdGUgbWV0aG9kcyAqL1xuICBhc3luYyBfX3dhaXRQcmVsb2FkZWQoKSB7XG4gICAgbGV0IHdhaXRpbmdSZXRyeUNvdW50ID0gMDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YWl0aW5nUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9O1xuICAgICAgY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBfX3dpbmRvd0V2ZW50QmluZCgpIHtcbiAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgIGlmICgvaXBob25lfGlwb2R8aXBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgY29uc3Qgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSA9IGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzXy5fX3BhZ2VFbmQgPSB0cnVlO1xuICAgICAgX3RoaXNfLmNsZWFudXAoKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uX19vY3JUeXBlKSByZXR1cm47XG4gICAgICBpZiAoIV90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSkge1xuICAgICAgICBfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSB0cnVlO1xuICAgICAgICBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIF90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBfdGhpc18ucmVzdGFydE9DUihfdGhpc18uX19vY3JUeXBlLCBfdGhpc18uX19vblN1Y2Nlc3MsIF90aGlzXy5fX29uRmFpbHVyZSwgX3RoaXNfLl9fb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlUmVzaXplLCBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplRGVsYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cbiAgX19ibG9iVG9CYXNlNjQoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgfSk7XG4gIH1cbiAgLyoqIOudvOydtOyEvOyKpCDtgqTrpbwgaGVhcCDsl5AgYWxsb2NhdGlvbiAqL1xuICBfX2dldFN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKCEhIXRoaXMuX19saWNlbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMaWNlbnNlIEtleSBpcyBlbXB0eVwiKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLl9fT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOCh0aGlzLl9fbGljZW5zZSkgKyAxO1xuICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICB0aGlzLl9fT0NSRW5naW5lLnN0cmluZ1RvVVRGOCh0aGlzLl9fbGljZW5zZSwgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICByZXR1cm4gdGhpcy5fX3N0cmluZ09uV2FzbUhlYXA7XG4gIH1cbiAgX19zZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIGxldCByZXNvbHV0aW9uVGV4dCA9ICdub3QgcmVhZHknO1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgICByZXNvbHV0aW9uVGV4dFxuICAgICAgfTtcbiAgICB9XG4gICAgcmVzb2x1dGlvblRleHQgPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCArICd4JyArIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEwODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxOTIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxOTIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTA4MCkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMjgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gNzIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSA3MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMjgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9fdmlkZW9XaWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgIHRoaXMuX192aWRlb0hlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9O1xuICB9XG4gIF9fZ2V0U2Nhbm5lckFkZHJlc3Mob2NyVHlwZSkge1xuICAgIGlmICghdGhpcy5fX29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIGxldCBkZXN0cm95Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgY29uc3Qgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19nZXRTdHJpbmdPbldhc21IZWFwKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgLy8gT0NSXG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRJRENhcmRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUlEQ2FyZFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRQYXNzcG9ydFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95UGFzc3BvcnRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUFsaWVuU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0Q3JlZGl0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lDcmVkaXRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICBpZiAoYWRkcmVzcyA9PT0gMCkge1xuICAgICAgICBpZiAodGhpcy5fX21heFJldHJ5Q291bnRHZXRBZGRyZXNzID09PSB0aGlzLl9fcmV0cnlDb3VudEdldEFkZHJlc3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBMaWNlbnNlIEtleVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICB2b2lkIDA7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2dldEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2ModGhpcy5fX3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ICogNCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fX3Jlc3VsdEJ1ZmZlcikge1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYygyNTYpO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXMuX19CdWZmZXIsIHRoaXMuX19yZXN1bHRCdWZmZXJdO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlKGFkZHJlc3MsIG1hc2tNb2RlLCBjcm9wTW9kZSk7XG4gICAgICBjb25zdCBqcGdTaXplID0gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnU2l6ZSgpO1xuICAgICAgY29uc3QganBnUG9pbnRlciA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ0J1ZmZlcigpO1xuICAgICAgY29uc3QgcmVzdWx0VmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguYnVmZmVyLCBqcGdQb2ludGVyLCBqcGdTaXplKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHJlc3VsdFZpZXcpO1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXN1bHRdLCB7XG4gICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fX2Jsb2JUb0Jhc2U2NChibG9iKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lFbmNvZGVkSnBnKCk7XG4gICAgfVxuICB9XG4gIC8qKiBGcmVlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX0J1ZmZlcik7XG4gICAgICB0aGlzLl9fQnVmZmVyID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19yZXN1bHRCdWZmZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX3Jlc3VsdEJ1ZmZlcik7XG4gICAgICB0aGlzLl9fcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgUHJldkltYWdlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lQcmV2SW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuX19QcmV2SW1hZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX1ByZXZJbWFnZSk7XG4gICAgICB0aGlzLl9fUHJldkltYWdlID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIGZyZWUgc3RyaW5nIGhlYXAgYnVmZmVyICovXG4gIF9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIGZyZWUgc2Nhbm5lciBhZGRyZXNzICovXG4gIF9fZGVzdHJveVNjYW5uZXJBZGRyZXNzKCkge1xuICAgIGlmICh0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjaykge1xuICAgICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW9FbGVtZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9ID0gdGhpcy5fX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpO1xuICAgIGlmICghaXNTdXBwb3J0ZWRSZXNvbHV0aW9uKSB7XG4gICAgICBpZiAocmVzb2x1dGlvblRleHQgIT09ICdub3QgcmVhZHknKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzU3VwcG9ydGVkUmVzb2x1dGlvbjtcbiAgfVxuICBfX2dldFJvdGF0aW9uRGVncmVlKCkge1xuICAgIHJldHVybiAodGhpcy5fX29wdGlvbnMucm90YXRpb25EZWdyZWUgJSAzNjAgKyAzNjApICUgMzYwO1xuICB9XG4gIF9fZ2V0TWlycm9yTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX29wdGlvbnMubWlycm9yTW9kZTtcbiAgfVxuICBhc3luYyBfX2Nyb3BJbWFnZUZyb21WaWRlbygpIHtcbiAgICBpZiAoIXRoaXMuX19jYW1TZXRDb21wbGV0ZSkgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgICBsZXQgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICAvLyBzb3VyY2UgaW1hZ2UgKG9yIHZpZGVvKVxuICAgIC8vIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSKIHN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSD4pSI4pSI4pSI4pSIIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgc3ggIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogc0hlaWdodCAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiBjYW52YXNcbiAgICAvLyDilIMgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICAgICAgICDilIPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAgICAgICAgc1dpZHRoICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICDilIogZHkgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg+KUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgZHggICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogZEhlaWdodCDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICBkV2lkdGggICAgICAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHkpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL2RyYXdJbWFnZVxuXG4gICAgbGV0IGNhbGNDYW52YXMgPSBjYW52YXM7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCA9IHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGg7XG4gICAgbGV0IGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0ID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb247XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCwgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHRdID0gW2NhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0LCBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoXTtcbiAgICAgIFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFtjYWxjUmVzb2x1dGlvbl9oLCBjYWxjUmVzb2x1dGlvbl93XTtcbiAgICAgIGNhbGNDYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBjYWxjTWF4U1dpZHRoID0gOTk5OTk7XG4gICAgbGV0IGNhbGNNYXhTSGVpZ2h0ID0gOTk5OTk7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOyEuOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOyEuOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN4LCBzeTtcbiAgICBjb25zdCByYXRpbyA9IGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc1dpZHRoID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoICogcmF0aW8pLCBjYWxjTWF4U1dpZHRoKTtcbiAgICBjb25zdCBzSGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCAqIHJhdGlvKSwgY2FsY01heFNIZWlnaHQpO1xuICAgIHN4ID0gTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50V2lkdGggLSBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoKSAvIDIgKiByYXRpbyk7XG4gICAgc3kgPSBNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRIZWlnaHQgLSBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCkgLyAyICogcmF0aW8pO1xuICAgIGNvbnN0IGNhbGNDb250ZXh0ID0gY2FsY0NhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgIHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUuZGVidWcoJ3N4LCBzeSwgc1dpZHRoKHJlc29sdXRpb25fdyksIHNIZWlnaHQocmVzb2x1dGlvbl9oKSwgdmlkZW8udmlkZW9XaWR0aCwgdmlkZW8udmlkZW9IZWlnaHQnLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgdmlkZW8udmlkZW9XaWR0aCwgdmlkZW8udmlkZW9IZWlnaHQpO1xuICAgIGNhbGNDb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGEgPSBjYWxjQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faCk7XG4gICAgY29uc3QgaW1nRGF0YVVybCA9IGNhbGNDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fX3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCB0aGlzLl9fZ2V0Um90YXRpb25EZWdyZWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbaW1nRGF0YSwgaW1nRGF0YVVybF07XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIGRlZ3JlZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmIChkZWdyZWUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShbaW1nRGF0YSwgaW1nRGF0YVVybF0pO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gaW1nRGF0YVVybDtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIC8vIGNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGV4dCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGVtcENhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgaWYgKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcud2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWdyZWUgPT09IDkwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLmhlaWdodCwgMCk7ZWxzZSBpZiAoZGVncmVlID09PSAxODApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO2Vsc2UgaWYgKGRlZ3JlZSA9PT0gMjcwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoMCwgaW1nLndpZHRoKTtcbiAgICAgICAgdGVtcENvbnRleHQucm90YXRlKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHRlbXBDb250ZXh0KTtcbiAgICAgICAgcmVzb2x2ZShbbmV3SW1hZ2VEYXRhLCB0ZW1wQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpXSk7XG4gICAgICAgIHRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9faXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcywgYm94VHlwZSA9IDAsIHJldHJ5SW1nID0gbnVsbCkge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzIDwgMCkge1xuICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsZXQgaW1nRGF0YTtcbiAgICAgIGNvbnN0IFtidWZmZXJdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgICAgaWYgKHJldHJ5SW1nICE9PSBudWxsKSB7XG4gICAgICAgIGltZ0RhdGEgPSByZXRyeUltZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFtpbWdEYXRhXSA9IGF3YWl0IHRoaXMuX19jcm9wSW1hZ2VGcm9tVmlkZW8oKTtcbiAgICAgIH1cbiAgICAgIGlmICghISFpbWdEYXRhKSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGxdO1xuICAgICAgfVxuICAgICAgdGhpcy5fX09DUkVuZ2luZS5IRUFQOC5zZXQoaW1nRGF0YS5kYXRhLCBidWZmZXIpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5kZXRlY3RfaWRjYXJkKGJ1ZmZlciwgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIGFkZHJlc3MsIGJveFR5cGUpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQ2FyZGJveERldGVjdGVkIHJlc3VsdCAtPS0tLS0tJywgcmVzdWx0KVxuICAgICAgcmV0dXJuIFshIXJlc3VsdCwgaW1nRGF0YV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgc3NhTW9kZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWRkcmVzcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IGVsc2UgaWYgKGFkZHJlc3MgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnY2hlY2tWYWxpZGF0aW9uIEZhaWwnO1xuICAgICAgfVxuICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuX19vY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuSURDYXJkKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5QYXNzcG9ydChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQWxpZW4oYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgaWYgKG9jclJlc3VsdCA9PT0gbnVsbCB8fCBvY3JSZXN1bHQgPT09ICcnIHx8IG9jclJlc3VsdCA9PT0gJ2ZhbHNlJyB8fCBvY3JSZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCwgbnVsbF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY3JvcE1vZGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcImNyZWRpdFwiKSA+IC0xKSB7XG4gICAgICAgICAgY3JvcE1vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcmlnaW5JbWFnZSA9IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBmYWxzZSwgY3JvcE1vZGUpO1xuICAgICAgICBsZXQgbWFza0ltYWdlID0gYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRydWUsIGNyb3BNb2RlKTtcbiAgICAgICAgbWFza0ltYWdlID0gbWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZTtcbiAgICAgICAgaWYgKHNzYU1vZGUpIHtcbiAgICAgICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSwgZmFsc2UsIG1hc2tJbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX3N0YXJ0VHJ1dGgob2NyVHlwZSwgYWRkcmVzcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcIi1zc2FcIikgPiAtMSkge1xuICAgICAgICAvLyBUT0RPOiB3b3JrZXLrpbwg7IKs7Jqp7ZWY7JesIOuplOyduChVSSDrnpzrjZTrp4EpIOyKpOugiOuTnOqwgCDrqYjstpTsp4Ag7JWK64+E66GdIOyymOumrCDtlYTsmpQgKO2YhOyerCBsb2FkaW5nIFVJIOudhOyasOuptCDslaDri4jrqZTsnbTshZgg66mI7LakKVxuICAgICAgICAvLyBUT0RPOiBzZXRUaW1lb3V0IOycvOuhnCDrgpjriITrjZTrnbzrj4Qg7Zqo6rO8IOyXhuydjCBzZXRUaW1lb3V0IOyngOyasOqzoCwgd29ya2Vy66GcIOuzgOqyvSDtlYTsmpRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLl9fT0NSRW5naW5lLnNjYW5UcnV0aChhZGRyZXNzLCByZXN1bHRCdWZmZXIpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NTQSBNb2RlIGlzIHRydWUuIGJ1dCwgb2NyVHlwZSBpcyBpbnZhbGlkIDogJyArIG9jclR5cGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBhc3luYyBfX3N0YXJ0VHJ1dGhSZXRyeShvY3JUeXBlLCBhZGRyZXNzLCBpbWdEYXRhKSB7XG4gICAgYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDAsIGltZ0RhdGEpO1xuICAgIC8vIGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHRydWUpOyAgICAgIC8vIGZvciDshLHriqXsnYQg7JyE7ZW0IOynhO2WiSBYXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX19zdGFydFRydXRoKG9jclR5cGUsIGFkZHJlc3MpO1xuICB9XG4gIF9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy5fX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgYXN5bmMgX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy5fX29jclR5cGUuaW5jbHVkZXMoJ3Bhc3Nwb3J0Jyk7XG4gICAgICBhd2FpdCB0aGlzLl9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgIC8vIGNvbnN0IFt0cmFja10gPSB0aGlzLl9fc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW5fX2luaXRpYWxpemUgY2FwYWJpbGl0eScsIGNhcGFiaWxpdHkpO1xuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gdmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSB0aGlzLl9fc3RyZWFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEF2b2lkIHVzaW5nIHRoaXMgaW4gbmV3IGJyb3dzZXJzLCBhcyBpdCBpcyBnb2luZyBhd2F5LlxuICAgICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuX19zdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9IHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlby52aWRlb0hlaWdodCA8IDEgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9fYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgdmlkZW8ud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYW1lcmEgQWNjZXNzIFBlcm1pc3Npb24gaXMgbm90IGFsbG93ZWQnO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoXCJFNDAzXCIsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICB9IGVsc2UgaWYgKGUubmFtZSA9PT0gJ05vdFJlYWRhYmxlRXJyb3InKSB7XG4gICAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgICB0aGlzLl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpOyAvLyDsnqzqt4Ag7Zi47LacXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX19zZXRTdHlsZShlbCwgc3R5bGUpIHtcbiAgICBPYmplY3QuYXNzaWduKGVsLnN0eWxlLCBzdHlsZSk7XG4gIH1cbiAgX19jaGFuZ2VPQ1JTdGF0dXModmFsKSB7XG4gICAgc3dpdGNoICh2YWwpIHtcbiAgICAgIC8vIE9DUlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5OT1RfUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLlJFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLlJFQURZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRDpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1M6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0E6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRDpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5ET05FO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgX19jaGFuZ2VTdGFnZSh2YWwsIGZvcmNlVXBkYXRlID0gZmFsc2UsIHJlY29nbml6ZWRJbWFnZSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPT09IHZhbCAmJiBmb3JjZVVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2NoYW5nZU9DUlN0YXR1cyh2YWwpO1xuICAgIHRoaXMuX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIHRoaXMuX19pblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5zdHlsZSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXVxuICAgIH07XG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHN0eWxlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlKSB7XG4gICAgICBtYXNrQm94V3JhcD8ucXVlcnlTZWxlY3RvcihcIiNtYXNrQm94T3V0ZXJcIik/LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGVbdmFsXSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlVG9wVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlVG9wVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fdG9wVUksICd0b3AnLCB0aGlzLl9fb3B0aW9ucy51c2VUb3BVSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX19taWRkbGVVSSwgJ21pZGRsZScsIHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJIHx8IHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX2JvdHRvbVVJLCAnYm90dG9tJywgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9faGlkZVByZXZpZXdVSSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpIHtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSByZWNvZ25pemVkSW1hZ2U7XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogZ3VpZGVCb3guY2xpZW50V2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBndWlkZUJveC5jbGllbnRIZWlnaHQgKyAncHgnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld0ltYWdlLCBpbWdTdHlsZSk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSSwge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICB9XG4gIF9faGlkZVByZXZpZXdVSSgpIHtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSBcIlwiO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW5wdXREZXZpY2VzKGtpbmQsIGxhYmVsKSB7XG4gICAgLy8gdGhyb3cgZXJyb3IgaWYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IHtcbiAgICAgIGlmIChkZXZpY2Uua2luZCA9PT0gYCR7a2luZH1pbnB1dGAgJiYgZGV2aWNlLmdldENhcGFiaWxpdGllcykge1xuICAgICAgICBjb25zdCBjYXAgPSBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIGlmIChjYXA/LmZhY2luZ01vZGU/LmluY2x1ZGVzKHRoaXMuX19mYWNpbmdNb2RlQ29uc3RyYWludCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiB2aWRlb0RldmljZXMubGVuZ3RoIDw9IDEgPyB2aWRlb0RldmljZXMgOiB2aWRlb0RldmljZXMuZmlsdGVyKGRldmljZSA9PiBsYWJlbCA/IGRldmljZS5sYWJlbC5pbmNsdWRlcyhsYWJlbCkgOiB0cnVlKTtcbiAgfVxuICBjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLl9fdWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBpc0NoYW5nZWRcbiAgICB9O1xuICB9XG4gIF9fY2xlYXJDdXN0b21VSShvYmopIHtcbiAgICBvYmouaW5uZXJIVE1MID0gJyc7XG4gICAgb2JqLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShvYmosIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICB9XG4gIF9fc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoIW9jcikgdGhyb3cgbmV3IEVycm9yKFwib2NyIGRpdiBlbGVtZW50IGlzIG5vdCBleGlzdFwiKTtcbiAgICBpZiAodmlkZW9XcmFwKSB2aWRlb1dyYXAucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94V3JhcCkgZ3VpZGVCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmICh2aWRlbykgdmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGNhbnZhcykgY2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChyb3RhdGlvbkNhbnZhcykgcm90YXRpb25DYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94KSBndWlkZUJveC5yZW1vdmUoKTtcbiAgICBpZiAobWFza0JveFdyYXApIG1hc2tCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmIChwcmV2ZW50VG9GcmVlemVWaWRlbykgcHJldmVudFRvRnJlZXplVmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGN1c3RvbVVJV3JhcCkgY3VzdG9tVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAodG9wVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZVRvcFVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSSh0b3BVSSk7XG4gICAgaWYgKG1pZGRsZVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkobWlkZGxlVUkpO1xuICAgIGlmIChib3R0b21VSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKGJvdHRvbVVJKTtcbiAgICBpZiAocHJldmlld1VJV3JhcCkgcHJldmlld1VJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBwcmV2aWV3IFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAocHJldmlld1VJICYmICF0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKHByZXZpZXdVSSk7XG4gICAgY29uc3Qgcm90YXRpb25EZWdyZWUgPSB0aGlzLl9fZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA9IFs5MCwgMjcwXS5pbmNsdWRlcyhyb3RhdGlvbkRlZ3JlZSk7XG4gICAgbGV0IG9jclN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCBvY3JTdHlsZSk7XG4gICAgY29uc3Qgd3JhcFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyB2ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcbiAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH07XG4gICAgdmlkZW9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlkZW9XcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlb1dyYXAnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB7XG4gICAgICB3aGlsZSAodmlkZW9XcmFwLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdmlkZW9XcmFwLnJlbW92ZUNoaWxkKHZpZGVvV3JhcC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUobWFza0JveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgbGV0IG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZS5iYXNlX2NvbG9yICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLl9fb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICBtYXNrX2ZyYW1lID0gdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDwvc3ZnPlxcblwiICsgXCIgICAgPC9tYXNrPlxcblwiICsgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgKyBcIiAgICAgICAgICBmaWxsPSdcIiArIG1hc2tfZnJhbWUgKyBcIicgbWFzaz0ndXJsKCNtYXNrLXJlY3QpJz48L3JlY3Q+XFxuXCIgKyBcIiAgPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQ3NzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHZpZGVvU3R5bGUpO1xuICAgIHZpZGVvV3JhcC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgZ3VpZGVCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3VpZGVCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveFdyYXAnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChndWlkZUJveFdyYXApO1xuICAgIGd1aWRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94Jyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdub25lJyA6ICdkaXNwbGF5JyA6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzBweCcsXG4gICAgICB0b3A6ICczMHB4JyxcbiAgICAgIGJvcmRlcjogJ2dyZWVuIDJweCBzb2xpZCdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByb3RhdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJvdGF0aW9uQ2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdyb3RhdGlvbkNhbnZhcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShyb3RhdGlvbkNhbnZhcywge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdkaXNwbGF5JyA6ICdub25lJyA6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnYmx1ZSAycHggc29saWQnXG4gICAgfSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHJvdGF0aW9uQ2FudmFzKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2ZW50VG9GcmVlemVWaWRlbywge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206ICcxMCcsXG4gICAgICByaWdodDogJzEwJ1xuICAgIH0pO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLmlubmVySFRNTCA9IFwiXCIgKyBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcXFwiIHdpZHRoPVxcXCIzMnB4XFxcIiBoZWlnaHQ9XFxcIjMycHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCI+XFxuXCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiODRcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIwLjU1NTU1NTU1NTU1NTU1NTZzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiB2YWx1ZXM9XFxcIjEwOzBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImZpbGxcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJkaXNjcmV0ZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjg0XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiO1xuICAgIFwiPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKTtcbiAgICBjdXN0b21VSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXN0b21VSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2N1c3RvbVVJV3JhcCcpO1xuICAgIGNvbnN0IGN1c3RvbVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjdXN0b21VSVdyYXAsIGN1c3RvbVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY3VzdG9tVUlXcmFwKTtcblxuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJIOyCrOyaqSh1c2Up7Jes67aA7JmAIOq0gOqzhOyXhuydtCDsmIHsl63snYQg7J6h6riwIOychO2VtCwgZGl26rCAIOyXhuycvOuptCDsg53shLFcbiAgICAvLyBhZGp1c3RTdHlsZSgpIOyXkOyEnCDshLjrtoDsoIHsnbgg7IKs7J207KaI7JmAIOychOy5mOqwkiDrj5nsoIHsnLzroZwg7ISk7KCV65CoLlxuICAgIGlmICghdG9wVUkpIHtcbiAgICAgIHRvcFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndG9wVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKHRvcFVJKTtcbiAgICBpZiAoIW1pZGRsZVVJKSB7XG4gICAgICBtaWRkbGVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWlkZGxlVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21pZGRsZVVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZChtaWRkbGVVSSk7XG4gICAgaWYgKCFib3R0b21VSSkge1xuICAgICAgYm90dG9tVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJvdHRvbVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdib3R0b21VSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQoYm90dG9tVUkpO1xuICAgIHByZXZpZXdVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2aWV3VUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUlXcmFwJyk7XG4gICAgY29uc3QgcHJldmlld1VJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCBwcmV2aWV3VUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChwcmV2aWV3VUlXcmFwKTtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICBpZiAoIXByZXZpZXdVSSkge1xuICAgICAgICBwcmV2aWV3VUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJldmlld1VJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUknKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KTtcbiAgICAgIHByZXZpZXdVSVdyYXAuYXBwZW5kQ2hpbGQocHJldmlld1VJKTtcbiAgICAgIGlmICghcHJldmlld0ltYWdlKSB7XG4gICAgICAgIHByZXZpZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdJbWFnZScpO1xuICAgICAgICBwcmV2aWV3VUkuYXBwZW5kQ2hpbGQocHJldmlld0ltYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsb2FkaW5nIFVJIOychOy5mCDsnpDrpqzsnqHqsowg7ZWY6riwIOychO2VtFxuICAgIHRoaXMuX19hZGp1c3RTdHlsZSgpO1xuICAgIC8vIO2ZlOuptOqzvOuPhCDtmITsg4Eg7ZW06rKwXG4gICAgdGhpcy5fX3NldFN0eWxlKG9jciwge1xuICAgICAgZGlzcGxheTogJydcbiAgICB9KTtcbiAgICB0aGlzLl9fb2NyID0gb2NyO1xuICAgIHRoaXMuX19jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5fX3JvdGF0aW9uQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgdGhpcy5fX3ZpZGVvID0gdmlkZW87XG4gICAgdGhpcy5fX3ZpZGVvV3JhcCA9IHZpZGVvV3JhcDtcbiAgICB0aGlzLl9fZ3VpZGVCb3ggPSBndWlkZUJveDtcbiAgICB0aGlzLl9fZ3VpZGVCb3hXcmFwID0gZ3VpZGVCb3hXcmFwO1xuICAgIHRoaXMuX19tYXNrQm94V3JhcCA9IG1hc2tCb3hXcmFwO1xuICAgIHRoaXMuX19wcmV2ZW50VG9GcmVlemVWaWRlbyA9IHByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICAgIHRoaXMuX19jdXN0b21VSVdyYXAgPSBjdXN0b21VSVdyYXA7XG4gICAgdGhpcy5fX3RvcFVJID0gdG9wVUk7XG4gICAgdGhpcy5fX21pZGRsZVVJID0gbWlkZGxlVUk7XG4gICAgdGhpcy5fX2JvdHRvbVVJID0gYm90dG9tVUk7XG4gICAgdGhpcy5fX3ByZXZpZXdVSVdyYXAgPSBwcmV2aWV3VUlXcmFwO1xuICAgIHRoaXMuX19wcmV2aWV3VUkgPSBwcmV2aWV3VUk7XG4gICAgdGhpcy5fX3ByZXZpZXdJbWFnZSA9IHByZXZpZXdJbWFnZTtcbiAgICByZXR1cm4ge1xuICAgICAgb2NyLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICB2aWRlbyxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9O1xuICB9XG4gIGFzeW5jIF9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KSB7XG4gICAgLy8gd2FzbSDsnbjsi53shLHriqUg7LWc7KCB7ZmU65CcIO2VtOyDgeuPhFxuICAgIHRoaXMuX19yZXNvbHV0aW9uV2lkdGggPSAxMDgwO1xuICAgIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ID0gNzIwO1xuICAgIHRoaXMuX19jYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gdGhpcy5fX3NldHVwRG9tRWxlbWVudHMoKTtcbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBhd2FpdCB0aGlzLl9fZ2V0SW5wdXREZXZpY2VzKCd2aWRlbycsIHRoaXMuX19vcHRpb25zLmRldmljZUxhYmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmlkZW9EZXZpY2VzIDo6ICcsIHZpZGVvRGV2aWNlcylcbiAgICBjb25zdCBkZXZpY2VJZExpc3QgPSB2aWRlb0RldmljZXMubWFwKGRldmljZSA9PiBkZXZpY2UuZGV2aWNlSWQpO1xuICAgIHRoaXMuY2hlY2tVSU9yaWVudGF0aW9uKCk7XG4gICAgbGV0IGNvbnN0cmFpbnRXaWR0aCwgY29uc3RyYWludEhlaWdodDtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIC8vIHVpIDogcG9ydHJhaXRcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDEwODAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiA3MjAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVpIDogbGFuZHNjYXBlXG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICBtaW46IDEyODBcbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgbWluOiA3MjBcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge1xuICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgdmlkZW86IHtcbiAgICAgICAgem9vbToge1xuICAgICAgICAgIGlkZWFsOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGZhY2luZ01vZGU6IHtcbiAgICAgICAgICBpZGVhbDogdGhpcy5fX2ZhY2luZ01vZGVDb25zdHJhaW50XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgd2hpdGVCYWxhbmNlTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgZGV2aWNlSWQ6IHZpZGVvRGV2aWNlcy5sZW5ndGggPyB7XG4gICAgICAgICAgaWRlYWw6IGRldmljZUlkTGlzdFtkZXZpY2VJZExpc3QubGVuZ3RoIC0gMV1cbiAgICAgICAgfSA6IG51bGwsXG4gICAgICAgIHdpZHRoOiBjb25zdHJhaW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogY29uc3RyYWludEhlaWdodFxuICAgICAgfVxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0IGR1bXB0cmFjayA9IChbYSwgYl0sIHRyYWNrKSA9PlxuICAgICAgLy8gICBgJHthfSR7dHJhY2sua2luZCA9PSAndmlkZW8nID8gJ0NhbWVyYScgOiAnTWljcm9waG9uZSd9ICgke3RyYWNrLnJlYWR5U3RhdGV9KTogJHt0cmFjay5sYWJlbH0ke2J9YDtcblxuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvVHJhY2tzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpKVxuICAgICAgLy8gY29uc3Qgc3RyZWFtU2V0dGluZ3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRTZXR0aW5ncygpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbUNhcGFiaWxpdGllcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDYXBhYmlsaXRpZXMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q29uc3RyYWludHMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1TZXR0aW5ncyA6OiAnLCBzdHJlYW1TZXR0aW5ncylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCAvIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGggLyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBhc3BlY3RSYXRpbyA6OiAnICsgc3RyZWFtU2V0dGluZ3MuYXNwZWN0UmF0aW8pO1xuXG4gICAgICBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgW3JvdGF0aW9uQ2FudmFzLndpZHRoLCByb3RhdGlvbkNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoXTtcbiAgICAgIH1cbiAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgIHRoaXMuX19zdHJlYW0gPSBzdHJlYW07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgX19hZGp1c3RTdHlsZSgpIHtcbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQ7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IG9jci5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGg7XG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXM7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY1ZpZGVvV2lkdGgsIGNhbGNWaWRlb0hlaWdodF0gPSBbY2FsY1ZpZGVvSGVpZ2h0LCBjYWxjVmlkZW9XaWR0aF07XG4gICAgICBbY2FsY1ZpZGVvQ2xpZW50V2lkdGgsIGNhbGNWaWRlb0NsaWVudEhlaWdodF0gPSBbY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9DbGllbnRXaWR0aF07XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgbmV3VmlkZW9XaWR0aCA9IGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGxldCBuZXdWaWRlb0hlaWdodCA9IGNhbGNWaWRlb0NsaWVudEhlaWdodDtcbiAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IHRoaXMuX19ndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICBjb25zdCB2aWRlb1JhdGlvQnlIZWlnaHQgPSB0aGlzLl9fdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgLy8g7IS466GcIFVJXG4gICAgICAvLyB2aWRlbyDqsIDroZwg6riw7KSAIDEwMCUg7Jyg7KeAICjrs4Dqsr3sl4bsnYwpXG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuPhCDshLjroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDsubTrqZTrnbzripQg6rCA66GcXG4gICAgICAgIC8vIOyEuOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqTrpbwg67mE65SU7JikIOyEuOuhnCDquLjsnbTsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDqsIDroZwgVUlcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g67mE65SU7Jik66W8IOqwgOuhnCBVSeydmCBoZWlnaHQg6riw7KSA7Jy866GcIOykhOydtOqzoFxuICAgICAgICAvLyDqsIDroZwgVUkgaGVpZ2h0IOq4sOykgOycvOuhnCDruYTrlJTsmKTsnZggd2lkdGgg6rOE7IKwXG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IG5ld1ZpZGVvSGVpZ2h0ICogKGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvSGVpZ2h0KTtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTripQg67mE65SU7Jik66W8IOyEuOuhnCDquLDspIDsnLzroZwg66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gbmV3VmlkZW9IZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIOqwgOuhnCDtgazquLDqsIAg6rCA66GcIFVJIHdpZHRoICogcmF0aW8g6rCS67O064ukIO2BrOuptCxcbiAgICAgICAgaWYgKGd1aWRlQm94V2lkdGggPiBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aCkge1xuICAgICAgICAgIC8vIOqzhOyCsCDrsKnsi53snYQg67CU6r6864ukICjsgqzsnKAgOiDqsbDsnZgg7KCV7IKs6rCB7ZiV7JeQIOqwgOq5jOyatCDqsr3smrAg6rCA7J2065OcIOuwleyKpCDqsIDroZzqsIAg6r2J7LCo6rKMIOuQqC4pXG4gICAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuXG4gICAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiAoY2FsY1ZpZGVvSGVpZ2h0IC8gY2FsY1ZpZGVvV2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZggaGVpZ2h0IO2BrOq4sOulvCBVSeydmCBoZWlnaHQg6riw7KSA7JeQIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IGNhbGNPY3JDbGllbnRIZWlnaHQgKiB2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIOqwgOuhnCDtgazquLDqsIAg6rCA66GcIFVJIHdpZHRoICogcmF0aW8g6rCS67O064ukIO2BrOuptCxcbiAgICAgICAgaWYgKGd1aWRlQm94V2lkdGggPiBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aCkge1xuICAgICAgICAgIC8vIOqzhOyCsCDrsKnsi53snYQg67CU6r6864ukICjsgqzsnKAgOiDqsbDsnZgg7KCV7IKs6rCB7ZiV7JeQIOqwgOq5jOyatCDqsr3smrAg6rCA7J2065OcIOuwleyKpCDqsIDroZzqsIAg6r2J7LCo6rKMIOuQqC4pXG4gICAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDstpXshoxcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGd1aWRlQm94V2lkdGggKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGd1aWRlQm94SGVpZ2h0ICs9IGJvcmRlcldpZHRoICogMjtcbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZVdpZHRoID0gTWF0aC5taW4oZ3VpZGVCb3hXaWR0aCwgbmV3VmlkZW9XaWR0aCk7XG4gICAgdGhpcy5fX2Nyb3BJbWFnZVNpemVIZWlnaHQgPSBNYXRoLm1pbihndWlkZUJveEhlaWdodCwgbmV3VmlkZW9IZWlnaHQpO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveFdpZHRoID0gZ3VpZGVCb3hXaWR0aCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveEhlaWdodCA9IGd1aWRlQm94SGVpZ2h0ICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgaWYgKHRvcFVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodG9wVUksIHtcbiAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJzEwcHgnLFxuICAgICAgICAnaGVpZ2h0JzogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobWlkZGxlVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShtaWRkbGVVSSwge1xuICAgICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgICdkaXNwbGF5JzogJ2ZsZXgnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICAncGFkZGluZyc6ICcxMHB4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChib3R0b21VSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGJvdHRvbVVJLCB7XG4gICAgICAgICdwYWRkaW5nLXRvcCc6ICcxMHB4JyxcbiAgICAgICAgJ2hlaWdodCc6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgICdkaXNwbGF5JzogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChuZXdWaWRlb1dpZHRoICE9PSBjYWxjVmlkZW9DbGllbnRXaWR0aCkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIHdpZHRoOiBuZXdWaWRlb1dpZHRoICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChuZXdWaWRlb0hlaWdodCAhPT0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0KSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgaGVpZ2h0OiBuZXdWaWRlb0hlaWdodCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCB2aWRlb0lubmVyR2FwID0gMjsgLy8g66+47IS47ZWY6rKMIG1hc2tCb3hJbm5lcuuztOuLpCBndWlkZUJveOqwgCDsnpHsnYDqsoMg67O07KCVXG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9KTtcbiAgICBjb25zdCBtYXNrQm94SW5uZXIgPSBtYXNrQm94V3JhcC5xdWVyeVNlbGVjdG9yKFwiI21hc2tCb3hJbm5lclwiKTtcbiAgICBsZXQgciA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoICogMjtcbiAgICByID0gciA8IDAgPyAwIDogcjtcbiAgICBpZiAoIWlzTmFOKHJlZHVjZWRHdWlkZUJveFdpZHRoKSAmJiAhaXNOYU4ocmVkdWNlZEd1aWRlQm94SGVpZ2h0KSAmJiAhaXNOYU4oYm9yZGVyUmFkaXVzKSAmJiAhaXNOYU4oYm9yZGVyV2lkdGgpKSB7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJXaWR0aCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgbWFza0JveElubmVyV2lkdGggLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgbWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncngnLCByICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCByICsgJycpO1xuICAgIH1cbiAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0cnVlKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19jbG9zZUNhbWVyYSgpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICB9XG4gIGFzeW5jIF9fbG9hZFJlc291cmNlcygpIHtcbiAgICB2b2lkIDA7XG4gICAgaWYgKHRoaXMuX19yZXNvdXJjZXNMb2FkZWQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNka1N1cHBvcnRFbnYgPSAncXVyYW0nO1xuICAgIGxldCBpc1N1cHBvcnRTaW1kID0gYXdhaXQgc2ltZCgpO1xuICAgIGxldCBlbnZJbmZvID0gJyc7XG4gICAgZW52SW5mbyArPSBgb3MgOiAke3RoaXMuX19kZXZpY2VJbmZvLm9zfVxcbmA7XG4gICAgZW52SW5mbyArPSBgb3NTaW1wbGUgOiAke3RoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlfVxcbmA7XG4gICAgZW52SW5mbyArPSBgc2ltZCh3YXNtLWZlYXR1cmUtZGV0ZWN0KSA6ICR7aXNTdXBwb3J0U2ltZH1cXG5gO1xuICAgIGlmICh0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZSA9PT0gJ0lPUycgfHwgdGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGUgPT09ICdNQUMnKSB7XG4gICAgICBpc1N1cHBvcnRTaW1kID0gZmFsc2U7XG4gICAgfVxuICAgIGVudkluZm8gKz0gYGlzU3VwcG9ydFNpbWQoZmluYWwpIDogJHtpc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgZW52SW5mbyArPSBgVXNlckFnZW50IDogJHtuYXZpZ2F0b3IudXNlckFnZW50fVxcbmA7XG4gICAgaWYgKGlzU3VwcG9ydFNpbWQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHNka1N1cHBvcnRFbnYgKz0gJ19zaW1kLmpzJztcbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdvY3ItZGVtby10ZXN0LnVzZWIuY28ua3InKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgICAgc2RrU3VwcG9ydEVudiArPSAnLmpzJztcbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdvY3ItZGVtby10ZXN0LnVzZWIuY28ua3InKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChzZGtTdXBwb3J0RW52LCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpO1xuICAgIGxldCBzcmMgPSBhd2FpdCBmZXRjaCh1cmwuaHJlZikudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcbiAgICAgIGxldCByZWdleCA9IC8oLiopID0gTW9kdWxlLmN3cmFwL2dtO1xuICAgICAgbGV0IHNvdXJjZSA9IHRleHQucmVwbGFjZShyZWdleCwgJ01vZHVsZS4kMSA9IE1vZHVsZS5jd3JhcCcpO1xuXG4gICAgICAvLyBkYXRhKG1vZGVsKVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL15cXChmdW5jdGlvblxcKFxcKSBcXHsvbSwgJ3ZhciBjcmVhdGVNb2RlbERhdGEgPSBhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xcbicpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgIGNvbnNvbGUuZXJyb3IoXCJwYWNrYWdlIGVycm9yOlwiLCBlcnJvcik7JywgJyAgIHJlamVjdCgpO1xcbicgKyAnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCcgIH0sIGhhbmRsZUVycm9yKScsICcgIHJlc29sdmUoKTtcXG4nICsgJyAgfSwgaGFuZGxlRXJyb3IpJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcfVxcKVxcKFxcKTsvbSwgJ1xcbiB9KVxcbicgKyAnfTsnKTtcblxuICAgICAgLy8gd2FzbVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ3F1cmFtLndhc20nLCBuZXcgVVJMKCdxdXJhbS53YXNtJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9SRU1PVEVfUEFDS0FHRV9CQVNFID0gWydcIl1xdXJhbVxcLmRhdGFbXCInXS9nbSwgYFJFTU9URV9QQUNLQUdFX0JBU0UgPSBcIiR7bmV3IFVSTCgncXVyYW0uZGF0YScsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZn1cImApO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2Z1bmN0aW9uIGNyZWF0ZVdhc20nLCAnYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2FzbScpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2luc3RhbnRpYXRlQXN5bmMoKTsnLCAnYXdhaXQgaW5zdGFudGlhdGVBc3luYygpOycpO1xuXG4gICAgICAvLyB3YXNtIGFuZCBkYXRhKG1vZGVsKSBmaWxlIOuzkeugrOuhnCBmZXRjaCDtlZjquLAg7JyE7ZW0XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgndmFyIGFzbSA9IGNyZWF0ZVdhc20oKTsnLCAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIHN0YXJ0XCIpXFxuJyArICdhd2FpdCAoYXN5bmMgZnVuY3Rpb24oKSB7XFxuJyArICcgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XFxuJyArICcgICAgdmFyIGlzQ3JlYXRlZFdhc20gPSBmYWxzZTtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkRGF0YSA9IGZhbHNlO1xcbicgKyAnICAgIGNyZWF0ZVdhc20oKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZFdhc20gPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZERhdGEpIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSk7XFxuJyArICcgICAgY3JlYXRlTW9kZWxEYXRhKCkudGhlbigoKSA9PiB7XFxuJyArICcgICAgICBpc0NyZWF0ZWREYXRhID0gdHJ1ZTtcXG4nICsgJyAgICAgIGlmIChpc0NyZWF0ZWRXYXNtKSB7IHJlc29sdmUoKTsgfVxcbicgKyAnICAgIH0pXFxuJyArICcgIH0pO1xcbicgKyAnfSkoKTtcXG4nICsgJ2NvbnNvbGUubG9nKFwiY3JlYXRlIHdhc20gYW5kIGRhdGEgLSBlbmRcIiknKTtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSk7XG4gICAgc3JjID0gYFxuICAgIChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICR7c3JjfVxuICAgICAgTW9kdWxlLmxlbmd0aEJ5dGVzVVRGOCA9IGxlbmd0aEJ5dGVzVVRGOFxuICAgICAgTW9kdWxlLnN0cmluZ1RvVVRGOCA9IHN0cmluZ1RvVVRGOFxuICAgICAgcmV0dXJuIE1vZHVsZVxuICAgIH0pKClcbiAgICAgICAgYDtcbiAgICB0aGlzLl9fT0NSRW5naW5lID0gYXdhaXQgZXZhbChzcmMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQgPSBhc3luYyBfID0+IHtcbiAgICAgIHZvaWQgMDtcbiAgICB9O1xuICAgIGF3YWl0IHRoaXMuX19PQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQoKTtcbiAgICB0aGlzLl9fcmVzb3VyY2VzTG9hZGVkID0gdHJ1ZTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19zdGFydFNjYW5JbXBsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19hZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuX19wYWdlRW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID0gaXNOYU4ocGFyc2VJbnQodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCkpID8gMCA6IHBhcnNlSW50KHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQpO1xuICAgICAgY29uc3Qgc2NhbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgb2NyUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICAgIGltZ0RhdGFVcmwgPSBudWxsLFxuICAgICAgICAgICAgbWFza0ltYWdlID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgICBzc2FSZXN1bHRMaXN0ID0gW107XG5cbiAgICAgICAgICAvLyB0aGlzLl9fY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICAgIGlmICghdGhpcy5fX09DUkVuZ2luZVsnYXNtJ10pIHJldHVybjtcblxuICAgICAgICAgIC8vIFRPRE8gOiDshKTsoJXtlaDsiJgg7J6I6rKMIOuzgOqyvSBkZWZhdWx0IOqwkuuPhCDsoJzqs7VcbiAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvbl93LCByZXNvbHV0aW9uX2hdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB2aWRlb1xuICAgICAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgICAgIGlmIChyZXNvbHV0aW9uX3cgPT09IDAgfHwgcmVzb2x1dGlvbl9oID09PSAwKSByZXR1cm47XG4gICAgICAgICAgaWYgKHRoaXMuX19kZXRlY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGJlZm9yZSAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcbiAgICAgICAgICBpZiAodGhpcy5fX2FkZHJlc3MgPT09IDAgJiYgIXRoaXMuX19wYWdlRW5kICYmIHRoaXMuX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW8pKSB7XG4gICAgICAgICAgICBbdGhpcy5fX2FkZHJlc3MsIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrXSA9IHRoaXMuX19nZXRTY2FubmVyQWRkcmVzcyh0aGlzLl9fb2NyVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5fX2FkZHJlc3MgfHwgdGhpcy5fX3BhZ2VFbmQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBhZnRlciAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9fb2NyU3RhdHVzIDwgdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBPQ1Ig7JmE66OMIOydtOyghCDsg4Htg5xcblxuICAgICAgICAgICAgLy8gY2FyZCBub3QgZGV0ZWN0ZWRcbiAgICAgICAgICAgIGNvbnN0IFtpc0RldGVjdGVkQ2FyZCwgaW1nRGF0YV0gPSBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQodGhpcy5fX2FkZHJlc3MsIDApO1xuICAgICAgICAgICAgaWYgKCFpc0RldGVjdGVkQ2FyZCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLlJFQURZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfRkFJTEVEKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhcmQgaXMgZGV0ZWN0ZWRcbiAgICAgICAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX1NVQ0NFU1MpO1xuXG4gICAgICAgICAgICAvLyBzc2EgcmV0cnkg7ISk7KCV7J20IOuQmOyWtCDsnojsnLzrqbQsIGNhcmQgZGV0ZWN0IOyEseqzteyLnCDsnbTrr7jsp4Ag7KCA7J6lXG4gICAgICAgICAgICBpZiAodGhpcy5fX3NzYU1vZGUgJiYgdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5fX2VucXVldWVEZXRlY3RlZENhcmRRdWV1ZShpbWdEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtvY3JSZXN1bHQsIGltZ0RhdGFVcmwsIG1hc2tJbWFnZV0gPSBhd2FpdCB0aGlzLl9fc3RhcnRSZWNvZ25pdGlvbih0aGlzLl9fYWRkcmVzcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPj0gdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBvY3Ig7JmE66OMIOydtO2bhCDsg4Htg5xcblxuICAgICAgICAgICAgLy8gZmFpbHVyZSBjYXNlXG4gICAgICAgICAgICBpZiAob2NyUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9DUiBTdGF0dXMgaXMgJHt0aGlzLl9fb2NyU3RhdHVzfSwgYnV0IG9jclJlc3VsdCBpcyBmYWxzZWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pOyAvLyBPQ1Ig7JmE66OMIOyLnOygkOyXkCBjYW1lcmEgcHJldmlldyBvZmZcblxuICAgICAgICAgICAgaWYgKHRoaXMuX19zc2FNb2RlKSB7XG4gICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgLy8g7LWc7LSIIOyLnOuPhFxuICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2FkZHJlc3MpO1xuICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW0VSUl0gU1NBIE1PREUgaXMgdHJ1ZS4gYnV0LCBzc2FSZXN1bHQgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzc2FSZXN1bHRMaXN0LnB1c2goc3NhUmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldHJ5U3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0LmluZGV4T2YoXCJGQUtFXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3NzYVJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aFJldHJ5KHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHJ5V29ya2luZ1RpbWUgPSBuZXcgRGF0ZSgpIC0gcmV0cnlTdGFydERhdGU7XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5fX29uU3VjY2Vzc1Byb2Nlc3Moe1xuICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgICAgICAgIG9jcl9kYXRhOiBwYXJzZXIucGFyc2VPY3JSZXN1bHQodGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCBvY3JSZXN1bHQsIHNzYVJlc3VsdCwgdGhpcy5fX3NzYVJldHJ5Q291bnQsIHNzYVJlc3VsdExpc3QpLFxuICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiBpbWdEYXRhVXJsLFxuICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogbWFza0ltYWdlLFxuICAgICAgICAgICAgICBzc2FfbW9kZTogdGhpcy5fX3NzYU1vZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3InO1xuICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBcIjogXCIgKyBlLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3JlY292ZXJ5U2NhbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcyhcIldBMDAxXCIsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9fZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2NhbiwgMSk7IC8vIOyerOq3gFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8gVUkg656c642U66eBIGJsb2NraW5nIOuwqeyngCAoc2V0VGltZW91dClcbiAgICB9KTtcbiAgfVxuXG4gIF9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEpIHtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLmxlbmd0aCA9PT0gcGFyc2VJbnQodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCkpIHtcbiAgICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5zaGlmdCgpO1xuICAgIH1cbiAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUucHVzaChpbWdEYXRhKTtcbiAgICB2b2lkIDA7IC8vIHNob3VsZCBiZSByZW1vdmVkXG4gIH1cblxuICBfX29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCkge1xuICAgIC8vIOyduOyLnSDshLHqs7Ug7Iqk7LqUIOujqO2UhCDsooXro4xcbiAgICBpZiAocmV2aWV3X3Jlc3VsdC5zc2FfbW9kZSkge1xuICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0EpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUyk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICBcInJlc3VsdF9jb2RlXCI6IFwiTjEwMFwiLFxuICAgICAgICBcInJlc3VsdF9tZXNzYWdlXCI6IFwiT0suXCJcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwic3VjY2Vzc1wiLFxuICAgICAgcmV2aWV3X3Jlc3VsdDogcmV2aWV3X3Jlc3VsdFxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vblN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIF9fb25GYWlsdXJlUHJvY2VzcyhyZXN1bHRDb2RlLCBlLCBlcnJvck1lc3NhZ2UpIHtcbiAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEKTtcbiAgICBsZXQgZXJyb3JEZXRhaWwgPSBcIlwiO1xuICAgIGlmIChlPy50b1N0cmluZygpKSBlcnJvckRldGFpbCArPSBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGU/LnN0YWNrKSBlcnJvckRldGFpbCArPSBlLnN0YWNrO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICBcInJlc3VsdF9jb2RlXCI6IHJlc3VsdENvZGUsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogZXJyb3JNZXNzYWdlXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiBcImZhaWxlZFwiLFxuICAgICAgcmV2aWV3X3Jlc3VsdDoge1xuICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgIGVycm9yX2RldGFpbDogZXJyb3JEZXRhaWxcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0aGlzLl9fb25GYWlsdXJlKSB7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlKHJlc3VsdCk7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3N0YXJ0U2NhbigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuSW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyBfX3JlY292ZXJ5U2NhbigpIHtcbiAgICB2b2lkIDA7XG4gICAgdGhpcy5fX3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuKCk7XG4gIH1cbiAgc3RvcFNjYW4oKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9XG4gIHN0b3BTdHJlYW0oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy5fX3N0cmVhbSkge1xuICAgICAgdGhpcy5fX3N0cmVhbS5zdG9wICYmIHRoaXMuX19zdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzICYmIHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhY2tzLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdHJlYW0gPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiog66mU66qo66asIGFsbG9jYXRpb24gZnJlZSDtlajsiJggKi9cbiAgY2xlYW51cCgpIHtcbiAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJBZGRyZXNzKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lCdWZmZXIoKTtcbiAgICB0aGlzLl9fZGVzdHJveVByZXZJbWFnZSgpO1xuICAgIHRoaXMuX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpO1xuICB9XG4gIF9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIGlmICh0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKTtcbiAgICAgIHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVzZUJPQ1I7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU9BLFFBQVEsTUFBTSx1QkFBdUI7QUFDNUMsT0FBT0MsTUFBTSxNQUFNLHFCQUFxQjtBQUN4QyxTQUFTQyxJQUFJLEVBQUVDLE9BQU8sUUFBUSxrQ0FBa0M7QUFDaEUsSUFBSUMsUUFBUTtBQUNaLE1BQU1DLE9BQU8sQ0FBQztFQXlCWjs7RUFFQTs7RUF3RGlDO0VBQ0w7O0VBTUU7RUFDRjtFQUNDOztFQUk3Qjs7RUEwREE7RUFDQUMsV0FBV0EsQ0FBQSxFQUFHO0lBQUFDLGVBQUEsc0JBMUpBO01BQ1pDLElBQUksRUFBRSxNQUFNO01BQ1pDLFNBQVMsRUFBRSxXQUFXO01BQ3RCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxtQkFBbUIsRUFBRSxnQkFBZ0I7TUFDckNDLGtCQUFrQixFQUFFLGVBQWU7TUFDbkNDLGNBQWMsRUFBRSxZQUFZO01BQzVCQyx1QkFBdUIsRUFBRSxxQkFBcUI7TUFDOUNDLFdBQVcsRUFBRSxhQUFhO01BQzFCQyxvQkFBb0IsRUFBRSxzQkFBc0I7TUFDNUNDLFVBQVUsRUFBRTtJQUNkLENBQUM7SUFBQVYsZUFBQSxxQkFDWTtNQUNYRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO01BQ2JDLEtBQUssRUFBRSxDQUFDO01BQ1JLLFdBQVcsRUFBRSxDQUFDO01BQ2RHLElBQUksRUFBRTtJQUNSLENBQUM7SUFBQVgsZUFBQSw0QkFDbUI7TUFDbEJZLFdBQVcsRUFBRSxDQUFDLENBQUM7TUFDZkMsT0FBTyxFQUFFLENBQUM7TUFDVkYsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUFBWCxlQUFBLHNCQUthLElBQUk7SUFBQUEsZUFBQSx3QkFDRixLQUFLO0lBQUFBLGVBQUEsc0JBQ1AsS0FBSztJQUFBQSxlQUFBLDZCQUNFLElBQUksQ0FBQ2MsaUJBQWlCLENBQUNGLFdBQVc7SUFBQVosZUFBQTtJQUFBQSxlQUFBLG9CQUUzQyxJQUFJO0lBQUFBLGVBQUEsb0JBQ0osS0FBSztJQUFBQSxlQUFBLHNCQUNILElBQUksQ0FBQ2UsVUFBVSxDQUFDYixTQUFTO0lBQUFGLGVBQUEsMEJBQ3JCLENBQUM7SUFBQUEsZUFBQSw4QkFDRyxFQUFFO0lBQUFBLGVBQUEsc0JBQ1YsSUFBSTtJQUFBQSxlQUFBLHNCQUNKLElBQUk7SUFBQUEsZUFBQSwrQkFDSyxJQUFJO0lBQUFBLGVBQUEsd0JBQ1gsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7SUFBQUEsZUFBQSwwQkFDcEssSUFBSWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUFBaEIsZUFBQSxvQkFDckssS0FBSztJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUEsb0JBaUJMLENBQUM7SUFBQUEsZUFBQSxxQkFDQSxLQUFLO0lBQUFBLGVBQUEsbUJBQ1AsSUFBSTtJQUFBQSxlQUFBLHlCQUNFLElBQUk7SUFBQUEsZUFBQSxzQkFDUCxJQUFJO0lBQUFBLGVBQUEsNkJBQ0csSUFBSTtJQUFBQSxlQUFBLDJCQUNOLEtBQUs7SUFBQUEsZUFBQSw0QkFDSixDQUFDO0lBQUFBLGVBQUEsNkJBQ0EsQ0FBQztJQUFBQSxlQUFBLHVCQUNQLENBQUM7SUFBQUEsZUFBQSx3QkFDQSxDQUFDO0lBQUFBLGVBQUEsNEJBQ0csS0FBSztJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUEsbUNBS0UsSUFBSTtJQUFBQSxlQUFBLGlDQUNOLGFBQWE7SUFBQUEsZUFBQSwwQkFDcEIsRUFBRTtJQUFBQSxlQUFBLDhCQUNFLEVBQUU7SUFBQUEsZUFBQSw2QkFDSCxFQUFFO0lBQUFBLGVBQUEsa0NBQ0csSUFBSTtJQUFBQSxlQUFBLGtDQUNKLEdBQUc7SUFBQUEsZUFBQSxvQ0FDRCxHQUFHO0lBQUFBLGVBQUEsaUNBQ04sQ0FBQztJQUFBQSxlQUFBO0lBQUFBLGVBQUEsNkJBRUwsS0FBSztJQUFBQSxlQUFBLDJCQUNQLElBQUksQ0FBQ2lCLFdBQVcsQ0FBQ2YsU0FBUztJQUFBRixlQUFBLG1DQUNsQixJQUFJLENBQUNpQixXQUFXLENBQUNoQixJQUFJO0lBQUFELGVBQUEscUNBQ25CLEtBQUs7SUFBQUEsZUFBQSxpQ0FDVCxHQUFHO0lBQUFBLGVBQUEsK0JBQ0wsR0FBRztJQUFBQSxlQUFBLGdDQUNGLEdBQUc7SUFBQUEsZUFBQSwrQkFDSixDQUFDO0lBQUFBLGVBQUEsZ0NBQ0EsQ0FBQztJQUFBQSxlQUFBLG9CQUdiLElBQUlrQixNQUFNLENBQUM7TUFDckJDLGFBQWEsRUFBRSxLQUFLO01BQ3BCQyxpQkFBaUIsRUFBRSxLQUFLO01BQ3hCQyxRQUFRLEVBQUUsSUFBSTtNQUNkQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsV0FBVyxFQUFFLElBQUk7TUFDakJDLGtCQUFrQixFQUFFLElBQUk7TUFDeEJDLFdBQVcsRUFBRSxJQUFJO01BQ2pCQyxrQkFBa0IsRUFBRSxLQUFLO01BQ3pCQyxZQUFZLEVBQUUsSUFBSTtNQUNsQkMsZ0JBQWdCLEVBQUU7UUFDaEJDLEtBQUssRUFBRSxDQUFDO1FBQ1JDLEtBQUssRUFBRSxPQUFPO1FBQ2RDLE1BQU0sRUFBRSxFQUFFO1FBQ1ZDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCO1FBQ0FDLEtBQUssRUFBRSxTQUFTO1FBQ2hCO1FBQ0FDLGFBQWEsRUFBRSxTQUFTO1FBQ3hCO1FBQ0FDLGNBQWMsRUFBRSxTQUFTO1FBQ3pCO1FBQ0FDLFVBQVUsRUFBRSxTQUFTO1FBQ3JCO1FBQ0FDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUI7UUFDQUMsVUFBVSxFQUFFLFNBQVM7UUFDckI7UUFDQUMsV0FBVyxFQUFFLFNBQVM7UUFDdEI7UUFDQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDO01BQ2xDLENBQUM7O01BRURDLHVCQUF1QixFQUFFLElBQUk7TUFDN0JDLGNBQWMsRUFBRTtRQUNkQyxVQUFVLEVBQUUsU0FBUztRQUNyQjtRQUNBQyxVQUFVLEVBQUUsU0FBUztRQUNyQjtRQUNBWixTQUFTLEVBQUUsU0FBUztRQUNwQkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLGFBQWEsRUFBRSxTQUFTO1FBQ3hCQyxjQUFjLEVBQUUsU0FBUztRQUN6QkMsVUFBVSxFQUFFLFNBQVM7UUFDckJDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUJDLFVBQVUsRUFBRSxTQUFTO1FBQ3JCQyxXQUFXLEVBQUUsU0FBUztRQUN0QkMsb0JBQW9CLEVBQUU7TUFDeEIsQ0FBQztNQUNESyxlQUFlLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNO01BQ3ZDQyxXQUFXLEVBQUUsRUFBRTtNQUNmQyxhQUFhLEVBQUUsRUFBRTtNQUNqQkMsY0FBYyxFQUFFLENBQUM7TUFDakJDLFVBQVUsRUFBRSxLQUFLO01BQ2pCQyxnQkFBZ0IsRUFBRTtJQUNwQixDQUFDLENBQUM7SUFJQSxJQUFJeEQsUUFBUSxFQUFFLE9BQU9BLFFBQVE7SUFDN0JBLFFBQVEsR0FBRyxJQUFJO0lBQ2YsT0FBT0EsUUFBUTtFQUNqQjs7RUFFQTtFQUNNeUQsVUFBVUEsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsS0FBQTtJQUFBLE9BQUFDLGlCQUFBO01BQ2pCLElBQUlELEtBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUU7UUFDdEIsS0FBSyxDQUFDO01BQ1IsQ0FBQyxNQUFNO1FBQ0wsS0FBSyxDQUFDO1FBQ05GLEtBQUksQ0FBQ0csa0JBQWtCLEdBQUdILEtBQUksQ0FBQ3pDLGlCQUFpQixDQUFDRCxPQUFPO1FBQ3hELE1BQU0wQyxLQUFJLENBQUNJLGVBQWUsRUFBRTtRQUM1QkosS0FBSSxDQUFDRyxrQkFBa0IsR0FBR0gsS0FBSSxDQUFDekMsaUJBQWlCLENBQUNILElBQUk7UUFDckQ0QyxLQUFJLENBQUNLLFdBQVcsR0FBRyxJQUFJO1FBQ3ZCLEtBQUssQ0FBQztNQUNSO0lBQUM7RUFDSDtFQUNBQyxhQUFhQSxDQUFBLEVBQUc7SUFDZCxPQUFPLElBQUksQ0FBQ0MsYUFBYTtFQUMzQjtFQUNBTCxXQUFXQSxDQUFBLEVBQUc7SUFDWixPQUFPLElBQUksQ0FBQ0csV0FBVztFQUN6QjtFQUNBRyxtQkFBbUJBLENBQUEsRUFBRztJQUNwQixPQUFPLElBQUksQ0FBQ0wsa0JBQWtCO0VBQ2hDO0VBQ0FNLFlBQVlBLENBQUEsRUFBRztJQUNiLE9BQU8sSUFBSSxDQUFDQyxXQUFXO0VBQ3pCO0VBQ0FDLElBQUlBLENBQUNDLFFBQVEsRUFBRTtJQUNiLElBQUksQ0FBQyxDQUFDLENBQUNBLFFBQVEsQ0FBQ0MsVUFBVSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ25FLElBQUksQ0FBQ0MsU0FBUyxHQUFHSCxRQUFRLENBQUNDLFVBQVU7SUFDcEMsSUFBTUcsYUFBYSxHQUFHQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNDLFNBQVMsRUFBRVAsUUFBUSxDQUFDO0lBQzNELElBQUksQ0FBQ1EsU0FBUyxDQUFDSixhQUFhLENBQUM7SUFDN0IsS0FBSyxDQUFDO0lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQ1YsYUFBYSxFQUFFLEVBQUU7TUFDekIsSUFBSSxDQUFDZSxpQkFBaUIsRUFBRTtNQUN4QixJQUFJLENBQUNDLFlBQVksR0FBR3BGLFFBQVEsQ0FBQ3FGLFlBQVksRUFBRTtNQUMzQyxLQUFLLENBQUM7TUFDTixJQUFJLENBQUNoQixhQUFhLEdBQUcsSUFBSTtJQUMzQjtFQUNGO0VBQ0FhLFNBQVNBLENBQUNSLFFBQVEsRUFBRTtJQUNsQixJQUFJLENBQUNPLFNBQVMsR0FBR1AsUUFBUTtFQUMzQjtFQUNBWSxTQUFTQSxDQUFBLEVBQUc7SUFDVixPQUFPLElBQUksQ0FBQ0wsU0FBUztFQUN2QjtFQUNBTSxVQUFVQSxDQUFDQyxJQUFJLEVBQUU7SUFDZixPQUFPLElBQUksQ0FBQ0MsZUFBZSxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUN2QztFQUNBRyxnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixPQUFPLElBQUksQ0FBQ0MsZUFBZTtFQUM3QjtFQUNBQyxtQkFBbUJBLENBQUEsRUFBRztJQUNwQixPQUFPLElBQUksQ0FBQ0Msa0JBQWtCO0VBQ2hDO0VBQ01DLFFBQVFBLENBQUNQLElBQUksRUFBRVEsU0FBUyxFQUFFQyxTQUFTLEVBQTZCO0lBQUEsSUFBQUMsVUFBQSxHQUFBQyxTQUFBO01BQUFDLE1BQUE7SUFBQSxPQUFBckMsaUJBQUE7TUFBQSxJQUEzQnNDLGtCQUFrQixHQUFBSCxVQUFBLENBQUFJLE1BQUEsUUFBQUosVUFBQSxRQUFBSyxTQUFBLEdBQUFMLFVBQUEsTUFBRyxJQUFJO01BQ2xFLElBQUksQ0FBQyxDQUFDLENBQUNWLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQ1EsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEVBQUU7UUFDM0MsS0FBSyxDQUFDO1FBQ047TUFDRjtNQUNBRyxNQUFJLENBQUNJLFNBQVMsR0FBR2hCLElBQUk7TUFDckJZLE1BQUksQ0FBQ0ssU0FBUyxHQUFHTCxNQUFJLENBQUNJLFNBQVMsQ0FBQ0UsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNwRE4sTUFBSSxDQUFDTyxXQUFXLEdBQUdYLFNBQVM7TUFDNUJJLE1BQUksQ0FBQ1EsV0FBVyxHQUFHWCxTQUFTO01BQzVCRyxNQUFJLENBQUNTLG9CQUFvQixHQUFHUixrQkFBa0I7TUFDOUMsSUFBSUEsa0JBQWtCLEVBQUU7UUFDdEIsSUFBSUQsTUFBSSxDQUFDbkIsU0FBUyxDQUFDckQsUUFBUSxFQUFFO1VBQzNCd0UsTUFBSSxDQUFDVSxPQUFPLEdBQUc5RyxRQUFRLENBQUMrRyxjQUFjLEVBQUUsQ0FBQ0MsS0FBSztRQUNoRDtRQUNBLElBQUlaLE1BQUksQ0FBQ25CLFNBQVMsQ0FBQ25ELFdBQVcsRUFBRTtVQUM5QnNFLE1BQUksQ0FBQ2EsVUFBVSxHQUFHakgsUUFBUSxDQUFDK0csY0FBYyxFQUFFLENBQUNHLFFBQVE7UUFDdEQ7UUFDQSxJQUFJZCxNQUFJLENBQUNuQixTQUFTLENBQUNqRCxXQUFXLEVBQUU7VUFDOUJvRSxNQUFJLENBQUNlLFVBQVUsR0FBR25ILFFBQVEsQ0FBQytHLGNBQWMsRUFBRSxDQUFDSyxRQUFRO1FBQ3REO01BQ0Y7TUFDQWhCLE1BQUksQ0FBQ2lCLGFBQWEsQ0FBQ2pCLE1BQUksQ0FBQzVFLFdBQVcsQ0FBQ2YsU0FBUyxDQUFDO01BQzlDLElBQUksQ0FBQzJGLE1BQUksQ0FBQ2hDLGFBQWEsRUFBRSxFQUFFO1FBQ3pCLE1BQU0sSUFBSVEsS0FBSyxDQUFDLGtCQUFrQixDQUFDO01BQ3JDO01BQ0EsSUFBSTtRQUNGLElBQU0wQyxnQkFBZ0IsR0FBR2xCLE1BQUksQ0FBQzlCLG1CQUFtQixFQUFFO1FBQ25ELElBQUksQ0FBQzhCLE1BQUksQ0FBQ3BDLFdBQVcsRUFBRSxJQUFJc0QsZ0JBQWdCLEtBQUtsQixNQUFJLENBQUMvRSxpQkFBaUIsQ0FBQ0YsV0FBVyxFQUFFO1VBQ2xGLEtBQUssQ0FBQztVQUNOLE1BQU1pRixNQUFJLENBQUN2QyxVQUFVLEVBQUU7UUFDekIsQ0FBQyxNQUFNO1VBQ0wsSUFBSXlELGdCQUFnQixLQUFLbEIsTUFBSSxDQUFDL0UsaUJBQWlCLENBQUNELE9BQU8sRUFBRTtZQUN2RCxLQUFLLENBQUM7WUFDTixNQUFNZ0YsTUFBSSxDQUFDbUIsZUFBZSxFQUFFO1VBQzlCLENBQUMsTUFBTSxJQUFJRCxnQkFBZ0IsS0FBS2xCLE1BQUksQ0FBQy9FLGlCQUFpQixDQUFDSCxJQUFJLEVBQUU7WUFDM0QsS0FBSyxDQUFDO1VBQ1IsQ0FBQyxNQUFNO1lBQ0wsTUFBTSxJQUFJMEQsS0FBSyw2Q0FBQTRDLE1BQUEsQ0FBNkNwQixNQUFJLENBQUNwQyxXQUFXLEVBQUUsMkJBQUF3RCxNQUFBLENBQXdCcEIsTUFBSSxDQUFDOUIsbUJBQW1CLEVBQUUsRUFBRztVQUNySTtRQUNGO1FBQ0EsTUFBTThCLE1BQUksQ0FBQ3FCLFdBQVcsRUFBRTtNQUMxQixDQUFDLENBQUMsT0FBT0MsQ0FBQyxFQUFFO1FBQ1YsS0FBSyxDQUFDO01BQ1IsQ0FBQyxTQUFTO1FBQ1J0QixNQUFJLENBQUN1QixPQUFPLEVBQUU7TUFDaEI7SUFBQztFQUNIO0VBQ0FBLE9BQU9BLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0lBQ2QsSUFBSSxDQUFDQyxhQUFhLEVBQUU7SUFDcEIsSUFBSSxDQUFDbEIsV0FBVyxHQUFHLElBQUk7SUFDdkIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSTtFQUN6QjtFQUNNa0IsVUFBVUEsQ0FBQ0MsT0FBTyxFQUFFL0IsU0FBUyxFQUFFQyxTQUFTLEVBQUVJLGtCQUFrQixFQUFFO0lBQUEsSUFBQTJCLE1BQUE7SUFBQSxPQUFBakUsaUJBQUE7TUFDbEU7TUFDQWlFLE1BQUksQ0FBQ0gsYUFBYSxFQUFFO01BQ3BCLE1BQU1HLE1BQUksQ0FBQ2pDLFFBQVEsQ0FBQ2dDLE9BQU8sRUFBRS9CLFNBQVMsRUFBRUMsU0FBUyxFQUFFSSxrQkFBa0IsQ0FBQztJQUFDO0VBQ3pFOztFQUVBO0VBQ01rQixlQUFlQSxDQUFBLEVBQUc7SUFBQSxJQUFBVSxNQUFBO0lBQUEsT0FBQWxFLGlCQUFBO01BQ3RCLElBQUltRSxpQkFBaUIsR0FBRyxDQUFDO01BQ3pCLE9BQU8sSUFBSUMsT0FBTyxDQUFDQyxPQUFPLElBQUk7UUFDNUIsSUFBTUMsS0FBSyxHQUFHQSxDQUFBLEtBQU07VUFDbEJDLFVBQVUsZUFBQXZFLGlCQUFBLENBQUMsYUFBWTtZQUNyQixJQUFJa0UsTUFBSSxDQUFDakUsV0FBVyxFQUFFLEVBQUU7Y0FDdEJvRSxPQUFPLEVBQUU7WUFDWCxDQUFDLE1BQU07Y0FDTEYsaUJBQWlCLEVBQUU7Y0FDbkIsS0FBSyxDQUFDO2NBQ05HLEtBQUssRUFBRTtZQUNUO1VBQ0YsQ0FBQyxHQUFFLEdBQUcsQ0FBQztRQUNULENBQUM7UUFDREEsS0FBSyxFQUFFO01BQ1QsQ0FBQyxDQUFDO0lBQUM7RUFDTDtFQUNBbEQsaUJBQWlCQSxDQUFBLEVBQUc7SUFDbEIsSUFBTW9ELE1BQU0sR0FBRyxJQUFJO0lBQ25CLElBQUksa0JBQWtCLENBQUNDLElBQUksQ0FBQ25GLE1BQU0sQ0FBQ29GLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO01BQ3JFLElBQU1DLHNCQUFzQixHQUFHQyxFQUFFLElBQUk7UUFDbkMsSUFBSUEsRUFBRSxDQUFDQyxPQUFPLENBQUN4QyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3pCdUMsRUFBRSxDQUFDRSxjQUFjLEVBQUU7VUFDbkJGLEVBQUUsQ0FBQ0csd0JBQXdCLEVBQUU7UUFDL0I7TUFDRixDQUFDO01BQ0QzRixNQUFNLENBQUM0RixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVMLHNCQUFzQixFQUFFO1FBQzVETSxPQUFPLEVBQUU7TUFDWCxDQUFDLENBQUM7TUFDRjdGLE1BQU0sQ0FBQzRGLGdCQUFnQixDQUFDLFdBQVcsRUFBRUwsc0JBQXNCLEVBQUU7UUFDM0RNLE9BQU8sRUFBRTtNQUNYLENBQUMsQ0FBQztNQUNGN0YsTUFBTSxDQUFDNEYsZ0JBQWdCLENBQUMsVUFBVSxFQUFFTCxzQkFBc0IsRUFBRTtRQUMxRE0sT0FBTyxFQUFFO01BQ1gsQ0FBQyxDQUFDO0lBQ0o7SUFDQTdGLE1BQU0sQ0FBQzhGLGNBQWMsR0FBRyxZQUFZO01BQ2xDWixNQUFNLENBQUNhLFNBQVMsR0FBRyxJQUFJO01BQ3ZCYixNQUFNLENBQUNYLE9BQU8sRUFBRTtJQUNsQixDQUFDO0lBQ0QsSUFBTXlCLFlBQVk7TUFBQSxJQUFBQyxLQUFBLEdBQUF2RixpQkFBQSxDQUFHLGFBQVk7UUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQ3dFLE1BQU0sQ0FBQy9CLFNBQVMsRUFBRTtRQUN6QixJQUFJLENBQUMrQixNQUFNLENBQUNnQiwwQkFBMEIsRUFBRTtVQUN0Q2hCLE1BQU0sQ0FBQ2dCLDBCQUEwQixHQUFHLElBQUk7VUFDeENoQixNQUFNLENBQUNpQix1QkFBdUIsR0FBRyxJQUFJO1VBQ3JDLEtBQUssQ0FBQztVQUNOakIsTUFBTSxDQUFDZ0IsMEJBQTBCLEdBQUcsS0FBSztVQUN6QyxNQUFNaEIsTUFBTSxDQUFDVCxVQUFVLENBQUNTLE1BQU0sQ0FBQy9CLFNBQVMsRUFBRStCLE1BQU0sQ0FBQzVCLFdBQVcsRUFBRTRCLE1BQU0sQ0FBQzNCLFdBQVcsRUFBRTJCLE1BQU0sQ0FBQzFCLG9CQUFvQixDQUFDO1FBQ2hILENBQUMsTUFBTTtVQUNMLEtBQUssQ0FBQztRQUNSO01BQ0YsQ0FBQztNQUFBLGdCQVhLd0MsWUFBWUEsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQUcsS0FBQSxPQUFBdEQsU0FBQTtNQUFBO0lBQUEsR0FXakI7SUFDRDlDLE1BQU0sQ0FBQzRGLGdCQUFnQixDQUFDLFFBQVEsZUFBQWxGLGlCQUFBLENBQUUsYUFBWTtNQUM1QyxJQUFJLENBQUMsQ0FBQyxDQUFDd0UsTUFBTSxDQUFDaUIsdUJBQXVCLEVBQUU7UUFDckNqQixNQUFNLENBQUNpQix1QkFBdUIsR0FBR2xCLFVBQVUsQ0FBQ2UsWUFBWSxFQUFFZCxNQUFNLENBQUNtQix1QkFBdUIsQ0FBQztNQUMzRjtJQUNGLENBQUMsRUFBQztFQUNKO0VBQ0FDLE9BQU9BLENBQUNDLEVBQUUsRUFBRTtJQUNWLE9BQU8sSUFBSXpCLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJRSxVQUFVLENBQUNGLE9BQU8sRUFBRXdCLEVBQUUsQ0FBQyxDQUFDO0VBQ3hEO0VBQ0FDLGNBQWNBLENBQUNDLElBQUksRUFBRTtJQUNuQixPQUFPLElBQUkzQixPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFckQsQ0FBQyxLQUFLO01BQ2pDLElBQU1nRixNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO01BQy9CRCxNQUFNLENBQUNFLFNBQVMsR0FBRyxNQUFNN0IsT0FBTyxDQUFDMkIsTUFBTSxDQUFDRyxNQUFNLENBQUM7TUFDL0NILE1BQU0sQ0FBQ0ksYUFBYSxDQUFDTCxJQUFJLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ0o7RUFDQTtFQUNBTSxxQkFBcUJBLENBQUEsRUFBRztJQUN0QixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQ3ZGLFNBQVMsRUFBRTtNQUNyQixNQUFNLElBQUlELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztJQUN6QztJQUNBLElBQU15RixXQUFXLEdBQUcsSUFBSSxDQUFDN0YsV0FBVyxDQUFDOEYsZUFBZSxDQUFDLElBQUksQ0FBQ3pGLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDeEUsSUFBSSxDQUFDMEYsa0JBQWtCLEdBQUcsSUFBSSxDQUFDL0YsV0FBVyxDQUFDZ0csT0FBTyxDQUFDSCxXQUFXLENBQUM7SUFDL0QsSUFBSSxDQUFDN0YsV0FBVyxDQUFDaUcsWUFBWSxDQUFDLElBQUksQ0FBQzVGLFNBQVMsRUFBRSxJQUFJLENBQUMwRixrQkFBa0IsRUFBRUYsV0FBVyxDQUFDO0lBQ25GLE9BQU8sSUFBSSxDQUFDRSxrQkFBa0I7RUFDaEM7RUFDQUcsb0JBQW9CQSxDQUFDQyxZQUFZLEVBQUU7SUFDakMsSUFBSUMscUJBQXFCLEdBQUcsS0FBSztJQUNqQyxJQUFJQyxjQUFjLEdBQUcsV0FBVztJQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDQyxnQkFBZ0IsRUFBRTtNQUMxQixPQUFPO1FBQ0xGLHFCQUFxQjtRQUNyQkM7TUFDRixDQUFDO0lBQ0g7SUFDQSxJQUFJRixZQUFZLENBQUNJLFVBQVUsS0FBSyxDQUFDLElBQUlKLFlBQVksQ0FBQ0ssV0FBVyxLQUFLLENBQUMsRUFBRTtNQUNuRSxJQUFJLENBQUMzRCxhQUFhLENBQUMsSUFBSSxDQUFDN0YsV0FBVyxDQUFDZixTQUFTLENBQUM7TUFDOUMsT0FBTztRQUNMbUsscUJBQXFCO1FBQ3JCQztNQUNGLENBQUM7SUFDSDtJQUNBQSxjQUFjLEdBQUdGLFlBQVksQ0FBQ0ksVUFBVSxHQUFHLEdBQUcsR0FBR0osWUFBWSxDQUFDSyxXQUFXO0lBQ3pFLElBQUlMLFlBQVksQ0FBQ0ksVUFBVSxLQUFLLElBQUksSUFBSUosWUFBWSxDQUFDSyxXQUFXLEtBQUssSUFBSSxJQUFJTCxZQUFZLENBQUNJLFVBQVUsS0FBSyxJQUFJLElBQUlKLFlBQVksQ0FBQ0ssV0FBVyxLQUFLLElBQUksRUFBRTtNQUNsSkoscUJBQXFCLEdBQUcsSUFBSTtJQUM5QixDQUFDLE1BQU0sSUFBSUQsWUFBWSxDQUFDSSxVQUFVLEtBQUssSUFBSSxJQUFJSixZQUFZLENBQUNLLFdBQVcsS0FBSyxHQUFHLElBQUlMLFlBQVksQ0FBQ0ksVUFBVSxLQUFLLEdBQUcsSUFBSUosWUFBWSxDQUFDSyxXQUFXLEtBQUssSUFBSSxFQUFFO01BQ3ZKSixxQkFBcUIsR0FBRyxJQUFJO0lBQzlCLENBQUMsTUFBTTtNQUNMRCxZQUFZLENBQUNNLFNBQVMsR0FBRyxJQUFJO01BQzdCTCxxQkFBcUIsR0FBRyxLQUFLO0lBQy9CO0lBQ0EsSUFBSSxDQUFDTSxZQUFZLEdBQUdQLFlBQVksQ0FBQ0ksVUFBVTtJQUMzQyxJQUFJLENBQUNJLGFBQWEsR0FBR1IsWUFBWSxDQUFDSyxXQUFXO0lBQzdDLE9BQU87TUFDTEoscUJBQXFCO01BQ3JCQztJQUNGLENBQUM7RUFDSDtFQUNBTyxtQkFBbUJBLENBQUNyRCxPQUFPLEVBQUU7SUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQ3NELGFBQWEsQ0FBQ0MsUUFBUSxDQUFDdkQsT0FBTyxDQUFDLEVBQUUsTUFBTSxJQUFJbkQsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ2xGLElBQUk7TUFDRixJQUFJMkcsT0FBTyxHQUFHLENBQUM7TUFDZixJQUFJQyxlQUFlLEdBQUcsSUFBSTtNQUMxQixJQUFNQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUNyQixxQkFBcUIsRUFBRTtNQUNyRCxRQUFRckMsT0FBTztRQUNiO1FBQ0EsS0FBSyxRQUFRO1FBQ2IsS0FBSyxRQUFRO1FBQ2IsS0FBSyxZQUFZO1FBQ2pCLEtBQUssWUFBWTtVQUNmd0QsT0FBTyxHQUFHLElBQUksQ0FBQy9HLFdBQVcsQ0FBQ2tILGdCQUFnQixDQUFDRCxnQkFBZ0IsQ0FBQztVQUM3REQsZUFBZSxHQUFHQSxDQUFBLEtBQU0sSUFBSSxDQUFDaEgsV0FBVyxDQUFDbUgsb0JBQW9CLENBQUNKLE9BQU8sQ0FBQztVQUN0RTtRQUNGLEtBQUssVUFBVTtRQUNmLEtBQUssa0JBQWtCO1FBQ3ZCLEtBQUssY0FBYztRQUNuQixLQUFLLHNCQUFzQjtVQUN6QkEsT0FBTyxHQUFHLElBQUksQ0FBQy9HLFdBQVcsQ0FBQ29ILGtCQUFrQixDQUFDSCxnQkFBZ0IsQ0FBQztVQUMvREQsZUFBZSxHQUFHQSxDQUFBLEtBQU0sSUFBSSxDQUFDaEgsV0FBVyxDQUFDcUgsc0JBQXNCLENBQUNOLE9BQU8sQ0FBQztVQUN4RTtRQUNGLEtBQUssT0FBTztRQUNaLEtBQUssV0FBVztVQUNkQSxPQUFPLEdBQUcsSUFBSSxDQUFDL0csV0FBVyxDQUFDc0gsZUFBZSxDQUFDTCxnQkFBZ0IsQ0FBQztVQUM1REQsZUFBZSxHQUFHQSxDQUFBLEtBQU0sSUFBSSxDQUFDaEgsV0FBVyxDQUFDdUgsbUJBQW1CLENBQUNSLE9BQU8sQ0FBQztVQUNyRTtRQUNGLEtBQUssUUFBUTtRQUNiLEtBQUssWUFBWTtVQUNmQSxPQUFPLEdBQUcsSUFBSSxDQUFDL0csV0FBVyxDQUFDd0gsZ0JBQWdCLENBQUNQLGdCQUFnQixDQUFDO1VBQzdERCxlQUFlLEdBQUdBLENBQUEsS0FBTSxJQUFJLENBQUNoSCxXQUFXLENBQUN5SCxvQkFBb0IsQ0FBQ1YsT0FBTyxDQUFDO1VBQ3RFO1FBQ0Y7VUFDRSxNQUFNLElBQUkzRyxLQUFLLENBQUMseUJBQXlCLENBQUM7TUFBQztNQUUvQyxJQUFJLENBQUNKLFdBQVcsQ0FBQzBILEtBQUssQ0FBQ1QsZ0JBQWdCLENBQUM7TUFDeEMsSUFBSUYsT0FBTyxLQUFLLENBQUMsRUFBRTtRQUNqQixJQUFJLElBQUksQ0FBQ1kseUJBQXlCLEtBQUssSUFBSSxDQUFDQyxzQkFBc0IsRUFBRTtVQUNsRSxNQUFNLElBQUl4SCxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDdEM7UUFDQSxJQUFJLENBQUN3SCxzQkFBc0IsRUFBRTtNQUMvQjtNQUNBLE9BQU8sQ0FBQ2IsT0FBTyxFQUFFQyxlQUFlLENBQUM7SUFDbkMsQ0FBQyxDQUFDLE9BQU85RCxDQUFDLEVBQUU7TUFDVjtNQUNBLEtBQUssQ0FBQztNQUNOLEtBQUssQ0FBQztNQUNOLE1BQU1BLENBQUM7SUFDVDtFQUNGO0VBQ0EyRSxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUMsSUFBSSxDQUFDQyxRQUFRLEVBQUU7TUFDbEIsSUFBSSxDQUFDQSxRQUFRLEdBQUcsSUFBSSxDQUFDOUgsV0FBVyxDQUFDZ0csT0FBTyxDQUFDLElBQUksQ0FBQytCLGlCQUFpQixHQUFHLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0lBQ2hHO0lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ0MsY0FBYyxFQUFFO01BQ3hCLElBQUksQ0FBQ0EsY0FBYyxHQUFHLElBQUksQ0FBQ2pJLFdBQVcsQ0FBQ2dHLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDckQ7SUFDQSxPQUFPLENBQUMsSUFBSSxDQUFDOEIsUUFBUSxFQUFFLElBQUksQ0FBQ0csY0FBYyxDQUFDO0VBQzdDO0VBQ01DLGdCQUFnQkEsQ0FBQ25CLE9BQU8sRUFBRW9CLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQUEsSUFBQUMsTUFBQTtJQUFBLE9BQUE5SSxpQkFBQTtNQUNsRCxJQUFJO1FBQ0Y4SSxNQUFJLENBQUNySSxXQUFXLENBQUNzSSwyQkFBMkIsQ0FBQ3ZCLE9BQU8sRUFBRW9CLFFBQVEsRUFBRUMsUUFBUSxDQUFDO1FBQ3pFLElBQU1HLE9BQU8sR0FBR0YsTUFBSSxDQUFDckksV0FBVyxDQUFDd0ksaUJBQWlCLEVBQUU7UUFDcEQsSUFBTUMsVUFBVSxHQUFHSixNQUFJLENBQUNySSxXQUFXLENBQUMwSSxtQkFBbUIsRUFBRTtRQUN6RCxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsVUFBVSxDQUFDUCxNQUFJLENBQUNySSxXQUFXLENBQUM2SSxLQUFLLENBQUNDLE1BQU0sRUFBRUwsVUFBVSxFQUFFRixPQUFPLENBQUM7UUFDckYsSUFBTTdDLE1BQU0sR0FBRyxJQUFJa0QsVUFBVSxDQUFDRCxVQUFVLENBQUM7UUFDekMsSUFBTXJELElBQUksR0FBRyxJQUFJeUQsSUFBSSxDQUFDLENBQUNyRCxNQUFNLENBQUMsRUFBRTtVQUM5QjFFLElBQUksRUFBRTtRQUNSLENBQUMsQ0FBQztRQUNGLGFBQWFxSCxNQUFJLENBQUNoRCxjQUFjLENBQUNDLElBQUksQ0FBQztNQUN4QyxDQUFDLENBQUMsT0FBT3BDLENBQUMsRUFBRTtRQUNWLEtBQUssQ0FBQztRQUNOLE1BQU1BLENBQUM7TUFDVCxDQUFDLFNBQVM7UUFDUm1GLE1BQUksQ0FBQ3JJLFdBQVcsQ0FBQ2dKLGlCQUFpQixFQUFFO01BQ3RDO0lBQUM7RUFDSDtFQUNBO0VBQ0FDLGVBQWVBLENBQUEsRUFBRztJQUNoQixJQUFJLElBQUksQ0FBQ25CLFFBQVEsRUFBRTtNQUNqQixJQUFJLENBQUM5SCxXQUFXLENBQUMwSCxLQUFLLENBQUMsSUFBSSxDQUFDSSxRQUFRLENBQUM7TUFDckMsSUFBSSxDQUFDQSxRQUFRLEdBQUcsSUFBSTtJQUN0QjtJQUNBLElBQUksSUFBSSxDQUFDRyxjQUFjLEtBQUssSUFBSSxFQUFFO01BQ2hDLElBQUksQ0FBQ2pJLFdBQVcsQ0FBQzBILEtBQUssQ0FBQyxJQUFJLENBQUNPLGNBQWMsQ0FBQztNQUMzQyxJQUFJLENBQUNBLGNBQWMsR0FBRyxJQUFJO0lBQzVCO0VBQ0Y7RUFDQTtFQUNBaUIsa0JBQWtCQSxDQUFBLEVBQUc7SUFDbkIsSUFBSSxJQUFJLENBQUNDLFdBQVcsS0FBSyxJQUFJLEVBQUU7TUFDN0IsSUFBSSxDQUFDbkosV0FBVyxDQUFDMEgsS0FBSyxDQUFDLElBQUksQ0FBQ3lCLFdBQVcsQ0FBQztNQUN4QyxJQUFJLENBQUNBLFdBQVcsR0FBRyxJQUFJO0lBQ3pCO0VBQ0Y7RUFDQTtFQUNBQyx5QkFBeUJBLENBQUEsRUFBRztJQUMxQixJQUFJLElBQUksQ0FBQ3JELGtCQUFrQixFQUFFO01BQzNCLElBQUksQ0FBQy9GLFdBQVcsQ0FBQzBILEtBQUssQ0FBQyxJQUFJLENBQUMzQixrQkFBa0IsQ0FBQztNQUMvQyxJQUFJLENBQUNBLGtCQUFrQixHQUFHLElBQUk7SUFDaEM7RUFDRjtFQUNBO0VBQ0FzRCx1QkFBdUJBLENBQUEsRUFBRztJQUN4QixJQUFJLElBQUksQ0FBQ0Msd0JBQXdCLEVBQUU7TUFDakMsSUFBSSxDQUFDQSx3QkFBd0IsRUFBRTtNQUMvQixJQUFJLENBQUNBLHdCQUF3QixHQUFHLElBQUk7SUFDdEM7RUFDRjtFQUNBQyw2QkFBNkJBLENBQUNwRCxZQUFZLEVBQUU7SUFDMUMsSUFBTTtNQUNKQyxxQkFBcUI7TUFDckJDO0lBQ0YsQ0FBQyxHQUFHLElBQUksQ0FBQ0gsb0JBQW9CLENBQUNDLFlBQVksQ0FBQztJQUMzQyxJQUFJLENBQUNDLHFCQUFxQixFQUFFO01BQzFCLElBQUlDLGNBQWMsS0FBSyxXQUFXLEVBQUU7UUFDbEMsS0FBSyxDQUFDO01BQ1I7SUFDRjtJQUNBLE9BQU9ELHFCQUFxQjtFQUM5QjtFQUNBb0QsbUJBQW1CQSxDQUFBLEVBQUc7SUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQy9JLFNBQVMsQ0FBQ3ZCLGNBQWMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUc7RUFDMUQ7RUFDQXVLLGVBQWVBLENBQUEsRUFBRztJQUNoQixPQUFPLElBQUksQ0FBQ2hKLFNBQVMsQ0FBQ3RCLFVBQVU7RUFDbEM7RUFDTXVLLG9CQUFvQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUFBLE9BQUFwSyxpQkFBQTtNQUMzQixJQUFJLENBQUNvSyxNQUFJLENBQUNyRCxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztNQUMvQyxJQUFJLENBQUNzRCxnQkFBZ0IsRUFBRUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDRixNQUFJLENBQUM1QixpQkFBaUIsRUFBRTRCLE1BQUksQ0FBQzNCLGtCQUFrQixDQUFDO01BQzVGLElBQU07UUFDSjhCLEtBQUs7UUFDTEMsTUFBTTtRQUNOQztNQUNGLENBQUMsR0FBR3hPLFFBQVEsQ0FBQytHLGNBQWMsRUFBRTs7TUFFN0I7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUEsSUFBSTBILFVBQVUsR0FBR0YsTUFBTTtNQUN2QixJQUFJRyxjQUFjLEdBQUdKLEtBQUssQ0FBQ3ZELFVBQVU7TUFDckMsSUFBSTRELGVBQWUsR0FBR0wsS0FBSyxDQUFDdEQsV0FBVztNQUN2QyxJQUFJNEQsb0JBQW9CLEdBQUdOLEtBQUssQ0FBQ08sV0FBVztNQUM1QyxJQUFJQyxxQkFBcUIsR0FBR1IsS0FBSyxDQUFDUyxZQUFZO01BQzlDLElBQUlDLHNCQUFzQixHQUFHYixNQUFJLENBQUNjLG9CQUFvQjtNQUN0RCxJQUFJQyx1QkFBdUIsR0FBR2YsTUFBSSxDQUFDZ0IscUJBQXFCO01BQ3hELElBQUlDLG9CQUFvQixHQUFHakIsTUFBSSxDQUFDckksa0JBQWtCO01BQ2xELElBQUlxSSxNQUFJLENBQUNrQixrQkFBa0IsRUFBRTtRQUMzQixDQUFDTCxzQkFBc0IsRUFBRUUsdUJBQXVCLENBQUMsR0FBRyxDQUFDQSx1QkFBdUIsRUFBRUYsc0JBQXNCLENBQUM7UUFDckcsQ0FBQ1osZ0JBQWdCLEVBQUVDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQ0EsZ0JBQWdCLEVBQUVELGdCQUFnQixDQUFDO1FBQzNFSyxVQUFVLEdBQUdELGNBQWM7UUFDM0JZLG9CQUFvQixHQUFHakIsTUFBSSxDQUFDckksa0JBQWtCLEtBQUssVUFBVSxHQUFHLFdBQVcsR0FBRyxVQUFVO01BQzFGO01BQ0EsSUFBSXdKLGFBQWEsR0FBRyxLQUFLO01BQ3pCLElBQUlDLGNBQWMsR0FBRyxLQUFLO01BQzFCLElBQUlwQixNQUFJLENBQUN2SSxlQUFlLEtBQUssVUFBVSxFQUFFO1FBQ3ZDLElBQUl3SixvQkFBb0IsS0FBS2pCLE1BQUksQ0FBQ3ZJLGVBQWUsRUFBRTtVQUNqRDtVQUNBMEosYUFBYSxHQUFHWixjQUFjO1VBQzlCYSxjQUFjLEdBQUdaLGVBQWU7UUFDbEMsQ0FBQyxNQUFNO1VBQ0w7VUFDQVksY0FBYyxHQUFHWixlQUFlO1FBQ2xDO01BQ0YsQ0FBQyxNQUFNO1FBQ0wsSUFBSVMsb0JBQW9CLEtBQUtqQixNQUFJLENBQUN2SSxlQUFlLEVBQUU7VUFDakQ7VUFDQTJKLGNBQWMsR0FBR1osZUFBZTtRQUNsQyxDQUFDLE1BQU07VUFDTDtVQUNBVyxhQUFhLEdBQUdaLGNBQWM7VUFDOUJhLGNBQWMsR0FBR1osZUFBZTtRQUNsQztNQUNGO01BQ0EsSUFBSWEsRUFBRSxFQUFFQyxFQUFFO01BQ1YsSUFBTUMsS0FBSyxHQUFHaEIsY0FBYyxHQUFHRSxvQkFBb0I7TUFDbkQsSUFBTWUsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUNkLHNCQUFzQixHQUFHVSxLQUFLLENBQUMsRUFBRUosYUFBYSxDQUFDO01BQ2xGLElBQU1TLE9BQU8sR0FBR0gsSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQ0UsS0FBSyxDQUFDWix1QkFBdUIsR0FBR1EsS0FBSyxDQUFDLEVBQUVILGNBQWMsQ0FBQztNQUNyRkMsRUFBRSxHQUFHSSxJQUFJLENBQUNFLEtBQUssQ0FBQyxDQUFDbEIsb0JBQW9CLEdBQUdJLHNCQUFzQixJQUFJLENBQUMsR0FBR1UsS0FBSyxDQUFDO01BQzVFRCxFQUFFLEdBQUdHLElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUNoQixxQkFBcUIsR0FBR0ksdUJBQXVCLElBQUksQ0FBQyxHQUFHUSxLQUFLLENBQUM7TUFDOUUsSUFBTU0sV0FBVyxHQUFHdkIsVUFBVSxDQUFDd0IsVUFBVSxDQUFDLElBQUksRUFBRTtRQUM5Q0Msa0JBQWtCLEVBQUU7TUFDdEIsQ0FBQyxDQUFDO01BQ0Y7TUFDQUYsV0FBVyxDQUFDRyxTQUFTLENBQUM3QixLQUFLLEVBQUVrQixFQUFFLEVBQUVDLEVBQUUsRUFBRUUsTUFBTSxFQUFFSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTNCLGdCQUFnQixFQUFFQyxnQkFBZ0IsQ0FBQztNQUMvRixJQUFNK0IsT0FBTyxHQUFHSixXQUFXLENBQUNLLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFakMsZ0JBQWdCLEVBQUVDLGdCQUFnQixDQUFDO01BQ2xGLElBQU1pQyxVQUFVLEdBQUc3QixVQUFVLENBQUM4QixTQUFTLENBQUMsWUFBWSxDQUFDO01BQ3JELElBQUlwQyxNQUFJLENBQUNrQixrQkFBa0IsRUFBRTtRQUMzQixhQUFhbEIsTUFBSSxDQUFDcUMsUUFBUSxDQUFDSixPQUFPLEVBQUVFLFVBQVUsRUFBRW5DLE1BQUksQ0FBQ0gsbUJBQW1CLEVBQUUsQ0FBQztNQUM3RSxDQUFDLE1BQU07UUFDTCxPQUFPLENBQUNvQyxPQUFPLEVBQUVFLFVBQVUsQ0FBQztNQUM5QjtJQUFDO0VBQ0g7RUFDTUUsUUFBUUEsQ0FBQ0osT0FBTyxFQUFFRSxVQUFVLEVBQUVHLE1BQU0sRUFBRTtJQUFBLE9BQUExTSxpQkFBQTtNQUMxQyxPQUFPLElBQUlvRSxPQUFPLENBQUNDLE9BQU8sSUFBSTtRQUM1QixJQUFJcUksTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNoQnJJLE9BQU8sQ0FBQyxDQUFDZ0ksT0FBTyxFQUFFRSxVQUFVLENBQUMsQ0FBQztRQUNoQztRQUNBLElBQU1JLEdBQUcsR0FBRyxJQUFJQyxLQUFLLEVBQUU7UUFDdkJELEdBQUcsQ0FBQ0UsR0FBRyxHQUFHTixVQUFVO1FBQ3BCSSxHQUFHLENBQUN6SCxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtVQUNqQyxJQUFNNEgsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7VUFDbkQ7VUFDQSxJQUFNQyxXQUFXLEdBQUdILFVBQVUsQ0FBQ1osVUFBVSxDQUFDLElBQUksQ0FBQztVQUMvQ1ksVUFBVSxDQUFDeE8sS0FBSyxDQUFDNE8sUUFBUSxHQUFHLFVBQVU7VUFDdEMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzNGLFFBQVEsQ0FBQ21GLE1BQU0sQ0FBQyxFQUFFO1lBQzlCSSxVQUFVLENBQUN6TyxLQUFLLEdBQUdzTyxHQUFHLENBQUNRLE1BQU07WUFDN0JMLFVBQVUsQ0FBQ0ssTUFBTSxHQUFHUixHQUFHLENBQUN0TyxLQUFLO1VBQy9CLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDa0osUUFBUSxDQUFDbUYsTUFBTSxDQUFDLEVBQUU7WUFDcENJLFVBQVUsQ0FBQ3pPLEtBQUssR0FBR3NPLEdBQUcsQ0FBQ3RPLEtBQUs7WUFDNUJ5TyxVQUFVLENBQUNLLE1BQU0sR0FBR1IsR0FBRyxDQUFDUSxNQUFNO1VBQ2hDO1VBQ0EsSUFBSVQsTUFBTSxLQUFLLEVBQUUsRUFBRU8sV0FBVyxDQUFDRyxTQUFTLENBQUNULEdBQUcsQ0FBQ1EsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSVQsTUFBTSxLQUFLLEdBQUcsRUFBRU8sV0FBVyxDQUFDRyxTQUFTLENBQUNULEdBQUcsQ0FBQ3RPLEtBQUssRUFBRXNPLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJVCxNQUFNLEtBQUssR0FBRyxFQUFFTyxXQUFXLENBQUNHLFNBQVMsQ0FBQyxDQUFDLEVBQUVULEdBQUcsQ0FBQ3RPLEtBQUssQ0FBQztVQUMxTDRPLFdBQVcsQ0FBQ0ksTUFBTSxDQUFDWCxNQUFNLEdBQUdiLElBQUksQ0FBQ3lCLEVBQUUsR0FBRyxHQUFHLENBQUM7VUFDMUNMLFdBQVcsQ0FBQ2IsU0FBUyxDQUFDTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUNoQyxJQUFNWSxZQUFZLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUNoRyxRQUFRLENBQUNtRixNQUFNLENBQUMsR0FBR08sV0FBVyxDQUFDWCxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRUssR0FBRyxDQUFDUSxNQUFNLEVBQUVSLEdBQUcsQ0FBQ3RPLEtBQUssQ0FBQyxHQUFHNE8sV0FBVyxDQUFDWCxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRUssR0FBRyxDQUFDdE8sS0FBSyxFQUFFc08sR0FBRyxDQUFDUSxNQUFNLEVBQUVGLFdBQVcsQ0FBQztVQUM1SzVJLE9BQU8sQ0FBQyxDQUFDa0osWUFBWSxFQUFFVCxVQUFVLENBQUNOLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1VBQzNEUyxXQUFXLENBQUNPLE9BQU8sRUFBRTtRQUN2QixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFBQztFQUNMO0VBQ01DLG1CQUFtQkEsQ0FBQ2pHLE9BQU8sRUFBZ0M7SUFBQSxJQUFBa0csV0FBQSxHQUFBdEwsU0FBQTtNQUFBdUwsTUFBQTtJQUFBLE9BQUEzTixpQkFBQTtNQUFBLElBQTlCNE4sT0FBTyxHQUFBRixXQUFBLENBQUFuTCxNQUFBLFFBQUFtTCxXQUFBLFFBQUFsTCxTQUFBLEdBQUFrTCxXQUFBLE1BQUcsQ0FBQztNQUFBLElBQUVHLFFBQVEsR0FBQUgsV0FBQSxDQUFBbkwsTUFBQSxRQUFBbUwsV0FBQSxRQUFBbEwsU0FBQSxHQUFBa0wsV0FBQSxNQUFHLElBQUk7TUFDN0QsSUFBSSxDQUFDbEcsT0FBTyxJQUFJQSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO01BQ3RCO01BQ0EsSUFBSTtRQUNGLElBQUk2RSxPQUFPO1FBQ1gsSUFBTSxDQUFDOUMsTUFBTSxDQUFDLEdBQUdvRSxNQUFJLENBQUNyRixXQUFXLEVBQUU7UUFDbkMsSUFBSXVGLFFBQVEsS0FBSyxJQUFJLEVBQUU7VUFDckJ4QixPQUFPLEdBQUd3QixRQUFRO1FBQ3BCLENBQUMsTUFBTTtVQUNMLENBQUN4QixPQUFPLENBQUMsU0FBU3NCLE1BQUksQ0FBQ3hELG9CQUFvQixFQUFFO1FBQy9DO1FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQ2tDLE9BQU8sRUFBRTtVQUNkLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQ3RCO1FBQ0FzQixNQUFJLENBQUNsTixXQUFXLENBQUM2SSxLQUFLLENBQUN3RSxHQUFHLENBQUN6QixPQUFPLENBQUMwQixJQUFJLEVBQUV4RSxNQUFNLENBQUM7UUFDaEQsSUFBTXBELE1BQU0sR0FBR3dILE1BQUksQ0FBQ2xOLFdBQVcsQ0FBQ3VOLGFBQWEsQ0FBQ3pFLE1BQU0sRUFBRW9FLE1BQUksQ0FBQ25GLGlCQUFpQixFQUFFbUYsTUFBSSxDQUFDbEYsa0JBQWtCLEVBQUVqQixPQUFPLEVBQUVvRyxPQUFPLENBQUM7UUFDeEg7UUFDQSxPQUFPLENBQUMsQ0FBQyxDQUFDekgsTUFBTSxFQUFFa0csT0FBTyxDQUFDO01BQzVCLENBQUMsQ0FBQyxPQUFPMUksQ0FBQyxFQUFFO1FBQ1YsSUFBTXNLLE9BQU8sR0FBRyx5QkFBeUIsR0FBR3RLLENBQUM7UUFDN0MsSUFBSUEsQ0FBQyxDQUFDdUssUUFBUSxFQUFFLENBQUMzRyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7VUFDbkMsS0FBSyxDQUFDO1FBQ1IsQ0FBQyxNQUFNO1VBQ0wsS0FBSyxDQUFDO1VBQ04sTUFBTTVELENBQUM7UUFDVDtNQUNGO0lBQUM7RUFDSDtFQUNNd0ssa0JBQWtCQSxDQUFDM0csT0FBTyxFQUFFeEQsT0FBTyxFQUFFb0ssT0FBTyxFQUFFO0lBQUEsSUFBQUMsTUFBQTtJQUFBLE9BQUFyTyxpQkFBQTtNQUNsRCxJQUFJO1FBQ0YsSUFBSXdILE9BQU8sS0FBSyxJQUFJLEVBQUU7VUFDcEIsT0FBTyxFQUFFO1FBQ1gsQ0FBQyxNQUFNLElBQUlBLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRTtVQUN6QixPQUFPLHNCQUFzQjtRQUMvQjtRQUNBLElBQUk4RyxTQUFTLEdBQUcsSUFBSTtRQUNwQixJQUFJLENBQUNELE1BQUksQ0FBQy9HLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDdkQsT0FBTyxDQUFDLEVBQUUsTUFBTSxJQUFJbkQsS0FBSyxDQUFDLHNCQUFzQixDQUFDO1FBQ2xGLElBQU0sR0FBRzBOLFlBQVksQ0FBQyxHQUFHRixNQUFJLENBQUMvRixXQUFXLEVBQUU7UUFDM0MsUUFBUXRFLE9BQU87VUFDYixLQUFLLFFBQVE7VUFDYixLQUFLLFFBQVE7VUFDYixLQUFLLFlBQVk7VUFDakIsS0FBSyxZQUFZO1lBQ2ZzSyxTQUFTLEdBQUdELE1BQUksQ0FBQzVOLFdBQVcsQ0FBQytOLFVBQVUsQ0FBQ2hILE9BQU8sRUFBRStHLFlBQVksQ0FBQztZQUM5RDtVQUNGLEtBQUssVUFBVTtVQUNmLEtBQUssa0JBQWtCO1VBQ3ZCLEtBQUssY0FBYztVQUNuQixLQUFLLHNCQUFzQjtZQUN6QkQsU0FBUyxHQUFHRCxNQUFJLENBQUM1TixXQUFXLENBQUNnTyxZQUFZLENBQUNqSCxPQUFPLEVBQUUrRyxZQUFZLENBQUM7WUFDaEU7VUFDRixLQUFLLE9BQU87VUFDWixLQUFLLFdBQVc7WUFDZEQsU0FBUyxHQUFHRCxNQUFJLENBQUM1TixXQUFXLENBQUNpTyxTQUFTLENBQUNsSCxPQUFPLEVBQUUrRyxZQUFZLENBQUM7WUFDN0Q7VUFDRixLQUFLLFFBQVE7VUFDYixLQUFLLFlBQVk7WUFDZkQsU0FBUyxHQUFHRCxNQUFJLENBQUM1TixXQUFXLENBQUNrTyxVQUFVLENBQUNuSCxPQUFPLEVBQUUrRyxZQUFZLENBQUM7WUFDOUQ7VUFDRjtZQUNFLE1BQU0sSUFBSTFOLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztRQUFDO1FBRS9DLElBQUl5TixTQUFTLEtBQUssSUFBSSxJQUFJQSxTQUFTLEtBQUssRUFBRSxJQUFJQSxTQUFTLEtBQUssT0FBTyxJQUFJQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFFO1VBQy9GLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUM1QixDQUFDLE1BQU07VUFDTCxJQUFJekYsUUFBUSxHQUFHLEtBQUs7VUFDcEIsSUFBSTdFLE9BQU8sQ0FBQ3JCLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQ2tHLFFBQVEsR0FBRyxJQUFJO1VBQ2pCO1VBQ0EsSUFBSStGLFdBQVcsU0FBU1AsTUFBSSxDQUFDMUYsZ0JBQWdCLENBQUNuQixPQUFPLEVBQUUsS0FBSyxFQUFFcUIsUUFBUSxDQUFDO1VBQ3ZFLElBQUlnRyxTQUFTLFNBQVNSLE1BQUksQ0FBQzFGLGdCQUFnQixDQUFDbkIsT0FBTyxFQUFFLElBQUksRUFBRXFCLFFBQVEsQ0FBQztVQUNwRWdHLFNBQVMsR0FBR0EsU0FBUyxLQUFLLE9BQU8sR0FBRyxJQUFJLEdBQUdBLFNBQVM7VUFDcEQsSUFBSVQsT0FBTyxFQUFFO1lBQ1hDLE1BQUksQ0FBQy9LLGFBQWEsQ0FBQytLLE1BQUksQ0FBQzVRLFdBQVcsQ0FBQ1YsdUJBQXVCLEVBQUUsS0FBSyxFQUFFOFIsU0FBUyxDQUFDO1VBQ2hGLENBQUMsTUFBTTtZQUNMUixNQUFJLENBQUMvSyxhQUFhLENBQUMrSyxNQUFJLENBQUM1USxXQUFXLENBQUNYLGNBQWMsQ0FBQztVQUNyRDtVQUNBLE9BQU8sQ0FBQ3dSLFNBQVMsRUFBRU0sV0FBVyxFQUFFQyxTQUFTLENBQUM7UUFDNUM7TUFDRixDQUFDLENBQUMsT0FBT2xMLENBQUMsRUFBRTtRQUNWLEtBQUssQ0FBQztRQUNOLE1BQU1BLENBQUM7TUFDVDtJQUFDO0VBQ0g7RUFDQW1MLFlBQVlBLENBQUM5SyxPQUFPLEVBQUV3RCxPQUFPLEVBQUU7SUFDN0IsT0FBTyxJQUFJcEQsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRTBLLE1BQU0sS0FBSztNQUN0QyxJQUFNLEdBQUdSLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQ2pHLFdBQVcsRUFBRTtNQUMzQyxJQUFJdEUsT0FBTyxDQUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2hDO1FBQ0E7UUFDQTRCLFVBQVUsQ0FBQyxNQUFNO1VBQ2ZGLE9BQU8sQ0FBQyxJQUFJLENBQUM1RCxXQUFXLENBQUN1TyxTQUFTLENBQUN4SCxPQUFPLEVBQUUrRyxZQUFZLENBQUMsQ0FBQztRQUM1RCxDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ1QsQ0FBQyxNQUFNO1FBQ0xRLE1BQU0sQ0FBQyxJQUFJbE8sS0FBSyxDQUFDLDhDQUE4QyxHQUFHbUQsT0FBTyxDQUFDLENBQUM7TUFDN0U7SUFDRixDQUFDLENBQUM7RUFDSjtFQUNNaUwsaUJBQWlCQSxDQUFDakwsT0FBTyxFQUFFd0QsT0FBTyxFQUFFNkUsT0FBTyxFQUFFO0lBQUEsSUFBQTZDLE1BQUE7SUFBQSxPQUFBbFAsaUJBQUE7TUFDakQsTUFBTWtQLE1BQUksQ0FBQ3pCLG1CQUFtQixDQUFDakcsT0FBTyxFQUFFLENBQUMsRUFBRTZFLE9BQU8sQ0FBQztNQUNuRDtNQUNBLGFBQWE2QyxNQUFJLENBQUNKLFlBQVksQ0FBQzlLLE9BQU8sRUFBRXdELE9BQU8sQ0FBQztJQUFDO0VBQ25EO0VBQ0EySCxpQ0FBaUNBLENBQUEsRUFBRztJQUFBLElBQUFDLE9BQUE7SUFDbEMsSUFBSSxDQUFDQyxtQ0FBbUMsRUFBRTtJQUMxQyxJQUFJLENBQUNDLDhCQUE4QixHQUFHL0ssVUFBVSxlQUFBdkUsaUJBQUEsQ0FBQyxhQUFZO01BQzNEO01BQ0EsTUFBTW9QLE9BQUksQ0FBQ0cseUJBQXlCLEVBQUU7SUFDeEMsQ0FBQyxHQUFFLElBQUksQ0FBQztFQUNWO0VBQ01BLHlCQUF5QkEsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsT0FBQTtJQUFBLE9BQUF4UCxpQkFBQTtNQUNoQyxJQUFJO1FBQ0Z3UCxPQUFJLENBQUMxTCxhQUFhLEVBQUU7UUFDcEIsSUFBTTJMLFVBQVUsR0FBR0QsT0FBSSxDQUFDL00sU0FBUyxDQUFDOEUsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN0RCxNQUFNaUksT0FBSSxDQUFDRSxZQUFZLENBQUNELFVBQVUsQ0FBQztRQUNuQyxJQUFNO1VBQ0psRjtRQUNGLENBQUMsR0FBR3RPLFFBQVEsQ0FBQytHLGNBQWMsRUFBRTtRQUM3QixJQUFJdUgsS0FBSyxFQUFFO1VBQ1Q7VUFDQTtVQUNBO1VBQ0EsSUFBSSxXQUFXLElBQUlBLEtBQUssRUFBRTtZQUN4QkEsS0FBSyxDQUFDckQsU0FBUyxHQUFHc0ksT0FBSSxDQUFDRyxRQUFRO1VBQ2pDLENBQUMsTUFBTTtZQUNMO1lBQ0FwRixLQUFLLENBQUNzQyxHQUFHLEdBQUd2TixNQUFNLENBQUNzUSxHQUFHLENBQUNDLGVBQWUsQ0FBQ0wsT0FBSSxDQUFDRyxRQUFRLENBQUM7VUFDdkQ7VUFDQXBGLEtBQUssQ0FBQ3JGLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLE1BQU07WUFDN0M7WUFDQXFGLEtBQUssQ0FBQ3VGLElBQUksRUFBRTtVQUNkLENBQUMsQ0FBQztVQUNGdkYsS0FBSyxDQUFDckYsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU07WUFDdEMsS0FBSyxDQUFDOztZQUVOO1lBQ0FzSyxPQUFJLENBQUN6TixrQkFBa0IsR0FBR3dJLEtBQUssQ0FBQ3ZELFVBQVUsR0FBR3VELEtBQUssQ0FBQ3RELFdBQVcsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLFdBQVc7WUFDN0YsS0FBSyxDQUFDO1lBQ04sS0FBSyxDQUFDO1lBQ04sS0FBSyxDQUFDO1lBQ051SSxPQUFJLENBQUN6SSxnQkFBZ0IsR0FBRyxJQUFJO1lBQzVCeUksT0FBSSxDQUFDTyxhQUFhLEVBQUU7VUFDdEIsQ0FBQyxDQUFDO1VBQ0ZQLE9BQUksQ0FBQ2xNLGFBQWEsQ0FBQ2tNLE9BQUksQ0FBQy9SLFdBQVcsQ0FBQ2QsS0FBSyxDQUFDO1VBQzFDNE4sS0FBSyxDQUFDeUYsb0JBQW9CLEVBQUU7UUFDOUIsQ0FBQyxNQUFNO1VBQ0xSLE9BQUksQ0FBQ2xNLGFBQWEsQ0FBQ2tNLE9BQUksQ0FBQy9SLFdBQVcsQ0FBQ2YsU0FBUyxDQUFDO1VBQzlDOFMsT0FBSSxDQUFDMUwsYUFBYSxFQUFFO1FBQ3RCO01BQ0YsQ0FBQyxDQUFDLE9BQU9ILENBQUMsRUFBRTtRQUNWLEtBQUssQ0FBQztRQUNOLElBQUlBLENBQUMsQ0FBQ3NNLElBQUksS0FBSyxpQkFBaUIsRUFBRTtVQUNoQyxJQUFNQyxZQUFZLEdBQUcseUNBQXlDO1VBQzlELEtBQUssQ0FBQztVQUNOLEtBQUssQ0FBQztVQUNOVixPQUFJLENBQUNXLGtCQUFrQixDQUFDLE1BQU0sRUFBRXhNLENBQUMsRUFBRXVNLFlBQVksQ0FBQztRQUNsRCxDQUFDLE1BQU0sSUFBSXZNLENBQUMsQ0FBQ3NNLElBQUksS0FBSyxrQkFBa0IsRUFBRTtVQUN4Q1QsT0FBSSxDQUFDbE0sYUFBYSxDQUFDa00sT0FBSSxDQUFDL1IsV0FBVyxDQUFDZixTQUFTLENBQUM7VUFDOUM4UyxPQUFJLENBQUNZLFVBQVUsRUFBRTtVQUNqQlosT0FBSSxDQUFDTCxpQ0FBaUMsRUFBRSxDQUFDLENBQUM7UUFDNUM7TUFDRjtJQUFDO0VBQ0g7O0VBRUFrQixVQUFVQSxDQUFDQyxFQUFFLEVBQUVoUyxLQUFLLEVBQUU7SUFDcEJaLE1BQU0sQ0FBQzZTLE1BQU0sQ0FBQ0QsRUFBRSxDQUFDaFMsS0FBSyxFQUFFQSxLQUFLLENBQUM7RUFDaEM7RUFDQWtTLGlCQUFpQkEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ3JCLFFBQVFBLEdBQUc7TUFDVDtNQUNBLEtBQUssSUFBSSxDQUFDaFQsV0FBVyxDQUFDZixTQUFTO1FBQzdCLElBQUksQ0FBQ2dVLFdBQVcsR0FBRyxJQUFJLENBQUNuVCxVQUFVLENBQUNiLFNBQVM7UUFDNUM7TUFDRixLQUFLLElBQUksQ0FBQ2UsV0FBVyxDQUFDZCxLQUFLO1FBQ3pCLElBQUksQ0FBQytULFdBQVcsR0FBRyxJQUFJLENBQUNuVCxVQUFVLENBQUNaLEtBQUs7UUFDeEM7TUFDRixLQUFLLElBQUksQ0FBQ2MsV0FBVyxDQUFDWCxjQUFjO01BQ3BDLEtBQUssSUFBSSxDQUFDVyxXQUFXLENBQUNWLHVCQUF1QjtRQUMzQyxJQUFJLENBQUMyVCxXQUFXLEdBQUcsSUFBSSxDQUFDblQsVUFBVSxDQUFDUCxXQUFXO1FBQzlDO01BQ0YsS0FBSyxJQUFJLENBQUNTLFdBQVcsQ0FBQ1QsV0FBVztNQUNqQyxLQUFLLElBQUksQ0FBQ1MsV0FBVyxDQUFDUixvQkFBb0I7TUFDMUMsS0FBSyxJQUFJLENBQUNRLFdBQVcsQ0FBQ1AsVUFBVTtRQUM5QixJQUFJLENBQUN3VCxXQUFXLEdBQUcsSUFBSSxDQUFDblQsVUFBVSxDQUFDSixJQUFJO1FBQ3ZDO0lBQU07RUFFWjtFQUNBbUcsYUFBYUEsQ0FBQ21OLEdBQUcsRUFBK0M7SUFBQSxJQUE3Q0UsV0FBVyxHQUFBdk8sU0FBQSxDQUFBRyxNQUFBLFFBQUFILFNBQUEsUUFBQUksU0FBQSxHQUFBSixTQUFBLE1BQUcsS0FBSztJQUFBLElBQUV3TyxlQUFlLEdBQUF4TyxTQUFBLENBQUFHLE1BQUEsUUFBQUgsU0FBQSxRQUFBSSxTQUFBLEdBQUFKLFNBQUEsTUFBRyxJQUFJO0lBQzVELElBQUksSUFBSSxDQUFDeU8sd0JBQXdCLEtBQUtKLEdBQUcsSUFBSUUsV0FBVyxLQUFLLEtBQUssRUFBRTtNQUNsRTtJQUNGO0lBQ0EsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0MsR0FBRyxDQUFDO0lBQzNCLElBQUksQ0FBQ0ksd0JBQXdCLEdBQUdKLEdBQUc7SUFDbkMsSUFBSSxDQUFDSyxnQkFBZ0IsR0FBR0wsR0FBRztJQUMzQixJQUFNO01BQ0pNLFFBQVE7TUFDUkM7SUFDRixDQUFDLEdBQUcvVSxRQUFRLENBQUMrRyxjQUFjLEVBQUU7SUFDN0IsSUFBTTFFLEtBQUssR0FBRztNQUNaMlMsV0FBVyxFQUFFLElBQUksQ0FBQy9QLFNBQVMsQ0FBQzlDLGdCQUFnQixDQUFDQyxLQUFLLEdBQUcsSUFBSTtNQUN6RDZTLFdBQVcsRUFBRSxJQUFJLENBQUNoUSxTQUFTLENBQUM5QyxnQkFBZ0IsQ0FBQ0UsS0FBSztNQUNsRDZTLFlBQVksRUFBRSxJQUFJLENBQUNqUSxTQUFTLENBQUM5QyxnQkFBZ0IsQ0FBQ0csTUFBTSxHQUFHLElBQUk7TUFDM0Q2UyxXQUFXLEVBQUUsSUFBSSxDQUFDbFEsU0FBUyxDQUFDOUMsZ0JBQWdCLENBQUNxUyxHQUFHO0lBQ2xELENBQUM7SUFDRCxJQUFJTSxRQUFRLEVBQUU7TUFDWixJQUFJLENBQUNWLFVBQVUsQ0FBQ1UsUUFBUSxFQUFFelMsS0FBSyxDQUFDO0lBQ2xDO0lBQ0EsSUFBSSxJQUFJLENBQUM0QyxTQUFTLENBQUNqQyx1QkFBdUIsRUFBRTtNQUFBLElBQUFvUyxxQkFBQTtNQUMxQ0wsV0FBVyxhQUFYQSxXQUFXLHdCQUFBSyxxQkFBQSxHQUFYTCxXQUFXLENBQUVNLGFBQWEsQ0FBQyxlQUFlLENBQUMsY0FBQUQscUJBQUEsdUJBQTNDQSxxQkFBQSxDQUE2Q0UsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUNyUSxTQUFTLENBQUNoQyxjQUFjLENBQUN1UixHQUFHLENBQUMsQ0FBQztJQUN2RztJQUNBLElBQUksSUFBSSxDQUFDM04sb0JBQW9CLEVBQUU7TUFDN0IsSUFBSSxJQUFJLENBQUM1QixTQUFTLENBQUNyRCxRQUFRLElBQUksSUFBSSxDQUFDcUQsU0FBUyxDQUFDcEQsZUFBZSxFQUFFO1FBQzdELElBQUksQ0FBQ2dGLG9CQUFvQixDQUFDME8sSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMvTyxTQUFTLEVBQUUsSUFBSSxDQUFDcU8sZ0JBQWdCLEVBQUUsSUFBSSxDQUFDL04sT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM3QixTQUFTLENBQUNwRCxlQUFlLEVBQUUsSUFBSSxDQUFDb0QsU0FBUyxDQUFDL0MsWUFBWSxFQUFFeVMsZUFBZSxDQUFDO01BQ2hMO01BQ0EsSUFBSSxJQUFJLENBQUMxUCxTQUFTLENBQUNuRCxXQUFXLElBQUksSUFBSSxDQUFDbUQsU0FBUyxDQUFDbEQsa0JBQWtCLEVBQUU7UUFDbkUsSUFBSSxDQUFDOEUsb0JBQW9CLENBQUMwTyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQy9PLFNBQVMsRUFBRSxJQUFJLENBQUNxTyxnQkFBZ0IsRUFBRSxJQUFJLENBQUM1TixVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQ2xELGtCQUFrQixFQUFFLElBQUksQ0FBQ2tELFNBQVMsQ0FBQy9DLFlBQVksRUFBRXlTLGVBQWUsQ0FBQztNQUN6TDtNQUNBLElBQUksSUFBSSxDQUFDMVAsU0FBUyxDQUFDakQsV0FBVyxJQUFJLElBQUksQ0FBQ2lELFNBQVMsQ0FBQ2hELGtCQUFrQixFQUFFO1FBQ25FLElBQUksQ0FBQzRFLG9CQUFvQixDQUFDME8sSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMvTyxTQUFTLEVBQUUsSUFBSSxDQUFDcU8sZ0JBQWdCLEVBQUUsSUFBSSxDQUFDMU4sVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUNsQyxTQUFTLENBQUNoRCxrQkFBa0IsRUFBRSxJQUFJLENBQUNnRCxTQUFTLENBQUMvQyxZQUFZLEVBQUV5UyxlQUFlLENBQUM7TUFDekw7SUFDRjtJQUNBLElBQUlILEdBQUcsS0FBSyxJQUFJLENBQUNoVCxXQUFXLENBQUNWLHVCQUF1QixFQUFFO01BQ3BELElBQU07UUFDSndOO01BQ0YsQ0FBQyxHQUFHdE8sUUFBUSxDQUFDK0csY0FBYyxFQUFFO01BQzdCLElBQUksQ0FBQ3FOLFVBQVUsQ0FBQzlGLEtBQUssRUFBRTtRQUNyQmtILE9BQU8sRUFBRTtNQUNYLENBQUMsQ0FBQztNQUNGLElBQUksSUFBSSxDQUFDdlEsU0FBUyxDQUFDL0MsWUFBWSxFQUFFO1FBQy9CLElBQUksQ0FBQ3VULGlCQUFpQixDQUFDZCxlQUFlLENBQUM7TUFDekM7SUFDRjtJQUNBLElBQUlILEdBQUcsS0FBSyxJQUFJLENBQUNoVCxXQUFXLENBQUNSLG9CQUFvQixFQUFFO01BQ2pELElBQUksSUFBSSxDQUFDaUUsU0FBUyxDQUFDL0MsWUFBWSxFQUFFO1FBQy9CLElBQUksQ0FBQ3dULGVBQWUsRUFBRTtNQUN4QjtJQUNGO0VBQ0Y7RUFDQUQsaUJBQWlCQSxDQUFDZCxlQUFlLEVBQUU7SUFDakMsSUFBTTtNQUNKRyxRQUFRO01BQ1JhLFNBQVM7TUFDVEM7SUFDRixDQUFDLEdBQUc1VixRQUFRLENBQUMrRyxjQUFjLEVBQUU7SUFDN0I2TyxZQUFZLENBQUNoRixHQUFHLEdBQUcrRCxlQUFlO0lBQ2xDLElBQU1rQixRQUFRLEdBQUc7TUFDZnpULEtBQUssRUFBRTBTLFFBQVEsQ0FBQ2pHLFdBQVcsR0FBRyxJQUFJO01BQ2xDcUMsTUFBTSxFQUFFNEQsUUFBUSxDQUFDL0YsWUFBWSxHQUFHO0lBQ2xDLENBQUM7SUFDRCxJQUFJLENBQUNxRixVQUFVLENBQUN3QixZQUFZLEVBQUVDLFFBQVEsQ0FBQztJQUN2QyxJQUFJLENBQUN6QixVQUFVLENBQUN1QixTQUFTLEVBQUU7TUFDekJILE9BQU8sRUFBRTtJQUNYLENBQUMsQ0FBQztFQUNKO0VBQ0FFLGVBQWVBLENBQUEsRUFBRztJQUNoQixJQUFNO01BQ0pwSCxLQUFLO01BQ0xxSCxTQUFTO01BQ1RDO0lBQ0YsQ0FBQyxHQUFHNVYsUUFBUSxDQUFDK0csY0FBYyxFQUFFO0lBQzdCLElBQUksQ0FBQ3FOLFVBQVUsQ0FBQzlGLEtBQUssRUFBRTtNQUNyQmtILE9BQU8sRUFBRTtJQUNYLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ3BCLFVBQVUsQ0FBQ3VCLFNBQVMsRUFBRTtNQUN6QkgsT0FBTyxFQUFFO0lBQ1gsQ0FBQyxDQUFDO0lBQ0ZJLFlBQVksQ0FBQ2hGLEdBQUcsR0FBRyxFQUFFO0VBQ3ZCO0VBQ01rRixpQkFBaUJBLENBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFFO0lBQUEsSUFBQUMsT0FBQTtJQUFBLE9BQUFsUyxpQkFBQTtNQUNuQztNQUNBLElBQUksQ0FBQzBFLFNBQVMsQ0FBQ3lOLFlBQVksRUFBRTtRQUMzQixNQUFNLElBQUl0UixLQUFLLENBQUMseUNBQXlDLENBQUM7TUFDNUQ7TUFDQSxJQUFNdVIsT0FBTyxTQUFTMU4sU0FBUyxDQUFDeU4sWUFBWSxDQUFDRSxnQkFBZ0IsRUFBRTtNQUMvRCxJQUFNQyxZQUFZLEdBQUdGLE9BQU8sQ0FBQ0csTUFBTSxDQUFDQyxNQUFNLElBQUk7UUFDNUMsSUFBSUEsTUFBTSxDQUFDUixJQUFJLFFBQUF2TyxNQUFBLENBQVF1TyxJQUFJLFVBQU8sSUFBSVEsTUFBTSxDQUFDQyxlQUFlLEVBQUU7VUFBQSxJQUFBQyxlQUFBO1VBQzVELElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDQyxlQUFlLEVBQUU7VUFDcEMsSUFBSUUsR0FBRyxhQUFIQSxHQUFHLGdCQUFBRCxlQUFBLEdBQUhDLEdBQUcsQ0FBRUMsVUFBVSxjQUFBRixlQUFBLGVBQWZBLGVBQUEsQ0FBaUJuTCxRQUFRLENBQUMySyxPQUFJLENBQUNXLHNCQUFzQixDQUFDLEVBQUU7WUFDMUQsT0FBTyxJQUFJO1VBQ2I7UUFDRjtRQUNBLE9BQU8sS0FBSztNQUNkLENBQUMsQ0FBQztNQUNGLE9BQU9QLFlBQVksQ0FBQy9QLE1BQU0sSUFBSSxDQUFDLEdBQUcrUCxZQUFZLEdBQUdBLFlBQVksQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLElBQUlQLEtBQUssR0FBR08sTUFBTSxDQUFDUCxLQUFLLENBQUMxSyxRQUFRLENBQUMwSyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFBQztFQUM5SDtFQUNBYSxrQkFBa0JBLENBQUEsRUFBRztJQUNuQixJQUFNQyxPQUFPLEdBQUc5VyxRQUFRLENBQUMyRixnQkFBZ0IsQ0FBQzNGLFFBQVEsQ0FBQytHLGNBQWMsRUFBRSxDQUFDZ1EsR0FBRyxDQUFDO0lBQ3hFLElBQUlDLFNBQVMsR0FBRyxLQUFLO0lBQ3JCLElBQUlGLE9BQU8sS0FBSyxJQUFJLENBQUNHLG1CQUFtQixFQUFFO01BQ3hDLElBQUksQ0FBQ3JSLGVBQWUsR0FBR2tSLE9BQU87TUFDOUIsSUFBSSxDQUFDRyxtQkFBbUIsR0FBR0gsT0FBTztNQUNsQ0UsU0FBUyxHQUFHLElBQUk7SUFDbEI7SUFDQSxPQUFPO01BQ0xGLE9BQU87TUFDUEU7SUFDRixDQUFDO0VBQ0g7RUFDQUUsZUFBZUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ25CQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxFQUFFO0lBQ2xCRCxHQUFHLENBQUNFLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDNUJGLEdBQUcsQ0FBQ0UsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUM1QixJQUFJLENBQUNqRCxVQUFVLENBQUMrQyxHQUFHLEVBQUU7TUFDbkIzQixPQUFPLEVBQUU7SUFDWCxDQUFDLENBQUM7RUFDSjtFQUNBOEIsa0JBQWtCQSxDQUFBLEVBQUc7SUFDbkIsSUFBSTtNQUNGUCxHQUFHO01BQ0h6SSxLQUFLO01BQ0xDLE1BQU07TUFDTkMsY0FBYztNQUNkc0csUUFBUTtNQUNSeUMsU0FBUztNQUNUQyxZQUFZO01BQ1p6QyxXQUFXO01BQ1gwQyxvQkFBb0I7TUFDcEJDLFlBQVk7TUFDWjFRLEtBQUs7TUFDTEUsUUFBUTtNQUNSRSxRQUFRO01BQ1J1USxhQUFhO01BQ2JoQyxTQUFTO01BQ1RDO0lBQ0YsQ0FBQyxHQUFHNVYsUUFBUSxDQUFDK0csY0FBYyxFQUFFO0lBQzdCLElBQUksQ0FBQ2dRLEdBQUcsRUFBRSxNQUFNLElBQUluUyxLQUFLLENBQUMsOEJBQThCLENBQUM7SUFDekQsSUFBSTJTLFNBQVMsRUFBRUEsU0FBUyxDQUFDSyxNQUFNLEVBQUU7SUFDakMsSUFBSUosWUFBWSxFQUFFQSxZQUFZLENBQUNJLE1BQU0sRUFBRTtJQUN2QyxJQUFJdEosS0FBSyxFQUFFQSxLQUFLLENBQUNzSixNQUFNLEVBQUU7SUFDekIsSUFBSXJKLE1BQU0sRUFBRUEsTUFBTSxDQUFDcUosTUFBTSxFQUFFO0lBQzNCLElBQUlwSixjQUFjLEVBQUVBLGNBQWMsQ0FBQ29KLE1BQU0sRUFBRTtJQUMzQyxJQUFJOUMsUUFBUSxFQUFFQSxRQUFRLENBQUM4QyxNQUFNLEVBQUU7SUFDL0IsSUFBSTdDLFdBQVcsRUFBRUEsV0FBVyxDQUFDNkMsTUFBTSxFQUFFO0lBQ3JDLElBQUlILG9CQUFvQixFQUFFQSxvQkFBb0IsQ0FBQ0csTUFBTSxFQUFFO0lBQ3ZELElBQUlGLFlBQVksRUFBRUEsWUFBWSxDQUFDRSxNQUFNLEVBQUU7SUFDdkM7SUFDQSxJQUFJNVEsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDL0IsU0FBUyxDQUFDckQsUUFBUSxFQUFFLElBQUksQ0FBQ3NWLGVBQWUsQ0FBQ2xRLEtBQUssQ0FBQztJQUNsRSxJQUFJRSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUNqQyxTQUFTLENBQUNuRCxXQUFXLEVBQUUsSUFBSSxDQUFDb1YsZUFBZSxDQUFDaFEsUUFBUSxDQUFDO0lBQzNFLElBQUlFLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQ25DLFNBQVMsQ0FBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUNrVixlQUFlLENBQUM5UCxRQUFRLENBQUM7SUFDM0UsSUFBSXVRLGFBQWEsRUFBRUEsYUFBYSxDQUFDQyxNQUFNLEVBQUU7SUFDekM7SUFDQSxJQUFJakMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDMVEsU0FBUyxDQUFDL0MsWUFBWSxFQUFFLElBQUksQ0FBQ2dWLGVBQWUsQ0FBQ3ZCLFNBQVMsQ0FBQztJQUM5RSxJQUFNalMsY0FBYyxHQUFHLElBQUksQ0FBQ3NLLG1CQUFtQixFQUFFO0lBQ2pELElBQUksQ0FBQ3FCLGtCQUFrQixHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDL0QsUUFBUSxDQUFDNUgsY0FBYyxDQUFDO0lBQzVELElBQUltVSxRQUFRLEdBQUc7TUFDYnpWLEtBQUssRUFBRSxNQUFNO01BQ2I4TyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBQ0QsSUFBSSxDQUFDa0QsVUFBVSxDQUFDMkMsR0FBRyxFQUFFYyxRQUFRLENBQUM7SUFDOUIsSUFBTUMsU0FBUyxHQUFHO01BQ2hCN0csUUFBUSxFQUFFLFVBQVU7TUFDcEJ1RSxPQUFPLEVBQUUsTUFBTTtNQUNmO01BQ0EsYUFBYSxFQUFFLFFBQVE7TUFDdkIsaUJBQWlCLEVBQUUsUUFBUTtNQUMzQnBULEtBQUssRUFBRSxNQUFNO01BQ2I4TyxNQUFNLEVBQUUsTUFBTTtNQUNkNkcsTUFBTSxFQUFFLFFBQVE7TUFDaEJDLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDRFQsU0FBUyxHQUFHekcsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDd0csU0FBUyxDQUFDakMsWUFBWSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUM7SUFDcEQsSUFBSWlDLFNBQVMsRUFBRTtNQUNiLE9BQU9BLFNBQVMsQ0FBQ1UsVUFBVSxFQUFFO1FBQzNCVixTQUFTLENBQUNXLFdBQVcsQ0FBQ1gsU0FBUyxDQUFDWSxTQUFTLENBQUM7TUFDNUM7TUFDQSxJQUFJLENBQUMvRCxVQUFVLENBQUNtRCxTQUFTLEVBQUVPLFNBQVMsQ0FBQztJQUN2QztJQUNBZixHQUFHLENBQUNxQixXQUFXLENBQUNiLFNBQVMsQ0FBQztJQUMxQnhDLFdBQVcsR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQ2dFLFdBQVcsQ0FBQ08sWUFBWSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7SUFDeERQLFdBQVcsQ0FBQ08sWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDeENQLFdBQVcsQ0FBQ08sWUFBWSxDQUFDLE9BQU8sRUFBRSw0QkFBNEIsQ0FBQztJQUMvRCxJQUFJLENBQUNsQixVQUFVLENBQUNXLFdBQVcsRUFBRStDLFNBQVMsQ0FBQztJQUN2QyxJQUFJTyxVQUFVLEdBQUcsSUFBSSxDQUFDcFQsU0FBUyxDQUFDaEMsY0FBYyxDQUFDRSxVQUFVLEdBQUcsSUFBSTtJQUNoRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM4QixTQUFTLENBQUN2RCxhQUFhLEVBQUU7TUFDbEMyVyxVQUFVLEdBQUcsSUFBSSxDQUFDcFQsU0FBUyxDQUFDaEMsY0FBYyxDQUFDQyxVQUFVLEdBQUcsSUFBSTtJQUM5RDtJQUNBNlIsV0FBVyxDQUFDcUMsU0FBUyxHQUFHLEVBQUUsR0FBRywyR0FBMkcsR0FBRyw2QkFBNkIsR0FBRywrREFBK0QsR0FBRyxrREFBa0QsR0FBRyxxQ0FBcUMsR0FBRyx3Q0FBd0MsR0FBRyxpQ0FBaUMsR0FBRywrQkFBK0IsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxlQUFlLEdBQUcsK0JBQStCLEdBQUcsb0RBQW9ELEdBQUcsa0JBQWtCLEdBQUdpQixVQUFVLEdBQUcsb0NBQW9DLEdBQUcsVUFBVTtJQUNsc0J0QixHQUFHLENBQUNxQixXQUFXLENBQUNyRCxXQUFXLENBQUM7SUFDNUJ6RyxLQUFLLEdBQUd3QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDdkN6QyxLQUFLLENBQUNnSCxZQUFZLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQztJQUM1Q2hILEtBQUssQ0FBQ2dILFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO0lBQ3RDaEgsS0FBSyxDQUFDZ0gsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDbkNoSCxLQUFLLENBQUNnSCxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztJQUN6QyxJQUFJZ0QsVUFBVSxHQUFHO01BQ2ZySCxRQUFRLEVBQUUsVUFBVTtNQUNwQjdPLEtBQUssRUFBRTtJQUNULENBQUM7SUFDRCxJQUFNbVcsU0FBUyxHQUFHLFNBQVMsR0FBRzdVLGNBQWMsR0FBRyxNQUFNO0lBQ3JELElBQU04VSxTQUFTLEdBQUcsaUJBQWlCO0lBQ25DLElBQU1DLGtCQUFrQixHQUFHRCxTQUFTLEdBQUcsR0FBRyxHQUFHRCxTQUFTO0lBQ3RELElBQUksSUFBSSxDQUFDbEosa0JBQWtCLEVBQUU7TUFDM0IsSUFBSSxJQUFJLENBQUNwQixlQUFlLEVBQUUsRUFBRTtRQUMxQnFLLFVBQVUsR0FBQUksYUFBQSxDQUFBQSxhQUFBLEtBQ0xKLFVBQVU7VUFDYixtQkFBbUIsRUFBRUcsa0JBQWtCO1VBQ3ZDLGdCQUFnQixFQUFFQSxrQkFBa0I7VUFDcEMsY0FBYyxFQUFFQSxrQkFBa0I7VUFDbEMsZUFBZSxFQUFFQSxrQkFBa0I7VUFDbkMsV0FBVyxFQUFFQTtRQUFrQixFQUNoQztNQUNILENBQUMsTUFBTTtRQUNMSCxVQUFVLEdBQUFJLGFBQUEsQ0FBQUEsYUFBQSxLQUNMSixVQUFVO1VBQ2IsbUJBQW1CLEVBQUVDLFNBQVM7VUFDOUIsZ0JBQWdCLEVBQUVBLFNBQVM7VUFDM0IsY0FBYyxFQUFFQSxTQUFTO1VBQ3pCLGVBQWUsRUFBRUEsU0FBUztVQUMxQixXQUFXLEVBQUVBO1FBQVMsRUFDdkI7TUFDSDtJQUNGLENBQUMsTUFBTTtNQUNMLElBQUksSUFBSSxDQUFDdEssZUFBZSxFQUFFLEVBQUU7UUFDMUJxSyxVQUFVLEdBQUFJLGFBQUEsQ0FBQUEsYUFBQSxLQUNMSixVQUFVO1VBQ2IsbUJBQW1CLEVBQUVFLFNBQVM7VUFDOUIsZ0JBQWdCLEVBQUVBLFNBQVM7VUFDM0IsY0FBYyxFQUFFQSxTQUFTO1VBQ3pCLGVBQWUsRUFBRUEsU0FBUztVQUMxQixXQUFXLEVBQUVBO1FBQVMsRUFDdkI7TUFDSDtJQUNGO0lBQ0EsSUFBSSxDQUFDcEUsVUFBVSxDQUFDOUYsS0FBSyxFQUFFZ0ssVUFBVSxDQUFDO0lBQ2xDZixTQUFTLENBQUNhLFdBQVcsQ0FBQzlKLEtBQUssQ0FBQztJQUM1QmtKLFlBQVksR0FBRzFHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM1Q3lHLFlBQVksQ0FBQ2xDLFlBQVksQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDO0lBQzFELElBQUksQ0FBQ2xCLFVBQVUsQ0FBQ29ELFlBQVksRUFBRU0sU0FBUyxDQUFDO0lBQ3hDZixHQUFHLENBQUNxQixXQUFXLENBQUNaLFlBQVksQ0FBQztJQUM3QjFDLFFBQVEsR0FBR2hFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN4QytELFFBQVEsQ0FBQ1EsWUFBWSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUM7SUFDbERSLFFBQVEsQ0FBQ1EsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDckNSLFFBQVEsQ0FBQ1EsWUFBWSxDQUFDLE9BQU8sRUFBRSw0QkFBNEIsQ0FBQztJQUM1RCxJQUFJLENBQUNsQixVQUFVLENBQUNVLFFBQVEsRUFBRTtNQUN4QjFTLEtBQUssRUFBRSxNQUFNO01BQ2IyVixNQUFNLEVBQUUsUUFBUTtNQUNoQjlHLFFBQVEsRUFBRTtJQUNaLENBQUMsQ0FBQztJQUNGdUcsWUFBWSxDQUFDWSxXQUFXLENBQUN0RCxRQUFRLENBQUM7SUFDbEN2RyxNQUFNLEdBQUd1QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDekN4QyxNQUFNLENBQUMrRyxZQUFZLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQztJQUM5QyxJQUFNcUQsV0FBVyxHQUFHO01BQ2xCbkQsT0FBTyxFQUFFLElBQUksQ0FBQ3ZRLFNBQVMsQ0FBQ3RELGlCQUFpQixHQUFHLElBQUksQ0FBQzBOLGtCQUFrQixHQUFHLE1BQU0sR0FBRyxTQUFTLEdBQUcsTUFBTTtNQUNqR2pOLEtBQUssRUFBRSxLQUFLO01BQ1o2TyxRQUFRLEVBQUUsVUFBVTtNQUNwQjJILElBQUksRUFBRSxLQUFLO01BQ1hDLEdBQUcsRUFBRSxNQUFNO01BQ1hDLE1BQU0sRUFBRTtJQUNWLENBQUM7SUFDRCxJQUFJLENBQUMxRSxVQUFVLENBQUM3RixNQUFNLEVBQUVvSyxXQUFXLENBQUM7SUFDcEM1QixHQUFHLENBQUNxQixXQUFXLENBQUM3SixNQUFNLENBQUM7SUFDdkJDLGNBQWMsR0FBR3NDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNqRHZDLGNBQWMsQ0FBQzhHLFlBQVksQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7SUFDOUQsSUFBSSxDQUFDbEIsVUFBVSxDQUFDNUYsY0FBYyxFQUFFO01BQzlCZ0gsT0FBTyxFQUFFLElBQUksQ0FBQ3ZRLFNBQVMsQ0FBQ3RELGlCQUFpQixHQUFHLElBQUksQ0FBQzBOLGtCQUFrQixHQUFHLFNBQVMsR0FBRyxNQUFNLEdBQUcsTUFBTTtNQUNqRzZCLE1BQU0sRUFBRSxLQUFLO01BQ2JELFFBQVEsRUFBRSxVQUFVO01BQ3BCOEgsS0FBSyxFQUFFLEtBQUs7TUFDWkYsR0FBRyxFQUFFLE1BQU07TUFDWEMsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBQ0YvQixHQUFHLENBQUNxQixXQUFXLENBQUM1SixjQUFjLENBQUM7SUFDL0JpSixvQkFBb0IsR0FBRzNHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNwRDBHLG9CQUFvQixDQUFDbkMsWUFBWSxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQztJQUMxRSxJQUFJLENBQUNsQixVQUFVLENBQUNxRCxvQkFBb0IsRUFBRTtNQUNwQ3hHLFFBQVEsRUFBRSxVQUFVO01BQ3BCK0gsTUFBTSxFQUFFLElBQUk7TUFDWkQsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUFDO0lBQ0Z0QixvQkFBb0IsQ0FBQ0wsU0FBUyxHQUFHLEVBQUUsR0FBRyxvUUFBb1EsR0FBRyw4REFBOEQsR0FBRyxtTUFBbU0sR0FBRyx3T0FBd08sR0FBRyxhQUFhLEdBQUcsOERBQThELEdBQUcsNlBBQTZQLEdBQUcsZ1FBQWdRLEdBQUcsYUFBYSxHQUFHLDhEQUE4RCxHQUFHLCtRQUErUSxHQUFHLGtSQUFrUixHQUFHLGFBQWEsR0FBRyw4REFBOEQsR0FBRywrUUFBK1EsR0FBRyxrUkFBa1IsR0FBRyxhQUFhLEdBQUcsOERBQThELEdBQUcsK1FBQStRLEdBQUcsa1JBQWtSLEdBQUcsYUFBYTtJQUN4dUcsUUFBUTtJQUNSTCxHQUFHLENBQUNxQixXQUFXLENBQUNYLG9CQUFvQixDQUFDO0lBQ3JDQyxZQUFZLEdBQUc1RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDNUMyRyxZQUFZLENBQUNwQyxZQUFZLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztJQUMxRCxJQUFNMkQsaUJBQWlCLEdBQUFQLGFBQUEsQ0FBQUEsYUFBQSxLQUNsQlosU0FBUztNQUNaLGdCQUFnQixFQUFFO0lBQVEsRUFDM0I7SUFDRCxJQUFJLENBQUMxRCxVQUFVLENBQUNzRCxZQUFZLEVBQUV1QixpQkFBaUIsQ0FBQztJQUNoRGxDLEdBQUcsQ0FBQ3FCLFdBQVcsQ0FBQ1YsWUFBWSxDQUFDOztJQUU3QjtJQUNBO0lBQ0EsSUFBSSxDQUFDMVEsS0FBSyxFQUFFO01BQ1ZBLEtBQUssR0FBRzhKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNyQy9KLEtBQUssQ0FBQ3NPLFlBQVksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO0lBQzlDO0lBQ0FvQyxZQUFZLENBQUNVLFdBQVcsQ0FBQ3BSLEtBQUssQ0FBQztJQUMvQixJQUFJLENBQUNFLFFBQVEsRUFBRTtNQUNiQSxRQUFRLEdBQUc0SixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDeEM3SixRQUFRLENBQUNvTyxZQUFZLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQztJQUNwRDtJQUNBb0MsWUFBWSxDQUFDVSxXQUFXLENBQUNsUixRQUFRLENBQUM7SUFDbEMsSUFBSSxDQUFDRSxRQUFRLEVBQUU7TUFDYkEsUUFBUSxHQUFHMEosUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ3hDM0osUUFBUSxDQUFDa08sWUFBWSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUM7SUFDcEQ7SUFDQW9DLFlBQVksQ0FBQ1UsV0FBVyxDQUFDaFIsUUFBUSxDQUFDO0lBQ2xDdVEsYUFBYSxHQUFHN0csUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzdDNEcsYUFBYSxDQUFDckMsWUFBWSxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7SUFDNUQsSUFBTTRELGtCQUFrQixHQUFBUixhQUFBLENBQUFBLGFBQUEsS0FDbkJaLFNBQVM7TUFDWixnQkFBZ0IsRUFBRTtJQUFRLEVBQzNCO0lBQ0QsSUFBSSxDQUFDMUQsVUFBVSxDQUFDdUQsYUFBYSxFQUFFdUIsa0JBQWtCLENBQUM7SUFDbERuQyxHQUFHLENBQUNxQixXQUFXLENBQUNULGFBQWEsQ0FBQztJQUM5QixJQUFJLElBQUksQ0FBQzFTLFNBQVMsQ0FBQy9DLFlBQVksRUFBRTtNQUMvQixJQUFJLENBQUN5VCxTQUFTLEVBQUU7UUFDZEEsU0FBUyxHQUFHN0UsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pDNEUsU0FBUyxDQUFDTCxZQUFZLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQztNQUN0RDtNQUNBLElBQUksQ0FBQ2xCLFVBQVUsQ0FBQ3VCLFNBQVMsRUFBRTtRQUN6QkgsT0FBTyxFQUFFO01BQ1gsQ0FBQyxDQUFDO01BQ0ZtQyxhQUFhLENBQUNTLFdBQVcsQ0FBQ3pDLFNBQVMsQ0FBQztNQUNwQyxJQUFJLENBQUNDLFlBQVksRUFBRTtRQUNqQkEsWUFBWSxHQUFHOUUsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzVDNkUsWUFBWSxDQUFDTixZQUFZLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztRQUMxREssU0FBUyxDQUFDeUMsV0FBVyxDQUFDeEMsWUFBWSxDQUFDO01BQ3JDO0lBQ0Y7O0lBRUE7SUFDQSxJQUFJLENBQUM5QixhQUFhLEVBQUU7SUFDcEI7SUFDQSxJQUFJLENBQUNNLFVBQVUsQ0FBQzJDLEdBQUcsRUFBRTtNQUNuQnZCLE9BQU8sRUFBRTtJQUNYLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQzJELEtBQUssR0FBR3BDLEdBQUc7SUFDaEIsSUFBSSxDQUFDcUMsUUFBUSxHQUFHN0ssTUFBTTtJQUN0QixJQUFJLENBQUM4SyxnQkFBZ0IsR0FBRzdLLGNBQWM7SUFDdEMsSUFBSSxDQUFDOEssT0FBTyxHQUFHaEwsS0FBSztJQUNwQixJQUFJLENBQUNpTCxXQUFXLEdBQUdoQyxTQUFTO0lBQzVCLElBQUksQ0FBQ2lDLFVBQVUsR0FBRzFFLFFBQVE7SUFDMUIsSUFBSSxDQUFDMkUsY0FBYyxHQUFHakMsWUFBWTtJQUNsQyxJQUFJLENBQUNrQyxhQUFhLEdBQUczRSxXQUFXO0lBQ2hDLElBQUksQ0FBQzRFLHNCQUFzQixHQUFHbEMsb0JBQW9CO0lBQ2xELElBQUksQ0FBQ21DLGNBQWMsR0FBR2xDLFlBQVk7SUFDbEMsSUFBSSxDQUFDNVEsT0FBTyxHQUFHRSxLQUFLO0lBQ3BCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRO0lBQzFCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRO0lBQzFCLElBQUksQ0FBQ3lTLGVBQWUsR0FBR2xDLGFBQWE7SUFDcEMsSUFBSSxDQUFDbUMsV0FBVyxHQUFHbkUsU0FBUztJQUM1QixJQUFJLENBQUNvRSxjQUFjLEdBQUduRSxZQUFZO0lBQ2xDLE9BQU87TUFDTG1CLEdBQUc7TUFDSHhJLE1BQU07TUFDTkMsY0FBYztNQUNkRixLQUFLO01BQ0xpSixTQUFTO01BQ1R6QyxRQUFRO01BQ1IwQyxZQUFZO01BQ1p6QyxXQUFXO01BQ1gwQyxvQkFBb0I7TUFDcEJDLFlBQVk7TUFDWjFRLEtBQUs7TUFDTEUsUUFBUTtNQUNSRSxRQUFRO01BQ1J1USxhQUFhO01BQ2JoQyxTQUFTO01BQ1RDO0lBQ0YsQ0FBQztFQUNIO0VBQ01uQyxZQUFZQSxDQUFDRCxVQUFVLEVBQUU7SUFBQSxJQUFBd0csT0FBQTtJQUFBLE9BQUFqVyxpQkFBQTtNQUM3QjtNQUNBaVcsT0FBSSxDQUFDek4saUJBQWlCLEdBQUcsSUFBSTtNQUM3QnlOLE9BQUksQ0FBQ3hOLGtCQUFrQixHQUFHLEdBQUc7TUFDN0J3TixPQUFJLENBQUNsUCxnQkFBZ0IsR0FBRyxLQUFLO01BQzdCLElBQU07UUFDSndELEtBQUs7UUFDTEMsTUFBTTtRQUNOQztNQUNGLENBQUMsR0FBR3dMLE9BQUksQ0FBQzFDLGtCQUFrQixFQUFFO01BQzdCLElBQU1qQixZQUFZLFNBQVMyRCxPQUFJLENBQUNsRSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUVrRSxPQUFJLENBQUMvVSxTQUFTLENBQUN6QixXQUFXLENBQUM7TUFDdEY7TUFDQSxJQUFNeVcsWUFBWSxHQUFHNUQsWUFBWSxDQUFDNkQsR0FBRyxDQUFDM0QsTUFBTSxJQUFJQSxNQUFNLENBQUM0RCxRQUFRLENBQUM7TUFDaEVILE9BQUksQ0FBQ25ELGtCQUFrQixFQUFFO01BQ3pCLElBQUl1RCxlQUFlLEVBQUVDLGdCQUFnQjtNQUNyQyxJQUFJTCxPQUFJLENBQUNwVSxlQUFlLEtBQUssVUFBVSxFQUFFO1FBQ3ZDO1FBQ0F3VSxlQUFlLEdBQUc7VUFDaEJFLEtBQUssRUFBRSxJQUFJO1VBQ1g7VUFDQXpLLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDWixDQUFDOztRQUVEd0ssZ0JBQWdCLEdBQUc7VUFDakJDLEtBQUssRUFBRSxJQUFJO1VBQ1g7VUFDQXpLLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDWCxDQUFDO01BQ0gsQ0FBQyxNQUFNO1FBQ0w7UUFDQXVLLGVBQWUsR0FBRztVQUNoQkUsS0FBSyxFQUFFLElBQUk7VUFDWHpLLEdBQUcsRUFBRTtRQUNQLENBQUM7UUFDRHdLLGdCQUFnQixHQUFHO1VBQ2pCQyxLQUFLLEVBQUUsSUFBSTtVQUNYekssR0FBRyxFQUFFO1FBQ1AsQ0FBQztNQUNIO01BQ0EsSUFBTTBLLFdBQVcsR0FBRztRQUNsQkMsS0FBSyxFQUFFLEtBQUs7UUFDWmxNLEtBQUssRUFBRTtVQUNMbU0sSUFBSSxFQUFFO1lBQ0pILEtBQUssRUFBRTtVQUNULENBQUM7VUFDRDNELFVBQVUsRUFBRTtZQUNWMkQsS0FBSyxFQUFFTixPQUFJLENBQUNwRDtVQUNkLENBQUM7VUFDRDhELFNBQVMsRUFBRTtZQUNUSixLQUFLLEVBQUU7VUFDVCxDQUFDO1VBQ0RLLGdCQUFnQixFQUFFO1lBQ2hCTCxLQUFLLEVBQUU7VUFDVCxDQUFDO1VBQ0RILFFBQVEsRUFBRTlELFlBQVksQ0FBQy9QLE1BQU0sR0FBRztZQUM5QmdVLEtBQUssRUFBRUwsWUFBWSxDQUFDQSxZQUFZLENBQUMzVCxNQUFNLEdBQUcsQ0FBQztVQUM3QyxDQUFDLEdBQUcsSUFBSTtVQUNSbEUsS0FBSyxFQUFFZ1ksZUFBZTtVQUN0QmxKLE1BQU0sRUFBRW1KO1FBQ1Y7TUFDRixDQUFDO01BQ0QsSUFBSTtRQUNGO1FBQ0E7O1FBRUEsSUFBTU8sTUFBTSxTQUFTblMsU0FBUyxDQUFDeU4sWUFBWSxDQUFDMkUsWUFBWSxDQUFDTixXQUFXLENBQUM7UUFDckU7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBLENBQUNoTSxNQUFNLENBQUNuTSxLQUFLLEVBQUVtTSxNQUFNLENBQUMyQyxNQUFNLENBQUMsR0FBRyxDQUFDOEksT0FBSSxDQUFDek4saUJBQWlCLEVBQUV5TixPQUFJLENBQUN4TixrQkFBa0IsQ0FBQztRQUNqRixJQUFJd04sT0FBSSxDQUFDM0ssa0JBQWtCLEVBQUU7VUFDM0IsQ0FBQ2IsY0FBYyxDQUFDcE0sS0FBSyxFQUFFb00sY0FBYyxDQUFDMEMsTUFBTSxDQUFDLEdBQUcsQ0FBQzhJLE9BQUksQ0FBQ3hOLGtCQUFrQixFQUFFd04sT0FBSSxDQUFDek4saUJBQWlCLENBQUM7UUFDbkc7UUFDQStCLEtBQUssQ0FBQ3JELFNBQVMsR0FBRzJQLE1BQU07UUFDeEJaLE9BQUksQ0FBQ3RHLFFBQVEsR0FBR2tILE1BQU07TUFDeEIsQ0FBQyxDQUFDLE9BQU9sVCxDQUFDLEVBQUU7UUFDVixLQUFLLENBQUM7UUFDTixNQUFNQSxDQUFDO01BQ1Q7SUFBQztFQUNIO0VBQ0FvTSxhQUFhQSxDQUFBLEVBQUc7SUFDZCxLQUFLLENBQUM7SUFDTixJQUFNO01BQ0ppRCxHQUFHO01BQ0h6SSxLQUFLO01BQ0x3RyxRQUFRO01BQ1JDLFdBQVc7TUFDWC9OLEtBQUs7TUFDTEUsUUFBUTtNQUNSRTtJQUNGLENBQUMsR0FBR3BILFFBQVEsQ0FBQytHLGNBQWMsRUFBRTtJQUM3QjtJQUNBLElBQU0rVCxTQUFTLEdBQUcsR0FBRztJQUNyQixJQUFNQyxVQUFVLEdBQUcsR0FBRztJQUN0QixJQUFNQyxpQkFBaUIsR0FBR0QsVUFBVSxHQUFHRCxTQUFTLENBQUMsQ0FBQzs7SUFFbEQsSUFBSUcsYUFBYSxFQUFFQyxjQUFjO0lBQ2pDLElBQUlDLGtCQUFrQixHQUFHcEUsR0FBRyxDQUFDbEksV0FBVztJQUN4QyxJQUFJdU0sbUJBQW1CLEdBQUdyRSxHQUFHLENBQUNoSSxZQUFZO0lBQzFDLElBQUlMLGNBQWMsR0FBR0osS0FBSyxDQUFDdkQsVUFBVTtJQUNyQyxJQUFJNEQsZUFBZSxHQUFHTCxLQUFLLENBQUN0RCxXQUFXO0lBQ3ZDLElBQUk0RCxvQkFBb0IsR0FBR04sS0FBSyxDQUFDTyxXQUFXO0lBQzVDLElBQUlDLHFCQUFxQixHQUFHUixLQUFLLENBQUNTLFlBQVk7SUFDOUMsSUFBSUssb0JBQW9CLEdBQUcsSUFBSSxDQUFDdEosa0JBQWtCO0lBQ2xELElBQU1rUCxXQUFXLEdBQUcsSUFBSSxDQUFDL1AsU0FBUyxDQUFDOUMsZ0JBQWdCLENBQUNDLEtBQUs7SUFDekQsSUFBTThTLFlBQVksR0FBRyxJQUFJLENBQUNqUSxTQUFTLENBQUM5QyxnQkFBZ0IsQ0FBQ0csTUFBTTtJQUMzRCxJQUFJLElBQUksQ0FBQytNLGtCQUFrQixFQUFFO01BQzNCLENBQUNYLGNBQWMsRUFBRUMsZUFBZSxDQUFDLEdBQUcsQ0FBQ0EsZUFBZSxFQUFFRCxjQUFjLENBQUM7TUFDckUsQ0FBQ0Usb0JBQW9CLEVBQUVFLHFCQUFxQixDQUFDLEdBQUcsQ0FBQ0EscUJBQXFCLEVBQUVGLG9CQUFvQixDQUFDO01BQzdGUSxvQkFBb0IsR0FBRyxJQUFJLENBQUN0SixrQkFBa0IsS0FBSyxVQUFVLEdBQUcsV0FBVyxHQUFHLFVBQVU7SUFDMUY7SUFDQSxJQUFJdVYsYUFBYSxHQUFHek0sb0JBQW9CO0lBQ3hDLElBQUkwTSxjQUFjLEdBQUd4TSxxQkFBcUI7SUFDMUMsSUFBTXlNLG9CQUFvQixHQUFHLElBQUksQ0FBQ0Msc0JBQXNCO0lBQ3hELElBQU1DLGtCQUFrQixHQUFHLElBQUksQ0FBQ0Msb0JBQW9CO0lBQ3BELElBQUksSUFBSSxDQUFDOVYsZUFBZSxLQUFLLFVBQVUsRUFBRTtNQUN2QztNQUNBO01BQ0EsSUFBSXdKLG9CQUFvQixLQUFLLElBQUksQ0FBQ3hKLGVBQWUsRUFBRTtRQUNqRDtRQUNBO1FBQ0E7UUFDQXFWLGFBQWEsR0FBR0Usa0JBQWtCLEdBQUdJLG9CQUFvQjtRQUN6REwsY0FBYyxHQUFHRCxhQUFhLEdBQUdELGlCQUFpQjs7UUFFbEQ7UUFDQUssYUFBYSxHQUFHSixhQUFhO1FBQzdCSyxjQUFjLEdBQUdELGFBQWEsSUFBSTFNLGVBQWUsR0FBR0QsY0FBYyxDQUFDO1FBQ25FLElBQUksSUFBSSxDQUFDVyxrQkFBa0IsRUFBRTtVQUMzQixDQUFDZ00sYUFBYSxFQUFFQyxjQUFjLENBQUMsR0FBRyxDQUFDQSxjQUFjLEVBQUVELGFBQWEsQ0FBQztRQUNuRTtNQUNGLENBQUMsTUFBTTtRQUNMO1FBQ0E7UUFDQTtRQUNBSCxjQUFjLEdBQUdwTSxxQkFBcUI7UUFDdENtTSxhQUFhLEdBQUdDLGNBQWMsR0FBR0osU0FBUyxHQUFHQyxVQUFVO01BQ3pEO0lBQ0YsQ0FBQyxNQUFNO01BQ0w7TUFDQSxJQUFJM0wsb0JBQW9CLEtBQUssSUFBSSxDQUFDeEosZUFBZSxFQUFFO1FBQ2pEO1FBQ0E7UUFDQTtRQUNBMFYsY0FBYyxHQUFHRixtQkFBbUIsR0FBR0ssa0JBQWtCO1FBQ3pESixhQUFhLEdBQUdDLGNBQWMsSUFBSTVNLGNBQWMsR0FBR0MsZUFBZSxDQUFDOztRQUVuRTtRQUNBdU0sY0FBYyxHQUFHSSxjQUFjO1FBQy9CTCxhQUFhLEdBQUdDLGNBQWMsR0FBR0osU0FBUyxHQUFHQyxVQUFVOztRQUV2RDtRQUNBLElBQUlFLGFBQWEsR0FBR0Usa0JBQWtCLEdBQUdJLG9CQUFvQixFQUFFO1VBQzdEO1VBQ0FOLGFBQWEsR0FBR0Usa0JBQWtCLEdBQUdJLG9CQUFvQjtVQUN6REwsY0FBYyxHQUFHRCxhQUFhLEdBQUdELGlCQUFpQjs7VUFFbEQ7VUFDQUssYUFBYSxHQUFHSixhQUFhO1VBQzdCSyxjQUFjLEdBQUdELGFBQWEsSUFBSTFNLGVBQWUsR0FBR0QsY0FBYyxDQUFDO1FBQ3JFO01BQ0YsQ0FBQyxNQUFNO1FBQ0w7UUFDQTs7UUFFQTtRQUNBd00sY0FBYyxHQUFHRSxtQkFBbUIsR0FBR0ssa0JBQWtCO1FBQ3pEUixhQUFhLEdBQUdDLGNBQWMsR0FBR0osU0FBUyxHQUFHQyxVQUFVOztRQUV2RDtRQUNBLElBQUlFLGFBQWEsR0FBR0Usa0JBQWtCLEdBQUdJLG9CQUFvQixFQUFFO1VBQzdEO1VBQ0FOLGFBQWEsR0FBR0Usa0JBQWtCLEdBQUdJLG9CQUFvQjtVQUN6REwsY0FBYyxHQUFHRCxhQUFhLEdBQUdELGlCQUFpQjtRQUNwRDs7UUFFQTtRQUNBSyxhQUFhLEdBQUdKLGFBQWE7UUFDN0JLLGNBQWMsR0FBR0QsYUFBYSxJQUFJMU0sZUFBZSxHQUFHRCxjQUFjLENBQUM7UUFDbkUsSUFBSSxJQUFJLENBQUNXLGtCQUFrQixFQUFFO1VBQzNCLENBQUNnTSxhQUFhLEVBQUVDLGNBQWMsQ0FBQyxHQUFHLENBQUNBLGNBQWMsRUFBRUQsYUFBYSxDQUFDO1FBQ25FO01BQ0Y7SUFDRjtJQUNBSixhQUFhLElBQUlqRyxXQUFXLEdBQUcsQ0FBQztJQUNoQ2tHLGNBQWMsSUFBSWxHLFdBQVcsR0FBRyxDQUFDO0lBQ2pDLElBQUksQ0FBQy9GLG9CQUFvQixHQUFHVyxJQUFJLENBQUNDLEdBQUcsQ0FBQ29MLGFBQWEsRUFBRUksYUFBYSxDQUFDO0lBQ2xFLElBQUksQ0FBQ2xNLHFCQUFxQixHQUFHUyxJQUFJLENBQUNDLEdBQUcsQ0FBQ3FMLGNBQWMsRUFBRUksY0FBYyxDQUFDO0lBQ3JFLElBQU1LLG9CQUFvQixHQUFHVixhQUFhLEdBQUcsSUFBSSxDQUFDVyxxQkFBcUI7SUFDdkUsSUFBTUMscUJBQXFCLEdBQUdYLGNBQWMsR0FBRyxJQUFJLENBQUNVLHFCQUFxQjtJQUN6RSxJQUFJNVUsS0FBSyxFQUFFO01BQ1QsSUFBSSxDQUFDb04sVUFBVSxDQUFDcE4sS0FBSyxFQUFFO1FBQ3JCLGdCQUFnQixFQUFFLE1BQU07UUFDeEIsUUFBUSxFQUFFLENBQUNvVSxtQkFBbUIsR0FBR0YsY0FBYyxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQzNELFNBQVMsRUFBRSxNQUFNO1FBQ2pCLGdCQUFnQixFQUFFO01BQ3BCLENBQUMsQ0FBQztJQUNKO0lBQ0EsSUFBSWhVLFFBQVEsRUFBRTtNQUNaLElBQUksQ0FBQ2tOLFVBQVUsQ0FBQ2xOLFFBQVEsRUFBRTtRQUN4QjlFLEtBQUssRUFBRXVaLG9CQUFvQixHQUFHM0csV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJO1FBQ3BEOUQsTUFBTSxFQUFFMksscUJBQXFCLEdBQUc3RyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUk7UUFDdEQsU0FBUyxFQUFFLE1BQU07UUFDakIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixTQUFTLEVBQUU7TUFDYixDQUFDLENBQUM7SUFDSjtJQUNBLElBQUk1TixRQUFRLEVBQUU7TUFDWixJQUFJLENBQUNnTixVQUFVLENBQUNoTixRQUFRLEVBQUU7UUFDeEIsYUFBYSxFQUFFLE1BQU07UUFDckIsUUFBUSxFQUFFLENBQUNnVSxtQkFBbUIsR0FBR0YsY0FBYyxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQzNELFNBQVMsRUFBRSxNQUFNO1FBQ2pCLGdCQUFnQixFQUFFO01BQ3BCLENBQUMsQ0FBQztJQUNKO0lBQ0EsSUFBSUcsYUFBYSxLQUFLek0sb0JBQW9CLEVBQUU7TUFDMUMsSUFBSSxDQUFDd0YsVUFBVSxDQUFDOUYsS0FBSyxFQUFFO1FBQ3JCbE0sS0FBSyxFQUFFaVosYUFBYSxHQUFHO01BQ3pCLENBQUMsQ0FBQztJQUNKO0lBQ0EsSUFBSUMsY0FBYyxLQUFLeE0scUJBQXFCLEVBQUU7TUFDNUMsSUFBSSxDQUFDc0YsVUFBVSxDQUFDOUYsS0FBSyxFQUFFO1FBQ3JCNEMsTUFBTSxFQUFFb0ssY0FBYyxHQUFHO01BQzNCLENBQUMsQ0FBQztJQUNKO0lBQ0EsSUFBTVEsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBQzFILFVBQVUsQ0FBQ1UsUUFBUSxFQUFFO01BQ3hCMVMsS0FBSyxFQUFFdVosb0JBQW9CLEdBQUdHLGFBQWEsR0FBRyxJQUFJO01BQ2xENUssTUFBTSxFQUFFMksscUJBQXFCLEdBQUdDLGFBQWEsR0FBRyxJQUFJO01BQ3BEQyxlQUFlLEVBQUU7SUFDbkIsQ0FBQyxDQUFDO0lBQ0YsSUFBTUMsWUFBWSxHQUFHakgsV0FBVyxDQUFDTSxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQy9ELElBQUk0RyxDQUFDLEdBQUcvRyxZQUFZLEdBQUdGLFdBQVcsR0FBRyxDQUFDO0lBQ3RDaUgsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR0EsQ0FBQztJQUNqQixJQUFJLENBQUNDLEtBQUssQ0FBQ1Asb0JBQW9CLENBQUMsSUFBSSxDQUFDTyxLQUFLLENBQUNMLHFCQUFxQixDQUFDLElBQUksQ0FBQ0ssS0FBSyxDQUFDaEgsWUFBWSxDQUFDLElBQUksQ0FBQ2dILEtBQUssQ0FBQ2xILFdBQVcsQ0FBQyxFQUFFO01BQ2hILElBQU1tSCxpQkFBaUIsR0FBR3ZNLElBQUksQ0FBQ3dNLEdBQUcsQ0FBQ1Qsb0JBQW9CLEdBQUczRyxXQUFXLEdBQUcsQ0FBQyxHQUFHOEcsYUFBYSxFQUFFLENBQUMsQ0FBQztNQUM3RixJQUFNTyxrQkFBa0IsR0FBR3pNLElBQUksQ0FBQ3dNLEdBQUcsQ0FBQ1AscUJBQXFCLEdBQUc3RyxXQUFXLEdBQUcsQ0FBQyxHQUFHOEcsYUFBYSxFQUFFLENBQUMsQ0FBQztNQUMvRkUsWUFBWSxDQUFDMUcsWUFBWSxDQUFDLE9BQU8sRUFBRTZHLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztNQUMxREgsWUFBWSxDQUFDMUcsWUFBWSxDQUFDLFFBQVEsRUFBRStHLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztNQUM1REwsWUFBWSxDQUFDMUcsWUFBWSxDQUFDLEdBQUcsRUFBRTZHLGlCQUFpQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7TUFDL0RILFlBQVksQ0FBQzFHLFlBQVksQ0FBQyxHQUFHLEVBQUUrRyxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO01BQ2hFTCxZQUFZLENBQUMxRyxZQUFZLENBQUMsSUFBSSxFQUFFMkcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztNQUN2Q0QsWUFBWSxDQUFDMUcsWUFBWSxDQUFDLElBQUksRUFBRTJHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekM7SUFDQSxJQUFJLENBQUM1VSxhQUFhLENBQUMsSUFBSSxDQUFDd04sZ0JBQWdCLEVBQUUsSUFBSSxDQUFDO0lBQy9DLEtBQUssQ0FBQztFQUNSO0VBQ0FoTixhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUN1TCxtQ0FBbUMsRUFBRTtJQUMxQyxJQUFJLENBQUNrSixRQUFRLEVBQUU7SUFDZixJQUFJLENBQUNuSSxVQUFVLEVBQUU7RUFDbkI7RUFDTWpRLGVBQWVBLENBQUEsRUFBRztJQUFBLElBQUFxWSxPQUFBO0lBQUEsT0FBQXhZLGlCQUFBO01BQ3RCLEtBQUssQ0FBQztNQUNOLElBQUl3WSxPQUFJLENBQUNDLGlCQUFpQixFQUFFO1FBQzFCLEtBQUssQ0FBQztRQUNOO01BQ0Y7TUFDQSxJQUFJQyxhQUFhLEdBQUcsT0FBTztNQUMzQixJQUFJQyxhQUFhLFNBQVN4YyxJQUFJLEVBQUU7TUFDaEMsSUFBSXljLE9BQU8sR0FBRyxFQUFFO01BQ2hCQSxPQUFPLFlBQUFuVixNQUFBLENBQVkrVSxPQUFJLENBQUNuWCxZQUFZLENBQUN3WCxFQUFFLE9BQUk7TUFDM0NELE9BQU8sa0JBQUFuVixNQUFBLENBQWtCK1UsT0FBSSxDQUFDblgsWUFBWSxDQUFDeVgsUUFBUSxPQUFJO01BQ3ZERixPQUFPLG1DQUFBblYsTUFBQSxDQUFtQ2tWLGFBQWEsT0FBSTtNQUMzRCxJQUFJSCxPQUFJLENBQUNuWCxZQUFZLENBQUN5WCxRQUFRLEtBQUssS0FBSyxJQUFJTixPQUFJLENBQUNuWCxZQUFZLENBQUN5WCxRQUFRLEtBQUssS0FBSyxFQUFFO1FBQ2hGSCxhQUFhLEdBQUcsS0FBSztNQUN2QjtNQUNBQyxPQUFPLDhCQUFBblYsTUFBQSxDQUE4QmtWLGFBQWEsT0FBSTtNQUN0REMsT0FBTyxtQkFBQW5WLE1BQUEsQ0FBbUJpQixTQUFTLENBQUNDLFNBQVMsT0FBSTtNQUNqRCxJQUFJZ1UsYUFBYSxFQUFFO1FBQ2pCLEtBQUssQ0FBQztRQUNORCxhQUFhLElBQUksVUFBVTtRQUMzQixJQUFJcFosTUFBTSxDQUFDQyxRQUFRLENBQUN3WixRQUFRLEtBQUssMEJBQTBCLEVBQUU7VUFDM0QsS0FBSyxDQUFDO1FBQ1I7TUFDRixDQUFDLE1BQU07UUFDTCxLQUFLLENBQUM7UUFDTkwsYUFBYSxJQUFJLEtBQUs7UUFDdEIsSUFBSXBaLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDd1osUUFBUSxLQUFLLDBCQUEwQixFQUFFO1VBQzNELEtBQUssQ0FBQztRQUNSO01BQ0Y7TUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSXBKLEdBQUcsQ0FBQzhJLGFBQWEsRUFBRUYsT0FBSSxDQUFDdFgsU0FBUyxDQUFDN0IsZUFBZSxDQUFDO01BQ2xFLElBQUl3TixHQUFHLFNBQVNvTSxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDLENBQUNGLElBQUksQ0FBQ0UsSUFBSSxJQUFJO1FBQ25FLElBQUlDLEtBQUssR0FBRyx1QkFBdUI7UUFDbkMsSUFBSUMsTUFBTSxHQUFHRixJQUFJLENBQUNHLE9BQU8sQ0FBQ0YsS0FBSyxFQUFFLDBCQUEwQixDQUFDOztRQUU1RDtRQUNBQyxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLHFCQUFxQixFQUFFLDRDQUE0QyxHQUFHLDBEQUEwRCxDQUFDO1FBQ3pKRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLDRDQUE0QyxFQUFFLGdCQUFnQixHQUFHLDRDQUE0QyxDQUFDO1FBQ3RJRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDO1FBQ3BGRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDOztRQUV4RDtRQUNBRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJNUosR0FBRyxDQUFDLFlBQVksRUFBRTRJLE9BQUksQ0FBQ3RYLFNBQVMsQ0FBQzdCLGVBQWUsQ0FBQyxDQUFDNlosSUFBSSxDQUFDO1FBQ2pHSyxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLDZDQUE2Qyw2QkFBQS9WLE1BQUEsQ0FBNEIsSUFBSW1NLEdBQUcsQ0FBQyxZQUFZLEVBQUU0SSxPQUFJLENBQUN0WCxTQUFTLENBQUM3QixlQUFlLENBQUMsQ0FBQzZaLElBQUksUUFBSTtRQUMvSkssTUFBTSxHQUFHQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQztRQUMzRUQsTUFBTSxHQUFHQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQzs7UUFFM0U7UUFDQUQsTUFBTSxHQUFHQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSwrQ0FBK0MsR0FBRyw2QkFBNkIsR0FBRyw0Q0FBNEMsR0FBRyxrQ0FBa0MsR0FBRyxrQ0FBa0MsR0FBRyxpQ0FBaUMsR0FBRywrQkFBK0IsR0FBRywyQ0FBMkMsR0FBRyxXQUFXLEdBQUcsc0NBQXNDLEdBQUcsK0JBQStCLEdBQUcsMkNBQTJDLEdBQUcsVUFBVSxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsMkNBQTJDLENBQUM7UUFDMWtCLE9BQU9ELE1BQU07TUFDZixDQUFDLENBQUM7TUFDRjFNLEdBQUcsdUNBQUFwSixNQUFBLENBRUNvSixHQUFHLHdJQUtGO01BQ0wyTCxPQUFJLENBQUMvWCxXQUFXLFNBQVNnWixJQUFJLENBQUM1TSxHQUFHLENBQUM7TUFDbEMyTCxPQUFJLENBQUMvWCxXQUFXLENBQUNpWixvQkFBb0I7UUFBQSxJQUFBQyxLQUFBLEdBQUEzWixpQkFBQSxDQUFHLFdBQU1nQixDQUFDLEVBQUk7VUFDakQsS0FBSyxDQUFDO1FBQ1IsQ0FBQztRQUFBLGlCQUFBNFksRUFBQTtVQUFBLE9BQUFELEtBQUEsQ0FBQWpVLEtBQUEsT0FBQXRELFNBQUE7UUFBQTtNQUFBO01BQ0QsTUFBTW9XLE9BQUksQ0FBQy9YLFdBQVcsQ0FBQ2laLG9CQUFvQixFQUFFO01BQzdDbEIsT0FBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJO01BQzdCLEtBQUssQ0FBQztJQUFDO0VBQ1Q7RUFDQW9CLGVBQWVBLENBQUEsRUFBRztJQUFBLElBQUFDLE9BQUE7SUFDaEIsT0FBTyxJQUFJMVYsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRTBLLE1BQU0sS0FBSztNQUN0QyxJQUFJLENBQUNnTCxVQUFVLEdBQUcsS0FBSztNQUN2QixJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFDO01BQ2xCLElBQUksQ0FBQzNVLFNBQVMsR0FBRyxLQUFLO01BQ3RCLElBQUksQ0FBQ25FLFNBQVMsQ0FBQ3JCLGdCQUFnQixHQUFHc1ksS0FBSyxDQUFDOEIsUUFBUSxDQUFDLElBQUksQ0FBQy9ZLFNBQVMsQ0FBQ3JCLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUdvYSxRQUFRLENBQUMsSUFBSSxDQUFDL1ksU0FBUyxDQUFDckIsZ0JBQWdCLENBQUM7TUFDbEksSUFBTXFhLElBQUk7UUFBQSxJQUFBQyxLQUFBLEdBQUFuYSxpQkFBQSxDQUFHLGFBQVk7VUFDdkIsSUFBSTtZQUNGLElBQUlzTyxTQUFTLEdBQUcsSUFBSTtjQUNsQi9CLFVBQVUsR0FBRyxJQUFJO2NBQ2pCc0MsU0FBUyxHQUFHLElBQUk7Y0FDaEJ1TCxTQUFTLEdBQUcsSUFBSTtjQUNoQkMsYUFBYSxHQUFHLEVBQUU7O1lBRXBCO1lBQ0EsSUFBSSxDQUFDUCxPQUFJLENBQUNyWixXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7O1lBRTlCO1lBQ0EsSUFBTSxDQUFDNlosWUFBWSxFQUFFQyxZQUFZLENBQUMsR0FBRyxDQUFDVCxPQUFJLENBQUN0UixpQkFBaUIsRUFBRXNSLE9BQUksQ0FBQ3JSLGtCQUFrQixDQUFDO1lBQ3RGLElBQU07Y0FDSjhCO1lBQ0YsQ0FBQyxHQUFHdE8sUUFBUSxDQUFDK0csY0FBYyxFQUFFO1lBQzdCLElBQUlzWCxZQUFZLEtBQUssQ0FBQyxJQUFJQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzlDLElBQUlULE9BQUksQ0FBQ0MsVUFBVSxFQUFFO2NBQ25CLE1BQU1ELE9BQUksQ0FBQ2xVLE9BQU8sQ0FBQyxHQUFHLENBQUM7Y0FDdkI7WUFDRjtZQUNBO1lBQ0EsSUFBSWtVLE9BQUksQ0FBQ0UsU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDRixPQUFJLENBQUN6VSxTQUFTLElBQUl5VSxPQUFJLENBQUM5UCw2QkFBNkIsQ0FBQ08sS0FBSyxDQUFDLEVBQUU7Y0FDeEYsQ0FBQ3VQLE9BQUksQ0FBQ0UsU0FBUyxFQUFFRixPQUFJLENBQUMvUCx3QkFBd0IsQ0FBQyxHQUFHK1AsT0FBSSxDQUFDelMsbUJBQW1CLENBQUN5UyxPQUFJLENBQUNyWCxTQUFTLENBQUM7WUFDNUY7WUFDQSxJQUFJLENBQUNxWCxPQUFJLENBQUNFLFNBQVMsSUFBSUYsT0FBSSxDQUFDelUsU0FBUyxFQUFFO2NBQ3JDLE1BQU15VSxPQUFJLENBQUNsVSxPQUFPLENBQUMsR0FBRyxDQUFDO2NBQ3ZCO1lBQ0Y7WUFDQTs7WUFFQSxJQUFJa1UsT0FBSSxDQUFDcEosV0FBVyxHQUFHb0osT0FBSSxDQUFDdmMsVUFBVSxDQUFDUCxXQUFXLEVBQUU7Y0FDbEQ7O2NBRUE7Y0FDQSxJQUFNLENBQUN3ZCxjQUFjLEVBQUVuTyxPQUFPLENBQUMsU0FBU3lOLE9BQUksQ0FBQ3JNLG1CQUFtQixDQUFDcU0sT0FBSSxDQUFDRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2NBQ25GLElBQUksQ0FBQ1EsY0FBYyxFQUFFO2dCQUNuQixJQUFJVixPQUFJLENBQUNoSixnQkFBZ0IsS0FBS2dKLE9BQUksQ0FBQ3JjLFdBQVcsQ0FBQ2QsS0FBSyxFQUFFO2tCQUNwRG1kLE9BQUksQ0FBQ3hXLGFBQWEsQ0FBQ3dXLE9BQUksQ0FBQ3JjLFdBQVcsQ0FBQ1osa0JBQWtCLENBQUM7Z0JBQ3pEO2dCQUNBO2NBQ0Y7O2NBRUE7Y0FDQWlkLE9BQUksQ0FBQ3hXLGFBQWEsQ0FBQ3dXLE9BQUksQ0FBQ3JjLFdBQVcsQ0FBQ2IsbUJBQW1CLENBQUM7O2NBRXhEO2NBQ0EsSUFBSWtkLE9BQUksQ0FBQ3BYLFNBQVMsSUFBSW9YLE9BQUksQ0FBQzVZLFNBQVMsQ0FBQ3JCLGdCQUFnQixHQUFHLENBQUMsRUFBRTtnQkFDekRpYSxPQUFJLENBQUNXLDBCQUEwQixDQUFDcE8sT0FBTyxDQUFDO2NBQzFDO2NBQ0EsQ0FBQ2lDLFNBQVMsRUFBRS9CLFVBQVUsRUFBRXNDLFNBQVMsQ0FBQyxTQUFTaUwsT0FBSSxDQUFDM0wsa0JBQWtCLENBQUMyTCxPQUFJLENBQUNFLFNBQVMsRUFBRUYsT0FBSSxDQUFDclgsU0FBUyxFQUFFcVgsT0FBSSxDQUFDcFgsU0FBUyxDQUFDO1lBQ3BIO1lBQ0EsSUFBSW9YLE9BQUksQ0FBQ3BKLFdBQVcsSUFBSW9KLE9BQUksQ0FBQ3ZjLFVBQVUsQ0FBQ1AsV0FBVyxFQUFFO2NBQ25EOztjQUVBO2NBQ0EsSUFBSXNSLFNBQVMsS0FBSyxLQUFLLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSXpOLEtBQUssa0JBQUE0QyxNQUFBLENBQWtCcVcsT0FBSSxDQUFDcEosV0FBVyw4QkFBMkI7Y0FDOUU7O2NBRUE7Y0FDQW9KLE9BQUksQ0FBQ3pKLFVBQVUsQ0FBQzlGLEtBQUssRUFBRTtnQkFDckJrSCxPQUFPLEVBQUU7Y0FDWCxDQUFDLENBQUMsQ0FBQyxDQUFDOztjQUVKLElBQUlxSSxPQUFJLENBQUNwWCxTQUFTLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQztnQkFDTjtnQkFDQTBYLFNBQVMsU0FBU04sT0FBSSxDQUFDaEwsWUFBWSxDQUFDZ0wsT0FBSSxDQUFDclgsU0FBUyxFQUFFcVgsT0FBSSxDQUFDRSxTQUFTLENBQUM7Z0JBQ25FLElBQUlJLFNBQVMsS0FBSyxJQUFJLEVBQUU7a0JBQ3RCLE1BQU0sSUFBSXZaLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQztnQkFDbkU7Z0JBQ0F3WixhQUFhLENBQUNLLElBQUksQ0FBQ04sU0FBUyxDQUFDO2dCQUM3QixJQUFJTixPQUFJLENBQUM1WSxTQUFTLENBQUNyQixnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7a0JBQ3ZDLElBQUk4YSxjQUFjLEdBQUcsSUFBSUMsSUFBSSxFQUFFO2tCQUMvQixLQUFLLElBQU1DLElBQUksSUFBSWYsT0FBSSxDQUFDZ0IsbUJBQW1CLEVBQUU7b0JBQzNDLElBQUlWLFNBQVMsQ0FBQ3pYLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtzQkFDbENtWCxPQUFJLENBQUNpQixlQUFlLEVBQUU7c0JBQ3RCLEtBQUssQ0FBQztzQkFDTlgsU0FBUyxTQUFTTixPQUFJLENBQUM3SyxpQkFBaUIsQ0FBQzZLLE9BQUksQ0FBQ3JYLFNBQVMsRUFBRXFYLE9BQUksQ0FBQ0UsU0FBUyxFQUFFYSxJQUFJLENBQUM7c0JBQzlFLElBQUlULFNBQVMsS0FBSyxJQUFJLEVBQUU7d0JBQ3RCLE1BQU0sSUFBSXZaLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQztzQkFDbkU7c0JBQ0F3WixhQUFhLENBQUNLLElBQUksQ0FBQ04sU0FBUyxDQUFDO29CQUMvQixDQUFDLE1BQU07c0JBQ0w7b0JBQ0Y7a0JBQ0Y7a0JBQ0EsSUFBTVksZ0JBQWdCLEdBQUcsSUFBSUosSUFBSSxFQUFFLEdBQUdELGNBQWM7a0JBQ3BELEtBQUssQ0FBQztnQkFDUixDQUFDLE1BQU07a0JBQ0wsS0FBSyxDQUFDO2dCQUNSO2NBQ0Y7Y0FDQSxLQUFLLENBQUM7Y0FDTmIsT0FBSSxDQUFDbUIsa0JBQWtCLENBQUM7Z0JBQ3RCQyxRQUFRLEVBQUVwQixPQUFJLENBQUNyWCxTQUFTO2dCQUN4QjBZLFFBQVEsRUFBRWpmLE1BQU0sQ0FBQ2tmLGNBQWMsQ0FBQ3RCLE9BQUksQ0FBQ3JYLFNBQVMsRUFBRXFYLE9BQUksQ0FBQ3BYLFNBQVMsRUFBRTRMLFNBQVMsRUFBRThMLFNBQVMsRUFBRU4sT0FBSSxDQUFDaUIsZUFBZSxFQUFFVixhQUFhLENBQUM7Z0JBQzFIZ0IsZ0JBQWdCLEVBQUU5TyxVQUFVO2dCQUM1QitPLGlCQUFpQixFQUFFek0sU0FBUztnQkFDNUIwTSxRQUFRLEVBQUV6QixPQUFJLENBQUNwWDtjQUNqQixDQUFDLENBQUM7Y0FDRm9YLE9BQUksQ0FBQ2hXLGFBQWEsRUFBRTtjQUNwQmdXLE9BQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUk7Y0FDdEIxVixPQUFPLEVBQUU7WUFDWDtVQUNGLENBQUMsQ0FBQyxPQUFPVixDQUFDLEVBQUU7WUFDVixJQUFJdU0sWUFBWSxHQUFHLHNCQUFzQjtZQUN6QyxJQUFJdk0sQ0FBQyxDQUFDc0ssT0FBTyxFQUFFO2NBQ2JpQyxZQUFZLElBQUksSUFBSSxHQUFHdk0sQ0FBQyxDQUFDc0ssT0FBTztZQUNsQztZQUNBLEtBQUssQ0FBQztZQUNOLElBQUl0SyxDQUFDLENBQUN1SyxRQUFRLEVBQUUsQ0FBQzNHLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtjQUNuQyxNQUFNdVMsT0FBSSxDQUFDMEIsY0FBYyxFQUFFO1lBQzdCLENBQUMsTUFBTTtjQUNMMUIsT0FBSSxDQUFDM0osa0JBQWtCLENBQUMsT0FBTyxFQUFFeE0sQ0FBQyxFQUFFdU0sWUFBWSxDQUFDO2NBQ2pENEosT0FBSSxDQUFDaFcsYUFBYSxFQUFFO2NBQ3BCZ1csT0FBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSTtjQUN0QmhMLE1BQU0sRUFBRTtZQUNWO1VBQ0YsQ0FBQyxTQUFTO1lBQ1IsSUFBSSxDQUFDK0ssT0FBSSxDQUFDQyxVQUFVLEVBQUU7Y0FDcEJ4VixVQUFVLENBQUMyVixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QjtVQUNGO1FBQ0YsQ0FBQztRQUFBLGdCQTdIS0EsSUFBSUEsQ0FBQTtVQUFBLE9BQUFDLEtBQUEsQ0FBQXpVLEtBQUEsT0FBQXRELFNBQUE7UUFBQTtNQUFBLEdBNkhUO01BRURtQyxVQUFVLENBQUMyVixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUM7RUFDSjs7RUFFQU8sMEJBQTBCQSxDQUFDcE8sT0FBTyxFQUFFO0lBQ2xDLElBQUksSUFBSSxDQUFDbkwsU0FBUyxDQUFDckIsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO01BQ3pDO0lBQ0Y7SUFDQSxJQUFJLElBQUksQ0FBQ2liLG1CQUFtQixDQUFDdlksTUFBTSxLQUFLMFgsUUFBUSxDQUFDLElBQUksQ0FBQy9ZLFNBQVMsQ0FBQ3JCLGdCQUFnQixDQUFDLEVBQUU7TUFDakYsSUFBSSxDQUFDaWIsbUJBQW1CLENBQUNXLEtBQUssRUFBRTtJQUNsQztJQUNBLElBQUksQ0FBQ1gsbUJBQW1CLENBQUNKLElBQUksQ0FBQ3JPLE9BQU8sQ0FBQztJQUN0QyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ1Y7O0VBRUE0TyxrQkFBa0JBLENBQUNTLGFBQWEsRUFBRTtJQUNoQztJQUNBLElBQUlBLGFBQWEsQ0FBQ0gsUUFBUSxFQUFFO01BQzFCLElBQUksQ0FBQ2pZLGFBQWEsQ0FBQyxJQUFJLENBQUM3RixXQUFXLENBQUNSLG9CQUFvQixDQUFDO0lBQzNELENBQUMsTUFBTTtNQUNMLElBQUksQ0FBQ3FHLGFBQWEsQ0FBQyxJQUFJLENBQUM3RixXQUFXLENBQUNULFdBQVcsQ0FBQztJQUNsRDtJQUNBLElBQU1tSixNQUFNLEdBQUc7TUFDYndWLFlBQVksRUFBRTtRQUNaLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLGdCQUFnQixFQUFFO01BQ3BCLENBQUM7TUFDRHhWLE1BQU0sRUFBRSxTQUFTO01BQ2pCdVYsYUFBYSxFQUFFQTtJQUNqQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUM5WSxXQUFXLEVBQUU7TUFDcEIsSUFBSSxDQUFDQSxXQUFXLENBQUN1RCxNQUFNLENBQUM7TUFDeEIsSUFBSSxDQUFDdkQsV0FBVyxHQUFHLElBQUk7SUFDekIsQ0FBQyxNQUFNO01BQ0wsS0FBSyxDQUFDO0lBQ1I7RUFDRjtFQUNBdU4sa0JBQWtCQSxDQUFDeUwsVUFBVSxFQUFFalksQ0FBQyxFQUFFdU0sWUFBWSxFQUFFO0lBQzlDLElBQUksQ0FBQzVNLGFBQWEsQ0FBQyxJQUFJLENBQUM3RixXQUFXLENBQUNQLFVBQVUsQ0FBQztJQUMvQyxJQUFJMmUsV0FBVyxHQUFHLEVBQUU7SUFDcEIsSUFBSWxZLENBQUMsYUFBREEsQ0FBQyxlQUFEQSxDQUFDLENBQUV1SyxRQUFRLEVBQUUsRUFBRTJOLFdBQVcsSUFBSWxZLENBQUMsQ0FBQ3VLLFFBQVEsRUFBRTtJQUM5QyxJQUFJdkssQ0FBQyxhQUFEQSxDQUFDLGVBQURBLENBQUMsQ0FBRW1ZLEtBQUssRUFBRUQsV0FBVyxJQUFJbFksQ0FBQyxDQUFDbVksS0FBSztJQUNwQyxJQUFNM1YsTUFBTSxHQUFHO01BQ2J3VixZQUFZLEVBQUU7UUFDWixhQUFhLEVBQUVDLFVBQVU7UUFDekIsZ0JBQWdCLEVBQUUxTDtNQUNwQixDQUFDO01BQ0QvSixNQUFNLEVBQUUsUUFBUTtNQUNoQnVWLGFBQWEsRUFBRTtRQUNiUixRQUFRLEVBQUUsSUFBSSxDQUFDelksU0FBUztRQUN4QnNaLFlBQVksRUFBRUY7TUFDaEI7SUFDRixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUNoWixXQUFXLEVBQUU7TUFDcEIsSUFBSSxDQUFDQSxXQUFXLENBQUNzRCxNQUFNLENBQUM7TUFDeEIsSUFBSSxDQUFDdEQsV0FBVyxHQUFHLElBQUk7SUFDekIsQ0FBQyxNQUFNO01BQ0wsS0FBSyxDQUFDO0lBQ1I7RUFDRjtFQUNNYSxXQUFXQSxDQUFBLEVBQUc7SUFBQSxJQUFBc1ksT0FBQTtJQUFBLE9BQUFoYyxpQkFBQTtNQUNsQmdjLE9BQUksQ0FBQ25ZLE9BQU8sRUFBRTtNQUNkLE1BQU1tWSxPQUFJLENBQUN6TSx5QkFBeUIsRUFBRTtNQUN0QyxNQUFNeU0sT0FBSSxDQUFDbkMsZUFBZSxFQUFFO01BQzVCLEtBQUssQ0FBQztJQUFDO0VBQ1Q7RUFDTTJCLGNBQWNBLENBQUEsRUFBRztJQUFBLElBQUFTLE9BQUE7SUFBQSxPQUFBamMsaUJBQUE7TUFDckIsS0FBSyxDQUFDO01BQ05pYyxPQUFJLENBQUN4RCxpQkFBaUIsR0FBRyxLQUFLO01BQzlCd0QsT0FBSSxDQUFDMUQsUUFBUSxFQUFFO01BQ2YsTUFBTTBELE9BQUksQ0FBQ3ZZLFdBQVcsRUFBRTtJQUFDO0VBQzNCO0VBQ0E2VSxRQUFRQSxDQUFBLEVBQUc7SUFDVCxJQUFNO01BQ0ovTjtJQUNGLENBQUMsR0FBR3ZPLFFBQVEsQ0FBQytHLGNBQWMsRUFBRTtJQUM3QixJQUFJd0gsTUFBTSxFQUFFO01BQ1YsSUFBTTBSLGFBQWEsR0FBRzFSLE1BQU0sQ0FBQzBCLFVBQVUsQ0FBQyxJQUFJLEVBQUU7UUFDNUNDLGtCQUFrQixFQUFFO01BQ3RCLENBQUMsQ0FBQztNQUNGK1AsYUFBYSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTNSLE1BQU0sQ0FBQ25NLEtBQUssRUFBRW1NLE1BQU0sQ0FBQzJDLE1BQU0sQ0FBQztJQUM1RDtFQUNGO0VBQ0FpRCxVQUFVQSxDQUFBLEVBQUc7SUFDWGdNLG9CQUFvQixDQUFDLElBQUksQ0FBQ0MseUJBQXlCLENBQUM7SUFDcEQsSUFBSSxJQUFJLENBQUMxTSxRQUFRLEVBQUU7TUFDakIsSUFBSSxDQUFDQSxRQUFRLENBQUMyTSxJQUFJLElBQUksSUFBSSxDQUFDM00sUUFBUSxDQUFDMk0sSUFBSSxFQUFFO01BQzFDLElBQUlDLE1BQU0sR0FBRyxJQUFJLENBQUM1TSxRQUFRLENBQUM2TSxTQUFTLElBQUksSUFBSSxDQUFDN00sUUFBUSxDQUFDNk0sU0FBUyxFQUFFO01BQ2pFLEtBQUssQ0FBQztNQUNOLElBQUlELE1BQU0sSUFBSUEsTUFBTSxDQUFDaGEsTUFBTSxFQUFFO1FBQzNCZ2EsTUFBTSxDQUFDRSxPQUFPLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDSixJQUFJLEVBQUUsQ0FBQztNQUN2QztNQUNBLElBQUksQ0FBQzNNLFFBQVEsR0FBRyxJQUFJO0lBQ3RCO0VBQ0Y7RUFDQTtFQUNBOUwsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDaUcsdUJBQXVCLEVBQUU7SUFDOUIsSUFBSSxDQUFDSixlQUFlLEVBQUU7SUFDdEIsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtJQUN6QixJQUFJLENBQUNFLHlCQUF5QixFQUFFO0VBQ2xDO0VBQ0F3RixtQ0FBbUNBLENBQUEsRUFBRztJQUNwQyxJQUFJLElBQUksQ0FBQ0MsOEJBQThCLEVBQUU7TUFDdkNxTixZQUFZLENBQUMsSUFBSSxDQUFDck4sOEJBQThCLENBQUM7TUFDakQsSUFBSSxDQUFDQSw4QkFBOEIsR0FBRyxJQUFJO0lBQzVDO0VBQ0Y7QUFDRjtBQUNBLGVBQWVoVCxPQUFPIn0=
