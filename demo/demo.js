/** 아래 정보는 UseB 도메인에서만 동작하는 정보로 테스트를 위해서는 테스트 라이센스 키를 발급받고, TARGET_ORIGIN 과 URL 은 변경해야합니다. */
// const OCR_TARGET_ORIGIN = "*";     // 보안적으로 취약하니 *을 사용하는것은 권장하지 않습니다. (refer : https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#:~:text=serialize%20them%20yourself.-,targetOrigin,-Specifies%20what%20the)
const OCR_TARGET_ORIGIN = 'https://ocr.useb.co.kr';
const OCR_URL = 'https://ocr.useb.co.kr/ocr.html';
const OCR_LICENSE_KEY = 'FPkTCWqzP92aSVViuJanAxoyTQtMy0ylKAMfPYjo/tQklJu7qypi+cl87Te3MLOJZg2a4qxx2PC+IJmDxfS/EX/UIHnO3V3ytrI87Cubja+tYhhGb0susglgvZ+GP+Z8vp8ED3mVBsbUbVNiFVJWQm2BWknNlK6hnntmzHBC75feBQQ75r95mAfZ8iijXTmSOOPcf31EPMU9G3OJaoo/bGACIGw==';
const OCR_RESOURCE_BASE_URL = 'https://ocr.useb.co.kr/';

/** localhost에서 'npm run start'로 실행 시 사용 참고 */
// const OCR_TARGET_ORIGIN = 'https://127.0.0.1:8090'
// const OCR_URL = 'https://127.0.0.1:8090/sdk/ocr.html'
// const OCR_LICENSE_KEY = 'SHOULD BE ENTER LICENSE KEY';
// const OCR_RESOURCE_BASE_URL = 'https://127.0.0.1:8090/sdk/';

/** webstorm에서 'Javascript Debugger' 사용 시 참고 */
// const OCR_TARGET_ORIGIN = 'https://localhost:63342/useb-ocr-wasm-sdk-sample';
// const OCR_URL = 'https://localhost:63342/useb-ocr-wasm-sdk-sample/build/sdk/ocr.html';
// const OCR_LICENSE_KEY = 'SHOULD BE ENTER LICENSE KEY';
// const OCR_RESOURCE_BASE_URL = 'https://localhost:63342/useb-ocr-wasm-sdk-sample/build/sdk/';

const AUTH_SERVER_INFO = {
  credential: {
    customer_id: parseInt('84'),
    username: 'kcuGDPG37Q',
    password: '3uR7Pc2BwMa5D$u',
  },
  baseUrl: 'https://common-api.useb.co.kr',
};
const OCR_SERVER_BASE_URL = 'https://quram.useb.co.kr';

const ocrIframe = document.getElementById('resolution-simulation-iframe');
const ocrDefaultSettings = {
  licenseKey: OCR_LICENSE_KEY,
  resourceBaseUrl: OCR_RESOURCE_BASE_URL,
  // preloadingUITextMsg: '신분증인증 모듈을 불러오는 중 입니다 ~~<br />잠시만 기다려주세요 ~~',
};

let preloaded = false;

const onClickStartCallback = (type, settings) => {
  const postMessageImpl = function () {
    const params = {
      ocrType: type,
      settings: {
        ...ocrDefaultSettings,
        ...settings,
        authServerInfo: AUTH_SERVER_INFO,
        ocrServerBaseUrl: settings.ocrServerBaseUrl || OCR_SERVER_BASE_URL,
      },
    };

    const encodedParams = btoa(encodeURIComponent(JSON.stringify(params)));
    ocrIframe.contentWindow.postMessage(encodedParams, OCR_TARGET_ORIGIN);
    hideLoadingUI();
    showOCRIframeUI();
    startOCR();
  };

  if (preloaded) {
    postMessageImpl();
  } else {
    ocrIframe.onload = function () {
      postMessageImpl();
      ocrIframe.onload = null;
    };
    ocrIframe.src = OCR_URL;
    showLoadingUI();
  }
};

const onClickRestartCallback = () => {
  document.getElementById('ocr_result').innerHTML = '';
  document.getElementById('ocr_status').innerHTML = '';

  hideOCRIframeUI();
  ui_simulator.resetButton();

  startOCR();
};

// Preloading Start Event Callback
const onPreloadStartCallback = () => {
  ocrIframe.onload = function () {
    const params = {
      ocrType: 'idcard',
      settings: {
        ...ocrDefaultSettings,
        ...ui_simulator.__settings,
      },
      preloading: true,
    };

    const encodedParams = btoa(encodeURIComponent(JSON.stringify(params)));
    ocrIframe.contentWindow.postMessage(encodedParams, OCR_TARGET_ORIGIN);
    ocrIframe.onload = null;
  };

  ocrIframe.src = OCR_URL;
  hideOCRIframeUI();
  setPreloadingStatus('Started');
};

// preLoading Start Button Event Bind
document.getElementById('btnPreloadingStart').addEventListener('click', onPreloadStartCallback);

import UISimulator from './js/ui_simulator.js';

const ui_simulator = new UISimulator(onClickStartCallback, onClickRestartCallback);

const postMessageListener = (event) => {
  console.debug('message response', event.data); // base64 encoded된 JSON 메시지이므로 decoded해야 함
  console.debug('origin :', event.origin);
  try {
    const decodedData = decodeURIComponent(atob(event.data));
    console.debug('decoded', decodedData);
    const json = JSON.parse(decodedData);
    console.debug('json', json);

    console.log(json.result + ' 처리 필요');

    let json2 = _.cloneDeep(json);

    if (json2?.review_result) {
      const review_result = json2.review_result;

      if (review_result.ocr_masking_image) {
        review_result.ocr_masking_image = stringShortener(review_result.ocr_masking_image, 50);
      }
      if (review_result.ocr_origin_image) {
        review_result.ocr_origin_image = stringShortener(review_result.ocr_origin_image, 50);
      }
      if (review_result.ocr_face_image) {
        review_result.ocr_face_image = stringShortener(review_result.ocr_face_image, 50);
      }

      if (review_result.encrypted) {
        if (review_result.encrypted.ocr_masking_image) {
          review_result.encrypted.ocr_masking_image = stringShortener(review_result.encrypted.ocr_masking_image, 50);
        }
        if (review_result.encrypted.ocr_origin_image) {
          review_result.encrypted.ocr_origin_image = stringShortener(review_result.encrypted.ocr_origin_image, 50);
        }
        if (review_result.encrypted.ocr_face_image) {
          review_result.encrypted.ocr_face_image = stringShortener(review_result.encrypted.ocr_face_image, 50);
        }
      }

      if (review_result.encrypted_overall) {
        review_result.encrypted_overall = stringShortener(review_result.encrypted_overall, 50);
      }
    }

    const str = JSON.stringify(json2, undefined, 4);
    const strHighlight = syntaxHighlight(str);

    if (json.result === 'success') {
      updateDebugWin(strHighlight);
      updateOCRResult(strHighlight, json);
      updateOCRStatus('OCR이 완료되었습니다.');
      endOCR();
    } else if (json.result === 'failed') {
      updateDebugWin(strHighlight);
      updateOCRResult(strHighlight, json);
      updateOCRStatus('OCR이 실패되었습니다.');
      endOCR();
    } else if (json.result === 'preloaded') {
      console.debug('wasm preloaded callback ! need remove loading ui');
      preloaded = true;
      setPreloadingStatus('End');
      hideLoadingUI();
    } else if (json.result === 'error') {
      console.debug('wasm preloaded callback ! need remove loading ui');
      updateOCRStatus(`OCR중 에러가 발생되었습니다 (${json.error_message})`);
      setPreloadingStatus('');
      hideLoadingUI();
      endOCR();
    } else {
      // invalid result
      endOCR();
    }
  } catch (error) {
    console.log('wrong data', error);
  } finally {
    // endOCR();
  }
};

window.addEventListener('message', postMessageListener);

function setPreloadingStatus(status) {
  document.getElementById('preloading-status-text').value = status;
}

function showLoadingUI() {
  document.getElementById('loading-ui').style.display = 'flex';
}

function hideLoadingUI() {
  document.getElementById('loading-ui').style.display = 'none';
}

function showOCRIframeUI() {
  ocrIframe.style.display = 'block';
}
function hideOCRIframeUI() {
  ocrIframe.style.display = 'none';
}

function startOCR() {
  document.getElementById('simulator-section').style.display = 'flex';
  document.getElementById('result-section').style.display = 'none';
}

function endOCR() {
  document.getElementById('simulator-section').style.display = 'none';
  document.getElementById('result-section').style.display = 'block';
}

function updateOCRResult(data, json) {
  const OCRResult = document.getElementById('ocr_result');
  OCRResult.innerHTML = '';

  const title1 = document.createElement('h3');
  title1.innerHTML = '<h3 class="custom--headline">최종 결과</h3>';

  const result1 = document.createElement('div');
  result1.className = 'syntaxHighlight bright';
  result1.style.textAlign = 'center';

  const detail = json.review_result;
  let content = '';

  if (detail) {
    let ocr_type_txt = 'N/A';
    if (detail.ocr_type.indexOf('idcard') > -1) {
      ocr_type_txt = '주민등록증/운전면허증';
    } else if (detail.ocr_type.indexOf('passport') > -1) {
      ocr_type_txt = '국내/해외여권';
    } else if (detail.ocr_type.indexOf('alien-back') > -1) {
      ocr_type_txt = '외국인등록증 뒷면';
    } else if (detail.ocr_type.indexOf('alien') > -1) {
      ocr_type_txt = '외국인등록증';
    } else if (detail.ocr_type.indexOf('credit') > -1) {
      ocr_type_txt = '신용카드';
    } else if (detail.ocr_type.indexOf('idcard-ssa') > -1) {
      ocr_type_txt += ' + 사본탐지';
    } else {
      ocr_type_txt = 'INVALID_TYPE(' + detail.ocr_type + ')';
    }
    title1.innerHTML +=
      '- OCR 결과 : ' +
      (json.result === 'success' ? "<span style='color:blue'>성공</span>" : "<span style='color:red'>실패</span>") +
      ' </br>';
    title1.innerHTML += '- OCR 종류 : ' + "<span style='color:blue'>" + ocr_type_txt + '</span></br>';
    if (detail.ocr_type.indexOf('-ssa') > -1 && detail.ocr_data?.truth) {
      title1.innerHTML += '- 사본판별 결과 : ' + "<span style='color:blue'>" + detail.ocr_data.truth + '</span></br>';
    }

    if (detail.ocr_type.indexOf('credit') > -1) {
      if (detail.ocr_origin_image) {
        content +=
          "<br/> - 신용카드 원본 사진<br/>&nbsp;&nbsp;&nbsp;<img style='max-height:200px;' src='" +
          detail.ocr_origin_image +
          "' /><br/>";
      }
    } else {
      const piiEncryptMode = document.querySelector('#encrypt-type').value === 'piiEncrypt';

      if (detail.ocr_masking_image) {
        content += piiEncryptMode
          ? '<br/> - 신분증 마스킹 사진<br/>Encrypted'
          : "<br/> - 신분증 마스킹 사진<br/>&nbsp;&nbsp;&nbsp;<img style='max-height:200px;' src='" +
            detail.ocr_masking_image +
            "' /><br/>";
      }
      if (detail.ocr_origin_image) {
        content += piiEncryptMode
          ? '<br/> - 신분증 원본 사진<br/>Encrypted'
          : "<br/> - 신분증 원본 사진<br/>&nbsp;&nbsp;&nbsp;<img style='max-height:200px;' src='" +
            detail.ocr_origin_image +
            "' /><br/>";
      }
      if (detail.ocr_face_image) {
        content += piiEncryptMode
          ? '<br/> - 신분증 얼굴 사진<br/>Encrypted'
          : "<br/> - 신분증의 얼굴 사진<br/>&nbsp;&nbsp;&nbsp;<img style='max-height:200px;' src='" +
            detail.ocr_face_image +
            "' /><br/>";
      }
    }
  }

  result1.innerHTML = content;
  OCRResult.appendChild(title1);
  OCRResult.appendChild(result1);

  const title2 = document.createElement('h3');
  title2.innerHTML = '<h3 class="custom--headline">PostMessage 상세</h3>';

  const result2 = document.createElement('pre');
  result2.className = 'syntaxHighlight bright';
  result2.innerHTML = data;
  OCRResult.appendChild(title2);
  OCRResult.appendChild(result2);
}

function updateOCRStatus(msg) {
  const div = document.getElementById('ocr_status');
  div.innerHTML = msg;
}
