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
        mask_frame: '#202023',
        // 다크그레이 (투명도는 수정불가 ff로 고정)
        clip_frame: '#ff00bf',
        // 딥퍼플 (수정불가)
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
      guideBox
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
    if (topUI && !this.__options.useTopUI) topUI.innerHTML = '';
    if (middleUI && !this.__options.useMiddleUI) middleUI.innerHTML = '';
    if (bottomUI && !this.__options.useBottomUI) bottomUI.innerHTML = '';
    if (previewUIWrap) previewUIWrap.remove();
    // preview UI를 미사용일 경우 안의 내용을 삭제
    if (previewUI && !this.__options.usePreviewUI) previewUI.innerHTML = '';
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
    var mask_frame = this.__options.frameBorderStyle.mask_frame + 'ff';
    if (!!this.__options.showClipFrame) {
      mask_frame = this.__options.frameBorderStyle.clip_frame + '55';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJzaW1kIiwidGhyZWFkcyIsImluc3RhbmNlIiwiVXNlQk9DUiIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiTk9ORSIsIk5PVF9SRUFEWSIsIlJFQURZIiwiQ0FSRF9ERVRFQ1RfU1VDQ0VTUyIsIkNBUkRfREVURUNUX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZVRvcFVJIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUkiLCJ1c2VNaWRkbGVVSVRleHRNc2ciLCJ1c2VCb3R0b21VSSIsInVzZUJvdHRvbVVJVGV4dE1zZyIsInVzZVByZXZpZXdVSSIsImZyYW1lQm9yZGVyU3R5bGUiLCJtYXNrX2ZyYW1lIiwiY2xpcF9mcmFtZSIsIndpZHRoIiwic3R5bGUiLCJyYWRpdXMiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9mYWlsZWQiLCJkZXRlY3Rfc3VjY2VzcyIsInJlY29nbml6ZWQiLCJyZWNvZ25pemVkX3dpdGhfc3NhIiwib2NyX2ZhaWxlZCIsIm9jcl9zdWNjZXNzIiwib2NyX3N1Y2Nlc3Nfd2l0aF9zc2EiLCJyZXNvdXJjZUJhc2VVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImRldmljZUxhYmVsIiwidmlkZW9UYXJnZXRJZCIsInJvdGF0aW9uRGVncmVlIiwibWlycm9yTW9kZSIsInNzYU1heFJldHJ5Q291bnQiLCJwcmVsb2FkaW5nIiwiX3RoaXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsImlzUHJlbG9hZGVkIiwiX19wcmVsb2FkaW5nU3RhdHVzIiwiX19sb2FkUmVzb3VyY2VzIiwiX19wcmVsb2FkZWQiLCJpc0luaXRpYWxpemVkIiwiX19pbml0aWFsaXplZCIsImdldFByZWxvYWRpbmdTdGF0dXMiLCJnZXRPQ1JFbmdpbmUiLCJfX09DUkVuZ2luZSIsImluaXQiLCJzZXR0aW5ncyIsImxpY2Vuc2VLZXkiLCJFcnJvciIsIl9fbGljZW5zZSIsIm1lcmdlZE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJfX29wdGlvbnMiLCJzZXRPcHRpb24iLCJfX3dpbmRvd0V2ZW50QmluZCIsIl9fZGV2aWNlSW5mbyIsImdldE9zVmVyc2lvbiIsImdldE9wdGlvbiIsImdldE9jclR5cGUiLCJ0eXBlIiwiX19vY3JUeXBlU3RyaW5nIiwiZ2V0IiwiZ2V0VUlPcmllbnRhdGlvbiIsIl9fdWlPcmllbnRhdGlvbiIsImdldFZpZGVvT3JpZW50YXRpb24iLCJfX3ZpZGVvT3JpZW50YXRpb24iLCJzdGFydE9DUiIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIl9hcmd1bWVudHMiLCJhcmd1bWVudHMiLCJfdGhpczIiLCJvbkluUHJvZ3Jlc3NDaGFuZ2UiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfX29jclR5cGUiLCJfX3NzYU1vZGUiLCJpbmRleE9mIiwiX19vblN1Y2Nlc3MiLCJfX29uRmFpbHVyZSIsIl9fb25JblByb2dyZXNzQ2hhbmdlIiwiX190b3BVSSIsImdldE9DUkVsZW1lbnRzIiwidG9wVUkiLCJfX21pZGRsZVVJIiwibWlkZGxlVUkiLCJfX2JvdHRvbVVJIiwiYm90dG9tVUkiLCJfX2NoYW5nZVN0YWdlIiwicHJlbG9hZGluZ1N0YXR1cyIsIl9fd2FpdFByZWxvYWRlZCIsImNvbmNhdCIsIl9fc3RhcnRTY2FuIiwiZSIsInN0b3BPQ1IiLCJjbGVhbnVwIiwiX19jbG9zZUNhbWVyYSIsInJlc3RhcnRPQ1IiLCJvY3JUeXBlIiwiX3RoaXMzIiwiX3RoaXM0Iiwid2FpdGluZ1JldHJ5Q291bnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoZWNrIiwic2V0VGltZW91dCIsIl90aGlzXyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsInNraXBUb3VjaEFjdGlvbmZvclpvb20iLCJldiIsInRvdWNoZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwib25iZWZvcmV1bmxvYWQiLCJfX3BhZ2VFbmQiLCJoYW5kbGVSZXNpemUiLCJfcmVmMiIsIl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplIiwiX190aHJvdHRsaW5nUmVzaXplVGltZXIiLCJhcHBseSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5IiwiX19zbGVlcCIsIm1zIiwiX19ibG9iVG9CYXNlNjQiLCJibG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJfX2dldFN0cmluZ09uV2FzbUhlYXAiLCJsZW5ndGhCeXRlcyIsImxlbmd0aEJ5dGVzVVRGOCIsIl9fc3RyaW5nT25XYXNtSGVhcCIsIl9tYWxsb2MiLCJzdHJpbmdUb1VURjgiLCJfX3NldFZpZGVvUmVzb2x1dGlvbiIsInZpZGVvRWxlbWVudCIsImlzU3VwcG9ydGVkUmVzb2x1dGlvbiIsInJlc29sdXRpb25UZXh0IiwiX19jYW1TZXRDb21wbGV0ZSIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsInNyY09iamVjdCIsIl9fdmlkZW9XaWR0aCIsIl9fdmlkZW9IZWlnaHQiLCJfX2dldFNjYW5uZXJBZGRyZXNzIiwiX19vY3JUeXBlTGlzdCIsImluY2x1ZGVzIiwiYWRkcmVzcyIsImRlc3Ryb3lDYWxsYmFjayIsInN0cmluZ09uV2FzbUhlYXAiLCJnZXRJRENhcmRTY2FubmVyIiwiZGVzdHJveUlEQ2FyZFNjYW5uZXIiLCJnZXRQYXNzcG9ydFNjYW5uZXIiLCJkZXN0cm95UGFzc3BvcnRTY2FubmVyIiwiZ2V0QWxpZW5TY2FubmVyIiwiZGVzdHJveUFsaWVuU2Nhbm5lciIsImdldENyZWRpdFNjYW5uZXIiLCJkZXN0cm95Q3JlZGl0U2Nhbm5lciIsIl9mcmVlIiwiX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9fcmV0cnlDb3VudEdldEFkZHJlc3MiLCJfX2dldEJ1ZmZlciIsIl9fQnVmZmVyIiwiX19yZXNvbHV0aW9uV2lkdGgiLCJfX3Jlc29sdXRpb25IZWlnaHQiLCJfX3Jlc3VsdEJ1ZmZlciIsIl9fZ2V0SW1hZ2VCYXNlNjQiLCJtYXNrTW9kZSIsImNyb3BNb2RlIiwiX3RoaXM1IiwiZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlIiwianBnU2l6ZSIsImdldEVuY29kZWRKcGdTaXplIiwianBnUG9pbnRlciIsImdldEVuY29kZWRKcGdCdWZmZXIiLCJyZXN1bHRWaWV3IiwiVWludDhBcnJheSIsIkhFQVA4IiwiYnVmZmVyIiwiQmxvYiIsImRlc3Ryb3lFbmNvZGVkSnBnIiwiX19kZXN0cm95QnVmZmVyIiwiX19kZXN0cm95UHJldkltYWdlIiwiX19QcmV2SW1hZ2UiLCJfX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwIiwiX19kZXN0cm95U2Nhbm5lckFkZHJlc3MiLCJfX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2siLCJfX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSIsIl9fZ2V0Um90YXRpb25EZWdyZWUiLCJfX2dldE1pcnJvck1vZGUiLCJfX2Nyb3BJbWFnZUZyb21WaWRlbyIsIl90aGlzNiIsImNhbGNSZXNvbHV0aW9uX3ciLCJjYWxjUmVzb2x1dGlvbl9oIiwidmlkZW8iLCJjYW52YXMiLCJyb3RhdGlvbkNhbnZhcyIsImNhbGNDYW52YXMiLCJjYWxjVmlkZW9XaWR0aCIsImNhbGNWaWRlb0hlaWdodCIsImNhbGNWaWRlb0NsaWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYWxjVmlkZW9DbGllbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoIiwiX19jcm9wSW1hZ2VTaXplV2lkdGgiLCJjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCIsIl9fY3JvcEltYWdlU2l6ZUhlaWdodCIsImNhbGNWaWRlb09yaWVudGF0aW9uIiwiX19pc1JvdGF0ZWQ5MG9yMjcwIiwiY2FsY01heFNXaWR0aCIsImNhbGNNYXhTSGVpZ2h0Iiwic3giLCJzeSIsInJhdGlvIiwic1dpZHRoIiwiTWF0aCIsIm1pbiIsInJvdW5kIiwic0hlaWdodCIsImNhbGNDb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpbGxSZWFkRnJlcXVlbnRseSIsImRyYXdJbWFnZSIsImltZ0RhdGEiLCJnZXRJbWFnZURhdGEiLCJpbWdEYXRhVXJsIiwidG9EYXRhVVJMIiwiX19yb3RhdGUiLCJkZWdyZWUiLCJpbWciLCJJbWFnZSIsInNyYyIsInRlbXBDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZW1wQ29udGV4dCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiUEkiLCJuZXdJbWFnZURhdGEiLCJyZXN0b3JlIiwiX19pc0NhcmRib3hEZXRlY3RlZCIsIl9hcmd1bWVudHMyIiwiX3RoaXM3IiwiYm94VHlwZSIsInJldHJ5SW1nIiwic2V0IiwiZGF0YSIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfX3N0YXJ0UmVjb2duaXRpb24iLCJzc2FNb2RlIiwiX3RoaXM4Iiwib2NyUmVzdWx0IiwicmVzdWx0QnVmZmVyIiwic2NhbklEQ2FyZCIsInNjYW5QYXNzcG9ydCIsInNjYW5BbGllbiIsInNjYW5DcmVkaXQiLCJvcmlnaW5JbWFnZSIsIm1hc2tJbWFnZSIsIl9fc3RhcnRUcnV0aCIsInJlamVjdCIsInNjYW5UcnV0aCIsIl9fc3RhcnRUcnV0aFJldHJ5IiwiX3RoaXM5IiwiX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX3RoaXMxMCIsIl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiIsIl90aGlzMTEiLCJpc1Bhc3Nwb3J0IiwiX19zZXR1cFZpZGVvIiwiX19zdHJlYW0iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwbGF5IiwiX19hZGp1c3RTdHlsZSIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwibmFtZSIsImVycm9yTWVzc2FnZSIsIl9fb25GYWlsdXJlUHJvY2VzcyIsInN0b3BTdHJlYW0iLCJfX3NldFN0eWxlIiwiZWwiLCJhc3NpZ24iLCJfX2NoYW5nZU9DUlN0YXR1cyIsInZhbCIsIl9fb2NyU3RhdHVzIiwiZm9yY2VVcGRhdGUiLCJyZWNvZ25pemVkSW1hZ2UiLCJfX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAiLCJfX2luUHJvZ3Jlc3NTdGVwIiwiZ3VpZGVCb3giLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJjYWxsIiwiZGlzcGxheSIsIl9fdXBkYXRlUHJldmlld1VJIiwiX19oaWRlUHJldmlld1VJIiwicHJldmlld1VJIiwicHJldmlld0ltYWdlIiwiaW1nU3R5bGUiLCJfX2dldElucHV0RGV2aWNlcyIsImtpbmQiLCJsYWJlbCIsIl90aGlzMTIiLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsInZpZGVvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImdldENhcGFiaWxpdGllcyIsIl9jYXAkZmFjaW5nTW9kZSIsImNhcCIsImZhY2luZ01vZGUiLCJfX2ZhY2luZ01vZGVDb25zdHJhaW50IiwiY2hlY2tVSU9yaWVudGF0aW9uIiwiY3VycmVudCIsIm9jciIsImlzQ2hhbmdlZCIsIl9fcHJldlVpT3JpZW50YXRpb24iLCJfX3NldHVwRG9tRWxlbWVudHMiLCJ2aWRlb1dyYXAiLCJndWlkZUJveFdyYXAiLCJtYXNrQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiY3VzdG9tVUlXcmFwIiwicHJldmlld1VJV3JhcCIsInJlbW92ZSIsImlubmVySFRNTCIsIm9jclN0eWxlIiwid3JhcFN0eWxlIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJzZXRBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJfb2JqZWN0U3ByZWFkIiwiY2FudmFzU3R5bGUiLCJsZWZ0IiwidG9wIiwiYm9yZGVyIiwicmlnaHQiLCJib3R0b20iLCJjdXN0b21VSVdyYXBTdHlsZSIsInByZXZpZXdVSVdyYXBTdHlsZSIsIl9fb2NyIiwiX19jYW52YXMiLCJfX3JvdGF0aW9uQ2FudmFzIiwiX192aWRlbyIsIl9fdmlkZW9XcmFwIiwiX19ndWlkZUJveCIsIl9fZ3VpZGVCb3hXcmFwIiwiX19tYXNrQm94V3JhcCIsIl9fcHJldmVudFRvRnJlZXplVmlkZW8iLCJfX2N1c3RvbVVJV3JhcCIsIl9fcHJldmlld1VJV3JhcCIsIl9fcHJldmlld1VJIiwiX19wcmV2aWV3SW1hZ2UiLCJfdGhpczEzIiwiZGV2aWNlSWRMaXN0IiwibWFwIiwiZGV2aWNlSWQiLCJjb25zdHJhaW50V2lkdGgiLCJjb25zdHJhaW50SGVpZ2h0IiwiaWRlYWwiLCJjb25zdHJhaW50cyIsImF1ZGlvIiwiem9vbSIsImZvY3VzTW9kZSIsIndoaXRlQmFsYW5jZU1vZGUiLCJzdHJlYW0iLCJnZXRVc2VyTWVkaWEiLCJiYXNlV2lkdGgiLCJiYXNlSGVpZ2h0Iiwic2Nhbm5lckZyYW1lUmF0aW8iLCJndWlkZUJveFdpZHRoIiwiZ3VpZGVCb3hIZWlnaHQiLCJjYWxjT2NyQ2xpZW50V2lkdGgiLCJjYWxjT2NyQ2xpZW50SGVpZ2h0IiwibmV3VmlkZW9XaWR0aCIsIm5ld1ZpZGVvSGVpZ2h0IiwiZ3VpZGVCb3hSYXRpb0J5V2lkdGgiLCJfX2d1aWRlQm94UmF0aW9CeVdpZHRoIiwidmlkZW9SYXRpb0J5SGVpZ2h0IiwiX192aWRlb1JhdGlvQnlIZWlnaHQiLCJyZWR1Y2VkR3VpZGVCb3hXaWR0aCIsIl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbyIsInJlZHVjZWRHdWlkZUJveEhlaWdodCIsInZpZGVvSW5uZXJHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXNrQm94SW5uZXIiLCJxdWVyeVNlbGVjdG9yIiwiciIsImlzTmFOIiwibWFza0JveElubmVyV2lkdGgiLCJtYXgiLCJtYXNrQm94SW5uZXJIZWlnaHQiLCJzdG9wU2NhbiIsIl90aGlzMTQiLCJfX3Jlc291cmNlc0xvYWRlZCIsInNka1N1cHBvcnRFbnYiLCJpc1N1cHBvcnRTaW1kIiwiZW52SW5mbyIsIm9zIiwib3NTaW1wbGUiLCJob3N0bmFtZSIsInVybCIsImZldGNoIiwiaHJlZiIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwicmVnZXgiLCJzb3VyY2UiLCJyZXBsYWNlIiwiZXZhbCIsIm9uUnVudGltZUluaXRpYWxpemVkIiwiX3JlZjUiLCJfeCIsIl9fc3RhcnRTY2FuSW1wbCIsIl90aGlzMTUiLCJfX2RldGVjdGVkIiwiX19hZGRyZXNzIiwicGFyc2VJbnQiLCJzY2FuIiwiX3JlZjYiLCJzc2FSZXN1bHQiLCJzc2FSZXN1bHRMaXN0IiwicmVzb2x1dGlvbl93IiwicmVzb2x1dGlvbl9oIiwiaXNEZXRlY3RlZENhcmQiLCJfX2VucXVldWVEZXRlY3RlZENhcmRRdWV1ZSIsInB1c2giLCJyZXRyeVN0YXJ0RGF0ZSIsIkRhdGUiLCJpdGVtIiwiX19kZXRlY3RlZENhcmRRdWV1ZSIsIl9fc3NhUmV0cnlDb3VudCIsInJldHJ5V29ya2luZ1RpbWUiLCJfX29uU3VjY2Vzc1Byb2Nlc3MiLCJvY3JfdHlwZSIsIm9jcl9kYXRhIiwicGFyc2VPY3JSZXN1bHQiLCJvY3Jfb3JpZ2luX2ltYWdlIiwib2NyX21hc2tpbmdfaW1hZ2UiLCJzc2FfbW9kZSIsIl9fcmVjb3ZlcnlTY2FuIiwic2hpZnQiLCJyZXZpZXdfcmVzdWx0IiwiYXBpX3Jlc3BvbnNlIiwicmVzdWx0Q29kZSIsImVycm9yRGV0YWlsIiwic3RhY2siLCJlcnJvcl9kZXRhaWwiLCJfdGhpczE2IiwiX3RoaXMxNyIsImNhbnZhc0NvbnRleHQiLCJjbGVhclJlY3QiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQiLCJzdG9wIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZXMiOlsib2NyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiBnbG9iYWwtbW9kdWxlICovXG5pbXBvcnQgZGV0ZWN0b3IgZnJvbSAnLi9oZWxwZXJzL2RldGVjdG9yLmpzJztcbmltcG9ydCBwYXJzZXIgZnJvbSAnLi9oZWxwZXJzL3BhcnNlci5qcyc7XG5pbXBvcnQgeyBzaW1kLCB0aHJlYWRzIH0gZnJvbSAnLi9oZWxwZXJzL3dhc20tZmVhdHVyZS1kZXRlY3QuanMnO1xubGV0IGluc3RhbmNlO1xuY2xhc3MgVXNlQk9DUiB7XG4gIElOX1BST0dSRVNTID0ge1xuICAgIE5PTkU6ICdub25lJyxcbiAgICBOT1RfUkVBRFk6ICdub3RfcmVhZHknLFxuICAgIFJFQURZOiAncmVhZHknLFxuICAgIENBUkRfREVURUNUX1NVQ0NFU1M6ICdkZXRlY3Rfc3VjY2VzcycsXG4gICAgQ0FSRF9ERVRFQ1RfRkFJTEVEOiAnZGV0ZWN0X2ZhaWxlZCcsXG4gICAgT0NSX1JFQ09HTklaRUQ6ICdyZWNvZ25pemVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQTogJ3JlY29nbml6ZWRfd2l0aF9zc2EnLFxuICAgIE9DUl9TVUNDRVNTOiAnb2NyX3N1Y2Nlc3MnLFxuICAgIE9DUl9TVUNDRVNTX1dJVEhfU1NBOiAnb2NyX3N1Y2Nlc3Nfd2l0aF9zc2EnLFxuICAgIE9DUl9GQUlMRUQ6ICdvY3JfZmFpbGVkJ1xuICB9O1xuICBPQ1JfU1RBVFVTID0ge1xuICAgIE5PVF9SRUFEWTogLTEsXG4gICAgUkVBRFk6IDAsXG4gICAgT0NSX1NVQ0NFU1M6IDEsXG4gICAgRE9ORTogMlxuICB9O1xuICBQUkVMT0FESU5HX1NUQVRVUyA9IHtcbiAgICBOT1RfU1RBUlRFRDogLTEsXG4gICAgU1RBUlRFRDogMCxcbiAgICBET05FOiAxXG4gIH07XG5cbiAgLyoqIHB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBfX09DUkVuZ2luZSA9IG51bGw7XG4gIF9faW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgX19wcmVsb2FkZWQgPSBmYWxzZTtcbiAgX19wcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRDtcbiAgX19saWNlbnNlO1xuICBfX29jclR5cGUgPSBudWxsO1xuICBfX3NzYU1vZGUgPSBmYWxzZTtcbiAgX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuTk9UX1JFQURZO1xuICBfX3NzYVJldHJ5Q291bnQgPSAwO1xuICBfX2RldGVjdGVkQ2FyZFF1ZXVlID0gW107XG4gIF9fb25TdWNjZXNzID0gbnVsbDtcbiAgX19vbkZhaWx1cmUgPSBudWxsO1xuICBfX29uSW5Qcm9ncmVzc0NoYW5nZSA9IG51bGw7XG4gIF9fb2NyVHlwZUxpc3QgPSBbJ2lkY2FyZCcsICdkcml2ZXInLCAncGFzc3BvcnQnLCAnZm9yZWlnbi1wYXNzcG9ydCcsICdhbGllbicsICdjcmVkaXQnLCAnaWRjYXJkLXNzYScsICdkcml2ZXItc3NhJywgJ3Bhc3Nwb3J0LXNzYScsICdmb3JlaWduLXBhc3Nwb3J0LXNzYScsICdhbGllbi1zc2EnLCAnY3JlZGl0LXNzYSddO1xuICBfX29jclR5cGVTdHJpbmcgPSBuZXcgTWFwKFtbXCIxXCIsIFwiaWRjYXJkXCJdLCBbXCIyXCIsIFwiZHJpdmVyXCJdLCBbXCIzXCIsIFwicGFzc3BvcnRcIl0sIFtcIjRcIiwgXCJmb3JlaWduLXBhc3Nwb3J0XCJdLCBbXCI1XCIsIFwiYWxpZW5cIl0sIFtcIjUtMVwiLCBcImFsaWVuXCJdLCBbXCI1LTJcIiwgXCJhbGllblwiXSwgW1wiNS0zXCIsIFwiYWxpZW5cIl1dKTtcbiAgX19wYWdlRW5kID0gZmFsc2U7XG4gIF9fb2NyO1xuICBfX2NhbnZhcztcbiAgX19yb3RhdGlvbkNhbnZhcztcbiAgX192aWRlbztcbiAgX192aWRlb1dyYXA7XG4gIF9fZ3VpZGVCb3g7XG4gIF9fZ3VpZGVCb3hXcmFwO1xuICBfX21hc2tCb3hXcmFwO1xuICBfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICBfX2N1c3RvbVVJV3JhcDtcbiAgX190b3BVSTtcbiAgX19taWRkbGVVSTtcbiAgX19ib3R0b21VSTtcbiAgX19wcmV2aWV3VUlXcmFwO1xuICBfX3ByZXZpZXdVSTtcbiAgX19wcmV2aWV3SW1hZ2U7XG4gIF9fYWRkcmVzcyA9IDA7XG4gIF9fZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgX19CdWZmZXIgPSBudWxsO1xuICBfX3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gIF9fUHJldkltYWdlID0gbnVsbDtcbiAgX19zdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgX19jYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICBfX3Jlc29sdXRpb25XaWR0aCA9IDA7XG4gIF9fcmVzb2x1dGlvbkhlaWdodCA9IDA7XG4gIF9fdmlkZW9XaWR0aCA9IDA7XG4gIF9fdmlkZW9IZWlnaHQgPSAwO1xuICBfX3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICBfX2ludGVydmFsVGltZXI7XG4gIF9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjtcbiAgX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZDtcbiAgX19zdHJlYW07XG4gIF9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gIF9fZmFjaW5nTW9kZUNvbnN0cmFpbnQgPSAnZW52aXJvbm1lbnQnO1xuICBfX3VpT3JpZW50YXRpb24gPSAnJztcbiAgX19wcmV2VWlPcmllbnRhdGlvbiA9ICcnO1xuICBfX3ZpZGVvT3JpZW50YXRpb24gPSAnJztcbiAgX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICBfX3Rocm90dGxpbmdSZXNpemVEZWxheSA9IDUwMDtcbiAgX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9IDMwMDsgLy8g7J6E7IucXG4gIF9fcmV0cnlDb3VudEdldEFkZHJlc3MgPSAwOyAvLyDsnoTsi5xcbiAgX19kZXZpY2VJbmZvO1xuICBfX2lzUm90YXRlZDkwb3IyNzAgPSBmYWxzZTtcbiAgX19pblByb2dyZXNzU3RlcCA9IHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZO1xuICBfX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PTkU7XG4gIF9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gIF9fZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSAxLjA7IC8vIOyImOygleu2iOqwgFxuICBfX3ZpZGVvUmF0aW9CeUhlaWdodCA9IDAuOTsgLy8g7IiY7KCV67aI6rCAXG4gIF9fZ3VpZGVCb3hSZWR1Y2VSYXRpbyA9IDAuODsgLy8g7IiY7KCV67aI6rCAXG4gIF9fY3JvcEltYWdlU2l6ZVdpZHRoID0gMDtcbiAgX19jcm9wSW1hZ2VTaXplSGVpZ2h0ID0gMDtcblxuICAvKiogRGVmYXVsdCBvcHRpb25zICovXG4gIF9fb3B0aW9ucyA9IG5ldyBPYmplY3Qoe1xuICAgIHNob3dDbGlwRnJhbWU6IGZhbHNlLFxuICAgIHNob3dDYW52YXNQcmV2aWV3OiBmYWxzZSxcbiAgICB1c2VUb3BVSTogdHJ1ZSxcbiAgICB1c2VUb3BVSVRleHRNc2c6IGZhbHNlLFxuICAgIHVzZU1pZGRsZVVJOiB0cnVlLFxuICAgIHVzZU1pZGRsZVVJVGV4dE1zZzogdHJ1ZSxcbiAgICB1c2VCb3R0b21VSTogdHJ1ZSxcbiAgICB1c2VCb3R0b21VSVRleHRNc2c6IGZhbHNlLFxuICAgIHVzZVByZXZpZXdVSTogdHJ1ZSxcbiAgICBmcmFtZUJvcmRlclN0eWxlOiB7XG4gICAgICBtYXNrX2ZyYW1lOiAnIzIwMjAyMycsXG4gICAgICAvLyDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLFxuICAgICAgLy8g65Sl7Y287ZSMICjsiJjsoJXrtojqsIApXG4gICAgICB3aWR0aDogNSxcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIG5vdF9yZWFkeTogJyMwMDAwMDAnLFxuICAgICAgLy8g6rKA7KCVXG4gICAgICByZWFkeTogJyNiOGI4YjgnLFxuICAgICAgLy8g7ZqM7IOJXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICAvLyDrs7TrnbxcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzVlOGZmZicsXG4gICAgICAvLyDtlZjriphcbiAgICAgIHJlY29nbml6ZWQ6ICcjMDAzYWMyJyxcbiAgICAgIC8vIO2MjOuekVxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMwMDNhYzInLFxuICAgICAgLy8g7YyM656RXG4gICAgICBvY3JfZmFpbGVkOiAnI0ZBMTEzRCcsXG4gICAgICAvLyDruajqsJVcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzE0YjAwZScsXG4gICAgICAvLyDstIjroZ1cbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzE0YjAwZScgLy8g7LSI66GdXG4gICAgfSxcblxuICAgIHJlc291cmNlQmFzZVVybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICBkZXZpY2VMYWJlbDogJycsXG4gICAgdmlkZW9UYXJnZXRJZDogJycsXG4gICAgcm90YXRpb25EZWdyZWU6IDAsXG4gICAgbWlycm9yTW9kZTogZmFsc2UsXG4gICAgc3NhTWF4UmV0cnlDb3VudDogMFxuICB9KTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBhc3luYyBwcmVsb2FkaW5nKCkge1xuICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLlNUQVJURUQ7XG4gICAgICBhd2FpdCB0aGlzLl9fbG9hZFJlc291cmNlcygpO1xuICAgICAgdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkU7XG4gICAgICB0aGlzLl9fcHJlbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2luaXRpYWxpemVkO1xuICB9XG4gIGlzUHJlbG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9fcHJlbG9hZGVkO1xuICB9XG4gIGdldFByZWxvYWRpbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzO1xuICB9XG4gIGdldE9DUkVuZ2luZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZTtcbiAgfVxuICBpbml0KHNldHRpbmdzKSB7XG4gICAgaWYgKCEhIXNldHRpbmdzLmxpY2Vuc2VLZXkpIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBrZXkgaXMgZW1wdHknKTtcbiAgICB0aGlzLl9fbGljZW5zZSA9IHNldHRpbmdzLmxpY2Vuc2VLZXk7XG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuX19vcHRpb25zLCBzZXR0aW5ncyk7XG4gICAgdGhpcy5zZXRPcHRpb24obWVyZ2VkT3B0aW9ucyk7XG4gICAgdm9pZCAwO1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRoaXMuX193aW5kb3dFdmVudEJpbmQoKTtcbiAgICAgIHRoaXMuX19kZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBzZXRPcHRpb24oc2V0dGluZ3MpIHtcbiAgICB0aGlzLl9fb3B0aW9ucyA9IHNldHRpbmdzO1xuICB9XG4gIGdldE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX29wdGlvbnM7XG4gIH1cbiAgZ2V0T2NyVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vY3JUeXBlU3RyaW5nLmdldCh0eXBlKTtcbiAgfVxuICBnZXRVSU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdWlPcmllbnRhdGlvbjtcbiAgfVxuICBnZXRWaWRlb09yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX29jclR5cGUgPSB0eXBlO1xuICAgIHRoaXMuX19zc2FNb2RlID0gdGhpcy5fX29jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTE7XG4gICAgdGhpcy5fX29uU3VjY2VzcyA9IG9uU3VjY2VzcztcbiAgICB0aGlzLl9fb25GYWlsdXJlID0gb25GYWlsdXJlO1xuICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBvbkluUHJvZ3Jlc3NDaGFuZ2U7XG4gICAgaWYgKG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVRvcFVJKSB7XG4gICAgICAgIHRoaXMuX190b3BVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudG9wVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkpIHtcbiAgICAgICAgdGhpcy5fX21pZGRsZVVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5taWRkbGVVSTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSkge1xuICAgICAgICB0aGlzLl9fYm90dG9tVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmJvdHRvbVVJO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGluaXRpYWxpemVkIScpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpO1xuICAgICAgaWYgKCF0aGlzLmlzUHJlbG9hZGVkKCkgJiYgcHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRCkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIGF3YWl0IHRoaXMucHJlbG9hZGluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRCkge1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fd2FpdFByZWxvYWRlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORSkge1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFibm9ybWFsbHkgcHJlbG9hZGluZyBzdGF0dXMsIHByZWxvYWRlZDogJHt0aGlzLmlzUHJlbG9hZGVkKCl9IC8gcHJlbG9hZGluZ1N0YXR1czogJHt0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2NhbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zdG9wT0NSKCk7XG4gICAgfVxuICB9XG4gIHN0b3BPQ1IoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgdGhpcy5fX29uRmFpbHVyZSA9IG51bGw7XG4gIH1cbiAgYXN5bmMgcmVzdGFydE9DUihvY3JUeXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgLy8gYXdhaXQgdGhpcy5zdG9wT0NSKCk7XG4gICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgYXdhaXQgdGhpcy5zdGFydE9DUihvY3JUeXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgYXN5bmMgX193YWl0UHJlbG9hZGVkKCkge1xuICAgIGxldCB3YWl0aW5nUmV0cnlDb3VudCA9IDA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FpdGluZ1JldHJ5Q291bnQrKztcbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfTtcbiAgICAgIGNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgX193aW5kb3dFdmVudEJpbmQoKSB7XG4gICAgY29uc3QgX3RoaXNfID0gdGhpcztcbiAgICBpZiAoL2lwaG9uZXxpcG9kfGlwYWQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIGNvbnN0IHNraXBUb3VjaEFjdGlvbmZvclpvb20gPSBldiA9PiB7XG4gICAgICAgIGlmIChldi50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpc18uX19wYWdlRW5kID0gdHJ1ZTtcbiAgICAgIF90aGlzXy5jbGVhbnVwKCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLl9fb2NyVHlwZSkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUpIHtcbiAgICAgICAgX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gdHJ1ZTtcbiAgICAgICAgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgX3RoaXNfLnJlc3RhcnRPQ1IoX3RoaXNfLl9fb2NyVHlwZSwgX3RoaXNfLl9fb25TdWNjZXNzLCBfdGhpc18uX19vbkZhaWx1cmUsIF90aGlzXy5fX29uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lcikge1xuICAgICAgICBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGhhbmRsZVJlc2l6ZSwgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX3NsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG4gIF9fYmxvYlRvQmFzZTY0KGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pO1xuICB9XG4gIC8qKiDrnbzsnbTshLzsiqQg7YKk66W8IGhlYXAg7JeQIGFsbG9jYXRpb24gKi9cbiAgX19nZXRTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICghISF0aGlzLl9fbGljZW5zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGljZW5zZSBLZXkgaXMgZW1wdHlcIik7XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aEJ5dGVzID0gdGhpcy5fX09DUkVuZ2luZS5sZW5ndGhCeXRlc1VURjgodGhpcy5fX2xpY2Vuc2UpICsgMTtcbiAgICB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyhsZW5ndGhCeXRlcyk7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5zdHJpbmdUb1VURjgodGhpcy5fX2xpY2Vuc2UsIHRoaXMuX19zdHJpbmdPbldhc21IZWFwLCBsZW5ndGhCeXRlcyk7XG4gICAgcmV0dXJuIHRoaXMuX19zdHJpbmdPbldhc21IZWFwO1xuICB9XG4gIF9fc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCkge1xuICAgIGxldCBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSBmYWxzZTtcbiAgICBsZXQgcmVzb2x1dGlvblRleHQgPSAnbm90IHJlYWR5JztcbiAgICBpZiAoIXRoaXMuX19jYW1TZXRDb21wbGV0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgICByZXNvbHV0aW9uVGV4dFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMCkge1xuICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIHJlc29sdXRpb25UZXh0ID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggKyAneCcgKyB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG4gICAgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMDgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTkyMCB8fCB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTkyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEwODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTI4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDcyMCB8fCB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gNzIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTI4MCkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW9FbGVtZW50LnNyY09iamVjdCA9IG51bGw7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fX3ZpZGVvV2lkdGggPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcbiAgICB0aGlzLl9fdmlkZW9IZWlnaHQgPSB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgfTtcbiAgfVxuICBfX2dldFNjYW5uZXJBZGRyZXNzKG9jclR5cGUpIHtcbiAgICBpZiAoIXRoaXMuX19vY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgYWRkcmVzcyA9IDA7XG4gICAgICBsZXQgZGVzdHJveUNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGNvbnN0IHN0cmluZ09uV2FzbUhlYXAgPSB0aGlzLl9fZ2V0U3RyaW5nT25XYXNtSGVhcCgpO1xuICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgIC8vIE9DUlxuICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0SURDYXJkU2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lJRENhcmRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0UGFzc3BvcnRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveVBhc3Nwb3J0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldEFsaWVuU2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lBbGllblNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgIGNhc2UgJ2NyZWRpdC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldENyZWRpdFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95Q3JlZGl0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgaWYgKGFkZHJlc3MgPT09IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9PT0gdGhpcy5fX3JldHJ5Q291bnRHZXRBZGRyZXNzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgTGljZW5zZSBLZXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3JldHJ5Q291bnRHZXRBZGRyZXNzKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gW2FkZHJlc3MsIGRlc3Ryb3lDYWxsYmFja107XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVE9ETyA6IExpY2Vuc2UgSXNzdWXsnbgg6rK97JqwIOyXkOufrCDqsJLsnYQg67Cb7JWE7IScIGVycm9yIOuhnOq3uOulvCDssI3snYQg7IiYIOyeiOqyjCDsmpTssq3tlYTsmpQgKOyehOyLnCBO67KIIOydtOyDgSBhZGRyZXNz66W8IOuqu+uwm+ycvOuptCDqsJXsoJwg7JeQ65+sKVxuICAgICAgdm9pZCAwO1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgX19nZXRCdWZmZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9fQnVmZmVyKSB7XG4gICAgICB0aGlzLl9fQnVmZmVyID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKHRoaXMuX19yZXNvbHV0aW9uV2lkdGggKiB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCAqIDQpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX19yZXN1bHRCdWZmZXIpIHtcbiAgICAgIHRoaXMuX19yZXN1bHRCdWZmZXIgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MoMjU2KTtcbiAgICB9XG4gICAgcmV0dXJuIFt0aGlzLl9fQnVmZmVyLCB0aGlzLl9fcmVzdWx0QnVmZmVyXTtcbiAgfVxuICBhc3luYyBfX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIG1hc2tNb2RlLCBjcm9wTW9kZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZShhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpO1xuICAgICAgY29uc3QganBnU2l6ZSA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ1NpemUoKTtcbiAgICAgIGNvbnN0IGpwZ1BvaW50ZXIgPSB0aGlzLl9fT0NSRW5naW5lLmdldEVuY29kZWRKcGdCdWZmZXIoKTtcbiAgICAgIGNvbnN0IHJlc3VsdFZpZXcgPSBuZXcgVWludDhBcnJheSh0aGlzLl9fT0NSRW5naW5lLkhFQVA4LmJ1ZmZlciwganBnUG9pbnRlciwganBnU2l6ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShyZXN1bHRWaWV3KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzdWx0XSwge1xuICAgICAgICB0eXBlOiAnaW1hZ2UvanBlZydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19ibG9iVG9CYXNlNjQoYmxvYik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95RW5jb2RlZEpwZygpO1xuICAgIH1cbiAgfVxuICAvKiogRnJlZSBidWZmZXIgKi9cbiAgX19kZXN0cm95QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fQnVmZmVyKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19CdWZmZXIpO1xuICAgICAgdGhpcy5fX0J1ZmZlciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fcmVzdWx0QnVmZmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19yZXN1bHRCdWZmZXIpO1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBGcmVlIFByZXZJbWFnZSBidWZmZXIgKi9cbiAgX19kZXN0cm95UHJldkltYWdlKCkge1xuICAgIGlmICh0aGlzLl9fUHJldkltYWdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19QcmV2SW1hZ2UpO1xuICAgICAgdGhpcy5fX1ByZXZJbWFnZSA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBmcmVlIHN0cmluZyBoZWFwIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICh0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBmcmVlIHNjYW5uZXIgYWRkcmVzcyAqL1xuICBfX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpIHtcbiAgICBpZiAodGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG4gIF9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvRWxlbWVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgfSA9IHRoaXMuX19zZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KTtcbiAgICBpZiAoIWlzU3VwcG9ydGVkUmVzb2x1dGlvbikge1xuICAgICAgaWYgKHJlc29sdXRpb25UZXh0ICE9PSAnbm90IHJlYWR5Jykge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1N1cHBvcnRlZFJlc29sdXRpb247XG4gIH1cbiAgX19nZXRSb3RhdGlvbkRlZ3JlZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX19vcHRpb25zLnJvdGF0aW9uRGVncmVlICUgMzYwICsgMzYwKSAlIDM2MDtcbiAgfVxuICBfX2dldE1pcnJvck1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vcHRpb25zLm1pcnJvck1vZGU7XG4gIH1cbiAgYXN5bmMgX19jcm9wSW1hZ2VGcm9tVmlkZW8oKSB7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHJldHVybiBbbnVsbCwgbnVsbF07XG4gICAgbGV0IFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuXG4gICAgLy8gc291cmNlIGltYWdlIChvciB2aWRlbylcbiAgICAvLyDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiiBzeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUg+KUiOKUiOKUiOKUiCDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDIHN4ICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIHNIZWlnaHQgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgZGVzdGluYXRpb24gY2FudmFzXG4gICAgLy8g4pSDICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAgICAgICAg4pSD4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgICAgICAgIOKUgyAgICDilIogICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgICAgICAgIHNXaWR0aCAgICAgICAgICAgICAgICAgICAgICDilIMgICAg4pSKIGR5ICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbICAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIPilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgIGR4ICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIGRIZWlnaHQg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgZFdpZHRoICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUm1xuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC9kcmF3SW1hZ2VcblxuICAgIGxldCBjYWxjQ2FudmFzID0gY2FudmFzO1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNDcm9wSW1hZ2VTaXplV2lkdGggPSB0aGlzLl9fY3JvcEltYWdlU2l6ZVdpZHRoO1xuICAgIGxldCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCA9IHRoaXMuX19jcm9wSW1hZ2VTaXplSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW2NhbGNDcm9wSW1hZ2VTaXplV2lkdGgsIGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0XSA9IFtjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCwgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aF07XG4gICAgICBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbY2FsY1Jlc29sdXRpb25faCwgY2FsY1Jlc29sdXRpb25fd107XG4gICAgICBjYWxjQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgY2FsY01heFNXaWR0aCA9IDk5OTk5O1xuICAgIGxldCBjYWxjTWF4U0hlaWdodCA9IDk5OTk5O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzeCwgc3k7XG4gICAgY29uc3QgcmF0aW8gPSBjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgKiByYXRpbyksIGNhbGNNYXhTSGVpZ2h0KTtcbiAgICBzeCA9IE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudFdpZHRoIC0gY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCkgLyAyICogcmF0aW8pO1xuICAgIHN5ID0gTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC0gY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQpIC8gMiAqIHJhdGlvKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgdGhpcy5fX2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCBkZWdyZWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoZGVncmVlID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoW2ltZ0RhdGEsIGltZ0RhdGFVcmxdKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9IGltZ0RhdGFVcmw7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAvLyBjYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgICAgY29uc3QgdGVtcENvbnRleHQgPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRlbXBDYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIGlmIChbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgIHRlbXBDYW52YXMuaGVpZ2h0ID0gaW1nLndpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKFswLCAxODBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgIHRlbXBDYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVncmVlID09PSA5MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy5oZWlnaHQsIDApO2Vsc2UgaWYgKGRlZ3JlZSA9PT0gMTgwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtlbHNlIGlmIChkZWdyZWUgPT09IDI3MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKDAsIGltZy53aWR0aCk7XG4gICAgICAgIHRlbXBDb250ZXh0LnJvdGF0ZShkZWdyZWUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGVtcENvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlRGF0YSA9IFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpID8gdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy5oZWlnaHQsIGltZy53aWR0aCkgOiB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCB0ZW1wQ29udGV4dCk7XG4gICAgICAgIHJlc29sdmUoW25ld0ltYWdlRGF0YSwgdGVtcENhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKV0pO1xuICAgICAgICB0ZW1wQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIGJveFR5cGUgPSAwLCByZXRyeUltZyA9IG51bGwpIHtcbiAgICBpZiAoIWFkZHJlc3MgfHwgYWRkcmVzcyA8IDApIHtcbiAgICAgIHJldHVybiBbZmFsc2UsIG51bGxdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbGV0IGltZ0RhdGE7XG4gICAgICBjb25zdCBbYnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGlmIChyZXRyeUltZyAhPT0gbnVsbCkge1xuICAgICAgICBpbWdEYXRhID0gcmV0cnlJbWc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBbaW1nRGF0YV0gPSBhd2FpdCB0aGlzLl9fY3JvcEltYWdlRnJvbVZpZGVvKCk7XG4gICAgICB9XG4gICAgICBpZiAoISEhaW1nRGF0YSkge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgYnVmZmVyKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuZGV0ZWN0X2lkY2FyZChidWZmZXIsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCBhZGRyZXNzLCBib3hUeXBlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0NhcmRib3hEZXRlY3RlZCByZXN1bHQgLT0tLS0tLScsIHJlc3VsdClcbiAgICAgIHJldHVybiBbISFyZXN1bHQsIGltZ0RhdGFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3IgOiAnICsgZTtcbiAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHNzYU1vZGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGFkZHJlc3MgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbklEQ2FyZChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuUGFzc3BvcnQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkFsaWVuKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgIGNhc2UgJ2NyZWRpdC1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkNyZWRpdChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgIH1cbiAgICAgIGlmIChvY3JSZXN1bHQgPT09IG51bGwgfHwgb2NyUmVzdWx0ID09PSAnJyB8fCBvY3JSZXN1bHQgPT09ICdmYWxzZScgfHwgb2NyUmVzdWx0WzBdID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGwsIG51bGxdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNyb3BNb2RlID0gZmFsc2U7XG4gICAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoXCJjcmVkaXRcIikgPiAtMSkge1xuICAgICAgICAgIGNyb3BNb2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3JpZ2luSW1hZ2UgPSBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgZmFsc2UsIGNyb3BNb2RlKTtcbiAgICAgICAgbGV0IG1hc2tJbWFnZSA9IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCB0cnVlLCBjcm9wTW9kZSk7XG4gICAgICAgIG1hc2tJbWFnZSA9IG1hc2tJbWFnZSA9PT0gJ2RhdGE6JyA/IG51bGwgOiBtYXNrSW1hZ2U7XG4gICAgICAgIGlmIChzc2FNb2RlKSB7XG4gICAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EsIGZhbHNlLCBtYXNrSW1hZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW29jclJlc3VsdCwgb3JpZ2luSW1hZ2UsIG1hc2tJbWFnZV07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgX19zdGFydFRydXRoKG9jclR5cGUsIGFkZHJlc3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoXCItc3NhXCIpID4gLTEpIHtcbiAgICAgICAgLy8gVE9ETzogd29ya2Vy66W8IOyCrOyaqe2VmOyXrCDrqZTsnbgoVUkg656c642U66eBKSDsiqTroIjrk5zqsIAg66mI7LaU7KeAIOyViuuPhOuhnSDsspjrpqwg7ZWE7JqUICjtmITsnqwgbG9hZGluZyBVSSDrnYTsmrDrqbQg7JWg64uI66mU7J207IWYIOupiOy2pClcbiAgICAgICAgLy8gVE9ETzogc2V0VGltZW91dCDsnLzroZwg64KY64iE642U652864+EIO2aqOqzvCDsl4bsnYwgc2V0VGltZW91dCDsp4DsmrDqs6AsIHdvcmtlcuuhnCDrs4Dqsr0g7ZWE7JqUXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUodGhpcy5fX09DUkVuZ2luZS5zY2FuVHJ1dGgoYWRkcmVzcywgcmVzdWx0QnVmZmVyKSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdTU0EgTW9kZSBpcyB0cnVlLiBidXQsIG9jclR5cGUgaXMgaW52YWxpZCA6ICcgKyBvY3JUeXBlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19zdGFydFRydXRoUmV0cnkob2NyVHlwZSwgYWRkcmVzcywgaW1nRGF0YSkge1xuICAgIGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCAwLCBpbWdEYXRhKTtcbiAgICAvLyBhd2FpdCB0aGlzLl9fc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCB0cnVlKTsgICAgICAvLyBmb3Ig7ISx64ql7J2EIOychO2VtCDsp4TtlokgWFxuICAgIHJldHVybiBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKTtcbiAgfVxuICBfX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgdGhpcy5fX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAvLyAx7LSIIGRlbGF5IO2bhCDsi6TtlolcbiAgICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIGFzeW5jIF9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgY29uc3QgaXNQYXNzcG9ydCA9IHRoaXMuX19vY3JUeXBlLmluY2x1ZGVzKCdwYXNzcG9ydCcpO1xuICAgICAgYXdhaXQgdGhpcy5fX3NldHVwVmlkZW8oaXNQYXNzcG9ydCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpZGVvXG4gICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAvLyBjb25zdCBbdHJhY2tdID0gdGhpcy5fX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICAvLyBjb25zdCBjYXBhYmlsaXR5ID0gdHJhY2suZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ0NhcmRTY2FuX19pbml0aWFsaXplIGNhcGFiaWxpdHknLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgaWYgKCdzcmNPYmplY3QnIGluIHZpZGVvKSB7XG4gICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gdGhpcy5fX3N0cmVhbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBdm9pZCB1c2luZyB0aGlzIGluIG5ldyBicm93c2VycywgYXMgaXQgaXMgZ29pbmcgYXdheS5cbiAgICAgICAgICB2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLl9fc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiAtIG9ubG9hZGVkbWV0YWRhdGEnKTtcbiAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgICAgICAgIHZvaWQgMDtcblxuICAgICAgICAgIC8vIHZpZGVvIGVsZW1lbnQgc3R5bGUg7ISk7KCVXG4gICAgICAgICAgdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPSB2aWRlby52aWRlb1dpZHRoIC8gdmlkZW8udmlkZW9IZWlnaHQgPCAxID8gJ3BvcnRyYWl0JyA6ICdsYW5kc2NhcGUnO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHRoaXMuX19jYW1TZXRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fX2FkanVzdFN0eWxlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgIHZpZGVvLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBpZiAoZS5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnQ2FtZXJhIEFjY2VzcyBQZXJtaXNzaW9uIGlzIG5vdCBhbGxvd2VkJztcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKFwiRTQwM1wiLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdOb3RSZWFkYWJsZUVycm9yJykge1xuICAgICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5fX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTsgLy8g7J6s6reAIO2YuOy2nFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9fc2V0U3R5bGUoZWwsIHN0eWxlKSB7XG4gICAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgc3R5bGUpO1xuICB9XG4gIF9fY2hhbmdlT0NSU3RhdHVzKHZhbCkge1xuICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAvLyBPQ1JcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuTk9UX1JFQURZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5SRUFEWTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5SRUFEWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQ6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1M7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQ6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuRE9ORTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIF9fY2hhbmdlU3RhZ2UodmFsLCBmb3JjZVVwZGF0ZSA9IGZhbHNlLCByZWNvZ25pemVkSW1hZ2UgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID09PSB2YWwgJiYgZm9yY2VVcGRhdGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX19jaGFuZ2VPQ1JTdGF0dXModmFsKTtcbiAgICB0aGlzLl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAgPSB2YWw7XG4gICAgY29uc3Qge1xuICAgICAgZ3VpZGVCb3hcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnN0eWxlLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cyArICdweCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZVt2YWxdXG4gICAgfTtcbiAgICBpZiAoZ3VpZGVCb3gpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwgc3R5bGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVRvcFVJIHx8IHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX3RvcFVJLCAndG9wJywgdGhpcy5fX29wdGlvbnMudXNlVG9wVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fbWlkZGxlVUksICdtaWRkbGUnLCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX19ib3R0b21VSSwgJ2JvdHRvbScsIHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpZGVvXG4gICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0EpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX2hpZGVQcmV2aWV3VUkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKSB7XG4gICAgY29uc3Qge1xuICAgICAgZ3VpZGVCb3gsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBwcmV2aWV3SW1hZ2Uuc3JjID0gcmVjb2duaXplZEltYWdlO1xuICAgIGNvbnN0IGltZ1N0eWxlID0ge1xuICAgICAgd2lkdGg6IGd1aWRlQm94LmNsaWVudFdpZHRoICsgJ3B4JyxcbiAgICAgIGhlaWdodDogZ3VpZGVCb3guY2xpZW50SGVpZ2h0ICsgJ3B4J1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdJbWFnZSwgaW1nU3R5bGUpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9KTtcbiAgfVxuICBfX2hpZGVQcmV2aWV3VUkoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9KTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJLCB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KTtcbiAgICBwcmV2aWV3SW1hZ2Uuc3JjID0gXCJcIjtcbiAgfVxuICBhc3luYyBfX2dldElucHV0RGV2aWNlcyhraW5kLCBsYWJlbCkge1xuICAgIC8vIHRocm93IGVycm9yIGlmIG5hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZFxuICAgIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIGNvbnN0IHZpZGVvRGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKGRldmljZSA9PiB7XG4gICAgICBpZiAoZGV2aWNlLmtpbmQgPT09IGAke2tpbmR9aW5wdXRgICYmIGRldmljZS5nZXRDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgY29uc3QgY2FwID0gZGV2aWNlLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICBpZiAoY2FwPy5mYWNpbmdNb2RlPy5pbmNsdWRlcyh0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmlkZW9EZXZpY2VzLmxlbmd0aCA8PSAxID8gdmlkZW9EZXZpY2VzIDogdmlkZW9EZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gbGFiZWwgPyBkZXZpY2UubGFiZWwuaW5jbHVkZXMobGFiZWwpIDogdHJ1ZSk7XG4gIH1cbiAgY2hlY2tVSU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkZXRlY3Rvci5nZXRVSU9yaWVudGF0aW9uKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkub2NyKTtcbiAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnQgIT09IHRoaXMuX19wcmV2VWlPcmllbnRhdGlvbikge1xuICAgICAgdGhpcy5fX3VpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgaXNDaGFuZ2VkXG4gICAgfTtcbiAgfVxuICBfX3NldHVwRG9tRWxlbWVudHMoKSB7XG4gICAgbGV0IHtcbiAgICAgIG9jcixcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICBndWlkZUJveCxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94V3JhcCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgcHJldmVudFRvRnJlZXplVmlkZW8sXG4gICAgICBjdXN0b21VSVdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBwcmV2aWV3VUlXcmFwLFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKCFvY3IpIHRocm93IG5ldyBFcnJvcihcIm9jciBkaXYgZWxlbWVudCBpcyBub3QgZXhpc3RcIik7XG4gICAgaWYgKHZpZGVvV3JhcCkgdmlkZW9XcmFwLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveFdyYXApIGd1aWRlQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAodmlkZW8pIHZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjYW52YXMpIGNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAocm90YXRpb25DYW52YXMpIHJvdGF0aW9uQ2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveCkgZ3VpZGVCb3gucmVtb3ZlKCk7XG4gICAgaWYgKG1hc2tCb3hXcmFwKSBtYXNrQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAocHJldmVudFRvRnJlZXplVmlkZW8pIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjdXN0b21VSVdyYXApIGN1c3RvbVVJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHRvcFVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSkgdG9wVUkuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKG1pZGRsZVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkgbWlkZGxlVUkuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKGJvdHRvbVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSkgYm90dG9tVUkuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKHByZXZpZXdVSVdyYXApIHByZXZpZXdVSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8gcHJldmlldyBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHByZXZpZXdVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSBwcmV2aWV3VUkuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3Qgcm90YXRpb25EZWdyZWUgPSB0aGlzLl9fZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA9IFs5MCwgMjcwXS5pbmNsdWRlcyhyb3RhdGlvbkRlZ3JlZSk7XG4gICAgbGV0IG9jclN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCBvY3JTdHlsZSk7XG4gICAgY29uc3Qgd3JhcFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyB2ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcbiAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH07XG4gICAgdmlkZW9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlkZW9XcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlb1dyYXAnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB7XG4gICAgICB3aGlsZSAodmlkZW9XcmFwLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdmlkZW9XcmFwLnJlbW92ZUNoaWxkKHZpZGVvV3JhcC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUobWFza0JveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgbGV0IG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLm1hc2tfZnJhbWUgKyAnZmYnO1xuICAgIGlmICghIXRoaXMuX19vcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLmNsaXBfZnJhbWUgKyAnNTUnO1xuICAgIH1cbiAgICBtYXNrQm94V3JhcC5pbm5lckhUTUwgPSBcIlwiICsgXCIgIDxzdmcgaWQ9J21hc2tCb3hDb250YWluZXInIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XFxuXCIgKyBcIiAgICA8bWFzayBpZD0nbWFzay1yZWN0Jz5cXG5cIiArIFwiICAgICAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nd2hpdGUnPjwvcmVjdD5cXG5cIiArIFwiICAgICAgPHN2ZyB4PSc1MCUnIHk9JzUwJScgb3ZlcmZsb3c9J3Zpc2libGUnPlxcblwiICsgXCIgICAgICAgICAgPHJlY3QgaWQ9J21hc2tCb3hJbm5lcidcXG5cIiArIFwiICAgICAgICAgICAgd2lkdGg9JzQwMCcgaGVpZ2h0PScyNjAnXFxuXCIgKyBcIiAgICAgICAgICAgIHg9Jy0yMDAnIHk9Jy0xMzAnXFxuXCIgKyBcIiAgICAgICAgICAgIHJ4PScxMCcgcnk9JzEwJ1xcblwiICsgXCIgICAgICAgICAgICBmaWxsPSdibGFjaycgc3Ryb2tlPSdibGFjayc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8L3N2Zz5cXG5cIiArIFwiICAgIDwvbWFzaz5cXG5cIiArIFwiICAgIDxyZWN0IGlkPSdtYXNrQm94T3V0ZXInXFxuXCIgKyBcIiAgICAgICAgICB4PScwJyB5PScwJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJ1xcblwiICsgXCIgICAgICAgICAgZmlsbD0nXCIgKyBtYXNrX2ZyYW1lICsgXCInIG1hc2s9J3VybCgjbWFzay1yZWN0KSc+PC9yZWN0PlxcblwiICsgXCIgIDwvc3ZnPlwiO1xuICAgIG9jci5hcHBlbmRDaGlsZChtYXNrQm94V3JhcCk7XG4gICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpO1xuICAgIGxldCB2aWRlb1N0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfTtcbiAgICBjb25zdCByb3RhdGVDc3MgPSAncm90YXRlKCcgKyByb3RhdGlvbkRlZ3JlZSArICdkZWcpJztcbiAgICBjb25zdCBtaXJyb3JDc3MgPSAncm90YXRlWSgxODBkZWcpJztcbiAgICBjb25zdCByb3RhdGVBbmRNaXJyb3JDc3MgPSBtaXJyb3JDc3MgKyAnICcgKyByb3RhdGVDc3M7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBpZiAodGhpcy5fX2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHJvdGF0ZUNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fX2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiBtaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB2aWRlb1N0eWxlKTtcbiAgICB2aWRlb1dyYXAuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgIGd1aWRlQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGd1aWRlQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnZ3VpZGVCb3hXcmFwJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcbiAgICBndWlkZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveCcpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0pO1xuICAgIGd1aWRlQm94V3JhcC5hcHBlbmRDaGlsZChndWlkZUJveCk7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYW52YXMnKTtcbiAgICBjb25zdCBjYW52YXNTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuX19vcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gdGhpcy5fX2lzUm90YXRlZDkwb3IyNzAgPyAnbm9uZScgOiAnZGlzcGxheScgOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMzBweCcsXG4gICAgICBib3JkZXI6ICdncmVlbiAycHggc29saWQnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FudmFzLCBjYW52YXNTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgcm90YXRpb25DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByb3RhdGlvbkNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncm90YXRpb25DYW52YXMnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocm90YXRpb25DYW52YXMsIHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuX19vcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gdGhpcy5fX2lzUm90YXRlZDkwb3IyNzAgPyAnZGlzcGxheScgOiAnbm9uZScgOiAnbm9uZScsXG4gICAgICBoZWlnaHQ6ICcyNSUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogJzBweCcsXG4gICAgICB0b3A6ICczMHB4JyxcbiAgICAgIGJvcmRlcjogJ2JsdWUgMnB4IHNvbGlkJ1xuICAgIH0pO1xuICAgIG9jci5hcHBlbmRDaGlsZChyb3RhdGlvbkNhbnZhcyk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmVudFRvRnJlZXplVmlkZW8nKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmVudFRvRnJlZXplVmlkZW8sIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAnMTAnLFxuICAgICAgcmlnaHQ6ICcxMCdcbiAgICB9KTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlby5pbm5lckhUTUwgPSBcIlwiICsgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHN0eWxlPVxcXCJtYXJnaW46IGF1dG87IGJhY2tncm91bmQ6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XFxcIiB3aWR0aD1cXFwiMzJweFxcXCIgaGVpZ2h0PVxcXCIzMnB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiPlxcblwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjg0XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMC41NTU1NTU1NTU1NTU1NTU2c1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgdmFsdWVzPVxcXCIxMDswXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJmaWxsXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwiZGlzY3JldGVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICA8L2NpcmNsZT5cIiArIFwiICA8Y2lyY2xlIGN4PVxcXCIxNlxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxMFxcXCIgZmlsbD1cXFwiIzg2ODY4NjAwXFxcIj5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIwOzA7MTA7MTA7MTBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImN4XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMTY7MTY7MTY7NTA7ODRcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICA8L2NpcmNsZT5cIiArIFwiICA8Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxMFxcXCIgZmlsbD1cXFwiIzg2ODY4NjAwXFxcIj5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIwOzA7MTA7MTA7MTBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImN4XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMTY7MTY7MTY7NTA7ODRcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICA8L2NpcmNsZT5cIiArIFwiICA8Y2lyY2xlIGN4PVxcXCI4NFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxMFxcXCIgZmlsbD1cXFwiIzg2ODY4NjAwXFxcIj5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIwOzA7MTA7MTA7MTBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTEuMTExMTExMTExMTExMTExMnNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImN4XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMTY7MTY7MTY7NTA7ODRcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTEuMTExMTExMTExMTExMTExMnNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICA8L2NpcmNsZT5cIiArIFwiICA8Y2lyY2xlIGN4PVxcXCIxNlxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxMFxcXCIgZmlsbD1cXFwiIzg2ODY4NjAwXFxcIj5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIwOzA7MTA7MTA7MTBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImN4XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMTY7MTY7MTY7NTA7ODRcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICA8L2NpcmNsZT5cIjtcbiAgICBcIjwvc3ZnPlwiO1xuICAgIG9jci5hcHBlbmRDaGlsZChwcmV2ZW50VG9GcmVlemVWaWRlbyk7XG4gICAgY3VzdG9tVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VzdG9tVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjdXN0b21VSVdyYXAnKTtcbiAgICBjb25zdCBjdXN0b21VSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY3VzdG9tVUlXcmFwLCBjdXN0b21VSVdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGN1c3RvbVVJV3JhcCk7XG5cbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSSDsgqzsmqkodXNlKeyXrOu2gOyZgCDqtIDqs4Tsl4bsnbQg7JiB7Jet7J2EIOyeoeq4sCDsnITtlbQsIGRpduqwgCDsl4bsnLzrqbQg7IOd7ISxXG4gICAgLy8gYWRqdXN0U3R5bGUoKSDsl5DshJwg7IS467aA7KCB7J24IOyCrOydtOymiOyZgCDsnITsuZjqsJIg64+Z7KCB7Jy866GcIOyEpOygleuQqC5cbiAgICBpZiAoIXRvcFVJKSB7XG4gICAgICB0b3BVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3RvcFVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZCh0b3BVSSk7XG4gICAgaWYgKCFtaWRkbGVVSSkge1xuICAgICAgbWlkZGxlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtaWRkbGVVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQobWlkZGxlVUkpO1xuICAgIGlmICghYm90dG9tVUkpIHtcbiAgICAgIGJvdHRvbVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib3R0b21VSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnYm90dG9tVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKGJvdHRvbVVJKTtcbiAgICBwcmV2aWV3VUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJldmlld1VJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld1VJV3JhcCcpO1xuICAgIGNvbnN0IHByZXZpZXdVSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJV3JhcCwgcHJldmlld1VJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmlld1VJV3JhcCk7XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgaWYgKCFwcmV2aWV3VUkpIHtcbiAgICAgICAgcHJldmlld1VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByZXZpZXdVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld1VJJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJLCB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSk7XG4gICAgICBwcmV2aWV3VUlXcmFwLmFwcGVuZENoaWxkKHByZXZpZXdVSSk7XG4gICAgICBpZiAoIXByZXZpZXdJbWFnZSkge1xuICAgICAgICBwcmV2aWV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcHJldmlld0ltYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3SW1hZ2UnKTtcbiAgICAgICAgcHJldmlld1VJLmFwcGVuZENoaWxkKHByZXZpZXdJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19vY3IgPSBvY3I7XG4gICAgdGhpcy5fX2NhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLl9fcm90YXRpb25DYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICB0aGlzLl9fdmlkZW8gPSB2aWRlbztcbiAgICB0aGlzLl9fdmlkZW9XcmFwID0gdmlkZW9XcmFwO1xuICAgIHRoaXMuX19ndWlkZUJveCA9IGd1aWRlQm94O1xuICAgIHRoaXMuX19ndWlkZUJveFdyYXAgPSBndWlkZUJveFdyYXA7XG4gICAgdGhpcy5fX21hc2tCb3hXcmFwID0gbWFza0JveFdyYXA7XG4gICAgdGhpcy5fX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gcHJldmVudFRvRnJlZXplVmlkZW87XG4gICAgdGhpcy5fX2N1c3RvbVVJV3JhcCA9IGN1c3RvbVVJV3JhcDtcbiAgICB0aGlzLl9fdG9wVUkgPSB0b3BVSTtcbiAgICB0aGlzLl9fbWlkZGxlVUkgPSBtaWRkbGVVSTtcbiAgICB0aGlzLl9fYm90dG9tVUkgPSBib3R0b21VSTtcbiAgICB0aGlzLl9fcHJldmlld1VJV3JhcCA9IHByZXZpZXdVSVdyYXA7XG4gICAgdGhpcy5fX3ByZXZpZXdVSSA9IHByZXZpZXdVSTtcbiAgICB0aGlzLl9fcHJldmlld0ltYWdlID0gcHJldmlld0ltYWdlO1xuICAgIHJldHVybiB7XG4gICAgICBvY3IsXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIHZpZGVvLFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLFxuICAgICAgY3VzdG9tVUlXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH07XG4gIH1cbiAgYXN5bmMgX19zZXR1cFZpZGVvKGlzUGFzc3BvcnQpIHtcbiAgICAvLyB3YXNtIOyduOyLneyEseuKpSDstZzsoIHtmZTrkJwg7ZW07IOB64+EXG4gICAgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCA9IDEwODA7XG4gICAgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgPSA3MjA7XG4gICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSB0aGlzLl9fc2V0dXBEb21FbGVtZW50cygpO1xuICAgIGNvbnN0IHZpZGVvRGV2aWNlcyA9IGF3YWl0IHRoaXMuX19nZXRJbnB1dERldmljZXMoJ3ZpZGVvJywgdGhpcy5fX29wdGlvbnMuZGV2aWNlTGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb0RldmljZXMgOjogJywgdmlkZW9EZXZpY2VzKVxuICAgIGNvbnN0IGRldmljZUlkTGlzdCA9IHZpZGVvRGV2aWNlcy5tYXAoZGV2aWNlID0+IGRldmljZS5kZXZpY2VJZCk7XG4gICAgdGhpcy5jaGVja1VJT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29uc3RyYWludFdpZHRoLCBjb25zdHJhaW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgLy8gdWkgOiBwb3J0cmFpdFxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogMTA4MCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcblxuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDcyMCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdWkgOiBsYW5kc2NhcGVcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIG1pbjogMTI4MFxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICBtaW46IDcyMFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB2aWRlbzoge1xuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgaWRlYWw6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZmFjaW5nTW9kZToge1xuICAgICAgICAgIGlkZWFsOiB0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnRcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICB3aGl0ZUJhbGFuY2VNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2VJZDogdmlkZW9EZXZpY2VzLmxlbmd0aCA/IHtcbiAgICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0W2RldmljZUlkTGlzdC5sZW5ndGggLSAxXVxuICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgd2lkdGg6IGNvbnN0cmFpbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb25zdHJhaW50SGVpZ2h0XG4gICAgICB9XG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgZHVtcHRyYWNrID0gKFthLCBiXSwgdHJhY2spID0+XG4gICAgICAvLyAgIGAke2F9JHt0cmFjay5raW5kID09ICd2aWRlbycgPyAnQ2FtZXJhJyA6ICdNaWNyb3Bob25lJ30gKCR7dHJhY2sucmVhZHlTdGF0ZX0pOiAke3RyYWNrLmxhYmVsfSR7Yn1gO1xuXG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndmlkZW9UcmFja3MgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpXG4gICAgICAvLyBjb25zdCBzdHJlYW1TZXR0aW5ncyA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldFNldHRpbmdzKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtQ2FwYWJpbGl0aWVzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENhcGFiaWxpdGllcygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDb25zdHJhaW50cygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbVNldHRpbmdzIDo6ICcsIHN0cmVhbVNldHRpbmdzKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIC8gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCAvIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGFzcGVjdFJhdGlvIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5hc3BlY3RSYXRpbyk7XG5cbiAgICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICBbcm90YXRpb25DYW52YXMud2lkdGgsIHJvdGF0aW9uQ2FudmFzLmhlaWdodF0gPSBbdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2FkanVzdFN0eWxlKCkge1xuICAgIHZvaWQgMDtcbiAgICBjb25zdCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUlcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAvLyDquLDspIDsoJXrs7RcbiAgICBjb25zdCBiYXNlV2lkdGggPSA0MDA7XG4gICAgY29uc3QgYmFzZUhlaWdodCA9IDI2MDtcbiAgICBjb25zdCBzY2FubmVyRnJhbWVSYXRpbyA9IGJhc2VIZWlnaHQgLyBiYXNlV2lkdGg7IC8vIOyLoOu2hOymnSDruYTsnKhcblxuICAgIGxldCBndWlkZUJveFdpZHRoLCBndWlkZUJveEhlaWdodDtcbiAgICBsZXQgY2FsY09jckNsaWVudFdpZHRoID0gb2NyLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjT2NyQ2xpZW50SGVpZ2h0ID0gb2NyLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aDtcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBuZXdWaWRlb1dpZHRoID0gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgbGV0IG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy5fX2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuX192aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUlcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7Lm066mU652864+EIOyEuOuhnFxuICAgICAgICAvLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDruYTrlJTsmKQg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDruYTrlJTsmKTrpbwg6rCA66GcIFVJ7J2YIGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIC8vIOqwgOuhnCBVSSBoZWlnaHQg6riw7KSA7Jy866GcIOu5hOuUlOyYpOydmCB3aWR0aCDqs4TsgrBcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gbmV3VmlkZW9IZWlnaHQgKiAoY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9IZWlnaHQpO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOuKlCDruYTrlJTsmKTrpbwg7IS466GcIOq4sOykgOycvOuhnCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBuZXdWaWRlb0hlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCBoZWlnaHQg7YGs6riw66W8IFVJ7J2YIGhlaWdodCDquLDspIDsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIOy2leyGjFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGggPSBNYXRoLm1pbihndWlkZUJveFdpZHRoLCBuZXdWaWRlb1dpZHRoKTtcbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IE1hdGgubWluKGd1aWRlQm94SGVpZ2h0LCBuZXdWaWRlb0hlaWdodCk7XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94V2lkdGggPSBndWlkZUJveFdpZHRoICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hIZWlnaHQgKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBpZiAodG9wVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh0b3BVSSwge1xuICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnMTBweCcsXG4gICAgICAgICdoZWlnaHQnOiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICAgICdwYWRkaW5nJzogJzEwcHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgICAnaGVpZ2h0JzogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvV2lkdGggIT09IGNhbGNWaWRlb0NsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvSGVpZ2h0ICE9PSBjYWxjVmlkZW9DbGllbnRIZWlnaHQpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICBoZWlnaHQ6IG5ld1ZpZGVvSGVpZ2h0ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIjbWFza0JveElubmVyXCIpO1xuICAgIGxldCByID0gYm9yZGVyUmFkaXVzIC0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHIgPSByIDwgMCA/IDAgOiByO1xuICAgIGlmICghaXNOYU4ocmVkdWNlZEd1aWRlQm94V2lkdGgpICYmICFpc05hTihyZWR1Y2VkR3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lckhlaWdodCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBtYXNrQm94SW5uZXJXaWR0aCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIG1hc2tCb3hJbm5lckhlaWdodCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3gnLCBtYXNrQm94SW5uZXJXaWR0aCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3knLCBtYXNrQm94SW5uZXJIZWlnaHQgLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIHIgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeScsIHIgKyAnJyk7XG4gICAgfVxuICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRydWUpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX2Nsb3NlQ2FtZXJhKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cbiAgYXN5bmMgX19sb2FkUmVzb3VyY2VzKCkge1xuICAgIHZvaWQgMDtcbiAgICBpZiAodGhpcy5fX3Jlc291cmNlc0xvYWRlZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2RrU3VwcG9ydEVudiA9ICdxdXJhbSc7XG4gICAgbGV0IGlzU3VwcG9ydFNpbWQgPSBhd2FpdCBzaW1kKCk7XG4gICAgbGV0IGVudkluZm8gPSAnJztcbiAgICBlbnZJbmZvICs9IGBvcyA6ICR7dGhpcy5fX2RldmljZUluZm8ub3N9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBvc1NpbXBsZSA6ICR7dGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGV9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBzaW1kKHdhc20tZmVhdHVyZS1kZXRlY3QpIDogJHtpc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgaWYgKHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnSU9TJyB8fCB0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZSA9PT0gJ01BQycpIHtcbiAgICAgIGlzU3VwcG9ydFNpbWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZW52SW5mbyArPSBgaXNTdXBwb3J0U2ltZChmaW5hbCkgOiAke2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBVc2VyQWdlbnQgOiAke25hdmlnYXRvci51c2VyQWdlbnR9XFxuYDtcbiAgICBpZiAoaXNTdXBwb3J0U2ltZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgc2RrU3VwcG9ydEVudiArPSAnX3NpbWQuanMnO1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ29jci1kZW1vLXRlc3QudXNlYi5jby5rcicpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBzZGtTdXBwb3J0RW52ICs9ICcuanMnO1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ29jci1kZW1vLXRlc3QudXNlYi5jby5rcicpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNka1N1cHBvcnRFbnYsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xuICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG5cbiAgICAgIC8vIGRhdGEobW9kZWwpXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcKGZ1bmN0aW9uXFwoXFwpIFxcey9tLCAndmFyIGNyZWF0ZU1vZGVsRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnLCAnICAgcmVqZWN0KCk7XFxuJyArICcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgfSwgaGFuZGxlRXJyb3IpJywgJyAgcmVzb2x2ZSgpO1xcbicgKyAnICB9LCBoYW5kbGVFcnJvciknKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFx9XFwpXFwoXFwpOy9tLCAnXFxuIH0pXFxuJyArICd9OycpO1xuXG4gICAgICAvLyB3YXNtXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgncXVyYW0ud2FzbScsIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWYpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL1JFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXXF1cmFtXFwuZGF0YVtcIiddL2dtLCBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwiJHtuZXcgVVJMKCdxdXJhbS5kYXRhJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmfVwiYCk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnZnVuY3Rpb24gY3JlYXRlV2FzbScsICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnaW5zdGFudGlhdGVBc3luYygpOycsICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7Jyk7XG5cbiAgICAgIC8vIHdhc20gYW5kIGRhdGEobW9kZWwpIGZpbGUg67OR66Cs66GcIGZldGNoIO2VmOq4sCDsnITtlbRcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gc3RhcnRcIilcXG4nICsgJ2F3YWl0IChhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkV2FzbSA9IGZhbHNlO1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWREYXRhID0gZmFsc2U7XFxuJyArICcgICAgY3JlYXRlV2FzbSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkV2FzbSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkRGF0YSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KTtcXG4nICsgJyAgICBjcmVhdGVNb2RlbERhdGEoKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZERhdGEgPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZFdhc20pIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSlcXG4nICsgJyAgfSk7XFxuJyArICd9KSgpO1xcbicgKyAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIGVuZFwiKScpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9KTtcbiAgICBzcmMgPSBgXG4gICAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgJHtzcmN9XG4gICAgICBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4ID0gbGVuZ3RoQnl0ZXNVVEY4XG4gICAgICBNb2R1bGUuc3RyaW5nVG9VVEY4ID0gc3RyaW5nVG9VVEY4XG4gICAgICByZXR1cm4gTW9kdWxlXG4gICAgfSkoKVxuICAgICAgICBgO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCA9IGFzeW5jIF8gPT4ge1xuICAgICAgdm9pZCAwO1xuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpO1xuICAgIHRoaXMuX19yZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX3N0YXJ0U2NhbkltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX19kZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fX2FkZHJlc3MgPSAwO1xuICAgICAgdGhpcy5fX3BhZ2VFbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPSBpc05hTihwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSkgPyAwIDogcGFyc2VJbnQodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCk7XG4gICAgICBjb25zdCBzY2FuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsLFxuICAgICAgICAgICAgaW1nRGF0YVVybCA9IG51bGwsXG4gICAgICAgICAgICBtYXNrSW1hZ2UgPSBudWxsLFxuICAgICAgICAgICAgc3NhUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdExpc3QgPSBbXTtcblxuICAgICAgICAgIC8vIHRoaXMuX19jaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgaWYgKCF0aGlzLl9fT0NSRW5naW5lWydhc20nXSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVE9ETyA6IOyEpOygle2VoOyImCDsnojqsowg67OA6rK9IGRlZmF1bHQg6rCS64+EIOygnOqztVxuICAgICAgICAgIGNvbnN0IFtyZXNvbHV0aW9uX3csIHJlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHZpZGVvXG4gICAgICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICAgICAgaWYgKHJlc29sdXRpb25fdyA9PT0gMCB8fCByZXNvbHV0aW9uX2ggPT09IDApIHJldHVybjtcbiAgICAgICAgICBpZiAodGhpcy5fX2RldGVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYmVmb3JlIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuICAgICAgICAgIGlmICh0aGlzLl9fYWRkcmVzcyA9PT0gMCAmJiAhdGhpcy5fX3BhZ2VFbmQgJiYgdGhpcy5fX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpIHtcbiAgICAgICAgICAgIFt0aGlzLl9fYWRkcmVzcywgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2tdID0gdGhpcy5fX2dldFNjYW5uZXJBZGRyZXNzKHRoaXMuX19vY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl9fYWRkcmVzcyB8fCB0aGlzLl9fcGFnZUVuZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGFmdGVyIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPCB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIE9DUiDsmYTro4wg7J207KCEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgICAgY29uc3QgW2lzRGV0ZWN0ZWRDYXJkLCBpbWdEYXRhXSA9IGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZCh0aGlzLl9fYWRkcmVzcywgMCk7XG4gICAgICAgICAgICBpZiAoIWlzRGV0ZWN0ZWRDYXJkKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAgIT09IHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9GQUlMRUQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FyZCBpcyBkZXRlY3RlZFxuICAgICAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUyk7XG5cbiAgICAgICAgICAgIC8vIHNzYSByZXRyeSDshKTsoJXsnbQg65CY7Ja0IOyeiOycvOuptCwgY2FyZCBkZXRlY3Qg7ISx6rO17IucIOydtOuvuOyngCDsoIDsnqVcbiAgICAgICAgICAgIGlmICh0aGlzLl9fc3NhTW9kZSAmJiB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlXSA9IGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKHRoaXMuX19hZGRyZXNzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fX29jclN0YXR1cyA+PSB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIG9jciDsmYTro4wg7J207ZuEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBmYWlsdXJlIGNhc2VcbiAgICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT0NSIFN0YXR1cyBpcyAke3RoaXMuX19vY3JTdGF0dXN9LCBidXQgb2NyUmVzdWx0IGlzIGZhbHNlYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7IC8vIE9DUiDsmYTro4wg7Iuc7KCQ7JeQIGNhbWVyYSBwcmV2aWV3IG9mZlxuXG4gICAgICAgICAgICBpZiAodGhpcy5fX3NzYU1vZGUpIHtcbiAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAvLyDstZzstIgg7Iuc64+EXG4gICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoKHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcyk7XG4gICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0cnlTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQuaW5kZXhPZihcIkZBS0VcIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc3NhUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoUmV0cnkodGhpcy5fX29jclR5cGUsIHRoaXMuX19hZGRyZXNzLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIltFUlJdIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGxcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3NhUmVzdWx0TGlzdC5wdXNoKHNzYVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0cnlXb3JraW5nVGltZSA9IG5ldyBEYXRlKCkgLSByZXRyeVN0YXJ0RGF0ZTtcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLl9fb25TdWNjZXNzUHJvY2Vzcyh7XG4gICAgICAgICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgICAgICAgb2NyX2RhdGE6IHBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLl9fc3NhUmV0cnlDb3VudCwgc3NhUmVzdWx0TGlzdCksXG4gICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBtYXNrSW1hZ2UsXG4gICAgICAgICAgICAgIHNzYV9tb2RlOiB0aGlzLl9fc3NhTW9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvcic7XG4gICAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IFwiOiBcIiArIGUubWVzc2FnZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKFwiV0EwMDFcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgdGhpcy5fX2RldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX19kZXRlY3RlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8g7J6s6reAXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZXRUaW1lb3V0KHNjYW4sIDEpOyAvLyBVSSDrnpzrjZTrp4EgYmxvY2tpbmcg67Cp7KeAIChzZXRUaW1lb3V0KVxuICAgIH0pO1xuICB9XG5cbiAgX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUoaW1nRGF0YSkge1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUubGVuZ3RoID09PSBwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSkge1xuICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnNoaWZ0KCk7XG4gICAgfVxuICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5wdXNoKGltZ0RhdGEpO1xuICAgIHZvaWQgMDsgLy8gc2hvdWxkIGJlIHJlbW92ZWRcbiAgfVxuXG4gIF9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KSB7XG4gICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgIGlmIChyZXZpZXdfcmVzdWx0LnNzYV9tb2RlKSB7XG4gICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogXCJOMTAwXCIsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogXCJPSy5cIlxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiByZXZpZXdfcmVzdWx0XG4gICAgfTtcbiAgICBpZiAodGhpcy5fX29uU3VjY2Vzcykge1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgX19vbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgIGxldCBlcnJvckRldGFpbCA9IFwiXCI7XG4gICAgaWYgKGU/LnRvU3RyaW5nKCkpIGVycm9yRGV0YWlsICs9IGUudG9TdHJpbmcoKTtcbiAgICBpZiAoZT8uc3RhY2spIGVycm9yRGV0YWlsICs9IGUuc3RhY2s7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogcmVzdWx0Q29kZSxcbiAgICAgICAgXCJyZXN1bHRfbWVzc2FnZVwiOiBlcnJvck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwiZmFpbGVkXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiB7XG4gICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgZXJyb3JfZGV0YWlsOiBlcnJvckRldGFpbFxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vbkZhaWx1cmUpIHtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fc3RhcnRTY2FuKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5JbXBsKCk7XG4gICAgdm9pZCAwO1xuICB9XG4gIGFzeW5jIF9fcmVjb3ZlcnlTY2FuKCkge1xuICAgIHZvaWQgMDtcbiAgICB0aGlzLl9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW4oKTtcbiAgfVxuICBzdG9wU2NhbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgc3RvcFN0cmVhbSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmICh0aGlzLl9fc3RyZWFtKSB7XG4gICAgICB0aGlzLl9fc3RyZWFtLnN0b3AgJiYgdGhpcy5fX3N0cmVhbS5zdG9wKCk7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0cmVhbSA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiDrqZTrqqjrpqwgYWxsb2NhdGlvbiBmcmVlIO2VqOyImCAqL1xuICBjbGVhbnVwKCkge1xuICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKTtcbiAgICB0aGlzLl9fZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuX19kZXN0cm95UHJldkltYWdlKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCk7XG4gIH1cbiAgX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgaWYgKHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlQk9DUjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsUUFBUSxNQUFNLHVCQUF1QjtBQUM1QyxPQUFPQyxNQUFNLE1BQU0scUJBQXFCO0FBQ3hDLFNBQVNDLElBQUksRUFBRUMsT0FBTyxRQUFRLGtDQUFrQztBQUNoRSxJQUFJQyxRQUFRO0FBQ1osTUFBTUMsT0FBTyxDQUFDO0VBeUJaOztFQUVBOztFQXdEaUM7RUFDTDs7RUFNRTtFQUNGO0VBQ0M7O0VBSTdCOztFQThDQTtFQUNBQyxXQUFXQSxDQUFBLEVBQUc7SUFBQUMsZUFBQSxzQkE5SUE7TUFDWkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsU0FBUyxFQUFFLFdBQVc7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLG1CQUFtQixFQUFFLGdCQUFnQjtNQUNyQ0Msa0JBQWtCLEVBQUUsZUFBZTtNQUNuQ0MsY0FBYyxFQUFFLFlBQVk7TUFDNUJDLHVCQUF1QixFQUFFLHFCQUFxQjtNQUM5Q0MsV0FBVyxFQUFFLGFBQWE7TUFDMUJDLG9CQUFvQixFQUFFLHNCQUFzQjtNQUM1Q0MsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUFBVixlQUFBLHFCQUNZO01BQ1hFLFNBQVMsRUFBRSxDQUFDLENBQUM7TUFDYkMsS0FBSyxFQUFFLENBQUM7TUFDUkssV0FBVyxFQUFFLENBQUM7TUFDZEcs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
