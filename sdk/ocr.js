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
import usebOCRWASMParser from './helpers/useb-ocr-wasm-parser.js';
import usebOCRAPIParser from './helpers/useb-ocr-api-parser.js';
import { isSupportWasm, measure, simd, threads } from './helpers/wasm-feature-detect.js';
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
    _defineProperty(this, "__isSupportWasm", false);
    _defineProperty(this, "__isSupportSimd", false);
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
    _defineProperty(this, "__ocrTypeNumberToString", new Map([['1', 'idcard'], ['2', 'driver'], ['3', 'passport'], ['4', 'foreign-passport'], ['5', 'alien'], ['5-1', 'alien'], ['5-2', 'alien'], ['5-3', 'alien']]));
    _defineProperty(this, "__ocrStringToTypeNumber", new Map([['idcard', '1'], ['driver', '2'], ['passport', '3'], ['foreign-passport', '4'], ['alien', '5'], ['alien', '5-1'], ['alien', '5-2'], ['alien', '5-3']]));
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
    _defineProperty(this, "__switchUIWrap", void 0);
    _defineProperty(this, "__switchUI", void 0);
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
    _defineProperty(this, "__isSwitchToServerMode", false);
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
      useFaceImage: true,
      // 신분증 내 얼굴 사진

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
      useCaptureUI: true,
      // 캡처버튼 UI

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

      // 촬영옵션
      useAutoSwitchToServerMode: false,
      // 저사양 단말에서 서버OCR로 자동 전환 기능
      useManualSwitchToServerMode: false,
      // 수동으로 서버OCR 전환 기능 (수동이 true이면 자동은 무시됨)
      switchToServerThreshold: 20.0,
      // 자동전환 기준값 (성능 측정치 ms)
      useForceCompleteUI: false,
      // WASM 모드일때 버튼 누를시 해당 시점에 강제로 완료 사용여부

      // 수동촬영 버튼 옵션
      captureButtonStyle: {
        stroke_color: '#ffffff',
        // 버튼 테두리(stroke) 색상
        base_color: '#5e8fff' // 버튼 색상
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

      // 사본판별 RETRY 설정
      // ssaRetryType
      //   - REAL     : 본인(REAL) 거부율 -> False Negative(실제값은 REAL인데 예측값은 FAKE라서 틀린경우)를 낮추기 위해,
      //   - FAKE     : 타인(FAKE) 수락율 -> False Positive(실제값은 FAKE인데 예측값은 REAL이라서 틀린경우)를 낮추기 위해
      //   - ENSEMBLE : 평균 절대값 -> ssaMaxRetryCount 만큼 반복 수행하고 fd_confidence 절대값 값의 평균으로 판정
      // ssaMaxRetryCount 설정 값만큼 재시도하여 한번이라도 기준값(REAL 또는 FAKE)이 뜨면 기준값(REAL 또는 FAKE)로 판정
      ssaRetryType: 'ENSEMBLE',
      ssaRetryPivot: 0.8,
      // REAL/FAKE를 판정하는 fd_confidence 기준값 (wasm 배포 버전에 따라 다름) ※ 수정불가
      ssaMaxRetryCount: 0 // 최대 RETRY 회수설정 0이면 미사용
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
      this.__isSupportWasm = isSupportWasm();
      if (!this.__isSupportWasm) {
        throw new Error('WebAssembly is not supported. in this browser.');
      }
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
    return this.__ocrTypeNumberToString.get(type);
  }
  getOcrTypeNumber(string) {
    return this.__ocrStringToTypeNumber.get(string);
  }
  getUIOrientation() {
    return this.__uiOrientation;
  }
  getVideoOrientation() {
    return this.__videoOrientation;
  }
  checkSwitchToServerMode() {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (_this2.__options.useManualSwitchToServerMode) {
        // 수동전환 on 이면 수동전환 우선
        return _this2.__isSwitchToServerMode;
      } else {
        // 수동전환 off 이면 자동전환 체크
        if (_this2.__options.useAutoSwitchToServerMode) {
          // 자동전환 on일때
          // 성능 측정값을 기준으로 WASM or Server
          return (yield measure()) > _this2.__options.switchToServerThreshold;
        } else {
          // 수동전환도 off, 자동전환 off
          return false;
        }
      }
    })();
  }
  startOCR(type, onSuccess, onFailure) {
    var _arguments = arguments,
      _this3 = this;
    return _asyncToGenerator(function* () {
      var onInProgressChange = _arguments.length > 3 && _arguments[3] !== undefined ? _arguments[3] : null;
      if (!!!type || !!!onSuccess || !!!onFailure) {
        void 0;
        return;
      }
      _this3.__isSwitchToServerMode = yield _this3.checkSwitchToServerMode();
      _this3.__ocrType = type;
      _this3.__ssaMode = _this3.__ocrType.indexOf('-ssa') > -1;
      _this3.__onSuccess = onSuccess;
      _this3.__onFailure = onFailure;
      _this3.__onInProgressChange = onInProgressChange;
      if (onInProgressChange) {
        if (_this3.__options.useTopUI) {
          _this3.__topUI = detector.getOCRElements().topUI;
        }
        if (_this3.__options.useMiddleUI) {
          _this3.__middleUI = detector.getOCRElements().middleUI;
        }
        if (_this3.__options.useBottomUI) {
          _this3.__bottomUI = detector.getOCRElements().bottomUI;
        }
      }
      yield _this3.__changeStage(_this3.IN_PROGRESS.NOT_READY);
      if (!_this3.isInitialized()) {
        throw new Error('Not initialized!');
      }
      try {
        if (_this3.__isSwitchToServerMode) {
          // serverMode
          if (_this3.__options.useEncryptMode && _this3.__isSupportWasm) yield _this3.__preloadingWasm();
          yield _this3.__startScanServer();
        } else {
          // wasmMode
          yield _this3.__preloadingWasm();
          yield _this3.__startScanWasm();
        }
      } catch (e) {
        void 0;
      } finally {
        _this3.stopOCR();
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
    var _arguments2 = arguments,
      _this4 = this;
    return _asyncToGenerator(function* () {
      var isSwitchMode = _arguments2.length > 4 && _arguments2[4] !== undefined ? _arguments2[4] : false;
      if (isSwitchMode) {
        yield _this4.stopOCR();
      } else {
        _this4.__closeCamera();
      }
      yield _this4.startOCR(ocrType, onSuccess, onFailure, onInProgressChange);
    })();
  }

  /** private methods */
  __waitPreloaded() {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      var waitingRetryCount = 0;
      return new Promise(resolve => {
        var check = () => {
          setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
            if (_this5.isPreloaded()) {
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
    var _this6 = this;
    return _asyncToGenerator(function* () {
      var isSupportedResolution = false;
      var resolutionText = 'not ready';
      if (!_this6.__camSetComplete) {
        return {
          isSupportedResolution,
          resolutionText
        };
      }
      if (videoElement.videoWidth === 0 && videoElement.videoHeight === 0) {
        yield _this6.__changeStage(_this6.IN_PROGRESS.NOT_READY);
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
      _this6.__videoWidth = videoElement.videoWidth;
      _this6.__videoHeight = videoElement.videoHeight;
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
    var _arguments3 = arguments,
      _this7 = this;
    return _asyncToGenerator(function* () {
      var imgType = _arguments3.length > 3 && _arguments3[3] !== undefined ? _arguments3[3] : 'card';
      try {
        if (imgType === 'card') {
          _this7.__OCREngine.encodeJpgDetectedFrameImage(address, maskMode, cropMode);
        } else if (imgType === 'face') {
          _this7.__OCREngine.encodeJpgDetectedPhotoImage(address);
        }
        var jpgSize = _this7.__OCREngine.getEncodedJpgSize();
        var jpgPointer = _this7.__OCREngine.getEncodedJpgBuffer();
        var resultView = new Uint8Array(_this7.__OCREngine.HEAP8.buffer, jpgPointer, jpgSize);
        var result = new Uint8Array(resultView);
        var blob = new Blob([result], {
          type: 'image/jpeg'
        });
        return yield _this7.__blobToBase64(blob);
      } catch (e) {
        void 0;
        throw e;
      } finally {
        _this7.__OCREngine.destroyEncodedJpg();
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
    var _this8 = this;
    return _asyncToGenerator(function* () {
      var {
        isSupportedResolution,
        resolutionText
      } = yield _this8.__setVideoResolution(videoElement);
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
    var _this9 = this;
    return _asyncToGenerator(function* () {
      if (!_this9.__camSetComplete) return [null, null, null];
      var [calcResolution_w, calcResolution_h] = [_this9.__resolutionWidth, _this9.__resolutionHeight];
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
      var calcCropImageSizeWidth = _this9.__cropImageSizeWidth;
      var calcCropImageSizeHeight = _this9.__cropImageSizeHeight;
      var calcVideoOrientation = _this9.__videoOrientation;
      if (_this9.__isRotated90or270) {
        [calcCropImageSizeWidth, calcCropImageSizeHeight] = [calcCropImageSizeHeight, calcCropImageSizeWidth];
        [calcResolution_w, calcResolution_h] = [calcResolution_h, calcResolution_w];
        calcCanvas = rotationCanvas;
        calcVideoOrientation = _this9.__videoOrientation === 'portrait' ? 'landscape' : 'portrait';
      }
      var calcMaxSWidth = 99999;
      var calcMaxSHeight = 99999;
      if (_this9.__uiOrientation === 'portrait') {
        if (calcVideoOrientation === _this9.__uiOrientation) {
          // 세로 UI / 세로 카메라
          calcMaxSWidth = calcVideoWidth;
          calcMaxSHeight = calcVideoHeight;
        } else {
          // 세로 UI / 가로 카메라
          calcMaxSHeight = calcVideoHeight;
        }
      } else {
        if (calcVideoOrientation === _this9.__uiOrientation) {
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
      if (_this9.__isRotated90or270) {
        return yield _this9.__rotate(imgData, imgDataUrl, _this9.__getRotationDegree());
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
        img.addEventListener('load', /*#__PURE__*/_asyncToGenerator(function* () {
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
          var newImageData = [90, 270].includes(degree) ? tempContext.getImageData(0, 0, img.height, img.width) : tempContext.getImageData(0, 0, img.width, img.height);
          resolve([newImageData, tempCanvas.toDataURL('image/jpeg')]);
          tempContext.restore();
        }));
      });
    })();
  }
  __isCardboxDetected(address) {
    var _arguments4 = arguments,
      _this10 = this;
    return _asyncToGenerator(function* () {
      var boxType = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : 0;
      var retryImg = _arguments4.length > 2 && _arguments4[2] !== undefined ? _arguments4[2] : null;
      if (!address || address < 0) {
        return [false, null];
      }
      try {
        var imgData;
        var imgDataUrl = null;
        var [buffer] = _this10.__getBuffer();
        if (retryImg !== null) {
          imgData = retryImg;
        } else {
          [imgData, imgDataUrl] = yield _this10.__cropImageFromVideo();
        }
        if (!!!imgData) {
          return [false, null];
        }
        _this10.__OCREngine.HEAP8.set(imgData.data, buffer);
        var kor = false,
          alien = false,
          passport = false;
        switch (_this10.__ocrType) {
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
          result = _this10.__OCREngine.detect_idcard_opt(buffer, _this10.__resolutionWidth, _this10.__resolutionHeight, address, kor, alien, passport);
        } else {
          result = _this10.__OCREngine.detect_idcard(buffer, _this10.__resolutionWidth, _this10.__resolutionHeight, address, boxType);
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
    var _this11 = this;
    return _asyncToGenerator(function* () {
      try {
        if (address === null) {
          return '';
        } else if (address === -1) {
          return 'checkValidation Fail';
        }
        var ocrResult = null;
        if (!_this11.__ocrTypeList.includes(ocrType)) throw new Error('Unsupported OCR type');
        var [, resultBuffer] = _this11.__getBuffer();
        var recognition = /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator(function* (isSetIgnoreComplete) {
            var _ocrResult, _ocrResult2;
            if (isSetIgnoreComplete) {
              yield _this11.__isCardboxDetected(address, 0, imgData);
            }
            switch (ocrType) {
              case 'idcard':
              case 'driver':
              case 'idcard-ssa':
              case 'driver-ssa':
                ocrResult = _this11.__OCREngine.scanIDCard(address, resultBuffer);
                break;
              case 'passport':
              case 'foreign-passport':
              case 'passport-ssa':
              case 'foreign-passport-ssa':
                ocrResult = _this11.__OCREngine.scanPassport(address, resultBuffer);
                break;
              case 'alien':
              case 'alien-ssa':
                ocrResult = _this11.__OCREngine.scanAlien(address, resultBuffer);
                break;
              case 'credit':
                ocrResult = _this11.__OCREngine.scanCredit(address, resultBuffer);
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
            ocrResult = _this11.__csvToObject(ocrResult);
            if (((_ocrResult = ocrResult) === null || _ocrResult === void 0 ? void 0 : _ocrResult.complete) !== 'undefined' && ((_ocrResult2 = ocrResult) === null || _ocrResult2 === void 0 ? void 0 : _ocrResult2.complete) === 'true') {
              return true;
            } else {
              if (isSetIgnoreComplete) {
                if (_this11.__manualOCRRetryCount < _this11.__manualOCRMaxRetryCount) {
                  // detectedCardQueue에서 한장을 꺼내서 갱신한다.
                  // 저장되어있는 이미지의 숫자가 retry 보다 작은경우 대비하여 %를 사용함
                  var queueIdx = _this11.__manualOCRRetryCount % _this11.__detectedCardQueue.length;
                  imgData = _this11.__detectedCardQueue[queueIdx];
                  _this11.__manualOCRRetryCount++;
                  return yield recognition(isSetIgnoreComplete);
                } else {
                  // 사진 한장으로 OCR 실패 (popup 내리고 setIgnoreComplete(false) 처리?
                  _this11.__manualOCRRetryCount = 0;
                  _this11.setIgnoreComplete(false);
                  _this11.__blurCaptureButton(); // 팝업이 내려갈때 처리되지만 미리 처리
                  yield _this11.__changeStage(_this11.IN_PROGRESS.MANUAL_CAPTURE_FAILED, false, imgDataUrl);
                  _this11.__setStyle(detector.getOCRElements().video, {
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
            return _ref5.apply(this, arguments);
          };
        }();
        // end of function recognition()

        if (yield recognition(isSetIgnoreComplete)) {
          var isCreditCard = ocrType === 'credit';
          var originImage = yield _this11.__getImageBase64(address, false, isCreditCard);
          var maskImage = isCreditCard ? null : yield _this11.__getImageBase64(address, true, true);
          maskImage = maskImage === 'data:' ? null : maskImage;
          var faceImage = _this11.__options.useFaceImage ? yield _this11.__getImageBase64(address, true, true, 'face') : null;
          if (ssaMode) {
            yield _this11.__changeStage(_this11.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA, false, maskImage);
          } else {
            yield _this11.__changeStage(_this11.IN_PROGRESS.OCR_RECOGNIZED);
          }
          return [ocrResult, originImage, maskImage, faceImage];
        } else {
          return [false, null, null, null];
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
    var _this12 = this;
    return _asyncToGenerator(function* () {
      yield _this12.__isCardboxDetected(address, 0, imgData);
      // await this.__startRecognition(address, ocrType, true);      // for 성능을 위해 진행 X
      return yield _this12.__startTruth(ocrType, address);
    })();
  }
  __setCameraPermissionTimeoutTimer() {
    var _this13 = this;
    this.__clearCameraPermissionTimeoutTimer();
    this.__cameraPermissionTimeoutTimer = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
      // 1초 delay 후 실행
      yield _this13.__proceedCameraPermission();
    }), 1000);
  }
  __proceedCameraPermission() {
    var _this14 = this;
    return _asyncToGenerator(function* () {
      try {
        _this14.__closeCamera();
        var isPassport = _this14.__ocrType.includes('passport');
        yield _this14.__setupVideo(isPassport);
        var {
          video
        } = detector.getOCRElements();
        if (video) {
          // const [track] = this.__stream.getVideoTracks();
          // const capability = track.getCapabilities();
          // console.debug('CardScan__initialize capability', capability);
          if ('srcObject' in video) {
            video.srcObject = _this14.__stream;
          } else {
            // Avoid using this in new browsers, as it is going away.
            video.src = window.URL.createObjectURL(_this14.__stream);
          }
          video.addEventListener('loadedmetadata', () => {
            // console.debug('proceedCameraPermission - onloadedmetadata');
            video.play();
          });
          video.addEventListener('canplay', /*#__PURE__*/_asyncToGenerator(function* () {
            void 0;

            // video element style 설정
            _this14.__videoOrientation = video.videoWidth / video.videoHeight < 1 ? 'portrait' : 'landscape';
            void 0;
            void 0;
            void 0;
            _this14.__camSetComplete = true;
            yield _this14.__adjustStyle();
          }));
          yield _this14.__changeStage(_this14.IN_PROGRESS.READY);
          video.webkitExitFullscreen();
        } else {
          yield _this14.__changeStage(_this14.IN_PROGRESS.NOT_READY);
          _this14.__closeCamera();
        }
      } catch (e) {
        void 0;
        if (e.name === 'NotAllowedError') {
          var errorMessage = 'Camera Access Permission is not allowed';
          void 0;
          void 0;
          _this14.__onFailureProcess('E403', e, errorMessage);
        } else if (e.name === 'NotReadableError') {
          // 다른곳에서 카메라 자원을 사용중
          yield _this14.__changeStage(_this14.IN_PROGRESS.NOT_READY);
          _this14.stopStream();
          _this14.__setCameraPermissionTimeoutTimer(); // 재귀 호출
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
    var _arguments5 = arguments,
      _this15 = this;
    return _asyncToGenerator(function* () {
      var forceUpdate = _arguments5.length > 1 && _arguments5[1] !== undefined ? _arguments5[1] : false;
      var recognizedImage = _arguments5.length > 2 && _arguments5[2] !== undefined ? _arguments5[2] : null;
      if (_this15.__previousInProgressStep === val && forceUpdate === false) {
        return;
      }
      _this15.__changeOCRStatus(val);
      _this15.__previousInProgressStep = val;
      _this15.__inProgressStep = val;
      var {
        guideBox,
        maskBoxWrap,
        captureButton
      } = detector.getOCRElements();
      var style = {
        borderWidth: _this15.__options.frameBorderStyle.width + 'px',
        borderStyle: _this15.__options.frameBorderStyle.style,
        borderRadius: _this15.__options.frameBorderStyle.radius + 'px',
        borderColor: _this15.__options.frameBorderStyle[val]
      };
      if (guideBox) {
        _this15.__setStyle(guideBox, style);
      }
      if (_this15.__options.useMaskFrameColorChange) {
        if (!!_this15.__options.showClipFrame) {
          void 0;
        } else {
          var _maskBoxWrap$querySel;
          maskBoxWrap === null || maskBoxWrap === void 0 ? void 0 : (_maskBoxWrap$querySel = maskBoxWrap.querySelector('#maskBoxOuter')) === null || _maskBoxWrap$querySel === void 0 ? void 0 : _maskBoxWrap$querySel.setAttribute('fill', _this15.__options.maskFrameStyle[val]);
        }
      }
      if (_this15.__options.useCaptureUI) {
        var _captureButton$queryS;
        captureButton === null || captureButton === void 0 ? void 0 : (_captureButton$queryS = captureButton.querySelector('#captureButton')) === null || _captureButton$queryS === void 0 ? void 0 : _captureButton$queryS.setAttribute('fill', _this15.__options.captureButtonStyle['base_color']);
      }
      var ocrMode = _this15.__isSwitchToServerMode ? 'server' : 'wasm';
      if (_this15.__onInProgressChange) {
        if (_this15.__options.useTopUI || _this15.__options.useTopUITextMsg) {
          _this15.__onInProgressChange.call(_this15, ocrMode, _this15.__ocrType, _this15.__inProgressStep, _this15.__topUI, 'top', _this15.__options.useTopUITextMsg, _this15.__options.useCaptureUI, _this15.__options.usePreviewUI, recognizedImage);
        }
        if (_this15.__options.useMiddleUI || _this15.__options.useMiddleUITextMsg) {
          _this15.__onInProgressChange.call(_this15, ocrMode, _this15.__ocrType, _this15.__inProgressStep, _this15.__middleUI, 'middle', _this15.__options.useMiddleUITextMsg, _this15.__options.useCaptureUI, _this15.__options.usePreviewUI, recognizedImage);
        }
        if (_this15.__options.useBottomUI || _this15.__options.useBottomUITextMsg) {
          _this15.__onInProgressChange.call(_this15, ocrMode, _this15.__ocrType, _this15.__inProgressStep, _this15.__bottomUI, 'bottom', _this15.__options.useBottomUITextMsg, _this15.__options.useCaptureUI, _this15.__options.usePreviewUI, recognizedImage);
        }
      }
      if (val === _this15.IN_PROGRESS.MANUAL_CAPTURE_SUCCESS || val === _this15.IN_PROGRESS.MANUAL_CAPTURE_FAILED) {
        if (_this15.__options.usePreviewUI) {
          _this15.__updatePreviewUI(recognizedImage);

          // FAIL인 경우 5초후 자동을 창닫음
          if (val === _this15.IN_PROGRESS.MANUAL_CAPTURE_FAILED) {
            setTimeout(_this15.__hidePreviewUI, 3000, _this15);
          }
        }
      }
      if (val === _this15.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA) {
        var {
          video
        } = detector.getOCRElements();
        _this15.__setStyle(video, {
          display: 'none'
        });
        if (_this15.__options.usePreviewUI) {
          _this15.__updatePreviewUI(recognizedImage);
        }
      }
      if (val === _this15.IN_PROGRESS.OCR_SUCCESS_WITH_SSA) {
        if (_this15.__options.usePreviewUI) {
          _this15.__hidePreviewUI();
        }
      }
      yield _this15.__sleep(1); // for UI update
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
    var _this16 = this;
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
          if (cap !== null && cap !== void 0 && (_cap$facingMode = cap.facingMode) !== null && _cap$facingMode !== void 0 && _cap$facingMode.includes(_this16.__facingModeConstraint)) {
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
    var _this17 = this;
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
        previewImage,
        switchUIWrap,
        switchUI
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
      if (topUI && !_this17.__options.useTopUI) _this17.__clearCustomUI(topUI);
      if (middleUI && !_this17.__options.useMiddleUI) _this17.__clearCustomUI(middleUI);
      if (bottomUI && !_this17.__options.useBottomUI) _this17.__clearCustomUI(bottomUI);
      if (captureUIWrap) captureUIWrap.remove();
      // capture UI를 미사용일 경우 안의 내용을 삭제
      if (captureUI && !_this17.__options.useCaptureUI) _this17.__clearCustomUI(captureUI);
      if (previewUIWrap) previewUIWrap.remove();
      // preview UI를 미사용일 경우 안의 내용을 삭제
      if (previewUI && !_this17.__options.usePreviewUI) _this17.__clearCustomUI(previewUI);
      if (switchUIWrap) switchUIWrap.remove();
      // switch UI를 미사용일 경우 안의 내용을 삭제
      if (switchUI && !_this17.__options.useManualSwitchToServerMode) _this17.__clearCustomUI(switchUI);
      var rotationDegree = _this17.__getRotationDegree();
      _this17.__isRotated90or270 = [90, 270].includes(rotationDegree);
      var ocrStyle = {
        width: '100%',
        height: '100%'
      };
      _this17.__setStyle(ocr, ocrStyle);
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
        _this17.__setStyle(videoWrap, wrapStyle);
      }
      ocr.appendChild(videoWrap);
      maskBoxWrap = document.createElement('svg');
      maskBoxWrap.setAttribute('data-useb-ocr', 'maskBoxWrap');
      maskBoxWrap.setAttribute('fill', 'none');
      maskBoxWrap.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      _this17.__setStyle(maskBoxWrap, wrapStyle);
      var mask_frame = _this17.__options.maskFrameStyle.base_color + 'ff';
      if (!!_this17.__options.showClipFrame) {
        mask_frame = _this17.__options.maskFrameStyle.clip_frame + '55';
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
      if (_this17.__isRotated90or270) {
        if (_this17.__getMirrorMode()) {
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
        if (_this17.__getMirrorMode()) {
          videoStyle = _objectSpread(_objectSpread({}, videoStyle), {}, {
            '-webkit-transform': mirrorCss,
            '-moz-transform': mirrorCss,
            '-o-transform': mirrorCss,
            '-ms-transform': mirrorCss,
            transform: mirrorCss
          });
        }
      }
      _this17.__setStyle(video, videoStyle);
      videoWrap.appendChild(video);
      guideBoxWrap = document.createElement('div');
      guideBoxWrap.setAttribute('data-useb-ocr', 'guideBoxWrap');
      _this17.__setStyle(guideBoxWrap, wrapStyle);
      ocr.appendChild(guideBoxWrap);
      guideBox = document.createElement('svg');
      guideBox.setAttribute('data-useb-ocr', 'guideBox');
      guideBox.setAttribute('fill', 'none');
      guideBox.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      _this17.__setStyle(guideBox, {
        width: '100%',
        margin: '0 auto',
        position: 'absolute'
      });
      guideBoxWrap.appendChild(guideBox);
      canvas = document.createElement('canvas');
      canvas.setAttribute('data-useb-ocr', 'canvas');
      var canvasStyle = {
        display: _this17.__options.showCanvasPreview ? _this17.__isRotated90or270 ? 'none' : 'display' : 'none',
        width: '25%',
        position: 'absolute',
        left: '0px',
        top: '30px',
        border: 'green 2px solid'
      };
      _this17.__setStyle(canvas, canvasStyle);
      ocr.appendChild(canvas);
      rotationCanvas = document.createElement('canvas');
      rotationCanvas.setAttribute('data-useb-ocr', 'rotationCanvas');
      _this17.__setStyle(rotationCanvas, {
        display: _this17.__options.showCanvasPreview ? _this17.__isRotated90or270 ? 'display' : 'none' : 'none',
        height: '25%',
        position: 'absolute',
        right: '0px',
        top: '30px',
        border: 'blue 2px solid'
      });
      ocr.appendChild(rotationCanvas);
      preventToFreezeVideo = document.createElement('div');
      preventToFreezeVideo.setAttribute('data-useb-ocr', 'preventToFreezeVideo');
      _this17.__setStyle(preventToFreezeVideo, {
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
      _this17.__setStyle(customUIWrap, customUIWrapStyle);
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
      _this17.__setStyle(captureUIWrap, captureUIWrapStyle);
      ocr.appendChild(captureUIWrap);
      if (_this17.__options.useCaptureUI) {
        if (_this17.__isSwitchToServerMode || _this17.__options.useForceCompleteUI) {
          if (!captureUI) {
            captureUI = document.createElement('div');
            captureUI.setAttribute('data-useb-ocr', 'captureUI');
            _this17.__setStyle(captureUI, {
              display: 'none',
              cursor: 'pointer'
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
          var _this_ = _this17;
          var __onClickCaptureButton = function __onClickCaptureButton() {
            if (_this_.__isSwitchToServerMode) {
              detector.getOCRElements().captureButton.setAttribute('is-clicked', 'true');
              _this_.__setStyle(detector.getOCRElements().captureButton, {
                display: 'none'
              });
            } else {
              detector.getOCRElements().captureButton.setAttribute('is-clicked', 'true');
              _this_.__setStyle(detector.getOCRElements().video, {
                display: 'none'
              });
              _this_.__setStyle(detector.getOCRElements().captureButton, {
                display: 'none'
              });
            }
          };
          captureButton.addEventListener('click', __onClickCaptureButton);
        }
      }
      if (_this17.__options.usePreviewUI) {
        previewUIWrap = document.createElement('div');
        previewUIWrap.setAttribute('data-useb-ocr', 'previewUIWrap');
        var previewUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
          'flex-direction': 'column',
          display: 'none',
          'background-color': '#000000aa'
        });
        _this17.__setStyle(previewUIWrap, previewUIWrapStyle);
        ocr.appendChild(previewUIWrap);
        if (!previewUI) {
          previewUI = document.createElement('div');
          previewUI.setAttribute('data-useb-ocr', 'previewUI');
        }
        _this17.__setStyle(previewUI, _objectSpread(_objectSpread({}, wrapStyle), {}, {
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
      if (_this17.__options.useManualSwitchToServerMode) {
        switchUIWrap = document.createElement('div');
        switchUIWrap.setAttribute('data-useb-ocr', 'switchUIWrap');
        var switchUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
          'align-items': '',
          'justify-content': '',
          width: '',
          overflow: '',
          'flex-direction': 'column-reverse'
        });
        _this17.__setStyle(switchUIWrap, switchUIWrapStyle);
        ocr.appendChild(switchUIWrap);
        if (!switchUI) {
          switchUI = document.createElement('div');
          switchUI.setAttribute('data-useb-ocr', 'switchUI');
          var switchHTML = "";
          switchHTML += "<div class='custom--label flex justify-center align-center gap10'>";
          switchHTML += "  <label for='manual-switch-wasm-to-server-checkbox'>WASM</label>";
          switchHTML += "  <label class='switch'>";
          switchHTML += "    <input id='manual-switch-wasm-to-server-checkbox' type='checkbox'>";
          switchHTML += "    <span class='slider round'></span>";
          switchHTML += "  </label>";
          switchHTML += "  <label for='priority-finance-cohtmlForlist-checkbox'>Server</label>";
          switchHTML += "</div>";
          switchUI.innerHTML = switchHTML;
        }
        _this17.__setStyle(switchUI, {
          overflow: 'hidden'
        });
        switchUIWrap.appendChild(switchUI);
        var switchCheckbox = switchUI.getElementsByTagName('input')[0];
        var _this_2 = _this17;
        var __onClickSwitchUI = /*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator(function* (event) {
            _this_2.__isSwitchToServerMode = event.target.checked;
            yield _this_2.restartOCR(_this_2.__ocrType, _this_2.__onSuccess, _this_2.__onFailure, _this_2.__onInProgressChange, true);
          });
          return function __onClickSwitchUI(_x2) {
            return _ref8.apply(this, arguments);
          };
        }();
        switchCheckbox.addEventListener('click', __onClickSwitchUI, {
          once: true
        });
      }

      // loading UI 위치 자리잡게 하기 위해
      yield _this17.__adjustStyle(true);

      // 화면과도 현상 해결
      _this17.__setStyle(ocr, {
        display: ''
      });
      _this17.__ocr = ocr;
      _this17.__canvas = canvas;
      _this17.__rotationCanvas = rotationCanvas;
      _this17.__video = video;
      _this17.__videoWrap = videoWrap;
      _this17.__guideBox = guideBox;
      _this17.__guideBoxWrap = guideBoxWrap;
      _this17.__maskBoxWrap = maskBoxWrap;
      _this17.__preventToFreezeVideo = preventToFreezeVideo;
      _this17.__customUIWrap = customUIWrap;
      _this17.__topUI = topUI;
      _this17.__middleUI = middleUI;
      _this17.__bottomUI = bottomUI;
      _this17.__captureUIWrap = captureUIWrap;
      _this17.__captureUI = captureUI;
      _this17.__captureButton = captureButton;
      _this17.__previewUIWrap = previewUIWrap;
      _this17.__previewUI = previewUI;
      _this17.__previewImage = previewImage;
      _this17.__switchUIWrap = switchUIWrap;
      _this17.__switchUI = switchUI;
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
        previewImage,
        switchUIWrap,
        switchUI
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
    var _this18 = this;
    return _asyncToGenerator(function* () {
      // wasm 인식성능 최적화된 해상도
      _this18.__resolutionWidth = 1080;
      _this18.__resolutionHeight = 720;
      _this18.__camSetComplete = false;
      var {
        video,
        canvas,
        rotationCanvas
      } = yield _this18.__setupDomElements();
      var videoDevices = yield _this18.__getInputDevices('video');
      // console.log('videoDevices :: ', videoDevices)
      var deviceIdList = videoDevices.map(device => device.deviceId);
      _this18.checkUIOrientation();
      var constraintWidth, constraintHeight;
      if (_this18.__uiOrientation === 'portrait') {
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
            ideal: _this18.__facingModeConstraint
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
        _this18.__stream = yield navigator.mediaDevices.getUserMedia(constraints);
        _this18.stopStream();
        videoDevices = yield _this18.__getInputDevices('video');
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

        [canvas.width, canvas.height] = [_this18.__resolutionWidth, _this18.__resolutionHeight];
        if (_this18.__isRotated90or270) {
          [rotationCanvas.width, rotationCanvas.height] = [_this18.__resolutionHeight, _this18.__resolutionWidth];
        }
        video.srcObject = stream;
        _this18.__stream = stream;
      } catch (e) {
        void 0;
        throw e;
      }
    })();
  }
  __adjustStyle() {
    var _arguments6 = arguments,
      _this19 = this;
    return _asyncToGenerator(function* () {
      var isFirstCalled = _arguments6.length > 0 && _arguments6[0] !== undefined ? _arguments6[0] : false;
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
      _this19.__setStyle(captureUI, {
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
      var calcVideoOrientation = _this19.__videoOrientation;
      var borderWidth = _this19.__options.frameBorderStyle.width;
      var borderRadius = _this19.__options.frameBorderStyle.radius;
      if (_this19.__isRotated90or270) {
        [calcVideoWidth, calcVideoHeight] = [calcVideoHeight, calcVideoWidth];
        [calcVideoClientWidth, calcVideoClientHeight] = [calcVideoClientHeight, calcVideoClientWidth];
        calcVideoOrientation = _this19.__videoOrientation === 'portrait' ? 'landscape' : 'portrait';
      }
      var newVideoWidth = calcVideoClientWidth;
      var newVideoHeight = calcVideoClientHeight;
      var guideBoxRatioByWidth = _this19.__guideBoxRatioByWidth;
      var videoRatioByHeight = _this19.__videoRatioByHeight;
      if (_this19.__uiOrientation === 'portrait') {
        // 세로 UI
        _this19.__setStyle(captureUIWrap, {
          'justify-content': 'center',
          'align-items': 'flex-end'
        });
        // video 가로 기준 100% 유지 (변경없음)
        if (calcVideoOrientation === _this19.__uiOrientation) {
          // 카메라도 세로
          // 세로 UI && 세로 비디오
          // 가로 기준으로 가이드박스 계산
          guideBoxWidth = calcOcrClientWidth * guideBoxRatioByWidth;
          guideBoxHeight = guideBoxWidth * scannerFrameRatio;

          // 가이드 박스 가로 기준으로 비디오 확대
          newVideoWidth = guideBoxWidth;
          newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
          if (_this19.__isRotated90or270) {
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
        _this19.__setStyle(captureUIWrap, {
          'justify-content': 'end',
          'align-items': 'center'
        });
        if (calcVideoOrientation === _this19.__uiOrientation) {
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
          if (_this19.__isRotated90or270) {
            [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
          }
        }
      }
      guideBoxWidth += borderWidth * 2;
      guideBoxHeight += borderWidth * 2;
      _this19.__cropImageSizeWidth = Math.min(guideBoxWidth, newVideoWidth);
      _this19.__cropImageSizeHeight = Math.min(guideBoxHeight, newVideoHeight);
      var reducedGuideBoxWidth = guideBoxWidth * _this19.__guideBoxReduceRatio;
      var reducedGuideBoxHeight = guideBoxHeight * _this19.__guideBoxReduceRatio;
      if (topUI) {
        _this19.__setStyle(topUI, {
          'padding-bottom': '10px',
          height: (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          display: 'flex',
          'flex-direction': 'column-reverse'
        });
      }
      if (middleUI) {
        _this19.__setStyle(middleUI, {
          width: reducedGuideBoxWidth - borderWidth * 2 + 'px',
          height: reducedGuideBoxHeight - borderWidth * 2 + 'px',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          padding: '10px'
        });
      }
      if (bottomUI) {
        _this19.__setStyle(bottomUI, {
          'padding-top': '10px',
          height: (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          display: 'flex',
          'flex-direction': 'column'
        });
      }
      if (newVideoWidth !== calcVideoClientWidth) {
        _this19.__setStyle(video, {
          width: newVideoWidth + 'px'
        });
      }
      if (newVideoHeight !== calcVideoClientHeight) {
        _this19.__setStyle(video, {
          height: newVideoHeight + 'px'
        });
      }
      var videoInnerGap = 2; // 미세하게 maskBoxInner보다 guideBox가 작은것 보정
      _this19.__setStyle(guideBox, {
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
      if (_this19.__options.useCaptureUI && !isFirstCalled) {
        _this19.__setStyle(captureUI, {
          display: ''
        });
        if (_this19.__uiOrientation === 'portrait' && bottomUI && captureUI) {
          var calcSumOfHeightBottomUIChildNodes = _this19.__calcSumOfHeightChildNodes(bottomUI);
          var calcCaptureButtonHeight = captureButton.querySelector('svg').getAttribute('height');
          calcCaptureButtonHeight = calcCaptureButtonHeight === 0 ? 80 : calcCaptureButtonHeight;
          var captureUIPaddingBottom = bottomUI.clientHeight;
          captureUIPaddingBottom -= isNaN(parseInt(bottomUI.style.paddingTop)) ? 0 : parseInt(bottomUI.style.paddingTop);
          captureUIPaddingBottom -= calcSumOfHeightBottomUIChildNodes;
          captureUIPaddingBottom -= calcCaptureButtonHeight;
          var baseline = calcOcrClientHeight - (calcOcrClientHeight / 2 + guideBoxHeight / 2);
          if (captureUIPaddingBottom > 0 && captureUIPaddingBottom < baseline) {
            _this19.__setStyle(captureUI, {
              'padding-right': '',
              'padding-bottom': captureUIPaddingBottom + 'px'
            });
          }
        } else {
          _this19.__setStyle(captureUI, {
            'padding-right': '10px',
            'padding-bottom': ''
          });
        }
      }
      yield _this19.__changeStage(_this19.__inProgressStep, true);
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
    var _this20 = this;
    return _asyncToGenerator(function* () {
      void 0;
      if (_this20.__resourcesLoaded) {
        void 0;
        return;
      }
      _this20.__isSupportSimd = yield simd();
      var envInfo = '';
      envInfo += "os : ".concat(_this20.__deviceInfo.os, "\n");
      envInfo += "osSimple : ".concat(_this20.__deviceInfo.osSimple, "\n");
      envInfo += "isSupportWasm: ".concat(_this20.__isSupportWasm, "\n");
      envInfo += "simd(wasm-feature-detect) : ".concat(_this20.__isSupportSimd, "\n");
      if (_this20.__deviceInfo.osSimple === 'IOS' || _this20.__deviceInfo.osSimple === 'MAC') {
        _this20.__isSupportSimd = false;
      }
      envInfo += "isSupportSimd(final) : ".concat(_this20.__isSupportSimd, "\n");
      envInfo += "UserAgent : ".concat(navigator.userAgent, "\n");
      void 0;
      // alert(envInfo);
      window.usebOCREnvInfo = envInfo;
      var sdkSupportEnv = 'quram';
      if (_this20.__isSupportSimd) {
        void 0;
        sdkSupportEnv += '_simd.js';
      } else {
        void 0;
        sdkSupportEnv += '.js';
      }
      void 0;
      window.usebOCREnvInfo = envInfo;
      void 0;
      var url = new URL(sdkSupportEnv, _this20.__options.resourceBaseUrl);
      var src = yield fetch(url.href).then(res => res.text()).then(text => {
        var regex = /(.*) = Module.cwrap/gm;
        var source = text.replace(regex, 'Module.$1 = Module.cwrap');

        // data(model)
        source = source.replace(/^\(function\(\) \{/m, 'var createModelData = async function() {\n' + ' return new Promise(async function (resolve, reject) {\n');
        source = source.replace('   console.error("package error:", error);', '   reject();\n' + '   console.error("package error:", error);');
        source = source.replace('  }, handleError)', '  resolve();\n' + '  }, handleError)');
        source = source.replace(/^\}\)\(\);/m, '\n })\n' + '};');

        // wasm
        source = source.replace('quram.wasm', new URL('quram.wasm', _this20.__options.resourceBaseUrl).href);
        source = source.replace(/REMOTE_PACKAGE_BASE = ['"]quram\.data["']/gm, "REMOTE_PACKAGE_BASE = \"".concat(new URL('quram.data', _this20.__options.resourceBaseUrl).href, "\""));
        source = source.replace('function createWasm', 'async function createWasm');
        source = source.replace('instantiateAsync();', 'await instantiateAsync();');

        // wasm and data(model) file 병렬로 fetch 하기 위해
        source = source.replace('var asm = createWasm();', 'console.log("create wasm and data - start")\n' + 'await (async function() {\n' + '  return new Promise(function(resolve) {\n' + '    var isCreatedWasm = false;\n' + '    var isCreatedData = false;\n' + '    createWasm().then(() => {\n' + '      isCreatedWasm = true;\n' + '      if (isCreatedData) { resolve(); }\n' + '    });\n' + '    createModelData().then(() => {\n' + '      isCreatedData = true;\n' + '      if (isCreatedWasm) { resolve(); }\n' + '    })\n' + '  });\n' + '})();\n' + 'console.log("create wasm and data - end")');
        return source;
      });
      src = "\n    (async function() {\n      ".concat(src, "\n      Module.lengthBytesUTF8 = lengthBytesUTF8\n      Module.stringToUTF8 = stringToUTF8\n      return Module\n    })()\n        ");
      _this20.__OCREngine = yield eval(src);
      _this20.__OCREngine.onRuntimeInitialized = /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator(function* (_) {
          void 0;
        });
        return function (_x3) {
          return _ref9.apply(this, arguments);
        };
      }();
      yield _this20.__OCREngine.onRuntimeInitialized();
      _this20.__resourcesLoaded = true;
      void 0;
    })();
  }
  __startScanWasmImpl() {
    var _this21 = this;
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
        var _ref10 = _asyncToGenerator(function* () {
          try {
            var ocrResult = null,
              isDetectedCard = null,
              imgData = null,
              imgDataUrl = null,
              maskImage = null,
              faceImage = null,
              ssaResult = null,
              ssaResultList = [],
              maskInfo = null;

            // await this.__changeStage(IN_PROGRESS.READY);
            if (!_this21.__OCREngine['asm']) return;

            // TODO : 설정할수 있게 변경  default 값도 제공
            var [resolution_w, resolution_h] = [_this21.__resolutionWidth, _this21.__resolutionHeight];
            var {
              video
            } = detector.getOCRElements();
            if (resolution_w === 0 || resolution_h === 0) return;
            if (_this21.__detected) {
              yield _this21.__sleep(100);
              return;
            }
            // console.log('address before ---------', address);
            if (_this21.__address === 0 && !_this21.__pageEnd && (yield _this21.__isVideoResolutionCompatible(video))) {
              [_this21.__address, _this21.__destroyScannerCallback] = _this21.__getScannerAddress(_this21.__ocrType);
            }
            if (!_this21.__address || _this21.__pageEnd) {
              yield _this21.__sleep(100);
              return;
            }
            // console.log('address after ---------', address);

            if (_this21.__ocrStatus < _this21.OCR_STATUS.OCR_SUCCESS) {
              // OCR 완료 이전 상태

              // card not detected
              [isDetectedCard, imgData, imgDataUrl] = yield _this21.__isCardboxDetected(_this21.__address, 0);
              if (!isDetectedCard) {
                if (_this21.__inProgressStep !== _this21.IN_PROGRESS.READY) {
                  yield _this21.__changeStage(_this21.IN_PROGRESS.CARD_DETECT_FAILED);
                }
                if (_this21.__isClickedCaptureButton()) {
                  yield _this21.__changeStage(_this21.IN_PROGRESS.MANUAL_CAPTURE_FAILED, false, imgDataUrl);
                  _this21.__blurCaptureButton();
                  _this21.setIgnoreComplete(false); // 필요한가?
                }

                return;
              }

              // card is detected
              yield _this21.__changeStage(_this21.IN_PROGRESS.CARD_DETECT_SUCCESS);

              // ssa retry 설정이 되어 있으거나, 수동촬영UI를 사용하는 경우, card detect 성공시 이미지 저장
              _this21.__enqueueDetectedCardQueue(imgData, imgDataUrl);
              if (_this21.__isClickedCaptureButton()) {
                _this21.setIgnoreComplete(true);
                yield _this21.__changeStage(_this21.IN_PROGRESS.MANUAL_CAPTURE_SUCCESS, false, imgDataUrl);
              }
              [ocrResult, imgDataUrl, maskImage, faceImage] = yield _this21.__startRecognition(_this21.__address, _this21.__ocrType, _this21.__ssaMode, _this21.__isClickedCaptureButton(), imgData, imgDataUrl);

              // if (this.__isClickedCaptureButton()) {
              //   this.__blurCaptureButton();
              //   this.setIgnoreComplete(false);        // 필요한가?
              // }
            }

            if (_this21.__ocrStatus >= _this21.OCR_STATUS.OCR_SUCCESS) {
              // ocr 완료 이후 상태

              // failure case
              if (ocrResult === false) {
                throw new Error("OCR Status is ".concat(_this21.__ocrStatus, ", but ocrResult is false")); // prettier-ignore
              }

              // success case
              _this21.__setStyle(video, {
                display: 'none'
              }); // OCR 완료 시점에 camera preview off

              if (_this21.__ssaMode) {
                void 0;
                // 최초 시도
                ssaResult = yield _this21.__startTruth(_this21.__ocrType, _this21.__address); // prettier-ignore
                if (ssaResult === null) throw new Error('[ERR] SSA MODE is true. but, ssaResult is null'); // prettier-ignore

                ssaResultList.push(ssaResult);
                if (_this21.__options.ssaMaxRetryCount > 0) {
                  var retryStartDate = new Date();
                  var FAKE = _this21.__options.ssaRetryType === 'FAKE';
                  var REAL = _this21.__options.ssaRetryType === 'REAL';
                  var ENSEMBLE = _this21.__options.ssaRetryType === 'ENSEMBLE';
                  var isCompleted = false; // 비동기 for 문 때문에 break가 안걸리는 이슈로 넣음
                  var _loop = function* _loop(item) {
                    if (isCompleted) {
                      void 0; // prettier-ignore
                      return "break";
                    }
                    // prettier-ignore
                    if (_this21.__ssaRetryCount === _this21.__options.ssaMaxRetryCount) {
                      void 0;
                      return "break";
                    }
                    var execute = /*#__PURE__*/function () {
                      var _ref11 = _asyncToGenerator(function* () {
                        _this21.__ssaRetryCount++;
                        void 0; // prettier-ignore
                        ssaResult = yield _this21.__startTruthRetry(_this21.__ocrType, _this21.__address, item); // prettier-ignore
                        if (ssaResult === null) throw new Error('[ERR] SSA MODE is true. but, ssaResult is null'); // prettier-ignore

                        ssaResultList.push(ssaResult);
                      });
                      return function execute() {
                        return _ref11.apply(this, arguments);
                      };
                    }();
                    if (FAKE) {
                      if (ssaResult.indexOf('REAL') > -1) {
                        yield execute();
                      } else {
                        isCompleted = true;
                      }
                    }
                    if (REAL) {
                      if (ssaResult.indexOf('FAKE') > -1) {
                        yield execute();
                      } else {
                        isCompleted = true;
                      }
                    }
                    if (ENSEMBLE) {
                      yield execute();
                    }
                  };
                  for (var item of _this21.__detectedCardQueue) {
                    var _ret = yield* _loop(item);
                    if (_ret === "break") break;
                  }
                  var retryWorkingTime = new Date() - retryStartDate;
                  void 0; // prettier-ignore
                } else {
                  void 0;
                }
              }
              if (_this21.__options.useMaskInfo) {
                maskInfo = _this21.__getMaskInfo(_this21.__address);
              }
              void 0;
              var {
                legacyFormat,
                newFormat
              } = usebOCRWASMParser.parseOcrResult(_this21.__ocrType, _this21.__ssaMode, ocrResult, ssaResult, _this21.__ssaRetryCount, ssaResultList, _this21.__options.ssaRetryType, _this21.__options.ssaRetryPivot);
              var review_result = {
                ocr_type: _this21.__ocrType,
                ocr_result: newFormat,
                ocr_origin_image: imgDataUrl,
                ocr_masking_image: maskImage,
                ocr_face_image: faceImage,
                maskInfo: maskInfo,
                ssa_mode: _this21.__ssaMode
              };
              if (_this21.__options.useEncryptMode && _this21.__isSupportWasm) {
                // prettier-ignore
                review_result.encrypted = {
                  ocr_result: _this21.__encryptScanResult(review_result.ocr_result),
                  ocr_origin_image: _this21.__encryptScanResult(review_result.ocr_origin_image),
                  ocr_masking_image: _this21.__encryptScanResult(review_result.ocr_masking_image),
                  ocr_face_image: _this21.__encryptScanResult(review_result.ocr_face_image)
                };
              }
              if (_this21.__options.useLegacyFormat) {
                review_result.ocr_data = legacyFormat;
              }
              yield _this21.__onSuccessProcess(review_result);
              _this21.__closeCamera();
              _this21.__detected = true;
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
            yield _this21.__onFailureProcess('WA001', e, errorMessage);
            _this21.__closeCamera();
            _this21.__detected = true;
            reject();
            // }
          } finally {
            if (_this21.__recovered) {
              _this21.__recovered = false;
              return;
            }
            if (!_this21.__detected) {
              setTimeout(scan, 1); // 재귀
            }
          }
        });
        return function scan() {
          return _ref10.apply(this, arguments);
        };
      }();
      setTimeout(scan, 1); // UI 랜더링 blocking 방지 (setTimeout)
    });
  }

  __requestGetAPIToken() {
    return new Promise((resolve, reject) => {
      var credential = this.__options.authServerInfo.credential;
      var baseUrl = this.__options.authServerInfo.baseUrl;
      fetch("".concat(baseUrl, "/sign-in"), {
        body: JSON.stringify(credential),
        method: 'POST'
        // mode: 'cors',
        // credentials: 'include',
      }).then(res => res.json()).then(result => {
        void 0;
        fetch("".concat(baseUrl, "/useb/token"), {
          headers: {
            authorization: "Bearer ".concat(result.token)
          },
          body: null,
          method: 'GET'
        }).then(res => res.json()).then(json => {
          resolve(json.token);
        });
      }).catch(err => {
        reject(err);
      });
    });
  }
  __requestServerOCR(ocrType, ssaMode, imgDataUrl) {
    var _this22 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* (resolve, reject) {
        try {
          var baseUrl = _this22.__options.ocrServerBaseUrl;
          switch (ocrType) {
            case 'idcard':
            case 'driver':
            case 'idcard-ssa':
            case 'driver-ssa':
              baseUrl += '/ocr/idcard-driver';
              break;
            case 'passport':
            case 'passport-ssa':
            case 'foreign-passport':
            case 'foreign-passport-ssa':
              baseUrl += '/ocr/passport';
              break;
            case 'alien':
            case 'alien-ssa':
              baseUrl += '/ocr/alien';
              break;
            case 'credit':
              throw new Error('Credit card is not Unsupported Server OCR');
            default:
              throw new Error("Unsupported OCR type: ".concat(ocrType));
          }
          var apiToken = yield _this22.__requestGetAPIToken();
          var myHeaders = new Headers();
          myHeaders.append('Authorization', "Bearer ".concat(apiToken));
          var raw = JSON.stringify({
            image_base64: imgDataUrl,
            ssa_mode: 'true',
            mask_mode: 'true',
            face_mode: 'true'
          });
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch(baseUrl, requestOptions).then(res => res.json()).then(result => {
            void 0;
            resolve(result);
          }).catch(e => {
            throw e;
          });
        } catch (err) {
          void 0;
          reject(err);
        }
      });
      return function (_x4, _x5) {
        return _ref12.apply(this, arguments);
      };
    }());
  }
  __startScanServerImpl() {
    var _this23 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* (resolve, reject) {
        try {
          _this23.__blurCaptureButton();
          var ocrResult = null,
            ssaResult = null,
            ssaResultList = [];
          var __onClickCaptureButton = /*#__PURE__*/function () {
            var _ref14 = _asyncToGenerator(function* () {
              // 캔버스에서 이미지를 가져옴
              var [, imgDataUrl] = yield _this23.__cropImageFromVideo();
              if (1 === true) {
                // server ocr 실패 (발생 가능성 없음)
              } else {
                // server ocr 성공
                yield _this23.__changeStage(_this23.IN_PROGRESS.MANUAL_CAPTURE_SUCCESS, false, imgDataUrl);
                try {
                  ocrResult = yield _this23.__requestServerOCR(_this23.__ocrType, _this23.__ssaMode, imgDataUrl);

                  // failure case
                  if (ocrResult === false) {
                    yield _this23.__changeStage(_this23.IN_PROGRESS.OCR_FAILED);
                  }
                } catch (e) {
                  throw new Error("Server OCR is failed");
                }

                // ssa 시도?

                // success case
                var {
                  video
                } = detector.getOCRElements();
                _this23.__setStyle(video, {
                  display: 'none'
                }); // OCR 완료 시점에 camera preview off

                void 0;
                var {
                  legacyFormat,
                  newFormat,
                  base64ImageResult,
                  maskInfo
                } = usebOCRAPIParser.parseOcrResult(_this23.__ocrType, _this23.__ssaMode, ocrResult);
                var review_result = {
                  ocr_type: _this23.__ocrType,
                  ocr_result: newFormat,
                  ocr_origin_image: imgDataUrl,
                  ocr_masking_image: base64ImageResult === null || base64ImageResult === void 0 ? void 0 : base64ImageResult.ocr_masking_image,
                  ocr_face_image: base64ImageResult === null || base64ImageResult === void 0 ? void 0 : base64ImageResult.ocr_face_image,
                  maskInfo,
                  ssa_mode: _this23.__ssaMode
                };
                if (_this23.__options.useEncryptMode && _this23.__isSupportWasm) {
                  // prettier-ignore
                  review_result.encrypted = {
                    ocr_result: _this23.__encryptScanResult(review_result.ocr_result),
                    ocr_origin_image: _this23.__encryptScanResult(review_result.ocr_origin_image),
                    ocr_masking_image: _this23.__encryptScanResult(review_result.ocr_masking_image),
                    ocr_face_image: _this23.__encryptScanResult(review_result.ocr_face_image)
                  };
                }
                if (_this23.__options.useLegacyFormat) {
                  review_result.ocr_data = legacyFormat;
                }
                yield _this23.__onSuccessProcess(review_result);
                _this23.__closeCamera();
                resolve();
              }
            });
            return function __onClickCaptureButton() {
              return _ref14.apply(this, arguments);
            };
          }();
          _this23.__captureButton.addEventListener('click', __onClickCaptureButton);
        } catch (e) {
          var errorMessage = 'Server OCR Error';
          if (e.message) {
            errorMessage += ': ' + e.message;
          }
          void 0;
          yield _this23.__onFailureProcess('QS001', e, errorMessage); // QURAM Server OCR 에러
          _this23.__closeCamera();
          reject();
        }
      });
      return function (_x6, _x7) {
        return _ref13.apply(this, arguments);
      };
    }());
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
    var _this24 = this;
    return _asyncToGenerator(function* () {
      // 인식 성공 스캔 루프 종료
      if (review_result.ssa_mode) {
        yield _this24.__changeStage(_this24.IN_PROGRESS.OCR_SUCCESS_WITH_SSA);
      } else {
        yield _this24.__changeStage(_this24.IN_PROGRESS.OCR_SUCCESS);
      }
      var result = {
        api_response: {
          result_code: 'N100',
          result_message: 'OK.'
        },
        result: 'success',
        review_result: review_result
      };
      if (_this24.__onSuccess) {
        _this24.__onSuccess(result);
        _this24.__onSuccess = null;
      } else {
        void 0;
      }
    })();
  }
  __onFailureProcess(resultCode, e, errorMessage) {
    var _this25 = this;
    return _asyncToGenerator(function* () {
      yield _this25.__changeStage(_this25.IN_PROGRESS.OCR_FAILED);
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
          ocr_type: _this25.__ocrType,
          error_detail: errorDetail
        }
      };
      if (_this25.__onFailure) {
        _this25.__onFailure(result);
        _this25.__onFailure = null;
      } else {
        void 0;
      }
    })();
  }
  __preloadingWasm() {
    var _this26 = this;
    return _asyncToGenerator(function* () {
      var preloadingStatus = _this26.getPreloadingStatus();
      if (!_this26.isPreloaded() && preloadingStatus === _this26.PRELOADING_STATUS.NOT_STARTED) {
        void 0;
        yield _this26.preloading();
      } else {
        if (preloadingStatus === _this26.PRELOADING_STATUS.STARTED) {
          void 0;
          yield _this26.__waitPreloaded();
        } else if (preloadingStatus === _this26.PRELOADING_STATUS.DONE) {
          void 0;
        } else {
          throw new Error("abnormally preloading status, preloaded: ".concat(_this26.isPreloaded(), " / preloadingStatus: ").concat(_this26.getPreloadingStatus()));
        }
      }
    })();
  }
  __startScanWasm() {
    var _this27 = this;
    return _asyncToGenerator(function* () {
      void 0;
      _this27.cleanup();
      yield _this27.__proceedCameraPermission();
      yield _this27.__startScanWasmImpl();
      void 0;
    })();
  }
  __startScanServer() {
    var _this28 = this;
    return _asyncToGenerator(function* () {
      void 0;
      _this28.cleanup();
      _this28.__options.useCaptureUI = true;
      yield _this28.__proceedCameraPermission();
      yield _this28.__startScanServerImpl();
      void 0;
    })();
  }
  __recoveryScan() {
    var _this29 = this;
    return _asyncToGenerator(function* () {
      void 0;
      _this29.__resourcesLoaded = false;
      _this29.stopScan();
      yield _this29.__startScanWasm();
    })();
  }
  stopScan() {
    this.__detected = true; // switch to server일때 기존 WASM loop 강제종료
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJ1c2ViT0NSV0FTTVBhcnNlciIsInVzZWJPQ1JBUElQYXJzZXIiLCJpc1N1cHBvcnRXYXNtIiwibWVhc3VyZSIsInNpbWQiLCJ0aHJlYWRzIiwiaW5zdGFuY2UiLCJVc2VCT0NSIiwiY29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydHkiLCJOT05FIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVF9TVUNDRVNTIiwiQ0FSRF9ERVRFQ1RfRkFJTEVEIiwiTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUyIsIk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZUVuY3J5cHRNb2RlIiwidXNlTGVnYWN5Rm9ybWF0IiwidXNlTWFza0luZm8iLCJ1c2VGYWNlSW1hZ2UiLCJ1c2VUb3BVSSIsInVzZVRvcFVJVGV4dE1zZyIsInVzZU1pZGRsZVVJIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUkiLCJ1c2VCb3R0b21VSVRleHRNc2ciLCJ1c2VQcmV2aWV3VUkiLCJ1c2VDYXB0dXJlVUkiLCJmcmFtZUJvcmRlclN0eWxlIiwid2lkdGgiLCJyYWRpdXMiLCJzdHlsZSIsIm5vdF9yZWFkeSIsInJlYWR5IiwiZGV0ZWN0X3N1Y2Nlc3MiLCJkZXRlY3RfZmFpbGVkIiwibWFudWFsX2NhcHR1cmVfc3VjY2VzcyIsIm1hbnVhbF9jYXB0dXJlX2ZhaWxlZCIsInJlY29nbml6ZWQiLCJyZWNvZ25pemVkX3dpdGhfc3NhIiwib2NyX3N1Y2Nlc3MiLCJvY3Jfc3VjY2Vzc193aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJ1c2VNYXNrRnJhbWVDb2xvckNoYW5nZSIsIm1hc2tGcmFtZVN0eWxlIiwiY2xpcF9mcmFtZSIsImJhc2VfY29sb3IiLCJ1c2VBdXRvU3dpdGNoVG9TZXJ2ZXJNb2RlIiwidXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlIiwic3dpdGNoVG9TZXJ2ZXJUaHJlc2hvbGQiLCJ1c2VGb3JjZUNvbXBsZXRlVUkiLCJjYXB0dXJlQnV0dG9uU3R5bGUiLCJzdHJva2VfY29sb3IiLCJyZXNvdXJjZUJhc2VVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImRldmljZUxhYmVsIiwidmlkZW9UYXJnZXRJZCIsInJvdGF0aW9uRGVncmVlIiwibWlycm9yTW9kZSIsInNzYVJldHJ5VHlwZSIsInNzYVJldHJ5UGl2b3QiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRlZCIsIl9fcHJlbG9hZGluZ1N0YXR1cyIsIl9fbG9hZFJlc291cmNlcyIsIl9fcHJlbG9hZGVkIiwiaXNJbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZWQiLCJnZXRQcmVsb2FkaW5nU3RhdHVzIiwiZ2V0T0NSRW5naW5lIiwiX19PQ1JFbmdpbmUiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJfX2xpY2Vuc2UiLCJtZXJnZWRPcHRpb25zIiwiXyIsIm1lcmdlIiwiX19vcHRpb25zIiwic2V0T3B0aW9uIiwiX193aW5kb3dFdmVudEJpbmQiLCJfX2RldmljZUluZm8iLCJnZXRPc1ZlcnNpb24iLCJfX2lzU3VwcG9ydFdhc20iLCJnZXRPcHRpb24iLCJnZXRPY3JUeXBlIiwidHlwZSIsIl9fb2NyVHlwZU51bWJlclRvU3RyaW5nIiwiZ2V0IiwiZ2V0T2NyVHlwZU51bWJlciIsInN0cmluZyIsIl9fb2NyU3RyaW5nVG9UeXBlTnVtYmVyIiwiZ2V0VUlPcmllbnRhdGlvbiIsIl9fdWlPcmllbnRhdGlvbiIsImdldFZpZGVvT3JpZW50YXRpb24iLCJfX3ZpZGVvT3JpZW50YXRpb24iLCJjaGVja1N3aXRjaFRvU2VydmVyTW9kZSIsIl90aGlzMiIsIl9faXNTd2l0Y2hUb1NlcnZlck1vZGUiLCJzdGFydE9DUiIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIl9hcmd1bWVudHMiLCJhcmd1bWVudHMiLCJfdGhpczMiLCJvbkluUHJvZ3Jlc3NDaGFuZ2UiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfX29jclR5cGUiLCJfX3NzYU1vZGUiLCJpbmRleE9mIiwiX19vblN1Y2Nlc3MiLCJfX29uRmFpbHVyZSIsIl9fb25JblByb2dyZXNzQ2hhbmdlIiwiX190b3BVSSIsImdldE9DUkVsZW1lbnRzIiwidG9wVUkiLCJfX21pZGRsZVVJIiwibWlkZGxlVUkiLCJfX2JvdHRvbVVJIiwiYm90dG9tVUkiLCJfX2NoYW5nZVN0YWdlIiwiX19wcmVsb2FkaW5nV2FzbSIsIl9fc3RhcnRTY2FuU2VydmVyIiwiX19zdGFydFNjYW5XYXNtIiwiZSIsInN0b3BPQ1IiLCJjbGVhbnVwIiwiX19jbG9zZUNhbWVyYSIsInNldElnbm9yZUNvbXBsZXRlIiwidmFsIiwicmVzdGFydE9DUiIsIm9jclR5cGUiLCJfYXJndW1lbnRzMiIsIl90aGlzNCIsImlzU3dpdGNoTW9kZSIsIl9fd2FpdFByZWxvYWRlZCIsIl90aGlzNSIsIndhaXRpbmdSZXRyeUNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVjayIsInNldFRpbWVvdXQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiX19wYWdlRW5kIiwiaGFuZGxlUmVzaXplIiwiX3JlZjIiLCJfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiYXBwbHkiLCJfX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIl9fc2xlZXAiLCJtcyIsIl9fYmxvYlRvQmFzZTY0IiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX19nZXRTdHJpbmdPbldhc21IZWFwIiwibGVuZ3RoQnl0ZXMiLCJsZW5ndGhCeXRlc1VURjgiLCJfX3N0cmluZ09uV2FzbUhlYXAiLCJfbWFsbG9jIiwic3RyaW5nVG9VVEY4IiwiX19lbmNyeXB0U2NhblJlc3VsdCIsIm9jclJlc3VsdCIsInN0cmluZ09uV2FzbUhlYXAiLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuY3J5cHRSZXN1bHQiLCJfZnJlZSIsIl9fc2V0VmlkZW9SZXNvbHV0aW9uIiwidmlkZW9FbGVtZW50IiwiX3RoaXM2IiwiaXNTdXBwb3J0ZWRSZXNvbHV0aW9uIiwicmVzb2x1dGlvblRleHQiLCJfX2NhbVNldENvbXBsZXRlIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0Iiwic3JjT2JqZWN0IiwiX192aWRlb1dpZHRoIiwiX192aWRlb0hlaWdodCIsIl9fZ2V0U2Nhbm5lckFkZHJlc3MiLCJfX29jclR5cGVMaXN0IiwiaW5jbHVkZXMiLCJhZGRyZXNzIiwiZGVzdHJveUNhbGxiYWNrIiwiZ2V0SURDYXJkU2Nhbm5lciIsImRlc3Ryb3lJRENhcmRTY2FubmVyIiwiZ2V0UGFzc3BvcnRTY2FubmVyIiwiZGVzdHJveVBhc3Nwb3J0U2Nhbm5lciIsImdldEFsaWVuU2Nhbm5lciIsImRlc3Ryb3lBbGllblNjYW5uZXIiLCJnZXRDcmVkaXRTY2FubmVyIiwiZGVzdHJveUNyZWRpdFNjYW5uZXIiLCJfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzIiwiX19yZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9fZ2V0QnVmZmVyIiwiX19CdWZmZXIiLCJfX3Jlc29sdXRpb25XaWR0aCIsIl9fcmVzb2x1dGlvbkhlaWdodCIsIl9fcmVzdWx0QnVmZmVyIiwiX19tYXNrSW5mb1Jlc3VsdEJ1ZiIsIl9fZ2V0SW1hZ2VCYXNlNjQiLCJtYXNrTW9kZSIsImNyb3BNb2RlIiwiX2FyZ3VtZW50czMiLCJfdGhpczciLCJpbWdUeXBlIiwiZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlIiwiZW5jb2RlSnBnRGV0ZWN0ZWRQaG90b0ltYWdlIiwianBnU2l6ZSIsImdldEVuY29kZWRKcGdTaXplIiwianBnUG9pbnRlciIsImdldEVuY29kZWRKcGdCdWZmZXIiLCJyZXN1bHRWaWV3IiwiVWludDhBcnJheSIsIkhFQVA4IiwiYnVmZmVyIiwiQmxvYiIsImRlc3Ryb3lFbmNvZGVkSnBnIiwiX19kZXN0cm95QnVmZmVyIiwiX19kZXN0cm95UmVzdWx0QnVmZmVyIiwiX19kZXN0cm95TWFza0luZm9SZXN1bHRCdWZmZXIiLCJfX2Rlc3Ryb3lQcmV2SW1hZ2UiLCJfX1ByZXZJbWFnZSIsIl9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAiLCJfX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcyIsIl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayIsIl9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlIiwiX3RoaXM4IiwiX19nZXRSb3RhdGlvbkRlZ3JlZSIsIl9fZ2V0TWlycm9yTW9kZSIsIl9fY3JvcEltYWdlRnJvbVZpZGVvIiwiX3RoaXM5IiwiY2FsY1Jlc29sdXRpb25fdyIsImNhbGNSZXNvbHV0aW9uX2giLCJ2aWRlbyIsImNhbnZhcyIsInJvdGF0aW9uQ2FudmFzIiwiY2FsY0NhbnZhcyIsImNhbGNWaWRlb1dpZHRoIiwiY2FsY1ZpZGVvSGVpZ2h0IiwiY2FsY1ZpZGVvQ2xpZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbGNWaWRlb0NsaWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImNhbGNDcm9wSW1hZ2VTaXplV2lkdGgiLCJfX2Nyb3BJbWFnZVNpemVXaWR0aCIsImNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0IiwiX19jcm9wSW1hZ2VTaXplSGVpZ2h0IiwiY2FsY1ZpZGVvT3JpZW50YXRpb24iLCJfX2lzUm90YXRlZDkwb3IyNzAiLCJjYWxjTWF4U1dpZHRoIiwiY2FsY01heFNIZWlnaHQiLCJzeCIsInN5IiwicmF0aW8iLCJzV2lkdGgiLCJNYXRoIiwibWluIiwicm91bmQiLCJzSGVpZ2h0IiwiY2FsY0NvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lsbFJlYWRGcmVxdWVudGx5IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsImltZ0RhdGFVcmwiLCJ0b0RhdGFVUkwiLCJfX3JvdGF0ZSIsImRlZ3JlZSIsImltZyIsIkltYWdlIiwic3JjIiwidGVtcENhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRlbXBDb250ZXh0IiwicG9zaXRpb24iLCJoZWlnaHQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJQSSIsIm5ld0ltYWdlRGF0YSIsInJlc3RvcmUiLCJfX2lzQ2FyZGJveERldGVjdGVkIiwiX2FyZ3VtZW50czQiLCJfdGhpczEwIiwiYm94VHlwZSIsInJldHJ5SW1nIiwic2V0IiwiZGF0YSIsImtvciIsImFsaWVuIiwicGFzc3BvcnQiLCJkZXRlY3RfaWRjYXJkX29wdCIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfX3N0YXJ0UmVjb2duaXRpb24iLCJzc2FNb2RlIiwiaXNTZXRJZ25vcmVDb21wbGV0ZSIsIl90aGlzMTEiLCJyZXN1bHRCdWZmZXIiLCJyZWNvZ25pdGlvbiIsIl9yZWY1IiwiX29jclJlc3VsdCIsIl9vY3JSZXN1bHQyIiwic2NhbklEQ2FyZCIsInNjYW5QYXNzcG9ydCIsInNjYW5BbGllbiIsInNjYW5DcmVkaXQiLCJfX2NzdlRvT2JqZWN0IiwiY29tcGxldGUiLCJfX21hbnVhbE9DUlJldHJ5Q291bnQiLCJfX21hbnVhbE9DUk1heFJldHJ5Q291bnQiLCJxdWV1ZUlkeCIsIl9fZGV0ZWN0ZWRDYXJkUXVldWUiLCJfX2JsdXJDYXB0dXJlQnV0dG9uIiwiX19zZXRTdHlsZSIsImRpc3BsYXkiLCJfeCIsImlzQ3JlZGl0Q2FyZCIsIm9yaWdpbkltYWdlIiwibWFza0ltYWdlIiwiZmFjZUltYWdlIiwiX19zdGFydFRydXRoIiwicmVqZWN0Iiwic2NhblRydXRoIiwic3RyIiwicGFpcnMiLCJzcGxpdCIsIm9iaiIsImkiLCJwYWlyIiwiX19nZXRNYXNrSW5mbyIsIm1hc2tJbmZvUmVzdWx0QnVmIiwiZ2V0TWFza1JlY3QiLCJfX3N0YXJ0VHJ1dGhSZXRyeSIsIl90aGlzMTIiLCJfX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfdGhpczEzIiwiX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIiwiX3RoaXMxNCIsImlzUGFzc3BvcnQiLCJfX3NldHVwVmlkZW8iLCJfX3N0cmVhbSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfX2FkanVzdFN0eWxlIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX19vbkZhaWx1cmVQcm9jZXNzIiwic3RvcFN0cmVhbSIsImVsIiwiYXNzaWduIiwiX19jaGFuZ2VPQ1JTdGF0dXMiLCJfX29jclN0YXR1cyIsIl9hcmd1bWVudHM1IiwiX3RoaXMxNSIsImZvcmNlVXBkYXRlIiwicmVjb2duaXplZEltYWdlIiwiX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwIiwiX19pblByb2dyZXNzU3RlcCIsImd1aWRlQm94IiwibWFza0JveFdyYXAiLCJjYXB0dXJlQnV0dG9uIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiX21hc2tCb3hXcmFwJHF1ZXJ5U2VsIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIl9jYXB0dXJlQnV0dG9uJHF1ZXJ5UyIsIm9jck1vZGUiLCJjYWxsIiwiX191cGRhdGVQcmV2aWV3VUkiLCJfX2hpZGVQcmV2aWV3VUkiLCJwcmV2aWV3VUlXcmFwIiwicHJldmlld0ltYWdlIiwiaW1nU3R5bGUiLCJjb250ZXh0IiwiX19nZXRJbnB1dERldmljZXMiLCJraW5kIiwibGFiZWwiLCJfdGhpczE2IiwibWVkaWFEZXZpY2VzIiwiZGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ2aWRlb0RldmljZXMiLCJmaWx0ZXIiLCJkZXZpY2UiLCJjb25jYXQiLCJnZXRDYXBhYmlsaXRpZXMiLCJfY2FwJGZhY2luZ01vZGUiLCJjYXAiLCJmYWNpbmdNb2RlIiwiX19mYWNpbmdNb2RlQ29uc3RyYWludCIsImNoZWNrVUlPcmllbnRhdGlvbiIsImN1cnJlbnQiLCJvY3IiLCJpc0NoYW5nZWQiLCJfX3ByZXZVaU9yaWVudGF0aW9uIiwiX19jbGVhckN1c3RvbVVJIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiX19zZXR1cERvbUVsZW1lbnRzIiwiX3RoaXMxNyIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiY3VzdG9tVUlXcmFwIiwiY2FwdHVyZVVJV3JhcCIsImNhcHR1cmVVSSIsInByZXZpZXdVSSIsInN3aXRjaFVJV3JhcCIsInN3aXRjaFVJIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJtYXJnaW4iLCJvdmVyZmxvdyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwibWFza19mcmFtZSIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJfb2JqZWN0U3ByZWFkIiwidHJhbnNmb3JtIiwiY2FudmFzU3R5bGUiLCJsZWZ0IiwidG9wIiwiYm9yZGVyIiwicmlnaHQiLCJib3R0b20iLCJjdXN0b21VSVdyYXBTdHlsZSIsImNhcHR1cmVVSVdyYXBTdHlsZSIsImN1cnNvciIsImNhcHR1cmVCdXR0b25TcmNTVkciLCJfX29uQ2xpY2tDYXB0dXJlQnV0dG9uIiwicHJldmlld1VJV3JhcFN0eWxlIiwic3dpdGNoVUlXcmFwU3R5bGUiLCJzd2l0Y2hIVE1MIiwic3dpdGNoQ2hlY2tib3giLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIl9fb25DbGlja1N3aXRjaFVJIiwiX3JlZjgiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJfeDIiLCJvbmNlIiwiX19vY3IiLCJfX2NhbnZhcyIsIl9fcm90YXRpb25DYW52YXMiLCJfX3ZpZGVvIiwiX192aWRlb1dyYXAiLCJfX2d1aWRlQm94IiwiX19ndWlkZUJveFdyYXAiLCJfX21hc2tCb3hXcmFwIiwiX19wcmV2ZW50VG9GcmVlemVWaWRlbyIsIl9fY3VzdG9tVUlXcmFwIiwiX19jYXB0dXJlVUlXcmFwIiwiX19jYXB0dXJlVUkiLCJfX2NhcHR1cmVCdXR0b24iLCJfX3ByZXZpZXdVSVdyYXAiLCJfX3ByZXZpZXdVSSIsIl9fcHJldmlld0ltYWdlIiwiX19zd2l0Y2hVSVdyYXAiLCJfX3N3aXRjaFVJIiwiX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uIiwiZ2V0QXR0cmlidXRlIiwiX3RoaXMxOCIsImRldmljZUlkTGlzdCIsIm1hcCIsImRldmljZUlkIiwiY29uc3RyYWludFdpZHRoIiwiY29uc3RyYWludEhlaWdodCIsImlkZWFsIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInpvb20iLCJmb2N1c01vZGUiLCJ3aGl0ZUJhbGFuY2VNb2RlIiwiZ2V0VXNlck1lZGlhIiwic3RyZWFtIiwiX2FyZ3VtZW50czYiLCJfdGhpczE5IiwiaXNGaXJzdENhbGxlZCIsImJhc2VXaWR0aCIsImJhc2VIZWlnaHQiLCJzY2FubmVyRnJhbWVSYXRpbyIsImd1aWRlQm94V2lkdGgiLCJndWlkZUJveEhlaWdodCIsImNhbGNPY3JDbGllbnRXaWR0aCIsImNhbGNPY3JDbGllbnRIZWlnaHQiLCJuZXdWaWRlb1dpZHRoIiwibmV3VmlkZW9IZWlnaHQiLCJndWlkZUJveFJhdGlvQnlXaWR0aCIsIl9fZ3VpZGVCb3hSYXRpb0J5V2lkdGgiLCJ2aWRlb1JhdGlvQnlIZWlnaHQiLCJfX3ZpZGVvUmF0aW9CeUhlaWdodCIsInJlZHVjZWRHdWlkZUJveFdpZHRoIiwiX19ndWlkZUJveFJlZHVjZVJhdGlvIiwicmVkdWNlZEd1aWRlQm94SGVpZ2h0IiwicGFkZGluZyIsInZpZGVvSW5uZXJHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXNrQm94SW5uZXIiLCJyIiwiaXNOYU4iLCJtYXNrQm94SW5uZXJXaWR0aCIsIm1heCIsIm1hc2tCb3hJbm5lckhlaWdodCIsImNhbGNTdW1PZkhlaWdodEJvdHRvbVVJQ2hpbGROb2RlcyIsIl9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2RlcyIsImNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0IiwiY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSIsInBhcnNlSW50IiwicGFkZGluZ1RvcCIsImJhc2VsaW5lIiwic3VtIiwiaXRlbSIsImNoaWxkTm9kZXMiLCJzdG9wU2NhbiIsIl90aGlzMjAiLCJfX3Jlc291cmNlc0xvYWRlZCIsIl9faXNTdXBwb3J0U2ltZCIsImVudkluZm8iLCJvcyIsIm9zU2ltcGxlIiwidXNlYk9DUkVudkluZm8iLCJzZGtTdXBwb3J0RW52IiwidXJsIiwiZmV0Y2giLCJocmVmIiwidGhlbiIsInJlcyIsInRleHQiLCJyZWdleCIsInNvdXJjZSIsInJlcGxhY2UiLCJldmFsIiwib25SdW50aW1lSW5pdGlhbGl6ZWQiLCJfcmVmOSIsIl94MyIsIl9fc3RhcnRTY2FuV2FzbUltcGwiLCJfdGhpczIxIiwiX19kZXRlY3RlZCIsIl9fYWRkcmVzcyIsIl9fc3NhUmV0cnlDb3VudCIsInNjYW4iLCJfcmVmMTAiLCJpc0RldGVjdGVkQ2FyZCIsInNzYVJlc3VsdCIsInNzYVJlc3VsdExpc3QiLCJtYXNrSW5mbyIsInJlc29sdXRpb25fdyIsInJlc29sdXRpb25faCIsIl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlIiwicHVzaCIsInJldHJ5U3RhcnREYXRlIiwiRGF0ZSIsIkZBS0UiLCJSRUFMIiwiRU5TRU1CTEUiLCJpc0NvbXBsZXRlZCIsIl9sb29wIiwiZXhlY3V0ZSIsIl9yZWYxMSIsIl9yZXQiLCJyZXRyeVdvcmtpbmdUaW1lIiwibGVnYWN5Rm9ybWF0IiwibmV3Rm9ybWF0IiwicGFyc2VPY3JSZXN1bHQiLCJyZXZpZXdfcmVzdWx0Iiwib2NyX3R5cGUiLCJvY3JfcmVzdWx0Iiwib2NyX29yaWdpbl9pbWFnZSIsIm9jcl9tYXNraW5nX2ltYWdlIiwib2NyX2ZhY2VfaW1hZ2UiLCJzc2FfbW9kZSIsImVuY3J5cHRlZCIsIm9jcl9kYXRhIiwiX19vblN1Y2Nlc3NQcm9jZXNzIiwiX19yZWNvdmVyZWQiLCJfX3JlcXVlc3RHZXRBUElUb2tlbiIsImNyZWRlbnRpYWwiLCJhdXRoU2VydmVySW5mbyIsImJhc2VVcmwiLCJib2R5IiwibWV0aG9kIiwianNvbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJjYXRjaCIsImVyciIsIl9fcmVxdWVzdFNlcnZlck9DUiIsIl90aGlzMjIiLCJfcmVmMTIiLCJvY3JTZXJ2ZXJCYXNlVXJsIiwiYXBpVG9rZW4iLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwiaW1hZ2VfYmFzZTY0IiwibWFza19tb2RlIiwiZmFjZV9tb2RlIiwicmVxdWVzdE9wdGlvbnMiLCJyZWRpcmVjdCIsIl94NCIsIl94NSIsIl9fc3RhcnRTY2FuU2VydmVySW1wbCIsIl90aGlzMjMiLCJfcmVmMTMiLCJfcmVmMTQiLCJiYXNlNjRJbWFnZVJlc3VsdCIsIl94NiIsIl94NyIsImltZ0RhdGFVUkwiLCJsaW1pdFNhdmVJbWFnZUNvdW50Iiwic2hpZnQiLCJfX2RlYnVnTW9kZSIsIl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQiLCJfdGhpczI0IiwiYXBpX3Jlc3BvbnNlIiwicmVzdWx0X2NvZGUiLCJyZXN1bHRfbWVzc2FnZSIsInJlc3VsdENvZGUiLCJfdGhpczI1IiwiZXJyb3JEZXRhaWwiLCJzdGFjayIsImVycm9yX2RldGFpbCIsIl90aGlzMjYiLCJwcmVsb2FkaW5nU3RhdHVzIiwiX3RoaXMyNyIsIl90aGlzMjgiLCJfX3JlY292ZXJ5U2NhbiIsIl90aGlzMjkiLCJjYW52YXNDb250ZXh0IiwiY2xlYXJSZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VzIjpbIm9jci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogZ2xvYmFsLW1vZHVsZSAqL1xuaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgdXNlYk9DUldBU01QYXJzZXIgZnJvbSAnLi9oZWxwZXJzL3VzZWItb2NyLXdhc20tcGFyc2VyLmpzJztcbmltcG9ydCB1c2ViT0NSQVBJUGFyc2VyIGZyb20gJy4vaGVscGVycy91c2ViLW9jci1hcGktcGFyc2VyLmpzJztcbmltcG9ydCB7IGlzU3VwcG9ydFdhc20sIG1lYXN1cmUsIHNpbWQsIHRocmVhZHMgfSBmcm9tICcuL2hlbHBlcnMvd2FzbS1mZWF0dXJlLWRldGVjdC5qcyc7XG5sZXQgaW5zdGFuY2U7XG5jbGFzcyBVc2VCT0NSIHtcbiAgSU5fUFJPR1JFU1MgPSB7XG4gICAgTk9ORTogJ25vbmUnLFxuICAgIE5PVF9SRUFEWTogJ25vdF9yZWFkeScsXG4gICAgUkVBRFk6ICdyZWFkeScsXG4gICAgQ0FSRF9ERVRFQ1RfU1VDQ0VTUzogJ2RldGVjdF9zdWNjZXNzJyxcbiAgICBDQVJEX0RFVEVDVF9GQUlMRUQ6ICdkZXRlY3RfZmFpbGVkJyxcbiAgICBNQU5VQUxfQ0FQVFVSRV9TVUNDRVNTOiAnbWFudWFsX2NhcHR1cmVfc3VjY2VzcycsXG4gICAgTUFOVUFMX0NBUFRVUkVfRkFJTEVEOiAnbWFudWFsX2NhcHR1cmVfZmFpbGVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRDogJ3JlY29nbml6ZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOiAncmVjb2duaXplZF93aXRoX3NzYScsXG4gICAgT0NSX1NVQ0NFU1M6ICdvY3Jfc3VjY2VzcycsXG4gICAgT0NSX1NVQ0NFU1NfV0lUSF9TU0E6ICdvY3Jfc3VjY2Vzc193aXRoX3NzYScsXG4gICAgT0NSX0ZBSUxFRDogJ29jcl9mYWlsZWQnXG4gIH07XG4gIE9DUl9TVEFUVVMgPSB7XG4gICAgTk9UX1JFQURZOiAtMSxcbiAgICBSRUFEWTogMCxcbiAgICBPQ1JfU1VDQ0VTUzogMSxcbiAgICBET05FOiAyXG4gIH07XG4gIFBSRUxPQURJTkdfU1RBVFVTID0ge1xuICAgIE5PVF9TVEFSVEVEOiAtMSxcbiAgICBTVEFSVEVEOiAwLFxuICAgIERPTkU6IDFcbiAgfTtcblxuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cblxuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIF9fZGVidWdNb2RlID0gZmFsc2U7XG4gIF9fT0NSRW5naW5lID0gbnVsbDtcbiAgX19pc1N1cHBvcnRXYXNtID0gZmFsc2U7XG4gIF9faXNTdXBwb3J0U2ltZCA9IGZhbHNlO1xuICBfX2luaXRpYWxpemVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQ7XG4gIF9fbGljZW5zZTtcbiAgX19vY3JUeXBlID0gbnVsbDtcbiAgX19zc2FNb2RlID0gZmFsc2U7XG4gIF9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50ID0gMTA7XG4gIF9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gIF9fc3NhUmV0cnlDb3VudCA9IDA7XG4gIF9fZGV0ZWN0ZWRDYXJkUXVldWUgPSBbXTtcbiAgX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NCA9IFtdO1xuICBfX29uU3VjY2VzcyA9IG51bGw7XG4gIF9fb25GYWlsdXJlID0gbnVsbDtcbiAgX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsO1xuICBfX29jclR5cGVMaXN0ID0gWydpZGNhcmQnLCAnZHJpdmVyJywgJ3Bhc3Nwb3J0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnYWxpZW4nLCAnY3JlZGl0JywgJ2lkY2FyZC1zc2EnLCAnZHJpdmVyLXNzYScsICdwYXNzcG9ydC1zc2EnLCAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLCAnYWxpZW4tc3NhJ107XG4gIF9fb2NyVHlwZU51bWJlclRvU3RyaW5nID0gbmV3IE1hcChbWycxJywgJ2lkY2FyZCddLCBbJzInLCAnZHJpdmVyJ10sIFsnMycsICdwYXNzcG9ydCddLCBbJzQnLCAnZm9yZWlnbi1wYXNzcG9ydCddLCBbJzUnLCAnYWxpZW4nXSwgWyc1LTEnLCAnYWxpZW4nXSwgWyc1LTInLCAnYWxpZW4nXSwgWyc1LTMnLCAnYWxpZW4nXV0pO1xuICBfX29jclN0cmluZ1RvVHlwZU51bWJlciA9IG5ldyBNYXAoW1snaWRjYXJkJywgJzEnXSwgWydkcml2ZXInLCAnMiddLCBbJ3Bhc3Nwb3J0JywgJzMnXSwgWydmb3JlaWduLXBhc3Nwb3J0JywgJzQnXSwgWydhbGllbicsICc1J10sIFsnYWxpZW4nLCAnNS0xJ10sIFsnYWxpZW4nLCAnNS0yJ10sIFsnYWxpZW4nLCAnNS0zJ11dKTtcbiAgX19wYWdlRW5kID0gZmFsc2U7XG4gIF9fb2NyO1xuICBfX2NhbnZhcztcbiAgX19yb3RhdGlvbkNhbnZhcztcbiAgX192aWRlbztcbiAgX192aWRlb1dyYXA7XG4gIF9fZ3VpZGVCb3g7XG4gIF9fZ3VpZGVCb3hXcmFwO1xuICBfX21hc2tCb3hXcmFwO1xuICBfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICBfX2N1c3RvbVVJV3JhcDtcbiAgX190b3BVSTtcbiAgX19taWRkbGVVSTtcbiAgX19ib3R0b21VSTtcbiAgX19wcmV2aWV3VUlXcmFwO1xuICBfX3ByZXZpZXdVSTtcbiAgX19wcmV2aWV3SW1hZ2U7XG4gIF9fY2FwdHVyZVVJV3JhcDtcbiAgX19jYXB0dXJlVUk7XG4gIF9fc3dpdGNoVUlXcmFwO1xuICBfX3N3aXRjaFVJO1xuICBfX2NhcHR1cmVCdXR0b247XG4gIF9fYWRkcmVzcyA9IDA7XG4gIF9fZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgX19yZWNvdmVyZWQgPSBmYWxzZTtcbiAgX19CdWZmZXIgPSBudWxsO1xuICBfX3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gIF9fbWFza0luZm9SZXN1bHRCdWYgPSBudWxsO1xuICBfX1ByZXZJbWFnZSA9IG51bGw7XG4gIF9fc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gIF9fY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgX19yZXNvbHV0aW9uV2lkdGggPSAwO1xuICBfX3Jlc29sdXRpb25IZWlnaHQgPSAwO1xuICBfX3ZpZGVvV2lkdGggPSAwO1xuICBfX3ZpZGVvSGVpZ2h0ID0gMDtcbiAgX19yZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgX19pbnRlcnZhbFRpbWVyO1xuICBfX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXI7XG4gIF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQ7XG4gIF9fc3RyZWFtO1xuICBfX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICBfX2ZhY2luZ01vZGVDb25zdHJhaW50ID0gJ2Vudmlyb25tZW50JztcbiAgX191aU9yaWVudGF0aW9uID0gJyc7XG4gIF9fcHJldlVpT3JpZW50YXRpb24gPSAnJztcbiAgX192aWRlb09yaWVudGF0aW9uID0gJyc7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgX190aHJvdHRsaW5nUmVzaXplRGVsYXkgPSA1MDA7XG4gIF9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPSAzMDA7IC8vIOyehOyLnFxuICBfX3JldHJ5Q291bnRHZXRBZGRyZXNzID0gMDsgLy8g7J6E7IucXG4gIF9fZGV2aWNlSW5mbztcbiAgX19pc1JvdGF0ZWQ5MG9yMjcwID0gZmFsc2U7XG4gIF9faW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTtcbiAgX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT05FO1xuICBfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICBfX2d1aWRlQm94UmF0aW9CeVdpZHRoID0gMS4wOyAvLyDsiJjsoJXrtojqsIBcbiAgX192aWRlb1JhdGlvQnlIZWlnaHQgPSAwLjk7IC8vIOyImOygleu2iOqwgFxuICBfX2d1aWRlQm94UmVkdWNlUmF0aW8gPSAwLjg7IC8vIOyImOygleu2iOqwgFxuICBfX2Nyb3BJbWFnZVNpemVXaWR0aCA9IDA7XG4gIF9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IDA7XG4gIF9faXNTd2l0Y2hUb1NlcnZlck1vZGUgPSBmYWxzZTtcblxuICAvKiogRGVmYXVsdCBvcHRpb25zICovXG4gIF9fb3B0aW9ucyA9IG5ldyBPYmplY3Qoe1xuICAgIC8vIOuUlOuyhOq5hSDsmLXshZhcbiAgICBzaG93Q2xpcEZyYW1lOiBmYWxzZSxcbiAgICAvLyBjaWxwLWZyYW1lIOuztOq4sFxuICAgIHNob3dDYW52YXNQcmV2aWV3OiBmYWxzZSxcbiAgICAvLyBjYW52YXMgcHJldmlldyDrs7TquLBcblxuICAgIC8vIOy2nOugpSDsmLXshZhcbiAgICB1c2VFbmNyeXB0TW9kZTogZmFsc2UsXG4gICAgLy8g7JWU7Zi47ZmUIOyggeyaqVxuICAgIHVzZUxlZ2FjeUZvcm1hdDogZmFsc2UsXG4gICAgLy8gTGVnYWN5IGZvcm1hdCDsp4Dsm5BcbiAgICB1c2VNYXNrSW5mbzogdHJ1ZSxcbiAgICAvLyDrp4jsiqTtgrkg7KKM7ZGcIOyngOybkFxuICAgIHVzZUZhY2VJbWFnZTogdHJ1ZSxcbiAgICAvLyDsi6DrtoTspp0g64K0IOyWvOq1tCDsgqzsp4RcblxuICAgIC8vIFVJIOyEpOyglVxuICAgIHVzZVRvcFVJOiB0cnVlLFxuICAgIC8vIOyDgeuLqCBVSVxuICAgIHVzZVRvcFVJVGV4dE1zZzogZmFsc2UsXG4gICAgLy/sg4Hri6ggVUkgPiBURVhUXG4gICAgdXNlTWlkZGxlVUk6IHRydWUsXG4gICAgLy/spJHri6ggVUlcbiAgICB1c2VNaWRkbGVVSVRleHRNc2c6IHRydWUsXG4gICAgLy8g7KSR64uoIFVJID4gVEVYVFxuICAgIHVzZUJvdHRvbVVJOiB0cnVlLFxuICAgIC8vIO2VmOuLqCBVSVxuICAgIHVzZUJvdHRvbVVJVGV4dE1zZzogZmFsc2UsXG4gICAgLy8g7ZWY64uoIFVJID4gVEVYVFxuICAgIHVzZVByZXZpZXdVSTogdHJ1ZSxcbiAgICAvLyBQcmV2aWV3IFVJXG4gICAgdXNlQ2FwdHVyZVVJOiB0cnVlLFxuICAgIC8vIOy6oeyymOuyhO2KvCBVSVxuXG4gICAgLy8g7J247IudIO2UhOugiOyehCDsmLXshZhcbiAgICBmcmFtZUJvcmRlclN0eWxlOiB7XG4gICAgICB3aWR0aDogNSxcbiAgICAgIC8vIGJvcmRlci13aWR0aFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIC8vIGJvcmRlci1yYWRpdXNcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgLy8gYm9yZGVyLXN0eWxlXG5cbiAgICAgIC8vIOuLqOqzhOuzhCDsnbjsi50g7ZSE66CI7J6EIGJvcmRlciDsg4nsg4FcbiAgICAgIG5vdF9yZWFkeTogJyMwMDAwMDAnLFxuICAgICAgLy8g7Iqk7LqU7KSA67mEIDog6rKA7KCVXG4gICAgICByZWFkeTogJyNiOGI4YjgnLFxuICAgICAgLy8g7Iqk7LqU64yA6riwIDog7ZqM7IOJXG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyEseqztSA6IO2VmOuKmFxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyLpO2MqCA6IOuztOudvFxuICAgICAgbWFudWFsX2NhcHR1cmVfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyEseqztSA6IO2VmOuKmFxuICAgICAgbWFudWFsX2NhcHR1cmVfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7Iuk7YyoIDog67O06528XG4gICAgICByZWNvZ25pemVkOiAnIzAwM2FjMicsXG4gICAgICAvLyBPQ1LsmYTro4wgOiDtjIzrnpFcbiAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6ICcjMDAzYWMyJyxcbiAgICAgIC8vIOyCrOuzuO2MkOuzhOykkSjsgqzrs7jtjJDrs4QgT04pIDog7YyM656RXG4gICAgICBvY3Jfc3VjY2VzczogJyMxNGIwMGUnLFxuICAgICAgLy8gT0NS7JmE66OMIDog7LSI66GdXG4gICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogJyMxNGIwMGUnLFxuICAgICAgLy8gT0NS7JmE66OMKOyCrOuzuO2MkOuzhCBPTikgOiDstIjroZ1cbiAgICAgIG9jcl9mYWlsZWQ6ICcjRkExMTNEJyAvLyBPQ1Lsi6TtjKggOiDruajqsJVcbiAgICB9LFxuXG4gICAgLy8g66eI7Iqk7YGsIO2UhOugiOyehCBmaWxsIOy7rOufrCDrs4Dqsr0g7IKs7JqpIOyXrOu2gFxuICAgIHVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlOiB0cnVlLFxuICAgIC8vIOuniOyKpO2BrCDtlITroIjsnoQg7Ji17IWYICjsubTrqZTrnbwg67mE65SU7JikIOyYgeyXreyXkOyEnCDsnbjsi50g7ZSE66CI7J6E66eMIOuztOydtOqyjCDtlZjqs6Ag64KY66i47KeA66W8IOuNruyWtOyTsOuKlCDtlITroIjsnoQg7JiB7JetKVxuICAgIG1hc2tGcmFtZVN0eWxlOiB7XG4gICAgICBjbGlwX2ZyYW1lOiAnI2ZmMDBiZicsXG4gICAgICAvLyBjbGlwLWZyYW1lIOyDieyDgSA6IOuUpe2NvO2UjCAo7IiY7KCV67aI6rCAKVxuICAgICAgYmFzZV9jb2xvcjogJyMzMzMzMzMnLFxuICAgICAgLy8gbWFzay1mcmFtZSDsg4nsg4EgOiDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuXG4gICAgICAvLyDri6jqs4Trs4Qg66eI7Iqk7YGsIO2UhOugiOyehCBmaWxsIOyDieyDgVxuICAgICAgbm90X3JlYWR5OiAnIzMzMzMzMycsXG4gICAgICAvLyDsiqTsupTspIDruYRcbiAgICAgIHJlYWR5OiAnIzMzMzMzMycsXG4gICAgICAvLyDsiqTsupTrjIDquLBcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICAvLyDsubTrk5zqsoDstpwg7ISx6rO1XG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzMzMzMzMycsXG4gICAgICAvLyDsubTrk5zqsoDstpwg7Iuk7YyoXG4gICAgICBtYW51YWxfY2FwdHVyZV9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7ISx6rO1XG4gICAgICBtYW51YWxfY2FwdHVyZV9mYWlsZWQ6ICcjMzMzMzMzJyxcbiAgICAgIC8vIOyImOuPmey0rOyYgSDsi6TtjKhcbiAgICAgIHJlY29nbml6ZWQ6ICcjMjIyMjIyJyxcbiAgICAgIC8vIE9DUuyZhOujjFxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMyMjIyMjInLFxuICAgICAgLy8g7IKs67O47YyQ67OE7KSRKOyCrOuzuO2MkOuzhCBPTilcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzExMTExMScsXG4gICAgICAvL09DUuyZhOujjFxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTExMTExJyxcbiAgICAgIC8vIE9DUuyZhOujjCjsgqzrs7jtjJDrs4QgT04pXG4gICAgICBvY3JfZmFpbGVkOiAnIzExMTExMScgLy8gT0NS7Iuk7YyoXG4gICAgfSxcblxuICAgIC8vIOy0rOyYgeyYteyFmFxuICAgIHVzZUF1dG9Td2l0Y2hUb1NlcnZlck1vZGU6IGZhbHNlLFxuICAgIC8vIOyggOyCrOyWkSDri6jrp5Dsl5DshJwg7ISc67KET0NS66GcIOyekOuPmSDsoITtmZgg6riw64qlXG4gICAgdXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlOiBmYWxzZSxcbiAgICAvLyDsiJjrj5nsnLzroZwg7ISc67KET0NSIOyghO2ZmCDquLDriqUgKOyImOuPmeydtCB0cnVl7J2066m0IOyekOuPmeydgCDrrLTsi5zrkKgpXG4gICAgc3dpdGNoVG9TZXJ2ZXJUaHJlc2hvbGQ6IDIwLjAsXG4gICAgLy8g7J6Q64+Z7KCE7ZmYIOq4sOykgOqwkiAo7ISx64qlIOy4oeygley5mCBtcylcbiAgICB1c2VGb3JjZUNvbXBsZXRlVUk6IGZhbHNlLFxuICAgIC8vIFdBU00g66qo65Oc7J2865WMIOuyhO2KvCDriITrpbzsi5wg7ZW064u5IOyLnOygkOyXkCDqsJXsoJzroZwg7JmE66OMIOyCrOyaqeyXrOu2gFxuXG4gICAgLy8g7IiY64+Z7LSs7JiBIOuyhO2KvCDsmLXshZhcbiAgICBjYXB0dXJlQnV0dG9uU3R5bGU6IHtcbiAgICAgIHN0cm9rZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgLy8g67KE7Yq8IO2FjOuRkOumrChzdHJva2UpIOyDieyDgVxuICAgICAgYmFzZV9jb2xvcjogJyM1ZThmZmYnIC8vIOuyhO2KvCDsg4nsg4FcbiAgICB9LFxuXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgIC8vIHdhc20sIGRhdGEg7YyM7J28IOumrOyGjOyKpCBiYXNlIOqyveuhnCAoQ0ROIOyCrOyaqeyLnCDrs4Dqsr0pXG4gICAgZGV2aWNlTGFiZWw6ICcnLFxuICAgIHZpZGVvVGFyZ2V0SWQ6ICcnLFxuICAgIC8vIOy5tOuplOudvCDshKTsoJVcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICAvLyByb3RhdGlvbi1kZWdyZWUg7Lm066mU65286rCAIO2ajOyghOuQnCDqsIHrj4QgKDkwLCAxOTAsIDI3MClcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgICAvLyBtaXJyb3ItbW9kZSDshYDtlLwg7Lm066mU6528KO2CpOyYpOyKpO2BrCDrk7EpIOyCrOyaqeyLnCDsoozsmrAg67CY7KCEXG5cbiAgICAvLyDsgqzrs7jtjJDrs4QgUkVUUlkg7ISk7KCVXG4gICAgLy8gc3NhUmV0cnlUeXBlXG4gICAgLy8gICAtIFJFQUwgICAgIDog67O47J24KFJFQUwpIOqxsOu2gOycqCAtPiBGYWxzZSBOZWdhdGl2ZSjsi6TsoJzqsJLsnYAgUkVBTOyduOuNsCDsmIjsuKHqsJLsnYAgRkFLReudvOyEnCDti4DrprDqsr3smrAp66W8IOuCruy2lOq4sCDsnITtlbQsXG4gICAgLy8gICAtIEZBS0UgICAgIDog7YOA7J24KEZBS0UpIOyImOudveycqCAtPiBGYWxzZSBQb3NpdGl2ZSjsi6TsoJzqsJLsnYAgRkFLReyduOuNsCDsmIjsuKHqsJLsnYAgUkVBTOydtOudvOyEnCDti4DrprDqsr3smrAp66W8IOuCruy2lOq4sCDsnITtlbRcbiAgICAvLyAgIC0gRU5TRU1CTEUgOiDtj4nqt6Ag7KCI64yA6rCSIC0+IHNzYU1heFJldHJ5Q291bnQg66eM7YG8IOuwmOuztSDsiJjtlontlZjqs6AgZmRfY29uZmlkZW5jZSDsoIjrjIDqsJIg6rCS7J2YIO2Pieq3oOycvOuhnCDtjJDsoJVcbiAgICAvLyBzc2FNYXhSZXRyeUNvdW50IOyEpOyglSDqsJLrp4ztgbwg7J6s7Iuc64+E7ZWY7JesIO2VnOuyiOydtOudvOuPhCDquLDspIDqsJIoUkVBTCDrmJDripQgRkFLRSnsnbQg65yo66m0IOq4sOykgOqwkihSRUFMIOuYkOuKlCBGQUtFKeuhnCDtjJDsoJVcbiAgICBzc2FSZXRyeVR5cGU6ICdFTlNFTUJMRScsXG4gICAgc3NhUmV0cnlQaXZvdDogMC44LFxuICAgIC8vIFJFQUwvRkFLReulvCDtjJDsoJXtlZjripQgZmRfY29uZmlkZW5jZSDquLDspIDqsJIgKHdhc20g67Cw7Y+sIOuyhOyghOyXkCDrlLDrnbwg64uk66aEKSDigLsg7IiY7KCV67aI6rCAXG4gICAgc3NhTWF4UmV0cnlDb3VudDogMCAvLyDstZzrjIAgUkVUUlkg7ZqM7IiY7ISk7KCVIDDsnbTrqbQg66+47IKs7JqpXG4gIH0pO1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqIHB1YmxpYyBtZXRob2RzICovXG4gIGFzeW5jIHByZWxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRDtcbiAgICAgIGF3YWl0IHRoaXMuX19sb2FkUmVzb3VyY2VzKCk7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORTtcbiAgICAgIHRoaXMuX19wcmVsb2FkZWQgPSB0cnVlO1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLl9faW5pdGlhbGl6ZWQ7XG4gIH1cbiAgaXNQcmVsb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkZWQ7XG4gIH1cbiAgZ2V0UHJlbG9hZGluZ1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lO1xuICB9XG4gIGluaXQoc2V0dGluZ3MpIHtcbiAgICBpZiAoISEhc2V0dGluZ3MubGljZW5zZUtleSkgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIGtleSBpcyBlbXB0eScpO1xuICAgIHRoaXMuX19saWNlbnNlID0gc2V0dGluZ3MubGljZW5zZUtleTtcbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5fX29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy5fX3dpbmRvd0V2ZW50QmluZCgpO1xuICAgICAgdGhpcy5fX2RldmljZUluZm8gPSBkZXRlY3Rvci5nZXRPc1ZlcnNpb24oKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuX19pc1N1cHBvcnRXYXNtID0gaXNTdXBwb3J0V2FzbSgpO1xuICAgICAgaWYgKCF0aGlzLl9faXNTdXBwb3J0V2FzbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYkFzc2VtYmx5IGlzIG5vdCBzdXBwb3J0ZWQuIGluIHRoaXMgYnJvd3Nlci4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldE9wdGlvbihzZXR0aW5ncykge1xuICAgIHRoaXMuX19vcHRpb25zID0gc2V0dGluZ3M7XG4gIH1cbiAgZ2V0T3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucztcbiAgfVxuICBnZXRPY3JUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclR5cGVOdW1iZXJUb1N0cmluZy5nZXQodHlwZSk7XG4gIH1cbiAgZ2V0T2NyVHlwZU51bWJlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclN0cmluZ1RvVHlwZU51bWJlci5nZXQoc3RyaW5nKTtcbiAgfVxuICBnZXRVSU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdWlPcmllbnRhdGlvbjtcbiAgfVxuICBnZXRWaWRlb09yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgfVxuICBhc3luYyBjaGVja1N3aXRjaFRvU2VydmVyTW9kZSgpIHtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAvLyDsiJjrj5nsoITtmZggb24g7J2066m0IOyImOuPmeyghO2ZmCDsmrDshKBcbiAgICAgIHJldHVybiB0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOyImOuPmeyghO2ZmCBvZmYg7J2066m0IOyekOuPmeyghO2ZmCDssrTtgaxcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VBdXRvU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAgIC8vIOyekOuPmeyghO2ZmCBvbuydvOuVjFxuICAgICAgICAvLyDshLHriqUg7Lih7KCV6rCS7J2EIOq4sOykgOycvOuhnCBXQVNNIG9yIFNlcnZlclxuICAgICAgICByZXR1cm4gKGF3YWl0IG1lYXN1cmUoKSkgPiB0aGlzLl9fb3B0aW9ucy5zd2l0Y2hUb1NlcnZlclRocmVzaG9sZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOyImOuPmeyghO2ZmOuPhCBvZmYsIOyekOuPmeyghO2ZmCBvZmZcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID0gYXdhaXQgdGhpcy5jaGVja1N3aXRjaFRvU2VydmVyTW9kZSgpO1xuICAgIHRoaXMuX19vY3JUeXBlID0gdHlwZTtcbiAgICB0aGlzLl9fc3NhTW9kZSA9IHRoaXMuX19vY3JUeXBlLmluZGV4T2YoJy1zc2EnKSA+IC0xO1xuICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG4gICAgdGhpcy5fX29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlID0gb25JblByb2dyZXNzQ2hhbmdlO1xuICAgIGlmIChvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSkge1xuICAgICAgICB0aGlzLl9fdG9wVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnRvcFVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJKSB7XG4gICAgICAgIHRoaXMuX19taWRkbGVVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkubWlkZGxlVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHtcbiAgICAgICAgdGhpcy5fX2JvdHRvbVVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5ib3R0b21VSTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbml0aWFsaXplZCEnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgICAgLy8gc2VydmVyTW9kZVxuICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlRW5jcnlwdE1vZGUgJiYgdGhpcy5fX2lzU3VwcG9ydFdhc20pIGF3YWl0IHRoaXMuX19wcmVsb2FkaW5nV2FzbSgpO1xuICAgICAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuU2VydmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3YXNtTW9kZVxuICAgICAgICBhd2FpdCB0aGlzLl9fcHJlbG9hZGluZ1dhc20oKTtcbiAgICAgICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2Nhbldhc20oKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuc3RvcE9DUigpO1xuICAgIH1cbiAgfVxuICBzdG9wT0NSKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBudWxsO1xuICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICB9XG4gIHNldElnbm9yZUNvbXBsZXRlKHZhbCkge1xuICAgIHRoaXMuX19PQ1JFbmdpbmUuc2V0SWdub3JlQ29tcGxldGUodmFsKTtcbiAgfVxuICBhc3luYyByZXN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UsIGlzU3dpdGNoTW9kZSA9IGZhbHNlKSB7XG4gICAgaWYgKGlzU3dpdGNoTW9kZSkge1xuICAgICAgYXdhaXQgdGhpcy5zdG9wT0NSKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICB9XG5cbiAgLyoqIHByaXZhdGUgbWV0aG9kcyAqL1xuICBhc3luYyBfX3dhaXRQcmVsb2FkZWQoKSB7XG4gICAgbGV0IHdhaXRpbmdSZXRyeUNvdW50ID0gMDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YWl0aW5nUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9O1xuICAgICAgY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBfX3dpbmRvd0V2ZW50QmluZCgpIHtcbiAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgIGlmICgvaXBob25lfGlwb2R8aXBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgY29uc3Qgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSA9IGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzXy5fX3BhZ2VFbmQgPSB0cnVlO1xuICAgICAgX3RoaXNfLmNsZWFudXAoKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uX19vY3JUeXBlKSByZXR1cm47XG4gICAgICBpZiAoIV90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSkge1xuICAgICAgICBfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSB0cnVlO1xuICAgICAgICBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIF90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBfdGhpc18ucmVzdGFydE9DUihfdGhpc18uX19vY3JUeXBlLCBfdGhpc18uX19vblN1Y2Nlc3MsIF90aGlzXy5fX29uRmFpbHVyZSwgX3RoaXNfLl9fb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlUmVzaXplLCBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplRGVsYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cbiAgX19ibG9iVG9CYXNlNjQoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgfSk7XG4gIH1cblxuICAvKiog65287J207IS87IqkIO2CpOulvCBoZWFwIOyXkCBhbGxvY2F0aW9uICovXG4gIF9fZ2V0U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAoISEhdGhpcy5fX2xpY2Vuc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBLZXkgaXMgZW1wdHknKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLl9fT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOCh0aGlzLl9fbGljZW5zZSkgKyAxO1xuICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICB0aGlzLl9fT0NSRW5naW5lLnN0cmluZ1RvVVRGOCh0aGlzLl9fbGljZW5zZSwgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICByZXR1cm4gdGhpcy5fX3N0cmluZ09uV2FzbUhlYXA7XG4gIH1cbiAgX19lbmNyeXB0U2NhblJlc3VsdChvY3JSZXN1bHQpIHtcbiAgICBsZXQgc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghISFvY3JSZXN1bHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdvY3JSZXN1bHQgaXMgZW1wdHknKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvY3JSZXN1bHQpO1xuICAgICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLl9fT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOChqc29uU3RyaW5nKSArIDE7XG4gICAgICBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KGpzb25TdHJpbmcsIHN0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lLmVuY3J5cHRSZXN1bHQoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChzdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgIHN0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgbGV0IHJlc29sdXRpb25UZXh0ID0gJ25vdCByZWFkeSc7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX192aWRlb1dpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgdGhpcy5fX3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH07XG4gIH1cbiAgX19nZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGFkZHJlc3MgPSAwO1xuICAgICAgbGV0IGRlc3Ryb3lDYWxsYmFjayA9IG51bGw7XG4gICAgICBjb25zdCBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX2dldFN0cmluZ09uV2FzbUhlYXAoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95SURDYXJkU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRBbGllblNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95QWxpZW5TY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldENyZWRpdFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95Q3JlZGl0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgaWYgKGFkZHJlc3MgPT09IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9PT0gdGhpcy5fX3JldHJ5Q291bnRHZXRBZGRyZXNzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBMaWNlbnNlIEtleScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcysrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFthZGRyZXNzLCBkZXN0cm95Q2FsbGJhY2tdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gOiBMaWNlbnNlIElzc3Vl7J24IOqyveyasCDsl5Drn6wg6rCS7J2EIOuwm+yVhOyEnCBlcnJvciDroZzqt7jrpbwg7LCN7J2EIOyImCDsnojqsowg7JqU7LKt7ZWE7JqUICjsnoTsi5wgTuuyiCDsnbTsg4EgYWRkcmVzc+ulvCDrqrvrsJvsnLzrqbQg6rCV7KCcIOyXkOufrClcbiAgICAgIHZvaWQgMDtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fZ2V0QnVmZmVyKCkge1xuICAgIGlmICghdGhpcy5fX0J1ZmZlcikge1xuICAgICAgdGhpcy5fX0J1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyh0aGlzLl9fcmVzb2x1dGlvbldpZHRoICogdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgKiA0KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9fcmVzdWx0QnVmZmVyKSB7XG4gICAgICB0aGlzLl9fcmVzdWx0QnVmZmVyID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKDQwOTYpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFza0luZm8pIHtcbiAgICAgIGlmICghdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmKSB7XG4gICAgICAgIHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1ZiA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyg0MDk2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt0aGlzLl9fQnVmZmVyLCB0aGlzLl9fcmVzdWx0QnVmZmVyLCB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWZdO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlLCBpbWdUeXBlID0gJ2NhcmQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpbWdUeXBlID09PSAnY2FyZCcpIHtcbiAgICAgICAgdGhpcy5fX09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKTtcbiAgICAgIH0gZWxzZSBpZiAoaW1nVHlwZSA9PT0gJ2ZhY2UnKSB7XG4gICAgICAgIHRoaXMuX19PQ1JFbmdpbmUuZW5jb2RlSnBnRGV0ZWN0ZWRQaG90b0ltYWdlKGFkZHJlc3MpO1xuICAgICAgfVxuICAgICAgY29uc3QganBnU2l6ZSA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ1NpemUoKTtcbiAgICAgIGNvbnN0IGpwZ1BvaW50ZXIgPSB0aGlzLl9fT0NSRW5naW5lLmdldEVuY29kZWRKcGdCdWZmZXIoKTtcbiAgICAgIGNvbnN0IHJlc3VsdFZpZXcgPSBuZXcgVWludDhBcnJheSh0aGlzLl9fT0NSRW5naW5lLkhFQVA4LmJ1ZmZlciwganBnUG9pbnRlciwganBnU2l6ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShyZXN1bHRWaWV3KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzdWx0XSwge1xuICAgICAgICB0eXBlOiAnaW1hZ2UvanBlZydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19ibG9iVG9CYXNlNjQoYmxvYik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95RW5jb2RlZEpwZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGcmVlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX0J1ZmZlcik7XG4gICAgICB0aGlzLl9fQnVmZmVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fX2Rlc3Ryb3lSZXN1bHRCdWZmZXIoKTtcbiAgICB0aGlzLl9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyKCk7XG4gIH1cbiAgX19kZXN0cm95UmVzdWx0QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fcmVzdWx0QnVmZmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19yZXN1bHRCdWZmZXIpO1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gICAgfVxuICB9XG4gIF9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmKTtcbiAgICAgIHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1ZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIEZyZWUgUHJldkltYWdlIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lQcmV2SW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuX19QcmV2SW1hZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX1ByZXZJbWFnZSk7XG4gICAgICB0aGlzLl9fUHJldkltYWdlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogZnJlZSBzdHJpbmcgaGVhcCBidWZmZXIgKi9cbiAgX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX3N0cmluZ09uV2FzbUhlYXApO1xuICAgICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBmcmVlIHNjYW5uZXIgYWRkcmVzcyAqL1xuICBfX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpIHtcbiAgICBpZiAodGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvRWxlbWVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgfSA9IGF3YWl0IHRoaXMuX19zZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KTtcbiAgICBpZiAoIWlzU3VwcG9ydGVkUmVzb2x1dGlvbikge1xuICAgICAgaWYgKHJlc29sdXRpb25UZXh0ICE9PSAnbm90IHJlYWR5Jykge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1N1cHBvcnRlZFJlc29sdXRpb247XG4gIH1cbiAgX19nZXRSb3RhdGlvbkRlZ3JlZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX19vcHRpb25zLnJvdGF0aW9uRGVncmVlICUgMzYwICsgMzYwKSAlIDM2MDtcbiAgfVxuICBfX2dldE1pcnJvck1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vcHRpb25zLm1pcnJvck1vZGU7XG4gIH1cbiAgYXN5bmMgX19jcm9wSW1hZ2VGcm9tVmlkZW8oKSB7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHJldHVybiBbbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgbGV0IFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuXG4gICAgLy8gc291cmNlIGltYWdlIChvciB2aWRlbylcbiAgICAvLyDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiiBzeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUg+KUiOKUiOKUiOKUiCDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDIHN4ICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIHNIZWlnaHQgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgZGVzdGluYXRpb24gY2FudmFzXG4gICAgLy8g4pSDICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAgICAgICAg4pSD4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgICAgICAgIOKUgyAgICDilIogICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgICAgICAgIHNXaWR0aCAgICAgICAgICAgICAgICAgICAgICDilIMgICAg4pSKIGR5ICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbICAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIPilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgIGR4ICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIGRIZWlnaHQg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgZFdpZHRoICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUm1xuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC9kcmF3SW1hZ2VcblxuICAgIGxldCBjYWxjQ2FudmFzID0gY2FudmFzO1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNDcm9wSW1hZ2VTaXplV2lkdGggPSB0aGlzLl9fY3JvcEltYWdlU2l6ZVdpZHRoO1xuICAgIGxldCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCA9IHRoaXMuX19jcm9wSW1hZ2VTaXplSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW2NhbGNDcm9wSW1hZ2VTaXplV2lkdGgsIGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0XSA9IFtjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCwgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aF07XG4gICAgICBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbY2FsY1Jlc29sdXRpb25faCwgY2FsY1Jlc29sdXRpb25fd107XG4gICAgICBjYWxjQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgY2FsY01heFNXaWR0aCA9IDk5OTk5O1xuICAgIGxldCBjYWxjTWF4U0hlaWdodCA9IDk5OTk5O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzeCwgc3k7XG4gICAgY29uc3QgcmF0aW8gPSBjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgKiByYXRpbyksIGNhbGNNYXhTSGVpZ2h0KTtcbiAgICBzeCA9IE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudFdpZHRoIC0gY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCkgLyAyICogcmF0aW8pO1xuICAgIHN5ID0gTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC0gY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQpIC8gMiAqIHJhdGlvKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgdGhpcy5fX2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCBkZWdyZWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoZGVncmVlID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoW2ltZ0RhdGEsIGltZ0RhdGFVcmxdKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9IGltZ0RhdGFVcmw7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAvLyBjYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgICAgY29uc3QgdGVtcENvbnRleHQgPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRlbXBDYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChbMCwgMTgwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gOTApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcuaGVpZ2h0LCAwKTtlbHNlIGlmIChkZWdyZWUgPT09IDE4MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy53aWR0aCwgaW1nLmhlaWdodCk7ZWxzZSBpZiAoZGVncmVlID09PSAyNzApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZSgwLCBpbWcud2lkdGgpO1xuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBjb25zdCBuZXdJbWFnZURhdGEgPSBbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSA/IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcuaGVpZ2h0LCBpbWcud2lkdGgpIDogdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgICAgIHJlc29sdmUoW25ld0ltYWdlRGF0YSwgdGVtcENhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKV0pO1xuICAgICAgICB0ZW1wQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIGJveFR5cGUgPSAwLCByZXRyeUltZyA9IG51bGwpIHtcbiAgICBpZiAoIWFkZHJlc3MgfHwgYWRkcmVzcyA8IDApIHtcbiAgICAgIHJldHVybiBbZmFsc2UsIG51bGxdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbGV0IGltZ0RhdGE7XG4gICAgICBsZXQgaW1nRGF0YVVybCA9IG51bGw7XG4gICAgICBjb25zdCBbYnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGlmIChyZXRyeUltZyAhPT0gbnVsbCkge1xuICAgICAgICBpbWdEYXRhID0gcmV0cnlJbWc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBbaW1nRGF0YSwgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9fY3JvcEltYWdlRnJvbVZpZGVvKCk7XG4gICAgICB9XG4gICAgICBpZiAoISEhaW1nRGF0YSkge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgYnVmZmVyKTtcbiAgICAgIGxldCBrb3IgPSBmYWxzZSxcbiAgICAgICAgYWxpZW4gPSBmYWxzZSxcbiAgICAgICAgcGFzc3BvcnQgPSBmYWxzZTtcbiAgICAgIHN3aXRjaCAodGhpcy5fX29jclR5cGUpIHtcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGtvciA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBwYXNzcG9ydCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhbGllbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICAgIH1cbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKGtvciB8fCBwYXNzcG9ydCB8fCBhbGllbikge1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmRldGVjdF9pZGNhcmRfb3B0KGJ1ZmZlciwgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIGFkZHJlc3MsIGtvciwgYWxpZW4sIHBhc3Nwb3J0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuZGV0ZWN0X2lkY2FyZChidWZmZXIsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCBhZGRyZXNzLCBib3hUeXBlKTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQ2FyZGJveERldGVjdGVkIHJlc3VsdCAtPS0tLS0tJywgcmVzdWx0KVxuICAgICAgcmV0dXJuIFshIXJlc3VsdCwgaW1nRGF0YSwgaW1nRGF0YVVybF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgc3NhTW9kZSwgaXNTZXRJZ25vcmVDb21wbGV0ZSwgaW1nRGF0YSwgaW1nRGF0YVVybCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWRkcmVzcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IGVsc2UgaWYgKGFkZHJlc3MgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnY2hlY2tWYWxpZGF0aW9uIEZhaWwnO1xuICAgICAgfVxuICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuX19vY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IHJlY29nbml0aW9uID0gYXN5bmMgaXNTZXRJZ25vcmVDb21wbGV0ZSA9PiB7XG4gICAgICAgIGlmIChpc1NldElnbm9yZUNvbXBsZXRlKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDAsIGltZ0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbklEQ2FyZChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuUGFzc3BvcnQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQWxpZW4oYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5DcmVkaXQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiDsi6DsmqnsubTrk5zripQg7JWE7KeBIGtleTp2YWx1ZSDtmJXtg5zroZwg67OA7ZmYIOyViOuQmOyWtCDsnojsnYxcbiAgICAgICAgaWYgKG9jclR5cGUgPT09ICdjcmVkaXQnKSB7XG4gICAgICAgICAgaWYgKG9jclJlc3VsdCA9PT0gbnVsbCB8fCBvY3JSZXN1bHQgPT09ICcnIHx8IG9jclJlc3VsdCA9PT0gJ2ZhbHNlJyB8fCBvY3JSZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19jc3ZUb09iamVjdChvY3JSZXN1bHQpO1xuICAgICAgICBpZiAob2NyUmVzdWx0Py5jb21wbGV0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgb2NyUmVzdWx0Py5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzU2V0SWdub3JlQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA8IHRoaXMuX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50KSB7XG4gICAgICAgICAgICAgIC8vIGRldGVjdGVkQ2FyZFF1ZXVl7JeQ7IScIO2VnOyepeydhCDqurzrgrTshJwg6rCx7Iug7ZWc64ukLlxuICAgICAgICAgICAgICAvLyDsoIDsnqXrkJjslrTsnojripQg7J2066+47KeA7J2YIOyIq+yekOqwgCByZXRyeSDrs7Tri6Qg7J6R7J2A6rK97JqwIOuMgOu5hO2VmOyXrCAl66W8IOyCrOyaqe2VqFxuICAgICAgICAgICAgICBjb25zdCBxdWV1ZUlkeCA9IHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50ICUgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgaW1nRGF0YSA9IHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZVtxdWV1ZUlkeF07XG4gICAgICAgICAgICAgIHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICAgIHJldHVybiBhd2FpdCByZWNvZ25pdGlvbihpc1NldElnbm9yZUNvbXBsZXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIOyCrOynhCDtlZzsnqXsnLzroZwgT0NSIOyLpO2MqCAocG9wdXAg64K066as6rOgIHNldElnbm9yZUNvbXBsZXRlKGZhbHNlKSDsspjrpqw/XG4gICAgICAgICAgICAgIHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7XG4gICAgICAgICAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpOyAvLyDtjJ3sl4XsnbQg64K066Ck6rCI65WMIOyymOumrOuQmOyngOunjCDrr7jrpqwg7LKY66asXG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCwgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS52aWRlbywge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyBlbmQgb2YgZnVuY3Rpb24gcmVjb2duaXRpb24oKVxuXG4gICAgICBpZiAoYXdhaXQgcmVjb2duaXRpb24oaXNTZXRJZ25vcmVDb21wbGV0ZSkpIHtcbiAgICAgICAgY29uc3QgaXNDcmVkaXRDYXJkID0gb2NyVHlwZSA9PT0gJ2NyZWRpdCc7XG4gICAgICAgIGxldCBvcmlnaW5JbWFnZSA9IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBmYWxzZSwgaXNDcmVkaXRDYXJkKTtcbiAgICAgICAgbGV0IG1hc2tJbWFnZSA9IGlzQ3JlZGl0Q2FyZCA/IG51bGwgOiBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIG1hc2tJbWFnZSA9IG1hc2tJbWFnZSA9PT0gJ2RhdGE6JyA/IG51bGwgOiBtYXNrSW1hZ2U7XG4gICAgICAgIGxldCBmYWNlSW1hZ2UgPSB0aGlzLl9fb3B0aW9ucy51c2VGYWNlSW1hZ2UgPyBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdHJ1ZSwgdHJ1ZSwgJ2ZhY2UnKSA6IG51bGw7XG4gICAgICAgIGlmIChzc2FNb2RlKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EsIGZhbHNlLCBtYXNrSW1hZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW29jclJlc3VsdCwgb3JpZ2luSW1hZ2UsIG1hc2tJbWFnZSwgZmFjZUltYWdlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGwsIG51bGwsIG51bGxdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAob2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMSkge1xuICAgICAgICAvLyBUT0RPOiB3b3JrZXLrpbwg7IKs7Jqp7ZWY7JesIOuplOyduChVSSDrnpzrjZTrp4EpIOyKpOugiOuTnOqwgCDrqYjstpTsp4Ag7JWK64+E66GdIOyymOumrCDtlYTsmpQgKO2YhOyerCBsb2FkaW5nIFVJIOudhOyasOuptCDslaDri4jrqZTsnbTshZgg66mI7LakKVxuICAgICAgICAvLyBUT0RPOiBzZXRUaW1lb3V0IOycvOuhnCDrgpjriITrjZTrnbzrj4Qg7Zqo6rO8IOyXhuydjCBzZXRUaW1lb3V0IOyngOyasOqzoCwgd29ya2Vy66GcIOuzgOqyvSDtlYTsmpRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLl9fT0NSRW5naW5lLnNjYW5UcnV0aChhZGRyZXNzLCByZXN1bHRCdWZmZXIpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NTQSBNb2RlIGlzIHRydWUuIGJ1dCwgb2NyVHlwZSBpcyBpbnZhbGlkIDogJyArIG9jclR5cGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX2NzdlRvT2JqZWN0KHN0cikge1xuICAgIGxldCBwYWlycyA9IHN0ci5zcGxpdCgnOycpO1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG4gICAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIG9ialtwYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgX19nZXRNYXNrSW5mbyhhZGRyZXNzKSB7XG4gICAgaWYgKGFkZHJlc3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAnY2hlY2tWYWxpZGF0aW9uIEZhaWwnO1xuICAgIH1cbiAgICBjb25zdCBbLCwgbWFza0luZm9SZXN1bHRCdWZdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIHJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0TWFza1JlY3QoYWRkcmVzcywgbWFza0luZm9SZXN1bHRCdWYpO1xuICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCByZXN1bHQgPT09ICcnKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5fX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpO1xuXG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9fY3N2VG9PYmplY3QocmVzdWx0KTtcbiAgfVxuICBhc3luYyBfX3N0YXJ0VHJ1dGhSZXRyeShvY3JUeXBlLCBhZGRyZXNzLCBpbWdEYXRhKSB7XG4gICAgYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDAsIGltZ0RhdGEpO1xuICAgIC8vIGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHRydWUpOyAgICAgIC8vIGZvciDshLHriqXsnYQg7JyE7ZW0IOynhO2WiSBYXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX19zdGFydFRydXRoKG9jclR5cGUsIGFkZHJlc3MpO1xuICB9XG4gIF9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy5fX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgYXN5bmMgX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy5fX29jclR5cGUuaW5jbHVkZXMoJ3Bhc3Nwb3J0Jyk7XG4gICAgICBhd2FpdCB0aGlzLl9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgIC8vIGNvbnN0IFt0cmFja10gPSB0aGlzLl9fc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW5fX2luaXRpYWxpemUgY2FwYWJpbGl0eScsIGNhcGFiaWxpdHkpO1xuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gdmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSB0aGlzLl9fc3RyZWFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEF2b2lkIHVzaW5nIHRoaXMgaW4gbmV3IGJyb3dzZXJzLCBhcyBpdCBpcyBnb2luZyBhd2F5LlxuICAgICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuX19zdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9IHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlby52aWRlb0hlaWdodCA8IDEgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgdmlkZW8ud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYW1lcmEgQWNjZXNzIFBlcm1pc3Npb24gaXMgbm90IGFsbG93ZWQnO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoJ0U0MDMnLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdOb3RSZWFkYWJsZUVycm9yJykge1xuICAgICAgICAvLyDri6Trpbjqs7Psl5DshJwg7Lm066mU6528IOyekOybkOydhCDsgqzsmqnspJFcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7IC8vIOyerOq3gCDtmLjstpxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfX3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIGlmIChlbCAmJiBzdHlsZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgc3R5bGUpO1xuICAgIH1cbiAgfVxuICBfX2NoYW5nZU9DUlN0YXR1cyh2YWwpIHtcbiAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgLy8gT0NSXG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuUkVBRFk6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUzpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQTpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLkRPTkU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2NoYW5nZVN0YWdlKHZhbCwgZm9yY2VVcGRhdGUgPSBmYWxzZSwgcmVjb2duaXplZEltYWdlID0gbnVsbCkge1xuICAgIGlmICh0aGlzLl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9PT0gdmFsICYmIGZvcmNlVXBkYXRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fY2hhbmdlT0NSU3RhdHVzKHZhbCk7XG4gICAgdGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB2YWw7XG4gICAgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIGNvbnN0IHtcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5zdHlsZSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXVxuICAgIH07XG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHN0eWxlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlKSB7XG4gICAgICBpZiAoISF0aGlzLl9fb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hc2tCb3hXcmFwPy5xdWVyeVNlbGVjdG9yKCcjbWFza0JveE91dGVyJyk/LnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlW3ZhbF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB7XG4gICAgICBjYXB0dXJlQnV0dG9uPy5xdWVyeVNlbGVjdG9yKCcjY2FwdHVyZUJ1dHRvbicpPy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLl9fb3B0aW9ucy5jYXB0dXJlQnV0dG9uU3R5bGVbJ2Jhc2VfY29sb3InXSk7XG4gICAgfVxuICAgIGNvbnN0IG9jck1vZGUgPSB0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUgPyAnc2VydmVyJyA6ICd3YXNtJztcbiAgICBpZiAodGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVRvcFVJIHx8IHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgb2NyTW9kZSwgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX3RvcFVJLCAndG9wJywgdGhpcy5fX29wdGlvbnMudXNlVG9wVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUksIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIG9jck1vZGUsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX19taWRkbGVVSSwgJ21pZGRsZScsIHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCBvY3JNb2RlLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fYm90dG9tVUksICdib3R0b20nLCB0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSwgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MgfHwgdmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSk7XG5cbiAgICAgICAgLy8gRkFJTOyduCDqsr3smrAgNey0iO2bhCDsnpDrj5nsnYQg7LC964ur7J2MXG4gICAgICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVEKSB7XG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLl9faGlkZVByZXZpZXdVSSwgMzAwMCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX19oaWRlUHJldmlld1VJKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxKTsgLy8gZm9yIFVJIHVwZGF0ZVxuICB9XG5cbiAgX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSByZWNvZ25pemVkSW1hZ2U7XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICAnbWF4LXdpZHRoJzogJzcwJScsXG4gICAgICAnbWF4LWhlaWdodCc6ICc2MCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld0ltYWdlLCBpbWdTdHlsZSk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0pO1xuICB9XG4gIF9faGlkZVByZXZpZXdVSShjb250ZXh0KSB7XG4gICAgbGV0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIF90aGlzXyA9IGNvbnRleHQ7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIF90aGlzXy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSk7XG4gICAgX3RoaXNfLl9fc2V0U3R5bGUocHJldmlld1VJV3JhcCwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG4gICAgcHJldmlld0ltYWdlLnNyYyA9ICcnO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW5wdXREZXZpY2VzKGtpbmQsIGxhYmVsKSB7XG4gICAgLy8gdGhyb3cgZXJyb3IgaWYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IHtcbiAgICAgIGlmIChkZXZpY2Uua2luZCA9PT0gYCR7a2luZH1pbnB1dGAgJiYgZGV2aWNlLmdldENhcGFiaWxpdGllcykge1xuICAgICAgICBjb25zdCBjYXAgPSBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIGlmIChjYXA/LmZhY2luZ01vZGU/LmluY2x1ZGVzKHRoaXMuX19mYWNpbmdNb2RlQ29uc3RyYWludCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiB2aWRlb0RldmljZXMubGVuZ3RoIDw9IDEgPyB2aWRlb0RldmljZXMgOiB2aWRlb0RldmljZXMuZmlsdGVyKGRldmljZSA9PiBsYWJlbCA/IGRldmljZS5sYWJlbC5pbmNsdWRlcyhsYWJlbCkgOiB0cnVlKTtcbiAgfVxuICBjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLl9fdWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBpc0NoYW5nZWRcbiAgICB9O1xuICB9XG4gIF9fY2xlYXJDdXN0b21VSShvYmopIHtcbiAgICBvYmouaW5uZXJIVE1MID0gJyc7XG4gICAgb2JqLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShvYmosIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9fc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZSxcbiAgICAgIHN3aXRjaFVJV3JhcCxcbiAgICAgIHN3aXRjaFVJXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKCFvY3IpIHRocm93IG5ldyBFcnJvcignb2NyIGRpdiBlbGVtZW50IGlzIG5vdCBleGlzdCcpO1xuICAgIGlmICh2aWRlb1dyYXApIHZpZGVvV3JhcC5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3hXcmFwKSBndWlkZUJveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHZpZGVvKSB2aWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY2FudmFzKSBjYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKHJvdGF0aW9uQ2FudmFzKSByb3RhdGlvbkNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3gpIGd1aWRlQm94LnJlbW92ZSgpO1xuICAgIGlmIChtYXNrQm94V3JhcCkgbWFza0JveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKSBwcmV2ZW50VG9GcmVlemVWaWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY3VzdG9tVUlXcmFwKSBjdXN0b21VSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8g6rCBIHRvcCwgbWlkZGxlLCBib3R0b20gVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmICh0b3BVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlVG9wVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKHRvcFVJKTtcbiAgICBpZiAobWlkZGxlVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShtaWRkbGVVSSk7XG4gICAgaWYgKGJvdHRvbVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkoYm90dG9tVUkpO1xuICAgIGlmIChjYXB0dXJlVUlXcmFwKSBjYXB0dXJlVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIGNhcHR1cmUgVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmIChjYXB0dXJlVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkoY2FwdHVyZVVJKTtcbiAgICBpZiAocHJldmlld1VJV3JhcCkgcHJldmlld1VJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBwcmV2aWV3IFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAocHJldmlld1VJICYmICF0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKHByZXZpZXdVSSk7XG4gICAgaWYgKHN3aXRjaFVJV3JhcCkgc3dpdGNoVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIHN3aXRjaCBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHN3aXRjaFVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUpIHRoaXMuX19jbGVhckN1c3RvbVVJKHN3aXRjaFVJKTtcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZSA9IHRoaXMuX19nZXRSb3RhdGlvbkRlZ3JlZSgpO1xuICAgIHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID0gWzkwLCAyNzBdLmluY2x1ZGVzKHJvdGF0aW9uRGVncmVlKTtcbiAgICBsZXQgb2NyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShvY3IsIG9jclN0eWxlKTtcbiAgICBjb25zdCB3cmFwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIC8vIHZlcnRpY2FsIGFsaWduIG1pZGRsZVxuICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfTtcbiAgICB2aWRlb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWRlb1dyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvV3JhcCcpO1xuICAgIGlmICh2aWRlb1dyYXApIHtcbiAgICAgIHdoaWxlICh2aWRlb1dyYXAuZmlyc3RDaGlsZCkge1xuICAgICAgICB2aWRlb1dyYXAucmVtb3ZlQ2hpbGQodmlkZW9XcmFwLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW9XcmFwLCB3cmFwU3R5bGUpO1xuICAgIH1cbiAgICBvY3IuYXBwZW5kQ2hpbGQodmlkZW9XcmFwKTtcbiAgICBtYXNrQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtYXNrQm94V3JhcCcpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShtYXNrQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBsZXQgbWFza19mcmFtZSA9IHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlLmJhc2VfY29sb3IgKyAnZmYnO1xuICAgIGlmICghIXRoaXMuX19vcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZS5jbGlwX2ZyYW1lICsgJzU1JztcbiAgICB9XG4gICAgbWFza0JveFdyYXAuaW5uZXJIVE1MID0gJycgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyAnICAgICAgPC9zdmc+XFxuJyArICcgICAgPC9tYXNrPlxcbicgKyBcIiAgICA8cmVjdCBpZD0nbWFza0JveE91dGVyJ1xcblwiICsgXCIgICAgICAgICAgeD0nMCcgeT0nMCcgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJSdcXG5cIiArIFwiICAgICAgICAgIGZpbGw9J1wiICsgbWFza19mcmFtZSArIFwiJyBtYXNrPSd1cmwoI21hc2stcmVjdCknPjwvcmVjdD5cXG5cIiArICcgIDwvc3ZnPic7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVBbmRNaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVDc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX19nZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICB0cmFuc2Zvcm06IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHZpZGVvU3R5bGUpO1xuICAgIHZpZGVvV3JhcC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgZ3VpZGVCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3VpZGVCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveFdyYXAnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChndWlkZUJveFdyYXApO1xuICAgIGd1aWRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94Jyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdub25lJyA6ICdkaXNwbGF5JyA6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzBweCcsXG4gICAgICB0b3A6ICczMHB4JyxcbiAgICAgIGJvcmRlcjogJ2dyZWVuIDJweCBzb2xpZCdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByb3RhdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJvdGF0aW9uQ2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdyb3RhdGlvbkNhbnZhcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShyb3RhdGlvbkNhbnZhcywge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdkaXNwbGF5JyA6ICdub25lJyA6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnYmx1ZSAycHggc29saWQnXG4gICAgfSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHJvdGF0aW9uQ2FudmFzKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2ZW50VG9GcmVlemVWaWRlbywge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206ICcxMCcsXG4gICAgICByaWdodDogJzEwJ1xuICAgIH0pO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLmlubmVySFRNTCA9ICcnICsgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHN0eWxlPVwibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1wiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIj5cXG4nICsgJyAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjAuNTU1NTU1NTU1NTU1NTU1NnNcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsxXCIgdmFsdWVzPVwiMTA7MFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMVwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImZpbGxcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJkaXNjcmV0ZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCIxNlwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0wLjU1NTU1NTU1NTU1NTU1NTZzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiODRcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuMTExMTExMTExMTExMTExMnNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS4xMTExMTExMTExMTExMTEyc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCIxNlwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS42NjY2NjY2NjY2NjY2NjY1c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjY2NjY2NjY2NjY2NjY2NjVzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nO1xuICAgICc8L3N2Zz4nO1xuICAgIG9jci5hcHBlbmRDaGlsZChwcmV2ZW50VG9GcmVlemVWaWRlbyk7XG4gICAgY3VzdG9tVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VzdG9tVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjdXN0b21VSVdyYXAnKTtcbiAgICBjb25zdCBjdXN0b21VSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY3VzdG9tVUlXcmFwLCBjdXN0b21VSVdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGN1c3RvbVVJV3JhcCk7XG5cbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSSDsgqzsmqkodXNlKeyXrOu2gOyZgCDqtIDqs4Tsl4bsnbQg7JiB7Jet7J2EIOyeoeq4sCDsnITtlbQsIGRpduqwgCDsl4bsnLzrqbQg7IOd7ISxXG4gICAgLy8gYWRqdXN0U3R5bGUoKSDsl5DshJwg7IS467aA7KCB7J24IOyCrOydtOymiOyZgCDsnITsuZjqsJIg64+Z7KCB7Jy866GcIOyEpOygleuQqC5cbiAgICBpZiAoIXRvcFVJKSB7XG4gICAgICB0b3BVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3RvcFVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZCh0b3BVSSk7XG4gICAgaWYgKCFtaWRkbGVVSSkge1xuICAgICAgbWlkZGxlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtaWRkbGVVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQobWlkZGxlVUkpO1xuICAgIGlmICghYm90dG9tVUkpIHtcbiAgICAgIGJvdHRvbVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib3R0b21VSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnYm90dG9tVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKGJvdHRvbVVJKTtcbiAgICBjYXB0dXJlVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FwdHVyZVVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FwdHVyZVVJV3JhcCcpO1xuICAgIGNvbnN0IGNhcHR1cmVVSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjZW50ZXInXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJV3JhcCwgY2FwdHVyZVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FwdHVyZVVJV3JhcCk7XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkge1xuICAgICAgaWYgKHRoaXMuX19pc1N3aXRjaFRvU2VydmVyTW9kZSB8fCB0aGlzLl9fb3B0aW9ucy51c2VGb3JjZUNvbXBsZXRlVUkpIHtcbiAgICAgICAgaWYgKCFjYXB0dXJlVUkpIHtcbiAgICAgICAgICBjYXB0dXJlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBjYXB0dXJlVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhcHR1cmVVSScpO1xuICAgICAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYXB0dXJlQnV0dG9uKSB7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhcHR1cmVCdXR0b24nKTtcbiAgICAgICAgICBsZXQgY2FwdHVyZUJ1dHRvblNyY1NWRyA9IGBgO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b25TcmNTVkcgKz0gYDxzdmcgd2lkdGg9JzgwJyBoZWlnaHQ9JzgwJyB2aWV3Qm94PScwIDAgODAgODAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+YDtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uU3JjU1ZHICs9IGAgIDxjaXJjbGUgaWQ9J2NhcHR1cmVCdXR0b24nIGN4PSc0MCcgY3k9JzQwJyByPSczOCcgZmlsbD0nIzU1NTU1NScgc3Ryb2tlPScjZmZmZmZmJyBzdHJva2Utd2lkdGg9JzQnLz5gO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b25TcmNTVkcgKz0gYDwvc3ZnPmA7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvbi5pbm5lckhUTUwgPSBjYXB0dXJlQnV0dG9uU3JjU1ZHO1xuICAgICAgICAgIGNhcHR1cmVVSS5hcHBlbmRDaGlsZChjYXB0dXJlQnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlVUlXcmFwLmFwcGVuZENoaWxkKGNhcHR1cmVVSSk7XG4gICAgICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IF9fb25DbGlja0NhcHR1cmVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzXy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAgICAgICBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIF90aGlzXy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIF90aGlzXy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudmlkZW8sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzXy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY2FwdHVyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fb25DbGlja0NhcHR1cmVCdXR0b24pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICBwcmV2aWV3VUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcmV2aWV3VUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUlXcmFwJyk7XG4gICAgICBjb25zdCBwcmV2aWV3VUlXcmFwU3R5bGUgPSB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzAwMDAwMGFhJ1xuICAgICAgfTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCBwcmV2aWV3VUlXcmFwU3R5bGUpO1xuICAgICAgb2NyLmFwcGVuZENoaWxkKHByZXZpZXdVSVdyYXApO1xuICAgICAgaWYgKCFwcmV2aWV3VUkpIHtcbiAgICAgICAgcHJldmlld1VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByZXZpZXdVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld1VJJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJLCB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgJ21heC13aWR0aCc6ICc5MCUnLFxuICAgICAgICAnbWF4LWhlaWdodCc6ICc5MCUnXG4gICAgICB9KTtcbiAgICAgIHByZXZpZXdVSVdyYXAuYXBwZW5kQ2hpbGQocHJldmlld1VJKTtcbiAgICAgIGlmICghcHJldmlld0ltYWdlKSB7XG4gICAgICAgIHByZXZpZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdJbWFnZScpO1xuICAgICAgICBwcmV2aWV3VUkuYXBwZW5kQ2hpbGQocHJldmlld0ltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZSkge1xuICAgICAgc3dpdGNoVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzd2l0Y2hVSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3N3aXRjaFVJV3JhcCcpO1xuICAgICAgY29uc3Qgc3dpdGNoVUlXcmFwU3R5bGUgPSB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJycsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICAgIH07XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoc3dpdGNoVUlXcmFwLCBzd2l0Y2hVSVdyYXBTdHlsZSk7XG4gICAgICBvY3IuYXBwZW5kQ2hpbGQoc3dpdGNoVUlXcmFwKTtcbiAgICAgIGlmICghc3dpdGNoVUkpIHtcbiAgICAgICAgc3dpdGNoVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3dpdGNoVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3N3aXRjaFVJJyk7XG4gICAgICAgIGxldCBzd2l0Y2hIVE1MID0gYGA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYDxkaXYgY2xhc3M9J2N1c3RvbS0tbGFiZWwgZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgZ2FwMTAnPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgPGxhYmVsIGZvcj0nbWFudWFsLXN3aXRjaC13YXNtLXRvLXNlcnZlci1jaGVja2JveCc+V0FTTTwvbGFiZWw+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8bGFiZWwgY2xhc3M9J3N3aXRjaCc+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICAgIDxpbnB1dCBpZD0nbWFudWFsLXN3aXRjaC13YXNtLXRvLXNlcnZlci1jaGVja2JveCcgdHlwZT0nY2hlY2tib3gnPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgICA8c3BhbiBjbGFzcz0nc2xpZGVyIHJvdW5kJz48L3NwYW4+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8L2xhYmVsPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgPGxhYmVsIGZvcj0ncHJpb3JpdHktZmluYW5jZS1jb2h0bWxGb3JsaXN0LWNoZWNrYm94Jz5TZXJ2ZXI8L2xhYmVsPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYDwvZGl2PmA7XG4gICAgICAgIHN3aXRjaFVJLmlubmVySFRNTCA9IHN3aXRjaEhUTUw7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoc3dpdGNoVUksIHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9KTtcbiAgICAgIHN3aXRjaFVJV3JhcC5hcHBlbmRDaGlsZChzd2l0Y2hVSSk7XG4gICAgICBjb25zdCBzd2l0Y2hDaGVja2JveCA9IHN3aXRjaFVJLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xuICAgICAgY29uc3QgX3RoaXNfID0gdGhpcztcbiAgICAgIGNvbnN0IF9fb25DbGlja1N3aXRjaFVJID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzXy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGF3YWl0IF90aGlzXy5yZXN0YXJ0T0NSKF90aGlzXy5fX29jclR5cGUsIF90aGlzXy5fX29uU3VjY2VzcywgX3RoaXNfLl9fb25GYWlsdXJlLCBfdGhpc18uX19vbkluUHJvZ3Jlc3NDaGFuZ2UsIHRydWUpO1xuICAgICAgfTtcbiAgICAgIHN3aXRjaENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19vbkNsaWNrU3dpdGNoVUksIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbG9hZGluZyBVSSDsnITsuZgg7J6Q66as7J6h6rKMIO2VmOq4sCDsnITtlbRcbiAgICBhd2FpdCB0aGlzLl9fYWRqdXN0U3R5bGUodHJ1ZSk7XG5cbiAgICAvLyDtmZTrqbTqs7zrj4Qg7ZiE7IOBIO2VtOqysFxuICAgIHRoaXMuX19zZXRTdHlsZShvY3IsIHtcbiAgICAgIGRpc3BsYXk6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5fX29jciA9IG9jcjtcbiAgICB0aGlzLl9fY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuX19yb3RhdGlvbkNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgIHRoaXMuX192aWRlbyA9IHZpZGVvO1xuICAgIHRoaXMuX192aWRlb1dyYXAgPSB2aWRlb1dyYXA7XG4gICAgdGhpcy5fX2d1aWRlQm94ID0gZ3VpZGVCb3g7XG4gICAgdGhpcy5fX2d1aWRlQm94V3JhcCA9IGd1aWRlQm94V3JhcDtcbiAgICB0aGlzLl9fbWFza0JveFdyYXAgPSBtYXNrQm94V3JhcDtcbiAgICB0aGlzLl9fcHJldmVudFRvRnJlZXplVmlkZW8gPSBwcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgICB0aGlzLl9fY3VzdG9tVUlXcmFwID0gY3VzdG9tVUlXcmFwO1xuICAgIHRoaXMuX190b3BVSSA9IHRvcFVJO1xuICAgIHRoaXMuX19taWRkbGVVSSA9IG1pZGRsZVVJO1xuICAgIHRoaXMuX19ib3R0b21VSSA9IGJvdHRvbVVJO1xuICAgIHRoaXMuX19jYXB0dXJlVUlXcmFwID0gY2FwdHVyZVVJV3JhcDtcbiAgICB0aGlzLl9fY2FwdHVyZVVJID0gY2FwdHVyZVVJO1xuICAgIHRoaXMuX19jYXB0dXJlQnV0dG9uID0gY2FwdHVyZUJ1dHRvbjtcbiAgICB0aGlzLl9fcHJldmlld1VJV3JhcCA9IHByZXZpZXdVSVdyYXA7XG4gICAgdGhpcy5fX3ByZXZpZXdVSSA9IHByZXZpZXdVSTtcbiAgICB0aGlzLl9fcHJldmlld0ltYWdlID0gcHJldmlld0ltYWdlO1xuICAgIHRoaXMuX19zd2l0Y2hVSVdyYXAgPSBzd2l0Y2hVSVdyYXA7XG4gICAgdGhpcy5fX3N3aXRjaFVJID0gc3dpdGNoVUk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9jcixcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgdmlkZW8sXG4gICAgICB2aWRlb1dyYXAsXG4gICAgICBndWlkZUJveCxcbiAgICAgIGd1aWRlQm94V3JhcCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgcHJldmVudFRvRnJlZXplVmlkZW8sXG4gICAgICBjdXN0b21VSVdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlXcmFwLFxuICAgICAgY2FwdHVyZVVJLFxuICAgICAgY2FwdHVyZUJ1dHRvbixcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2UsXG4gICAgICBzd2l0Y2hVSVdyYXAsXG4gICAgICBzd2l0Y2hVSVxuICAgIH07XG4gIH1cbiAgX19ibHVyQ2FwdHVyZUJ1dHRvbigpIHtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS52aWRlbywge1xuICAgICAgZGlzcGxheTogJydcbiAgICB9KTtcbiAgICBjb25zdCB7XG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhcHR1cmVCdXR0b24pIHtcbiAgICAgIGNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJywgJ2ZhbHNlJyk7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIF9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgcmV0dXJuIGNhcHR1cmVCdXR0b24gPyBjYXB0dXJlQnV0dG9uLmdldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcpID09PSAndHJ1ZScgOiBmYWxzZTtcbiAgfVxuICBhc3luYyBfX3NldHVwVmlkZW8oaXNQYXNzcG9ydCkge1xuICAgIC8vIHdhc20g7J247Iud7ISx64qlIOy1nOygge2ZlOuQnCDtlbTsg4Hrj4RcbiAgICB0aGlzLl9fcmVzb2x1dGlvbldpZHRoID0gMTA4MDtcbiAgICB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCA9IDcyMDtcbiAgICB0aGlzLl9fY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IGF3YWl0IHRoaXMuX19zZXR1cERvbUVsZW1lbnRzKCk7XG4gICAgbGV0IHZpZGVvRGV2aWNlcyA9IGF3YWl0IHRoaXMuX19nZXRJbnB1dERldmljZXMoJ3ZpZGVvJyk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvRGV2aWNlcyA6OiAnLCB2aWRlb0RldmljZXMpXG4gICAgbGV0IGRldmljZUlkTGlzdCA9IHZpZGVvRGV2aWNlcy5tYXAoZGV2aWNlID0+IGRldmljZS5kZXZpY2VJZCk7XG4gICAgdGhpcy5jaGVja1VJT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29uc3RyYWludFdpZHRoLCBjb25zdHJhaW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgLy8gdWkgOiBwb3J0cmFpdFxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogMTA4MCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcblxuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDcyMCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdWkgOiBsYW5kc2NhcGVcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIG1pbjogMTI4MFxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICBtaW46IDcyMFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB2aWRlbzoge1xuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgaWRlYWw6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZmFjaW5nTW9kZToge1xuICAgICAgICAgIGlkZWFsOiB0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnRcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICB3aGl0ZUJhbGFuY2VNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2VJZDogdmlkZW9EZXZpY2VzLmxlbmd0aCA/IHtcbiAgICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0W2RldmljZUlkTGlzdC5sZW5ndGggLSAxXVxuICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgd2lkdGg6IGNvbnN0cmFpbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb25zdHJhaW50SGVpZ2h0XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOy1nOy0iCDsp4TsnoUg7J207Ja07IScIHZpZGVvRGVpdmNlIOumrOyKpO2KuOulvCDqsIDsoLjsmKwg7IiYIOyXhuycvOuptCxcbiAgICAvLyBnZXRVc2VyTWVkaWHrpbwg7J6E7J2YIO2YuOy2nO2VmOyXrCDqtoztlZzsnYQg67Cb7J2A65KkIOuLpOyLnCDqsIDsoLjsmLRcbiAgICBpZiAodmlkZW9EZXZpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgdmlkZW9EZXZpY2VzID0gYXdhaXQgdGhpcy5fX2dldElucHV0RGV2aWNlcygndmlkZW8nKTtcbiAgICAgIGRldmljZUlkTGlzdCA9IHZpZGVvRGV2aWNlcy5tYXAoZGV2aWNlID0+IGRldmljZS5kZXZpY2VJZCk7XG4gICAgICBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCA9IHZpZGVvRGV2aWNlcy5sZW5ndGggPyB7XG4gICAgICAgIGlkZWFsOiBkZXZpY2VJZExpc3RbZGV2aWNlSWRMaXN0Lmxlbmd0aCAtIDFdXG4gICAgICB9IDogbnVsbDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0IGR1bXB0cmFjayA9IChbYSwgYl0sIHRyYWNrKSA9PlxuICAgICAgLy8gICBgJHthfSR7dHJhY2sua2luZCA9PSAndmlkZW8nID8gJ0NhbWVyYScgOiAnTWljcm9waG9uZSd9ICgke3RyYWNrLnJlYWR5U3RhdGV9KTogJHt0cmFjay5sYWJlbH0ke2J9YDtcblxuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvVHJhY2tzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpKVxuICAgICAgLy8gY29uc3Qgc3RyZWFtU2V0dGluZ3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRTZXR0aW5ncygpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbUNhcGFiaWxpdGllcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDYXBhYmlsaXRpZXMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q29uc3RyYWludHMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1TZXR0aW5ncyA6OiAnLCBzdHJlYW1TZXR0aW5ncylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCAvIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGggLyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBhc3BlY3RSYXRpbyA6OiAnICsgc3RyZWFtU2V0dGluZ3MuYXNwZWN0UmF0aW8pO1xuXG4gICAgICBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgW3JvdGF0aW9uQ2FudmFzLndpZHRoLCByb3RhdGlvbkNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoXTtcbiAgICAgIH1cbiAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgIHRoaXMuX19zdHJlYW0gPSBzdHJlYW07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19hZGp1c3RTdHlsZShpc0ZpcnN0Q2FsbGVkID0gZmFsc2UpIHtcbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgY2FwdHVyZVVJV3JhcCxcbiAgICAgIGNhcHR1cmVVSSxcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KTtcblxuICAgIC8vIOq4sOykgOygleuztFxuICAgIGNvbnN0IGJhc2VXaWR0aCA9IDQwMDtcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMjYwO1xuICAgIGNvbnN0IHNjYW5uZXJGcmFtZVJhdGlvID0gYmFzZUhlaWdodCAvIGJhc2VXaWR0aDsgLy8g7Iug67aE7KadIOu5hOycqFxuXG4gICAgbGV0IGd1aWRlQm94V2lkdGgsIGd1aWRlQm94SGVpZ2h0O1xuICAgIGxldCBjYWxjT2NyQ2xpZW50V2lkdGggPSBvY3IuY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRIZWlnaHQgPSBvY3IuY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb247XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW2NhbGNWaWRlb1dpZHRoLCBjYWxjVmlkZW9IZWlnaHRdID0gW2NhbGNWaWRlb0hlaWdodCwgY2FsY1ZpZGVvV2lkdGhdO1xuICAgICAgW2NhbGNWaWRlb0NsaWVudFdpZHRoLCBjYWxjVmlkZW9DbGllbnRIZWlnaHRdID0gW2NhbGNWaWRlb0NsaWVudEhlaWdodCwgY2FsY1ZpZGVvQ2xpZW50V2lkdGhdO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgbGV0IG5ld1ZpZGVvV2lkdGggPSBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBsZXQgbmV3VmlkZW9IZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSB0aGlzLl9fZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgY29uc3QgdmlkZW9SYXRpb0J5SGVpZ2h0ID0gdGhpcy5fX3ZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIC8vIOyEuOuhnCBVSVxuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSVdyYXAsIHtcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnZmxleC1lbmQnXG4gICAgICB9KTtcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7Lm066mU652864+EIOyEuOuhnFxuICAgICAgICAvLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDruYTrlJTsmKQg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSVxuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSVdyYXAsIHtcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdlbmQnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJ1xuICAgICAgfSk7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOu5hOuUlOyYpOulvCDqsIDroZwgVUnsnZggaGVpZ2h0IOq4sOykgOycvOuhnCDspITsnbTqs6BcbiAgICAgICAgLy8g6rCA66GcIFVJIGhlaWdodCDquLDspIDsnLzroZwg67mE65SU7Jik7J2YIHdpZHRoIOqzhOyCsFxuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IGNhbGNPY3JDbGllbnRIZWlnaHQgKiB2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBuZXdWaWRlb0hlaWdodCAqIChjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0hlaWdodCk7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk64qUIOu5hOuUlOyYpOulvCDshLjroZwg6riw7KSA7Jy866GcIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IG5ld1ZpZGVvSGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCDqsIDroZwg7YGs6riw6rCAIOqwgOuhnCBVSSB3aWR0aCAqIHJhdGlvIOqwkuuztOuLpCDtgazrqbQsXG4gICAgICAgIGlmIChndWlkZUJveFdpZHRoID4gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGgpIHtcbiAgICAgICAgICAvLyDqs4TsgrAg67Cp7Iud7J2EIOuwlOq+vOuLpCAo7IKs7JygIDog6rGw7J2YIOygleyCrOqwge2YleyXkCDqsIDquYzsmrQg6rK97JqwIOqwgOydtOuTnCDrsJXsiqQg6rCA66Gc6rCAIOq9ieywqOqyjCDrkKguKVxuICAgICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7ZmV64yAXG4gICAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIGhlaWdodCDtgazquLDrpbwgVUnsnZggaGVpZ2h0IOq4sOykgOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCDqsIDroZwg7YGs6riw6rCAIOqwgOuhnCBVSSB3aWR0aCAqIHJhdGlvIOqwkuuztOuLpCDtgazrqbQsXG4gICAgICAgIGlmIChndWlkZUJveFdpZHRoID4gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGgpIHtcbiAgICAgICAgICAvLyDqs4TsgrAg67Cp7Iud7J2EIOuwlOq+vOuLpCAo7IKs7JygIDog6rGw7J2YIOygleyCrOqwge2YleyXkCDqsIDquYzsmrQg6rK97JqwIOqwgOydtOuTnCDrsJXsiqQg6rCA66Gc6rCAIOq9ieywqOqyjCDrkKguKVxuICAgICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7LaV7IaMXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiAoY2FsY1ZpZGVvSGVpZ2h0IC8gY2FsY1ZpZGVvV2lkdGgpO1xuICAgICAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBndWlkZUJveFdpZHRoICs9IGJvcmRlcldpZHRoICogMjtcbiAgICBndWlkZUJveEhlaWdodCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aCA9IE1hdGgubWluKGd1aWRlQm94V2lkdGgsIG5ld1ZpZGVvV2lkdGgpO1xuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplSGVpZ2h0ID0gTWF0aC5taW4oZ3VpZGVCb3hIZWlnaHQsIG5ld1ZpZGVvSGVpZ2h0KTtcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94V2lkdGggKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveEhlaWdodCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGlmICh0b3BVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHRvcFVJLCB7XG4gICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcxMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobWlkZGxlVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShtaWRkbGVVSSwge1xuICAgICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogJzEwcHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobmV3VmlkZW9XaWR0aCAhPT0gY2FsY1ZpZGVvQ2xpZW50V2lkdGgpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICB3aWR0aDogbmV3VmlkZW9XaWR0aCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobmV3VmlkZW9IZWlnaHQgIT09IGNhbGNWaWRlb0NsaWVudEhlaWdodCkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIGhlaWdodDogbmV3VmlkZW9IZWlnaHQgKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgdmlkZW9Jbm5lckdhcCA9IDI7IC8vIOuvuOyEuO2VmOqyjCBtYXNrQm94SW5uZXLrs7Tri6QgZ3VpZGVCb3jqsIAg7J6R7J2A6rKDIOuztOyglVxuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwge1xuICAgICAgd2lkdGg6IHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBoZWlnaHQ6IHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgfSk7XG4gICAgY29uc3QgbWFza0JveElubmVyID0gbWFza0JveFdyYXAucXVlcnlTZWxlY3RvcignI21hc2tCb3hJbm5lcicpO1xuICAgIGxldCByID0gYm9yZGVyUmFkaXVzIC0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHIgPSByIDwgMCA/IDAgOiByO1xuICAgIGlmICghaXNOYU4ocmVkdWNlZEd1aWRlQm94V2lkdGgpICYmICFpc05hTihyZWR1Y2VkR3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lckhlaWdodCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBtYXNrQm94SW5uZXJXaWR0aCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIG1hc2tCb3hJbm5lckhlaWdodCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3gnLCBtYXNrQm94SW5uZXJXaWR0aCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3knLCBtYXNrQm94SW5uZXJIZWlnaHQgLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIHIgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeScsIHIgKyAnJyk7XG4gICAgfVxuXG4gICAgLy8g7IiY64+ZIOy0rOyYgSBVSSDsgqzsmqlcbiAgICAvLyBmaXJzdENhbGxlZOyduCDqsr3smrAg7JWE7KeBIGNhcHR1cmVVSeqwgCDqt7jroKTsp4Dsp4Ag7JWK7JWEIOustOydmOuvuFxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkgJiYgIWlzRmlyc3RDYWxsZWQpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnICYmIGJvdHRvbVVJICYmIGNhcHR1cmVVSSkge1xuICAgICAgICBjb25zdCBjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXMgPSB0aGlzLl9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2Rlcyhib3R0b21VSSk7XG4gICAgICAgIGxldCBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9IGNhcHR1cmVCdXR0b24ucXVlcnlTZWxlY3Rvcignc3ZnJykuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPSBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9PT0gMCA/IDgwIDogY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQ7XG4gICAgICAgIGxldCBjYXB0dXJlVUlQYWRkaW5nQm90dG9tID0gYm90dG9tVUkuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIC09IGlzTmFOKHBhcnNlSW50KGJvdHRvbVVJLnN0eWxlLnBhZGRpbmdUb3ApKSA/IDAgOiBwYXJzZUludChib3R0b21VSS5zdHlsZS5wYWRkaW5nVG9wKTtcbiAgICAgICAgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSAtPSBjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXM7XG4gICAgICAgIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gLT0gY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQ7XG4gICAgICAgIGNvbnN0IGJhc2VsaW5lID0gY2FsY09jckNsaWVudEhlaWdodCAtIChjYWxjT2NyQ2xpZW50SGVpZ2h0IC8gMiArIGd1aWRlQm94SGVpZ2h0IC8gMik7XG4gICAgICAgIGlmIChjYXB0dXJlVUlQYWRkaW5nQm90dG9tID4gMCAmJiBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIDwgYmFzZWxpbmUpIHtcbiAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgICAgICAncGFkZGluZy1yaWdodCc6ICcnLFxuICAgICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgICdwYWRkaW5nLXJpZ2h0JzogJzEwcHgnLFxuICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0cnVlKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19jYWxjU3VtT2ZIZWlnaHRDaGlsZE5vZGVzKG9iaikge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBvYmo/LmNoaWxkTm9kZXMpIHtcbiAgICAgIHN1bSArPSBpdGVtLmNsaWVudEhlaWdodCA/IGl0ZW0uY2xpZW50SGVpZ2h0IDogMDtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfVxuICBfX2Nsb3NlQ2FtZXJhKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cbiAgYXN5bmMgX19sb2FkUmVzb3VyY2VzKCkge1xuICAgIHZvaWQgMDtcbiAgICBpZiAodGhpcy5fX3Jlc291cmNlc0xvYWRlZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9faXNTdXBwb3J0U2ltZCA9IGF3YWl0IHNpbWQoKTtcbiAgICBsZXQgZW52SW5mbyA9ICcnO1xuICAgIGVudkluZm8gKz0gYG9zIDogJHt0aGlzLl9fZGV2aWNlSW5mby5vc31cXG5gO1xuICAgIGVudkluZm8gKz0gYG9zU2ltcGxlIDogJHt0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZX1cXG5gO1xuICAgIGVudkluZm8gKz0gYGlzU3VwcG9ydFdhc206ICR7dGhpcy5fX2lzU3VwcG9ydFdhc219XFxuYDtcbiAgICBlbnZJbmZvICs9IGBzaW1kKHdhc20tZmVhdHVyZS1kZXRlY3QpIDogJHt0aGlzLl9faXNTdXBwb3J0U2ltZH1cXG5gO1xuICAgIGlmICh0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZSA9PT0gJ0lPUycgfHwgdGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGUgPT09ICdNQUMnKSB7XG4gICAgICB0aGlzLl9faXNTdXBwb3J0U2ltZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbnZJbmZvICs9IGBpc1N1cHBvcnRTaW1kKGZpbmFsKSA6ICR7dGhpcy5fX2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBVc2VyQWdlbnQgOiAke25hdmlnYXRvci51c2VyQWdlbnR9XFxuYDtcbiAgICB2b2lkIDA7XG4gICAgLy8gYWxlcnQoZW52SW5mbyk7XG4gICAgd2luZG93LnVzZWJPQ1JFbnZJbmZvID0gZW52SW5mbztcbiAgICBsZXQgc2RrU3VwcG9ydEVudiA9ICdxdXJhbSc7XG4gICAgaWYgKHRoaXMuX19pc1N1cHBvcnRTaW1kKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBzZGtTdXBwb3J0RW52ICs9ICdfc2ltZC5qcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHNka1N1cHBvcnRFbnYgKz0gJy5qcyc7XG4gICAgfVxuICAgIHZvaWQgMDtcbiAgICB3aW5kb3cudXNlYk9DUkVudkluZm8gPSBlbnZJbmZvO1xuICAgIHZvaWQgMDtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNka1N1cHBvcnRFbnYsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xuICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG5cbiAgICAgIC8vIGRhdGEobW9kZWwpXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcKGZ1bmN0aW9uXFwoXFwpIFxcey9tLCAndmFyIGNyZWF0ZU1vZGVsRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnLCAnICAgcmVqZWN0KCk7XFxuJyArICcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgfSwgaGFuZGxlRXJyb3IpJywgJyAgcmVzb2x2ZSgpO1xcbicgKyAnICB9LCBoYW5kbGVFcnJvciknKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFx9XFwpXFwoXFwpOy9tLCAnXFxuIH0pXFxuJyArICd9OycpO1xuXG4gICAgICAvLyB3YXNtXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgncXVyYW0ud2FzbScsIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWYpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL1JFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXXF1cmFtXFwuZGF0YVtcIiddL2dtLCBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwiJHtuZXcgVVJMKCdxdXJhbS5kYXRhJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmfVwiYCk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnZnVuY3Rpb24gY3JlYXRlV2FzbScsICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnaW5zdGFudGlhdGVBc3luYygpOycsICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7Jyk7XG5cbiAgICAgIC8vIHdhc20gYW5kIGRhdGEobW9kZWwpIGZpbGUg67OR66Cs66GcIGZldGNoIO2VmOq4sCDsnITtlbRcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gc3RhcnRcIilcXG4nICsgJ2F3YWl0IChhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkV2FzbSA9IGZhbHNlO1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWREYXRhID0gZmFsc2U7XFxuJyArICcgICAgY3JlYXRlV2FzbSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkV2FzbSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkRGF0YSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KTtcXG4nICsgJyAgICBjcmVhdGVNb2RlbERhdGEoKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZERhdGEgPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZFdhc20pIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSlcXG4nICsgJyAgfSk7XFxuJyArICd9KSgpO1xcbicgKyAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIGVuZFwiKScpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9KTtcbiAgICBzcmMgPSBgXG4gICAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgJHtzcmN9XG4gICAgICBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4ID0gbGVuZ3RoQnl0ZXNVVEY4XG4gICAgICBNb2R1bGUuc3RyaW5nVG9VVEY4ID0gc3RyaW5nVG9VVEY4XG4gICAgICByZXR1cm4gTW9kdWxlXG4gICAgfSkoKVxuICAgICAgICBgO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCA9IGFzeW5jIF8gPT4ge1xuICAgICAgdm9pZCAwO1xuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpO1xuICAgIHRoaXMuX19yZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX3N0YXJ0U2Nhbldhc21JbXBsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpO1xuICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICB0aGlzLl9fYWRkcmVzcyA9IDA7XG4gICAgICB0aGlzLl9fcGFnZUVuZCA9IGZhbHNlO1xuICAgICAgLy8g67Cp7Ja07L2U65OcIOusuOyekOqwgOuTpOyWtOqwgCDsnojripTqsr3smrBcbiAgICAgIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPSBpc05hTihwYXJzZUludCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSkgPyAwIDogcGFyc2VJbnQodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCk7XG4gICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gICAgICB0aGlzLl9fc3NhUmV0cnlDb3VudCA9IDA7XG4gICAgICBjb25zdCBzY2FuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsLFxuICAgICAgICAgICAgaXNEZXRlY3RlZENhcmQgPSBudWxsLFxuICAgICAgICAgICAgaW1nRGF0YSA9IG51bGwsXG4gICAgICAgICAgICBpbWdEYXRhVXJsID0gbnVsbCxcbiAgICAgICAgICAgIG1hc2tJbWFnZSA9IG51bGwsXG4gICAgICAgICAgICBmYWNlSW1hZ2UgPSBudWxsLFxuICAgICAgICAgICAgc3NhUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdExpc3QgPSBbXSxcbiAgICAgICAgICAgIG1hc2tJbmZvID0gbnVsbDtcblxuICAgICAgICAgIC8vIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgaWYgKCF0aGlzLl9fT0NSRW5naW5lWydhc20nXSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVE9ETyA6IOyEpOygle2VoOyImCDsnojqsowg67OA6rK9ICBkZWZhdWx0IOqwkuuPhCDsoJzqs7VcbiAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvbl93LCByZXNvbHV0aW9uX2hdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB2aWRlb1xuICAgICAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgICAgIGlmIChyZXNvbHV0aW9uX3cgPT09IDAgfHwgcmVzb2x1dGlvbl9oID09PSAwKSByZXR1cm47XG4gICAgICAgICAgaWYgKHRoaXMuX19kZXRlY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGJlZm9yZSAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcbiAgICAgICAgICBpZiAodGhpcy5fX2FkZHJlc3MgPT09IDAgJiYgIXRoaXMuX19wYWdlRW5kICYmIChhd2FpdCB0aGlzLl9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvKSkpIHtcbiAgICAgICAgICAgIFt0aGlzLl9fYWRkcmVzcywgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2tdID0gdGhpcy5fX2dldFNjYW5uZXJBZGRyZXNzKHRoaXMuX19vY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl9fYWRkcmVzcyB8fCB0aGlzLl9fcGFnZUVuZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGFmdGVyIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPCB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIE9DUiDsmYTro4wg7J207KCEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgICAgW2lzRGV0ZWN0ZWRDYXJkLCBpbWdEYXRhLCBpbWdEYXRhVXJsXSA9IGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZCh0aGlzLl9fYWRkcmVzcywgMCk7XG4gICAgICAgICAgICBpZiAoIWlzRGV0ZWN0ZWRDYXJkKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAgIT09IHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9GQUlMRUQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVELCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7IC8vIO2VhOyalO2VnOqwgD9cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FyZCBpcyBkZXRlY3RlZFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUyk7XG5cbiAgICAgICAgICAgIC8vIHNzYSByZXRyeSDshKTsoJXsnbQg65CY7Ja0IOyeiOycvOqxsOuCmCwg7IiY64+Z7LSs7JiBVUnrpbwg7IKs7Jqp7ZWY64qUIOqyveyasCwgY2FyZCBkZXRlY3Qg7ISx6rO17IucIOydtOuvuOyngCDsoIDsnqVcbiAgICAgICAgICAgIHRoaXMuX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUoaW1nRGF0YSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9TVUNDRVNTLCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbb2NyUmVzdWx0LCBpbWdEYXRhVXJsLCBtYXNrSW1hZ2UsIGZhY2VJbWFnZV0gPSBhd2FpdCB0aGlzLl9fc3RhcnRSZWNvZ25pdGlvbih0aGlzLl9fYWRkcmVzcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCB0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpLCBpbWdEYXRhLCBpbWdEYXRhVXJsKTtcblxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgIC8vICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICAgICAgICAvLyAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpOyAgICAgICAgLy8g7ZWE7JqU7ZWc6rCAP1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9fb2NyU3RhdHVzID49IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUykge1xuICAgICAgICAgICAgLy8gb2NyIOyZhOujjCDsnbTtm4Qg7IOB7YOcXG5cbiAgICAgICAgICAgIC8vIGZhaWx1cmUgY2FzZVxuICAgICAgICAgICAgaWYgKG9jclJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPQ1IgU3RhdHVzIGlzICR7dGhpcy5fX29jclN0YXR1c30sIGJ1dCBvY3JSZXN1bHQgaXMgZmFsc2VgKTsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7IC8vIE9DUiDsmYTro4wg7Iuc7KCQ7JeQIGNhbWVyYSBwcmV2aWV3IG9mZlxuXG4gICAgICAgICAgICBpZiAodGhpcy5fX3NzYU1vZGUpIHtcbiAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAvLyDstZzstIgg7Iuc64+EXG4gICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoKHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ1tFUlJdIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGwnKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICAgICAgICAgICAgc3NhUmVzdWx0TGlzdC5wdXNoKHNzYVJlc3VsdCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCByZXRyeVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgRkFLRSA9IHRoaXMuX19vcHRpb25zLnNzYVJldHJ5VHlwZSA9PT0gJ0ZBS0UnO1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFQUwgPSB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVR5cGUgPT09ICdSRUFMJztcbiAgICAgICAgICAgICAgICBjb25zdCBFTlNFTUJMRSA9IHRoaXMuX19vcHRpb25zLnNzYVJldHJ5VHlwZSA9PT0gJ0VOU0VNQkxFJztcbiAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZWQgPSBmYWxzZTsgLy8g67mE64+Z6riwIGZvciDrrLgg65WM66y47JeQIGJyZWFr6rCAIOyViOqxuOumrOuKlCDsnbTsiojroZwg64Sj7J2MXG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9fc3NhUmV0cnlDb3VudCA9PT0gdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgZXhlY3V0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3NzYVJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgc3NhUmVzdWx0ID0gYXdhaXQgdGhpcy5fX3N0YXJ0VHJ1dGhSZXRyeSh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2FkZHJlc3MsIGl0ZW0pOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsJyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGlmIChGQUtFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQuaW5kZXhPZignUkVBTCcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBleGVjdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoUkVBTCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0LmluZGV4T2YoJ0ZBS0UnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKEVOU0VNQkxFKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0cnlXb3JraW5nVGltZSA9IG5ldyBEYXRlKCkgLSByZXRyeVN0YXJ0RGF0ZTtcbiAgICAgICAgICAgICAgICB2b2lkIDA7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tJbmZvKSB7XG4gICAgICAgICAgICAgIG1hc2tJbmZvID0gdGhpcy5fX2dldE1hc2tJbmZvKHRoaXMuX19hZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgbGVnYWN5Rm9ybWF0LFxuICAgICAgICAgICAgICBuZXdGb3JtYXRcbiAgICAgICAgICAgIH0gPSB1c2ViT0NSV0FTTVBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLl9fc3NhUmV0cnlDb3VudCwgc3NhUmVzdWx0TGlzdCwgdGhpcy5fX29wdGlvbnMuc3NhUmV0cnlUeXBlLCB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVBpdm90KTtcbiAgICAgICAgICAgIGxldCByZXZpZXdfcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgICAgICAgIG9jcl9yZXN1bHQ6IG5ld0Zvcm1hdCxcbiAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogaW1nRGF0YVVybCxcbiAgICAgICAgICAgICAgb2NyX21hc2tpbmdfaW1hZ2U6IG1hc2tJbWFnZSxcbiAgICAgICAgICAgICAgb2NyX2ZhY2VfaW1hZ2U6IGZhY2VJbWFnZSxcbiAgICAgICAgICAgICAgbWFza0luZm86IG1hc2tJbmZvLFxuICAgICAgICAgICAgICBzc2FfbW9kZTogdGhpcy5fX3NzYU1vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlRW5jcnlwdE1vZGUgJiYgdGhpcy5fX2lzU3VwcG9ydFdhc20pIHtcbiAgICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgIHJldmlld19yZXN1bHQuZW5jcnlwdGVkID0ge1xuICAgICAgICAgICAgICAgIG9jcl9yZXN1bHQ6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9yZXN1bHQpLFxuICAgICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9vcmlnaW5faW1hZ2UpLFxuICAgICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3JfbWFza2luZ19pbWFnZSksXG4gICAgICAgICAgICAgICAgb2NyX2ZhY2VfaW1hZ2U6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9mYWNlX2ltYWdlKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUxlZ2FjeUZvcm1hdCkge1xuICAgICAgICAgICAgICByZXZpZXdfcmVzdWx0Lm9jcl9kYXRhID0gbGVnYWN5Rm9ybWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvcic7XG4gICAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICc6ICcgKyBlLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZvaWQgMDtcblxuICAgICAgICAgIC8vIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgICAgLy8gICBhd2FpdCB0aGlzLl9fcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgLy8gICB0aGlzLl9fcmVjb3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKCdXQTAwMScsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgdGhpcy5fX2RldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHRoaXMuX19yZWNvdmVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX19yZWNvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl9fZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2NhbiwgMSk7IC8vIOyerOq3gFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8gVUkg656c642U66eBIGJsb2NraW5nIOuwqeyngCAoc2V0VGltZW91dClcbiAgICB9KTtcbiAgfVxuXG4gIF9fcmVxdWVzdEdldEFQSVRva2VuKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjcmVkZW50aWFsID0gdGhpcy5fX29wdGlvbnMuYXV0aFNlcnZlckluZm8uY3JlZGVudGlhbDtcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLl9fb3B0aW9ucy5hdXRoU2VydmVySW5mby5iYXNlVXJsO1xuICAgICAgZmV0Y2goYCR7YmFzZVVybH0vc2lnbi1pbmAsIHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbCksXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgIC8vIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgLy8gY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBmZXRjaChgJHtiYXNlVXJsfS91c2ViL3Rva2VuYCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtyZXN1bHQudG9rZW59YFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogbnVsbCxcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShqc29uLnRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIF9fcmVxdWVzdFNlcnZlck9DUihvY3JUeXBlLCBzc2FNb2RlLCBpbWdEYXRhVXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBiYXNlVXJsID0gdGhpcy5fX29wdGlvbnMub2NyU2VydmVyQmFzZVVybDtcbiAgICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgICAgYmFzZVVybCArPSAnL29jci9pZGNhcmQtZHJpdmVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICAgIGJhc2VVcmwgKz0gJy9vY3IvcGFzc3BvcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgICBiYXNlVXJsICs9ICcvb2NyL2FsaWVuJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NyZWRpdCBjYXJkIGlzIG5vdCBVbnN1cHBvcnRlZCBTZXJ2ZXIgT0NSJyk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgT0NSIHR5cGU6ICR7b2NyVHlwZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcGlUb2tlbiA9IGF3YWl0IHRoaXMuX19yZXF1ZXN0R2V0QVBJVG9rZW4oKTtcbiAgICAgICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgbXlIZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlUb2tlbn1gKTtcbiAgICAgICAgY29uc3QgcmF3ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGltYWdlX2Jhc2U2NDogaW1nRGF0YVVybCxcbiAgICAgICAgICBzc2FfbW9kZTogJ3RydWUnLFxuICAgICAgICAgIG1hc2tfbW9kZTogJ3RydWUnLFxuICAgICAgICAgIGZhY2VfbW9kZTogJ3RydWUnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgICAgICAgYm9keTogcmF3LFxuICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaChiYXNlVXJsLCByZXF1ZXN0T3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19zdGFydFNjYW5TZXJ2ZXJJbXBsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgc3NhUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICBzc2FSZXN1bHRMaXN0ID0gW107XG4gICAgICAgIGNvbnN0IF9fb25DbGlja0NhcHR1cmVCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgLy8g7LqU67KE7Iqk7JeQ7IScIOydtOuvuOyngOulvCDqsIDsoLjsmLRcbiAgICAgICAgICBjb25zdCBbLCBpbWdEYXRhVXJsXSA9IGF3YWl0IHRoaXMuX19jcm9wSW1hZ2VGcm9tVmlkZW8oKTtcbiAgICAgICAgICBpZiAoMSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gc2VydmVyIG9jciDsi6TtjKggKOuwnOyDnSDqsIDriqXshLEg7JeG7J2MKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzZXJ2ZXIgb2NyIOyEseqztVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUywgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgb2NyUmVzdWx0ID0gYXdhaXQgdGhpcy5fX3JlcXVlc3RTZXJ2ZXJPQ1IodGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCBpbWdEYXRhVXJsKTtcblxuICAgICAgICAgICAgICAvLyBmYWlsdXJlIGNhc2VcbiAgICAgICAgICAgICAgaWYgKG9jclJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciBPQ1IgaXMgZmFpbGVkYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNzYSDsi5zrj4Q/XG5cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICB2aWRlb1xuICAgICAgICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTsgLy8gT0NSIOyZhOujjCDsi5zsoJDsl5AgY2FtZXJhIHByZXZpZXcgb2ZmXG5cbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgbGVnYWN5Rm9ybWF0LFxuICAgICAgICAgICAgICBuZXdGb3JtYXQsXG4gICAgICAgICAgICAgIGJhc2U2NEltYWdlUmVzdWx0LFxuICAgICAgICAgICAgICBtYXNrSW5mb1xuICAgICAgICAgICAgfSA9IHVzZWJPQ1JBUElQYXJzZXIucGFyc2VPY3JSZXN1bHQodGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCBvY3JSZXN1bHQpO1xuICAgICAgICAgICAgbGV0IHJldmlld19yZXN1bHQgPSB7XG4gICAgICAgICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgICAgICAgb2NyX3Jlc3VsdDogbmV3Rm9ybWF0LFxuICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiBpbWdEYXRhVXJsLFxuICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogYmFzZTY0SW1hZ2VSZXN1bHQ/Lm9jcl9tYXNraW5nX2ltYWdlLFxuICAgICAgICAgICAgICBvY3JfZmFjZV9pbWFnZTogYmFzZTY0SW1hZ2VSZXN1bHQ/Lm9jcl9mYWNlX2ltYWdlLFxuICAgICAgICAgICAgICBtYXNrSW5mbyxcbiAgICAgICAgICAgICAgc3NhX21vZGU6IHRoaXMuX19zc2FNb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUVuY3J5cHRNb2RlICYmIHRoaXMuX19pc1N1cHBvcnRXYXNtKSB7XG4gICAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICByZXZpZXdfcmVzdWx0LmVuY3J5cHRlZCA9IHtcbiAgICAgICAgICAgICAgICBvY3JfcmVzdWx0OiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3JfcmVzdWx0KSxcbiAgICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3Jfb3JpZ2luX2ltYWdlKSxcbiAgICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHJldmlld19yZXN1bHQub2NyX21hc2tpbmdfaW1hZ2UpLFxuICAgICAgICAgICAgICAgIG9jcl9mYWNlX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3JfZmFjZV9pbWFnZSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VMZWdhY3lGb3JtYXQpIHtcbiAgICAgICAgICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfZGF0YSA9IGxlZ2FjeUZvcm1hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19vblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpO1xuICAgICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9fY2FwdHVyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fb25DbGlja0NhcHR1cmVCdXR0b24pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ1NlcnZlciBPQ1IgRXJyb3InO1xuICAgICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICc6ICcgKyBlLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBhd2FpdCB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcygnUVMwMDEnLCBlLCBlcnJvck1lc3NhZ2UpOyAvLyBRVVJBTSBTZXJ2ZXIgT0NSIOyXkOufrFxuICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUoaW1nRGF0YSwgaW1nRGF0YVVSTCkge1xuICAgIC8vIHNzYSByZXRyeSDshKTsoJXsnbQg65CY7Ja0IOyeiOycvOqxsOuCmCwg7IiY64+Z7LSs7JiBVUnrpbwg7IKs7Jqp7ZWY64qUIOqyveyasCwgY2FyZCBkZXRlY3Qg7ISx6rO17IucIOydtOuvuOyngCDsoIDsnqVcbiAgICBpZiAodGhpcy5fX3NzYU1vZGUgJiYgdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDAgfHwgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJICYmIHRoaXMuX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgbGV0IGxpbWl0U2F2ZUltYWdlQ291bnQgPSBNYXRoLm1heCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50LCB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCk7XG4gICAgICBpZiAodGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLmxlbmd0aCA9PT0gbGltaXRTYXZlSW1hZ2VDb3VudCkge1xuICAgICAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUuc2hpZnQoKTtcbiAgICAgICAgaWYgKHRoaXMuX19kZWJ1Z01vZGUpIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NC5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnB1c2goaW1nRGF0YSk7XG4gICAgICBpZiAodGhpcy5fX2RlYnVnTW9kZSkge1xuICAgICAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQucHVzaChpbWdEYXRhVVJMKTtcbiAgICAgICAgdm9pZCAwOyAvLyBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgfVxuXG4gICAgICB2b2lkIDA7IC8vIHNob3VsZCBiZSByZW1vdmVkXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX19vblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpIHtcbiAgICAvLyDsnbjsi50g7ISx6rO1IOyKpOy6lCDro6jtlIQg7KKF66OMXG4gICAgaWYgKHJldmlld19yZXN1bHQuc3NhX21vZGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1MpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgcmVzdWx0X2NvZGU6ICdOMTAwJyxcbiAgICAgICAgcmVzdWx0X21lc3NhZ2U6ICdPSy4nXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiAnc3VjY2VzcycsXG4gICAgICByZXZpZXdfcmVzdWx0OiByZXZpZXdfcmVzdWx0XG4gICAgfTtcbiAgICBpZiAodGhpcy5fX29uU3VjY2Vzcykge1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19vbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgIGxldCBlcnJvckRldGFpbCA9ICcnO1xuICAgIGlmIChlPy50b1N0cmluZygpKSBlcnJvckRldGFpbCArPSBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGU/LnN0YWNrKSBlcnJvckRldGFpbCArPSBlLnN0YWNrO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICByZXN1bHRfY29kZTogcmVzdWx0Q29kZSxcbiAgICAgICAgcmVzdWx0X21lc3NhZ2U6IGVycm9yTWVzc2FnZVxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogJ2ZhaWxlZCcsXG4gICAgICByZXZpZXdfcmVzdWx0OiB7XG4gICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgZXJyb3JfZGV0YWlsOiBlcnJvckRldGFpbFxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vbkZhaWx1cmUpIHtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fcHJlbG9hZGluZ1dhc20oKSB7XG4gICAgY29uc3QgcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpO1xuICAgIGlmICghdGhpcy5pc1ByZWxvYWRlZCgpICYmIHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGF3YWl0IHRoaXMucHJlbG9hZGluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5fX3dhaXRQcmVsb2FkZWQoKTtcbiAgICAgIH0gZWxzZSBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5ET05FKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgYWJub3JtYWxseSBwcmVsb2FkaW5nIHN0YXR1cywgcHJlbG9hZGVkOiAke3RoaXMuaXNQcmVsb2FkZWQoKX0gLyBwcmVsb2FkaW5nU3RhdHVzOiAke3RoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3N0YXJ0U2Nhbldhc20oKSB7XG4gICAgdm9pZCAwO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5XYXNtSW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyBfX3N0YXJ0U2NhblNlcnZlcigpIHtcbiAgICB2b2lkIDA7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJID0gdHJ1ZTtcbiAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuU2VydmVySW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyBfX3JlY292ZXJ5U2NhbigpIHtcbiAgICB2b2lkIDA7XG4gICAgdGhpcy5fX3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuV2FzbSgpO1xuICB9XG4gIHN0b3BTY2FuKCkge1xuICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7IC8vIHN3aXRjaCB0byBzZXJ2ZXLsnbzrlYwg6riw7KG0IFdBU00gbG9vcCDqsJXsoJzsooXro4xcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgc3RvcFN0cmVhbSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmICh0aGlzLl9fc3RyZWFtKSB7XG4gICAgICB0aGlzLl9fc3RyZWFtLnN0b3AgJiYgdGhpcy5fX3N0cmVhbS5zdG9wKCk7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0cmVhbSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIOuplOuqqOumrCBhbGxvY2F0aW9uIGZyZWUg7ZWo7IiYICovXG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpO1xuICAgIHRoaXMuX19kZXN0cm95QnVmZmVyKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lQcmV2SW1hZ2UoKTtcbiAgICB0aGlzLl9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKTtcbiAgfVxuICBfX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcik7XG4gICAgICB0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVc2VCT0NSOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxPQUFPQSxRQUFRLE1BQU0sdUJBQXVCO0FBQzVDLE9BQU9DLGlCQUFpQixNQUFNLG1DQUFtQztBQUNqRSxPQUFPQyxnQkFBZ0IsTUFBTSxrQ0FBa0M7QUFDL0QsU0FBU0MsYUFBYSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsT0FBTyxRQUFRLGtDQUFrQztBQUN4RixJQUFJQyxRQUFRO0FBQ1osTUFBTUMsT0FBTyxDQUFDO0VBMkJaOztFQUVBOztFQXNFaUM7RUFDTDs7RUFNRTtFQUNGO0VBQ0M7O0VBSzdCOztFQTZJQTtFQUNBQyxXQUFXQSxDQUFBLEVBQUc7SUFBQUMsZUFBQSxzQkE5UEE7TUFDWkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsU0FBUyxFQUFFLFdBQVc7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLG1CQUFtQixFQUFFLGdCQUFnQjtNQUNyQ0Msa0JBQWtCLEVBQUUsZUFBZTtNQUNuQ0Msc0JBQXNCLEVBQUUsd0JBQXdCO01BQ2hEQyxxQkFBcUIsRUFBRSx1QkFBdUI7TUFDOUNDLGNBQWMsRUFBRSxZQUFZO01BQzVCQyx1QkFBdUIsRUFBRSxxQkFBcUI7TUFDOUNDLFdBQVcsRUFBRSxhQUFhO01BQzFCQyxvQkFBb0IsRUFBRSxzQkFBc0I7TUFDNUNDLFVBQVUsRUFBRTtJQUNkLENBQUM7SUFBQVosZUFBQSxxQkFDWTtNQUNYRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO01BQ2JDLEtBQUssRUFBRSxDQUFDO01BQ1JPLFdBQVcsRUFBRSxDQUFDO01BQ2RHLElBQUksRUFBRTtJQUNSLENBQUM7SUFBQWIsZUFBQSw0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
