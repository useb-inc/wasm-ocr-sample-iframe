function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable */

/* global-module */
class OcrResultParser {
  constructor() {
    _defineProperty(this, "__ocrTypeList", ['idcard', 'driver', 'passport', 'foreign-passport', 'alien', 'credit', 'idcard-ssa', 'driver-ssa', 'passport-ssa', 'foreign-passport-ssa', 'alien-ssa', 'credit-ssa']);
  }
  parseOcrResult(ocrType, ssaMode, ocrResult, ssaResult, ssaRetryCount, ssaResultList) {
    if (!this.__ocrTypeList.includes(ocrType)) throw new Error('ResultParser :: Unsupported OCR type');
    var legacyFormat = {};
    var newFormat = {};
    switch (ocrType) {
      case 'idcard':
      case 'driver':
      case 'idcard-ssa':
      case 'driver-ssa':
        [legacyFormat, newFormat] = this.__parseIdDriver(ocrResult);
        break;
      case 'passport':
      case 'passport-ssa':
      case 'foreign-passport':
      case 'foreign-passport-ssa':
        [legacyFormat, newFormat] = this.__parsePassport(ocrResult);
        break;
      case 'alien':
      case 'alien-ssa':
        [legacyFormat, newFormat] = this.__parseAlien(ocrResult);
        break;
      case 'credit':
      case 'credit-ssa':
        [legacyFormat, newFormat] = this.__parseCredit(ocrResult);
        break;
      default:
        throw new Error('Unsupported OCR type');
    }
    if (ssaMode && !!ssaResult) {
      [legacyFormat.truth, legacyFormat.truthConfidence] = ssaResult.split('/');
      legacyFormat.truthRetryCount = ssaRetryCount;
      if (ssaRetryCount > 0) {
        var truthResultDetail = [];
        for (var item of ssaResultList) {
          var [truth, truthConfidence] = item.split('/');
          var truthResult = {
            truth: truth,
            truthConfidence: truthConfidence
          };
          truthResultDetail.push(truthResult);
        }
        legacyFormat.truthResultDetail = truthResultDetail;
      }
    }
    return {
      legacyFormat,
      newFormat
    };
  }
  __parseIdDriver(ocrResult) {
    var keyMapIdDriver = {
      Completed: 'complete',
      type: 'idType',
      // name: 'name',
      // number: 'number',
      Date: 'issueDate',
      region: 'region',
      // licenseNumber: 'licenseNumber',
      isOldFormatLicenseNumber: 'isOldFormatLicenseNumber',
      // serial: 'serial',
      // licenseType: 'licenseType',
      color_point: 'colorPoint',
      face_score: 'faceScore',
      specular: 'specularRatio',
      start_t: 'startTime',
      end_t: 'endTime',
      id_type: 'idType'
    };
    var legacyFormat = _objectSpread({}, ocrResult);
    for (var key in keyMapIdDriver) {
      legacyFormat[key] = legacyFormat[keyMapIdDriver[key]];
    }

    // 주민번호 형식 리턴값 형식 변경
    // birth 추가
    if (ocrResult.number !== undefined && ocrResult.number.length >= 6) ocrResult.birth = ocrResult.number.slice(0, 6);
    if (ocrResult.number !== undefined && ocrResult.number.length === 13) ocrResult.number = ocrResult.number.slice(0, 6) + '-' + ocrResult.number.slice(6, 13);else ocrResult.number = '';
    if (ocrResult.idType === '2') {
      // 구형 면허증 포멧 판정 (ex: 제주 13-001234-12 -> true)
      var regex = /[가-힣]/g;
      legacyFormat.isOldFormatLicenseNumber = !!legacyFormat.licenseNumber.match(regex);
      ocrResult.isOldFormatLicenseNumber = legacyFormat.isOldFormatLicenseNumber;
      if (legacyFormat.isOldFormatLicenseNumber) {
        // useb api 포멧에 맞게 변경 (to: 제주-13-001234-12)
        legacyFormat.licenseNumber = legacyFormat.licenseNumber.replace(' ', '-');
        ocrResult.licenseNumber = legacyFormat.licenseNumber;
      }
    }
    return [legacyFormat, ocrResult];
  }
  __parsePassport(ocrResult) {
    var keyMapPassport = {
      Completed: 'complete',
      // name: 'name',
      // surName: 'surName',
      // givenName: 'givenName',
      // type: 'type',
      issuing_country: 'issuingCountry',
      passport_no: 'passportNo',
      // nationality: 'nationality',
      date_of_issue: 'dateOfIssue',
      // sex: 'sex',
      date_of_expiry: 'dateOfExpiry',
      personal_no: 'personalNo',
      // number: 'number',
      date_of_birth: 'dateOfBirth',
      name_kor: 'nameKor',
      // mrz1: 'mrz1',
      // mrz2: 'mrz2',
      color_point: 'colorPoint',
      face_score: 'faceScore',
      specular: 'specularRatio',
      start_t: 'startTime',
      end_t: 'endTime',
      id_type: 'idType'
    };
    var legacyFormat = _objectSpread({}, ocrResult);
    for (var key in keyMapPassport) {
      legacyFormat[key] = legacyFormat[keyMapPassport[key]];
    }

    // 주민번호 형식 리턴값 형식 변경
    if (ocrResult.number !== undefined && ocrResult.number.length === 13) ocrResult.number = ocrResult.number.slice(0, 6) + '-' + ocrResult.number.slice(6, 13);else ocrResult.number = '';
    return [legacyFormat, ocrResult];
  }
  __parseAlien(ocrResult) {
    var keyMapPassport = {
      Completed: 'complete',
      // name: 'name',
      // number: 'number',
      Date: 'issueDate',
      // nationality: 'nationality',
      // visaType: 'visaType',
      name_kor: 'nameKor',
      color_point: 'colorPoint',
      face_score: 'faceScore',
      specular: 'specularRatio',
      start_t: 'startTime',
      end_t: 'endTime',
      id_type: 'idType'
    };
    var legacyFormat = _objectSpread({}, ocrResult);
    for (var key in keyMapPassport) {
      legacyFormat[key] = legacyFormat[keyMapPassport[key]];
    }

    // 주민번호 형식 리턴값 형식 변경
    if (ocrResult.number !== undefined && ocrResult.number.length === 13) ocrResult.number = ocrResult.number.slice(0, 6) + '-' + ocrResult.number.slice(6, 13);else ocrResult.number = '';
    return [legacyFormat, ocrResult];
  }
  __parseCredit(ocrResult) {
    var target = {};
    var resultSplit = ocrResult.split(',');
    var resultIndex = 0;
    if (resultIndex < resultSplit.length) target.Completed = resultSplit[resultIndex], resultIndex++;
    if (resultIndex < resultSplit.length) target.number = resultSplit[resultIndex], resultIndex++;
    if (resultIndex < resultSplit.length) target.exp_date = resultSplit[resultIndex], resultIndex++;
    return [target, target];
  }
}
export default new OcrResultParser();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy9wYXJzZXIuanMiLCJuYW1lcyI6WyJPY3JSZXN1bHRQYXJzZXIiLCJjb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0eSIsInBhcnNlT2NyUmVzdWx0Iiwib2NyVHlwZSIsInNzYU1vZGUiLCJvY3JSZXN1bHQiLCJzc2FSZXN1bHQiLCJzc2FSZXRyeUNvdW50Iiwic3NhUmVzdWx0TGlzdCIsIl9fb2NyVHlwZUxpc3QiLCJpbmNsdWRlcyIsIkVycm9yIiwibGVnYWN5Rm9ybWF0IiwibmV3Rm9ybWF0IiwiX19wYXJzZUlkRHJpdmVyIiwiX19wYXJzZVBhc3Nwb3J0IiwiX19wYXJzZUFsaWVuIiwiX19wYXJzZUNyZWRpdCIsInRydXRoIiwidHJ1dGhDb25maWRlbmNlIiwic3BsaXQiLCJ0cnV0aFJldHJ5Q291bnQiLCJ0cnV0aFJlc3VsdERldGFpbCIsIml0ZW0iLCJ0cnV0aFJlc3VsdCIsInB1c2giLCJrZXlNYXBJZERyaXZlciIsIkNvbXBsZXRlZCIsInR5cGUiLCJEYXRlIiwicmVnaW9uIiwiaXNPbGRGb3JtYXRMaWNlbnNlTnVtYmVyIiwiY29sb3JfcG9pbnQiLCJmYWNlX3Njb3JlIiwic3BlY3VsYXIiLCJzdGFydF90IiwiZW5kX3QiLCJpZF90eXBlIiwiX29iamVjdFNwcmVhZCIsImtleSIsIm51bWJlciIsInVuZGVmaW5lZCIsImxlbmd0aCIsImJpcnRoIiwic2xpY2UiLCJpZFR5cGUiLCJyZWdleCIsImxpY2Vuc2VOdW1iZXIiLCJtYXRjaCIsInJlcGxhY2UiLCJrZXlNYXBQYXNzcG9ydCIsImlzc3VpbmdfY291bnRyeSIsInBhc3Nwb3J0X25vIiwiZGF0ZV9vZl9pc3N1ZSIsImRhdGVfb2ZfZXhwaXJ5IiwicGVyc29uYWxfbm8iLCJkYXRlX29mX2JpcnRoIiwibmFtZV9rb3IiLCJ0YXJnZXQiLCJyZXN1bHRTcGxpdCIsInJlc3VsdEluZGV4IiwiZXhwX2RhdGUiXSwic291cmNlcyI6WyJoZWxwZXJzL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKiBnbG9iYWwtbW9kdWxlICovXG5jbGFzcyBPY3JSZXN1bHRQYXJzZXIge1xuICBfX29jclR5cGVMaXN0ID0gWydpZGNhcmQnLCAnZHJpdmVyJywgJ3Bhc3Nwb3J0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnYWxpZW4nLCAnY3JlZGl0JywgJ2lkY2FyZC1zc2EnLCAnZHJpdmVyLXNzYScsICdwYXNzcG9ydC1zc2EnLCAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLCAnYWxpZW4tc3NhJywgJ2NyZWRpdC1zc2EnXTtcbiAgcGFyc2VPY3JSZXN1bHQob2NyVHlwZSwgc3NhTW9kZSwgb2NyUmVzdWx0LCBzc2FSZXN1bHQsIHNzYVJldHJ5Q291bnQsIHNzYVJlc3VsdExpc3QpIHtcbiAgICBpZiAoIXRoaXMuX19vY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdSZXN1bHRQYXJzZXIgOjogVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICBsZXQgbGVnYWN5Rm9ybWF0ID0ge307XG4gICAgbGV0IG5ld0Zvcm1hdCA9IHt9O1xuICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICBbbGVnYWN5Rm9ybWF0LCBuZXdGb3JtYXRdID0gdGhpcy5fX3BhcnNlSWREcml2ZXIob2NyUmVzdWx0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgIFtsZWdhY3lGb3JtYXQsIG5ld0Zvcm1hdF0gPSB0aGlzLl9fcGFyc2VQYXNzcG9ydChvY3JSZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgIFtsZWdhY3lGb3JtYXQsIG5ld0Zvcm1hdF0gPSB0aGlzLl9fcGFyc2VBbGllbihvY3JSZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgW2xlZ2FjeUZvcm1hdCwgbmV3Rm9ybWF0XSA9IHRoaXMuX19wYXJzZUNyZWRpdChvY3JSZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKHNzYU1vZGUgJiYgISFzc2FSZXN1bHQpIHtcbiAgICAgIFtsZWdhY3lGb3JtYXQudHJ1dGgsIGxlZ2FjeUZvcm1hdC50cnV0aENvbmZpZGVuY2VdID0gc3NhUmVzdWx0LnNwbGl0KCcvJyk7XG4gICAgICBsZWdhY3lGb3JtYXQudHJ1dGhSZXRyeUNvdW50ID0gc3NhUmV0cnlDb3VudDtcbiAgICAgIGlmIChzc2FSZXRyeUNvdW50ID4gMCkge1xuICAgICAgICBsZXQgdHJ1dGhSZXN1bHREZXRhaWwgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNzYVJlc3VsdExpc3QpIHtcbiAgICAgICAgICBjb25zdCBbdHJ1dGgsIHRydXRoQ29uZmlkZW5jZV0gPSBpdGVtLnNwbGl0KCcvJyk7XG4gICAgICAgICAgY29uc3QgdHJ1dGhSZXN1bHQgPSB7XG4gICAgICAgICAgICB0cnV0aDogdHJ1dGgsXG4gICAgICAgICAgICB0cnV0aENvbmZpZGVuY2U6IHRydXRoQ29uZmlkZW5jZVxuICAgICAgICAgIH07XG4gICAgICAgICAgdHJ1dGhSZXN1bHREZXRhaWwucHVzaCh0cnV0aFJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVnYWN5Rm9ybWF0LnRydXRoUmVzdWx0RGV0YWlsID0gdHJ1dGhSZXN1bHREZXRhaWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsZWdhY3lGb3JtYXQsXG4gICAgICBuZXdGb3JtYXRcbiAgICB9O1xuICB9XG4gIF9fcGFyc2VJZERyaXZlcihvY3JSZXN1bHQpIHtcbiAgICBjb25zdCBrZXlNYXBJZERyaXZlciA9IHtcbiAgICAgIENvbXBsZXRlZDogJ2NvbXBsZXRlJyxcbiAgICAgIHR5cGU6ICdpZFR5cGUnLFxuICAgICAgLy8gbmFtZTogJ25hbWUnLFxuICAgICAgLy8gbnVtYmVyOiAnbnVtYmVyJyxcbiAgICAgIERhdGU6ICdpc3N1ZURhdGUnLFxuICAgICAgcmVnaW9uOiAncmVnaW9uJyxcbiAgICAgIC8vIGxpY2Vuc2VOdW1iZXI6ICdsaWNlbnNlTnVtYmVyJyxcbiAgICAgIGlzT2xkRm9ybWF0TGljZW5zZU51bWJlcjogJ2lzT2xkRm9ybWF0TGljZW5zZU51bWJlcicsXG4gICAgICAvLyBzZXJpYWw6ICdzZXJpYWwnLFxuICAgICAgLy8gbGljZW5zZVR5cGU6ICdsaWNlbnNlVHlwZScsXG4gICAgICBjb2xvcl9wb2ludDogJ2NvbG9yUG9pbnQnLFxuICAgICAgZmFjZV9zY29yZTogJ2ZhY2VTY29yZScsXG4gICAgICBzcGVjdWxhcjogJ3NwZWN1bGFyUmF0aW8nLFxuICAgICAgc3RhcnRfdDogJ3N0YXJ0VGltZScsXG4gICAgICBlbmRfdDogJ2VuZFRpbWUnLFxuICAgICAgaWRfdHlwZTogJ2lkVHlwZSdcbiAgICB9O1xuICAgIGxldCBsZWdhY3lGb3JtYXQgPSB7XG4gICAgICAuLi5vY3JSZXN1bHRcbiAgICB9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIGtleU1hcElkRHJpdmVyKSB7XG4gICAgICBsZWdhY3lGb3JtYXRba2V5XSA9IGxlZ2FjeUZvcm1hdFtrZXlNYXBJZERyaXZlcltrZXldXTtcbiAgICB9XG5cbiAgICAvLyDso7zrr7zrsojtmLgg7ZiV7IudIOumrO2EtOqwkiDtmJXsi50g67OA6rK9XG4gICAgLy8gYmlydGgg7LaU6rCAXG4gICAgaWYgKG9jclJlc3VsdC5udW1iZXIgIT09IHVuZGVmaW5lZCAmJiBvY3JSZXN1bHQubnVtYmVyLmxlbmd0aCA+PSA2KSBvY3JSZXN1bHQuYmlydGggPSBvY3JSZXN1bHQubnVtYmVyLnNsaWNlKDAsIDYpO1xuICAgIGlmIChvY3JSZXN1bHQubnVtYmVyICE9PSB1bmRlZmluZWQgJiYgb2NyUmVzdWx0Lm51bWJlci5sZW5ndGggPT09IDEzKSBvY3JSZXN1bHQubnVtYmVyID0gb2NyUmVzdWx0Lm51bWJlci5zbGljZSgwLCA2KSArICctJyArIG9jclJlc3VsdC5udW1iZXIuc2xpY2UoNiwgMTMpO2Vsc2Ugb2NyUmVzdWx0Lm51bWJlciA9ICcnO1xuICAgIGlmIChvY3JSZXN1bHQuaWRUeXBlID09PSAnMicpIHtcbiAgICAgIC8vIOq1rO2YlSDrqbTtl4jspp0g7Y+s66mnIO2MkOyglSAoZXg6IOygnOyjvCAxMy0wMDEyMzQtMTIgLT4gdHJ1ZSlcbiAgICAgIGNvbnN0IHJlZ2V4ID0gL1vqsIAt7Z6jXS9nO1xuICAgICAgbGVnYWN5Rm9ybWF0LmlzT2xkRm9ybWF0TGljZW5zZU51bWJlciA9ICEhbGVnYWN5Rm9ybWF0LmxpY2Vuc2VOdW1iZXIubWF0Y2gocmVnZXgpO1xuICAgICAgb2NyUmVzdWx0LmlzT2xkRm9ybWF0TGljZW5zZU51bWJlciA9IGxlZ2FjeUZvcm1hdC5pc09sZEZvcm1hdExpY2Vuc2VOdW1iZXI7XG4gICAgICBpZiAobGVnYWN5Rm9ybWF0LmlzT2xkRm9ybWF0TGljZW5zZU51bWJlcikge1xuICAgICAgICAvLyB1c2ViIGFwaSDtj6zrqafsl5Ag66ee6rKMIOuzgOqyvSAodG86IOygnOyjvC0xMy0wMDEyMzQtMTIpXG4gICAgICAgIGxlZ2FjeUZvcm1hdC5saWNlbnNlTnVtYmVyID0gbGVnYWN5Rm9ybWF0LmxpY2Vuc2VOdW1iZXIucmVwbGFjZSgnICcsICctJyk7XG4gICAgICAgIG9jclJlc3VsdC5saWNlbnNlTnVtYmVyID0gbGVnYWN5Rm9ybWF0LmxpY2Vuc2VOdW1iZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbGVnYWN5Rm9ybWF0LCBvY3JSZXN1bHRdO1xuICB9XG4gIF9fcGFyc2VQYXNzcG9ydChvY3JSZXN1bHQpIHtcbiAgICBjb25zdCBrZXlNYXBQYXNzcG9ydCA9IHtcbiAgICAgIENvbXBsZXRlZDogJ2NvbXBsZXRlJyxcbiAgICAgIC8vIG5hbWU6ICduYW1lJyxcbiAgICAgIC8vIHN1ck5hbWU6ICdzdXJOYW1lJyxcbiAgICAgIC8vIGdpdmVuTmFtZTogJ2dpdmVuTmFtZScsXG4gICAgICAvLyB0eXBlOiAndHlwZScsXG4gICAgICBpc3N1aW5nX2NvdW50cnk6ICdpc3N1aW5nQ291bnRyeScsXG4gICAgICBwYXNzcG9ydF9ubzogJ3Bhc3Nwb3J0Tm8nLFxuICAgICAgLy8gbmF0aW9uYWxpdHk6ICduYXRpb25hbGl0eScsXG4gICAgICBkYXRlX29mX2lzc3VlOiAnZGF0ZU9mSXNzdWUnLFxuICAgICAgLy8gc2V4OiAnc2V4JyxcbiAgICAgIGRhdGVfb2ZfZXhwaXJ5OiAnZGF0ZU9mRXhwaXJ5JyxcbiAgICAgIHBlcnNvbmFsX25vOiAncGVyc29uYWxObycsXG4gICAgICAvLyBudW1iZXI6ICdudW1iZXInLFxuICAgICAgZGF0ZV9vZl9iaXJ0aDogJ2RhdGVPZkJpcnRoJyxcbiAgICAgIG5hbWVfa29yOiAnbmFtZUtvcicsXG4gICAgICAvLyBtcnoxOiAnbXJ6MScsXG4gICAgICAvLyBtcnoyOiAnbXJ6MicsXG4gICAgICBjb2xvcl9wb2ludDogJ2NvbG9yUG9pbnQnLFxuICAgICAgZmFjZV9zY29yZTogJ2ZhY2VTY29yZScsXG4gICAgICBzcGVjdWxhcjogJ3NwZWN1bGFyUmF0aW8nLFxuICAgICAgc3RhcnRfdDogJ3N0YXJ0VGltZScsXG4gICAgICBlbmRfdDogJ2VuZFRpbWUnLFxuICAgICAgaWRfdHlwZTogJ2lkVHlwZSdcbiAgICB9O1xuICAgIGxldCBsZWdhY3lGb3JtYXQgPSB7XG4gICAgICAuLi5vY3JSZXN1bHRcbiAgICB9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIGtleU1hcFBhc3Nwb3J0KSB7XG4gICAgICBsZWdhY3lGb3JtYXRba2V5XSA9IGxlZ2FjeUZvcm1hdFtrZXlNYXBQYXNzcG9ydFtrZXldXTtcbiAgICB9XG5cbiAgICAvLyDso7zrr7zrsojtmLgg7ZiV7IudIOumrO2EtOqwkiDtmJXsi50g67OA6rK9XG4gICAgaWYgKG9jclJlc3VsdC5udW1iZXIgIT09IHVuZGVmaW5lZCAmJiBvY3JSZXN1bHQubnVtYmVyLmxlbmd0aCA9PT0gMTMpIG9jclJlc3VsdC5udW1iZXIgPSBvY3JSZXN1bHQubnVtYmVyLnNsaWNlKDAsIDYpICsgJy0nICsgb2NyUmVzdWx0Lm51bWJlci5zbGljZSg2LCAxMyk7ZWxzZSBvY3JSZXN1bHQubnVtYmVyID0gJyc7XG4gICAgcmV0dXJuIFtsZWdhY3lGb3JtYXQsIG9jclJlc3VsdF07XG4gIH1cbiAgX19wYXJzZUFsaWVuKG9jclJlc3VsdCkge1xuICAgIGNvbnN0IGtleU1hcFBhc3Nwb3J0ID0ge1xuICAgICAgQ29tcGxldGVkOiAnY29tcGxldGUnLFxuICAgICAgLy8gbmFtZTogJ25hbWUnLFxuICAgICAgLy8gbnVtYmVyOiAnbnVtYmVyJyxcbiAgICAgIERhdGU6ICdpc3N1ZURhdGUnLFxuICAgICAgLy8gbmF0aW9uYWxpdHk6ICduYXRpb25hbGl0eScsXG4gICAgICAvLyB2aXNhVHlwZTogJ3Zpc2FUeXBlJyxcbiAgICAgIG5hbWVfa29yOiAnbmFtZUtvcicsXG4gICAgICBjb2xvcl9wb2ludDogJ2NvbG9yUG9pbnQnLFxuICAgICAgZmFjZV9zY29yZTogJ2ZhY2VTY29yZScsXG4gICAgICBzcGVjdWxhcjogJ3NwZWN1bGFyUmF0aW8nLFxuICAgICAgc3RhcnRfdDogJ3N0YXJ0VGltZScsXG4gICAgICBlbmRfdDogJ2VuZFRpbWUnLFxuICAgICAgaWRfdHlwZTogJ2lkVHlwZSdcbiAgICB9O1xuICAgIGxldCBsZWdhY3lGb3JtYXQgPSB7XG4gICAgICAuLi5vY3JSZXN1bHRcbiAgICB9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIGtleU1hcFBhc3Nwb3J0KSB7XG4gICAgICBsZWdhY3lGb3JtYXRba2V5XSA9IGxlZ2FjeUZvcm1hdFtrZXlNYXBQYXNzcG9ydFtrZXldXTtcbiAgICB9XG5cbiAgICAvLyDso7zrr7zrsojtmLgg7ZiV7IudIOumrO2EtOqwkiDtmJXsi50g67OA6rK9XG4gICAgaWYgKG9jclJlc3VsdC5udW1iZXIgIT09IHVuZGVmaW5lZCAmJiBvY3JSZXN1bHQubnVtYmVyLmxlbmd0aCA9PT0gMTMpIG9jclJlc3VsdC5udW1iZXIgPSBvY3JSZXN1bHQubnVtYmVyLnNsaWNlKDAsIDYpICsgJy0nICsgb2NyUmVzdWx0Lm51bWJlci5zbGljZSg2LCAxMyk7ZWxzZSBvY3JSZXN1bHQubnVtYmVyID0gJyc7XG4gICAgcmV0dXJuIFtsZWdhY3lGb3JtYXQsIG9jclJlc3VsdF07XG4gIH1cbiAgX19wYXJzZUNyZWRpdChvY3JSZXN1bHQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBjb25zdCByZXN1bHRTcGxpdCA9IG9jclJlc3VsdC5zcGxpdCgnLCcpO1xuICAgIGxldCByZXN1bHRJbmRleCA9IDA7XG4gICAgaWYgKHJlc3VsdEluZGV4IDwgcmVzdWx0U3BsaXQubGVuZ3RoKSB0YXJnZXQuQ29tcGxldGVkID0gcmVzdWx0U3BsaXRbcmVzdWx0SW5kZXhdLCByZXN1bHRJbmRleCsrO1xuICAgIGlmIChyZXN1bHRJbmRleCA8IHJlc3VsdFNwbGl0Lmxlbmd0aCkgdGFyZ2V0Lm51bWJlciA9IHJlc3VsdFNwbGl0W3Jlc3VsdEluZGV4XSwgcmVzdWx0SW5kZXgrKztcbiAgICBpZiAocmVzdWx0SW5kZXggPCByZXN1bHRTcGxpdC5sZW5ndGgpIHRhcmdldC5leHBfZGF0ZSA9IHJlc3VsdFNwbGl0W3Jlc3VsdEluZGV4XSwgcmVzdWx0SW5kZXgrKztcbiAgICByZXR1cm4gW3RhcmdldCwgdGFyZ2V0XTtcbiAgfVxufVxu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
