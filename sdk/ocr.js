function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldDestructureSet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); return _classApplyDescriptorDestructureSet(receiver, descriptor); }
function _classApplyDescriptorDestructureSet(receiver, descriptor) { if (descriptor.set) { if (!("__destrObj" in descriptor)) { descriptor.__destrObj = { set value(v) { descriptor.set.call(receiver, v); } }; } return descriptor.__destrObj; } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } return descriptor; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
/* eslint-disable */
/* global-module */
import detector from './helpers/detector.js';
import parser from './helpers/parser.js';
var instance;
var _OCREngine = /*#__PURE__*/new WeakMap();
var _initialized = /*#__PURE__*/new WeakMap();
var _preloaded = /*#__PURE__*/new WeakMap();
var _preloadingStatus = /*#__PURE__*/new WeakMap();
var _license = /*#__PURE__*/new WeakMap();
var _ocrType = /*#__PURE__*/new WeakMap();
var _ssaMode = /*#__PURE__*/new WeakMap();
var _ssaRetryCount = /*#__PURE__*/new WeakMap();
var _onSuccess = /*#__PURE__*/new WeakMap();
var _onFailure = /*#__PURE__*/new WeakMap();
var _onInProgressChange = /*#__PURE__*/new WeakMap();
var _ocrTypeList = /*#__PURE__*/new WeakMap();
var _ocrTypeString = /*#__PURE__*/new WeakMap();
var _pageEnd = /*#__PURE__*/new WeakMap();
var _ocr = /*#__PURE__*/new WeakMap();
var _canvas = /*#__PURE__*/new WeakMap();
var _rotationCanvas = /*#__PURE__*/new WeakMap();
var _video = /*#__PURE__*/new WeakMap();
var _videoWrap = /*#__PURE__*/new WeakMap();
var _guideBox = /*#__PURE__*/new WeakMap();
var _guideBoxWrap = /*#__PURE__*/new WeakMap();
var _maskBoxWrap = /*#__PURE__*/new WeakMap();
var _preventToFreezeVideo = /*#__PURE__*/new WeakMap();
var _customUIWrap = /*#__PURE__*/new WeakMap();
var _topUI = /*#__PURE__*/new WeakMap();
var _middleUI = /*#__PURE__*/new WeakMap();
var _bottomUI = /*#__PURE__*/new WeakMap();
var _previewUIWrap = /*#__PURE__*/new WeakMap();
var _previewUI = /*#__PURE__*/new WeakMap();
var _previewImage = /*#__PURE__*/new WeakMap();
var _Buffer = /*#__PURE__*/new WeakMap();
var _resultBuffer = /*#__PURE__*/new WeakMap();
var _PrevImage = /*#__PURE__*/new WeakMap();
var _stringOnWasmHeap = /*#__PURE__*/new WeakMap();
var _camSetComplete = /*#__PURE__*/new WeakMap();
var _resolutionWidth = /*#__PURE__*/new WeakMap();
var _resolutionHeight = /*#__PURE__*/new WeakMap();
var _videoWidth = /*#__PURE__*/new WeakMap();
var _videoHeight = /*#__PURE__*/new WeakMap();
var _resourcesLoaded = /*#__PURE__*/new WeakMap();
var _intervalTimer = /*#__PURE__*/new WeakMap();
var _cameraPermissionTimeoutTimer = /*#__PURE__*/new WeakMap();
var _requestAnimationFrameId = /*#__PURE__*/new WeakMap();
var _stream = /*#__PURE__*/new WeakMap();
var _destroyScannerCallback = /*#__PURE__*/new WeakMap();
var _facingModeConstraint = /*#__PURE__*/new WeakMap();
var _uiOrientation = /*#__PURE__*/new WeakMap();
var _prevUiOrientation = /*#__PURE__*/new WeakMap();
var _videoOrientation = /*#__PURE__*/new WeakMap();
var _throttlingResizeTimer = /*#__PURE__*/new WeakMap();
var _throttlingResizeDelay = /*#__PURE__*/new WeakMap();
var _maxRetryCountGetAddress = /*#__PURE__*/new WeakMap();
var _retryCountGetAddress = /*#__PURE__*/new WeakMap();
var _deviceInfo = /*#__PURE__*/new WeakMap();
var _isRotated90or = /*#__PURE__*/new WeakMap();
var _inProgressStep = /*#__PURE__*/new WeakMap();
var _previousInProgressStep = /*#__PURE__*/new WeakMap();
var _isInProgressHandleResize = /*#__PURE__*/new WeakMap();
var _intervalLock = /*#__PURE__*/new WeakMap();
var _guideBoxRatioByWidth = /*#__PURE__*/new WeakMap();
var _videoRatioByHeight = /*#__PURE__*/new WeakMap();
var _guideBoxReduceRatio = /*#__PURE__*/new WeakMap();
var _cropImageSizeWidth = /*#__PURE__*/new WeakMap();
var _cropImageSizeHeight = /*#__PURE__*/new WeakMap();
var _ocrResult = /*#__PURE__*/new WeakMap();
var _imgDataUrl = /*#__PURE__*/new WeakMap();
var _maskImage = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
var _waitPreloaded = /*#__PURE__*/new WeakSet();
var _windowEventBind = /*#__PURE__*/new WeakSet();
var _sleep = /*#__PURE__*/new WeakSet();
var _blobToBase = /*#__PURE__*/new WeakSet();
var _getStringOnWasmHeap = /*#__PURE__*/new WeakSet();
var _setVideoResolution = /*#__PURE__*/new WeakSet();
var _getScannerAddress = /*#__PURE__*/new WeakSet();
var _getBuffer = /*#__PURE__*/new WeakSet();
var _getImageBase = /*#__PURE__*/new WeakSet();
var _destroyBuffer = /*#__PURE__*/new WeakSet();
var _destroyPrevImage = /*#__PURE__*/new WeakSet();
var _destroyStringOnWasmHeap = /*#__PURE__*/new WeakSet();
var _destroyScannerAddress = /*#__PURE__*/new WeakSet();
var _isVideoResolutionCompatible = /*#__PURE__*/new WeakSet();
var _getRotationDegree = /*#__PURE__*/new WeakSet();
var _getMirrorMode = /*#__PURE__*/new WeakSet();
var _cropImageFromVideo = /*#__PURE__*/new WeakSet();
var _rotate = /*#__PURE__*/new WeakSet();
var _isCardboxDetected = /*#__PURE__*/new WeakSet();
var _startRecognition = /*#__PURE__*/new WeakSet();
var _startTruth = /*#__PURE__*/new WeakSet();
var _setCameraPermissionTimeoutTimer = /*#__PURE__*/new WeakSet();
var _proceedCameraPermission = /*#__PURE__*/new WeakSet();
var _setStyle = /*#__PURE__*/new WeakSet();
var _changeStage = /*#__PURE__*/new WeakSet();
var _updatePreviewUI = /*#__PURE__*/new WeakSet();
var _hidePreviewUI = /*#__PURE__*/new WeakSet();
var _getInputDevices = /*#__PURE__*/new WeakSet();
var _setupDomElements = /*#__PURE__*/new WeakSet();
var _setupVideo = /*#__PURE__*/new WeakSet();
var _adjustStyle = /*#__PURE__*/new WeakSet();
var _closeCamera = /*#__PURE__*/new WeakSet();
var _loadResources = /*#__PURE__*/new WeakSet();
var _startScanImpl = /*#__PURE__*/new WeakSet();
var _onSuccessProcess = /*#__PURE__*/new WeakSet();
var _onFailureProcess = /*#__PURE__*/new WeakSet();
var _startScan = /*#__PURE__*/new WeakSet();
var _recoveryScan = /*#__PURE__*/new WeakSet();
var _clearCameraPermissionTimeoutTimer = /*#__PURE__*/new WeakSet();
var _clearIntervalTimers = /*#__PURE__*/new WeakSet();
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
    _classPrivateMethodInitSpec(this, _clearIntervalTimers);
    _classPrivateMethodInitSpec(this, _clearCameraPermissionTimeoutTimer);
    _classPrivateMethodInitSpec(this, _recoveryScan);
    _classPrivateMethodInitSpec(this, _startScan);
    _classPrivateMethodInitSpec(this, _onFailureProcess);
    _classPrivateMethodInitSpec(this, _onSuccessProcess);
    _classPrivateMethodInitSpec(this, _startScanImpl);
    _classPrivateMethodInitSpec(this, _loadResources);
    _classPrivateMethodInitSpec(this, _closeCamera);
    _classPrivateMethodInitSpec(this, _adjustStyle);
    _classPrivateMethodInitSpec(this, _setupVideo);
    _classPrivateMethodInitSpec(this, _setupDomElements);
    _classPrivateMethodInitSpec(this, _getInputDevices);
    _classPrivateMethodInitSpec(this, _hidePreviewUI);
    _classPrivateMethodInitSpec(this, _updatePreviewUI);
    _classPrivateMethodInitSpec(this, _changeStage);
    _classPrivateMethodInitSpec(this, _setStyle);
    _classPrivateMethodInitSpec(this, _proceedCameraPermission);
    _classPrivateMethodInitSpec(this, _setCameraPermissionTimeoutTimer);
    _classPrivateMethodInitSpec(this, _startTruth);
    _classPrivateMethodInitSpec(this, _startRecognition);
    _classPrivateMethodInitSpec(this, _isCardboxDetected);
    _classPrivateMethodInitSpec(this, _rotate);
    _classPrivateMethodInitSpec(this, _cropImageFromVideo);
    _classPrivateMethodInitSpec(this, _getMirrorMode);
    _classPrivateMethodInitSpec(this, _getRotationDegree);
    _classPrivateMethodInitSpec(this, _isVideoResolutionCompatible);
    /** free scanner address */
    _classPrivateMethodInitSpec(this, _destroyScannerAddress);
    /** free string heap buffer */
    _classPrivateMethodInitSpec(this, _destroyStringOnWasmHeap);
    /** Free PrevImage buffer */
    _classPrivateMethodInitSpec(this, _destroyPrevImage);
    /** Free buffer */
    _classPrivateMethodInitSpec(this, _destroyBuffer);
    _classPrivateMethodInitSpec(this, _getImageBase);
    _classPrivateMethodInitSpec(this, _getBuffer);
    _classPrivateMethodInitSpec(this, _getScannerAddress);
    _classPrivateMethodInitSpec(this, _setVideoResolution);
    /** 라이센스 키를 heap 에 allocation */
    _classPrivateMethodInitSpec(this, _getStringOnWasmHeap);
    _classPrivateMethodInitSpec(this, _blobToBase);
    _classPrivateMethodInitSpec(this, _sleep);
    _classPrivateMethodInitSpec(this, _windowEventBind);
    /** private methods */
    _classPrivateMethodInitSpec(this, _waitPreloaded);
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
    _defineProperty(this, "PRELOADING_STATUS", {
      NOT_STARTED: -1,
      STARTED: 0,
      DONE: 1
    });
    _classPrivateFieldInitSpec(this, _OCREngine, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _initialized, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _preloaded, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _preloadingStatus, {
      writable: true,
      value: this.PRELOADING_STATUS.NOT_STARTED
    });
    _classPrivateFieldInitSpec(this, _license, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _ocrType, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _ssaMode, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _ssaRetryCount, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _onSuccess, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _onFailure, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _onInProgressChange, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _ocrTypeList, {
      writable: true,
      value: ['idcard', 'driver', 'passport', 'foreign-passport', 'alien', 'credit', 'idcard-ssa', 'driver-ssa', 'passport-ssa', 'foreign-passport-ssa', 'alien-ssa', 'credit-ssa']
    });
    _classPrivateFieldInitSpec(this, _ocrTypeString, {
      writable: true,
      value: new Map([["1", "idcard"], ["2", "driver"], ["3", "passport"], ["4", "foreign-passport"], ["5", "alien"], ["5-1", "alien"], ["5-2", "alien"], ["5-3", "alien"]])
    });
    _classPrivateFieldInitSpec(this, _pageEnd, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _ocr, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _canvas, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _rotationCanvas, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _video, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _videoWrap, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _guideBox, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _guideBoxWrap, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _maskBoxWrap, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _preventToFreezeVideo, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _customUIWrap, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _topUI, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _middleUI, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _bottomUI, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _previewUIWrap, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _previewUI, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _previewImage, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _Buffer, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _resultBuffer, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _PrevImage, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _stringOnWasmHeap, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _camSetComplete, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _resolutionWidth, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _resolutionHeight, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _videoWidth, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _videoHeight, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _resourcesLoaded, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _intervalTimer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _cameraPermissionTimeoutTimer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _requestAnimationFrameId, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _stream, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _destroyScannerCallback, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _facingModeConstraint, {
      writable: true,
      value: 'environment'
    });
    _classPrivateFieldInitSpec(this, _uiOrientation, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _prevUiOrientation, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _videoOrientation, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _throttlingResizeTimer, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _throttlingResizeDelay, {
      writable: true,
      value: 500
    });
    _classPrivateFieldInitSpec(this, _maxRetryCountGetAddress, {
      writable: true,
      value: 300
    });
    _classPrivateFieldInitSpec(this, _retryCountGetAddress, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _deviceInfo, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _isRotated90or, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _inProgressStep, {
      writable: true,
      value: this.IN_PROGRESS.NOT_READY
    });
    _classPrivateFieldInitSpec(this, _previousInProgressStep, {
      writable: true,
      value: this.IN_PROGRESS.NONE
    });
    _classPrivateFieldInitSpec(this, _isInProgressHandleResize, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _intervalLock, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _guideBoxRatioByWidth, {
      writable: true,
      value: 0.8
    });
    _classPrivateFieldInitSpec(this, _videoRatioByHeight, {
      writable: true,
      value: 0.9
    });
    _classPrivateFieldInitSpec(this, _guideBoxReduceRatio, {
      writable: true,
      value: 0.8
    });
    _classPrivateFieldInitSpec(this, _cropImageSizeWidth, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _cropImageSizeHeight, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _ocrResult, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _imgDataUrl, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _maskImage, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: new Object({
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
      })
    });
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
        _classPrivateFieldSet(_this, _preloadingStatus, _this.PRELOADING_STATUS.STARTED);
        yield _classPrivateMethodGet(_this, _loadResources, _loadResources2).call(_this);
        _classPrivateFieldSet(_this, _preloadingStatus, _this.PRELOADING_STATUS.DONE);
        _classPrivateFieldSet(_this, _preloaded, true);
        void 0;
      }
    })();
  }
  isInitialized() {
    return _classPrivateFieldGet(this, _initialized);
  }
  isPreloaded() {
    return _classPrivateFieldGet(this, _preloaded);
  }
  getPreloadingStatus() {
    return _classPrivateFieldGet(this, _preloadingStatus);
  }
  getOCREngine() {
    return _classPrivateFieldGet(this, _OCREngine);
  }
  init(settings) {
    if (!!!settings.licenseKey) throw new Error('License key is empty');
    _classPrivateFieldSet(this, _license, settings.licenseKey);
    var mergedOptions = _.merge({}, _classPrivateFieldGet(this, _options), settings);
    this.setOption(mergedOptions);
    void 0;
    if (!this.isInitialized()) {
      _classPrivateMethodGet(this, _windowEventBind, _windowEventBind2).call(this);
      _classPrivateFieldSet(this, _deviceInfo, detector.getOsVersion());
      void 0;
      _classPrivateFieldSet(this, _initialized, true);
    }
  }
  setOption(settings) {
    _classPrivateFieldSet(this, _options, settings);
  }
  getOption() {
    return _classPrivateFieldGet(this, _options);
  }
  getOcrType(type) {
    return _classPrivateFieldGet(this, _ocrTypeString).get(type);
  }
  getUIOrientation() {
    return _classPrivateFieldGet(this, _uiOrientation);
  }
  getVideoOrientation() {
    return _classPrivateFieldGet(this, _videoOrientation);
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
      _classPrivateFieldSet(_this2, _ocrType, type);
      _classPrivateFieldSet(_this2, _ssaMode, _classPrivateFieldGet(_this2, _ocrType).indexOf('-ssa') > -1);
      _classPrivateFieldSet(_this2, _onSuccess, onSuccess);
      _classPrivateFieldSet(_this2, _onFailure, onFailure);
      _classPrivateFieldSet(_this2, _onInProgressChange, onInProgressChange);
      if (onInProgressChange) {
        if (_classPrivateFieldGet(_this2, _options).useTopUI) {
          _classPrivateFieldSet(_this2, _topUI, detector.getOCRElements().topUI);
        }
        if (_classPrivateFieldGet(_this2, _options).useMiddleUI) {
          _classPrivateFieldSet(_this2, _middleUI, detector.getOCRElements().middleUI);
        }
        if (_classPrivateFieldGet(_this2, _options).useBottomUI) {
          _classPrivateFieldSet(_this2, _bottomUI, detector.getOCRElements().bottomUI);
        }
      }
      _classPrivateMethodGet(_this2, _changeStage, _changeStage2).call(_this2, _this2.IN_PROGRESS.NOT_READY);
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
            yield _classPrivateMethodGet(_this2, _waitPreloaded, _waitPreloaded2).call(_this2);
          } else if (preloadingStatus === _this2.PRELOADING_STATUS.DONE) {
            void 0;
          } else {
            throw new Error("abnormally preloading status, preloaded: ".concat(_this2.isPreloaded(), " / preloadingStatus: ").concat(_this2.getPreloadingStatus()));
          }
        }
        _classPrivateMethodGet(_this2, _changeStage, _changeStage2).call(_this2, _this2.IN_PROGRESS.READY);
        yield _classPrivateMethodGet(_this2, _startScan, _startScan2).call(_this2);
      } catch (e) {
        void 0;
      } finally {
        _this2.stopOCR();
      }
    })();
  }
  stopOCR() {
    this.cleanup();
    _classPrivateMethodGet(this, _closeCamera, _closeCamera2).call(this);
    _classPrivateFieldSet(this, _onSuccess, null);
    _classPrivateFieldSet(this, _onFailure, null);
  }
  restartOCR(ocrType, onSuccess, onFailure, onInProgressChange) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      // await this.stopOCR();
      _classPrivateMethodGet(_this3, _closeCamera, _closeCamera2).call(_this3);
      yield _this3.startOCR(ocrType, onSuccess, onFailure, onInProgressChange);
    })();
  }
  checkUIOrientation() {
    var current = detector.getUIOrientation(detector.getOCRElements().ocr);
    var isChanged = false;
    if (current !== _classPrivateFieldGet(this, _prevUiOrientation)) {
      _classPrivateFieldSet(this, _uiOrientation, current);
      _classPrivateFieldSet(this, _prevUiOrientation, current);
      isChanged = true;
    }
    return {
      current,
      isChanged
    };
  }
  stopScan() {
    _classPrivateMethodGet(this, _clearIntervalTimers, _clearIntervalTimers2).call(this);
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
    cancelAnimationFrame(_classPrivateFieldGet(this, _requestAnimationFrameId));
    if (_classPrivateFieldGet(this, _stream)) {
      _classPrivateFieldGet(this, _stream).stop && _classPrivateFieldGet(this, _stream).stop();
      var tracks = _classPrivateFieldGet(this, _stream).getTracks && _classPrivateFieldGet(this, _stream).getTracks();
      void 0;
      if (tracks && tracks.length) {
        tracks.forEach(track => track.stop());
      }
      _classPrivateFieldSet(this, _stream, null);
    }
  }
  /** 메모리 allocation free 함수 */
  cleanup() {
    _classPrivateMethodGet(this, _destroyScannerAddress, _destroyScannerAddress2).call(this);
    _classPrivateMethodGet(this, _destroyBuffer, _destroyBuffer2).call(this);
    _classPrivateMethodGet(this, _destroyPrevImage, _destroyPrevImage2).call(this);
    _classPrivateMethodGet(this, _destroyStringOnWasmHeap, _destroyStringOnWasmHeap2).call(this);
  }
}
function _waitPreloaded2() {
  return _waitPreloaded3.apply(this, arguments);
}
function _waitPreloaded3() {
  _waitPreloaded3 = _asyncToGenerator(function* () {
    var _this6 = this;
    var waitingRetryCount = 0;
    return new Promise(resolve => {
      var check = () => {
        setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
          if (_this6.isPreloaded()) {
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
  });
  return _waitPreloaded3.apply(this, arguments);
}
function _windowEventBind2() {
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
    _classPrivateFieldSet(_this_, _pageEnd, true);
    _this_.cleanup();
  };
  var handleResize = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      if (!!!_classPrivateFieldGet(_this_, _ocrType)) return;
      if (!_classPrivateFieldGet(_this_, _isInProgressHandleResize)) {
        _classPrivateFieldSet(_this_, _isInProgressHandleResize, true);
        _classPrivateFieldSet(_this_, _throttlingResizeTimer, null);
        void 0;
        _classPrivateFieldSet(_this_, _isInProgressHandleResize, false);
        yield _this_.restartOCR(_classPrivateFieldGet(_this_, _ocrType), _classPrivateFieldGet(_this_, _onSuccess), _classPrivateFieldGet(_this_, _onFailure), _classPrivateFieldGet(_this_, _onInProgressChange));
      } else {
        void 0;
      }
    });
    return function handleResize() {
      return _ref.apply(this, arguments);
    };
  }();
  window.addEventListener('resize', /*#__PURE__*/_asyncToGenerator(function* () {
    if (!!!_classPrivateFieldGet(_this_, _throttlingResizeTimer)) {
      _classPrivateFieldSet(_this_, _throttlingResizeTimer, setTimeout(handleResize, _classPrivateFieldGet(_this_, _throttlingResizeDelay)));
    }
  }));
}
function _sleep2(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function _blobToBase2(blob) {
  return new Promise((resolve, _) => {
    var reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
function _getStringOnWasmHeap2() {
  if (!!!_classPrivateFieldGet(this, _license)) {
    throw new Error("License Key is empty");
  }
  var lengthBytes = _classPrivateFieldGet(this, _OCREngine).lengthBytesUTF8(_classPrivateFieldGet(this, _license)) + 1;
  _classPrivateFieldSet(this, _stringOnWasmHeap, _classPrivateFieldGet(this, _OCREngine)._malloc(lengthBytes));
  _classPrivateFieldGet(this, _OCREngine).stringToUTF8(_classPrivateFieldGet(this, _license), _classPrivateFieldGet(this, _stringOnWasmHeap), lengthBytes);
  return _classPrivateFieldGet(this, _stringOnWasmHeap);
}
function _setVideoResolution2(videoElement) {
  var isSupportedResolution = false;
  var resolutionText = 'not ready';
  if (!_classPrivateFieldGet(this, _camSetComplete)) {
    return {
      isSupportedResolution,
      resolutionText
    };
  }
  if (videoElement.videoWidth === 0 && videoElement.videoHeight === 0) {
    _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.NOT_READY);
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
  _classPrivateFieldSet(this, _videoWidth, videoElement.videoWidth);
  _classPrivateFieldSet(this, _videoHeight, videoElement.videoHeight);
  return {
    isSupportedResolution,
    resolutionText
  };
}
function _getScannerAddress2(ocrType) {
  if (!_classPrivateFieldGet(this, _ocrTypeList).includes(ocrType)) throw new Error('Unsupported OCR type');
  try {
    var address = 0;
    var destroyCallback = null;
    var stringOnWasmHeap = _classPrivateMethodGet(this, _getStringOnWasmHeap, _getStringOnWasmHeap2).call(this);
    switch (ocrType) {
      // OCR
      case 'idcard':
      case 'driver':
      case 'idcard-ssa':
      case 'driver-ssa':
        address = _classPrivateFieldGet(this, _OCREngine).getIDCardScanner(stringOnWasmHeap);
        destroyCallback = () => _classPrivateFieldGet(this, _OCREngine).destroyIDCardScanner(address);
        break;
      case 'passport':
      case 'foreign-passport':
      case 'passport-ssa':
      case 'foreign-passport-ssa':
        address = _classPrivateFieldGet(this, _OCREngine).getPassportScanner(stringOnWasmHeap);
        destroyCallback = () => _classPrivateFieldGet(this, _OCREngine).destroyPassportScanner(address);
        break;
      case 'alien':
      case 'alien-ssa':
        address = _classPrivateFieldGet(this, _OCREngine).getAlienScanner(stringOnWasmHeap);
        destroyCallback = () => _classPrivateFieldGet(this, _OCREngine).destroyAlienScanner(address);
        break;
      case 'credit':
      case 'credit-ssa':
        address = _classPrivateFieldGet(this, _OCREngine).getCreditScanner(stringOnWasmHeap);
        destroyCallback = () => _classPrivateFieldGet(this, _OCREngine).destroyCreditScanner(address);
        break;
      default:
        throw new Error('Scanner does not exists');
    }
    _classPrivateFieldGet(this, _OCREngine)._free(stringOnWasmHeap);
    if (address === 0) {
      var _this$retryCountGetAd, _this$retryCountGetAd2;
      if (_classPrivateFieldGet(this, _maxRetryCountGetAddress) === _classPrivateFieldGet(this, _retryCountGetAddress)) {
        throw new Error("Wrong License Key");
      }
      _classPrivateFieldSet(this, _retryCountGetAddress, (_this$retryCountGetAd = _classPrivateFieldGet(this, _retryCountGetAddress), _this$retryCountGetAd2 = _this$retryCountGetAd++, _this$retryCountGetAd)), _this$retryCountGetAd2;
    }
    return [address, destroyCallback];
  } catch (e) {
    // TODO : License Issue인 경우 에러 값을 받아서 error 로그를 찍을 수 있게 요청필요 (임시 N번 이상 address를 못받으면 강제 에러)
    void 0;
    void 0;
    throw e;
  }
}
function _getBuffer2() {
  if (!_classPrivateFieldGet(this, _Buffer)) {
    _classPrivateFieldSet(this, _Buffer, _classPrivateFieldGet(this, _OCREngine)._malloc(_classPrivateFieldGet(this, _resolutionWidth) * _classPrivateFieldGet(this, _resolutionHeight) * 4));
  }
  if (!_classPrivateFieldGet(this, _resultBuffer)) {
    _classPrivateFieldSet(this, _resultBuffer, _classPrivateFieldGet(this, _OCREngine)._malloc(256));
  }
  return [_classPrivateFieldGet(this, _Buffer), _classPrivateFieldGet(this, _resultBuffer)];
}
function _getImageBase2(_x, _x2, _x3) {
  return _getImageBase3.apply(this, arguments);
}
function _getImageBase3() {
  _getImageBase3 = _asyncToGenerator(function* (address, maskMode, cropMode) {
    try {
      _classPrivateFieldGet(this, _OCREngine).encodeJpgDetectedFrameImage(address, maskMode, cropMode);
      var jpgSize = _classPrivateFieldGet(this, _OCREngine).getEncodedJpgSize();
      var jpgPointer = _classPrivateFieldGet(this, _OCREngine).getEncodedJpgBuffer();
      var resultView = new Uint8Array(_classPrivateFieldGet(this, _OCREngine).HEAP8.buffer, jpgPointer, jpgSize);
      var result = new Uint8Array(resultView);
      var blob = new Blob([result], {
        type: 'image/jpeg'
      });
      return yield _classPrivateMethodGet(this, _blobToBase, _blobToBase2).call(this, blob);
    } catch (e) {
      void 0;
      throw e;
    } finally {
      _classPrivateFieldGet(this, _OCREngine).destroyEncodedJpg();
    }
  });
  return _getImageBase3.apply(this, arguments);
}
function _destroyBuffer2() {
  if (_classPrivateFieldGet(this, _Buffer)) {
    _classPrivateFieldGet(this, _OCREngine)._free(_classPrivateFieldGet(this, _Buffer));
    _classPrivateFieldSet(this, _Buffer, null);
  }
  if (_classPrivateFieldGet(this, _resultBuffer) !== null) {
    _classPrivateFieldGet(this, _OCREngine)._free(_classPrivateFieldGet(this, _resultBuffer));
    _classPrivateFieldSet(this, _resultBuffer, null);
  }
}
function _destroyPrevImage2() {
  if (_classPrivateFieldGet(this, _PrevImage) !== null) {
    _classPrivateFieldGet(this, _OCREngine)._free(_classPrivateFieldGet(this, _PrevImage));
    _classPrivateFieldSet(this, _PrevImage, null);
  }
}
function _destroyStringOnWasmHeap2() {
  if (_classPrivateFieldGet(this, _stringOnWasmHeap)) {
    _classPrivateFieldGet(this, _OCREngine)._free(_classPrivateFieldGet(this, _stringOnWasmHeap));
    _classPrivateFieldSet(this, _stringOnWasmHeap, null);
  }
}
function _destroyScannerAddress2() {
  if (_classPrivateFieldGet(this, _destroyScannerCallback)) {
    _classPrivateFieldGet(this, _destroyScannerCallback).call(this);
    _classPrivateFieldSet(this, _destroyScannerCallback, null);
  }
}
function _isVideoResolutionCompatible2(videoElement) {
  var {
    isSupportedResolution,
    resolutionText
  } = _classPrivateMethodGet(this, _setVideoResolution, _setVideoResolution2).call(this, videoElement);
  if (!isSupportedResolution) {
    if (resolutionText !== 'not ready') {
      void 0;
    }
  }
  return isSupportedResolution;
}
function _getRotationDegree2() {
  return (_classPrivateFieldGet(this, _options).rotationDegree % 360 + 360) % 360;
}
function _getMirrorMode2() {
  return _classPrivateFieldGet(this, _options).mirrorMode;
}
function _cropImageFromVideo2() {
  return _cropImageFromVideo3.apply(this, arguments);
}
function _cropImageFromVideo3() {
  _cropImageFromVideo3 = _asyncToGenerator(function* () {
    if (!_classPrivateFieldGet(this, _camSetComplete)) return [null, null];
    var [calcResolution_w, calcResolution_h] = [_classPrivateFieldGet(this, _resolutionWidth), _classPrivateFieldGet(this, _resolutionHeight)];
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
    var calcCropImageSizeWidth = _classPrivateFieldGet(this, _cropImageSizeWidth);
    var calcCropImageSizeHeight = _classPrivateFieldGet(this, _cropImageSizeHeight);
    var calcVideoOrientation = _classPrivateFieldGet(this, _videoOrientation);
    if (_classPrivateFieldGet(this, _isRotated90or)) {
      [calcCropImageSizeWidth, calcCropImageSizeHeight] = [calcCropImageSizeHeight, calcCropImageSizeWidth];
      [calcResolution_w, calcResolution_h] = [calcResolution_h, calcResolution_w];
      calcCanvas = rotationCanvas;
      calcVideoOrientation = _classPrivateFieldGet(this, _videoOrientation) === 'portrait' ? 'landscape' : 'portrait';
    }
    var calcMaxSWidth = 99999;
    var calcMaxSHeight = 99999;
    if (_classPrivateFieldGet(this, _uiOrientation) === 'portrait') {
      if (calcVideoOrientation === _classPrivateFieldGet(this, _uiOrientation)) {
        // 세로 UI / 세로 카메라
        calcMaxSWidth = calcVideoWidth;
        calcMaxSHeight = calcVideoHeight;
      } else {
        // 세로 UI / 가로 카메라
        calcMaxSHeight = calcVideoHeight;
      }
    } else {
      if (calcVideoOrientation === _classPrivateFieldGet(this, _uiOrientation)) {
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
    if (_classPrivateFieldGet(this, _isRotated90or)) {
      return yield _classPrivateMethodGet(this, _rotate, _rotate2).call(this, imgData, imgDataUrl, _classPrivateMethodGet(this, _getRotationDegree, _getRotationDegree2).call(this));
    } else {
      return [imgData, imgDataUrl];
    }
  });
  return _cropImageFromVideo3.apply(this, arguments);
}
function _rotate2(_x4, _x5, _x6) {
  return _rotate3.apply(this, arguments);
}
function _rotate3() {
  _rotate3 = _asyncToGenerator(function* (imgData, imgDataUrl, degree) {
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
  });
  return _rotate3.apply(this, arguments);
}
function _isCardboxDetected2(_x7) {
  return _isCardboxDetected3.apply(this, arguments);
}
function _isCardboxDetected3() {
  _isCardboxDetected3 = _asyncToGenerator(function* (address) {
    var boxType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (!address || address < 0) {
      return false;
    }
    try {
      var [buffer] = _classPrivateMethodGet(this, _getBuffer, _getBuffer2).call(this);
      var [imgData] = yield _classPrivateMethodGet(this, _cropImageFromVideo, _cropImageFromVideo2).call(this);
      if (!!!imgData) {
        return;
      }
      _classPrivateFieldGet(this, _OCREngine).HEAP8.set(imgData.data, buffer);
      var result = _classPrivateFieldGet(this, _OCREngine).detect_idcard(buffer, _classPrivateFieldGet(this, _resolutionWidth), _classPrivateFieldGet(this, _resolutionHeight), address, boxType);
      // console.log('isCardboxDetected result -=-----', result)
      return !!result;
    } catch (e) {
      var message = 'Card detection error : ' + e;
      if (e.toString().includes('memory')) {
        void 0;
      } else {
        void 0;
        throw e;
      }
    }
  });
  return _isCardboxDetected3.apply(this, arguments);
}
function _startRecognition2(_x8, _x9, _x10) {
  return _startRecognition3.apply(this, arguments);
}
function _startRecognition3() {
  _startRecognition3 = _asyncToGenerator(function* (address, ocrType, ssaMode) {
    try {
      if (address == null) {
        return '';
      } else if (address === -1) {
        return 'checkValidation Fail';
      }
      var ocrResult = null;
      if (!_classPrivateFieldGet(this, _ocrTypeList).includes(ocrType)) throw new Error('Unsupported OCR type');
      var [, resultBuffer] = _classPrivateMethodGet(this, _getBuffer, _getBuffer2).call(this);
      switch (ocrType) {
        case 'idcard':
        case 'driver':
        case 'idcard-ssa':
        case 'driver-ssa':
          ocrResult = _classPrivateFieldGet(this, _OCREngine).scanIDCard(address, resultBuffer);
          break;
        case 'passport':
        case 'foreign-passport':
        case 'passport-ssa':
        case 'foreign-passport-ssa':
          ocrResult = _classPrivateFieldGet(this, _OCREngine).scanPassport(address, resultBuffer);
          break;
        case 'alien':
        case 'alien-ssa':
          ocrResult = _classPrivateFieldGet(this, _OCREngine).scanAlien(address, resultBuffer);
          break;
        case 'credit':
        case 'credit-ssa':
          ocrResult = _classPrivateFieldGet(this, _OCREngine).scanCredit(address, resultBuffer);
          break;
        default:
          throw new Error('Scanner does not exists');
      }
      if (ocrResult === null || ocrResult === '' || ocrResult === 'false' || ocrResult[0] === 'false') {
        return [false, null, null, null];
      } else {
        var cropMode = false;
        if (ocrType.indexOf("credit") > -1) {
          cropMode = true;
        }
        var originImage = yield _classPrivateMethodGet(this, _getImageBase, _getImageBase2).call(this, address, false, cropMode);
        var maskImage = yield _classPrivateMethodGet(this, _getImageBase, _getImageBase2).call(this, address, true, cropMode);
        maskImage = maskImage === 'data:' ? null : maskImage;
        if (ssaMode) {
          _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA, false, maskImage);
        } else {
          _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.OCR_RECOGNIZED);
        }
        return [ocrResult, originImage, maskImage];
      }
    } catch (e) {
      void 0;
      throw e;
    }
  });
  return _startRecognition3.apply(this, arguments);
}
function _startTruth2(ocrType, address) {
  return new Promise((resolve, reject) => {
    var [, resultBuffer] = _classPrivateMethodGet(this, _getBuffer, _getBuffer2).call(this);
    if (ocrType.indexOf("-ssa") > -1) {
      // TODO: worker를 사용하여 메인(UI 랜더링) 스레드가 멈추지 않도록 처리 필요 (현재 loading UI 띄우면 애니메이션 멈춤)
      // TODO: setTimeout 으로 나누더라도 효과 없음 setTimeout 지우고, worker로 변경 필요
      setTimeout(() => {
        resolve(_classPrivateFieldGet(this, _OCREngine).scanTruth(address, resultBuffer));
      }, 0);
    } else {
      reject(new Error('SSA Mode is true. but, ocrType is invalid : ' + ocrType));
    }
  });
}
function _setCameraPermissionTimeoutTimer2() {
  var _this4 = this;
  _classPrivateMethodGet(this, _clearCameraPermissionTimeoutTimer, _clearCameraPermissionTimeoutTimer2).call(this);
  _classPrivateFieldSet(this, _cameraPermissionTimeoutTimer, setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
    // 1초 delay 후 실행
    yield _classPrivateMethodGet(_this4, _proceedCameraPermission, _proceedCameraPermission2).call(_this4);
  }), 1000));
}
function _proceedCameraPermission2() {
  return _proceedCameraPermission3.apply(this, arguments);
}
function _proceedCameraPermission3() {
  _proceedCameraPermission3 = _asyncToGenerator(function* () {
    try {
      _classPrivateMethodGet(this, _closeCamera, _closeCamera2).call(this);
      var isPassport = _classPrivateFieldGet(this, _ocrType).includes('passport');
      yield _classPrivateMethodGet(this, _setupVideo, _setupVideo2).call(this, isPassport);
      var {
        video
      } = detector.getOCRElements();
      if (video) {
        // const [track] = this.#stream.getVideoTracks();
        // const capability = track.getCapabilities();
        // console.debug('CardScan#initialize capability', capability);
        if ('srcObject' in video) {
          video.srcObject = _classPrivateFieldGet(this, _stream);
        } else {
          // Avoid using this in new browsers, as it is going away.
          video.src = window.URL.createObjectURL(_classPrivateFieldGet(this, _stream));
        }
        video.addEventListener('loadedmetadata', () => {
          // console.debug('proceedCameraPermission - onloadedmetadata');
          video.play();
        });
        video.addEventListener('canplay', () => {
          void 0;

          // video element style 설정
          _classPrivateFieldSet(this, _videoOrientation, video.videoWidth / video.videoHeight < 1 ? 'portrait' : 'landscape');
          void 0;
          void 0;
          void 0;
          _classPrivateFieldSet(this, _camSetComplete, true);
          _classPrivateMethodGet(this, _adjustStyle, _adjustStyle2).call(this);
        });
        _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.READY);
        video.webkitExitFullscreen();
      } else {
        _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.NOT_READY);
        _classPrivateMethodGet(this, _closeCamera, _closeCamera2).call(this);
      }
    } catch (e) {
      void 0;
      if (e.name === 'NotAllowedError') {
        var errorMessage = 'Camera Access Permission is not allowed';
        void 0;
        void 0;
        _classPrivateMethodGet(this, _onFailureProcess, _onFailureProcess2).call(this, "E403", e, errorMessage);
      } else if (e.name === 'NotReadableError') {
        _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.NOT_READY);
        this.stopStream();
        _classPrivateMethodGet(this, _setCameraPermissionTimeoutTimer, _setCameraPermissionTimeoutTimer2).call(this); // 재귀 호출
      }
    }
  });
  return _proceedCameraPermission3.apply(this, arguments);
}
function _setStyle2(el, style) {
  Object.assign(el.style, style);
}
function _changeStage2(val) {
  var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var recognizedImage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (_classPrivateFieldGet(this, _previousInProgressStep) === val && forceUpdate === false) {
    return;
  }
  _classPrivateFieldSet(this, _previousInProgressStep, val);
  _classPrivateFieldSet(this, _inProgressStep, val);
  var {
    guideBox
  } = detector.getOCRElements();
  var style = {
    borderWidth: _classPrivateFieldGet(this, _options).frameBorderStyle.width + 'px',
    borderStyle: _classPrivateFieldGet(this, _options).frameBorderStyle.style,
    borderRadius: _classPrivateFieldGet(this, _options).frameBorderStyle.radius + 'px',
    borderColor: _classPrivateFieldGet(this, _options).frameBorderStyle[val]
  };
  if (guideBox) {
    _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, guideBox, style);
  }
  if (_classPrivateFieldGet(this, _onInProgressChange)) {
    if (_classPrivateFieldGet(this, _options).useTopUI || _classPrivateFieldGet(this, _options).useTopUITextMsg) {
      _classPrivateFieldGet(this, _onInProgressChange).call(this, _classPrivateFieldGet(this, _ocrType), _classPrivateFieldGet(this, _inProgressStep), _classPrivateFieldGet(this, _topUI), 'top', _classPrivateFieldGet(this, _options).useTopUITextMsg, _classPrivateFieldGet(this, _options).usePreviewUI);
    }
    if (_classPrivateFieldGet(this, _options).useMiddleUI || _classPrivateFieldGet(this, _options).useMiddleUITextMsg) {
      _classPrivateFieldGet(this, _onInProgressChange).call(this, _classPrivateFieldGet(this, _ocrType), _classPrivateFieldGet(this, _inProgressStep), _classPrivateFieldGet(this, _middleUI), 'middle', _classPrivateFieldGet(this, _options).useMiddleUITextMsg, _classPrivateFieldGet(this, _options).usePreviewUI);
    }
    if (_classPrivateFieldGet(this, _options).useBottomUI || _classPrivateFieldGet(this, _options).useBottomUITextMsg) {
      _classPrivateFieldGet(this, _onInProgressChange).call(this, _classPrivateFieldGet(this, _ocrType), _classPrivateFieldGet(this, _inProgressStep), _classPrivateFieldGet(this, _bottomUI), 'bottom', _classPrivateFieldGet(this, _options).useBottomUITextMsg, _classPrivateFieldGet(this, _options).usePreviewUI);
    }
  }
  if (val === this.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA) {
    var {
      video
    } = detector.getOCRElements();
    _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, video, {
      display: 'none'
    });
    if (_classPrivateFieldGet(this, _options).usePreviewUI) {
      _classPrivateMethodGet(this, _updatePreviewUI, _updatePreviewUI2).call(this, recognizedImage);
    }
  }
  if (val === this.IN_PROGRESS.OCR_SUCCESS_WITH_SSA) {
    if (_classPrivateFieldGet(this, _options).usePreviewUI) {
      _classPrivateMethodGet(this, _hidePreviewUI, _hidePreviewUI2).call(this);
    }
  }
}
function _updatePreviewUI2(recognizedImage) {
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
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, previewImage, imgStyle);
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, previewUI, {
    display: 'block'
  });
}
function _hidePreviewUI2() {
  var {
    video,
    previewUI,
    previewImage
  } = detector.getOCRElements();
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, video, {
    display: 'block'
  });
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, previewUI, {
    display: 'none'
  });
  previewImage.src = "";
}
function _getInputDevices2(_x11, _x12) {
  return _getInputDevices3.apply(this, arguments);
}
function _getInputDevices3() {
  _getInputDevices3 = _asyncToGenerator(function* (kind, label) {
    // throw error if navigator.mediaDevices is not supported
    if (!navigator.mediaDevices) {
      throw new Error('navigator.mediaDevices is not supported');
    }
    var devices = yield navigator.mediaDevices.enumerateDevices();
    var videoDevices = devices.filter(device => {
      if (device.kind === "".concat(kind, "input") && device.getCapabilities) {
        var _cap$facingMode;
        var cap = device.getCapabilities();
        if (cap !== null && cap !== void 0 && (_cap$facingMode = cap.facingMode) !== null && _cap$facingMode !== void 0 && _cap$facingMode.includes(_classPrivateFieldGet(this, _facingModeConstraint))) {
          return true;
        }
      }
      return false;
    });
    return videoDevices.length <= 1 ? videoDevices : videoDevices.filter(device => label ? device.label.includes(label) : true);
  });
  return _getInputDevices3.apply(this, arguments);
}
function _setupDomElements2() {
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
  if (topUI && !_classPrivateFieldGet(this, _options).useTopUI) topUI.innerHTML = '';
  if (middleUI && !_classPrivateFieldGet(this, _options).useMiddleUI) middleUI.innerHTML = '';
  if (bottomUI && !_classPrivateFieldGet(this, _options).useBottomUI) bottomUI.innerHTML = '';
  if (previewUIWrap) previewUIWrap.remove();
  // preview UI를 미사용일 경우 안의 내용을 삭제
  if (previewUI && !_classPrivateFieldGet(this, _options).usePreviewUI) previewUI.innerHTML = '';
  var rotationDegree = _classPrivateMethodGet(this, _getRotationDegree, _getRotationDegree2).call(this);
  _classPrivateFieldSet(this, _isRotated90or, [90, 270].includes(rotationDegree));
  var ocrStyle = {
    width: '100%',
    height: '100%'
  };
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, ocr, ocrStyle);
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
    _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, videoWrap, wrapStyle);
  }
  ocr.appendChild(videoWrap);
  maskBoxWrap = document.createElement('svg');
  maskBoxWrap.setAttribute('data-useb-ocr', 'maskBoxWrap');
  maskBoxWrap.setAttribute('fill', 'none');
  maskBoxWrap.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, maskBoxWrap, wrapStyle);
  var mask_frame = _classPrivateFieldGet(this, _options).frameBorderStyle.mask_frame + 'ff';
  if (!!_classPrivateFieldGet(this, _options).showClipFrame) {
    mask_frame = _classPrivateFieldGet(this, _options).frameBorderStyle.clip_frame + '55';
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
  if (_classPrivateFieldGet(this, _isRotated90or)) {
    if (_classPrivateMethodGet(this, _getMirrorMode, _getMirrorMode2).call(this)) {
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
    if (_classPrivateMethodGet(this, _getMirrorMode, _getMirrorMode2).call(this)) {
      videoStyle = _objectSpread(_objectSpread({}, videoStyle), {}, {
        '-webkit-transform': mirrorCss,
        '-moz-transform': mirrorCss,
        '-o-transform': mirrorCss,
        '-ms-transform': mirrorCss,
        'transform': mirrorCss
      });
    }
  }
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, video, videoStyle);
  videoWrap.appendChild(video);
  guideBoxWrap = document.createElement('div');
  guideBoxWrap.setAttribute('data-useb-ocr', 'guideBoxWrap');
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, guideBoxWrap, wrapStyle);
  ocr.appendChild(guideBoxWrap);
  guideBox = document.createElement('svg');
  guideBox.setAttribute('data-useb-ocr', 'guideBox');
  guideBox.setAttribute('fill', 'none');
  guideBox.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, guideBox, {
    width: '100%',
    margin: '0 auto',
    position: 'absolute'
  });
  guideBoxWrap.appendChild(guideBox);
  canvas = document.createElement('canvas');
  canvas.setAttribute('data-useb-ocr', 'canvas');
  var canvasStyle = {
    display: _classPrivateFieldGet(this, _options).showCanvasPreview ? _classPrivateFieldGet(this, _isRotated90or) ? 'none' : 'display' : 'none',
    width: '25%',
    position: 'absolute',
    left: '0px',
    top: '30px',
    border: 'green 2px solid'
  };
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, canvas, canvasStyle);
  ocr.appendChild(canvas);
  rotationCanvas = document.createElement('canvas');
  rotationCanvas.setAttribute('data-useb-ocr', 'rotationCanvas');
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, rotationCanvas, {
    display: _classPrivateFieldGet(this, _options).showCanvasPreview ? _classPrivateFieldGet(this, _isRotated90or) ? 'display' : 'none' : 'none',
    height: '25%',
    position: 'absolute',
    right: '0px',
    top: '30px',
    border: 'blue 2px solid'
  });
  ocr.appendChild(rotationCanvas);
  preventToFreezeVideo = document.createElement('div');
  preventToFreezeVideo.setAttribute('data-useb-ocr', 'preventToFreezeVideo');
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, preventToFreezeVideo, {
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
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, customUIWrap, customUIWrapStyle);
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
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, previewUIWrap, previewUIWrapStyle);
  ocr.appendChild(previewUIWrap);
  if (!previewUI) {
    previewUI = document.createElement('div');
    previewUI.setAttribute('data-useb-ocr', 'previewUI');
  }
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, previewUI, {
    display: 'none'
  });
  previewUIWrap.appendChild(previewUI);
  if (!previewImage) {
    previewImage = document.createElement('img');
    previewImage.setAttribute('data-useb-ocr', 'previewImage');
    previewUI.appendChild(previewImage);
  }
  _classPrivateFieldSet(this, _ocr, ocr);
  _classPrivateFieldSet(this, _canvas, canvas);
  _classPrivateFieldSet(this, _rotationCanvas, rotationCanvas);
  _classPrivateFieldSet(this, _video, video);
  _classPrivateFieldSet(this, _videoWrap, videoWrap);
  _classPrivateFieldSet(this, _guideBox, guideBox);
  _classPrivateFieldSet(this, _guideBoxWrap, guideBoxWrap);
  _classPrivateFieldSet(this, _maskBoxWrap, maskBoxWrap);
  _classPrivateFieldSet(this, _preventToFreezeVideo, preventToFreezeVideo);
  _classPrivateFieldSet(this, _customUIWrap, customUIWrap);
  _classPrivateFieldSet(this, _topUI, topUI);
  _classPrivateFieldSet(this, _middleUI, middleUI);
  _classPrivateFieldSet(this, _bottomUI, bottomUI);
  _classPrivateFieldSet(this, _previewUIWrap, previewUIWrap);
  _classPrivateFieldSet(this, _previewUI, previewUI);
  _classPrivateFieldSet(this, _previewImage, previewImage);
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
function _setupVideo2(_x13) {
  return _setupVideo3.apply(this, arguments);
}
function _setupVideo3() {
  _setupVideo3 = _asyncToGenerator(function* (isPassport) {
    // wasm 인식성능 최적화된 해상도
    _classPrivateFieldSet(this, _resolutionWidth, 1080);
    _classPrivateFieldSet(this, _resolutionHeight, 720);
    _classPrivateFieldSet(this, _camSetComplete, false);
    var {
      video,
      canvas,
      rotationCanvas
    } = _classPrivateMethodGet(this, _setupDomElements, _setupDomElements2).call(this);
    var videoDevices = yield _classPrivateMethodGet(this, _getInputDevices, _getInputDevices2).call(this, 'video', _classPrivateFieldGet(this, _options).deviceLabel);
    // console.log('videoDevices :: ', videoDevices)
    var deviceIdList = videoDevices.map(device => device.deviceId);
    this.checkUIOrientation();
    var constraintWidth, constraintHeight;
    if (_classPrivateFieldGet(this, _uiOrientation) === 'portrait') {
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
          ideal: _classPrivateFieldGet(this, _facingModeConstraint)
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

      [canvas.width, canvas.height] = [_classPrivateFieldGet(this, _resolutionWidth), _classPrivateFieldGet(this, _resolutionHeight)];
      if (_classPrivateFieldGet(this, _isRotated90or)) {
        [rotationCanvas.width, rotationCanvas.height] = [_classPrivateFieldGet(this, _resolutionHeight), _classPrivateFieldGet(this, _resolutionWidth)];
      }
      video.srcObject = stream;
      _classPrivateFieldSet(this, _stream, stream);
    } catch (e) {
      void 0;
      throw e;
    }
  });
  return _setupVideo3.apply(this, arguments);
}
function _adjustStyle2() {
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
  var calcVideoOrientation = _classPrivateFieldGet(this, _videoOrientation);
  var borderWidth = _classPrivateFieldGet(this, _options).frameBorderStyle.width;
  var borderRadius = _classPrivateFieldGet(this, _options).frameBorderStyle.radius;
  if (_classPrivateFieldGet(this, _isRotated90or)) {
    [calcVideoWidth, calcVideoHeight] = [calcVideoHeight, calcVideoWidth];
    [calcVideoClientWidth, calcVideoClientHeight] = [calcVideoClientHeight, calcVideoClientWidth];
    calcVideoOrientation = _classPrivateFieldGet(this, _videoOrientation) === 'portrait' ? 'landscape' : 'portrait';
  }
  var newVideoWidth = calcVideoClientWidth;
  var newVideoHeight = calcVideoClientHeight;
  var guideBoxRatioByWidth = _classPrivateFieldGet(this, _guideBoxRatioByWidth);
  var videoRatioByHeight = _classPrivateFieldGet(this, _videoRatioByHeight);
  if (_classPrivateFieldGet(this, _uiOrientation) === 'portrait') {
    // 세로 UI
    // video 가로 기준 100% 유지 (변경없음)
    if (calcVideoOrientation === _classPrivateFieldGet(this, _uiOrientation)) {
      // 카메라도 세로
      // 세로 UI && 세로 비디오
      // 가로 기준으로 가이드박스 계산
      guideBoxWidth = calcOcrClientWidth * guideBoxRatioByWidth;
      guideBoxHeight = guideBoxWidth * scannerFrameRatio;

      // 가이드 박스 가로 기준으로 비디오 확대
      newVideoWidth = guideBoxWidth;
      newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
      if (_classPrivateFieldGet(this, _isRotated90or)) {
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
    if (calcVideoOrientation === _classPrivateFieldGet(this, _uiOrientation)) {
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
      if (_classPrivateFieldGet(this, _isRotated90or)) {
        [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
      }
    }
  }
  guideBoxWidth += borderWidth * 2;
  guideBoxHeight += borderWidth * 2;
  _classPrivateFieldSet(this, _cropImageSizeWidth, Math.min(guideBoxWidth, newVideoWidth));
  _classPrivateFieldSet(this, _cropImageSizeHeight, Math.min(guideBoxHeight, newVideoHeight));
  var reducedGuideBoxWidth = guideBoxWidth * _classPrivateFieldGet(this, _guideBoxReduceRatio);
  var reducedGuideBoxHeight = guideBoxHeight * _classPrivateFieldGet(this, _guideBoxReduceRatio);
  if (topUI) {
    _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, topUI, {
      'padding-bottom': '10px',
      'height': (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
      'display': 'flex',
      'flex-direction': 'column-reverse'
    });
  }
  if (middleUI) {
    _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, middleUI, {
      width: reducedGuideBoxWidth - borderWidth * 2 + 'px',
      height: reducedGuideBoxHeight - borderWidth * 2 + 'px',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'padding': '10px'
    });
  }
  if (bottomUI) {
    _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, bottomUI, {
      'padding-top': '10px',
      'height': (calcOcrClientHeight - guideBoxHeight) / 2 + 'px',
      'display': 'flex',
      'flex-direction': 'column'
    });
  }
  if (newVideoWidth !== calcVideoClientWidth) {
    _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, video, {
      width: newVideoWidth + 'px'
    });
  }
  if (newVideoHeight !== calcVideoClientHeight) {
    _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, video, {
      height: newVideoHeight + 'px'
    });
  }
  var videoInnerGap = 2; // 미세하게 maskBoxInner보다 guideBox가 작은것 보정
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, guideBox, {
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
  _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, _classPrivateFieldGet(this, _inProgressStep), true);
  void 0;
}
function _closeCamera2() {
  _classPrivateMethodGet(this, _clearCameraPermissionTimeoutTimer, _clearCameraPermissionTimeoutTimer2).call(this);
  this.stopScan();
  this.stopStream();
}
function _loadResources2() {
  return _loadResources3.apply(this, arguments);
}
function _loadResources3() {
  _loadResources3 = _asyncToGenerator(function* () {
    void 0;
    if (_classPrivateFieldGet(this, _resourcesLoaded)) {
      void 0;
      return;
    }
    var url = new URL('quram.js', _classPrivateFieldGet(this, _options).resourceBaseUrl);
    var src = yield fetch(url.href).then(res => res.text()).then(text => {
      var regex = /(.*) = Module.cwrap/gm;
      var source = text.replace(regex, 'Module.$1 = Module.cwrap');

      // data(model)
      source = source.replace(/^\(function\(\) \{/m, 'var createModelData = async function() {\n' + ' return new Promise(async function (resolve, reject) {\n');
      source = source.replace('   console.error("package error:", error);', '   reject();\n' + '   console.error("package error:", error);');
      source = source.replace('  }, handleError)', '  resolve();\n' + '  }, handleError)');
      source = source.replace(/^\}\)\(\);/m, '\n })\n' + '};');

      // wasm
      source = source.replace('quram.wasm', new URL('quram.wasm', _classPrivateFieldGet(this, _options).resourceBaseUrl).href);
      source = source.replace(/REMOTE_PACKAGE_BASE = ['"]quram\.data["']/gm, "REMOTE_PACKAGE_BASE = \"".concat(new URL('quram.data', _classPrivateFieldGet(this, _options).resourceBaseUrl).href, "\""));
      source = source.replace('function createWasm', 'async function createWasm');
      source = source.replace('instantiateAsync();', 'await instantiateAsync();');

      // wasm and data(model) file 병렬로 fetch 하기 위해
      source = source.replace('var asm = createWasm();', 'console.log("create wasm and data - start")\n' + 'await (async function() {\n' + '  return new Promise(function(resolve) {\n' + '    var isCreatedWasm = false;\n' + '    var isCreatedData = false;\n' + '    createWasm().then(() => {\n' + '      isCreatedWasm = true;\n' + '      if (isCreatedData) { resolve(); }\n' + '    });\n' + '    createModelData().then(() => {\n' + '      isCreatedData = true;\n' + '      if (isCreatedWasm) { resolve(); }\n' + '    })\n' + '  });\n' + '})();\n' + 'console.log("create wasm and data - end")');
      return source;
    });
    src = "\n    (async function() {\n      ".concat(src, "\n      Module.lengthBytesUTF8 = lengthBytesUTF8\n      Module.stringToUTF8 = stringToUTF8\n      return Module\n    })()\n        ");
    _classPrivateFieldSet(this, _OCREngine, yield eval(src));
    _classPrivateFieldGet(this, _OCREngine).onRuntimeInitialized = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* (_) {
        void 0;
      });
      return function (_x14) {
        return _ref6.apply(this, arguments);
      };
    }();
    yield _classPrivateFieldGet(this, _OCREngine).onRuntimeInitialized();
    _classPrivateFieldSet(this, _resourcesLoaded, true);
    void 0;
  });
  return _loadResources3.apply(this, arguments);
}
function _startScanImpl2() {
  var _this5 = this;
  return new Promise((resolve, reject) => {
    _classPrivateFieldSet(this, _intervalLock, false);
    var detected = false;
    var address = 0;
    _classPrivateFieldSet(this, _pageEnd, false);
    _classPrivateFieldSet(this, _intervalTimer, setInterval( /*#__PURE__*/_asyncToGenerator(function* () {
      try {
        if (_classPrivateFieldGet(_this5, _intervalLock) === true) {
          return;
        } else {
          _classPrivateFieldSet(_this5, _intervalLock, true);
        }

        // this.#changeStage(IN_PROGRESS.READY);
        if (!_classPrivateFieldGet(_this5, _OCREngine)['asm']) return;

        // TODO : 설정할수 있게 변경 default 값도 제공
        var [resolution_w, resolution_h] = [_classPrivateFieldGet(_this5, _resolutionWidth), _classPrivateFieldGet(_this5, _resolutionHeight)];
        var {
          video
        } = detector.getOCRElements();
        if (resolution_w === 0 || resolution_h === 0) return;
        if (detected) {
          yield _classPrivateMethodGet(_this5, _sleep, _sleep2).call(_this5, 100);
          return;
        }
        // console.log('address before ---------', address);
        if (address === 0 && !_classPrivateFieldGet(_this5, _pageEnd) && _classPrivateMethodGet(_this5, _isVideoResolutionCompatible, _isVideoResolutionCompatible2).call(_this5, video)) {
          [address, _classPrivateFieldDestructureSet(_this5, _destroyScannerCallback).value] = _classPrivateMethodGet(_this5, _getScannerAddress, _getScannerAddress2).call(_this5, _classPrivateFieldGet(_this5, _ocrType));
        }
        if (!address || _classPrivateFieldGet(_this5, _pageEnd)) {
          yield _classPrivateMethodGet(_this5, _sleep, _sleep2).call(_this5, 100);
          return;
        }
        // console.log('address after ---------', address);

        // card not detected
        if (!(yield _classPrivateMethodGet(_this5, _isCardboxDetected, _isCardboxDetected2).call(_this5, address, 0))) {
          if (_classPrivateFieldGet(_this5, _inProgressStep) !== _this5.IN_PROGRESS.READY) {
            _classPrivateMethodGet(_this5, _changeStage, _changeStage2).call(_this5, _this5.IN_PROGRESS.CARD_DETECT_FAILED);
          }
          return;
        } else {
          if (_classPrivateFieldGet(_this5, _inProgressStep) !== _this5.IN_PROGRESS.OCR_RECOGNIZED) {
            _classPrivateMethodGet(_this5, _changeStage, _changeStage2).call(_this5, _this5.IN_PROGRESS.CARD_DETECT_SUCCESS);
          }
        }
        if (_classPrivateFieldGet(_this5, _inProgressStep) === _this5.IN_PROGRESS.CARD_DETECT_SUCCESS) {
          // fallback case 인듯
          // success case
          // if (result !== 'false') {
          //   const PrevImage = getPrevImage();
          //   Module.HEAP8.set(imgData.data, PrevImage);
          // }

          if (_classPrivateFieldGet(_this5, _ssaRetryCount) === 0) {
            [_classPrivateFieldDestructureSet(_this5, _ocrResult).value, _classPrivateFieldDestructureSet(_this5, _imgDataUrl).value, _classPrivateFieldDestructureSet(_this5, _maskImage).value] = yield _classPrivateMethodGet(_this5, _startRecognition, _startRecognition2).call(_this5, address, _classPrivateFieldGet(_this5, _ocrType), _classPrivateFieldGet(_this5, _ssaMode));
          } else {
            // ssaRetry 인 경우 OCR하지 않음 for 성능(속도)
            if (_classPrivateFieldGet(_this5, _ocrResult) === null || _classPrivateFieldGet(_this5, _imgDataUrl) === null || _classPrivateFieldGet(_this5, _maskImage) === null) {
              throw new Error('ssaRetryCount is not 0, but ocrResult is null');
            }
          }
          var ssaResult = null;

          // success case
          if (_classPrivateFieldGet(_this5, _ocrResult) !== false) {
            _classPrivateMethodGet(_this5, _setStyle, _setStyle2).call(_this5, video, {
              display: 'none'
            }); // OCR 완료 시점에 camera preview off

            if (_classPrivateFieldGet(_this5, _ssaMode)) {
              void 0;
              ssaResult = yield _classPrivateMethodGet(_this5, _startTruth, _startTruth2).call(_this5, _classPrivateFieldGet(_this5, _ocrType), address);
              if (ssaResult === null) {
                void 0;
                return;
              }
              if (ssaResult === "FAKE") {
                if (_classPrivateFieldGet(_this5, _ssaRetryCount) < _classPrivateFieldGet(_this5, _options).ssaMaxRetryCount) {
                  var _this$ssaRetryCount, _this$ssaRetryCount2;
                  void 0;
                  _classPrivateFieldSet(_this5, _ssaRetryCount, (_this$ssaRetryCount = _classPrivateFieldGet(_this5, _ssaRetryCount), _this$ssaRetryCount2 = _this$ssaRetryCount++, _this$ssaRetryCount)), _this$ssaRetryCount2;
                  return;
                } else {
                  void 0;
                }
              }
            }
            void 0;
            _classPrivateMethodGet(_this5, _onSuccessProcess, _onSuccessProcess2).call(_this5, {
              ocr_type: _classPrivateFieldGet(_this5, _ocrType),
              ocr_data: parser.parseOcrResult(_classPrivateFieldGet(_this5, _ocrType), _classPrivateFieldGet(_this5, _ssaMode), _classPrivateFieldGet(_this5, _ocrResult), ssaResult, _classPrivateFieldGet(_this5, _ssaRetryCount)),
              ocr_origin_image: _classPrivateFieldGet(_this5, _imgDataUrl),
              ocr_masking_image: _classPrivateFieldGet(_this5, _maskImage),
              ssa_mode: _classPrivateFieldGet(_this5, _ssaMode)
            });
            _classPrivateMethodGet(_this5, _clearIntervalTimers, _clearIntervalTimers2).call(_this5); // for performance
            _classPrivateMethodGet(_this5, _closeCamera, _closeCamera2).call(_this5);
            detected = true;
            resolve();
          }
        }
      } catch (e) {
        var errorMessage = 'Card detection error';
        if (e.message) {
          errorMessage += ": " + e.message;
        }
        void 0;
        if (e.toString().includes('memory')) {
          yield _classPrivateMethodGet(_this5, _recoveryScan, _recoveryScan2).call(_this5);
        } else {
          _classPrivateMethodGet(_this5, _onFailureProcess, _onFailureProcess2).call(_this5, "WA001", e, errorMessage);
          _classPrivateMethodGet(_this5, _clearIntervalTimers, _clearIntervalTimers2).call(_this5); // for performance
          _classPrivateMethodGet(_this5, _closeCamera, _closeCamera2).call(_this5);
          detected = true;
          reject();
        }
      } finally {
        _classPrivateFieldSet(_this5, _intervalLock, false);
      }
    }), 1));
  });
}
function _onSuccessProcess2(review_result) {
  // 인식 성공 스캔 루프 종료
  if (review_result.ssa_mode) {
    _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.OCR_SUCCESS_WITH_SSA);
  } else {
    _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.OCR_SUCCESS);
  }
  var result = {
    api_response: {
      "result_code": "N100",
      "result_message": "OK."
    },
    result: "success",
    review_result: review_result
  };
  if (_classPrivateFieldGet(this, _onSuccess)) {
    _classPrivateFieldGet(this, _onSuccess).call(this, result);
    _classPrivateFieldSet(this, _onSuccess, null);
  } else {
    void 0;
  }
}
function _onFailureProcess2(resultCode, e, errorMessage) {
  _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.OCR_FAILED);
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
      ocr_type: _classPrivateFieldGet(this, _ocrType),
      error_detail: errorDetail
    }
  };
  if (_classPrivateFieldGet(this, _onFailure)) {
    _classPrivateFieldGet(this, _onFailure).call(this, result);
    _classPrivateFieldSet(this, _onFailure, null);
  } else {
    void 0;
  }
}
function _startScan2() {
  return _startScan3.apply(this, arguments);
}
function _startScan3() {
  _startScan3 = _asyncToGenerator(function* () {
    this.cleanup();
    yield _classPrivateMethodGet(this, _proceedCameraPermission, _proceedCameraPermission2).call(this);
    yield _classPrivateMethodGet(this, _startScanImpl, _startScanImpl2).call(this);
    void 0;
  });
  return _startScan3.apply(this, arguments);
}
function _recoveryScan2() {
  return _recoveryScan3.apply(this, arguments);
}
function _recoveryScan3() {
  _recoveryScan3 = _asyncToGenerator(function* () {
    void 0;
    _classPrivateFieldSet(this, _resourcesLoaded, false);
    this.stopScan();
    yield _classPrivateMethodGet(this, _startScan, _startScan2).call(this);
  });
  return _recoveryScan3.apply(this, arguments);
}
function _clearCameraPermissionTimeoutTimer2() {
  if (_classPrivateFieldGet(this, _cameraPermissionTimeoutTimer)) {
    clearTimeout(_classPrivateFieldGet(this, _cameraPermissionTimeoutTimer));
    _classPrivateFieldSet(this, _cameraPermissionTimeoutTimer, null);
  }
}
function _clearIntervalTimers2() {
  if (_classPrivateFieldGet(this, _intervalTimer)) {
    clearInterval(_classPrivateFieldGet(this, _intervalTimer));
    void 0;
    _classPrivateFieldSet(this, _intervalTimer, null);
  }
}
export default UseBOCR;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJpbnN0YW5jZSIsIl9PQ1JFbmdpbmUiLCJXZWFrTWFwIiwiX2luaXRpYWxpemVkIiwiX3ByZWxvYWRlZCIsIl9wcmVsb2FkaW5nU3RhdHVzIiwiX2xpY2Vuc2UiLCJfb2NyVHlwZSIsIl9zc2FNb2RlIiwiX3NzYVJldHJ5Q291bnQiLCJfb25TdWNjZXNzIiwiX29uRmFpbHVyZSIsIl9vbkluUHJvZ3Jlc3NDaGFuZ2UiLCJfb2NyVHlwZUxpc3QiLCJfb2NyVHlwZVN0cmluZyIsIl9wYWdlRW5kIiwiX29jciIsIl9jYW52YXMiLCJfcm90YXRpb25DYW52YXMiLCJfdmlkZW8iLCJfdmlkZW9XcmFwIiwiX2d1aWRlQm94IiwiX2d1aWRlQm94V3JhcCIsIl9tYXNrQm94V3JhcCIsIl9wcmV2ZW50VG9GcmVlemVWaWRlbyIsIl9jdXN0b21VSVdyYXAiLCJfdG9wVUkiLCJfbWlkZGxlVUkiLCJfYm90dG9tVUkiLCJfcHJldmlld1VJV3JhcCIsIl9wcmV2aWV3VUkiLCJfcHJldmlld0ltYWdlIiwiX0J1ZmZlciIsIl9yZXN1bHRCdWZmZXIiLCJfUHJldkltYWdlIiwiX3N0cmluZ09uV2FzbUhlYXAiLCJfY2FtU2V0Q29tcGxldGUiLCJfcmVzb2x1dGlvbldpZHRoIiwiX3Jlc29sdXRpb25IZWlnaHQiLCJfdmlkZW9XaWR0aCIsIl92aWRlb0hlaWdodCIsIl9yZXNvdXJjZXNMb2FkZWQiLCJfaW50ZXJ2YWxUaW1lciIsIl9jYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX3JlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwiX3N0cmVhbSIsIl9kZXN0cm95U2Nhbm5lckNhbGxiYWNrIiwiX2ZhY2luZ01vZGVDb25zdHJhaW50IiwiX3VpT3JpZW50YXRpb24iLCJfcHJldlVpT3JpZW50YXRpb24iLCJfdmlkZW9PcmllbnRhdGlvbiIsIl90aHJvdHRsaW5nUmVzaXplVGltZXIiLCJfdGhyb3R0bGluZ1Jlc2l6ZURlbGF5IiwiX21heFJldHJ5Q291bnRHZXRBZGRyZXNzIiwiX3JldHJ5Q291bnRHZXRBZGRyZXNzIiwiX2RldmljZUluZm8iLCJfaXNSb3RhdGVkOTBvciIsIl9pblByb2dyZXNzU3RlcCIsIl9wcmV2aW91c0luUHJvZ3Jlc3NTdGVwIiwiX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9pbnRlcnZhbExvY2siLCJfZ3VpZGVCb3hSYXRpb0J5V2lkdGgiLCJfdmlkZW9SYXRpb0J5SGVpZ2h0IiwiX2d1aWRlQm94UmVkdWNlUmF0aW8iLCJfY3JvcEltYWdlU2l6ZVdpZHRoIiwiX2Nyb3BJbWFnZVNpemVIZWlnaHQiLCJfb2NyUmVzdWx0IiwiX2ltZ0RhdGFVcmwiLCJfbWFza0ltYWdlIiwiX29wdGlvbnMiLCJfd2FpdFByZWxvYWRlZCIsIldlYWtTZXQiLCJfd2luZG93RXZlbnRCaW5kIiwiX3NsZWVwIiwiX2Jsb2JUb0Jhc2UiLCJfZ2V0U3RyaW5nT25XYXNtSGVhcCIsIl9zZXRWaWRlb1Jlc29sdXRpb24iLCJfZ2V0U2Nhbm5lckFkZHJlc3MiLCJfZ2V0QnVmZmVyIiwiX2dldEltYWdlQmFzZSIsIl9kZXN0cm95QnVmZmVyIiwiX2Rlc3Ryb3lQcmV2SW1hZ2UiLCJfZGVzdHJveVN0cmluZ09uV2FzbUhlYXAiLCJfZGVzdHJveVNjYW5uZXJBZGRyZXNzIiwiX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSIsIl9nZXRSb3RhdGlvbkRlZ3JlZSIsIl9nZXRNaXJyb3JNb2RlIiwiX2Nyb3BJbWFnZUZyb21WaWRlbyIsIl9yb3RhdGUiLCJfaXNDYXJkYm94RGV0ZWN0ZWQiLCJfc3RhcnRSZWNvZ25pdGlvbiIsIl9zdGFydFRydXRoIiwiX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfcHJvY2VlZENhbWVyYVBlcm1pc3Npb24iLCJfc2V0U3R5bGUiLCJfY2hhbmdlU3RhZ2UiLCJfdXBkYXRlUHJldmlld1VJIiwiX2hpZGVQcmV2aWV3VUkiLCJfZ2V0SW5wdXREZXZpY2VzIiwiX3NldHVwRG9tRWxlbWVudHMiLCJfc2V0dXBWaWRlbyIsIl9hZGp1c3RTdHlsZSIsIl9jbG9zZUNhbWVyYSIsIl9sb2FkUmVzb3VyY2VzIiwiX3N0YXJ0U2NhbkltcGwiLCJfb25TdWNjZXNzUHJvY2VzcyIsIl9vbkZhaWx1cmVQcm9jZXNzIiwiX3N0YXJ0U2NhbiIsIl9yZWNvdmVyeVNjYW4iLCJfY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX2NsZWFySW50ZXJ2YWxUaW1lcnMiLCJVc2VCT0NSIiwiY29uc3RydWN0b3IiLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJfZGVmaW5lUHJvcGVydHkiLCJOT05FIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVF9TVUNDRVNTIiwiQ0FSRF9ERVRFQ1RfRkFJTEVEIiwiT0NSX1JFQ09HTklaRUQiLCJPQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSIsIk9DUl9TVUNDRVNTIiwiT0NSX1NVQ0NFU1NfV0lUSF9TU0EiLCJPQ1JfRkFJTEVEIiwiTk9UX1NUQVJURUQiLCJTVEFSVEVEIiwiRE9ORSIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsIlBSRUxPQURJTkdfU1RBVFVTIiwiTWFwIiwiSU5fUFJPR1JFU1MiLCJPYmplY3QiLCJzaG93Q2xpcEZyYW1lIiwic2hvd0NhbnZhc1ByZXZpZXciLCJ1c2VUb3BVSSIsInVzZVRvcFVJVGV4dE1zZyIsInVzZU1pZGRsZVVJIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUkiLCJ1c2VCb3R0b21VSVRleHRNc2ciLCJ1c2VQcmV2aWV3VUkiLCJmcmFtZUJvcmRlclN0eWxlIiwibWFza19mcmFtZSIsImNsaXBfZnJhbWUiLCJ3aWR0aCIsInN0eWxlIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwicmVzb3VyY2VCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJkZXZpY2VMYWJlbCIsInZpZGVvVGFyZ2V0SWQiLCJyb3RhdGlvbkRlZ3JlZSIsIm1pcnJvck1vZGUiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRlZCIsIl9jbGFzc1ByaXZhdGVGaWVsZFNldCIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZXQiLCJfbG9hZFJlc291cmNlczIiLCJjYWxsIiwiaXNJbml0aWFsaXplZCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImdldFByZWxvYWRpbmdTdGF0dXMiLCJnZXRPQ1JFbmdpbmUiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJtZXJnZWRPcHRpb25zIiwiXyIsIm1lcmdlIiwic2V0T3B0aW9uIiwiX3dpbmRvd0V2ZW50QmluZDIiLCJnZXRPc1ZlcnNpb24iLCJnZXRPcHRpb24iLCJnZXRPY3JUeXBlIiwidHlwZSIsImdldCIsImdldFVJT3JpZW50YXRpb24iLCJnZXRWaWRlb09yaWVudGF0aW9uIiwic3RhcnRPQ1IiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJfYXJndW1lbnRzIiwiYXJndW1lbnRzIiwiX3RoaXMyIiwib25JblByb2dyZXNzQ2hhbmdlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaW5kZXhPZiIsImdldE9DUkVsZW1lbnRzIiwidG9wVUkiLCJtaWRkbGVVSSIsImJvdHRvbVVJIiwiX2NoYW5nZVN0YWdlMiIsInByZWxvYWRpbmdTdGF0dXMiLCJfd2FpdFByZWxvYWRlZDIiLCJjb25jYXQiLCJfc3RhcnRTY2FuMiIsImUiLCJzdG9wT0NSIiwiY2xlYW51cCIsIl9jbG9zZUNhbWVyYTIiLCJyZXN0YXJ0T0NSIiwib2NyVHlwZSIsIl90aGlzMyIsImNoZWNrVUlPcmllbnRhdGlvbiIsImN1cnJlbnQiLCJvY3IiLCJpc0NoYW5nZWQiLCJzdG9wU2NhbiIsIl9jbGVhckludGVydmFsVGltZXJzMiIsImNhbnZhcyIsImNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lsbFJlYWRGcmVxdWVudGx5IiwiY2xlYXJSZWN0IiwiaGVpZ2h0Iiwic3RvcFN0cmVhbSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsIl9kZXN0cm95U2Nhbm5lckFkZHJlc3MyIiwiX2Rlc3Ryb3lCdWZmZXIyIiwiX2Rlc3Ryb3lQcmV2SW1hZ2UyIiwiX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwMiIsIl93YWl0UHJlbG9hZGVkMyIsImFwcGx5IiwiX3RoaXM2Iiwid2FpdGluZ1JldHJ5Q291bnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoZWNrIiwic2V0VGltZW91dCIsIl90aGlzXyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsInNraXBUb3VjaEFjdGlvbmZvclpvb20iLCJldiIsInRvdWNoZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwib25iZWZvcmV1bmxvYWQiLCJoYW5kbGVSZXNpemUiLCJfcmVmIiwiX3NsZWVwMiIsIm1zIiwiX2Jsb2JUb0Jhc2UyIiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX2dldFN0cmluZ09uV2FzbUhlYXAyIiwibGVuZ3RoQnl0ZXMiLCJsZW5ndGhCeXRlc1VURjgiLCJfbWFsbG9jIiwic3RyaW5nVG9VVEY4IiwiX3NldFZpZGVvUmVzb2x1dGlvbjIiLCJ2aWRlb0VsZW1lbnQiLCJpc1N1cHBvcnRlZFJlc29sdXRpb24iLCJyZXNvbHV0aW9uVGV4dCIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsInNyY09iamVjdCIsIl9nZXRTY2FubmVyQWRkcmVzczIiLCJpbmNsdWRlcyIsImFkZHJlc3MiLCJkZXN0cm95Q2FsbGJhY2siLCJzdHJpbmdPbldhc21IZWFwIiwiZ2V0SURDYXJkU2Nhbm5lciIsImRlc3Ryb3lJRENhcmRTY2FubmVyIiwiZ2V0UGFzc3BvcnRTY2FubmVyIiwiZGVzdHJveVBhc3Nwb3J0U2Nhbm5lciIsImdldEFsaWVuU2Nhbm5lciIsImRlc3Ryb3lBbGllblNjYW5uZXIiLCJnZXRDcmVkaXRTY2FubmVyIiwiZGVzdHJveUNyZWRpdFNjYW5uZXIiLCJfZnJlZSIsIl90aGlzJHJldHJ5Q291bnRHZXRBZCIsIl90aGlzJHJldHJ5Q291bnRHZXRBZDIiLCJfZ2V0QnVmZmVyMiIsIl9nZXRJbWFnZUJhc2UyIiwiX3giLCJfeDIiLCJfeDMiLCJfZ2V0SW1hZ2VCYXNlMyIsIm1hc2tNb2RlIiwiY3JvcE1vZGUiLCJlbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UiLCJqcGdTaXplIiwiZ2V0RW5jb2RlZEpwZ1NpemUiLCJqcGdQb2ludGVyIiwiZ2V0RW5jb2RlZEpwZ0J1ZmZlciIsInJlc3VsdFZpZXciLCJVaW50OEFycmF5IiwiSEVBUDgiLCJidWZmZXIiLCJCbG9iIiwiZGVzdHJveUVuY29kZWRKcGciLCJfaXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlMiIsIl9nZXRSb3RhdGlvbkRlZ3JlZTIiLCJfZ2V0TWlycm9yTW9kZTIiLCJfY3JvcEltYWdlRnJvbVZpZGVvMiIsIl9jcm9wSW1hZ2VGcm9tVmlkZW8zIiwiY2FsY1Jlc29sdXRpb25fdyIsImNhbGNSZXNvbHV0aW9uX2giLCJ2aWRlbyIsInJvdGF0aW9uQ2FudmFzIiwiY2FsY0NhbnZhcyIsImNhbGNWaWRlb1dpZHRoIiwiY2FsY1ZpZGVvSGVpZ2h0IiwiY2FsY1ZpZGVvQ2xpZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbGNWaWRlb0NsaWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImNhbGNDcm9wSW1hZ2VTaXplV2lkdGgiLCJjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodCIsImNhbGNWaWRlb09yaWVudGF0aW9uIiwiY2FsY01heFNXaWR0aCIsImNhbGNNYXhTSGVpZ2h0Iiwic3giLCJzeSIsInJhdGlvIiwic1dpZHRoIiwiTWF0aCIsIm1pbiIsInJvdW5kIiwic0hlaWdodCIsImNhbGNDb250ZXh0IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsImltZ0RhdGFVcmwiLCJ0b0RhdGFVUkwiLCJfcm90YXRlMiIsIl94NCIsIl94NSIsIl94NiIsIl9yb3RhdGUzIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9pc0NhcmRib3hEZXRlY3RlZDIiLCJfeDciLCJfaXNDYXJkYm94RGV0ZWN0ZWQzIiwiYm94VHlwZSIsInNldCIsImRhdGEiLCJkZXRlY3RfaWRjYXJkIiwibWVzc2FnZSIsInRvU3RyaW5nIiwiX3N0YXJ0UmVjb2duaXRpb24yIiwiX3g4IiwiX3g5IiwiX3gxMCIsIl9zdGFydFJlY29nbml0aW9uMyIsInNzYU1vZGUiLCJvY3JSZXN1bHQiLCJyZXN1bHRCdWZmZXIiLCJzY2FuSURDYXJkIiwic2NhblBhc3Nwb3J0Iiwic2NhbkFsaWVuIiwic2NhbkNyZWRpdCIsIm9yaWdpbkltYWdlIiwibWFza0ltYWdlIiwiX3N0YXJ0VHJ1dGgyIiwicmVqZWN0Iiwic2NhblRydXRoIiwiX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIyIiwiX3RoaXM0IiwiX2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjIiLCJfcHJvY2VlZENhbWVyYVBlcm1pc3Npb24yIiwiX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uMyIsImlzUGFzc3BvcnQiLCJfc2V0dXBWaWRlbzIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwbGF5IiwiX2FkanVzdFN0eWxlMiIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwibmFtZSIsImVycm9yTWVzc2FnZSIsIl9vbkZhaWx1cmVQcm9jZXNzMiIsIl9zZXRTdHlsZTIiLCJlbCIsImFzc2lnbiIsInZhbCIsImZvcmNlVXBkYXRlIiwicmVjb2duaXplZEltYWdlIiwiZ3VpZGVCb3giLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwiX3VwZGF0ZVByZXZpZXdVSTIiLCJfaGlkZVByZXZpZXdVSTIiLCJwcmV2aWV3VUkiLCJwcmV2aWV3SW1hZ2UiLCJpbWdTdHlsZSIsIl9nZXRJbnB1dERldmljZXMyIiwiX3gxMSIsIl94MTIiLCJfZ2V0SW5wdXREZXZpY2VzMyIsImtpbmQiLCJsYWJlbCIsIm1lZGlhRGV2aWNlcyIsImRldmljZXMiLCJlbnVtZXJhdGVEZXZpY2VzIiwidmlkZW9EZXZpY2VzIiwiZmlsdGVyIiwiZGV2aWNlIiwiZ2V0Q2FwYWJpbGl0aWVzIiwiX2NhcCRmYWNpbmdNb2RlIiwiY2FwIiwiZmFjaW5nTW9kZSIsIl9zZXR1cERvbUVsZW1lbnRzMiIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsIm1hc2tCb3hXcmFwIiwicHJldmVudFRvRnJlZXplVmlkZW8iLCJjdXN0b21VSVdyYXAiLCJwcmV2aWV3VUlXcmFwIiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNldEF0dHJpYnV0ZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwidmlkZW9TdHlsZSIsInJvdGF0ZUNzcyIsIm1pcnJvckNzcyIsInJvdGF0ZUFuZE1pcnJvckNzcyIsIl9vYmplY3RTcHJlYWQiLCJjYW52YXNTdHlsZSIsImxlZnQiLCJ0b3AiLCJib3JkZXIiLCJyaWdodCIsImJvdHRvbSIsImN1c3RvbVVJV3JhcFN0eWxlIiwicHJldmlld1VJV3JhcFN0eWxlIiwiX3gxMyIsIl9zZXR1cFZpZGVvMyIsImRldmljZUlkTGlzdCIsIm1hcCIsImRldmljZUlkIiwiY29uc3RyYWludFdpZHRoIiwiY29uc3RyYWludEhlaWdodCIsImlkZWFsIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInpvb20iLCJmb2N1c01vZGUiLCJ3aGl0ZUJhbGFuY2VNb2RlIiwic3RyZWFtIiwiZ2V0VXNlck1lZGlhIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsIm5ld1ZpZGVvV2lkdGgiLCJuZXdWaWRlb0hlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwidmlkZW9SYXRpb0J5SGVpZ2h0IiwicmVkdWNlZEd1aWRlQm94V2lkdGgiLCJyZWR1Y2VkR3VpZGVCb3hIZWlnaHQiLCJ2aWRlb0lubmVyR2FwIiwiYmFja2dyb3VuZENvbG9yIiwibWFza0JveElubmVyIiwicXVlcnlTZWxlY3RvciIsInIiLCJpc05hTiIsIm1hc2tCb3hJbm5lcldpZHRoIiwibWF4IiwibWFza0JveElubmVySGVpZ2h0IiwiX2xvYWRSZXNvdXJjZXMzIiwidXJsIiwiZmV0Y2giLCJocmVmIiwidGhlbiIsInJlcyIsInRleHQiLCJyZWdleCIsInNvdXJjZSIsInJlcGxhY2UiLCJldmFsIiwib25SdW50aW1lSW5pdGlhbGl6ZWQiLCJfcmVmNiIsIl94MTQiLCJfc3RhcnRTY2FuSW1wbDIiLCJfdGhpczUiLCJkZXRlY3RlZCIsInNldEludGVydmFsIiwicmVzb2x1dGlvbl93IiwicmVzb2x1dGlvbl9oIiwiX2NsYXNzUHJpdmF0ZUZpZWxkRGVzdHJ1Y3R1cmVTZXQiLCJzc2FSZXN1bHQiLCJfdGhpcyRzc2FSZXRyeUNvdW50IiwiX3RoaXMkc3NhUmV0cnlDb3VudDIiLCJfb25TdWNjZXNzUHJvY2VzczIiLCJvY3JfdHlwZSIsIm9jcl9kYXRhIiwicGFyc2VPY3JSZXN1bHQiLCJvY3Jfb3JpZ2luX2ltYWdlIiwib2NyX21hc2tpbmdfaW1hZ2UiLCJzc2FfbW9kZSIsIl9yZWNvdmVyeVNjYW4yIiwicmV2aWV3X3Jlc3VsdCIsImFwaV9yZXNwb25zZSIsInJlc3VsdENvZGUiLCJlcnJvckRldGFpbCIsInN0YWNrIiwiZXJyb3JfZGV0YWlsIiwiX3N0YXJ0U2NhbjMiLCJfcmVjb3ZlcnlTY2FuMyIsImNsZWFyVGltZW91dCIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlcyI6WyJvY3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIGdsb2JhbC1tb2R1bGUgKi9cbmltcG9ydCBkZXRlY3RvciBmcm9tICcuL2hlbHBlcnMvZGV0ZWN0b3IuanMnO1xuaW1wb3J0IHBhcnNlciBmcm9tICcuL2hlbHBlcnMvcGFyc2VyLmpzJztcbmxldCBpbnN0YW5jZTtcbmNsYXNzIFVzZUJPQ1Ige1xuICBJTl9QUk9HUkVTUyA9IHtcbiAgICBOT05FOiAnbm9uZScsXG4gICAgTk9UX1JFQURZOiAnbm90X3JlYWR5JyxcbiAgICBSRUFEWTogJ3JlYWR5JyxcbiAgICBDQVJEX0RFVEVDVF9TVUNDRVNTOiAnZGV0ZWN0X3N1Y2Nlc3MnLFxuICAgIENBUkRfREVURUNUX0ZBSUxFRDogJ2RldGVjdF9mYWlsZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEOiAncmVjb2duaXplZCcsXG4gICAgT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6ICdyZWNvZ25pemVkX3dpdGhfc3NhJyxcbiAgICBPQ1JfU1VDQ0VTUzogJ29jcl9zdWNjZXNzJyxcbiAgICBPQ1JfU1VDQ0VTU19XSVRIX1NTQTogJ29jcl9zdWNjZXNzX3dpdGhfc3NhJyxcbiAgICBPQ1JfRkFJTEVEOiAnb2NyX2ZhaWxlZCdcbiAgfTtcbiAgUFJFTE9BRElOR19TVEFUVVMgPSB7XG4gICAgTk9UX1NUQVJURUQ6IC0xLFxuICAgIFNUQVJURUQ6IDAsXG4gICAgRE9ORTogMVxuICB9O1xuXG4gIC8qKiBwdWJsaWMgcHJvcGVydGllcyAqL1xuXG4gIC8qKiBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgI09DUkVuZ2luZSA9IG51bGw7XG4gICNpbml0aWFsaXplZCA9IGZhbHNlO1xuICAjcHJlbG9hZGVkID0gZmFsc2U7XG4gICNwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRDtcbiAgI2xpY2Vuc2U7XG4gICNvY3JUeXBlID0gbnVsbDtcbiAgI3NzYU1vZGUgPSBmYWxzZTtcbiAgI3NzYVJldHJ5Q291bnQgPSAwO1xuICAjb25TdWNjZXNzID0gbnVsbDtcbiAgI29uRmFpbHVyZSA9IG51bGw7XG4gICNvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsO1xuICAjb2NyVHlwZUxpc3QgPSBbJ2lkY2FyZCcsICdkcml2ZXInLCAncGFzc3BvcnQnLCAnZm9yZWlnbi1wYXNzcG9ydCcsICdhbGllbicsICdjcmVkaXQnLCAnaWRjYXJkLXNzYScsICdkcml2ZXItc3NhJywgJ3Bhc3Nwb3J0LXNzYScsICdmb3JlaWduLXBhc3Nwb3J0LXNzYScsICdhbGllbi1zc2EnLCAnY3JlZGl0LXNzYSddO1xuICAjb2NyVHlwZVN0cmluZyA9IG5ldyBNYXAoW1tcIjFcIiwgXCJpZGNhcmRcIl0sIFtcIjJcIiwgXCJkcml2ZXJcIl0sIFtcIjNcIiwgXCJwYXNzcG9ydFwiXSwgW1wiNFwiLCBcImZvcmVpZ24tcGFzc3BvcnRcIl0sIFtcIjVcIiwgXCJhbGllblwiXSwgW1wiNS0xXCIsIFwiYWxpZW5cIl0sIFtcIjUtMlwiLCBcImFsaWVuXCJdLCBbXCI1LTNcIiwgXCJhbGllblwiXV0pO1xuICAjcGFnZUVuZCA9IGZhbHNlO1xuICAjb2NyO1xuICAjY2FudmFzO1xuICAjcm90YXRpb25DYW52YXM7XG4gICN2aWRlbztcbiAgI3ZpZGVvV3JhcDtcbiAgI2d1aWRlQm94O1xuICAjZ3VpZGVCb3hXcmFwO1xuICAjbWFza0JveFdyYXA7XG4gICNwcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgI2N1c3RvbVVJV3JhcDtcbiAgI3RvcFVJO1xuICAjbWlkZGxlVUk7XG4gICNib3R0b21VSTtcbiAgI3ByZXZpZXdVSVdyYXA7XG4gICNwcmV2aWV3VUk7XG4gICNwcmV2aWV3SW1hZ2U7XG4gICNCdWZmZXIgPSBudWxsO1xuICAjcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgI1ByZXZJbWFnZSA9IG51bGw7XG4gICNzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgI2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICNyZXNvbHV0aW9uV2lkdGggPSAwO1xuICAjcmVzb2x1dGlvbkhlaWdodCA9IDA7XG4gICN2aWRlb1dpZHRoID0gMDtcbiAgI3ZpZGVvSGVpZ2h0ID0gMDtcbiAgI3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAjaW50ZXJ2YWxUaW1lcjtcbiAgI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXI7XG4gICNyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZDtcbiAgI3N0cmVhbTtcbiAgI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAjZmFjaW5nTW9kZUNvbnN0cmFpbnQgPSAnZW52aXJvbm1lbnQnO1xuICAjdWlPcmllbnRhdGlvbiA9ICcnO1xuICAjcHJldlVpT3JpZW50YXRpb24gPSAnJztcbiAgI3ZpZGVvT3JpZW50YXRpb24gPSAnJztcbiAgI3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gICN0aHJvdHRsaW5nUmVzaXplRGVsYXkgPSA1MDA7XG4gICNtYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9IDMwMDsgLy8g7J6E7IucXG4gICNyZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7IC8vIOyehOyLnFxuICAjZGV2aWNlSW5mbztcbiAgI2lzUm90YXRlZDkwb3IyNzAgPSBmYWxzZTtcbiAgI2luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk7XG4gICNwcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT05FO1xuICAjaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICNpbnRlcnZhbExvY2sgPSBmYWxzZTtcbiAgI2d1aWRlQm94UmF0aW9CeVdpZHRoID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgI3ZpZGVvUmF0aW9CeUhlaWdodCA9IDAuOTsgLy8g7IiY7KCV67aI6rCAXG4gICNndWlkZUJveFJlZHVjZVJhdGlvID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgI2Nyb3BJbWFnZVNpemVXaWR0aCA9IDA7XG4gICNjcm9wSW1hZ2VTaXplSGVpZ2h0ID0gMDtcbiAgI29jclJlc3VsdCA9IG51bGw7XG4gICNpbWdEYXRhVXJsID0gbnVsbDtcbiAgI21hc2tJbWFnZSA9IG51bGw7XG5cbiAgLyoqIERlZmF1bHQgb3B0aW9ucyAqL1xuICAjb3B0aW9ucyA9IG5ldyBPYmplY3Qoe1xuICAgIHNob3dDbGlwRnJhbWU6IGZhbHNlLFxuICAgIHNob3dDYW52YXNQcmV2aWV3OiBmYWxzZSxcbiAgICB1c2VUb3BVSTogdHJ1ZSxcbiAgICB1c2VUb3BVSVRleHRNc2c6IGZhbHNlLFxuICAgIHVzZU1pZGRsZVVJOiB0cnVlLFxuICAgIHVzZU1pZGRsZVVJVGV4dE1zZzogdHJ1ZSxcbiAgICB1c2VCb3R0b21VSTogdHJ1ZSxcbiAgICB1c2VCb3R0b21VSVRleHRNc2c6IGZhbHNlLFxuICAgIHVzZVByZXZpZXdVSTogdHJ1ZSxcbiAgICBmcmFtZUJvcmRlclN0eWxlOiB7XG4gICAgICBtYXNrX2ZyYW1lOiAnIzIwMjAyMycsXG4gICAgICAvLyDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLFxuICAgICAgLy8g65Sl7Y287ZSMICjsiJjsoJXrtojqsIApXG4gICAgICB3aWR0aDogNSxcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIG5vdF9yZWFkeTogJyMwMDAwMDAnLFxuICAgICAgLy8g6rKA7KCVXG4gICAgICByZWFkeTogJyNiOGI4YjgnLFxuICAgICAgLy8g7ZqM7IOJXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICAvLyDrs7TrnbxcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzVlOGZmZicsXG4gICAgICAvLyDtlZjriphcbiAgICAgIHJlY29nbml6ZWQ6ICcjMDAzYWMyJyxcbiAgICAgIC8vIO2MjOuekVxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMwMDNhYzInLFxuICAgICAgLy8g7YyM656RXG4gICAgICBvY3JfZmFpbGVkOiAnI0ZBMTEzRCcsXG4gICAgICAvLyDruajqsJVcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzE0YjAwZScsXG4gICAgICAvLyDstIjroZ1cbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzE0YjAwZScgLy8g7LSI66GdXG4gICAgfSxcblxuICAgIHJlc291cmNlQmFzZVVybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICBkZXZpY2VMYWJlbDogJycsXG4gICAgdmlkZW9UYXJnZXRJZDogJycsXG4gICAgcm90YXRpb25EZWdyZWU6IDAsXG4gICAgbWlycm9yTW9kZTogZmFsc2UsXG4gICAgc3NhTWF4UmV0cnlDb3VudDogMFxuICB9KTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBhc3luYyBwcmVsb2FkaW5nKCkge1xuICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy4jcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRDtcbiAgICAgIGF3YWl0IHRoaXMuI2xvYWRSZXNvdXJjZXMoKTtcbiAgICAgIHRoaXMuI3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkU7XG4gICAgICB0aGlzLiNwcmVsb2FkZWQgPSB0cnVlO1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLiNpbml0aWFsaXplZDtcbiAgfVxuICBpc1ByZWxvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jcHJlbG9hZGVkO1xuICB9XG4gIGdldFByZWxvYWRpbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLiNPQ1JFbmdpbmU7XG4gIH1cbiAgaW5pdChzZXR0aW5ncykge1xuICAgIGlmICghISFzZXR0aW5ncy5saWNlbnNlS2V5KSB0aHJvdyBuZXcgRXJyb3IoJ0xpY2Vuc2Uga2V5IGlzIGVtcHR5Jyk7XG4gICAgdGhpcy4jbGljZW5zZSA9IHNldHRpbmdzLmxpY2Vuc2VLZXk7XG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuI29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy4jd2luZG93RXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLiNkZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLiNpbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldE9wdGlvbihzZXR0aW5ncykge1xuICAgIHRoaXMuI29wdGlvbnMgPSBzZXR0aW5ncztcbiAgfVxuICBnZXRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gIH1cbiAgZ2V0T2NyVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuI29jclR5cGVTdHJpbmcuZ2V0KHR5cGUpO1xuICB9XG4gIGdldFVJT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VpT3JpZW50YXRpb247XG4gIH1cbiAgZ2V0VmlkZW9PcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jdmlkZW9PcmllbnRhdGlvbjtcbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jb2NyVHlwZSA9IHR5cGU7XG4gICAgdGhpcy4jc3NhTW9kZSA9IHRoaXMuI29jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTE7XG4gICAgdGhpcy4jb25TdWNjZXNzID0gb25TdWNjZXNzO1xuICAgIHRoaXMuI29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBvbkluUHJvZ3Jlc3NDaGFuZ2U7XG4gICAgaWYgKG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlVG9wVUkpIHtcbiAgICAgICAgdGhpcy4jdG9wVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnRvcFVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlTWlkZGxlVUkpIHtcbiAgICAgICAgdGhpcy4jbWlkZGxlVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm1pZGRsZVVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlQm90dG9tVUkpIHtcbiAgICAgICAgdGhpcy4jYm90dG9tVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmJvdHRvbVVJO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW5pdGlhbGl6ZWQhJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCk7XG4gICAgICBpZiAoIXRoaXMuaXNQcmVsb2FkZWQoKSAmJiBwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGF3YWl0IHRoaXMuI3dhaXRQcmVsb2FkZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkUpIHtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhYm5vcm1hbGx5IHByZWxvYWRpbmcgc3RhdHVzLCBwcmVsb2FkZWQ6ICR7dGhpcy5pc1ByZWxvYWRlZCgpfSAvIHByZWxvYWRpbmdTdGF0dXM6ICR7dGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCl9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgYXdhaXQgdGhpcy4jc3RhcnRTY2FuKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9XG4gIH1cbiAgc3RvcE9DUigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgIHRoaXMuI29uU3VjY2VzcyA9IG51bGw7XG4gICAgdGhpcy4jb25GYWlsdXJlID0gbnVsbDtcbiAgfVxuICBhc3luYyByZXN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAvLyBhd2FpdCB0aGlzLnN0b3BPQ1IoKTtcbiAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgIGF3YWl0IHRoaXMuc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gIH1cblxuICAvKiogcHJpdmF0ZSBtZXRob2RzICovXG4gIGFzeW5jICN3YWl0UHJlbG9hZGVkKCkge1xuICAgIGxldCB3YWl0aW5nUmV0cnlDb3VudCA9IDA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FpdGluZ1JldHJ5Q291bnQrKztcbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfTtcbiAgICAgIGNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgI3dpbmRvd0V2ZW50QmluZCgpIHtcbiAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgIGlmICgvaXBob25lfGlwb2R8aXBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgY29uc3Qgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSA9IGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzXy4jcGFnZUVuZCA9IHRydWU7XG4gICAgICBfdGhpc18uY2xlYW51cCgpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy4jb2NyVHlwZSkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSkge1xuICAgICAgICBfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IHRydWU7XG4gICAgICAgIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBfdGhpc18ucmVzdGFydE9DUihfdGhpc18uI29jclR5cGUsIF90aGlzXy4jb25TdWNjZXNzLCBfdGhpc18uI29uRmFpbHVyZSwgX3RoaXNfLiNvbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uI3Rocm90dGxpbmdSZXNpemVUaW1lcikge1xuICAgICAgICBfdGhpc18uI3Rocm90dGxpbmdSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlUmVzaXplLCBfdGhpc18uI3Rocm90dGxpbmdSZXNpemVEZWxheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgI3NsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG4gICNibG9iVG9CYXNlNjQoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgfSk7XG4gIH1cbiAgLyoqIOudvOydtOyEvOyKpCDtgqTrpbwgaGVhcCDsl5AgYWxsb2NhdGlvbiAqL1xuICAjZ2V0U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAoISEhdGhpcy4jbGljZW5zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGljZW5zZSBLZXkgaXMgZW1wdHlcIik7XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aEJ5dGVzID0gdGhpcy4jT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOCh0aGlzLiNsaWNlbnNlKSArIDE7XG4gICAgdGhpcy4jc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuI09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICB0aGlzLiNPQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KHRoaXMuI2xpY2Vuc2UsIHRoaXMuI3N0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICByZXR1cm4gdGhpcy4jc3RyaW5nT25XYXNtSGVhcDtcbiAgfVxuICAjc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCkge1xuICAgIGxldCBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSBmYWxzZTtcbiAgICBsZXQgcmVzb2x1dGlvblRleHQgPSAnbm90IHJlYWR5JztcbiAgICBpZiAoIXRoaXMuI2NhbVNldENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuI3ZpZGVvV2lkdGggPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcbiAgICB0aGlzLiN2aWRlb0hlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9O1xuICB9XG4gICNnZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLiNvY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgYWRkcmVzcyA9IDA7XG4gICAgICBsZXQgZGVzdHJveUNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGNvbnN0IHN0cmluZ09uV2FzbUhlYXAgPSB0aGlzLiNnZXRTdHJpbmdPbldhc21IZWFwKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgLy8gT0NSXG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy4jT0NSRW5naW5lLmRlc3Ryb3lJRENhcmRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuI09DUkVuZ2luZS5nZXRQYXNzcG9ydFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy4jT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldEFsaWVuU2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveUFsaWVuU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuI09DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuI09DUkVuZ2luZS5kZXN0cm95Q3JlZGl0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLiNPQ1JFbmdpbmUuX2ZyZWUoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICBpZiAoYWRkcmVzcyA9PT0gMCkge1xuICAgICAgICBpZiAodGhpcy4jbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuI3JldHJ5Q291bnRHZXRBZGRyZXNzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgTGljZW5zZSBLZXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICB2b2lkIDA7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICAjZ2V0QnVmZmVyKCkge1xuICAgIGlmICghdGhpcy4jQnVmZmVyKSB7XG4gICAgICB0aGlzLiNCdWZmZXIgPSB0aGlzLiNPQ1JFbmdpbmUuX21hbGxvYyh0aGlzLiNyZXNvbHV0aW9uV2lkdGggKiB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0ICogNCk7XG4gICAgfVxuICAgIGlmICghdGhpcy4jcmVzdWx0QnVmZmVyKSB7XG4gICAgICB0aGlzLiNyZXN1bHRCdWZmZXIgPSB0aGlzLiNPQ1JFbmdpbmUuX21hbGxvYygyNTYpO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXMuI0J1ZmZlciwgdGhpcy4jcmVzdWx0QnVmZmVyXTtcbiAgfVxuICBhc3luYyAjZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKTtcbiAgICAgIGNvbnN0IGpwZ1NpemUgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ1NpemUoKTtcbiAgICAgIGNvbnN0IGpwZ1BvaW50ZXIgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ0J1ZmZlcigpO1xuICAgICAgY29uc3QgcmVzdWx0VmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuI09DUkVuZ2luZS5IRUFQOC5idWZmZXIsIGpwZ1BvaW50ZXIsIGpwZ1NpemUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0Vmlldyk7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3VsdF0sIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLiNibG9iVG9CYXNlNjQoYmxvYik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLmRlc3Ryb3lFbmNvZGVkSnBnKCk7XG4gICAgfVxuICB9XG4gIC8qKiBGcmVlIGJ1ZmZlciAqL1xuICAjZGVzdHJveUJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy4jQnVmZmVyKSB7XG4gICAgICB0aGlzLiNPQ1JFbmdpbmUuX2ZyZWUodGhpcy4jQnVmZmVyKTtcbiAgICAgIHRoaXMuI0J1ZmZlciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLiNyZXN1bHRCdWZmZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNyZXN1bHRCdWZmZXIpO1xuICAgICAgdGhpcy4jcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgUHJldkltYWdlIGJ1ZmZlciAqL1xuICAjZGVzdHJveVByZXZJbWFnZSgpIHtcbiAgICBpZiAodGhpcy4jUHJldkltYWdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiNPQ1JFbmdpbmUuX2ZyZWUodGhpcy4jUHJldkltYWdlKTtcbiAgICAgIHRoaXMuI1ByZXZJbWFnZSA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBmcmVlIHN0cmluZyBoZWFwIGJ1ZmZlciAqL1xuICAjZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKHRoaXMuI3N0cmluZ09uV2FzbUhlYXApIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIHRoaXMuI3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogZnJlZSBzY2FubmVyIGFkZHJlc3MgKi9cbiAgI2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpIHtcbiAgICBpZiAodGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFjaykge1xuICAgICAgdGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFjaygpO1xuICAgICAgdGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG4gICNpc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW9FbGVtZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9ID0gdGhpcy4jc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFJlc29sdXRpb24pIHtcbiAgICAgIGlmIChyZXNvbHV0aW9uVGV4dCAhPT0gJ25vdCByZWFkeScpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSZXNvbHV0aW9uO1xuICB9XG4gICNnZXRSb3RhdGlvbkRlZ3JlZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuI29wdGlvbnMucm90YXRpb25EZWdyZWUgJSAzNjAgKyAzNjApICUgMzYwO1xuICB9XG4gICNnZXRNaXJyb3JNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLiNvcHRpb25zLm1pcnJvck1vZGU7XG4gIH1cbiAgYXN5bmMgI2Nyb3BJbWFnZUZyb21WaWRlbygpIHtcbiAgICBpZiAoIXRoaXMuI2NhbVNldENvbXBsZXRlKSByZXR1cm4gW251bGwsIG51bGxdO1xuICAgIGxldCBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbdGhpcy4jcmVzb2x1dGlvbldpZHRoLCB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICAvLyBzb3VyY2UgaW1hZ2UgKG9yIHZpZGVvKVxuICAgIC8vIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSKIHN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSD4pSI4pSI4pSI4pSIIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgc3ggIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogc0hlaWdodCAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiBjYW52YXNcbiAgICAvLyDilIMgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICAgICAgICDilIPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAgICAgICAgc1dpZHRoICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICDilIogZHkgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg+KUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgZHggICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogZEhlaWdodCDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICBkV2lkdGggICAgICAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHkpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL2RyYXdJbWFnZVxuXG4gICAgbGV0IGNhbGNDYW52YXMgPSBjYW52YXM7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCA9IHRoaXMuI2Nyb3BJbWFnZVNpemVXaWR0aDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgPSB0aGlzLiNjcm9wSW1hZ2VTaXplSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb247XG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoLCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodF0gPSBbY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQsIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGhdO1xuICAgICAgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW2NhbGNSZXNvbHV0aW9uX2gsIGNhbGNSZXNvbHV0aW9uX3ddO1xuICAgICAgY2FsY0NhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgY2FsY01heFNXaWR0aCA9IDk5OTk5O1xuICAgIGxldCBjYWxjTWF4U0hlaWdodCA9IDk5OTk5O1xuICAgIGlmICh0aGlzLiN1aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLiN1aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzeCwgc3k7XG4gICAgY29uc3QgcmF0aW8gPSBjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgKiByYXRpbyksIGNhbGNNYXhTSGVpZ2h0KTtcbiAgICBzeCA9IE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudFdpZHRoIC0gY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCkgLyAyICogcmF0aW8pO1xuICAgIHN5ID0gTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC0gY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQpIC8gMiAqIHJhdGlvKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy4jcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIHRoaXMuI2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyAjcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIGRlZ3JlZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmIChkZWdyZWUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShbaW1nRGF0YSwgaW1nRGF0YVVybF0pO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gaW1nRGF0YVVybDtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIC8vIGNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGV4dCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGVtcENhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgaWYgKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcud2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWdyZWUgPT09IDkwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLmhlaWdodCwgMCk7ZWxzZSBpZiAoZGVncmVlID09PSAxODApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO2Vsc2UgaWYgKGRlZ3JlZSA9PT0gMjcwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoMCwgaW1nLndpZHRoKTtcbiAgICAgICAgdGVtcENvbnRleHQucm90YXRlKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHRlbXBDb250ZXh0KTtcbiAgICAgICAgcmVzb2x2ZShbbmV3SW1hZ2VEYXRhLCB0ZW1wQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpXSk7XG4gICAgICAgIHRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jICNpc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCkge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLiNnZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IFtpbWdEYXRhXSA9IGF3YWl0IHRoaXMuI2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy4jT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuZGV0ZWN0X2lkY2FyZChidWZmZXIsIHRoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaXNDYXJkYm94RGV0ZWN0ZWQgcmVzdWx0IC09LS0tLS0nLCByZXN1bHQpXG4gICAgICByZXR1cm4gISFyZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyAjc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCBzc2FNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhZGRyZXNzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLiNvY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuI2dldEJ1ZmZlcigpO1xuICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhbklEQ2FyZChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy4jT0NSRW5naW5lLnNjYW5QYXNzcG9ydChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy4jT0NSRW5naW5lLnNjYW5BbGllbihhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhbkNyZWRpdChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgIH1cbiAgICAgIGlmIChvY3JSZXN1bHQgPT09IG51bGwgfHwgb2NyUmVzdWx0ID09PSAnJyB8fCBvY3JSZXN1bHQgPT09ICdmYWxzZScgfHwgb2NyUmVzdWx0WzBdID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGwsIG51bGwsIG51bGxdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNyb3BNb2RlID0gZmFsc2U7XG4gICAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoXCJjcmVkaXRcIikgPiAtMSkge1xuICAgICAgICAgIGNyb3BNb2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3JpZ2luSW1hZ2UgPSBhd2FpdCB0aGlzLiNnZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBmYWxzZSwgY3JvcE1vZGUpO1xuICAgICAgICBsZXQgbWFza0ltYWdlID0gYXdhaXQgdGhpcy4jZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdHJ1ZSwgY3JvcE1vZGUpO1xuICAgICAgICBtYXNrSW1hZ2UgPSBtYXNrSW1hZ2UgPT09ICdkYXRhOicgPyBudWxsIDogbWFza0ltYWdlO1xuICAgICAgICBpZiAoc3NhTW9kZSkge1xuICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRURfV0lUSF9TU0EsIGZhbHNlLCBtYXNrSW1hZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICAjc3RhcnRUcnV0aChvY3JUeXBlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLiNnZXRCdWZmZXIoKTtcbiAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoXCItc3NhXCIpID4gLTEpIHtcbiAgICAgICAgLy8gVE9ETzogd29ya2Vy66W8IOyCrOyaqe2VmOyXrCDrqZTsnbgoVUkg656c642U66eBKSDsiqTroIjrk5zqsIAg66mI7LaU7KeAIOyViuuPhOuhnSDsspjrpqwg7ZWE7JqUICjtmITsnqwgbG9hZGluZyBVSSDrnYTsmrDrqbQg7JWg64uI66mU7J207IWYIOupiOy2pClcbiAgICAgICAgLy8gVE9ETzogc2V0VGltZW91dCDsnLzroZwg64KY64iE642U652864+EIO2aqOqzvCDsl4bsnYwgc2V0VGltZW91dCDsp4DsmrDqs6AsIHdvcmtlcuuhnCDrs4Dqsr0g7ZWE7JqUXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUodGhpcy4jT0NSRW5naW5lLnNjYW5UcnV0aChhZGRyZXNzLCByZXN1bHRCdWZmZXIpKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdTU0EgTW9kZSBpcyB0cnVlLiBidXQsIG9jclR5cGUgaXMgaW52YWxpZCA6ICcgKyBvY3JUeXBlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgI3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgdGhpcy4jY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gMey0iCBkZWxheSDtm4Qg7Iuk7ZaJXG4gICAgICBhd2FpdCB0aGlzLiNwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIGFzeW5jICNwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICAgIGNvbnN0IGlzUGFzc3BvcnQgPSB0aGlzLiNvY3JUeXBlLmluY2x1ZGVzKCdwYXNzcG9ydCcpO1xuICAgICAgYXdhaXQgdGhpcy4jc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlkZW9cbiAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgIC8vIGNvbnN0IFt0cmFja10gPSB0aGlzLiNzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcbiAgICAgICAgLy8gY29uc3QgY2FwYWJpbGl0eSA9IHRyYWNrLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdDYXJkU2NhbiNpbml0aWFsaXplIGNhcGFiaWxpdHknLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgaWYgKCdzcmNPYmplY3QnIGluIHZpZGVvKSB7XG4gICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gdGhpcy4jc3RyZWFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEF2b2lkIHVzaW5nIHRoaXMgaW4gbmV3IGJyb3dzZXJzLCBhcyBpdCBpcyBnb2luZyBhd2F5LlxuICAgICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuI3N0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygncHJvY2VlZENhbWVyYVBlcm1pc3Npb24gLSBvbmxvYWRlZG1ldGFkYXRhJyk7XG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsICgpID0+IHtcbiAgICAgICAgICB2b2lkIDA7XG5cbiAgICAgICAgICAvLyB2aWRlbyBlbGVtZW50IHN0eWxlIOyEpOyglVxuICAgICAgICAgIHRoaXMuI3ZpZGVvT3JpZW50YXRpb24gPSB2aWRlby52aWRlb1dpZHRoIC8gdmlkZW8udmlkZW9IZWlnaHQgPCAxID8gJ3BvcnRyYWl0JyA6ICdsYW5kc2NhcGUnO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHRoaXMuI2NhbVNldENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLiNhZGp1c3RTdHlsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgIHZpZGVvLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ05vdEFsbG93ZWRFcnJvcicpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ0NhbWVyYSBBY2Nlc3MgUGVybWlzc2lvbiBpcyBub3QgYWxsb3dlZCc7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aGlzLiNvbkZhaWx1cmVQcm9jZXNzKFwiRTQwM1wiLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdOb3RSZWFkYWJsZUVycm9yJykge1xuICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgICB0aGlzLiNzZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7IC8vIOyerOq3gCDtmLjstpxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjc2V0U3R5bGUoZWwsIHN0eWxlKSB7XG4gICAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgc3R5bGUpO1xuICB9XG4gICNjaGFuZ2VTdGFnZSh2YWwsIGZvcmNlVXBkYXRlID0gZmFsc2UsIHJlY29nbml6ZWRJbWFnZSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy4jcHJldmlvdXNJblByb2dyZXNzU3RlcCA9PT0gdmFsICYmIGZvcmNlVXBkYXRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiNwcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIHRoaXMuI2luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIGNvbnN0IHtcbiAgICAgIGd1aWRlQm94XG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBib3JkZXJXaWR0aDogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuc3R5bGUsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZVt2YWxdXG4gICAgfTtcbiAgICBpZiAoZ3VpZGVCb3gpIHtcbiAgICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94LCBzdHlsZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLiNvcHRpb25zLnVzZVRvcFVJIHx8IHRoaXMuI29wdGlvbnMudXNlVG9wVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuI29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHRoaXMuI29jclR5cGUsIHRoaXMuI2luUHJvZ3Jlc3NTdGVwLCB0aGlzLiN0b3BVSSwgJ3RvcCcsIHRoaXMuI29wdGlvbnMudXNlVG9wVUlUZXh0TXNnLCB0aGlzLiNvcHRpb25zLnVzZVByZXZpZXdVSSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy4jb3B0aW9ucy51c2VNaWRkbGVVSSB8fCB0aGlzLiNvcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLiNvY3JUeXBlLCB0aGlzLiNpblByb2dyZXNzU3RlcCwgdGhpcy4jbWlkZGxlVUksICdtaWRkbGUnLCB0aGlzLiNvcHRpb25zLnVzZU1pZGRsZVVJVGV4dE1zZywgdGhpcy4jb3B0aW9ucy51c2VQcmV2aWV3VUkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlQm90dG9tVUkgfHwgdGhpcy4jb3B0aW9ucy51c2VCb3R0b21VSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy4jb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdGhpcy4jb2NyVHlwZSwgdGhpcy4jaW5Qcm9ncmVzc1N0ZXAsIHRoaXMuI2JvdHRvbVVJLCAnYm90dG9tJywgdGhpcy4jb3B0aW9ucy51c2VCb3R0b21VSVRleHRNc2csIHRoaXMuI29wdGlvbnMudXNlUHJldmlld1VJKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aWRlb1xuICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICB0aGlzLiNzZXRTdHlsZSh2aWRlbywge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlUHJldmlld1VJKSB7XG4gICAgICAgIHRoaXMuI3VwZGF0ZVByZXZpZXdVSShyZWNvZ25pemVkSW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsID09PSB0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKSB7XG4gICAgICBpZiAodGhpcy4jb3B0aW9ucy51c2VQcmV2aWV3VUkpIHtcbiAgICAgICAgdGhpcy4jaGlkZVByZXZpZXdVSSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAjdXBkYXRlUHJldmlld1VJKHJlY29nbml6ZWRJbWFnZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGd1aWRlQm94LFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgcHJldmlld0ltYWdlLnNyYyA9IHJlY29nbml6ZWRJbWFnZTtcbiAgICBjb25zdCBpbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBndWlkZUJveC5jbGllbnRXaWR0aCArICdweCcsXG4gICAgICBoZWlnaHQ6IGd1aWRlQm94LmNsaWVudEhlaWdodCArICdweCdcbiAgICB9O1xuICAgIHRoaXMuI3NldFN0eWxlKHByZXZpZXdJbWFnZSwgaW1nU3R5bGUpO1xuICAgIHRoaXMuI3NldFN0eWxlKHByZXZpZXdVSSwge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICB9XG4gICNoaWRlUHJldmlld1VJKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgdGhpcy4jc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9KTtcbiAgICB0aGlzLiNzZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIHByZXZpZXdJbWFnZS5zcmMgPSBcIlwiO1xuICB9XG4gIGFzeW5jICNnZXRJbnB1dERldmljZXMoa2luZCwgbGFiZWwpIHtcbiAgICAvLyB0aHJvdyBlcnJvciBpZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGRldmljZXMgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBkZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4ge1xuICAgICAgaWYgKGRldmljZS5raW5kID09PSBgJHtraW5kfWlucHV0YCAmJiBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IGRldmljZS5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgaWYgKGNhcD8uZmFjaW5nTW9kZT8uaW5jbHVkZXModGhpcy4jZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmlkZW9EZXZpY2VzLmxlbmd0aCA8PSAxID8gdmlkZW9EZXZpY2VzIDogdmlkZW9EZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gbGFiZWwgPyBkZXZpY2UubGFiZWwuaW5jbHVkZXMobGFiZWwpIDogdHJ1ZSk7XG4gIH1cbiAgY2hlY2tVSU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkZXRlY3Rvci5nZXRVSU9yaWVudGF0aW9uKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkub2NyKTtcbiAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnQgIT09IHRoaXMuI3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLiN1aU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIHRoaXMuI3ByZXZVaU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgaXNDaGFuZ2VkXG4gICAgfTtcbiAgfVxuICAjc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSSxcbiAgICAgIHByZXZpZXdVSVdyYXAsXG4gICAgICBwcmV2aWV3VUksXG4gICAgICBwcmV2aWV3SW1hZ2VcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoIW9jcikgdGhyb3cgbmV3IEVycm9yKFwib2NyIGRpdiBlbGVtZW50IGlzIG5vdCBleGlzdFwiKTtcbiAgICBpZiAodmlkZW9XcmFwKSB2aWRlb1dyYXAucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94V3JhcCkgZ3VpZGVCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmICh2aWRlbykgdmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGNhbnZhcykgY2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChyb3RhdGlvbkNhbnZhcykgcm90YXRpb25DYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94KSBndWlkZUJveC5yZW1vdmUoKTtcbiAgICBpZiAobWFza0JveFdyYXApIG1hc2tCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmIChwcmV2ZW50VG9GcmVlemVWaWRlbykgcHJldmVudFRvRnJlZXplVmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGN1c3RvbVVJV3JhcCkgY3VzdG9tVUlXcmFwLnJlbW92ZSgpO1xuICAgIC8vIOqwgSB0b3AsIG1pZGRsZSwgYm90dG9tIFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAodG9wVUkgJiYgIXRoaXMuI29wdGlvbnMudXNlVG9wVUkpIHRvcFVJLmlubmVySFRNTCA9ICcnO1xuICAgIGlmIChtaWRkbGVVSSAmJiAhdGhpcy4jb3B0aW9ucy51c2VNaWRkbGVVSSkgbWlkZGxlVUkuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKGJvdHRvbVVJICYmICF0aGlzLiNvcHRpb25zLnVzZUJvdHRvbVVJKSBib3R0b21VSS5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAocHJldmlld1VJV3JhcCkgcHJldmlld1VJV3JhcC5yZW1vdmUoKTtcbiAgICAvLyBwcmV2aWV3IFVJ66W8IOuvuOyCrOyaqeydvCDqsr3smrAg7JWI7J2YIOuCtOyaqeydhCDsgq3soJxcbiAgICBpZiAocHJldmlld1VJICYmICF0aGlzLiNvcHRpb25zLnVzZVByZXZpZXdVSSkgcHJldmlld1VJLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy4jZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID0gWzkwLCAyNzBdLmluY2x1ZGVzKHJvdGF0aW9uRGVncmVlKTtcbiAgICBsZXQgb2NyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9O1xuICAgIHRoaXMuI3NldFN0eWxlKG9jciwgb2NyU3R5bGUpO1xuICAgIGNvbnN0IHdyYXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9O1xuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLiNzZXRTdHlsZShtYXNrQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBsZXQgbWFza19mcmFtZSA9IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5tYXNrX2ZyYW1lICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLiNvcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDwvc3ZnPlxcblwiICsgXCIgICAgPC9tYXNrPlxcblwiICsgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgKyBcIiAgICAgICAgICBmaWxsPSdcIiArIG1hc2tfZnJhbWUgKyBcIicgbWFzaz0ndXJsKCNtYXNrLXJlY3QpJz48L3JlY3Q+XFxuXCIgKyBcIiAgPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgaWYgKHRoaXMuI2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHJvdGF0ZUNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy4jZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLiNzZXRTdHlsZSh2aWRlbywgdmlkZW9TdHlsZSk7XG4gICAgdmlkZW9XcmFwLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcbiAgICBndWlkZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveCcpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy4jb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuI2lzUm90YXRlZDkwb3IyNzAgPyAnbm9uZScgOiAnZGlzcGxheScgOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMzBweCcsXG4gICAgICBib3JkZXI6ICdncmVlbiAycHggc29saWQnXG4gICAgfTtcbiAgICB0aGlzLiNzZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByb3RhdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJvdGF0aW9uQ2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdyb3RhdGlvbkNhbnZhcycpO1xuICAgIHRoaXMuI3NldFN0eWxlKHJvdGF0aW9uQ2FudmFzLCB7XG4gICAgICBkaXNwbGF5OiB0aGlzLiNvcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gdGhpcy4jaXNSb3RhdGVkOTBvcjI3MCA/ICdkaXNwbGF5JyA6ICdub25lJyA6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnYmx1ZSAycHggc29saWQnXG4gICAgfSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHJvdGF0aW9uQ2FudmFzKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuI3NldFN0eWxlKHByZXZlbnRUb0ZyZWV6ZVZpZGVvLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgIHJpZ2h0OiAnMTAnXG4gICAgfSk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uaW5uZXJIVE1MID0gXCJcIiArIFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xcXCIgd2lkdGg9XFxcIjMycHhcXFwiIGhlaWdodD1cXFwiMzJweFxcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIj5cXG5cIiArIFwiICA8Y2lyY2xlIGN4PVxcXCI4NFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxMFxcXCIgZmlsbD1cXFwiIzg2ODY4NjAwXFxcIj5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjAuNTU1NTU1NTU1NTU1NTU1NnNcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIHZhbHVlcz1cXFwiMTA7MFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiZmlsbFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcImRpc2NyZXRlXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiIzg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMFxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0wLjU1NTU1NTU1NTU1NTU1NTZzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0wLjU1NTU1NTU1NTU1NTU1NTZzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiODRcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjExMTExMTExMTExMTExMTJzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjExMTExMTExMTExMTExMTJzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjY2NjY2NjY2NjY2NjY2NjVzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjY2NjY2NjY2NjY2NjY2NjVzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCI7XG4gICAgXCI8L3N2Zz5cIjtcbiAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmVudFRvRnJlZXplVmlkZW8pO1xuICAgIGN1c3RvbVVJV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1c3RvbVVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY3VzdG9tVUlXcmFwJyk7XG4gICAgY29uc3QgY3VzdG9tVUlXcmFwU3R5bGUgPSB7XG4gICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgIH07XG4gICAgdGhpcy4jc2V0U3R5bGUoY3VzdG9tVUlXcmFwLCBjdXN0b21VSVdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGN1c3RvbVVJV3JhcCk7XG5cbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSSDsgqzsmqkodXNlKeyXrOu2gOyZgCDqtIDqs4Tsl4bsnbQg7JiB7Jet7J2EIOyeoeq4sCDsnITtlbQsIGRpduqwgCDsl4bsnLzrqbQg7IOd7ISxXG4gICAgLy8gYWRqdXN0U3R5bGUoKSDsl5DshJwg7IS467aA7KCB7J24IOyCrOydtOymiOyZgCDsnITsuZjqsJIg64+Z7KCB7Jy866GcIOyEpOygleuQqC5cbiAgICBpZiAoIXRvcFVJKSB7XG4gICAgICB0b3BVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3RvcFVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZCh0b3BVSSk7XG4gICAgaWYgKCFtaWRkbGVVSSkge1xuICAgICAgbWlkZGxlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtaWRkbGVVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQobWlkZGxlVUkpO1xuICAgIGlmICghYm90dG9tVUkpIHtcbiAgICAgIGJvdHRvbVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib3R0b21VSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnYm90dG9tVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKGJvdHRvbVVJKTtcbiAgICBwcmV2aWV3VUlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJldmlld1VJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmlld1VJV3JhcCcpO1xuICAgIGNvbnN0IHByZXZpZXdVSVdyYXBTdHlsZSA9IHtcbiAgICAgIC4uLndyYXBTdHlsZSxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgfTtcbiAgICB0aGlzLiNzZXRTdHlsZShwcmV2aWV3VUlXcmFwLCBwcmV2aWV3VUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChwcmV2aWV3VUlXcmFwKTtcbiAgICBpZiAoIXByZXZpZXdVSSkge1xuICAgICAgcHJldmlld1VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcmV2aWV3VUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdVSScpO1xuICAgIH1cbiAgICB0aGlzLiNzZXRTdHlsZShwcmV2aWV3VUksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIHByZXZpZXdVSVdyYXAuYXBwZW5kQ2hpbGQocHJldmlld1VJKTtcbiAgICBpZiAoIXByZXZpZXdJbWFnZSkge1xuICAgICAgcHJldmlld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBwcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ByZXZpZXdJbWFnZScpO1xuICAgICAgcHJldmlld1VJLmFwcGVuZENoaWxkKHByZXZpZXdJbWFnZSk7XG4gICAgfVxuICAgIHRoaXMuI29jciA9IG9jcjtcbiAgICB0aGlzLiNjYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy4jcm90YXRpb25DYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICB0aGlzLiN2aWRlbyA9IHZpZGVvO1xuICAgIHRoaXMuI3ZpZGVvV3JhcCA9IHZpZGVvV3JhcDtcbiAgICB0aGlzLiNndWlkZUJveCA9IGd1aWRlQm94O1xuICAgIHRoaXMuI2d1aWRlQm94V3JhcCA9IGd1aWRlQm94V3JhcDtcbiAgICB0aGlzLiNtYXNrQm94V3JhcCA9IG1hc2tCb3hXcmFwO1xuICAgIHRoaXMuI3ByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gcHJldmVudFRvRnJlZXplVmlkZW87XG4gICAgdGhpcy4jY3VzdG9tVUlXcmFwID0gY3VzdG9tVUlXcmFwO1xuICAgIHRoaXMuI3RvcFVJID0gdG9wVUk7XG4gICAgdGhpcy4jbWlkZGxlVUkgPSBtaWRkbGVVSTtcbiAgICB0aGlzLiNib3R0b21VSSA9IGJvdHRvbVVJO1xuICAgIHRoaXMuI3ByZXZpZXdVSVdyYXAgPSBwcmV2aWV3VUlXcmFwO1xuICAgIHRoaXMuI3ByZXZpZXdVSSA9IHByZXZpZXdVSTtcbiAgICB0aGlzLiNwcmV2aWV3SW1hZ2UgPSBwcmV2aWV3SW1hZ2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9jcixcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgdmlkZW8sXG4gICAgICB2aWRlb1dyYXAsXG4gICAgICBndWlkZUJveCxcbiAgICAgIGd1aWRlQm94V3JhcCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgcHJldmVudFRvRnJlZXplVmlkZW8sXG4gICAgICBjdXN0b21VSVdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUksXG4gICAgICBwcmV2aWV3VUlXcmFwLFxuICAgICAgcHJldmlld1VJLFxuICAgICAgcHJldmlld0ltYWdlXG4gICAgfTtcbiAgfVxuICBhc3luYyAjc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KSB7XG4gICAgLy8gd2FzbSDsnbjsi53shLHriqUg7LWc7KCB7ZmU65CcIO2VtOyDgeuPhFxuICAgIHRoaXMuI3Jlc29sdXRpb25XaWR0aCA9IDEwODA7XG4gICAgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCA9IDcyMDtcbiAgICB0aGlzLiNjYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXNcbiAgICB9ID0gdGhpcy4jc2V0dXBEb21FbGVtZW50cygpO1xuICAgIGNvbnN0IHZpZGVvRGV2aWNlcyA9IGF3YWl0IHRoaXMuI2dldElucHV0RGV2aWNlcygndmlkZW8nLCB0aGlzLiNvcHRpb25zLmRldmljZUxhYmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmlkZW9EZXZpY2VzIDo6ICcsIHZpZGVvRGV2aWNlcylcbiAgICBjb25zdCBkZXZpY2VJZExpc3QgPSB2aWRlb0RldmljZXMubWFwKGRldmljZSA9PiBkZXZpY2UuZGV2aWNlSWQpO1xuICAgIHRoaXMuY2hlY2tVSU9yaWVudGF0aW9uKCk7XG4gICAgbGV0IGNvbnN0cmFpbnRXaWR0aCwgY29uc3RyYWludEhlaWdodDtcbiAgICBpZiAodGhpcy4jdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgLy8gdWkgOiBwb3J0cmFpdFxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogMTA4MCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcblxuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDcyMCAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdWkgOiBsYW5kc2NhcGVcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIG1pbjogMTI4MFxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICBtaW46IDcyMFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB2aWRlbzoge1xuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgaWRlYWw6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZmFjaW5nTW9kZToge1xuICAgICAgICAgIGlkZWFsOiB0aGlzLiNmYWNpbmdNb2RlQ29uc3RyYWludFxuICAgICAgICB9LFxuICAgICAgICBmb2N1c01vZGU6IHtcbiAgICAgICAgICBpZGVhbDogJ2NvbnRpbnVvdXMnXG4gICAgICAgIH0sXG4gICAgICAgIHdoaXRlQmFsYW5jZU1vZGU6IHtcbiAgICAgICAgICBpZGVhbDogJ2NvbnRpbnVvdXMnXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZUlkOiB2aWRlb0RldmljZXMubGVuZ3RoID8ge1xuICAgICAgICAgIGlkZWFsOiBkZXZpY2VJZExpc3RbZGV2aWNlSWRMaXN0Lmxlbmd0aCAtIDFdXG4gICAgICAgIH0gOiBudWxsLFxuICAgICAgICB3aWR0aDogY29uc3RyYWludFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnN0cmFpbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBkdW1wdHJhY2sgPSAoW2EsIGJdLCB0cmFjaykgPT5cbiAgICAgIC8vICAgYCR7YX0ke3RyYWNrLmtpbmQgPT0gJ3ZpZGVvJyA/ICdDYW1lcmEnIDogJ01pY3JvcGhvbmUnfSAoJHt0cmFjay5yZWFkeVN0YXRlfSk6ICR7dHJhY2subGFiZWx9JHtifWA7XG5cbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb1RyYWNrcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKSlcbiAgICAgIC8vIGNvbnN0IHN0cmVhbVNldHRpbmdzID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1DYXBhYmlsaXRpZXMgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q2FwYWJpbGl0aWVzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENvbnN0cmFpbnRzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtU2V0dGluZ3MgOjogJywgc3RyZWFtU2V0dGluZ3MpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggLyBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoIC8gc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gYXNwZWN0UmF0aW8gOjogJyArIHN0cmVhbVNldHRpbmdzLmFzcGVjdFJhdGlvKTtcblxuICAgICAgW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0gPSBbdGhpcy4jcmVzb2x1dGlvbldpZHRoLCB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgIFtyb3RhdGlvbkNhbnZhcy53aWR0aCwgcm90YXRpb25DYW52YXMuaGVpZ2h0XSA9IFt0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0LCB0aGlzLiNyZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy4jc3RyZWFtID0gc3RyZWFtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNhZGp1c3RTdHlsZSgpIHtcbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQ7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IG9jci5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXM7XG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgbGV0IG5ld1ZpZGVvV2lkdGggPSBjYWxjVmlkZW9DbGllbnRXaWR0aDtcbiAgICBsZXQgbmV3VmlkZW9IZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSB0aGlzLiNndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICBjb25zdCB2aWRlb1JhdGlvQnlIZWlnaHQgPSB0aGlzLiN2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIC8vIOyEuOuhnCBVSVxuICAgICAgLy8gdmlkZW8g6rCA66GcIOq4sOykgCAxMDAlIOycoOyngCAo67OA6rK97JeG7J2MKVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLiN1aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuPhCDshLjroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g7IS466GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDruYTrlJTsmKQg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLiN1aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOu5hOuUlOyYpOulvCDqsIDroZwgVUnsnZggaGVpZ2h0IOq4sOykgOycvOuhnCDspITsnbTqs6BcbiAgICAgICAgLy8g6rCA66GcIFVJIGhlaWdodCDquLDspIDsnLzroZwg67mE65SU7Jik7J2YIHdpZHRoIOqzhOyCsFxuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IGNhbGNPY3JDbGllbnRIZWlnaHQgKiB2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBuZXdWaWRlb0hlaWdodCAqIChjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0hlaWdodCk7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk64qUIOu5hOuUlOyYpOulvCDshLjroZwg6riw7KSA7Jy866GcIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IG5ld1ZpZGVvSGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCDqsIDroZwg7YGs6riw6rCAIOqwgOuhnCBVSSB3aWR0aCAqIHJhdGlvIOqwkuuztOuLpCDtgazrqbQsXG4gICAgICAgIGlmIChndWlkZUJveFdpZHRoID4gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGgpIHtcbiAgICAgICAgICAvLyDqs4TsgrAg67Cp7Iud7J2EIOuwlOq+vOuLpCAo7IKs7JygIDog6rGw7J2YIOygleyCrOqwge2YleyXkCDqsIDquYzsmrQg6rK97JqwIOqwgOydtOuTnCDrsJXsiqQg6rCA66Gc6rCAIOq9ieywqOqyjCDrkKguKVxuICAgICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7ZmV64yAXG4gICAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk7J2YIGhlaWdodCDtgazquLDrpbwgVUnsnZggaGVpZ2h0IOq4sOykgOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCDqsIDroZwg7YGs6riw6rCAIOqwgOuhnCBVSSB3aWR0aCAqIHJhdGlvIOqwkuuztOuLpCDtgazrqbQsXG4gICAgICAgIGlmIChndWlkZUJveFdpZHRoID4gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGgpIHtcbiAgICAgICAgICAvLyDqs4TsgrAg67Cp7Iud7J2EIOuwlOq+vOuLpCAo7IKs7JygIDog6rGw7J2YIOygleyCrOqwge2YleyXkCDqsIDquYzsmrQg6rK97JqwIOqwgOydtOuTnCDrsJXsiqQg6rCA66Gc6rCAIOq9ieywqOqyjCDrkKguKVxuICAgICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7LaV7IaMXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiAoY2FsY1ZpZGVvSGVpZ2h0IC8gY2FsY1ZpZGVvV2lkdGgpO1xuICAgICAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGd1aWRlQm94V2lkdGggKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgIGd1aWRlQm94SGVpZ2h0ICs9IGJvcmRlcldpZHRoICogMjtcbiAgICB0aGlzLiNjcm9wSW1hZ2VTaXplV2lkdGggPSBNYXRoLm1pbihndWlkZUJveFdpZHRoLCBuZXdWaWRlb1dpZHRoKTtcbiAgICB0aGlzLiNjcm9wSW1hZ2VTaXplSGVpZ2h0ID0gTWF0aC5taW4oZ3VpZGVCb3hIZWlnaHQsIG5ld1ZpZGVvSGVpZ2h0KTtcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94V2lkdGggKiB0aGlzLiNndWlkZUJveFJlZHVjZVJhdGlvO1xuICAgIGNvbnN0IHJlZHVjZWRHdWlkZUJveEhlaWdodCA9IGd1aWRlQm94SGVpZ2h0ICogdGhpcy4jZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBpZiAodG9wVUkpIHtcbiAgICAgIHRoaXMuI3NldFN0eWxlKHRvcFVJLCB7XG4gICAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcxMHB4JyxcbiAgICAgICAgJ2hlaWdodCc6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgICdkaXNwbGF5JzogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uLXJldmVyc2UnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1pZGRsZVVJKSB7XG4gICAgICB0aGlzLiNzZXRTdHlsZShtaWRkbGVVSSwge1xuICAgICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiArICdweCcsXG4gICAgICAgICdkaXNwbGF5JzogJ2ZsZXgnLFxuICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgICAncGFkZGluZyc6ICcxMHB4J1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChib3R0b21VSSkge1xuICAgICAgdGhpcy4jc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogJzEwcHgnLFxuICAgICAgICAnaGVpZ2h0JzogKGNhbGNPY3JDbGllbnRIZWlnaHQgLSBndWlkZUJveEhlaWdodCkgLyAyICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvV2lkdGggIT09IGNhbGNWaWRlb0NsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLiNzZXRTdHlsZSh2aWRlbywge1xuICAgICAgICB3aWR0aDogbmV3VmlkZW9XaWR0aCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobmV3VmlkZW9IZWlnaHQgIT09IGNhbGNWaWRlb0NsaWVudEhlaWdodCkge1xuICAgICAgdGhpcy4jc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgaGVpZ2h0OiBuZXdWaWRlb0hlaWdodCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCB2aWRlb0lubmVyR2FwID0gMjsgLy8g66+47IS47ZWY6rKMIG1hc2tCb3hJbm5lcuuztOuLpCBndWlkZUJveOqwgCDsnpHsnYDqsoMg67O07KCVXG4gICAgdGhpcy4jc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiByZWR1Y2VkR3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIjbWFza0JveElubmVyXCIpO1xuICAgIGxldCByID0gYm9yZGVyUmFkaXVzIC0gYm9yZGVyV2lkdGggKiAyO1xuICAgIHIgPSByIDwgMCA/IDAgOiByO1xuICAgIGlmICghaXNOYU4ocmVkdWNlZEd1aWRlQm94V2lkdGgpICYmICFpc05hTihyZWR1Y2VkR3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gTWF0aC5tYXgocmVkdWNlZEd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lckhlaWdodCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXAsIDApO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBtYXNrQm94SW5uZXJXaWR0aCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIG1hc2tCb3hJbm5lckhlaWdodCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3gnLCBtYXNrQm94SW5uZXJXaWR0aCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3knLCBtYXNrQm94SW5uZXJIZWlnaHQgLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIHIgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeScsIHIgKyAnJyk7XG4gICAgfVxuICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuI2luUHJvZ3Jlc3NTdGVwLCB0cnVlKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgI2Nsb3NlQ2FtZXJhKCkge1xuICAgIHRoaXMuI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgfVxuICBhc3luYyAjbG9hZFJlc291cmNlcygpIHtcbiAgICB2b2lkIDA7XG4gICAgaWYgKHRoaXMuI3Jlc291cmNlc0xvYWRlZCkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKCdxdXJhbS5qcycsIHRoaXMuI29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKTtcbiAgICBsZXQgc3JjID0gYXdhaXQgZmV0Y2godXJsLmhyZWYpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XG4gICAgICBsZXQgcmVnZXggPSAvKC4qKSA9IE1vZHVsZS5jd3JhcC9nbTtcbiAgICAgIGxldCBzb3VyY2UgPSB0ZXh0LnJlcGxhY2UocmVnZXgsICdNb2R1bGUuJDEgPSBNb2R1bGUuY3dyYXAnKTtcblxuICAgICAgLy8gZGF0YShtb2RlbClcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFwoZnVuY3Rpb25cXChcXCkgXFx7L20sICd2YXIgY3JlYXRlTW9kZWxEYXRhID0gYXN5bmMgZnVuY3Rpb24oKSB7XFxuJyArICcgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcXG4nKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycsICcgICByZWplY3QoKTtcXG4nICsgJyAgIGNvbnNvbGUuZXJyb3IoXCJwYWNrYWdlIGVycm9yOlwiLCBlcnJvcik7Jyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICB9LCBoYW5kbGVFcnJvciknLCAnICByZXNvbHZlKCk7XFxuJyArICcgIH0sIGhhbmRsZUVycm9yKScpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL15cXH1cXClcXChcXCk7L20sICdcXG4gfSlcXG4nICsgJ307Jyk7XG5cbiAgICAgIC8vIHdhc21cbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCdxdXJhbS53YXNtJywgbmV3IFVSTCgncXVyYW0ud2FzbScsIHRoaXMuI29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9SRU1PVEVfUEFDS0FHRV9CQVNFID0gWydcIl1xdXJhbVxcLmRhdGFbXCInXS9nbSwgYFJFTU9URV9QQUNLQUdFX0JBU0UgPSBcIiR7bmV3IFVSTCgncXVyYW0uZGF0YScsIHRoaXMuI29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmfVwiYCk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnZnVuY3Rpb24gY3JlYXRlV2FzbScsICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnaW5zdGFudGlhdGVBc3luYygpOycsICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7Jyk7XG5cbiAgICAgIC8vIHdhc20gYW5kIGRhdGEobW9kZWwpIGZpbGUg67OR66Cs66GcIGZldGNoIO2VmOq4sCDsnITtlbRcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsICdjb25zb2xlLmxvZyhcImNyZWF0ZSB3YXNtIGFuZCBkYXRhIC0gc3RhcnRcIilcXG4nICsgJ2F3YWl0IChhc3luYyBmdW5jdGlvbigpIHtcXG4nICsgJyAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkV2FzbSA9IGZhbHNlO1xcbicgKyAnICAgIHZhciBpc0NyZWF0ZWREYXRhID0gZmFsc2U7XFxuJyArICcgICAgY3JlYXRlV2FzbSgpLnRoZW4oKCkgPT4ge1xcbicgKyAnICAgICAgaXNDcmVhdGVkV2FzbSA9IHRydWU7XFxuJyArICcgICAgICBpZiAoaXNDcmVhdGVkRGF0YSkgeyByZXNvbHZlKCk7IH1cXG4nICsgJyAgICB9KTtcXG4nICsgJyAgICBjcmVhdGVNb2RlbERhdGEoKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZERhdGEgPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZFdhc20pIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSlcXG4nICsgJyAgfSk7XFxuJyArICd9KSgpO1xcbicgKyAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIGVuZFwiKScpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9KTtcbiAgICBzcmMgPSBgXG4gICAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgJHtzcmN9XG4gICAgICBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4ID0gbGVuZ3RoQnl0ZXNVVEY4XG4gICAgICBNb2R1bGUuc3RyaW5nVG9VVEY4ID0gc3RyaW5nVG9VVEY4XG4gICAgICByZXR1cm4gTW9kdWxlXG4gICAgfSkoKVxuICAgICAgICBgO1xuICAgIHRoaXMuI09DUkVuZ2luZSA9IGF3YWl0IGV2YWwoc3JjKTtcbiAgICB0aGlzLiNPQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQgPSBhc3luYyBfID0+IHtcbiAgICAgIHZvaWQgMDtcbiAgICB9O1xuICAgIGF3YWl0IHRoaXMuI09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpO1xuICAgIHRoaXMuI3Jlc291cmNlc0xvYWRlZCA9IHRydWU7XG4gICAgdm9pZCAwO1xuICB9XG4gICNzdGFydFNjYW5JbXBsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLiNpbnRlcnZhbExvY2sgPSBmYWxzZTtcbiAgICAgIGxldCBkZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgbGV0IGFkZHJlc3MgPSAwO1xuICAgICAgdGhpcy4jcGFnZUVuZCA9IGZhbHNlO1xuICAgICAgdGhpcy4jaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodGhpcy4jaW50ZXJ2YWxMb2NrID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2ludGVydmFsTG9jayA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdGhpcy4jY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICAgIGlmICghdGhpcy4jT0NSRW5naW5lWydhc20nXSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVE9ETyA6IOyEpOygle2VoOyImCDsnojqsowg67OA6rK9IGRlZmF1bHQg6rCS64+EIOygnOqztVxuICAgICAgICAgIGNvbnN0IFtyZXNvbHV0aW9uX3csIHJlc29sdXRpb25faF0gPSBbdGhpcy4jcmVzb2x1dGlvbldpZHRoLCB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB2aWRlb1xuICAgICAgICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgICAgIGlmIChyZXNvbHV0aW9uX3cgPT09IDAgfHwgcmVzb2x1dGlvbl9oID09PSAwKSByZXR1cm47XG4gICAgICAgICAgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiNzbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBiZWZvcmUgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG4gICAgICAgICAgaWYgKGFkZHJlc3MgPT09IDAgJiYgIXRoaXMuI3BhZ2VFbmQgJiYgdGhpcy4jaXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvKSkge1xuICAgICAgICAgICAgW2FkZHJlc3MsIHRoaXMuI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2tdID0gdGhpcy4jZ2V0U2Nhbm5lckFkZHJlc3ModGhpcy4jb2NyVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYWRkcmVzcyB8fCB0aGlzLiNwYWdlRW5kKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiNzbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBhZnRlciAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcblxuICAgICAgICAgIC8vIGNhcmQgbm90IGRldGVjdGVkXG4gICAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy4jaXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcywgMCkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jaW5Qcm9ncmVzc1N0ZXAgIT09IHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpIHtcbiAgICAgICAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9GQUlMRUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jaW5Qcm9ncmVzc1N0ZXAgIT09IHRoaXMuSU5fUFJPR1JFU1MuT0NSX1JFQ09HTklaRUQpIHtcbiAgICAgICAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9TVUNDRVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuI2luUHJvZ3Jlc3NTdGVwID09PSB0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIGZhbGxiYWNrIGNhc2Ug7J2465OvXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIC8vIGlmIChyZXN1bHQgIT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIC8vICAgY29uc3QgUHJldkltYWdlID0gZ2V0UHJldkltYWdlKCk7XG4gICAgICAgICAgICAvLyAgIE1vZHVsZS5IRUFQOC5zZXQoaW1nRGF0YS5kYXRhLCBQcmV2SW1hZ2UpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBpZiAodGhpcy4jc3NhUmV0cnlDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICBbdGhpcy4jb2NyUmVzdWx0LCB0aGlzLiNpbWdEYXRhVXJsLCB0aGlzLiNtYXNrSW1hZ2VdID0gYXdhaXQgdGhpcy4jc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCB0aGlzLiNvY3JUeXBlLCB0aGlzLiNzc2FNb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHNzYVJldHJ5IOyduCDqsr3smrAgT0NS7ZWY7KeAIOyViuydjCBmb3Ig7ISx64qlKOyGjeuPhClcbiAgICAgICAgICAgICAgaWYgKHRoaXMuI29jclJlc3VsdCA9PT0gbnVsbCB8fCB0aGlzLiNpbWdEYXRhVXJsID09PSBudWxsIHx8IHRoaXMuI21hc2tJbWFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc3NhUmV0cnlDb3VudCBpcyBub3QgMCwgYnV0IG9jclJlc3VsdCBpcyBudWxsJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzc2FSZXN1bHQgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIGlmICh0aGlzLiNvY3JSZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICAgIH0pOyAvLyBPQ1Ig7JmE66OMIOyLnOygkOyXkCBjYW1lcmEgcHJldmlldyBvZmZcblxuICAgICAgICAgICAgICBpZiAodGhpcy4jc3NhTW9kZSkge1xuICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgICBzc2FSZXN1bHQgPSBhd2FpdCB0aGlzLiNzdGFydFRydXRoKHRoaXMuI29jclR5cGUsIGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gXCJGQUtFXCIpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiNzc2FSZXRyeUNvdW50IDwgdGhpcy4jb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc3NhUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgdGhpcy4jb25TdWNjZXNzUHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgb2NyX3R5cGU6IHRoaXMuI29jclR5cGUsXG4gICAgICAgICAgICAgICAgb2NyX2RhdGE6IHBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLiNvY3JUeXBlLCB0aGlzLiNzc2FNb2RlLCB0aGlzLiNvY3JSZXN1bHQsIHNzYVJlc3VsdCwgdGhpcy4jc3NhUmV0cnlDb3VudCksXG4gICAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogdGhpcy4jaW1nRGF0YVVybCxcbiAgICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogdGhpcy4jbWFza0ltYWdlLFxuICAgICAgICAgICAgICAgIHNzYV9tb2RlOiB0aGlzLiNzc2FNb2RlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLiNjbGVhckludGVydmFsVGltZXJzKCk7IC8vIGZvciBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yJztcbiAgICAgICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gXCI6IFwiICsgZS5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuI3JlY292ZXJ5U2NhbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNvbkZhaWx1cmVQcm9jZXNzKFwiV0EwMDFcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuI2NsZWFySW50ZXJ2YWxUaW1lcnMoKTsgLy8gZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRoaXMuI2ludGVydmFsTG9jayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LCAxKTtcbiAgICB9KTtcbiAgfVxuICAjb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KSB7XG4gICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgIGlmIChyZXZpZXdfcmVzdWx0LnNzYV9tb2RlKSB7XG4gICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUyk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICBcInJlc3VsdF9jb2RlXCI6IFwiTjEwMFwiLFxuICAgICAgICBcInJlc3VsdF9tZXNzYWdlXCI6IFwiT0suXCJcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwic3VjY2Vzc1wiLFxuICAgICAgcmV2aWV3X3Jlc3VsdDogcmV2aWV3X3Jlc3VsdFxuICAgIH07XG4gICAgaWYgKHRoaXMuI29uU3VjY2Vzcykge1xuICAgICAgdGhpcy4jb25TdWNjZXNzKHJlc3VsdCk7XG4gICAgICB0aGlzLiNvblN1Y2Nlc3MgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gICNvbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRCk7XG4gICAgbGV0IGVycm9yRGV0YWlsID0gXCJcIjtcbiAgICBpZiAoZT8udG9TdHJpbmcoKSkgZXJyb3JEZXRhaWwgKz0gZS50b1N0cmluZygpO1xuICAgIGlmIChlPy5zdGFjaykgZXJyb3JEZXRhaWwgKz0gZS5zdGFjaztcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgXCJyZXN1bHRfY29kZVwiOiByZXN1bHRDb2RlLFxuICAgICAgICBcInJlc3VsdF9tZXNzYWdlXCI6IGVycm9yTWVzc2FnZVxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogXCJmYWlsZWRcIixcbiAgICAgIHJldmlld19yZXN1bHQ6IHtcbiAgICAgICAgb2NyX3R5cGU6IHRoaXMuI29jclR5cGUsXG4gICAgICAgIGVycm9yX2RldGFpbDogZXJyb3JEZXRhaWxcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0aGlzLiNvbkZhaWx1cmUpIHtcbiAgICAgIHRoaXMuI29uRmFpbHVyZShyZXN1bHQpO1xuICAgICAgdGhpcy4jb25GYWlsdXJlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBhc3luYyAjc3RhcnRTY2FuKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuI3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgYXdhaXQgdGhpcy4jc3RhcnRTY2FuSW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyAjcmVjb3ZlcnlTY2FuKCkge1xuICAgIHZvaWQgMDtcbiAgICB0aGlzLiNyZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgYXdhaXQgdGhpcy4jc3RhcnRTY2FuKCk7XG4gIH1cbiAgc3RvcFNjYW4oKSB7XG4gICAgdGhpcy4jY2xlYXJJbnRlcnZhbFRpbWVycygpO1xuICAgIGNvbnN0IHtcbiAgICAgIGNhbnZhc1xuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICAgIHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuICBzdG9wU3RyZWFtKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuI3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy4jc3RyZWFtKSB7XG4gICAgICB0aGlzLiNzdHJlYW0uc3RvcCAmJiB0aGlzLiNzdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuI3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy4jc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgdm9pZCAwO1xuICAgICAgaWYgKHRyYWNrcyAmJiB0cmFja3MubGVuZ3RoKSB7XG4gICAgICAgIHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLiNzdHJlYW0gPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiog66mU66qo66asIGFsbG9jYXRpb24gZnJlZSDtlajsiJggKi9cbiAgY2xlYW51cCgpIHtcbiAgICB0aGlzLiNkZXN0cm95U2Nhbm5lckFkZHJlc3MoKTtcbiAgICB0aGlzLiNkZXN0cm95QnVmZmVyKCk7XG4gICAgdGhpcy4jZGVzdHJveVByZXZJbWFnZSgpO1xuICAgIHRoaXMuI2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCk7XG4gIH1cbiAgI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG4gICNjbGVhckludGVydmFsVGltZXJzKCkge1xuICAgIGlmICh0aGlzLiNpbnRlcnZhbFRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuI2ludGVydmFsVGltZXIpO1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy4jaW50ZXJ2YWxUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVc2VCT0NSOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU9BLFFBQVEsTUFBTSx1QkFBdUI7QUFDNUMsT0FBT0MsTUFBTSxNQUFNLHFCQUFxQjtBQUN4QyxJQUFJQyxRQUFRO0FBQUMsSUFBQUMsVUFBQSxvQkFBQUMsT0FBQTtBQUFBLElBQUFDLFlBQUEsb0JBQUFELE9BQUE7QUFBQSxJQUFBRSxVQUFBLG9CQUFBRixPQUFBO0FBQUEsSUFBQUcsaUJBQUEsb0JBQUFILE9BQUE7QUFBQSxJQUFBSSxRQUFBLG9CQUFBSixPQUFBO0FBQUEsSUFBQUssUUFBQSxvQkFBQUwsT0FBQTtBQUFBLElBQUFNLFFBQUEsb0JBQUFOLE9BQUE7QUFBQSxJQUFBTyxjQUFBLG9CQUFBUCxPQUFBO0FBQUEsSUFBQVEsVUFBQSxvQkFBQVIsT0FBQTtBQUFBLElBQUFTLFVBQUEsb0JBQUFULE9BQUE7QUFBQSxJQUFBVSxt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
