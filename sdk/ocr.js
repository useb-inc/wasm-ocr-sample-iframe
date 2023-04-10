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
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
import detector from './helpers/detector.js';
import parser from './helpers/parser.js';
var OCREngine;
var instance;
var IN_PROGRESS = {
  NOT_READY: 'not_ready',
  READY: 'ready',
  CARD_DETECT: 'detecting',
  OCR_RECOGNIZE: 'recognizing',
  OCR_SUCCESS: 'detect_success',
  OCR_FAILED: 'detect_failed'
};
var _license = /*#__PURE__*/new WeakMap();
var _ocrType = /*#__PURE__*/new WeakMap();
var _ssaMode = /*#__PURE__*/new WeakMap();
var _ssaRetryCount = /*#__PURE__*/new WeakMap();
var _onSuccess = /*#__PURE__*/new WeakMap();
var _onFailure = /*#__PURE__*/new WeakMap();
var _ocrTypeList = /*#__PURE__*/new WeakMap();
var _ocr = /*#__PURE__*/new WeakMap();
var _canvas = /*#__PURE__*/new WeakMap();
var _rotationCanvas = /*#__PURE__*/new WeakMap();
var _video = /*#__PURE__*/new WeakMap();
var _videoWrap = /*#__PURE__*/new WeakMap();
var _guideBox = /*#__PURE__*/new WeakMap();
var _guideBoxWrap = /*#__PURE__*/new WeakMap();
var _maskBoxWrap = /*#__PURE__*/new WeakMap();
var _preventToFreezeVideo = /*#__PURE__*/new WeakMap();
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
var _isInProgressHandleResize = /*#__PURE__*/new WeakMap();
var _intervalLock = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
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
var _checkUIOrientation = /*#__PURE__*/new WeakSet();
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
    _classPrivateMethodInitSpec(this, _checkUIOrientation);
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
    /** private methods */
    _classPrivateMethodInitSpec(this, _windowEventBind);
    _defineProperty(this, "initialized", false);
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
    _classPrivateFieldInitSpec(this, _ocrTypeList, {
      writable: true,
      value: ['idcard', 'driver', 'passport', 'foreign-passport', 'alien', 'credit', 'idcard-ssa', 'driver-ssa', 'passport-ssa', 'foreign-passport-ssa', 'alien-ssa', 'credit-ssa']
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
      value: IN_PROGRESS.NOT_READY
    });
    _classPrivateFieldInitSpec(this, _isInProgressHandleResize, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _intervalLock, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: {
        showClipFrame: false,
        showCanvasPreview: false,
        frameBorderStyle: {
          width: 10,
          style: 'solid',
          radius: 20,
          not_ready: '#000000',
          // 검정
          ready: '#b8b8b8',
          // 회색
          detecting: '#ff951c',
          // 주황
          detect_failed: '#FA113D',
          // 빨강
          detect_success: '#5cb85c',
          // 초록
          mask_frame: '#202023',
          // 다크그레이 (투명도는 수정불가 ff로 고정)
          clip_frame: '#ff00bf' // 딥퍼플 (수정불가)
        },

        resourceBaseUrl: window.location.href,
        deviceLabel: '',
        videoTargetId: '',
        rotationDegree: 0,
        mirrorMode: false,
        ssaMaxRetryCount: 0
      }
    });
    if (instance) return instance;
    instance = this;
    return instance;
  }

  /** public methods */
  init(settings) {
    if (!!!settings.licenseKey) throw new Error('License key is empty');
    _classPrivateFieldSet(this, _license, settings.licenseKey);
    _classPrivateFieldSet(this, _options, _.merge({}, _classPrivateFieldGet(this, _options), settings));
    if (!this.initialized) {
      _classPrivateMethodGet(this, _windowEventBind, _windowEventBind2).call(this);
      _classPrivateFieldSet(this, _deviceInfo, detector.getOsVersion());
      console.debug('this.#deviceInfo.osSimple :: ' + _classPrivateFieldGet(this, _deviceInfo).osSimple);
      this.initialized = true;
    }
  }
  startOCR(type, onSuccess, onFailure) {
    var _this = this;
    return _asyncToGenerator(function* () {
      if (!!!type || !!!onSuccess || !!!onFailure) {
        throw Error("Invalid parameter");
      } else {
        _classPrivateFieldSet(_this, _ocrType, type);
        _classPrivateFieldSet(_this, _ssaMode, _classPrivateFieldGet(_this, _ocrType).indexOf('-ssa') > -1);
        _classPrivateFieldSet(_this, _onSuccess, onSuccess);
        _classPrivateFieldSet(_this, _onFailure, onFailure);
      }
      if (!_this.initialized) {
        throw new Error('Not initialized!');
      }
      try {
        yield _classPrivateMethodGet(_this, _startScan, _startScan2).call(_this);
      } catch (e) {
        console.error('error in startOCR() : ' + e);
      } finally {
        _this.cleanup();
        _classPrivateMethodGet(_this, _closeCamera, _closeCamera2).call(_this);
        _classPrivateFieldSet(_this, _onSuccess, null);
        _classPrivateFieldSet(_this, _onFailure, null);
      }
    })();
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
function _windowEventBind2() {
  var _this2 = this;
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
    _this_.cleanup();
  };
  var handleResize = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      if (!_classPrivateFieldGet(_this_, _isInProgressHandleResize)) {
        _classPrivateFieldSet(_this_, _isInProgressHandleResize, true);
        _classPrivateFieldSet(_this_, _throttlingResizeTimer, null);
        console.log('!!! RESIZE EVENT !!!');
        if (!!!_classPrivateFieldGet(_this_, _ocrType)) return;
        _classPrivateMethodGet(_this2, _closeCamera, _closeCamera2).call(_this2);
        _classPrivateFieldSet(_this_, _isInProgressHandleResize, false);
        yield _this_.startOCR(_classPrivateFieldGet(_this_, _ocrType), _classPrivateFieldGet(_this2, _onSuccess), _classPrivateFieldGet(_this2, _onFailure));
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
  var lengthBytes = OCREngine.lengthBytesUTF8(_classPrivateFieldGet(this, _license)) + 1;
  _classPrivateFieldSet(this, _stringOnWasmHeap, OCREngine._malloc(lengthBytes));
  OCREngine.stringToUTF8(_classPrivateFieldGet(this, _license), _classPrivateFieldGet(this, _stringOnWasmHeap), lengthBytes);
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
    _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, IN_PROGRESS.NOT_READY);
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
        address = OCREngine.getIDCardScanner(stringOnWasmHeap);
        destroyCallback = () => OCREngine.destroyIDCardScanner(address);
        break;
      case 'passport':
      case 'foreign-passport':
      case 'passport-ssa':
      case 'foreign-passport-ssa':
        address = OCREngine.getPassportScanner(stringOnWasmHeap);
        destroyCallback = () => OCREngine.destroyPassportScanner(address);
        break;
      case 'alien':
      case 'alien-ssa':
        address = OCREngine.getAlienScanner(stringOnWasmHeap);
        destroyCallback = () => OCREngine.destroyAlienScanner(address);
        break;
      case 'credit':
      case 'credit-ssa':
        address = OCREngine.getCreditScanner(stringOnWasmHeap);
        destroyCallback = () => OCREngine.destroyCreditScanner(address);
        break;
      default:
        throw new Error('Scanner does not exists');
    }
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
    _classPrivateFieldSet(this, _Buffer, OCREngine._malloc(_classPrivateFieldGet(this, _resolutionWidth) * _classPrivateFieldGet(this, _resolutionHeight) * 4));
  }
  if (!_classPrivateFieldGet(this, _resultBuffer)) {
    _classPrivateFieldSet(this, _resultBuffer, OCREngine._malloc(256));
  }
  return [_classPrivateFieldGet(this, _Buffer), _classPrivateFieldGet(this, _resultBuffer)];
}
function _getImageBase2(_x, _x2, _x3) {
  return _getImageBase3.apply(this, arguments);
}
function _getImageBase3() {
  _getImageBase3 = _asyncToGenerator(function* (address, maskMode, cropMode) {
    try {
      OCREngine.encodeJpgDetectedFrameImage(address, maskMode, cropMode);
      var jpgSize = OCREngine.getEncodedJpgSize();
      var jpgPointer = OCREngine.getEncodedJpgBuffer();
      var resultView = new Uint8Array(OCREngine.HEAP8.buffer, jpgPointer, jpgSize);
      var result = new Uint8Array(resultView);
      var blob = new Blob([result], {
        type: 'image/jpeg'
      });
      return yield _classPrivateMethodGet(this, _blobToBase, _blobToBase2).call(this, blob);
    } catch (e) {
      console.error('error:' + e);
      throw e;
    } finally {
      OCREngine.destroyEncodedJpg();
    }
  });
  return _getImageBase3.apply(this, arguments);
}
function _destroyBuffer2() {
  if (_classPrivateFieldGet(this, _Buffer)) {
    OCREngine._free(_classPrivateFieldGet(this, _Buffer));
    _classPrivateFieldSet(this, _Buffer, null);
  }
  if (_classPrivateFieldGet(this, _resultBuffer) !== null) {
    OCREngine._free(_classPrivateFieldGet(this, _resultBuffer));
    _classPrivateFieldSet(this, _resultBuffer, null);
  }
}
function _destroyPrevImage2() {
  if (_classPrivateFieldGet(this, _PrevImage) !== null) {
    OCREngine._free(_classPrivateFieldGet(this, _PrevImage));
    _classPrivateFieldSet(this, _PrevImage, null);
  }
}
function _destroyStringOnWasmHeap2() {
  if (_classPrivateFieldGet(this, _stringOnWasmHeap)) {
    OCREngine._free(_classPrivateFieldGet(this, _stringOnWasmHeap));
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
    if (!address || address < 0) {
      return false;
    }
    try {
      var [buffer] = _classPrivateMethodGet(this, _getBuffer, _getBuffer2).call(this);
      var [imgData] = yield _classPrivateMethodGet(this, _cropImageFromVideo, _cropImageFromVideo2).call(this);
      if (!!!imgData) {
        return;
      }
      OCREngine.HEAP8.set(imgData.data, buffer);
      var result = OCREngine.detect_idcard(buffer, _classPrivateFieldGet(this, _resolutionWidth), _classPrivateFieldGet(this, _resolutionHeight), address, 0);
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
          ocrResult = OCREngine.scanIDCard(address, resultBuffer);
          break;
        case 'passport':
        case 'foreign-passport':
        case 'passport-ssa':
        case 'foreign-passport-ssa':
          ocrResult = OCREngine.scanPassport(address, resultBuffer);
          break;
        case 'alien':
        case 'alien-ssa':
          ocrResult = OCREngine.scanAlien(address, resultBuffer);
          break;
        case 'credit':
        case 'credit-ssa':
          ocrResult = OCREngine.scanCredit(address, resultBuffer);
          break;
        default:
          throw new Error('Scanner does not exists');
      }
      if (ocrResult === null || ocrResult === '' || ocrResult === 'false' || ocrResult[0] === 'false') {
        return [false, null, null, null];
      } else {
        if (ssaMode) {
          if (ocrType.indexOf("-ssa") > -1) {
            ssaResult = OCREngine.scanTruth(address, resultBuffer);
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
  var _this3 = this;
  _classPrivateMethodGet(this, _clearCameraPermissionTimeoutTimer, _clearCameraPermissionTimeoutTimer2).call(this);
  _classPrivateFieldSet(this, _cameraPermissionTimeoutTimer, setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
    // 1초 delay 후 실행
    yield _classPrivateMethodGet(_this3, _proceedCameraPermission, _proceedCameraPermission2).call(_this3);
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
        _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, IN_PROGRESS.READY);
        video.webkitExitFullscreen();
      } else {
        _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, IN_PROGRESS.NOT_READY);
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
        _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, IN_PROGRESS.NOT_READY);
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
function _checkUIOrientation2() {
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
    preventToFreezeVideo
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
  _classPrivateFieldSet(this, _ocr, ocr);
  _classPrivateFieldSet(this, _canvas, canvas);
  _classPrivateFieldSet(this, _rotationCanvas, rotationCanvas);
  _classPrivateFieldSet(this, _video, video);
  _classPrivateFieldSet(this, _videoWrap, videoWrap);
  _classPrivateFieldSet(this, _guideBox, guideBox);
  _classPrivateFieldSet(this, _guideBoxWrap, guideBoxWrap);
  _classPrivateFieldSet(this, _maskBoxWrap, maskBoxWrap);
  _classPrivateFieldSet(this, _preventToFreezeVideo, preventToFreezeVideo);
  return {
    ocr,
    canvas,
    rotationCanvas,
    video,
    videoWrap,
    guideBox,
    guideBoxWrap,
    maskBoxWrap,
    preventToFreezeVideo
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
    _classPrivateMethodGet(this, _checkUIOrientation, _checkUIOrientation2).call(this);
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
  var {
    ocr,
    video,
    canvas,
    guideBox,
    videoWrap,
    maskBoxWrap
  } = detector.getOCRElements();
  console.debug('adjustStyle');
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
  if (_classPrivateFieldGet(this, _isRotated90or)) {
    [calcVideoWidth, calcVideoHeight] = [calcVideoHeight, calcVideoWidth];
    [calcVideoClientWidth, calcVideoClientHeight] = [calcVideoClientHeight, calcVideoClientWidth];
    calcVideoOrientation = _classPrivateFieldGet(this, _videoOrientation) === 'portrait' ? 'landscape' : 'portrait';
  }
  if (_classPrivateFieldGet(this, _uiOrientation) === 'portrait') {
    // 세로 UI
    // video 가로 기준 100% 유지 (변경없음)
    if (calcVideoOrientation === _classPrivateFieldGet(this, _uiOrientation)) {
      // 카메라도 세로
      /// 세로 UI && 세로 카메라
      // 가로 기준으로 가이드박스 계산
      var guideBoxRatioByWidth = 0.8;
      guideBoxWidth = calcOcrClientWidth * guideBoxRatioByWidth;
      guideBoxHeight = guideBoxWidth * scannerFrameRatio;

      // 가이드 박스 가로 기준으로 카메라 확대
      newVideoWidth = guideBoxWidth;
      newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
      if (_classPrivateFieldGet(this, _isRotated90or)) {
        [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
      }
    } else {
      // 카메라는 가로
      // 가이드 박스를 세로 길이에 맞춤
      guideBoxHeight = calcVideoClientHeight;
      guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;
    }
  } else {
    // 가로 UI
    if (calcVideoOrientation === _classPrivateFieldGet(this, _uiOrientation)) {
      // 가로 UI && 가로 카메라
      // 비디오를 height 기준으로 줄이고
      var videoRatioByHeight = 0.6; // 0.6~0.3
      newVideoHeight = calcOcrClientHeight * videoRatioByHeight;
      // height 기준으로 width 계산
      newVideoWidth = newVideoHeight * (calcVideoWidth / calcVideoHeight);

      // 가이드박스는 비디오를 세로 기준으로 맞춤
      guideBoxHeight = newVideoHeight;
      guideBoxWidth = guideBoxHeight * baseWidth / baseHeight;
    } else {
      // 가로 UI && 세로 카메라
      // 가로 기준으로 가이드박스 계산
      var _guideBoxRatioByWidth = 0.8;
      guideBoxWidth = calcOcrClientWidth * _guideBoxRatioByWidth;
      guideBoxHeight = guideBoxWidth * scannerFrameRatio;

      // 가이드 박스 가로 기준으로 카메라 확대
      newVideoWidth = guideBoxWidth;
      newVideoHeight = newVideoWidth * (calcVideoHeight / calcVideoWidth);
      if (_classPrivateFieldGet(this, _isRotated90or)) {
        [newVideoWidth, newVideoHeight] = [newVideoHeight, newVideoWidth];
      }
    }
  }
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, video, {
    width: newVideoWidth + 'px',
    height: newVideoHeight + 'px'
  });

  // 신규
  _classPrivateMethodGet(this, _setStyle, _setStyle2).call(this, guideBox, {
    width: guideBoxWidth + 'px',
    height: guideBoxHeight + 'px',
    backgroundColor: 'transparent'
  });
  var maskBoxInner = maskBoxWrap.querySelector("#maskBoxInner");
  var borderWidth = Number(_classPrivateFieldGet(this, _options).frameBorderStyle.width);
  var borderRadius = Number(_classPrivateFieldGet(this, _options).frameBorderStyle.radius);
  if (guideBoxWidth && guideBoxWidth && borderRadius && borderWidth) {
    maskBoxInner.setAttribute('width', guideBoxWidth + '');
    maskBoxInner.setAttribute('height', guideBoxHeight + '');
    maskBoxInner.setAttribute('x', guideBoxWidth / 2 * -1 + '');
    maskBoxInner.setAttribute('y', guideBoxHeight / 2 * -1 + '');
    maskBoxInner.setAttribute('rx', borderRadius + borderWidth * -1 + '');
    maskBoxInner.setAttribute('ry', borderRadius + borderWidth * -1 + '');
  }
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
    if (_classPrivateFieldGet(this, _resourcesLoaded)) return;
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
    OCREngine = yield eval(src);
    // console.log('loadResources :: ', Module)
    _classPrivateFieldSet(this, _resourcesLoaded, true);
  });
  return _loadResources3.apply(this, arguments);
}
function _startScanImpl2() {
  var _this4 = this;
  return new Promise((resolve, reject) => {
    _classPrivateFieldSet(this, _intervalLock, false);
    var detected = false;
    var address = 0;
    _classPrivateFieldSet(this, _intervalTimer, setInterval( /*#__PURE__*/_asyncToGenerator(function* () {
      try {
        if (_classPrivateFieldGet(_this4, _intervalLock) === true) {
          return;
        } else {
          _classPrivateFieldSet(_this4, _intervalLock, true);
        }

        // this.#changeStage(IN_PROGRESS.READY);
        if (!OCREngine['asm']) return;

        // TODO : 설정할수 있게 변경 default 값도 제공
        var [resolution_w, resolution_h] = [_classPrivateFieldGet(_this4, _resolutionWidth), _classPrivateFieldGet(_this4, _resolutionHeight)];
        var {
          video
        } = detector.getOCRElements();
        if (resolution_w === 0 || resolution_h === 0) return;
        if (detected) {
          yield _classPrivateMethodGet(_this4, _sleep, _sleep2).call(_this4, 100);
          return;
        }
        // console.log('address before ---------', address);
        if (address === 0 && _classPrivateMethodGet(_this4, _isVideoResolutionCompatible, _isVideoResolutionCompatible2).call(_this4, video)) {
          [address, _classPrivateFieldDestructureSet(_this4, _destroyScannerCallback).value] = _classPrivateMethodGet(_this4, _getScannerAddress, _getScannerAddress2).call(_this4, _classPrivateFieldGet(_this4, _ocrType));
        }
        if (!address) {
          yield _classPrivateMethodGet(_this4, _sleep, _sleep2).call(_this4, 100);
          return;
        }
        // console.log('address after ---------', address);

        // card not detected
        if (!(yield _classPrivateMethodGet(_this4, _isCardboxDetected, _isCardboxDetected2).call(_this4, address))) {
          _classPrivateMethodGet(_this4, _changeStage, _changeStage2).call(_this4, IN_PROGRESS.READY);
          return;
        } else {
          _classPrivateMethodGet(_this4, _changeStage, _changeStage2).call(_this4, IN_PROGRESS.CARD_DETECT);
        }
        if (_classPrivateFieldGet(_this4, _inProgressStep) === IN_PROGRESS.CARD_DETECT) {
          // fallback case 인듯
          // success case
          // if (result !== 'false') {
          //   const PrevImage = getPrevImage();
          //   Module.HEAP8.set(imgData.data, PrevImage);
          // }

          var [ocrResult, imgDataUrl, maskImage, ssaResult] = yield _classPrivateMethodGet(_this4, _startRecognition, _startRecognition2).call(_this4, address, _classPrivateFieldGet(_this4, _ocrType), _classPrivateFieldGet(_this4, _ssaMode));
          // success case
          if (ocrResult !== false) {
            if (_classPrivateFieldGet(_this4, _ssaMode)) {
              console.log("!!! ssaRetryCount : " + _classPrivateFieldGet(_this4, _ssaRetryCount) + " !!!");
              if (ssaResult === null) {
                console.log("[WARN] SSA MODE is true. but, ssaResult is null");
                return;
              }
              if (ssaResult === "FAKE") {
                if (_classPrivateFieldGet(_this4, _ssaRetryCount) < _classPrivateFieldGet(_this4, _options).ssaMaxRetryCount) {
                  var _this$ssaRetryCount, _this$ssaRetryCount2;
                  console.log("!!! [RETRY++] FAKE, but retry count is not exceed : " + _classPrivateFieldGet(_this4, _ssaRetryCount) + " !!!");
                  _classPrivateFieldSet(_this4, _ssaRetryCount, (_this$ssaRetryCount = _classPrivateFieldGet(_this4, _ssaRetryCount), _this$ssaRetryCount2 = _this$ssaRetryCount++, _this$ssaRetryCount)), _this$ssaRetryCount2;
                  return;
                } else {
                  console.log("!!! [MAX RETRY EXCEED] FAKE, and retry count is exceed : " + _classPrivateFieldGet(_this4, _ssaRetryCount) + " !!!");
                }
              }
            }
            console.log("result : ".concat(ocrResult));
            _classPrivateMethodGet(_this4, _onSuccessProcess, _onSuccessProcess2).call(_this4, {
              ocr_type: _classPrivateFieldGet(_this4, _ocrType),
              ocr_data: parser.parseOcrResult(_classPrivateFieldGet(_this4, _ocrType), _classPrivateFieldGet(_this4, _ssaMode), ocrResult, ssaResult, _classPrivateFieldGet(_this4, _ssaRetryCount)),
              ocr_origin_image: imgDataUrl,
              ocr_masking_image: maskImage
            });
            _classPrivateMethodGet(_this4, _clearIntervalTimers, _clearIntervalTimers2).call(_this4); // for performance
            _classPrivateMethodGet(_this4, _closeCamera, _closeCamera2).call(_this4);
            detected = true;
            resolve();
          }
        }
      } catch (e) {
        var message = 'Card detection error : ' + e;
        if (e.toString().includes('memory')) {
          console.debug(message);
          yield _classPrivateMethodGet(_this4, _recoveryScan, _recoveryScan2).call(_this4);
        } else {
          var errorMessage = 'Card detection error';
          console.error(errorMessage);
          console.error(e);
          _classPrivateMethodGet(_this4, _onFailureProcess, _onFailureProcess2).call(_this4, "E580", e, errorMessage);
          reject();
        }
      } finally {
        _classPrivateFieldSet(_this4, _intervalLock, false);
      }
    }), 1));
  });
}
function _onSuccessProcess2(review_result) {
  // 인식 성공 스캔 루프 종료
  _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, IN_PROGRESS.OCR_SUCCESS);
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
  _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, IN_PROGRESS.OCR_FAILED);
  var error_detail = "";
  if (e !== null && e !== void 0 && e.toString()) error_detail += e.toString();
  if (e !== null && e !== void 0 && e.stack) error_detail += e.stack;
  var result = {
    api_response: {
      "result_code": resultCode,
      "result_message": errorMessage
    },
    result: "failed",
    review_result: {
      ocr_type: _classPrivateFieldGet(this, _ocrType),
      error_detail: error_detail
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
    yield _classPrivateMethodGet(this, _loadResources, _loadResources2).call(this);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJPQ1JFbmdpbmUiLCJpbnN0YW5jZSIsIklOX1BST0dSRVNTIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVCIsIk9DUl9SRUNPR05JWkUiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9GQUlMRUQiLCJfbGljZW5zZSIsIldlYWtNYXAiLCJfb2NyVHlwZSIsIl9zc2FNb2RlIiwiX3NzYVJldHJ5Q291bnQiLCJfb25TdWNjZXNzIiwiX29uRmFpbHVyZSIsIl9vY3JUeXBlTGlzdCIsIl9vY3IiLCJfY2FudmFzIiwiX3JvdGF0aW9uQ2FudmFzIiwiX3ZpZGVvIiwiX3ZpZGVvV3JhcCIsIl9ndWlkZUJveCIsIl9ndWlkZUJveFdyYXAiLCJfbWFza0JveFdyYXAiLCJfcHJldmVudFRvRnJlZXplVmlkZW8iLCJfQnVmZmVyIiwiX3Jlc3VsdEJ1ZmZlciIsIl9QcmV2SW1hZ2UiLCJfc3RyaW5nT25XYXNtSGVhcCIsIl9jYW1TZXRDb21wbGV0ZSIsIl9yZXNvbHV0aW9uV2lkdGgiLCJfcmVzb2x1dGlvbkhlaWdodCIsIl92aWRlb1dpZHRoIiwiX3ZpZGVvSGVpZ2h0IiwiX3Jlc291cmNlc0xvYWRlZCIsIl9pbnRlcnZhbFRpbWVyIiwiX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQiLCJfc3RyZWFtIiwiX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2siLCJfZmFjaW5nTW9kZUNvbnN0cmFpbnQiLCJfdWlPcmllbnRhdGlvbiIsIl9wcmV2VWlPcmllbnRhdGlvbiIsIl92aWRlb09yaWVudGF0aW9uIiwiX3Rocm90dGxpbmdSZXNpemVUaW1lciIsIl90aHJvdHRsaW5nUmVzaXplRGVsYXkiLCJfbWF4UmV0cnlDb3VudEdldEFkZHJlc3MiLCJfcmV0cnlDb3VudEdldEFkZHJlc3MiLCJfZGV2aWNlSW5mbyIsIl9pc1JvdGF0ZWQ5MG9yIiwiX2luUHJvZ3Jlc3NTdGVwIiwiX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9pbnRlcnZhbExvY2siLCJfb3B0aW9ucyIsIl93aW5kb3dFdmVudEJpbmQiLCJXZWFrU2V0IiwiX3NsZWVwIiwiX2Jsb2JUb0Jhc2UiLCJfZ2V0U3RyaW5nT25XYXNtSGVhcCIsIl9zZXRWaWRlb1Jlc29sdXRpb24iLCJfZ2V0U2Nhbm5lckFkZHJlc3MiLCJfZ2V0QnVmZmVyIiwiX2dldEltYWdlQmFzZSIsIl9kZXN0cm95QnVmZmVyIiwiX2Rlc3Ryb3lQcmV2SW1hZ2UiLCJfZGVzdHJveVN0cmluZ09uV2FzbUhlYXAiLCJfZGVzdHJveVNjYW5uZXJBZGRyZXNzIiwiX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSIsIl9nZXRSb3RhdGlvbkRlZ3JlZSIsIl9nZXRNaXJyb3JNb2RlIiwiX2Nyb3BJbWFnZUZyb21WaWRlbyIsIl9yb3RhdGUiLCJfaXNDYXJkYm94RGV0ZWN0ZWQiLCJfc3RhcnRSZWNvZ25pdGlvbiIsIl9zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIiwiX3NldFN0eWxlIiwiX2NoYW5nZVN0YWdlIiwiX2dldElucHV0RGV2aWNlcyIsIl9jaGVja1VJT3JpZW50YXRpb24iLCJfc2V0dXBEb21FbGVtZW50cyIsIl9zZXR1cFZpZGVvIiwiX2FkanVzdFN0eWxlIiwiX2Nsb3NlQ2FtZXJhIiwiX2xvYWRSZXNvdXJjZXMiLCJfc3RhcnRTY2FuSW1wbCIsIl9vblN1Y2Nlc3NQcm9jZXNzIiwiX29uRmFpbHVyZVByb2Nlc3MiLCJfc3RhcnRTY2FuIiwiX3JlY292ZXJ5U2NhbiIsIl9jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfY2xlYXJJbnRlcnZhbFRpbWVycyIsIlVzZUJPQ1IiLCJjb25zdHJ1Y3RvciIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsImZyYW1lQm9yZGVyU3R5bGUiLCJ3aWR0aCIsInN0eWxlIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RpbmciLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJtYXNrX2ZyYW1lIiwiY2xpcF9mcmFtZSIsInJlc291cmNlQmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRldmljZUxhYmVsIiwidmlkZW9UYXJnZXRJZCIsInJvdGF0aW9uRGVncmVlIiwibWlycm9yTW9kZSIsInNzYU1heFJldHJ5Q291bnQiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJfIiwibWVyZ2UiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJpbml0aWFsaXplZCIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZXQiLCJfd2luZG93RXZlbnRCaW5kMiIsImNhbGwiLCJnZXRPc1ZlcnNpb24iLCJjb25zb2xlIiwiZGVidWciLCJvc1NpbXBsZSIsInN0YXJ0T0NSIiwidHlwZSIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpbmRleE9mIiwiX3N0YXJ0U2NhbjIiLCJlIiwiZXJyb3IiLCJjbGVhbnVwIiwiX2Nsb3NlQ2FtZXJhMiIsInN0b3BTY2FuIiwiX2NsZWFySW50ZXJ2YWxUaW1lcnMyIiwiY2FudmFzIiwiZ2V0T0NSRWxlbWVudHMiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpbGxSZWFkRnJlcXVlbnRseSIsImNsZWFyUmVjdCIsImhlaWdodCIsInN0b3BTdHJlYW0iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0b3AiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJsZW5ndGgiLCJmb3JFYWNoIiwidHJhY2siLCJfZGVzdHJveVNjYW5uZXJBZGRyZXNzMiIsIl9kZXN0cm95QnVmZmVyMiIsIl9kZXN0cm95UHJldkltYWdlMiIsIl9kZXN0cm95U3RyaW5nT25XYXNtSGVhcDIiLCJfdGhpczIiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiaGFuZGxlUmVzaXplIiwiX3JlZiIsImxvZyIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0VGltZW91dCIsIl9zbGVlcDIiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2Jsb2JUb0Jhc2UyIiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX2dldFN0cmluZ09uV2FzbUhlYXAyIiwibGVuZ3RoQnl0ZXMiLCJsZW5ndGhCeXRlc1VURjgiLCJfbWFsbG9jIiwic3RyaW5nVG9VVEY4IiwiX3NldFZpZGVvUmVzb2x1dGlvbjIiLCJ2aWRlb0VsZW1lbnQiLCJpc1N1cHBvcnRlZFJlc29sdXRpb24iLCJyZXNvbHV0aW9uVGV4dCIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsIl9jaGFuZ2VTdGFnZTIiLCJzcmNPYmplY3QiLCJfZ2V0U2Nhbm5lckFkZHJlc3MyIiwib2NyVHlwZSIsImluY2x1ZGVzIiwiYWRkcmVzcyIsImRlc3Ryb3lDYWxsYmFjayIsInN0cmluZ09uV2FzbUhlYXAiLCJnZXRJRENhcmRTY2FubmVyIiwiZGVzdHJveUlEQ2FyZFNjYW5uZXIiLCJnZXRQYXNzcG9ydFNjYW5uZXIiLCJkZXN0cm95UGFzc3BvcnRTY2FubmVyIiwiZ2V0QWxpZW5TY2FubmVyIiwiZGVzdHJveUFsaWVuU2Nhbm5lciIsImdldENyZWRpdFNjYW5uZXIiLCJkZXN0cm95Q3JlZGl0U2Nhbm5lciIsIl90aGlzJHJldHJ5Q291bnRHZXRBZCIsIl90aGlzJHJldHJ5Q291bnRHZXRBZDIiLCJfZ2V0QnVmZmVyMiIsIl9nZXRJbWFnZUJhc2UyIiwiX3giLCJfeDIiLCJfeDMiLCJfZ2V0SW1hZ2VCYXNlMyIsIm1hc2tNb2RlIiwiY3JvcE1vZGUiLCJlbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UiLCJqcGdTaXplIiwiZ2V0RW5jb2RlZEpwZ1NpemUiLCJqcGdQb2ludGVyIiwiZ2V0RW5jb2RlZEpwZ0J1ZmZlciIsInJlc3VsdFZpZXciLCJVaW50OEFycmF5IiwiSEVBUDgiLCJidWZmZXIiLCJCbG9iIiwiZGVzdHJveUVuY29kZWRKcGciLCJfZnJlZSIsIl9pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUyIiwiX2dldFJvdGF0aW9uRGVncmVlMiIsIl9nZXRNaXJyb3JNb2RlMiIsIl9jcm9wSW1hZ2VGcm9tVmlkZW8yIiwiX2Nyb3BJbWFnZUZyb21WaWRlbzMiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwicm90YXRpb25DYW52YXMiLCJndWlkZUJveCIsImNhbGNDYW52YXMiLCJjYWxjVmlkZW9XaWR0aCIsImNhbGNWaWRlb0hlaWdodCIsImNhbGNWaWRlb0NsaWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYWxjVmlkZW9DbGllbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCIsImNhbGNHdWlkZUJveENsaWVudEhlaWdodCIsImNhbGNWaWRlb09yaWVudGF0aW9uIiwiY2FsY01heFNXaWR0aCIsImNhbGNNYXhTSGVpZ2h0Iiwic3giLCJzeSIsInJhdGlvIiwic1dpZHRoIiwiTWF0aCIsIm1pbiIsInJvdW5kIiwic0hlaWdodCIsImNhbGNDb250ZXh0IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsImltZ0RhdGFVcmwiLCJ0b0RhdGFVUkwiLCJfcm90YXRlMiIsIl94NCIsIl94NSIsIl94NiIsIl9yb3RhdGUzIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9pc0NhcmRib3hEZXRlY3RlZDIiLCJfeDciLCJfaXNDYXJkYm94RGV0ZWN0ZWQzIiwic2V0IiwiZGF0YSIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfc3RhcnRSZWNvZ25pdGlvbjIiLCJfeDgiLCJfeDkiLCJfeDEwIiwiX3N0YXJ0UmVjb2duaXRpb24zIiwic3NhTW9kZSIsIm9jclJlc3VsdCIsInNzYVJlc3VsdCIsInJlc3VsdEJ1ZmZlciIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0Iiwic2NhblRydXRoIiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJfc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjIiLCJfdGhpczMiLCJfY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyMiIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbjIiLCJfcHJvY2VlZENhbWVyYVBlcm1pc3Npb24zIiwiaXNQYXNzcG9ydCIsIl9zZXR1cFZpZGVvMiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfYWRqdXN0U3R5bGUyIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX29uRmFpbHVyZVByb2Nlc3MyIiwiX3NldFN0eWxlMiIsImVsIiwiT2JqZWN0IiwiYXNzaWduIiwidmFsIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiX2dldElucHV0RGV2aWNlczIiLCJfeDExIiwiX3gxMiIsIl9nZXRJbnB1dERldmljZXMzIiwia2luZCIsImxhYmVsIiwibWVkaWFEZXZpY2VzIiwiZGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ2aWRlb0RldmljZXMiLCJmaWx0ZXIiLCJkZXZpY2UiLCJjb25jYXQiLCJnZXRDYXBhYmlsaXRpZXMiLCJfY2FwJGZhY2luZ01vZGUiLCJjYXAiLCJmYWNpbmdNb2RlIiwiX2NoZWNrVUlPcmllbnRhdGlvbjIiLCJjdXJyZW50IiwiZ2V0VUlPcmllbnRhdGlvbiIsIm9jciIsImlzQ2hhbmdlZCIsIl9zZXR1cERvbUVsZW1lbnRzMiIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsIm1hc2tCb3hXcmFwIiwicHJldmVudFRvRnJlZXplVmlkZW8iLCJyZW1vdmUiLCJvY3JTdHlsZSIsIndyYXBTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNldEF0dHJpYnV0ZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwidmlkZW9TdHlsZSIsInJvdGF0ZUNzcyIsIm1pcnJvckNzcyIsInJvdGF0ZUFuZE1pcnJvckNzcyIsIl9vYmplY3RTcHJlYWQiLCJjYW52YXNTdHlsZSIsImJvcmRlciIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiX3gxMyIsIl9zZXR1cFZpZGVvMyIsImRldmljZUlkTGlzdCIsIm1hcCIsImRldmljZUlkIiwiY29uc3RyYWludFdpZHRoIiwiY29uc3RyYWludEhlaWdodCIsImlkZWFsIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInpvb20iLCJmb2N1c01vZGUiLCJ3aGl0ZUJhbGFuY2VNb2RlIiwic3RyZWFtIiwiZ2V0VXNlck1lZGlhIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwibmV3VmlkZW9XaWR0aCIsIm5ld1ZpZGVvSGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwidmlkZW9SYXRpb0J5SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFza0JveElubmVyIiwicXVlcnlTZWxlY3RvciIsIk51bWJlciIsIl9sb2FkUmVzb3VyY2VzMiIsIl9sb2FkUmVzb3VyY2VzMyIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsInRleHQiLCJyZWdleCIsInNvdXJjZSIsInJlcGxhY2UiLCJldmFsIiwiX3N0YXJ0U2NhbkltcGwyIiwiX3RoaXM0IiwicmVqZWN0IiwiZGV0ZWN0ZWQiLCJzZXRJbnRlcnZhbCIsInJlc29sdXRpb25fdyIsInJlc29sdXRpb25faCIsIl9jbGFzc1ByaXZhdGVGaWVsZERlc3RydWN0dXJlU2V0IiwiX3RoaXMkc3NhUmV0cnlDb3VudCIsIl90aGlzJHNzYVJldHJ5Q291bnQyIiwiX29uU3VjY2Vzc1Byb2Nlc3MyIiwib2NyX3R5cGUiLCJvY3JfZGF0YSIsInBhcnNlT2NyUmVzdWx0Iiwib2NyX29yaWdpbl9pbWFnZSIsIm9jcl9tYXNraW5nX2ltYWdlIiwiX3JlY292ZXJ5U2NhbjIiLCJyZXZpZXdfcmVzdWx0IiwiYXBpX3Jlc3BvbnNlIiwicmVzdWx0Q29kZSIsImVycm9yX2RldGFpbCIsInN0YWNrIiwiX3N0YXJ0U2NhbjMiLCJfcmVjb3ZlcnlTY2FuMyIsImNsZWFyVGltZW91dCIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlcyI6WyJvY3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgcGFyc2VyIGZyb20gJy4vaGVscGVycy9wYXJzZXIuanMnO1xuXG5sZXQgT0NSRW5naW5lO1xubGV0IGluc3RhbmNlO1xuXG5jb25zdCBJTl9QUk9HUkVTUyA9IHtcbiAgTk9UX1JFQURZOiAnbm90X3JlYWR5JyxcbiAgUkVBRFk6ICdyZWFkeScsXG4gIENBUkRfREVURUNUOiAnZGV0ZWN0aW5nJyxcbiAgT0NSX1JFQ09HTklaRTogJ3JlY29nbml6aW5nJyxcbiAgT0NSX1NVQ0NFU1M6ICdkZXRlY3Rfc3VjY2VzcycsXG4gIE9DUl9GQUlMRUQ6ICdkZXRlY3RfZmFpbGVkJyxcbn1cblxuY2xhc3MgVXNlQk9DUiB7XG4gIC8qKiBwdWJsaWMgcHJvcGVydGllcyAqL1xuICBpbml0aWFsaXplZCA9IGZhbHNlO1xuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICNsaWNlbnNlO1xuICAjb2NyVHlwZSA9IG51bGw7XG4gICNzc2FNb2RlID0gZmFsc2U7XG4gICNzc2FSZXRyeUNvdW50ID0gMDtcbiAgI29uU3VjY2VzcyA9IG51bGw7XG4gICNvbkZhaWx1cmUgPSBudWxsO1xuICAjb2NyVHlwZUxpc3QgPSBbXG4gICAgJ2lkY2FyZCcsXG4gICAgJ2RyaXZlcicsXG4gICAgJ3Bhc3Nwb3J0JyxcbiAgICAnZm9yZWlnbi1wYXNzcG9ydCcsXG4gICAgJ2FsaWVuJyxcbiAgICAnY3JlZGl0JyxcbiAgICAnaWRjYXJkLXNzYScsXG4gICAgJ2RyaXZlci1zc2EnLFxuICAgICdwYXNzcG9ydC1zc2EnLFxuICAgICdmb3JlaWduLXBhc3Nwb3J0LXNzYScsXG4gICAgJ2FsaWVuLXNzYScsXG4gICAgJ2NyZWRpdC1zc2EnLFxuICBdO1xuICAjb2NyO1xuICAjY2FudmFzO1xuICAjcm90YXRpb25DYW52YXM7XG4gICN2aWRlbztcbiAgI3ZpZGVvV3JhcDtcbiAgI2d1aWRlQm94O1xuICAjZ3VpZGVCb3hXcmFwO1xuICAjbWFza0JveFdyYXA7XG4gICNwcmV2ZW50VG9GcmVlemVWaWRlbztcbiAgI0J1ZmZlciA9IG51bGw7XG4gICNyZXN1bHRCdWZmZXIgPSBudWxsO1xuICAjUHJldkltYWdlID0gbnVsbDtcbiAgI3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAjY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgI3Jlc29sdXRpb25XaWR0aCA9IDA7XG4gICNyZXNvbHV0aW9uSGVpZ2h0ID0gMDtcbiAgI3ZpZGVvV2lkdGggPSAwO1xuICAjdmlkZW9IZWlnaHQgPSAwO1xuICAjcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICNpbnRlcnZhbFRpbWVyO1xuICAjY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjtcbiAgI3JlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuICAjc3RyZWFtO1xuICAjZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICNmYWNpbmdNb2RlQ29uc3RyYWludCA9ICdlbnZpcm9ubWVudCc7XG4gICN1aU9yaWVudGF0aW9uID0gJyc7XG4gICNwcmV2VWlPcmllbnRhdGlvbiA9ICcnO1xuICAjdmlkZW9PcmllbnRhdGlvbiA9ICcnO1xuICAjdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgI3Rocm90dGxpbmdSZXNpemVEZWxheSA9IDUwMDtcbiAgI21heFJldHJ5Q291bnRHZXRBZGRyZXNzID0gMzAwOyAgICAgICAvLyDsnoTsi5xcbiAgI3JldHJ5Q291bnRHZXRBZGRyZXNzID0gMDsgICAgICAgICAgICAvLyDsnoTsi5xcbiAgI2RldmljZUluZm87XG4gICNpc1JvdGF0ZWQ5MG9yMjcwID0gZmFsc2U7XG4gICNpblByb2dyZXNzU3RlcCA9IElOX1BST0dSRVNTLk5PVF9SRUFEWTtcbiAgI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICAjaW50ZXJ2YWxMb2NrID0gZmFsc2U7XG5cbiAgLyoqIERlZmF1bHQgb3B0aW9ucyAqL1xuICAjb3B0aW9ucyA9IHtcbiAgICBzaG93Q2xpcEZyYW1lOiBmYWxzZSxcbiAgICBzaG93Q2FudmFzUHJldmlldzogZmFsc2UsXG4gICAgZnJhbWVCb3JkZXJTdHlsZToge1xuICAgICAgd2lkdGg6IDEwLFxuICAgICAgc3R5bGU6ICdzb2xpZCcsXG4gICAgICByYWRpdXM6IDIwLFxuICAgICAgbm90X3JlYWR5OiAnIzAwMDAwMCcsIC8vIOqygOyglVxuICAgICAgcmVhZHk6ICcjYjhiOGI4JywgLy8g7ZqM7IOJXG4gICAgICBkZXRlY3Rpbmc6ICcjZmY5NTFjJywgLy8g7KO87ZmpXG4gICAgICBkZXRlY3RfZmFpbGVkOiAnI0ZBMTEzRCcsIC8vIOu5qOqwlVxuICAgICAgZGV0ZWN0X3N1Y2Nlc3M6ICcjNWNiODVjJywgLy8g7LSI66GdXG4gICAgICBtYXNrX2ZyYW1lOiAnIzIwMjAyMycsICAgICAgLy8g64uk7YGs6re466CI7J20ICjtiKzrqoXrj4TripQg7IiY7KCV67aI6rCAIGZm66GcIOqzoOyglSlcbiAgICAgIGNsaXBfZnJhbWU6ICcjZmYwMGJmJywgICAgICAvLyDrlKXtjbztlIwgKOyImOygleu2iOqwgClcbiAgICB9LFxuICAgIHJlc291cmNlQmFzZVVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgZGV2aWNlTGFiZWw6ICcnLFxuICAgIHZpZGVvVGFyZ2V0SWQ6ICcnLFxuICAgIHJvdGF0aW9uRGVncmVlOiAwLFxuICAgIG1pcnJvck1vZGU6IGZhbHNlLFxuICAgIHNzYU1heFJldHJ5Q291bnQ6IDAsXG4gIH07XG5cbiAgLyoqIGNvbnN0cnVjdG9yICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKiogcHVibGljIG1ldGhvZHMgKi9cbiAgaW5pdChzZXR0aW5ncykge1xuICAgIGlmICghISFzZXR0aW5ncy5saWNlbnNlS2V5KSB0aHJvdyBuZXcgRXJyb3IoJ0xpY2Vuc2Uga2V5IGlzIGVtcHR5Jyk7XG5cbiAgICB0aGlzLiNsaWNlbnNlID0gc2V0dGluZ3MubGljZW5zZUtleTtcblxuICAgIHRoaXMuI29wdGlvbnMgPSBfLm1lcmdlKHt9LCB0aGlzLiNvcHRpb25zLCBzZXR0aW5ncyk7XG5cbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuI3dpbmRvd0V2ZW50QmluZCgpO1xuICAgICAgdGhpcy4jZGV2aWNlSW5mbyA9IGRldGVjdG9yLmdldE9zVmVyc2lvbigpO1xuICAgICAgY29uc29sZS5kZWJ1ZygndGhpcy4jZGV2aWNlSW5mby5vc1NpbXBsZSA6OiAnICsgdGhpcy4jZGV2aWNlSW5mby5vc1NpbXBsZSk7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzdGFydE9DUih0eXBlLCBvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuICAgIGlmICghISF0eXBlIHx8ICEhIW9uU3VjY2VzcyB8fCAhISFvbkZhaWx1cmUpIHtcbiAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jb2NyVHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLiNzc2FNb2RlID0gKHRoaXMuI29jclR5cGUuaW5kZXhPZignLXNzYScpID4gLTEpO1xuICAgICAgdGhpcy4jb25TdWNjZXNzID0gb25TdWNjZXNzO1xuICAgICAgdGhpcy4jb25GYWlsdXJlID0gb25GYWlsdXJlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW5pdGlhbGl6ZWQhJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuI3N0YXJ0U2NhbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGluIHN0YXJ0T0NSKCkgOiAnICsgZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICAgIHRoaXMuI29uU3VjY2VzcyA9IG51bGw7XG4gICAgICB0aGlzLiNvbkZhaWx1cmUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgI3dpbmRvd0V2ZW50QmluZCgpIHtcbiAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuXG4gICAgaWYgKC9pcGhvbmV8aXBvZHxpcGFkLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBjb25zdCBza2lwVG91Y2hBY3Rpb25mb3Jab29tID0gKGV2KSA9PiB7XG4gICAgICAgIGlmIChldi50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICBza2lwVG91Y2hBY3Rpb25mb3Jab29tLFxuICAgICAgICB7IHBhc3NpdmU6IGZhbHNlIH1cbiAgICAgICk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgIHNraXBUb3VjaEFjdGlvbmZvclpvb20sXG4gICAgICAgIHsgcGFzc2l2ZTogZmFsc2UgfVxuICAgICAgKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAndG91Y2hlbmQnLFxuICAgICAgICBza2lwVG91Y2hBY3Rpb25mb3Jab29tLFxuICAgICAgICB7IHBhc3NpdmU6IGZhbHNlIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXNfLmNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIV90aGlzXy4jaXNJblByb2dyZXNzSGFuZGxlUmVzaXplKSB7XG4gICAgICAgIF90aGlzXy4jaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gdHJ1ZTtcbiAgICAgICAgX3RoaXNfLiN0aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICAgICAgICBjb25zb2xlLmxvZygnISEhIFJFU0laRSBFVkVOVCAhISEnKTtcbiAgICAgICAgaWYgKCEhIV90aGlzXy4jb2NyVHlwZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgICBfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBfdGhpc18uc3RhcnRPQ1IoX3RoaXNfLiNvY3JUeXBlLCB0aGlzLiNvblN1Y2Nlc3MsIHRoaXMuI29uRmFpbHVyZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnISEhIFNLSVAgUkVTSVpFIEVWRU5UIC0gcHJldmlvdXMgcmVzaXplIGV2ZW50IHByb2Nlc3MgaXMgbm90IGNvbXBsZXRlZCB5ZXQgISEhJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghISFfdGhpc18uI3Rocm90dGxpbmdSZXNpemVUaW1lcikge1xuICAgICAgICBfdGhpc18uI3Rocm90dGxpbmdSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlUmVzaXplLCBfdGhpc18uI3Rocm90dGxpbmdSZXNpemVEZWxheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgI3NsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cbiAgI2Jsb2JUb0Jhc2U2NChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICB9KTtcbiAgfVxuICAvKiog65287J207IS87IqkIO2CpOulvCBoZWFwIOyXkCBhbGxvY2F0aW9uICovXG4gICNnZXRTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICghISF0aGlzLiNsaWNlbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMaWNlbnNlIEtleSBpcyBlbXB0eVwiKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoQnl0ZXMgPSBPQ1JFbmdpbmUubGVuZ3RoQnl0ZXNVVEY4KHRoaXMuI2xpY2Vuc2UpICsgMTtcbiAgICB0aGlzLiNzdHJpbmdPbldhc21IZWFwID0gT0NSRW5naW5lLl9tYWxsb2MobGVuZ3RoQnl0ZXMpO1xuICAgIE9DUkVuZ2luZS5zdHJpbmdUb1VURjgodGhpcy4jbGljZW5zZSwgdGhpcy4jc3RyaW5nT25XYXNtSGVhcCwgbGVuZ3RoQnl0ZXMpO1xuICAgIHJldHVybiB0aGlzLiNzdHJpbmdPbldhc21IZWFwO1xuICB9XG4gICNzZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlO1xuICAgIGxldCByZXNvbHV0aW9uVGV4dCA9ICdub3QgcmVhZHknO1xuXG4gICAgaWYgKCF0aGlzLiNjYW1TZXRDb21wbGV0ZSkge1xuICAgICAgcmV0dXJuIHsgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLCByZXNvbHV0aW9uVGV4dCB9O1xuICAgIH1cblxuICAgIGlmICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDApIHtcbiAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICByZXR1cm4geyBpc1N1cHBvcnRlZFJlc29sdXRpb24sIHJlc29sdXRpb25UZXh0IH07XG4gICAgfVxuXG4gICAgcmVzb2x1dGlvblRleHQgPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCArICd4JyArIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcblxuICAgIGlmIChcbiAgICAgICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTA4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDE5MjApIHx8XG4gICAgICAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDE5MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMDgwKVxuICAgICkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMjgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gNzIwKSB8fFxuICAgICAgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSA3MjAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxMjgwKVxuICAgICkge1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW9FbGVtZW50LnNyY09iamVjdCA9IG51bGw7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSBmYWxzZVxuICAgIH1cbiAgICB0aGlzLiN2aWRlb1dpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgdGhpcy4jdmlkZW9IZWlnaHQgPSB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG4gICAgcmV0dXJuIHsgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLCByZXNvbHV0aW9uVGV4dCB9O1xuICB9XG4gICNnZXRTY2FubmVyQWRkcmVzcyhvY3JUeXBlKSB7XG4gICAgaWYgKCF0aGlzLiNvY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgYWRkcmVzcyA9IDA7XG4gICAgICBsZXQgZGVzdHJveUNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgY29uc3Qgc3RyaW5nT25XYXNtSGVhcCA9IHRoaXMuI2dldFN0cmluZ09uV2FzbUhlYXAoKTtcblxuICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgIC8vIE9DUlxuICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IE9DUkVuZ2luZS5nZXRJRENhcmRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IE9DUkVuZ2luZS5kZXN0cm95SURDYXJkU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSBPQ1JFbmdpbmUuZ2V0UGFzc3BvcnRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IE9DUkVuZ2luZS5kZXN0cm95UGFzc3BvcnRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IE9DUkVuZ2luZS5nZXRBbGllblNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gT0NSRW5naW5lLmRlc3Ryb3lBbGllblNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgIGNhc2UgJ2NyZWRpdC1zc2EnOlxuICAgICAgICAgIGFkZHJlc3MgPSBPQ1JFbmdpbmUuZ2V0Q3JlZGl0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiBPQ1JFbmdpbmUuZGVzdHJveUNyZWRpdFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWRkcmVzcyA9PT0gMCkge1xuICAgICAgICBpZiAodGhpcy4jbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPT09IHRoaXMuI3JldHJ5Q291bnRHZXRBZGRyZXNzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgTGljZW5zZSBLZXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jcmV0cnlDb3VudEdldEFkZHJlc3MrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYWRkcmVzcywgZGVzdHJveUNhbGxiYWNrXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPIDogTGljZW5zZSBJc3N1ZeyduCDqsr3smrAg7JeQ65+sIOqwkuydhCDrsJvslYTshJwgZXJyb3Ig66Gc6re466W8IOywjeydhCDsiJgg7J6I6rKMIOyalOyyre2VhOyalCAo7J6E7IucIE7rsogg7J207IOBIGFkZHJlc3Prpbwg66q767Cb7Jy866m0IOqwleygnCDsl5Drn6wpXG4gICAgICBjb25zb2xlLmVycm9yKCdnZXRTY2FubmVyQWRkcmVzc0Vycm9yKCknKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICAjZ2V0QnVmZmVyKCkge1xuICAgIGlmICghdGhpcy4jQnVmZmVyKSB7XG4gICAgICB0aGlzLiNCdWZmZXIgPSBPQ1JFbmdpbmUuX21hbGxvYyhcbiAgICAgICAgdGhpcy4jcmVzb2x1dGlvbldpZHRoICogdGhpcy4jcmVzb2x1dGlvbkhlaWdodCAqIDRcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghdGhpcy4jcmVzdWx0QnVmZmVyKSB7XG4gICAgICB0aGlzLiNyZXN1bHRCdWZmZXIgPSBPQ1JFbmdpbmUuX21hbGxvYygyNTYpO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXMuI0J1ZmZlciwgdGhpcy4jcmVzdWx0QnVmZmVyXTtcbiAgfVxuXG4gIGFzeW5jICNnZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpIHtcbiAgICB0cnkge1xuICAgICAgT0NSRW5naW5lLmVuY29kZUpwZ0RldGVjdGVkRnJhbWVJbWFnZShhZGRyZXNzLCBtYXNrTW9kZSwgY3JvcE1vZGUpO1xuXG4gICAgICBjb25zdCBqcGdTaXplID0gT0NSRW5naW5lLmdldEVuY29kZWRKcGdTaXplKCk7XG4gICAgICBjb25zdCBqcGdQb2ludGVyID0gT0NSRW5naW5lLmdldEVuY29kZWRKcGdCdWZmZXIoKTtcblxuICAgICAgY29uc3QgcmVzdWx0VmlldyA9IG5ldyBVaW50OEFycmF5KFxuICAgICAgICBPQ1JFbmdpbmUuSEVBUDguYnVmZmVyLFxuICAgICAgICBqcGdQb2ludGVyLFxuICAgICAgICBqcGdTaXplXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0Vmlldyk7XG5cbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzdWx0XSwgeyB0eXBlOiAnaW1hZ2UvanBlZycgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy4jYmxvYlRvQmFzZTY0KGJsb2IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIE9DUkVuZ2luZS5kZXN0cm95RW5jb2RlZEpwZygpO1xuICAgIH1cbiAgfVxuICAvKiogRnJlZSBidWZmZXIgKi9cbiAgI2Rlc3Ryb3lCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuI0J1ZmZlcikge1xuICAgICAgT0NSRW5naW5lLl9mcmVlKHRoaXMuI0J1ZmZlcik7XG4gICAgICB0aGlzLiNCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy4jcmVzdWx0QnVmZmVyICE9PSBudWxsKSB7XG4gICAgICBPQ1JFbmdpbmUuX2ZyZWUodGhpcy4jcmVzdWx0QnVmZmVyKTtcbiAgICAgIHRoaXMuI3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBGcmVlIFByZXZJbWFnZSBidWZmZXIgKi9cbiAgI2Rlc3Ryb3lQcmV2SW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuI1ByZXZJbWFnZSAhPT0gbnVsbCkge1xuICAgICAgT0NSRW5naW5lLl9mcmVlKHRoaXMuI1ByZXZJbWFnZSk7XG4gICAgICB0aGlzLiNQcmV2SW1hZ2UgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogZnJlZSBzdHJpbmcgaGVhcCBidWZmZXIgKi9cbiAgI2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICh0aGlzLiNzdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICBPQ1JFbmdpbmUuX2ZyZWUodGhpcy4jc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICB0aGlzLiNzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIGZyZWUgc2Nhbm5lciBhZGRyZXNzICovXG4gICNkZXN0cm95U2Nhbm5lckFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMuI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuICAjaXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvRWxlbWVudCkge1xuICAgIGNvbnN0IHsgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLCByZXNvbHV0aW9uVGV4dCB9ID0gdGhpcy4jc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFJlc29sdXRpb24pIHtcbiAgICAgIGlmIChyZXNvbHV0aW9uVGV4dCAhPT0gJ25vdCByZWFkeScpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVmlkZW8gUmVzb2x1dGlvbignICsgcmVzb2x1dGlvblRleHQgKyAnKSBpcyBub3QgU3VwcG9ydGVkIScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSZXNvbHV0aW9uO1xuICB9XG4gICNnZXRSb3RhdGlvbkRlZ3JlZSgpIHtcbiAgICByZXR1cm4gKCh0aGlzLiNvcHRpb25zLnJvdGF0aW9uRGVncmVlICUgMzYwKSArIDM2MCkgJSAzNjA7XG4gIH1cbiAgI2dldE1pcnJvck1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI29wdGlvbnMubWlycm9yTW9kZTtcbiAgfVxuICBhc3luYyAjY3JvcEltYWdlRnJvbVZpZGVvKCkge1xuICAgIGlmICghdGhpcy4jY2FtU2V0Q29tcGxldGUpIHJldHVybiBbbnVsbCwgbnVsbF07XG5cbiAgICBsZXQgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW3RoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodF07XG4gICAgY29uc3QgeyB2aWRlbywgY2FudmFzLCByb3RhdGlvbkNhbnZhcywgZ3VpZGVCb3ggfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICAvLyBzb3VyY2UgaW1hZ2UgKG9yIHZpZGVvKVxuICAgIC8vIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSKIHN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSD4pSI4pSI4pSI4pSIIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgc3ggIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogc0hlaWdodCAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiBjYW52YXNcbiAgICAvLyDilIMgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICAgICAgICDilIPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAgICAgICAgc1dpZHRoICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICDilIogZHkgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg+KUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgZHggICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogZEhlaWdodCDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICBkV2lkdGggICAgICAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHkpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL2RyYXdJbWFnZVxuXG4gICAgbGV0IGNhbGNDYW52YXMgPSBjYW52YXM7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY0d1aWRlQm94Q2xpZW50V2lkdGggPSBndWlkZUJveC5jbGllbnRXaWR0aFxuICAgIGxldCBjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHQgPSBndWlkZUJveC5jbGllbnRIZWlnaHRcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uO1xuXG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCwgY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0XSA9IFtjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHQsIGNhbGNHdWlkZUJveENsaWVudFdpZHRoXTtcbiAgICAgIFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFtjYWxjUmVzb2x1dGlvbl9oLCBjYWxjUmVzb2x1dGlvbl93XTtcbiAgICAgIGNhbGNDYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG5cbiAgICBsZXQgY2FsY01heFNXaWR0aCA9IDk5OTk5O1xuICAgIGxldCBjYWxjTWF4U0hlaWdodCA9IDk5OTk5O1xuXG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3gsIHN5O1xuICAgIGNvbnN0IHJhdGlvID0gKGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvQ2xpZW50V2lkdGgpO1xuICAgIGNvbnN0IHNXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0d1aWRlQm94Q2xpZW50V2lkdGggKiByYXRpbyksIGNhbGNNYXhTV2lkdGgpO1xuICAgIGNvbnN0IHNIZWlnaHQgPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNHdWlkZUJveENsaWVudEhlaWdodCAqIHJhdGlvKSwgY2FsY01heFNIZWlnaHQpO1xuXG4gICAgc3ggPSBNYXRoLnJvdW5kKCgoY2FsY1ZpZGVvQ2xpZW50V2lkdGggLSBjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCkgLyAyKSAqIHJhdGlvKTtcbiAgICBzeSA9IE1hdGgucm91bmQoKChjYWxjVmlkZW9DbGllbnRIZWlnaHQgLSBjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHQpIC8gMikgKiByYXRpbyk7XG5cbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICB2aWRlbyxcbiAgICAgIHN4LFxuICAgICAgc3ksXG4gICAgICBzV2lkdGgsXG4gICAgICBzSGVpZ2h0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBjYWxjUmVzb2x1dGlvbl93LFxuICAgICAgY2FsY1Jlc29sdXRpb25faFxuICAgICk7XG5cbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBjYWxjUmVzb2x1dGlvbl93LFxuICAgICAgY2FsY1Jlc29sdXRpb25faFxuICAgICk7XG4gICAgY29uc3QgaW1nRGF0YVVybCA9IGNhbGNDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XG5cbiAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCB0aGlzLiNnZXRSb3RhdGlvbkRlZ3JlZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtpbWdEYXRhLCBpbWdEYXRhVXJsXTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgI3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCBkZWdyZWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChkZWdyZWUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShbaW1nRGF0YSwgaW1nRGF0YVVybF0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgaW1nLnNyYyA9IGltZ0RhdGFVcmw7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIC8vIGNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGV4dCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGVtcENhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodFxuICAgICAgICAgIHRlbXBDYW52YXMuaGVpZ2h0ID0gaW1nLndpZHRoXG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGhcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVncmVlID09PSA5MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy5oZWlnaHQsIDApXG4gICAgICAgIGVsc2UgaWYgKGRlZ3JlZSA9PT0gMTgwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuICAgICAgICBlbHNlIGlmIChkZWdyZWUgPT09IDI3MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKDAsIGltZy53aWR0aClcblxuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MClcbiAgICAgICAgdGVtcENvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMClcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHRlbXBDb250ZXh0KTtcbiAgICAgICAgcmVzb2x2ZShbbmV3SW1hZ2VEYXRhLCB0ZW1wQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpXSlcbiAgICAgICAgdGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuICBhc3luYyAjaXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcykge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLiNnZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IFtpbWdEYXRhXSA9IGF3YWl0IHRoaXMuI2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgT0NSRW5naW5lLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IE9DUkVuZ2luZS5kZXRlY3RfaWRjYXJkKFxuICAgICAgICBidWZmZXIsXG4gICAgICAgIHRoaXMuI3Jlc29sdXRpb25XaWR0aCxcbiAgICAgICAgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0NhcmRib3hEZXRlY3RlZCByZXN1bHQgLT0tLS0tLScsIHJlc3VsdClcbiAgICAgIHJldHVybiAhIXJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yIDogJyArIGU7XG5cbiAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgI3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSwgc3NhTW9kZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICdjaGVja1ZhbGlkYXRpb24gRmFpbCc7XG4gICAgICB9XG5cbiAgICAgIGxldCBvY3JSZXN1bHQgPSBudWxsO1xuICAgICAgbGV0IHNzYVJlc3VsdCA9IG51bGw7XG5cbiAgICAgIGlmICghdGhpcy4jb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcblxuICAgICAgY29uc3QgWywgcmVzdWx0QnVmZmVyXSA9IHRoaXMuI2dldEJ1ZmZlcigpO1xuICAgICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSBPQ1JFbmdpbmUuc2NhbklEQ2FyZChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSBPQ1JFbmdpbmUuc2NhblBhc3Nwb3J0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBvY3JSZXN1bHQgPSBPQ1JFbmdpbmUuc2NhbkFsaWVuKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICAgIGNhc2UgJ2NyZWRpdC1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IE9DUkVuZ2luZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAob2NyUmVzdWx0ID09PSBudWxsIHx8IG9jclJlc3VsdCA9PT0gJycgfHwgb2NyUmVzdWx0ID09PSAnZmFsc2UnIHx8IG9jclJlc3VsdFswXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsLCBudWxsLCBudWxsXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzc2FNb2RlKSB7XG4gICAgICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcIi1zc2FcIikgPiAtMSkge1xuICAgICAgICAgICAgc3NhUmVzdWx0ID0gT0NSRW5naW5lLnNjYW5UcnV0aChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NTQSBNb2RlIGlzIHRydWUuIGJ1dCwgb2NyVHlwZSBpcyBpbnZhbGlkIDogJyArIG9jclR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgY3JvcE1vZGUgPSBmYWxzZTtcbiAgICAgIGlmIChvY3JUeXBlLmluZGV4T2YoXCJjcmVkaXRcIikgPiAtMSkge1xuICAgICAgICBjcm9wTW9kZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBsZXQgb3JpZ2luSW1hZ2UgPSBhd2FpdCB0aGlzLiNnZXRJbWFnZUJhc2U2NChhZGRyZXNzLCBmYWxzZSwgY3JvcE1vZGUpO1xuICAgICAgbGV0IG1hc2tJbWFnZSA9IGF3YWl0IHRoaXMuI2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIHRydWUsIGNyb3BNb2RlKTtcbiAgICAgIG1hc2tJbWFnZSA9IChtYXNrSW1hZ2UgPT09ICdkYXRhOicgPyBudWxsIDogbWFza0ltYWdlKTtcblxuICAgICAgcmV0dXJuIFtvY3JSZXN1bHQsIG9yaWdpbkltYWdlLCBtYXNrSW1hZ2UsIHNzYVJlc3VsdF07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignc3RhcnRSZWNvZ25pdGlvbiBlcnJvcjonICsgZSk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICAjc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICB0aGlzLiNjbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLiNjYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7ICAgICAgLy8gMey0iCBkZWxheSDtm4Qg7Iuk7ZaJXG4gICAgICBhd2FpdCB0aGlzLiNwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIGFzeW5jICNwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICAgIGNvbnN0IGlzUGFzc3BvcnQgPSB0aGlzLiNvY3JUeXBlLmluY2x1ZGVzKCdwYXNzcG9ydCcpO1xuICAgICAgYXdhaXQgdGhpcy4jc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KTtcblxuICAgICAgY29uc3QgeyB2aWRlbyB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAvLyBjb25zdCBbdHJhY2tdID0gdGhpcy4jc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIC8vIGNvbnN0IGNhcGFiaWxpdHkgPSB0cmFjay5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW4jaW5pdGlhbGl6ZSBjYXBhYmlsaXR5JywgY2FwYWJpbGl0eSk7XG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiB2aWRlbykge1xuICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHRoaXMuI3N0cmVhbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBdm9pZCB1c2luZyB0aGlzIGluIG5ldyBicm93c2VycywgYXMgaXQgaXMgZ29pbmcgYXdheS5cbiAgICAgICAgICB2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLiNzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIC0gb25sb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZygnY2FucGxheScpO1xuXG4gICAgICAgICAgLy8gdmlkZW8gZWxlbWVudCBzdHlsZSDshKTsoJVcbiAgICAgICAgICB0aGlzLiN2aWRlb09yaWVudGF0aW9uID1cbiAgICAgICAgICAgIHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlby52aWRlb0hlaWdodCA8IDEgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZygndGhpcy4jZGV2aWNlSW5mby5vc1NpbXBsZSA6OiAnICsgdGhpcy4jZGV2aWNlSW5mby5vc1NpbXBsZSk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZygndGhpcy4jdWlPcmllbnRhdGlvbiA6OiAnICsgdGhpcy4jdWlPcmllbnRhdGlvbik7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZygndGhpcy4jdmlkZW9PcmllbnRhdGlvbiA6OiAnICsgdGhpcy4jdmlkZW9PcmllbnRhdGlvbik7XG5cbiAgICAgICAgICB0aGlzLiNjYW1TZXRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy4jYWRqdXN0U3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgdmlkZW8ud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLk5PVF9SRUFEWSk7XG4gICAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignZXJyb3InLCBlLm5hbWUsIGUpO1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ05vdEFsbG93ZWRFcnJvcicpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ0NhbWVyYSBBY2Nlc3MgUGVybWlzc2lvbiBpcyBub3QgYWxsb3dlZCc7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgdGhpcy4jb25GYWlsdXJlUHJvY2VzcyhcIkU0MDNcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5uYW1lID09PSAnTm90UmVhZGFibGVFcnJvcicpIHtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuI3NldENhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTsgICAgICAgICAgICAgIC8vIOyerOq3gCDtmLjstpxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjc2V0U3R5bGUoZWwsIHN0eWxlKSB7XG4gICAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgc3R5bGUpO1xuICB9O1xuXG4gICNjaGFuZ2VTdGFnZSh2YWwpIHtcbiAgICB0aGlzLiNpblByb2dyZXNzU3RlcCA9IHZhbDtcbiAgICBjb25zdCB7IGd1aWRlQm94IH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBib3JkZXJXaWR0aDogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLndpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuc3R5bGUsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZVt2YWxdLFxuICAgIH07XG5cbiAgICBpZiAoZ3VpZGVCb3gpIHtcbiAgICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94LCBzdHlsZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgI2dldElucHV0RGV2aWNlcyhraW5kLCBsYWJlbCkge1xuICAgIC8vIHRocm93IGVycm9yIGlmIG5hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZFxuICAgIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIGNvbnN0IHZpZGVvRGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IHtcbiAgICAgIGlmIChkZXZpY2Uua2luZCA9PT0gYCR7a2luZH1pbnB1dGAgJiYgZGV2aWNlLmdldENhcGFiaWxpdGllcykge1xuICAgICAgICBjb25zdCBjYXAgPSBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIGlmIChjYXA/LmZhY2luZ01vZGU/LmluY2x1ZGVzKHRoaXMuI2ZhY2luZ01vZGVDb25zdHJhaW50KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpZGVvRGV2aWNlcy5sZW5ndGggPD0gMVxuICAgICAgPyB2aWRlb0RldmljZXNcbiAgICAgIDogdmlkZW9EZXZpY2VzLmZpbHRlcigoZGV2aWNlKSA9PiAobGFiZWwgPyBkZXZpY2UubGFiZWwuaW5jbHVkZXMobGFiZWwpIDogdHJ1ZSkpO1xuICB9XG5cbiAgI2NoZWNrVUlPcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZGV0ZWN0b3IuZ2V0VUlPcmllbnRhdGlvbihkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpLm9jcik7XG4gICAgbGV0IGlzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50ICE9PSB0aGlzLiNwcmV2VWlPcmllbnRhdGlvbikge1xuICAgICAgdGhpcy4jdWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICB0aGlzLiNwcmV2VWlPcmllbnRhdGlvbiA9IGN1cnJlbnQ7XG4gICAgICBpc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4geyBjdXJyZW50LCBpc0NoYW5nZWQgfTtcbiAgfVxuXG4gICNzZXR1cERvbUVsZW1lbnRzKCkge1xuICAgIGxldCB7IG9jciwgdmlkZW8sIGNhbnZhcywgcm90YXRpb25DYW52YXMsXG4gICAgICBndWlkZUJveCwgdmlkZW9XcmFwLCBndWlkZUJveFdyYXAsXG4gICAgICBtYXNrQm94V3JhcCwgcHJldmVudFRvRnJlZXplVmlkZW8gfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICBpZiAoIW9jcikgdGhyb3cgbmV3IEVycm9yKFwib2NyIGRpdiBlbGVtZW50IGlzIG5vdCBleGlzdFwiKTtcblxuICAgIGlmICh2aWRlb1dyYXApIHZpZGVvV3JhcC5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3hXcmFwKSBndWlkZUJveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHZpZGVvKSB2aWRlby5yZW1vdmUoKTtcbiAgICBpZiAoY2FudmFzKSBjYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKHJvdGF0aW9uQ2FudmFzKSByb3RhdGlvbkNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAoZ3VpZGVCb3gpIGd1aWRlQm94LnJlbW92ZSgpO1xuICAgIGlmIChtYXNrQm94V3JhcCkgbWFza0JveFdyYXAucmVtb3ZlKCk7XG4gICAgaWYgKHByZXZlbnRUb0ZyZWV6ZVZpZGVvKSBwcmV2ZW50VG9GcmVlemVWaWRlby5yZW1vdmUoKTtcblxuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy4jZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID0gKFs5MCwgMjcwXS5pbmNsdWRlcyhyb3RhdGlvbkRlZ3JlZSkpO1xuXG4gICAgbGV0IG9jclN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgIH07XG4gICAgdGhpcy4jc2V0U3R5bGUob2NyLCBvY3JTdHlsZSk7XG5cbiAgICBjb25zdCB3cmFwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JywgICAgICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfTtcblxuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG5cbiAgICBtYXNrQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtYXNrQm94V3JhcCcpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuI3NldFN0eWxlKG1hc2tCb3hXcmFwLCB3cmFwU3R5bGUpO1xuXG4gICAgbGV0IG1hc2tfZnJhbWUgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUubWFza19mcmFtZSArICdmZic7XG4gICAgaWYgKCEhdGhpcy4jb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICBtYXNrX2ZyYW1lID0gdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLmNsaXBfZnJhbWUgKyAnNTUnO1xuICAgIH1cblxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgK1xuICAgICAgXCIgIDxzdmcgaWQ9J21hc2tCb3hDb250YWluZXInIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XFxuXCIgK1xuICAgICAgXCIgICAgPG1hc2sgaWQ9J21hc2stcmVjdCc+XFxuXCIgK1xuICAgICAgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICtcbiAgICAgIFwiICAgICAgPHN2ZyB4PSc1MCUnIHk9JzUwJScgb3ZlcmZsb3c9J3Zpc2libGUnPlxcblwiICtcbiAgICAgIFwiICAgICAgICAgIDxyZWN0IGlkPSdtYXNrQm94SW5uZXInXFxuXCIgK1xuICAgICAgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArXG4gICAgICBcIiAgICAgICAgICAgIHg9Jy0yMDAnIHk9Jy0xMzAnXFxuXCIgK1xuICAgICAgXCIgICAgICAgICAgICByeD0nMTAnIHJ5PScxMCdcXG5cIiArXG4gICAgICBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgK1xuICAgICAgXCIgICAgICA8L3N2Zz5cXG5cIiArXG4gICAgICBcIiAgICA8L21hc2s+XFxuXCIgK1xuICAgICAgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArXG4gICAgICBcIiAgICAgICAgICB4PScwJyB5PScwJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJ1xcblwiICtcbiAgICAgIFwiICAgICAgICAgIGZpbGw9J1wiICsgbWFza19mcmFtZSArIFwiJyBtYXNrPSd1cmwoI21hc2stcmVjdCknPjwvcmVjdD5cXG5cIiArXG4gICAgICBcIiAgPC9zdmc+XCJcbiAgICBvY3IuYXBwZW5kQ2hpbGQobWFza0JveFdyYXApO1xuXG4gICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpO1xuXG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG5cbiAgICBjb25zdCByb3RhdGVDc3MgPSAncm90YXRlKCcgKyByb3RhdGlvbkRlZ3JlZSArICdkZWcpJztcbiAgICBjb25zdCBtaXJyb3JDc3MgPSAncm90YXRlWSgxODBkZWcpJ1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcblxuXG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIGlmICh0aGlzLiNnZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLiNnZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvLCB2aWRlb1N0eWxlKTtcblxuICAgIHZpZGVvV3JhcC5hcHBlbmRDaGlsZCh2aWRlbyk7XG5cbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcblxuICAgIGd1aWRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94Jyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy4jc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgfSk7XG5cbiAgICBndWlkZUJveFdyYXAuYXBwZW5kQ2hpbGQoZ3VpZGVCb3gpO1xuXG4gICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYW52YXMnKTtcblxuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy4jb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/ICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID8gJ25vbmUnIDogJ2Rpc3BsYXknKSA6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm9yZGVyOiAnZ3JlZW4gMnB4IHNvbGlkJ1xuICAgIH1cbiAgICB0aGlzLiNzZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcblxuICAgIG9jci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gICAgcm90YXRpb25DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByb3RhdGlvbkNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncm90YXRpb25DYW52YXMnKTtcblxuICAgIHRoaXMuI3NldFN0eWxlKHJvdGF0aW9uQ2FudmFzLCB7XG4gICAgICBkaXNwbGF5OiB0aGlzLiNvcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gKHRoaXMuI2lzUm90YXRlZDkwb3IyNzAgPyAnZGlzcGxheScgOiAnbm9uZScpIDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMHB4JyxcbiAgICAgIGJvcmRlcjogJ2JsdWUgMnB4IHNvbGlkJ1xuICAgIH0pO1xuICAgIG9jci5hcHBlbmRDaGlsZChyb3RhdGlvbkNhbnZhcyk7XG5cbiAgICBwcmV2ZW50VG9GcmVlemVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZlbnRUb0ZyZWV6ZVZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdwcmV2ZW50VG9GcmVlemVWaWRlbycpO1xuICAgIHRoaXMuI3NldFN0eWxlKHByZXZlbnRUb0ZyZWV6ZVZpZGVvLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgIHJpZ2h0OiAnMTAnLFxuICAgIH0pO1xuXG4gICAgcHJldmVudFRvRnJlZXplVmlkZW8uaW5uZXJIVE1MID0gXCJcIiArXG4gICAgICBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcXFwiIHdpZHRoPVxcXCIzMnB4XFxcIiBoZWlnaHQ9XFxcIjMycHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCI+XFxuXCIgK1xuICAgICAgXCIgIDxjaXJjbGUgY3g9XFxcIjg0XFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjAuNTU1NTU1NTU1NTU1NTU1NnNcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIHZhbHVlcz1cXFwiMTA7MFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImZpbGxcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJkaXNjcmV0ZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIiM4Njg2ODYwMDsjODY4Njg2MDA7Izg2ODY4NjAwOyM4Njg2ODYwMDsjODY4Njg2MDBcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICA8L2NpcmNsZT5cIiArXG4gICAgICBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgK1xuICAgICAgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImN4XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMTY7MTY7MTY7NTA7ODRcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArXG4gICAgICBcIiAgPC9jaXJjbGU+XCIgK1xuICAgICAgXCIgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjODY4Njg2MDBcXFwiPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIwOzA7MTA7MTA7MTBcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTAuNTU1NTU1NTU1NTU1NTU1NnNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArXG4gICAgICBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJjeFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjE2OzE2OzE2OzUwOzg0XFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0wLjU1NTU1NTU1NTU1NTU1NTZzXFxcIj48L2FuaW1hdGU+XFxuXCIgK1xuICAgICAgXCIgIDwvY2lyY2xlPlwiICtcbiAgICAgIFwiICA8Y2lyY2xlIGN4PVxcXCI4NFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxMFxcXCIgZmlsbD1cXFwiIzg2ODY4NjAwXFxcIj5cXG5cIiArXG4gICAgICBcIiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJyXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMDswOzEwOzEwOzEwXFxcIiBrZXlTcGxpbmVzPVxcXCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVxcXCIgYmVnaW49XFxcIi0xLjExMTExMTExMTExMTExMTJzXFxcIj48L2FuaW1hdGU+XFxuXCIgK1xuICAgICAgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiY3hcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBkdXI9XFxcIjIuMjIyMjIyMjIyMjIyMjIyM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGtleVRpbWVzPVxcXCIwOzAuMjU7MC41OzAuNzU7MVxcXCIgdmFsdWVzPVxcXCIxNjsxNjsxNjs1MDs4NFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS4xMTExMTExMTExMTExMTEyc1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICA8L2NpcmNsZT5cIiArXG4gICAgICBcIiAgPGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiM4Njg2ODYwMFxcXCI+XFxuXCIgK1xuICAgICAgXCIgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGR1cj1cXFwiMi4yMjIyMjIyMjIyMjIyMjIzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIga2V5VGltZXM9XFxcIjA7MC4yNTswLjU7MC43NTsxXFxcIiB2YWx1ZXM9XFxcIjA7MDsxMDsxMDsxMFxcXCIga2V5U3BsaW5lcz1cXFwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcXFwiIGJlZ2luPVxcXCItMS42NjY2NjY2NjY2NjY2NjY1c1xcXCI+PC9hbmltYXRlPlxcblwiICtcbiAgICAgIFwiICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcImN4XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgZHVyPVxcXCIyLjIyMjIyMjIyMjIyMjIyMjNzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBrZXlUaW1lcz1cXFwiMDswLjI1OzAuNTswLjc1OzFcXFwiIHZhbHVlcz1cXFwiMTY7MTY7MTY7NTA7ODRcXFwiIGtleVNwbGluZXM9XFxcIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXFxcIiBiZWdpbj1cXFwiLTEuNjY2NjY2NjY2NjY2NjY2NXNcXFwiPjwvYW5pbWF0ZT5cXG5cIiArXG4gICAgICBcIiAgPC9jaXJjbGU+XCJcbiAgICAgIFwiPC9zdmc+XCI7XG5cbiAgICBvY3IuYXBwZW5kQ2hpbGQocHJldmVudFRvRnJlZXplVmlkZW8pO1xuXG4gICAgdGhpcy4jb2NyID0gb2NyO1xuICAgIHRoaXMuI2NhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLiNyb3RhdGlvbkNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgIHRoaXMuI3ZpZGVvID0gdmlkZW87XG4gICAgdGhpcy4jdmlkZW9XcmFwID0gdmlkZW9XcmFwO1xuICAgIHRoaXMuI2d1aWRlQm94ID0gZ3VpZGVCb3g7XG4gICAgdGhpcy4jZ3VpZGVCb3hXcmFwID0gZ3VpZGVCb3hXcmFwO1xuICAgIHRoaXMuI21hc2tCb3hXcmFwID0gbWFza0JveFdyYXA7XG4gICAgdGhpcy4jcHJldmVudFRvRnJlZXplVmlkZW8gPSBwcmV2ZW50VG9GcmVlemVWaWRlbztcblxuICAgIHJldHVybiB7IG9jciwgY2FudmFzLCByb3RhdGlvbkNhbnZhcywgdmlkZW8sIHZpZGVvV3JhcCwgZ3VpZGVCb3gsIGd1aWRlQm94V3JhcCwgbWFza0JveFdyYXAsIHByZXZlbnRUb0ZyZWV6ZVZpZGVvIH07XG4gIH1cblxuICBhc3luYyAjc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KSB7XG4gICAgLy8gd2FzbSDsnbjsi53shLHriqUg7LWc7KCB7ZmU65CcIO2VtOyDgeuPhFxuICAgIHRoaXMuI3Jlc29sdXRpb25XaWR0aCA9IDEwODA7XG4gICAgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCA9IDcyMDtcblxuICAgIHRoaXMuI2NhbVNldENvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCB7IHZpZGVvLCBjYW52YXMsIHJvdGF0aW9uQ2FudmFzIH0gPSB0aGlzLiNzZXR1cERvbUVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBhd2FpdCB0aGlzLiNnZXRJbnB1dERldmljZXMoJ3ZpZGVvJywgdGhpcy4jb3B0aW9ucy5kZXZpY2VMYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvRGV2aWNlcyA6OiAnLCB2aWRlb0RldmljZXMpXG4gICAgY29uc3QgZGV2aWNlSWRMaXN0ID0gdmlkZW9EZXZpY2VzLm1hcCgoZGV2aWNlKSA9PiBkZXZpY2UuZGV2aWNlSWQpO1xuXG4gICAgdGhpcy4jY2hlY2tVSU9yaWVudGF0aW9uKCk7XG4gICAgbGV0IGNvbnN0cmFpbnRXaWR0aCwgY29uc3RyYWludEhlaWdodDtcbiAgICBpZiAodGhpcy4jdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JykgeyAgICAgICAgIC8vIHVpIDogcG9ydHJhaXRcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsICAgICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDEwODAsICAgICAgICAgICAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCwgICAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogNzIwLCAgICAgICAgICAgICAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcbiAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVpIDogbGFuZHNjYXBlXG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICBtaW46IDEyODAsXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIG1pbjogNzIwLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25zdHJhaW50cyA9IHtcbiAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHpvb206IHsgaWRlYWw6IDEgfSxcbiAgICAgICAgZmFjaW5nTW9kZTogeyBpZGVhbDogdGhpcy4jZmFjaW5nTW9kZUNvbnN0cmFpbnQgfSxcbiAgICAgICAgZm9jdXNNb2RlOiB7IGlkZWFsOiAnY29udGludW91cycgfSxcbiAgICAgICAgd2hpdGVCYWxhbmNlTW9kZTogeyBpZGVhbDogJ2NvbnRpbnVvdXMnIH0sXG4gICAgICAgIGRldmljZUlkOiB7XG4gICAgICAgICAgaWRlYWw6IGRldmljZUlkTGlzdC5sZW5ndGggPiAwID8gZGV2aWNlSWRMaXN0W2RldmljZUlkTGlzdC5sZW5ndGggLSAxXSA6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6IGNvbnN0cmFpbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb25zdHJhaW50SGVpZ2h0LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0IGR1bXB0cmFjayA9IChbYSwgYl0sIHRyYWNrKSA9PlxuICAgICAgLy8gICBgJHthfSR7dHJhY2sua2luZCA9PSAndmlkZW8nID8gJ0NhbWVyYScgOiAnTWljcm9waG9uZSd9ICgke3RyYWNrLnJlYWR5U3RhdGV9KTogJHt0cmFjay5sYWJlbH0ke2J9YDtcblxuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvVHJhY2tzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpKVxuICAgICAgLy8gY29uc3Qgc3RyZWFtU2V0dGluZ3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRTZXR0aW5ncygpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbUNhcGFiaWxpdGllcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDYXBhYmlsaXRpZXMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q29uc3RyYWludHMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1TZXR0aW5ncyA6OiAnLCBzdHJlYW1TZXR0aW5ncylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCAvIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGggLyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBhc3BlY3RSYXRpbyA6OiAnICsgc3RyZWFtU2V0dGluZ3MuYXNwZWN0UmF0aW8pO1xuXG4gICAgICBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSA9IFt0aGlzLiNyZXNvbHV0aW9uV2lkdGgsIHRoaXMuI3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgW3JvdGF0aW9uQ2FudmFzLndpZHRoLCByb3RhdGlvbkNhbnZhcy5oZWlnaHRdID0gW3RoaXMuI3Jlc29sdXRpb25IZWlnaHQsIHRoaXMuI3Jlc29sdXRpb25XaWR0aF07XG4gICAgICB9XG5cbiAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgIHRoaXMuI3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICAjYWRqdXN0U3R5bGUoKSB7XG4gICAgY29uc3QgeyBvY3IsIHZpZGVvLCBjYW52YXMsIGd1aWRlQm94LCB2aWRlb1dyYXAsIG1hc2tCb3hXcmFwIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgIGNvbnNvbGUuZGVidWcoJ2FkanVzdFN0eWxlJyk7XG4gICAgLy8g6riw7KSA7KCV67O0XG4gICAgY29uc3QgYmFzZVdpZHRoID0gNDAwO1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAyNjA7XG5cbiAgICBjb25zdCBzY2FubmVyRnJhbWVSYXRpbyA9IGJhc2VIZWlnaHQgLyBiYXNlV2lkdGg7ICAgICAgIC8vIOyLoOu2hOymnSDruYTsnKhcblxuICAgIGxldCBndWlkZUJveFdpZHRoLCBndWlkZUJveEhlaWdodCwgbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHQ7XG5cbiAgICBsZXQgY2FsY09jckNsaWVudFdpZHRoID0gb2NyLmNsaWVudFdpZHRoXG4gICAgbGV0IGNhbGNPY3JDbGllbnRIZWlnaHQgPSBvY3IuY2xpZW50SGVpZ2h0XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uO1xuXG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjVmlkZW9XaWR0aCwgY2FsY1ZpZGVvSGVpZ2h0XSA9IFtjYWxjVmlkZW9IZWlnaHQsIGNhbGNWaWRlb1dpZHRoXTtcbiAgICAgIFtjYWxjVmlkZW9DbGllbnRXaWR0aCwgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0XSA9IFtjYWxjVmlkZW9DbGllbnRIZWlnaHQsIGNhbGNWaWRlb0NsaWVudFdpZHRoXTtcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JykgeyAgICAgICAgICAgICAgIC8vIOyEuOuhnCBVSVxuICAgICAgLy8gdmlkZW8g6rCA66GcIOq4sOykgCAxMDAlIOycoOyngCAo67OA6rK97JeG7J2MKVxuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLiN1aU9yaWVudGF0aW9uKSB7ICAgLy8g7Lm066mU652864+EIOyEuOuhnFxuICAgICAgICAvLy8g7IS466GcIFVJICYmIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgLy8g6rCA66GcIOq4sOykgOycvOuhnCDqsIDsnbTrk5zrsJXsiqQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGd1aWRlQm94UmF0aW9CeVdpZHRoID0gMC44O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gY2FsY09jckNsaWVudFdpZHRoICogZ3VpZGVCb3hSYXRpb0J5V2lkdGg7XG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gZ3VpZGVCb3hXaWR0aCAqIHNjYW5uZXJGcmFtZVJhdGlvO1xuXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqQg6rCA66GcIOq4sOykgOycvOuhnCDsubTrqZTrnbwg7ZmV64yAXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBndWlkZUJveFdpZHRoO1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IG5ld1ZpZGVvV2lkdGggKiAoY2FsY1ZpZGVvSGVpZ2h0IC8gY2FsY1ZpZGVvV2lkdGgpO1xuICAgICAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgICAgIFtuZXdWaWRlb1dpZHRoLCBuZXdWaWRlb0hlaWdodF0gPSBbbmV3VmlkZW9IZWlnaHQsIG5ld1ZpZGVvV2lkdGhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOy5tOuplOudvOuKlCDqsIDroZxcbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpOulvCDshLjroZwg6ri47J207JeQIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IGNhbGNWaWRlb0NsaWVudEhlaWdodDtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IChndWlkZUJveEhlaWdodCAqIGJhc2VXaWR0aCkgLyBiYXNlSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDqsIDroZwgVUlcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg6rCA66GcIOy5tOuplOudvFxuICAgICAgICAvLyDruYTrlJTsmKTrpbwgaGVpZ2h0IOq4sOykgOycvOuhnCDspITsnbTqs6BcbiAgICAgICAgY29uc3QgdmlkZW9SYXRpb0J5SGVpZ2h0ID0gMC42OyAgICAgLy8gMC42fjAuM1xuICAgICAgICBuZXdWaWRlb0hlaWdodCA9IGNhbGNPY3JDbGllbnRIZWlnaHQgKiB2aWRlb1JhdGlvQnlIZWlnaHRcbiAgICAgICAgLy8gaGVpZ2h0IOq4sOykgOycvOuhnCB3aWR0aCDqs4TsgrBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IG5ld1ZpZGVvSGVpZ2h0ICogKGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvSGVpZ2h0KTtcblxuICAgICAgICAvLyDqsIDsnbTrk5zrsJXsiqTripQg67mE65SU7Jik66W8IOyEuOuhnCDquLDspIDsnLzroZwg66ee7LakXG4gICAgICAgIGd1aWRlQm94SGVpZ2h0ID0gbmV3VmlkZW9IZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSAoZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGgpIC8gYmFzZUhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAmJiDshLjroZwg7Lm066mU6528XG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IDAuODtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg7Lm066mU6528IO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvLCB7XG4gICAgICB3aWR0aDogbmV3VmlkZW9XaWR0aCArICdweCcsXG4gICAgICBoZWlnaHQ6IG5ld1ZpZGVvSGVpZ2h0ICsgJ3B4JyxcbiAgICB9KTtcblxuICAgIC8vIOyLoOq3nFxuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94LCB7XG4gICAgICB3aWR0aDogZ3VpZGVCb3hXaWR0aCArICdweCcsXG4gICAgICBoZWlnaHQ6IGd1aWRlQm94SGVpZ2h0ICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tCb3hJbm5lciA9IG1hc2tCb3hXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIjbWFza0JveElubmVyXCIpO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gTnVtYmVyKHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCk7XG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gTnVtYmVyKHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5yYWRpdXMpO1xuICAgIGlmIChndWlkZUJveFdpZHRoICYmIGd1aWRlQm94V2lkdGggJiYgYm9yZGVyUmFkaXVzICYmIGJvcmRlcldpZHRoKSB7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGd1aWRlQm94V2lkdGggKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBndWlkZUJveEhlaWdodCArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3gnLCAoZ3VpZGVCb3hXaWR0aCAvIDIgKiAtMSkgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd5JywgKGd1aWRlQm94SGVpZ2h0IC8gMiAqIC0xKSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J4JywgYm9yZGVyUmFkaXVzICsgKGJvcmRlcldpZHRoICogLTEpICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgncnknLCBib3JkZXJSYWRpdXMgKyAoYm9yZGVyV2lkdGggKiAtMSkgKyAnJyk7XG4gICAgfVxuICB9XG5cbiAgI2Nsb3NlQ2FtZXJhKCkge1xuICAgIHRoaXMuI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgfVxuXG4gIGFzeW5jICNsb2FkUmVzb3VyY2VzKCkge1xuICAgIGlmICh0aGlzLiNyZXNvdXJjZXNMb2FkZWQpIHJldHVybjtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKCdxdXJhbS5qcycsIHRoaXMuI29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKTtcbiAgICBsZXQgc3JjID0gYXdhaXQgZmV0Y2godXJsLmhyZWYpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgICAgLnRoZW4oKHRleHQpID0+IHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICAgIGxldCBzb3VyY2UgPSB0ZXh0LnJlcGxhY2UocmVnZXgsICdNb2R1bGUuJDEgPSBNb2R1bGUuY3dyYXAnKTtcbiAgICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoXG4gICAgICAgICAgJ3F1cmFtLndhc20nLFxuICAgICAgICAgIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZlxuICAgICAgICApO1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShcbiAgICAgICAgICAvUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFsnXCJdcXVyYW1cXC5kYXRhW1wiJ10vZ20sXG4gICAgICAgICAgYFJFTU9URV9QQUNLQUdFX0JBU0UgPSBcIiR7bmV3IFVSTCgncXVyYW0uZGF0YScsIHRoaXMuI29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKS5ocmVmXG4gICAgICAgICAgfVwiYFxuICAgICAgICApO1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShcbiAgICAgICAgICAnZnVuY3Rpb24gY3JlYXRlV2FzbScsXG4gICAgICAgICAgJ2FzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdhc20nXG4gICAgICAgICk7XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKFxuICAgICAgICAgICd2YXIgYXNtID0gY3JlYXRlV2FzbSgpOycsXG4gICAgICAgICAgJ2F3YWl0IGNyZWF0ZVdhc20oKTsnXG4gICAgICAgICk7XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKFxuICAgICAgICAgICdpbnN0YW50aWF0ZUFzeW5jKCk7JyxcbiAgICAgICAgICAnYXdhaXQgaW5zdGFudGlhdGVBc3luYygpOydcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgIH0pO1xuXG4gICAgc3JjID0gYFxuICAgIChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICR7c3JjfVxuICAgICAgTW9kdWxlLmxlbmd0aEJ5dGVzVVRGOCA9IGxlbmd0aEJ5dGVzVVRGOFxuICAgICAgTW9kdWxlLnN0cmluZ1RvVVRGOCA9IHN0cmluZ1RvVVRGOFxuICAgICAgcmV0dXJuIE1vZHVsZVxuICAgIH0pKClcbiAgICAgICAgYDtcbiAgICBPQ1JFbmdpbmUgPSBhd2FpdCBldmFsKHNyYyk7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvYWRSZXNvdXJjZXMgOjogJywgTW9kdWxlKVxuICAgIHRoaXMuI3Jlc291cmNlc0xvYWRlZCA9IHRydWU7XG4gIH1cblxuICAjc3RhcnRTY2FuSW1wbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy4jaW50ZXJ2YWxMb2NrID0gZmFsc2U7XG4gICAgICBsZXQgZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuI2ludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHRoaXMuI2ludGVydmFsTG9jayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNpbnRlcnZhbExvY2sgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgICBpZiAoIU9DUkVuZ2luZVsnYXNtJ10pIHJldHVybjtcblxuICAgICAgICAgIC8vIFRPRE8gOiDshKTsoJXtlaDsiJgg7J6I6rKMIOuzgOqyvSBkZWZhdWx0IOqwkuuPhCDsoJzqs7VcbiAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvbl93LCByZXNvbHV0aW9uX2hdID0gW3RoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICAgICAgY29uc3QgeyB2aWRlbyB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICBpZiAocmVzb2x1dGlvbl93ID09PSAwIHx8IHJlc29sdXRpb25faCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiNzbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBiZWZvcmUgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG4gICAgICAgICAgaWYgKGFkZHJlc3MgPT09IDAgJiYgdGhpcy4jaXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvKSkge1xuICAgICAgICAgICAgW2FkZHJlc3MsIHRoaXMuI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2tdID0gdGhpcy4jZ2V0U2Nhbm5lckFkZHJlc3ModGhpcy4jb2NyVHlwZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiNzbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBhZnRlciAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcblxuICAgICAgICAgIC8vIGNhcmQgbm90IGRldGVjdGVkXG4gICAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy4jaXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcykpKSB7XG4gICAgICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLkNBUkRfREVURUNUKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy4jaW5Qcm9ncmVzc1N0ZXAgPT09IElOX1BST0dSRVNTLkNBUkRfREVURUNUKSB7XG4gICAgICAgICAgICAvLyBmYWxsYmFjayBjYXNlIOyduOuTr1xuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICAvLyBpZiAocmVzdWx0ICE9PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnN0IFByZXZJbWFnZSA9IGdldFByZXZJbWFnZSgpO1xuICAgICAgICAgICAgLy8gICBNb2R1bGUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgUHJldkltYWdlKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29uc3QgW29jclJlc3VsdCwgaW1nRGF0YVVybCwgbWFza0ltYWdlLCBzc2FSZXN1bHRdID0gYXdhaXQgdGhpcy4jc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCB0aGlzLiNvY3JUeXBlLCB0aGlzLiNzc2FNb2RlKTtcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgaWYgKG9jclJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuI3NzYU1vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiEhISBzc2FSZXRyeUNvdW50IDogXCIgKyB0aGlzLiNzc2FSZXRyeUNvdW50ICsgXCIgISEhXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbV0FSTl0gU1NBIE1PREUgaXMgdHJ1ZS4gYnV0LCBzc2FSZXN1bHQgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc3NhUmVzdWx0ID09PSBcIkZBS0VcIikge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuI3NzYVJldHJ5Q291bnQgPCB0aGlzLiNvcHRpb25zLnNzYU1heFJldHJ5Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIhISEgW1JFVFJZKytdIEZBS0UsIGJ1dCByZXRyeSBjb3VudCBpcyBub3QgZXhjZWVkIDogXCIgKyB0aGlzLiNzc2FSZXRyeUNvdW50ICsgXCIgISEhXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzc2FSZXRyeUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiISEhIFtNQVggUkVUUlkgRVhDRUVEXSBGQUtFLCBhbmQgcmV0cnkgY291bnQgaXMgZXhjZWVkIDogXCIgKyB0aGlzLiNzc2FSZXRyeUNvdW50ICsgXCIgISEhXCIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXN1bHQgOiAke29jclJlc3VsdH1gKTtcbiAgICAgICAgICAgICAgdGhpcy4jb25TdWNjZXNzUHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgb2NyX3R5cGU6IHRoaXMuI29jclR5cGUsXG4gICAgICAgICAgICAgICAgb2NyX2RhdGE6IHBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLiNvY3JUeXBlLCB0aGlzLiNzc2FNb2RlLCBvY3JSZXN1bHQsIHNzYVJlc3VsdCwgdGhpcy4jc3NhUmV0cnlDb3VudCksXG4gICAgICAgICAgICAgICAgb2NyX29yaWdpbl9pbWFnZTogaW1nRGF0YVVybCxcbiAgICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogbWFza0ltYWdlLFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICB0aGlzLiNjbGVhckludGVydmFsVGltZXJzKCk7ICAvLyBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgICAgICAgZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlO1xuICAgICAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jcmVjb3ZlcnlTY2FuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDYXJkIGRldGVjdGlvbiBlcnJvcic7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgdGhpcy4jb25GYWlsdXJlUHJvY2VzcyhcIkU1ODBcIiwgZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0aGlzLiNpbnRlcnZhbExvY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSwgMSk7XG4gICAgfSk7XG4gIH1cblxuICAjb25TdWNjZXNzUHJvY2VzcyhyZXZpZXdfcmVzdWx0KSB7XG4gICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLk9DUl9TVUNDRVNTKTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgXCJyZXN1bHRfY29kZVwiOiBcIk4xMDBcIixcbiAgICAgICAgXCJyZXN1bHRfbWVzc2FnZVwiOiBcIk9LLlwiXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiBcInN1Y2Nlc3NcIixcbiAgICAgIHJldmlld19yZXN1bHQ6IHJldmlld19yZXN1bHQsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLiNvblN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuI29uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgdGhpcy4jb25TdWNjZXNzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbV0FSTl0gb25TdWNjZXNzIGNhbGxiYWNrIGlzIG51bGwsIHNvIHNraXAgdG8gc2VuZCByZXN1bHRcIik7XG4gICAgfVxuICB9XG5cbiAgI29uRmFpbHVyZVByb2Nlc3MocmVzdWx0Q29kZSwgZSwgZXJyb3JNZXNzYWdlKSB7XG4gICAgdGhpcy4jY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuT0NSX0ZBSUxFRCk7XG5cbiAgICBsZXQgZXJyb3JfZGV0YWlsID0gXCJcIjtcbiAgICBpZiAoZT8udG9TdHJpbmcoKSkgZXJyb3JfZGV0YWlsICs9IGUudG9TdHJpbmcoKTtcbiAgICBpZiAoZT8uc3RhY2spIGVycm9yX2RldGFpbCArPSBlLnN0YWNrO1xuXG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogcmVzdWx0Q29kZSxcbiAgICAgICAgXCJyZXN1bHRfbWVzc2FnZVwiOiBlcnJvck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IFwiZmFpbGVkXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiB7XG4gICAgICAgIG9jcl90eXBlOiB0aGlzLiNvY3JUeXBlLFxuICAgICAgICBlcnJvcl9kZXRhaWw6IGVycm9yX2RldGFpbCxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuI29uRmFpbHVyZSkge1xuICAgICAgdGhpcy4jb25GYWlsdXJlKHJlc3VsdCk7XG4gICAgICB0aGlzLiNvbkZhaWx1cmUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltXQVJOXSBvbkZhaWx1cmUgY2FsbGJhY2sgaXMgbnVsbCwgc28gc2tpcCB0byBzZW5kIHJlc3VsdFwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyAjc3RhcnRTY2FuKCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGF3YWl0IHRoaXMuI2xvYWRSZXNvdXJjZXMoKTtcbiAgICBhd2FpdCB0aGlzLiNwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgIGF3YWl0IHRoaXMuI3N0YXJ0U2NhbkltcGwoKTtcbiAgICBjb25zb2xlLmxvZyhcIlNDQU4gRU5EXCIpO1xuICB9XG4gIGFzeW5jICNyZWNvdmVyeVNjYW4oKSB7XG4gICAgY29uc29sZS5sb2coXCIhISEgUkVDT1ZFUlkgU0NBTiAhISFcIik7XG4gICAgdGhpcy4jcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIGF3YWl0IHRoaXMuI3N0YXJ0U2NhbigpO1xuICB9XG4gIHN0b3BTY2FuKCkge1xuICAgIHRoaXMuI2NsZWFySW50ZXJ2YWxUaW1lcnMoKTtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgICAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9XG4gIHN0b3BTdHJlYW0oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy4jcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmICh0aGlzLiNzdHJlYW0pIHtcbiAgICAgIHRoaXMuI3N0cmVhbS5zdG9wICYmIHRoaXMuI3N0cmVhbS5zdG9wKCk7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy4jc3RyZWFtLmdldFRyYWNrcyAmJiB0aGlzLiNzdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICBjb25zb2xlLmRlYnVnKCdDYXJkU2NhbiNzdG9wU3RyZWFtJywgdHJhY2tzKTtcbiAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFja3MuZm9yRWFjaCgodHJhY2spID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLiNzdHJlYW0gPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiog66mU66qo66asIGFsbG9jYXRpb24gZnJlZSDtlajsiJggKi9cbiAgY2xlYW51cCgpIHtcbiAgICB0aGlzLiNkZXN0cm95U2Nhbm5lckFkZHJlc3MoKTtcbiAgICB0aGlzLiNkZXN0cm95QnVmZmVyKCk7XG4gICAgdGhpcy4jZGVzdHJveVByZXZJbWFnZSgpO1xuICAgIHRoaXMuI2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCk7XG4gIH1cblxuICAjY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIGlmICh0aGlzLiNjYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcik7XG4gICAgICB0aGlzLiNjYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAjY2xlYXJJbnRlcnZhbFRpbWVycygpIHtcbiAgICBpZiAodGhpcy4jaW50ZXJ2YWxUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLiNpbnRlcnZhbFRpbWVyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiISEhIENMRUFSIElOVEVSVkFMICEhISFcIilcbiAgICAgIHRoaXMuI2ludGVydmFsVGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VC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
