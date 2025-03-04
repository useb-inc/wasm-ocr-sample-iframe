![Version](https://img.shields.io/badge/version-v1.32.0-blue)

# [useB.WASM] (고객사) WEB ↔ (ocr.html) iframe  연동 가이드

<aside>
💡 iframe을 통해 ocr.html(OCR 모듈)을 연동하는 샘플 코드입니다. <br/>
1. **iframe 영역에 카메라가 활성화** <br/>
2. 촬영 가이드 박스에 신분증 또는 신용카드를 위치 시키면 OCR이 수행<br/>
3. 결과를 다시 **index.html에 postMessage 형태**로 전달<br/>

</aside>

### ”샘플 소스” 구성

”샘플 소스” 내 구조 설명

```html
demo/ --> ocr.html 을 iframe 으로 연동하는 데모가 들어있는 폴더입니다.
├── css/
│   └── demo.css
├── img/
│   └── bg_graphic.svg
├── js/
│   ├── ui_simulator.js
│   └── util.js
├── lib/
│   └── lodash.min.js
├── demo.js --> index.html 에서 실행될 샘플 js script 입니다.
└── index.html --> ocr.html 을 불러오는 샘플 예제 입니다.

sdk/
├── css/
│   └── sdk.css
├── helpers/ --> ocr.js 에서 사용되는 유틸 스크립트 입니다.
│   ├── detector.js 
│   └── parser.js
├── lib/
│   └── lodash.min.js
├── ocr.html  --> ocr 모듈의 카메라를 활성화 시키는 샘플 예제 입니다.
├── useb-ocr-wasm-sdk.js --> ocr.html 에서 실행될 샘플 js script 입니다.
├── ocr.js --> ocr 인식을 수행하는 라이브러리 wrapper script 입니다.
├── quram.js
├── quram.wasm
└── quram.data
```

| 파일 | 설명 | 비고 |
| --- | --- | --- |
| index.html | 예제 html 파일 (ocr.html 모듈을 연동한 샘플 html) | web에서 연동하시는 경우, 참고하여 개발에 활용 |
| ocr.html | OCR이 구현된 html 파일, index.html  또는 native app 에 연동됨. | 변경 불필요 |
| ocr.js | 웹어셈블리 용 SDK js 파일 | 변경 불필요 |
| quram.js | 웹어셈블리 바이너리와 데이터를 사용할 수 있도록 wrapping 된 js 파일 | 변경 불필요 |
| quram.wasm | 웹어셈블리 바이너리 파일 | 변경 불필요 |
| quram.data | 웹어셈블리 데이터 파일 | 변경 불필요 |
| helpers 폴더 | SDK js 파일에서 사용되는 유틸리티 js 파일 폴더 | 변경 불필요 |

### `index.html` - **ocr.html 이 iframe으로** 연동된 샘플입니다.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>OCR WebAssembly Sample</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" type="text/css" href="./css/demo.css?ver=__VERSION__" />

    <script type="text/javascript" src="./js/util.js?ver=__VERSION__"></script>
    <script type="text/javascript" src="./lib/lodash.min.js?ver=__VERSION__"></script>
    <script type="module" src="./js/ui_simulator.js?ver=__VERSION__" async></script>
    <script src="https://kit.fontawesome.com/71d7c8cd6e.js" crossorigin="anonymous"></script>

</head>

<body>
    <div id="debug_win" class="debug_win" style="display: none"></div>
    <div id='loading-ui' class="fullscreen" style="display: none; background: rgba(0, 0, 0, 0.4); justify-content: center; align-items:center; font-size: 2rem;color: white;">
        LOADING ....
    </div>

    <section id="simulator-section" class="simulator-section customer--section">
        <section class="type-section">
            <button id="idcard">주민등록증/운전면허증</button>
            <button id="passport">국내/해외 여권</button>
            <button id="alien">외국인등록증</button>
            <button id="credit">신용카드</button>
        </section>

        <!-- 이미지 스캔 카메라 섹션 -->
        <section class="scan-section">
            <iframe
              id="resolution-simulation-iframe"
              class='resolution-simulation-iframe'
              allow="camera"></iframe>
        </section>

        <!-- 옵션 세팅 섹션 -->
        <section class="settings-section">
            <div id='settings-toggle'>
                <b>UI Simulator</b>
                <span>[접기]</span>
                <i class="chevron fa-solid fa-chevron-down"></i>
            </div>
            <fieldset>
                <legend>카메라 설정</legend>
                <div>
                    <label for="mirror-mode">mirror-mode</label>
                    <input type="checkbox" id="mirror-mode" name="mirror-mode">
                </div>
                <div>
                    <label for="rotation-degree">rotation-degree</label>
                    <select id="rotation-degree" style='max-width: 50px;'>
                        <option value=0>0도</option>
                        <option value=90>90도</option>
                        <option value=180>180도</option>
                        <option value=270>270도</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <legend>UI 해상도 시뮬레이션</legend>
                <div>
                    <label for="resolution-template">해상도</label>

                    <select id='resolution-template'>
                        <option value='responsive'>반응형(Responsive)</option>
                        <option value='412x915'>(세로) S20 Ultra</option>
                        <option value='915x412'>(가로) S20 Ultra</option>
                        <option value='390x844'>(세로) iPhone 12 pro</option>
                        <option value='844x390'>(가로) iPhone 12 pro</option>
                        <option value='768x1024'>(세로) iPad Mini</option>
                        <option value='1024x768'>(가로) iPad Mini</option>
                        <option value='custom'>직접입력</option>
                        "resolution-template"
                    </select>
                    <div id='resolution-custom' style='display: none;'>
                        width x height<br/>
                        <input type="number" id="resolution-width" name="resolution-width" value="420" min="100" max='1920' style='width:50px;'> x
                        <input type="number" id="resolution-height" name="resolution-height" value="915" min="100" max='1920' style='width:50px;'>
                        <button id='resolution-reverse-button' style='vertical-align: middle;'>반전</button><br/>
                    </div>
                    <div>
                        배율(확대/축소)<br/>
                        <input type="number" id="resolution-expend-ratio" name="resolution-expend-ratio" value="1.0" style='width:50px;'>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>인식 프레임 옵션</legend>
                <div>
                    <label for="border-width">border-width</label>
                    <input type="number" id="border-width" name="border-width" value="10" min="0">
                </div>
                <div>
                    <label for="border-radius">border-radius</label>
                    <input type="number" id="border-radius" name="border-radius" value="20" min="0">
                </div>
                <div>
                    <label for="border-style">border-style (ex: none, solid)</label>
                    <input type="text" id="border-style" name="border-style" value="solid">
                </div>
                <div>
                    <label for="color-not-ready">스캔준비</label>
                    <input type="color" id="color-not-ready" name="color-not-ready" value="#000000">
                </div>
                <div>
                    <label for="color-ready">스캔대기</label>
                    <input type="color" id="color-ready" name="color-ready" value="#b8b8b8">
                </div>
                <div>
                    <label for="color-detecting">스캔진행</label>
                    <input type="color" id="color-detecting" name="color-detecting" value="#ff951c">
                </div>
                <div>
                    <label for="color-success">스캔완료</label>
                    <input type="color" id="color-success" name="color-success" value="#5cb85c">
                </div>
                <div>
                    <label for="color-failed">스캔오류</label>
                    <input type="color" id="color-failed" name="color-failed" value="#FA113D">
                </div>
                <div>
                    <label for="color-mask-frame">마스킹프레임</label>
                    <input type="color" id="color-mask-frame" name="color-mask-frame" value="#202023">
                </div>
            </fieldset>
            <fieldset>
                <legend>디버깅 옵션</legend>
                <div>
                    <label for="show-clipboard">clip-frame 보기</label>
                    <input type="checkbox" id="show-clipboard" name="show-clipboard">
                </div>
                <div>
                    <label for="show-canvas-preview">canvas preview 보기</label>
                    <input type="checkbox" id="show-canvas-preview" name="show-canvas-preview">
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <button id="save-settings">
                        <i class="fa-solid fa-check" style="display:none"></i>
                        <span>설정적용</span>
                    </button>
                </div>
            </fieldset>
        </section>
    </section>

    <section
      id="result-section"
      class="fullscreen result-section"
      style="display: none"
    >
        <div class="custom--header">
            useB.OCR WebAssembly SDK Test Result
        </div>

        <div class="custom--section">
            <div id='ocr_status' class="custom--headline"></div>
        </div>

        <div class="custom--section">
            <button class="custom--btn" id="restart_btn">
                처음부터 다시하기
            </button>
        </div>

        <div class="custom--division"></div>

        <div id='ocr_result' class="custom--section"></div>
    </section>

    <script type="module" src='./demo.js' async></script>
</body>

</html>
```

### `demo.js` - ocr.html 의 iframe을 연동호출 하는 샘플 js 입니다

- 고객사별 params 설정 기능
    - 예제는 테스트를 위해 “유스비” 인프라에 설치된 OCR 모듈에 대한 라이센스키 정보로 파라미터가 값이 설정되어 있습니다.
    
    ```jsx
    /* 보안을 위해 iframe을 불러오는 도메인과 동일하게 설정 바랍니다. */
    const OCR_TARGET_ORIGIN = "https://ocr.useb.co.kr";
    /* 카메라를 iframe 내에 활성화 시키는 소스의 url 입니다.
    	제공된 샘플 소스에는 sdk 폴더 하위에 있는 파일입니다. */
    const OCR_URL = "https://ocr.useb.co.kr/ocr.html";
    /* 아래 정보는 UseB 도메인에서만 동작하는 라이센스키로서, 테스트를 위해서는 테스트 라이센스 키를 발급받고, OCR_TARGET_ORIGIN 과 OCR_URL 은 변경해야합니다. */
    const OCR_LICENSE_KEY = 'FPkTB6QsFFW5YwiqAa2zk5yy0ylLfYSryPM1fnVJKLgWBk6FgEPMBP9RJiCd24ldGurGnkAUPatzrf9Km90ADqjlTF/FHFyculQP21k4pxkfbSRs='
    ```
    
- iframe 을 통한 OCR 모듈 호출 기능
    - index.html 내 <iframe>을 통해 ocr.html을 불러오고, parameter 정보를 postMessage로 전달하는 부분 예시
    
    ```jsx
    const onClickStartCallback = (type, settings) => {
        const ocrIframe = document.getElementById("resolution-simulation-iframe");
        ocrIframe.onload = function () {
            let params = {
                ocrType: type,
                settings: {
                    ...settings,
                    licenseKey: OCR_LICENSE_KEY,
                }
            };
    
            let encodedParams = btoa(encodeURIComponent(JSON.stringify(params)));
    
            **// index.html 에서 iframe의 ocr.html로 postMessage 전달 
            ocrIframe.contentWindow.postMessage(encodedParams, OCR_TARGET_ORIGIN);**
    
            hideLoadingUI();
            startOCR();
            ocrIframe.onload = null;
        };
    
        **// index.html 에서 iframe의 ocr.html로 이동**
        **ocrIframe.src = OCR_URL;**
        showLoadingUI();
    };
    ```
    
- OCR 완료 후 postMessage 수신 기능 및 OCR 결과 Parsing 예시
    - postMessage 수신 기능
        
        ```jsx
        const postMessageListener = (event) => {
          console.debug("message response", event.data); // base64 encoded된 JSON 메시지이므로 decoded해야 함
          console.debug("origin :", event.origin);
          try {
        
              **// OCR 모듈(iframe 내 ocr.html)로 부터 postMessage로 수신받은 결과 처리**
              **const decodedData = decodeURIComponent(atob(event.data));
              console.debug("decoded", decodedData);
              const json = JSON.parse(decodedData);
              console.debug("json", json);
        
              console.log(json.result + " 처리 필요");**
        
              let json2 = _.cloneDeep(json);
        
              if (json2?.review_result) {
                  const review_result = json2.review_result;
        
                  if (review_result.ocr_masking_image) {
                      review_result.ocr_masking_image = review_result.ocr_masking_image.substring(0, 50) + "...생략...";
                  }
                  if (review_result.ocr_origin_image) {
                      review_result.ocr_origin_image = review_result.ocr_origin_image.substring(0, 50) + "...생략...";
                  }
              }
        
              const str = JSON.stringify(json2, undefined, 4);
              const strHighlight = syntaxHighlight(str);
        
              if (json.result === "success") {
                  updateDebugWin(strHighlight);
                  updateOCRResult(strHighlight, json);
                  updateOCRStatus("OCR이 완료되었습니다.")
              } else if (json.result === "failed") {
                  updateDebugWin(strHighlight);
                  updateOCRResult(strHighlight, json);
                  updateOCRStatus("OCR이 실패되었습니다.")
              } else {
                  // invalid result
              }
        
          } catch (error) {
              console.log("wrong data", error);
          } finally {
              endOCR();
          }
        };
        
        **// OCR 모듈(iframe 내 ocr.html)로 부터 postMessage로 수신 이벤트 바인딩**
        **window.addEventListener("message", postMessageListener);**
        ```
        
    - 수신된 OCR 결과 parsing 기능
        
        ```jsx
        function updateOCRResult(data, json) {
          const OCRResult = document.getElementById("ocr_result");
          OCRResult.innerHTML = "";
        
          const title1 = document.createElement("h3");
          title1.innerHTML = "<h3 class=\"custom--headline\">최종 결과</h3>";
        
          const result1 = document.createElement("div");
          result1.className = 'syntaxHighlight bright';
          result1.style.textAlign = 'center';
        
          const detail = json.review_result;
          let content = "";
        
          if (detail) {
              let ocr_type_txt = "N/A";
              if (detail.ocr_type === "idcard") {
                  ocr_type_txt = "주민등록증/운전면허증";
              } else if (detail.ocr_type === "passport") {
                  ocr_type_txt = "국내/해외여권";
              } else if (detail.ocr_type === "alien") {
                  ocr_type_txt = "외국인등록증";
              } else if (detail.ocr_type === "credit") {
                  ocr_type_txt = "신용카드";
              } else {
                  ocr_type_txt = "INVALID_TYPE";
              }
              title1.innerHTML += "- 인증 결과 : " + (json.result === "success" ? "<span style='color:blue'>성공</span>" : "<span style='color:red'>실패</span>") + " </br>";
              title1.innerHTML += "- OCR 종류 : " + "<span style='color:blue'>" + ocr_type_txt + "</span></br>";
        
              if (detail.ocr_type === 'credit') {
                  if (detail.ocr_origin_image) {
                      content += "<br/> - 신용카드 원본 사진<br/>&nbsp;&nbsp;&nbsp;<img style='max-height:200px;' src='" + detail.ocr_origin_image + "' /></b>";
                  }
              } else {
                  if (detail.ocr_masking_image) {
                      content += "<br/> - 신분증 마스킹 사진<br/>&nbsp;&nbsp;&nbsp;<img style='max-height:200px;' src='" + detail.ocr_masking_image + "' /></b>";
                  }
                  if (detail.ocr_origin_image) {
                      content += "<br/> - 신분증 원본 사진<br/>&nbsp;&nbsp;&nbsp;<img style='max-height:200px;' src='" + detail.ocr_origin_image + "' /></b>";
                  }
              }
          }
        
          result1.innerHTML = content;
          OCRResult.appendChild(title1);
          OCRResult.appendChild(result1);
        
          const title2 = document.createElement("h3");
          title2.innerHTML = "<h3 class=\"custom--headline\">PostMessage 상세</h3>";
        
          const result2 = document.createElement("pre");
          result2.className = "syntaxHighlight bright";
          result2.innerHTML = data;
          OCRResult.appendChild(title2);
          OCRResult.appendChild(result2);
        }
        ```
        
- 인증 결과(result : success, failed)에 따른 다음 화면 설정 기능
    
    ```jsx
    function startOCR() {
      document.getElementById('simulator-section').style.display = 'flex';
      document.getElementById('result-section').style.display = 'none';
    }
    
    function endOCR() {
      document.getElementById('simulator-section').style.display = 'none';
      document.getElementById('result-section').style.display = 'block';
    }
    ```
    
- 카메라의 가이드 박스 UI 커스텀 예시
    
    ```jsx
    {
      licenseKey: "발급받은 라이센스 키",
      frameBorderStyle: { // UI 에 보여질 프레임 설정
        width: 5,
        style: "solid",
        radius: 10,
        not_ready: '#000000', // 검정
        ready: '#b8b8b8', // 회색
        detecting: '#ff951c', // 주황
        detect_failed: '#FA113D', // 빨강
        detect_success: '#5cb85c', // 초록
        mask_frame: "#202023" // 짙은 회색
      },
    }
    ```


### `useb-ocr-wasm-sdk.js` - ocr.html 에서 ocr 진행 후 index.html 에 postMessage 를 송신하는 샘플 js 입니다

```jsx
import UseBOCR from './ocr.js?ver=__VERSION__';
const ocr = new UseBOCR();
let targetOrigin = null;

const messageHandler = async (e) => {
  try {
    const response = e.data ? e.data : e;

    if (targetOrigin !== e.origin) {
      targetOrigin = e.origin;
    }

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

    let data;

    if (typeof response === 'string' && response !== 'undefined') {
      try {
				**// index.html 혹은 웹뷰에서 수신받은 data 파싱**
        **data = JSON.parse(decodeURIComponent(atob(response)));**
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
					**// OCR 모듈 세팅 초기화
          ocr.init(data.settings)**

					// **index.html 혹은 웹뷰에 postMessage로 OCR결과를 송신 해주는 OCR 결과 콜백 함수**
          **const sendResult = (result) => {
            const returnMessage = btoa(encodeURIComponent(JSON.stringify(result)));

            // Browser iframe
            if (window.parent) {
              window.parent.postMessage(returnMessage, targetOrigin);
            }

            // react-native webview
            if (window.ReactNativeWebView) {
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
          }**

					**// OCR 실행 호출
          await ocr.startOCR(data.ocrType, sendResult, sendResult);**

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

**// index.html 혹은 웹뷰로 부터 postMessage로 수신한 이벤트 바인딩**
**//ios
window.addEventListener('message', messageHandler);
//android
document.addEventListener('message', messageHandler);
window.usebwasmocrreceive = messageHandler;**
```
