function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import UseBOCR from './ocr.js';
var ocr = new UseBOCR();
var targetOrigin = null;
var messageHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e) {
    try {
      var response = e.data ? e.data : e;
      if (targetOrigin !== e.origin) {
        console.info("[WARNING] origin is replaced : '" + targetOrigin + "' -> '" + e.origin + "'");
        targetOrigin = e.origin;
      }
      console.debug('targetOrigin', targetOrigin);
      if (!response) {
        console.info('[INFO] messageHandler() is skipped, cause : response is undefined');
        return;
      }
      if (response.type === 'webpackOk') {
        console.info('[INFO] messageHandler() is skipped, cause : webpackOk type');
        return;
      }
      console.debug('messageHandler()', response);
      var data;
      if (typeof response === 'string' && response !== 'undefined') {
        try {
          data = JSON.parse(decodeURIComponent(atob(response)));
        } catch (err) {
          console.debug('[WARNING] parameter parsing error');
          throw new Error('parameter format is invalid');
        }
        if (!!!data.settings) {
          throw new Error('settings info is empty');
        }
        switch (data.ocrType) {
          case 'idcard':
          case 'passport':
          case 'alien':
          case 'credit':
            ocr.init(data.settings);
            var _sendResult = result => {
              console.debug('sendResult', result);
              var returnMessage = btoa(encodeURIComponent(JSON.stringify(result)));
              if (window.parent) {
                // Browser iframe
                window.parent.postMessage(returnMessage, targetOrigin);
              }
              if (window.ReactNativeWebView) {
                // react-native webview
                window.ReactNativeWebView.postMessage(returnMessage);
              }
              if (window.webkit && window.webkit.messageHandlers) {
                // iOS: WKScriptMessageHandler WKScriptMessage name(usebwasmocr)
                window.webkit.messageHandlers.usebwasmocr && window.webkit.messageHandlers.usebwasmocr.postMessage(returnMessage);
              } else if (window['usebwasmocr']) {
                // Android: WebView JavascriptInterface name(usebwasmocr) and JS function(result)
                window['usebwasmocr'] && window['usebwasmocr']['receive'] && window['usebwasmocr']['receive'](returnMessage);
              }
            };
            yield ocr.startOCR(data.ocrType, _sendResult, _sendResult);
            break;
          default:
            new Error("Invalid ocrType");
            break;
        }
      }
    } catch (e) {
      console.error('[usebwasmocr] error', e);
      if (!(e instanceof SyntaxError && e.message.includes('JSON'))) {
        console.error('[usebwasmocr] error code', e.errorCode);
        console.error('[usebwasmocr] error message', e.message);
      }
    }
  });
  return function messageHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

//ios
window.addEventListener('message', messageHandler);
//android
document.addEventListener('message', messageHandler);
window.usebwasmocrreceive = messageHandler;
function sendResult(result) {
  console.debug('sendResult', result);
  var returnMessage = btoa(encodeURIComponent(result));
  if (window.parent) {
    // Browser iframe
    window.parent.postMessage(returnMessage, targetOrigin);
  }
  if (window.ReactNativeWebView) {
    // react-native webview
    window.ReactNativeWebView.postMessage(returnMessage);
  }
  if (window.webkit && window.webkit.messageHandlers) {
    // iOS: WKScriptMessageHandler WKScriptMessage name(usebwasmocr)
    window.webkit.messageHandlers.usebwasmocr && window.webkit.messageHandlers.usebwasmocr.postMessage(returnMessage);
  } else if (window['usebwasmocr']) {
    // Android: WebView JavascriptInterface name(usebwasmocr) and JS function(result)
    window['usebwasmocr'] && window['usebwasmocr']['receive'] && window['usebwasmocr']['receive'](returnMessage);
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlYi1vY3Itd2FzbS1zZGsuanMiLCJuYW1lcyI6WyJVc2VCT0NSIiwib2NyIiwidGFyZ2V0T3JpZ2luIiwibWVzc2FnZUhhbmRsZXIiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJlIiwicmVzcG9uc2UiLCJkYXRhIiwib3JpZ2luIiwiY29uc29sZSIsImluZm8iLCJkZWJ1ZyIsInR5cGUiLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwiZXJyIiwiRXJyb3IiLCJzZXR0aW5ncyIsIm9jclR5cGUiLCJpbml0Iiwic2VuZFJlc3VsdCIsInJlc3VsdCIsInJldHVybk1lc3NhZ2UiLCJidG9hIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3RyaW5naWZ5Iiwid2luZG93IiwicGFyZW50IiwicG9zdE1lc3NhZ2UiLCJSZWFjdE5hdGl2ZVdlYlZpZXciLCJ3ZWJraXQiLCJtZXNzYWdlSGFuZGxlcnMiLCJ1c2Vid2FzbW9jciIsInN0YXJ0T0NSIiwiZXJyb3IiLCJTeW50YXhFcnJvciIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsImVycm9yQ29kZSIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJ1c2Vid2FzbW9jcnJlY2VpdmUiXSwic291cmNlcyI6WyJ1c2ViLW9jci13YXNtLXNkay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlQk9DUiBmcm9tICcuL29jci5qcyc7XG5jb25zdCBvY3IgPSBuZXcgVXNlQk9DUigpO1xubGV0IHRhcmdldE9yaWdpbiA9IG51bGw7XG5cbmNvbnN0IG1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGUuZGF0YSA/IGUuZGF0YSA6IGU7XG5cbiAgICBpZiAodGFyZ2V0T3JpZ2luICE9PSBlLm9yaWdpbikge1xuICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICBcIltXQVJOSU5HXSBvcmlnaW4gaXMgcmVwbGFjZWQgOiAnXCIgK1xuICAgICAgICB0YXJnZXRPcmlnaW4gK1xuICAgICAgICBcIicgLT4gJ1wiICtcbiAgICAgICAgZS5vcmlnaW4gK1xuICAgICAgICBcIidcIlxuICAgICAgKTtcbiAgICAgIHRhcmdldE9yaWdpbiA9IGUub3JpZ2luO1xuICAgIH1cbiAgICBjb25zb2xlLmRlYnVnKCd0YXJnZXRPcmlnaW4nLCB0YXJnZXRPcmlnaW4pO1xuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAnW0lORk9dIG1lc3NhZ2VIYW5kbGVyKCkgaXMgc2tpcHBlZCwgY2F1c2UgOiByZXNwb25zZSBpcyB1bmRlZmluZWQnXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnd2VicGFja09rJykge1xuICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAnW0lORk9dIG1lc3NhZ2VIYW5kbGVyKCkgaXMgc2tpcHBlZCwgY2F1c2UgOiB3ZWJwYWNrT2sgdHlwZSdcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5kZWJ1ZygnbWVzc2FnZUhhbmRsZXIoKScsIHJlc3BvbnNlKTtcblxuICAgIGxldCBkYXRhO1xuXG4gICAgaWYgKHR5cGVvZiByZXNwb25zZSA9PT0gJ3N0cmluZycgJiYgcmVzcG9uc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoYXRvYihyZXNwb25zZSkpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdbV0FSTklOR10gcGFyYW1ldGVyIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJhbWV0ZXIgZm9ybWF0IGlzIGludmFsaWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEhIWRhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXR0aW5ncyBpbmZvIGlzIGVtcHR5Jyk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZGF0YS5vY3JUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgICAgY2FzZSAnYWxpZW4nOlxuICAgICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgICAgIG9jci5pbml0KGRhdGEuc2V0dGluZ3MpXG5cbiAgICAgICAgICBjb25zdCBzZW5kUmVzdWx0ID0gKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zygnc2VuZFJlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICBjb25zdCByZXR1cm5NZXNzYWdlID0gYnRvYShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgLy8gQnJvd3NlciBpZnJhbWVcbiAgICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlLCB0YXJnZXRPcmlnaW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LlJlYWN0TmF0aXZlV2ViVmlldykge1xuICAgICAgICAgICAgICAvLyByZWFjdC1uYXRpdmUgd2Vidmlld1xuICAgICAgICAgICAgICB3aW5kb3cuUmVhY3ROYXRpdmVXZWJWaWV3LnBvc3RNZXNzYWdlKHJldHVybk1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LndlYmtpdCAmJiB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycykge1xuICAgICAgICAgICAgICAvLyBpT1M6IFdLU2NyaXB0TWVzc2FnZUhhbmRsZXIgV0tTY3JpcHRNZXNzYWdlIG5hbWUodXNlYndhc21vY3IpXG4gICAgICAgICAgICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLnVzZWJ3YXNtb2NyICYmXG4gICAgICAgICAgICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLnVzZWJ3YXNtb2NyLnBvc3RNZXNzYWdlKHJldHVybk1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dbJ3VzZWJ3YXNtb2NyJ10pIHtcbiAgICAgICAgICAgICAgLy8gQW5kcm9pZDogV2ViVmlldyBKYXZhc2NyaXB0SW50ZXJmYWNlIG5hbWUodXNlYndhc21vY3IpIGFuZCBKUyBmdW5jdGlvbihyZXN1bHQpXG4gICAgICAgICAgICAgIHdpbmRvd1sndXNlYndhc21vY3InXSAmJlxuICAgICAgICAgICAgICB3aW5kb3dbJ3VzZWJ3YXNtb2NyJ11bJ3JlY2VpdmUnXSAmJlxuICAgICAgICAgICAgICB3aW5kb3dbJ3VzZWJ3YXNtb2NyJ11bJ3JlY2VpdmUnXShyZXR1cm5NZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYXdhaXQgb2NyLnN0YXJ0T0NSKGRhdGEub2NyVHlwZSwgc2VuZFJlc3VsdCwgc2VuZFJlc3VsdCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBuZXcgRXJyb3IoXCJJbnZhbGlkIG9jclR5cGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignW3VzZWJ3YXNtb2NyXSBlcnJvcicsIGUpO1xuICAgIGlmIChcbiAgICAgICEoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yICYmIGUubWVzc2FnZS5pbmNsdWRlcygnSlNPTicpKVxuICAgICkge1xuICAgICAgY29uc29sZS5lcnJvcignW3VzZWJ3YXNtb2NyXSBlcnJvciBjb2RlJywgZS5lcnJvckNvZGUpO1xuICAgICAgY29uc29sZS5lcnJvcignW3VzZWJ3YXNtb2NyXSBlcnJvciBtZXNzYWdlJywgZS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vaW9zXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lc3NhZ2VIYW5kbGVyKTtcbi8vYW5kcm9pZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lc3NhZ2VIYW5kbGVyKTtcbndpbmRvdy51c2Vid2FzbW9jcnJlY2VpdmUgPSBtZXNzYWdlSGFuZGxlcjtcblxuZnVuY3Rpb24gc2VuZFJlc3VsdChyZXN1bHQpIHtcbiAgY29uc29sZS5kZWJ1Zygnc2VuZFJlc3VsdCcsIHJlc3VsdCk7XG4gIGNvbnN0IHJldHVybk1lc3NhZ2UgPSBidG9hKGVuY29kZVVSSUNvbXBvbmVudChyZXN1bHQpKTtcbiAgaWYgKHdpbmRvdy5wYXJlbnQpIHtcbiAgICAvLyBCcm93c2VyIGlmcmFtZVxuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UocmV0dXJuTWVzc2FnZSwgdGFyZ2V0T3JpZ2luKTtcbiAgfVxuXG4gIGlmICh3aW5kb3cuUmVhY3ROYXRpdmVXZWJWaWV3KSB7XG4gICAgLy8gcmVhY3QtbmF0aXZlIHdlYnZpZXdcbiAgICB3aW5kb3cuUmVhY3ROYXRpdmVXZWJWaWV3LnBvc3RNZXNzYWdlKHJldHVybk1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKHdpbmRvdy53ZWJraXQgJiYgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMpIHtcbiAgICAvLyBpT1M6IFdLU2NyaXB0TWVzc2FnZUhhbmRsZXIgV0tTY3JpcHRNZXNzYWdlIG5hbWUodXNlYndhc21vY3IpXG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMudXNlYndhc21vY3IgJiZcbiAgICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy51c2Vid2FzbW9jci5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlKTtcbiAgfSBlbHNlIGlmICh3aW5kb3dbJ3VzZWJ3YXNtb2NyJ10pIHtcbiAgICAvLyBBbmRyb2lkOiBXZWJWaWV3IEphdmFzY3JpcHRJbnRlcmZhY2UgbmFtZSh1c2Vid2FzbW9jcikgYW5kIEpTIGZ1bmN0aW9uKHJlc3VsdClcbiAgICB3aW5kb3dbJ3VzZWJ3YXNtb2NyJ10gJiZcbiAgICB3aW5kb3dbJ3VzZWJ3YXNtb2NyJ11bJ3JlY2VpdmUnXSAmJlxuICAgIHdpbmRvd1sndXNlYndhc21vY3InXVsncmVjZWl2ZSddKHJldHVybk1lc3NhZ2UpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsT0FBTyxNQUFNLFVBQVU7QUFDOUIsSUFBTUMsR0FBRyxHQUFHLElBQUlELE9BQU8sRUFBRTtBQUN6QixJQUFJRSxZQUFZLEdBQUcsSUFBSTtBQUV2QixJQUFNQyxjQUFjO0VBQUEsSUFBQUMsSUFBQSxHQUFBQyxpQkFBQSxDQUFHLFdBQU9DLENBQUMsRUFBSztJQUNsQyxJQUFJO01BQ0YsSUFBTUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLElBQUksR0FBR0YsQ0FBQyxDQUFDRSxJQUFJLEdBQUdGLENBQUM7TUFFcEMsSUFBSUosWUFBWSxLQUFLSSxDQUFDLENBQUNHLE1BQU0sRUFBRTtRQUM3QkMsT0FBTyxDQUFDQyxJQUFJLENBQ1Ysa0NBQWtDLEdBQ2xDVCxZQUFZLEdBQ1osUUFBUSxHQUNSSSxDQUFDLENBQUNHLE1BQU0sR0FDUixHQUFHLENBQ0o7UUFDRFAsWUFBWSxHQUFHSSxDQUFDLENBQUNHLE1BQU07TUFDekI7TUFDQUMsT0FBTyxDQUFDRSxLQUFLLENBQUMsY0FBYyxFQUFFVixZQUFZLENBQUM7TUFFM0MsSUFBSSxDQUFDSyxRQUFRLEVBQUU7UUFDYkcsT0FBTyxDQUFDQyxJQUFJLENBQ1YsbUVBQW1FLENBQ3BFO1FBQ0Q7TUFDRjtNQUVBLElBQUlKLFFBQVEsQ0FBQ00sSUFBSSxLQUFLLFdBQVcsRUFBRTtRQUNqQ0gsT0FBTyxDQUFDQyxJQUFJLENBQ1YsNERBQTRELENBQzdEO1FBQ0Q7TUFDRjtNQUVBRCxPQUFPLENBQUNFLEtBQUssQ0FBQyxrQkFBa0IsRUFBRUwsUUFBUSxDQUFDO01BRTNDLElBQUlDLElBQUk7TUFFUixJQUFJLE9BQU9ELFFBQVEsS0FBSyxRQUFRLElBQUlBLFFBQVEsS0FBSyxXQUFXLEVBQUU7UUFDNUQsSUFBSTtVQUNGQyxJQUFJLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDVixRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxPQUFPVyxHQUFHLEVBQUU7VUFDWlIsT0FBTyxDQUFDRSxLQUFLLENBQUMsbUNBQW1DLENBQUM7VUFDbEQsTUFBTSxJQUFJTyxLQUFLLENBQUMsNkJBQTZCLENBQUM7UUFDaEQ7UUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDWCxJQUFJLENBQUNZLFFBQVEsRUFBRTtVQUNwQixNQUFNLElBQUlELEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztRQUMzQztRQUVBLFFBQVFYLElBQUksQ0FBQ2EsT0FBTztVQUNsQixLQUFLLFFBQVE7VUFDYixLQUFLLFVBQVU7VUFDZixLQUFLLE9BQU87VUFDWixLQUFLLFFBQVE7WUFDWHBCLEdBQUcsQ0FBQ3FCLElBQUksQ0FBQ2QsSUFBSSxDQUFDWSxRQUFRLENBQUM7WUFFdkIsSUFBTUcsV0FBVSxHQUFJQyxNQUFNLElBQUs7Y0FDN0JkLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLFlBQVksRUFBRVksTUFBTSxDQUFDO2NBQ25DLElBQU1DLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2IsSUFBSSxDQUFDYyxTQUFTLENBQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUM7Y0FDdEUsSUFBSUssTUFBTSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ2pCO2dCQUNBRCxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDTixhQUFhLEVBQUV2QixZQUFZLENBQUM7Y0FDeEQ7Y0FFQSxJQUFJMkIsTUFBTSxDQUFDRyxrQkFBa0IsRUFBRTtnQkFDN0I7Z0JBQ0FILE1BQU0sQ0FBQ0csa0JBQWtCLENBQUNELFdBQVcsQ0FBQ04sYUFBYSxDQUFDO2NBQ3REO2NBRUEsSUFBSUksTUFBTSxDQUFDSSxNQUFNLElBQUlKLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDQyxlQUFlLEVBQUU7Z0JBQ2xEO2dCQUNBTCxNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDQyxXQUFXLElBQ3pDTixNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDQyxXQUFXLENBQUNKLFdBQVcsQ0FBQ04sYUFBYSxDQUFDO2NBQ3RFLENBQUMsTUFBTSxJQUFJSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ2hDO2dCQUNBQSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQ3JCQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQ2hDQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNKLGFBQWEsQ0FBQztjQUNqRDtZQUNGLENBQUM7WUFDRCxNQUFNeEIsR0FBRyxDQUFDbUMsUUFBUSxDQUFDNUIsSUFBSSxDQUFDYSxPQUFPLEVBQUVFLFdBQVUsRUFBRUEsV0FBVSxDQUFDO1lBRXhEO1VBQ0Y7WUFDRSxJQUFJSixLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDNUI7UUFBTTtNQUVaO0lBQ0YsQ0FBQyxDQUFDLE9BQU9iLENBQUMsRUFBRTtNQUNWSSxPQUFPLENBQUMyQixLQUFLLENBQUMscUJBQXFCLEVBQUUvQixDQUFDLENBQUM7TUFDdkMsSUFDRSxFQUFFQSxDQUFDLFlBQVlnQyxXQUFXLElBQUloQyxDQUFDLENBQUNpQyxPQUFPLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUN6RDtRQUNBOUIsT0FBTyxDQUFDMkIsS0FBSyxDQUFDLDBCQUEwQixFQUFFL0IsQ0FBQyxDQUFDbUMsU0FBUyxDQUFDO1FBQ3REL0IsT0FBTyxDQUFDMkIsS0FBSyxDQUFDLDZCQUE2QixFQUFFL0IsQ0FBQyxDQUFDaUMsT0FBTyxDQUFDO01BQ3pEO0lBQ0Y7RUFDRixDQUFDO0VBQUEsZ0JBOUZLcEMsY0FBY0EsQ0FBQXVDLEVBQUE7SUFBQSxPQUFBdEMsSUFBQSxDQUFBdUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQThGbkI7O0FBRUQ7QUFDQWYsTUFBTSxDQUFDZ0IsZ0JBQWdCLENBQUMsU0FBUyxFQUFFMUMsY0FBYyxDQUFDO0FBQ2xEO0FBQ0EyQyxRQUFRLENBQUNELGdCQUFnQixDQUFDLFNBQVMsRUFBRTFDLGNBQWMsQ0FBQztBQUNwRDBCLE1BQU0sQ0FBQ2tCLGtCQUFrQixHQUFHNUMsY0FBYztBQUUxQyxTQUFTb0IsVUFBVUEsQ0FBQ0MsTUFBTSxFQUFFO0VBQzFCZCxPQUFPLENBQUNFLEtBQUssQ0FBQyxZQUFZLEVBQUVZLE1BQU0sQ0FBQztFQUNuQyxJQUFNQyxhQUFhLEdBQUdDLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNILE1BQU0sQ0FBQyxDQUFDO0VBQ3RELElBQUlLLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO0lBQ2pCO0lBQ0FELE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxXQUFXLENBQUNOLGFBQWEsRUFBRXZCLFlBQVksQ0FBQztFQUN4RDtFQUVBLElBQUkyQixNQUFNLENBQUNHLGtCQUFrQixFQUFFO0lBQzdCO0lBQ0FILE1BQU0sQ0FBQ0csa0JBQWtCLENBQUNELFdBQVcsQ0FBQ04sYUFBYSxDQUFDO0VBQ3REO0VBRUEsSUFBSUksTUFBTSxDQUFDSSxNQUFNLElBQUlKLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDQyxlQUFlLEVBQUU7SUFDbEQ7SUFDQUwsTUFBTSxDQUFDSSxNQUFNLENBQUNDLGVBQWUsQ0FBQ0MsV0FBVyxJQUN6Q04sTUFBTSxDQUFDSSxNQUFNLENBQUNDLGVBQWUsQ0FBQ0MsV0FBVyxDQUFDSixXQUFXLENBQUNOLGFBQWEsQ0FBQztFQUN0RSxDQUFDLE1BQU0sSUFBSUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0lBQ2hDO0lBQ0FBLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFDckJBLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFDaENBLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0osYUFBYSxDQUFDO0VBQ2pEO0FBQ0YifQ==
