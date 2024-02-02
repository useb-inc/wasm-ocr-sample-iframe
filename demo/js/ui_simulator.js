function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var instance;
class UISimulator {
  /** private properties */

  /** constructor */
  constructor(onClickStartCallback, onClickRestartCallback) {
    _defineProperty(this, "__onClickStartCallback", void 0);
    _defineProperty(this, "__onClickRestartCallback", void 0);
    _defineProperty(this, "__type", void 0);
    _defineProperty(this, "__settings", {
      ssaRetryType: 'ENSEMBLE'
    });
    if (!!!onClickStartCallback || !!!onClickRestartCallback) {
      throw new Error('onClick callback function parameter is not exist');
    }
    if (instance) return instance;
    instance = this;
    this.__onClickStartCallback = onClickStartCallback;
    this.__onClickRestartCallback = onClickRestartCallback;
    this.__bindEventListener();
    return instance;
  }
  __bindEventListener() {
    window.onload = () => {
      document.querySelectorAll('.settings-section input').forEach(input => {
        input.addEventListener('keyup', this.__saveSettingsHandler);
        input.addEventListener('change', this.__saveSettingsHandler);
      });
      var collapsedToggle = function collapsedToggle(event) {
        var _event$target$id;
        var toggleElement = (_event$target$id = event.target.id) !== null && _event$target$id !== void 0 && _event$target$id.includes('toggle') ? event.target : event.target.parentElement;
        var section = toggleElement.parentElement;
        var label = toggleElement.querySelector('span');
        var chevron = toggleElement.querySelector('.chevron');
        // const settingsSection = document.querySelector(selector)
        // const label = document.querySelector(selector + ' span')
        // const chevron = document.querySelector(selector + ' .chevron')
        if (section.classList.contains('collapsed')) {
          section.classList.remove('collapsed');
          chevron.classList.remove('fa-chevron-up');
          chevron.classList.add('fa-chevron-down');
          label.textContent = '[접기]';
        } else {
          section.classList.add('collapsed');
          chevron.classList.remove('fa-chevron-down');
          chevron.classList.add('fa-chevron-up');
          label.textContent = '[펼치기]';
        }
      };
      document.getElementById('type-toggle').addEventListener('click', collapsedToggle);
      document.getElementById('settings-toggle').addEventListener('click', collapsedToggle);
      document.getElementById('ssa-max-retry-count').addEventListener('change', e => {
        this.__settings.ssaMaxRetryCount = isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value);
        this.__saveSettingsHandler();
      });
      var setSsaType = e => {
        this.__settings.ssaRetryType = e.target.value;
      };
      document.getElementById('ssa-type').querySelectorAll('input').forEach(el => {
        el.addEventListener('change', setSsaType);
      });
      var toggleCustomUI = (position, event) => {
        switch (position) {
          case 'top':
            this.__settings.useTopUI = event.target.checked;
            break;
          case 'middle':
            this.__settings.useMiddleUI = event.target.checked;
            break;
          case 'bottom':
            this.__settings.useBottomUI = event.target.checked;
            break;
          case 'preview':
            this.__settings.usePreviewUI = event.target.checked;
            break;
        }
        var text = document.getElementById("use-".concat(position, "-ui-text-msg"));
        if (!event.target.checked && text !== null && text !== void 0 && text.checked) {
          text.click();
        }
        this.__saveSettingsHandler();
      };
      var toggleCustomUITextMsg = (position, event) => {
        switch (position) {
          case 'top':
            this.__settings.useTopUITextMsg = event.target.checked;
            break;
          case 'middle':
            this.__settings.useMiddleUITextMsg = event.target.checked;
            break;
          case 'bottom':
            this.__settings.useBottomUITextMsg = event.target.checked;
            break;
        }
        var ui = document.getElementById("use-".concat(position, "-ui"));
        if (event.target.checked && !ui.checked) {
          ui.click();
        }
        this.__saveSettingsHandler();
      };
      document.getElementById('use-top-ui').addEventListener('change', e => {
        toggleCustomUI('top', e);
      });
      document.getElementById('use-top-ui-text-msg').addEventListener('change', e => {
        toggleCustomUITextMsg('top', e);
      });
      document.getElementById('use-middle-ui').addEventListener('change', e => {
        toggleCustomUI('middle', e);
      });
      document.getElementById('use-middle-ui-text-msg').addEventListener('change', e => {
        toggleCustomUITextMsg('middle', e);
      });
      document.getElementById('use-bottom-ui').addEventListener('change', e => {
        toggleCustomUI('bottom', e);
      });
      document.getElementById('use-bottom-ui-text-msg').addEventListener('change', e => {
        toggleCustomUITextMsg('bottom', e);
      });
      document.getElementById('use-preview-ui').addEventListener('change', e => {
        toggleCustomUI('preview', e);
      });
      document.getElementById('use-force-complete-ui').addEventListener('change', e => {
        this.__settings.useForceCompleteUI = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-auto-switch').addEventListener('change', e => {
        this.__settings.useAutoSwitchToServerMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('switch-to-server-threshold').addEventListener('change', e => {
        this.__settings.switchToServerThreshold = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-manual-switch').addEventListener('change', e => {
        this.__settings.useManualSwitchToServerMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-encrypt-mode').addEventListener('change', e => {
        if (e.target.checked) {
          this.__settings.useEncryptAllMode = !e.target.checked;
          document.getElementById('use-encrypt-all-mode-div').style.display = 'none';
          document.getElementById('use-encrypt-overall-mode-div').style.display = 'none';
        } else {
          document.getElementById('use-encrypt-all-mode-div').style.display = 'block';
          document.getElementById('use-encrypt-overall-mode-div').style.display = 'block';
        }
        this.__settings.useEncryptMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-encrypt-all-mode').addEventListener('change', e => {
        if (e.target.checked) {
          this.__settings.useEncryptMode = !e.target.checked;
          document.getElementById('use-encrypt-mode-div').style.display = 'none';
          document.getElementById('use-encrypt-overall-mode-div').style.display = 'none';
        } else {
          document.getElementById('use-encrypt-mode-div').style.display = 'block';
          document.getElementById('use-encrypt-overall-mode-div').style.display = 'block';
        }
        this.__settings.useEncryptAllMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-encrypt-overall-mode').addEventListener('change', e => {
        if (e.target.checked) {
          this.__settings.useEncryptOverallMode = !e.target.checked;
          document.getElementById('use-encrypt-mode-div').style.display = 'none';
          document.getElementById('use-encrypt-all-mode-div').style.display = 'none';
          document.getElementById('ocr-result-exclude-keylist-div').style.display = 'flex';
          this.__settings.ocrResultExcludeKeylist = '';
          this.__settings.ocrImageExcludeKeylist = '';
          this.__settings.encryptOcrResultExcludeKeylist = '';
          this.__settings.encryptOcrImageExcludeKeylist = '';
        } else {
          document.getElementById('use-encrypt-mode-div').style.display = 'block';
          document.getElementById('use-encrypt-all-mode-div').style.display = 'block';
          document.getElementById('ocr-result-exclude-keylist-div').style.display = 'none';
          delete this.__settings.ocrResultExcludeKeylist;
          delete this.__settings.ocrImageExcludeKeylist;
          delete this.__settings.encryptOcrResultExcludeKeylist;
          delete this.__settings.encryptOcrImageExcludeKeylist;
        }
        this.__settings.useEncryptOverallMode = e.target.checked;
        this.__saveSettingsHandler();
      });

      // 추후 위에 주석 풀어야함 - START
      // document
      //   .getElementById('use-pii-encrypt-mode')
      //   .addEventListener('change', (e) => {
      //     this.__settings.usePiiEncryptMode = e.target.checked;
      //     this.__saveSettingsHandler();
      //   });
      //
      // document
      //   .getElementById('use-pii-encrypt-face')
      //   .addEventListener('change', (e) => {
      //     this.__settings.usePiiEncryptFace = e.target.checked;
      //     this.__saveSettingsHandler();
      //   });
      // 추후 위에 주석 풀어야함 - END

      document.getElementById('use-legacy-format').addEventListener('change', e => {
        this.__settings.useLegacyFormat = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-image-correction').addEventListener('change', e => {
        if (e.target.value === 'useImageCropping') {
          this.__settings.useImageCropping = true;
          this.__settings.useImageWarping = false;
        } else if (e.target.value === 'useImageWarping') {
          this.__settings.useImageCropping = false;
          this.__settings.useImageWarping = true;
        } else {
          this.__settings.useImageCropping = false;
          this.__settings.useImageWarping = false;
        }
        this.__saveSettingsHandler();
      });
      document.getElementById('use-compress-image').addEventListener('change', e => {
        this.__settings.useCompressImage = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-compress-image-max-width').addEventListener('change', e => {
        this.__settings.useCompressImageMaxWidth = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-compress-image-max-volume').addEventListener('change', e => {
        this.__settings.useCompressImageMaxVolume = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('mirror-mode').addEventListener('change', e => {
        this.__settings.mirrorMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('rotation-degree').addEventListener('change', e => {
        this.__settings.rotationDegree = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('camera-resolution-criteria').addEventListener('change', e => {
        this.__settings.cameraResolutionCriteria = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('camera-resource-request-retry-limit').addEventListener('change', e => {
        this.__settings.cameraResourceRequestRetryLimit = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('camera-resource-request-retry-interval').addEventListener('change', e => {
        this.__settings.cameraResourceRequestRetryInterval = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('guide-box-criteria').addEventListener('change', e => {
        this.__settings.calcGuideBoxCriteria = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('show-clipboard').addEventListener('change', e => {
        this.__settings.showClipFrame = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('show-canvas-preview').addEventListener('change', e => {
        this.__settings.showCanvasPreview = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-debug-alert').addEventListener('change', e => {
        this.__settings.useDebugAlert = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('force_wasm_reload').addEventListener('change', e => {
        this.__settings.force_wasm_reload = e.target.checked;
        if (!e.target.checked) {
          this.__settings.force_wasm_reload_flag = '';
        }
        this.__saveSettingsHandler();
      });
      document.getElementById('force_wasm_reload_flag').addEventListener('change', e => {
        var checked = document.querySelector('#force_wasm_reload').value;
        this.__settings.force_wasm_reload_flag = checked ? e.target.value : '';
        this.__saveSettingsHandler();
      });
      document.getElementById('resolution-template').addEventListener('change', () => {
        if (document.getElementById('resolution-template').value === 'custom') {
          document.getElementById('resolution-custom').style.display = 'block';
        } else if (document.getElementById('resolution-template').value === 'responsive') {
          document.getElementById('resolution-custom').style.display = 'none';
        } else {
          document.getElementById('resolution-custom').style.display = 'none';
          var source = document.getElementById('resolution-template').value.split('x');
          var target = [document.getElementById('resolution-width'), document.getElementById('resolution-height')];
          [target[0].value, target[1].value] = [source[0], source[1]];
        }
        this.__saveSettingsHandler();
      });
      document.getElementById('use-mask-frame-color-change').addEventListener('change', e => {
        this.__settings.useMaskFrameColorChange = e.target.checked;
        if (e.target.checked) {
          document.getElementById('mask-frame-color-default').style.display = 'none';
          document.getElementById('mask-frame-color-custom').style.display = 'block';
        } else {
          document.getElementById('mask-frame-color-default').style.display = 'block';
          document.getElementById('mask-frame-color-custom').style.display = 'none';
        }
        this.__saveSettingsHandler();
      });
      document.getElementById('resolution-reverse-button').addEventListener('click', () => {
        var arr = [document.getElementById('resolution-width'), document.getElementById('resolution-height')];
        [arr[0].value, arr[1].value] = [arr[1].value, arr[0].value]; // swap
        this.__saveSettingsHandler();
      });
      document.getElementById('save-settings').addEventListener('click', event => {
        var target = document.getElementById('save-settings');
        target.setAttribute('disabled', 'disabled');
        target.querySelector('span').textContent = '설정 적용됨';
        target.querySelector('i').style.display = 'inline-block';
        target.querySelector('i').style.color = '#5cb85c';

        // 인식 프레임 스타일
        var borderWidth = document.getElementById('border-width').value;
        var borderStyle = document.getElementById('border-style').value;
        var borderRadius = document.getElementById('border-radius').value;
        var colorNotReady = document.getElementById('color-not-ready').value;
        var colorReady = document.getElementById('color-ready').value;
        var colorDetectSuccess = document.getElementById('color-detect-success').value;
        var colorDetectFailed = document.getElementById('color-detect-failed').value;
        var colorOCRRecognized = document.getElementById('color-ocr-recognized').value;
        var colorSuccess = document.getElementById('color-success').value;
        var colorFailed = document.getElementById('color-failed').value;
        this.__settings.frameBorderStyle = _objectSpread(_objectSpread({}, this.__settings.frameBorderStyle), {}, {
          width: borderWidth,
          style: borderStyle,
          radius: borderRadius,
          not_ready: colorNotReady,
          ready: colorReady,
          detect_failed: colorDetectFailed,
          detect_success: colorDetectSuccess,
          recognized: colorOCRRecognized,
          recognized_with_ssa: colorOCRRecognized,
          ocr_failed: colorFailed,
          ocr_success: colorSuccess,
          ocr_success_with_ssa: colorSuccess
        });

        // 마스킹 프레임 스타일
        var maskFrameColorNotReady = document.getElementById('mask-frame-color-not-ready').value;
        var maskFrameColorReady = document.getElementById('mask-frame-color-ready').value;
        var maskFrameColorDetectSuccess = document.getElementById('mask-frame-color-detect-success').value;
        var maskFrameColorDetectFailed = document.getElementById('mask-frame-color-detect-failed').value;
        var maskFrameColorOCRRecognized = document.getElementById('mask-frame-color-ocr-recognized').value;
        var maskFrameColorSuccess = document.getElementById('mask-frame-color-success').value;
        var maskFrameColorFailed = document.getElementById('mask-frame-color-failed').value;
        var maskFrameColorBaseColor = document.getElementById('mask-frame-color-base-color').value;
        this.__settings.maskFrameStyle = _objectSpread(_objectSpread({}, this.__settings.maskFrameStyle), {}, {
          base_color: maskFrameColorBaseColor,
          not_ready: maskFrameColorNotReady,
          ready: maskFrameColorReady,
          detect_failed: maskFrameColorDetectFailed,
          detect_success: maskFrameColorDetectSuccess,
          recognized: maskFrameColorOCRRecognized,
          recognized_with_ssa: maskFrameColorOCRRecognized,
          ocr_failed: maskFrameColorFailed,
          ocr_success: maskFrameColorSuccess,
          ocr_success_with_ssa: maskFrameColorSuccess
        });
        if (document.getElementById('resolution-template').value === 'responsive') {
          document.getElementById('resolution-simulation-iframe').style.width = '';
          document.getElementById('resolution-simulation-iframe').style.height = '';
        } else {
          var resolutionWidth = document.getElementById('resolution-width').value;
          var resolutionHeight = document.getElementById('resolution-height').value;
          var resolutionExpendRatio = document.getElementById('resolution-expend-ratio').value;
          document.getElementById('resolution-simulation-iframe').style.width = resolutionWidth * resolutionExpendRatio + 'px';
          document.getElementById('resolution-simulation-iframe').style.height = resolutionHeight * resolutionExpendRatio + 'px';
        }
        if (this.__type) {
          this.__onClickStart();
        }
      });
      document.getElementById('idcard').addEventListener('click', () => {
        this.__type = 'idcard';
        this.__onClickStart();
      });
      document.getElementById('passport').addEventListener('click', () => {
        this.__type = 'passport';
        this.__onClickStart();
      });
      document.getElementById('alien').addEventListener('click', () => {
        this.__type = 'alien';
        this.__onClickStart();
      });
      document.getElementById('alien-back').addEventListener('click', () => {
        this.__type = 'alien-back';
        this.__settings.useFaceImage = false; // 외국인등록증 뒷면은 얼굴 없음
        this.__onClickStart();
      });
      document.getElementById('credit').addEventListener('click', () => {
        this.__type = 'credit';
        this.__onClickStart();
      });
      document.getElementById('idcard-ssa').addEventListener('click', () => {
        this.__type = 'idcard-ssa';
        this.__onClickStart();
      });
      document.getElementById('passport-ssa').addEventListener('click', () => {
        this.__type = 'passport-ssa';
        this.__onClickStart();
      });
      document.getElementById('alien-ssa').addEventListener('click', () => {
        this.__type = 'alien-ssa';
        this.__onClickStart();
      });
      document.getElementById('restart_btn').addEventListener('click', () => {
        this.__onClickRestart();
      });
      this.__ocrExcludeOptionsSetting();
    };
  }
  __onClickStart() {
    this.__setActiveButton(this.__type);
    this.__onClickStartCallback(this.__type, this.__settings);
  }
  __onClickRestart() {
    this.__onClickRestartCallback();
  }
  __setActiveButton(type) {
    this.resetButton();
    document.getElementById(type).classList.add('active');
  }
  __ocrExcludeOptionsSetting() {
    var ocrResultKeys = [{
      title: '전체',
      value: 'all'
    }, {
      title: '신분증 종류',
      value: 'result_scan_type'
    }, {
      title: '이름',
      value: 'name'
    }, {
      title: '주민등록번호',
      value: 'jumin'
    }, {
      title: '발급일자',
      value: 'issued_date'
    }, {
      title: '발급 행정구역',
      value: 'region'
    }, {
      title: 'color_point',
      value: 'color_point'
    }, {
      title: '신분증 상 얼굴 좌표',
      value: 'found_face'
    }, {
      title: '신분증 상 눈 좌표',
      value: 'found_eye'
    }, {
      title: 'OCR 시작시간',
      value: 'start_time'
    }, {
      title: 'OCR 종료시간',
      value: 'end_time'
    }, {
      title: '생년월일',
      value: 'birth'
    }, {
      title: '해외거주 여부',
      value: 'overseas_resident'
    }, {
      title: '운전면허 번호',
      value: 'driver_number'
    }, {
      title: '운전면허증 시리얼번호',
      value: 'driver_serial'
    }, {
      title: '면허 종류',
      value: 'driver_type'
    }, {
      title: '적성검사 갱신기간 시작일',
      value: 'aptitude_test_date_start'
    }, {
      title: '적성검사 갱신기간 종료일',
      value: 'aptitude_test_date_end'
    }, {
      title: '성',
      value: 'sur_name'
    }, {
      title: '이름 (name과 별도)',
      value: 'given_name'
    }, {
      title: '여권 종류',
      value: 'passport_type'
    }, {
      title: '발급 국가',
      value: 'issuing_country'
    }, {
      title: '여권 번호',
      value: 'passport_number'
    }, {
      title: '국적',
      value: 'nationality'
    }, {
      title: '성별',
      value: 'sex'
    }, {
      title: '여권 만료일',
      value: 'expiry_date'
    }, {
      title: 'personal_number',
      value: 'personal_number'
    }, {
      title: '한글성명',
      value: 'name_kor'
    }, {
      title: '여권 하단 MRZ1',
      value: 'mrz1'
    }, {
      title: '여권 하단 MRZ2',
      value: 'mrz2'
    }, {
      title: '체류자격',
      value: 'visa_type'
    }, {
      title: '사본판별 결과',
      value: 'id_truth'
    }, {
      title: '사본판별 confidence',
      value: 'fd_confidence'
    }, {
      title: '사본판별 재시도 횟수',
      value: 'id_truth_retry_count'
    }, {
      title: 'specular_ratio',
      value: 'specular_ratio'
    }];
    var ocrImageKeys = [{
      title: '전체',
      value: 'all'
    }, {
      title: '원본 이미지',
      value: 'ocr_origin_image'
    }, {
      title: '마스킹 이미지',
      value: 'ocr_masking_image'
    }, {
      title: '얼굴 이미지',
      value: 'ocr_face_image'
    }];
    var insertExcludeKeyOptions = (target, keys) => {
      var html = keys.map(key => {
        return "<li>\n                    <input type=\"checkbox\" id=\"".concat(target, "-").concat(key.value, "\" name=\"").concat(target, "-keylist\" value=\"").concat(key.value, "\" />\n                    <label for=\"").concat(target, "-").concat(key.value, "\">").concat(key.value, "</label>\n                  </li>");
      }).join('');
      document.querySelector("ul#".concat(target, "-keylist-wrapper")).insertAdjacentHTML('afterbegin', html);
    };

    // DOM 세팅
    insertExcludeKeyOptions('ocr-result-exclude', ocrResultKeys);
    insertExcludeKeyOptions('ocr-image-exclude', ocrImageKeys);
    insertExcludeKeyOptions('encrypt-ocr-result-exclude', ocrResultKeys);
    insertExcludeKeyOptions('encrypt-ocr-image-exclude', ocrImageKeys);
    var addKeyList = (target, key) => {
      return [...target.split(','), key].filter(v => !!v).join(',');
    };
    var removeKeyList = (target, key) => {
      return target.split(',').filter(t => t !== key).join(',');
    };

    // 이벤트 핸들러 등록
    var excludeKeylistHandler = e => {
      var settingTarget = '';
      // prettier-ignore
      switch (e.target.name) {
        case 'ocr-result-exclude-keylist':
          settingTarget = 'ocrResultExcludeKeylist';
          break;
        case 'ocr-image-exclude-keylist':
          settingTarget = 'ocrImageExcludeKeylist';
          break;
        case 'encrypt-ocr-result-exclude-keylist':
          settingTarget = 'encryptOcrResultExcludeKeylist';
          break;
        case 'encrypt-ocr-image-exclude-keylist':
          settingTarget = 'encryptOcrImageExcludeKeylist';
          break;
      }
      if (e.target.checked) {
        this.__settings[settingTarget] = addKeyList(this.__settings[settingTarget], e.target.value);
      } else {
        this.__settings[settingTarget] = removeKeyList(this.__settings[settingTarget], e.target.value);
      }
      this.__saveSettingsHandler();
    };
    document.querySelectorAll('#ocr-result-exclude-keylist-div input').forEach(input => input.addEventListener('change', excludeKeylistHandler));
  }
  resetButton() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  }
  __saveSettingsHandler() {
    var button = document.getElementById('save-settings');
    button.removeAttribute('disabled');
    button.querySelector('.fa-check').style.display = 'none';
    button.querySelector('span').textContent = '설정적용';
  }
}
export default UISimulator;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJVSVNpbXVsYXRvciIsImNvbnN0cnVjdG9yIiwib25DbGlja1N0YXJ0Q2FsbGJhY2siLCJvbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5Iiwic3NhUmV0cnlUeXBlIiwiRXJyb3IiLCJfX29uQ2xpY2tTdGFydENhbGxiYWNrIiwiX19vbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX19iaW5kRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3NhdmVTZXR0aW5nc0hhbmRsZXIiLCJjb2xsYXBzZWRUb2dnbGUiLCJldmVudCIsIl9ldmVudCR0YXJnZXQkaWQiLCJ0b2dnbGVFbGVtZW50IiwidGFyZ2V0IiwiaWQiLCJpbmNsdWRlcyIsInBhcmVudEVsZW1lbnQiLCJzZWN0aW9uIiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2hldnJvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidGV4dENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImUiLCJfX3NldHRpbmdzIiwic3NhTWF4UmV0cnlDb3VudCIsImlzTmFOIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInNldFNzYVR5cGUiLCJlbCIsInRvZ2dsZUN1c3RvbVVJIiwicG9zaXRpb24iLCJ1c2VUb3BVSSIsImNoZWNrZWQiLCJ1c2VNaWRkbGVVSSIsInVzZUJvdHRvbVVJIiwidXNlUHJldmlld1VJIiwidGV4dCIsImNvbmNhdCIsImNsaWNrIiwidG9nZ2xlQ3VzdG9tVUlUZXh0TXNnIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUlUZXh0TXNnIiwidWkiLCJ1c2VGb3JjZUNvbXBsZXRlVUkiLCJ1c2VBdXRvU3dpdGNoVG9TZXJ2ZXJNb2RlIiwic3dpdGNoVG9TZXJ2ZXJUaHJlc2hvbGQiLCJ1c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUiLCJ1c2VFbmNyeXB0QWxsTW9kZSIsInN0eWxlIiwiZGlzcGxheSIsInVzZUVuY3J5cHRNb2RlIiwidXNlRW5jcnlwdE92ZXJhbGxNb2RlIiwib2NyUmVzdWx0RXhjbHVkZUtleWxpc3QiLCJvY3JJbWFnZUV4Y2x1ZGVLZXlsaXN0IiwiZW5jcnlwdE9jclJlc3VsdEV4Y2x1ZGVLZXlsaXN0IiwiZW5jcnlwdE9jckltYWdlRXhjbHVkZUtleWxpc3QiLCJ1c2VMZWdhY3lGb3JtYXQiLCJ1c2VJbWFnZUNyb3BwaW5nIiwidXNlSW1hZ2VXYXJwaW5nIiwidXNlQ29tcHJlc3NJbWFnZSIsInVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aCIsInVzZUNvbXByZXNzSW1hZ2VNYXhWb2x1bWUiLCJtaXJyb3JNb2RlIiwicm90YXRpb25EZWdyZWUiLCJjYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWEiLCJjYW1lcmFSZXNvdXJjZVJlcXVlc3RSZXRyeUxpbWl0IiwiY2FtZXJhUmVzb3VyY2VSZXF1ZXN0UmV0cnlJbnRlcnZhbCIsImNhbGNHdWlkZUJveENyaXRlcmlhIiwic2hvd0NsaXBGcmFtZSIsInNob3dDYW52YXNQcmV2aWV3IiwidXNlRGVidWdBbGVydCIsImZvcmNlX3dhc21fcmVsb2FkIiwiZm9yY2Vfd2FzbV9yZWxvYWRfZmxhZyIsInNvdXJjZSIsInNwbGl0IiwidXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UiLCJhcnIiLCJzZXRBdHRyaWJ1dGUiLCJjb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvck5vdFJlYWR5IiwiY29sb3JSZWFkeSIsImNvbG9yRGV0ZWN0U3VjY2VzcyIsImNvbG9yRGV0ZWN0RmFpbGVkIiwiY29sb3JPQ1JSZWNvZ25pemVkIiwiY29sb3JTdWNjZXNzIiwiY29sb3JGYWlsZWQiLCJmcmFtZUJvcmRlclN0eWxlIiwiX29iamVjdFNwcmVhZCIsIndpZHRoIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwibWFza0ZyYW1lQ29sb3JOb3RSZWFkeSIsIm1hc2tGcmFtZUNvbG9yUmVhZHkiLCJtYXNrRnJhbWVDb2xvckRldGVjdFN1Y2Nlc3MiLCJtYXNrRnJhbWVDb2xvckRldGVjdEZhaWxlZCIsIm1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCIsIm1hc2tGcmFtZUNvbG9yU3VjY2VzcyIsIm1hc2tGcmFtZUNvbG9yRmFpbGVkIiwibWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IiLCJtYXNrRnJhbWVTdHlsZSIsImJhc2VfY29sb3IiLCJoZWlnaHQiLCJyZXNvbHV0aW9uV2lkdGgiLCJyZXNvbHV0aW9uSGVpZ2h0IiwicmVzb2x1dGlvbkV4cGVuZFJhdGlvIiwiX190eXBlIiwiX19vbkNsaWNrU3RhcnQiLCJ1c2VGYWNlSW1hZ2UiLCJfX29uQ2xpY2tSZXN0YXJ0IiwiX19vY3JFeGNsdWRlT3B0aW9uc1NldHRpbmciLCJfX3NldEFjdGl2ZUJ1dHRvbiIsInR5cGUiLCJyZXNldEJ1dHRvbiIsIm9jclJlc3VsdEtleXMiLCJ0aXRsZSIsIm9jckltYWdlS2V5cyIsImluc2VydEV4Y2x1ZGVLZXlPcHRpb25zIiwia2V5cyIsImh0bWwiLCJtYXAiLCJrZXkiLCJqb2luIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYWRkS2V5TGlzdCIsImZpbHRlciIsInYiLCJyZW1vdmVLZXlMaXN0IiwidCIsImV4Y2x1ZGVLZXlsaXN0SGFuZGxlciIsInNldHRpbmdUYXJnZXQiLCJuYW1lIiwiYnV0dG9ucyIsImJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSJdLCJzb3VyY2VzIjpbImpzL3VpX3NpbXVsYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW5zdGFuY2U7XG5jbGFzcyBVSVNpbXVsYXRvciB7XG4gIC8qKiBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgX19vbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgX19vbkNsaWNrUmVzdGFydENhbGxiYWNrO1xuICBfX3R5cGU7XG4gIF9fc2V0dGluZ3MgPSB7XG4gICAgc3NhUmV0cnlUeXBlOiAnRU5TRU1CTEUnXG4gIH07XG5cbiAgLyoqIGNvbnN0cnVjdG9yICovXG4gIGNvbnN0cnVjdG9yKG9uQ2xpY2tTdGFydENhbGxiYWNrLCBvbkNsaWNrUmVzdGFydENhbGxiYWNrKSB7XG4gICAgaWYgKCEhIW9uQ2xpY2tTdGFydENhbGxiYWNrIHx8ICEhIW9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb25DbGljayBjYWxsYmFjayBmdW5jdGlvbiBwYXJhbWV0ZXIgaXMgbm90IGV4aXN0Jyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLl9fb25DbGlja1N0YXJ0Q2FsbGJhY2sgPSBvbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgICB0aGlzLl9fb25DbGlja1Jlc3RhcnRDYWxsYmFjayA9IG9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2s7XG4gICAgdGhpcy5fX2JpbmRFdmVudExpc3RlbmVyKCk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG4gIF9fYmluZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5ncy1zZWN0aW9uIGlucHV0JykuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIpO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcik7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNvbGxhcHNlZFRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCB0b2dnbGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0LmlkPy5pbmNsdWRlcygndG9nZ2xlJykgPyBldmVudC50YXJnZXQgOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRvZ2dsZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0b2dnbGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgY2hldnJvbiA9IHRvZ2dsZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZXZyb24nKTtcbiAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3NTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgLy8gY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJyBzcGFuJylcbiAgICAgICAgLy8gY29uc3QgY2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnIC5jaGV2cm9uJylcbiAgICAgICAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzZWQnKSkge1xuICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLXVwJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLWRvd24nKTtcbiAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdb7KCR6riwXSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tZG93bicpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi11cCcpO1xuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1vtjrzsuZjquLBdJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlLXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sbGFwc2VkVG9nZ2xlKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxhcHNlZFRvZ2dsZSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3NhLW1heC1yZXRyeS1jb3VudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Muc3NhTWF4UmV0cnlDb3VudCA9IGlzTmFOKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSkgPyAwIDogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBzZXRTc2FUeXBlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5zc2FSZXRyeVR5cGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3NhLXR5cGUnKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRTc2FUeXBlKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdG9nZ2xlQ3VzdG9tVUkgPSAocG9zaXRpb24sIGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZVRvcFVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZU1pZGRsZVVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUJvdHRvbVVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwcmV2aWV3JzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VQcmV2aWV3VUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlLSR7cG9zaXRpb259LXVpLXRleHQtbXNnYCk7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgdGV4dD8uY2hlY2tlZCkge1xuICAgICAgICAgIHRleHQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHRvZ2dsZUN1c3RvbVVJVGV4dE1zZyA9IChwb3NpdGlvbiwgZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlVG9wVUlUZXh0TXNnID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZU1pZGRsZVVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VCb3R0b21VSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHVzZS0ke3Bvc2l0aW9ufS11aWApO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgIXVpLmNoZWNrZWQpIHtcbiAgICAgICAgICB1aS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS10b3AtdWknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ3RvcCcsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLXRvcC11aS10ZXh0LW1zZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSVRleHRNc2coJ3RvcCcsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLW1pZGRsZS11aScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgnbWlkZGxlJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbWlkZGxlLXVpLXRleHQtbXNnJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJVGV4dE1zZygnbWlkZGxlJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtYm90dG9tLXVpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdib3R0b20nLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1ib3R0b20tdWktdGV4dC1tc2cnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnKCdib3R0b20nLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1wcmV2aWV3LXVpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdwcmV2aWV3JywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtZm9yY2UtY29tcGxldGUtdWknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUZvcmNlQ29tcGxldGVVSSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtYXV0by1zd2l0Y2gnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUF1dG9Td2l0Y2hUb1NlcnZlck1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLXRvLXNlcnZlci10aHJlc2hvbGQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnN3aXRjaFRvU2VydmVyVGhyZXNob2xkID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbWFudWFsLXN3aXRjaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTWFudWFsU3dpdGNoVG9TZXJ2ZXJNb2RlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LW1vZGUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlRW5jcnlwdEFsbE1vZGUgPSAhZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtYWxsLW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtb3ZlcmFsbC1tb2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LWFsbC1tb2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtZW5jcnlwdC1vdmVyYWxsLW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUVuY3J5cHRNb2RlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LWFsbC1tb2RlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUVuY3J5cHRNb2RlID0gIWUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtb3ZlcmFsbC1tb2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LW92ZXJhbGwtbW9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlRW5jcnlwdEFsbE1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtb3ZlcmFsbC1tb2RlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUVuY3J5cHRPdmVyYWxsTW9kZSA9ICFlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtZW5jcnlwdC1tb2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LWFsbC1tb2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29jci1yZXN1bHQtZXhjbHVkZS1rZXlsaXN0LWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgdGhpcy5fX3NldHRpbmdzLm9jclJlc3VsdEV4Y2x1ZGVLZXlsaXN0ID0gJyc7XG4gICAgICAgICAgdGhpcy5fX3NldHRpbmdzLm9jckltYWdlRXhjbHVkZUtleWxpc3QgPSAnJztcbiAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MuZW5jcnlwdE9jclJlc3VsdEV4Y2x1ZGVLZXlsaXN0ID0gJyc7XG4gICAgICAgICAgdGhpcy5fX3NldHRpbmdzLmVuY3J5cHRPY3JJbWFnZUV4Y2x1ZGVLZXlsaXN0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LWFsbC1tb2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvY3ItcmVzdWx0LWV4Y2x1ZGUta2V5bGlzdC1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fc2V0dGluZ3Mub2NyUmVzdWx0RXhjbHVkZUtleWxpc3Q7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19zZXR0aW5ncy5vY3JJbWFnZUV4Y2x1ZGVLZXlsaXN0O1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fc2V0dGluZ3MuZW5jcnlwdE9jclJlc3VsdEV4Y2x1ZGVLZXlsaXN0O1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fc2V0dGluZ3MuZW5jcnlwdE9jckltYWdlRXhjbHVkZUtleWxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUVuY3J5cHRPdmVyYWxsTW9kZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gU1RBUlRcbiAgICAgIC8vIGRvY3VtZW50XG4gICAgICAvLyAgIC5nZXRFbGVtZW50QnlJZCgndXNlLXBpaS1lbmNyeXB0LW1vZGUnKVxuICAgICAgLy8gICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLl9fc2V0dGluZ3MudXNlUGlpRW5jcnlwdE1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgLy8gICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy9cbiAgICAgIC8vIGRvY3VtZW50XG4gICAgICAvLyAgIC5nZXRFbGVtZW50QnlJZCgndXNlLXBpaS1lbmNyeXB0LWZhY2UnKVxuICAgICAgLy8gICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLl9fc2V0dGluZ3MudXNlUGlpRW5jcnlwdEZhY2UgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgLy8gICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gRU5EXG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbGVnYWN5LWZvcm1hdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTGVnYWN5Rm9ybWF0ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1pbWFnZS1jb3JyZWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ3VzZUltYWdlQ3JvcHBpbmcnKSB7XG4gICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUltYWdlQ3JvcHBpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VJbWFnZVdhcnBpbmcgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ3VzZUltYWdlV2FycGluZycpIHtcbiAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlSW1hZ2VDcm9wcGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VJbWFnZVdhcnBpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VJbWFnZUNyb3BwaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUltYWdlV2FycGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtY29tcHJlc3MtaW1hZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUNvbXByZXNzSW1hZ2UgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWNvbXByZXNzLWltYWdlLW1heC13aWR0aCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlQ29tcHJlc3NJbWFnZU1heFdpZHRoID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtY29tcHJlc3MtaW1hZ2UtbWF4LXZvbHVtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlQ29tcHJlc3NJbWFnZU1heFZvbHVtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlycm9yLW1vZGUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLm1pcnJvck1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24tZGVncmVlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5yb3RhdGlvbkRlZ3JlZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJlc29sdXRpb24tY3JpdGVyaWEnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLmNhbWVyYVJlc29sdXRpb25Dcml0ZXJpYSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJlc291cmNlLXJlcXVlc3QtcmV0cnktbGltaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLmNhbWVyYVJlc291cmNlUmVxdWVzdFJldHJ5TGltaXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yZXNvdXJjZS1yZXF1ZXN0LXJldHJ5LWludGVydmFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5jYW1lcmFSZXNvdXJjZVJlcXVlc3RSZXRyeUludGVydmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlkZS1ib3gtY3JpdGVyaWEnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLmNhbGNHdWlkZUJveENyaXRlcmlhID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LWNsaXBib2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Muc2hvd0NsaXBGcmFtZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LWNhbnZhcy1wcmV2aWV3JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5zaG93Q2FudmFzUHJldmlldyA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtZGVidWctYWxlcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZURlYnVnQWxlcnQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yY2Vfd2FzbV9yZWxvYWQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLmZvcmNlX3dhc21fcmVsb2FkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5fX3NldHRpbmdzLmZvcmNlX3dhc21fcmVsb2FkX2ZsYWcgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yY2Vfd2FzbV9yZWxvYWRfZmxhZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvcmNlX3dhc21fcmVsb2FkJykudmFsdWU7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5mb3JjZV93YXNtX3JlbG9hZF9mbGFnID0gY2hlY2tlZCA/IGUudGFyZ2V0LnZhbHVlIDogJyc7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZS5zcGxpdCgneCcpO1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKV07XG4gICAgICAgICAgW3RhcmdldFswXS52YWx1ZSwgdGFyZ2V0WzFdLnZhbHVlXSA9IFtzb3VyY2VbMF0sIHNvdXJjZVsxXV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1tYXNrLWZyYW1lLWNvbG9yLWNoYW5nZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWRlZmF1bHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWRlZmF1bHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXJldmVyc2UtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKV07XG4gICAgICAgIFthcnJbMF0udmFsdWUsIGFyclsxXS52YWx1ZV0gPSBbYXJyWzFdLnZhbHVlLCBhcnJbMF0udmFsdWVdOyAvLyBzd2FwXG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJyk7XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCVIOyggeyaqeuQqCc7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLnN0eWxlLmNvbG9yID0gJyM1Y2I4NWMnO1xuXG4gICAgICAgIC8vIOyduOyLnSDtlITroIjsnoQg7Iqk7YOA7J28XG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci13aWR0aCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBib3JkZXJTdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItc3R5bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYm9yZGVyUmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1yYWRpdXMnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JOb3RSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1ub3QtcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckRldGVjdFN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZGV0ZWN0LXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JEZXRlY3RGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZGV0ZWN0LWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvck9DUlJlY29nbml6ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itb2NyLXJlY29nbml6ZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZmFpbGVkJykudmFsdWU7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5mcmFtZUJvcmRlclN0eWxlID0ge1xuICAgICAgICAgIC4uLnRoaXMuX19zZXR0aW5ncy5mcmFtZUJvcmRlclN0eWxlLFxuICAgICAgICAgIHdpZHRoOiBib3JkZXJXaWR0aCxcbiAgICAgICAgICBzdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgbm90X3JlYWR5OiBjb2xvck5vdFJlYWR5LFxuICAgICAgICAgIHJlYWR5OiBjb2xvclJlYWR5LFxuICAgICAgICAgIGRldGVjdF9mYWlsZWQ6IGNvbG9yRGV0ZWN0RmFpbGVkLFxuICAgICAgICAgIGRldGVjdF9zdWNjZXNzOiBjb2xvckRldGVjdFN1Y2Nlc3MsXG4gICAgICAgICAgcmVjb2duaXplZDogY29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6IGNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICBvY3JfZmFpbGVkOiBjb2xvckZhaWxlZCxcbiAgICAgICAgICBvY3Jfc3VjY2VzczogY29sb3JTdWNjZXNzLFxuICAgICAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiBjb2xvclN1Y2Nlc3NcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDrp4jsiqTtgrkg7ZSE66CI7J6EIOyKpO2DgOydvFxuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvck5vdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3Itbm90LXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yUmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvckRldGVjdFN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1kZXRlY3Qtc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvckRldGVjdEZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWRldGVjdC1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JPQ1JSZWNvZ25pemVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3Itb2NyLXJlY29nbml6ZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3Itc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvckZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvckJhc2VDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWJhc2UtY29sb3InKS52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLm1hc2tGcmFtZVN0eWxlID0ge1xuICAgICAgICAgIC4uLnRoaXMuX19zZXR0aW5ncy5tYXNrRnJhbWVTdHlsZSxcbiAgICAgICAgICBiYXNlX2NvbG9yOiBtYXNrRnJhbWVDb2xvckJhc2VDb2xvcixcbiAgICAgICAgICBub3RfcmVhZHk6IG1hc2tGcmFtZUNvbG9yTm90UmVhZHksXG4gICAgICAgICAgcmVhZHk6IG1hc2tGcmFtZUNvbG9yUmVhZHksXG4gICAgICAgICAgZGV0ZWN0X2ZhaWxlZDogbWFza0ZyYW1lQ29sb3JEZXRlY3RGYWlsZWQsXG4gICAgICAgICAgZGV0ZWN0X3N1Y2Nlc3M6IG1hc2tGcmFtZUNvbG9yRGV0ZWN0U3VjY2VzcyxcbiAgICAgICAgICByZWNvZ25pemVkOiBtYXNrRnJhbWVDb2xvck9DUlJlY29nbml6ZWQsXG4gICAgICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogbWFza0ZyYW1lQ29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIG9jcl9mYWlsZWQ6IG1hc2tGcmFtZUNvbG9yRmFpbGVkLFxuICAgICAgICAgIG9jcl9zdWNjZXNzOiBtYXNrRnJhbWVDb2xvclN1Y2Nlc3MsXG4gICAgICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6IG1hc2tGcmFtZUNvbG9yU3VjY2Vzc1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JykudmFsdWU7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkV4cGVuZFJhdGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tZXhwZW5kLXJhdGlvJykudmFsdWU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS53aWR0aCA9IHJlc29sdXRpb25XaWR0aCAqIHJlc29sdXRpb25FeHBlbmRSYXRpbyArICdweCc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS5oZWlnaHQgPSByZXNvbHV0aW9uSGVpZ2h0ICogcmVzb2x1dGlvbkV4cGVuZFJhdGlvICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fX3R5cGUpIHtcbiAgICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkY2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdpZGNhcmQnO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzcG9ydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdwYXNzcG9ydCc7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsaWVuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gJ2FsaWVuJztcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxpZW4tYmFjaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdhbGllbi1iYWNrJztcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUZhY2VJbWFnZSA9IGZhbHNlOyAvLyDsmbjqta3snbjrk7HroZ3spp0g65K366m07J2AIOyWvOq1tCDsl4bsnYxcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlZGl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gJ2NyZWRpdCc7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkY2FyZC1zc2EnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAnaWRjYXJkLXNzYSc7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3Nwb3J0LXNzYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdwYXNzcG9ydC1zc2EnO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGllbi1zc2EnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAnYWxpZW4tc3NhJztcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydF9idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tSZXN0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX19vY3JFeGNsdWRlT3B0aW9uc1NldHRpbmcoKTtcbiAgICB9O1xuICB9XG4gIF9fb25DbGlja1N0YXJ0KCkge1xuICAgIHRoaXMuX19zZXRBY3RpdmVCdXR0b24odGhpcy5fX3R5cGUpO1xuICAgIHRoaXMuX19vbkNsaWNrU3RhcnRDYWxsYmFjayh0aGlzLl9fdHlwZSwgdGhpcy5fX3NldHRpbmdzKTtcbiAgfVxuICBfX29uQ2xpY2tSZXN0YXJ0KCkge1xuICAgIHRoaXMuX19vbkNsaWNrUmVzdGFydENhbGxiYWNrKCk7XG4gIH1cbiAgX19zZXRBY3RpdmVCdXR0b24odHlwZSkge1xuICAgIHRoaXMucmVzZXRCdXR0b24oKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuICBfX29jckV4Y2x1ZGVPcHRpb25zU2V0dGluZygpIHtcbiAgICBjb25zdCBvY3JSZXN1bHRLZXlzID0gW3tcbiAgICAgIHRpdGxlOiAn7KCE7LK0JyxcbiAgICAgIHZhbHVlOiAnYWxsJ1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAn7Iug67aE7KadIOyiheulmCcsXG4gICAgICB2YWx1ZTogJ3Jlc3VsdF9zY2FuX3R5cGUnXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfsnbTrpoQnLFxuICAgICAgdmFsdWU6ICduYW1lJ1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAn7KO866+865Ox66Gd67KI7Zi4JyxcbiAgICAgIHZhbHVlOiAnanVtaW4nXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfrsJzquInsnbzsnpAnLFxuICAgICAgdmFsdWU6ICdpc3N1ZWRfZGF0ZSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+uwnOq4iSDtlonsoJXqtazsl60nLFxuICAgICAgdmFsdWU6ICdyZWdpb24nXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICdjb2xvcl9wb2ludCcsXG4gICAgICB2YWx1ZTogJ2NvbG9yX3BvaW50J1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAn7Iug67aE7KadIOyDgSDslrzqtbQg7KKM7ZGcJyxcbiAgICAgIHZhbHVlOiAnZm91bmRfZmFjZSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+yLoOu2hOymnSDsg4Eg64iIIOyijO2RnCcsXG4gICAgICB2YWx1ZTogJ2ZvdW5kX2V5ZSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ09DUiDsi5zsnpHsi5zqsIQnLFxuICAgICAgdmFsdWU6ICdzdGFydF90aW1lJ1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAnT0NSIOyiheujjOyLnOqwhCcsXG4gICAgICB2YWx1ZTogJ2VuZF90aW1lJ1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAn7IOd64WE7JuU7J28JyxcbiAgICAgIHZhbHVlOiAnYmlydGgnXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICftlbTsmbjqsbDso7wg7Jes67aAJyxcbiAgICAgIHZhbHVlOiAnb3ZlcnNlYXNfcmVzaWRlbnQnXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfsmrTsoITrqbTtl4gg67KI7Zi4JyxcbiAgICAgIHZhbHVlOiAnZHJpdmVyX251bWJlcidcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+yatOyghOuptO2XiOymnSDsi5zrpqzslrzrsojtmLgnLFxuICAgICAgdmFsdWU6ICdkcml2ZXJfc2VyaWFsJ1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAn66m07ZeIIOyiheulmCcsXG4gICAgICB2YWx1ZTogJ2RyaXZlcl90eXBlJ1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAn7KCB7ISx6rKA7IKsIOqwseyLoOq4sOqwhCDsi5zsnpHsnbwnLFxuICAgICAgdmFsdWU6ICdhcHRpdHVkZV90ZXN0X2RhdGVfc3RhcnQnXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfsoIHshLHqsoDsgqwg6rCx7Iug6riw6rCEIOyiheujjOydvCcsXG4gICAgICB2YWx1ZTogJ2FwdGl0dWRlX3Rlc3RfZGF0ZV9lbmQnXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfshLEnLFxuICAgICAgdmFsdWU6ICdzdXJfbmFtZSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+ydtOumhCAobmFtZeqzvCDrs4Trj4QpJyxcbiAgICAgIHZhbHVlOiAnZ2l2ZW5fbmFtZSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+yXrOq2jCDsooXrpZgnLFxuICAgICAgdmFsdWU6ICdwYXNzcG9ydF90eXBlJ1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAn67Cc6riJIOq1reqwgCcsXG4gICAgICB2YWx1ZTogJ2lzc3VpbmdfY291bnRyeSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+yXrOq2jCDrsojtmLgnLFxuICAgICAgdmFsdWU6ICdwYXNzcG9ydF9udW1iZXInXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfqta3soIEnLFxuICAgICAgdmFsdWU6ICduYXRpb25hbGl0eSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+yEseuzhCcsXG4gICAgICB2YWx1ZTogJ3NleCdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+yXrOq2jCDrp4zro4zsnbwnLFxuICAgICAgdmFsdWU6ICdleHBpcnlfZGF0ZSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ3BlcnNvbmFsX251bWJlcicsXG4gICAgICB2YWx1ZTogJ3BlcnNvbmFsX251bWJlcidcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+2VnOq4gOyEseuqhScsXG4gICAgICB2YWx1ZTogJ25hbWVfa29yJ1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAn7Jes6raMIO2VmOuLqCBNUloxJyxcbiAgICAgIHZhbHVlOiAnbXJ6MSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+yXrOq2jCDtlZjri6ggTVJaMicsXG4gICAgICB2YWx1ZTogJ21yejInXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfssrTrpZjsnpDqsqknLFxuICAgICAgdmFsdWU6ICd2aXNhX3R5cGUnXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfsgqzrs7jtjJDrs4Qg6rKw6rO8JyxcbiAgICAgIHZhbHVlOiAnaWRfdHJ1dGgnXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfsgqzrs7jtjJDrs4QgY29uZmlkZW5jZScsXG4gICAgICB2YWx1ZTogJ2ZkX2NvbmZpZGVuY2UnXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfsgqzrs7jtjJDrs4Qg7J6s7Iuc64+EIO2an+yImCcsXG4gICAgICB2YWx1ZTogJ2lkX3RydXRoX3JldHJ5X2NvdW50J1xuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAnc3BlY3VsYXJfcmF0aW8nLFxuICAgICAgdmFsdWU6ICdzcGVjdWxhcl9yYXRpbydcbiAgICB9XTtcbiAgICBjb25zdCBvY3JJbWFnZUtleXMgPSBbe1xuICAgICAgdGl0bGU6ICfsoITssrQnLFxuICAgICAgdmFsdWU6ICdhbGwnXG4gICAgfSwge1xuICAgICAgdGl0bGU6ICfsm5Drs7gg7J2066+47KeAJyxcbiAgICAgIHZhbHVlOiAnb2NyX29yaWdpbl9pbWFnZSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+uniOyKpO2CuSDsnbTrr7jsp4AnLFxuICAgICAgdmFsdWU6ICdvY3JfbWFza2luZ19pbWFnZSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+yWvOq1tCDsnbTrr7jsp4AnLFxuICAgICAgdmFsdWU6ICdvY3JfZmFjZV9pbWFnZSdcbiAgICB9XTtcbiAgICBjb25zdCBpbnNlcnRFeGNsdWRlS2V5T3B0aW9ucyA9ICh0YXJnZXQsIGtleXMpID0+IHtcbiAgICAgIGNvbnN0IGh0bWwgPSBrZXlzLm1hcChrZXkgPT4ge1xuICAgICAgICByZXR1cm4gYDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHt0YXJnZXR9LSR7a2V5LnZhbHVlfVwiIG5hbWU9XCIke3RhcmdldH0ta2V5bGlzdFwiIHZhbHVlPVwiJHtrZXkudmFsdWV9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7dGFyZ2V0fS0ke2tleS52YWx1ZX1cIj4ke2tleS52YWx1ZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9saT5gO1xuICAgICAgfSkuam9pbignJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB1bCMke3RhcmdldH0ta2V5bGlzdC13cmFwcGVyYCkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XG4gICAgfTtcblxuICAgIC8vIERPTSDshLjtjIVcbiAgICBpbnNlcnRFeGNsdWRlS2V5T3B0aW9ucygnb2NyLXJlc3VsdC1leGNsdWRlJywgb2NyUmVzdWx0S2V5cyk7XG4gICAgaW5zZXJ0RXhjbHVkZUtleU9wdGlvbnMoJ29jci1pbWFnZS1leGNsdWRlJywgb2NySW1hZ2VLZXlzKTtcbiAgICBpbnNlcnRFeGNsdWRlS2V5T3B0aW9ucygnZW5jcnlwdC1vY3ItcmVzdWx0LWV4Y2x1ZGUnLCBvY3JSZXN1bHRLZXlzKTtcbiAgICBpbnNlcnRFeGNsdWRlS2V5T3B0aW9ucygnZW5jcnlwdC1vY3ItaW1hZ2UtZXhjbHVkZScsIG9jckltYWdlS2V5cyk7XG4gICAgY29uc3QgYWRkS2V5TGlzdCA9ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIFsuLi50YXJnZXQuc3BsaXQoJywnKSwga2V5XS5maWx0ZXIodiA9PiAhIXYpLmpvaW4oJywnKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUtleUxpc3QgPSAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuc3BsaXQoJywnKS5maWx0ZXIodCA9PiB0ICE9PSBrZXkpLmpvaW4oJywnKTtcbiAgICB9O1xuXG4gICAgLy8g7J2067Kk7Yq4IO2VuOuTpOufrCDrk7HroZ1cbiAgICBjb25zdCBleGNsdWRlS2V5bGlzdEhhbmRsZXIgPSBlID0+IHtcbiAgICAgIGxldCBzZXR0aW5nVGFyZ2V0ID0gJyc7XG4gICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xuICAgICAgICBjYXNlICdvY3ItcmVzdWx0LWV4Y2x1ZGUta2V5bGlzdCc6XG4gICAgICAgICAgc2V0dGluZ1RhcmdldCA9ICdvY3JSZXN1bHRFeGNsdWRlS2V5bGlzdCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29jci1pbWFnZS1leGNsdWRlLWtleWxpc3QnOlxuICAgICAgICAgIHNldHRpbmdUYXJnZXQgPSAnb2NySW1hZ2VFeGNsdWRlS2V5bGlzdCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VuY3J5cHQtb2NyLXJlc3VsdC1leGNsdWRlLWtleWxpc3QnOlxuICAgICAgICAgIHNldHRpbmdUYXJnZXQgPSAnZW5jcnlwdE9jclJlc3VsdEV4Y2x1ZGVLZXlsaXN0JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZW5jcnlwdC1vY3ItaW1hZ2UtZXhjbHVkZS1rZXlsaXN0JzpcbiAgICAgICAgICBzZXR0aW5nVGFyZ2V0ID0gJ2VuY3J5cHRPY3JJbWFnZUV4Y2x1ZGVLZXlsaXN0JztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5nc1tzZXR0aW5nVGFyZ2V0XSA9IGFkZEtleUxpc3QodGhpcy5fX3NldHRpbmdzW3NldHRpbmdUYXJnZXRdLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Nbc2V0dGluZ1RhcmdldF0gPSByZW1vdmVLZXlMaXN0KHRoaXMuX19zZXR0aW5nc1tzZXR0aW5nVGFyZ2V0XSwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNvY3ItcmVzdWx0LWV4Y2x1ZGUta2V5bGlzdC1kaXYgaW5wdXQnKS5mb3JFYWNoKGlucHV0ID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV4Y2x1ZGVLZXlsaXN0SGFuZGxlcikpO1xuICB9XG4gIHJlc2V0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBfX3NhdmVTZXR0aW5nc0hhbmRsZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtY2hlY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCV7KCB7JqpJztcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVUlTaW11bGF0b3I7Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUlBLFFBQVE7QUFDWixNQUFNQyxXQUFXLENBQUM7RUFDaEI7O0VBUUE7RUFDQUMsV0FBV0EsQ0FBQ0Msb0JBQW9CLEVBQUVDLHNCQUFzQixFQUFFO0lBQUFDLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUEscUJBTDdDO01BQ1hDLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0gsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUNDLHNCQUFzQixFQUFFO01BQ3hELE1BQU0sSUFBSUcsS0FBSyxDQUFDLGtEQUFrRCxDQUFDO0lBQ3JFO0lBQ0EsSUFBSVAsUUFBUSxFQUFFLE9BQU9BLFFBQVE7SUFDN0JBLFFBQVEsR0FBRyxJQUFJO0lBQ2YsSUFBSSxDQUFDUSxzQkFBc0IsR0FBR0wsb0JBQW9CO0lBQ2xELElBQUksQ0FBQ00sd0JBQXdCLEdBQUdMLHNCQUFzQjtJQUN0RCxJQUFJLENBQUNNLG1CQUFtQixFQUFFO0lBQzFCLE9BQU9WLFFBQVE7RUFDakI7RUFDQVUsbUJBQW1CQSxDQUFBLEVBQUc7SUFDcEJDLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLE1BQU07TUFDcEJDLFFB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
