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
import ImageUtil from './helpers/image-util.js';
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
    _defineProperty(this, "OCR_IMG_MODE", {
      WARPING: 0,
      CROPPING: 1,
      NONE: 2
    });
    _defineProperty(this, "OCR_IMG_MASK_MODE", {
      FALSE: 0,
      TRUE: 1
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
      useImageWarping: false,
      // 신분증 이미지를 Warping(왜곡 보정 할지 여부)
      useCompressImage: false,
      // 신분증 이미지를 압축할지 여부
      useCompressImageMaxWidth: 1080,
      // 이미지 리사이징 가로 해상도
      useCompressImageMaxVolume: 1024 * 50,
      // 이미지 압축 목표 용량

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

      // 카메라 해상도 설정  : 'compatibility' (호환성 우선) || 'highQuality' (고화질 우선)
      cameraResolutionCriteria: 'compatibility',
      // 호환성 우선(권장, 디폴트) : 720으로 고정, 저사양 단말기 호환성 좋음
      // cameraResolutionCriteria: 'highQuality', // 고화질 우선 : 1080이 가능하면 1080 불가능하면 720

      // 가이드 박스 설정 : 'cameraResolution' (카메라 해상도) || 'ocrViewSize' (ocr div 크기)
      calcGuideBoxCriteria: 'cameraResolution',
      // 카메라 해상도 기준(권장, 디폴트) : 720x1280 해상도(세로모드) 일때 ocr view width size가 720보다 큰 경우, 가이드 박스를 720에 맞춤 (preview 화면 깨짐 없음)
      // calcGuideBoxCriteria: 'ocrViewSize', // 화면 사이즈 기준 : 720x1280 해상도(세로모드) 일때 ocr view width size가 720보다 큰경우, 가이드 박스를 ocr view width 사에즈에 맞춤 (preview 화면 강제로 늘리기 때문에 다소 깨짐)

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
          var [latencyPer100ms, measureReport] = yield measure();
          _this2.__debug(measureReport);
          return latencyPer100ms > _this2.__options.switchToServerThreshold;
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
        _this3.__preprocess();
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
  encrypt(plainStr) {
    return this.__encryptScanResult(plainStr);
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
  __preprocess() {
    var convertTypeToNumber = function convertTypeToNumber(option) {
      return isNaN(parseInt(option)) ? 0 : parseInt(option);
    };
    this.__options.ssaMaxRetryCount = convertTypeToNumber(this.__options.ssaMaxRetryCount);
    this.__options.useCompressImageMaxVolume = convertTypeToNumber(this.__options.useCompressImageMaxVolume);
    this.__options.useCompressImageMaxWidth = convertTypeToNumber(this.__options.useCompressImageMaxWidth);
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
  __debug(msg) {
    void 0;
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
  __base64toBlob(base64) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(base64.split(',')[1]);

    // separate out the mime component
    var mimeString = base64.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {
      type: mimeString
    });
  }
  __compreseBase64Image(base64, options, constantNumber) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      if (base64 === null) return null;
      var blobFile = _this6.__base64toBlob(base64);
      var compressed = yield ImageUtil.compressImage(blobFile, options, constantNumber);
      var compressionRatio = Math.round((1 - compressed.size / blobFile.size) * 10000) / 100;
      void 0;
      return yield _this6.__blobToBase64(compressed);
    })();
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
    var _this7 = this;
    return _asyncToGenerator(function* () {
      var isSupportedResolution = false;
      var resolutionText = 'not ready';
      if (!_this7.__camSetComplete) {
        return {
          isSupportedResolution,
          resolutionText
        };
      }
      if (videoElement.videoWidth === 0 && videoElement.videoHeight === 0) {
        yield _this7.__changeStage(_this7.IN_PROGRESS.NOT_READY);
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
      _this7.__videoWidth = videoElement.videoWidth;
      _this7.__videoHeight = videoElement.videoHeight;
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
  __getImageBase64(address, maskMode, imgMode) {
    var _arguments3 = arguments,
      _this8 = this;
    return _asyncToGenerator(function* () {
      var imgType = _arguments3.length > 3 && _arguments3[3] !== undefined ? _arguments3[3] : 'card';
      try {
        if (imgType === 'card') {
          _this8.__OCREngine.encodeJpgDetectedFrameImage(address, maskMode, imgMode);
        } else if (imgType === 'face') {
          _this8.__OCREngine.encodeJpgDetectedPhotoImage(address);
        }
        var jpgSize = _this8.__OCREngine.getEncodedJpgSize();
        var jpgPointer = _this8.__OCREngine.getEncodedJpgBuffer();
        var resultView = new Uint8Array(_this8.__OCREngine.HEAP8.buffer, jpgPointer, jpgSize);
        var result = new Uint8Array(resultView);
        var blob = new Blob([result], {
          type: 'image/jpeg'
        });
        return yield _this8.__blobToBase64(blob);
      } catch (e) {
        void 0;
        throw e;
      } finally {
        _this8.__OCREngine.destroyEncodedJpg();
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
    var _this9 = this;
    return _asyncToGenerator(function* () {
      var {
        isSupportedResolution,
        resolutionText
      } = yield _this9.__setVideoResolution(videoElement);
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
    var _this10 = this;
    return _asyncToGenerator(function* () {
      if (!_this10.__camSetComplete) return [null, null, null];
      var [calcResolution_w, calcResolution_h] = [_this10.__resolutionWidth, _this10.__resolutionHeight];
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
      var calcCropImageSizeWidth = _this10.__cropImageSizeWidth;
      var calcCropImageSizeHeight = _this10.__cropImageSizeHeight;
      var calcVideoOrientation = _this10.__videoOrientation;
      if (_this10.__isRotated90or270) {
        [calcCropImageSizeWidth, calcCropImageSizeHeight] = [calcCropImageSizeHeight, calcCropImageSizeWidth];
        [calcResolution_w, calcResolution_h] = [calcResolution_h, calcResolution_w];
        calcCanvas = rotationCanvas;
        calcVideoOrientation = _this10.__videoOrientation === 'portrait' ? 'landscape' : 'portrait';
      }
      var calcMaxSWidth = 99999;
      var calcMaxSHeight = 99999;
      if (_this10.__uiOrientation === 'portrait') {
        if (calcVideoOrientation === _this10.__uiOrientation) {
          // 세로 UI / 세로 카메라
          calcMaxSWidth = calcVideoWidth;
          calcMaxSHeight = calcVideoHeight;
        } else {
          // 세로 UI / 가로 카메라
          calcMaxSHeight = calcVideoHeight;
        }
      } else {
        if (calcVideoOrientation === _this10.__uiOrientation) {
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
      sx = Math.max(Math.round((calcVideoClientWidth - calcCropImageSizeWidth) / 2 * ratio), 0);
      sy = Math.max(Math.round((calcVideoClientHeight - calcCropImageSizeHeight) / 2 * ratio), 0);
      var calcContext = calcCanvas.getContext('2d', {
        willReadFrequently: true
      });
      // console.debug('sx, sy, sWidth(resolution_w), sHeight(resolution_h), video.videoWidth, video.videoHeight', sx, sy, sWidth, sHeight, video.videoWidth, video.videoHeight);
      calcContext.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, calcResolution_w, calcResolution_h);
      var imgData = calcContext.getImageData(0, 0, calcResolution_w, calcResolution_h);
      var imgDataUrl = calcCanvas.toDataURL('image/jpeg');
      if (_this10.__isRotated90or270) {
        return yield _this10.__rotate(imgData, imgDataUrl, _this10.__getRotationDegree());
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
      _this11 = this;
    return _asyncToGenerator(function* () {
      var boxType = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : 0;
      var retryImg = _arguments4.length > 2 && _arguments4[2] !== undefined ? _arguments4[2] : null;
      if (!address || address < 0) {
        return [false, null];
      }
      try {
        var imgData;
        var imgDataUrl = null;
        var [buffer] = _this11.__getBuffer();
        if (retryImg !== null) {
          imgData = retryImg;
        } else {
          [imgData, imgDataUrl] = yield _this11.__cropImageFromVideo();
        }
        if (!!!imgData) {
          return [false, null];
        }
        _this11.__OCREngine.HEAP8.set(imgData.data, buffer);
        var kor = false,
          alien = false,
          passport = false;
        switch (_this11.__ocrType) {
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
          result = _this11.__OCREngine.detect_idcard_opt(buffer, _this11.__resolutionWidth, _this11.__resolutionHeight, address, kor, alien, passport);
        } else {
          result = _this11.__OCREngine.detect_idcard(buffer, _this11.__resolutionWidth, _this11.__resolutionHeight, address, boxType);
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
    var _this12 = this;
    return _asyncToGenerator(function* () {
      try {
        if (address === null) {
          return '';
        } else if (address === -1) {
          return 'checkValidation Fail';
        }
        var ocrResult = null;
        if (!_this12.__ocrTypeList.includes(ocrType)) throw new Error('Unsupported OCR type');
        var [, resultBuffer] = _this12.__getBuffer();
        var recognition = /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator(function* (isSetIgnoreComplete) {
            var _ocrResult, _ocrResult2;
            if (isSetIgnoreComplete) {
              yield _this12.__isCardboxDetected(address, 0, imgData);
            }
            switch (ocrType) {
              case 'idcard':
              case 'driver':
              case 'idcard-ssa':
              case 'driver-ssa':
                ocrResult = _this12.__OCREngine.scanIDCard(address, resultBuffer);
                break;
              case 'passport':
              case 'foreign-passport':
              case 'passport-ssa':
              case 'foreign-passport-ssa':
                ocrResult = _this12.__OCREngine.scanPassport(address, resultBuffer);
                break;
              case 'alien':
              case 'alien-ssa':
                ocrResult = _this12.__OCREngine.scanAlien(address, resultBuffer);
                break;
              case 'credit':
                ocrResult = _this12.__OCREngine.scanCredit(address, resultBuffer);
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
            ocrResult = _this12.__csvToObject(ocrResult);
            if (((_ocrResult = ocrResult) === null || _ocrResult === void 0 ? void 0 : _ocrResult.complete) !== 'undefined' && ((_ocrResult2 = ocrResult) === null || _ocrResult2 === void 0 ? void 0 : _ocrResult2.complete) === 'true') {
              return true;
            } else {
              if (isSetIgnoreComplete) {
                if (_this12.__manualOCRRetryCount < _this12.__manualOCRMaxRetryCount) {
                  // detectedCardQueue에서 한장을 꺼내서 갱신한다.
                  // 저장되어있는 이미지의 숫자가 retry 보다 작은경우 대비하여 %를 사용함
                  var queueIdx = _this12.__manualOCRRetryCount % _this12.__detectedCardQueue.length;
                  imgData = _this12.__detectedCardQueue[queueIdx];
                  _this12.__manualOCRRetryCount++;
                  return yield recognition(isSetIgnoreComplete);
                } else {
                  // 사진 한장으로 OCR 실패 (popup 내리고 setIgnoreComplete(false) 처리?
                  _this12.__manualOCRRetryCount = 0;
                  _this12.setIgnoreComplete(false);
                  _this12.__blurCaptureButton(); // 팝업이 내려갈때 처리되지만 미리 처리
                  yield _this12.__changeStage(_this12.IN_PROGRESS.MANUAL_CAPTURE_FAILED, false, imgDataUrl);
                  _this12.__setStyle(detector.getOCRElements().video, {
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
          var ocrImageMode;
          if (isCreditCard) {
            ocrImageMode = _this12.OCR_IMG_MODE.CROPPING;
          } else if (_this12.__options.useImageWarping) {
            ocrImageMode = _this12.OCR_IMG_MODE.WARPING;
          } else {
            ocrImageMode = _this12.OCR_IMG_MODE.NONE;
          }
          var originImage = yield _this12.__getImageBase64(address, _this12.OCR_IMG_MASK_MODE.FALSE, ocrImageMode);
          var maskImage = null;
          var faceImage = null;
          if (!isCreditCard) {
            maskImage = yield _this12.__getImageBase64(address, _this12.OCR_IMG_MASK_MODE.TRUE, _this12.OCR_IMG_MODE.WARPING);
            maskImage = maskImage === 'data:' ? null : maskImage;
            faceImage = _this12.__options.useFaceImage ? yield _this12.__getImageBase64(address, null, ocrImageMode, 'face') : null;
          }
          if (ssaMode) {
            yield _this12.__changeStage(_this12.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA, false, maskImage);
          } else {
            yield _this12.__changeStage(_this12.IN_PROGRESS.OCR_RECOGNIZED);
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
    var _this13 = this;
    return _asyncToGenerator(function* () {
      yield _this13.__isCardboxDetected(address, 0, imgData);
      // await this.__startRecognition(address, ocrType, true);      // for 성능을 위해 진행 X
      return yield _this13.__startTruth(ocrType, address);
    })();
  }
  __setCameraPermissionTimeoutTimer() {
    var _this14 = this;
    this.__clearCameraPermissionTimeoutTimer();
    this.__cameraPermissionTimeoutTimer = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
      // 1초 delay 후 실행
      yield _this14.__proceedCameraPermission();
    }), 1000);
  }
  __proceedCameraPermission() {
    var _this15 = this;
    return _asyncToGenerator(function* () {
      try {
        _this15.__closeCamera();
        var isPassport = _this15.__ocrType.includes('passport');
        yield _this15.__setupVideo(isPassport);
        var {
          video
        } = detector.getOCRElements();
        if (video) {
          // const [track] = this.__stream.getVideoTracks();
          // const capability = track.getCapabilities();
          // console.debug('CardScan__initialize capability', capability);
          if ('srcObject' in video) {
            video.srcObject = _this15.__stream;
          } else {
            // Avoid using this in new browsers, as it is going away.
            video.src = window.URL.createObjectURL(_this15.__stream);
          }
          video.addEventListener('loadedmetadata', () => {
            // console.debug('proceedCameraPermission - onloadedmetadata');
            video.play();
          });
          video.addEventListener('canplay', /*#__PURE__*/_asyncToGenerator(function* () {
            void 0;

            // video element style 설정
            _this15.__videoOrientation = video.videoWidth / video.videoHeight < 1 ? 'portrait' : 'landscape';
            void 0;
            void 0;
            void 0;
            _this15.__camSetComplete = true;
            yield _this15.__adjustStyle();
          }));
          yield _this15.__changeStage(_this15.IN_PROGRESS.READY);
          video.webkitExitFullscreen();
        } else {
          yield _this15.__changeStage(_this15.IN_PROGRESS.NOT_READY);
          _this15.__closeCamera();
        }
      } catch (e) {
        void 0;
        if (e.name === 'NotAllowedError') {
          var errorMessage = 'Camera Access Permission is not allowed';
          void 0;
          void 0;
          _this15.__onFailureProcess('E403', e, errorMessage);
        } else if (e.name === 'NotReadableError') {
          // 다른곳에서 카메라 자원을 사용중
          yield _this15.__changeStage(_this15.IN_PROGRESS.NOT_READY);
          _this15.stopStream();
          _this15.__setCameraPermissionTimeoutTimer(); // 재귀 호출
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
      _this16 = this;
    return _asyncToGenerator(function* () {
      var forceUpdate = _arguments5.length > 1 && _arguments5[1] !== undefined ? _arguments5[1] : false;
      var recognizedImage = _arguments5.length > 2 && _arguments5[2] !== undefined ? _arguments5[2] : null;
      if (_this16.__previousInProgressStep === val && forceUpdate === false) {
        return;
      }
      _this16.__changeOCRStatus(val);
      _this16.__previousInProgressStep = val;
      _this16.__inProgressStep = val;
      var {
        guideBox,
        maskBoxWrap,
        captureButton
      } = detector.getOCRElements();
      var style = {
        borderWidth: _this16.__options.frameBorderStyle.width + 'px',
        borderStyle: _this16.__options.frameBorderStyle.style,
        borderRadius: _this16.__options.frameBorderStyle.radius + 'px',
        borderColor: _this16.__options.frameBorderStyle[val]
      };
      if (guideBox) {
        _this16.__setStyle(guideBox, style);
      }
      if (_this16.__options.useMaskFrameColorChange) {
        if (!!_this16.__options.showClipFrame) {
          void 0;
        } else {
          var _maskBoxWrap$querySel;
          maskBoxWrap === null || maskBoxWrap === void 0 ? void 0 : (_maskBoxWrap$querySel = maskBoxWrap.querySelector('#maskBoxOuter')) === null || _maskBoxWrap$querySel === void 0 ? void 0 : _maskBoxWrap$querySel.setAttribute('fill', _this16.__options.maskFrameStyle[val]);
        }
      }
      if (_this16.__options.useCaptureUI) {
        var _captureButton$queryS;
        captureButton === null || captureButton === void 0 ? void 0 : (_captureButton$queryS = captureButton.querySelector('#captureButton')) === null || _captureButton$queryS === void 0 ? void 0 : _captureButton$queryS.setAttribute('fill', _this16.__options.captureButtonStyle['base_color']);
      }
      var ocrMode = _this16.__isSwitchToServerMode ? 'server' : 'wasm';
      if (_this16.__onInProgressChange) {
        if (_this16.__options.useTopUI || _this16.__options.useTopUITextMsg) {
          _this16.__onInProgressChange.call(_this16, ocrMode, _this16.__ocrType, _this16.__inProgressStep, _this16.__topUI, 'top', _this16.__options.useTopUITextMsg, _this16.__options.useCaptureUI, _this16.__options.usePreviewUI, recognizedImage);
        }
        if (_this16.__options.useMiddleUI || _this16.__options.useMiddleUITextMsg) {
          _this16.__onInProgressChange.call(_this16, ocrMode, _this16.__ocrType, _this16.__inProgressStep, _this16.__middleUI, 'middle', _this16.__options.useMiddleUITextMsg, _this16.__options.useCaptureUI, _this16.__options.usePreviewUI, recognizedImage);
        }
        if (_this16.__options.useBottomUI || _this16.__options.useBottomUITextMsg) {
          _this16.__onInProgressChange.call(_this16, ocrMode, _this16.__ocrType, _this16.__inProgressStep, _this16.__bottomUI, 'bottom', _this16.__options.useBottomUITextMsg, _this16.__options.useCaptureUI, _this16.__options.usePreviewUI, recognizedImage);
        }
      }
      if (val === _this16.IN_PROGRESS.MANUAL_CAPTURE_SUCCESS || val === _this16.IN_PROGRESS.MANUAL_CAPTURE_FAILED) {
        if (_this16.__options.usePreviewUI) {
          _this16.__updatePreviewUI(recognizedImage);

          // FAIL인 경우 5초후 자동을 창닫음
          if (val === _this16.IN_PROGRESS.MANUAL_CAPTURE_FAILED) {
            setTimeout(_this16.__hidePreviewUI, 3000, _this16);
          }
        }
      }
      if (val === _this16.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA) {
        var {
          video
        } = detector.getOCRElements();
        _this16.__setStyle(video, {
          display: 'none'
        });
        if (_this16.__options.usePreviewUI) {
          _this16.__updatePreviewUI(recognizedImage);
        }
      }
      if (val === _this16.IN_PROGRESS.OCR_SUCCESS_WITH_SSA) {
        if (_this16.__options.usePreviewUI) {
          _this16.__hidePreviewUI();
        }
      }
      yield _this16.__sleep(1); // for UI update
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
  __getInputDevices() {
    var _this17 = this;
    return _asyncToGenerator(function* () {
      // throw error if navigator.mediaDevices is not supported
      if (!navigator.mediaDevices) {
        throw new Error('navigator.mediaDevices is not supported');
      }
      var devices = yield navigator.mediaDevices.enumerateDevices();
      var camera = [];
      for (var device of devices) {
        if (device.kind === 'videoinput') {
          if (device.getCapabilities) {
            var _cap$facingMode;
            var cap = device.getCapabilities();
            if (cap !== null && cap !== void 0 && (_cap$facingMode = cap.facingMode) !== null && _cap$facingMode !== void 0 && _cap$facingMode.includes(_this17.__facingModeConstraint)) {
              camera.push(cap.deviceId);
            }
          }
        }
      }
      return camera;
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
    var _this18 = this;
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
      if (topUI && !_this18.__options.useTopUI) _this18.__clearCustomUI(topUI);
      if (middleUI && !_this18.__options.useMiddleUI) _this18.__clearCustomUI(middleUI);
      if (bottomUI && !_this18.__options.useBottomUI) _this18.__clearCustomUI(bottomUI);
      if (captureUIWrap) captureUIWrap.remove();
      // capture UI를 미사용일 경우 안의 내용을 삭제
      if (captureUI && !_this18.__options.useCaptureUI) _this18.__clearCustomUI(captureUI);
      if (previewUIWrap) previewUIWrap.remove();
      // preview UI를 미사용일 경우 안의 내용을 삭제
      if (previewUI && !_this18.__options.usePreviewUI) _this18.__clearCustomUI(previewUI);
      if (switchUIWrap) switchUIWrap.remove();
      // switch UI를 미사용일 경우 안의 내용을 삭제
      if (switchUI && !_this18.__options.useManualSwitchToServerMode) _this18.__clearCustomUI(switchUI);
      var rotationDegree = _this18.__getRotationDegree();
      _this18.__isRotated90or270 = [90, 270].includes(rotationDegree);
      var ocrStyle = {
        width: '100%',
        height: '100%'
      };
      _this18.__setStyle(ocr, ocrStyle);
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
        _this18.__setStyle(videoWrap, wrapStyle);
      }
      ocr.appendChild(videoWrap);
      maskBoxWrap = document.createElement('svg');
      maskBoxWrap.setAttribute('data-useb-ocr', 'maskBoxWrap');
      maskBoxWrap.setAttribute('fill', 'none');
      maskBoxWrap.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      _this18.__setStyle(maskBoxWrap, wrapStyle);
      var mask_frame = _this18.__options.maskFrameStyle.base_color + 'ff';
      if (!!_this18.__options.showClipFrame) {
        mask_frame = _this18.__options.maskFrameStyle.clip_frame + '55';
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
      if (_this18.__isRotated90or270) {
        if (_this18.__getMirrorMode()) {
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
        if (_this18.__getMirrorMode()) {
          videoStyle = _objectSpread(_objectSpread({}, videoStyle), {}, {
            '-webkit-transform': mirrorCss,
            '-moz-transform': mirrorCss,
            '-o-transform': mirrorCss,
            '-ms-transform': mirrorCss,
            transform: mirrorCss
          });
        }
      }
      _this18.__setStyle(video, videoStyle);
      videoWrap.appendChild(video);
      guideBoxWrap = document.createElement('div');
      guideBoxWrap.setAttribute('data-useb-ocr', 'guideBoxWrap');
      _this18.__setStyle(guideBoxWrap, wrapStyle);
      ocr.appendChild(guideBoxWrap);
      guideBox = document.createElement('svg');
      guideBox.setAttribute('data-useb-ocr', 'guideBox');
      guideBox.setAttribute('fill', 'none');
      guideBox.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      _this18.__setStyle(guideBox, {
        width: '100%',
        margin: '0 auto',
        position: 'absolute'
      });
      guideBoxWrap.appendChild(guideBox);
      canvas = document.createElement('canvas');
      canvas.setAttribute('data-useb-ocr', 'canvas');
      var canvasStyle = {
        display: _this18.__options.showCanvasPreview ? _this18.__isRotated90or270 ? 'none' : 'display' : 'none',
        width: '25%',
        position: 'absolute',
        left: '0px',
        top: '30px',
        border: 'green 2px solid'
      };
      _this18.__setStyle(canvas, canvasStyle);
      ocr.appendChild(canvas);
      rotationCanvas = document.createElement('canvas');
      rotationCanvas.setAttribute('data-useb-ocr', 'rotationCanvas');
      _this18.__setStyle(rotationCanvas, {
        display: _this18.__options.showCanvasPreview ? _this18.__isRotated90or270 ? 'display' : 'none' : 'none',
        height: '25%',
        position: 'absolute',
        right: '0px',
        top: '30px',
        border: 'blue 2px solid'
      });
      ocr.appendChild(rotationCanvas);
      preventToFreezeVideo = document.createElement('div');
      preventToFreezeVideo.setAttribute('data-useb-ocr', 'preventToFreezeVideo');
      _this18.__setStyle(preventToFreezeVideo, {
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
      _this18.__setStyle(customUIWrap, customUIWrapStyle);
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
      _this18.__setStyle(captureUIWrap, captureUIWrapStyle);
      ocr.appendChild(captureUIWrap);
      if (_this18.__options.useCaptureUI) {
        if (_this18.__isSwitchToServerMode || _this18.__options.useForceCompleteUI) {
          if (!captureUI) {
            captureUI = document.createElement('div');
            captureUI.setAttribute('data-useb-ocr', 'captureUI');
            _this18.__setStyle(captureUI, {
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
          var _this_ = _this18;
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
      if (_this18.__options.usePreviewUI) {
        previewUIWrap = document.createElement('div');
        previewUIWrap.setAttribute('data-useb-ocr', 'previewUIWrap');
        var previewUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
          'flex-direction': 'column',
          display: 'none',
          'background-color': '#000000aa'
        });
        _this18.__setStyle(previewUIWrap, previewUIWrapStyle);
        ocr.appendChild(previewUIWrap);
        if (!previewUI) {
          previewUI = document.createElement('div');
          previewUI.setAttribute('data-useb-ocr', 'previewUI');
        }
        _this18.__setStyle(previewUI, _objectSpread(_objectSpread({}, wrapStyle), {}, {
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
      if (_this18.__options.useManualSwitchToServerMode) {
        switchUIWrap = document.createElement('div');
        switchUIWrap.setAttribute('data-useb-ocr', 'switchUIWrap');
        var switchUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
          'align-items': '',
          'justify-content': '',
          width: '',
          overflow: '',
          'flex-direction': 'column-reverse'
        });
        _this18.__setStyle(switchUIWrap, switchUIWrapStyle);
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
        _this18.__setStyle(switchUI, {
          overflow: 'hidden'
        });
        switchUIWrap.appendChild(switchUI);
        var switchCheckbox = switchUI.getElementsByTagName('input')[0];
        var _this_2 = _this18;
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
      yield _this18.__initStyle();

      // 화면과도 현상 해결
      _this18.__setStyle(ocr, {
        display: ''
      });
      _this18.__ocr = ocr;
      _this18.__canvas = canvas;
      _this18.__rotationCanvas = rotationCanvas;
      _this18.__video = video;
      _this18.__videoWrap = videoWrap;
      _this18.__guideBox = guideBox;
      _this18.__guideBoxWrap = guideBoxWrap;
      _this18.__maskBoxWrap = maskBoxWrap;
      _this18.__preventToFreezeVideo = preventToFreezeVideo;
      _this18.__customUIWrap = customUIWrap;
      _this18.__topUI = topUI;
      _this18.__middleUI = middleUI;
      _this18.__bottomUI = bottomUI;
      _this18.__captureUIWrap = captureUIWrap;
      _this18.__captureUI = captureUI;
      _this18.__captureButton = captureButton;
      _this18.__previewUIWrap = previewUIWrap;
      _this18.__previewUI = previewUI;
      _this18.__previewImage = previewImage;
      _this18.__switchUIWrap = switchUIWrap;
      _this18.__switchUI = switchUI;
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
    var _this19 = this;
    return _asyncToGenerator(function* () {
      // wasm 인식성능 최적화된 해상도
      _this19.__resolutionWidth = 1080;
      _this19.__resolutionHeight = 720;
      _this19.__camSetComplete = false;
      var {
        video,
        canvas,
        rotationCanvas
      } = yield _this19.__setupDomElements();
      var camera = yield _this19.__getInputDevices();
      // console.log('videoDevices :: ', camera)

      _this19.checkUIOrientation();
      var constraintWidth, constraintHeight;
      if (_this19.__options.cameraResolutionCriteria === 'highQuality') {
        // 카메라 해상도 설정 : 화질 우선
        // 1920x1080이 가능한경우 사용 아니면 1280x720 사용
        if (_this19.__uiOrientation === 'portrait') {
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
      } else {
        // 'compatibility'
        // 카메라 해상도 설정 : 호환성 우선
        // 1920x1080이 사용 가능하더라도 1280x720을 사용하도록 고정
        // 사유 : 갤럭시 entry 모델(A시리즈 / Wide 모델 등)에서 1920 x 1080 처리시 비율이 이상해짐(홀쭉이됨)
        // 항상 1280 x 720을 사용하도록 변경
        constraintWidth = {
          ideal: 1280
        };
        constraintHeight = {
          ideal: 720
        };
      }
      var constraints = {
        audio: false,
        video: {
          zoom: {
            ideal: 1
          },
          facingMode: {
            ideal: _this19.__facingModeConstraint
          },
          focusMode: {
            ideal: 'continuous'
          },
          whiteBalanceMode: {
            ideal: 'continuous'
          },
          deviceId: camera.length ? {
            ideal: camera[camera.length - 1]
          } : null,
          width: constraintWidth,
          height: constraintHeight
        }
      };

      // 최초 진입 이어서 videoDeivce 리스트를 가져올 수 없으면,
      // getUserMedia를 임의 호출하여 권한을 받은뒤 다시 가져옴
      if (camera.length === 0) {
        _this19.__stream = yield navigator.mediaDevices.getUserMedia(constraints);
        _this19.stopStream();
        camera = yield _this19.__getInputDevices();
        constraints.video.deviceId = camera.length ? {
          ideal: camera[camera.length - 1]
        } : null;
      }
      try {
        // const dumptrack = ([a, b], track) =>
        //   `${a}${track.kind == 'video' ? 'Camera' : 'Microphone'} (${track.readyState}): ${track.label}${b}`;

        var stream = yield navigator.mediaDevices.getUserMedia(constraints);
        // this.__debug('videoTracks :: ', stream.getVideoTracks());
        var streamSettings = stream.getVideoTracks()[0].getSettings();
        // this.__debug(
        //   'streamCapabilities :: ',
        //   stream.getVideoTracks()[0].getCapabilities()
        // );
        // this.__debug('stream :: ', stream.getVideoTracks()[0].getConstraints());
        // this.__debug('streamSettings :: ', streamSettings);
        _this19.__debug("stream width * height :: ".concat(streamSettings.width, " * ").concat(streamSettings.height));
        _this19.__debug('stream width / height :: ' + streamSettings.width / streamSettings.height);
        _this19.__debug('stream aspectRatio :: ' + streamSettings.aspectRatio);
        [canvas.width, canvas.height] = [_this19.__resolutionWidth, _this19.__resolutionHeight];
        if (_this19.__isRotated90or270) {
          [rotationCanvas.width, rotationCanvas.height] = [_this19.__resolutionHeight, _this19.__resolutionWidth];
        }
        video.srcObject = stream;
        _this19.__stream = stream;
      } catch (e) {
        void 0;
        throw e;
      }
    })();
  }
  __initStyle() {
    var _this20 = this;
    return _asyncToGenerator(function* () {
      void 0;
      var {
        ocr,
        guideBox,
        maskBoxWrap,
        topUI,
        middleUI,
        bottomUI,
        captureUI
      } = detector.getOCRElements();
      _this20.__setStyle(captureUI, {
        display: 'none'
      });

      // 기준정보
      var baseWidth = 400;
      var baseHeight = 260;
      var scannerFrameRatio = baseHeight / baseWidth; // 신분증 비율

      var guideBoxWidth, guideBoxHeight;
      var calcOcrClientWidth = ocr.clientWidth;
      var calcOcrClientHeight = ocr.clientHeight;
      var borderWidth = _this20.__options.frameBorderStyle.width;
      var borderRadius = _this20.__options.frameBorderStyle.radius;
      var guideBoxRatioByWidth = _this20.__guideBoxRatioByWidth;
      var videoRatioByHeight = _this20.__videoRatioByHeight;
      if (_this20.__uiOrientation === 'portrait') {
        // 세로 UI && 세로 비디오로 간주
        // 가로 기준으로 가이드박스 계산
        guideBoxWidth = calcOcrClientWidth * guideBoxRatioByWidth;
        guideBoxHeight = guideBoxWidth * scannerFrameRatio;
      } else {
        // 가로 UI && 가로 비디오로 간주
        // 비디오를 가로 UI의 height 기준으로 줄이고
        // 가로 UI height 기준으로 비디오의 width 계산
        guideBoxHeight = calcOcrClientHeight * videoRatioByHeight;
        guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;
      }
      guideBoxWidth += borderWidth * 2;
      guideBoxHeight += borderWidth * 2;
      var reducedGuideBoxWidth = guideBoxWidth * _this20.__guideBoxReduceRatio;
      var reducedGuideBoxHeight = guideBoxHeight * _this20.__guideBoxReduceRatio;
      if (topUI) {
        _this20.__setStyle(topUI, {
          'padding-bottom': '10px',
          height: (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          display: 'flex',
          'flex-direction': 'column-reverse'
        });
      }
      if (middleUI) {
        _this20.__setStyle(middleUI, {
          width: reducedGuideBoxWidth - borderWidth * 2 + 'px',
          height: reducedGuideBoxHeight - borderWidth * 2 + 'px',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          padding: '10px'
        });
      }
      if (bottomUI) {
        _this20.__setStyle(bottomUI, {
          'padding-top': '10px',
          height: (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          display: 'flex',
          'flex-direction': 'column'
        });
      }
      var videoInnerGap = 2; // 미세하게 maskBoxInner보다 guideBox가 작은것 보정
      _this20.__setStyle(guideBox, {
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
    })();
  }
  __adjustStyle() {
    var _this21 = this;
    return _asyncToGenerator(function* () {
      var __calcGuideBoxCriteria = (a, b) => {
        if (_this21.__options.calcGuideBoxCriteria === 'cameraResolution') {
          return Math.min(a, b);
        } else if (_this21.__options.calcGuideBoxCriteria === 'ocrViewSize') {
          return Math.max(a, b);
        } else {
          return Math.min(a, b); // default : cameraResolution
        }
      };

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
      _this21.__setStyle(captureUI, {
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
      var calcVideoOrientation = _this21.__videoOrientation;
      if (calcVideoWidth === 0 || calcVideoHeight === 0 || calcVideoClientWidth === 0 || calcVideoClientHeight === 0) {
        return;
      }
      var borderWidth = _this21.__options.frameBorderStyle.width;
      var borderRadius = _this21.__options.frameBorderStyle.radius;
      if (_this21.__isRotated90or270) {
        [calcVideoWidth, calcVideoHeight] = [calcVideoHeight, calcVideoWidth];
        [calcVideoClientWidth, calcVideoClientHeight] = [calcVideoClientHeight, calcVideoClientWidth];
        calcVideoOrientation = _this21.__videoOrientation === 'portrait' ? 'landscape' : 'portrait';
      }
      var newVideoWidth = calcVideoClientWidth;
      var newVideoHeight = calcVideoClientHeight;
      var guideBoxRatioByWidth = _this21.__guideBoxRatioByWidth;
      var videoRatioByHeight = _this21.__videoRatioByHeight;
      var newVideoRatioByWidth = calcVideoClientHeight / calcVideoClientWidth;
      var newVideoRatioByHeight = calcVideoClientWidth / calcVideoClientHeight;
      if (_this21.__uiOrientation === 'portrait') {
        // 세로 UI
        _this21.__setStyle(captureUIWrap, {
          'justify-content': 'center',
          'align-items': 'flex-end'
        });
        // video 가로 기준 100% 유지 (변경없음)
        if (calcVideoOrientation === _this21.__uiOrientation) {
          // 카메라도 세로
          // 세로 UI && 세로 비디오
          // 가로 기준으로 가이드박스 계산
          guideBoxWidth = __calcGuideBoxCriteria(calcOcrClientWidth, calcVideoWidth) * guideBoxRatioByWidth;
          guideBoxHeight = guideBoxWidth * scannerFrameRatio;

          // 가이드 박스 가로 기준으로 비디오 확대
          newVideoWidth = guideBoxWidth;
          newVideoHeight = newVideoWidth * newVideoRatioByWidth;
        } else {
          // 카메라는 가로
          // 세로 UI && 가로 비디오
          // 가이드 박스를 비디오 세로 길이에 맞춤
          guideBoxHeight = __calcGuideBoxCriteria(calcVideoClientHeight, calcVideoHeight);
          guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;
        }
      } else {
        // 가로 UI
        _this21.__setStyle(captureUIWrap, {
          'justify-content': 'end',
          'align-items': 'center'
        });
        if (calcVideoOrientation === _this21.__uiOrientation) {
          // 가로 UI && 가로 비디오
          // 비디오를 가로 UI의 height 기준으로 줄이고
          // 가로 UI height 기준으로 비디오의 width 계산

          // 가이드박스는 세로 기준으로 맞춤
          guideBoxHeight = __calcGuideBoxCriteria(calcOcrClientHeight, calcVideoHeight) * videoRatioByHeight;
          guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;

          // 비디오를 세로 기준으로 다시 맞춤
          newVideoHeight = guideBoxHeight;
          newVideoWidth = newVideoHeight * newVideoRatioByHeight;

          // 가이드박스의 가로 크기가 가로 UI width * ratio 값보다 크면,
          if (guideBoxWidth > __calcGuideBoxCriteria(calcOcrClientWidth, calcVideoWidth) * guideBoxRatioByWidth) {
            // 계산 방식을 바꾼다 (사유 : 거의 정사각형에 가까운 경우 가이드 박스 가로가 꽉차게 됨.)
            guideBoxWidth = __calcGuideBoxCriteria(calcOcrClientWidth, calcVideoWidth) * guideBoxRatioByWidth;
            guideBoxHeight = guideBoxWidth * scannerFrameRatio;

            // 가이드 박스 가로 기준으로 비디오 확대
            newVideoWidth = guideBoxWidth;
            newVideoHeight = newVideoWidth * newVideoRatioByWidth;
          }
        } else {
          // 가로 UI && 세로 비디오
          // 가로 기준으로 가이드박스 계산

          // 가이드박스의 height 크기를 UI의 height 기준에 맞춤
          guideBoxHeight = __calcGuideBoxCriteria(calcOcrClientHeight, calcVideoHeight) * videoRatioByHeight;
          guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;

          // 가이드박스의 가로 크기가 가로 UI width * ratio 값보다 크면,
          if (guideBoxWidth > __calcGuideBoxCriteria(calcOcrClientWidth, calcVideoWidth) * guideBoxRatioByWidth) {
            // 계산 방식을 바꾼다 (사유 : 거의 정사각형에 가까운 경우 가이드 박스 가로가 꽉차게 됨.)
            guideBoxWidth = __calcGuideBoxCriteria(calcOcrClientWidth, calcVideoWidth) * guideBoxRatioByWidth;
            guideBoxHeight = guideBoxWidth * scannerFrameRatio;
          }

          // 가이드 박스 가로 기준으로 비디오 축소
          newVideoWidth = guideBoxWidth;
          newVideoHeight = newVideoWidth * newVideoRatioByWidth;
        }
      }

      // calcGuideBoxCriteria(카메라 해상도 설정 기준)가 ocrViewSize(화면 크기) 기준일때
      if (_this21.__options.calcGuideBoxCriteria === 'ocrViewSize') {
        // guideBoxHeight 이 calcOcrClientHeight 보다 큰경우(가이드박스가 화면을 넘어가는 경우) 다시 계산
        if (guideBoxHeight > calcOcrClientHeight) {
          guideBoxHeight = Math.min(calcOcrClientHeight, calcVideoHeight) * videoRatioByHeight;
          guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;
          newVideoWidth = guideBoxWidth;
          newVideoHeight = newVideoWidth * newVideoRatioByWidth;
        }

        // guideBoxHeight 이 calcOcrClientHeight 보다 큰경우(가이드박스가 화면을 넘어가는 경우) 다시 계산
        if (guideBoxWidth > calcOcrClientWidth) {
          guideBoxWidth = Math.min(calcOcrClientWidth, calcVideoWidth) * guideBoxRatioByWidth;
          guideBoxHeight = guideBoxWidth * scannerFrameRatio;
          newVideoWidth = guideBoxWidth;
          newVideoHeight = newVideoWidth * newVideoRatioByWidth;
        }
      }
      _this21.__cropImageSizeWidth = Math.min(guideBoxWidth, newVideoWidth);
      _this21.__cropImageSizeHeight = Math.min(guideBoxHeight, newVideoHeight);
      if (_this21.__isRotated90or270) {
        [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
      }
      guideBoxWidth += borderWidth * 2;
      guideBoxHeight += borderWidth * 2;
      var reducedGuideBoxWidth = guideBoxWidth * _this21.__guideBoxReduceRatio;
      var reducedGuideBoxHeight = guideBoxHeight * _this21.__guideBoxReduceRatio;
      if (topUI) {
        _this21.__setStyle(topUI, {
          'padding-bottom': '10px',
          height: (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          display: 'flex',
          'flex-direction': 'column-reverse'
        });
      }
      if (middleUI) {
        _this21.__setStyle(middleUI, {
          width: reducedGuideBoxWidth - borderWidth * 2 + 'px',
          height: reducedGuideBoxHeight - borderWidth * 2 + 'px',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          padding: '10px'
        });
      }
      if (bottomUI) {
        _this21.__setStyle(bottomUI, {
          'padding-top': '10px',
          height: (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
          display: 'flex',
          'flex-direction': 'column'
        });
      }
      _this21.__setStyle(video, {
        width: newVideoWidth + 'px'
      });
      _this21.__setStyle(video, {
        height: newVideoHeight + 'px'
      });
      var videoInnerGap = 2; // 미세하게 maskBoxInner보다 guideBox가 작은것 보정
      _this21.__setStyle(guideBox, {
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
      if (_this21.__options.useCaptureUI) {
        _this21.__setStyle(captureUI, {
          display: ''
        });
        if (_this21.__uiOrientation === 'portrait' && bottomUI && captureUI) {
          var calcSumOfHeightBottomUIChildNodes = _this21.__calcSumOfHeightChildNodes(bottomUI);
          var calcCaptureButtonHeight = captureButton.querySelector('svg').getAttribute('height');
          calcCaptureButtonHeight = calcCaptureButtonHeight === 0 ? 80 : calcCaptureButtonHeight;
          var captureUIPaddingBottom = bottomUI.clientHeight;
          captureUIPaddingBottom -= isNaN(parseInt(bottomUI.style.paddingTop)) ? 0 : parseInt(bottomUI.style.paddingTop);
          captureUIPaddingBottom -= calcSumOfHeightBottomUIChildNodes;
          captureUIPaddingBottom -= calcCaptureButtonHeight;
          var baseline = calcOcrClientHeight - (calcOcrClientHeight / 2 + guideBoxHeight / 2);
          if (captureUIPaddingBottom > 0 && captureUIPaddingBottom < baseline) {
            _this21.__setStyle(captureUI, {
              'padding-right': '',
              'padding-bottom': captureUIPaddingBottom + 'px'
            });
          }
        } else {
          _this21.__setStyle(captureUI, {
            'padding-right': '10px',
            'padding-bottom': ''
          });
        }
      }
      yield _this21.__changeStage(_this21.__inProgressStep, true);
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
    var _this22 = this;
    return _asyncToGenerator(function* () {
      void 0;
      if (_this22.__resourcesLoaded) {
        void 0;
        return;
      }
      _this22.__isSupportSimd = yield simd();
      var envInfo = '';
      envInfo += "os : ".concat(_this22.__deviceInfo.os, "\n");
      envInfo += "osSimple : ".concat(_this22.__deviceInfo.osSimple, "\n");
      envInfo += "isSupportWasm: ".concat(_this22.__isSupportWasm, "\n");
      envInfo += "simd(wasm-feature-detect) : ".concat(_this22.__isSupportSimd, "\n");
      if (_this22.__deviceInfo.osSimple === 'IOS' || _this22.__deviceInfo.osSimple === 'MAC') {
        _this22.__isSupportSimd = false;
      }
      envInfo += "isSupportSimd(final) : ".concat(_this22.__isSupportSimd, "\n");
      envInfo += "UserAgent : ".concat(navigator.userAgent, "\n");
      void 0;
      _this22.__debug(envInfo);
      window.usebOCREnvInfo = envInfo;
      var sdkSupportEnv = 'quram';
      if (_this22.__isSupportSimd) {
        void 0;
        sdkSupportEnv += '_simd.js';
      } else {
        void 0;
        sdkSupportEnv += '.js';
      }
      void 0;
      window.usebOCREnvInfo = envInfo;
      void 0;
      var url = new URL(sdkSupportEnv, _this22.__options.resourceBaseUrl);
      var src = yield fetch(url.href).then(res => res.text()).then(text => {
        var regex = /(.*) = Module.cwrap/gm;
        var source = text.replace(regex, 'Module.$1 = Module.cwrap');

        // data(model)
        source = source.replace(/^\(function\(\) \{/m, 'var createModelData = async function() {\n' + ' return new Promise(async function (resolve, reject) {\n');
        source = source.replace('   console.error("package error:", error);', '   reject();\n' + '   console.error("package error:", error);');
        source = source.replace('  }, handleError)', '  resolve();\n' + '  }, handleError)');
        source = source.replace(/^\}\)\(\);/m, '\n })\n' + '};');

        // wasm
        source = source.replace('quram.wasm', new URL('quram.wasm', _this22.__options.resourceBaseUrl).href);
        source = source.replace(/REMOTE_PACKAGE_BASE = ['"]quram\.data["']/gm, "REMOTE_PACKAGE_BASE = \"".concat(new URL('quram.data', _this22.__options.resourceBaseUrl).href, "\""));
        source = source.replace('function createWasm', 'async function createWasm');
        source = source.replace('instantiateAsync();', 'await instantiateAsync();');

        // wasm and data(model) file 병렬로 fetch 하기 위해
        source = source.replace('var asm = createWasm();', 'console.log("create wasm and data - start")\n' + 'await (async function() {\n' + '  return new Promise(function(resolve) {\n' + '    var isCreatedWasm = false;\n' + '    var isCreatedData = false;\n' + '    createWasm().then(() => {\n' + '      isCreatedWasm = true;\n' + '      if (isCreatedData) { resolve(); }\n' + '    });\n' + '    createModelData().then(() => {\n' + '      isCreatedData = true;\n' + '      if (isCreatedWasm) { resolve(); }\n' + '    })\n' + '  });\n' + '})();\n' + 'console.log("create wasm and data - end")');
        return source;
      });
      src = "\n    (async function() {\n      ".concat(src, "\n      Module.lengthBytesUTF8 = lengthBytesUTF8\n      Module.stringToUTF8 = stringToUTF8\n      return Module\n    })()\n        ");
      _this22.__OCREngine = yield eval(src);
      _this22.__OCREngine.onRuntimeInitialized = /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator(function* (_) {
          void 0;
        });
        return function (_x3) {
          return _ref9.apply(this, arguments);
        };
      }();
      yield _this22.__OCREngine.onRuntimeInitialized();
      _this22.__resourcesLoaded = true;
      void 0;
    })();
  }
  __startScanWasmImpl() {
    var _this23 = this;
    return new Promise((resolve, reject) => {
      this.__detected = false;
      this.setIgnoreComplete(false);
      this.__blurCaptureButton();
      this.__address = 0;
      this.__pageEnd = false;
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
            if (!_this23.__OCREngine['asm']) return;

            // TODO : 설정할수 있게 변경  default 값도 제공
            var [resolution_w, resolution_h] = [_this23.__resolutionWidth, _this23.__resolutionHeight];
            var {
              video
            } = detector.getOCRElements();
            if (resolution_w === 0 || resolution_h === 0) return;
            if (_this23.__detected) {
              yield _this23.__sleep(100);
              return;
            }
            // console.log('address before ---------', address);
            if (_this23.__address === 0 && !_this23.__pageEnd && (yield _this23.__isVideoResolutionCompatible(video))) {
              [_this23.__address, _this23.__destroyScannerCallback] = _this23.__getScannerAddress(_this23.__ocrType);
            }
            if (!_this23.__address || _this23.__pageEnd) {
              yield _this23.__sleep(100);
              return;
            }
            // console.log('address after ---------', address);

            if (_this23.__ocrStatus < _this23.OCR_STATUS.OCR_SUCCESS) {
              // OCR 완료 이전 상태

              // card not detected
              [isDetectedCard, imgData, imgDataUrl] = yield _this23.__isCardboxDetected(_this23.__address, 0);
              if (!isDetectedCard) {
                if (_this23.__inProgressStep !== _this23.IN_PROGRESS.READY) {
                  yield _this23.__changeStage(_this23.IN_PROGRESS.CARD_DETECT_FAILED);
                }
                if (_this23.__isClickedCaptureButton()) {
                  yield _this23.__changeStage(_this23.IN_PROGRESS.MANUAL_CAPTURE_FAILED, false, imgDataUrl);
                  _this23.__blurCaptureButton();
                  _this23.setIgnoreComplete(false); // 필요한가?
                }

                return;
              }

              // card is detected
              yield _this23.__changeStage(_this23.IN_PROGRESS.CARD_DETECT_SUCCESS);

              // ssa retry 설정이 되어 있으거나, 수동촬영UI를 사용하는 경우, card detect 성공시 이미지 저장
              _this23.__enqueueDetectedCardQueue(imgData, imgDataUrl);
              if (_this23.__isClickedCaptureButton()) {
                _this23.setIgnoreComplete(true);
                yield _this23.__changeStage(_this23.IN_PROGRESS.MANUAL_CAPTURE_SUCCESS, false, imgDataUrl);
              }
              [ocrResult, imgDataUrl, maskImage, faceImage] = yield _this23.__startRecognition(_this23.__address, _this23.__ocrType, _this23.__ssaMode, _this23.__isClickedCaptureButton(), imgData, imgDataUrl);

              // if (this.__isClickedCaptureButton()) {
              //   this.__blurCaptureButton();
              //   this.setIgnoreComplete(false);        // 필요한가?
              // }
            }

            if (_this23.__ocrStatus >= _this23.OCR_STATUS.OCR_SUCCESS) {
              // ocr 완료 이후 상태

              // failure case
              if (ocrResult === false) {
                throw new Error("OCR Status is ".concat(_this23.__ocrStatus, ", but ocrResult is false")); // prettier-ignore
              }

              // success case
              _this23.__setStyle(video, {
                display: 'none'
              }); // OCR 완료 시점에 camera preview off

              if (_this23.__ssaMode) {
                void 0;
                // 최초 시도
                ssaResult = yield _this23.__startTruth(_this23.__ocrType, _this23.__address); // prettier-ignore
                if (ssaResult === null) throw new Error('[ERR] SSA MODE is true. but, ssaResult is null'); // prettier-ignore

                ssaResultList.push(ssaResult);
                if (_this23.__options.ssaMaxRetryCount > 0) {
                  var retryStartDate = new Date();
                  var FAKE = _this23.__options.ssaRetryType === 'FAKE';
                  var REAL = _this23.__options.ssaRetryType === 'REAL';
                  var ENSEMBLE = _this23.__options.ssaRetryType === 'ENSEMBLE';
                  var isCompleted = false; // 비동기 for 문 때문에 break가 안걸리는 이슈로 넣음
                  var _loop = function* _loop(item) {
                    if (isCompleted) {
                      void 0; // prettier-ignore
                      return "break";
                    }
                    // prettier-ignore
                    if (_this23.__ssaRetryCount === _this23.__options.ssaMaxRetryCount) {
                      void 0;
                      return "break";
                    }
                    var execute = /*#__PURE__*/function () {
                      var _ref11 = _asyncToGenerator(function* () {
                        _this23.__ssaRetryCount++;
                        void 0; // prettier-ignore
                        ssaResult = yield _this23.__startTruthRetry(_this23.__ocrType, _this23.__address, item); // prettier-ignore
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
                  for (var item of _this23.__detectedCardQueue) {
                    var _ret = yield* _loop(item);
                    if (_ret === "break") break;
                  }
                  var retryWorkingTime = new Date() - retryStartDate;
                  void 0; // prettier-ignore
                } else {
                  void 0;
                }
              }
              if (_this23.__options.useMaskInfo) {
                maskInfo = _this23.__getMaskInfo(_this23.__address);
              }
              void 0;
              var {
                legacyFormat,
                newFormat
              } = usebOCRWASMParser.parseOcrResult(_this23.__ocrType, _this23.__ssaMode, ocrResult, ssaResult, _this23.__ssaRetryCount, ssaResultList, _this23.__options.ssaRetryType, _this23.__options.ssaRetryPivot);
              var review_result = {
                ocr_type: _this23.__ocrType,
                ocr_result: newFormat,
                ocr_origin_image: imgDataUrl,
                ocr_masking_image: maskImage,
                ocr_face_image: faceImage,
                maskInfo: maskInfo,
                ssa_mode: _this23.__ssaMode
              };
              yield _this23.__compressImages(review_result, imgDataUrl, maskImage, faceImage);
              if (_this23.__options.useEncryptMode && _this23.__isSupportWasm) {
                var excludeList = ['complete', 'result_scan_type', 'color_point', 'found_face', 'specular_ratio', 'start_time', 'end_time', 'fd_confidence', 'id_truth', 'id_truth_retry_count'];
                // prettier-ignore
                review_result.encrypted = {
                  ocr_result: _.toPairs(_.omit(review_result.ocr_result, excludeList)).reduce((acc, _ref12) => {
                    var [key, value] = _ref12;
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
              _this23.__detected = true;
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
            yield _this23.__onFailureProcess('WA001', e, errorMessage);
            _this23.__closeCamera();
            _this23.__detected = true;
            reject();
            // }
          } finally {
            if (_this23.__recovered) {
              _this23.__recovered = false;
              return;
            }
            if (!_this23.__detected) {
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

  __compressImages(review_result, imgDataUrl, maskImage, faceImage, constantNumber) {
    var _this24 = this;
    return _asyncToGenerator(function* () {
      if (_this24.__options.useCompressImage) {
        var resizeRatio = _this24.__cropImageSizeHeight / _this24.__cropImageSizeWidth;
        var defaultOptions = {
          maxWidth: _this24.__options.useCompressImageMaxWidth,
          maxHeight: _this24.__options.useCompressImageMaxWidth * resizeRatio,
          convertSize: _this24.__options.useCompressImageMaxVolume,
          targetCompressVolume: _this24.__options.useCompressImageMaxVolume // custom option
        };

        review_result.ocr_origin_image = yield _this24.__compreseBase64Image(imgDataUrl, defaultOptions, constantNumber);

        // masking 이미지는 resize 하면, mask 좌표가 어긋나므로 리사이즈 안하고 압축만 진행
        var maskingImageOptions = {
          quality: defaultOptions.quality,
          targetCompressVolume: defaultOptions.targetCompressVolume
        };
        review_result.ocr_masking_image = yield _this24.__compreseBase64Image(maskImage, maskingImageOptions, constantNumber);
        review_result.ocr_face_image = yield _this24.__compreseBase64Image(faceImage, defaultOptions, constantNumber);
      }
    })();
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
    var _this25 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* (resolve, reject) {
        try {
          var baseUrl = _this25.__options.ocrServerBaseUrl;
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
          var apiToken = yield _this25.__requestGetAPIToken();
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
    var _this26 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* (resolve, reject) {
        try {
          _this26.__blurCaptureButton();
          var ocrResult = null,
            ssaResult = null,
            ssaResultList = [];
          var __onClickCaptureButton = /*#__PURE__*/function () {
            var _ref15 = _asyncToGenerator(function* () {
              // 캔버스에서 이미지를 가져옴
              var [, imgDataUrl] = yield _this26.__cropImageFromVideo();
              if (1 === true) {
                // server ocr 실패 (발생 가능성 없음)
              } else {
                // server ocr 성공
                yield _this26.__changeStage(_this26.IN_PROGRESS.MANUAL_CAPTURE_SUCCESS, false, imgDataUrl);
                try {
                  ocrResult = yield _this26.__requestServerOCR(_this26.__ocrType, _this26.__ssaMode, imgDataUrl);

                  // failure case
                  if (ocrResult === false) {
                    yield _this26.__changeStage(_this26.IN_PROGRESS.OCR_FAILED);
                  }
                } catch (e) {
                  throw new Error("Server OCR is failed");
                }

                // ssa 시도?

                // success case
                var {
                  video
                } = detector.getOCRElements();
                _this26.__setStyle(video, {
                  display: 'none'
                }); // OCR 완료 시점에 camera preview off

                void 0;
                var {
                  legacyFormat,
                  newFormat,
                  base64ImageResult,
                  maskInfo
                } = usebOCRAPIParser.parseOcrResult(_this26.__ocrType, _this26.__ssaMode, ocrResult);
                var review_result = {
                  ocr_type: _this26.__ocrType,
                  ocr_result: newFormat,
                  ocr_origin_image: imgDataUrl,
                  ocr_masking_image: base64ImageResult === null || base64ImageResult === void 0 ? void 0 : base64ImageResult.ocr_masking_image,
                  ocr_face_image: base64ImageResult === null || base64ImageResult === void 0 ? void 0 : base64ImageResult.ocr_face_image,
                  maskInfo,
                  ssa_mode: _this26.__ssaMode
                };
                yield _this26.__compressImages(review_result, imgDataUrl, base64ImageResult === null || base64ImageResult === void 0 ? void 0 : base64ImageResult.ocr_masking_image, base64ImageResult === null || base64ImageResult === void 0 ? void 0 : base64ImageResult.ocr_face_image, 0.0);
                if (_this26.__options.useEncryptMode && _this26.__isSupportWasm) {
                  var excludeList = ['complete', 'result_scan_type', 'color_point', 'found_face', 'specular_ratio', 'start_time', 'end_time', 'fd_confidence', 'id_truth', 'id_truth_retry_count'];
                  // prettier-ignore
                  review_result.encrypted = {
                    ocr_result: _.toPairs(_.omit(review_result.ocr_result, excludeList)).reduce((acc, _ref16) => {
                      var [key, value] = _ref16;
                      acc[key] = _this26.__encryptScanResult(value);
                      return acc;
                    }, {}),
                    ocr_origin_image: _this26.__encryptScanResult(review_result.ocr_origin_image),
                    ocr_masking_image: _this26.__encryptScanResult(review_result.ocr_masking_image),
                    ocr_face_image: _this26.__encryptScanResult(review_result.ocr_face_image)
                  };
                }
                if (_this26.__options.useLegacyFormat) {
                  review_result.ocr_data = legacyFormat;
                }
                yield _this26.__onSuccessProcess(review_result);
                _this26.__closeCamera();
                resolve();
              }
            });
            return function __onClickCaptureButton() {
              return _ref15.apply(this, arguments);
            };
          }();
          _this26.__captureButton.addEventListener('click', __onClickCaptureButton);
        } catch (e) {
          var errorMessage = 'Server OCR Error';
          if (e.message) {
            errorMessage += ': ' + e.message;
          }
          void 0;
          yield _this26.__onFailureProcess('QS001', e, errorMessage); // QURAM Server OCR 에러
          _this26.__closeCamera();
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
    var _this27 = this;
    return _asyncToGenerator(function* () {
      // 인식 성공 스캔 루프 종료
      if (review_result.ssa_mode) {
        yield _this27.__changeStage(_this27.IN_PROGRESS.OCR_SUCCESS_WITH_SSA);
      } else {
        yield _this27.__changeStage(_this27.IN_PROGRESS.OCR_SUCCESS);
      }
      var result = {
        api_response: {
          result_code: 'N100',
          result_message: 'OK.'
        },
        result: 'success',
        review_result: review_result
      };
      if (_this27.__onSuccess) {
        _this27.__onSuccess(result);
        _this27.__onSuccess = null;
      } else {
        void 0;
      }
    })();
  }
  __onFailureProcess(resultCode, e, errorMessage) {
    var _this28 = this;
    return _asyncToGenerator(function* () {
      yield _this28.__changeStage(_this28.IN_PROGRESS.OCR_FAILED);
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
          ocr_type: _this28.__ocrType,
          error_detail: errorDetail
        }
      };
      if (_this28.__onFailure) {
        _this28.__onFailure(result);
        _this28.__onFailure = null;
      } else {
        void 0;
      }
    })();
  }
  __preloadingWasm() {
    var _this29 = this;
    return _asyncToGenerator(function* () {
      var preloadingStatus = _this29.getPreloadingStatus();
      if (!_this29.isPreloaded() && preloadingStatus === _this29.PRELOADING_STATUS.NOT_STARTED) {
        void 0;
        yield _this29.preloading();
      } else {
        if (preloadingStatus === _this29.PRELOADING_STATUS.STARTED) {
          void 0;
          yield _this29.__waitPreloaded();
        } else if (preloadingStatus === _this29.PRELOADING_STATUS.DONE) {
          void 0;
        } else {
          throw new Error("abnormally preloading status, preloaded: ".concat(_this29.isPreloaded(), " / preloadingStatus: ").concat(_this29.getPreloadingStatus()));
        }
      }
    })();
  }
  __startScanWasm() {
    var _this30 = this;
    return _asyncToGenerator(function* () {
      _this30.__debug('wasm_mode');
      _this30.cleanup();
      yield _this30.__proceedCameraPermission();
      yield _this30.__startScanWasmImpl();
      void 0;
    })();
  }
  __startScanServer() {
    var _this31 = this;
    return _asyncToGenerator(function* () {
      _this31.__debug('server_mode');
      _this31.cleanup();
      _this31.__options.useCaptureUI = true;
      yield _this31.__proceedCameraPermission();
      yield _this31.__startScanServerImpl();
      void 0;
    })();
  }
  __recoveryScan() {
    var _this32 = this;
    return _asyncToGenerator(function* () {
      void 0;
      _this32.__resourcesLoaded = false;
      _this32.stopScan();
      yield _this32.__startScanWasm();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJ1c2ViT0NSV0FTTVBhcnNlciIsInVzZWJPQ1JBUElQYXJzZXIiLCJpc1N1cHBvcnRXYXNtIiwibWVhc3VyZSIsInNpbWQiLCJ0aHJlYWRzIiwiSW1hZ2VVdGlsIiwiaW5zdGFuY2UiLCJVc2VCT0NSIiwiY29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydHkiLCJOT05FIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVF9TVUNDRVNTIiwiQ0FSRF9ERVRFQ1RfRkFJTEVEIiwiTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUyIsIk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJXQVJQSU5HIiwiQ1JPUFBJTkciLCJGQUxTRSIsIlRSVUUiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZUVuY3J5cHRNb2RlIiwidXNlTGVnYWN5Rm9ybWF0IiwidXNlTWFza0luZm8iLCJ1c2VGYWNlSW1hZ2UiLCJ1c2VJbWFnZVdhcnBpbmciLCJ1c2VDb21wcmVzc0ltYWdlIiwidXNlQ29tcHJlc3NJbWFnZU1heFdpZHRoIiwidXNlQ29tcHJlc3NJbWFnZU1heFZvbHVtZSIsInVzZVRvcFVJIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUkiLCJ1c2VNaWRkbGVVSVRleHRNc2ciLCJ1c2VCb3R0b21VSSIsInVzZUJvdHRvbVVJVGV4dE1zZyIsInVzZVByZXZpZXdVSSIsInVzZUNhcHR1cmVVSSIsImZyYW1lQm9yZGVyU3R5bGUiLCJ3aWR0aCIsInJhZGl1cyIsInN0eWxlIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3Rfc3VjY2VzcyIsImRldGVjdF9mYWlsZWQiLCJtYW51YWxfY2FwdHVyZV9zdWNjZXNzIiwibWFudWFsX2NhcHR1cmVfZmFpbGVkIiwicmVjb2duaXplZCIsInJlY29nbml6ZWRfd2l0aF9zc2EiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwib2NyX2ZhaWxlZCIsInVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlIiwibWFza0ZyYW1lU3R5bGUiLCJjbGlwX2ZyYW1lIiwiYmFzZV9jb2xvciIsInVzZUF1dG9Td2l0Y2hUb1NlcnZlck1vZGUiLCJ1c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUiLCJzd2l0Y2hUb1NlcnZlclRocmVzaG9sZCIsInVzZUZvcmNlQ29tcGxldGVVSSIsImNhcHR1cmVCdXR0b25TdHlsZSIsInN0cm9rZV9jb2xvciIsInJlc291cmNlQmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiZGV2aWNlTGFiZWwiLCJ2aWRlb1RhcmdldElkIiwicm90YXRpb25EZWdyZWUiLCJtaXJyb3JNb2RlIiwiY2FtZXJhUmVzb2x1dGlvbkNyaXRlcmlhIiwiY2FsY0d1aWRlQm94Q3JpdGVyaWEiLCJzc2FSZXRyeVR5cGUiLCJzc2FSZXRyeVBpdm90Iiwic3NhTWF4UmV0cnlDb3VudCIsInByZWxvYWRpbmciLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiaXNQcmVsb2FkZWQiLCJfX3ByZWxvYWRpbmdTdGF0dXMiLCJfX2xvYWRSZXNvdXJjZXMiLCJfX3ByZWxvYWRlZCIsImlzSW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVkIiwiZ2V0UHJlbG9hZGluZ1N0YXR1cyIsImdldE9DUkVuZ2luZSIsIl9fT0NSRW5naW5lIiwiaW5pdCIsInNldHRpbmdzIiwibGljZW5zZUtleSIsIkVycm9yIiwiX19saWNlbnNlIiwibWVyZ2VkT3B0aW9ucyIsIl8iLCJtZXJnZSIsIl9fb3B0aW9ucyIsInNldE9wdGlvbiIsIl9fd2luZG93RXZlbnRCaW5kIiwiX19kZXZpY2VJbmZvIiwiZ2V0T3NWZXJzaW9uIiwiX19pc1N1cHBvcnRXYXNtIiwiZ2V0T3B0aW9uIiwiZ2V0T2NyVHlwZSIsInR5cGUiLCJfX29jclR5cGVOdW1iZXJUb1N0cmluZyIsImdldCIsImdldE9jclR5cGVOdW1iZXIiLCJzdHJpbmciLCJfX29jclN0cmluZ1RvVHlwZU51bWJlciIsImdldFVJT3JpZW50YXRpb24iLCJfX3VpT3JpZW50YXRpb24iLCJnZXRWaWRlb09yaWVudGF0aW9uIiwiX192aWRlb09yaWVudGF0aW9uIiwiY2hlY2tTd2l0Y2hUb1NlcnZlck1vZGUiLCJfdGhpczIiLCJfX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlIiwibGF0ZW5jeVBlcjEwMG1zIiwibWVhc3VyZVJlcG9ydCIsIl9fZGVidWciLCJzdGFydE9DUiIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIl9hcmd1bWVudHMiLCJhcmd1bWVudHMiLCJfdGhpczMiLCJvbkluUHJvZ3Jlc3NDaGFuZ2UiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfX29jclR5cGUiLCJfX3NzYU1vZGUiLCJpbmRleE9mIiwiX19vblN1Y2Nlc3MiLCJfX29uRmFpbHVyZSIsIl9fb25JblByb2dyZXNzQ2hhbmdlIiwiX190b3BVSSIsImdldE9DUkVsZW1lbnRzIiwidG9wVUkiLCJfX21pZGRsZVVJIiwibWlkZGxlVUkiLCJfX2JvdHRvbVVJIiwiYm90dG9tVUkiLCJfX2NoYW5nZVN0YWdlIiwiX19wcmVwcm9jZXNzIiwiX19wcmVsb2FkaW5nV2FzbSIsIl9fc3RhcnRTY2FuU2VydmVyIiwiX19zdGFydFNjYW5XYXNtIiwiZSIsInN0b3BPQ1IiLCJjbGVhbnVwIiwiX19jbG9zZUNhbWVyYSIsInNldElnbm9yZUNvbXBsZXRlIiwidmFsIiwiZW5jcnlwdCIsInBsYWluU3RyIiwiX19lbmNyeXB0U2NhblJlc3VsdCIsInJlc3RhcnRPQ1IiLCJvY3JUeXBlIiwiX2FyZ3VtZW50czIiLCJfdGhpczQiLCJpc1N3aXRjaE1vZGUiLCJfX3dhaXRQcmVsb2FkZWQiLCJfdGhpczUiLCJ3YWl0aW5nUmV0cnlDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hlY2siLCJzZXRUaW1lb3V0IiwiY29udmVydFR5cGVUb051bWJlciIsIm9wdGlvbiIsImlzTmFOIiwicGFyc2VJbnQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiX19wYWdlRW5kIiwiaGFuZGxlUmVzaXplIiwiX3JlZjIiLCJfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiYXBwbHkiLCJfX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIm1zZyIsIl9fc2xlZXAiLCJtcyIsIl9fYmxvYlRvQmFzZTY0IiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX19iYXNlNjR0b0Jsb2IiLCJiYXNlNjQiLCJieXRlU3RyaW5nIiwiYXRvYiIsInNwbGl0IiwibWltZVN0cmluZyIsImFiIiwiQXJyYXlCdWZmZXIiLCJpYSIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsIkJsb2IiLCJfX2NvbXByZXNlQmFzZTY0SW1hZ2UiLCJvcHRpb25zIiwiY29uc3RhbnROdW1iZXIiLCJfdGhpczYiLCJibG9iRmlsZSIsImNvbXByZXNzZWQiLCJjb21wcmVzc0ltYWdlIiwiY29tcHJlc3Npb25SYXRpbyIsIk1hdGgiLCJyb3VuZCIsInNpemUiLCJfX2dldFN0cmluZ09uV2FzbUhlYXAiLCJsZW5ndGhCeXRlcyIsImxlbmd0aEJ5dGVzVVRGOCIsIl9fc3RyaW5nT25XYXNtSGVhcCIsIl9tYWxsb2MiLCJzdHJpbmdUb1VURjgiLCJvY3JSZXN1bHQiLCJzdHJpbmdPbldhc21IZWFwIiwidG9TdHJpbmciLCJqc29uU3RyaW5nIiwiZW5jcnlwdFJlc3VsdCIsIl9mcmVlIiwiX19zZXRWaWRlb1Jlc29sdXRpb24iLCJ2aWRlb0VsZW1lbnQiLCJfdGhpczciLCJpc1N1cHBvcnRlZFJlc29sdXRpb24iLCJyZXNvbHV0aW9uVGV4dCIsIl9fY2FtU2V0Q29tcGxldGUiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJzcmNPYmplY3QiLCJfX3ZpZGVvV2lkdGgiLCJfX3ZpZGVvSGVpZ2h0IiwiX19nZXRTY2FubmVyQWRkcmVzcyIsIl9fb2NyVHlwZUxpc3QiLCJpbmNsdWRlcyIsImFkZHJlc3MiLCJkZXN0cm95Q2FsbGJhY2siLCJnZXRJRENhcmRTY2FubmVyIiwiZGVzdHJveUlEQ2FyZFNjYW5uZXIiLCJnZXRQYXNzcG9ydFNjYW5uZXIiLCJkZXN0cm95UGFzc3BvcnRTY2FubmVyIiwiZ2V0QWxpZW5TY2FubmVyIiwiZGVzdHJveUFsaWVuU2Nhbm5lciIsImdldENyZWRpdFNjYW5uZXIiLCJkZXN0cm95Q3JlZGl0U2Nhbm5lciIsIl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MiLCJfX3JldHJ5Q291bnRHZXRBZGRyZXNzIiwiX19nZXRCdWZmZXIiLCJfX0J1ZmZlciIsIl9fcmVzb2x1dGlvbldpZHRoIiwiX19yZXNvbHV0aW9uSGVpZ2h0IiwiX19yZXN1bHRCdWZmZXIiLCJfX21hc2tJbmZvUmVzdWx0QnVmIiwiX19nZXRJbWFnZUJhc2U2NCIsIm1hc2tNb2RlIiwiaW1nTW9kZSIsIl9hcmd1bWVudHMzIiwiX3RoaXM4IiwiaW1nVHlwZSIsImVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZSIsImVuY29kZUpwZ0RldGVjdGVkUGhvdG9JbWFnZSIsImpwZ1NpemUiLCJnZXRFbmNvZGVkSnBnU2l6ZSIsImpwZ1BvaW50ZXIiLCJnZXRFbmNvZGVkSnBnQnVmZmVyIiwicmVzdWx0VmlldyIsIkhFQVA4IiwiYnVmZmVyIiwiZGVzdHJveUVuY29kZWRKcGciLCJfX2Rlc3Ryb3lCdWZmZXIiLCJfX2Rlc3Ryb3lSZXN1bHRCdWZmZXIiLCJfX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlciIsIl9fZGVzdHJveVByZXZJbWFnZSIsIl9fUHJldkltYWdlIiwiX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCIsIl9fZGVzdHJveVNjYW5uZXJBZGRyZXNzIiwiX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrIiwiX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUiLCJfdGhpczkiLCJfX2dldFJvdGF0aW9uRGVncmVlIiwiX19nZXRNaXJyb3JNb2RlIiwiX19jcm9wSW1hZ2VGcm9tVmlkZW8iLCJfdGhpczEwIiwiY2FsY1Jlc29sdXRpb25fdyIsImNhbGNSZXNvbHV0aW9uX2giLCJ2aWRlbyIsImNhbnZhcyIsInJvdGF0aW9uQ2FudmFzIiwiY2FsY0NhbnZhcyIsImNhbGNWaWRlb1dpZHRoIiwiY2FsY1ZpZGVvSGVpZ2h0IiwiY2FsY1ZpZGVvQ2xpZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbGNWaWRlb0NsaWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImNhbGNDcm9wSW1hZ2VTaXplV2lkdGgiLCJfX2Nyb3BJbWFnZVNpemVXaWR0aCIsImNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0IiwiX19jcm9wSW1hZ2VTaXplSGVpZ2h0IiwiY2FsY1ZpZGVvT3JpZW50YXRpb24iLCJfX2lzUm90YXRlZDkwb3IyNzAiLCJjYWxjTWF4U1dpZHRoIiwiY2FsY01heFNIZWlnaHQiLCJzeCIsInN5IiwicmF0aW8iLCJzV2lkdGgiLCJtaW4iLCJzSGVpZ2h0IiwibWF4IiwiY2FsY0NvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lsbFJlYWRGcmVxdWVudGx5IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsImltZ0RhdGFVcmwiLCJ0b0RhdGFVUkwiLCJfX3JvdGF0ZSIsImRlZ3JlZSIsImltZyIsIkltYWdlIiwic3JjIiwidGVtcENhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRlbXBDb250ZXh0IiwicG9zaXRpb24iLCJoZWlnaHQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJQSSIsIm5ld0ltYWdlRGF0YSIsInJlc3RvcmUiLCJfX2lzQ2FyZGJveERldGVjdGVkIiwiX2FyZ3VtZW50czQiLCJfdGhpczExIiwiYm94VHlwZSIsInJldHJ5SW1nIiwic2V0IiwiZGF0YSIsImtvciIsImFsaWVuIiwicGFzc3BvcnQiLCJkZXRlY3RfaWRjYXJkX29wdCIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwiX19zdGFydFJlY29nbml0aW9uIiwic3NhTW9kZSIsImlzU2V0SWdub3JlQ29tcGxldGUiLCJfdGhpczEyIiwicmVzdWx0QnVmZmVyIiwicmVjb2duaXRpb24iLCJfcmVmNSIsIl9vY3JSZXN1bHQiLCJfb2NyUmVzdWx0MiIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0IiwiX19jc3ZUb09iamVjdCIsImNvbXBsZXRlIiwiX19tYW51YWxPQ1JSZXRyeUNvdW50IiwiX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50IiwicXVldWVJZHgiLCJfX2RldGVjdGVkQ2FyZFF1ZXVlIiwiX19ibHVyQ2FwdHVyZUJ1dHRvbiIsIl9fc2V0U3R5bGUiLCJkaXNwbGF5IiwiX3giLCJpc0NyZWRpdENhcmQiLCJvY3JJbWFnZU1vZGUiLCJPQ1JfSU1HX01PREUiLCJvcmlnaW5JbWFnZSIsIk9DUl9JTUdfTUFTS19NT0RFIiwibWFza0ltYWdlIiwiZmFjZUltYWdlIiwiX19zdGFydFRydXRoIiwicmVqZWN0Iiwic2NhblRydXRoIiwic3RyIiwicGFpcnMiLCJvYmoiLCJwYWlyIiwiX19nZXRNYXNrSW5mbyIsIm1hc2tJbmZvUmVzdWx0QnVmIiwiZ2V0TWFza1JlY3QiLCJfX3N0YXJ0VHJ1dGhSZXRyeSIsIl90aGlzMTMiLCJfX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfdGhpczE0IiwiX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIiwiX3RoaXMxNSIsImlzUGFzc3BvcnQiLCJfX3NldHVwVmlkZW8iLCJfX3N0cmVhbSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfX2FkanVzdFN0eWxlIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX19vbkZhaWx1cmVQcm9jZXNzIiwic3RvcFN0cmVhbSIsImVsIiwiYXNzaWduIiwiX19jaGFuZ2VPQ1JTdGF0dXMiLCJfX29jclN0YXR1cyIsIl9hcmd1bWVudHM1IiwiX3RoaXMxNiIsImZvcmNlVXBkYXRlIiwicmVjb2duaXplZEltYWdlIiwiX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwIiwiX19pblByb2dyZXNzU3RlcCIsImd1aWRlQm94IiwibWFza0JveFdyYXAiLCJjYXB0dXJlQnV0dG9uIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiX21hc2tCb3hXcmFwJHF1ZXJ5U2VsIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIl9jYXB0dXJlQnV0dG9uJHF1ZXJ5UyIsIm9jck1vZGUiLCJjYWxsIiwiX191cGRhdGVQcmV2aWV3VUkiLCJfX2hpZGVQcmV2aWV3VUkiLCJwcmV2aWV3VUlXcmFwIiwicHJldmlld0ltYWdlIiwiaW1nU3R5bGUiLCJjb250ZXh0IiwiX19nZXRJbnB1dERldmljZXMiLCJfdGhpczE3IiwibWVkaWFEZXZpY2VzIiwiZGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJjYW1lcmEiLCJkZXZpY2UiLCJraW5kIiwiZ2V0Q2FwYWJpbGl0aWVzIiwiX2NhcCRmYWNpbmdNb2RlIiwiY2FwIiwiZmFjaW5nTW9kZSIsIl9fZmFjaW5nTW9kZUNvbnN0cmFpbnQiLCJwdXNoIiwiZGV2aWNlSWQiLCJjaGVja1VJT3JpZW50YXRpb24iLCJjdXJyZW50Iiwib2NyIiwiaXNDaGFuZ2VkIiwiX19wcmV2VWlPcmllbnRhdGlvbiIsIl9fY2xlYXJDdXN0b21VSSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9fc2V0dXBEb21FbGVtZW50cyIsIl90aGlzMTgiLCJ2aWRlb1dyYXAiLCJndWlkZUJveFdyYXAiLCJwcmV2ZW50VG9GcmVlemVWaWRlbyIsImN1c3RvbVVJV3JhcCIsImNhcHR1cmVVSVdyYXAiLCJjYXB0dXJlVUkiLCJwcmV2aWV3VUkiLCJzd2l0Y2hVSVdyYXAiLCJzd2l0Y2hVSSIsInJlbW92ZSIsIm9jclN0eWxlIiwid3JhcFN0eWxlIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsIm1hc2tfZnJhbWUiLCJ2aWRlb1N0eWxlIiwicm90YXRlQ3NzIiwibWlycm9yQ3NzIiwicm90YXRlQW5kTWlycm9yQ3NzIiwiX29iamVjdFNwcmVhZCIsInRyYW5zZm9ybSIsImNhbnZhc1N0eWxlIiwibGVmdCIsInRvcCIsImJvcmRlciIsInJpZ2h0IiwiYm90dG9tIiwiY3VzdG9tVUlXcmFwU3R5bGUiLCJjYXB0dXJlVUlXcmFwU3R5bGUiLCJjdXJzb3IiLCJjYXB0dXJlQnV0dG9uU3JjU1ZHIiwiX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbiIsInByZXZpZXdVSVdyYXBTdHlsZSIsInN3aXRjaFVJV3JhcFN0eWxlIiwic3dpdGNoSFRNTCIsInN3aXRjaENoZWNrYm94IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJfX29uQ2xpY2tTd2l0Y2hVSSIsIl9yZWY4IiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwiX3gyIiwib25jZSIsIl9faW5pdFN0eWxlIiwiX19vY3IiLCJfX2NhbnZhcyIsIl9fcm90YXRpb25DYW52YXMiLCJfX3ZpZGVvIiwiX192aWRlb1dyYXAiLCJfX2d1aWRlQm94IiwiX19ndWlkZUJveFdyYXAiLCJfX21hc2tCb3hXcmFwIiwiX19wcmV2ZW50VG9GcmVlemVWaWRlbyIsIl9fY3VzdG9tVUlXcmFwIiwiX19jYXB0dXJlVUlXcmFwIiwiX19jYXB0dXJlVUkiLCJfX2NhcHR1cmVCdXR0b24iLCJfX3ByZXZpZXdVSVdyYXAiLCJfX3ByZXZpZXdVSSIsIl9fcHJldmlld0ltYWdlIiwiX19zd2l0Y2hVSVdyYXAiLCJfX3N3aXRjaFVJIiwiX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uIiwiZ2V0QXR0cmlidXRlIiwiX3RoaXMxOSIsImNvbnN0cmFpbnRXaWR0aCIsImNvbnN0cmFpbnRIZWlnaHQiLCJpZGVhbCIsImNvbnN0cmFpbnRzIiwiYXVkaW8iLCJ6b29tIiwiZm9jdXNNb2RlIiwid2hpdGVCYWxhbmNlTW9kZSIsImdldFVzZXJNZWRpYSIsInN0cmVhbSIsInN0cmVhbVNldHRpbmdzIiwiZ2V0VmlkZW9UcmFja3MiLCJnZXRTZXR0aW5ncyIsImNvbmNhdCIsImFzcGVjdFJhdGlvIiwiX3RoaXMyMCIsImJhc2VXaWR0aCIsImJhc2VIZWlnaHQiLCJzY2FubmVyRnJhbWVSYXRpbyIsImd1aWRlQm94V2lkdGgiLCJndWlkZUJveEhlaWdodCIsImNhbGNPY3JDbGllbnRXaWR0aCIsImNhbGNPY3JDbGllbnRIZWlnaHQiLCJndWlkZUJveFJhdGlvQnlXaWR0aCIsIl9fZ3VpZGVCb3hSYXRpb0J5V2lkdGgiLCJ2aWRlb1JhdGlvQnlIZWlnaHQiLCJfX3ZpZGVvUmF0aW9CeUhlaWdodCIsInJlZHVjZWRHdWlkZUJveFdpZHRoIiwiX19ndWlkZUJveFJlZHVjZVJhdGlvIiwicmVkdWNlZEd1aWRlQm94SGVpZ2h0IiwicGFkZGluZyIsInZpZGVvSW5uZXJHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXNrQm94SW5uZXIiLCJyIiwibWFza0JveElubmVyV2lkdGgiLCJtYXNrQm94SW5uZXJIZWlnaHQiLCJfdGhpczIxIiwiX19jYWxjR3VpZGVCb3hDcml0ZXJpYSIsImEiLCJiIiwibmV3VmlkZW9XaWR0aCIsIm5ld1ZpZGVvSGVpZ2h0IiwibmV3VmlkZW9SYXRpb0J5V2lkdGgiLCJuZXdWaWRlb1JhdGlvQnlIZWlnaHQiLCJjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXMiLCJfX2NhbGNTdW1PZkhlaWdodENoaWxkTm9kZXMiLCJjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCIsImNhcHR1cmVVSVBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiYmFzZWxpbmUiLCJzdW0iLCJpdGVtIiwiY2hpbGROb2RlcyIsInN0b3BTY2FuIiwiX3RoaXMyMiIsIl9fcmVzb3VyY2VzTG9hZGVkIiwiX19pc1N1cHBvcnRTaW1kIiwiZW52SW5mbyIsIm9zIiwib3NTaW1wbGUiLCJ1c2ViT0NSRW52SW5mbyIsInNka1N1cHBvcnRFbnYiLCJ1cmwiLCJmZXRjaCIsImhyZWYiLCJ0aGVuIiwicmVzIiwidGV4dCIsInJlZ2V4Iiwic291cmNlIiwicmVwbGFjZSIsImV2YWwiLCJvblJ1bnRpbWVJbml0aWFsaXplZCIsIl9yZWY5IiwiX3gzIiwiX19zdGFydFNjYW5XYXNtSW1wbCIsIl90aGlzMjMiLCJfX2RldGVjdGVkIiwiX19hZGRyZXNzIiwiX19zc2FSZXRyeUNvdW50Iiwic2NhbiIsIl9yZWYxMCIsImlzRGV0ZWN0ZWRDYXJkIiwic3NhUmVzdWx0Iiwic3NhUmVzdWx0TGlzdCIsIm1hc2tJbmZvIiwicmVzb2x1dGlvbl93IiwicmVzb2x1dGlvbl9oIiwiX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUiLCJyZXRyeVN0YXJ0RGF0ZSIsIkRhdGUiLCJGQUtFIiwiUkVBTCIsIkVOU0VNQkxFIiwiaXNDb21wbGV0ZWQiLCJfbG9vcCIsImV4ZWN1dGUiLCJfcmVmMTEiLCJfcmV0IiwicmV0cnlXb3JraW5nVGltZSIsImxlZ2FjeUZvcm1hdCIsIm5ld0Zvcm1hdCIsInBhcnNlT2NyUmVzdWx0IiwicmV2aWV3X3Jlc3VsdCIsIm9jcl90eXBlIiwib2NyX3Jlc3VsdCIsIm9jcl9vcmlnaW5faW1hZ2UiLCJvY3JfbWFza2luZ19pbWFnZSIsIm9jcl9mYWNlX2ltYWdlIiwic3NhX21vZGUiLCJfX2NvbXByZXNzSW1hZ2VzIiwiZXhjbHVkZUxpc3QiLCJlbmNyeXB0ZWQiLCJ0b1BhaXJzIiwib21pdCIsInJlZHVjZSIsImFjYyIsIl9yZWYxMiIsImtleSIsInZhbHVlIiwib2NyX2RhdGEiLCJfX29uU3VjY2Vzc1Byb2Nlc3MiLCJfX3JlY292ZXJlZCIsIl90aGlzMjQiLCJyZXNpemVSYXRpbyIsImRlZmF1bHRPcHRpb25zIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjb252ZXJ0U2l6ZSIsInRhcmdldENvbXByZXNzVm9sdW1lIiwibWFza2luZ0ltYWdlT3B0aW9ucyIsInF1YWxpdHkiLCJfX3JlcXVlc3RHZXRBUElUb2tlbiIsImNyZWRlbnRpYWwiLCJhdXRoU2VydmVySW5mbyIsImJhc2VVcmwiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImpzb24iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRva2VuIiwiY2F0Y2giLCJlcnIiLCJfX3JlcXVlc3RTZXJ2ZXJPQ1IiLCJfdGhpczI1IiwiX3JlZjEzIiwib2NyU2VydmVyQmFzZVVybCIsImFwaVRva2VuIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInJhdyIsImltYWdlX2Jhc2U2NCIsIm1hc2tfbW9kZSIsImZhY2VfbW9kZSIsInJlcXVlc3RPcHRpb25zIiwicmVkaXJlY3QiLCJfeDQiLCJfeDUiLCJfX3N0YXJ0U2NhblNlcnZlckltcGwiLCJfdGhpczI2IiwiX3JlZjE0IiwiX3JlZjE1IiwiYmFzZTY0SW1hZ2VSZXN1bHQiLCJfcmVmMTYiLCJfeDYiLCJfeDciLCJpbWdEYXRhVVJMIiwibGltaXRTYXZlSW1hZ2VDb3VudCIsInNoaWZ0IiwiX19kZWJ1Z01vZGUiLCJfX2RldGVjdGVkQ2FyZFF1ZXVlQmFzZTY0IiwiX3RoaXMyNyIsImFwaV9yZXNwb25zZSIsInJlc3VsdF9jb2RlIiwicmVzdWx0X21lc3NhZ2UiLCJyZXN1bHRDb2RlIiwiX3RoaXMyOCIsImVycm9yRGV0YWlsIiwic3RhY2siLCJlcnJvcl9kZXRhaWwiLCJfdGhpczI5IiwicHJlbG9hZGluZ1N0YXR1cyIsIl90aGlzMzAiLCJfdGhpczMxIiwiX19yZWNvdmVyeVNjYW4iLCJfdGhpczMyIiwiY2FudmFzQ29udGV4dCIsImNsZWFyUmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCIsInN0b3AiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJjbGVhclRpbWVvdXQiXSwic291cmNlcyI6WyJvY3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIGdsb2JhbC1tb2R1bGUgKi9cbmltcG9ydCBkZXRlY3RvciBmcm9tICcuL2hlbHBlcnMvZGV0ZWN0b3IuanMnO1xuaW1wb3J0IHVzZWJPQ1JXQVNNUGFyc2VyIGZyb20gJy4vaGVscGVycy91c2ViLW9jci13YXNtLXBhcnNlci5qcyc7XG5pbXBvcnQgdXNlYk9DUkFQSVBhcnNlciBmcm9tICcuL2hlbHBlcnMvdXNlYi1vY3ItYXBpLXBhcnNlci5qcyc7XG5pbXBvcnQgeyBpc1N1cHBvcnRXYXNtLCBtZWFzdXJlLCBzaW1kLCB0aHJlYWRzIH0gZnJvbSAnLi9oZWxwZXJzL3dhc20tZmVhdHVyZS1kZXRlY3QuanMnO1xuaW1wb3J0IEltYWdlVXRpbCBmcm9tICcuL2hlbHBlcnMvaW1hZ2UtdXRpbC5qcyc7XG5sZXQgaW5zdGFuY2U7XG5jbGFzcyBVc2VCT0NSIHtcbiAgSU5fUFJPR1JFU1MgPSB7XG4gICAgTk9ORTogJ25vbmUnLFxuICAgIE5PVF9SRUFEWTogJ25vdF9yZWFkeScsXG4gICAgUkVBRFk6ICdyZWFkeScsXG4gICAgQ0FSRF9ERVRFQ1RfU1VDQ0VTUzogJ2RldGVjdF9zdWNjZXNzJyxcbiAgICBDQVJEX0RFVEVDVF9GQUlMRUQ6ICdkZXRlY3RfZmFpbGVkJyxcbiAgICBNQU5VQUxfQ0FQVFVSRV9TVUNDRVNTOiAnbWFudWFsX2NhcHR1cmVfc3VjY2VzcycsXG4gICAgTUFOVUFMX0NBUFRVUkVfRkFJTEVEOiAnbWFudWFsX2NhcHR1cmVfZmFpbGVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRDogJ3JlY29nbml6ZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOiAncmVjb2duaXplZF93aXRoX3NzYScsXG4gICAgT0NSX1NVQ0NFU1M6ICdvY3Jfc3VjY2VzcycsXG4gICAgT0NSX1NVQ0NFU1NfV0lUSF9TU0E6ICdvY3Jfc3VjY2Vzc193aXRoX3NzYScsXG4gICAgT0NSX0ZBSUxFRDogJ29jcl9mYWlsZWQnXG4gIH07XG4gIE9DUl9TVEFUVVMgPSB7XG4gICAgTk9UX1JFQURZOiAtMSxcbiAgICBSRUFEWTogMCxcbiAgICBPQ1JfU1VDQ0VTUzogMSxcbiAgICBET05FOiAyXG4gIH07XG4gIFBSRUxPQURJTkdfU1RBVFVTID0ge1xuICAgIE5PVF9TVEFSVEVEOiAtMSxcbiAgICBTVEFSVEVEOiAwLFxuICAgIERPTkU6IDFcbiAgfTtcbiAgT0NSX0lNR19NT0RFID0ge1xuICAgIFdBUlBJTkc6IDAsXG4gICAgQ1JPUFBJTkc6IDEsXG4gICAgTk9ORTogMlxuICB9O1xuICBPQ1JfSU1HX01BU0tfTU9ERSA9IHtcbiAgICBGQUxTRTogMCxcbiAgICBUUlVFOiAxXG4gIH07XG5cbiAgLyoqIHB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBfX2RlYnVnTW9kZSA9IGZhbHNlO1xuICBfX09DUkVuZ2luZSA9IG51bGw7XG4gIF9faXNTdXBwb3J0V2FzbSA9IGZhbHNlO1xuICBfX2lzU3VwcG9ydFNpbWQgPSBmYWxzZTtcbiAgX19pbml0aWFsaXplZCA9IGZhbHNlO1xuICBfX3ByZWxvYWRlZCA9IGZhbHNlO1xuICBfX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEO1xuICBfX2xpY2Vuc2U7XG4gIF9fb2NyVHlwZSA9IG51bGw7XG4gIF9fc3NhTW9kZSA9IGZhbHNlO1xuICBfX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5OT1RfUkVBRFk7XG4gIF9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCA9IDEwO1xuICBfX21hbnVhbE9DUlJldHJ5Q291bnQgPSAwO1xuICBfX3NzYVJldHJ5Q291bnQgPSAwO1xuICBfX2RldGVjdGVkQ2FyZFF1ZXVlID0gW107XG4gIF9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQgPSBbXTtcbiAgX19vblN1Y2Nlc3MgPSBudWxsO1xuICBfX29uRmFpbHVyZSA9IG51bGw7XG4gIF9fb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbDtcbiAgX19vY3JUeXBlTGlzdCA9IFsnaWRjYXJkJywgJ2RyaXZlcicsICdwYXNzcG9ydCcsICdmb3JlaWduLXBhc3Nwb3J0JywgJ2FsaWVuJywgJ2NyZWRpdCcsICdpZGNhcmQtc3NhJywgJ2RyaXZlci1zc2EnLCAncGFzc3BvcnQtc3NhJywgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJywgJ2FsaWVuLXNzYSddO1xuICBfX29jclR5cGVOdW1iZXJUb1N0cmluZyA9IG5ldyBNYXAoW1snMScsICdpZGNhcmQnXSwgWycyJywgJ2RyaXZlciddLCBbJzMnLCAncGFzc3BvcnQnXSwgWyc0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnXSwgWyc1JywgJ2FsaWVuJ10sIFsnNS0xJywgJ2FsaWVuJ10sIFsnNS0yJywgJ2FsaWVuJ10sIFsnNS0zJywgJ2FsaWVuJ11dKTtcbiAgX19vY3JTdHJpbmdUb1R5cGVOdW1iZXIgPSBuZXcgTWFwKFtbJ2lkY2FyZCcsICcxJ10sIFsnZHJpdmVyJywgJzInXSwgWydwYXNzcG9ydCcsICczJ10sIFsnZm9yZWlnbi1wYXNzcG9ydCcsICc0J10sIFsnYWxpZW4nLCAnNSddLCBbJ2FsaWVuJywgJzUtMSddLCBbJ2FsaWVuJywgJzUtMiddLCBbJ2FsaWVuJywgJzUtMyddXSk7XG4gIF9fcGFnZUVuZCA9IGZhbHNlO1xuICBfX29jcjtcbiAgX19jYW52YXM7XG4gIF9fcm90YXRpb25DYW52YXM7XG4gIF9fdmlkZW87XG4gIF9fdmlkZW9XcmFwO1xuICBfX2d1aWRlQm94O1xuICBfX2d1aWRlQm94V3JhcDtcbiAgX19tYXNrQm94V3JhcDtcbiAgX19wcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgX19jdXN0b21VSVdyYXA7XG4gIF9fdG9wVUk7XG4gIF9fbWlkZGxlVUk7XG4gIF9fYm90dG9tVUk7XG4gIF9fcHJldmlld1VJV3JhcDtcbiAgX19wcmV2aWV3VUk7XG4gIF9fcHJldmlld0ltYWdlO1xuICBfX2NhcHR1cmVVSVdyYXA7XG4gIF9fY2FwdHVyZVVJO1xuICBfX3N3aXRjaFVJV3JhcDtcbiAgX19zd2l0Y2hVSTtcbiAgX19jYXB0dXJlQnV0dG9uO1xuICBfX2FkZHJlc3MgPSAwO1xuICBfX2RldGVjdGVkID0gZmFsc2U7XG4gIF9fcmVjb3ZlcmVkID0gZmFsc2U7XG4gIF9fQnVmZmVyID0gbnVsbDtcbiAgX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICBfX21hc2tJbmZvUmVzdWx0QnVmID0gbnVsbDtcbiAgX19QcmV2SW1hZ2UgPSBudWxsO1xuICBfX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICBfX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gIF9fcmVzb2x1dGlvbldpZHRoID0gMDtcbiAgX19yZXNvbHV0aW9uSGVpZ2h0ID0gMDtcbiAgX192aWRlb1dpZHRoID0gMDtcbiAgX192aWRlb0hlaWdodCA9IDA7XG4gIF9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gIF9faW50ZXJ2YWxUaW1lcjtcbiAgX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyO1xuICBfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuICBfX3N0cmVhbTtcbiAgX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgX19mYWNpbmdNb2RlQ29uc3RyYWludCA9ICdlbnZpcm9ubWVudCc7XG4gIF9fdWlPcmllbnRhdGlvbiA9ICcnO1xuICBfX3ByZXZVaU9yaWVudGF0aW9uID0gJyc7XG4gIF9fdmlkZW9PcmllbnRhdGlvbiA9ICcnO1xuICBfX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5ID0gNTAwO1xuICBfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzID0gMzAwOyAvLyDsnoTsi5xcbiAgX19yZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7IC8vIOyehOyLnFxuICBfX2RldmljZUluZm87XG4gIF9faXNSb3RhdGVkOTBvcjI3MCA9IGZhbHNlO1xuICBfX2luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk7XG4gIF9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHRoaXMuSU5fUFJPR1JFU1MuTk9ORTtcbiAgX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgX19ndWlkZUJveFJhdGlvQnlXaWR0aCA9IDEuMDsgLy8g7IiY7KCV67aI6rCAXG4gIF9fdmlkZW9SYXRpb0J5SGVpZ2h0ID0gMC45OyAvLyDsiJjsoJXrtojqsIBcbiAgX19ndWlkZUJveFJlZHVjZVJhdGlvID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgX19jcm9wSW1hZ2VTaXplV2lkdGggPSAwO1xuICBfX2Nyb3BJbWFnZVNpemVIZWlnaHQgPSAwO1xuICBfX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID0gZmFsc2U7XG5cbiAgLyoqIERlZmF1bHQgb3B0aW9ucyAqL1xuICBfX29wdGlvbnMgPSBuZXcgT2JqZWN0KHtcbiAgICAvLyDrlJTrsoTquYUg7Ji17IWYXG4gICAgc2hvd0NsaXBGcmFtZTogZmFsc2UsXG4gICAgLy8gY2lscC1mcmFtZSDrs7TquLBcbiAgICBzaG93Q2FudmFzUHJldmlldzogZmFsc2UsXG4gICAgLy8gY2FudmFzIHByZXZpZXcg67O06riwXG5cbiAgICAvLyDstpzroKUg7Ji17IWYXG4gICAgdXNlRW5jcnlwdE1vZGU6IGZhbHNlLFxuICAgIC8vIOyVlO2YuO2ZlCDsoIHsmqlcbiAgICB1c2VMZWdhY3lGb3JtYXQ6IGZhbHNlLFxuICAgIC8vIExlZ2FjeSBmb3JtYXQg7KeA7JuQXG4gICAgdXNlTWFza0luZm86IHRydWUsXG4gICAgLy8g66eI7Iqk7YK5IOyijO2RnCDsp4Dsm5BcbiAgICB1c2VGYWNlSW1hZ2U6IHRydWUsXG4gICAgLy8g7Iug67aE7KadIOuCtCDslrzqtbQg7IKs7KeEXG4gICAgdXNlSW1hZ2VXYXJwaW5nOiBmYWxzZSxcbiAgICAvLyDsi6DrtoTspp0g7J2066+47KeA66W8IFdhcnBpbmco7Jmc6rOhIOuztOyglSDtlaDsp4Ag7Jes67aAKVxuICAgIHVzZUNvbXByZXNzSW1hZ2U6IGZhbHNlLFxuICAgIC8vIOyLoOu2hOymnSDsnbTrr7jsp4Drpbwg7JWV7LaV7ZWg7KeAIOyXrOu2gFxuICAgIHVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aDogMTA4MCxcbiAgICAvLyDsnbTrr7jsp4Ag66as7IKs7J207KeVIOqwgOuhnCDtlbTsg4Hrj4RcbiAgICB1c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lOiAxMDI0ICogNTAsXG4gICAgLy8g7J2066+47KeAIOyVley2lSDrqqntkZwg7Jqp65+JXG5cbiAgICAvLyBVSSDshKTsoJVcbiAgICB1c2VUb3BVSTogdHJ1ZSxcbiAgICAvLyDsg4Hri6ggVUlcbiAgICB1c2VUb3BVSVRleHRNc2c6IGZhbHNlLFxuICAgIC8v7IOB64uoIFVJID4gVEVYVFxuICAgIHVzZU1pZGRsZVVJOiB0cnVlLFxuICAgIC8v7KSR64uoIFVJXG4gICAgdXNlTWlkZGxlVUlUZXh0TXNnOiB0cnVlLFxuICAgIC8vIOykkeuLqCBVSSA+IFRFWFRcbiAgICB1c2VCb3R0b21VSTogdHJ1ZSxcbiAgICAvLyDtlZjri6ggVUlcbiAgICB1c2VCb3R0b21VSVRleHRNc2c6IGZhbHNlLFxuICAgIC8vIO2VmOuLqCBVSSA+IFRFWFRcbiAgICB1c2VQcmV2aWV3VUk6IHRydWUsXG4gICAgLy8gUHJldmlldyBVSVxuICAgIHVzZUNhcHR1cmVVSTogdHJ1ZSxcbiAgICAvLyDsuqHsspjrsoTtirwgVUlcblxuICAgIC8vIOyduOyLnSDtlITroIjsnoQg7Ji17IWYXG4gICAgZnJhbWVCb3JkZXJTdHlsZToge1xuICAgICAgd2lkdGg6IDUsXG4gICAgICAvLyBib3JkZXItd2lkdGhcbiAgICAgIHJhZGl1czogMjAsXG4gICAgICAvLyBib3JkZXItcmFkaXVzXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcbiAgICAgIC8vIGJvcmRlci1zdHlsZVxuXG4gICAgICAvLyDri6jqs4Trs4Qg7J247IudIO2UhOugiOyehCBib3JkZXIg7IOJ7IOBXG4gICAgICBub3RfcmVhZHk6ICcjMDAwMDAwJyxcbiAgICAgIC8vIOyKpOy6lOykgOu5hCA6IOqygOyglVxuICAgICAgcmVhZHk6ICcjYjhiOGI4JyxcbiAgICAgIC8vIOyKpOy6lOuMgOq4sCA6IO2ajOyDiVxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDshLHqs7UgOiDtlZjriphcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjNzI1YjY3JyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDsi6TtjKggOiDrs7TrnbxcbiAgICAgIG1hbnVhbF9jYXB0dXJlX3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIOyImOuPmey0rOyYgSDshLHqs7UgOiDtlZjriphcbiAgICAgIG1hbnVhbF9jYXB0dXJlX2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyLpO2MqCA6IOuztOudvFxuICAgICAgcmVjb2duaXplZDogJyMwMDNhYzInLFxuICAgICAgLy8gT0NS7JmE66OMIDog7YyM656RXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzAwM2FjMicsXG4gICAgICAvLyDsgqzrs7jtjJDrs4TspJEo7IKs67O47YyQ67OEIE9OKSA6IO2MjOuekVxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTRiMDBlJyxcbiAgICAgIC8vIE9DUuyZhOujjCA6IOy0iOuhnVxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTRiMDBlJyxcbiAgICAgIC8vIE9DUuyZhOujjCjsgqzrs7jtjJDrs4QgT04pIDog7LSI66GdXG4gICAgICBvY3JfZmFpbGVkOiAnI0ZBMTEzRCcgLy8gT0NS7Iuk7YyoIDog67mo6rCVXG4gICAgfSxcblxuICAgIC8vIOuniOyKpO2BrCDtlITroIjsnoQgZmlsbCDsu6zrn6wg67OA6rK9IOyCrOyaqSDsl6zrtoBcbiAgICB1c2VNYXNrRnJhbWVDb2xvckNoYW5nZTogdHJ1ZSxcbiAgICAvLyDrp4jsiqTtgawg7ZSE66CI7J6EIOyYteyFmCAo7Lm066mU6528IOu5hOuUlOyYpCDsmIHsl63sl5DshJwg7J247IudIO2UhOugiOyehOunjCDrs7TsnbTqsowg7ZWY6rOgIOuCmOuouOyngOulvCDrja7slrTsk7DripQg7ZSE66CI7J6EIOyYgeyXrSlcbiAgICBtYXNrRnJhbWVTdHlsZToge1xuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLFxuICAgICAgLy8gY2xpcC1mcmFtZSDsg4nsg4EgOiDrlKXtjbztlIwgKOyImOygleu2iOqwgClcbiAgICAgIGJhc2VfY29sb3I6ICcjMzMzMzMzJyxcbiAgICAgIC8vIG1hc2stZnJhbWUg7IOJ7IOBIDog64uk7YGs6re466CI7J20ICjtiKzrqoXrj4TripQg7IiY7KCV67aI6rCAIGZm66GcIOqzoOyglSlcblxuICAgICAgLy8g64uo6rOE67OEIOuniOyKpO2BrCDtlITroIjsnoQgZmlsbCDsg4nsg4FcbiAgICAgIG5vdF9yZWFkeTogJyMzMzMzMzMnLFxuICAgICAgLy8g7Iqk7LqU7KSA67mEXG4gICAgICByZWFkeTogJyMzMzMzMzMnLFxuICAgICAgLy8g7Iqk7LqU64yA6riwXG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyMyMjIyMjInLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyEseqztVxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyMzMzMzMzMnLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyLpO2MqFxuICAgICAgbWFudWFsX2NhcHR1cmVfc3VjY2VzczogJyMyMjIyMjInLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyEseqztVxuICAgICAgbWFudWFsX2NhcHR1cmVfZmFpbGVkOiAnIzMzMzMzMycsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7Iuk7YyoXG4gICAgICByZWNvZ25pemVkOiAnIzIyMjIyMicsXG4gICAgICAvLyBPQ1LsmYTro4xcbiAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6ICcjMjIyMjIyJyxcbiAgICAgIC8vIOyCrOuzuO2MkOuzhOykkSjsgqzrs7jtjJDrs4QgT04pXG4gICAgICBvY3Jfc3VjY2VzczogJyMxMTExMTEnLFxuICAgICAgLy9PQ1LsmYTro4xcbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzExMTExMScsXG4gICAgICAvLyBPQ1LsmYTro4wo7IKs67O47YyQ67OEIE9OKVxuICAgICAgb2NyX2ZhaWxlZDogJyMxMTExMTEnIC8vIE9DUuyLpO2MqFxuICAgIH0sXG5cbiAgICAvLyDstKzsmIHsmLXshZhcbiAgICB1c2VBdXRvU3dpdGNoVG9TZXJ2ZXJNb2RlOiBmYWxzZSxcbiAgICAvLyDsoIDsgqzslpEg64uo66eQ7JeQ7IScIOyEnOuyhE9DUuuhnCDsnpDrj5kg7KCE7ZmYIOq4sOuKpVxuICAgIHVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZTogZmFsc2UsXG4gICAgLy8g7IiY64+Z7Jy866GcIOyEnOuyhE9DUiDsoITtmZgg6riw64qlICjsiJjrj5nsnbQgdHJ1ZeydtOuptCDsnpDrj5nsnYAg66y07Iuc65CoKVxuICAgIHN3aXRjaFRvU2VydmVyVGhyZXNob2xkOiAyMC4wLFxuICAgIC8vIOyekOuPmeyghO2ZmCDquLDspIDqsJIgKOyEseuKpSDsuKHsoJXsuZggbXMpXG4gICAgdXNlRm9yY2VDb21wbGV0ZVVJOiBmYWxzZSxcbiAgICAvLyBXQVNNIOuqqOuTnOydvOuVjCDrsoTtirwg64iE66W87IucIO2VtOuLuSDsi5zsoJDsl5Ag6rCV7KCc66GcIOyZhOujjCDsgqzsmqnsl6zrtoBcblxuICAgIC8vIOyImOuPmey0rOyYgSDrsoTtirwg7Ji17IWYXG4gICAgY2FwdHVyZUJ1dHRvblN0eWxlOiB7XG4gICAgICBzdHJva2VfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIC8vIOuyhO2KvCDthYzrkZDrpqwoc3Ryb2tlKSDsg4nsg4FcbiAgICAgIGJhc2VfY29sb3I6ICcjNWU4ZmZmJyAvLyDrsoTtirwg7IOJ7IOBXG4gICAgfSxcblxuICAgIHJlc291cmNlQmFzZVVybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAvLyB3YXNtLCBkYXRhIO2MjOydvCDrpqzshozsiqQgYmFzZSDqsr3roZwgKENETiDsgqzsmqnsi5wg67OA6rK9KVxuICAgIGRldmljZUxhYmVsOiAnJyxcbiAgICB2aWRlb1RhcmdldElkOiAnJyxcbiAgICAvLyDsubTrqZTrnbwg7ISk7KCVXG4gICAgcm90YXRpb25EZWdyZWU6IDAsXG4gICAgLy8gcm90YXRpb24tZGVncmVlIOy5tOuplOudvOqwgCDtmozsoITrkJwg6rCB64+EICg5MCwgMTkwLCAyNzApXG4gICAgbWlycm9yTW9kZTogZmFsc2UsXG4gICAgLy8gbWlycm9yLW1vZGUg7IWA7ZS8IOy5tOuplOudvCjtgqTsmKTsiqTtgawg65OxKSDsgqzsmqnsi5wg7KKM7JqwIOuwmOyghFxuXG4gICAgLy8g7Lm066mU6528IO2VtOyDgeuPhCDshKTsoJUgIDogJ2NvbXBhdGliaWxpdHknICjtmLjtmZjshLEg7Jqw7ISgKSB8fCAnaGlnaFF1YWxpdHknICjqs6DtmZTsp4gg7Jqw7ISgKVxuICAgIGNhbWVyYVJlc29sdXRpb25Dcml0ZXJpYTogJ2NvbXBhdGliaWxpdHknLFxuICAgIC8vIO2YuO2ZmOyEsSDsmrDshKAo6raM7J6lLCDrlJTtj7TtirgpIDogNzIw7Jy866GcIOqzoOyglSwg7KCA7IKs7JaRIOuLqOunkOq4sCDtmLjtmZjshLEg7KKL7J2MXG4gICAgLy8gY2FtZXJhUmVzb2x1dGlvbkNyaXRlcmlhOiAnaGlnaFF1YWxpdHknLCAvLyDqs6DtmZTsp4gg7Jqw7ISgIDogMTA4MOydtCDqsIDriqXtlZjrqbQgMTA4MCDrtojqsIDriqXtlZjrqbQgNzIwXG5cbiAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOyEpOyglSA6ICdjYW1lcmFSZXNvbHV0aW9uJyAo7Lm066mU6528IO2VtOyDgeuPhCkgfHwgJ29jclZpZXdTaXplJyAob2NyIGRpdiDtgazquLApXG4gICAgY2FsY0d1aWRlQm94Q3JpdGVyaWE6ICdjYW1lcmFSZXNvbHV0aW9uJyxcbiAgICAvLyDsubTrqZTrnbwg7ZW07IOB64+EIOq4sOykgCjqtozsnqUsIOuUlO2PtO2KuCkgOiA3MjB4MTI4MCDtlbTsg4Hrj4Qo7IS466Gc66qo65OcKSDsnbzrlYwgb2NyIHZpZXcgd2lkdGggc2l6ZeqwgCA3MjDrs7Tri6Qg7YGwIOqyveyasCwg6rCA7J2065OcIOuwleyKpOulvCA3MjDsl5Ag66ee7LakIChwcmV2aWV3IO2ZlOuptCDquajsp5Ag7JeG7J2MKVxuICAgIC8vIGNhbGNHdWlkZUJveENyaXRlcmlhOiAnb2NyVmlld1NpemUnLCAvLyDtmZTrqbQg7IKs7J207KaIIOq4sOykgCA6IDcyMHgxMjgwIO2VtOyDgeuPhCjshLjroZzrqqjrk5wpIOydvOuVjCBvY3IgdmlldyB3aWR0aCBzaXpl6rCAIDcyMOuztOuLpCDtgbDqsr3smrAsIOqwgOydtOuTnCDrsJXsiqTrpbwgb2NyIHZpZXcgd2lkdGgg7IKs7JeQ7KaI7JeQIOunnuy2pCAocHJldmlldyDtmZTrqbQg6rCV7KCc66GcIOuKmOumrOq4sCDrlYzrrLjsl5Ag64uk7IaMIOq5qOynkClcblxuICAgIC8vIOyCrOuzuO2MkOuzhCBSRVRSWSDshKTsoJVcbiAgICAvLyBzc2FSZXRyeVR5cGVcbiAgICAvLyAgIC0gUkVBTCAgICAgOiDrs7jsnbgoUkVBTCkg6rGw67aA7JyoIC0+IEZhbHNlIE5lZ2F0aXZlKOyLpOygnOqwkuydgCBSRUFM7J24642wIOyYiOy4oeqwkuydgCBGQUtF65287IScIO2LgOumsOqyveyasCnrpbwg64Ku7LaU6riwIOychO2VtCxcbiAgICAvLyAgIC0gRkFLRSAgICAgOiDtg4DsnbgoRkFLRSkg7IiY65297JyoIC0+IEZhbHNlIFBvc2l0aXZlKOyLpOygnOqwkuydgCBGQUtF7J24642wIOyYiOy4oeqwkuydgCBSRUFM7J2065287IScIO2LgOumsOqyveyasCnrpbwg64Ku7LaU6riwIOychO2VtFxuICAgIC8vICAgLSBFTlNFTUJMRSA6IO2Pieq3oCDsoIjrjIDqsJIgLT4gc3NhTWF4UmV0cnlDb3VudCDrp4ztgbwg67CY67O1IOyImO2Wie2VmOqzoCBmZF9jb25maWRlbmNlIOygiOuMgOqwkiDqsJLsnZgg7Y+J6reg7Jy866GcIO2MkOyglVxuICAgIC8vIHNzYU1heFJldHJ5Q291bnQg7ISk7KCVIOqwkuunjO2BvCDsnqzsi5zrj4TtlZjsl6wg7ZWc67KI7J20652864+EIOq4sOykgOqwkihSRUFMIOuYkOuKlCBGQUtFKeydtCDrnKjrqbQg6riw7KSA6rCSKFJFQUwg65iQ64qUIEZBS0Up66GcIO2MkOyglVxuICAgIHNzYVJldHJ5VHlwZTogJ0VOU0VNQkxFJyxcbiAgICBzc2FSZXRyeVBpdm90OiAwLjgsXG4gICAgLy8gUkVBTC9GQUtF66W8IO2MkOygle2VmOuKlCBmZF9jb25maWRlbmNlIOq4sOykgOqwkiAod2FzbSDrsLDtj6wg67KE7KCE7JeQIOuUsOudvCDri6TrpoQpIOKAuyDsiJjsoJXrtojqsIBcbiAgICBzc2FNYXhSZXRyeUNvdW50OiAwIC8vIOy1nOuMgCBSRVRSWSDtmozsiJjshKTsoJUgMOydtOuptCDrr7jsgqzsmqlcbiAgfSk7XG5cbiAgLyoqIGNvbnN0cnVjdG9yICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKiogcHVibGljIG1ldGhvZHMgKi9cbiAgYXN5bmMgcHJlbG9hZGluZygpIHtcbiAgICBpZiAodGhpcy5pc1ByZWxvYWRlZCgpKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEO1xuICAgICAgYXdhaXQgdGhpcy5fX2xvYWRSZXNvdXJjZXMoKTtcbiAgICAgIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5ET05FO1xuICAgICAgdGhpcy5fX3ByZWxvYWRlZCA9IHRydWU7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGlzSW5pdGlhbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19pbml0aWFsaXplZDtcbiAgfVxuICBpc1ByZWxvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ByZWxvYWRlZDtcbiAgfVxuICBnZXRQcmVsb2FkaW5nU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cztcbiAgfVxuICBnZXRPQ1JFbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19PQ1JFbmdpbmU7XG4gIH1cbiAgaW5pdChzZXR0aW5ncykge1xuICAgIGlmICghISFzZXR0aW5ncy5saWNlbnNlS2V5KSB0aHJvdyBuZXcgRXJyb3IoJ0xpY2Vuc2Uga2V5IGlzIGVtcHR5Jyk7XG4gICAgdGhpcy5fX2xpY2Vuc2UgPSBzZXR0aW5ncy5saWNlbnNlS2V5O1xuICAgIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSBfLm1lcmdlKHt9LCB0aGlzLl9fb3B0aW9ucywgc2V0dGluZ3MpO1xuICAgIHRoaXMuc2V0T3B0aW9uKG1lcmdlZE9wdGlvbnMpO1xuICAgIHZvaWQgMDtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aGlzLl9fd2luZG93RXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLl9fZGV2aWNlSW5mbyA9IGRldGVjdG9yLmdldE9zVmVyc2lvbigpO1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy5fX2lzU3VwcG9ydFdhc20gPSBpc1N1cHBvcnRXYXNtKCk7XG4gICAgICBpZiAoIXRoaXMuX19pc1N1cHBvcnRXYXNtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignV2ViQXNzZW1ibHkgaXMgbm90IHN1cHBvcnRlZC4gaW4gdGhpcyBicm93c2VyLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgc2V0T3B0aW9uKHNldHRpbmdzKSB7XG4gICAgdGhpcy5fX29wdGlvbnMgPSBzZXR0aW5ncztcbiAgfVxuICBnZXRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vcHRpb25zO1xuICB9XG4gIGdldE9jclR5cGUodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9fb2NyVHlwZU51bWJlclRvU3RyaW5nLmdldCh0eXBlKTtcbiAgfVxuICBnZXRPY3JUeXBlTnVtYmVyKHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9fb2NyU3RyaW5nVG9UeXBlTnVtYmVyLmdldChzdHJpbmcpO1xuICB9XG4gIGdldFVJT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX191aU9yaWVudGF0aW9uO1xuICB9XG4gIGdldFZpZGVvT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICB9XG4gIGFzeW5jIGNoZWNrU3dpdGNoVG9TZXJ2ZXJNb2RlKCkge1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgIC8vIOyImOuPmeyghO2ZmCBvbiDsnbTrqbQg7IiY64+Z7KCE7ZmYIOyasOyEoFxuICAgICAgcmV0dXJuIHRoaXMuX19pc1N3aXRjaFRvU2VydmVyTW9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g7IiY64+Z7KCE7ZmYIG9mZiDsnbTrqbQg7J6Q64+Z7KCE7ZmYIOyytO2BrFxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUF1dG9Td2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgICAgLy8g7J6Q64+Z7KCE7ZmYIG9u7J2865WMXG4gICAgICAgIC8vIOyEseuKpSDsuKHsoJXqsJLsnYQg6riw7KSA7Jy866GcIFdBU00gb3IgU2VydmVyXG4gICAgICAgIGNvbnN0IFtsYXRlbmN5UGVyMTAwbXMsIG1lYXN1cmVSZXBvcnRdID0gYXdhaXQgbWVhc3VyZSgpO1xuICAgICAgICB0aGlzLl9fZGVidWcobWVhc3VyZVJlcG9ydCk7XG4gICAgICAgIHJldHVybiBsYXRlbmN5UGVyMTAwbXMgPiB0aGlzLl9fb3B0aW9ucy5zd2l0Y2hUb1NlcnZlclRocmVzaG9sZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOyImOuPmeyghO2ZmOuPhCBvZmYsIOyekOuPmeyghO2ZmCBvZmZcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID0gYXdhaXQgdGhpcy5jaGVja1N3aXRjaFRvU2VydmVyTW9kZSgpO1xuICAgIHRoaXMuX19vY3JUeXBlID0gdHlwZTtcbiAgICB0aGlzLl9fc3NhTW9kZSA9IHRoaXMuX19vY3JUeXBlLmluZGV4T2YoJy1zc2EnKSA+IC0xO1xuICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG4gICAgdGhpcy5fX29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlID0gb25JblByb2dyZXNzQ2hhbmdlO1xuICAgIGlmIChvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSkge1xuICAgICAgICB0aGlzLl9fdG9wVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnRvcFVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJKSB7XG4gICAgICAgIHRoaXMuX19taWRkbGVVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkubWlkZGxlVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHtcbiAgICAgICAgdGhpcy5fX2JvdHRvbVVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5ib3R0b21VSTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbml0aWFsaXplZCEnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX19wcmVwcm9jZXNzKCk7XG4gICAgICBpZiAodGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAgIC8vIHNlcnZlck1vZGVcbiAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUVuY3J5cHRNb2RlICYmIHRoaXMuX19pc1N1cHBvcnRXYXNtKSBhd2FpdCB0aGlzLl9fcHJlbG9hZGluZ1dhc20oKTtcbiAgICAgICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2NhblNlcnZlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2FzbU1vZGVcbiAgICAgICAgYXdhaXQgdGhpcy5fX3ByZWxvYWRpbmdXYXNtKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5XYXNtKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9XG4gIH1cbiAgc3RvcE9DUigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICB0aGlzLl9fb25TdWNjZXNzID0gbnVsbDtcbiAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgfVxuICBzZXRJZ25vcmVDb21wbGV0ZSh2YWwpIHtcbiAgICB0aGlzLl9fT0NSRW5naW5lLnNldElnbm9yZUNvbXBsZXRlKHZhbCk7XG4gIH1cbiAgZW5jcnlwdChwbGFpblN0cikge1xuICAgIHJldHVybiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocGxhaW5TdHIpO1xuICB9XG4gIGFzeW5jIHJlc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSwgaXNTd2l0Y2hNb2RlID0gZmFsc2UpIHtcbiAgICBpZiAoaXNTd2l0Y2hNb2RlKSB7XG4gICAgICBhd2FpdCB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gIH1cblxuICAvKiogcHJpdmF0ZSBtZXRob2RzICovXG4gIGFzeW5jIF9fd2FpdFByZWxvYWRlZCgpIHtcbiAgICBsZXQgd2FpdGluZ1JldHJ5Q291bnQgPSAwO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ByZWxvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhaXRpbmdSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH07XG4gICAgICBjaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIF9fcHJlcHJvY2VzcygpIHtcbiAgICBjb25zdCBjb252ZXJ0VHlwZVRvTnVtYmVyID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlSW50KG9wdGlvbikpID8gMCA6IHBhcnNlSW50KG9wdGlvbik7XG4gICAgfTtcbiAgICB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID0gY29udmVydFR5cGVUb051bWJlcih0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KTtcbiAgICB0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lID0gY29udmVydFR5cGVUb051bWJlcih0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lKTtcbiAgICB0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4V2lkdGggPSBjb252ZXJ0VHlwZVRvTnVtYmVyKHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aCk7XG4gIH1cbiAgX193aW5kb3dFdmVudEJpbmQoKSB7XG4gICAgY29uc3QgX3RoaXNfID0gdGhpcztcbiAgICBpZiAoL2lwaG9uZXxpcG9kfGlwYWQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIGNvbnN0IHNraXBUb3VjaEFjdGlvbmZvclpvb20gPSBldiA9PiB7XG4gICAgICAgIGlmIChldi50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpc18uX19wYWdlRW5kID0gdHJ1ZTtcbiAgICAgIF90aGlzXy5jbGVhbnVwKCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLl9fb2NyVHlwZSkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUpIHtcbiAgICAgICAgX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gdHJ1ZTtcbiAgICAgICAgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgX3RoaXNfLnJlc3RhcnRPQ1IoX3RoaXNfLl9fb2NyVHlwZSwgX3RoaXNfLl9fb25TdWNjZXNzLCBfdGhpc18uX19vbkZhaWx1cmUsIF90aGlzXy5fX29uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lcikge1xuICAgICAgICBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGhhbmRsZVJlc2l6ZSwgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX2RlYnVnKG1zZykge1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX3NsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG4gIF9fYmxvYlRvQmFzZTY0KGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pO1xuICB9XG4gIF9fYmFzZTY0dG9CbG9iKGJhc2U2NCkge1xuICAgIC8vIGNvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nXG4gICAgLy8gZG9lc24ndCBoYW5kbGUgVVJMRW5jb2RlZCBEYXRhVVJJcyAtIHNlZSBTTyBhbnN3ZXIgIzY4NTAyNzYgZm9yIGNvZGUgdGhhdCBkb2VzIHRoaXNcbiAgICBjb25zdCBieXRlU3RyaW5nID0gYXRvYihiYXNlNjQuc3BsaXQoJywnKVsxXSk7XG5cbiAgICAvLyBzZXBhcmF0ZSBvdXQgdGhlIG1pbWUgY29tcG9uZW50XG4gICAgY29uc3QgbWltZVN0cmluZyA9IGJhc2U2NC5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXTtcblxuICAgIC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyXG4gICAgY29uc3QgYWIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIGNvbnN0IGlhID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYWJdLCB7XG4gICAgICB0eXBlOiBtaW1lU3RyaW5nXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19jb21wcmVzZUJhc2U2NEltYWdlKGJhc2U2NCwgb3B0aW9ucywgY29uc3RhbnROdW1iZXIpIHtcbiAgICBpZiAoYmFzZTY0ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBibG9iRmlsZSA9IHRoaXMuX19iYXNlNjR0b0Jsb2IoYmFzZTY0KTtcbiAgICBjb25zdCBjb21wcmVzc2VkID0gYXdhaXQgSW1hZ2VVdGlsLmNvbXByZXNzSW1hZ2UoYmxvYkZpbGUsIG9wdGlvbnMsIGNvbnN0YW50TnVtYmVyKTtcbiAgICBjb25zdCBjb21wcmVzc2lvblJhdGlvID0gTWF0aC5yb3VuZCgoMSAtIGNvbXByZXNzZWQuc2l6ZSAvIGJsb2JGaWxlLnNpemUpICogMTAwMDApIC8gMTAwO1xuICAgIHZvaWQgMDtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fX2Jsb2JUb0Jhc2U2NChjb21wcmVzc2VkKTtcbiAgfVxuXG4gIC8qKiDrnbzsnbTshLzsiqQg7YKk66W8IGhlYXAg7JeQIGFsbG9jYXRpb24gKi9cbiAgX19nZXRTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICghISF0aGlzLl9fbGljZW5zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIEtleSBpcyBlbXB0eScpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGhCeXRlcyA9IHRoaXMuX19PQ1JFbmdpbmUubGVuZ3RoQnl0ZXNVVEY4KHRoaXMuX19saWNlbnNlKSArIDE7XG4gICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MobGVuZ3RoQnl0ZXMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KHRoaXMuX19saWNlbnNlLCB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCwgbGVuZ3RoQnl0ZXMpO1xuICAgIHJldHVybiB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcDtcbiAgfVxuICBfX2VuY3J5cHRTY2FuUmVzdWx0KG9jclJlc3VsdCkge1xuICAgIGxldCBzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiBvY3JSZXN1bHQgPT09ICdudW1iZXInKSBvY3JSZXN1bHQgPSBvY3JSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgIGlmIChvY3JSZXN1bHQgPT09ICcnKSByZXR1cm4gJyc7XG4gICAgICBpZiAodHlwZW9mIG9jclJlc3VsdCAhPT0gJ3N0cmluZycgJiYgISEhb2NyUmVzdWx0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignb2NyUmVzdWx0IGlzIGVtcHR5Jyk7XG4gICAgICB9XG4gICAgICBjb25zdCBqc29uU3RyaW5nID0gb2NyUmVzdWx0O1xuICAgICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLl9fT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOChqc29uU3RyaW5nKSArIDE7XG4gICAgICBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KGpzb25TdHJpbmcsIHN0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lLmVuY3J5cHRSZXN1bHQoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChzdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgIHN0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgbGV0IHJlc29sdXRpb25UZXh0ID0gJ25vdCByZWFkeSc7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX192aWRlb1dpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgdGhpcy5fX3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH07XG4gIH1cbiAgX19nZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGFkZHJlc3MgPSAwO1xuICAgICAgbGV0IGRlc3Ryb3lDYWxsYmFjayA9IG51bGw7XG4gICAgICBjb25zdCBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX2dldFN0cmluZ09uV2FzbUhlYXAoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95SURDYXJkU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRBbGllblNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95QWxpZW5TY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldENyZWRpdFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95Q3JlZGl0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgaWYgKGFkZHJlc3MgPT09IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9PT0gdGhpcy5fX3JldHJ5Q291bnRHZXRBZGRyZXNzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBMaWNlbnNlIEtleScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcysrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFthZGRyZXNzLCBkZXN0cm95Q2FsbGJhY2tdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gOiBMaWNlbnNlIElzc3Vl7J24IOqyveyasCDsl5Drn6wg6rCS7J2EIOuwm+yVhOyEnCBlcnJvciDroZzqt7jrpbwg7LCN7J2EIOyImCDsnojqsowg7JqU7LKt7ZWE7JqUICjsnoTsi5wgTuuyiCDsnbTsg4EgYWRkcmVzc+ulvCDrqrvrsJvsnLzrqbQg6rCV7KCcIOyXkOufrClcbiAgICAgIHZvaWQgMDtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fZ2V0QnVmZmVyKCkge1xuICAgIGlmICghdGhpcy5fX0J1ZmZlcikge1xuICAgICAgdGhpcy5fX0J1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyh0aGlzLl9fcmVzb2x1dGlvbldpZHRoICogdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgKiA0KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9fcmVzdWx0QnVmZmVyKSB7XG4gICAgICB0aGlzLl9fcmVzdWx0QnVmZmVyID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKDQwOTYpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFza0luZm8pIHtcbiAgICAgIGlmICghdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmKSB7XG4gICAgICAgIHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1ZiA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyg0MDk2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt0aGlzLl9fQnVmZmVyLCB0aGlzLl9fcmVzdWx0QnVmZmVyLCB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWZdO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbWFza01vZGUsIGltZ01vZGUsIGltZ1R5cGUgPSAnY2FyZCcpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGltZ1R5cGUgPT09ICdjYXJkJykge1xuICAgICAgICB0aGlzLl9fT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZShhZGRyZXNzLCBtYXNrTW9kZSwgaW1nTW9kZSk7XG4gICAgICB9IGVsc2UgaWYgKGltZ1R5cGUgPT09ICdmYWNlJykge1xuICAgICAgICB0aGlzLl9fT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkUGhvdG9JbWFnZShhZGRyZXNzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGpwZ1NpemUgPSB0aGlzLl9fT0NSRW5naW5lLmdldEVuY29kZWRKcGdTaXplKCk7XG4gICAgICBjb25zdCBqcGdQb2ludGVyID0gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnQnVmZmVyKCk7XG4gICAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fX09DUkVuZ2luZS5IRUFQOC5idWZmZXIsIGpwZ1BvaW50ZXIsIGpwZ1NpemUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0Vmlldyk7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3VsdF0sIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9fYmxvYlRvQmFzZTY0KGJsb2IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUVuY29kZWRKcGcoKTtcbiAgICB9XG4gIH1cblxuICAvKiogRnJlZSBidWZmZXIgKi9cbiAgX19kZXN0cm95QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fQnVmZmVyKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19CdWZmZXIpO1xuICAgICAgdGhpcy5fX0J1ZmZlciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX19kZXN0cm95UmVzdWx0QnVmZmVyKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpO1xuICB9XG4gIF9fZGVzdHJveVJlc3VsdEJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX3Jlc3VsdEJ1ZmZlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fcmVzdWx0QnVmZmVyKTtcbiAgICAgIHRoaXMuX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICBfX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1Zik7XG4gICAgICB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGcmVlIFByZXZJbWFnZSBidWZmZXIgKi9cbiAgX19kZXN0cm95UHJldkltYWdlKCkge1xuICAgIGlmICh0aGlzLl9fUHJldkltYWdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19QcmV2SW1hZ2UpO1xuICAgICAgdGhpcy5fX1ByZXZJbWFnZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIGZyZWUgc3RyaW5nIGhlYXAgYnVmZmVyICovXG4gIF9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogZnJlZSBzY2FubmVyIGFkZHJlc3MgKi9cbiAgX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrKSB7XG4gICAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlb0VsZW1lbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH0gPSBhd2FpdCB0aGlzLl9fc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFJlc29sdXRpb24pIHtcbiAgICAgIGlmIChyZXNvbHV0aW9uVGV4dCAhPT0gJ25vdCByZWFkeScpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSZXNvbHV0aW9uO1xuICB9XG4gIF9fZ2V0Um90YXRpb25EZWdyZWUoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9fb3B0aW9ucy5yb3RhdGlvbkRlZ3JlZSAlIDM2MCArIDM2MCkgJSAzNjA7XG4gIH1cbiAgX19nZXRNaXJyb3JNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucy5taXJyb3JNb2RlO1xuICB9XG4gIGFzeW5jIF9fY3JvcEltYWdlRnJvbVZpZGVvKCkge1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSByZXR1cm4gW251bGwsIG51bGwsIG51bGxdO1xuICAgIGxldCBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcblxuICAgIC8vIHNvdXJjZSBpbWFnZSAob3IgdmlkZW8pXG4gICAgLy8g4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIogc3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIPilIjilIjilIjilIgg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyBzeCAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBzSGVpZ2h0ICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uIGNhbnZhc1xuICAgIC8vIOKUgyAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgICAgICAgIOKUg+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICAgICAgICDilIMgICAg4pSKICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICAgICAgICBzV2lkdGggICAgICAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiBkeSAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyAgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSD4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICBkeCAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBkSGVpZ2h0IOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgIGRXaWR0aCAgICAgICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJtcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSlcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQvZHJhd0ltYWdlXG5cbiAgICBsZXQgY2FsY0NhbnZhcyA9IGNhbnZhcztcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgPSB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoLCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodF0gPSBbY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQsIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGhdO1xuICAgICAgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW2NhbGNSZXNvbHV0aW9uX2gsIGNhbGNSZXNvbHV0aW9uX3ddO1xuICAgICAgY2FsY0NhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgbGV0IGNhbGNNYXhTV2lkdGggPSA5OTk5OTtcbiAgICBsZXQgY2FsY01heFNIZWlnaHQgPSA5OTk5OTtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3gsIHN5O1xuICAgIGNvbnN0IHJhdGlvID0gY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBjb25zdCBzV2lkdGggPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplV2lkdGggKiByYXRpbyksIGNhbGNNYXhTV2lkdGgpO1xuICAgIGNvbnN0IHNIZWlnaHQgPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0ICogcmF0aW8pLCBjYWxjTWF4U0hlaWdodCk7XG4gICAgc3ggPSBNYXRoLm1heChNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRXaWR0aCAtIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGgpIC8gMiAqIHJhdGlvKSwgMCk7XG4gICAgc3kgPSBNYXRoLm1heChNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRIZWlnaHQgLSBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCkgLyAyICogcmF0aW8pLCAwKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgdGhpcy5fX2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCBkZWdyZWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoZGVncmVlID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoW2ltZ0RhdGEsIGltZ0RhdGFVcmxdKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9IGltZ0RhdGFVcmw7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAvLyBjYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgICAgY29uc3QgdGVtcENvbnRleHQgPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRlbXBDYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChbMCwgMTgwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gOTApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcuaGVpZ2h0LCAwKTtlbHNlIGlmIChkZWdyZWUgPT09IDE4MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy53aWR0aCwgaW1nLmhlaWdodCk7ZWxzZSBpZiAoZGVncmVlID09PSAyNzApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZSgwLCBpbWcud2lkdGgpO1xuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBjb25zdCBuZXdJbWFnZURhdGEgPSBbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSA/IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcuaGVpZ2h0LCBpbWcud2lkdGgpIDogdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgICAgIHJlc29sdmUoW25ld0ltYWdlRGF0YSwgdGVtcENhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKV0pO1xuICAgICAgICB0ZW1wQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIGJveFR5cGUgPSAwLCByZXRyeUltZyA9IG51bGwpIHtcbiAgICBpZiAoIWFkZHJlc3MgfHwgYWRkcmVzcyA8IDApIHtcbiAgICAgIHJldHVybiBbZmFsc2UsIG51bGxdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbGV0IGltZ0RhdGE7XG4gICAgICBsZXQgaW1nRGF0YVVybCA9IG51bGw7XG4gICAgICBjb25zdCBbYnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGlmIChyZXRyeUltZyAhPT0gbnVsbCkge1xuICAgICAgICBpbWdEYXRhID0gcmV0cnlJbWc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBbaW1nRGF0YSwgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9fY3JvcEltYWdlRnJvbVZpZGVvKCk7XG4gICAgICB9XG4gICAgICBpZiAoISEhaW1nRGF0YSkge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgYnVmZmVyKTtcbiAgICAgIGxldCBrb3IgPSBmYWxzZSxcbiAgICAgICAgYWxpZW4gPSBmYWxzZSxcbiAgICAgICAgcGFzc3BvcnQgPSBmYWxzZTtcbiAgICAgIHN3aXRjaCAodGhpcy5fX29jclR5cGUpIHtcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGtvciA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBwYXNzcG9ydCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhbGllbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICAgIH1cbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKGtvciB8fCBwYXNzcG9ydCB8fCBhbGllbikge1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmRldGVjdF9pZGNhcmRfb3B0KGJ1ZmZlciwgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIGFkZHJlc3MsIGtvciwgYWxpZW4sIHBhc3Nwb3J0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuZGV0ZWN0X2lkY2FyZChidWZmZXIsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCBhZGRyZXNzLCBib3hUeXBlKTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQ2FyZGJveERldGVjdGVkIHJlc3VsdCAtPS0tLS0tJywgcmVzdWx0KVxuICAgICAgcmV0dXJuIFshIXJlc3VsdCwgaW1nRGF0YSwgaW1nRGF0YVVybF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgc3NhTW9kZSwgaXNTZXRJZ25vcmVDb21wbGV0ZSwgaW1nRGF0YSwgaW1nRGF0YVVybCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWRkcmVzcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IGVsc2UgaWYgKGFkZHJlc3MgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnY2hlY2tWYWxpZGF0aW9uIEZhaWwnO1xuICAgICAgfVxuICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuX19vY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IHJlY29nbml0aW9uID0gYXN5bmMgaXNTZXRJZ25vcmVDb21wbGV0ZSA9PiB7XG4gICAgICAgIGlmIChpc1NldElnbm9yZUNvbXBsZXRlKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDAsIGltZ0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbklEQ2FyZChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuUGFzc3BvcnQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQWxpZW4oYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5DcmVkaXQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiDsi6DsmqnsubTrk5zripQg7JWE7KeBIGtleTp2YWx1ZSDtmJXtg5zroZwg67OA7ZmYIOyViOuQmOyWtCDsnojsnYxcbiAgICAgICAgaWYgKG9jclR5cGUgPT09ICdjcmVkaXQnKSB7XG4gICAgICAgICAgaWYgKG9jclJlc3VsdCA9PT0gbnVsbCB8fCBvY3JSZXN1bHQgPT09ICcnIHx8IG9jclJlc3VsdCA9PT0gJ2ZhbHNlJyB8fCBvY3JSZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19jc3ZUb09iamVjdChvY3JSZXN1bHQpO1xuICAgICAgICBpZiAob2NyUmVzdWx0Py5jb21wbGV0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgb2NyUmVzdWx0Py5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzU2V0SWdub3JlQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA8IHRoaXMuX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50KSB7XG4gICAgICAgICAgICAgIC8vIGRldGVjdGVkQ2FyZFF1ZXVl7JeQ7IScIO2VnOyepeydhCDqurzrgrTshJwg6rCx7Iug7ZWc64ukLlxuICAgICAgICAgICAgICAvLyDsoIDsnqXrkJjslrTsnojripQg7J2066+47KeA7J2YIOyIq+yekOqwgCByZXRyeSDrs7Tri6Qg7J6R7J2A6rK97JqwIOuMgOu5hO2VmOyXrCAl66W8IOyCrOyaqe2VqFxuICAgICAgICAgICAgICBjb25zdCBxdWV1ZUlkeCA9IHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50ICUgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgaW1nRGF0YSA9IHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZVtxdWV1ZUlkeF07XG4gICAgICAgICAgICAgIHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICAgIHJldHVybiBhd2FpdCByZWNvZ25pdGlvbihpc1NldElnbm9yZUNvbXBsZXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIOyCrOynhCDtlZzsnqXsnLzroZwgT0NSIOyLpO2MqCAocG9wdXAg64K066as6rOgIHNldElnbm9yZUNvbXBsZXRlKGZhbHNlKSDsspjrpqw/XG4gICAgICAgICAgICAgIHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7XG4gICAgICAgICAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpOyAvLyDtjJ3sl4XsnbQg64K066Ck6rCI65WMIOyymOumrOuQmOyngOunjCDrr7jrpqwg7LKY66asXG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCwgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS52aWRlbywge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyBlbmQgb2YgZnVuY3Rpb24gcmVjb2duaXRpb24oKVxuXG4gICAgICBpZiAoYXdhaXQgcmVjb2duaXRpb24oaXNTZXRJZ25vcmVDb21wbGV0ZSkpIHtcbiAgICAgICAgY29uc3QgaXNDcmVkaXRDYXJkID0gb2NyVHlwZSA9PT0gJ2NyZWRpdCc7XG4gICAgICAgIGxldCBvY3JJbWFnZU1vZGU7XG4gICAgICAgIGlmIChpc0NyZWRpdENhcmQpIHtcbiAgICAgICAgICBvY3JJbWFnZU1vZGUgPSB0aGlzLk9DUl9JTUdfTU9ERS5DUk9QUElORztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9fb3B0aW9ucy51c2VJbWFnZVdhcnBpbmcpIHtcbiAgICAgICAgICBvY3JJbWFnZU1vZGUgPSB0aGlzLk9DUl9JTUdfTU9ERS5XQVJQSU5HO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9jckltYWdlTW9kZSA9IHRoaXMuT0NSX0lNR19NT0RFLk5PTkU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9yaWdpbkltYWdlID0gYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRoaXMuT0NSX0lNR19NQVNLX01PREUuRkFMU0UsIG9jckltYWdlTW9kZSk7XG4gICAgICAgIGxldCBtYXNrSW1hZ2UgPSBudWxsO1xuICAgICAgICBsZXQgZmFjZUltYWdlID0gbnVsbDtcbiAgICAgICAgaWYgKCFpc0NyZWRpdENhcmQpIHtcbiAgICAgICAgICBtYXNrSW1hZ2UgPSBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdGhpcy5PQ1JfSU1HX01BU0tfTU9ERS5UUlVFLCB0aGlzLk9DUl9JTUdfTU9ERS5XQVJQSU5HKTtcbiAgICAgICAgICBtYXNrSW1hZ2UgPSBtYXNrSW1hZ2UgPT09ICdkYXRhOicgPyBudWxsIDogbWFza0ltYWdlO1xuICAgICAgICAgIGZhY2VJbWFnZSA9IHRoaXMuX19vcHRpb25zLnVzZUZhY2VJbWFnZSA/IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBudWxsLCBvY3JJbWFnZU1vZGUsICdmYWNlJykgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzc2FNb2RlKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EsIGZhbHNlLCBtYXNrSW1hZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW29jclJlc3VsdCwgb3JpZ2luSW1hZ2UsIG1hc2tJbWFnZSwgZmFjZUltYWdlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGwsIG51bGwsIG51bGxdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAob2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMSkge1xuICAgICAgICAvLyBUT0RPOiB3b3JrZXLrpbwg7IKs7Jqp7ZWY7JesIOuplOyduChVSSDrnpzrjZTrp4EpIOyKpOugiOuTnOqwgCDrqYjstpTsp4Ag7JWK64+E66GdIOyymOumrCDtlYTsmpQgKO2YhOyerCBsb2FkaW5nIFVJIOudhOyasOuptCDslaDri4jrqZTsnbTshZgg66mI7LakKVxuICAgICAgICAvLyBUT0RPOiBzZXRUaW1lb3V0IOycvOuhnCDrgpjriITrjZTrnbzrj4Qg7Zqo6rO8IOyXhuydjCBzZXRUaW1lb3V0IOyngOyasOqzoCwgd29ya2Vy66GcIOuzgOqyvSDtlYTsmpRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLl9fT0NSRW5naW5lLnNjYW5UcnV0aChhZGRyZXNzLCByZXN1bHRCdWZmZXIpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NTQSBNb2RlIGlzIHRydWUuIGJ1dCwgb2NyVHlwZSBpcyBpbnZhbGlkIDogJyArIG9jclR5cGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX2NzdlRvT2JqZWN0KHN0cikge1xuICAgIGxldCBwYWlycyA9IHN0ci5zcGxpdCgnOycpO1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG4gICAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIG9ialtwYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgX19nZXRNYXNrSW5mbyhhZGRyZXNzKSB7XG4gICAgaWYgKGFkZHJlc3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAnY2hlY2tWYWxpZGF0aW9uIEZhaWwnO1xuICAgIH1cbiAgICBjb25zdCBbLCwgbWFza0luZm9SZXN1bHRCdWZdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIHJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0TWFza1JlY3QoYWRkcmVzcywgbWFza0luZm9SZXN1bHRCdWYpO1xuICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCByZXN1bHQgPT09ICcnKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5fX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpO1xuXG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9fY3N2VG9PYmplY3QocmVzdWx0KTtcbiAgfVxuICBhc3luYyBfX3N0YXJ0VHJ1dGhSZXRyeShvY3JUeXBlLCBhZGRyZXNzLCBpbWdEYXRhKSB7XG4gICAgYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDAsIGltZ0RhdGEpO1xuICAgIC8vIGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHRydWUpOyAgICAgIC8vIGZvciDshLHriqXsnYQg7JyE7ZW0IOynhO2WiSBYXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX19zdGFydFRydXRoKG9jclR5cGUsIGFkZHJlc3MpO1xuICB9XG4gIF9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy5fX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgYXN5bmMgX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy5fX29jclR5cGUuaW5jbHVkZXMoJ3Bhc3Nwb3J0Jyk7XG4gICAgICBhd2FpdCB0aGlzLl9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgIC8vIGNvbnN0IFt0cmFja10gPSB0aGlzLl9fc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW5fX2luaXRpYWxpemUgY2FwYWJpbGl0eScsIGNhcGFiaWxpdHkpO1xuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gdmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSB0aGlzLl9fc3RyZWFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEF2b2lkIHVzaW5nIHRoaXMgaW4gbmV3IGJyb3dzZXJzLCBhcyBpdCBpcyBnb2luZyBhd2F5LlxuICAgICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuX19zdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9IHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlby52aWRlb0hlaWdodCA8IDEgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgdmlkZW8ud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYW1lcmEgQWNjZXNzIFBlcm1pc3Npb24gaXMgbm90IGFsbG93ZWQnO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoJ0U0MDMnLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdOb3RSZWFkYWJsZUVycm9yJykge1xuICAgICAgICAvLyDri6Trpbjqs7Psl5DshJwg7Lm066mU6528IOyekOybkOydhCDsgqzsmqnspJFcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7IC8vIOyerOq3gCDtmLjstpxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfX3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIGlmIChlbCAmJiBzdHlsZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgc3R5bGUpO1xuICAgIH1cbiAgfVxuICBfX2NoYW5nZU9DUlN0YXR1cyh2YWwpIHtcbiAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgLy8gT0NSXG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuUkVBRFk6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUzpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQTpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLkRPTkU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2NoYW5nZVN0YWdlKHZhbCwgZm9yY2VVcGRhdGUgPSBmYWxzZSwgcmVjb2duaXplZEltYWdlID0gbnVsbCkge1xuICAgIGlmICh0aGlzLl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9PT0gdmFsICYmIGZvcmNlVXBkYXRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fY2hhbmdlT0NSU3RhdHVzKHZhbCk7XG4gICAgdGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB2YWw7XG4gICAgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIGNvbnN0IHtcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5zdHlsZSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXVxuICAgIH07XG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHN0eWxlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlKSB7XG4gICAgICBpZiAoISF0aGlzLl9fb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hc2tCb3hXcmFwPy5xdWVyeVNlbGVjdG9yKCcjbWFza0JveE91dGVyJyk/LnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlW3ZhbF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB7XG4gICAgICBjYXB0dXJlQnV0dG9uPy5xdWVyeVNlbGVjdG9yKCcjY2FwdHVyZUJ1dHRvbicpPy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLl9fb3B0aW9ucy5jYXB0dXJlQnV0dG9uU3R5bGVbJ2Jhc2VfY29sb3InXSk7XG4gICAgfVxuICAgIGNvbnN0IG9jck1vZGUgPSB0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUgPyAnc2VydmVyJyA6ICd3YXNtJztcbiAgICBpZiAodGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVRvcFVJIHx8IHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgb2NyTW9kZSwgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX3RvcFVJLCAndG9wJywgdGhpcy5fX29wdGlvbnMudXNlVG9wVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUksIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIG9jck1vZGUsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX19taWRkbGVVSSwgJ21pZGRsZScsIHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCBvY3JNb2RlLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fYm90dG9tVUksICdib3R0b20nLCB0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSwgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MgfHwgdmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSk7XG5cbiAgICAgICAgLy8gRkFJTOyduCDqsr3smrAgNey0iO2bhCDsnpDrj5nsnYQg7LC964ur7J2MXG4gICAgICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVEKSB7XG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLl9faGlkZVByZXZpZXdVSSwgMzAwMCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX19oaWRlUHJldmlld1VJKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxKTsgLy8gZm9yIFVJIHVwZGF0ZVxuICB9XG5cbiAgX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSByZWNvZ25pemVkSW1hZ2U7XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICAnbWF4LXdpZHRoJzogJzcwJScsXG4gICAgICAnbWF4LWhlaWdodCc6ICc2MCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld0ltYWdlLCBpbWdTdHlsZSk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0pO1xuICB9XG4gIF9faGlkZVByZXZpZXdVSShjb250ZXh0KSB7XG4gICAgbGV0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIF90aGlzXyA9IGNvbnRleHQ7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIF90aGlzXy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSk7XG4gICAgX3RoaXNfLl9fc2V0U3R5bGUocHJldmlld1VJV3JhcCwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG4gICAgcHJldmlld0ltYWdlLnNyYyA9ICcnO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW5wdXREZXZpY2VzKCkge1xuICAgIC8vIHRocm93IGVycm9yIGlmIG5hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZFxuICAgIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIGxldCBjYW1lcmEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRldmljZSBvZiBkZXZpY2VzKSB7XG4gICAgICBpZiAoZGV2aWNlLmtpbmQgPT09ICd2aWRlb2lucHV0Jykge1xuICAgICAgICBpZiAoZGV2aWNlLmdldENhcGFiaWxpdGllcykge1xuICAgICAgICAgIGNvbnN0IGNhcCA9IGRldmljZS5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgICBpZiAoY2FwPy5mYWNpbmdNb2RlPy5pbmNsdWRlcyh0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgICBjYW1lcmEucHVzaChjYXAuZGV2aWNlSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG4gIGNoZWNrVUlPcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZGV0ZWN0b3IuZ2V0VUlPcmllbnRhdGlvbihkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm9jcik7XG4gICAgbGV0IGlzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50ICE9PSB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24pIHtcbiAgICAgIHRoaXMuX191aU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIHRoaXMuX19wcmV2VWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICBpc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudCxcbiAgICAgIGlzQ2hhbmdlZFxuICAgIH07XG4gIH1cbiAgX19jbGVhckN1c3RvbVVJKG9iaikge1xuICAgIG9iai5pbm5lckhUTUwgPSAnJztcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIG9iai5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKG9iaiwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19zZXR1cERvbUVsZW1lbnRzKCkge1xuICAgIGxldCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICB2aWRlb1dyYXAsXG4gICAgICBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLFxuICAgICAgY3VzdG9tVUlXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgY2FwdHVyZVVJV3JhcCxcbiAgICAgIGNhcHR1cmVVSSxcbiAgICAgIGNhcHR1cmVCdXR0b24sXG4gICAgICBwcmV2aWV3VUlXcmFwLFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlLFxuICAgICAgc3dpdGNoVUlXcmFwLFxuICAgICAgc3dpdGNoVUlcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoIW9jcikgdGhyb3cgbmV3IEVycm9yKCdvY3IgZGl2IGVsZW1lbnQgaXMgbm90IGV4aXN0Jyk7XG4gICAgaWYgKHZpZGVvV3JhcCkgdmlkZW9XcmFwLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveFdyYXApIGd1aWRlQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAodmlkZW8pIHZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjYW52YXMpIGNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAocm90YXRpb25DYW52YXMpIHJvdGF0aW9uQ2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveCkgZ3VpZGVCb3gucmVtb3ZlKCk7XG4gICAgaWYgKG1hc2tCb3hXcmFwKSBtYXNrQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAocHJldmVudFRvRnJlZXplVmlkZW8pIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjdXN0b21VSVdyYXApIGN1c3RvbVVJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHRvcFVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkodG9wVUkpO1xuICAgIGlmIChtaWRkbGVVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKG1pZGRsZVVJKTtcbiAgICBpZiAoYm90dG9tVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShib3R0b21VSSk7XG4gICAgaWYgKGNhcHR1cmVVSVdyYXApIGNhcHR1cmVVSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8gY2FwdHVyZSBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKGNhcHR1cmVVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShjYXB0dXJlVUkpO1xuICAgIGlmIChwcmV2aWV3VUlXcmFwKSBwcmV2aWV3VUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIHByZXZpZXcgVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmIChwcmV2aWV3VUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkocHJldmlld1VJKTtcbiAgICBpZiAoc3dpdGNoVUlXcmFwKSBzd2l0Y2hVSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8gc3dpdGNoIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAoc3dpdGNoVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkoc3dpdGNoVUkpO1xuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy5fX2dldFJvdGF0aW9uRGVncmVlKCk7XG4gICAgdGhpcy5fX2lzUm90YXRlZDkwb3IyNzAgPSBbOTAsIDI3MF0uaW5jbHVkZXMocm90YXRpb25EZWdyZWUpO1xuICAgIGxldCBvY3JTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKG9jciwgb2NyU3R5bGUpO1xuICAgIGNvbnN0IHdyYXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9O1xuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlb1dyYXAsIHdyYXBTdHlsZSk7XG4gICAgfVxuICAgIG9jci5hcHBlbmRDaGlsZCh2aWRlb1dyYXApO1xuICAgIG1hc2tCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21hc2tCb3hXcmFwJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKG1hc2tCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIGxldCBtYXNrX2ZyYW1lID0gdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGUuYmFzZV9jb2xvciArICdmZic7XG4gICAgaWYgKCEhdGhpcy5fX29wdGlvbnMuc2hvd0NsaXBGcmFtZSkge1xuICAgICAgbWFza19mcmFtZSA9IHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlLmNsaXBfZnJhbWUgKyAnNTUnO1xuICAgIH1cbiAgICBtYXNrQm94V3JhcC5pbm5lckhUTUwgPSAnJyArIFwiICA8c3ZnIGlkPSdtYXNrQm94Q29udGFpbmVyJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxcblwiICsgXCIgICAgPG1hc2sgaWQ9J21hc2stcmVjdCc+XFxuXCIgKyBcIiAgICAgIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3doaXRlJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDxzdmcgeD0nNTAlJyB5PSc1MCUnIG92ZXJmbG93PSd2aXNpYmxlJz5cXG5cIiArIFwiICAgICAgICAgIDxyZWN0IGlkPSdtYXNrQm94SW5uZXInXFxuXCIgKyBcIiAgICAgICAgICAgIHdpZHRoPSc0MDAnIGhlaWdodD0nMjYwJ1xcblwiICsgXCIgICAgICAgICAgICB4PSctMjAwJyB5PSctMTMwJ1xcblwiICsgXCIgICAgICAgICAgICByeD0nMTAnIHJ5PScxMCdcXG5cIiArIFwiICAgICAgICAgICAgZmlsbD0nYmxhY2snIHN0cm9rZT0nYmxhY2snPjwvcmVjdD5cXG5cIiArICcgICAgICA8L3N2Zz5cXG4nICsgJyAgICA8L21hc2s+XFxuJyArIFwiICAgIDxyZWN0IGlkPSdtYXNrQm94T3V0ZXInXFxuXCIgKyBcIiAgICAgICAgICB4PScwJyB5PScwJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJ1xcblwiICsgXCIgICAgICAgICAgZmlsbD0nXCIgKyBtYXNrX2ZyYW1lICsgXCInIG1hc2s9J3VybCgjbWFzay1yZWN0KSc+PC9yZWN0PlxcblwiICsgJyAgPC9zdmc+JztcbiAgICBvY3IuYXBwZW5kQ2hpbGQobWFza0JveFdyYXApO1xuICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW8nKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ3RydWUnKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgJ3RydWUnKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJ3RydWUnKTtcbiAgICBsZXQgdmlkZW9TdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH07XG4gICAgY29uc3Qgcm90YXRlQ3NzID0gJ3JvdGF0ZSgnICsgcm90YXRpb25EZWdyZWUgKyAnZGVnKSc7XG4gICAgY29uc3QgbWlycm9yQ3NzID0gJ3JvdGF0ZVkoMTgwZGVnKSc7XG4gICAgY29uc3Qgcm90YXRlQW5kTWlycm9yQ3NzID0gbWlycm9yQ3NzICsgJyAnICsgcm90YXRlQ3NzO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgaWYgKHRoaXMuX19nZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZUFuZE1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZUNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fX2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgIHRyYW5zZm9ybTogbWlycm9yQ3NzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywgdmlkZW9TdHlsZSk7XG4gICAgdmlkZW9XcmFwLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGd1aWRlQm94V3JhcCk7XG4gICAgZ3VpZGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnZ3VpZGVCb3gnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9KTtcbiAgICBndWlkZUJveFdyYXAuYXBwZW5kQ2hpbGQoZ3VpZGVCb3gpO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FudmFzJyk7XG4gICAgY29uc3QgY2FudmFzU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLl9fb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID8gJ25vbmUnIDogJ2Rpc3BsYXknIDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcyNSUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnZ3JlZW4gMnB4IHNvbGlkJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKGNhbnZhcywgY2FudmFzU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHJvdGF0aW9uQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcm90YXRpb25DYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3JvdGF0aW9uQ2FudmFzJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHJvdGF0aW9uQ2FudmFzLCB7XG4gICAgICBkaXNwbGF5OiB0aGlzLl9fb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID8gJ2Rpc3BsYXknIDogJ25vbmUnIDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMzBweCcsXG4gICAgICBib3JkZXI6ICdibHVlIDJweCBzb2xpZCdcbiAgICB9KTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQocm90YXRpb25DYW52YXMpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZlbnRUb0ZyZWV6ZVZpZGVvJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZlbnRUb0ZyZWV6ZVZpZGVvLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgIHJpZ2h0OiAnMTAnXG4gICAgfSk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uaW5uZXJIVE1MID0gJycgKyAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgc3R5bGU9XCJtYXJnaW46IGF1dG87IGJhY2tncm91bmQ6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XCIgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiPlxcbicgKyAnICA8Y2lyY2xlIGN4PVwiODRcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMC41NTU1NTU1NTU1NTU1NTU2c1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzFcIiB2YWx1ZXM9XCIxMDswXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiZmlsbFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cImRpc2NyZXRlXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjE2XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMC41NTU1NTU1NTU1NTU1NTU2c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCI4NFwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS4xMTExMTExMTExMTExMTEyc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjExMTExMTExMTExMTExMTJzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjE2XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjY2NjY2NjY2NjY2NjY2NjVzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPic7XG4gICAgJzwvc3ZnPic7XG4gICAgb2NyLmFwcGVuZENoaWxkKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKTtcbiAgICBjdXN0b21VSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXN0b21VSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2N1c3RvbVVJV3JhcCcpO1xuICAgIGNvbnN0IGN1c3RvbVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjdXN0b21VSVdyYXAsIGN1c3RvbVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY3VzdG9tVUlXcmFwKTtcblxuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJIOyCrOyaqSh1c2Up7Jes67aA7JmAIOq0gOqzhOyXhuydtCDsmIHsl63snYQg7J6h6riwIOychO2VtCwgZGl26rCAIOyXhuycvOuptCDsg53shLFcbiAgICAvLyBhZGp1c3RTdHlsZSgpIOyXkOyEnCDshLjrtoDsoIHsnbgg7IKs7J207KaI7JmAIOychOy5mOqwkiDrj5nsoIHsnLzroZwg7ISk7KCV65CoLlxuICAgIGlmICghdG9wVUkpIHtcbiAgICAgIHRvcFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndG9wVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKHRvcFVJKTtcbiAgICBpZiAoIW1pZGRsZVVJKSB7XG4gICAgICBtaWRkbGVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWlkZGxlVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21pZGRsZVVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZChtaWRkbGVVSSk7XG4gICAgaWYgKCFib3R0b21VSSkge1xuICAgICAgYm90dG9tVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJvdHRvbVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdib3R0b21VSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQoYm90dG9tVUkpO1xuICAgIGNhcHR1cmVVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXB0dXJlVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYXB0dXJlVUlXcmFwJyk7XG4gICAgY29uc3QgY2FwdHVyZVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NlbnRlcidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCBjYXB0dXJlVUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYXB0dXJlVUlXcmFwKTtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB7XG4gICAgICBpZiAodGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlIHx8IHRoaXMuX19vcHRpb25zLnVzZUZvcmNlQ29tcGxldGVVSSkge1xuICAgICAgICBpZiAoIWNhcHR1cmVVSSkge1xuICAgICAgICAgIGNhcHR1cmVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNhcHR1cmVVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FwdHVyZVVJJyk7XG4gICAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhcHR1cmVCdXR0b24pIHtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FwdHVyZUJ1dHRvbicpO1xuICAgICAgICAgIGxldCBjYXB0dXJlQnV0dG9uU3JjU1ZHID0gYGA7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgPHN2ZyB3aWR0aD0nODAnIGhlaWdodD0nODAnIHZpZXdCb3g9JzAgMCA4MCA4MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5gO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b25TcmNTVkcgKz0gYCAgPGNpcmNsZSBpZD0nY2FwdHVyZUJ1dHRvbicgY3g9JzQwJyBjeT0nNDAnIHI9JzM4JyBmaWxsPScjNTU1NTU1JyBzdHJva2U9JyNmZmZmZmYnIHN0cm9rZS13aWR0aD0nNCcvPmA7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgPC9zdmc+YDtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uLmlubmVySFRNTCA9IGNhcHR1cmVCdXR0b25TcmNTVkc7XG4gICAgICAgICAgY2FwdHVyZVVJLmFwcGVuZENoaWxkKGNhcHR1cmVCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIGNhcHR1cmVVSVdyYXAuYXBwZW5kQ2hpbGQoY2FwdHVyZVVJKTtcbiAgICAgICAgY29uc3QgX3RoaXNfID0gdGhpcztcbiAgICAgICAgY29uc3QgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXNfLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgICAgICAgIGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgX3RoaXNfLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgX3RoaXNfLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS52aWRlbywge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXNfLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgIHByZXZpZXdVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByZXZpZXdVSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdVSVdyYXAnKTtcbiAgICAgIGNvbnN0IHByZXZpZXdVSVdyYXBTdHlsZSA9IHtcbiAgICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMDAwMDAwYWEnXG4gICAgICB9O1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHByZXZpZXdVSVdyYXBTdHlsZSk7XG4gICAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmlld1VJV3JhcCk7XG4gICAgICBpZiAoIXByZXZpZXdVSSkge1xuICAgICAgICBwcmV2aWV3VUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJldmlld1VJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUknKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAnbWF4LXdpZHRoJzogJzkwJScsXG4gICAgICAgICdtYXgtaGVpZ2h0JzogJzkwJSdcbiAgICAgIH0pO1xuICAgICAgcHJldmlld1VJV3JhcC5hcHBlbmRDaGlsZChwcmV2aWV3VUkpO1xuICAgICAgaWYgKCFwcmV2aWV3SW1hZ2UpIHtcbiAgICAgICAgcHJldmlld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld0ltYWdlJyk7XG4gICAgICAgIHByZXZpZXdVSS5hcHBlbmRDaGlsZChwcmV2aWV3SW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICBzd2l0Y2hVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHN3aXRjaFVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnc3dpdGNoVUlXcmFwJyk7XG4gICAgICBjb25zdCBzd2l0Y2hVSVdyYXBTdHlsZSA9IHtcbiAgICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICcnLFxuICAgICAgICB3aWR0aDogJycsXG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShzd2l0Y2hVSVdyYXAsIHN3aXRjaFVJV3JhcFN0eWxlKTtcbiAgICAgIG9jci5hcHBlbmRDaGlsZChzd2l0Y2hVSVdyYXApO1xuICAgICAgaWYgKCFzd2l0Y2hVSSkge1xuICAgICAgICBzd2l0Y2hVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzd2l0Y2hVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnc3dpdGNoVUknKTtcbiAgICAgICAgbGV0IHN3aXRjaEhUTUwgPSBgYDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgPGRpdiBjbGFzcz0nY3VzdG9tLS1sYWJlbCBmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBnYXAxMCc+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8bGFiZWwgZm9yPSdtYW51YWwtc3dpdGNoLXdhc20tdG8tc2VydmVyLWNoZWNrYm94Jz5XQVNNPC9sYWJlbD5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGAgIDxsYWJlbCBjbGFzcz0nc3dpdGNoJz5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGAgICAgPGlucHV0IGlkPSdtYW51YWwtc3dpdGNoLXdhc20tdG8tc2VydmVyLWNoZWNrYm94JyB0eXBlPSdjaGVja2JveCc+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICAgIDxzcGFuIGNsYXNzPSdzbGlkZXIgcm91bmQnPjwvc3Bhbj5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGAgIDwvbGFiZWw+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8bGFiZWwgZm9yPSdwcmlvcml0eS1maW5hbmNlLWNvaHRtbEZvcmxpc3QtY2hlY2tib3gnPlNlcnZlcjwvbGFiZWw+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgPC9kaXY+YDtcbiAgICAgICAgc3dpdGNoVUkuaW5uZXJIVE1MID0gc3dpdGNoSFRNTDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zZXRTdHlsZShzd2l0Y2hVSSwge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgIH0pO1xuICAgICAgc3dpdGNoVUlXcmFwLmFwcGVuZENoaWxkKHN3aXRjaFVJKTtcbiAgICAgIGNvbnN0IHN3aXRjaENoZWNrYm94ID0gc3dpdGNoVUkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgICAgY29uc3QgX19vbkNsaWNrU3dpdGNoVUkgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXNfLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgYXdhaXQgX3RoaXNfLnJlc3RhcnRPQ1IoX3RoaXNfLl9fb2NyVHlwZSwgX3RoaXNfLl9fb25TdWNjZXNzLCBfdGhpc18uX19vbkZhaWx1cmUsIF90aGlzXy5fX29uSW5Qcm9ncmVzc0NoYW5nZSwgdHJ1ZSk7XG4gICAgICB9O1xuICAgICAgc3dpdGNoQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX29uQ2xpY2tTd2l0Y2hVSSwge1xuICAgICAgICBvbmNlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBsb2FkaW5nIFVJIOychOy5mCDsnpDrpqzsnqHqsowg7ZWY6riwIOychO2VtFxuICAgIGF3YWl0IHRoaXMuX19pbml0U3R5bGUoKTtcblxuICAgIC8vIO2ZlOuptOqzvOuPhCDtmITsg4Eg7ZW06rKwXG4gICAgdGhpcy5fX3NldFN0eWxlKG9jciwge1xuICAgICAgZGlzcGxheTogJydcbiAgICB9KTtcbiAgICB0aGlzLl9fb2NyID0gb2NyO1xuICAgIHRoaXMuX19jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5fX3JvdGF0aW9uQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgdGhpcy5fX3ZpZGVvID0gdmlkZW87XG4gICAgdGhpcy5fX3ZpZGVvV3JhcCA9IHZpZGVvV3JhcDtcbiAgICB0aGlzLl9fZ3VpZGVCb3ggPSBndWlkZUJveDtcbiAgICB0aGlzLl9fZ3VpZGVCb3hXcmFwID0gZ3VpZGVCb3hXcmFwO1xuICAgIHRoaXMuX19tYXNrQm94V3JhcCA9IG1hc2tCb3hXcmFwO1xuICAgIHRoaXMuX19wcmV2ZW50VG9GcmVlemVWaWRlbyA9IHByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICAgIHRoaXMuX19jdXN0b21VSVdyYXAgPSBjdXN0b21VSVdyYXA7XG4gICAgdGhpcy5fX3RvcFVJID0gdG9wVUk7XG4gICAgdGhpcy5fX21pZGRsZVVJID0gbWlkZGxlVUk7XG4gICAgdGhpcy5fX2JvdHRvbVVJID0gYm90dG9tVUk7XG4gICAgdGhpcy5fX2NhcHR1cmVVSVdyYXAgPSBjYXB0dXJlVUlXcmFwO1xuICAgIHRoaXMuX19jYXB0dXJlVUkgPSBjYXB0dXJlVUk7XG4gICAgdGhpcy5fX2NhcHR1cmVCdXR0b24gPSBjYXB0dXJlQnV0dG9uO1xuICAgIHRoaXMuX19wcmV2aWV3VUlXcmFwID0gcHJldmlld1VJV3JhcDtcbiAgICB0aGlzLl9fcHJldmlld1VJID0gcHJldmlld1VJO1xuICAgIHRoaXMuX19wcmV2aWV3SW1hZ2UgPSBwcmV2aWV3SW1hZ2U7XG4gICAgdGhpcy5fX3N3aXRjaFVJV3JhcCA9IHN3aXRjaFVJV3JhcDtcbiAgICB0aGlzLl9fc3dpdGNoVUkgPSBzd2l0Y2hVSTtcbiAgICByZXR1cm4ge1xuICAgICAgb2NyLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICB2aWRlbyxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZSxcbiAgICAgIHN3aXRjaFVJV3JhcCxcbiAgICAgIHN3aXRjaFVJXG4gICAgfTtcbiAgfVxuICBfX2JsdXJDYXB0dXJlQnV0dG9uKCkge1xuICAgIHRoaXMuX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnZpZGVvLCB7XG4gICAgICBkaXNwbGF5OiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IHtcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FwdHVyZUJ1dHRvbikge1xuICAgICAgY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlQnV0dG9uLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICByZXR1cm4gY2FwdHVyZUJ1dHRvbiA/IGNhcHR1cmVCdXR0b24uZ2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJykgPT09ICd0cnVlJyA6IGZhbHNlO1xuICB9XG4gIGFzeW5jIF9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KSB7XG4gICAgLy8gd2FzbSDsnbjsi53shLHriqUg7LWc7KCB7ZmU65CcIO2VtOyDgeuPhFxuICAgIHRoaXMuX19yZXNvbHV0aW9uV2lkdGggPSAxMDgwO1xuICAgIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ID0gNzIwO1xuICAgIHRoaXMuX19jYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gYXdhaXQgdGhpcy5fX3NldHVwRG9tRWxlbWVudHMoKTtcbiAgICBsZXQgY2FtZXJhID0gYXdhaXQgdGhpcy5fX2dldElucHV0RGV2aWNlcygpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb0RldmljZXMgOjogJywgY2FtZXJhKVxuXG4gICAgdGhpcy5jaGVja1VJT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29uc3RyYWludFdpZHRoLCBjb25zdHJhaW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy5jYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWEgPT09ICdoaWdoUXVhbGl0eScpIHtcbiAgICAgIC8vIOy5tOuplOudvCDtlbTsg4Hrj4Qg7ISk7KCVIDog7ZmU7KeIIOyasOyEoFxuICAgICAgLy8gMTkyMHgxMDgw7J20IOqwgOuKpe2VnOqyveyasCDsgqzsmqkg7JWE64uI66m0IDEyODB4NzIwIOyCrOyaqVxuICAgICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAgIC8vIHVpIDogcG9ydHJhaXRcbiAgICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICAgIG1pbjogMTA4MCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgICAgbWluOiA3MjAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVpIDogbGFuZHNjYXBlXG4gICAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgICBtaW46IDEyODBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgICBtaW46IDcyMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyAnY29tcGF0aWJpbGl0eSdcbiAgICAgIC8vIOy5tOuplOudvCDtlbTsg4Hrj4Qg7ISk7KCVIDog7Zi47ZmY7ISxIOyasOyEoFxuICAgICAgLy8gMTkyMHgxMDgw7J20IOyCrOyaqSDqsIDriqXtlZjrjZTrnbzrj4QgMTI4MHg3MjDsnYQg7IKs7Jqp7ZWY64+E66GdIOqzoOyglVxuICAgICAgLy8g7IKs7JygIDog6rCk65+t7IucIGVudHJ5IOuqqOuNuChB7Iuc66as7KaIIC8gV2lkZSDrqqjrjbgg65OxKeyXkOyEnCAxOTIwIHggMTA4MCDsspjrpqzsi5wg67mE7Jyo7J20IOydtOyDge2VtOynkCjtmYDsrYnsnbTrkKgpXG4gICAgICAvLyDtla3sg4EgMTI4MCB4IDcyMOydhCDsgqzsmqntlZjrj4TroZ0g67OA6rK9XG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxMjgwXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDcyMFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB2aWRlbzoge1xuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgaWRlYWw6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZmFjaW5nTW9kZToge1xuICAgICAgICAgIGlkZWFsOiB0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnRcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICB3aGl0ZUJhbGFuY2VNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2VJZDogY2FtZXJhLmxlbmd0aCA/IHtcbiAgICAgICAgICBpZGVhbDogY2FtZXJhW2NhbWVyYS5sZW5ndGggLSAxXVxuICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgd2lkdGg6IGNvbnN0cmFpbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb25zdHJhaW50SGVpZ2h0XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOy1nOy0iCDsp4TsnoUg7J207Ja07IScIHZpZGVvRGVpdmNlIOumrOyKpO2KuOulvCDqsIDsoLjsmKwg7IiYIOyXhuycvOuptCxcbiAgICAvLyBnZXRVc2VyTWVkaWHrpbwg7J6E7J2YIO2YuOy2nO2VmOyXrCDqtoztlZzsnYQg67Cb7J2A65KkIOuLpOyLnCDqsIDsoLjsmLRcbiAgICBpZiAoY2FtZXJhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgY2FtZXJhID0gYXdhaXQgdGhpcy5fX2dldElucHV0RGV2aWNlcygpO1xuICAgICAgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSBjYW1lcmEubGVuZ3RoID8ge1xuICAgICAgICBpZGVhbDogY2FtZXJhW2NhbWVyYS5sZW5ndGggLSAxXVxuICAgICAgfSA6IG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBkdW1wdHJhY2sgPSAoW2EsIGJdLCB0cmFjaykgPT5cbiAgICAgIC8vICAgYCR7YX0ke3RyYWNrLmtpbmQgPT0gJ3ZpZGVvJyA/ICdDYW1lcmEnIDogJ01pY3JvcGhvbmUnfSAoJHt0cmFjay5yZWFkeVN0YXRlfSk6ICR7dHJhY2subGFiZWx9JHtifWA7XG5cbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIC8vIHRoaXMuX19kZWJ1ZygndmlkZW9UcmFja3MgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpO1xuICAgICAgY29uc3Qgc3RyZWFtU2V0dGluZ3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRTZXR0aW5ncygpO1xuICAgICAgLy8gdGhpcy5fX2RlYnVnKFxuICAgICAgLy8gICAnc3RyZWFtQ2FwYWJpbGl0aWVzIDo6ICcsXG4gICAgICAvLyAgIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENhcGFiaWxpdGllcygpXG4gICAgICAvLyApO1xuICAgICAgLy8gdGhpcy5fX2RlYnVnKCdzdHJlYW0gOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q29uc3RyYWludHMoKSk7XG4gICAgICAvLyB0aGlzLl9fZGVidWcoJ3N0cmVhbVNldHRpbmdzIDo6ICcsIHN0cmVhbVNldHRpbmdzKTtcbiAgICAgIHRoaXMuX19kZWJ1Zyhgc3RyZWFtIHdpZHRoICogaGVpZ2h0IDo6ICR7c3RyZWFtU2V0dGluZ3Mud2lkdGh9ICogJHtzdHJlYW1TZXR0aW5ncy5oZWlnaHR9YCk7XG4gICAgICB0aGlzLl9fZGVidWcoJ3N0cmVhbSB3aWR0aCAvIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGggLyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgdGhpcy5fX2RlYnVnKCdzdHJlYW0gYXNwZWN0UmF0aW8gOjogJyArIHN0cmVhbVNldHRpbmdzLmFzcGVjdFJhdGlvKTtcbiAgICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICBbcm90YXRpb25DYW52YXMud2lkdGgsIHJvdGF0aW9uQ2FudmFzLmhlaWdodF0gPSBbdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2luaXRTdHlsZSgpIHtcbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuXG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQ7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IG9jci5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzO1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy5fX2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuX192aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpOuhnCDqsITso7xcbiAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSSAmJiDqsIDroZwg67mE65SU7Jik66GcIOqwhOyjvFxuICAgICAgLy8g67mE65SU7Jik66W8IOqwgOuhnCBVSeydmCBoZWlnaHQg6riw7KSA7Jy866GcIOykhOydtOqzoFxuICAgICAgLy8g6rCA66GcIFVJIGhlaWdodCDquLDspIDsnLzroZwg67mE65SU7Jik7J2YIHdpZHRoIOqzhOyCsFxuICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveFdpZHRoID0gZ3VpZGVCb3hXaWR0aCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveEhlaWdodCA9IGd1aWRlQm94SGVpZ2h0ICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgaWYgKHRvcFVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodG9wVUksIHtcbiAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYm90dG9tVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShib3R0b21VSSwge1xuICAgICAgICAncGFkZGluZy10b3AnOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoJyNtYXNrQm94SW5uZXInKTtcbiAgICBsZXQgciA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoICogMjtcbiAgICByID0gciA8IDAgPyAwIDogcjtcbiAgICBpZiAoIWlzTmFOKHJlZHVjZWRHdWlkZUJveFdpZHRoKSAmJiAhaXNOYU4ocmVkdWNlZEd1aWRlQm94SGVpZ2h0KSAmJiAhaXNOYU4oYm9yZGVyUmFkaXVzKSAmJiAhaXNOYU4oYm9yZGVyV2lkdGgpKSB7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJXaWR0aCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgbWFza0JveElubmVyV2lkdGggLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgbWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncngnLCByICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCByICsgJycpO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2FkanVzdFN0eWxlKCkge1xuICAgIGNvbnN0IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEgPSAoYSwgYikgPT4ge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLmNhbGNHdWlkZUJveENyaXRlcmlhID09PSAnY2FtZXJhUmVzb2x1dGlvbicpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKGEsIGIpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9fb3B0aW9ucy5jYWxjR3VpZGVCb3hDcml0ZXJpYSA9PT0gJ29jclZpZXdTaXplJykge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoYSwgYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oYSwgYik7IC8vIGRlZmF1bHQgOiBjYW1lcmFSZXNvbHV0aW9uXG4gICAgICB9XG4gICAgfTtcblxuICAgIHZvaWQgMDtcbiAgICBjb25zdCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlXcmFwLFxuICAgICAgY2FwdHVyZVVJLFxuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuXG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQ7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IG9jci5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgICBpZiAoY2FsY1ZpZGVvV2lkdGggPT09IDAgfHwgY2FsY1ZpZGVvSGVpZ2h0ID09PSAwIHx8IGNhbGNWaWRlb0NsaWVudFdpZHRoID09PSAwIHx8IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGg7XG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXM7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY1ZpZGVvV2lkdGgsIGNhbGNWaWRlb0hlaWdodF0gPSBbY2FsY1ZpZGVvSGVpZ2h0LCBjYWxjVmlkZW9XaWR0aF07XG4gICAgICBbY2FsY1ZpZGVvQ2xpZW50V2lkdGgsIGNhbGNWaWRlb0NsaWVudEhlaWdodF0gPSBbY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9DbGllbnRXaWR0aF07XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgbmV3VmlkZW9XaWR0aCA9IGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGxldCBuZXdWaWRlb0hlaWdodCA9IGNhbGNWaWRlb0NsaWVudEhlaWdodDtcbiAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IHRoaXMuX19ndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICBjb25zdCB2aWRlb1JhdGlvQnlIZWlnaHQgPSB0aGlzLl9fdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgIGNvbnN0IG5ld1ZpZGVvUmF0aW9CeVdpZHRoID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC8gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgY29uc3QgbmV3VmlkZW9SYXRpb0J5SGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50V2lkdGggLyBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUlcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCB7XG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2ZsZXgtZW5kJ1xuICAgICAgfSk7XG4gICAgICAvLyB2aWRlbyDqsIDroZwg6riw7KSAIDEwMCUg7Jyg7KeAICjrs4Dqsr3sl4bsnYwpXG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuPhCDshLjroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7ZmV64yAXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiBuZXdWaWRlb1JhdGlvQnlXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDruYTrlJTsmKQg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNWaWRlb0NsaWVudEhlaWdodCwgY2FsY1ZpZGVvSGVpZ2h0KTtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6rCA66GcIFVJXG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJV3JhcCwge1xuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2VuZCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInXG4gICAgICB9KTtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g67mE65SU7Jik66W8IOqwgOuhnCBVSeydmCBoZWlnaHQg6riw7KSA7Jy866GcIOykhOydtOqzoFxuICAgICAgICAvLyDqsIDroZwgVUkgaGVpZ2h0IOq4sOykgOycvOuhnCDruYTrlJTsmKTsnZggd2lkdGgg6rOE7IKwXG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk64qUIOyEuOuhnCDquLDspIDsnLzroZwg66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9IZWlnaHQpICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIOu5hOuUlOyYpOulvCDshLjroZwg6riw7KSA7Jy866GcIOuLpOyLnCDrp57stqRcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBndWlkZUJveEhlaWdodDtcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IG5ld1ZpZGVvSGVpZ2h0ICogbmV3VmlkZW9SYXRpb0J5SGVpZ2h0O1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCDqsIDroZwg7YGs6riw6rCAIOqwgOuhnCBVSSB3aWR0aCAqIHJhdGlvIOqwkuuztOuLpCDtgazrqbQsXG4gICAgICAgIGlmIChndWlkZUJveFdpZHRoID4gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50V2lkdGgsIGNhbGNWaWRlb1dpZHRoKSAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50V2lkdGgsIGNhbGNWaWRlb1dpZHRoKSAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuXG4gICAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiBuZXdWaWRlb1JhdGlvQnlXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIGhlaWdodCDtgazquLDrpbwgVUnsnZggaGVpZ2h0IOq4sOykgOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRIZWlnaHQsIGNhbGNWaWRlb0hlaWdodCkgKiB2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIOqwgOuhnCDtgazquLDqsIAg6rCA66GcIFVJIHdpZHRoICogcmF0aW8g6rCS67O064ukIO2BrOuptCxcbiAgICAgICAgaWYgKGd1aWRlQm94V2lkdGggPiBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGgpIHtcbiAgICAgICAgICAvLyDqs4TsgrAg67Cp7Iud7J2EIOuwlOq+vOuLpCAo7IKs7JygIDog6rGw7J2YIOygleyCrOqwge2YleyXkCDqsIDquYzsmrQg6rK97JqwIOqwgOydtOuTnCDrsJXsiqQg6rCA66Gc6rCAIOq9ieywqOqyjCDrkKguKVxuICAgICAgICAgIGd1aWRlQm94V2lkdGggPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIOy2leyGjFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogbmV3VmlkZW9SYXRpb0J5V2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FsY0d1aWRlQm94Q3JpdGVyaWEo7Lm066mU6528IO2VtOyDgeuPhCDshKTsoJUg6riw7KSAKeqwgCBvY3JWaWV3U2l6ZSjtmZTrqbQg7YGs6riwKSDquLDspIDsnbzrlYxcbiAgICBpZiAodGhpcy5fX29wdGlvbnMuY2FsY0d1aWRlQm94Q3JpdGVyaWEgPT09ICdvY3JWaWV3U2l6ZScpIHtcbiAgICAgIC8vIGd1aWRlQm94SGVpZ2h0IOydtCBjYWxjT2NyQ2xpZW50SGVpZ2h0IOuztOuLpCDtgbDqsr3smrAo6rCA7J2065Oc67CV7Iqk6rCAIO2ZlOuptOydhCDrhJjslrTqsIDripQg6rK97JqwKSDri6Tsi5wg6rOE7IKwXG4gICAgICBpZiAoZ3VpZGVCb3hIZWlnaHQgPiBjYWxjT2NyQ2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gTWF0aC5taW4oY2FsY09jckNsaWVudEhlaWdodCwgY2FsY1ZpZGVvSGVpZ2h0KSAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIG5ld1ZpZGVvUmF0aW9CeVdpZHRoO1xuICAgICAgfVxuXG4gICAgICAvLyBndWlkZUJveEhlaWdodCDsnbQgY2FsY09jckNsaWVudEhlaWdodCDrs7Tri6Qg7YGw6rK97JqwKOqwgOydtOuTnOuwleyKpOqwgCDtmZTrqbTsnYQg64SY7Ja06rCA64qUIOqyveyasCkg64uk7IucIOqzhOyCsFxuICAgICAgaWYgKGd1aWRlQm94V2lkdGggPiBjYWxjT2NyQ2xpZW50V2lkdGgpIHtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IE1hdGgubWluKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogbmV3VmlkZW9SYXRpb0J5V2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGggPSBNYXRoLm1pbihndWlkZUJveFdpZHRoLCBuZXdWaWRlb1dpZHRoKTtcbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IE1hdGgubWluKGd1aWRlQm94SGVpZ2h0LCBuZXdWaWRlb0hlaWdodCk7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveFdpZHRoID0gZ3VpZGVCb3hXaWR0aCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveEhlaWdodCA9IGd1aWRlQm94SGVpZ2h0ICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgaWYgKHRvcFVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodG9wVUksIHtcbiAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYm90dG9tVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShib3R0b21VSSwge1xuICAgICAgICAncGFkZGluZy10b3AnOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnXG4gICAgfSk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICBoZWlnaHQ6IG5ld1ZpZGVvSGVpZ2h0ICsgJ3B4J1xuICAgIH0pO1xuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoJyNtYXNrQm94SW5uZXInKTtcbiAgICBsZXQgciA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoICogMjtcbiAgICByID0gciA8IDAgPyAwIDogcjtcbiAgICBpZiAoIWlzTmFOKHJlZHVjZWRHdWlkZUJveFdpZHRoKSAmJiAhaXNOYU4ocmVkdWNlZEd1aWRlQm94SGVpZ2h0KSAmJiAhaXNOYU4oYm9yZGVyUmFkaXVzKSAmJiAhaXNOYU4oYm9yZGVyV2lkdGgpKSB7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJXaWR0aCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgbWFza0JveElubmVyV2lkdGggLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgbWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncngnLCByICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCByICsgJycpO1xuICAgIH1cblxuICAgIC8vIOyImOuPmSDstKzsmIEgVUkg7IKs7JqpXG4gICAgLy8gZmlyc3RDYWxsZWTsnbgg6rK97JqwIOyVhOyngSBjYXB0dXJlVUnqsIAg6re466Ck7KeA7KeAIOyViuyVhCDrrLTsnZjrr7hcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyAmJiBib3R0b21VSSAmJiBjYXB0dXJlVUkpIHtcbiAgICAgICAgY29uc3QgY2FsY1N1bU9mSGVpZ2h0Qm90dG9tVUlDaGlsZE5vZGVzID0gdGhpcy5fX2NhbGNTdW1PZkhlaWdodENoaWxkTm9kZXMoYm90dG9tVUkpO1xuICAgICAgICBsZXQgY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPSBjYXB0dXJlQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpLmdldEF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0ID0gY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPT09IDAgPyA4MCA6IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0O1xuICAgICAgICBsZXQgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSA9IGJvdHRvbVVJLmNsaWVudEhlaWdodDtcbiAgICAgICAgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSAtPSBpc05hTihwYXJzZUludChib3R0b21VSS5zdHlsZS5wYWRkaW5nVG9wKSkgPyAwIDogcGFyc2VJbnQoYm90dG9tVUkuc3R5bGUucGFkZGluZ1RvcCk7XG4gICAgICAgIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gLT0gY2FsY1N1bU9mSGVpZ2h0Qm90dG9tVUlDaGlsZE5vZGVzO1xuICAgICAgICBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIC09IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0O1xuICAgICAgICBjb25zdCBiYXNlbGluZSA9IGNhbGNPY3JDbGllbnRIZWlnaHQgLSAoY2FsY09jckNsaWVudEhlaWdodCAvIDIgKyBndWlkZUJveEhlaWdodCAvIDIpO1xuICAgICAgICBpZiAoY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSA+IDAgJiYgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSA8IGJhc2VsaW5lKSB7XG4gICAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiAnJyxcbiAgICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6IGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgICAncGFkZGluZy1yaWdodCc6ICcxMHB4JyxcbiAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuX19pblByb2dyZXNzU3RlcCwgdHJ1ZSk7XG4gICAgdm9pZCAwO1xuICB9XG4gIF9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2RlcyhvYmopIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb2JqPy5jaGlsZE5vZGVzKSB7XG4gICAgICBzdW0gKz0gaXRlbS5jbGllbnRIZWlnaHQgPyBpdGVtLmNsaWVudEhlaWdodCA6IDA7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG4gIH1cbiAgX19jbG9zZUNhbWVyYSgpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICB9XG4gIGFzeW5jIF9fbG9hZFJlc291cmNlcygpIHtcbiAgICB2b2lkIDA7XG4gICAgaWYgKHRoaXMuX19yZXNvdXJjZXNMb2FkZWQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2lzU3VwcG9ydFNpbWQgPSBhd2FpdCBzaW1kKCk7XG4gICAgbGV0IGVudkluZm8gPSAnJztcbiAgICBlbnZJbmZvICs9IGBvcyA6ICR7dGhpcy5fX2RldmljZUluZm8ub3N9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBvc1NpbXBsZSA6ICR7dGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGV9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBpc1N1cHBvcnRXYXNtOiAke3RoaXMuX19pc1N1cHBvcnRXYXNtfVxcbmA7XG4gICAgZW52SW5mbyArPSBgc2ltZCh3YXNtLWZlYXR1cmUtZGV0ZWN0KSA6ICR7dGhpcy5fX2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBpZiAodGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGUgPT09ICdJT1MnIHx8IHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnTUFDJykge1xuICAgICAgdGhpcy5fX2lzU3VwcG9ydFNpbWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZW52SW5mbyArPSBgaXNTdXBwb3J0U2ltZChmaW5hbCkgOiAke3RoaXMuX19pc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgZW52SW5mbyArPSBgVXNlckFnZW50IDogJHtuYXZpZ2F0b3IudXNlckFnZW50fVxcbmA7XG4gICAgdm9pZCAwO1xuICAgIHRoaXMuX19kZWJ1ZyhlbnZJbmZvKTtcbiAgICB3aW5kb3cudXNlYk9DUkVudkluZm8gPSBlbnZJbmZvO1xuICAgIGxldCBzZGtTdXBwb3J0RW52ID0gJ3F1cmFtJztcbiAgICBpZiAodGhpcy5fX2lzU3VwcG9ydFNpbWQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHNka1N1cHBvcnRFbnYgKz0gJ19zaW1kLmpzJztcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgICAgc2RrU3VwcG9ydEVudiArPSAnLmpzJztcbiAgICB9XG4gICAgdm9pZCAwO1xuICAgIHdpbmRvdy51c2ViT0NSRW52SW5mbyA9IGVudkluZm87XG4gICAgdm9pZCAwO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoc2RrU3VwcG9ydEVudiwgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKTtcbiAgICBsZXQgc3JjID0gYXdhaXQgZmV0Y2godXJsLmhyZWYpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XG4gICAgICBsZXQgcmVnZXggPSAvKC4qKSA9IE1vZHVsZS5jd3JhcC9nbTtcbiAgICAgIGxldCBzb3VyY2UgPSB0ZXh0LnJlcGxhY2UocmVnZXgsICdNb2R1bGUuJDEgPSBNb2R1bGUuY3dyYXAnKTtcblxuICAgICAgLy8gZGF0YShtb2RlbClcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFwoZnVuY3Rpb25cXChcXCkgXFx7L20sICd2YXIgY3JlYXRlTW9kZWxEYXRhID0gYXN5bmMgZnVuY3Rpb24oKSB7XFxuJyArICcgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcXG4nKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycsICcgICByZWplY3QoKTtcXG4nICsgJyAgIGNvbnNvbGUuZXJyb3IoXCJwYWNrYWdlIGVycm9yOlwiLCBlcnJvcik7Jyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICB9LCBoYW5kbGVFcnJvciknLCAnICByZXNvbHZlKCk7XFxuJyArICcgIH0sIGhhbmRsZUVycm9yKScpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL15cXH1cXClcXChcXCk7L20sICdcXG4gfSlcXG4nICsgJ307Jyk7XG5cbiAgICAgIC8vIHdhc21cbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCdxdXJhbS53YXNtJywgbmV3IFVSTCgncXVyYW0ud2FzbScsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZik7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFsnXCJdcXVyYW1cXC5kYXRhW1wiJ10vZ20sIGBSRU1PVEVfUEFDS0FHRV9CQVNFID0gXCIke25ldyBVUkwoJ3F1cmFtLmRhdGEnLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWZ9XCJgKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCdmdW5jdGlvbiBjcmVhdGVXYXNtJywgJ2FzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdhc20nKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCdpbnN0YW50aWF0ZUFzeW5jKCk7JywgJ2F3YWl0IGluc3RhbnRpYXRlQXN5bmMoKTsnKTtcblxuICAgICAgLy8gd2FzbSBhbmQgZGF0YShtb2RlbCkgZmlsZSDrs5HroKzroZwgZmV0Y2gg7ZWY6riwIOychO2VtFxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ3ZhciBhc20gPSBjcmVhdGVXYXNtKCk7JywgJ2NvbnNvbGUubG9nKFwiY3JlYXRlIHdhc20gYW5kIGRhdGEgLSBzdGFydFwiKVxcbicgKyAnYXdhaXQgKGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWRXYXNtID0gZmFsc2U7XFxuJyArICcgICAgdmFyIGlzQ3JlYXRlZERhdGEgPSBmYWxzZTtcXG4nICsgJyAgICBjcmVhdGVXYXNtKCkudGhlbigoKSA9PiB7XFxuJyArICcgICAgICBpc0NyZWF0ZWRXYXNtID0gdHJ1ZTtcXG4nICsgJyAgICAgIGlmIChpc0NyZWF0ZWREYXRhKSB7IHJlc29sdmUoKTsgfVxcbicgKyAnICAgIH0pO1xcbicgKyAnICAgIGNyZWF0ZU1vZGVsRGF0YSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkRGF0YSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkV2FzbSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KVxcbicgKyAnICB9KTtcXG4nICsgJ30pKCk7XFxuJyArICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gZW5kXCIpJyk7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH0pO1xuICAgIHNyYyA9IGBcbiAgICAoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAke3NyY31cbiAgICAgIE1vZHVsZS5sZW5ndGhCeXRlc1VURjggPSBsZW5ndGhCeXRlc1VURjhcbiAgICAgIE1vZHVsZS5zdHJpbmdUb1VURjggPSBzdHJpbmdUb1VURjhcbiAgICAgIHJldHVybiBNb2R1bGVcbiAgICB9KSgpXG4gICAgICAgIGA7XG4gICAgdGhpcy5fX09DUkVuZ2luZSA9IGF3YWl0IGV2YWwoc3JjKTtcbiAgICB0aGlzLl9fT0NSRW5naW5lLm9uUnVudGltZUluaXRpYWxpemVkID0gYXN5bmMgXyA9PiB7XG4gICAgICB2b2lkIDA7XG4gICAgfTtcbiAgICBhd2FpdCB0aGlzLl9fT0NSRW5naW5lLm9uUnVudGltZUluaXRpYWxpemVkKCk7XG4gICAgdGhpcy5fX3Jlc291cmNlc0xvYWRlZCA9IHRydWU7XG4gICAgdm9pZCAwO1xuICB9XG4gIF9fc3RhcnRTY2FuV2FzbUltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX19kZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7XG4gICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgIHRoaXMuX19hZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuX19wYWdlRW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gICAgICB0aGlzLl9fc3NhUmV0cnlDb3VudCA9IDA7XG4gICAgICBjb25zdCBzY2FuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsLFxuICAgICAgICAgICAgaXNEZXRlY3RlZENhcmQgPSBudWxsLFxuICAgICAgICAgICAgaW1nRGF0YSA9IG51bGwsXG4gICAgICAgICAgICBpbWdEYXRhVXJsID0gbnVsbCxcbiAgICAgICAgICAgIG1hc2tJbWFnZSA9IG51bGwsXG4gICAgICAgICAgICBmYWNlSW1hZ2UgPSBudWxsLFxuICAgICAgICAgICAgc3NhUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdExpc3QgPSBbXSxcbiAgICAgICAgICAgIG1hc2tJbmZvID0gbnVsbDtcblxuICAgICAgICAgIC8vIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgaWYgKCF0aGlzLl9fT0NSRW5naW5lWydhc20nXSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVE9ETyA6IOyEpOygle2VoOyImCDsnojqsowg67OA6rK9ICBkZWZhdWx0IOqwkuuPhCDsoJzqs7VcbiAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvbl93LCByZXNvbHV0aW9uX2hdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB2aWRlb1xuICAgICAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgICAgIGlmIChyZXNvbHV0aW9uX3cgPT09IDAgfHwgcmVzb2x1dGlvbl9oID09PSAwKSByZXR1cm47XG4gICAgICAgICAgaWYgKHRoaXMuX19kZXRlY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGJlZm9yZSAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcbiAgICAgICAgICBpZiAodGhpcy5fX2FkZHJlc3MgPT09IDAgJiYgIXRoaXMuX19wYWdlRW5kICYmIChhd2FpdCB0aGlzLl9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvKSkpIHtcbiAgICAgICAgICAgIFt0aGlzLl9fYWRkcmVzcywgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2tdID0gdGhpcy5fX2dldFNjYW5uZXJBZGRyZXNzKHRoaXMuX19vY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl9fYWRkcmVzcyB8fCB0aGlzLl9fcGFnZUVuZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGFmdGVyIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPCB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIE9DUiDsmYTro4wg7J207KCEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgICAgW2lzRGV0ZWN0ZWRDYXJkLCBpbWdEYXRhLCBpbWdEYXRhVXJsXSA9IGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZCh0aGlzLl9fYWRkcmVzcywgMCk7XG4gICAgICAgICAgICBpZiAoIWlzRGV0ZWN0ZWRDYXJkKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAgIT09IHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9GQUlMRUQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVELCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7IC8vIO2VhOyalO2VnOqwgD9cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FyZCBpcyBkZXRlY3RlZFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUyk7XG5cbiAgICAgICAgICAgIC8vIHNzYSByZXRyeSDshKTsoJXsnbQg65CY7Ja0IOyeiOycvOqxsOuCmCwg7IiY64+Z7LSs7JiBVUnrpbwg7IKs7Jqp7ZWY64qUIOqyveyasCwgY2FyZCBkZXRlY3Qg7ISx6rO17IucIOydtOuvuOyngCDsoIDsnqVcbiAgICAgICAgICAgIHRoaXMuX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUoaW1nRGF0YSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9TVUNDRVNTLCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbb2NyUmVzdWx0LCBpbWdEYXRhVXJsLCBtYXNrSW1hZ2UsIGZhY2VJbWFnZV0gPSBhd2FpdCB0aGlzLl9fc3RhcnRSZWNvZ25pdGlvbih0aGlzLl9fYWRkcmVzcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCB0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpLCBpbWdEYXRhLCBpbWdEYXRhVXJsKTtcblxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgIC8vICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICAgICAgICAvLyAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpOyAgICAgICAgLy8g7ZWE7JqU7ZWc6rCAP1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9fb2NyU3RhdHVzID49IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUykge1xuICAgICAgICAgICAgLy8gb2NyIOyZhOujjCDsnbTtm4Qg7IOB7YOcXG5cbiAgICAgICAgICAgIC8vIGZhaWx1cmUgY2FzZVxuICAgICAgICAgICAgaWYgKG9jclJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPQ1IgU3RhdHVzIGlzICR7dGhpcy5fX29jclN0YXR1c30sIGJ1dCBvY3JSZXN1bHQgaXMgZmFsc2VgKTsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7IC8vIE9DUiDsmYTro4wg7Iuc7KCQ7JeQIGNhbWVyYSBwcmV2aWV3IG9mZlxuXG4gICAgICAgICAgICBpZiAodGhpcy5fX3NzYU1vZGUpIHtcbiAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAvLyDstZzstIgg7Iuc64+EXG4gICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoKHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ1tFUlJdIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGwnKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICAgICAgICAgICAgc3NhUmVzdWx0TGlzdC5wdXNoKHNzYVJlc3VsdCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCByZXRyeVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgRkFLRSA9IHRoaXMuX19vcHRpb25zLnNzYVJldHJ5VHlwZSA9PT0gJ0ZBS0UnO1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFQUwgPSB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVR5cGUgPT09ICdSRUFMJztcbiAgICAgICAgICAgICAgICBjb25zdCBFTlNFTUJMRSA9IHRoaXMuX19vcHRpb25zLnNzYVJldHJ5VHlwZSA9PT0gJ0VOU0VNQkxFJztcbiAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZWQgPSBmYWxzZTsgLy8g67mE64+Z6riwIGZvciDrrLgg65WM66y47JeQIGJyZWFr6rCAIOyViOqxuOumrOuKlCDsnbTsiojroZwg64Sj7J2MXG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9fc3NhUmV0cnlDb3VudCA9PT0gdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgZXhlY3V0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3NzYVJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgc3NhUmVzdWx0ID0gYXdhaXQgdGhpcy5fX3N0YXJ0VHJ1dGhSZXRyeSh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2FkZHJlc3MsIGl0ZW0pOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsJyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGlmIChGQUtFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQuaW5kZXhPZignUkVBTCcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBleGVjdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoUkVBTCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0LmluZGV4T2YoJ0ZBS0UnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKEVOU0VNQkxFKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0cnlXb3JraW5nVGltZSA9IG5ldyBEYXRlKCkgLSByZXRyeVN0YXJ0RGF0ZTtcbiAgICAgICAgICAgICAgICB2b2lkIDA7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tJbmZvKSB7XG4gICAgICAgICAgICAgIG1hc2tJbmZvID0gdGhpcy5fX2dldE1hc2tJbmZvKHRoaXMuX19hZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgbGVnYWN5Rm9ybWF0LFxuICAgICAgICAgICAgICBuZXdGb3JtYXRcbiAgICAgICAgICAgIH0gPSB1c2ViT0NSV0FTTVBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLl9fc3NhUmV0cnlDb3VudCwgc3NhUmVzdWx0TGlzdCwgdGhpcy5fX29wdGlvbnMuc3NhUmV0cnlUeXBlLCB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVBpdm90KTtcbiAgICAgICAgICAgIGxldCByZXZpZXdfcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgICAgICAgIG9jcl9yZXN1bHQ6IG5ld0Zvcm1hdCxcbiAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogaW1nRGF0YVVybCxcbiAgICAgICAgICAgICAgb2NyX21hc2tpbmdfaW1hZ2U6IG1hc2tJbWFnZSxcbiAgICAgICAgICAgICAgb2NyX2ZhY2VfaW1hZ2U6IGZhY2VJbWFnZSxcbiAgICAgICAgICAgICAgbWFza0luZm86IG1hc2tJbmZvLFxuICAgICAgICAgICAgICBzc2FfbW9kZTogdGhpcy5fX3NzYU1vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fY29tcHJlc3NJbWFnZXMocmV2aWV3X3Jlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlLCBmYWNlSW1hZ2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUVuY3J5cHRNb2RlICYmIHRoaXMuX19pc1N1cHBvcnRXYXNtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVMaXN0ID0gWydjb21wbGV0ZScsICdyZXN1bHRfc2Nhbl90eXBlJywgJ2NvbG9yX3BvaW50JywgJ2ZvdW5kX2ZhY2UnLCAnc3BlY3VsYXJfcmF0aW8nLCAnc3RhcnRfdGltZScsICdlbmRfdGltZScsICdmZF9jb25maWRlbmNlJywgJ2lkX3RydXRoJywgJ2lkX3RydXRoX3JldHJ5X2NvdW50J107XG4gICAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICByZXZpZXdfcmVzdWx0LmVuY3J5cHRlZCA9IHtcbiAgICAgICAgICAgICAgICBvY3JfcmVzdWx0OiBfLnRvUGFpcnMoXy5vbWl0KHJldmlld19yZXN1bHQub2NyX3Jlc3VsdCwgZXhjbHVkZUxpc3QpKS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3Jfb3JpZ2luX2ltYWdlKSxcbiAgICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHJldmlld19yZXN1bHQub2NyX21hc2tpbmdfaW1hZ2UpLFxuICAgICAgICAgICAgICAgIG9jcl9mYWNlX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3JfZmFjZV9pbWFnZSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VMZWdhY3lGb3JtYXQpIHtcbiAgICAgICAgICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfZGF0YSA9IGxlZ2FjeUZvcm1hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19vblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpO1xuICAgICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3InO1xuICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnOiAnICsgZS5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2b2lkIDA7XG5cbiAgICAgICAgICAvLyBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgIC8vICAgYXdhaXQgdGhpcy5fX3JlY292ZXJ5U2NhbigpO1xuICAgICAgICAgIC8vICAgdGhpcy5fX3JlY292ZXJlZCA9IHRydWU7XG4gICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcygnV0EwMDEnLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0aGlzLl9fcmVjb3ZlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmVjb3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5fX2RldGVjdGVkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNjYW4sIDEpOyAvLyDsnqzqt4BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNldFRpbWVvdXQoc2NhbiwgMSk7IC8vIFVJIOuenOuNlOungSBibG9ja2luZyDrsKnsp4AgKHNldFRpbWVvdXQpXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfX2NvbXByZXNzSW1hZ2VzKHJldmlld19yZXN1bHQsIGltZ0RhdGFVcmwsIG1hc2tJbWFnZSwgZmFjZUltYWdlLCBjb25zdGFudE51bWJlcikge1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlKSB7XG4gICAgICBjb25zdCByZXNpemVSYXRpbyA9IHRoaXMuX19jcm9wSW1hZ2VTaXplSGVpZ2h0IC8gdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aDtcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogdGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFdpZHRoLFxuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aCAqIHJlc2l6ZVJhdGlvLFxuICAgICAgICBjb252ZXJ0U2l6ZTogdGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFZvbHVtZSxcbiAgICAgICAgdGFyZ2V0Q29tcHJlc3NWb2x1bWU6IHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhWb2x1bWUgLy8gY3VzdG9tIG9wdGlvblxuICAgICAgfTtcblxuICAgICAgcmV2aWV3X3Jlc3VsdC5vY3Jfb3JpZ2luX2ltYWdlID0gYXdhaXQgdGhpcy5fX2NvbXByZXNlQmFzZTY0SW1hZ2UoaW1nRGF0YVVybCwgZGVmYXVsdE9wdGlvbnMsIGNvbnN0YW50TnVtYmVyKTtcblxuICAgICAgLy8gbWFza2luZyDsnbTrr7jsp4DripQgcmVzaXplIO2VmOuptCwgbWFzayDsooztkZzqsIAg7Ja06riL64KY66+A66GcIOumrOyCrOydtOymiCDslYjtlZjqs6Ag7JWV7LaV66eMIOynhO2WiVxuICAgICAgY29uc3QgbWFza2luZ0ltYWdlT3B0aW9ucyA9IHtcbiAgICAgICAgcXVhbGl0eTogZGVmYXVsdE9wdGlvbnMucXVhbGl0eSxcbiAgICAgICAgdGFyZ2V0Q29tcHJlc3NWb2x1bWU6IGRlZmF1bHRPcHRpb25zLnRhcmdldENvbXByZXNzVm9sdW1lXG4gICAgICB9O1xuICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfbWFza2luZ19pbWFnZSA9IGF3YWl0IHRoaXMuX19jb21wcmVzZUJhc2U2NEltYWdlKG1hc2tJbWFnZSwgbWFza2luZ0ltYWdlT3B0aW9ucywgY29uc3RhbnROdW1iZXIpO1xuICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfZmFjZV9pbWFnZSA9IGF3YWl0IHRoaXMuX19jb21wcmVzZUJhc2U2NEltYWdlKGZhY2VJbWFnZSwgZGVmYXVsdE9wdGlvbnMsIGNvbnN0YW50TnVtYmVyKTtcbiAgICB9XG4gIH1cbiAgX19yZXF1ZXN0R2V0QVBJVG9rZW4oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSB0aGlzLl9fb3B0aW9ucy5hdXRoU2VydmVySW5mby5jcmVkZW50aWFsO1xuICAgICAgY29uc3QgYmFzZVVybCA9IHRoaXMuX19vcHRpb25zLmF1dGhTZXJ2ZXJJbmZvLmJhc2VVcmw7XG4gICAgICBmZXRjaChgJHtiYXNlVXJsfS9zaWduLWluYCwge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFsKSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgLy8gbW9kZTogJ2NvcnMnLFxuICAgICAgICAvLyBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L3VzZWIvdG9rZW5gLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Jlc3VsdC50b2tlbn1gXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICByZXNvbHZlKGpzb24udG9rZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgX19yZXF1ZXN0U2VydmVyT0NSKG9jclR5cGUsIHNzYU1vZGUsIGltZ0RhdGFVcmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGJhc2VVcmwgPSB0aGlzLl9fb3B0aW9ucy5vY3JTZXJ2ZXJCYXNlVXJsO1xuICAgICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgICBiYXNlVXJsICs9ICcvb2NyL2lkY2FyZC1kcml2ZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgICAgYmFzZVVybCArPSAnL29jci9wYXNzcG9ydCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICAgIGJhc2VVcmwgKz0gJy9vY3IvYWxpZW4nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ3JlZGl0IGNhcmQgaXMgbm90IFVuc3VwcG9ydGVkIFNlcnZlciBPQ1InKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBPQ1IgdHlwZTogJHtvY3JUeXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFwaVRva2VuID0gYXdhaXQgdGhpcy5fX3JlcXVlc3RHZXRBUElUb2tlbigpO1xuICAgICAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke2FwaVRva2VufWApO1xuICAgICAgICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW1hZ2VfYmFzZTY0OiBpbWdEYXRhVXJsLFxuICAgICAgICAgIHNzYV9tb2RlOiAndHJ1ZScsXG4gICAgICAgICAgbWFza19tb2RlOiAndHJ1ZScsXG4gICAgICAgICAgZmFjZV9tb2RlOiAndHJ1ZSdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAgICAgICBib2R5OiByYXcsXG4gICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gICAgICAgIH07XG4gICAgICAgIGZldGNoKGJhc2VVcmwsIHJlcXVlc3RPcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX3N0YXJ0U2NhblNlcnZlckltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgICBsZXQgb2NyUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICBzc2FSZXN1bHQgPSBudWxsLFxuICAgICAgICAgIHNzYVJlc3VsdExpc3QgPSBbXTtcbiAgICAgICAgY29uc3QgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAvLyDsupTrsoTsiqTsl5DshJwg7J2066+47KeA66W8IOqwgOyguOyYtFxuICAgICAgICAgIGNvbnN0IFssIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy5fX2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgICAgIGlmICgxID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBzZXJ2ZXIgb2NyIOyLpO2MqCAo67Cc7IOdIOqwgOuKpeyEsSDsl4bsnYwpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNlcnZlciBvY3Ig7ISx6rO1XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9TVUNDRVNTLCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBvY3JSZXN1bHQgPSBhd2FpdCB0aGlzLl9fcmVxdWVzdFNlcnZlck9DUih0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIGltZ0RhdGFVcmwpO1xuXG4gICAgICAgICAgICAgIC8vIGZhaWx1cmUgY2FzZVxuICAgICAgICAgICAgICBpZiAob2NyUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIE9DUiBpcyBmYWlsZWRgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3NhIOyLnOuPhD9cblxuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIHZpZGVvXG4gICAgICAgICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pOyAvLyBPQ1Ig7JmE66OMIOyLnOygkOyXkCBjYW1lcmEgcHJldmlldyBvZmZcblxuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBsZWdhY3lGb3JtYXQsXG4gICAgICAgICAgICAgIG5ld0Zvcm1hdCxcbiAgICAgICAgICAgICAgYmFzZTY0SW1hZ2VSZXN1bHQsXG4gICAgICAgICAgICAgIG1hc2tJbmZvXG4gICAgICAgICAgICB9ID0gdXNlYk9DUkFQSVBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIG9jclJlc3VsdCk7XG4gICAgICAgICAgICBsZXQgcmV2aWV3X3Jlc3VsdCA9IHtcbiAgICAgICAgICAgICAgb2NyX3R5cGU6IHRoaXMuX19vY3JUeXBlLFxuICAgICAgICAgICAgICBvY3JfcmVzdWx0OiBuZXdGb3JtYXQsXG4gICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBiYXNlNjRJbWFnZVJlc3VsdD8ub2NyX21hc2tpbmdfaW1hZ2UsXG4gICAgICAgICAgICAgIG9jcl9mYWNlX2ltYWdlOiBiYXNlNjRJbWFnZVJlc3VsdD8ub2NyX2ZhY2VfaW1hZ2UsXG4gICAgICAgICAgICAgIG1hc2tJbmZvLFxuICAgICAgICAgICAgICBzc2FfbW9kZTogdGhpcy5fX3NzYU1vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fY29tcHJlc3NJbWFnZXMocmV2aWV3X3Jlc3VsdCwgaW1nRGF0YVVybCwgYmFzZTY0SW1hZ2VSZXN1bHQ/Lm9jcl9tYXNraW5nX2ltYWdlLCBiYXNlNjRJbWFnZVJlc3VsdD8ub2NyX2ZhY2VfaW1hZ2UsIDAuMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlRW5jcnlwdE1vZGUgJiYgdGhpcy5fX2lzU3VwcG9ydFdhc20pIHtcbiAgICAgICAgICAgICAgY29uc3QgZXhjbHVkZUxpc3QgPSBbJ2NvbXBsZXRlJywgJ3Jlc3VsdF9zY2FuX3R5cGUnLCAnY29sb3JfcG9pbnQnLCAnZm91bmRfZmFjZScsICdzcGVjdWxhcl9yYXRpbycsICdzdGFydF90aW1lJywgJ2VuZF90aW1lJywgJ2ZkX2NvbmZpZGVuY2UnLCAnaWRfdHJ1dGgnLCAnaWRfdHJ1dGhfcmV0cnlfY291bnQnXTtcbiAgICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgIHJldmlld19yZXN1bHQuZW5jcnlwdGVkID0ge1xuICAgICAgICAgICAgICAgIG9jcl9yZXN1bHQ6IF8udG9QYWlycyhfLm9taXQocmV2aWV3X3Jlc3VsdC5vY3JfcmVzdWx0LCBleGNsdWRlTGlzdCkpLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGFjY1trZXldID0gdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgfSwge30pLFxuICAgICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9vcmlnaW5faW1hZ2UpLFxuICAgICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3JfbWFza2luZ19pbWFnZSksXG4gICAgICAgICAgICAgICAgb2NyX2ZhY2VfaW1hZ2U6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9mYWNlX2ltYWdlKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUxlZ2FjeUZvcm1hdCkge1xuICAgICAgICAgICAgICByZXZpZXdfcmVzdWx0Lm9jcl9kYXRhID0gbGVnYWN5Rm9ybWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX19jYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnU2VydmVyIE9DUiBFcnJvcic7XG4gICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzogJyArIGUubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICB2b2lkIDA7XG4gICAgICAgIGF3YWl0IHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKCdRUzAwMScsIGUsIGVycm9yTWVzc2FnZSk7IC8vIFFVUkFNIFNlcnZlciBPQ1Ig7JeQ65+sXG4gICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX2VucXVldWVEZXRlY3RlZENhcmRRdWV1ZShpbWdEYXRhLCBpbWdEYXRhVVJMKSB7XG4gICAgLy8gc3NhIHJldHJ5IOyEpOygleydtCDrkJjslrQg7J6I7Jy86rGw64KYLCDsiJjrj5nstKzsmIFVSeulvCDsgqzsmqntlZjripQg6rK97JqwLCBjYXJkIGRldGVjdCDshLHqs7Xsi5wg7J2066+47KeAIOyggOyepVxuICAgIGlmICh0aGlzLl9fc3NhTW9kZSAmJiB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID4gMCB8fCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkgJiYgdGhpcy5fX21hbnVhbE9DUk1heFJldHJ5Q291bnQgPiAwKSB7XG4gICAgICBsZXQgbGltaXRTYXZlSW1hZ2VDb3VudCA9IE1hdGgubWF4KHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQsIHRoaXMuX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50KTtcbiAgICAgIGlmICh0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUubGVuZ3RoID09PSBsaW1pdFNhdmVJbWFnZUNvdW50KSB7XG4gICAgICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBpZiAodGhpcy5fX2RlYnVnTW9kZSkgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlQmFzZTY0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUucHVzaChpbWdEYXRhKTtcbiAgICAgIGlmICh0aGlzLl9fZGVidWdNb2RlKSB7XG4gICAgICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NC5wdXNoKGltZ0RhdGFVUkwpO1xuICAgICAgICB2b2lkIDA7IC8vIHNob3VsZCBiZSByZW1vdmVkXG4gICAgICB9XG5cbiAgICAgIHZvaWQgMDsgLy8gc2hvdWxkIGJlIHJlbW92ZWRcbiAgICB9XG4gIH1cblxuICBhc3luYyBfX29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCkge1xuICAgIC8vIOyduOyLnSDshLHqs7Ug7Iqk7LqUIOujqO2UhCDsooXro4xcbiAgICBpZiAocmV2aWV3X3Jlc3VsdC5zc2FfbW9kZSkge1xuICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0EpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUyk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICByZXN1bHRfY29kZTogJ04xMDAnLFxuICAgICAgICByZXN1bHRfbWVzc2FnZTogJ09LLidcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6ICdzdWNjZXNzJyxcbiAgICAgIHJldmlld19yZXN1bHQ6IHJldmlld19yZXN1bHRcbiAgICB9O1xuICAgIGlmICh0aGlzLl9fb25TdWNjZXNzKSB7XG4gICAgICB0aGlzLl9fb25TdWNjZXNzKHJlc3VsdCk7XG4gICAgICB0aGlzLl9fb25TdWNjZXNzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX29uRmFpbHVyZVByb2Nlc3MocmVzdWx0Q29kZSwgZSwgZXJyb3JNZXNzYWdlKSB7XG4gICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRCk7XG4gICAgbGV0IGVycm9yRGV0YWlsID0gJyc7XG4gICAgaWYgKGU/LnRvU3RyaW5nKCkpIGVycm9yRGV0YWlsICs9IGUudG9TdHJpbmcoKTtcbiAgICBpZiAoZT8uc3RhY2spIGVycm9yRGV0YWlsICs9IGUuc3RhY2s7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIHJlc3VsdF9jb2RlOiByZXN1bHRDb2RlLFxuICAgICAgICByZXN1bHRfbWVzc2FnZTogZXJyb3JNZXNzYWdlXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiAnZmFpbGVkJyxcbiAgICAgIHJldmlld19yZXN1bHQ6IHtcbiAgICAgICAgb2NyX3R5cGU6IHRoaXMuX19vY3JUeXBlLFxuICAgICAgICBlcnJvcl9kZXRhaWw6IGVycm9yRGV0YWlsXG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5fX29uRmFpbHVyZSkge1xuICAgICAgdGhpcy5fX29uRmFpbHVyZShyZXN1bHQpO1xuICAgICAgdGhpcy5fX29uRmFpbHVyZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19wcmVsb2FkaW5nV2FzbSgpIHtcbiAgICBjb25zdCBwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCk7XG4gICAgaWYgKCF0aGlzLmlzUHJlbG9hZGVkKCkgJiYgcHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLlNUQVJURUQpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBhd2FpdCB0aGlzLl9fd2FpdFByZWxvYWRlZCgpO1xuICAgICAgfSBlbHNlIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkUpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhYm5vcm1hbGx5IHByZWxvYWRpbmcgc3RhdHVzLCBwcmVsb2FkZWQ6ICR7dGhpcy5pc1ByZWxvYWRlZCgpfSAvIHByZWxvYWRpbmdTdGF0dXM6ICR7dGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCl9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fc3RhcnRTY2FuV2FzbSgpIHtcbiAgICB0aGlzLl9fZGVidWcoJ3dhc21fbW9kZScpO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5XYXNtSW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyBfX3N0YXJ0U2NhblNlcnZlcigpIHtcbiAgICB0aGlzLl9fZGVidWcoJ3NlcnZlcl9tb2RlJyk7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJID0gdHJ1ZTtcbiAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuU2VydmVySW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyBfX3JlY292ZXJ5U2NhbigpIHtcbiAgICB2b2lkIDA7XG4gICAgdGhpcy5fX3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuV2FzbSgpO1xuICB9XG4gIHN0b3BTY2FuKCkge1xuICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7IC8vIHN3aXRjaCB0byBzZXJ2ZXLsnbzrlYwg6riw7KG0IFdBU00gbG9vcCDqsJXsoJzsooXro4xcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgc3RvcFN0cmVhbSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmICh0aGlzLl9fc3RyZWFtKSB7XG4gICAgICB0aGlzLl9fc3RyZWFtLnN0b3AgJiYgdGhpcy5fX3N0cmVhbS5zdG9wKCk7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0cmVhbSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIOuplOuqqOumrCBhbGxvY2F0aW9uIGZyZWUg7ZWo7IiYICovXG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpO1xuICAgIHRoaXMuX19kZXN0cm95QnVmZmVyKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lQcmV2SW1hZ2UoKTtcbiAgICB0aGlzLl9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKTtcbiAgfVxuICBfX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcik7XG4gICAgICB0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVc2VCT0NSOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxPQUFPQSxRQUFRLE1BQU0sdUJBQXVCO0FBQzVDLE9BQU9DLGlCQUFpQixNQUFNLG1DQUFtQztBQUNqRSxPQUFPQyxnQkFBZ0IsTUFBTSxrQ0FBa0M7QUFDL0QsU0FBU0MsYUFBYSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsT0FBTyxRQUFRLGtDQUFrQztBQUN4RixPQUFPQyxTQUFTLE1BQU0seUJBQXlCO0FBQy9DLElBQUlDLFFBQVE7QUFDWixNQUFNQyxPQUFPLENBQUM7RUFvQ1o7O0VBRUE7O0VBc0VpQztFQUNMOztFQU1FO0VBQ0Y7RUFDQzs7RUFLN0I7O0VBK0pBO0VBQ0FDLFdBQVdBLENBQUEsRUFBRztJQUFBQyxlQUFBLHNCQXpSQTtNQUNaQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxTQUFTLEVBQUUsV0FBVztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsbUJBQW1CLEVBQUUsZ0JBQWdCO01BQ3JDQyxrQkFBa0IsRUFBRSxlQUFlO01BQ25DQyxzQkFBc0IsRUFBRSx3QkFBd0I7TUFDaERDLHFCQUFxQixFQUFFLHVCQUF1QjtNQUM5Q0MsY0FBYyxFQUFFLFlBQVk7TUFDNUJDLHVCQUF1QixFQUFFLHFCQUFxQjtNQUM5Q0MsV0FBVyxFQUFFLGFBQWE7TUFDMUJDLG9CQUFvQixFQUFFLHNCQUFzQjtNQUM1Q0MsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUFBWixlQUFBLHFCQUNZO01BQ1hFLFNBQVMsRUFBRSxDQUFDLENBQUM7TUFDYkMsS0FBSyxFQUFFLENBQUM7TUFDUk8sV0FBVyxFQUFFLENBQUM7TUFDZEcsSUFBSSxF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
