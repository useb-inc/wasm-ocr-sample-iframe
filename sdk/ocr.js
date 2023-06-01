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
var _setCameraPermissionTimeoutTimer = /*#__PURE__*/new WeakSet();
var _proceedCameraPermission = /*#__PURE__*/new WeakSet();
var _setStyle = /*#__PURE__*/new WeakSet();
var _changeStage = /*#__PURE__*/new WeakSet();
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
    _classPrivateMethodInitSpec(this, _changeStage);
    _classPrivateMethodInitSpec(this, _setStyle);
    _classPrivateMethodInitSpec(this, _proceedCameraPermission);
    _classPrivateMethodInitSpec(this, _setCameraPermissionTimeoutTimer);
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
      var ssaResult = null;
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
        if (ssaMode) {
          if (ocrType.indexOf("-ssa") > -1) {
            ssaResult = _classPrivateFieldGet(this, _OCREngine).scanTruth(address, resultBuffer);
          } else {
            throw new Error('SSA Mode is true. but, ocrType is invalid : ' + ocrType);
          }
          _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.OCR_RECOGNIZED_WITH_SSA);
        } else {
          _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.OCR_RECOGNIZED);
        }
      }
      var cropMode = false;
      if (ocrType.indexOf("credit") > -1) {
        cropMode = true;
      }
      var originImage = yield _classPrivateMethodGet(this, _getImageBase, _getImageBase2).call(this, address, false, cropMode);
      var maskImage = yield _classPrivateMethodGet(this, _getImageBase, _getImageBase2).call(this, address, true, cropMode);
      maskImage = maskImage === 'data:' ? null : maskImage;
      return [ocrResult, originImage, maskImage, ssaResult];
    } catch (e) {
      void 0;
      throw e;
    }
  });
  return _startRecognition3.apply(this, arguments);
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
      _classPrivateFieldGet(this, _onInProgressChange).call(this, val, _classPrivateFieldGet(this, _topUI), 'top', _classPrivateFieldGet(this, _options).useTopUITextMsg);
    }
    if (_classPrivateFieldGet(this, _options).useMiddleUI || _classPrivateFieldGet(this, _options).useMiddleUITextMsg) {
      _classPrivateFieldGet(this, _onInProgressChange).call(this, val, _classPrivateFieldGet(this, _middleUI), 'middle', _classPrivateFieldGet(this, _options).useMiddleUITextMsg);
    }
    if (_classPrivateFieldGet(this, _options).useBottomUI || _classPrivateFieldGet(this, _options).useBottomUITextMsg) {
      _classPrivateFieldGet(this, _onInProgressChange).call(this, val, _classPrivateFieldGet(this, _bottomUI), 'bottom', _classPrivateFieldGet(this, _options).useBottomUITextMsg);
    }
  }
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
    bottomUI
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
    bottomUI
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

          var [ocrResult, imgDataUrl, maskImage, ssaResult] = yield _classPrivateMethodGet(_this5, _startRecognition, _startRecognition2).call(_this5, address, _classPrivateFieldGet(_this5, _ocrType), _classPrivateFieldGet(_this5, _ssaMode));
          // success case
          if (ocrResult !== false) {
            if (_classPrivateFieldGet(_this5, _ssaMode)) {
              void 0;
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
              ocr_data: parser.parseOcrResult(_classPrivateFieldGet(_this5, _ocrType), _classPrivateFieldGet(_this5, _ssaMode), ocrResult, ssaResult, _classPrivateFieldGet(_this5, _ssaRetryCount)),
              ocr_origin_image: imgDataUrl,
              ocr_masking_image: maskImage,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJpbnN0YW5jZSIsIl9PQ1JFbmdpbmUiLCJXZWFrTWFwIiwiX2luaXRpYWxpemVkIiwiX3ByZWxvYWRlZCIsIl9wcmVsb2FkaW5nU3RhdHVzIiwiX2xpY2Vuc2UiLCJfb2NyVHlwZSIsIl9zc2FNb2RlIiwiX3NzYVJldHJ5Q291bnQiLCJfb25TdWNjZXNzIiwiX29uRmFpbHVyZSIsIl9vbkluUHJvZ3Jlc3NDaGFuZ2UiLCJfb2NyVHlwZUxpc3QiLCJfb2NyVHlwZVN0cmluZyIsIl9wYWdlRW5kIiwiX29jciIsIl9jYW52YXMiLCJfcm90YXRpb25DYW52YXMiLCJfdmlkZW8iLCJfdmlkZW9XcmFwIiwiX2d1aWRlQm94IiwiX2d1aWRlQm94V3JhcCIsIl9tYXNrQm94V3JhcCIsIl9wcmV2ZW50VG9GcmVlemVWaWRlbyIsIl9jdXN0b21VSVdyYXAiLCJfdG9wVUkiLCJfbWlkZGxlVUkiLCJfYm90dG9tVUkiLCJfQnVmZmVyIiwiX3Jlc3VsdEJ1ZmZlciIsIl9QcmV2SW1hZ2UiLCJfc3RyaW5nT25XYXNtSGVhcCIsIl9jYW1TZXRDb21wbGV0ZSIsIl9yZXNvbHV0aW9uV2lkdGgiLCJfcmVzb2x1dGlvbkhlaWdodCIsIl92aWRlb1dpZHRoIiwiX3ZpZGVvSGVpZ2h0IiwiX3Jlc291cmNlc0xvYWRlZCIsIl9pbnRlcnZhbFRpbWVyIiwiX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQiLCJfc3RyZWFtIiwiX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2siLCJfZmFjaW5nTW9kZUNvbnN0cmFpbnQiLCJfdWlPcmllbnRhdGlvbiIsIl9wcmV2VWlPcmllbnRhdGlvbiIsIl92aWRlb09yaWVudGF0aW9uIiwiX3Rocm90dGxpbmdSZXNpemVUaW1lciIsIl90aHJvdHRsaW5nUmVzaXplRGVsYXkiLCJfbWF4UmV0cnlDb3VudEdldEFkZHJlc3MiLCJfcmV0cnlDb3VudEdldEFkZHJlc3MiLCJfZGV2aWNlSW5mbyIsIl9pc1JvdGF0ZWQ5MG9yIiwiX2luUHJvZ3Jlc3NTdGVwIiwiX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAiLCJfaXNJblByb2dyZXNzSGFuZGxlUmVzaXplIiwiX2ludGVydmFsTG9jayIsIl9ndWlkZUJveFJhdGlvQnlXaWR0aCIsIl92aWRlb1JhdGlvQnlIZWlnaHQiLCJfZ3VpZGVCb3hSZWR1Y2VSYXRpbyIsIl9jcm9wSW1hZ2VTaXplV2lkdGgiLCJfY3JvcEltYWdlU2l6ZUhlaWdodCIsIl9vcHRpb25zIiwiX3dhaXRQcmVsb2FkZWQiLCJXZWFrU2V0IiwiX3dpbmRvd0V2ZW50QmluZCIsIl9zbGVlcCIsIl9ibG9iVG9CYXNlIiwiX2dldFN0cmluZ09uV2FzbUhlYXAiLCJfc2V0VmlkZW9SZXNvbHV0aW9uIiwiX2dldFNjYW5uZXJBZGRyZXNzIiwiX2dldEJ1ZmZlciIsIl9nZXRJbWFnZUJhc2UiLCJfZGVzdHJveUJ1ZmZlciIsIl9kZXN0cm95UHJldkltYWdlIiwiX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwIiwiX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcyIsIl9pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUiLCJfZ2V0Um90YXRpb25EZWdyZWUiLCJfZ2V0TWlycm9yTW9kZSIsIl9jcm9wSW1hZ2VGcm9tVmlkZW8iLCJfcm90YXRlIiwiX2lzQ2FyZGJveERldGVjdGVkIiwiX3N0YXJ0UmVjb2duaXRpb24iLCJfc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiIsIl9zZXRTdHlsZSIsIl9jaGFuZ2VTdGFnZSIsIl9nZXRJbnB1dERldmljZXMiLCJfc2V0dXBEb21FbGVtZW50cyIsIl9zZXR1cFZpZGVvIiwiX2FkanVzdFN0eWxlIiwiX2Nsb3NlQ2FtZXJhIiwiX2xvYWRSZXNvdXJjZXMiLCJfc3RhcnRTY2FuSW1wbCIsIl9vblN1Y2Nlc3NQcm9jZXNzIiwiX29uRmFpbHVyZVByb2Nlc3MiLCJfc3RhcnRTY2FuIiwiX3JlY292ZXJ5U2NhbiIsIl9jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfY2xlYXJJbnRlcnZhbFRpbWVycyIsIlVzZUJPQ1IiLCJjb25zdHJ1Y3RvciIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9kZWZpbmVQcm9wZXJ0eSIsIk5PTkUiLCJOT1RfUkVBRFkiLCJSRUFEWSIsIkNBUkRfREVURUNUX1NVQ0NFU1MiLCJDQVJEX0RFVEVDVF9GQUlMRUQiLCJPQ1JfUkVDT0dOSVpFRCIsIk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBIiwiT0NSX1NVQ0NFU1MiLCJPQ1JfU1VDQ0VTU19XSVRIX1NTQSIsIk9DUl9GQUlMRUQiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJET05FIiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJ3cml0YWJsZSIsInZhbHVlIiwiUFJFTE9BRElOR19TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZVRvcFVJIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUkiLCJ1c2VNaWRkbGVVSVRleHRNc2ciLCJ1c2VCb3R0b21VSSIsInVzZUJvdHRvbVVJVGV4dE1zZyIsImZyYW1lQm9yZGVyU3R5bGUiLCJtYXNrX2ZyYW1lIiwiY2xpcF9mcmFtZSIsIndpZHRoIiwic3R5bGUiLCJyYWRpdXMiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9mYWlsZWQiLCJkZXRlY3Rfc3VjY2VzcyIsInJlY29nbml6ZWQiLCJyZWNvZ25pemVkX3dpdGhfc3NhIiwib2NyX2ZhaWxlZCIsIm9jcl9zdWNjZXNzIiwib2NyX3N1Y2Nlc3Nfd2l0aF9zc2EiLCJyZXNvdXJjZUJhc2VVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImRldmljZUxhYmVsIiwidmlkZW9UYXJnZXRJZCIsInJvdGF0aW9uRGVncmVlIiwibWlycm9yTW9kZSIsInNzYU1heFJldHJ5Q291bnQiLCJwcmVsb2FkaW5nIiwiX3RoaXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsImlzUHJlbG9hZGVkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9sb2FkUmVzb3VyY2VzMiIsImNhbGwiLCJpc0luaXRpYWxpemVkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiZ2V0UHJlbG9hZGluZ1N0YXR1cyIsImdldE9DUkVuZ2luZSIsImluaXQiLCJzZXR0aW5ncyIsImxpY2Vuc2VLZXkiLCJFcnJvciIsIm1lcmdlZE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJzZXRPcHRpb24iLCJfd2luZG93RXZlbnRCaW5kMiIsImdldE9zVmVyc2lvbiIsImdldE9wdGlvbiIsImdldE9jclR5cGUiLCJ0eXBlIiwiZ2V0IiwiZ2V0VUlPcmllbnRhdGlvbiIsImdldFZpZGVvT3JpZW50YXRpb24iLCJzdGFydE9DUiIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIl9hcmd1bWVudHMiLCJhcmd1bWVudHMiLCJfdGhpczIiLCJvbkluUHJvZ3Jlc3NDaGFuZ2UiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwiZ2V0T0NSRWxlbWVudHMiLCJ0b3BVSSIsIm1pZGRsZVVJIiwiYm90dG9tVUkiLCJfY2hhbmdlU3RhZ2UyIiwicHJlbG9hZGluZ1N0YXR1cyIsIl93YWl0UHJlbG9hZGVkMiIsImNvbmNhdCIsIl9zdGFydFNjYW4yIiwiZSIsInN0b3BPQ1IiLCJjbGVhbnVwIiwiX2Nsb3NlQ2FtZXJhMiIsInJlc3RhcnRPQ1IiLCJvY3JUeXBlIiwiX3RoaXMzIiwiY2hlY2tVSU9yaWVudGF0aW9uIiwiY3VycmVudCIsIm9jciIsImlzQ2hhbmdlZCIsInN0b3BTY2FuIiwiX2NsZWFySW50ZXJ2YWxUaW1lcnMyIiwiY2FudmFzIiwiY2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJ3aWxsUmVhZEZyZXF1ZW50bHkiLCJjbGVhclJlY3QiLCJoZWlnaHQiLCJzdG9wU3RyZWFtIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzdG9wIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwiX2Rlc3Ryb3lTY2FubmVyQWRkcmVzczIiLCJfZGVzdHJveUJ1ZmZlcjIiLCJfZGVzdHJveVByZXZJbWFnZTIiLCJfZGVzdHJveVN0cmluZ09uV2FzbUhlYXAyIiwiX3dhaXRQcmVsb2FkZWQzIiwiYXBwbHkiLCJfdGhpczYiLCJ3YWl0aW5nUmV0cnlDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hlY2siLCJzZXRUaW1lb3V0IiwiX3RoaXNfIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwic2tpcFRvdWNoQWN0aW9uZm9yWm9vbSIsImV2IiwidG91Y2hlcyIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJvbmJlZm9yZXVubG9hZCIsImhhbmRsZVJlc2l6ZSIsIl9yZWYiLCJfc2xlZXAyIiwibXMiLCJfYmxvYlRvQmFzZTIiLCJibG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJfZ2V0U3RyaW5nT25XYXNtSGVhcDIiLCJsZW5ndGhCeXRlcyIsImxlbmd0aEJ5dGVzVVRGOCIsIl9tYWxsb2MiLCJzdHJpbmdUb1VURjgiLCJfc2V0VmlkZW9SZXNvbHV0aW9uMiIsInZpZGVvRWxlbWVudCIsImlzU3VwcG9ydGVkUmVzb2x1dGlvbiIsInJlc29sdXRpb25UZXh0IiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0Iiwic3JjT2JqZWN0IiwiX2dldFNjYW5uZXJBZGRyZXNzMiIsImluY2x1ZGVzIiwiYWRkcmVzcyIsImRlc3Ryb3lDYWxsYmFjayIsInN0cmluZ09uV2FzbUhlYXAiLCJnZXRJRENhcmRTY2FubmVyIiwiZGVzdHJveUlEQ2FyZFNjYW5uZXIiLCJnZXRQYXNzcG9ydFNjYW5uZXIiLCJkZXN0cm95UGFzc3BvcnRTY2FubmVyIiwiZ2V0QWxpZW5TY2FubmVyIiwiZGVzdHJveUFsaWVuU2Nhbm5lciIsImdldENyZWRpdFNjYW5uZXIiLCJkZXN0cm95Q3JlZGl0U2Nhbm5lciIsIl9mcmVlIiwiX3RoaXMkcmV0cnlDb3VudEdldEFkIiwiX3RoaXMkcmV0cnlDb3VudEdldEFkMiIsIl9nZXRCdWZmZXIyIiwiX2dldEltYWdlQmFzZTIiLCJfeCIsIl94MiIsIl94MyIsIl9nZXRJbWFnZUJhc2UzIiwibWFza01vZGUiLCJjcm9wTW9kZSIsImVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZSIsImpwZ1NpemUiLCJnZXRFbmNvZGVkSnBnU2l6ZSIsImpwZ1BvaW50ZXIiLCJnZXRFbmNvZGVkSnBnQnVmZmVyIiwicmVzdWx0VmlldyIsIlVpbnQ4QXJyYXkiLCJIRUFQOCIsImJ1ZmZlciIsIkJsb2IiLCJkZXN0cm95RW5jb2RlZEpwZyIsIl9pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUyIiwiX2dldFJvdGF0aW9uRGVncmVlMiIsIl9nZXRNaXJyb3JNb2RlMiIsIl9jcm9wSW1hZ2VGcm9tVmlkZW8yIiwiX2Nyb3BJbWFnZUZyb21WaWRlbzMiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwicm90YXRpb25DYW52YXMiLCJjYWxjQ2FudmFzIiwiY2FsY1ZpZGVvV2lkdGgiLCJjYWxjVmlkZW9IZWlnaHQiLCJjYWxjVmlkZW9DbGllbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCIsImNhbGNDcm9wSW1hZ2VTaXplSGVpZ2h0IiwiY2FsY1ZpZGVvT3JpZW50YXRpb24iLCJjYWxjTWF4U1dpZHRoIiwiY2FsY01heFNIZWlnaHQiLCJzeCIsInN5IiwicmF0aW8iLCJzV2lkdGgiLCJNYXRoIiwibWluIiwicm91bmQiLCJzSGVpZ2h0IiwiY2FsY0NvbnRleHQiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9yb3RhdGUyIiwiX3g0IiwiX3g1IiwiX3g2IiwiX3JvdGF0ZTMiLCJkZWdyZWUiLCJpbWciLCJJbWFnZSIsInNyYyIsInRlbXBDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZW1wQ29udGV4dCIsInBvc2l0aW9uIiwidHJhbnNsYXRlIiwicm90YXRlIiwiUEkiLCJuZXdJbWFnZURhdGEiLCJyZXN0b3JlIiwiX2lzQ2FyZGJveERldGVjdGVkMiIsIl94NyIsIl9pc0NhcmRib3hEZXRlY3RlZDMiLCJib3hUeXBlIiwic2V0IiwiZGF0YSIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfc3RhcnRSZWNvZ25pdGlvbjIiLCJfeDgiLCJfeDkiLCJfeDEwIiwiX3N0YXJ0UmVjb2duaXRpb24zIiwic3NhTW9kZSIsIm9jclJlc3VsdCIsInNzYVJlc3VsdCIsInJlc3VsdEJ1ZmZlciIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0Iiwic2NhblRydXRoIiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJfc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjIiLCJfdGhpczQiLCJfY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyMiIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbjIiLCJfcHJvY2VlZENhbWVyYVBlcm1pc3Npb24zIiwiaXNQYXNzcG9ydCIsIl9zZXR1cFZpZGVvMiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfYWRqdXN0U3R5bGUyIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX29uRmFpbHVyZVByb2Nlc3MyIiwiX3NldFN0eWxlMiIsImVsIiwiYXNzaWduIiwidmFsIiwiZm9yY2VVcGRhdGUiLCJndWlkZUJveCIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsIl9nZXRJbnB1dERldmljZXMyIiwiX3gxMSIsIl94MTIiLCJfZ2V0SW5wdXREZXZpY2VzMyIsImtpbmQiLCJsYWJlbCIsIm1lZGlhRGV2aWNlcyIsImRldmljZXMiLCJlbnVtZXJhdGVEZXZpY2VzIiwidmlkZW9EZXZpY2VzIiwiZmlsdGVyIiwiZGV2aWNlIiwiZ2V0Q2FwYWJpbGl0aWVzIiwiX2NhcCRmYWNpbmdNb2RlIiwiY2FwIiwiZmFjaW5nTW9kZSIsIl9zZXR1cERvbUVsZW1lbnRzMiIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsIm1hc2tCb3hXcmFwIiwicHJldmVudFRvRnJlZXplVmlkZW8iLCJjdXN0b21VSVdyYXAiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJvY3JTdHlsZSIsIndyYXBTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNldEF0dHJpYnV0ZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwidmlkZW9TdHlsZSIsInJvdGF0ZUNzcyIsIm1pcnJvckNzcyIsInJvdGF0ZUFuZE1pcnJvckNzcyIsIl9vYmplY3RTcHJlYWQiLCJjYW52YXNTdHlsZSIsImxlZnQiLCJ0b3AiLCJib3JkZXIiLCJyaWdodCIsImJvdHRvbSIsImN1c3RvbVVJV3JhcFN0eWxlIiwiX3gxMyIsIl9zZXR1cFZpZGVvMyIsImRldmljZUlkTGlzdCIsIm1hcCIsImRldmljZUlkIiwiY29uc3RyYWludFdpZHRoIiwiY29uc3RyYWludEhlaWdodCIsImlkZWFsIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInpvb20iLCJmb2N1c01vZGUiLCJ3aGl0ZUJhbGFuY2VNb2RlIiwic3RyZWFtIiwiZ2V0VXNlck1lZGlhIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsIm5ld1ZpZGVvV2lkdGgiLCJuZXdWaWRlb0hlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwidmlkZW9SYXRpb0J5SGVpZ2h0IiwicmVkdWNlZEd1aWRlQm94V2lkdGgiLCJyZWR1Y2VkR3VpZGVCb3hIZWlnaHQiLCJ2aWRlb0lubmVyR2FwIiwiYmFja2dyb3VuZENvbG9yIiwibWFza0JveElubmVyIiwicXVlcnlTZWxlY3RvciIsInIiLCJpc05hTiIsIm1hc2tCb3hJbm5lcldpZHRoIiwibWF4IiwibWFza0JveElubmVySGVpZ2h0IiwiX2xvYWRSZXNvdXJjZXMzIiwidXJsIiwiZmV0Y2giLCJocmVmIiwidGhlbiIsInJlcyIsInRleHQiLCJyZWdleCIsInNvdXJjZSIsInJlcGxhY2UiLCJldmFsIiwib25SdW50aW1lSW5pdGlhbGl6ZWQiLCJfcmVmNiIsIl94MTQiLCJfc3RhcnRTY2FuSW1wbDIiLCJfdGhpczUiLCJyZWplY3QiLCJkZXRlY3RlZCIsInNldEludGVydmFsIiwicmVzb2x1dGlvbl93IiwicmVzb2x1dGlvbl9oIiwiX2NsYXNzUHJpdmF0ZUZpZWxkRGVzdHJ1Y3R1cmVTZXQiLCJfdGhpcyRzc2FSZXRyeUNvdW50IiwiX3RoaXMkc3NhUmV0cnlDb3VudDIiLCJfb25TdWNjZXNzUHJvY2VzczIiLCJvY3JfdHlwZSIsIm9jcl9kYXRhIiwicGFyc2VPY3JSZXN1bHQiLCJvY3Jfb3JpZ2luX2ltYWdlIiwib2NyX21hc2tpbmdfaW1hZ2UiLCJzc2FfbW9kZSIsIl9yZWNvdmVyeVNjYW4yIiwicmV2aWV3X3Jlc3VsdCIsImFwaV9yZXNwb25zZSIsInJlc3VsdENvZGUiLCJlcnJvckRldGFpbCIsInN0YWNrIiwiZXJyb3JfZGV0YWlsIiwiX3N0YXJ0U2NhbjMiLCJfcmVjb3ZlcnlTY2FuMyIsImNsZWFyVGltZW91dCIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlcyI6WyJvY3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIGdsb2JhbC1tb2R1bGUgKi9cbmltcG9ydCBkZXRlY3RvciBmcm9tICcuL2hlbHBlcnMvZGV0ZWN0b3IuanMnO1xuaW1wb3J0IHBhcnNlciBmcm9tICcuL2hlbHBlcnMvcGFyc2VyLmpzJztcbmxldCBpbnN0YW5jZTtcbmNsYXNzIFVzZUJPQ1Ige1xuICBJTl9QUk9HUkVTUyA9IHtcbiAgICBOT05FOiAnbm9uZScsXG4gICAgTk9UX1JFQURZOiAnbm90X3JlYWR5JyxcbiAgICBSRUFEWTogJ3JlYWR5JyxcbiAgICBDQVJEX0RFVEVDVF9TVUNDRVNTOiAnZGV0ZWN0X3N1Y2Nlc3MnLFxuICAgIENBUkRfREVURUNUX0ZBSUxFRDogJ2RldGVjdF9mYWlsZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEOiAncmVjb2duaXplZCcsXG4gICAgT0NSX1JFQ09HTklaRURfV0lUSF9TU0E6ICdyZWNvZ25pemVkX3dpdGhfc3NhJyxcbiAgICBPQ1JfU1VDQ0VTUzogJ29jcl9zdWNjZXNzJyxcbiAgICBPQ1JfU1VDQ0VTU19XSVRIX1NTQTogJ29jcl9zdWNjZXNzX3dpdGhfc3NhJyxcbiAgICBPQ1JfRkFJTEVEOiAnb2NyX2ZhaWxlZCdcbiAgfTtcbiAgUFJFTE9BRElOR19TVEFUVVMgPSB7XG4gICAgTk9UX1NUQVJURUQ6IC0xLFxuICAgIFNUQVJURUQ6IDAsXG4gICAgRE9ORTogMVxuICB9O1xuXG4gIC8qKiBwdWJsaWMgcHJvcGVydGllcyAqL1xuXG4gIC8qKiBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgI09DUkVuZ2luZSA9IG51bGw7XG4gICNpbml0aWFsaXplZCA9IGZhbHNlO1xuICAjcHJlbG9hZGVkID0gZmFsc2U7XG4gICNwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRDtcbiAgI2xpY2Vuc2U7XG4gICNvY3JUeXBlID0gbnVsbDtcbiAgI3NzYU1vZGUgPSBmYWxzZTtcbiAgI3NzYVJldHJ5Q291bnQgPSAwO1xuICAjb25TdWNjZXNzID0gbnVsbDtcbiAgI29uRmFpbHVyZSA9IG51bGw7XG4gICNvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsO1xuICAjb2NyVHlwZUxpc3QgPSBbJ2lkY2FyZCcsICdkcml2ZXInLCAncGFzc3BvcnQnLCAnZm9yZWlnbi1wYXNzcG9ydCcsICdhbGllbicsICdjcmVkaXQnLCAnaWRjYXJkLXNzYScsICdkcml2ZXItc3NhJywgJ3Bhc3Nwb3J0LXNzYScsICdmb3JlaWduLXBhc3Nwb3J0LXNzYScsICdhbGllbi1zc2EnLCAnY3JlZGl0LXNzYSddO1xuICAjb2NyVHlwZVN0cmluZyA9IG5ldyBNYXAoW1tcIjFcIiwgXCJpZGNhcmRcIl0sIFtcIjJcIiwgXCJkcml2ZXJcIl0sIFtcIjNcIiwgXCJwYXNzcG9ydFwiXSwgW1wiNFwiLCBcImZvcmVpZ24tcGFzc3BvcnRcIl0sIFtcIjVcIiwgXCJhbGllblwiXSwgW1wiNS0xXCIsIFwiYWxpZW5cIl0sIFtcIjUtMlwiLCBcImFsaWVuXCJdLCBbXCI1LTNcIiwgXCJhbGllblwiXV0pO1xuICAjcGFnZUVuZCA9IGZhbHNlO1xuICAjb2NyO1xuICAjY2FudmFzO1xuICAjcm90YXRpb25DYW52YXM7XG4gICN2aWRlbztcbiAgI3ZpZGVvV3JhcDtcbiAgI2d1aWRlQm94O1xuICAjZ3VpZGVCb3hXcmFwO1xuICAjbWFza0JveFdyYXA7XG4gICNwcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgI2N1c3RvbVVJV3JhcDtcbiAgI3RvcFVJO1xuICAjbWlkZGxlVUk7XG4gICNib3R0b21VSTtcbiAgI0J1ZmZlciA9IG51bGw7XG4gICNyZXN1bHRCdWZmZXIgPSBudWxsO1xuICAjUHJldkltYWdlID0gbnVsbDtcbiAgI3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAjY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgI3Jlc29sdXRpb25XaWR0aCA9IDA7XG4gICNyZXNvbHV0aW9uSGVpZ2h0ID0gMDtcbiAgI3ZpZGVvV2lkdGggPSAwO1xuICAjdmlkZW9IZWlnaHQgPSAwO1xuICAjcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICNpbnRlcnZhbFRpbWVyO1xuICAjY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjtcbiAgI3JlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuICAjc3RyZWFtO1xuICAjZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICNmYWNpbmdNb2RlQ29uc3RyYWludCA9ICdlbnZpcm9ubWVudCc7XG4gICN1aU9yaWVudGF0aW9uID0gJyc7XG4gICNwcmV2VWlPcmllbnRhdGlvbiA9ICcnO1xuICAjdmlkZW9PcmllbnRhdGlvbiA9ICcnO1xuICAjdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgI3Rocm90dGxpbmdSZXNpemVEZWxheSA9IDUwMDtcbiAgI21heFJldHJ5Q291bnRHZXRBZGRyZXNzID0gMzAwOyAvLyDsnoTsi5xcbiAgI3JldHJ5Q291bnRHZXRBZGRyZXNzID0gMDsgLy8g7J6E7IucXG4gICNkZXZpY2VJbmZvO1xuICAjaXNSb3RhdGVkOTBvcjI3MCA9IGZhbHNlO1xuICAjaW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTtcbiAgI3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PTkU7XG4gICNpc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgI2ludGVydmFsTG9jayA9IGZhbHNlO1xuICAjZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSAwLjg7IC8vIOyImOygleu2iOqwgFxuICAjdmlkZW9SYXRpb0J5SGVpZ2h0ID0gMC45OyAvLyDsiJjsoJXrtojqsIBcbiAgI2d1aWRlQm94UmVkdWNlUmF0aW8gPSAwLjg7IC8vIOyImOygleu2iOqwgFxuICAjY3JvcEltYWdlU2l6ZVdpZHRoID0gMDtcbiAgI2Nyb3BJbWFnZVNpemVIZWlnaHQgPSAwO1xuXG4gIC8qKiBEZWZhdWx0IG9wdGlvbnMgKi9cbiAgI29wdGlvbnMgPSBuZXcgT2JqZWN0KHtcbiAgICBzaG93Q2xpcEZyYW1lOiBmYWxzZSxcbiAgICBzaG93Q2FudmFzUHJldmlldzogZmFsc2UsXG4gICAgdXNlVG9wVUk6IHRydWUsXG4gICAgdXNlVG9wVUlUZXh0TXNnOiBmYWxzZSxcbiAgICB1c2VNaWRkbGVVSTogdHJ1ZSxcbiAgICB1c2VNaWRkbGVVSVRleHRNc2c6IHRydWUsXG4gICAgdXNlQm90dG9tVUk6IHRydWUsXG4gICAgdXNlQm90dG9tVUlUZXh0TXNnOiBmYWxzZSxcbiAgICBmcmFtZUJvcmRlclN0eWxlOiB7XG4gICAgICBtYXNrX2ZyYW1lOiAnIzIwMjAyMycsXG4gICAgICAvLyDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLFxuICAgICAgLy8g65Sl7Y287ZSMICjsiJjsoJXrtojqsIApXG4gICAgICB3aWR0aDogNSxcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIG5vdF9yZWFkeTogJyMwMDAwMDAnLFxuICAgICAgLy8g6rKA7KCVXG4gICAgICByZWFkeTogJyNiOGI4YjgnLFxuICAgICAgLy8g7ZqM7IOJXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICAvLyDrs7TrnbxcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzVlOGZmZicsXG4gICAgICAvLyDtlZjriphcbiAgICAgIHJlY29nbml6ZWQ6ICcjMDAzYWMyJyxcbiAgICAgIC8vIO2MjOuekVxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMwMDNhYzInLFxuICAgICAgLy8g7YyM656RXG4gICAgICBvY3JfZmFpbGVkOiAnI0ZBMTEzRCcsXG4gICAgICAvLyDruajqsJVcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzE0YjAwZScsXG4gICAgICAvLyDstIjroZ1cbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzE0YjAwZScgLy8g7LSI66GdXG4gICAgfSxcblxuICAgIHJlc291cmNlQmFzZVVybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICBkZXZpY2VMYWJlbDogJycsXG4gICAgdmlkZW9UYXJnZXRJZDogJycsXG4gICAgcm90YXRpb25EZWdyZWU6IDAsXG4gICAgbWlycm9yTW9kZTogZmFsc2UsXG4gICAgc3NhTWF4UmV0cnlDb3VudDogMFxuICB9KTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBhc3luYyBwcmVsb2FkaW5nKCkge1xuICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy4jcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRDtcbiAgICAgIGF3YWl0IHRoaXMuI2xvYWRSZXNvdXJjZXMoKTtcbiAgICAgIHRoaXMuI3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkU7XG4gICAgICB0aGlzLiNwcmVsb2FkZWQgPSB0cnVlO1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLiNpbml0aWFsaXplZDtcbiAgfVxuICBpc1ByZWxvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jcHJlbG9hZGVkO1xuICB9XG4gIGdldFByZWxvYWRpbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLiNPQ1JFbmdpbmU7XG4gIH1cbiAgaW5pdChzZXR0aW5ncykge1xuICAgIGlmICghISFzZXR0aW5ncy5saWNlbnNlS2V5KSB0aHJvdyBuZXcgRXJyb3IoJ0xpY2Vuc2Uga2V5IGlzIGVtcHR5Jyk7XG4gICAgdGhpcy4jbGljZW5zZSA9IHNldHRpbmdzLmxpY2Vuc2VLZXk7XG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuI29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy4jd2luZG93RXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLiNkZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLiNpbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldE9wdGlvbihzZXR0aW5ncykge1xuICAgIHRoaXMuI29wdGlvbnMgPSBzZXR0aW5ncztcbiAgfVxuICBnZXRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gIH1cbiAgZ2V0T2NyVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuI29jclR5cGVTdHJpbmcuZ2V0KHR5cGUpO1xuICB9XG4gIGdldFVJT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VpT3JpZW50YXRpb247XG4gIH1cbiAgZ2V0VmlkZW9PcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jdmlkZW9PcmllbnRhdGlvbjtcbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jb2NyVHlwZSA9IHR5cGU7XG4gICAgdGhpcy4jc3NhTW9kZSA9IHRoaXMuI29jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTE7XG4gICAgdGhpcy4jb25TdWNjZXNzID0gb25TdWNjZXNzO1xuICAgIHRoaXMuI29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBvbkluUHJvZ3Jlc3NDaGFuZ2U7XG4gICAgaWYgKG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlVG9wVUkpIHtcbiAgICAgICAgdGhpcy4jdG9wVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLnRvcFVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlTWlkZGxlVUkpIHtcbiAgICAgICAgdGhpcy4jbWlkZGxlVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm1pZGRsZVVJO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlQm90dG9tVUkpIHtcbiAgICAgICAgdGhpcy4jYm90dG9tVUkgPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLmJvdHRvbVVJO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW5pdGlhbGl6ZWQhJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCk7XG4gICAgICBpZiAoIXRoaXMuaXNQcmVsb2FkZWQoKSAmJiBwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGF3YWl0IHRoaXMuI3dhaXRQcmVsb2FkZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkUpIHtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhYm5vcm1hbGx5IHByZWxvYWRpbmcgc3RhdHVzLCBwcmVsb2FkZWQ6ICR7dGhpcy5pc1ByZWxvYWRlZCgpfSAvIHByZWxvYWRpbmdTdGF0dXM6ICR7dGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCl9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgYXdhaXQgdGhpcy4jc3RhcnRTY2FuKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9XG4gIH1cbiAgc3RvcE9DUigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgIHRoaXMuI29uU3VjY2VzcyA9IG51bGw7XG4gICAgdGhpcy4jb25GYWlsdXJlID0gbnVsbDtcbiAgfVxuICBhc3luYyByZXN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAvLyBhd2FpdCB0aGlzLnN0b3BPQ1IoKTtcbiAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgIGF3YWl0IHRoaXMuc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gIH1cblxuICAvKiogcHJpdmF0ZSBtZXRob2RzICovXG4gIGFzeW5jICN3YWl0UHJlbG9hZGVkKCkge1xuICAgIGxldCB3YWl0aW5nUmV0cnlDb3VudCA9IDA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzUHJlbG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FpdGluZ1JldHJ5Q291bnQrKztcbiAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgIGNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfTtcbiAgICAgIGNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgI3dpbmRvd0V2ZW50QmluZCgpIHtcbiAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuICAgIGlmICgvaXBob25lfGlwb2R8aXBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgY29uc3Qgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSA9IGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHNraXBUb3VjaEFjdGlvbmZvclpvb20sIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzXy4jcGFnZUVuZCA9IHRydWU7XG4gICAgICBfdGhpc18uY2xlYW51cCgpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy4jb2NyVHlwZSkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSkge1xuICAgICAgICBfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IHRydWU7XG4gICAgICAgIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICBfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBfdGhpc18ucmVzdGFydE9DUihfdGhpc18uI29jclR5cGUsIF90aGlzXy4jb25TdWNjZXNzLCBfdGhpc18uI29uRmFpbHVyZSwgX3RoaXNfLiNvbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uI3Rocm90dGxpbmdSZXNpemVUaW1lcikge1xuICAgICAgICBfdGhpc18uI3Rocm90dGxpbmdSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlUmVzaXplLCBfdGhpc18uI3Rocm90dGxpbmdSZXNpemVEZWxheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgI3NsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG4gICNibG9iVG9CYXNlNjQoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgfSk7XG4gIH1cbiAgLyoqIOudvOydtOyEvOyKpCDtgqTrpbwgaGVhcCDsl5AgYWxsb2NhdGlvbiAqL1xuICAjZ2V0U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAoISEhdGhpcy4jbGljZW5zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGljZW5zZSBLZXkgaXMgZW1wdHlcIik7XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aEJ5dGVzID0gdGhpcy4jT0NSRW5naW5lLmxlbmd0aEJ5dGVzVVRGOCh0aGlzLiNsaWNlbnNlKSArIDE7XG4gICAgdGhpcy4jc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuI09DUkVuZ2luZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICB0aGlzLiNPQ1JFbmdpbmUuc3RyaW5nVG9VVEY4KHRoaXMuI2xpY2Vuc2UsIHRoaXMuI3N0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICByZXR1cm4gdGhpcy4jc3RyaW5nT25XYXNtSGVhcDtcbiAgfVxuICAjc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCkge1xuICAgIGxldCBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSBmYWxzZTtcbiAgICBsZXQgcmVzb2x1dGlvblRleHQgPSAnbm90IHJlYWR5JztcbiAgICBpZiAoIXRoaXMuI2NhbVNldENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICAgIHJlc29sdXRpb25UZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjAgfHwgdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuI3ZpZGVvV2lkdGggPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcbiAgICB0aGlzLiN2aWRlb0hlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9O1xuICB9XG4gICNnZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLiNvY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgYWRkcmVzcyA9IDA7XG4gICAgICBsZXQgZGVzdHJveUNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGNvbnN0IHN0cmluZ09uV2FzbUhlYXAgPSB0aGlzLiNnZXRTdHJpbmdPbldhc21IZWFwKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgLy8gT0NSXG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy4jT0NSRW5naW5lLmRlc3Ryb3lJRENhcmRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuI09DUkVuZ2luZS5nZXRQYXNzcG9ydFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy4jT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldEFsaWVuU2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveUFsaWVuU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IHRoaXMuI09DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuI09DUkVuZ2luZS5kZXN0cm95Q3JlZGl0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLiNPQ1JFbmdpbmUuX2ZyZWUoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICBpZiAoYWRkcmVzcyA9PT0gMCkge1xuICAgICAgICBpZiAodGhpcy4jbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuI3JldHJ5Q291bnRHZXRBZGRyZXNzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgTGljZW5zZSBLZXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICB2b2lkIDA7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICAjZ2V0QnVmZmVyKCkge1xuICAgIGlmICghdGhpcy4jQnVmZmVyKSB7XG4gICAgICB0aGlzLiNCdWZmZXIgPSB0aGlzLiNPQ1JFbmdpbmUuX21hbGxvYyh0aGlzLiNyZXNvbHV0aW9uV2lkdGggKiB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0ICogNCk7XG4gICAgfVxuICAgIGlmICghdGhpcy4jcmVzdWx0QnVmZmVyKSB7XG4gICAgICB0aGlzLiNyZXN1bHRCdWZmZXIgPSB0aGlzLiNPQ1JFbmdpbmUuX21hbGxvYygyNTYpO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXMuI0J1ZmZlciwgdGhpcy4jcmVzdWx0QnVmZmVyXTtcbiAgfVxuICBhc3luYyAjZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKTtcbiAgICAgIGNvbnN0IGpwZ1NpemUgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ1NpemUoKTtcbiAgICAgIGNvbnN0IGpwZ1BvaW50ZXIgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ0J1ZmZlcigpO1xuICAgICAgY29uc3QgcmVzdWx0VmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuI09DUkVuZ2luZS5IRUFQOC5idWZmZXIsIGpwZ1BvaW50ZXIsIGpwZ1NpemUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0Vmlldyk7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3VsdF0sIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLiNibG9iVG9CYXNlNjQoYmxvYik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLmRlc3Ryb3lFbmNvZGVkSnBnKCk7XG4gICAgfVxuICB9XG4gIC8qKiBGcmVlIGJ1ZmZlciAqL1xuICAjZGVzdHJveUJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy4jQnVmZmVyKSB7XG4gICAgICB0aGlzLiNPQ1JFbmdpbmUuX2ZyZWUodGhpcy4jQnVmZmVyKTtcbiAgICAgIHRoaXMuI0J1ZmZlciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLiNyZXN1bHRCdWZmZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNyZXN1bHRCdWZmZXIpO1xuICAgICAgdGhpcy4jcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgUHJldkltYWdlIGJ1ZmZlciAqL1xuICAjZGVzdHJveVByZXZJbWFnZSgpIHtcbiAgICBpZiAodGhpcy4jUHJldkltYWdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiNPQ1JFbmdpbmUuX2ZyZWUodGhpcy4jUHJldkltYWdlKTtcbiAgICAgIHRoaXMuI1ByZXZJbWFnZSA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBmcmVlIHN0cmluZyBoZWFwIGJ1ZmZlciAqL1xuICAjZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKHRoaXMuI3N0cmluZ09uV2FzbUhlYXApIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIHRoaXMuI3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogZnJlZSBzY2FubmVyIGFkZHJlc3MgKi9cbiAgI2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpIHtcbiAgICBpZiAodGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFjaykge1xuICAgICAgdGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFjaygpO1xuICAgICAgdGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG4gICNpc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW9FbGVtZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLFxuICAgICAgcmVzb2x1dGlvblRleHRcbiAgICB9ID0gdGhpcy4jc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFJlc29sdXRpb24pIHtcbiAgICAgIGlmIChyZXNvbHV0aW9uVGV4dCAhPT0gJ25vdCByZWFkeScpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSZXNvbHV0aW9uO1xuICB9XG4gICNnZXRSb3RhdGlvbkRlZ3JlZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuI29wdGlvbnMucm90YXRpb25EZWdyZWUgJSAzNjAgKyAzNjApICUgMzYwO1xuICB9XG4gICNnZXRNaXJyb3JNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLiNvcHRpb25zLm1pcnJvck1vZGU7XG4gIH1cbiAgYXN5bmMgI2Nyb3BJbWFnZUZyb21WaWRlbygpIHtcbiAgICBpZiAoIXRoaXMuI2NhbVNldENvbXBsZXRlKSByZXR1cm4gW251bGwsIG51bGxdO1xuICAgIGxldCBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbdGhpcy4jcmVzb2x1dGlvbldpZHRoLCB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICAvLyBzb3VyY2UgaW1hZ2UgKG9yIHZpZGVvKVxuICAgIC8vIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSKIHN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSD4pSI4pSI4pSI4pSIIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgc3ggIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogc0hlaWdodCAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiBjYW52YXNcbiAgICAvLyDilIMgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICAgICAgICDilIPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAgICAgICAgc1dpZHRoICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICDilIogZHkgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg+KUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgZHggICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogZEhlaWdodCDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICBkV2lkdGggICAgICAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHkpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL2RyYXdJbWFnZVxuXG4gICAgbGV0IGNhbGNDYW52YXMgPSBjYW52YXM7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCA9IHRoaXMuI2Nyb3BJbWFnZVNpemVXaWR0aDtcbiAgICBsZXQgY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgPSB0aGlzLiNjcm9wSW1hZ2VTaXplSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb247XG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjQ3JvcEltYWdlU2l6ZVdpZHRoLCBjYWxjQ3JvcEltYWdlU2l6ZUhlaWdodF0gPSBbY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQsIGNhbGNDcm9wSW1hZ2VTaXplV2lkdGhdO1xuICAgICAgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW2NhbGNSZXNvbHV0aW9uX2gsIGNhbGNSZXNvbHV0aW9uX3ddO1xuICAgICAgY2FsY0NhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cbiAgICBsZXQgY2FsY01heFNXaWR0aCA9IDk5OTk5O1xuICAgIGxldCBjYWxjTWF4U0hlaWdodCA9IDk5OTk5O1xuICAgIGlmICh0aGlzLiN1aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLiN1aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzeCwgc3k7XG4gICAgY29uc3QgcmF0aW8gPSBjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0NsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQgKiByYXRpbyksIGNhbGNNYXhTSGVpZ2h0KTtcbiAgICBzeCA9IE1hdGgucm91bmQoKGNhbGNWaWRlb0NsaWVudFdpZHRoIC0gY2FsY0Nyb3BJbWFnZVNpemVXaWR0aCkgLyAyICogcmF0aW8pO1xuICAgIHN5ID0gTWF0aC5yb3VuZCgoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC0gY2FsY0Nyb3BJbWFnZVNpemVIZWlnaHQpIC8gMiAqIHJhdGlvKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy4jcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIHRoaXMuI2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyAjcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIGRlZ3JlZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmIChkZWdyZWUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShbaW1nRGF0YSwgaW1nRGF0YVVybF0pO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gaW1nRGF0YVVybDtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIC8vIGNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGV4dCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGVtcENhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgaWYgKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcud2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWdyZWUgPT09IDkwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLmhlaWdodCwgMCk7ZWxzZSBpZiAoZGVncmVlID09PSAxODApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO2Vsc2UgaWYgKGRlZ3JlZSA9PT0gMjcwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoMCwgaW1nLndpZHRoKTtcbiAgICAgICAgdGVtcENvbnRleHQucm90YXRlKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHRlbXBDb250ZXh0KTtcbiAgICAgICAgcmVzb2x2ZShbbmV3SW1hZ2VEYXRhLCB0ZW1wQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpXSk7XG4gICAgICAgIHRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jICNpc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCkge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLiNnZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IFtpbWdEYXRhXSA9IGF3YWl0IHRoaXMuI2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy4jT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuZGV0ZWN0X2lkY2FyZChidWZmZXIsIHRoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaXNDYXJkYm94RGV0ZWN0ZWQgcmVzdWx0IC09LS0tLS0nLCByZXN1bHQpXG4gICAgICByZXR1cm4gISFyZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyAjc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCBzc2FNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhZGRyZXNzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgbGV0IHNzYVJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuI29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy4jZ2V0QnVmZmVyKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuSURDYXJkKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhblBhc3Nwb3J0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhbkFsaWVuKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgIGNhc2UgJ2NyZWRpdC1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgaWYgKG9jclJlc3VsdCA9PT0gbnVsbCB8fCBvY3JSZXN1bHQgPT09ICcnIHx8IG9jclJlc3VsdCA9PT0gJ2ZhbHNlJyB8fCBvY3JSZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3NhTW9kZSkge1xuICAgICAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoXCItc3NhXCIpID4gLTEpIHtcbiAgICAgICAgICAgIHNzYVJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuVHJ1dGgoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTU0EgTW9kZSBpcyB0cnVlLiBidXQsIG9jclR5cGUgaXMgaW52YWxpZCA6ICcgKyBvY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBjcm9wTW9kZSA9IGZhbHNlO1xuICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcImNyZWRpdFwiKSA+IC0xKSB7XG4gICAgICAgIGNyb3BNb2RlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxldCBvcmlnaW5JbWFnZSA9IGF3YWl0IHRoaXMuI2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIGZhbHNlLCBjcm9wTW9kZSk7XG4gICAgICBsZXQgbWFza0ltYWdlID0gYXdhaXQgdGhpcy4jZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdHJ1ZSwgY3JvcE1vZGUpO1xuICAgICAgbWFza0ltYWdlID0gbWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZTtcbiAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlLCBzc2FSZXN1bHRdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNzZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIHRoaXMuI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy4jcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBhc3luYyAjcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy4jb2NyVHlwZS5pbmNsdWRlcygncGFzc3BvcnQnKTtcbiAgICAgIGF3YWl0IHRoaXMuI3NldHVwVmlkZW8oaXNQYXNzcG9ydCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpZGVvXG4gICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAvLyBjb25zdCBbdHJhY2tdID0gdGhpcy4jc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW4jaW5pdGlhbGl6ZSBjYXBhYmlsaXR5JywgY2FwYWJpbGl0eSk7XG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiB2aWRlbykge1xuICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHRoaXMuI3N0cmVhbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBdm9pZCB1c2luZyB0aGlzIGluIG5ldyBicm93c2VycywgYXMgaXQgaXMgZ29pbmcgYXdheS5cbiAgICAgICAgICB2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLiNzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLiN2aWRlb09yaWVudGF0aW9uID0gdmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvLnZpZGVvSGVpZ2h0IDwgMSA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB0aGlzLiNjYW1TZXRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy4jYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICB2aWRlby53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYW1lcmEgQWNjZXNzIFBlcm1pc3Npb24gaXMgbm90IGFsbG93ZWQnO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhpcy4jb25GYWlsdXJlUHJvY2VzcyhcIkU0MDNcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5uYW1lID09PSAnTm90UmVhZGFibGVFcnJvcicpIHtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgICAgdGhpcy4jc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpOyAvLyDsnqzqt4Ag7Zi47LacXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHN0eWxlKTtcbiAgfVxuICAjY2hhbmdlU3RhZ2UodmFsLCBmb3JjZVVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuI3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPT09IHZhbCAmJiBmb3JjZVVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICB0aGlzLiNpblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveFxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnN0eWxlLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzICsgJ3B4JyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXVxuICAgIH07XG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLiNzZXRTdHlsZShndWlkZUJveCwgc3R5bGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy4jb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy4jb3B0aW9ucy51c2VUb3BVSSB8fCB0aGlzLiNvcHRpb25zLnVzZVRvcFVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB2YWwsIHRoaXMuI3RvcFVJLCAndG9wJywgdGhpcy4jb3B0aW9ucy51c2VUb3BVSVRleHRNc2cpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlTWlkZGxlVUkgfHwgdGhpcy4jb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy4jb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdmFsLCB0aGlzLiNtaWRkbGVVSSwgJ21pZGRsZScsIHRoaXMuI29wdGlvbnMudXNlTWlkZGxlVUlUZXh0TXNnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLiNvcHRpb25zLnVzZUJvdHRvbVVJIHx8IHRoaXMuI29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuI29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHZhbCwgdGhpcy4jYm90dG9tVUksICdib3R0b20nLCB0aGlzLiNvcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jICNnZXRJbnB1dERldmljZXMoa2luZCwgbGFiZWwpIHtcbiAgICAvLyB0aHJvdyBlcnJvciBpZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGRldmljZXMgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBkZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4ge1xuICAgICAgaWYgKGRldmljZS5raW5kID09PSBgJHtraW5kfWlucHV0YCAmJiBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IGRldmljZS5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgaWYgKGNhcD8uZmFjaW5nTW9kZT8uaW5jbHVkZXModGhpcy4jZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmlkZW9EZXZpY2VzLmxlbmd0aCA8PSAxID8gdmlkZW9EZXZpY2VzIDogdmlkZW9EZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gbGFiZWwgPyBkZXZpY2UubGFiZWwuaW5jbHVkZXMobGFiZWwpIDogdHJ1ZSk7XG4gIH1cbiAgY2hlY2tVSU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkZXRlY3Rvci5nZXRVSU9yaWVudGF0aW9uKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkub2NyKTtcbiAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnQgIT09IHRoaXMuI3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLiN1aU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIHRoaXMuI3ByZXZVaU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgaXNDaGFuZ2VkXG4gICAgfTtcbiAgfVxuICAjc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmICghb2NyKSB0aHJvdyBuZXcgRXJyb3IoXCJvY3IgZGl2IGVsZW1lbnQgaXMgbm90IGV4aXN0XCIpO1xuICAgIGlmICh2aWRlb1dyYXApIHZpZGVvV3JhcC5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3hXcmFwKSBndWlkZUJveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHZpZGVvKSB2aWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY2FudmFzKSBjYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKHJvdGF0aW9uQ2FudmFzKSByb3RhdGlvbkNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3gpIGd1aWRlQm94LnJlbW92ZSgpO1xuICAgIGlmIChtYXNrQm94V3JhcCkgbWFza0JveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKSBwcmV2ZW50VG9GcmVlemVWaWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY3VzdG9tVUlXcmFwKSBjdXN0b21VSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8g6rCBIHRvcCwgbWlkZGxlLCBib3R0b20gVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmICh0b3BVSSAmJiAhdGhpcy4jb3B0aW9ucy51c2VUb3BVSSkgdG9wVUkuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKG1pZGRsZVVJICYmICF0aGlzLiNvcHRpb25zLnVzZU1pZGRsZVVJKSBtaWRkbGVVSS5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoYm90dG9tVUkgJiYgIXRoaXMuI29wdGlvbnMudXNlQm90dG9tVUkpIGJvdHRvbVVJLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy4jZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID0gWzkwLCAyNzBdLmluY2x1ZGVzKHJvdGF0aW9uRGVncmVlKTtcbiAgICBsZXQgb2NyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9O1xuICAgIHRoaXMuI3NldFN0eWxlKG9jciwgb2NyU3R5bGUpO1xuICAgIGNvbnN0IHdyYXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9O1xuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLiNzZXRTdHlsZShtYXNrQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBsZXQgbWFza19mcmFtZSA9IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5tYXNrX2ZyYW1lICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLiNvcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDwvc3ZnPlxcblwiICsgXCIgICAgPC9tYXNrPlxcblwiICsgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgKyBcIiAgICAgICAgICBmaWxsPSdcIiArIG1hc2tfZnJhbWUgKyBcIicgbWFzaz0ndXJsKCNtYXNrLXJlY3QpJz48L3JlY3Q+XFxuXCIgKyBcIiAgPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgaWYgKHRoaXMuI2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHJvdGF0ZUNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy4jZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLiNzZXRTdHlsZSh2aWRlbywgdmlkZW9TdHlsZSk7XG4gICAgdmlkZW9XcmFwLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcbiAgICBndWlkZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveCcpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy4jb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuI2lzUm90YXRlZDkwb3IyNzAgPyAnbm9uZScgOiAnZGlzcGxheScgOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMzBweCcsXG4gICAgICBib3JkZXI6ICdncmVlbiAycHggc29saWQnXG4gICAgfTtcbiAgICB0aGlzLiNzZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByb3RhdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJvdGF0aW9uQ2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdyb3RhdGlvbkNhbnZhcycpO1xuICAgIHRoaXMuI3NldFN0eWxlKHJvdGF0aW9uQ2FudmFzLCB7XG4gICAgICBkaXNwbGF5OiB0aGlzLiNvcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gdGhpcy4jaXNSb3RhdGVkOTBvcjI3MCA/ICdkaXNwbGF5JyA6ICdub25lJyA6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgYm9yZGVyOiAnYmx1ZSAycHggc29saWQnXG4gICAgfSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHJvdGF0aW9uQ2FudmFzKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuI3NldFN0eWxlKHByZXZlbnRUb0ZyZWV6ZVZpZGVvLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgIHJpZ2h0OiAnMTAnXG4gICAgfSk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uaW5uZXJIVE1MID0gXCJcIiArIFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xcXCIgd2lkdGg9XFxcIjMycHhcXFwiIGhlaWdodD1cXFwiMzJweFxcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIj5cXG5cIiArIFwiICA8Y2lyY2xlIGN4PVxcXCI4NFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxMFxcXCIgZmlsbD1cXFwiIzg2ODY4NjAwXFxcIj5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjAuNTU1NTU1NTU1NTU1NTU1NnNcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIHZhbHVlcz1cXFwiMTA7MFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiZmlsbFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcImRpc2NyZXRlXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiIzg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMFxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0wLjU1NTU1NTU1NTU1NTU1NTZzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0wLjU1NTU1NTU1NTU1NTU1NTZzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiODRcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjExMTExMTExMTExMTExMTJzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjExMTExMTExMTExMTExMTJzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjY2NjY2NjY2NjY2NjY2NjVzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjY2NjY2NjY2NjY2NjY2NjVzXFxcIj48L2FuaW1hdGU+XFxuXCIgKyBcIiAgPC9jaXJjbGU+XCI7XG4gICAgXCI8L3N2Zz5cIjtcbiAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmVudFRvRnJlZXplVmlkZW8pO1xuICAgIGN1c3RvbVVJV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1c3RvbVVJV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnY3VzdG9tVUlXcmFwJyk7XG4gICAgY29uc3QgY3VzdG9tVUlXcmFwU3R5bGUgPSB7XG4gICAgICAuLi53cmFwU3R5bGUsXG4gICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgIH07XG4gICAgdGhpcy4jc2V0U3R5bGUoY3VzdG9tVUlXcmFwLCBjdXN0b21VSVdyYXBTdHlsZSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKGN1c3RvbVVJV3JhcCk7XG5cbiAgICAvLyDqsIEgdG9wLCBtaWRkbGUsIGJvdHRvbSBVSSDsgqzsmqkodXNlKeyXrOu2gOyZgCDqtIDqs4Tsl4bsnbQg7JiB7Jet7J2EIOyeoeq4sCDsnITtlbQsIGRpduqwgCDsl4bsnLzrqbQg7IOd7ISxXG4gICAgLy8gYWRqdXN0U3R5bGUoKSDsl5DshJwg7IS467aA7KCB7J24IOyCrOydtOymiOyZgCDsnITsuZjqsJIg64+Z7KCB7Jy866GcIOyEpOygleuQqC5cbiAgICBpZiAoIXRvcFVJKSB7XG4gICAgICB0b3BVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3RvcFVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZCh0b3BVSSk7XG4gICAgaWYgKCFtaWRkbGVVSSkge1xuICAgICAgbWlkZGxlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtaWRkbGVVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQobWlkZGxlVUkpO1xuICAgIGlmICghYm90dG9tVUkpIHtcbiAgICAgIGJvdHRvbVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib3R0b21VSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnYm90dG9tVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKGJvdHRvbVVJKTtcbiAgICB0aGlzLiNvY3IgPSBvY3I7XG4gICAgdGhpcy4jY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuI3JvdGF0aW9uQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgdGhpcy4jdmlkZW8gPSB2aWRlbztcbiAgICB0aGlzLiN2aWRlb1dyYXAgPSB2aWRlb1dyYXA7XG4gICAgdGhpcy4jZ3VpZGVCb3ggPSBndWlkZUJveDtcbiAgICB0aGlzLiNndWlkZUJveFdyYXAgPSBndWlkZUJveFdyYXA7XG4gICAgdGhpcy4jbWFza0JveFdyYXAgPSBtYXNrQm94V3JhcDtcbiAgICB0aGlzLiNwcmV2ZW50VG9GcmVlemVWaWRlbyA9IHByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICAgIHRoaXMuI2N1c3RvbVVJV3JhcCA9IGN1c3RvbVVJV3JhcDtcbiAgICB0aGlzLiN0b3BVSSA9IHRvcFVJO1xuICAgIHRoaXMuI21pZGRsZVVJID0gbWlkZGxlVUk7XG4gICAgdGhpcy4jYm90dG9tVUkgPSBib3R0b21VSTtcbiAgICByZXR1cm4ge1xuICAgICAgb2NyLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICB2aWRlbyxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSVxuICAgIH07XG4gIH1cbiAgYXN5bmMgI3NldHVwVmlkZW8oaXNQYXNzcG9ydCkge1xuICAgIC8vIHdhc20g7J247Iud7ISx64qlIOy1nOygge2ZlOuQnCDtlbTsg4Hrj4RcbiAgICB0aGlzLiNyZXNvbHV0aW9uV2lkdGggPSAxMDgwO1xuICAgIHRoaXMuI3Jlc29sdXRpb25IZWlnaHQgPSA3MjA7XG4gICAgdGhpcy4jY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgICBjb25zdCB7XG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzXG4gICAgfSA9IHRoaXMuI3NldHVwRG9tRWxlbWVudHMoKTtcbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBhd2FpdCB0aGlzLiNnZXRJbnB1dERldmljZXMoJ3ZpZGVvJywgdGhpcy4jb3B0aW9ucy5kZXZpY2VMYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvRGV2aWNlcyA6OiAnLCB2aWRlb0RldmljZXMpXG4gICAgY29uc3QgZGV2aWNlSWRMaXN0ID0gdmlkZW9EZXZpY2VzLm1hcChkZXZpY2UgPT4gZGV2aWNlLmRldmljZUlkKTtcbiAgICB0aGlzLmNoZWNrVUlPcmllbnRhdGlvbigpO1xuICAgIGxldCBjb25zdHJhaW50V2lkdGgsIGNvbnN0cmFpbnRIZWlnaHQ7XG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIC8vIHVpIDogcG9ydHJhaXRcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDEwODAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiA3MjAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVpIDogbGFuZHNjYXBlXG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICBtaW46IDEyODBcbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgbWluOiA3MjBcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge1xuICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgdmlkZW86IHtcbiAgICAgICAgem9vbToge1xuICAgICAgICAgIGlkZWFsOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGZhY2luZ01vZGU6IHtcbiAgICAgICAgICBpZGVhbDogdGhpcy4jZmFjaW5nTW9kZUNvbnN0cmFpbnRcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICB3aGl0ZUJhbGFuY2VNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6ICdjb250aW51b3VzJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2VJZDogdmlkZW9EZXZpY2VzLmxlbmd0aCA/IHtcbiAgICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0W2RldmljZUlkTGlzdC5sZW5ndGggLSAxXVxuICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgd2lkdGg6IGNvbnN0cmFpbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb25zdHJhaW50SGVpZ2h0XG4gICAgICB9XG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgZHVtcHRyYWNrID0gKFthLCBiXSwgdHJhY2spID0+XG4gICAgICAvLyAgIGAke2F9JHt0cmFjay5raW5kID09ICd2aWRlbycgPyAnQ2FtZXJhJyA6ICdNaWNyb3Bob25lJ30gKCR7dHJhY2sucmVhZHlTdGF0ZX0pOiAke3RyYWNrLmxhYmVsfSR7Yn1gO1xuXG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndmlkZW9UcmFja3MgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpXG4gICAgICAvLyBjb25zdCBzdHJlYW1TZXR0aW5ncyA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldFNldHRpbmdzKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtQ2FwYWJpbGl0aWVzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENhcGFiaWxpdGllcygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDb25zdHJhaW50cygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbVNldHRpbmdzIDo6ICcsIHN0cmVhbVNldHRpbmdzKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIC8gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCAvIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGFzcGVjdFJhdGlvIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5hc3BlY3RSYXRpbyk7XG5cbiAgICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3RoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICBbcm90YXRpb25DYW52YXMud2lkdGgsIHJvdGF0aW9uQ2FudmFzLmhlaWdodF0gPSBbdGhpcy4jcmVzb2x1dGlvbkhlaWdodCwgdGhpcy4jcmVzb2x1dGlvbldpZHRoXTtcbiAgICAgIH1cbiAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgIHRoaXMuI3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICAjYWRqdXN0U3R5bGUoKSB7XG4gICAgdm9pZCAwO1xuICAgIGNvbnN0IHtcbiAgICAgIG9jcixcbiAgICAgIHZpZGVvLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIC8vIOq4sOykgOygleuztFxuICAgIGNvbnN0IGJhc2VXaWR0aCA9IDQwMDtcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMjYwO1xuICAgIGNvbnN0IHNjYW5uZXJGcmFtZVJhdGlvID0gYmFzZUhlaWdodCAvIGJhc2VXaWR0aDsgLy8g7Iug67aE7KadIOu5hOycqFxuXG4gICAgbGV0IGd1aWRlQm94V2lkdGgsIGd1aWRlQm94SGVpZ2h0O1xuICAgIGxldCBjYWxjT2NyQ2xpZW50V2lkdGggPSBvY3IuY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRIZWlnaHQgPSBvY3IuY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbjtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aDtcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzO1xuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY1ZpZGVvV2lkdGgsIGNhbGNWaWRlb0hlaWdodF0gPSBbY2FsY1ZpZGVvSGVpZ2h0LCBjYWxjVmlkZW9XaWR0aF07XG4gICAgICBbY2FsY1ZpZGVvQ2xpZW50V2lkdGgsIGNhbGNWaWRlb0NsaWVudEhlaWdodF0gPSBbY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9DbGllbnRXaWR0aF07XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBuZXdWaWRlb1dpZHRoID0gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgbGV0IG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy4jZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgY29uc3QgdmlkZW9SYXRpb0J5SGVpZ2h0ID0gdGhpcy4jdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgIGlmICh0aGlzLiN1aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUlcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDsubTrqZTrnbzrj4Qg7IS466GcXG4gICAgICAgIC8vIOyEuOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7ZmV64yAXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiAoY2FsY1ZpZGVvSGVpZ2h0IC8gY2FsY1ZpZGVvV2lkdGgpO1xuICAgICAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDsubTrqZTrnbzripQg6rCA66GcXG4gICAgICAgIC8vIOyEuOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqTrpbwg67mE65SU7JikIOyEuOuhnCDquLjsnbTsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDqsIDroZwgVUlcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDruYTrlJTsmKTrpbwg6rCA66GcIFVJ7J2YIGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIC8vIOqwgOuhnCBVSSBoZWlnaHQg6riw7KSA7Jy866GcIOu5hOuUlOyYpOydmCB3aWR0aCDqs4TsgrBcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICBuZXdWaWRlb1dpZHRoID0gbmV3VmlkZW9IZWlnaHQgKiAoY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9IZWlnaHQpO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOuKlCDruYTrlJTsmKTrpbwg7IS466GcIOq4sOykgOycvOuhnCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBuZXdWaWRlb0hlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOydmCBoZWlnaHQg7YGs6riw66W8IFVJ7J2YIGhlaWdodCDquLDspIDsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTsnZgg6rCA66GcIO2BrOq4sOqwgCDqsIDroZwgVUkgd2lkdGggKiByYXRpbyDqsJLrs7Tri6Qg7YGs66m0LFxuICAgICAgICBpZiAoZ3VpZGVCb3hXaWR0aCA+IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKSB7XG4gICAgICAgICAgLy8g6rOE7IKwIOuwqeyLneydhCDrsJTqvrzri6QgKOyCrOycoCA6IOqxsOydmCDsoJXsgqzqsIHtmJXsl5Ag6rCA6rmM7Jq0IOqyveyasCDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnOqwgCDqvYnssKjqsowg65CoLilcbiAgICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIOy2leyGjFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBndWlkZUJveFdpZHRoICs9IGJvcmRlcldpZHRoICogMjtcbiAgICBndWlkZUJveEhlaWdodCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgdGhpcy4jY3JvcEltYWdlU2l6ZVdpZHRoID0gTWF0aC5taW4oZ3VpZGVCb3hXaWR0aCwgbmV3VmlkZW9XaWR0aCk7XG4gICAgdGhpcy4jY3JvcEltYWdlU2l6ZUhlaWdodCA9IE1hdGgubWluKGd1aWRlQm94SGVpZ2h0LCBuZXdWaWRlb0hlaWdodCk7XG4gICAgY29uc3QgcmVkdWNlZEd1aWRlQm94V2lkdGggPSBndWlkZUJveFdpZHRoICogdGhpcy4jZ3VpZGVCb3hSZWR1Y2VSYXRpbztcbiAgICBjb25zdCByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveEhlaWdodCAqIHRoaXMuI2d1aWRlQm94UmVkdWNlUmF0aW87XG4gICAgaWYgKHRvcFVJKSB7XG4gICAgICB0aGlzLiNzZXRTdHlsZSh0b3BVSSwge1xuICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnMTBweCcsXG4gICAgICAgICdoZWlnaHQnOiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy4jc2V0U3R5bGUobWlkZGxlVUksIHtcbiAgICAgICAgd2lkdGg6IHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiByZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgICAgJ3BhZGRpbmcnOiAnMTBweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYm90dG9tVUkpIHtcbiAgICAgIHRoaXMuI3NldFN0eWxlKGJvdHRvbVVJLCB7XG4gICAgICAgICdwYWRkaW5nLXRvcCc6ICcxMHB4JyxcbiAgICAgICAgJ2hlaWdodCc6IChjYWxjT2NyQ2xpZW50SGVpZ2h0IC0gZ3VpZGVCb3hIZWlnaHQpIC8gMiArICdweCcsXG4gICAgICAgICdkaXNwbGF5JzogJ2ZsZXgnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChuZXdWaWRlb1dpZHRoICE9PSBjYWxjVmlkZW9DbGllbnRXaWR0aCkge1xuICAgICAgdGhpcy4jc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5ld1ZpZGVvSGVpZ2h0ICE9PSBjYWxjVmlkZW9DbGllbnRIZWlnaHQpIHtcbiAgICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICAgIGhlaWdodDogbmV3VmlkZW9IZWlnaHQgKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgdmlkZW9Jbm5lckdhcCA9IDI7IC8vIOuvuOyEuO2VmOqyjCBtYXNrQm94SW5uZXLrs7Tri6QgZ3VpZGVCb3jqsIAg7J6R7J2A6rKDIOuztOyglVxuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogcmVkdWNlZEd1aWRlQm94V2lkdGggLSB2aWRlb0lubmVyR2FwICsgJ3B4JyxcbiAgICAgIGhlaWdodDogcmVkdWNlZEd1aWRlQm94SGVpZ2h0IC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9KTtcbiAgICBjb25zdCBtYXNrQm94SW5uZXIgPSBtYXNrQm94V3JhcC5xdWVyeVNlbGVjdG9yKFwiI21hc2tCb3hJbm5lclwiKTtcbiAgICBsZXQgciA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoICogMjtcbiAgICByID0gciA8IDAgPyAwIDogcjtcbiAgICBpZiAoIWlzTmFOKHJlZHVjZWRHdWlkZUJveFdpZHRoKSAmJiAhaXNOYU4ocmVkdWNlZEd1aWRlQm94SGVpZ2h0KSAmJiAhaXNOYU4oYm9yZGVyUmFkaXVzKSAmJiAhaXNOYU4oYm9yZGVyV2lkdGgpKSB7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJXaWR0aCA9IE1hdGgubWF4KHJlZHVjZWRHdWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcCwgMCk7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSBNYXRoLm1heChyZWR1Y2VkR3VpZGVCb3hIZWlnaHQgLSBib3JkZXJXaWR0aCAqIDIgLSB2aWRlb0lubmVyR2FwLCAwKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgbWFza0JveElubmVyV2lkdGggLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgbWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncngnLCByICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCByICsgJycpO1xuICAgIH1cbiAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLiNpblByb2dyZXNzU3RlcCwgdHJ1ZSk7XG4gICAgdm9pZCAwO1xuICB9XG4gICNjbG9zZUNhbWVyYSgpIHtcbiAgICB0aGlzLiNjbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cbiAgYXN5bmMgI2xvYWRSZXNvdXJjZXMoKSB7XG4gICAgdm9pZCAwO1xuICAgIGlmICh0aGlzLiNyZXNvdXJjZXNMb2FkZWQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCgncXVyYW0uanMnLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xuICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG5cbiAgICAgIC8vIGRhdGEobW9kZWwpXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXlxcKGZ1bmN0aW9uXFwoXFwpIFxcey9tLCAndmFyIGNyZWF0ZU1vZGVsRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xcbicgKyAnIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnICAgY29uc29sZS5lcnJvcihcInBhY2thZ2UgZXJyb3I6XCIsIGVycm9yKTsnLCAnICAgcmVqZWN0KCk7XFxuJyArICcgICBjb25zb2xlLmVycm9yKFwicGFja2FnZSBlcnJvcjpcIiwgZXJyb3IpOycpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJyAgfSwgaGFuZGxlRXJyb3IpJywgJyAgcmVzb2x2ZSgpO1xcbicgKyAnICB9LCBoYW5kbGVFcnJvciknKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9eXFx9XFwpXFwoXFwpOy9tLCAnXFxuIH0pXFxuJyArICd9OycpO1xuXG4gICAgICAvLyB3YXNtXG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgncXVyYW0ud2FzbScsIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZik7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFsnXCJdcXVyYW1cXC5kYXRhW1wiJ10vZ20sIGBSRU1PVEVfUEFDS0FHRV9CQVNFID0gXCIke25ldyBVUkwoJ3F1cmFtLmRhdGEnLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZn1cImApO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2Z1bmN0aW9uIGNyZWF0ZVdhc20nLCAnYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2FzbScpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2luc3RhbnRpYXRlQXN5bmMoKTsnLCAnYXdhaXQgaW5zdGFudGlhdGVBc3luYygpOycpO1xuXG4gICAgICAvLyB3YXNtIGFuZCBkYXRhKG1vZGVsKSBmaWxlIOuzkeugrOuhnCBmZXRjaCDtlZjquLAg7JyE7ZW0XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgndmFyIGFzbSA9IGNyZWF0ZVdhc20oKTsnLCAnY29uc29sZS5sb2coXCJjcmVhdGUgd2FzbSBhbmQgZGF0YSAtIHN0YXJ0XCIpXFxuJyArICdhd2FpdCAoYXN5bmMgZnVuY3Rpb24oKSB7XFxuJyArICcgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XFxuJyArICcgICAgdmFyIGlzQ3JlYXRlZFdhc20gPSBmYWxzZTtcXG4nICsgJyAgICB2YXIgaXNDcmVhdGVkRGF0YSA9IGZhbHNlO1xcbicgKyAnICAgIGNyZWF0ZVdhc20oKS50aGVuKCgpID0+IHtcXG4nICsgJyAgICAgIGlzQ3JlYXRlZFdhc20gPSB0cnVlO1xcbicgKyAnICAgICAgaWYgKGlzQ3JlYXRlZERhdGEpIHsgcmVzb2x2ZSgpOyB9XFxuJyArICcgICAgfSk7XFxuJyArICcgICAgY3JlYXRlTW9kZWxEYXRhKCkudGhlbigoKSA9PiB7XFxuJyArICcgICAgICBpc0NyZWF0ZWREYXRhID0gdHJ1ZTtcXG4nICsgJyAgICAgIGlmIChpc0NyZWF0ZWRXYXNtKSB7IHJlc29sdmUoKTsgfVxcbicgKyAnICAgIH0pXFxuJyArICcgIH0pO1xcbicgKyAnfSkoKTtcXG4nICsgJ2NvbnNvbGUubG9nKFwiY3JlYXRlIHdhc20gYW5kIGRhdGEgLSBlbmRcIiknKTtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSk7XG4gICAgc3JjID0gYFxuICAgIChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICR7c3JjfVxuICAgICAgTW9kdWxlLmxlbmd0aEJ5dGVzVVRGOCA9IGxlbmd0aEJ5dGVzVVRGOFxuICAgICAgTW9kdWxlLnN0cmluZ1RvVVRGOCA9IHN0cmluZ1RvVVRGOFxuICAgICAgcmV0dXJuIE1vZHVsZVxuICAgIH0pKClcbiAgICAgICAgYDtcbiAgICB0aGlzLiNPQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgdGhpcy4jT0NSRW5naW5lLm9uUnVudGltZUluaXRpYWxpemVkID0gYXN5bmMgXyA9PiB7XG4gICAgICB2b2lkIDA7XG4gICAgfTtcbiAgICBhd2FpdCB0aGlzLiNPQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQoKTtcbiAgICB0aGlzLiNyZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICAgIHZvaWQgMDtcbiAgfVxuICAjc3RhcnRTY2FuSW1wbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy4jaW50ZXJ2YWxMb2NrID0gZmFsc2U7XG4gICAgICBsZXQgZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuI3BhZ2VFbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuI2ludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHRoaXMuI2ludGVydmFsTG9jayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNpbnRlcnZhbExvY2sgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgICBpZiAoIXRoaXMuI09DUkVuZ2luZVsnYXNtJ10pIHJldHVybjtcblxuICAgICAgICAgIC8vIFRPRE8gOiDshKTsoJXtlaDsiJgg7J6I6rKMIOuzgOqyvSBkZWZhdWx0IOqwkuuPhCDsoJzqs7VcbiAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvbl93LCByZXNvbHV0aW9uX2hdID0gW3RoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdmlkZW9cbiAgICAgICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICBpZiAocmVzb2x1dGlvbl93ID09PSAwIHx8IHJlc29sdXRpb25faCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYmVmb3JlIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuICAgICAgICAgIGlmIChhZGRyZXNzID09PSAwICYmICF0aGlzLiNwYWdlRW5kICYmIHRoaXMuI2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpIHtcbiAgICAgICAgICAgIFthZGRyZXNzLCB0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrXSA9IHRoaXMuI2dldFNjYW5uZXJBZGRyZXNzKHRoaXMuI29jclR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWFkZHJlc3MgfHwgdGhpcy4jcGFnZUVuZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYWZ0ZXIgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG5cbiAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgIGlmICghKGF3YWl0IHRoaXMuI2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDApKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLlJFQURZKSB7XG4gICAgICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfRkFJTEVEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEKSB7XG4gICAgICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLiNpblByb2dyZXNzU3RlcCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBmYWxsYmFjayBjYXNlIOyduOuTr1xuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICAvLyBpZiAocmVzdWx0ICE9PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnN0IFByZXZJbWFnZSA9IGdldFByZXZJbWFnZSgpO1xuICAgICAgICAgICAgLy8gICBNb2R1bGUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgUHJldkltYWdlKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29uc3QgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlLCBzc2FSZXN1bHRdID0gYXdhaXQgdGhpcy4jc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCB0aGlzLiNvY3JUeXBlLCB0aGlzLiNzc2FNb2RlKTtcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgaWYgKG9jclJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuI3NzYU1vZGUpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBcIkZBS0VcIikge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuI3NzYVJldHJ5Q291bnQgPCB0aGlzLiNvcHRpb25zLnNzYU1heFJldHJ5Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzc2FSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICB0aGlzLiNvblN1Y2Nlc3NQcm9jZXNzKHtcbiAgICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy4jb2NyVHlwZSxcbiAgICAgICAgICAgICAgICBvY3JfZGF0YTogcGFyc2VyLnBhcnNlT2NyUmVzdWx0KHRoaXMuI29jclR5cGUsIHRoaXMuI3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLiNzc2FSZXRyeUNvdW50KSxcbiAgICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiBpbWdEYXRhVXJsLFxuICAgICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBtYXNrSW1hZ2UsXG4gICAgICAgICAgICAgICAgc3NhX21vZGU6IHRoaXMuI3NzYU1vZGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuI2NsZWFySW50ZXJ2YWxUaW1lcnMoKTsgLy8gZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3InO1xuICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBcIjogXCIgKyBlLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI29uRmFpbHVyZVByb2Nlc3MoXCJXQTAwMVwiLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJJbnRlcnZhbFRpbWVycygpOyAvLyBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdGhpcy4jaW50ZXJ2YWxMb2NrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sIDEpO1xuICAgIH0pO1xuICB9XG4gICNvblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpIHtcbiAgICAvLyDsnbjsi50g7ISx6rO1IOyKpOy6lCDro6jtlIQg7KKF66OMXG4gICAgaWYgKHJldmlld19yZXN1bHQuc3NhX21vZGUpIHtcbiAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1NfV0lUSF9TU0EpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogXCJOMTAwXCIsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogXCJPSy5cIlxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiByZXZpZXdfcmVzdWx0XG4gICAgfTtcbiAgICBpZiAodGhpcy4jb25TdWNjZXNzKSB7XG4gICAgICB0aGlzLiNvblN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgIHRoaXMuI29uU3VjY2VzcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgI29uRmFpbHVyZVByb2Nlc3MocmVzdWx0Q29kZSwgZSwgZXJyb3JNZXNzYWdlKSB7XG4gICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfRkFJTEVEKTtcbiAgICBsZXQgZXJyb3JEZXRhaWwgPSBcIlwiO1xuICAgIGlmIChlPy50b1N0cmluZygpKSBlcnJvckRldGFpbCArPSBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGU/LnN0YWNrKSBlcnJvckRldGFpbCArPSBlLnN0YWNrO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICBcInJlc3VsdF9jb2RlXCI6IHJlc3VsdENvZGUsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogZXJyb3JNZXNzYWdlXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiBcImZhaWxlZFwiLFxuICAgICAgcmV2aWV3X3Jlc3VsdDoge1xuICAgICAgICBvY3JfdHlwZTogdGhpcy4jb2NyVHlwZSxcbiAgICAgICAgZXJyb3JfZGV0YWlsOiBlcnJvckRldGFpbFxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuI29uRmFpbHVyZSkge1xuICAgICAgdGhpcy4jb25GYWlsdXJlKHJlc3VsdCk7XG4gICAgICB0aGlzLiNvbkZhaWx1cmUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGFzeW5jICNzdGFydFNjYW4oKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgYXdhaXQgdGhpcy4jcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLiNzdGFydFNjYW5JbXBsKCk7XG4gICAgdm9pZCAwO1xuICB9XG4gIGFzeW5jICNyZWNvdmVyeVNjYW4oKSB7XG4gICAgdm9pZCAwO1xuICAgIHRoaXMuI3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICBhd2FpdCB0aGlzLiNzdGFydFNjYW4oKTtcbiAgfVxuICBzdG9wU2NhbigpIHtcbiAgICB0aGlzLiNjbGVhckludGVydmFsVGltZXJzKCk7XG4gICAgY29uc3Qge1xuICAgICAgY2FudmFzXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9XG4gIHN0b3BTdHJlYW0oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy4jcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmICh0aGlzLiNzdHJlYW0pIHtcbiAgICAgIHRoaXMuI3N0cmVhbS5zdG9wICYmIHRoaXMuI3N0cmVhbS5zdG9wKCk7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy4jc3RyZWFtLmdldFRyYWNrcyAmJiB0aGlzLiNzdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhY2tzLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3N0cmVhbSA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiDrqZTrqqjrpqwgYWxsb2NhdGlvbiBmcmVlIO2VqOyImCAqL1xuICBjbGVhbnVwKCkge1xuICAgIHRoaXMuI2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpO1xuICAgIHRoaXMuI2Rlc3Ryb3lCdWZmZXIoKTtcbiAgICB0aGlzLiNkZXN0cm95UHJldkltYWdlKCk7XG4gICAgdGhpcy4jZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKTtcbiAgfVxuICAjY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIGlmICh0aGlzLiNjYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcik7XG4gICAgICB0aGlzLiNjYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgI2NsZWFySW50ZXJ2YWxUaW1lcnMoKSB7XG4gICAgaWYgKHRoaXMuI2ludGVydmFsVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy4jaW50ZXJ2YWxUaW1lcik7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLiNpbnRlcnZhbFRpbWVyID0gbnVsbDtcbiAgICB9XG4g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
