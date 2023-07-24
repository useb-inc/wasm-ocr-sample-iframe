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
      if (typeof ocrResult === 'number') ocrResult = ocrResult.toString();
      if (ocrResult === '') return '';
      if (typeof ocrResult !== 'string' && !!!ocrResult) {
        throw new Error('ocrResult is empty');
      }
      var jsonString = ocrResult;
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
                var excludeList = ['complete', 'result_scan_type', 'color_point', 'found_face', 'specular_ratio', 'start_time', 'end_time', 'fd_confidence', 'id_truth', 'id_truth_retry_count'];
                // prettier-ignore
                review_result.encrypted = {
                  ocr_result: _.toPairs(_.omit(review_result.ocr_result, excludeList)).reduce((acc, _ref12) => {
                    var [key, value] = _ref12;
                    acc[key] = _this21.__encryptScanResult(value);
                    return acc;
                  }, {}),
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
      var _ref13 = _asyncToGenerator(function* (resolve, reject) {
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
        return _ref13.apply(this, arguments);
      };
    }());
  }
  __startScanServerImpl() {
    var _this23 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* (resolve, reject) {
        try {
          _this23.__blurCaptureButton();
          var ocrResult = null,
            ssaResult = null,
            ssaResultList = [];
          var __onClickCaptureButton = /*#__PURE__*/function () {
            var _ref15 = _asyncToGenerator(function* () {
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
                  var excludeList = ['complete', 'result_scan_type', 'color_point', 'found_face', 'specular_ratio', 'start_time', 'end_time', 'fd_confidence', 'id_truth', 'id_truth_retry_count'];
                  // prettier-ignore
                  review_result.encrypted = {
                    ocr_result: _.toPairs(_.omit(review_result.ocr_result, excludeList)).reduce((acc, _ref16) => {
                      var [key, value] = _ref16;
                      acc[key] = _this23.__encryptScanResult(value);
                      return acc;
                    }, {}),
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
              return _ref15.apply(this, arguments);
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
        return _ref14.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJ1c2ViT0NSV0FTTVBhcnNlciIsInVzZWJPQ1JBUElQYXJzZXIiLCJpc1N1cHBvcnRXYXNtIiwibWVhc3VyZSIsInNpbWQiLCJ0aHJlYWRzIiwiaW5zdGFuY2UiLCJVc2VCT0NSIiwiY29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydHkiLCJOT05FIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVF9TVUNDRVNTIiwiQ0FSRF9ERVRFQ1RfRkFJTEVEIiwiTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUyIsIk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZUVuY3J5cHRNb2RlIiwidXNlTGVnYWN5Rm9ybWF0IiwidXNlTWFza0luZm8iLCJ1c2VGYWNlSW1hZ2UiLCJ1c2VUb3BVSSIsInVzZVRvcFVJVGV4dE1zZyIsInVzZU1pZGRsZVVJIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUkiLCJ1c2VCb3R0b21VSVRleHRNc2ciLCJ1c2VQcmV2aWV3VUkiLCJ1c2VDYXB0dXJlVUkiLCJmcmFtZUJvcmRlclN0eWxlIiwid2lkdGgiLCJyYWRpdXMiLCJzdHlsZSIsIm5vdF9yZWFkeSIsInJlYWR5IiwiZGV0ZWN0X3N1Y2Nlc3MiLCJkZXRlY3RfZmFpbGVkIiwibWFudWFsX2NhcHR1cmVfc3VjY2VzcyIsIm1hbnVhbF9jYXB0dXJlX2ZhaWxlZCIsInJlY29nbml6ZWQiLCJyZWNvZ25pemVkX3dpdGhfc3NhIiwib2NyX3N1Y2Nlc3MiLCJvY3Jfc3VjY2Vzc193aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJ1c2VNYXNrRnJhbWVDb2xvckNoYW5nZSIsIm1hc2tGcmFtZVN0eWxlIiwiY2xpcF9mcmFtZSIsImJhc2VfY29sb3IiLCJ1c2VBdXRvU3dpdGNoVG9TZXJ2ZXJNb2RlIiwidXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlIiwic3dpdGNoVG9TZXJ2ZXJUaHJlc2hvbGQiLCJ1c2VGb3JjZUNvbXBsZXRlVUkiLCJjYXB0dXJlQnV0dG9uU3R5bGUiLCJzdHJva2VfY29sb3IiLCJyZXNvdXJjZUJhc2VVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImRldmljZUxhYmVsIiwidmlkZW9UYXJnZXRJZCIsInJvdGF0aW9uRGVncmVlIiwibWlycm9yTW9kZSIsInNzYVJldHJ5VHlwZSIsInNzYVJldHJ5UGl2b3QiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRlZCIsIl9fcHJlbG9hZGluZ1N0YXR1cyIsIl9fbG9hZFJlc291cmNlcyIsIl9fcHJlbG9hZGVkIiwiaXNJbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZWQiLCJnZXRQcmVsb2FkaW5nU3RhdHVzIiwiZ2V0T0NSRW5naW5lIiwiX19PQ1JFbmdpbmUiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJfX2xpY2Vuc2UiLCJtZXJnZWRPcHRpb25zIiwiXyIsIm1lcmdlIiwiX19vcHRpb25zIiwic2V0T3B0aW9uIiwiX193aW5kb3dFdmVudEJpbmQiLCJfX2RldmljZUluZm8iLCJnZXRPc1ZlcnNpb24iLCJfX2lzU3VwcG9ydFdhc20iLCJnZXRPcHRpb24iLCJnZXRPY3JUeXBlIiwidHlwZSIsIl9fb2NyVHlwZU51bWJlclRvU3RyaW5nIiwiZ2V0IiwiZ2V0T2NyVHlwZU51bWJlciIsInN0cmluZyIsIl9fb2NyU3RyaW5nVG9UeXBlTnVtYmVyIiwiZ2V0VUlPcmllbnRhdGlvbiIsIl9fdWlPcmllbnRhdGlvbiIsImdldFZpZGVvT3JpZW50YXRpb24iLCJfX3ZpZGVvT3JpZW50YXRpb24iLCJjaGVja1N3aXRjaFRvU2VydmVyTW9kZSIsIl90aGlzMiIsIl9faXNTd2l0Y2hUb1NlcnZlck1vZGUiLCJzdGFydE9DUiIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIl9hcmd1bWVudHMiLCJhcmd1bWVudHMiLCJfdGhpczMiLCJvbkluUHJvZ3Jlc3NDaGFuZ2UiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfX29jclR5cGUiLCJfX3NzYU1vZGUiLCJpbmRleE9mIiwiX19vblN1Y2Nlc3MiLCJfX29uRmFpbHVyZSIsIl9fb25JblByb2dyZXNzQ2hhbmdlIiwiX190b3BVSSIsImdldE9DUkVsZW1lbnRzIiwidG9wVUkiLCJfX21pZGRsZVVJIiwibWlkZGxlVUkiLCJfX2JvdHRvbVVJIiwiYm90dG9tVUkiLCJfX2NoYW5nZVN0YWdlIiwiX19wcmVsb2FkaW5nV2FzbSIsIl9fc3RhcnRTY2FuU2VydmVyIiwiX19zdGFydFNjYW5XYXNtIiwiZSIsInN0b3BPQ1IiLCJjbGVhbnVwIiwiX19jbG9zZUNhbWVyYSIsInNldElnbm9yZUNvbXBsZXRlIiwidmFsIiwicmVzdGFydE9DUiIsIm9jclR5cGUiLCJfYXJndW1lbnRzMiIsIl90aGlzNCIsImlzU3dpdGNoTW9kZSIsIl9fd2FpdFByZWxvYWRlZCIsIl90aGlzNSIsIndhaXRpbmdSZXRyeUNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVjayIsInNldFRpbWVvdXQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiX19wYWdlRW5kIiwiaGFuZGxlUmVzaXplIiwiX3JlZjIiLCJfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiYXBwbHkiLCJfX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIl9fc2xlZXAiLCJtcyIsIl9fYmxvYlRvQmFzZTY0IiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX19nZXRTdHJpbmdPbldhc21IZWFwIiwibGVuZ3RoQnl0ZXMiLCJsZW5ndGhCeXRlc1VURjgiLCJfX3N0cmluZ09uV2FzbUhlYXAiLCJfbWFsbG9jIiwic3RyaW5nVG9VVEY4IiwiX19lbmNyeXB0U2NhblJlc3VsdCIsIm9jclJlc3VsdCIsInN0cmluZ09uV2FzbUhlYXAiLCJ0b1N0cmluZyIsImpzb25TdHJpbmciLCJlbmNyeXB0UmVzdWx0IiwiX2ZyZWUiLCJfX3NldFZpZGVvUmVzb2x1dGlvbiIsInZpZGVvRWxlbWVudCIsIl90aGlzNiIsImlzU3VwcG9ydGVkUmVzb2x1dGlvbiIsInJlc29sdXRpb25UZXh0IiwiX19jYW1TZXRDb21wbGV0ZSIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsInNyY09iamVjdCIsIl9fdmlkZW9XaWR0aCIsIl9fdmlkZW9IZWlnaHQiLCJfX2dldFNjYW5uZXJBZGRyZXNzIiwiX19vY3JUeXBlTGlzdCIsImluY2x1ZGVzIiwiYWRkcmVzcyIsImRlc3Ryb3lDYWxsYmFjayIsImdldElEQ2FyZFNjYW5uZXIiLCJkZXN0cm95SURDYXJkU2Nhbm5lciIsImdldFBhc3Nwb3J0U2Nhbm5lciIsImRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIiLCJnZXRBbGllblNjYW5uZXIiLCJkZXN0cm95QWxpZW5TY2FubmVyIiwiZ2V0Q3JlZGl0U2Nhbm5lciIsImRlc3Ryb3lDcmVkaXRTY2FubmVyIiwiX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9fcmV0cnlDb3VudEdldEFkZHJlc3MiLCJfX2dldEJ1ZmZlciIsIl9fQnVmZmVyIiwiX19yZXNvbHV0aW9uV2lkdGgiLCJfX3Jlc29sdXRpb25IZWlnaHQiLCJfX3Jlc3VsdEJ1ZmZlciIsIl9fbWFza0luZm9SZXN1bHRCdWYiLCJfX2dldEltYWdlQmFzZTY0IiwibWFza01vZGUiLCJjcm9wTW9kZSIsIl9hcmd1bWVudHMzIiwiX3RoaXM3IiwiaW1nVHlwZSIsImVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZSIsImVuY29kZUpwZ0RldGVjdGVkUGhvdG9JbWFnZSIsImpwZ1NpemUiLCJnZXRFbmNvZGVkSnBnU2l6ZSIsImpwZ1BvaW50ZXIiLCJnZXRFbmNvZGVkSnBnQnVmZmVyIiwicmVzdWx0VmlldyIsIlVpbnQ4QXJyYXkiLCJIRUFQOCIsImJ1ZmZlciIsIkJsb2IiLCJkZXN0cm95RW5jb2RlZEpwZyIsIl9fZGVzdHJveUJ1ZmZlciIsIl9fZGVzdHJveVJlc3VsdEJ1ZmZlciIsIl9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyIiwiX19kZXN0cm95UHJldkltYWdlIiwiX19QcmV2SW1hZ2UiLCJfX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwIiwiX19kZXN0cm95U2Nhbm5lckFkZHJlc3MiLCJfX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2siLCJfX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSIsIl90aGlzOCIsIl9fZ2V0Um90YXRpb25EZWdyZWUiLCJfX2dldE1pcnJvck1vZGUiLCJfX2Nyb3BJbWFnZUZyb21WaWRlbyIsIl90aGlzOSIsImNhbGNSZXNvbHV0aW9uX3ciLCJjYWxjUmVzb2x1dGlvbl9oIiwidmlkZW8iLCJjYW52YXMiLCJyb3RhdGlvbkNhbnZhcyIsImNhbGNDYW52YXMiLCJjYWxjVmlkZW9XaWR0aCIsImNhbGNWaWRlb0hlaWdodCIsImNhbGNWaWRlb0NsaWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYWxjVmlkZW9DbGllbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoIiwiX19jcm9wSW1hZ2VTaXplV2lkdGgiLCJjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCIsIl9fY3JvcEltYWdlU2l6ZUhlaWdodCIsImNhbGNWaWRlb09yaWVudGF0aW9uIiwiX19pc1JvdGF0ZWQ5MG9yMjcwIiwiY2FsY01heFNXaWR0aCIsImNhbGNNYXhTSGVpZ2h0Iiwic3giLCJzeSIsInJhdGlvIiwic1dpZHRoIiwiTWF0aCIsIm1pbiIsInJvdW5kIiwic0hlaWdodCIsImNhbGNDb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpbGxSZWFkRnJlcXVlbnRseSIsImRyYXdJbWFnZSIsImltZ0RhdGEiLCJnZXRJbWFnZURhdGEiLCJpbWdEYXRhVXJsIiwidG9EYXRhVVJMIiwiX19yb3RhdGUiLCJkZWdyZWUiLCJpbWciLCJJbWFnZSIsInNyYyIsInRlbXBDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZW1wQ29udGV4dCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiUEkiLCJuZXdJbWFnZURhdGEiLCJyZXN0b3JlIiwiX19pc0NhcmRib3hEZXRlY3RlZCIsIl9hcmd1bWVudHM0IiwiX3RoaXMxMCIsImJveFR5cGUiLCJyZXRyeUltZyIsInNldCIsImRhdGEiLCJrb3IiLCJhbGllbiIsInBhc3Nwb3J0IiwiZGV0ZWN0X2lkY2FyZF9vcHQiLCJkZXRlY3RfaWRjYXJkIiwibWVzc2FnZSIsIl9fc3RhcnRSZWNvZ25pdGlvbiIsInNzYU1vZGUiLCJpc1NldElnbm9yZUNvbXBsZXRlIiwiX3RoaXMxMSIsInJlc3VsdEJ1ZmZlciIsInJlY29nbml0aW9uIiwiX3JlZjUiLCJfb2NyUmVzdWx0IiwiX29jclJlc3VsdDIiLCJzY2FuSURDYXJkIiwic2NhblBhc3Nwb3J0Iiwic2NhbkFsaWVuIiwic2NhbkNyZWRpdCIsIl9fY3N2VG9PYmplY3QiLCJjb21wbGV0ZSIsIl9fbWFudWFsT0NSUmV0cnlDb3VudCIsIl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCIsInF1ZXVlSWR4IiwiX19kZXRlY3RlZENhcmRRdWV1ZSIsIl9fYmx1ckNhcHR1cmVCdXR0b24iLCJfX3NldFN0eWxlIiwiZGlzcGxheSIsIl94IiwiaXNDcmVkaXRDYXJkIiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJmYWNlSW1hZ2UiLCJfX3N0YXJ0VHJ1dGgiLCJyZWplY3QiLCJzY2FuVHJ1dGgiLCJzdHIiLCJwYWlycyIsInNwbGl0Iiwib2JqIiwiaSIsInBhaXIiLCJfX2dldE1hc2tJbmZvIiwibWFza0luZm9SZXN1bHRCdWYiLCJnZXRNYXNrUmVjdCIsIl9fc3RhcnRUcnV0aFJldHJ5IiwiX3RoaXMxMiIsIl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl90aGlzMTMiLCJfX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24iLCJfdGhpczE0IiwiaXNQYXNzcG9ydCIsIl9fc2V0dXBWaWRlbyIsIl9fc3RyZWFtIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicGxheSIsIl9fYWRqdXN0U3R5bGUiLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIm5hbWUiLCJlcnJvck1lc3NhZ2UiLCJfX29uRmFpbHVyZVByb2Nlc3MiLCJzdG9wU3RyZWFtIiwiZWwiLCJhc3NpZ24iLCJfX2NoYW5nZU9DUlN0YXR1cyIsIl9fb2NyU3RhdHVzIiwiX2FyZ3VtZW50czUiLCJfdGhpczE1IiwiZm9yY2VVcGRhdGUiLCJyZWNvZ25pemVkSW1hZ2UiLCJfX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAiLCJfX2luUHJvZ3Jlc3NTdGVwIiwiZ3VpZGVCb3giLCJtYXNrQm94V3JhcCIsImNhcHR1cmVCdXR0b24iLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJfbWFza0JveFdyYXAkcXVlcnlTZWwiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiX2NhcHR1cmVCdXR0b24kcXVlcnlTIiwib2NyTW9kZSIsImNhbGwiLCJfX3VwZGF0ZVByZXZpZXdVSSIsIl9faGlkZVByZXZpZXdVSSIsInByZXZpZXdVSVdyYXAiLCJwcmV2aWV3SW1hZ2UiLCJpbWdTdHlsZSIsImNvbnRleHQiLCJfX2dldElucHV0RGV2aWNlcyIsImtpbmQiLCJsYWJlbCIsIl90aGlzMTYiLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsInZpZGVvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImNvbmNhdCIsImdldENhcGFiaWxpdGllcyIsIl9jYXAkZmFjaW5nTW9kZSIsImNhcCIsImZhY2luZ01vZGUiLCJfX2ZhY2luZ01vZGVDb25zdHJhaW50IiwiY2hlY2tVSU9yaWVudGF0aW9uIiwiY3VycmVudCIsIm9jciIsImlzQ2hhbmdlZCIsIl9fcHJldlVpT3JpZW50YXRpb24iLCJfX2NsZWFyQ3VzdG9tVUkiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfX3NldHVwRG9tRWxlbWVudHMiLCJfdGhpczE3IiwidmlkZW9XcmFwIiwiZ3VpZGVCb3hXcmFwIiwicHJldmVudFRvRnJlZXplVmlkZW8iLCJjdXN0b21VSVdyYXAiLCJjYXB0dXJlVUlXcmFwIiwiY2FwdHVyZVVJIiwicHJldmlld1VJIiwic3dpdGNoVUlXcmFwIiwic3dpdGNoVUkiLCJyZW1vdmUiLCJvY3JTdHlsZSIsIndyYXBTdHlsZSIsIm1hcmdpbiIsIm92ZXJmbG93IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJtYXNrX2ZyYW1lIiwidmlkZW9TdHlsZSIsInJvdGF0ZUNzcyIsIm1pcnJvckNzcyIsInJvdGF0ZUFuZE1pcnJvckNzcyIsIl9vYmplY3RTcHJlYWQiLCJ0cmFuc2Zvcm0iLCJjYW52YXNTdHlsZSIsImxlZnQiLCJ0b3AiLCJib3JkZXIiLCJyaWdodCIsImJvdHRvbSIsImN1c3RvbVVJV3JhcFN0eWxlIiwiY2FwdHVyZVVJV3JhcFN0eWxlIiwiY3Vyc29yIiwiY2FwdHVyZUJ1dHRvblNyY1NWRyIsIl9fb25DbGlja0NhcHR1cmVCdXR0b24iLCJwcmV2aWV3VUlXcmFwU3R5bGUiLCJzd2l0Y2hVSVdyYXBTdHlsZSIsInN3aXRjaEhUTUwiLCJzd2l0Y2hDaGVja2JveCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX19vbkNsaWNrU3dpdGNoVUkiLCJfcmVmOCIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsIl94MiIsIm9uY2UiLCJfX29jciIsIl9fY2FudmFzIiwiX19yb3RhdGlvbkNhbnZhcyIsIl9fdmlkZW8iLCJfX3ZpZGVvV3JhcCIsIl9fZ3VpZGVCb3giLCJfX2d1aWRlQm94V3JhcCIsIl9fbWFza0JveFdyYXAiLCJfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiX19jdXN0b21VSVdyYXAiLCJfX2NhcHR1cmVVSVdyYXAiLCJfX2NhcHR1cmVVSSIsIl9fY2FwdHVyZUJ1dHRvbiIsIl9fcHJldmlld1VJV3JhcCIsIl9fcHJldmlld1VJIiwiX19wcmV2aWV3SW1hZ2UiLCJfX3N3aXRjaFVJV3JhcCIsIl9fc3dpdGNoVUkiLCJfX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJfdGhpczE4IiwiZGV2aWNlSWRMaXN0IiwibWFwIiwiZGV2aWNlSWQiLCJjb25zdHJhaW50V2lkdGgiLCJjb25zdHJhaW50SGVpZ2h0IiwiaWRlYWwiLCJjb25zdHJhaW50cyIsImF1ZGlvIiwiem9vbSIsImZvY3VzTW9kZSIsIndoaXRlQmFsYW5jZU1vZGUiLCJnZXRVc2VyTWVkaWEiLCJzdHJlYW0iLCJfYXJndW1lbnRzNiIsIl90aGlzMTkiLCJpc0ZpcnN0Q2FsbGVkIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsIm5ld1ZpZGVvV2lkdGgiLCJuZXdWaWRlb0hlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwiX19ndWlkZUJveFJhdGlvQnlXaWR0aCIsInZpZGVvUmF0aW9CeUhlaWdodCIsIl9fdmlkZW9SYXRpb0J5SGVpZ2h0IiwicmVkdWNlZEd1aWRlQm94V2lkdGgiLCJfX2d1aWRlQm94UmVkdWNlUmF0aW8iLCJyZWR1Y2VkR3VpZGVCb3hIZWlnaHQiLCJwYWRkaW5nIiwidmlkZW9Jbm5lckdhcCIsImJhY2tncm91bmRDb2xvciIsIm1hc2tCb3hJbm5lciIsInIiLCJpc05hTiIsIm1hc2tCb3hJbm5lcldpZHRoIiwibWF4IiwibWFza0JveElubmVySGVpZ2h0IiwiY2FsY1N1bU9mSGVpZ2h0Qm90dG9tVUlDaGlsZE5vZGVzIiwiX19jYWxjU3VtT2ZIZWlnaHRDaGlsZE5vZGVzIiwiY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQiLCJjYXB0dXJlVUlQYWRkaW5nQm90dG9tIiwicGFyc2VJbnQiLCJwYWRkaW5nVG9wIiwiYmFzZWxpbmUiLCJzdW0iLCJpdGVtIiwiY2hpbGROb2RlcyIsInN0b3BTY2FuIiwiX3RoaXMyMCIsIl9fcmVzb3VyY2VzTG9hZGVkIiwiX19pc1N1cHBvcnRTaW1kIiwiZW52SW5mbyIsIm9zIiwib3NTaW1wbGUiLCJ1c2ViT0NSRW52SW5mbyIsInNka1N1cHBvcnRFbnYiLCJ1cmwiLCJmZXRjaCIsImhyZWYiLCJ0aGVuIiwicmVzIiwidGV4dCIsInJlZ2V4Iiwic291cmNlIiwicmVwbGFjZSIsImV2YWwiLCJvblJ1bnRpbWVJbml0aWFsaXplZCIsIl9yZWY5IiwiX3gzIiwiX19zdGFydFNjYW5XYXNtSW1wbCIsIl90aGlzMjEiLCJfX2RldGVjdGVkIiwiX19hZGRyZXNzIiwiX19zc2FSZXRyeUNvdW50Iiwic2NhbiIsIl9yZWYxMCIsImlzRGV0ZWN0ZWRDYXJkIiwic3NhUmVzdWx0Iiwic3NhUmVzdWx0TGlzdCIsIm1hc2tJbmZvIiwicmVzb2x1dGlvbl93IiwicmVzb2x1dGlvbl9oIiwiX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUiLCJwdXNoIiwicmV0cnlTdGFydERhdGUiLCJEYXRlIiwiRkFLRSIsIlJFQUwiLCJFTlNFTUJMRSIsImlzQ29tcGxldGVkIiwiX2xvb3AiLCJleGVjdXRlIiwiX3JlZjExIiwiX3JldCIsInJldHJ5V29ya2luZ1RpbWUiLCJsZWdhY3lGb3JtYXQiLCJuZXdGb3JtYXQiLCJwYXJzZU9jclJlc3VsdCIsInJldmlld19yZXN1bHQiLCJvY3JfdHlwZSIsIm9jcl9yZXN1bHQiLCJvY3Jfb3JpZ2luX2ltYWdlIiwib2NyX21hc2tpbmdfaW1hZ2UiLCJvY3JfZmFjZV9pbWFnZSIsInNzYV9tb2RlIiwiZXhjbHVkZUxpc3QiLCJlbmNyeXB0ZWQiLCJ0b1BhaXJzIiwib21pdCIsInJlZHVjZSIsImFjYyIsIl9yZWYxMiIsImtleSIsInZhbHVlIiwib2NyX2RhdGEiLCJfX29uU3VjY2Vzc1Byb2Nlc3MiLCJfX3JlY292ZXJlZCIsIl9fcmVxdWVzdEdldEFQSVRva2VuIiwiY3JlZGVudGlhbCIsImF1dGhTZXJ2ZXJJbmZvIiwiYmFzZVVybCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwianNvbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJjYXRjaCIsImVyciIsIl9fcmVxdWVzdFNlcnZlck9DUiIsIl90aGlzMjIiLCJfcmVmMTMiLCJvY3JTZXJ2ZXJCYXNlVXJsIiwiYXBpVG9rZW4iLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwiaW1hZ2VfYmFzZTY0IiwibWFza19tb2RlIiwiZmFjZV9tb2RlIiwicmVxdWVzdE9wdGlvbnMiLCJyZWRpcmVjdCIsIl94NCIsIl94NSIsIl9fc3RhcnRTY2FuU2VydmVySW1wbCIsIl90aGlzMjMiLCJfcmVmMTQiLCJfcmVmMTUiLCJiYXNlNjRJbWFnZVJlc3VsdCIsIl9yZWYxNiIsIl94NiIsIl94NyIsImltZ0RhdGFVUkwiLCJsaW1pdFNhdmVJbWFnZUNvdW50Iiwic2hpZnQiLCJfX2RlYnVnTW9kZSIsIl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQiLCJfdGhpczI0IiwiYXBpX3Jlc3BvbnNlIiwicmVzdWx0X2NvZGUiLCJyZXN1bHRfbWVzc2FnZSIsInJlc3VsdENvZGUiLCJfdGhpczI1IiwiZXJyb3JEZXRhaWwiLCJzdGFjayIsImVycm9yX2RldGFpbCIsIl90aGlzMjYiLCJwcmVsb2FkaW5nU3RhdHVzIiwiX3RoaXMyNyIsIl90aGlzMjgiLCJfX3JlY292ZXJ5U2NhbiIsIl90aGlzMjkiLCJjYW52YXNDb250ZXh0IiwiY2xlYXJSZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VzIjpbIm9jci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogZ2xvYmFsLW1vZHVsZSAqL1xuaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgdXNlYk9DUldBU01QYXJzZXIgZnJvbSAnLi9oZWxwZXJzL3VzZWItb2NyLXdhc20tcGFyc2VyLmpzJztcbmltcG9ydCB1c2ViT0NSQVBJUGFyc2VyIGZyb20gJy4vaGVscGVycy91c2ViLW9jci1hcGktcGFyc2VyLmpzJztcbmltcG9ydCB7IGlzU3VwcG9ydFdhc20sIG1lYXN1cmUsIHNpbWQsIHRocmVhZHMgfSBmcm9tICcuL2hlbHBlcnMvd2FzbS1mZWF0dXJlLWRldGVjdC5qcyc7XG5sZXQgaW5zdGFuY2U7XG5jbGFzcyBVc2VCT0NSIHtcbiAgSU5fUFJPR1JFU1MgPSB7XG4gICAgTk9ORTogJ25vbmUnLFxuICAgIE5PVF9SRUFEWTogJ25vdF9yZWFkeScsXG4gICAgUkVBRFk6ICdyZWFkeScsXG4gICAgQ0FSRF9ERVRFQ1RfU1VDQ0VTUzogJ2RldGVjdF9zdWNjZXNzJyxcbiAgICBDQVJEX0RFVEVDVF9GQUlMRUQ6ICdkZXRlY3RfZmFpbGVkJyxcbiAgICBNQU5VQUxfQ0FQVFVSRV9TVUNDRVNTOiAnbWFudWFsX2NhcHR1cmVfc3VjY2VzcycsXG4gICAgTUFOVUFMX0NBUFRVUkVfRkFJTEVEOiAnbWFudWFsX2NhcHR1cmVfZmFpbGVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRDogJ3JlY29nbml6ZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOiAncmVjb2duaXplZF93aXRoX3NzYScsXG4gICAgT0NSX1NVQ0NFU1M6ICdvY3Jfc3VjY2VzcycsXG4gICAgT0NSX1NVQ0NFU1NfV0lUSF9TU0E6ICdvY3Jfc3VjY2Vzc193aXRoX3NzYScsXG4gICAgT0NSX0ZBSUxFRDogJ29jcl9mYWlsZWQnXG4gIH07XG4gIE9DUl9TVEFUVVMgPSB7XG4gICAgTk9UX1JFQURZOiAtMSxcbiAgICBSRUFEWTogMCxcbiAgICBPQ1JfU1VDQ0VTUzogMSxcbiAgICBET05FOiAyXG4gIH07XG4gIFBSRUxPQURJTkdfU1RBVFVTID0ge1xuICAgIE5PVF9TVEFSVEVEOiAtMSxcbiAgICBTVEFSVEVEOiAwLFxuICAgIERPTkU6IDFcbiAgfTtcblxuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cblxuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIF9fZGVidWdNb2RlID0gZmFsc2U7XG4gIF9fT0NSRW5naW5lID0gbnVsbDtcbiAgX19pc1N1cHBvcnRXYXNtID0gZmFsc2U7XG4gIF9faXNTdXBwb3J0U2ltZCA9IGZhbHNlO1xuICBfX2luaXRpYWxpemVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQ7XG4gIF9fbGljZW5zZTtcbiAgX19vY3JUeXBlID0gbnVsbDtcbiAgX19zc2FNb2RlID0gZmFsc2U7XG4gIF9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50ID0gMTA7XG4gIF9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gIF9fc3NhUmV0cnlDb3VudCA9IDA7XG4gIF9fZGV0ZWN0ZWRDYXJkUXVldWUgPSBbXTtcbiAgX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NCA9IFtdO1xuICBfX29uU3VjY2VzcyA9IG51bGw7XG4gIF9fb25GYWlsdXJlID0gbnVsbDtcbiAgX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsO1xuICBfX29jclR5cGVMaXN0ID0gWydpZGNhcmQnLCAnZHJpdmVyJywgJ3Bhc3Nwb3J0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnYWxpZW4nLCAnY3JlZGl0JywgJ2lkY2FyZC1zc2EnLCAnZHJpdmVyLXNzYScsICdwYXNzcG9ydC1zc2EnLCAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLCAnYWxpZW4tc3NhJ107XG4gIF9fb2NyVHlwZU51bWJlclRvU3RyaW5nID0gbmV3IE1hcChbWycxJywgJ2lkY2FyZCddLCBbJzInLCAnZHJpdmVyJ10sIFsnMycsICdwYXNzcG9ydCddLCBbJzQnLCAnZm9yZWlnbi1wYXNzcG9ydCddLCBbJzUnLCAnYWxpZW4nXSwgWyc1LTEnLCAnYWxpZW4nXSwgWyc1LTInLCAnYWxpZW4nXSwgWyc1LTMnLCAnYWxpZW4nXV0pO1xuICBfX29jclN0cmluZ1RvVHlwZU51bWJlciA9IG5ldyBNYXAoW1snaWRjYXJkJywgJzEnXSwgWydkcml2ZXInLCAnMiddLCBbJ3Bhc3Nwb3J0JywgJzMnXSwgWydmb3JlaWduLXBhc3Nwb3J0JywgJzQnXSwgWydhbGllbicsICc1J10sIFsnYWxpZW4nLCAnNS0xJ10sIFsnYWxpZW4nLCAnNS0yJ10sIFsnYWxpZW4nLCAnNS0zJ11dKTtcbiAgX19wYWdlRW5kID0gZmFsc2U7XG4gIF9fb2NyO1xuICBfX2NhbnZhcztcbiAgX19yb3RhdGlvbkNhbnZhcztcbiAgX192aWRlbztcbiAgX192aWRlb1dyYXA7XG4gIF9fZ3VpZGVCb3g7XG4gIF9fZ3VpZGVCb3hXcmFwO1xuICBfX21hc2tCb3hXcmFwO1xuICBfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICBfX2N1c3RvbVVJV3JhcDtcbiAgX190b3BVSTtcbiAgX19taWRkbGVVSTtcbiAgX19ib3R0b21VSTtcbiAgX19wcmV2aWV3VUlXcmFwO1xuICBfX3ByZXZpZXdVSTtcbiAgX19wcmV2aWV3SW1hZ2U7XG4gIF9fY2FwdHVyZVVJV3JhcDtcbiAgX19jYXB0dXJlVUk7XG4gIF9fc3dpdGNoVUlXcmFwO1xuICBfX3N3aXRjaFVJO1xuICBfX2NhcHR1cmVCdXR0b247XG4gIF9fYWRkcmVzcyA9IDA7XG4gIF9fZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgX19yZWNvdmVyZWQgPSBmYWxzZTtcbiAgX19CdWZmZXIgPSBudWxsO1xuICBfX3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gIF9fbWFza0luZm9SZXN1bHRCdWYgPSBudWxsO1xuICBfX1ByZXZJbWFnZSA9IG51bGw7XG4gIF9fc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gIF9fY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgX19yZXNvbHV0aW9uV2lkdGggPSAwO1xuICBfX3Jlc29sdXRpb25IZWlnaHQgPSAwO1xuICBfX3ZpZGVvV2lkdGggPSAwO1xuICBfX3ZpZGVvSGVpZ2h0ID0gMDtcbiAgX19yZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgX19pbnRlcnZhbFRpbWVyO1xuICBfX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXI7XG4gIF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQ7XG4gIF9fc3RyZWFtO1xuICBfX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICBfX2ZhY2luZ01vZGVDb25zdHJhaW50ID0gJ2Vudmlyb25tZW50JztcbiAgX191aU9yaWVudGF0aW9uID0gJyc7XG4gIF9fcHJldlVpT3JpZW50YXRpb24gPSAnJztcbiAgX192aWRlb09yaWVudGF0aW9uID0gJyc7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgX190aHJvdHRsaW5nUmVzaXplRGVsYXkgPSA1MDA7XG4gIF9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPSAzMDA7IC8vIOyehOyLnFxuICBfX3JldHJ5Q291bnRHZXRBZGRyZXNzID0gMDsgLy8g7J6E7IucXG4gIF9fZGV2aWNlSW5mbztcbiAgX19pc1JvdGF0ZWQ5MG9yMjcwID0gZmFsc2U7XG4gIF9faW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTtcbiAgX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT05FO1xuICBfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICBfX2d1aWRlQm94UmF0aW9CeVdpZHRoID0gMS4wOyAvLyDsiJjsoJXrtojqsIBcbiAgX192aWRlb1JhdGlvQnlIZWlnaHQgPSAwLjk7IC8vIOyImOygleu2iOqwgFxuICBfX2d1aWRlQm94UmVkdWNlUmF0aW8gPSAwLjg7IC8vIOyImOygleu2iOqwgFxuICBfX2Nyb3BJbWFnZVNpemVXaWR0aCA9IDA7XG4gIF9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IDA7XG4gIF9faXNTd2l0Y2hUb1NlcnZlck1vZGUgPSBmYWxzZTtcblxuICAvKiogRGVmYXVsdCBvcHRpb25zICovXG4gIF9fb3B0aW9ucyA9IG5ldyBPYmplY3Qoe1xuICAgIC8vIOuUlOuyhOq5hSDsmLXshZhcbiAgICBzaG93Q2xpcEZyYW1lOiBmYWxzZSxcbiAgICAvLyBjaWxwLWZyYW1lIOuztOq4sFxuICAgIHNob3dDYW52YXNQcmV2aWV3OiBmYWxzZSxcbiAgICAvLyBjYW52YXMgcHJldmlldyDrs7TquLBcblxuICAgIC8vIOy2nOugpSDsmLXshZhcbiAgICB1c2VFbmNyeXB0TW9kZTogZmFsc2UsXG4gICAgLy8g7JWU7Zi47ZmUIOyggeyaqVxuICAgIHVzZUxlZ2FjeUZvcm1hdDogZmFsc2UsXG4gICAgLy8gTGVnYWN5IGZvcm1hdCDsp4Dsm5BcbiAgICB1c2VNYXNrSW5mbzogdHJ1ZSxcbiAgICAvLyDrp4jsiqTtgrkg7KKM7ZGcIOyngOybkFxuICAgIHVzZUZhY2VJbWFnZTogdHJ1ZSxcbiAgICAvLyDsi6DrtoTspp0g64K0IOyWvOq1tCDsgqzsp4RcblxuICAgIC8vIFVJIOyEpOyglVxuICAgIHVzZVRvcFVJOiB0cnVlLFxuICAgIC8vIOyDgeuLqCBVSVxuICAgIHVzZVRvcFVJVGV4dE1zZzogZmFsc2UsXG4gICAgLy/sg4Hri6ggVUkgPiBURVhUXG4gICAgdXNlTWlkZGxlVUk6IHRydWUsXG4gICAgLy/spJHri6ggVUlcbiAgICB1c2VNaWRkbGVVSVRleHRNc2c6IHRydWUsXG4gICAgLy8g7KSR64uoIFVJID4gVEVYVFxuICAgIHVzZUJvdHRvbVVJOiB0cnVlLFxuICAgIC8vIO2VmOuLqCBVSVxuICAgIHVzZUJvdHRvbVVJVGV4dE1zZzogZmFsc2UsXG4gICAgLy8g7ZWY64uoIFVJID4gVEVYVFxuICAgIHVzZVByZXZpZXdVSTogdHJ1ZSxcbiAgICAvLyBQcmV2aWV3IFVJXG4gICAgdXNlQ2FwdHVyZVVJOiB0cnVlLFxuICAgIC8vIOy6oeyymOuyhO2KvCBVSVxuXG4gICAgLy8g7J247IudIO2UhOugiOyehCDsmLXshZhcbiAgICBmcmFtZUJvcmRlclN0eWxlOiB7XG4gICAgICB3aWR0aDogNSxcbiAgICAgIC8vIGJvcmRlci13aWR0aFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIC8vIGJvcmRlci1yYWRpdXNcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgLy8gYm9yZGVyLXN0eWxlXG5cbiAgICAgIC8vIOuLqOqzhOuzhCDsnbjsi50g7ZSE66CI7J6EIGJvcmRlciDsg4nsg4FcbiAgICAgIG5vdF9yZWFkeTogJyMwMDAwMDAnLFxuICAgICAgLy8g7Iqk7LqU7KSA67mEIDog6rKA7KCVXG4gICAgICByZWFkeTogJyNiOGI4YjgnLFxuICAgICAgLy8g7Iqk7LqU64yA6riwIDog7ZqM7IOJXG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyEseqztSA6IO2VmOuKmFxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyLpO2MqCA6IOuztOudvFxuICAgICAgbWFudWFsX2NhcHR1cmVfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyEseqztSA6IO2VmOuKmFxuICAgICAgbWFudWFsX2NhcHR1cmVfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7Iuk7YyoIDog67O06528XG4gICAgICByZWNvZ25pemVkOiAnIzAwM2FjMicsXG4gICAgICAvLyBPQ1LsmYTro4wgOiDtjIzrnpFcbiAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6ICcjMDAzYWMyJyxcbiAgICAgIC8vIOyCrOuzuO2MkOuzhOykkSjsgqzrs7jtjJDrs4QgT04pIDog7YyM656RXG4gICAgICBvY3Jfc3VjY2VzczogJyMxNGIwMGUnLFxuICAgICAgLy8gT0NS7JmE66OMIDog7LSI66GdXG4gICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogJyMxNGIwMGUnLFxuICAgICAgLy8gT0NS7JmE66OMKOyCrOuzuO2MkOuzhCBPTikgOiDstIjroZ1cbiAgICAgIG9jcl9mYWlsZWQ6ICcjRkExMTNEJyAvLyBPQ1Lsi6TtjKggOiDruajqsJVcbiAgICB9LFxuXG4gICAgLy8g66eI7Iqk7YGsIO2UhOugiOyehCBmaWxsIOy7rOufrCDrs4Dqsr0g7IKs7JqpIOyXrOu2gFxuICAgIHVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlOiB0cnVlLFxuICAgIC8vIOuniOyKpO2BrCDtlITroIjsnoQg7Ji17IWYICjsubTrqZTrnbwg67mE65SU7JikIOyYgeyXreyXkOyEnCDsnbjsi50g7ZSE66CI7J6E66eMIOuztOydtOqyjCDtlZjqs6Ag64KY66i47KeA66W8IOuNruyWtOyTsOuKlCDtlITroIjsnoQg7JiB7JetKVxuICAgIG1hc2tGcmFtZVN0eWxlOiB7XG4gICAgICBjbGlwX2ZyYW1lOiAnI2ZmMDBiZicsXG4gICAgICAvLyBjbGlwLWZyYW1lIOyDieyDgSA6IOuUpe2NvO2UjCAo7IiY7KCV67aI6rCAKVxuICAgICAgYmFzZV9jb2xvcjogJyMzMzMzMzMnLFxuICAgICAgLy8gbWFzay1mcmFtZSDsg4nsg4EgOiDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuXG4gICAgICAvLyDri6jqs4Trs4Qg66eI7Iqk7YGsIO2UhOugiOyehCBmaWxsIOyDieyDgVxuICAgICAgbm90X3JlYWR5OiAnIzMzMzMzMycsXG4gICAgICAvLyDsiqTsupTspIDruYRcbiAgICAgIHJlYWR5OiAnIzMzMzMzMycsXG4gICAgICAvLyDsiqTsupTrjIDquLBcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICAvLyDsubTrk5zqsoDstpwg7ISx6rO1XG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzMzMzMzMycsXG4gICAgICAvLyDsubTrk5zqsoDstpwg7Iuk7YyoXG4gICAgICBtYW51YWxfY2FwdHVyZV9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7ISx6rO1XG4gICAgICBtYW51YWxfY2FwdHVyZV9mYWlsZWQ6ICcjMzMzMzMzJyxcbiAgICAgIC8vIOyImOuPmey0rOyYgSDsi6TtjKhcbiAgICAgIHJlY29nbml6ZWQ6ICcjMjIyMjIyJyxcbiAgICAgIC8vIE9DUuyZhOujjFxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMyMjIyMjInLFxuICAgICAgLy8g7IKs67O47YyQ67OE7KSRKOyCrOuzuO2MkOuzhCBPTilcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzExMTExMScsXG4gICAgICAvL09DUuyZhOujjFxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTExMTExJyxcbiAgICAgIC8vIE9DUuyZhOujjCjsgqzrs7jtjJDrs4QgT04pXG4gICAgICBvY3JfZmFpbGVkOiAnIzExMTExMScgLy8gT0NS7Iuk7YyoXG4gICAgfSxcblxuICAgIC8vIOy0rOyYgeyYteyFmFxuICAgIHVzZUF1dG9Td2l0Y2hUb1NlcnZlck1vZGU6IGZhbHNlLFxuICAgIC8vIOyggOyCrOyWkSDri6jrp5Dsl5DshJwg7ISc67KET0NS66GcIOyekOuPmSDsoITtmZgg6riw64qlXG4gICAgdXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlOiBmYWxzZSxcbiAgICAvLyDsiJjrj5nsnLzroZwg7ISc67KET0NSIOyghO2ZmCDquLDriqUgKOyImOuPmeydtCB0cnVl7J2066m0IOyekOuPmeydgCDrrLTsi5zrkKgpXG4gICAgc3dpdGNoVG9TZXJ2ZXJUaHJlc2hvbGQ6IDIwLjAsXG4gICAgLy8g7J6Q64+Z7KCE7ZmYIOq4sOykgOqwkiAo7ISx64qlIOy4oeygley5mCBtcylcbiAgICB1c2VGb3JjZUNvbXBsZXRlVUk6IGZhbHNlLFxuICAgIC8vIFdBU00g66qo65Oc7J2865WMIOuyhO2KvCDriITrpbzsi5wg7ZW064u5IOyLnOygkOyXkCDqsJXsoJzroZwg7JmE66OMIOyCrOyaqeyXrOu2gFxuXG4gICAgLy8g7IiY64+Z7LSs7JiBIOuyhO2KvCDsmLXshZhcbiAgICBjYXB0dXJlQnV0dG9uU3R5bGU6IHtcbiAgICAgIHN0cm9rZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgLy8g67KE7Yq8IO2FjOuRkOumrChzdHJva2UpIOyDieyDgVxuICAgICAgYmFzZV9jb2xvcjogJyM1ZThmZmYnIC8vIOuyhO2KvCDsg4nsg4FcbiAgICB9LFxuXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgIC8vIHdhc20sIGRhdGEg7YyM7J28IOumrOyGjOyKpCBiYXNlIOqyveuhnCAoQ0ROIOyCrOyaqeyLnCDrs4Dqsr0pXG4gICAgZGV2aWNlTGFiZWw6ICcnLFxuICAgIHZpZGVvVGFyZ2V0SWQ6ICcnLFxuICAgIC8vIOy5tOuplOudvCDshKTsoJVcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICAvLyByb3RhdGlvbi1kZWdyZWUg7Lm066mU65286rCAIO2ajOyghOuQnCDqsIHrj4QgKDkwLCAxOTAsIDI3MClcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgICAvLyBtaXJyb3ItbW9kZSDshYDtlLwg7Lm066mU6528KO2CpOyYpOyKpO2BrCDrk7EpIOyCrOyaqeyLnCDsoozsmrAg67CY7KCEXG5cbiAgICAvLyDsgqzrs7jtjJDrs4QgUkVUUlkg7ISk7KCVXG4gICAgLy8gc3NhUmV0cnlUeXBlXG4gICAgLy8gICAtIFJFQUwgICAgIDog67O47J24KFJFQUwpIOqxsOu2gOycqCAtPiBGYWxzZSBOZWdhdGl2ZSjsi6TsoJzqsJLsnYAgUkVBTOyduOuNsCDsmIjsuKHqsJLsnYAgRkFLReudvOyEnCDti4DrprDqsr3smrAp66W8IOuCruy2lOq4sCDsnITtlbQsXG4gICAgLy8gICAtIEZBS0UgICAgIDog7YOA7J24KEZBS0UpIOyImOudveycqCAtPiBGYWxzZSBQb3NpdGl2ZSjsi6TsoJzqsJLsnYAgRkFLReyduOuNsCDsmIjsuKHqsJLsnYAgUkVBTOydtOudvOyEnCDti4DrprDqsr3smrAp66W8IOuCruy2lOq4sCDsnITtlbRcbiAgICAvLyAgIC0gRU5TRU1CTEUgOiDtj4nqt6Ag7KCI64yA6rCSIC0+IHNzYU1heFJldHJ5Q291bnQg66eM7YG8IOuwmOuztSDsiJjtlontlZjqs6AgZmRfY29uZmlkZW5jZSDsoIjrjIDqsJIg6rCS7J2YIO2Pieq3oOycvOuhnCDtjJDsoJVcbiAgICAvLyBzc2FNYXhSZXRyeUNvdW50IOyEpOyglSDqsJLrp4ztgbwg7J6s7Iuc64+E7ZWY7JesIO2VnOuyiOydtOudvOuPhCDquLDspIDqsJIoUkVBTCDrmJDripQgRkFLRSnsnbQg65yo66m0IOq4sOykgOqwkihSRUFMIOuYkOuKlCBGQUtFKeuhnCDtjJDsoJVcbiAgICBzc2FSZXRyeVR5cGU6ICdFTlNFTUJMRScsXG4gICAgc3NhUmV0cnlQaXZvdDogMC44LFxuICAgIC8vIFJFQUwvRkFLReulvCDtjJDsoJXtlZjripQgZmRfY29uZmlkZW5jZSDquLDspIDqsJIgKHdhc20g67Cw7Y+sIOuyhOyghOyXkCDrlLDrnbwg64uk66aEKSDigLsg7IiY7KCV67aI6rCAXG4gICAgc3NhTWF4UmV0cnlDb3VudDogMCAvLyDstZzrjIAgUkVUUlkg7ZqM7IiY7ISk7KCVIDDsnbTrqbQg66+47IKs7JqpXG4gIH0pO1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqIHB1YmxpYyBtZXRob2RzICovXG4gIGFzeW5jIHByZWxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRDtcbiAgICAgIGF3YWl0IHRoaXMuX19sb2FkUmVzb3VyY2VzKCk7XG4gICAgICB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORTtcbiAgICAgIHRoaXMuX19wcmVsb2FkZWQgPSB0cnVlO1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLl9faW5pdGlhbGl6ZWQ7XG4gIH1cbiAgaXNQcmVsb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkZWQ7XG4gIH1cbiAgZ2V0UHJlbG9hZGluZ1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lO1xuICB9XG4gIGluaXQoc2V0dGluZ3MpIHtcbiAgICBpZiAoISEhc2V0dGluZ3MubGljZW5zZUtleSkgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIGtleSBpcyBlbXB0eScpO1xuICAgIHRoaXMuX19saWNlbnNlID0gc2V0dGluZ3MubGljZW5zZUtleTtcbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5fX29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy5fX3dpbmRvd0V2ZW50QmluZCgpO1xuICAgICAgdGhpcy5fX2RldmljZUluZm8gPSBkZXRlY3Rvci5nZXRPc1ZlcnNpb24oKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuX19pc1N1cHBvcnRXYXNtID0gaXNTdXBwb3J0V2FzbSgpO1xuICAgICAgaWYgKCF0aGlzLl9faXNTdXBwb3J0V2FzbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYkFzc2VtYmx5IGlzIG5vdCBzdXBwb3J0ZWQuIGluIHRoaXMgYnJvd3Nlci4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldE9wdGlvbihzZXR0aW5ncykge1xuICAgIHRoaXMuX19vcHRpb25zID0gc2V0dGluZ3M7XG4gIH1cbiAgZ2V0T3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucztcbiAgfVxuICBnZXRPY3JUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclR5cGVOdW1iZXJUb1N0cmluZy5nZXQodHlwZSk7XG4gIH1cbiAgZ2V0T2NyVHlwZU51bWJlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclN0cmluZ1RvVHlwZU51bWJlci5nZXQoc3RyaW5nKTtcbiAgfVxuICBnZXRVSU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdWlPcmllbnRhdGlvbjtcbiAgfVxuICBnZXRWaWRlb09yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgfVxuICBhc3luYyBjaGVja1N3aXRjaFRvU2VydmVyTW9kZSgpIHtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAvLyDsiJjrj5nsoITtmZggb24g7J2066m0IOyImOuPmeyghO2ZmCDsmrDshKBcbiAgICAgIHJldHVybiB0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOyImOuPmeyghO2ZmCBvZmYg7J2066m0IOyekOuPmeyghO2ZmCDssrTtgaxcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VBdXRvU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAgIC8vIOyekOuPmeyghO2ZmCBvbuydvOuVjFxuICAgICAgICAvLyDshLHriqUg7Lih7KCV6rCS7J2EIOq4sOykgOycvOuhnCBXQVNNIG9yIFNlcnZlclxuICAgICAgICByZXR1cm4gKGF3YWl0IG1lYXN1cmUoKSkgPiB0aGlzLl9fb3B0aW9ucy5zd2l0Y2hUb1NlcnZlclRocmVzaG9sZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOyImOuPmeyghO2ZmOuPhCBvZmYsIOyekOuPmeyghO2ZmCBvZmZcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID0gYXdhaXQgdGhpcy5jaGVja1N3aXRjaFRvU2VydmVyTW9kZSgpO1xuICAgIHRoaXMuX19vY3JUeXBlID0gdHlwZTtcbiAgICB0aGlzLl9fc3NhTW9kZSA9IHRoaXMuX19vY3JUeXBlLmluZGV4T2YoJy1zc2EnKSA+IC0xO1xuICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG4gICAgdGhpcy5fX29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlID0gb25JblByb2dyZXNzQ2hhbmdlO1xuICAgIGlmIChvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSkge1xuICAgICAgICB0aGlzLl9fdG9wVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnRvcFVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJKSB7XG4gICAgICAgIHRoaXMuX19taWRkbGVVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkubWlkZGxlVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHtcbiAgICAgICAgdGhpcy5fX2JvdHRvbVVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5ib3R0b21VSTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbml0aWFsaXplZCEnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgICAgLy8gc2VydmVyTW9kZVxuICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlRW5jcnlwdE1vZGUgJiYgdGhpcy5fX2lzU3VwcG9ydFdhc20pIGF3YWl0IHRoaXMuX19wcmVsb2FkaW5nV2FzbSgpO1xuICAgICAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuU2VydmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3YXNtTW9kZVxuICAgICAgICBhd2FpdCB0aGlzLl9fcHJlbG9hZGluZ1dhc20oKTtcbiAgICAgICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2Nhbldhc20oKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuc3RvcE9DUigpO1xuICAgIH1cbiAgfVxuICBzdG9wT0NSKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBudWxsO1xuICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICB9XG4gIHNldElnbm9yZUNvbXBsZXRlKHZhbCkge1xuICAgIHRoaXMuX19PQ1JFbmdpbmUuc2V0SWdub3JlQ29tcGxldGUodmFsKTtcbiAgfVxuICBhc3luYyByZXN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UsIGlzU3dpdGNoTW9kZSA9IGZhbHNlKSB7XG4gICAgaWYgKGlzU3dpdGNoTW9kZSkge1xuICAgICAgYXdhaXQgdGhpcy5zdG9wT0NSKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICB9XG5cbiAgLyoqIHByaXZhdGUgbWV0aG9kcyAqL1xuICBhc3luYyBfX3dhaXRQcmVsb2FkZWQoKSB7XG4gICAgbGV0IHdhaXRpbmdSZXRyeUNvdW50ID0gMDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YWl0aW5nUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9O1xuICAgICAgY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBfX3dpbmRvd0V2ZW50QmluZCgpIHtcbiAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgIGlmICgvaXBob25lfGlwb2R8aXBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgY29uc3Qgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSA9IGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzXy5fX3BhZ2VFbmQgPSB0cnVlO1xuICAgICAgX3RoaXNfLmNsZWFudXAoKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uX19vY3JUeXBlKSByZXR1cm47XG4gICAgICBpZiAoIV90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSkge1xuICAgICAgICBfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSB0cnVlO1xuICAgICAgICBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIF90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBfdGhpc18ucmVzdGFydE9DUihfdGhpc18uX19vY3JUeXBlLCBfdGhpc18uX19vblN1Y2Nlc3MsIF90aGlzXy5fX29uRmFpbHVyZSwgX3RoaXNfLl9fb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlUmVzaXplLCBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplRGVsYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cbiAgX19ibG9iVG9CYXNlNjQoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgfSk7XG4gIH1cblxuICAvKiog65287J207IS87IqkIO2CpOulvCBoZWFwIOyXkCBhbGxvY2F0aW9uICovXG4gIF9fZ2V0U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAoISEhdGhpcy5fX2xpY2Vuc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBLZXkgaXMgZW1wdHknKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLl9fT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOCh0aGlzLl9fbGljZW5zZSkgKyAxO1xuICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICB0aGlzLl9fT0NSRW5naW5lLnN0cmluZ1RvVVRGOCh0aGlzLl9fbGljZW5zZSwgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICByZXR1cm4gdGhpcy5fX3N0cmluZ09uV2FzbUhlYXA7XG4gIH1cbiAgX19lbmNyeXB0U2NhblJlc3VsdChvY3JSZXN1bHQpIHtcbiAgICBsZXQgc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2Ygb2NyUmVzdWx0ID09PSAnbnVtYmVyJykgb2NyUmVzdWx0ID0gb2NyUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICBpZiAob2NyUmVzdWx0ID09PSAnJykgcmV0dXJuICcnO1xuICAgICAgaWYgKHR5cGVvZiBvY3JSZXN1bHQgIT09ICdzdHJpbmcnICYmICEhIW9jclJlc3VsdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ29jclJlc3VsdCBpcyBlbXB0eScpO1xuICAgICAgfVxuICAgICAgY29uc3QganNvblN0cmluZyA9IG9jclJlc3VsdDtcbiAgICAgIGNvbnN0IGxlbmd0aEJ5dGVzID0gdGhpcy5fX09DUkVuZ2luZS5sZW5ndGhCeXRlc1VURjgoanNvblN0cmluZykgKyAxO1xuICAgICAgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyhsZW5ndGhCeXRlcyk7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLnN0cmluZ1RvVVRGOChqc29uU3RyaW5nLCBzdHJpbmdPbldhc21IZWFwLCBsZW5ndGhCeXRlcyk7XG4gICAgICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZS5lbmNyeXB0UmVzdWx0KHN0cmluZ09uV2FzbUhlYXApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoc3RyaW5nT25XYXNtSGVhcCkge1xuICAgICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICBzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX19zZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIGxldCByZXNvbHV0aW9uVGV4dCA9ICdub3QgcmVhZHknO1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAwKSB7XG4gICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgICByZXNvbHV0aW9uVGV4dFxuICAgICAgfTtcbiAgICB9XG4gICAgcmVzb2x1dGlvblRleHQgPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCArICd4JyArIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEwODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxOTIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxOTIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTA4MCkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMjgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gNzIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSA3MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMjgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9fdmlkZW9XaWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgIHRoaXMuX192aWRlb0hlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9O1xuICB9XG4gIF9fZ2V0U2Nhbm5lckFkZHJlc3Mob2NyVHlwZSkge1xuICAgIGlmICghdGhpcy5fX29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIGxldCBkZXN0cm95Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgY29uc3Qgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19nZXRTdHJpbmdPbldhc21IZWFwKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgLy8gT0NSXG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRJRENhcmRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUlEQ2FyZFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRQYXNzcG9ydFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95UGFzc3BvcnRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUFsaWVuU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUNyZWRpdFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgTGljZW5zZSBLZXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICB2b2lkIDA7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2dldEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2ModGhpcy5fX3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ICogNCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fX3Jlc3VsdEJ1ZmZlcikge1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyg0MDk2KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tJbmZvKSB7XG4gICAgICBpZiAoIXRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1Zikge1xuICAgICAgICB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MoNDA5Nik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy5fX0J1ZmZlciwgdGhpcy5fX3Jlc3VsdEJ1ZmZlciwgdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmXTtcbiAgfVxuICBhc3luYyBfX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIG1hc2tNb2RlLCBjcm9wTW9kZSwgaW1nVHlwZSA9ICdjYXJkJykge1xuICAgIHRyeSB7XG4gICAgICBpZiAoaW1nVHlwZSA9PT0gJ2NhcmQnKSB7XG4gICAgICAgIHRoaXMuX19PQ1JFbmdpbmUuZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlKGFkZHJlc3MsIG1hc2tNb2RlLCBjcm9wTW9kZSk7XG4gICAgICB9IGVsc2UgaWYgKGltZ1R5cGUgPT09ICdmYWNlJykge1xuICAgICAgICB0aGlzLl9fT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkUGhvdG9JbWFnZShhZGRyZXNzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGpwZ1NpemUgPSB0aGlzLl9fT0NSRW5naW5lLmdldEVuY29kZWRKcGdTaXplKCk7XG4gICAgICBjb25zdCBqcGdQb2ludGVyID0gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnQnVmZmVyKCk7XG4gICAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fX09DUkVuZ2luZS5IRUFQOC5idWZmZXIsIGpwZ1BvaW50ZXIsIGpwZ1NpemUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0Vmlldyk7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3VsdF0sIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9fYmxvYlRvQmFzZTY0KGJsb2IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUVuY29kZWRKcGcoKTtcbiAgICB9XG4gIH1cblxuICAvKiogRnJlZSBidWZmZXIgKi9cbiAgX19kZXN0cm95QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fQnVmZmVyKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19CdWZmZXIpO1xuICAgICAgdGhpcy5fX0J1ZmZlciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX19kZXN0cm95UmVzdWx0QnVmZmVyKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpO1xuICB9XG4gIF9fZGVzdHJveVJlc3VsdEJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX3Jlc3VsdEJ1ZmZlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fcmVzdWx0QnVmZmVyKTtcbiAgICAgIHRoaXMuX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICBfX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1Zik7XG4gICAgICB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGcmVlIFByZXZJbWFnZSBidWZmZXIgKi9cbiAgX19kZXN0cm95UHJldkltYWdlKCkge1xuICAgIGlmICh0aGlzLl9fUHJldkltYWdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19QcmV2SW1hZ2UpO1xuICAgICAgdGhpcy5fX1ByZXZJbWFnZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIGZyZWUgc3RyaW5nIGhlYXAgYnVmZmVyICovXG4gIF9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogZnJlZSBzY2FubmVyIGFkZHJlc3MgKi9cbiAgX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrKSB7XG4gICAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlb0VsZW1lbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH0gPSBhd2FpdCB0aGlzLl9fc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFJlc29sdXRpb24pIHtcbiAgICAgIGlmIChyZXNvbHV0aW9uVGV4dCAhPT0gJ25vdCByZWFkeScpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSZXNvbHV0aW9uO1xuICB9XG4gIF9fZ2V0Um90YXRpb25EZWdyZWUoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9fb3B0aW9ucy5yb3RhdGlvbkRlZ3JlZSAlIDM2MCArIDM2MCkgJSAzNjA7XG4gIH1cbiAgX19nZXRNaXJyb3JNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucy5taXJyb3JNb2RlO1xuICB9XG4gIGFzeW5jIF9fY3JvcEltYWdlRnJvbVZpZGVvKCkge1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSByZXR1cm4gW251bGwsIG51bGwsIG51bGxdO1xuICAgIGxldCBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcblxuICAgIC8vIHNvdXJjZSBpbWFnZSAob3IgdmlkZW8pXG4gICAgLy8g4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIogc3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIPilIjilIjilIjilIgg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyBzeCAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBzSGVpZ2h0ICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uIGNhbnZhc1xuICAgIC8vIOKUgyAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgICAgICAgIOKUg+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICAgICAgICDilIMgICAg4pSKICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICAgICAgICBzV2lkdGggICAgICAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiBkeSAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyAgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSD4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICBkeCAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBkSGVpZ2h0IOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgIGRXaWR0aCAgICAgICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJtcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSlcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQvZHJhd0ltYWdlXG5cbiAgICBsZXQgY2FsY0NhbnZhcyA9IGNhbnZhcztcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgPSB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoLCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodF0gPSBbY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQsIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGhdO1xuICAgICAgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW2NhbGNSZXNvbHV0aW9uX2gsIGNhbGNSZXNvbHV0aW9uX3ddO1xuICAgICAgY2FsY0NhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgbGV0IGNhbGNNYXhTV2lkdGggPSA5OTk5OTtcbiAgICBsZXQgY2FsY01heFNIZWlnaHQgPSA5OTk5OTtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3gsIHN5O1xuICAgIGNvbnN0IHJhdGlvID0gY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBjb25zdCBzV2lkdGggPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplV2lkdGggKiByYXRpbyksIGNhbGNNYXhTV2lkdGgpO1xuICAgIGNvbnN0IHNIZWlnaHQgPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0ICogcmF0aW8pLCBjYWxjTWF4U0hlaWdodCk7XG4gICAgc3ggPSBNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRXaWR0aCAtIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGgpIC8gMiAqIHJhdGlvKTtcbiAgICBzeSA9IE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudEhlaWdodCAtIGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0KSAvIDIgKiByYXRpbyk7XG4gICAgY29uc3QgY2FsY0NvbnRleHQgPSBjYWxjQ2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5kZWJ1Zygnc3gsIHN5LCBzV2lkdGgocmVzb2x1dGlvbl93KSwgc0hlaWdodChyZXNvbHV0aW9uX2gpLCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCcsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCk7XG4gICAgY2FsY0NvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgMCwgMCwgY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faCk7XG4gICAgY29uc3QgaW1nRGF0YSA9IGNhbGNDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhVXJsID0gY2FsY0NhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9fcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIHRoaXMuX19nZXRSb3RhdGlvbkRlZ3JlZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtpbWdEYXRhLCBpbWdEYXRhVXJsXTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgZGVncmVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKGRlZ3JlZSA9PT0gMCkge1xuICAgICAgICByZXNvbHZlKFtpbWdEYXRhLCBpbWdEYXRhVXJsXSk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBpbWdEYXRhVXJsO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgLy8gY2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICAgIGNvbnN0IHRlbXBDb250ZXh0ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0ZW1wQ2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgaWYgKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcud2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWdyZWUgPT09IDkwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLmhlaWdodCwgMCk7ZWxzZSBpZiAoZGVncmVlID09PSAxODApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO2Vsc2UgaWYgKGRlZ3JlZSA9PT0gMjcwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoMCwgaW1nLndpZHRoKTtcbiAgICAgICAgdGVtcENvbnRleHQucm90YXRlKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuICAgICAgICByZXNvbHZlKFtuZXdJbWFnZURhdGEsIHRlbXBDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyldKTtcbiAgICAgICAgdGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCwgcmV0cnlJbWcgPSBudWxsKSB7XG4gICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPCAwKSB7XG4gICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbWdEYXRhO1xuICAgICAgbGV0IGltZ0RhdGFVcmwgPSBudWxsO1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAocmV0cnlJbWcgIT09IG51bGwpIHtcbiAgICAgICAgaW1nRGF0YSA9IHJldHJ5SW1nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgW2ltZ0RhdGEsIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy5fX2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgfVxuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBsZXQga29yID0gZmFsc2UsXG4gICAgICAgIGFsaWVuID0gZmFsc2UsXG4gICAgICAgIHBhc3Nwb3J0ID0gZmFsc2U7XG4gICAgICBzd2l0Y2ggKHRoaXMuX19vY3JUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBrb3IgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgcGFzc3BvcnQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWxpZW4gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICB9XG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmIChrb3IgfHwgcGFzc3BvcnQgfHwgYWxpZW4pIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5kZXRlY3RfaWRjYXJkX29wdChidWZmZXIsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCBhZGRyZXNzLCBrb3IsIGFsaWVuLCBwYXNzcG9ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmRldGVjdF9pZGNhcmQoYnVmZmVyLCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0NhcmRib3hEZXRlY3RlZCByZXN1bHQgLT0tLS0tLScsIHJlc3VsdClcbiAgICAgIHJldHVybiBbISFyZXN1bHQsIGltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3IgOiAnICsgZTtcbiAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHNzYU1vZGUsIGlzU2V0SWdub3JlQ29tcGxldGUsIGltZ0RhdGEsIGltZ0RhdGFVcmwpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGFkZHJlc3MgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBjb25zdCByZWNvZ25pdGlvbiA9IGFzeW5jIGlzU2V0SWdub3JlQ29tcGxldGUgPT4ge1xuICAgICAgICBpZiAoaXNTZXRJZ25vcmVDb21wbGV0ZSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCAwLCBpbWdEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5JRENhcmQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhblBhc3Nwb3J0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkFsaWVuKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzog7Iug7Jqp7Lm065Oc64qUIOyVhOyngSBrZXk6dmFsdWUg7ZiV7YOc66GcIOuzgO2ZmCDslYjrkJjslrQg7J6I7J2MXG4gICAgICAgIGlmIChvY3JUeXBlID09PSAnY3JlZGl0Jykge1xuICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IG51bGwgfHwgb2NyUmVzdWx0ID09PSAnJyB8fCBvY3JSZXN1bHQgPT09ICdmYWxzZScgfHwgb2NyUmVzdWx0WzBdID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fY3N2VG9PYmplY3Qob2NyUmVzdWx0KTtcbiAgICAgICAgaWYgKG9jclJlc3VsdD8uY29tcGxldGUgIT09ICd1bmRlZmluZWQnICYmIG9jclJlc3VsdD8uY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc1NldElnbm9yZUNvbXBsZXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPCB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCkge1xuICAgICAgICAgICAgICAvLyBkZXRlY3RlZENhcmRRdWV1ZeyXkOyEnCDtlZzsnqXsnYQg6rq864K07IScIOqwseyLoO2VnOuLpC5cbiAgICAgICAgICAgICAgLy8g7KCA7J6l65CY7Ja07J6I64qUIOydtOuvuOyngOydmCDsiKvsnpDqsIAgcmV0cnkg67O064ukIOyekeydgOqyveyasCDrjIDruYTtlZjsl6wgJeulvCDsgqzsmqntlahcbiAgICAgICAgICAgICAgY29uc3QgcXVldWVJZHggPSB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCAlIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgIGltZ0RhdGEgPSB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVbcXVldWVJZHhdO1xuICAgICAgICAgICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVjb2duaXRpb24oaXNTZXRJZ25vcmVDb21wbGV0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyDsgqzsp4Qg7ZWc7J6l7Jy866GcIE9DUiDsi6TtjKggKHBvcHVwIOuCtOumrOqzoCBzZXRJZ25vcmVDb21wbGV0ZShmYWxzZSkg7LKY66asP1xuICAgICAgICAgICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gICAgICAgICAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpO1xuICAgICAgICAgICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTsgLy8g7Yyd7JeF7J20IOuCtOugpOqwiOuVjCDsspjrpqzrkJjsp4Drp4wg66+466asIOyymOumrFxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQsIGZhbHNlLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudmlkZW8sIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLy8gZW5kIG9mIGZ1bmN0aW9uIHJlY29nbml0aW9uKClcblxuICAgICAgaWYgKGF3YWl0IHJlY29nbml0aW9uKGlzU2V0SWdub3JlQ29tcGxldGUpKSB7XG4gICAgICAgIGNvbnN0IGlzQ3JlZGl0Q2FyZCA9IG9jclR5cGUgPT09ICdjcmVkaXQnO1xuICAgICAgICBsZXQgb3JpZ2luSW1hZ2UgPSBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgZmFsc2UsIGlzQ3JlZGl0Q2FyZCk7XG4gICAgICAgIGxldCBtYXNrSW1hZ2UgPSBpc0NyZWRpdENhcmQgPyBudWxsIDogYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRydWUsIHRydWUpO1xuICAgICAgICBtYXNrSW1hZ2UgPSBtYXNrSW1hZ2UgPT09ICdkYXRhOicgPyBudWxsIDogbWFza0ltYWdlO1xuICAgICAgICBsZXQgZmFjZUltYWdlID0gdGhpcy5fX29wdGlvbnMudXNlRmFjZUltYWdlID8gYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRydWUsIHRydWUsICdmYWNlJykgOiBudWxsO1xuICAgICAgICBpZiAoc3NhTW9kZSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBLCBmYWxzZSwgbWFza0ltYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtvY3JSZXN1bHQsIG9yaWdpbkltYWdlLCBtYXNrSW1hZ2UsIGZhY2VJbWFnZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsLCBudWxsLCBudWxsXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX3N0YXJ0VHJ1dGgob2NyVHlwZSwgYWRkcmVzcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTEpIHtcbiAgICAgICAgLy8gVE9ETzogd29ya2Vy66W8IOyCrOyaqe2VmOyXrCDrqZTsnbgoVUkg656c642U66eBKSDsiqTroIjrk5zqsIAg66mI7LaU7KeAIOyViuuPhOuhnSDsspjrpqwg7ZWE7JqUICjtmITsnqwgbG9hZGluZyBVSSDrnYTsmrDrqbQg7JWg64uI66mU7J207IWYIOupiOy2pClcbiAgICAgICAgLy8gVE9ETzogc2V0VGltZW91dCDsnLzroZwg64KY64iE642U652864+EIO2aqOqzvCDsl4bsnYwgc2V0VGltZW91dCDsp4DsmrDqs6AsIHdvcmtlcuuhnCDrs4Dqsr0g7ZWE7JqUXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUodGhpcy5fX09DUkVuZ2luZS5zY2FuVHJ1dGgoYWRkcmVzcywgcmVzdWx0QnVmZmVyKSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdTU0EgTW9kZSBpcyB0cnVlLiBidXQsIG9jclR5cGUgaXMgaW52YWxpZCA6ICcgKyBvY3JUeXBlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19jc3ZUb09iamVjdChzdHIpIHtcbiAgICBsZXQgcGFpcnMgPSBzdHIuc3BsaXQoJzsnKTtcbiAgICBsZXQgb2JqID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnOicpO1xuICAgICAgaWYgKHBhaXIubGVuZ3RoID09PSAyKSBvYmpbcGFpclswXV0gPSBwYWlyWzFdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIF9fZ2V0TWFza0luZm8oYWRkcmVzcykge1xuICAgIGlmIChhZGRyZXNzID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2UgaWYgKGFkZHJlc3MgPT09IC0xKSB7XG4gICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICB9XG4gICAgY29uc3QgWywsIG1hc2tJbmZvUmVzdWx0QnVmXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmdldE1hc2tSZWN0KGFkZHJlc3MsIG1hc2tJbmZvUmVzdWx0QnVmKTtcbiAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgcmVzdWx0ID09PSAnJykge1xuICAgICAgdm9pZCAwO1xuICAgIH1cblxuICAgIC8vIHRoaXMuX19kZXN0cm95TWFza0luZm9SZXN1bHRCdWZmZXIoKTtcblxuICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogdGhpcy5fX2NzdlRvT2JqZWN0KHJlc3VsdCk7XG4gIH1cbiAgYXN5bmMgX19zdGFydFRydXRoUmV0cnkob2NyVHlwZSwgYWRkcmVzcywgaW1nRGF0YSkge1xuICAgIGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCAwLCBpbWdEYXRhKTtcbiAgICAvLyBhd2FpdCB0aGlzLl9fc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCB0cnVlKTsgICAgICAvLyBmb3Ig7ISx64ql7J2EIOychO2VtCDsp4TtlokgWFxuICAgIHJldHVybiBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKTtcbiAgfVxuICBfX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgdGhpcy5fX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAvLyAx7LSIIGRlbGF5IO2bhCDsi6TtlolcbiAgICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIGFzeW5jIF9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgY29uc3QgaXNQYXNzcG9ydCA9IHRoaXMuX19vY3JUeXBlLmluY2x1ZGVzKCdwYXNzcG9ydCcpO1xuICAgICAgYXdhaXQgdGhpcy5fX3NldHVwVmlkZW8oaXNQYXNzcG9ydCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpZGVvXG4gICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAvLyBjb25zdCBbdHJhY2tdID0gdGhpcy5fX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICAvLyBjb25zdCBjYXBhYmlsaXR5ID0gdHJhY2suZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ0NhcmRTY2FuX19pbml0aWFsaXplIGNhcGFiaWxpdHknLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgaWYgKCdzcmNPYmplY3QnIGluIHZpZGVvKSB7XG4gICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gdGhpcy5fX3N0cmVhbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBdm9pZCB1c2luZyB0aGlzIGluIG5ldyBicm93c2VycywgYXMgaXQgaXMgZ29pbmcgYXdheS5cbiAgICAgICAgICB2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLl9fc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiAtIG9ubG9hZGVkbWV0YWRhdGEnKTtcbiAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHZvaWQgMDtcblxuICAgICAgICAgIC8vIHZpZGVvIGVsZW1lbnQgc3R5bGUg7ISk7KCVXG4gICAgICAgICAgdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPSB2aWRlby52aWRlb1dpZHRoIC8gdmlkZW8udmlkZW9IZWlnaHQgPCAxID8gJ3BvcnRyYWl0JyA6ICdsYW5kc2NhcGUnO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHRoaXMuX19jYW1TZXRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2FkanVzdFN0eWxlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgIHZpZGVvLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBpZiAoZS5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnQ2FtZXJhIEFjY2VzcyBQZXJtaXNzaW9uIGlzIG5vdCBhbGxvd2VkJztcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKCdFNDAzJywgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5uYW1lID09PSAnTm90UmVhZGFibGVFcnJvcicpIHtcbiAgICAgICAgLy8g64uk66W46rOz7JeQ7IScIOy5tOuplOudvCDsnpDsm5DsnYQg7IKs7Jqp7KSRXG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgICB0aGlzLl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpOyAvLyDsnqzqt4Ag7Zi47LacXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX19zZXRTdHlsZShlbCwgc3R5bGUpIHtcbiAgICBpZiAoZWwgJiYgc3R5bGUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHN0eWxlKTtcbiAgICB9XG4gIH1cbiAgX19jaGFuZ2VPQ1JTdGF0dXModmFsKSB7XG4gICAgc3dpdGNoICh2YWwpIHtcbiAgICAgIC8vIE9DUlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5OT1RfUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLlJFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLlJFQURZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRDpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1M6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0E6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRDpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5ET05FO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19jaGFuZ2VTdGFnZSh2YWwsIGZvcmNlVXBkYXRlID0gZmFsc2UsIHJlY29nbml6ZWRJbWFnZSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPT09IHZhbCAmJiBmb3JjZVVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2NoYW5nZU9DUlN0YXR1cyh2YWwpO1xuICAgIHRoaXMuX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIHRoaXMuX19pblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGggKyAncHgnLFxuICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuc3R5bGUsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzICsgJ3B4JyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlW3ZhbF1cbiAgICB9O1xuICAgIGlmIChndWlkZUJveCkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCBzdHlsZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYXNrRnJhbWVDb2xvckNoYW5nZSkge1xuICAgICAgaWYgKCEhdGhpcy5fX29wdGlvbnMuc2hvd0NsaXBGcmFtZSkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXNrQm94V3JhcD8ucXVlcnlTZWxlY3RvcignI21hc2tCb3hPdXRlcicpPy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZVt2YWxdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkge1xuICAgICAgY2FwdHVyZUJ1dHRvbj8ucXVlcnlTZWxlY3RvcignI2NhcHR1cmVCdXR0b24nKT8uc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5fX29wdGlvbnMuY2FwdHVyZUJ1dHRvblN0eWxlWydiYXNlX2NvbG9yJ10pO1xuICAgIH1cbiAgICBjb25zdCBvY3JNb2RlID0gdGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID8gJ3NlcnZlcicgOiAnd2FzbSc7XG4gICAgaWYgKHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VUb3BVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIG9jck1vZGUsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX190b3BVSSwgJ3RvcCcsIHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCBvY3JNb2RlLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fbWlkZGxlVUksICdtaWRkbGUnLCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSwgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJIHx8IHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgb2NyTW9kZSwgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX2JvdHRvbVVJLCAnYm90dG9tJywgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUksIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9TVUNDRVNTIHx8IHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuXG4gICAgICAgIC8vIEZBSUzsnbgg6rK97JqwIDXstIjtm4Qg7J6Q64+Z7J2EIOywveuLq+ydjFxuICAgICAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCkge1xuICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5fX2hpZGVQcmV2aWV3VUksIDMwMDAsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9faGlkZVByZXZpZXdVSSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMSk7IC8vIGZvciBVSSB1cGRhdGVcbiAgfVxuXG4gIF9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBwcmV2aWV3SW1hZ2Uuc3JjID0gcmVjb2duaXplZEltYWdlO1xuICAgIGNvbnN0IGltZ1N0eWxlID0ge1xuICAgICAgJ21heC13aWR0aCc6ICc3MCUnLFxuICAgICAgJ21heC1oZWlnaHQnOiAnNjAlJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdJbWFnZSwgaW1nU3R5bGUpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9KTtcbiAgfVxuICBfX2hpZGVQcmV2aWV3VUkoY29udGV4dCkge1xuICAgIGxldCBfdGhpc18gPSB0aGlzO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBfdGhpc18gPSBjb250ZXh0O1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBfdGhpc18uX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICAgIF90aGlzXy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSAnJztcbiAgfVxuICBhc3luYyBfX2dldElucHV0RGV2aWNlcyhraW5kLCBsYWJlbCkge1xuICAgIC8vIHRocm93IGVycm9yIGlmIG5hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZFxuICAgIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIGNvbnN0IHZpZGVvRGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKGRldmljZSA9PiB7XG4gICAgICBpZiAoZGV2aWNlLmtpbmQgPT09IGAke2tpbmR9aW5wdXRgICYmIGRldmljZS5nZXRDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgY29uc3QgY2FwID0gZGV2aWNlLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICBpZiAoY2FwPy5mYWNpbmdNb2RlPy5pbmNsdWRlcyh0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmlkZW9EZXZpY2VzLmxlbmd0aCA8PSAxID8gdmlkZW9EZXZpY2VzIDogdmlkZW9EZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gbGFiZWwgPyBkZXZpY2UubGFiZWwuaW5jbHVkZXMobGFiZWwpIDogdHJ1ZSk7XG4gIH1cbiAgY2hlY2tVSU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkZXRlY3Rvci5nZXRVSU9yaWVudGF0aW9uKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkub2NyKTtcbiAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnQgIT09IHRoaXMuX19wcmV2VWlPcmllbnRhdGlvbikge1xuICAgICAgdGhpcy5fX3VpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgaXNDaGFuZ2VkXG4gICAgfTtcbiAgfVxuICBfX2NsZWFyQ3VzdG9tVUkob2JqKSB7XG4gICAgb2JqLmlubmVySFRNTCA9ICcnO1xuICAgIG9iai5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgb2JqLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUob2JqLCB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfX3NldHVwRG9tRWxlbWVudHMoKSB7XG4gICAgbGV0IHtcbiAgICAgIG9jcixcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICBndWlkZUJveCxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94V3JhcCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgcHJldmVudFRvRnJlZXplVmlkZW8sXG4gICAgICBjdXN0b21VSVdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlXcmFwLFxuICAgICAgY2FwdHVyZVVJLFxuICAgICAgY2FwdHVyZUJ1dHRvbixcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2UsXG4gICAgICBzd2l0Y2hVSVdyYXAsXG4gICAgICBzd2l0Y2hVSVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmICghb2NyKSB0aHJvdyBuZXcgRXJyb3IoJ29jciBkaXYgZWxlbWVudCBpcyBub3QgZXhpc3QnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB2aWRlb1dyYXAucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94V3JhcCkgZ3VpZGVCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmICh2aWRlbykgdmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGNhbnZhcykgY2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChyb3RhdGlvbkNhbnZhcykgcm90YXRpb25DYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94KSBndWlkZUJveC5yZW1vdmUoKTtcbiAgICBpZiAobWFza0JveFdyYXApIG1hc2tCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmIChwcmV2ZW50VG9GcmVlemVWaWRlbykgcHJldmVudFRvRnJlZXplVmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGN1c3RvbVVJV3JhcCkgY3VzdG9tVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAodG9wVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZVRvcFVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSSh0b3BVSSk7XG4gICAgaWYgKG1pZGRsZVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkobWlkZGxlVUkpO1xuICAgIGlmIChib3R0b21VSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKGJvdHRvbVVJKTtcbiAgICBpZiAoY2FwdHVyZVVJV3JhcCkgY2FwdHVyZVVJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBjYXB0dXJlIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAoY2FwdHVyZVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKGNhcHR1cmVVSSk7XG4gICAgaWYgKHByZXZpZXdVSVdyYXApIHByZXZpZXdVSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8gcHJldmlldyBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHByZXZpZXdVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShwcmV2aWV3VUkpO1xuICAgIGlmIChzd2l0Y2hVSVdyYXApIHN3aXRjaFVJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBzd2l0Y2ggVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmIChzd2l0Y2hVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlKSB0aGlzLl9fY2xlYXJDdXN0b21VSShzd2l0Y2hVSSk7XG4gICAgY29uc3Qgcm90YXRpb25EZWdyZWUgPSB0aGlzLl9fZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA9IFs5MCwgMjcwXS5pbmNsdWRlcyhyb3RhdGlvbkRlZ3JlZSk7XG4gICAgbGV0IG9jclN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCBvY3JTdHlsZSk7XG4gICAgY29uc3Qgd3JhcFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyB2ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcbiAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH07XG4gICAgdmlkZW9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlkZW9XcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlb1dyYXAnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB7XG4gICAgICB3aGlsZSAodmlkZW9XcmFwLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdmlkZW9XcmFwLnJlbW92ZUNoaWxkKHZpZGVvV3JhcC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUobWFza0JveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgbGV0IG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZS5iYXNlX2NvbG9yICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLl9fb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICBtYXNrX2ZyYW1lID0gdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9ICcnICsgXCIgIDxzdmcgaWQ9J21hc2tCb3hDb250YWluZXInIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XFxuXCIgKyBcIiAgICA8bWFzayBpZD0nbWFzay1yZWN0Jz5cXG5cIiArIFwiICAgICAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nd2hpdGUnPjwvcmVjdD5cXG5cIiArIFwiICAgICAgPHN2ZyB4PSc1MCUnIHk9JzUwJScgb3ZlcmZsb3c9J3Zpc2libGUnPlxcblwiICsgXCIgICAgICAgICAgPHJlY3QgaWQ9J21hc2tCb3hJbm5lcidcXG5cIiArIFwiICAgICAgICAgICAgd2lkdGg9JzQwMCcgaGVpZ2h0PScyNjAnXFxuXCIgKyBcIiAgICAgICAgICAgIHg9Jy0yMDAnIHk9Jy0xMzAnXFxuXCIgKyBcIiAgICAgICAgICAgIHJ4PScxMCcgcnk9JzEwJ1xcblwiICsgXCIgICAgICAgICAgICBmaWxsPSdibGFjaycgc3Ryb2tlPSdibGFjayc+PC9yZWN0PlxcblwiICsgJyAgICAgIDwvc3ZnPlxcbicgKyAnICAgIDwvbWFzaz5cXG4nICsgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgKyBcIiAgICAgICAgICBmaWxsPSdcIiArIG1hc2tfZnJhbWUgKyBcIicgbWFzaz0ndXJsKCNtYXNrLXJlY3QpJz48L3JlY3Q+XFxuXCIgKyAnICA8L3N2Zz4nO1xuICAgIG9jci5hcHBlbmRDaGlsZChtYXNrQm94V3JhcCk7XG4gICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpO1xuICAgIGxldCB2aWRlb1N0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfTtcbiAgICBjb25zdCByb3RhdGVDc3MgPSAncm90YXRlKCcgKyByb3RhdGlvbkRlZ3JlZSArICdkZWcpJztcbiAgICBjb25zdCBtaXJyb3JDc3MgPSAncm90YXRlWSgxODBkZWcpJztcbiAgICBjb25zdCByb3RhdGVBbmRNaXJyb3JDc3MgPSBtaXJyb3JDc3MgKyAnICcgKyByb3RhdGVDc3M7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBpZiAodGhpcy5fX2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlQW5kTWlycm9yQ3NzXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlQ3NzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgdHJhbnNmb3JtOiBtaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB2aWRlb1N0eWxlKTtcbiAgICB2aWRlb1dyYXAuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgIGd1aWRlQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGd1aWRlQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnZ3VpZGVCb3hXcmFwJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcbiAgICBndWlkZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveCcpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0pO1xuICAgIGd1aWRlQm94V3JhcC5hcHBlbmRDaGlsZChndWlkZUJveCk7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYW52YXMnKTtcbiAgICBjb25zdCBjYW52YXNTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuX19vcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gdGhpcy5fX2lzUm90YXRlZDkwb3IyNzAgPyAnbm9uZScgOiAnZGlzcGxheScgOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMzBweCcsXG4gICAgICBib3JkZXI6ICdncmVlbiAycHggc29saWQnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FudmFzLCBjYW52YXNTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgcm90YXRpb25DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByb3RhdGlvbkNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncm90YXRpb25DYW52YXMnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocm90YXRpb25DYW52YXMsIHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuX19vcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gdGhpcy5fX2lzUm90YXRlZDkwb3IyNzAgPyAnZGlzcGxheScgOiAnbm9uZScgOiAnbm9uZScsXG4gICAgICBoZWlnaHQ6ICcyNSUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogJzBweCcsXG4gICAgICB0b3A6ICczMHB4JyxcbiAgICAgIGJvcmRlcjogJ2JsdWUgMnB4IHNvbGlkJ1xuICAgIH0pO1xuICAgIG9jci5hcHBlbmRDaGlsZChyb3RhdGlvbkNhbnZhcyk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmVudFRvRnJlZXplVmlkZW8nKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmVudFRvRnJlZXplVmlkZW8sIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAnMTAnLFxuICAgICAgcmlnaHQ6ICcxMCdcbiAgICB9KTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlby5pbm5lckhUTUwgPSAnJyArICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBzdHlsZT1cIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcIiB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCI+XFxuJyArICcgIDxjaXJjbGUgY3g9XCI4NFwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIwLjU1NTU1NTU1NTU1NTU1NTZzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MVwiIHZhbHVlcz1cIjEwOzBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDFcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJmaWxsXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwiZGlzY3JldGVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiIzg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMFwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiMTZcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMC41NTU1NTU1NTU1NTU1NTU2c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0wLjU1NTU1NTU1NTU1NTU1NTZzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjExMTExMTExMTExMTExMTJzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuMTExMTExMTExMTExMTExMnNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiMTZcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS42NjY2NjY2NjY2NjY2NjY1c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JztcbiAgICAnPC9zdmc+JztcbiAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmVudFRvRnJlZXplVmlkZW8pO1xuICAgIGN1c3RvbVVJV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1c3RvbVVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY3VzdG9tVUlXcmFwJyk7XG4gICAgY29uc3QgY3VzdG9tVUlXcmFwU3R5bGUgPSB7XG4gICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKGN1c3RvbVVJV3JhcCwgY3VzdG9tVUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjdXN0b21VSVdyYXApO1xuXG4gICAgLy8g6rCBIHRvcCwgbWlkZGxlLCBib3R0b20gVUkg7IKs7JqpKHVzZSnsl6zrtoDsmYAg6rSA6rOE7JeG7J20IOyYgeyXreydhCDsnqHquLAg7JyE7ZW0LCBkaXbqsIAg7JeG7Jy866m0IOyDneyEsVxuICAgIC8vIGFkanVzdFN0eWxlKCkg7JeQ7IScIOyEuOu2gOyggeyduCDsgqzsnbTspojsmYAg7JyE7LmY6rCSIOuPmeyggeycvOuhnCDshKTsoJXrkKguXG4gICAgaWYgKCF0b3BVSSkge1xuICAgICAgdG9wVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvcFVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd0b3BVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQodG9wVUkpO1xuICAgIGlmICghbWlkZGxlVUkpIHtcbiAgICAgIG1pZGRsZVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtaWRkbGVVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWlkZGxlVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKG1pZGRsZVVJKTtcbiAgICBpZiAoIWJvdHRvbVVJKSB7XG4gICAgICBib3R0b21VSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm90dG9tVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2JvdHRvbVVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZChib3R0b21VSSk7XG4gICAgY2FwdHVyZVVJV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcHR1cmVVSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhcHR1cmVVSVdyYXAnKTtcbiAgICBjb25zdCBjYXB0dXJlVUlXcmFwU3R5bGUgPSB7XG4gICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY2VudGVyJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSVdyYXAsIGNhcHR1cmVVSVdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGNhcHR1cmVVSVdyYXApO1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkpIHtcbiAgICAgIGlmICh0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUgfHwgdGhpcy5fX29wdGlvbnMudXNlRm9yY2VDb21wbGV0ZVVJKSB7XG4gICAgICAgIGlmICghY2FwdHVyZVVJKSB7XG4gICAgICAgICAgY2FwdHVyZVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgY2FwdHVyZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYXB0dXJlVUknKTtcbiAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FwdHVyZUJ1dHRvbikge1xuICAgICAgICAgIGNhcHR1cmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYXB0dXJlQnV0dG9uJyk7XG4gICAgICAgICAgbGV0IGNhcHR1cmVCdXR0b25TcmNTVkcgPSBgYDtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uU3JjU1ZHICs9IGA8c3ZnIHdpZHRoPSc4MCcgaGVpZ2h0PSc4MCcgdmlld0JveD0nMCAwIDgwIDgwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPmA7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgICA8Y2lyY2xlIGlkPSdjYXB0dXJlQnV0dG9uJyBjeD0nNDAnIGN5PSc0MCcgcj0nMzgnIGZpbGw9JyM1NTU1NTUnIHN0cm9rZT0nI2ZmZmZmZicgc3Ryb2tlLXdpZHRoPSc0Jy8+YDtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uU3JjU1ZHICs9IGA8L3N2Zz5gO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b24uaW5uZXJIVE1MID0gY2FwdHVyZUJ1dHRvblNyY1NWRztcbiAgICAgICAgICBjYXB0dXJlVUkuYXBwZW5kQ2hpbGQoY2FwdHVyZUJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgY2FwdHVyZVVJV3JhcC5hcHBlbmRDaGlsZChjYXB0dXJlVUkpO1xuICAgICAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgICAgICBjb25zdCBfX29uQ2xpY2tDYXB0dXJlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpc18uX19pc1N3aXRjaFRvU2VydmVyTW9kZSkge1xuICAgICAgICAgICAgZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICBfdGhpc18uX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmNhcHR1cmVCdXR0b24sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICBfdGhpc18uX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnZpZGVvLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpc18uX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmNhcHR1cmVCdXR0b24sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNhcHR1cmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX29uQ2xpY2tDYXB0dXJlQnV0dG9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgcHJldmlld1VJV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJldmlld1VJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld1VJV3JhcCcpO1xuICAgICAgY29uc3QgcHJldmlld1VJV3JhcFN0eWxlID0ge1xuICAgICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyMwMDAwMDBhYSdcbiAgICAgIH07XG4gICAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJV3JhcCwgcHJldmlld1VJV3JhcFN0eWxlKTtcbiAgICAgIG9jci5hcHBlbmRDaGlsZChwcmV2aWV3VUlXcmFwKTtcbiAgICAgIGlmICghcHJldmlld1VJKSB7XG4gICAgICAgIHByZXZpZXdVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmV2aWV3VUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdVSScpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSSwge1xuICAgICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nLFxuICAgICAgICB3aWR0aDogJycsXG4gICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICdtYXgtd2lkdGgnOiAnOTAlJyxcbiAgICAgICAgJ21heC1oZWlnaHQnOiAnOTAlJ1xuICAgICAgfSk7XG4gICAgICBwcmV2aWV3VUlXcmFwLmFwcGVuZENoaWxkKHByZXZpZXdVSSk7XG4gICAgICBpZiAoIXByZXZpZXdJbWFnZSkge1xuICAgICAgICBwcmV2aWV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcHJldmlld0ltYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3SW1hZ2UnKTtcbiAgICAgICAgcHJldmlld1VJLmFwcGVuZENoaWxkKHByZXZpZXdJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgIHN3aXRjaFVJV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3dpdGNoVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdzd2l0Y2hVSVdyYXAnKTtcbiAgICAgIGNvbnN0IHN3aXRjaFVJV3JhcFN0eWxlID0ge1xuICAgICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICcnLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uLXJldmVyc2UnXG4gICAgICB9O1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHN3aXRjaFVJV3JhcCwgc3dpdGNoVUlXcmFwU3R5bGUpO1xuICAgICAgb2NyLmFwcGVuZENoaWxkKHN3aXRjaFVJV3JhcCk7XG4gICAgICBpZiAoIXN3aXRjaFVJKSB7XG4gICAgICAgIHN3aXRjaFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN3aXRjaFVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdzd2l0Y2hVSScpO1xuICAgICAgICBsZXQgc3dpdGNoSFRNTCA9IGBgO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGA8ZGl2IGNsYXNzPSdjdXN0b20tLWxhYmVsIGZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGdhcDEwJz5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGAgIDxsYWJlbCBmb3I9J21hbnVhbC1zd2l0Y2gtd2FzbS10by1zZXJ2ZXItY2hlY2tib3gnPldBU008L2xhYmVsPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgPGxhYmVsIGNsYXNzPSdzd2l0Y2gnPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgICA8aW5wdXQgaWQ9J21hbnVhbC1zd2l0Y2gtd2FzbS10by1zZXJ2ZXItY2hlY2tib3gnIHR5cGU9J2NoZWNrYm94Jz5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGAgICAgPHNwYW4gY2xhc3M9J3NsaWRlciByb3VuZCc+PC9zcGFuPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgPC9sYWJlbD5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGAgIDxsYWJlbCBmb3I9J3ByaW9yaXR5LWZpbmFuY2UtY29odG1sRm9ybGlzdC1jaGVja2JveCc+U2VydmVyPC9sYWJlbD5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGA8L2Rpdj5gO1xuICAgICAgICBzd2l0Y2hVSS5pbm5lckhUTUwgPSBzd2l0Y2hIVE1MO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NldFN0eWxlKHN3aXRjaFVJLCB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgfSk7XG4gICAgICBzd2l0Y2hVSVdyYXAuYXBwZW5kQ2hpbGQoc3dpdGNoVUkpO1xuICAgICAgY29uc3Qgc3dpdGNoQ2hlY2tib3ggPSBzd2l0Y2hVSS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcbiAgICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgICBjb25zdCBfX29uQ2xpY2tTd2l0Y2hVSSA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpc18uX19pc1N3aXRjaFRvU2VydmVyTW9kZSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICBhd2FpdCBfdGhpc18ucmVzdGFydE9DUihfdGhpc18uX19vY3JUeXBlLCBfdGhpc18uX19vblN1Y2Nlc3MsIF90aGlzXy5fX29uRmFpbHVyZSwgX3RoaXNfLl9fb25JblByb2dyZXNzQ2hhbmdlLCB0cnVlKTtcbiAgICAgIH07XG4gICAgICBzd2l0Y2hDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fb25DbGlja1N3aXRjaFVJLCB7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxvYWRpbmcgVUkg7JyE7LmYIOyekOumrOyeoeqyjCDtlZjquLAg7JyE7ZW0XG4gICAgYXdhaXQgdGhpcy5fX2FkanVzdFN0eWxlKHRydWUpO1xuXG4gICAgLy8g7ZmU66m06rO864+EIO2YhOyDgSDtlbTqsrBcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCB7XG4gICAgICBkaXNwbGF5OiAnJ1xuICAgIH0pO1xuICAgIHRoaXMuX19vY3IgPSBvY3I7XG4gICAgdGhpcy5fX2NhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLl9fcm90YXRpb25DYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICB0aGlzLl9fdmlkZW8gPSB2aWRlbztcbiAgICB0aGlzLl9fdmlkZW9XcmFwID0gdmlkZW9XcmFwO1xuICAgIHRoaXMuX19ndWlkZUJveCA9IGd1aWRlQm94O1xuICAgIHRoaXMuX19ndWlkZUJveFdyYXAgPSBndWlkZUJveFdyYXA7XG4gICAgdGhpcy5fX21hc2tCb3hXcmFwID0gbWFza0JveFdyYXA7XG4gICAgdGhpcy5fX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gcHJldmVudFRvRnJlZXplVmlkZW87XG4gICAgdGhpcy5fX2N1c3RvbVVJV3JhcCA9IGN1c3RvbVVJV3JhcDtcbiAgICB0aGlzLl9fdG9wVUkgPSB0b3BVSTtcbiAgICB0aGlzLl9fbWlkZGxlVUkgPSBtaWRkbGVVSTtcbiAgICB0aGlzLl9fYm90dG9tVUkgPSBib3R0b21VSTtcbiAgICB0aGlzLl9fY2FwdHVyZVVJV3JhcCA9IGNhcHR1cmVVSVdyYXA7XG4gICAgdGhpcy5fX2NhcHR1cmVVSSA9IGNhcHR1cmVVSTtcbiAgICB0aGlzLl9fY2FwdHVyZUJ1dHRvbiA9IGNhcHR1cmVCdXR0b247XG4gICAgdGhpcy5fX3ByZXZpZXdVSVdyYXAgPSBwcmV2aWV3VUlXcmFwO1xuICAgIHRoaXMuX19wcmV2aWV3VUkgPSBwcmV2aWV3VUk7XG4gICAgdGhpcy5fX3ByZXZpZXdJbWFnZSA9IHByZXZpZXdJbWFnZTtcbiAgICB0aGlzLl9fc3dpdGNoVUlXcmFwID0gc3dpdGNoVUlXcmFwO1xuICAgIHRoaXMuX19zd2l0Y2hVSSA9IHN3aXRjaFVJO1xuICAgIHJldHVybiB7XG4gICAgICBvY3IsXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIHZpZGVvLFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLFxuICAgICAgY3VzdG9tVUlXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgY2FwdHVyZVVJV3JhcCxcbiAgICAgIGNhcHR1cmVVSSxcbiAgICAgIGNhcHR1cmVCdXR0b24sXG4gICAgICBwcmV2aWV3VUlXcmFwLFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlLFxuICAgICAgc3dpdGNoVUlXcmFwLFxuICAgICAgc3dpdGNoVUlcbiAgICB9O1xuICB9XG4gIF9fYmx1ckNhcHR1cmVCdXR0b24oKSB7XG4gICAgdGhpcy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudmlkZW8sIHtcbiAgICAgIGRpc3BsYXk6ICcnXG4gICAgfSk7XG4gICAgY29uc3Qge1xuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmIChjYXB0dXJlQnV0dG9uKSB7XG4gICAgICBjYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcsICdmYWxzZScpO1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVCdXR0b24sIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBfX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHJldHVybiBjYXB0dXJlQnV0dG9uID8gY2FwdHVyZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnKSA9PT0gJ3RydWUnIDogZmFsc2U7XG4gIH1cbiAgYXN5bmMgX19zZXR1cFZpZGVvKGlzUGFzc3BvcnQpIHtcbiAgICAvLyB3YXNtIOyduOyLneyEseuKpSDstZzsoIHtmZTrkJwg7ZW07IOB64+EXG4gICAgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCA9IDEwODA7XG4gICAgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgPSA3MjA7XG4gICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSBhd2FpdCB0aGlzLl9fc2V0dXBEb21FbGVtZW50cygpO1xuICAgIGxldCB2aWRlb0RldmljZXMgPSBhd2FpdCB0aGlzLl9fZ2V0SW5wdXREZXZpY2VzKCd2aWRlbycpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb0RldmljZXMgOjogJywgdmlkZW9EZXZpY2VzKVxuICAgIGxldCBkZXZpY2VJZExpc3QgPSB2aWRlb0RldmljZXMubWFwKGRldmljZSA9PiBkZXZpY2UuZGV2aWNlSWQpO1xuICAgIHRoaXMuY2hlY2tVSU9yaWVudGF0aW9uKCk7XG4gICAgbGV0IGNvbnN0cmFpbnRXaWR0aCwgY29uc3RyYWludEhlaWdodDtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIC8vIHVpIDogcG9ydHJhaXRcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDEwODAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiA3MjAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVpIDogbGFuZHNjYXBlXG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICBtaW46IDEyODBcbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgbWluOiA3MjBcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge1xuICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgdmlkZW86IHtcbiAgICAgICAgem9vbToge1xuICAgICAgICAgIGlkZWFsOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGZhY2luZ01vZGU6IHtcbiAgICAgICAgICBpZGVhbDogdGhpcy5fX2ZhY2luZ01vZGVDb25zdHJhaW50XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgd2hpdGVCYWxhbmNlTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgZGV2aWNlSWQ6IHZpZGVvRGV2aWNlcy5sZW5ndGggPyB7XG4gICAgICAgICAgaWRlYWw6IGRldmljZUlkTGlzdFtkZXZpY2VJZExpc3QubGVuZ3RoIC0gMV1cbiAgICAgICAgfSA6IG51bGwsXG4gICAgICAgIHdpZHRoOiBjb25zdHJhaW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogY29uc3RyYWludEhlaWdodFxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDstZzstIgg7KeE7J6FIOydtOyWtOyEnCB2aWRlb0RlaXZjZSDrpqzsiqTtirjrpbwg6rCA7KC47JisIOyImCDsl4bsnLzrqbQsXG4gICAgLy8gZ2V0VXNlck1lZGlh66W8IOyehOydmCDtmLjstpztlZjsl6wg6raM7ZWc7J2EIOuwm+ydgOuSpCDri6Tsi5wg6rCA7KC47Ji0XG4gICAgaWYgKHZpZGVvRGV2aWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX19zdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgIHZpZGVvRGV2aWNlcyA9IGF3YWl0IHRoaXMuX19nZXRJbnB1dERldmljZXMoJ3ZpZGVvJyk7XG4gICAgICBkZXZpY2VJZExpc3QgPSB2aWRlb0RldmljZXMubWFwKGRldmljZSA9PiBkZXZpY2UuZGV2aWNlSWQpO1xuICAgICAgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSB2aWRlb0RldmljZXMubGVuZ3RoID8ge1xuICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0W2RldmljZUlkTGlzdC5sZW5ndGggLSAxXVxuICAgICAgfSA6IG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBkdW1wdHJhY2sgPSAoW2EsIGJdLCB0cmFjaykgPT5cbiAgICAgIC8vICAgYCR7YX0ke3RyYWNrLmtpbmQgPT0gJ3ZpZGVvJyA/ICdDYW1lcmEnIDogJ01pY3JvcGhvbmUnfSAoJHt0cmFjay5yZWFkeVN0YXRlfSk6ICR7dHJhY2subGFiZWx9JHtifWA7XG5cbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb1RyYWNrcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKSlcbiAgICAgIC8vIGNvbnN0IHN0cmVhbVNldHRpbmdzID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1DYXBhYmlsaXRpZXMgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q2FwYWJpbGl0aWVzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENvbnN0cmFpbnRzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtU2V0dGluZ3MgOjogJywgc3RyZWFtU2V0dGluZ3MpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggLyBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoIC8gc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gYXNwZWN0UmF0aW8gOjogJyArIHN0cmVhbVNldHRpbmdzLmFzcGVjdFJhdGlvKTtcblxuICAgICAgW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgIFtyb3RhdGlvbkNhbnZhcy53aWR0aCwgcm90YXRpb25DYW52YXMuaGVpZ2h0XSA9IFt0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCwgdGhpcy5fX3Jlc29sdXRpb25XaWR0aF07XG4gICAgICB9XG4gICAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICB0aGlzLl9fc3RyZWFtID0gc3RyZWFtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fYWRqdXN0U3R5bGUoaXNGaXJzdENhbGxlZCA9IGZhbHNlKSB7XG4gICAgdm9pZCAwO1xuICAgIGNvbnN0IHtcbiAgICAgIG9jcixcbiAgICAgIHZpZGVvLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG5cbiAgICAvLyDquLDspIDsoJXrs7RcbiAgICBjb25zdCBiYXNlV2lkdGggPSA0MDA7XG4gICAgY29uc3QgYmFzZUhlaWdodCA9IDI2MDtcbiAgICBjb25zdCBzY2FubmVyRnJhbWVSYXRpbyA9IGJhc2VIZWlnaHQgLyBiYXNlV2lkdGg7IC8vIOyLoOu2hOymnSDruYTsnKhcblxuICAgIGxldCBndWlkZUJveFdpZHRoLCBndWlkZUJveEhlaWdodDtcbiAgICBsZXQgY2FsY09jckNsaWVudFdpZHRoID0gb2NyLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjT2NyQ2xpZW50SGVpZ2h0ID0gb2NyLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aDtcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBuZXdWaWRlb1dpZHRoID0gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgbGV0IG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy5fX2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuX192aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUlcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCB7XG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2ZsZXgtZW5kJ1xuICAgICAgfSk7XG4gICAgICAvLyB2aWRlbyDqsIDroZwg6riw7KSAIDEwMCUg7Jyg7KeAICjrs4Dqsr3sl4bsnYwpXG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuPhCDshLjroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDsubTrqZTrnbzripQg6rCA66GcXG4gICAgICAgIC8vIOyEuOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqTrpbwg67mE65SU7JikIOyEuOuhnCDquLjsnbTsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDqsIDroZwgVUlcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCB7XG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnZW5kJyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcidcbiAgICAgIH0pO1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDruYTrlJTsmKTrpbwg6rCA66GcIFVJ7J2YIGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIC8vIOqwgOuhnCBVSSBoZWlnaHQg6riw7KSA7Jy866GcIOu5hOuUlOyYpOydmCB3aWR0aCDqs4TsgrBcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gbmV3VmlkZW9IZWlnaHQgKiAoY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9IZWlnaHQpO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOuKlCDruYTrlJTsmKTrpbwg7IS466GcIOq4sOykgOycvOuhnCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBuZXdWaWRlb0hlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCBoZWlnaHQg7YGs6riw66W8IFVJ7J2YIGhlaWdodCDquLDspIDsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIOy2leyGjFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGggPSBNYXRoLm1pbihndWlkZUJveFdpZHRoLCBuZXdWaWRlb1dpZHRoKTtcbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IE1hdGgubWluKGd1aWRlQm94SGVpZ2h0LCBuZXdWaWRlb0hlaWdodCk7XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94V2lkdGggPSBndWlkZUJveFdpZHRoICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hIZWlnaHQgKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBpZiAodG9wVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh0b3BVSSwge1xuICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uLXJldmVyc2UnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1pZGRsZVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUobWlkZGxlVUksIHtcbiAgICAgICAgd2lkdGg6IHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChib3R0b21VSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGJvdHRvbVVJLCB7XG4gICAgICAgICdwYWRkaW5nLXRvcCc6ICcxMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvV2lkdGggIT09IGNhbGNWaWRlb0NsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvSGVpZ2h0ICE9PSBjYWxjVmlkZW9DbGllbnRIZWlnaHQpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICBoZWlnaHQ6IG5ld1ZpZGVvSGVpZ2h0ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoJyNtYXNrQm94SW5uZXInKTtcbiAgICBsZXQgciA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoICogMjtcbiAgICByID0gciA8IDAgPyAwIDogcjtcbiAgICBpZiAoIWlzTmFOKHJlZHVjZWRHdWlkZUJveFdpZHRoKSAmJiAhaXNOYU4ocmVkdWNlZEd1aWRlQm94SGVpZ2h0KSAmJiAhaXNOYU4oYm9yZGVyUmFkaXVzKSAmJiAhaXNOYU4oYm9yZGVyV2lkdGgpKSB7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJXaWR0aCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgbWFza0JveElubmVyV2lkdGggLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgbWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncngnLCByICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCByICsgJycpO1xuICAgIH1cblxuICAgIC8vIOyImOuPmSDstKzsmIEgVUkg7IKs7JqpXG4gICAgLy8gZmlyc3RDYWxsZWTsnbgg6rK97JqwIOyVhOyngSBjYXB0dXJlVUnqsIAg6re466Ck7KeA7KeAIOyViuyVhCDrrLTsnZjrr7hcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJICYmICFpc0ZpcnN0Q2FsbGVkKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyAmJiBib3R0b21VSSAmJiBjYXB0dXJlVUkpIHtcbiAgICAgICAgY29uc3QgY2FsY1N1bU9mSGVpZ2h0Qm90dG9tVUlDaGlsZE5vZGVzID0gdGhpcy5fX2NhbGNTdW1PZkhlaWdodENoaWxkTm9kZXMoYm90dG9tVUkpO1xuICAgICAgICBsZXQgY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPSBjYXB0dXJlQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpLmdldEF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0ID0gY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPT09IDAgPyA4MCA6IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0O1xuICAgICAgICBsZXQgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSA9IGJvdHRvbVVJLmNsaWVudEhlaWdodDtcbiAgICAgICAgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSAtPSBpc05hTihwYXJzZUludChib3R0b21VSS5zdHlsZS5wYWRkaW5nVG9wKSkgPyAwIDogcGFyc2VJbnQoYm90dG9tVUkuc3R5bGUucGFkZGluZ1RvcCk7XG4gICAgICAgIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gLT0gY2FsY1N1bU9mSGVpZ2h0Qm90dG9tVUlDaGlsZE5vZGVzO1xuICAgICAgICBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIC09IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0O1xuICAgICAgICBjb25zdCBiYXNlbGluZSA9IGNhbGNPY3JDbGllbnRIZWlnaHQgLSAoY2FsY09jckNsaWVudEhlaWdodCAvIDIgKyBndWlkZUJveEhlaWdodCAvIDIpO1xuICAgICAgICBpZiAoY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSA+IDAgJiYgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSA8IGJhc2VsaW5lKSB7XG4gICAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiAnJyxcbiAgICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6IGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgICAncGFkZGluZy1yaWdodCc6ICcxMHB4JyxcbiAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuX19pblByb2dyZXNzU3RlcCwgdHJ1ZSk7XG4gICAgdm9pZCAwO1xuICB9XG4gIF9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2RlcyhvYmopIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb2JqPy5jaGlsZE5vZGVzKSB7XG4gICAgICBzdW0gKz0gaXRlbS5jbGllbnRIZWlnaHQgPyBpdGVtLmNsaWVudEhlaWdodCA6IDA7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG4gIH1cbiAgX19jbG9zZUNhbWVyYSgpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICB9XG4gIGFzeW5jIF9fbG9hZFJlc291cmNlcygpIHtcbiAgICB2b2lkIDA7XG4gICAgaWYgKHRoaXMuX19yZXNvdXJjZXNMb2FkZWQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2lzU3VwcG9ydFNpbWQgPSBhd2FpdCBzaW1kKCk7XG4gICAgbGV0IGVudkluZm8gPSAnJztcbiAgICBlbnZJbmZvICs9IGBvcyA6ICR7dGhpcy5fX2RldmljZUluZm8ub3N9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBvc1NpbXBsZSA6ICR7dGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGV9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBpc1N1cHBvcnRXYXNtOiAke3RoaXMuX19pc1N1cHBvcnRXYXNtfVxcbmA7XG4gICAgZW52SW5mbyArPSBgc2ltZCh3YXNtLWZlYXR1cmUtZGV0ZWN0KSA6ICR7dGhpcy5fX2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBpZiAodGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGUgPT09ICdJT1MnIHx8IHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnTUFDJykge1xuICAgICAgdGhpcy5fX2lzU3VwcG9ydFNpbWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZW52SW5mbyArPSBgaXNTdXBwb3J0U2ltZChmaW5hbCkgOiAke3RoaXMuX19pc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgZW52SW5mbyArPSBgVXNlckFnZW50IDogJHtuYXZpZ2F0b3IudXNlckFnZW50fVxcbmA7XG4gICAgdm9pZCAwO1xuICAgIC8vIGFsZXJ0KGVudkluZm8pO1xuICAgIHdpbmRvdy51c2ViT0NSRW52SW5mbyA9IGVudkluZm87XG4gICAgbGV0IHNka1N1cHBvcnRFbnYgPSAncXVyYW0nO1xuICAgIGlmICh0aGlzLl9faXNTdXBwb3J0U2ltZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgc2RrU3VwcG9ydEVudiArPSAnX3NpbWQuanMnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBzZGtTdXBwb3J0RW52ICs9ICcuanMnO1xuICAgIH1cbiAgICB2b2lkIDA7XG4gICAgd2luZG93LnVzZWJPQ1JFbnZJbmZvID0gZW52SW5mbztcbiAgICB2b2lkIDA7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChzZGtTdXBwb3J0RW52LCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpO1xuICAgIGxldCBzcmMgPSBhd2FpdCBmZXRjaCh1cmwuaHJlZikudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcbiAgICAgIGxldCByZWdleCA9IC8oLiopID0gTW9kdWxlLmN3cmFwL2dtO1xuICAgICAgbGV0IHNvdXJjZSA9IHRleHQucmVwbGFjZShyZWdleCwgJ01vZHVsZS4kMSA9IE1vZHVsZS5jd3JhcCcpO1xuXG4gICAgICAvLyBkYXRhKG1vZGVsKVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL15cXChmdW5jdGlvblxcKFxcKSBcXHsvbSwgJ3ZhciBjcmVhdGVNb2RlbERhdGEgPSBhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xcbicpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgIGNvbnNvbGUuZXJyb3IoXCJwYWNrYWdlIGVycm9yOlwiLCBlcnJvcik7JywgJyAgIHJlamVjdCgpO1xcbicgKyAnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCcgIH0sIGhhbmRsZUVycm9yKScsICcgIHJlc29sdmUoKTtcXG4nICsgJyAgfSwgaGFuZGxlRXJyb3IpJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcfVxcKVxcKFxcKTsvbSwgJ1xcbiB9KVxcbicgKyAnfTsnKTtcblxuICAgICAgLy8gd2FzbVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ3F1cmFtLndhc20nLCBuZXcgVVJMKCdxdXJhbS53YXNtJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9SRU1PVEVfUEFDS0FHRV9CQVNFID0gWydcIl1xdXJhbVxcLmRhdGFbXCInXS9nbSwgYFJFTU9URV9QQUNLQUdFX0JBU0UgPSBcIiR7bmV3IFVSTCgncXVyYW0uZGF0YScsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZn1cImApO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2Z1bmN0aW9uIGNyZWF0ZVdhc20nLCAnYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2FzbScpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2luc3RhbnRpYXRlQXN5bmMoKTsnLCAnYXdhaXQgaW5zdGFudGlhdGVBc3luYygpOycpO1xuXG4gICAgICAvLyB3YXNtIGFuZCBkYXRhKG1vZGVsKSBmaWxlIOuzkeugrOuhnCBmZXRjaCDtlZjquLAg7JyE7ZW0XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgndmFyIGFzbSA9IGNyZWF0ZVdhc20oKTsnLCAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIHN0YXJ0XCIpXFxuJyArICdhd2FpdCAoYXN5bmMgZnVuY3Rpb24oKSB7XFxuJyArICcgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XFxuJyArICcgICAgdmFyIGlzQ3JlYXRlZFdhc20gPSBmYWxzZTtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkRGF0YSA9IGZhbHNlO1xcbicgKyAnICAgIGNyZWF0ZVdhc20oKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZFdhc20gPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZERhdGEpIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSk7XFxuJyArICcgICAgY3JlYXRlTW9kZWxEYXRhKCkudGhlbigoKSA9PiB7XFxuJyArICcgICAgICBpc0NyZWF0ZWREYXRhID0gdHJ1ZTtcXG4nICsgJyAgICAgIGlmIChpc0NyZWF0ZWRXYXNtKSB7IHJlc29sdmUoKTsgfVxcbicgKyAnICAgIH0pXFxuJyArICcgIH0pO1xcbicgKyAnfSkoKTtcXG4nICsgJ2NvbnNvbGUubG9nKFwiY3JlYXRlIHdhc20gYW5kIGRhdGEgLSBlbmRcIiknKTtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSk7XG4gICAgc3JjID0gYFxuICAgIChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICR7c3JjfVxuICAgICAgTW9kdWxlLmxlbmd0aEJ5dGVzVVRGOCA9IGxlbmd0aEJ5dGVzVVRGOFxuICAgICAgTW9kdWxlLnN0cmluZ1RvVVRGOCA9IHN0cmluZ1RvVVRGOFxuICAgICAgcmV0dXJuIE1vZHVsZVxuICAgIH0pKClcbiAgICAgICAgYDtcbiAgICB0aGlzLl9fT0NSRW5naW5lID0gYXdhaXQgZXZhbChzcmMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQgPSBhc3luYyBfID0+IHtcbiAgICAgIHZvaWQgMDtcbiAgICB9O1xuICAgIGF3YWl0IHRoaXMuX19PQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQoKTtcbiAgICB0aGlzLl9fcmVzb3VyY2VzTG9hZGVkID0gdHJ1ZTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19zdGFydFNjYW5XYXNtSW1wbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fX2RldGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKGZhbHNlKTtcbiAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgdGhpcy5fX2FkZHJlc3MgPSAwO1xuICAgICAgdGhpcy5fX3BhZ2VFbmQgPSBmYWxzZTtcbiAgICAgIC8vIOuwqeyWtOy9lOuTnCDrrLjsnpDqsIDrk6TslrTqsIAg7J6I64qU6rK97JqwXG4gICAgICB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID0gaXNOYU4ocGFyc2VJbnQodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCkpID8gMCA6IHBhcnNlSW50KHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQpO1xuICAgICAgdGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPSAwO1xuICAgICAgdGhpcy5fX3NzYVJldHJ5Q291bnQgPSAwO1xuICAgICAgY29uc3Qgc2NhbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgb2NyUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICAgIGlzRGV0ZWN0ZWRDYXJkID0gbnVsbCxcbiAgICAgICAgICAgIGltZ0RhdGEgPSBudWxsLFxuICAgICAgICAgICAgaW1nRGF0YVVybCA9IG51bGwsXG4gICAgICAgICAgICBtYXNrSW1hZ2UgPSBudWxsLFxuICAgICAgICAgICAgZmFjZUltYWdlID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgICBzc2FSZXN1bHRMaXN0ID0gW10sXG4gICAgICAgICAgICBtYXNrSW5mbyA9IG51bGw7XG5cbiAgICAgICAgICAvLyBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICAgIGlmICghdGhpcy5fX09DUkVuZ2luZVsnYXNtJ10pIHJldHVybjtcblxuICAgICAgICAgIC8vIFRPRE8gOiDshKTsoJXtlaDsiJgg7J6I6rKMIOuzgOqyvSAgZGVmYXVsdCDqsJLrj4Qg7KCc6rO1XG4gICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25fdywgcmVzb2x1dGlvbl9oXSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdmlkZW9cbiAgICAgICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICBpZiAocmVzb2x1dGlvbl93ID09PSAwIHx8IHJlc29sdXRpb25faCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgIGlmICh0aGlzLl9fZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBiZWZvcmUgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG4gICAgICAgICAgaWYgKHRoaXMuX19hZGRyZXNzID09PSAwICYmICF0aGlzLl9fcGFnZUVuZCAmJiAoYXdhaXQgdGhpcy5fX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpKSB7XG4gICAgICAgICAgICBbdGhpcy5fX2FkZHJlc3MsIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrXSA9IHRoaXMuX19nZXRTY2FubmVyQWRkcmVzcyh0aGlzLl9fb2NyVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5fX2FkZHJlc3MgfHwgdGhpcy5fX3BhZ2VFbmQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBhZnRlciAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9fb2NyU3RhdHVzIDwgdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBPQ1Ig7JmE66OMIOydtOyghCDsg4Htg5xcblxuICAgICAgICAgICAgLy8gY2FyZCBub3QgZGV0ZWN0ZWRcbiAgICAgICAgICAgIFtpc0RldGVjdGVkQ2FyZCwgaW1nRGF0YSwgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQodGhpcy5fX2FkZHJlc3MsIDApO1xuICAgICAgICAgICAgaWYgKCFpc0RldGVjdGVkQ2FyZCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLlJFQURZKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfRkFJTEVEKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCwgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpOyAvLyDtlYTsmpTtlZzqsIA/XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhcmQgaXMgZGV0ZWN0ZWRcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX1NVQ0NFU1MpO1xuXG4gICAgICAgICAgICAvLyBzc2EgcmV0cnkg7ISk7KCV7J20IOuQmOyWtCDsnojsnLzqsbDrgpgsIOyImOuPmey0rOyYgVVJ66W8IOyCrOyaqe2VmOuKlCDqsr3smrAsIGNhcmQgZGV0ZWN0IOyEseqzteyLnCDsnbTrr7jsp4Ag7KCA7J6lXG4gICAgICAgICAgICB0aGlzLl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUywgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlLCBmYWNlSW1hZ2VdID0gYXdhaXQgdGhpcy5fX3N0YXJ0UmVjb2duaXRpb24odGhpcy5fX2FkZHJlc3MsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fc3NhTW9kZSwgdGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSwgaW1nRGF0YSwgaW1nRGF0YVVybCk7XG5cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpKSB7XG4gICAgICAgICAgICAvLyAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgICAgICAgLy8gICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKGZhbHNlKTsgICAgICAgIC8vIO2VhOyalO2VnOqwgD9cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5fX29jclN0YXR1cyA+PSB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIG9jciDsmYTro4wg7J207ZuEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBmYWlsdXJlIGNhc2VcbiAgICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT0NSIFN0YXR1cyBpcyAke3RoaXMuX19vY3JTdGF0dXN9LCBidXQgb2NyUmVzdWx0IGlzIGZhbHNlYCk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pOyAvLyBPQ1Ig7JmE66OMIOyLnOygkOyXkCBjYW1lcmEgcHJldmlldyBvZmZcblxuICAgICAgICAgICAgaWYgKHRoaXMuX19zc2FNb2RlKSB7XG4gICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgLy8g7LWc7LSIIOyLnOuPhFxuICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2FkZHJlc3MpOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsJyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0cnlTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IEZBS0UgPSB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVR5cGUgPT09ICdGQUtFJztcbiAgICAgICAgICAgICAgICBjb25zdCBSRUFMID0gdGhpcy5fX29wdGlvbnMuc3NhUmV0cnlUeXBlID09PSAnUkVBTCc7XG4gICAgICAgICAgICAgICAgY29uc3QgRU5TRU1CTEUgPSB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVR5cGUgPT09ICdFTlNFTUJMRSc7XG4gICAgICAgICAgICAgICAgbGV0IGlzQ29tcGxldGVkID0gZmFsc2U7IC8vIOu5hOuPmeq4sCBmb3Ig66y4IOuVjOusuOyXkCBicmVha+qwgCDslYjqsbjrpqzripQg7J207IqI66GcIOuEo+ydjFxuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMDsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX3NzYVJldHJ5Q291bnQgPT09IHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19zc2FSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMDsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoUmV0cnkodGhpcy5fX29jclR5cGUsIHRoaXMuX19hZGRyZXNzLCBpdGVtKTsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignW0VSUl0gU1NBIE1PREUgaXMgdHJ1ZS4gYnV0LCBzc2FSZXN1bHQgaXMgbnVsbCcpOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgICAgICAgICAgICAgICAgICBzc2FSZXN1bHRMaXN0LnB1c2goc3NhUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBpZiAoRkFLRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0LmluZGV4T2YoJ1JFQUwnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKFJFQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdC5pbmRleE9mKCdGQUtFJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChFTlNFTUJMRSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBleGVjdXRlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHJ5V29ya2luZ1RpbWUgPSBuZXcgRGF0ZSgpIC0gcmV0cnlTdGFydERhdGU7XG4gICAgICAgICAgICAgICAgdm9pZCAwOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYXNrSW5mbykge1xuICAgICAgICAgICAgICBtYXNrSW5mbyA9IHRoaXMuX19nZXRNYXNrSW5mbyh0aGlzLl9fYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGxlZ2FjeUZvcm1hdCxcbiAgICAgICAgICAgICAgbmV3Rm9ybWF0XG4gICAgICAgICAgICB9ID0gdXNlYk9DUldBU01QYXJzZXIucGFyc2VPY3JSZXN1bHQodGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCBvY3JSZXN1bHQsIHNzYVJlc3VsdCwgdGhpcy5fX3NzYVJldHJ5Q291bnQsIHNzYVJlc3VsdExpc3QsIHRoaXMuX19vcHRpb25zLnNzYVJldHJ5VHlwZSwgdGhpcy5fX29wdGlvbnMuc3NhUmV0cnlQaXZvdCk7XG4gICAgICAgICAgICBsZXQgcmV2aWV3X3Jlc3VsdCA9IHtcbiAgICAgICAgICAgICAgb2NyX3R5cGU6IHRoaXMuX19vY3JUeXBlLFxuICAgICAgICAgICAgICBvY3JfcmVzdWx0OiBuZXdGb3JtYXQsXG4gICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBtYXNrSW1hZ2UsXG4gICAgICAgICAgICAgIG9jcl9mYWNlX2ltYWdlOiBmYWNlSW1hZ2UsXG4gICAgICAgICAgICAgIG1hc2tJbmZvOiBtYXNrSW5mbyxcbiAgICAgICAgICAgICAgc3NhX21vZGU6IHRoaXMuX19zc2FNb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUVuY3J5cHRNb2RlICYmIHRoaXMuX19pc1N1cHBvcnRXYXNtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVMaXN0ID0gWydjb21wbGV0ZScsICdyZXN1bHRfc2Nhbl90eXBlJywgJ2NvbG9yX3BvaW50JywgJ2ZvdW5kX2ZhY2UnLCAnc3BlY3VsYXJfcmF0aW8nLCAnc3RhcnRfdGltZScsICdlbmRfdGltZScsICdmZF9jb25maWRlbmNlJywgJ2lkX3RydXRoJywgJ2lkX3RydXRoX3JldHJ5X2NvdW50J107XG4gICAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICByZXZpZXdfcmVzdWx0LmVuY3J5cHRlZCA9IHtcbiAgICAgICAgICAgICAgICBvY3JfcmVzdWx0OiBfLnRvUGFpcnMoXy5vbWl0KHJldmlld19yZXN1bHQub2NyX3Jlc3VsdCwgZXhjbHVkZUxpc3QpKS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3Jfb3JpZ2luX2ltYWdlKSxcbiAgICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHJldmlld19yZXN1bHQub2NyX21hc2tpbmdfaW1hZ2UpLFxuICAgICAgICAgICAgICAgIG9jcl9mYWNlX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3JfZmFjZV9pbWFnZSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VMZWdhY3lGb3JtYXQpIHtcbiAgICAgICAgICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfZGF0YSA9IGxlZ2FjeUZvcm1hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19vblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpO1xuICAgICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3InO1xuICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnOiAnICsgZS5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2b2lkIDA7XG5cbiAgICAgICAgICAvLyBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgIC8vICAgYXdhaXQgdGhpcy5fX3JlY292ZXJ5U2NhbigpO1xuICAgICAgICAgIC8vICAgdGhpcy5fX3JlY292ZXJlZCA9IHRydWU7XG4gICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcygnV0EwMDEnLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0aGlzLl9fcmVjb3ZlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmVjb3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5fX2RldGVjdGVkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNjYW4sIDEpOyAvLyDsnqzqt4BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNldFRpbWVvdXQoc2NhbiwgMSk7IC8vIFVJIOuenOuNlOungSBibG9ja2luZyDrsKnsp4AgKHNldFRpbWVvdXQpXG4gICAgfSk7XG4gIH1cblxuICBfX3JlcXVlc3RHZXRBUElUb2tlbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY3JlZGVudGlhbCA9IHRoaXMuX19vcHRpb25zLmF1dGhTZXJ2ZXJJbmZvLmNyZWRlbnRpYWw7XG4gICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5fX29wdGlvbnMuYXV0aFNlcnZlckluZm8uYmFzZVVybDtcbiAgICAgIGZldGNoKGAke2Jhc2VVcmx9L3NpZ24taW5gLCB7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWwpLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAvLyBtb2RlOiAnY29ycycsXG4gICAgICAgIC8vIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vdXNlYi90b2tlbmAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cmVzdWx0LnRva2VufWBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IG51bGwsXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgIHJlc29sdmUoanNvbi50b2tlbik7XG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBfX3JlcXVlc3RTZXJ2ZXJPQ1Iob2NyVHlwZSwgc3NhTW9kZSwgaW1nRGF0YVVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgYmFzZVVybCA9IHRoaXMuX19vcHRpb25zLm9jclNlcnZlckJhc2VVcmw7XG4gICAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICAgIGJhc2VVcmwgKz0gJy9vY3IvaWRjYXJkLWRyaXZlcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgICBiYXNlVXJsICs9ICcvb2NyL3Bhc3Nwb3J0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgICAgYmFzZVVybCArPSAnL29jci9hbGllbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDcmVkaXQgY2FyZCBpcyBub3QgVW5zdXBwb3J0ZWQgU2VydmVyIE9DUicpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIE9DUiB0eXBlOiAke29jclR5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXBpVG9rZW4gPSBhd2FpdCB0aGlzLl9fcmVxdWVzdEdldEFQSVRva2VuKCk7XG4gICAgICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpVG9rZW59YCk7XG4gICAgICAgIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbWFnZV9iYXNlNjQ6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgc3NhX21vZGU6ICd0cnVlJyxcbiAgICAgICAgICBtYXNrX21vZGU6ICd0cnVlJyxcbiAgICAgICAgICBmYWNlX21vZGU6ICd0cnVlJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICAgIGJvZHk6IHJhdyxcbiAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdydcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2goYmFzZVVybCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fc3RhcnRTY2FuU2VydmVySW1wbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsLFxuICAgICAgICAgIHNzYVJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgc3NhUmVzdWx0TGlzdCA9IFtdO1xuICAgICAgICBjb25zdCBfX29uQ2xpY2tDYXB0dXJlQnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIC8vIOy6lOuyhOyKpOyXkOyEnCDsnbTrr7jsp4Drpbwg6rCA7KC47Ji0XG4gICAgICAgICAgY29uc3QgWywgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9fY3JvcEltYWdlRnJvbVZpZGVvKCk7XG4gICAgICAgICAgaWYgKDEgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIHNlcnZlciBvY3Ig7Iuk7YyoICjrsJzsg50g6rCA64ql7ISxIOyXhuydjClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2VydmVyIG9jciDshLHqs7VcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MsIGZhbHNlLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIG9jclJlc3VsdCA9IGF3YWl0IHRoaXMuX19yZXF1ZXN0U2VydmVyT0NSKHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fc3NhTW9kZSwgaW1nRGF0YVVybCk7XG5cbiAgICAgICAgICAgICAgLy8gZmFpbHVyZSBjYXNlXG4gICAgICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgT0NSIGlzIGZhaWxlZGApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzc2Eg7Iuc64+EP1xuXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgdmlkZW9cbiAgICAgICAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7IC8vIE9DUiDsmYTro4wg7Iuc7KCQ7JeQIGNhbWVyYSBwcmV2aWV3IG9mZlxuXG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGxlZ2FjeUZvcm1hdCxcbiAgICAgICAgICAgICAgbmV3Rm9ybWF0LFxuICAgICAgICAgICAgICBiYXNlNjRJbWFnZVJlc3VsdCxcbiAgICAgICAgICAgICAgbWFza0luZm9cbiAgICAgICAgICAgIH0gPSB1c2ViT0NSQVBJUGFyc2VyLnBhcnNlT2NyUmVzdWx0KHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fc3NhTW9kZSwgb2NyUmVzdWx0KTtcbiAgICAgICAgICAgIGxldCByZXZpZXdfcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgICAgICAgIG9jcl9yZXN1bHQ6IG5ld0Zvcm1hdCxcbiAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogaW1nRGF0YVVybCxcbiAgICAgICAgICAgICAgb2NyX21hc2tpbmdfaW1hZ2U6IGJhc2U2NEltYWdlUmVzdWx0Py5vY3JfbWFza2luZ19pbWFnZSxcbiAgICAgICAgICAgICAgb2NyX2ZhY2VfaW1hZ2U6IGJhc2U2NEltYWdlUmVzdWx0Py5vY3JfZmFjZV9pbWFnZSxcbiAgICAgICAgICAgICAgbWFza0luZm8sXG4gICAgICAgICAgICAgIHNzYV9tb2RlOiB0aGlzLl9fc3NhTW9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VFbmNyeXB0TW9kZSAmJiB0aGlzLl9faXNTdXBwb3J0V2FzbSkge1xuICAgICAgICAgICAgICBjb25zdCBleGNsdWRlTGlzdCA9IFsnY29tcGxldGUnLCAncmVzdWx0X3NjYW5fdHlwZScsICdjb2xvcl9wb2ludCcsICdmb3VuZF9mYWNlJywgJ3NwZWN1bGFyX3JhdGlvJywgJ3N0YXJ0X3RpbWUnLCAnZW5kX3RpbWUnLCAnZmRfY29uZmlkZW5jZScsICdpZF90cnV0aCcsICdpZF90cnV0aF9yZXRyeV9jb3VudCddO1xuICAgICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgcmV2aWV3X3Jlc3VsdC5lbmNyeXB0ZWQgPSB7XG4gICAgICAgICAgICAgICAgb2NyX3Jlc3VsdDogXy50b1BhaXJzKF8ub21pdChyZXZpZXdfcmVzdWx0Lm9jcl9yZXN1bHQsIGV4Y2x1ZGVMaXN0KSkucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgYWNjW2tleV0gPSB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHJldmlld19yZXN1bHQub2NyX29yaWdpbl9pbWFnZSksXG4gICAgICAgICAgICAgICAgb2NyX21hc2tpbmdfaW1hZ2U6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9tYXNraW5nX2ltYWdlKSxcbiAgICAgICAgICAgICAgICBvY3JfZmFjZV9pbWFnZTogdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHJldmlld19yZXN1bHQub2NyX2ZhY2VfaW1hZ2UpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTGVnYWN5Rm9ybWF0KSB7XG4gICAgICAgICAgICAgIHJldmlld19yZXN1bHQub2NyX2RhdGEgPSBsZWdhY3lGb3JtYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fX2NhcHR1cmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX29uQ2xpY2tDYXB0dXJlQnV0dG9uKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdTZXJ2ZXIgT0NSIEVycm9yJztcbiAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnOiAnICsgZS5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoJ1FTMDAxJywgZSwgZXJyb3JNZXNzYWdlKTsgLy8gUVVSQU0gU2VydmVyIE9DUiDsl5Drn6xcbiAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEsIGltZ0RhdGFVUkwpIHtcbiAgICAvLyBzc2EgcmV0cnkg7ISk7KCV7J20IOuQmOyWtCDsnojsnLzqsbDrgpgsIOyImOuPmey0rOyYgVVJ66W8IOyCrOyaqe2VmOuKlCDqsr3smrAsIGNhcmQgZGV0ZWN0IOyEseqzteyLnCDsnbTrr7jsp4Ag7KCA7J6lXG4gICAgaWYgKHRoaXMuX19zc2FNb2RlICYmIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPiAwIHx8IHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSAmJiB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgIGxldCBsaW1pdFNhdmVJbWFnZUNvdW50ID0gTWF0aC5tYXgodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCwgdGhpcy5fX21hbnVhbE9DUk1heFJldHJ5Q291bnQpO1xuICAgICAgaWYgKHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5sZW5ndGggPT09IGxpbWl0U2F2ZUltYWdlQ291bnQpIHtcbiAgICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0aGlzLl9fZGVidWdNb2RlKSB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQuc2hpZnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5wdXNoKGltZ0RhdGEpO1xuICAgICAgaWYgKHRoaXMuX19kZWJ1Z01vZGUpIHtcbiAgICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlQmFzZTY0LnB1c2goaW1nRGF0YVVSTCk7XG4gICAgICAgIHZvaWQgMDsgLy8gc2hvdWxkIGJlIHJlbW92ZWRcbiAgICAgIH1cblxuICAgICAgdm9pZCAwOyAvLyBzaG91bGQgYmUgcmVtb3ZlZFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KSB7XG4gICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgIGlmIChyZXZpZXdfcmVzdWx0LnNzYV9tb2RlKSB7XG4gICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIHJlc3VsdF9jb2RlOiAnTjEwMCcsXG4gICAgICAgIHJlc3VsdF9tZXNzYWdlOiAnT0suJ1xuICAgICAgfSxcbiAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnLFxuICAgICAgcmV2aWV3X3Jlc3VsdDogcmV2aWV3X3Jlc3VsdFxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vblN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fb25GYWlsdXJlUHJvY2VzcyhyZXN1bHRDb2RlLCBlLCBlcnJvck1lc3NhZ2UpIHtcbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEKTtcbiAgICBsZXQgZXJyb3JEZXRhaWwgPSAnJztcbiAgICBpZiAoZT8udG9TdHJpbmcoKSkgZXJyb3JEZXRhaWwgKz0gZS50b1N0cmluZygpO1xuICAgIGlmIChlPy5zdGFjaykgZXJyb3JEZXRhaWwgKz0gZS5zdGFjaztcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgcmVzdWx0X2NvZGU6IHJlc3VsdENvZGUsXG4gICAgICAgIHJlc3VsdF9tZXNzYWdlOiBlcnJvck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6ICdmYWlsZWQnLFxuICAgICAgcmV2aWV3X3Jlc3VsdDoge1xuICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgIGVycm9yX2RldGFpbDogZXJyb3JEZXRhaWxcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0aGlzLl9fb25GYWlsdXJlKSB7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlKHJlc3VsdCk7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3ByZWxvYWRpbmdXYXNtKCkge1xuICAgIGNvbnN0IHByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKTtcbiAgICBpZiAoIXRoaXMuaXNQcmVsb2FkZWQoKSAmJiBwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBhd2FpdCB0aGlzLnByZWxvYWRpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRCkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIGF3YWl0IHRoaXMuX193YWl0UHJlbG9hZGVkKCk7XG4gICAgICB9IGVsc2UgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORSkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFibm9ybWFsbHkgcHJlbG9hZGluZyBzdGF0dXMsIHByZWxvYWRlZDogJHt0aGlzLmlzUHJlbG9hZGVkKCl9IC8gcHJlbG9hZGluZ1N0YXR1czogJHt0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX19zdGFydFNjYW5XYXNtKCkge1xuICAgIHZvaWQgMDtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuV2FzbUltcGwoKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgYXN5bmMgX19zdGFydFNjYW5TZXJ2ZXIoKSB7XG4gICAgdm9pZCAwO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSA9IHRydWU7XG4gICAgYXdhaXQgdGhpcy5fX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2NhblNlcnZlckltcGwoKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgYXN5bmMgX19yZWNvdmVyeVNjYW4oKSB7XG4gICAgdm9pZCAwO1xuICAgIHRoaXMuX19yZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2Nhbldhc20oKTtcbiAgfVxuICBzdG9wU2NhbigpIHtcbiAgICB0aGlzLl9fZGV0ZWN0ZWQgPSB0cnVlOyAvLyBzd2l0Y2ggdG8gc2VydmVy7J2865WMIOq4sOyhtCBXQVNNIGxvb3Ag6rCV7KCc7KKF66OMXG4gICAgY29uc3Qge1xuICAgICAgY2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9XG4gIHN0b3BTdHJlYW0oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy5fX3N0cmVhbSkge1xuICAgICAgdGhpcy5fX3N0cmVhbS5zdG9wICYmIHRoaXMuX19zdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzICYmIHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhY2tzLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdHJlYW0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDrqZTrqqjrpqwgYWxsb2NhdGlvbiBmcmVlIO2VqOyImCAqL1xuICBjbGVhbnVwKCkge1xuICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKTtcbiAgICB0aGlzLl9fZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuX19kZXN0cm95UHJldkltYWdlKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCk7XG4gIH1cbiAgX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgaWYgKHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlQk9DUjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsUUFBUSxNQUFNLHVCQUF1QjtBQUM1QyxPQUFPQyxpQkFBaUIsTUFBTSxtQ0FBbUM7QUFDakUsT0FBT0MsZ0JBQWdCLE1BQU0sa0NBQWtDO0FBQy9ELFNBQVNDLGFBQWEsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sUUFBUSxrQ0FBa0M7QUFDeEYsSUFBSUMsUUFBUTtBQUNaLE1BQU1DLE9BQU8sQ0FBQztFQTJCWjs7RUFFQTs7RUFzRWlDO0VBQ0w7O0VBTUU7RUFDRjtFQUNDOztFQUs3Qjs7RUE2SUE7RUFDQUMsV0FBV0EsQ0FBQSxFQUFHO0lBQUFDLGVBQUEsc0JBOVBBO01BQ1pDLElBQUksRUFBRSxNQUFNO01BQ1pDLFNBQVMsRUFBRSxXQUFXO01BQ3RCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxtQkFBbUIsRUFBRSxnQkFBZ0I7TUFDckNDLGtCQUFrQixFQUFFLGVBQWU7TUFDbkNDLHNCQUFzQixFQUFFLHdCQUF3QjtNQUNoREMscUJBQXFCLEVBQUUsdUJBQXVCO01BQzlDQyxjQUFjLEVBQUUsWUFBWTtNQUM1QkMsdUJBQXVCLEVBQUUscUJBQXFCO01BQzlDQyxXQUFXLEVBQUUsYUFBYTtNQUMxQkMsb0JBQW9CLEVBQUUsc0JBQXNCO01BQzVDQyxVQUFVLEVBQUU7SUFDZCxDQUFDO0lBQUFaLGVBQUEscUJBQ1k7TUFDWEUsU0FBUyxFQUFFLENBQUMsQ0FBQztNQUNiQyxLQUFLLEVBQUUsQ0FBQztNQUNSTyxXQUFXLEVBQUUsQ0FBQztNQUNkRyxJQUFJLEVBQUU7SUFDUixDQUFD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
