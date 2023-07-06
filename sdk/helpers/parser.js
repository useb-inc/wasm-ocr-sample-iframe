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

    // SSA 처리
    if (ssaMode && !!ssaResult) {
      this.__parseSsaResult(ssaResult, ssaRetryCount, ssaResultList, ocrResult, legacyFormat);
    }
    switch (ocrType) {
      case 'idcard':
      case 'driver':
      case 'idcard-ssa':
      case 'driver-ssa':
        this.__parseIdDriver(ocrResult, legacyFormat);
        break;
      case 'passport':
      case 'passport-ssa':
      case 'foreign-passport':
      case 'foreign-passport-ssa':
        this.__parsePassport(ocrResult, legacyFormat);
        break;
      case 'alien':
      case 'alien-ssa':
        this.__parseAlien(ocrResult, legacyFormat);
        break;
      case 'credit':
      case 'credit-ssa':
        this.__parseCredit(ocrResult, legacyFormat);
        break;
      default:
        throw new Error('Unsupported OCR type');
    }
    return {
      legacyFormat,
      newFormat: ocrResult
    };
  }
  __parseSsaResult(ssaResult, ssaRetryCount, ssaResultList, ocrResult, legacyFormat) {
    var ssaResultObj = this.__csvToObject(ssaResult);
    [ocrResult.id_truth, ocrResult.fd_confidence] = [ssaResultObj.truth, ssaResultObj.conf];
    ocrResult.id_truth_retry_count = ssaRetryCount;
    if (ssaResultList && ssaRetryCount > 0) {
      var truthResultDetail = [];
      for (var item of ssaResultList) {
        var tmpObj = this.__csvToObject(item);
        var truthResult = {
          id_truth: tmpObj.truth,
          fd_confidence: tmpObj.conf
        };
        truthResultDetail.push(truthResult);
      }
      ocrResult.id_truth_result_detail = truthResultDetail;
    }
    var keyMapSsaResult = {
      truth: 'id_truth',
      truthConfidence: 'fd_confidence',
      truthRetryCount: 'id_truth_retry_count',
      truthResultDetail: 'id_truth_result_detail'
    };
    this.__convertLegacyFormat(ocrResult, legacyFormat, keyMapSsaResult);
    if (ssaResultList && ssaRetryCount > 0) {
      var tmpResultDetail = [];
      for (var idx in legacyFormat.truthResultDetail) {
        var keyMapSsaResultDetail = {
          truth: 'id_truth',
          truthConfidence: 'fd_confidence'
        };
        var detailLegacyFormat = {};
        this.__convertLegacyFormat(legacyFormat.truthResultDetail[idx], detailLegacyFormat, keyMapSsaResultDetail);
        tmpResultDetail.push(detailLegacyFormat);
      }
      legacyFormat.truthResultDetail = tmpResultDetail;
    }
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
  __convertLegacyFormat(obj, legacyFormat, map) {
    for (var key in map) {
      legacyFormat[key] = typeof obj[map[key]] === 'object' ? _objectSpread({}, obj[map[key]]) : obj[map[key]];
    }
    return legacyFormat;
  }
  __getObjectValueWithDot(obj, key) {
    if (obj) {
      if (key.split('.').length === 1) {
        return obj[key];
      }
      var tmpKey = key.split('.')[0];
      var tmpKey2 = key.slice(tmpKey.length + 1, key.length);
      return this.__getObjectValueWithDot(obj[tmpKey], tmpKey2);
    }
  }
  __parseIdDriver(ocrResult, legacyFormat) {
    // 주민번호 형식 리턴값 형식 변경
    // birth 추가
    if (ocrResult.jumin !== undefined && ocrResult.jumin.length >= 6) {
      ocrResult.birth = ocrResult.jumin.slice(0, 6);
    }
    if (ocrResult.jumin !== undefined && ocrResult.jumin.length === 13) {
      ocrResult.jumin = ocrResult.jumin.slice(0, 6) + '-' + ocrResult.jumin.slice(6, 13);
    } else {
      ocrResult.jumin = '';
    }
    if (ocrResult.idType === '2') {
      // 구형 면허증 포멧 판정 (ex: 제주 13-001234-12 -> true)
      var regex = /[가-힣]/g;
      ocrResult.is_old_format_driver_number = !!ocrResult.driver_number.match(regex);
      if (ocrResult.is_old_format_driver_number) {
        // useb api 포멧에 맞게 변경 (to: 제주-13-001234-12)
        ocrResult.driver_number = ocrResult.driver_number.replace(' ', '-');
      }
    }
    var keyMapIdDriver = {
      Completed: 'complete',
      type: 'result_scan_type',
      name: 'name',
      number: 'jumin',
      Date: 'issued_date',
      region: 'region',
      licenseNumber: 'driver_number',
      isOldFormatLicenseNumber: 'is_old_format_driver_number',
      serial: 'driver_serial',
      licenseType: 'driver_type',
      color_point: 'color_point',
      face_score: 'found_face',
      specular: 'specular_ratio',
      start_t: 'start_time',
      end_t: 'end_time',
      id_type: 'result_scan_type'
    };
    this.__convertLegacyFormat(ocrResult, legacyFormat, keyMapIdDriver);
  }
  __parsePassport(ocrResult, legacyFormat) {
    // 주민번호 형식 리턴값 형식 변경
    if (ocrResult.jumin !== undefined && ocrResult.jumin.length === 13) {
      ocrResult.jumin = ocrResult.jumin.slice(0, 6) + '-' + ocrResult.jumin.slice(6, 13);
    } else {
      ocrResult.jumin = '';
    }
    var keyMapPassport = {
      Completed: 'complete',
      name: 'name',
      surName: 'sur_name',
      givenName: 'given_name',
      type: 'passport_type',
      issuing_country: 'issuing_country',
      passport_no: 'passport_number',
      nationality: 'nationality',
      date_of_issue: 'issued_date',
      sex: 'sex',
      date_of_expiry: 'expiry_date',
      personal_no: 'personal_number',
      number: 'jumin',
      date_of_birth: 'birthday',
      name_kor: 'name_kor',
      mrz1: 'mrz1',
      mrz2: 'mrz2',
      color_point: 'color_point',
      face_score: 'found_face',
      specular: 'specular_ratio',
      start_t: 'start_time',
      end_t: 'end_time',
      id_type: 'result_scan_type'
    };
    this.__convertLegacyFormat(ocrResult, legacyFormat, keyMapPassport);
  }
  __parseAlien(ocrResult, legacyFormat) {
    // 주민번호 형식 리턴값 형식 변경
    if (ocrResult.jumin !== undefined && ocrResult.jumin.length === 13) {
      ocrResult.jumin = ocrResult.jumin.slice(0, 6) + '-' + ocrResult.jumin.slice(6, 13);
    } else {
      ocrResult.jumin = '';
    }
    var keyMapAlien = {
      Completed: 'complete',
      name: 'name',
      number: 'jumin',
      Date: 'issued_date',
      nationality: 'nationality',
      visaType: 'visa_type',
      name_kor: 'name_kor',
      color_point: 'color_point',
      face_score: 'found_face',
      specular: 'specular_ratio',
      start_t: 'start_time',
      end_t: 'end_time',
      id_type: 'result_scan_type'
    };
    this.__convertLegacyFormat(ocrResult, legacyFormat, keyMapAlien);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy9wYXJzZXIuanMiLCJuYW1lcyI6WyJPY3JSZXN1bHRQYXJzZXIiLCJjb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0eSIsInBhcnNlT2NyUmVzdWx0Iiwib2NyVHlwZSIsInNzYU1vZGUiLCJvY3JSZXN1bHQiLCJzc2FSZXN1bHQiLCJzc2FSZXRyeUNvdW50Iiwic3NhUmVzdWx0TGlzdCIsIl9fb2NyVHlwZUxpc3QiLCJpbmNsdWRlcyIsIkVycm9yIiwibGVnYWN5Rm9ybWF0IiwibmV3Rm9ybWF0IiwiX19wYXJzZVNzYVJlc3VsdCIsIl9fcGFyc2VJZERyaXZlciIsIl9fcGFyc2VQYXNzcG9ydCIsIl9fcGFyc2VBbGllbiIsIl9fcGFyc2VDcmVkaXQiLCJzc2FSZXN1bHRPYmoiLCJfX2NzdlRvT2JqZWN0IiwiaWRfdHJ1dGgiLCJmZF9jb25maWRlbmNlIiwidHJ1dGgiLCJjb25mIiwiaWRfdHJ1dGhfcmV0cnlfY291bnQiLCJ0cnV0aFJlc3VsdERldGFpbCIsIml0ZW0iLCJ0bXBPYmoiLCJ0cnV0aFJlc3VsdCIsInB1c2giLCJpZF90cnV0aF9yZXN1bHRfZGV0YWlsIiwia2V5TWFwU3NhUmVzdWx0IiwidHJ1dGhDb25maWRlbmNlIiwidHJ1dGhSZXRyeUNvdW50IiwiX19jb252ZXJ0TGVnYWN5Rm9ybWF0IiwidG1wUmVzdWx0RGV0YWlsIiwiaWR4Iiwia2V5TWFwU3NhUmVzdWx0RGV0YWlsIiwiZGV0YWlsTGVnYWN5Rm9ybWF0Iiwic3RyIiwicGFpcnMiLCJzcGxpdCIsIm9iaiIsImkiLCJsZW5ndGgiLCJwYWlyIiwibWFwIiwia2V5IiwiX29iamVjdFNwcmVhZCIsIl9fZ2V0T2JqZWN0VmFsdWVXaXRoRG90IiwidG1wS2V5IiwidG1wS2V5MiIsInNsaWNlIiwianVtaW4iLCJ1bmRlZmluZWQiLCJiaXJ0aCIsImlkVHlwZSIsInJlZ2V4IiwiaXNfb2xkX2Zvcm1hdF9kcml2ZXJfbnVtYmVyIiwiZHJpdmVyX251bWJlciIsIm1hdGNoIiwicmVwbGFjZSIsImtleU1hcElkRHJpdmVyIiwiQ29tcGxldGVkIiwidHlwZSIsIm5hbWUiLCJudW1iZXIiLCJEYXRlIiwicmVnaW9uIiwibGljZW5zZU51bWJlciIsImlzT2xkRm9ybWF0TGljZW5zZU51bWJlciIsInNlcmlhbCIsImxpY2Vuc2VUeXBlIiwiY29sb3JfcG9pbnQiLCJmYWNlX3Njb3JlIiwic3BlY3VsYXIiLCJzdGFydF90IiwiZW5kX3QiLCJpZF90eXBlIiwia2V5TWFwUGFzc3BvcnQiLCJzdXJOYW1lIiwiZ2l2ZW5OYW1lIiwiaXNzdWluZ19jb3VudHJ5IiwicGFzc3BvcnRfbm8iLCJuYXRpb25hbGl0eSIsImRhdGVfb2ZfaXNzdWUiLCJzZXgiLCJkYXRlX29mX2V4cGlyeSIsInBlcnNvbmFsX25vIiwiZGF0ZV9vZl9iaXJ0aCIsIm5hbWVfa29yIiwibXJ6MSIsIm1yejIiLCJrZXlNYXBBbGllbiIsInZpc2FUeXBlIiwidGFyZ2V0IiwicmVzdWx0U3BsaXQiLCJyZXN1bHRJbmRleCIsImV4cF9kYXRlIl0sInNvdXJjZXMiOlsiaGVscGVycy9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyogZ2xvYmFsLW1vZHVsZSAqL1xuY2xhc3MgT2NyUmVzdWx0UGFyc2VyIHtcbiAgX19vY3JUeXBlTGlzdCA9IFsnaWRjYXJkJywgJ2RyaXZlcicsICdwYXNzcG9ydCcsICdmb3JlaWduLXBhc3Nwb3J0JywgJ2FsaWVuJywgJ2NyZWRpdCcsICdpZGNhcmQtc3NhJywgJ2RyaXZlci1zc2EnLCAncGFzc3BvcnQtc3NhJywgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJywgJ2FsaWVuLXNzYScsICdjcmVkaXQtc3NhJ107XG4gIHBhcnNlT2NyUmVzdWx0KG9jclR5cGUsIHNzYU1vZGUsIG9jclJlc3VsdCwgc3NhUmVzdWx0LCBzc2FSZXRyeUNvdW50LCBzc2FSZXN1bHRMaXN0KSB7XG4gICAgaWYgKCF0aGlzLl9fb2NyVHlwZUxpc3QuaW5jbHVkZXMob2NyVHlwZSkpIHRocm93IG5ldyBFcnJvcignUmVzdWx0UGFyc2VyIDo6IFVuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgbGV0IGxlZ2FjeUZvcm1hdCA9IHt9O1xuICAgIGxldCBuZXdGb3JtYXQgPSB7fTtcblxuICAgIC8vIFNTQSDsspjrpqxcbiAgICBpZiAoc3NhTW9kZSAmJiAhIXNzYVJlc3VsdCkge1xuICAgICAgdGhpcy5fX3BhcnNlU3NhUmVzdWx0KHNzYVJlc3VsdCwgc3NhUmV0cnlDb3VudCwgc3NhUmVzdWx0TGlzdCwgb2NyUmVzdWx0LCBsZWdhY3lGb3JtYXQpO1xuICAgIH1cbiAgICBzd2l0Y2ggKG9jclR5cGUpIHtcbiAgICAgIGNhc2UgJ2lkY2FyZCc6XG4gICAgICBjYXNlICdkcml2ZXInOlxuICAgICAgY2FzZSAnaWRjYXJkLXNzYSc6XG4gICAgICBjYXNlICdkcml2ZXItc3NhJzpcbiAgICAgICAgdGhpcy5fX3BhcnNlSWREcml2ZXIob2NyUmVzdWx0LCBsZWdhY3lGb3JtYXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgdGhpcy5fX3BhcnNlUGFzc3BvcnQob2NyUmVzdWx0LCBsZWdhY3lGb3JtYXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgIHRoaXMuX19wYXJzZUFsaWVuKG9jclJlc3VsdCwgbGVnYWN5Rm9ybWF0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgIHRoaXMuX19wYXJzZUNyZWRpdChvY3JSZXN1bHQsIGxlZ2FjeUZvcm1hdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBPQ1IgdHlwZScpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGVnYWN5Rm9ybWF0LFxuICAgICAgbmV3Rm9ybWF0OiBvY3JSZXN1bHRcbiAgICB9O1xuICB9XG4gIF9fcGFyc2VTc2FSZXN1bHQoc3NhUmVzdWx0LCBzc2FSZXRyeUNvdW50LCBzc2FSZXN1bHRMaXN0LCBvY3JSZXN1bHQsIGxlZ2FjeUZvcm1hdCkge1xuICAgIGNvbnN0IHNzYVJlc3VsdE9iaiA9IHRoaXMuX19jc3ZUb09iamVjdChzc2FSZXN1bHQpO1xuICAgIFtvY3JSZXN1bHQuaWRfdHJ1dGgsIG9jclJlc3VsdC5mZF9jb25maWRlbmNlXSA9IFtzc2FSZXN1bHRPYmoudHJ1dGgsIHNzYVJlc3VsdE9iai5jb25mXTtcbiAgICBvY3JSZXN1bHQuaWRfdHJ1dGhfcmV0cnlfY291bnQgPSBzc2FSZXRyeUNvdW50O1xuICAgIGlmIChzc2FSZXN1bHRMaXN0ICYmIHNzYVJldHJ5Q291bnQgPiAwKSB7XG4gICAgICBsZXQgdHJ1dGhSZXN1bHREZXRhaWwgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzc2FSZXN1bHRMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRtcE9iaiA9IHRoaXMuX19jc3ZUb09iamVjdChpdGVtKTtcbiAgICAgICAgY29uc3QgdHJ1dGhSZXN1bHQgPSB7XG4gICAgICAgICAgaWRfdHJ1dGg6IHRtcE9iai50cnV0aCxcbiAgICAgICAgICBmZF9jb25maWRlbmNlOiB0bXBPYmouY29uZlxuICAgICAgICB9O1xuICAgICAgICB0cnV0aFJlc3VsdERldGFpbC5wdXNoKHRydXRoUmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIG9jclJlc3VsdC5pZF90cnV0aF9yZXN1bHRfZGV0YWlsID0gdHJ1dGhSZXN1bHREZXRhaWw7XG4gICAgfVxuICAgIGNvbnN0IGtleU1hcFNzYVJlc3VsdCA9IHtcbiAgICAgIHRydXRoOiAnaWRfdHJ1dGgnLFxuICAgICAgdHJ1dGhDb25maWRlbmNlOiAnZmRfY29uZmlkZW5jZScsXG4gICAgICB0cnV0aFJldHJ5Q291bnQ6ICdpZF90cnV0aF9yZXRyeV9jb3VudCcsXG4gICAgICB0cnV0aFJlc3VsdERldGFpbDogJ2lkX3RydXRoX3Jlc3VsdF9kZXRhaWwnXG4gICAgfTtcbiAgICB0aGlzLl9fY29udmVydExlZ2FjeUZvcm1hdChvY3JSZXN1bHQsIGxlZ2FjeUZvcm1hdCwga2V5TWFwU3NhUmVzdWx0KTtcbiAgICBpZiAoc3NhUmVzdWx0TGlzdCAmJiBzc2FSZXRyeUNvdW50ID4gMCkge1xuICAgICAgY29uc3QgdG1wUmVzdWx0RGV0YWlsID0gW107XG4gICAgICBmb3IgKGNvbnN0IGlkeCBpbiBsZWdhY3lGb3JtYXQudHJ1dGhSZXN1bHREZXRhaWwpIHtcbiAgICAgICAgY29uc3Qga2V5TWFwU3NhUmVzdWx0RGV0YWlsID0ge1xuICAgICAgICAgIHRydXRoOiAnaWRfdHJ1dGgnLFxuICAgICAgICAgIHRydXRoQ29uZmlkZW5jZTogJ2ZkX2NvbmZpZGVuY2UnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGRldGFpbExlZ2FjeUZvcm1hdCA9IHt9O1xuICAgICAgICB0aGlzLl9fY29udmVydExlZ2FjeUZvcm1hdChsZWdhY3lGb3JtYXQudHJ1dGhSZXN1bHREZXRhaWxbaWR4XSwgZGV0YWlsTGVnYWN5Rm9ybWF0LCBrZXlNYXBTc2FSZXN1bHREZXRhaWwpO1xuICAgICAgICB0bXBSZXN1bHREZXRhaWwucHVzaChkZXRhaWxMZWdhY3lGb3JtYXQpO1xuICAgICAgfVxuICAgICAgbGVnYWN5Rm9ybWF0LnRydXRoUmVzdWx0RGV0YWlsID0gdG1wUmVzdWx0RGV0YWlsO1xuICAgIH1cbiAgfVxuICBfX2NzdlRvT2JqZWN0KHN0cikge1xuICAgIGxldCBwYWlycyA9IHN0ci5zcGxpdCgnOycpO1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG4gICAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIG9ialtwYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgX19jb252ZXJ0TGVnYWN5Rm9ybWF0KG9iaiwgbGVnYWN5Rm9ybWF0LCBtYXApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXApIHtcbiAgICAgIGxlZ2FjeUZvcm1hdFtrZXldID0gdHlwZW9mIG9ialttYXBba2V5XV0gPT09ICdvYmplY3QnID8ge1xuICAgICAgICAuLi5vYmpbbWFwW2tleV1dXG4gICAgICB9IDogb2JqW21hcFtrZXldXTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZ2FjeUZvcm1hdDtcbiAgfVxuICBfX2dldE9iamVjdFZhbHVlV2l0aERvdChvYmosIGtleSkge1xuICAgIGlmIChvYmopIHtcbiAgICAgIGlmIChrZXkuc3BsaXQoJy4nKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgICAgfVxuICAgICAgY29uc3QgdG1wS2V5ID0ga2V5LnNwbGl0KCcuJylbMF07XG4gICAgICBjb25zdCB0bXBLZXkyID0ga2V5LnNsaWNlKHRtcEtleS5sZW5ndGggKyAxLCBrZXkubGVuZ3RoKTtcbiAgICAgIHJldHVybiB0aGlzLl9fZ2V0T2JqZWN0VmFsdWVXaXRoRG90KG9ialt0bXBLZXldLCB0bXBLZXkyKTtcbiAgICB9XG4gIH1cbiAgX19wYXJzZUlkRHJpdmVyKG9jclJlc3VsdCwgbGVnYWN5Rm9ybWF0KSB7XG4gICAgLy8g7KO866+867KI7Zi4IO2YleyLnSDrpqzthLTqsJIg7ZiV7IudIOuzgOqyvVxuICAgIC8vIGJpcnRoIOy2lOqwgFxuICAgIGlmIChvY3JSZXN1bHQuanVtaW4gIT09IHVuZGVmaW5lZCAmJiBvY3JSZXN1bHQuanVtaW4ubGVuZ3RoID49IDYpIHtcbiAgICAgIG9jclJlc3VsdC5iaXJ0aCA9IG9jclJlc3VsdC5qdW1pbi5zbGljZSgwLCA2KTtcbiAgICB9XG4gICAgaWYgKG9jclJlc3VsdC5qdW1pbiAhPT0gdW5kZWZpbmVkICYmIG9jclJlc3VsdC5qdW1pbi5sZW5ndGggPT09IDEzKSB7XG4gICAgICBvY3JSZXN1bHQuanVtaW4gPSBvY3JSZXN1bHQuanVtaW4uc2xpY2UoMCwgNikgKyAnLScgKyBvY3JSZXN1bHQuanVtaW4uc2xpY2UoNiwgMTMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvY3JSZXN1bHQuanVtaW4gPSAnJztcbiAgICB9XG4gICAgaWYgKG9jclJlc3VsdC5pZFR5cGUgPT09ICcyJykge1xuICAgICAgLy8g6rWs7ZiVIOuptO2XiOymnSDtj6zrqacg7YyQ7KCVIChleDog7KCc7KO8IDEzLTAwMTIzNC0xMiAtPiB0cnVlKVxuICAgICAgY29uc3QgcmVnZXggPSAvW+qwgC3tnqNdL2c7XG4gICAgICBvY3JSZXN1bHQuaXNfb2xkX2Zvcm1hdF9kcml2ZXJfbnVtYmVyID0gISFvY3JSZXN1bHQuZHJpdmVyX251bWJlci5tYXRjaChyZWdleCk7XG4gICAgICBpZiAob2NyUmVzdWx0LmlzX29sZF9mb3JtYXRfZHJpdmVyX251bWJlcikge1xuICAgICAgICAvLyB1c2ViIGFwaSDtj6zrqafsl5Ag66ee6rKMIOuzgOqyvSAodG86IOygnOyjvC0xMy0wMDEyMzQtMTIpXG4gICAgICAgIG9jclJlc3VsdC5kcml2ZXJfbnVtYmVyID0gb2NyUmVzdWx0LmRyaXZlcl9udW1iZXIucmVwbGFjZSgnICcsICctJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGtleU1hcElkRHJpdmVyID0ge1xuICAgICAgQ29tcGxldGVkOiAnY29tcGxldGUnLFxuICAgICAgdHlwZTogJ3Jlc3VsdF9zY2FuX3R5cGUnLFxuICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgbnVtYmVyOiAnanVtaW4nLFxuICAgICAgRGF0ZTogJ2lzc3VlZF9kYXRlJyxcbiAgICAgIHJlZ2lvbjogJ3JlZ2lvbicsXG4gICAgICBsaWNlbnNlTnVtYmVyOiAnZHJpdmVyX251bWJlcicsXG4gICAgICBpc09sZEZvcm1hdExpY2Vuc2VOdW1iZXI6ICdpc19vbGRfZm9ybWF0X2RyaXZlcl9udW1iZXInLFxuICAgICAgc2VyaWFsOiAnZHJpdmVyX3NlcmlhbCcsXG4gICAgICBsaWNlbnNlVHlwZTogJ2RyaXZlcl90eXBlJyxcbiAgICAgIGNvbG9yX3BvaW50OiAnY29sb3JfcG9pbnQnLFxuICAgICAgZmFjZV9zY29yZTogJ2ZvdW5kX2ZhY2UnLFxuICAgICAgc3BlY3VsYXI6ICdzcGVjdWxhcl9yYXRpbycsXG4gICAgICBzdGFydF90OiAnc3RhcnRfdGltZScsXG4gICAgICBlbmRfdDogJ2VuZF90aW1lJyxcbiAgICAgIGlkX3R5cGU6ICdyZXN1bHRfc2Nhbl90eXBlJ1xuICAgIH07XG4gICAgdGhpcy5fX2NvbnZlcnRMZWdhY3lGb3JtYXQob2NyUmVzdWx0LCBsZWdhY3lGb3JtYXQsIGtleU1hcElkRHJpdmVyKTtcbiAgfVxuICBfX3BhcnNlUGFzc3BvcnQob2NyUmVzdWx0LCBsZWdhY3lGb3JtYXQpIHtcbiAgICAvLyDso7zrr7zrsojtmLgg7ZiV7IudIOumrO2EtOqwkiDtmJXsi50g67OA6rK9XG4gICAgaWYgKG9jclJlc3VsdC5qdW1pbiAhPT0gdW5kZWZpbmVkICYmIG9jclJlc3VsdC5qdW1pbi5sZW5ndGggPT09IDEzKSB7XG4gICAgICBvY3JSZXN1bHQuanVtaW4gPSBvY3JSZXN1bHQuanVtaW4uc2xpY2UoMCwgNikgKyAnLScgKyBvY3JSZXN1bHQuanVtaW4uc2xpY2UoNiwgMTMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvY3JSZXN1bHQuanVtaW4gPSAnJztcbiAgICB9XG4gICAgY29uc3Qga2V5TWFwUGFzc3BvcnQgPSB7XG4gICAgICBDb21wbGV0ZWQ6ICdjb21wbGV0ZScsXG4gICAgICBuYW1lOiAnbmFtZScsXG4gICAgICBzdXJOYW1lOiAnc3VyX25hbWUnLFxuICAgICAgZ2l2ZW5OYW1lOiAnZ2l2ZW5fbmFtZScsXG4gICAgICB0eXBlOiAncGFzc3BvcnRfdHlwZScsXG4gICAgICBpc3N1aW5nX2NvdW50cnk6ICdpc3N1aW5nX2NvdW50cnknLFxuICAgICAgcGFzc3BvcnRfbm86ICdwYXNzcG9ydF9udW1iZXInLFxuICAgICAgbmF0aW9uYWxpdHk6ICduYXRpb25hbGl0eScsXG4gICAgICBkYXRlX29mX2lzc3VlOiAnaXNzdWVkX2RhdGUnLFxuICAgICAgc2V4OiAnc2V4JyxcbiAgICAgIGRhdGVfb2ZfZXhwaXJ5OiAnZXhwaXJ5X2RhdGUnLFxuICAgICAgcGVyc29uYWxfbm86ICdwZXJzb25hbF9udW1iZXInLFxuICAgICAgbnVtYmVyOiAnanVtaW4nLFxuICAgICAgZGF0ZV9vZl9iaXJ0aDogJ2JpcnRoZGF5JyxcbiAgICAgIG5hbWVfa29yOiAnbmFtZV9rb3InLFxuICAgICAgbXJ6MTogJ21yejEnLFxuICAgICAgbXJ6MjogJ21yejInLFxuICAgICAgY29sb3JfcG9pbnQ6ICdjb2xvcl9wb2ludCcsXG4gICAgICBmYWNlX3Njb3JlOiAnZm91bmRfZmFjZScsXG4gICAgICBzcGVjdWxhcjogJ3NwZWN1bGFyX3JhdGlvJyxcbiAgICAgIHN0YXJ0X3Q6ICdzdGFydF90aW1lJyxcbiAgICAgIGVuZF90OiAnZW5kX3RpbWUnLFxuICAgICAgaWRfdHlwZTogJ3Jlc3VsdF9zY2FuX3R5cGUnXG4gICAgfTtcbiAgICB0aGlzLl9fY29udmVydExlZ2FjeUZvcm1hdChvY3JSZXN1bHQsIGxlZ2FjeUZvcm1hdCwga2V5TWFwUGFzc3BvcnQpO1xuICB9XG4gIF9fcGFyc2VBbGllbihvY3JSZXN1bHQsIGxlZ2FjeUZvcm1hdCkge1xuICAgIC8vIOyjvOuvvOuyiO2YuCDtmJXsi50g66as7YS06rCSIO2YleyLnSDrs4Dqsr1cbiAgICBpZiAob2NyUmVzdWx0Lmp1bWluICE9PSB1bmRlZmluZWQgJiYgb2NyUmVzdWx0Lmp1bWluLmxlbmd0aCA9PT0gMTMpIHtcbiAgICAgIG9jclJlc3VsdC5qdW1pbiA9IG9jclJlc3VsdC5qdW1pbi5zbGljZSgwLCA2KSArICctJyArIG9jclJlc3VsdC5qdW1pbi5zbGljZSg2LCAxMyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9jclJlc3VsdC5qdW1pbiA9ICcnO1xuICAgIH1cbiAgICBjb25zdCBrZXlNYXBBbGllbiA9IHtcbiAgICAgIENvbXBsZXRlZDogJ2NvbXBsZXRlJyxcbiAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgIG51bWJlcjogJ2p1bWluJyxcbiAgICAgIERhdGU6ICdpc3N1ZWRfZGF0ZScsXG4gICAgICBuYXRpb25hbGl0eTogJ25hdGlvbmFsaXR5JyxcbiAgICAgIHZpc2FUeXBlOiAndmlzYV90eXBlJyxcbiAgICAgIG5hbWVfa29yOiAnbmFtZV9rb3InLFxuICAgICAgY29sb3JfcG9pbnQ6ICdjb2xvcl9wb2ludCcsXG4gICAgICBmYWNlX3Njb3JlOiAnZm91bmRfZmFjZScsXG4gICAgICBzcGVjdWxhcjogJ3NwZWN1bGFyX3JhdGlvJyxcbiAgICAgIHN0YXJ0X3Q6ICdzdGFydF90aW1lJyxcbiAgICAgIGVuZF90OiAnZW5kX3RpbWUnLFxuICAgICAgaWRfdHlwZTogJ3Jlc3VsdF9zY2FuX3R5cGUnXG4gICAgfTtcbiAgICB0aGlzLl9fY29udmVydExlZ2FjeUZvcm1hdChvY3JSZXN1bHQsIGxlZ2FjeUZvcm1hdCwga2V5TWFwQWxpZW4pO1xuICB9XG4gIF9fcGFyc2VDcmVkaXQob2NyUmVzdWx0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgY29uc3QgcmVzdWx0U3BsaXQgPSBvY3JSZXN1bHQuc3BsaXQoJywnKTtcbiAgICBsZXQgcmVzdWx0SW5kZXggPSAwO1xuICAgIGlmIChyZXN1bHRJbmRleCA8IHJlc3VsdFNwbGl0Lmxlbmd0aCkgdGFyZ2V0LkNvbXBsZXRlZCA9IHJlc3VsdFNwbGl0W3Jlc3VsdEluZGV4XSwgcmVzdWx0SW5kZXgrKztcbiAgICBpZiAocmVzdWx0SW5kZXggPCByZXN1bHRTcGxpdC5sZW5ndGgpIHRhcmdldC5udW1iZXIgPSByZXN1bHRTcGxpdFtyZXN1bHRJbmRleF0sIHJlc3VsdEluZGV4Kys7XG4gICAgaWYgKHJlc3VsdEluZGV4IDwgcmVzdWx0U3BsaXQubGVuZ3RoKSB0YXJnZXQuZXhwX2RhdGUgPSByZXN1bHRTcGxpdFtyZXN1bHRJbmRleF0sIHJlc3VsdEluZGV4Kys7XG4gICAgcmV0dXJuIFt0YXJnZXQsIHRhcmdldF07XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBPY3JSZXN1bHRQYXJzZXIoKTsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQSxNQUFNQSxlQUFlLENBQUM7RUFBQUMsWUFBQTtJQUFBQyxlQUFBLHdCQUNKLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO0VBQUE7RUFDdExDLGNBQWNBLENBQUNDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUU7SUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQ0MsYUFBYSxDQUFDQyxRQUFRLENBQUNQLE9BQU8sQ0FBQyxFQUFFLE1BQU0sSUFBSVEsS0FBSyxDQUFDLHNDQUFzQyxDQUFDO0lBQ2xHLElBQUlDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDckIsSUFBSUMsU0FBUyxHQUFHLENBQUMsQ0FBQzs7SUFFbEI7SUFDQSxJQUFJVCxPQUFPLElBQUksQ0FBQyxDQUFDRSxTQUFTLEVBQUU7TUFDMUIsSUFBSSxDQUFDUSxnQkFBZ0IsQ0FBQ1IsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUgsU0FBUyxFQUFFTyxZQUFZLENBQUM7SUFDekY7SUFDQSxRQUFRVCxPQUFPO01BQ2IsS0FBSyxRQUFRO01BQ2IsS0FBSyxRQUFRO01BQ2IsS0FBSyxZQUFZO01BQ2pCLEtBQUssWUFBWTtRQUNmLElBQUksQ0FBQ1ksZUFBZSxDQUFD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
