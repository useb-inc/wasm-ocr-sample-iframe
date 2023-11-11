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
    _defineProperty(this, "__ocrType", void 0);
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
  isCreditCard() {
    return this.__ocrType === 'credit';
  }
  encryptResult(review_result) {
    if (this.isCreditCard()) {
      return;
    }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJ1c2ViT0NSV0FTTVBhcnNlciIsInVzZWJPQ1JBUElQYXJzZXIiLCJpc1N1cHBvcnRXYXNtIiwibWVhc3VyZSIsInNpbWQiLCJ0aHJlYWRzIiwiSW1hZ2VVdGlsIiwiaW5zdGFuY2UiLCJVc2VCT0NSIiwiY29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydHkiLCJOT05FIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVF9TVUNDRVNTIiwiQ0FSRF9ERVRFQ1RfRkFJTEVEIiwiTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUyIsIk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJXQVJQSU5HIiwiQ1JPUFBJTkciLCJGQUxTRSIsIlRSVUUiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZUVuY3J5cHRNb2RlIiwidXNlRW5jcnlwdEFsbE1vZGUiLCJ1c2VMZWdhY3lGb3JtYXQiLCJ1c2VNYXNrSW5mbyIsInVzZUZhY2VJbWFnZSIsInVzZUltYWdlV2FycGluZyIsInVzZUNvbXByZXNzSW1hZ2UiLCJ1c2VDb21wcmVzc0ltYWdlTWF4V2lkdGgiLCJ1c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lIiwidXNlVG9wVUkiLCJ1c2VUb3BVSVRleHRNc2ciLCJ1c2VNaWRkbGVVSSIsInVzZU1pZGRsZVVJVGV4dE1zZyIsInVzZUJvdHRvbVVJIiwidXNlQm90dG9tVUlUZXh0TXNnIiwidXNlUHJldmlld1VJIiwidXNlQ2FwdHVyZVVJIiwiZnJhbWVCb3JkZXJTdHlsZSIsIndpZHRoIiwicmFkaXVzIiwic3R5bGUiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9zdWNjZXNzIiwiZGV0ZWN0X2ZhaWxlZCIsIm1hbnVhbF9jYXB0dXJlX3N1Y2Nlc3MiLCJtYW51YWxfY2FwdHVyZV9mYWlsZWQiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9zdWNjZXNzIiwib2NyX3N1Y2Nlc3Nfd2l0aF9zc2EiLCJvY3JfZmFpbGVkIiwidXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UiLCJtYXNrRnJhbWVTdHlsZSIsImNsaXBfZnJhbWUiLCJiYXNlX2NvbG9yIiwidXNlQXV0b1N3aXRjaFRvU2VydmVyTW9kZSIsInVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZSIsInN3aXRjaFRvU2VydmVyVGhyZXNob2xkIiwidXNlRm9yY2VDb21wbGV0ZVVJIiwiY2FwdHVyZUJ1dHRvblN0eWxlIiwic3Ryb2tlX2NvbG9yIiwicmVzb3VyY2VCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJkZXZpY2VMYWJlbCIsInZpZGVvVGFyZ2V0SWQiLCJyb3RhdGlvbkRlZ3JlZSIsIm1pcnJvck1vZGUiLCJjYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWEiLCJjYWxjR3VpZGVCb3hDcml0ZXJpYSIsInNzYVJldHJ5VHlwZSIsInNzYVJldHJ5UGl2b3QiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRlZCIsIl9fcHJlbG9hZGluZ1N0YXR1cyIsIl9fbG9hZFJlc291cmNlcyIsIl9fcHJlbG9hZGVkIiwiaXNJbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZWQiLCJnZXRQcmVsb2FkaW5nU3RhdHVzIiwiaXNFbmNyeXB0TW9kZSIsIl9fb3B0aW9ucyIsImlzQ3JlZGl0Q2FyZCIsIl9fb2NyVHlwZSIsImVuY3J5cHRSZXN1bHQiLCJyZXZpZXdfcmVzdWx0IiwiX19pc1N1cHBvcnRXYXNtIiwiaW5jbHVkZUxpc3QiLCJlbmNyeXB0ZWQiLCJvY3JfcmVzdWx0IiwiXyIsInRvUGFpcnMiLCJwaWNrIiwicmVkdWNlIiwiYWNjIiwiX3JlZiIsImtleSIsInZhbHVlIiwiX19lbmNyeXB0U2NhblJlc3VsdCIsIm9jcl9vcmlnaW5faW1hZ2UiLCJfb2JqZWN0U3ByZWFkIiwiZXhjbHVkZUxpc3QiLCJvbWl0IiwiX3JlZjIiLCJvY3JfbWFza2luZ19pbWFnZSIsIm9jcl9mYWNlX2ltYWdlIiwiZ2V0T0NSRW5naW5lIiwiX19PQ1JFbmdpbmUiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJfX2xpY2Vuc2UiLCJtZXJnZWRPcHRpb25zIiwibWVyZ2UiLCJzZXRPcHRpb24iLCJfX3dpbmRvd0V2ZW50QmluZCIsIl9fZGV2aWNlSW5mbyIsImdldE9zVmVyc2lvbiIsImdldE9wdGlvbiIsImdldE9jclR5cGUiLCJ0eXBlIiwiX19vY3JUeXBlTnVtYmVyVG9TdHJpbmciLCJnZXQiLCJnZXRPY3JUeXBlTnVtYmVyIiwic3RyaW5nIiwiX19vY3JTdHJpbmdUb1R5cGVOdW1iZXIiLCJnZXRVSU9yaWVudGF0aW9uIiwiX191aU9yaWVudGF0aW9uIiwiZ2V0VmlkZW9PcmllbnRhdGlvbiIsIl9fdmlkZW9PcmllbnRhdGlvbiIsImNoZWNrU3dpdGNoVG9TZXJ2ZXJNb2RlIiwiX3RoaXMyIiwiX19pc1N3aXRjaFRvU2VydmVyTW9kZSIsImxhdGVuY3lQZXIxMDBtcyIsIm1lYXN1cmVSZXBvcnQiLCJfX2RlYnVnIiwic3RhcnRPQ1IiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJfYXJndW1lbnRzIiwiYXJndW1lbnRzIiwiX3RoaXMzIiwib25JblByb2dyZXNzQ2hhbmdlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX19zc2FNb2RlIiwiaW5kZXhPZiIsIl9fb25TdWNjZXNzIiwiX19vbkZhaWx1cmUiLCJfX29uSW5Qcm9ncmVzc0NoYW5nZSIsIl9fdG9wVUkiLCJnZXRPQ1JFbGVtZW50cyIsInRvcFVJIiwiX19taWRkbGVVSSIsIm1pZGRsZVVJIiwiX19ib3R0b21VSSIsImJvdHRvbVVJIiwiX19jaGFuZ2VTdGFnZSIsIl9fcHJlcHJvY2VzcyIsIl9fcHJlbG9hZGluZ1dhc20iLCJfX3N0YXJ0U2NhblNlcnZlciIsIl9fc3RhcnRTY2FuV2FzbSIsImUiLCJzdG9wT0NSIiwiY2xlYW51cCIsIl9fY2xvc2VDYW1lcmEiLCJzZXRJZ25vcmVDb21wbGV0ZSIsInZhbCIsImVuY3J5cHQiLCJwbGFpblN0ciIsInJlc3RhcnRPQ1IiLCJvY3JUeXBlIiwiX2FyZ3VtZW50czIiLCJfdGhpczQiLCJpc1N3aXRjaE1vZGUiLCJfX3dhaXRQcmVsb2FkZWQiLCJfdGhpczUiLCJ3YWl0aW5nUmV0cnlDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hlY2siLCJzZXRUaW1lb3V0IiwiY29udmVydFR5cGVUb051bWJlciIsIm9wdGlvbiIsImlzTmFOIiwicGFyc2VJbnQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiX19wYWdlRW5kIiwiaGFuZGxlUmVzaXplIiwiX3JlZjQiLCJfX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiYXBwbHkiLCJfX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIm1zZyIsIl9fc2xlZXAiLCJtcyIsIl9fYmxvYlRvQmFzZTY0IiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX19iYXNlNjR0b0Jsb2IiLCJiYXNlNjQiLCJieXRlU3RyaW5nIiwiYXRvYiIsInNwbGl0IiwibWltZVN0cmluZyIsImFiIiwiQXJyYXlCdWZmZXIiLCJpYSIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsIkJsb2IiLCJfX2NvbXByZXNlQmFzZTY0SW1hZ2UiLCJvcHRpb25zIiwiY29uc3RhbnROdW1iZXIiLCJfdGhpczYiLCJibG9iRmlsZSIsImNvbXByZXNzZWQiLCJjb21wcmVzc0ltYWdlIiwiY29tcHJlc3Npb25SYXRpbyIsIk1hdGgiLCJyb3VuZCIsInNpemUiLCJfX2dldFN0cmluZ09uV2FzbUhlYXAiLCJsZW5ndGhCeXRlcyIsImxlbmd0aEJ5dGVzVVRGOCIsIl9fc3RyaW5nT25XYXNtSGVhcCIsIl9tYWxsb2MiLCJzdHJpbmdUb1VURjgiLCJvY3JSZXN1bHQiLCJzdHJpbmdPbldhc21IZWFwIiwidG9TdHJpbmciLCJqc29uU3RyaW5nIiwiX2ZyZWUiLCJfX3NldFZpZGVvUmVzb2x1dGlvbiIsInZpZGVvRWxlbWVudCIsIl90aGlzNyIsImlzU3VwcG9ydGVkUmVzb2x1dGlvbiIsInJlc29sdXRpb25UZXh0IiwiX19jYW1TZXRDb21wbGV0ZSIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsInNyY09iamVjdCIsIl9fdmlkZW9XaWR0aCIsIl9fdmlkZW9IZWlnaHQiLCJfX2dldFNjYW5uZXJBZGRyZXNzIiwiX19vY3JUeXBlTGlzdCIsImluY2x1ZGVzIiwiYWRkcmVzcyIsImRlc3Ryb3lDYWxsYmFjayIsImdldElEQ2FyZFNjYW5uZXIiLCJkZXN0cm95SURDYXJkU2Nhbm5lciIsImdldFBhc3Nwb3J0U2Nhbm5lciIsImRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIiLCJnZXRBbGllblNjYW5uZXIiLCJkZXN0cm95QWxpZW5TY2FubmVyIiwiZ2V0Q3JlZGl0U2Nhbm5lciIsImRlc3Ryb3lDcmVkaXRTY2FubmVyIiwiX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9fcmV0cnlDb3VudEdldEFkZHJlc3MiLCJfX2dldEJ1ZmZlciIsIl9fQnVmZmVyIiwiX19yZXNvbHV0aW9uV2lkdGgiLCJfX3Jlc29sdXRpb25IZWlnaHQiLCJfX3Jlc3VsdEJ1ZmZlciIsIl9fbWFza0luZm9SZXN1bHRCdWYiLCJfX2dldEltYWdlQmFzZTY0IiwibWFza01vZGUiLCJpbWdNb2RlIiwiX2FyZ3VtZW50czMiLCJfdGhpczgiLCJpbWdUeXBlIiwiZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlIiwiZW5jb2RlSnBnRGV0ZWN0ZWRQaG90b0ltYWdlIiwianBnU2l6ZSIsImdldEVuY29kZWRKcGdTaXplIiwianBnUG9pbnRlciIsImdldEVuY29kZWRKcGdCdWZmZXIiLCJyZXN1bHRWaWV3IiwiSEVBUDgiLCJidWZmZXIiLCJkZXN0cm95RW5jb2RlZEpwZyIsIl9fZGVzdHJveUJ1ZmZlciIsIl9fZGVzdHJveVJlc3VsdEJ1ZmZlciIsIl9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyIiwiX19kZXN0cm95UHJldkltYWdlIiwiX19QcmV2SW1hZ2UiLCJfX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwIiwiX19kZXN0cm95U2Nhbm5lckFkZHJlc3MiLCJfX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2siLCJfX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSIsIl90aGlzOSIsIl9fZ2V0Um90YXRpb25EZWdyZWUiLCJfX2dldE1pcnJvck1vZGUiLCJfX2Nyb3BJbWFnZUZyb21WaWRlbyIsIl90aGlzMTAiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwiY2FudmFzIiwicm90YXRpb25DYW52YXMiLCJjYWxjQ2FudmFzIiwiY2FsY1ZpZGVvV2lkdGgiLCJjYWxjVmlkZW9IZWlnaHQiLCJjYWxjVmlkZW9DbGllbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCIsIl9fY3JvcEltYWdlU2l6ZVdpZHRoIiwiY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQiLCJfX2Nyb3BJbWFnZVNpemVIZWlnaHQiLCJjYWxjVmlkZW9PcmllbnRhdGlvbiIsIl9faXNSb3RhdGVkOTBvcjI3MCIsImNhbGNNYXhTV2lkdGgiLCJjYWxjTWF4U0hlaWdodCIsInN4Iiwic3kiLCJyYXRpbyIsInNXaWR0aCIsIm1pbiIsInNIZWlnaHQiLCJtYXgiLCJjYWxjQ29udGV4dCIsImdldENvbnRleHQiLCJ3aWxsUmVhZEZyZXF1ZW50bHkiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9fcm90YXRlIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsImhlaWdodCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9faXNDYXJkYm94RGV0ZWN0ZWQiLCJfYXJndW1lbnRzNCIsIl90aGlzMTEiLCJib3hUeXBlIiwicmV0cnlJbWciLCJzZXQiLCJkYXRhIiwia29yIiwiYWxpZW4iLCJwYXNzcG9ydCIsImRldGVjdF9pZGNhcmRfb3B0IiwiZGV0ZWN0X2lkY2FyZCIsIm1lc3NhZ2UiLCJfX3N0YXJ0UmVjb2duaXRpb24iLCJzc2FNb2RlIiwiaXNTZXRJZ25vcmVDb21wbGV0ZSIsIl90aGlzMTIiLCJyZXN1bHRCdWZmZXIiLCJyZWNvZ25pdGlvbiIsIl9yZWY3IiwiX29jclJlc3VsdCIsIl9vY3JSZXN1bHQyIiwic2NhbklEQ2FyZCIsInNjYW5QYXNzcG9ydCIsInNjYW5BbGllbiIsInNjYW5DcmVkaXQiLCJfX2NzdlRvT2JqZWN0IiwiY29tcGxldGUiLCJfX21hbnVhbE9DUlJldHJ5Q291bnQiLCJfX21hbnVhbE9DUk1heFJldHJ5Q291bnQiLCJxdWV1ZUlkeCIsIl9fZGV0ZWN0ZWRDYXJkUXVldWUiLCJfX2JsdXJDYXB0dXJlQnV0dG9uIiwiX19zZXRTdHlsZSIsImRpc3BsYXkiLCJfeCIsIm9jckltYWdlTW9kZSIsIk9DUl9JTUdfTU9ERSIsIm9yaWdpbkltYWdlIiwiT0NSX0lNR19NQVNLX01PREUiLCJtYXNrSW1hZ2UiLCJmYWNlSW1hZ2UiLCJfX3N0YXJ0VHJ1dGgiLCJyZWplY3QiLCJzY2FuVHJ1dGgiLCJzdHIiLCJwYWlycyIsIm9iaiIsInBhaXIiLCJfX2dldE1hc2tJbmZvIiwibWFza0luZm9SZXN1bHRCdWYiLCJnZXRNYXNrUmVjdCIsIl9fc3RhcnRUcnV0aFJldHJ5IiwiX3RoaXMxMyIsIl9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl90aGlzMTQiLCJfX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24iLCJfdGhpczE1IiwiaXNQYXNzcG9ydCIsIl9fc2V0dXBWaWRlbyIsIl9fc3RyZWFtIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicGxheSIsIl9fYWRqdXN0U3R5bGUiLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIm5hbWUiLCJlcnJvck1lc3NhZ2UiLCJfX29uRmFpbHVyZVByb2Nlc3MiLCJzdG9wU3RyZWFtIiwiZWwiLCJhc3NpZ24iLCJfX2NoYW5nZU9DUlN0YXR1cyIsIl9fb2NyU3RhdHVzIiwiX2FyZ3VtZW50czUiLCJfdGhpczE2IiwiZm9yY2VVcGRhdGUiLCJyZWNvZ25pemVkSW1hZ2UiLCJfX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAiLCJfX2luUHJvZ3Jlc3NTdGVwIiwiZ3VpZGVCb3giLCJtYXNrQm94V3JhcCIsImNhcHR1cmVCdXR0b24iLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJfbWFza0JveFdyYXAkcXVlcnlTZWwiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiX2NhcHR1cmVCdXR0b24kcXVlcnlTIiwib2NyTW9kZSIsImNhbGwiLCJfX3VwZGF0ZVByZXZpZXdVSSIsIl9faGlkZVByZXZpZXdVSSIsInByZXZpZXdVSVdyYXAiLCJwcmV2aWV3SW1hZ2UiLCJpbWdTdHlsZSIsImNvbnRleHQiLCJfX2dldElucHV0RGV2aWNlcyIsIl90aGlzMTciLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsImNhbWVyYSIsImRldmljZSIsImtpbmQiLCJnZXRDYXBhYmlsaXRpZXMiLCJfY2FwJGZhY2luZ01vZGUiLCJjYXAiLCJmYWNpbmdNb2RlIiwiX19mYWNpbmdNb2RlQ29uc3RyYWludCIsInB1c2giLCJkZXZpY2VJZCIsImNoZWNrVUlPcmllbnRhdGlvbiIsImN1cnJlbnQiLCJvY3IiLCJpc0NoYW5nZWQiLCJfX3ByZXZVaU9yaWVudGF0aW9uIiwiX19jbGVhckN1c3RvbVVJIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiX19zZXR1cERvbUVsZW1lbnRzIiwiX3RoaXMxOCIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiY3VzdG9tVUlXcmFwIiwiY2FwdHVyZVVJV3JhcCIsImNhcHR1cmVVSSIsInByZXZpZXdVSSIsInN3aXRjaFVJV3JhcCIsInN3aXRjaFVJIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJtYXJnaW4iLCJvdmVyZmxvdyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwibWFza19mcmFtZSIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJ0cmFuc2Zvcm0iLCJjYW52YXNTdHlsZSIsImxlZnQiLCJ0b3AiLCJib3JkZXIiLCJyaWdodCIsImJvdHRvbSIsImN1c3RvbVVJV3JhcFN0eWxlIiwiY2FwdHVyZVVJV3JhcFN0eWxlIiwiY3Vyc29yIiwiY2FwdHVyZUJ1dHRvblNyY1NWRyIsIl9fb25DbGlja0NhcHR1cmVCdXR0b24iLCJwcmV2aWV3VUlXcmFwU3R5bGUiLCJzd2l0Y2hVSVdyYXBTdHlsZSIsInN3aXRjaEhUTUwiLCJzd2l0Y2hDaGVja2JveCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX19vbkNsaWNrU3dpdGNoVUkiLCJfcmVmMTAiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJfeDIiLCJvbmNlIiwiX19pbml0U3R5bGUiLCJfX29jciIsIl9fY2FudmFzIiwiX19yb3RhdGlvbkNhbnZhcyIsIl9fdmlkZW8iLCJfX3ZpZGVvV3JhcCIsIl9fZ3VpZGVCb3giLCJfX2d1aWRlQm94V3JhcCIsIl9fbWFza0JveFdyYXAiLCJfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiX19jdXN0b21VSVdyYXAiLCJfX2NhcHR1cmVVSVdyYXAiLCJfX2NhcHR1cmVVSSIsIl9fY2FwdHVyZUJ1dHRvbiIsIl9fcHJldmlld1VJV3JhcCIsIl9fcHJldmlld1VJIiwiX19wcmV2aWV3SW1hZ2UiLCJfX3N3aXRjaFVJV3JhcCIsIl9fc3dpdGNoVUkiLCJfX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJfdGhpczE5IiwiY29uc3RyYWludFdpZHRoIiwiY29uc3RyYWludEhlaWdodCIsImlkZWFsIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInpvb20iLCJmb2N1c01vZGUiLCJ3aGl0ZUJhbGFuY2VNb2RlIiwiZ2V0VXNlck1lZGlhIiwic3RyZWFtIiwic3RyZWFtU2V0dGluZ3MiLCJnZXRWaWRlb1RyYWNrcyIsImdldFNldHRpbmdzIiwiY29uY2F0IiwiYXNwZWN0UmF0aW8iLCJfdGhpczIwIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwiX19ndWlkZUJveFJhdGlvQnlXaWR0aCIsInZpZGVvUmF0aW9CeUhlaWdodCIsIl9fdmlkZW9SYXRpb0J5SGVpZ2h0IiwicmVkdWNlZEd1aWRlQm94V2lkdGgiLCJfX2d1aWRlQm94UmVkdWNlUmF0aW8iLCJyZWR1Y2VkR3VpZGVCb3hIZWlnaHQiLCJwYWRkaW5nIiwidmlkZW9Jbm5lckdhcCIsImJhY2tncm91bmRDb2xvciIsIm1hc2tCb3hJbm5lciIsInIiLCJtYXNrQm94SW5uZXJXaWR0aCIsIm1hc2tCb3hJbm5lckhlaWdodCIsIl90aGlzMjEiLCJfX2NhbGNHdWlkZUJveENyaXRlcmlhIiwiYSIsImIiLCJuZXdWaWRlb1dpZHRoIiwibmV3VmlkZW9IZWlnaHQiLCJuZXdWaWRlb1JhdGlvQnlXaWR0aCIsIm5ld1ZpZGVvUmF0aW9CeUhlaWdodCIsImNhbGNTdW1PZkhlaWdodEJvdHRvbVVJQ2hpbGROb2RlcyIsIl9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2RlcyIsImNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0IiwiY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJiYXNlbGluZSIsInN1bSIsIml0ZW0iLCJjaGlsZE5vZGVzIiwic3RvcFNjYW4iLCJfdGhpczIyIiwiX19yZXNvdXJjZXNMb2FkZWQiLCJfX2lzU3VwcG9ydFNpbWQiLCJlbnZJbmZvIiwib3MiLCJvc1NpbXBsZSIsInVzZWJPQ1JFbnZJbmZvIiwic2RrU3VwcG9ydEVudiIsInVybCIsImZldGNoIiwiaHJlZiIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwicmVnZXgiLCJzb3VyY2UiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZXZhbCIsIm9uUnVudGltZUluaXRpYWxpemVkIiwiX3JlZjExIiwiX3gzIiwiX19zdGFydFNjYW5XYXNtSW1wbCIsIl90aGlzMjMiLCJfX2RldGVjdGVkIiwiX19hZGRyZXNzIiwiX19zc2FSZXRyeUNvdW50Iiwic2NhbiIsIl9yZWYxMiIsImlzRGV0ZWN0ZWRDYXJkIiwic3NhUmVzdWx0Iiwic3NhUmVzdWx0TGlzdCIsIm1hc2tJbmZvIiwicmVzb2x1dGlvbl93IiwicmVzb2x1dGlvbl9oIiwiX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUiLCJyZXRyeVN0YXJ0RGF0ZSIsIkRhdGUiLCJGQUtFIiwiUkVBTCIsIkVOU0VNQkxFIiwiaXNDb21wbGV0ZWQiLCJfbG9vcCIsImV4ZWN1dGUiLCJfcmVmMTMiLCJfcmV0IiwicmV0cnlXb3JraW5nVGltZSIsImxlZ2FjeUZvcm1hdCIsIm5ld0Zvcm1hdCIsInBhcnNlT2NyUmVzdWx0Iiwib2NyX3R5cGUiLCJzc2FfbW9kZSIsIl9fY29tcHJlc3NJbWFnZXMiLCJvY3JfZGF0YSIsIl9fb25TdWNjZXNzUHJvY2VzcyIsIl9fcmVjb3ZlcmVkIiwiX3RoaXMyNCIsInJlc2l6ZVJhdGlvIiwiZGVmYXVsdE9wdGlvbnMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNvbnZlcnRTaXplIiwidGFyZ2V0Q29tcHJlc3NWb2x1bWUiLCJtYXNraW5nSW1hZ2VPcHRpb25zIiwicXVhbGl0eSIsIl9fcmVxdWVzdEdldEFQSVRva2VuIiwiY3JlZGVudGlhbCIsImF1dGhTZXJ2ZXJJbmZvIiwiYmFzZVVybCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwianNvbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJjYXRjaCIsImVyciIsIl9fcmVxdWVzdFNlcnZlck9DUiIsIl90aGlzMjUiLCJfcmVmMTQiLCJvY3JTZXJ2ZXJCYXNlVXJsIiwiYXBpVG9rZW4iLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwiaW1hZ2VfYmFzZTY0IiwibWFza19tb2RlIiwiZmFjZV9tb2RlIiwicmVxdWVzdE9wdGlvbnMiLCJyZWRpcmVjdCIsIl94NCIsIl94NSIsIl9fc3RhcnRTY2FuU2VydmVySW1wbCIsIl90aGlzMjYiLCJfcmVmMTUiLCJfcmVmMTYiLCJiYXNlNjRJbWFnZVJlc3VsdCIsIl94NiIsIl94NyIsImltZ0RhdGFVUkwiLCJsaW1pdFNhdmVJbWFnZUNvdW50Iiwic2hpZnQiLCJfX2RlYnVnTW9kZSIsIl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQiLCJfdGhpczI3IiwiYXBpX3Jlc3BvbnNlIiwicmVzdWx0X2NvZGUiLCJyZXN1bHRfbWVzc2FnZSIsInJlc3VsdENvZGUiLCJfdGhpczI4IiwiZXJyb3JEZXRhaWwiLCJzdGFjayIsImVycm9yX2RldGFpbCIsIl90aGlzMjkiLCJwcmVsb2FkaW5nU3RhdHVzIiwiX3RoaXMzMCIsIl90aGlzMzEiLCJfX3JlY292ZXJ5U2NhbiIsIl90aGlzMzIiLCJjYW52YXNDb250ZXh0IiwiY2xlYXJSZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VzIjpbIm9jci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogZ2xvYmFsLW1vZHVsZSAqL1xuaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgdXNlYk9DUldBU01QYXJzZXIgZnJvbSAnLi9oZWxwZXJzL3VzZWItb2NyLXdhc20tcGFyc2VyLmpzJztcbmltcG9ydCB1c2ViT0NSQVBJUGFyc2VyIGZyb20gJy4vaGVscGVycy91c2ViLW9jci1hcGktcGFyc2VyLmpzJztcbmltcG9ydCB7IGlzU3VwcG9ydFdhc20sIG1lYXN1cmUsIHNpbWQsIHRocmVhZHMgfSBmcm9tICcuL2hlbHBlcnMvd2FzbS1mZWF0dXJlLWRldGVjdC5qcyc7XG5pbXBvcnQgSW1hZ2VVdGlsIGZyb20gJy4vaGVscGVycy9pbWFnZS11dGlsLmpzJztcbmxldCBpbnN0YW5jZTtcbmNsYXNzIFVzZUJPQ1Ige1xuICBJTl9QUk9HUkVTUyA9IHtcbiAgICBOT05FOiAnbm9uZScsXG4gICAgTk9UX1JFQURZOiAnbm90X3JlYWR5JyxcbiAgICBSRUFEWTogJ3JlYWR5JyxcbiAgICBDQVJEX0RFVEVDVF9TVUNDRVNTOiAnZGV0ZWN0X3N1Y2Nlc3MnLFxuICAgIENBUkRfREVURUNUX0ZBSUxFRDogJ2RldGVjdF9mYWlsZWQnLFxuICAgIE1BTlVBTF9DQVBUVVJFX1NVQ0NFU1M6ICdtYW51YWxfY2FwdHVyZV9zdWNjZXNzJyxcbiAgICBNQU5VQUxfQ0FQVFVSRV9GQUlMRUQ6ICdtYW51YWxfY2FwdHVyZV9mYWlsZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEOiAncmVjb2duaXplZCcsXG4gICAgT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6ICdyZWNvZ25pemVkX3dpdGhfc3NhJyxcbiAgICBPQ1JfU1VDQ0VTUzogJ29jcl9zdWNjZXNzJyxcbiAgICBPQ1JfU1VDQ0VTU19XSVRIX1NTQTogJ29jcl9zdWNjZXNzX3dpdGhfc3NhJyxcbiAgICBPQ1JfRkFJTEVEOiAnb2NyX2ZhaWxlZCdcbiAgfTtcbiAgT0NSX1NUQVRVUyA9IHtcbiAgICBOT1RfUkVBRFk6IC0xLFxuICAgIFJFQURZOiAwLFxuICAgIE9DUl9TVUNDRVNTOiAxLFxuICAgIERPTkU6IDJcbiAgfTtcbiAgUFJFTE9BRElOR19TVEFUVVMgPSB7XG4gICAgTk9UX1NUQVJURUQ6IC0xLFxuICAgIFNUQVJURUQ6IDAsXG4gICAgRE9ORTogMVxuICB9O1xuICBPQ1JfSU1HX01PREUgPSB7XG4gICAgV0FSUElORzogMCxcbiAgICBDUk9QUElORzogMSxcbiAgICBOT05FOiAyXG4gIH07XG4gIE9DUl9JTUdfTUFTS19NT0RFID0ge1xuICAgIEZBTFNFOiAwLFxuICAgIFRSVUU6IDFcbiAgfTtcblxuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cblxuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIF9fZGVidWdNb2RlID0gZmFsc2U7XG4gIF9fT0NSRW5naW5lID0gbnVsbDtcbiAgX19pc1N1cHBvcnRXYXNtID0gZmFsc2U7XG4gIF9faXNTdXBwb3J0U2ltZCA9IGZhbHNlO1xuICBfX2luaXRpYWxpemVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQ7XG4gIF9fbGljZW5zZTtcbiAgX19vY3JUeXBlO1xuICBfX3NzYU1vZGUgPSBmYWxzZTtcbiAgX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuTk9UX1JFQURZO1xuICBfX21hbnVhbE9DUk1heFJldHJ5Q291bnQgPSAxMDtcbiAgX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgX19zc2FSZXRyeUNvdW50ID0gMDtcbiAgX19kZXRlY3RlZENhcmRRdWV1ZSA9IFtdO1xuICBfX2RldGVjdGVkQ2FyZFF1ZXVlQmFzZTY0ID0gW107XG4gIF9fb25TdWNjZXNzID0gbnVsbDtcbiAgX19vbkZhaWx1cmUgPSBudWxsO1xuICBfX29uSW5Qcm9ncmVzc0NoYW5nZSA9IG51bGw7XG4gIF9fb2NyVHlwZUxpc3QgPSBbJ2lkY2FyZCcsICdkcml2ZXInLCAncGFzc3BvcnQnLCAnZm9yZWlnbi1wYXNzcG9ydCcsICdhbGllbicsICdjcmVkaXQnLCAnaWRjYXJkLXNzYScsICdkcml2ZXItc3NhJywgJ3Bhc3Nwb3J0LXNzYScsICdmb3JlaWduLXBhc3Nwb3J0LXNzYScsICdhbGllbi1zc2EnXTtcbiAgX19vY3JUeXBlTnVtYmVyVG9TdHJpbmcgPSBuZXcgTWFwKFtbJzEnLCAnaWRjYXJkJ10sIFsnMicsICdkcml2ZXInXSwgWyczJywgJ3Bhc3Nwb3J0J10sIFsnNCcsICdmb3JlaWduLXBhc3Nwb3J0J10sIFsnNScsICdhbGllbiddLCBbJzUtMScsICdhbGllbiddLCBbJzUtMicsICdhbGllbiddLCBbJzUtMycsICdhbGllbiddXSk7XG4gIF9fb2NyU3RyaW5nVG9UeXBlTnVtYmVyID0gbmV3IE1hcChbWydpZGNhcmQnLCAnMSddLCBbJ2RyaXZlcicsICcyJ10sIFsncGFzc3BvcnQnLCAnMyddLCBbJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnNCddLCBbJ2FsaWVuJywgJzUnXSwgWydhbGllbicsICc1LTEnXSwgWydhbGllbicsICc1LTInXSwgWydhbGllbicsICc1LTMnXV0pO1xuICBfX3BhZ2VFbmQgPSBmYWxzZTtcbiAgX19vY3I7XG4gIF9fY2FudmFzO1xuICBfX3JvdGF0aW9uQ2FudmFzO1xuICBfX3ZpZGVvO1xuICBfX3ZpZGVvV3JhcDtcbiAgX19ndWlkZUJveDtcbiAgX19ndWlkZUJveFdyYXA7XG4gIF9fbWFza0JveFdyYXA7XG4gIF9fcHJldmVudFRvRnJlZXplVmlkZW87XG4gIF9fY3VzdG9tVUlXcmFwO1xuICBfX3RvcFVJO1xuICBfX21pZGRsZVVJO1xuICBfX2JvdHRvbVVJO1xuICBfX3ByZXZpZXdVSVdyYXA7XG4gIF9fcHJldmlld1VJO1xuICBfX3ByZXZpZXdJbWFnZTtcbiAgX19jYXB0dXJlVUlXcmFwO1xuICBfX2NhcHR1cmVVSTtcbiAgX19zd2l0Y2hVSVdyYXA7XG4gIF9fc3dpdGNoVUk7XG4gIF9fY2FwdHVyZUJ1dHRvbjtcbiAgX19hZGRyZXNzID0gMDtcbiAgX19kZXRlY3RlZCA9IGZhbHNlO1xuICBfX3JlY292ZXJlZCA9IGZhbHNlO1xuICBfX0J1ZmZlciA9IG51bGw7XG4gIF9fcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgX19tYXNrSW5mb1Jlc3VsdEJ1ZiA9IG51bGw7XG4gIF9fUHJldkltYWdlID0gbnVsbDtcbiAgX19zdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgX19jYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICBfX3Jlc29sdXRpb25XaWR0aCA9IDA7XG4gIF9fcmVzb2x1dGlvbkhlaWdodCA9IDA7XG4gIF9fdmlkZW9XaWR0aCA9IDA7XG4gIF9fdmlkZW9IZWlnaHQgPSAwO1xuICBfX3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICBfX2ludGVydmFsVGltZXI7XG4gIF9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjtcbiAgX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZDtcbiAgX19zdHJlYW07XG4gIF9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gIF9fZmFjaW5nTW9kZUNvbnN0cmFpbnQgPSAnZW52aXJvbm1lbnQnO1xuICBfX3VpT3JpZW50YXRpb24gPSAnJztcbiAgX19wcmV2VWlPcmllbnRhdGlvbiA9ICcnO1xuICBfX3ZpZGVvT3JpZW50YXRpb24gPSAnJztcbiAgX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICBfX3Rocm90dGxpbmdSZXNpemVEZWxheSA9IDUwMDtcbiAgX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9IDMwMDsgLy8g7J6E7IucXG4gIF9fcmV0cnlDb3VudEdldEFkZHJlc3MgPSAwOyAvLyDsnoTsi5xcbiAgX19kZXZpY2VJbmZvO1xuICBfX2lzUm90YXRlZDkwb3IyNzAgPSBmYWxzZTtcbiAgX19pblByb2dyZXNzU3RlcCA9IHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZO1xuICBfX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PTkU7XG4gIF9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gIF9fZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSAxLjA7IC8vIOyImOygleu2iOqwgFxuICBfX3ZpZGVvUmF0aW9CeUhlaWdodCA9IDAuOTsgLy8g7IiY7KCV67aI6rCAXG4gIF9fZ3VpZGVCb3hSZWR1Y2VSYXRpbyA9IDAuODsgLy8g7IiY7KCV67aI6rCAXG4gIF9fY3JvcEltYWdlU2l6ZVdpZHRoID0gMDtcbiAgX19jcm9wSW1hZ2VTaXplSGVpZ2h0ID0gMDtcbiAgX19pc1N3aXRjaFRvU2VydmVyTW9kZSA9IGZhbHNlO1xuXG4gIC8qKiBEZWZhdWx0IG9wdGlvbnMgKi9cbiAgX19vcHRpb25zID0gbmV3IE9iamVjdCh7XG4gICAgLy8g65SU67KE6rmFIOyYteyFmFxuICAgIHNob3dDbGlwRnJhbWU6IGZhbHNlLFxuICAgIC8vIGNpbHAtZnJhbWUg67O06riwXG4gICAgc2hvd0NhbnZhc1ByZXZpZXc6IGZhbHNlLFxuICAgIC8vIGNhbnZhcyBwcmV2aWV3IOuztOq4sFxuXG4gICAgLy8g7Lac66ClIOyYteyFmFxuICAgIC8vIOyVlO2YuO2ZlFxuICAgIHVzZUVuY3J5cHRNb2RlOiBmYWxzZSxcbiAgICAvLyDslZTtmLjtmZQg7KCB7JqpICjqsJzsnbjqs6DsnKDsi53rs4TrtoDtmLgg6rSA66CoIO2VreuqqSDslZTtmLjtmZQpXG4gICAgdXNlRW5jcnlwdEFsbE1vZGU6IGZhbHNlLFxuICAgIC8vIOyVlO2YuO2ZlCDsoIHsmqkgKOyghOyytCDslZTtmLjtmZQsIGVuY3J5cHQgb2JqZWN0IOuzhOuPhCDsoJzqs7UpXG4gICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gU1RBUlRcbiAgICAvLyB1c2VQaWlFbmNyeXB0TW9kZTogZmFsc2UsIC8vIOyVlO2YuO2ZlCDsoIHsmqkgKHBpaSlcbiAgICAvLyB1c2VQaWlFbmNyeXB0RmFjZTogZmFsc2UsIC8vIOyLoOu2hOymnSDslrzqtbTsgqzsp4Qg7JWU7Zi47ZmUIOyggeyaqSAocGlpKVxuICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIEVORFxuICAgIHVzZUxlZ2FjeUZvcm1hdDogZmFsc2UsXG4gICAgLy8gTGVnYWN5IGZvcm1hdCDsp4Dsm5BcbiAgICB1c2VNYXNrSW5mbzogdHJ1ZSxcbiAgICAvLyDrp4jsiqTtgrkg7KKM7ZGcIOyngOybkFxuICAgIHVzZUZhY2VJbWFnZTogdHJ1ZSxcbiAgICAvLyDsi6DrtoTspp0g64K0IOyWvOq1tCDsgqzsp4RcbiAgICB1c2VJbWFnZVdhcnBpbmc6IGZhbHNlLFxuICAgIC8vIOyLoOu2hOymnSDsnbTrr7jsp4DrpbwgV2FycGluZyjsmZzqs6Eg67O07KCVIO2VoOyngCDsl6zrtoApXG4gICAgdXNlQ29tcHJlc3NJbWFnZTogZmFsc2UsXG4gICAgLy8g7Iug67aE7KadIOydtOuvuOyngOulvCDslZXstpXtlaDsp4Ag7Jes67aAXG4gICAgdXNlQ29tcHJlc3NJbWFnZU1heFdpZHRoOiAxMDgwLFxuICAgIC8vIOydtOuvuOyngCDrpqzsgqzsnbTsp5Ug6rCA66GcIO2VtOyDgeuPhFxuICAgIHVzZUNvbXByZXNzSW1hZ2VNYXhWb2x1bWU6IDEwMjQgKiA1MCxcbiAgICAvLyDsnbTrr7jsp4Ag7JWV7LaVIOuqqe2RnCDsmqnrn4lcblxuICAgIC8vIFVJIOyEpOyglVxuICAgIHVzZVRvcFVJOiB0cnVlLFxuICAgIC8vIOyDgeuLqCBVSVxuICAgIHVzZVRvcFVJVGV4dE1zZzogZmFsc2UsXG4gICAgLy/sg4Hri6ggVUkgPiBURVhUXG4gICAgdXNlTWlkZGxlVUk6IHRydWUsXG4gICAgLy/spJHri6ggVUlcbiAgICB1c2VNaWRkbGVVSVRleHRNc2c6IHRydWUsXG4gICAgLy8g7KSR64uoIFVJID4gVEVYVFxuICAgIHVzZUJvdHRvbVVJOiB0cnVlLFxuICAgIC8vIO2VmOuLqCBVSVxuICAgIHVzZUJvdHRvbVVJVGV4dE1zZzogZmFsc2UsXG4gICAgLy8g7ZWY64uoIFVJID4gVEVYVFxuICAgIHVzZVByZXZpZXdVSTogdHJ1ZSxcbiAgICAvLyBQcmV2aWV3IFVJXG4gICAgdXNlQ2FwdHVyZVVJOiB0cnVlLFxuICAgIC8vIOy6oeyymOuyhO2KvCBVSVxuXG4gICAgLy8g7J247IudIO2UhOugiOyehCDsmLXshZhcbiAgICBmcmFtZUJvcmRlclN0eWxlOiB7XG4gICAgICB3aWR0aDogNSxcbiAgICAgIC8vIGJvcmRlci13aWR0aFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIC8vIGJvcmRlci1yYWRpdXNcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgLy8gYm9yZGVyLXN0eWxlXG5cbiAgICAgIC8vIOuLqOqzhOuzhCDsnbjsi50g7ZSE66CI7J6EIGJvcmRlciDsg4nsg4FcbiAgICAgIG5vdF9yZWFkeTogJyMwMDAwMDAnLFxuICAgICAgLy8g7Iqk7LqU7KSA67mEIDog6rKA7KCVXG4gICAgICByZWFkeTogJyNiOGI4YjgnLFxuICAgICAgLy8g7Iqk7LqU64yA6riwIDog7ZqM7IOJXG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyEseqztSA6IO2VmOuKmFxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g7Lm065Oc6rKA7LacIOyLpO2MqCA6IOuztOudvFxuICAgICAgbWFudWFsX2NhcHR1cmVfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyEseqztSA6IO2VmOuKmFxuICAgICAgbWFudWFsX2NhcHR1cmVfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7Iuk7YyoIDog67O06528XG4gICAgICByZWNvZ25pemVkOiAnIzAwM2FjMicsXG4gICAgICAvLyBPQ1LsmYTro4wgOiDtjIzrnpFcbiAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6ICcjMDAzYWMyJyxcbiAgICAgIC8vIOyCrOuzuO2MkOuzhOykkSjsgqzrs7jtjJDrs4QgT04pIDog7YyM656RXG4gICAgICBvY3Jfc3VjY2VzczogJyMxNGIwMGUnLFxuICAgICAgLy8gT0NS7JmE66OMIDog7LSI66GdXG4gICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogJyMxNGIwMGUnLFxuICAgICAgLy8gT0NS7JmE66OMKOyCrOuzuO2MkOuzhCBPTikgOiDstIjroZ1cbiAgICAgIG9jcl9mYWlsZWQ6ICcjRkExMTNEJyAvLyBPQ1Lsi6TtjKggOiDruajqsJVcbiAgICB9LFxuXG4gICAgLy8g66eI7Iqk7YGsIO2UhOugiOyehCBmaWxsIOy7rOufrCDrs4Dqsr0g7IKs7JqpIOyXrOu2gFxuICAgIHVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlOiB0cnVlLFxuICAgIC8vIOuniOyKpO2BrCDtlITroIjsnoQg7Ji17IWYICjsubTrqZTrnbwg67mE65SU7JikIOyYgeyXreyXkOyEnCDsnbjsi50g7ZSE66CI7J6E66eMIOuztOydtOqyjCDtlZjqs6Ag64KY66i47KeA66W8IOuNruyWtOyTsOuKlCDtlITroIjsnoQg7JiB7JetKVxuICAgIG1hc2tGcmFtZVN0eWxlOiB7XG4gICAgICBjbGlwX2ZyYW1lOiAnI2ZmMDBiZicsXG4gICAgICAvLyBjbGlwLWZyYW1lIOyDieyDgSA6IOuUpe2NvO2UjCAo7IiY7KCV67aI6rCAKVxuICAgICAgYmFzZV9jb2xvcjogJyMzMzMzMzMnLFxuICAgICAgLy8gbWFzay1mcmFtZSDsg4nsg4EgOiDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuXG4gICAgICAvLyDri6jqs4Trs4Qg66eI7Iqk7YGsIO2UhOugiOyehCBmaWxsIOyDieyDgVxuICAgICAgbm90X3JlYWR5OiAnIzMzMzMzMycsXG4gICAgICAvLyDsiqTsupTspIDruYRcbiAgICAgIHJlYWR5OiAnIzMzMzMzMycsXG4gICAgICAvLyDsiqTsupTrjIDquLBcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICAvLyDsubTrk5zqsoDstpwg7ISx6rO1XG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzMzMzMzMycsXG4gICAgICAvLyDsubTrk5zqsoDstpwg7Iuk7YyoXG4gICAgICBtYW51YWxfY2FwdHVyZV9zdWNjZXNzOiAnIzIyMjIyMicsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7ISx6rO1XG4gICAgICBtYW51YWxfY2FwdHVyZV9mYWlsZWQ6ICcjMzMzMzMzJyxcbiAgICAgIC8vIOyImOuPmey0rOyYgSDsi6TtjKhcbiAgICAgIHJlY29nbml6ZWQ6ICcjMjIyMjIyJyxcbiAgICAgIC8vIE9DUuyZhOujjFxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMyMjIyMjInLFxuICAgICAgLy8g7IKs67O47YyQ67OE7KSRKOyCrOuzuO2MkOuzhCBPTilcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzExMTExMScsXG4gICAgICAvL09DUuyZhOujjFxuICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6ICcjMTExMTExJyxcbiAgICAgIC8vIE9DUuyZhOujjCjsgqzrs7jtjJDrs4QgT04pXG4gICAgICBvY3JfZmFpbGVkOiAnIzExMTExMScgLy8gT0NS7Iuk7YyoXG4gICAgfSxcblxuICAgIC8vIOy0rOyYgeyYteyFmFxuICAgIHVzZUF1dG9Td2l0Y2hUb1NlcnZlck1vZGU6IGZhbHNlLFxuICAgIC8vIOyggOyCrOyWkSDri6jrp5Dsl5DshJwg7ISc67KET0NS66GcIOyekOuPmSDsoITtmZgg6riw64qlXG4gICAgdXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlOiBmYWxzZSxcbiAgICAvLyDsiJjrj5nsnLzroZwg7ISc67KET0NSIOyghO2ZmCDquLDriqUgKOyImOuPmeydtCB0cnVl7J2066m0IOyekOuPmeydgCDrrLTsi5zrkKgpXG4gICAgc3dpdGNoVG9TZXJ2ZXJUaHJlc2hvbGQ6IDIwLjAsXG4gICAgLy8g7J6Q64+Z7KCE7ZmYIOq4sOykgOqwkiAo7ISx64qlIOy4oeygley5mCBtcylcbiAgICB1c2VGb3JjZUNvbXBsZXRlVUk6IGZhbHNlLFxuICAgIC8vIFdBU00g66qo65Oc7J2865WMIOuyhO2KvCDriITrpbzsi5wg7ZW064u5IOyLnOygkOyXkCDqsJXsoJzroZwg7JmE66OMIOyCrOyaqeyXrOu2gFxuXG4gICAgLy8g7IiY64+Z7LSs7JiBIOuyhO2KvCDsmLXshZhcbiAgICBjYXB0dXJlQnV0dG9uU3R5bGU6IHtcbiAgICAgIHN0cm9rZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgLy8g67KE7Yq8IO2FjOuRkOumrChzdHJva2UpIOyDieyDgVxuICAgICAgYmFzZV9jb2xvcjogJyM1ZThmZmYnIC8vIOuyhO2KvCDsg4nsg4FcbiAgICB9LFxuXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgIC8vIHdhc20sIGRhdGEg7YyM7J28IOumrOyGjOyKpCBiYXNlIOqyveuhnCAoQ0ROIOyCrOyaqeyLnCDrs4Dqsr0pXG4gICAgZGV2aWNlTGFiZWw6ICcnLFxuICAgIHZpZGVvVGFyZ2V0SWQ6ICcnLFxuICAgIC8vIOy5tOuplOudvCDshKTsoJVcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICAvLyByb3RhdGlvbi1kZWdyZWUg7Lm066mU65286rCAIO2ajOyghOuQnCDqsIHrj4QgKDkwLCAxOTAsIDI3MClcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgICAvLyBtaXJyb3ItbW9kZSDshYDtlLwg7Lm066mU6528KO2CpOyYpOyKpO2BrCDrk7EpIOyCrOyaqeyLnCDsoozsmrAg67CY7KCEXG5cbiAgICAvLyDsubTrqZTrnbwg7ZW07IOB64+EIOyEpOyglSAgOiAnY29tcGF0aWJpbGl0eScgKO2YuO2ZmOyEsSDsmrDshKApIHx8ICdoaWdoUXVhbGl0eScgKOqzoO2ZlOyniCDsmrDshKApXG4gICAgY2FtZXJhUmVzb2x1dGlvbkNyaXRlcmlhOiAnY29tcGF0aWJpbGl0eScsXG4gICAgLy8g7Zi47ZmY7ISxIOyasOyEoCjqtozsnqUsIOuUlO2PtO2KuCkgOiA3MjDsnLzroZwg6rOg7KCVLCDsoIDsgqzslpEg64uo66eQ6riwIO2YuO2ZmOyEsSDsoovsnYxcbiAgICAvLyBjYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWE6ICdoaWdoUXVhbGl0eScsIC8vIOqzoO2ZlOyniCDsmrDshKAgOiAxMDgw7J20IOqwgOuKpe2VmOuptCAxMDgwIOu2iOqwgOuKpe2VmOuptCA3MjBcblxuICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg7ISk7KCVIDogJ2NhbWVyYVJlc29sdXRpb24nICjsubTrqZTrnbwg7ZW07IOB64+EKSB8fCAnb2NyVmlld1NpemUnIChvY3IgZGl2IO2BrOq4sClcbiAgICBjYWxjR3VpZGVCb3hDcml0ZXJpYTogJ2NhbWVyYVJlc29sdXRpb24nLFxuICAgIC8vIOy5tOuplOudvCDtlbTsg4Hrj4Qg6riw7KSAKOq2jOyepSwg65SU7Y+07Yq4KSA6IDcyMHgxMjgwIO2VtOyDgeuPhCjshLjroZzrqqjrk5wpIOydvOuVjCBvY3IgdmlldyB3aWR0aCBzaXpl6rCAIDcyMOuztOuLpCDtgbAg6rK97JqwLCDqsIDsnbTrk5wg67CV7Iqk66W8IDcyMOyXkCDrp57stqQgKHByZXZpZXcg7ZmU66m0IOq5qOynkCDsl4bsnYwpXG4gICAgLy8gY2FsY0d1aWRlQm94Q3JpdGVyaWE6ICdvY3JWaWV3U2l6ZScsIC8vIO2ZlOuptCDsgqzsnbTspogg6riw7KSAIDogNzIweDEyODAg7ZW07IOB64+EKOyEuOuhnOuqqOuTnCkg7J2865WMIG9jciB2aWV3IHdpZHRoIHNpemXqsIAgNzIw67O064ukIO2BsOqyveyasCwg6rCA7J2065OcIOuwleyKpOulvCBvY3IgdmlldyB3aWR0aCDsgqzsl5Dspojsl5Ag66ee7LakIChwcmV2aWV3IO2ZlOuptCDqsJXsoJzroZwg64qY66as6riwIOuVjOusuOyXkCDri6Tshowg6rmo7KeQKVxuXG4gICAgLy8g7IKs67O47YyQ67OEIFJFVFJZIOyEpOyglVxuICAgIC8vIHNzYVJldHJ5VHlwZVxuICAgIC8vICAgLSBSRUFMICAgICA6IOuzuOyduChSRUFMKSDqsbDrtoDsnKggLT4gRmFsc2UgTmVnYXRpdmUo7Iuk7KCc6rCS7J2AIFJFQUzsnbjrjbAg7JiI7Lih6rCS7J2AIEZBS0XrnbzshJwg7YuA66aw6rK97JqwKeulvCDrgq7stpTquLAg7JyE7ZW0LFxuICAgIC8vICAgLSBGQUtFICAgICA6IO2DgOyduChGQUtFKSDsiJjrnb3snKggLT4gRmFsc2UgUG9zaXRpdmUo7Iuk7KCc6rCS7J2AIEZBS0XsnbjrjbAg7JiI7Lih6rCS7J2AIFJFQUzsnbTrnbzshJwg7YuA66aw6rK97JqwKeulvCDrgq7stpTquLAg7JyE7ZW0XG4gICAgLy8gICAtIEVOU0VNQkxFIDog7Y+J6regIOygiOuMgOqwkiAtPiBzc2FNYXhSZXRyeUNvdW50IOunjO2BvCDrsJjrs7Ug7IiY7ZaJ7ZWY6rOgIGZkX2NvbmZpZGVuY2Ug7KCI64yA6rCSIOqwkuydmCDtj4nqt6DsnLzroZwg7YyQ7KCVXG4gICAgLy8gc3NhTWF4UmV0cnlDb3VudCDshKTsoJUg6rCS66eM7YG8IOyerOyLnOuPhO2VmOyXrCDtlZzrsojsnbTrnbzrj4Qg6riw7KSA6rCSKFJFQUwg65iQ64qUIEZBS0Up7J20IOucqOuptCDquLDspIDqsJIoUkVBTCDrmJDripQgRkFLRSnroZwg7YyQ7KCVXG4gICAgc3NhUmV0cnlUeXBlOiAnRU5TRU1CTEUnLFxuICAgIHNzYVJldHJ5UGl2b3Q6IDAuNSxcbiAgICAvLyBSRUFML0ZBS0Xrpbwg7YyQ7KCV7ZWY64qUIGZkX2NvbmZpZGVuY2Ug6riw7KSA6rCSICh3YXNtIOuwsO2PrCDrsoTsoITsl5Ag65Sw6528IOuLpOumhCkg4oC7IOyImOygleu2iOqwgFxuICAgIHNzYU1heFJldHJ5Q291bnQ6IDAgLy8g7LWc64yAIFJFVFJZIO2ajOyImOyEpOyglSAw7J2066m0IOuvuOyCrOyaqVxuICB9KTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBhc3luYyBwcmVsb2FkaW5nKCkge1xuICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLlNUQVJURUQ7XG4gICAgICBhd2FpdCB0aGlzLl9fbG9hZFJlc291cmNlcygpO1xuICAgICAgdGhpcy5fX3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkU7XG4gICAgICB0aGlzLl9fcHJlbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2luaXRpYWxpemVkO1xuICB9XG4gIGlzUHJlbG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9fcHJlbG9hZGVkO1xuICB9XG4gIGdldFByZWxvYWRpbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzO1xuICB9XG4gIGlzRW5jcnlwdE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vcHRpb25zLnVzZUVuY3J5cHRNb2RlIHx8IHRoaXMuX19vcHRpb25zLnVzZUVuY3J5cHRBbGxNb2RlO1xuICB9XG4gIGlzQ3JlZGl0Q2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclR5cGUgPT09ICdjcmVkaXQnO1xuICB9XG4gIGVuY3J5cHRSZXN1bHQocmV2aWV3X3Jlc3VsdCkge1xuICAgIGlmICh0aGlzLmlzQ3JlZGl0Q2FyZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRW5jcnlwdE1vZGUoKSAmJiB0aGlzLl9faXNTdXBwb3J0V2FzbSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUVuY3J5cHRNb2RlKSB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVMaXN0ID0gWydqdW1pbicsICdkcml2ZXJfbnVtYmVyJywgJ3Bhc3Nwb3J0X251bWJlcicsICdwZXJzb25hbF9udW1iZXInLCAnbXJ6MiddO1xuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSB7XG4gICAgICAgICAgb2NyX3Jlc3VsdDogXy50b1BhaXJzKF8ucGljayhyZXZpZXdfcmVzdWx0Lm9jcl9yZXN1bHQsIGluY2x1ZGVMaXN0KSkucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHJldmlld19yZXN1bHQub2NyX29yaWdpbl9pbWFnZSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfcmVzdWx0ID0ge1xuICAgICAgICAgIC4uLnJldmlld19yZXN1bHQub2NyX3Jlc3VsdCxcbiAgICAgICAgICAuLi5lbmNyeXB0ZWQub2NyX3Jlc3VsdFxuICAgICAgICB9O1xuICAgICAgICByZXZpZXdfcmVzdWx0Lm9jcl9vcmlnaW5faW1hZ2UgPSBlbmNyeXB0ZWQub2NyX29yaWdpbl9pbWFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVMaXN0ID0gWydjb21wbGV0ZScsICdyZXN1bHRfc2Nhbl90eXBlJywgJ2NvbG9yX3BvaW50JywgJ2ZvdW5kX2ZhY2UnLCAnc3BlY3VsYXJfcmF0aW8nLCAnc3RhcnRfdGltZScsICdlbmRfdGltZScsICdmZF9jb25maWRlbmNlJywgJ2lkX3RydXRoJywgJ2lkX3RydXRoX3JldHJ5X2NvdW50J107XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICByZXZpZXdfcmVzdWx0LmVuY3J5cHRlZCA9IHtcbiAgICAgICAgICBvY3JfcmVzdWx0OiBfLnRvUGFpcnMoXy5vbWl0KHJldmlld19yZXN1bHQub2NyX3Jlc3VsdCwgZXhjbHVkZUxpc3QpKS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3Jfb3JpZ2luX2ltYWdlKSxcbiAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHJldmlld19yZXN1bHQub2NyX21hc2tpbmdfaW1hZ2UpLFxuICAgICAgICAgIG9jcl9mYWNlX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3JfZmFjZV9pbWFnZSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lO1xuICB9XG4gIGluaXQoc2V0dGluZ3MpIHtcbiAgICBpZiAoISEhc2V0dGluZ3MubGljZW5zZUtleSkgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIGtleSBpcyBlbXB0eScpO1xuICAgIHRoaXMuX19saWNlbnNlID0gc2V0dGluZ3MubGljZW5zZUtleTtcbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5fX29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy5fX3dpbmRvd0V2ZW50QmluZCgpO1xuICAgICAgdGhpcy5fX2RldmljZUluZm8gPSBkZXRlY3Rvci5nZXRPc1ZlcnNpb24oKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuX19pc1N1cHBvcnRXYXNtID0gaXNTdXBwb3J0V2FzbSgpO1xuICAgICAgaWYgKCF0aGlzLl9faXNTdXBwb3J0V2FzbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYkFzc2VtYmx5IGlzIG5vdCBzdXBwb3J0ZWQuIGluIHRoaXMgYnJvd3Nlci4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldE9wdGlvbihzZXR0aW5ncykge1xuICAgIHRoaXMuX19vcHRpb25zID0gc2V0dGluZ3M7XG4gIH1cbiAgZ2V0T3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucztcbiAgfVxuICBnZXRPY3JUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclR5cGVOdW1iZXJUb1N0cmluZy5nZXQodHlwZSk7XG4gIH1cbiAgZ2V0T2NyVHlwZU51bWJlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclN0cmluZ1RvVHlwZU51bWJlci5nZXQoc3RyaW5nKTtcbiAgfVxuICBnZXRVSU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdWlPcmllbnRhdGlvbjtcbiAgfVxuICBnZXRWaWRlb09yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgfVxuICBhc3luYyBjaGVja1N3aXRjaFRvU2VydmVyTW9kZSgpIHtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAvLyDsiJjrj5nsoITtmZggb24g7J2066m0IOyImOuPmeyghO2ZmCDsmrDshKBcbiAgICAgIHJldHVybiB0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOyImOuPmeyghO2ZmCBvZmYg7J2066m0IOyekOuPmeyghO2ZmCDssrTtgaxcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VBdXRvU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAgIC8vIOyekOuPmeyghO2ZmCBvbuydvOuVjFxuICAgICAgICAvLyDshLHriqUg7Lih7KCV6rCS7J2EIOq4sOykgOycvOuhnCBXQVNNIG9yIFNlcnZlclxuICAgICAgICBjb25zdCBbbGF0ZW5jeVBlcjEwMG1zLCBtZWFzdXJlUmVwb3J0XSA9IGF3YWl0IG1lYXN1cmUoKTtcbiAgICAgICAgdGhpcy5fX2RlYnVnKG1lYXN1cmVSZXBvcnQpO1xuICAgICAgICByZXR1cm4gbGF0ZW5jeVBlcjEwMG1zID4gdGhpcy5fX29wdGlvbnMuc3dpdGNoVG9TZXJ2ZXJUaHJlc2hvbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDsiJjrj5nsoITtmZjrj4Qgb2ZmLCDsnpDrj5nsoITtmZggb2ZmXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgc3RhcnRPQ1IodHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSA9IG51bGwpIHtcbiAgICBpZiAoISEhdHlwZSB8fCAhISFvblN1Y2Nlc3MgfHwgISEhb25GYWlsdXJlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX19pc1N3aXRjaFRvU2VydmVyTW9kZSA9IGF3YWl0IHRoaXMuY2hlY2tTd2l0Y2hUb1NlcnZlck1vZGUoKTtcbiAgICB0aGlzLl9fb2NyVHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fX3NzYU1vZGUgPSB0aGlzLl9fb2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMTtcbiAgICB0aGlzLl9fb25TdWNjZXNzID0gb25TdWNjZXNzO1xuICAgIHRoaXMuX19vbkZhaWx1cmUgPSBvbkZhaWx1cmU7XG4gICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZSA9IG9uSW5Qcm9ncmVzc0NoYW5nZTtcbiAgICBpZiAob25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlVG9wVUkpIHtcbiAgICAgICAgdGhpcy5fX3RvcFVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS50b3BVSTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkge1xuICAgICAgICB0aGlzLl9fbWlkZGxlVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm1pZGRsZVVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJKSB7XG4gICAgICAgIHRoaXMuX19ib3R0b21VSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuYm90dG9tVUk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW5pdGlhbGl6ZWQhJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fcHJlcHJvY2VzcygpO1xuICAgICAgaWYgKHRoaXMuX19pc1N3aXRjaFRvU2VydmVyTW9kZSkge1xuICAgICAgICAvLyBzZXJ2ZXJNb2RlXG4gICAgICAgIGlmICh0aGlzLmlzRW5jcnlwdE1vZGUoKSAmJiB0aGlzLl9faXNTdXBwb3J0V2FzbSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19wcmVsb2FkaW5nV2FzbSgpOyAvLyDshJzrsoTrqqjrk5wg7J207KeA66eMIOyVlO2YuO2ZlCDtlZjquLDsnITtlbQgd2FzbeydhCBwcmVsb2FkaW5nIO2VqFxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2NhblNlcnZlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2FzbU1vZGVcbiAgICAgICAgYXdhaXQgdGhpcy5fX3ByZWxvYWRpbmdXYXNtKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5XYXNtKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9XG4gIH1cbiAgc3RvcE9DUigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICB0aGlzLl9fb25TdWNjZXNzID0gbnVsbDtcbiAgICB0aGlzLl9fb25GYWlsdXJlID0gbnVsbDtcbiAgfVxuICBzZXRJZ25vcmVDb21wbGV0ZSh2YWwpIHtcbiAgICB0aGlzLl9fT0NSRW5naW5lLnNldElnbm9yZUNvbXBsZXRlKHZhbCk7XG4gIH1cbiAgZW5jcnlwdChwbGFpblN0cikge1xuICAgIHJldHVybiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocGxhaW5TdHIpO1xuICB9XG4gIGFzeW5jIHJlc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSwgaXNTd2l0Y2hNb2RlID0gZmFsc2UpIHtcbiAgICBpZiAoaXNTd2l0Y2hNb2RlKSB7XG4gICAgICBhd2FpdCB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gIH1cblxuICAvKiogcHJpdmF0ZSBtZXRob2RzICovXG4gIGFzeW5jIF9fd2FpdFByZWxvYWRlZCgpIHtcbiAgICBsZXQgd2FpdGluZ1JldHJ5Q291bnQgPSAwO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ByZWxvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhaXRpbmdSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH07XG4gICAgICBjaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIF9fcHJlcHJvY2VzcygpIHtcbiAgICBjb25zdCBjb252ZXJ0VHlwZVRvTnVtYmVyID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlSW50KG9wdGlvbikpID8gMCA6IHBhcnNlSW50KG9wdGlvbik7XG4gICAgfTtcbiAgICB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID0gY29udmVydFR5cGVUb051bWJlcih0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KTtcbiAgICB0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lID0gY29udmVydFR5cGVUb051bWJlcih0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lKTtcbiAgICB0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4V2lkdGggPSBjb252ZXJ0VHlwZVRvTnVtYmVyKHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aCk7XG4gIH1cbiAgX193aW5kb3dFdmVudEJpbmQoKSB7XG4gICAgY29uc3QgX3RoaXNfID0gdGhpcztcbiAgICBpZiAoL2lwaG9uZXxpcG9kfGlwYWQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIGNvbnN0IHNraXBUb3VjaEFjdGlvbmZvclpvb20gPSBldiA9PiB7XG4gICAgICAgIGlmIChldi50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpc18uX19wYWdlRW5kID0gdHJ1ZTtcbiAgICAgIF90aGlzXy5jbGVhbnVwKCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLl9fb2NyVHlwZSkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUpIHtcbiAgICAgICAgX3RoaXNfLl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gdHJ1ZTtcbiAgICAgICAgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgX3RoaXNfLnJlc3RhcnRPQ1IoX3RoaXNfLl9fb2NyVHlwZSwgX3RoaXNfLl9fb25TdWNjZXNzLCBfdGhpc18uX19vbkZhaWx1cmUsIF90aGlzXy5fX29uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lcikge1xuICAgICAgICBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGhhbmRsZVJlc2l6ZSwgX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX2RlYnVnKG1zZykge1xuICAgIHZvaWQgMDtcbiAgfVxuICBfX3NsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG4gIF9fYmxvYlRvQmFzZTY0KGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pO1xuICB9XG4gIF9fYmFzZTY0dG9CbG9iKGJhc2U2NCkge1xuICAgIC8vIGNvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nXG4gICAgLy8gZG9lc24ndCBoYW5kbGUgVVJMRW5jb2RlZCBEYXRhVVJJcyAtIHNlZSBTTyBhbnN3ZXIgIzY4NTAyNzYgZm9yIGNvZGUgdGhhdCBkb2VzIHRoaXNcbiAgICBjb25zdCBieXRlU3RyaW5nID0gYXRvYihiYXNlNjQuc3BsaXQoJywnKVsxXSk7XG5cbiAgICAvLyBzZXBhcmF0ZSBvdXQgdGhlIG1pbWUgY29tcG9uZW50XG4gICAgY29uc3QgbWltZVN0cmluZyA9IGJhc2U2NC5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXTtcblxuICAgIC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyXG4gICAgY29uc3QgYWIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIGNvbnN0IGlhID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYWJdLCB7XG4gICAgICB0eXBlOiBtaW1lU3RyaW5nXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19jb21wcmVzZUJhc2U2NEltYWdlKGJhc2U2NCwgb3B0aW9ucywgY29uc3RhbnROdW1iZXIpIHtcbiAgICBpZiAoYmFzZTY0ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBibG9iRmlsZSA9IHRoaXMuX19iYXNlNjR0b0Jsb2IoYmFzZTY0KTtcbiAgICBjb25zdCBjb21wcmVzc2VkID0gYXdhaXQgSW1hZ2VVdGlsLmNvbXByZXNzSW1hZ2UoYmxvYkZpbGUsIG9wdGlvbnMsIGNvbnN0YW50TnVtYmVyKTtcbiAgICBjb25zdCBjb21wcmVzc2lvblJhdGlvID0gTWF0aC5yb3VuZCgoMSAtIGNvbXByZXNzZWQuc2l6ZSAvIGJsb2JGaWxlLnNpemUpICogMTAwMDApIC8gMTAwO1xuICAgIHZvaWQgMDtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fX2Jsb2JUb0Jhc2U2NChjb21wcmVzc2VkKTtcbiAgfVxuXG4gIC8qKiDrnbzsnbTshLzsiqQg7YKk66W8IGhlYXAg7JeQIGFsbG9jYXRpb24gKi9cbiAgX19nZXRTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICghISF0aGlzLl9fbGljZW5zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIEtleSBpcyBlbXB0eScpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGhCeXRlcyA9IHRoaXMuX19PQ1JFbmdpbmUubGVuZ3RoQnl0ZXNVVEY4KHRoaXMuX19saWNlbnNlKSArIDE7XG4gICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MobGVuZ3RoQnl0ZXMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KHRoaXMuX19saWNlbnNlLCB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCwgbGVuZ3RoQnl0ZXMpO1xuICAgIHJldHVybiB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcDtcbiAgfVxuICBfX2VuY3J5cHRTY2FuUmVzdWx0KG9jclJlc3VsdCkge1xuICAgIGxldCBzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiBvY3JSZXN1bHQgPT09ICdudW1iZXInKSBvY3JSZXN1bHQgPSBvY3JSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgIGlmIChvY3JSZXN1bHQgPT09ICcnKSByZXR1cm4gJyc7XG4gICAgICBpZiAodHlwZW9mIG9jclJlc3VsdCAhPT0gJ3N0cmluZycgJiYgISEhb2NyUmVzdWx0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignb2NyUmVzdWx0IGlzIGVtcHR5Jyk7XG4gICAgICB9XG4gICAgICBjb25zdCBqc29uU3RyaW5nID0gb2NyUmVzdWx0O1xuICAgICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLl9fT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOChqc29uU3RyaW5nKSArIDE7XG4gICAgICBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KGpzb25TdHJpbmcsIHN0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lLmVuY3J5cHRSZXN1bHQoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChzdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgIHN0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgbGV0IHJlc29sdXRpb25UZXh0ID0gJ25vdCByZWFkeSc7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX192aWRlb1dpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgdGhpcy5fX3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH07XG4gIH1cbiAgX19nZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGFkZHJlc3MgPSAwO1xuICAgICAgbGV0IGRlc3Ryb3lDYWxsYmFjayA9IG51bGw7XG4gICAgICBjb25zdCBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX2dldFN0cmluZ09uV2FzbUhlYXAoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95SURDYXJkU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRBbGllblNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95QWxpZW5TY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldENyZWRpdFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95Q3JlZGl0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgaWYgKGFkZHJlc3MgPT09IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX19tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9PT0gdGhpcy5fX3JldHJ5Q291bnRHZXRBZGRyZXNzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBMaWNlbnNlIEtleScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcysrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFthZGRyZXNzLCBkZXN0cm95Q2FsbGJhY2tdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gOiBMaWNlbnNlIElzc3Vl7J24IOqyveyasCDsl5Drn6wg6rCS7J2EIOuwm+yVhOyEnCBlcnJvciDroZzqt7jrpbwg7LCN7J2EIOyImCDsnojqsowg7JqU7LKt7ZWE7JqUICjsnoTsi5wgTuuyiCDsnbTsg4EgYWRkcmVzc+ulvCDrqrvrsJvsnLzrqbQg6rCV7KCcIOyXkOufrClcbiAgICAgIHZvaWQgMDtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fZ2V0QnVmZmVyKCkge1xuICAgIGlmICghdGhpcy5fX0J1ZmZlcikge1xuICAgICAgdGhpcy5fX0J1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyh0aGlzLl9fcmVzb2x1dGlvbldpZHRoICogdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgKiA0KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9fcmVzdWx0QnVmZmVyKSB7XG4gICAgICB0aGlzLl9fcmVzdWx0QnVmZmVyID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKDQwOTYpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFza0luZm8pIHtcbiAgICAgIGlmICghdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmKSB7XG4gICAgICAgIHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1ZiA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyg0MDk2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt0aGlzLl9fQnVmZmVyLCB0aGlzLl9fcmVzdWx0QnVmZmVyLCB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWZdO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbWFza01vZGUsIGltZ01vZGUsIGltZ1R5cGUgPSAnY2FyZCcpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGltZ1R5cGUgPT09ICdjYXJkJykge1xuICAgICAgICB0aGlzLl9fT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZShhZGRyZXNzLCBtYXNrTW9kZSwgaW1nTW9kZSk7XG4gICAgICB9IGVsc2UgaWYgKGltZ1R5cGUgPT09ICdmYWNlJykge1xuICAgICAgICB0aGlzLl9fT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkUGhvdG9JbWFnZShhZGRyZXNzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGpwZ1NpemUgPSB0aGlzLl9fT0NSRW5naW5lLmdldEVuY29kZWRKcGdTaXplKCk7XG4gICAgICBjb25zdCBqcGdQb2ludGVyID0gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnQnVmZmVyKCk7XG4gICAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fX09DUkVuZ2luZS5IRUFQOC5idWZmZXIsIGpwZ1BvaW50ZXIsIGpwZ1NpemUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0Vmlldyk7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3VsdF0sIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9fYmxvYlRvQmFzZTY0KGJsb2IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUVuY29kZWRKcGcoKTtcbiAgICB9XG4gIH1cblxuICAvKiogRnJlZSBidWZmZXIgKi9cbiAgX19kZXN0cm95QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLl9fQnVmZmVyKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19CdWZmZXIpO1xuICAgICAgdGhpcy5fX0J1ZmZlciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX19kZXN0cm95UmVzdWx0QnVmZmVyKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpO1xuICB9XG4gIF9fZGVzdHJveVJlc3VsdEJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX3Jlc3VsdEJ1ZmZlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fcmVzdWx0QnVmZmVyKTtcbiAgICAgIHRoaXMuX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICBfX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1Zik7XG4gICAgICB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGcmVlIFByZXZJbWFnZSBidWZmZXIgKi9cbiAgX19kZXN0cm95UHJldkltYWdlKCkge1xuICAgIGlmICh0aGlzLl9fUHJldkltYWdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19QcmV2SW1hZ2UpO1xuICAgICAgdGhpcy5fX1ByZXZJbWFnZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIGZyZWUgc3RyaW5nIGhlYXAgYnVmZmVyICovXG4gIF9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLl9mcmVlKHRoaXMuX19zdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIHRoaXMuX19zdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogZnJlZSBzY2FubmVyIGFkZHJlc3MgKi9cbiAgX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrKSB7XG4gICAgICB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlb0VsZW1lbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH0gPSBhd2FpdCB0aGlzLl9fc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFJlc29sdXRpb24pIHtcbiAgICAgIGlmIChyZXNvbHV0aW9uVGV4dCAhPT0gJ25vdCByZWFkeScpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSZXNvbHV0aW9uO1xuICB9XG4gIF9fZ2V0Um90YXRpb25EZWdyZWUoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9fb3B0aW9ucy5yb3RhdGlvbkRlZ3JlZSAlIDM2MCArIDM2MCkgJSAzNjA7XG4gIH1cbiAgX19nZXRNaXJyb3JNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucy5taXJyb3JNb2RlO1xuICB9XG4gIGFzeW5jIF9fY3JvcEltYWdlRnJvbVZpZGVvKCkge1xuICAgIGlmICghdGhpcy5fX2NhbVNldENvbXBsZXRlKSByZXR1cm4gW251bGwsIG51bGwsIG51bGxdO1xuICAgIGxldCBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcblxuICAgIC8vIHNvdXJjZSBpbWFnZSAob3IgdmlkZW8pXG4gICAgLy8g4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIogc3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIPilIjilIjilIjilIgg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyBzeCAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBzSGVpZ2h0ICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uIGNhbnZhc1xuICAgIC8vIOKUgyAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgICAgICAgIOKUg+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICAgICAgICDilIMgICAg4pSKICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICAgICAgICBzV2lkdGggICAgICAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiBkeSAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyAgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSD4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICBkeCAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBkSGVpZ2h0IOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgIGRXaWR0aCAgICAgICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJtcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSlcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQvZHJhd0ltYWdlXG5cbiAgICBsZXQgY2FsY0NhbnZhcyA9IGNhbnZhcztcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgPSB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoLCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodF0gPSBbY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQsIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGhdO1xuICAgICAgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW2NhbGNSZXNvbHV0aW9uX2gsIGNhbGNSZXNvbHV0aW9uX3ddO1xuICAgICAgY2FsY0NhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgbGV0IGNhbGNNYXhTV2lkdGggPSA5OTk5OTtcbiAgICBsZXQgY2FsY01heFNIZWlnaHQgPSA5OTk5OTtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3gsIHN5O1xuICAgIGNvbnN0IHJhdGlvID0gY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBjb25zdCBzV2lkdGggPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplV2lkdGggKiByYXRpbyksIGNhbGNNYXhTV2lkdGgpO1xuICAgIGNvbnN0IHNIZWlnaHQgPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0ICogcmF0aW8pLCBjYWxjTWF4U0hlaWdodCk7XG4gICAgc3ggPSBNYXRoLm1heChNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRXaWR0aCAtIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGgpIC8gMiAqIHJhdGlvKSwgMCk7XG4gICAgc3kgPSBNYXRoLm1heChNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRIZWlnaHQgLSBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCkgLyAyICogcmF0aW8pLCAwKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgdGhpcy5fX2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCBkZWdyZWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoZGVncmVlID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoW2ltZ0RhdGEsIGltZ0RhdGFVcmxdKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9IGltZ0RhdGFVcmw7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAvLyBjYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgICAgY29uc3QgdGVtcENvbnRleHQgPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRlbXBDYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChbMCwgMTgwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gOTApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcuaGVpZ2h0LCAwKTtlbHNlIGlmIChkZWdyZWUgPT09IDE4MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy53aWR0aCwgaW1nLmhlaWdodCk7ZWxzZSBpZiAoZGVncmVlID09PSAyNzApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZSgwLCBpbWcud2lkdGgpO1xuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBjb25zdCBuZXdJbWFnZURhdGEgPSBbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSA/IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcuaGVpZ2h0LCBpbWcud2lkdGgpIDogdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgICAgIHJlc29sdmUoW25ld0ltYWdlRGF0YSwgdGVtcENhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKV0pO1xuICAgICAgICB0ZW1wQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIGJveFR5cGUgPSAwLCByZXRyeUltZyA9IG51bGwpIHtcbiAgICBpZiAoIWFkZHJlc3MgfHwgYWRkcmVzcyA8IDApIHtcbiAgICAgIHJldHVybiBbZmFsc2UsIG51bGxdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbGV0IGltZ0RhdGE7XG4gICAgICBsZXQgaW1nRGF0YVVybCA9IG51bGw7XG4gICAgICBjb25zdCBbYnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGlmIChyZXRyeUltZyAhPT0gbnVsbCkge1xuICAgICAgICBpbWdEYXRhID0gcmV0cnlJbWc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBbaW1nRGF0YSwgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9fY3JvcEltYWdlRnJvbVZpZGVvKCk7XG4gICAgICB9XG4gICAgICBpZiAoISEhaW1nRGF0YSkge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgYnVmZmVyKTtcbiAgICAgIGxldCBrb3IgPSBmYWxzZSxcbiAgICAgICAgYWxpZW4gPSBmYWxzZSxcbiAgICAgICAgcGFzc3BvcnQgPSBmYWxzZTtcbiAgICAgIHN3aXRjaCAodGhpcy5fX29jclR5cGUpIHtcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGtvciA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBwYXNzcG9ydCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhbGllbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICAgIH1cbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKGtvciB8fCBwYXNzcG9ydCB8fCBhbGllbikge1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmRldGVjdF9pZGNhcmRfb3B0KGJ1ZmZlciwgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIGFkZHJlc3MsIGtvciwgYWxpZW4sIHBhc3Nwb3J0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuZGV0ZWN0X2lkY2FyZChidWZmZXIsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCBhZGRyZXNzLCBib3hUeXBlKTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQ2FyZGJveERldGVjdGVkIHJlc3VsdCAtPS0tLS0tJywgcmVzdWx0KVxuICAgICAgcmV0dXJuIFshIXJlc3VsdCwgaW1nRGF0YSwgaW1nRGF0YVVybF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgc3NhTW9kZSwgaXNTZXRJZ25vcmVDb21wbGV0ZSwgaW1nRGF0YSwgaW1nRGF0YVVybCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWRkcmVzcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IGVsc2UgaWYgKGFkZHJlc3MgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnY2hlY2tWYWxpZGF0aW9uIEZhaWwnO1xuICAgICAgfVxuICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuX19vY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IHJlY29nbml0aW9uID0gYXN5bmMgaXNTZXRJZ25vcmVDb21wbGV0ZSA9PiB7XG4gICAgICAgIGlmIChpc1NldElnbm9yZUNvbXBsZXRlKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDAsIGltZ0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbklEQ2FyZChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuUGFzc3BvcnQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5zY2FuQWxpZW4oYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5DcmVkaXQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiDsi6DsmqnsubTrk5zripQg7JWE7KeBIGtleTp2YWx1ZSDtmJXtg5zroZwg67OA7ZmYIOyViOuQmOyWtCDsnojsnYxcbiAgICAgICAgaWYgKG9jclR5cGUgPT09ICdjcmVkaXQnKSB7XG4gICAgICAgICAgaWYgKG9jclJlc3VsdCA9PT0gbnVsbCB8fCBvY3JSZXN1bHQgPT09ICcnIHx8IG9jclJlc3VsdCA9PT0gJ2ZhbHNlJyB8fCBvY3JSZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19jc3ZUb09iamVjdChvY3JSZXN1bHQpO1xuICAgICAgICBpZiAob2NyUmVzdWx0Py5jb21wbGV0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgb2NyUmVzdWx0Py5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzU2V0SWdub3JlQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9fbWFudWFsT0NSUmV0cnlDb3VudCA8IHRoaXMuX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50KSB7XG4gICAgICAgICAgICAgIC8vIGRldGVjdGVkQ2FyZFF1ZXVl7JeQ7IScIO2VnOyepeydhCDqurzrgrTshJwg6rCx7Iug7ZWc64ukLlxuICAgICAgICAgICAgICAvLyDsoIDsnqXrkJjslrTsnojripQg7J2066+47KeA7J2YIOyIq+yekOqwgCByZXRyeSDrs7Tri6Qg7J6R7J2A6rK97JqwIOuMgOu5hO2VmOyXrCAl66W8IOyCrOyaqe2VqFxuICAgICAgICAgICAgICBjb25zdCBxdWV1ZUlkeCA9IHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50ICUgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgaW1nRGF0YSA9IHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZVtxdWV1ZUlkeF07XG4gICAgICAgICAgICAgIHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICAgIHJldHVybiBhd2FpdCByZWNvZ25pdGlvbihpc1NldElnbm9yZUNvbXBsZXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIOyCrOynhCDtlZzsnqXsnLzroZwgT0NSIOyLpO2MqCAocG9wdXAg64K066as6rOgIHNldElnbm9yZUNvbXBsZXRlKGZhbHNlKSDsspjrpqw/XG4gICAgICAgICAgICAgIHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7XG4gICAgICAgICAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpOyAvLyDtjJ3sl4XsnbQg64K066Ck6rCI65WMIOyymOumrOuQmOyngOunjCDrr7jrpqwg7LKY66asXG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCwgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS52aWRlbywge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyBlbmQgb2YgZnVuY3Rpb24gcmVjb2duaXRpb24oKVxuXG4gICAgICBpZiAoYXdhaXQgcmVjb2duaXRpb24oaXNTZXRJZ25vcmVDb21wbGV0ZSkpIHtcbiAgICAgICAgY29uc3QgaXNDcmVkaXRDYXJkID0gb2NyVHlwZSA9PT0gJ2NyZWRpdCc7XG4gICAgICAgIGxldCBvY3JJbWFnZU1vZGU7XG4gICAgICAgIGlmIChpc0NyZWRpdENhcmQpIHtcbiAgICAgICAgICBvY3JJbWFnZU1vZGUgPSB0aGlzLk9DUl9JTUdfTU9ERS5DUk9QUElORztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9fb3B0aW9ucy51c2VJbWFnZVdhcnBpbmcpIHtcbiAgICAgICAgICBvY3JJbWFnZU1vZGUgPSB0aGlzLk9DUl9JTUdfTU9ERS5XQVJQSU5HO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9jckltYWdlTW9kZSA9IHRoaXMuT0NSX0lNR19NT0RFLk5PTkU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9yaWdpbkltYWdlID0gYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRoaXMuT0NSX0lNR19NQVNLX01PREUuRkFMU0UsIG9jckltYWdlTW9kZSk7XG4gICAgICAgIGxldCBtYXNrSW1hZ2UgPSBudWxsO1xuICAgICAgICBsZXQgZmFjZUltYWdlID0gbnVsbDtcbiAgICAgICAgaWYgKCFpc0NyZWRpdENhcmQpIHtcbiAgICAgICAgICBtYXNrSW1hZ2UgPSBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdGhpcy5PQ1JfSU1HX01BU0tfTU9ERS5UUlVFLCB0aGlzLk9DUl9JTUdfTU9ERS5XQVJQSU5HKTtcbiAgICAgICAgICBtYXNrSW1hZ2UgPSBtYXNrSW1hZ2UgPT09ICdkYXRhOicgPyBudWxsIDogbWFza0ltYWdlO1xuICAgICAgICAgIGZhY2VJbWFnZSA9IHRoaXMuX19vcHRpb25zLnVzZUZhY2VJbWFnZSA/IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBudWxsLCBvY3JJbWFnZU1vZGUsICdmYWNlJykgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzc2FNb2RlKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EsIGZhbHNlLCBtYXNrSW1hZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIFNUQVJUXG4gICAgICAgIC8vIGlmICghaXNDcmVkaXRDYXJkICYmIHRoaXMuX19vcHRpb25zLnVzZVBpaUVuY3J5cHRNb2RlKSB7XG4gICAgICAgIC8vICAgb3JpZ2luSW1hZ2UgPSB0aGlzLl9fZ2V0UGlpRW5jcnlwdEltYWdlQmFzZTY0KFxuICAgICAgICAvLyAgICAgYWRkcmVzcyxcbiAgICAgICAgLy8gICAgIHRoaXMuT0NSX0lNR19NQVNLX01PREUuRkFMU0UsXG4gICAgICAgIC8vICAgICBvY3JJbWFnZU1vZGVcbiAgICAgICAgLy8gICApO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdlbmNyeXB0IGJhc2U2NCBpbWFnZScsIHsgb3JpZ2luSW1hZ2UgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaWYgKGZhY2VJbWFnZSAmJiB0aGlzLl9fb3B0aW9ucy51c2VQaWlFbmNyeXB0RmFjZSkge1xuICAgICAgICAvLyAgIGZhY2VJbWFnZSA9IHRoaXMuX19nZXRQaWlFbmNyeXB0SW1hZ2VCYXNlNjQoXG4gICAgICAgIC8vICAgICBhZGRyZXNzLFxuICAgICAgICAvLyAgICAgbnVsbCxcbiAgICAgICAgLy8gICAgIG9jckltYWdlTW9kZSxcbiAgICAgICAgLy8gICAgICdmYWNlJ1xuICAgICAgICAvLyAgICk7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ2VuY3J5cHQgYmFzZTY0IGZhY2UgaW1hZ2UnLCB7IGZhY2VJbWFnZSB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBFTkRcblxuICAgICAgICByZXR1cm4gW29jclJlc3VsdCwgb3JpZ2luSW1hZ2UsIG1hc2tJbWFnZSwgZmFjZUltYWdlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGwsIG51bGwsIG51bGxdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIF9fc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBpZiAob2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMSkge1xuICAgICAgICAvLyBUT0RPOiB3b3JrZXLrpbwg7IKs7Jqp7ZWY7JesIOuplOyduChVSSDrnpzrjZTrp4EpIOyKpOugiOuTnOqwgCDrqYjstpTsp4Ag7JWK64+E66GdIOyymOumrCDtlYTsmpQgKO2YhOyerCBsb2FkaW5nIFVJIOudhOyasOuptCDslaDri4jrqZTsnbTshZgg66mI7LakKVxuICAgICAgICAvLyBUT0RPOiBzZXRUaW1lb3V0IOycvOuhnCDrgpjriITrjZTrnbzrj4Qg7Zqo6rO8IOyXhuydjCBzZXRUaW1lb3V0IOyngOyasOqzoCwgd29ya2Vy66GcIOuzgOqyvSDtlYTsmpRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLl9fT0NSRW5naW5lLnNjYW5UcnV0aChhZGRyZXNzLCByZXN1bHRCdWZmZXIpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NTQSBNb2RlIGlzIHRydWUuIGJ1dCwgb2NyVHlwZSBpcyBpbnZhbGlkIDogJyArIG9jclR5cGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX2NzdlRvT2JqZWN0KHN0cikge1xuICAgIGxldCBwYWlycyA9IHN0ci5zcGxpdCgnOycpO1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG4gICAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIG9ialtwYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgX19nZXRNYXNrSW5mbyhhZGRyZXNzKSB7XG4gICAgaWYgKGFkZHJlc3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAnY2hlY2tWYWxpZGF0aW9uIEZhaWwnO1xuICAgIH1cbiAgICBjb25zdCBbLCwgbWFza0luZm9SZXN1bHRCdWZdID0gdGhpcy5fX2dldEJ1ZmZlcigpO1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIHJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0TWFza1JlY3QoYWRkcmVzcywgbWFza0luZm9SZXN1bHRCdWYpO1xuICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCByZXN1bHQgPT09ICcnKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5fX2Rlc3Ryb3lNYXNrSW5mb1Jlc3VsdEJ1ZmZlcigpO1xuXG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9fY3N2VG9PYmplY3QocmVzdWx0KTtcbiAgfVxuICBhc3luYyBfX3N0YXJ0VHJ1dGhSZXRyeShvY3JUeXBlLCBhZGRyZXNzLCBpbWdEYXRhKSB7XG4gICAgYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDAsIGltZ0RhdGEpO1xuICAgIC8vIGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHRydWUpOyAgICAgIC8vIGZvciDshLHriqXsnYQg7JyE7ZW0IOynhO2WiSBYXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX19zdGFydFRydXRoKG9jclR5cGUsIGFkZHJlc3MpO1xuICB9XG4gIF9fc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy5fX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgYXN5bmMgX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy5fX29jclR5cGUuaW5jbHVkZXMoJ3Bhc3Nwb3J0Jyk7XG4gICAgICBhd2FpdCB0aGlzLl9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgIC8vIGNvbnN0IFt0cmFja10gPSB0aGlzLl9fc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW5fX2luaXRpYWxpemUgY2FwYWJpbGl0eScsIGNhcGFiaWxpdHkpO1xuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gdmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSB0aGlzLl9fc3RyZWFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEF2b2lkIHVzaW5nIHRoaXMgaW4gbmV3IGJyb3dzZXJzLCBhcyBpdCBpcyBnb2luZyBhd2F5LlxuICAgICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuX19zdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbiA9IHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlby52aWRlb0hlaWdodCA8IDEgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgdmlkZW8ud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYW1lcmEgQWNjZXNzIFBlcm1pc3Npb24gaXMgbm90IGFsbG93ZWQnO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhpcy5fX29uRmFpbHVyZVByb2Nlc3MoJ0U0MDMnLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdOb3RSZWFkYWJsZUVycm9yJykge1xuICAgICAgICAvLyDri6Trpbjqs7Psl5DshJwg7Lm066mU6528IOyekOybkOydhCDsgqzsmqnspJFcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7IC8vIOyerOq3gCDtmLjstpxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfX3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIGlmIChlbCAmJiBzdHlsZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgc3R5bGUpO1xuICAgIH1cbiAgfVxuICBfX2NoYW5nZU9DUlN0YXR1cyh2YWwpIHtcbiAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgLy8gT0NSXG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk5PVF9SRUFEWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuUkVBRFk6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuUkVBRFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUzpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQTpcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEOlxuICAgICAgICB0aGlzLl9fb2NyU3RhdHVzID0gdGhpcy5PQ1JfU1RBVFVTLkRPTkU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2NoYW5nZVN0YWdlKHZhbCwgZm9yY2VVcGRhdGUgPSBmYWxzZSwgcmVjb2duaXplZEltYWdlID0gbnVsbCkge1xuICAgIGlmICh0aGlzLl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9PT0gdmFsICYmIGZvcmNlVXBkYXRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fY2hhbmdlT0NSU3RhdHVzKHZhbCk7XG4gICAgdGhpcy5fX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB2YWw7XG4gICAgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIGNvbnN0IHtcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBjYXB0dXJlQnV0dG9uXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5zdHlsZSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXVxuICAgIH07XG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHN0eWxlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlKSB7XG4gICAgICBpZiAoISF0aGlzLl9fb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hc2tCb3hXcmFwPy5xdWVyeVNlbGVjdG9yKCcjbWFza0JveE91dGVyJyk/LnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlW3ZhbF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB7XG4gICAgICBjYXB0dXJlQnV0dG9uPy5xdWVyeVNlbGVjdG9yKCcjY2FwdHVyZUJ1dHRvbicpPy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLl9fb3B0aW9ucy5jYXB0dXJlQnV0dG9uU3R5bGVbJ2Jhc2VfY29sb3InXSk7XG4gICAgfVxuICAgIGNvbnN0IG9jck1vZGUgPSB0aGlzLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUgPyAnc2VydmVyJyA6ICd3YXNtJztcbiAgICBpZiAodGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVRvcFVJIHx8IHRoaXMuX19vcHRpb25zLnVzZVRvcFVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgb2NyTW9kZSwgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX3RvcFVJLCAndG9wJywgdGhpcy5fX29wdGlvbnMudXNlVG9wVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUksIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIG9jck1vZGUsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX19taWRkbGVVSSwgJ21pZGRsZScsIHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCBvY3JNb2RlLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fYm90dG9tVUksICdib3R0b20nLCB0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSwgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MgfHwgdmFsID09PSB0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCkge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSk7XG5cbiAgICAgICAgLy8gRkFJTOyduCDqsr3smrAgNey0iO2bhCDsnpDrj5nsnYQg7LC964ur7J2MXG4gICAgICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVEKSB7XG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLl9faGlkZVByZXZpZXdVSSwgMzAwMCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX19oaWRlUHJldmlld1VJKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxKTsgLy8gZm9yIFVJIHVwZGF0ZVxuICB9XG5cbiAgX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSByZWNvZ25pemVkSW1hZ2U7XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICAnbWF4LXdpZHRoJzogJzcwJScsXG4gICAgICAnbWF4LWhlaWdodCc6ICc2MCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld0ltYWdlLCBpbWdTdHlsZSk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0pO1xuICB9XG4gIF9faGlkZVByZXZpZXdVSShjb250ZXh0KSB7XG4gICAgbGV0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIF90aGlzXyA9IGNvbnRleHQ7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdJbWFnZVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIF90aGlzXy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSk7XG4gICAgX3RoaXNfLl9fc2V0U3R5bGUocHJldmlld1VJV3JhcCwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG4gICAgcHJldmlld0ltYWdlLnNyYyA9ICcnO1xuICB9XG4gIGFzeW5jIF9fZ2V0SW5wdXREZXZpY2VzKCkge1xuICAgIC8vIHRocm93IGVycm9yIGlmIG5hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZFxuICAgIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIGxldCBjYW1lcmEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRldmljZSBvZiBkZXZpY2VzKSB7XG4gICAgICBpZiAoZGV2aWNlLmtpbmQgPT09ICd2aWRlb2lucHV0Jykge1xuICAgICAgICBpZiAoZGV2aWNlLmdldENhcGFiaWxpdGllcykge1xuICAgICAgICAgIGNvbnN0IGNhcCA9IGRldmljZS5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgICBpZiAoY2FwPy5mYWNpbmdNb2RlPy5pbmNsdWRlcyh0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgICBjYW1lcmEucHVzaChjYXAuZGV2aWNlSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG4gIGNoZWNrVUlPcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZGV0ZWN0b3IuZ2V0VUlPcmllbnRhdGlvbihkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm9jcik7XG4gICAgbGV0IGlzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50ICE9PSB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24pIHtcbiAgICAgIHRoaXMuX191aU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIHRoaXMuX19wcmV2VWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICBpc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudCxcbiAgICAgIGlzQ2hhbmdlZFxuICAgIH07XG4gIH1cbiAgX19jbGVhckN1c3RvbVVJKG9iaikge1xuICAgIG9iai5pbm5lckhUTUwgPSAnJztcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIG9iai5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKG9iaiwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19zZXR1cERvbUVsZW1lbnRzKCkge1xuICAgIGxldCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICB2aWRlb1dyYXAsXG4gICAgICBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLFxuICAgICAgY3VzdG9tVUlXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgY2FwdHVyZVVJV3JhcCxcbiAgICAgIGNhcHR1cmVVSSxcbiAgICAgIGNhcHR1cmVCdXR0b24sXG4gICAgICBwcmV2aWV3VUlXcmFwLFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlLFxuICAgICAgc3dpdGNoVUlXcmFwLFxuICAgICAgc3dpdGNoVUlcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoIW9jcikgdGhyb3cgbmV3IEVycm9yKCdvY3IgZGl2IGVsZW1lbnQgaXMgbm90IGV4aXN0Jyk7XG4gICAgaWYgKHZpZGVvV3JhcCkgdmlkZW9XcmFwLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveFdyYXApIGd1aWRlQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAodmlkZW8pIHZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjYW52YXMpIGNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAocm90YXRpb25DYW52YXMpIHJvdGF0aW9uQ2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveCkgZ3VpZGVCb3gucmVtb3ZlKCk7XG4gICAgaWYgKG1hc2tCb3hXcmFwKSBtYXNrQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAocHJldmVudFRvRnJlZXplVmlkZW8pIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjdXN0b21VSVdyYXApIGN1c3RvbVVJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHRvcFVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkodG9wVUkpO1xuICAgIGlmIChtaWRkbGVVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKG1pZGRsZVVJKTtcbiAgICBpZiAoYm90dG9tVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShib3R0b21VSSk7XG4gICAgaWYgKGNhcHR1cmVVSVdyYXApIGNhcHR1cmVVSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8gY2FwdHVyZSBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKGNhcHR1cmVVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShjYXB0dXJlVUkpO1xuICAgIGlmIChwcmV2aWV3VUlXcmFwKSBwcmV2aWV3VUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIHByZXZpZXcgVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmIChwcmV2aWV3VUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkocHJldmlld1VJKTtcbiAgICBpZiAoc3dpdGNoVUlXcmFwKSBzd2l0Y2hVSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8gc3dpdGNoIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAoc3dpdGNoVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkoc3dpdGNoVUkpO1xuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy5fX2dldFJvdGF0aW9uRGVncmVlKCk7XG4gICAgdGhpcy5fX2lzUm90YXRlZDkwb3IyNzAgPSBbOTAsIDI3MF0uaW5jbHVkZXMocm90YXRpb25EZWdyZWUpO1xuICAgIGxldCBvY3JTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKG9jciwgb2NyU3R5bGUpO1xuICAgIGNvbnN0IHdyYXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9O1xuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlb1dyYXAsIHdyYXBTdHlsZSk7XG4gICAgfVxuICAgIG9jci5hcHBlbmRDaGlsZCh2aWRlb1dyYXApO1xuICAgIG1hc2tCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21hc2tCb3hXcmFwJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKG1hc2tCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIGxldCBtYXNrX2ZyYW1lID0gdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGUuYmFzZV9jb2xvciArICdmZic7XG4gICAgaWYgKCEhdGhpcy5fX29wdGlvbnMuc2hvd0NsaXBGcmFtZSkge1xuICAgICAgbWFza19mcmFtZSA9IHRoaXMuX19vcHRpb25zLm1hc2tGcmFtZVN0eWxlLmNsaXBfZnJhbWUgKyAnNTUnO1xuICAgIH1cbiAgICBtYXNrQm94V3JhcC5pbm5lckhUTUwgPSAnJyArIFwiICA8c3ZnIGlkPSdtYXNrQm94Q29udGFpbmVyJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxcblwiICsgXCIgICAgPG1hc2sgaWQ9J21hc2stcmVjdCc+XFxuXCIgKyBcIiAgICAgIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3doaXRlJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDxzdmcgeD0nNTAlJyB5PSc1MCUnIG92ZXJmbG93PSd2aXNpYmxlJz5cXG5cIiArIFwiICAgICAgICAgIDxyZWN0IGlkPSdtYXNrQm94SW5uZXInXFxuXCIgKyBcIiAgICAgICAgICAgIHdpZHRoPSc0MDAnIGhlaWdodD0nMjYwJ1xcblwiICsgXCIgICAgICAgICAgICB4PSctMjAwJyB5PSctMTMwJ1xcblwiICsgXCIgICAgICAgICAgICByeD0nMTAnIHJ5PScxMCdcXG5cIiArIFwiICAgICAgICAgICAgZmlsbD0nYmxhY2snIHN0cm9rZT0nYmxhY2snPjwvcmVjdD5cXG5cIiArICcgICAgICA8L3N2Zz5cXG4nICsgJyAgICA8L21hc2s+XFxuJyArIFwiICAgIDxyZWN0IGlkPSdtYXNrQm94T3V0ZXInXFxuXCIgKyBcIiAgICAgICAgICB4PScwJyB5PScwJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJ1xcblwiICsgXCIgICAgICAgICAgZmlsbD0nXCIgKyBtYXNrX2ZyYW1lICsgXCInIG1hc2s9J3VybCgjbWFzay1yZWN0KSc+PC9yZWN0PlxcblwiICsgJyAgPC9zdmc+JztcbiAgICBvY3IuYXBwZW5kQ2hpbGQobWFza0JveFdyYXApO1xuICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW8nKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ3RydWUnKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgJ3RydWUnKTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJ3RydWUnKTtcbiAgICBsZXQgdmlkZW9TdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH07XG4gICAgY29uc3Qgcm90YXRlQ3NzID0gJ3JvdGF0ZSgnICsgcm90YXRpb25EZWdyZWUgKyAnZGVnKSc7XG4gICAgY29uc3QgbWlycm9yQ3NzID0gJ3JvdGF0ZVkoMTgwZGVnKSc7XG4gICAgY29uc3Qgcm90YXRlQW5kTWlycm9yQ3NzID0gbWlycm9yQ3NzICsgJyAnICsgcm90YXRlQ3NzO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgaWYgKHRoaXMuX19nZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZUFuZE1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZUNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fX2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgIHRyYW5zZm9ybTogbWlycm9yQ3NzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywgdmlkZW9TdHlsZSk7XG4gICAgdmlkZW9XcmFwLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGd1aWRlQm94V3JhcCk7XG4gICAgZ3VpZGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnZ3VpZGVCb3gnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9KTtcbiAgICBndWlkZUJveFdyYXAuYXBwZW5kQ2hpbGQoZ3VpZGVCb3gpO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FudmFzJyk7XG4gICAgY29uc3QgY2FudmFzU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLl9fb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID8gJ25vbmUnIDogJ2Rpc3BsYXknIDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcyNSUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnZ3JlZW4gMnB4IHNvbGlkJ1xuICAgIH07XG4gICAgdGhpcy5fX3NldFN0eWxlKGNhbnZhcywgY2FudmFzU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHJvdGF0aW9uQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcm90YXRpb25DYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3JvdGF0aW9uQ2FudmFzJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHJvdGF0aW9uQ2FudmFzLCB7XG4gICAgICBkaXNwbGF5OiB0aGlzLl9fb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwID8gJ2Rpc3BsYXknIDogJ25vbmUnIDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMzBweCcsXG4gICAgICBib3JkZXI6ICdibHVlIDJweCBzb2xpZCdcbiAgICB9KTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQocm90YXRpb25DYW52YXMpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZlbnRUb0ZyZWV6ZVZpZGVvJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHByZXZlbnRUb0ZyZWV6ZVZpZGVvLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgIHJpZ2h0OiAnMTAnXG4gICAgfSk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uaW5uZXJIVE1MID0gJycgKyAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgc3R5bGU9XCJtYXJnaW46IGF1dG87IGJhY2tncm91bmQ6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XCIgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiPlxcbicgKyAnICA8Y2lyY2xlIGN4PVwiODRcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMC41NTU1NTU1NTU1NTU1NTU2c1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzFcIiB2YWx1ZXM9XCIxMDswXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiZmlsbFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cImRpc2NyZXRlXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjE2XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMC41NTU1NTU1NTU1NTU1NTU2c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCI4NFwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS4xMTExMTExMTExMTExMTEyc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjExMTExMTExMTExMTExMTJzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjE2XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjY2NjY2NjY2NjY2NjY2NjVzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPic7XG4gICAgJzwvc3ZnPic7XG4gICAgb2NyLmFwcGVuZENoaWxkKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKTtcbiAgICBjdXN0b21VSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXN0b21VSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2N1c3RvbVVJV3JhcCcpO1xuICAgIGNvbnN0IGN1c3RvbVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjdXN0b21VSVdyYXAsIGN1c3RvbVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY3VzdG9tVUlXcmFwKTtcblxuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJIOyCrOyaqSh1c2Up7Jes67aA7JmAIOq0gOqzhOyXhuydtCDsmIHsl63snYQg7J6h6riwIOychO2VtCwgZGl26rCAIOyXhuycvOuptCDsg53shLFcbiAgICAvLyBhZGp1c3RTdHlsZSgpIOyXkOyEnCDshLjrtoDsoIHsnbgg7IKs7J207KaI7JmAIOychOy5mOqwkiDrj5nsoIHsnLzroZwg7ISk7KCV65CoLlxuICAgIGlmICghdG9wVUkpIHtcbiAgICAgIHRvcFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndG9wVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKHRvcFVJKTtcbiAgICBpZiAoIW1pZGRsZVVJKSB7XG4gICAgICBtaWRkbGVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWlkZGxlVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21pZGRsZVVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZChtaWRkbGVVSSk7XG4gICAgaWYgKCFib3R0b21VSSkge1xuICAgICAgYm90dG9tVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJvdHRvbVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdib3R0b21VSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQoYm90dG9tVUkpO1xuICAgIGNhcHR1cmVVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXB0dXJlVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYXB0dXJlVUlXcmFwJyk7XG4gICAgY29uc3QgY2FwdHVyZVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NlbnRlcidcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCBjYXB0dXJlVUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYXB0dXJlVUlXcmFwKTtcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB7XG4gICAgICBpZiAodGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlIHx8IHRoaXMuX19vcHRpb25zLnVzZUZvcmNlQ29tcGxldGVVSSkge1xuICAgICAgICBpZiAoIWNhcHR1cmVVSSkge1xuICAgICAgICAgIGNhcHR1cmVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNhcHR1cmVVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FwdHVyZVVJJyk7XG4gICAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhcHR1cmVCdXR0b24pIHtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FwdHVyZUJ1dHRvbicpO1xuICAgICAgICAgIGxldCBjYXB0dXJlQnV0dG9uU3JjU1ZHID0gYGA7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgPHN2ZyB3aWR0aD0nODAnIGhlaWdodD0nODAnIHZpZXdCb3g9JzAgMCA4MCA4MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5gO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b25TcmNTVkcgKz0gYCAgPGNpcmNsZSBpZD0nY2FwdHVyZUJ1dHRvbicgY3g9JzQwJyBjeT0nNDAnIHI9JzM4JyBmaWxsPScjNTU1NTU1JyBzdHJva2U9JyNmZmZmZmYnIHN0cm9rZS13aWR0aD0nNCcvPmA7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvblNyY1NWRyArPSBgPC9zdmc+YDtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uLmlubmVySFRNTCA9IGNhcHR1cmVCdXR0b25TcmNTVkc7XG4gICAgICAgICAgY2FwdHVyZVVJLmFwcGVuZENoaWxkKGNhcHR1cmVCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIGNhcHR1cmVVSVdyYXAuYXBwZW5kQ2hpbGQoY2FwdHVyZVVJKTtcbiAgICAgICAgY29uc3QgX3RoaXNfID0gdGhpcztcbiAgICAgICAgY29uc3QgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXNfLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgICAgICAgIGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgX3RoaXNfLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgX3RoaXNfLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS52aWRlbywge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXNfLl9fc2V0U3R5bGUoZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5jYXB0dXJlQnV0dG9uLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgIHByZXZpZXdVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByZXZpZXdVSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdVSVdyYXAnKTtcbiAgICAgIGNvbnN0IHByZXZpZXdVSVdyYXBTdHlsZSA9IHtcbiAgICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMDAwMDAwYWEnXG4gICAgICB9O1xuICAgICAgdGhpcy5fX3NldFN0eWxlKHByZXZpZXdVSVdyYXAsIHByZXZpZXdVSVdyYXBTdHlsZSk7XG4gICAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmlld1VJV3JhcCk7XG4gICAgICBpZiAoIXByZXZpZXdVSSkge1xuICAgICAgICBwcmV2aWV3VUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJldmlld1VJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUknKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAnbWF4LXdpZHRoJzogJzkwJScsXG4gICAgICAgICdtYXgtaGVpZ2h0JzogJzkwJSdcbiAgICAgIH0pO1xuICAgICAgcHJldmlld1VJV3JhcC5hcHBlbmRDaGlsZChwcmV2aWV3VUkpO1xuICAgICAgaWYgKCFwcmV2aWV3SW1hZ2UpIHtcbiAgICAgICAgcHJldmlld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld0ltYWdlJyk7XG4gICAgICAgIHByZXZpZXdVSS5hcHBlbmRDaGlsZChwcmV2aWV3SW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICBzd2l0Y2hVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHN3aXRjaFVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnc3dpdGNoVUlXcmFwJyk7XG4gICAgICBjb25zdCBzd2l0Y2hVSVdyYXBTdHlsZSA9IHtcbiAgICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICcnLFxuICAgICAgICB3aWR0aDogJycsXG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShzd2l0Y2hVSVdyYXAsIHN3aXRjaFVJV3JhcFN0eWxlKTtcbiAgICAgIG9jci5hcHBlbmRDaGlsZChzd2l0Y2hVSVdyYXApO1xuICAgICAgaWYgKCFzd2l0Y2hVSSkge1xuICAgICAgICBzd2l0Y2hVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzd2l0Y2hVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnc3dpdGNoVUknKTtcbiAgICAgICAgbGV0IHN3aXRjaEhUTUwgPSBgYDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgPGRpdiBjbGFzcz0nY3VzdG9tLS1sYWJlbCBmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBnYXAxMCc+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8bGFiZWwgZm9yPSdtYW51YWwtc3dpdGNoLXdhc20tdG8tc2VydmVyLWNoZWNrYm94Jz5XQVNNPC9sYWJlbD5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGAgIDxsYWJlbCBjbGFzcz0nc3dpdGNoJz5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGAgICAgPGlucHV0IGlkPSdtYW51YWwtc3dpdGNoLXdhc20tdG8tc2VydmVyLWNoZWNrYm94JyB0eXBlPSdjaGVja2JveCc+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICAgIDxzcGFuIGNsYXNzPSdzbGlkZXIgcm91bmQnPjwvc3Bhbj5gO1xuICAgICAgICBzd2l0Y2hIVE1MICs9IGAgIDwvbGFiZWw+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8bGFiZWwgZm9yPSdwcmlvcml0eS1maW5hbmNlLWNvaHRtbEZvcmxpc3QtY2hlY2tib3gnPlNlcnZlcjwvbGFiZWw+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgPC9kaXY+YDtcbiAgICAgICAgc3dpdGNoVUkuaW5uZXJIVE1MID0gc3dpdGNoSFRNTDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zZXRTdHlsZShzd2l0Y2hVSSwge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgIH0pO1xuICAgICAgc3dpdGNoVUlXcmFwLmFwcGVuZENoaWxkKHN3aXRjaFVJKTtcbiAgICAgIGNvbnN0IHN3aXRjaENoZWNrYm94ID0gc3dpdGNoVUkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgICAgY29uc3QgX19vbkNsaWNrU3dpdGNoVUkgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXNfLl9faXNTd2l0Y2hUb1NlcnZlck1vZGUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgYXdhaXQgX3RoaXNfLnJlc3RhcnRPQ1IoX3RoaXNfLl9fb2NyVHlwZSwgX3RoaXNfLl9fb25TdWNjZXNzLCBfdGhpc18uX19vbkZhaWx1cmUsIF90aGlzXy5fX29uSW5Qcm9ncmVzc0NoYW5nZSwgdHJ1ZSk7XG4gICAgICB9O1xuICAgICAgc3dpdGNoQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX29uQ2xpY2tTd2l0Y2hVSSwge1xuICAgICAgICBvbmNlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBsb2FkaW5nIFVJIOychOy5mCDsnpDrpqzsnqHqsowg7ZWY6riwIOychO2VtFxuICAgIGF3YWl0IHRoaXMuX19pbml0U3R5bGUoKTtcblxuICAgIC8vIO2ZlOuptOqzvOuPhCDtmITsg4Eg7ZW06rKwXG4gICAgdGhpcy5fX3NldFN0eWxlKG9jciwge1xuICAgICAgZGlzcGxheTogJydcbiAgICB9KTtcbiAgICB0aGlzLl9fb2NyID0gb2NyO1xuICAgIHRoaXMuX19jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5fX3JvdGF0aW9uQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgdGhpcy5fX3ZpZGVvID0gdmlkZW87XG4gICAgdGhpcy5fX3ZpZGVvV3JhcCA9IHZpZGVvV3JhcDtcbiAgICB0aGlzLl9fZ3VpZGVCb3ggPSBndWlkZUJveDtcbiAgICB0aGlzLl9fZ3VpZGVCb3hXcmFwID0gZ3VpZGVCb3hXcmFwO1xuICAgIHRoaXMuX19tYXNrQm94V3JhcCA9IG1hc2tCb3hXcmFwO1xuICAgIHRoaXMuX19wcmV2ZW50VG9GcmVlemVWaWRlbyA9IHByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICAgIHRoaXMuX19jdXN0b21VSVdyYXAgPSBjdXN0b21VSVdyYXA7XG4gICAgdGhpcy5fX3RvcFVJID0gdG9wVUk7XG4gICAgdGhpcy5fX21pZGRsZVVJID0gbWlkZGxlVUk7XG4gICAgdGhpcy5fX2JvdHRvbVVJID0gYm90dG9tVUk7XG4gICAgdGhpcy5fX2NhcHR1cmVVSVdyYXAgPSBjYXB0dXJlVUlXcmFwO1xuICAgIHRoaXMuX19jYXB0dXJlVUkgPSBjYXB0dXJlVUk7XG4gICAgdGhpcy5fX2NhcHR1cmVCdXR0b24gPSBjYXB0dXJlQnV0dG9uO1xuICAgIHRoaXMuX19wcmV2aWV3VUlXcmFwID0gcHJldmlld1VJV3JhcDtcbiAgICB0aGlzLl9fcHJldmlld1VJID0gcHJldmlld1VJO1xuICAgIHRoaXMuX19wcmV2aWV3SW1hZ2UgPSBwcmV2aWV3SW1hZ2U7XG4gICAgdGhpcy5fX3N3aXRjaFVJV3JhcCA9IHN3aXRjaFVJV3JhcDtcbiAgICB0aGlzLl9fc3dpdGNoVUkgPSBzd2l0Y2hVSTtcbiAgICByZXR1cm4ge1xuICAgICAgb2NyLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICB2aWRlbyxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZSxcbiAgICAgIHN3aXRjaFVJV3JhcCxcbiAgICAgIHN3aXRjaFVJXG4gICAgfTtcbiAgfVxuICBfX2JsdXJDYXB0dXJlQnV0dG9uKCkge1xuICAgIHRoaXMuX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnZpZGVvLCB7XG4gICAgICBkaXNwbGF5OiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IHtcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FwdHVyZUJ1dHRvbikge1xuICAgICAgY2FwdHVyZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlQnV0dG9uLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICByZXR1cm4gY2FwdHVyZUJ1dHRvbiA/IGNhcHR1cmVCdXR0b24uZ2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJykgPT09ICd0cnVlJyA6IGZhbHNlO1xuICB9XG4gIGFzeW5jIF9fc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KSB7XG4gICAgLy8gd2FzbSDsnbjsi53shLHriqUg7LWc7KCB7ZmU65CcIO2VtOyDgeuPhFxuICAgIHRoaXMuX19yZXNvbHV0aW9uV2lkdGggPSAxMDgwO1xuICAgIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ID0gNzIwO1xuICAgIHRoaXMuX19jYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gYXdhaXQgdGhpcy5fX3NldHVwRG9tRWxlbWVudHMoKTtcbiAgICBsZXQgY2FtZXJhID0gYXdhaXQgdGhpcy5fX2dldElucHV0RGV2aWNlcygpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb0RldmljZXMgOjogJywgY2FtZXJhKVxuXG4gICAgdGhpcy5jaGVja1VJT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29uc3RyYWludFdpZHRoLCBjb25zdHJhaW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy5jYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWEgPT09ICdoaWdoUXVhbGl0eScpIHtcbiAgICAgIC8vIOy5tOuplOudvCDtlbTsg4Hrj4Qg7ISk7KCVIDog7ZmU7KeIIOyasOyEoFxuICAgICAgLy8gMTkyMHgxMDgw7J20IOqwgOuKpe2VnOqyveyasCDsgqzsmqkg7JWE64uI66m0IDEyODB4NzIwIOyCrOyaqVxuICAgICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAgIC8vIHVpIDogcG9ydHJhaXRcbiAgICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICAgIG1pbjogMTA4MCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgICAgbWluOiA3MjAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVpIDogbGFuZHNjYXBlXG4gICAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgICBtaW46IDEyODBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgICBtaW46IDcyMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyAnY29tcGF0aWJpbGl0eSdcbiAgICAgIC8vIOy5tOuplOudvCDtlbTsg4Hrj4Qg7ISk7KCVIDog7Zi47ZmY7ISxIOyasOyEoFxuICAgICAgLy8gMTkyMHgxMDgw7J20IOyCrOyaqSDqsIDriqXtlZjrjZTrnbzrj4QgMTI4MHg3MjDsnYQg7IKs7Jqp7ZWY64+E66GdIOqzoOyglVxuICAgICAgLy8g7IKs7JygIDog6rCk65+t7IucIGVudHJ5IOuqqOuNuChB7Iuc66as7KaIIC8gV2lkZSDrqqjrjbgg65OxKeyXkOyEnCAxOTIwIHggMTA4MCDsspjrpqzsi5wg67mE7Jyo7J20IOydtOyDge2VtOynkCjtmYDsrYnsnbTrkKgpXG4gICAgICAvLyDtla3sg4EgMTI4MCB4IDcyMOydhCDsgqzsmqntlZjrj4TroZ0g67OA6rK9XG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxMjgwXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDcyMFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB2aWRlbzoge1xuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgaWRlYWw6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZmFjaW5nTW9kZToge1xuICAgICAgICAgIGlkZWFsOiB0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnRcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICB3aGl0ZUJhbGFuY2VNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2VJZDogY2FtZXJhLmxlbmd0aCA/IHtcbiAgICAgICAgICBpZGVhbDogY2FtZXJhW2NhbWVyYS5sZW5ndGggLSAxXVxuICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgd2lkdGg6IGNvbnN0cmFpbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb25zdHJhaW50SGVpZ2h0XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIOy1nOy0iCDsp4TsnoUg7J207Ja07IScIHZpZGVvRGVpdmNlIOumrOyKpO2KuOulvCDqsIDsoLjsmKwg7IiYIOyXhuycvOuptCxcbiAgICAvLyBnZXRVc2VyTWVkaWHrpbwg7J6E7J2YIO2YuOy2nO2VmOyXrCDqtoztlZzsnYQg67Cb7J2A65KkIOuLpOyLnCDqsIDsoLjsmLRcbiAgICBpZiAoY2FtZXJhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgY2FtZXJhID0gYXdhaXQgdGhpcy5fX2dldElucHV0RGV2aWNlcygpO1xuICAgICAgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSBjYW1lcmEubGVuZ3RoID8ge1xuICAgICAgICBpZGVhbDogY2FtZXJhW2NhbWVyYS5sZW5ndGggLSAxXVxuICAgICAgfSA6IG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBkdW1wdHJhY2sgPSAoW2EsIGJdLCB0cmFjaykgPT5cbiAgICAgIC8vICAgYCR7YX0ke3RyYWNrLmtpbmQgPT0gJ3ZpZGVvJyA/ICdDYW1lcmEnIDogJ01pY3JvcGhvbmUnfSAoJHt0cmFjay5yZWFkeVN0YXRlfSk6ICR7dHJhY2subGFiZWx9JHtifWA7XG5cbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIC8vIHRoaXMuX19kZWJ1ZygndmlkZW9UcmFja3MgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpO1xuICAgICAgY29uc3Qgc3RyZWFtU2V0dGluZ3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRTZXR0aW5ncygpO1xuICAgICAgLy8gdGhpcy5fX2RlYnVnKFxuICAgICAgLy8gICAnc3RyZWFtQ2FwYWJpbGl0aWVzIDo6ICcsXG4gICAgICAvLyAgIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENhcGFiaWxpdGllcygpXG4gICAgICAvLyApO1xuICAgICAgLy8gdGhpcy5fX2RlYnVnKCdzdHJlYW0gOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q29uc3RyYWludHMoKSk7XG4gICAgICAvLyB0aGlzLl9fZGVidWcoJ3N0cmVhbVNldHRpbmdzIDo6ICcsIHN0cmVhbVNldHRpbmdzKTtcbiAgICAgIHRoaXMuX19kZWJ1Zyhgc3RyZWFtIHdpZHRoICogaGVpZ2h0IDo6ICR7c3RyZWFtU2V0dGluZ3Mud2lkdGh9ICogJHtzdHJlYW1TZXR0aW5ncy5oZWlnaHR9YCk7XG4gICAgICB0aGlzLl9fZGVidWcoJ3N0cmVhbSB3aWR0aCAvIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGggLyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgdGhpcy5fX2RlYnVnKCdzdHJlYW0gYXNwZWN0UmF0aW8gOjogJyArIHN0cmVhbVNldHRpbmdzLmFzcGVjdFJhdGlvKTtcbiAgICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICBbcm90YXRpb25DYW52YXMud2lkdGgsIHJvdGF0aW9uQ2FudmFzLmhlaWdodF0gPSBbdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2luaXRTdHlsZSgpIHtcbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuXG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQ7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IG9jci5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzO1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy5fX2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuX192aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpOuhnCDqsITso7xcbiAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSSAmJiDqsIDroZwg67mE65SU7Jik66GcIOqwhOyjvFxuICAgICAgLy8g67mE65SU7Jik66W8IOqwgOuhnCBVSeydmCBoZWlnaHQg6riw7KSA7Jy866GcIOykhOydtOqzoFxuICAgICAgLy8g6rCA66GcIFVJIGhlaWdodCDquLDspIDsnLzroZwg67mE65SU7Jik7J2YIHdpZHRoIOqzhOyCsFxuICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveFdpZHRoID0gZ3VpZGVCb3hXaWR0aCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveEhlaWdodCA9IGd1aWRlQm94SGVpZ2h0ICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgaWYgKHRvcFVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodG9wVUksIHtcbiAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYm90dG9tVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShib3R0b21VSSwge1xuICAgICAgICAncGFkZGluZy10b3AnOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoJyNtYXNrQm94SW5uZXInKTtcbiAgICBsZXQgciA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoICogMjtcbiAgICByID0gciA8IDAgPyAwIDogcjtcbiAgICBpZiAoIWlzTmFOKHJlZHVjZWRHdWlkZUJveFdpZHRoKSAmJiAhaXNOYU4ocmVkdWNlZEd1aWRlQm94SGVpZ2h0KSAmJiAhaXNOYU4oYm9yZGVyUmFkaXVzKSAmJiAhaXNOYU4oYm9yZGVyV2lkdGgpKSB7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJXaWR0aCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgbWFza0JveElubmVyV2lkdGggLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgbWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncngnLCByICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCByICsgJycpO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2FkanVzdFN0eWxlKCkge1xuICAgIGNvbnN0IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEgPSAoYSwgYikgPT4ge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLmNhbGNHdWlkZUJveENyaXRlcmlhID09PSAnY2FtZXJhUmVzb2x1dGlvbicpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKGEsIGIpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9fb3B0aW9ucy5jYWxjR3VpZGVCb3hDcml0ZXJpYSA9PT0gJ29jclZpZXdTaXplJykge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoYSwgYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oYSwgYik7IC8vIGRlZmF1bHQgOiBjYW1lcmFSZXNvbHV0aW9uXG4gICAgICB9XG4gICAgfTtcblxuICAgIHZvaWQgMDtcbiAgICBjb25zdCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlXcmFwLFxuICAgICAgY2FwdHVyZVVJLFxuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuXG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQ7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IG9jci5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLl9fdmlkZW9PcmllbnRhdGlvbjtcbiAgICBpZiAoY2FsY1ZpZGVvV2lkdGggPT09IDAgfHwgY2FsY1ZpZGVvSGVpZ2h0ID09PSAwIHx8IGNhbGNWaWRlb0NsaWVudFdpZHRoID09PSAwIHx8IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGg7XG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXM7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY1ZpZGVvV2lkdGgsIGNhbGNWaWRlb0hlaWdodF0gPSBbY2FsY1ZpZGVvSGVpZ2h0LCBjYWxjVmlkZW9XaWR0aF07XG4gICAgICBbY2FsY1ZpZGVvQ2xpZW50V2lkdGgsIGNhbGNWaWRlb0NsaWVudEhlaWdodF0gPSBbY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9DbGllbnRXaWR0aF07XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgbmV3VmlkZW9XaWR0aCA9IGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGxldCBuZXdWaWRlb0hlaWdodCA9IGNhbGNWaWRlb0NsaWVudEhlaWdodDtcbiAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IHRoaXMuX19ndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICBjb25zdCB2aWRlb1JhdGlvQnlIZWlnaHQgPSB0aGlzLl9fdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgIGNvbnN0IG5ld1ZpZGVvUmF0aW9CeVdpZHRoID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC8gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgY29uc3QgbmV3VmlkZW9SYXRpb0J5SGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50V2lkdGggLyBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUlcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCB7XG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2ZsZXgtZW5kJ1xuICAgICAgfSk7XG4gICAgICAvLyB2aWRlbyDqsIDroZwg6riw7KSAIDEwMCUg7Jyg7KeAICjrs4Dqsr3sl4bsnYwpXG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuPhCDshLjroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7ZmV64yAXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiBuZXdWaWRlb1JhdGlvQnlXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDruYTrlJTsmKQg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNWaWRlb0NsaWVudEhlaWdodCwgY2FsY1ZpZGVvSGVpZ2h0KTtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6rCA66GcIFVJXG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJV3JhcCwge1xuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2VuZCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInXG4gICAgICB9KTtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g67mE65SU7Jik66W8IOqwgOuhnCBVSeydmCBoZWlnaHQg6riw7KSA7Jy866GcIOykhOydtOqzoFxuICAgICAgICAvLyDqsIDroZwgVUkgaGVpZ2h0IOq4sOykgOycvOuhnCDruYTrlJTsmKTsnZggd2lkdGgg6rOE7IKwXG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk64qUIOyEuOuhnCDquLDspIDsnLzroZwg66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9IZWlnaHQpICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIOu5hOuUlOyYpOulvCDshLjroZwg6riw7KSA7Jy866GcIOuLpOyLnCDrp57stqRcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBndWlkZUJveEhlaWdodDtcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IG5ld1ZpZGVvSGVpZ2h0ICogbmV3VmlkZW9SYXRpb0J5SGVpZ2h0O1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCDqsIDroZwg7YGs6riw6rCAIOqwgOuhnCBVSSB3aWR0aCAqIHJhdGlvIOqwkuuztOuLpCDtgazrqbQsXG4gICAgICAgIGlmIChndWlkZUJveFdpZHRoID4gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50V2lkdGgsIGNhbGNWaWRlb1dpZHRoKSAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gX19jYWxjR3VpZGVCb3hDcml0ZXJpYShjYWxjT2NyQ2xpZW50V2lkdGgsIGNhbGNWaWRlb1dpZHRoKSAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuXG4gICAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiBuZXdWaWRlb1JhdGlvQnlXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIGhlaWdodCDtgazquLDrpbwgVUnsnZggaGVpZ2h0IOq4sOykgOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRIZWlnaHQsIGNhbGNWaWRlb0hlaWdodCkgKiB2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIOqwgOuhnCDtgazquLDqsIAg6rCA66GcIFVJIHdpZHRoICogcmF0aW8g6rCS67O064ukIO2BrOuptCxcbiAgICAgICAgaWYgKGd1aWRlQm94V2lkdGggPiBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGgpIHtcbiAgICAgICAgICAvLyDqs4TsgrAg67Cp7Iud7J2EIOuwlOq+vOuLpCAo7IKs7JygIDog6rGw7J2YIOygleyCrOqwge2YleyXkCDqsIDquYzsmrQg6rK97JqwIOqwgOydtOuTnCDrsJXsiqQg6rCA66Gc6rCAIOq9ieywqOqyjCDrkKguKVxuICAgICAgICAgIGd1aWRlQm94V2lkdGggPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIOy2leyGjFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogbmV3VmlkZW9SYXRpb0J5V2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FsY0d1aWRlQm94Q3JpdGVyaWEo7Lm066mU6528IO2VtOyDgeuPhCDshKTsoJUg6riw7KSAKeqwgCBvY3JWaWV3U2l6ZSjtmZTrqbQg7YGs6riwKSDquLDspIDsnbzrlYxcbiAgICBpZiAodGhpcy5fX29wdGlvbnMuY2FsY0d1aWRlQm94Q3JpdGVyaWEgPT09ICdvY3JWaWV3U2l6ZScpIHtcbiAgICAgIC8vIGd1aWRlQm94SGVpZ2h0IOydtCBjYWxjT2NyQ2xpZW50SGVpZ2h0IOuztOuLpCDtgbDqsr3smrAo6rCA7J2065Oc67CV7Iqk6rCAIO2ZlOuptOydhCDrhJjslrTqsIDripQg6rK97JqwKSDri6Tsi5wg6rOE7IKwXG4gICAgICBpZiAoZ3VpZGVCb3hIZWlnaHQgPiBjYWxjT2NyQ2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gTWF0aC5taW4oY2FsY09jckNsaWVudEhlaWdodCwgY2FsY1ZpZGVvSGVpZ2h0KSAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIG5ld1ZpZGVvUmF0aW9CeVdpZHRoO1xuICAgICAgfVxuXG4gICAgICAvLyBndWlkZUJveEhlaWdodCDsnbQgY2FsY09jckNsaWVudEhlaWdodCDrs7Tri6Qg7YGw6rK97JqwKOqwgOydtOuTnOuwleyKpOqwgCDtmZTrqbTsnYQg64SY7Ja06rCA64qUIOqyveyasCkg64uk7IucIOqzhOyCsFxuICAgICAgaWYgKGd1aWRlQm94V2lkdGggPiBjYWxjT2NyQ2xpZW50V2lkdGgpIHtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IE1hdGgubWluKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogbmV3VmlkZW9SYXRpb0J5V2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGggPSBNYXRoLm1pbihndWlkZUJveFdpZHRoLCBuZXdWaWRlb1dpZHRoKTtcbiAgICB0aGlzLl9fY3JvcEltYWdlU2l6ZUhlaWdodCA9IE1hdGgubWluKGd1aWRlQm94SGVpZ2h0LCBuZXdWaWRlb0hlaWdodCk7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveFdpZHRoID0gZ3VpZGVCb3hXaWR0aCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveEhlaWdodCA9IGd1aWRlQm94SGVpZ2h0ICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgaWYgKHRvcFVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodG9wVUksIHtcbiAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYm90dG9tVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShib3R0b21VSSwge1xuICAgICAgICAncGFkZGluZy10b3AnOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnXG4gICAgfSk7XG4gICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICBoZWlnaHQ6IG5ld1ZpZGVvSGVpZ2h0ICsgJ3B4J1xuICAgIH0pO1xuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoJyNtYXNrQm94SW5uZXInKTtcbiAgICBsZXQgciA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoICogMjtcbiAgICByID0gciA8IDAgPyAwIDogcjtcbiAgICBpZiAoIWlzTmFOKHJlZHVjZWRHdWlkZUJveFdpZHRoKSAmJiAhaXNOYU4ocmVkdWNlZEd1aWRlQm94SGVpZ2h0KSAmJiAhaXNOYU4oYm9yZGVyUmFkaXVzKSAmJiAhaXNOYU4oYm9yZGVyV2lkdGgpKSB7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJXaWR0aCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgbWFza0JveElubmVyV2lkdGggLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgbWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncngnLCByICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCByICsgJycpO1xuICAgIH1cblxuICAgIC8vIOyImOuPmSDstKzsmIEgVUkg7IKs7JqpXG4gICAgLy8gZmlyc3RDYWxsZWTsnbgg6rK97JqwIOyVhOyngSBjYXB0dXJlVUnqsIAg6re466Ck7KeA7KeAIOyViuyVhCDrrLTsnZjrr7hcbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyAmJiBib3R0b21VSSAmJiBjYXB0dXJlVUkpIHtcbiAgICAgICAgY29uc3QgY2FsY1N1bU9mSGVpZ2h0Qm90dG9tVUlDaGlsZE5vZGVzID0gdGhpcy5fX2NhbGNTdW1PZkhlaWdodENoaWxkTm9kZXMoYm90dG9tVUkpO1xuICAgICAgICBsZXQgY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPSBjYXB0dXJlQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpLmdldEF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0ID0gY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPT09IDAgPyA4MCA6IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0O1xuICAgICAgICBsZXQgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSA9IGJvdHRvbVVJLmNsaWVudEhlaWdodDtcbiAgICAgICAgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSAtPSBpc05hTihwYXJzZUludChib3R0b21VSS5zdHlsZS5wYWRkaW5nVG9wKSkgPyAwIDogcGFyc2VJbnQoYm90dG9tVUkuc3R5bGUucGFkZGluZ1RvcCk7XG4gICAgICAgIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gLT0gY2FsY1N1bU9mSGVpZ2h0Qm90dG9tVUlDaGlsZE5vZGVzO1xuICAgICAgICBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIC09IGNhbGNDYXB0dXJlQnV0dG9uSGVpZ2h0O1xuICAgICAgICBjb25zdCBiYXNlbGluZSA9IGNhbGNPY3JDbGllbnRIZWlnaHQgLSAoY2FsY09jckNsaWVudEhlaWdodCAvIDIgKyBndWlkZUJveEhlaWdodCAvIDIpO1xuICAgICAgICBpZiAoY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSA+IDAgJiYgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSA8IGJhc2VsaW5lKSB7XG4gICAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiAnJyxcbiAgICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6IGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgICAncGFkZGluZy1yaWdodCc6ICcxMHB4JyxcbiAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuX19pblByb2dyZXNzU3RlcCwgdHJ1ZSk7XG4gICAgdm9pZCAwO1xuICB9XG4gIF9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2RlcyhvYmopIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb2JqPy5jaGlsZE5vZGVzKSB7XG4gICAgICBzdW0gKz0gaXRlbS5jbGllbnRIZWlnaHQgPyBpdGVtLmNsaWVudEhlaWdodCA6IDA7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG4gIH1cbiAgX19jbG9zZUNhbWVyYSgpIHtcbiAgICB0aGlzLl9fY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICB9XG4gIGFzeW5jIF9fbG9hZFJlc291cmNlcygpIHtcbiAgICB2b2lkIDA7XG4gICAgaWYgKHRoaXMuX19yZXNvdXJjZXNMb2FkZWQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2lzU3VwcG9ydFNpbWQgPSBhd2FpdCBzaW1kKCk7XG4gICAgbGV0IGVudkluZm8gPSAnJztcbiAgICBlbnZJbmZvICs9IGBvcyA6ICR7dGhpcy5fX2RldmljZUluZm8ub3N9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBvc1NpbXBsZSA6ICR7dGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGV9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBpc1N1cHBvcnRXYXNtOiAke3RoaXMuX19pc1N1cHBvcnRXYXNtfVxcbmA7XG4gICAgZW52SW5mbyArPSBgc2ltZCh3YXNtLWZlYXR1cmUtZGV0ZWN0KSA6ICR7dGhpcy5fX2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBpZiAodGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGUgPT09ICdJT1MnIHx8IHRoaXMuX19kZXZpY2VJbmZvLm9zU2ltcGxlID09PSAnTUFDJykge1xuICAgICAgdGhpcy5fX2lzU3VwcG9ydFNpbWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZW52SW5mbyArPSBgaXNTdXBwb3J0U2ltZChmaW5hbCkgOiAke3RoaXMuX19pc1N1cHBvcnRTaW1kfVxcbmA7XG4gICAgZW52SW5mbyArPSBgVXNlckFnZW50IDogJHtuYXZpZ2F0b3IudXNlckFnZW50fVxcbmA7XG4gICAgdm9pZCAwO1xuICAgIHRoaXMuX19kZWJ1ZyhlbnZJbmZvKTtcbiAgICB3aW5kb3cudXNlYk9DUkVudkluZm8gPSBlbnZJbmZvO1xuICAgIGxldCBzZGtTdXBwb3J0RW52ID0gJ3F1cmFtJztcbiAgICBpZiAodGhpcy5fX2lzU3VwcG9ydFNpbWQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHNka1N1cHBvcnRFbnYgKz0gJ19zaW1kJztcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgICB2b2lkIDA7XG4gICAgd2luZG93LnVzZWJPQ1JFbnZJbmZvID0gZW52SW5mbztcbiAgICB2b2lkIDA7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChzZGtTdXBwb3J0RW52ICsgJy5qcycsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xuICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG5cbiAgICAgIC8vIGRhdGEobW9kZWwpXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcKGZ1bmN0aW9uXFwoXFwpIFxcey9tLCAndmFyIGNyZWF0ZU1vZGVsRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnLCAnICAgcmVqZWN0KCk7XFxuJyArICcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgfSwgaGFuZGxlRXJyb3IpJywgJyAgcmVzb2x2ZSgpO1xcbicgKyAnICB9LCBoYW5kbGVFcnJvciknKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFx9XFwpXFwoXFwpOy9tLCAnXFxuIH0pXFxuJyArICd9OycpO1xuXG4gICAgICAvLyB3YXNtXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShzZGtTdXBwb3J0RW52ICsgJy53YXNtJywgbmV3IFVSTChzZGtTdXBwb3J0RW52ICsgJy53YXNtJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKG5ldyBSZWdFeHAoYFJFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXSR7c2RrU3VwcG9ydEVudn1cXFxcLmRhdGFbXCInXWAsICdnbScpLCBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwiJHtuZXcgVVJMKHNka1N1cHBvcnRFbnYgKyAnLmRhdGEnLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWZ9XCJgKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCdmdW5jdGlvbiBjcmVhdGVXYXNtJywgJ2FzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdhc20nKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCdpbnN0YW50aWF0ZUFzeW5jKCk7JywgJ2F3YWl0IGluc3RhbnRpYXRlQXN5bmMoKTsnKTtcblxuICAgICAgLy8gd2FzbSBhbmQgZGF0YShtb2RlbCkgZmlsZSDrs5HroKzroZwgZmV0Y2gg7ZWY6riwIOychO2VtFxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ3ZhciBhc20gPSBjcmVhdGVXYXNtKCk7JywgJ2NvbnNvbGUubG9nKFwiY3JlYXRlIHdhc20gYW5kIGRhdGEgLSBzdGFydFwiKVxcbicgKyAnYXdhaXQgKGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWRXYXNtID0gZmFsc2U7XFxuJyArICcgICAgdmFyIGlzQ3JlYXRlZERhdGEgPSBmYWxzZTtcXG4nICsgJyAgICBjcmVhdGVXYXNtKCkudGhlbigoKSA9PiB7XFxuJyArICcgICAgICBpc0NyZWF0ZWRXYXNtID0gdHJ1ZTtcXG4nICsgJyAgICAgIGlmIChpc0NyZWF0ZWREYXRhKSB7IHJlc29sdmUoKTsgfVxcbicgKyAnICAgIH0pO1xcbicgKyAnICAgIGNyZWF0ZU1vZGVsRGF0YSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkRGF0YSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkV2FzbSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KVxcbicgKyAnICB9KTtcXG4nICsgJ30pKCk7XFxuJyArICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gZW5kXCIpJyk7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH0pO1xuICAgIHNyYyA9IGBcbiAgICAoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAke3NyY31cbiAgICAgIE1vZHVsZS5sZW5ndGhCeXRlc1VURjggPSBsZW5ndGhCeXRlc1VURjhcbiAgICAgIE1vZHVsZS5zdHJpbmdUb1VURjggPSBzdHJpbmdUb1VURjhcbiAgICAgIHJldHVybiBNb2R1bGVcbiAgICB9KSgpXG4gICAgICAgIGA7XG4gICAgdGhpcy5fX09DUkVuZ2luZSA9IGF3YWl0IGV2YWwoc3JjKTtcbiAgICB0aGlzLl9fT0NSRW5naW5lLm9uUnVudGltZUluaXRpYWxpemVkID0gYXN5bmMgXyA9PiB7XG4gICAgICB2b2lkIDA7XG4gICAgfTtcbiAgICBhd2FpdCB0aGlzLl9fT0NSRW5naW5lLm9uUnVudGltZUluaXRpYWxpemVkKCk7XG4gICAgdGhpcy5fX3Jlc291cmNlc0xvYWRlZCA9IHRydWU7XG4gICAgdm9pZCAwO1xuICB9XG4gIF9fc3RhcnRTY2FuV2FzbUltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX19kZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7XG4gICAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBTVEFSVFxuICAgICAgLy8gdGhpcy5fX3NldFBpaUVuY3J5cHRNb2RlKHRoaXMuX19vcHRpb25zLnVzZVBpaUVuY3J5cHRNb2RlKTsgLy8gb2NyIHJlc3VsdCBlbmNyeXB0XG4gICAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBFTkRcbiAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgdGhpcy5fX2FkZHJlc3MgPSAwO1xuICAgICAgdGhpcy5fX3BhZ2VFbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgICAgIHRoaXMuX19zc2FSZXRyeUNvdW50ID0gMDtcbiAgICAgIGNvbnN0IHNjYW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgICBpc0RldGVjdGVkQ2FyZCA9IG51bGwsXG4gICAgICAgICAgICBpbWdEYXRhID0gbnVsbCxcbiAgICAgICAgICAgIGltZ0RhdGFVcmwgPSBudWxsLFxuICAgICAgICAgICAgbWFza0ltYWdlID0gbnVsbCxcbiAgICAgICAgICAgIGZhY2VJbWFnZSA9IG51bGwsXG4gICAgICAgICAgICBzc2FSZXN1bHQgPSBudWxsLFxuICAgICAgICAgICAgc3NhUmVzdWx0TGlzdCA9IFtdLFxuICAgICAgICAgICAgbWFza0luZm8gPSBudWxsO1xuXG4gICAgICAgICAgLy8gYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgICBpZiAoIXRoaXMuX19PQ1JFbmdpbmVbJ2FzbSddKSByZXR1cm47XG5cbiAgICAgICAgICAvLyBUT0RPIDog7ISk7KCV7ZWg7IiYIOyeiOqyjCDrs4Dqsr0gIGRlZmF1bHQg6rCS64+EIOygnOqztVxuICAgICAgICAgIGNvbnN0IFtyZXNvbHV0aW9uX3csIHJlc29sdXRpb25faF0gPSBbdGhpcy5fX3Jlc29sdXRpb25XaWR0aCwgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHZpZGVvXG4gICAgICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICAgICAgaWYgKHJlc29sdXRpb25fdyA9PT0gMCB8fCByZXNvbHV0aW9uX2ggPT09IDApIHJldHVybjtcbiAgICAgICAgICBpZiAodGhpcy5fX2RldGVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYmVmb3JlIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuICAgICAgICAgIGlmICh0aGlzLl9fYWRkcmVzcyA9PT0gMCAmJiAhdGhpcy5fX3BhZ2VFbmQgJiYgKGF3YWl0IHRoaXMuX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW8pKSkge1xuICAgICAgICAgICAgW3RoaXMuX19hZGRyZXNzLCB0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFja10gPSB0aGlzLl9fZ2V0U2Nhbm5lckFkZHJlc3ModGhpcy5fX29jclR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuX19hZGRyZXNzIHx8IHRoaXMuX19wYWdlRW5kKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYWZ0ZXIgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fX29jclN0YXR1cyA8IHRoaXMuT0NSX1NUQVRVUy5PQ1JfU1VDQ0VTUykge1xuICAgICAgICAgICAgLy8gT0NSIOyZhOujjCDsnbTsoIQg7IOB7YOcXG5cbiAgICAgICAgICAgIC8vIGNhcmQgbm90IGRldGVjdGVkXG4gICAgICAgICAgICBbaXNEZXRlY3RlZENhcmQsIGltZ0RhdGEsIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy5fX2lzQ2FyZGJveERldGVjdGVkKHRoaXMuX19hZGRyZXNzLCAwKTtcbiAgICAgICAgICAgIGlmICghaXNEZXRlY3RlZENhcmQpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX19pblByb2dyZXNzU3RlcCAhPT0gdGhpcy5JTl9QUk9HUkVTUy5SRUFEWSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX0ZBSUxFRCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQsIGZhbHNlLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKGZhbHNlKTsgLy8g7ZWE7JqU7ZWc6rCAP1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjYXJkIGlzIGRldGVjdGVkXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9TVUNDRVNTKTtcblxuICAgICAgICAgICAgLy8gc3NhIHJldHJ5IOyEpOygleydtCDrkJjslrQg7J6I7Jy86rGw64KYLCDsiJjrj5nstKzsmIFVSeulvCDsgqzsmqntlZjripQg6rK97JqwLCBjYXJkIGRldGVjdCDshLHqs7Xsi5wg7J2066+47KeAIOyggOyepVxuICAgICAgICAgICAgdGhpcy5fX2VucXVldWVEZXRlY3RlZENhcmRRdWV1ZShpbWdEYXRhLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUodHJ1ZSk7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MsIGZhbHNlLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtvY3JSZXN1bHQsIGltZ0RhdGFVcmwsIG1hc2tJbWFnZSwgZmFjZUltYWdlXSA9IGF3YWl0IHRoaXMuX19zdGFydFJlY29nbml0aW9uKHRoaXMuX19hZGRyZXNzLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX3NzYU1vZGUsIHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCksIGltZ0RhdGEsIGltZ0RhdGFVcmwpO1xuXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgLy8gICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgICAgICAgIC8vICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZShmYWxzZSk7ICAgICAgICAvLyDtlYTsmpTtlZzqsIA/XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuX19vY3JTdGF0dXMgPj0gdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBvY3Ig7JmE66OMIOydtO2bhCDsg4Htg5xcblxuICAgICAgICAgICAgLy8gZmFpbHVyZSBjYXNlXG4gICAgICAgICAgICBpZiAob2NyUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9DUiBTdGF0dXMgaXMgJHt0aGlzLl9fb2NyU3RhdHVzfSwgYnV0IG9jclJlc3VsdCBpcyBmYWxzZWApOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTsgLy8gT0NSIOyZhOujjCDsi5zsoJDsl5AgY2FtZXJhIHByZXZpZXcgb2ZmXG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9fc3NhTW9kZSkge1xuICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgIC8vIOy1nOy0iCDsi5zrj4RcbiAgICAgICAgICAgICAgc3NhUmVzdWx0ID0gYXdhaXQgdGhpcy5fX3N0YXJ0VHJ1dGgodGhpcy5fX29jclR5cGUsIHRoaXMuX19hZGRyZXNzKTsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignW0VSUl0gU1NBIE1PREUgaXMgdHJ1ZS4gYnV0LCBzc2FSZXN1bHQgaXMgbnVsbCcpOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgICAgICAgICAgICBzc2FSZXN1bHRMaXN0LnB1c2goc3NhUmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldHJ5U3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBGQUtFID0gdGhpcy5fX29wdGlvbnMuc3NhUmV0cnlUeXBlID09PSAnRkFLRSc7XG4gICAgICAgICAgICAgICAgY29uc3QgUkVBTCA9IHRoaXMuX19vcHRpb25zLnNzYVJldHJ5VHlwZSA9PT0gJ1JFQUwnO1xuICAgICAgICAgICAgICAgIGNvbnN0IEVOU0VNQkxFID0gdGhpcy5fX29wdGlvbnMuc3NhUmV0cnlUeXBlID09PSAnRU5TRU1CTEUnO1xuICAgICAgICAgICAgICAgIGxldCBpc0NvbXBsZXRlZCA9IGZhbHNlOyAvLyDruYTrj5nquLAgZm9yIOusuCDrlYzrrLjsl5AgYnJlYWvqsIAg7JWI6rG466as64qUIOydtOyKiOuhnCDrhKPsnYxcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX19zc2FSZXRyeUNvdW50ID09PSB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBleGVjdXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc3NhUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aFJldHJ5KHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fYWRkcmVzcywgaXRlbSk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ1tFUlJdIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGwnKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICAgICAgICAgICAgICAgICAgc3NhUmVzdWx0TGlzdC5wdXNoKHNzYVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgaWYgKEZBS0UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdC5pbmRleE9mKCdSRUFMJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChSRUFMKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQuaW5kZXhPZignRkFLRScpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBleGVjdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoRU5TRU1CTEUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXRyeVdvcmtpbmdUaW1lID0gbmV3IERhdGUoKSAtIHJldHJ5U3RhcnREYXRlO1xuICAgICAgICAgICAgICAgIHZvaWQgMDsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFza0luZm8pIHtcbiAgICAgICAgICAgICAgbWFza0luZm8gPSB0aGlzLl9fZ2V0TWFza0luZm8odGhpcy5fX2FkZHJlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBsZWdhY3lGb3JtYXQsXG4gICAgICAgICAgICAgIG5ld0Zvcm1hdFxuICAgICAgICAgICAgfSA9IHVzZWJPQ1JXQVNNUGFyc2VyLnBhcnNlT2NyUmVzdWx0KHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fc3NhTW9kZSwgb2NyUmVzdWx0LCBzc2FSZXN1bHQsIHRoaXMuX19zc2FSZXRyeUNvdW50LCBzc2FSZXN1bHRMaXN0LCB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVR5cGUsIHRoaXMuX19vcHRpb25zLnNzYVJldHJ5UGl2b3RcbiAgICAgICAgICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIFNUQVJUXG4gICAgICAgICAgICAvLyB0aGlzLl9fb3B0aW9ucy51c2VQaWlFbmNyeXB0TW9kZVxuICAgICAgICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gRU5EXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgcmV2aWV3X3Jlc3VsdCA9IHtcbiAgICAgICAgICAgICAgb2NyX3R5cGU6IHRoaXMuX19vY3JUeXBlLFxuICAgICAgICAgICAgICBvY3JfcmVzdWx0OiBuZXdGb3JtYXQsXG4gICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBtYXNrSW1hZ2UsXG4gICAgICAgICAgICAgIG9jcl9mYWNlX2ltYWdlOiBmYWNlSW1hZ2UsXG4gICAgICAgICAgICAgIG1hc2tJbmZvOiBtYXNrSW5mbyxcbiAgICAgICAgICAgICAgc3NhX21vZGU6IHRoaXMuX19zc2FNb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NvbXByZXNzSW1hZ2VzKHJldmlld19yZXN1bHQsIGltZ0RhdGFVcmwsIG1hc2tJbWFnZSwgZmFjZUltYWdlKTtcbiAgICAgICAgICAgIHRoaXMuZW5jcnlwdFJlc3VsdChyZXZpZXdfcmVzdWx0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VMZWdhY3lGb3JtYXQpIHtcbiAgICAgICAgICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfZGF0YSA9IGxlZ2FjeUZvcm1hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19vblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpO1xuICAgICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICB0aGlzLl9fZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3InO1xuICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnOiAnICsgZS5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2b2lkIDA7XG5cbiAgICAgICAgICAvLyBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgIC8vICAgYXdhaXQgdGhpcy5fX3JlY292ZXJ5U2NhbigpO1xuICAgICAgICAgIC8vICAgdGhpcy5fX3JlY292ZXJlZCA9IHRydWU7XG4gICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcygnV0EwMDEnLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0aGlzLl9fcmVjb3ZlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmVjb3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5fX2RldGVjdGVkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNjYW4sIDEpOyAvLyDsnqzqt4BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNldFRpbWVvdXQoc2NhbiwgMSk7IC8vIFVJIOuenOuNlOungSBibG9ja2luZyDrsKnsp4AgKHNldFRpbWVvdXQpXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfX2NvbXByZXNzSW1hZ2VzKHJldmlld19yZXN1bHQsIGltZ0RhdGFVcmwsIG1hc2tJbWFnZSwgZmFjZUltYWdlLCBjb25zdGFudE51bWJlcikge1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlKSB7XG4gICAgICBjb25zdCByZXNpemVSYXRpbyA9IHRoaXMuX19jcm9wSW1hZ2VTaXplSGVpZ2h0IC8gdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aDtcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogdGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFdpZHRoLFxuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aCAqIHJlc2l6ZVJhdGlvLFxuICAgICAgICBjb252ZXJ0U2l6ZTogdGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFZvbHVtZSxcbiAgICAgICAgdGFyZ2V0Q29tcHJlc3NWb2x1bWU6IHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhWb2x1bWUgLy8gY3VzdG9tIG9wdGlvblxuICAgICAgfTtcblxuICAgICAgcmV2aWV3X3Jlc3VsdC5vY3Jfb3JpZ2luX2ltYWdlID0gYXdhaXQgdGhpcy5fX2NvbXByZXNlQmFzZTY0SW1hZ2UoaW1nRGF0YVVybCwgZGVmYXVsdE9wdGlvbnMsIGNvbnN0YW50TnVtYmVyKTtcblxuICAgICAgLy8gbWFza2luZyDsnbTrr7jsp4DripQgcmVzaXplIO2VmOuptCwgbWFzayDsooztkZzqsIAg7Ja06riL64KY66+A66GcIOumrOyCrOydtOymiCDslYjtlZjqs6Ag7JWV7LaV66eMIOynhO2WiVxuICAgICAgY29uc3QgbWFza2luZ0ltYWdlT3B0aW9ucyA9IHtcbiAgICAgICAgcXVhbGl0eTogZGVmYXVsdE9wdGlvbnMucXVhbGl0eSxcbiAgICAgICAgdGFyZ2V0Q29tcHJlc3NWb2x1bWU6IGRlZmF1bHRPcHRpb25zLnRhcmdldENvbXByZXNzVm9sdW1lXG4gICAgICB9O1xuICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfbWFza2luZ19pbWFnZSA9IGF3YWl0IHRoaXMuX19jb21wcmVzZUJhc2U2NEltYWdlKG1hc2tJbWFnZSwgbWFza2luZ0ltYWdlT3B0aW9ucywgY29uc3RhbnROdW1iZXIpO1xuICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfZmFjZV9pbWFnZSA9IGF3YWl0IHRoaXMuX19jb21wcmVzZUJhc2U2NEltYWdlKGZhY2VJbWFnZSwgZGVmYXVsdE9wdGlvbnMsIGNvbnN0YW50TnVtYmVyKTtcbiAgICB9XG4gIH1cbiAgX19yZXF1ZXN0R2V0QVBJVG9rZW4oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSB0aGlzLl9fb3B0aW9ucy5hdXRoU2VydmVySW5mby5jcmVkZW50aWFsO1xuICAgICAgY29uc3QgYmFzZVVybCA9IHRoaXMuX19vcHRpb25zLmF1dGhTZXJ2ZXJJbmZvLmJhc2VVcmw7XG4gICAgICBmZXRjaChgJHtiYXNlVXJsfS9zaWduLWluYCwge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFsKSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgLy8gbW9kZTogJ2NvcnMnLFxuICAgICAgICAvLyBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L3VzZWIvdG9rZW5gLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Jlc3VsdC50b2tlbn1gXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICByZXNvbHZlKGpzb24udG9rZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgX19yZXF1ZXN0U2VydmVyT0NSKG9jclR5cGUsIHNzYU1vZGUsIGltZ0RhdGFVcmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGJhc2VVcmwgPSB0aGlzLl9fb3B0aW9ucy5vY3JTZXJ2ZXJCYXNlVXJsO1xuICAgICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgICBiYXNlVXJsICs9ICcvb2NyL2lkY2FyZC1kcml2ZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgICAgYmFzZVVybCArPSAnL29jci9wYXNzcG9ydCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICAgIGJhc2VVcmwgKz0gJy9vY3IvYWxpZW4nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ3JlZGl0IGNhcmQgaXMgbm90IFVuc3VwcG9ydGVkIFNlcnZlciBPQ1InKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBPQ1IgdHlwZTogJHtvY3JUeXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFwaVRva2VuID0gYXdhaXQgdGhpcy5fX3JlcXVlc3RHZXRBUElUb2tlbigpO1xuICAgICAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke2FwaVRva2VufWApO1xuICAgICAgICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW1hZ2VfYmFzZTY0OiBpbWdEYXRhVXJsLFxuICAgICAgICAgIHNzYV9tb2RlOiAndHJ1ZScsXG4gICAgICAgICAgbWFza19tb2RlOiAndHJ1ZScsXG4gICAgICAgICAgZmFjZV9tb2RlOiAndHJ1ZSdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAgICAgICBib2R5OiByYXcsXG4gICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gICAgICAgIH07XG4gICAgICAgIGZldGNoKGJhc2VVcmwsIHJlcXVlc3RPcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX3N0YXJ0U2NhblNlcnZlckltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIFNUQVJUXG4gICAgICAgIC8vIHRoaXMuX19zZXRQaWlFbmNyeXB0TW9kZSh0aGlzLl9fb3B0aW9ucy51c2VQaWlFbmNyeXB0TW9kZSk7IC8vIG9jciByZXN1bHQgZW5jcnlwdFxuICAgICAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBFTkRcbiAgICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsLFxuICAgICAgICAgIHNzYVJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgc3NhUmVzdWx0TGlzdCA9IFtdO1xuICAgICAgICBjb25zdCBfX29uQ2xpY2tDYXB0dXJlQnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIC8vIOy6lOuyhOyKpOyXkOyEnCDsnbTrr7jsp4Drpbwg6rCA7KC47Ji0XG4gICAgICAgICAgY29uc3QgWywgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9fY3JvcEltYWdlRnJvbVZpZGVvKCk7XG4gICAgICAgICAgaWYgKDEgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIHNlcnZlciBvY3Ig7Iuk7YyoICjrsJzsg50g6rCA64ql7ISxIOyXhuydjClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2VydmVyIG9jciDshLHqs7VcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX1NVQ0NFU1MsIGZhbHNlLCBpbWdEYXRhVXJsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIG9jclJlc3VsdCA9IGF3YWl0IHRoaXMuX19yZXF1ZXN0U2VydmVyT0NSKHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fc3NhTW9kZSwgaW1nRGF0YVVybCk7XG5cbiAgICAgICAgICAgICAgLy8gZmFpbHVyZSBjYXNlXG4gICAgICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgT0NSIGlzIGZhaWxlZGApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzc2Eg7Iuc64+EP1xuXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgdmlkZW9cbiAgICAgICAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgfSk7IC8vIE9DUiDsmYTro4wg7Iuc7KCQ7JeQIGNhbWVyYSBwcmV2aWV3IG9mZlxuXG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGxlZ2FjeUZvcm1hdCxcbiAgICAgICAgICAgICAgbmV3Rm9ybWF0LFxuICAgICAgICAgICAgICBiYXNlNjRJbWFnZVJlc3VsdCxcbiAgICAgICAgICAgICAgbWFza0luZm9cbiAgICAgICAgICAgIH0gPSB1c2ViT0NSQVBJUGFyc2VyLnBhcnNlT2NyUmVzdWx0KHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fc3NhTW9kZSwgb2NyUmVzdWx0KTtcbiAgICAgICAgICAgIGxldCByZXZpZXdfcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgICAgICAgIG9jcl9yZXN1bHQ6IG5ld0Zvcm1hdCxcbiAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogaW1nRGF0YVVybCxcbiAgICAgICAgICAgICAgb2NyX21hc2tpbmdfaW1hZ2U6IGJhc2U2NEltYWdlUmVzdWx0Py5vY3JfbWFza2luZ19pbWFnZSxcbiAgICAgICAgICAgICAgb2NyX2ZhY2VfaW1hZ2U6IGJhc2U2NEltYWdlUmVzdWx0Py5vY3JfZmFjZV9pbWFnZSxcbiAgICAgICAgICAgICAgbWFza0luZm8sXG4gICAgICAgICAgICAgIHNzYV9tb2RlOiB0aGlzLl9fc3NhTW9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jb21wcmVzc0ltYWdlcyhyZXZpZXdfcmVzdWx0LCBpbWdEYXRhVXJsLCBiYXNlNjRJbWFnZVJlc3VsdD8ub2NyX21hc2tpbmdfaW1hZ2UsIGJhc2U2NEltYWdlUmVzdWx0Py5vY3JfZmFjZV9pbWFnZSwgMC4wKTtcbiAgICAgICAgICAgIHRoaXMuZW5jcnlwdFJlc3VsdChyZXZpZXdfcmVzdWx0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VMZWdhY3lGb3JtYXQpIHtcbiAgICAgICAgICAgICAgcmV2aWV3X3Jlc3VsdC5vY3JfZGF0YSA9IGxlZ2FjeUZvcm1hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19vblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpO1xuICAgICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9fY2FwdHVyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fb25DbGlja0NhcHR1cmVCdXR0b24pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ1NlcnZlciBPQ1IgRXJyb3InO1xuICAgICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICc6ICcgKyBlLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBhd2FpdCB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcygnUVMwMDEnLCBlLCBlcnJvck1lc3NhZ2UpOyAvLyBRVVJBTSBTZXJ2ZXIgT0NSIOyXkOufrFxuICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX19lbnF1ZXVlRGV0ZWN0ZWRDYXJkUXVldWUoaW1nRGF0YSwgaW1nRGF0YVVSTCkge1xuICAgIC8vIHNzYSByZXRyeSDshKTsoJXsnbQg65CY7Ja0IOyeiOycvOqxsOuCmCwg7IiY64+Z7LSs7JiBVUnrpbwg7IKs7Jqp7ZWY64qUIOqyveyasCwgY2FyZCBkZXRlY3Qg7ISx6rO17IucIOydtOuvuOyngCDsoIDsnqVcbiAgICBpZiAodGhpcy5fX3NzYU1vZGUgJiYgdGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDAgfHwgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJICYmIHRoaXMuX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50ID4gMCkge1xuICAgICAgbGV0IGxpbWl0U2F2ZUltYWdlQ291bnQgPSBNYXRoLm1heCh0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50LCB0aGlzLl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCk7XG4gICAgICBpZiAodGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLmxlbmd0aCA9PT0gbGltaXRTYXZlSW1hZ2VDb3VudCkge1xuICAgICAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUuc2hpZnQoKTtcbiAgICAgICAgaWYgKHRoaXMuX19kZWJ1Z01vZGUpIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NC5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlLnB1c2goaW1nRGF0YSk7XG4gICAgICBpZiAodGhpcy5fX2RlYnVnTW9kZSkge1xuICAgICAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQucHVzaChpbWdEYXRhVVJMKTtcbiAgICAgICAgdm9pZCAwOyAvLyBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgfVxuXG4gICAgICB2b2lkIDA7IC8vIHNob3VsZCBiZSByZW1vdmVkXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX19vblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpIHtcbiAgICAvLyDsnbjsi50g7ISx6rO1IOyKpOy6lCDro6jtlIQg7KKF66OMXG4gICAgaWYgKHJldmlld19yZXN1bHQuc3NhX21vZGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1MpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgcmVzdWx0X2NvZGU6ICdOMTAwJyxcbiAgICAgICAgcmVzdWx0X21lc3NhZ2U6ICdPSy4nXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiAnc3VjY2VzcycsXG4gICAgICByZXZpZXdfcmVzdWx0OiByZXZpZXdfcmVzdWx0XG4gICAgfTtcbiAgICBpZiAodGhpcy5fX29uU3VjY2Vzcykge1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgdGhpcy5fX29uU3VjY2VzcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19vbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgIGxldCBlcnJvckRldGFpbCA9ICcnO1xuICAgIGlmIChlPy50b1N0cmluZygpKSBlcnJvckRldGFpbCArPSBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGU/LnN0YWNrKSBlcnJvckRldGFpbCArPSBlLnN0YWNrO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICByZXN1bHRfY29kZTogcmVzdWx0Q29kZSxcbiAgICAgICAgcmVzdWx0X21lc3NhZ2U6IGVycm9yTWVzc2FnZVxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogJ2ZhaWxlZCcsXG4gICAgICByZXZpZXdfcmVzdWx0OiB7XG4gICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgZXJyb3JfZGV0YWlsOiBlcnJvckRldGFpbFxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuX19vbkZhaWx1cmUpIHtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUocmVzdWx0KTtcbiAgICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fcHJlbG9hZGluZ1dhc20oKSB7XG4gICAgY29uc3QgcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpO1xuICAgIGlmICghdGhpcy5pc1ByZWxvYWRlZCgpICYmIHByZWxvYWRpbmdTdGF0dXMgPT09IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGF3YWl0IHRoaXMucHJlbG9hZGluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5fX3dhaXRQcmVsb2FkZWQoKTtcbiAgICAgIH0gZWxzZSBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5ET05FKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgYWJub3JtYWxseSBwcmVsb2FkaW5nIHN0YXR1cywgcHJlbG9hZGVkOiAke3RoaXMuaXNQcmVsb2FkZWQoKX0gLyBwcmVsb2FkaW5nU3RhdHVzOiAke3RoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIFNUQVJUXG4gIC8vIF9fc2V0UGlpRW5jcnlwdE1vZGUocGlpRW5jcnlwdE1vZGUpIHtcbiAgLy8gICB0aGlzLl9fT0NSRW5naW5lLnNldFBpaUVuY3J5cHQocGlpRW5jcnlwdE1vZGUpO1xuICAvLyB9XG4gIC8vXG4gIC8vIF9fZW5jcnlwdERldGVjdGVkQmFzZTY0KGFkZHJlc3MsIG1hc2ssIG9jcl9tb2RlLCBpbWdUeXBlID0gJ2NhcmQnKSB7XG4gIC8vICAgaWYgKGltZ1R5cGUgPT09ICdmYWNlJykge1xuICAvLyAgICAgcmV0dXJuIHRoaXMuX19PQ1JFbmdpbmUuZW5jcnlwdEJhc2U2NGpwZ0RldGVjdGVkUGhvdG9CYXNlNjQoYWRkcmVzcyk7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lLmVuY3J5cHRCYXNlNjRqcGdEZXRlY3RlZEZyYW1lQmFzZTY0KFxuICAvLyAgICAgYWRkcmVzcyxcbiAgLy8gICAgIG1hc2ssXG4gIC8vICAgICBvY3JfbW9kZVxuICAvLyAgICk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gX19nZXRFbmNyeXB0ZWRTaXplKCkge1xuICAvLyAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lLmdldEVuY3J5cHRlZEpwZ1NpemUoKTtcbiAgLy8gfVxuICAvL1xuICAvLyBfX2dldEVuY3J5cHRlZEJ1ZmZlcigpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNyeXB0ZWRKcGdCdWZmZXIoKTtcbiAgLy8gfVxuICAvL1xuICAvLyBfX2dldFBpaUVuY3J5cHRJbWFnZUJhc2U2NChhZGRyZXNzLCBtYXNrLCBpbWdNb2RlLCBpbWdUeXBlID0gJ2NhcmQnKSB7XG4gIC8vICAgY29uc3QgZW5jcnlwdERldGVjdGVkQmFzZTY0ID0gdGhpcy5fX2VuY3J5cHREZXRlY3RlZEJhc2U2NChcbiAgLy8gICAgIGFkZHJlc3MsXG4gIC8vICAgICBtYXNrLFxuICAvLyAgICAgaW1nTW9kZSxcbiAgLy8gICAgIGltZ1R5cGVcbiAgLy8gICApO1xuICAvLyAgIGlmIChlbmNyeXB0RGV0ZWN0ZWRCYXNlNjQgPT09IDEpIHtcbiAgLy8gICAgIGNvbnN0IGpwZ1NpemUgPSB0aGlzLl9fZ2V0RW5jcnlwdGVkU2l6ZSgpO1xuICAvLyAgICAgY29uc3QganBnUG9pbnRlciA9IHRoaXMuX19nZXRFbmNyeXB0ZWRCdWZmZXIoKTtcbiAgLy9cbiAgLy8gICAgIGNvbnN0IGVuY3J5cHRlZCA9IG5ldyBVaW50OEFycmF5KFxuICAvLyAgICAgICB0aGlzLl9fT0NSRW5naW5lLkhFQVA4LmJ1ZmZlcixcbiAgLy8gICAgICAganBnUG9pbnRlcixcbiAgLy8gICAgICAganBnU2l6ZVxuICAvLyAgICAgKTtcbiAgLy8gICAgIGNvbnN0IHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xuICAvLyAgICAgY29uc3QgZGVjb2RlZFN0cmluZyA9IHRleHREZWNvZGVyLmRlY29kZShlbmNyeXB0ZWQpO1xuICAvL1xuICAvLyAgICAgcmV0dXJuIGRlY29kZWRTdHJpbmc7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiAnJztcbiAgLy8gfVxuICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBFTkRcblxuICBhc3luYyBfX3N0YXJ0U2Nhbldhc20oKSB7XG4gICAgdGhpcy5fX2RlYnVnKCd3YXNtX21vZGUnKTtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuV2FzbUltcGwoKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgYXN5bmMgX19zdGFydFNjYW5TZXJ2ZXIoKSB7XG4gICAgdGhpcy5fX2RlYnVnKCdzZXJ2ZXJfbW9kZScpO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSA9IHRydWU7XG4gICAgYXdhaXQgdGhpcy5fX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2NhblNlcnZlckltcGwoKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgYXN5bmMgX19yZWNvdmVyeVNjYW4oKSB7XG4gICAgdm9pZCAwO1xuICAgIHRoaXMuX19yZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2Nhbldhc20oKTtcbiAgfVxuICBzdG9wU2NhbigpIHtcbiAgICB0aGlzLl9fZGV0ZWN0ZWQgPSB0cnVlOyAvLyBzd2l0Y2ggdG8gc2VydmVy7J2865WMIOq4sOyhtCBXQVNNIGxvb3Ag6rCV7KCc7KKF66OMXG4gICAgY29uc3Qge1xuICAgICAgY2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9XG4gIHN0b3BTdHJlYW0oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy5fX3N0cmVhbSkge1xuICAgICAgdGhpcy5fX3N0cmVhbS5zdG9wICYmIHRoaXMuX19zdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzICYmIHRoaXMuX19zdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhY2tzLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdHJlYW0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDrqZTrqqjrpqwgYWxsb2NhdGlvbiBmcmVlIO2VqOyImCAqL1xuICBjbGVhbnVwKCkge1xuICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckFkZHJlc3MoKTtcbiAgICB0aGlzLl9fZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuX19kZXN0cm95UHJldkltYWdlKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCk7XG4gIH1cbiAgX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgaWYgKHRoaXMuX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlQk9DUjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsUUFBUSxNQUFNLHVCQUF1QjtBQUM1QyxPQUFPQyxpQkFBaUIsTUFBTSxtQ0FBbUM7QUFDakUsT0FBT0MsZ0JBQWdCLE1BQU0sa0NBQWtDO0FBQy9ELFNBQVNDLGFBQWEsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sUUFBUSxrQ0FBa0M7QUFDeEYsT0FBT0MsU0FBUyxNQUFNLHlCQUF5QjtBQUMvQyxJQUFJQyxRQUFRO0FBQ1osTUFBTUMsT0FBTyxDQUFDO0VBb0NaOztFQUVBOztFQXNFaUM7RUFDTDs7RUFNRTtFQUNGO0VBQ0M7O0VBSzdCOztFQXNLQTtFQUNBQyxXQUFXQSxDQUFBLEVBQUc7SUFBQUMsZUFBQSxzQkFoU0E7TUFDWkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsU0FBUyxFQUFFLFdBQVc7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLG1CQUFtQixFQUFFLGdCQUFnQjtNQUNyQ0Msa0JBQWtCLEVBQUUsZUFBZTtNQUNuQ0Msc0JBQXNCLEVBQUUsd0JBQXdCO01BQ2hEQyxxQkFBcUIsRUFBRSx1QkFBdUI7TUFDOUNDLGNBQWMsRUFBRSxZQUFZO01BQzVCQyx1QkFBdUIsRUFBRSxxQkFBcUI7TUFDOUNDLFdBQVcsRUFBRSxhQUFhO01BQzFCQyxvQkFBb0IsRUFBRSxzQkFBc0I7TUFDNUNDLFVBQVUsRUFBRTtJQUNkLENBQUM7SUFBQVosZUFBQSxxQkFDWTtNQUNYRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO01BQ2JDLEtBQUssRUFBRSxDQUFDO01BQ1JPLFdBQVcsRUFBRSxDQUFDO01BQ2RHLElBQUksRUFBRTtJQUNSLENBQUM7SUFBQWIsZUFBQSw0QkFDbUI7TUFDbEJjLFdB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
