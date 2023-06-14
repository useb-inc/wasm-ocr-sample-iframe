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
    _defineProperty(this, "__settings", {});
    if (!!!onClickStartCallback || !!!onClickRestartCallback) {
      throw new Error("onClick callback function parameter is not exist");
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
        var toggleElement = (_event$target$id = event.target.id) !== null && _event$target$id !== void 0 && _event$target$id.includes("toggle") ? event.target : event.target.parentElement;
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
        if (!event.target.checked && text.checked) {
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
      document.getElementById("use-top-ui").addEventListener("change", e => {
        toggleCustomUI('top', e);
      });
      document.getElementById("use-top-ui-text-msg").addEventListener("change", e => {
        toggleCustomUITextMsg('top', e);
      });
      document.getElementById("use-middle-ui").addEventListener("change", e => {
        toggleCustomUI('middle', e);
      });
      document.getElementById("use-middle-ui-text-msg").addEventListener("change", e => {
        toggleCustomUITextMsg('middle', e);
      });
      document.getElementById("use-bottom-ui").addEventListener("change", e => {
        toggleCustomUI('bottom', e);
      });
      document.getElementById("use-bottom-ui-text-msg").addEventListener("change", e => {
        toggleCustomUITextMsg('bottom', e);
      });
      document.getElementById("use-preview-ui").addEventListener("change", e => {
        toggleCustomUI('preview', e);
      });
      document.getElementById("mirror-mode").addEventListener("change", e => {
        this.__settings.mirrorMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('rotation-degree').addEventListener('change', e => {
        this.__settings.rotationDegree = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById("show-clipboard").addEventListener("change", e => {
        this.__settings.showClipFrame = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById("show-canvas-preview").addEventListener("change", e => {
        this.__settings.showCanvasPreview = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('resolution-template').addEventListener('change', () => {
        if (document.getElementById('resolution-template').value === "custom") {
          document.getElementById('resolution-custom').style.display = 'block';
        } else if (document.getElementById('resolution-template').value === "responsive") {
          document.getElementById('resolution-custom').style.display = 'none';
        } else {
          document.getElementById('resolution-custom').style.display = 'none';
          var source = document.getElementById('resolution-template').value.split('x');
          var target = [document.getElementById('resolution-width'), document.getElementById('resolution-height')];
          [target[0].value, target[1].value] = [source[0], source[1]];
        }
        this.__saveSettingsHandler();
      });
      document.getElementById("use-mask-frame-color-change").addEventListener("change", e => {
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

        // Body Background color
        this.__settings.bodyBackgroundColor = document.getElementById('body-background-color').value;

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
        if (document.getElementById('resolution-template').value === "responsive") {
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
      document.getElementById("idcard").addEventListener("click", () => {
        this.__type = "idcard";
        this.__onClickStart();
      });
      document.getElementById("passport").addEventListener("click", () => {
        this.__type = "passport";
        this.__onClickStart();
      });
      document.getElementById("alien").addEventListener("click", () => {
        this.__type = "alien";
        this.__onClickStart();
      });
      document.getElementById("credit").addEventListener("click", () => {
        this.__type = "credit";
        this.__onClickStart();
      });
      document.getElementById("idcard-ssa").addEventListener("click", () => {
        this.__type = "idcard-ssa";
        this.__onClickStart();
      });
      document.getElementById("passport-ssa").addEventListener("click", () => {
        this.__type = "passport-ssa";
        this.__onClickStart();
      });
      document.getElementById("alien-ssa").addEventListener("click", () => {
        this.__type = "alien-ssa";
        this.__onClickStart();
      });

      // document.getElementById("credit-ssa").addEventListener("click", () => {
      //   this.__type = "credit-ssa";
      //   this.__onClickStart();
      // });

      document.getElementById('restart_btn').addEventListener("click", () => {
        this.__onClickRestart();
      });
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
    document.getElementById(type).classList.add("active");
  }
  resetButton() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.classList.remove("active");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJVSVNpbXVsYXRvciIsImNvbnN0cnVjdG9yIiwib25DbGlja1N0YXJ0Q2FsbGJhY2siLCJvbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5IiwiRXJyb3IiLCJfX29uQ2xpY2tTdGFydENhbGxiYWNrIiwiX19vbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX19iaW5kRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3NhdmVTZXR0aW5nc0hhbmRsZXIiLCJjb2xsYXBzZWRUb2dnbGUiLCJldmVudCIsIl9ldmVudCR0YXJnZXQkaWQiLCJ0b2dnbGVFbGVtZW50IiwidGFyZ2V0IiwiaWQiLCJpbmNsdWRlcyIsInBhcmVudEVsZW1lbnQiLCJzZWN0aW9uIiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2hldnJvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidGV4dENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImUiLCJfX3NldHRpbmdzIiwic3NhTWF4UmV0cnlDb3VudCIsImlzTmFOIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInRvZ2dsZUN1c3RvbVVJIiwicG9zaXRpb24iLCJ1c2VUb3BVSSIsImNoZWNrZWQiLCJ1c2VNaWRkbGVVSSIsInVzZUJvdHRvbVVJIiwidXNlUHJldmlld1VJIiwidGV4dCIsImNvbmNhdCIsImNsaWNrIiwidG9nZ2xlQ3VzdG9tVUlUZXh0TXNnIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUlUZXh0TXNnIiwidWkiLCJtaXJyb3JNb2RlIiwicm90YXRpb25EZWdyZWUiLCJzaG93Q2xpcEZyYW1lIiwic2hvd0NhbnZhc1ByZXZpZXciLCJzdHlsZSIsImRpc3BsYXkiLCJzb3VyY2UiLCJzcGxpdCIsInVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlIiwiYXJyIiwic2V0QXR0cmlidXRlIiwiY29sb3IiLCJib2R5QmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImNvbG9yTm90UmVhZHkiLCJjb2xvclJlYWR5IiwiY29sb3JEZXRlY3RTdWNjZXNzIiwiY29sb3JEZXRlY3RGYWlsZWQiLCJjb2xvck9DUlJlY29nbml6ZWQiLCJjb2xvclN1Y2Nlc3MiLCJjb2xvckZhaWxlZCIsImZyYW1lQm9yZGVyU3R5bGUiLCJfb2JqZWN0U3ByZWFkIiwid2lkdGgiLCJyYWRpdXMiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9mYWlsZWQiLCJkZXRlY3Rfc3VjY2VzcyIsInJlY29nbml6ZWQiLCJyZWNvZ25pemVkX3dpdGhfc3NhIiwib2NyX2ZhaWxlZCIsIm9jcl9zdWNjZXNzIiwib2NyX3N1Y2Nlc3Nfd2l0aF9zc2EiLCJtYXNrRnJhbWVDb2xvck5vdFJlYWR5IiwibWFza0ZyYW1lQ29sb3JSZWFkeSIsIm1hc2tGcmFtZUNvbG9yRGV0ZWN0U3VjY2VzcyIsIm1hc2tGcmFtZUNvbG9yRGV0ZWN0RmFpbGVkIiwibWFza0ZyYW1lQ29sb3JPQ1JSZWNvZ25pemVkIiwibWFza0ZyYW1lQ29sb3JTdWNjZXNzIiwibWFza0ZyYW1lQ29sb3JGYWlsZWQiLCJtYXNrRnJhbWVDb2xvckJhc2VDb2xvciIsIm1hc2tGcmFtZVN0eWxlIiwiYmFzZV9jb2xvciIsImhlaWdodCIsInJlc29sdXRpb25XaWR0aCIsInJlc29sdXRpb25IZWlnaHQiLCJyZXNvbHV0aW9uRXhwZW5kUmF0aW8iLCJfX3R5cGUiLCJfX29uQ2xpY2tTdGFydCIsIl9fb25DbGlja1Jlc3RhcnQiLCJfX3NldEFjdGl2ZUJ1dHRvbiIsInR5cGUiLCJyZXNldEJ1dHRvbiIsImJ1dHRvbnMiLCJidXR0b24iLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlcyI6WyJqcy91aV9zaW11bGF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGluc3RhbmNlO1xuY2xhc3MgVUlTaW11bGF0b3Ige1xuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIF9fb25DbGlja1N0YXJ0Q2FsbGJhY2s7XG4gIF9fb25DbGlja1Jlc3RhcnRDYWxsYmFjaztcbiAgX190eXBlO1xuICBfX3NldHRpbmdzID0ge307XG5cbiAgLyoqIGNvbnN0cnVjdG9yICovXG4gIGNvbnN0cnVjdG9yKG9uQ2xpY2tTdGFydENhbGxiYWNrLCBvbkNsaWNrUmVzdGFydENhbGxiYWNrKSB7XG4gICAgaWYgKCEhIW9uQ2xpY2tTdGFydENhbGxiYWNrIHx8ICEhIW9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm9uQ2xpY2sgY2FsbGJhY2sgZnVuY3Rpb24gcGFyYW1ldGVyIGlzIG5vdCBleGlzdFwiKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuX19vbkNsaWNrU3RhcnRDYWxsYmFjayA9IG9uQ2xpY2tTdGFydENhbGxiYWNrO1xuICAgIHRoaXMuX19vbkNsaWNrUmVzdGFydENhbGxiYWNrID0gb25DbGlja1Jlc3RhcnRDYWxsYmFjaztcbiAgICB0aGlzLl9fYmluZEV2ZW50TGlzdGVuZXIoKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cbiAgX19iaW5kRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzLXNlY3Rpb24gaW5wdXQnKS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcik7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29sbGFwc2VkVG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSBldmVudC50YXJnZXQuaWQ/LmluY2x1ZGVzKFwidG9nZ2xlXCIpID8gZXZlbnQudGFyZ2V0IDogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0b2dnbGVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdG9nZ2xlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGNoZXZyb24gPSB0b2dnbGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGV2cm9uJyk7XG4gICAgICAgIC8vIGNvbnN0IHNldHRpbmdzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgIC8vIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICcgc3BhbicpXG4gICAgICAgIC8vIGNvbnN0IGNoZXZyb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJyAuY2hldnJvbicpXG4gICAgICAgIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJykpIHtcbiAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi11cCcpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi1kb3duJyk7XG4gICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnW+ygkeq4sF0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWRvd24nKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tdXAnKTtcbiAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdb7Y687LmY6riwXSc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxhcHNlZFRvZ2dsZSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xsYXBzZWRUb2dnbGUpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NzYS1tYXgtcmV0cnktY291bnQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnNzYU1heFJldHJ5Q291bnQgPSBpc05hTihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpID8gMCA6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdG9nZ2xlQ3VzdG9tVUkgPSAocG9zaXRpb24sIGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZVRvcFVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZU1pZGRsZVVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUJvdHRvbVVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwcmV2aWV3JzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VQcmV2aWV3VUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlLSR7cG9zaXRpb259LXVpLXRleHQtbXNnYCk7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgdGV4dC5jaGVja2VkKSB7XG4gICAgICAgICAgdGV4dC5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnID0gKHBvc2l0aW9uLCBldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VUb3BVSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTWlkZGxlVUlUZXh0TXNnID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUJvdHRvbVVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdWkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlLSR7cG9zaXRpb259LXVpYCk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCAmJiAhdWkuY2hlY2tlZCkge1xuICAgICAgICAgIHVpLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS10b3AtdWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ3RvcCcsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS10b3AtdWktdGV4dC1tc2dcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnKCd0b3AnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtbWlkZGxlLXVpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdtaWRkbGUnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtbWlkZGxlLXVpLXRleHQtbXNnXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJVGV4dE1zZygnbWlkZGxlJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLWJvdHRvbS11aVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgnYm90dG9tJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLWJvdHRvbS11aS10ZXh0LW1zZ1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSVRleHRNc2coJ2JvdHRvbScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS1wcmV2aWV3LXVpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdwcmV2aWV3JywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlycm9yLW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLm1pcnJvck1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24tZGVncmVlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5yb3RhdGlvbkRlZ3JlZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctY2xpcGJvYXJkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5zaG93Q2xpcEZyYW1lID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LWNhbnZhcy1wcmV2aWV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5zaG93Q2FudmFzUHJldmlldyA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gXCJjdXN0b21cIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwicmVzcG9uc2l2ZVwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUuc3BsaXQoJ3gnKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JyldO1xuICAgICAgICAgIFt0YXJnZXRbMF0udmFsdWUsIHRhcmdldFsxXS52YWx1ZV0gPSBbc291cmNlWzBdLCBzb3VyY2VbMV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLW1hc2stZnJhbWUtY29sb3ItY2hhbmdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VNYXNrRnJhbWVDb2xvckNoYW5nZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItZGVmYXVsdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItZGVmYXVsdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tcmV2ZXJzZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpXTtcbiAgICAgICAgW2FyclswXS52YWx1ZSwgYXJyWzFdLnZhbHVlXSA9IFthcnJbMV0udmFsdWUsIGFyclswXS52YWx1ZV07IC8vIHN3YXBcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9ICfshKTsoJUg7KCB7Jqp65CoJztcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuc3R5bGUuY29sb3IgPSAnIzVjYjg1Yyc7XG5cbiAgICAgICAgLy8gQm9keSBCYWNrZ3JvdW5kIGNvbG9yXG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5ib2R5QmFja2dyb3VuZENvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktYmFja2dyb3VuZC1jb2xvcicpLnZhbHVlO1xuXG4gICAgICAgIC8vIOyduOyLnSDtlITroIjsnoQg7Iqk7YOA7J28XG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci13aWR0aCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBib3JkZXJTdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItc3R5bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYm9yZGVyUmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1yYWRpdXMnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JOb3RSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1ub3QtcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckRldGVjdFN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZGV0ZWN0LXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JEZXRlY3RGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZGV0ZWN0LWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvck9DUlJlY29nbml6ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itb2NyLXJlY29nbml6ZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZmFpbGVkJykudmFsdWU7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5mcmFtZUJvcmRlclN0eWxlID0ge1xuICAgICAgICAgIC4uLnRoaXMuX19zZXR0aW5ncy5mcmFtZUJvcmRlclN0eWxlLFxuICAgICAgICAgIHdpZHRoOiBib3JkZXJXaWR0aCxcbiAgICAgICAgICBzdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgbm90X3JlYWR5OiBjb2xvck5vdFJlYWR5LFxuICAgICAgICAgIHJlYWR5OiBjb2xvclJlYWR5LFxuICAgICAgICAgIGRldGVjdF9mYWlsZWQ6IGNvbG9yRGV0ZWN0RmFpbGVkLFxuICAgICAgICAgIGRldGVjdF9zdWNjZXNzOiBjb2xvckRldGVjdFN1Y2Nlc3MsXG4gICAgICAgICAgcmVjb2duaXplZDogY29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6IGNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICBvY3JfZmFpbGVkOiBjb2xvckZhaWxlZCxcbiAgICAgICAgICBvY3Jfc3VjY2VzczogY29sb3JTdWNjZXNzLFxuICAgICAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiBjb2xvclN1Y2Nlc3NcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDrp4jsiqTtgrkg7ZSE66CI7J6EIOyKpO2DgOydvFxuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvck5vdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3Itbm90LXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yUmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvckRldGVjdFN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1kZXRlY3Qtc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvckRldGVjdEZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWRldGVjdC1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JPQ1JSZWNvZ25pemVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3Itb2NyLXJlY29nbml6ZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3Itc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvckZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvckJhc2VDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWJhc2UtY29sb3InKS52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLm1hc2tGcmFtZVN0eWxlID0ge1xuICAgICAgICAgIC4uLnRoaXMuX19zZXR0aW5ncy5tYXNrRnJhbWVTdHlsZSxcbiAgICAgICAgICBiYXNlX2NvbG9yOiBtYXNrRnJhbWVDb2xvckJhc2VDb2xvcixcbiAgICAgICAgICBub3RfcmVhZHk6IG1hc2tGcmFtZUNvbG9yTm90UmVhZHksXG4gICAgICAgICAgcmVhZHk6IG1hc2tGcmFtZUNvbG9yUmVhZHksXG4gICAgICAgICAgZGV0ZWN0X2ZhaWxlZDogbWFza0ZyYW1lQ29sb3JEZXRlY3RGYWlsZWQsXG4gICAgICAgICAgZGV0ZWN0X3N1Y2Nlc3M6IG1hc2tGcmFtZUNvbG9yRGV0ZWN0U3VjY2VzcyxcbiAgICAgICAgICByZWNvZ25pemVkOiBtYXNrRnJhbWVDb2xvck9DUlJlY29nbml6ZWQsXG4gICAgICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogbWFza0ZyYW1lQ29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIG9jcl9mYWlsZWQ6IG1hc2tGcmFtZUNvbG9yRmFpbGVkLFxuICAgICAgICAgIG9jcl9zdWNjZXNzOiBtYXNrRnJhbWVDb2xvclN1Y2Nlc3MsXG4gICAgICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6IG1hc2tGcmFtZUNvbG9yU3VjY2Vzc1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gXCJyZXNwb25zaXZlXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uV2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25IZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uRXhwZW5kUmF0aW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1leHBlbmQtcmF0aW8nKS52YWx1ZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLndpZHRoID0gcmVzb2x1dGlvbldpZHRoICogcmVzb2x1dGlvbkV4cGVuZFJhdGlvICsgJ3B4JztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLmhlaWdodCA9IHJlc29sdXRpb25IZWlnaHQgKiByZXNvbHV0aW9uRXhwZW5kUmF0aW8gKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9fdHlwZSkge1xuICAgICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkY2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9IFwiaWRjYXJkXCI7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzcG9ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9IFwicGFzc3BvcnRcIjtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsaWVuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gXCJhbGllblwiO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlZGl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gXCJjcmVkaXRcIjtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkY2FyZC1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSBcImlkY2FyZC1zc2FcIjtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3Nwb3J0LXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9IFwicGFzc3BvcnQtc3NhXCI7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGllbi1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSBcImFsaWVuLXNzYVwiO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVkaXQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgIHRoaXMuX190eXBlID0gXCJjcmVkaXQtc3NhXCI7XG4gICAgICAvLyAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydF9idG4nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fb25DbGlja1Jlc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgX19vbkNsaWNrU3RhcnQoKSB7XG4gICAgdGhpcy5fX3NldEFjdGl2ZUJ1dHRvbih0aGlzLl9fdHlwZSk7XG4gICAgdGhpcy5fX29uQ2xpY2tTdGFydENhbGxiYWNrKHRoaXMuX190eXBlLCB0aGlzLl9fc2V0dGluZ3MpO1xuICB9XG4gIF9fb25DbGlja1Jlc3RhcnQoKSB7XG4gICAgdGhpcy5fX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2soKTtcbiAgfVxuICBfX3NldEFjdGl2ZUJ1dHRvbih0eXBlKSB7XG4gICAgdGhpcy5yZXNldEJ1dHRvbigpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbiAgcmVzZXRCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuICBfX3NhdmVTZXR0aW5nc0hhbmRsZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtY2hlY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCV7KCB7JqpJztcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVUlTaW11bGF0b3I7Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUlBLFFBQVE7QUFDWixNQUFNQyxXQUFXLENBQUM7RUFDaEI7O0VBTUE7RUFDQUMsV0FBV0EsQ0FBQ0Msb0JBQW9CLEVBQUVDLHNCQUFzQixFQUFFO0lBQUFDLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUEscUJBSDdDLENBQUMsQ0FBQztJQUliLElBQUksQ0FBQyxDQUFDLENBQUNGLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxDQUFDQyxzQkFBc0IsRUFBRTtNQUN4RCxNQUFNLElBQUlFLEtBQUssQ0FBQyxrREFBa0QsQ0FBQztJQUNyRTtJQUNBLElBQUlOLFFBQVEsRUFBRSxPQUFPQSxRQUFRO0lBQzdCQSxRQUFRLEdBQUcsSUFBSTtJQUNmLElBQUksQ0FBQ08sc0JBQXNCLEdBQUdKLG9CQUFvQjtJQUNsRCxJQUFJLENBQUNLLHdCQUF3QixHQUFHSixzQkFBc0I7SUFDdEQsSUFBSSxDQUFDSyxtQkFBbUIsRUFBRTtJQUMxQixPQUFPVCxRQUFRO0VBQ2pCO0VBQ0FTLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQ3BCQyxNQUFNLENBQUNDLE1BQU0sR0FBRyxNQUFNO01BQ3BCQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO1FBQ3BFQSxLQUFLLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLHFCQUFxQixDQUFDO1FBQzNERixLQUFLLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLHFCQUFxQixDQUFDO01BQzlELENBQUMsQ0FBQztNQUNGLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBYUMsS0FBSyxFQUFFO1FBQUEsSUFBQUMsZ0JBQUE7UUFDdkMsSUFBTUMsYUFBYSxHQUFHLENBQUFELGdCQUFBLEdBQUFELEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxFQUFFLGNBQUFILGdCQUFBLGVBQWZBLGdCQUFBLENBQWlCSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUdMLEtBQUssQ0FBQ0csTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU0sQ0FBQ0csYUFBYTtRQUNyRyxJQUFNQyxPQUFPLEdBQUdMLGFBQWEsQ0FBQ0ksYUFBYTtRQUMzQyxJQUFNRSxLQUFLLEdBQUdOLGFBQWEsQ0FBQ08sYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNqRCxJQUFNQyxPQUFPLEdBQUdSLGFBQWEsQ0FBQ08sYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN2RDtRQUNBO1FBQ0E7UUFDQSxJQUFJRixPQUFPLENBQUNJLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1VBQzNDTCxPQUFPLENBQUNJLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFdBQVcsQ0FBQztVQUNyQ0gsT0FBTyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxlQUFlLENBQUM7VUFDekNILE9BQU8sQ0FBQ0MsU0FBUyxDQUFDRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7VUFDeENOLEtBQUssQ0FBQ08sV0FBVyxHQUFHLE1BQU07UUFDNUIsQ0FBQyxNQUFNO1VBQ0xSLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDO1VBQ2xDSixPQUFPLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1VBQzNDSCxPQUFPLENBQUNDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGVBQWUsQ0FBQztVQUN0Q04sS0FBSyxDQUFDTyxXQUFXLEdBQUcsT0FBTztRQUM3QjtNQUNGLENBQUM7TUFDRHRCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRUUsZUFBZSxDQUFDO01BQ2pGTixRQUFRLENBQUN1QixjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRUUsZUFBZSxDQUFDO01BQ3JGTixRQUFRLENBQUN1QixjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUM3RSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsZ0JBQWdCLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDSixDQUFDLENBQUNkLE1BQU0sQ0FBQ21CLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHRCxRQUFRLENBQUNKLENBQUMsQ0FBQ2QsTUFBTSxDQUFDbUIsS0FBSyxDQUFDO1FBQ2pHLElBQUksQ0FBQ3hCLHFCQUFxQixFQUFFO01BQzlCLENBQUMsQ0FBQztNQUNGLElBQU15QixjQUFjLEdBQUdBLENBQUNDLFFBQVEsRUFBRXhCLEtBQUssS0FBSztRQUMxQyxRQUFRd0IsUUFBUTtVQUNkLEtBQUssS0FBSztZQUNSLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxRQUFRLEdBQUd6QixLQUFLLENBQUNHLE1BQU0sQ0FBQ3VCLE9BQU87WUFDL0M7VUFDRixLQUFLLFFBQVE7WUFDWCxJQUFJLENBQUNSLFVBQVUsQ0FBQ1MsV0FBVyxHQUFHM0IsS0FBSyxDQUFDRyxNQUFNLENBQUN1QixPQUFPO1lBQ2xEO1VBQ0YsS0FBSyxRQUFRO1lBQ1gsSUFBSSxDQUFDUixVQUFVLENBQUNVLFdBQVcsR0FBRzVCLEtBQUssQ0FBQ0csTUFBTSxDQUFDdUIsT0FBTztZQUNsRDtVQUNGLEtBQUssU0FBUztZQUNaLElBQUksQ0FBQ1IsVUFBVSxDQUFDVyxZQUFZLEdBQUc3QixLQUFLLENBQUNHLE1BQU0sQ0FBQ3VCLE9BQU87WUFDbkQ7UUFBTTtRQUVWLElBQU1JLElBQUksR0FBR3JDLFFBQVEsQ0FBQ3VCLGNBQWMsUUFBQWUsTUFBQSxDQUFRUCxRQUFRLGtCQUFlO1FBQ25FLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ0csTUFBTSxDQUFDdUIsT0FBTyxJQUFJSSxJQUFJLENBQUNKLE9BQU8sRUFBRTtVQUN6Q0ksSUFBSSxDQUFDRSxLQUFLLEVBQUU7UUFDZDtRQUNBLElBQUksQ0FBQ2xDLHFCQUFxQixFQUFFO01BQzlCLENBQUM7TUFDRCxJQUFNbUMscUJBQXFCLEdBQUdBLENBQUNULFFBQVEsRUFBRXhCLEtBQUssS0FBSztRQUNqRCxRQUFRd0IsUUFBUTtVQUNkLEtBQUssS0FBSztZQUNSLElBQUksQ0FBQ04sVUFBVSxDQUFDZ0IsZUFBZSxHQUFHbEMsS0FBSyxDQUFDRyxNQUFNLENBQUN1QixPQUFPO1lBQ3REO1VBQ0YsS0FBSyxRQUFRO1lBQ1gsSUFBSSxDQUFDUixVQUFVLENBQUNpQixrQkFBa0IsR0FBR25DLEtBQUssQ0FBQ0csTUFBTSxDQUFDdUIsT0FBTztZQUN6RDtVQUNGLEtBQUssUUFBUTtZQUNYLElBQUksQ0FBQ1IsVUFBVSxDQUFDa0Isa0JBQWtCLEdBQUdwQyxLQUFLLENBQUNHLE1BQU0sQ0FBQ3VCLE9BQU87WUFDekQ7UUFBTTtRQUVWLElBQU1XLEVBQUUsR0FBRzVDLFFBQVEsQ0FBQ3VCLGNBQWMsUUFBQWUsTUFBQSxDQUFRUCxRQUFRLFNBQU07UUFDeEQsSUFBSXhCLEtBQUssQ0FBQ0csTUFBTSxDQUFDdUIsT0FBTyxJQUFJLENBQUNXLEVBQUUsQ0FBQ1gsT0FBTyxFQUFFO1VBQ3ZDVyxFQUFFLENBQUNMLEtBQUssRUFBRTtRQUNaO1FBQ0EsSUFBSSxDQUFDbEMscUJBQXFCLEVBQUU7TUFDOUIsQ0FBQztNQUNETCxRQUFRLENBQUN1QixjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvQixDQUFDLElBQUk7UUFDcEVNLGNBQWMsQ0FBQyxLQUFLLEVBQUVOLENBQUMsQ0FBQztNQUMxQixDQUFDLENBQUM7TUFDRnhCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsQ0FBQyxJQUFJO1FBQzdFZ0IscUJBQXFCLENBQUMsS0FBSyxFQUFFaEIsQ0FBQyxDQUFDO01BQ2pDLENBQUMsQ0FBQztNQUNGeEIsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsQ0FBQyxJQUFJO1FBQ3ZFTSxjQUFjLENBQUMsUUFBUSxFQUFFTixDQUFDLENBQUM7TUFDN0IsQ0FBQyxDQUFDO01BQ0Z4QixRQUFRLENBQUN1QixjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUNoRmdCLHFCQUFxQixDQUFDLFFBQVEsRUFBRWhCLENBQUMsQ0FBQztNQUNwQyxDQUFDLENBQUM7TUFDRnhCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUN2RU0sY0FBYyxDQUFDLFFBQVEsRUFBRU4sQ0FBQyxDQUFDO01BQzdCLENBQUMsQ0FBQztNQUNGeEIsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvQixDQUFDLElBQUk7UUFDaEZnQixxQkFBcUIsQ0FBQyxRQUFRLEVBQUVoQixDQUFDLENBQUM7TUFDcEMsQ0FBQyxDQUFDO01BQ0Z4QixRQUFRLENBQUN1QixjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUN4RU0sY0FBYyxDQUFDLFNBQVMsRUFBRU4sQ0FBQyxDQUFDO01BQzlCLENBQUMsQ0FBQztNQUNGeEIsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsQ0FBQyxJQUFJO1FBQ3JFLElBQUksQ0FBQ0MsVUFBVSxDQUFDb0IsVUFBVSxHQUFHckIsQ0FBQyxDQUFDZCxNQUFNLENBQUN1QixPQUFPO1FBQzdDLElBQUksQ0FBQzVCLHFCQUFxQixFQUFFO01BQzlCLENBQUMsQ0FBQztNQUNGTCxRQUFRLENBQUN1QixjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUN6RSxJQUFJLENBQUNDLFVBQVUsQ0FBQ3FCLGNBQWMsR0FBR3RCLENBQUMsQ0FBQ2QsTUFBTSxDQUFDbUIsS0FBSztRQUMvQyxJQUFJLENBQUN4QixxQkFBcUIsRUFBRTtNQUM5QixDQUFDLENBQUM7TUFDRkwsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvQixDQUFDLElBQUk7UUFDeEUsSUFBSSxDQUFDQyxVQUFVLENBQUNzQixhQUFhLEdBQUd2QixDQUFDLENBQUNkLE1BQU0sQ0FBQ3VCLE9BQU87UUFDaEQsSUFBSSxDQUFDNUIscUJBQXFCLEVBQUU7TUFDOUIsQ0FBQyxDQUFDO01BQ0ZMLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsQ0FBQyxJQUFJO1FBQzdFLElBQUksQ0FBQ0MsVUFBVSxDQUFDdUIsaUJBQWlCLEdBQUd4QixDQUFDLENBQUNkLE1BQU0sQ0FBQ3VCLE9BQU87UUFDcEQsSUFBSSxDQUFDNUIscUJBQXFCLEVBQUU7TUFDOUIsQ0FBQyxDQUFDO01BQ0ZMLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU07UUFDOUUsSUFBSUosUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUNNLEtBQUssS0FBSyxRQUFRLEVBQUU7VUFDckU3QixRQUFRLENBQUN1QixjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQzBCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87UUFDdEUsQ0FBQyxNQUFNLElBQUlsRCxRQUFRLENBQUN1QixjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQ00sS0FBSyxLQUFLLFlBQVksRUFBRTtVQUNoRjdCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDMEIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtRQUNyRSxDQUFDLE1BQU07VUFDTGxELFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDMEIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtVQUNuRSxJQUFNQyxNQUFNLEdBQUduRCxRQUFRLENBQUN1QixjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQ00sS0FBSyxDQUFDdUIsS0FBSyxDQUFDLEdBQUcsQ0FBQztVQUM5RSxJQUFNMUMsTUFBTSxHQUFHLENBQUNWLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFdkIsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7VUFDMUcsQ0FBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDbUIsS0FBSyxFQUFFbkIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDbUIsS0FBSyxDQUFDLEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdEO1FBQ0EsSUFBSSxDQUFDOUMscUJBQXFCLEVBQUU7TUFDOUIsQ0FBQyxDQUFDO01BQ0ZMLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsQ0FBQyxJQUFJO1FBQ3JGLElBQUksQ0FBQ0MsVUFBVSxDQUFDNEIsdUJBQXVCLEdBQUc3QixDQUFDLENBQUNkLE1BQU0sQ0FBQ3VCLE9BQU87UUFDMUQsSUFBSVQsQ0FBQyxDQUFDZCxNQUFNLENBQUN1QixPQUFPLEVBQUU7VUFDcEJqQyxRQUFRLENBQUN1QixjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQzBCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07VUFDMUVsRCxRQUFRLENBQUN1QixjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQzBCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87UUFDNUUsQ0FBQyxNQUFNO1VBQ0xsRCxRQUFRLENBQUN1QixjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQzBCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87VUFDM0VsRCxRQUFRLENBQUN1QixjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQzBCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07UUFDM0U7UUFDQSxJQUFJLENBQUM3QyxxQkFBcUIsRUFBRTtNQUM5QixDQUFDLENBQUM7TUFDRkwsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLDJCQUEyQixDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUNuRixJQUFNa0QsR0FBRyxHQUFHLENBQUN0RCxRQUFRLENBQUN1QixjQUFjLENBQUMsa0JBQWtCLENBQUMsRUFBRXZCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3ZHLENBQUMrQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUN6QixLQUFLLEVBQUV5QixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDeUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDekIsS0FBSyxFQUFFeUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDekIsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUN4QixxQkFBcUIsRUFBRTtNQUM5QixDQUFDLENBQUM7TUFDRkwsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFRyxLQUFLLElBQUk7UUFDMUUsSUFBTUcsTUFBTSxHQUFHVixRQUFRLENBQUN1QixjQUFjLENBQUMsZUFBZSxDQUFDO1FBQ3ZEYixNQUFNLENBQUM2QyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztRQUMzQzdDLE1BQU0sQ0FBQ00sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDTSxXQUFXLEdBQUcsUUFBUTtRQUNuRFosTUFBTSxDQUFDTSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUNpQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxjQUFjO1FBQ3hEeEMsTUFBTSxDQUFDTSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUNpQyxLQUFLLENBQUNPLEtBQUssR0FBRyxTQUFTOztRQUVqRDtRQUNBLElBQUksQ0FBQy9CLFVBQVUsQ0FBQ2dDLG1CQUFtQixHQUFHekQsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUNNLEtBQUs7O1FBRTVGO1FBQ0EsSUFBTTZCLFdBQVcsR0FBRzFELFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQ00sS0FBSztRQUNqRSxJQUFNOEIsV0FBVyxHQUFHM0QsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDTSxLQUFLO1FBQ2pFLElBQU0rQixZQUFZLEdBQUc1RCxRQUFRLENBQUN1QixjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNNLEtBQUs7UUFDbkUsSUFBTWdDLGFBQWEsR0FBRzdELFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDTSxLQUFLO1FBQ3RFLElBQU1pQyxVQUFVLEdBQUc5RCxRQUFRLENBQUN1QixjQUFjLENBQUMsYUFBYSxDQUFDLENBQUNNLEtBQUs7UUFDL0QsSUFBTWtDLGtCQUFrQixHQUFHL0QsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUNNLEtBQUs7UUFDaEYsSUFBTW1DLGlCQUFpQixHQUFHaEUsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUNNLEtBQUs7UUFDOUUsSUFBTW9DLGtCQUFrQixHQUFHakUsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUNNLEtBQUs7UUFDaEYsSUFBTXFDLFlBQVksR0FBR2xFLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ00sS0FBSztRQUNuRSxJQUFNc0MsV0FBVyxHQUFHbkUsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDTSxLQUFLO1FBQ2pFLElBQUksQ0FBQ0osVUFBVSxDQUFDMkMsZ0JBQWdCLEdBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUMzQixJQUFJLENBQUM1QyxVQUFVLENBQUMyQyxnQkFBZ0I7VUFDbkNFLEtBQUssRUFBRVosV0FBVztVQUNsQlQsS0FBSyxFQUFFVSxXQUFXO1VBQ2xCWSxNQUFNLEVBQUVYLFlBQVk7VUFDcEJZLFNBQVMsRUFBRVgsYUFBYTtVQUN4QlksS0FBSyxFQUFFWCxVQUFVO1VBQ2pCWSxhQUFhLEVBQUVWLGlCQUFpQjtVQUNoQ1csY0FBYyxFQUFFWixrQkFBa0I7VUFDbENhLFVBQVUsRUFBRVgsa0JBQWtCO1VBQzlCWSxtQkFBbUIsRUFBRVosa0JBQWtCO1VBQ3ZDYSxVQUFVLEVBQUVYLFdBQVc7VUFDdkJZLFdBQVcsRUFBRWIsWUFBWTtVQUN6QmMsb0JBQW9CLEVBQUVkO1FBQVksRUFDbkM7O1FBRUQ7UUFDQSxJQUFNZSxzQkFBc0IsR0FBR2pGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDTSxLQUFLO1FBQzFGLElBQU1xRCxtQkFBbUIsR0FBR2xGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDTSxLQUFLO1FBQ25GLElBQU1zRCwyQkFBMkIsR0FBR25GLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDTSxLQUFLO1FBQ3BHLElBQU11RCwwQkFBMEIsR0FBR3BGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDTSxLQUFLO1FBQ2xHLElBQU13RCwyQkFBMkIsR0FBR3JGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDTSxLQUFLO1FBQ3BHLElBQU15RCxxQkFBcUIsR0FBR3RGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDTSxLQUFLO1FBQ3ZGLElBQU0wRCxvQkFBb0IsR0FBR3ZGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDTSxLQUFLO1FBQ3JGLElBQU0yRCx1QkFBdUIsR0FBR3hGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDTSxLQUFLO1FBQzVGLElBQUksQ0FBQ0osVUFBVSxDQUFDZ0UsY0FBYyxHQUFBcEIsYUFBQSxDQUFBQSxhQUFBLEtBQ3pCLElBQUksQ0FBQzVDLFVBQVUsQ0FBQ2dFLGNBQWM7VUFDakNDLFVBQVUsRUFBRUYsdUJBQXVCO1VBQ25DaEIsU0FBUyxFQUFFUyxzQkFBc0I7VUFDakNSLEtBQUssRUFBRVMsbUJBQW1CO1VBQzFCUixhQUFhLEVBQUVVLDBCQUEwQjtVQUN6Q1QsY0FBYyxFQUFFUSwyQkFBMkI7VUFDM0NQLFVBQVUsRUFBRVMsMkJBQTJCO1VBQ3ZDUixtQkFBbUIsRUFBRVEsMkJBQTJCO1VBQ2hEUCxVQUFVLEVBQUVTLG9CQUFvQjtVQUNoQ1IsV0FBVyxFQUFFTyxxQkFBcUI7VUFDbENOLG9CQUFvQixFQUFFTTtRQUFxQixFQUM1QztRQUNELElBQUl0RixRQUFRLENBQUN1QixjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQ00sS0FBSyxLQUFLLFlBQVksRUFBRTtVQUN6RTdCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDMEIsS0FBSyxDQUFDcUIsS0FBSyxHQUFHLEVBQUU7VUFDeEV0RSxRQUFRLENBQUN1QixjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FBQzBCLEtBQUssQ0FBQzBDLE1BQU0sR0FBRyxFQUFFO1FBQzNFLENBQUMsTUFBTTtVQUNMLElBQU1DLGVBQWUsR0FBRzVGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDTSxLQUFLO1VBQ3pFLElBQU1nRSxnQkFBZ0IsR0FBRzdGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDTSxLQUFLO1VBQzNFLElBQU1pRSxxQkFBcUIsR0FBRzlGLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDTSxLQUFLO1VBQ3RGN0IsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLDhCQUE4QixDQUFDLENBQUMwQixLQUFLLENBQUNxQixLQUFLLEdBQUdzQixlQUFlLEdBQUdFLHFCQUFxQixHQUFHLElBQUk7VUFDcEg5RixRQUFRLENBQUN1QixjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FBQzBCLEtBQUssQ0FBQzBDLE1BQU0sR0FBR0UsZ0JBQWdCLEdBQUdDLHFCQUFxQixHQUFHLElBQUk7UUFDeEg7UUFDQSxJQUFJLElBQUksQ0FBQ0MsTUFBTSxFQUFFO1VBQ2YsSUFBSSxDQUFDQyxjQUFjLEVBQUU7UUFDdkI7TUFDRixDQUFDLENBQUM7TUFDRmhHLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2hFLElBQUksQ0FBQzJGLE1BQU0sR0FBRyxRQUFRO1FBQ3RCLElBQUksQ0FBQ0MsY0FBYyxFQUFFO01BQ3ZCLENBQUMsQ0FBQztNQUNGaEcsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07UUFDbEUsSUFBSSxDQUFDMkYsTUFBTSxHQUFHLFVBQVU7UUFDeEIsSUFBSSxDQUFDQyxjQUFjLEVBQUU7TUFDdkIsQ0FBQyxDQUFDO01BQ0ZoRyxRQUFRLENBQUN1QixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUMvRCxJQUFJLENBQUMyRixNQUFNLEdBQUcsT0FBTztRQUNyQixJQUFJLENBQUNDLGNBQWMsRUFBRTtNQUN2QixDQUFDLENBQUM7TUFDRmhHLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2hFLElBQUksQ0FBQzJGLE1BQU0sR0FBRyxRQUFRO1FBQ3RCLElBQUksQ0FBQ0MsY0FBYyxFQUFFO01BQ3ZCLENBQUMsQ0FBQztNQUNGaEcsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07UUFDcEUsSUFBSSxDQUFDMkYsTUFBTSxHQUFHLFlBQVk7UUFDMUIsSUFBSSxDQUFDQyxjQUFjLEVBQUU7TUFDdkIsQ0FBQyxDQUFDO01BQ0ZoRyxRQUFRLENBQUN1QixjQUFjLENBQUMsY0FBYyxDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUN0RSxJQUFJLENBQUMyRixNQUFNLEdBQUcsY0FBYztRQUM1QixJQUFJLENBQUNDLGNBQWMsRUFBRTtNQUN2QixDQUFDLENBQUM7TUFDRmhHLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ25FLElBQUksQ0FBQzJGLE1BQU0sR0FBRyxXQUFXO1FBQ3pCLElBQUksQ0FBQ0MsY0FBYyxFQUFFO01BQ3ZCLENBQUMsQ0FBQzs7TUFFRjtNQUNBO01BQ0E7TUFDQTs7TUFFQWhHLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3JFLElBQUksQ0FBQzZGLGdCQUFnQixFQUFFO01BQ3pCLENBQUMsQ0FBQztJQUNKLENBQUM7RUFDSDtFQUNBRCxjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLENBQUNFLGlCQUFpQixDQUFDLElBQUksQ0FBQ0gsTUFBTSxDQUFDO0lBQ25DLElBQUksQ0FBQ3BHLHNCQUFzQixDQUFDLElBQUksQ0FBQ29HLE1BQU0sRUFBRSxJQUFJLENBQUN0RSxVQUFVLENBQUM7RUFDM0Q7RUFDQXdFLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ3JHLHdCQUF3QixFQUFFO0VBQ2pDO0VBQ0FzRyxpQkFBaUJBLENBQUNDLElBQUksRUFBRTtJQUN0QixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQnBHLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQzRFLElBQUksQ0FBQyxDQUFDakYsU0FBUyxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ3ZEO0VBQ0ErRSxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFNQyxPQUFPLEdBQUdyRyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNuRG9HLE9BQU8sQ0FBQ25HLE9BQU8sQ0FBQ29HLE1BQU0sSUFBSTtNQUN4QkEsTUFBTSxDQUFDcEYsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUMsQ0FBQztFQUNKO0VBQ0FmLHFCQUFxQkEsQ0FBQSxFQUFHO0lBQ3RCLElBQU1pRyxNQUFNLEdBQUd0RyxRQUFRLENBQUN1QixjQUFjLENBQUMsZUFBZSxDQUFDO0lBQ3ZEK0UsTUFBTSxDQUFDQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xDRCxNQUFNLENBQUN0RixhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNpQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3hEb0QsTUFBTSxDQUFDdEYsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDTSxXQUFXLEdBQUcsTUFBTTtFQUNuRDtBQUNGO0FBQ0EsZUFBZWpDLFdBQVcifQ==
