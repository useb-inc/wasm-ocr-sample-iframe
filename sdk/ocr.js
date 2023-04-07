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
    maskBoxWrap
  } = detector.getOCRElements();
  if (!ocr) new Error("ocr div element is not exist");
  if (videoWrap) videoWrap.remove();
  if (guideBoxWrap) guideBoxWrap.remove();
  if (video) video.remove();
  if (canvas) canvas.remove();
  if (rotationCanvas) rotationCanvas.remove();
  if (guideBox) guideBox.remove();
  if (maskBoxWrap) maskBoxWrap.remove();
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
  _classPrivateFieldSet(this, _ocr, ocr);
  _classPrivateFieldSet(this, _canvas, canvas);
  _classPrivateFieldSet(this, _rotationCanvas, rotationCanvas);
  _classPrivateFieldSet(this, _video, video);
  _classPrivateFieldSet(this, _videoWrap, videoWrap);
  _classPrivateFieldSet(this, _guideBox, guideBox);
  _classPrivateFieldSet(this, _guideBoxWrap, guideBoxWrap);
  _classPrivateFieldSet(this, _maskBoxWrap, maskBoxWrap);
  return {
    ocr,
    canvas,
    rotationCanvas,
    video,
    videoWrap,
    guideBox,
    guideBoxWrap,
    maskBoxWrap
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
      ocr,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJPQ1JFbmdpbmUiLCJpbnN0YW5jZSIsIklOX1BST0dSRVNTIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVCIsIk9DUl9SRUNPR05JWkUiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9GQUlMRUQiLCJfbGljZW5zZSIsIldlYWtNYXAiLCJfb2NyVHlwZSIsIl9zc2FNb2RlIiwiX3NzYVJldHJ5Q291bnQiLCJfb25TdWNjZXNzIiwiX29uRmFpbHVyZSIsIl9vY3JUeXBlTGlzdCIsIl9vY3IiLCJfY2FudmFzIiwiX3JvdGF0aW9uQ2FudmFzIiwiX3ZpZGVvIiwiX3ZpZGVvV3JhcCIsIl9ndWlkZUJveCIsIl9ndWlkZUJveFdyYXAiLCJfbWFza0JveFdyYXAiLCJfQnVmZmVyIiwiX3Jlc3VsdEJ1ZmZlciIsIl9QcmV2SW1hZ2UiLCJfc3RyaW5nT25XYXNtSGVhcCIsIl9jYW1TZXRDb21wbGV0ZSIsIl9yZXNvbHV0aW9uV2lkdGgiLCJfcmVzb2x1dGlvbkhlaWdodCIsIl92aWRlb1dpZHRoIiwiX3ZpZGVvSGVpZ2h0IiwiX3Jlc291cmNlc0xvYWRlZCIsIl9pbnRlcnZhbFRpbWVyIiwiX2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQiLCJfc3RyZWFtIiwiX2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2siLCJfZmFjaW5nTW9kZUNvbnN0cmFpbnQiLCJfdWlPcmllbnRhdGlvbiIsIl9wcmV2VWlPcmllbnRhdGlvbiIsIl92aWRlb09yaWVudGF0aW9uIiwiX3Rocm90dGxpbmdSZXNpemVUaW1lciIsIl90aHJvdHRsaW5nUmVzaXplRGVsYXkiLCJfbWF4UmV0cnlDb3VudEdldEFkZHJlc3MiLCJfcmV0cnlDb3VudEdldEFkZHJlc3MiLCJfZGV2aWNlSW5mbyIsIl9pc1JvdGF0ZWQ5MG9yIiwiX2luUHJvZ3Jlc3NTdGVwIiwiX2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSIsIl9pbnRlcnZhbExvY2siLCJfb3B0aW9ucyIsIl93aW5kb3dFdmVudEJpbmQiLCJXZWFrU2V0IiwiX3NsZWVwIiwiX2Jsb2JUb0Jhc2UiLCJfZ2V0U3RyaW5nT25XYXNtSGVhcCIsIl9zZXRWaWRlb1Jlc29sdXRpb24iLCJfZ2V0U2Nhbm5lckFkZHJlc3MiLCJfZ2V0QnVmZmVyIiwiX2dldEltYWdlQmFzZSIsIl9kZXN0cm95QnVmZmVyIiwiX2Rlc3Ryb3lQcmV2SW1hZ2UiLCJfZGVzdHJveVN0cmluZ09uV2FzbUhlYXAiLCJfZGVzdHJveVNjYW5uZXJBZGRyZXNzIiwiX2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSIsIl9nZXRSb3RhdGlvbkRlZ3JlZSIsIl9nZXRNaXJyb3JNb2RlIiwiX2Nyb3BJbWFnZUZyb21WaWRlbyIsIl9yb3RhdGUiLCJfaXNDYXJkYm94RGV0ZWN0ZWQiLCJfc3RhcnRSZWNvZ25pdGlvbiIsIl9zZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyIiwiX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIiwiX3NldFN0eWxlIiwiX2NoYW5nZVN0YWdlIiwiX2dldElucHV0RGV2aWNlcyIsIl9jaGVja1VJT3JpZW50YXRpb24iLCJfc2V0dXBEb21FbGVtZW50cyIsIl9zZXR1cFZpZGVvIiwiX2FkanVzdFN0eWxlIiwiX2Nsb3NlQ2FtZXJhIiwiX2xvYWRSZXNvdXJjZXMiLCJfc3RhcnRTY2FuSW1wbCIsIl9vblN1Y2Nlc3NQcm9jZXNzIiwiX29uRmFpbHVyZVByb2Nlc3MiLCJfc3RhcnRTY2FuIiwiX3JlY292ZXJ5U2NhbiIsIl9jbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIiLCJfY2xlYXJJbnRlcnZhbFRpbWVycyIsIlVzZUJPQ1IiLCJjb25zdHJ1Y3RvciIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsImZyYW1lQm9yZGVyU3R5bGUiLCJ3aWR0aCIsInN0eWxlIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RpbmciLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJtYXNrX2ZyYW1lIiwiY2xpcF9mcmFtZSIsInJlc291cmNlQmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRldmljZUxhYmVsIiwidmlkZW9UYXJnZXRJZCIsInJvdGF0aW9uRGVncmVlIiwibWlycm9yTW9kZSIsInNzYU1heFJldHJ5Q291bnQiLCJpbml0Iiwic2V0dGluZ3MiLCJsaWNlbnNlS2V5IiwiRXJyb3IiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJfIiwibWVyZ2UiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJpbml0aWFsaXplZCIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZXQiLCJfd2luZG93RXZlbnRCaW5kMiIsImNhbGwiLCJnZXRPc1ZlcnNpb24iLCJjb25zb2xlIiwiZGVidWciLCJvc1NpbXBsZSIsInN0YXJ0T0NSIiwidHlwZSIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJpbmRleE9mIiwiX3N0YXJ0U2NhbjIiLCJlIiwiZXJyb3IiLCJjbGVhbnVwIiwiX2Nsb3NlQ2FtZXJhMiIsInN0b3BTY2FuIiwiX2NsZWFySW50ZXJ2YWxUaW1lcnMyIiwiY2FudmFzIiwiZ2V0T0NSRWxlbWVudHMiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpbGxSZWFkRnJlcXVlbnRseSIsImNsZWFyUmVjdCIsImhlaWdodCIsInN0b3BTdHJlYW0iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0b3AiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJsZW5ndGgiLCJmb3JFYWNoIiwidHJhY2siLCJfZGVzdHJveVNjYW5uZXJBZGRyZXNzMiIsIl9kZXN0cm95QnVmZmVyMiIsIl9kZXN0cm95UHJldkltYWdlMiIsIl9kZXN0cm95U3RyaW5nT25XYXNtSGVhcDIiLCJfdGhpczIiLCJfdGhpc18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJza2lwVG91Y2hBY3Rpb25mb3Jab29tIiwiZXYiLCJ0b3VjaGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uYmVmb3JldW5sb2FkIiwiaGFuZGxlUmVzaXplIiwiX3JlZiIsImxvZyIsImFwcGx5IiwiYXJndW1lbnRzIiwic2V0VGltZW91dCIsIl9zbGVlcDIiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2Jsb2JUb0Jhc2UyIiwiYmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiX2dldFN0cmluZ09uV2FzbUhlYXAyIiwibGVuZ3RoQnl0ZXMiLCJsZW5ndGhCeXRlc1VURjgiLCJfbWFsbG9jIiwic3RyaW5nVG9VVEY4IiwiX3NldFZpZGVvUmVzb2x1dGlvbjIiLCJ2aWRlb0VsZW1lbnQiLCJpc1N1cHBvcnRlZFJlc29sdXRpb24iLCJyZXNvbHV0aW9uVGV4dCIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsIl9jaGFuZ2VTdGFnZTIiLCJzcmNPYmplY3QiLCJfZ2V0U2Nhbm5lckFkZHJlc3MyIiwib2NyVHlwZSIsImluY2x1ZGVzIiwiYWRkcmVzcyIsImRlc3Ryb3lDYWxsYmFjayIsInN0cmluZ09uV2FzbUhlYXAiLCJnZXRJRENhcmRTY2FubmVyIiwiZGVzdHJveUlEQ2FyZFNjYW5uZXIiLCJnZXRQYXNzcG9ydFNjYW5uZXIiLCJkZXN0cm95UGFzc3BvcnRTY2FubmVyIiwiZ2V0QWxpZW5TY2FubmVyIiwiZGVzdHJveUFsaWVuU2Nhbm5lciIsImdldENyZWRpdFNjYW5uZXIiLCJkZXN0cm95Q3JlZGl0U2Nhbm5lciIsIl90aGlzJHJldHJ5Q291bnRHZXRBZCIsIl90aGlzJHJldHJ5Q291bnRHZXRBZDIiLCJfZ2V0QnVmZmVyMiIsIl9nZXRJbWFnZUJhc2UyIiwiX3giLCJfeDIiLCJfeDMiLCJfZ2V0SW1hZ2VCYXNlMyIsIm1hc2tNb2RlIiwiY3JvcE1vZGUiLCJlbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UiLCJqcGdTaXplIiwiZ2V0RW5jb2RlZEpwZ1NpemUiLCJqcGdQb2ludGVyIiwiZ2V0RW5jb2RlZEpwZ0J1ZmZlciIsInJlc3VsdFZpZXciLCJVaW50OEFycmF5IiwiSEVBUDgiLCJidWZmZXIiLCJCbG9iIiwiZGVzdHJveUVuY29kZWRKcGciLCJfZnJlZSIsIl9pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUyIiwiX2dldFJvdGF0aW9uRGVncmVlMiIsIl9nZXRNaXJyb3JNb2RlMiIsIl9jcm9wSW1hZ2VGcm9tVmlkZW8yIiwiX2Nyb3BJbWFnZUZyb21WaWRlbzMiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwicm90YXRpb25DYW52YXMiLCJndWlkZUJveCIsImNhbGNDYW52YXMiLCJjYWxjVmlkZW9XaWR0aCIsImNhbGNWaWRlb0hlaWdodCIsImNhbGNWaWRlb0NsaWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYWxjVmlkZW9DbGllbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCIsImNhbGNHdWlkZUJveENsaWVudEhlaWdodCIsImNhbGNWaWRlb09yaWVudGF0aW9uIiwiY2FsY01heFNXaWR0aCIsImNhbGNNYXhTSGVpZ2h0Iiwic3giLCJzeSIsInJhdGlvIiwic1dpZHRoIiwiTWF0aCIsIm1pbiIsInJvdW5kIiwic0hlaWdodCIsImNhbGNDb250ZXh0IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsImltZ0RhdGFVcmwiLCJ0b0RhdGFVUkwiLCJfcm90YXRlMiIsIl94NCIsIl94NSIsIl94NiIsIl9yb3RhdGUzIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9pc0NhcmRib3hEZXRlY3RlZDIiLCJfeDciLCJfaXNDYXJkYm94RGV0ZWN0ZWQzIiwic2V0IiwiZGF0YSIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfc3RhcnRSZWNvZ25pdGlvbjIiLCJfeDgiLCJfeDkiLCJfeDEwIiwiX3N0YXJ0UmVjb2duaXRpb24zIiwic3NhTW9kZSIsIm9jclJlc3VsdCIsInNzYVJlc3VsdCIsInJlc3VsdEJ1ZmZlciIsInNjYW5JRENhcmQiLCJzY2FuUGFzc3BvcnQiLCJzY2FuQWxpZW4iLCJzY2FuQ3JlZGl0Iiwic2NhblRydXRoIiwib3JpZ2luSW1hZ2UiLCJtYXNrSW1hZ2UiLCJfc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcjIiLCJfdGhpczMiLCJfY2xlYXJDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyMiIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbjIiLCJfcHJvY2VlZENhbWVyYVBlcm1pc3Npb24zIiwiaXNQYXNzcG9ydCIsIl9zZXR1cFZpZGVvMiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJfYWRqdXN0U3R5bGUyIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwiX29uRmFpbHVyZVByb2Nlc3MyIiwiX3NldFN0eWxlMiIsImVsIiwiT2JqZWN0IiwiYXNzaWduIiwidmFsIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiX2dldElucHV0RGV2aWNlczIiLCJfeDExIiwiX3gxMiIsIl9nZXRJbnB1dERldmljZXMzIiwia2luZCIsImxhYmVsIiwibWVkaWFEZXZpY2VzIiwiZGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ2aWRlb0RldmljZXMiLCJmaWx0ZXIiLCJkZXZpY2UiLCJjb25jYXQiLCJnZXRDYXBhYmlsaXRpZXMiLCJfY2FwJGZhY2luZ01vZGUiLCJjYXAiLCJmYWNpbmdNb2RlIiwiX2NoZWNrVUlPcmllbnRhdGlvbjIiLCJjdXJyZW50IiwiZ2V0VUlPcmllbnRhdGlvbiIsIm9jciIsImlzQ2hhbmdlZCIsIl9zZXR1cERvbUVsZW1lbnRzMiIsInZpZGVvV3JhcCIsImd1aWRlQm94V3JhcCIsIm1hc2tCb3hXcmFwIiwicmVtb3ZlIiwib2NyU3R5bGUiLCJ3cmFwU3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwib3ZlcmZsb3ciLCJzZXRBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInZpZGVvU3R5bGUiLCJyb3RhdGVDc3MiLCJtaXJyb3JDc3MiLCJyb3RhdGVBbmRNaXJyb3JDc3MiLCJfb2JqZWN0U3ByZWFkIiwiY2FudmFzU3R5bGUiLCJib3JkZXIiLCJyaWdodCIsInRvcCIsIl94MTMiLCJfc2V0dXBWaWRlbzMiLCJkZXZpY2VJZExpc3QiLCJtYXAiLCJkZXZpY2VJZCIsImNvbnN0cmFpbnRXaWR0aCIsImNvbnN0cmFpbnRIZWlnaHQiLCJpZGVhbCIsImNvbnN0cmFpbnRzIiwiYXVkaW8iLCJ6b29tIiwiZm9jdXNNb2RlIiwid2hpdGVCYWxhbmNlTW9kZSIsInN0cmVhbSIsImdldFVzZXJNZWRpYSIsImJhc2VXaWR0aCIsImJhc2VIZWlnaHQiLCJzY2FubmVyRnJhbWVSYXRpbyIsImd1aWRlQm94V2lkdGgiLCJndWlkZUJveEhlaWdodCIsIm5ld1ZpZGVvV2lkdGgiLCJuZXdWaWRlb0hlaWdodCIsImNhbGNPY3JDbGllbnRXaWR0aCIsImNhbGNPY3JDbGllbnRIZWlnaHQiLCJndWlkZUJveFJhdGlvQnlXaWR0aCIsInZpZGVvUmF0aW9CeUhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hc2tCb3hJbm5lciIsInF1ZXJ5U2VsZWN0b3IiLCJOdW1iZXIiLCJfbG9hZFJlc291cmNlczIiLCJfbG9hZFJlc291cmNlczMiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwicmVnZXgiLCJzb3VyY2UiLCJyZXBsYWNlIiwiZXZhbCIsIl9zdGFydFNjYW5JbXBsMiIsIl90aGlzNCIsInJlamVjdCIsImRldGVjdGVkIiwic2V0SW50ZXJ2YWwiLCJyZXNvbHV0aW9uX3ciLCJyZXNvbHV0aW9uX2giLCJfY2xhc3NQcml2YXRlRmllbGREZXN0cnVjdHVyZVNldCIsIl90aGlzJHNzYVJldHJ5Q291bnQiLCJfdGhpcyRzc2FSZXRyeUNvdW50MiIsIl9vblN1Y2Nlc3NQcm9jZXNzMiIsIm9jcl90eXBlIiwib2NyX2RhdGEiLCJwYXJzZU9jclJlc3VsdCIsIm9jcl9vcmlnaW5faW1hZ2UiLCJvY3JfbWFza2luZ19pbWFnZSIsIl9yZWNvdmVyeVNjYW4yIiwicmV2aWV3X3Jlc3VsdCIsImFwaV9yZXNwb25zZSIsInJlc3VsdENvZGUiLCJlcnJvcl9kZXRhaWwiLCJzdGFjayIsIl9zdGFydFNjYW4zIiwiX3JlY292ZXJ5U2NhbjMiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIl0sInNvdXJjZXMiOlsib2NyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZXRlY3RvciBmcm9tICcuL2hlbHBlcnMvZGV0ZWN0b3IuanMnO1xuaW1wb3J0IHBhcnNlciBmcm9tICcuL2hlbHBlcnMvcGFyc2VyLmpzJztcblxubGV0IE9DUkVuZ2luZTtcbmxldCBpbnN0YW5jZTtcblxuY29uc3QgSU5fUFJPR1JFU1MgPSB7XG4gIE5PVF9SRUFEWTogJ25vdF9yZWFkeScsXG4gIFJFQURZOiAncmVhZHknLFxuICBDQVJEX0RFVEVDVDogJ2RldGVjdGluZycsXG4gIE9DUl9SRUNPR05JWkU6ICdyZWNvZ25pemluZycsXG4gIE9DUl9TVUNDRVNTOiAnZGV0ZWN0X3N1Y2Nlc3MnLFxuICBPQ1JfRkFJTEVEOiAnZGV0ZWN0X2ZhaWxlZCcsXG59XG5cbmNsYXNzIFVzZUJPQ1Ige1xuICAvKiogcHVibGljIHByb3BlcnRpZXMgKi9cbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAjbGljZW5zZTtcbiAgI29jclR5cGUgPSBudWxsO1xuICAjc3NhTW9kZSA9IGZhbHNlO1xuICAjc3NhUmV0cnlDb3VudCA9IDA7XG4gICNvblN1Y2Nlc3MgPSBudWxsO1xuICAjb25GYWlsdXJlID0gbnVsbDtcbiAgI29jclR5cGVMaXN0ID0gW1xuICAgICdpZGNhcmQnLFxuICAgICdkcml2ZXInLFxuICAgICdwYXNzcG9ydCcsXG4gICAgJ2ZvcmVpZ24tcGFzc3BvcnQnLFxuICAgICdhbGllbicsXG4gICAgJ2NyZWRpdCcsXG4gICAgJ2lkY2FyZC1zc2EnLFxuICAgICdkcml2ZXItc3NhJyxcbiAgICAncGFzc3BvcnQtc3NhJyxcbiAgICAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLFxuICAgICdhbGllbi1zc2EnLFxuICAgICdjcmVkaXQtc3NhJyxcbiAgXTtcbiAgI29jcjtcbiAgI2NhbnZhcztcbiAgI3JvdGF0aW9uQ2FudmFzO1xuICAjdmlkZW87XG4gICN2aWRlb1dyYXA7XG4gICNndWlkZUJveDtcbiAgI2d1aWRlQm94V3JhcDtcbiAgI21hc2tCb3hXcmFwO1xuICAjQnVmZmVyID0gbnVsbDtcbiAgI3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gICNQcmV2SW1hZ2UgPSBudWxsO1xuICAjc3RyaW5nT25XYXNtSGVhcCA9IG51bGw7XG4gICNjYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuICAjcmVzb2x1dGlvbldpZHRoID0gMDtcbiAgI3Jlc29sdXRpb25IZWlnaHQgPSAwO1xuICAjdmlkZW9XaWR0aCA9IDA7XG4gICN2aWRlb0hlaWdodCA9IDA7XG4gICNyZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgI2ludGVydmFsVGltZXI7XG4gICNjYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyO1xuICAjcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQ7XG4gICNzdHJlYW07XG4gICNkZXN0cm95U2Nhbm5lckNhbGxiYWNrID0gbnVsbDtcbiAgI2ZhY2luZ01vZGVDb25zdHJhaW50ID0gJ2Vudmlyb25tZW50JztcbiAgI3VpT3JpZW50YXRpb24gPSAnJztcbiAgI3ByZXZVaU9yaWVudGF0aW9uID0gJyc7XG4gICN2aWRlb09yaWVudGF0aW9uID0gJyc7XG4gICN0aHJvdHRsaW5nUmVzaXplVGltZXIgPSBudWxsO1xuICAjdGhyb3R0bGluZ1Jlc2l6ZURlbGF5ID0gNTAwO1xuICAjbWF4UmV0cnlDb3VudEdldEFkZHJlc3MgPSAzMDA7ICAgICAgIC8vIOyehOyLnFxuICAjcmV0cnlDb3VudEdldEFkZHJlc3MgPSAwOyAgICAgICAgICAgIC8vIOyehOyLnFxuICAjZGV2aWNlSW5mbztcbiAgI2lzUm90YXRlZDkwb3IyNzAgPSBmYWxzZTtcbiAgI2luUHJvZ3Jlc3NTdGVwID0gSU5fUFJPR1JFU1MuTk9UX1JFQURZO1xuICAjaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICNpbnRlcnZhbExvY2sgPSBmYWxzZTtcblxuICAvKiogRGVmYXVsdCBvcHRpb25zICovXG4gICNvcHRpb25zID0ge1xuICAgIHNob3dDbGlwRnJhbWU6IGZhbHNlLFxuICAgIHNob3dDYW52YXNQcmV2aWV3OiBmYWxzZSxcbiAgICBmcmFtZUJvcmRlclN0eWxlOiB7XG4gICAgICB3aWR0aDogMTAsXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcbiAgICAgIHJhZGl1czogMjAsXG4gICAgICBub3RfcmVhZHk6ICcjMDAwMDAwJywgLy8g6rKA7KCVXG4gICAgICByZWFkeTogJyNiOGI4YjgnLCAvLyDtmozsg4lcbiAgICAgIGRldGVjdGluZzogJyNmZjk1MWMnLCAvLyDso7ztmalcbiAgICAgIGRldGVjdF9mYWlsZWQ6ICcjRkExMTNEJywgLy8g67mo6rCVXG4gICAgICBkZXRlY3Rfc3VjY2VzczogJyM1Y2I4NWMnLCAvLyDstIjroZ1cbiAgICAgIG1hc2tfZnJhbWU6ICcjMjAyMDIzJywgICAgICAvLyDri6Ttgazqt7jroIjsnbQgKO2IrOuqheuPhOuKlCDsiJjsoJXrtojqsIAgZmbroZwg6rOg7KCVKVxuICAgICAgY2xpcF9mcmFtZTogJyNmZjAwYmYnLCAgICAgIC8vIOuUpe2NvO2UjCAo7IiY7KCV67aI6rCAKVxuICAgIH0sXG4gICAgcmVzb3VyY2VCYXNlVXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICBkZXZpY2VMYWJlbDogJycsXG4gICAgdmlkZW9UYXJnZXRJZDogJycsXG4gICAgcm90YXRpb25EZWdyZWU6IDAsXG4gICAgbWlycm9yTW9kZTogZmFsc2UsXG4gICAgc3NhTWF4UmV0cnlDb3VudDogMCxcbiAgfTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBpbml0KHNldHRpbmdzKSB7XG4gICAgaWYgKCEhIXNldHRpbmdzLmxpY2Vuc2VLZXkpIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBrZXkgaXMgZW1wdHknKTtcblxuICAgIHRoaXMuI2xpY2Vuc2UgPSBzZXR0aW5ncy5saWNlbnNlS2V5O1xuXG4gICAgdGhpcy4jb3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuI29wdGlvbnMsIHNldHRpbmdzKTtcblxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy4jd2luZG93RXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLiNkZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICBjb25zb2xlLmRlYnVnKCd0aGlzLiNkZXZpY2VJbmZvLm9zU2ltcGxlIDo6ICcgKyB0aGlzLiNkZXZpY2VJbmZvLm9zU2ltcGxlKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN0YXJ0T0NSKHR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG4gICAgaWYgKCEhIXR5cGUgfHwgISEhb25TdWNjZXNzIHx8ICEhIW9uRmFpbHVyZSkge1xuICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlclwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNvY3JUeXBlID0gdHlwZTtcbiAgICAgIHRoaXMuI3NzYU1vZGUgPSAodGhpcy4jb2NyVHlwZS5pbmRleE9mKCctc3NhJykgPiAtMSk7XG4gICAgICB0aGlzLiNvblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG4gICAgICB0aGlzLiNvbkZhaWx1cmUgPSBvbkZhaWx1cmU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbml0aWFsaXplZCEnKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy4jc3RhcnRTY2FuKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgaW4gc3RhcnRPQ1IoKSA6ICcgKyBlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgdGhpcy4jb25TdWNjZXNzID0gbnVsbDtcbiAgICAgIHRoaXMuI29uRmFpbHVyZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIHByaXZhdGUgbWV0aG9kcyAqL1xuICAjd2luZG93RXZlbnRCaW5kKCkge1xuICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG5cbiAgICBpZiAoL2lwaG9uZXxpcG9kfGlwYWQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIGNvbnN0IHNraXBUb3VjaEFjdGlvbmZvclpvb20gPSAoZXYpID0+IHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAndG91Y2hzdGFydCcsXG4gICAgICAgIHNraXBUb3VjaEFjdGlvbmZvclpvb20sXG4gICAgICAgIHsgcGFzc2l2ZTogZmFsc2UgfVxuICAgICAgKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSxcbiAgICAgICAgeyBwYXNzaXZlOiBmYWxzZSB9XG4gICAgICApO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICd0b3VjaGVuZCcsXG4gICAgICAgIHNraXBUb3VjaEFjdGlvbmZvclpvb20sXG4gICAgICAgIHsgcGFzc2l2ZTogZmFsc2UgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpc18uY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghX3RoaXNfLiNpc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUpIHtcbiAgICAgICAgX3RoaXNfLiNpc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSB0cnVlO1xuICAgICAgICBfdGhpc18uI3Rocm90dGxpbmdSZXNpemVUaW1lciA9IG51bGw7XG4gICAgICAgIGNvbnNvbGUubG9nKCchISEgUkVTSVpFIEVWRU5UICEhIScpO1xuICAgICAgICBpZiAoISEhX3RoaXNfLiNvY3JUeXBlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgIF90aGlzXy4jaXNJblByb2dyZXNzSGFuZGxlUmVzaXplID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IF90aGlzXy5zdGFydE9DUihfdGhpc18uI29jclR5cGUsIHRoaXMuI29uU3VjY2VzcywgdGhpcy4jb25GYWlsdXJlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCchISEgU0tJUCBSRVNJWkUgRVZFTlQgLSBwcmV2aW91cyByZXNpemUgZXZlbnQgcHJvY2VzcyBpcyBub3QgY29tcGxldGVkIHlldCAhISEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCEhIV90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dChoYW5kbGVSZXNpemUsIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZURlbGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAjc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxuICAjYmxvYlRvQmFzZTY0KGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pO1xuICB9XG4gIC8qKiDrnbzsnbTshLzsiqQg7YKk66W8IGhlYXAg7JeQIGFsbG9jYXRpb24gKi9cbiAgI2dldFN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKCEhIXRoaXMuI2xpY2Vuc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkxpY2Vuc2UgS2V5IGlzIGVtcHR5XCIpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGhCeXRlcyA9IE9DUkVuZ2luZS5sZW5ndGhCeXRlc1VURjgodGhpcy4jbGljZW5zZSkgKyAxO1xuICAgIHRoaXMuI3N0cmluZ09uV2FzbUhlYXAgPSBPQ1JFbmdpbmUuX21hbGxvYyhsZW5ndGhCeXRlcyk7XG4gICAgT0NSRW5naW5lLnN0cmluZ1RvVVRGOCh0aGlzLiNsaWNlbnNlLCB0aGlzLiNzdHJpbmdPbldhc21IZWFwLCBsZW5ndGhCeXRlcyk7XG4gICAgcmV0dXJuIHRoaXMuI3N0cmluZ09uV2FzbUhlYXA7XG4gIH1cbiAgI3NldFZpZGVvUmVzb2x1dGlvbih2aWRlb0VsZW1lbnQpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2U7XG4gICAgbGV0IHJlc29sdXRpb25UZXh0ID0gJ25vdCByZWFkeSc7XG5cbiAgICBpZiAoIXRoaXMuI2NhbVNldENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4geyBpc1N1cHBvcnRlZFJlc29sdXRpb24sIHJlc29sdXRpb25UZXh0IH07XG4gICAgfVxuXG4gICAgaWYgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMCkge1xuICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgIHJldHVybiB7IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiwgcmVzb2x1dGlvblRleHQgfTtcbiAgICB9XG5cbiAgICByZXNvbHV0aW9uVGV4dCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoICsgJ3gnICsgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxMDgwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTkyMCkgfHxcbiAgICAgICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTkyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEwODApXG4gICAgKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEyODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSA3MjApIHx8XG4gICAgICAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDcyMCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDEyODApXG4gICAgKSB7XG4gICAgICBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuI3ZpZGVvV2lkdGggPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcbiAgICB0aGlzLiN2aWRlb0hlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICByZXR1cm4geyBpc1N1cHBvcnRlZFJlc29sdXRpb24sIHJlc29sdXRpb25UZXh0IH07XG4gIH1cbiAgI2dldFNjYW5uZXJBZGRyZXNzKG9jclR5cGUpIHtcbiAgICBpZiAoIXRoaXMuI29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIGxldCBkZXN0cm95Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICBjb25zdCBzdHJpbmdPbldhc21IZWFwID0gdGhpcy4jZ2V0U3RyaW5nT25XYXNtSGVhcCgpO1xuXG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgLy8gT0NSXG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gT0NSRW5naW5lLmdldElEQ2FyZFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gT0NSRW5naW5lLmRlc3Ryb3lJRENhcmRTY2FubmVyKGFkZHJlc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IE9DUkVuZ2luZS5nZXRQYXNzcG9ydFNjYW5uZXIoc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICAgICAgZGVzdHJveUNhbGxiYWNrID0gKCkgPT4gT0NSRW5naW5lLmRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgICAgY2FzZSAnYWxpZW4tc3NhJzpcbiAgICAgICAgICBhZGRyZXNzID0gT0NSRW5naW5lLmdldEFsaWVuU2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBkZXN0cm95Q2FsbGJhY2sgPSAoKSA9PiBPQ1JFbmdpbmUuZGVzdHJveUFsaWVuU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgICAgYWRkcmVzcyA9IE9DUkVuZ2luZS5nZXRDcmVkaXRTY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIGRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IE9DUkVuZ2luZS5kZXN0cm95Q3JlZGl0U2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGRyZXNzID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLiNtYXhSZXRyeUNvdW50R2V0QWRkcmVzcyA9PT0gdGhpcy4jcmV0cnlDb3VudEdldEFkZHJlc3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBMaWNlbnNlIEtleVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNyZXRyeUNvdW50R2V0QWRkcmVzcysrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFthZGRyZXNzLCBkZXN0cm95Q2FsbGJhY2tdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gOiBMaWNlbnNlIElzc3Vl7J24IOqyveyasCDsl5Drn6wg6rCS7J2EIOuwm+yVhOyEnCBlcnJvciDroZzqt7jrpbwg7LCN7J2EIOyImCDsnojqsowg7JqU7LKt7ZWE7JqUICjsnoTsi5wgTuuyiCDsnbTsg4EgYWRkcmVzc+ulvCDrqrvrsJvsnLzrqbQg6rCV7KCcIOyXkOufrClcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2dldFNjYW5uZXJBZGRyZXNzRXJyb3IoKScpO1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNnZXRCdWZmZXIoKSB7XG4gICAgaWYgKCF0aGlzLiNCdWZmZXIpIHtcbiAgICAgIHRoaXMuI0J1ZmZlciA9IE9DUkVuZ2luZS5fbWFsbG9jKFxuICAgICAgICB0aGlzLiNyZXNvbHV0aW9uV2lkdGggKiB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0ICogNFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLiNyZXN1bHRCdWZmZXIpIHtcbiAgICAgIHRoaXMuI3Jlc3VsdEJ1ZmZlciA9IE9DUkVuZ2luZS5fbWFsbG9jKDI1Nik7XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy4jQnVmZmVyLCB0aGlzLiNyZXN1bHRCdWZmZXJdO1xuICB9XG5cbiAgYXN5bmMgI2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIG1hc2tNb2RlLCBjcm9wTW9kZSkge1xuICAgIHRyeSB7XG4gICAgICBPQ1JFbmdpbmUuZW5jb2RlSnBnRGV0ZWN0ZWRGcmFtZUltYWdlKGFkZHJlc3MsIG1hc2tNb2RlLCBjcm9wTW9kZSk7XG5cbiAgICAgIGNvbnN0IGpwZ1NpemUgPSBPQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ1NpemUoKTtcbiAgICAgIGNvbnN0IGpwZ1BvaW50ZXIgPSBPQ1JFbmdpbmUuZ2V0RW5jb2RlZEpwZ0J1ZmZlcigpO1xuXG4gICAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICAgIE9DUkVuZ2luZS5IRUFQOC5idWZmZXIsXG4gICAgICAgIGpwZ1BvaW50ZXIsXG4gICAgICAgIGpwZ1NpemVcbiAgICAgICk7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShyZXN1bHRWaWV3KTtcblxuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXN1bHRdLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLiNibG9iVG9CYXNlNjQoYmxvYik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignZXJyb3I6JyArIGUpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgT0NSRW5naW5lLmRlc3Ryb3lFbmNvZGVkSnBnKCk7XG4gICAgfVxuICB9XG4gIC8qKiBGcmVlIGJ1ZmZlciAqL1xuICAjZGVzdHJveUJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy4jQnVmZmVyKSB7XG4gICAgICBPQ1JFbmdpbmUuX2ZyZWUodGhpcy4jQnVmZmVyKTtcbiAgICAgIHRoaXMuI0J1ZmZlciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLiNyZXN1bHRCdWZmZXIgIT09IG51bGwpIHtcbiAgICAgIE9DUkVuZ2luZS5fZnJlZSh0aGlzLiNyZXN1bHRCdWZmZXIpO1xuICAgICAgdGhpcy4jcmVzdWx0QnVmZmVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIEZyZWUgUHJldkltYWdlIGJ1ZmZlciAqL1xuICAjZGVzdHJveVByZXZJbWFnZSgpIHtcbiAgICBpZiAodGhpcy4jUHJldkltYWdlICE9PSBudWxsKSB7XG4gICAgICBPQ1JFbmdpbmUuX2ZyZWUodGhpcy4jUHJldkltYWdlKTtcbiAgICAgIHRoaXMuI1ByZXZJbWFnZSA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBmcmVlIHN0cmluZyBoZWFwIGJ1ZmZlciAqL1xuICAjZGVzdHJveVN0cmluZ09uV2FzbUhlYXAoKSB7XG4gICAgaWYgKHRoaXMuI3N0cmluZ09uV2FzbUhlYXApIHtcbiAgICAgIE9DUkVuZ2luZS5fZnJlZSh0aGlzLiNzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgIHRoaXMuI3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogZnJlZSBzY2FubmVyIGFkZHJlc3MgKi9cbiAgI2Rlc3Ryb3lTY2FubmVyQWRkcmVzcygpIHtcbiAgICBpZiAodGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFjaykge1xuICAgICAgdGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFjaygpO1xuICAgICAgdGhpcy4jZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG4gICNpc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUodmlkZW9FbGVtZW50KSB7XG4gICAgY29uc3QgeyBpc1N1cHBvcnRlZFJlc29sdXRpb24sIHJlc29sdXRpb25UZXh0IH0gPSB0aGlzLiNzZXRWaWRlb1Jlc29sdXRpb24odmlkZW9FbGVtZW50KTtcbiAgICBpZiAoIWlzU3VwcG9ydGVkUmVzb2x1dGlvbikge1xuICAgICAgaWYgKHJlc29sdXRpb25UZXh0ICE9PSAnbm90IHJlYWR5Jykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdWaWRlbyBSZXNvbHV0aW9uKCcgKyByZXNvbHV0aW9uVGV4dCArICcpIGlzIG5vdCBTdXBwb3J0ZWQhJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1N1cHBvcnRlZFJlc29sdXRpb247XG4gIH1cbiAgI2dldFJvdGF0aW9uRGVncmVlKCkge1xuICAgIHJldHVybiAoKHRoaXMuI29wdGlvbnMucm90YXRpb25EZWdyZWUgJSAzNjApICsgMzYwKSAlIDM2MDtcbiAgfVxuICAjZ2V0TWlycm9yTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jb3B0aW9ucy5taXJyb3JNb2RlO1xuICB9XG4gIGFzeW5jICNjcm9wSW1hZ2VGcm9tVmlkZW8oKSB7XG4gICAgaWYgKCF0aGlzLiNjYW1TZXRDb21wbGV0ZSkgcmV0dXJuIFtudWxsLCBudWxsXTtcblxuICAgIGxldCBbY2FsY1Jlc29sdXRpb25fdywgY2FsY1Jlc29sdXRpb25faF0gPSBbdGhpcy4jcmVzb2x1dGlvbldpZHRoLCB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICBjb25zdCB7IHZpZGVvLCBjYW52YXMsIHJvdGF0aW9uQ2FudmFzLCBndWlkZUJveCB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcblxuICAgIC8vIHNvdXJjZSBpbWFnZSAob3IgdmlkZW8pXG4gICAgLy8g4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTXG4gICAgLy8g4pSDICAgICDilIogc3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilIPilIjilIjilIjilIgg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyBzeCAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBzSGVpZ2h0ICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uIGNhbnZhc1xuICAgIC8vIOKUgyAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgICAgICAgIOKUg+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICAgICAgICDilIMgICAg4pSKICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSDICAgICAgICAgICBzV2lkdGggICAgICAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiBkeSAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyAgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMg4pSKICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSD4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICBkeCAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiBkSGVpZ2h0IOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSDICAgICAgICAgICAgICAg4pSDIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSI4pSIICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgIGRXaWR0aCAgICAgICAgICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJtcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSlcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQvZHJhd0ltYWdlXG5cbiAgICBsZXQgY2FsY0NhbnZhcyA9IGNhbnZhcztcbiAgICBsZXQgY2FsY1ZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50V2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xuICAgIGxldCBjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCA9IGd1aWRlQm94LmNsaWVudFdpZHRoXG4gICAgbGV0IGNhbGNHdWlkZUJveENsaWVudEhlaWdodCA9IGd1aWRlQm94LmNsaWVudEhlaWdodFxuICAgIGxldCBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb247XG5cbiAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgW2NhbGNHdWlkZUJveENsaWVudFdpZHRoLCBjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHRdID0gW2NhbGNHdWlkZUJveENsaWVudEhlaWdodCwgY2FsY0d1aWRlQm94Q2xpZW50V2lkdGhdO1xuICAgICAgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW2NhbGNSZXNvbHV0aW9uX2gsIGNhbGNSZXNvbHV0aW9uX3ddO1xuICAgICAgY2FsY0NhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uID09PSAncG9ydHJhaXQnID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICAgIH1cblxuICAgIGxldCBjYWxjTWF4U1dpZHRoID0gOTk5OTk7XG4gICAgbGV0IGNhbGNNYXhTSGVpZ2h0ID0gOTk5OTk7XG5cbiAgICBpZiAodGhpcy4jdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0Jykge1xuICAgICAgaWYgKGNhbGNWaWRlb09yaWVudGF0aW9uID09PSB0aGlzLiN1aU9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIOyEuOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOyEuOuhnCBVSSAvIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDqsIDroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g7IS466GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U1dpZHRoID0gY2FsY1ZpZGVvV2lkdGg7XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzeCwgc3k7XG4gICAgY29uc3QgcmF0aW8gPSAoY2FsY1ZpZGVvV2lkdGggLyBjYWxjVmlkZW9DbGllbnRXaWR0aCk7XG4gICAgY29uc3Qgc1dpZHRoID0gTWF0aC5taW4oTWF0aC5yb3VuZChjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCAqIHJhdGlvKSwgY2FsY01heFNXaWR0aCk7XG4gICAgY29uc3Qgc0hlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0ICogcmF0aW8pLCBjYWxjTWF4U0hlaWdodCk7XG5cbiAgICBzeCA9IE1hdGgucm91bmQoKChjYWxjVmlkZW9DbGllbnRXaWR0aCAtIGNhbGNHdWlkZUJveENsaWVudFdpZHRoKSAvIDIpICogcmF0aW8pO1xuICAgIHN5ID0gTWF0aC5yb3VuZCgoKGNhbGNWaWRlb0NsaWVudEhlaWdodCAtIGNhbGNHdWlkZUJveENsaWVudEhlaWdodCkgLyAyKSAqIHJhdGlvKTtcblxuICAgIGNvbnN0IGNhbGNDb250ZXh0ID0gY2FsY0NhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlIH0pO1xuICAgIC8vIGNvbnNvbGUuZGVidWcoJ3N4LCBzeSwgc1dpZHRoKHJlc29sdXRpb25fdyksIHNIZWlnaHQocmVzb2x1dGlvbl9oKSwgdmlkZW8udmlkZW9XaWR0aCwgdmlkZW8udmlkZW9IZWlnaHQnLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgdmlkZW8udmlkZW9XaWR0aCwgdmlkZW8udmlkZW9IZWlnaHQpO1xuICAgIGNhbGNDb250ZXh0LmRyYXdJbWFnZShcbiAgICAgIHZpZGVvLFxuICAgICAgc3gsXG4gICAgICBzeSxcbiAgICAgIHNXaWR0aCxcbiAgICAgIHNIZWlnaHQsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIGNhbGNSZXNvbHV0aW9uX3csXG4gICAgICBjYWxjUmVzb2x1dGlvbl9oXG4gICAgKTtcblxuICAgIGNvbnN0IGltZ0RhdGEgPSBjYWxjQ29udGV4dC5nZXRJbWFnZURhdGEoXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIGNhbGNSZXNvbHV0aW9uX3csXG4gICAgICBjYWxjUmVzb2x1dGlvbl9oXG4gICAgKTtcbiAgICBjb25zdCBpbWdEYXRhVXJsID0gY2FsY0NhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcblxuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy4jcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIHRoaXMuI2dldFJvdGF0aW9uRGVncmVlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2ltZ0RhdGEsIGltZ0RhdGFVcmxdO1xuICAgIH1cbiAgfVxuICBhc3luYyAjcm90YXRlKGltZ0RhdGEsIGltZ0RhdGFVcmwsIGRlZ3JlZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGRlZ3JlZSA9PT0gMCkge1xuICAgICAgICByZXNvbHZlKFtpbWdEYXRhLCBpbWdEYXRhVXJsXSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICBpbWcuc3JjID0gaW1nRGF0YVVybDtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgLy8gY2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgICAgIGNvbnN0IHRlbXBDb250ZXh0ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0ZW1wQ2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXG4gICAgICAgIGlmIChbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcuaGVpZ2h0XG4gICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcud2lkdGhcbiAgICAgICAgfSBlbHNlIGlmIChbMCwgMTgwXS5pbmNsdWRlcyhkZWdyZWUpKSB7XG4gICAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgICAgIHRlbXBDYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWdyZWUgPT09IDkwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLmhlaWdodCwgMClcbiAgICAgICAgZWxzZSBpZiAoZGVncmVlID09PSAxODApIHRlbXBDb250ZXh0LnRyYW5zbGF0ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpXG4gICAgICAgIGVsc2UgaWYgKGRlZ3JlZSA9PT0gMjcwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoMCwgaW1nLndpZHRoKVxuXG4gICAgICAgIHRlbXBDb250ZXh0LnJvdGF0ZShkZWdyZWUgKiBNYXRoLlBJIC8gMTgwKVxuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKVxuICAgICAgICBjb25zdCBuZXdJbWFnZURhdGEgPSBbOTAsIDI3MF0uaW5jbHVkZXMoZGVncmVlKSA/IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcuaGVpZ2h0LCBpbWcud2lkdGgpIDogdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgdGVtcENvbnRleHQpO1xuICAgICAgICByZXNvbHZlKFtuZXdJbWFnZURhdGEsIHRlbXBDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyldKVxuICAgICAgICB0ZW1wQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG4gIGFzeW5jICNpc0NhcmRib3hEZXRlY3RlZChhZGRyZXNzKSB7XG4gICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbYnVmZmVyXSA9IHRoaXMuI2dldEJ1ZmZlcigpO1xuICAgICAgY29uc3QgW2ltZ0RhdGFdID0gYXdhaXQgdGhpcy4jY3JvcEltYWdlRnJvbVZpZGVvKCk7XG4gICAgICBpZiAoISEhaW1nRGF0YSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBPQ1JFbmdpbmUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgYnVmZmVyKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gT0NSRW5naW5lLmRldGVjdF9pZGNhcmQoXG4gICAgICAgIGJ1ZmZlcixcbiAgICAgICAgdGhpcy4jcmVzb2x1dGlvbldpZHRoLFxuICAgICAgICB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0LFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICAwXG4gICAgICApO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQ2FyZGJveERldGVjdGVkIHJlc3VsdCAtPS0tLS0tJywgcmVzdWx0KVxuICAgICAgcmV0dXJuICEhcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3IgOiAnICsgZTtcblxuICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnbWVtb3J5JykpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhcmQgZGV0ZWN0aW9uIGVycm9yIDogJyArIGUpO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyAjc3RhcnRSZWNvZ25pdGlvbihhZGRyZXNzLCBvY3JUeXBlLCBzc2FNb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhZGRyZXNzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJ2NoZWNrVmFsaWRhdGlvbiBGYWlsJztcbiAgICAgIH1cblxuICAgICAgbGV0IG9jclJlc3VsdCA9IG51bGw7XG4gICAgICBsZXQgc3NhUmVzdWx0ID0gbnVsbDtcblxuICAgICAgaWYgKCF0aGlzLiNvY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuXG4gICAgICBjb25zdCBbLCByZXN1bHRCdWZmZXJdID0gdGhpcy4jZ2V0QnVmZmVyKCk7XG4gICAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IE9DUkVuZ2luZS5zY2FuSURDYXJkKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAncGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IE9DUkVuZ2luZS5zY2FuUGFzc3BvcnQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICBjYXNlICdhbGllbi1zc2EnOlxuICAgICAgICAgIG9jclJlc3VsdCA9IE9DUkVuZ2luZS5zY2FuQWxpZW4oYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlZGl0JzpcbiAgICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgICAgb2NyUmVzdWx0ID0gT0NSRW5naW5lLnNjYW5DcmVkaXQoYWRkcmVzcywgcmVzdWx0QnVmZmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjYW5uZXIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvY3JSZXN1bHQgPT09IG51bGwgfHwgb2NyUmVzdWx0ID09PSAnJyB8fCBvY3JSZXN1bHQgPT09ICdmYWxzZScgfHwgb2NyUmVzdWx0WzBdID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGwsIG51bGwsIG51bGxdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNzYU1vZGUpIHtcbiAgICAgICAgICBpZiAob2NyVHlwZS5pbmRleE9mKFwiLXNzYVwiKSA+IC0xKSB7XG4gICAgICAgICAgICBzc2FSZXN1bHQgPSBPQ1JFbmdpbmUuc2NhblRydXRoKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU1NBIE1vZGUgaXMgdHJ1ZS4gYnV0LCBvY3JUeXBlIGlzIGludmFsaWQgOiAnICsgb2NyVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBjcm9wTW9kZSA9IGZhbHNlO1xuICAgICAgaWYgKG9jclR5cGUuaW5kZXhPZihcImNyZWRpdFwiKSA+IC0xKSB7XG4gICAgICAgIGNyb3BNb2RlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxldCBvcmlnaW5JbWFnZSA9IGF3YWl0IHRoaXMuI2dldEltYWdlQmFzZTY0KGFkZHJlc3MsIGZhbHNlLCBjcm9wTW9kZSk7XG4gICAgICBsZXQgbWFza0ltYWdlID0gYXdhaXQgdGhpcy4jZ2V0SW1hZ2VCYXNlNjQoYWRkcmVzcywgdHJ1ZSwgY3JvcE1vZGUpO1xuICAgICAgbWFza0ltYWdlID0gKG1hc2tJbWFnZSA9PT0gJ2RhdGE6JyA/IG51bGwgOiBtYXNrSW1hZ2UpO1xuXG4gICAgICByZXR1cm4gW29jclJlc3VsdCwgb3JpZ2luSW1hZ2UsIG1hc2tJbWFnZSwgc3NhUmVzdWx0XTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdzdGFydFJlY29nbml0aW9uIGVycm9yOicgKyBlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNzZXRDYW1lcmFQZXJtaXNzaW9uVGltZW91dFRpbWVyKCkge1xuICAgIHRoaXMuI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpO1xuICAgIHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHsgICAgICAvLyAx7LSIIGRlbGF5IO2bhCDsi6TtlolcbiAgICAgIGF3YWl0IHRoaXMuI3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgYXN5bmMgI3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgY29uc3QgaXNQYXNzcG9ydCA9IHRoaXMuI29jclR5cGUuaW5jbHVkZXMoJ3Bhc3Nwb3J0Jyk7XG4gICAgICBhd2FpdCB0aGlzLiNzZXR1cFZpZGVvKGlzUGFzc3BvcnQpO1xuXG4gICAgICBjb25zdCB7IHZpZGVvIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgIC8vIGNvbnN0IFt0cmFja10gPSB0aGlzLiNzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcbiAgICAgICAgLy8gY29uc3QgY2FwYWJpbGl0eSA9IHRyYWNrLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdDYXJkU2NhbiNpbml0aWFsaXplIGNhcGFiaWxpdHknLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgaWYgKCdzcmNPYmplY3QnIGluIHZpZGVvKSB7XG4gICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gdGhpcy4jc3RyZWFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEF2b2lkIHVzaW5nIHRoaXMgaW4gbmV3IGJyb3dzZXJzLCBhcyBpdCBpcyBnb2luZyBhd2F5LlxuICAgICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuI3N0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygncHJvY2VlZENhbWVyYVBlcm1pc3Npb24gLSBvbmxvYWRlZG1ldGFkYXRhJyk7XG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCdjYW5wbGF5Jyk7XG5cbiAgICAgICAgICAvLyB2aWRlbyBlbGVtZW50IHN0eWxlIOyEpOyglVxuICAgICAgICAgIHRoaXMuI3ZpZGVvT3JpZW50YXRpb24gPVxuICAgICAgICAgICAgdmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvLnZpZGVvSGVpZ2h0IDwgMSA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCd0aGlzLiNkZXZpY2VJbmZvLm9zU2ltcGxlIDo6ICcgKyB0aGlzLiNkZXZpY2VJbmZvLm9zU2ltcGxlKTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCd0aGlzLiN1aU9yaWVudGF0aW9uIDo6ICcgKyB0aGlzLiN1aU9yaWVudGF0aW9uKTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCd0aGlzLiN2aWRlb09yaWVudGF0aW9uIDo6ICcgKyB0aGlzLiN2aWRlb09yaWVudGF0aW9uKTtcblxuICAgICAgICAgIHRoaXMuI2NhbVNldENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLiNhZGp1c3RTdHlsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICB2aWRlby53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuTk9UX1JFQURZKTtcbiAgICAgICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdlcnJvcicsIGUubmFtZSwgZSk7XG4gICAgICBpZiAoZS5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnQ2FtZXJhIEFjY2VzcyBQZXJtaXNzaW9uIGlzIG5vdCBhbGxvd2VkJztcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB0aGlzLiNvbkZhaWx1cmVQcm9jZXNzKFwiRTQwM1wiLCBlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdOb3RSZWFkYWJsZUVycm9yJykge1xuICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgICAgdGhpcy4jc2V0Q2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpOyAgICAgICAgICAgICAgLy8g7J6s6reAIO2YuOy2nFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNzZXRTdHlsZShlbCwgc3R5bGUpIHtcbiAgICBPYmplY3QuYXNzaWduKGVsLnN0eWxlLCBzdHlsZSk7XG4gIH07XG5cbiAgI2NoYW5nZVN0YWdlKHZhbCkge1xuICAgIHRoaXMuI2luUHJvZ3Jlc3NTdGVwID0gdmFsO1xuICAgIGNvbnN0IHsgZ3VpZGVCb3ggfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGggKyAncHgnLFxuICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5zdHlsZSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnJhZGl1cyArICdweCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlW3ZhbF0sXG4gICAgfTtcblxuICAgIGlmIChndWlkZUJveCkge1xuICAgICAgdGhpcy4jc2V0U3R5bGUoZ3VpZGVCb3gsIHN0eWxlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyAjZ2V0SW5wdXREZXZpY2VzKGtpbmQsIGxhYmVsKSB7XG4gICAgLy8gdGhyb3cgZXJyb3IgaWYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hdmlnYXRvci5tZWRpYURldmljZXMgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4ge1xuICAgICAgaWYgKGRldmljZS5raW5kID09PSBgJHtraW5kfWlucHV0YCAmJiBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IGRldmljZS5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgaWYgKGNhcD8uZmFjaW5nTW9kZT8uaW5jbHVkZXModGhpcy4jZmFjaW5nTW9kZUNvbnN0cmFpbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlkZW9EZXZpY2VzLmxlbmd0aCA8PSAxXG4gICAgICA/IHZpZGVvRGV2aWNlc1xuICAgICAgOiB2aWRlb0RldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IChsYWJlbCA/IGRldmljZS5sYWJlbC5pbmNsdWRlcyhsYWJlbCkgOiB0cnVlKSk7XG4gIH1cblxuICAjY2hlY2tVSU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkZXRlY3Rvci5nZXRVSU9yaWVudGF0aW9uKGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCkub2NyKTtcbiAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnQgIT09IHRoaXMuI3ByZXZVaU9yaWVudGF0aW9uKSB7XG4gICAgICB0aGlzLiN1aU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIHRoaXMuI3ByZXZVaU9yaWVudGF0aW9uID0gY3VycmVudDtcbiAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7IGN1cnJlbnQsIGlzQ2hhbmdlZCB9O1xuICB9XG5cbiAgI3NldHVwRG9tRWxlbWVudHMoKSB7XG4gICAgbGV0IHsgb2NyLCB2aWRlbywgY2FudmFzLCByb3RhdGlvbkNhbnZhcywgZ3VpZGVCb3gsIHZpZGVvV3JhcCwgZ3VpZGVCb3hXcmFwLCBtYXNrQm94V3JhcCB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcblxuICAgIGlmICghb2NyKSBuZXcgRXJyb3IoXCJvY3IgZGl2IGVsZW1lbnQgaXMgbm90IGV4aXN0XCIpO1xuXG4gICAgaWYgKHZpZGVvV3JhcCkgdmlkZW9XcmFwLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveFdyYXApIGd1aWRlQm94V3JhcC5yZW1vdmUoKTtcbiAgICBpZiAodmlkZW8pIHZpZGVvLnJlbW92ZSgpO1xuICAgIGlmIChjYW52YXMpIGNhbnZhcy5yZW1vdmUoKTtcbiAgICBpZiAocm90YXRpb25DYW52YXMpIHJvdGF0aW9uQ2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChndWlkZUJveCkgZ3VpZGVCb3gucmVtb3ZlKCk7XG4gICAgaWYgKG1hc2tCb3hXcmFwKSBtYXNrQm94V3JhcC5yZW1vdmUoKTtcblxuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlID0gdGhpcy4jZ2V0Um90YXRpb25EZWdyZWUoKTtcbiAgICB0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID0gKFs5MCwgMjcwXS5pbmNsdWRlcyhyb3RhdGlvbkRlZ3JlZSkpO1xuXG4gICAgbGV0IG9jclN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgIH07XG4gICAgdGhpcy4jc2V0U3R5bGUob2NyLCBvY3JTdHlsZSk7XG5cbiAgICBjb25zdCB3cmFwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JywgICAgICAgICAgLy8gdmVydGljYWwgYWxpZ24gbWlkZGxlXG4gICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfTtcblxuICAgIHZpZGVvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvV3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAndmlkZW9XcmFwJyk7XG4gICAgaWYgKHZpZGVvV3JhcCkge1xuICAgICAgd2hpbGUgKHZpZGVvV3JhcC5maXJzdENoaWxkKSB7XG4gICAgICAgIHZpZGVvV3JhcC5yZW1vdmVDaGlsZCh2aWRlb1dyYXAubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvV3JhcCwgd3JhcFN0eWxlKTtcbiAgICB9XG4gICAgb2NyLmFwcGVuZENoaWxkKHZpZGVvV3JhcCk7XG5cbiAgICBtYXNrQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdtYXNrQm94V3JhcCcpO1xuICAgIG1hc2tCb3hXcmFwLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgIHRoaXMuI3NldFN0eWxlKG1hc2tCb3hXcmFwLCB3cmFwU3R5bGUpO1xuXG4gICAgbGV0IG1hc2tfZnJhbWUgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUubWFza19mcmFtZSArICdmZic7XG4gICAgaWYgKCEhdGhpcy4jb3B0aW9ucy5zaG93Q2xpcEZyYW1lKSB7XG4gICAgICBtYXNrX2ZyYW1lID0gdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLmNsaXBfZnJhbWUgKyAnNTUnO1xuICAgIH1cblxuICAgIG1hc2tCb3hXcmFwLmlubmVySFRNTCA9IFwiXCIgK1xuICAgICAgXCIgIDxzdmcgaWQ9J21hc2tCb3hDb250YWluZXInIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XFxuXCIgK1xuICAgICAgXCIgICAgPG1hc2sgaWQ9J21hc2stcmVjdCc+XFxuXCIgK1xuICAgICAgXCIgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxcblwiICtcbiAgICAgIFwiICAgICAgPHN2ZyB4PSc1MCUnIHk9JzUwJScgb3ZlcmZsb3c9J3Zpc2libGUnPlxcblwiICtcbiAgICAgIFwiICAgICAgICAgIDxyZWN0IGlkPSdtYXNrQm94SW5uZXInXFxuXCIgK1xuICAgICAgXCIgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI2MCdcXG5cIiArXG4gICAgICBcIiAgICAgICAgICAgIHg9Jy0yMDAnIHk9Jy0xMzAnXFxuXCIgK1xuICAgICAgXCIgICAgICAgICAgICByeD0nMTAnIHJ5PScxMCdcXG5cIiArXG4gICAgICBcIiAgICAgICAgICAgIGZpbGw9J2JsYWNrJyBzdHJva2U9J2JsYWNrJz48L3JlY3Q+XFxuXCIgK1xuICAgICAgXCIgICAgICA8L3N2Zz5cXG5cIiArXG4gICAgICBcIiAgICA8L21hc2s+XFxuXCIgK1xuICAgICAgXCIgICAgPHJlY3QgaWQ9J21hc2tCb3hPdXRlcidcXG5cIiArXG4gICAgICBcIiAgICAgICAgICB4PScwJyB5PScwJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJ1xcblwiICtcbiAgICAgIFwiICAgICAgICAgIGZpbGw9J1wiICsgbWFza19mcmFtZSArIFwiJyBtYXNrPSd1cmwoI21hc2stcmVjdCknPjwvcmVjdD5cXG5cIiArXG4gICAgICBcIiAgPC9zdmc+XCJcbiAgICBvY3IuYXBwZW5kQ2hpbGQobWFza0JveFdyYXApO1xuXG4gICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlbycpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAndHJ1ZScpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpO1xuXG4gICAgbGV0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG5cbiAgICBjb25zdCByb3RhdGVDc3MgPSAncm90YXRlKCcgKyByb3RhdGlvbkRlZ3JlZSArICdkZWcpJztcbiAgICBjb25zdCBtaXJyb3JDc3MgPSAncm90YXRlWSgxODBkZWcpJ1xuICAgIGNvbnN0IHJvdGF0ZUFuZE1pcnJvckNzcyA9IG1pcnJvckNzcyArICcgJyArIHJvdGF0ZUNzcztcblxuXG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIGlmICh0aGlzLiNnZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLiNnZXRNaXJyb3JNb2RlKCkpIHtcbiAgICAgICAgdmlkZW9TdHlsZSA9IHtcbiAgICAgICAgICAuLi52aWRlb1N0eWxlLFxuICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAndHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuI3NldFN0eWxlKHZpZGVvLCB2aWRlb1N0eWxlKTtcblxuICAgIHZpZGVvV3JhcC5hcHBlbmRDaGlsZCh2aWRlbyk7XG5cbiAgICBndWlkZUJveFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBndWlkZUJveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94V3JhcCcpO1xuICAgIHRoaXMuI3NldFN0eWxlKGd1aWRlQm94V3JhcCwgd3JhcFN0eWxlKTtcbiAgICBvY3IuYXBwZW5kQ2hpbGQoZ3VpZGVCb3hXcmFwKTtcblxuICAgIGd1aWRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2d1aWRlQm94Jyk7XG4gICAgZ3VpZGVCb3guc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy4jc2V0U3R5bGUoZ3VpZGVCb3gsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgfSk7XG5cbiAgICBndWlkZUJveFdyYXAuYXBwZW5kQ2hpbGQoZ3VpZGVCb3gpO1xuXG4gICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdjYW52YXMnKTtcblxuICAgIGNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy4jb3B0aW9ucy5zaG93Q2FudmFzUHJldmlldyA/ICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwID8gJ25vbmUnIDogJ2Rpc3BsYXknKSA6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm9yZGVyOiAnZ3JlZW4gMnB4IHNvbGlkJ1xuICAgIH1cbiAgICB0aGlzLiNzZXRTdHlsZShjYW52YXMsIGNhbnZhc1N0eWxlKTtcblxuICAgIG9jci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gICAgcm90YXRpb25DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByb3RhdGlvbkNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAncm90YXRpb25DYW52YXMnKTtcblxuICAgIHRoaXMuI3NldFN0eWxlKHJvdGF0aW9uQ2FudmFzLCB7XG4gICAgICBkaXNwbGF5OiB0aGlzLiNvcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gKHRoaXMuI2lzUm90YXRlZDkwb3IyNzAgPyAnZGlzcGxheScgOiAnbm9uZScpIDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMjUlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnMHB4JyxcbiAgICAgIGJvcmRlcjogJ2JsdWUgMnB4IHNvbGlkJ1xuICAgIH0pO1xuICAgIG9jci5hcHBlbmRDaGlsZChyb3RhdGlvbkNhbnZhcyk7XG5cbiAgICB0aGlzLiNvY3IgPSBvY3I7XG4gICAgdGhpcy4jY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuI3JvdGF0aW9uQ2FudmFzID0gcm90YXRpb25DYW52YXM7XG4gICAgdGhpcy4jdmlkZW8gPSB2aWRlbztcbiAgICB0aGlzLiN2aWRlb1dyYXAgPSB2aWRlb1dyYXA7XG4gICAgdGhpcy4jZ3VpZGVCb3ggPSBndWlkZUJveDtcbiAgICB0aGlzLiNndWlkZUJveFdyYXAgPSBndWlkZUJveFdyYXA7XG4gICAgdGhpcy4jbWFza0JveFdyYXAgPSBtYXNrQm94V3JhcDtcblxuICAgIHJldHVybiB7IG9jciwgY2FudmFzLCByb3RhdGlvbkNhbnZhcywgdmlkZW8sIHZpZGVvV3JhcCwgZ3VpZGVCb3gsIGd1aWRlQm94V3JhcCwgbWFza0JveFdyYXAgfTtcbiAgfVxuXG4gIGFzeW5jICNzZXR1cFZpZGVvKGlzUGFzc3BvcnQpIHtcbiAgICAvLyB3YXNtIOyduOyLneyEseuKpSDstZzsoIHtmZTrkJwg7ZW07IOB64+EXG4gICAgdGhpcy4jcmVzb2x1dGlvbldpZHRoID0gMTA4MDtcbiAgICB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0ID0gNzIwO1xuXG4gICAgdGhpcy4jY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHsgb2NyLCB2aWRlbywgY2FudmFzLCByb3RhdGlvbkNhbnZhcyB9ID0gdGhpcy4jc2V0dXBEb21FbGVtZW50cygpO1xuXG4gICAgY29uc3QgdmlkZW9EZXZpY2VzID0gYXdhaXQgdGhpcy4jZ2V0SW5wdXREZXZpY2VzKCd2aWRlbycsIHRoaXMuI29wdGlvbnMuZGV2aWNlTGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb0RldmljZXMgOjogJywgdmlkZW9EZXZpY2VzKVxuICAgIGNvbnN0IGRldmljZUlkTGlzdCA9IHZpZGVvRGV2aWNlcy5tYXAoKGRldmljZSkgPT4gZGV2aWNlLmRldmljZUlkKTtcblxuICAgIHRoaXMuI2NoZWNrVUlPcmllbnRhdGlvbigpO1xuICAgIGxldCBjb25zdHJhaW50V2lkdGgsIGNvbnN0cmFpbnRIZWlnaHQ7XG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHsgICAgICAgICAvLyB1aSA6IHBvcnRyYWl0XG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLCAgICAgICAgICAvLyBwb3J0cmFpdCDsnbTsp4Drp4wg7Lm066mU652864qUIGxhbmRzY2FwZSDsnbjqsr3smrBcbiAgICAgICAgbWluOiAxMDgwLCAgICAgICAgICAgIC8vIHBvcnRyYWl0IOydtOqzoCDsubTrqZTrnbzrj4QgcG9ydHJhaXQg7J246rK97JqwXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsICAgICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDcyMCwgICAgICAgICAgICAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG4gICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1aSA6IGxhbmRzY2FwZVxuICAgICAgY29uc3RyYWludFdpZHRoID0ge1xuICAgICAgICBpZGVhbDogMTkyMCxcbiAgICAgICAgbWluOiAxMjgwLFxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRIZWlnaHQgPSB7XG4gICAgICAgIGlkZWFsOiAxMDgwLFxuICAgICAgICBtaW46IDcyMCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICBhdWRpbzogZmFsc2UsXG4gICAgICB2aWRlbzoge1xuICAgICAgICB6b29tOiB7IGlkZWFsOiAxIH0sXG4gICAgICAgIGZhY2luZ01vZGU6IHsgaWRlYWw6IHRoaXMuI2ZhY2luZ01vZGVDb25zdHJhaW50IH0sXG4gICAgICAgIGZvY3VzTW9kZTogeyBpZGVhbDogJ2NvbnRpbnVvdXMnIH0sXG4gICAgICAgIHdoaXRlQmFsYW5jZU1vZGU6IHsgaWRlYWw6ICdjb250aW51b3VzJyB9LFxuICAgICAgICBkZXZpY2VJZDoge1xuICAgICAgICAgIGlkZWFsOiBkZXZpY2VJZExpc3QubGVuZ3RoID4gMCA/IGRldmljZUlkTGlzdFtkZXZpY2VJZExpc3QubGVuZ3RoIC0gMV0gOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiBjb25zdHJhaW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogY29uc3RyYWludEhlaWdodCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBkdW1wdHJhY2sgPSAoW2EsIGJdLCB0cmFjaykgPT5cbiAgICAgIC8vICAgYCR7YX0ke3RyYWNrLmtpbmQgPT0gJ3ZpZGVvJyA/ICdDYW1lcmEnIDogJ01pY3JvcGhvbmUnfSAoJHt0cmFjay5yZWFkeVN0YXRlfSk6ICR7dHJhY2subGFiZWx9JHtifWA7XG5cbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb1RyYWNrcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKSlcbiAgICAgIC8vIGNvbnN0IHN0cmVhbVNldHRpbmdzID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1DYXBhYmlsaXRpZXMgOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q2FwYWJpbGl0aWVzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldENvbnN0cmFpbnRzKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtU2V0dGluZ3MgOjogJywgc3RyZWFtU2V0dGluZ3MpXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIHdpZHRoIDo6ICcgKyBzdHJlYW1TZXR0aW5ncy53aWR0aCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RyZWFtIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggLyBoZWlnaHQgOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoIC8gc3RyZWFtU2V0dGluZ3MuaGVpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gYXNwZWN0UmF0aW8gOjogJyArIHN0cmVhbVNldHRpbmdzLmFzcGVjdFJhdGlvKTtcblxuICAgICAgW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0gPSBbdGhpcy4jcmVzb2x1dGlvbldpZHRoLCB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0XTtcbiAgICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgIFtyb3RhdGlvbkNhbnZhcy53aWR0aCwgcm90YXRpb25DYW52YXMuaGVpZ2h0XSA9IFt0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0LCB0aGlzLiNyZXNvbHV0aW9uV2lkdGhdO1xuICAgICAgfVxuXG4gICAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICB0aGlzLiNzdHJlYW0gPSBzdHJlYW07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgI2FkanVzdFN0eWxlKCkge1xuICAgIGNvbnN0IHsgb2NyLCB2aWRlbywgY2FudmFzLCBndWlkZUJveCwgdmlkZW9XcmFwLCBtYXNrQm94V3JhcCB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBjb25zb2xlLmRlYnVnKCdhZGp1c3RTdHlsZScpO1xuICAgIC8vIOq4sOykgOygleuztFxuICAgIGNvbnN0IGJhc2VXaWR0aCA9IDQwMDtcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMjYwO1xuXG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAgICAgICAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQsIG5ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0O1xuXG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aFxuICAgIGxldCBjYWxjT2NyQ2xpZW50SGVpZ2h0ID0gb2NyLmNsaWVudEhlaWdodFxuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbjtcblxuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY1ZpZGVvV2lkdGgsIGNhbGNWaWRlb0hlaWdodF0gPSBbY2FsY1ZpZGVvSGVpZ2h0LCBjYWxjVmlkZW9XaWR0aF07XG4gICAgICBbY2FsY1ZpZGVvQ2xpZW50V2lkdGgsIGNhbGNWaWRlb0NsaWVudEhlaWdodF0gPSBbY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9DbGllbnRXaWR0aF07XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHsgICAgICAgICAgICAgICAvLyDshLjroZwgVUlcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikgeyAgIC8vIOy5tOuplOudvOuPhCDshLjroZxcbiAgICAgICAgLy8vIOyEuOuhnCBVSSAmJiDshLjroZwg7Lm066mU6528XG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IDAuODtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg7Lm066mU6528IO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDsubTrqZTrnbzripQg6rCA66GcXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqTrpbwg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSAoZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGgpIC8gYmFzZUhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6rCA66GcIFVJXG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgLy8g67mE65SU7Jik66W8IGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IDAuNjsgICAgIC8vIDAuNn4wLjNcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0XG4gICAgICAgIC8vIGhlaWdodCDquLDspIDsnLzroZwgd2lkdGgg6rOE7IKwXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBuZXdWaWRlb0hlaWdodCAqIChjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0hlaWdodCk7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk64qUIOu5hOuUlOyYpOulvCDshLjroZwg6riw7KSA7Jy866GcIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IG5ld1ZpZGVvSGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gKGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoKSAvIGJhc2VIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg7IS466GcIOy5tOuplOudvFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgY29uc3QgZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSAwLjg7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOy5tOuplOudvCDtmZXrjIBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiNzZXRTdHlsZSh2aWRlbywge1xuICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBuZXdWaWRlb0hlaWdodCArICdweCcsXG4gICAgfSk7XG5cbiAgICAvLyDsi6Dqt5xcbiAgICB0aGlzLiNzZXRTdHlsZShndWlkZUJveCwge1xuICAgICAgd2lkdGg6IGd1aWRlQm94V2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBndWlkZUJveEhlaWdodCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXNrQm94SW5uZXIgPSBtYXNrQm94V3JhcC5xdWVyeVNlbGVjdG9yKFwiI21hc2tCb3hJbm5lclwiKTtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IE51bWJlcih0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGgpO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IE51bWJlcih0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzKTtcbiAgICBpZiAoZ3VpZGVCb3hXaWR0aCAmJiBndWlkZUJveFdpZHRoICYmIGJvcmRlclJhZGl1cyAmJiBib3JkZXJXaWR0aCkge1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBndWlkZUJveFdpZHRoICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZ3VpZGVCb3hIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgKGd1aWRlQm94V2lkdGggLyAyICogLTEpICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneScsIChndWlkZUJveEhlaWdodCAvIDIgKiAtMSkgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIGJvcmRlclJhZGl1cyArIChib3JkZXJXaWR0aCAqIC0xKSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J5JywgYm9yZGVyUmFkaXVzICsgKGJvcmRlcldpZHRoICogLTEpICsgJycpO1xuICAgIH1cbiAgfVxuXG4gICNjbG9zZUNhbWVyYSgpIHtcbiAgICB0aGlzLiNjbGVhckNhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIoKTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgdGhpcy5zdG9wU3RyZWFtKCk7XG4gIH1cblxuICBhc3luYyAjbG9hZFJlc291cmNlcygpIHtcbiAgICBpZiAodGhpcy4jcmVzb3VyY2VzTG9hZGVkKSByZXR1cm47XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCgncXVyYW0uanMnLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCk7XG4gICAgbGV0IHNyYyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAgIC50aGVuKCh0ZXh0KSA9PiB7XG4gICAgICAgIGxldCByZWdleCA9IC8oLiopID0gTW9kdWxlLmN3cmFwL2dtO1xuICAgICAgICBsZXQgc291cmNlID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCAnTW9kdWxlLiQxID0gTW9kdWxlLmN3cmFwJyk7XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKFxuICAgICAgICAgICdxdXJhbS53YXNtJyxcbiAgICAgICAgICBuZXcgVVJMKCdxdXJhbS53YXNtJywgdGhpcy4jb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWZcbiAgICAgICAgKTtcbiAgICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoXG4gICAgICAgICAgL1JFTU9URV9QQUNLQUdFX0JBU0UgPSBbJ1wiXXF1cmFtXFwuZGF0YVtcIiddL2dtLFxuICAgICAgICAgIGBSRU1PVEVfUEFDS0FHRV9CQVNFID0gXCIke25ldyBVUkwoJ3F1cmFtLmRhdGEnLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZlxuICAgICAgICAgIH1cImBcbiAgICAgICAgKTtcbiAgICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoXG4gICAgICAgICAgJ2Z1bmN0aW9uIGNyZWF0ZVdhc20nLFxuICAgICAgICAgICdhc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtJ1xuICAgICAgICApO1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShcbiAgICAgICAgICAndmFyIGFzbSA9IGNyZWF0ZVdhc20oKTsnLFxuICAgICAgICAgICdhd2FpdCBjcmVhdGVXYXNtKCk7J1xuICAgICAgICApO1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShcbiAgICAgICAgICAnaW5zdGFudGlhdGVBc3luYygpOycsXG4gICAgICAgICAgJ2F3YWl0IGluc3RhbnRpYXRlQXN5bmMoKTsnXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICB9KTtcblxuICAgIHNyYyA9IGBcbiAgICAoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAke3NyY31cbiAgICAgIE1vZHVsZS5sZW5ndGhCeXRlc1VURjggPSBsZW5ndGhCeXRlc1VURjhcbiAgICAgIE1vZHVsZS5zdHJpbmdUb1VURjggPSBzdHJpbmdUb1VURjhcbiAgICAgIHJldHVybiBNb2R1bGVcbiAgICB9KSgpXG4gICAgICAgIGA7XG4gICAgT0NSRW5naW5lID0gYXdhaXQgZXZhbChzcmMpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2FkUmVzb3VyY2VzIDo6ICcsIE1vZHVsZSlcbiAgICB0aGlzLiNyZXNvdXJjZXNMb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgI3N0YXJ0U2NhbkltcGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuI2ludGVydmFsTG9jayA9IGZhbHNlO1xuICAgICAgbGV0IGRldGVjdGVkID0gZmFsc2U7XG4gICAgICBsZXQgYWRkcmVzcyA9IDA7XG4gICAgICB0aGlzLiNpbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh0aGlzLiNpbnRlcnZhbExvY2sgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jaW50ZXJ2YWxMb2NrID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgaWYgKCFPQ1JFbmdpbmVbJ2FzbSddKSByZXR1cm47XG5cbiAgICAgICAgICAvLyBUT0RPIDog7ISk7KCV7ZWg7IiYIOyeiOqyjCDrs4Dqsr0gZGVmYXVsdCDqsJLrj4Qg7KCc6rO1XG4gICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25fdywgcmVzb2x1dGlvbl9oXSA9IFt0aGlzLiNyZXNvbHV0aW9uV2lkdGgsIHRoaXMuI3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgICAgIGNvbnN0IHsgdmlkZW8gfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICAgICAgaWYgKHJlc29sdXRpb25fdyA9PT0gMCB8fCByZXNvbHV0aW9uX2ggPT09IDApIHJldHVybjtcblxuICAgICAgICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYmVmb3JlIC0tLS0tLS0tLScsIGFkZHJlc3MpO1xuICAgICAgICAgIGlmIChhZGRyZXNzID09PSAwICYmIHRoaXMuI2lzVmlkZW9SZXNvbHV0aW9uQ29tcGF0aWJsZSh2aWRlbykpIHtcbiAgICAgICAgICAgIFthZGRyZXNzLCB0aGlzLiNkZXN0cm95U2Nhbm5lckNhbGxiYWNrXSA9IHRoaXMuI2dldFNjYW5uZXJBZGRyZXNzKHRoaXMuI29jclR5cGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZHJlc3MgYWZ0ZXIgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG5cbiAgICAgICAgICAvLyBjYXJkIG5vdCBkZXRlY3RlZFxuICAgICAgICAgIGlmICghKGF3YWl0IHRoaXMuI2lzQ2FyZGJveERldGVjdGVkKGFkZHJlc3MpKSkge1xuICAgICAgICAgICAgdGhpcy4jY2hhbmdlU3RhZ2UoSU5fUFJPR1JFU1MuUkVBRFkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5DQVJEX0RFVEVDVCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuI2luUHJvZ3Jlc3NTdGVwID09PSBJTl9QUk9HUkVTUy5DQVJEX0RFVEVDVCkge1xuICAgICAgICAgICAgLy8gZmFsbGJhY2sgY2FzZSDsnbjrk69cbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FzZVxuICAgICAgICAgICAgLy8gaWYgKHJlc3VsdCAhPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgLy8gICBjb25zdCBQcmV2SW1hZ2UgPSBnZXRQcmV2SW1hZ2UoKTtcbiAgICAgICAgICAgIC8vICAgTW9kdWxlLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIFByZXZJbWFnZSk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGNvbnN0IFtvY3JSZXN1bHQsIGltZ0RhdGFVcmwsIG1hc2tJbWFnZSwgc3NhUmVzdWx0XSA9IGF3YWl0IHRoaXMuI3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgdGhpcy4jb2NyVHlwZSwgdGhpcy4jc3NhTW9kZSk7XG4gICAgICAgICAgICAvLyBzdWNjZXNzIGNhc2VcbiAgICAgICAgICAgIGlmIChvY3JSZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiNzc2FNb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIhISEgc3NhUmV0cnlDb3VudCA6IFwiICsgdGhpcy4jc3NhUmV0cnlDb3VudCArIFwiICEhIVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChzc2FSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1dBUk5dIFNTQSBNT0RFIGlzIHRydWUuIGJ1dCwgc3NhUmVzdWx0IGlzIG51bGxcIik7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNzYVJlc3VsdCA9PT0gXCJGQUtFXCIpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiNzc2FSZXRyeUNvdW50IDwgdGhpcy4jb3B0aW9ucy5zc2FNYXhSZXRyeUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiISEhIFtSRVRSWSsrXSBGQUtFLCBidXQgcmV0cnkgY291bnQgaXMgbm90IGV4Y2VlZCA6IFwiICsgdGhpcy4jc3NhUmV0cnlDb3VudCArIFwiICEhIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc3NhUmV0cnlDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiEhISBbTUFYIFJFVFJZIEVYQ0VFRF0gRkFLRSwgYW5kIHJldHJ5IGNvdW50IGlzIGV4Y2VlZCA6IFwiICsgdGhpcy4jc3NhUmV0cnlDb3VudCArIFwiICEhIVwiKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzdWx0IDogJHtvY3JSZXN1bHR9YCk7XG4gICAgICAgICAgICAgIHRoaXMuI29uU3VjY2Vzc1Byb2Nlc3Moe1xuICAgICAgICAgICAgICAgIG9jcl90eXBlOiB0aGlzLiNvY3JUeXBlLFxuICAgICAgICAgICAgICAgIG9jcl9kYXRhOiBwYXJzZXIucGFyc2VPY3JSZXN1bHQodGhpcy4jb2NyVHlwZSwgdGhpcy4jc3NhTW9kZSwgb2NyUmVzdWx0LCBzc2FSZXN1bHQsIHRoaXMuI3NzYVJldHJ5Q291bnQpLFxuICAgICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgICAgb2NyX21hc2tpbmdfaW1hZ2U6IG1hc2tJbWFnZSxcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdGhpcy4jY2xlYXJJbnRlcnZhbFRpbWVycygpOyAgLy8gZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICAgICAgICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3IgOiAnICsgZTtcbiAgICAgICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuI3JlY292ZXJ5U2NhbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnQ2FyZCBkZXRlY3Rpb24gZXJyb3InO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHRoaXMuI29uRmFpbHVyZVByb2Nlc3MoXCJFNTgwXCIsIGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdGhpcy4jaW50ZXJ2YWxMb2NrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgI29uU3VjY2Vzc1Byb2Nlc3MocmV2aWV3X3Jlc3VsdCkge1xuICAgIC8vIOyduOyLnSDshLHqs7Ug7Iqk7LqUIOujqO2UhCDsooXro4xcbiAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUyk7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgIFwicmVzdWx0X2NvZGVcIjogXCJOMTAwXCIsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogXCJPSy5cIlxuICAgICAgfSxcbiAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXG4gICAgICByZXZpZXdfcmVzdWx0OiByZXZpZXdfcmVzdWx0LFxuICAgIH07XG5cbiAgICBpZiAodGhpcy4jb25TdWNjZXNzKSB7XG4gICAgICB0aGlzLiNvblN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgIHRoaXMuI29uU3VjY2VzcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW1dBUk5dIG9uU3VjY2VzcyBjYWxsYmFjayBpcyBudWxsLCBzbyBza2lwIHRvIHNlbmQgcmVzdWx0XCIpO1xuICAgIH1cbiAgfVxuXG4gICNvbkZhaWx1cmVQcm9jZXNzKHJlc3VsdENvZGUsIGUsIGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuXG4gICAgbGV0IGVycm9yX2RldGFpbCA9IFwiXCI7XG4gICAgaWYgKGU/LnRvU3RyaW5nKCkpIGVycm9yX2RldGFpbCArPSBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGU/LnN0YWNrKSBlcnJvcl9kZXRhaWwgKz0gZS5zdGFjaztcblxuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFwaV9yZXNwb25zZToge1xuICAgICAgICBcInJlc3VsdF9jb2RlXCI6IHJlc3VsdENvZGUsXG4gICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogZXJyb3JNZXNzYWdlXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiBcImZhaWxlZFwiLFxuICAgICAgcmV2aWV3X3Jlc3VsdDoge1xuICAgICAgICBvY3JfdHlwZTogdGhpcy4jb2NyVHlwZSxcbiAgICAgICAgZXJyb3JfZGV0YWlsOiBlcnJvcl9kZXRhaWwsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLiNvbkZhaWx1cmUpIHtcbiAgICAgIHRoaXMuI29uRmFpbHVyZShyZXN1bHQpO1xuICAgICAgdGhpcy4jb25GYWlsdXJlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbV0FSTl0gb25GYWlsdXJlIGNhbGxiYWNrIGlzIG51bGwsIHNvIHNraXAgdG8gc2VuZCByZXN1bHRcIik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgI3N0YXJ0U2NhbigpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBhd2FpdCB0aGlzLiNsb2FkUmVzb3VyY2VzKCk7XG4gICAgYXdhaXQgdGhpcy4jcHJvY2VlZENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBhd2FpdCB0aGlzLiNzdGFydFNjYW5JbXBsKCk7XG4gICAgY29uc29sZS5sb2coXCJTQ0FOIEVORFwiKTtcbiAgfVxuICBhc3luYyAjcmVjb3ZlcnlTY2FuKCkge1xuICAgIGNvbnNvbGUubG9nKFwiISEhIFJFQ09WRVJZIFNDQU4gISEhXCIpO1xuICAgIHRoaXMuI3Jlc291cmNlc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICBhd2FpdCB0aGlzLiNzdGFydFNjYW4oKTtcbiAgfVxuICBzdG9wU2NhbigpIHtcbiAgICB0aGlzLiNjbGVhckludGVydmFsVGltZXJzKCk7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuICBzdG9wU3RyZWFtKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuI3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy4jc3RyZWFtKSB7XG4gICAgICB0aGlzLiNzdHJlYW0uc3RvcCAmJiB0aGlzLiNzdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuI3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy4jc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW4jc3RvcFN0cmVhbScsIHRyYWNrcyk7XG4gICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhY2tzLmZvckVhY2goKHRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy4jc3RyZWFtID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIOuplOuqqOumrCBhbGxvY2F0aW9uIGZyZWUg7ZWo7IiYICovXG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy4jZGVzdHJveVNjYW5uZXJBZGRyZXNzKCk7XG4gICAgdGhpcy4jZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuI2Rlc3Ryb3lQcmV2SW1hZ2UoKTtcbiAgICB0aGlzLiNkZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpO1xuICB9XG5cbiAgI2NsZWFyQ2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lb3V0VGltZXIpO1xuICAgICAgdGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVvdXRUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgI2NsZWFySW50ZXJ2YWxUaW1lcnMoKSB7XG4gICAgaWYgKHRoaXMuI2ludGVydmFsVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy4jaW50ZXJ2YWxUaW1lcik7XG4gICAgICBjb25zb2xlLmxvZyhcIiEhISBDTEVBUiBJTlRFUlZBTCAhISEhXCIpXG4gICAgICB0aGlzLiNpbnRlcnZhbFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlQk9DUjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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
