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
      var ssaResultObj = this.__csvToObject(ssaResult);
      [legacyFormat.truth, legacyFormat.truthConfidence] = [ssaResultObj.truth, ssaResultObj.conf];
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
  __csvToObject(str) {
    var pairs = str.split(';');
    var obj = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split(':');
      if (pair.length === 2) obj[pair[0]] = pair[1];
    }
    return obj;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy9wYXJzZXIuanMiLCJuYW1lcyI6WyJPY3JSZXN1bHRQYXJzZXIiLCJjb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0eSIsInBhcnNlT2NyUmVzdWx0Iiwib2NyVHlwZSIsInNzYU1vZGUiLCJvY3JSZXN1bHQiLCJzc2FSZXN1bHQiLCJzc2FSZXRyeUNvdW50Iiwic3NhUmVzdWx0TGlzdCIsIl9fb2NyVHlwZUxpc3QiLCJpbmNsdWRlcyIsIkVycm9yIiwibGVnYWN5Rm9ybWF0IiwibmV3Rm9ybWF0IiwiX19wYXJzZUlkRHJpdmVyIiwiX19wYXJzZVBhc3Nwb3J0IiwiX19wYXJzZUFsaWVuIiwiX19wYXJzZUNyZWRpdCIsInNzYVJlc3VsdE9iaiIsIl9fY3N2VG9PYmplY3QiLCJ0cnV0aCIsInRydXRoQ29uZmlkZW5jZSIsImNvbmYiLCJ0cnV0aFJldHJ5Q291bnQiLCJ0cnV0aFJlc3VsdERldGFpbCIsIml0ZW0iLCJzcGxpdCIsInRydXRoUmVzdWx0IiwicHVzaCIsInN0ciIsInBhaXJzIiwib2JqIiwiaSIsImxlbmd0aCIsInBhaXIiLCJrZXlNYXBJZERyaXZlciIsIkNvbXBsZXRlZCIsInR5cGUiLCJEYXRlIiwicmVnaW9uIiwiaXNPbGRGb3JtYXRMaWNlbnNlTnVtYmVyIiwiY29sb3JfcG9pbnQiLCJmYWNlX3Njb3JlIiwic3BlY3VsYXIiLCJzdGFydF90IiwiZW5kX3QiLCJpZF90eXBlIiwiX29iamVjdFNwcmVhZCIsImtleSIsIm51bWJlciIsInVuZGVmaW5lZCIsImJpcnRoIiwic2xpY2UiLCJpZFR5cGUiLCJyZWdleCIsImxpY2Vuc2VOdW1iZXIiLCJtYXRjaCIsInJlcGxhY2UiLCJrZXlNYXBQYXNzcG9ydCIsImlzc3VpbmdfY291bnRyeSIsInBhc3Nwb3J0X25vIiwiZGF0ZV9vZl9pc3N1ZSIsImRhdGVfb2ZfZXhwaXJ5IiwicGVyc29uYWxfbm8iLCJkYXRlX29mX2JpcnRoIiwibmFtZV9rb3IiLCJ0YXJnZXQiLCJyZXN1bHRTcGxpdCIsInJlc3VsdEluZGV4IiwiZXhwX2RhdGUiXSwic291cmNlcyI6WyJoZWxwZXJzL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKiBnbG9iYWwtbW9kdWxlICovXG5jbGFzcyBPY3JSZXN1bHRQYXJzZXIge1xuICBfX29jclR5cGVMaXN0ID0gWydpZGNhcmQnLCAnZHJpdmVyJywgJ3Bhc3Nwb3J0JywgJ2ZvcmVpZ24tcGFzc3BvcnQnLCAnYWxpZW4nLCAnY3JlZGl0JywgJ2lkY2FyZC1zc2EnLCAnZHJpdmVyLXNzYScsICdwYXNzcG9ydC1zc2EnLCAnZm9yZWlnbi1wYXNzcG9ydC1zc2EnLCAnYWxpZW4tc3NhJywgJ2NyZWRpdC1zc2EnXTtcbiAgcGFyc2VPY3JSZXN1bHQob2NyVHlwZSwgc3NhTW9kZSwgb2NyUmVzdWx0LCBzc2FSZXN1bHQsIHNzYVJldHJ5Q291bnQsIHNzYVJlc3VsdExpc3QpIHtcbiAgICBpZiAoIXRoaXMuX19vY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdSZXN1bHRQYXJzZXIgOjogVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICBsZXQgbGVnYWN5Rm9ybWF0ID0ge307XG4gICAgbGV0IG5ld0Zvcm1hdCA9IHt9O1xuICAgIHN3aXRjaCAob2NyVHlwZSkge1xuICAgICAgY2FzZSAnaWRjYXJkJzpcbiAgICAgIGNhc2UgJ2RyaXZlcic6XG4gICAgICBjYXNlICdpZGNhcmQtc3NhJzpcbiAgICAgIGNhc2UgJ2RyaXZlci1zc2EnOlxuICAgICAgICBbbGVnYWN5Rm9ybWF0LCBuZXdGb3JtYXRdID0gdGhpcy5fX3BhcnNlSWREcml2ZXIob2NyUmVzdWx0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXNzcG9ydCc6XG4gICAgICBjYXNlICdwYXNzcG9ydC1zc2EnOlxuICAgICAgY2FzZSAnZm9yZWlnbi1wYXNzcG9ydCc6XG4gICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0LXNzYSc6XG4gICAgICAgIFtsZWdhY3lGb3JtYXQsIG5ld0Zvcm1hdF0gPSB0aGlzLl9fcGFyc2VQYXNzcG9ydChvY3JSZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgIFtsZWdhY3lGb3JtYXQsIG5ld0Zvcm1hdF0gPSB0aGlzLl9fcGFyc2VBbGllbihvY3JSZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NyZWRpdCc6XG4gICAgICBjYXNlICdjcmVkaXQtc3NhJzpcbiAgICAgICAgW2xlZ2FjeUZvcm1hdCwgbmV3Rm9ybWF0XSA9IHRoaXMuX19wYXJzZUNyZWRpdChvY3JSZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKHNzYU1vZGUgJiYgISFzc2FSZXN1bHQpIHtcbiAgICAgIGNvbnN0IHNzYVJlc3VsdE9iaiA9IHRoaXMuX19jc3ZUb09iamVjdChzc2FSZXN1bHQpO1xuICAgICAgW2xlZ2FjeUZvcm1hdC50cnV0aCwgbGVnYWN5Rm9ybWF0LnRydXRoQ29uZmlkZW5jZV0gPSBbc3NhUmVzdWx0T2JqLnRydXRoLCBzc2FSZXN1bHRPYmouY29uZl07XG4gICAgICBsZWdhY3lGb3JtYXQudHJ1dGhSZXRyeUNvdW50ID0gc3NhUmV0cnlDb3VudDtcbiAgICAgIGlmIChzc2FSZXRyeUNvdW50ID4gMCkge1xuICAgICAgICBsZXQgdHJ1dGhSZXN1bHREZXRhaWwgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNzYVJlc3VsdExpc3QpIHtcbiAgICAgICAgICBjb25zdCBbdHJ1dGgsIHRydXRoQ29uZmlkZW5jZV0gPSBpdGVtLnNwbGl0KCcvJyk7XG4gICAgICAgICAgY29uc3QgdHJ1dGhSZXN1bHQgPSB7XG4gICAgICAgICAgICB0cnV0aDogdHJ1dGgsXG4gICAgICAgICAgICB0cnV0aENvbmZpZGVuY2U6IHRydXRoQ29uZmlkZW5jZVxuICAgICAgICAgIH07XG4gICAgICAgICAgdHJ1dGhSZXN1bHREZXRhaWwucHVzaCh0cnV0aFJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVnYWN5Rm9ybWF0LnRydXRoUmVzdWx0RGV0YWlsID0gdHJ1dGhSZXN1bHREZXRhaWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsZWdhY3lGb3JtYXQsXG4gICAgICBuZXdGb3JtYXRcbiAgICB9O1xuICB9XG4gIF9fY3N2VG9PYmplY3Qoc3RyKSB7XG4gICAgbGV0IHBhaXJzID0gc3RyLnNwbGl0KCc7Jyk7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJzonKTtcbiAgICAgIGlmIChwYWlyLmxlbmd0aCA9PT0gMikgb2JqW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBfX3BhcnNlSWREcml2ZXIob2NyUmVzdWx0KSB7XG4gICAgY29uc3Qga2V5TWFwSWREcml2ZXIgPSB7XG4gICAgICBDb21wbGV0ZWQ6ICdjb21wbGV0ZScsXG4gICAgICB0eXBlOiAnaWRUeXBlJyxcbiAgICAgIC8vIG5hbWU6ICduYW1lJyxcbiAgICAgIC8vIG51bWJlcjogJ251bWJlcicsXG4gICAgICBEYXRlOiAnaXNzdWVEYXRlJyxcbiAgICAgIHJlZ2lvbjogJ3JlZ2lvbicsXG4gICAgICAvLyBsaWNlbnNlTnVtYmVyOiAnbGljZW5zZU51bWJlcicsXG4gICAgICBpc09sZEZvcm1hdExpY2Vuc2VOdW1iZXI6ICdpc09sZEZvcm1hdExpY2Vuc2VOdW1iZXInLFxuICAgICAgLy8gc2VyaWFsOiAnc2VyaWFsJyxcbiAgICAgIC8vIGxpY2Vuc2VUeXBlOiAnbGljZW5zZVR5cGUnLFxuICAgICAgY29sb3JfcG9pbnQ6ICdjb2xvclBvaW50JyxcbiAgICAgIGZhY2Vfc2NvcmU6ICdmYWNlU2NvcmUnLFxuICAgICAgc3BlY3VsYXI6ICdzcGVjdWxhclJhdGlvJyxcbiAgICAgIHN0YXJ0X3Q6ICdzdGFydFRpbWUnLFxuICAgICAgZW5kX3Q6ICdlbmRUaW1lJyxcbiAgICAgIGlkX3R5cGU6ICdpZFR5cGUnXG4gICAgfTtcbiAgICBsZXQgbGVnYWN5Rm9ybWF0ID0ge1xuICAgICAgLi4ub2NyUmVzdWx0XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBrZXlNYXBJZERyaXZlcikge1xuICAgICAgbGVnYWN5Rm9ybWF0W2tleV0gPSBsZWdhY3lGb3JtYXRba2V5TWFwSWREcml2ZXJba2V5XV07XG4gICAgfVxuXG4gICAgLy8g7KO866+867KI7Zi4IO2YleyLnSDrpqzthLTqsJIg7ZiV7IudIOuzgOqyvVxuICAgIC8vIGJpcnRoIOy2lOqwgFxuICAgIGlmIChvY3JSZXN1bHQubnVtYmVyICE9PSB1bmRlZmluZWQgJiYgb2NyUmVzdWx0Lm51bWJlci5sZW5ndGggPj0gNikgb2NyUmVzdWx0LmJpcnRoID0gb2NyUmVzdWx0Lm51bWJlci5zbGljZSgwLCA2KTtcbiAgICBpZiAob2NyUmVzdWx0Lm51bWJlciAhPT0gdW5kZWZpbmVkICYmIG9jclJlc3VsdC5udW1iZXIubGVuZ3RoID09PSAxMykgb2NyUmVzdWx0Lm51bWJlciA9IG9jclJlc3VsdC5udW1iZXIuc2xpY2UoMCwgNikgKyAnLScgKyBvY3JSZXN1bHQubnVtYmVyLnNsaWNlKDYsIDEzKTtlbHNlIG9jclJlc3VsdC5udW1iZXIgPSAnJztcbiAgICBpZiAob2NyUmVzdWx0LmlkVHlwZSA9PT0gJzInKSB7XG4gICAgICAvLyDqtaztmJUg66m07ZeI7KadIO2PrOuppyDtjJDsoJUgKGV4OiDsoJzso7wgMTMtMDAxMjM0LTEyIC0+IHRydWUpXG4gICAgICBjb25zdCByZWdleCA9IC9b6rCALe2eo10vZztcbiAgICAgIGxlZ2FjeUZvcm1hdC5pc09sZEZvcm1hdExpY2Vuc2VOdW1iZXIgPSAhIWxlZ2FjeUZvcm1hdC5saWNlbnNlTnVtYmVyLm1hdGNoKHJlZ2V4KTtcbiAgICAgIG9jclJlc3VsdC5pc09sZEZvcm1hdExpY2Vuc2VOdW1iZXIgPSBsZWdhY3lGb3JtYXQuaXNPbGRGb3JtYXRMaWNlbnNlTnVtYmVyO1xuICAgICAgaWYgKGxlZ2FjeUZvcm1hdC5pc09sZEZvcm1hdExpY2Vuc2VOdW1iZXIpIHtcbiAgICAgICAgLy8gdXNlYiBhcGkg7Y+s66mn7JeQIOunnuqyjCDrs4Dqsr0gKHRvOiDsoJzso7wtMTMtMDAxMjM0LTEyKVxuICAgICAgICBsZWdhY3lGb3JtYXQubGljZW5zZU51bWJlciA9IGxlZ2FjeUZvcm1hdC5saWNlbnNlTnVtYmVyLnJlcGxhY2UoJyAnLCAnLScpO1xuICAgICAgICBvY3JSZXN1bHQubGljZW5zZU51bWJlciA9IGxlZ2FjeUZvcm1hdC5saWNlbnNlTnVtYmVyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2xlZ2FjeUZvcm1hdCwgb2NyUmVzdWx0XTtcbiAgfVxuICBfX3BhcnNlUGFzc3BvcnQob2NyUmVzdWx0KSB7XG4gICAgY29uc3Qga2V5TWFwUGFzc3BvcnQgPSB7XG4gICAgICBDb21wbGV0ZWQ6ICdjb21wbGV0ZScsXG4gICAgICAvLyBuYW1lOiAnbmFtZScsXG4gICAgICAvLyBzdXJOYW1lOiAnc3VyTmFtZScsXG4gICAgICAvLyBnaXZlbk5hbWU6ICdnaXZlbk5hbWUnLFxuICAgICAgLy8gdHlwZTogJ3R5cGUnLFxuICAgICAgaXNzdWluZ19jb3VudHJ5OiAnaXNzdWluZ0NvdW50cnknLFxuICAgICAgcGFzc3BvcnRfbm86ICdwYXNzcG9ydE5vJyxcbiAgICAgIC8vIG5hdGlvbmFsaXR5OiAnbmF0aW9uYWxpdHknLFxuICAgICAgZGF0ZV9vZl9pc3N1ZTogJ2RhdGVPZklzc3VlJyxcbiAgICAgIC8vIHNleDogJ3NleCcsXG4gICAgICBkYXRlX29mX2V4cGlyeTogJ2RhdGVPZkV4cGlyeScsXG4gICAgICBwZXJzb25hbF9ubzogJ3BlcnNvbmFsTm8nLFxuICAgICAgLy8gbnVtYmVyOiAnbnVtYmVyJyxcbiAgICAgIGRhdGVfb2ZfYmlydGg6ICdkYXRlT2ZCaXJ0aCcsXG4gICAgICBuYW1lX2tvcjogJ25hbWVLb3InLFxuICAgICAgLy8gbXJ6MTogJ21yejEnLFxuICAgICAgLy8gbXJ6MjogJ21yejInLFxuICAgICAgY29sb3JfcG9pbnQ6ICdjb2xvclBvaW50JyxcbiAgICAgIGZhY2Vfc2NvcmU6ICdmYWNlU2NvcmUnLFxuICAgICAgc3BlY3VsYXI6ICdzcGVjdWxhclJhdGlvJyxcbiAgICAgIHN0YXJ0X3Q6ICdzdGFydFRpbWUnLFxuICAgICAgZW5kX3Q6ICdlbmRUaW1lJyxcbiAgICAgIGlkX3R5cGU6ICdpZFR5cGUnXG4gICAgfTtcbiAgICBsZXQgbGVnYWN5Rm9ybWF0ID0ge1xuICAgICAgLi4ub2NyUmVzdWx0XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBrZXlNYXBQYXNzcG9ydCkge1xuICAgICAgbGVnYWN5Rm9ybWF0W2tleV0gPSBsZWdhY3lGb3JtYXRba2V5TWFwUGFzc3BvcnRba2V5XV07XG4gICAgfVxuXG4gICAgLy8g7KO866+867KI7Zi4IO2YleyLnSDrpqzthLTqsJIg7ZiV7IudIOuzgOqyvVxuICAgIGlmIChvY3JSZXN1bHQubnVtYmVyICE9PSB1bmRlZmluZWQgJiYgb2NyUmVzdWx0Lm51bWJlci5sZW5ndGggPT09IDEzKSBvY3JSZXN1bHQubnVtYmVyID0gb2NyUmVzdWx0Lm51bWJlci5zbGljZSgwLCA2KSArICctJyArIG9jclJlc3VsdC5udW1iZXIuc2xpY2UoNiwgMTMpO2Vsc2Ugb2NyUmVzdWx0Lm51bWJlciA9ICcnO1xuICAgIHJldHVybiBbbGVnYWN5Rm9ybWF0LCBvY3JSZXN1bHRdO1xuICB9XG4gIF9fcGFyc2VBbGllbihvY3JSZXN1bHQpIHtcbiAgICBjb25zdCBrZXlNYXBQYXNzcG9ydCA9IHtcbiAgICAgIENvbXBsZXRlZDogJ2NvbXBsZXRlJyxcbiAgICAgIC8vIG5hbWU6ICduYW1lJyxcbiAgICAgIC8vIG51bWJlcjogJ251bWJlcicsXG4gICAgICBEYXRlOiAnaXNzdWVEYXRlJyxcbiAgICAgIC8vIG5hdGlvbmFsaXR5OiAnbmF0aW9uYWxpdHknLFxuICAgICAgLy8gdmlzYVR5cGU6ICd2aXNhVHlwZScsXG4gICAgICBuYW1lX2tvcjogJ25hbWVLb3InLFxuICAgICAgY29sb3JfcG9pbnQ6ICdjb2xvclBvaW50JyxcbiAgICAgIGZhY2Vfc2NvcmU6ICdmYWNlU2NvcmUnLFxuICAgICAgc3BlY3VsYXI6ICdzcGVjdWxhclJhdGlvJyxcbiAgICAgIHN0YXJ0X3Q6ICdzdGFydFRpbWUnLFxuICAgICAgZW5kX3Q6ICdlbmRUaW1lJyxcbiAgICAgIGlkX3R5cGU6ICdpZFR5cGUnXG4gICAgfTtcbiAgICBsZXQgbGVnYWN5Rm9ybWF0ID0ge1xuICAgICAgLi4ub2NyUmVzdWx0XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBrZXlNYXBQYXNzcG9ydCkge1xuICAgICAgbGVnYWN5Rm9ybWF0W2tleV0gPSBsZWdhY3lGb3JtYXRba2V5TWFwUGFzc3BvcnRba2V5XV07XG4gICAgfVxuXG4gICAgLy8g7KO866+867KI7Zi4IO2YleyLnSDrpqzthLTqsJIg7ZiV7IudIOuzgOqyvVxuICAgIGlmIChvY3JSZXN1bHQubnVtYmVyICE9PSB1bmRlZmluZWQgJiYgb2NyUmVzdWx0Lm51bWJlci5sZW5ndGggPT09IDEzKSBvY3JSZXN1bHQubnVtYmVyID0gb2NyUmVzdWx0Lm51bWJlci5zbGljZSgwLCA2KSArICctJyArIG9jclJlc3VsdC5udW1iZXIuc2xpY2UoNiwgMTMpO2Vsc2Ugb2NyUmVzdWx0Lm51bWJlciA9ICcnO1xuICAgIHJldHVybiBbbGVnYWN5Rm9ybWF0LCBvY3JSZXN1bHRdO1xuICB9XG4gIF9fcGFyc2VDcmVkaXQob2NyUmVzdWx0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgY29uc3QgcmVzdWx0U3BsaXQgPSBvY3JSZXN1bHQuc3BsaXQoJywnKTtcbiAgICBsZXQgcmVzdWx0SW5kZXggPSAwO1xuICAgIGlmIChyZXN1bHRJbmRleCA8IHJlc3VsdFNwbGl0Lmxlbmd0aCkgdGFyZ2V0LkNvbXBsZXRlZCA9IHJlc3VsdFNwbGl0W3Jlc3VsdEluZGV4XSwgcmVzdWx0SW5kZXgrKztcbiAgICBpZiAocmVzdWx0SW5kZXggPCByZXN1bHRTcGxpdC5sZW5ndGgpIHRhcmdldC5udW1iZXIgPSByZXN1bHRTcGxpdFtyZXN1bHRJbmRleF0sIHJlc3VsdEluZGV4Kys7XG4gICAgaWYgKHJlc3VsdEluZGV4IDwgcmVzdWx0U3BsaXQubGVuZ3RoKSB0YXJnZXQuZXhwX2RhdGUgPSByZXN1bHRTcGxpdFtyZXN1bHRJbmRleF0sIHJlc3VsdEluZGV4Kys7XG4gICAgcmV0dXJuIFt0YXJnZXQsIHRhcmdldF07XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBPY3JSZXN1bHRQYXJzZXIoKTsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQSxNQUFNQSxlQUFlLENBQUM7RUFBQUMsWUFBQTtJQUFBQyxlQUFBLHdCQUNKLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO0VBQUE7RUFDdExDLGNBQWNBLENBQUNDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUU7SUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQ0MsYUFBYSxDQUFDQyxRQUFRLENBQUNQLE9BQU8sQ0FBQyxFQUFFLE1BQU0sSUFBSVEsS0FBSyxDQUFDLHNDQUFzQyxDQUFDO0lBQ2xHLElBQUlDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDckIsSUFBSUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixRQUFRVixP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
