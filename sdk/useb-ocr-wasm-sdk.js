import UseBOCR from './ocr.js';
const ocr = new UseBOCR();
let targetOrigin = null;

const messageHandler = async (e) => {
  try {
    const response = e.data ? e.data : e;

    if (targetOrigin !== e.origin) {
      console.info(
        "[WARNING] origin is replaced : '" +
        targetOrigin +
        "' -> '" +
        e.origin +
        "'"
      );
      targetOrigin = e.origin;
    }
    console.debug('targetOrigin', targetOrigin);

    if (!response) {
      console.info(
        '[INFO] messageHandler() is skipped, cause : response is undefined'
      );
      return;
    }

    if (response.type === 'webpackOk') {
      console.info(
        '[INFO] messageHandler() is skipped, cause : webpackOk type'
      );
      return;
    }

    console.debug('messageHandler()', response);

    let data;

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
        // OCR
        case 'idcard':
        case 'passport':
        case 'alien':
        case 'credit':
        // SSA
        case 'idcard-ssa':
        case 'passport-ssa':
        case 'alien-ssa':
        case 'credit-ssa':
          ocr.init(data.settings)

          const sendResult = (result) => {
            console.debug('sendResult', result);
            const returnMessage = btoa(encodeURIComponent(JSON.stringify(result)));
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
              window.webkit.messageHandlers.usebwasmocr &&
              window.webkit.messageHandlers.usebwasmocr.postMessage(returnMessage);
            } else if (window['usebwasmocr']) {
              // Android: WebView JavascriptInterface name(usebwasmocr) and JS function(result)
              window['usebwasmocr'] &&
              window['usebwasmocr']['receive'] &&
              window['usebwasmocr']['receive'](returnMessage);
            }
          }

          const onInProgressChanged = (inProgress, bottomUI) => {
            const isCreditCard = data.ocrType.indexOf('credit') > -1;
            const cardTypeString = isCreditCard ? '신용카드' : '신분증';
            if (bottomUI) {
              let textMsg = '';
              switch (inProgress) {
                case ocr.IN_PROGRESS.NOT_READY:
                  textMsg = (`${cardTypeString} 촬영을 위해 카메라를 불러오는 중 입니다.`);
                  break;
                case ocr.IN_PROGRESS.READY:
                  textMsg = (`영역 안에 ${cardTypeString}이 꽉 차도록 위치시키면 자동 촬영됩니다.`);
                  break;
                case ocr.IN_PROGRESS.CARD_DETECT_SUCCESS:
                  textMsg = (`${cardTypeString}이(가) 감지되었습니다. ${cardTypeString} 정보를 확인 중 입니다.`);
                  break;
                case ocr.IN_PROGRESS.CARD_DETECT_FAILED:
                  textMsg = (`${cardTypeString}이(가) 감지되지 않습니다. ${cardTypeString} 영역 안에 ${cardTypeString}을 위치시켜 주세요.`);
                  break;
                case ocr.IN_PROGRESS.OCR_RECOGNIZED:
                  textMsg = (`${cardTypeString}이(가) 감지되어, ${cardTypeString} 정보를 인식 중입니다.`);
                  break;
                case ocr.IN_PROGRESS.OCR_SUCCESS:
                  textMsg = (`${cardTypeString} 인식에 성공하였습니다.`);
                  break;
                case ocr.IN_PROGRESS.OCR_FAILED:
                  textMsg = (`${cardTypeString} 인식에 실패하였습니다. 다시 시도해주세요.`);
                  break;
              }
              bottomUI.innerHTML = textMsg;
            }
          }

          await ocr.startOCR(data.ocrType, sendResult, sendResult, onInProgressChanged);

          break;
        default:
          new Error("Invalid ocrType");
          break;
      }
    }
  } catch (e) {
    console.error('[usebwasmocr] error', e);
    if (
      !(e instanceof SyntaxError && e.message.includes('JSON'))
    ) {
      console.error('[usebwasmocr] error code', e.errorCode);
      console.error('[usebwasmocr] error message', e.message);
    }
  }
};

//ios
window.addEventListener('message', messageHandler);
//android
document.addEventListener('message', messageHandler);
window.usebwasmocrreceive = messageHandler;

function sendResult(result) {
  console.debug('sendResult', result);
  const returnMessage = btoa(encodeURIComponent(result));
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
    window.webkit.messageHandlers.usebwasmocr &&
    window.webkit.messageHandlers.usebwasmocr.postMessage(returnMessage);
  } else if (window['usebwasmocr']) {
    // Android: WebView JavascriptInterface name(usebwasmocr) and JS function(result)
    window['usebwasmocr'] &&
    window['usebwasmocr']['receive'] &&
    window['usebwasmocr']['receive'](returnMessage);
  }
}
