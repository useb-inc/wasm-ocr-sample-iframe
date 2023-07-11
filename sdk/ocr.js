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
    _defineProperty(this, "__ocrTypeList", ['idcard', 'driver', 'passport', 'foreign-passport', 'alien', 'credit', 'idcard-ssa', 'driver-ssa', 'passport-ssa', 'foreign-passport-ssa', 'alien-ssa']);
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
      // 디버깅 옵션
      showClipFrame: false,
      // cilp-frame 보기
      showCanvasPreview: false,
      // canvas preview 보기

      // 출력 옵션
      useEncryptMode: false,
      // 암호화 적용
      useLegacyFormat: false,
      // Legacy format 지원
      useMaskInfo: true,
      // 마스킹 좌표 지원

      // UI 설정
      useTopUI: true,
      // 상단 UI
      useTopUITextMsg: false,
      //상단 UI > TEXT
      useMiddleUI: true,
      //중단 UI
      useMiddleUITextMsg: true,
      // 중단 UI > TEXT
      useBottomUI: true,
      // 하단 UI
      useBottomUITextMsg: false,
      // 하단 UI > TEXT
      usePreviewUI: true,
      // Preview UI
      useCaptureUI: false,
      // 수동 촬영 UI 사용

      // 인식 프레임 옵션
      frameBorderStyle: {
        width: 5,
        // border-width
        radius: 20,
        // border-radius
        style: 'solid',
        // border-style

        // 단계별 인식 프레임 border 색상
        not_ready: '#000000',
        // 스캔준비 : 검정
        ready: '#b8b8b8',
        // 스캔대기 : 회색
        detect_success: '#5e8fff',
        // 카드검출 성공 : 하늘
        detect_failed: '#725b67',
        // 카드검출 실패 : 보라
        manual_capture_success: '#5e8fff',
        // 수동촬영 성공 : 하늘
        manual_capture_failed: '#725b67',
        // 수동촬영 실패 : 보라
        recognized: '#003ac2',
        // OCR완료 : 파랑
        recognized_with_ssa: '#003ac2',
        // 사본판별중(사본판별 ON) : 파랑
        ocr_success: '#14b00e',
        // OCR완료 : 초록
        ocr_success_with_ssa: '#14b00e',
        // OCR완료(사본판별 ON) : 초록
        ocr_failed: '#FA113D' // OCR실패 : 빨강
      },

      // 마스크 프레임 fill 컬러 변경 사용 여부
      useMaskFrameColorChange: true,
      // 마스크 프레임 옵션 (카메라 비디오 영역에서 인식 프레임만 보이게 하고 나머지를 덮어쓰는 프레임 영역)
      maskFrameStyle: {
        clip_frame: '#ff00bf',
        // clip-frame 색상 : 딥퍼플 (수정불가)
        base_color: '#333333',
        // mask-frame 색상 : 다크그레이 (투명도는 수정불가 ff로 고정)

        // 단계별 마스크 프레임 fill 색상
        not_ready: '#333333',
        // 스캔준비
        ready: '#333333',
        // 스캔대기
        detect_success: '#222222',
        // 카드검출 성공
        detect_failed: '#333333',
        // 카드검출 실패
        manual_capture_success: '#222222',
        // 수동촬영 성공
        manual_capture_failed: '#333333',
        // 수동촬영 실패
        recognized: '#222222',
        // OCR완료
        recognized_with_ssa: '#222222',
        // 사본판별중(사본판별 ON)
        ocr_success: '#111111',
        //OCR완료
        ocr_success_with_ssa: '#111111',
        // OCR완료(사본판별 ON)
        ocr_failed: '#111111' // OCR실패
      },

      // 수동촬영 버튼 색상 변경 사용 여부
      useCaptureButtonColorChange: true,
      // 수동촬영 버튼 옵션
      captureButtonStyle: {
        stroke_color: '#ffffff',
        // 버튼 테두리(stroke) 색상

        // 단계별 버튼 색상
        not_ready: '#000000',
        // 스캔준비
        ready: '#b8b8b8',
        // 스캔대기
        detect_success: '#5e8fff',
        // 카드검출 성공
        detect_failed: '#725b67',
        // 카드검출 실패
        manual_capture_success: '#5e8fff',
        // 수동촬영 성공
        manual_capture_failed: '#725b67',
        // 수동촬영 실패
        recognized: '#003ac2',
        // OCR완료
        recognized_with_ssa: '#003ac2',
        // 사본판별중(사본판별 ON)
        ocr_success: '#14b00e',
        //OCR완료
        ocr_success_with_ssa: '#14b00e',
        // OCR완료(사본판별 ON)
        ocr_failed: '#FA113D' // OCR실패
      },

      resourceBaseUrl: window.location.origin,
      // wasm, data 파일 리소스 base 경로 (CDN 사용시 변경)
      deviceLabel: '',
      videoTargetId: '',
      // 카메라 설정
      rotationDegree: 0,
      // rotation-degree 카메라가 회전된 각도 (90, 190, 270)
      mirrorMode: false,
      // mirror-mode 셀피 카메라(키오스크 등) 사용시 좌우 반전

      // 사본판별 설정
      // False Negative(예측값은 FAKE인데, 실제값은 REAL이라서 틀린경우) 를 낮추기 위해,
      // ssaMaxRetryCount 설정 값만큼 재시도하여 한번이라도 REAL이 뜨면 REAL로 판정
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
      throw new Error('License Key is empty');
    }
    var lengthBytes = this.__OCREngine.lengthBytesUTF8(this.__license) + 1;
    this.__stringOnWasmHeap = this.__OCREngine._malloc(lengthBytes);
    this.__OCREngine.stringToUTF8(this.__license, this.__stringOnWasmHeap, lengthBytes);
    return this.__stringOnWasmHeap;
  }
  __encryptScanResult(ocrResult) {
    var stringOnWasmHeap = null;
    try {
      if (!!!ocrResult) {
        throw new Error('ocrResult is empty');
      }
      var jsonString = JSON.stringify(ocrResult);
      var lengthBytes = this.__OCREngine.lengthBytesUTF8(jsonString) + 1;
      stringOnWasmHeap = this.__OCREngine._malloc(lengthBytes);
      this.__OCREngine.stringToUTF8(jsonString, stringOnWasmHeap, lengthBytes);
      return this.__OCREngine.encryptResult(stringOnWasmHeap);
    } finally {
      if (stringOnWasmHeap) {
        this.__OCREngine._free(stringOnWasmHeap);
        stringOnWasmHeap = null;
      }
    }
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
                ocrResult = _this10.__OCREngine.scanCredit(address, resultBuffer);
                break;
              default:
                throw new Error('Scanner does not exists');
            }

            // TODO: 신용카드는 아직 key:value 형태로 변환 안되어 있음
            if (ocrType === 'credit') {
              if (ocrResult === null || ocrResult === '' || ocrResult === 'false' || ocrResult[0] === 'false') {
                return false;
              } else {
                return true;
              }
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
          var isCreditCard = ocrType === 'credit';
          var originImage = yield _this10.__getImageBase64(address, false, isCreditCard);
          var maskImage = isCreditCard ? null : yield _this10.__getImageBase64(address, true, true);
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
                      if (_this20.__ssaRetryCount === _this20.__options.ssaMaxRetryCount) {
                        void 0;
                        break;
                      }
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
                maskInfo = _this20.__getMaskInfo(_this20.__address);
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
              if (_this20.__options.useEncryptMode) {
                var encryptedResult = null;
                encryptedResult = _this20.__encryptScanResult(review_result);
                review_result.encrypted = encryptedResult;
              }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJzaW1kIiwidGhyZWFkcyIsImluc3RhbmNlIiwiVXNlQk9DUiIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiTk9ORSIsIk5PVF9SRUFEWSIsIlJFQURZIiwiQ0FSRF9ERVRFQ1RfU1VDQ0VTUyIsIkNBUkRfREVURUNUX0ZBSUxFRCIsIk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MiLCJNQU5VQUxfQ0FQVFVSRV9GQUlMRUQiLCJPQ1JfUkVDT0dOSVpFRCIsIk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBIiwiT0NSX1NVQ0NFU1MiLCJPQ1JfU1VDQ0VTU19XSVRIX1NTQSIsIk9DUl9GQUlMRUQiLCJET05FIiwiTk9UX1NUQVJURUQiLCJTVEFSVEVEIiwiUFJFTE9BRElOR19TVEFUVVMiLCJPQ1JfU1RBVFVTIiwiTWFwIiwiSU5fUFJPR1JFU1MiLCJPYmplY3QiLCJzaG93Q2xpcEZyYW1lIiwic2hvd0NhbnZhc1ByZXZpZXciLCJ1c2VFbmNyeXB0TW9kZSIsInVzZUxlZ2FjeUZvcm1hdCIsInVzZU1hc2tJbmZvIiwidXNlVG9wVUkiLCJ1c2VUb3BVSVRleHRNc2ciLCJ1c2VNaWRkbGVVSSIsInVzZU1pZGRsZVVJVGV4dE1zZyIsInVzZUJvdHRvbVVJIiwidXNlQm90dG9tVUlUZXh0TXNnIiwidXNlUHJldmlld1VJIiwidXNlQ2FwdHVyZVVJIiwiZnJhbWVCb3JkZXJTdHlsZSIsIndpZHRoIiwicmFkaXVzIiwic3R5bGUiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9zdWNjZXNzIiwiZGV0ZWN0X2ZhaWxlZCIsIm1hbnVhbF9jYXB0dXJlX3N1Y2Nlc3MiLCJtYW51YWxfY2FwdHVyZV9mYWlsZWQiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9zdWNjZXNzIiwib2NyX3N1Y2Nlc3Nfd2l0aF9zc2EiLCJvY3JfZmFpbGVkIiwidXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UiLCJtYXNrRnJhbWVTdHlsZSIsImNsaXBfZnJhbWUiLCJiYXNlX2NvbG9yIiwidXNlQ2FwdHVyZUJ1dHRvbkNvbG9yQ2hhbmdlIiwiY2FwdHVyZUJ1dHRvblN0eWxlIiwic3Ryb2tlX2NvbG9yIiwicmVzb3VyY2VCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJkZXZpY2VMYWJlbCIsInZpZGVvVGFyZ2V0SWQiLCJyb3RhdGlvbkRlZ3JlZSIsIm1pcnJvck1vZGUiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRlZCIsIl9fcHJlbG9hZGluZ1N0YXR1cyIsIl9fbG9hZFJlc291cmNlcyIsIl9fcHJlbG9hZGVkIiwiaXNJbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZWQiLCJnZXRQcmVsb2FkaW5nU3RhdHVzIiwiZ2V0T0NSRW5naW5lIiwiX19PQ1JFbmdpbmUiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJfX2xpY2Vuc2UiLCJtZXJnZWRPcHRpb25zIiwiXyIsIm1lcmdlIiwiX19vcHRpb25zIiwic2V0T3B0aW9uIiwiX193aW5kb3dFdmVudEJpbmQiLCJfX2RldmljZUluZm8iLCJnZXRPc1ZlcnNpb24iLCJnZXRPcHRpb24iLCJnZXRPY3JUeXBlIiwidHlwZSIsIl9fb2NyVHlwZVN0cmluZyIsImdldCIsImdldFVJT3JpZW50YXRpb24iLCJfX3VpT3JpZW50YXRpb24iLCJnZXRWaWRlb09yaWVudGF0aW9uIiwiX192aWRlb09yaWVudGF0aW9uIiwic3RhcnRPQ1IiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJfYXJndW1lbnRzIiwiYXJndW1lbnRzIiwiX3RoaXMyIiwib25JblByb2dyZXNzQ2hhbmdlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX19vY3JUeXBlIiwiX19zc2FNb2RlIiwiaW5kZXhPZiIsIl9fb25TdWNjZXNzIiwiX19vbkZhaWx1cmUiLCJfX29uSW5Qcm9ncmVzc0NoYW5nZSIsIl9fdG9wVUkiLCJnZXRPQ1JFbGVtZW50cyIsInRvcFVJIiwiX19taWRkbGVVSSIsIm1pZGRsZVVJIiwiX19ib3R0b21VSSIsImJvdHRvbVVJIiwiX19jaGFuZ2VTdGFnZSIsInByZWxvYWRpbmdTdGF0dXMiLCJfX3dhaXRQcmVsb2FkZWQiLCJjb25jYXQiLCJfX3N0YXJ0U2NhbiIsImUiLCJzdG9wT0NSIiwiY2xlYW51cCIsIl9fY2xvc2VDYW1lcmEiLCJzZXRJZ25vcmVDb21wbGV0ZSIsInZhbCIsInJlc3RhcnRPQ1IiLCJvY3JUeXBlIiwiX3RoaXMzIiwiX3RoaXM0Iiwid2FpdGluZ1JldHJ5Q291bnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoZWNrIiwic2V0VGltZW91dCIsIl90aGlzXyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsInNraXBUb3VjaEFjdGlvbmZvclpvb20iLCJldiIsInRvdWNoZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwib25iZWZvcmV1bmxvYWQiLCJfX3BhZ2VFbmQiLCJoYW5kbGVSZXNpemUiLCJfcmVmMiIsIl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplIiwiX190aHJvdHRsaW5nUmVzaXplVGltZXIiLCJhcHBseSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5IiwiX19zbGVlcCIsIm1zIiwiX19ibG9iVG9CYXNlNjQiLCJibG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJfX2dldFN0cmluZ09uV2FzbUhlYXAiLCJsZW5ndGhCeXRlcyIsImxlbmd0aEJ5dGVzVVRGOCIsIl9fc3RyaW5nT25XYXNtSGVhcCIsIl9tYWxsb2MiLCJzdHJpbmdUb1VURjgiLCJfX2VuY3J5cHRTY2FuUmVzdWx0Iiwib2NyUmVzdWx0Iiwic3RyaW5nT25XYXNtSGVhcCIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiZW5jcnlwdFJlc3VsdCIsIl9mcmVlIiwiX19zZXRWaWRlb1Jlc29sdXRpb24iLCJ2aWRlb0VsZW1lbnQiLCJfdGhpczUiLCJpc1N1cHBvcnRlZFJlc29sdXRpb24iLCJyZXNvbHV0aW9uVGV4dCIsIl9fY2FtU2V0Q29tcGxldGUiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJzcmNPYmplY3QiLCJfX3ZpZGVvV2lkdGgiLCJfX3ZpZGVvSGVpZ2h0IiwiX19nZXRTY2FubmVyQWRkcmVzcyIsIl9fb2NyVHlwZUxpc3QiLCJpbmNsdWRlcyIsImFkZHJlc3MiLCJkZXN0cm95Q2FsbGJhY2siLCJnZXRJRENhcmRTY2FubmVyIiwiZGVzdHJveUlEQ2FyZFNjYW5uZXIiLCJnZXRQYXNzcG9ydFNjYW5uZXIiLCJkZXN0cm95UGFzc3BvcnRTY2FubmVyIiwiZ2V0QWxpZW5TY2FubmVyIiwiZGVzdHJveUFsaWVuU2Nhbm5lciIsImdldENyZWRpdFNjYW5uZXIiLCJkZXN0cm95Q3JlZGl0U2Nhbm5lciIsIl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MiLCJfX3JldHJ5Q291bnRHZXRBZGRyZXNzIiwiX19nZXRCdWZmZXIiLCJfX0J1ZmZlciIsIl9fcmVzb2x1dGlvbldpZHRoIiwiX19yZXNvbHV0aW9uSGVpZ2h0IiwiX19yZXN1bHRCdWZmZXIiLCJfX21hc2tJbmZvUmVzdWx0QnVmIiwiX19nZXRJbWFnZUJhc2U2NCIsIm1hc2tNb2RlIiwiY3JvcE1vZGUiLCJfdGhpczYiLCJlbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UiLCJqcGdTaXplIiwiZ2V0RW5jb2RlZEpwZ1NpemUiLCJqcGdQb2ludGVyIiwiZ2V0RW5jb2RlZEpwZ0J1ZmZlciIsInJlc3VsdFZpZXciLCJVaW50OEFycmF5IiwiSEVBUDgiLCJidWZmZXIiLCJCbG9iIiwiZGVzdHJveUVuY29kZWRKcGciLCJfX2Rlc3Ryb3lCdWZmZXIiLCJfX2Rlc3Ryb3lSZXN1bHRCdWZmZXIiLCJfX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlciIsIl9fZGVzdHJveVByZXZJbWFnZSIsIl9fUHJldkltYWdlIiwiX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCIsIl9fZGVzdHJveVNjYW5uZXJBZGRyZXNzIiwiX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrIiwiX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUiLCJfdGhpczciLCJfX2dldFJvdGF0aW9uRGVncmVlIiwiX19nZXRNaXJyb3JNb2RlIiwiX19jcm9wSW1hZ2VGcm9tVmlkZW8iLCJfdGhpczgiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwiY2FudmFzIiwicm90YXRpb25DYW52YXMiLCJjYWxjQ2FudmFzIiwiY2FsY1ZpZGVvV2lkdGgiLCJjYWxjVmlkZW9IZWlnaHQiLCJjYWxjVmlkZW9DbGllbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCIsIl9fY3JvcEltYWdlU2l6ZVdpZHRoIiwiY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQiLCJfX2Nyb3BJbWFnZVNpemVIZWlnaHQiLCJjYWxjVmlkZW9PcmllbnRhdGlvbiIsIl9faXNSb3RhdGVkOTBvcjI3MCIsImNhbGNNYXhTV2lkdGgiLCJjYWxjTWF4U0hlaWdodCIsInN4Iiwic3kiLCJyYXRpbyIsInNXaWR0aCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsInNIZWlnaHQiLCJjYWxjQ29udGV4dCIsImdldENvbnRleHQiLCJ3aWxsUmVhZEZyZXF1ZW50bHkiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9fcm90YXRlIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsImhlaWdodCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9faXNDYXJkYm94RGV0ZWN0ZWQiLCJfYXJndW1lbnRzMiIsIl90aGlzOSIsImJveFR5cGUiLCJyZXRyeUltZyIsInNldCIsImRhdGEiLCJrb3IiLCJhbGllbiIsInBhc3Nwb3J0IiwiZGV0ZWN0X2lkY2FyZF9vcHQiLCJkZXRlY3RfaWRjYXJkIiwibWVzc2FnZSIsInRvU3RyaW5nIiwiX19zdGFydFJlY29nbml0aW9uIiwic3NhTW9kZSIsImlzU2V0SWdub3JlQ29tcGxldGUiLCJfdGhpczEwIiwicmVzdWx0QnVmZmVyIiwicmVjb2duaXRpb24iLCJfcmVmNCIsIl9vY3JSZXN1bHQiLCJfb2NyUmVzdWx0MiIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0IiwiX19jc3ZUb09iamVjdCIsImNvbXBsZXRlIiwiX19tYW51YWxPQ1JSZXRyeUNvdW50IiwiX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50IiwicXVldWVJZHgiLCJfX2RldGVjdGVkQ2FyZFF1ZXVlIiwiX19ibHVyQ2FwdHVyZUJ1dHRvbiIsIl9fc2V0U3R5bGUiLCJkaXNwbGF5IiwiX3giLCJpc0NyZWRpdENhcmQiLCJvcmlnaW5JbWFnZSIsIm1hc2tJbWFnZSIsIl9fc3RhcnRUcnV0aCIsInJlamVjdCIsInNjYW5UcnV0aCIsInN0ciIsInBhaXJzIiwic3BsaXQiLCJvYmoiLCJpIiwicGFpciIsIl9fZ2V0TWFza0luZm8iLCJtYXNrSW5mb1Jlc3VsdEJ1ZiIsImdldE1hc2tSZWN0IiwiX19zdGFydFRydXRoUmV0cnkiLCJfdGhpczExIiwiX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX3RoaXMxMiIsIl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiIsIl90aGlzMTMiLCJpc1Bhc3Nwb3J0IiwiX19zZXR1cFZpZGVvIiwiX19zdHJlYW0iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwbGF5IiwiX19hZGp1c3RTdHlsZSIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwibmFtZSIsImVycm9yTWVzc2FnZSIsIl9fb25GYWlsdXJlUHJvY2VzcyIsInN0b3BTdHJlYW0iLCJlbCIsImFzc2lnbiIsIl9fY2hhbmdlT0NSU3RhdHVzIiwiX19vY3JTdGF0dXMiLCJfYXJndW1lbnRzMyIsIl90aGlzMTQiLCJmb3JjZVVwZGF0ZSIsInJlY29nbml6ZWRJbWFnZSIsIl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCIsIl9faW5Qcm9ncmVzc1N0ZXAiLCJndWlkZUJveCIsIm1hc2tCb3hXcmFwIiwiY2FwdHVyZUJ1dHRvbiIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsIl9tYXNrQm94V3JhcCRxdWVyeVNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJfY2FwdHVyZUJ1dHRvbiRxdWVyeVMiLCJjYWxsIiwiX191cGRhdGVQcmV2aWV3VUkiLCJfX2hpZGVQcmV2aWV3VUkiLCJwcmV2aWV3VUlXcmFwIiwicHJldmlld0ltYWdlIiwiaW1nU3R5bGUiLCJjb250ZXh0IiwiX19nZXRJbnB1dERldmljZXMiLCJraW5kIiwibGFiZWwiLCJfdGhpczE1IiwibWVkaWFEZXZpY2VzIiwiZGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ2aWRlb0RldmljZXMiLCJmaWx0ZXIiLCJkZXZpY2UiLCJnZXRDYXBhYmlsaXRpZXMiLCJfY2FwJGZhY2luZ01vZGUiLCJjYXAiLCJmYWNpbmdNb2RlIiwiX19mYWNpbmdNb2RlQ29uc3RyYWludCIsImNoZWNrVUlPcmllbnRhdGlvbiIsImN1cnJlbnQiLCJvY3IiLCJpc0NoYW5nZWQiLCJfX3ByZXZVaU9yaWVudGF0aW9uIiwiX19jbGVhckN1c3RvbVVJIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiX19zZXR1cERvbUVsZW1lbnRzIiwiX3RoaXMxNiIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiY3VzdG9tVUlXcmFwIiwiY2FwdHVyZVVJV3JhcCIsImNhcHR1cmVVSSIsInByZXZpZXdVSSIsInJlbW92ZSIsIm9jclN0eWxlIiwid3JhcFN0eWxlIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsIm1hc2tfZnJhbWUiLCJ2aWRlb1N0eWxlIiwicm90YXRlQ3NzIiwibWlycm9yQ3NzIiwicm90YXRlQW5kTWlycm9yQ3NzIiwiX29iamVjdFNwcmVhZCIsInRyYW5zZm9ybSIsImNhbnZhc1N0eWxlIiwibGVmdCIsInRvcCIsImJvcmRlciIsInJpZ2h0IiwiYm90dG9tIiwiY3VzdG9tVUlXcmFwU3R5bGUiLCJjYXB0dXJlVUlXcmFwU3R5bGUiLCJjYXB0dXJlQnV0dG9uU3JjU1ZHIiwidGhhdCIsIl9fb25DbGlja0NhcHR1cmVCdXR0b24iLCJwcmV2aWV3VUlXcmFwU3R5bGUiLCJfX29jciIsIl9fY2FudmFzIiwiX19yb3RhdGlvbkNhbnZhcyIsIl9fdmlkZW8iLCJfX3ZpZGVvV3JhcCIsIl9fZ3VpZGVCb3giLCJfX2d1aWRlQm94V3JhcCIsIl9fbWFza0JveFdyYXAiLCJfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiX19jdXN0b21VSVdyYXAiLCJfX2NhcHR1cmVVSVdyYXAiLCJfX2NhcHR1cmVVSSIsIl9fY2FwdHVyZUJ1dHRvbiIsIl9fcHJldmlld1VJV3JhcCIsIl9fcHJldmlld1VJIiwiX19wcmV2aWV3SW1hZ2UiLCJfX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJfdGhpczE3IiwiZGV2aWNlSWRMaXN0IiwibWFwIiwiZGV2aWNlSWQiLCJjb25zdHJhaW50V2lkdGgiLCJjb25zdHJhaW50SGVpZ2h0IiwiaWRlYWwiLCJjb25zdHJhaW50cyIsImF1ZGlvIiwiem9vbSIsImZvY3VzTW9kZSIsIndoaXRlQmFsYW5jZU1vZGUiLCJnZXRVc2VyTWVkaWEiLCJzdHJlYW0iLCJfYXJndW1lbnRzNCIsIl90aGlzMTgiLCJpc0ZpcnN0Q2FsbGVkIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsIm5ld1ZpZGVvV2lkdGgiLCJuZXdWaWRlb0hlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwiX19ndWlkZUJveFJhdGlvQnlXaWR0aCIsInZpZGVvUmF0aW9CeUhlaWdodCIsIl9fdmlkZW9SYXRpb0J5SGVpZ2h0IiwicmVkdWNlZEd1aWRlQm94V2lkdGgiLCJfX2d1aWRlQm94UmVkdWNlUmF0aW8iLCJyZWR1Y2VkR3VpZGVCb3hIZWlnaHQiLCJwYWRkaW5nIiwidmlkZW9Jbm5lckdhcCIsImJhY2tncm91bmRDb2xvciIsIm1hc2tCb3hJbm5lciIsInIiLCJpc05hTiIsIm1hc2tCb3hJbm5lcldpZHRoIiwibWF4IiwibWFza0JveElubmVySGVpZ2h0IiwiY2FsY1N1bU9mSGVpZ2h0Qm90dG9tVUlDaGlsZE5vZGVzIiwiX19jYWxjU3VtT2ZIZWlnaHRDaGlsZE5vZGVzIiwiY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQiLCJjYXB0dXJlVUlQYWRkaW5nQm90dG9tIiwicGFyc2VJbnQiLCJwYWRkaW5nVG9wIiwiYmFzZWxpbmUiLCJzdW0iLCJpdGVtIiwiY2hpbGROb2RlcyIsInN0b3BTY2FuIiwiX3RoaXMxOSIsIl9fcmVzb3VyY2VzTG9hZGVkIiwic2RrU3VwcG9ydEVudiIsImlzU3VwcG9ydFNpbWQiLCJlbnZJbmZvIiwib3MiLCJvc1NpbXBsZSIsInVzZWJPQ1JFbnZJbmZvIiwidXJsIiwiZmV0Y2giLCJocmVmIiwidGhlbiIsInJlcyIsInRleHQiLCJyZWdleCIsInNvdXJjZSIsInJlcGxhY2UiLCJldmFsIiwib25SdW50aW1lSW5pdGlhbGl6ZWQiLCJfcmVmNyIsIl94MiIsIl9fc3RhcnRTY2FuSW1wbCIsIl90aGlzMjAiLCJfX2RldGVjdGVkIiwiX19hZGRyZXNzIiwiX19zc2FSZXRyeUNvdW50Iiwic2NhbiIsIl9yZWY4IiwiaXNEZXRlY3RlZENhcmQiLCJzc2FSZXN1bHQiLCJzc2FSZXN1bHRMaXN0IiwibWFza0luZm8iLCJyZXNvbHV0aW9uX3ciLCJyZXNvbHV0aW9uX2giLCJfX2VucXVldWVEZXRlY3RlZENhcmRRdWV1ZSIsInB1c2giLCJyZXRyeVN0YXJ0RGF0ZSIsIkRhdGUiLCJyZXRyeVdvcmtpbmdUaW1lIiwibGVnYWN5Rm9ybWF0IiwibmV3Rm9ybWF0IiwicGFyc2VPY3JSZXN1bHQiLCJyZXZpZXdfcmVzdWx0Iiwib2NyX3R5cGUiLCJvY3JfcmVzdWx0Iiwib2NyX29yaWdpbl9pbWFnZSIsIm9jcl9tYXNraW5nX2ltYWdlIiwic3NhX21vZGUiLCJlbmNyeXB0ZWRSZXN1bHQiLCJlbmNyeXB0ZWQiLCJvY3JfZGF0YSIsIl9fb25TdWNjZXNzUHJvY2VzcyIsIl9fcmVjb3ZlcmVkIiwiaW1nRGF0YVVSTCIsImxpbWl0U2F2ZUltYWdlQ291bnQiLCJzaGlmdCIsIl9fZGVidWdNb2RlIiwiX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NCIsIl90aGlzMjEiLCJhcGlfcmVzcG9uc2UiLCJyZXN1bHRfY29kZSIsInJlc3VsdF9tZXNzYWdlIiwicmVzdWx0Q29kZSIsIl90aGlzMjIiLCJlcnJvckRldGFpbCIsInN0YWNrIiwiZXJyb3JfZGV0YWlsIiwiX3RoaXMyMyIsIl9fcmVjb3ZlcnlTY2FuIiwiX3RoaXMyNCIsImNhbnZhc0NvbnRleHQiLCJjbGVhclJlY3QiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQiLCJzdG9wIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZXMiOlsib2NyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiBnbG9iYWwtbW9kdWxlICovXG5pbXBvcnQgZGV0ZWN0b3IgZnJvbSAnLi9oZWxwZXJzL2RldGVjdG9yLmpzJztcbmltcG9ydCBwYXJzZXIgZnJvbSAnLi9oZWxwZXJzL3BhcnNlci5qcyc7XG5pbXBvcnQgeyBzaW1kLCB0aHJlYWRzIH0gZnJvbSAnLi9oZWxwZXJzL3dhc20tZmVhdHVyZS1kZXRlY3QuanMnO1xubGV0IGluc3RhbmNlO1xuY2xhc3MgVXNlQk9DUiB7XG4gIElOX1BST0dSRVNTID0ge1xuICAgIE5PTkU6ICdub25lJyxcbiAgICBOT1RfUkVBRFk6ICdub3RfcmVhZHknLFxuICAgIFJFQURZOiAncmVhZHknLFxuICAgIENBUkRfREVURUNUX1NVQ0NFU1M6ICdkZXRlY3Rfc3VjY2VzcycsXG4gICAgQ0FSRF9ERVRFQ1RfRkFJTEVEOiAnZGV0ZWN0X2ZhaWxlZCcsXG4gICAgTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUzogJ21hbnVhbF9jYXB0dXJlX3N1Y2Nlc3MnLFxuICAgIE1BTlVBTF9DQVBUVVJFX0ZBSUxFRDogJ21hbnVhbF9jYXB0dXJlX2ZhaWxlZCcsXG4gICAgT0NSX1JFQ09HTklaRUQ6ICdyZWNvZ25pemVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQTogJ3JlY29nbml6ZWRfd2l0aF9zc2EnLFxuICAgIE9DUl9TVUNDRVNTOiAnb2NyX3N1Y2Nlc3MnLFxuICAgIE9DUl9TVUNDRVNTX1dJVEhfU1NBOiAnb2NyX3N1Y2Nlc3Nfd2l0aF9zc2EnLFxuICAgIE9DUl9GQUlMRUQ6ICdvY3JfZmFpbGVkJ1xuICB9O1xuICBPQ1JfU1RBVFVTID0ge1xuICAgIE5PVF9SRUFEWTogLTEsXG4gICAgUkVBRFk6IDAsXG4gICAgT0NSX1NVQ0NFU1M6IDEsXG4gICAgRE9ORTogMlxuICB9O1xuICBQUkVMT0FESU5HX1NUQVRVUyA9IHtcbiAgICBOT1RfU1RBUlRFRDogLTEsXG4gICAgU1RBUlRFRDogMCxcbiAgICBET05FOiAxXG4gIH07XG5cbiAgLyoqIHB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBfX2RlYnVnTW9kZSA9IGZhbHNlO1xuICBfX09DUkVuZ2luZSA9IG51bGw7XG4gIF9faW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgX19wcmVsb2FkZWQgPSBmYWxzZTtcbiAgX19wcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRDtcbiAgX19saWNlbnNlO1xuICBfX29jclR5cGUgPSBudWxsO1xuICBfX3NzYU1vZGUgPSBmYWxzZTtcbiAgX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuTk9UX1JFQURZO1xuICBfX21hbnVhbE9DUk1heFJldHJ5Q291bnQgPSAxMDtcbiAgX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgX19zc2FSZXRyeUNvdW50ID0gMDtcbiAgX19kZXRlY3RlZENhcmRRdWV1ZSA9IFtdO1xuICBfX2RldGVjdGVkQ2FyZFF1ZXVlQmFzZTY0ID0gW107XG4gIF9fb25TdWNjZXNzID0gbnVsbDtcbiAgX19vbkZhaWx1cmUgPSBudWxsO1xuICBfX29uSW5Qcm9ncmVzc0NoYW5nZSA9IG51bGw7XG4gIF9fb2NyVHlwZUxpc3QgPSBbJ2lkY2FyZCcsICdkcml2ZXInLCAncGFzc3BvcnQnLCAnZm9yZWlnbi1wYXNzcG9ydCcsICdhbGllbicsICdjcmVkaXQnLCAnaWRjYXJkLXNzYScsICdkcml2ZXItc3NhJywgJ3Bhc3Nwb3J0LXNzYScsICdmb3JlaWduLXBhc3Nwb3J0LXNzYScsICdhbGllbi1zc2EnXTtcbiAgX19vY3JUeXBlU3RyaW5nID0gbmV3IE1hcChbWycxJywgJ2lkY2FyZCddLCBbJzInLCAnZHJpdmVyJ10sIFsnMycsICdwYXNzcG9ydCddLCBbJzQnLCAnZm9yZWlnbi1wYXNzcG9ydCddLCBbJzUnLCAnYWxpZW4nXSwgWyc1LTEnLCAnYWxpZW4nXSwgWyc1LTInLCAnYWxpZW4nXSwgWyc1LTMnLCAnYWxpZW4nXV0pO1xuICBfX3BhZ2VFbmQgPSBmYWxzZTtcbiAgX19vY3I7XG4gIF9fY2FudmFzO1xuICBfX3JvdGF0aW9uQ2FudmFzO1xuICBfX3ZpZGVvO1xuICBfX3ZpZGVvV3JhcDtcbiAgX19ndWlkZUJveDtcbiAgX19ndWlkZUJveFdyYXA7XG4gIF9fbWFza0JveFdyYXA7XG4gIF9fcHJldmVudFRvRnJlZXplVmlkZW87XG4gIF9fY3VzdG9tVUlXcmFwO1xuICBfX3RvcFVJO1xuICBfX21pZGRsZVVJO1xuICBfX2JvdHRvbVVJO1xuICBfX3ByZXZpZXdVSVdyYXA7XG4gIF9fcHJldmlld1VJO1xuICBfX3ByZXZpZXdJbWFnZTtcbiAgX19jYXB0dXJlVUlXcmFwO1xuICBfX2NhcHR1cmVVSTtcbiAgX19jYXB0dXJlQnV0dG9uO1xuICBfX2FkZHJlc3MgPSAwO1xuICBfX2RldGVjdGVkID0gZmFsc2U7XG4gIF9fcmVjb3ZlcmVkID0gZmFsc2U7XG4gIF9fQnVmZmVyID0gbnVsbDtcbiAgX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICBfX21hc2tJbmZvUmVzdWx0QnVmID0gbnVsbDtcbiAgX19QcmV2SW1hZ2UgPSBudWxsO1xuICBfX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICBfX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gIF9fcmVzb2x1dGlvbldpZHRoID0gMDtcbiAgX19yZXNvbHV0aW9uSGVpZ2h0ID0gMDtcbiAgX192aWRlb1dpZHRoID0gMDtcbiAgX192aWRlb0hlaWdodCA9IDA7XG4gIF9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gIF9faW50ZXJ2YWxUaW1lcjtcbiAgX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyO1xuICBfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuICBfX3N0cmVhbTtcbiAgX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgX19mYWNpbmdNb2RlQ29uc3RyYWludCA9ICdlbnZpcm9ubWVudCc7XG4gIF9fdWlPcmllbnRhdGlvbiA9ICcnO1xuICBfX3ByZXZVaU9yaWVudGF0aW9uID0gJyc7XG4gIF9fdmlkZW9PcmllbnRhdGlvbiA9ICcnO1xuICBfX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5ID0gNTAwO1xuICBfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzID0gMzAwOyAvLyDsnoTsi5xcbiAgX19yZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7IC8vIOyehOyLnFxuICBfX2RldmljZUluZm87XG4gIF9faXNSb3RhdGVkOTBvcjI3MCA9IGZhbHNlO1xuICBfX2luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk7XG4gIF9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHRoaXMuSU5fUFJPR1JFU1MuTk9ORTtcbiAgX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgX19ndWlkZUJveFJhdGlvQnlXaWR0aCA9IDEuMDsgLy8g7IiY7KCV67aI6rCAXG4gIF9fdmlkZW9SYXRpb0J5SGVpZ2h0ID0gMC45OyAvLyDsiJjsoJXrtojqsIBcbiAgX19ndWlkZUJveFJlZHVjZVJhdGlvID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgX19jcm9wSW1hZ2VTaXplV2lkdGggPSAwO1xuICBfX2Nyb3BJbWFnZVNpemVIZWlnaHQgPSAwO1xuXG4gIC8qKiBEZWZhdWx0IG9wdGlvbnMgKi9cbiAgX19vcHRpb25zID0gbmV3IE9iamVjdCh7XG4gICAgLy8g65SU67KE6rmFIOyYteyFmFxuICAgIHNob3dDbGlwRnJhbWU6IGZhbHNlLFxuICAgIC8vIGNpbHAtZnJhbWUg67O06riwXG4gICAgc2hvd0NhbnZhc1ByZXZpZXc6IGZhbHNlLFxuICAgIC8vIGNhbnZhcyBwcmV2aWV3IOuztOq4sFxuXG4gICAgLy8g7Lac66ClIOyYteyFmFxuICAgIHVzZUVuY3J5cHRNb2RlOiBmYWxzZSxcbiAgICAvLyDslZTtmLjtmZQg7KCB7JqpXG4gICAgdXNlTGVnYWN5Rm9ybWF0OiBmYWxzZSxcbiAgICAvLyBMZWdhY3kgZm9ybWF0IOyngOybkFxuICAgIHVzZU1hc2tJbmZvOiB0cnVlLFxuICAgIC8vIOuniOyKpO2CuSDsooztkZwg7KeA7JuQXG5cbiAgICAvLyBVSSDshKTsoJVcbiAgICB1c2VUb3BVSTogdHJ1ZSxcbiAgICAvLyDsg4Hri6ggVUlcbiAgICB1c2VUb3BVSVRleHRNc2c6IGZhbHNlLFxuICAgIC8v7IOB64uoIFVJID4gVEVYVFxuICAgIHVzZU1pZGRsZVVJOiB0cnVlLFxuICAgIC8v7KSR64uoIFVJXG4gICAgdXNlTWlkZGxlVUlUZXh0TXNnOiB0cnVlLFxuICAgIC8vIOykkeuLqCBVSSA+IFRFWFRcbiAgICB1c2VCb3R0b21VSTogdHJ1ZSxcbiAgICAvLyDtlZjri6ggVUlcbiAgICB1c2VCb3R0b21VSVRleHRNc2c6IGZhbHNlLFxuICAgIC8vIO2VmOuLqCBVSSA+IFRFWFRcbiAgICB1c2VQcmV2aWV3VUk6IHRydWUsXG4gICAgLy8gUHJldmlldyBVSVxuICAgIHVzZUNhcHR1cmVVSTogZmFsc2UsXG4gICAgLy8g7IiY64+ZIOy0rOyYgSBVSSDsgqzsmqlcblxuICAgIC8vIOyduOyLnSDtlITroIjsnoQg7Ji17IWYXG4gICAgZnJhbWVCb3JkZXJTdHlsZToge1xuICAgICAgd2lkdGg6IDUsXG4gICAgICAvLyBib3JkZXItd2lkdGhcbiAgICAgIHJhZGl1czogMjAsXG4gICAgICAvLyBib3JkZXItcmFkaXVzXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcbiAgICAgIC8vIGJvcmRlci1zdHlsZVxuXG4gICAgICAvLyDri6jqs4Trs4Qg7J247IudIO2UhOugiOyehCBib3JkZXIg7IOJ7IOBXG4gICAgICBub3RfcmVhZHk6ICcjMDAwMDAwJyxcbiAgICAgIC8vIOyKpOy6lOykgOu5hCA6IOqygOyglVxuICAgICAgcmVhZHk6ICcjYjhiOGI4JyxcbiAgICAgIC8vIOyKpOy6lOuMgOq4sCA6IO2ajOyDiVxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDshLHqs7UgOiDtlZjriphcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjNzI1YjY3JyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDsi6TtjKggOiDrs7TrnbxcbiAgICAgIG1hbnVhbF9jYXB0dXJlX3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIOyImOuPmey0rOyYgSDshLHqs7UgOiDtlZjriphcbiAgICAgIG1hbnVhbF9jYXB0dXJlX2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyLpO2MqCA6IOuztOudvFxuICAgICAgcmVjb2duaXplZDogJyMwMDNhYzInLFxuICAgICAgLy8gT0NS7JmE66OMIDog7YyM656RXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzAwM2FjMicsXG4gICAgICAvLyDsgqzrs7jtjJDrs4TspJEo7IKs67O47YyQ67OEIE9OKSA6IO2MjOuekVxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTRiMDBlJyxcbiAgICAgIC8vIE9DUuyZhOujjCA6IOy0iOuhnVxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTRiMDBlJyxcbiAgICAgIC8vIE9DUuyZhOujjCjsgqzrs7jtjJDrs4QgT04pIDog7LSI66GdXG4gICAgICBvY3JfZmFpbGVkOiAnI0ZBMTEzRCcgLy8gT0NS7Iuk7YyoIDog67mo6rCVXG4gICAgfSxcblxuICAgIC8vIOuniOyKpO2BrCDtlITroIjsnoQgZmlsbCDsu6zrn6wg67OA6rK9IOyCrOyaqSDsl6zrtoBcbiAgICB1c2VNYXNrRnJhbWVDb2xvckNoYW5nZTogdHJ1ZSxcbiAgICAvLyDrp4jsiqTtgawg7ZSE66CI7J6EIOyYteyFmCAo7Lm066mU6528IOu5hOuUlOyYpCDsmIHsl63sl5DshJwg7J247IudIO2UhOugiOyehOunjCDrs7TsnbTqsowg7ZWY6rOgIOuCmOuouOyngOulvCDrja7slrTsk7DripQg7ZSE66CI7J6EIOyYgeyXrSlcbiAgICBtYXNrRnJhbWVTdHlsZToge1xuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLFxuICAgICAgLy8gY2xpcC1mcmFtZSDsg4nsg4EgOiDrlKXtjbztlIwgKOyImOygleu2iOqwgClcbiAgICAgIGJhc2VfY29sb3I6ICcjMzMzMzMzJyxcbiAgICAgIC8vIG1hc2stZnJhbWUg7IOJ7IOBIDog64uk7YGs6re466CI7J20ICjtiKzrqoXrj4TripQg7IiY7KCV67aI6rCAIGZm66GcIOqzoOyglSlcblxuICAgICAgLy8g64uo6rOE67OEIOuniOyKpO2BrCDtlITroIjsnoQgZmlsbCDsg4nsg4FcbiAgICAgIG5vdF9yZWFkeTogJyMzMzMzMzMnLFxuICAgICAgLy8g7Iqk7LqU7KSA67mEXG4gICAgICByZWFkeTogJyMzMzMzMzMnLFxuICAgICAgLy8g7Iqk7LqU64yA6riwXG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyMyMjIyMjInLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyEseqztVxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyMzMzMzMzMnLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyLpO2MqFxuICAgICAgbWFudWFsX2NhcHR1cmVfc3VjY2VzczogJyMyMjIyMjInLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyEseqztVxuICAgICAgbWFudWFsX2NhcHR1cmVfZmFpbGVkOiAnIzMzMzMzMycsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7Iuk7YyoXG4gICAgICByZWNvZ25pemVkOiAnIzIyMjIyMicsXG4gICAgICAvLyBPQ1LsmYTro4xcbiAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6ICcjMjIyMjIyJyxcbiAgICAgIC8vIOyCrOuzuO2MkOuzhOykkSjsgqzrs7jtjJDrs4QgT04pXG4gICAgICBvY3Jfc3VjY2VzczogJyMxMTExMTEnLFxuICAgICAgLy9PQ1LsmYTro4xcbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzExMTExMScsXG4gICAgICAvLyBPQ1LsmYTro4wo7IKs67O47YyQ67OEIE9OKVxuICAgICAgb2NyX2ZhaWxlZDogJyMxMTExMTEnIC8vIE9DUuyLpO2MqFxuICAgIH0sXG5cbiAgICAvLyDsiJjrj5nstKzsmIEg67KE7Yq8IOyDieyDgSDrs4Dqsr0g7IKs7JqpIOyXrOu2gFxuICAgIHVzZUNhcHR1cmVCdXR0b25Db2xvckNoYW5nZTogdHJ1ZSxcbiAgICAvLyDsiJjrj5nstKzsmIEg67KE7Yq8IOyYteyFmFxuICAgIGNhcHR1cmVCdXR0b25TdHlsZToge1xuICAgICAgc3Ryb2tlX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAvLyDrsoTtirwg7YWM65GQ66asKHN0cm9rZSkg7IOJ7IOBXG5cbiAgICAgIC8vIOuLqOqzhOuzhCDrsoTtirwg7IOJ7IOBXG4gICAgICBub3RfcmVhZHk6ICcjMDAwMDAwJyxcbiAgICAgIC8vIOyKpOy6lOykgOu5hFxuICAgICAgcmVhZHk6ICcjYjhiOGI4JyxcbiAgICAgIC8vIOyKpOy6lOuMgOq4sFxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDshLHqs7VcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjNzI1YjY3JyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDsi6TtjKhcbiAgICAgIG1hbnVhbF9jYXB0dXJlX3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIOyImOuPmey0rOyYgSDshLHqs7VcbiAgICAgIG1hbnVhbF9jYXB0dXJlX2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyLpO2MqFxuICAgICAgcmVjb2duaXplZDogJyMwMDNhYzInLFxuICAgICAgLy8gT0NS7JmE66OMXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzAwM2FjMicsXG4gICAgICAvLyDsgqzrs7jtjJDrs4TspJEo7IKs67O47YyQ67OEIE9OKVxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTRiMDBlJyxcbiAgICAgIC8vT0NS7JmE66OMXG4gICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogJyMxNGIwMGUnLFxuICAgICAgLy8gT0NS7JmE66OMKOyCrOuzuO2MkOuzhCBPTilcbiAgICAgIG9jcl9mYWlsZWQ6ICcjRkExMTNEJyAvLyBPQ1Lsi6TtjKhcbiAgICB9LFxuXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgIC8vIHdhc20sIGRhdGEg7YyM7J28IOumrOyGjOyKpCBiYXNlIOqyveuhnCAoQ0ROIOyCrOyaqeyLnCDrs4Dqsr0pXG4gICAgZGV2aWNlTGFiZWw6ICcnLFxuICAgIHZpZGVvVGFyZ2V0SWQ6ICcnLFxuICAgIC8vIOy5tOuplOudvCDshKTsoJVcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICAvLyByb3RhdGlvbi1kZWdyZWUg7Lm066mU65286rCAIO2ajOyghOuQnCDqsIHrj4QgKDkwLCAxOTAsIDI3MClcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgICAvLyBtaXJyb3ItbW9kZSDshYDtlLwg7Lm066mU6528KO2CpOyYpOyKpO2BrCDrk7EpIOyCrOyaqeyLnCDsoozsmrAg67CY7KCEXG5cbiAgICAvLyDsgqzrs7jtjJDrs4Qg7ISk7KCVXG4gICAgLy8gRmFsc2UgTmVnYXRpdmUo7JiI7Lih6rCS7J2AIEZBS0XsnbjrjbAsIOyLpOygnOqwkuydgCBSRUFM7J2065287IScIO2LgOumsOqyveyasCkg66W8IOuCruy2lOq4sCDsnITtlbQsXG4gICAgLy8gc3NhTWF4UmV0cnlDb3VudCDshKTsoJUg6rCS66eM7YG8IOyerOyLnOuPhO2VmOyXrCDtlZzrsojsnbTrnbzrj4QgUkVBTOydtCDrnKjrqbQgUkVBTOuhnCDtjJDsoJVcbiAgICBzc2FNYXhSZXRyeUNvdW50OiAwXG4gIH0pO1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqIHB1YmxpYyBtZXRob2RzICovXG4gIGFzeW5jIHByZWxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRDtcbiAgICAgIGF3YWl0IHRoaXMuX19sb2FkUmVzb3VyY2VzKCk7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORTtcbiAgICAgIHRoaXMuX19wcmVsb2FkZWQgPSB0cnVlO1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLl9faW5pdGlhbGl6ZWQ7XG4gIH1cbiAgaXNQcmVsb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkZWQ7XG4gIH1cbiAgZ2V0UHJlbG9hZGluZ1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lO1xuICB9XG4gIGluaXQoc2V0dGluZ3MpIHtcbiAgICBpZiAoISEhc2V0dGluZ3MubGljZW5zZUtleSkgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIGtleSBpcyBlbXB0eScpO1xuICAgIHRoaXMuX19saWNlbnNlID0gc2V0dGluZ3MubGljZW5zZUtleTtcbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5fX29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy5fX3dpbmRvd0V2ZW50QmluZCgpO1xuICAgICAgdGhpcy5fX2RldmljZUluZm8gPSBkZXRlY3Rvci5nZXRPc1ZlcnNpb24oKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldE9wdGlvbihzZXR0aW5ncykge1xuICAgIHRoaXMuX19vcHRpb25zID0gc2V0dGluZ3M7XG4gIH1cbiAgZ2V0T3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucztcbiAgfVxuICBnZXRPY3JUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclR5cGVTdHJpbmcuZ2V0KHR5cGUpO1xuICB9XG4gIGdldFVJT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX191aU9yaWVudGF0aW9uO1xuICB9XG4gIGdldFZpZGVvT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICB9XG4gIGFzeW5jIHN0YXJ0T0NSKHR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsKSB7XG4gICAgaWYgKCEhIXR5cGUgfHwgISEhb25TdWNjZXNzIHx8ICEhIW9uRmFpbHVyZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fb2NyVHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fX3NzYU1vZGUgPSB0aGlzLl9fb2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMTtcbiAgICB0aGlzLl9fb25TdWNjZXNzID0gb25TdWNjZXNzO1xuICAgIHRoaXMuX19vbkZhaWx1cmUgPSBvbkZhaWx1cmU7XG4gICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZSA9IG9uSW5Qcm9ncmVzc0NoYW5nZTtcbiAgICBpZiAob25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlVG9wVUkpIHtcbiAgICAgICAgdGhpcy5fX3RvcFVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS50b3BVSTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkge1xuICAgICAgICB0aGlzLl9fbWlkZGxlVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm1pZGRsZVVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJKSB7XG4gICAgICAgIHRoaXMuX19ib3R0b21VSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuYm90dG9tVUk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW5pdGlhbGl6ZWQhJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCk7XG4gICAgICBpZiAoIXRoaXMuaXNQcmVsb2FkZWQoKSAmJiBwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX193YWl0UHJlbG9hZGVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5ET05FKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgYWJub3JtYWxseSBwcmVsb2FkaW5nIHN0YXR1cywgcHJlbG9hZGVkOiAke3RoaXMuaXNQcmVsb2FkZWQoKX0gLyBwcmVsb2FkaW5nU3RhdHVzOiAke3RoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9XG4gIH1cbiAgc3RvcE9DUigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICB0aGlzLl9fb25TdWNjZXNzID0gbnVsbDtcbiAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgfVxuICBzZXRJZ25vcmVDb21wbGV0ZSh2YWwpIHtcbiAgICB0aGlzLl9fT0NSRW5naW5lLnNldElnbm9yZUNvbXBsZXRlKHZhbCk7XG4gIH1cbiAgYXN5bmMgcmVzdGFydE9DUihvY3JUeXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgLy8gYXdhaXQgdGhpcy5zdG9wT0NSKCk7XG4gICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgYXdhaXQgdGhpcy5zdGFydE9DUihvY3JUeXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgYXN5bmMgX193YWl0UHJlbG9hZGVkKCkge1xuICAgIGxldCB3YWl0aW5nUmV0cnlDb3VudCA9IDA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FpdGluZ1JldHJ5Q291bnQrKztcbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfTtcbiAgICAgIGNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgX193aW5kb3dFdmVudEJpbmQoKSB7XG4gICAgY29uc3QgX3RoaXNfID0gdGhpcztcbiAgICBpZiAoL2lwaG9uZXxpcG9kfGlwYWQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIGNvbnN0IHNraXBUb3VjaEFjdGlvbmZvclpvb20gPSBldiA9PiB7XG4gICAgICAgIGlmIChldi50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpc18uX19wYWdlRW5kID0gdHJ1ZTtcbiAgICAgIF90aGlzXy5jbGVhbnVwKCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLl9fb2NyVHlwZSkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUpIHtcbiAgICAgICAgX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gdHJ1ZTtcbiAgICAgICAgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgX3RoaXNfLnJlc3RhcnRPQ1IoX3RoaXNfLl9fb2NyVHlwZSwgX3RoaXNfLl9fb25TdWNjZXNzLCBfdGhpc18uX19vbkZhaWx1cmUsIF90aGlzXy5fX29uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lcikge1xuICAgICAgICBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGhhbmRsZVJlc2l6ZSwgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX3NsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG4gIF9fYmxvYlRvQmFzZTY0KGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOudvOydtOyEvOyKpCDtgqTrpbwgaGVhcCDsl5AgYWxsb2NhdGlvbiAqL1xuICBfX2dldFN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKCEhIXRoaXMuX19saWNlbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpY2Vuc2UgS2V5IGlzIGVtcHR5Jyk7XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aEJ5dGVzID0gdGhpcy5fX09DUkVuZ2luZS5sZW5ndGhCeXRlc1VURjgodGhpcy5fX2xpY2Vuc2UpICsgMTtcbiAgICB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyhsZW5ndGhCeXRlcyk7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5zdHJpbmdUb1VURjgodGhpcy5fX2xpY2Vuc2UsIHRoaXMuX19zdHJpbmdPbldhc21IZWFwLCBsZW5ndGhCeXRlcyk7XG4gICAgcmV0dXJuIHRoaXMuX19zdHJpbmdPbldhc21IZWFwO1xuICB9XG4gIF9fZW5jcnlwdFNjYW5SZXN1bHQob2NyUmVzdWx0KSB7XG4gICAgbGV0IHN0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBpZiAoISEhb2NyUmVzdWx0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignb2NyUmVzdWx0IGlzIGVtcHR5Jyk7XG4gICAgICB9XG4gICAgICBjb25zdCBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2NyUmVzdWx0KTtcbiAgICAgIGNvbnN0IGxlbmd0aEJ5dGVzID0gdGhpcy5fX09DUkVuZ2luZS5sZW5ndGhCeXRlc1VURjgoanNvblN0cmluZykgKyAxO1xuICAgICAgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyhsZW5ndGhCeXRlcyk7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLnN0cmluZ1RvVVRGOChqc29uU3RyaW5nLCBzdHJpbmdPbldhc21IZWFwLCBsZW5ndGhCeXRlcyk7XG4gICAgICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZS5lbmNyeXB0UmVzdWx0KHN0cmluZ09uV2FzbUhlYXApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoc3RyaW5nT25XYXNtSGVhcCkge1xuICAgICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICBzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX19zZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIGxldCByZXNvbHV0aW9uVGV4dCA9ICdub3QgcmVhZHknO1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAwKSB7XG4gICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgICByZXNvbHV0aW9uVGV4dFxuICAgICAgfTtcbiAgICB9XG4gICAgcmVzb2x1dGlvblRleHQgPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCArICd4JyArIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEwODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxOTIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxOTIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTA4MCkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMjgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gNzIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSA3MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMjgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9fdmlkZW9XaWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgIHRoaXMuX192aWRlb0hlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9O1xuICB9XG4gIF9fZ2V0U2Nhbm5lckFkZHJlc3Mob2NyVHlwZSkge1xuICAgIGlmICghdGhpcy5fX29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIGxldCBkZXN0cm95Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgY29uc3Qgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19nZXRTdHJpbmdPbldhc21IZWFwKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgLy8gT0NSXG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRJRENhcmRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUlEQ2FyZFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRQYXNzcG9ydFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95UGFzc3BvcnRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUFsaWVuU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUNyZWRpdFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgTGljZW5zZSBLZXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICB2b2lkIDA7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2dldEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2ModGhpcy5fX3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ICogNCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fX3Jlc3VsdEJ1ZmZlcikge1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyg0MDk2KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tJbmZvKSB7XG4gICAgICBpZiAoIXRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1Zikge1xuICAgICAgICB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MoNDA5Nik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy5fX0J1ZmZlciwgdGhpcy5fX3Jlc3VsdEJ1ZmZlciwgdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmXTtcbiAgfVxuICBhc3luYyBfX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIG1hc2tNb2RlLCBjcm9wTW9kZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZShhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpO1xuICAgICAgY29uc3QganBnU2l6ZSA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ1NpemUoKTtcbiAgICAgIGNvbnN0IGpwZ1BvaW50ZXIgPSB0aGlzLl9fT0NSRW5naW5lLmdldEVuY29kZWRKcGdCdWZmZXIoKTtcbiAgICAgIGNvbnN0IHJlc3VsdFZpZXcgPSBuZXcgVWludDhBcnJheSh0aGlzLl9fT0NSRW5naW5lLkhFQVA4LmJ1ZmZlciwganBnUG9pbnRlciwganBnU2l6ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShyZXN1bHRWaWV3KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzdWx0XSwge1xuICAgICAgICB0eXBlOiAnaW1hZ2UvanBlZydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19ibG9iVG9CYXNlNjQoYmxvYik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95RW5jb2RlZEpwZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGcmVlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX0J1ZmZlcik7XG4gICAgICB0aGlzLl9fQnVmZmVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fX2Rlc3Ryb3lSZXN1bHRCdWZmZXIoKTtcbiAgICB0aGlzLl9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyKCk7XG4gIH1cbiAgX19kZXN0cm95UmVzdWx0QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fcmVzdWx0QnVmZmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19yZXN1bHRCdWZmZXIpO1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gICAgfVxuICB9XG4gIF9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmKTtcbiAgICAgIHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1ZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIEZyZWUgUHJldkltYWdlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lQcmV2SW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuX19QcmV2SW1hZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX1ByZXZJbWFnZSk7XG4gICAgICB0aGlzLl9fUHJldkltYWdlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogZnJlZSBzdHJpbmcgaGVhcCBidWZmZXIgKi9cbiAgX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApO1xuICAgICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBmcmVlIHNjYW5uZXIgYWRkcmVzcyAqL1xuICBfX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpIHtcbiAgICBpZiAodGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvRWxlbWVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgfSA9IGF3YWl0IHRoaXMuX19zZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KTtcbiAgICBpZiAoIWlzU3VwcG9ydGVkUmVzb2x1dGlvbikge1xuICAgICAgaWYgKHJlc29sdXRpb25UZXh0ICE9PSAnbm90IHJlYWR5Jykge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1N1cHBvcnRlZFJlc29sdXRpb247XG4gIH1cbiAgX19nZXRSb3RhdGlvbkRlZ3JlZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX19vcHRpb25zLnJvdGF0aW9uRGVncmVlICUgMzYwICsgMzYwKSAlIDM2MDtcbiAgfVxuICBfX2dldE1pcnJvck1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vcHRpb25zLm1pcnJvck1vZGU7XG4gIH1cbiAgYXN5bmMgX19jcm9wSW1hZ2VGcm9tVmlkZW8oKSB7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHJldHVybiBbbnVsbCwgbnVsbF07XG4gICAgbGV0IFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuXG4gICAgLy8gc291cmNlIGltYWdlIChvciB2aWRlbylcbiAgICAvLyDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiiBzeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUg+KUiOKUiOKUiOKUiCDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDIHN4ICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIHNIZWlnaHQgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgZGVzdGluYXRpb24gY2FudmFzXG4gICAgLy8g4pSDICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAgICAgICAg4pSD4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgICAgICAgIOKUgyAgICDilIogICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgICAgICAgIHNXaWR0aCAgICAgICAgICAgICAgICAgICAgICDilIMgICAg4pSKIGR5ICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbICAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIPilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgIGR4ICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIGRIZWlnaHQg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgZFdpZHRoICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUm1xuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC9kcmF3SW1hZ2VcblxuICAgIGxldCBjYWxjQ2FudmFzID0gY2FudmFzO1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNDcm9wSW1hZ2VTaXplV2lkdGggPSB0aGlzLl9fY3JvcEltYWdlU2l6ZVdpZHRoO1xuICAgIGxldCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCA9IHRoaXMuX19jcm9wSW1hZ2VTaXplSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW2NhbGNDcm9wSW1hZ2VTaXplV2lkdGgsIGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0XSA9IFtjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCwgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aF07XG4gICAgICBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbY2FsY1Jlc29sdXRpb25faCwgY2FsY1Jlc29sdXRpb25fd107XG4gICAgICBjYWxjQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgY2FsY01heFNXaWR0aCA9IDk5OTk5O1xuICAgIGxldCBjYWxjTWF4U0hlaWdodCA9IDk5OTk5O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzeCwgc3k7XG4gICAgY29uc3QgcmF0aW8gPSBjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgKiByYXRpbyksIGNhbGNNYXhTSGVpZ2h0KTtcbiAgICBzeCA9IE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudFdpZHRoIC0gY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCkgLyAyICogcmF0aW8pO1xuICAgIHN5ID0gTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC0gY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQpIC8gMiAqIHJhdGlvKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgdGhpcy5fX2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCBkZWdyZWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoZGVncmVlID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoW2ltZ0RhdGEsIGltZ0RhdGFVcmxdKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9IGltZ0RhdGFVcmw7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAvLyBjYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgICAgY29uc3QgdGVtcENvbnRleHQgPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRlbXBDYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChbMCwgMTgwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gOTApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcuaGVpZ2h0LCAwKTtlbHNlIGlmIChkZWdyZWUgPT09IDE4MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy53aWR0aCwgaW1nLmhlaWdodCk7ZWxzZSBpZiAoZGVncmVlID09PSAyNzApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZSgwLCBpbWcud2lkdGgpO1xuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBjb25zdCBuZXdJbWFnZURhdGEgPSBbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSA/IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcuaGVpZ2h0LCBpbWcud2lkdGgpIDogdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgdGVtcENvbnRleHQpO1xuICAgICAgICByZXNvbHZlKFtuZXdJbWFnZURhdGEsIHRlbXBDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyldKTtcbiAgICAgICAgdGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCwgcmV0cnlJbWcgPSBudWxsKSB7XG4gICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPCAwKSB7XG4gICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbWdEYXRhO1xuICAgICAgbGV0IGltZ0RhdGFVcmwgPSBudWxsO1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAocmV0cnlJbWcgIT09IG51bGwpIHtcbiAgICAgICAgaW1nRGF0YSA9IHJldHJ5SW1nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgW2ltZ0RhdGEsIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy5fX2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgfVxuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBsZXQga29yID0gZmFsc2UsXG4gICAgICAgIGFsaWVuID0gZmFsc2UsXG4gICAgICAgIHBhc3Nwb3J0ID0gZmFsc2U7XG4gICAgICBzd2l0Y2ggKHRoaXMuX19vY3JUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBrb3IgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgcGFzc3BvcnQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWxpZW4gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICB9XG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmIChrb3IgfHwgcGFzc3BvcnQgfHwgYWxpZW4pIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5kZXRlY3RfaWRjYXJkX29wdChidWZmZXIsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCBhZGRyZXNzLCBrb3IsIGFsaWVuLCBwYXNzcG9ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmRldGVjdF9pZGNhcmQoYnVmZmVyLCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0NhcmRib3hEZXRlY3RlZCByZXN1bHQgLT0tLS0tLScsIHJlc3VsdClcbiAgICAgIHJldHVybiBbISFyZXN1bHQsIGltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3IgOiAnICsgZTtcbiAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHNzYU1vZGUsIGlzU2V0SWdub3JlQ29tcGxldGUsIGltZ0RhdGEsIGltZ0RhdGFVcmwpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGFkZHJlc3MgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBjb25zdCByZWNvZ25pdGlvbiA9IGFzeW5jIGlzU2V0SWdub3JlQ29tcGxldGUgPT4ge1xuICAgICAgICBpZiAoaXNTZXRJZ25vcmVDb21wbGV0ZSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCAwLCBpbWdEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5JRENhcmQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhblBhc3Nwb3J0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkFsaWVuKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzog7Iug7Jqp7Lm065Oc64qUIOyVhOyngSBrZXk6dmFsdWUg7ZiV7YOc66GcIOuzgO2ZmCDslYjrkJjslrQg7J6I7J2MXG4gICAgICAgIGlmIChvY3JUeXBlID09PSAnY3JlZGl0Jykge1xuICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IG51bGwgfHwgb2NyUmVzdWx0ID09PSAnJyB8fCBvY3JSZXN1bHQgPT09ICdmYWxzZScgfHwgb2NyUmVzdWx0WzBdID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fY3N2VG9PYmplY3Qob2NyUmVzdWx0KTtcbiAgICAgICAgaWYgKG9jclJlc3VsdD8uY29tcGxldGUgIT09ICd1bmRlZmluZWQnICYmIG9jclJlc3VsdD8uY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc1NldElnbm9yZUNvbXBsZXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPCB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCkge1xuICAgICAgICAgICAgICAvLyBkZXRlY3RlZENhcmRRdWV1ZeyXkOyEnCDtlZzsnqXsnYQg6rq864K07IScIOqwseyLoO2VnOuLpC5cbiAgICAgICAgICAgICAgLy8g7KCA7J6l65CY7Ja07J6I64qUIOydtOuvuOyngOydmCDsiKvsnpDqsIAgcmV0cnkg67O064ukIOyekeydgOqyveyasCDrjIDruYTtlZjsl6wgJeulvCDsgqzsmqntlahcbiAgICAgICAgICAgICAgY29uc3QgcXVldWVJZHggPSB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCAlIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgIGltZ0RhdGEgPSB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVbcXVldWVJZHhdO1xuICAgICAgICAgICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVjb2duaXRpb24oaXNTZXRJZ25vcmVDb21wbGV0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyDsgqzsp4Qg7ZWc7J6l7Jy866GcIE9DUiDsi6TtjKggKHBvcHVwIOuCtOumrOqzoCBzZXRJZ25vcmVDb21wbGV0ZShmYWxzZSkg7LKY66asP1xuICAgICAgICAgICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gICAgICAgICAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpO1xuICAgICAgICAgICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTsgLy8g7Yyd7JeF7J20IOuCtOugpOqwiOuVjCDsspjrpqzrkJjsp4Drp4wg66+466asIOyymOumrFxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQsIGZhbHNlLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudmlkZW8sIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKGF3YWl0IHJlY29nbml0aW9uKGlzU2V0SWdub3JlQ29tcGxldGUpKSB7XG4gICAgICAgIGNvbnN0IGlzQ3JlZGl0Q2FyZCA9IG9jclR5cGUgPT09ICdjcmVkaXQnO1xuICAgICAgICBsZXQgb3JpZ2luSW1hZ2UgPSBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgZmFsc2UsIGlzQ3JlZGl0Q2FyZCk7XG4gICAgICAgIGxldCBtYXNrSW1hZ2UgPSBpc0NyZWRpdENhcmQgPyBudWxsIDogYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRydWUsIHRydWUpO1xuICAgICAgICBtYXNrSW1hZ2UgPSBtYXNrSW1hZ2UgPT09ICdkYXRhOicgPyBudWxsIDogbWFza0ltYWdlO1xuICAgICAgICBpZiAoc3NhTW9kZSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBLCBmYWxzZSwgbWFza0ltYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtvY3JSZXN1bHQsIG9yaWdpbkltYWdlLCBtYXNrSW1hZ2VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCwgbnVsbF07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgX19zdGFydFRydXRoKG9jclR5cGUsIGFkZHJlc3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoJy1zc2EnKSA+IC0xKSB7XG4gICAgICAgIC8vIFRPRE86IHdvcmtlcuulvCDsgqzsmqntlZjsl6wg66mU7J24KFVJIOuenOuNlOungSkg7Iqk66CI65Oc6rCAIOupiOy2lOyngCDslYrrj4TroZ0g7LKY66asIO2VhOyalCAo7ZiE7J6sIGxvYWRpbmcgVUkg652E7Jqw66m0IOyVoOuLiOuplOydtOyFmCDrqYjstqQpXG4gICAgICAgIC8vIFRPRE86IHNldFRpbWVvdXQg7Jy866GcIOuCmOuIhOuNlOudvOuPhCDtmqjqs7wg7JeG7J2MIHNldFRpbWVvdXQg7KeA7Jqw6rOgLCB3b3JrZXLroZwg67OA6rK9IO2VhOyalFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHRoaXMuX19PQ1JFbmdpbmUuc2NhblRydXRoKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcikpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU1NBIE1vZGUgaXMgdHJ1ZS4gYnV0LCBvY3JUeXBlIGlzIGludmFsaWQgOiAnICsgb2NyVHlwZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fY3N2VG9PYmplY3Qoc3RyKSB7XG4gICAgbGV0IHBhaXJzID0gc3RyLnNwbGl0KCc7Jyk7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJzonKTtcbiAgICAgIGlmIChwYWlyLmxlbmd0aCA9PT0gMikgb2JqW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBfX2dldE1hc2tJbmZvKGFkZHJlc3MpIHtcbiAgICBpZiAoYWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgcmV0dXJuICdjaGVja1ZhbGlkYXRpb24gRmFpbCc7XG4gICAgfVxuICAgIGNvbnN0IFssLCBtYXNrSW5mb1Jlc3VsdEJ1Zl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgcmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5nZXRNYXNrUmVjdChhZGRyZXNzLCBtYXNrSW5mb1Jlc3VsdEJ1Zik7XG4gICAgaWYgKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdCA9PT0gJycpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG5cbiAgICAvLyB0aGlzLl9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyKCk7XG5cbiAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IHRoaXMuX19jc3ZUb09iamVjdChyZXN1bHQpO1xuICB9XG4gIGFzeW5jIF9fc3RhcnRUcnV0aFJldHJ5KG9jclR5cGUsIGFkZHJlc3MsIGltZ0RhdGEpIHtcbiAgICBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcywgMCwgaW1nRGF0YSk7XG4gICAgLy8gYXdhaXQgdGhpcy5fX3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgdHJ1ZSk7ICAgICAgLy8gZm9yIOyEseuKpeydhCDsnITtlbQg7KeE7ZaJIFhcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fX3N0YXJ0VHJ1dGgob2NyVHlwZSwgYWRkcmVzcyk7XG4gIH1cbiAgX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gMey0iCBkZWxheSDtm4Qg7Iuk7ZaJXG4gICAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBhc3luYyBfX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgIGNvbnN0IGlzUGFzc3BvcnQgPSB0aGlzLl9fb2NyVHlwZS5pbmNsdWRlcygncGFzc3BvcnQnKTtcbiAgICAgIGF3YWl0IHRoaXMuX19zZXR1cFZpZGVvKGlzUGFzc3BvcnQpO1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgLy8gY29uc3QgW3RyYWNrXSA9IHRoaXMuX19zdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcbiAgICAgICAgLy8gY29uc3QgY2FwYWJpbGl0eSA9IHRyYWNrLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdDYXJkU2Nhbl9faW5pdGlhbGl6ZSBjYXBhYmlsaXR5JywgY2FwYWJpbGl0eSk7XG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiB2aWRlbykge1xuICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHRoaXMuX19zdHJlYW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQXZvaWQgdXNpbmcgdGhpcyBpbiBuZXcgYnJvd3NlcnMsIGFzIGl0IGlzIGdvaW5nIGF3YXkuXG4gICAgICAgICAgdmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5fX3N0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygncHJvY2VlZENhbWVyYVBlcm1pc3Npb24gLSBvbmxvYWRlZG1ldGFkYXRhJyk7XG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICB2b2lkIDA7XG5cbiAgICAgICAgICAvLyB2aWRlbyBlbGVtZW50IHN0eWxlIOyEpOyglVxuICAgICAgICAgIHRoaXMuX192aWRlb09yaWVudGF0aW9uID0gdmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvLnZpZGVvSGVpZ2h0IDwgMSA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB0aGlzLl9fY2FtU2V0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19hZGp1c3RTdHlsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICB2aWRlby53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ05vdEFsbG93ZWRFcnJvcicpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ0NhbWVyYSBBY2Nlc3MgUGVybWlzc2lvbiBpcyBub3QgYWxsb3dlZCc7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcygnRTQwMycsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICB9IGVsc2UgaWYgKGUubmFtZSA9PT0gJ05vdFJlYWRhYmxlRXJyb3InKSB7XG4gICAgICAgIC8vIOuLpOuluOqzs+yXkOyEnCDsubTrqZTrnbwg7J6Q7JuQ7J2EIOyCrOyaqeykkVxuICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5fX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTsgLy8g7J6s6reAIO2YuOy2nFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9fc2V0U3R5bGUoZWwsIHN0eWxlKSB7XG4gICAgaWYgKGVsICYmIHN0eWxlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVsLnN0eWxlLCBzdHlsZSk7XG4gICAgfVxuICB9XG4gIF9fY2hhbmdlT0NSU3RhdHVzKHZhbCkge1xuICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAvLyBPQ1JcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuTk9UX1JFQURZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5SRUFEWTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5SRUFEWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQ6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1M7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQ6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuRE9ORTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fY2hhbmdlU3RhZ2UodmFsLCBmb3JjZVVwZGF0ZSA9IGZhbHNlLCByZWNvZ25pemVkSW1hZ2UgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID09PSB2YWwgJiYgZm9yY2VVcGRhdGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX19jaGFuZ2VPQ1JTdGF0dXModmFsKTtcbiAgICB0aGlzLl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAgPSB2YWw7XG4gICAgY29uc3Qge1xuICAgICAgZ3VpZGVCb3gsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnN0eWxlLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cyArICdweCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZVt2YWxdXG4gICAgfTtcbiAgICBpZiAoZ3VpZGVCb3gpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwgc3R5bGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UpIHtcbiAgICAgIG1hc2tCb3hXcmFwPy5xdWVyeVNlbGVjdG9yKCcjbWFza0JveE91dGVyJyk/LnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlW3ZhbF0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJICYmIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVCdXR0b25Db2xvckNoYW5nZSkge1xuICAgICAgY2FwdHVyZUJ1dHRvbj8ucXVlcnlTZWxlY3RvcignI2NhcHR1cmVCdXR0b24nKT8uc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5fX29wdGlvbnMuY2FwdHVyZUJ1dHRvblN0eWxlW3ZhbF0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVRvcFVJIHx8IHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX3RvcFVJLCAndG9wJywgdGhpcy5fX29wdGlvbnMudXNlVG9wVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUksIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX19taWRkbGVVSSwgJ21pZGRsZScsIHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fYm90dG9tVUksICdib3R0b20nLCB0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSwgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MgfHwgdmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSk7XG5cbiAgICAgICAgLy8gRkFJTOyduCDqsr3smrAgNey0iO2bhCDsnpDrj5nsnYQg7LC964ur7J2MXG4gICAgICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVEKSB7XG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLl9faGlkZVByZXZpZXdVSSwgMzAwMCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX19oaWRlUHJldmlld1VJKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxKTsgLy8gZm9yIFVJIHVwZGF0ZVxuICB9XG5cbiAgX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSByZWNvZ25pemVkSW1hZ2U7XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICAnbWF4LXdpZHRoJzogJzcwJScsXG4gICAgICAnbWF4LWhlaWdodCc6ICc2MCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld0ltYWdlLCBpbWdTdHlsZSk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0pO1xuICB9XG4gIF9faGlkZVByZXZpZXdVSShjb250ZXh0KSB7XG4gICAgbGV0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIF90aGlzXyA9IGNvbnRleHQ7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIF90aGlzXy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSk7XG4gICAgX3RoaXNfLl9fc2V0U3R5bGUocHJldmlld1VJV3JhcCwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG4gICAgcHJldmlld0ltYWdlLnNyYyA9ICcnO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW5wdXREZXZpY2VzKGtpbmQsIGxhYmVsKSB7XG4gICAgLy8gdGhyb3cgZXJyb3IgaWYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IHtcbiAgICAgIGlmIChkZXZpY2Uua2luZCA9PT0gYCR7a2luZH1pbnB1dGAgJiYgZGV2aWNlLmdldENhcGFiaWxpdGllcykge1xuICAgICAgICBjb25zdCBjYXAgPSBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIGlmIChjYXA/LmZhY2luZ01vZGU/LmluY2x1ZGVzKHRoaXMuX19mYWNpbmdNb2RlQ29uc3RyYWludCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiB2aWRlb0RldmljZXMubGVuZ3RoIDw9IDEgPyB2aWRlb0RldmljZXMgOiB2aWRlb0RldmljZXMuZmlsdGVyKGRldmljZSA9PiBsYWJlbCA/IGRldmljZS5sYWJlbC5pbmNsdWRlcyhsYWJlbCkgOiB0cnVlKTtcbiAgfVxuICBjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLl9fdWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBpc0NoYW5nZWRcbiAgICB9O1xuICB9XG4gIF9fY2xlYXJDdXN0b21VSShvYmopIHtcbiAgICBvYmouaW5uZXJIVE1MID0gJyc7XG4gICAgb2JqLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShvYmosIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9fc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmICghb2NyKSB0aHJvdyBuZXcgRXJyb3IoJ29jciBkaXYgZWxlbWVudCBpcyBub3QgZXhpc3QnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB2aWRlb1dyYXAucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94V3JhcCkgZ3VpZGVCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmICh2aWRlbykgdmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGNhbnZhcykgY2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChyb3RhdGlvbkNhbnZhcykgcm90YXRpb25DYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94KSBndWlkZUJveC5yZW1vdmUoKTtcbiAgICBpZiAobWFza0JveFdyYXApIG1hc2tCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmIChwcmV2ZW50VG9GcmVlemVWaWRlbykgcHJldmVudFRvRnJlZXplVmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGN1c3RvbVVJV3JhcCkgY3VzdG9tVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAodG9wVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZVRvcFVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSSh0b3BVSSk7XG4gICAgaWYgKG1pZGRsZVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkobWlkZGxlVUkpO1xuICAgIGlmIChib3R0b21VSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKGJvdHRvbVVJKTtcbiAgICBpZiAoY2FwdHVyZVVJV3JhcCkgY2FwdHVyZVVJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBjYXB0dXJlIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAoY2FwdHVyZVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKGNhcHR1cmVVSSk7XG4gICAgaWYgKHByZXZpZXdVSVdyYXApIHByZXZpZXdVSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8gcHJldmlldyBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHByZXZpZXdVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShwcmV2aWV3VUkpO1xuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy5fX2dldFJvdGF0aW9uRGVncmVlKCk7XG4gICAgdGhpcy5fX2lzUm90YXRlZDkwb3IyNzAgPSBbOTAsIDI3MF0uaW5jbHVkZXMocm90YXRpb25EZWdyZWUpO1xuICAgIGxldCBvY3JTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKG9jciwgb2NyU3R5bGUpO1xuICAgIGNvbnN0IHdyYXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9O1xuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlb1dyYXAsIHdyYXBTdHlsZSk7XG4gICAgfVxuICAgIG9jci5hcHBlbmRDaGlsZCh2aWRlb1dyYXApO1xuICAgIG1hc2tCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21hc2tCb3hXcmFwJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKG1hc2tCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIGxldCBtYXNrX2ZyYW1lID0gdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGUuYmFzZV9jb2xvciArICdmZic7XG4gICAgaWYgKCEhdGhpcy5fX29wdGlvbnMuc2hvd0NsaXBGcmFtZSkge1xuICAgICAgbWFza19mcmFtZSA9IHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlLmNsaXBfZnJhbWUgKyAnNTUnO1xuICAgIH1cbiAgICBtYXNrQm94V3JhcC5pbm5lckhUTUwgPSAnJyArIFwiICA8c3ZnIGlkPSdtYXNrQm94Q29udGFpbmVyJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxcblwiICsgXCIgICAgPG1hc2sgaWQ9J21hc2stcmVjdCc+XFxuXCIgKyBcIiAgICAgIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3doaXRlJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDxzdmcgeD0nNTAlJyB5PSc1MCUnIG92ZXJmbG93PSd2aXNpYmxlJz5cXG5cIiArIFwiICAgICAgICAgIDxyZWN0IGlkPSdtYXNrQm94SW5uZXInXFxuXCIgKyBcIiAgICAgICAgICAgIHdpZHRoPSc0MDAnIGhlaWdodD0nMjYwJ1xcblwiICsgXCIgICAgICAgICAgICB4PSctMjAwJyB5PSctMTMwJ1xcblwiICsgXCIgICAgICAgICAgICByeD0nMTAnIHJ5PScxMCdcXG5cIiArIFwiICAgICAgICAgICAgZmlsbD0nYmxhY2snIHN0cm9rZT0nYmxhY2snPjwvcmVjdD5cXG5cIiArICcgICAgICA8L3N2Zz5cXG4nICsgJyAgICA8L21hc2s+XFxuJyArIFwiICAgIDxyZWN0IGlkPSdtYXNrQm94T3V0ZXInXFxuXCIgKyBcIiAgICAgICAgICB4PScwJyB5PScwJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJ1xcblwiICsgXCIgICAgICAgICAgZmlsbD0nXCIgKyBtYXNrX2ZyYW1lICsgXCInIG1hc2s9J3VybCgjbWFzay1yZWN0KSc+PC9yZWN0PlxcblwiICsgJyAgPC9zdmc+JztcbiAgICBvY3IuYXBwZW5kQ2hpbGQobWFza0JveFdyYXApO1xuICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW8nKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ3RydWUnKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgJ3RydWUnKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJ3RydWUnKTtcbiAgICBsZXQgdmlkZW9TdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH07XG4gICAgY29uc3Qgcm90YXRlQ3NzID0gJ3JvdGF0ZSgnICsgcm90YXRpb25EZWdyZWUgKyAnZGVnKSc7XG4gICAgY29uc3QgbWlycm9yQ3NzID0gJ3JvdGF0ZVkoMTgwZGVnKSc7XG4gICAgY29uc3Qgcm90YXRlQW5kTWlycm9yQ3NzID0gbWlycm9yQ3NzICsgJyAnICsgcm90YXRlQ3NzO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgaWYgKHRoaXMuX19nZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZUFuZE1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZUNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fX2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgIHRyYW5zZm9ybTogbWlycm9yQ3NzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywgdmlkZW9TdHlsZSk7XG4gICAgdmlkZW9XcmFwLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGd1aWRlQm94V3JhcCk7XG4gICAgZ3VpZGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnZ3VpZGVCb3gnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9KTtcbiAgICBndWlkZUJveFdyYXAuYXBwZW5kQ2hpbGQoZ3VpZGVCb3gpO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FudmFzJyk7XG4gICAgY29uc3QgY2FudmFzU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLl9fb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID8gJ25vbmUnIDogJ2Rpc3BsYXknIDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcyNSUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnZ3JlZW4gMnB4IHNvbGlkJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKGNhbnZhcywgY2FudmFzU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHJvdGF0aW9uQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcm90YXRpb25DYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3JvdGF0aW9uQ2FudmFzJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHJvdGF0aW9uQ2FudmFzLCB7XG4gICAgICBkaXNwbGF5OiB0aGlzLl9fb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID8gJ2Rpc3BsYXknIDogJ25vbmUnIDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMzBweCcsXG4gICAgICBib3JkZXI6ICdibHVlIDJweCBzb2xpZCdcbiAgICB9KTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQocm90YXRpb25DYW52YXMpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZlbnRUb0ZyZWV6ZVZpZGVvJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZlbnRUb0ZyZWV6ZVZpZGVvLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgIHJpZ2h0OiAnMTAnXG4gICAgfSk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uaW5uZXJIVE1MID0gJycgKyAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgc3R5bGU9XCJtYXJnaW46IGF1dG87IGJhY2tncm91bmQ6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XCIgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiPlxcbicgKyAnICA8Y2lyY2xlIGN4PVwiODRcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMC41NTU1NTU1NTU1NTU1NTU2c1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzFcIiB2YWx1ZXM9XCIxMDswXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiZmlsbFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cImRpc2NyZXRlXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjE2XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMC41NTU1NTU1NTU1NTU1NTU2c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCI4NFwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS4xMTExMTExMTExMTExMTEyc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjExMTExMTExMTExMTExMTJzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjE2XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjY2NjY2NjY2NjY2NjY2NjVzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPic7XG4gICAgJzwvc3ZnPic7XG4gICAgb2NyLmFwcGVuZENoaWxkKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKTtcbiAgICBjdXN0b21VSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXN0b21VSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2N1c3RvbVVJV3JhcCcpO1xuICAgIGNvbnN0IGN1c3RvbVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjdXN0b21VSVdyYXAsIGN1c3RvbVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY3VzdG9tVUlXcmFwKTtcblxuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJIOyCrOyaqSh1c2Up7Jes67aA7JmAIOq0gOqzhOyXhuydtCDsmIHsl63snYQg7J6h6riwIOychO2VtCwgZGl26rCAIOyXhuycvOuptCDsg53shLFcbiAgICAvLyBhZGp1c3RTdHlsZSgpIOyXkOyEnCDshLjrtoDsoIHsnbgg7IKs7J207KaI7JmAIOychOy5mOqwkiDrj5nsoIHsnLzroZwg7ISk7KCV65CoLlxuICAgIGlmICghdG9wVUkpIHtcbiAgICAgIHRvcFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndG9wVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKHRvcFVJKTtcbiAgICBpZiAoIW1pZGRsZVVJKSB7XG4gICAgICBtaWRkbGVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWlkZGxlVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21pZGRsZVVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZChtaWRkbGVVSSk7XG4gICAgaWYgKCFib3R0b21VSSkge1xuICAgICAgYm90dG9tVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJvdHRvbVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdib3R0b21VSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQoYm90dG9tVUkpO1xuICAgIGNhcHR1cmVVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXB0dXJlVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYXB0dXJlVUlXcmFwJyk7XG4gICAgY29uc3QgY2FwdHVyZVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NlbnRlcidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCBjYXB0dXJlVUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYXB0dXJlVUlXcmFwKTtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB7XG4gICAgICBpZiAoIWNhcHR1cmVVSSkge1xuICAgICAgICBjYXB0dXJlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FwdHVyZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYXB0dXJlVUknKTtcbiAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghY2FwdHVyZUJ1dHRvbikge1xuICAgICAgICBjYXB0dXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhcHR1cmVCdXR0b24nKTtcbiAgICAgICAgbGV0IGNhcHR1cmVCdXR0b25TcmNTVkcgPSBgYDtcbiAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgPHN2ZyB3aWR0aD0nODAnIGhlaWdodD0nODAnIHZpZXdCb3g9JzAgMCA4MCA4MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5gO1xuICAgICAgICBjYXB0dXJlQnV0dG9uU3JjU1ZHICs9IGAgIDxjaXJjbGUgaWQ9J2NhcHR1cmVCdXR0b24nIGN4PSc0MCcgY3k9JzQwJyByPSczOCcgZmlsbD0nIzU1NTU1NScgc3Ryb2tlPScjZmZmZmZmJyBzdHJva2Utd2lkdGg9JzQnLz5gO1xuICAgICAgICBjYXB0dXJlQnV0dG9uU3JjU1ZHICs9IGA8L3N2Zz5gO1xuICAgICAgICBjYXB0dXJlQnV0dG9uLmlubmVySFRNTCA9IGNhcHR1cmVCdXR0b25TcmNTVkc7XG4gICAgICAgIGNhcHR1cmVVSS5hcHBlbmRDaGlsZChjYXB0dXJlQnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIGNhcHR1cmVVSVdyYXAuYXBwZW5kQ2hpbGQoY2FwdHVyZVVJKTtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgY29uc3QgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgIHRoYXQuX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnZpZGVvLCB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0Ll9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLCB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNhcHR1cmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX29uQ2xpY2tDYXB0dXJlQnV0dG9uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgcHJldmlld1VJV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJldmlld1VJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld1VJV3JhcCcpO1xuICAgICAgY29uc3QgcHJldmlld1VJV3JhcFN0eWxlID0ge1xuICAgICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyMwMDAwMDBhYSdcbiAgICAgIH07XG4gICAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJV3JhcCwgcHJldmlld1VJV3JhcFN0eWxlKTtcbiAgICAgIG9jci5hcHBlbmRDaGlsZChwcmV2aWV3VUlXcmFwKTtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgaWYgKCFwcmV2aWV3VUkpIHtcbiAgICAgICAgICBwcmV2aWV3VUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBwcmV2aWV3VUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdVSScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgJ21heC13aWR0aCc6ICc5MCUnLFxuICAgICAgICAgICdtYXgtaGVpZ2h0JzogJzkwJSdcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXZpZXdVSVdyYXAuYXBwZW5kQ2hpbGQocHJldmlld1VJKTtcbiAgICAgICAgaWYgKCFwcmV2aWV3SW1hZ2UpIHtcbiAgICAgICAgICBwcmV2aWV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICBwcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdJbWFnZScpO1xuICAgICAgICAgIHByZXZpZXdVSS5hcHBlbmRDaGlsZChwcmV2aWV3SW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbG9hZGluZyBVSSDsnITsuZgg7J6Q66as7J6h6rKMIO2VmOq4sCDsnITtlbRcbiAgICBhd2FpdCB0aGlzLl9fYWRqdXN0U3R5bGUodHJ1ZSk7XG5cbiAgICAvLyDtmZTrqbTqs7zrj4Qg7ZiE7IOBIO2VtOqysFxuICAgIHRoaXMuX19zZXRTdHlsZShvY3IsIHtcbiAgICAgIGRpc3BsYXk6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5fX29jciA9IG9jcjtcbiAgICB0aGlzLl9fY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuX19yb3RhdGlvbkNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgIHRoaXMuX192aWRlbyA9IHZpZGVvO1xuICAgIHRoaXMuX192aWRlb1dyYXAgPSB2aWRlb1dyYXA7XG4gICAgdGhpcy5fX2d1aWRlQm94ID0gZ3VpZGVCb3g7XG4gICAgdGhpcy5fX2d1aWRlQm94V3JhcCA9IGd1aWRlQm94V3JhcDtcbiAgICB0aGlzLl9fbWFza0JveFdyYXAgPSBtYXNrQm94V3JhcDtcbiAgICB0aGlzLl9fcHJldmVudFRvRnJlZXplVmlkZW8gPSBwcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgICB0aGlzLl9fY3VzdG9tVUlXcmFwID0gY3VzdG9tVUlXcmFwO1xuICAgIHRoaXMuX190b3BVSSA9IHRvcFVJO1xuICAgIHRoaXMuX19taWRkbGVVSSA9IG1pZGRsZVVJO1xuICAgIHRoaXMuX19ib3R0b21VSSA9IGJvdHRvbVVJO1xuICAgIHRoaXMuX19jYXB0dXJlVUlXcmFwID0gY2FwdHVyZVVJV3JhcDtcbiAgICB0aGlzLl9fY2FwdHVyZVVJID0gY2FwdHVyZVVJO1xuICAgIHRoaXMuX19jYXB0dXJlQnV0dG9uID0gY2FwdHVyZUJ1dHRvbjtcbiAgICB0aGlzLl9fcHJldmlld1VJV3JhcCA9IHByZXZpZXdVSVdyYXA7XG4gICAgdGhpcy5fX3ByZXZpZXdVSSA9IHByZXZpZXdVSTtcbiAgICB0aGlzLl9fcHJldmlld0ltYWdlID0gcHJldmlld0ltYWdlO1xuICAgIHJldHVybiB7XG4gICAgICBvY3IsXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIHZpZGVvLFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLFxuICAgICAgY3VzdG9tVUlXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgY2FwdHVyZVVJV3JhcCxcbiAgICAgIGNhcHR1cmVVSSxcbiAgICAgIGNhcHR1cmVCdXR0b24sXG4gICAgICBwcmV2aWV3VUlXcmFwLFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlXG4gICAgfTtcbiAgfVxuICBfX2JsdXJDYXB0dXJlQnV0dG9uKCkge1xuICAgIHRoaXMuX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnZpZGVvLCB7XG4gICAgICBkaXNwbGF5OiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IHtcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FwdHVyZUJ1dHRvbikge1xuICAgICAgY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlQnV0dG9uLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICByZXR1cm4gY2FwdHVyZUJ1dHRvbiA/IGNhcHR1cmVCdXR0b24uZ2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJykgPT09ICd0cnVlJyA6IGZhbHNlO1xuICB9XG4gIGFzeW5jIF9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KSB7XG4gICAgLy8gd2FzbSDsnbjsi53shLHriqUg7LWc7KCB7ZmU65CcIO2VtOyDgeuPhFxuICAgIHRoaXMuX19yZXNvbHV0aW9uV2lkdGggPSAxMDgwO1xuICAgIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ID0gNzIwO1xuICAgIHRoaXMuX19jYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gYXdhaXQgdGhpcy5fX3NldHVwRG9tRWxlbWVudHMoKTtcbiAgICBsZXQgdmlkZW9EZXZpY2VzID0gYXdhaXQgdGhpcy5fX2dldElucHV0RGV2aWNlcygndmlkZW8nKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmlkZW9EZXZpY2VzIDo6ICcsIHZpZGVvRGV2aWNlcylcbiAgICBsZXQgZGV2aWNlSWRMaXN0ID0gdmlkZW9EZXZpY2VzLm1hcChkZXZpY2UgPT4gZGV2aWNlLmRldmljZUlkKTtcbiAgICB0aGlzLmNoZWNrVUlPcmllbnRhdGlvbigpO1xuICAgIGxldCBjb25zdHJhaW50V2lkdGgsIGNvbnN0cmFpbnRIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyB1aSA6IHBvcnRyYWl0XG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiAxMDgwIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuXG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogNzIwIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1aSA6IGxhbmRzY2FwZVxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgbWluOiAxMjgwXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIG1pbjogNzIwXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJhaW50cyA9IHtcbiAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHpvb206IHtcbiAgICAgICAgICBpZGVhbDogMVxuICAgICAgICB9LFxuICAgICAgICBmYWNpbmdNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6IHRoaXMuX19mYWNpbmdNb2RlQ29uc3RyYWludFxuICAgICAgICB9LFxuICAgICAgICBmb2N1c01vZGU6IHtcbiAgICAgICAgICBpZGVhbDogJ2NvbnRpbnVvdXMnXG4gICAgICAgIH0sXG4gICAgICAgIHdoaXRlQmFsYW5jZU1vZGU6IHtcbiAgICAgICAgICBpZGVhbDogJ2NvbnRpbnVvdXMnXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZUlkOiB2aWRlb0RldmljZXMubGVuZ3RoID8ge1xuICAgICAgICAgIGlkZWFsOiBkZXZpY2VJZExpc3RbZGV2aWNlSWRMaXN0Lmxlbmd0aCAtIDFdXG4gICAgICAgIH0gOiBudWxsLFxuICAgICAgICB3aWR0aDogY29uc3RyYWludFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnN0cmFpbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g7LWc7LSIIOynhOyehSDsnbTslrTshJwgdmlkZW9EZWl2Y2Ug66as7Iqk7Yq466W8IOqwgOyguOyYrCDsiJgg7JeG7Jy866m0LFxuICAgIC8vIGdldFVzZXJNZWRpYeulvCDsnoTsnZgg7Zi47Lac7ZWY7JesIOq2jO2VnOydhCDrsJvsnYDrkqQg64uk7IucIOqwgOyguOyYtFxuICAgIGlmICh2aWRlb0RldmljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9fc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICB2aWRlb0RldmljZXMgPSBhd2FpdCB0aGlzLl9fZ2V0SW5wdXREZXZpY2VzKCd2aWRlbycpO1xuICAgICAgZGV2aWNlSWRMaXN0ID0gdmlkZW9EZXZpY2VzLm1hcChkZXZpY2UgPT4gZGV2aWNlLmRldmljZUlkKTtcbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID0gdmlkZW9EZXZpY2VzLmxlbmd0aCA/IHtcbiAgICAgICAgaWRlYWw6IGRldmljZUlkTGlzdFtkZXZpY2VJZExpc3QubGVuZ3RoIC0gMV1cbiAgICAgIH0gOiBudWxsO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgZHVtcHRyYWNrID0gKFthLCBiXSwgdHJhY2spID0+XG4gICAgICAvLyAgIGAke2F9JHt0cmFjay5raW5kID09ICd2aWRlbycgPyAnQ2FtZXJhJyA6ICdNaWNyb3Bob25lJ30gKCR7dHJhY2sucmVhZHlTdGF0ZX0pOiAke3RyYWNrLmxhYmVsfSR7Yn1gO1xuXG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndmlkZW9UcmFja3MgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpXG4gICAgICAvLyBjb25zdCBzdHJlYW1TZXR0aW5ncyA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldFNldHRpbmdzKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtQ2FwYWJpbGl0aWVzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENhcGFiaWxpdGllcygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDb25zdHJhaW50cygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbVNldHRpbmdzIDo6ICcsIHN0cmVhbVNldHRpbmdzKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIC8gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCAvIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGFzcGVjdFJhdGlvIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5hc3BlY3RSYXRpbyk7XG5cbiAgICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICBbcm90YXRpb25DYW52YXMud2lkdGgsIHJvdGF0aW9uQ2FudmFzLmhlaWdodF0gPSBbdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2FkanVzdFN0eWxlKGlzRmlyc3RDYWxsZWQgPSBmYWxzZSkge1xuICAgIHZvaWQgMDtcbiAgICBjb25zdCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlXcmFwLFxuICAgICAgY2FwdHVyZVVJLFxuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuXG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQ7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IG9jci5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGg7XG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXM7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY1ZpZGVvV2lkdGgsIGNhbGNWaWRlb0hlaWdodF0gPSBbY2FsY1ZpZGVvSGVpZ2h0LCBjYWxjVmlkZW9XaWR0aF07XG4gICAgICBbY2FsY1ZpZGVvQ2xpZW50V2lkdGgsIGNhbGNWaWRlb0NsaWVudEhlaWdodF0gPSBbY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9DbGllbnRXaWR0aF07XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgbmV3VmlkZW9XaWR0aCA9IGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGxldCBuZXdWaWRlb0hlaWdodCA9IGNhbGNWaWRlb0NsaWVudEhlaWdodDtcbiAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IHRoaXMuX19ndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICBjb25zdCB2aWRlb1JhdGlvQnlIZWlnaHQgPSB0aGlzLl9fdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgLy8g7IS466GcIFVJXG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJV3JhcCwge1xuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdmbGV4LWVuZCdcbiAgICAgIH0pO1xuICAgICAgLy8gdmlkZW8g6rCA66GcIOq4sOykgCAxMDAlIOycoOyngCAo67OA6rK97JeG7J2MKVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDsubTrqZTrnbzrj4Qg7IS466GcXG4gICAgICAgIC8vIOyEuOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7ZmV64yAXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiAoY2FsY1ZpZGVvSGVpZ2h0IC8gY2FsY1ZpZGVvV2lkdGgpO1xuICAgICAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7Lm066mU652864qUIOqwgOuhnFxuICAgICAgICAvLyDshLjroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7Iqk66W8IOu5hOuUlOyYpCDshLjroZwg6ri47J207JeQIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IGNhbGNWaWRlb0NsaWVudEhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6rCA66GcIFVJXG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJV3JhcCwge1xuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2VuZCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInXG4gICAgICB9KTtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g67mE65SU7Jik66W8IOqwgOuhnCBVSeydmCBoZWlnaHQg6riw7KSA7Jy866GcIOykhOydtOqzoFxuICAgICAgICAvLyDqsIDroZwgVUkgaGVpZ2h0IOq4sOykgOycvOuhnCDruYTrlJTsmKTsnZggd2lkdGgg6rOE7IKwXG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IG5ld1ZpZGVvSGVpZ2h0ICogKGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvSGVpZ2h0KTtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTripQg67mE65SU7Jik66W8IOyEuOuhnCDquLDspIDsnLzroZwg66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gbmV3VmlkZW9IZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIOqwgOuhnCDtgazquLDqsIAg6rCA66GcIFVJIHdpZHRoICogcmF0aW8g6rCS67O064ukIO2BrOuptCxcbiAgICAgICAgaWYgKGd1aWRlQm94V2lkdGggPiBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aCkge1xuICAgICAgICAgIC8vIOqzhOyCsCDrsKnsi53snYQg67CU6r6864ukICjsgqzsnKAgOiDqsbDsnZgg7KCV7IKs6rCB7ZiV7JeQIOqwgOq5jOyatCDqsr3smrAg6rCA7J2065OcIOuwleyKpCDqsIDroZzqsIAg6r2J7LCo6rKMIOuQqC4pXG4gICAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuXG4gICAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiAoY2FsY1ZpZGVvSGVpZ2h0IC8gY2FsY1ZpZGVvV2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZggaGVpZ2h0IO2BrOq4sOulvCBVSeydmCBoZWlnaHQg6riw7KSA7JeQIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IGNhbGNPY3JDbGllbnRIZWlnaHQgKiB2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIOqwgOuhnCDtgazquLDqsIAg6rCA66GcIFVJIHdpZHRoICogcmF0aW8g6rCS67O064ukIO2BrOuptCxcbiAgICAgICAgaWYgKGd1aWRlQm94V2lkdGggPiBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aCkge1xuICAgICAgICAgIC8vIOqzhOyCsCDrsKnsi53snYQg67CU6r6864ukICjsgqzsnKAgOiDqsbDsnZgg7KCV7IKs6rCB7ZiV7JeQIOqwgOq5jOyatCDqsr3smrAg6rCA7J2065OcIOuwleyKpCDqsIDroZzqsIAg6r2J7LCo6rKMIOuQqC4pXG4gICAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDstpXshoxcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGd1aWRlQm94V2lkdGggKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGd1aWRlQm94SGVpZ2h0ICs9IGJvcmRlcldpZHRoICogMjtcbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZVdpZHRoID0gTWF0aC5taW4oZ3VpZGVCb3hXaWR0aCwgbmV3VmlkZW9XaWR0aCk7XG4gICAgdGhpcy5fX2Nyb3BJbWFnZVNpemVIZWlnaHQgPSBNYXRoLm1pbihndWlkZUJveEhlaWdodCwgbmV3VmlkZW9IZWlnaHQpO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveFdpZHRoID0gZ3VpZGVCb3hXaWR0aCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveEhlaWdodCA9IGd1aWRlQm94SGVpZ2h0ICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgaWYgKHRvcFVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodG9wVUksIHtcbiAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYm90dG9tVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShib3R0b21VSSwge1xuICAgICAgICAncGFkZGluZy10b3AnOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChuZXdWaWRlb1dpZHRoICE9PSBjYWxjVmlkZW9DbGllbnRXaWR0aCkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIHdpZHRoOiBuZXdWaWRlb1dpZHRoICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChuZXdWaWRlb0hlaWdodCAhPT0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0KSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgaGVpZ2h0OiBuZXdWaWRlb0hlaWdodCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCB2aWRlb0lubmVyR2FwID0gMjsgLy8g66+47IS47ZWY6rKMIG1hc2tCb3hJbm5lcuuztOuLpCBndWlkZUJveOqwgCDsnpHsnYDqsoMg67O07KCVXG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9KTtcbiAgICBjb25zdCBtYXNrQm94SW5uZXIgPSBtYXNrQm94V3JhcC5xdWVyeVNlbGVjdG9yKCcjbWFza0JveElubmVyJyk7XG4gICAgbGV0IHIgPSBib3JkZXJSYWRpdXMgLSBib3JkZXJXaWR0aCAqIDI7XG4gICAgciA9IHIgPCAwID8gMCA6IHI7XG4gICAgaWYgKCFpc05hTihyZWR1Y2VkR3VpZGVCb3hXaWR0aCkgJiYgIWlzTmFOKHJlZHVjZWRHdWlkZUJveEhlaWdodCkgJiYgIWlzTmFOKGJvcmRlclJhZGl1cykgJiYgIWlzTmFOKGJvcmRlcldpZHRoKSkge1xuICAgICAgY29uc3QgbWFza0JveElubmVyV2lkdGggPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgY29uc3QgbWFza0JveElubmVySGVpZ2h0ID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsIG1hc2tCb3hJbm5lcldpZHRoICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgbWFza0JveElubmVySGVpZ2h0ICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneCcsIG1hc2tCb3hJbm5lcldpZHRoIC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneScsIG1hc2tCb3hJbm5lckhlaWdodCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J4JywgciArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J5JywgciArICcnKTtcbiAgICB9XG5cbiAgICAvLyDsiJjrj5kg7LSs7JiBIFVJIOyCrOyaqVxuICAgIC8vIGZpcnN0Q2FsbGVk7J24IOqyveyasCDslYTsp4EgY2FwdHVyZVVJ6rCAIOq3uOugpOyngOyngCDslYrslYQg66y07J2Y66+4XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSAmJiAhaXNGaXJzdENhbGxlZCkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgJiYgYm90dG9tVUkgJiYgY2FwdHVyZVVJKSB7XG4gICAgICAgIGNvbnN0IGNhbGNTdW1PZkhlaWdodEJvdHRvbVVJQ2hpbGROb2RlcyA9IHRoaXMuX19jYWxjU3VtT2ZIZWlnaHRDaGlsZE5vZGVzKGJvdHRvbVVJKTtcbiAgICAgICAgbGV0IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0ID0gY2FwdHVyZUJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzdmcnKS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0ID09PSAwID8gODAgOiBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodDtcbiAgICAgICAgbGV0IGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gPSBib3R0b21VSS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gLT0gaXNOYU4ocGFyc2VJbnQoYm90dG9tVUkuc3R5bGUucGFkZGluZ1RvcCkpID8gMCA6IHBhcnNlSW50KGJvdHRvbVVJLnN0eWxlLnBhZGRpbmdUb3ApO1xuICAgICAgICBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIC09IGNhbGNTdW1PZkhlaWdodEJvdHRvbVVJQ2hpbGROb2RlcztcbiAgICAgICAgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSAtPSBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodDtcbiAgICAgICAgY29uc3QgYmFzZWxpbmUgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gKGNhbGNPY3JDbGllbnRIZWlnaHQgLyAyICsgZ3VpZGVCb3hIZWlnaHQgLyAyKTtcbiAgICAgICAgaWYgKGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gPiAwICYmIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gPCBiYXNlbGluZSkge1xuICAgICAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgICAgICdwYWRkaW5nLXJpZ2h0JzogJycsXG4gICAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiBjYXB0dXJlVUlQYWRkaW5nQm90dG9tICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiAnMTBweCcsXG4gICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRydWUpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX2NhbGNTdW1PZkhlaWdodENoaWxkTm9kZXMob2JqKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIG9iaj8uY2hpbGROb2Rlcykge1xuICAgICAgc3VtICs9IGl0ZW0uY2xpZW50SGVpZ2h0ID8gaXRlbS5jbGllbnRIZWlnaHQgOiAwO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9XG4gIF9fY2xvc2VDYW1lcmEoKSB7XG4gICAgdGhpcy5fX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgfVxuICBhc3luYyBfX2xvYWRSZXNvdXJjZXMoKSB7XG4gICAgdm9pZCAwO1xuICAgIGlmICh0aGlzLl9fcmVzb3VyY2VzTG9hZGVkKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZGtTdXBwb3J0RW52ID0gJ3F1cmFtJztcbiAgICBsZXQgaXNTdXBwb3J0U2ltZCA9IGF3YWl0IHNpbWQoKTtcbiAgICBsZXQgZW52SW5mbyA9ICcnO1xuICAgIGVudkluZm8gKz0gYG9zIDogJHt0aGlzLl9fZGV2aWNlSW5mby5vc31cXG5gO1xuICAgIGVudkluZm8gKz0gYG9zU2ltcGxlIDogJHt0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZX1cXG5gO1xuICAgIGVudkluZm8gKz0gYHNpbWQod2FzbS1mZWF0dXJlLWRldGVjdCkgOiAke2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBpZiAodGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGUgPT09ICdJT1MnIHx8IHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnTUFDJykge1xuICAgICAgaXNTdXBwb3J0U2ltZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbnZJbmZvICs9IGBpc1N1cHBvcnRTaW1kKGZpbmFsKSA6ICR7aXNTdXBwb3J0U2ltZH1cXG5gO1xuICAgIGVudkluZm8gKz0gYFVzZXJBZ2VudCA6ICR7bmF2aWdhdG9yLnVzZXJBZ2VudH1cXG5gO1xuICAgIGlmIChpc1N1cHBvcnRTaW1kKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBzZGtTdXBwb3J0RW52ICs9ICdfc2ltZC5qcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHNka1N1cHBvcnRFbnYgKz0gJy5qcyc7XG4gICAgfVxuICAgIHZvaWQgMDtcbiAgICB3aW5kb3cudXNlYk9DUkVudkluZm8gPSBlbnZJbmZvO1xuICAgIHZvaWQgMDtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNka1N1cHBvcnRFbnYsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xuICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG5cbiAgICAgIC8vIGRhdGEobW9kZWwpXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcKGZ1bmN0aW9uXFwoXFwpIFxcey9tLCAndmFyIGNyZWF0ZU1vZGVsRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnLCAnICAgcmVqZWN0KCk7XFxuJyArICcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgfSwgaGFuZGxlRXJyb3IpJywgJyAgcmVzb2x2ZSgpO1xcbicgKyAnICB9LCBoYW5kbGVFcnJvciknKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFx9XFwpXFwoXFwpOy9tLCAnXFxuIH0pXFxuJyArICd9OycpO1xuXG4gICAgICAvLyB3YXNtXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgncXVyYW0ud2FzbScsIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWYpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL1JFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXXF1cmFtXFwuZGF0YVtcIiddL2dtLCBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwiJHtuZXcgVVJMKCdxdXJhbS5kYXRhJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmfVwiYCk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnZnVuY3Rpb24gY3JlYXRlV2FzbScsICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnaW5zdGFudGlhdGVBc3luYygpOycsICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7Jyk7XG5cbiAgICAgIC8vIHdhc20gYW5kIGRhdGEobW9kZWwpIGZpbGUg67OR66Cs66GcIGZldGNoIO2VmOq4sCDsnITtlbRcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gc3RhcnRcIilcXG4nICsgJ2F3YWl0IChhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkV2FzbSA9IGZhbHNlO1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWREYXRhID0gZmFsc2U7XFxuJyArICcgICAgY3JlYXRlV2FzbSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkV2FzbSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkRGF0YSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KTtcXG4nICsgJyAgICBjcmVhdGVNb2RlbERhdGEoKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZERhdGEgPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZFdhc20pIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSlcXG4nICsgJyAgfSk7XFxuJyArICd9KSgpO1xcbicgKyAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIGVuZFwiKScpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9KTtcbiAgICBzcmMgPSBgXG4gICAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgJHtzcmN9XG4gICAgICBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4ID0gbGVuZ3RoQnl0ZXNVVEY4XG4gICAgICBNb2R1bGUuc3RyaW5nVG9VVEY4ID0gc3RyaW5nVG9VVEY4XG4gICAgICByZXR1cm4gTW9kdWxlXG4gICAgfSkoKVxuICAgICAgICBgO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCA9IGFzeW5jIF8gPT4ge1xuICAgICAgdm9pZCAwO1xuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpO1xuICAgIHRoaXMuX19yZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX3N0YXJ0U2NhbkltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX19kZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7XG4gICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgIHRoaXMuX19hZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuX19wYWdlRW5kID0gZmFsc2U7XG4gICAgICAvLyDrsKnslrTsvZTrk5wg66y47J6Q6rCA65Ok7Ja06rCAIOyeiOuKlOqyveyasFxuICAgICAgdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA9IGlzTmFOKHBhcnNlSW50KHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQpKSA/IDAgOiBwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KTtcbiAgICAgIHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgICAgIHRoaXMuX19zc2FSZXRyeUNvdW50ID0gMDtcbiAgICAgIGNvbnN0IHNjYW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgICBpc0RldGVjdGVkQ2FyZCA9IG51bGwsXG4gICAgICAgICAgICBpbWdEYXRhID0gbnVsbCxcbiAgICAgICAgICAgIGltZ0RhdGFVcmwgPSBudWxsLFxuICAgICAgICAgICAgbWFza0ltYWdlID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgICBzc2FSZXN1bHRMaXN0ID0gW10sXG4gICAgICAgICAgICBtYXNrSW5mbyA9IG51bGw7XG5cbiAgICAgICAgICAvLyBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICAgIGlmICghdGhpcy5fX09DUkVuZ2luZVsnYXNtJ10pIHJldHVybjtcblxuICAgICAgICAgIC8vIFRPRE8gOiDshKTsoJXtlaDsiJgg7J6I6rKMIOuzgOqyvSAgZGVmYXVsdCDqsJLrj4Qg7KCc6rO1XG4gICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25fdywgcmVzb2x1dGlvbl9oXSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdmlkZW9cbiAgICAgICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICBpZiAocmVzb2x1dGlvbl93ID09PSAwIHx8IHJlc29sdXRpb25faCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgIGlmICh0aGlzLl9fZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBiZWZvcmUgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG4gICAgICAgICAgaWYgKHRoaXMuX19hZGRyZXNzID09PSAwICYmICF0aGlzLl9fcGFnZUVuZCAmJiAoYXdhaXQgdGhpcy5fX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpKSB7XG4gICAgICAgICAgICBbdGhpcy5fX2FkZHJlc3MsIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrXSA9IHRoaXMuX19nZXRTY2FubmVyQWRkcmVzcyh0aGlzLl9fb2NyVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5fX2FkZHJlc3MgfHwgdGhpcy5fX3BhZ2VFbmQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBhZnRlciAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9fb2NyU3RhdHVzIDwgdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBPQ1Ig7JmE66OMIOydtOyghCDsg4Htg5xcblxuICAgICAgICAgICAgLy8gY2FyZCBub3QgZGV0ZWN0ZWRcbiAgICAgICAgICAgIFtpc0RldGVjdGVkQ2FyZCwgaW1nRGF0YSwgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQodGhpcy5fX2FkZHJlc3MsIDApO1xuICAgICAgICAgICAgaWYgKCFpc0RldGVjdGVkQ2FyZCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLlJFQURZKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfRkFJTEVEKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCwgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpOyAvLyDtlYTsmpTtlZzqsIA/XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhcmQgaXMgZGV0ZWN0ZWRcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX1NVQ0NFU1MpO1xuXG4gICAgICAgICAgICAvLyBzc2EgcmV0cnkg7ISk7KCV7J20IOuQmOyWtCDsnojsnLzqsbDrgpgsIOyImOuPmey0rOyYgVVJ66W8IOyCrOyaqe2VmOuKlCDqsr3smrAsIGNhcmQgZGV0ZWN0IOyEseqzteyLnCDsnbTrr7jsp4Ag7KCA7J6lXG4gICAgICAgICAgICB0aGlzLl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUywgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlXSA9IGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKHRoaXMuX19hZGRyZXNzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCksIGltZ0RhdGEsIGltZ0RhdGFVcmwpO1xuXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgLy8gICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgICAgICAgIC8vICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7ICAgICAgICAvLyDtlYTsmpTtlZzqsIA/XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPj0gdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBvY3Ig7JmE66OMIOydtO2bhCDsg4Htg5xcblxuICAgICAgICAgICAgLy8gZmFpbHVyZSBjYXNlXG4gICAgICAgICAgICBpZiAob2NyUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9DUiBTdGF0dXMgaXMgJHt0aGlzLl9fb2NyU3RhdHVzfSwgYnV0IG9jclJlc3VsdCBpcyBmYWxzZWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pOyAvLyBPQ1Ig7JmE66OMIOyLnOygkOyXkCBjYW1lcmEgcHJldmlldyBvZmZcblxuICAgICAgICAgICAgaWYgKHRoaXMuX19zc2FNb2RlKSB7XG4gICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgLy8g7LWc7LSIIOyLnOuPhFxuICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2FkZHJlc3MpO1xuICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3NhUmVzdWx0TGlzdC5wdXNoKHNzYVJlc3VsdCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCByZXRyeVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdC5pbmRleE9mKCdGQUtFJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX3NzYVJldHJ5Q291bnQgPT09IHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3NzYVJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aFJldHJ5KHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tFUlJdIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzc2FSZXN1bHRMaXN0LnB1c2goc3NhUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXRyeVdvcmtpbmdUaW1lID0gbmV3IERhdGUoKSAtIHJldHJ5U3RhcnREYXRlO1xuICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYXNrSW5mbykge1xuICAgICAgICAgICAgICBtYXNrSW5mbyA9IHRoaXMuX19nZXRNYXNrSW5mbyh0aGlzLl9fYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGxlZ2FjeUZvcm1hdCxcbiAgICAgICAgICAgICAgbmV3Rm9ybWF0XG4gICAgICAgICAgICB9ID0gcGFyc2VyLnBhcnNlT2NyUmVzdWx0KHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fc3NhTW9kZSwgb2NyUmVzdWx0LCBzc2FSZXN1bHQsIHRoaXMuX19zc2FSZXRyeUNvdW50LCBzc2FSZXN1bHRMaXN0KTtcbiAgICAgICAgICAgIGxldCByZXZpZXdfcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgICAgICAgIG9jcl9yZXN1bHQ6IG5ld0Zvcm1hdCxcbiAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogaW1nRGF0YVVybCxcbiAgICAgICAgICAgICAgb2NyX21hc2tpbmdfaW1hZ2U6IG1hc2tJbWFnZSxcbiAgICAgICAgICAgICAgbWFza0luZm86IG1hc2tJbmZvLFxuICAgICAgICAgICAgICBzc2FfbW9kZTogdGhpcy5fX3NzYU1vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlRW5jcnlwdE1vZGUpIHtcbiAgICAgICAgICAgICAgbGV0IGVuY3J5cHRlZFJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgIGVuY3J5cHRlZFJlc3VsdCA9IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0KTtcbiAgICAgICAgICAgICAgcmV2aWV3X3Jlc3VsdC5lbmNyeXB0ZWQgPSBlbmNyeXB0ZWRSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTGVnYWN5Rm9ybWF0KSB7XG4gICAgICAgICAgICAgIHJldmlld19yZXN1bHQub2NyX2RhdGEgPSBsZWdhY3lGb3JtYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgdGhpcy5fX2RldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yJztcbiAgICAgICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzogJyArIGUubWVzc2FnZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgICAvLyAgIGF3YWl0IHRoaXMuX19yZWNvdmVyeVNjYW4oKTtcbiAgICAgICAgICAvLyAgIHRoaXMuX19yZWNvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoJ1dBMDAxJywgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodGhpcy5fX3JlY292ZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5fX3JlY292ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuX19kZXRlY3RlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8g7J6s6reAXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZXRUaW1lb3V0KHNjYW4sIDEpOyAvLyBVSSDrnpzrjZTrp4EgYmxvY2tpbmcg67Cp7KeAIChzZXRUaW1lb3V0KVxuICAgIH0pO1xuICB9XG5cbiAgX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUoaW1nRGF0YSwgaW1nRGF0YVVSTCkge1xuICAgIC8vIHNzYSByZXRyeSDshKTsoJXsnbQg65CY7Ja0IOyeiOycvOqxsOuCmCwg7IiY64+Z7LSs7JiBVUnrpbwg7IKs7Jqp7ZWY64qUIOqyveyasCwgY2FyZCBkZXRlY3Qg7ISx6rO17IucIOydtOuvuOyngCDsoIDsnqVcbiAgICBpZiAodGhpcy5fX3NzYU1vZGUgJiYgdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDAgfHwgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJICYmIHRoaXMuX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgbGV0IGxpbWl0U2F2ZUltYWdlQ291bnQgPSBNYXRoLm1heCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50LCB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCk7XG4gICAgICBpZiAodGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLmxlbmd0aCA9PT0gbGltaXRTYXZlSW1hZ2VDb3VudCkge1xuICAgICAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUuc2hpZnQoKTtcbiAgICAgICAgaWYgKHRoaXMuX19kZWJ1Z01vZGUpIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NC5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnB1c2goaW1nRGF0YSk7XG4gICAgICBpZiAodGhpcy5fX2RlYnVnTW9kZSkge1xuICAgICAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQucHVzaChpbWdEYXRhVVJMKTtcbiAgICAgICAgdm9pZCAwOyAvLyBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgfVxuXG4gICAgICB2b2lkIDA7IC8vIHNob3VsZCBiZSByZW1vdmVkXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX19vblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpIHtcbiAgICAvLyDsnbjsi50g7ISx6rO1IOyKpOy6lCDro6jtlIQg7KKF66OMXG4gICAgaWYgKHJldmlld19yZXN1bHQuc3NhX21vZGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1MpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgcmVzdWx0X2NvZGU6ICdOMTAwJyxcbiAgICAgICAgcmVzdWx0X21lc3NhZ2U6ICdPSy4nXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiAnc3VjY2VzcycsXG4gICAgICByZXZpZXdfcmVzdWx0OiByZXZpZXdfcmVzdWx0XG4gICAgfTtcbiAgICBpZiAodGhpcy5fX29uU3VjY2Vzcykge1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19vbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgIGxldCBlcnJvckRldGFpbCA9ICcnO1xuICAgIGlmIChlPy50b1N0cmluZygpKSBlcnJvckRldGFpbCArPSBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGU/LnN0YWNrKSBlcnJvckRldGFpbCArPSBlLnN0YWNrO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICByZXN1bHRfY29kZTogcmVzdWx0Q29kZSxcbiAgICAgICAgcmVzdWx0X21lc3NhZ2U6IGVycm9yTWVzc2FnZVxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogJ2ZhaWxlZCcsXG4gICAgICByZXZpZXdfcmVzdWx0OiB7XG4gICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgZXJyb3JfZGV0YWlsOiBlcnJvckRldGFpbFxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vbkZhaWx1cmUpIHtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fc3RhcnRTY2FuKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5JbXBsKCk7XG4gICAgdm9pZCAwO1xuICB9XG4gIGFzeW5jIF9fcmVjb3ZlcnlTY2FuKCkge1xuICAgIHZvaWQgMDtcbiAgICB0aGlzLl9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW4oKTtcbiAgfVxuICBzdG9wU2NhbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgc3RvcFN0cmVhbSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmICh0aGlzLl9fc3RyZWFtKSB7XG4gICAgICB0aGlzLl9fc3RyZWFtLnN0b3AgJiYgdGhpcy5fX3N0cmVhbS5zdG9wKCk7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0cmVhbSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIOuplOuqqOumrCBhbGxvY2F0aW9uIGZyZWUg7ZWo7IiYICovXG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpO1xuICAgIHRoaXMuX19kZXN0cm95QnVmZmVyKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lQcmV2SW1hZ2UoKTtcbiAgICB0aGlzLl9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKTtcbiAgfVxuICBfX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcik7XG4gICAgICB0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVc2VCT0NSOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxPQUFPQSxRQUFRLE1BQU0sdUJBQXVCO0FBQzVDLE9BQU9DLE1BQU0sTUFBTSxxQkFBcUI7QUFDeEMsU0FBU0MsSUFBSSxFQUFFQyxPQUFPLFFBQVEsa0NBQWtDO0FBQ2hFLElBQUlDLFFBQVE7QUFDWixNQUFNQyxPQUFPLENBQUM7RUEyQlo7O0VBRUE7O0VBaUVpQztFQUNMOztFQU1FO0VBQ0Y7RUFDQzs7RUFJN0I7O0VBbUpBO0VBQ0FDLFdBQVdBLENBQUEsRUFBRztJQUFBQyxlQUFBLHNCQTlQQTtNQUNaQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxTQUFTLEVBQUUsV0FBVztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFD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
