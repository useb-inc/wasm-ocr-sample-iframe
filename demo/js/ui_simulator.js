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
        target.querySelector('i').style.color = '__5cb85c';
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
        var colorMaskFrame = document.getElementById('color-mask-frame').value;
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
          ocr_success_with_ssa: colorSuccess,
          mask_frame: colorMaskFrame
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJVSVNpbXVsYXRvciIsImNvbnN0cnVjdG9yIiwib25DbGlja1N0YXJ0Q2FsbGJhY2siLCJvbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5IiwiRXJyb3IiLCJfX29uQ2xpY2tTdGFydENhbGxiYWNrIiwiX19vbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX19iaW5kRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3NhdmVTZXR0aW5nc0hhbmRsZXIiLCJjb2xsYXBzZWRUb2dnbGUiLCJldmVudCIsIl9ldmVudCR0YXJnZXQkaWQiLCJ0b2dnbGVFbGVtZW50IiwidGFyZ2V0IiwiaWQiLCJpbmNsdWRlcyIsInBhcmVudEVsZW1lbnQiLCJzZWN0aW9uIiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2hldnJvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidGV4dENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImUiLCJfX3NldHRpbmdzIiwic3NhTWF4UmV0cnlDb3VudCIsImlzTmFOIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInRvZ2dsZUN1c3RvbVVJIiwicG9zaXRpb24iLCJ1c2VUb3BVSSIsImNoZWNrZWQiLCJ1c2VNaWRkbGVVSSIsInVzZUJvdHRvbVVJIiwidXNlUHJldmlld1VJIiwidG9nZ2xlQ3VzdG9tVUlUZXh0TXNnIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUlUZXh0TXNnIiwibWlycm9yTW9kZSIsInJvdGF0aW9uRGVncmVlIiwic2hvd0NsaXBGcmFtZSIsInNob3dDYW52YXNQcmV2aWV3Iiwic3R5bGUiLCJkaXNwbGF5Iiwic291cmNlIiwic3BsaXQiLCJhcnIiLCJzZXRBdHRyaWJ1dGUiLCJjb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvck5vdFJlYWR5IiwiY29sb3JSZWFkeSIsImNvbG9yRGV0ZWN0U3VjY2VzcyIsImNvbG9yRGV0ZWN0RmFpbGVkIiwiY29sb3JPQ1JSZWNvZ25pemVkIiwiY29sb3JTdWNjZXNzIiwiY29sb3JGYWlsZWQiLCJjb2xvck1hc2tGcmFtZSIsImZyYW1lQm9yZGVyU3R5bGUiLCJfb2JqZWN0U3ByZWFkIiwid2lkdGgiLCJyYWRpdXMiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9mYWlsZWQiLCJkZXRlY3Rfc3VjY2VzcyIsInJlY29nbml6ZWQiLCJyZWNvZ25pemVkX3dpdGhfc3NhIiwib2NyX2ZhaWxlZCIsIm9jcl9zdWNjZXNzIiwib2NyX3N1Y2Nlc3Nfd2l0aF9zc2EiLCJtYXNrX2ZyYW1lIiwiaGVpZ2h0IiwicmVzb2x1dGlvbldpZHRoIiwicmVzb2x1dGlvbkhlaWdodCIsInJlc29sdXRpb25FeHBlbmRSYXRpbyIsIl9fdHlwZSIsIl9fb25DbGlja1N0YXJ0IiwiX19vbkNsaWNrUmVzdGFydCIsIl9fc2V0QWN0aXZlQnV0dG9uIiwidHlwZSIsInJlc2V0QnV0dG9uIiwiYnV0dG9ucyIsImJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSJdLCJzb3VyY2VzIjpbImpzL3VpX3NpbXVsYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW5zdGFuY2U7XG5jbGFzcyBVSVNpbXVsYXRvciB7XG4gIC8qKiBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgX19vbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgX19vbkNsaWNrUmVzdGFydENhbGxiYWNrO1xuICBfX3R5cGU7XG4gIF9fc2V0dGluZ3MgPSB7fTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3Iob25DbGlja1N0YXJ0Q2FsbGJhY2ssIG9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2spIHtcbiAgICBpZiAoISEhb25DbGlja1N0YXJ0Q2FsbGJhY2sgfHwgISEhb25DbGlja1Jlc3RhcnRDYWxsYmFjaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwib25DbGljayBjYWxsYmFjayBmdW5jdGlvbiBwYXJhbWV0ZXIgaXMgbm90IGV4aXN0XCIpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5fX29uQ2xpY2tTdGFydENhbGxiYWNrID0gb25DbGlja1N0YXJ0Q2FsbGJhY2s7XG4gICAgdGhpcy5fX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2sgPSBvbkNsaWNrUmVzdGFydENhbGxiYWNrO1xuICAgIHRoaXMuX19iaW5kRXZlbnRMaXN0ZW5lcigpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuICBfX2JpbmRFdmVudExpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2V0dGluZ3Mtc2VjdGlvbiBpbnB1dCcpLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjb2xsYXBzZWRUb2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlRWxlbWVudCA9IGV2ZW50LnRhcmdldC5pZD8uaW5jbHVkZXMoXCJ0b2dnbGVcIikgPyBldmVudC50YXJnZXQgOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRvZ2dsZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0b2dnbGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgY2hldnJvbiA9IHRvZ2dsZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZXZyb24nKTtcbiAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3NTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgLy8gY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJyBzcGFuJylcbiAgICAgICAgLy8gY29uc3QgY2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnIC5jaGV2cm9uJylcbiAgICAgICAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzZWQnKSkge1xuICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLXVwJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLWRvd24nKTtcbiAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdb7KCR6riwXSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tZG93bicpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi11cCcpO1xuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1vtjrzsuZjquLBdJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlLXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sbGFwc2VkVG9nZ2xlKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxhcHNlZFRvZ2dsZSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3NhLW1heC1yZXRyeS1jb3VudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Muc3NhTWF4UmV0cnlDb3VudCA9IGlzTmFOKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSkgPyAwIDogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB0b2dnbGVDdXN0b21VSSA9IChwb3NpdGlvbiwgZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlVG9wVUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTWlkZGxlVUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlQm90dG9tVUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3ByZXZpZXcnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZVByZXZpZXdVSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH07XG4gICAgICBjb25zdCB0b2dnbGVDdXN0b21VSVRleHRNc2cgPSAocG9zaXRpb24sIGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZVRvcFVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VNaWRkbGVVSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlQm90dG9tVUlUZXh0TXNnID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLXRvcC11aVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgndG9wJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLXRvcC11aS10ZXh0LW1zZ1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSVRleHRNc2coJ3RvcCcsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS1taWRkbGUtdWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ21pZGRsZScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS1taWRkbGUtdWktdGV4dC1tc2dcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnKCdtaWRkbGUnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtYm90dG9tLXVpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdib3R0b20nLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtYm90dG9tLXVpLXRleHQtbXNnXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJVGV4dE1zZygnYm90dG9tJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLXByZXZpZXctdWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ3ByZXZpZXcnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXJyb3ItbW9kZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MubWlycm9yTW9kZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi1kZWdyZWUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnJvdGF0aW9uRGVncmVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1jbGlwYm9hcmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnNob3dDbGlwRnJhbWUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctY2FudmFzLXByZXZpZXdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnNob3dDYW52YXNQcmV2aWV3ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSBcImN1c3RvbVwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gXCJyZXNwb25zaXZlXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZS5zcGxpdCgneCcpO1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKV07XG4gICAgICAgICAgW3RhcmdldFswXS52YWx1ZSwgdGFyZ2V0WzFdLnZhbHVlXSA9IFtzb3VyY2VbMF0sIHNvdXJjZVsxXV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tcmV2ZXJzZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpXTtcbiAgICAgICAgW2FyclswXS52YWx1ZSwgYXJyWzFdLnZhbHVlXSA9IFthcnJbMV0udmFsdWUsIGFyclswXS52YWx1ZV07IC8vIHN3YXBcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9ICfshKTsoJUg7KCB7Jqp65CoJztcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuc3R5bGUuY29sb3IgPSAnX181Y2I4NWMnO1xuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItd2lkdGgnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYm9yZGVyU3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXN0eWxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItcmFkaXVzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yTm90UmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itbm90LXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yUmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JEZXRlY3RTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRGV0ZWN0RmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JPQ1JSZWNvZ25pemVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW9jci1yZWNvZ25pemVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yU3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvck1hc2tGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1tYXNrLWZyYW1lJykudmFsdWU7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5mcmFtZUJvcmRlclN0eWxlID0ge1xuICAgICAgICAgIC4uLnRoaXMuX19zZXR0aW5ncy5mcmFtZUJvcmRlclN0eWxlLFxuICAgICAgICAgIHdpZHRoOiBib3JkZXJXaWR0aCxcbiAgICAgICAgICBzdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgbm90X3JlYWR5OiBjb2xvck5vdFJlYWR5LFxuICAgICAgICAgIHJlYWR5OiBjb2xvclJlYWR5LFxuICAgICAgICAgIGRldGVjdF9mYWlsZWQ6IGNvbG9yRGV0ZWN0RmFpbGVkLFxuICAgICAgICAgIGRldGVjdF9zdWNjZXNzOiBjb2xvckRldGVjdFN1Y2Nlc3MsXG4gICAgICAgICAgcmVjb2duaXplZDogY29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6IGNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICBvY3JfZmFpbGVkOiBjb2xvckZhaWxlZCxcbiAgICAgICAgICBvY3Jfc3VjY2VzczogY29sb3JTdWNjZXNzLFxuICAgICAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiBjb2xvclN1Y2Nlc3MsXG4gICAgICAgICAgbWFza19mcmFtZTogY29sb3JNYXNrRnJhbWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwicmVzcG9uc2l2ZVwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JykudmFsdWU7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkV4cGVuZFJhdGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tZXhwZW5kLXJhdGlvJykudmFsdWU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS53aWR0aCA9IHJlc29sdXRpb25XaWR0aCAqIHJlc29sdXRpb25FeHBlbmRSYXRpbyArICdweCc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS5oZWlnaHQgPSByZXNvbHV0aW9uSGVpZ2h0ICogcmVzb2x1dGlvbkV4cGVuZFJhdGlvICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fX3R5cGUpIHtcbiAgICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZGNhcmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSBcImlkY2FyZFwiO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3BvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSBcInBhc3Nwb3J0XCI7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGllblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9IFwiYWxpZW5cIjtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWRpdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9IFwiY3JlZGl0XCI7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZGNhcmQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gXCJpZGNhcmQtc3NhXCI7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzcG9ydC1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSBcInBhc3Nwb3J0LXNzYVwiO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxpZW4tc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gXCJhbGllbi1zc2FcIjtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlZGl0LXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gICB0aGlzLl9fdHlwZSA9IFwiY3JlZGl0LXNzYVwiO1xuICAgICAgLy8gICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICAvLyB9KTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnRfYnRuJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tSZXN0YXJ0KCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIF9fb25DbGlja1N0YXJ0KCkge1xuICAgIHRoaXMuX19zZXRBY3RpdmVCdXR0b24odGhpcy5fX3R5cGUpO1xuICAgIHRoaXMuX19vbkNsaWNrU3RhcnRDYWxsYmFjayh0aGlzLl9fdHlwZSwgdGhpcy5fX3NldHRpbmdzKTtcbiAgfVxuICBfX29uQ2xpY2tSZXN0YXJ0KCkge1xuICAgIHRoaXMuX19vbkNsaWNrUmVzdGFydENhbGxiYWNrKCk7XG4gIH1cbiAgX19zZXRBY3RpdmVCdXR0b24odHlwZSkge1xuICAgIHRoaXMucmVzZXRCdXR0b24oKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG4gIHJlc2V0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cbiAgX19zYXZlU2V0dGluZ3NIYW5kbGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJyk7XG4gICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBidXR0b24ucXVlcnlTZWxlY3RvcignLmZhLWNoZWNrJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gJ+yEpOygleyggeyaqSc7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVJU2ltdWxhdG9yOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJQSxRQUFRO0FBQ1osTUFBTUMsV0FBVyxDQUFDO0VBQ2hCOztFQU1BO0VBQ0FDLFdBQVdBLENBQUNDLG9CQUFvQixFQUFFQyxzQkFBc0IsRUFBRTtJQUFBQyxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBLHFCQUg3QyxDQUFDLENBQUM7SUFJYixJQUFJLENBQUMsQ0FBQyxDQUFDRixvQkFBb0IsSUFBSSxDQUFDLENBQUMsQ0FBQ0Msc0JBQXNCLEVBQUU7TUFDeEQsTUFBTSxJQUFJRSxLQUFLLENBQUMsa0RBQWtELENBQUM7SUFDckU7SUFDQSxJQUFJTixRQUFRLEVBQUUsT0FBT0EsUUFBUTtJQUM3QkEsUUFBUSxHQUFHLElBQUk7SUFDZixJQUFJLENBQUNPLHNCQUFzQixHQUFHSixvQkFBb0I7SUFDbEQsSUFBSSxDQUFDSyx3QkFBd0IsR0FBR0osc0JBQXNCO0lBQ3RELElBQUksQ0FBQ0ssbUJBQW1CLEVBQUU7SUFDMUIs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
