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
var Module;
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
var _timer = /*#__PURE__*/new WeakMap();
var _cameraPermissionTimer = /*#__PURE__*/new WeakMap();
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
var _options = /*#__PURE__*/new WeakMap();
var _windowEventBind = /*#__PURE__*/new WeakSet();
var _sleep = /*#__PURE__*/new WeakSet();
var _blobToBase = /*#__PURE__*/new WeakSet();
var _getStringOnWasmHeap = /*#__PURE__*/new WeakSet();
var _setVideoResolution = /*#__PURE__*/new WeakSet();
var _getScannerAddress = /*#__PURE__*/new WeakSet();
var _getBuffer = /*#__PURE__*/new WeakSet();
var _getMaskedImageBase = /*#__PURE__*/new WeakSet();
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
var _checkCameraPermission = /*#__PURE__*/new WeakSet();
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
var _startScan = /*#__PURE__*/new WeakSet();
var _recoveryScan = /*#__PURE__*/new WeakSet();
class UseBOCR {
  /** public properties */

  /** private properties */

  // 임시
  // 임시

  /** Default options */

  /** constructor */
  constructor() {
    _classPrivateMethodInitSpec(this, _recoveryScan);
    _classPrivateMethodInitSpec(this, _startScan);
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
    _classPrivateMethodInitSpec(this, _checkCameraPermission);
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
    _classPrivateMethodInitSpec(this, _getMaskedImageBase);
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
      value: ['idcard', 'driver', 'passport', 'foreign-passport', 'alien', 'credit']
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
    _classPrivateFieldInitSpec(this, _timer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _cameraPermissionTimer, {
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
        mirrorMode: false
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
    if (_classPrivateFieldGet(this, _timer)) {
      clearInterval(_classPrivateFieldGet(this, _timer));
      console.log("!!! CLEAR INTERVAL !!!!");
      _classPrivateFieldSet(this, _timer, null);
    }
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
  var lengthBytes = Module.lengthBytesUTF8(_classPrivateFieldGet(this, _license)) + 1;
  _classPrivateFieldSet(this, _stringOnWasmHeap, Module._malloc(lengthBytes));
  Module.stringToUTF8(_classPrivateFieldGet(this, _license), _classPrivateFieldGet(this, _stringOnWasmHeap), lengthBytes);
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
  var address = null;
  try {
    var stringOnWasmHeap = _classPrivateMethodGet(this, _getStringOnWasmHeap, _getStringOnWasmHeap2).call(this);
    switch (ocrType) {
      case 'idcard':
      case 'driver':
        address = Module.getIDCardScanner(stringOnWasmHeap);
        if (address === 0) {
          var _this$retryCountGetAd, _this$retryCountGetAd2;
          if (_classPrivateFieldGet(this, _maxRetryCountGetAddress) === _classPrivateFieldGet(this, _retryCountGetAddress)) {
            throw new Error("Wrong License Key");
          }
          _classPrivateFieldSet(this, _retryCountGetAddress, (_this$retryCountGetAd = _classPrivateFieldGet(this, _retryCountGetAddress), _this$retryCountGetAd2 = _this$retryCountGetAd++, _this$retryCountGetAd)), _this$retryCountGetAd2;
        }
        return [address, () => Module.destroyIDCardScanner(address)];
      case 'passport':
      case 'foreign-passport':
        address = Module.getPassportScanner(stringOnWasmHeap);
        return [address, () => Module.destroyPassportScanner(address)];
      case 'alien':
        address = Module.getAlienScanner(stringOnWasmHeap);
        return [address, () => Module.destroyAlienScanner(address)];
      case 'credit':
        address = Module.getCreditScanner(stringOnWasmHeap);
        return [address, () => Module.destroyCreditScanner(address)];
      default:
        throw new Error('Scanner does not exists');
    }
  } catch (e) {
    // TODO : License Issue인 경우 에러 값을 받아서 error 로그를 찍을 수 있게 요청필요 (임시 N번 이상 address를 못받으면 강제 에러)
    console.error('getScannerAddressError()');
    console.error(e);
    throw e;
  }
}
function _getBuffer2() {
  if (!_classPrivateFieldGet(this, _Buffer)) {
    _classPrivateFieldSet(this, _Buffer, Module._malloc(_classPrivateFieldGet(this, _resolutionWidth) * _classPrivateFieldGet(this, _resolutionHeight) * 4));
  }
  if (!_classPrivateFieldGet(this, _resultBuffer)) {
    _classPrivateFieldSet(this, _resultBuffer, Module._malloc(256));
  }
  return [_classPrivateFieldGet(this, _Buffer), _classPrivateFieldGet(this, _resultBuffer)];
}
function _getMaskedImageBase2(_x) {
  return _getMaskedImageBase3.apply(this, arguments);
}
function _getMaskedImageBase3() {
  _getMaskedImageBase3 = _asyncToGenerator(function* (address) {
    try {
      Module.encodeJpgDetectedFrameImage(address, 1);
      var jpgSize = Module.getEncodedJpgSize();
      var jpgPointer = Module.getEncodedJpgBuffer();
      var resultView = new Uint8Array(Module.HEAP8.buffer, jpgPointer, jpgSize);
      var result = new Uint8Array(resultView);
      var blob = new Blob([result], {
        type: 'image/jpeg'
      });
      return yield _classPrivateMethodGet(this, _blobToBase, _blobToBase2).call(this, blob);
    } catch (e) {
      console.error('error:' + e);
      throw e;
    } finally {
      Module.destroyEncodedJpg();
    }
  });
  return _getMaskedImageBase3.apply(this, arguments);
}
function _destroyBuffer2() {
  if (_classPrivateFieldGet(this, _Buffer)) {
    Module._free(_classPrivateFieldGet(this, _Buffer));
    _classPrivateFieldSet(this, _Buffer, null);
  }
  if (_classPrivateFieldGet(this, _resultBuffer) !== null) {
    Module._free(_classPrivateFieldGet(this, _resultBuffer));
    _classPrivateFieldSet(this, _resultBuffer, null);
  }
}
function _destroyPrevImage2() {
  if (_classPrivateFieldGet(this, _PrevImage) !== null) {
    Module._free(_classPrivateFieldGet(this, _PrevImage));
    _classPrivateFieldSet(this, _PrevImage, null);
  }
}
function _destroyStringOnWasmHeap2() {
  if (_classPrivateFieldGet(this, _stringOnWasmHeap)) {
    Module._free(_classPrivateFieldGet(this, _stringOnWasmHeap));
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
function _rotate2(_x2, _x3, _x4) {
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
function _isCardboxDetected2(_x5) {
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
      Module.HEAP8.set(imgData.data, buffer);
      var result = Module.detect_idcard(buffer, _classPrivateFieldGet(this, _resolutionWidth), _classPrivateFieldGet(this, _resolutionHeight), 0);
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
function _startRecognition2(_x6, _x7) {
  return _startRecognition3.apply(this, arguments);
}
function _startRecognition3() {
  _startRecognition3 = _asyncToGenerator(function* (address, ocrType) {
    try {
      if (address == null) {
        return '';
      } else if (address === -1) {
        return 'checkValidation Fail';
      }
      var result = null;
      if (!_classPrivateFieldGet(this, _ocrTypeList).includes(ocrType)) throw new Error('Unsupported OCR type');
      var [, resultBuffer] = _classPrivateMethodGet(this, _getBuffer, _getBuffer2).call(this);
      switch (ocrType) {
        case 'idcard':
        case 'driver':
          result = Module.scanIDCard(address, resultBuffer);
          break;
        case 'passport':
        case 'foreign-passport':
          result = Module.scanPassport(address, resultBuffer);
          break;
        case 'alien':
          result = Module.scanAlien(address, resultBuffer);
          break;
        case 'credit':
          result = Module.scanCredit(address, resultBuffer);
      }
      if (result === null || result === '' || result[0] === 'false') {
        return [false, null, null];
      }
      var [, imgDataUrl] = yield _classPrivateMethodGet(this, _cropImageFromVideo, _cropImageFromVideo2).call(this);
      var maskImage = yield _classPrivateMethodGet(this, _getMaskedImageBase, _getMaskedImageBase2).call(this, address);
      maskImage = maskImage === 'data:' ? null : maskImage;
      return [result, imgDataUrl, maskImage];
    } catch (e) {
      console.error('startRecognition error:' + e);
      throw e;
    }
  });
  return _startRecognition3.apply(this, arguments);
}
function _checkCameraPermission2() {
  clearTimeout(_classPrivateFieldGet(this, _cameraPermissionTimer));
  _classPrivateFieldSet(this, _cameraPermissionTimer, setTimeout(() => {
    _classPrivateMethodGet(this, _proceedCameraPermission, _proceedCameraPermission2).call(this);
  }, 1000));
}
function _proceedCameraPermission2() {
  return _proceedCameraPermission3.apply(this, arguments);
}
function _proceedCameraPermission3() {
  _proceedCameraPermission3 = _asyncToGenerator(function* () {
    _classPrivateMethodGet(this, _closeCamera, _closeCamera2).call(this);
    var isPassport = _classPrivateFieldGet(this, _ocrType).includes('passport');
    yield _classPrivateMethodGet(this, _setupVideo, _setupVideo2).call(this, isPassport);
    try {
      var {
        video,
        canvas
      } = detector.getOCRElements();
      if (video) {
        var [track] = _classPrivateFieldGet(this, _stream).getVideoTracks();
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
        _classPrivateMethodGet(this, _checkCameraPermission, _checkCameraPermission2).call(this);
      } else if (e.name === 'NotReadableError') {
        _classPrivateMethodGet(this, _changeStage, _changeStage2).call(this, IN_PROGRESS.NOT_READY);
        this.stopStream();
        _classPrivateMethodGet(this, _checkCameraPermission, _checkCameraPermission2).call(this);
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
function _getInputDevices2(_x8, _x9) {
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
function _setupVideo2(_x10) {
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
    } catch (err) {
      console.error(err);
      throw new Error('지원 불가능한 카메라 해상도입니다.(지원가능 해상도 : 1920 x 1080 또는 1280 x 720)\n - err:' + err.toString());
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
  if (_classPrivateFieldGet(this, _cameraPermissionTimer)) {
    clearTimeout(_classPrivateFieldGet(this, _cameraPermissionTimer));
    _classPrivateFieldSet(this, _cameraPermissionTimer, null);
  }
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
      source = source.replace("REMOTE_PACKAGE_BASE = \"quram.data\"", "REMOTE_PACKAGE_BASE = \"".concat(new URL('quram.data', _classPrivateFieldGet(this, _options).resourceBaseUrl).href, "\""));
      source = source.replace('function createWasm', 'async function createWasm');
      source = source.replace('var asm = createWasm();', 'await createWasm();');
      source = source.replace('instantiateAsync();', 'await instantiateAsync();');
      return source;
    });
    src = "\n    (async function() {\n      ".concat(src, "\n      Module.lengthBytesUTF8 = lengthBytesUTF8\n      Module.stringToUTF8 = stringToUTF8\n      return Module\n    })()\n        ");
    Module = yield eval(src);
    // console.log('loadResources :: ', Module)
    _classPrivateFieldSet(this, _resourcesLoaded, true);
  });
  return _loadResources3.apply(this, arguments);
}
function _startScanImpl2() {
  var _this3 = this;
  return new Promise((resolve, reject) => {
    var detected = false;
    var address = 0;
    _classPrivateFieldSet(this, _timer, setInterval( /*#__PURE__*/_asyncToGenerator(function* () {
      try {
        // this.#changeStage(IN_PROGRESS.READY);
        if (!Module['asm']) return;

        // TODO : 설정할수 있게 변경 default 값도 제공
        var [resolution_w, resolution_h] = [_classPrivateFieldGet(_this3, _resolutionWidth), _classPrivateFieldGet(_this3, _resolutionHeight)];
        var {
          video
        } = detector.getOCRElements();
        if (resolution_w === 0 || resolution_h === 0) return;
        if (detected) {
          yield _classPrivateMethodGet(_this3, _sleep, _sleep2).call(_this3, 100);
          return;
        }
        // console.log('address before ---------', address);
        if (address === 0 && _classPrivateMethodGet(_this3, _isVideoResolutionCompatible, _isVideoResolutionCompatible2).call(_this3, video)) {
          [address, _classPrivateFieldDestructureSet(_this3, _destroyScannerCallback).value] = _classPrivateMethodGet(_this3, _getScannerAddress, _getScannerAddress2).call(_this3, _classPrivateFieldGet(_this3, _ocrType));
        }
        if (!address) {
          yield _classPrivateMethodGet(_this3, _sleep, _sleep2).call(_this3, 100);
          return;
        }
        // console.log('address after ---------', address);

        // card not detected
        if (!(yield _classPrivateMethodGet(_this3, _isCardboxDetected, _isCardboxDetected2).call(_this3, address))) {
          _classPrivateMethodGet(_this3, _changeStage, _changeStage2).call(_this3, IN_PROGRESS.READY);
          return;
        } else {
          _classPrivateMethodGet(_this3, _changeStage, _changeStage2).call(_this3, IN_PROGRESS.CARD_DETECT);
        }
        if (_classPrivateFieldGet(_this3, _inProgressStep) === IN_PROGRESS.CARD_DETECT) {
          // fallback case 인듯
          // success case
          // if (result !== 'false') {
          //   const PrevImage = getPrevImage();
          //   Module.HEAP8.set(imgData.data, PrevImage);
          // }

          var [scanResult, imgDataUrl, maskImage] = yield _classPrivateMethodGet(_this3, _startRecognition, _startRecognition2).call(_this3, address, _classPrivateFieldGet(_this3, _ocrType));
          // success case
          if (!scanResult.indexOf('true') || scanResult !== 'false') {
            // 인식 성공 스캔 루프 종료
            _classPrivateMethodGet(_this3, _changeStage, _changeStage2).call(_this3, IN_PROGRESS.OCR_SUCCESS);
            console.log("result : ".concat(scanResult));
            var result = {
              api_response: {
                "result_code": "N100",
                "result_message": "OK."
              },
              result: "success",
              review_result: {
                ocr_type: _classPrivateFieldGet(_this3, _ocrType),
                ocr_data: parser.parseOcrResult(_classPrivateFieldGet(_this3, _ocrType), scanResult),
                ocr_origin_image: imgDataUrl,
                ocr_masking_image: maskImage
              }
            };
            if (_classPrivateFieldGet(_this3, _onSuccess)) {
              _classPrivateFieldGet(_this3, _onSuccess).call(_this3, result);
            }
            _this3.stopScan();
            detected = true;
            resolve();
          }
        }
      } catch (e) {
        var message = 'Card detection error : ' + e;
        if (e.toString().includes('memory')) {
          console.debug(message);
          yield _classPrivateMethodGet(_this3, _recoveryScan, _recoveryScan2).call(_this3);
        } else {
          console.error('Card detection error : ' + e);
          _classPrivateMethodGet(_this3, _changeStage, _changeStage2).call(_this3, IN_PROGRESS.OCR_FAILED);
          var _result = {
            api_response: {
              "result_code": "E580",
              "result_message": e.toString()
            },
            result: "failed",
            review_result: {
              ocr_type: _classPrivateFieldGet(_this3, _ocrType),
              error_detail: e.stack
            }
          };
          if (_classPrivateFieldGet(_this3, _onFailure)) {
            _classPrivateFieldGet(_this3, _onFailure).call(_this3, _result);
          }
          reject();
        }
      }
    }), 1));
  });
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
export default UseBOCR;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLmpzIiwibmFtZXMiOlsiZGV0ZWN0b3IiLCJwYXJzZXIiLCJNb2R1bGUiLCJpbnN0YW5jZSIsIklOX1BST0dSRVNTIiwiTk9UX1JFQURZIiwiUkVBRFkiLCJDQVJEX0RFVEVDVCIsIk9DUl9SRUNPR05JWkUiLCJPQ1JfU1VDQ0VTUyIsIk9DUl9GQUlMRUQiLCJfbGljZW5zZSIsIldlYWtNYXAiLCJfb2NyVHlwZSIsIl9vblN1Y2Nlc3MiLCJfb25GYWlsdXJlIiwiX29jclR5cGVMaXN0IiwiX29jciIsIl9jYW52YXMiLCJfcm90YXRpb25DYW52YXMiLCJfdmlkZW8iLCJfdmlkZW9XcmFwIiwiX2d1aWRlQm94IiwiX2d1aWRlQm94V3JhcCIsIl9tYXNrQm94V3JhcCIsIl9CdWZmZXIiLCJfcmVzdWx0QnVmZmVyIiwiX1ByZXZJbWFnZSIsIl9zdHJpbmdPbldhc21IZWFwIiwiX2NhbVNldENvbXBsZXRlIiwiX3Jlc29sdXRpb25XaWR0aCIsIl9yZXNvbHV0aW9uSGVpZ2h0IiwiX3ZpZGVvV2lkdGgiLCJfdmlkZW9IZWlnaHQiLCJfcmVzb3VyY2VzTG9hZGVkIiwiX3RpbWVyIiwiX2NhbWVyYVBlcm1pc3Npb25UaW1lciIsIl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCIsIl9zdHJlYW0iLCJfZGVzdHJveVNjYW5uZXJDYWxsYmFjayIsIl9mYWNpbmdNb2RlQ29uc3RyYWludCIsIl91aU9yaWVudGF0aW9uIiwiX3ByZXZVaU9yaWVudGF0aW9uIiwiX3ZpZGVvT3JpZW50YXRpb24iLCJfdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyIiwiX3Rocm90dGxpbmdSZXNpemVEZWxheSIsIl9tYXhSZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9yZXRyeUNvdW50R2V0QWRkcmVzcyIsIl9kZXZpY2VJbmZvIiwiX2lzUm90YXRlZDkwb3IiLCJfaW5Qcm9ncmVzc1N0ZXAiLCJfaXNJblByb2dyZXNzSGFuZGxlUmVzaXplIiwiX29wdGlvbnMiLCJfd2luZG93RXZlbnRCaW5kIiwiV2Vha1NldCIsIl9zbGVlcCIsIl9ibG9iVG9CYXNlIiwiX2dldFN0cmluZ09uV2FzbUhlYXAiLCJfc2V0VmlkZW9SZXNvbHV0aW9uIiwiX2dldFNjYW5uZXJBZGRyZXNzIiwiX2dldEJ1ZmZlciIsIl9nZXRNYXNrZWRJbWFnZUJhc2UiLCJfZGVzdHJveUJ1ZmZlciIsIl9kZXN0cm95UHJldkltYWdlIiwiX2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwIiwiX2Rlc3Ryb3lTY2FubmVyQWRkcmVzcyIsIl9pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUiLCJfZ2V0Um90YXRpb25EZWdyZWUiLCJfZ2V0TWlycm9yTW9kZSIsIl9jcm9wSW1hZ2VGcm9tVmlkZW8iLCJfcm90YXRlIiwiX2lzQ2FyZGJveERldGVjdGVkIiwiX3N0YXJ0UmVjb2duaXRpb24iLCJfY2hlY2tDYW1lcmFQZXJtaXNzaW9uIiwiX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uIiwiX3NldFN0eWxlIiwiX2NoYW5nZVN0YWdlIiwiX2dldElucHV0RGV2aWNlcyIsIl9jaGVja1VJT3JpZW50YXRpb24iLCJfc2V0dXBEb21FbGVtZW50cyIsIl9zZXR1cFZpZGVvIiwiX2FkanVzdFN0eWxlIiwiX2Nsb3NlQ2FtZXJhIiwiX2xvYWRSZXNvdXJjZXMiLCJfc3RhcnRTY2FuSW1wbCIsIl9zdGFydFNjYW4iLCJfcmVjb3ZlcnlTY2FuIiwiVXNlQk9DUiIsImNvbnN0cnVjdG9yIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjIiwiX2RlZmluZVByb3BlcnR5IiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJ3cml0YWJsZSIsInZhbHVlIiwic2hvd0NsaXBGcmFtZSIsInNob3dDYW52YXNQcmV2aWV3IiwiZnJhbWVCb3JkZXJTdHlsZSIsIndpZHRoIiwic3R5bGUiLCJyYWRpdXMiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdGluZyIsImRldGVjdF9mYWlsZWQiLCJkZXRlY3Rfc3VjY2VzcyIsIm1hc2tfZnJhbWUiLCJjbGlwX2ZyYW1lIiwicmVzb3VyY2VCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGV2aWNlTGFiZWwiLCJ2aWRlb1RhcmdldElkIiwicm90YXRpb25EZWdyZWUiLCJtaXJyb3JNb2RlIiwiaW5pdCIsInNldHRpbmdzIiwibGljZW5zZUtleSIsIkVycm9yIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiXyIsIm1lcmdlIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiaW5pdGlhbGl6ZWQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX3dpbmRvd0V2ZW50QmluZDIiLCJjYWxsIiwiZ2V0T3NWZXJzaW9uIiwiY29uc29sZSIsImRlYnVnIiwib3NTaW1wbGUiLCJzdGFydE9DUiIsInR5cGUiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3N0YXJ0U2NhbjIiLCJlIiwiZXJyb3IiLCJjbGVhbnVwIiwiX2Nsb3NlQ2FtZXJhMiIsInN0b3BTY2FuIiwiY2xlYXJJbnRlcnZhbCIsImxvZyIsImNhbnZhcyIsImdldE9DUkVsZW1lbnRzIiwiY2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJ3aWxsUmVhZEZyZXF1ZW50bHkiLCJjbGVhclJlY3QiLCJoZWlnaHQiLCJzdG9wU3RyZWFtIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzdG9wIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwibGVuZ3RoIiwiZm9yRWFjaCIsInRyYWNrIiwiX2Rlc3Ryb3lTY2FubmVyQWRkcmVzczIiLCJfZGVzdHJveUJ1ZmZlcjIiLCJfZGVzdHJveVByZXZJbWFnZTIiLCJfZGVzdHJveVN0cmluZ09uV2FzbUhlYXAyIiwiX3RoaXMyIiwiX3RoaXNfIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwic2tpcFRvdWNoQWN0aW9uZm9yWm9vbSIsImV2IiwidG91Y2hlcyIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJvbmJlZm9yZXVubG9hZCIsImhhbmRsZVJlc2l6ZSIsIl9yZWYiLCJhcHBseSIsImFyZ3VtZW50cyIsInNldFRpbWVvdXQiLCJfc2xlZXAyIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9ibG9iVG9CYXNlMiIsImJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIl9nZXRTdHJpbmdPbldhc21IZWFwMiIsImxlbmd0aEJ5dGVzIiwibGVuZ3RoQnl0ZXNVVEY4IiwiX21hbGxvYyIsInN0cmluZ1RvVVRGOCIsIl9zZXRWaWRlb1Jlc29sdXRpb24yIiwidmlkZW9FbGVtZW50IiwiaXNTdXBwb3J0ZWRSZXNvbHV0aW9uIiwicmVzb2x1dGlvblRleHQiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJfY2hhbmdlU3RhZ2UyIiwic3JjT2JqZWN0IiwiX2dldFNjYW5uZXJBZGRyZXNzMiIsIm9jclR5cGUiLCJpbmNsdWRlcyIsImFkZHJlc3MiLCJzdHJpbmdPbldhc21IZWFwIiwiZ2V0SURDYXJkU2Nhbm5lciIsIl90aGlzJHJldHJ5Q291bnRHZXRBZCIsIl90aGlzJHJldHJ5Q291bnRHZXRBZDIiLCJkZXN0cm95SURDYXJkU2Nhbm5lciIsImdldFBhc3Nwb3J0U2Nhbm5lciIsImRlc3Ryb3lQYXNzcG9ydFNjYW5uZXIiLCJnZXRBbGllblNjYW5uZXIiLCJkZXN0cm95QWxpZW5TY2FubmVyIiwiZ2V0Q3JlZGl0U2Nhbm5lciIsImRlc3Ryb3lDcmVkaXRTY2FubmVyIiwiX2dldEJ1ZmZlcjIiLCJfZ2V0TWFza2VkSW1hZ2VCYXNlMiIsIl94IiwiX2dldE1hc2tlZEltYWdlQmFzZTMiLCJlbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UiLCJqcGdTaXplIiwiZ2V0RW5jb2RlZEpwZ1NpemUiLCJqcGdQb2ludGVyIiwiZ2V0RW5jb2RlZEpwZ0J1ZmZlciIsInJlc3VsdFZpZXciLCJVaW50OEFycmF5IiwiSEVBUDgiLCJidWZmZXIiLCJCbG9iIiwiZGVzdHJveUVuY29kZWRKcGciLCJfZnJlZSIsIl9pc1ZpZGVvUmVzb2x1dGlvbkNvbXBhdGlibGUyIiwiX2dldFJvdGF0aW9uRGVncmVlMiIsIl9nZXRNaXJyb3JNb2RlMiIsIl9jcm9wSW1hZ2VGcm9tVmlkZW8yIiwiX2Nyb3BJbWFnZUZyb21WaWRlbzMiLCJjYWxjUmVzb2x1dGlvbl93IiwiY2FsY1Jlc29sdXRpb25faCIsInZpZGVvIiwicm90YXRpb25DYW52YXMiLCJndWlkZUJveCIsImNhbGNDYW52YXMiLCJjYWxjVmlkZW9XaWR0aCIsImNhbGNWaWRlb0hlaWdodCIsImNhbGNWaWRlb0NsaWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYWxjVmlkZW9DbGllbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCIsImNhbGNHdWlkZUJveENsaWVudEhlaWdodCIsImNhbGNWaWRlb09yaWVudGF0aW9uIiwiY2FsY01heFNXaWR0aCIsImNhbGNNYXhTSGVpZ2h0Iiwic3giLCJzeSIsInJhdGlvIiwic1dpZHRoIiwiTWF0aCIsIm1pbiIsInJvdW5kIiwic0hlaWdodCIsImNhbGNDb250ZXh0IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsImltZ0RhdGFVcmwiLCJ0b0RhdGFVUkwiLCJfcm90YXRlMiIsIl94MiIsIl94MyIsIl94NCIsIl9yb3RhdGUzIiwiZGVncmVlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0ZW1wQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcENvbnRleHQiLCJwb3NpdGlvbiIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBJIiwibmV3SW1hZ2VEYXRhIiwicmVzdG9yZSIsIl9pc0NhcmRib3hEZXRlY3RlZDIiLCJfeDUiLCJfaXNDYXJkYm94RGV0ZWN0ZWQzIiwic2V0IiwiZGF0YSIsImRldGVjdF9pZGNhcmQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfc3RhcnRSZWNvZ25pdGlvbjIiLCJfeDYiLCJfeDciLCJfc3RhcnRSZWNvZ25pdGlvbjMiLCJyZXN1bHRCdWZmZXIiLCJzY2FuSURDYXJkIiwic2NhblBhc3Nwb3J0Iiwic2NhbkFsaWVuIiwic2NhbkNyZWRpdCIsIm1hc2tJbWFnZSIsIl9jaGVja0NhbWVyYVBlcm1pc3Npb24yIiwiY2xlYXJUaW1lb3V0IiwiX3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uMiIsIl9wcm9jZWVkQ2FtZXJhUGVybWlzc2lvbjMiLCJpc1Bhc3Nwb3J0IiwiX3NldHVwVmlkZW8yIiwiZ2V0VmlkZW9UcmFja3MiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwbGF5IiwiX2FkanVzdFN0eWxlMiIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwibmFtZSIsIl9zZXRTdHlsZTIiLCJlbCIsIk9iamVjdCIsImFzc2lnbiIsInZhbCIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsIl9nZXRJbnB1dERldmljZXMyIiwiX3g4IiwiX3g5IiwiX2dldElucHV0RGV2aWNlczMiLCJraW5kIiwibGFiZWwiLCJtZWRpYURldmljZXMiLCJkZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsInZpZGVvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImNvbmNhdCIsImdldENhcGFiaWxpdGllcyIsIl9jYXAkZmFjaW5nTW9kZSIsImNhcCIsImZhY2luZ01vZGUiLCJfY2hlY2tVSU9yaWVudGF0aW9uMiIsImN1cnJlbnQiLCJnZXRVSU9yaWVudGF0aW9uIiwib2NyIiwiaXNDaGFuZ2VkIiwiX3NldHVwRG9tRWxlbWVudHMyIiwidmlkZW9XcmFwIiwiZ3VpZGVCb3hXcmFwIiwibWFza0JveFdyYXAiLCJyZW1vdmUiLCJvY3JTdHlsZSIsIndyYXBTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNldEF0dHJpYnV0ZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwidmlkZW9TdHlsZSIsInJvdGF0ZUNzcyIsIm1pcnJvckNzcyIsInJvdGF0ZUFuZE1pcnJvckNzcyIsIl9vYmplY3RTcHJlYWQiLCJjYW52YXNTdHlsZSIsImJvcmRlciIsInJpZ2h0IiwidG9wIiwiX3gxMCIsIl9zZXR1cFZpZGVvMyIsImRldmljZUlkTGlzdCIsIm1hcCIsImRldmljZUlkIiwiY29uc3RyYWludFdpZHRoIiwiY29uc3RyYWludEhlaWdodCIsImlkZWFsIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInpvb20iLCJmb2N1c01vZGUiLCJ3aGl0ZUJhbGFuY2VNb2RlIiwic3RyZWFtIiwiZ2V0VXNlck1lZGlhIiwiZXJyIiwiYmFzZVdpZHRoIiwiYmFzZUhlaWdodCIsInNjYW5uZXJGcmFtZVJhdGlvIiwiZ3VpZGVCb3hXaWR0aCIsImd1aWRlQm94SGVpZ2h0IiwibmV3VmlkZW9XaWR0aCIsIm5ld1ZpZGVvSGVpZ2h0IiwiY2FsY09jckNsaWVudFdpZHRoIiwiY2FsY09jckNsaWVudEhlaWdodCIsImd1aWRlQm94UmF0aW9CeVdpZHRoIiwidmlkZW9SYXRpb0J5SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFza0JveElubmVyIiwicXVlcnlTZWxlY3RvciIsIk51bWJlciIsIl9sb2FkUmVzb3VyY2VzMiIsIl9sb2FkUmVzb3VyY2VzMyIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsInRleHQiLCJyZWdleCIsInNvdXJjZSIsInJlcGxhY2UiLCJldmFsIiwiX3N0YXJ0U2NhbkltcGwyIiwiX3RoaXMzIiwicmVqZWN0IiwiZGV0ZWN0ZWQiLCJzZXRJbnRlcnZhbCIsInJlc29sdXRpb25fdyIsInJlc29sdXRpb25faCIsIl9jbGFzc1ByaXZhdGVGaWVsZERlc3RydWN0dXJlU2V0Iiwic2NhblJlc3VsdCIsImluZGV4T2YiLCJhcGlfcmVzcG9uc2UiLCJyZXZpZXdfcmVzdWx0Iiwib2NyX3R5cGUiLCJvY3JfZGF0YSIsInBhcnNlT2NyUmVzdWx0Iiwib2NyX29yaWdpbl9pbWFnZSIsIm9jcl9tYXNraW5nX2ltYWdlIiwiX3JlY292ZXJ5U2NhbjIiLCJlcnJvcl9kZXRhaWwiLCJzdGFjayIsIl9zdGFydFNjYW4zIiwiX3JlY292ZXJ5U2NhbjMiXSwic291cmNlcyI6WyJvY3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRldGVjdG9yIGZyb20gJy4vaGVscGVycy9kZXRlY3Rvci5qcyc7XG5pbXBvcnQgcGFyc2VyIGZyb20gJy4vaGVscGVycy9wYXJzZXIuanMnO1xuXG5sZXQgTW9kdWxlO1xubGV0IGluc3RhbmNlO1xuXG5jb25zdCBJTl9QUk9HUkVTUyA9IHtcbiAgTk9UX1JFQURZOiAnbm90X3JlYWR5JyxcbiAgUkVBRFk6ICdyZWFkeScsXG4gIENBUkRfREVURUNUOiAnZGV0ZWN0aW5nJyxcbiAgT0NSX1JFQ09HTklaRTogJ3JlY29nbml6aW5nJyxcbiAgT0NSX1NVQ0NFU1M6ICdkZXRlY3Rfc3VjY2VzcycsXG4gIE9DUl9GQUlMRUQ6ICdkZXRlY3RfZmFpbGVkJyxcbn1cblxuY2xhc3MgVXNlQk9DUiB7XG4gIC8qKiBwdWJsaWMgcHJvcGVydGllcyAqL1xuICBpbml0aWFsaXplZCA9IGZhbHNlO1xuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICNsaWNlbnNlO1xuICAjb2NyVHlwZSA9IG51bGw7XG4gICNvblN1Y2Nlc3MgPSBudWxsO1xuICAjb25GYWlsdXJlID0gbnVsbDtcbiAgI29jclR5cGVMaXN0ID0gW1xuICAgICdpZGNhcmQnLFxuICAgICdkcml2ZXInLFxuICAgICdwYXNzcG9ydCcsXG4gICAgJ2ZvcmVpZ24tcGFzc3BvcnQnLFxuICAgICdhbGllbicsXG4gICAgJ2NyZWRpdCcsXG4gIF07XG4gICNvY3I7XG4gICNjYW52YXM7XG4gICNyb3RhdGlvbkNhbnZhcztcbiAgI3ZpZGVvO1xuICAjdmlkZW9XcmFwO1xuICAjZ3VpZGVCb3g7XG4gICNndWlkZUJveFdyYXA7XG4gICNtYXNrQm94V3JhcDtcbiAgI0J1ZmZlciA9IG51bGw7XG4gICNyZXN1bHRCdWZmZXIgPSBudWxsO1xuICAjUHJldkltYWdlID0gbnVsbDtcbiAgI3N0cmluZ09uV2FzbUhlYXAgPSBudWxsO1xuICAjY2FtU2V0Q29tcGxldGUgPSBmYWxzZTtcbiAgI3Jlc29sdXRpb25XaWR0aCA9IDA7XG4gICNyZXNvbHV0aW9uSGVpZ2h0ID0gMDtcbiAgI3ZpZGVvV2lkdGggPSAwO1xuICAjdmlkZW9IZWlnaHQgPSAwO1xuICAjcmVzb3VyY2VzTG9hZGVkID0gZmFsc2U7XG4gICN0aW1lcjtcbiAgI2NhbWVyYVBlcm1pc3Npb25UaW1lcjtcbiAgI3JlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuICAjc3RyZWFtO1xuICAjZGVzdHJveVNjYW5uZXJDYWxsYmFjayA9IG51bGw7XG4gICNmYWNpbmdNb2RlQ29uc3RyYWludCA9ICdlbnZpcm9ubWVudCc7XG4gICN1aU9yaWVudGF0aW9uID0gJyc7XG4gICNwcmV2VWlPcmllbnRhdGlvbiA9ICcnO1xuICAjdmlkZW9PcmllbnRhdGlvbiA9ICcnO1xuICAjdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgI3Rocm90dGxpbmdSZXNpemVEZWxheSA9IDUwMDtcbiAgI21heFJldHJ5Q291bnRHZXRBZGRyZXNzID0gMzAwOyAgICAgICAvLyDsnoTsi5xcbiAgI3JldHJ5Q291bnRHZXRBZGRyZXNzID0gMDsgICAgICAgICAgICAvLyDsnoTsi5xcbiAgI2RldmljZUluZm87XG4gICNpc1JvdGF0ZWQ5MG9yMjcwID0gZmFsc2U7XG4gICNpblByb2dyZXNzU3RlcCA9IElOX1BST0dSRVNTLk5PVF9SRUFEWTtcbiAgI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IGZhbHNlO1xuXG4gIC8qKiBEZWZhdWx0IG9wdGlvbnMgKi9cbiAgI29wdGlvbnMgPSB7XG4gICAgc2hvd0NsaXBGcmFtZTogZmFsc2UsXG4gICAgc2hvd0NhbnZhc1ByZXZpZXc6IGZhbHNlLFxuICAgIGZyYW1lQm9yZGVyU3R5bGU6IHtcbiAgICAgIHdpZHRoOiAxMCxcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIG5vdF9yZWFkeTogJyMwMDAwMDAnLCAvLyDqsoDsoJVcbiAgICAgIHJlYWR5OiAnI2I4YjhiOCcsIC8vIO2ajOyDiVxuICAgICAgZGV0ZWN0aW5nOiAnI2ZmOTUxYycsIC8vIOyjvO2ZqVxuICAgICAgZGV0ZWN0X2ZhaWxlZDogJyNGQTExM0QnLCAvLyDruajqsJVcbiAgICAgIGRldGVjdF9zdWNjZXNzOiAnIzVjYjg1YycsIC8vIOy0iOuhnVxuICAgICAgbWFza19mcmFtZTogJyMyMDIwMjMnLCAgICAgIC8vIOuLpO2BrOq3uOugiOydtCAo7Yis66qF64+E64qUIOyImOygleu2iOqwgCBmZuuhnCDqs6DsoJUpXG4gICAgICBjbGlwX2ZyYW1lOiAnI2ZmMDBiZicsICAgICAgLy8g65Sl7Y287ZSMICjsiJjsoJXrtojqsIApXG4gICAgfSxcbiAgICByZXNvdXJjZUJhc2VVcmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgIGRldmljZUxhYmVsOiAnJyxcbiAgICB2aWRlb1RhcmdldElkOiAnJyxcbiAgICByb3RhdGlvbkRlZ3JlZTogMCxcbiAgICBtaXJyb3JNb2RlOiBmYWxzZSxcbiAgfTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKiBwdWJsaWMgbWV0aG9kcyAqL1xuICBpbml0KHNldHRpbmdzKSB7XG4gICAgaWYgKCEhIXNldHRpbmdzLmxpY2Vuc2VLZXkpIHRocm93IG5ldyBFcnJvcignTGljZW5zZSBrZXkgaXMgZW1wdHknKTtcblxuICAgIHRoaXMuI2xpY2Vuc2UgPSBzZXR0aW5ncy5saWNlbnNlS2V5O1xuXG4gICAgdGhpcy4jb3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuI29wdGlvbnMsIHNldHRpbmdzKTtcblxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy4jd2luZG93RXZlbnRCaW5kKCk7XG4gICAgICB0aGlzLiNkZXZpY2VJbmZvID0gZGV0ZWN0b3IuZ2V0T3NWZXJzaW9uKCk7XG4gICAgICBjb25zb2xlLmRlYnVnKCd0aGlzLiNkZXZpY2VJbmZvLm9zU2ltcGxlIDo6ICcgKyB0aGlzLiNkZXZpY2VJbmZvLm9zU2ltcGxlKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN0YXJ0T0NSKHR5cGUsIG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG4gICAgaWYgKCEhIXR5cGUgfHwgISEhb25TdWNjZXNzIHx8ICEhIW9uRmFpbHVyZSkge1xuICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlclwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNvY3JUeXBlID0gdHlwZTtcbiAgICAgIHRoaXMuI29uU3VjY2VzcyA9IG9uU3VjY2VzcztcbiAgICAgIHRoaXMuI29uRmFpbHVyZSA9IG9uRmFpbHVyZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGluaXRpYWxpemVkIScpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLiNzdGFydFNjYW4oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdlcnJvciBpbiBzdGFydE9DUigpIDogJyArIGUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgICB0aGlzLiNvblN1Y2Nlc3MgPSBudWxsO1xuICAgICAgdGhpcy4jb25GYWlsdXJlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogcHJpdmF0ZSBtZXRob2RzICovXG4gICN3aW5kb3dFdmVudEJpbmQoKSB7XG4gICAgY29uc3QgX3RoaXNfID0gdGhpcztcblxuICAgIGlmICgvaXBob25lfGlwb2R8aXBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgY29uc3Qgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSA9IChldikgPT4ge1xuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSxcbiAgICAgICAgeyBwYXNzaXZlOiBmYWxzZSB9XG4gICAgICApO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICBza2lwVG91Y2hBY3Rpb25mb3Jab29tLFxuICAgICAgICB7IHBhc3NpdmU6IGZhbHNlIH1cbiAgICAgICk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgc2tpcFRvdWNoQWN0aW9uZm9yWm9vbSxcbiAgICAgICAgeyBwYXNzaXZlOiBmYWxzZSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzXy5jbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSkge1xuICAgICAgICBfdGhpc18uI2lzSW5Qcm9ncmVzc0hhbmRsZVJlc2l6ZSA9IHRydWU7XG4gICAgICAgIF90aGlzXy4jdGhyb3R0bGluZ1Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgY29uc29sZS5sb2coJyEhISBSRVNJWkUgRVZFTlQgISEhJyk7XG4gICAgICAgIGlmICghISFfdGhpc18uI29jclR5cGUpIHJldHVybjtcbiAgICAgICAgdGhpcy4jY2xvc2VDYW1lcmEoKTtcbiAgICAgICAgX3RoaXNfLiNpc0luUHJvZ3Jlc3NIYW5kbGVSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgX3RoaXNfLnN0YXJ0T0NSKF90aGlzXy4jb2NyVHlwZSwgdGhpcy4jb25TdWNjZXNzLCB0aGlzLiNvbkZhaWx1cmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJyEhISBTS0lQIFJFU0laRSBFVkVOVCAtIHByZXZpb3VzIHJlc2l6ZSBldmVudCBwcm9jZXNzIGlzIG5vdCBjb21wbGV0ZWQgeWV0ICEhIScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoISEhX3RoaXNfLiN0aHJvdHRsaW5nUmVzaXplVGltZXIpIHtcbiAgICAgICAgX3RoaXNfLiN0aHJvdHRsaW5nUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGhhbmRsZVJlc2l6ZSwgX3RoaXNfLiN0aHJvdHRsaW5nUmVzaXplRGVsYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gICNzbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG4gICNibG9iVG9CYXNlNjQoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgfSk7XG4gIH1cbiAgLyoqIOudvOydtOyEvOyKpCDtgqTrpbwgaGVhcCDsl5AgYWxsb2NhdGlvbiAqL1xuICAjZ2V0U3RyaW5nT25XYXNtSGVhcCgpIHtcbiAgICBpZiAoISEhdGhpcy4jbGljZW5zZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGljZW5zZSBLZXkgaXMgZW1wdHlcIik7XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aEJ5dGVzID0gTW9kdWxlLmxlbmd0aEJ5dGVzVVRGOCh0aGlzLiNsaWNlbnNlKSArIDE7XG4gICAgdGhpcy4jc3RyaW5nT25XYXNtSGVhcCA9IE1vZHVsZS5fbWFsbG9jKGxlbmd0aEJ5dGVzKTtcbiAgICBNb2R1bGUuc3RyaW5nVG9VVEY4KHRoaXMuI2xpY2Vuc2UsIHRoaXMuI3N0cmluZ09uV2FzbUhlYXAsIGxlbmd0aEJ5dGVzKTtcbiAgICByZXR1cm4gdGhpcy4jc3RyaW5nT25XYXNtSGVhcDtcbiAgfVxuICAjc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCkge1xuICAgIGxldCBpc1N1cHBvcnRlZFJlc29sdXRpb24gPSBmYWxzZTtcbiAgICBsZXQgcmVzb2x1dGlvblRleHQgPSAnbm90IHJlYWR5JztcblxuICAgIGlmICghdGhpcy4jY2FtU2V0Q29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiwgcmVzb2x1dGlvblRleHQgfTtcbiAgICB9XG5cbiAgICBpZiAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgcmV0dXJuIHsgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLCByZXNvbHV0aW9uVGV4dCB9O1xuICAgIH1cblxuICAgIHJlc29sdXRpb25UZXh0ID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggKyAneCcgKyB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICAodmlkZW9FbGVtZW50LnZpZGVvV2lkdGggPT09IDEwODAgJiYgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0ID09PSAxOTIwKSB8fFxuICAgICAgKHZpZGVvRWxlbWVudC52aWRlb1dpZHRoID09PSAxOTIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTA4MClcbiAgICApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gMTI4MCAmJiB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQgPT09IDcyMCkgfHxcbiAgICAgICh2aWRlb0VsZW1lbnQudmlkZW9XaWR0aCA9PT0gNzIwICYmIHZpZGVvRWxlbWVudC52aWRlb0hlaWdodCA9PT0gMTI4MClcbiAgICApIHtcbiAgICAgIGlzU3VwcG9ydGVkUmVzb2x1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uID0gZmFsc2VcbiAgICB9XG4gICAgdGhpcy4jdmlkZW9XaWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgIHRoaXMuI3ZpZGVvSGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHJldHVybiB7IGlzU3VwcG9ydGVkUmVzb2x1dGlvbiwgcmVzb2x1dGlvblRleHQgfTtcbiAgfVxuICAjZ2V0U2Nhbm5lckFkZHJlc3Mob2NyVHlwZSkge1xuICAgIGlmICghdGhpcy4jb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG5cbiAgICBsZXQgYWRkcmVzcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmluZ09uV2FzbUhlYXAgPSB0aGlzLiNnZXRTdHJpbmdPbldhc21IZWFwKCk7XG5cbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICAgIGFkZHJlc3MgPSBNb2R1bGUuZ2V0SURDYXJkU2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICBpZiAoYWRkcmVzcyA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuI21heFJldHJ5Q291bnRHZXRBZGRyZXNzID09PSB0aGlzLiNyZXRyeUNvdW50R2V0QWRkcmVzcykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBMaWNlbnNlIEtleVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuI3JldHJ5Q291bnRHZXRBZGRyZXNzKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbYWRkcmVzcywgKCkgPT4gTW9kdWxlLmRlc3Ryb3lJRENhcmRTY2FubmVyKGFkZHJlc3MpXTtcbiAgICAgICAgY2FzZSAncGFzc3BvcnQnOlxuICAgICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgICAgICBhZGRyZXNzID0gTW9kdWxlLmdldFBhc3Nwb3J0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICByZXR1cm4gW2FkZHJlc3MsICgpID0+IE1vZHVsZS5kZXN0cm95UGFzc3BvcnRTY2FubmVyKGFkZHJlc3MpXTtcbiAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICAgIGFkZHJlc3MgPSBNb2R1bGUuZ2V0QWxpZW5TY2FubmVyKHN0cmluZ09uV2FzbUhlYXApO1xuICAgICAgICAgIHJldHVybiBbYWRkcmVzcywgKCkgPT4gTW9kdWxlLmRlc3Ryb3lBbGllblNjYW5uZXIoYWRkcmVzcyldO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIGFkZHJlc3MgPSBNb2R1bGUuZ2V0Q3JlZGl0U2Nhbm5lcihzdHJpbmdPbldhc21IZWFwKTtcbiAgICAgICAgICByZXR1cm4gW2FkZHJlc3MsICgpID0+IE1vZHVsZS5kZXN0cm95Q3JlZGl0U2Nhbm5lcihhZGRyZXNzKV07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gOiBMaWNlbnNlIElzc3Vl7J24IOqyveyasCDsl5Drn6wg6rCS7J2EIOuwm+yVhOyEnCBlcnJvciDroZzqt7jrpbwg7LCN7J2EIOyImCDsnojqsowg7JqU7LKt7ZWE7JqUICjsnoTsi5wgTuuyiCDsnbTsg4EgYWRkcmVzc+ulvCDrqrvrsJvsnLzrqbQg6rCV7KCcIOyXkOufrClcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2dldFNjYW5uZXJBZGRyZXNzRXJyb3IoKScpO1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gICNnZXRCdWZmZXIoKSB7XG4gICAgaWYgKCF0aGlzLiNCdWZmZXIpIHtcbiAgICAgIHRoaXMuI0J1ZmZlciA9IE1vZHVsZS5fbWFsbG9jKFxuICAgICAgICB0aGlzLiNyZXNvbHV0aW9uV2lkdGggKiB0aGlzLiNyZXNvbHV0aW9uSGVpZ2h0ICogNFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLiNyZXN1bHRCdWZmZXIpIHtcbiAgICAgIHRoaXMuI3Jlc3VsdEJ1ZmZlciA9IE1vZHVsZS5fbWFsbG9jKDI1Nik7XG4gICAgfVxuICAgIHJldHVybiBbdGhpcy4jQnVmZmVyLCB0aGlzLiNyZXN1bHRCdWZmZXJdO1xuICB9XG4gIGFzeW5jICNnZXRNYXNrZWRJbWFnZUJhc2U2NChhZGRyZXNzKSB7XG4gICAgdHJ5IHtcbiAgICAgIE1vZHVsZS5lbmNvZGVKcGdEZXRlY3RlZEZyYW1lSW1hZ2UoYWRkcmVzcywgMSk7XG4gICAgICBjb25zdCBqcGdTaXplID0gTW9kdWxlLmdldEVuY29kZWRKcGdTaXplKCk7XG4gICAgICBjb25zdCBqcGdQb2ludGVyID0gTW9kdWxlLmdldEVuY29kZWRKcGdCdWZmZXIoKTtcblxuICAgICAgY29uc3QgcmVzdWx0VmlldyA9IG5ldyBVaW50OEFycmF5KFxuICAgICAgICBNb2R1bGUuSEVBUDguYnVmZmVyLFxuICAgICAgICBqcGdQb2ludGVyLFxuICAgICAgICBqcGdTaXplXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0Vmlldyk7XG5cbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzdWx0XSwgeyB0eXBlOiAnaW1hZ2UvanBlZycgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy4jYmxvYlRvQmFzZTY0KGJsb2IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIE1vZHVsZS5kZXN0cm95RW5jb2RlZEpwZygpO1xuICAgIH1cbiAgfVxuICAvKiogRnJlZSBidWZmZXIgKi9cbiAgI2Rlc3Ryb3lCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuI0J1ZmZlcikge1xuICAgICAgTW9kdWxlLl9mcmVlKHRoaXMuI0J1ZmZlcik7XG4gICAgICB0aGlzLiNCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy4jcmVzdWx0QnVmZmVyICE9PSBudWxsKSB7XG4gICAgICBNb2R1bGUuX2ZyZWUodGhpcy4jcmVzdWx0QnVmZmVyKTtcbiAgICAgIHRoaXMuI3Jlc3VsdEJ1ZmZlciA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKiBGcmVlIFByZXZJbWFnZSBidWZmZXIgKi9cbiAgI2Rlc3Ryb3lQcmV2SW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuI1ByZXZJbWFnZSAhPT0gbnVsbCkge1xuICAgICAgTW9kdWxlLl9mcmVlKHRoaXMuI1ByZXZJbWFnZSk7XG4gICAgICB0aGlzLiNQcmV2SW1hZ2UgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKiogZnJlZSBzdHJpbmcgaGVhcCBidWZmZXIgKi9cbiAgI2Rlc3Ryb3lTdHJpbmdPbldhc21IZWFwKCkge1xuICAgIGlmICh0aGlzLiNzdHJpbmdPbldhc21IZWFwKSB7XG4gICAgICBNb2R1bGUuX2ZyZWUodGhpcy4jc3RyaW5nT25XYXNtSGVhcCk7XG4gICAgICB0aGlzLiNzdHJpbmdPbldhc21IZWFwID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIGZyZWUgc2Nhbm5lciBhZGRyZXNzICovXG4gICNkZXN0cm95U2Nhbm5lckFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMuI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuICAjaXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvRWxlbWVudCkge1xuICAgIGNvbnN0IHsgaXNTdXBwb3J0ZWRSZXNvbHV0aW9uLCByZXNvbHV0aW9uVGV4dCB9ID0gdGhpcy4jc2V0VmlkZW9SZXNvbHV0aW9uKHZpZGVvRWxlbWVudCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFJlc29sdXRpb24pIHtcbiAgICAgIGlmIChyZXNvbHV0aW9uVGV4dCAhPT0gJ25vdCByZWFkeScpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVmlkZW8gUmVzb2x1dGlvbignICsgcmVzb2x1dGlvblRleHQgKyAnKSBpcyBub3QgU3VwcG9ydGVkIScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSZXNvbHV0aW9uO1xuICB9XG4gICNnZXRSb3RhdGlvbkRlZ3JlZSgpIHtcbiAgICByZXR1cm4gKCh0aGlzLiNvcHRpb25zLnJvdGF0aW9uRGVncmVlICUgMzYwKSArIDM2MCkgJSAzNjA7XG4gIH1cbiAgI2dldE1pcnJvck1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI29wdGlvbnMubWlycm9yTW9kZTtcbiAgfVxuICBhc3luYyAjY3JvcEltYWdlRnJvbVZpZGVvKCkge1xuICAgIGlmICghdGhpcy4jY2FtU2V0Q29tcGxldGUpIHJldHVybiBbbnVsbCwgbnVsbF07XG5cbiAgICBsZXQgW2NhbGNSZXNvbHV0aW9uX3csIGNhbGNSZXNvbHV0aW9uX2hdID0gW3RoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodF07XG4gICAgY29uc3QgeyB2aWRlbywgY2FudmFzLCByb3RhdGlvbkNhbnZhcywgZ3VpZGVCb3ggfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG5cbiAgICAvLyBzb3VyY2UgaW1hZ2UgKG9yIHZpZGVvKVxuICAgIC8vIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUk1xuICAgIC8vIOKUgyAgICAg4pSKIHN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDXG4gICAgLy8g4pSD4pSI4pSI4pSI4pSIIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgc3ggIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogc0hlaWdodCAgICAgICDilINcbiAgICAvLyDilIMgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiBjYW52YXNcbiAgICAvLyDilIMgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICAgICAgICDilIPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJNcbiAgICAvLyDilIMgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAgICAgICAg4pSDICAgIOKUiiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg1xuICAgIC8vIOKUgyAgICAgICAgICAgc1dpZHRoICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICDilIogZHkgICAgICAgICAgICAgICAgICAgICAgICDilINcbiAgICAvLyDilJfilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJsgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTIOKUiiAgICAgICAgIOKUg1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUg+KUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgZHggICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogZEhlaWdodCDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgIOKUgyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUl+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUmyDilIogICAgICAgICDilINcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiOKUiCAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICBkV2lkdGggICAgICAgICAgICAgICAg4pSDXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSX4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSbXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHkpXG4gICAgLy8gZHJhd0ltYWdlKGltYWdlLCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBkcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL2RyYXdJbWFnZVxuXG4gICAgbGV0IGNhbGNDYW52YXMgPSBjYW52YXM7XG4gICAgbGV0IGNhbGNWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICBsZXQgY2FsY1ZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudFdpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0NsaWVudEhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcbiAgICBsZXQgY2FsY0d1aWRlQm94Q2xpZW50V2lkdGggPSBndWlkZUJveC5jbGllbnRXaWR0aFxuICAgIGxldCBjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHQgPSBndWlkZUJveC5jbGllbnRIZWlnaHRcbiAgICBsZXQgY2FsY1ZpZGVvT3JpZW50YXRpb24gPSB0aGlzLiN2aWRlb09yaWVudGF0aW9uO1xuXG4gICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgIFtjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCwgY2FsY0d1aWRlQm94Q2xpZW50SGVpZ2h0XSA9IFtjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHQsIGNhbGNHdWlkZUJveENsaWVudFdpZHRoXTtcbiAgICAgIFtjYWxjUmVzb2x1dGlvbl93LCBjYWxjUmVzb2x1dGlvbl9oXSA9IFtjYWxjUmVzb2x1dGlvbl9oLCBjYWxjUmVzb2x1dGlvbl93XTtcbiAgICAgIGNhbGNDYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICAgIGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgICB9XG5cbiAgICBsZXQgY2FsY01heFNXaWR0aCA9IDk5OTk5O1xuICAgIGxldCBjYWxjTWF4U0hlaWdodCA9IDk5OTk5O1xuXG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHtcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDshLjroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTV2lkdGggPSBjYWxjVmlkZW9XaWR0aDtcbiAgICAgICAgY2FsY01heFNIZWlnaHQgPSBjYWxjVmlkZW9IZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDshLjroZwgVUkgLyDqsIDroZwg7Lm066mU6528XG4gICAgICAgIGNhbGNNYXhTSGVpZ2h0ID0gY2FsY1ZpZGVvSGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJIC8g6rCA66GcIOy5tOuplOudvFxuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOqwgOuhnCBVSSAvIOyEuOuhnCDsubTrqZTrnbxcbiAgICAgICAgY2FsY01heFNXaWR0aCA9IGNhbGNWaWRlb1dpZHRoO1xuICAgICAgICBjYWxjTWF4U0hlaWdodCA9IGNhbGNWaWRlb0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3gsIHN5O1xuICAgIGNvbnN0IHJhdGlvID0gKGNhbGNWaWRlb1dpZHRoIC8gY2FsY1ZpZGVvQ2xpZW50V2lkdGgpO1xuICAgIGNvbnN0IHNXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2FsY0d1aWRlQm94Q2xpZW50V2lkdGggKiByYXRpbyksIGNhbGNNYXhTV2lkdGgpO1xuICAgIGNvbnN0IHNIZWlnaHQgPSBNYXRoLm1pbihNYXRoLnJvdW5kKGNhbGNHdWlkZUJveENsaWVudEhlaWdodCAqIHJhdGlvKSwgY2FsY01heFNIZWlnaHQpO1xuXG4gICAgc3ggPSBNYXRoLnJvdW5kKCgoY2FsY1ZpZGVvQ2xpZW50V2lkdGggLSBjYWxjR3VpZGVCb3hDbGllbnRXaWR0aCkgLyAyKSAqIHJhdGlvKTtcbiAgICBzeSA9IE1hdGgucm91bmQoKChjYWxjVmlkZW9DbGllbnRIZWlnaHQgLSBjYWxjR3VpZGVCb3hDbGllbnRIZWlnaHQpIC8gMikgKiByYXRpbyk7XG5cbiAgICBjb25zdCBjYWxjQ29udGV4dCA9IGNhbGNDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KTtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdzeCwgc3ksIHNXaWR0aChyZXNvbHV0aW9uX3cpLCBzSGVpZ2h0KHJlc29sdXRpb25faCksIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0Jywgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICBjYWxjQ29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICB2aWRlbyxcbiAgICAgIHN4LFxuICAgICAgc3ksXG4gICAgICBzV2lkdGgsXG4gICAgICBzSGVpZ2h0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBjYWxjUmVzb2x1dGlvbl93LFxuICAgICAgY2FsY1Jlc29sdXRpb25faFxuICAgICk7XG5cbiAgICBjb25zdCBpbWdEYXRhID0gY2FsY0NvbnRleHQuZ2V0SW1hZ2VEYXRhKFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBjYWxjUmVzb2x1dGlvbl93LFxuICAgICAgY2FsY1Jlc29sdXRpb25faFxuICAgICk7XG4gICAgY29uc3QgaW1nRGF0YVVybCA9IGNhbGNDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XG5cbiAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCB0aGlzLiNnZXRSb3RhdGlvbkRlZ3JlZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtpbWdEYXRhLCBpbWdEYXRhVXJsXTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgI3JvdGF0ZShpbWdEYXRhLCBpbWdEYXRhVXJsLCBkZWdyZWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChkZWdyZWUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShbaW1nRGF0YSwgaW1nRGF0YVVybF0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgaW1nLnNyYyA9IGltZ0RhdGFVcmw7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIC8vIGNhbnZhcyA9IHJvdGF0aW9uQ2FudmFzO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGV4dCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGVtcENhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgICAgICBpZiAoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkpIHtcbiAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gaW1nLmhlaWdodFxuICAgICAgICAgIHRlbXBDYW52YXMuaGVpZ2h0ID0gaW1nLndpZHRoXG4gICAgICAgIH0gZWxzZSBpZiAoWzAsIDE4MF0uaW5jbHVkZXMoZGVncmVlKSkge1xuICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBpbWcud2lkdGhcbiAgICAgICAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVncmVlID09PSA5MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKGltZy5oZWlnaHQsIDApXG4gICAgICAgIGVsc2UgaWYgKGRlZ3JlZSA9PT0gMTgwKSB0ZW1wQ29udGV4dC50cmFuc2xhdGUoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuICAgICAgICBlbHNlIGlmIChkZWdyZWUgPT09IDI3MCkgdGVtcENvbnRleHQudHJhbnNsYXRlKDAsIGltZy53aWR0aClcblxuICAgICAgICB0ZW1wQ29udGV4dC5yb3RhdGUoZGVncmVlICogTWF0aC5QSSAvIDE4MClcbiAgICAgICAgdGVtcENvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMClcbiAgICAgICAgY29uc3QgbmV3SW1hZ2VEYXRhID0gWzkwLCAyNzBdLmluY2x1ZGVzKGRlZ3JlZSkgPyB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLmhlaWdodCwgaW1nLndpZHRoKSA6IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHRlbXBDb250ZXh0KTtcbiAgICAgICAgcmVzb2x2ZShbbmV3SW1hZ2VEYXRhLCB0ZW1wQ2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpXSlcbiAgICAgICAgdGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuICBhc3luYyAjaXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcykge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW2J1ZmZlcl0gPSB0aGlzLiNnZXRCdWZmZXIoKTtcbiAgICAgIGNvbnN0IFtpbWdEYXRhXSA9IGF3YWl0IHRoaXMuI2Nyb3BJbWFnZUZyb21WaWRlbygpO1xuICAgICAgaWYgKCEhIWltZ0RhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgTW9kdWxlLkhFQVA4LnNldChpbWdEYXRhLmRhdGEsIGJ1ZmZlcik7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IE1vZHVsZS5kZXRlY3RfaWRjYXJkKFxuICAgICAgICBidWZmZXIsXG4gICAgICAgIHRoaXMuI3Jlc29sdXRpb25XaWR0aCxcbiAgICAgICAgdGhpcy4jcmVzb2x1dGlvbkhlaWdodCxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0NhcmRib3hEZXRlY3RlZCByZXN1bHQgLT0tLS0tLScsIHJlc3VsdClcbiAgICAgIHJldHVybiAhIXJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yIDogJyArIGU7XG5cbiAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ21lbW9yeScpKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgI3N0YXJ0UmVjb2duaXRpb24oYWRkcmVzcywgb2NyVHlwZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAoYWRkcmVzcyA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICdjaGVja1ZhbGlkYXRpb24gRmFpbCc7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgICBpZiAoIXRoaXMuI29jclR5cGVMaXN0LmluY2x1ZGVzKG9jclR5cGUpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG5cbiAgICAgIGNvbnN0IFssIHJlc3VsdEJ1ZmZlcl0gPSB0aGlzLiNnZXRCdWZmZXIoKTtcbiAgICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgICAgIHJlc3VsdCA9IE1vZHVsZS5zY2FuSURDYXJkKGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICAgICAgcmVzdWx0ID0gTW9kdWxlLnNjYW5QYXNzcG9ydChhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbGllbic6XG4gICAgICAgICAgcmVzdWx0ID0gTW9kdWxlLnNjYW5BbGllbihhZGRyZXNzLCByZXN1bHRCdWZmZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIHJlc3VsdCA9IE1vZHVsZS5zY2FuQ3JlZGl0KGFkZHJlc3MsIHJlc3VsdEJ1ZmZlcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSAnJyB8fCByZXN1bHRbMF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCwgbnVsbF07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFssIGltZ0RhdGFVcmxdID0gYXdhaXQgdGhpcy4jY3JvcEltYWdlRnJvbVZpZGVvKCk7XG4gICAgICBsZXQgbWFza0ltYWdlID0gYXdhaXQgdGhpcy4jZ2V0TWFza2VkSW1hZ2VCYXNlNjQoYWRkcmVzcyk7XG4gICAgICBtYXNrSW1hZ2UgPSAobWFza0ltYWdlID09PSAnZGF0YTonID8gbnVsbCA6IG1hc2tJbWFnZSk7XG5cbiAgICAgIHJldHVybiBbcmVzdWx0LCBpbWdEYXRhVXJsLCBtYXNrSW1hZ2VdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3N0YXJ0UmVjb2duaXRpb24gZXJyb3I6JyArIGUpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgI2NoZWNrQ2FtZXJhUGVybWlzc2lvbigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVyKTtcbiAgICB0aGlzLiNjYW1lcmFQZXJtaXNzaW9uVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuI3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgYXN5bmMgI3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCkge1xuICAgIHRoaXMuI2Nsb3NlQ2FtZXJhKCk7XG4gICAgY29uc3QgaXNQYXNzcG9ydCA9IHRoaXMuI29jclR5cGUuaW5jbHVkZXMoJ3Bhc3Nwb3J0Jyk7XG4gICAgYXdhaXQgdGhpcy4jc2V0dXBWaWRlbyhpc1Bhc3Nwb3J0KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHZpZGVvLCBjYW52YXMgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgY29uc3QgW3RyYWNrXSA9IHRoaXMuI3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICAvLyBjb25zdCBjYXBhYmlsaXR5ID0gdHJhY2suZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ0NhcmRTY2FuI2luaXRpYWxpemUgY2FwYWJpbGl0eScsIGNhcGFiaWxpdHkpO1xuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gdmlkZW8pIHtcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSB0aGlzLiNzdHJlYW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQXZvaWQgdXNpbmcgdGhpcyBpbiBuZXcgYnJvd3NlcnMsIGFzIGl0IGlzIGdvaW5nIGF3YXkuXG4gICAgICAgICAgdmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy4jc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdwcm9jZWVkQ2FtZXJhUGVybWlzc2lvbiAtIG9ubG9hZGVkbWV0YWRhdGEnKTtcbiAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2NhbnBsYXknKTtcblxuICAgICAgICAgIC8vIHZpZGVvIGVsZW1lbnQgc3R5bGUg7ISk7KCVXG4gICAgICAgICAgdGhpcy4jdmlkZW9PcmllbnRhdGlvbiA9XG4gICAgICAgICAgICB2aWRlby52aWRlb1dpZHRoIC8gdmlkZW8udmlkZW9IZWlnaHQgPCAxID8gJ3BvcnRyYWl0JyA6ICdsYW5kc2NhcGUnO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ3RoaXMuI2RldmljZUluZm8ub3NTaW1wbGUgOjogJyArIHRoaXMuI2RldmljZUluZm8ub3NTaW1wbGUpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ3RoaXMuI3VpT3JpZW50YXRpb24gOjogJyArIHRoaXMuI3VpT3JpZW50YXRpb24pO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ3RoaXMuI3ZpZGVvT3JpZW50YXRpb24gOjogJyArIHRoaXMuI3ZpZGVvT3JpZW50YXRpb24pO1xuXG4gICAgICAgICAgdGhpcy4jY2FtU2V0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuI2FkanVzdFN0eWxlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgIHZpZGVvLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLiNjbG9zZUNhbWVyYSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZS5uYW1lLCBlKTtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIHRoaXMuI2NoZWNrQ2FtZXJhUGVybWlzc2lvbigpO1xuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdOb3RSZWFkYWJsZUVycm9yJykge1xuICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5OT1RfUkVBRFkpO1xuICAgICAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICAgICAgdGhpcy4jY2hlY2tDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHN0eWxlKTtcbiAgfTtcblxuICAjY2hhbmdlU3RhZ2UodmFsKSB7XG4gICAgdGhpcy4jaW5Qcm9ncmVzc1N0ZXAgPSB2YWw7XG4gICAgY29uc3QgeyBndWlkZUJveCB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS53aWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy4jb3B0aW9ucy5mcmFtZUJvcmRlclN0eWxlLnN0eWxlLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzICsgJ3B4JyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGVbdmFsXSxcbiAgICB9O1xuXG4gICAgaWYgKGd1aWRlQm94KSB7XG4gICAgICB0aGlzLiNzZXRTdHlsZShndWlkZUJveCwgc3R5bGUpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jICNnZXRJbnB1dERldmljZXMoa2luZCwgbGFiZWwpIHtcbiAgICAvLyB0aHJvdyBlcnJvciBpZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGRldmljZXMgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBkZXZpY2VzLmZpbHRlcigoZGV2aWNlKSA9PiB7XG4gICAgICBpZiAoZGV2aWNlLmtpbmQgPT09IGAke2tpbmR9aW5wdXRgICYmIGRldmljZS5nZXRDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgY29uc3QgY2FwID0gZGV2aWNlLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgICBpZiAoY2FwPy5mYWNpbmdNb2RlPy5pbmNsdWRlcyh0aGlzLiNmYWNpbmdNb2RlQ29uc3RyYWludCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB2aWRlb0RldmljZXMubGVuZ3RoIDw9IDFcbiAgICAgID8gdmlkZW9EZXZpY2VzXG4gICAgICA6IHZpZGVvRGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4gKGxhYmVsID8gZGV2aWNlLmxhYmVsLmluY2x1ZGVzKGxhYmVsKSA6IHRydWUpKTtcbiAgfVxuXG4gICNjaGVja1VJT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRldGVjdG9yLmdldFVJT3JpZW50YXRpb24oZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKS5vY3IpO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy4jcHJldlVpT3JpZW50YXRpb24pIHtcbiAgICAgIHRoaXMuI3VpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgdGhpcy4jcHJldlVpT3JpZW50YXRpb24gPSBjdXJyZW50O1xuICAgICAgaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgY3VycmVudCwgaXNDaGFuZ2VkIH07XG4gIH1cblxuICAjc2V0dXBEb21FbGVtZW50cygpIHtcbiAgICBsZXQgeyBvY3IsIHZpZGVvLCBjYW52YXMsIHJvdGF0aW9uQ2FudmFzLCBndWlkZUJveCwgdmlkZW9XcmFwLCBndWlkZUJveFdyYXAsIG1hc2tCb3hXcmFwIH0gPSBkZXRlY3Rvci5nZXRPQ1JFbGVtZW50cygpO1xuXG4gICAgaWYgKCFvY3IpIG5ldyBFcnJvcihcIm9jciBkaXYgZWxlbWVudCBpcyBub3QgZXhpc3RcIik7XG5cbiAgICBpZiAodmlkZW9XcmFwKSB2aWRlb1dyYXAucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94V3JhcCkgZ3VpZGVCb3hXcmFwLnJlbW92ZSgpO1xuICAgIGlmICh2aWRlbykgdmlkZW8ucmVtb3ZlKCk7XG4gICAgaWYgKGNhbnZhcykgY2FudmFzLnJlbW92ZSgpO1xuICAgIGlmIChyb3RhdGlvbkNhbnZhcykgcm90YXRpb25DYW52YXMucmVtb3ZlKCk7XG4gICAgaWYgKGd1aWRlQm94KSBndWlkZUJveC5yZW1vdmUoKTtcbiAgICBpZiAobWFza0JveFdyYXApIG1hc2tCb3hXcmFwLnJlbW92ZSgpO1xuXG4gICAgY29uc3Qgcm90YXRpb25EZWdyZWUgPSB0aGlzLiNnZXRSb3RhdGlvbkRlZ3JlZSgpO1xuICAgIHRoaXMuI2lzUm90YXRlZDkwb3IyNzAgPSAoWzkwLCAyNzBdLmluY2x1ZGVzKHJvdGF0aW9uRGVncmVlKSk7XG5cbiAgICBsZXQgb2NyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgfTtcbiAgICB0aGlzLiNzZXRTdHlsZShvY3IsIG9jclN0eWxlKTtcblxuICAgIGNvbnN0IHdyYXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLCAgICAgICAgICAvLyB2ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcbiAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9O1xuXG4gICAgdmlkZW9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlkZW9XcmFwLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICd2aWRlb1dyYXAnKTtcbiAgICBpZiAodmlkZW9XcmFwKSB7XG4gICAgICB3aGlsZSAodmlkZW9XcmFwLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdmlkZW9XcmFwLnJlbW92ZUNoaWxkKHZpZGVvV3JhcC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgdGhpcy4jc2V0U3R5bGUodmlkZW9XcmFwLCB3cmFwU3R5bGUpO1xuICAgIH1cbiAgICBvY3IuYXBwZW5kQ2hpbGQodmlkZW9XcmFwKTtcblxuICAgIG1hc2tCb3hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ21hc2tCb3hXcmFwJyk7XG4gICAgbWFza0JveFdyYXAuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICBtYXNrQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgdGhpcy4jc2V0U3R5bGUobWFza0JveFdyYXAsIHdyYXBTdHlsZSk7XG5cbiAgICBsZXQgbWFza19mcmFtZSA9IHRoaXMuI29wdGlvbnMuZnJhbWVCb3JkZXJTdHlsZS5tYXNrX2ZyYW1lICsgJ2ZmJztcbiAgICBpZiAoISF0aGlzLiNvcHRpb25zLnNob3dDbGlwRnJhbWUpIHtcbiAgICAgIG1hc2tfZnJhbWUgPSB0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUuY2xpcF9mcmFtZSArICc1NSc7XG4gICAgfVxuXG4gICAgbWFza0JveFdyYXAuaW5uZXJIVE1MID0gXCJcIiArXG4gICAgICBcIiAgPHN2ZyBpZD0nbWFza0JveENvbnRhaW5lcicgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cXG5cIiArXG4gICAgICBcIiAgICA8bWFzayBpZD0nbWFzay1yZWN0Jz5cXG5cIiArXG4gICAgICBcIiAgICAgIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3doaXRlJz48L3JlY3Q+XFxuXCIgK1xuICAgICAgXCIgICAgICA8c3ZnIHg9JzUwJScgeT0nNTAlJyBvdmVyZmxvdz0ndmlzaWJsZSc+XFxuXCIgK1xuICAgICAgXCIgICAgICAgICAgPHJlY3QgaWQ9J21hc2tCb3hJbm5lcidcXG5cIiArXG4gICAgICBcIiAgICAgICAgICAgIHdpZHRoPSc0MDAnIGhlaWdodD0nMjYwJ1xcblwiICtcbiAgICAgIFwiICAgICAgICAgICAgeD0nLTIwMCcgeT0nLTEzMCdcXG5cIiArXG4gICAgICBcIiAgICAgICAgICAgIHJ4PScxMCcgcnk9JzEwJ1xcblwiICtcbiAgICAgIFwiICAgICAgICAgICAgZmlsbD0nYmxhY2snIHN0cm9rZT0nYmxhY2snPjwvcmVjdD5cXG5cIiArXG4gICAgICBcIiAgICAgIDwvc3ZnPlxcblwiICtcbiAgICAgIFwiICAgIDwvbWFzaz5cXG5cIiArXG4gICAgICBcIiAgICA8cmVjdCBpZD0nbWFza0JveE91dGVyJ1xcblwiICtcbiAgICAgIFwiICAgICAgICAgIHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnXFxuXCIgK1xuICAgICAgXCIgICAgICAgICAgZmlsbD0nXCIgKyBtYXNrX2ZyYW1lICsgXCInIG1hc2s9J3VybCgjbWFzay1yZWN0KSc+PC9yZWN0PlxcblwiICtcbiAgICAgIFwiICA8L3N2Zz5cIlxuICAgIG9jci5hcHBlbmRDaGlsZChtYXNrQm94V3JhcCk7XG5cbiAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ3ZpZGVvJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG5cbiAgICBsZXQgdmlkZW9TdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdGF0ZUNzcyA9ICdyb3RhdGUoJyArIHJvdGF0aW9uRGVncmVlICsgJ2RlZyknO1xuICAgIGNvbnN0IG1pcnJvckNzcyA9ICdyb3RhdGVZKDE4MGRlZyknXG4gICAgY29uc3Qgcm90YXRlQW5kTWlycm9yQ3NzID0gbWlycm9yQ3NzICsgJyAnICsgcm90YXRlQ3NzO1xuXG5cbiAgICBpZiAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCkge1xuICAgICAgaWYgKHRoaXMuI2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUFuZE1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQW5kTWlycm9yQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiByb3RhdGVBbmRNaXJyb3JDc3MsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHJvdGF0ZUNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogcm90YXRlQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiByb3RhdGVDc3MsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuI2dldE1pcnJvck1vZGUoKSkge1xuICAgICAgICB2aWRlb1N0eWxlID0ge1xuICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IG1pcnJvckNzcyxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogbWlycm9yQ3NzLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiBtaXJyb3JDc3MsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy4jc2V0U3R5bGUodmlkZW8sIHZpZGVvU3R5bGUpO1xuXG4gICAgdmlkZW9XcmFwLmFwcGVuZENoaWxkKHZpZGVvKTtcblxuICAgIGd1aWRlQm94V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGd1aWRlQm94V3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnZ3VpZGVCb3hXcmFwJyk7XG4gICAgdGhpcy4jc2V0U3R5bGUoZ3VpZGVCb3hXcmFwLCB3cmFwU3R5bGUpO1xuICAgIG9jci5hcHBlbmRDaGlsZChndWlkZUJveFdyYXApO1xuXG4gICAgZ3VpZGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlYi1vY3InLCAnZ3VpZGVCb3gnKTtcbiAgICBndWlkZUJveC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIGd1aWRlQm94LnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICB0aGlzLiNzZXRTdHlsZShndWlkZUJveCwge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB9KTtcblxuICAgIGd1aWRlQm94V3JhcC5hcHBlbmRDaGlsZChndWlkZUJveCk7XG5cbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXVzZWItb2NyJywgJ2NhbnZhcycpO1xuXG4gICAgY29uc3QgY2FudmFzU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLiNvcHRpb25zLnNob3dDYW52YXNQcmV2aWV3ID8gKHRoaXMuI2lzUm90YXRlZDkwb3IyNzAgPyAnbm9uZScgOiAnZGlzcGxheScpIDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcyNSUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3JkZXI6ICdncmVlbiAycHggc29saWQnXG4gICAgfVxuICAgIHRoaXMuI3NldFN0eWxlKGNhbnZhcywgY2FudmFzU3R5bGUpO1xuXG4gICAgb2NyLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgICByb3RhdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJvdGF0aW9uQ2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS11c2ViLW9jcicsICdyb3RhdGlvbkNhbnZhcycpO1xuXG4gICAgdGhpcy4jc2V0U3R5bGUocm90YXRpb25DYW52YXMsIHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuI29wdGlvbnMuc2hvd0NhbnZhc1ByZXZpZXcgPyAodGhpcy4jaXNSb3RhdGVkOTBvcjI3MCA/ICdkaXNwbGF5JyA6ICdub25lJykgOiAnbm9uZScsXG4gICAgICBoZWlnaHQ6ICcyNSUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogJzBweCcsXG4gICAgICB0b3A6ICcwcHgnLFxuICAgICAgYm9yZGVyOiAnYmx1ZSAycHggc29saWQnXG4gICAgfSk7XG4gICAgb2NyLmFwcGVuZENoaWxkKHJvdGF0aW9uQ2FudmFzKTtcblxuICAgIHRoaXMuI29jciA9IG9jcjtcbiAgICB0aGlzLiNjYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy4jcm90YXRpb25DYW52YXMgPSByb3RhdGlvbkNhbnZhcztcbiAgICB0aGlzLiN2aWRlbyA9IHZpZGVvO1xuICAgIHRoaXMuI3ZpZGVvV3JhcCA9IHZpZGVvV3JhcDtcbiAgICB0aGlzLiNndWlkZUJveCA9IGd1aWRlQm94O1xuICAgIHRoaXMuI2d1aWRlQm94V3JhcCA9IGd1aWRlQm94V3JhcDtcbiAgICB0aGlzLiNtYXNrQm94V3JhcCA9IG1hc2tCb3hXcmFwO1xuXG4gICAgcmV0dXJuIHsgb2NyLCBjYW52YXMsIHJvdGF0aW9uQ2FudmFzLCB2aWRlbywgdmlkZW9XcmFwLCBndWlkZUJveCwgZ3VpZGVCb3hXcmFwLCBtYXNrQm94V3JhcCB9O1xuICB9XG5cbiAgYXN5bmMgI3NldHVwVmlkZW8oaXNQYXNzcG9ydCkge1xuICAgIC8vIHdhc20g7J247Iud7ISx64qlIOy1nOygge2ZlOuQnCDtlbTsg4Hrj4RcbiAgICB0aGlzLiNyZXNvbHV0aW9uV2lkdGggPSAxMDgwO1xuICAgIHRoaXMuI3Jlc29sdXRpb25IZWlnaHQgPSA3MjA7XG5cbiAgICB0aGlzLiNjYW1TZXRDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBvY3IsIHZpZGVvLCBjYW52YXMsIHJvdGF0aW9uQ2FudmFzIH0gPSB0aGlzLiNzZXR1cERvbUVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCB2aWRlb0RldmljZXMgPSBhd2FpdCB0aGlzLiNnZXRJbnB1dERldmljZXMoJ3ZpZGVvJywgdGhpcy4jb3B0aW9ucy5kZXZpY2VMYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvRGV2aWNlcyA6OiAnLCB2aWRlb0RldmljZXMpXG4gICAgY29uc3QgZGV2aWNlSWRMaXN0ID0gdmlkZW9EZXZpY2VzLm1hcCgoZGV2aWNlKSA9PiBkZXZpY2UuZGV2aWNlSWQpO1xuXG4gICAgdGhpcy4jY2hlY2tVSU9yaWVudGF0aW9uKCk7XG4gICAgbGV0IGNvbnN0cmFpbnRXaWR0aCwgY29uc3RyYWludEhlaWdodDtcbiAgICBpZiAodGhpcy4jdWlPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JykgeyAgICAgICAgIC8vIHVpIDogcG9ydHJhaXRcbiAgICAgIGNvbnN0cmFpbnRXaWR0aCA9IHtcbiAgICAgICAgaWRlYWw6IDE5MjAsICAgICAgICAgIC8vIHBvcnRyYWl0IOydtOyngOunjCDsubTrqZTrnbzripQgbGFuZHNjYXBlIOyduOqyveyasFxuICAgICAgICBtaW46IDEwODAsICAgICAgICAgICAgLy8gcG9ydHJhaXQg7J206rOgIOy5tOuplOudvOuPhCBwb3J0cmFpdCDsnbjqsr3smrBcbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50SGVpZ2h0ID0ge1xuICAgICAgICBpZGVhbDogMTA4MCwgICAgICAgICAgLy8gcG9ydHJhaXQg7J207KeA66eMIOy5tOuplOudvOuKlCBsYW5kc2NhcGUg7J246rK97JqwXG4gICAgICAgIG1pbjogNzIwLCAgICAgICAgICAgICAvLyBwb3J0cmFpdCDsnbTqs6Ag7Lm066mU652864+EIHBvcnRyYWl0IOyduOqyveyasFxuICAgICAgfTtcbiAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVpIDogbGFuZHNjYXBlXG4gICAgICBjb25zdHJhaW50V2lkdGggPSB7XG4gICAgICAgIGlkZWFsOiAxOTIwLFxuICAgICAgICBtaW46IDEyODAsXG4gICAgICB9O1xuICAgICAgY29uc3RyYWludEhlaWdodCA9IHtcbiAgICAgICAgaWRlYWw6IDEwODAsXG4gICAgICAgIG1pbjogNzIwLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25zdHJhaW50cyA9IHtcbiAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHpvb206IHsgaWRlYWw6IDEgfSxcbiAgICAgICAgZmFjaW5nTW9kZTogeyBpZGVhbDogdGhpcy4jZmFjaW5nTW9kZUNvbnN0cmFpbnQgfSxcbiAgICAgICAgZm9jdXNNb2RlOiB7IGlkZWFsOiAnY29udGludW91cycgfSxcbiAgICAgICAgd2hpdGVCYWxhbmNlTW9kZTogeyBpZGVhbDogJ2NvbnRpbnVvdXMnIH0sXG4gICAgICAgIGRldmljZUlkOiB7XG4gICAgICAgICAgaWRlYWw6IGRldmljZUlkTGlzdC5sZW5ndGggPiAwID8gZGV2aWNlSWRMaXN0W2RldmljZUlkTGlzdC5sZW5ndGggLSAxXSA6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6IGNvbnN0cmFpbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb25zdHJhaW50SGVpZ2h0LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0IGR1bXB0cmFjayA9IChbYSwgYl0sIHRyYWNrKSA9PlxuICAgICAgLy8gICBgJHthfSR7dHJhY2sua2luZCA9PSAndmlkZW8nID8gJ0NhbWVyYScgOiAnTWljcm9waG9uZSd9ICgke3RyYWNrLnJlYWR5U3RhdGV9KTogJHt0cmFjay5sYWJlbH0ke2J9YDtcblxuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3ZpZGVvVHJhY2tzIDo6ICcsIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpKVxuICAgICAgLy8gY29uc3Qgc3RyZWFtU2V0dGluZ3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRTZXR0aW5ncygpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbUNhcGFiaWxpdGllcyA6OiAnLCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5nZXRDYXBhYmlsaXRpZXMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gOjogJywgc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0Q29uc3RyYWludHMoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW1TZXR0aW5ncyA6OiAnLCBzdHJlYW1TZXR0aW5ncylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gd2lkdGggOjogJyArIHN0cmVhbVNldHRpbmdzLndpZHRoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJlYW0gaGVpZ2h0IDo6ICcgKyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSB3aWR0aCAvIGhlaWdodCA6OiAnICsgc3RyZWFtU2V0dGluZ3Mud2lkdGggLyBzdHJlYW1TZXR0aW5ncy5oZWlnaHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N0cmVhbSBhc3BlY3RSYXRpbyA6OiAnICsgc3RyZWFtU2V0dGluZ3MuYXNwZWN0UmF0aW8pO1xuXG4gICAgICBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSA9IFt0aGlzLiNyZXNvbHV0aW9uV2lkdGgsIHRoaXMuI3Jlc29sdXRpb25IZWlnaHRdO1xuICAgICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgW3JvdGF0aW9uQ2FudmFzLndpZHRoLCByb3RhdGlvbkNhbnZhcy5oZWlnaHRdID0gW3RoaXMuI3Jlc29sdXRpb25IZWlnaHQsIHRoaXMuI3Jlc29sdXRpb25XaWR0aF07XG4gICAgICB9XG5cbiAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgIHRoaXMuI3N0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ+yngOybkCDrtojqsIDriqXtlZwg7Lm066mU6528IO2VtOyDgeuPhOyeheuLiOuLpC4o7KeA7JuQ6rCA64qlIO2VtOyDgeuPhCA6IDE5MjAgeCAxMDgwIOuYkOuKlCAxMjgwIHggNzIwKVxcbiAtIGVycjonICtcbiAgICAgICAgZXJyLnRvU3RyaW5nKClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgI2FkanVzdFN0eWxlKCkge1xuICAgIGNvbnN0IHsgb2NyLCB2aWRlbywgY2FudmFzLCBndWlkZUJveCwgdmlkZW9XcmFwLCBtYXNrQm94V3JhcCB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICBjb25zb2xlLmRlYnVnKCdhZGp1c3RTdHlsZScpO1xuICAgIC8vIOq4sOykgOygleuztFxuICAgIGNvbnN0IGJhc2VXaWR0aCA9IDQwMDtcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gMjYwO1xuXG4gICAgY29uc3Qgc2Nhbm5lckZyYW1lUmF0aW8gPSBiYXNlSGVpZ2h0IC8gYmFzZVdpZHRoOyAgICAgICAvLyDsi6DrtoTspp0g67mE7JyoXG5cbiAgICBsZXQgZ3VpZGVCb3hXaWR0aCwgZ3VpZGVCb3hIZWlnaHQsIG5ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0O1xuXG4gICAgbGV0IGNhbGNPY3JDbGllbnRXaWR0aCA9IG9jci5jbGllbnRXaWR0aFxuICAgIGxldCBjYWxjT2NyQ2xpZW50SGVpZ2h0ID0gb2NyLmNsaWVudEhlaWdodFxuICAgIGxldCBjYWxjVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgbGV0IGNhbGNWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRXaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgIGxldCBjYWxjVmlkZW9DbGllbnRIZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgbGV0IGNhbGNWaWRlb09yaWVudGF0aW9uID0gdGhpcy4jdmlkZW9PcmllbnRhdGlvbjtcblxuICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICBbY2FsY1ZpZGVvV2lkdGgsIGNhbGNWaWRlb0hlaWdodF0gPSBbY2FsY1ZpZGVvSGVpZ2h0LCBjYWxjVmlkZW9XaWR0aF07XG4gICAgICBbY2FsY1ZpZGVvQ2xpZW50V2lkdGgsIGNhbGNWaWRlb0NsaWVudEhlaWdodF0gPSBbY2FsY1ZpZGVvQ2xpZW50SGVpZ2h0LCBjYWxjVmlkZW9DbGllbnRXaWR0aF07XG4gICAgICBjYWxjVmlkZW9PcmllbnRhdGlvbiA9IHRoaXMuI3ZpZGVvT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI3VpT3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcpIHsgICAgICAgICAgICAgICAvLyDshLjroZwgVUlcbiAgICAgIC8vIHZpZGVvIOqwgOuhnCDquLDspIAgMTAwJSDsnKDsp4AgKOuzgOqyveyXhuydjClcbiAgICAgIGlmIChjYWxjVmlkZW9PcmllbnRhdGlvbiA9PT0gdGhpcy4jdWlPcmllbnRhdGlvbikgeyAgIC8vIOy5tOuplOudvOuPhCDshLjroZxcbiAgICAgICAgLy8vIOyEuOuhnCBVSSAmJiDshLjroZwg7Lm066mU6528XG4gICAgICAgIC8vIOqwgOuhnCDquLDspIDsnLzroZwg6rCA7J2065Oc67CV7IqkIOqzhOyCsFxuICAgICAgICBjb25zdCBndWlkZUJveFJhdGlvQnlXaWR0aCA9IDAuODtcbiAgICAgICAgZ3VpZGVCb3hXaWR0aCA9IGNhbGNPY3JDbGllbnRXaWR0aCAqIGd1aWRlQm94UmF0aW9CeVdpZHRoO1xuICAgICAgICBndWlkZUJveEhlaWdodCA9IGd1aWRlQm94V2lkdGggKiBzY2FubmVyRnJhbWVSYXRpbztcblxuICAgICAgICAvLyDqsIDsnbTrk5wg67CV7IqkIOqwgOuhnCDquLDspIDsnLzroZwg7Lm066mU6528IO2ZleuMgFxuICAgICAgICBuZXdWaWRlb1dpZHRoID0gZ3VpZGVCb3hXaWR0aDtcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBuZXdWaWRlb1dpZHRoICogKGNhbGNWaWRlb0hlaWdodCAvIGNhbGNWaWRlb1dpZHRoKTtcbiAgICAgICAgaWYgKHRoaXMuI2lzUm90YXRlZDkwb3IyNzApIHtcbiAgICAgICAgICBbbmV3VmlkZW9XaWR0aCwgbmV3VmlkZW9IZWlnaHRdID0gW25ld1ZpZGVvSGVpZ2h0LCBuZXdWaWRlb1dpZHRoXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDsubTrqZTrnbzripQg6rCA66GcXG4gICAgICAgIC8vIOqwgOydtOuTnCDrsJXsiqTrpbwg7IS466GcIOq4uOydtOyXkCDrp57stqRcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBjYWxjVmlkZW9DbGllbnRIZWlnaHQ7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSAoZ3VpZGVCb3hIZWlnaHQgKiBiYXNlV2lkdGgpIC8gYmFzZUhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6rCA66GcIFVJXG4gICAgICBpZiAoY2FsY1ZpZGVvT3JpZW50YXRpb24gPT09IHRoaXMuI3VpT3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8g6rCA66GcIFVJICYmIOqwgOuhnCDsubTrqZTrnbxcbiAgICAgICAgLy8g67mE65SU7Jik66W8IGhlaWdodCDquLDspIDsnLzroZwg7KSE7J206rOgXG4gICAgICAgIGNvbnN0IHZpZGVvUmF0aW9CeUhlaWdodCA9IDAuNjsgICAgIC8vIDAuNn4wLjNcbiAgICAgICAgbmV3VmlkZW9IZWlnaHQgPSBjYWxjT2NyQ2xpZW50SGVpZ2h0ICogdmlkZW9SYXRpb0J5SGVpZ2h0XG4gICAgICAgIC8vIGhlaWdodCDquLDspIDsnLzroZwgd2lkdGgg6rOE7IKwXG4gICAgICAgIG5ld1ZpZGVvV2lkdGggPSBuZXdWaWRlb0hlaWdodCAqIChjYWxjVmlkZW9XaWR0aCAvIGNhbGNWaWRlb0hlaWdodCk7XG5cbiAgICAgICAgLy8g6rCA7J2065Oc67CV7Iqk64qUIOu5hOuUlOyYpOulvCDshLjroZwg6riw7KSA7Jy866GcIOunnuy2pFxuICAgICAgICBndWlkZUJveEhlaWdodCA9IG5ld1ZpZGVvSGVpZ2h0O1xuICAgICAgICBndWlkZUJveFdpZHRoID0gKGd1aWRlQm94SGVpZ2h0ICogYmFzZVdpZHRoKSAvIGJhc2VIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDqsIDroZwgVUkgJiYg7IS466GcIOy5tOuplOudvFxuICAgICAgICAvLyDqsIDroZwg6riw7KSA7Jy866GcIOqwgOydtOuTnOuwleyKpCDqs4TsgrBcbiAgICAgICAgY29uc3QgZ3VpZGVCb3hSYXRpb0J5V2lkdGggPSAwLjg7XG4gICAgICAgIGd1aWRlQm94V2lkdGggPSBjYWxjT2NyQ2xpZW50V2lkdGggKiBndWlkZUJveFJhdGlvQnlXaWR0aDtcbiAgICAgICAgZ3VpZGVCb3hIZWlnaHQgPSBndWlkZUJveFdpZHRoICogc2Nhbm5lckZyYW1lUmF0aW87XG5cbiAgICAgICAgLy8g6rCA7J2065OcIOuwleyKpCDqsIDroZwg6riw7KSA7Jy866GcIOy5tOuplOudvCDtmZXrjIBcbiAgICAgICAgbmV3VmlkZW9XaWR0aCA9IGd1aWRlQm94V2lkdGg7XG4gICAgICAgIG5ld1ZpZGVvSGVpZ2h0ID0gbmV3VmlkZW9XaWR0aCAqIChjYWxjVmlkZW9IZWlnaHQgLyBjYWxjVmlkZW9XaWR0aCk7XG4gICAgICAgIGlmICh0aGlzLiNpc1JvdGF0ZWQ5MG9yMjcwKSB7XG4gICAgICAgICAgW25ld1ZpZGVvV2lkdGgsIG5ld1ZpZGVvSGVpZ2h0XSA9IFtuZXdWaWRlb0hlaWdodCwgbmV3VmlkZW9XaWR0aF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiNzZXRTdHlsZSh2aWRlbywge1xuICAgICAgd2lkdGg6IG5ld1ZpZGVvV2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBuZXdWaWRlb0hlaWdodCArICdweCcsXG4gICAgfSk7XG5cbiAgICAvLyDsi6Dqt5xcbiAgICB0aGlzLiNzZXRTdHlsZShndWlkZUJveCwge1xuICAgICAgd2lkdGg6IGd1aWRlQm94V2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBndWlkZUJveEhlaWdodCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXNrQm94SW5uZXIgPSBtYXNrQm94V3JhcC5xdWVyeVNlbGVjdG9yKFwiI21hc2tCb3hJbm5lclwiKTtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IE51bWJlcih0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUud2lkdGgpO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IE51bWJlcih0aGlzLiNvcHRpb25zLmZyYW1lQm9yZGVyU3R5bGUucmFkaXVzKTtcbiAgICBpZiAoZ3VpZGVCb3hXaWR0aCAmJiBndWlkZUJveFdpZHRoICYmIGJvcmRlclJhZGl1cyAmJiBib3JkZXJXaWR0aCkge1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBndWlkZUJveFdpZHRoICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZ3VpZGVCb3hIZWlnaHQgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCd4JywgKGd1aWRlQm94V2lkdGggLyAyICogLTEpICsgJycpO1xuICAgICAgbWFza0JveElubmVyLnNldEF0dHJpYnV0ZSgneScsIChndWlkZUJveEhlaWdodCAvIDIgKiAtMSkgKyAnJyk7XG4gICAgICBtYXNrQm94SW5uZXIuc2V0QXR0cmlidXRlKCdyeCcsIGJvcmRlclJhZGl1cyArIChib3JkZXJXaWR0aCAqIC0xKSArICcnKTtcbiAgICAgIG1hc2tCb3hJbm5lci5zZXRBdHRyaWJ1dGUoJ3J5JywgYm9yZGVyUmFkaXVzICsgKGJvcmRlcldpZHRoICogLTEpICsgJycpO1xuICAgIH1cbiAgfVxuXG4gICNjbG9zZUNhbWVyYSgpIHtcbiAgICBpZiAodGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy4jY2FtZXJhUGVybWlzc2lvblRpbWVyKTtcbiAgICAgIHRoaXMuI2NhbWVyYVBlcm1pc3Npb25UaW1lciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgfVxuXG4gIGFzeW5jICNsb2FkUmVzb3VyY2VzKCkge1xuICAgIGlmICh0aGlzLiNyZXNvdXJjZXNMb2FkZWQpIHJldHVybjtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKCdxdXJhbS5qcycsIHRoaXMuI29wdGlvbnMucmVzb3VyY2VCYXNlVXJsKTtcbiAgICBsZXQgc3JjID0gYXdhaXQgZmV0Y2godXJsLmhyZWYpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgICAgLnRoZW4oKHRleHQpID0+IHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gLyguKikgPSBNb2R1bGUuY3dyYXAvZ207XG4gICAgICAgIGxldCBzb3VyY2UgPSB0ZXh0LnJlcGxhY2UocmVnZXgsICdNb2R1bGUuJDEgPSBNb2R1bGUuY3dyYXAnKTtcbiAgICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoXG4gICAgICAgICAgJ3F1cmFtLndhc20nLFxuICAgICAgICAgIG5ldyBVUkwoJ3F1cmFtLndhc20nLCB0aGlzLiNvcHRpb25zLnJlc291cmNlQmFzZVVybCkuaHJlZlxuICAgICAgICApO1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShcbiAgICAgICAgICBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwicXVyYW0uZGF0YVwiYCxcbiAgICAgICAgICBgUkVNT1RFX1BBQ0tBR0VfQkFTRSA9IFwiJHtuZXcgVVJMKCdxdXJhbS5kYXRhJywgdGhpcy4jb3B0aW9ucy5yZXNvdXJjZUJhc2VVcmwpLmhyZWZcbiAgICAgICAgICB9XCJgXG4gICAgICAgICk7XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKFxuICAgICAgICAgICdmdW5jdGlvbiBjcmVhdGVXYXNtJyxcbiAgICAgICAgICAnYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2FzbSdcbiAgICAgICAgKTtcbiAgICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoXG4gICAgICAgICAgJ3ZhciBhc20gPSBjcmVhdGVXYXNtKCk7JyxcbiAgICAgICAgICAnYXdhaXQgY3JlYXRlV2FzbSgpOydcbiAgICAgICAgKTtcbiAgICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoXG4gICAgICAgICAgJ2luc3RhbnRpYXRlQXN5bmMoKTsnLFxuICAgICAgICAgICdhd2FpdCBpbnN0YW50aWF0ZUFzeW5jKCk7J1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgfSk7XG5cbiAgICBzcmMgPSBgXG4gICAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgJHtzcmN9XG4gICAgICBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4ID0gbGVuZ3RoQnl0ZXNVVEY4XG4gICAgICBNb2R1bGUuc3RyaW5nVG9VVEY4ID0gc3RyaW5nVG9VVEY4XG4gICAgICByZXR1cm4gTW9kdWxlXG4gICAgfSkoKVxuICAgICAgICBgO1xuICAgIE1vZHVsZSA9IGF3YWl0IGV2YWwoc3JjKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbG9hZFJlc291cmNlcyA6OiAnLCBNb2R1bGUpXG4gICAgdGhpcy4jcmVzb3VyY2VzTG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gICNzdGFydFNjYW5JbXBsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgZGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBhZGRyZXNzID0gMDtcbiAgICAgIHRoaXMuI3RpbWVyID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLlJFQURZKTtcbiAgICAgICAgICBpZiAoIU1vZHVsZVsnYXNtJ10pIHJldHVybjtcblxuICAgICAgICAgIC8vIFRPRE8gOiDshKTsoJXtlaDsiJgg7J6I6rKMIOuzgOqyvSBkZWZhdWx0IOqwkuuPhCDsoJzqs7VcbiAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvbl93LCByZXNvbHV0aW9uX2hdID0gW3RoaXMuI3Jlc29sdXRpb25XaWR0aCwgdGhpcy4jcmVzb2x1dGlvbkhlaWdodF07XG4gICAgICAgICAgY29uc3QgeyB2aWRlbyB9ID0gZGV0ZWN0b3IuZ2V0T0NSRWxlbWVudHMoKTtcbiAgICAgICAgICBpZiAocmVzb2x1dGlvbl93ID09PSAwIHx8IHJlc29sdXRpb25faCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiNzbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBiZWZvcmUgLS0tLS0tLS0tJywgYWRkcmVzcyk7XG4gICAgICAgICAgaWYgKGFkZHJlc3MgPT09IDAgJiYgdGhpcy4jaXNWaWRlb1Jlc29sdXRpb25Db21wYXRpYmxlKHZpZGVvKSkge1xuICAgICAgICAgICAgW2FkZHJlc3MsIHRoaXMuI2Rlc3Ryb3lTY2FubmVyQ2FsbGJhY2tdID0gdGhpcy4jZ2V0U2Nhbm5lckFkZHJlc3ModGhpcy4jb2NyVHlwZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiNzbGVlcCgxMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkcmVzcyBhZnRlciAtLS0tLS0tLS0nLCBhZGRyZXNzKTtcblxuICAgICAgICAgIC8vIGNhcmQgbm90IGRldGVjdGVkXG4gICAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy4jaXNDYXJkYm94RGV0ZWN0ZWQoYWRkcmVzcykpKSB7XG4gICAgICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5SRUFEWSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLkNBUkRfREVURUNUKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy4jaW5Qcm9ncmVzc1N0ZXAgPT09IElOX1BST0dSRVNTLkNBUkRfREVURUNUKSB7XG4gICAgICAgICAgICAvLyBmYWxsYmFjayBjYXNlIOyduOuTr1xuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICAvLyBpZiAocmVzdWx0ICE9PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnN0IFByZXZJbWFnZSA9IGdldFByZXZJbWFnZSgpO1xuICAgICAgICAgICAgLy8gICBNb2R1bGUuSEVBUDguc2V0KGltZ0RhdGEuZGF0YSwgUHJldkltYWdlKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29uc3QgW3NjYW5SZXN1bHQsIGltZ0RhdGFVcmwsIG1hc2tJbWFnZV0gPSBhd2FpdCB0aGlzLiNzdGFydFJlY29nbml0aW9uKGFkZHJlc3MsIHRoaXMuI29jclR5cGUpO1xuICAgICAgICAgICAgLy8gc3VjY2VzcyBjYXNlXG4gICAgICAgICAgICBpZiAoIXNjYW5SZXN1bHQuaW5kZXhPZigndHJ1ZScpIHx8IHNjYW5SZXN1bHQgIT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgLy8g7J247IudIOyEseqztSDsiqTsupQg66Oo7ZSEIOyiheujjFxuICAgICAgICAgICAgICB0aGlzLiNjaGFuZ2VTdGFnZShJTl9QUk9HUkVTUy5PQ1JfU1VDQ0VTUyk7XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3VsdCA6ICR7c2NhblJlc3VsdH1gKTtcblxuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgYXBpX3Jlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgICBcInJlc3VsdF9jb2RlXCI6IFwiTjEwMFwiLFxuICAgICAgICAgICAgICAgICAgXCJyZXN1bHRfbWVzc2FnZVwiOiBcIk9LLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIHJldmlld19yZXN1bHQ6IHtcbiAgICAgICAgICAgICAgICAgIG9jcl90eXBlOiB0aGlzLiNvY3JUeXBlLFxuICAgICAgICAgICAgICAgICAgb2NyX2RhdGE6IHBhcnNlci5wYXJzZU9jclJlc3VsdCh0aGlzLiNvY3JUeXBlLCBzY2FuUmVzdWx0KSxcbiAgICAgICAgICAgICAgICAgIG9jcl9vcmlnaW5faW1hZ2U6IGltZ0RhdGFVcmwsXG4gICAgICAgICAgICAgICAgICBvY3JfbWFza2luZ19pbWFnZTogbWFza0ltYWdlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuI29uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuI29uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5zdG9wU2NhbigpO1xuICAgICAgICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJ0NhcmQgZGV0ZWN0aW9uIGVycm9yIDogJyArIGU7XG5cbiAgICAgICAgICBpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW1vcnknKSkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuI3JlY292ZXJ5U2NhbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYXJkIGRldGVjdGlvbiBlcnJvciA6ICcgKyBlKTtcbiAgICAgICAgICAgIHRoaXMuI2NoYW5nZVN0YWdlKElOX1BST0dSRVNTLk9DUl9GQUlMRUQpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBhcGlfcmVzcG9uc2U6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdF9jb2RlXCI6IFwiRTU4MFwiLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0X21lc3NhZ2VcIjogZS50b1N0cmluZygpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlc3VsdDogXCJmYWlsZWRcIixcbiAgICAgICAgICAgICAgcmV2aWV3X3Jlc3VsdDoge1xuICAgICAgICAgICAgICAgIG9jcl90eXBlOiB0aGlzLiNvY3JUeXBlLFxuICAgICAgICAgICAgICAgIGVycm9yX2RldGFpbDogZS5zdGFja1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuI29uRmFpbHVyZSkge1xuICAgICAgICAgICAgICB0aGlzLiNvbkZhaWx1cmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGFzeW5jICNzdGFydFNjYW4oKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgYXdhaXQgdGhpcy4jbG9hZFJlc291cmNlcygpO1xuICAgIGF3YWl0IHRoaXMuI3Byb2NlZWRDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgYXdhaXQgdGhpcy4jc3RhcnRTY2FuSW1wbCgpO1xuICAgIGNvbnNvbGUubG9nKFwiU0NBTiBFTkRcIik7XG4gIH1cbiAgYXN5bmMgI3JlY292ZXJ5U2NhbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIiEhISBSRUNPVkVSWSBTQ0FOICEhIVwiKTtcbiAgICB0aGlzLiNyZXNvdXJjZXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgYXdhaXQgdGhpcy4jc3RhcnRTY2FuKCk7XG4gIH1cbiAgc3RvcFNjYW4oKSB7XG4gICAgaWYgKHRoaXMuI3RpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuI3RpbWVyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiISEhIENMRUFSIElOVEVSVkFMICEhISFcIilcbiAgICAgIHRoaXMuI3RpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGRldGVjdG9yLmdldE9DUkVsZW1lbnRzKCk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHtcbiAgICAgICAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuICBzdG9wU3RyZWFtKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuI3JlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcbiAgICBpZiAodGhpcy4jc3RyZWFtKSB7XG4gICAgICB0aGlzLiNzdHJlYW0uc3RvcCAmJiB0aGlzLiNzdHJlYW0uc3RvcCgpO1xuICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuI3N0cmVhbS5nZXRUcmFja3MgJiYgdGhpcy4jc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgY29uc29sZS5kZWJ1ZygnQ2FyZFNjYW4jc3RvcFN0cmVhbScsIHRyYWNrcyk7XG4gICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhY2tzLmZvckVhY2goKHRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy4jc3RyZWFtID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqIOuplOuqqOumrCBhbGxvY2F0aW9uIGZyZWUg7ZWo7IiYICovXG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy4jZGVzdHJveVNjYW5uZXJBZGRyZXNzKCk7XG4gICAgdGhpcy4jZGVzdHJveUJ1ZmZlcigpO1xuICAgIHRoaXMuI2Rlc3Ryb3lQcmV2SW1hZ2UoKTtcbiAgICB0aGlzLiNkZXN0cm95U3RyaW5nT25XYXNtSGVhcCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZUJPQ1I7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFFBQVEsTUFBTSx1QkFBdUI7QUFDNUMsT0FBT0MsTUFBTSxNQUFNLHFCQUFxQjtBQUV4QyxJQUFJQyxNQUFNO0FBQ1YsSUFBSUMsUUFBUTtBQUVaLElBQU1DLFdBQVcsR0FBRztFQUNsQkMsU0FBUyxFQUFFLFdBQVc7RUFDdEJDLEtBQUssRUFBRSxPQUFPO0VBQ2RDLFdBQVcsRUFBRSxXQUFXO0VBQ3hCQyxhQUFhLEVBQUUsYUFBYTtFQUM1QkMsV0FBVyxFQUFFLGdCQUFnQjtFQUM3QkMsVUFBVSxFQUFFO0FBQ2QsQ0FBQztBQUFBLElBQUFDLFFBQUEsb0JBQUFDLE9BQUE7QUFBQSxJQUFBQyxRQUFBLG9CQUFBRCxPQUFBO0FBQUEsSUFBQUUsVUFBQSxvQkFBQUYsT0FBQTtBQUFBLElBQUFH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
