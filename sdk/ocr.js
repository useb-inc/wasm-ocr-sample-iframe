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
      bodyBackgroundColor: '#000000',
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

    // background color setting
    document.body.style.backgroundColor = mergedOptions.bodyBackgroundColor;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJzaW1kIiwidGhyZWFkcyIsImluc3RhbmNlIiwiVXNlQk9DUiIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiTk9ORSIsIk5PVF9SRUFEWSIsIlJFQURZIiwiQ0FSRF9ERVRFQ1RfU1VDQ0VTUyIsIkNBUkRfREVURUNUX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsImJvZHlCYWNrZ3JvdW5kQ29sb3IiLCJ1c2VUb3BVSSIsInVzZVRvcFVJVGV4dE1zZyIsInVzZU1pZGRsZVVJIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUkiLCJ1c2VCb3R0b21VSVRleHRNc2ciLCJ1c2VQcmV2aWV3VUkiLCJmcmFtZUJvcmRlclN0eWxlIiwid2lkdGgiLCJzdHlsZSIsInJhZGl1cyIsIm5vdF9yZWFkeSIsInJlYWR5IiwiZGV0ZWN0X2ZhaWxlZCIsImRldGVjdF9zdWNjZXNzIiwicmVjb2duaXplZCIsInJlY29nbml6ZWRfd2l0aF9zc2EiLCJvY3JfZmFpbGVkIiwib2NyX3N1Y2Nlc3MiLCJvY3Jfc3VjY2Vzc193aXRoX3NzYSIsInVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlIiwibWFza0ZyYW1lU3R5bGUiLCJjbGlwX2ZyYW1lIiwiYmFzZV9jb2xvciIsInJlc291cmNlQmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiZGV2aWNlTGFiZWwiLCJ2aWRlb1RhcmdldElkIiwicm90YXRpb25EZWdyZWUiLCJtaXJyb3JNb2RlIiwic3NhTWF4UmV0cnlDb3VudCIsInByZWxvYWRpbmciLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiaXNQcmVsb2FkZWQiLCJfX3ByZWxvYWRpbmdTdGF0dXMiLCJfX2xvYWRSZXNvdXJjZXMiLCJfX3ByZWxvYWRlZCIsImlzSW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVkIiwiZ2V0UHJlbG9hZGluZ1N0YXR1cyIsImdldE9DUkVuZ2luZSIsIl9fT0NSRW5naW5lIiwiaW5pdCIsInNldHRpbmdzIiwibGljZW5zZUtleSIsIkVycm9yIiwiX19saWNlbnNlIiwibWVyZ2VkT3B0aW9ucyIsIl8iLCJtZXJnZSIsIl9fb3B0aW9ucyIsInNldE9wdGlvbiIsImRvY3VtZW50IiwiYm9keSIsImJhY2tncm91bmRDb2xvciIsIl9fd2luZG93RXZlbnRCaW5kIiwiX19kZXZpY2VJbmZvIiwiZ2V0T3NWZXJzaW9uIiwiZ2V0T3B0aW9uIiwiZ2V0T2NyVHlwZSIsInR5cGUiLCJfX29jclR5cGVTdHJpbmciLCJnZXQiLCJnZXRVSU9yaWVudGF0aW9uIiwiX191aU9yaWVudGF0aW9uIiwiZ2V0VmlkZW9PcmllbnRhdGlvbiIsIl9fdmlkZW9PcmllbnRhdGlvbiIsInN0YXJ0T0NSIiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiX2FyZ3VtZW50cyIsImFyZ3VtZW50cyIsIl90aGlzMiIsIm9uSW5Qcm9ncmVzc0NoYW5nZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9fb2NyVHlwZSIsIl9fc3NhTW9kZSIsImluZGV4T2YiLCJfX29uU3VjY2VzcyIsIl9fb25GYWlsdXJlIiwiX19vbkluUHJvZ3Jlc3NDaGFuZ2UiLCJfX3RvcFVJIiwiZ2V0T0NSRWxlbWVudHMiLCJ0b3BVSSIsIl9fbWlkZGxlVUkiLCJtaWRkbGVVSSIsIl9fYm90dG9tVUkiLCJib3R0b21VSSIsIl9fY2hhbmdlU3RhZ2UiLCJwcmVsb2FkaW5nU3RhdHVzIiwiX193YWl0UHJlbG9hZGVkIiwiY29uY2F0IiwiX19zdGFydFNjYW4iLCJlIiwic3RvcE9DUiIsImNsZWFudXAiLCJfX2Nsb3NlQ2FtZXJhIiwicmVzdGFydE9DUiIsIm9jclR5cGUiLCJfdGhpczMiLCJfdGhpczQiLCJ3YWl0aW5nUmV0cnlDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hlY2siLCJzZXRUaW1lb3V0IiwiX3RoaXNfIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwic2tpcFRvdWNoQWN0aW9uZm9yWm9vbSIsImV2IiwidG91Y2hlcyIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJvbmJlZm9yZXVubG9hZCIsIl9fcGFnZUVuZCIsImhhbmRsZVJlc2l6ZSIsIl9yZWYyIiwiX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUiLCJfX3Rocm90dGxpbmdSZXNpemVUaW1lciIsImFwcGx5IiwiX190aHJvdHRsaW5nUmVzaXplRGVsYXkiLCJfX3NsZWVwIiwibXMiLCJfX2Jsb2JUb0Jhc2U2NCIsImJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIl9fZ2V0U3RyaW5nT25XYXNtSGVhcCIsImxlbmd0aEJ5dGVzIiwibGVuZ3RoQnl0ZXNVVEY4IiwiX19zdHJpbmdPbldhc21IZWFwIiwiX21hbGxvYyIsInN0cmluZ1RvVVRGOCIsIl9fc2V0VmlkZW9SZXNvbHV0aW9uIiwidmlkZW9FbGVtZW50IiwiaXNTdXBwb3J0ZWRSZXNvbHV0aW9uIiwicmVzb2x1dGlvblRleHQiLCJfX2NhbVNldENvbXBsZXRlIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0Iiwic3JjT2JqZWN0IiwiX192aWRlb1dpZHRoIiwiX192aWRlb0hlaWdodCIsIl9fZ2V0U2Nhbm5lckFkZHJlc3MiLCJfX29jclR5cGVMaXN0IiwiaW5jbHVkZXMiLCJhZGRyZXNzIiwiZGVzdHJveUNhbGxiYWNrIiwic3RyaW5nT25XYXNtSGVhcCIsImdldElEQ2FyZFNjYW5uZXIiLCJkZXN0cm95SURDYXJkU2Nhbm5lciIsImdldFBhc3Nwb3J0U2Nhbm5lciIsImRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIiLCJnZXRBbGllblNjYW5uZXIiLCJkZXN0cm95QWxpZW5TY2FubmVyIiwiZ2V0Q3JlZGl0U2Nhbm5lciIsImRlc3Ryb3lDcmVkaXRTY2FubmVyIiwiX2ZyZWUiLCJfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzIiwiX19yZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9fZ2V0QnVmZmVyIiwiX19CdWZmZXIiLCJfX3Jlc29sdXRpb25XaWR0aCIsIl9fcmVzb2x1dGlvbkhlaWdodCIsIl9fcmVzdWx0QnVmZmVyIiwiX19nZXRJbWFnZUJhc2U2NCIsIm1hc2tNb2RlIiwiY3JvcE1vZGUiLCJfdGhpczUiLCJlbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UiLCJqcGdTaXplIiwiZ2V0RW5jb2RlZEpwZ1NpemUiLCJqcGdQb2ludGVyIiwiZ2V0RW5jb2RlZEpwZ0J1ZmZlciIsInJlc3VsdFZpZXciLCJVaW50OEFycmF5IiwiSEVBUDgiLCJidWZmZXIiLCJCbG9iIiwiZGVzdHJveUVuY29kZWRKcGciLCJfX2Rlc3Ryb3lCdWZmZXIiLCJfX2Rlc3Ryb3lQcmV2SW1hZ2UiLCJfX1ByZXZJbWFnZSIsIl9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAiLCJfX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcyIsIl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayIsIl9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlIiwiX19nZXRSb3RhdGlvbkRlZ3JlZSIsIl9fZ2V0TWlycm9yTW9kZSIsIl9fY3JvcEltYWdlRnJvbVZpZGVvIiwiX3RoaXM2IiwiY2FsY1Jlc29sdXRpb25fdyIsImNhbGNSZXNvbHV0aW9uX2giLCJ2aWRlbyIsImNhbnZhcyIsInJvdGF0aW9uQ2FudmFzIiwiY2FsY0NhbnZhcyIsImNhbGNWaWRlb1dpZHRoIiwiY2FsY1ZpZGVvSGVpZ2h0IiwiY2FsY1ZpZGVvQ2xpZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbGNWaWRlb0NsaWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImNhbGNDcm9wSW1hZ2VTaXplV2lkdGgiLCJfX2Nyb3BJbWFnZVNpemVXaWR0aCIsImNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0IiwiX19jcm9wSW1hZ2VTaXplSGVpZ2h0IiwiY2FsY1ZpZGVvT3JpZW50YXRpb24iLCJfX2lzUm90YXRlZDkwb3IyNzAiLCJjYWxjTWF4U1dpZHRoIiwiY2FsY01heFNIZWlnaHQiLCJzeCIsInN5IiwicmF0aW8iLCJzV2lkdGgiLCJNYXRoIiwibWluIiwicm91bmQiLCJzSGVpZ2h0IiwiY2FsY0NvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lsbFJlYWRGcmVxdWVudGx5IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsImltZ0RhdGFVcmwiLCJ0b0RhdGFVUkwiLCJfX3JvdGF0ZSIsImRlZ3JlZSIsImltZyIsIkltYWdlIiwic3JjIiwidGVtcENhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZW1wQ29udGV4dCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiUEkiLCJuZXdJbWFnZURhdGEiLCJyZXN0b3JlIiwiX19pc0NhcmRib3hEZXRlY3RlZCIsIl9hcmd1bWVudHMyIiwiX3RoaXM3IiwiYm94VHlwZSIsInJldHJ5SW1nIiwic2V0IiwiZGF0YSIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfX3N0YXJ0UmVjb2duaXRpb24iLCJzc2FNb2RlIiwiX3RoaXM4Iiwib2NyUmVzdWx0IiwicmVzdWx0QnVmZmVyIiwic2NhbklEQ2FyZCIsInNjYW5QYXNzcG9ydCIsInNjYW5BbGllbiIsInNjYW5DcmVkaXQiLCJvcmlnaW5JbWFnZSIsIm1hc2tJbWFnZSIsIl9fc3RhcnRUcnV0aCIsInJlamVjdCIsInNjYW5UcnV0aCIsIl9fc3RhcnRUcnV0aFJldHJ5IiwiX3RoaXM5IiwiX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX3RoaXMxMCIsIl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiIsIl90aGlzMTEiLCJpc1Bhc3Nwb3J0IiwiX19zZXR1cFZpZGVvIiwiX19zdHJlYW0iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwbGF5IiwiX19hZGp1c3RTdHlsZSIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwibmFtZSIsImVycm9yTWVzc2FnZSIsIl9fb25GYWlsdXJlUHJvY2VzcyIsInN0b3BTdHJlYW0iLCJfX3NldFN0eWxlIiwiZWwiLCJhc3NpZ24iLCJfX2NoYW5nZU9DUlN0YXR1cyIsInZhbCIsIl9fb2NyU3RhdHVzIiwiZm9yY2VVcGRhdGUiLCJyZWNvZ25pemVkSW1hZ2UiLCJfX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAiLCJfX2luUHJvZ3Jlc3NTdGVwIiwiZ3VpZGVCb3giLCJtYXNrQm94V3JhcCIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsIl9tYXNrQm94V3JhcCRxdWVyeVNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJjYWxsIiwiZGlzcGxheSIsIl9fdXBkYXRlUHJldmlld1VJIiwiX19oaWRlUHJldmlld1VJIiwicHJldmlld1VJIiwicHJldmlld0ltYWdlIiwiaW1nU3R5bGUiLCJfX2dldElucHV0RGV2aWNlcyIsImtpbmQiLCJsYWJlbCIsIl90aGlzMTIiLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsInZpZGVvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImdldENhcGFiaWxpdGllcyIsIl9jYXAkZmFjaW5nTW9kZSIsImNhcCIsImZhY2luZ01vZGUiLCJfX2ZhY2luZ01vZGVDb25zdHJhaW50IiwiY2hlY2tVSU9yaWVudGF0aW9uIiwiY3VycmVudCIsIm9jciIsImlzQ2hhbmdlZCIsIl9fcHJldlVpT3JpZW50YXRpb24iLCJfX2NsZWFyQ3VzdG9tVUkiLCJvYmoiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfX3NldHVwRG9tRWxlbWVudHMiLCJ2aWRlb1dyYXAiLCJndWlkZUJveFdyYXAiLCJwcmV2ZW50VG9GcmVlemVWaWRlbyIsImN1c3RvbVVJV3JhcCIsInByZXZpZXdVSVdyYXAiLCJyZW1vdmUiLCJvY3JTdHlsZSIsIndyYXBTdHlsZSIsIm1hcmdpbiIsIm92ZXJmbG93IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJtYXNrX2ZyYW1lIiwidmlkZW9TdHlsZSIsInJvdGF0ZUNzcyIsIm1pcnJvckNzcyIsInJvdGF0ZUFuZE1pcnJvckNzcyIsIl9vYmplY3RTcHJlYWQiLCJjYW52YXNTdHlsZSIsImxlZnQiLCJ0b3AiLCJib3JkZXIiLCJyaWdodCIsImJvdHRvbSIsImN1c3RvbVVJV3JhcFN0eWxlIiwicHJldmlld1VJV3JhcFN0eWxlIiwiX19vY3IiLCJfX2NhbnZhcyIsIl9fcm90YXRpb25DYW52YXMiLCJfX3ZpZGVvIiwiX192aWRlb1dyYXAiLCJfX2d1aWRlQm94IiwiX19ndWlkZUJveFdyYXAiLCJfX21hc2tCb3hXcmFwIiwiX19wcmV2ZW50VG9GcmVlemVWaWRlbyIsIl9fY3VzdG9tVUlXcmFwIiwiX19wcmV2aWV3VUlXcmFwIiwiX19wcmV2aWV3VUkiLCJfX3ByZXZpZXdJbWFnZSIsIl90aGlzMTMiLCJkZXZpY2VJZExpc3QiLCJtYXAiLCJkZXZpY2VJZCIsImNvbnN0cmFpbnRXaWR0aCIsImNvbnN0cmFpbnRIZWlnaHQiLCJpZGVhbCIsImNvbnN0cmFpbnRzIiwiYXVkaW8iLCJ6b29tIiwiZm9jdXNNb2RlIiwid2hpdGVCYWxhbmNlTW9kZSIsInN0cmVhbSIsImdldFVzZXJNZWRpYSIsImJhc2VXaWR0aCIsImJhc2VIZWlnaHQiLCJzY2FubmVyRnJhbWVSYXRpbyIsImd1aWRlQm94V2lkdGgiLCJndWlkZUJveEhlaWdodCIsImNhbGNPY3JDbGllbnRXaWR0aCIsImNhbGNPY3JDbGllbnRIZWlnaHQiLCJuZXdWaWRlb1dpZHRoIiwibmV3VmlkZW9IZWlnaHQiLCJndWlkZUJveFJhdGlvQnlXaWR0aCIsIl9fZ3VpZGVCb3hSYXRpb0J5V2lkdGgiLCJ2aWRlb1JhdGlvQnlIZWlnaHQiLCJfX3ZpZGVvUmF0aW9CeUhlaWdodCIsInJlZHVjZWRHdWlkZUJveFdpZHRoIiwiX19ndWlkZUJveFJlZHVjZVJhdGlvIiwicmVkdWNlZEd1aWRlQm94SGVpZ2h0IiwidmlkZW9Jbm5lckdhcCIsIm1hc2tCb3hJbm5lciIsInIiLCJpc05hTiIsIm1hc2tCb3hJbm5lcldpZHRoIiwibWF4IiwibWFza0JveElubmVySGVpZ2h0Iiwic3RvcFNjYW4iLCJfdGhpczE0IiwiX19yZXNvdXJjZXNMb2FkZWQiLCJzZGtTdXBwb3J0RW52IiwiaXNTdXBwb3J0U2ltZCIsImVudkluZm8iLCJvcyIsIm9zU2ltcGxlIiwiaG9zdG5hbWUiLCJ1cmwiLCJmZXRjaCIsImhyZWYiLCJ0aGVuIiwicmVzIiwidGV4dCIsInJlZ2V4Iiwic291cmNlIiwicmVwbGFjZSIsImV2YWwiLCJvblJ1bnRpbWVJbml0aWFsaXplZCIsIl9yZWY1IiwiX3giLCJfX3N0YXJ0U2NhbkltcGwiLCJfdGhpczE1IiwiX19kZXRlY3RlZCIsIl9fYWRkcmVzcyIsInBhcnNlSW50Iiwic2NhbiIsIl9yZWY2Iiwic3NhUmVzdWx0Iiwic3NhUmVzdWx0TGlzdCIsInJlc29sdXRpb25fdyIsInJlc29sdXRpb25faCIsImlzRGV0ZWN0ZWRDYXJkIiwiX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUiLCJwdXNoIiwicmV0cnlTdGFydERhdGUiLCJEYXRlIiwiaXRlbSIsIl9fZGV0ZWN0ZWRDYXJkUXVldWUiLCJfX3NzYVJldHJ5Q291bnQiLCJyZXRyeVdvcmtpbmdUaW1lIiwiX19vblN1Y2Nlc3NQcm9jZXNzIiwib2NyX3R5cGUiLCJvY3JfZGF0YSIsInBhcnNlT2NyUmVzdWx0Iiwib2NyX29yaWdpbl9pbWFnZSIsIm9jcl9tYXNraW5nX2ltYWdlIiwic3NhX21vZGUiLCJfX3JlY292ZXJ5U2NhbiIsInNoaWZ0IiwicmV2aWV3X3Jlc3VsdCIsImFwaV9yZXNwb25zZSIsInJlc3VsdENvZGUiLCJlcnJvckRldGFpbCIsInN0YWNrIiwiZXJyb3JfZGV0YWlsIiwiX3RoaXMxNiIsIl90aGlzMTciLCJjYW52YXNDb250ZXh0IiwiY2xlYXJSZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VzIjpbIm9jci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogZ2xvYmFsLW1vZHVsZSAqL1xuaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgcGFyc2VyIGZyb20gJy4vaGVscGVycy9wYXJzZXIuanMnO1xuaW1wb3J0IHsgc2ltZCwgdGhyZWFkcyB9IGZyb20gJy4vaGVscGVycy93YXNtLWZlYXR1cmUtZGV0ZWN0LmpzJztcbmxldCBpbnN0YW5jZTtcbmNsYXNzIFVzZUJPQ1Ige1xuICBJTl9QUk9HUkVTUyA9IHtcbiAgICBOT05FOiAnbm9uZScsXG4gICAgTk9UX1JFQURZOiAnbm90X3JlYWR5JyxcbiAgICBSRUFEWTogJ3JlYWR5JyxcbiAgICBDQVJEX0RFVEVDVF9TVUNDRVNTOiAnZGV0ZWN0X3N1Y2Nlc3MnLFxuICAgIENBUkRfREVURUNUX0ZBSUxFRDogJ2RldGVjdF9mYWlsZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEOiAncmVjb2duaXplZCcsXG4gICAgT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6ICdyZWNvZ25pemVkX3dpdGhfc3NhJyxcbiAgICBPQ1JfU1VDQ0VTUzogJ29jcl9zdWNjZXNzJyxcbiAgICBPQ1JfU1VDQ0VTU19XSVRIX1NTQTogJ29jcl9zdWNjZXNzX3dpdGhfc3NhJyxcbiAgICBPQ1JfRkFJTEVEOiAnb2NyX2ZhaWxlZCdcbiAgfTtcbiAgT0NSX1NUQVRVUyA9IHtcbiAgICBOT1RfUkVBRFk6IC0xLFxuICAgIFJFQURZOiAwLFxuICAgIE9DUl9TVUNDRVNTOiAxLFxuICAgIERPTkU6IDJcbiAgfTtcbiAgUFJFTE9BRElOR19TVEFUVVMgPSB7XG4gICAgTk9UX1NUQVJURUQ6IC0xLFxuICAgIFNUQVJURUQ6IDAsXG4gICAgRE9ORTogMVxuICB9O1xuXG4gIC8qKiBwdWJsaWMgcHJvcGVydGllcyAqL1xuXG4gIC8qKiBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgX19PQ1JFbmdpbmUgPSBudWxsO1xuICBfX2luaXRpYWxpemVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQ7XG4gIF9fbGljZW5zZTtcbiAgX19vY3JUeXBlID0gbnVsbDtcbiAgX19zc2FNb2RlID0gZmFsc2U7XG4gIF9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgX19zc2FSZXRyeUNvdW50ID0gMDtcbiAgX19kZXRlY3RlZENhcmRRdWV1ZSA9IFtdO1xuICBfX29uU3VjY2VzcyA9IG51bGw7XG4gIF9fb25GYWlsdXJlID0gbnVsbDtcbiAgX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsO1xuICBfX29jclR5cGVMaXN0ID0gWydpZGNhcmQnLCAnZHJpdmVyJywgJ3Bhc3Nwb3J0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnYWxpZW4nLCAnY3JlZGl0JywgJ2lkY2FyZC1zc2EnLCAnZHJpdmVyLXNzYScsICdwYXNzcG9ydC1zc2EnLCAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLCAnYWxpZW4tc3NhJywgJ2NyZWRpdC1zc2EnXTtcbiAgX19vY3JUeXBlU3RyaW5nID0gbmV3IE1hcChbW1wiMVwiLCBcImlkY2FyZFwiXSwgW1wiMlwiLCBcImRyaXZlclwiXSwgW1wiM1wiLCBcInBhc3Nwb3J0XCJdLCBbXCI0XCIsIFwiZm9yZWlnbi1wYXNzcG9ydFwiXSwgW1wiNVwiLCBcImFsaWVuXCJdLCBbXCI1LTFcIiwgXCJhbGllblwiXSwgW1wiNS0yXCIsIFwiYWxpZW5cIl0sIFtcIjUtM1wiLCBcImFsaWVuXCJdXSk7XG4gIF9fcGFnZUVuZCA9IGZhbHNlO1xuICBfX29jcjtcbiAgX19jYW52YXM7XG4gIF9fcm90YXRpb25DYW52YXM7XG4gIF9fdmlkZW87XG4gIF9fdmlkZW9XcmFwO1xuICBfX2d1aWRlQm94O1xuICBfX2d1aWRlQm94V3JhcDtcbiAgX19tYXNrQm94V3JhcDtcbiAgX19wcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgX19jdXN0b21VSVdyYXA7XG4gIF9fdG9wVUk7XG4gIF9fbWlkZGxlVUk7XG4gIF9fYm90dG9tVUk7XG4gIF9fcHJldmlld1VJV3JhcDtcbiAgX19wcmV2aWV3VUk7XG4gIF9fcHJldmlld0ltYWdlO1xuICBfX2FkZHJlc3MgPSAwO1xuICBfX2RldGVjdGVkID0gZmFsc2U7XG4gIF9fQnVmZmVyID0gbnVsbDtcbiAgX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICBfX1ByZXZJbWFnZSA9IG51bGw7XG4gIF9fc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gIF9fY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgX19yZXNvbHV0aW9uV2lkdGggPSAwO1xuICBfX3Jlc29sdXRpb25IZWlnaHQgPSAwO1xuICBfX3ZpZGVvV2lkdGggPSAwO1xuICBfX3ZpZGVvSGVpZ2h0ID0gMDtcbiAgX19yZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgX19pbnRlcnZhbFRpbWVyO1xuICBfX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXI7XG4gIF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQ7XG4gIF9fc3RyZWFtO1xuICBfX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICBfX2ZhY2luZ01vZGVDb25zdHJhaW50ID0gJ2Vudmlyb25tZW50JztcbiAgX191aU9yaWVudGF0aW9uID0gJyc7XG4gIF9fcHJldlVpT3JpZW50YXRpb24gPSAnJztcbiAgX192aWRlb09yaWVudGF0aW9uID0gJyc7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgX190aHJvdHRsaW5nUmVzaXplRGVsYXkgPSA1MDA7XG4gIF9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPSAzMDA7IC8vIOyehOyLnFxuICBfX3JldHJ5Q291bnRHZXRBZGRyZXNzID0gMDsgLy8g7J6E7IucXG4gIF9fZGV2aWNlSW5mbztcbiAgX19pc1JvdGF0ZWQ5MG9yMjcwID0gZmFsc2U7XG4gIF9faW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTtcbiAgX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT05FO1xuICBfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICBfX2d1aWRlQm94UmF0aW9CeVdpZHRoID0gMS4wOyAvLyDsiJjsoJXrtojqsIBcbiAgX192aWRlb1JhdGlvQnlIZWlnaHQgPSAwLjk7IC8vIOyImOygleu2iOqwgFxuICBfX2d1aWRlQm94UmVkdWNlUmF0aW8gPSAwLjg7IC8vIOyImOygleu2iOqwgFxuICBfX2Nyb3BJbWFnZVNpemVXaWR0aCA9IDA7XG4gIF9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IDA7XG5cbiAgLyoqIERlZmF1bHQgb3B0aW9ucyAqL1xuICBfX29wdGlvbnMgPSBuZXcgT2JqZWN0KHtcbiAgICBzaG93Q2xpcEZyYW1lOiBmYWxzZSxcbiAgICBzaG93Q2FudmFzUHJldmlldzogZmFsc2UsXG4gICAgYm9keUJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxuICAgIHVzZVRvcFVJOiB0cnVlLFxuICAgIHVzZVRvcFVJVGV4dE1zZzogZmFsc2UsXG4gICAgdXNlTWlkZGxlVUk6IHRydWUsXG4gICAgdXNlTWlkZGxlVUlUZXh0TXNnOiB0cnVlLFxuICAgIHVzZUJvdHRvbVVJOiB0cnVlLFxuICAgIHVzZUJvdHRvbVVJVGV4dE1zZzogZmFsc2UsXG4gICAgdXNlUHJldmlld1VJOiB0cnVlLFxuICAgIGZyYW1lQm9yZGVyU3R5bGU6IHtcbiAgICAgIHdpZHRoOiA1LFxuICAgICAgc3R5bGU6ICdzb2xpZCcsXG4gICAgICByYWRpdXM6IDIwLFxuICAgICAgbm90X3JlYWR5OiAnIzAwMDAwMCcsXG4gICAgICAvLyDqsoDsoJVcbiAgICAgIHJlYWR5OiAnI2I4YjhiOCcsXG4gICAgICAvLyDtmozsg4lcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjNzI1YjY3JyxcbiAgICAgIC8vIOuztOudvFxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIO2VmOuKmFxuICAgICAgcmVjb2duaXplZDogJyMwMDNhYzInLFxuICAgICAgLy8g7YyM656RXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzAwM2FjMicsXG4gICAgICAvLyDtjIzrnpFcbiAgICAgIG9jcl9mYWlsZWQ6ICcjRkExMTNEJyxcbiAgICAgIC8vIOu5qOqwlVxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTRiMDBlJyxcbiAgICAgIC8vIOy0iOuhnVxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTRiMDBlJyAvLyDstIjroZ1cbiAgICB9LFxuXG4gICAgdXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2U6IHRydWUsXG4gICAgbWFza0ZyYW1lU3R5bGU6IHtcbiAgICAgIGNsaXBfZnJhbWU6ICcjZmYwMGJmJyxcbiAgICAgIC8vIOuUpe2NvO2UjCAo7IiY7KCV67aI6rCAKVxuICAgICAgYmFzZV9jb2xvcjogJyMzMzMzMzMnLFxuICAgICAgLy8g64uk7YGs6re466CI7J20ICjtiKzrqoXrj4TripQg7IiY7KCV67aI6rCAIGZm66GcIOqzoOyglSlcbiAgICAgIG5vdF9yZWFkeTogJyMzMzMzMzMnLFxuICAgICAgcmVhZHk6ICcjMzMzMzMzJyxcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjMzMzMzMzJyxcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICByZWNvZ25pemVkOiAnIzIyMjIyMicsXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzIyMjIyMicsXG4gICAgICBvY3JfZmFpbGVkOiAnIzExMTExMScsXG4gICAgICBvY3Jfc3VjY2VzczogJyMxMTExMTEnLFxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTExMTExJ1xuICAgIH0sXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgIGRldmljZUxhYmVsOiAnJyxcbiAgICB2aWRlb1RhcmdldElkOiAnJyxcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgICBzc2FNYXhSZXRyeUNvdW50OiAwXG4gIH0pO1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqIHB1YmxpYyBtZXRob2RzICovXG4gIGFzeW5jIHByZWxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRDtcbiAgICAgIGF3YWl0IHRoaXMuX19sb2FkUmVzb3VyY2VzKCk7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORTtcbiAgICAgIHRoaXMuX19wcmVsb2FkZWQgPSB0cnVlO1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLl9faW5pdGlhbGl6ZWQ7XG4gIH1cbiAgaXNQcmVsb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkZWQ7XG4gIH1cbiAgZ2V0UHJlbG9hZGluZ1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lO1xuICB9XG4gIGluaXQoc2V0dGluZ3MpIHtcbiAgICBpZiAoISEhc2V0dGluZ3MubGljZW5zZUtleSkgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIGtleSBpcyBlbXB0eScpO1xuICAgIHRoaXMuX19saWNlbnNlID0gc2V0dGluZ3MubGljZW5zZUtleTtcbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5fX29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG5cbiAgICAvLyBiYWNrZ3JvdW5kIGNvbG9yIHNldHRpbmdcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG1lcmdlZE9wdGlvbnMuYm9keUJhY2tncm91bmRDb2xvcjtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aGlzLl9fd2luZG93RXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLl9fZGV2aWNlSW5mbyA9IGRldGVjdG9yLmdldE9zVmVyc2lvbigpO1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgc2V0T3B0aW9uKHNldHRpbmdzKSB7XG4gICAgdGhpcy5fX29wdGlvbnMgPSBzZXR0aW5ncztcbiAgfVxuICBnZXRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vcHRpb25zO1xuICB9XG4gIGdldE9jclR5cGUodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9fb2NyVHlwZVN0cmluZy5nZXQodHlwZSk7XG4gIH1cbiAgZ2V0VUlPcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX3VpT3JpZW50YXRpb247XG4gIH1cbiAgZ2V0VmlkZW9PcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb247XG4gIH1cbiAgYXN5bmMgc3RhcnRPQ1IodHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSA9IG51bGwpIHtcbiAgICBpZiAoISEhdHlwZSB8fCAhISFvblN1Y2Nlc3MgfHwgISEhb25GYWlsdXJlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX19vY3JUeXBlID0gdHlwZTtcbiAgICB0aGlzLl9fc3NhTW9kZSA9IHRoaXMuX19vY3JUeXBlLmluZGV4T2YoJy1zc2EnKSA+IC0xO1xuICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG4gICAgdGhpcy5fX29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlID0gb25JblByb2dyZXNzQ2hhbmdlO1xuICAgIGlmIChvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSkge1xuICAgICAgICB0aGlzLl9fdG9wVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnRvcFVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJKSB7XG4gICAgICAgIHRoaXMuX19taWRkbGVVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkubWlkZGxlVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHtcbiAgICAgICAgdGhpcy5fX2JvdHRvbVVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5ib3R0b21VSTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbml0aWFsaXplZCEnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKTtcbiAgICAgIGlmICghdGhpcy5pc1ByZWxvYWRlZCgpICYmIHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBhd2FpdCB0aGlzLnByZWxvYWRpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLlNUQVJURUQpIHtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX3dhaXRQcmVsb2FkZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkUpIHtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhYm5vcm1hbGx5IHByZWxvYWRpbmcgc3RhdHVzLCBwcmVsb2FkZWQ6ICR7dGhpcy5pc1ByZWxvYWRlZCgpfSAvIHByZWxvYWRpbmdTdGF0dXM6ICR7dGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCl9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW4oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuc3RvcE9DUigpO1xuICAgIH1cbiAgfVxuICBzdG9wT0NSKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBudWxsO1xuICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICB9XG4gIGFzeW5jIHJlc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgIC8vIGF3YWl0IHRoaXMuc3RvcE9DUigpO1xuICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIGF3YWl0IHRoaXMuc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gIH1cblxuICAvKiogcHJpdmF0ZSBtZXRob2RzICovXG4gIGFzeW5jIF9fd2FpdFByZWxvYWRlZCgpIHtcbiAgICBsZXQgd2FpdGluZ1JldHJ5Q291bnQgPSAwO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ByZWxvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhaXRpbmdSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH07XG4gICAgICBjaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIF9fd2luZG93RXZlbnRCaW5kKCkge1xuICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKC9pcGhvbmV8aXBvZHxpcGFkLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBjb25zdCBza2lwVG91Y2hBY3Rpb25mb3Jab29tID0gZXYgPT4ge1xuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXNfLl9fcGFnZUVuZCA9IHRydWU7XG4gICAgICBfdGhpc18uY2xlYW51cCgpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy5fX29jclR5cGUpIHJldHVybjtcbiAgICAgIGlmICghX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplKSB7XG4gICAgICAgIF90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IHRydWU7XG4gICAgICAgIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IF90aGlzXy5yZXN0YXJ0T0NSKF90aGlzXy5fX29jclR5cGUsIF90aGlzXy5fX29uU3VjY2VzcywgX3RoaXNfLl9fb25GYWlsdXJlLCBfdGhpc18uX19vbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIpIHtcbiAgICAgICAgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dChoYW5kbGVSZXNpemUsIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVEZWxheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19zbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxuICBfX2Jsb2JUb0Jhc2U2NChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICB9KTtcbiAgfVxuICAvKiog65287J207IS87IqkIO2CpOulvCBoZWFwIOyXkCBhbGxvY2F0aW9uICovXG4gIF9fZ2V0U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAoISEhdGhpcy5fX2xpY2Vuc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkxpY2Vuc2UgS2V5IGlzIGVtcHR5XCIpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGhCeXRlcyA9IHRoaXMuX19PQ1JFbmdpbmUubGVuZ3RoQnl0ZXNVVEY4KHRoaXMuX19saWNlbnNlKSArIDE7XG4gICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MobGVuZ3RoQnl0ZXMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KHRoaXMuX19saWNlbnNlLCB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCwgbGVuZ3RoQnl0ZXMpO1xuICAgIHJldHVybiB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcDtcbiAgfVxuICBfX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgbGV0IHJlc29sdXRpb25UZXh0ID0gJ25vdCByZWFkeSc7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX192aWRlb1dpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgdGhpcy5fX3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH07XG4gIH1cbiAgX19nZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGFkZHJlc3MgPSAwO1xuICAgICAgbGV0IGRlc3Ryb3lDYWxsYmFjayA9IG51bGw7XG4gICAgICBjb25zdCBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX2dldFN0cmluZ09uV2FzbUhlYXAoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95SURDYXJkU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRBbGllblNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95QWxpZW5TY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUNyZWRpdFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIExpY2Vuc2UgS2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcysrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFthZGRyZXNzLCBkZXN0cm95Q2FsbGJhY2tdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gOiBMaWNlbnNlIElzc3Vl7J24IOqyveyasCDsl5Drn6wg6rCS7J2EIOuwm+yVhOyEnCBlcnJvciDroZzqt7jrpbwg7LCN7J2EIOyImCDsnojqsowg7JqU7LKt7ZWE7JqUICjsnoTsi5wgTuuyiCDsnbTsg4EgYWRkcmVzc+ulvCDrqrvrsJvsnLzrqbQg6rCV7KCcIOyXkOufrClcbiAgICAgIHZvaWQgMDtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fZ2V0QnVmZmVyKCkge1xuICAgIGlmICghdGhpcy5fX0J1ZmZlcikge1xuICAgICAgdGhpcy5fX0J1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyh0aGlzLl9fcmVzb2x1dGlvbldpZHRoICogdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgKiA0KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9fcmVzdWx0QnVmZmVyKSB7XG4gICAgICB0aGlzLl9fcmVzdWx0QnVmZmVyID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKDI1Nik7XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy5fX0J1ZmZlciwgdGhpcy5fX3Jlc3VsdEJ1ZmZlcl07XG4gIH1cbiAgYXN5bmMgX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKTtcbiAgICAgIGNvbnN0IGpwZ1NpemUgPSB0aGlzLl9fT0NSRW5naW5lLmdldEVuY29kZWRKcGdTaXplKCk7XG4gICAgICBjb25zdCBqcGdQb2ludGVyID0gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnQnVmZmVyKCk7XG4gICAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fX09DUkVuZ2luZS5IRUFQOC5idWZmZXIsIGpwZ1BvaW50ZXIsIGpwZ1NpemUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0Vmlldyk7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3VsdF0sIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9fYmxvYlRvQmFzZTY0KGJsb2IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUVuY29kZWRKcGcoKTtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgYnVmZmVyICovXG4gIF9fZGVzdHJveUJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX0J1ZmZlcikge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fQnVmZmVyKTtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX3Jlc3VsdEJ1ZmZlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fcmVzdWx0QnVmZmVyKTtcbiAgICAgIHRoaXMuX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogRnJlZSBQcmV2SW1hZ2UgYnVmZmVyICovXG4gIF9fZGVzdHJveVByZXZJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5fX1ByZXZJbWFnZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fUHJldkltYWdlKTtcbiAgICAgIHRoaXMuX19QcmV2SW1hZ2UgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogZnJlZSBzdHJpbmcgaGVhcCBidWZmZXIgKi9cbiAgX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApO1xuICAgICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogZnJlZSBzY2FubmVyIGFkZHJlc3MgKi9cbiAgX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrKSB7XG4gICAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuICBfX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlb0VsZW1lbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH0gPSB0aGlzLl9fc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFJlc29sdXRpb24pIHtcbiAgICAgIGlmIChyZXNvbHV0aW9uVGV4dCAhPT0gJ25vdCByZWFkeScpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSZXNvbHV0aW9uO1xuICB9XG4gIF9fZ2V0Um90YXRpb25EZWdyZWUoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9fb3B0aW9ucy5yb3RhdGlvbkRlZ3JlZSAlIDM2MCArIDM2MCkgJSAzNjA7XG4gIH1cbiAgX19nZXRNaXJyb3JNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucy5taXJyb3JNb2RlO1xuICB9XG4gIGFzeW5jIF9fY3JvcEltYWdlRnJvbVZpZGVvKCkge1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSByZXR1cm4gW251bGwsIG51bGxdO1xuICAgIGxldCBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcblxuICAgIC8vIHNvdXJjZSBpbWFnZSAob3IgdmlkZW8pXG4gICAgLy8g4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIogc3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIPilIjilIjilIjilIgg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyBzeCAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBzSGVpZ2h0ICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uIGNhbnZhc1xuICAgIC8vIOKUgyAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgICAgICAgIOKUg+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICAgICAgICDilIMgICAg4pSKICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICAgICAgICBzV2lkdGggICAgICAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiBkeSAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyAgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSD4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICBkeCAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBkSGVpZ2h0IOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgIGRXaWR0aCAgICAgICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJtcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSlcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQvZHJhd0ltYWdlXG5cbiAgICBsZXQgY2FsY0NhbnZhcyA9IGNhbnZhcztcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgPSB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoLCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodF0gPSBbY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQsIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGhdO1xuICAgICAgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW2NhbGNSZXNvbHV0aW9uX2gsIGNhbGNSZXNvbHV0aW9uX3ddO1xuICAgICAgY2FsY0NhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgbGV0IGNhbGNNYXhTV2lkdGggPSA5OTk5OTtcbiAgICBsZXQgY2FsY01heFNIZWlnaHQgPSA5OTk5OTtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3gsIHN5O1xuICAgIGNvbnN0IHJhdGlvID0gY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBjb25zdCBzV2lkdGggPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplV2lkdGggKiByYXRpbyksIGNhbGNNYXhTV2lkdGgpO1xuICAgIGNvbnN0IHNIZWlnaHQgPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0ICogcmF0aW8pLCBjYWxjTWF4U0hlaWdodCk7XG4gICAgc3ggPSBNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRXaWR0aCAtIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGgpIC8gMiAqIHJhdGlvKTtcbiAgICBzeSA9IE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudEhlaWdodCAtIGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0KSAvIDIgKiByYXRpbyk7XG4gICAgY29uc3QgY2FsY0NvbnRleHQgPSBjYWxjQ2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5kZWJ1Zygnc3gsIHN5LCBzV2lkdGgocmVzb2x1dGlvbl93KSwgc0hlaWdodChyZXNvbHV0aW9uX2gpLCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCcsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCk7XG4gICAgY2FsY0NvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgMCwgMCwgY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faCk7XG4gICAgY29uc3QgaW1nRGF0YSA9IGNhbGNDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhVXJsID0gY2FsY0NhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9fcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIHRoaXMuX19nZXRSb3RhdGlvbkRlZ3JlZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtpbWdEYXRhLCBpbWdEYXRhVXJsXTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgZGVncmVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKGRlZ3JlZSA9PT0gMCkge1xuICAgICAgICByZXNvbHZlKFtpbWdEYXRhLCBpbWdEYXRhVXJsXSk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBpbWdEYXRhVXJsO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgLy8gY2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICAgIGNvbnN0IHRlbXBDb250ZXh0ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0ZW1wQ2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChbMCwgMTgwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gOTApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcuaGVpZ2h0LCAwKTtlbHNlIGlmIChkZWdyZWUgPT09IDE4MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy53aWR0aCwgaW1nLmhlaWdodCk7ZWxzZSBpZiAoZGVncmVlID09PSAyNzApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZSgwLCBpbWcud2lkdGgpO1xuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBjb25zdCBuZXdJbWFnZURhdGEgPSBbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSA/IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcuaGVpZ2h0LCBpbWcud2lkdGgpIDogdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgdGVtcENvbnRleHQpO1xuICAgICAgICByZXNvbHZlKFtuZXdJbWFnZURhdGEsIHRlbXBDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyldKTtcbiAgICAgICAgdGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCwgcmV0cnlJbWcgPSBudWxsKSB7XG4gICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPCAwKSB7XG4gICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbWdEYXRhO1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAocmV0cnlJbWcgIT09IG51bGwpIHtcbiAgICAgICAgaW1nRGF0YSA9IHJldHJ5SW1nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgW2ltZ0RhdGFdID0gYXdhaXQgdGhpcy5fX2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgfVxuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmRldGVjdF9pZGNhcmQoYnVmZmVyLCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaXNDYXJkYm94RGV0ZWN0ZWQgcmVzdWx0IC09LS0tLS0nLCByZXN1bHQpXG4gICAgICByZXR1cm4gWyEhcmVzdWx0LCBpbWdEYXRhXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yIDogJyArIGU7XG4gICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCBzc2FNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhZGRyZXNzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICdjaGVja1ZhbGlkYXRpb24gRmFpbCc7XG4gICAgICB9XG4gICAgICBsZXQgb2NyUmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmICghdGhpcy5fX29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5JRENhcmQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhblBhc3Nwb3J0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5BbGllbihhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5DcmVkaXQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICB9XG4gICAgICBpZiAob2NyUmVzdWx0ID09PSBudWxsIHx8IG9jclJlc3VsdCA9PT0gJycgfHwgb2NyUmVzdWx0ID09PSAnZmFsc2UnIHx8IG9jclJlc3VsdFswXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsLCBudWxsXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjcm9wTW9kZSA9IGZhbHNlO1xuICAgICAgICBpZiAob2NyVHlwZS5pbmRleE9mKFwiY3JlZGl0XCIpID4gLTEpIHtcbiAgICAgICAgICBjcm9wTW9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9yaWdpbkltYWdlID0gYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIGZhbHNlLCBjcm9wTW9kZSk7XG4gICAgICAgIGxldCBtYXNrSW1hZ2UgPSBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdHJ1ZSwgY3JvcE1vZGUpO1xuICAgICAgICBtYXNrSW1hZ2UgPSBtYXNrSW1hZ2UgPT09ICdkYXRhOicgPyBudWxsIDogbWFza0ltYWdlO1xuICAgICAgICBpZiAoc3NhTW9kZSkge1xuICAgICAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBLCBmYWxzZSwgbWFza0ltYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtvY3JSZXN1bHQsIG9yaWdpbkltYWdlLCBtYXNrSW1hZ2VdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAob2NyVHlwZS5pbmRleE9mKFwiLXNzYVwiKSA+IC0xKSB7XG4gICAgICAgIC8vIFRPRE86IHdvcmtlcuulvCDsgqzsmqntlZjsl6wg66mU7J24KFVJIOuenOuNlOungSkg7Iqk66CI65Oc6rCAIOupiOy2lOyngCDslYrrj4TroZ0g7LKY66asIO2VhOyalCAo7ZiE7J6sIGxvYWRpbmcgVUkg652E7Jqw66m0IOyVoOuLiOuplOydtOyFmCDrqYjstqQpXG4gICAgICAgIC8vIFRPRE86IHNldFRpbWVvdXQg7Jy866GcIOuCmOuIhOuNlOudvOuPhCDtmqjqs7wg7JeG7J2MIHNldFRpbWVvdXQg7KeA7Jqw6rOgLCB3b3JrZXLroZwg67OA6rK9IO2VhOyalFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHRoaXMuX19PQ1JFbmdpbmUuc2NhblRydXRoKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcikpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU1NBIE1vZGUgaXMgdHJ1ZS4gYnV0LCBvY3JUeXBlIGlzIGludmFsaWQgOiAnICsgb2NyVHlwZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9fc3RhcnRUcnV0aFJldHJ5KG9jclR5cGUsIGFkZHJlc3MsIGltZ0RhdGEpIHtcbiAgICBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcywgMCwgaW1nRGF0YSk7XG4gICAgLy8gYXdhaXQgdGhpcy5fX3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgdHJ1ZSk7ICAgICAgLy8gZm9yIOyEseuKpeydhCDsnITtlbQg7KeE7ZaJIFhcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fX3N0YXJ0VHJ1dGgob2NyVHlwZSwgYWRkcmVzcyk7XG4gIH1cbiAgX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gMey0iCBkZWxheSDtm4Qg7Iuk7ZaJXG4gICAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBhc3luYyBfX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgIGNvbnN0IGlzUGFzc3BvcnQgPSB0aGlzLl9fb2NyVHlwZS5pbmNsdWRlcygncGFzc3BvcnQnKTtcbiAgICAgIGF3YWl0IHRoaXMuX19zZXR1cFZpZGVvKGlzUGFzc3BvcnQpO1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgLy8gY29uc3QgW3RyYWNrXSA9IHRoaXMuX19zdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcbiAgICAgICAgLy8gY29uc3QgY2FwYWJpbGl0eSA9IHRyYWNrLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdDYXJkU2Nhbl9faW5pdGlhbGl6ZSBjYXBhYmlsaXR5JywgY2FwYWJpbGl0eSk7XG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiB2aWRlbykge1xuICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHRoaXMuX19zdHJlYW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQXZvaWQgdXNpbmcgdGhpcyBpbiBuZXcgYnJvd3NlcnMsIGFzIGl0IGlzIGdvaW5nIGF3YXkuXG4gICAgICAgICAgdmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5fX3N0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygncHJvY2VlZENhbWVyYVBlcm1pc3Npb24gLSBvbmxvYWRlZG1ldGFkYXRhJyk7XG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsICgpID0+IHtcbiAgICAgICAgICB2b2lkIDA7XG5cbiAgICAgICAgICAvLyB2aWRlbyBlbGVtZW50IHN0eWxlIOyEpOyglVxuICAgICAgICAgIHRoaXMuX192aWRlb09yaWVudGF0aW9uID0gdmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvLnZpZGVvSGVpZ2h0IDwgMSA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB0aGlzLl9fY2FtU2V0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX19hZGp1c3RTdHlsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICB2aWRlby53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ05vdEFsbG93ZWRFcnJvcicpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ0NhbWVyYSBBY2Nlc3MgUGVybWlzc2lvbiBpcyBub3QgYWxsb3dlZCc7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcyhcIkU0MDNcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5uYW1lID09PSAnTm90UmVhZGFibGVFcnJvcicpIHtcbiAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7IC8vIOyerOq3gCDtmLjstpxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfX3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHN0eWxlKTtcbiAgfVxuICBfX2NoYW5nZU9DUlN0YXR1cyh2YWwpIHtcbiAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgLy8gT0NSXG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuUkVBRFk6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUzpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQTpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLkRPTkU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBfX2NoYW5nZVN0YWdlKHZhbCwgZm9yY2VVcGRhdGUgPSBmYWxzZSwgcmVjb2duaXplZEltYWdlID0gbnVsbCkge1xuICAgIGlmICh0aGlzLl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9PT0gdmFsICYmIGZvcmNlVXBkYXRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fY2hhbmdlT0NSU3RhdHVzKHZhbCk7XG4gICAgdGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB2YWw7XG4gICAgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIGNvbnN0IHtcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXBcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnN0eWxlLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cyArICdweCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZVt2YWxdXG4gICAgfTtcbiAgICBpZiAoZ3VpZGVCb3gpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwgc3R5bGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UpIHtcbiAgICAgIG1hc2tCb3hXcmFwPy5xdWVyeVNlbGVjdG9yKFwiI21hc2tCb3hPdXRlclwiKT8uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZVt2YWxdKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VUb3BVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX190b3BVSSwgJ3RvcCcsIHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJIHx8IHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX21pZGRsZVVJLCAnbWlkZGxlJywgdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fYm90dG9tVUksICdib3R0b20nLCB0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX19oaWRlUHJldmlld1VJKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGd1aWRlQm94LFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgcHJldmlld0ltYWdlLnNyYyA9IHJlY29nbml6ZWRJbWFnZTtcbiAgICBjb25zdCBpbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBndWlkZUJveC5jbGllbnRXaWR0aCArICdweCcsXG4gICAgICBoZWlnaHQ6IGd1aWRlQm94LmNsaWVudEhlaWdodCArICdweCdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3SW1hZ2UsIGltZ1N0eWxlKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJLCB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSk7XG4gIH1cbiAgX19oaWRlUHJldmlld1VJKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSSwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG4gICAgcHJldmlld0ltYWdlLnNyYyA9IFwiXCI7XG4gIH1cbiAgYXN5bmMgX19nZXRJbnB1dERldmljZXMoa2luZCwgbGFiZWwpIHtcbiAgICAvLyB0aHJvdyBlcnJvciBpZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGRldmljZXMgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBkZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4ge1xuICAgICAgaWYgKGRldmljZS5raW5kID09PSBgJHtraW5kfWlucHV0YCAmJiBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IGRldmljZS5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgaWYgKGNhcD8uZmFjaW5nTW9kZT8uaW5jbHVkZXModGhpcy5fX2ZhY2luZ01vZGVDb25zdHJhaW50KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZpZGVvRGV2aWNlcy5sZW5ndGggPD0gMSA/IHZpZGVvRGV2aWNlcyA6IHZpZGVvRGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGxhYmVsID8gZGV2aWNlLmxhYmVsLmluY2x1ZGVzKGxhYmVsKSA6IHRydWUpO1xuICB9XG4gIGNoZWNrVUlPcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZGV0ZWN0b3IuZ2V0VUlPcmllbnRhdGlvbihkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm9jcik7XG4gICAgbGV0IGlzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50ICE9PSB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24pIHtcbiAgICAgIHRoaXMuX191aU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIHRoaXMuX19wcmV2VWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICBpc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudCxcbiAgICAgIGlzQ2hhbmdlZFxuICAgIH07XG4gIH1cbiAgX19jbGVhckN1c3RvbVVJKG9iaikge1xuICAgIG9iai5pbm5lckhUTUwgPSAnJztcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIG9iai5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKG9iaiwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG4gIH1cbiAgX19zZXR1cERvbUVsZW1lbnRzKCkge1xuICAgIGxldCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICB2aWRlb1dyYXAsXG4gICAgICBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLFxuICAgICAgY3VzdG9tVUlXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmICghb2NyKSB0aHJvdyBuZXcgRXJyb3IoXCJvY3IgZGl2IGVsZW1lbnQgaXMgbm90IGV4aXN0XCIpO1xuICAgIGlmICh2aWRlb1dyYXApIHZpZGVvV3JhcC5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3hXcmFwKSBndWlkZUJveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHZpZGVvKSB2aWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY2FudmFzKSBjYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKHJvdGF0aW9uQ2FudmFzKSByb3RhdGlvbkNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3gpIGd1aWRlQm94LnJlbW92ZSgpO1xuICAgIGlmIChtYXNrQm94V3JhcCkgbWFza0JveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKSBwcmV2ZW50VG9GcmVlemVWaWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY3VzdG9tVUlXcmFwKSBjdXN0b21VSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8g6rCBIHRvcCwgbWlkZGxlLCBib3R0b20gVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmICh0b3BVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlVG9wVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKHRvcFVJKTtcbiAgICBpZiAobWlkZGxlVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShtaWRkbGVVSSk7XG4gICAgaWYgKGJvdHRvbVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkoYm90dG9tVUkpO1xuICAgIGlmIChwcmV2aWV3VUlXcmFwKSBwcmV2aWV3VUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIHByZXZpZXcgVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmIChwcmV2aWV3VUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkocHJldmlld1VJKTtcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZSA9IHRoaXMuX19nZXRSb3RhdGlvbkRlZ3JlZSgpO1xuICAgIHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID0gWzkwLCAyNzBdLmluY2x1ZGVzKHJvdGF0aW9uRGVncmVlKTtcbiAgICBsZXQgb2NyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShvY3IsIG9jclN0eWxlKTtcbiAgICBjb25zdCB3cmFwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIC8vIHZlcnRpY2FsIGFsaWduIG1pZGRsZVxuICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfTtcbiAgICB2aWRlb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWRlb1dyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvV3JhcCcpO1xuICAgIGlmICh2aWRlb1dyYXApIHtcbiAgICAgIHdoaWxlICh2aWRlb1dyYXAuZmlyc3RDaGlsZCkge1xuICAgICAgICB2aWRlb1dyYXAucmVtb3ZlQ2hpbGQodmlkZW9XcmFwLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW9XcmFwLCB3cmFwU3R5bGUpO1xuICAgIH1cbiAgICBvY3IuYXBwZW5kQ2hpbGQodmlkZW9XcmFwKTtcbiAgICBtYXNrQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtYXNrQm94V3JhcCcpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShtYXNrQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBsZXQgbWFza19mcmFtZSA9IHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlLmJhc2VfY29sb3IgKyAnZmYnO1xuICAgIGlmICghIXRoaXMuX19vcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZS5jbGlwX2ZyYW1lICsgJzU1JztcbiAgICB9XG4gICAgbWFza0JveFdyYXAuaW5uZXJIVE1MID0gXCJcIiArIFwiICA8c3ZnIGlkPSdtYXNrQm94Q29udGFpbmVyJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxcblwiICsgXCIgICAgPG1hc2sgaWQ9J21hc2stcmVjdCc+XFxuXCIgKyBcIiAgICAgIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3doaXRlJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDxzdmcgeD0nNTAlJyB5PSc1MCUnIG92ZXJmbG93PSd2aXNpYmxlJz5cXG5cIiArIFwiICAgICAgICAgIDxyZWN0IGlkPSdtYXNrQm94SW5uZXInXFxuXCIgKyBcIiAgICAgICAgICAgIHdpZHRoPSc0MDAnIGhlaWdodD0nMjYwJ1xcblwiICsgXCIgICAgICAgICAgICB4PSctMjAwJyB5PSctMTMwJ1xcblwiICsgXCIgICAgICAgICAgICByeD0nMTAnIHJ5PScxMCdcXG5cIiArIFwiICAgICAgICAgICAgZmlsbD0nYmxhY2snIHN0cm9rZT0nYmxhY2snPjwvcmVjdD5cXG5cIiArIFwiICAgICAgPC9zdmc+XFxuXCIgKyBcIiAgICA8L21hc2s+XFxuXCIgKyBcIiAgICA8cmVjdCBpZD0nbWFza0JveE91dGVyJ1xcblwiICsgXCIgICAgICAgICAgeD0nMCcgeT0nMCcgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJSdcXG5cIiArIFwiICAgICAgICAgIGZpbGw9J1wiICsgbWFza19mcmFtZSArIFwiJyBtYXNrPSd1cmwoI21hc2stcmVjdCknPjwvcmVjdD5cXG5cIiArIFwiICA8L3N2Zz5cIjtcbiAgICBvY3IuYXBwZW5kQ2hpbGQobWFza0JveFdyYXApO1xuICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW8nKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ3RydWUnKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgJ3RydWUnKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJ3RydWUnKTtcbiAgICBsZXQgdmlkZW9TdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH07XG4gICAgY29uc3Qgcm90YXRlQ3NzID0gJ3JvdGF0ZSgnICsgcm90YXRpb25EZWdyZWUgKyAnZGVnKSc7XG4gICAgY29uc3QgbWlycm9yQ3NzID0gJ3JvdGF0ZVkoMTgwZGVnKSc7XG4gICAgY29uc3Qgcm90YXRlQW5kTWlycm9yQ3NzID0gbWlycm9yQ3NzICsgJyAnICsgcm90YXRlQ3NzO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgaWYgKHRoaXMuX19nZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiByb3RhdGVDc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX19nZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogbWlycm9yQ3NzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywgdmlkZW9TdHlsZSk7XG4gICAgdmlkZW9XcmFwLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGd1aWRlQm94V3JhcCk7XG4gICAgZ3VpZGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnZ3VpZGVCb3gnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9KTtcbiAgICBndWlkZUJveFdyYXAuYXBwZW5kQ2hpbGQoZ3VpZGVCb3gpO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FudmFzJyk7XG4gICAgY29uc3QgY2FudmFzU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLl9fb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID8gJ25vbmUnIDogJ2Rpc3BsYXknIDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcyNSUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnZ3JlZW4gMnB4IHNvbGlkJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKGNhbnZhcywgY2FudmFzU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHJvdGF0aW9uQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcm90YXRpb25DYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3JvdGF0aW9uQ2FudmFzJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHJvdGF0aW9uQ2FudmFzLCB7XG4gICAgICBkaXNwbGF5OiB0aGlzLl9fb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID8gJ2Rpc3BsYXknIDogJ25vbmUnIDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMzBweCcsXG4gICAgICBib3JkZXI6ICdibHVlIDJweCBzb2xpZCdcbiAgICB9KTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQocm90YXRpb25DYW52YXMpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZlbnRUb0ZyZWV6ZVZpZGVvJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZlbnRUb0ZyZWV6ZVZpZGVvLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgIHJpZ2h0OiAnMTAnXG4gICAgfSk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uaW5uZXJIVE1MID0gXCJcIiArIFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xcXCIgd2lkdGg9XFxcIjMycHhcXFwiIGhlaWdodD1cXFwiMzJweFxcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIj5cXG5cIiArIFwiICA8Y2lyY2xlIGN4PVxcXCI4NFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxMFxcXCIgZmlsbD1cXFwiIzg2ODY4NjAwXFxcIj5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjAuNTU1NTU1NTU1NTU1NTU1NnNcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIHZhbHVlcz1cXFwiMTA7MFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiZmlsbFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcImRpc2NyZXRlXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiIzg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMFxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0wLjU1NTU1NTU1NTU1NTU1NTZzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0wLjU1NTU1NTU1NTU1NTU1NTZzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiODRcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjExMTExMTExMTExMTExMTJzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjExMTExMTExMTExMTExMTJzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjY2NjY2NjY2NjY2NjY2NjVzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjY2NjY2NjY2NjY2NjY2NjVzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCI7XG4gICAgXCI8L3N2Zz5cIjtcbiAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmVudFRvRnJlZXplVmlkZW8pO1xuICAgIGN1c3RvbVVJV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1c3RvbVVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY3VzdG9tVUlXcmFwJyk7XG4gICAgY29uc3QgY3VzdG9tVUlXcmFwU3R5bGUgPSB7XG4gICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKGN1c3RvbVVJV3JhcCwgY3VzdG9tVUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjdXN0b21VSVdyYXApO1xuXG4gICAgLy8g6rCBIHRvcCwgbWlkZGxlLCBib3R0b20gVUkg7IKs7JqpKHVzZSnsl6zrtoDsmYAg6rSA6rOE7JeG7J20IOyYgeyXreydhCDsnqHquLAg7JyE7ZW0LCBkaXbqsIAg7JeG7Jy866m0IOyDneyEsVxuICAgIC8vIGFkanVzdFN0eWxlKCkg7JeQ7IScIOyEuOu2gOyggeyduCDsgqzsnbTspojsmYAg7JyE7LmY6rCSIOuPmeyggeycvOuhnCDshKTsoJXrkKguXG4gICAgaWYgKCF0b3BVSSkge1xuICAgICAgdG9wVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvcFVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd0b3BVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQodG9wVUkpO1xuICAgIGlmICghbWlkZGxlVUkpIHtcbiAgICAgIG1pZGRsZVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtaWRkbGVVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWlkZGxlVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKG1pZGRsZVVJKTtcbiAgICBpZiAoIWJvdHRvbVVJKSB7XG4gICAgICBib3R0b21VSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm90dG9tVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2JvdHRvbVVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZChib3R0b21VSSk7XG4gICAgcHJldmlld1VJV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZpZXdVSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdVSVdyYXAnKTtcbiAgICBjb25zdCBwcmV2aWV3VUlXcmFwU3R5bGUgPSB7XG4gICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHByZXZpZXdVSVdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHByZXZpZXdVSVdyYXApO1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgIGlmICghcHJldmlld1VJKSB7XG4gICAgICAgIHByZXZpZXdVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmV2aWV3VUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdVSScpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSSwge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0pO1xuICAgICAgcHJldmlld1VJV3JhcC5hcHBlbmRDaGlsZChwcmV2aWV3VUkpO1xuICAgICAgaWYgKCFwcmV2aWV3SW1hZ2UpIHtcbiAgICAgICAgcHJldmlld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld0ltYWdlJyk7XG4gICAgICAgIHByZXZpZXdVSS5hcHBlbmRDaGlsZChwcmV2aWV3SW1hZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxvYWRpbmcgVUkg7JyE7LmYIOyekOumrOyeoeqyjCDtlZjquLAg7JyE7ZW0XG4gICAgdGhpcy5fX2FkanVzdFN0eWxlKCk7XG4gICAgLy8g7ZmU66m06rO864+EIO2YhOyDgSDtlbTqsrBcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCB7XG4gICAgICBkaXNwbGF5OiAnJ1xuICAgIH0pO1xuICAgIHRoaXMuX19vY3IgPSBvY3I7XG4gICAgdGhpcy5fX2NhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLl9fcm90YXRpb25DYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICB0aGlzLl9fdmlkZW8gPSB2aWRlbztcbiAgICB0aGlzLl9fdmlkZW9XcmFwID0gdmlkZW9XcmFwO1xuICAgIHRoaXMuX19ndWlkZUJveCA9IGd1aWRlQm94O1xuICAgIHRoaXMuX19ndWlkZUJveFdyYXAgPSBndWlkZUJveFdyYXA7XG4gICAgdGhpcy5fX21hc2tCb3hXcmFwID0gbWFza0JveFdyYXA7XG4gICAgdGhpcy5fX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gcHJldmVudFRvRnJlZXplVmlkZW87XG4gICAgdGhpcy5fX2N1c3RvbVVJV3JhcCA9IGN1c3RvbVVJV3JhcDtcbiAgICB0aGlzLl9fdG9wVUkgPSB0b3BVSTtcbiAgICB0aGlzLl9fbWlkZGxlVUkgPSBtaWRkbGVVSTtcbiAgICB0aGlzLl9fYm90dG9tVUkgPSBib3R0b21VSTtcbiAgICB0aGlzLl9fcHJldmlld1VJV3JhcCA9IHByZXZpZXdVSVdyYXA7XG4gICAgdGhpcy5fX3ByZXZpZXdVSSA9IHByZXZpZXdVSTtcbiAgICB0aGlzLl9fcHJldmlld0ltYWdlID0gcHJldmlld0ltYWdlO1xuICAgIHJldHVybiB7XG4gICAgICBvY3IsXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIHZpZGVvLFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLFxuICAgICAgY3VzdG9tVUlXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH07XG4gIH1cbiAgYXN5bmMgX19zZXR1cFZpZGVvKGlzUGFzc3BvcnQpIHtcbiAgICAvLyB3YXNtIOyduOyLneyEseuKpSDstZzsoIHtmZTrkJwg7ZW07IOB64+EXG4gICAgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCA9IDEwODA7XG4gICAgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgPSA3MjA7XG4gICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSB0aGlzLl9fc2V0dXBEb21FbGVtZW50cygpO1xuICAgIGNvbnN0IHZpZGVvRGV2aWNlcyA9IGF3YWl0IHRoaXMuX19nZXRJbnB1dERldmljZXMoJ3ZpZGVvJywgdGhpcy5fX29wdGlvbnMuZGV2aWNlTGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb0RldmljZXMgOjogJywgdmlkZW9EZXZpY2VzKVxuICAgIGNvbnN0IGRldmljZUlkTGlzdCA9IHZpZGVvRGV2aWNlcy5tYXAoZGV2aWNlID0+IGRldmljZS5kZXZpY2VJZCk7XG4gICAgdGhpcy5jaGVja1VJT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29uc3RyYWludFdpZHRoLCBjb25zdHJhaW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgLy8gdWkgOiBwb3J0cmFpdFxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogMTA4MCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcblxuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDcyMCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdWkgOiBsYW5kc2NhcGVcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIG1pbjogMTI4MFxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICBtaW46IDcyMFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB2aWRlbzoge1xuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgaWRlYWw6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZmFjaW5nTW9kZToge1xuICAgICAgICAgIGlkZWFsOiB0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnRcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICB3aGl0ZUJhbGFuY2VNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2VJZDogdmlkZW9EZXZpY2VzLmxlbmd0aCA/IHtcbiAgICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0W2RldmljZUlkTGlzdC5sZW5ndGggLSAxXVxuICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgd2lkdGg6IGNvbnN0cmFpbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb25zdHJhaW50SGVpZ2h0XG4gICAgICB9XG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgZHVtcHRyYWNrID0gKFthLCBiXSwgdHJhY2spID0+XG4gICAgICAvLyAgIGAke2F9JHt0cmFjay5raW5kID09ICd2aWRlbycgPyAnQ2FtZXJhJyA6ICdNaWNyb3Bob25lJ30gKCR7dHJhY2sucmVhZHlTdGF0ZX0pOiAke3RyYWNrLmxhYmVsfSR7Yn1gO1xuXG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndmlkZW9UcmFja3MgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpXG4gICAgICAvLyBjb25zdCBzdHJlYW1TZXR0aW5ncyA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldFNldHRpbmdzKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtQ2FwYWJpbGl0aWVzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENhcGFiaWxpdGllcygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDb25zdHJhaW50cygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbVNldHRpbmdzIDo6ICcsIHN0cmVhbVNldHRpbmdzKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIC8gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCAvIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGFzcGVjdFJhdGlvIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5hc3BlY3RSYXRpbyk7XG5cbiAgICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICBbcm90YXRpb25DYW52YXMud2lkdGgsIHJvdGF0aW9uQ2FudmFzLmhlaWdodF0gPSBbdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2FkanVzdFN0eWxlKCkge1xuICAgIHZvaWQgMDtcbiAgICBjb25zdCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUlcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAvLyDquLDspIDsoJXrs7RcbiAgICBjb25zdCBiYXNlV2lkdGggPSA0MDA7XG4gICAgY29uc3QgYmFzZUhlaWdodCA9IDI2MDtcbiAgICBjb25zdCBzY2FubmVyRnJhbWVSYXRpbyA9IGJhc2VIZWlnaHQgLyBiYXNlV2lkdGg7IC8vIOyLoOu2hOymnSDruYTsnKhcblxuICAgIGxldCBndWlkZUJveFdpZHRoLCBndWlkZUJveEhlaWdodDtcbiAgICBsZXQgY2FsY09jckNsaWVudFdpZHRoID0gb2NyLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjT2NyQ2xpZW50SGVpZ2h0ID0gb2NyLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aDtcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBuZXdWaWRlb1dpZHRoID0gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgbGV0IG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy5fX2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuX192aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUlcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7Lm066mU652864+EIOyEuOuhnFxuICAgICAgICAvLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDruYTrlJTsmKQg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDruYTrlJTsmKTrpbwg6rCA66GcIFVJ7J2YIGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIC8vIOqwgOuhnCBVSSBoZWlnaHQg6riw7KSA7Jy866GcIOu5hOuUlOyYpOydmCB3aWR0aCDqs4TsgrBcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gbmV3VmlkZW9IZWlnaHQgKiAoY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9IZWlnaHQpO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOuKlCDruYTrlJTsmKTrpbwg7IS466GcIOq4sOykgOycvOuhnCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBuZXdWaWRlb0hlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCBoZWlnaHQg7YGs6riw66W8IFVJ7J2YIGhlaWdodCDquLDspIDsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIOy2leyGjFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGggPSBNYXRoLm1pbihndWlkZUJveFdpZHRoLCBuZXdWaWRlb1dpZHRoKTtcbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IE1hdGgubWluKGd1aWRlQm94SGVpZ2h0LCBuZXdWaWRlb0hlaWdodCk7XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94V2lkdGggPSBndWlkZUJveFdpZHRoICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hIZWlnaHQgKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBpZiAodG9wVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh0b3BVSSwge1xuICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnMTBweCcsXG4gICAgICAgICdoZWlnaHQnOiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICAgICdwYWRkaW5nJzogJzEwcHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgICAnaGVpZ2h0JzogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvV2lkdGggIT09IGNhbGNWaWRlb0NsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvSGVpZ2h0ICE9PSBjYWxjVmlkZW9DbGllbnRIZWlnaHQpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICBoZWlnaHQ6IG5ld1ZpZGVvSGVpZ2h0ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIjbWFza0JveElubmVyXCIpO1xuICAgIGxldCByID0gYm9yZGVyUmFkaXVzIC0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHIgPSByIDwgMCA/IDAgOiByO1xuICAgIGlmICghaXNOYU4ocmVkdWNlZEd1aWRlQm94V2lkdGgpICYmICFpc05hTihyZWR1Y2VkR3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lckhlaWdodCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBtYXNrQm94SW5uZXJXaWR0aCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIG1hc2tCb3hJbm5lckhlaWdodCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3gnLCBtYXNrQm94SW5uZXJXaWR0aCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3knLCBtYXNrQm94SW5uZXJIZWlnaHQgLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIHIgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeScsIHIgKyAnJyk7XG4gICAgfVxuICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRydWUpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX2Nsb3NlQ2FtZXJhKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cbiAgYXN5bmMgX19sb2FkUmVzb3VyY2VzKCkge1xuICAgIHZvaWQgMDtcbiAgICBpZiAodGhpcy5fX3Jlc291cmNlc0xvYWRlZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2RrU3VwcG9ydEVudiA9ICdxdXJhbSc7XG4gICAgbGV0IGlzU3VwcG9ydFNpbWQgPSBhd2FpdCBzaW1kKCk7XG4gICAgbGV0IGVudkluZm8gPSAnJztcbiAgICBlbnZJbmZvICs9IGBvcyA6ICR7dGhpcy5fX2RldmljZUluZm8ub3N9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBvc1NpbXBsZSA6ICR7dGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGV9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBzaW1kKHdhc20tZmVhdHVyZS1kZXRlY3QpIDogJHtpc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgaWYgKHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnSU9TJyB8fCB0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZSA9PT0gJ01BQycpIHtcbiAgICAgIGlzU3VwcG9ydFNpbWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZW52SW5mbyArPSBgaXNTdXBwb3J0U2ltZChmaW5hbCkgOiAke2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBVc2VyQWdlbnQgOiAke25hdmlnYXRvci51c2VyQWdlbnR9XFxuYDtcbiAgICBpZiAoaXNTdXBwb3J0U2ltZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgc2RrU3VwcG9ydEVudiArPSAnX3NpbWQuanMnO1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ29jci1kZW1vLXRlc3QudXNlYi5jby5rcicpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBzZGtTdXBwb3J0RW52ICs9ICcuanMnO1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ29jci1kZW1vLXRlc3QudXNlYi5jby5rcicpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNka1N1cHBvcnRFbnYsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xuICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG5cbiAgICAgIC8vIGRhdGEobW9kZWwpXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcKGZ1bmN0aW9uXFwoXFwpIFxcey9tLCAndmFyIGNyZWF0ZU1vZGVsRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnLCAnICAgcmVqZWN0KCk7XFxuJyArICcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgfSwgaGFuZGxlRXJyb3IpJywgJyAgcmVzb2x2ZSgpO1xcbicgKyAnICB9LCBoYW5kbGVFcnJvciknKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFx9XFwpXFwoXFwpOy9tLCAnXFxuIH0pXFxuJyArICd9OycpO1xuXG4gICAgICAvLyB3YXNtXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgncXVyYW0ud2FzbScsIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWYpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL1JFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXXF1cmFtXFwuZGF0YVtcIiddL2dtLCBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwiJHtuZXcgVVJMKCdxdXJhbS5kYXRhJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmfVwiYCk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnZnVuY3Rpb24gY3JlYXRlV2FzbScsICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnaW5zdGFudGlhdGVBc3luYygpOycsICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7Jyk7XG5cbiAgICAgIC8vIHdhc20gYW5kIGRhdGEobW9kZWwpIGZpbGUg67OR66Cs66GcIGZldGNoIO2VmOq4sCDsnITtlbRcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gc3RhcnRcIilcXG4nICsgJ2F3YWl0IChhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkV2FzbSA9IGZhbHNlO1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWREYXRhID0gZmFsc2U7XFxuJyArICcgICAgY3JlYXRlV2FzbSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkV2FzbSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkRGF0YSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KTtcXG4nICsgJyAgICBjcmVhdGVNb2RlbERhdGEoKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZERhdGEgPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZFdhc20pIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSlcXG4nICsgJyAgfSk7XFxuJyArICd9KSgpO1xcbicgKyAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIGVuZFwiKScpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9KTtcbiAgICBzcmMgPSBgXG4gICAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgJHtzcmN9XG4gICAgICBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4ID0gbGVuZ3RoQnl0ZXNVVEY4XG4gICAgICBNb2R1bGUuc3RyaW5nVG9VVEY4ID0gc3RyaW5nVG9VVEY4XG4gICAgICByZXR1cm4gTW9kdWxlXG4gICAgfSkoKVxuICAgICAgICBgO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCA9IGFzeW5jIF8gPT4ge1xuICAgICAgdm9pZCAwO1xuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpO1xuICAgIHRoaXMuX19yZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX3N0YXJ0U2NhbkltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX19kZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fX2FkZHJlc3MgPSAwO1xuICAgICAgdGhpcy5fX3BhZ2VFbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPSBpc05hTihwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSkgPyAwIDogcGFyc2VJbnQodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCk7XG4gICAgICBjb25zdCBzY2FuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsLFxuICAgICAgICAgICAgaW1nRGF0YVVybCA9IG51bGwsXG4gICAgICAgICAgICBtYXNrSW1hZ2UgPSBudWxsLFxuICAgICAgICAgICAgc3NhUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdExpc3QgPSBbXTtcblxuICAgICAgICAgIC8vIHRoaXMuX19jaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgaWYgKCF0aGlzLl9fT0NSRW5naW5lWydhc20nXSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVE9ETyA6IOyEpOygle2VoOyImCDsnojqsowg67OA6rK9IGRlZmF1bHQg6rCS64+EIOygnOqztVxuICAgICAgICAgIGNvbnN0IFtyZXNvbHV0aW9uX3csIHJlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHZpZGVvXG4gICAgICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICAgICAgaWYgKHJlc29sdXRpb25fdyA9PT0gMCB8fCByZXNvbHV0aW9uX2ggPT09IDApIHJldHVybjtcbiAgICAgICAgICBpZiAodGhpcy5fX2RldGVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYmVmb3JlIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuICAgICAgICAgIGlmICh0aGlzLl9fYWRkcmVzcyA9PT0gMCAmJiAhdGhpcy5fX3BhZ2VFbmQgJiYgdGhpcy5fX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpIHtcbiAgICAgICAgICAgIFt0aGlzLl9fYWRkcmVzcywgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2tdID0gdGhpcy5fX2dldFNjYW5uZXJBZGRyZXNzKHRoaXMuX19vY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl9fYWRkcmVzcyB8fCB0aGlzLl9fcGFnZUVuZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGFmdGVyIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPCB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIE9DUiDsmYTro4wg7J207KCEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgICAgY29uc3QgW2lzRGV0ZWN0ZWRDYXJkLCBpbWdEYXRhXSA9IGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZCh0aGlzLl9fYWRkcmVzcywgMCk7XG4gICAgICAgICAgICBpZiAoIWlzRGV0ZWN0ZWRDYXJkKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAgIT09IHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9GQUlMRUQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FyZCBpcyBkZXRlY3RlZFxuICAgICAgICAgICAgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUyk7XG5cbiAgICAgICAgICAgIC8vIHNzYSByZXRyeSDshKTsoJXsnbQg65CY7Ja0IOyeiOycvOuptCwgY2FyZCBkZXRlY3Qg7ISx6rO17IucIOydtOuvuOyngCDsoIDsnqVcbiAgICAgICAgICAgIGlmICh0aGlzLl9fc3NhTW9kZSAmJiB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlXSA9IGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKHRoaXMuX19hZGRyZXNzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fX29jclN0YXR1cyA+PSB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIG9jciDsmYTro4wg7J207ZuEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBmYWlsdXJlIGNhc2VcbiAgICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT0NSIFN0YXR1cyBpcyAke3RoaXMuX19vY3JTdGF0dXN9LCBidXQgb2NyUmVzdWx0IGlzIGZhbHNlYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7IC8vIE9DUiDsmYTro4wg7Iuc7KCQ7JeQIGNhbWVyYSBwcmV2aWV3IG9mZlxuXG4gICAgICAgICAgICBpZiAodGhpcy5fX3NzYU1vZGUpIHtcbiAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAvLyDstZzstIgg7Iuc64+EXG4gICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoKHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcyk7XG4gICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0cnlTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQuaW5kZXhPZihcIkZBS0VcIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc3NhUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoUmV0cnkodGhpcy5fX29jclR5cGUsIHRoaXMuX19hZGRyZXNzLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIltFUlJdIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGxcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3NhUmVzdWx0TGlzdC5wdXNoKHNzYVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0cnlXb3JraW5nVGltZSA9IG5ldyBEYXRlKCkgLSByZXRyeVN0YXJ0RGF0ZTtcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLl9fb25TdWNjZXNzUHJvY2Vzcyh7XG4gICAgICAgICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgICAgICAgb2NyX2RhdGE6IHBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLl9fc3NhUmV0cnlDb3VudCwgc3NhUmVzdWx0TGlzdCksXG4gICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBtYXNrSW1hZ2UsXG4gICAgICAgICAgICAgIHNzYV9tb2RlOiB0aGlzLl9fc3NhTW9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvcic7XG4gICAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IFwiOiBcIiArIGUubWVzc2FnZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKFwiV0EwMDFcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgdGhpcy5fX2RldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX19kZXRlY3RlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8g7J6s6reAXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZXRUaW1lb3V0KHNjYW4sIDEpOyAvLyBVSSDrnpzrjZTrp4EgYmxvY2tpbmcg67Cp7KeAIChzZXRUaW1lb3V0KVxuICAgIH0pO1xuICB9XG5cbiAgX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUoaW1nRGF0YSkge1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUubGVuZ3RoID09PSBwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSkge1xuICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnNoaWZ0KCk7XG4gICAgfVxuICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5wdXNoKGltZ0RhdGEpO1xuICAgIHZvaWQgMDsgLy8gc2hvdWxkIGJlIHJlbW92ZWRcbiAgfVxuXG4gIF9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KSB7XG4gICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgIGlmIChyZXZpZXdfcmVzdWx0LnNzYV9tb2RlKSB7XG4gICAgICB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogXCJOMTAwXCIsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogXCJPSy5cIlxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiByZXZpZXdfcmVzdWx0XG4gICAgfTtcbiAgICBpZiAodGhpcy5fX29uU3VjY2Vzcykge1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgX19vbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgIGxldCBlcnJvckRldGFpbCA9IFwiXCI7XG4gICAgaWYgKGU/LnRvU3RyaW5nKCkpIGVycm9yRGV0YWlsICs9IGUudG9TdHJpbmcoKTtcbiAgICBpZiAoZT8uc3RhY2spIGVycm9yRGV0YWlsICs9IGUuc3RhY2s7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogcmVzdWx0Q29kZSxcbiAgICAgICAgXCJyZXN1bHRfbWVzc2FnZVwiOiBlcnJvck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwiZmFpbGVkXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiB7XG4gICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgZXJyb3JfZGV0YWlsOiBlcnJvckRldGFpbFxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vbkZhaWx1cmUpIHtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fc3RhcnRTY2FuKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5JbXBsKCk7XG4gICAgdm9pZCAwO1xuICB9XG4gIGFzeW5jIF9fcmVjb3ZlcnlTY2FuKCkge1xuICAgIHZvaWQgMDtcbiAgICB0aGlzLl9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW4oKTtcbiAgfVxuICBzdG9wU2NhbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgc3RvcFN0cmVhbSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmICh0aGlzLl9fc3RyZWFtKSB7XG4gICAgICB0aGlzLl9fc3RyZWFtLnN0b3AgJiYgdGhpcy5fX3N0cmVhbS5zdG9wKCk7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0cmVhbSA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiDrqZTrqqjrpqwgYWxsb2NhdGlvbiBmcmVlIO2VqOyImCAqL1xuICBjbGVhbnVwKCkge1xuICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKTtcbiAgICB0aGlzLl9fZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuX19kZXN0cm95UHJldkltYWdlKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCk7XG4gIH1cbiAgX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgaWYgKHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlQk9DUjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsUUFBUSxNQUFNLHVCQUF1QjtBQUM1QyxPQUFPQyxNQUFNLE1BQU0scUJBQXFCO0FBQ3hDLFNBQVNDLElBQUksRUFBRUMsT0FBTyxRQUFRLGtDQUFrQztBQUNoRSxJQUFJQyxRQUFRO0FBQ1osTUFBTUMsT0FBTyxDQUFDO0VBeUJaOztFQUVBOztFQXdEaUM7RUFDTDs7RUFNRTtFQUNGO0VBQ0M7O0VBSTdCOztFQTJEQTtFQUNBQyxXQUFXQSxDQUFBLEVBQUc7SUFBQUMsZUFBQSxz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
