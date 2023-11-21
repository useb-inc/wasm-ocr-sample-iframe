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
    _defineProperty(this, "__ocrTypeList", ['idcard', 'driver', 'passport', 'foreign-passport', 'alien', 'alien-back', 'credit', 'idcard-ssa', 'driver-ssa', 'passport-ssa', 'foreign-passport-ssa', 'alien-ssa']);
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
      preloadingUITextMsg: '신분증인증 모듈을 불러오는 중 입니다<br />잠시만 기다려주세요',
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
      // cameraResolutionCriteria: 'compatibility', // 호환성 우선(권장, 디폴트) : 720으로 고정, 저사양 단말기 호환성 좋음
      cameraResolutionCriteria: 'highQuality',
      // 고화질 우선 : 1080이 가능하면 1080 불가능하면 720

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
      ssaMaxRetryCount: 0,
      // 최대 RETRY 회수설정 0이면 미사용

      // this.__debug()를 통해 찍은 메시지를 alert으로 띄울지 여부
      useDebugAlert: false
    }));
    if (instance) return instance;
    instance = this;
    return instance;
  }

  /** public methods */
  preloading(onPreloaded) {
    var _this = this;
    return _asyncToGenerator(function* () {
      yield _this.__setupDomElements();
      if (_this.isPreloaded()) {
        void 0;
        if (onPreloaded) onPreloaded();
      } else {
        void 0;
        _this.showOCRLoadingUI();
        _this.__preloadingStatus = _this.PRELOADING_STATUS.STARTED;
        yield _this.__loadResources();
        _this.__preloadingStatus = _this.PRELOADING_STATUS.DONE;
        _this.__preloaded = true;
        if (onPreloaded) onPreloaded();
        _this.hideOCRLoadingUI();
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
  showOCRLoadingUI() {
    var {
      preloadingUIWrap
    } = detector.getOCRElements();
    preloadingUIWrap.style.display = 'flex';
  }
  hideOCRLoadingUI() {
    var {
      preloadingUIWrap
    } = detector.getOCRElements();
    preloadingUIWrap.style.display = 'none';
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
    if (this.__options.useDebugAlert) {
      void 0;
    } else {
      void 0;
    }
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
        case 'alien-back':
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
      var isAlienBack = _this10.__ocrType === 'alien-back';
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
      if (isAlienBack) {
        [calcResolution_w, calcResolution_h] = [calcResolution_h, calcResolution_w];
      }
      calcCanvas.setAttribute('width', calcResolution_w);
      calcCanvas.setAttribute('height', calcResolution_h);
      var calcContext = calcCanvas.getContext('2d', {
        willReadFrequently: true
      });
      calcContext.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, calcResolution_w, calcResolution_h);
      var imgData, imgDataUrl;
      imgData = calcContext.getImageData(0, 0, calcResolution_w, calcResolution_h);
      imgDataUrl = calcCanvas.toDataURL('image/jpeg');
      if (isAlienBack) {
        [imgData, imgDataUrl] = yield _this10.__rotate(imgData, imgDataUrl, 270);
      }
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
        var tempCanvas = document.createElement('canvas');
        img.src = imgDataUrl;
        img.addEventListener('load', /*#__PURE__*/_asyncToGenerator(function* () {
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
          case 'alien-back':
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
              case 'alien-back':
                ocrResult = _this12.__OCREngine.scanAlienBack(address, resultBuffer);
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
          try {
            if (device instanceof InputDeviceInfo) {
              if (device.getCapabilities) {
                var _cap$facingMode;
                var cap = device.getCapabilities();
                if (cap !== null && cap !== void 0 && (_cap$facingMode = cap.facingMode) !== null && _cap$facingMode !== void 0 && _cap$facingMode.includes(_this17.__facingModeConstraint)) {
                  var _device$label;
                  var isUltraCameraReg = /ultra|울트라/gi;
                  if (isUltraCameraReg.test((_device$label = device.label) === null || _device$label === void 0 ? void 0 : _device$label.toLowerCase())) continue;
                  camera.push(cap.deviceId);
                }
              }
            }
          } catch (e) {
            // iOS 17 미만의 chrome, safari 에서는
            // InputDeviceInfo 객체가 없어서 getCapabilities를 확인할 수 없기 때문에
            // device label만 보고 후면 카메라로 사용
            if (e instanceof ReferenceError) {
              var _device$label2;
              var isBackCameraReg = /back|후면/g;
              if ((_device$label2 = device.label) !== null && _device$label2 !== void 0 && _device$label2.length && isBackCameraReg.test(device.label)) {
                camera.push(device.deviceId);
              }
            }
          }
        }
      }
      _this17.__debug("camera = ".concat(camera, ", camera.length = ").concat(camera.length));
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
        switchUI,
        preloadingUIWrap,
        preloadingUI
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
      preventToFreezeVideo.innerHTML = '' + '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="32px" height="32px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n' + '  <circle cx="84" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="0.5555555555555556s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>\n' + '    <animate attributeName="fill" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#86868600;#86868600;#86868600;#86868600;#86868600" begin="0s"></animate>\n' + '  </circle>' + '  <circle cx="16" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>\n' + '  </circle>' + '  <circle cx="50" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5555555555555556s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5555555555555556s"></animate>\n' + '  </circle>' + '  <circle cx="84" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.1111111111111112s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.1111111111111112s"></animate>\n' + '  </circle>' + '  <circle cx="16" cy="50" r="10" fill="#86868600">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666665s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666665s"></animate>\n' + '  </circle>' + '</svg>';
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
      preloadingUIWrap = document.createElement('div');
      preloadingUIWrap.setAttribute('data-useb-ocr', 'preloadingUIWrap');
      var preloadingUIWrapStyle = _objectSpread(_objectSpread({}, wrapStyle), {}, {
        'flex-direction': 'column',
        display: 'flex',
        'background-color': '#000000ff'
      });
      _this18.__setStyle(preloadingUIWrap, preloadingUIWrapStyle);
      ocr.appendChild(preloadingUIWrap);
      if (!preloadingUI) {
        preloadingUI = document.createElement('div');
        preloadingUI.setAttribute('data-useb-ocr', 'preloadingUI');
        preloadingUI.setAttribute('class', 'text-info');
        preloadingUI.innerHTML = '' + '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background: none; display: block; shape-rendering: auto;" width="32px" height="32px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n' + '  <circle cx="84" cy="50" r="10" fill="#ffffffff">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="0.5555555555555556s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>\n' + '    <animate attributeName="fill" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#86868600;#86868600;#86868600;#86868600;#86868600" begin="0s"></animate>\n' + '  </circle>' + '  <circle cx="16" cy="50" r="10" fill="#ffffffff">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>\n' + '  </circle>' + '  <circle cx="50" cy="50" r="10" fill="#ffffffff">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5555555555555556s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5555555555555556s"></animate>\n' + '  </circle>' + '  <circle cx="84" cy="50" r="10" fill="#ffffffff">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.1111111111111112s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.1111111111111112s"></animate>\n' + '  </circle>' + '  <circle cx="16" cy="50" r="10" fill="#ffffffff">\n' + '    <animate attributeName="r" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666665s"></animate>\n' + '    <animate attributeName="cx" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666665s"></animate>\n' + '  </circle>' + '</svg>';
        if (_this18.__options.preloadingUITextMsg === '' || _this18.__options.preloadingUITextMsg) {
          preloadingUI.innerHTML += _this18.__options.preloadingUITextMsg;
        }
      }
      _this18.__setStyle(preloadingUI, _objectSpread(_objectSpread({}, wrapStyle), {}, {
        'flex-direction': 'column'
      }));
      preloadingUIWrap.appendChild(preloadingUI);

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
      } = detector.getOCRElements();
      var camera = yield _this19.__getInputDevices();
      // console.log('videoDevices :: ', camera)

      _this19.checkUIOrientation();
      var constraintWidth, constraintHeight;
      if (_this19.__options.cameraResolutionCriteria === 'highQuality') {
        // 카메라 해상도 설정 : 화질 우선
        // 1920x1080이 가능한경우 사용 아니면 1280x720 사용
        constraintWidth = {
          ideal: 1920,
          min: 1280
        };
        constraintHeight = {
          ideal: 1080,
          min: 720
        };
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
        _this19.__debug('cannot to get camera devices. so, try to get camera devices again');
        _this19.__debug("constraints : ".concat(JSON.stringify(constraints)));
        _this19.__stream = yield navigator.mediaDevices.getUserMedia(constraints);
        _this19.stopStream();
        camera = yield _this19.__getInputDevices();
        constraints.video.deviceId = camera.length ? {
          ideal: camera[camera.length - 1]
        } : null;
      }

      // 갤럭시 wide 등 저사양 기기에서 FHD 해상도 카메라 사용시 홀쭉이되는 현상 방지
      // 저사양 기기 판단기준 : 후면카메라의 개수가 1개라는 가정
      if (camera.length === 1) {
        _this19.__debug('maybe device is entry model such as galaxy wide');
        constraints.video.width = {
          ideal: 1280
        };
        constraints.video.height = {
          ideal: 720
        };
      }
      try {
        // const dumptrack = ([a, b], track) =>
        //   `${a}${track.kind == 'video' ? 'Camera' : 'Microphone'} (${track.readyState}): ${track.label}${b}`;

        var stream = yield navigator.mediaDevices.getUserMedia(constraints);
        _this19.__debug("constraints : ".concat(JSON.stringify(constraints)));
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
        _this19.__debug('stream facingMode :: ' + streamSettings.facingMode);
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
      var isAlienBack = _this21.__ocrType === 'alien-back';

      // 기준정보
      var baseWidth = isAlienBack ? 260 : 400;
      var baseHeight = isAlienBack ? 400 : 260;
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
            case 'alien-back':
              baseUrl += '/ocr/alien-back';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJ1c2ViT0NSV0FTTVBhcnNlciIsInVzZWJPQ1JBUElQYXJzZXIiLCJpc1N1cHBvcnRXYXNtIiwibWVhc3VyZSIsInNpbWQiLCJ0aHJlYWRzIiwiSW1hZ2VVdGlsIiwiaW5zdGFuY2UiLCJVc2VCT0NSIiwiY29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydHkiLCJOT05FIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVF9TVUNDRVNTIiwiQ0FSRF9ERVRFQ1RfRkFJTEVEIiwiTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUyIsIk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCIsIk9DUl9SRUNPR05JWkVEIiwiT0NSX1JFQ09HTklaRURfV0lUSF9TU0EiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9TVUNDRVNTX1dJVEhfU1NBIiwiT0NSX0ZBSUxFRCIsIkRPTkUiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJXQVJQSU5HIiwiQ1JPUFBJTkciLCJGQUxTRSIsIlRSVUUiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk9DUl9TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZUVuY3J5cHRNb2RlIiwidXNlRW5jcnlwdEFsbE1vZGUiLCJ1c2VMZWdhY3lGb3JtYXQiLCJ1c2VNYXNrSW5mbyIsInVzZUZhY2VJbWFnZSIsInVzZUltYWdlV2FycGluZyIsInVzZUNvbXByZXNzSW1hZ2UiLCJ1c2VDb21wcmVzc0ltYWdlTWF4V2lkdGgiLCJ1c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lIiwidXNlVG9wVUkiLCJ1c2VUb3BVSVRleHRNc2ciLCJ1c2VNaWRkbGVVSSIsInVzZU1pZGRsZVVJVGV4dE1zZyIsInVzZUJvdHRvbVVJIiwidXNlQm90dG9tVUlUZXh0TXNnIiwidXNlUHJldmlld1VJIiwidXNlQ2FwdHVyZVVJIiwicHJlbG9hZGluZ1VJVGV4dE1zZyIsImZyYW1lQm9yZGVyU3R5bGUiLCJ3aWR0aCIsInJhZGl1cyIsInN0eWxlIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3Rfc3VjY2VzcyIsImRldGVjdF9mYWlsZWQiLCJtYW51YWxfY2FwdHVyZV9zdWNjZXNzIiwibWFudWFsX2NhcHR1cmVfZmFpbGVkIiwicmVjb2duaXplZCIsInJlY29nbml6ZWRfd2l0aF9zc2EiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwib2NyX2ZhaWxlZCIsInVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlIiwibWFza0ZyYW1lU3R5bGUiLCJjbGlwX2ZyYW1lIiwiYmFzZV9jb2xvciIsInVzZUF1dG9Td2l0Y2hUb1NlcnZlck1vZGUiLCJ1c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUiLCJzd2l0Y2hUb1NlcnZlclRocmVzaG9sZCIsInVzZUZvcmNlQ29tcGxldGVVSSIsImNhcHR1cmVCdXR0b25TdHlsZSIsInN0cm9rZV9jb2xvciIsInJlc291cmNlQmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiZGV2aWNlTGFiZWwiLCJ2aWRlb1RhcmdldElkIiwicm90YXRpb25EZWdyZWUiLCJtaXJyb3JNb2RlIiwiY2FtZXJhUmVzb2x1dGlvbkNyaXRlcmlhIiwiY2FsY0d1aWRlQm94Q3JpdGVyaWEiLCJzc2FSZXRyeVR5cGUiLCJzc2FSZXRyeVBpdm90Iiwic3NhTWF4UmV0cnlDb3VudCIsInVzZURlYnVnQWxlcnQiLCJwcmVsb2FkaW5nIiwib25QcmVsb2FkZWQiLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX19zZXR1cERvbUVsZW1lbnRzIiwiaXNQcmVsb2FkZWQiLCJzaG93T0NSTG9hZGluZ1VJIiwiX19wcmVsb2FkaW5nU3RhdHVzIiwiX19sb2FkUmVzb3VyY2VzIiwiX19wcmVsb2FkZWQiLCJoaWRlT0NSTG9hZGluZ1VJIiwiaXNJbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZWQiLCJnZXRQcmVsb2FkaW5nU3RhdHVzIiwiaXNFbmNyeXB0TW9kZSIsIl9fb3B0aW9ucyIsImlzQ3JlZGl0Q2FyZCIsIl9fb2NyVHlwZSIsInByZWxvYWRpbmdVSVdyYXAiLCJnZXRPQ1JFbGVtZW50cyIsImRpc3BsYXkiLCJlbmNyeXB0UmVzdWx0IiwicmV2aWV3X3Jlc3VsdCIsIl9faXNTdXBwb3J0V2FzbSIsImluY2x1ZGVMaXN0IiwiZW5jcnlwdGVkIiwib2NyX3Jlc3VsdCIsIl8iLCJ0b1BhaXJzIiwicGljayIsInJlZHVjZSIsImFjYyIsIl9yZWYiLCJrZXkiLCJ2YWx1ZSIsIl9fZW5jcnlwdFNjYW5SZXN1bHQiLCJvY3Jfb3JpZ2luX2ltYWdlIiwiX29iamVjdFNwcmVhZCIsImV4Y2x1ZGVMaXN0Iiwib21pdCIsIl9yZWYyIiwib2NyX21hc2tpbmdfaW1hZ2UiLCJvY3JfZmFjZV9pbWFnZSIsImdldE9DUkVuZ2luZSIsIl9fT0NSRW5naW5lIiwiaW5pdCIsInNldHRpbmdzIiwibGljZW5zZUtleSIsIkVycm9yIiwiX19saWNlbnNlIiwibWVyZ2VkT3B0aW9ucyIsIm1lcmdlIiwic2V0T3B0aW9uIiwiX193aW5kb3dFdmVudEJpbmQiLCJfX2RldmljZUluZm8iLCJnZXRPc1ZlcnNpb24iLCJnZXRPcHRpb24iLCJnZXRPY3JUeXBlIiwidHlwZSIsIl9fb2NyVHlwZU51bWJlclRvU3RyaW5nIiwiZ2V0IiwiZ2V0T2NyVHlwZU51bWJlciIsInN0cmluZyIsIl9fb2NyU3RyaW5nVG9UeXBlTnVtYmVyIiwiZ2V0VUlPcmllbnRhdGlvbiIsIl9fdWlPcmllbnRhdGlvbiIsImdldFZpZGVvT3JpZW50YXRpb24iLCJfX3ZpZGVvT3JpZW50YXRpb24iLCJjaGVja1N3aXRjaFRvU2VydmVyTW9kZSIsIl90aGlzMiIsIl9faXNTd2l0Y2hUb1NlcnZlck1vZGUiLCJsYXRlbmN5UGVyMTAwbXMiLCJtZWFzdXJlUmVwb3J0IiwiX19kZWJ1ZyIsInN0YXJ0T0NSIiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiX2FyZ3VtZW50cyIsImFyZ3VtZW50cyIsIl90aGlzMyIsIm9uSW5Qcm9ncmVzc0NoYW5nZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9fc3NhTW9kZSIsImluZGV4T2YiLCJfX29uU3VjY2VzcyIsIl9fb25GYWlsdXJlIiwiX19vbkluUHJvZ3Jlc3NDaGFuZ2UiLCJfX3RvcFVJIiwidG9wVUkiLCJfX21pZGRsZVVJIiwibWlkZGxlVUkiLCJfX2JvdHRvbVVJIiwiYm90dG9tVUkiLCJfX2NoYW5nZVN0YWdlIiwiX19wcmVwcm9jZXNzIiwiX19wcmVsb2FkaW5nV2FzbSIsIl9fc3RhcnRTY2FuU2VydmVyIiwiX19zdGFydFNjYW5XYXNtIiwiZSIsInN0b3BPQ1IiLCJjbGVhbnVwIiwiX19jbG9zZUNhbWVyYSIsInNldElnbm9yZUNvbXBsZXRlIiwidmFsIiwiZW5jcnlwdCIsInBsYWluU3RyIiwicmVzdGFydE9DUiIsIm9jclR5cGUiLCJfYXJndW1lbnRzMiIsIl90aGlzNCIsImlzU3dpdGNoTW9kZSIsIl9fd2FpdFByZWxvYWRlZCIsIl90aGlzNSIsIndhaXRpbmdSZXRyeUNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVjayIsInNldFRpbWVvdXQiLCJjb252ZXJ0VHlwZVRvTnVtYmVyIiwib3B0aW9uIiwiaXNOYU4iLCJwYXJzZUludCIsIl90aGlzXyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsInNraXBUb3VjaEFjdGlvbmZvclpvb20iLCJldiIsInRvdWNoZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwib25iZWZvcmV1bmxvYWQiLCJfX3BhZ2VFbmQiLCJoYW5kbGVSZXNpemUiLCJfcmVmNCIsIl9faXNJblByb2dyZXNzSGFuZGxlUmVzaXplIiwiX190aHJvdHRsaW5nUmVzaXplVGltZXIiLCJhcHBseSIsIl9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5IiwibXNnIiwiX19zbGVlcCIsIm1zIiwiX19ibG9iVG9CYXNlNjQiLCJibG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJfX2Jhc2U2NHRvQmxvYiIsImJhc2U2NCIsImJ5dGVTdHJpbmciLCJhdG9iIiwic3BsaXQiLCJtaW1lU3RyaW5nIiwiYWIiLCJBcnJheUJ1ZmZlciIsImlhIiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsIl9fY29tcHJlc2VCYXNlNjRJbWFnZSIsIm9wdGlvbnMiLCJjb25zdGFudE51bWJlciIsIl90aGlzNiIsImJsb2JGaWxlIiwiY29tcHJlc3NlZCIsImNvbXByZXNzSW1hZ2UiLCJjb21wcmVzc2lvblJhdGlvIiwiTWF0aCIsInJvdW5kIiwic2l6ZSIsIl9fZ2V0U3RyaW5nT25XYXNtSGVhcCIsImxlbmd0aEJ5dGVzIiwibGVuZ3RoQnl0ZXNVVEY4IiwiX19zdHJpbmdPbldhc21IZWFwIiwiX21hbGxvYyIsInN0cmluZ1RvVVRGOCIsIm9jclJlc3VsdCIsInN0cmluZ09uV2FzbUhlYXAiLCJ0b1N0cmluZyIsImpzb25TdHJpbmciLCJfZnJlZSIsIl9fc2V0VmlkZW9SZXNvbHV0aW9uIiwidmlkZW9FbGVtZW50IiwiX3RoaXM3IiwiaXNTdXBwb3J0ZWRSZXNvbHV0aW9uIiwicmVzb2x1dGlvblRleHQiLCJfX2NhbVNldENvbXBsZXRlIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0Iiwic3JjT2JqZWN0IiwiX192aWRlb1dpZHRoIiwiX192aWRlb0hlaWdodCIsIl9fZ2V0U2Nhbm5lckFkZHJlc3MiLCJfX29jclR5cGVMaXN0IiwiaW5jbHVkZXMiLCJhZGRyZXNzIiwiZGVzdHJveUNhbGxiYWNrIiwiZ2V0SURDYXJkU2Nhbm5lciIsImRlc3Ryb3lJRENhcmRTY2FubmVyIiwiZ2V0UGFzc3BvcnRTY2FubmVyIiwiZGVzdHJveVBhc3Nwb3J0U2Nhbm5lciIsImdldEFsaWVuU2Nhbm5lciIsImRlc3Ryb3lBbGllblNjYW5uZXIiLCJnZXRDcmVkaXRTY2FubmVyIiwiZGVzdHJveUNyZWRpdFNjYW5uZXIiLCJfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzIiwiX19yZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9fZ2V0QnVmZmVyIiwiX19CdWZmZXIiLCJfX3Jlc29sdXRpb25XaWR0aCIsIl9fcmVzb2x1dGlvbkhlaWdodCIsIl9fcmVzdWx0QnVmZmVyIiwiX19tYXNrSW5mb1Jlc3VsdEJ1ZiIsIl9fZ2V0SW1hZ2VCYXNlNjQiLCJtYXNrTW9kZSIsImltZ01vZGUiLCJfYXJndW1lbnRzMyIsIl90aGlzOCIsImltZ1R5cGUiLCJlbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UiLCJlbmNvZGVKcGdEZXRlY3RlZFBob3RvSW1hZ2UiLCJqcGdTaXplIiwiZ2V0RW5jb2RlZEpwZ1NpemUiLCJqcGdQb2ludGVyIiwiZ2V0RW5jb2RlZEpwZ0J1ZmZlciIsInJlc3VsdFZpZXciLCJIRUFQOCIsImJ1ZmZlciIsImRlc3Ryb3lFbmNvZGVkSnBnIiwiX19kZXN0cm95QnVmZmVyIiwiX19kZXN0cm95UmVzdWx0QnVmZmVyIiwiX19kZXN0cm95TWFza0luZm9SZXN1bHRCdWZmZXIiLCJfX2Rlc3Ryb3lQcmV2SW1hZ2UiLCJfX1ByZXZJbWFnZSIsIl9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAiLCJfX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcyIsIl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjayIsIl9faXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlIiwiX3RoaXM5IiwiX19nZXRSb3RhdGlvbkRlZ3JlZSIsIl9fZ2V0TWlycm9yTW9kZSIsIl9fY3JvcEltYWdlRnJvbVZpZGVvIiwiX3RoaXMxMCIsImNhbGNSZXNvbHV0aW9uX3ciLCJjYWxjUmVzb2x1dGlvbl9oIiwidmlkZW8iLCJjYW52YXMiLCJyb3RhdGlvbkNhbnZhcyIsImNhbGNDYW52YXMiLCJjYWxjVmlkZW9XaWR0aCIsImNhbGNWaWRlb0hlaWdodCIsImNhbGNWaWRlb0NsaWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYWxjVmlkZW9DbGllbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoIiwiX19jcm9wSW1hZ2VTaXplV2lkdGgiLCJjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCIsIl9fY3JvcEltYWdlU2l6ZUhlaWdodCIsImNhbGNWaWRlb09yaWVudGF0aW9uIiwiaXNBbGllbkJhY2siLCJfX2lzUm90YXRlZDkwb3IyNzAiLCJjYWxjTWF4U1dpZHRoIiwiY2FsY01heFNIZWlnaHQiLCJzeCIsInN5IiwicmF0aW8iLCJzV2lkdGgiLCJtaW4iLCJzSGVpZ2h0IiwibWF4Iiwic2V0QXR0cmlidXRlIiwiY2FsY0NvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lsbFJlYWRGcmVxdWVudGx5IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImltZ0RhdGFVcmwiLCJnZXRJbWFnZURhdGEiLCJ0b0RhdGFVUkwiLCJfX3JvdGF0ZSIsImRlZ3JlZSIsImltZyIsIkltYWdlIiwidGVtcENhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInRlbXBDb250ZXh0IiwicG9zaXRpb24iLCJoZWlnaHQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJQSSIsIm5ld0ltYWdlRGF0YSIsInJlc3RvcmUiLCJfX2lzQ2FyZGJveERldGVjdGVkIiwiX2FyZ3VtZW50czQiLCJfdGhpczExIiwiYm94VHlwZSIsInJldHJ5SW1nIiwic2V0IiwiZGF0YSIsImtvciIsImFsaWVuIiwicGFzc3BvcnQiLCJkZXRlY3RfaWRjYXJkX29wdCIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwiX19zdGFydFJlY29nbml0aW9uIiwic3NhTW9kZSIsImlzU2V0SWdub3JlQ29tcGxldGUiLCJfdGhpczEyIiwicmVzdWx0QnVmZmVyIiwicmVjb2duaXRpb24iLCJfcmVmNyIsIl9vY3JSZXN1bHQiLCJfb2NyUmVzdWx0MiIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQWxpZW5CYWNrIiwic2NhbkNyZWRpdCIsIl9fY3N2VG9PYmplY3QiLCJjb21wbGV0ZSIsIl9fbWFudWFsT0NSUmV0cnlDb3VudCIsIl9fbWFudWFsT0NSTWF4UmV0cnlDb3VudCIsInF1ZXVlSWR4IiwiX19kZXRlY3RlZENhcmRRdWV1ZSIsIl9fYmx1ckNhcHR1cmVCdXR0b24iLCJfX3NldFN0eWxlIiwiX3giLCJvY3JJbWFnZU1vZGUiLCJPQ1JfSU1HX01PREUiLCJvcmlnaW5JbWFnZSIsIk9DUl9JTUdfTUFTS19NT0RFIiwibWFza0ltYWdlIiwiZmFjZUltYWdlIiwiX19zdGFydFRydXRoIiwicmVqZWN0Iiwic2NhblRydXRoIiwic3RyIiwicGFpcnMiLCJvYmoiLCJwYWlyIiwiX19nZXRNYXNrSW5mbyIsIm1hc2tJbmZvUmVzdWx0QnVmIiwiZ2V0TWFza1JlY3QiLCJfX3N0YXJ0VHJ1dGhSZXRyeSIsIl90aGlzMTMiLCJfX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfdGhpczE0IiwiX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIiwiX3RoaXMxNSIsImlzUGFzc3BvcnQiLCJfX3NldHVwVmlkZW8iLCJfX3N0cmVhbSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfX2FkanVzdFN0eWxlIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX19vbkZhaWx1cmVQcm9jZXNzIiwic3RvcFN0cmVhbSIsImVsIiwiYXNzaWduIiwiX19jaGFuZ2VPQ1JTdGF0dXMiLCJfX29jclN0YXR1cyIsIl9hcmd1bWVudHM1IiwiX3RoaXMxNiIsImZvcmNlVXBkYXRlIiwicmVjb2duaXplZEltYWdlIiwiX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwIiwiX19pblByb2dyZXNzU3RlcCIsImd1aWRlQm94IiwibWFza0JveFdyYXAiLCJjYXB0dXJlQnV0dG9uIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiX21hc2tCb3hXcmFwJHF1ZXJ5U2VsIiwicXVlcnlTZWxlY3RvciIsIl9jYXB0dXJlQnV0dG9uJHF1ZXJ5UyIsIm9jck1vZGUiLCJjYWxsIiwiX191cGRhdGVQcmV2aWV3VUkiLCJfX2hpZGVQcmV2aWV3VUkiLCJwcmV2aWV3VUlXcmFwIiwicHJldmlld0ltYWdlIiwiaW1nU3R5bGUiLCJjb250ZXh0IiwiX19nZXRJbnB1dERldmljZXMiLCJfdGhpczE3IiwibWVkaWFEZXZpY2VzIiwiZGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJjYW1lcmEiLCJkZXZpY2UiLCJraW5kIiwiSW5wdXREZXZpY2VJbmZvIiwiZ2V0Q2FwYWJpbGl0aWVzIiwiX2NhcCRmYWNpbmdNb2RlIiwiY2FwIiwiZmFjaW5nTW9kZSIsIl9fZmFjaW5nTW9kZUNvbnN0cmFpbnQiLCJfZGV2aWNlJGxhYmVsIiwiaXNVbHRyYUNhbWVyYVJlZyIsImxhYmVsIiwicHVzaCIsImRldmljZUlkIiwiUmVmZXJlbmNlRXJyb3IiLCJfZGV2aWNlJGxhYmVsMiIsImlzQmFja0NhbWVyYVJlZyIsImNvbmNhdCIsImNoZWNrVUlPcmllbnRhdGlvbiIsImN1cnJlbnQiLCJvY3IiLCJpc0NoYW5nZWQiLCJfX3ByZXZVaU9yaWVudGF0aW9uIiwiX19jbGVhckN1c3RvbVVJIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiX3RoaXMxOCIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiY3VzdG9tVUlXcmFwIiwiY2FwdHVyZVVJV3JhcCIsImNhcHR1cmVVSSIsInByZXZpZXdVSSIsInN3aXRjaFVJV3JhcCIsInN3aXRjaFVJIiwicHJlbG9hZGluZ1VJIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJtYXJnaW4iLCJvdmVyZmxvdyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwibWFza19mcmFtZSIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJ0cmFuc2Zvcm0iLCJjYW52YXNTdHlsZSIsImxlZnQiLCJ0b3AiLCJib3JkZXIiLCJyaWdodCIsImJvdHRvbSIsImN1c3RvbVVJV3JhcFN0eWxlIiwiY2FwdHVyZVVJV3JhcFN0eWxlIiwiY3Vyc29yIiwiY2FwdHVyZUJ1dHRvblNyY1NWRyIsIl9fb25DbGlja0NhcHR1cmVCdXR0b24iLCJwcmV2aWV3VUlXcmFwU3R5bGUiLCJzd2l0Y2hVSVdyYXBTdHlsZSIsInN3aXRjaEhUTUwiLCJzd2l0Y2hDaGVja2JveCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX19vbkNsaWNrU3dpdGNoVUkiLCJfcmVmMTAiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJfeDIiLCJvbmNlIiwicHJlbG9hZGluZ1VJV3JhcFN0eWxlIiwiX19pbml0U3R5bGUiLCJfX29jciIsIl9fY2FudmFzIiwiX19yb3RhdGlvbkNhbnZhcyIsIl9fdmlkZW8iLCJfX3ZpZGVvV3JhcCIsIl9fZ3VpZGVCb3giLCJfX2d1aWRlQm94V3JhcCIsIl9fbWFza0JveFdyYXAiLCJfX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiX19jdXN0b21VSVdyYXAiLCJfX2NhcHR1cmVVSVdyYXAiLCJfX2NhcHR1cmVVSSIsIl9fY2FwdHVyZUJ1dHRvbiIsIl9fcHJldmlld1VJV3JhcCIsIl9fcHJldmlld1VJIiwiX19wcmV2aWV3SW1hZ2UiLCJfX3N3aXRjaFVJV3JhcCIsIl9fc3dpdGNoVUkiLCJfX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJfdGhpczE5IiwiY29uc3RyYWludFdpZHRoIiwiY29uc3RyYWludEhlaWdodCIsImlkZWFsIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInpvb20iLCJmb2N1c01vZGUiLCJ3aGl0ZUJhbGFuY2VNb2RlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFVzZXJNZWRpYSIsInN0cmVhbSIsInN0cmVhbVNldHRpbmdzIiwiZ2V0VmlkZW9UcmFja3MiLCJnZXRTZXR0aW5ncyIsImFzcGVjdFJhdGlvIiwiX3RoaXMyMCIsImJhc2VXaWR0aCIsImJhc2VIZWlnaHQiLCJzY2FubmVyRnJhbWVSYXRpbyIsImd1aWRlQm94V2lkdGgiLCJndWlkZUJveEhlaWdodCIsImNhbGNPY3JDbGllbnRXaWR0aCIsImNhbGNPY3JDbGllbnRIZWlnaHQiLCJndWlkZUJveFJhdGlvQnlXaWR0aCIsIl9fZ3VpZGVCb3hSYXRpb0J5V2lkdGgiLCJ2aWRlb1JhdGlvQnlIZWlnaHQiLCJfX3ZpZGVvUmF0aW9CeUhlaWdodCIsInJlZHVjZWRHdWlkZUJveFdpZHRoIiwiX19ndWlkZUJveFJlZHVjZVJhdGlvIiwicmVkdWNlZEd1aWRlQm94SGVpZ2h0IiwicGFkZGluZyIsInZpZGVvSW5uZXJHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXNrQm94SW5uZXIiLCJyIiwibWFza0JveElubmVyV2lkdGgiLCJtYXNrQm94SW5uZXJIZWlnaHQiLCJfdGhpczIxIiwiX19jYWxjR3VpZGVCb3hDcml0ZXJpYSIsImEiLCJiIiwibmV3VmlkZW9XaWR0aCIsIm5ld1ZpZGVvSGVpZ2h0IiwibmV3VmlkZW9SYXRpb0J5V2lkdGgiLCJuZXdWaWRlb1JhdGlvQnlIZWlnaHQiLCJjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXMiLCJfX2NhbGNTdW1PZkhlaWdodENoaWxkTm9kZXMiLCJjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCIsImNhcHR1cmVVSVBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiYmFzZWxpbmUiLCJzdW0iLCJpdGVtIiwiY2hpbGROb2RlcyIsInN0b3BTY2FuIiwiX3RoaXMyMiIsIl9fcmVzb3VyY2VzTG9hZGVkIiwiX19pc1N1cHBvcnRTaW1kIiwiZW52SW5mbyIsIm9zIiwib3NTaW1wbGUiLCJ1c2ViT0NSRW52SW5mbyIsInNka1N1cHBvcnRFbnYiLCJ1cmwiLCJmZXRjaCIsImhyZWYiLCJ0aGVuIiwicmVzIiwidGV4dCIsInJlZ2V4Iiwic291cmNlIiwicmVwbGFjZSIsIlJlZ0V4cCIsImV2YWwiLCJvblJ1bnRpbWVJbml0aWFsaXplZCIsIl9yZWYxMSIsIl94MyIsIl9fc3RhcnRTY2FuV2FzbUltcGwiLCJfdGhpczIzIiwiX19kZXRlY3RlZCIsIl9fYWRkcmVzcyIsIl9fc3NhUmV0cnlDb3VudCIsInNjYW4iLCJfcmVmMTIiLCJpc0RldGVjdGVkQ2FyZCIsInNzYVJlc3VsdCIsInNzYVJlc3VsdExpc3QiLCJtYXNrSW5mbyIsInJlc29sdXRpb25fdyIsInJlc29sdXRpb25faCIsIl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlIiwicmV0cnlTdGFydERhdGUiLCJEYXRlIiwiRkFLRSIsIlJFQUwiLCJFTlNFTUJMRSIsImlzQ29tcGxldGVkIiwiX2xvb3AiLCJleGVjdXRlIiwiX3JlZjEzIiwiX3JldCIsInJldHJ5V29ya2luZ1RpbWUiLCJsZWdhY3lGb3JtYXQiLCJuZXdGb3JtYXQiLCJwYXJzZU9jclJlc3VsdCIsIm9jcl90eXBlIiwic3NhX21vZGUiLCJfX2NvbXByZXNzSW1hZ2VzIiwib2NyX2RhdGEiLCJfX29uU3VjY2Vzc1Byb2Nlc3MiLCJfX3JlY292ZXJlZCIsIl90aGlzMjQiLCJyZXNpemVSYXRpbyIsImRlZmF1bHRPcHRpb25zIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjb252ZXJ0U2l6ZSIsInRhcmdldENvbXByZXNzVm9sdW1lIiwibWFza2luZ0ltYWdlT3B0aW9ucyIsInF1YWxpdHkiLCJfX3JlcXVlc3RHZXRBUElUb2tlbiIsImNyZWRlbnRpYWwiLCJhdXRoU2VydmVySW5mbyIsImJhc2VVcmwiLCJib2R5IiwibWV0aG9kIiwianNvbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJjYXRjaCIsImVyciIsIl9fcmVxdWVzdFNlcnZlck9DUiIsIl90aGlzMjUiLCJfcmVmMTQiLCJvY3JTZXJ2ZXJCYXNlVXJsIiwiYXBpVG9rZW4iLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwiaW1hZ2VfYmFzZTY0IiwibWFza19tb2RlIiwiZmFjZV9tb2RlIiwicmVxdWVzdE9wdGlvbnMiLCJyZWRpcmVjdCIsIl94NCIsIl94NSIsIl9fc3RhcnRTY2FuU2VydmVySW1wbCIsIl90aGlzMjYiLCJfcmVmMTUiLCJfcmVmMTYiLCJiYXNlNjRJbWFnZVJlc3VsdCIsIl94NiIsIl94NyIsImltZ0RhdGFVUkwiLCJsaW1pdFNhdmVJbWFnZUNvdW50Iiwic2hpZnQiLCJfX2RlYnVnTW9kZSIsIl9fZGV0ZWN0ZWRDYXJkUXVldWVCYXNlNjQiLCJfdGhpczI3IiwiYXBpX3Jlc3BvbnNlIiwicmVzdWx0X2NvZGUiLCJyZXN1bHRfbWVzc2FnZSIsInJlc3VsdENvZGUiLCJfdGhpczI4IiwiZXJyb3JEZXRhaWwiLCJzdGFjayIsImVycm9yX2RldGFpbCIsIl90aGlzMjkiLCJwcmVsb2FkaW5nU3RhdHVzIiwiX3RoaXMzMCIsIl90aGlzMzEiLCJfX3JlY292ZXJ5U2NhbiIsIl90aGlzMzIiLCJjYW52YXNDb250ZXh0IiwiY2xlYXJSZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VzIjpbIm9jci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogZ2xvYmFsLW1vZHVsZSAqL1xuaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgdXNlYk9DUldBU01QYXJzZXIgZnJvbSAnLi9oZWxwZXJzL3VzZWItb2NyLXdhc20tcGFyc2VyLmpzJztcbmltcG9ydCB1c2ViT0NSQVBJUGFyc2VyIGZyb20gJy4vaGVscGVycy91c2ViLW9jci1hcGktcGFyc2VyLmpzJztcbmltcG9ydCB7IGlzU3VwcG9ydFdhc20sIG1lYXN1cmUsIHNpbWQsIHRocmVhZHMgfSBmcm9tICcuL2hlbHBlcnMvd2FzbS1mZWF0dXJlLWRldGVjdC5qcyc7XG5pbXBvcnQgSW1hZ2VVdGlsIGZyb20gJy4vaGVscGVycy9pbWFnZS11dGlsLmpzJztcbmxldCBpbnN0YW5jZTtcbmNsYXNzIFVzZUJPQ1Ige1xuICBJTl9QUk9HUkVTUyA9IHtcbiAgICBOT05FOiAnbm9uZScsXG4gICAgTk9UX1JFQURZOiAnbm90X3JlYWR5JyxcbiAgICBSRUFEWTogJ3JlYWR5JyxcbiAgICBDQVJEX0RFVEVDVF9TVUNDRVNTOiAnZGV0ZWN0X3N1Y2Nlc3MnLFxuICAgIENBUkRfREVURUNUX0ZBSUxFRDogJ2RldGVjdF9mYWlsZWQnLFxuICAgIE1BTlVBTF9DQVBUVVJFX1NVQ0NFU1M6ICdtYW51YWxfY2FwdHVyZV9zdWNjZXNzJyxcbiAgICBNQU5VQUxfQ0FQVFVSRV9GQUlMRUQ6ICdtYW51YWxfY2FwdHVyZV9mYWlsZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEOiAncmVjb2duaXplZCcsXG4gICAgT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6ICdyZWNvZ25pemVkX3dpdGhfc3NhJyxcbiAgICBPQ1JfU1VDQ0VTUzogJ29jcl9zdWNjZXNzJyxcbiAgICBPQ1JfU1VDQ0VTU19XSVRIX1NTQTogJ29jcl9zdWNjZXNzX3dpdGhfc3NhJyxcbiAgICBPQ1JfRkFJTEVEOiAnb2NyX2ZhaWxlZCdcbiAgfTtcbiAgT0NSX1NUQVRVUyA9IHtcbiAgICBOT1RfUkVBRFk6IC0xLFxuICAgIFJFQURZOiAwLFxuICAgIE9DUl9TVUNDRVNTOiAxLFxuICAgIERPTkU6IDJcbiAgfTtcbiAgUFJFTE9BRElOR19TVEFUVVMgPSB7XG4gICAgTk9UX1NUQVJURUQ6IC0xLFxuICAgIFNUQVJURUQ6IDAsXG4gICAgRE9ORTogMVxuICB9O1xuICBPQ1JfSU1HX01PREUgPSB7XG4gICAgV0FSUElORzogMCxcbiAgICBDUk9QUElORzogMSxcbiAgICBOT05FOiAyXG4gIH07XG4gIE9DUl9JTUdfTUFTS19NT0RFID0ge1xuICAgIEZBTFNFOiAwLFxuICAgIFRSVUU6IDFcbiAgfTtcblxuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cblxuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIF9fZGVidWdNb2RlID0gZmFsc2U7XG4gIF9fT0NSRW5naW5lID0gbnVsbDtcbiAgX19pc1N1cHBvcnRXYXNtID0gZmFsc2U7XG4gIF9faXNTdXBwb3J0U2ltZCA9IGZhbHNlO1xuICBfX2luaXRpYWxpemVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGVkID0gZmFsc2U7XG4gIF9fcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQ7XG4gIF9fbGljZW5zZTtcbiAgX19vY3JUeXBlO1xuICBfX3NzYU1vZGUgPSBmYWxzZTtcbiAgX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuTk9UX1JFQURZO1xuICBfX21hbnVhbE9DUk1heFJldHJ5Q291bnQgPSAxMDtcbiAgX19tYW51YWxPQ1JSZXRyeUNvdW50ID0gMDtcbiAgX19zc2FSZXRyeUNvdW50ID0gMDtcbiAgX19kZXRlY3RlZENhcmRRdWV1ZSA9IFtdO1xuICBfX2RldGVjdGVkQ2FyZFF1ZXVlQmFzZTY0ID0gW107XG4gIF9fb25TdWNjZXNzID0gbnVsbDtcbiAgX19vbkZhaWx1cmUgPSBudWxsO1xuICBfX29uSW5Qcm9ncmVzc0NoYW5nZSA9IG51bGw7XG4gIF9fb2NyVHlwZUxpc3QgPSBbJ2lkY2FyZCcsICdkcml2ZXInLCAncGFzc3BvcnQnLCAnZm9yZWlnbi1wYXNzcG9ydCcsICdhbGllbicsICdhbGllbi1iYWNrJywgJ2NyZWRpdCcsICdpZGNhcmQtc3NhJywgJ2RyaXZlci1zc2EnLCAncGFzc3BvcnQtc3NhJywgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJywgJ2FsaWVuLXNzYSddO1xuICBfX29jclR5cGVOdW1iZXJUb1N0cmluZyA9IG5ldyBNYXAoW1snMScsICdpZGNhcmQnXSwgWycyJywgJ2RyaXZlciddLCBbJzMnLCAncGFzc3BvcnQnXSwgWyc0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnXSwgWyc1JywgJ2FsaWVuJ10sIFsnNS0xJywgJ2FsaWVuJ10sIFsnNS0yJywgJ2FsaWVuJ10sIFsnNS0zJywgJ2FsaWVuJ11dKTtcbiAgX19vY3JTdHJpbmdUb1R5cGVOdW1iZXIgPSBuZXcgTWFwKFtbJ2lkY2FyZCcsICcxJ10sIFsnZHJpdmVyJywgJzInXSwgWydwYXNzcG9ydCcsICczJ10sIFsnZm9yZWlnbi1wYXNzcG9ydCcsICc0J10sIFsnYWxpZW4nLCAnNSddLCBbJ2FsaWVuJywgJzUtMSddLCBbJ2FsaWVuJywgJzUtMiddLCBbJ2FsaWVuJywgJzUtMyddXSk7XG4gIF9fcGFnZUVuZCA9IGZhbHNlO1xuICBfX29jcjtcbiAgX19jYW52YXM7XG4gIF9fcm90YXRpb25DYW52YXM7XG4gIF9fdmlkZW87XG4gIF9fdmlkZW9XcmFwO1xuICBfX2d1aWRlQm94O1xuICBfX2d1aWRlQm94V3JhcDtcbiAgX19tYXNrQm94V3JhcDtcbiAgX19wcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgX19jdXN0b21VSVdyYXA7XG4gIF9fdG9wVUk7XG4gIF9fbWlkZGxlVUk7XG4gIF9fYm90dG9tVUk7XG4gIF9fcHJldmlld1VJV3JhcDtcbiAgX19wcmV2aWV3VUk7XG4gIF9fcHJldmlld0ltYWdlO1xuICBfX2NhcHR1cmVVSVdyYXA7XG4gIF9fY2FwdHVyZVVJO1xuICBfX3N3aXRjaFVJV3JhcDtcbiAgX19zd2l0Y2hVSTtcbiAgX19jYXB0dXJlQnV0dG9uO1xuICBfX2FkZHJlc3MgPSAwO1xuICBfX2RldGVjdGVkID0gZmFsc2U7XG4gIF9fcmVjb3ZlcmVkID0gZmFsc2U7XG4gIF9fQnVmZmVyID0gbnVsbDtcbiAgX19yZXN1bHRCdWZmZXIgPSBudWxsO1xuICBfX21hc2tJbmZvUmVzdWx0QnVmID0gbnVsbDtcbiAgX19QcmV2SW1hZ2UgPSBudWxsO1xuICBfX3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICBfX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gIF9fcmVzb2x1dGlvbldpZHRoID0gMDtcbiAgX19yZXNvbHV0aW9uSGVpZ2h0ID0gMDtcbiAgX192aWRlb1dpZHRoID0gMDtcbiAgX192aWRlb0hlaWdodCA9IDA7XG4gIF9fcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gIF9faW50ZXJ2YWxUaW1lcjtcbiAgX19jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyO1xuICBfX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuICBfX3N0cmVhbTtcbiAgX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgX19mYWNpbmdNb2RlQ29uc3RyYWludCA9ICdlbnZpcm9ubWVudCc7XG4gIF9fdWlPcmllbnRhdGlvbiA9ICcnO1xuICBfX3ByZXZVaU9yaWVudGF0aW9uID0gJyc7XG4gIF9fdmlkZW9PcmllbnRhdGlvbiA9ICcnO1xuICBfX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gIF9fdGhyb3R0bGluZ1Jlc2l6ZURlbGF5ID0gNTAwO1xuICBfX21heFJldHJ5Q291bnRHZXRBZGRyZXNzID0gMzAwOyAvLyDsnoTsi5xcbiAgX19yZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7IC8vIOyehOyLnFxuICBfX2RldmljZUluZm87XG4gIF9faXNSb3RhdGVkOTBvcjI3MCA9IGZhbHNlO1xuICBfX2luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk7XG4gIF9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHRoaXMuSU5fUFJPR1JFU1MuTk9ORTtcbiAgX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgX19ndWlkZUJveFJhdGlvQnlXaWR0aCA9IDEuMDsgLy8g7IiY7KCV67aI6rCAXG4gIF9fdmlkZW9SYXRpb0J5SGVpZ2h0ID0gMC45OyAvLyDsiJjsoJXrtojqsIBcbiAgX19ndWlkZUJveFJlZHVjZVJhdGlvID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgX19jcm9wSW1hZ2VTaXplV2lkdGggPSAwO1xuICBfX2Nyb3BJbWFnZVNpemVIZWlnaHQgPSAwO1xuICBfX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID0gZmFsc2U7XG5cbiAgLyoqIERlZmF1bHQgb3B0aW9ucyAqL1xuICBfX29wdGlvbnMgPSBuZXcgT2JqZWN0KHtcbiAgICAvLyDrlJTrsoTquYUg7Ji17IWYXG4gICAgc2hvd0NsaXBGcmFtZTogZmFsc2UsXG4gICAgLy8gY2lscC1mcmFtZSDrs7TquLBcbiAgICBzaG93Q2FudmFzUHJldmlldzogZmFsc2UsXG4gICAgLy8gY2FudmFzIHByZXZpZXcg67O06riwXG5cbiAgICAvLyDstpzroKUg7Ji17IWYXG4gICAgLy8g7JWU7Zi47ZmUXG4gICAgdXNlRW5jcnlwdE1vZGU6IGZhbHNlLFxuICAgIC8vIOyVlO2YuO2ZlCDsoIHsmqkgKOqwnOyduOqzoOycoOyLneuzhOu2gO2YuCDqtIDroKgg7ZWt66qpIOyVlO2YuO2ZlClcbiAgICB1c2VFbmNyeXB0QWxsTW9kZTogZmFsc2UsXG4gICAgLy8g7JWU7Zi47ZmUIOyggeyaqSAo7KCE7LK0IOyVlO2YuO2ZlCwgZW5jcnlwdCBvYmplY3Qg67OE64+EIOygnOqztSlcbiAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBTVEFSVFxuICAgIC8vIHVzZVBpaUVuY3J5cHRNb2RlOiBmYWxzZSwgLy8g7JWU7Zi47ZmUIOyggeyaqSAocGlpKVxuICAgIC8vIHVzZVBpaUVuY3J5cHRGYWNlOiBmYWxzZSwgLy8g7Iug67aE7KadIOyWvOq1tOyCrOynhCDslZTtmLjtmZQg7KCB7JqpIChwaWkpXG4gICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gRU5EXG4gICAgdXNlTGVnYWN5Rm9ybWF0OiBmYWxzZSxcbiAgICAvLyBMZWdhY3kgZm9ybWF0IOyngOybkFxuICAgIHVzZU1hc2tJbmZvOiB0cnVlLFxuICAgIC8vIOuniOyKpO2CuSDsooztkZwg7KeA7JuQXG4gICAgdXNlRmFjZUltYWdlOiB0cnVlLFxuICAgIC8vIOyLoOu2hOymnSDrgrQg7Ja86rW0IOyCrOynhFxuICAgIHVzZUltYWdlV2FycGluZzogZmFsc2UsXG4gICAgLy8g7Iug67aE7KadIOydtOuvuOyngOulvCBXYXJwaW5nKOyZnOqzoSDrs7TsoJUg7ZWg7KeAIOyXrOu2gClcbiAgICB1c2VDb21wcmVzc0ltYWdlOiBmYWxzZSxcbiAgICAvLyDsi6DrtoTspp0g7J2066+47KeA66W8IOyVley2le2VoOyngCDsl6zrtoBcbiAgICB1c2VDb21wcmVzc0ltYWdlTWF4V2lkdGg6IDEwODAsXG4gICAgLy8g7J2066+47KeAIOumrOyCrOydtOynlSDqsIDroZwg7ZW07IOB64+EXG4gICAgdXNlQ29tcHJlc3NJbWFnZU1heFZvbHVtZTogMTAyNCAqIDUwLFxuICAgIC8vIOydtOuvuOyngCDslZXstpUg66qp7ZGcIOyaqeufiVxuXG4gICAgLy8gVUkg7ISk7KCVXG4gICAgdXNlVG9wVUk6IHRydWUsXG4gICAgLy8g7IOB64uoIFVJXG4gICAgdXNlVG9wVUlUZXh0TXNnOiBmYWxzZSxcbiAgICAvL+yDgeuLqCBVSSA+IFRFWFRcbiAgICB1c2VNaWRkbGVVSTogdHJ1ZSxcbiAgICAvL+ykkeuLqCBVSVxuICAgIHVzZU1pZGRsZVVJVGV4dE1zZzogdHJ1ZSxcbiAgICAvLyDspJHri6ggVUkgPiBURVhUXG4gICAgdXNlQm90dG9tVUk6IHRydWUsXG4gICAgLy8g7ZWY64uoIFVJXG4gICAgdXNlQm90dG9tVUlUZXh0TXNnOiBmYWxzZSxcbiAgICAvLyDtlZjri6ggVUkgPiBURVhUXG4gICAgdXNlUHJldmlld1VJOiB0cnVlLFxuICAgIC8vIFByZXZpZXcgVUlcbiAgICB1c2VDYXB0dXJlVUk6IHRydWUsXG4gICAgLy8g7Lqh7LKY67KE7Yq8IFVJXG4gICAgcHJlbG9hZGluZ1VJVGV4dE1zZzogJ+yLoOu2hOymneyduOymnSDrqqjrk4jsnYQg67aI65+s7Jik64qUIOykkSDsnoXri4jri6Q8YnIgLz7snqDsi5zrp4wg6riw64uk66Ck7KO87IS47JqUJyxcbiAgICAvLyDsnbjsi50g7ZSE66CI7J6EIOyYteyFmFxuICAgIGZyYW1lQm9yZGVyU3R5bGU6IHtcbiAgICAgIHdpZHRoOiA1LFxuICAgICAgLy8gYm9yZGVyLXdpZHRoXG4gICAgICByYWRpdXM6IDIwLFxuICAgICAgLy8gYm9yZGVyLXJhZGl1c1xuICAgICAgc3R5bGU6ICdzb2xpZCcsXG4gICAgICAvLyBib3JkZXItc3R5bGVcblxuICAgICAgLy8g64uo6rOE67OEIOyduOyLnSDtlITroIjsnoQgYm9yZGVyIOyDieyDgVxuICAgICAgbm90X3JlYWR5OiAnIzAwMDAwMCcsXG4gICAgICAvLyDsiqTsupTspIDruYQgOiDqsoDsoJVcbiAgICAgIHJlYWR5OiAnI2I4YjhiOCcsXG4gICAgICAvLyDsiqTsupTrjIDquLAgOiDtmozsg4lcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzVlOGZmZicsXG4gICAgICAvLyDsubTrk5zqsoDstpwg7ISx6rO1IDog7ZWY64qYXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICAvLyDsubTrk5zqsoDstpwg7Iuk7YyoIDog67O06528XG4gICAgICBtYW51YWxfY2FwdHVyZV9zdWNjZXNzOiAnIzVlOGZmZicsXG4gICAgICAvLyDsiJjrj5nstKzsmIEg7ISx6rO1IDog7ZWY64qYXG4gICAgICBtYW51YWxfY2FwdHVyZV9mYWlsZWQ6ICcjNzI1YjY3JyxcbiAgICAgIC8vIOyImOuPmey0rOyYgSDsi6TtjKggOiDrs7TrnbxcbiAgICAgIHJlY29nbml6ZWQ6ICcjMDAzYWMyJyxcbiAgICAgIC8vIE9DUuyZhOujjCA6IO2MjOuekVxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMwMDNhYzInLFxuICAgICAgLy8g7IKs67O47YyQ67OE7KSRKOyCrOuzuO2MkOuzhCBPTikgOiDtjIzrnpFcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzE0YjAwZScsXG4gICAgICAvLyBPQ1LsmYTro4wgOiDstIjroZ1cbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzE0YjAwZScsXG4gICAgICAvLyBPQ1LsmYTro4wo7IKs67O47YyQ67OEIE9OKSA6IOy0iOuhnVxuICAgICAgb2NyX2ZhaWxlZDogJyNGQTExM0QnIC8vIE9DUuyLpO2MqCA6IOu5qOqwlVxuICAgIH0sXG5cbiAgICAvLyDrp4jsiqTtgawg7ZSE66CI7J6EIGZpbGwg7Lus65+sIOuzgOqyvSDsgqzsmqkg7Jes67aAXG4gICAgdXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2U6IHRydWUsXG4gICAgLy8g66eI7Iqk7YGsIO2UhOugiOyehCDsmLXshZggKOy5tOuplOudvCDruYTrlJTsmKQg7JiB7Jet7JeQ7IScIOyduOyLnSDtlITroIjsnoTrp4wg67O07J206rKMIO2VmOqzoCDrgpjrqLjsp4Drpbwg642u7Ja07JOw64qUIO2UhOugiOyehCDsmIHsl60pXG4gICAgbWFza0ZyYW1lU3R5bGU6IHtcbiAgICAgIGNsaXBfZnJhbWU6ICcjZmYwMGJmJyxcbiAgICAgIC8vIGNsaXAtZnJhbWUg7IOJ7IOBIDog65Sl7Y287ZSMICjsiJjsoJXrtojqsIApXG4gICAgICBiYXNlX2NvbG9yOiAnIzMzMzMzMycsXG4gICAgICAvLyBtYXNrLWZyYW1lIOyDieyDgSA6IOuLpO2BrOq3uOugiOydtCAo7Yis66qF64+E64qUIOyImOygleu2iOqwgCBmZuuhnCDqs6DsoJUpXG5cbiAgICAgIC8vIOuLqOqzhOuzhCDrp4jsiqTtgawg7ZSE66CI7J6EIGZpbGwg7IOJ7IOBXG4gICAgICBub3RfcmVhZHk6ICcjMzMzMzMzJyxcbiAgICAgIC8vIOyKpOy6lOykgOu5hFxuICAgICAgcmVhZHk6ICcjMzMzMzMzJyxcbiAgICAgIC8vIOyKpOy6lOuMgOq4sFxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjMjIyMjIyJyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDshLHqs7VcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjMzMzMzMzJyxcbiAgICAgIC8vIOy5tOuTnOqygOy2nCDsi6TtjKhcbiAgICAgIG1hbnVhbF9jYXB0dXJlX3N1Y2Nlc3M6ICcjMjIyMjIyJyxcbiAgICAgIC8vIOyImOuPmey0rOyYgSDshLHqs7VcbiAgICAgIG1hbnVhbF9jYXB0dXJlX2ZhaWxlZDogJyMzMzMzMzMnLFxuICAgICAgLy8g7IiY64+Z7LSs7JiBIOyLpO2MqFxuICAgICAgcmVjb2duaXplZDogJyMyMjIyMjInLFxuICAgICAgLy8gT0NS7JmE66OMXG4gICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiAnIzIyMjIyMicsXG4gICAgICAvLyDsgqzrs7jtjJDrs4TspJEo7IKs67O47YyQ67OEIE9OKVxuICAgICAgb2NyX3N1Y2Nlc3M6ICcjMTExMTExJyxcbiAgICAgIC8vT0NS7JmE66OMXG4gICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogJyMxMTExMTEnLFxuICAgICAgLy8gT0NS7JmE66OMKOyCrOuzuO2MkOuzhCBPTilcbiAgICAgIG9jcl9mYWlsZWQ6ICcjMTExMTExJyAvLyBPQ1Lsi6TtjKhcbiAgICB9LFxuXG4gICAgLy8g7LSs7JiB7Ji17IWYXG4gICAgdXNlQXV0b1N3aXRjaFRvU2VydmVyTW9kZTogZmFsc2UsXG4gICAgLy8g7KCA7IKs7JaRIOuLqOunkOyXkOyEnCDshJzrsoRPQ1LroZwg7J6Q64+ZIOyghO2ZmCDquLDriqVcbiAgICB1c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGU6IGZhbHNlLFxuICAgIC8vIOyImOuPmeycvOuhnCDshJzrsoRPQ1Ig7KCE7ZmYIOq4sOuKpSAo7IiY64+Z7J20IHRydWXsnbTrqbQg7J6Q64+Z7J2AIOustOyLnOuQqClcbiAgICBzd2l0Y2hUb1NlcnZlclRocmVzaG9sZDogMjAuMCxcbiAgICAvLyDsnpDrj5nsoITtmZgg6riw7KSA6rCSICjshLHriqUg7Lih7KCV7LmYIG1zKVxuICAgIHVzZUZvcmNlQ29tcGxldGVVSTogZmFsc2UsXG4gICAgLy8gV0FTTSDrqqjrk5zsnbzrlYwg67KE7Yq8IOuIhOulvOyLnCDtlbTri7kg7Iuc7KCQ7JeQIOqwleygnOuhnCDsmYTro4wg7IKs7Jqp7Jes67aAXG5cbiAgICAvLyDsiJjrj5nstKzsmIEg67KE7Yq8IOyYteyFmFxuICAgIGNhcHR1cmVCdXR0b25TdHlsZToge1xuICAgICAgc3Ryb2tlX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAvLyDrsoTtirwg7YWM65GQ66asKHN0cm9rZSkg7IOJ7IOBXG4gICAgICBiYXNlX2NvbG9yOiAnIzVlOGZmZicgLy8g67KE7Yq8IOyDieyDgVxuICAgIH0sXG5cbiAgICByZXNvdXJjZUJhc2VVcmw6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgLy8gd2FzbSwgZGF0YSDtjIzsnbwg66as7IaM7IqkIGJhc2Ug6rK966GcIChDRE4g7IKs7Jqp7IucIOuzgOqyvSlcbiAgICBkZXZpY2VMYWJlbDogJycsXG4gICAgdmlkZW9UYXJnZXRJZDogJycsXG4gICAgLy8g7Lm066mU6528IOyEpOyglVxuICAgIHJvdGF0aW9uRGVncmVlOiAwLFxuICAgIC8vIHJvdGF0aW9uLWRlZ3JlZSDsubTrqZTrnbzqsIAg7ZqM7KCE65CcIOqwgeuPhCAoOTAsIDE5MCwgMjcwKVxuICAgIG1pcnJvck1vZGU6IGZhbHNlLFxuICAgIC8vIG1pcnJvci1tb2RlIOyFgO2UvCDsubTrqZTrnbwo7YKk7Jik7Iqk7YGsIOuTsSkg7IKs7Jqp7IucIOyijOyasCDrsJjsoIRcblxuICAgIC8vIOy5tOuplOudvCDtlbTsg4Hrj4Qg7ISk7KCVICA6ICdjb21wYXRpYmlsaXR5JyAo7Zi47ZmY7ISxIOyasOyEoCkgfHwgJ2hpZ2hRdWFsaXR5JyAo6rOg7ZmU7KeIIOyasOyEoClcbiAgICAvLyBjYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWE6ICdjb21wYXRpYmlsaXR5JywgLy8g7Zi47ZmY7ISxIOyasOyEoCjqtozsnqUsIOuUlO2PtO2KuCkgOiA3MjDsnLzroZwg6rOg7KCVLCDsoIDsgqzslpEg64uo66eQ6riwIO2YuO2ZmOyEsSDsoovsnYxcbiAgICBjYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWE6ICdoaWdoUXVhbGl0eScsXG4gICAgLy8g6rOg7ZmU7KeIIOyasOyEoCA6IDEwODDsnbQg6rCA64ql7ZWY66m0IDEwODAg67aI6rCA64ql7ZWY66m0IDcyMFxuXG4gICAgLy8g6rCA7J2065OcIOuwleyKpCDshKTsoJUgOiAnY2FtZXJhUmVzb2x1dGlvbicgKOy5tOuplOudvCDtlbTsg4Hrj4QpIHx8ICdvY3JWaWV3U2l6ZScgKG9jciBkaXYg7YGs6riwKVxuICAgIGNhbGNHdWlkZUJveENyaXRlcmlhOiAnY2FtZXJhUmVzb2x1dGlvbicsXG4gICAgLy8g7Lm066mU6528IO2VtOyDgeuPhCDquLDspIAo6raM7J6lLCDrlJTtj7TtirgpIDogNzIweDEyODAg7ZW07IOB64+EKOyEuOuhnOuqqOuTnCkg7J2865WMIG9jciB2aWV3IHdpZHRoIHNpemXqsIAgNzIw67O064ukIO2BsCDqsr3smrAsIOqwgOydtOuTnCDrsJXsiqTrpbwgNzIw7JeQIOunnuy2pCAocHJldmlldyDtmZTrqbQg6rmo7KeQIOyXhuydjClcbiAgICAvLyBjYWxjR3VpZGVCb3hDcml0ZXJpYTogJ29jclZpZXdTaXplJywgLy8g7ZmU66m0IOyCrOydtOymiCDquLDspIAgOiA3MjB4MTI4MCDtlbTsg4Hrj4Qo7IS466Gc66qo65OcKSDsnbzrlYwgb2NyIHZpZXcgd2lkdGggc2l6ZeqwgCA3MjDrs7Tri6Qg7YGw6rK97JqwLCDqsIDsnbTrk5wg67CV7Iqk66W8IG9jciB2aWV3IHdpZHRoIOyCrOyXkOymiOyXkCDrp57stqQgKHByZXZpZXcg7ZmU66m0IOqwleygnOuhnCDripjrpqzquLAg65WM66y47JeQIOuLpOyGjCDquajsp5ApXG5cbiAgICAvLyDsgqzrs7jtjJDrs4QgUkVUUlkg7ISk7KCVXG4gICAgLy8gc3NhUmV0cnlUeXBlXG4gICAgLy8gICAtIFJFQUwgICAgIDog67O47J24KFJFQUwpIOqxsOu2gOycqCAtPiBGYWxzZSBOZWdhdGl2ZSjsi6TsoJzqsJLsnYAgUkVBTOyduOuNsCDsmIjsuKHqsJLsnYAgRkFLReudvOyEnCDti4DrprDqsr3smrAp66W8IOuCruy2lOq4sCDsnITtlbQsXG4gICAgLy8gICAtIEZBS0UgICAgIDog7YOA7J24KEZBS0UpIOyImOudveycqCAtPiBGYWxzZSBQb3NpdGl2ZSjsi6TsoJzqsJLsnYAgRkFLReyduOuNsCDsmIjsuKHqsJLsnYAgUkVBTOydtOudvOyEnCDti4DrprDqsr3smrAp66W8IOuCruy2lOq4sCDsnITtlbRcbiAgICAvLyAgIC0gRU5TRU1CTEUgOiDtj4nqt6Ag7KCI64yA6rCSIC0+IHNzYU1heFJldHJ5Q291bnQg66eM7YG8IOuwmOuztSDsiJjtlontlZjqs6AgZmRfY29uZmlkZW5jZSDsoIjrjIDqsJIg6rCS7J2YIO2Pieq3oOycvOuhnCDtjJDsoJVcbiAgICAvLyBzc2FNYXhSZXRyeUNvdW50IOyEpOyglSDqsJLrp4ztgbwg7J6s7Iuc64+E7ZWY7JesIO2VnOuyiOydtOudvOuPhCDquLDspIDqsJIoUkVBTCDrmJDripQgRkFLRSnsnbQg65yo66m0IOq4sOykgOqwkihSRUFMIOuYkOuKlCBGQUtFKeuhnCDtjJDsoJVcbiAgICBzc2FSZXRyeVR5cGU6ICdFTlNFTUJMRScsXG4gICAgc3NhUmV0cnlQaXZvdDogMC41LFxuICAgIC8vIFJFQUwvRkFLReulvCDtjJDsoJXtlZjripQgZmRfY29uZmlkZW5jZSDquLDspIDqsJIgKHdhc20g67Cw7Y+sIOuyhOyghOyXkCDrlLDrnbwg64uk66aEKSDigLsg7IiY7KCV67aI6rCAXG4gICAgc3NhTWF4UmV0cnlDb3VudDogMCxcbiAgICAvLyDstZzrjIAgUkVUUlkg7ZqM7IiY7ISk7KCVIDDsnbTrqbQg66+47IKs7JqpXG5cbiAgICAvLyB0aGlzLl9fZGVidWcoKeulvCDthrXtlbQg7LCN7J2AIOuplOyLnOyngOulvCBhbGVydOycvOuhnCDrnYTsmrjsp4Ag7Jes67aAXG4gICAgdXNlRGVidWdBbGVydDogZmFsc2VcbiAgfSk7XG5cbiAgLyoqIGNvbnN0cnVjdG9yICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKiogcHVibGljIG1ldGhvZHMgKi9cbiAgYXN5bmMgcHJlbG9hZGluZyhvblByZWxvYWRlZCkge1xuICAgIGF3YWl0IHRoaXMuX19zZXR1cERvbUVsZW1lbnRzKCk7XG4gICAgaWYgKHRoaXMuaXNQcmVsb2FkZWQoKSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgaWYgKG9uUHJlbG9hZGVkKSBvblByZWxvYWRlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLnNob3dPQ1JMb2FkaW5nVUkoKTtcbiAgICAgIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEO1xuICAgICAgYXdhaXQgdGhpcy5fX2xvYWRSZXNvdXJjZXMoKTtcbiAgICAgIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5ET05FO1xuICAgICAgdGhpcy5fX3ByZWxvYWRlZCA9IHRydWU7XG4gICAgICBpZiAob25QcmVsb2FkZWQpIG9uUHJlbG9hZGVkKCk7XG4gICAgICB0aGlzLmhpZGVPQ1JMb2FkaW5nVUkoKTtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2luaXRpYWxpemVkO1xuICB9XG4gIGlzUHJlbG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9fcHJlbG9hZGVkO1xuICB9XG4gIGdldFByZWxvYWRpbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19wcmVsb2FkaW5nU3RhdHVzO1xuICB9XG4gIGlzRW5jcnlwdE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vcHRpb25zLnVzZUVuY3J5cHRNb2RlIHx8IHRoaXMuX19vcHRpb25zLnVzZUVuY3J5cHRBbGxNb2RlO1xuICB9XG4gIGlzQ3JlZGl0Q2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX29jclR5cGUgPT09ICdjcmVkaXQnO1xuICB9XG4gIHNob3dPQ1JMb2FkaW5nVUkoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJlbG9hZGluZ1VJV3JhcFxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHByZWxvYWRpbmdVSVdyYXAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxuICBoaWRlT0NSTG9hZGluZ1VJKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZWxvYWRpbmdVSVdyYXBcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBwcmVsb2FkaW5nVUlXcmFwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgZW5jcnlwdFJlc3VsdChyZXZpZXdfcmVzdWx0KSB7XG4gICAgaWYgKHRoaXMuaXNDcmVkaXRDYXJkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNFbmNyeXB0TW9kZSgpICYmIHRoaXMuX19pc1N1cHBvcnRXYXNtKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlRW5jcnlwdE1vZGUpIHtcbiAgICAgICAgY29uc3QgaW5jbHVkZUxpc3QgPSBbJ2p1bWluJywgJ2RyaXZlcl9udW1iZXInLCAncGFzc3BvcnRfbnVtYmVyJywgJ3BlcnNvbmFsX251bWJlcicsICdtcnoyJ107XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgICAgIGNvbnN0IGVuY3J5cHRlZCA9IHtcbiAgICAgICAgICBvY3JfcmVzdWx0OiBfLnRvUGFpcnMoXy5waWNrKHJldmlld19yZXN1bHQub2NyX3Jlc3VsdCwgaW5jbHVkZUxpc3QpKS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3Jfb3JpZ2luX2ltYWdlKVxuICAgICAgICB9O1xuICAgICAgICByZXZpZXdfcmVzdWx0Lm9jcl9yZXN1bHQgPSB7XG4gICAgICAgICAgLi4ucmV2aWV3X3Jlc3VsdC5vY3JfcmVzdWx0LFxuICAgICAgICAgIC4uLmVuY3J5cHRlZC5vY3JfcmVzdWx0XG4gICAgICAgIH07XG4gICAgICAgIHJldmlld19yZXN1bHQub2NyX29yaWdpbl9pbWFnZSA9IGVuY3J5cHRlZC5vY3Jfb3JpZ2luX2ltYWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXhjbHVkZUxpc3QgPSBbJ2NvbXBsZXRlJywgJ3Jlc3VsdF9zY2FuX3R5cGUnLCAnY29sb3JfcG9pbnQnLCAnZm91bmRfZmFjZScsICdzcGVjdWxhcl9yYXRpbycsICdzdGFydF90aW1lJywgJ2VuZF90aW1lJywgJ2ZkX2NvbmZpZGVuY2UnLCAnaWRfdHJ1dGgnLCAnaWRfdHJ1dGhfcmV0cnlfY291bnQnXTtcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIHJldmlld19yZXN1bHQuZW5jcnlwdGVkID0ge1xuICAgICAgICAgIG9jcl9yZXN1bHQ6IF8udG9QYWlycyhfLm9taXQocmV2aWV3X3Jlc3VsdC5vY3JfcmVzdWx0LCBleGNsdWRlTGlzdCkpLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGFjY1trZXldID0gdGhpcy5fX2VuY3J5cHRTY2FuUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pLFxuICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9vcmlnaW5faW1hZ2UpLFxuICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiB0aGlzLl9fZW5jcnlwdFNjYW5SZXN1bHQocmV2aWV3X3Jlc3VsdC5vY3JfbWFza2luZ19pbWFnZSksXG4gICAgICAgICAgb2NyX2ZhY2VfaW1hZ2U6IHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChyZXZpZXdfcmVzdWx0Lm9jcl9mYWNlX2ltYWdlKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRPQ1JFbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19PQ1JFbmdpbmU7XG4gIH1cbiAgaW5pdChzZXR0aW5ncykge1xuICAgIGlmICghISFzZXR0aW5ncy5saWNlbnNlS2V5KSB0aHJvdyBuZXcgRXJyb3IoJ0xpY2Vuc2Uga2V5IGlzIGVtcHR5Jyk7XG4gICAgdGhpcy5fX2xpY2Vuc2UgPSBzZXR0aW5ncy5saWNlbnNlS2V5O1xuICAgIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSBfLm1lcmdlKHt9LCB0aGlzLl9fb3B0aW9ucywgc2V0dGluZ3MpO1xuICAgIHRoaXMuc2V0T3B0aW9uKG1lcmdlZE9wdGlvbnMpO1xuICAgIHZvaWQgMDtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aGlzLl9fd2luZG93RXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLl9fZGV2aWNlSW5mbyA9IGRldGVjdG9yLmdldE9zVmVyc2lvbigpO1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy5fX2lzU3VwcG9ydFdhc20gPSBpc1N1cHBvcnRXYXNtKCk7XG4gICAgICBpZiAoIXRoaXMuX19pc1N1cHBvcnRXYXNtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignV2ViQXNzZW1ibHkgaXMgbm90IHN1cHBvcnRlZC4gaW4gdGhpcyBicm93c2VyLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgc2V0T3B0aW9uKHNldHRpbmdzKSB7XG4gICAgdGhpcy5fX29wdGlvbnMgPSBzZXR0aW5ncztcbiAgfVxuICBnZXRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX19vcHRpb25zO1xuICB9XG4gIGdldE9jclR5cGUodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9fb2NyVHlwZU51bWJlclRvU3RyaW5nLmdldCh0eXBlKTtcbiAgfVxuICBnZXRPY3JUeXBlTnVtYmVyKHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9fb2NyU3RyaW5nVG9UeXBlTnVtYmVyLmdldChzdHJpbmcpO1xuICB9XG4gIGdldFVJT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX191aU9yaWVudGF0aW9uO1xuICB9XG4gIGdldFZpZGVvT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICB9XG4gIGFzeW5jIGNoZWNrU3dpdGNoVG9TZXJ2ZXJNb2RlKCkge1xuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgIC8vIOyImOuPmeyghO2ZmCBvbiDsnbTrqbQg7IiY64+Z7KCE7ZmYIOyasOyEoFxuICAgICAgcmV0dXJuIHRoaXMuX19pc1N3aXRjaFRvU2VydmVyTW9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g7IiY64+Z7KCE7ZmYIG9mZiDsnbTrqbQg7J6Q64+Z7KCE7ZmYIOyytO2BrFxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUF1dG9Td2l0Y2hUb1NlcnZlck1vZGUpIHtcbiAgICAgICAgLy8g7J6Q64+Z7KCE7ZmYIG9u7J2865WMXG4gICAgICAgIC8vIOyEseuKpSDsuKHsoJXqsJLsnYQg6riw7KSA7Jy866GcIFdBU00gb3IgU2VydmVyXG4gICAgICAgIGNvbnN0IFtsYXRlbmN5UGVyMTAwbXMsIG1lYXN1cmVSZXBvcnRdID0gYXdhaXQgbWVhc3VyZSgpO1xuICAgICAgICB0aGlzLl9fZGVidWcobWVhc3VyZVJlcG9ydCk7XG4gICAgICAgIHJldHVybiBsYXRlbmN5UGVyMTAwbXMgPiB0aGlzLl9fb3B0aW9ucy5zd2l0Y2hUb1NlcnZlclRocmVzaG9sZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOyImOuPmeyghO2ZmOuPhCBvZmYsIOyekOuPmeyghO2ZmCBvZmZcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID0gYXdhaXQgdGhpcy5jaGVja1N3aXRjaFRvU2VydmVyTW9kZSgpO1xuICAgIHRoaXMuX19vY3JUeXBlID0gdHlwZTtcbiAgICB0aGlzLl9fc3NhTW9kZSA9IHRoaXMuX19vY3JUeXBlLmluZGV4T2YoJy1zc2EnKSA+IC0xO1xuICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG4gICAgdGhpcy5fX29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlID0gb25JblByb2dyZXNzQ2hhbmdlO1xuICAgIGlmIChvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VUb3BVSSkge1xuICAgICAgICB0aGlzLl9fdG9wVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnRvcFVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJKSB7XG4gICAgICAgIHRoaXMuX19taWRkbGVVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkubWlkZGxlVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHtcbiAgICAgICAgdGhpcy5fX2JvdHRvbVVJID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5ib3R0b21VSTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbml0aWFsaXplZCEnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX19wcmVwcm9jZXNzKCk7XG4gICAgICBpZiAodGhpcy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAgIC8vIHNlcnZlck1vZGVcbiAgICAgICAgaWYgKHRoaXMuaXNFbmNyeXB0TW9kZSgpICYmIHRoaXMuX19pc1N1cHBvcnRXYXNtKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX3ByZWxvYWRpbmdXYXNtKCk7IC8vIOyEnOuyhOuqqOuTnCDsnbTsp4Drp4wg7JWU7Zi47ZmUIO2VmOq4sOychO2VtCB3YXNt7J2EIHByZWxvYWRpbmcg7ZWoXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuU2VydmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3YXNtTW9kZVxuICAgICAgICBhd2FpdCB0aGlzLl9fcHJlbG9hZGluZ1dhc20oKTtcbiAgICAgICAgYXdhaXQgdGhpcy5fX3N0YXJ0U2Nhbldhc20oKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuc3RvcE9DUigpO1xuICAgIH1cbiAgfVxuICBzdG9wT0NSKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgIHRoaXMuX19vblN1Y2Nlc3MgPSBudWxsO1xuICAgIHRoaXMuX19vbkZhaWx1cmUgPSBudWxsO1xuICB9XG4gIHNldElnbm9yZUNvbXBsZXRlKHZhbCkge1xuICAgIHRoaXMuX19PQ1JFbmdpbmUuc2V0SWdub3JlQ29tcGxldGUodmFsKTtcbiAgfVxuICBlbmNyeXB0KHBsYWluU3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbmNyeXB0U2NhblJlc3VsdChwbGFpblN0cik7XG4gIH1cbiAgYXN5bmMgcmVzdGFydE9DUihvY3JUeXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlLCBpc1N3aXRjaE1vZGUgPSBmYWxzZSkge1xuICAgIGlmIChpc1N3aXRjaE1vZGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuc3RvcE9DUigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zdGFydE9DUihvY3JUeXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgYXN5bmMgX193YWl0UHJlbG9hZGVkKCkge1xuICAgIGxldCB3YWl0aW5nUmV0cnlDb3VudCA9IDA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FpdGluZ1JldHJ5Q291bnQrKztcbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfTtcbiAgICAgIGNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgX19wcmVwcm9jZXNzKCkge1xuICAgIGNvbnN0IGNvbnZlcnRUeXBlVG9OdW1iZXIgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICByZXR1cm4gaXNOYU4ocGFyc2VJbnQob3B0aW9uKSkgPyAwIDogcGFyc2VJbnQob3B0aW9uKTtcbiAgICB9O1xuICAgIHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQgPSBjb252ZXJ0VHlwZVRvTnVtYmVyKHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQpO1xuICAgIHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhWb2x1bWUgPSBjb252ZXJ0VHlwZVRvTnVtYmVyKHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhWb2x1bWUpO1xuICAgIHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aCA9IGNvbnZlcnRUeXBlVG9OdW1iZXIodGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFdpZHRoKTtcbiAgfVxuICBfX3dpbmRvd0V2ZW50QmluZCgpIHtcbiAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgIGlmICgvaXBob25lfGlwb2R8aXBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgY29uc3Qgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSA9IGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzXy5fX3BhZ2VFbmQgPSB0cnVlO1xuICAgICAgX3RoaXNfLmNsZWFudXAoKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uX19vY3JUeXBlKSByZXR1cm47XG4gICAgICBpZiAoIV90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSkge1xuICAgICAgICBfdGhpc18uX19pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSB0cnVlO1xuICAgICAgICBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIF90aGlzXy5fX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBfdGhpc18ucmVzdGFydE9DUihfdGhpc18uX19vY3JUeXBlLCBfdGhpc18uX19vblN1Y2Nlc3MsIF90aGlzXy5fX29uRmFpbHVyZSwgX3RoaXNfLl9fb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLl9fdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgIF90aGlzXy5fX3Rocm90dGxpbmdSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlUmVzaXplLCBfdGhpc18uX190aHJvdHRsaW5nUmVzaXplRGVsYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fZGVidWcobXNnKSB7XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZURlYnVnQWxlcnQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBfX3NsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG4gIF9fYmxvYlRvQmFzZTY0KGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pO1xuICB9XG4gIF9fYmFzZTY0dG9CbG9iKGJhc2U2NCkge1xuICAgIC8vIGNvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nXG4gICAgLy8gZG9lc24ndCBoYW5kbGUgVVJMRW5jb2RlZCBEYXRhVVJJcyAtIHNlZSBTTyBhbnN3ZXIgIzY4NTAyNzYgZm9yIGNvZGUgdGhhdCBkb2VzIHRoaXNcbiAgICBjb25zdCBieXRlU3RyaW5nID0gYXRvYihiYXNlNjQuc3BsaXQoJywnKVsxXSk7XG5cbiAgICAvLyBzZXBhcmF0ZSBvdXQgdGhlIG1pbWUgY29tcG9uZW50XG4gICAgY29uc3QgbWltZVN0cmluZyA9IGJhc2U2NC5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXTtcblxuICAgIC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyXG4gICAgY29uc3QgYWIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIGNvbnN0IGlhID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYWJdLCB7XG4gICAgICB0eXBlOiBtaW1lU3RyaW5nXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX19jb21wcmVzZUJhc2U2NEltYWdlKGJhc2U2NCwgb3B0aW9ucywgY29uc3RhbnROdW1iZXIpIHtcbiAgICBpZiAoYmFzZTY0ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBibG9iRmlsZSA9IHRoaXMuX19iYXNlNjR0b0Jsb2IoYmFzZTY0KTtcbiAgICBjb25zdCBjb21wcmVzc2VkID0gYXdhaXQgSW1hZ2VVdGlsLmNvbXByZXNzSW1hZ2UoYmxvYkZpbGUsIG9wdGlvbnMsIGNvbnN0YW50TnVtYmVyKTtcbiAgICBjb25zdCBjb21wcmVzc2lvblJhdGlvID0gTWF0aC5yb3VuZCgoMSAtIGNvbXByZXNzZWQuc2l6ZSAvIGJsb2JGaWxlLnNpemUpICogMTAwMDApIC8gMTAwO1xuICAgIHZvaWQgMDtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fX2Jsb2JUb0Jhc2U2NChjb21wcmVzc2VkKTtcbiAgfVxuXG4gIC8qKiDrnbzsnbTshLzsiqQg7YKk66W8IGhlYXAg7JeQIGFsbG9jYXRpb24gKi9cbiAgX19nZXRTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICghISF0aGlzLl9fbGljZW5zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIEtleSBpcyBlbXB0eScpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGhCeXRlcyA9IHRoaXMuX19PQ1JFbmdpbmUubGVuZ3RoQnl0ZXNVVEY4KHRoaXMuX19saWNlbnNlKSArIDE7XG4gICAgdGhpcy5fX3N0cmluZ09uV2FzbUhlYXAgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MobGVuZ3RoQnl0ZXMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KHRoaXMuX19saWNlbnNlLCB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCwgbGVuZ3RoQnl0ZXMpO1xuICAgIHJldHVybiB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcDtcbiAgfVxuICBfX2VuY3J5cHRTY2FuUmVzdWx0KG9jclJlc3VsdCkge1xuICAgIGxldCBzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiBvY3JSZXN1bHQgPT09ICdudW1iZXInKSBvY3JSZXN1bHQgPSBvY3JSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgIGlmIChvY3JSZXN1bHQgPT09ICcnKSByZXR1cm4gJyc7XG4gICAgICBpZiAodHlwZW9mIG9jclJlc3VsdCAhPT0gJ3N0cmluZycgJiYgISEhb2NyUmVzdWx0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignb2NyUmVzdWx0IGlzIGVtcHR5Jyk7XG4gICAgICB9XG4gICAgICBjb25zdCBqc29uU3RyaW5nID0gb2NyUmVzdWx0O1xuICAgICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLl9fT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOChqc29uU3RyaW5nKSArIDE7XG4gICAgICBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KGpzb25TdHJpbmcsIHN0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lLmVuY3J5cHRSZXN1bHQoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChzdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgIHN0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgbGV0IHJlc29sdXRpb25UZXh0ID0gJ25vdCByZWFkeSc7XG4gICAgaWYgKCF0aGlzLl9fY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX192aWRlb1dpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgdGhpcy5fX3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH07XG4gIH1cbiAgX19nZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGFkZHJlc3MgPSAwO1xuICAgICAgbGV0IGRlc3Ryb3lDYWxsYmFjayA9IG51bGw7XG4gICAgICBjb25zdCBzdHJpbmdPbldhc21IZWFwID0gdGhpcy5fX2dldFN0cmluZ09uV2FzbUhlYXAoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy5fX09DUkVuZ2luZS5kZXN0cm95SURDYXJkU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLl9fT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tYmFjayc6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUFsaWVuU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy5fX09DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuX19PQ1JFbmdpbmUuZGVzdHJveUNyZWRpdFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9fbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuX19yZXRyeUNvdW50R2V0QWRkcmVzcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgTGljZW5zZSBLZXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICB2b2lkIDA7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBfX2dldEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuX19CdWZmZXIpIHtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2ModGhpcy5fX3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0ICogNCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fX3Jlc3VsdEJ1ZmZlcikge1xuICAgICAgdGhpcy5fX3Jlc3VsdEJ1ZmZlciA9IHRoaXMuX19PQ1JFbmdpbmUuX21hbGxvYyg0MDk2KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hc2tJbmZvKSB7XG4gICAgICBpZiAoIXRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1Zikge1xuICAgICAgICB0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYgPSB0aGlzLl9fT0NSRW5naW5lLl9tYWxsb2MoNDA5Nik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy5fX0J1ZmZlciwgdGhpcy5fX3Jlc3VsdEJ1ZmZlciwgdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmXTtcbiAgfVxuICBhc3luYyBfX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIG1hc2tNb2RlLCBpbWdNb2RlLCBpbWdUeXBlID0gJ2NhcmQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpbWdUeXBlID09PSAnY2FyZCcpIHtcbiAgICAgICAgdGhpcy5fX09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UoYWRkcmVzcywgbWFza01vZGUsIGltZ01vZGUpO1xuICAgICAgfSBlbHNlIGlmIChpbWdUeXBlID09PSAnZmFjZScpIHtcbiAgICAgICAgdGhpcy5fX09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZFBob3RvSW1hZ2UoYWRkcmVzcyk7XG4gICAgICB9XG4gICAgICBjb25zdCBqcGdTaXplID0gdGhpcy5fX09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnU2l6ZSgpO1xuICAgICAgY29uc3QganBnUG9pbnRlciA9IHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ0J1ZmZlcigpO1xuICAgICAgY29uc3QgcmVzdWx0VmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguYnVmZmVyLCBqcGdQb2ludGVyLCBqcGdTaXplKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHJlc3VsdFZpZXcpO1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXN1bHRdLCB7XG4gICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fX2Jsb2JUb0Jhc2U2NChibG9iKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9fT0NSRW5naW5lLmRlc3Ryb3lFbmNvZGVkSnBnKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEZyZWUgYnVmZmVyICovXG4gIF9fZGVzdHJveUJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5fX0J1ZmZlcikge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fQnVmZmVyKTtcbiAgICAgIHRoaXMuX19CdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9fZGVzdHJveVJlc3VsdEJ1ZmZlcigpO1xuICAgIHRoaXMuX19kZXN0cm95TWFza0luZm9SZXN1bHRCdWZmZXIoKTtcbiAgfVxuICBfX2Rlc3Ryb3lSZXN1bHRCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuX19yZXN1bHRCdWZmZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuX2ZyZWUodGhpcy5fX3Jlc3VsdEJ1ZmZlcik7XG4gICAgICB0aGlzLl9fcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgX19kZXN0cm95TWFza0luZm9SZXN1bHRCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuX19tYXNrSW5mb1Jlc3VsdEJ1ZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fbWFza0luZm9SZXN1bHRCdWYpO1xuICAgICAgdGhpcy5fX21hc2tJbmZvUmVzdWx0QnVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogRnJlZSBQcmV2SW1hZ2UgYnVmZmVyICovXG4gIF9fZGVzdHJveVByZXZJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5fX1ByZXZJbWFnZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fUHJldkltYWdlKTtcbiAgICAgIHRoaXMuX19QcmV2SW1hZ2UgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBmcmVlIHN0cmluZyBoZWFwIGJ1ZmZlciAqL1xuICBfX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICh0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCkge1xuICAgICAgdGhpcy5fX09DUkVuZ2luZS5fZnJlZSh0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICB0aGlzLl9fc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIGZyZWUgc2Nhbm5lciBhZGRyZXNzICovXG4gIF9fZGVzdHJveVNjYW5uZXJBZGRyZXNzKCkge1xuICAgIGlmICh0aGlzLl9fZGVzdHJveVNjYW5uZXJDYWxsYmFjaykge1xuICAgICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW9FbGVtZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9ID0gYXdhaXQgdGhpcy5fX3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpO1xuICAgIGlmICghaXNTdXBwb3J0ZWRSZXNvbHV0aW9uKSB7XG4gICAgICBpZiAocmVzb2x1dGlvblRleHQgIT09ICdub3QgcmVhZHknKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzU3VwcG9ydGVkUmVzb2x1dGlvbjtcbiAgfVxuICBfX2dldFJvdGF0aW9uRGVncmVlKCkge1xuICAgIHJldHVybiAodGhpcy5fX29wdGlvbnMucm90YXRpb25EZWdyZWUgJSAzNjAgKyAzNjApICUgMzYwO1xuICB9XG4gIF9fZ2V0TWlycm9yTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX29wdGlvbnMubWlycm9yTW9kZTtcbiAgfVxuICBhc3luYyBfX2Nyb3BJbWFnZUZyb21WaWRlbygpIHtcbiAgICBpZiAoIXRoaXMuX19jYW1TZXRDb21wbGV0ZSkgcmV0dXJuIFtudWxsLCBudWxsLCBudWxsXTtcbiAgICBsZXQgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICAvLyBzb3VyY2UgaW1hZ2UgKG9yIHZpZGVvKVxuICAgIC8vIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSKIHN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSD4pSI4pSI4pSI4pSIIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgc3ggIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogc0hlaWdodCAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiBjYW52YXNcbiAgICAvLyDilIMgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICAgICAgICDilIPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAgICAgICAgc1dpZHRoICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICDilIogZHkgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg+KUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgZHggICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogZEhlaWdodCDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICBkV2lkdGggICAgICAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHkpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL2RyYXdJbWFnZVxuXG4gICAgbGV0IGNhbGNDYW52YXMgPSBjYW52YXM7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCA9IHRoaXMuX19jcm9wSW1hZ2VTaXplV2lkdGg7XG4gICAgbGV0IGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0ID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb247XG4gICAgY29uc3QgaXNBbGllbkJhY2sgPSB0aGlzLl9fb2NyVHlwZSA9PT0gJ2FsaWVuLWJhY2snO1xuICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW2NhbGNDcm9wSW1hZ2VTaXplV2lkdGgsIGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0XSA9IFtjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCwgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aF07XG4gICAgICBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbY2FsY1Jlc29sdXRpb25faCwgY2FsY1Jlc29sdXRpb25fd107XG4gICAgICBjYWxjQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgY2FsY01heFNXaWR0aCA9IDk5OTk5O1xuICAgIGxldCBjYWxjTWF4U0hlaWdodCA9IDk5OTk5O1xuICAgIGlmICh0aGlzLl9fdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuX191aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzeCwgc3k7XG4gICAgY29uc3QgcmF0aW8gPSBjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgKiByYXRpbyksIGNhbGNNYXhTSGVpZ2h0KTtcbiAgICBzeCA9IE1hdGgubWF4KE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudFdpZHRoIC0gY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCkgLyAyICogcmF0aW8pLCAwKTtcbiAgICBzeSA9IE1hdGgubWF4KE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudEhlaWdodCAtIGNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0KSAvIDIgKiByYXRpbyksIDApO1xuICAgIGlmIChpc0FsaWVuQmFjaykge1xuICAgICAgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW2NhbGNSZXNvbHV0aW9uX2gsIGNhbGNSZXNvbHV0aW9uX3ddO1xuICAgIH1cbiAgICBjYWxjQ2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBjYWxjUmVzb2x1dGlvbl93KTtcbiAgICBjYWxjQ2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgY2FsY1Jlc29sdXRpb25faCk7XG4gICAgY29uc3QgY2FsY0NvbnRleHQgPSBjYWxjQ2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgfSk7XG4gICAgY2FsY0NvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgMCwgMCwgY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faCk7XG4gICAgbGV0IGltZ0RhdGEsIGltZ0RhdGFVcmw7XG4gICAgaW1nRGF0YSA9IGNhbGNDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBpbWdEYXRhVXJsID0gY2FsY0NhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcbiAgICBpZiAoaXNBbGllbkJhY2spIHtcbiAgICAgIFtpbWdEYXRhLCBpbWdEYXRhVXJsXSA9IGF3YWl0IHRoaXMuX19yb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgMjcwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fX3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCB0aGlzLl9fZ2V0Um90YXRpb25EZWdyZWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbaW1nRGF0YSwgaW1nRGF0YVVybF07XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIGRlZ3JlZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmIChkZWdyZWUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShbaW1nRGF0YSwgaW1nRGF0YVVybF0pO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBpbWcuc3JjID0gaW1nRGF0YVVybDtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBjYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgICAgY29uc3QgdGVtcENvbnRleHQgPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRlbXBDYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChbMCwgMTgwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gOTApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcuaGVpZ2h0LCAwKTtlbHNlIGlmIChkZWdyZWUgPT09IDE4MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy53aWR0aCwgaW1nLmhlaWdodCk7ZWxzZSBpZiAoZGVncmVlID09PSAyNzApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZSgwLCBpbWcud2lkdGgpO1xuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBjb25zdCBuZXdJbWFnZURhdGEgPSBbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSA/IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcuaGVpZ2h0LCBpbWcud2lkdGgpIDogdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgICAgIHJlc29sdmUoW25ld0ltYWdlRGF0YSwgdGVtcENhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKV0pO1xuICAgICAgICB0ZW1wQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfX2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIGJveFR5cGUgPSAwLCByZXRyeUltZyA9IG51bGwpIHtcbiAgICBpZiAoIWFkZHJlc3MgfHwgYWRkcmVzcyA8IDApIHtcbiAgICAgIHJldHVybiBbZmFsc2UsIG51bGxdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbGV0IGltZ0RhdGE7XG4gICAgICBsZXQgaW1nRGF0YVVybCA9IG51bGw7XG4gICAgICBjb25zdCBbYnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGlmIChyZXRyeUltZyAhPT0gbnVsbCkge1xuICAgICAgICBpbWdEYXRhID0gcmV0cnlJbWc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBbaW1nRGF0YSwgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9fY3JvcEltYWdlRnJvbVZpZGVvKCk7XG4gICAgICB9XG4gICAgICBpZiAoISEhaW1nRGF0YSkge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgYnVmZmVyKTtcbiAgICAgIGxldCBrb3IgPSBmYWxzZSxcbiAgICAgICAgYWxpZW4gPSBmYWxzZSxcbiAgICAgICAgcGFzc3BvcnQgPSBmYWxzZTtcbiAgICAgIHN3aXRjaCAodGhpcy5fX29jclR5cGUpIHtcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGtvciA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBwYXNzcG9ydCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tYmFjayc6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWxpZW4gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICB9XG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmIChrb3IgfHwgcGFzc3BvcnQgfHwgYWxpZW4pIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5kZXRlY3RfaWRjYXJkX29wdChidWZmZXIsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0LCBhZGRyZXNzLCBrb3IsIGFsaWVuLCBwYXNzcG9ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLmRldGVjdF9pZGNhcmQoYnVmZmVyLCB0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0NhcmRib3hEZXRlY3RlZCByZXN1bHQgLT0tLS0tLScsIHJlc3VsdClcbiAgICAgIHJldHVybiBbISFyZXN1bHQsIGltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3IgOiAnICsgZTtcbiAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgX19zdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIG9jclR5cGUsIHNzYU1vZGUsIGlzU2V0SWdub3JlQ29tcGxldGUsIGltZ0RhdGEsIGltZ0RhdGFVcmwpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGFkZHJlc3MgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgICBjb25zdCByZWNvZ25pdGlvbiA9IGFzeW5jIGlzU2V0SWdub3JlQ29tcGxldGUgPT4ge1xuICAgICAgICBpZiAoaXNTZXRJZ25vcmVDb21wbGV0ZSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19pc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCAwLCBpbWdEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLl9fT0NSRW5naW5lLnNjYW5JRENhcmQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhblBhc3Nwb3J0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkFsaWVuKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhbGllbi1iYWNrJzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkFsaWVuQmFjayhhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuX19PQ1JFbmdpbmUuc2NhbkNyZWRpdChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IOyLoOyaqey5tOuTnOuKlCDslYTsp4Ega2V5OnZhbHVlIO2Yle2DnOuhnCDrs4DtmZgg7JWI65CY7Ja0IOyeiOydjFxuICAgICAgICBpZiAob2NyVHlwZSA9PT0gJ2NyZWRpdCcpIHtcbiAgICAgICAgICBpZiAob2NyUmVzdWx0ID09PSBudWxsIHx8IG9jclJlc3VsdCA9PT0gJycgfHwgb2NyUmVzdWx0ID09PSAnZmFsc2UnIHx8IG9jclJlc3VsdFswXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy5fX2NzdlRvT2JqZWN0KG9jclJlc3VsdCk7XG4gICAgICAgIGlmIChvY3JSZXN1bHQ/LmNvbXBsZXRlICE9PSAndW5kZWZpbmVkJyAmJiBvY3JSZXN1bHQ/LmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNTZXRJZ25vcmVDb21wbGV0ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX19tYW51YWxPQ1JSZXRyeUNvdW50IDwgdGhpcy5fX21hbnVhbE9DUk1heFJldHJ5Q291bnQpIHtcbiAgICAgICAgICAgICAgLy8gZGV0ZWN0ZWRDYXJkUXVldWXsl5DshJwg7ZWc7J6l7J2EIOq6vOuCtOyEnCDqsLHsi6DtlZzri6QuXG4gICAgICAgICAgICAgIC8vIOyggOyepeuQmOyWtOyeiOuKlCDsnbTrr7jsp4DsnZgg7Iir7J6Q6rCAIHJldHJ5IOuztOuLpCDsnpHsnYDqsr3smrAg64yA67mE7ZWY7JesICXrpbwg7IKs7Jqp7ZWoXG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXVlSWR4ID0gdGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgJSB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICBpbWdEYXRhID0gdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlW3F1ZXVlSWR4XTtcbiAgICAgICAgICAgICAgdGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlY29nbml0aW9uKGlzU2V0SWdub3JlQ29tcGxldGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8g7IKs7KeEIO2VnOyepeycvOuhnCBPQ1Ig7Iuk7YyoIChwb3B1cCDrgrTrpqzqs6Agc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpIOyymOumrD9cbiAgICAgICAgICAgICAgdGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPSAwO1xuICAgICAgICAgICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7IC8vIO2MneyXheydtCDrgrTroKTqsIjrlYwg7LKY66as65CY7KeA66eMIOuvuOumrCDsspjrpqxcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVELCBmYWxzZSwgaW1nRGF0YVVybCk7XG4gICAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZShkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnZpZGVvLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJydcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIC8vIGVuZCBvZiBmdW5jdGlvbiByZWNvZ25pdGlvbigpXG5cbiAgICAgIGlmIChhd2FpdCByZWNvZ25pdGlvbihpc1NldElnbm9yZUNvbXBsZXRlKSkge1xuICAgICAgICBjb25zdCBpc0NyZWRpdENhcmQgPSBvY3JUeXBlID09PSAnY3JlZGl0JztcbiAgICAgICAgbGV0IG9jckltYWdlTW9kZTtcbiAgICAgICAgaWYgKGlzQ3JlZGl0Q2FyZCkge1xuICAgICAgICAgIG9jckltYWdlTW9kZSA9IHRoaXMuT0NSX0lNR19NT0RFLkNST1BQSU5HO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX19vcHRpb25zLnVzZUltYWdlV2FycGluZykge1xuICAgICAgICAgIG9jckltYWdlTW9kZSA9IHRoaXMuT0NSX0lNR19NT0RFLldBUlBJTkc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2NySW1hZ2VNb2RlID0gdGhpcy5PQ1JfSU1HX01PREUuTk9ORTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3JpZ2luSW1hZ2UgPSBhd2FpdCB0aGlzLl9fZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdGhpcy5PQ1JfSU1HX01BU0tfTU9ERS5GQUxTRSwgb2NySW1hZ2VNb2RlKTtcbiAgICAgICAgbGV0IG1hc2tJbWFnZSA9IG51bGw7XG4gICAgICAgIGxldCBmYWNlSW1hZ2UgPSBudWxsO1xuICAgICAgICBpZiAoIWlzQ3JlZGl0Q2FyZCkge1xuICAgICAgICAgIG1hc2tJbWFnZSA9IGF3YWl0IHRoaXMuX19nZXRJbWFnZUJhc2U2NChhZGRyZXNzLCB0aGlzLk9DUl9JTUdfTUFTS19NT0RFLlRSVUUsIHRoaXMuT0NSX0lNR19NT0RFLldBUlBJTkcpO1xuICAgICAgICAgIG1hc2tJbWFnZSA9IG1hc2tJbWFnZSA9PT0gJ2RhdGE6JyA/IG51bGwgOiBtYXNrSW1hZ2U7XG4gICAgICAgICAgZmFjZUltYWdlID0gdGhpcy5fX29wdGlvbnMudXNlRmFjZUltYWdlID8gYXdhaXQgdGhpcy5fX2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIG51bGwsIG9jckltYWdlTW9kZSwgJ2ZhY2UnKSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNzYU1vZGUpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSwgZmFsc2UsIG1hc2tJbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gU1RBUlRcbiAgICAgICAgLy8gaWYgKCFpc0NyZWRpdENhcmQgJiYgdGhpcy5fX29wdGlvbnMudXNlUGlpRW5jcnlwdE1vZGUpIHtcbiAgICAgICAgLy8gICBvcmlnaW5JbWFnZSA9IHRoaXMuX19nZXRQaWlFbmNyeXB0SW1hZ2VCYXNlNjQoXG4gICAgICAgIC8vICAgICBhZGRyZXNzLFxuICAgICAgICAvLyAgICAgdGhpcy5PQ1JfSU1HX01BU0tfTU9ERS5GQUxTRSxcbiAgICAgICAgLy8gICAgIG9jckltYWdlTW9kZVxuICAgICAgICAvLyAgICk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ2VuY3J5cHQgYmFzZTY0IGltYWdlJywgeyBvcmlnaW5JbWFnZSB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvL1xuICAgICAgICAvLyBpZiAoZmFjZUltYWdlICYmIHRoaXMuX19vcHRpb25zLnVzZVBpaUVuY3J5cHRGYWNlKSB7XG4gICAgICAgIC8vICAgZmFjZUltYWdlID0gdGhpcy5fX2dldFBpaUVuY3J5cHRJbWFnZUJhc2U2NChcbiAgICAgICAgLy8gICAgIGFkZHJlc3MsXG4gICAgICAgIC8vICAgICBudWxsLFxuICAgICAgICAvLyAgICAgb2NySW1hZ2VNb2RlLFxuICAgICAgICAvLyAgICAgJ2ZhY2UnXG4gICAgICAgIC8vICAgKTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnZW5jcnlwdCBiYXNlNjQgZmFjZSBpbWFnZScsIHsgZmFjZUltYWdlIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIEVORFxuXG4gICAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlLCBmYWNlSW1hZ2VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgX19zdGFydFRydXRoKG9jclR5cGUsIGFkZHJlc3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuX19nZXRCdWZmZXIoKTtcbiAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoJy1zc2EnKSA+IC0xKSB7XG4gICAgICAgIC8vIFRPRE86IHdvcmtlcuulvCDsgqzsmqntlZjsl6wg66mU7J24KFVJIOuenOuNlOungSkg7Iqk66CI65Oc6rCAIOupiOy2lOyngCDslYrrj4TroZ0g7LKY66asIO2VhOyalCAo7ZiE7J6sIGxvYWRpbmcgVUkg652E7Jqw66m0IOyVoOuLiOuplOydtOyFmCDrqYjstqQpXG4gICAgICAgIC8vIFRPRE86IHNldFRpbWVvdXQg7Jy866GcIOuCmOuIhOuNlOudvOuPhCDtmqjqs7wg7JeG7J2MIHNldFRpbWVvdXQg7KeA7Jqw6rOgLCB3b3JrZXLroZwg67OA6rK9IO2VhOyalFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHRoaXMuX19PQ1JFbmdpbmUuc2NhblRydXRoKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcikpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU1NBIE1vZGUgaXMgdHJ1ZS4gYnV0LCBvY3JUeXBlIGlzIGludmFsaWQgOiAnICsgb2NyVHlwZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fY3N2VG9PYmplY3Qoc3RyKSB7XG4gICAgbGV0IHBhaXJzID0gc3RyLnNwbGl0KCc7Jyk7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJzonKTtcbiAgICAgIGlmIChwYWlyLmxlbmd0aCA9PT0gMikgb2JqW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBfX2dldE1hc2tJbmZvKGFkZHJlc3MpIHtcbiAgICBpZiAoYWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgcmV0dXJuICdjaGVja1ZhbGlkYXRpb24gRmFpbCc7XG4gICAgfVxuICAgIGNvbnN0IFssLCBtYXNrSW5mb1Jlc3VsdEJ1Zl0gPSB0aGlzLl9fZ2V0QnVmZmVyKCk7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgcmVzdWx0ID0gdGhpcy5fX09DUkVuZ2luZS5nZXRNYXNrUmVjdChhZGRyZXNzLCBtYXNrSW5mb1Jlc3VsdEJ1Zik7XG4gICAgaWYgKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdCA9PT0gJycpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG5cbiAgICAvLyB0aGlzLl9fZGVzdHJveU1hc2tJbmZvUmVzdWx0QnVmZmVyKCk7XG5cbiAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IHRoaXMuX19jc3ZUb09iamVjdChyZXN1bHQpO1xuICB9XG4gIGFzeW5jIF9fc3RhcnRUcnV0aFJldHJ5KG9jclR5cGUsIGFkZHJlc3MsIGltZ0RhdGEpIHtcbiAgICBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcywgMCwgaW1nRGF0YSk7XG4gICAgLy8gYXdhaXQgdGhpcy5fX3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgdHJ1ZSk7ICAgICAgLy8gZm9yIOyEseuKpeydhCDsnITtlbQg7KeE7ZaJIFhcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fX3N0YXJ0VHJ1dGgob2NyVHlwZSwgYWRkcmVzcyk7XG4gIH1cbiAgX19zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gMey0iCBkZWxheSDtm4Qg7Iuk7ZaJXG4gICAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBhc3luYyBfX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgIGNvbnN0IGlzUGFzc3BvcnQgPSB0aGlzLl9fb2NyVHlwZS5pbmNsdWRlcygncGFzc3BvcnQnKTtcbiAgICAgIGF3YWl0IHRoaXMuX19zZXR1cFZpZGVvKGlzUGFzc3BvcnQpO1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgLy8gY29uc3QgW3RyYWNrXSA9IHRoaXMuX19zdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcbiAgICAgICAgLy8gY29uc3QgY2FwYWJpbGl0eSA9IHRyYWNrLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdDYXJkU2Nhbl9faW5pdGlhbGl6ZSBjYXBhYmlsaXR5JywgY2FwYWJpbGl0eSk7XG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiB2aWRlbykge1xuICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHRoaXMuX19zdHJlYW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQXZvaWQgdXNpbmcgdGhpcyBpbiBuZXcgYnJvd3NlcnMsIGFzIGl0IGlzIGdvaW5nIGF3YXkuXG4gICAgICAgICAgdmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5fX3N0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygncHJvY2VlZENhbWVyYVBlcm1pc3Npb24gLSBvbmxvYWRlZG1ldGFkYXRhJyk7XG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICB2b2lkIDA7XG5cbiAgICAgICAgICAvLyB2aWRlbyBlbGVtZW50IHN0eWxlIOyEpOyglVxuICAgICAgICAgIHRoaXMuX192aWRlb09yaWVudGF0aW9uID0gdmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvLnZpZGVvSGVpZ2h0IDwgMSA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB0aGlzLl9fY2FtU2V0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19hZGp1c3RTdHlsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICB2aWRlby53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ05vdEFsbG93ZWRFcnJvcicpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ0NhbWVyYSBBY2Nlc3MgUGVybWlzc2lvbiBpcyBub3QgYWxsb3dlZCc7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aGlzLl9fb25GYWlsdXJlUHJvY2VzcygnRTQwMycsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICB9IGVsc2UgaWYgKGUubmFtZSA9PT0gJ05vdFJlYWRhYmxlRXJyb3InKSB7XG4gICAgICAgIC8vIOuLpOuluOqzs+yXkOyEnCDsubTrqZTrnbwg7J6Q7JuQ7J2EIOyCrOyaqeykkVxuICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5fX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTsgLy8g7J6s6reAIO2YuOy2nFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9fc2V0U3R5bGUoZWwsIHN0eWxlKSB7XG4gICAgaWYgKGVsICYmIHN0eWxlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVsLnN0eWxlLCBzdHlsZSk7XG4gICAgfVxuICB9XG4gIF9fY2hhbmdlT0NSU3RhdHVzKHZhbCkge1xuICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAvLyBPQ1JcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuTk9UX1JFQURZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5JTl9QUk9HUkVTUy5SRUFEWTpcbiAgICAgICAgdGhpcy5fX29jclN0YXR1cyA9IHRoaXMuT0NSX1NUQVRVUy5SRUFEWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQ6XG4gICAgICBjYXNlIHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1M7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBOlxuICAgICAgY2FzZSB0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQ6XG4gICAgICAgIHRoaXMuX19vY3JTdGF0dXMgPSB0aGlzLk9DUl9TVEFUVVMuRE9ORTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9fY2hhbmdlU3RhZ2UodmFsLCBmb3JjZVVwZGF0ZSA9IGZhbHNlLCByZWNvZ25pemVkSW1hZ2UgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX19wcmV2aW91c0luUHJvZ3Jlc3NTdGVwID09PSB2YWwgJiYgZm9yY2VVcGRhdGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX19jaGFuZ2VPQ1JTdGF0dXModmFsKTtcbiAgICB0aGlzLl9fcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAgPSB2YWw7XG4gICAgY29uc3Qge1xuICAgICAgZ3VpZGVCb3gsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIGNhcHR1cmVCdXR0b25cbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnN0eWxlLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cyArICdweCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZVt2YWxdXG4gICAgfTtcbiAgICBpZiAoZ3VpZGVCb3gpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwgc3R5bGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UpIHtcbiAgICAgIGlmICghIXRoaXMuX19vcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFza0JveFdyYXA/LnF1ZXJ5U2VsZWN0b3IoJyNtYXNrQm94T3V0ZXInKT8uc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGVbdmFsXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkpIHtcbiAgICAgIGNhcHR1cmVCdXR0b24/LnF1ZXJ5U2VsZWN0b3IoJyNjYXB0dXJlQnV0dG9uJyk/LnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX19vcHRpb25zLmNhcHR1cmVCdXR0b25TdHlsZVsnYmFzZV9jb2xvciddKTtcbiAgICB9XG4gICAgY29uc3Qgb2NyTW9kZSA9IHRoaXMuX19pc1N3aXRjaFRvU2VydmVyTW9kZSA/ICdzZXJ2ZXInIDogJ3dhc20nO1xuICAgIGlmICh0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlVG9wVUkgfHwgdGhpcy5fX29wdGlvbnMudXNlVG9wVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuX19vbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCBvY3JNb2RlLCB0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0aGlzLl9fdG9wVUksICd0b3AnLCB0aGlzLl9fb3B0aW9ucy51c2VUb3BVSVRleHRNc2csIHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSwgdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJLCByZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJIHx8IHRoaXMuX19vcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLl9fb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgb2NyTW9kZSwgdGhpcy5fX29jclR5cGUsIHRoaXMuX19pblByb2dyZXNzU3RlcCwgdGhpcy5fX21pZGRsZVVJLCAnbWlkZGxlJywgdGhpcy5fX29wdGlvbnMudXNlTWlkZGxlVUlUZXh0TXNnLCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUksIHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSwgcmVjb2duaXplZEltYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSSB8fCB0aGlzLl9fb3B0aW9ucy51c2VCb3R0b21VSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy5fX29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIG9jck1vZGUsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9faW5Qcm9ncmVzc1N0ZXAsIHRoaXMuX19ib3R0b21VSSwgJ2JvdHRvbScsIHRoaXMuX19vcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZywgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJLCB0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUksIHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUyB8fCB2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfRkFJTEVEKSB7XG4gICAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcmV2aWV3VUkocmVjb2duaXplZEltYWdlKTtcblxuICAgICAgICAvLyBGQUlM7J24IOqyveyasCA17LSI7ZuEIOyekOuPmeydhCDssL3ri6vsnYxcbiAgICAgICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5NQU5VQUxfQ0FQVFVSRV9GQUlMRUQpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX19oaWRlUHJldmlld1VJLCAzMDAwLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpZGVvXG4gICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZVByZXZpZXdVSSkge1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWwgPT09IHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0EpIHtcbiAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy5fX2hpZGVQcmV2aWV3VUkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fX3NsZWVwKDEpOyAvLyBmb3IgVUkgdXBkYXRlXG4gIH1cblxuICBfX3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmV2aWV3VUlXcmFwLFxuICAgICAgcHJldmlld0ltYWdlXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgcHJldmlld0ltYWdlLnNyYyA9IHJlY29nbml6ZWRJbWFnZTtcbiAgICBjb25zdCBpbWdTdHlsZSA9IHtcbiAgICAgICdtYXgtd2lkdGgnOiAnNzAlJyxcbiAgICAgICdtYXgtaGVpZ2h0JzogJzYwJSdcbiAgICB9O1xuICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3SW1hZ2UsIGltZ1N0eWxlKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJV3JhcCwge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSk7XG4gIH1cbiAgX19oaWRlUHJldmlld1VJKGNvbnRleHQpIHtcbiAgICBsZXQgX3RoaXNfID0gdGhpcztcbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgX3RoaXNfID0gY29udGV4dDtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBwcmV2aWV3VUlXcmFwLFxuICAgICAgcHJldmlld0ltYWdlXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgX3RoaXNfLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9KTtcbiAgICBfdGhpc18uX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KTtcbiAgICBwcmV2aWV3SW1hZ2Uuc3JjID0gJyc7XG4gIH1cbiAgYXN5bmMgX19nZXRJbnB1dERldmljZXMoKSB7XG4gICAgLy8gdGhyb3cgZXJyb3IgaWYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgbGV0IGNhbWVyYSA9IFtdO1xuICAgIGZvciAoY29uc3QgZGV2aWNlIG9mIGRldmljZXMpIHtcbiAgICAgIGlmIChkZXZpY2Uua2luZCA9PT0gJ3ZpZGVvaW5wdXQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGRldmljZSBpbnN0YW5jZW9mIElucHV0RGV2aWNlSW5mbykge1xuICAgICAgICAgICAgaWYgKGRldmljZS5nZXRDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FwID0gZGV2aWNlLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICAgICAgICBpZiAoY2FwPy5mYWNpbmdNb2RlPy5pbmNsdWRlcyh0aGlzLl9fZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNVbHRyYUNhbWVyYVJlZyA9IC91bHRyYXzsmrjtirjrnbwvZ2k7XG4gICAgICAgICAgICAgICAgaWYgKGlzVWx0cmFDYW1lcmFSZWcudGVzdChkZXZpY2UubGFiZWw/LnRvTG93ZXJDYXNlKCkpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYW1lcmEucHVzaChjYXAuZGV2aWNlSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaU9TIDE3IOuvuOunjOydmCBjaHJvbWUsIHNhZmFyaSDsl5DshJzripRcbiAgICAgICAgICAvLyBJbnB1dERldmljZUluZm8g6rCd7LK06rCAIOyXhuyWtOyEnCBnZXRDYXBhYmlsaXRpZXPrpbwg7ZmV7J247ZWgIOyImCDsl4bquLAg65WM66y47JeQXG4gICAgICAgICAgLy8gZGV2aWNlIGxhYmVs66eMIOuztOqzoCDtm4TrqbQg7Lm066mU652866GcIOyCrOyaqVxuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQmFja0NhbWVyYVJlZyA9IC9iYWNrfO2bhOuptC9nO1xuICAgICAgICAgICAgaWYgKGRldmljZS5sYWJlbD8ubGVuZ3RoICYmIGlzQmFja0NhbWVyYVJlZy50ZXN0KGRldmljZS5sYWJlbCkpIHtcbiAgICAgICAgICAgICAgY2FtZXJhLnB1c2goZGV2aWNlLmRldmljZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX2RlYnVnKGBjYW1lcmEgPSAke2NhbWVyYX0sIGNhbWVyYS5sZW5ndGggPSAke2NhbWVyYS5sZW5ndGh9YCk7XG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxuICBjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy5fX3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLl9fdWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICB0aGlzLl9fcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBpc0NoYW5nZWRcbiAgICB9O1xuICB9XG4gIF9fY2xlYXJDdXN0b21VSShvYmopIHtcbiAgICBvYmouaW5uZXJIVE1MID0gJyc7XG4gICAgb2JqLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBvYmoucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShvYmosIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9fc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVdyYXAsXG4gICAgICBjYXB0dXJlVUksXG4gICAgICBjYXB0dXJlQnV0dG9uLFxuICAgICAgcHJldmlld1VJV3JhcCxcbiAgICAgIHByZXZpZXdVSSxcbiAgICAgIHByZXZpZXdJbWFnZSxcbiAgICAgIHN3aXRjaFVJV3JhcCxcbiAgICAgIHN3aXRjaFVJLFxuICAgICAgcHJlbG9hZGluZ1VJV3JhcCxcbiAgICAgIHByZWxvYWRpbmdVSVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmICghb2NyKSB0aHJvdyBuZXcgRXJyb3IoJ29jciBkaXYgZWxlbWVudCBpcyBub3QgZXhpc3QnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB2aWRlb1dyYXAucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94V3JhcCkgZ3VpZGVCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmICh2aWRlbykgdmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGNhbnZhcykgY2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChyb3RhdGlvbkNhbnZhcykgcm90YXRpb25DYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94KSBndWlkZUJveC5yZW1vdmUoKTtcbiAgICBpZiAobWFza0JveFdyYXApIG1hc2tCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmIChwcmV2ZW50VG9GcmVlemVWaWRlbykgcHJldmVudFRvRnJlZXplVmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGN1c3RvbVVJV3JhcCkgY3VzdG9tVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAodG9wVUkgJiYgIXRoaXMuX19vcHRpb25zLnVzZVRvcFVJKSB0aGlzLl9fY2xlYXJDdXN0b21VSSh0b3BVSSk7XG4gICAgaWYgKG1pZGRsZVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VNaWRkbGVVSSkgdGhpcy5fX2NsZWFyQ3VzdG9tVUkobWlkZGxlVUkpO1xuICAgIGlmIChib3R0b21VSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlQm90dG9tVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKGJvdHRvbVVJKTtcbiAgICBpZiAoY2FwdHVyZVVJV3JhcCkgY2FwdHVyZVVJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBjYXB0dXJlIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAoY2FwdHVyZVVJICYmICF0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkpIHRoaXMuX19jbGVhckN1c3RvbVVJKGNhcHR1cmVVSSk7XG4gICAgaWYgKHByZXZpZXdVSVdyYXApIHByZXZpZXdVSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8gcHJldmlldyBVSeulvCDrr7jsgqzsmqnsnbwg6rK97JqwIOyViOydmCDrgrTsmqnsnYQg7IKt7KCcXG4gICAgaWYgKHByZXZpZXdVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB0aGlzLl9fY2xlYXJDdXN0b21VSShwcmV2aWV3VUkpO1xuICAgIGlmIChzd2l0Y2hVSVdyYXApIHN3aXRjaFVJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBzd2l0Y2ggVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmIChzd2l0Y2hVSSAmJiAhdGhpcy5fX29wdGlvbnMudXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlKSB0aGlzLl9fY2xlYXJDdXN0b21VSShzd2l0Y2hVSSk7XG4gICAgY29uc3Qgcm90YXRpb25EZWdyZWUgPSB0aGlzLl9fZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCA9IFs5MCwgMjcwXS5pbmNsdWRlcyhyb3RhdGlvbkRlZ3JlZSk7XG4gICAgbGV0IG9jclN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCBvY3JTdHlsZSk7XG4gICAgY29uc3Qgd3JhcFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyB2ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcbiAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH07XG4gICAgdmlkZW9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlkZW9XcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlb1dyYXAnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB7XG4gICAgICB3aGlsZSAodmlkZW9XcmFwLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdmlkZW9XcmFwLnJlbW92ZUNoaWxkKHZpZGVvV3JhcC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUobWFza0JveFdyYXAsIHdyYXBTdHlsZSk7XG4gICAgbGV0IG1hc2tfZnJhbWUgPSB0aGlzLl9fb3B0aW9ucy5tYXNrRnJhbWVTdHlsZS5iYXNlX2NvbG9yICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLl9fb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICBtYXNrX2ZyYW1lID0gdGhpcy5fX29wdGlvbnMubWFza0ZyYW1lU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9ICcnICsgXCIgIDxzdmcgaWQ9J21hc2tCb3hDb250YWluZXInIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XFxuXCIgKyBcIiAgICA8bWFzayBpZD0nbWFzay1yZWN0Jz5cXG5cIiArIFwiICAgICAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nd2hpdGUnPjwvcmVjdD5cXG5cIiArIFwiICAgICAgPHN2ZyB4PSc1MCUnIHk9JzUwJScgb3ZlcmZsb3c9J3Zpc2libGUnPlxcblwiICsgXCIgICAgICAgICAgPHJlY3QgaWQ9J21hc2tCb3hJbm5lcidcXG5cIiArIFwiICAgICAgICAgICAgd2lkdGg9JzQwMCcgaGVpZ2h0PScyNjAnXFxuXCIgKyBcIiAgICAgICAgICAgIHg9Jy0yMDAnIHk9Jy0xMzAnXFxuXCIgKyBcIiAgICAgICAgICAgIHJ4PScxMCcgcnk9JzEwJ1xcblwiICsgXCIgICAgICAgICAgICBmaWxsPSdibGFjaycgc3Ryb2tlPSdibGFjayc+PC9yZWN0PlxcblwiICsgJyAgICAgIDwvc3ZnPlxcbicgKyAnICAgIDwvbWFzaz5cXG4nICsgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgKyBcIiAgICAgICAgICBmaWxsPSdcIiArIG1hc2tfZnJhbWUgKyBcIicgbWFzaz0ndXJsKCNtYXNrLXJlY3QpJz48L3JlY3Q+XFxuXCIgKyAnICA8L3N2Zz4nO1xuICAgIG9jci5hcHBlbmRDaGlsZChtYXNrQm94V3JhcCk7XG4gICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpO1xuICAgIGxldCB2aWRlb1N0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfTtcbiAgICBjb25zdCByb3RhdGVDc3MgPSAncm90YXRlKCcgKyByb3RhdGlvbkRlZ3JlZSArICdkZWcpJztcbiAgICBjb25zdCBtaXJyb3JDc3MgPSAncm90YXRlWSgxODBkZWcpJztcbiAgICBjb25zdCByb3RhdGVBbmRNaXJyb3JDc3MgPSBtaXJyb3JDc3MgKyAnICcgKyByb3RhdGVDc3M7XG4gICAgaWYgKHRoaXMuX19pc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBpZiAodGhpcy5fX2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlQW5kTWlycm9yQ3NzXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlQ3NzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9fZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgdHJhbnNmb3JtOiBtaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB2aWRlb1N0eWxlKTtcbiAgICB2aWRlb1dyYXAuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgIGd1aWRlQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGd1aWRlQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnZ3VpZGVCb3hXcmFwJyk7XG4gICAgdGhpcy5fX3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcbiAgICBndWlkZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveCcpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0pO1xuICAgIGd1aWRlQm94V3JhcC5hcHBlbmRDaGlsZChndWlkZUJveCk7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYW52YXMnKTtcbiAgICBjb25zdCBjYW52YXNTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuX19vcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gdGhpcy5fX2lzUm90YXRlZDkwb3IyNzAgPyAnbm9uZScgOiAnZGlzcGxheScgOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMzBweCcsXG4gICAgICBib3JkZXI6ICdncmVlbiAycHggc29saWQnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FudmFzLCBjYW52YXNTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgcm90YXRpb25DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByb3RhdGlvbkNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncm90YXRpb25DYW52YXMnKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocm90YXRpb25DYW52YXMsIHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuX19vcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gdGhpcy5fX2lzUm90YXRlZDkwb3IyNzAgPyAnZGlzcGxheScgOiAnbm9uZScgOiAnbm9uZScsXG4gICAgICBoZWlnaHQ6ICcyNSUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogJzBweCcsXG4gICAgICB0b3A6ICczMHB4JyxcbiAgICAgIGJvcmRlcjogJ2JsdWUgMnB4IHNvbGlkJ1xuICAgIH0pO1xuICAgIG9jci5hcHBlbmRDaGlsZChyb3RhdGlvbkNhbnZhcyk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmVudFRvRnJlZXplVmlkZW8nKTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJldmVudFRvRnJlZXplVmlkZW8sIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAnMTAnLFxuICAgICAgcmlnaHQ6ICcxMCdcbiAgICB9KTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlby5pbm5lckhUTUwgPSAnJyArICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBzdHlsZT1cIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcIiB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCI+XFxuJyArICcgIDxjaXJjbGUgY3g9XCI4NFwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIwLjU1NTU1NTU1NTU1NTU1NTZzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MVwiIHZhbHVlcz1cIjEwOzBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDFcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJmaWxsXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwiZGlzY3JldGVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiIzg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMFwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiMTZcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiIzg2ODY4NjAwXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMC41NTU1NTU1NTU1NTU1NTU2c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0wLjU1NTU1NTU1NTU1NTU1NTZzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjODY4Njg2MDBcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjExMTExMTExMTExMTExMTJzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuMTExMTExMTExMTExMTExMnNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiMTZcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiM4Njg2ODYwMFwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS42NjY2NjY2NjY2NjY2NjY1c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICc8L3N2Zz4nO1xuICAgIG9jci5hcHBlbmRDaGlsZChwcmV2ZW50VG9GcmVlemVWaWRlbyk7XG4gICAgY3VzdG9tVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VzdG9tVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjdXN0b21VSVdyYXAnKTtcbiAgICBjb25zdCBjdXN0b21VSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY3VzdG9tVUlXcmFwLCBjdXN0b21VSVdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGN1c3RvbVVJV3JhcCk7XG5cbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSSDsgqzsmqkodXNlKeyXrOu2gOyZgCDqtIDqs4Tsl4bsnbQg7JiB7Jet7J2EIOyeoeq4sCDsnITtlbQsIGRpduqwgCDsl4bsnLzrqbQg7IOd7ISxXG4gICAgLy8gYWRqdXN0U3R5bGUoKSDsl5DshJwg7IS467aA7KCB7J24IOyCrOydtOymiOyZgCDsnITsuZjqsJIg64+Z7KCB7Jy866GcIOyEpOygleuQqC5cbiAgICBpZiAoIXRvcFVJKSB7XG4gICAgICB0b3BVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3RvcFVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZCh0b3BVSSk7XG4gICAgaWYgKCFtaWRkbGVVSSkge1xuICAgICAgbWlkZGxlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtaWRkbGVVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQobWlkZGxlVUkpO1xuICAgIGlmICghYm90dG9tVUkpIHtcbiAgICAgIGJvdHRvbVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib3R0b21VSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnYm90dG9tVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKGJvdHRvbVVJKTtcbiAgICBjYXB0dXJlVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FwdHVyZVVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY2FwdHVyZVVJV3JhcCcpO1xuICAgIGNvbnN0IGNhcHR1cmVVSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjZW50ZXInXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJV3JhcCwgY2FwdHVyZVVJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FwdHVyZVVJV3JhcCk7XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNhcHR1cmVVSSkge1xuICAgICAgaWYgKHRoaXMuX19pc1N3aXRjaFRvU2VydmVyTW9kZSB8fCB0aGlzLl9fb3B0aW9ucy51c2VGb3JjZUNvbXBsZXRlVUkpIHtcbiAgICAgICAgaWYgKCFjYXB0dXJlVUkpIHtcbiAgICAgICAgICBjYXB0dXJlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBjYXB0dXJlVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhcHR1cmVVSScpO1xuICAgICAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYXB0dXJlQnV0dG9uKSB7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhcHR1cmVCdXR0b24nKTtcbiAgICAgICAgICBsZXQgY2FwdHVyZUJ1dHRvblNyY1NWRyA9IGBgO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b25TcmNTVkcgKz0gYDxzdmcgd2lkdGg9JzgwJyBoZWlnaHQ9JzgwJyB2aWV3Qm94PScwIDAgODAgODAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+YDtcbiAgICAgICAgICBjYXB0dXJlQnV0dG9uU3JjU1ZHICs9IGAgIDxjaXJjbGUgaWQ9J2NhcHR1cmVCdXR0b24nIGN4PSc0MCcgY3k9JzQwJyByPSczOCcgZmlsbD0nIzU1NTU1NScgc3Ryb2tlPScjZmZmZmZmJyBzdHJva2Utd2lkdGg9JzQnLz5gO1xuICAgICAgICAgIGNhcHR1cmVCdXR0b25TcmNTVkcgKz0gYDwvc3ZnPmA7XG4gICAgICAgICAgY2FwdHVyZUJ1dHRvbi5pbm5lckhUTUwgPSBjYXB0dXJlQnV0dG9uU3JjU1ZHO1xuICAgICAgICAgIGNhcHR1cmVVSS5hcHBlbmRDaGlsZChjYXB0dXJlQnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlVUlXcmFwLmFwcGVuZENoaWxkKGNhcHR1cmVVSSk7XG4gICAgICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IF9fb25DbGlja0NhcHR1cmVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzXy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlKSB7XG4gICAgICAgICAgICBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIF90aGlzXy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmNhcHR1cmVCdXR0b24uc2V0QXR0cmlidXRlKCdpcy1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIF90aGlzXy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudmlkZW8sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzXy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuY2FwdHVyZUJ1dHRvbiwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY2FwdHVyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fb25DbGlja0NhcHR1cmVCdXR0b24pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fX29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICBwcmV2aWV3VUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcmV2aWV3VUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2aWV3VUlXcmFwJyk7XG4gICAgICBjb25zdCBwcmV2aWV3VUlXcmFwU3R5bGUgPSB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzAwMDAwMGFhJ1xuICAgICAgfTtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShwcmV2aWV3VUlXcmFwLCBwcmV2aWV3VUlXcmFwU3R5bGUpO1xuICAgICAgb2NyLmFwcGVuZENoaWxkKHByZXZpZXdVSVdyYXApO1xuICAgICAgaWYgKCFwcmV2aWV3VUkpIHtcbiAgICAgICAgcHJldmlld1VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByZXZpZXdVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld1VJJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUocHJldmlld1VJLCB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgJ21heC13aWR0aCc6ICc5MCUnLFxuICAgICAgICAnbWF4LWhlaWdodCc6ICc5MCUnXG4gICAgICB9KTtcbiAgICAgIHByZXZpZXdVSVdyYXAuYXBwZW5kQ2hpbGQocHJldmlld1VJKTtcbiAgICAgIGlmICghcHJldmlld0ltYWdlKSB7XG4gICAgICAgIHByZXZpZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdJbWFnZScpO1xuICAgICAgICBwcmV2aWV3VUkuYXBwZW5kQ2hpbGQocHJldmlld0ltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZU1hbnVhbFN3aXRjaFRvU2VydmVyTW9kZSkge1xuICAgICAgc3dpdGNoVUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzd2l0Y2hVSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3N3aXRjaFVJV3JhcCcpO1xuICAgICAgY29uc3Qgc3dpdGNoVUlXcmFwU3R5bGUgPSB7XG4gICAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJycsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICAgIH07XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoc3dpdGNoVUlXcmFwLCBzd2l0Y2hVSVdyYXBTdHlsZSk7XG4gICAgICBvY3IuYXBwZW5kQ2hpbGQoc3dpdGNoVUlXcmFwKTtcbiAgICAgIGlmICghc3dpdGNoVUkpIHtcbiAgICAgICAgc3dpdGNoVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3dpdGNoVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3N3aXRjaFVJJyk7XG4gICAgICAgIGxldCBzd2l0Y2hIVE1MID0gYGA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYDxkaXYgY2xhc3M9J2N1c3RvbS0tbGFiZWwgZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgZ2FwMTAnPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgPGxhYmVsIGZvcj0nbWFudWFsLXN3aXRjaC13YXNtLXRvLXNlcnZlci1jaGVja2JveCc+V0FTTTwvbGFiZWw+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8bGFiZWwgY2xhc3M9J3N3aXRjaCc+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICAgIDxpbnB1dCBpZD0nbWFudWFsLXN3aXRjaC13YXNtLXRvLXNlcnZlci1jaGVja2JveCcgdHlwZT0nY2hlY2tib3gnPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgICA8c3BhbiBjbGFzcz0nc2xpZGVyIHJvdW5kJz48L3NwYW4+YDtcbiAgICAgICAgc3dpdGNoSFRNTCArPSBgICA8L2xhYmVsPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYCAgPGxhYmVsIGZvcj0ncHJpb3JpdHktZmluYW5jZS1jb2h0bWxGb3JsaXN0LWNoZWNrYm94Jz5TZXJ2ZXI8L2xhYmVsPmA7XG4gICAgICAgIHN3aXRjaEhUTUwgKz0gYDwvZGl2PmA7XG4gICAgICAgIHN3aXRjaFVJLmlubmVySFRNTCA9IHN3aXRjaEhUTUw7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc2V0U3R5bGUoc3dpdGNoVUksIHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9KTtcbiAgICAgIHN3aXRjaFVJV3JhcC5hcHBlbmRDaGlsZChzd2l0Y2hVSSk7XG4gICAgICBjb25zdCBzd2l0Y2hDaGVja2JveCA9IHN3aXRjaFVJLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xuICAgICAgY29uc3QgX3RoaXNfID0gdGhpcztcbiAgICAgIGNvbnN0IF9fb25DbGlja1N3aXRjaFVJID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzXy5fX2lzU3dpdGNoVG9TZXJ2ZXJNb2RlID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGF3YWl0IF90aGlzXy5yZXN0YXJ0T0NSKF90aGlzXy5fX29jclR5cGUsIF90aGlzXy5fX29uU3VjY2VzcywgX3RoaXNfLl9fb25GYWlsdXJlLCBfdGhpc18uX19vbkluUHJvZ3Jlc3NDaGFuZ2UsIHRydWUpO1xuICAgICAgfTtcbiAgICAgIHN3aXRjaENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19vbkNsaWNrU3dpdGNoVUksIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHByZWxvYWRpbmdVSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmVsb2FkaW5nVUlXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmVsb2FkaW5nVUlXcmFwJyk7XG4gICAgY29uc3QgcHJlbG9hZGluZ1VJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMDAwMDAwZmYnXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0U3R5bGUocHJlbG9hZGluZ1VJV3JhcCwgcHJlbG9hZGluZ1VJV3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQocHJlbG9hZGluZ1VJV3JhcCk7XG4gICAgaWYgKCFwcmVsb2FkaW5nVUkpIHtcbiAgICAgIHByZWxvYWRpbmdVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJlbG9hZGluZ1VJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmVsb2FkaW5nVUknKTtcbiAgICAgIHByZWxvYWRpbmdVSS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtaW5mbycpO1xuICAgICAgcHJlbG9hZGluZ1VJLmlubmVySFRNTCA9ICcnICsgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHN0eWxlPVwiYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcIiB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCI+XFxuJyArICcgIDxjaXJjbGUgY3g9XCI4NFwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiI2ZmZmZmZmZmXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIwLjU1NTU1NTU1NTU1NTU1NTZzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MVwiIHZhbHVlcz1cIjEwOzBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDFcIiBiZWdpbj1cIjBzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJmaWxsXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwiZGlzY3JldGVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiIzg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMFwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiMTZcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiNmZmZmZmZmZlwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiMHNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCIwc1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICcgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMTBcIiBmaWxsPVwiI2ZmZmZmZmZmXCI+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMDswOzEwOzEwOzEwXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMC41NTU1NTU1NTU1NTU1NTU2c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBkdXI9XCIyLjIyMjIyMjIyMjIyMjIyMjNzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0wLjU1NTU1NTU1NTU1NTU1NTZzXCI+PC9hbmltYXRlPlxcbicgKyAnICA8L2NpcmNsZT4nICsgJyAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI1MFwiIHI9XCIxMFwiIGZpbGw9XCIjZmZmZmZmZmZcIj5cXG4nICsgJyAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIwOzA7MTA7MTA7MTBcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBiZWdpbj1cIi0xLjExMTExMTExMTExMTExMTJzXCI+PC9hbmltYXRlPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjIuMjIyMjIyMjIyMjIyMjIyM3NcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiB2YWx1ZXM9XCIxNjsxNjsxNjs1MDs4NFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuMTExMTExMTExMTExMTExMnNcIj48L2FuaW1hdGU+XFxuJyArICcgIDwvY2lyY2xlPicgKyAnICA8Y2lyY2xlIGN4PVwiMTZcIiBjeT1cIjUwXCIgcj1cIjEwXCIgZmlsbD1cIiNmZmZmZmZmZlwiPlxcbicgKyAnICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjA7MDsxMDsxMDsxMFwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGJlZ2luPVwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcIj48L2FuaW1hdGU+XFxuJyArICcgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMi4yMjIyMjIyMjIyMjIyMjIzc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgYmVnaW49XCItMS42NjY2NjY2NjY2NjY2NjY1c1wiPjwvYW5pbWF0ZT5cXG4nICsgJyAgPC9jaXJjbGU+JyArICc8L3N2Zz4nO1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnByZWxvYWRpbmdVSVRleHRNc2cgPT09ICcnIHx8IHRoaXMuX19vcHRpb25zLnByZWxvYWRpbmdVSVRleHRNc2cpIHtcbiAgICAgICAgcHJlbG9hZGluZ1VJLmlubmVySFRNTCArPSB0aGlzLl9fb3B0aW9ucy5wcmVsb2FkaW5nVUlUZXh0TXNnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fc2V0U3R5bGUocHJlbG9hZGluZ1VJLCB7XG4gICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgIH0pO1xuICAgIHByZWxvYWRpbmdVSVdyYXAuYXBwZW5kQ2hpbGQocHJlbG9hZGluZ1VJKTtcblxuICAgIC8vIGxvYWRpbmcgVUkg7JyE7LmYIOyekOumrOyeoeqyjCDtlZjquLAg7JyE7ZW0XG4gICAgYXdhaXQgdGhpcy5fX2luaXRTdHlsZSgpO1xuXG4gICAgLy8g7ZmU66m06rO864+EIO2YhOyDgSDtlbTqsrBcbiAgICB0aGlzLl9fc2V0U3R5bGUob2NyLCB7XG4gICAgICBkaXNwbGF5OiAnJ1xuICAgIH0pO1xuICAgIHRoaXMuX19vY3IgPSBvY3I7XG4gICAgdGhpcy5fX2NhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLl9fcm90YXRpb25DYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICB0aGlzLl9fdmlkZW8gPSB2aWRlbztcbiAgICB0aGlzLl9fdmlkZW9XcmFwID0gdmlkZW9XcmFwO1xuICAgIHRoaXMuX19ndWlkZUJveCA9IGd1aWRlQm94O1xuICAgIHRoaXMuX19ndWlkZUJveFdyYXAgPSBndWlkZUJveFdyYXA7XG4gICAgdGhpcy5fX21hc2tCb3hXcmFwID0gbWFza0JveFdyYXA7XG4gICAgdGhpcy5fX3ByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gcHJldmVudFRvRnJlZXplVmlkZW87XG4gICAgdGhpcy5fX2N1c3RvbVVJV3JhcCA9IGN1c3RvbVVJV3JhcDtcbiAgICB0aGlzLl9fdG9wVUkgPSB0b3BVSTtcbiAgICB0aGlzLl9fbWlkZGxlVUkgPSBtaWRkbGVVSTtcbiAgICB0aGlzLl9fYm90dG9tVUkgPSBib3R0b21VSTtcbiAgICB0aGlzLl9fY2FwdHVyZVVJV3JhcCA9IGNhcHR1cmVVSVdyYXA7XG4gICAgdGhpcy5fX2NhcHR1cmVVSSA9IGNhcHR1cmVVSTtcbiAgICB0aGlzLl9fY2FwdHVyZUJ1dHRvbiA9IGNhcHR1cmVCdXR0b247XG4gICAgdGhpcy5fX3ByZXZpZXdVSVdyYXAgPSBwcmV2aWV3VUlXcmFwO1xuICAgIHRoaXMuX19wcmV2aWV3VUkgPSBwcmV2aWV3VUk7XG4gICAgdGhpcy5fX3ByZXZpZXdJbWFnZSA9IHByZXZpZXdJbWFnZTtcbiAgICB0aGlzLl9fc3dpdGNoVUlXcmFwID0gc3dpdGNoVUlXcmFwO1xuICAgIHRoaXMuX19zd2l0Y2hVSSA9IHN3aXRjaFVJO1xuICAgIHJldHVybiB7XG4gICAgICBvY3IsXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIHZpZGVvLFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLFxuICAgICAgY3VzdG9tVUlXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJLFxuICAgICAgY2FwdHVyZVVJV3JhcCxcbiAgICAgIGNhcHR1cmVVSSxcbiAgICAgIGNhcHR1cmVCdXR0b24sXG4gICAgICBwcmV2aWV3VUlXcmFwLFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlLFxuICAgICAgc3dpdGNoVUlXcmFwLFxuICAgICAgc3dpdGNoVUlcbiAgICB9O1xuICB9XG4gIF9fYmx1ckNhcHR1cmVCdXR0b24oKSB7XG4gICAgdGhpcy5fX3NldFN0eWxlKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudmlkZW8sIHtcbiAgICAgIGRpc3BsYXk6ICcnXG4gICAgfSk7XG4gICAgY29uc3Qge1xuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmIChjYXB0dXJlQnV0dG9uKSB7XG4gICAgICBjYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMtY2xpY2tlZCcsICdmYWxzZScpO1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVCdXR0b24sIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBfX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHJldHVybiBjYXB0dXJlQnV0dG9uID8gY2FwdHVyZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2lzLWNsaWNrZWQnKSA9PT0gJ3RydWUnIDogZmFsc2U7XG4gIH1cbiAgYXN5bmMgX19zZXR1cFZpZGVvKGlzUGFzc3BvcnQpIHtcbiAgICAvLyB3YXNtIOyduOyLneyEseuKpSDstZzsoIHtmZTrkJwg7ZW07IOB64+EXG4gICAgdGhpcy5fX3Jlc29sdXRpb25XaWR0aCA9IDEwODA7XG4gICAgdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQgPSA3MjA7XG4gICAgdGhpcy5fX2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGxldCBjYW1lcmEgPSBhd2FpdCB0aGlzLl9fZ2V0SW5wdXREZXZpY2VzKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvRGV2aWNlcyA6OiAnLCBjYW1lcmEpXG5cbiAgICB0aGlzLmNoZWNrVUlPcmllbnRhdGlvbigpO1xuICAgIGxldCBjb25zdHJhaW50V2lkdGgsIGNvbnN0cmFpbnRIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLmNhbWVyYVJlc29sdXRpb25Dcml0ZXJpYSA9PT0gJ2hpZ2hRdWFsaXR5Jykge1xuICAgICAgLy8g7Lm066mU6528IO2VtOyDgeuPhCDshKTsoJUgOiDtmZTsp4gg7Jqw7ISgXG4gICAgICAvLyAxOTIweDEwODDsnbQg6rCA64ql7ZWc6rK97JqwIOyCrOyaqSDslYTri4jrqbQgMTI4MHg3MjAg7IKs7JqpXG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICBtaW46IDEyODBcbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgbWluOiA3MjBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICdjb21wYXRpYmlsaXR5J1xuICAgICAgLy8g7Lm066mU6528IO2VtOyDgeuPhCDshKTsoJUgOiDtmLjtmZjshLEg7Jqw7ISgXG4gICAgICAvLyAxOTIweDEwODDsnbQg7IKs7JqpIOqwgOuKpe2VmOuNlOudvOuPhCAxMjgweDcyMOydhCDsgqzsmqntlZjrj4TroZ0g6rOg7KCVXG4gICAgICAvLyDsgqzsnKAgOiDqsKTrn63si5wgZW50cnkg66qo6424KEHsi5zrpqzspoggLyBXaWRlIOuqqOuNuCDrk7Ep7JeQ7IScIDE5MjAgeCAxMDgwIOyymOumrOyLnCDruYTsnKjsnbQg7J207IOB7ZW07KeQKO2ZgOytieydtOuQqClcbiAgICAgIC8vIO2VreyDgSAxMjgwIHggNzIw7J2EIOyCrOyaqe2VmOuPhOuhnSDrs4Dqsr1cbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDEyODBcbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogNzIwXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJhaW50cyA9IHtcbiAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHpvb206IHtcbiAgICAgICAgICBpZGVhbDogMVxuICAgICAgICB9LFxuICAgICAgICBmYWNpbmdNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6IHRoaXMuX19mYWNpbmdNb2RlQ29uc3RyYWludFxuICAgICAgICB9LFxuICAgICAgICBmb2N1c01vZGU6IHtcbiAgICAgICAgICBpZGVhbDogJ2NvbnRpbnVvdXMnXG4gICAgICAgIH0sXG4gICAgICAgIHdoaXRlQmFsYW5jZU1vZGU6IHtcbiAgICAgICAgICBpZGVhbDogJ2NvbnRpbnVvdXMnXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZUlkOiBjYW1lcmEubGVuZ3RoID8ge1xuICAgICAgICAgIGlkZWFsOiBjYW1lcmFbY2FtZXJhLmxlbmd0aCAtIDFdXG4gICAgICAgIH0gOiBudWxsLFxuICAgICAgICB3aWR0aDogY29uc3RyYWludFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnN0cmFpbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g7LWc7LSIIOynhOyehSDsnbTslrTshJwgdmlkZW9EZWl2Y2Ug66as7Iqk7Yq466W8IOqwgOyguOyYrCDsiJgg7JeG7Jy866m0LFxuICAgIC8vIGdldFVzZXJNZWRpYeulvCDsnoTsnZgg7Zi47Lac7ZWY7JesIOq2jO2VnOydhCDrsJvsnYDrkqQg64uk7IucIOqwgOyguOyYtFxuICAgIGlmIChjYW1lcmEubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9fZGVidWcoJ2Nhbm5vdCB0byBnZXQgY2FtZXJhIGRldmljZXMuIHNvLCB0cnkgdG8gZ2V0IGNhbWVyYSBkZXZpY2VzIGFnYWluJyk7XG4gICAgICB0aGlzLl9fZGVidWcoYGNvbnN0cmFpbnRzIDogJHtKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cyl9YCk7XG4gICAgICB0aGlzLl9fc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICBjYW1lcmEgPSBhd2FpdCB0aGlzLl9fZ2V0SW5wdXREZXZpY2VzKCk7XG4gICAgICBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCA9IGNhbWVyYS5sZW5ndGggPyB7XG4gICAgICAgIGlkZWFsOiBjYW1lcmFbY2FtZXJhLmxlbmd0aCAtIDFdXG4gICAgICB9IDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyDqsKTrn63si5wgd2lkZSDrk7Eg7KCA7IKs7JaRIOq4sOq4sOyXkOyEnCBGSEQg7ZW07IOB64+EIOy5tOuplOudvCDsgqzsmqnsi5wg7ZmA7K2J7J2065CY64qUIO2YhOyDgSDrsKnsp4BcbiAgICAvLyDsoIDsgqzslpEg6riw6riwIO2MkOuLqOq4sOykgCA6IO2bhOuptOy5tOuplOudvOydmCDqsJzsiJjqsIAgMeqwnOudvOuKlCDqsIDsoJVcbiAgICBpZiAoY2FtZXJhLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5fX2RlYnVnKCdtYXliZSBkZXZpY2UgaXMgZW50cnkgbW9kZWwgc3VjaCBhcyBnYWxheHkgd2lkZScpO1xuICAgICAgY29uc3RyYWludHMudmlkZW8ud2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxMjgwXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludHMudmlkZW8uaGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogNzIwXG4gICAgICB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgZHVtcHRyYWNrID0gKFthLCBiXSwgdHJhY2spID0+XG4gICAgICAvLyAgIGAke2F9JHt0cmFjay5raW5kID09ICd2aWRlbycgPyAnQ2FtZXJhJyA6ICdNaWNyb3Bob25lJ30gKCR7dHJhY2sucmVhZHlTdGF0ZX0pOiAke3RyYWNrLmxhYmVsfSR7Yn1gO1xuXG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICB0aGlzLl9fZGVidWcoYGNvbnN0cmFpbnRzIDogJHtKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cyl9YCk7XG4gICAgICAvLyB0aGlzLl9fZGVidWcoJ3ZpZGVvVHJhY2tzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpKTtcbiAgICAgIGNvbnN0IHN0cmVhbVNldHRpbmdzID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKTtcbiAgICAgIC8vIHRoaXMuX19kZWJ1ZyhcbiAgICAgIC8vICAgJ3N0cmVhbUNhcGFiaWxpdGllcyA6OiAnLFxuICAgICAgLy8gICBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDYXBhYmlsaXRpZXMoKVxuICAgICAgLy8gKTtcbiAgICAgIC8vIHRoaXMuX19kZWJ1Zygnc3RyZWFtIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENvbnN0cmFpbnRzKCkpO1xuICAgICAgLy8gdGhpcy5fX2RlYnVnKCdzdHJlYW1TZXR0aW5ncyA6OiAnLCBzdHJlYW1TZXR0aW5ncyk7XG4gICAgICB0aGlzLl9fZGVidWcoYHN0cmVhbSB3aWR0aCAqIGhlaWdodCA6OiAke3N0cmVhbVNldHRpbmdzLndpZHRofSAqICR7c3RyZWFtU2V0dGluZ3MuaGVpZ2h0fWApO1xuICAgICAgdGhpcy5fX2RlYnVnKCdzdHJlYW0gd2lkdGggLyBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoIC8gc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIHRoaXMuX19kZWJ1Zygnc3RyZWFtIGFzcGVjdFJhdGlvIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5hc3BlY3RSYXRpbyk7XG4gICAgICB0aGlzLl9fZGVidWcoJ3N0cmVhbSBmYWNpbmdNb2RlIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5mYWNpbmdNb2RlKTtcbiAgICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3RoaXMuX19yZXNvbHV0aW9uV2lkdGgsIHRoaXMuX19yZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLl9faXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICBbcm90YXRpb25DYW52YXMud2lkdGgsIHJvdGF0aW9uQ2FudmFzLmhlaWdodF0gPSBbdGhpcy5fX3Jlc29sdXRpb25IZWlnaHQsIHRoaXMuX19yZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy5fX3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2luaXRTdHlsZSgpIHtcbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIGNhcHR1cmVVSVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuXG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQ7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IG9jci5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoaXMuX19vcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzO1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy5fX2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuX192aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpOuhnCDqsITso7xcbiAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSSAmJiDqsIDroZwg67mE65SU7Jik66GcIOqwhOyjvFxuICAgICAgLy8g67mE65SU7Jik66W8IOqwgOuhnCBVSeydmCBoZWlnaHQg6riw7KSA7Jy866GcIOykhOydtOqzoFxuICAgICAgLy8g6rCA66GcIFVJIGhlaWdodCDquLDspIDsnLzroZwg67mE65SU7Jik7J2YIHdpZHRoIOqzhOyCsFxuICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICB9XG4gICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveFdpZHRoID0gZ3VpZGVCb3hXaWR0aCAqIHRoaXMuX19ndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveEhlaWdodCA9IGd1aWRlQm94SGVpZ2h0ICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgaWYgKHRvcFVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUodG9wVUksIHtcbiAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKG1pZGRsZVVJLCB7XG4gICAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYm90dG9tVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShib3R0b21VSSwge1xuICAgICAgICAncGFkZGluZy10b3AnOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHZpZGVvSW5uZXJHYXAgPSAyOyAvLyDrr7jshLjtlZjqsowgbWFza0JveElubmVy67O064ukIGd1aWRlQm946rCAIOyekeydgOqygyDrs7TsoJVcbiAgICB0aGlzLl9fc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoJyNtYXNrQm94SW5uZXInKTtcbiAgICBsZXQgciA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoICogMjtcbiAgICByID0gciA8IDAgPyAwIDogcjtcbiAgICBpZiAoIWlzTmFOKHJlZHVjZWRHdWlkZUJveFdpZHRoKSAmJiAhaXNOYU4ocmVkdWNlZEd1aWRlQm94SGVpZ2h0KSAmJiAhaXNOYU4oYm9yZGVyUmFkaXVzKSAmJiAhaXNOYU4oYm9yZGVyV2lkdGgpKSB7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJXaWR0aCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgbWFza0JveElubmVyV2lkdGggLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgbWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncngnLCByICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCByICsgJycpO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX2FkanVzdFN0eWxlKCkge1xuICAgIGNvbnN0IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEgPSAoYSwgYikgPT4ge1xuICAgICAgaWYgKHRoaXMuX19vcHRpb25zLmNhbGNHdWlkZUJveENyaXRlcmlhID09PSAnY2FtZXJhUmVzb2x1dGlvbicpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKGEsIGIpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9fb3B0aW9ucy5jYWxjR3VpZGVCb3hDcml0ZXJpYSA9PT0gJ29jclZpZXdTaXplJykge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoYSwgYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oYSwgYik7IC8vIGRlZmF1bHQgOiBjYW1lcmFSZXNvbHV0aW9uXG4gICAgICB9XG4gICAgfTtcblxuICAgIHZvaWQgMDtcbiAgICBjb25zdCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBjYXB0dXJlVUlXcmFwLFxuICAgICAgY2FwdHVyZVVJLFxuICAgICAgY2FwdHVyZUJ1dHRvblxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIGNvbnN0IGlzQWxpZW5CYWNrID0gdGhpcy5fX29jclR5cGUgPT09ICdhbGllbi1iYWNrJztcblxuICAgIC8vIOq4sOykgOygleuztFxuICAgIGNvbnN0IGJhc2VXaWR0aCA9IGlzQWxpZW5CYWNrID8gMjYwIDogNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSBpc0FsaWVuQmFjayA/IDQwMCA6IDI2MDtcbiAgICBjb25zdCBzY2FubmVyRnJhbWVSYXRpbyA9IGJhc2VIZWlnaHQgLyBiYXNlV2lkdGg7IC8vIOyLoOu2hOymnSDruYTsnKhcblxuICAgIGxldCBndWlkZUJveFdpZHRoLCBndWlkZUJveEhlaWdodDtcbiAgICBsZXQgY2FsY09jckNsaWVudFdpZHRoID0gb2NyLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjT2NyQ2xpZW50SGVpZ2h0ID0gb2NyLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuX192aWRlb09yaWVudGF0aW9uO1xuICAgIGlmIChjYWxjVmlkZW9XaWR0aCA9PT0gMCB8fCBjYWxjVmlkZW9IZWlnaHQgPT09IDAgfHwgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPT09IDAgfHwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gdGhpcy5fX29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aDtcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGlzLl9fb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cztcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy5fX3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBuZXdWaWRlb1dpZHRoID0gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgbGV0IG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy5fX2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuX192aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgY29uc3QgbmV3VmlkZW9SYXRpb0J5V2lkdGggPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQgLyBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBjb25zdCBuZXdWaWRlb1JhdGlvQnlIZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRXaWR0aCAvIGNhbGNWaWRlb0NsaWVudEhlaWdodDtcbiAgICBpZiAodGhpcy5fX3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIC8vIOyEuOuhnCBVSVxuICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSVdyYXAsIHtcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnZmxleC1lbmQnXG4gICAgICB9KTtcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy5fX3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7Lm066mU652864+EIOyEuOuhnFxuICAgICAgICAvLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEoY2FsY09jckNsaWVudFdpZHRoLCBjYWxjVmlkZW9XaWR0aCkgKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIG5ld1ZpZGVvUmF0aW9CeVdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7Lm066mU652864qUIOqwgOuhnFxuICAgICAgICAvLyDshLjroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7Iqk66W8IOu5hOuUlOyYpCDshLjroZwg6ri47J207JeQIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9IZWlnaHQpO1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDqsIDroZwgVUlcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUlXcmFwLCB7XG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnZW5kJyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcidcbiAgICAgIH0pO1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLl9fdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDruYTrlJTsmKTrpbwg6rCA66GcIFVJ7J2YIGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIC8vIOqwgOuhnCBVSSBoZWlnaHQg6riw7KSA7Jy866GcIOu5hOuUlOyYpOydmCB3aWR0aCDqs4TsgrBcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTripQg7IS466GcIOq4sOykgOycvOuhnCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRIZWlnaHQsIGNhbGNWaWRlb0hlaWdodCkgKiB2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG5cbiAgICAgICAgLy8g67mE65SU7Jik66W8IOyEuOuhnCDquLDspIDsnLzroZwg64uk7IucIOunnuy2pFxuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IGd1aWRlQm94SGVpZ2h0O1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gbmV3VmlkZW9IZWlnaHQgKiBuZXdWaWRlb1JhdGlvQnlIZWlnaHQ7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIOqwgOuhnCDtgazquLDqsIAg6rCA66GcIFVJIHdpZHRoICogcmF0aW8g6rCS67O064ukIO2BrOuptCxcbiAgICAgICAgaWYgKGd1aWRlQm94V2lkdGggPiBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGgpIHtcbiAgICAgICAgICAvLyDqs4TsgrAg67Cp7Iud7J2EIOuwlOq+vOuLpCAo7IKs7JygIDog6rGw7J2YIOygleyCrOqwge2YleyXkCDqsIDquYzsmrQg6rK97JqwIOqwgOydtOuTnCDrsJXsiqQg6rCA66Gc6rCAIOq9ieywqOqyjCDrkKguKVxuICAgICAgICAgIGd1aWRlQm94V2lkdGggPSBfX2NhbGNHdWlkZUJveENyaXRlcmlhKGNhbGNPY3JDbGllbnRXaWR0aCwgY2FsY1ZpZGVvV2lkdGgpICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIG5ld1ZpZGVvUmF0aW9CeVdpZHRoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZggaGVpZ2h0IO2BrOq4sOulvCBVSeydmCBoZWlnaHQg6riw7KSA7JeQIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEoY2FsY09jckNsaWVudEhlaWdodCwgY2FsY1ZpZGVvSGVpZ2h0KSAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEoY2FsY09jckNsaWVudFdpZHRoLCBjYWxjVmlkZW9XaWR0aCkgKiBndWlkZUJveFJhdGlvQnlXaWR0aCkge1xuICAgICAgICAgIC8vIOqzhOyCsCDrsKnsi53snYQg67CU6r6864ukICjsgqzsnKAgOiDqsbDsnZgg7KCV7IKs6rCB7ZiV7JeQIOqwgOq5jOyatCDqsr3smrAg6rCA7J2065OcIOuwleyKpCDqsIDroZzqsIAg6r2J7LCo6rKMIOuQqC4pXG4gICAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IF9fY2FsY0d1aWRlQm94Q3JpdGVyaWEoY2FsY09jckNsaWVudFdpZHRoLCBjYWxjVmlkZW9XaWR0aCkgKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7LaV7IaMXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiBuZXdWaWRlb1JhdGlvQnlXaWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxjR3VpZGVCb3hDcml0ZXJpYSjsubTrqZTrnbwg7ZW07IOB64+EIOyEpOyglSDquLDspIAp6rCAIG9jclZpZXdTaXplKO2ZlOuptCDtgazquLApIOq4sOykgOydvOuVjFxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy5jYWxjR3VpZGVCb3hDcml0ZXJpYSA9PT0gJ29jclZpZXdTaXplJykge1xuICAgICAgLy8gZ3VpZGVCb3hIZWlnaHQg7J20IGNhbGNPY3JDbGllbnRIZWlnaHQg67O064ukIO2BsOqyveyasCjqsIDsnbTrk5zrsJXsiqTqsIAg7ZmU66m07J2EIOuEmOyWtOqwgOuKlCDqsr3smrApIOuLpOyLnCDqs4TsgrBcbiAgICAgIGlmIChndWlkZUJveEhlaWdodCA+IGNhbGNPY3JDbGllbnRIZWlnaHQpIHtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBNYXRoLm1pbihjYWxjT2NyQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9IZWlnaHQpICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogbmV3VmlkZW9SYXRpb0J5V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIGd1aWRlQm94SGVpZ2h0IOydtCBjYWxjT2NyQ2xpZW50SGVpZ2h0IOuztOuLpCDtgbDqsr3smrAo6rCA7J2065Oc67CV7Iqk6rCAIO2ZlOuptOydhCDrhJjslrTqsIDripQg6rK97JqwKSDri6Tsi5wg6rOE7IKwXG4gICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCkge1xuICAgICAgICBndWlkZUJveFdpZHRoID0gTWF0aC5taW4oY2FsY09jckNsaWVudFdpZHRoLCBjYWxjVmlkZW9XaWR0aCkgKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiBuZXdWaWRlb1JhdGlvQnlXaWR0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX2Nyb3BJbWFnZVNpemVXaWR0aCA9IE1hdGgubWluKGd1aWRlQm94V2lkdGgsIG5ld1ZpZGVvV2lkdGgpO1xuICAgIHRoaXMuX19jcm9wSW1hZ2VTaXplSGVpZ2h0ID0gTWF0aC5taW4oZ3VpZGVCb3hIZWlnaHQsIG5ld1ZpZGVvSGVpZ2h0KTtcbiAgICBpZiAodGhpcy5fX2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgIH1cbiAgICBndWlkZUJveFdpZHRoICs9IGJvcmRlcldpZHRoICogMjtcbiAgICBndWlkZUJveEhlaWdodCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94V2lkdGggPSBndWlkZUJveFdpZHRoICogdGhpcy5fX2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hIZWlnaHQgKiB0aGlzLl9fZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBpZiAodG9wVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZSh0b3BVSSwge1xuICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uLXJldmVyc2UnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1pZGRsZVVJKSB7XG4gICAgICB0aGlzLl9fc2V0U3R5bGUobWlkZGxlVUksIHtcbiAgICAgICAgd2lkdGg6IHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChib3R0b21VSSkge1xuICAgICAgdGhpcy5fX3NldFN0eWxlKGJvdHRvbVVJLCB7XG4gICAgICAgICdwYWRkaW5nLXRvcCc6ICcxMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fX3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICB3aWR0aDogbmV3VmlkZW9XaWR0aCArICdweCdcbiAgICB9KTtcbiAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgIGhlaWdodDogbmV3VmlkZW9IZWlnaHQgKyAncHgnXG4gICAgfSk7XG4gICAgY29uc3QgdmlkZW9Jbm5lckdhcCA9IDI7IC8vIOuvuOyEuO2VmOqyjCBtYXNrQm94SW5uZXLrs7Tri6QgZ3VpZGVCb3jqsIAg7J6R7J2A6rKDIOuztOyglVxuICAgIHRoaXMuX19zZXRTdHlsZShndWlkZUJveCwge1xuICAgICAgd2lkdGg6IHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBoZWlnaHQ6IHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgfSk7XG4gICAgY29uc3QgbWFza0JveElubmVyID0gbWFza0JveFdyYXAucXVlcnlTZWxlY3RvcignI21hc2tCb3hJbm5lcicpO1xuICAgIGxldCByID0gYm9yZGVyUmFkaXVzIC0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHIgPSByIDwgMCA/IDAgOiByO1xuICAgIGlmICghaXNOYU4ocmVkdWNlZEd1aWRlQm94V2lkdGgpICYmICFpc05hTihyZWR1Y2VkR3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lckhlaWdodCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBtYXNrQm94SW5uZXJXaWR0aCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIG1hc2tCb3hJbm5lckhlaWdodCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3gnLCBtYXNrQm94SW5uZXJXaWR0aCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3knLCBtYXNrQm94SW5uZXJIZWlnaHQgLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIHIgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeScsIHIgKyAnJyk7XG4gICAgfVxuXG4gICAgLy8g7IiY64+ZIOy0rOyYgSBVSSDsgqzsmqlcbiAgICAvLyBmaXJzdENhbGxlZOyduCDqsr3smrAg7JWE7KeBIGNhcHR1cmVVSeqwgCDqt7jroKTsp4Dsp4Ag7JWK7JWEIOustOydmOuvuFxuICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkpIHtcbiAgICAgIHRoaXMuX19zZXRTdHlsZShjYXB0dXJlVUksIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuX191aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnICYmIGJvdHRvbVVJICYmIGNhcHR1cmVVSSkge1xuICAgICAgICBjb25zdCBjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXMgPSB0aGlzLl9fY2FsY1N1bU9mSGVpZ2h0Q2hpbGROb2Rlcyhib3R0b21VSSk7XG4gICAgICAgIGxldCBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9IGNhcHR1cmVCdXR0b24ucXVlcnlTZWxlY3Rvcignc3ZnJykuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQgPSBjYWxjQ2FwdHVyZUJ1dHRvbkhlaWdodCA9PT0gMCA/IDgwIDogY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQ7XG4gICAgICAgIGxldCBjYXB0dXJlVUlQYWRkaW5nQm90dG9tID0gYm90dG9tVUkuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIC09IGlzTmFOKHBhcnNlSW50KGJvdHRvbVVJLnN0eWxlLnBhZGRpbmdUb3ApKSA/IDAgOiBwYXJzZUludChib3R0b21VSS5zdHlsZS5wYWRkaW5nVG9wKTtcbiAgICAgICAgY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSAtPSBjYWxjU3VtT2ZIZWlnaHRCb3R0b21VSUNoaWxkTm9kZXM7XG4gICAgICAgIGNhcHR1cmVVSVBhZGRpbmdCb3R0b20gLT0gY2FsY0NhcHR1cmVCdXR0b25IZWlnaHQ7XG4gICAgICAgIGNvbnN0IGJhc2VsaW5lID0gY2FsY09jckNsaWVudEhlaWdodCAtIChjYWxjT2NyQ2xpZW50SGVpZ2h0IC8gMiArIGd1aWRlQm94SGVpZ2h0IC8gMik7XG4gICAgICAgIGlmIChjYXB0dXJlVUlQYWRkaW5nQm90dG9tID4gMCAmJiBjYXB0dXJlVUlQYWRkaW5nQm90dG9tIDwgYmFzZWxpbmUpIHtcbiAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUoY2FwdHVyZVVJLCB7XG4gICAgICAgICAgICAncGFkZGluZy1yaWdodCc6ICcnLFxuICAgICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogY2FwdHVyZVVJUGFkZGluZ0JvdHRvbSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX3NldFN0eWxlKGNhcHR1cmVVSSwge1xuICAgICAgICAgICdwYWRkaW5nLXJpZ2h0JzogJzEwcHgnLFxuICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5fX2luUHJvZ3Jlc3NTdGVwLCB0cnVlKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19jYWxjU3VtT2ZIZWlnaHRDaGlsZE5vZGVzKG9iaikge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBvYmo/LmNoaWxkTm9kZXMpIHtcbiAgICAgIHN1bSArPSBpdGVtLmNsaWVudEhlaWdodCA/IGl0ZW0uY2xpZW50SGVpZ2h0IDogMDtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfVxuICBfX2Nsb3NlQ2FtZXJhKCkge1xuICAgIHRoaXMuX19jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cbiAgYXN5bmMgX19sb2FkUmVzb3VyY2VzKCkge1xuICAgIHZvaWQgMDtcbiAgICBpZiAodGhpcy5fX3Jlc291cmNlc0xvYWRlZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9faXNTdXBwb3J0U2ltZCA9IGF3YWl0IHNpbWQoKTtcbiAgICBsZXQgZW52SW5mbyA9ICcnO1xuICAgIGVudkluZm8gKz0gYG9zIDogJHt0aGlzLl9fZGV2aWNlSW5mby5vc31cXG5gO1xuICAgIGVudkluZm8gKz0gYG9zU2ltcGxlIDogJHt0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZX1cXG5gO1xuICAgIGVudkluZm8gKz0gYGlzU3VwcG9ydFdhc206ICR7dGhpcy5fX2lzU3VwcG9ydFdhc219XFxuYDtcbiAgICBlbnZJbmZvICs9IGBzaW1kKHdhc20tZmVhdHVyZS1kZXRlY3QpIDogJHt0aGlzLl9faXNTdXBwb3J0U2ltZH1cXG5gO1xuICAgIGlmICh0aGlzLl9fZGV2aWNlSW5mby5vc1NpbXBsZSA9PT0gJ0lPUycgfHwgdGhpcy5fX2RldmljZUluZm8ub3NTaW1wbGUgPT09ICdNQUMnKSB7XG4gICAgICB0aGlzLl9faXNTdXBwb3J0U2ltZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbnZJbmZvICs9IGBpc1N1cHBvcnRTaW1kKGZpbmFsKSA6ICR7dGhpcy5fX2lzU3VwcG9ydFNpbWR9XFxuYDtcbiAgICBlbnZJbmZvICs9IGBVc2VyQWdlbnQgOiAke25hdmlnYXRvci51c2VyQWdlbnR9XFxuYDtcbiAgICB2b2lkIDA7XG4gICAgdGhpcy5fX2RlYnVnKGVudkluZm8pO1xuICAgIHdpbmRvdy51c2ViT0NSRW52SW5mbyA9IGVudkluZm87XG4gICAgbGV0IHNka1N1cHBvcnRFbnYgPSAncXVyYW0nO1xuICAgIGlmICh0aGlzLl9faXNTdXBwb3J0U2ltZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgc2RrU3VwcG9ydEVudiArPSAnX3NpbWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICAgIHZvaWQgMDtcbiAgICB3aW5kb3cudXNlYk9DUkVudkluZm8gPSBlbnZJbmZvO1xuICAgIHZvaWQgMDtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNka1N1cHBvcnRFbnYgKyAnLmpzJywgdGhpcy5fX29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKTtcbiAgICBsZXQgc3JjID0gYXdhaXQgZmV0Y2godXJsLmhyZWYpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XG4gICAgICBsZXQgcmVnZXggPSAvKC4qKSA9IE1vZHVsZS5jd3JhcC9nbTtcbiAgICAgIGxldCBzb3VyY2UgPSB0ZXh0LnJlcGxhY2UocmVnZXgsICdNb2R1bGUuJDEgPSBNb2R1bGUuY3dyYXAnKTtcblxuICAgICAgLy8gZGF0YShtb2RlbClcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFwoZnVuY3Rpb25cXChcXCkgXFx7L20sICd2YXIgY3JlYXRlTW9kZWxEYXRhID0gYXN5bmMgZnVuY3Rpb24oKSB7XFxuJyArICcgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcXG4nKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycsICcgICByZWplY3QoKTtcXG4nICsgJyAgIGNvbnNvbGUuZXJyb3IoXCJwYWNrYWdlIGVycm9yOlwiLCBlcnJvcik7Jyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICB9LCBoYW5kbGVFcnJvciknLCAnICByZXNvbHZlKCk7XFxuJyArICcgIH0sIGhhbmRsZUVycm9yKScpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL15cXH1cXClcXChcXCk7L20sICdcXG4gfSlcXG4nICsgJ307Jyk7XG5cbiAgICAgIC8vIHdhc21cbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKHNka1N1cHBvcnRFbnYgKyAnLndhc20nLCBuZXcgVVJMKHNka1N1cHBvcnRFbnYgKyAnLndhc20nLCB0aGlzLl9fb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWYpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UobmV3IFJlZ0V4cChgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFsnXCJdJHtzZGtTdXBwb3J0RW52fVxcXFwuZGF0YVtcIiddYCwgJ2dtJyksIGBSRU1PVEVfUEFDS0FHRV9CQVNFID0gXCIke25ldyBVUkwoc2RrU3VwcG9ydEVudiArICcuZGF0YScsIHRoaXMuX19vcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZn1cImApO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2Z1bmN0aW9uIGNyZWF0ZVdhc20nLCAnYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2FzbScpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2luc3RhbnRpYXRlQXN5bmMoKTsnLCAnYXdhaXQgaW5zdGFudGlhdGVBc3luYygpOycpO1xuXG4gICAgICAvLyB3YXNtIGFuZCBkYXRhKG1vZGVsKSBmaWxlIOuzkeugrOuhnCBmZXRjaCDtlZjquLAg7JyE7ZW0XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgndmFyIGFzbSA9IGNyZWF0ZVdhc20oKTsnLCAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIHN0YXJ0XCIpXFxuJyArICdhd2FpdCAoYXN5bmMgZnVuY3Rpb24oKSB7XFxuJyArICcgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XFxuJyArICcgICAgdmFyIGlzQ3JlYXRlZFdhc20gPSBmYWxzZTtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkRGF0YSA9IGZhbHNlO1xcbicgKyAnICAgIGNyZWF0ZVdhc20oKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZFdhc20gPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZERhdGEpIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSk7XFxuJyArICcgICAgY3JlYXRlTW9kZWxEYXRhKCkudGhlbigoKSA9PiB7XFxuJyArICcgICAgICBpc0NyZWF0ZWREYXRhID0gdHJ1ZTtcXG4nICsgJyAgICAgIGlmIChpc0NyZWF0ZWRXYXNtKSB7IHJlc29sdmUoKTsgfVxcbicgKyAnICAgIH0pXFxuJyArICcgIH0pO1xcbicgKyAnfSkoKTtcXG4nICsgJ2NvbnNvbGUubG9nKFwiY3JlYXRlIHdhc20gYW5kIGRhdGEgLSBlbmRcIiknKTtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSk7XG4gICAgc3JjID0gYFxuICAgIChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICR7c3JjfVxuICAgICAgTW9kdWxlLmxlbmd0aEJ5dGVzVVRGOCA9IGxlbmd0aEJ5dGVzVVRGOFxuICAgICAgTW9kdWxlLnN0cmluZ1RvVVRGOCA9IHN0cmluZ1RvVVRGOFxuICAgICAgcmV0dXJuIE1vZHVsZVxuICAgIH0pKClcbiAgICAgICAgYDtcbiAgICB0aGlzLl9fT0NSRW5naW5lID0gYXdhaXQgZXZhbChzcmMpO1xuICAgIHRoaXMuX19PQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQgPSBhc3luYyBfID0+IHtcbiAgICAgIHZvaWQgMDtcbiAgICB9O1xuICAgIGF3YWl0IHRoaXMuX19PQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQoKTtcbiAgICB0aGlzLl9fcmVzb3VyY2VzTG9hZGVkID0gdHJ1ZTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgX19zdGFydFNjYW5XYXNtSW1wbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fX2RldGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKGZhbHNlKTtcbiAgICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIFNUQVJUXG4gICAgICAvLyB0aGlzLl9fc2V0UGlpRW5jcnlwdE1vZGUodGhpcy5fX29wdGlvbnMudXNlUGlpRW5jcnlwdE1vZGUpOyAvLyBvY3IgcmVzdWx0IGVuY3J5cHRcbiAgICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIEVORFxuICAgICAgdGhpcy5fX2JsdXJDYXB0dXJlQnV0dG9uKCk7XG4gICAgICB0aGlzLl9fYWRkcmVzcyA9IDA7XG4gICAgICB0aGlzLl9fcGFnZUVuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fX21hbnVhbE9DUlJldHJ5Q291bnQgPSAwO1xuICAgICAgdGhpcy5fX3NzYVJldHJ5Q291bnQgPSAwO1xuICAgICAgY29uc3Qgc2NhbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgb2NyUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICAgIGlzRGV0ZWN0ZWRDYXJkID0gbnVsbCxcbiAgICAgICAgICAgIGltZ0RhdGEgPSBudWxsLFxuICAgICAgICAgICAgaW1nRGF0YVVybCA9IG51bGwsXG4gICAgICAgICAgICBtYXNrSW1hZ2UgPSBudWxsLFxuICAgICAgICAgICAgZmFjZUltYWdlID0gbnVsbCxcbiAgICAgICAgICAgIHNzYVJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgICBzc2FSZXN1bHRMaXN0ID0gW10sXG4gICAgICAgICAgICBtYXNrSW5mbyA9IG51bGw7XG5cbiAgICAgICAgICAvLyBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICAgIGlmICghdGhpcy5fX09DUkVuZ2luZVsnYXNtJ10pIHJldHVybjtcblxuICAgICAgICAgIC8vIFRPRE8gOiDshKTsoJXtlaDsiJgg7J6I6rKMIOuzgOqyvSAgZGVmYXVsdCDqsJLrj4Qg7KCc6rO1XG4gICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25fdywgcmVzb2x1dGlvbl9oXSA9IFt0aGlzLl9fcmVzb2x1dGlvbldpZHRoLCB0aGlzLl9fcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdmlkZW9cbiAgICAgICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICBpZiAocmVzb2x1dGlvbl93ID09PSAwIHx8IHJlc29sdXRpb25faCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgIGlmICh0aGlzLl9fZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBiZWZvcmUgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG4gICAgICAgICAgaWYgKHRoaXMuX19hZGRyZXNzID09PSAwICYmICF0aGlzLl9fcGFnZUVuZCAmJiAoYXdhaXQgdGhpcy5fX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpKSB7XG4gICAgICAgICAgICBbdGhpcy5fX2FkZHJlc3MsIHRoaXMuX19kZXN0cm95U2Nhbm5lckNhbGxiYWNrXSA9IHRoaXMuX19nZXRTY2FubmVyQWRkcmVzcyh0aGlzLl9fb2NyVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5fX2FkZHJlc3MgfHwgdGhpcy5fX3BhZ2VFbmQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19zbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBhZnRlciAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9fb2NyU3RhdHVzIDwgdGhpcy5PQ1JfU1RBVFVTLk9DUl9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBPQ1Ig7JmE66OMIOydtOyghCDsg4Htg5xcblxuICAgICAgICAgICAgLy8gY2FyZCBub3QgZGV0ZWN0ZWRcbiAgICAgICAgICAgIFtpc0RldGVjdGVkQ2FyZCwgaW1nRGF0YSwgaW1nRGF0YVVybF0gPSBhd2FpdCB0aGlzLl9faXNDYXJkYm94RGV0ZWN0ZWQodGhpcy5fX2FkZHJlc3MsIDApO1xuICAgICAgICAgICAgaWYgKCFpc0RldGVjdGVkQ2FyZCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLlJFQURZKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfRkFJTEVEKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk1BTlVBTF9DQVBUVVJFX0ZBSUxFRCwgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SWdub3JlQ29tcGxldGUoZmFsc2UpOyAvLyDtlYTsmpTtlZzqsIA/XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhcmQgaXMgZGV0ZWN0ZWRcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX19jaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX1NVQ0NFU1MpO1xuXG4gICAgICAgICAgICAvLyBzc2EgcmV0cnkg7ISk7KCV7J20IOuQmOyWtCDsnojsnLzqsbDrgpgsIOyImOuPmey0rOyYgVVJ66W8IOyCrOyaqe2VmOuKlCDqsr3smrAsIGNhcmQgZGV0ZWN0IOyEseqzteyLnCDsnbTrr7jsp4Ag7KCA7J6lXG4gICAgICAgICAgICB0aGlzLl9fZW5xdWV1ZURldGVjdGVkQ2FyZFF1ZXVlKGltZ0RhdGEsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX19pc0NsaWNrZWRDYXB0dXJlQnV0dG9uKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRJZ25vcmVDb21wbGV0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUywgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlLCBmYWNlSW1hZ2VdID0gYXdhaXQgdGhpcy5fX3N0YXJ0UmVjb2duaXRpb24odGhpcy5fX2FkZHJlc3MsIHRoaXMuX19vY3JUeXBlLCB0aGlzLl9fc3NhTW9kZSwgdGhpcy5fX2lzQ2xpY2tlZENhcHR1cmVCdXR0b24oKSwgaW1nRGF0YSwgaW1nRGF0YVVybCk7XG5cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLl9faXNDbGlja2VkQ2FwdHVyZUJ1dHRvbigpKSB7XG4gICAgICAgICAgICAvLyAgIHRoaXMuX19ibHVyQ2FwdHVyZUJ1dHRvbigpO1xuICAgICAgICAgICAgLy8gICB0aGlzLnNldElnbm9yZUNvbXBsZXRlKGZhbHNlKTsgICAgICAgIC8vIO2VhOyalO2VnOqwgD9cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5fX29jclN0YXR1cyA+PSB0aGlzLk9DUl9TVEFUVVMuT0NSX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIG9jciDsmYTro4wg7J207ZuEIOyDge2DnFxuXG4gICAgICAgICAgICAvLyBmYWlsdXJlIGNhc2VcbiAgICAgICAgICAgIGlmIChvY3JSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT0NSIFN0YXR1cyBpcyAke3RoaXMuX19vY3JTdGF0dXN9LCBidXQgb2NyUmVzdWx0IGlzIGZhbHNlYCk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIHRoaXMuX19zZXRTdHlsZSh2aWRlbywge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pOyAvLyBPQ1Ig7JmE66OMIOyLnOygkOyXkCBjYW1lcmEgcHJldmlldyBvZmZcblxuICAgICAgICAgICAgaWYgKHRoaXMuX19zc2FNb2RlKSB7XG4gICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgLy8g7LWc7LSIIOyLnOuPhFxuICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLl9fc3RhcnRUcnV0aCh0aGlzLl9fb2NyVHlwZSwgdGhpcy5fX2FkZHJlc3MpOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdbRVJSXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsJyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgICAgICAgICAgIHNzYVJlc3VsdExpc3QucHVzaChzc2FSZXN1bHQpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5fX29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0cnlTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IEZBS0UgPSB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVR5cGUgPT09ICdGQUtFJztcbiAgICAgICAgICAgICAgICBjb25zdCBSRUFMID0gdGhpcy5fX29wdGlvbnMuc3NhUmV0cnlUeXBlID09PSAnUkVBTCc7XG4gICAgICAgICAgICAgICAgY29uc3QgRU5TRU1CTEUgPSB0aGlzLl9fb3B0aW9ucy5zc2FSZXRyeVR5cGUgPT09ICdFTlNFTUJMRSc7XG4gICAgICAgICAgICAgICAgbGV0IGlzQ29tcGxldGVkID0gZmFsc2U7IC8vIOu5hOuPmeq4sCBmb3Ig66y4IOuVjOusuOyXkCBicmVha+qwgCDslYjqsbjrpqzripQg7J207IqI66GcIOuEo+ydjFxuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMDsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX3NzYVJldHJ5Q291bnQgPT09IHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19zc2FSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMDsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHNzYVJlc3VsdCA9IGF3YWl0IHRoaXMuX19zdGFydFRydXRoUmV0cnkodGhpcy5fX29jclR5cGUsIHRoaXMuX19hZGRyZXNzLCBpdGVtKTsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignW0VSUl0gU1NBIE1PREUgaXMgdHJ1ZS4gYnV0LCBzc2FSZXN1bHQgaXMgbnVsbCcpOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgICAgICAgICAgICAgICAgICBzc2FSZXN1bHRMaXN0LnB1c2goc3NhUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBpZiAoRkFLRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0LmluZGV4T2YoJ1JFQUwnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKFJFQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdC5pbmRleE9mKCdGQUtFJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChFTlNFTUJMRSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBleGVjdXRlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHJ5V29ya2luZ1RpbWUgPSBuZXcgRGF0ZSgpIC0gcmV0cnlTdGFydERhdGU7XG4gICAgICAgICAgICAgICAgdm9pZCAwOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9fb3B0aW9ucy51c2VNYXNrSW5mbykge1xuICAgICAgICAgICAgICBtYXNrSW5mbyA9IHRoaXMuX19nZXRNYXNrSW5mbyh0aGlzLl9fYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGxlZ2FjeUZvcm1hdCxcbiAgICAgICAgICAgICAgbmV3Rm9ybWF0XG4gICAgICAgICAgICB9ID0gdXNlYk9DUldBU01QYXJzZXIucGFyc2VPY3JSZXN1bHQodGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCBvY3JSZXN1bHQsIHNzYVJlc3VsdCwgdGhpcy5fX3NzYVJldHJ5Q291bnQsIHNzYVJlc3VsdExpc3QsIHRoaXMuX19vcHRpb25zLnNzYVJldHJ5VHlwZSwgdGhpcy5fX29wdGlvbnMuc3NhUmV0cnlQaXZvdFxuICAgICAgICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gU1RBUlRcbiAgICAgICAgICAgIC8vIHRoaXMuX19vcHRpb25zLnVzZVBpaUVuY3J5cHRNb2RlXG4gICAgICAgICAgICAvLyDstpTtm4Qg7JyE7JeQIOyjvOyEnSDtkoDslrTslbztlaggLSBFTkRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCByZXZpZXdfcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy5fX29jclR5cGUsXG4gICAgICAgICAgICAgIG9jcl9yZXN1bHQ6IG5ld0Zvcm1hdCxcbiAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogaW1nRGF0YVVybCxcbiAgICAgICAgICAgICAgb2NyX21hc2tpbmdfaW1hZ2U6IG1hc2tJbWFnZSxcbiAgICAgICAgICAgICAgb2NyX2ZhY2VfaW1hZ2U6IGZhY2VJbWFnZSxcbiAgICAgICAgICAgICAgbWFza0luZm86IG1hc2tJbmZvLFxuICAgICAgICAgICAgICBzc2FfbW9kZTogdGhpcy5fX3NzYU1vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fY29tcHJlc3NJbWFnZXMocmV2aWV3X3Jlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlLCBmYWNlSW1hZ2UpO1xuICAgICAgICAgICAgdGhpcy5lbmNyeXB0UmVzdWx0KHJldmlld19yZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUxlZ2FjeUZvcm1hdCkge1xuICAgICAgICAgICAgICByZXZpZXdfcmVzdWx0Lm9jcl9kYXRhID0gbGVnYWN5Rm9ybWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvcic7XG4gICAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICc6ICcgKyBlLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZvaWQgMDtcblxuICAgICAgICAgIC8vIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgICAgLy8gICBhd2FpdCB0aGlzLl9fcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgLy8gICB0aGlzLl9fcmVjb3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKCdXQTAwMScsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5fX2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgdGhpcy5fX2RldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHRoaXMuX19yZWNvdmVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX19yZWNvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl9fZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2NhbiwgMSk7IC8vIOyerOq3gFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2V0VGltZW91dChzY2FuLCAxKTsgLy8gVUkg656c642U66eBIGJsb2NraW5nIOuwqeyngCAoc2V0VGltZW91dClcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9fY29tcHJlc3NJbWFnZXMocmV2aWV3X3Jlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlLCBmYWNlSW1hZ2UsIGNvbnN0YW50TnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUNvbXByZXNzSW1hZ2UpIHtcbiAgICAgIGNvbnN0IHJlc2l6ZVJhdGlvID0gdGhpcy5fX2Nyb3BJbWFnZVNpemVIZWlnaHQgLyB0aGlzLl9fY3JvcEltYWdlU2l6ZVdpZHRoO1xuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiB0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4V2lkdGgsXG4gICAgICAgIG1heEhlaWdodDogdGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFdpZHRoICogcmVzaXplUmF0aW8sXG4gICAgICAgIGNvbnZlcnRTaXplOiB0aGlzLl9fb3B0aW9ucy51c2VDb21wcmVzc0ltYWdlTWF4Vm9sdW1lLFxuICAgICAgICB0YXJnZXRDb21wcmVzc1ZvbHVtZTogdGhpcy5fX29wdGlvbnMudXNlQ29tcHJlc3NJbWFnZU1heFZvbHVtZSAvLyBjdXN0b20gb3B0aW9uXG4gICAgICB9O1xuXG4gICAgICByZXZpZXdfcmVzdWx0Lm9jcl9vcmlnaW5faW1hZ2UgPSBhd2FpdCB0aGlzLl9fY29tcHJlc2VCYXNlNjRJbWFnZShpbWdEYXRhVXJsLCBkZWZhdWx0T3B0aW9ucywgY29uc3RhbnROdW1iZXIpO1xuXG4gICAgICAvLyBtYXNraW5nIOydtOuvuOyngOuKlCByZXNpemUg7ZWY66m0LCBtYXNrIOyijO2RnOqwgCDslrTquIvrgpjrr4DroZwg66as7IKs7J207KaIIOyViO2VmOqzoCDslZXstpXrp4wg7KeE7ZaJXG4gICAgICBjb25zdCBtYXNraW5nSW1hZ2VPcHRpb25zID0ge1xuICAgICAgICBxdWFsaXR5OiBkZWZhdWx0T3B0aW9ucy5xdWFsaXR5LFxuICAgICAgICB0YXJnZXRDb21wcmVzc1ZvbHVtZTogZGVmYXVsdE9wdGlvbnMudGFyZ2V0Q29tcHJlc3NWb2x1bWVcbiAgICAgIH07XG4gICAgICByZXZpZXdfcmVzdWx0Lm9jcl9tYXNraW5nX2ltYWdlID0gYXdhaXQgdGhpcy5fX2NvbXByZXNlQmFzZTY0SW1hZ2UobWFza0ltYWdlLCBtYXNraW5nSW1hZ2VPcHRpb25zLCBjb25zdGFudE51bWJlcik7XG4gICAgICByZXZpZXdfcmVzdWx0Lm9jcl9mYWNlX2ltYWdlID0gYXdhaXQgdGhpcy5fX2NvbXByZXNlQmFzZTY0SW1hZ2UoZmFjZUltYWdlLCBkZWZhdWx0T3B0aW9ucywgY29uc3RhbnROdW1iZXIpO1xuICAgIH1cbiAgfVxuICBfX3JlcXVlc3RHZXRBUElUb2tlbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY3JlZGVudGlhbCA9IHRoaXMuX19vcHRpb25zLmF1dGhTZXJ2ZXJJbmZvLmNyZWRlbnRpYWw7XG4gICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5fX29wdGlvbnMuYXV0aFNlcnZlckluZm8uYmFzZVVybDtcbiAgICAgIGZldGNoKGAke2Jhc2VVcmx9L3NpZ24taW5gLCB7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWwpLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAvLyBtb2RlOiAnY29ycycsXG4gICAgICAgIC8vIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vdXNlYi90b2tlbmAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cmVzdWx0LnRva2VufWBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IG51bGwsXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgIHJlc29sdmUoanNvbi50b2tlbik7XG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBfX3JlcXVlc3RTZXJ2ZXJPQ1Iob2NyVHlwZSwgc3NhTW9kZSwgaW1nRGF0YVVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgYmFzZVVybCA9IHRoaXMuX19vcHRpb25zLm9jclNlcnZlckJhc2VVcmw7XG4gICAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICAgIGJhc2VVcmwgKz0gJy9vY3IvaWRjYXJkLWRyaXZlcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgICBiYXNlVXJsICs9ICcvb2NyL3Bhc3Nwb3J0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FsaWVuLWJhY2snOlxuICAgICAgICAgICAgYmFzZVVybCArPSAnL29jci9hbGllbi1iYWNrJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgICAgYmFzZVVybCArPSAnL29jci9hbGllbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDcmVkaXQgY2FyZCBpcyBub3QgVW5zdXBwb3J0ZWQgU2VydmVyIE9DUicpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIE9DUiB0eXBlOiAke29jclR5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXBpVG9rZW4gPSBhd2FpdCB0aGlzLl9fcmVxdWVzdEdldEFQSVRva2VuKCk7XG4gICAgICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpVG9rZW59YCk7XG4gICAgICAgIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbWFnZV9iYXNlNjQ6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgc3NhX21vZGU6ICd0cnVlJyxcbiAgICAgICAgICBtYXNrX21vZGU6ICd0cnVlJyxcbiAgICAgICAgICBmYWNlX21vZGU6ICd0cnVlJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICAgIGJvZHk6IHJhdyxcbiAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdydcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2goYmFzZVVybCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9fc3RhcnRTY2FuU2VydmVySW1wbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gU1RBUlRcbiAgICAgICAgLy8gdGhpcy5fX3NldFBpaUVuY3J5cHRNb2RlKHRoaXMuX19vcHRpb25zLnVzZVBpaUVuY3J5cHRNb2RlKTsgLy8gb2NyIHJlc3VsdCBlbmNyeXB0XG4gICAgICAgIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIEVORFxuICAgICAgICB0aGlzLl9fYmx1ckNhcHR1cmVCdXR0b24oKTtcbiAgICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGwsXG4gICAgICAgICAgc3NhUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgICBzc2FSZXN1bHRMaXN0ID0gW107XG4gICAgICAgIGNvbnN0IF9fb25DbGlja0NhcHR1cmVCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgLy8g7LqU67KE7Iqk7JeQ7IScIOydtOuvuOyngOulvCDqsIDsoLjsmLRcbiAgICAgICAgICBjb25zdCBbLCBpbWdEYXRhVXJsXSA9IGF3YWl0IHRoaXMuX19jcm9wSW1hZ2VGcm9tVmlkZW8oKTtcbiAgICAgICAgICBpZiAoMSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gc2VydmVyIG9jciDsi6TtjKggKOuwnOyDnSDqsIDriqXshLEg7JeG7J2MKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzZXJ2ZXIgb2NyIOyEseqztVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTUFOVUFMX0NBUFRVUkVfU1VDQ0VTUywgZmFsc2UsIGltZ0RhdGFVcmwpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgb2NyUmVzdWx0ID0gYXdhaXQgdGhpcy5fX3JlcXVlc3RTZXJ2ZXJPQ1IodGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCBpbWdEYXRhVXJsKTtcblxuICAgICAgICAgICAgICAvLyBmYWlsdXJlIGNhc2VcbiAgICAgICAgICAgICAgaWYgKG9jclJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciBPQ1IgaXMgZmFpbGVkYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNzYSDsi5zrj4Q/XG5cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICB2aWRlb1xuICAgICAgICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLl9fc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTsgLy8gT0NSIOyZhOujjCDsi5zsoJDsl5AgY2FtZXJhIHByZXZpZXcgb2ZmXG5cbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgbGVnYWN5Rm9ybWF0LFxuICAgICAgICAgICAgICBuZXdGb3JtYXQsXG4gICAgICAgICAgICAgIGJhc2U2NEltYWdlUmVzdWx0LFxuICAgICAgICAgICAgICBtYXNrSW5mb1xuICAgICAgICAgICAgfSA9IHVzZWJPQ1JBUElQYXJzZXIucGFyc2VPY3JSZXN1bHQodGhpcy5fX29jclR5cGUsIHRoaXMuX19zc2FNb2RlLCBvY3JSZXN1bHQpO1xuICAgICAgICAgICAgbGV0IHJldmlld19yZXN1bHQgPSB7XG4gICAgICAgICAgICAgIG9jcl90eXBlOiB0aGlzLl9fb2NyVHlwZSxcbiAgICAgICAgICAgICAgb2NyX3Jlc3VsdDogbmV3Rm9ybWF0LFxuICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiBpbWdEYXRhVXJsLFxuICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogYmFzZTY0SW1hZ2VSZXN1bHQ/Lm9jcl9tYXNraW5nX2ltYWdlLFxuICAgICAgICAgICAgICBvY3JfZmFjZV9pbWFnZTogYmFzZTY0SW1hZ2VSZXN1bHQ/Lm9jcl9mYWNlX2ltYWdlLFxuICAgICAgICAgICAgICBtYXNrSW5mbyxcbiAgICAgICAgICAgICAgc3NhX21vZGU6IHRoaXMuX19zc2FNb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX2NvbXByZXNzSW1hZ2VzKHJldmlld19yZXN1bHQsIGltZ0RhdGFVcmwsIGJhc2U2NEltYWdlUmVzdWx0Py5vY3JfbWFza2luZ19pbWFnZSwgYmFzZTY0SW1hZ2VSZXN1bHQ/Lm9jcl9mYWNlX2ltYWdlLCAwLjApO1xuICAgICAgICAgICAgdGhpcy5lbmNyeXB0UmVzdWx0KHJldmlld19yZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX19vcHRpb25zLnVzZUxlZ2FjeUZvcm1hdCkge1xuICAgICAgICAgICAgICByZXZpZXdfcmVzdWx0Lm9jcl9kYXRhID0gbGVnYWN5Rm9ybWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLl9fY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX19jYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19vbkNsaWNrQ2FwdHVyZUJ1dHRvbik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnU2VydmVyIE9DUiBFcnJvcic7XG4gICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzogJyArIGUubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICB2b2lkIDA7XG4gICAgICAgIGF3YWl0IHRoaXMuX19vbkZhaWx1cmVQcm9jZXNzKCdRUzAwMScsIGUsIGVycm9yTWVzc2FnZSk7IC8vIFFVUkFNIFNlcnZlciBPQ1Ig7JeQ65+sXG4gICAgICAgIHRoaXMuX19jbG9zZUNhbWVyYSgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfX2VucXVldWVEZXRlY3RlZENhcmRRdWV1ZShpbWdEYXRhLCBpbWdEYXRhVVJMKSB7XG4gICAgLy8gc3NhIHJldHJ5IOyEpOygleydtCDrkJjslrQg7J6I7Jy86rGw64KYLCDsiJjrj5nstKzsmIFVSeulvCDsgqzsmqntlZjripQg6rK97JqwLCBjYXJkIGRldGVjdCDshLHqs7Xsi5wg7J2066+47KeAIOyggOyepVxuICAgIGlmICh0aGlzLl9fc3NhTW9kZSAmJiB0aGlzLl9fb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50ID4gMCB8fCB0aGlzLl9fb3B0aW9ucy51c2VDYXB0dXJlVUkgJiYgdGhpcy5fX21hbnVhbE9DUk1heFJldHJ5Q291bnQgPiAwKSB7XG4gICAgICBsZXQgbGltaXRTYXZlSW1hZ2VDb3VudCA9IE1hdGgubWF4KHRoaXMuX19vcHRpb25zLnNzYU1heFJldHJ5Q291bnQsIHRoaXMuX19tYW51YWxPQ1JNYXhSZXRyeUNvdW50KTtcbiAgICAgIGlmICh0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUubGVuZ3RoID09PSBsaW1pdFNhdmVJbWFnZUNvdW50KSB7XG4gICAgICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBpZiAodGhpcy5fX2RlYnVnTW9kZSkgdGhpcy5fX2RldGVjdGVkQ2FyZFF1ZXVlQmFzZTY0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fZGV0ZWN0ZWRDYXJkUXVldWUucHVzaChpbWdEYXRhKTtcbiAgICAgIGlmICh0aGlzLl9fZGVidWdNb2RlKSB7XG4gICAgICAgIHRoaXMuX19kZXRlY3RlZENhcmRRdWV1ZUJhc2U2NC5wdXNoKGltZ0RhdGFVUkwpO1xuICAgICAgICB2b2lkIDA7IC8vIHNob3VsZCBiZSByZW1vdmVkXG4gICAgICB9XG5cbiAgICAgIHZvaWQgMDsgLy8gc2hvdWxkIGJlIHJlbW92ZWRcbiAgICB9XG4gIH1cblxuICBhc3luYyBfX29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCkge1xuICAgIC8vIOyduOyLnSDshLHqs7Ug7Iqk7LqUIOujqO2UhCDsooXro4xcbiAgICBpZiAocmV2aWV3X3Jlc3VsdC5zc2FfbW9kZSkge1xuICAgICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0EpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLl9fY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUyk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICByZXN1bHRfY29kZTogJ04xMDAnLFxuICAgICAgICByZXN1bHRfbWVzc2FnZTogJ09LLidcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6ICdzdWNjZXNzJyxcbiAgICAgIHJldmlld19yZXN1bHQ6IHJldmlld19yZXN1bHRcbiAgICB9O1xuICAgIGlmICh0aGlzLl9fb25TdWNjZXNzKSB7XG4gICAgICB0aGlzLl9fb25TdWNjZXNzKHJlc3VsdCk7XG4gICAgICB0aGlzLl9fb25TdWNjZXNzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBhc3luYyBfX29uRmFpbHVyZVByb2Nlc3MocmVzdWx0Q29kZSwgZSwgZXJyb3JNZXNzYWdlKSB7XG4gICAgYXdhaXQgdGhpcy5fX2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRCk7XG4gICAgbGV0IGVycm9yRGV0YWlsID0gJyc7XG4gICAgaWYgKGU/LnRvU3RyaW5nKCkpIGVycm9yRGV0YWlsICs9IGUudG9TdHJpbmcoKTtcbiAgICBpZiAoZT8uc3RhY2spIGVycm9yRGV0YWlsICs9IGUuc3RhY2s7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIHJlc3VsdF9jb2RlOiByZXN1bHRDb2RlLFxuICAgICAgICByZXN1bHRfbWVzc2FnZTogZXJyb3JNZXNzYWdlXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiAnZmFpbGVkJyxcbiAgICAgIHJldmlld19yZXN1bHQ6IHtcbiAgICAgICAgb2NyX3R5cGU6IHRoaXMuX19vY3JUeXBlLFxuICAgICAgICBlcnJvcl9kZXRhaWw6IGVycm9yRGV0YWlsXG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5fX29uRmFpbHVyZSkge1xuICAgICAgdGhpcy5fX29uRmFpbHVyZShyZXN1bHQpO1xuICAgICAgdGhpcy5fX29uRmFpbHVyZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX19wcmVsb2FkaW5nV2FzbSgpIHtcbiAgICBjb25zdCBwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCk7XG4gICAgaWYgKCF0aGlzLmlzUHJlbG9hZGVkKCkgJiYgcHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLlNUQVJURUQpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBhd2FpdCB0aGlzLl9fd2FpdFByZWxvYWRlZCgpO1xuICAgICAgfSBlbHNlIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkUpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhYm5vcm1hbGx5IHByZWxvYWRpbmcgc3RhdHVzLCBwcmVsb2FkZWQ6ICR7dGhpcy5pc1ByZWxvYWRlZCgpfSAvIHByZWxvYWRpbmdTdGF0dXM6ICR7dGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCl9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gU1RBUlRcbiAgLy8gX19zZXRQaWlFbmNyeXB0TW9kZShwaWlFbmNyeXB0TW9kZSkge1xuICAvLyAgIHRoaXMuX19PQ1JFbmdpbmUuc2V0UGlpRW5jcnlwdChwaWlFbmNyeXB0TW9kZSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gX19lbmNyeXB0RGV0ZWN0ZWRCYXNlNjQoYWRkcmVzcywgbWFzaywgb2NyX21vZGUsIGltZ1R5cGUgPSAnY2FyZCcpIHtcbiAgLy8gICBpZiAoaW1nVHlwZSA9PT0gJ2ZhY2UnKSB7XG4gIC8vICAgICByZXR1cm4gdGhpcy5fX09DUkVuZ2luZS5lbmNyeXB0QmFzZTY0anBnRGV0ZWN0ZWRQaG90b0Jhc2U2NChhZGRyZXNzKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHRoaXMuX19PQ1JFbmdpbmUuZW5jcnlwdEJhc2U2NGpwZ0RldGVjdGVkRnJhbWVCYXNlNjQoXG4gIC8vICAgICBhZGRyZXNzLFxuICAvLyAgICAgbWFzayxcbiAgLy8gICAgIG9jcl9tb2RlXG4gIC8vICAgKTtcbiAgLy8gfVxuICAvL1xuICAvLyBfX2dldEVuY3J5cHRlZFNpemUoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX19PQ1JFbmdpbmUuZ2V0RW5jcnlwdGVkSnBnU2l6ZSgpO1xuICAvLyB9XG4gIC8vXG4gIC8vIF9fZ2V0RW5jcnlwdGVkQnVmZmVyKCkge1xuICAvLyAgIHJldHVybiB0aGlzLl9fT0NSRW5naW5lLmdldEVuY3J5cHRlZEpwZ0J1ZmZlcigpO1xuICAvLyB9XG4gIC8vXG4gIC8vIF9fZ2V0UGlpRW5jcnlwdEltYWdlQmFzZTY0KGFkZHJlc3MsIG1hc2ssIGltZ01vZGUsIGltZ1R5cGUgPSAnY2FyZCcpIHtcbiAgLy8gICBjb25zdCBlbmNyeXB0RGV0ZWN0ZWRCYXNlNjQgPSB0aGlzLl9fZW5jcnlwdERldGVjdGVkQmFzZTY0KFxuICAvLyAgICAgYWRkcmVzcyxcbiAgLy8gICAgIG1hc2ssXG4gIC8vICAgICBpbWdNb2RlLFxuICAvLyAgICAgaW1nVHlwZVxuICAvLyAgICk7XG4gIC8vICAgaWYgKGVuY3J5cHREZXRlY3RlZEJhc2U2NCA9PT0gMSkge1xuICAvLyAgICAgY29uc3QganBnU2l6ZSA9IHRoaXMuX19nZXRFbmNyeXB0ZWRTaXplKCk7XG4gIC8vICAgICBjb25zdCBqcGdQb2ludGVyID0gdGhpcy5fX2dldEVuY3J5cHRlZEJ1ZmZlcigpO1xuICAvL1xuICAvLyAgICAgY29uc3QgZW5jcnlwdGVkID0gbmV3IFVpbnQ4QXJyYXkoXG4gIC8vICAgICAgIHRoaXMuX19PQ1JFbmdpbmUuSEVBUDguYnVmZmVyLFxuICAvLyAgICAgICBqcGdQb2ludGVyLFxuICAvLyAgICAgICBqcGdTaXplXG4gIC8vICAgICApO1xuICAvLyAgICAgY29uc3QgdGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04Jyk7XG4gIC8vICAgICBjb25zdCBkZWNvZGVkU3RyaW5nID0gdGV4dERlY29kZXIuZGVjb2RlKGVuY3J5cHRlZCk7XG4gIC8vXG4gIC8vICAgICByZXR1cm4gZGVjb2RlZFN0cmluZztcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuICcnO1xuICAvLyB9XG4gIC8vIOy2lO2bhCDsnITsl5Ag7KO87ISdIO2SgOyWtOyVvO2VqCAtIEVORFxuXG4gIGFzeW5jIF9fc3RhcnRTY2FuV2FzbSgpIHtcbiAgICB0aGlzLl9fZGVidWcoJ3dhc21fbW9kZScpO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuX19wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuX19zdGFydFNjYW5XYXNtSW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyBfX3N0YXJ0U2NhblNlcnZlcigpIHtcbiAgICB0aGlzLl9fZGVidWcoJ3NlcnZlcl9tb2RlJyk7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5fX29wdGlvbnMudXNlQ2FwdHVyZVVJID0gdHJ1ZTtcbiAgICBhd2FpdCB0aGlzLl9fcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuU2VydmVySW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyBfX3JlY292ZXJ5U2NhbigpIHtcbiAgICB2b2lkIDA7XG4gICAgdGhpcy5fX3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICBhd2FpdCB0aGlzLl9fc3RhcnRTY2FuV2FzbSgpO1xuICB9XG4gIHN0b3BTY2FuKCkge1xuICAgIHRoaXMuX19kZXRlY3RlZCA9IHRydWU7IC8vIHN3aXRjaCB0byBzZXJ2ZXLsnbzrlYwg6riw7KG0IFdBU00gbG9vcCDqsJXsoJzsooXro4xcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgc3RvcFN0cmVhbSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmICh0aGlzLl9fc3RyZWFtKSB7XG4gICAgICB0aGlzLl9fc3RyZWFtLnN0b3AgJiYgdGhpcy5fX3N0cmVhbS5zdG9wKCk7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy5fX3N0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0cmVhbSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIOuplOuqqOumrCBhbGxvY2F0aW9uIGZyZWUg7ZWo7IiYICovXG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy5fX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpO1xuICAgIHRoaXMuX19kZXN0cm95QnVmZmVyKCk7XG4gICAgdGhpcy5fX2Rlc3Ryb3lQcmV2SW1hZ2UoKTtcbiAgICB0aGlzLl9fZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKTtcbiAgfVxuICBfX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy5fX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcik7XG4gICAgICB0aGlzLl9fY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVc2VCT0NSOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxPQUFPQSxRQUFRLE1B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
