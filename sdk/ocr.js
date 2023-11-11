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
      // 암호화
      useEncryptMode: false,
      // 암호화 적용 (개인고유식별부호 관련 항목 암호화)
      useEncryptAllMode: false,
      // 암호화 적용 (전체 암호화, encrypt object 별도 제공)
      // 추후 위에 주석 풀어야함 - START
      // usePiiEncryptMode: false, // 암호화 적용 (pii)
      // usePiiEncryptFace: false, // 신분증 얼굴사진 암호화 적용 (pii)
      // 추후 위에 주석 풀어야함 - END
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
      ssaRetryPivot: 0.5,
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
  isEncryptMode() {
    return this.__options.useEncryptMode || this.__options.useEncryptAllMode;
  }
  encryptResult(review_result) {
    if (this.isEncryptMode() && this.__isSupportWasm) {
      if (this.__options.useEncryptMode) {
        var includeList = ['jumin', 'driver_number', 'passport_number', 'personal_number', 'mrz2'];
        // prettier-ignore

        var encrypted = {
          ocr_result: _.toPairs(_.pick(review_result.ocr_result, includeList)).reduce((acc, _ref) => {
            var [key, value] = _ref;
            acc[key] = this.__encryptScanResult(value);
            return acc;
          }, {}),
          ocr_origin_image: this.__encryptScanResult(review_result.ocr_origin_image)
        };
        review_result.ocr_result = _objectSpread(_objectSpread({}, review_result.ocr_result), encrypted.ocr_result);
        review_result.ocr_origin_image = encrypted.ocr_origin_image;
      } else {
        var excludeList = ['complete', 'result_scan_type', 'color_point', 'found_face', 'specular_ratio', 'start_time', 'end_time', 'fd_confidence', 'id_truth', 'id_truth_retry_count'];
        // prettier-ignore
        review_result.encrypted = {
          ocr_result: _.toPairs(_.omit(review_result.ocr_result, excludeList)).reduce((acc, _ref2) => {
            var [key, value] = _ref2;
            acc[key] = this.__encryptScanResult(value);
            return acc;
          }, {}),
          ocr_origin_image: this.__encryptScanResult(review_result.ocr_origin_image),
          ocr_masking_image: this.__encryptScanResult(review_result.ocr_masking_image),
          ocr_face_image: this.__encryptScanResult(review_result.ocr_face_image)
        };
      }
    }
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
          if (_this3.isEncryptMode() && _this3.__isSupportWasm) {
            yield _this3.__preloadingWasm(); // 서버모드 이지만 암호화 하기위해 wasm을 preloading 함
          }

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
      var _ref4 = _asyncToGenerator(function* () {
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
        return _ref4.apply(this, arguments);
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
          var _ref7 = _asyncToGenerator(function* (isSetIgnoreComplete) {
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
            return _ref7.apply(this, arguments);
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

          // 추후 위에 주석 풀어야함 - START
          // if (!isCreditCard && this.__options.usePiiEncryptMode) {
          //   originImage = this.__getPiiEncryptImageBase64(
          //     address,
          //     this.OCR_IMG_MASK_MODE.FALSE,
          //     ocrImageMode
          //   );
          //
          //   console.log('encrypt base64 image', { originImage });
          // }
          //
          // if (faceImage && this.__options.usePiiEncryptFace) {
          //   faceImage = this.__getPiiEncryptImageBase64(
          //     address,
          //     null,
          //     ocrImageMode,
          //     'face'
          //   );
          //   console.log('encrypt base64 face image', { faceImage });
          // }
          // 추후 위에 주석 풀어야함 - END

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
          var _ref10 = _asyncToGenerator(function* (event) {
            _this_2.__isSwitchToServerMode = event.target.checked;
            yield _this_2.restartOCR(_this_2.__ocrType, _this_2.__onSuccess, _this_2.__onFailure, _this_2.__onInProgressChange, true);
          });
          return function __onClickSwitchUI(_x2) {
            return _ref10.apply(this, arguments);
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
        sdkSupportEnv += '_simd';
      } else {
        void 0;
      }
      void 0;
      window.usebOCREnvInfo = envInfo;
      void 0;
      var url = new URL(sdkSupportEnv + '.js', _this22.__options.resourceBaseUrl);
      var src = yield fetch(url.href).then(res => res.text()).then(text => {
        var regex = /(.*) = Module.cwrap/gm;
        var source = text.replace(regex, 'Module.$1 = Module.cwrap');

        // data(model)
        source = source.replace(/^\(function\(\) \{/m, 'var createModelData = async function() {\n' + ' return new Promise(async function (resolve, reject) {\n');
        source = source.replace('   console.error("package error:", error);', '   reject();\n' + '   console.error("package error:", error);');
        source = source.replace('  }, handleError)', '  resolve();\n' + '  }, handleError)');
        source = source.replace(/^\}\)\(\);/m, '\n })\n' + '};');

        // wasm
        source = source.replace(sdkSupportEnv + '.wasm', new URL(sdkSupportEnv + '.wasm', _this22.__options.resourceBaseUrl).href);
        source = source.replace(new RegExp("REMOTE_PACKAGE_BASE = ['\"]".concat(sdkSupportEnv, "\\.data[\"']"), 'gm'), "REMOTE_PACKAGE_BASE = \"".concat(new URL(sdkSupportEnv + '.data', _this22.__options.resourceBaseUrl).href, "\""));
        source = source.replace('function createWasm', 'async function createWasm');
        source = source.replace('instantiateAsync();', 'await instantiateAsync();');

        // wasm and data(model) file 병렬로 fetch 하기 위해
        source = source.replace('var asm = createWasm();', 'console.log("create wasm and data - start")\n' + 'await (async function() {\n' + '  return new Promise(function(resolve) {\n' + '    var isCreatedWasm = false;\n' + '    var isCreatedData = false;\n' + '    createWasm().then(() => {\n' + '      isCreatedWasm = true;\n' + '      if (isCreatedData) { resolve(); }\n' + '    });\n' + '    createModelData().then(() => {\n' + '      isCreatedData = true;\n' + '      if (isCreatedWasm) { resolve(); }\n' + '    })\n' + '  });\n' + '})();\n' + 'console.log("create wasm and data - end")');
        return source;
      });
      src = "\n    (async function() {\n      ".concat(src, "\n      Module.lengthBytesUTF8 = lengthBytesUTF8\n      Module.stringToUTF8 = stringToUTF8\n      return Module\n    })()\n        ");
      _this22.__OCREngine = yield eval(src);
      _this22.__OCREngine.onRuntimeInitialized = /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator(function* (_) {
          void 0;
        });
        return function (_x3) {
          return _ref11.apply(this, arguments);
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
      // 추후 위에 주석 풀어야함 - START
      // this.__setPiiEncryptMode(this.__options.usePiiEncryptMode); // ocr result encrypt
      // 추후 위에 주석 풀어야함 - END
      this.__blurCaptureButton();
      this.__address = 0;
      this.__pageEnd = false;
      this.__manualOCRRetryCount = 0;
      this.__ssaRetryCount = 0;
      var scan = /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator(function* () {
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
                      var _ref13 = _asyncToGenerator(function* () {
                        _this23.__ssaRetryCount++;
                        void 0; // prettier-ignore
                        ssaResult = yield _this23.__startTruthRetry(_this23.__ocrType, _this23.__address, item); // prettier-ignore
                        if (ssaResult === null) throw new Error('[ERR] SSA MODE is true. but, ssaResult is null'); // prettier-ignore

                        ssaResultList.push(ssaResult);
                      });
                      return function execute() {
                        return _ref13.apply(this, arguments);
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
              } = usebOCRWASMParser.parseOcrResult(_this23.__ocrType, _this23.__ssaMode, ocrResult, ssaResult, _this23.__ssaRetryCount, ssaResultList, _this23.__options.ssaRetryType, _this23.__options.ssaRetryPivot
              // 추후 위에 주석 풀어야함 - START
              // this.__options.usePiiEncryptMode
              // 추후 위에 주석 풀어야함 - END
              );

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
              _this23.encryptResult(review_result);
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
          return _ref12.apply(this, arguments);
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
      var _ref14 = _asyncToGenerator(function* (resolve, reject) {
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
        return _ref14.apply(this, arguments);
      };
    }());
  }
  __startScanServerImpl() {
    var _this26 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator(function* (resolve, reject) {
        try {
          // 추후 위에 주석 풀어야함 - START
          // this.__setPiiEncryptMode(this.__options.usePiiEncryptMode); // ocr result encrypt
          // 추후 위에 주석 풀어야함 - END
          _this26.__blurCaptureButton();
          var ocrResult = null,
            ssaResult = null,
            ssaResultList = [];
          var __onClickCaptureButton = /*#__PURE__*/function () {
            var _ref16 = _asyncToGenerator(function* () {
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
                _this26.encryptResult(review_result);
                if (_this26.__options.useLegacyFormat) {
                  review_result.ocr_data = legacyFormat;
                }
                yield _this26.__onSuccessProcess(review_result);
                _this26.__closeCamera();
                resolve();
              }
            });
            return function __onClickCaptureButton() {
              return _ref16.apply(this, arguments);
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
        return _ref15.apply(this, arguments);
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

  // 추후 위에 주석 풀어야함 - START
  // __setPiiEncryptMode(piiEncryptMode) {
  //   this.__OCREngine.setPiiEncrypt(piiEncryptMode);
  // }
  //
  // __encryptDetectedBase64(address, mask, ocr_mode, imgType = 'card') {
  //   if (imgType === 'face') {
  //     return this.__OCREngine.encryptBase64jpgDetectedPhotoBase64(address);
  //   }
  //   return this.__OCREngine.encryptBase64jpgDetectedFrameBase64(
  //     address,
  //     mask,
  //     ocr_mode
  //   );
  // }
  //
  // __getEncryptedSize() {
  //   return this.__OCREngine.getEncryptedJpgSize();
  // }
  //
  // __getEncryptedBuffer() {
  //   return this.__OCREngine.getEncryptedJpgBuffer();
  // }
  //
  // __getPiiEncryptImageBase64(address, mask, imgMode, imgType = 'card') {
  //   const encryptDetectedBase64 = this.__encryptDetectedBase64(
  //     address,
  //     mask,
  //     imgMode,
  //     imgType
  //   );
  //   if (encryptDetectedBase64 === 1) {
  //     const jpgSize = this.__getEncryptedSize();
  //     const jpgPointer = this.__getEncryptedBuffer();
  //
  //     const encrypted = new Uint8Array(
  //       this.__OCREngine.HEAP8.buffer,
  //       jpgPointer,
  //       jpgSize
  //     );
  //     const textDecoder = new TextDecoder('utf-8');
  //     const decodedString = textDecoder.decode(encrypted);
  //
  //     return decodedString;
  //   }
  //   return '';
  // }
  // 추후 위에 주석 풀어야함 - END

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJ1c2ViT0NSV0FTTVBhcnNlciIsInVzZWJPQ1JBUElQYXJzZXIiLCJpc1N1cHBvcnRXYXNtIiwibWVhc3VyZSIsInNpbWQiLCJ0aHJlYWRzIiwiSW1hZ2VVdGlsIiwiaW5zdGFuY2UiLCJVc2VCT0NSIiwiY29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydHkiLCJOT05FIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVF9TVUNDRVNTIiwiQ0FSRF9ERVRFQ1RfRkFJTEVEIiwiTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUyIsIk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJXQVJQSU5HIiwiQ1JPUFBJTkciLCJGQUxTRSIsIlRSVUUiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZUVuY3J5cHRNb2RlIiwidXNlRW5jcnlwdEFsbE1vZGUiLCJ1c2VMZWdhY3lGb3JtYXQiLCJ1c2VNYXNrSW5mbyIsInVzZUZhY2VJbWFnZSIsInVzZUltYWdlV2FycGluZyIsInVzZUNvbXByZXNzSW1hZ2UiLCJ1c2VDb21wcmVzc0ltYWdlTWF4V2lkdGgiLCJ1c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lIiwidXNlVG9wVUkiLCJ1c2VUb3BVSVRleHRNc2ciLCJ1c2VNaWRkbGVVSSIsInVzZU1pZGRsZVVJVGV4dE1zZyIsInVzZUJvdHRvbVVJIiwidXNlQm90dG9tVUlUZXh0TXNnIiwidXNlUHJldmlld1VJIiwidXNlQ2FwdHVyZVVJIiwiZnJhbWVCb3JkZXJTdHlsZSIsIndpZHRoIiwicmFkaXVzIiwic3R5bGUiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9zdWNjZXNzIiwiZGV0ZWN0X2ZhaWxlZCIsIm1hbnVhbF9jYXB0dXJlX3N1Y2Nlc3MiLCJtYW51YWxfY2FwdHVyZV9mYWlsZWQiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9zdWNjZXNzIiwib2NyX3N1Y2Nlc3Nfd2l0aF9zc2EiLCJvY3JfZmFpbGVkIiwidXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UiLCJtYXNrRnJhbWVTdHlsZSIsImNsaXBfZnJhbWUiLCJiYXNlX2NvbG9yIiwidXNlQXV0b1N3aXRjaFRvU2VydmVyTW9kZSIsInVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZSIsInN3aXRjaFRvU2VydmVyVGhyZXNob2xkIiwidXNlRm9yY2VDb21wbGV0ZVVJIiwiY2FwdHVyZUJ1dHRvblN0eWxlIiwic3Ryb2tlX2NvbG9yIiwicmVzb3VyY2VCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJkZXZpY2VMYWJlbCIsInZpZGVvVGFyZ2V0SWQiLCJyb3RhdGlvbkRlZ3JlZSIsIm1pcnJvck1vZGUiLCJjYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWEiLCJjYWxjR3VpZGVCb3hDcml0ZXJpYSIsInNzYVJldHJ5VHlwZSIsInNzYVJldHJ5UGl2b3QiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRlZCIsIl9fcHJlbG9hZGluZ1N0YXR1cyIsIl9fbG9hZFJlc291cmNlcyIsIl9fcHJlbG9hZGVkIiwiaXNJbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZWQiLCJnZXRQcmVsb2FkaW5nU3RhdHVzIiwiaXNFbmNyeXB0TW9kZSIsIl9fb3B0aW9ucyIsImVuY3J5cHRSZXN1bHQiLCJyZXZpZXdfcmVzdWx0IiwiX19pc1N1cHBvcnRXYXNtIiwiaW5jbHVkZUxpc3QiLCJlbmNyeXB0ZWQiLCJvY3JfcmVzdWx0IiwiXyIsInRvUGFpcnMiLCJwaWNrIiwicmVkdWNlIiwiYWNjIiwiX3JlZiIsImtleSIsInZhbHVlIiwiX19lbmNyeXB0U2NhblJlc3VsdCIsIm9jcl9vcmlnaW5faW1hZ2UiLCJfb2JqZWN0U3ByZWFkIiwiZXhjbHVkZUxpc3QiLCJvbWl0IiwiX3JlZjIiLCJvY3JfbWFza2luZ19pbWFnZSIsIm9jcl9mYWNlX2ltYWdlIiwiZ2V0T0NSRW5naW5lIiwiX19PQ1JFbmdpbmUiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJfX2xpY2Vuc2UiLCJtZXJnZWRPcHRpb25zIiwibWVyZ2UiLCJzZXRPcHRpb24iLCJfX3dpbmRvd0V2ZW50QmluZCIsIl9fZGV2aWNlSW5mbyIsImdldE9zVmVyc2lvbiIsImdldE9wdGlvbiIsImdldE9jclR5cGUiLCJ0eXBlIiwiX19vY3JUeXBlTnVtYmVyVG9TdHJpbmciLCJnZXQiLCJnZXRPY3JUeXBlTnVtYmVyIiwic3RyaW5nIiwiX19vY3JTdHJpbmdUb1R5cGVOdW1iZXIiLCJnZXRVSU9yaWVudGF0aW9uIiwiX191aU9yaWVudGF0aW9uIiwiZ2V0VmlkZW9PcmllbnRhdGlvbiIsIl9fdmlkZW9PcmllbnRhdGlvbiIsImNoZWNrU3dpdGNoVG9TZXJ2ZXJNb2RlIiwiX3RoaXMyIiwiX19pc1N3aXRjaFRvU2VydmVyTW9kZSIsImxhdGVuY3lQZXIxMDBtcyIsIm1lYXN1cmVSZXBvcnQiLCJfX2RlYnVnIiwic3RhcnRPQ1IiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJfYXJndW1lbnRzIiwiYXJndW1lbnRzIiwiX3RoaXMzIiwib25JblByb2dyZXNzQ2hhbmdlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX19vY3JUeXBlIiwiX19zc2FNb2RlIiwiaW5kZXhPZiIsIl9fb25TdWNjZXNzIiwiX19vbkZhaWx1cmUiLCJfX29uSW5Qcm9ncmVzc0NoYW5nZSIsIl9fdG9wVUkiLCJnZXRPQ1JFbGVtZW50cyIsInRvcFVJIiwiX19taWRkbGVVSSIsIm1pZGRsZVVJIiwiX19ib3R0b21VSSIsImJvdHRvbVVJIiwiX19jaGFuZ2VTdGFnZSIsIl9fcHJlcHJvY2VzcyIsIl9fcHJlbG9hZGluZ1dhc20iLCJfX3N0YXJ0U2NhblNlcnZlciIsIl9fc3RhcnRTY2FuV2FzbSIsImUiLCJzdG9wT0NSIiwiY2xlYW51cCIsIl9fY2xvc2VDYW1lcmEiLCJzZXRJZ25vcmVDb21wbGV0ZSIsInZhbCIsImVuY3J5cHQiLCJwbGFpblN0ciIsInJlc3RhcnRPQ1IiLCJvY3JUeXBlIiwiX2FyZ3VtZW50czIiLCJfdGhpczQiLCJpc1N3aXRjaE1vZGUiLCJfX3dhaXRQcmVsb2FkZWQiLCJfdGhpczUiLCJ3YWl0aW5nUmV0cnlDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hlY2siLCJzZXRUaW1lb3V0IiwiY29udmVydFR5cGVUb051bWJlciIsIm9wdGlvbiIsImlzTmFOIiwicGFyc2VJbnQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiX19wYWdlRW5kIiwiaGFuZGxlUmVzaXplIiwiX3JlZjQiLCJfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiYXBwbHkiLCJfX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIm1zZyIsIl9fc2xlZXAiLCJtcyIsIl9fYmxvYlRvQmFzZTY0IiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX19iYXNlNjR0b0Jsb2IiLCJiYXNlNjQiLCJieXRlU3RyaW5nIiwiYXRvYiIsInNwbGl0IiwibWltZVN0cmluZyIsImFiIiwiQXJyYXlCdWZmZXIiLCJpYSIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsIkJsb2IiLCJfX2NvbXByZXNlQmFzZTY0SW1hZ2UiLCJvcHRpb25zIiwiY29uc3RhbnROdW1iZXIiLCJfdGhpczYiLCJibG9iRmlsZSIsImNvbXByZXNzZWQiLCJjb21wcmVzc0ltYWdlIiwiY29tcHJlc3Npb25SYXRpbyIsIk1hdGgiLCJyb3VuZCIsInNpemUiLCJfX2dldFN0cmluZ09uV2FzbUhlYXAiLCJsZW5ndGhCeXRlcyIsImxlbmd0aEJ5dGVzVVRGOCIsIl9fc3RyaW5nT25XYXNtSGVhcCIsIl9tYWxsb2MiLCJzdHJpbmdUb1VURjgiLCJvY3JSZXN1bHQiLCJzdHJpbmdPbldhc21IZWFwIiwidG9TdHJpbmciLCJqc29uU3RyaW5nIiwiX2ZyZWUiLCJfX3NldFZpZGVvUmVzb2x1dGlvbiIsInZpZGVvRWxlbWVudCIsIl90aGlzNyIsImlzU3VwcG9ydGVkUmVzb2x1dGlvbiIsInJlc29sdXRpb25UZXh0IiwiX19jYW1TZXRDb21wbGV0ZSIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsInNyY09iamVjdCIsIl9fdmlkZW9XaWR0aCIsIl9fdmlkZW9IZWlnaHQiLCJfX2dldFNjYW5uZXJBZGRyZXNzIiwiX19vY3JUeXBlTGlzdCIsImluY2x1ZGVzIiwiYWRkcmVzcyIsImRlc3Ryb3lDYWxsYmFjayIsImdldElEQ2FyZFNjYW5uZXIiLCJkZXN0cm95SURDYXJkU2Nhbm5lciIsImdldFBhc3Nwb3J0U2Nhbm5lciIsImRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIiLCJnZXRBbGllblNjYW5uZXIiLCJkZXN0cm95QWxpZW5TY2FubmVyIiwiZ2V0Q3JlZGl0U2Nhbm5lciIsImRlc3Ryb3lDcmVkaXRTY2FubmVyIiwiX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9fcmV0cnlDb3VudEdldEFkZHJlc3MiLCJfX2dldEJ1ZmZlciIsIl9fQnVmZmVyIiwiX19yZXNvbHV0aW9uV2lkdGgiLCJfX3Jlc29sdXRpb25IZWlnaHQiLCJfX3Jlc3VsdEJ1ZmZlciIsIl9fbWFza0luZm9SZXN1bHRCdWYiLCJfX2dldEltYWdlQmFzZTY0IiwibWFza01vZGUiLCJpbWdNb2RlIiwiX2FyZ3VtZW50czMiLCJfdGhpczgiLCJpbWdUeXBlIiwiZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlIiwiZW5jb2RlSnBnRGV0ZWN0ZWRQaG90b0ltYWdlIiwianBnU2l6ZSIsImdldEVuY29kZWRKcGdTaXplIiwianBnUG9pbnRlciIsImdldEVuY29kZWRKcGdCdWZmZXIiLCJyZXN1bHRWaWV3IiwiSEVBUDgiLCJidWZmZXIiLCJkZXN0cm95RW5jb2RlZEpwZyIsIl9fZGVzdHJveUJ1ZmZlciIsIl9fZGVzdHJveVJlc3VsdEJ1ZmZlciIsIl9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyIiwiX19kZXN0cm95UHJldkltYWdlIiwiX19QcmV2SW1hZ2UiLCJfX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwIiwiX19kZXN0cm95U2Nhbm5lckFkZHJlc3MiLCJfX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2siLCJfX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSIsIl90aGlzOSIsIl9fZ2V0Um90YXRpb25EZWdyZWUiLCJfX2dldE1pcnJvck1vZGUiLCJfX2Nyb3BJbWFnZUZyb21WaWRlbyIsIl90aGlzMTAiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwiY2FudmFzIiwicm90YXRpb25DYW52YXMiLCJjYWxjQ2FudmFzIiwiY2FsY1ZpZGVvV2lkdGgiLCJjYWxjVmlkZW9IZWlnaHQiLCJjYWxjVmlkZW9DbGllbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCIsIl9fY3JvcEltYWdlU2l6ZVdpZHRoIiwiY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQiLCJfX2Nyb3BJbWFnZVNpemVIZWlnaHQiLCJjYWxjVmlkZW9PcmllbnRhdGlvbiIsIl9faXNSb3RhdGVkOTBvcjI3MCIsImNhbGNNYXhTV2lkdGgiLCJjYWxjTWF4U0hlaWdodCIsInN4Iiwic3kiLCJyYXRpbyIsInNXaWR0aCIsIm1pbiIsInNIZWlnaHQiLCJtYXgiLCJjYWxjQ29udGV4dCIsImdldENvbnRleHQiLCJ3aWxsUmVhZEZyZXF1ZW50bHkiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9fcm90YXRlIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsImhlaWdodCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9faXNDYXJkYm94RGV0ZWN0ZWQiLCJfYXJndW1lbnRzNCIsIl90aGlzMTEiLCJib3hUeXBlIiwicmV0cnlJbWciLCJzZXQiLCJkYXRhIiwia29yIiwiYWxpZW4iLCJwYXNzcG9ydCIsImRldGVjdF9pZGNhcmRfb3B0IiwiZGV0ZWN0X2lkY2FyZCIsIm1lc3NhZ2UiLCJfX3N0YXJ0UmVjb2duaXRpb24iLCJzc2FNb2RlIiwiaXNTZXRJZ25vcmVDb21wbGV0ZSIsIl90aGlzMTIiLCJyZXN1bHRCdWZmZXIiLCJyZWNvZ25pdGlvbiIsIl9yZWY3IiwiX29jclJlc3VsdCIsIl9vY3JSZXN1bHQyIiwic2NhbklEQ2FyZCIsInNjYW5QYXNzcG9ydCIsInNjYW5BbGllbiIsInNjYW5DcmVkaXQiLCJfX2NzdlRvT2JqZWN0IiwiY29tcGxldGUiLCJfX21hbnVhbE9DUlJldHJ5Q291bnQiLCJfX21hbnVhbE9DUk1heFJldHJ5Q291bnQiLCJxdWV1ZUlkeCIsIl9fZGV0ZWN0ZWRDYXJkUXVldWUiLCJfX2JsdXJDYXB0dXJlQnV0dG9uIiwiX19zZXRTdHlsZSIsImRpc3BsYXkiLCJfeCIsImlzQ3JlZGl0Q2FyZCIsIm9jckltYWdlTW9kZSIsIk9DUl9JTUdfTU9ERSIsIm9yaWdpbkltYWdlIiwiT0NSX0lNR19NQVNLX01PREUiLCJtYXNrSW1hZ2UiLCJmYWNlSW1hZ2UiLCJfX3N0YXJ0VHJ1dGgiLCJyZWplY3QiLCJzY2FuVHJ1dGgiLCJzdHIiLCJwYWlycyIsIm9iaiIsInBhaXIiLCJfX2dldE1hc2tJbmZvIiwibWFza0luZm9SZXN1bHRCdWYiLCJnZXRNYXNrUmVjdCIsIl9fc3RhcnRUcnV0aFJldHJ5IiwiX3RoaXMxMyIsIl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl90aGlzMTQiLCJfX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24iLCJfdGhpczE1IiwiaXNQYXNzcG9ydCIsIl9fc2V0dXBWaWRlbyIsIl9fc3RyZWFtIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicGxheSIsIl9fYWRqdXN0U3R5bGUiLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIm5hbWUiLCJlcnJvck1lc3NhZ2UiLCJfX29uRmFpbHVyZVByb2Nlc3MiLCJzdG9wU3RyZWFtIiwiZWwiLCJhc3NpZ24iLCJfX2NoYW5nZU9DUlN0YXR1cyIsIl9fb2NyU3RhdHVzIiwiX2FyZ3VtZW50czUiLCJfdGhpczE2IiwiZm9yY2VVcGRhdGUiLCJyZWNvZ25pemVkSW1hZ2UiLCJfX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAiLCJfX2luUHJvZ3Jlc3NTdGVwIiwiZ3VpZGVCb3giLCJtYXNrQm94V3JhcCIsImNhcHR1cmVCdXR0b24iLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJfbWFza0JveFdyYXAkcXVlcnlTZWwiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiX2NhcHR1cmVCdXR0b24kcXVlcnlTIiwib2NyTW9kZSIsImNhbGwiLCJfX3VwZGF0ZVByZXZpZXdVSSIsIl9faGlkZVByZXZpZXdVSSIsInByZXZpZXdVSVdyYXAiLCJwcmV2aWV3SW1hZ2UiLCJpbWdTdHlsZSIsImNvbnRleHQiLCJfX2dldElucHV0RGV2aWNlcyIsIl90aGlzMTciLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsImNhbWVyYSIsImRldmljZSIsImtpbmQiLCJnZXRDYXBhYmlsaXRpZXMiLCJfY2FwJGZhY2luZ01vZGUiLCJjYXAiLCJmYWNpbmdNb2RlIiwiX19mYWNpbmdNb2RlQ29uc3RyYWludCIsInB1c2giLCJkZXZpY2VJZCIsImNoZWNrVUlPcmllbnRhdGlvbiIsImN1cnJlbnQiLCJvY3IiLCJpc0NoYW5nZWQiLCJfX3ByZXZVaU9yaWVudGF0aW9uIiwiX19jbGVhckN1c3RvbVVJIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiX19zZXR1cERvbUVsZW1lbnRzIiwiX3RoaXMxOCIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiY3VzdG9tVUlXcmFwIiwiY2FwdHVyZVVJV3JhcCIsImNhcHR1cmVVSSIsInByZXZpZXdVSSIsInN3aXRjaFVJV3JhcCIsInN3aXRjaFVJIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJtYXJnaW4iLCJvdmVyZmxvdyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwibWFza19mcmFtZSIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJ0cmFuc2Zvcm0iLCJjYW52YXNTdHlsZSIsImxlZnQiLCJ0b3AiLCJib3JkZXIiLCJyaWdodCIsImJvdHRvbSIsImN1c3RvbVVJV3JhcFN0eWxlIiwiY2FwdHVyZVVJV3JhcFN0eWxlIiwiY3Vyc29yIiwiY2FwdHVyZUJ1dHRvblNyY1NWRyIsIl9fb25DbGlja0NhcHR1cmVCdXR0b24iLCJwcmV2aWV3VUlXcmFwU3R5bGUiLCJzd2l0Y2hVSVdyYXBTdHlsZSIsInN3aXRjaEhUTUwiLCJzd2l0Y2hDaGVja2JveCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX19vbkNsaWNrU3dpdGNoVUkiLCJfcmVmMTAiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJfeDIiLCJvbmNlIiwiX19pbml0U3R5bGUiLCJfX29jciIsIl9fY2FudmFzIiwiX19yb3RhdGlvbkNhbnZhcyIsIl9fdmlkZW8iLCJfX3ZpZGVvV3JhcCIsIl9fZ3VpZGVCb3giLCJfX2d1aWRlQm94V3JhcCIsIl9fbWFza0JveFdyYXAiLCJfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiX19jdXN0b21VSVdyYXAiLCJfX2NhcHR1cmVVSVdyYXAiLCJfX2NhcHR1cmVVSSIsIl9fY2FwdHVyZUJ1dHRvbiIsIl9fcHJldmlld1VJV3JhcCIsIl9fcHJldmlld1VJIiwiX19wcmV2aWV3SW1hZ2UiLCJfX3N3aXRjaFVJV3JhcCIsIl9fc3dpdGNoVUkiLCJfX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJfdGhpczE5IiwiY29uc3RyYWludFdpZHRoIiwiY29uc3RyYWludEhlaWdodCIsImlkZWFsIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInpvb20iLCJmb2N1c01vZGUiLCJ3aGl0ZUJhbGFuY2VNb2RlIiwiZ2V0VXNlck1lZGlhIiwic3RyZWFtIiwic3RyZWFtU2V0dGluZ3MiLCJnZXRWaWRlb1RyYWNrcyIsImdldFNldHRpbmdzIiwiY29uY2F0IiwiYXNwZWN0UmF0aW8iLCJfdGhpczIwIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwiX19ndWlkZUJveFJhdGlvQnlXaWR0aCIsInZpZGVvUmF0aW9CeUhlaWdodCIsIl9fdmlkZW9SYXRpb0J5SGVpZ2h0IiwicmVkdWNlZEd1aWRlQm94V2lkdGgiLCJfX2d1aWRlQm94UmVkdWNlUmF0aW8iLCJyZWR1Y2VkR3VpZGVCb3hIZWlnaHQiLCJwYWRkaW5nIiwidmlkZW9Jbm5lckdhcCIsImJhY2tncm91bmRDb2xvciIsIm1hc2tCb3hJbm5lciIsInIiLCJtYXNrQm94SW5uZXJXaWR0aCIsIm1hc2tCb3hJbm5lckhlaWdodCIsIl90aGlzMjEiLCJfX2NhbGNHdWlkZUJveENyaXRlcmlhIiwiYSIsImIiLCJuZXdWaWRlb1dpZHRoIiwibmV3VmlkZW9IZWlnaHQiLCJuZXdWaWRlb1JhdGlvQnlXaWR0aCIsIm5ld1ZpZGVvUmF0aW9CeUhlaWdodCIsImNhbGNTdW1PZkhlaWdodEJvdHRvbVVJQ2hpbGROb2RlcyIsIl9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2RlcyIsImNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0IiwiY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJiYXNlbGluZSIsInN1bSIsIml0ZW0iLCJjaGlsZE5vZGVzIiwic3RvcFNjYW4iLCJfdGhpczIyIiwiX19yZXNvdXJjZXNMb2FkZWQiLCJfX2lzU3VwcG9ydFNpbWQiLCJlbnZJbmZvIiwib3MiLCJvc1NpbXBsZSIsInVzZWJPQ1JFbnZJbmZvIiwic2RrU3VwcG9ydEVudiIsInVybCIsImZldGNoIiwiaHJlZiIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwicmVnZXgiLCJzb3VyY2UiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZXZhbCIsIm9uUnVudGltZUluaXRpYWxpemVkIiwiX3JlZjExIiwiX3gzIiwiX19zdGFydFNjYW5XYXNtSW1wbCIsIl90aGlzMjMiLCJfX2RldGVjdGVkIiwiX19hZGRyZXNzIiwiX19zc2FSZXRyeUNvdW50Iiwic2NhbiIsIl9yZWYxMiIsImlzRGV0ZWN0ZWRDYXJkIiwic3NhUmVzdWx0Iiwic3NhUmVzdWx0TGlzdCIsIm1hc2tJbmZvIiwicmVzb2x1dGlvbl93IiwicmVzb2x1dGlvbl9oIiwiX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUiLCJyZXRyeVN0YXJ0RGF0ZSIsIkRhdGUiLCJGQUtFIiwiUkVBTCIsIkVOU0VNQkxFIiwiaXNDb21wbGV0ZWQiLCJfbG9vcCIsImV4ZWN1dGUiLCJfcmVmMTMiLCJfcmV0IiwicmV0cnlXb3JraW5nVGltZSIsImxlZ2FjeUZvcm1hdCIsIm5ld0Zvcm1hdCIsInBhcnNlT2NyUmVzdWx0Iiwib2NyX3R5cGUiLCJzc2FfbW9kZSIsIl9fY29tcHJlc3NJbWFnZXMiLCJvY3JfZGF0YSIsIl9fb25TdWNjZXNzUHJvY2VzcyIsIl9fcmVjb3ZlcmVkIiwiX3RoaXMyNCIsInJlc2l6ZVJhdGlvIiwiZGVmYXVsdE9wdGlvbnMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNvbnZlcnRTaXplIiwidGFyZ2V0Q29tcHJlc3NWb2x1bWUiLCJtYXNraW5nSW1hZ2VPcHRpb25zIiwicXVhbGl0eSIsIl9fcmVxdWVzdEdldEFQSVRva2VuIiwiY3JlZGVudGlhbCIsImF1dGhTZXJ2ZXJJbmZvIiwiYmFzZVVybCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwianNvbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJjYXRjaCIsImVyciIsIl9fcmVxdWVzdFNlcnZlck9DUiIsIl90aGlzMjUiLCJfcmVmMTQiLCJvY3JTZXJ2ZXJCYXNlVXJsIiwiYXBpVG9rZW4iLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwiaW1hZ2VfYmFzZTY0IiwibWFza19tb2RlIiwiZmFjZV9tb2RlIiwicmVxdWVzdE9wdGlvbnMiLCJyZWRpcmVjdCIsIl94NCIsIl94NSIsIl9fc3RhcnRTY2FuU2VydmVySW1wbCIsIl90aGlzMjYiLCJfcmVmMTUiLCJfcmVmMTYiLCJiYXNlNjRJbWFnZVJlc3VsdCIsIl94NiIsIl94NyIsImltZ0RhdGFVUkwiLCJsaW1pdFNhdmVJbWFnZUNvdW50Iiwic2hpZnQiLCJfX2RlYnVnTW9kZSIsIl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQiLCJfdGhpczI3IiwiYXBpX3Jlc3BvbnNlIiwicmVzdWx0X2NvZGUiLCJyZXN1bHRfbWVzc2FnZSIsInJlc3VsdENvZGUiLCJfdGhpczI4IiwiZXJyb3JEZXRhaWwiLCJzdGFjayIsImVycm9yX2RldGFpbCIsIl90aGlzMjkiLCJwcmVsb2FkaW5nU3RhdHVzIiwiX3RoaXMzMCIsIl90aGlzMzEiLCJfX3JlY292ZXJ5U2NhbiIsIl90aGlzMzIiLCJjYW52YXNDb250ZXh0IiwiY2xlYXJSZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VzIjpbIm9jci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogZ2xvYmFsLW1vZHVsZSAqL1xuaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgdXNlYk9DUldBU01QYXJzZXIgZnJvbSAnLi9oZWxwZXJzL3VzZWItb2NyLXdhc20tcGFyc2VyLmpzJztcbmltcG9ydCB1c2ViT0NSQVBJUGFyc2VyIGZyb20gJy4vaGVscGVycy91c2ViLW9jci1hcGktcGFyc2VyLmpzJztcbmltcG9ydCB7IGlzU3VwcG9ydFdhc20sIG1lYXN1cmUsIHNpbWQsIHRocmVhZHMgfSBmcm9tICcuL2hlbHBlcnMvd2FzbS1mZWF0dXJlLWRldGVjdC5qcyc7XG5pbXBvcnQgSW1hZ2VVdGlsIGZyb20gJy4vaGVscGVycy9pbWFnZS11dGlsLmpzJztcbmxldCBpbnN0YW5jZTtcbmNsYXNzIFVzZUJPQ1Ige1xuICBJTl9QUk9HUkVTUyA9IHtcbiAgICBOT05FOiAnbm9uZScsXG4gICAgTk9UX1JFQURZOiAnbm90X3JlYWR5JyxcbiAgICBSRUFEWTogJ3JlYWR5JyxcbiAgICBDQVJEX0RFVEVDVF9TVUNDRVNTOiAnZGV0ZWN0X3N1Y2Nlc3MnLFxuICAgIENBUkRfREVURUNUX0ZBSUxFRDogJ2RldGVjdF9mYWlsZWQnLFxuICAgIE1BTlVBTF9DQVBUVVJFX1NVQ0NFU1M6ICdtYW51YWxfY2FwdHVyZV9zdWNjZXNzJyxcbiAgICBNQU5VQUxfQ0FQVFVSRV9GQUlMRUQ6ICdtYW51YWxfY2FwdHVyZV9mYWlsZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEOiAncmVjb2duaXplZCcsXG4gICAgT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6ICdyZWNvZ25pemVkX3dpdGhfc3NhJyxcbiAgICBPQ1JfU1VDQ0VTUzogJ29jcl9zdWNjZXNzJyxcbiAgICBPQ1JfU1VDQ0VTU19XSVRIX1NTQTogJ29jcl9zdWNjZXNzX3dpdGhfc3NhJyxcbiAgICBPQ1JfRkFJTEVEOiAnb2NyX2ZhaWxlZCdcbiAgfTtcbiAgT0NSX1NUQVRVUyA9IHtcbiAgICBOT1RfUkVBRFk6IC0xLFxuICAgIFJFQURZOiAwLFxuICAgIE9DUl9TVUNDRVNTOiAxLFxuICAgIERPTkU6IDJcbiAgfTtcbiAgUFJFTE9BRElOR19TVEFUVVMgPSB7XG4gICAgTk9UX1NUQVJURUQ6IC0xLFxuICAgIFNUQVJURUQ6IDAsXG4gICAgRE9ORTogMVxuICB9O1xuICBPQ1JfSU1HX01PREUgPSB7XG4gICAgV0FSUElORzogMCxcbiAgICBDUk9QUElORzogMSxcbiAgICBOT05FOiAyXG4gIH07XG4gIE9DUl9JTUdfTUFTS19NT0RFID0ge1xuICAgIEZBTFNFOiAwLFxuICAgIFRSVUU6IDFcbiAgfTtcblxuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cblxuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIF9fZGVidWdNb2RlID0gZmFsc2U7XG4gIF9fT0NSRW5naW5lID0gbnVsbDtcbiAgX19pc1N1cHBvcnRXYXNtID0gZmFsc2U7XG4gIF9faXNTdXBwb3J0U2ltZCA9IGZhbHNlO1xuICBfX2luaXRpYWxpemVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQ7XG4gIF9fbGljZW5zZTtcbiAgX19vY3JUeXBlID0gbnVsbDtcbiAgX19zc2FNb2RlID0gZmFsc2U7XG4gIF9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50ID0gMTA7XG4gIF9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gIF9fc3NhUmV0cnlDb3VudCA9IDA7XG4gIF9fZGV0ZWN0ZWRDYXJkUXVldWUgPSBbXTtcbiAgX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NCA9IFtdO1xuICBfX29uU3VjY2VzcyA9IG51bGw7XG4gIF9fb25GYWlsdXJlID0gbnVsbDtcbiAgX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsO1xuICBfX29jclR5cGVMaXN0ID0gWydpZGNhcmQnLCAnZHJpdmVyJywgJ3Bhc3Nwb3J0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnYWxpZW4nLCAnY3JlZGl0JywgJ2lkY2FyZC1zc2EnLCAnZHJpdmVyLXNzYScsICdwYXNzcG9ydC1zc2EnLCAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLCAnYWxpZW4tc3NhJ107XG4gIF9fb2NyVHlwZU51bWJlclRvU3RyaW5nID0gbmV3IE1hcChbWycxJywgJ2lkY2FyZCddLCBbJzInLCAnZHJpdmVyJ10sIFsnMycsICdwYXNzcG9ydCddLCBbJzQnLCAnZm9yZWlnbi1wYXNzcG9ydCddLCBbJzUnLCAnYWxpZW4nXSwgWyc1LTEnLCAnYWxpZW4nXSwgWyc1LTInLCAnYWxpZW4nXSwgWyc1LTMnLCAnYWxpZW4nXV0pO1xuICBfX29jclN0cmluZ1RvVHlwZU51bWJlciA9IG5ldyBNYXAoW1snaWRjYXJkJywgJzEnXSwgWydkcml2ZXInLCAnMiddLCBbJ3Bhc3Nwb3J0JywgJzMnXSwgWydmb3JlaWduLXBhc3Nwb3J0JywgJzQnXSwgWydhbGllbicsICc1J10sIFsnYWxpZW4nLCAnNS0xJ10sIFsnYWxpZW4nLCAnNS0yJ10sIFsnYWxpZW4nLCAnNS0zJ11dKTtcbiAgX19wYWdlRW5kID0gZmFsc2U7XG4gIF9fb2NyO1xuICBfX2NhbnZhcztcbiAgX19yb3RhdGlvbkNhbnZhcztcbiAgX192aWRlbztcbiAgX192aWRlb1dyYXA7XG4gIF9fZ3VpZGVCb3g7XG4gIF9fZ3VpZGVCb3hXcmFwO1xuICBfX21hc2tCb3hXcmFwO1xuICBfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICBfX2N1c3RvbVVJV3JhcDtcbiAgX190b3BVSTtcbiAgX19taWRkbGVVSTtcbiAgX19ib3R0b21VSTtcbiAgX19wcmV2aWV3VUlXcmFwO1xuICBfX3ByZXZpZXdVSTtcbiAgX19wcmV2aWV3SW1hZ2U7XG4gIF9fY2FwdHVyZVVJV3JhcDtcbiAgX19jYXB0dXJlVUk7XG4gIF9fc3dpdGNoVUlXcmFwO1xuICBfX3N3aXRjaFVJO1xuICBfX2NhcHR1cmVCdXR0b247XG4gIF9fYWRkcmVzcyA9IDA7XG4gIF9fZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgX19yZWNvdmVyZWQgPSBmYWxzZTtcbiAgX19CdWZmZXIgPSBudWxsO1xuICBfX3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gIF9fbWFza0luZm9SZXN1bHRCdWYgPSBudWxsO1xuICBfX1ByZXZJbWFnZSA9IG51bGw7XG4gIF9fc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gIF9fY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgX19yZXNvbHV0aW9uV2lkdGggPSAwO1xuICBfX3Jlc29sdXRpb25IZWlnaHQgPSAwO1xuICBfX3ZpZGVvV2lkdGggPSAwO1xuICBfX3ZpZGVvSGVpZ2h0ID0gMDtcbiAgX19yZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgX19pbnRlcnZhbFRpbWVyO1xuICBfX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXI7XG4gIF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQ7XG4gIF9fc3RyZWFtO1xuICBfX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICBfX2ZhY2luZ01vZGVDb25zdHJhaW50ID0gJ2Vudmlyb25tZW50JztcbiAgX191aU9yaWVudGF0aW9uID0gJyc7XG4gIF9fcHJldlVpT3JpZW50YXRpb24gPSAnJztcbiAgX192aWRlb09yaWVudGF0aW9uID0gJyc7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgX190aHJvdHRsaW5nUmVzaXplRGVsYXkgPSA1MDA7XG4gIF9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPSAzMDA7IC8vIOyehOyLnFxuICBfX3JldHJ5Q291bnRHZXRBZGRyZXNzID0gMDsgLy8g7J6E7IucXG4gIF9fZGV2aWNlSW5mbztcbiAgX19pc1JvdGF0ZWQ5MG9yMjcwID0gZmFsc2U7XG4gIF9faW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTtcbiAgX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT05FO1xuICBfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICBfX2d1aWRlQm94UmF0aW9CeVdpZHRoID0gMS4wOyAvLyDsiJjsoJXrtojqsIBcbiAgX192aWRlb1JhdGlvQnlIZWlnaHQgPSAwLjk7IC8vIOyImOygleu2iOqwgFxuICBfX2d1aWRlQm94UmVkdWNlUmF0aW8gPSAwLjg7IC8vIOyImOygleu2iOqwgFxuICBfX2Nyb3BJbWFnZVNpemVXaWR0aCA9IDA7XG4gIF9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IDA7XG4gIF9faXNTd2l0Y2hUb1NlcnZlck1vZGUgPSBmYWxzZTtcblxuICAvKiogRGVmYXVsdCBvcHRpb25zICovXG4gIF9fb3B0aW9ucyA9IG5ldyBPYmplY3Qoe1xuICAgIC8vIOuUlOuyhOq5hSDsmLXshZhcbiAgICBzaG93Q2xpcEZyYW1lOiBmYWxzZSxcbiAgICAvLyBjaWxwLWZyYW1lIOuztOq4sFxuICAgIHNob3dDYW52YXNQcmV2aWV3OiBmYWxzZSxcbiAgICAvLyBjYW52YXMgcHJldmlldyDrs7TquLBcblxuICAgIC8vIOy2nOugpSDsmLXshZhcbiAgICAvLyDslZTtmLjtmZRcbiAgICB1c2VFbmNyeXB0TW9kZTogZmFsc2UsXG4gICAgLy8g7JWU7Zi47ZmUIOyggeyaqSAo6rCc7J246rOg7Jyg7Iud67OE67aA7Zi4IOq0gOugqCDtla3rqqkg7JWU7Zi47ZmUKVxuICAgIHVzZUVuY3J5cHRBbGxNb2RlOiBmYWxzZSxcbiAgICAvLyDslZTtmLjtmZQg7KCB7JqpICjsoITssrQg7JWU7Zi47ZmULCBlbmNyeXB0IG9iamVjdCDrs4Trj4Qg7KCc6rO1KVxuICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIFNUQVJUXG4gICAgLy8gdXNlUGlpRW5jcnlwdE1vZGU6IGZhbHNlLCAvLyDslZTtmLjtmZQg7KCB7JqpIChwaWkpXG4gICAgLy8gdXNlUGlpRW5jcnlwdEZhY2U6IGZhbHNlLCAvLyDsi6DrtoTspp0g7Ja86rW07IKs7KeEIOyVlO2YuO2ZlCDsoIHsmqkgKHBpaSlcbiAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBFTkRcbiAgICB1c2VMZWdhY3lGb3JtYXQ6IGZhbHNlLFxuICAgIC8vIExlZ2FjeSBmb3JtYXQg7KeA7JuQXG4gICAgdXNlTWFza0luZm86IHRydWUsXG4gICAgLy8g66eI7Iqk7YK5IOyijO2RnCDsp4Dsm5BcbiAgICB1c2VGYWNlSW1hZ2U6IHRydWUsXG4gICAgLy8g7Iug67aE7KadIOuCtCDslrzqtbQg7IKs7KeEXG4gICAgdXNlSW1hZ2VXYXJwaW5nOiBmYWxzZSxcbiAgICAvLyDsi6DrtoTspp0g7J2066+47KeA66W8IFdhcnBpbmco7Jmc6rOhIOuztOyglSDtlaDsp4Ag7Jes67aAKVxuICAgIHVzZUNvbXByZXNzSW1hZ2U6IGZhbHNlLFxuICAgIC8vIOyLoOu2hOymnSDsnbTrr7jsp4Drpbwg7JWV7LaV7ZWg7KeAIOyXrOu2gFxuICAgIHVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aDogMTA4MCxcbiAgICAvLyDsnbTrr7jsp4Ag66as7IKs7J207KeVIOqwgOuhnCDtlbTsg4Hrj4RcbiAgICB1c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lOiAxMDI0ICogNTAsXG4gICAgLy8g7J2066+47KeAIOyVley2lSDrqqntkZwg7Jqp65+JXG5cbiAgICAvLyBVSSDshKTsoJVcbiAgICB1c2VUb3BVSTogdHJ1ZSxcbiAgICAvLyDsg4Hri6ggVUlcbiAgICB1c2VUb3BVSVRleHRNc2c6IGZhbHNlLFxuICAgIC8v7IOB64uoIFVJID4gVEVYVFxuICAgIHVzZU1pZGRsZVVJOiB0cnVlLFxuICAgIC8v7KSR64uoIFVJXG4gICAgdXNlTWlkZGxlVUlUZXh0TXNnOiB0cnVlLFxuICAgIC8vIOykkeuLqCBVSSA+IFRFWFRcbiAgICB1c2VCb3R0b21VSTogdHJ1ZSxcbiAgICAvLyDtlZjri6ggVUlcbiAgICB1c2VCb3R0b21VSVRleHRNc2c6IGZhbHNlLFxuICAgIC8vIO2VmOuLqCBVSSA+IFRFWFRcbiAgICB1c2VQcmV2aWV3VUk6IHRydWUsXG4gICAgLy8gUHJldmlldyBVSVxuICAgIHVzZUNhcHR1cmVVSTogdHJ1ZSxcbiAgICAvLyDsuqHsspjrsoTtirwgVUlcblxuICAgIC8vIOyduOyLnSDtlITroIjsnoQg7Ji17IWYXG4gICAgZnJhbWVCb3JkZXJTdHlsZToge1xuICAgICAgd2lkdGg6IDUsXG4gICAgICAvLyBib3JkZXItd2lkdGhcbiAgICAgIHJhZGl1czogMjAsXG4gICAgICAvLyBib3JkZXItcmFkaXVzXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcbiAgICAgIC8vIGJvcmRlci1zdHlsZVxuXG4gICAgICAvLyDri6jqs4Trs4Qg7J247IudIO2UhOugiOyehCBib3JkZXIg7IOJ7IOBXG4gICAgICBub3RfcmVhZHk6ICcjMDAwMDAwJyxcbiAgICAgIC8vIOyKpOy6lOykgOu5hCA6IOqygOyglVxuICAgICAgcmVhZHk6ICcjYjhiOGI4JyxcbiAgICAgIC8vIOyKpOy6lOuMgOq4sCA6IO2ajOyDiVxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDshLHqs7UgOiDtlZjriphcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjNzI1YjY3JyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDsi6TtjKggOiDrs7TrnbxcbiAgICAgIG1hbnVhbF9jYXB0dXJlX3N1Y2Nlc3M6ICcjNWU4ZmZmJyxcbiAgICAgIC8vIOyImOuPmey0rOyYgSDshLHqs7UgOiDtlZjriphcbiAgICAgIG1hbnVhbF9jYXB0dXJlX2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyLpO2MqCA6IOuztOudvFxuICAgICAgcmVjb2duaXplZDogJyMwMDNhYzInLFxuICAgICAgLy8gT0NS7JmE66OMIDog7YyM656RXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzAwM2FjMicsXG4gICAgICAvLyDsgqzrs7jtjJDrs4TspJEo7IKs67O47YyQ67OEIE9OKSA6IO2MjOuekVxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTRiMDBlJyxcbiAgICAgIC8vIE9DUuyZhOujjCA6IOy0iOuhnVxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTRiMDBlJyxcbiAgICAgIC8vIE9DUuyZhOujjCjsgqzrs7jtjJDrs4QgT04pIDog7LSI66GdXG4gICAgICBvY3JfZmFpbGVkOiAnI0ZBMTEzRCcgLy8gT0NS7Iuk7YyoIDog67mo6rCVXG4gICAgfSxcblxuICAgIC8vIOuniOyKpO2BrCDtlITroIjsnoQgZmlsbCDsu6zrn6wg67OA6rK9IOyCrOyaqSDsl6zrtoBcbiAgICB1c2VNYXNrRnJhbWVDb2xvckNoYW5nZTogdHJ1ZSxcbiAgICAvLyDrp4jsiqTtgawg7ZSE66CI7J6EIOyYteyFmCAo7Lm066mU6528IOu5hOuUlOyYpCDsmIHsl63sl5DshJwg7J247IudIO2UhOugiOyehOunjCDrs7TsnbTqsowg7ZWY6rOgIOuCmOuouOyngOulvCDrja7slrTsk7DripQg7ZSE66CI7J6EIOyYgeyXrSlcbiAgICBtYXNrRnJhbWVTdHlsZToge1xuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLFxuICAgICAgLy8gY2xpcC1mcmFtZSDsg4nsg4EgOiDrlKXtjbztlIwgKOyImOygleu2iOqwgClcbiAgICAgIGJhc2VfY29sb3I6ICcjMzMzMzMzJyxcbiAgICAgIC8vIG1hc2stZnJhbWUg7IOJ7IOBIDog64uk7YGs6re466CI7J20ICjtiKzrqoXrj4TripQg7IiY7KCV67aI6rCAIGZm66GcIOqzoOyglSlcblxuICAgICAgLy8g64uo6rOE67OEIOuniOyKpO2BrCDtlITroIjsnoQgZmlsbCDsg4nsg4FcbiAgICAgIG5vdF9yZWFkeTogJyMzMzMzMzMnLFxuICAgICAgLy8g7Iqk7LqU7KSA67mEXG4gICAgICByZWFkeTogJyMzMzMzMzMnLFxuICAgICAgLy8g7Iqk7LqU64yA6riwXG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyMyMjIyMjInLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyEseqztVxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyMzMzMzMzMnLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyLpO2MqFxuICAgICAgbWFudWFsX2NhcHR1cmVfc3VjY2VzczogJyMyMjIyMjInLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyEseqztVxuICAgICAgbWFudWFsX2NhcHR1cmVfZmFpbGVkOiAnIzMzMzMzMycsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7Iuk7YyoXG4gICAgICByZWNvZ25pemVkOiAnIzIyMjIyMicsXG4gICAgICAvLyBPQ1LsmYTro4xcbiAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6ICcjMjIyMjIyJyxcbiAgICAgIC8vIOyCrOuzuO2MkOuzhOykkSjsgqzrs7jtjJDrs4QgT04pXG4gICAgICBvY3Jfc3VjY2VzczogJyMxMTExMTEnLFxuICAgICAgLy9PQ1LsmYTro4xcbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzExMTExMScsXG4gICAgICAvLyBPQ1LsmYTro4wo7IKs67O47YyQ67OEIE9OKVxuICAgICAgb2NyX2ZhaWxlZDogJyMxMTExMTEnIC8vIE9DUuyLpO2MqFxuICAgIH0sXG5cbiAgICAvLyDstKzsmIHsmLXshZhcbiAgICB1c2VBdXRvU3dpdGNoVG9TZXJ2ZXJNb2RlOiBmYWxzZSxcbiAgICAvLyDsoIDsgqzslpEg64uo66eQ7JeQ7IScIOyEnOuyhE9DUuuhnCDsnpDrj5kg7KCE7ZmYIOq4sOuKpVxuICAgIHVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZTogZmFsc2UsXG4gICAgLy8g7IiY64+Z7Jy866GcIOyEnOuyhE9DUiDsoITtmZgg6riw64qlICjsiJjrj5nsnbQgdHJ1ZeydtOuptCDsnpDrj5nsnYAg66y07Iuc65CoKVxuICAgIHN3aXRjaFRvU2VydmVyVGhyZXNob2xkOiAyMC4wLFxuICAgIC8vIOyekOuPmeyghO2ZmCDquLDspIDqsJIgKOyEseuKpSDsuKHsoJXsuZggbXMpXG4gICAgdXNlRm9yY2VDb21wbGV0ZVVJOiBmYWxzZSxcbiAgICAvLyBXQVNNIOuqqOuTnOydvOuVjCDrsoTtirwg64iE66W87IucIO2VtOuLuSDsi5zsoJDsl5Ag6rCV7KCc66GcIOyZhOujjCDsgqzsmqnsl6zrtoBcblxuICAgIC8vIOyImOuPmey0rOyYgSDrsoTtirwg7Ji17IWYXG4gICAgY2FwdHVyZUJ1dHRvblN0eWxlOiB7XG4gICAgICBzdHJva2VfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIC8vIOuyhO2KvCDthYzrkZDrpqwoc3Ryb2tlKSDsg4nsg4FcbiAgICAgIGJhc2VfY29sb3I6ICcjNWU4ZmZmJyAvLyDrsoTtirwg7IOJ7IOBXG4gICAgfSxcblxuICAgIHJlc291cmNlQmFzZVVybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAvLyB3YXNtLCBkYXRhIO2MjOydvCDrpqzshozsiqQgYmFzZSDqsr3roZwgKENETiDsgqzsmqnsi5wg67OA6rK9KVxuICAgIGRldmljZUxhYmVsOiAnJyxcbiAgICB2aWRlb1RhcmdldElkOiAnJyxcbiAgICAvLyDsubTrqZTrnbwg7ISk7KCVXG4gICAgcm90YXRpb25EZWdyZWU6IDAsXG4gICAgLy8gcm90YXRpb24tZGVncmVlIOy5tOuplOudvOqwgCDtmozsoITrkJwg6rCB64+EICg5MCwgMTkwLCAyNzApXG4gICAgbWlycm9yTW9kZTogZmFsc2UsXG4gICAgLy8gbWlycm9yLW1vZGUg7IWA7ZS8IOy5tOuplOudvCjtgqTsmKTsiqTtgawg65OxKSDsgqzsmqnsi5wg7KKM7JqwIOuwmOyghFxuXG4gICAgLy8g7Lm066mU6528IO2VtOyDgeuPhCDshKTsoJUgIDogJ2NvbXBhdGliaWxpdHknICjtmLjtmZjshLEg7Jqw7ISgKSB8fCAnaGlnaFF1YWxpdHknICjqs6DtmZTsp4gg7Jqw7ISgKVxuICAgIGNhbWVyYVJlc29sdXRpb25Dcml0ZXJpYTogJ2NvbXBhdGliaWxpdHknLFxuICAgIC8vIO2YuO2ZmOyEsSDsmrDshKAo6raM7J6lLCDrlJTtj7TtirgpIDogNzIw7Jy866GcIOqzoOyglSwg7KCA7IKs7JaRIOuLqOunkOq4sCDtmLjtmZjshLEg7KKL7J2MXG4gICAgLy8gY2FtZXJhUmVzb2x1dGlvbkNyaXRlcmlhOiAnaGlnaFF1YWxpdHknLCAvLyDqs6DtmZTsp4gg7Jqw7ISgIDogMTA4MOydtCDqsIDriqXtlZjrqbQgMTA4MCDrtojqsIDriqXtlZjrqbQgNzIwXG5cbiAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOyEpOyglSA6ICdjYW1lcmFSZXNvbHV0aW9uJyAo7Lm066mU6528IO2VtOyDgeuPhCkgfHwgJ29jclZpZXdTaXplJyAob2NyIGRpdiDtgazquLApXG4gICAgY2FsY0d1aWRlQm94Q3JpdGVyaWE6ICdjYW1lcmFSZXNvbHV0aW9uJyxcbiAgICAvLyDsubTrqZTrnbwg7ZW07IOB64+EIOq4sOykgCjqtozsnqUsIOuUlO2PtO2KuCkgOiA3MjB4MTI4MCDtlbTsg4Hrj4Qo7IS466Gc66qo65OcKSDsnbzrlYwgb2NyIHZpZXcgd2lkdGggc2l6ZeqwgCA3MjDrs7Tri6Qg7YGwIOqyveyasCwg6rCA7J2065OcIOuwleyKpOulvCA3MjDsl5Ag66ee7LakIChwcmV2aWV3IO2ZlOuptCDquajsp5Ag7JeG7J2MKVxuICAgIC8vIGNhbGNHdWlkZUJveENyaXRlcmlhOiAnb2NyVmlld1NpemUnLCAvLyDtmZTrqbQg7IKs7J207KaIIOq4sOykgCA6IDcyMHgxMjgwIO2VtOyDgeuPhCjshLjroZzrqqjrk5wpIOydvOuVjCBvY3IgdmlldyB3aWR0aCBzaXpl6rCAIDcyMOuztOuLpCDtgbDqsr3smrAsIOqwgOydtOuTnCDrsJXsiqTrpbwgb2NyIHZpZXcgd2lkdGgg7IKs7JeQ7KaI7JeQIOunnuy2pCAocHJldmlldyDtmZTrqbQg6rCV7KCc66GcIOuKmOumrOq4sCDrlYzrrLjsl5Ag64uk7IaMIOq5qOynkClcblxuICAgIC8vIOyCrOuzuO2MkOuzhCBSRVRSWSDshKTsoJVcbiAgICAvLyBzc2FSZXRyeVR5cGVcbiAgICAvLyAgIC0gUkVBTCAgICAgOiDrs7jsnbgoUkVBTCkg6rGw67aA7JyoIC0+IEZhbHNlIE5lZ2F0aXZlKOyLpOygnOqwkuydgCBSRUFM7J24642wIOyYiOy4oeqwkuydgCBGQUtF65287IScIO2LgOumsOqyveyasCnrpbwg64Ku7LaU6riwIOychO2VtCxcbiAgICAvLyAgIC0gRkFLRSAgICAgOiDtg4DsnbgoRkFLRSkg7IiY65297JyoIC0+IEZhbHNlIFBvc2l0aXZlKOyLpOygnOqwkuydgCBGQUtF7J24642wIOyYiOy4oeqwkuydgCBSRUFM7J2065287IScIO2LgOumsOqyveyasCnrpbwg64Ku7LaU6riwIOychO2VtFxuICAgIC8vICAgLSBFTlNFTUJMRSA6IO2Pieq3oCDsoIjrjIDqsJIgLT4gc3NhTWF4UmV0cnlDb3VudCDrp4ztgbwg67CY67O1IOyImO2Wie2VmOqzoCBmZF9jb25maWRlbmNlIOygiOuMgOqwkiDqsJLsnZgg7Y+J6reg7Jy866GcIO2MkOyglVxuICAgIC8vIHNzYU1heFJldHJ5Q291bnQg7ISk7KCVIOqwkuunjO2BvCDsnqzsi5zrj4TtlZjsl6wg7ZWc67KI7J20652864+EIOq4sOykgOqwkihSRUFMIOuYkOuKlCBGQUtFKeydtCDrnKjrqbQg6riw7KSA6rCSKFJFQUwg65iQ64qUIEZBS0Up66GcIO2MkOyglVxuICAgIHNzYVJldHJ5VHlwZTogJ0VOU0VNQkxFJyxcbiAgICBzc2FSZXRyeVBpdm90OiAwLjUsXG4gICAgLy8gUkVBTC9GQUtF66W8IO2MkOygle2VmOuKlCBmZF9jb25maWRlbmNlIOq4sOykgOqwkiAod2FzbSDrsLDtj6wg67KE7KCE7JeQIOuUsOudvCDri6TrpoQpIOKAuyDsiJjsoJXrtojqsIBcbiAgICBzc2FNYXhSZXRyeUNvdW50OiAwIC8vIOy1nOuMgCBSRVRSWSDtmozsiJjshKTsoJUgMOydtOuptCDrr7jsgqzsmqlcbiAgfSk7XG5cbiAgLyoqIGNvbnN0cnVjdG9yICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKiogcHVibGljIG1ldGhvZHMgKi9cbiAgYXN5bmMgcHJlbG9hZGluZygpIHtcbiAgICBpZiAodGhpcy5pc1ByZWxvYWRlZCgpKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEO1xuICAgICAgYXdhaXQgdGhpcy5fX2xvYWRSZXNvdXJjZXMoKTtcbiAgICAgIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5ET05FO1xuICAgICAgdGhpcy5fX3ByZWxvYWRlZCA9IHRydWU7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGlzSW5pdGlhbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19pbml0aWFsaXplZDtcbiAgfVxuICBpc1ByZWxvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ByZWxvYWRlZDtcbiAgfVxuICBnZXRQcmVsb2FkaW5nU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9fcHJlbG9hZGluZ1N0YXR1cztcbiAgfVxuICBpc0VuY3J5cHRNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucy51c2VFbmNyeXB0TW9kZSB8fCB0aGlzLl9fb3B0aW9ucy51c2VFbmNyeXB0QWxsTW9kZTtcbiAgfVxuICBlbmNyeXB0UmVzdWx0KHJldmlld19yZXN1bHQpIHtcbiAgICBpZiAodGhpcy5pc0VuY3J5cHRNb2RlKCkgJiYgdGhpcy5fX2lzU3VwcG9ydFdhc20pIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VFbmNyeXB0TW9kZSkge1xuICAgICAgICBjb25zdCBpbmNsdWRlTGlzdCA9IFsnanVtaW4nLCAnZHJpdmVyX251bWJlcicsICdwYXNzcG9ydF9udW1iZXInLCAncGVyc29uYWxfbnVtYmVyJywgJ21yejInXTtcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICAgICAgY29uc3QgZW5jcnlwdGVkID0ge1xuICAgICAgICAgIG9jcl9yZXN1bHQ6IF8udG9QYWlycyhfLnBpY2socmV2aWV3X3Jlc3VsdC5vY3JfcmVzdWx0LCBpbmNsdWRlTGlzdCkpLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGFjY1trZXldID0gdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pLFxuICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9vcmlnaW5faW1hZ2UpXG4gICAgICAgIH07XG4gICAgICAgIHJldmlld19yZXN1bHQub2NyX3Jlc3VsdCA9IHtcbiAgICAgICAgICAuLi5yZXZpZXdfcmVzdWx0Lm9jcl9yZXN1bHQsXG4gICAgICAgICAgLi4uZW5jcnlwdGVkLm9jcl9yZXN1bHRcbiAgICAgICAgfTtcbiAgICAgICAgcmV2aWV3X3Jlc3VsdC5vY3Jfb3JpZ2luX2ltYWdlID0gZW5jcnlwdGVkLm9jcl9vcmlnaW5faW1hZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBleGNsdWRlTGlzdCA9IFsnY29tcGxldGUnLCAncmVzdWx0X3NjYW5fdHlwZScsICdjb2xvcl9wb2ludCcsICdmb3VuZF9mYWNlJywgJ3NwZWN1bGFyX3JhdGlvJywgJ3N0YXJ0X3RpbWUnLCAnZW5kX3RpbWUnLCAnZmRfY29uZmlkZW5jZScsICdpZF90cnV0aCcsICdpZF90cnV0aF9yZXRyeV9jb3VudCddO1xuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgcmV2aWV3X3Jlc3VsdC5lbmNyeXB0ZWQgPSB7XG4gICAgICAgICAgb2NyX3Jlc3VsdDogXy50b1BhaXJzKF8ub21pdChyZXZpZXdfcmVzdWx0Lm9jcl9yZXN1bHQsIGV4Y2x1ZGVMaXN0KSkucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHJldmlld19yZXN1bHQub2NyX29yaWdpbl9pbWFnZSksXG4gICAgICAgICAgb2NyX21hc2tpbmdfaW1hZ2U6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9tYXNraW5nX2ltYWdlKSxcbiAgICAgICAgICBvY3JfZmFjZV9pbWFnZTogdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHJldmlld19yZXN1bHQub2NyX2ZhY2VfaW1hZ2UpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldE9DUkVuZ2luZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZTtcbiAgfVxuICBpbml0KHNldHRpbmdzKSB7XG4gICAgaWYgKCEhIXNldHRpbmdzLmxpY2Vuc2VLZXkpIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBrZXkgaXMgZW1wdHknKTtcbiAgICB0aGlzLl9fbGljZW5zZSA9IHNldHRpbmdzLmxpY2Vuc2VLZXk7XG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuX19vcHRpb25zLCBzZXR0aW5ncyk7XG4gICAgdGhpcy5zZXRPcHRpb24obWVyZ2VkT3B0aW9ucyk7XG4gICAgdm9pZCAwO1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRoaXMuX193aW5kb3dFdmVudEJpbmQoKTtcbiAgICAgIHRoaXMuX19kZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLl9faXNTdXBwb3J0V2FzbSA9IGlzU3VwcG9ydFdhc20oKTtcbiAgICAgIGlmICghdGhpcy5fX2lzU3VwcG9ydFdhc20pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZWJBc3NlbWJseSBpcyBub3Qgc3VwcG9ydGVkLiBpbiB0aGlzIGJyb3dzZXIuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBzZXRPcHRpb24oc2V0dGluZ3MpIHtcbiAgICB0aGlzLl9fb3B0aW9ucyA9IHNldHRpbmdzO1xuICB9XG4gIGdldE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX29wdGlvbnM7XG4gIH1cbiAgZ2V0T2NyVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vY3JUeXBlTnVtYmVyVG9TdHJpbmcuZ2V0KHR5cGUpO1xuICB9XG4gIGdldE9jclR5cGVOdW1iZXIoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vY3JTdHJpbmdUb1R5cGVOdW1iZXIuZ2V0KHN0cmluZyk7XG4gIH1cbiAgZ2V0VUlPcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX3VpT3JpZW50YXRpb247XG4gIH1cbiAgZ2V0VmlkZW9PcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb247XG4gIH1cbiAgYXN5bmMgY2hlY2tTd2l0Y2hUb1NlcnZlck1vZGUoKSB7XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZSkge1xuICAgICAgLy8g7IiY64+Z7KCE7ZmYIG9uIOydtOuptCDsiJjrj5nsoITtmZgg7Jqw7ISgXG4gICAgICByZXR1cm4gdGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDsiJjrj5nsoITtmZggb2ZmIOydtOuptCDsnpDrj5nsoITtmZgg7LK07YGsXG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQXV0b1N3aXRjaFRvU2VydmVyTW9kZSkge1xuICAgICAgICAvLyDsnpDrj5nsoITtmZggb27snbzrlYxcbiAgICAgICAgLy8g7ISx64qlIOy4oeygleqwkuydhCDquLDspIDsnLzroZwgV0FTTSBvciBTZXJ2ZXJcbiAgICAgICAgY29uc3QgW2xhdGVuY3lQZXIxMDBtcywgbWVhc3VyZVJlcG9ydF0gPSBhd2FpdCBtZWFzdXJlKCk7XG4gICAgICAgIHRoaXMuX19kZWJ1ZyhtZWFzdXJlUmVwb3J0KTtcbiAgICAgICAgcmV0dXJuIGxhdGVuY3lQZXIxMDBtcyA+IHRoaXMuX19vcHRpb25zLnN3aXRjaFRvU2VydmVyVGhyZXNob2xkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7IiY64+Z7KCE7ZmY64+EIG9mZiwg7J6Q64+Z7KCE7ZmYIG9mZlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIHN0YXJ0T0NSKHR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsKSB7XG4gICAgaWYgKCEhIXR5cGUgfHwgISEhb25TdWNjZXNzIHx8ICEhIW9uRmFpbHVyZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUgPSBhd2FpdCB0aGlzLmNoZWNrU3dpdGNoVG9TZXJ2ZXJNb2RlKCk7XG4gICAgdGhpcy5fX29jclR5cGUgPSB0eXBlO1xuICAgIHRoaXMuX19zc2FNb2RlID0gdGhpcy5fX29jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTE7XG4gICAgdGhpcy5fX29uU3VjY2VzcyA9IG9uU3VjY2VzcztcbiAgICB0aGlzLl9fb25GYWlsdXJlID0gb25GYWlsdXJlO1xuICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UgPSBvbkluUHJvZ3Jlc3NDaGFuZ2U7XG4gICAgaWYgKG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVRvcFVJKSB7XG4gICAgICAgIHRoaXMuX190b3BVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudG9wVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkpIHtcbiAgICAgICAgdGhpcy5fX21pZGRsZVVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5taWRkbGVVSTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSkge1xuICAgICAgICB0aGlzLl9fYm90dG9tVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmJvdHRvbVVJO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGluaXRpYWxpemVkIScpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgdGhpcy5fX3ByZXByb2Nlc3MoKTtcbiAgICAgIGlmICh0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgICAgLy8gc2VydmVyTW9kZVxuICAgICAgICBpZiAodGhpcy5pc0VuY3J5cHRNb2RlKCkgJiYgdGhpcy5fX2lzU3VwcG9ydFdhc20pIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fcHJlbG9hZGluZ1dhc20oKTsgLy8g7ISc67KE66qo65OcIOydtOyngOunjCDslZTtmLjtmZQg7ZWY6riw7JyE7ZW0IHdhc23snYQgcHJlbG9hZGluZyDtlahcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5TZXJ2ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdhc21Nb2RlXG4gICAgICAgIGF3YWl0IHRoaXMuX19wcmVsb2FkaW5nV2FzbSgpO1xuICAgICAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuV2FzbSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zdG9wT0NSKCk7XG4gICAgfVxuICB9XG4gIHN0b3BPQ1IoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgdGhpcy5fX29uRmFpbHVyZSA9IG51bGw7XG4gIH1cbiAgc2V0SWdub3JlQ29tcGxldGUodmFsKSB7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5zZXRJZ25vcmVDb21wbGV0ZSh2YWwpO1xuICB9XG4gIGVuY3J5cHQocGxhaW5TdHIpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHBsYWluU3RyKTtcbiAgfVxuICBhc3luYyByZXN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UsIGlzU3dpdGNoTW9kZSA9IGZhbHNlKSB7XG4gICAgaWYgKGlzU3dpdGNoTW9kZSkge1xuICAgICAgYXdhaXQgdGhpcy5zdG9wT0NSKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICB9XG5cbiAgLyoqIHByaXZhdGUgbWV0aG9kcyAqL1xuICBhc3luYyBfX3dhaXRQcmVsb2FkZWQoKSB7XG4gICAgbGV0IHdhaXRpbmdSZXRyeUNvdW50ID0gMDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YWl0aW5nUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9O1xuICAgICAgY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBfX3ByZXByb2Nlc3MoKSB7XG4gICAgY29uc3QgY29udmVydFR5cGVUb051bWJlciA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIHJldHVybiBpc05hTihwYXJzZUludChvcHRpb24pKSA/IDAgOiBwYXJzZUludChvcHRpb24pO1xuICAgIH07XG4gICAgdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA9IGNvbnZlcnRUeXBlVG9OdW1iZXIodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCk7XG4gICAgdGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFZvbHVtZSA9IGNvbnZlcnRUeXBlVG9OdW1iZXIodGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFZvbHVtZSk7XG4gICAgdGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFdpZHRoID0gY29udmVydFR5cGVUb051bWJlcih0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4V2lkdGgpO1xuICB9XG4gIF9fd2luZG93RXZlbnRCaW5kKCkge1xuICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKC9pcGhvbmV8aXBvZHxpcGFkLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBjb25zdCBza2lwVG91Y2hBY3Rpb25mb3Jab29tID0gZXYgPT4ge1xuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXNfLl9fcGFnZUVuZCA9IHRydWU7XG4gICAgICBfdGhpc18uY2xlYW51cCgpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy5fX29jclR5cGUpIHJldHVybjtcbiAgICAgIGlmICghX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplKSB7XG4gICAgICAgIF90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IHRydWU7XG4gICAgICAgIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IF90aGlzXy5yZXN0YXJ0T0NSKF90aGlzXy5fX29jclR5cGUsIF90aGlzXy5fX29uU3VjY2VzcywgX3RoaXNfLl9fb25GYWlsdXJlLCBfdGhpc18uX19vbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIpIHtcbiAgICAgICAgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dChoYW5kbGVSZXNpemUsIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVEZWxheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19kZWJ1Zyhtc2cpIHtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19zbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxuICBfX2Jsb2JUb0Jhc2U2NChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICB9KTtcbiAgfVxuICBfX2Jhc2U2NHRvQmxvYihiYXNlNjQpIHtcbiAgICAvLyBjb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xuICAgIC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG4gICAgY29uc3QgYnl0ZVN0cmluZyA9IGF0b2IoYmFzZTY0LnNwbGl0KCcsJylbMV0pO1xuXG4gICAgLy8gc2VwYXJhdGUgb3V0IHRoZSBtaW1lIGNvbXBvbmVudFxuICAgIGNvbnN0IG1pbWVTdHJpbmcgPSBiYXNlNjQuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF07XG5cbiAgICAvLyB3cml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlclxuICAgIGNvbnN0IGFiID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICBjb25zdCBpYSA9IG5ldyBVaW50OEFycmF5KGFiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlhW2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2IoW2FiXSwge1xuICAgICAgdHlwZTogbWltZVN0cmluZ1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9fY29tcHJlc2VCYXNlNjRJbWFnZShiYXNlNjQsIG9wdGlvbnMsIGNvbnN0YW50TnVtYmVyKSB7XG4gICAgaWYgKGJhc2U2NCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgYmxvYkZpbGUgPSB0aGlzLl9fYmFzZTY0dG9CbG9iKGJhc2U2NCk7XG4gICAgY29uc3QgY29tcHJlc3NlZCA9IGF3YWl0IEltYWdlVXRpbC5jb21wcmVzc0ltYWdlKGJsb2JGaWxlLCBvcHRpb25zLCBjb25zdGFudE51bWJlcik7XG4gICAgY29uc3QgY29tcHJlc3Npb25SYXRpbyA9IE1hdGgucm91bmQoKDEgLSBjb21wcmVzc2VkLnNpemUgLyBibG9iRmlsZS5zaXplKSAqIDEwMDAwKSAvIDEwMDtcbiAgICB2b2lkIDA7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX19ibG9iVG9CYXNlNjQoY29tcHJlc3NlZCk7XG4gIH1cblxuICAvKiog65287J207IS87IqkIO2CpOulvCBoZWFwIOyXkCBhbGxvY2F0aW9uICovXG4gIF9fZ2V0U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAoISEhdGhpcy5fX2xpY2Vuc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBLZXkgaXMgZW1wdHknKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLl9fT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOCh0aGlzLl9fbGljZW5zZSkgKyAxO1xuICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICB0aGlzLl9fT0NSRW5naW5lLnN0cmluZ1RvVVRGOCh0aGlzLl9fbGljZW5zZSwgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICByZXR1cm4gdGhpcy5fX3N0cmluZ09uV2FzbUhlYXA7XG4gIH1cbiAgX19lbmNyeXB0U2NhblJlc3VsdChvY3JSZXN1bHQpIHtcbiAgICBsZXQgc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2Ygb2NyUmVzdWx0ID09PSAnbnVtYmVyJykgb2NyUmVzdWx0ID0gb2NyUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICBpZiAob2NyUmVzdWx0ID09PSAnJykgcmV0dXJuICcnO1xuICAgICAgaWYgKHR5cGVvZiBvY3JSZXN1bHQgIT09ICdzdHJpbmcnICYmICEhIW9jclJlc3VsdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ29jclJlc3VsdCBpcyBlbXB0eScpO1xuICAgICAgfVxuICAgICAgY29uc3QganNvblN0cmluZyA9IG9jclJlc3VsdDtcbiAgICAgIGNvbnN0IGxlbmd0aEJ5dGVzID0gdGhpcy5fX09DUkVuZ2luZS5sZW5ndGhCeXRlc1VURjgoanNvblN0cmluZykgKyAxO1xuICAgICAgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyhsZW5ndGhCeXRlcyk7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLnN0cmluZ1RvVVRGOChqc29uU3RyaW5nLCBzdHJpbmdPbldhc21IZWFwLCBsZW5ndGhCeXRlcyk7XG4gICAgICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZS5lbmNyeXB0UmVzdWx0KHN0cmluZ09uV2FzbUhlYXApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoc3RyaW5nT25XYXNtSGVhcCkge1xuICAgICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICBzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX19zZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIGxldCByZXNvbHV0aW9uVGV4dCA9ICdub3QgcmVhZHknO1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAwKSB7XG4gICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgICByZXNvbHV0aW9uVGV4dFxuICAgICAgfTtcbiAgICB9XG4gICAgcmVzb2x1dGlvblRleHQgPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCArICd4JyArIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEwODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxOTIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxOTIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTA4MCkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMjgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gNzIwIHx8IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSA3MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMjgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9fdmlkZW9XaWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgIHRoaXMuX192aWRlb0hlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9O1xuICB9XG4gIF9fZ2V0U2Nhbm5lckFkZHJlc3Mob2NyVHlwZSkge1xuICAgIGlmICghdGhpcy5fX29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIGxldCBkZXN0cm95Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgY29uc3Qgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuX19nZXRTdHJpbmdPbldhc21IZWFwKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgLy8gT0NSXG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRJRENhcmRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUlEQ2FyZFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRQYXNzcG9ydFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95UGFzc3BvcnRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUFsaWVuU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUNyZWRpdFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgTGljZW5zZSBLZXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICB2b2lkIDA7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2dldEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2ModGhpcy5fX3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ICogNCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fX3Jlc3VsdEJ1ZmZlcikge1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyg0MDk2KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tJbmZvKSB7XG4gICAgICBpZiAoIXRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1Zikge1xuICAgICAgICB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MoNDA5Nik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy5fX0J1ZmZlciwgdGhpcy5fX3Jlc3VsdEJ1ZmZlciwgdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmXTtcbiAgfVxuICBhc3luYyBfX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIG1hc2tNb2RlLCBpbWdNb2RlLCBpbWdUeXBlID0gJ2NhcmQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpbWdUeXBlID09PSAnY2FyZCcpIHtcbiAgICAgICAgdGhpcy5fX09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UoYWRkcmVzcywgbWFza01vZGUsIGltZ01vZGUpO1xuICAgICAgfSBlbHNlIGlmIChpbWdUeXBlID09PSAnZmFjZScpIHtcbiAgICAgICAgdGhpcy5fX09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZFBob3RvSW1hZ2UoYWRkcmVzcyk7XG4gICAgICB9XG4gICAgICBjb25zdCBqcGdTaXplID0gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnU2l6ZSgpO1xuICAgICAgY29uc3QganBnUG9pbnRlciA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ0J1ZmZlcigpO1xuICAgICAgY29uc3QgcmVzdWx0VmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguYnVmZmVyLCBqcGdQb2ludGVyLCBqcGdTaXplKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHJlc3VsdFZpZXcpO1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXN1bHRdLCB7XG4gICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fX2Jsb2JUb0Jhc2U2NChibG9iKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lFbmNvZGVkSnBnKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEZyZWUgYnVmZmVyICovXG4gIF9fZGVzdHJveUJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX0J1ZmZlcikge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fQnVmZmVyKTtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9fZGVzdHJveVJlc3VsdEJ1ZmZlcigpO1xuICAgIHRoaXMuX19kZXN0cm95TWFza0luZm9SZXN1bHRCdWZmZXIoKTtcbiAgfVxuICBfX2Rlc3Ryb3lSZXN1bHRCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuX19yZXN1bHRCdWZmZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX3Jlc3VsdEJ1ZmZlcik7XG4gICAgICB0aGlzLl9fcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgX19kZXN0cm95TWFza0luZm9SZXN1bHRCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1ZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYpO1xuICAgICAgdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogRnJlZSBQcmV2SW1hZ2UgYnVmZmVyICovXG4gIF9fZGVzdHJveVByZXZJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5fX1ByZXZJbWFnZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fUHJldkltYWdlKTtcbiAgICAgIHRoaXMuX19QcmV2SW1hZ2UgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBmcmVlIHN0cmluZyBoZWFwIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICh0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIGZyZWUgc2Nhbm5lciBhZGRyZXNzICovXG4gIF9fZGVzdHJveVNjYW5uZXJBZGRyZXNzKCkge1xuICAgIGlmICh0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjaykge1xuICAgICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW9FbGVtZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9ID0gYXdhaXQgdGhpcy5fX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpO1xuICAgIGlmICghaXNTdXBwb3J0ZWRSZXNvbHV0aW9uKSB7XG4gICAgICBpZiAocmVzb2x1dGlvblRleHQgIT09ICdub3QgcmVhZHknKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzU3VwcG9ydGVkUmVzb2x1dGlvbjtcbiAgfVxuICBfX2dldFJvdGF0aW9uRGVncmVlKCkge1xuICAgIHJldHVybiAodGhpcy5fX29wdGlvbnMucm90YXRpb25EZWdyZWUgJSAzNjAgKyAzNjApICUgMzYwO1xuICB9XG4gIF9fZ2V0TWlycm9yTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX29wdGlvbnMubWlycm9yTW9kZTtcbiAgfVxuICBhc3luYyBfX2Nyb3BJbWFnZUZyb21WaWRlbygpIHtcbiAgICBpZiAoIXRoaXMuX19jYW1TZXRDb21wbGV0ZSkgcmV0dXJuIFtudWxsLCBudWxsLCBudWxsXTtcbiAgICBsZXQgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICAvLyBzb3VyY2UgaW1hZ2UgKG9yIHZpZGVvKVxuICAgIC8vIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSKIHN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSD4pSI4pSI4pSI4pSIIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgc3ggIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogc0hlaWdodCAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiBjYW52YXNcbiAgICAvLyDilIMgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICAgICAgICDilIPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAgICAgICAgc1dpZHRoICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICDilIogZHkgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg+KUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgZHggICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogZEhlaWdodCDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICBkV2lkdGggICAgICAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHkpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL2RyYXdJbWFnZVxuXG4gICAgbGV0IGNhbGNDYW52YXMgPSBjYW52YXM7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCA9IHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGg7XG4gICAgbGV0IGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0ID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb247XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCwgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHRdID0gW2NhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0LCBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoXTtcbiAgICAgIFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFtjYWxjUmVzb2x1dGlvbl9oLCBjYWxjUmVzb2x1dGlvbl93XTtcbiAgICAgIGNhbGNDYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBjYWxjTWF4U1dpZHRoID0gOTk5OTk7XG4gICAgbGV0IGNhbGNNYXhTSGVpZ2h0ID0gOTk5OTk7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOyEuOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOyEuOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN4LCBzeTtcbiAgICBjb25zdCByYXRpbyA9IGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc1dpZHRoID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoICogcmF0aW8pLCBjYWxjTWF4U1dpZHRoKTtcbiAgICBjb25zdCBzSGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCAqIHJhdGlvKSwgY2FsY01heFNIZWlnaHQpO1xuICAgIHN4ID0gTWF0aC5tYXgoTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50V2lkdGggLSBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoKSAvIDIgKiByYXRpbyksIDApO1xuICAgIHN5ID0gTWF0aC5tYXgoTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC0gY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQpIC8gMiAqIHJhdGlvKSwgMCk7XG4gICAgY29uc3QgY2FsY0NvbnRleHQgPSBjYWxjQ2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5kZWJ1Zygnc3gsIHN5LCBzV2lkdGgocmVzb2x1dGlvbl93KSwgc0hlaWdodChyZXNvbHV0aW9uX2gpLCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCcsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCk7XG4gICAgY2FsY0NvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgMCwgMCwgY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faCk7XG4gICAgY29uc3QgaW1nRGF0YSA9IGNhbGNDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhVXJsID0gY2FsY0NhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9fcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIHRoaXMuX19nZXRSb3RhdGlvbkRlZ3JlZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtpbWdEYXRhLCBpbWdEYXRhVXJsXTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgZGVncmVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKGRlZ3JlZSA9PT0gMCkge1xuICAgICAgICByZXNvbHZlKFtpbWdEYXRhLCBpbWdEYXRhVXJsXSk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBpbWdEYXRhVXJsO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgLy8gY2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICAgIGNvbnN0IHRlbXBDb250ZXh0ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0ZW1wQ2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgaWYgKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcud2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWdyZWUgPT09IDkwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLmhlaWdodCwgMCk7ZWxzZSBpZiAoZGVncmVlID09PSAxODApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO2Vsc2UgaWYgKGRlZ3JlZSA9PT0gMjcwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoMCwgaW1nLndpZHRoKTtcbiAgICAgICAgdGVtcENvbnRleHQucm90YXRlKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuICAgICAgICByZXNvbHZlKFtuZXdJbWFnZURhdGEsIHRlbXBDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyldKTtcbiAgICAgICAgdGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCwgcmV0cnlJbWcgPSBudWxsKSB7XG4gICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPCAwKSB7XG4gICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbWdEYXRhO1xuICAgICAgbGV0IGltZ0RhdGFVcmwgPSBudWxsO1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAocmV0cnlJbWcgIT09IG51bGwpIHtcbiAgICAgICAgaW1nRGF0YSA9IHJldHJ5SW1nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgW2ltZ0RhdGEsIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy5fX2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgfVxuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBsZXQga29yID0gZmFsc2UsXG4gICAgICAgIGFsaWVuID0gZmFsc2UsXG4gICAgICAgIHBhc3Nwb3J0ID0gZmFsc2U7XG4gICAgICBzd2l0Y2ggKHRoaXMuX19vY3JUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBrb3IgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgcGFzc3BvcnQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWxpZW4gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICB9XG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmIChrb3IgfHwgcGFzc3BvcnQgfHwgYWxpZW4pIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5kZXRlY3RfaWRjYXJkX29wdChidWZmZXIsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCBhZGRyZXNzLCBrb3IsIGFsaWVuLCBwYXNzcG9ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmRldGVjdF9pZGNhcmQoYnVmZmVyLCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0NhcmRib3hEZXRlY3RlZCByZXN1bHQgLT0tLS0tLScsIHJlc3VsdClcbiAgICAgIHJldHVybiBbISFyZXN1bHQsIGltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3IgOiAnICsgZTtcbiAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHNzYU1vZGUsIGlzU2V0SWdub3JlQ29tcGxldGUsIGltZ0RhdGEsIGltZ0RhdGFVcmwpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGFkZHJlc3MgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBjb25zdCByZWNvZ25pdGlvbiA9IGFzeW5jIGlzU2V0SWdub3JlQ29tcGxldGUgPT4ge1xuICAgICAgICBpZiAoaXNTZXRJZ25vcmVDb21wbGV0ZSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCAwLCBpbWdEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5JRENhcmQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhblBhc3Nwb3J0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkFsaWVuKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzog7Iug7Jqp7Lm065Oc64qUIOyVhOyngSBrZXk6dmFsdWUg7ZiV7YOc66GcIOuzgO2ZmCDslYjrkJjslrQg7J6I7J2MXG4gICAgICAgIGlmIChvY3JUeXBlID09PSAnY3JlZGl0Jykge1xuICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IG51bGwgfHwgb2NyUmVzdWx0ID09PSAnJyB8fCBvY3JSZXN1bHQgPT09ICdmYWxzZScgfHwgb2NyUmVzdWx0WzBdID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fY3N2VG9PYmplY3Qob2NyUmVzdWx0KTtcbiAgICAgICAgaWYgKG9jclJlc3VsdD8uY29tcGxldGUgIT09ICd1bmRlZmluZWQnICYmIG9jclJlc3VsdD8uY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc1NldElnbm9yZUNvbXBsZXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPCB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCkge1xuICAgICAgICAgICAgICAvLyBkZXRlY3RlZENhcmRRdWV1ZeyXkOyEnCDtlZzsnqXsnYQg6rq864K07IScIOqwseyLoO2VnOuLpC5cbiAgICAgICAgICAgICAgLy8g7KCA7J6l65CY7Ja07J6I64qUIOydtOuvuOyngOydmCDsiKvsnpDqsIAgcmV0cnkg67O064ukIOyekeydgOqyveyasCDrjIDruYTtlZjsl6wgJeulvCDsgqzsmqntlahcbiAgICAgICAgICAgICAgY29uc3QgcXVldWVJZHggPSB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCAlIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgIGltZ0RhdGEgPSB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVbcXVldWVJZHhdO1xuICAgICAgICAgICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVjb2duaXRpb24oaXNTZXRJZ25vcmVDb21wbGV0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyDsgqzsp4Qg7ZWc7J6l7Jy866GcIE9DUiDsi6TtjKggKHBvcHVwIOuCtOumrOqzoCBzZXRJZ25vcmVDb21wbGV0ZShmYWxzZSkg7LKY66asP1xuICAgICAgICAgICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gICAgICAgICAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpO1xuICAgICAgICAgICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTsgLy8g7Yyd7JeF7J20IOuCtOugpOqwiOuVjCDsspjrpqzrkJjsp4Drp4wg66+466asIOyymOumrFxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQsIGZhbHNlLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudmlkZW8sIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLy8gZW5kIG9mIGZ1bmN0aW9uIHJlY29nbml0aW9uKClcblxuICAgICAgaWYgKGF3YWl0IHJlY29nbml0aW9uKGlzU2V0SWdub3JlQ29tcGxldGUpKSB7XG4gICAgICAgIGNvbnN0IGlzQ3JlZGl0Q2FyZCA9IG9jclR5cGUgPT09ICdjcmVkaXQnO1xuICAgICAgICBsZXQgb2NySW1hZ2VNb2RlO1xuICAgICAgICBpZiAoaXNDcmVkaXRDYXJkKSB7XG4gICAgICAgICAgb2NySW1hZ2VNb2RlID0gdGhpcy5PQ1JfSU1HX01PREUuQ1JPUFBJTkc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fX29wdGlvbnMudXNlSW1hZ2VXYXJwaW5nKSB7XG4gICAgICAgICAgb2NySW1hZ2VNb2RlID0gdGhpcy5PQ1JfSU1HX01PREUuV0FSUElORztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY3JJbWFnZU1vZGUgPSB0aGlzLk9DUl9JTUdfTU9ERS5OT05FO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcmlnaW5JbWFnZSA9IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCB0aGlzLk9DUl9JTUdfTUFTS19NT0RFLkZBTFNFLCBvY3JJbWFnZU1vZGUpO1xuICAgICAgICBsZXQgbWFza0ltYWdlID0gbnVsbDtcbiAgICAgICAgbGV0IGZhY2VJbWFnZSA9IG51bGw7XG4gICAgICAgIGlmICghaXNDcmVkaXRDYXJkKSB7XG4gICAgICAgICAgbWFza0ltYWdlID0gYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRoaXMuT0NSX0lNR19NQVNLX01PREUuVFJVRSwgdGhpcy5PQ1JfSU1HX01PREUuV0FSUElORyk7XG4gICAgICAgICAgbWFza0ltYWdlID0gbWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZTtcbiAgICAgICAgICBmYWNlSW1hZ2UgPSB0aGlzLl9fb3B0aW9ucy51c2VGYWNlSW1hZ2UgPyBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbnVsbCwgb2NySW1hZ2VNb2RlLCAnZmFjZScpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3NhTW9kZSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBLCBmYWxzZSwgbWFza0ltYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBTVEFSVFxuICAgICAgICAvLyBpZiAoIWlzQ3JlZGl0Q2FyZCAmJiB0aGlzLl9fb3B0aW9ucy51c2VQaWlFbmNyeXB0TW9kZSkge1xuICAgICAgICAvLyAgIG9yaWdpbkltYWdlID0gdGhpcy5fX2dldFBpaUVuY3J5cHRJbWFnZUJhc2U2NChcbiAgICAgICAgLy8gICAgIGFkZHJlc3MsXG4gICAgICAgIC8vICAgICB0aGlzLk9DUl9JTUdfTUFTS19NT0RFLkZBTFNFLFxuICAgICAgICAvLyAgICAgb2NySW1hZ2VNb2RlXG4gICAgICAgIC8vICAgKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnZW5jcnlwdCBiYXNlNjQgaW1hZ2UnLCB7IG9yaWdpbkltYWdlIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGlmIChmYWNlSW1hZ2UgJiYgdGhpcy5fX29wdGlvbnMudXNlUGlpRW5jcnlwdEZhY2UpIHtcbiAgICAgICAgLy8gICBmYWNlSW1hZ2UgPSB0aGlzLl9fZ2V0UGlpRW5jcnlwdEltYWdlQmFzZTY0KFxuICAgICAgICAvLyAgICAgYWRkcmVzcyxcbiAgICAgICAgLy8gICAgIG51bGwsXG4gICAgICAgIC8vICAgICBvY3JJbWFnZU1vZGUsXG4gICAgICAgIC8vICAgICAnZmFjZSdcbiAgICAgICAgLy8gICApO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdlbmNyeXB0IGJhc2U2NCBmYWNlIGltYWdlJywgeyBmYWNlSW1hZ2UgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gRU5EXG5cbiAgICAgICAgcmV0dXJuIFtvY3JSZXN1bHQsIG9yaWdpbkltYWdlLCBtYXNrSW1hZ2UsIGZhY2VJbWFnZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsLCBudWxsLCBudWxsXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX3N0YXJ0VHJ1dGgob2NyVHlwZSwgYWRkcmVzcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTEpIHtcbiAgICAgICAgLy8gVE9ETzogd29ya2Vy66W8IOyCrOyaqe2VmOyXrCDrqZTsnbgoVUkg656c642U66eBKSDsiqTroIjrk5zqsIAg66mI7LaU7KeAIOyViuuPhOuhnSDsspjrpqwg7ZWE7JqUICjtmITsnqwgbG9hZGluZyBVSSDrnYTsmrDrqbQg7JWg64uI66mU7J207IWYIOupiOy2pClcbiAgICAgICAgLy8gVE9ETzogc2V0VGltZW91dCDsnLzroZwg64KY64iE642U652864+EIO2aqOqzvCDsl4bsnYwgc2V0VGltZW91dCDsp4DsmrDqs6AsIHdvcmtlcuuhnCDrs4Dqsr0g7ZWE7JqUXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUodGhpcy5fX09DUkVuZ2luZS5zY2FuVHJ1dGgoYWRkcmVzcywgcmVzdWx0QnVmZmVyKSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdTU0EgTW9kZSBpcyB0cnVlLiBidXQsIG9jclR5cGUgaXMgaW52YWxpZCA6ICcgKyBvY3JUeXBlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19jc3ZUb09iamVjdChzdHIpIHtcbiAgICBsZXQgcGFpcnMgPSBzdHIuc3BsaXQoJzsnKTtcbiAgICBsZXQgb2JqID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnOicpO1xuICAgICAgaWYgKHBhaXIubGVuZ3RoID09PSAyKSBvYmpbcGFpclswXV0gPSBwYWlyWzFdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIF9fZ2V0TWFza0luZm8oYWRkcmVzcykge1xuICAgIGlmIChhZGRyZXNzID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2UgaWYgKGFkZHJlc3MgPT09IC0xKSB7XG4gICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICB9XG4gICAgY29uc3QgWywsIG1hc2tJbmZvUmVzdWx0QnVmXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmdldE1hc2tSZWN0KGFkZHJlc3MsIG1hc2tJbmZvUmVzdWx0QnVmKTtcbiAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgcmVzdWx0ID09PSAnJykge1xuICAgICAgdm9pZCAwO1xuICAgIH1cblxuICAgIC8vIHRoaXMuX19kZXN0cm95TWFza0luZm9SZXN1bHRCdWZmZXIoKTtcblxuICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogdGhpcy5fX2NzdlRvT2JqZWN0KHJlc3VsdCk7XG4gIH1cbiAgYXN5bmMgX19zdGFydFRydXRoUmV0cnkob2NyVHlwZSwgYWRkcmVzcywgaW1nRGF0YSkge1xuICAgIGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCAwLCBpbWdEYXRhKTtcbiAgICAvLyBhd2FpdCB0aGlzLl9fc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCB0cnVlKTsgICAgICAvLyBmb3Ig7ISx64ql7J2EIOychO2VtCDsp4TtlokgWFxuICAgIHJldHVybiBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKTtcbiAgfVxuICBfX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgdGhpcy5fX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAvLyAx7LSIIGRlbGF5IO2bhCDsi6TtlolcbiAgICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIGFzeW5jIF9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgY29uc3QgaXNQYXNzcG9ydCA9IHRoaXMuX19vY3JUeXBlLmluY2x1ZGVzKCdwYXNzcG9ydCcpO1xuICAgICAgYXdhaXQgdGhpcy5fX3NldHVwVmlkZW8oaXNQYXNzcG9ydCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpZGVvXG4gICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAvLyBjb25zdCBbdHJhY2tdID0gdGhpcy5fX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICAvLyBjb25zdCBjYXBhYmlsaXR5ID0gdHJhY2suZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ0NhcmRTY2FuX19pbml0aWFsaXplIGNhcGFiaWxpdHknLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgaWYgKCdzcmNPYmplY3QnIGluIHZpZGVvKSB7XG4gICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gdGhpcy5fX3N0cmVhbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBdm9pZCB1c2luZyB0aGlzIGluIG5ldyBicm93c2VycywgYXMgaXQgaXMgZ29pbmcgYXdheS5cbiAgICAgICAgICB2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLl9fc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiAtIG9ubG9hZGVkbWV0YWRhdGEnKTtcbiAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHZvaWQgMDtcblxuICAgICAgICAgIC8vIHZpZGVvIGVsZW1lbnQgc3R5bGUg7ISk7KCVXG4gICAgICAgICAgdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPSB2aWRlby52aWRlb1dpZHRoIC8gdmlkZW8udmlkZW9IZWlnaHQgPCAxID8gJ3BvcnRyYWl0JyA6ICdsYW5kc2NhcGUnO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHRoaXMuX19jYW1TZXRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2FkanVzdFN0eWxlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgIHZpZGVvLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBpZiAoZS5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnQ2FtZXJhIEFjY2VzcyBQZXJtaXNzaW9uIGlzIG5vdCBhbGxvd2VkJztcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKCdFNDAzJywgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5uYW1lID09PSAnTm90UmVhZGFibGVFcnJvcicpIHtcbiAgICAgICAgLy8g64uk66W46rOz7JeQ7IScIOy5tOuplOudvCDsnpDsm5DsnYQg7IKs7Jqp7KSRXG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgICB0aGlzLl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpOyAvLyDsnqzqt4Ag7Zi47LacXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX19zZXRTdHlsZShlbCwgc3R5bGUpIHtcbiAgICBpZiAoZWwgJiYgc3R5bGUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHN0eWxlKTtcbiAgICB9XG4gIH1cbiAgX19jaGFuZ2VPQ1JTdGF0dXModmFsKSB7XG4gICAgc3dpdGNoICh2YWwpIHtcbiAgICAgIC8vIE9DUlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5OT1RfUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLlJFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLlJFQURZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRDpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1M6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0E6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRDpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5ET05FO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19jaGFuZ2VTdGFnZSh2YWwsIGZvcmNlVXBkYXRlID0gZmFsc2UsIHJlY29nbml6ZWRJbWFnZSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPT09IHZhbCAmJiBmb3JjZVVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2NoYW5nZU9DUlN0YXR1cyh2YWwpO1xuICAgIHRoaXMuX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIHRoaXMuX19pblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGggKyAncHgnLFxuICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuc3R5bGUsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzICsgJ3B4JyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlW3ZhbF1cbiAgICB9O1xuICAgIGlmIChndWlkZUJveCkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCBzdHlsZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYXNrRnJhbWVDb2xvckNoYW5nZSkge1xuICAgICAgaWYgKCEhdGhpcy5fX29wdGlvbnMuc2hvd0NsaXBGcmFtZSkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXNrQm94V3JhcD8ucXVlcnlTZWxlY3RvcignI21hc2tCb3hPdXRlcicpPy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZVt2YWxdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkge1xuICAgICAgY2FwdHVyZUJ1dHRvbj8ucXVlcnlTZWxlY3RvcignI2NhcHR1cmVCdXR0b24nKT8uc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5fX29wdGlvbnMuY2FwdHVyZUJ1dHRvblN0eWxlWydiYXNlX2NvbG9yJ10pO1xuICAgIH1cbiAgICBjb25zdCBvY3JNb2RlID0gdGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID8gJ3NlcnZlcicgOiAnd2FzbSc7XG4gICAgaWYgKHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VUb3BVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIG9jck1vZGUsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX190b3BVSSwgJ3RvcCcsIHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCBvY3JNb2RlLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fbWlkZGxlVUksICdtaWRkbGUnLCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSwgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJIHx8IHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgb2NyTW9kZSwgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX2JvdHRvbVVJLCAnYm90dG9tJywgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUksIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9TVUNDRVNTIHx8IHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuXG4gICAgICAgIC8vIEZBSUzsnbgg6rK97JqwIDXstIjtm4Qg7J6Q64+Z7J2EIOywveuLq+ydjFxuICAgICAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCkge1xuICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5fX2hpZGVQcmV2aWV3VUksIDMwMDAsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9faGlkZVByZXZpZXdVSSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMSk7IC8vIGZvciBVSSB1cGRhdGVcbiAgfVxuXG4gIF9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBwcmV2aWV3SW1hZ2Uuc3JjID0gcmVjb2duaXplZEltYWdlO1xuICAgIGNvbnN0IGltZ1N0eWxlID0ge1xuICAgICAgJ21heC13aWR0aCc6ICc3MCUnLFxuICAgICAgJ21heC1oZWlnaHQnOiAnNjAlJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdJbWFnZSwgaW1nU3R5bGUpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9KTtcbiAgfVxuICBfX2hpZGVQcmV2aWV3VUkoY29udGV4dCkge1xuICAgIGxldCBfdGhpc18gPSB0aGlzO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBfdGhpc18gPSBjb250ZXh0O1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBfdGhpc18uX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICAgIF90aGlzXy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSAnJztcbiAgfVxuICBhc3luYyBfX2dldElucHV0RGV2aWNlcygpIHtcbiAgICAvLyB0aHJvdyBlcnJvciBpZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGRldmljZXMgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcbiAgICBsZXQgY2FtZXJhID0gW107XG4gICAgZm9yIChjb25zdCBkZXZpY2Ugb2YgZGV2aWNlcykge1xuICAgICAgaWYgKGRldmljZS5raW5kID09PSAndmlkZW9pbnB1dCcpIHtcbiAgICAgICAgaWYgKGRldmljZS5nZXRDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgICBjb25zdCBjYXAgPSBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgICAgaWYgKGNhcD8uZmFjaW5nTW9kZT8uaW5jbHVkZXModGhpcy5fX2ZhY2luZ01vZGVDb25zdHJhaW50KSkge1xuICAgICAgICAgICAgY2FtZXJhLnB1c2goY2FwLmRldmljZUlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxuICBjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLl9fdWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBpc0NoYW5nZWRcbiAgICB9O1xuICB9XG4gIF9fY2xlYXJDdXN0b21VSShvYmopIHtcbiAgICBvYmouaW5uZXJIVE1MID0gJyc7XG4gICAgb2JqLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShvYmosIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9fc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZSxcbiAgICAgIHN3aXRjaFVJV3JhcCxcbiAgICAgIHN3aXRjaFVJXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKCFvY3IpIHRocm93IG5ldyBFcnJvcignb2NyIGRpdiBlbGVtZW50IGlzIG5vdCBleGlzdCcpO1xuICAgIGlmICh2aWRlb1dyYXApIHZpZGVvV3JhcC5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3hXcmFwKSBndWlkZUJveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHZpZGVvKSB2aWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY2FudmFzKSBjYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKHJvdGF0aW9uQ2FudmFzKSByb3RhdGlvbkNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3gpIGd1aWRlQm94LnJlbW92ZSgpO1xuICAgIGlmIChtYXNrQm94V3JhcCkgbWFza0JveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKSBwcmV2ZW50VG9GcmVlemVWaWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY3VzdG9tVUlXcmFwKSBjdXN0b21VSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8g6rCBIHRvcCwgbWlkZGxlLCBib3R0b20gVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmICh0b3BVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlVG9wVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKHRvcFVJKTtcbiAgICBpZiAobWlkZGxlVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShtaWRkbGVVSSk7XG4gICAgaWYgKGJvdHRvbVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkoYm90dG9tVUkpO1xuICAgIGlmIChjYXB0dXJlVUlXcmFwKSBjYXB0dXJlVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIGNhcHR1cmUgVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmIChjYXB0dXJlVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkoY2FwdHVyZVVJKTtcbiAgICBpZiAocHJldmlld1VJV3JhcCkgcHJldmlld1VJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBwcmV2aWV3IFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAocHJldmlld1VJICYmICF0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKHByZXZpZXdVSSk7XG4gICAgaWYgKHN3aXRjaFVJV3JhcCkgc3dpdGNoVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIHN3aXRjaCBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHN3aXRjaFVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUpIHRoaXMuX19jbGVhckN1c3RvbVVJKHN3aXRjaFVJKTtcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZSA9IHRoaXMuX19nZXRSb3RhdGlvbkRlZ3JlZSgpO1xuICAgIHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID0gWzkwLCAyNzBdLmluY2x1ZGVzKHJvdGF0aW9uRGVncmVlKTtcbiAgICBsZXQgb2NyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShvY3IsIG9jclN0eWxlKTtcbiAgICBjb25zdCB3cmFwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIC8vIHZlcnRpY2FsIGFsaWduIG1pZGRsZVxuICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfTtcbiAgICB2aWRlb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWRlb1dyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvV3JhcCcpO1xuICAgIGlmICh2aWRlb1dyYXApIHtcbiAgICAgIHdoaWxlICh2aWRlb1dyYXAuZmlyc3RDaGlsZCkge1xuICAgICAgICB2aWRlb1dyYXAucmVtb3ZlQ2hpbGQodmlkZW9XcmFwLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW9XcmFwLCB3cmFwU3R5bGUpO1xuICAgIH1cbiAgICBvY3IuYXBwZW5kQ2hpbGQodmlkZW9XcmFwKTtcbiAgICBtYXNrQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtYXNrQm94V3JhcCcpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShtYXNrQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBsZXQgbWFza19mcmFtZSA9IHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlLmJhc2VfY29sb3IgKyAnZmYnO1xuICAgIGlmICghIXRoaXMuX19vcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZS5jbGlwX2ZyYW1lICsgJzU1JztcbiAgICB9XG4gICAgbWFza0JveFdyYXAuaW5uZXJIVE1MID0gJycgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyAnICAgICAgPC9zdmc+XFxuJyArICcgICAgPC9tYXNrPlxcbicgKyBcIiAgICA8cmVjdCBpZD0nbWFza0JveE91dGVyJ1xcblwiICsgXCIgICAgICAgICAgeD0nMCcgeT0nMCcgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJSdcXG5cIiArIFwiICAgICAgICAgIGZpbGw9J1wiICsgbWFza19mcmFtZSArIFwiJyBtYXNrPSd1cmwoI21hc2stcmVjdCknPjwvcmVjdD5cXG5cIiArICcgIDwvc3ZnPic7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVBbmRNaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVDc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX19nZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICB0cmFuc2Zvcm06IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHZpZGVvU3R5bGUpO1xuICAgIHZpZGVvV3JhcC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgZ3VpZGVCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3VpZGVCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveFdyYXAnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChndWlkZUJveFdyYXApO1xuICAgIGd1aWRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94Jyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdub25lJyA6ICdkaXNwbGF5JyA6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzBweCcsXG4gICAgICB0b3A6ICczMHB4JyxcbiAgICAgIGJvcmRlcjogJ2dyZWVuIDJweCBzb2xpZCdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByb3RhdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJvdGF0aW9uQ2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdyb3RhdGlvbkNhbnZhcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShyb3RhdGlvbkNhbnZhcywge1xuICAgICAgZGlzcGxheTogdGhpcy5fX29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA/ICdkaXNwbGF5JyA6ICdub25lJyA6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnYmx1ZSAycHggc29saWQnXG4gICAgfSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHJvdGF0aW9uQ2FudmFzKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2ZW50VG9GcmVlemVWaWRlbywge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206ICcxMCcsXG4gICAgICByaWdodDogJzEwJ1xuICAgIH0pO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLmlubmVySFRNTCA9ICcnICsgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHN0eWxlPVwibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1wiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIj5cXG4nICsgJyAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjAuNTU1NTU1NTU1NTU1NTU1NnNcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsxXCIgdmFsdWVzPVwiMTA7MFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMVwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImZpbGxcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJkaXNjcmV0ZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCIxNlwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0wLjU1NTU1NTU1NTU1NTU1NTZzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiODRcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuMTExMTExMTExMTExMTExMnNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS4xMTExMTExMTExMTExMTEyc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCIxNlwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS42NjY2NjY2NjY2NjY2NjY1c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjY2NjY2NjY2NjY2NjY2NjVzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nO1xuICAgICc8L3N2Zz4nO1xuICAgIG9jci5hcHBlbmRDaGlsZChwcmV2ZW50VG9GcmVlemVWaWRlbyk7XG4gICAgY3VzdG9tVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VzdG9tVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjdXN0b21VSVdyYXAnKTtcbiAgICBjb25zdCBjdXN0b21VSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY3VzdG9tVUlXcmFwLCBjdXN0b21VSVdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGN1c3RvbVVJV3JhcCk7XG5cbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSSDsgqzsmqkodXNlKeyXrOu2gOyZgCDqtIDqs4Tsl4bsnbQg7JiB7Jet7J2EIOyeoeq4sCDsnITtlbQsIGRpduqwgCDsl4bsnLzrqbQg7IOd7ISxXG4gICAgLy8gYWRqdXN0U3R5bGUoKSDsl5DshJwg7IS467aA7KCB7J24IOyCrOydtOymiOyZgCDsnITsuZjqsJIg64+Z7KCB7Jy866GcIOyEpOygleuQqC5cbiAgICBpZiAoIXRvcFVJKSB7XG4gICAgICB0b3BVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3RvcFVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZCh0b3BVSSk7XG4gICAgaWYgKCFtaWRkbGVVSSkge1xuICAgICAgbWlkZGxlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtaWRkbGVVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQobWlkZGxlVUkpO1xuICAgIGlmICghYm90dG9tVUkpIHtcbiAgICAgIGJvdHRvbVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib3R0b21VSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnYm90dG9tVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKGJvdHRvbVVJKTtcbiAgICBjYXB0dXJlVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FwdHVyZVVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FwdHVyZVVJV3JhcCcpO1xuICAgIGNvbnN0IGNhcHR1cmVVSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjZW50ZXInXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJV3JhcCwgY2FwdHVyZVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FwdHVyZVVJV3JhcCk7XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkge1xuICAgICAgaWYgKHRoaXMuX19pc1N3aXRjaFRvU2VydmVyTW9kZSB8fCB0aGlzLl9fb3B0aW9ucy51c2VGb3JjZUNvbXBsZXRlVUkpIHtcbiAgICAgICAgaWYgKCFjYXB0dXJlVUkpIHtcbiAgICAgICAgICBjYXB0dXJlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBjYXB0dXJlVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhcHR1cmVVSScpO1xuICAgICAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYXB0dXJlQnV0dG9uKSB7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhcHR1cmVCdXR0b24nKTtcbiAgICAgICAgICBsZXQgY2FwdHVyZUJ1dHRvblNyY1NWRyA9IGBgO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b25TcmNTVkcgKz0gYDxzdmcgd2lkdGg9JzgwJyBoZWlnaHQ9JzgwJyB2aWV3Qm94PScwIDAgODAgODAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+YDtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uU3JjU1ZHICs9IGAgIDxjaXJjbGUgaWQ9J2NhcHR1cmVCdXR0b24nIGN4PSc0MCcgY3k9JzQwJyByPSczOCcgZmlsbD0nIzU1NTU1NScgc3Ryb2tlPScjZmZmZmZmJyBzdHJva2Utd2lkdGg9JzQnLz5gO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b25TcmNTVkcgKz0gYDwvc3ZnPmA7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvbi5pbm5lckhUTUwgPSBjYXB0dXJlQnV0dG9uU3JjU1ZHO1xuICAgICAgICAgIGNhcHR1cmVVSS5hcHBlbmRDaGlsZChjYXB0dXJlQnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlVUlXcmFwLmFwcGVuZENoaWxkKGNhcHR1cmVVSSk7XG4gICAgICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IF9fb25DbGlja0NhcHR1cmVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzXy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAgICAgICBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIF90aGlzXy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIF90aGlzXy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudmlkZW8sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzXy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY2FwdHVyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fb25DbGlja0NhcHR1cmVCdXR0b24pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICBwcmV2aWV3VUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcmV2aWV3VUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUlXcmFwJyk7XG4gICAgICBjb25zdCBwcmV2aWV3VUlXcmFwU3R5bGUgPSB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzAwMDAwMGFhJ1xuICAgICAgfTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCBwcmV2aWV3VUlXcmFwU3R5bGUpO1xuICAgICAgb2NyLmFwcGVuZENoaWxkKHByZXZpZXdVSVdyYXApO1xuICAgICAgaWYgKCFwcmV2aWV3VUkpIHtcbiAgICAgICAgcHJldmlld1VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByZXZpZXdVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld1VJJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJLCB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgJ21heC13aWR0aCc6ICc5MCUnLFxuICAgICAgICAnbWF4LWhlaWdodCc6ICc5MCUnXG4gICAgICB9KTtcbiAgICAgIHByZXZpZXdVSVdyYXAuYXBwZW5kQ2hpbGQocHJldmlld1VJKTtcbiAgICAgIGlmICghcHJldmlld0ltYWdlKSB7XG4gICAgICAgIHByZXZpZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdJbWFnZScpO1xuICAgICAgICBwcmV2aWV3VUkuYXBwZW5kQ2hpbGQocHJldmlld0ltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZSkge1xuICAgICAgc3dpdGNoVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzd2l0Y2hVSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3N3aXRjaFVJV3JhcCcpO1xuICAgICAgY29uc3Qgc3dpdGNoVUlXcmFwU3R5bGUgPSB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJycsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICAgIH07XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoc3dpdGNoVUlXcmFwLCBzd2l0Y2hVSVdyYXBTdHlsZSk7XG4gICAgICBvY3IuYXBwZW5kQ2hpbGQoc3dpdGNoVUlXcmFwKTtcbiAgICAgIGlmICghc3dpdGNoVUkpIHtcbiAgICAgICAgc3dpdGNoVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3dpdGNoVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3N3aXRjaFVJJyk7XG4gICAgICAgIGxldCBzd2l0Y2hIVE1MID0gYGA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYDxkaXYgY2xhc3M9J2N1c3RvbS0tbGFiZWwgZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgZ2FwMTAnPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgPGxhYmVsIGZvcj0nbWFudWFsLXN3aXRjaC13YXNtLXRvLXNlcnZlci1jaGVja2JveCc+V0FTTTwvbGFiZWw+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8bGFiZWwgY2xhc3M9J3N3aXRjaCc+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICAgIDxpbnB1dCBpZD0nbWFudWFsLXN3aXRjaC13YXNtLXRvLXNlcnZlci1jaGVja2JveCcgdHlwZT0nY2hlY2tib3gnPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgICA8c3BhbiBjbGFzcz0nc2xpZGVyIHJvdW5kJz48L3NwYW4+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8L2xhYmVsPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgPGxhYmVsIGZvcj0ncHJpb3JpdHktZmluYW5jZS1jb2h0bWxGb3JsaXN0LWNoZWNrYm94Jz5TZXJ2ZXI8L2xhYmVsPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYDwvZGl2PmA7XG4gICAgICAgIHN3aXRjaFVJLmlubmVySFRNTCA9IHN3aXRjaEhUTUw7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoc3dpdGNoVUksIHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9KTtcbiAgICAgIHN3aXRjaFVJV3JhcC5hcHBlbmRDaGlsZChzd2l0Y2hVSSk7XG4gICAgICBjb25zdCBzd2l0Y2hDaGVja2JveCA9IHN3aXRjaFVJLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xuICAgICAgY29uc3QgX3RoaXNfID0gdGhpcztcbiAgICAgIGNvbnN0IF9fb25DbGlja1N3aXRjaFVJID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzXy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGF3YWl0IF90aGlzXy5yZXN0YXJ0T0NSKF90aGlzXy5fX29jclR5cGUsIF90aGlzXy5fX29uU3VjY2VzcywgX3RoaXNfLl9fb25GYWlsdXJlLCBfdGhpc18uX19vbkluUHJvZ3Jlc3NDaGFuZ2UsIHRydWUpO1xuICAgICAgfTtcbiAgICAgIHN3aXRjaENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19vbkNsaWNrU3dpdGNoVUksIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbG9hZGluZyBVSSDsnITsuZgg7J6Q66as7J6h6rKMIO2VmOq4sCDsnITtlbRcbiAgICBhd2FpdCB0aGlzLl9faW5pdFN0eWxlKCk7XG5cbiAgICAvLyDtmZTrqbTqs7zrj4Qg7ZiE7IOBIO2VtOqysFxuICAgIHRoaXMuX19zZXRTdHlsZShvY3IsIHtcbiAgICAgIGRpc3BsYXk6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5fX29jciA9IG9jcjtcbiAgICB0aGlzLl9fY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuX19yb3RhdGlvbkNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgIHRoaXMuX192aWRlbyA9IHZpZGVvO1xuICAgIHRoaXMuX192aWRlb1dyYXAgPSB2aWRlb1dyYXA7XG4gICAgdGhpcy5fX2d1aWRlQm94ID0gZ3VpZGVCb3g7XG4gICAgdGhpcy5fX2d1aWRlQm94V3JhcCA9IGd1aWRlQm94V3JhcDtcbiAgICB0aGlzLl9fbWFza0JveFdyYXAgPSBtYXNrQm94V3JhcDtcbiAgICB0aGlzLl9fcHJldmVudFRvRnJlZXplVmlkZW8gPSBwcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgICB0aGlzLl9fY3VzdG9tVUlXcmFwID0gY3VzdG9tVUlXcmFwO1xuICAgIHRoaXMuX190b3BVSSA9IHRvcFVJO1xuICAgIHRoaXMuX19taWRkbGVVSSA9IG1pZGRsZVVJO1xuICAgIHRoaXMuX19ib3R0b21VSSA9IGJvdHRvbVVJO1xuICAgIHRoaXMuX19jYXB0dXJlVUlXcmFwID0gY2FwdHVyZVVJV3JhcDtcbiAgICB0aGlzLl9fY2FwdHVyZVVJID0gY2FwdHVyZVVJO1xuICAgIHRoaXMuX19jYXB0dXJlQnV0dG9uID0gY2FwdHVyZUJ1dHRvbjtcbiAgICB0aGlzLl9fcHJldmlld1VJV3JhcCA9IHByZXZpZXdVSVdyYXA7XG4gICAgdGhpcy5fX3ByZXZpZXdVSSA9IHByZXZpZXdVSTtcbiAgICB0aGlzLl9fcHJldmlld0ltYWdlID0gcHJldmlld0ltYWdlO1xuICAgIHRoaXMuX19zd2l0Y2hVSVdyYXAgPSBzd2l0Y2hVSVdyYXA7XG4gICAgdGhpcy5fX3N3aXRjaFVJID0gc3dpdGNoVUk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9jcixcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgdmlkZW8sXG4gICAgICB2aWRlb1dyYXAsXG4gICAgICBndWlkZUJveCxcbiAgICAgIGd1aWRlQm94V3JhcCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgcHJldmVudFRvRnJlZXplVmlkZW8sXG4gICAgICBjdXN0b21VSVdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlXcmFwLFxuICAgICAgY2FwdHVyZVVJLFxuICAgICAgY2FwdHVyZUJ1dHRvbixcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2UsXG4gICAgICBzd2l0Y2hVSVdyYXAsXG4gICAgICBzd2l0Y2hVSVxuICAgIH07XG4gIH1cbiAgX19ibHVyQ2FwdHVyZUJ1dHRvbigpIHtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS52aWRlbywge1xuICAgICAgZGlzcGxheTogJydcbiAgICB9KTtcbiAgICBjb25zdCB7XG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhcHR1cmVCdXR0b24pIHtcbiAgICAgIGNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJywgJ2ZhbHNlJyk7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIF9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgcmV0dXJuIGNhcHR1cmVCdXR0b24gPyBjYXB0dXJlQnV0dG9uLmdldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcpID09PSAndHJ1ZScgOiBmYWxzZTtcbiAgfVxuICBhc3luYyBfX3NldHVwVmlkZW8oaXNQYXNzcG9ydCkge1xuICAgIC8vIHdhc20g7J247Iud7ISx64qlIOy1nOygge2ZlOuQnCDtlbTsg4Hrj4RcbiAgICB0aGlzLl9fcmVzb2x1dGlvbldpZHRoID0gMTA4MDtcbiAgICB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCA9IDcyMDtcbiAgICB0aGlzLl9fY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IGF3YWl0IHRoaXMuX19zZXR1cERvbUVsZW1lbnRzKCk7XG4gICAgbGV0IGNhbWVyYSA9IGF3YWl0IHRoaXMuX19nZXRJbnB1dERldmljZXMoKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmlkZW9EZXZpY2VzIDo6ICcsIGNhbWVyYSlcblxuICAgIHRoaXMuY2hlY2tVSU9yaWVudGF0aW9uKCk7XG4gICAgbGV0IGNvbnN0cmFpbnRXaWR0aCwgY29uc3RyYWludEhlaWdodDtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMuY2FtZXJhUmVzb2x1dGlvbkNyaXRlcmlhID09PSAnaGlnaFF1YWxpdHknKSB7XG4gICAgICAvLyDsubTrqZTrnbwg7ZW07IOB64+EIOyEpOyglSA6IO2ZlOyniCDsmrDshKBcbiAgICAgIC8vIDE5MjB4MTA4MOydtCDqsIDriqXtlZzqsr3smrAg7IKs7JqpIOyVhOuLiOuptCAxMjgweDcyMCDsgqzsmqlcbiAgICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgICAvLyB1aSA6IHBvcnRyYWl0XG4gICAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgICBtaW46IDEwODAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICAgIG1pbjogNzIwIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1aSA6IGxhbmRzY2FwZVxuICAgICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgICAgbWluOiAxMjgwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgICAgbWluOiA3MjBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gJ2NvbXBhdGliaWxpdHknXG4gICAgICAvLyDsubTrqZTrnbwg7ZW07IOB64+EIOyEpOyglSA6IO2YuO2ZmOyEsSDsmrDshKBcbiAgICAgIC8vIDE5MjB4MTA4MOydtCDsgqzsmqkg6rCA64ql7ZWY642U652864+EIDEyODB4NzIw7J2EIOyCrOyaqe2VmOuPhOuhnSDqs6DsoJVcbiAgICAgIC8vIOyCrOycoCA6IOqwpOufreyLnCBlbnRyeSDrqqjrjbgoQeyLnOumrOymiCAvIFdpZGUg66qo6424IOuTsSnsl5DshJwgMTkyMCB4IDEwODAg7LKY66as7IucIOu5hOycqOydtCDsnbTsg4HtlbTsp5Ao7ZmA7K2J7J2065CoKVxuICAgICAgLy8g7ZWt7IOBIDEyODAgeCA3MjDsnYQg7IKs7Jqp7ZWY64+E66GdIOuzgOqyvVxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTI4MFxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiA3MjBcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge1xuICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgdmlkZW86IHtcbiAgICAgICAgem9vbToge1xuICAgICAgICAgIGlkZWFsOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGZhY2luZ01vZGU6IHtcbiAgICAgICAgICBpZGVhbDogdGhpcy5fX2ZhY2luZ01vZGVDb25zdHJhaW50XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgd2hpdGVCYWxhbmNlTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgZGV2aWNlSWQ6IGNhbWVyYS5sZW5ndGggPyB7XG4gICAgICAgICAgaWRlYWw6IGNhbWVyYVtjYW1lcmEubGVuZ3RoIC0gMV1cbiAgICAgICAgfSA6IG51bGwsXG4gICAgICAgIHdpZHRoOiBjb25zdHJhaW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogY29uc3RyYWludEhlaWdodFxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDstZzstIgg7KeE7J6FIOydtOyWtOyEnCB2aWRlb0RlaXZjZSDrpqzsiqTtirjrpbwg6rCA7KC47JisIOyImCDsl4bsnLzrqbQsXG4gICAgLy8gZ2V0VXNlck1lZGlh66W8IOyehOydmCDtmLjstpztlZjsl6wg6raM7ZWc7J2EIOuwm+ydgOuSpCDri6Tsi5wg6rCA7KC47Ji0XG4gICAgaWYgKGNhbWVyYS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX19zdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgIGNhbWVyYSA9IGF3YWl0IHRoaXMuX19nZXRJbnB1dERldmljZXMoKTtcbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID0gY2FtZXJhLmxlbmd0aCA/IHtcbiAgICAgICAgaWRlYWw6IGNhbWVyYVtjYW1lcmEubGVuZ3RoIC0gMV1cbiAgICAgIH0gOiBudWxsO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgZHVtcHRyYWNrID0gKFthLCBiXSwgdHJhY2spID0+XG4gICAgICAvLyAgIGAke2F9JHt0cmFjay5raW5kID09ICd2aWRlbycgPyAnQ2FtZXJhJyA6ICdNaWNyb3Bob25lJ30gKCR7dHJhY2sucmVhZHlTdGF0ZX0pOiAke3RyYWNrLmxhYmVsfSR7Yn1gO1xuXG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICAvLyB0aGlzLl9fZGVidWcoJ3ZpZGVvVHJhY2tzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpKTtcbiAgICAgIGNvbnN0IHN0cmVhbVNldHRpbmdzID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKTtcbiAgICAgIC8vIHRoaXMuX19kZWJ1ZyhcbiAgICAgIC8vICAgJ3N0cmVhbUNhcGFiaWxpdGllcyA6OiAnLFxuICAgICAgLy8gICBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDYXBhYmlsaXRpZXMoKVxuICAgICAgLy8gKTtcbiAgICAgIC8vIHRoaXMuX19kZWJ1Zygnc3RyZWFtIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENvbnN0cmFpbnRzKCkpO1xuICAgICAgLy8gdGhpcy5fX2RlYnVnKCdzdHJlYW1TZXR0aW5ncyA6OiAnLCBzdHJlYW1TZXR0aW5ncyk7XG4gICAgICB0aGlzLl9fZGVidWcoYHN0cmVhbSB3aWR0aCAqIGhlaWdodCA6OiAke3N0cmVhbVNldHRpbmdzLndpZHRofSAqICR7c3RyZWFtU2V0dGluZ3MuaGVpZ2h0fWApO1xuICAgICAgdGhpcy5fX2RlYnVnKCdzdHJlYW0gd2lkdGggLyBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoIC8gc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIHRoaXMuX19kZWJ1Zygnc3RyZWFtIGFzcGVjdFJhdGlvIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5hc3BlY3RSYXRpbyk7XG4gICAgICBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgW3JvdGF0aW9uQ2FudmFzLndpZHRoLCByb3RhdGlvbkNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoXTtcbiAgICAgIH1cbiAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgIHRoaXMuX19zdHJlYW0gPSBzdHJlYW07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19pbml0U3R5bGUoKSB7XG4gICAgdm9pZCAwO1xuICAgIGNvbnN0IHtcbiAgICAgIG9jcixcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KTtcblxuICAgIC8vIOq4sOykgOygleuztFxuICAgIGNvbnN0IGJhc2VXaWR0aCA9IDQwMDtcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMjYwO1xuICAgIGNvbnN0IHNjYW5uZXJGcmFtZVJhdGlvID0gYmFzZUhlaWdodCAvIGJhc2VXaWR0aDsgLy8g7Iug67aE7KadIOu5hOycqFxuXG4gICAgbGV0IGd1aWRlQm94V2lkdGgsIGd1aWRlQm94SGVpZ2h0O1xuICAgIGxldCBjYWxjT2NyQ2xpZW50V2lkdGggPSBvY3IuY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRIZWlnaHQgPSBvY3IuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aDtcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cztcbiAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IHRoaXMuX19ndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICBjb25zdCB2aWRlb1JhdGlvQnlIZWlnaHQgPSB0aGlzLl9fdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgLy8g7IS466GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKTroZwg6rCE7KO8XG4gICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpOuhnCDqsITso7xcbiAgICAgIC8vIOu5hOuUlOyYpOulvCDqsIDroZwgVUnsnZggaGVpZ2h0IOq4sOykgOycvOuhnCDspITsnbTqs6BcbiAgICAgIC8vIOqwgOuhnCBVSSBoZWlnaHQg6riw7KSA7Jy866GcIOu5hOuUlOyYpOydmCB3aWR0aCDqs4TsgrBcbiAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgfVxuICAgIGd1aWRlQm94V2lkdGggKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGd1aWRlQm94SGVpZ2h0ICs9IGJvcmRlcldpZHRoICogMjtcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94V2lkdGggKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveEhlaWdodCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGlmICh0b3BVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHRvcFVJLCB7XG4gICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcxMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobWlkZGxlVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShtaWRkbGVVSSwge1xuICAgICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogJzEwcHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCB2aWRlb0lubmVyR2FwID0gMjsgLy8g66+47IS47ZWY6rKMIG1hc2tCb3hJbm5lcuuztOuLpCBndWlkZUJveOqwgCDsnpHsnYDqsoMg67O07KCVXG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9KTtcbiAgICBjb25zdCBtYXNrQm94SW5uZXIgPSBtYXNrQm94V3JhcC5xdWVyeVNlbGVjdG9yKCcjbWFza0JveElubmVyJyk7XG4gICAgbGV0IHIgPSBib3JkZXJSYWRpdXMgLSBib3JkZXJXaWR0aCAqIDI7XG4gICAgciA9IHIgPCAwID8gMCA6IHI7XG4gICAgaWYgKCFpc05hTihyZWR1Y2VkR3VpZGVCb3hXaWR0aCkgJiYgIWlzTmFOKHJlZHVjZWRHdWlkZUJveEhlaWdodCkgJiYgIWlzTmFOKGJvcmRlclJhZGl1cykgJiYgIWlzTmFOKGJvcmRlcldpZHRoKSkge1xuICAgICAgY29uc3QgbWFza0JveElubmVyV2lkdGggPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgY29uc3QgbWFza0JveElubmVySGVpZ2h0ID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsIG1hc2tCb3hJbm5lcldpZHRoICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgbWFza0JveElubmVySGVpZ2h0ICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneCcsIG1hc2tCb3hJbm5lcldpZHRoIC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneScsIG1hc2tCb3hJbm5lckhlaWdodCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J4JywgciArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J5JywgciArICcnKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19hZGp1c3RTdHlsZSgpIHtcbiAgICBjb25zdCBfX2NhbGNHdWlkZUJveENyaXRlcmlhID0gKGEsIGIpID0+IHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy5jYWxjR3VpZGVCb3hDcml0ZXJpYSA9PT0gJ2NhbWVyYVJlc29sdXRpb24nKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihhLCBiKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fX29wdGlvbnMuY2FsY0d1aWRlQm94Q3JpdGVyaWEgPT09ICdvY3JWaWV3U2l6ZScpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGEsIGIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKGEsIGIpOyAvLyBkZWZhdWx0IDogY2FtZXJhUmVzb2x1dGlvblxuICAgICAgfVxuICAgIH07XG5cbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgY2FwdHVyZVVJV3JhcCxcbiAgICAgIGNhcHR1cmVVSSxcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KTtcblxuICAgIC8vIOq4sOykgOygleuztFxuICAgIGNvbnN0IGJhc2VXaWR0aCA9IDQwMDtcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMjYwO1xuICAgIGNvbnN0IHNjYW5uZXJGcmFtZVJhdGlvID0gYmFzZUhlaWdodCAvIGJhc2VXaWR0aDsgLy8g7Iug67aE7KadIOu5hOycqFxuXG4gICAgbGV0IGd1aWRlQm94V2lkdGgsIGd1aWRlQm94SGVpZ2h0O1xuICAgIGxldCBjYWxjT2NyQ2xpZW50V2lkdGggPSBvY3IuY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRIZWlnaHQgPSBvY3IuY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb247XG4gICAgaWYgKGNhbGNWaWRlb1dpZHRoID09PSAwIHx8IGNhbGNWaWRlb0hlaWdodCA9PT0gMCB8fCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9PT0gMCB8fCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW2NhbGNWaWRlb1dpZHRoLCBjYWxjVmlkZW9IZWlnaHRdID0gW2NhbGNWaWRlb0hlaWdodCwgY2FsY1ZpZGVvV2lkdGhdO1xuICAgICAgW2NhbGNWaWRlb0NsaWVudFdpZHRoLCBjYWxjVmlkZW9DbGllbnRIZWlnaHRdID0gW2NhbGNWaWRlb0NsaWVudEhlaWdodCwgY2FsY1ZpZGVvQ2xpZW50V2lkdGhdO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgbGV0IG5ld1ZpZGVvV2lkdGggPSBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBsZXQgbmV3VmlkZW9IZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSB0aGlzLl9fZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgY29uc3QgdmlkZW9SYXRpb0J5SGVpZ2h0ID0gdGhpcy5fX3ZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICBjb25zdCBuZXdWaWRlb1JhdGlvQnlXaWR0aCA9IGNhbGNWaWRlb0NsaWVudEhlaWdodCAvIGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGNvbnN0IG5ld1ZpZGVvUmF0aW9CeUhlaWdodCA9IGNhbGNWaWRlb0NsaWVudFdpZHRoIC8gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgLy8g7IS466GcIFVJXG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJV3JhcCwge1xuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdmbGV4LWVuZCdcbiAgICAgIH0pO1xuICAgICAgLy8gdmlkZW8g6rCA66GcIOq4sOykgCAxMDAlIOycoOyngCAo67OA6rK97JeG7J2MKVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDsubTrqZTrnbzrj4Qg7IS466GcXG4gICAgICAgIC8vIOyEuOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgICBndWlkZUJveFdpZHRoID0gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50V2lkdGgsIGNhbGNWaWRlb1dpZHRoKSAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogbmV3VmlkZW9SYXRpb0J5V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDsubTrqZTrnbzripQg6rCA66GcXG4gICAgICAgIC8vIOyEuOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqTrpbwg67mE65SU7JikIOyEuOuhnCDquLjsnbTsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0hlaWdodCk7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSVxuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSVdyYXAsIHtcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdlbmQnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJ1xuICAgICAgfSk7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOu5hOuUlOyYpOulvCDqsIDroZwgVUnsnZggaGVpZ2h0IOq4sOykgOycvOuhnCDspITsnbTqs6BcbiAgICAgICAgLy8g6rCA66GcIFVJIGhlaWdodCDquLDspIDsnLzroZwg67mE65SU7Jik7J2YIHdpZHRoIOqzhOyCsFxuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOuKlCDshLjroZwg6riw7KSA7Jy866GcIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEoY2FsY09jckNsaWVudEhlaWdodCwgY2FsY1ZpZGVvSGVpZ2h0KSAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDruYTrlJTsmKTrpbwg7IS466GcIOq4sOykgOycvOuhnCDri6Tsi5wg66ee7LakXG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gZ3VpZGVCb3hIZWlnaHQ7XG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBuZXdWaWRlb0hlaWdodCAqIG5ld1ZpZGVvUmF0aW9CeUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEoY2FsY09jckNsaWVudFdpZHRoLCBjYWxjVmlkZW9XaWR0aCkgKiBndWlkZUJveFJhdGlvQnlXaWR0aCkge1xuICAgICAgICAgIC8vIOqzhOyCsCDrsKnsi53snYQg67CU6r6864ukICjsgqzsnKAgOiDqsbDsnZgg7KCV7IKs6rCB7ZiV7JeQIOqwgOq5jOyatCDqsr3smrAg6rCA7J2065OcIOuwleyKpCDqsIDroZzqsIAg6r2J7LCo6rKMIOuQqC4pXG4gICAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEoY2FsY09jckNsaWVudFdpZHRoLCBjYWxjVmlkZW9XaWR0aCkgKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7ZmV64yAXG4gICAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogbmV3VmlkZW9SYXRpb0J5V2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCBoZWlnaHQg7YGs6riw66W8IFVJ7J2YIGhlaWdodCDquLDspIDsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9IZWlnaHQpICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCDqsIDroZwg7YGs6riw6rCAIOqwgOuhnCBVSSB3aWR0aCAqIHJhdGlvIOqwkuuztOuLpCDtgazrqbQsXG4gICAgICAgIGlmIChndWlkZUJveFdpZHRoID4gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50V2lkdGgsIGNhbGNWaWRlb1dpZHRoKSAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50V2lkdGgsIGNhbGNWaWRlb1dpZHRoKSAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDstpXshoxcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIG5ld1ZpZGVvUmF0aW9CeVdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbGNHdWlkZUJveENyaXRlcmlhKOy5tOuplOudvCDtlbTsg4Hrj4Qg7ISk7KCVIOq4sOykgCnqsIAgb2NyVmlld1NpemUo7ZmU66m0IO2BrOq4sCkg6riw7KSA7J2865WMXG4gICAgaWYgKHRoaXMuX19vcHRpb25zLmNhbGNHdWlkZUJveENyaXRlcmlhID09PSAnb2NyVmlld1NpemUnKSB7XG4gICAgICAvLyBndWlkZUJveEhlaWdodCDsnbQgY2FsY09jckNsaWVudEhlaWdodCDrs7Tri6Qg7YGw6rK97JqwKOqwgOydtOuTnOuwleyKpOqwgCDtmZTrqbTsnYQg64SY7Ja06rCA64qUIOqyveyasCkg64uk7IucIOqzhOyCsFxuICAgICAgaWYgKGd1aWRlQm94SGVpZ2h0ID4gY2FsY09jckNsaWVudEhlaWdodCkge1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IE1hdGgubWluKGNhbGNPY3JDbGllbnRIZWlnaHQsIGNhbGNWaWRlb0hlaWdodCkgKiB2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiBuZXdWaWRlb1JhdGlvQnlXaWR0aDtcbiAgICAgIH1cblxuICAgICAgLy8gZ3VpZGVCb3hIZWlnaHQg7J20IGNhbGNPY3JDbGllbnRIZWlnaHQg67O064ukIO2BsOqyveyasCjqsIDsnbTrk5zrsJXsiqTqsIAg7ZmU66m07J2EIOuEmOyWtOqwgOuKlCDqsr3smrApIOuLpOyLnCDqs4TsgrBcbiAgICAgIGlmIChndWlkZUJveFdpZHRoID4gY2FsY09jckNsaWVudFdpZHRoKSB7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBNYXRoLm1pbihjYWxjT2NyQ2xpZW50V2lkdGgsIGNhbGNWaWRlb1dpZHRoKSAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIG5ld1ZpZGVvUmF0aW9CeVdpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZVdpZHRoID0gTWF0aC5taW4oZ3VpZGVCb3hXaWR0aCwgbmV3VmlkZW9XaWR0aCk7XG4gICAgdGhpcy5fX2Nyb3BJbWFnZVNpemVIZWlnaHQgPSBNYXRoLm1pbihndWlkZUJveEhlaWdodCwgbmV3VmlkZW9IZWlnaHQpO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgfVxuICAgIGd1aWRlQm94V2lkdGggKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGd1aWRlQm94SGVpZ2h0ICs9IGJvcmRlcldpZHRoICogMjtcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94V2lkdGggKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveEhlaWdodCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGlmICh0b3BVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHRvcFVJLCB7XG4gICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcxMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobWlkZGxlVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShtaWRkbGVVSSwge1xuICAgICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogJzEwcHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgIHdpZHRoOiBuZXdWaWRlb1dpZHRoICsgJ3B4J1xuICAgIH0pO1xuICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgaGVpZ2h0OiBuZXdWaWRlb0hlaWdodCArICdweCdcbiAgICB9KTtcbiAgICBjb25zdCB2aWRlb0lubmVyR2FwID0gMjsgLy8g66+47IS47ZWY6rKMIG1hc2tCb3hJbm5lcuuztOuLpCBndWlkZUJveOqwgCDsnpHsnYDqsoMg67O07KCVXG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9KTtcbiAgICBjb25zdCBtYXNrQm94SW5uZXIgPSBtYXNrQm94V3JhcC5xdWVyeVNlbGVjdG9yKCcjbWFza0JveElubmVyJyk7XG4gICAgbGV0IHIgPSBib3JkZXJSYWRpdXMgLSBib3JkZXJXaWR0aCAqIDI7XG4gICAgciA9IHIgPCAwID8gMCA6IHI7XG4gICAgaWYgKCFpc05hTihyZWR1Y2VkR3VpZGVCb3hXaWR0aCkgJiYgIWlzTmFOKHJlZHVjZWRHdWlkZUJveEhlaWdodCkgJiYgIWlzTmFOKGJvcmRlclJhZGl1cykgJiYgIWlzTmFOKGJvcmRlcldpZHRoKSkge1xuICAgICAgY29uc3QgbWFza0JveElubmVyV2lkdGggPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgY29uc3QgbWFza0JveElubmVySGVpZ2h0ID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsIG1hc2tCb3hJbm5lcldpZHRoICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgbWFza0JveElubmVySGVpZ2h0ICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneCcsIG1hc2tCb3hJbm5lcldpZHRoIC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneScsIG1hc2tCb3hJbm5lckhlaWdodCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J4JywgciArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J5JywgciArICcnKTtcbiAgICB9XG5cbiAgICAvLyDsiJjrj5kg7LSs7JiBIFVJIOyCrOyaqVxuICAgIC8vIGZpcnN0Q2FsbGVk7J24IOqyveyasCDslYTsp4EgY2FwdHVyZVVJ6rCAIOq3uOugpOyngOyngCDslYrslYQg66y07J2Y66+4XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgJiYgYm90dG9tVUkgJiYgY2FwdHVyZVVJKSB7XG4gICAgICAgIGNvbnN0IGNhbGNTdW1PZkhlaWdodEJvdHRvbVVJQ2hpbGROb2RlcyA9IHRoaXMuX19jYWxjU3VtT2ZIZWlnaHRDaGlsZE5vZGVzKGJvdHRvbVVJKTtcbiAgICAgICAgbGV0IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0ID0gY2FwdHVyZUJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzdmcnKS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0ID09PSAwID8gODAgOiBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodDtcbiAgICAgICAgbGV0IGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gPSBib3R0b21VSS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gLT0gaXNOYU4ocGFyc2VJbnQoYm90dG9tVUkuc3R5bGUucGFkZGluZ1RvcCkpID8gMCA6IHBhcnNlSW50KGJvdHRvbVVJLnN0eWxlLnBhZGRpbmdUb3ApO1xuICAgICAgICBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIC09IGNhbGNTdW1PZkhlaWdodEJvdHRvbVVJQ2hpbGROb2RlcztcbiAgICAgICAgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSAtPSBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodDtcbiAgICAgICAgY29uc3QgYmFzZWxpbmUgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gKGNhbGNPY3JDbGllbnRIZWlnaHQgLyAyICsgZ3VpZGVCb3hIZWlnaHQgLyAyKTtcbiAgICAgICAgaWYgKGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gPiAwICYmIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gPCBiYXNlbGluZSkge1xuICAgICAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgICAgICdwYWRkaW5nLXJpZ2h0JzogJycsXG4gICAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiBjYXB0dXJlVUlQYWRkaW5nQm90dG9tICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiAnMTBweCcsXG4gICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRydWUpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX2NhbGNTdW1PZkhlaWdodENoaWxkTm9kZXMob2JqKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIG9iaj8uY2hpbGROb2Rlcykge1xuICAgICAgc3VtICs9IGl0ZW0uY2xpZW50SGVpZ2h0ID8gaXRlbS5jbGllbnRIZWlnaHQgOiAwO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9XG4gIF9fY2xvc2VDYW1lcmEoKSB7XG4gICAgdGhpcy5fX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgfVxuICBhc3luYyBfX2xvYWRSZXNvdXJjZXMoKSB7XG4gICAgdm9pZCAwO1xuICAgIGlmICh0aGlzLl9fcmVzb3VyY2VzTG9hZGVkKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX19pc1N1cHBvcnRTaW1kID0gYXdhaXQgc2ltZCgpO1xuICAgIGxldCBlbnZJbmZvID0gJyc7XG4gICAgZW52SW5mbyArPSBgb3MgOiAke3RoaXMuX19kZXZpY2VJbmZvLm9zfVxcbmA7XG4gICAgZW52SW5mbyArPSBgb3NTaW1wbGUgOiAke3RoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlfVxcbmA7XG4gICAgZW52SW5mbyArPSBgaXNTdXBwb3J0V2FzbTogJHt0aGlzLl9faXNTdXBwb3J0V2FzbX1cXG5gO1xuICAgIGVudkluZm8gKz0gYHNpbWQod2FzbS1mZWF0dXJlLWRldGVjdCkgOiAke3RoaXMuX19pc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgaWYgKHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnSU9TJyB8fCB0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZSA9PT0gJ01BQycpIHtcbiAgICAgIHRoaXMuX19pc1N1cHBvcnRTaW1kID0gZmFsc2U7XG4gICAgfVxuICAgIGVudkluZm8gKz0gYGlzU3VwcG9ydFNpbWQoZmluYWwpIDogJHt0aGlzLl9faXNTdXBwb3J0U2ltZH1cXG5gO1xuICAgIGVudkluZm8gKz0gYFVzZXJBZ2VudCA6ICR7bmF2aWdhdG9yLnVzZXJBZ2VudH1cXG5gO1xuICAgIHZvaWQgMDtcbiAgICB0aGlzLl9fZGVidWcoZW52SW5mbyk7XG4gICAgd2luZG93LnVzZWJPQ1JFbnZJbmZvID0gZW52SW5mbztcbiAgICBsZXQgc2RrU3VwcG9ydEVudiA9ICdxdXJhbSc7XG4gICAgaWYgKHRoaXMuX19pc1N1cHBvcnRTaW1kKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBzZGtTdXBwb3J0RW52ICs9ICdfc2ltZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gICAgdm9pZCAwO1xuICAgIHdpbmRvdy51c2ViT0NSRW52SW5mbyA9IGVudkluZm87XG4gICAgdm9pZCAwO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoc2RrU3VwcG9ydEVudiArICcuanMnLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpO1xuICAgIGxldCBzcmMgPSBhd2FpdCBmZXRjaCh1cmwuaHJlZikudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcbiAgICAgIGxldCByZWdleCA9IC8oLiopID0gTW9kdWxlLmN3cmFwL2dtO1xuICAgICAgbGV0IHNvdXJjZSA9IHRleHQucmVwbGFjZShyZWdleCwgJ01vZHVsZS4kMSA9IE1vZHVsZS5jd3JhcCcpO1xuXG4gICAgICAvLyBkYXRhKG1vZGVsKVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL15cXChmdW5jdGlvblxcKFxcKSBcXHsvbSwgJ3ZhciBjcmVhdGVNb2RlbERhdGEgPSBhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xcbicpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgIGNvbnNvbGUuZXJyb3IoXCJwYWNrYWdlIGVycm9yOlwiLCBlcnJvcik7JywgJyAgIHJlamVjdCgpO1xcbicgKyAnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCcgIH0sIGhhbmRsZUVycm9yKScsICcgIHJlc29sdmUoKTtcXG4nICsgJyAgfSwgaGFuZGxlRXJyb3IpJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcfVxcKVxcKFxcKTsvbSwgJ1xcbiB9KVxcbicgKyAnfTsnKTtcblxuICAgICAgLy8gd2FzbVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2Uoc2RrU3VwcG9ydEVudiArICcud2FzbScsIG5ldyBVUkwoc2RrU3VwcG9ydEVudiArICcud2FzbScsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZik7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShuZXcgUmVnRXhwKGBSRU1PVEVfUEFDS0FHRV9CQVNFID0gWydcIl0ke3Nka1N1cHBvcnRFbnZ9XFxcXC5kYXRhW1wiJ11gLCAnZ20nKSwgYFJFTU9URV9QQUNLQUdFX0JBU0UgPSBcIiR7bmV3IFVSTChzZGtTdXBwb3J0RW52ICsgJy5kYXRhJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmfVwiYCk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnZnVuY3Rpb24gY3JlYXRlV2FzbScsICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnaW5zdGFudGlhdGVBc3luYygpOycsICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7Jyk7XG5cbiAgICAgIC8vIHdhc20gYW5kIGRhdGEobW9kZWwpIGZpbGUg67OR66Cs66GcIGZldGNoIO2VmOq4sCDsnITtlbRcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gc3RhcnRcIilcXG4nICsgJ2F3YWl0IChhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkV2FzbSA9IGZhbHNlO1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWREYXRhID0gZmFsc2U7XFxuJyArICcgICAgY3JlYXRlV2FzbSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkV2FzbSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkRGF0YSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KTtcXG4nICsgJyAgICBjcmVhdGVNb2RlbERhdGEoKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZERhdGEgPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZFdhc20pIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSlcXG4nICsgJyAgfSk7XFxuJyArICd9KSgpO1xcbicgKyAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIGVuZFwiKScpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9KTtcbiAgICBzcmMgPSBgXG4gICAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgJHtzcmN9XG4gICAgICBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4ID0gbGVuZ3RoQnl0ZXNVVEY4XG4gICAgICBNb2R1bGUuc3RyaW5nVG9VVEY4ID0gc3RyaW5nVG9VVEY4XG4gICAgICByZXR1cm4gTW9kdWxlXG4gICAgfSkoKVxuICAgICAgICBgO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCA9IGFzeW5jIF8gPT4ge1xuICAgICAgdm9pZCAwO1xuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fX09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpO1xuICAgIHRoaXMuX19yZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX3N0YXJ0U2Nhbldhc21JbXBsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpO1xuICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gU1RBUlRcbiAgICAgIC8vIHRoaXMuX19zZXRQaWlFbmNyeXB0TW9kZSh0aGlzLl9fb3B0aW9ucy51c2VQaWlFbmNyeXB0TW9kZSk7IC8vIG9jciByZXN1bHQgZW5jcnlwdFxuICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gRU5EXG4gICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgIHRoaXMuX19hZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuX19wYWdlRW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA9IDA7XG4gICAgICB0aGlzLl9fc3NhUmV0cnlDb3VudCA9IDA7XG4gICAgICBjb25zdCBzY2FuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsLFxuICAgICAgICAgICAgaXNEZXRlY3RlZENhcmQgPSBudWxsLFxuICAgICAgICAgICAgaW1nRGF0YSA9IG51bGwsXG4gICAgICAgICAgICBpbWdEYXRhVXJsID0gbnVsbCxcbiAgICAgICAgICAgIG1hc2tJbWFnZSA9IG51bGwsXG4gICAgICAgICAgICBmYWNlSW1hZ2UgPSBudWxsLFxuICAgICAgICAgICAgc3NhUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdExpc3QgPSBbXSxcbiAgICAgICAgICAgIG1hc2tJbmZvID0gbnVsbDtcblxuICAgICAgICAgIC8vIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgaWYgKCF0aGlzLl9fT0NSRW5naW5lWydhc20nXSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVE9ETyA6IOyEpOygle2VoOyImCDsnojqsowg67OA6rK9ICBkZWZhdWx0IOqwkuuPhCDsoJzqs7VcbiAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvbl93LCByZXNvbHV0aW9uX2hdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB2aWRlb1xuICAgICAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgICAgIGlmIChyZXNvbHV0aW9uX3cgPT09IDAgfHwgcmVzb2x1dGlvbl9oID09PSAwKSByZXR1cm47XG4gICAgICAgICAgaWYgKHRoaXMuX19kZXRlY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGJlZm9yZSAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcbiAgICAgICAgICBpZiAodGhpcy5fX2FkZHJlc3MgPT09IDAgJiYgIXRoaXMuX19wYWdlRW5kICYmIChhd2FpdCB0aGlzLl9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvKSkpIHtcbiAgICAgICAgICAgIFt0aGlzLl9fYWRkcmVzcywgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2tdID0gdGhpcy5fX2dldFNjYW5uZXJBZGRyZXNzKHRoaXMuX19vY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl9fYWRkcmVzcyB8fCB0aGlzLl9fcGFnZUVuZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGFmdGVyIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPCB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIE9DUiDsmYTro4wg7J207KCEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgICAgW2lzRGV0ZWN0ZWRDYXJkLCBpbWdEYXRhLCBpbWdEYXRhVXJsXSA9IGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZCh0aGlzLl9fYWRkcmVzcywgMCk7XG4gICAgICAgICAgICBpZiAoIWlzRGV0ZWN0ZWRDYXJkKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9faW5Qcm9ncmVzc1N0ZXAgIT09IHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9GQUlMRUQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVELCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7IC8vIO2VhOyalO2VnOqwgD9cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FyZCBpcyBkZXRlY3RlZFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUyk7XG5cbiAgICAgICAgICAgIC8vIHNzYSByZXRyeSDshKTsoJXsnbQg65CY7Ja0IOyeiOycvOqxsOuCmCwg7IiY64+Z7LSs7JiBVUnrpbwg7IKs7Jqp7ZWY64qUIOqyveyasCwgY2FyZCBkZXRlY3Qg7ISx6rO17IucIOydtOuvuOyngCDsoIDsnqVcbiAgICAgICAgICAgIHRoaXMuX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUoaW1nRGF0YSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9TVUNDRVNTLCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbb2NyUmVzdWx0LCBpbWdEYXRhVXJsLCBtYXNrSW1hZ2UsIGZhY2VJbWFnZV0gPSBhd2FpdCB0aGlzLl9fc3RhcnRSZWNvZ25pdGlvbih0aGlzLl9fYWRkcmVzcywgdGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCB0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpLCBpbWdEYXRhLCBpbWdEYXRhVXJsKTtcblxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgIC8vICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICAgICAgICAvLyAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpOyAgICAgICAgLy8g7ZWE7JqU7ZWc6rCAP1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9fb2NyU3RhdHVzID49IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUykge1xuICAgICAgICAgICAgLy8gb2NyIOyZhOujjCDsnbTtm4Qg7IOB7YOcXG5cbiAgICAgICAgICAgIC8vIGZhaWx1cmUgY2FzZVxuICAgICAgICAgICAgaWYgKG9jclJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPQ1IgU3RhdHVzIGlzICR7dGhpcy5fX29jclN0YXR1c30sIGJ1dCBvY3JSZXN1bHQgaXMgZmFsc2VgKTsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7IC8vIE9DUiDsmYTro4wg7Iuc7KCQ7JeQIGNhbWVyYSBwcmV2aWV3IG9mZlxuXG4gICAgICAgICAgICBpZiAodGhpcy5fX3NzYU1vZGUpIHtcbiAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAvLyDstZzstIgg7Iuc64+EXG4gICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoKHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ1tFUlJdIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGwnKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICAgICAgICAgICAgc3NhUmVzdWx0TGlzdC5wdXNoKHNzYVJlc3VsdCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCByZXRyeVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgRkFLRSA9IHRoaXMuX19vcHRpb25zLnNzYVJldHJ5VHlwZSA9PT0gJ0ZBS0UnO1xuICAgICAgICAgICAgICAgIGNvbnN0IFJFQUwgPSB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVR5cGUgPT09ICdSRUFMJztcbiAgICAgICAgICAgICAgICBjb25zdCBFTlNFTUJMRSA9IHRoaXMuX19vcHRpb25zLnNzYVJldHJ5VHlwZSA9PT0gJ0VOU0VNQkxFJztcbiAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZWQgPSBmYWxzZTsgLy8g67mE64+Z6riwIGZvciDrrLgg65WM66y47JeQIGJyZWFr6rCAIOyViOqxuOumrOuKlCDsnbTsiojroZwg64Sj7J2MXG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9fc3NhUmV0cnlDb3VudCA9PT0gdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgZXhlY3V0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3NzYVJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgc3NhUmVzdWx0ID0gYXdhaXQgdGhpcy5fX3N0YXJ0VHJ1dGhSZXRyeSh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2FkZHJlc3MsIGl0ZW0pOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsJyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGlmIChGQUtFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQuaW5kZXhPZignUkVBTCcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBleGVjdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoUkVBTCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0LmluZGV4T2YoJ0ZBS0UnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKEVOU0VNQkxFKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0cnlXb3JraW5nVGltZSA9IG5ldyBEYXRlKCkgLSByZXRyeVN0YXJ0RGF0ZTtcbiAgICAgICAgICAgICAgICB2b2lkIDA7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tJbmZvKSB7XG4gICAgICAgICAgICAgIG1hc2tJbmZvID0gdGhpcy5fX2dldE1hc2tJbmZvKHRoaXMuX19hZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgbGVnYWN5Rm9ybWF0LFxuICAgICAgICAgICAgICBuZXdGb3JtYXRcbiAgICAgICAgICAgIH0gPSB1c2ViT0NSV0FTTVBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLl9fc3NhUmV0cnlDb3VudCwgc3NhUmVzdWx0TGlzdCwgdGhpcy5fX29wdGlvbnMuc3NhUmV0cnlUeXBlLCB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVBpdm90XG4gICAgICAgICAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBTVEFSVFxuICAgICAgICAgICAgLy8gdGhpcy5fX29wdGlvbnMudXNlUGlpRW5jcnlwdE1vZGVcbiAgICAgICAgICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIEVORFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHJldmlld19yZXN1bHQgPSB7XG4gICAgICAgICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgICAgICAgb2NyX3Jlc3VsdDogbmV3Rm9ybWF0LFxuICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiBpbWdEYXRhVXJsLFxuICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogbWFza0ltYWdlLFxuICAgICAgICAgICAgICBvY3JfZmFjZV9pbWFnZTogZmFjZUltYWdlLFxuICAgICAgICAgICAgICBtYXNrSW5mbzogbWFza0luZm8sXG4gICAgICAgICAgICAgIHNzYV9tb2RlOiB0aGlzLl9fc3NhTW9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jb21wcmVzc0ltYWdlcyhyZXZpZXdfcmVzdWx0LCBpbWdEYXRhVXJsLCBtYXNrSW1hZ2UsIGZhY2VJbWFnZSk7XG4gICAgICAgICAgICB0aGlzLmVuY3J5cHRSZXN1bHQocmV2aWV3X3Jlc3VsdCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTGVnYWN5Rm9ybWF0KSB7XG4gICAgICAgICAgICAgIHJldmlld19yZXN1bHQub2NyX2RhdGEgPSBsZWdhY3lGb3JtYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgdGhpcy5fX2RldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yJztcbiAgICAgICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzogJyArIGUubWVzc2FnZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgICAvLyAgIGF3YWl0IHRoaXMuX19yZWNvdmVyeVNjYW4oKTtcbiAgICAgICAgICAvLyAgIHRoaXMuX19yZWNvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoJ1dBMDAxJywgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodGhpcy5fX3JlY292ZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5fX3JlY292ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuX19kZXRlY3RlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8g7J6s6reAXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZXRUaW1lb3V0KHNjYW4sIDEpOyAvLyBVSSDrnpzrjZTrp4EgYmxvY2tpbmcg67Cp7KeAIChzZXRUaW1lb3V0KVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgX19jb21wcmVzc0ltYWdlcyhyZXZpZXdfcmVzdWx0LCBpbWdEYXRhVXJsLCBtYXNrSW1hZ2UsIGZhY2VJbWFnZSwgY29uc3RhbnROdW1iZXIpIHtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZSkge1xuICAgICAgY29uc3QgcmVzaXplUmF0aW8gPSB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodCAvIHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGg7XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aCxcbiAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4V2lkdGggKiByZXNpemVSYXRpbyxcbiAgICAgICAgY29udmVydFNpemU6IHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhWb2x1bWUsXG4gICAgICAgIHRhcmdldENvbXByZXNzVm9sdW1lOiB0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lIC8vIGN1c3RvbSBvcHRpb25cbiAgICAgIH07XG5cbiAgICAgIHJldmlld19yZXN1bHQub2NyX29yaWdpbl9pbWFnZSA9IGF3YWl0IHRoaXMuX19jb21wcmVzZUJhc2U2NEltYWdlKGltZ0RhdGFVcmwsIGRlZmF1bHRPcHRpb25zLCBjb25zdGFudE51bWJlcik7XG5cbiAgICAgIC8vIG1hc2tpbmcg7J2066+47KeA64qUIHJlc2l6ZSDtlZjrqbQsIG1hc2sg7KKM7ZGc6rCAIOyWtOq4i+uCmOuvgOuhnCDrpqzsgqzsnbTspogg7JWI7ZWY6rOgIOyVley2leunjCDsp4TtlolcbiAgICAgIGNvbnN0IG1hc2tpbmdJbWFnZU9wdGlvbnMgPSB7XG4gICAgICAgIHF1YWxpdHk6IGRlZmF1bHRPcHRpb25zLnF1YWxpdHksXG4gICAgICAgIHRhcmdldENvbXByZXNzVm9sdW1lOiBkZWZhdWx0T3B0aW9ucy50YXJnZXRDb21wcmVzc1ZvbHVtZVxuICAgICAgfTtcbiAgICAgIHJldmlld19yZXN1bHQub2NyX21hc2tpbmdfaW1hZ2UgPSBhd2FpdCB0aGlzLl9fY29tcHJlc2VCYXNlNjRJbWFnZShtYXNrSW1hZ2UsIG1hc2tpbmdJbWFnZU9wdGlvbnMsIGNvbnN0YW50TnVtYmVyKTtcbiAgICAgIHJldmlld19yZXN1bHQub2NyX2ZhY2VfaW1hZ2UgPSBhd2FpdCB0aGlzLl9fY29tcHJlc2VCYXNlNjRJbWFnZShmYWNlSW1hZ2UsIGRlZmF1bHRPcHRpb25zLCBjb25zdGFudE51bWJlcik7XG4gICAgfVxuICB9XG4gIF9fcmVxdWVzdEdldEFQSVRva2VuKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjcmVkZW50aWFsID0gdGhpcy5fX29wdGlvbnMuYXV0aFNlcnZlckluZm8uY3JlZGVudGlhbDtcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLl9fb3B0aW9ucy5hdXRoU2VydmVySW5mby5iYXNlVXJsO1xuICAgICAgZmV0Y2goYCR7YmFzZVVybH0vc2lnbi1pbmAsIHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbCksXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgIC8vIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgLy8gY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBmZXRjaChgJHtiYXNlVXJsfS91c2ViL3Rva2VuYCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtyZXN1bHQudG9rZW59YFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogbnVsbCxcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShqc29uLnRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIF9fcmVxdWVzdFNlcnZlck9DUihvY3JUeXBlLCBzc2FNb2RlLCBpbWdEYXRhVXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBiYXNlVXJsID0gdGhpcy5fX29wdGlvbnMub2NyU2VydmVyQmFzZVVybDtcbiAgICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgICAgYmFzZVVybCArPSAnL29jci9pZGNhcmQtZHJpdmVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICAgIGJhc2VVcmwgKz0gJy9vY3IvcGFzc3BvcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgICBiYXNlVXJsICs9ICcvb2NyL2FsaWVuJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NyZWRpdCBjYXJkIGlzIG5vdCBVbnN1cHBvcnRlZCBTZXJ2ZXIgT0NSJyk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgT0NSIHR5cGU6ICR7b2NyVHlwZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcGlUb2tlbiA9IGF3YWl0IHRoaXMuX19yZXF1ZXN0R2V0QVBJVG9rZW4oKTtcbiAgICAgICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgbXlIZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlUb2tlbn1gKTtcbiAgICAgICAgY29uc3QgcmF3ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGltYWdlX2Jhc2U2NDogaW1nRGF0YVVybCxcbiAgICAgICAgICBzc2FfbW9kZTogJ3RydWUnLFxuICAgICAgICAgIG1hc2tfbW9kZTogJ3RydWUnLFxuICAgICAgICAgIGZhY2VfbW9kZTogJ3RydWUnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgICAgICAgYm9keTogcmF3LFxuICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaChiYXNlVXJsLCByZXF1ZXN0T3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19zdGFydFNjYW5TZXJ2ZXJJbXBsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBTVEFSVFxuICAgICAgICAvLyB0aGlzLl9fc2V0UGlpRW5jcnlwdE1vZGUodGhpcy5fX29wdGlvbnMudXNlUGlpRW5jcnlwdE1vZGUpOyAvLyBvY3IgcmVzdWx0IGVuY3J5cHRcbiAgICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gRU5EXG4gICAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgICBsZXQgb2NyUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICBzc2FSZXN1bHQgPSBudWxsLFxuICAgICAgICAgIHNzYVJlc3VsdExpc3QgPSBbXTtcbiAgICAgICAgY29uc3QgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAvLyDsupTrsoTsiqTsl5DshJwg7J2066+47KeA66W8IOqwgOyguOyYtFxuICAgICAgICAgIGNvbnN0IFssIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy5fX2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgICAgIGlmICgxID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBzZXJ2ZXIgb2NyIOyLpO2MqCAo67Cc7IOdIOqwgOuKpeyEsSDsl4bsnYwpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNlcnZlciBvY3Ig7ISx6rO1XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9TVUNDRVNTLCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBvY3JSZXN1bHQgPSBhd2FpdCB0aGlzLl9fcmVxdWVzdFNlcnZlck9DUih0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIGltZ0RhdGFVcmwpO1xuXG4gICAgICAgICAgICAgIC8vIGZhaWx1cmUgY2FzZVxuICAgICAgICAgICAgICBpZiAob2NyUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIE9DUiBpcyBmYWlsZWRgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3NhIOyLnOuPhD9cblxuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIHZpZGVvXG4gICAgICAgICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pOyAvLyBPQ1Ig7JmE66OMIOyLnOygkOyXkCBjYW1lcmEgcHJldmlldyBvZmZcblxuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBsZWdhY3lGb3JtYXQsXG4gICAgICAgICAgICAgIG5ld0Zvcm1hdCxcbiAgICAgICAgICAgICAgYmFzZTY0SW1hZ2VSZXN1bHQsXG4gICAgICAgICAgICAgIG1hc2tJbmZvXG4gICAgICAgICAgICB9ID0gdXNlYk9DUkFQSVBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIG9jclJlc3VsdCk7XG4gICAgICAgICAgICBsZXQgcmV2aWV3X3Jlc3VsdCA9IHtcbiAgICAgICAgICAgICAgb2NyX3R5cGU6IHRoaXMuX19vY3JUeXBlLFxuICAgICAgICAgICAgICBvY3JfcmVzdWx0OiBuZXdGb3JtYXQsXG4gICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBiYXNlNjRJbWFnZVJlc3VsdD8ub2NyX21hc2tpbmdfaW1hZ2UsXG4gICAgICAgICAgICAgIG9jcl9mYWNlX2ltYWdlOiBiYXNlNjRJbWFnZVJlc3VsdD8ub2NyX2ZhY2VfaW1hZ2UsXG4gICAgICAgICAgICAgIG1hc2tJbmZvLFxuICAgICAgICAgICAgICBzc2FfbW9kZTogdGhpcy5fX3NzYU1vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fY29tcHJlc3NJbWFnZXMocmV2aWV3X3Jlc3VsdCwgaW1nRGF0YVVybCwgYmFzZTY0SW1hZ2VSZXN1bHQ/Lm9jcl9tYXNraW5nX2ltYWdlLCBiYXNlNjRJbWFnZVJlc3VsdD8ub2NyX2ZhY2VfaW1hZ2UsIDAuMCk7XG4gICAgICAgICAgICB0aGlzLmVuY3J5cHRSZXN1bHQocmV2aWV3X3Jlc3VsdCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTGVnYWN5Rm9ybWF0KSB7XG4gICAgICAgICAgICAgIHJldmlld19yZXN1bHQub2NyX2RhdGEgPSBsZWdhY3lGb3JtYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fX2NhcHR1cmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX29uQ2xpY2tDYXB0dXJlQnV0dG9uKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdTZXJ2ZXIgT0NSIEVycm9yJztcbiAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnOiAnICsgZS5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoJ1FTMDAxJywgZSwgZXJyb3JNZXNzYWdlKTsgLy8gUVVSQU0gU2VydmVyIE9DUiDsl5Drn6xcbiAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEsIGltZ0RhdGFVUkwpIHtcbiAgICAvLyBzc2EgcmV0cnkg7ISk7KCV7J20IOuQmOyWtCDsnojsnLzqsbDrgpgsIOyImOuPmey0rOyYgVVJ66W8IOyCrOyaqe2VmOuKlCDqsr3smrAsIGNhcmQgZGV0ZWN0IOyEseqzteyLnCDsnbTrr7jsp4Ag7KCA7J6lXG4gICAgaWYgKHRoaXMuX19zc2FNb2RlICYmIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPiAwIHx8IHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSAmJiB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgIGxldCBsaW1pdFNhdmVJbWFnZUNvdW50ID0gTWF0aC5tYXgodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCwgdGhpcy5fX21hbnVhbE9DUk1heFJldHJ5Q291bnQpO1xuICAgICAgaWYgKHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5sZW5ndGggPT09IGxpbWl0U2F2ZUltYWdlQ291bnQpIHtcbiAgICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0aGlzLl9fZGVidWdNb2RlKSB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQuc2hpZnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5wdXNoKGltZ0RhdGEpO1xuICAgICAgaWYgKHRoaXMuX19kZWJ1Z01vZGUpIHtcbiAgICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlQmFzZTY0LnB1c2goaW1nRGF0YVVSTCk7XG4gICAgICAgIHZvaWQgMDsgLy8gc2hvdWxkIGJlIHJlbW92ZWRcbiAgICAgIH1cblxuICAgICAgdm9pZCAwOyAvLyBzaG91bGQgYmUgcmVtb3ZlZFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9fb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KSB7XG4gICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgIGlmIChyZXZpZXdfcmVzdWx0LnNzYV9tb2RlKSB7XG4gICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIHJlc3VsdF9jb2RlOiAnTjEwMCcsXG4gICAgICAgIHJlc3VsdF9tZXNzYWdlOiAnT0suJ1xuICAgICAgfSxcbiAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnLFxuICAgICAgcmV2aWV3X3Jlc3VsdDogcmV2aWV3X3Jlc3VsdFxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vblN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fb25GYWlsdXJlUHJvY2VzcyhyZXN1bHRDb2RlLCBlLCBlcnJvck1lc3NhZ2UpIHtcbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEKTtcbiAgICBsZXQgZXJyb3JEZXRhaWwgPSAnJztcbiAgICBpZiAoZT8udG9TdHJpbmcoKSkgZXJyb3JEZXRhaWwgKz0gZS50b1N0cmluZygpO1xuICAgIGlmIChlPy5zdGFjaykgZXJyb3JEZXRhaWwgKz0gZS5zdGFjaztcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgcmVzdWx0X2NvZGU6IHJlc3VsdENvZGUsXG4gICAgICAgIHJlc3VsdF9tZXNzYWdlOiBlcnJvck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6ICdmYWlsZWQnLFxuICAgICAgcmV2aWV3X3Jlc3VsdDoge1xuICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgIGVycm9yX2RldGFpbDogZXJyb3JEZXRhaWxcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0aGlzLl9fb25GYWlsdXJlKSB7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlKHJlc3VsdCk7XG4gICAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3ByZWxvYWRpbmdXYXNtKCkge1xuICAgIGNvbnN0IHByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKTtcbiAgICBpZiAoIXRoaXMuaXNQcmVsb2FkZWQoKSAmJiBwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICBhd2FpdCB0aGlzLnByZWxvYWRpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRCkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIGF3YWl0IHRoaXMuX193YWl0UHJlbG9hZGVkKCk7XG4gICAgICB9IGVsc2UgaWYgKHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORSkge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFibm9ybWFsbHkgcHJlbG9hZGluZyBzdGF0dXMsIHByZWxvYWRlZDogJHt0aGlzLmlzUHJlbG9hZGVkKCl9IC8gcHJlbG9hZGluZ1N0YXR1czogJHt0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBTVEFSVFxuICAvLyBfX3NldFBpaUVuY3J5cHRNb2RlKHBpaUVuY3J5cHRNb2RlKSB7XG4gIC8vICAgdGhpcy5fX09DUkVuZ2luZS5zZXRQaWlFbmNyeXB0KHBpaUVuY3J5cHRNb2RlKTtcbiAgLy8gfVxuICAvL1xuICAvLyBfX2VuY3J5cHREZXRlY3RlZEJhc2U2NChhZGRyZXNzLCBtYXNrLCBvY3JfbW9kZSwgaW1nVHlwZSA9ICdjYXJkJykge1xuICAvLyAgIGlmIChpbWdUeXBlID09PSAnZmFjZScpIHtcbiAgLy8gICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lLmVuY3J5cHRCYXNlNjRqcGdEZXRlY3RlZFBob3RvQmFzZTY0KGFkZHJlc3MpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZS5lbmNyeXB0QmFzZTY0anBnRGV0ZWN0ZWRGcmFtZUJhc2U2NChcbiAgLy8gICAgIGFkZHJlc3MsXG4gIC8vICAgICBtYXNrLFxuICAvLyAgICAgb2NyX21vZGVcbiAgLy8gICApO1xuICAvLyB9XG4gIC8vXG4gIC8vIF9fZ2V0RW5jcnlwdGVkU2l6ZSgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNyeXB0ZWRKcGdTaXplKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gX19nZXRFbmNyeXB0ZWRCdWZmZXIoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jcnlwdGVkSnBnQnVmZmVyKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gX19nZXRQaWlFbmNyeXB0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbWFzaywgaW1nTW9kZSwgaW1nVHlwZSA9ICdjYXJkJykge1xuICAvLyAgIGNvbnN0IGVuY3J5cHREZXRlY3RlZEJhc2U2NCA9IHRoaXMuX19lbmNyeXB0RGV0ZWN0ZWRCYXNlNjQoXG4gIC8vICAgICBhZGRyZXNzLFxuICAvLyAgICAgbWFzayxcbiAgLy8gICAgIGltZ01vZGUsXG4gIC8vICAgICBpbWdUeXBlXG4gIC8vICAgKTtcbiAgLy8gICBpZiAoZW5jcnlwdERldGVjdGVkQmFzZTY0ID09PSAxKSB7XG4gIC8vICAgICBjb25zdCBqcGdTaXplID0gdGhpcy5fX2dldEVuY3J5cHRlZFNpemUoKTtcbiAgLy8gICAgIGNvbnN0IGpwZ1BvaW50ZXIgPSB0aGlzLl9fZ2V0RW5jcnlwdGVkQnVmZmVyKCk7XG4gIC8vXG4gIC8vICAgICBjb25zdCBlbmNyeXB0ZWQgPSBuZXcgVWludDhBcnJheShcbiAgLy8gICAgICAgdGhpcy5fX09DUkVuZ2luZS5IRUFQOC5idWZmZXIsXG4gIC8vICAgICAgIGpwZ1BvaW50ZXIsXG4gIC8vICAgICAgIGpwZ1NpemVcbiAgLy8gICAgICk7XG4gIC8vICAgICBjb25zdCB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTtcbiAgLy8gICAgIGNvbnN0IGRlY29kZWRTdHJpbmcgPSB0ZXh0RGVjb2Rlci5kZWNvZGUoZW5jcnlwdGVkKTtcbiAgLy9cbiAgLy8gICAgIHJldHVybiBkZWNvZGVkU3RyaW5nO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gJyc7XG4gIC8vIH1cbiAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gRU5EXG5cbiAgYXN5bmMgX19zdGFydFNjYW5XYXNtKCkge1xuICAgIHRoaXMuX19kZWJ1Zygnd2FzbV9tb2RlJyk7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgYXdhaXQgdGhpcy5fX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2Nhbldhc21JbXBsKCk7XG4gICAgdm9pZCAwO1xuICB9XG4gIGFzeW5jIF9fc3RhcnRTY2FuU2VydmVyKCkge1xuICAgIHRoaXMuX19kZWJ1Zygnc2VydmVyX21vZGUnKTtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkgPSB0cnVlO1xuICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5TZXJ2ZXJJbXBsKCk7XG4gICAgdm9pZCAwO1xuICB9XG4gIGFzeW5jIF9fcmVjb3ZlcnlTY2FuKCkge1xuICAgIHZvaWQgMDtcbiAgICB0aGlzLl9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5XYXNtKCk7XG4gIH1cbiAgc3RvcFNjYW4oKSB7XG4gICAgdGhpcy5fX2RldGVjdGVkID0gdHJ1ZTsgLy8gc3dpdGNoIHRvIHNlcnZlcuydvOuVjCDquLDsobQgV0FTTSBsb29wIOqwleygnOyiheujjFxuICAgIGNvbnN0IHtcbiAgICAgIGNhbnZhc1xuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICAgIHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuICBzdG9wU3RyZWFtKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgaWYgKHRoaXMuX19zdHJlYW0pIHtcbiAgICAgIHRoaXMuX19zdHJlYW0uc3RvcCAmJiB0aGlzLl9fc3RyZWFtLnN0b3AoKTtcbiAgICAgIGxldCB0cmFja3MgPSB0aGlzLl9fc3RyZWFtLmdldFRyYWNrcyAmJiB0aGlzLl9fc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgdm9pZCAwO1xuICAgICAgaWYgKHRyYWNrcyAmJiB0cmFja3MubGVuZ3RoKSB7XG4gICAgICAgIHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc3RyZWFtID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiog66mU66qo66asIGFsbG9jYXRpb24gZnJlZSDtlajsiJggKi9cbiAgY2xlYW51cCgpIHtcbiAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJBZGRyZXNzKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lCdWZmZXIoKTtcbiAgICB0aGlzLl9fZGVzdHJveVByZXZJbWFnZSgpO1xuICAgIHRoaXMuX19kZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpO1xuICB9XG4gIF9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIGlmICh0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKTtcbiAgICAgIHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBk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
