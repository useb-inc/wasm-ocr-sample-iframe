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
      value: 0.6
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
          width: 10,
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
      if (_this.isPreloading()) {
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
  isPreloading() {
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
        if (!_this2.isPreloading() && preloadingStatus === _this2.PRELOADING_STATUS.NOT_STARTED) {
          void 0;
          yield _this2.preloading();
        } else {
          if (preloadingStatus === _this2.PRELOADING_STATUS.STARTED) {
            void 0;
            yield _classPrivateMethodGet(_this2, _waitPreloaded, _waitPreloaded2).call(_this2);
          } else if (preloadingStatus === _this2.PRELOADING_STATUS.DONE) {
            void 0;
          } else {
            throw new Error("abnormally preloading status, preloaded: ".concat(_this2.isPreloading(), " / preloadingStatus: ").concat(_this2.getPreloadingStatus()));
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
          if (_this6.isPreloading()) {
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
      rotationCanvas,
      guideBox
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
    var calcGuideBoxClientWidth = guideBox.clientWidth;
    var calcGuideBoxClientHeight = guideBox.clientHeight;
    var calcVideoOrientation = _classPrivateFieldGet(this, _videoOrientation);
    if (_classPrivateFieldGet(this, _isRotated90or)) {
      [calcGuideBoxClientWidth, calcGuideBoxClientHeight] = [calcGuideBoxClientHeight, calcGuideBoxClientWidth];
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
    var sWidth = Math.min(Math.round(calcGuideBoxClientWidth * ratio), calcMaxSWidth);
    var sHeight = Math.min(Math.round(calcGuideBoxClientHeight * ratio), calcMaxSHeight);
    sx = Math.round((calcVideoClientWidth - calcGuideBoxClientWidth) / 2 * ratio);
    sy = Math.round((calcVideoClientHeight - calcGuideBoxClientHeight) / 2 * ratio);
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
    top: '0px',
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
        deviceId: {
          ideal: deviceIdList.length > 0 ? deviceIdList[deviceIdList.length - 1] : null
        },
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

  var guideBoxWidth, guideBoxHeight, newVideoWidth, newVideoHeight;
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
  var guideBoxRatioByWidth = _classPrivateFieldGet(this, _guideBoxRatioByWidth);
  var videoRatioByHeight = _classPrivateFieldGet(this, _videoRatioByHeight);
  if (_classPrivateFieldGet(this, _uiOrientation) === 'portrait') {
    // 세로 UI
    // video 가로 기준 100% 유지 (변경없음)
    if (calcVideoOrientation === _classPrivateFieldGet(this, _uiOrientation)) {
      // 카메라도 세로
      /// 세로 UI && 세로 비디오
      // 가로 기준으로 가이드박스 계산
      guideBoxWidth = calcOcrClientWidth * guideBoxRatioByWidth;
      guideBoxHeight = guideBoxWidth * scannerFrameRatio;
      guideBoxWidth += borderWidth * 2;
      guideBoxHeight += borderWidth * 2;

      // 가이드 박스 가로 기준으로 비디오 확대
      newVideoWidth = guideBoxWidth;
      newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
      if (_classPrivateFieldGet(this, _isRotated90or)) {
        [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
      }
    } else {
      // 카메라는 가로
      // 가이드 박스를 비디오 세로 길이에 맞춤
      guideBoxHeight = calcVideoClientHeight;
      guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;
      guideBoxWidth += borderWidth * 2;
      guideBoxHeight += borderWidth * 2;
    }
  } else {
    // 가로 UI
    if (calcVideoOrientation === _classPrivateFieldGet(this, _uiOrientation)) {
      // 가로 UI && 가로 비디오
      // 비디오를 height 기준으로 줄이고
      newVideoHeight = calcOcrClientHeight * videoRatioByHeight;
      // height 기준으로 width 계산
      newVideoWidth = newVideoHeight * (calcVideoWidth / calcVideoHeight);

      // 가이드박스는 비디오를 세로 기준으로 맞춤
      guideBoxHeight = newVideoHeight;
      guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;
      guideBoxWidth += borderWidth * 2;
      guideBoxHeight += borderWidth * 2;
    } else {
      // 가로 UI && 세로 비디오
      // 가로 기준으로 가이드박스 계산
      var _guideBoxRatioByWidth2 = 0.8;
      guideBoxWidth = calcOcrClientWidth * _guideBoxRatioByWidth2;
      guideBoxHeight = guideBoxWidth * scannerFrameRatio;
      guideBoxWidth += borderWidth * 2;
      guideBoxHeight += borderWidth * 2;

      // 가이드 박스 가로 기준으로 비디오 확대
      newVideoWidth = guideBoxWidth;
      newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
      if (_classPrivateFieldGet(this, _isRotated90or)) {
        [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
      }
    }
  }
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
      width: guideBoxWidth - borderWidth * 2 + 'px',
      height: guideBoxHeight + 'px',
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
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, video, {
    width: newVideoWidth + 'px',
    height: newVideoHeight + 'px'
  });
  var videoInnerGap = 2; // 미세하게 maskBoxInner보다 guideBox가 작은것 보정
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, guideBox, {
    width: guideBoxWidth - videoInnerGap + 'px',
    height: guideBoxHeight - videoInnerGap + 'px',
    backgroundColor: 'transparent'
  });
  var maskBoxInner = maskBoxWrap.querySelector("#maskBoxInner");
  var r = borderRadius - borderWidth * 2;
  r = r < 0 ? 0 : r;
  if (!isNaN(guideBoxWidth) && !isNaN(guideBoxHeight) && !isNaN(borderRadius) && !isNaN(borderWidth)) {
    var maskBoxInnerWidth = guideBoxWidth - borderWidth * 2 - videoInnerGap;
    var maskBoxInnerHeight = guideBoxHeight - borderWidth * 2 - videoInnerGap;
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
      source = source.replace('quram.wasm', new URL('quram.wasm', _classPrivateFieldGet(this, _options).resourceBaseUrl).href);
      source = source.replace(/REMOTE_PACKAGE_BASE = ['"]quram\.data["']/gm, "REMOTE_PACKAGE_BASE = \"".concat(new URL('quram.data', _classPrivateFieldGet(this, _options).resourceBaseUrl).href, "\""));
      source = source.replace('function createWasm', 'async function createWasm');
      source = source.replace('var asm = createWasm();', 'await createWasm();');
      source = source.replace('instantiateAsync();', 'await instantiateAsync();');
      return source;
    });
    src = "\n    (async function() {\n      ".concat(src, "\n      Module.lengthBytesUTF8 = lengthBytesUTF8\n      Module.stringToUTF8 = stringToUTF8\n      return Module\n    })()\n        ");
    _classPrivateFieldSet(this, _OCREngine, yield eval(src));
    _classPrivateFieldGet(this, _OCREngine).onRuntimeInitialized = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* (_) {});
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJpbnN0YW5jZSIsIl9PQ1JFbmdpbmUiLCJXZWFrTWFwIiwiX2luaXRpYWxpemVkIiwiX3ByZWxvYWRlZCIsIl9wcmVsb2FkaW5nU3RhdHVzIiwiX2xpY2Vuc2UiLCJfb2NyVHlwZSIsIl9zc2FNb2RlIiwiX3NzYVJldHJ5Q291bnQiLCJfb25TdWNjZXNzIiwiX29uRmFpbHVyZSIsIl9vbkluUHJvZ3Jlc3NDaGFuZ2UiLCJfb2NyVHlwZUxpc3QiLCJfb2NyVHlwZVN0cmluZyIsIl9wYWdlRW5kIiwiX29jciIsIl9jYW52YXMiLCJfcm90YXRpb25DYW52YXMiLCJfdmlkZW8iLCJfdmlkZW9XcmFwIiwiX2d1aWRlQm94IiwiX2d1aWRlQm94V3JhcCIsIl9tYXNrQm94V3JhcCIsIl9wcmV2ZW50VG9GcmVlemVWaWRlbyIsIl9jdXN0b21VSVdyYXAiLCJfdG9wVUkiLCJfbWlkZGxlVUkiLCJfYm90dG9tVUkiLCJfQnVmZmVyIiwiX3Jlc3VsdEJ1ZmZlciIsIl9QcmV2SW1hZ2UiLCJfc3RyaW5nT25XYXNtSGVhcCIsIl9jYW1TZXRDb21wbGV0ZSIsIl9yZXNvbHV0aW9uV2lkdGgiLCJfcmVzb2x1dGlvbkhlaWdodCIsIl92aWRlb1dpZHRoIiwiX3ZpZGVvSGVpZ2h0IiwiX3Jlc291cmNlc0xvYWRlZCIsIl9pbnRlcnZhbFRpbWVyIiwiX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQiLCJfc3RyZWFtIiwiX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2siLCJfZmFjaW5nTW9kZUNvbnN0cmFpbnQiLCJfdWlPcmllbnRhdGlvbiIsIl9wcmV2VWlPcmllbnRhdGlvbiIsIl92aWRlb09yaWVudGF0aW9uIiwiX3Rocm90dGxpbmdSZXNpemVUaW1lciIsIl90aHJvdHRsaW5nUmVzaXplRGVsYXkiLCJfbWF4UmV0cnlDb3VudEdldEFkZHJlc3MiLCJfcmV0cnlDb3VudEdldEFkZHJlc3MiLCJfZGV2aWNlSW5mbyIsIl9pc1JvdGF0ZWQ5MG9yIiwiX2luUHJvZ3Jlc3NTdGVwIiwiX3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAiLCJfaXNJblByb2dyZXNzSGFuZGxlUmVzaXplIiwiX2ludGVydmFsTG9jayIsIl9ndWlkZUJveFJhdGlvQnlXaWR0aCIsIl92aWRlb1JhdGlvQnlIZWlnaHQiLCJfb3B0aW9ucyIsIl93YWl0UHJlbG9hZGVkIiwiV2Vha1NldCIsIl93aW5kb3dFdmVudEJpbmQiLCJfc2xlZXAiLCJfYmxvYlRvQmFzZSIsIl9nZXRTdHJpbmdPbldhc21IZWFwIiwiX3NldFZpZGVvUmVzb2x1dGlvbiIsIl9nZXRTY2FubmVyQWRkcmVzcyIsIl9nZXRCdWZmZXIiLCJfZ2V0SW1hZ2VCYXNlIiwiX2Rlc3Ryb3lCdWZmZXIiLCJfZGVzdHJveVByZXZJbWFnZSIsIl9kZXN0cm95U3RyaW5nT25XYXNtSGVhcCIsIl9kZXN0cm95U2Nhbm5lckFkZHJlc3MiLCJfaXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlIiwiX2dldFJvdGF0aW9uRGVncmVlIiwiX2dldE1pcnJvck1vZGUiLCJfY3JvcEltYWdlRnJvbVZpZGVvIiwiX3JvdGF0ZSIsIl9pc0NhcmRib3hEZXRlY3RlZCIsIl9zdGFydFJlY29nbml0aW9uIiwiX3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfcHJvY2VlZENhbWVyYVBlcm1pc3Npb24iLCJfc2V0U3R5bGUiLCJfY2hhbmdlU3RhZ2UiLCJfZ2V0SW5wdXREZXZpY2VzIiwiX3NldHVwRG9tRWxlbWVudHMiLCJfc2V0dXBWaWRlbyIsIl9hZGp1c3RTdHlsZSIsIl9jbG9zZUNhbWVyYSIsIl9sb2FkUmVzb3VyY2VzIiwiX3N0YXJ0U2NhbkltcGwiLCJfb25TdWNjZXNzUHJvY2VzcyIsIl9vbkZhaWx1cmVQcm9jZXNzIiwiX3N0YXJ0U2NhbiIsIl9yZWNvdmVyeVNjYW4iLCJfY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX2NsZWFySW50ZXJ2YWxUaW1lcnMiLCJVc2VCT0NSIiwiY29uc3RydWN0b3IiLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJfZGVmaW5lUHJvcGVydHkiLCJOT05FIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVF9TVUNDRVNTIiwiQ0FSRF9ERVRFQ1RfRkFJTEVEIiwiT0NSX1JFQ09HTklaRUQiLCJPQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSIsIk9DUl9TVUNDRVNTIiwiT0NSX1NVQ0NFU1NfV0lUSF9TU0EiLCJPQ1JfRkFJTEVEIiwiTk9UX1NUQVJURUQiLCJTVEFSVEVEIiwiRE9ORSIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsIlBSRUxPQURJTkdfU1RBVFVTIiwiTWFwIiwiSU5fUFJPR1JFU1MiLCJPYmplY3QiLCJzaG93Q2xpcEZyYW1lIiwic2hvd0NhbnZhc1ByZXZpZXciLCJ1c2VUb3BVSSIsInVzZVRvcFVJVGV4dE1zZyIsInVzZU1pZGRsZVVJIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUkiLCJ1c2VCb3R0b21VSVRleHRNc2ciLCJmcmFtZUJvcmRlclN0eWxlIiwibWFza19mcmFtZSIsImNsaXBfZnJhbWUiLCJ3aWR0aCIsInN0eWxlIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwicmVzb3VyY2VCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJkZXZpY2VMYWJlbCIsInZpZGVvVGFyZ2V0SWQiLCJyb3RhdGlvbkRlZ3JlZSIsIm1pcnJvck1vZGUiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRpbmciLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX2xvYWRSZXNvdXJjZXMyIiwiY2FsbCIsImlzSW5pdGlhbGl6ZWQiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJnZXRQcmVsb2FkaW5nU3RhdHVzIiwiZ2V0T0NSRW5naW5lIiwiaW5pdCIsInNldHRpbmdzIiwibGljZW5zZUtleSIsIkVycm9yIiwibWVyZ2VkT3B0aW9ucyIsIl8iLCJtZXJnZSIsInNldE9wdGlvbiIsIl93aW5kb3dFdmVudEJpbmQyIiwiZ2V0T3NWZXJzaW9uIiwiZ2V0T3B0aW9uIiwiZ2V0T2NyVHlwZSIsInR5cGUiLCJnZXQiLCJnZXRVSU9yaWVudGF0aW9uIiwiZ2V0VmlkZW9PcmllbnRhdGlvbiIsInN0YXJ0T0NSIiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiX2FyZ3VtZW50cyIsImFyZ3VtZW50cyIsIl90aGlzMiIsIm9uSW5Qcm9ncmVzc0NoYW5nZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImluZGV4T2YiLCJnZXRPQ1JFbGVtZW50cyIsInRvcFVJIiwibWlkZGxlVUkiLCJib3R0b21VSSIsIl9jaGFuZ2VTdGFnZTIiLCJwcmVsb2FkaW5nU3RhdHVzIiwiX3dhaXRQcmVsb2FkZWQyIiwiY29uY2F0IiwiX3N0YXJ0U2NhbjIiLCJlIiwic3RvcE9DUiIsImNsZWFudXAiLCJfY2xvc2VDYW1lcmEyIiwicmVzdGFydE9DUiIsIm9jclR5cGUiLCJfdGhpczMiLCJjaGVja1VJT3JpZW50YXRpb24iLCJjdXJyZW50Iiwib2NyIiwiaXNDaGFuZ2VkIiwic3RvcFNjYW4iLCJfY2xlYXJJbnRlcnZhbFRpbWVyczIiLCJjYW52YXMiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpbGxSZWFkRnJlcXVlbnRseSIsImNsZWFyUmVjdCIsImhlaWdodCIsInN0b3BTdHJlYW0iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0b3AiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJfZGVzdHJveVNjYW5uZXJBZGRyZXNzMiIsIl9kZXN0cm95QnVmZmVyMiIsIl9kZXN0cm95UHJldkltYWdlMiIsIl9kZXN0cm95U3RyaW5nT25XYXNtSGVhcDIiLCJfd2FpdFByZWxvYWRlZDMiLCJhcHBseSIsIl90aGlzNiIsIndhaXRpbmdSZXRyeUNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVjayIsInNldFRpbWVvdXQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiaGFuZGxlUmVzaXplIiwiX3JlZiIsIl9zbGVlcDIiLCJtcyIsIl9ibG9iVG9CYXNlMiIsImJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIl9nZXRTdHJpbmdPbldhc21IZWFwMiIsImxlbmd0aEJ5dGVzIiwibGVuZ3RoQnl0ZXNVVEY4IiwiX21hbGxvYyIsInN0cmluZ1RvVVRGOCIsIl9zZXRWaWRlb1Jlc29sdXRpb24yIiwidmlkZW9FbGVtZW50IiwiaXNTdXBwb3J0ZWRSZXNvbHV0aW9uIiwicmVzb2x1dGlvblRleHQiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJzcmNPYmplY3QiLCJfZ2V0U2Nhbm5lckFkZHJlc3MyIiwiaW5jbHVkZXMiLCJhZGRyZXNzIiwiZGVzdHJveUNhbGxiYWNrIiwic3RyaW5nT25XYXNtSGVhcCIsImdldElEQ2FyZFNjYW5uZXIiLCJkZXN0cm95SURDYXJkU2Nhbm5lciIsImdldFBhc3Nwb3J0U2Nhbm5lciIsImRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIiLCJnZXRBbGllblNjYW5uZXIiLCJkZXN0cm95QWxpZW5TY2FubmVyIiwiZ2V0Q3JlZGl0U2Nhbm5lciIsImRlc3Ryb3lDcmVkaXRTY2FubmVyIiwiX2ZyZWUiLCJfdGhpcyRyZXRyeUNvdW50R2V0QWQiLCJfdGhpcyRyZXRyeUNvdW50R2V0QWQyIiwiX2dldEJ1ZmZlcjIiLCJfZ2V0SW1hZ2VCYXNlMiIsIl94IiwiX3gyIiwiX3gzIiwiX2dldEltYWdlQmFzZTMiLCJtYXNrTW9kZSIsImNyb3BNb2RlIiwiZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlIiwianBnU2l6ZSIsImdldEVuY29kZWRKcGdTaXplIiwianBnUG9pbnRlciIsImdldEVuY29kZWRKcGdCdWZmZXIiLCJyZXN1bHRWaWV3IiwiVWludDhBcnJheSIsIkhFQVA4IiwiYnVmZmVyIiwiQmxvYiIsImRlc3Ryb3lFbmNvZGVkSnBnIiwiX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZTIiLCJfZ2V0Um90YXRpb25EZWdyZWUyIiwiX2dldE1pcnJvck1vZGUyIiwiX2Nyb3BJbWFnZUZyb21WaWRlbzIiLCJfY3JvcEltYWdlRnJvbVZpZGVvMyIsImNhbGNSZXNvbHV0aW9uX3ciLCJjYWxjUmVzb2x1dGlvbl9oIiwidmlkZW8iLCJyb3RhdGlvbkNhbnZhcyIsImd1aWRlQm94IiwiY2FsY0NhbnZhcyIsImNhbGNWaWRlb1dpZHRoIiwiY2FsY1ZpZGVvSGVpZ2h0IiwiY2FsY1ZpZGVvQ2xpZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbGNWaWRlb0NsaWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImNhbGNHdWlkZUJveENsaWVudFdpZHRoIiwiY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0IiwiY2FsY1ZpZGVvT3JpZW50YXRpb24iLCJjYWxjTWF4U1dpZHRoIiwiY2FsY01heFNIZWlnaHQiLCJzeCIsInN5IiwicmF0aW8iLCJzV2lkdGgiLCJNYXRoIiwibWluIiwicm91bmQiLCJzSGVpZ2h0IiwiY2FsY0NvbnRleHQiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9yb3RhdGUyIiwiX3g0IiwiX3g1IiwiX3g2IiwiX3JvdGF0ZTMiLCJkZWdyZWUiLCJpbWciLCJJbWFnZSIsInNyYyIsInRlbXBDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZW1wQ29udGV4dCIsInBvc2l0aW9uIiwidHJhbnNsYXRlIiwicm90YXRlIiwiUEkiLCJuZXdJbWFnZURhdGEiLCJyZXN0b3JlIiwiX2lzQ2FyZGJveERldGVjdGVkMiIsIl94NyIsIl9pc0NhcmRib3hEZXRlY3RlZDMiLCJib3hUeXBlIiwic2V0IiwiZGF0YSIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfc3RhcnRSZWNvZ25pdGlvbjIiLCJfeDgiLCJfeDkiLCJfeDEwIiwiX3N0YXJ0UmVjb2duaXRpb24zIiwic3NhTW9kZSIsIm9jclJlc3VsdCIsInNzYVJlc3VsdCIsInJlc3VsdEJ1ZmZlciIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0Iiwic2NhblRydXRoIiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJfc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjIiLCJfdGhpczQiLCJfY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyMiIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbjIiLCJfcHJvY2VlZENhbWVyYVBlcm1pc3Npb24zIiwiaXNQYXNzcG9ydCIsIl9zZXR1cFZpZGVvMiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfYWRqdXN0U3R5bGUyIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX29uRmFpbHVyZVByb2Nlc3MyIiwiX3NldFN0eWxlMiIsImVsIiwiYXNzaWduIiwidmFsIiwiZm9yY2VVcGRhdGUiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJfZ2V0SW5wdXREZXZpY2VzMiIsIl94MTEiLCJfeDEyIiwiX2dldElucHV0RGV2aWNlczMiLCJraW5kIiwibGFiZWwiLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsInZpZGVvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImdldENhcGFiaWxpdGllcyIsIl9jYXAkZmFjaW5nTW9kZSIsImNhcCIsImZhY2luZ01vZGUiLCJfc2V0dXBEb21FbGVtZW50czIiLCJ2aWRlb1dyYXAiLCJndWlkZUJveFdyYXAiLCJtYXNrQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwiY3VzdG9tVUlXcmFwIiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwib3ZlcmZsb3ciLCJzZXRBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJfb2JqZWN0U3ByZWFkIiwiY2FudmFzU3R5bGUiLCJib3JkZXIiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImN1c3RvbVVJV3JhcFN0eWxlIiwiX3gxMyIsIl9zZXR1cFZpZGVvMyIsImRldmljZUlkTGlzdCIsIm1hcCIsImRldmljZUlkIiwiY29uc3RyYWludFdpZHRoIiwiY29uc3RyYWludEhlaWdodCIsImlkZWFsIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInpvb20iLCJmb2N1c01vZGUiLCJ3aGl0ZUJhbGFuY2VNb2RlIiwic3RyZWFtIiwiZ2V0VXNlck1lZGlhIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwibmV3VmlkZW9XaWR0aCIsIm5ld1ZpZGVvSGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwidmlkZW9SYXRpb0J5SGVpZ2h0IiwidmlkZW9Jbm5lckdhcCIsImJhY2tncm91bmRDb2xvciIsIm1hc2tCb3hJbm5lciIsInF1ZXJ5U2VsZWN0b3IiLCJyIiwiaXNOYU4iLCJtYXNrQm94SW5uZXJXaWR0aCIsIm1hc2tCb3hJbm5lckhlaWdodCIsIl9sb2FkUmVzb3VyY2VzMyIsInVybCIsImZldGNoIiwiaHJlZiIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwicmVnZXgiLCJzb3VyY2UiLCJyZXBsYWNlIiwiZXZhbCIsIm9uUnVudGltZUluaXRpYWxpemVkIiwiX3JlZjYiLCJfeDE0IiwiX3N0YXJ0U2NhbkltcGwyIiwiX3RoaXM1IiwicmVqZWN0IiwiZGV0ZWN0ZWQiLCJzZXRJbnRlcnZhbCIsInJlc29sdXRpb25fdyIsInJlc29sdXRpb25faCIsIl9jbGFzc1ByaXZhdGVGaWVsZERlc3RydWN0dXJlU2V0IiwiX3RoaXMkc3NhUmV0cnlDb3VudCIsIl90aGlzJHNzYVJldHJ5Q291bnQyIiwiX29uU3VjY2Vzc1Byb2Nlc3MyIiwib2NyX3R5cGUiLCJvY3JfZGF0YSIsInBhcnNlT2NyUmVzdWx0Iiwib2NyX29yaWdpbl9pbWFnZSIsIm9jcl9tYXNraW5nX2ltYWdlIiwic3NhX21vZGUiLCJfcmVjb3ZlcnlTY2FuMiIsInJldmlld19yZXN1bHQiLCJhcGlfcmVzcG9uc2UiLCJyZXN1bHRDb2RlIiwiZXJyb3JEZXRhaWwiLCJzdGFjayIsImVycm9yX2RldGFpbCIsIl9zdGFydFNjYW4zIiwiX3JlY292ZXJ5U2NhbjMiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIl0sInNvdXJjZXMiOlsib2NyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiBnbG9iYWwtbW9kdWxlICovXG5pbXBvcnQgZGV0ZWN0b3IgZnJvbSAnLi9oZWxwZXJzL2RldGVjdG9yLmpzJztcbmltcG9ydCBwYXJzZXIgZnJvbSAnLi9oZWxwZXJzL3BhcnNlci5qcyc7XG5sZXQgaW5zdGFuY2U7XG5jbGFzcyBVc2VCT0NSIHtcbiAgSU5fUFJPR1JFU1MgPSB7XG4gICAgTk9ORTogJ25vbmUnLFxuICAgIE5PVF9SRUFEWTogJ25vdF9yZWFkeScsXG4gICAgUkVBRFk6ICdyZWFkeScsXG4gICAgQ0FSRF9ERVRFQ1RfU1VDQ0VTUzogJ2RldGVjdF9zdWNjZXNzJyxcbiAgICBDQVJEX0RFVEVDVF9GQUlMRUQ6ICdkZXRlY3RfZmFpbGVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRDogJ3JlY29nbml6ZWQnLFxuICAgIE9DUl9SRUNPR05JWkVEX1dJVEhfU1NBOiAncmVjb2duaXplZF93aXRoX3NzYScsXG4gICAgT0NSX1NVQ0NFU1M6ICdvY3Jfc3VjY2VzcycsXG4gICAgT0NSX1NVQ0NFU1NfV0lUSF9TU0E6ICdvY3Jfc3VjY2Vzc193aXRoX3NzYScsXG4gICAgT0NSX0ZBSUxFRDogJ29jcl9mYWlsZWQnXG4gIH07XG4gIFBSRUxPQURJTkdfU1RBVFVTID0ge1xuICAgIE5PVF9TVEFSVEVEOiAtMSxcbiAgICBTVEFSVEVEOiAwLFxuICAgIERPTkU6IDFcbiAgfTtcblxuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cblxuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICNPQ1JFbmdpbmUgPSBudWxsO1xuICAjaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgI3ByZWxvYWRlZCA9IGZhbHNlO1xuICAjcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQ7XG4gICNsaWNlbnNlO1xuICAjb2NyVHlwZSA9IG51bGw7XG4gICNzc2FNb2RlID0gZmFsc2U7XG4gICNzc2FSZXRyeUNvdW50ID0gMDtcbiAgI29uU3VjY2VzcyA9IG51bGw7XG4gICNvbkZhaWx1cmUgPSBudWxsO1xuICAjb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbDtcbiAgI29jclR5cGVMaXN0ID0gWydpZGNhcmQnLCAnZHJpdmVyJywgJ3Bhc3Nwb3J0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnYWxpZW4nLCAnY3JlZGl0JywgJ2lkY2FyZC1zc2EnLCAnZHJpdmVyLXNzYScsICdwYXNzcG9ydC1zc2EnLCAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLCAnYWxpZW4tc3NhJywgJ2NyZWRpdC1zc2EnXTtcbiAgI29jclR5cGVTdHJpbmcgPSBuZXcgTWFwKFtbXCIxXCIsIFwiaWRjYXJkXCJdLCBbXCIyXCIsIFwiZHJpdmVyXCJdLCBbXCIzXCIsIFwicGFzc3BvcnRcIl0sIFtcIjRcIiwgXCJmb3JlaWduLXBhc3Nwb3J0XCJdLCBbXCI1XCIsIFwiYWxpZW5cIl0sIFtcIjUtMVwiLCBcImFsaWVuXCJdLCBbXCI1LTJcIiwgXCJhbGllblwiXSwgW1wiNS0zXCIsIFwiYWxpZW5cIl1dKTtcbiAgI3BhZ2VFbmQgPSBmYWxzZTtcbiAgI29jcjtcbiAgI2NhbnZhcztcbiAgI3JvdGF0aW9uQ2FudmFzO1xuICAjdmlkZW87XG4gICN2aWRlb1dyYXA7XG4gICNndWlkZUJveDtcbiAgI2d1aWRlQm94V3JhcDtcbiAgI21hc2tCb3hXcmFwO1xuICAjcHJldmVudFRvRnJlZXplVmlkZW87XG4gICNjdXN0b21VSVdyYXA7XG4gICN0b3BVSTtcbiAgI21pZGRsZVVJO1xuICAjYm90dG9tVUk7XG4gICNCdWZmZXIgPSBudWxsO1xuICAjcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgI1ByZXZJbWFnZSA9IG51bGw7XG4gICNzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgI2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICNyZXNvbHV0aW9uV2lkdGggPSAwO1xuICAjcmVzb2x1dGlvbkhlaWdodCA9IDA7XG4gICN2aWRlb1dpZHRoID0gMDtcbiAgI3ZpZGVvSGVpZ2h0ID0gMDtcbiAgI3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAjaW50ZXJ2YWxUaW1lcjtcbiAgI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXI7XG4gICNyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZDtcbiAgI3N0cmVhbTtcbiAgI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAjZmFjaW5nTW9kZUNvbnN0cmFpbnQgPSAnZW52aXJvbm1lbnQnO1xuICAjdWlPcmllbnRhdGlvbiA9ICcnO1xuICAjcHJldlVpT3JpZW50YXRpb24gPSAnJztcbiAgI3ZpZGVvT3JpZW50YXRpb24gPSAnJztcbiAgI3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gICN0aHJvdHRsaW5nUmVzaXplRGVsYXkgPSA1MDA7XG4gICNtYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9IDMwMDsgLy8g7J6E7IucXG4gICNyZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7IC8vIOyehOyLnFxuICAjZGV2aWNlSW5mbztcbiAgI2lzUm90YXRlZDkwb3IyNzAgPSBmYWxzZTtcbiAgI2luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk7XG4gICNwcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT05FO1xuICAjaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICNpbnRlcnZhbExvY2sgPSBmYWxzZTtcbiAgI2d1aWRlQm94UmF0aW9CeVdpZHRoID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgI3ZpZGVvUmF0aW9CeUhlaWdodCA9IDAuNjsgLy8g7IiY7KCV67aI6rCAXG5cbiAgLyoqIERlZmF1bHQgb3B0aW9ucyAqL1xuICAjb3B0aW9ucyA9IG5ldyBPYmplY3Qoe1xuICAgIHNob3dDbGlwRnJhbWU6IGZhbHNlLFxuICAgIHNob3dDYW52YXNQcmV2aWV3OiBmYWxzZSxcbiAgICB1c2VUb3BVSTogdHJ1ZSxcbiAgICB1c2VUb3BVSVRleHRNc2c6IGZhbHNlLFxuICAgIHVzZU1pZGRsZVVJOiB0cnVlLFxuICAgIHVzZU1pZGRsZVVJVGV4dE1zZzogdHJ1ZSxcbiAgICB1c2VCb3R0b21VSTogdHJ1ZSxcbiAgICB1c2VCb3R0b21VSVRleHRNc2c6IGZhbHNlLFxuICAgIGZyYW1lQm9yZGVyU3R5bGU6IHtcbiAgICAgIG1hc2tfZnJhbWU6ICcjMjAyMDIzJyxcbiAgICAgIC8vIOuLpO2BrOq3uOugiOydtCAo7Yis66qF64+E64qUIOyImOygleu2iOqwgCBmZuuhnCDqs6DsoJUpXG4gICAgICBjbGlwX2ZyYW1lOiAnI2ZmMDBiZicsXG4gICAgICAvLyDrlKXtjbztlIwgKOyImOygleu2iOqwgClcbiAgICAgIHdpZHRoOiAxMCxcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIG5vdF9yZWFkeTogJyMwMDAwMDAnLFxuICAgICAgLy8g6rKA7KCVXG4gICAgICByZWFkeTogJyNiOGI4YjgnLFxuICAgICAgLy8g7ZqM7IOJXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnIzcyNWI2NycsXG4gICAgICAvLyDrs7TrnbxcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzVlOGZmZicsXG4gICAgICAvLyDtlZjriphcbiAgICAgIHJlY29nbml6ZWQ6ICcjMDAzYWMyJyxcbiAgICAgIC8vIO2MjOuekVxuICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogJyMwMDNhYzInLFxuICAgICAgLy8g7YyM656RXG4gICAgICBvY3JfZmFpbGVkOiAnI0ZBMTEzRCcsXG4gICAgICAvLyDruajqsJVcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzE0YjAwZScsXG4gICAgICAvLyDstIjroZ1cbiAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiAnIzE0YjAwZScgLy8g7LSI66GdXG4gICAgfSxcblxuICAgIHJlc291cmNlQmFzZVVybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICBkZXZpY2VMYWJlbDogJycsXG4gICAgdmlkZW9UYXJnZXRJZDogJycsXG4gICAgcm90YXRpb25EZWdyZWU6IDAsXG4gICAgbWlycm9yTW9kZTogZmFsc2UsXG4gICAgc3NhTWF4UmV0cnlDb3VudDogMFxuICB9KTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBhc3luYyBwcmVsb2FkaW5nKCkge1xuICAgIGlmICh0aGlzLmlzUHJlbG9hZGluZygpKSB7XG4gICAgICB2b2lkIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuI3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLlNUQVJURUQ7XG4gICAgICBhd2FpdCB0aGlzLiNsb2FkUmVzb3VyY2VzKCk7XG4gICAgICB0aGlzLiNwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5ET05FO1xuICAgICAgdGhpcy4jcHJlbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaW5pdGlhbGl6ZWQ7XG4gIH1cbiAgaXNQcmVsb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLiNwcmVsb2FkZWQ7XG4gIH1cbiAgZ2V0UHJlbG9hZGluZ1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy4jcHJlbG9hZGluZ1N0YXR1cztcbiAgfVxuICBnZXRPQ1JFbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI09DUkVuZ2luZTtcbiAgfVxuICBpbml0KHNldHRpbmdzKSB7XG4gICAgaWYgKCEhIXNldHRpbmdzLmxpY2Vuc2VLZXkpIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBrZXkgaXMgZW1wdHknKTtcbiAgICB0aGlzLiNsaWNlbnNlID0gc2V0dGluZ3MubGljZW5zZUtleTtcbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy4jb3B0aW9ucywgc2V0dGluZ3MpO1xuICAgIHRoaXMuc2V0T3B0aW9uKG1lcmdlZE9wdGlvbnMpO1xuICAgIHZvaWQgMDtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aGlzLiN3aW5kb3dFdmVudEJpbmQoKTtcbiAgICAgIHRoaXMuI2RldmljZUluZm8gPSBkZXRlY3Rvci5nZXRPc1ZlcnNpb24oKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgc2V0T3B0aW9uKHNldHRpbmdzKSB7XG4gICAgdGhpcy4jb3B0aW9ucyA9IHNldHRpbmdzO1xuICB9XG4gIGdldE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jb3B0aW9ucztcbiAgfVxuICBnZXRPY3JUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy4jb2NyVHlwZVN0cmluZy5nZXQodHlwZSk7XG4gIH1cbiAgZ2V0VUlPcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jdWlPcmllbnRhdGlvbjtcbiAgfVxuICBnZXRWaWRlb09yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiN2aWRlb09yaWVudGF0aW9uO1xuICB9XG4gIGFzeW5jIHN0YXJ0T0NSKHR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBudWxsKSB7XG4gICAgaWYgKCEhIXR5cGUgfHwgISEhb25TdWNjZXNzIHx8ICEhIW9uRmFpbHVyZSkge1xuICAgICAgdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiNvY3JUeXBlID0gdHlwZTtcbiAgICB0aGlzLiNzc2FNb2RlID0gdGhpcy4jb2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMTtcbiAgICB0aGlzLiNvblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG4gICAgdGhpcy4jb25GYWlsdXJlID0gb25GYWlsdXJlO1xuICAgIHRoaXMuI29uSW5Qcm9ncmVzc0NoYW5nZSA9IG9uSW5Qcm9ncmVzc0NoYW5nZTtcbiAgICBpZiAob25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy4jb3B0aW9ucy51c2VUb3BVSSkge1xuICAgICAgICB0aGlzLiN0b3BVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkudG9wVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy4jb3B0aW9ucy51c2VNaWRkbGVVSSkge1xuICAgICAgICB0aGlzLiNtaWRkbGVVSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkubWlkZGxlVUk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy4jb3B0aW9ucy51c2VCb3R0b21VSSkge1xuICAgICAgICB0aGlzLiNib3R0b21VSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuYm90dG9tVUk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbml0aWFsaXplZCEnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKTtcbiAgICAgIGlmICghdGhpcy5pc1ByZWxvYWRpbmcoKSAmJiBwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGF3YWl0IHRoaXMuI3dhaXRQcmVsb2FkZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkUpIHtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhYm5vcm1hbGx5IHByZWxvYWRpbmcgc3RhdHVzLCBwcmVsb2FkZWQ6ICR7dGhpcy5pc1ByZWxvYWRpbmcoKX0gLyBwcmVsb2FkaW5nU3RhdHVzOiAke3RoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgIGF3YWl0IHRoaXMuI3N0YXJ0U2NhbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zdG9wT0NSKCk7XG4gICAgfVxuICB9XG4gIHN0b3BPQ1IoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICB0aGlzLiNvblN1Y2Nlc3MgPSBudWxsO1xuICAgIHRoaXMuI29uRmFpbHVyZSA9IG51bGw7XG4gIH1cbiAgYXN5bmMgcmVzdGFydE9DUihvY3JUeXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgLy8gYXdhaXQgdGhpcy5zdG9wT0NSKCk7XG4gICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICBhd2FpdCB0aGlzLnN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICB9XG5cbiAgLyoqIHByaXZhdGUgbWV0aG9kcyAqL1xuICBhc3luYyAjd2FpdFByZWxvYWRlZCgpIHtcbiAgICBsZXQgd2FpdGluZ1JldHJ5Q291bnQgPSAwO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ByZWxvYWRpbmcoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YWl0aW5nUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9O1xuICAgICAgY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICAjd2luZG93RXZlbnRCaW5kKCkge1xuICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKC9pcGhvbmV8aXBvZHxpcGFkLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBjb25zdCBza2lwVG91Y2hBY3Rpb25mb3Jab29tID0gZXYgPT4ge1xuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXNfLiNwYWdlRW5kID0gdHJ1ZTtcbiAgICAgIF90aGlzXy5jbGVhbnVwKCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLiNvY3JUeXBlKSByZXR1cm47XG4gICAgICBpZiAoIV90aGlzXy4jaXNJblByb2dyZXNzSGFuZGxlUmVzaXplKSB7XG4gICAgICAgIF90aGlzXy4jaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gdHJ1ZTtcbiAgICAgICAgX3RoaXNfLiN0aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIF90aGlzXy4jaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IF90aGlzXy5yZXN0YXJ0T0NSKF90aGlzXy4jb2NyVHlwZSwgX3RoaXNfLiNvblN1Y2Nlc3MsIF90aGlzXy4jb25GYWlsdXJlLCBfdGhpc18uI29uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dChoYW5kbGVSZXNpemUsIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZURlbGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAjc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cbiAgI2Jsb2JUb0Jhc2U2NChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICB9KTtcbiAgfVxuICAvKiog65287J207IS87IqkIO2CpOulvCBoZWFwIOyXkCBhbGxvY2F0aW9uICovXG4gICNnZXRTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICghISF0aGlzLiNsaWNlbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMaWNlbnNlIEtleSBpcyBlbXB0eVwiKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLiNPQ1JFbmdpbmUubGVuZ3RoQnl0ZXNVVEY4KHRoaXMuI2xpY2Vuc2UpICsgMTtcbiAgICB0aGlzLiNzdHJpbmdPbldhc21IZWFwID0gdGhpcy4jT0NSRW5naW5lLl9tYWxsb2MobGVuZ3RoQnl0ZXMpO1xuICAgIHRoaXMuI09DUkVuZ2luZS5zdHJpbmdUb1VURjgodGhpcy4jbGljZW5zZSwgdGhpcy4jc3RyaW5nT25XYXNtSGVhcCwgbGVuZ3RoQnl0ZXMpO1xuICAgIHJldHVybiB0aGlzLiNzdHJpbmdPbldhc21IZWFwO1xuICB9XG4gICNzZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIGxldCByZXNvbHV0aW9uVGV4dCA9ICdub3QgcmVhZHknO1xuICAgIGlmICghdGhpcy4jY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIHJlc29sdXRpb25UZXh0ID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggKyAneCcgKyB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG4gICAgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMDgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTkyMCB8fCB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTkyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEwODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTI4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDcyMCB8fCB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gNzIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTI4MCkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW9FbGVtZW50LnNyY09iamVjdCA9IG51bGw7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy4jdmlkZW9XaWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgIHRoaXMuI3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH07XG4gIH1cbiAgI2dldFNjYW5uZXJBZGRyZXNzKG9jclR5cGUpIHtcbiAgICBpZiAoIXRoaXMuI29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIGxldCBkZXN0cm95Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgY29uc3Qgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuI2dldFN0cmluZ09uV2FzbUhlYXAoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0SURDYXJkU2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveUlEQ2FyZFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveVBhc3Nwb3J0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuI09DUkVuZ2luZS5kZXN0cm95QWxpZW5TY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldENyZWRpdFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy4jT0NSRW5naW5lLmRlc3Ryb3lDcmVkaXRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLiNtYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9PT0gdGhpcy4jcmV0cnlDb3VudEdldEFkZHJlc3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBMaWNlbnNlIEtleVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNyZXRyeUNvdW50R2V0QWRkcmVzcysrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFthZGRyZXNzLCBkZXN0cm95Q2FsbGJhY2tdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gOiBMaWNlbnNlIElzc3Vl7J24IOqyveyasCDsl5Drn6wg6rCS7J2EIOuwm+yVhOyEnCBlcnJvciDroZzqt7jrpbwg7LCN7J2EIOyImCDsnojqsowg7JqU7LKt7ZWE7JqUICjsnoTsi5wgTuuyiCDsnbTsg4EgYWRkcmVzc+ulvCDrqrvrsJvsnLzrqbQg6rCV7KCcIOyXkOufrClcbiAgICAgIHZvaWQgMDtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNnZXRCdWZmZXIoKSB7XG4gICAgaWYgKCF0aGlzLiNCdWZmZXIpIHtcbiAgICAgIHRoaXMuI0J1ZmZlciA9IHRoaXMuI09DUkVuZ2luZS5fbWFsbG9jKHRoaXMuI3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuI3Jlc29sdXRpb25IZWlnaHQgKiA0KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLiNyZXN1bHRCdWZmZXIpIHtcbiAgICAgIHRoaXMuI3Jlc3VsdEJ1ZmZlciA9IHRoaXMuI09DUkVuZ2luZS5fbWFsbG9jKDI1Nik7XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy4jQnVmZmVyLCB0aGlzLiNyZXN1bHRCdWZmZXJdO1xuICB9XG4gIGFzeW5jICNnZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZShhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpO1xuICAgICAgY29uc3QganBnU2l6ZSA9IHRoaXMuI09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnU2l6ZSgpO1xuICAgICAgY29uc3QganBnUG9pbnRlciA9IHRoaXMuI09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnQnVmZmVyKCk7XG4gICAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy4jT0NSRW5naW5lLkhFQVA4LmJ1ZmZlciwganBnUG9pbnRlciwganBnU2l6ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShyZXN1bHRWaWV3KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzdWx0XSwge1xuICAgICAgICB0eXBlOiAnaW1hZ2UvanBlZydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI2Jsb2JUb0Jhc2U2NChibG9iKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveUVuY29kZWRKcGcoKTtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgYnVmZmVyICovXG4gICNkZXN0cm95QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLiNCdWZmZXIpIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNCdWZmZXIpO1xuICAgICAgdGhpcy4jQnVmZmVyID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuI3Jlc3VsdEJ1ZmZlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLl9mcmVlKHRoaXMuI3Jlc3VsdEJ1ZmZlcik7XG4gICAgICB0aGlzLiNyZXN1bHRCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogRnJlZSBQcmV2SW1hZ2UgYnVmZmVyICovXG4gICNkZXN0cm95UHJldkltYWdlKCkge1xuICAgIGlmICh0aGlzLiNQcmV2SW1hZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNQcmV2SW1hZ2UpO1xuICAgICAgdGhpcy4jUHJldkltYWdlID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIGZyZWUgc3RyaW5nIGhlYXAgYnVmZmVyICovXG4gICNkZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAodGhpcy4jc3RyaW5nT25XYXNtSGVhcCkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLl9mcmVlKHRoaXMuI3N0cmluZ09uV2FzbUhlYXApO1xuICAgICAgdGhpcy4jc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBmcmVlIHNjYW5uZXIgYWRkcmVzcyAqL1xuICAjZGVzdHJveVNjYW5uZXJBZGRyZXNzKCkge1xuICAgIGlmICh0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrKSB7XG4gICAgICB0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrKCk7XG4gICAgICB0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgI2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlb0VsZW1lbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH0gPSB0aGlzLiNzZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KTtcbiAgICBpZiAoIWlzU3VwcG9ydGVkUmVzb2x1dGlvbikge1xuICAgICAgaWYgKHJlc29sdXRpb25UZXh0ICE9PSAnbm90IHJlYWR5Jykge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1N1cHBvcnRlZFJlc29sdXRpb247XG4gIH1cbiAgI2dldFJvdGF0aW9uRGVncmVlKCkge1xuICAgIHJldHVybiAodGhpcy4jb3B0aW9ucy5yb3RhdGlvbkRlZ3JlZSAlIDM2MCArIDM2MCkgJSAzNjA7XG4gIH1cbiAgI2dldE1pcnJvck1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI29wdGlvbnMubWlycm9yTW9kZTtcbiAgfVxuICBhc3luYyAjY3JvcEltYWdlRnJvbVZpZGVvKCkge1xuICAgIGlmICghdGhpcy4jY2FtU2V0Q29tcGxldGUpIHJldHVybiBbbnVsbCwgbnVsbF07XG4gICAgbGV0IFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFt0aGlzLiNyZXNvbHV0aW9uV2lkdGgsIHRoaXMuI3Jlc29sdXRpb25IZWlnaHRdO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICBndWlkZUJveFxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuXG4gICAgLy8gc291cmNlIGltYWdlIChvciB2aWRlbylcbiAgICAvLyDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiiBzeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUg+KUiOKUiOKUiOKUiCDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDIHN4ICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIHNIZWlnaHQgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgZGVzdGluYXRpb24gY2FudmFzXG4gICAgLy8g4pSDICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAgICAgICAg4pSD4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgICAgICAgIOKUgyAgICDilIogICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgICAgICAgIHNXaWR0aCAgICAgICAgICAgICAgICAgICAgICDilIMgICAg4pSKIGR5ICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbICAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIPilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgIGR4ICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIGRIZWlnaHQg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgZFdpZHRoICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUm1xuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC9kcmF3SW1hZ2VcblxuICAgIGxldCBjYWxjQ2FudmFzID0gY2FudmFzO1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNHdWlkZUJveENsaWVudFdpZHRoID0gZ3VpZGVCb3guY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNHdWlkZUJveENsaWVudEhlaWdodCA9IGd1aWRlQm94LmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uO1xuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY0d1aWRlQm94Q2xpZW50V2lkdGgsIGNhbGNHdWlkZUJveENsaWVudEhlaWdodF0gPSBbY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0LCBjYWxjR3VpZGVCb3hDbGllbnRXaWR0aF07XG4gICAgICBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbY2FsY1Jlc29sdXRpb25faCwgY2FsY1Jlc29sdXRpb25fd107XG4gICAgICBjYWxjQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBjYWxjTWF4U1dpZHRoID0gOTk5OTk7XG4gICAgbGV0IGNhbGNNYXhTSGVpZ2h0ID0gOTk5OTk7XG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN4LCBzeTtcbiAgICBjb25zdCByYXRpbyA9IGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc1dpZHRoID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0ICogcmF0aW8pLCBjYWxjTWF4U0hlaWdodCk7XG4gICAgc3ggPSBNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRXaWR0aCAtIGNhbGNHdWlkZUJveENsaWVudFdpZHRoKSAvIDIgKiByYXRpbyk7XG4gICAgc3kgPSBNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRIZWlnaHQgLSBjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHQpIC8gMiAqIHJhdGlvKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy4jcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIHRoaXMuI2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyAjcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIGRlZ3JlZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmIChkZWdyZWUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShbaW1nRGF0YSwgaW1nRGF0YVVybF0pO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gaW1nRGF0YVVybDtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIC8vIGNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGV4dCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGVtcENhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgaWYgKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcud2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWdyZWUgPT09IDkwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLmhlaWdodCwgMCk7ZWxzZSBpZiAoZGVncmVlID09PSAxODApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO2Vsc2UgaWYgKGRlZ3JlZSA9PT0gMjcwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoMCwgaW1nLndpZHRoKTtcbiAgICAgICAgdGVtcENvbnRleHQucm90YXRlKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHRlbXBDb250ZXh0KTtcbiAgICAgICAgcmVzb2x2ZShbbmV3SW1hZ2VEYXRhLCB0ZW1wQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpXSk7XG4gICAgICAgIHRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jICNpc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCkge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLiNnZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IFtpbWdEYXRhXSA9IGF3YWl0IHRoaXMuI2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy4jT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuZGV0ZWN0X2lkY2FyZChidWZmZXIsIHRoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaXNDYXJkYm94RGV0ZWN0ZWQgcmVzdWx0IC09LS0tLS0nLCByZXN1bHQpXG4gICAgICByZXR1cm4gISFyZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyAjc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCBzc2FNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhZGRyZXNzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgbGV0IHNzYVJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuI29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy4jZ2V0QnVmZmVyKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuSURDYXJkKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhblBhc3Nwb3J0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhbkFsaWVuKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgIGNhc2UgJ2NyZWRpdC1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgaWYgKG9jclJlc3VsdCA9PT0gbnVsbCB8fCBvY3JSZXN1bHQgPT09ICcnIHx8IG9jclJlc3VsdCA9PT0gJ2ZhbHNlJyB8fCBvY3JSZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3NhTW9kZSkge1xuICAgICAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoXCItc3NhXCIpID4gLTEpIHtcbiAgICAgICAgICAgIHNzYVJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuVHJ1dGgoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTU0EgTW9kZSBpcyB0cnVlLiBidXQsIG9jclR5cGUgaXMgaW52YWxpZCA6ICcgKyBvY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBjcm9wTW9kZSA9IGZhbHNlO1xuICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcImNyZWRpdFwiKSA+IC0xKSB7XG4gICAgICAgIGNyb3BNb2RlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxldCBvcmlnaW5JbWFnZSA9IGF3YWl0IHRoaXMuI2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIGZhbHNlLCBjcm9wTW9kZSk7XG4gICAgICBsZXQgbWFza0ltYWdlID0gYXdhaXQgdGhpcy4jZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdHJ1ZSwgY3JvcE1vZGUpO1xuICAgICAgbWFza0ltYWdlID0gbWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZTtcbiAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlLCBzc2FSZXN1bHRdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNzZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIHRoaXMuI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy4jcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBhc3luYyAjcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy4jb2NyVHlwZS5pbmNsdWRlcygncGFzc3BvcnQnKTtcbiAgICAgIGF3YWl0IHRoaXMuI3NldHVwVmlkZW8oaXNQYXNzcG9ydCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpZGVvXG4gICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAvLyBjb25zdCBbdHJhY2tdID0gdGhpcy4jc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW4jaW5pdGlhbGl6ZSBjYXBhYmlsaXR5JywgY2FwYWJpbGl0eSk7XG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiB2aWRlbykge1xuICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHRoaXMuI3N0cmVhbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBdm9pZCB1c2luZyB0aGlzIGluIG5ldyBicm93c2VycywgYXMgaXQgaXMgZ29pbmcgYXdheS5cbiAgICAgICAgICB2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLiNzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLiN2aWRlb09yaWVudGF0aW9uID0gdmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvLnZpZGVvSGVpZ2h0IDwgMSA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB0aGlzLiNjYW1TZXRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy4jYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICB2aWRlby53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYW1lcmEgQWNjZXNzIFBlcm1pc3Npb24gaXMgbm90IGFsbG93ZWQnO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhpcy4jb25GYWlsdXJlUHJvY2VzcyhcIkU0MDNcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5uYW1lID09PSAnTm90UmVhZGFibGVFcnJvcicpIHtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgICAgdGhpcy4jc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpOyAvLyDsnqzqt4Ag7Zi47LacXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHN0eWxlKTtcbiAgfVxuICAjY2hhbmdlU3RhZ2UodmFsLCBmb3JjZVVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuI3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPT09IHZhbCAmJiBmb3JjZVVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICB0aGlzLiNpblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveFxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnN0eWxlLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzICsgJ3B4JyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXVxuICAgIH07XG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLiNzZXRTdHlsZShndWlkZUJveCwgc3R5bGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy4jb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICBpZiAodGhpcy4jb3B0aW9ucy51c2VUb3BVSSB8fCB0aGlzLiNvcHRpb25zLnVzZVRvcFVJVGV4dE1zZykge1xuICAgICAgICB0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB2YWwsIHRoaXMuI3RvcFVJLCAndG9wJywgdGhpcy4jb3B0aW9ucy51c2VUb3BVSVRleHRNc2cpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuI29wdGlvbnMudXNlTWlkZGxlVUkgfHwgdGhpcy4jb3B0aW9ucy51c2VNaWRkbGVVSVRleHRNc2cpIHtcbiAgICAgICAgdGhpcy4jb25JblByb2dyZXNzQ2hhbmdlLmNhbGwodGhpcywgdmFsLCB0aGlzLiNtaWRkbGVVSSwgJ21pZGRsZScsIHRoaXMuI29wdGlvbnMudXNlTWlkZGxlVUlUZXh0TXNnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLiNvcHRpb25zLnVzZUJvdHRvbVVJIHx8IHRoaXMuI29wdGlvbnMudXNlQm90dG9tVUlUZXh0TXNnKSB7XG4gICAgICAgIHRoaXMuI29uSW5Qcm9ncmVzc0NoYW5nZS5jYWxsKHRoaXMsIHZhbCwgdGhpcy4jYm90dG9tVUksICdib3R0b20nLCB0aGlzLiNvcHRpb25zLnVzZUJvdHRvbVVJVGV4dE1zZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jICNnZXRJbnB1dERldmljZXMoa2luZCwgbGFiZWwpIHtcbiAgICAvLyB0aHJvdyBlcnJvciBpZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGRldmljZXMgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBkZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4ge1xuICAgICAgaWYgKGRldmljZS5raW5kID09PSBgJHtraW5kfWlucHV0YCAmJiBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IGRldmljZS5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgaWYgKGNhcD8uZmFjaW5nTW9kZT8uaW5jbHVkZXModGhpcy4jZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmlkZW9EZXZpY2VzLmxlbmd0aCA8PSAxID8gdmlkZW9EZXZpY2VzIDogdmlkZW9EZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gbGFiZWwgPyBkZXZpY2UubGFiZWwuaW5jbHVkZXMobGFiZWwpIDogdHJ1ZSk7XG4gIH1cbiAgY2hlY2tVSU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkZXRlY3Rvci5nZXRVSU9yaWVudGF0aW9uKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkub2NyKTtcbiAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnQgIT09IHRoaXMuI3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLiN1aU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIHRoaXMuI3ByZXZVaU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgaXNDaGFuZ2VkXG4gICAgfTtcbiAgfVxuICAjc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhcyxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgdmlkZW9XcmFwLFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGN1c3RvbVVJV3JhcCxcbiAgICAgIHRvcFVJLFxuICAgICAgbWlkZGxlVUksXG4gICAgICBib3R0b21VSVxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmICghb2NyKSB0aHJvdyBuZXcgRXJyb3IoXCJvY3IgZGl2IGVsZW1lbnQgaXMgbm90IGV4aXN0XCIpO1xuICAgIGlmICh2aWRlb1dyYXApIHZpZGVvV3JhcC5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3hXcmFwKSBndWlkZUJveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHZpZGVvKSB2aWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY2FudmFzKSBjYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKHJvdGF0aW9uQ2FudmFzKSByb3RhdGlvbkNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3gpIGd1aWRlQm94LnJlbW92ZSgpO1xuICAgIGlmIChtYXNrQm94V3JhcCkgbWFza0JveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKSBwcmV2ZW50VG9GcmVlemVWaWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY3VzdG9tVUlXcmFwKSBjdXN0b21VSVdyYXAucmVtb3ZlKCk7XG4gICAgLy8g6rCBIHRvcCwgbWlkZGxlLCBib3R0b20gVUnrpbwg66+47IKs7Jqp7J28IOqyveyasCDslYjsnZgg64K07Jqp7J2EIOyCreygnFxuICAgIGlmICh0b3BVSSAmJiAhdGhpcy4jb3B0aW9ucy51c2VUb3BVSSkgdG9wVUkuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKG1pZGRsZVVJICYmICF0aGlzLiNvcHRpb25zLnVzZU1pZGRsZVVJKSBtaWRkbGVVSS5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoYm90dG9tVUkgJiYgIXRoaXMuI29wdGlvbnMudXNlQm90dG9tVUkpIGJvdHRvbVVJLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy4jZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID0gWzkwLCAyNzBdLmluY2x1ZGVzKHJvdGF0aW9uRGVncmVlKTtcbiAgICBsZXQgb2NyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9O1xuICAgIHRoaXMuI3NldFN0eWxlKG9jciwgb2NyU3R5bGUpO1xuICAgIGNvbnN0IHdyYXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9O1xuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLiNzZXRTdHlsZShtYXNrQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBsZXQgbWFza19mcmFtZSA9IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5tYXNrX2ZyYW1lICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLiNvcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDwvc3ZnPlxcblwiICsgXCIgICAgPC9tYXNrPlxcblwiICsgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgKyBcIiAgICAgICAgICBmaWxsPSdcIiArIG1hc2tfZnJhbWUgKyBcIicgbWFzaz0ndXJsKCNtYXNrLXJlY3QpJz48L3JlY3Q+XFxuXCIgKyBcIiAgPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgaWYgKHRoaXMuI2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHJvdGF0ZUNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy4jZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLiNzZXRTdHlsZSh2aWRlbywgdmlkZW9TdHlsZSk7XG4gICAgdmlkZW9XcmFwLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcbiAgICBndWlkZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveCcpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy4jb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuI2lzUm90YXRlZDkwb3IyNzAgPyAnbm9uZScgOiAnZGlzcGxheScgOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvcmRlcjogJ2dyZWVuIDJweCBzb2xpZCdcbiAgICB9O1xuICAgIHRoaXMuI3NldFN0eWxlKGNhbnZhcywgY2FudmFzU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHJvdGF0aW9uQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcm90YXRpb25DYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3JvdGF0aW9uQ2FudmFzJyk7XG4gICAgdGhpcy4jc2V0U3R5bGUocm90YXRpb25DYW52YXMsIHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuI29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID8gJ2Rpc3BsYXknIDogJ25vbmUnIDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMHB4JyxcbiAgICAgIGJvcmRlcjogJ2JsdWUgMnB4IHNvbGlkJ1xuICAgIH0pO1xuICAgIG9jci5hcHBlbmRDaGlsZChyb3RhdGlvbkNhbnZhcyk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmVudFRvRnJlZXplVmlkZW8nKTtcbiAgICB0aGlzLiNzZXRTdHlsZShwcmV2ZW50VG9GcmVlemVWaWRlbywge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206ICcxMCcsXG4gICAgICByaWdodDogJzEwJ1xuICAgIH0pO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLmlubmVySFRNTCA9IFwiXCIgKyBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcXFwiIHdpZHRoPVxcXCIzMnB4XFxcIiBoZWlnaHQ9XFxcIjMycHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCI+XFxuXCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiODRcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIwLjU1NTU1NTU1NTU1NTU1NTZzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiB2YWx1ZXM9XFxcIjEwOzBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImZpbGxcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJkaXNjcmV0ZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjg0XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiO1xuICAgIFwiPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKTtcbiAgICBjdXN0b21VSVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXN0b21VSVdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2N1c3RvbVVJV3JhcCcpO1xuICAgIGNvbnN0IGN1c3RvbVVJV3JhcFN0eWxlID0ge1xuICAgICAgLi4ud3JhcFN0eWxlLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICB9O1xuICAgIHRoaXMuI3NldFN0eWxlKGN1c3RvbVVJV3JhcCwgY3VzdG9tVUlXcmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjdXN0b21VSVdyYXApO1xuXG4gICAgLy8g6rCBIHRvcCwgbWlkZGxlLCBib3R0b20gVUkg7IKs7JqpKHVzZSnsl6zrtoDsmYAg6rSA6rOE7JeG7J20IOyYgeyXreydhCDsnqHquLAg7JyE7ZW0LCBkaXbqsIAg7JeG7Jy866m0IOyDneyEsVxuICAgIC8vIGFkanVzdFN0eWxlKCkg7JeQ7IScIOyEuOu2gOyggeyduCDsgqzsnbTspojsmYAg7JyE7LmY6rCSIOuPmeyggeycvOuhnCDshKTsoJXrkKguXG4gICAgaWYgKCF0b3BVSSkge1xuICAgICAgdG9wVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvcFVJLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd0b3BVSScpO1xuICAgIH1cbiAgICBjdXN0b21VSVdyYXAuYXBwZW5kQ2hpbGQodG9wVUkpO1xuICAgIGlmICghbWlkZGxlVUkpIHtcbiAgICAgIG1pZGRsZVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtaWRkbGVVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWlkZGxlVUknKTtcbiAgICB9XG4gICAgY3VzdG9tVUlXcmFwLmFwcGVuZENoaWxkKG1pZGRsZVVJKTtcbiAgICBpZiAoIWJvdHRvbVVJKSB7XG4gICAgICBib3R0b21VSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm90dG9tVUkuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2JvdHRvbVVJJyk7XG4gICAgfVxuICAgIGN1c3RvbVVJV3JhcC5hcHBlbmRDaGlsZChib3R0b21VSSk7XG4gICAgdGhpcy4jb2NyID0gb2NyO1xuICAgIHRoaXMuI2NhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLiNyb3RhdGlvbkNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgIHRoaXMuI3ZpZGVvID0gdmlkZW87XG4gICAgdGhpcy4jdmlkZW9XcmFwID0gdmlkZW9XcmFwO1xuICAgIHRoaXMuI2d1aWRlQm94ID0gZ3VpZGVCb3g7XG4gICAgdGhpcy4jZ3VpZGVCb3hXcmFwID0gZ3VpZGVCb3hXcmFwO1xuICAgIHRoaXMuI21hc2tCb3hXcmFwID0gbWFza0JveFdyYXA7XG4gICAgdGhpcy4jcHJldmVudFRvRnJlZXplVmlkZW8gPSBwcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgICB0aGlzLiNjdXN0b21VSVdyYXAgPSBjdXN0b21VSVdyYXA7XG4gICAgdGhpcy4jdG9wVUkgPSB0b3BVSTtcbiAgICB0aGlzLiNtaWRkbGVVSSA9IG1pZGRsZVVJO1xuICAgIHRoaXMuI2JvdHRvbVVJID0gYm90dG9tVUk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9jcixcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgdmlkZW8sXG4gICAgICB2aWRlb1dyYXAsXG4gICAgICBndWlkZUJveCxcbiAgICAgIGd1aWRlQm94V3JhcCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgcHJldmVudFRvRnJlZXplVmlkZW8sXG4gICAgICBjdXN0b21VSVdyYXAsXG4gICAgICB0b3BVSSxcbiAgICAgIG1pZGRsZVVJLFxuICAgICAgYm90dG9tVUlcbiAgICB9O1xuICB9XG4gIGFzeW5jICNzZXR1cFZpZGVvKGlzUGFzc3BvcnQpIHtcbiAgICAvLyB3YXNtIOyduOyLneyEseuKpSDstZzsoIHtmZTrkJwg7ZW07IOB64+EXG4gICAgdGhpcy4jcmVzb2x1dGlvbldpZHRoID0gMTA4MDtcbiAgICB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0ID0gNzIwO1xuICAgIHRoaXMuI2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSB0aGlzLiNzZXR1cERvbUVsZW1lbnRzKCk7XG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gYXdhaXQgdGhpcy4jZ2V0SW5wdXREZXZpY2VzKCd2aWRlbycsIHRoaXMuI29wdGlvbnMuZGV2aWNlTGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb0RldmljZXMgOjogJywgdmlkZW9EZXZpY2VzKVxuICAgIGNvbnN0IGRldmljZUlkTGlzdCA9IHZpZGVvRGV2aWNlcy5tYXAoZGV2aWNlID0+IGRldmljZS5kZXZpY2VJZCk7XG4gICAgdGhpcy5jaGVja1VJT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29uc3RyYWludFdpZHRoLCBjb25zdHJhaW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLiN1aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyB1aSA6IHBvcnRyYWl0XG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiAxMDgwIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuXG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogNzIwIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1aSA6IGxhbmRzY2FwZVxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgbWluOiAxMjgwXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIG1pbjogNzIwXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJhaW50cyA9IHtcbiAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHpvb206IHtcbiAgICAgICAgICBpZGVhbDogMVxuICAgICAgICB9LFxuICAgICAgICBmYWNpbmdNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6IHRoaXMuI2ZhY2luZ01vZGVDb25zdHJhaW50XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgd2hpdGVCYWxhbmNlTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgZGV2aWNlSWQ6IHtcbiAgICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0Lmxlbmd0aCA+IDAgPyBkZXZpY2VJZExpc3RbZGV2aWNlSWRMaXN0Lmxlbmd0aCAtIDFdIDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogY29uc3RyYWludFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnN0cmFpbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBkdW1wdHJhY2sgPSAoW2EsIGJdLCB0cmFjaykgPT5cbiAgICAgIC8vICAgYCR7YX0ke3RyYWNrLmtpbmQgPT0gJ3ZpZGVvJyA/ICdDYW1lcmEnIDogJ01pY3JvcGhvbmUnfSAoJHt0cmFjay5yZWFkeVN0YXRlfSk6ICR7dHJhY2subGFiZWx9JHtifWA7XG5cbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb1RyYWNrcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKSlcbiAgICAgIC8vIGNvbnN0IHN0cmVhbVNldHRpbmdzID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1DYXBhYmlsaXRpZXMgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q2FwYWJpbGl0aWVzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENvbnN0cmFpbnRzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtU2V0dGluZ3MgOjogJywgc3RyZWFtU2V0dGluZ3MpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggLyBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoIC8gc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gYXNwZWN0UmF0aW8gOjogJyArIHN0cmVhbVNldHRpbmdzLmFzcGVjdFJhdGlvKTtcblxuICAgICAgW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0gPSBbdGhpcy4jcmVzb2x1dGlvbldpZHRoLCB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgIFtyb3RhdGlvbkNhbnZhcy53aWR0aCwgcm90YXRpb25DYW52YXMuaGVpZ2h0XSA9IFt0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0LCB0aGlzLiNyZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy4jc3RyZWFtID0gc3RyZWFtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNhZGp1c3RTdHlsZSgpIHtcbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBndWlkZUJveCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgdG9wVUksXG4gICAgICBtaWRkbGVVSSxcbiAgICAgIGJvdHRvbVVJXG4gICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQsIG5ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjT2NyQ2xpZW50V2lkdGggPSBvY3IuY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRIZWlnaHQgPSBvY3IuY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbjtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aDtcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzO1xuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY1ZpZGVvV2lkdGgsIGNhbGNWaWRlb0hlaWdodF0gPSBbY2FsY1ZpZGVvSGVpZ2h0LCBjYWxjVmlkZW9XaWR0aF07XG4gICAgICBbY2FsY1ZpZGVvQ2xpZW50V2lkdGgsIGNhbGNWaWRlb0NsaWVudEhlaWdodF0gPSBbY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9DbGllbnRXaWR0aF07XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gdGhpcy4jZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgY29uc3QgdmlkZW9SYXRpb0J5SGVpZ2h0ID0gdGhpcy4jdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgIGlmICh0aGlzLiN1aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyDshLjroZwgVUlcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDsubTrqZTrnbzrj4Qg7IS466GcXG4gICAgICAgIC8vLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ICs9IGJvcmRlcldpZHRoICogMjtcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7Lm066mU652864qUIOqwgOuhnFxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7Iqk66W8IOu5hOuUlOyYpCDshLjroZwg6ri47J207JeQIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IGNhbGNWaWRlb0NsaWVudEhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ICs9IGJvcmRlcldpZHRoICogMjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6rCA66GcIFVJXG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOqwgOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g67mE65SU7Jik66W8IGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gY2FsY09jckNsaWVudEhlaWdodCAqIHZpZGVvUmF0aW9CeUhlaWdodDtcbiAgICAgICAgLy8gaGVpZ2h0IOq4sOykgOycvOuhnCB3aWR0aCDqs4TsgrBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IG5ld1ZpZGVvSGVpZ2h0ICogKGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvSGVpZ2h0KTtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTripQg67mE65SU7Jik66W8IOyEuOuhnCDquLDspIDsnLzroZwg66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gbmV3VmlkZW9IZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCAvIGJhc2VIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgICAgICBndWlkZUJveEhlaWdodCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgY29uc3QgZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSAwLjg7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG4gICAgICAgIGd1aWRlQm94V2lkdGggKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgICAgICBndWlkZUJveEhlaWdodCArPSBib3JkZXJXaWR0aCAqIDI7XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRvcFVJKSB7XG4gICAgICB0aGlzLiNzZXRTdHlsZSh0b3BVSSwge1xuICAgICAgICAncGFkZGluZy1ib3R0b20nOiAnMTBweCcsXG4gICAgICAgICdoZWlnaHQnOiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbi1yZXZlcnNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtaWRkbGVVSSkge1xuICAgICAgdGhpcy4jc2V0U3R5bGUobWlkZGxlVUksIHtcbiAgICAgICAgd2lkdGg6IGd1aWRlQm94V2lkdGggLSBib3JkZXJXaWR0aCAqIDIgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IGd1aWRlQm94SGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgICAgICdwYWRkaW5nJzogJzEwcHgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICB0aGlzLiNzZXRTdHlsZShib3R0b21VSSwge1xuICAgICAgICAncGFkZGluZy10b3AnOiAnMTBweCcsXG4gICAgICAgICdoZWlnaHQnOiAoY2FsY09jckNsaWVudEhlaWdodCAtIGd1aWRlQm94SGVpZ2h0KSAvIDIgKyAncHgnLFxuICAgICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbidcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLiNzZXRTdHlsZSh2aWRlbywge1xuICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBuZXdWaWRlb0hlaWdodCArICdweCdcbiAgICB9KTtcbiAgICBjb25zdCB2aWRlb0lubmVyR2FwID0gMjsgLy8g66+47IS47ZWY6rKMIG1hc2tCb3hJbm5lcuuztOuLpCBndWlkZUJveOqwgCDsnpHsnYDqsoMg67O07KCVXG4gICAgdGhpcy4jc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiBndWlkZUJveFdpZHRoIC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBoZWlnaHQ6IGd1aWRlQm94SGVpZ2h0IC0gdmlkZW9Jbm5lckdhcCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9KTtcbiAgICBjb25zdCBtYXNrQm94SW5uZXIgPSBtYXNrQm94V3JhcC5xdWVyeVNlbGVjdG9yKFwiI21hc2tCb3hJbm5lclwiKTtcbiAgICBsZXQgciA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoICogMjtcbiAgICByID0gciA8IDAgPyAwIDogcjtcbiAgICBpZiAoIWlzTmFOKGd1aWRlQm94V2lkdGgpICYmICFpc05hTihndWlkZUJveEhlaWdodCkgJiYgIWlzTmFOKGJvcmRlclJhZGl1cykgJiYgIWlzTmFOKGJvcmRlcldpZHRoKSkge1xuICAgICAgY29uc3QgbWFza0JveElubmVyV2lkdGggPSBndWlkZUJveFdpZHRoIC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcDtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lckhlaWdodCA9IGd1aWRlQm94SGVpZ2h0IC0gYm9yZGVyV2lkdGggKiAyIC0gdmlkZW9Jbm5lckdhcDtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgbWFza0JveElubmVyV2lkdGggLyAyICogLTEgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgbWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncngnLCByICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCByICsgJycpO1xuICAgIH1cbiAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLiNpblByb2dyZXNzU3RlcCwgdHJ1ZSk7XG4gICAgdm9pZCAwO1xuICB9XG4gICNjbG9zZUNhbWVyYSgpIHtcbiAgICB0aGlzLiNjbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cbiAgYXN5bmMgI2xvYWRSZXNvdXJjZXMoKSB7XG4gICAgdm9pZCAwO1xuICAgIGlmICh0aGlzLiNyZXNvdXJjZXNMb2FkZWQpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCgncXVyYW0uanMnLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xuICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgncXVyYW0ud2FzbScsIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZik7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFsnXCJdcXVyYW1cXC5kYXRhW1wiJ10vZ20sIGBSRU1PVEVfUEFDS0FHRV9CQVNFID0gXCIke25ldyBVUkwoJ3F1cmFtLmRhdGEnLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZn1cImApO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ2Z1bmN0aW9uIGNyZWF0ZVdhc20nLCAnYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2FzbScpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ3ZhciBhc20gPSBjcmVhdGVXYXNtKCk7JywgJ2F3YWl0IGNyZWF0ZVdhc20oKTsnKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCdpbnN0YW50aWF0ZUFzeW5jKCk7JywgJ2F3YWl0IGluc3RhbnRpYXRlQXN5bmMoKTsnKTtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSk7XG4gICAgc3JjID0gYFxuICAgIChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICR7c3JjfVxuICAgICAgTW9kdWxlLmxlbmd0aEJ5dGVzVVRGOCA9IGxlbmd0aEJ5dGVzVVRGOFxuICAgICAgTW9kdWxlLnN0cmluZ1RvVVRGOCA9IHN0cmluZ1RvVVRGOFxuICAgICAgcmV0dXJuIE1vZHVsZVxuICAgIH0pKClcbiAgICAgICAgYDtcbiAgICB0aGlzLiNPQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgdGhpcy4jT0NSRW5naW5lLm9uUnVudGltZUluaXRpYWxpemVkID0gYXN5bmMgXyA9PiB7fTtcbiAgICBhd2FpdCB0aGlzLiNPQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQoKTtcbiAgICB0aGlzLiNyZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICAgIHZvaWQgMDtcbiAgfVxuICAjc3RhcnRTY2FuSW1wbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy4jaW50ZXJ2YWxMb2NrID0gZmFsc2U7XG4gICAgICBsZXQgZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuI3BhZ2VFbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuI2ludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHRoaXMuI2ludGVydmFsTG9jayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNpbnRlcnZhbExvY2sgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgICBpZiAoIXRoaXMuI09DUkVuZ2luZVsnYXNtJ10pIHJldHVybjtcblxuICAgICAgICAgIC8vIFRPRE8gOiDshKTsoJXtlaDsiJgg7J6I6rKMIOuzgOqyvSBkZWZhdWx0IOqwkuuPhCDsoJzqs7VcbiAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvbl93LCByZXNvbHV0aW9uX2hdID0gW3RoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdmlkZW9cbiAgICAgICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICBpZiAocmVzb2x1dGlvbl93ID09PSAwIHx8IHJlc29sdXRpb25faCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYmVmb3JlIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuICAgICAgICAgIGlmIChhZGRyZXNzID09PSAwICYmICF0aGlzLiNwYWdlRW5kICYmIHRoaXMuI2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpIHtcbiAgICAgICAgICAgIFthZGRyZXNzLCB0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrXSA9IHRoaXMuI2dldFNjYW5uZXJBZGRyZXNzKHRoaXMuI29jclR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWFkZHJlc3MgfHwgdGhpcy4jcGFnZUVuZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYWZ0ZXIgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG5cbiAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgIGlmICghKGF3YWl0IHRoaXMuI2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDApKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLlJFQURZKSB7XG4gICAgICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfRkFJTEVEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEKSB7XG4gICAgICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLiNpblByb2dyZXNzU3RlcCA9PT0gdGhpcy5JTl9QUk9HUkVTUy5DQVJEX0RFVEVDVF9TVUNDRVNTKSB7XG4gICAgICAgICAgICAvLyBmYWxsYmFjayBjYXNlIOyduOuTr1xuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICAvLyBpZiAocmVzdWx0ICE9PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnN0IFByZXZJbWFnZSA9IGdldFByZXZJbWFnZSgpO1xuICAgICAgICAgICAgLy8gICBNb2R1bGUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgUHJldkltYWdlKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29uc3QgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlLCBzc2FSZXN1bHRdID0gYXdhaXQgdGhpcy4jc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCB0aGlzLiNvY3JUeXBlLCB0aGlzLiNzc2FNb2RlKTtcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgaWYgKG9jclJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuI3NzYU1vZGUpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBcIkZBS0VcIikge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuI3NzYVJldHJ5Q291bnQgPCB0aGlzLiNvcHRpb25zLnNzYU1heFJldHJ5Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzc2FSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICB0aGlzLiNvblN1Y2Nlc3NQcm9jZXNzKHtcbiAgICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy4jb2NyVHlwZSxcbiAgICAgICAgICAgICAgICBvY3JfZGF0YTogcGFyc2VyLnBhcnNlT2NyUmVzdWx0KHRoaXMuI29jclR5cGUsIHRoaXMuI3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLiNzc2FSZXRyeUNvdW50KSxcbiAgICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiBpbWdEYXRhVXJsLFxuICAgICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBtYXNrSW1hZ2UsXG4gICAgICAgICAgICAgICAgc3NhX21vZGU6IHRoaXMuI3NzYU1vZGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuI2NsZWFySW50ZXJ2YWxUaW1lcnMoKTsgLy8gZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3InO1xuICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBcIjogXCIgKyBlLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI29uRmFpbHVyZVByb2Nlc3MoXCJXQTAwMVwiLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRoaXMuI2ludGVydmFsTG9jayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LCAxKTtcbiAgICB9KTtcbiAgfVxuICAjb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KSB7XG4gICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgIGlmIChyZXZpZXdfcmVzdWx0LnNzYV9tb2RlKSB7XG4gICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9TVUNDRVNTX1dJVEhfU1NBKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUyk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICBcInJlc3VsdF9jb2RlXCI6IFwiTjEwMFwiLFxuICAgICAgICBcInJlc3VsdF9tZXNzYWdlXCI6IFwiT0suXCJcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwic3VjY2Vzc1wiLFxuICAgICAgcmV2aWV3X3Jlc3VsdDogcmV2aWV3X3Jlc3VsdFxuICAgIH07XG4gICAgaWYgKHRoaXMuI29uU3VjY2Vzcykge1xuICAgICAgdGhpcy4jb25TdWNjZXNzKHJlc3VsdCk7XG4gICAgICB0aGlzLiNvblN1Y2Nlc3MgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gICNvbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRCk7XG4gICAgbGV0IGVycm9yRGV0YWlsID0gXCJcIjtcbiAgICBpZiAoZT8udG9TdHJpbmcoKSkgZXJyb3JEZXRhaWwgKz0gZS50b1N0cmluZygpO1xuICAgIGlmIChlPy5zdGFjaykgZXJyb3JEZXRhaWwgKz0gZS5zdGFjaztcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgXCJyZXN1bHRfY29kZVwiOiByZXN1bHRDb2RlLFxuICAgICAgICBcInJlc3VsdF9tZXNzYWdlXCI6IGVycm9yTWVzc2FnZVxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogXCJmYWlsZWRcIixcbiAgICAgIHJldmlld19yZXN1bHQ6IHtcbiAgICAgICAgb2NyX3R5cGU6IHRoaXMuI29jclR5cGUsXG4gICAgICAgIGVycm9yX2RldGFpbDogZXJyb3JEZXRhaWxcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0aGlzLiNvbkZhaWx1cmUpIHtcbiAgICAgIHRoaXMuI29uRmFpbHVyZShyZXN1bHQpO1xuICAgICAgdGhpcy4jb25GYWlsdXJlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICBhc3luYyAjc3RhcnRTY2FuKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuI3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgYXdhaXQgdGhpcy4jc3RhcnRTY2FuSW1wbCgpO1xuICAgIHZvaWQgMDtcbiAgfVxuICBhc3luYyAjcmVjb3ZlcnlTY2FuKCkge1xuICAgIHZvaWQgMDtcbiAgICB0aGlzLiNyZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgYXdhaXQgdGhpcy4jc3RhcnRTY2FuKCk7XG4gIH1cbiAgc3RvcFNjYW4oKSB7XG4gICAgdGhpcy4jY2xlYXJJbnRlcnZhbFRpbWVycygpO1xuICAgIGNvbnN0IHtcbiAgICAgIGNhbnZhc1xuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICAgIHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuICBzdG9wU3RyZWFtKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuI3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy4jc3RyZWFtKSB7XG4gICAgICB0aGlzLiNzdHJlYW0uc3RvcCAmJiB0aGlzLiNzdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuI3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy4jc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgdm9pZCAwO1xuICAgICAgaWYgKHRyYWNrcyAmJiB0cmFja3MubGVuZ3RoKSB7XG4gICAgICAgIHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLiNzdHJlYW0gPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiog66mU66qo66asIGFsbG9jYXRpb24gZnJlZSDtlajsiJggKi9cbiAgY2xlYW51cCgpIHtcbiAgICB0aGlzLiNkZXN0cm95U2Nhbm5lckFkZHJlc3MoKTtcbiAgICB0aGlzLiNkZXN0cm95QnVmZmVyKCk7XG4gICAgdGhpcy4jZGVzdHJveVByZXZJbWFnZSgpO1xuICAgIHRoaXMuI2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCk7XG4gIH1cbiAgI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG4gICNjbGVhckludGVydmFsVGltZXJzKCkge1xuICAgIGlmICh0aGlzLiNpbnRlcnZhbFRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuI2ludGVydmFsVGltZXIpO1xuICAgICAgdm9pZCAwO1xuICAgICAgdGhpcy4jaW50ZXJ2YWxUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVc2VCT0NSOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU9BLFFBQVEsTUFBTSx1QkFBdUI7QUFDNUMsT0FBT0MsTUFBTSxNQUFNLHFCQUFxQjtBQUN4QyxJQUFJQyxRQUFRO0FBQUMsSUFBQUMsVUFBQSxvQkFBQUMsT0FBQTtBQUFBLElBQUFDLFlBQUEsb0JBQUFELE9BQUE7QUFBQSxJQUFBRSxVQUFBLG9CQUFBRixPQUFBO0FBQUEsSUFBQUcsaUJBQUEsb0JBQUFILE9BQUE7QUFBQSxJQUFBSSxRQUFBLG9CQUFBSixPQUFBO0FBQUEsSUFBQUssUUFBQSxvQkFBQUwsT0FBQTtBQUFBLElBQUFNLFFBQUEsb0JBQUFOLE9BQUE7QUFBQSxJQUFBTyxjQUFBLG9CQUFBUCxPQUFBO0FB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
