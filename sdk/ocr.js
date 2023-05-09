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
        useBottomUI: true,
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
      if (onInProgressChange && _classPrivateFieldGet(_this2, _options).useBottomUI) {
        _classPrivateFieldSet(_this2, _bottomUI, detector.getOCRElements().bottomUI);
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
    _classPrivateFieldGet(this, _onInProgressChange).call(this, val, _classPrivateFieldGet(this, _bottomUI));
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
  if (bottomUI && !_classPrivateFieldGet(this, _options).useBottomUI) bottomUI.remove(); // bottomUI 미사용일 경우 삭제

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
  if (bottomUI && _classPrivateFieldGet(this, _options).useBottomUI) {
    ocr.appendChild(bottomUI); // 순서를 맨뒤로
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
    guideText: bottomUI
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
    canvas,
    guideBox,
    videoWrap,
    maskBoxWrap,
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
      if (bottomUI) {
        _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, bottomUI, {
          bottom: '20px'
        });
      }
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
    if (bottomUI) {
      _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, bottomUI, {
        bottom: '5px'
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJpbnN0YW5jZSIsIl9PQ1JFbmdpbmUiLCJXZWFrTWFwIiwiX2luaXRpYWxpemVkIiwiX3ByZWxvYWRlZCIsIl9wcmVsb2FkaW5nU3RhdHVzIiwiX2xpY2Vuc2UiLCJfb2NyVHlwZSIsIl9zc2FNb2RlIiwiX3NzYVJldHJ5Q291bnQiLCJfb25TdWNjZXNzIiwiX29uRmFpbHVyZSIsIl9vbkluUHJvZ3Jlc3NDaGFuZ2UiLCJfb2NyVHlwZUxpc3QiLCJfb2NyVHlwZVN0cmluZyIsIl9wYWdlRW5kIiwiX29jciIsIl9jYW52YXMiLCJfcm90YXRpb25DYW52YXMiLCJfdmlkZW8iLCJfdmlkZW9XcmFwIiwiX2d1aWRlQm94IiwiX2d1aWRlQm94V3JhcCIsIl9tYXNrQm94V3JhcCIsIl9wcmV2ZW50VG9GcmVlemVWaWRlbyIsIl9ib3R0b21VSSIsIl9CdWZmZXIiLCJfcmVzdWx0QnVmZmVyIiwiX1ByZXZJbWFnZSIsIl9zdHJpbmdPbldhc21IZWFwIiwiX2NhbVNldENvbXBsZXRlIiwiX3Jlc29sdXRpb25XaWR0aCIsIl9yZXNvbHV0aW9uSGVpZ2h0IiwiX3ZpZGVvV2lkdGgiLCJfdmlkZW9IZWlnaHQiLCJfcmVzb3VyY2VzTG9hZGVkIiwiX2ludGVydmFsVGltZXIiLCJfY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCIsIl9zdHJlYW0iLCJfZGVzdHJveVNjYW5uZXJDYWxsYmFjayIsIl9mYWNpbmdNb2RlQ29uc3RyYWludCIsIl91aU9yaWVudGF0aW9uIiwiX3ByZXZVaU9yaWVudGF0aW9uIiwiX3ZpZGVvT3JpZW50YXRpb24iLCJfdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIl9tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9yZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9kZXZpY2VJbmZvIiwiX2lzUm90YXRlZDkwb3IiLCJfaW5Qcm9ncmVzc1N0ZXAiLCJfcHJldmlvdXNJblByb2dyZXNzU3RlcCIsIl9pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUiLCJfaW50ZXJ2YWxMb2NrIiwiX2d1aWRlQm94UmF0aW9CeVdpZHRoIiwiX3ZpZGVvUmF0aW9CeUhlaWdodCIsIl9vcHRpb25zIiwiX3dhaXRQcmVsb2FkZWQiLCJXZWFrU2V0IiwiX3dpbmRvd0V2ZW50QmluZCIsIl9zbGVlcCIsIl9ibG9iVG9CYXNlIiwiX2dldFN0cmluZ09uV2FzbUhlYXAiLCJfc2V0VmlkZW9SZXNvbHV0aW9uIiwiX2dldFNjYW5uZXJBZGRyZXNzIiwiX2dldEJ1ZmZlciIsIl9nZXRJbWFnZUJhc2UiLCJfZGVzdHJveUJ1ZmZlciIsIl9kZXN0cm95UHJldkltYWdlIiwiX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwIiwiX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcyIsIl9pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUiLCJfZ2V0Um90YXRpb25EZWdyZWUiLCJfZ2V0TWlycm9yTW9kZSIsIl9jcm9wSW1hZ2VGcm9tVmlkZW8iLCJfcm90YXRlIiwiX2lzQ2FyZGJveERldGVjdGVkIiwiX3N0YXJ0UmVjb2duaXRpb24iLCJfc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiIsIl9zZXRTdHlsZSIsIl9jaGFuZ2VTdGFnZSIsIl9nZXRJbnB1dERldmljZXMiLCJfc2V0dXBEb21FbGVtZW50cyIsIl9zZXR1cFZpZGVvIiwiX2FkanVzdFN0eWxlIiwiX2Nsb3NlQ2FtZXJhIiwiX2xvYWRSZXNvdXJjZXMiLCJfc3RhcnRTY2FuSW1wbCIsIl9vblN1Y2Nlc3NQcm9jZXNzIiwiX29uRmFpbHVyZVByb2Nlc3MiLCJfc3RhcnRTY2FuIiwiX3JlY292ZXJ5U2NhbiIsIl9jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfY2xlYXJJbnRlcnZhbFRpbWVycyIsIlVzZUJPQ1IiLCJjb25zdHJ1Y3RvciIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9kZWZpbmVQcm9wZXJ0eSIsIk5PTkUiLCJOT1RfUkVBRFkiLCJSRUFEWSIsIkNBUkRfREVURUNUX1NVQ0NFU1MiLCJDQVJEX0RFVEVDVF9GQUlMRUQiLCJPQ1JfUkVDT0dOSVpFRCIsIk9DUl9SRUNPR05JWkVEX1dJVEhfU1NBIiwiT0NSX1NVQ0NFU1MiLCJPQ1JfU1VDQ0VTU19XSVRIX1NTQSIsIk9DUl9GQUlMRUQiLCJOT1RfU1RBUlRFRCIsIlNUQVJURUQiLCJET05FIiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJ3cml0YWJsZSIsInZhbHVlIiwiUFJFTE9BRElOR19TVEFUVVMiLCJNYXAiLCJJTl9QUk9HUkVTUyIsIk9iamVjdCIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInVzZUJvdHRvbVVJIiwiZnJhbWVCb3JkZXJTdHlsZSIsIm1hc2tfZnJhbWUiLCJjbGlwX2ZyYW1lIiwid2lkdGgiLCJzdHlsZSIsInJhZGl1cyIsIm5vdF9yZWFkeSIsInJlYWR5IiwiZGV0ZWN0X2ZhaWxlZCIsImRldGVjdF9zdWNjZXNzIiwicmVjb2duaXplZCIsInJlY29nbml6ZWRfd2l0aF9zc2EiLCJvY3JfZmFpbGVkIiwib2NyX3N1Y2Nlc3MiLCJvY3Jfc3VjY2Vzc193aXRoX3NzYSIsInJlc291cmNlQmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiZGV2aWNlTGFiZWwiLCJ2aWRlb1RhcmdldElkIiwicm90YXRpb25EZWdyZWUiLCJtaXJyb3JNb2RlIiwic3NhTWF4UmV0cnlDb3VudCIsInByZWxvYWRpbmciLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiaXNQcmVsb2FkaW5nIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9sb2FkUmVzb3VyY2VzMiIsImNhbGwiLCJpc0luaXRpYWxpemVkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiZ2V0UHJlbG9hZGluZ1N0YXR1cyIsImdldE9DUkVuZ2luZSIsImluaXQiLCJzZXR0aW5ncyIsImxpY2Vuc2VLZXkiLCJFcnJvciIsIm1lcmdlZE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJzZXRPcHRpb24iLCJfd2luZG93RXZlbnRCaW5kMiIsImdldE9zVmVyc2lvbiIsImdldE9wdGlvbiIsImdldE9jclR5cGUiLCJ0eXBlIiwiZ2V0IiwiZ2V0VUlPcmllbnRhdGlvbiIsImdldFZpZGVvT3JpZW50YXRpb24iLCJzdGFydE9DUiIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIl9hcmd1bWVudHMiLCJhcmd1bWVudHMiLCJfdGhpczIiLCJvbkluUHJvZ3Jlc3NDaGFuZ2UiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwiZ2V0T0NSRWxlbWVudHMiLCJib3R0b21VSSIsIl9jaGFuZ2VTdGFnZTIiLCJwcmVsb2FkaW5nU3RhdHVzIiwiX3dhaXRQcmVsb2FkZWQyIiwiY29uY2F0IiwiX3N0YXJ0U2NhbjIiLCJlIiwic3RvcE9DUiIsImNsZWFudXAiLCJfY2xvc2VDYW1lcmEyIiwicmVzdGFydE9DUiIsIm9jclR5cGUiLCJfdGhpczMiLCJjaGVja1VJT3JpZW50YXRpb24iLCJjdXJyZW50Iiwib2NyIiwiaXNDaGFuZ2VkIiwic3RvcFNjYW4iLCJfY2xlYXJJbnRlcnZhbFRpbWVyczIiLCJjYW52YXMiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpbGxSZWFkRnJlcXVlbnRseSIsImNsZWFyUmVjdCIsImhlaWdodCIsInN0b3BTdHJlYW0iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0b3AiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJfZGVzdHJveVNjYW5uZXJBZGRyZXNzMiIsIl9kZXN0cm95QnVmZmVyMiIsIl9kZXN0cm95UHJldkltYWdlMiIsIl9kZXN0cm95U3RyaW5nT25XYXNtSGVhcDIiLCJfd2FpdFByZWxvYWRlZDMiLCJhcHBseSIsIl90aGlzNiIsIndhaXRpbmdSZXRyeUNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVjayIsInNldFRpbWVvdXQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiaGFuZGxlUmVzaXplIiwiX3JlZiIsIl9zbGVlcDIiLCJtcyIsIl9ibG9iVG9CYXNlMiIsImJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIl9nZXRTdHJpbmdPbldhc21IZWFwMiIsImxlbmd0aEJ5dGVzIiwibGVuZ3RoQnl0ZXNVVEY4IiwiX21hbGxvYyIsInN0cmluZ1RvVVRGOCIsIl9zZXRWaWRlb1Jlc29sdXRpb24yIiwidmlkZW9FbGVtZW50IiwiaXNTdXBwb3J0ZWRSZXNvbHV0aW9uIiwicmVzb2x1dGlvblRleHQiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJzcmNPYmplY3QiLCJfZ2V0U2Nhbm5lckFkZHJlc3MyIiwiaW5jbHVkZXMiLCJhZGRyZXNzIiwiZGVzdHJveUNhbGxiYWNrIiwic3RyaW5nT25XYXNtSGVhcCIsImdldElEQ2FyZFNjYW5uZXIiLCJkZXN0cm95SURDYXJkU2Nhbm5lciIsImdldFBhc3Nwb3J0U2Nhbm5lciIsImRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIiLCJnZXRBbGllblNjYW5uZXIiLCJkZXN0cm95QWxpZW5TY2FubmVyIiwiZ2V0Q3JlZGl0U2Nhbm5lciIsImRlc3Ryb3lDcmVkaXRTY2FubmVyIiwiX2ZyZWUiLCJfdGhpcyRyZXRyeUNvdW50R2V0QWQiLCJfdGhpcyRyZXRyeUNvdW50R2V0QWQyIiwiX2dldEJ1ZmZlcjIiLCJfZ2V0SW1hZ2VCYXNlMiIsIl94IiwiX3gyIiwiX3gzIiwiX2dldEltYWdlQmFzZTMiLCJtYXNrTW9kZSIsImNyb3BNb2RlIiwiZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlIiwianBnU2l6ZSIsImdldEVuY29kZWRKcGdTaXplIiwianBnUG9pbnRlciIsImdldEVuY29kZWRKcGdCdWZmZXIiLCJyZXN1bHRWaWV3IiwiVWludDhBcnJheSIsIkhFQVA4IiwiYnVmZmVyIiwiQmxvYiIsImRlc3Ryb3lFbmNvZGVkSnBnIiwiX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZTIiLCJfZ2V0Um90YXRpb25EZWdyZWUyIiwiX2dldE1pcnJvck1vZGUyIiwiX2Nyb3BJbWFnZUZyb21WaWRlbzIiLCJfY3JvcEltYWdlRnJvbVZpZGVvMyIsImNhbGNSZXNvbHV0aW9uX3ciLCJjYWxjUmVzb2x1dGlvbl9oIiwidmlkZW8iLCJyb3RhdGlvbkNhbnZhcyIsImd1aWRlQm94IiwiY2FsY0NhbnZhcyIsImNhbGNWaWRlb1dpZHRoIiwiY2FsY1ZpZGVvSGVpZ2h0IiwiY2FsY1ZpZGVvQ2xpZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbGNWaWRlb0NsaWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImNhbGNHdWlkZUJveENsaWVudFdpZHRoIiwiY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0IiwiY2FsY1ZpZGVvT3JpZW50YXRpb24iLCJjYWxjTWF4U1dpZHRoIiwiY2FsY01heFNIZWlnaHQiLCJzeCIsInN5IiwicmF0aW8iLCJzV2lkdGgiLCJNYXRoIiwibWluIiwicm91bmQiLCJzSGVpZ2h0IiwiY2FsY0NvbnRleHQiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9yb3RhdGUyIiwiX3g0IiwiX3g1IiwiX3g2IiwiX3JvdGF0ZTMiLCJkZWdyZWUiLCJpbWciLCJJbWFnZSIsInNyYyIsInRlbXBDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZW1wQ29udGV4dCIsInBvc2l0aW9uIiwidHJhbnNsYXRlIiwicm90YXRlIiwiUEkiLCJuZXdJbWFnZURhdGEiLCJyZXN0b3JlIiwiX2lzQ2FyZGJveERldGVjdGVkMiIsIl94NyIsIl9pc0NhcmRib3hEZXRlY3RlZDMiLCJib3hUeXBlIiwic2V0IiwiZGF0YSIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfc3RhcnRSZWNvZ25pdGlvbjIiLCJfeDgiLCJfeDkiLCJfeDEwIiwiX3N0YXJ0UmVjb2duaXRpb24zIiwic3NhTW9kZSIsIm9jclJlc3VsdCIsInNzYVJlc3VsdCIsInJlc3VsdEJ1ZmZlciIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0Iiwic2NhblRydXRoIiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJfc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjIiLCJfdGhpczQiLCJfY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyMiIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbjIiLCJfcHJvY2VlZENhbWVyYVBlcm1pc3Npb24zIiwiaXNQYXNzcG9ydCIsIl9zZXR1cFZpZGVvMiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfYWRqdXN0U3R5bGUyIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX29uRmFpbHVyZVByb2Nlc3MyIiwiX3NldFN0eWxlMiIsImVsIiwiYXNzaWduIiwidmFsIiwiZm9yY2VVcGRhdGUiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJfZ2V0SW5wdXREZXZpY2VzMiIsIl94MTEiLCJfeDEyIiwiX2dldElucHV0RGV2aWNlczMiLCJraW5kIiwibGFiZWwiLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsInZpZGVvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImdldENhcGFiaWxpdGllcyIsIl9jYXAkZmFjaW5nTW9kZSIsImNhcCIsImZhY2luZ01vZGUiLCJfc2V0dXBEb21FbGVtZW50czIiLCJ2aWRlb1dyYXAiLCJndWlkZUJveFdyYXAiLCJtYXNrQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwib3ZlcmZsb3ciLCJzZXRBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJfb2JqZWN0U3ByZWFkIiwiY2FudmFzU3R5bGUiLCJib3JkZXIiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImd1aWRlVGV4dCIsIl94MTMiLCJfc2V0dXBWaWRlbzMiLCJkZXZpY2VJZExpc3QiLCJtYXAiLCJkZXZpY2VJZCIsImNvbnN0cmFpbnRXaWR0aCIsImNvbnN0cmFpbnRIZWlnaHQiLCJpZGVhbCIsImNvbnN0cmFpbnRzIiwiYXVkaW8iLCJ6b29tIiwiZm9jdXNNb2RlIiwid2hpdGVCYWxhbmNlTW9kZSIsInN0cmVhbSIsImdldFVzZXJNZWRpYSIsImJhc2VXaWR0aCIsImJhc2VIZWlnaHQiLCJzY2FubmVyRnJhbWVSYXRpbyIsImd1aWRlQm94V2lkdGgiLCJndWlkZUJveEhlaWdodCIsIm5ld1ZpZGVvV2lkdGgiLCJuZXdWaWRlb0hlaWdodCIsImNhbGNPY3JDbGllbnRXaWR0aCIsImNhbGNPY3JDbGllbnRIZWlnaHQiLCJndWlkZUJveFJhdGlvQnlXaWR0aCIsInZpZGVvUmF0aW9CeUhlaWdodCIsInZpZGVvSW5uZXJHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXNrQm94SW5uZXIiLCJxdWVyeVNlbGVjdG9yIiwiciIsImlzTmFOIiwibWFza0JveElubmVyV2lkdGgiLCJtYXNrQm94SW5uZXJIZWlnaHQiLCJfbG9hZFJlc291cmNlczMiLCJ1cmwiLCJmZXRjaCIsImhyZWYiLCJ0aGVuIiwicmVzIiwidGV4dCIsInJlZ2V4Iiwic291cmNlIiwicmVwbGFjZSIsImV2YWwiLCJvblJ1bnRpbWVJbml0aWFsaXplZCIsIl9yZWY2IiwiX3gxNCIsIl9zdGFydFNjYW5JbXBsMiIsIl90aGlzNSIsInJlamVjdCIsImRldGVjdGVkIiwic2V0SW50ZXJ2YWwiLCJyZXNvbHV0aW9uX3ciLCJyZXNvbHV0aW9uX2giLCJfY2xhc3NQcml2YXRlRmllbGREZXN0cnVjdHVyZVNldCIsIl90aGlzJHNzYVJldHJ5Q291bnQiLCJfdGhpcyRzc2FSZXRyeUNvdW50MiIsIl9vblN1Y2Nlc3NQcm9jZXNzMiIsIm9jcl90eXBlIiwib2NyX2RhdGEiLCJwYXJzZU9jclJlc3VsdCIsIm9jcl9vcmlnaW5faW1hZ2UiLCJvY3JfbWFza2luZ19pbWFnZSIsInNzYV9tb2RlIiwiX3JlY292ZXJ5U2NhbjIiLCJyZXZpZXdfcmVzdWx0IiwiYXBpX3Jlc3BvbnNlIiwicmVzdWx0Q29kZSIsImVycm9yRGV0YWlsIiwic3RhY2siLCJlcnJvcl9kZXRhaWwiLCJfc3RhcnRTY2FuMyIsIl9yZWNvdmVyeVNjYW4zIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VzIjpbIm9jci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogZ2xvYmFsLW1vZHVsZSAqL1xuaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgcGFyc2VyIGZyb20gJy4vaGVscGVycy9wYXJzZXIuanMnO1xubGV0IGluc3RhbmNlO1xuY2xhc3MgVXNlQk9DUiB7XG4gIElOX1BST0dSRVNTID0ge1xuICAgIE5PTkU6ICdub25lJyxcbiAgICBOT1RfUkVBRFk6ICdub3RfcmVhZHknLFxuICAgIFJFQURZOiAncmVhZHknLFxuICAgIENBUkRfREVURUNUX1NVQ0NFU1M6ICdkZXRlY3Rfc3VjY2VzcycsXG4gICAgQ0FSRF9ERVRFQ1RfRkFJTEVEOiAnZGV0ZWN0X2ZhaWxlZCcsXG4gICAgT0NSX1JFQ09HTklaRUQ6ICdyZWNvZ25pemVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQTogJ3JlY29nbml6ZWRfd2l0aF9zc2EnLFxuICAgIE9DUl9TVUNDRVNTOiAnb2NyX3N1Y2Nlc3MnLFxuICAgIE9DUl9TVUNDRVNTX1dJVEhfU1NBOiAnb2NyX3N1Y2Nlc3Nfd2l0aF9zc2EnLFxuICAgIE9DUl9GQUlMRUQ6ICdvY3JfZmFpbGVkJ1xuICB9O1xuICBQUkVMT0FESU5HX1NUQVRVUyA9IHtcbiAgICBOT1RfU1RBUlRFRDogLTEsXG4gICAgU1RBUlRFRDogMCxcbiAgICBET05FOiAxXG4gIH07XG5cbiAgLyoqIHB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAjT0NSRW5naW5lID0gbnVsbDtcbiAgI2luaXRpYWxpemVkID0gZmFsc2U7XG4gICNwcmVsb2FkZWQgPSBmYWxzZTtcbiAgI3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEO1xuICAjbGljZW5zZTtcbiAgI29jclR5cGUgPSBudWxsO1xuICAjc3NhTW9kZSA9IGZhbHNlO1xuICAjc3NhUmV0cnlDb3VudCA9IDA7XG4gICNvblN1Y2Nlc3MgPSBudWxsO1xuICAjb25GYWlsdXJlID0gbnVsbDtcbiAgI29uSW5Qcm9ncmVzc0NoYW5nZSA9IG51bGw7XG4gICNvY3JUeXBlTGlzdCA9IFsnaWRjYXJkJywgJ2RyaXZlcicsICdwYXNzcG9ydCcsICdmb3JlaWduLXBhc3Nwb3J0JywgJ2FsaWVuJywgJ2NyZWRpdCcsICdpZGNhcmQtc3NhJywgJ2RyaXZlci1zc2EnLCAncGFzc3BvcnQtc3NhJywgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJywgJ2FsaWVuLXNzYScsICdjcmVkaXQtc3NhJ107XG4gICNvY3JUeXBlU3RyaW5nID0gbmV3IE1hcChbW1wiMVwiLCBcImlkY2FyZFwiXSwgW1wiMlwiLCBcImRyaXZlclwiXSwgW1wiM1wiLCBcInBhc3Nwb3J0XCJdLCBbXCI0XCIsIFwiZm9yZWlnbi1wYXNzcG9ydFwiXSwgW1wiNVwiLCBcImFsaWVuXCJdLCBbXCI1LTFcIiwgXCJhbGllblwiXSwgW1wiNS0yXCIsIFwiYWxpZW5cIl0sIFtcIjUtM1wiLCBcImFsaWVuXCJdXSk7XG4gICNwYWdlRW5kID0gZmFsc2U7XG4gICNvY3I7XG4gICNjYW52YXM7XG4gICNyb3RhdGlvbkNhbnZhcztcbiAgI3ZpZGVvO1xuICAjdmlkZW9XcmFwO1xuICAjZ3VpZGVCb3g7XG4gICNndWlkZUJveFdyYXA7XG4gICNtYXNrQm94V3JhcDtcbiAgI3ByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICAjYm90dG9tVUk7XG4gICNCdWZmZXIgPSBudWxsO1xuICAjcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgI1ByZXZJbWFnZSA9IG51bGw7XG4gICNzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgI2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICNyZXNvbHV0aW9uV2lkdGggPSAwO1xuICAjcmVzb2x1dGlvbkhlaWdodCA9IDA7XG4gICN2aWRlb1dpZHRoID0gMDtcbiAgI3ZpZGVvSGVpZ2h0ID0gMDtcbiAgI3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAjaW50ZXJ2YWxUaW1lcjtcbiAgI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXI7XG4gICNyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZDtcbiAgI3N0cmVhbTtcbiAgI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAjZmFjaW5nTW9kZUNvbnN0cmFpbnQgPSAnZW52aXJvbm1lbnQnO1xuICAjdWlPcmllbnRhdGlvbiA9ICcnO1xuICAjcHJldlVpT3JpZW50YXRpb24gPSAnJztcbiAgI3ZpZGVvT3JpZW50YXRpb24gPSAnJztcbiAgI3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gICN0aHJvdHRsaW5nUmVzaXplRGVsYXkgPSA1MDA7XG4gICNtYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9IDMwMDsgLy8g7J6E7IucXG4gICNyZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7IC8vIOyehOyLnFxuICAjZGV2aWNlSW5mbztcbiAgI2lzUm90YXRlZDkwb3IyNzAgPSBmYWxzZTtcbiAgI2luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFk7XG4gICNwcmV2aW91c0luUHJvZ3Jlc3NTdGVwID0gdGhpcy5JTl9QUk9HUkVTUy5OT05FO1xuICAjaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICNpbnRlcnZhbExvY2sgPSBmYWxzZTtcbiAgI2d1aWRlQm94UmF0aW9CeVdpZHRoID0gMC44OyAvLyDsiJjsoJXrtojqsIBcbiAgI3ZpZGVvUmF0aW9CeUhlaWdodCA9IDAuNjsgLy8g7IiY7KCV67aI6rCAXG5cbiAgLyoqIERlZmF1bHQgb3B0aW9ucyAqL1xuICAjb3B0aW9ucyA9IG5ldyBPYmplY3Qoe1xuICAgIHNob3dDbGlwRnJhbWU6IGZhbHNlLFxuICAgIHNob3dDYW52YXNQcmV2aWV3OiBmYWxzZSxcbiAgICB1c2VCb3R0b21VSTogdHJ1ZSxcbiAgICBmcmFtZUJvcmRlclN0eWxlOiB7XG4gICAgICBtYXNrX2ZyYW1lOiAnIzIwMjAyMycsXG4gICAgICAvLyDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLFxuICAgICAgLy8g65Sl7Y287ZSMICjsiJjsoJXrtojqsIApXG4gICAgICB3aWR0aDogMTAsXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcbiAgICAgIHJhZGl1czogMjAsXG4gICAgICBub3RfcmVhZHk6ICcjMDAwMDAwJyxcbiAgICAgIC8vIOqygOyglVxuICAgICAgcmVhZHk6ICcjYjhiOGI4JyxcbiAgICAgIC8vIO2ajOyDiVxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyM3MjViNjcnLFxuICAgICAgLy8g67O06528XG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyM1ZThmZmYnLFxuICAgICAgLy8g7ZWY64qYXG4gICAgICByZWNvZ25pemVkOiAnIzAwM2FjMicsXG4gICAgICAvLyDtjIzrnpFcbiAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6ICcjMDAzYWMyJyxcbiAgICAgIC8vIO2MjOuekVxuICAgICAgb2NyX2ZhaWxlZDogJyNGQTExM0QnLFxuICAgICAgLy8g67mo6rCVXG4gICAgICBvY3Jfc3VjY2VzczogJyMxNGIwMGUnLFxuICAgICAgLy8g7LSI66GdXG4gICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogJyMxNGIwMGUnIC8vIOy0iOuhnVxuICAgIH0sXG5cbiAgICByZXNvdXJjZUJhc2VVcmw6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgZGV2aWNlTGFiZWw6ICcnLFxuICAgIHZpZGVvVGFyZ2V0SWQ6ICcnLFxuICAgIHJvdGF0aW9uRGVncmVlOiAwLFxuICAgIG1pcnJvck1vZGU6IGZhbHNlLFxuICAgIHNzYU1heFJldHJ5Q291bnQ6IDBcbiAgfSk7XG5cbiAgLyoqIGNvbnN0cnVjdG9yICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKiogcHVibGljIG1ldGhvZHMgKi9cbiAgYXN5bmMgcHJlbG9hZGluZygpIHtcbiAgICBpZiAodGhpcy5pc1ByZWxvYWRpbmcoKSkge1xuICAgICAgdm9pZCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLiNwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEO1xuICAgICAgYXdhaXQgdGhpcy4jbG9hZFJlc291cmNlcygpO1xuICAgICAgdGhpcy4jcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuRE9ORTtcbiAgICAgIHRoaXMuI3ByZWxvYWRlZCA9IHRydWU7XG4gICAgICB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGlzSW5pdGlhbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2luaXRpYWxpemVkO1xuICB9XG4gIGlzUHJlbG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy4jcHJlbG9hZGVkO1xuICB9XG4gIGdldFByZWxvYWRpbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cbiAgZ2V0T0NSRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLiNPQ1JFbmdpbmU7XG4gIH1cbiAgaW5pdChzZXR0aW5ncykge1xuICAgIGlmICghISFzZXR0aW5ncy5saWNlbnNlS2V5KSB0aHJvdyBuZXcgRXJyb3IoJ0xpY2Vuc2Uga2V5IGlzIGVtcHR5Jyk7XG4gICAgdGhpcy4jbGljZW5zZSA9IHNldHRpbmdzLmxpY2Vuc2VLZXk7XG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuI29wdGlvbnMsIHNldHRpbmdzKTtcbiAgICB0aGlzLnNldE9wdGlvbihtZXJnZWRPcHRpb25zKTtcbiAgICB2b2lkIDA7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy4jd2luZG93RXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLiNkZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aGlzLiNpbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldE9wdGlvbihzZXR0aW5ncykge1xuICAgIHRoaXMuI29wdGlvbnMgPSBzZXR0aW5ncztcbiAgfVxuICBnZXRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gIH1cbiAgZ2V0T2NyVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuI29jclR5cGVTdHJpbmcuZ2V0KHR5cGUpO1xuICB9XG4gIGdldFVJT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VpT3JpZW50YXRpb247XG4gIH1cbiAgZ2V0VmlkZW9PcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jdmlkZW9PcmllbnRhdGlvbjtcbiAgfVxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jb2NyVHlwZSA9IHR5cGU7XG4gICAgdGhpcy4jc3NhTW9kZSA9IHRoaXMuI29jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTE7XG4gICAgdGhpcy4jb25TdWNjZXNzID0gb25TdWNjZXNzO1xuICAgIHRoaXMuI29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBvbkluUHJvZ3Jlc3NDaGFuZ2U7XG4gICAgaWYgKG9uSW5Qcm9ncmVzc0NoYW5nZSAmJiB0aGlzLiNvcHRpb25zLnVzZUJvdHRvbVVJKSB7XG4gICAgICB0aGlzLiNib3R0b21VSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuYm90dG9tVUk7XG4gICAgfVxuICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbml0aWFsaXplZCEnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLmdldFByZWxvYWRpbmdTdGF0dXMoKTtcbiAgICAgIGlmICghdGhpcy5pc1ByZWxvYWRpbmcoKSAmJiBwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLk5PVF9TVEFSVEVEKSB7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIGF3YWl0IHRoaXMuI3dhaXRQcmVsb2FkZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkUpIHtcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhYm5vcm1hbGx5IHByZWxvYWRpbmcgc3RhdHVzLCBwcmVsb2FkZWQ6ICR7dGhpcy5pc1ByZWxvYWRpbmcoKX0gLyBwcmVsb2FkaW5nU3RhdHVzOiAke3RoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgIGF3YWl0IHRoaXMuI3N0YXJ0U2NhbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zdG9wT0NSKCk7XG4gICAgfVxuICB9XG4gIHN0b3BPQ1IoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICB0aGlzLiNvblN1Y2Nlc3MgPSBudWxsO1xuICAgIHRoaXMuI29uRmFpbHVyZSA9IG51bGw7XG4gIH1cbiAgYXN5bmMgcmVzdGFydE9DUihvY3JUeXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgLy8gYXdhaXQgdGhpcy5zdG9wT0NSKCk7XG4gICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICBhd2FpdCB0aGlzLnN0YXJ0T0NSKG9jclR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvbkluUHJvZ3Jlc3NDaGFuZ2UpO1xuICB9XG5cbiAgLyoqIHByaXZhdGUgbWV0aG9kcyAqL1xuICBhc3luYyAjd2FpdFByZWxvYWRlZCgpIHtcbiAgICBsZXQgd2FpdGluZ1JldHJ5Q291bnQgPSAwO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ByZWxvYWRpbmcoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YWl0aW5nUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9O1xuICAgICAgY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICAjd2luZG93RXZlbnRCaW5kKCkge1xuICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG4gICAgaWYgKC9pcGhvbmV8aXBvZHxpcGFkLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBjb25zdCBza2lwVG91Y2hBY3Rpb25mb3Jab29tID0gZXYgPT4ge1xuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBza2lwVG91Y2hBY3Rpb25mb3Jab29tLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXNfLiNwYWdlRW5kID0gdHJ1ZTtcbiAgICAgIF90aGlzXy5jbGVhbnVwKCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLiNvY3JUeXBlKSByZXR1cm47XG4gICAgICBpZiAoIV90aGlzXy4jaXNJblByb2dyZXNzSGFuZGxlUmVzaXplKSB7XG4gICAgICAgIF90aGlzXy4jaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gdHJ1ZTtcbiAgICAgICAgX3RoaXNfLiN0aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIF90aGlzXy4jaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IF90aGlzXy5yZXN0YXJ0T0NSKF90aGlzXy4jb2NyVHlwZSwgX3RoaXNfLiNvblN1Y2Nlc3MsIF90aGlzXy4jb25GYWlsdXJlLCBfdGhpc18uI29uSW5Qcm9ncmVzc0NoYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dChoYW5kbGVSZXNpemUsIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZURlbGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAjc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cbiAgI2Jsb2JUb0Jhc2U2NChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICB9KTtcbiAgfVxuICAvKiog65287J207IS87IqkIO2CpOulvCBoZWFwIOyXkCBhbGxvY2F0aW9uICovXG4gICNnZXRTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICghISF0aGlzLiNsaWNlbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMaWNlbnNlIEtleSBpcyBlbXB0eVwiKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSB0aGlzLiNPQ1JFbmdpbmUubGVuZ3RoQnl0ZXNVVEY4KHRoaXMuI2xpY2Vuc2UpICsgMTtcbiAgICB0aGlzLiNzdHJpbmdPbldhc21IZWFwID0gdGhpcy4jT0NSRW5naW5lLl9tYWxsb2MobGVuZ3RoQnl0ZXMpO1xuICAgIHRoaXMuI09DUkVuZ2luZS5zdHJpbmdUb1VURjgodGhpcy4jbGljZW5zZSwgdGhpcy4jc3RyaW5nT25XYXNtSGVhcCwgbGVuZ3RoQnl0ZXMpO1xuICAgIHJldHVybiB0aGlzLiNzdHJpbmdPbldhc21IZWFwO1xuICB9XG4gICNzZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIGxldCByZXNvbHV0aW9uVGV4dCA9ICdub3QgcmVhZHknO1xuICAgIGlmICghdGhpcy4jY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbixcbiAgICAgICAgcmVzb2x1dGlvblRleHRcbiAgICAgIH07XG4gICAgfVxuICAgIHJlc29sdXRpb25UZXh0ID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggKyAneCcgKyB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG4gICAgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMDgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTkyMCB8fCB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTkyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEwODApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTI4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDcyMCB8fCB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gNzIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTI4MCkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW9FbGVtZW50LnNyY09iamVjdCA9IG51bGw7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy4jdmlkZW9XaWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgIHRoaXMuI3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH07XG4gIH1cbiAgI2dldFNjYW5uZXJBZGRyZXNzKG9jclR5cGUpIHtcbiAgICBpZiAoIXRoaXMuI29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIGxldCBkZXN0cm95Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgY29uc3Qgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuI2dldFN0cmluZ09uV2FzbUhlYXAoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0SURDYXJkU2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveUlEQ2FyZFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveVBhc3Nwb3J0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuI09DUkVuZ2luZS5kZXN0cm95QWxpZW5TY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldENyZWRpdFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy4jT0NSRW5naW5lLmRlc3Ryb3lDcmVkaXRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLiNtYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9PT0gdGhpcy4jcmV0cnlDb3VudEdldEFkZHJlc3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBMaWNlbnNlIEtleVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNyZXRyeUNvdW50R2V0QWRkcmVzcysrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFthZGRyZXNzLCBkZXN0cm95Q2FsbGJhY2tdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gOiBMaWNlbnNlIElzc3Vl7J24IOqyveyasCDsl5Drn6wg6rCS7J2EIOuwm+yVhOyEnCBlcnJvciDroZzqt7jrpbwg7LCN7J2EIOyImCDsnojqsowg7JqU7LKt7ZWE7JqUICjsnoTsi5wgTuuyiCDsnbTsg4EgYWRkcmVzc+ulvCDrqrvrsJvsnLzrqbQg6rCV7KCcIOyXkOufrClcbiAgICAgIHZvaWQgMDtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNnZXRCdWZmZXIoKSB7XG4gICAgaWYgKCF0aGlzLiNCdWZmZXIpIHtcbiAgICAgIHRoaXMuI0J1ZmZlciA9IHRoaXMuI09DUkVuZ2luZS5fbWFsbG9jKHRoaXMuI3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuI3Jlc29sdXRpb25IZWlnaHQgKiA0KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLiNyZXN1bHRCdWZmZXIpIHtcbiAgICAgIHRoaXMuI3Jlc3VsdEJ1ZmZlciA9IHRoaXMuI09DUkVuZ2luZS5fbWFsbG9jKDI1Nik7XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy4jQnVmZmVyLCB0aGlzLiNyZXN1bHRCdWZmZXJdO1xuICB9XG4gIGFzeW5jICNnZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZShhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpO1xuICAgICAgY29uc3QganBnU2l6ZSA9IHRoaXMuI09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnU2l6ZSgpO1xuICAgICAgY29uc3QganBnUG9pbnRlciA9IHRoaXMuI09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnQnVmZmVyKCk7XG4gICAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy4jT0NSRW5naW5lLkhFQVA4LmJ1ZmZlciwganBnUG9pbnRlciwganBnU2l6ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShyZXN1bHRWaWV3KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzdWx0XSwge1xuICAgICAgICB0eXBlOiAnaW1hZ2UvanBlZydcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI2Jsb2JUb0Jhc2U2NChibG9iKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveUVuY29kZWRKcGcoKTtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgYnVmZmVyICovXG4gICNkZXN0cm95QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLiNCdWZmZXIpIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNCdWZmZXIpO1xuICAgICAgdGhpcy4jQnVmZmVyID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuI3Jlc3VsdEJ1ZmZlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLl9mcmVlKHRoaXMuI3Jlc3VsdEJ1ZmZlcik7XG4gICAgICB0aGlzLiNyZXN1bHRCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogRnJlZSBQcmV2SW1hZ2UgYnVmZmVyICovXG4gICNkZXN0cm95UHJldkltYWdlKCkge1xuICAgIGlmICh0aGlzLiNQcmV2SW1hZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNQcmV2SW1hZ2UpO1xuICAgICAgdGhpcy4jUHJldkltYWdlID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIGZyZWUgc3RyaW5nIGhlYXAgYnVmZmVyICovXG4gICNkZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAodGhpcy4jc3RyaW5nT25XYXNtSGVhcCkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLl9mcmVlKHRoaXMuI3N0cmluZ09uV2FzbUhlYXApO1xuICAgICAgdGhpcy4jc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBmcmVlIHNjYW5uZXIgYWRkcmVzcyAqL1xuICAjZGVzdHJveVNjYW5uZXJBZGRyZXNzKCkge1xuICAgIGlmICh0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrKSB7XG4gICAgICB0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrKCk7XG4gICAgICB0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgI2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlb0VsZW1lbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24sXG4gICAgICByZXNvbHV0aW9uVGV4dFxuICAgIH0gPSB0aGlzLiNzZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KTtcbiAgICBpZiAoIWlzU3VwcG9ydGVkUmVzb2x1dGlvbikge1xuICAgICAgaWYgKHJlc29sdXRpb25UZXh0ICE9PSAnbm90IHJlYWR5Jykge1xuICAgICAgICB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1N1cHBvcnRlZFJlc29sdXRpb247XG4gIH1cbiAgI2dldFJvdGF0aW9uRGVncmVlKCkge1xuICAgIHJldHVybiAodGhpcy4jb3B0aW9ucy5yb3RhdGlvbkRlZ3JlZSAlIDM2MCArIDM2MCkgJSAzNjA7XG4gIH1cbiAgI2dldE1pcnJvck1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI29wdGlvbnMubWlycm9yTW9kZTtcbiAgfVxuICBhc3luYyAjY3JvcEltYWdlRnJvbVZpZGVvKCkge1xuICAgIGlmICghdGhpcy4jY2FtU2V0Q29tcGxldGUpIHJldHVybiBbbnVsbCwgbnVsbF07XG4gICAgbGV0IFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFt0aGlzLiNyZXNvbHV0aW9uV2lkdGgsIHRoaXMuI3Jlc29sdXRpb25IZWlnaHRdO1xuICAgIGNvbnN0IHtcbiAgICAgIHZpZGVvLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICBndWlkZUJveFxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuXG4gICAgLy8gc291cmNlIGltYWdlIChvciB2aWRlbylcbiAgICAvLyDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiiBzeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUg+KUiOKUiOKUiOKUiCDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDIHN4ICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIHNIZWlnaHQgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgZGVzdGluYXRpb24gY2FudmFzXG4gICAgLy8g4pSDICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAgICAgICAg4pSD4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgICAgICAgIOKUgyAgICDilIogICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgICAgICAgIHNXaWR0aCAgICAgICAgICAgICAgICAgICAgICDilIMgICAg4pSKIGR5ICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbICAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIPilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgIGR4ICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIGRIZWlnaHQg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgZFdpZHRoICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUm1xuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC9kcmF3SW1hZ2VcblxuICAgIGxldCBjYWxjQ2FudmFzID0gY2FudmFzO1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNHdWlkZUJveENsaWVudFdpZHRoID0gZ3VpZGVCb3guY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNHdWlkZUJveENsaWVudEhlaWdodCA9IGd1aWRlQm94LmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uO1xuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY0d1aWRlQm94Q2xpZW50V2lkdGgsIGNhbGNHdWlkZUJveENsaWVudEhlaWdodF0gPSBbY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0LCBjYWxjR3VpZGVCb3hDbGllbnRXaWR0aF07XG4gICAgICBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbY2FsY1Jlc29sdXRpb25faCwgY2FsY1Jlc29sdXRpb25fd107XG4gICAgICBjYWxjQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuICAgIGxldCBjYWxjTWF4U1dpZHRoID0gOTk5OTk7XG4gICAgbGV0IGNhbGNNYXhTSGVpZ2h0ID0gOTk5OTk7XG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN4LCBzeTtcbiAgICBjb25zdCByYXRpbyA9IGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvQ2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc1dpZHRoID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0ICogcmF0aW8pLCBjYWxjTWF4U0hlaWdodCk7XG4gICAgc3ggPSBNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRXaWR0aCAtIGNhbGNHdWlkZUJveENsaWVudFdpZHRoKSAvIDIgKiByYXRpbyk7XG4gICAgc3kgPSBNYXRoLnJvdW5kKChjYWxjVmlkZW9DbGllbnRIZWlnaHQgLSBjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHQpIC8gMiAqIHJhdGlvKTtcbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCAwLCAwLCBjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oKTtcbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2gpO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy4jcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIHRoaXMuI2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyAjcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIGRlZ3JlZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmIChkZWdyZWUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShbaW1nRGF0YSwgaW1nRGF0YVVybF0pO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gaW1nRGF0YVVybDtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIC8vIGNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGV4dCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGVtcENhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgaWYgKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcud2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWdyZWUgPT09IDkwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLmhlaWdodCwgMCk7ZWxzZSBpZiAoZGVncmVlID09PSAxODApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO2Vsc2UgaWYgKGRlZ3JlZSA9PT0gMjcwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoMCwgaW1nLndpZHRoKTtcbiAgICAgICAgdGVtcENvbnRleHQucm90YXRlKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHRlbXBDb250ZXh0KTtcbiAgICAgICAgcmVzb2x2ZShbbmV3SW1hZ2VEYXRhLCB0ZW1wQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpXSk7XG4gICAgICAgIHRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jICNpc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCBib3hUeXBlID0gMCkge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLiNnZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IFtpbWdEYXRhXSA9IGF3YWl0IHRoaXMuI2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy4jT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuZGV0ZWN0X2lkY2FyZChidWZmZXIsIHRoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCwgYWRkcmVzcywgYm94VHlwZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaXNDYXJkYm94RGV0ZWN0ZWQgcmVzdWx0IC09LS0tLS0nLCByZXN1bHQpXG4gICAgICByZXR1cm4gISFyZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyAjc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCBzc2FNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhZGRyZXNzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgbGV0IHNzYVJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuI29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy4jZ2V0QnVmZmVyKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuSURDYXJkKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhblBhc3Nwb3J0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhbkFsaWVuKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgIGNhc2UgJ2NyZWRpdC1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgICAgaWYgKG9jclJlc3VsdCA9PT0gbnVsbCB8fCBvY3JSZXN1bHQgPT09ICcnIHx8IG9jclJlc3VsdCA9PT0gJ2ZhbHNlJyB8fCBvY3JSZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3NhTW9kZSkge1xuICAgICAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoXCItc3NhXCIpID4gLTEpIHtcbiAgICAgICAgICAgIHNzYVJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuVHJ1dGgoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTU0EgTW9kZSBpcyB0cnVlLiBidXQsIG9jclR5cGUgaXMgaW52YWxpZCA6ICcgKyBvY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRF9XSVRIX1NTQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBjcm9wTW9kZSA9IGZhbHNlO1xuICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcImNyZWRpdFwiKSA+IC0xKSB7XG4gICAgICAgIGNyb3BNb2RlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxldCBvcmlnaW5JbWFnZSA9IGF3YWl0IHRoaXMuI2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIGZhbHNlLCBjcm9wTW9kZSk7XG4gICAgICBsZXQgbWFza0ltYWdlID0gYXdhaXQgdGhpcy4jZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdHJ1ZSwgY3JvcE1vZGUpO1xuICAgICAgbWFza0ltYWdlID0gbWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZTtcbiAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlLCBzc2FSZXN1bHRdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNzZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIHRoaXMuI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy4jcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBhc3luYyAjcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy4jb2NyVHlwZS5pbmNsdWRlcygncGFzc3BvcnQnKTtcbiAgICAgIGF3YWl0IHRoaXMuI3NldHVwVmlkZW8oaXNQYXNzcG9ydCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpZGVvXG4gICAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAvLyBjb25zdCBbdHJhY2tdID0gdGhpcy4jc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW4jaW5pdGlhbGl6ZSBjYXBhYmlsaXR5JywgY2FwYWJpbGl0eSk7XG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiB2aWRlbykge1xuICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHRoaXMuI3N0cmVhbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBdm9pZCB1c2luZyB0aGlzIGluIG5ldyBicm93c2VycywgYXMgaXQgaXMgZ29pbmcgYXdheS5cbiAgICAgICAgICB2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLiNzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLiN2aWRlb09yaWVudGF0aW9uID0gdmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvLnZpZGVvSGVpZ2h0IDwgMSA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICB0aGlzLiNjYW1TZXRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy4jYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICB2aWRlby53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYW1lcmEgQWNjZXNzIFBlcm1pc3Npb24gaXMgbm90IGFsbG93ZWQnO1xuICAgICAgICB2b2lkIDA7XG4gICAgICAgIHZvaWQgMDtcbiAgICAgICAgdGhpcy4jb25GYWlsdXJlUHJvY2VzcyhcIkU0MDNcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5uYW1lID09PSAnTm90UmVhZGFibGVFcnJvcicpIHtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgICAgdGhpcy4jc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpOyAvLyDsnqzqt4Ag7Zi47LacXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHN0eWxlKTtcbiAgfVxuICAjY2hhbmdlU3RhZ2UodmFsLCBmb3JjZVVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuI3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPT09IHZhbCAmJiBmb3JjZVVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICB0aGlzLiNpblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICBjb25zdCB7XG4gICAgICBndWlkZUJveFxuICAgIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnN0eWxlLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzICsgJ3B4JyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXVxuICAgIH07XG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLiNzZXRTdHlsZShndWlkZUJveCwgc3R5bGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy4jb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICB0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB2YWwsIHRoaXMuI2JvdHRvbVVJKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgI2dldElucHV0RGV2aWNlcyhraW5kLCBsYWJlbCkge1xuICAgIC8vIHRocm93IGVycm9yIGlmIG5hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZFxuICAgIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIGNvbnN0IHZpZGVvRGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKGRldmljZSA9PiB7XG4gICAgICBpZiAoZGV2aWNlLmtpbmQgPT09IGAke2tpbmR9aW5wdXRgICYmIGRldmljZS5nZXRDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgY29uc3QgY2FwID0gZGV2aWNlLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICBpZiAoY2FwPy5mYWNpbmdNb2RlPy5pbmNsdWRlcyh0aGlzLiNmYWNpbmdNb2RlQ29uc3RyYWludCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiB2aWRlb0RldmljZXMubGVuZ3RoIDw9IDEgPyB2aWRlb0RldmljZXMgOiB2aWRlb0RldmljZXMuZmlsdGVyKGRldmljZSA9PiBsYWJlbCA/IGRldmljZS5sYWJlbC5pbmNsdWRlcyhsYWJlbCkgOiB0cnVlKTtcbiAgfVxuICBjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy4jcHJldlVpT3JpZW50YXRpb24pIHtcbiAgICAgIHRoaXMuI3VpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgdGhpcy4jcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBpc0NoYW5nZWRcbiAgICB9O1xuICB9XG4gICNzZXR1cERvbUVsZW1lbnRzKCkge1xuICAgIGxldCB7XG4gICAgICBvY3IsXG4gICAgICB2aWRlbyxcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgZ3VpZGVCb3gsXG4gICAgICB2aWRlb1dyYXAsXG4gICAgICBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCxcbiAgICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLFxuICAgICAgYm90dG9tVUlcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoIW9jcikgdGhyb3cgbmV3IEVycm9yKFwib2NyIGRpdiBlbGVtZW50IGlzIG5vdCBleGlzdFwiKTtcbiAgICBpZiAodmlkZW9XcmFwKSB2aWRlb1dyYXAucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94V3JhcCkgZ3VpZGVCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmICh2aWRlbykgdmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGNhbnZhcykgY2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChyb3RhdGlvbkNhbnZhcykgcm90YXRpb25DYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94KSBndWlkZUJveC5yZW1vdmUoKTtcbiAgICBpZiAobWFza0JveFdyYXApIG1hc2tCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmIChwcmV2ZW50VG9GcmVlemVWaWRlbykgcHJldmVudFRvRnJlZXplVmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGJvdHRvbVVJICYmICF0aGlzLiNvcHRpb25zLnVzZUJvdHRvbVVJKSBib3R0b21VSS5yZW1vdmUoKTsgLy8gYm90dG9tVUkg66+47IKs7Jqp7J28IOqyveyasCDsgq3soJxcblxuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy4jZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID0gWzkwLCAyNzBdLmluY2x1ZGVzKHJvdGF0aW9uRGVncmVlKTtcbiAgICBsZXQgb2NyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9O1xuICAgIHRoaXMuI3NldFN0eWxlKG9jciwgb2NyU3R5bGUpO1xuICAgIGNvbnN0IHdyYXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9O1xuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG4gICAgbWFza0JveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnbWFza0JveFdyYXAnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLiNzZXRTdHlsZShtYXNrQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBsZXQgbWFza19mcmFtZSA9IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5tYXNrX2ZyYW1lICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLiNvcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgKyBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArIFwiICAgIDxtYXNrIGlkPSdtYXNrLXJlY3QnPlxcblwiICsgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICsgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgKyBcIiAgICAgICAgICA8cmVjdCBpZD0nbWFza0JveElubmVyJ1xcblwiICsgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArIFwiICAgICAgICAgICAgcng9JzEwJyByeT0nMTAnXFxuXCIgKyBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgKyBcIiAgICAgIDwvc3ZnPlxcblwiICsgXCIgICAgPC9tYXNrPlxcblwiICsgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgKyBcIiAgICAgICAgICBmaWxsPSdcIiArIG1hc2tfZnJhbWUgKyBcIicgbWFzaz0ndXJsKCNtYXNrLXJlY3QpJz48L3JlY3Q+XFxuXCIgKyBcIiAgPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKG1hc2tCb3hXcmFwKTtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9O1xuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknO1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcbiAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgaWYgKHRoaXMuI2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3NcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHJvdGF0ZUNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy4jZ2V0TWlycm9yTW9kZSgpKSB7XG4gICAgICAgIHZpZGVvU3R5bGUgPSB7XG4gICAgICAgICAgLi4udmlkZW9TdHlsZSxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IG1pcnJvckNzc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLiNzZXRTdHlsZSh2aWRlbywgdmlkZW9TdHlsZSk7XG4gICAgdmlkZW9XcmFwLmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcbiAgICBndWlkZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdndWlkZUJveCcpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG4gICAgZ3VpZGVCb3hXcmFwLmFwcGVuZENoaWxkKGd1aWRlQm94KTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy4jb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/IHRoaXMuI2lzUm90YXRlZDkwb3IyNzAgPyAnbm9uZScgOiAnZGlzcGxheScgOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzI1JScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvcmRlcjogJ2dyZWVuIDJweCBzb2xpZCdcbiAgICB9O1xuICAgIHRoaXMuI3NldFN0eWxlKGNhbnZhcywgY2FudmFzU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHJvdGF0aW9uQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcm90YXRpb25DYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3JvdGF0aW9uQ2FudmFzJyk7XG4gICAgdGhpcy4jc2V0U3R5bGUocm90YXRpb25DYW52YXMsIHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuI29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyB0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID8gJ2Rpc3BsYXknIDogJ25vbmUnIDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMHB4JyxcbiAgICAgIGJvcmRlcjogJ2JsdWUgMnB4IHNvbGlkJ1xuICAgIH0pO1xuICAgIG9jci5hcHBlbmRDaGlsZChyb3RhdGlvbkNhbnZhcyk7XG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncHJldmVudFRvRnJlZXplVmlkZW8nKTtcbiAgICB0aGlzLiNzZXRTdHlsZShwcmV2ZW50VG9GcmVlemVWaWRlbywge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206ICcxMCcsXG4gICAgICByaWdodDogJzEwJ1xuICAgIH0pO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLmlubmVySFRNTCA9IFwiXCIgKyBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcXFwiIHdpZHRoPVxcXCIzMnB4XFxcIiBoZWlnaHQ9XFxcIjMycHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCI+XFxuXCIgKyBcIiAgPGNpcmNsZSBjeD1cXFwiODRcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgKyBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIwLjU1NTU1NTU1NTU1NTU1NTZzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiB2YWx1ZXM9XFxcIjEwOzBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImZpbGxcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJkaXNjcmV0ZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMC41NTU1NTU1NTU1NTU1NTU2c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjg0XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiICsgXCIgIDxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICsgXCIgIDwvY2lyY2xlPlwiO1xuICAgIFwiPC9zdmc+XCI7XG4gICAgb2NyLmFwcGVuZENoaWxkKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKTtcbiAgICBpZiAoYm90dG9tVUkgJiYgdGhpcy4jb3B0aW9ucy51c2VCb3R0b21VSSkge1xuICAgICAgb2NyLmFwcGVuZENoaWxkKGJvdHRvbVVJKTsgLy8g7Iic7ISc66W8IOunqOuSpOuhnFxuICAgIH1cblxuICAgIHRoaXMuI29jciA9IG9jcjtcbiAgICB0aGlzLiNjYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy4jcm90YXRpb25DYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICB0aGlzLiN2aWRlbyA9IHZpZGVvO1xuICAgIHRoaXMuI3ZpZGVvV3JhcCA9IHZpZGVvV3JhcDtcbiAgICB0aGlzLiNndWlkZUJveCA9IGd1aWRlQm94O1xuICAgIHRoaXMuI2d1aWRlQm94V3JhcCA9IGd1aWRlQm94V3JhcDtcbiAgICB0aGlzLiNtYXNrQm94V3JhcCA9IG1hc2tCb3hXcmFwO1xuICAgIHRoaXMuI3ByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gcHJldmVudFRvRnJlZXplVmlkZW87XG4gICAgdGhpcy4jYm90dG9tVUkgPSBib3R0b21VSTtcbiAgICByZXR1cm4ge1xuICAgICAgb2NyLFxuICAgICAgY2FudmFzLFxuICAgICAgcm90YXRpb25DYW52YXMsXG4gICAgICB2aWRlbyxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94LFxuICAgICAgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsXG4gICAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyxcbiAgICAgIGd1aWRlVGV4dDogYm90dG9tVUlcbiAgICB9O1xuICB9XG4gIGFzeW5jICNzZXR1cFZpZGVvKGlzUGFzc3BvcnQpIHtcbiAgICAvLyB3YXNtIOyduOyLneyEseuKpSDstZzsoIHtmZTrkJwg7ZW07IOB64+EXG4gICAgdGhpcy4jcmVzb2x1dGlvbldpZHRoID0gMTA4MDtcbiAgICB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0ID0gNzIwO1xuICAgIHRoaXMuI2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICByb3RhdGlvbkNhbnZhc1xuICAgIH0gPSB0aGlzLiNzZXR1cERvbUVsZW1lbnRzKCk7XG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gYXdhaXQgdGhpcy4jZ2V0SW5wdXREZXZpY2VzKCd2aWRlbycsIHRoaXMuI29wdGlvbnMuZGV2aWNlTGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb0RldmljZXMgOjogJywgdmlkZW9EZXZpY2VzKVxuICAgIGNvbnN0IGRldmljZUlkTGlzdCA9IHZpZGVvRGV2aWNlcy5tYXAoZGV2aWNlID0+IGRldmljZS5kZXZpY2VJZCk7XG4gICAgdGhpcy5jaGVja1VJT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29uc3RyYWludFdpZHRoLCBjb25zdHJhaW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLiN1aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICAvLyB1aSA6IHBvcnRyYWl0XG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiAxMDgwIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuXG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogNzIwIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1aSA6IGxhbmRzY2FwZVxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgbWluOiAxMjgwXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIG1pbjogNzIwXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJhaW50cyA9IHtcbiAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHpvb206IHtcbiAgICAgICAgICBpZGVhbDogMVxuICAgICAgICB9LFxuICAgICAgICBmYWNpbmdNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6IHRoaXMuI2ZhY2luZ01vZGVDb25zdHJhaW50XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgd2hpdGVCYWxhbmNlTW9kZToge1xuICAgICAgICAgIGlkZWFsOiAnY29udGludW91cydcbiAgICAgICAgfSxcbiAgICAgICAgZGV2aWNlSWQ6IHtcbiAgICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0Lmxlbmd0aCA+IDAgPyBkZXZpY2VJZExpc3RbZGV2aWNlSWRMaXN0Lmxlbmd0aCAtIDFdIDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogY29uc3RyYWludFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnN0cmFpbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBkdW1wdHJhY2sgPSAoW2EsIGJdLCB0cmFjaykgPT5cbiAgICAgIC8vICAgYCR7YX0ke3RyYWNrLmtpbmQgPT0gJ3ZpZGVvJyA/ICdDYW1lcmEnIDogJ01pY3JvcGhvbmUnfSAoJHt0cmFjay5yZWFkeVN0YXRlfSk6ICR7dHJhY2subGFiZWx9JHtifWA7XG5cbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb1RyYWNrcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKSlcbiAgICAgIC8vIGNvbnN0IHN0cmVhbVNldHRpbmdzID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1DYXBhYmlsaXRpZXMgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q2FwYWJpbGl0aWVzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENvbnN0cmFpbnRzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtU2V0dGluZ3MgOjogJywgc3RyZWFtU2V0dGluZ3MpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggLyBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoIC8gc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gYXNwZWN0UmF0aW8gOjogJyArIHN0cmVhbVNldHRpbmdzLmFzcGVjdFJhdGlvKTtcblxuICAgICAgW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0gPSBbdGhpcy4jcmVzb2x1dGlvbldpZHRoLCB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgIFtyb3RhdGlvbkNhbnZhcy53aWR0aCwgcm90YXRpb25DYW52YXMuaGVpZ2h0XSA9IFt0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0LCB0aGlzLiNyZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy4jc3RyZWFtID0gc3RyZWFtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNhZGp1c3RTdHlsZSgpIHtcbiAgICB2b2lkIDA7XG4gICAgY29uc3Qge1xuICAgICAgb2NyLFxuICAgICAgdmlkZW8sXG4gICAgICBjYW52YXMsXG4gICAgICBndWlkZUJveCxcbiAgICAgIHZpZGVvV3JhcCxcbiAgICAgIG1hc2tCb3hXcmFwLFxuICAgICAgYm90dG9tVUlcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAvLyDquLDspIDsoJXrs7RcbiAgICBjb25zdCBiYXNlV2lkdGggPSA0MDA7XG4gICAgY29uc3QgYmFzZUhlaWdodCA9IDI2MDtcbiAgICBjb25zdCBzY2FubmVyRnJhbWVSYXRpbyA9IGJhc2VIZWlnaHQgLyBiYXNlV2lkdGg7IC8vIOyLoOu2hOymnSDruYTsnKhcblxuICAgIGxldCBndWlkZUJveFdpZHRoLCBndWlkZUJveEhlaWdodCwgbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IG9jci5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXM7XG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG4gICAgY29uc3QgZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSB0aGlzLiNndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICBjb25zdCB2aWRlb1JhdGlvQnlIZWlnaHQgPSB0aGlzLiN2aWRlb1JhdGlvQnlIZWlnaHQ7XG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIC8vIOyEuOuhnCBVSVxuICAgICAgLy8gdmlkZW8g6rCA66GcIOq4sOykgCAxMDAlIOycoOyngCAo67OA6rK97JeG7J2MKVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLiN1aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOy5tOuplOudvOuPhCDshLjroZxcbiAgICAgICAgLy8vIOyEuOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuICAgICAgICBndWlkZUJveFdpZHRoICs9IGJvcmRlcldpZHRoICogMjtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDruYTrlJTsmKQg7ZmV64yAXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiAoY2FsY1ZpZGVvSGVpZ2h0IC8gY2FsY1ZpZGVvV2lkdGgpO1xuICAgICAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDsubTrqZTrnbzripQg6rCA66GcXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqTrpbwg67mE65SU7JikIOyEuOuhnCDquLjsnbTsl5Ag66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGggLyBiYXNlSGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoICs9IGJvcmRlcldpZHRoICogMjtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgKz0gYm9yZGVyV2lkdGggKiAyO1xuICAgICAgICBpZiAoYm90dG9tVUkpIHtcbiAgICAgICAgICB0aGlzLiNzZXRTdHlsZShib3R0b21VSSwge1xuICAgICAgICAgICAgYm90dG9tOiAnMjBweCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDqsIDroZwgVUlcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDruYTrlJTsmKTrpbwgaGVpZ2h0IOq4sOykgOycvOuhnCDspITsnbTqs6BcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0O1xuICAgICAgICAvLyBoZWlnaHQg6riw7KSA7Jy866GcIHdpZHRoIOqzhOyCsFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gbmV3VmlkZW9IZWlnaHQgKiAoY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9IZWlnaHQpO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnOuwleyKpOuKlCDruYTrlJTsmKTrpbwg7IS466GcIOq4sOykgOycvOuhnCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBuZXdWaWRlb0hlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoIC8gYmFzZUhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ICs9IGJvcmRlcldpZHRoICogMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDshLjroZwg67mE65SU7JikXG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IDAuODtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCArPSBib3JkZXJXaWR0aCAqIDI7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ICs9IGJvcmRlcldpZHRoICogMjtcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICAgIHRoaXMuI3NldFN0eWxlKGJvdHRvbVVJLCB7XG4gICAgICAgICAgYm90dG9tOiAnNXB4J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy4jc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgIHdpZHRoOiBuZXdWaWRlb1dpZHRoICsgJ3B4JyxcbiAgICAgIGhlaWdodDogbmV3VmlkZW9IZWlnaHQgKyAncHgnXG4gICAgfSk7XG4gICAgY29uc3QgdmlkZW9Jbm5lckdhcCA9IDI7IC8vIOuvuOyEuO2VmOqyjCBtYXNrQm94SW5uZXLrs7Tri6QgZ3VpZGVCb3jqsIAg7J6R7J2A6rKDIOuztOyglVxuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogZ3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiBndWlkZUJveEhlaWdodCAtIHZpZGVvSW5uZXJHYXAgKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgfSk7XG4gICAgY29uc3QgbWFza0JveElubmVyID0gbWFza0JveFdyYXAucXVlcnlTZWxlY3RvcihcIiNtYXNrQm94SW5uZXJcIik7XG4gICAgbGV0IHIgPSBib3JkZXJSYWRpdXMgLSBib3JkZXJXaWR0aCAqIDI7XG4gICAgciA9IHIgPCAwID8gMCA6IHI7XG4gICAgaWYgKCFpc05hTihndWlkZUJveFdpZHRoKSAmJiAhaXNOYU4oZ3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gZ3VpZGVCb3hXaWR0aCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXA7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSBndWlkZUJveEhlaWdodCAtIGJvcmRlcldpZHRoICogMiAtIHZpZGVvSW5uZXJHYXA7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsIG1hc2tCb3hJbm5lcldpZHRoICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgbWFza0JveElubmVySGVpZ2h0ICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneCcsIG1hc2tCb3hJbm5lcldpZHRoIC8gMiAqIC0xICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneScsIG1hc2tCb3hJbm5lckhlaWdodCAvIDIgKiAtMSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J4JywgciArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J5JywgciArICcnKTtcbiAgICB9XG4gICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy4jaW5Qcm9ncmVzc1N0ZXAsIHRydWUpO1xuICAgIHZvaWQgMDtcbiAgfVxuICAjY2xvc2VDYW1lcmEoKSB7XG4gICAgdGhpcy4jY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICB9XG4gIGFzeW5jICNsb2FkUmVzb3VyY2VzKCkge1xuICAgIHZvaWQgMDtcbiAgICBpZiAodGhpcy4jcmVzb3VyY2VzTG9hZGVkKSB7XG4gICAgICB2b2lkIDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJ3F1cmFtLmpzJywgdGhpcy4jb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpO1xuICAgIGxldCBzcmMgPSBhd2FpdCBmZXRjaCh1cmwuaHJlZikudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcbiAgICAgIGxldCByZWdleCA9IC8oLiopID0gTW9kdWxlLmN3cmFwL2dtO1xuICAgICAgbGV0IHNvdXJjZSA9IHRleHQucmVwbGFjZShyZWdleCwgJ01vZHVsZS4kMSA9IE1vZHVsZS5jd3JhcCcpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJ3F1cmFtLndhc20nLCBuZXcgVVJMKCdxdXJhbS53YXNtJywgdGhpcy4jb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWYpO1xuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL1JFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXXF1cmFtXFwuZGF0YVtcIiddL2dtLCBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwiJHtuZXcgVVJMKCdxdXJhbS5kYXRhJywgdGhpcy4jb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWZ9XCJgKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCdmdW5jdGlvbiBjcmVhdGVXYXNtJywgJ2FzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdhc20nKTtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsICdhd2FpdCBjcmVhdGVXYXNtKCk7Jyk7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgnaW5zdGFudGlhdGVBc3luYygpOycsICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7Jyk7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH0pO1xuICAgIHNyYyA9IGBcbiAgICAoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAke3NyY31cbiAgICAgIE1vZHVsZS5sZW5ndGhCeXRlc1VURjggPSBsZW5ndGhCeXRlc1VURjhcbiAgICAgIE1vZHVsZS5zdHJpbmdUb1VURjggPSBzdHJpbmdUb1VURjhcbiAgICAgIHJldHVybiBNb2R1bGVcbiAgICB9KSgpXG4gICAgICAgIGA7XG4gICAgdGhpcy4jT0NSRW5naW5lID0gYXdhaXQgZXZhbChzcmMpO1xuICAgIHRoaXMuI09DUkVuZ2luZS5vblJ1bnRpbWVJbml0aWFsaXplZCA9IGFzeW5jIF8gPT4ge307XG4gICAgYXdhaXQgdGhpcy4jT0NSRW5naW5lLm9uUnVudGltZUluaXRpYWxpemVkKCk7XG4gICAgdGhpcy4jcmVzb3VyY2VzTG9hZGVkID0gdHJ1ZTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgI3N0YXJ0U2NhbkltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuI2ludGVydmFsTG9jayA9IGZhbHNlO1xuICAgICAgbGV0IGRldGVjdGVkID0gZmFsc2U7XG4gICAgICBsZXQgYWRkcmVzcyA9IDA7XG4gICAgICB0aGlzLiNwYWdlRW5kID0gZmFsc2U7XG4gICAgICB0aGlzLiNpbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh0aGlzLiNpbnRlcnZhbExvY2sgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jaW50ZXJ2YWxMb2NrID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgaWYgKCF0aGlzLiNPQ1JFbmdpbmVbJ2FzbSddKSByZXR1cm47XG5cbiAgICAgICAgICAvLyBUT0RPIDog7ISk7KCV7ZWg7IiYIOyeiOqyjCDrs4Dqsr0gZGVmYXVsdCDqsJLrj4Qg7KCc6rO1XG4gICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25fdywgcmVzb2x1dGlvbl9oXSA9IFt0aGlzLiNyZXNvbHV0aW9uV2lkdGgsIHRoaXMuI3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHZpZGVvXG4gICAgICAgICAgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICAgICAgaWYgKHJlc29sdXRpb25fdyA9PT0gMCB8fCByZXNvbHV0aW9uX2ggPT09IDApIHJldHVybjtcbiAgICAgICAgICBpZiAoZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuI3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGJlZm9yZSAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcbiAgICAgICAgICBpZiAoYWRkcmVzcyA9PT0gMCAmJiAhdGhpcy4jcGFnZUVuZCAmJiB0aGlzLiNpc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW8pKSB7XG4gICAgICAgICAgICBbYWRkcmVzcywgdGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFja10gPSB0aGlzLiNnZXRTY2FubmVyQWRkcmVzcyh0aGlzLiNvY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFhZGRyZXNzIHx8IHRoaXMuI3BhZ2VFbmQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuI3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGFmdGVyIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuXG4gICAgICAgICAgLy8gY2FyZCBub3QgZGV0ZWN0ZWRcbiAgICAgICAgICBpZiAoIShhd2FpdCB0aGlzLiNpc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzLCAwKSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNpblByb2dyZXNzU3RlcCAhPT0gdGhpcy5JTl9QUk9HUkVTUy5SRUFEWSkge1xuICAgICAgICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX0ZBSUxFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNpblByb2dyZXNzU3RlcCAhPT0gdGhpcy5JTl9QUk9HUkVTUy5PQ1JfUkVDT0dOSVpFRCkge1xuICAgICAgICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX1NVQ0NFU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy4jaW5Qcm9ncmVzc1N0ZXAgPT09IHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUykge1xuICAgICAgICAgICAgLy8gZmFsbGJhY2sgY2FzZSDsnbjrk69cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgLy8gaWYgKHJlc3VsdCAhPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgLy8gICBjb25zdCBQcmV2SW1hZ2UgPSBnZXRQcmV2SW1hZ2UoKTtcbiAgICAgICAgICAgIC8vICAgTW9kdWxlLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIFByZXZJbWFnZSk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGNvbnN0IFtvY3JSZXN1bHQsIGltZ0RhdGFVcmwsIG1hc2tJbWFnZSwgc3NhUmVzdWx0XSA9IGF3YWl0IHRoaXMuI3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgdGhpcy4jb2NyVHlwZSwgdGhpcy4jc3NhTW9kZSk7XG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIGlmIChvY3JSZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiNzc2FNb2RlKSB7XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gXCJGQUtFXCIpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiNzc2FSZXRyeUNvdW50IDwgdGhpcy4jb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc3NhUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgICAgICAgdGhpcy4jb25TdWNjZXNzUHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgb2NyX3R5cGU6IHRoaXMuI29jclR5cGUsXG4gICAgICAgICAgICAgICAgb2NyX2RhdGE6IHBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLiNvY3JUeXBlLCB0aGlzLiNzc2FNb2RlLCBvY3JSZXN1bHQsIHNzYVJlc3VsdCwgdGhpcy4jc3NhUmV0cnlDb3VudCksXG4gICAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogaW1nRGF0YVVybCxcbiAgICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogbWFza0ltYWdlLFxuICAgICAgICAgICAgICAgIHNzYV9tb2RlOiB0aGlzLiNzc2FNb2RlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLiNjbGVhckludGVydmFsVGltZXJzKCk7IC8vIGZvciBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yJztcbiAgICAgICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gXCI6IFwiICsgZS5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2b2lkIDA7XG4gICAgICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuI3JlY292ZXJ5U2NhbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNvbkZhaWx1cmVQcm9jZXNzKFwiV0EwMDFcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0aGlzLiNpbnRlcnZhbExvY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSwgMSk7XG4gICAgfSk7XG4gIH1cbiAgI29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCkge1xuICAgIC8vIOyduOyLnSDshLHqs7Ug7Iqk7LqUIOujqO2UhCDsooXro4xcbiAgICBpZiAocmV2aWV3X3Jlc3VsdC5zc2FfbW9kZSkge1xuICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTU19XSVRIX1NTQSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX1NVQ0NFU1MpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgXCJyZXN1bHRfY29kZVwiOiBcIk4xMDBcIixcbiAgICAgICAgXCJyZXN1bHRfbWVzc2FnZVwiOiBcIk9LLlwiXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiBcInN1Y2Nlc3NcIixcbiAgICAgIHJldmlld19yZXN1bHQ6IHJldmlld19yZXN1bHRcbiAgICB9O1xuICAgIGlmICh0aGlzLiNvblN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuI29uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgdGhpcy4jb25TdWNjZXNzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCAwO1xuICAgIH1cbiAgfVxuICAjb25GYWlsdXJlUHJvY2VzcyhyZXN1bHRDb2RlLCBlLCBlcnJvck1lc3NhZ2UpIHtcbiAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgIGxldCBlcnJvckRldGFpbCA9IFwiXCI7XG4gICAgaWYgKGU/LnRvU3RyaW5nKCkpIGVycm9yRGV0YWlsICs9IGUudG9TdHJpbmcoKTtcbiAgICBpZiAoZT8uc3RhY2spIGVycm9yRGV0YWlsICs9IGUuc3RhY2s7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogcmVzdWx0Q29kZSxcbiAgICAgICAgXCJyZXN1bHRfbWVzc2FnZVwiOiBlcnJvck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwiZmFpbGVkXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiB7XG4gICAgICAgIG9jcl90eXBlOiB0aGlzLiNvY3JUeXBlLFxuICAgICAgICBlcnJvcl9kZXRhaWw6IGVycm9yRGV0YWlsXG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy4jb25GYWlsdXJlKSB7XG4gICAgICB0aGlzLiNvbkZhaWx1cmUocmVzdWx0KTtcbiAgICAgIHRoaXMuI29uRmFpbHVyZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgI3N0YXJ0U2NhbigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBhd2FpdCB0aGlzLiNwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuI3N0YXJ0U2NhbkltcGwoKTtcbiAgICB2b2lkIDA7XG4gIH1cbiAgYXN5bmMgI3JlY292ZXJ5U2NhbigpIHtcbiAgICB2b2lkIDA7XG4gICAgdGhpcy4jcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIGF3YWl0IHRoaXMuI3N0YXJ0U2NhbigpO1xuICB9XG4gIHN0b3BTY2FuKCkge1xuICAgIHRoaXMuI2NsZWFySW50ZXJ2YWxUaW1lcnMoKTtcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXNcbiAgICB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgc3RvcFN0cmVhbSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLiNyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgaWYgKHRoaXMuI3N0cmVhbSkge1xuICAgICAgdGhpcy4jc3RyZWFtLnN0b3AgJiYgdGhpcy4jc3RyZWFtLnN0b3AoKTtcbiAgICAgIGxldCB0cmFja3MgPSB0aGlzLiNzdHJlYW0uZ2V0VHJhY2tzICYmIHRoaXMuI3N0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy4jc3RyZWFtID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIOuplOuqqOumrCBhbGxvY2F0aW9uIGZyZWUg7ZWo7IiYICovXG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy4jZGVzdHJveVNjYW5uZXJBZGRyZXNzKCk7XG4gICAgdGhpcy4jZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuI2Rlc3Ryb3lQcmV2SW1hZ2UoKTtcbiAgICB0aGlzLiNkZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpO1xuICB9XG4gICNjbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgaWYgKHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLiNjYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKTtcbiAgICAgIHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICAjY2xlYXJJbnRlcnZhbFRpbWVycygpIHtcbiAgICBpZiAodGhpcy4jaW50ZXJ2YWxUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLiNpbnRlcnZhbFRpbWVyKTtcbiAgICAgIHZvaWQgMDtcbiAgICAgIHRoaXMuI2ludGVydmFsVGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlQk9DUjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxPQUFPQSxRQUFRLE1BQU0sdUJBQXVCO0FBQzVDLE9BQU9DLE1BQU0sTUFBTSxxQkFBcUI7QUFDeEMsSUFBSUMsUUFBUTtBQUFDLElBQUFDLFVBQUEsb0JBQUFDLE9BQUE7QUFBQSxJQUFBQyxZQUFBLG9CQUFBRCxPQUFBO0FBQUEsSUFBQUUsVUFBQSxvQkFBQUYsT0FBQTtBQUFBLElBQUFHLGlCQUFBLG9CQUFBSCxPQUFBO0FBQUEsSUFBQUksUUFBQSxvQkFBQUosT0FBQTtBQUFBLElBQUFLLFFBQUEsb0JBQUFMLE9BQUE7QUFBQSxJQUFBTSxRQUFBLG9CQUFBTixPQUFBO0FBQUEsSUFBQU8sY0FBQSxvQkFBQVAsT0FBQTtBQUFBLElBQUFRLFVBQUEsb0JBQUFSLE9BQUE7QUFBQSxJQUFBUyxVQUFBLG9CQUFBVCxPQUFBO0FBQUEsSUFBQVUsbUJBQUEsb0JBQUFWLE9BQUE7QUFBQSxJQUFBVyxZQUFBLG9CQUFBWCxPQUFBO0FBQUEsSUFBQVksY0FBQSxvQkFBQVosT0FBQTtBQUFBLElBQUFhLFFBQUEsb0JBQUFiLE9BQUE7QUFBQSxJQUFBYyxJQUFBLG9CQUFBZCxPQUFBO0FBQUEsSUFBQWUsT0FBQSxvQkFBQWYsT0FBQTtBQUFBLElBQUFnQixlQUFBLG9CQUFBaEIsT0FBQTtBQUFBLElBQUFpQixNQUFBLG9CQUFBakIs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
