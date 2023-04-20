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
      OCR_SUCCESS: 'ocr_success',
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
          detect_failed: '#ff8268',
          // 옅은주홍
          detect_success: '#ffbf1c',
          // 노랑
          recognized: '#5e8fff',
          // 옅은하늘
          ocr_failed: '#FA113D',
          // 빨강
          ocr_success: '#14b00e' // 초록
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
        console.log("!!! PRELOADING SKIP, ALREADY PRELOADED !!!");
      } else {
        console.log("!!! PRELOADING START !!!");
        _classPrivateFieldSet(_this, _preloadingStatus, _this.PRELOADING_STATUS.STARTED);
        yield _classPrivateMethodGet(_this, _loadResources, _loadResources2).call(_this);
        _classPrivateFieldSet(_this, _preloadingStatus, _this.PRELOADING_STATUS.DONE);
        _classPrivateFieldSet(_this, _preloaded, true);
        console.log("!!! PRELOADING END !!!");
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
    console.log(this.getOption());
    if (!this.isInitialized()) {
      _classPrivateMethodGet(this, _windowEventBind, _windowEventBind2).call(this);
      _classPrivateFieldSet(this, _deviceInfo, detector.getOsVersion());
      console.debug('this.#deviceInfo.osSimple :: ' + _classPrivateFieldGet(this, _deviceInfo).osSimple);
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
        console.debug("invalid parameter, so skip to startOCR()");
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
          console.log("!!! WASM OCR IS NOT STARTED PRELOADING. SO, WILL BE START PRELOADING !!!");
          yield _this2.preloading();
        } else {
          if (preloadingStatus === _this2.PRELOADING_STATUS.STARTED) {
            console.log("!!! WASM OCR IS STARTED. BUT, IS NOT DONE. SO, WAITING FOR PRELOADING !!!");
            yield _classPrivateMethodGet(_this2, _waitPreloaded, _waitPreloaded2).call(_this2);
          } else if (preloadingStatus === _this2.PRELOADING_STATUS.DONE) {
            console.log("!!! ALREADY WASM OCR IS PRELOADED !!!");
          } else {
            throw new Error("abnormally preloading status, preloaded: ".concat(_this2.isPreloading(), " / preloadingStatus: ").concat(_this2.getPreloadingStatus()));
          }
        }
        _classPrivateMethodGet(_this2, _changeStage, _changeStage2).call(_this2, _this2.IN_PROGRESS.READY);
        yield _classPrivateMethodGet(_this2, _startScan, _startScan2).call(_this2);
      } catch (e) {
        console.error('error in startOCR() : ' + e);
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
      console.debug('CardScan#stopStream', tracks);
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
            console.log("waiting for preloading WASM OCR module : " + waitingRetryCount);
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
        console.log('!!! RESIZE EVENT !!!');
        _classPrivateFieldSet(_this_, _isInProgressHandleResize, false);
        yield _this_.restartOCR(_classPrivateFieldGet(_this_, _ocrType), _classPrivateFieldGet(_this_, _onSuccess), _classPrivateFieldGet(_this_, _onFailure), _classPrivateFieldGet(_this_, _onInProgressChange));
      } else {
        console.log('!!! SKIP RESIZE EVENT - previous resize event process is not completed yet !!!');
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
    console.error('getScannerAddressError()');
    console.error(e);
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
      console.error('error:' + e);
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
      console.error('Video Resolution(' + resolutionText + ') is not Supported!');
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
        console.debug(message);
      } else {
        console.error('Card detection error : ' + e);
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
        _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.OCR_RECOGNIZED);
        if (ssaMode) {
          if (ocrType.indexOf("-ssa") > -1) {
            ssaResult = _classPrivateFieldGet(this, _OCREngine).scanTruth(address, resultBuffer);
          } else {
            throw new Error('SSA Mode is true. but, ocrType is invalid : ' + ocrType);
          }
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
      console.error('startRecognition error:' + e);
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
          console.debug('canplay');

          // video element style 설정
          _classPrivateFieldSet(this, _videoOrientation, video.videoWidth / video.videoHeight < 1 ? 'portrait' : 'landscape');
          console.debug('this.#deviceInfo.osSimple :: ' + _classPrivateFieldGet(this, _deviceInfo).osSimple);
          console.debug('this.#uiOrientation :: ' + _classPrivateFieldGet(this, _uiOrientation));
          console.debug('this.#videoOrientation :: ' + _classPrivateFieldGet(this, _videoOrientation));
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
      console.error('error', e.name, e);
      if (e.name === 'NotAllowedError') {
        var errorMessage = 'Camera Access Permission is not allowed';
        console.error(errorMessage);
        console.error(e);
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
      console.error(e);
      throw e;
    }
  });
  return _setupVideo3.apply(this, arguments);
}
function _adjustStyle2() {
  console.debug('adjustStyle - START');
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
  console.debug('adjustStyle - END');
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
    console.log("loadResources() START");
    if (_classPrivateFieldGet(this, _resourcesLoaded)) {
      console.log("loadResource() SKIP, already loaded!");
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
    console.log("loadResources() END");
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
              console.log("!!! ssaRetryCount : " + _classPrivateFieldGet(_this5, _ssaRetryCount) + " !!!");
              if (ssaResult === null) {
                console.log("[WARN] SSA MODE is true. but, ssaResult is null");
                return;
              }
              if (ssaResult === "FAKE") {
                if (_classPrivateFieldGet(_this5, _ssaRetryCount) < _classPrivateFieldGet(_this5, _options).ssaMaxRetryCount) {
                  var _this$ssaRetryCount, _this$ssaRetryCount2;
                  console.log("!!! [RETRY++] FAKE, but retry count is not exceed : " + _classPrivateFieldGet(_this5, _ssaRetryCount) + " !!!");
                  _classPrivateFieldSet(_this5, _ssaRetryCount, (_this$ssaRetryCount = _classPrivateFieldGet(_this5, _ssaRetryCount), _this$ssaRetryCount2 = _this$ssaRetryCount++, _this$ssaRetryCount)), _this$ssaRetryCount2;
                  return;
                } else {
                  console.log("!!! [MAX RETRY EXCEED] FAKE, and retry count is exceed : " + _classPrivateFieldGet(_this5, _ssaRetryCount) + " !!!");
                }
              }
            }
            console.log("result : ".concat(ocrResult));
            _classPrivateMethodGet(_this5, _onSuccessProcess, _onSuccessProcess2).call(_this5, {
              ocr_type: _classPrivateFieldGet(_this5, _ocrType),
              ocr_data: parser.parseOcrResult(_classPrivateFieldGet(_this5, _ocrType), _classPrivateFieldGet(_this5, _ssaMode), ocrResult, ssaResult, _classPrivateFieldGet(_this5, _ssaRetryCount)),
              ocr_origin_image: imgDataUrl,
              ocr_masking_image: maskImage
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
        console.error(errorMessage);
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
  _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, this.IN_PROGRESS.OCR_SUCCESS);
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
    console.log("[WARN] onSuccess callback is null, so skip to send result");
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
    console.log("[WARN] onFailure callback is null, so skip to send result");
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
    console.log("SCAN END");
  });
  return _startScan3.apply(this, arguments);
}
function _recoveryScan2() {
  return _recoveryScan3.apply(this, arguments);
}
function _recoveryScan3() {
  _recoveryScan3 = _asyncToGenerator(function* () {
    console.log("!!! RECOVERY SCAN !!!");
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
    console.log("!!! CLEAR INTERVAL !!!!");
    _classPrivateFieldSet(this, _intervalTimer, null);
  }
}
export default UseBOCR;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJpbnN0YW5jZSIsIl9PQ1JFbmdpbmUiLCJXZWFrTWFwIiwiX2luaXRpYWxpemVkIiwiX3ByZWxvYWRlZCIsIl9wcmVsb2FkaW5nU3RhdHVzIiwiX2xpY2Vuc2UiLCJfb2NyVHlwZSIsIl9zc2FNb2RlIiwiX3NzYVJldHJ5Q291bnQiLCJfb25TdWNjZXNzIiwiX29uRmFpbHVyZSIsIl9vbkluUHJvZ3Jlc3NDaGFuZ2UiLCJfb2NyVHlwZUxpc3QiLCJfb2NyVHlwZVN0cmluZyIsIl9wYWdlRW5kIiwiX29jciIsIl9jYW52YXMiLCJfcm90YXRpb25DYW52YXMiLCJfdmlkZW8iLCJfdmlkZW9XcmFwIiwiX2d1aWRlQm94IiwiX2d1aWRlQm94V3JhcCIsIl9tYXNrQm94V3JhcCIsIl9wcmV2ZW50VG9GcmVlemVWaWRlbyIsIl9ib3R0b21VSSIsIl9CdWZmZXIiLCJfcmVzdWx0QnVmZmVyIiwiX1ByZXZJbWFnZSIsIl9zdHJpbmdPbldhc21IZWFwIiwiX2NhbVNldENvbXBsZXRlIiwiX3Jlc29sdXRpb25XaWR0aCIsIl9yZXNvbHV0aW9uSGVpZ2h0IiwiX3ZpZGVvV2lkdGgiLCJfdmlkZW9IZWlnaHQiLCJfcmVzb3VyY2VzTG9hZGVkIiwiX2ludGVydmFsVGltZXIiLCJfY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCIsIl9zdHJlYW0iLCJfZGVzdHJveVNjYW5uZXJDYWxsYmFjayIsIl9mYWNpbmdNb2RlQ29uc3RyYWludCIsIl91aU9yaWVudGF0aW9uIiwiX3ByZXZVaU9yaWVudGF0aW9uIiwiX3ZpZGVvT3JpZW50YXRpb24iLCJfdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIl9tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9yZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9kZXZpY2VJbmZvIiwiX2lzUm90YXRlZDkwb3IiLCJfaW5Qcm9ncmVzc1N0ZXAiLCJfcHJldmlvdXNJblByb2dyZXNzU3RlcCIsIl9pc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUiLCJfaW50ZXJ2YWxMb2NrIiwiX2d1aWRlQm94UmF0aW9CeVdpZHRoIiwiX3ZpZGVvUmF0aW9CeUhlaWdodCIsIl9vcHRpb25zIiwiX3dhaXRQcmVsb2FkZWQiLCJXZWFrU2V0IiwiX3dpbmRvd0V2ZW50QmluZCIsIl9zbGVlcCIsIl9ibG9iVG9CYXNlIiwiX2dldFN0cmluZ09uV2FzbUhlYXAiLCJfc2V0VmlkZW9SZXNvbHV0aW9uIiwiX2dldFNjYW5uZXJBZGRyZXNzIiwiX2dldEJ1ZmZlciIsIl9nZXRJbWFnZUJhc2UiLCJfZGVzdHJveUJ1ZmZlciIsIl9kZXN0cm95UHJldkltYWdlIiwiX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwIiwiX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcyIsIl9pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUiLCJfZ2V0Um90YXRpb25EZWdyZWUiLCJfZ2V0TWlycm9yTW9kZSIsIl9jcm9wSW1hZ2VGcm9tVmlkZW8iLCJfcm90YXRlIiwiX2lzQ2FyZGJveERldGVjdGVkIiwiX3N0YXJ0UmVjb2duaXRpb24iLCJfc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiIsIl9zZXRTdHlsZSIsIl9jaGFuZ2VTdGFnZSIsIl9nZXRJbnB1dERldmljZXMiLCJfc2V0dXBEb21FbGVtZW50cyIsIl9zZXR1cFZpZGVvIiwiX2FkanVzdFN0eWxlIiwiX2Nsb3NlQ2FtZXJhIiwiX2xvYWRSZXNvdXJjZXMiLCJfc3RhcnRTY2FuSW1wbCIsIl9vblN1Y2Nlc3NQcm9jZXNzIiwiX29uRmFpbHVyZVByb2Nlc3MiLCJfc3RhcnRTY2FuIiwiX3JlY292ZXJ5U2NhbiIsIl9jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfY2xlYXJJbnRlcnZhbFRpbWVycyIsIlVzZUJPQ1IiLCJjb25zdHJ1Y3RvciIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9kZWZpbmVQcm9wZXJ0eSIsIk5PTkUiLCJOT1RfUkVBRFkiLCJSRUFEWSIsIkNBUkRfREVURUNUX1NVQ0NFU1MiLCJDQVJEX0RFVEVDVF9GQUlMRUQiLCJPQ1JfUkVDT0dOSVpFRCIsIk9DUl9TVUNDRVNTIiwiT0NSX0ZBSUxFRCIsIk5PVF9TVEFSVEVEIiwiU1RBUlRFRCIsIkRPTkUiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwidmFsdWUiLCJQUkVMT0FESU5HX1NUQVRVUyIsIk1hcCIsIklOX1BST0dSRVNTIiwiT2JqZWN0Iiwic2hvd0NsaXBGcmFtZSIsInNob3dDYW52YXNQcmV2aWV3IiwidXNlQm90dG9tVUkiLCJmcmFtZUJvcmRlclN0eWxlIiwibWFza19mcmFtZSIsImNsaXBfZnJhbWUiLCJ3aWR0aCIsInN0eWxlIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwib2NyX2ZhaWxlZCIsIm9jcl9zdWNjZXNzIiwicmVzb3VyY2VCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJkZXZpY2VMYWJlbCIsInZpZGVvVGFyZ2V0SWQiLCJyb3RhdGlvbkRlZ3JlZSIsIm1pcnJvck1vZGUiLCJzc2FNYXhSZXRyeUNvdW50IiwicHJlbG9hZGluZyIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpc1ByZWxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9sb2FkUmVzb3VyY2VzMiIsImNhbGwiLCJpc0luaXRpYWxpemVkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiZ2V0UHJlbG9hZGluZ1N0YXR1cyIsImdldE9DUkVuZ2luZSIsImluaXQiLCJzZXR0aW5ncyIsImxpY2Vuc2VLZXkiLCJFcnJvciIsIm1lcmdlZE9wdGlvbnMiLCJfIiwibWVyZ2UiLCJzZXRPcHRpb24iLCJnZXRPcHRpb24iLCJfd2luZG93RXZlbnRCaW5kMiIsImdldE9zVmVyc2lvbiIsImRlYnVnIiwib3NTaW1wbGUiLCJnZXRPY3JUeXBlIiwidHlwZSIsImdldCIsImdldFVJT3JpZW50YXRpb24iLCJnZXRWaWRlb09yaWVudGF0aW9uIiwic3RhcnRPQ1IiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJfYXJndW1lbnRzIiwiYXJndW1lbnRzIiwiX3RoaXMyIiwib25JblByb2dyZXNzQ2hhbmdlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaW5kZXhPZiIsImdldE9DUkVsZW1lbnRzIiwiYm90dG9tVUkiLCJfY2hhbmdlU3RhZ2UyIiwicHJlbG9hZGluZ1N0YXR1cyIsIl93YWl0UHJlbG9hZGVkMiIsImNvbmNhdCIsIl9zdGFydFNjYW4yIiwiZSIsImVycm9yIiwic3RvcE9DUiIsImNsZWFudXAiLCJfY2xvc2VDYW1lcmEyIiwicmVzdGFydE9DUiIsIm9jclR5cGUiLCJfdGhpczMiLCJjaGVja1VJT3JpZW50YXRpb24iLCJjdXJyZW50Iiwib2NyIiwiaXNDaGFuZ2VkIiwic3RvcFNjYW4iLCJfY2xlYXJJbnRlcnZhbFRpbWVyczIiLCJjYW52YXMiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpbGxSZWFkRnJlcXVlbnRseSIsImNsZWFyUmVjdCIsImhlaWdodCIsInN0b3BTdHJlYW0iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0b3AiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJfZGVzdHJveVNjYW5uZXJBZGRyZXNzMiIsIl9kZXN0cm95QnVmZmVyMiIsIl9kZXN0cm95UHJldkltYWdlMiIsIl9kZXN0cm95U3RyaW5nT25XYXNtSGVhcDIiLCJfd2FpdFByZWxvYWRlZDMiLCJhcHBseSIsIl90aGlzNiIsIndhaXRpbmdSZXRyeUNvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVjayIsInNldFRpbWVvdXQiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiaGFuZGxlUmVzaXplIiwiX3JlZiIsIl9zbGVlcDIiLCJtcyIsIl9ibG9iVG9CYXNlMiIsImJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIl9nZXRTdHJpbmdPbldhc21IZWFwMiIsImxlbmd0aEJ5dGVzIiwibGVuZ3RoQnl0ZXNVVEY4IiwiX21hbGxvYyIsInN0cmluZ1RvVVRGOCIsIl9zZXRWaWRlb1Jlc29sdXRpb24yIiwidmlkZW9FbGVtZW50IiwiaXNTdXBwb3J0ZWRSZXNvbHV0aW9uIiwicmVzb2x1dGlvblRleHQiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJzcmNPYmplY3QiLCJfZ2V0U2Nhbm5lckFkZHJlc3MyIiwiaW5jbHVkZXMiLCJhZGRyZXNzIiwiZGVzdHJveUNhbGxiYWNrIiwic3RyaW5nT25XYXNtSGVhcCIsImdldElEQ2FyZFNjYW5uZXIiLCJkZXN0cm95SURDYXJkU2Nhbm5lciIsImdldFBhc3Nwb3J0U2Nhbm5lciIsImRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIiLCJnZXRBbGllblNjYW5uZXIiLCJkZXN0cm95QWxpZW5TY2FubmVyIiwiZ2V0Q3JlZGl0U2Nhbm5lciIsImRlc3Ryb3lDcmVkaXRTY2FubmVyIiwiX2ZyZWUiLCJfdGhpcyRyZXRyeUNvdW50R2V0QWQiLCJfdGhpcyRyZXRyeUNvdW50R2V0QWQyIiwiX2dldEJ1ZmZlcjIiLCJfZ2V0SW1hZ2VCYXNlMiIsIl94IiwiX3gyIiwiX3gzIiwiX2dldEltYWdlQmFzZTMiLCJtYXNrTW9kZSIsImNyb3BNb2RlIiwiZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlIiwianBnU2l6ZSIsImdldEVuY29kZWRKcGdTaXplIiwianBnUG9pbnRlciIsImdldEVuY29kZWRKcGdCdWZmZXIiLCJyZXN1bHRWaWV3IiwiVWludDhBcnJheSIsIkhFQVA4IiwiYnVmZmVyIiwiQmxvYiIsImRlc3Ryb3lFbmNvZGVkSnBnIiwiX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZTIiLCJfZ2V0Um90YXRpb25EZWdyZWUyIiwiX2dldE1pcnJvck1vZGUyIiwiX2Nyb3BJbWFnZUZyb21WaWRlbzIiLCJfY3JvcEltYWdlRnJvbVZpZGVvMyIsImNhbGNSZXNvbHV0aW9uX3ciLCJjYWxjUmVzb2x1dGlvbl9oIiwidmlkZW8iLCJyb3RhdGlvbkNhbnZhcyIsImd1aWRlQm94IiwiY2FsY0NhbnZhcyIsImNhbGNWaWRlb1dpZHRoIiwiY2FsY1ZpZGVvSGVpZ2h0IiwiY2FsY1ZpZGVvQ2xpZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbGNWaWRlb0NsaWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImNhbGNHdWlkZUJveENsaWVudFdpZHRoIiwiY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0IiwiY2FsY1ZpZGVvT3JpZW50YXRpb24iLCJjYWxjTWF4U1dpZHRoIiwiY2FsY01heFNIZWlnaHQiLCJzeCIsInN5IiwicmF0aW8iLCJzV2lkdGgiLCJNYXRoIiwibWluIiwicm91bmQiLCJzSGVpZ2h0IiwiY2FsY0NvbnRleHQiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1nRGF0YVVybCIsInRvRGF0YVVSTCIsIl9yb3RhdGUyIiwiX3g0IiwiX3g1IiwiX3g2IiwiX3JvdGF0ZTMiLCJkZWdyZWUiLCJpbWciLCJJbWFnZSIsInNyYyIsInRlbXBDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZW1wQ29udGV4dCIsInBvc2l0aW9uIiwidHJhbnNsYXRlIiwicm90YXRlIiwiUEkiLCJuZXdJbWFnZURhdGEiLCJyZXN0b3JlIiwiX2lzQ2FyZGJveERldGVjdGVkMiIsIl94NyIsIl9pc0NhcmRib3hEZXRlY3RlZDMiLCJib3hUeXBlIiwic2V0IiwiZGF0YSIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfc3RhcnRSZWNvZ25pdGlvbjIiLCJfeDgiLCJfeDkiLCJfeDEwIiwiX3N0YXJ0UmVjb2duaXRpb24zIiwic3NhTW9kZSIsIm9jclJlc3VsdCIsInNzYVJlc3VsdCIsInJlc3VsdEJ1ZmZlciIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0Iiwic2NhblRydXRoIiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJfc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjIiLCJfdGhpczQiLCJfY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyMiIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbjIiLCJfcHJvY2VlZENhbWVyYVBlcm1pc3Npb24zIiwiaXNQYXNzcG9ydCIsIl9zZXR1cFZpZGVvMiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfYWRqdXN0U3R5bGUyIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX29uRmFpbHVyZVByb2Nlc3MyIiwiX3NldFN0eWxlMiIsImVsIiwiYXNzaWduIiwidmFsIiwiZm9yY2VVcGRhdGUiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJfZ2V0SW5wdXREZXZpY2VzMiIsIl94MTEiLCJfeDEyIiwiX2dldElucHV0RGV2aWNlczMiLCJraW5kIiwibGFiZWwiLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsInZpZGVvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImdldENhcGFiaWxpdGllcyIsIl9jYXAkZmFjaW5nTW9kZSIsImNhcCIsImZhY2luZ01vZGUiLCJfc2V0dXBEb21FbGVtZW50czIiLCJ2aWRlb1dyYXAiLCJndWlkZUJveFdyYXAiLCJtYXNrQm94V3JhcCIsInByZXZlbnRUb0ZyZWV6ZVZpZGVvIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwib3ZlcmZsb3ciLCJzZXRBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJfb2JqZWN0U3ByZWFkIiwiY2FudmFzU3R5bGUiLCJib3JkZXIiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImd1aWRlVGV4dCIsIl94MTMiLCJfc2V0dXBWaWRlbzMiLCJkZXZpY2VJZExpc3QiLCJtYXAiLCJkZXZpY2VJZCIsImNvbnN0cmFpbnRXaWR0aCIsImNvbnN0cmFpbnRIZWlnaHQiLCJpZGVhbCIsImNvbnN0cmFpbnRzIiwiYXVkaW8iLCJ6b29tIiwiZm9jdXNNb2RlIiwid2hpdGVCYWxhbmNlTW9kZSIsInN0cmVhbSIsImdldFVzZXJNZWRpYSIsImJhc2VXaWR0aCIsImJhc2VIZWlnaHQiLCJzY2FubmVyRnJhbWVSYXRpbyIsImd1aWRlQm94V2lkdGgiLCJndWlkZUJveEhlaWdodCIsIm5ld1ZpZGVvV2lkdGgiLCJuZXdWaWRlb0hlaWdodCIsImNhbGNPY3JDbGllbnRXaWR0aCIsImNhbGNPY3JDbGllbnRIZWlnaHQiLCJndWlkZUJveFJhdGlvQnlXaWR0aCIsInZpZGVvUmF0aW9CeUhlaWdodCIsInZpZGVvSW5uZXJHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXNrQm94SW5uZXIiLCJxdWVyeVNlbGVjdG9yIiwiciIsImlzTmFOIiwibWFza0JveElubmVyV2lkdGgiLCJtYXNrQm94SW5uZXJIZWlnaHQiLCJfbG9hZFJlc291cmNlczMiLCJ1cmwiLCJmZXRjaCIsImhyZWYiLCJ0aGVuIiwicmVzIiwidGV4dCIsInJlZ2V4Iiwic291cmNlIiwicmVwbGFjZSIsImV2YWwiLCJvblJ1bnRpbWVJbml0aWFsaXplZCIsIl9yZWY2IiwiX3gxNCIsIl9zdGFydFNjYW5JbXBsMiIsIl90aGlzNSIsInJlamVjdCIsImRldGVjdGVkIiwic2V0SW50ZXJ2YWwiLCJyZXNvbHV0aW9uX3ciLCJyZXNvbHV0aW9uX2giLCJfY2xhc3NQcml2YXRlRmllbGREZXN0cnVjdHVyZVNldCIsIl90aGlzJHNzYVJldHJ5Q291bnQiLCJfdGhpcyRzc2FSZXRyeUNvdW50MiIsIl9vblN1Y2Nlc3NQcm9jZXNzMiIsIm9jcl90eXBlIiwib2NyX2RhdGEiLCJwYXJzZU9jclJlc3VsdCIsIm9jcl9vcmlnaW5faW1hZ2UiLCJvY3JfbWFza2luZ19pbWFnZSIsIl9yZWNvdmVyeVNjYW4yIiwicmV2aWV3X3Jlc3VsdCIsImFwaV9yZXNwb25zZSIsInJlc3VsdENvZGUiLCJlcnJvckRldGFpbCIsInN0YWNrIiwiZXJyb3JfZGV0YWlsIiwiX3N0YXJ0U2NhbjMiLCJfcmVjb3ZlcnlTY2FuMyIsImNsZWFyVGltZW91dCIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlcyI6WyJvY3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIGdsb2JhbC1tb2R1bGUgKi9cbmltcG9ydCBkZXRlY3RvciBmcm9tICcuL2hlbHBlcnMvZGV0ZWN0b3IuanMnO1xuaW1wb3J0IHBhcnNlciBmcm9tICcuL2hlbHBlcnMvcGFyc2VyLmpzJztcblxubGV0IGluc3RhbmNlO1xuXG5jbGFzcyBVc2VCT0NSIHtcbiAgSU5fUFJPR1JFU1MgPSB7XG4gICAgTk9ORTogJ25vbmUnLFxuICAgIE5PVF9SRUFEWTogJ25vdF9yZWFkeScsXG4gICAgUkVBRFk6ICdyZWFkeScsXG4gICAgQ0FSRF9ERVRFQ1RfU1VDQ0VTUzogJ2RldGVjdF9zdWNjZXNzJyxcbiAgICBDQVJEX0RFVEVDVF9GQUlMRUQ6ICdkZXRlY3RfZmFpbGVkJyxcbiAgICBPQ1JfUkVDT0dOSVpFRDogJ3JlY29nbml6ZWQnLFxuICAgIE9DUl9TVUNDRVNTOiAnb2NyX3N1Y2Nlc3MnLFxuICAgIE9DUl9GQUlMRUQ6ICdvY3JfZmFpbGVkJyxcbiAgfVxuXG4gIFBSRUxPQURJTkdfU1RBVFVTID0ge1xuICAgIE5PVF9TVEFSVEVEOiAtMSxcbiAgICBTVEFSVEVEOiAwLFxuICAgIERPTkU6IDEsXG4gIH1cblxuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cblxuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICNPQ1JFbmdpbmUgPSBudWxsO1xuICAjaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgI3ByZWxvYWRlZCA9IGZhbHNlO1xuICAjcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuTk9UX1NUQVJURUQ7XG4gICNsaWNlbnNlO1xuICAjb2NyVHlwZSA9IG51bGw7XG4gICNzc2FNb2RlID0gZmFsc2U7XG4gICNzc2FSZXRyeUNvdW50ID0gMDtcbiAgI29uU3VjY2VzcyA9IG51bGw7XG4gICNvbkZhaWx1cmUgPSBudWxsO1xuICAjb25JblByb2dyZXNzQ2hhbmdlID0gbnVsbDtcbiAgI29jclR5cGVMaXN0ID0gW1xuICAgICdpZGNhcmQnLFxuICAgICdkcml2ZXInLFxuICAgICdwYXNzcG9ydCcsXG4gICAgJ2ZvcmVpZ24tcGFzc3BvcnQnLFxuICAgICdhbGllbicsXG4gICAgJ2NyZWRpdCcsXG4gICAgJ2lkY2FyZC1zc2EnLFxuICAgICdkcml2ZXItc3NhJyxcbiAgICAncGFzc3BvcnQtc3NhJyxcbiAgICAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLFxuICAgICdhbGllbi1zc2EnLFxuICAgICdjcmVkaXQtc3NhJyxcbiAgXTtcbiAgI29jclR5cGVTdHJpbmcgPSBuZXcgTWFwKFtcbiAgICBbXCIxXCIsIFwiaWRjYXJkXCJdLFxuICAgIFtcIjJcIiwgXCJkcml2ZXJcIl0sXG4gICAgW1wiM1wiLCBcInBhc3Nwb3J0XCJdLFxuICAgIFtcIjRcIiwgXCJmb3JlaWduLXBhc3Nwb3J0XCJdLFxuICAgIFtcIjVcIiwgXCJhbGllblwiXSxcbiAgICBbXCI1LTFcIiwgXCJhbGllblwiXSxcbiAgICBbXCI1LTJcIiwgXCJhbGllblwiXSxcbiAgICBbXCI1LTNcIiwgXCJhbGllblwiXSxcbiAgXSk7XG4gICNwYWdlRW5kID0gZmFsc2U7XG4gICNvY3I7XG4gICNjYW52YXM7XG4gICNyb3RhdGlvbkNhbnZhcztcbiAgI3ZpZGVvO1xuICAjdmlkZW9XcmFwO1xuICAjZ3VpZGVCb3g7XG4gICNndWlkZUJveFdyYXA7XG4gICNtYXNrQm94V3JhcDtcbiAgI3ByZXZlbnRUb0ZyZWV6ZVZpZGVvO1xuICAjYm90dG9tVUk7XG4gICNCdWZmZXIgPSBudWxsO1xuICAjcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgI1ByZXZJbWFnZSA9IG51bGw7XG4gICNzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgI2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG4gICNyZXNvbHV0aW9uV2lkdGggPSAwO1xuICAjcmVzb2x1dGlvbkhlaWdodCA9IDA7XG4gICN2aWRlb1dpZHRoID0gMDtcbiAgI3ZpZGVvSGVpZ2h0ID0gMDtcbiAgI3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAjaW50ZXJ2YWxUaW1lcjtcbiAgI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXI7XG4gICNyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZDtcbiAgI3N0cmVhbTtcbiAgI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAjZmFjaW5nTW9kZUNvbnN0cmFpbnQgPSAnZW52aXJvbm1lbnQnO1xuICAjdWlPcmllbnRhdGlvbiA9ICcnO1xuICAjcHJldlVpT3JpZW50YXRpb24gPSAnJztcbiAgI3ZpZGVvT3JpZW50YXRpb24gPSAnJztcbiAgI3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gICN0aHJvdHRsaW5nUmVzaXplRGVsYXkgPSA1MDA7XG4gICNtYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9IDMwMDsgICAgICAgLy8g7J6E7IucXG4gICNyZXRyeUNvdW50R2V0QWRkcmVzcyA9IDA7ICAgICAgICAgICAgLy8g7J6E7IucXG4gICNkZXZpY2VJbmZvO1xuICAjaXNSb3RhdGVkOTBvcjI3MCA9IGZhbHNlO1xuICAjaW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWTtcbiAgI3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPSB0aGlzLklOX1BST0dSRVNTLk5PTkU7XG4gICNpc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgI2ludGVydmFsTG9jayA9IGZhbHNlO1xuICAjZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSAwLjg7ICAgICAgLy8g7IiY7KCV67aI6rCAXG4gICN2aWRlb1JhdGlvQnlIZWlnaHQgPSAwLjY7ICAgICAgICAvLyDsiJjsoJXrtojqsIBcblxuICAvKiogRGVmYXVsdCBvcHRpb25zICovXG4gICNvcHRpb25zID0gbmV3IE9iamVjdCh7XG4gICAgc2hvd0NsaXBGcmFtZTogZmFsc2UsXG4gICAgc2hvd0NhbnZhc1ByZXZpZXc6IGZhbHNlLFxuICAgIHVzZUJvdHRvbVVJOiB0cnVlLFxuICAgIGZyYW1lQm9yZGVyU3R5bGU6IHtcbiAgICAgIG1hc2tfZnJhbWU6ICcjMjAyMDIzJywgICAgICAvLyDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLCAgICAgIC8vIOuUpe2NvO2UjCAo7IiY7KCV67aI6rCAKVxuICAgICAgd2lkdGg6IDEwLFxuICAgICAgc3R5bGU6ICdzb2xpZCcsXG4gICAgICByYWRpdXM6IDIwLFxuICAgICAgbm90X3JlYWR5OiAnIzAwMDAwMCcsIC8vIOqygOyglVxuICAgICAgcmVhZHk6ICcjYjhiOGI4JywgLy8g7ZqM7IOJXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnI2ZmODI2OCcsIC8vIOyYheydgOyjvO2ZjVxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjZmZiZjFjJywgLy8g64W4656RXG4gICAgICByZWNvZ25pemVkOiAnIzVlOGZmZicsIC8vIOyYheydgO2VmOuKmFxuICAgICAgb2NyX2ZhaWxlZDogJyNGQTExM0QnLCAvLyDruajqsJVcbiAgICAgIG9jcl9zdWNjZXNzOiAnIzE0YjAwZScsIC8vIOy0iOuhnVxuICAgIH0sXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgIGRldmljZUxhYmVsOiAnJyxcbiAgICB2aWRlb1RhcmdldElkOiAnJyxcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgICBzc2FNYXhSZXRyeUNvdW50OiAwLFxuICB9KTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBhc3luYyBwcmVsb2FkaW5nKCkge1xuICAgIGlmICh0aGlzLmlzUHJlbG9hZGluZygpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiEhISBQUkVMT0FESU5HIFNLSVAsIEFMUkVBRFkgUFJFTE9BREVEICEhIVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiEhISBQUkVMT0FESU5HIFNUQVJUICEhIVwiKVxuICAgICAgdGhpcy4jcHJlbG9hZGluZ1N0YXR1cyA9IHRoaXMuUFJFTE9BRElOR19TVEFUVVMuU1RBUlRFRDtcbiAgICAgIGF3YWl0IHRoaXMuI2xvYWRSZXNvdXJjZXMoKTtcbiAgICAgIHRoaXMuI3ByZWxvYWRpbmdTdGF0dXMgPSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkU7XG4gICAgICB0aGlzLiNwcmVsb2FkZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coXCIhISEgUFJFTE9BRElORyBFTkQgISEhXCIpXG4gICAgfVxuICB9XG5cbiAgaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaW5pdGlhbGl6ZWQ7XG4gIH1cblxuICBpc1ByZWxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ByZWxvYWRlZDtcbiAgfVxuXG4gIGdldFByZWxvYWRpbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ByZWxvYWRpbmdTdGF0dXM7XG4gIH1cblxuICBnZXRPQ1JFbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI09DUkVuZ2luZTtcbiAgfVxuXG4gIGluaXQoc2V0dGluZ3MpIHtcbiAgICBpZiAoISEhc2V0dGluZ3MubGljZW5zZUtleSkgdGhyb3cgbmV3IEVycm9yKCdMaWNlbnNlIGtleSBpcyBlbXB0eScpO1xuXG4gICAgdGhpcy4jbGljZW5zZSA9IHNldHRpbmdzLmxpY2Vuc2VLZXk7XG5cbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy4jb3B0aW9ucywgc2V0dGluZ3MpO1xuICAgIHRoaXMuc2V0T3B0aW9uKG1lcmdlZE9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0T3B0aW9uKCkpO1xuXG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdGhpcy4jd2luZG93RXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLiNkZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICBjb25zb2xlLmRlYnVnKCd0aGlzLiNkZXZpY2VJbmZvLm9zU2ltcGxlIDo6ICcgKyB0aGlzLiNkZXZpY2VJbmZvLm9zU2ltcGxlKTtcbiAgICAgIHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzZXRPcHRpb24oc2V0dGluZ3MpIHtcbiAgICB0aGlzLiNvcHRpb25zID0gc2V0dGluZ3M7XG4gIH1cblxuICBnZXRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gIH1cblxuICBnZXRPY3JUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy4jb2NyVHlwZVN0cmluZy5nZXQodHlwZSk7XG4gIH1cblxuICBnZXRVSU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiN1aU9yaWVudGF0aW9uO1xuICB9XG5cbiAgZ2V0VmlkZW9PcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jdmlkZW9PcmllbnRhdGlvblxuICB9XG5cbiAgYXN5bmMgc3RhcnRPQ1IodHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSA9bnVsbCkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoXCJpbnZhbGlkIHBhcmFtZXRlciwgc28gc2tpcCB0byBzdGFydE9DUigpXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuI29jclR5cGUgPSB0eXBlO1xuICAgIHRoaXMuI3NzYU1vZGUgPSAodGhpcy4jb2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMSk7XG4gICAgdGhpcy4jb25TdWNjZXNzID0gb25TdWNjZXNzO1xuICAgIHRoaXMuI29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UgPSBvbkluUHJvZ3Jlc3NDaGFuZ2U7XG4gICAgaWYgKG9uSW5Qcm9ncmVzc0NoYW5nZSAmJiB0aGlzLiNvcHRpb25zLnVzZUJvdHRvbVVJKSB7XG4gICAgICB0aGlzLiNib3R0b21VSSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkuYm90dG9tVUk7XG4gICAgfVxuICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcblxuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGluaXRpYWxpemVkIScpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmVsb2FkaW5nU3RhdHVzID0gdGhpcy5nZXRQcmVsb2FkaW5nU3RhdHVzKCk7XG4gICAgICBpZiAoIXRoaXMuaXNQcmVsb2FkaW5nKCkgJiYgcHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5OT1RfU1RBUlRFRCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiEhISBXQVNNIE9DUiBJUyBOT1QgU1RBUlRFRCBQUkVMT0FESU5HLiBTTywgV0lMTCBCRSBTVEFSVCBQUkVMT0FESU5HICEhIVwiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJlbG9hZGluZ1N0YXR1cyA9PT0gdGhpcy5QUkVMT0FESU5HX1NUQVRVUy5TVEFSVEVEKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCIhISEgV0FTTSBPQ1IgSVMgU1RBUlRFRC4gQlVULCBJUyBOT1QgRE9ORS4gU08sIFdBSVRJTkcgRk9SIFBSRUxPQURJTkcgISEhXCIpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuI3dhaXRQcmVsb2FkZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmVsb2FkaW5nU3RhdHVzID09PSB0aGlzLlBSRUxPQURJTkdfU1RBVFVTLkRPTkUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIiEhISBBTFJFQURZIFdBU00gT0NSIElTIFBSRUxPQURFRCAhISFcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhYm5vcm1hbGx5IHByZWxvYWRpbmcgc3RhdHVzLCBwcmVsb2FkZWQ6ICR7dGhpcy5pc1ByZWxvYWRpbmcoKX0gLyBwcmVsb2FkaW5nU3RhdHVzOiAke3RoaXMuZ2V0UHJlbG9hZGluZ1N0YXR1cygpfWApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICBhd2FpdCB0aGlzLiNzdGFydFNjYW4oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdlcnJvciBpbiBzdGFydE9DUigpIDogJyArIGUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnN0b3BPQ1IoKTtcbiAgICB9XG4gIH1cblxuICBzdG9wT0NSKCkge1xuICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgdGhpcy4jb25TdWNjZXNzID0gbnVsbDtcbiAgICAgIHRoaXMuI29uRmFpbHVyZSA9IG51bGw7XG4gICAgfVxuXG4gIGFzeW5jIHJlc3RhcnRPQ1Iob2NyVHlwZSwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIG9uSW5Qcm9ncmVzc0NoYW5nZSkge1xuICAgIC8vIGF3YWl0IHRoaXMuc3RvcE9DUigpO1xuICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgYXdhaXQgdGhpcy5zdGFydE9DUihvY3JUeXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSwgb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgYXN5bmMgI3dhaXRQcmVsb2FkZWQoKSB7XG4gICAgbGV0IHdhaXRpbmdSZXRyeUNvdW50ID0gMDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ByZWxvYWRpbmcoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YWl0aW5nUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3YWl0aW5nIGZvciBwcmVsb2FkaW5nIFdBU00gT0NSIG1vZHVsZSA6IFwiICsgd2FpdGluZ1JldHJ5Q291bnQpO1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9O1xuICAgICAgY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gICN3aW5kb3dFdmVudEJpbmQoKSB7XG4gICAgY29uc3QgX3RoaXNfID0gdGhpcztcblxuICAgIGlmICgvaXBob25lfGlwb2R8aXBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgY29uc3Qgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSA9IChldikgPT4ge1xuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSxcbiAgICAgICAgeyBwYXNzaXZlOiBmYWxzZSB9XG4gICAgICApO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICBza2lwVG91Y2hBY3Rpb25mb3Jab29tLFxuICAgICAgICB7IHBhc3NpdmU6IGZhbHNlIH1cbiAgICAgICk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSxcbiAgICAgICAgeyBwYXNzaXZlOiBmYWxzZSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzXy4jcGFnZUVuZCA9IHRydWU7XG4gICAgICBfdGhpc18uY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uI29jclR5cGUpIHJldHVybjtcblxuICAgICAgaWYgKCFfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSkge1xuICAgICAgICBfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IHRydWU7XG4gICAgICAgIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgY29uc29sZS5sb2coJyEhISBSRVNJWkUgRVZFTlQgISEhJyk7XG5cbiAgICAgICAgX3RoaXNfLiNpc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgX3RoaXNfLnJlc3RhcnRPQ1IoX3RoaXNfLiNvY3JUeXBlLCBfdGhpc18uI29uU3VjY2VzcywgX3RoaXNfLiNvbkZhaWx1cmUsIF90aGlzXy4jb25JblByb2dyZXNzQ2hhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCchISEgU0tJUCBSRVNJWkUgRVZFTlQgLSBwcmV2aW91cyByZXNpemUgZXZlbnQgcHJvY2VzcyBpcyBub3QgY29tcGxldGVkIHlldCAhISEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dChoYW5kbGVSZXNpemUsIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZURlbGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAjc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxuICAjYmxvYlRvQmFzZTY0KGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pO1xuICB9XG4gIC8qKiDrnbzsnbTshLzsiqQg7YKk66W8IGhlYXAg7JeQIGFsbG9jYXRpb24gKi9cbiAgI2dldFN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKCEhIXRoaXMuI2xpY2Vuc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkxpY2Vuc2UgS2V5IGlzIGVtcHR5XCIpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGhCeXRlcyA9IHRoaXMuI09DUkVuZ2luZS5sZW5ndGhCeXRlc1VURjgodGhpcy4jbGljZW5zZSkgKyAxO1xuICAgIHRoaXMuI3N0cmluZ09uV2FzbUhlYXAgPSB0aGlzLiNPQ1JFbmdpbmUuX21hbGxvYyhsZW5ndGhCeXRlcyk7XG4gICAgdGhpcy4jT0NSRW5naW5lLnN0cmluZ1RvVVRGOCh0aGlzLiNsaWNlbnNlLCB0aGlzLiNzdHJpbmdPbldhc21IZWFwLCBsZW5ndGhCeXRlcyk7XG4gICAgcmV0dXJuIHRoaXMuI3N0cmluZ09uV2FzbUhlYXA7XG4gIH1cbiAgI3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgbGV0IHJlc29sdXRpb25UZXh0ID0gJ25vdCByZWFkeSc7XG5cbiAgICBpZiAoIXRoaXMuI2NhbVNldENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4geyBpc1N1cHBvcnRlZFJlc29sdXRpb24sIHJlc29sdXRpb25UZXh0IH07XG4gICAgfVxuXG4gICAgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMCkge1xuICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgcmV0dXJuIHsgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLCByZXNvbHV0aW9uVGV4dCB9O1xuICAgIH1cblxuICAgIHJlc29sdXRpb25UZXh0ID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggKyAneCcgKyB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEwODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxOTIwKSB8fFxuICAgICAgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxOTIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTA4MClcbiAgICApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTI4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDcyMCkgfHxcbiAgICAgICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gNzIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTI4MClcbiAgICApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2VcbiAgICB9XG4gICAgdGhpcy4jdmlkZW9XaWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgIHRoaXMuI3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiwgcmVzb2x1dGlvblRleHQgfTtcbiAgfVxuICAjZ2V0U2Nhbm5lckFkZHJlc3Mob2NyVHlwZSkge1xuICAgIGlmICghdGhpcy4jb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGFkZHJlc3MgPSAwO1xuICAgICAgbGV0IGRlc3Ryb3lDYWxsYmFjayA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN0cmluZ09uV2FzbUhlYXAgPSB0aGlzLiNnZXRTdHJpbmdPbldhc21IZWFwKCk7XG5cbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICAvLyBPQ1JcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0SURDYXJkU2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveUlEQ2FyZFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveVBhc3Nwb3J0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLiNPQ1JFbmdpbmUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHRoaXMuI09DUkVuZ2luZS5kZXN0cm95QWxpZW5TY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gdGhpcy4jT0NSRW5naW5lLmdldENyZWRpdFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gdGhpcy4jT0NSRW5naW5lLmRlc3Ryb3lDcmVkaXRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZShzdHJpbmdPbldhc21IZWFwKTtcblxuICAgICAgaWYgKGFkZHJlc3MgPT09IDApIHtcbiAgICAgICAgaWYgKHRoaXMuI21heFJldHJ5Q291bnRHZXRBZGRyZXNzID09PSB0aGlzLiNyZXRyeUNvdW50R2V0QWRkcmVzcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIExpY2Vuc2UgS2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3JldHJ5Q291bnRHZXRBZGRyZXNzKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gW2FkZHJlc3MsIGRlc3Ryb3lDYWxsYmFja107XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVE9ETyA6IExpY2Vuc2UgSXNzdWXsnbgg6rK97JqwIOyXkOufrCDqsJLsnYQg67Cb7JWE7IScIGVycm9yIOuhnOq3uOulvCDssI3snYQg7IiYIOyeiOqyjCDsmpTssq3tlYTsmpQgKOyehOyLnCBO67KIIOydtOyDgSBhZGRyZXNz66W8IOuqu+uwm+ycvOuptCDqsJXsoJwg7JeQ65+sKVxuICAgICAgY29uc29sZS5lcnJvcignZ2V0U2Nhbm5lckFkZHJlc3NFcnJvcigpJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgI2dldEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuI0J1ZmZlcikge1xuICAgICAgdGhpcy4jQnVmZmVyID0gdGhpcy4jT0NSRW5naW5lLl9tYWxsb2MoXG4gICAgICAgIHRoaXMuI3Jlc29sdXRpb25XaWR0aCAqIHRoaXMuI3Jlc29sdXRpb25IZWlnaHQgKiA0XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuI3Jlc3VsdEJ1ZmZlcikge1xuICAgICAgdGhpcy4jcmVzdWx0QnVmZmVyID0gdGhpcy4jT0NSRW5naW5lLl9tYWxsb2MoMjU2KTtcbiAgICB9XG4gICAgcmV0dXJuIFt0aGlzLiNCdWZmZXIsIHRoaXMuI3Jlc3VsdEJ1ZmZlcl07XG4gIH1cblxuICBhc3luYyAjZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5lbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UoYWRkcmVzcywgbWFza01vZGUsIGNyb3BNb2RlKTtcblxuICAgICAgY29uc3QganBnU2l6ZSA9IHRoaXMuI09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnU2l6ZSgpO1xuICAgICAgY29uc3QganBnUG9pbnRlciA9IHRoaXMuI09DUkVuZ2luZS5nZXRFbmNvZGVkSnBnQnVmZmVyKCk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdFZpZXcgPSBuZXcgVWludDhBcnJheShcbiAgICAgICAgdGhpcy4jT0NSRW5naW5lLkhFQVA4LmJ1ZmZlcixcbiAgICAgICAganBnUG9pbnRlcixcbiAgICAgICAganBnU2l6ZVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHJlc3VsdFZpZXcpO1xuXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3VsdF0sIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI2Jsb2JUb0Jhc2U2NChibG9iKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZSk7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLiNPQ1JFbmdpbmUuZGVzdHJveUVuY29kZWRKcGcoKTtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgYnVmZmVyICovXG4gICNkZXN0cm95QnVmZmVyKCkge1xuICAgIGlmICh0aGlzLiNCdWZmZXIpIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNCdWZmZXIpO1xuICAgICAgdGhpcy4jQnVmZmVyID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuI3Jlc3VsdEJ1ZmZlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLl9mcmVlKHRoaXMuI3Jlc3VsdEJ1ZmZlcik7XG4gICAgICB0aGlzLiNyZXN1bHRCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogRnJlZSBQcmV2SW1hZ2UgYnVmZmVyICovXG4gICNkZXN0cm95UHJldkltYWdlKCkge1xuICAgIGlmICh0aGlzLiNQcmV2SW1hZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI09DUkVuZ2luZS5fZnJlZSh0aGlzLiNQcmV2SW1hZ2UpO1xuICAgICAgdGhpcy4jUHJldkltYWdlID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIGZyZWUgc3RyaW5nIGhlYXAgYnVmZmVyICovXG4gICNkZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAodGhpcy4jc3RyaW5nT25XYXNtSGVhcCkge1xuICAgICAgdGhpcy4jT0NSRW5naW5lLl9mcmVlKHRoaXMuI3N0cmluZ09uV2FzbUhlYXApO1xuICAgICAgdGhpcy4jc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBmcmVlIHNjYW5uZXIgYWRkcmVzcyAqL1xuICAjZGVzdHJveVNjYW5uZXJBZGRyZXNzKCkge1xuICAgIGlmICh0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrKSB7XG4gICAgICB0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrKCk7XG4gICAgICB0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgI2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlb0VsZW1lbnQpIHtcbiAgICBjb25zdCB7IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiwgcmVzb2x1dGlvblRleHQgfSA9IHRoaXMuI3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpO1xuICAgIGlmICghaXNTdXBwb3J0ZWRSZXNvbHV0aW9uKSB7XG4gICAgICBpZiAocmVzb2x1dGlvblRleHQgIT09ICdub3QgcmVhZHknKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZpZGVvIFJlc29sdXRpb24oJyArIHJlc29sdXRpb25UZXh0ICsgJykgaXMgbm90IFN1cHBvcnRlZCEnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzU3VwcG9ydGVkUmVzb2x1dGlvbjtcbiAgfVxuICAjZ2V0Um90YXRpb25EZWdyZWUoKSB7XG4gICAgcmV0dXJuICgodGhpcy4jb3B0aW9ucy5yb3RhdGlvbkRlZ3JlZSAlIDM2MCkgKyAzNjApICUgMzYwO1xuICB9XG4gICNnZXRNaXJyb3JNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLiNvcHRpb25zLm1pcnJvck1vZGU7XG4gIH1cbiAgYXN5bmMgI2Nyb3BJbWFnZUZyb21WaWRlbygpIHtcbiAgICBpZiAoIXRoaXMuI2NhbVNldENvbXBsZXRlKSByZXR1cm4gW251bGwsIG51bGxdO1xuXG4gICAgbGV0IFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFt0aGlzLiNyZXNvbHV0aW9uV2lkdGgsIHRoaXMuI3Jlc29sdXRpb25IZWlnaHRdO1xuICAgIGNvbnN0IHsgdmlkZW8sIGNhbnZhcywgcm90YXRpb25DYW52YXMsIGd1aWRlQm94IH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuXG4gICAgLy8gc291cmNlIGltYWdlIChvciB2aWRlbylcbiAgICAvLyDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiiBzeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUg+KUiOKUiOKUiOKUiCDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDIHN4ICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIHNIZWlnaHQgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgZGVzdGluYXRpb24gY2FudmFzXG4gICAgLy8g4pSDICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAgICAgICAg4pSD4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgICAgICAgIOKUgyAgICDilIogICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgICAgICAgIHNXaWR0aCAgICAgICAgICAgICAgICAgICAgICDilIMgICAg4pSKIGR5ICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbICAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIPilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgIGR4ICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKIGRIZWlnaHQg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIMgICAgICAgICAgICAgICDilIMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICDilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIjilIggICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgZFdpZHRoICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUm1xuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC9kcmF3SW1hZ2VcblxuICAgIGxldCBjYWxjQ2FudmFzID0gY2FudmFzO1xuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNHdWlkZUJveENsaWVudFdpZHRoID0gZ3VpZGVCb3guY2xpZW50V2lkdGhcbiAgICBsZXQgY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0ID0gZ3VpZGVCb3guY2xpZW50SGVpZ2h0XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbjtcblxuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY0d1aWRlQm94Q2xpZW50V2lkdGgsIGNhbGNHdWlkZUJveENsaWVudEhlaWdodF0gPSBbY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0LCBjYWxjR3VpZGVCb3hDbGllbnRXaWR0aF07XG4gICAgICBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbY2FsY1Jlc29sdXRpb25faCwgY2FsY1Jlc29sdXRpb25fd107XG4gICAgICBjYWxjQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuXG4gICAgbGV0IGNhbGNNYXhTV2lkdGggPSA5OTk5OTtcbiAgICBsZXQgY2FsY01heFNIZWlnaHQgPSA5OTk5OTtcblxuICAgIGlmICh0aGlzLiN1aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g7IS466GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLiN1aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN4LCBzeTtcbiAgICBjb25zdCByYXRpbyA9IChjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0NsaWVudFdpZHRoKTtcbiAgICBjb25zdCBzV2lkdGggPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNHdWlkZUJveENsaWVudFdpZHRoICogcmF0aW8pLCBjYWxjTWF4U1dpZHRoKTtcbiAgICBjb25zdCBzSGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHQgKiByYXRpbyksIGNhbGNNYXhTSGVpZ2h0KTtcblxuICAgIHN4ID0gTWF0aC5yb3VuZCgoKGNhbGNWaWRlb0NsaWVudFdpZHRoIC0gY2FsY0d1aWRlQm94Q2xpZW50V2lkdGgpIC8gMikgKiByYXRpbyk7XG4gICAgc3kgPSBNYXRoLnJvdW5kKCgoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0IC0gY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0KSAvIDIpICogcmF0aW8pO1xuXG4gICAgY29uc3QgY2FsY0NvbnRleHQgPSBjYWxjQ2FudmFzLmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSk7XG4gICAgLy8gY29uc29sZS5kZWJ1Zygnc3gsIHN5LCBzV2lkdGgocmVzb2x1dGlvbl93KSwgc0hlaWdodChyZXNvbHV0aW9uX2gpLCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCcsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCk7XG4gICAgY2FsY0NvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgdmlkZW8sXG4gICAgICBzeCxcbiAgICAgIHN5LFxuICAgICAgc1dpZHRoLFxuICAgICAgc0hlaWdodCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgY2FsY1Jlc29sdXRpb25fdyxcbiAgICAgIGNhbGNSZXNvbHV0aW9uX2hcbiAgICApO1xuXG4gICAgY29uc3QgaW1nRGF0YSA9IGNhbGNDb250ZXh0LmdldEltYWdlRGF0YShcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgY2FsY1Jlc29sdXRpb25fdyxcbiAgICAgIGNhbGNSZXNvbHV0aW9uX2hcbiAgICApO1xuICAgIGNvbnN0IGltZ0RhdGFVcmwgPSBjYWxjQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuXG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLiNyb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgdGhpcy4jZ2V0Um90YXRpb25EZWdyZWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbaW1nRGF0YSwgaW1nRGF0YVVybF07XG4gICAgfVxuICB9XG4gIGFzeW5jICNyb3RhdGUoaW1nRGF0YSwgaW1nRGF0YVVybCwgZGVncmVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoZGVncmVlID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoW2ltZ0RhdGEsIGltZ0RhdGFVcmxdKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgIGltZy5zcmMgPSBpbWdEYXRhVXJsO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICAvLyBjYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgICAgY29uc3QgdGVtcENvbnRleHQgPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRlbXBDYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcbiAgICAgICAgaWYgKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy5oZWlnaHRcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy53aWR0aFxuICAgICAgICB9IGVsc2UgaWYgKFswLCAxODBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLndpZHRoXG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gOTApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcuaGVpZ2h0LCAwKVxuICAgICAgICBlbHNlIGlmIChkZWdyZWUgPT09IDE4MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy53aWR0aCwgaW1nLmhlaWdodClcbiAgICAgICAgZWxzZSBpZiAoZGVncmVlID09PSAyNzApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZSgwLCBpbWcud2lkdGgpXG5cbiAgICAgICAgdGVtcENvbnRleHQucm90YXRlKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApXG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApXG4gICAgICAgIGNvbnN0IG5ld0ltYWdlRGF0YSA9IFs5MCwgMjcwXS5pbmNsdWRlcyhkZWdyZWUpID8gdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy5oZWlnaHQsIGltZy53aWR0aCkgOiB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCB0ZW1wQ29udGV4dCk7XG4gICAgICAgIHJlc29sdmUoW25ld0ltYWdlRGF0YSwgdGVtcENhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKV0pXG4gICAgICAgIHRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgI2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIGJveFR5cGU9MCkge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLiNnZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IFtpbWdEYXRhXSA9IGF3YWl0IHRoaXMuI2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy4jT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5kZXRlY3RfaWRjYXJkKFxuICAgICAgICBidWZmZXIsXG4gICAgICAgIHRoaXMuI3Jlc29sdXRpb25XaWR0aCxcbiAgICAgICAgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgYm94VHlwZVxuICAgICAgKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0NhcmRib3hEZXRlY3RlZCByZXN1bHQgLT0tLS0tLScsIHJlc3VsdClcbiAgICAgIHJldHVybiAhIXJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yIDogJyArIGU7XG5cbiAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgI3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgc3NhTW9kZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICdjaGVja1ZhbGlkYXRpb24gRmFpbCc7XG4gICAgICB9XG5cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgbGV0IHNzYVJlc3VsdCA9IG51bGw7XG5cbiAgICAgIGlmICghdGhpcy4jb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcblxuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuI2dldEJ1ZmZlcigpO1xuICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhbklEQ2FyZChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy4jT0NSRW5naW5lLnNjYW5QYXNzcG9ydChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gdGhpcy4jT0NSRW5naW5lLnNjYW5BbGllbihhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSB0aGlzLiNPQ1JFbmdpbmUuc2NhbkNyZWRpdChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Nhbm5lciBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9jclJlc3VsdCA9PT0gbnVsbCB8fCBvY3JSZXN1bHQgPT09ICcnIHx8IG9jclJlc3VsdCA9PT0gJ2ZhbHNlJyB8fCBvY3JSZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEKTtcblxuICAgICAgICBpZiAoc3NhTW9kZSkge1xuICAgICAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoXCItc3NhXCIpID4gLTEpIHtcbiAgICAgICAgICAgIHNzYVJlc3VsdCA9IHRoaXMuI09DUkVuZ2luZS5zY2FuVHJ1dGgoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTU0EgTW9kZSBpcyB0cnVlLiBidXQsIG9jclR5cGUgaXMgaW52YWxpZCA6ICcgKyBvY3JUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGNyb3BNb2RlID0gZmFsc2U7XG4gICAgICBpZiAob2NyVHlwZS5pbmRleE9mKFwiY3JlZGl0XCIpID4gLTEpIHtcbiAgICAgICAgY3JvcE1vZGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgbGV0IG9yaWdpbkltYWdlID0gYXdhaXQgdGhpcy4jZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgZmFsc2UsIGNyb3BNb2RlKTtcbiAgICAgIGxldCBtYXNrSW1hZ2UgPSBhd2FpdCB0aGlzLiNnZXRJbWFnZUJhc2U2NChhZGRyZXNzLCB0cnVlLCBjcm9wTW9kZSk7XG4gICAgICBtYXNrSW1hZ2UgPSAobWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZSk7XG5cbiAgICAgIHJldHVybiBbb2NyUmVzdWx0LCBvcmlnaW5JbWFnZSwgbWFza0ltYWdlLCBzc2FSZXN1bHRdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3N0YXJ0UmVjb2duaXRpb24gZXJyb3I6JyArIGUpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgI3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKSB7XG4gICAgdGhpcy4jY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7XG4gICAgdGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4geyAgICAgIC8vIDHstIggZGVsYXkg7ZuEIOyLpO2WiVxuICAgICAgYXdhaXQgdGhpcy4jcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBhc3luYyAjcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICBjb25zdCBpc1Bhc3Nwb3J0ID0gdGhpcy4jb2NyVHlwZS5pbmNsdWRlcygncGFzc3BvcnQnKTtcbiAgICAgIGF3YWl0IHRoaXMuI3NldHVwVmlkZW8oaXNQYXNzcG9ydCk7XG5cbiAgICAgIGNvbnN0IHsgdmlkZW8gfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgLy8gY29uc3QgW3RyYWNrXSA9IHRoaXMuI3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICAvLyBjb25zdCBjYXBhYmlsaXR5ID0gdHJhY2suZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ0NhcmRTY2FuI2luaXRpYWxpemUgY2FwYWJpbGl0eScsIGNhcGFiaWxpdHkpO1xuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gdmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSB0aGlzLiNzdHJlYW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQXZvaWQgdXNpbmcgdGhpcyBpbiBuZXcgYnJvd3NlcnMsIGFzIGl0IGlzIGdvaW5nIGF3YXkuXG4gICAgICAgICAgdmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy4jc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiAtIG9ubG9hZGVkbWV0YWRhdGEnKTtcbiAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2NhbnBsYXknKTtcblxuICAgICAgICAgIC8vIHZpZGVvIGVsZW1lbnQgc3R5bGUg7ISk7KCVXG4gICAgICAgICAgdGhpcy4jdmlkZW9PcmllbnRhdGlvbiA9XG4gICAgICAgICAgICB2aWRlby52aWRlb1dpZHRoIC8gdmlkZW8udmlkZW9IZWlnaHQgPCAxID8gJ3BvcnRyYWl0JyA6ICdsYW5kc2NhcGUnO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ3RoaXMuI2RldmljZUluZm8ub3NTaW1wbGUgOjogJyArIHRoaXMuI2RldmljZUluZm8ub3NTaW1wbGUpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ3RoaXMuI3VpT3JpZW50YXRpb24gOjogJyArIHRoaXMuI3VpT3JpZW50YXRpb24pO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ3RoaXMuI3ZpZGVvT3JpZW50YXRpb24gOjogJyArIHRoaXMuI3ZpZGVvT3JpZW50YXRpb24pO1xuXG4gICAgICAgICAgdGhpcy4jY2FtU2V0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuI2FkanVzdFN0eWxlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgdmlkZW8ud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdlcnJvcicsIGUubmFtZSwgZSk7XG4gICAgICBpZiAoZS5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnQ2FtZXJhIEFjY2VzcyBQZXJtaXNzaW9uIGlzIG5vdCBhbGxvd2VkJztcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB0aGlzLiNvbkZhaWx1cmVQcm9jZXNzKFwiRTQwM1wiLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdOb3RSZWFkYWJsZUVycm9yJykge1xuICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLklOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgICAgICB0aGlzLiNzZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCk7ICAgICAgICAgICAgICAvLyDsnqzqt4Ag7Zi47LacXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHN0eWxlKTtcbiAgfTtcblxuICAjY2hhbmdlU3RhZ2UodmFsLCBmb3JjZVVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuI3ByZXZpb3VzSW5Qcm9ncmVzc1N0ZXAgPT09IHZhbCAmJiBmb3JjZVVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jcHJldmlvdXNJblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICB0aGlzLiNpblByb2dyZXNzU3RlcCA9IHZhbDtcblxuICAgIGNvbnN0IHsgZ3VpZGVCb3ggfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGggKyAncHgnLFxuICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5zdHlsZSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cyArICdweCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlW3ZhbF0sXG4gICAgfTtcblxuICAgIGlmIChndWlkZUJveCkge1xuICAgICAgdGhpcy4jc2V0U3R5bGUoZ3VpZGVCb3gsIHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jb25JblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICB0aGlzLiNvbkluUHJvZ3Jlc3NDaGFuZ2UuY2FsbCh0aGlzLCB2YWwsIHRoaXMuI2JvdHRvbVVJKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyAjZ2V0SW5wdXREZXZpY2VzKGtpbmQsIGxhYmVsKSB7XG4gICAgLy8gdGhyb3cgZXJyb3IgaWYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4ge1xuICAgICAgaWYgKGRldmljZS5raW5kID09PSBgJHtraW5kfWlucHV0YCAmJiBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IGRldmljZS5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgaWYgKGNhcD8uZmFjaW5nTW9kZT8uaW5jbHVkZXModGhpcy4jZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlkZW9EZXZpY2VzLmxlbmd0aCA8PSAxXG4gICAgICA/IHZpZGVvRGV2aWNlc1xuICAgICAgOiB2aWRlb0RldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IChsYWJlbCA/IGRldmljZS5sYWJlbC5pbmNsdWRlcyhsYWJlbCkgOiB0cnVlKSk7XG4gIH1cblxuICBjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy4jcHJldlVpT3JpZW50YXRpb24pIHtcbiAgICAgIHRoaXMuI3VpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgdGhpcy4jcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgY3VycmVudCwgaXNDaGFuZ2VkIH07XG4gIH1cblxuICAjc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQgeyBvY3IsIHZpZGVvLCBjYW52YXMsIHJvdGF0aW9uQ2FudmFzLFxuICAgICAgZ3VpZGVCb3gsIHZpZGVvV3JhcCwgZ3VpZGVCb3hXcmFwLFxuICAgICAgbWFza0JveFdyYXAsIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLCBib3R0b21VSSB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcblxuICAgIGlmICghb2NyKSB0aHJvdyBuZXcgRXJyb3IoXCJvY3IgZGl2IGVsZW1lbnQgaXMgbm90IGV4aXN0XCIpO1xuXG4gICAgaWYgKHZpZGVvV3JhcCkgdmlkZW9XcmFwLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveFdyYXApIGd1aWRlQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAodmlkZW8pIHZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjYW52YXMpIGNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAocm90YXRpb25DYW52YXMpIHJvdGF0aW9uQ2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveCkgZ3VpZGVCb3gucmVtb3ZlKCk7XG4gICAgaWYgKG1hc2tCb3hXcmFwKSBtYXNrQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAocHJldmVudFRvRnJlZXplVmlkZW8pIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChib3R0b21VSSAmJiAhdGhpcy4jb3B0aW9ucy51c2VCb3R0b21VSSkgYm90dG9tVUkucmVtb3ZlKCk7ICAgICAgLy8gYm90dG9tVUkg66+47IKs7Jqp7J28IOqyveyasCDsgq3soJxcblxuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy4jZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID0gKFs5MCwgMjcwXS5pbmNsdWRlcyhyb3RhdGlvbkRlZ3JlZSkpO1xuXG4gICAgbGV0IG9jclN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgIH07XG4gICAgdGhpcy4jc2V0U3R5bGUob2NyLCBvY3JTdHlsZSk7XG5cbiAgICBjb25zdCB3cmFwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JywgICAgICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfTtcblxuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG5cbiAgICBtYXNrQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtYXNrQm94V3JhcCcpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuI3NldFN0eWxlKG1hc2tCb3hXcmFwLCB3cmFwU3R5bGUpO1xuXG4gICAgbGV0IG1hc2tfZnJhbWUgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUubWFza19mcmFtZSArICdmZic7XG4gICAgaWYgKCEhdGhpcy4jb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICBtYXNrX2ZyYW1lID0gdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLmNsaXBfZnJhbWUgKyAnNTUnO1xuICAgIH1cblxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgK1xuICAgICAgXCIgIDxzdmcgaWQ9J21hc2tCb3hDb250YWluZXInIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XFxuXCIgK1xuICAgICAgXCIgICAgPG1hc2sgaWQ9J21hc2stcmVjdCc+XFxuXCIgK1xuICAgICAgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICtcbiAgICAgIFwiICAgICAgPHN2ZyB4PSc1MCUnIHk9JzUwJScgb3ZlcmZsb3c9J3Zpc2libGUnPlxcblwiICtcbiAgICAgIFwiICAgICAgICAgIDxyZWN0IGlkPSdtYXNrQm94SW5uZXInXFxuXCIgK1xuICAgICAgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArXG4gICAgICBcIiAgICAgICAgICAgIHg9Jy0yMDAnIHk9Jy0xMzAnXFxuXCIgK1xuICAgICAgXCIgICAgICAgICAgICByeD0nMTAnIHJ5PScxMCdcXG5cIiArXG4gICAgICBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgK1xuICAgICAgXCIgICAgICA8L3N2Zz5cXG5cIiArXG4gICAgICBcIiAgICA8L21hc2s+XFxuXCIgK1xuICAgICAgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArXG4gICAgICBcIiAgICAgICAgICB4PScwJyB5PScwJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJ1xcblwiICtcbiAgICAgIFwiICAgICAgICAgIGZpbGw9J1wiICsgbWFza19mcmFtZSArIFwiJyBtYXNrPSd1cmwoI21hc2stcmVjdCknPjwvcmVjdD5cXG5cIiArXG4gICAgICBcIiAgPC9zdmc+XCJcbiAgICBvY3IuYXBwZW5kQ2hpbGQobWFza0JveFdyYXApO1xuXG4gICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpO1xuXG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG5cbiAgICBjb25zdCByb3RhdGVDc3MgPSAncm90YXRlKCcgKyByb3RhdGlvbkRlZ3JlZSArICdkZWcpJztcbiAgICBjb25zdCBtaXJyb3JDc3MgPSAncm90YXRlWSgxODBkZWcpJ1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcblxuXG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIGlmICh0aGlzLiNnZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLiNnZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvLCB2aWRlb1N0eWxlKTtcblxuICAgIHZpZGVvV3JhcC5hcHBlbmRDaGlsZCh2aWRlbyk7XG5cbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcblxuICAgIGd1aWRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94Jyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy4jc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgfSk7XG5cbiAgICBndWlkZUJveFdyYXAuYXBwZW5kQ2hpbGQoZ3VpZGVCb3gpO1xuXG4gICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYW52YXMnKTtcblxuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy4jb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/ICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID8gJ25vbmUnIDogJ2Rpc3BsYXknKSA6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm9yZGVyOiAnZ3JlZW4gMnB4IHNvbGlkJ1xuICAgIH1cbiAgICB0aGlzLiNzZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcblxuICAgIG9jci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gICAgcm90YXRpb25DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByb3RhdGlvbkNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncm90YXRpb25DYW52YXMnKTtcblxuICAgIHRoaXMuI3NldFN0eWxlKHJvdGF0aW9uQ2FudmFzLCB7XG4gICAgICBkaXNwbGF5OiB0aGlzLiNvcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gKHRoaXMuI2lzUm90YXRlZDkwb3IyNzAgPyAnZGlzcGxheScgOiAnbm9uZScpIDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMHB4JyxcbiAgICAgIGJvcmRlcjogJ2JsdWUgMnB4IHNvbGlkJ1xuICAgIH0pO1xuICAgIG9jci5hcHBlbmRDaGlsZChyb3RhdGlvbkNhbnZhcyk7XG5cbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuI3NldFN0eWxlKHByZXZlbnRUb0ZyZWV6ZVZpZGVvLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgIHJpZ2h0OiAnMTAnLFxuICAgIH0pO1xuXG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uaW5uZXJIVE1MID0gXCJcIiArXG4gICAgICBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcXFwiIHdpZHRoPVxcXCIzMnB4XFxcIiBoZWlnaHQ9XFxcIjMycHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCI+XFxuXCIgK1xuICAgICAgXCIgIDxjaXJjbGUgY3g9XFxcIjg0XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjAuNTU1NTU1NTU1NTU1NTU1NnNcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIHZhbHVlcz1cXFwiMTA7MFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImZpbGxcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJkaXNjcmV0ZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICA8L2NpcmNsZT5cIiArXG4gICAgICBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgK1xuICAgICAgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImN4XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMTY7MTY7MTY7NTA7ODRcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArXG4gICAgICBcIiAgPC9jaXJjbGU+XCIgK1xuICAgICAgXCIgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIwOzA7MTA7MTA7MTBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArXG4gICAgICBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0wLjU1NTU1NTU1NTU1NTU1NTZzXFxcIj48L2FuaW1hdGU+XFxuXCIgK1xuICAgICAgXCIgIDwvY2lyY2xlPlwiICtcbiAgICAgIFwiICA8Y2lyY2xlIGN4PVxcXCI4NFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxMFxcXCIgZmlsbD1cXFwiIzg2ODY4NjAwXFxcIj5cXG5cIiArXG4gICAgICBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjExMTExMTExMTExMTExMTJzXFxcIj48L2FuaW1hdGU+XFxuXCIgK1xuICAgICAgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICA8L2NpcmNsZT5cIiArXG4gICAgICBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgK1xuICAgICAgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImN4XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMTY7MTY7MTY7NTA7ODRcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArXG4gICAgICBcIiAgPC9jaXJjbGU+XCJcbiAgICAgIFwiPC9zdmc+XCI7XG5cbiAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmVudFRvRnJlZXplVmlkZW8pO1xuXG4gICAgaWYgKGJvdHRvbVVJICYmIHRoaXMuI29wdGlvbnMudXNlQm90dG9tVUkpIHtcbiAgICAgIG9jci5hcHBlbmRDaGlsZChib3R0b21VSSk7ICAgLy8g7Iic7ISc66W8IOunqOuSpOuhnFxuICAgIH1cblxuICAgIHRoaXMuI29jciA9IG9jcjtcbiAgICB0aGlzLiNjYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy4jcm90YXRpb25DYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICB0aGlzLiN2aWRlbyA9IHZpZGVvO1xuICAgIHRoaXMuI3ZpZGVvV3JhcCA9IHZpZGVvV3JhcDtcbiAgICB0aGlzLiNndWlkZUJveCA9IGd1aWRlQm94O1xuICAgIHRoaXMuI2d1aWRlQm94V3JhcCA9IGd1aWRlQm94V3JhcDtcbiAgICB0aGlzLiNtYXNrQm94V3JhcCA9IG1hc2tCb3hXcmFwO1xuICAgIHRoaXMuI3ByZXZlbnRUb0ZyZWV6ZVZpZGVvID0gcHJldmVudFRvRnJlZXplVmlkZW87XG4gICAgdGhpcy4jYm90dG9tVUkgPSBib3R0b21VSTtcblxuICAgIHJldHVybiB7IG9jciwgY2FudmFzLCByb3RhdGlvbkNhbnZhcywgdmlkZW8sIHZpZGVvV3JhcCxcbiAgICAgIGd1aWRlQm94LCBndWlkZUJveFdyYXAsIG1hc2tCb3hXcmFwLCBwcmV2ZW50VG9GcmVlemVWaWRlbywgZ3VpZGVUZXh0OiBib3R0b21VSX07XG4gIH1cblxuICBhc3luYyAjc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KSB7XG4gICAgLy8gd2FzbSDsnbjsi53shLHriqUg7LWc7KCB7ZmU65CcIO2VtOyDgeuPhFxuICAgIHRoaXMuI3Jlc29sdXRpb25XaWR0aCA9IDEwODA7XG4gICAgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCA9IDcyMDtcblxuICAgIHRoaXMuI2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCB7IHZpZGVvLCBjYW52YXMsIHJvdGF0aW9uQ2FudmFzIH0gPSB0aGlzLiNzZXR1cERvbUVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBhd2FpdCB0aGlzLiNnZXRJbnB1dERldmljZXMoJ3ZpZGVvJywgdGhpcy4jb3B0aW9ucy5kZXZpY2VMYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvRGV2aWNlcyA6OiAnLCB2aWRlb0RldmljZXMpXG4gICAgY29uc3QgZGV2aWNlSWRMaXN0ID0gdmlkZW9EZXZpY2VzLm1hcCgoZGV2aWNlKSA9PiBkZXZpY2UuZGV2aWNlSWQpO1xuXG4gICAgdGhpcy5jaGVja1VJT3JpZW50YXRpb24oKTtcbiAgICBsZXQgY29uc3RyYWludFdpZHRoLCBjb25zdHJhaW50SGVpZ2h0O1xuICAgIGlmICh0aGlzLiN1aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7ICAgICAgICAgLy8gdWkgOiBwb3J0cmFpdFxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCwgICAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogMTA4MCwgICAgICAgICAgICAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLCAgICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiA3MjAsICAgICAgICAgICAgIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdWkgOiBsYW5kc2NhcGVcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsXG4gICAgICAgIG1pbjogMTI4MCxcbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCxcbiAgICAgICAgbWluOiA3MjAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge1xuICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgdmlkZW86IHtcbiAgICAgICAgem9vbTogeyBpZGVhbDogMSB9LFxuICAgICAgICBmYWNpbmdNb2RlOiB7IGlkZWFsOiB0aGlzLiNmYWNpbmdNb2RlQ29uc3RyYWludCB9LFxuICAgICAgICBmb2N1c01vZGU6IHsgaWRlYWw6ICdjb250aW51b3VzJyB9LFxuICAgICAgICB3aGl0ZUJhbGFuY2VNb2RlOiB7IGlkZWFsOiAnY29udGludW91cycgfSxcbiAgICAgICAgZGV2aWNlSWQ6IHtcbiAgICAgICAgICBpZGVhbDogZGV2aWNlSWRMaXN0Lmxlbmd0aCA+IDAgPyBkZXZpY2VJZExpc3RbZGV2aWNlSWRMaXN0Lmxlbmd0aCAtIDFdIDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogY29uc3RyYWludFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnN0cmFpbnRIZWlnaHQsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgZHVtcHRyYWNrID0gKFthLCBiXSwgdHJhY2spID0+XG4gICAgICAvLyAgIGAke2F9JHt0cmFjay5raW5kID09ICd2aWRlbycgPyAnQ2FtZXJhJyA6ICdNaWNyb3Bob25lJ30gKCR7dHJhY2sucmVhZHlTdGF0ZX0pOiAke3RyYWNrLmxhYmVsfSR7Yn1gO1xuXG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndmlkZW9UcmFja3MgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkpXG4gICAgICAvLyBjb25zdCBzdHJlYW1TZXR0aW5ncyA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldFNldHRpbmdzKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtQ2FwYWJpbGl0aWVzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENhcGFiaWxpdGllcygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDb25zdHJhaW50cygpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbVNldHRpbmdzIDo6ICcsIHN0cmVhbVNldHRpbmdzKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIC8gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCAvIHN0cmVhbVNldHRpbmdzLmhlaWdodCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGFzcGVjdFJhdGlvIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5hc3BlY3RSYXRpbyk7XG5cbiAgICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3RoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICBbcm90YXRpb25DYW52YXMud2lkdGgsIHJvdGF0aW9uQ2FudmFzLmhlaWdodF0gPSBbdGhpcy4jcmVzb2x1dGlvbkhlaWdodCwgdGhpcy4jcmVzb2x1dGlvbldpZHRoXTtcbiAgICAgIH1cblxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdGhpcy4jc3RyZWFtID0gc3RyZWFtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gICNhZGp1c3RTdHlsZSgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdhZGp1c3RTdHlsZSAtIFNUQVJUJyk7XG4gICAgY29uc3QgeyBvY3IsIHZpZGVvLCBjYW52YXMsIGd1aWRlQm94LCB2aWRlb1dyYXAsIG1hc2tCb3hXcmFwLCBib3R0b21VSSB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAvLyDquLDspIDsoJXrs7RcbiAgICBjb25zdCBiYXNlV2lkdGggPSA0MDA7XG4gICAgY29uc3QgYmFzZUhlaWdodCA9IDI2MDtcblxuICAgIGNvbnN0IHNjYW5uZXJGcmFtZVJhdGlvID0gYmFzZUhlaWdodCAvIGJhc2VXaWR0aDsgICAgICAgLy8g7Iug67aE7KadIOu5hOycqFxuXG4gICAgbGV0IGd1aWRlQm94V2lkdGgsIGd1aWRlQm94SGVpZ2h0LCBuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodDtcblxuICAgIGxldCBjYWxjT2NyQ2xpZW50V2lkdGggPSAob2NyLmNsaWVudFdpZHRoKTtcbiAgICBsZXQgY2FsY09jckNsaWVudEhlaWdodCA9IChvY3IuY2xpZW50SGVpZ2h0KTtcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSAodmlkZW8udmlkZW9XaWR0aCk7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9ICh2aWRlby52aWRlb0hlaWdodCk7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gKHZpZGVvLmNsaWVudFdpZHRoKTtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gKHZpZGVvLmNsaWVudEhlaWdodCk7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbjtcblxuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gKHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCk7XG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gKHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMpO1xuXG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG5cbiAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IHRoaXMuI2d1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IHRoaXMuI3ZpZGVvUmF0aW9CeUhlaWdodDtcblxuICAgIGlmICh0aGlzLiN1aU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnKSB7ICAgICAgICAgICAgICAgLy8g7IS466GcIFVJXG4gICAgICAvLyB2aWRlbyDqsIDroZwg6riw7KSAIDEwMCUg7Jyg7KeAICjrs4Dqsr3sl4bsnYwpXG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHsgICAvLyDsubTrqZTrnbzrj4Qg7IS466GcXG4gICAgICAgIC8vLyDshLjroZwgVUkgJiYg7IS466GcIOu5hOuUlOyYpFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IChjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aCk7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gKGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbyk7XG5cbiAgICAgICAgZ3VpZGVCb3hXaWR0aCArPSAoYm9yZGVyV2lkdGggKiAyKTtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgKz0gKGJvcmRlcldpZHRoICogMik7XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOu5hOuUlOyYpCDtmZXrjIBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IChndWlkZUJveFdpZHRoKTtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSAobmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCkpO1xuICAgICAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDruYTrlJTsmKQg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSAoY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0KTtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9ICgoZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGgpIC8gYmFzZUhlaWdodCk7XG5cbiAgICAgICAgZ3VpZGVCb3hXaWR0aCArPSAoYm9yZGVyV2lkdGggKiAyKTtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgKz0gKGJvcmRlcldpZHRoICogMik7XG5cbiAgICAgICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICAgICAgdGhpcy4jc2V0U3R5bGUoYm90dG9tVUksIHtcbiAgICAgICAgICAgIGJvdHRvbTogJzIwcHgnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOqwgOuhnCBVSVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLiN1aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDqsIDroZwg67mE65SU7JikXG4gICAgICAgIC8vIOu5hOuUlOyYpOulvCBoZWlnaHQg6riw7KSA7Jy866GcIOykhOydtOqzoFxuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IChjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0KVxuICAgICAgICAvLyBoZWlnaHQg6riw7KSA7Jy866GcIHdpZHRoIOqzhOyCsFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gKG5ld1ZpZGVvSGVpZ2h0ICogKGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvSGVpZ2h0KSk7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk64qUIOu5hOuUlOyYpOulvCDshLjroZwg6riw7KSA7Jy866GcIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IChuZXdWaWRlb0hlaWdodCk7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSAoKGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoKSAvIGJhc2VIZWlnaHQpO1xuXG4gICAgICAgIGd1aWRlQm94V2lkdGggKz0gKGJvcmRlcldpZHRoICogMik7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ICs9IChib3JkZXJXaWR0aCAqIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOyEuOuhnCDruYTrlJTsmKRcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gMC44O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gKGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoKTtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSAoZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvKTtcblxuICAgICAgICBndWlkZUJveFdpZHRoICs9IChib3JkZXJXaWR0aCAqIDIpO1xuICAgICAgICBndWlkZUJveEhlaWdodCArPSAoYm9yZGVyV2lkdGggKiAyKTtcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg67mE65SU7JikIO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gKGd1aWRlQm94V2lkdGgpO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IChuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKSk7XG4gICAgICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGJvdHRvbVVJKSB7XG4gICAgICAgIHRoaXMuI3NldFN0eWxlKGJvdHRvbVVJLCB7XG4gICAgICAgICAgYm90dG9tOiAnNXB4JyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4jc2V0U3R5bGUodmlkZW8sIHtcbiAgICAgIHdpZHRoOiBuZXdWaWRlb1dpZHRoICsgJ3B4JyxcbiAgICAgIGhlaWdodDogbmV3VmlkZW9IZWlnaHQgKyAncHgnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdmlkZW9Jbm5lckdhcCA9IDI7ICAgICAgICAgICAgICAgICAgICAgICAgLy8g66+47IS47ZWY6rKMIG1hc2tCb3hJbm5lcuuztOuLpCBndWlkZUJveOqwgCDsnpHsnYDqsoMg67O07KCVXG4gICAgdGhpcy4jc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiAoZ3VpZGVCb3hXaWR0aCAtIHZpZGVvSW5uZXJHYXApICsgJ3B4JyxcbiAgICAgIGhlaWdodDogKGd1aWRlQm94SGVpZ2h0IC0gdmlkZW9Jbm5lckdhcCkgKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbWFza0JveElubmVyID0gbWFza0JveFdyYXAucXVlcnlTZWxlY3RvcihcIiNtYXNrQm94SW5uZXJcIik7XG4gICAgbGV0IHIgPSAoYm9yZGVyUmFkaXVzIC0gKGJvcmRlcldpZHRoICogMikpO1xuICAgIHIgPSAociA8IDApID8gMCA6IHI7XG4gICAgaWYgKCFpc05hTihndWlkZUJveFdpZHRoKSAmJiAhaXNOYU4oZ3VpZGVCb3hIZWlnaHQpICYmICFpc05hTihib3JkZXJSYWRpdXMpICYmICFpc05hTihib3JkZXJXaWR0aCkpIHtcbiAgICAgIGNvbnN0IG1hc2tCb3hJbm5lcldpZHRoID0gKGd1aWRlQm94V2lkdGggLSAoYm9yZGVyV2lkdGggKiAyKSAtICh2aWRlb0lubmVyR2FwKSk7XG4gICAgICBjb25zdCBtYXNrQm94SW5uZXJIZWlnaHQgPSAoZ3VpZGVCb3hIZWlnaHQgLSAoYm9yZGVyV2lkdGggKiAyKSAtICh2aWRlb0lubmVyR2FwKSk7XG5cbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgbWFza0JveElubmVyV2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBtYXNrQm94SW5uZXJIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgKG1hc2tCb3hJbm5lcldpZHRoIC8gMiAqIC0xKSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3knLCAobWFza0JveElubmVySGVpZ2h0IC8gMiAqIC0xKSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J4JywgciArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J5JywgciArICcnKTtcbiAgICB9XG5cbiAgICB0aGlzLiNjaGFuZ2VTdGFnZSh0aGlzLiNpblByb2dyZXNzU3RlcCwgdHJ1ZSk7XG4gICAgY29uc29sZS5kZWJ1ZygnYWRqdXN0U3R5bGUgLSBFTkQnKTtcbiAgfVxuXG4gICNjbG9zZUNhbWVyYSgpIHtcbiAgICB0aGlzLiNjbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cblxuICBhc3luYyAjbG9hZFJlc291cmNlcygpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWRSZXNvdXJjZXMoKSBTVEFSVFwiKVxuICAgIGlmICh0aGlzLiNyZXNvdXJjZXNMb2FkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9hZFJlc291cmNlKCkgU0tJUCwgYWxyZWFkeSBsb2FkZWQhXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCgncXVyYW0uanMnLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAgIC50aGVuKCh0ZXh0KSA9PiB7XG4gICAgICAgIGxldCByZWdleCA9IC8oLiopID0gTW9kdWxlLmN3cmFwL2dtO1xuICAgICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKFxuICAgICAgICAgICdxdXJhbS53YXNtJyxcbiAgICAgICAgICBuZXcgVVJMKCdxdXJhbS53YXNtJywgdGhpcy4jb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWZcbiAgICAgICAgKTtcbiAgICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoXG4gICAgICAgICAgL1JFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXXF1cmFtXFwuZGF0YVtcIiddL2dtLFxuICAgICAgICAgIGBSRU1PVEVfUEFDS0FHRV9CQVNFID0gXCIke25ldyBVUkwoJ3F1cmFtLmRhdGEnLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZlxuICAgICAgICAgIH1cImBcbiAgICAgICAgKTtcbiAgICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoXG4gICAgICAgICAgJ2Z1bmN0aW9uIGNyZWF0ZVdhc20nLFxuICAgICAgICAgICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJ1xuICAgICAgICApO1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShcbiAgICAgICAgICAndmFyIGFzbSA9IGNyZWF0ZVdhc20oKTsnLFxuICAgICAgICAgICdhd2FpdCBjcmVhdGVXYXNtKCk7J1xuICAgICAgICApO1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShcbiAgICAgICAgICAnaW5zdGFudGlhdGVBc3luYygpOycsXG4gICAgICAgICAgJ2F3YWl0IGluc3RhbnRpYXRlQXN5bmMoKTsnXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICB9KTtcblxuICAgIHNyYyA9IGBcbiAgICAoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAke3NyY31cbiAgICAgIE1vZHVsZS5sZW5ndGhCeXRlc1VURjggPSBsZW5ndGhCeXRlc1VURjhcbiAgICAgIE1vZHVsZS5zdHJpbmdUb1VURjggPSBzdHJpbmdUb1VURjhcbiAgICAgIHJldHVybiBNb2R1bGVcbiAgICB9KSgpXG4gICAgICAgIGA7XG4gICAgdGhpcy4jT0NSRW5naW5lID0gYXdhaXQgZXZhbChzcmMpO1xuXG4gICAgdGhpcy4jT0NSRW5naW5lLm9uUnVudGltZUluaXRpYWxpemVkID0gYXN5bmMgXyA9PiB7fTtcbiAgICBhd2FpdCB0aGlzLiNPQ1JFbmdpbmUub25SdW50aW1lSW5pdGlhbGl6ZWQoKTtcblxuICAgIHRoaXMuI3Jlc291cmNlc0xvYWRlZCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJsb2FkUmVzb3VyY2VzKCkgRU5EXCIpXG4gIH1cblxuICAjc3RhcnRTY2FuSW1wbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy4jaW50ZXJ2YWxMb2NrID0gZmFsc2U7XG4gICAgICBsZXQgZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuI3BhZ2VFbmQgPSBmYWxzZTtcblxuICAgICAgdGhpcy4jaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodGhpcy4jaW50ZXJ2YWxMb2NrID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2ludGVydmFsTG9jayA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdGhpcy4jY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICAgIGlmICghdGhpcy4jT0NSRW5naW5lWydhc20nXSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVE9ETyA6IOyEpOygle2VoOyImCDsnojqsowg67OA6rK9IGRlZmF1bHQg6rCS64+EIOygnOqztVxuICAgICAgICAgIGNvbnN0IFtyZXNvbHV0aW9uX3csIHJlc29sdXRpb25faF0gPSBbdGhpcy4jcmVzb2x1dGlvbldpZHRoLCB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgICAgICBjb25zdCB7IHZpZGVvIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgICAgIGlmIChyZXNvbHV0aW9uX3cgPT09IDAgfHwgcmVzb2x1dGlvbl9oID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuI3NsZWVwKDEwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRyZXNzIGJlZm9yZSAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcbiAgICAgICAgICBpZiAoYWRkcmVzcyA9PT0gMCAmJiAhdGhpcy4jcGFnZUVuZCAmJiB0aGlzLiNpc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW8pKSB7XG4gICAgICAgICAgICBbYWRkcmVzcywgdGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFja10gPSB0aGlzLiNnZXRTY2FubmVyQWRkcmVzcyh0aGlzLiNvY3JUeXBlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWFkZHJlc3MgfHwgdGhpcy4jcGFnZUVuZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYWZ0ZXIgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG5cbiAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgIGlmICghKGF3YWl0IHRoaXMuI2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MsIDApKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLlJFQURZKSB7XG4gICAgICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfRkFJTEVEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2luUHJvZ3Jlc3NTdGVwICE9PSB0aGlzLklOX1BST0dSRVNTLk9DUl9SRUNPR05JWkVEKSB7XG4gICAgICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuQ0FSRF9ERVRFQ1RfU1VDQ0VTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuI2luUHJvZ3Jlc3NTdGVwID09PSB0aGlzLklOX1BST0dSRVNTLkNBUkRfREVURUNUX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIC8vIGZhbGxiYWNrIGNhc2Ug7J2465OvXG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIC8vIGlmIChyZXN1bHQgIT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIC8vICAgY29uc3QgUHJldkltYWdlID0gZ2V0UHJldkltYWdlKCk7XG4gICAgICAgICAgICAvLyAgIE1vZHVsZS5IRUFQOC5zZXQoaW1nRGF0YS5kYXRhLCBQcmV2SW1hZ2UpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBjb25zdCBbb2NyUmVzdWx0LCBpbWdEYXRhVXJsLCBtYXNrSW1hZ2UsIHNzYVJlc3VsdF0gPSBhd2FpdCB0aGlzLiNzdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIHRoaXMuI29jclR5cGUsIHRoaXMuI3NzYU1vZGUpO1xuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICBpZiAob2NyUmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy4jc3NhTW9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiISEhIHNzYVJldHJ5Q291bnQgOiBcIiArIHRoaXMuI3NzYVJldHJ5Q291bnQgKyBcIiAhISFcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltXQVJOXSBTU0EgTU9ERSBpcyB0cnVlLiBidXQsIHNzYVJlc3VsdCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IFwiRkFLRVwiKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy4jc3NhUmV0cnlDb3VudCA8IHRoaXMuI29wdGlvbnMuc3NhTWF4UmV0cnlDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiEhISBbUkVUUlkrK10gRkFLRSwgYnV0IHJldHJ5IGNvdW50IGlzIG5vdCBleGNlZWQgOiBcIiArIHRoaXMuI3NzYVJldHJ5Q291bnQgKyBcIiAhISFcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NzYVJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIhISEgW01BWCBSRVRSWSBFWENFRURdIEZBS0UsIGFuZCByZXRyeSBjb3VudCBpcyBleGNlZWQgOiBcIiArIHRoaXMuI3NzYVJldHJ5Q291bnQgKyBcIiAhISFcIik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3VsdCA6ICR7b2NyUmVzdWx0fWApO1xuICAgICAgICAgICAgICB0aGlzLiNvblN1Y2Nlc3NQcm9jZXNzKHtcbiAgICAgICAgICAgICAgICBvY3JfdHlwZTogdGhpcy4jb2NyVHlwZSxcbiAgICAgICAgICAgICAgICBvY3JfZGF0YTogcGFyc2VyLnBhcnNlT2NyUmVzdWx0KHRoaXMuI29jclR5cGUsIHRoaXMuI3NzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCB0aGlzLiNzc2FSZXRyeUNvdW50KSxcbiAgICAgICAgICAgICAgICBvY3Jfb3JpZ2luX2ltYWdlOiBpbWdEYXRhVXJsLFxuICAgICAgICAgICAgICAgIG9jcl9tYXNraW5nX2ltYWdlOiBtYXNrSW1hZ2UsXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHRoaXMuI2NsZWFySW50ZXJ2YWxUaW1lcnMoKTsgIC8vIGZvciBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yJztcbiAgICAgICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gXCI6IFwiICsgZS5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XG5cbiAgICAgICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI29uRmFpbHVyZVByb2Nlc3MoXCJXQTAwMVwiLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRoaXMuI2ludGVydmFsTG9jayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gICNvblN1Y2Nlc3NQcm9jZXNzKHJldmlld19yZXN1bHQpIHtcbiAgICAvLyDsnbjsi50g7ISx6rO1IOyKpOy6lCDro6jtlIQg7KKF66OMXG4gICAgdGhpcy4jY2hhbmdlU3RhZ2UodGhpcy5JTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUyk7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogXCJOMTAwXCIsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogXCJPSy5cIlxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiByZXZpZXdfcmVzdWx0LFxuICAgIH07XG5cbiAgICBpZiAodGhpcy4jb25TdWNjZXNzKSB7XG4gICAgICB0aGlzLiNvblN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgIHRoaXMuI29uU3VjY2VzcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW1dBUk5dIG9uU3VjY2VzcyBjYWxsYmFjayBpcyBudWxsLCBzbyBza2lwIHRvIHNlbmQgcmVzdWx0XCIpO1xuICAgIH1cbiAgfVxuXG4gICNvbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMuI2NoYW5nZVN0YWdlKHRoaXMuSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRCk7XG5cbiAgICBsZXQgZXJyb3JEZXRhaWwgPSBcIlwiO1xuICAgIGlmIChlPy50b1N0cmluZygpKSBlcnJvckRldGFpbCArPSBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGU/LnN0YWNrKSBlcnJvckRldGFpbCArPSBlLnN0YWNrO1xuXG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogcmVzdWx0Q29kZSxcbiAgICAgICAgXCJyZXN1bHRfbWVzc2FnZVwiOiBlcnJvck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwiZmFpbGVkXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiB7XG4gICAgICAgIG9jcl90eXBlOiB0aGlzLiNvY3JUeXBlLFxuICAgICAgICBlcnJvcl9kZXRhaWw6IGVycm9yRGV0YWlsLFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy4jb25GYWlsdXJlKSB7XG4gICAgICB0aGlzLiNvbkZhaWx1cmUocmVzdWx0KTtcbiAgICAgIHRoaXMuI29uRmFpbHVyZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW1dBUk5dIG9uRmFpbHVyZSBjYWxsYmFjayBpcyBudWxsLCBzbyBza2lwIHRvIHNlbmQgcmVzdWx0XCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jICNzdGFydFNjYW4oKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgYXdhaXQgdGhpcy4jcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLiNzdGFydFNjYW5JbXBsKCk7XG4gICAgY29uc29sZS5sb2coXCJTQ0FOIEVORFwiKTtcbiAgfVxuICBhc3luYyAjcmVjb3ZlcnlTY2FuKCkge1xuICAgIGNvbnNvbGUubG9nKFwiISEhIFJFQ09WRVJZIFNDQU4gISEhXCIpO1xuICAgIHRoaXMuI3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICBhd2FpdCB0aGlzLiNzdGFydFNjYW4oKTtcbiAgfVxuICBzdG9wU2NhbigpIHtcbiAgICB0aGlzLiNjbGVhckludGVydmFsVGltZXJzKCk7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuICBzdG9wU3RyZWFtKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuI3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy4jc3RyZWFtKSB7XG4gICAgICB0aGlzLiNzdHJlYW0uc3RvcCAmJiB0aGlzLiNzdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuI3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy4jc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW4jc3RvcFN0cmVhbScsIHRyYWNrcyk7XG4gICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhY2tzLmZvckVhY2goKHRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy4jc3RyZWFtID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIOuplOuqqOumrCBhbGxvY2F0aW9uIGZyZWUg7ZWo7IiYICovXG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy4jZGVzdHJveVNjYW5uZXJBZGRyZXNzKCk7XG4gICAgdGhpcy4jZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuI2Rlc3Ryb3lQcmV2SW1hZ2UoKTtcbiAgICB0aGlzLiNkZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpO1xuICB9XG5cbiAgI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgI2NsZWFySW50ZXJ2YWxUaW1lcnMoKSB7XG4gICAgaWYgKHRoaXMuI2ludGVydmFsVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy4jaW50ZXJ2YWxUaW1lcik7XG4gICAgICBjb25zb2xlLmxvZyhcIiEhISBDTEVBUiBJTlRFUlZBTCAhISEhXCIpXG4gICAgICB0aGlzLiNpbnRlcnZhbFRpbWVyID0g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
