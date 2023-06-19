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
      var videoDevices = yield _this13.__getInputDevices('video');
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

      // 최초 진입 이어서 videoDeivce 리스트를 가져올 수 없으면,
      // getUserMedia를 임의 호출하여 권한을 받은뒤 다시 가져옴
      if (videoDevices.length === 0) {
        _this13.__stream = yield navigator.mediaDevices.getUserMedia(constraints);
        _this13.stopStream();
        videoDevices = yield _this13.__getInputDevices('video');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJzaW1kIiwidGhyZWFkcyIsImluc3RhbmNlIiwiVXNlQk9DUiIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiTk9ORSIsIk5PVF9SRUFEWSIsIlJFQURZIiwiQ0FSRF9ERVRFQ1RfU1VDQ0VTUyIsIkNBUkRfREVURUNUX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZVRvcFVJIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUkiLCJ1c2VNaWRkbGVVSVRleHRNc2ciLCJ1c2VCb3R0b21VSSIsInVzZUJvdHRvbVVJVGV4dE1zZyIsInVzZVByZXZpZXdVSSIsImZyYW1lQm9yZGVyU3R5bGUiLCJ3aWR0aCIsInN0eWxlIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwidXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UiLCJtYXNrRnJhbWVTdHlsZSIsImNsaXBfZnJhbWUiLCJiYXNlX2NvbG9yIiwicmVzb3VyY2VCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJkZXZpY2VMYWJlbCIsInZpZGVvVGFyZ2V0SWQiLCJyb3RhdGlvbkRlZ3JlZSIsIm1pcnJvck1vZGUiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRlZCIsIl9fcHJlbG9hZGluZ1N0YXR1cyIsIl9fbG9hZFJlc291cmNlcyIsIl9fcHJlbG9hZGVkIiwiaXNJbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZWQiLCJnZXRQcmVsb2FkaW5nU3RhdHVzIiwiZ2V0T0NSRW5naW5lIiwiX19PQ1JFbmdpbmUiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJfX2xpY2Vuc2UiLCJtZXJnZWRPcHRpb25zIiwiXyIsIm1lcmdlIiwiX19vcHRpb25zIiwic2V0T3B0aW9uIiwiX193aW5kb3dFdmVudEJpbmQiLCJfX2RldmljZUluZm8iLCJnZXRPc1ZlcnNpb24iLCJnZXRPcHRpb24iLCJnZXRPY3JUeXBlIiwidHlwZSIsIl9fb2NyVHlwZVN0cmluZyIsImdldCIsImdldFVJT3JpZW50YXRpb24iLCJfX3VpT3JpZW50YXRpb24iLCJnZXRWaWRlb09yaWVudGF0aW9uIiwiX192aWRlb09yaWVudGF0aW9uIiwic3RhcnRPQ1IiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJfYXJndW1lbnRzIiwiYXJndW1lbnRzIiwiX3RoaXMyIiwib25JblByb2dyZXNzQ2hhbmdlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX19vY3JUeXBlIiwiX19zc2FNb2RlIiwiaW5kZXhPZiIsIl9fb25TdWNjZXNzIiwiX19vbkZhaWx1cmUiLCJfX29uSW5Qcm9ncmVzc0NoYW5nZSIsIl9fdG9wVUkiLCJnZXRPQ1JFbGVtZW50cyIsInRvcFVJIiwiX19taWRkbGVVSSIsIm1pZGRsZVVJIiwiX19ib3R0b21VSSIsImJvdHRvbVVJIiwiX19jaGFuZ2VTdGFnZSIsInByZWxvYWRpbmdTdGF0dXMiLCJfX3dhaXRQcmVsb2FkZWQiLCJjb25jYXQiLCJfX3N0YXJ0U2NhbiIsImUiLCJzdG9wT0NSIiwiY2xlYW51cCIsIl9fY2xvc2VDYW1lcmEiLCJyZXN0YXJ0T0NSIiwib2NyVHlwZSIsIl90aGlzMyIsIl90aGlzNCIsIndhaXRpbmdSZXRyeUNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVjayIsInNldFRpbWVvdXQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiX19wYWdlRW5kIiwiaGFuZGxlUmVzaXplIiwiX3JlZjIiLCJfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiYXBwbHkiLCJfX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIl9fc2xlZXAiLCJtcyIsIl9fYmxvYlRvQmFzZTY0IiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX19nZXRTdHJpbmdPbldhc21IZWFwIiwibGVuZ3RoQnl0ZXMiLCJsZW5ndGhCeXRlc1VURjgiLCJfX3N0cmluZ09uV2FzbUhlYXAiLCJfbWFsbG9jIiwic3RyaW5nVG9VVEY4IiwiX19zZXRWaWRlb1Jlc29sdXRpb24iLCJ2aWRlb0VsZW1lbnQiLCJpc1N1cHBvcnRlZFJlc29sdXRpb24iLCJyZXNvbHV0aW9uVGV4dCIsIl9fY2FtU2V0Q29tcGxldGUiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJzcmNPYmplY3QiLCJfX3ZpZGVvV2lkdGgiLCJfX3ZpZGVvSGVpZ2h0IiwiX19nZXRTY2FubmVyQWRkcmVzcyIsIl9fb2NyVHlwZUxpc3QiLCJpbmNsdWRlcyIsImFkZHJlc3MiLCJkZXN0cm95Q2FsbGJhY2siLCJzdHJpbmdPbldhc21IZWFwIiwiZ2V0SURDYXJkU2Nhbm5lciIsImRlc3Ryb3lJRENhcmRTY2FubmVyIiwiZ2V0UGFzc3BvcnRTY2FubmVyIiwiZGVzdHJveVBhc3Nwb3J0U2Nhbm5lciIsImdldEFsaWVuU2Nhbm5lciIsImRlc3Ryb3lBbGllblNjYW5uZXIiLCJnZXRDcmVkaXRTY2FubmVyIiwiZGVzdHJveUNyZWRpdFNjYW5uZXIiLCJfZnJlZSIsIl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MiLCJfX3JldHJ5Q291bnRHZXRBZGRyZXNzIiwiX19nZXRCdWZmZXIiLCJfX0J1ZmZlciIsIl9fcmVzb2x1dGlvbldpZHRoIiwiX19yZXNvbHV0aW9uSGVpZ2h0IiwiX19yZXN1bHRCdWZmZXIiLCJfX2dldEltYWdlQmFzZTY0IiwibWFza01vZGUiLCJjcm9wTW9kZSIsIl90aGlzNSIsImVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZSIsImpwZ1NpemUiLCJnZXRFbmNvZGVkSnBnU2l6ZSIsImpwZ1BvaW50ZXIiLCJnZXRFbmNvZGVkSnBnQnVmZmVyIiwicmVzdWx0VmlldyIsIlVpbnQ4QXJyYXkiLCJIRUFQOCIsImJ1ZmZlciIsIkJsb2IiLCJkZXN0cm95RW5jb2RlZEpwZyIsIl9fZGVzdHJveUJ1ZmZlciIsIl9fZGVzdHJveVByZXZJbWFnZSIsIl9fUHJldkltYWdlIiwiX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCIsIl9fZGVzdHJveVNjYW5uZXJBZGRyZXNzIiwiX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrIiwiX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUiLCJfX2dldFJvdGF0aW9uRGVncmVlIiwiX19nZXRNaXJyb3JNb2RlIiwiX19jcm9wSW1hZ2VGcm9tVmlkZW8iLCJfdGhpczYiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwiY2FudmFzIiwicm90YXRpb25DYW52YXMiLCJjYWxjQ2FudmFzIiwiY2FsY1ZpZGVvV2lkdGgiLCJjYWxjVmlkZW9IZWlnaHQiLCJjYWxjVmlkZW9DbGllbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCIsIl9fY3JvcEltYWdlU2l6ZVdpZHRoIiwiY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQiLCJfX2Nyb3BJbWFnZVNpemVIZWlnaHQiLCJjYWxjVmlkZW9PcmllbnRhdGlvbiIsIl9faXNSb3RhdGVkOTBvcjI3MCIsImNhbGNNYXhTV2lkdGgiLCJjYWxjTWF4U0hlaWdodCIsInN4Iiwic3kiLCJyYXRpbyIsInNXaWR0aCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsInNIZWlnaHQiLCJjYWxjQ29udGV4dCIsImdldENvbnRleHQiLCJ3aWxsUmVhZEZyZXF1ZW50bHkiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9fcm90YXRlIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsImhlaWdodCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9faXNDYXJkYm94RGV0ZWN0ZWQiLCJfYXJndW1lbnRzMiIsIl90aGlzNyIsImJveFR5cGUiLCJyZXRyeUltZyIsInNldCIsImRhdGEiLCJkZXRlY3RfaWRjYXJkIiwibWVzc2FnZSIsInRvU3RyaW5nIiwiX19zdGFydFJlY29nbml0aW9uIiwic3NhTW9kZSIsIl90aGlzOCIsIm9jclJlc3VsdCIsInJlc3VsdEJ1ZmZlciIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0Iiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJfX3N0YXJ0VHJ1dGgiLCJyZWplY3QiLCJzY2FuVHJ1dGgiLCJfX3N0YXJ0VHJ1dGhSZXRyeSIsIl90aGlzOSIsIl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl90aGlzMTAiLCJfX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24iLCJfdGhpczExIiwiaXNQYXNzcG9ydCIsIl9fc2V0dXBWaWRlbyIsIl9fc3RyZWFtIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicGxheSIsIl9fYWRqdXN0U3R5bGUiLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIm5hbWUiLCJlcnJvck1lc3NhZ2UiLCJfX29uRmFpbHVyZVByb2Nlc3MiLCJzdG9wU3RyZWFtIiwiX19zZXRTdHlsZSIsImVsIiwiYXNzaWduIiwiX19jaGFuZ2VPQ1JTdGF0dXMiLCJ2YWwiLCJfX29jclN0YXR1cyIsImZvcmNlVXBkYXRlIiwicmVjb2duaXplZEltYWdlIiwiX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwIiwiX19pblByb2dyZXNzU3RlcCIsImd1aWRlQm94IiwibWFza0JveFdyYXAiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJfbWFza0JveFdyYXAkcXVlcnlTZWwiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiY2FsbCIsImRpc3BsYXkiLCJfX3VwZGF0ZVByZXZpZXdVSSIsIl9faGlkZVByZXZpZXdVSSIsInByZXZpZXdVSSIsInByZXZpZXdJbWFnZSIsImltZ1N0eWxlIiwiX19nZXRJbnB1dERldmljZXMiLCJraW5kIiwibGFiZWwiLCJfdGhpczEyIiwibWVkaWFEZXZpY2VzIiwiZGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ2aWRlb0RldmljZXMiLCJmaWx0ZXIiLCJkZXZpY2UiLCJnZXRDYXBhYmlsaXRpZXMiLCJfY2FwJGZhY2luZ01vZGUiLCJjYXAiLCJmYWNpbmdNb2RlIiwiX19mYWNpbmdNb2RlQ29uc3RyYWludCIsImNoZWNrVUlPcmllbnRhdGlvbiIsImN1cnJlbnQiLCJvY3IiLCJpc0NoYW5nZWQiLCJfX3ByZXZVaU9yaWVudGF0aW9uIiwiX19jbGVhckN1c3RvbVVJIiwib2JqIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiX19zZXR1cERvbUVsZW1lbnRzIiwidmlkZW9XcmFwIiwiZ3VpZGVCb3hXcmFwIiwicHJldmVudFRvRnJlZXplVmlkZW8iLCJjdXN0b21VSVdyYXAiLCJwcmV2aWV3VUlXcmFwIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJtYXJnaW4iLCJvdmVyZmxvdyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwibWFza19mcmFtZSIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJfb2JqZWN0U3ByZWFkIiwiY2FudmFzU3R5bGUiLCJsZWZ0IiwidG9wIiwiYm9yZGVyIiwicmlnaHQiLCJib3R0b20iLCJjdXN0b21VSVdyYXBTdHlsZSIsInByZXZpZXdVSVdyYXBTdHlsZSIsIl9fb2NyIiwiX19jYW52YXMiLCJfX3JvdGF0aW9uQ2FudmFzIiwiX192aWRlbyIsIl9fdmlkZW9XcmFwIiwiX19ndWlkZUJveCIsIl9fZ3VpZGVCb3hXcmFwIiwiX19tYXNrQm94V3JhcCIsIl9fcHJldmVudFRvRnJlZXplVmlkZW8iLCJfX2N1c3RvbVVJV3JhcCIsIl9fcHJldmlld1VJV3JhcCIsIl9fcHJldmlld1VJIiwiX19wcmV2aWV3SW1hZ2UiLCJfdGhpczEzIiwiZGV2aWNlSWRMaXN0IiwibWFwIiwiZGV2aWNlSWQiLCJjb25zdHJhaW50V2lkdGgiLCJjb25zdHJhaW50SGVpZ2h0IiwiaWRlYWwiLCJjb25zdHJhaW50cyIsImF1ZGlvIiwiem9vbSIsImZvY3VzTW9kZSIsIndoaXRlQmFsYW5jZU1vZGUiLCJnZXRVc2VyTWVkaWEiLCJzdHJlYW0iLCJiYXNlV2lkdGgiLCJiYXNlSGVpZ2h0Iiwic2Nhbm5lckZyYW1lUmF0aW8iLCJndWlkZUJveFdpZHRoIiwiZ3VpZGVCb3hIZWlnaHQiLCJjYWxjT2NyQ2xpZW50V2lkdGgiLCJjYWxjT2NyQ2xpZW50SGVpZ2h0IiwibmV3VmlkZW9XaWR0aCIsIm5ld1ZpZGVvSGVpZ2h0IiwiZ3VpZGVCb3hSYXRpb0J5V2lkdGgiLCJfX2d1aWRlQm94UmF0aW9CeVdpZHRoIiwidmlkZW9SYXRpb0J5SGVpZ2h0IiwiX192aWRlb1JhdGlvQnlIZWlnaHQiLCJyZWR1Y2VkR3VpZGVCb3hXaWR0aCIsIl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbyIsInJlZHVjZWRHdWlkZUJveEhlaWdodCIsInZpZGVvSW5uZXJHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXNrQm94SW5uZXIiLCJyIiwiaXNOYU4iLCJtYXNrQm94SW5uZXJXaWR0aCIsIm1heCIsIm1hc2tCb3hJbm5lckhlaWdodCIsInN0b3BTY2FuIiwiX3RoaXMxNCIsIl9fcmVzb3VyY2VzTG9hZGVkIiwic2RrU3VwcG9ydEVudiIsImlzU3VwcG9ydFNpbWQiLCJlbnZJbmZvIiwib3MiLCJvc1NpbXBsZSIsImhvc3RuYW1lIiwidXJsIiwiZmV0Y2giLCJocmVmIiwidGhlbiIsInJlcyIsInRleHQiLCJyZWdleCIsInNvdXJjZSIsInJlcGxhY2UiLCJldmFsIiwib25SdW50aW1lSW5pdGlhbGl6ZWQiLCJfcmVmNSIsIl94IiwiX19zdGFydFNjYW5JbXBsIiwiX3RoaXMxNSIsIl9fZGV0ZWN0ZWQiLCJfX2FkZHJlc3MiLCJwYXJzZUludCIsInNjYW4iLCJfcmVmNiIsInNzYVJlc3VsdCIsInNzYVJlc3VsdExpc3QiLCJyZXNvbHV0aW9uX3ciLCJyZXNvbHV0aW9uX2giLCJpc0RldGVjdGVkQ2FyZCIsIl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlIiwicHVzaCIsInJldHJ5U3RhcnREYXRlIiwiRGF0ZSIsIml0ZW0iLCJfX2RldGVjdGVkQ2FyZFF1ZXVlIiwiX19zc2FSZXRyeUNvdW50IiwicmV0cnlXb3JraW5nVGltZSIsIl9fb25TdWNjZXNzUHJvY2VzcyIsIm9jcl90eXBlIiwib2NyX2RhdGEiLCJwYXJzZU9jclJlc3VsdCIsIm9jcl9vcmlnaW5faW1hZ2UiLCJvY3JfbWFza2luZ19pbWFnZSIsInNzYV9tb2RlIiwiX19yZWNvdmVyeVNjYW4iLCJzaGlmdCIsInJldmlld19yZXN1bHQiLCJhcGlfcmVzcG9uc2UiLCJyZXN1bHRDb2RlIiwiZXJyb3JEZXRhaWwiLCJzdGFjayIsImVycm9yX2RldGFpbCIsIl90aGlzMTYiLCJfdGhpczE3IiwiY2FudmFzQ29udGV4dCIsImNsZWFyUmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCIsInN0b3AiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJjbGVhclRpbWVvdXQiXSwic291cmNlcyI6WyJvY3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIGdsb2JhbC1tb2R1bGUgKi9cbmltcG9ydCBkZXRlY3RvciBmcm9tICcuL2hlbHBlcnMvZGV0ZWN0b3IuanMnO1xuaW1wb3J0IHBhcnNlciBmcm9tICcuL2hlbHBlcnMvcGFyc2VyLmpzJztcbmltcG9ydCB7IHNpbWQsIHRocmVhZHMgfSBmcm9tICcuL2hlbHBlcnMvd2FzbS1mZWF0dXJlLWRldGVjdC5qcyc7XG5sZXQgaW5zdGFuY2U7XG5jbGFzcyBVc2VCT0NSIHtcbiAgSU5fUFJPR1JFU1MgPSB7XG4gICAgTk9ORTogJ25vbmUnLFxuICAgIE5PVF9SRUFEWTogJ25vdF9yZWFkeScsXG4gICAgUkVBRFk6ICdyZWFkeScsXG4gICAgQ0FSRF9ERVRFQ1RfU1VDQ0VTUzogJ2RldGVjdF9zdWNjZXNzJyxcbiAgICBDQVJEX0RFVEVDVF9GQUlMRUQ6ICdkZXRlY3RfZmFpbGVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRDogJ3JlY29nbml6ZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOiAncmVjb2duaXplZF93aXRoX3NzYScsXG4gICAgT0NSX1NVQ0NFU1M6ICdvY3Jfc3VjY2VzcycsXG4gICAgT0NSX1NVQ0NFU1NfV0lUSF9TU0E6ICdvY3Jfc3VjY2Vzc193aXRoX3NzYScsXG4gICAgT0NSX0ZBSUxFRDogJ29jcl9mYWlsZWQnXG4gIH07XG4gIE9DUl9TVEFUVVMgPSB7XG4gICAgTk9UX1JFQURZOiAtMSxcbiAgICBSRUFEWTogMCxcbiAgICBPQ1JfU1VDQ0VTUzogMSxcbiAgICBET05FOiAyXG4gIH07XG4gIFBSRUxPQURJTkdfU1RBVFVTID0ge1xuICAgIE5PVF9TVEFSVEVEOiAtMSxcbiAgICBTVEFSVEVEOiAwLFxuICAgIERPTkU6IDFcbiAgfTtcblxuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cblxuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIF9fT0NSRW5naW5lID0gbnVsbDtcbiAgX19pbml0aWFsaXplZCA9IGZhbHNlO1xuICBfX3ByZWxvYWRlZCA9IGZhbHNlO1xuICBfX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEO1xuICBfX2xpY2Vuc2U7XG4gIF9fb2NyVHlwZSA9IG51bGw7XG4gIF9fc3NhTW9kZSA9IGZhbHNlO1xuICBfX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5OT1RfUkVBRFk7XG4gIF9fc3NhUmV0cnlDb3VudCA9IDA7XG4gIF9fZGV0ZWN0ZWRDYXJkUXVldWUgPSBbXTtcbiAgX19vblN1Y2Nlc3MgPSBudWxsO1xuICBfX29uRmFpbHVyZSA9IG51bGw7XG4gIF9fb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbDtcbiAgX19vY3JUeXBlTGlzdCA9IFsnaWRjYXJkJywgJ2RyaXZlcicsICdwYXNzcG9ydCcsICdmb3JlaWduLXBhc3Nwb3J0JywgJ2FsaWVuJywgJ2NyZWRpdCcsICdpZGNhcmQtc3NhJywgJ2RyaXZlci1zc2EnLCAncGFzc3BvcnQtc3NhJywgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJywgJ2FsaWVuLXNzYScsICdjcmVkaXQtc3NhJ107XG4gIF9fb2NyVHlwZVN0cmluZyA9IG5ldyBNYXAoW1tcIjFcIiwgXCJpZGNhcmRcIl0sIFtcIjJcIiwgXCJkcml2ZXJcIl0sIFtcIjNcIiwgXCJwYXNzcG9ydFwiXSwgW1wiNFwiLCBcImZvcmVpZ24tcGFzc3BvcnRcIl0sIFtcIjVcIiwgXCJhbGllblwiXSwgW1wiNS0xXCIsIFwiYWxpZW5cIl0sIFtcIjUtMlwiLCBcImFsaWVuXCJdLCBbXCI1LTNcIiwgXCJhbGllblwiXV0pO1xuICBfX3BhZ2VFbmQgPSBmYWxzZTtcbiAgX19vY3I7XG4gIF9fY2FudmFzO1xuICBfX3JvdGF0aW9uQ2FudmFzO1xuICBfX3ZpZGVvO1xuICBfX3ZpZGVvV3JhcDtcbiAgX19ndWlkZUJveDtcbiAgX19ndWlkZUJveFdyYXA7XG4gIF9fbWFza0JveFdyYXA7XG4gIF9fcHJldmVudFRvRnJlZXplVmlkZW87XG4gIF9fY3VzdG9tVUlXcmFwO1xuICBfX3RvcFVJO1xuICBfX21pZGRsZVVJO1xuICBfX2JvdHRvbVVJO1xuICBfX3ByZXZpZXdVSVdyYXA7XG4gIF9fcHJldmlld1VJO1xuICBfX3ByZXZpZXdJbWFnZTtcbiAgX19hZGRyZXNzID0gMDtcbiAgX19kZXRlY3RlZCA9IGZhbHNlO1xuICBfX0J1ZmZlciA9IG51bGw7XG4gIF9fcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgX19QcmV2SW1hZ2UgPSBudWxsO1xuICBfX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICBfX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gIF9fcmVzb2x1dGlvbldpZHRoID0gMDtcbiAgX19yZXNvbHV0aW9uSGVpZ2h0ID0gMDtcbiAgX192aWRlb1dpZHRoID0gMDtcbiAgX192aWRlb0hlaWdodCA9IDA7XG4gIF9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gIF9faW50ZXJ2YWxUaW1lcjtcbiAgX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyO1xuICBfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuICBfX3N0cmVhbTtcbiAgX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgX19mYWNpbmdNb2RlQ29uc3RyYWludCA9ICdlbnZpcm9ubWVudCc7XG4gIF9fdWlPcmllbnRhdGlvbiA9ICcnO1xuICBfX3ByZXZVaU9yaWVudGF0aW9uID0gJyc7XG4gIF9fdmlkZW9PcmllbnRhdGlvbiA9ICcnO1xuICBfX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5ID0gNTAwO1xuICBfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzID0gMzAwOyAvLyDsnoTsi5xcbiAgX19yZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7IC8vIOyehOyLnFxuICBfX2RldmljZUluZm87XG4gIF9faXNSb3RhdGVkOTBvcjI3MCA9IGZhbHNlO1xuICBfX2luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk7XG4gIF9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHRoaXMuSU5fUFJPR1JFU1MuTk9ORTtcbiAgX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgX19ndWlkZUJveFJhdGlvQnlXaWR0aCA9IDEuMDsgLy8g7IiY7KCV67aI6rCAXG4gIF9fdmlkZW9SYXRpb0J5SGVpZ2h0ID0gMC45OyAvLyDsiJjsoJXrtojqsIBcbiAgX19ndWlkZUJveFJlZHVjZVJhdGlvID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgX19jcm9wSW1hZ2VTaXplV2lkdGggPSAwO1xuICBfX2Nyb3BJbWFnZVNpemVIZWlnaHQgPSAwO1xuXG4gIC8qKiBEZWZhdWx0IG9wdGlvbnMgKi9cbiAgX19vcHRpb25zID0gbmV3IE9iamVjdCh7XG4gICAgc2hvd0NsaXBGcmFtZTogZmFsc2UsXG4gICAgc2hvd0NhbnZhc1ByZXZpZXc6IGZhbHNlLFxuICAgIHVzZVRvcFVJOiB0cnVlLFxuICAgIHVzZVRvcFVJVGV4dE1zZzogZmFsc2UsXG4gICAgdXNlTWlkZGxlVUk6IHRydWUsXG4gICAgdXNlTWlkZGxlVUlUZXh0TXNnOiB0cnVlLFxuICAgIHVzZUJvdHRvbVVJOiB0cnVlLFxuICAgIHVzZUJvdHRvbVVJVGV4dE1zZzogZmFsc2UsXG4gICAgdXNlUHJldmlld1VJOiB0cnVlLFxuICAgIGZyYW1lQm9yZGVyU3R5bGU6IHtcbiAgICAgIHdpZHRoOiA1LFxuICAgICAgc3R5bGU6ICdzb2xpZCcsXG4gICAgICByYWRpdXM6IDIwLFxuICAgICAgbm90X3JlYWR5OiAnIzAwMDAwMCcsXG4gICAgICAvLyDqsoDsoJVcbiAgICAgIHJlYWR5OiAnI2I4YjhiOCcsXG4gICAgICAvLyDtmozsg4lcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjNzI1YjY3JyxcbiAgICAgIC8vIOuztOudvFxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIO2VmOuKmFxuICAgICAgcmVjb2duaXplZDogJyMwMDNhYzInLFxuICAgICAgLy8g7YyM656RXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzAwM2FjMicsXG4gICAgICAvLyDtjIzrnpFcbiAgICAgIG9jcl9mYWlsZWQ6ICcjRkExMTNEJyxcbiAgICAgIC8vIOu5qOqwlVxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTRiMDBlJyxcbiAgICAgIC8vIOy0iOuhnVxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTRiMDBlJyAvLyDstIjroZ1cbiAgICB9LFxuXG4gICAgdXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2U6IHRydWUsXG4gICAgbWFza0ZyYW1lU3R5bGU6IHtcbiAgICAgIGNsaXBfZnJhbWU6ICcjZmYwMGJmJyxcbiAgICAgIC8vIOuUpe2NvO2UjCAo7IiY7KCV67aI6rCAKVxuICAgICAgYmFzZV9jb2xvcjogJyMzMzMzMzMnLFxuICAgICAgLy8g64uk7YGs6re466CI7J20ICjtiKzrqoXrj4TripQg7IiY7KCV67aI6rCAIGZm66GcIOqzoOyglSlcbiAgICAgIG5vdF9yZWFkeTogJyMzMzMzMzMnLFxuICAgICAgcmVhZHk6ICcjMzMzMzMzJyxcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjMzMzMzMzJyxcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICByZWNvZ25pemVkOiAnIzIyMjIyMicsXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzIyMjIyMicsXG4gICAgICBvY3JfZmFpbGVkOiAnIzExMTExMScsXG4gICAgICBvY3Jfc3VjY2VzczogJyMxMTExMTEnLFxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTExMTExJ1xuICAgIH0sXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgIGRldmljZUxhYmVsOiAnJyxcbiAgICB2aWRlb1RhcmdldElkOiAnJyxcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgICBzc2FNYXhSZXRyeUNvdW50OiAwXG4gIH0pO1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqIHB1YmxpYyBtZXRob2RzICovXG4gIGFzeW5jIHByZWxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRDtcbiAgICAgIGF3YWl0IHRoaXMuX19sb2FkUmVzb3VyY2VzKCk7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORTtcbiAgICAgIHRoaXMuX19wcmVsb2FkZWQgPSB0cnVlO1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLl9faW5pdGlhbGl6ZWQ7XG4gIH1cbiAgaXNQcmVsb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkZWQ7XG4gIH1cbiAgZ2V0UHJlbG9hZGluZ1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lO1xuICB9XG4gIGluaXQoc2V0dGluZ3MpIHtcbiAgICBpZiAoISEhc2V0dGluZ3MubGljZW5zZUtleSkgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIGtleSBpcyBlbXB0eScpO1xuICAgIHRoaXMuX19saWNlbnNlID0gc2V0dGluZ3MubGljZW5zZUtleTtcbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5fX29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy5fX3dpbmRvd0V2ZW50QmluZCgpO1xuICAgICAgdGhpcy5fX2RldmljZUluZm8gPSBkZXRlY3Rvci5nZXRPc1ZlcnNpb24oKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldE9wdGlvbihzZXR0aW5ncykge1xuICAgIHRoaXMuX19vcHRpb25zID0gc2V0dGluZ3M7XG4gIH1cbiAgZ2V0T3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucztcbiAgfVxuICBnZXRPY3JUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclR5cGVTdHJpbmcuZ2V0KHR5cGUpO1xuICB9XG4gIGdldFVJT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX191aU9yaWVudGF0aW9uO1xuICB9XG4gIGdldFZpZGVvT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICB9XG4gIGFzeW5jIHN0YXJ0T0NSKHR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsKSB7XG4gICAgaWYgKCEhIXR5cGUgfHwgISEhb25TdWNjZXNzIHx8ICEhIW9uRmFpbHVyZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fb2NyVHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fX3NzYU1vZGUgPSB0aGlzLl9fb2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMTtcbiAgICB0aGlzLl9fb25TdWNjZXNzID0gb25TdWNjZXNzO1xuICAgIHRoaXMuX19vbkZhaWx1cmUgPSBvbkZhaWx1cmU7XG4gICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZSA9IG9uSW5Qcm9ncmVzc0NoYW5nZTtcbiAgICBpZiAob25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlVG9wVUkpIHtcbiAgICAgICAgdGhpcy5fX3RvcFVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS50b3BVSTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkge1xuICAgICAgICB0aGlzLl9fbWlkZGxlVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm1pZGRsZVVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJKSB7XG4gICAgICAgIHRoaXMuX19ib3R0b21VSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuYm90dG9tVUk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW5pdGlhbGl6ZWQhJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCk7XG4gICAgICBpZiAoIXRoaXMuaXNQcmVsb2FkZWQoKSAmJiBwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX193YWl0UHJlbG9hZGVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5ET05FKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgYWJub3JtYWxseSBwcmVsb2FkaW5nIHN0YXR1cywgcHJlbG9hZGVkOiAke3RoaXMuaXNQcmVsb2FkZWQoKX0gLyBwcmVsb2FkaW5nU3RhdHVzOiAke3RoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9XG4gIH1cbiAgc3RvcE9DUigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICB0aGlzLl9fb25TdWNjZXNzID0gbnVsbDtcbiAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgfVxuICBhc3luYyByZXN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAvLyBhd2FpdCB0aGlzLnN0b3BPQ1IoKTtcbiAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICBhd2FpdCB0aGlzLnN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICB9XG5cbiAgLyoqIHByaXZhdGUgbWV0aG9kcyAqL1xuICBhc3luYyBfX3dhaXRQcmVsb2FkZWQoKSB7XG4gICAgbGV0IHdhaXRpbmdSZXRyeUNvdW50ID0gMDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YWl0aW5nUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9O1xuICAgICAgY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBfX3dpbmRvd0V2ZW50QmluZCgpIHtcbiAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgIGlmICgvaXBob25lfGlwb2R8aXBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgY29uc3Qgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSA9IGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzXy5fX3BhZ2VFbmQgPSB0cnVlO1xuICAgICAgX3RoaXNfLmNsZWFudXAoKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uX19vY3JUeXBlKSByZXR1cm47XG4gICAgICBpZiAoIV90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSkge1xuICAgICAgICBfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSB0cnVlO1xuICAgICAgICBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIF90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBfdGhpc18ucmVzdGFydE9DUihfdGhpc18uX19vY3JUeXBlLCBfdGhpc18uX19vblN1Y2Nlc3MsIF90aGlzXy5fX29uRmFpbHVyZSwgX3RoaXNfLl9fb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlUmVzaXplLCBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplRGVsYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cbiAgX19ibG9iVG9CYXNlNjQoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgfSk7XG4gIH1cbiAgLyoqIOudvOydtOyEvOyKpCDtgqTrpbwgaGVhcCDsl5AgYWxsb2NhdGlvbiAqL1xuICBfX2dldFN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKCEhIXRoaXMuX19saWNlbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMaWNlbnNlIEtleSBpcyBlbXB0eVwiKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLl9fT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOCh0aGlzLl9fbGljZW5zZSkgKyAxO1xuICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICB0aGlzLl9fT0NSRW5naW5lLnN0cmluZ1RvVVRGOCh0aGlzLl9fbGljZW5zZSwgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICByZXR1cm4gdGhpcy5fX3N0cmluZ09uV2FzbUhlYXA7XG4gIH1cbiAgX19zZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIGxldCByZXNvbHV0aW9uVGV4dCA9ICdub3QgcmVhZHknO1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgICByZXNvbHV0aW9uVGV4dFxuICAgICAgfTtcbiAgICB9XG4gICAgcmVzb2x1dGlvblRleHQgPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCArICd4JyArIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEwODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxOTIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxOTIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTA4MCkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMjgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gNzIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSA3MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMjgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9fdmlkZW9XaWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgIHRoaXMuX192aWRlb0hlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9O1xuICB9XG4gIF9fZ2V0U2Nhbm5lckFkZHJlc3Mob2NyVHlwZSkge1xuICAgIGlmICghdGhpcy5fX29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIGxldCBkZXN0cm95Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgY29uc3Qgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19nZXRTdHJpbmdPbldhc21IZWFwKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgLy8gT0NSXG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRJRENhcmRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUlEQ2FyZFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRQYXNzcG9ydFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95UGFzc3BvcnRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUFsaWVuU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0Q3JlZGl0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lDcmVkaXRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICBpZiAoYWRkcmVzcyA9PT0gMCkge1xuICAgICAgICBpZiAodGhpcy5fX21heFJldHJ5Q291bnRHZXRBZGRyZXNzID09PSB0aGlzLl9fcmV0cnlDb3VudEdldEFkZHJlc3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBMaWNlbnNlIEtleVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICB2b2lkIDA7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2dldEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2ModGhpcy5fX3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ICogNCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fX3Jlc3VsdEJ1ZmZlcikge1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYygyNTYpO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXMuX19CdWZmZXIsIHRoaXMuX19yZXN1bHRCdWZmZXJdO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlKGFkZHJlc3MsIG1hc2tNb2RlLCBjcm9wTW9kZSk7XG4gICAgICBjb25zdCBqcGdTaXplID0gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnU2l6ZSgpO1xuICAgICAgY29uc3QganBnUG9pbnRlciA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ0J1ZmZlcigpO1xuICAgICAgY29uc3QgcmVzdWx0VmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguYnVmZmVyLCBqcGdQb2ludGVyLCBqcGdTaXplKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHJlc3VsdFZpZXcpO1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXN1bHRdLCB7XG4gICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fX2Jsb2JUb0Jhc2U2NChibG9iKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lFbmNvZGVkSnBnKCk7XG4gICAgfVxuICB9XG4gIC8qKiBGcmVlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX0J1ZmZlcik7XG4gICAgICB0aGlzLl9fQnVmZmVyID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19yZXN1bHRCdWZmZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX3Jlc3VsdEJ1ZmZlcik7XG4gICAgICB0aGlzLl9fcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgUHJldkltYWdlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lQcmV2SW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuX19QcmV2SW1hZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX1ByZXZJbWFnZSk7XG4gICAgICB0aGlzLl9fUHJldkltYWdlID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIGZyZWUgc3RyaW5nIGhlYXAgYnVmZmVyICovXG4gIF9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIGZyZWUgc2Nhbm5lciBhZGRyZXNzICovXG4gIF9fZGVzdHJveVNjYW5uZXJBZGRyZXNzKCkge1xuICAgIGlmICh0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjaykge1xuICAgICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW9FbGVtZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9ID0gdGhpcy5fX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpO1xuICAgIGlmICghaXNTdXBwb3J0ZWRSZXNvbHV0aW9uKSB7XG4gICAgICBpZiAocmVzb2x1dGlvblRleHQgIT09ICdub3QgcmVhZHknKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzU3VwcG9ydGVkUmVzb2x1dGlvbjtcbiAgfVxuICBfX2dldFJvdGF0aW9uRGVncmVlKCkge1xuICAgIHJldHVybiAodGhpcy5fX29wdGlvbnMucm90YXRpb25EZWdyZWUgJSAzNjAgKyAzNjApICUgMzYwO1xuICB9XG4gIF9fZ2V0TWlycm9yTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX29wdGlvbnMubWlycm9yTW9kZTtcbiAgfVxuICBhc3luYyBfX2Nyb3BJbWFnZUZyb21WaWRlbygpIHtcbiAgICBpZiAoIXRoaXMuX19jYW1TZXRDb21wbGV0ZSkgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgICBsZXQgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICAvLyBzb3VyY2UgaW1hZ2UgKG9yIHZpZGVvKVxuICAgIC8vIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSKIHN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSD4pSI4pSI4pSI4pSIIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgc3ggIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogc0hlaWdodCAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiBjYW52YXNcbiAgICAvLyDilIMgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICAgICAgICDilIPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAgICAgICAgc1dpZHRoICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICDilIogZHkgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg+KUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgZHggICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogZEhlaWdodCDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICBkV2lkdGggICAgICAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHkpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL2RyYXdJbWFnZVxuXG4gICAgbGV0IGNhbGNDYW52YXMgPSBjYW52YXM7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCA9IHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGg7XG4gICAgbGV0IGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0ID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb247XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCwgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHRdID0gW2NhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0LCBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoXTtcbiAgICAgIFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFtjYWxjUmVzb2x1dGlvbl9oLCBjYWxjUmVzb2x1dGlvbl93XTtcbiAgICAgIGNhbGNDYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBjYWxjTWF4U1dpZHRoID0gOTk5OTk7XG4gICAgbGV0IGNhbGNNYXhTSGVpZ2h0ID0gOTk5OTk7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOyEuOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOyEuOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN4LCBzeTtcbiAgICBjb25zdCByYXRpbyA9IGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc1dpZHRoID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoICogcmF0aW8pLCBjYWxjTWF4U1dpZHRoKTtcbiAgICBjb25zdCBzSGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCAqIHJhdGlvKSwgY2FsY01heFNIZWlnaHQpO1xuICAgIHN4ID0gTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50V2lkdGggLSBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoKSAvIDIgKiByYXRpbyk7XG4gICAgc3kgPSBNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRIZWlnaHQgLSBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCkgLyAyICogcmF0aW8pO1xuICAgIGNvbnN0IGNhbGNDb250ZXh0ID0gY2FsY0NhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgIHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUuZGVidWcoJ3N4LCBzeSwgc1dpZHRoKHJlc29sdXRpb25fdyksIHNIZWlnaHQocmVzb2x1dGlvbl9oKSwgdmlkZW8udmlkZW9XaWR0aCwgdmlkZW8udmlkZW9IZWlnaHQnLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgdmlkZW8udmlkZW9XaWR0aCwgdmlkZW8udmlkZW9IZWlnaHQpO1xuICAgIGNhbGNDb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGEgPSBjYWxjQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faCk7XG4gICAgY29uc3QgaW1nRGF0YVVybCA9IGNhbGNDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fX3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCB0aGlzLl9fZ2V0Um90YXRpb25EZWdyZWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbaW1nRGF0YSwgaW1nRGF0YVVybF07XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIGRlZ3JlZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmIChkZWdyZWUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShbaW1nRGF0YSwgaW1nRGF0YVVybF0pO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gaW1nRGF0YVVybDtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIC8vIGNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGV4dCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGVtcENhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgaWYgKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcud2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWdyZWUgPT09IDkwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLmhlaWdodCwgMCk7ZWxzZSBpZiAoZGVncmVlID09PSAxODApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO2Vsc2UgaWYgKGRlZ3JlZSA9PT0gMjcwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoMCwgaW1nLndpZHRoKTtcbiAgICAgICAgdGVtcENvbnRleHQucm90YXRlKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHRlbXBDb250ZXh0KTtcbiAgICAgICAgcmVzb2x2ZShbbmV3SW1hZ2VEYXRhLCB0ZW1wQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpXSk7XG4gICAgICAgIHRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9faXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcywgYm94VHlwZSA9IDAsIHJldHJ5SW1nID0gbnVsbCkge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzIDwgMCkge1xuICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsZXQgaW1nRGF0YTtcbiAgICAgIGNvbnN0IFtidWZmZXJdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgICAgaWYgKHJldHJ5SW1nICE9PSBudWxsKSB7XG4gICAgICAgIGltZ0RhdGEgPSByZXRyeUltZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFtpbWdEYXRhXSA9IGF3YWl0IHRoaXMuX19jcm9wSW1hZ2VGcm9tVmlkZW8oKTtcbiAgICAgIH1cbiAgICAgIGlmICghISFpbWdEYXRhKSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGxdO1xuICAgICAgfVxuICAgICAgdGhpcy5fX09DUkVuZ2luZS5IRUFQOC5zZXQoaW1nRGF0YS5kYXRhLCBidWZmZXIpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5kZXRlY3RfaWRjYXJkKGJ1ZmZlciwgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIGFkZHJlc3MsIGJveFR5cGUpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQ2FyZGJveERldGVjdGVkIHJlc3VsdCAtPS0tLS0tJywgcmVzdWx0KVxuICAgICAgcmV0dXJuIFshIXJlc3VsdCwgaW1nRGF0YV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgc3NhTW9kZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWRkcmVzcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IGVsc2UgaWYgKGFkZHJlc3MgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnY2hlY2tWYWxpZGF0aW9uIEZhaWwnO1xuICAgICAgfVxuICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuX19vY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuSURDYXJkKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5QYXNzcG9ydChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQWxpZW4oYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgaWYgKG9jclJlc3VsdCA9PT0gbnVsbCB8fCBvY3JSZXN1bHQgPT09ICcnIHx8IG9jclJlc3VsdCA9PT0gJ2ZhbHNlJyB8fCBvY3JSZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCwgbnVsbF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY3JvcE1vZGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcImNyZWRpdFwiKSA+IC0xKSB7XG4gICAgICAgICAgY3JvcE1vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcmlnaW5JbWFnZSA9IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBmYWxzZSwgY3JvcE1vZGUpO1xuICAgICAgICBsZXQgbWFza0ltYWdlID0gYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRydWUsIGNyb3BNb2RlKTtcbiAgICAgICAgbWFza0ltYWdlID0gbWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZTtcbiAgICAgICAgaWYgKHNzYU1vZGUpIHtcbiAgICAgICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSwgZmFsc2UsIG1hc2tJbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX3N0YXJ0VHJ1dGgob2NyVHlwZSwgYWRkcmVzcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcIi1zc2FcIikgPiAtMSkge1xuICAgICAgICAvLyBUT0RPOiB3b3JrZXLrpbwg7IKs7Jqp7ZWY7JesIOuplOyduChVSSDrnpzrjZTrp4EpIOyKpOugiOuTnOqwgCDrqYjstpTsp4Ag7JWK64+E66GdIOyymOumrCDtlYTsmpQgKO2YhOyerCBsb2FkaW5nIFVJIOudhOyasOuptCDslaDri4jrqZTsnbTshZgg66mI7LakKVxuICAgICAgICAvLyBUT0RPOiBzZXRUaW1lb3V0IOycvOuhnCDrgpjriITrjZTrnbzrj4Qg7Zqo6rO8IOyXhuydjCBzZXRUaW1lb3V0IOyngOyasOqzoCwgd29ya2Vy66GcIOuzgOqyvSDtlYTsmpRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLl9fT0NSRW5naW5lLnNjYW5UcnV0aChhZGRyZXNzLCByZXN1bHRCdWZmZXIpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NTQSBNb2RlIGlzIHRydWUuIGJ1dCwgb2NyVHlwZSBpcyBpbnZhbGlkIDogJyArIG9jclR5cGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBhc3luYyBfX3N0YXJ0VHJ1dGhSZXRyeShvY3JUeXBlLCBhZGRyZXNzLCBpbWdEYXRhKSB7XG4gICAgYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDAsIGltZ0RhdGEpO1xuICAgIC8vIGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHRydWUpOyAgICAgIC8vIGZvciDshLHriqXsnYQg7JyE7ZW0IOynhO2WiSBYXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX19zdGFydFRydXRoKG9jclR5cGUsIGFkZHJlc3MpO1xuICB9XG4gIF9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy5fX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgYXN5bmMgX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy5fX29jclR5cGUuaW5jbHVkZXMoJ3Bhc3Nwb3J0Jyk7XG4gICAgICBhd2FpdCB0aGlzLl9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgIC8vIGNvbnN0IFt0cmFja10gPSB0aGlzLl9fc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW5fX2luaXRpYWxpemUgY2FwYWJpbGl0eScsIGNhcGFiaWxpdHkpO1xuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gdmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSB0aGlzLl9fc3RyZWFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEF2b2lkIHVzaW5nIHRoaXMgaW4gbmV3IGJyb3dzZXJzLCBhcyBpdCBpcyBnb2luZyBhd2F5LlxuICAgICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuX19zdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9IHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlby52aWRlb0hlaWdodCA8IDEgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9fYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgdmlkZW8ud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYW1lcmEgQWNjZXNzIFBlcm1pc3Npb24gaXMgbm90IGFsbG93ZWQnO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoXCJFNDAzXCIsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICB9IGVsc2UgaWYgKGUubmFtZSA9PT0gJ05vdFJlYWRhYmxlRXJyb3InKSB7XG4gICAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgICB0aGlzLl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpOyAvLyDsnqzqt4Ag7Zi47LacXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX19zZXRTdHlsZShlbCwgc3R5bGUpIHtcbiAgICBPYmplY3QuYXNzaWduKGVsLnN0eWxlLCBzdHlsZSk7XG4gIH1cbiAgX19jaGFuZ2VPQ1JTdGF0dXModmFsKSB7XG4gICAgc3dpdGNoICh2YWwpIHtcbiAgICAgIC8vIE9DUlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5OT1RfUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLlJFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLlJFQURZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRDpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1M6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0E6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRDpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5ET05FO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgX19jaGFuZ2VTdGFnZSh2YWwsIGZvcmNlVXBkYXRlID0gZmFsc2UsIHJlY29nbml6ZWRJbWFnZSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPT09IHZhbCAmJiBmb3JjZVVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2NoYW5nZU9DUlN0YXR1cyh2YWwpO1xuICAgIHRoaXMuX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIHRoaXMuX19pblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5zdHlsZSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXVxuICAgIH07XG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHN0eWxlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlKSB7XG4gICAgICBtYXNrQm94V3JhcD8ucXVlcnlTZWxlY3RvcihcIiNtYXNrQm94T3V0ZXJcIik/LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGVbdmFsXSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlVG9wVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlVG9wVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fdG9wVUksICd0b3AnLCB0aGlzLl9fb3B0aW9ucy51c2VUb3BVSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX19taWRkbGVVSSwgJ21pZGRsZScsIHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJIHx8IHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX2JvdHRvbVVJLCAnYm90dG9tJywgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9faGlkZVByZXZpZXdVSSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpIHtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSByZWNvZ25pemVkSW1hZ2U7XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogZ3VpZGVCb3guY2xpZW50V2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBndWlkZUJveC5jbGllbnRIZWlnaHQgKyAncHgnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld0ltYWdlLCBpbWdTdHlsZSk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSSwge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICB9XG4gIF9faGlkZVByZXZpZXdVSSgpIHtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSBcIlwiO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW5wdXREZXZpY2VzKGtpbmQsIGxhYmVsKSB7XG4gICAgLy8gdGhyb3cgZXJyb3IgaWYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IHtcbiAgICAgIGlmIChkZXZpY2Uua2luZCA9PT0gYCR7a2luZH1pbnB1dGAgJiYgZGV2aWNlLmdldENhcGFiaWxpdGllcykge1xuICAgICAgICBjb25zdCBjYXAgPSBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIGlmIChjYXA/LmZhY2luZ01vZGU/LmluY2x1ZGVzKHRoaXMuX19mYWNpbmdNb2RlQ29uc3RyYWludCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiB2aWRlb0RldmljZXMubGVuZ3RoIDw9IDEgPyB2aWRlb0RldmljZXMgOiB2aWRlb0RldmljZXMuZmlsdGVyKGRldmljZSA9PiBsYWJlbCA/IGRldmljZS5sYWJlbC5pbmNsdWRlcyhsYWJlbCkgOiB0cnVlKTtcbiAgfVxuICBjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLl9fdWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBpc0NoYW5nZWRcbiAgICB9O1xuICB9XG4gIF9fY2xlYXJDdXN0b21VSShvYmopIHtcbiAgICBvYmouaW5uZXJIVE1MID0gJyc7XG4gICAgb2JqLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShvYmosIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICB9XG4gIF9fc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoIW9jcikgdGhyb3cgbmV3IEVycm9yKFwib2NyIGRpdiBlbGVtZW50IGlzIG5vdCBleGlzdFwiKTtcbiAgICBpZiAodmlkZW9XcmFwKSB2aWRlb1dyYXAucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94V3JhcCkgZ3VpZGVCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmICh2aWRlbykgdmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGNhbnZhcykgY2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChyb3RhdGlvbkNhbnZhcykgcm90YXRpb25DYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94KSBndWlkZUJveC5yZW1vdmUoKTtcbiAgICBpZiAobWFza0JveFdyYXApIG1hc2tCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmIChwcmV2ZW50VG9GcmVlemVWaWRlbykgcHJldmVudFRvRnJlZXplVmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGN1c3RvbVVJV3JhcCkgY3VzdG9tVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAodG9wVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZVRvcFVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSSh0b3BVSSk7XG4gICAgaWYgKG1pZGRsZVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkobWlkZGxlVUkpO1xuICAgIGlmIChib3R0b21VSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKGJvdHRvbVVJKTtcbiAgICBpZiAocHJldmlld1VJV3JhcCkgcHJldmlld1VJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBwcmV2aWV3IFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAocHJldmlld1VJICYmICF0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKHByZXZpZXdVSSk7XG4gICAgY29uc3Qgcm90YXRpb25EZWdyZWUgPSB0aGlzLl9fZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA9IFs5MCwgMjcwXS5pbmNsdWRlcyhyb3RhdGlvbkRlZ3JlZSk7XG4gICAgbGV0IG9jclN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCBvY3JTdHlsZSk7XG4gICAgY29uc3Qgd3JhcFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyB2ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcbiAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH07XG4gICAgdmlkZW9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlkZW9XcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlb1dyYXAnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB7XG4gICAgICB3aGlsZSAodmlkZW9XcmFwLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdmlkZW9XcmFwLnJlbW92ZUNoaWxkKHZpZGVvV3JhcC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUobWFza0JveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgbGV0IG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZS5iYXNlX2NvbG9yICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLl9fb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICBtYXNrX2ZyYW1lID0gdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDwvc3ZnPlxcblwiICsgXCIgICAgPC9tYXNrPlxcblwiICsgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgKyBcIiAgICAgICAgICBmaWxsPSdcIiArIG1hc2tfZnJhbWUgKyBcIicgbWFzaz0ndXJsKCNtYXNrLXJlY3QpJz48L3JlY3Q+XFxuXCIgKyBcIiAgPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQ3NzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHZpZGVvU3R5bGUpO1xuICAgIHZpZGVvV3JhcC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgZ3VpZGVCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3VpZGVCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveFdyYXAnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChndWlkZUJveFdyYXApO1xuICAgIGd1aWRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94Jyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdub25lJyA6ICdkaXNwbGF5JyA6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzBweCcsXG4gICAgICB0b3A6ICczMHB4JyxcbiAgICAgIGJvcmRlcjogJ2dyZWVuIDJweCBzb2xpZCdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByb3RhdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJvdGF0aW9uQ2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdyb3RhdGlvbkNhbnZhcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShyb3RhdGlvbkNhbnZhcywge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdkaXNwbGF5JyA6ICdub25lJyA6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnYmx1ZSAycHggc29saWQnXG4gICAgfSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHJvdGF0aW9uQ2FudmFzKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2ZW50VG9GcmVlemVWaWRlbywge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206ICcxMCcsXG4gICAgICByaWdodDogJzEwJ1xuICAgIH0pO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLmlubmVySFRNTCA9IFwiXCIgKyBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcXFwiIHdpZHRoPVxcXCIzMnB4XFxcIiBoZWlnaHQ9XFxcIjMycHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCI+XFxuXCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiODRcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIwLjU1NTU1NTU1NTU1NTU1NTZzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiB2YWx1ZXM9XFxcIjEwOzBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImZpbGxcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJkaXNjcmV0ZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjg0XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiO1xuICAgIFwiPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKTtcbiAgICBjdXN0b21VSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXN0b21VSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2N1c3RvbVVJV3JhcCcpO1xuICAgIGNvbnN0IGN1c3RvbVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjdXN0b21VSVdyYXAsIGN1c3RvbVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY3VzdG9tVUlXcmFwKTtcblxuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJIOyCrOyaqSh1c2Up7Jes67aA7JmAIOq0gOqzhOyXhuydtCDsmIHsl63snYQg7J6h6riwIOychO2VtCwgZGl26rCAIOyXhuycvOuptCDsg53shLFcbiAgICAvLyBhZGp1c3RTdHlsZSgpIOyXkOyEnCDshLjrtoDsoIHsnbgg7IKs7J207KaI7JmAIOychOy5mOqwkiDrj5nsoIHsnLzroZwg7ISk7KCV65CoLlxuICAgIGlmICghdG9wVUkpIHtcbiAgICAgIHRvcFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndG9wVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKHRvcFVJKTtcbiAgICBpZiAoIW1pZGRsZVVJKSB7XG4gICAgICBtaWRkbGVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWlkZGxlVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21pZGRsZVVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZChtaWRkbGVVSSk7XG4gICAgaWYgKCFib3R0b21VSSkge1xuICAgICAgYm90dG9tVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJvdHRvbVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdib3R0b21VSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQoYm90dG9tVUkpO1xuICAgIHByZXZpZXdVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2aWV3VUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUlXcmFwJyk7XG4gICAgY29uc3QgcHJldmlld1VJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCBwcmV2aWV3VUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChwcmV2aWV3VUlXcmFwKTtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICBpZiAoIXByZXZpZXdVSSkge1xuICAgICAgICBwcmV2aWV3VUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJldmlld1VJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUknKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KTtcbiAgICAgIHByZXZpZXdVSVdyYXAuYXBwZW5kQ2hpbGQocHJldmlld1VJKTtcbiAgICAgIGlmICghcHJldmlld0ltYWdlKSB7XG4gICAgICAgIHByZXZpZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdJbWFnZScpO1xuICAgICAgICBwcmV2aWV3VUkuYXBwZW5kQ2hpbGQocHJldmlld0ltYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsb2FkaW5nIFVJIOychOy5mCDsnpDrpqzsnqHqsowg7ZWY6riwIOychO2VtFxuICAgIHRoaXMuX19hZGp1c3RTdHlsZSgpO1xuICAgIC8vIO2ZlOuptOqzvOuPhCDtmITsg4Eg7ZW06rKwXG4gICAgdGhpcy5fX3NldFN0eWxlKG9jciwge1xuICAgICAgZGlzcGxheTogJydcbiAgICB9KTtcbiAgICB0aGlzLl9fb2NyID0gb2NyO1xuICAgIHRoaXMuX19jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5fX3JvdGF0aW9uQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgdGhpcy5fX3ZpZGVvID0gdmlkZW87XG4gICAgdGhpcy5fX3ZpZGVvV3JhcCA9IHZpZGVvV3JhcDtcbiAgICB0aGlzLl9fZ3VpZGVCb3ggPSBndWlkZUJveDtcbiAgICB0aGlzLl9fZ3VpZGVCb3hXcmFwID0gZ3VpZGVCb3hXcmFwO1xuICAgIHRoaXMuX19tYXNrQm94V3JhcCA9IG1hc2tCb3hXcmFwO1xuICAgIHRoaXMuX19wcmV2ZW50VG9GcmVlemVWaWRlbyA9IHByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICAgIHRoaXMuX19jdXN0b21VSVdyYXAgPSBjdXN0b21VSVdyYXA7XG4gICAgdGhpcy5fX3RvcFVJID0gdG9wVUk7XG4gICAgdGhpcy5fX21pZGRsZVVJID0gbWlkZGxlVUk7XG4gICAgdGhpcy5fX2JvdHRvbVVJID0gYm90dG9tVUk7XG4gICAgdGhpcy5fX3ByZXZpZXdVSVdyYXAgPSBwcmV2aWV3VUlXcmFwO1xuICAgIHRoaXMuX19wcmV2aWV3VUkgPSBwcmV2aWV3VUk7XG4gICAgdGhpcy5fX3ByZXZpZXdJbWFnZSA9IHByZXZpZXdJbWFnZTtcbiAgICByZXR1cm4ge1xuICAgICAgb2NyLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICB2aWRlbyxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9O1xuICB9XG4gIGFzeW5jIF9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KSB7XG4gICAgLy8gd2FzbSDsnbjsi53shLHriqUg7LWc7KCB7ZmU65CcIO2VtOyDgeuPhFxuICAgIHRoaXMuX19yZXNvbHV0aW9uV2lkdGggPSAxMDgwO1xuICAgIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ID0gNzIwO1xuICAgIHRoaXMuX19jYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gdGhpcy5fX3NldHVwRG9tRWxlbWVudHMoKTtcbiAgICBsZXQgdmlkZW9EZXZpY2VzID0gYXdhaXQgdGhpcy5fX2dldElucHV0RGV2aWNlcygndmlkZW8nKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmlkZW9EZXZpY2VzIDo6ICcsIHZpZGVvRGV2aWNlcylcbiAgICBsZXQgZGV2aWNlSWRMaXN0ID0gdmlkZW9EZXZpY2VzLm1hcChkZXZpY2UgPT4gZGV2aWNlLmRldmljZUlkKTtcbiAgICB0aGlzLmNoZWNrVUlPcmllbnRhdGlvbigpO1xuICAgIGxldCBjb25zdHJhaW50V2lkdGgsIGNvbnN0cmFpbnRIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyB1aSA6IHBvcnRyYWl0XG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiAxMDgwIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuXG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogNzIwIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1aSA6IGxhbmRzY2FwZVxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgbWluOiAxMjgwXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIG1pbjogNzIwXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJhaW50cyA9IHtcbiAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHpvb206IHtcbiAgICAgICAgICBpZGVhbDogMVxuICAgICAgICB9LFxuICAgICAgICBmYWNpbmdNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6IHRoaXMuX19mYWNpbmdNb2RlQ29uc3RyYWludFxuICAgICAgICB9LFxuICAgICAgICBmb2N1c01vZGU6IHtcbiAgICAgICAgICBpZGVhbDogJ2NvbnRpbnVvdXMnXG4gICAgICAgIH0sXG4gICAgICAgIHdoaXRlQmFsYW5jZU1vZGU6IHtcbiAgICAgICAgICBpZGVhbDogJ2NvbnRpbnVvdXMnXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZUlkOiB2aWRlb0RldmljZXMubGVuZ3RoID8ge1xuICAgICAgICAgIGlkZWFsOiBkZXZpY2VJZExpc3RbZGV2aWNlSWRMaXN0Lmxlbmd0aCAtIDFdXG4gICAgICAgIH0gOiBudWxsLFxuICAgICAgICB3aWR0aDogY29uc3RyYWludFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnN0cmFpbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g7LWc7LSIIOynhOyehSDsnbTslrTshJwgdmlkZW9EZWl2Y2Ug66as7Iqk7Yq466W8IOqwgOyguOyYrCDsiJgg7JeG7Jy866m0LFxuICAgIC8vIGdldFVzZXJNZWRpYeulvCDsnoTsnZgg7Zi47Lac7ZWY7JesIOq2jO2VnOydhCDrsJvsnYDrkqQg64uk7IucIOqwgOyguOyYtFxuICAgIGlmICh2aWRlb0RldmljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9fc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICB2aWRlb0RldmljZXMgPSBhd2FpdCB0aGlzLl9fZ2V0SW5wdXREZXZpY2VzKCd2aWRlbycpO1xuICAgICAgZGV2aWNlSWRMaXN0ID0gdmlkZW9EZXZpY2VzLm1hcChkZXZpY2UgPT4gZGV2aWNlLmRldmljZUlkKTtcbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID0gdmlkZW9EZXZpY2VzLmxlbmd0aCA/IHtcbiAgICAgICAgaWRlYWw6IGRldmljZUlkTGlzdFtkZXZpY2VJZExpc3QubGVuZ3RoIC0gMV1cbiAgICAgIH0gOiBudWxsO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgZHVtcHRyYWNrID0gKFthLCBiXSwgdHJhY2spID0+XG4gICAgICAvLyAgIGAke2F9JHt0cmFjay5raW5kID09ICd2aWRlbycgPyAnQ2FtZXJhJyA6ICdNaWNyb3Bob25lJ30gKCR7dHJhY2sucmVhZHlTdGF0ZX0pOiAke3RyYWNrLmxhYmVsfSR7Yn1gO1xuXG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndmlkZW9UcmFja3MgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpXG4gICAgICAvLyBjb25zdCBzdHJlYW1TZXR0aW5ncyA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldFNldHRpbmdzKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtQ2FwYWJpbGl0aWVzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENhcGFiaWxpdGllcygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDb25zdHJhaW50cygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbVNldHRpbmdzIDo6ICcsIHN0cmVhbVNldHRpbmdzKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIC8gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCAvIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGFzcGVjdFJhdGlvIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5hc3BlY3RSYXRpbyk7XG5cbiAgICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICBbcm90YXRpb25DYW52YXMud2lkdGgsIHJvdGF0aW9uQ2FudmFzLmhlaWdodF0gPSBbdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2FkanVzdFN0eWxlKCkge1xuICAgIHZvaWQgMDtcbiAgICBjb25zdCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUlcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAvLyDquLDspIDsoJXrs7RcbiAgICBjb25zdCBiYXNlV2lkdGggPSA0MDA7XG4gICAgY29uc3QgYmFzZUhlaWdodCA9IDI2MDtcbiAgICBjb25zdCBzY2FubmVyRnJhbWVSYXRpbyA9IGJhc2VIZWlnaHQgLyBiYXNlV2lkdGg7IC8vIOyLoOu2hOymnSDruYTsnKhcblxuICAgIGxldCBndWlkZUJveFdpZHRoLCBndWlkZUJveEhlaWdodDtcbiAgICBsZXQgY2FsY09jckNsaWVudFdpZHRoID0gb2NyLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjT2NyQ2xpZW50SGVpZ2h0ID0gb2NyLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aDtcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBuZXdWaWRlb1dpZHRoID0gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgbGV0IG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy5fX2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuX192aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUlcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7Lm066mU652864+EIOyEuOuhnFxuICAgICAgICAvLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDruYTrlJTsmKQg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDruYTrlJTsmKTrpbwg6rCA66GcIFVJ7J2YIGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIC8vIOqwgOuhnCBVSSBoZWlnaHQg6riw7KSA7Jy866GcIOu5hOuUlOyYpOydmCB3aWR0aCDqs4TsgrBcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gbmV3VmlkZW9IZWlnaHQgKiAoY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9IZWlnaHQpO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOuKlCDruYTrlJTsmKTrpbwg7IS466GcIOq4sOykgOycvOuhnCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBuZXdWaWRlb0hlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCBoZWlnaHQg7YGs6riw66W8IFVJ7J2YIGhlaWdodCDquLDspIDsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIOy2leyGjFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGggPSBNYXRoLm1pbihndWlkZUJveFdpZHRoLCBuZXdWaWRlb1dpZHRoKTtcbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IE1hdGgubWluKGd1aWRlQm94SGVpZ2h0LCBuZXdWaWRlb0hlaWdodCk7XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94V2lkdGggPSBndWlkZUJveFdpZHRoICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hIZWlnaHQgKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBpZiAodG9wVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh0b3BVSSwge1xuICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnMTBweCcsXG4gICAgICAgICdoZWlnaHQnOiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICAgICdwYWRkaW5nJzogJzEwcHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgICAnaGVpZ2h0JzogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvV2lkdGggIT09IGNhbGNWaWRlb0NsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvSGVpZ2h0ICE9PSBjYWxjVmlkZW9DbGllbnRIZWlnaHQpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICBoZWlnaHQ6IG5ld1ZpZGVvSGVpZ2h0ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIjbWFza0JveElubmVyXCIpO1xuICAgIGxldCByID0gYm9yZGVyUmFkaXVzIC0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHIgPSByIDwgMCA/IDAgOiByO1xuICAgIGlmICghaXNOYU4ocmVkdWNlZEd1aWRlQm94V2lkdGgpICYmICFpc05hTihyZWR1Y2VkR3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lckhlaWdodCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBtYXNrQm94SW5uZXJXaWR0aCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIG1hc2tCb3hJbm5lckhlaWdodCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3gnLCBtYXNrQm94SW5uZXJXaWR0aCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3knLCBtYXNrQm94SW5uZXJIZWlnaHQgLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIHIgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeScsIHIgKyAnJyk7XG4gICAgfVxuICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRydWUpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX2Nsb3NlQ2FtZXJhKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cbiAgYXN5bmMgX19sb2FkUmVzb3VyY2VzKCkge1xuICAgIHZvaWQgMDtcbiAgICBpZiAodGhpcy5fX3Jlc291cmNlc0xvYWRlZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2RrU3VwcG9ydEVudiA9ICdxdXJhbSc7XG4gICAgbGV0IGlzU3VwcG9ydFNpbWQgPSBhd2FpdCBzaW1kKCk7XG4gICAgbGV0IGVudkluZm8gPSAnJztcbiAgICBlbnZJbmZvICs9IGBvcyA6ICR7dGhpcy5fX2RldmljZUluZm8ub3N9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBvc1NpbXBsZSA6ICR7dGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGV9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBzaW1kKHdhc20tZmVhdHVyZS1kZXRlY3QpIDogJHtpc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgaWYgKHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnSU9TJyB8fCB0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZSA9PT0gJ01BQycpIHtcbiAgICAgIGlzU3VwcG9ydFNpbWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZW52SW5mbyArPSBgaXNTdXBwb3J0U2ltZChmaW5hbCkgOiAke2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBVc2VyQWdlbnQgOiAke25hdmlnYXRvci51c2VyQWdlbnR9XFxuYDtcbiAgICBpZiAoaXNTdXBwb3J0U2ltZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgc2RrU3VwcG9ydEVudiArPSAnX3NpbWQuanMnO1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ29jci1kZW1vLXRlc3QudXNlYi5jby5rcicpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBzZGtTdXBwb3J0RW52ICs9ICcuanMnO1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ29jci1kZW1vLXRlc3QudXNlYi5jby5rcicpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNka1N1cHBvcnRFbnYsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xuICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG5cbiAgICAgIC8vIGRhdGEobW9kZWwpXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcKGZ1bmN0aW9uXFwoXFwpIFxcey9tLCAndmFyIGNyZWF0ZU1vZGVsRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnLCAnICAgcmVqZWN0KCk7XFxuJyArICcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgfSwgaGFuZGxlRXJyb3IpJywgJyAgcmVzb2x2ZSgpO1xcbicgKyAnICB9LCBoYW5kbGVFcnJvciknKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFx9XFwpXFwoXFwpOy9tLCAnXFxuIH0pXFxuJyArICd9OycpO1xuXG4gICAgICAvLyB3YXNtXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgncXVyYW0ud2FzbScsIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWYpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL1JFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXXF1cmFtXFwuZGF0YVtcIiddL2dtLCBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwiJHtuZXcgVVJMKCdxdXJhbS5kYXRhJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmfVwiYCk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnZnVuY3Rpb24gY3JlYXRlV2FzbScsICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnaW5zdGFudGlhdGVBc3luYygpOycsICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7Jyk7XG5cbiAgICAgIC8vIHdhc20gYW5kIGRhdGEobW9kZWwpIGZpbGUg67OR66Cs66GcIGZldGNoIO2VmOq4sCDsnITtlbRcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gc3RhcnRcIilcXG4nICsgJ2F3YWl0IChhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkV2FzbSA9IGZhbHNlO1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWREYXRhID0gZmFsc2U7XFxuJyArICcgICAgY3JlYXRlV2FzbSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkV2FzbSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkRGF0YSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KTtcXG4nICsgJyAgICBjcmVhdGVNb2RlbERhdGEoKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZERhdGEgPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZFdhc20pIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSlcXG4nICsgJyAgfSk7XFxuJyArICd9KSgpO1xcbicgKyAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIGVuZFwiKScpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9KTtcbiAgICBzcmMgPSBgXG4gICAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgJHtzcmN9XG4gICAgICBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4ID0gbGVuZ3RoQnl0ZXNVVEY4XG4gICAgICBNb2R1bGUuc3RyaW5nVG9VVEY4ID0gc3RyaW5nVG9VVEY4XG4gICAgICByZXR1cm4gTW9kdWxlXG4gICAgfSkoKVxuICAgICAgICBgO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCA9IGFzeW5jIF8gPT4ge1xuICAgICAgdm9pZCAwO1xuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpO1xuICAgIHRoaXMuX19yZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX3N0YXJ0U2NhbkltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX19kZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fX2FkZHJlc3MgPSAwO1xuICAgICAgdGhpcy5fX3BhZ2VFbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPSBpc05hTihwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSkgPyAwIDogcGFyc2VJbnQodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCk7XG4gICAgICBjb25zdCBzY2FuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsLFxuICAgICAgICAgICAgaW1nRGF0YVVybCA9IG51bGwsXG4gICAgICAgICAgICBtYXNrSW1hZ2UgPSBudWxsLFxuICAgICAgICAgICAgc3NhUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdExpc3QgPSBbXTtcblxuICAgICAgICAgIC8vIHRoaXMuX19jaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgaWYgKCF0aGlzLl9fT0NSRW5naW5lWydhc20nXSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVE9ETyA6IOyEpOygle2VoOyImCDsnojqsowg67OA6rK9IGRlZmF1bHQg6rCS64+EIOygnOqztVxuICAgICAgICAgIGNvbnN0IFtyZXNvbHV0aW9uX3csIHJlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHZpZGVvXG4gICAgICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICAgICAgaWYgKHJlc29sdXRpb25fdyA9PT0gMCB8fCByZXNvbHV0aW9uX2ggPT09IDApIHJldHVybjtcbiAgICAgICAgICBpZiAodGhpcy5fX2RldGVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYmVmb3JlIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuICAgICAgICAgIGlmICh0aGlzLl9fYWRkcmVzcyA9PT0gMCAmJiAhdGhpcy5fX3BhZ2VFbmQgJiYgdGhpcy5fX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpIHtcbiAgICAgICAgICAgIFt0aGlzLl9fYWRkcmVzcywgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2tdID0gdGhpcy5fX2dldFNjYW5uZXJBZGRyZXNzKHRoaXMuX19vY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl9fYWRkcmVzcyB8fCB0aGlzLl9fcGFnZUVuZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGFmdGVyIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPCB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIE9DUiDsmYTro4wg7J207KCEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgICAgY29uc3QgW2lzRGV0ZWN0ZWRDYXJkLCBpbWdEYXRhXSA9IGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZCh0aGlzLl9fYWRkcmVzcywgMCk7XG4gICAgICAgICAgICBpZiAoIWlzRGV0ZWN0ZWRDYXJkKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAgIT09IHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9GQUlMRUQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FyZCBpcyBkZXRlY3RlZFxuICAgICAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUyk7XG5cbiAgICAgICAgICAgIC8vIHNzYSByZXRyeSDshKTsoJXsnbQg65CY7Ja0IOyeiOycvOuptCwgY2FyZCBkZXRlY3Qg7ISx6rO17IucIOydtOuvuOyngCDsoIDsnqVcbiAgICAgICAgICAgIGlmICh0aGlzLl9fc3NhTW9kZSAmJiB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlXSA9IGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKHRoaXMuX19hZGRyZXNzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fX29jclN0YXR1cyA+PSB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIG9jciDsmYTro4wg7J207ZuEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBmYWlsdXJlIGNhc2VcbiAgICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT0NSIFN0YXR1cyBpcyAke3RoaXMuX19vY3JTdGF0dXN9LCBidXQgb2NyUmVzdWx0IGlzIGZhbHNlYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7IC8vIE9DUiDsmYTro4wg7Iuc7KCQ7JeQIGNhbWVyYSBwcmV2aWV3IG9mZlxuXG4gICAgICAgICAgICBpZiAodGhpcy5fX3NzYU1vZGUpIHtcbiAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAvLyDstZzstIgg7Iuc64+EXG4gICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoKHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcyk7XG4gICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0cnlTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQuaW5kZXhPZihcIkZBS0VcIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc3NhUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoUmV0cnkodGhpcy5fX29jclR5cGUsIHRoaXMuX19hZGRyZXNzLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIltFUlJdIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGxcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3NhUmVzdWx0TGlzdC5wdXNoKHNzYVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0cnlXb3JraW5nVGltZSA9IG5ldyBEYXRlKCkgLSByZXRyeVN0YXJ0RGF0ZTtcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLl9fb25TdWNjZXNzUHJvY2Vzcyh7XG4gICAgICAgICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgICAgICAgb2NyX2RhdGE6IHBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLl9fc3NhUmV0cnlDb3VudCwgc3NhUmVzdWx0TGlzdCksXG4gICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBtYXNrSW1hZ2UsXG4gICAgICAgICAgICAgIHNzYV9tb2RlOiB0aGlzLl9fc3NhTW9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvcic7XG4gICAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IFwiOiBcIiArIGUubWVzc2FnZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKFwiV0EwMDFcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgdGhpcy5fX2RldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX19kZXRlY3RlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8g7J6s6reAXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZXRUaW1lb3V0KHNjYW4sIDEpOyAvLyBVSSDrnpzrjZTrp4EgYmxvY2tpbmcg67Cp7KeAIChzZXRUaW1lb3V0KVxuICAgIH0pO1xuICB9XG5cbiAgX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUoaW1nRGF0YSkge1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUubGVuZ3RoID09PSBwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSkge1xuICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnNoaWZ0KCk7XG4gICAgfVxuICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5wdXNoKGltZ0RhdGEpO1xuICAgIHZvaWQgMDsgLy8gc2hvdWxkIGJlIHJlbW92ZWRcbiAgfVxuXG4gIF9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KSB7XG4gICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgIGlmIChyZXZpZXdfcmVzdWx0LnNzYV9tb2RlKSB7XG4gICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogXCJOMTAwXCIsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogXCJPSy5cIlxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiByZXZpZXdfcmVzdWx0XG4gICAgfTtcbiAgICBpZiAodGhpcy5fX29uU3VjY2Vzcykge1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgX19vbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgIGxldCBlcnJvckRldGFpbCA9IFwiXCI7XG4gICAgaWYgKGU/LnRvU3RyaW5nKCkpIGVycm9yRGV0YWlsICs9IGUudG9TdHJpbmcoKTtcbiAgICBpZiAoZT8uc3RhY2spIGVycm9yRGV0YWlsICs9IGUuc3RhY2s7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogcmVzdWx0Q29kZSxcbiAgICAgICAgXCJyZXN1bHRfbWVzc2FnZVwiOiBlcnJvck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwiZmFpbGVkXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiB7XG4gICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgZXJyb3JfZGV0YWlsOiBlcnJvckRldGFpbFxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vbkZhaWx1cmUpIHtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fc3RhcnRTY2FuKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5JbXBsKCk7XG4gICAgdm9pZCAwO1xuICB9XG4gIGFzeW5jIF9fcmVjb3ZlcnlTY2FuKCkge1xuICAgIHZvaWQgMDtcbiAgICB0aGlzLl9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW4oKTtcbiAgfVxuICBzdG9wU2NhbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgc3RvcFN0cmVhbSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmICh0aGlzLl9fc3RyZWFtKSB7XG4gICAgICB0aGlzLl9fc3RyZWFtLnN0b3AgJiYgdGhpcy5fX3N0cmVhbS5zdG9wKCk7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0cmVhbSA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiDrqZTrqqjrpqwgYWxsb2NhdGlvbiBmcmVlIO2VqOyImCAqL1xuICBjbGVhbnVwKCkge1xuICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKTtcbiAgICB0aGlzLl9fZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuX19kZXN0cm95UHJldkltYWdlKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCk7XG4gIH1cbiAgX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgaWYgKHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlQk9DUjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsUUFBUSxNQUFNLHVCQUF1QjtBQUM1QyxPQUFPQyxNQUFNLE1BQU0scUJBQXFCO0FBQ3hDLFNBQVNDLElBQUksRUFBRUMsT0FBTyxRQUFRLGtDQUFrQztBQUNoRSxJQUFJQyxRQUFRO0FBQ1osTUFBTUMsT0FBTyxDQUFDO0VBeUJaOztFQUVBOztFQXdEaUM7RUFDTDs7RUFNRTtFQUNGO0VBQ0M7O0VBSTdCOztFQTBEQTtFQUNBQyxXQUFXQSxDQUFBLEVBQUc7SUFBQUMsZUFBQSxzQkExSkE7TUFDWkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsU0FBUyxFQUFFLFdBQVc7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLG1CQUFtQixFQUFFLGdCQUFnQjtNQUNyQ0Msa0JBQWtCLEVBQUUsZUFBZTtNQUNuQ0MsY0FBYyxFQUFFLFlBQVk7TUFDNUJDLHVCQUF1QixFQUFFLHFCQUFxQjtNQUM5Q0MsV0FBVyxFQUFFLGFBQWE7TUFDMUJDLG9CQUFvQixFQUFFLHNCQUFzQjtNQUM1Q0MsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUFBVixlQUFBLHFCQUNZO01BQ1hFLFNBQVMsRUFBRSxDQUFDLENBQUM7TUFDYkMsS0FBSyxFQUFFLENBQUM7TUFDUkssV0FBVyxFQUFFLENBQUM7TUFDZEcsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUFBWCxlQUFBLDRCQUNtQjtNQUNsQlksV0FBVyxFQUFFLENBQUMsQ0FBQztNQUNmQyxPQUFPLEVBQUUsQ0FBQztNQUNWRixJQUFJLEVBQUU7SUFDUixDQUFDO0lBQUFYLGVBQUEsc0JBS2EsSUFBSTtJQUFBQSxlQUFBLHdCQUNGLEtBQUs7SUFBQUEsZUFBQSxzQkFDUCxLQUFLO0lBQUFBLGVBQUEsNkJBQ0UsSUFBSSxDQUFD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
