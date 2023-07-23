function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable */

import objectUtil from './object-util.js';

/* global-module */
class OcrResultParser {
  constructor() {
    _defineProperty(this, "__ocrTypeList", ['idcard', 'driver', 'passport', 'foreign-passport', 'alien', 'credit', 'idcard-ssa', 'driver-ssa', 'passport-ssa', 'foreign-passport-ssa', 'alien-ssa', 'credit-ssa']);
    _defineProperty(this, "MASK_INFO", ['rect_id_issue_date', 'rect_id_number', 'rect_kor_personal_number', 'rect_license_number', 'rect_overseas_residents', 'rect_passport_jumin_number', 'rect_passport_number', 'rect_passport_number_mrz']);
    _defineProperty(this, "RESULT_SCAN_TYPE_MAP", {
      RESIDENT_REGISTRATION: '1',
      DRIVER_LICENSE: '2',
      PASSPORT: '3',
      PASSPORT_OVERSEA: '4',
      // TODO 현재 SERVER SDK 구분안함
      ALIEN_REGISTRATION: '5',
      ALIEN_REGISTRATION_1: '5-1',
      // TODO 현재 SERVER SDK 구분안함
      ALIEN_REGISTRATION_2: '5-2',
      // TODO 현재 SERVER SDK 구분안함
      ALIEN_REGISTRATION_3: '5-3' // TODO 현재 SERVER SDK 구분안함
    });
    _defineProperty(this, "RESULT_MASKING_TYPE_MAP", {
      1: 'kor',
      2: 'driver',
      3: 'passport',
      4: 'passport-oversea',
      // TODO 현재 SERVER SDK 구분안함
      5: 'alien'
    });
  }
  parseOcrResult(ocrType, ssaMode, ocrResult) {
    if (!this.__ocrTypeList.includes(ocrType)) throw new Error('ResultParser :: Unsupported OCR type');
    var legacyFormat = {},
      newFormat = {},
      maskInfo = {},
      base64ImageResult = {};

    // base64 처리
    this.__parseBase64ImageResult(ocrResult, base64ImageResult);
    switch (ocrType) {
      case 'idcard':
      case 'driver':
      case 'idcard-ssa':
      case 'driver-ssa':
        var result = this.__parseIdDriver(ocrResult);
        _.assign(newFormat, result.newFormat);
        _.assign(legacyFormat, result.legacyFormat);
        _.assign(maskInfo, result.maskInfo);
        break;
      case 'passport':
      case 'passport-ssa':
      case 'foreign-passport':
      case 'foreign-passport-ssa':
        var passport_result = this.__parsePassport(ocrResult); // prettier-ignore
        _.assign(newFormat, passport_result.newFormat);
        _.assign(legacyFormat, passport_result.legacyFormat);
        _.assign(maskInfo, passport_result.maskInfo);
        break;
      case 'alien':
      case 'alien-ssa':
        var alien_result = this.__parseAlien(ocrResult); // prettier-ignore
        _.assign(newFormat, alien_result.newFormat);
        _.assign(legacyFormat, alien_result.legacyFormat);
        _.assign(maskInfo, alien_result.maskInfo);
        break;
      case 'credit':
      case 'credit-ssa':
        this.__parseCredit(ocrResult, legacyFormat, newFormat);
        break;
      default:
        throw new Error('Unsupported OCR type');
    }

    // SSA 처리
    if (!ssaMode) {
      delete legacyFormat.truth;
      delete legacyFormat.truthConfidence;
      delete legacyFormat.truthRetryCount;
      delete newFormat.id_truth;
      delete newFormat.fd_confidence;
      delete newFormat.id_truth_retry_count;
    }
    return {
      legacyFormat,
      newFormat,
      base64ImageResult,
      maskInfo
    };
  }
  __parseBase64ImageResult(ocrResult, base64ImageResult) {
    if (ocrResult.image_base64_mask && !ocrResult.image_base64_mask.startsWith('data:image')) {
      ocrResult.image_base64_mask = 'data:image/jpeg;base64,' + ocrResult.image_base64_mask;
    }
    if (ocrResult.image_base64_face && !ocrResult.image_base64_face.startsWith('data:image')) {
      ocrResult.image_base64_face = 'data:image/jpeg;base64,' + ocrResult.image_base64_face;
    }
    var newFormatKeyMapBase64Image = {
      image_base64_mask: 'ocr_masking_image',
      image_base64_face: 'ocr_face_image'
    };
    this.__convertServerToWasmFormat(ocrResult, base64ImageResult, newFormatKeyMapBase64Image);
  }
  __convertLegacyFormat(obj, legacyFormat, map) {
    for (var key in map) {
      legacyFormat[key] = typeof obj[map[key]] === 'object' ? _objectSpread({}, obj[map[key]]) : obj[map[key]];
    }
    return legacyFormat;
  }
  __convertServerToWasmFormat(obj, wasmFormat, map) {
    for (var key in map) {
      var targetValue = objectUtil.getObjectValueWithDot(obj, key);
      var targetObj = {};
      objectUtil.makeObjectWithDot(targetObj, map[key], targetValue);
      objectUtil.objectDeepMerge(wasmFormat, targetObj);
    }
    return wasmFormat;
  }

  /**
   * @param {*} ocrResult
   * @return { newFormat, legacyFormat, maskInfo }
   */
  __parseIdDriver(ocrResult) {
    var _ref, _flat$fd_confidence;
    // TODO wasm에서 지원해주는 idType 값이 없어 임의 매핑 (해외 여권이랑 외국인등록증 구분안되는 문제 있음)
    var idType = this.RESULT_SCAN_TYPE_MAP[ocrResult.result_scan_type];
    var flat = this.flatObj(ocrResult);

    // 주민번호 형식 000000-0000000
    var jumin = this.getIdNumberFormat(flat.jumin);

    // new format ##########################
    // id 객체에서 flat 하게 만들 대상들
    var newFormatKeys = ['complete', 'name', 'jumin', 'issued_date', 'region', 'found_face', 'specular_ratio', 'id_truth', 'fd_confidence'];
    var newFormat = _.pick(flat, newFormatKeys);
    newFormat.complete = newFormat.complete + '';
    newFormat.jumin = jumin;
    newFormat.id_truth_retry_count = 0;
    newFormat.result_scan_type = idType;
    newFormat.fd_confidence = (_ref = ((_flat$fd_confidence = flat.fd_confidence) === null || _flat$fd_confidence === void 0 ? void 0 : _flat$fd_confidence.toFixed(3)) + '') !== null && _ref !== void 0 ? _ref : '';
    newFormat.found_face = flat.found_face + '';
    newFormat.specular_ratio = flat.specular_ratio + '';

    // 주민등록증 추가 정보 주입
    if (idType === '1') newFormat.overseas_resident = 'false';

    // 주민번호 형식 리턴값 형식 변경 - birth 추가 // TODO : 여권은 birthday?
    newFormat.birth = jumin.length >= 6 ? jumin.slice(0, 6) : '';

    // 운전면허증일때 추가 정보 주입
    if (idType === '2') {
      var {
        value
      } = this.getDriverLicense(flat.driver_number); // prettier-ignore
      // newFormat.is_old_format_driver_number = isOldFormat;
      newFormat.driver_number = value;
      newFormat.driver_serial = flat.driver_serial;
      newFormat.driver_type = flat.driver_type;
    }

    // legacy format ##########################
    var legacyFormat = {
      Completed: newFormat.complete,
      type: idType,
      name: flat.name,
      number: jumin,
      Date: flat.issued_date,
      region: flat.region,
      truth: flat.id_truth,
      truthConfidence: newFormat.fd_confidence,
      truthRetryCount: 0,
      face_score: newFormat.found_face,
      specular: newFormat.specular_ratio,
      id_type: idType
    };

    // 운전면허증일때 추가 정보 주입
    legacyFormat.licenseNumber = newFormat.driver_number;
    legacyFormat.serial = newFormat.driver_serial;
    legacyFormat.licenseType = newFormat.driver_type;
    return {
      newFormat,
      legacyFormat,
      maskInfo: this.getMaskInfo(flat, idType)
    };
  }
  __parsePassport(ocrResult) {
    var _ref2, _flat$fd_confidence2;
    // TODO wasm에서 지원해주는 idType 값이 없어 임의 매핑 (해외 여권이랑 외국인등록증 구분안되는 문제 있음)
    var idType = this.RESULT_SCAN_TYPE_MAP[ocrResult.result_scan_type];
    var flat = this.flatObj(ocrResult);

    // 주민번호 형식 000000-0000000
    var jumin = this.getIdNumberFormat(flat.jumin);

    // new format ##########################
    // id 객체에서 flat 하게 만들 대상들
    // prettier-ignore
    var newFormatKeys = ['complete', 'name', 'sur_name', 'given_name', 'passport_type', 'issuing_country', 'passport_number', 'nationality', 'issued_date', 'sex', 'expiry_date', 'personal_number', 'jumin', 'birthday', 'name_kor', 'color_point', 'found_face', 'specular_ratio', 'mrz1', 'mrz2', 'id_truth', 'fd_confidence'];
    var newFormat = _.pick(flat, newFormatKeys);
    newFormat.complete = newFormat.complete + '';
    newFormat.jumin = jumin;
    newFormat.id_truth_retry_count = 0;
    newFormat.result_scan_type = idType;
    newFormat.fd_confidence = (_ref2 = ((_flat$fd_confidence2 = flat.fd_confidence) === null || _flat$fd_confidence2 === void 0 ? void 0 : _flat$fd_confidence2.toFixed(3)) + '') !== null && _ref2 !== void 0 ? _ref2 : '';
    newFormat.found_face = flat.found_face + '';
    newFormat.specular_ratio = flat.specular_ratio + '';

    // legacy format ##########################
    var legacyFormat = {
      Completed: newFormat.complete,
      name: flat.name,
      surName: flat.sur_name,
      givenName: flat.given_name,
      type: flat.passport_type,
      issuing_country: flat.issuing_country,
      passport_no: flat.passport_number,
      nationality: flat.nationality,
      date_of_issue: flat.issued_date,
      sex: flat.sex,
      date_of_expiry: flat.expiry_date,
      personal_no: flat.personal_number,
      number: jumin,
      date_of_birth: flat.birthday,
      name_kor: flat.name_kor,
      mrz1: flat.mrz1,
      mrz2: flat.mrz2,
      face_score: newFormat.found_face,
      specular: newFormat.specular_ratio,
      id_type: idType,
      truth: flat.id_truth,
      truthConfidence: newFormat.fd_confidence,
      truthRetryCount: 0
    };
    return {
      newFormat,
      legacyFormat,
      maskInfo: this.getMaskInfo(flat, idType)
    };
  }
  __parseAlien(ocrResult) {
    var _ref3, _flat$fd_confidence3, _flat$nationality, _flat$visa_type, _flat$name_kor;
    // TODO wasm에서 지원해주는 idType 값이 없어 임의 매핑 (해외 여권이랑 외국인등록증 구분안되는 문제 있음)
    var idType = this.RESULT_SCAN_TYPE_MAP[ocrResult.result_scan_type];
    var defaultObj = {
      nationality: '',
      visa_type: '',
      name_kor: ''
    };
    var flat = _.assign(defaultObj, this.flatObj(ocrResult));

    // 주민번호 형식 000000-0000000
    var jumin = this.getIdNumberFormat(flat.jumin);

    // new format ##########################
    // id 객체에서 flat 하게 만들 대상들
    var newFormatKeys = ['complete', 'name', 'jumin', 'issued_date', 'nationality', 'visa_type', 'name_kor', 'found_face', 'specular_ratio', 'id_truth', 'fd_confidence'];
    var newFormat = _.pick(flat, newFormatKeys);
    newFormat.complete = newFormat.complete + '';
    newFormat.jumin = jumin;
    newFormat.id_truth_retry_count = 0;
    newFormat.result_scan_type = idType;
    newFormat.fd_confidence = (_ref3 = ((_flat$fd_confidence3 = flat.fd_confidence) === null || _flat$fd_confidence3 === void 0 ? void 0 : _flat$fd_confidence3.toFixed(3)) + '') !== null && _ref3 !== void 0 ? _ref3 : '';
    newFormat.found_face = flat.found_face + '';
    newFormat.specular_ratio = flat.specular_ratio + '';
    var legacyFormat = {
      Completed: newFormat.complete,
      name: flat.name,
      number: jumin,
      Date: flat.issued_date,
      nationality: (_flat$nationality = flat.nationality) !== null && _flat$nationality !== void 0 ? _flat$nationality : '',
      visaType: (_flat$visa_type = flat.visa_type) !== null && _flat$visa_type !== void 0 ? _flat$visa_type : '',
      name_kor: (_flat$name_kor = flat.name_kor) !== null && _flat$name_kor !== void 0 ? _flat$name_kor : '',
      face_score: newFormat.found_face,
      specular: newFormat.specular_ratio,
      id_type: idType,
      truth: flat.id_truth,
      truthConfidence: newFormat.fd_confidence,
      truthRetryCount: 0
    };
    return {
      newFormat,
      legacyFormat,
      maskInfo: this.getMaskInfo(flat, idType)
    };
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
  getMaskInfo(obj, idType) {
    var result = {
      type: this.RESULT_MASKING_TYPE_MAP[idType + '']
    };
    this.MASK_INFO.forEach(el => {
      if (_.has(obj, el) && obj[el] !== '0,0,0,0') {
        result[el] = obj[el];
      }
    });
    return result;
  }
  getDriverLicense(value) {
    var _value;
    // 구형 면허증 포멧 판정 (ex: 제주 13-001234-12 -> true)
    var regex = /[가-힣]/g;
    var isOldFormat = (_value = value) === null || _value === void 0 ? void 0 : _value.match(regex);
    if (isOldFormat) value = value.replace(' ', '-');
    return {
      isOldFormat,
      value
    };
  }

  // 주민번호 형식 리턴값 형식 변경
  getIdNumberFormat(value) {
    if ((value === null || value === void 0 ? void 0 : value.length) === 14) return value;
    return (value === null || value === void 0 ? void 0 : value.length) === 13 ? value.slice(0, 6) + '-' + value.slice(6, 13) : '';
  }
  flatObj(obj) {
    var result = {};
    for (var key in obj) {
      var value = obj[key];
      if (value instanceof Object && !Array.isArray(value)) {
        var innerResult = this.flatObj(value);
        _.assign(result, innerResult);
      } else result[key] = value;
    }
    return result;
  }
}
export default new OcrResultParser();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy91c2ViLW9jci1hcGktcGFyc2VyLmpzIiwibmFtZXMiOlsib2JqZWN0VXRpbCIsIk9jclJlc3VsdFBhcnNlciIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiUkVTSURFTlRfUkVHSVNUUkFUSU9OIiwiRFJJVkVSX0xJQ0VOU0UiLCJQQVNTUE9SVCIsIlBBU1NQT1JUX09WRVJTRUEiLCJBTElFTl9SRUdJU1RSQVRJT04iLCJBTElFTl9SRUdJU1RSQVRJT05fMSIsIkFMSUVOX1JFR0lTVFJBVElPTl8yIiwiQUxJRU5fUkVHSVNUUkFUSU9OXzMiLCJwYXJzZU9jclJlc3VsdCIsIm9jclR5cGUiLCJzc2FNb2RlIiwib2NyUmVzdWx0IiwiX19vY3JUeXBlTGlzdCIsImluY2x1ZGVzIiwiRXJyb3IiLCJsZWdhY3lGb3JtYXQiLCJuZXdGb3JtYXQiLCJtYXNrSW5mbyIsImJhc2U2NEltYWdlUmVzdWx0IiwiX19wYXJzZUJhc2U2NEltYWdlUmVzdWx0IiwicmVzdWx0IiwiX19wYXJzZUlkRHJpdmVyIiwiXyIsImFzc2lnbiIsInBhc3Nwb3J0X3Jlc3VsdCIsIl9fcGFyc2VQYXNzcG9ydCIsImFsaWVuX3Jlc3VsdCIsIl9fcGFyc2VBbGllbiIsIl9fcGFyc2VDcmVkaXQiLCJ0cnV0aCIsInRydXRoQ29uZmlkZW5jZSIsInRydXRoUmV0cnlDb3VudCIsImlkX3RydXRoIiwiZmRfY29uZmlkZW5jZSIsImlkX3RydXRoX3JldHJ5X2NvdW50IiwiaW1hZ2VfYmFzZTY0X21hc2siLCJzdGFydHNXaXRoIiwiaW1hZ2VfYmFzZTY0X2ZhY2UiLCJuZXdGb3JtYXRLZXlNYXBCYXNlNjRJbWFnZSIsIl9fY29udmVydFNlcnZlclRvV2FzbUZvcm1hdCIsIl9fY29udmVydExlZ2FjeUZvcm1hdCIsIm9iaiIsIm1hcCIsImtleSIsIl9vYmplY3RTcHJlYWQiLCJ3YXNtRm9ybWF0IiwidGFyZ2V0VmFsdWUiLCJnZXRPYmplY3RWYWx1ZVdpdGhEb3QiLCJ0YXJnZXRPYmoiLCJtYWtlT2JqZWN0V2l0aERvdCIsIm9iamVjdERlZXBNZXJnZSIsIl9yZWYiLCJfZmxhdCRmZF9jb25maWRlbmNlIiwiaWRUeXBlIiwiUkVTVUxUX1NDQU5fVFlQRV9NQVAiLCJyZXN1bHRfc2Nhbl90eXBlIiwiZmxhdCIsImZsYXRPYmoiLCJqdW1pbiIsImdldElkTnVtYmVyRm9ybWF0IiwibmV3Rm9ybWF0S2V5cyIsInBpY2siLCJjb21wbGV0ZSIsInRvRml4ZWQiLCJmb3VuZF9mYWNlIiwic3BlY3VsYXJfcmF0aW8iLCJvdmVyc2Vhc19yZXNpZGVudCIsImJpcnRoIiwibGVuZ3RoIiwic2xpY2UiLCJ2YWx1ZSIsImdldERyaXZlckxpY2Vuc2UiLCJkcml2ZXJfbnVtYmVyIiwiZHJpdmVyX3NlcmlhbCIsImRyaXZlcl90eXBlIiwiQ29tcGxldGVkIiwidHlwZSIsIm5hbWUiLCJudW1iZXIiLCJEYXRlIiwiaXNzdWVkX2RhdGUiLCJyZWdpb24iLCJmYWNlX3Njb3JlIiwic3BlY3VsYXIiLCJpZF90eXBlIiwibGljZW5zZU51bWJlciIsInNlcmlhbCIsImxpY2Vuc2VUeXBlIiwiZ2V0TWFza0luZm8iLCJfcmVmMiIsIl9mbGF0JGZkX2NvbmZpZGVuY2UyIiwic3VyTmFtZSIsInN1cl9uYW1lIiwiZ2l2ZW5OYW1lIiwiZ2l2ZW5fbmFtZSIsInBhc3Nwb3J0X3R5cGUiLCJpc3N1aW5nX2NvdW50cnkiLCJwYXNzcG9ydF9ubyIsInBhc3Nwb3J0X251bWJlciIsIm5hdGlvbmFsaXR5IiwiZGF0ZV9vZl9pc3N1ZSIsInNleCIsImRhdGVfb2ZfZXhwaXJ5IiwiZXhwaXJ5X2RhdGUiLCJwZXJzb25hbF9ubyIsInBlcnNvbmFsX251bWJlciIsImRhdGVfb2ZfYmlydGgiLCJiaXJ0aGRheSIsIm5hbWVfa29yIiwibXJ6MSIsIm1yejIiLCJfcmVmMyIsIl9mbGF0JGZkX2NvbmZpZGVuY2UzIiwiX2ZsYXQkbmF0aW9uYWxpdHkiLCJfZmxhdCR2aXNhX3R5cGUiLCJfZmxhdCRuYW1lX2tvciIsImRlZmF1bHRPYmoiLCJ2aXNhX3R5cGUiLCJ2aXNhVHlwZSIsInRhcmdldCIsInJlc3VsdFNwbGl0Iiwic3BsaXQiLCJyZXN1bHRJbmRleCIsImV4cF9kYXRlIiwiUkVTVUxUX01BU0tJTkdfVFlQRV9NQVAiLCJNQVNLX0lORk8iLCJmb3JFYWNoIiwiZWwiLCJoYXMiLCJfdmFsdWUiLCJyZWdleCIsImlzT2xkRm9ybWF0IiwibWF0Y2giLCJyZXBsYWNlIiwiT2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwiaW5uZXJSZXN1bHQiXSwic291cmNlcyI6WyJoZWxwZXJzL3VzZWItb2NyLWFwaS1wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IG9iamVjdFV0aWwgZnJvbSAnLi9vYmplY3QtdXRpbC5qcyc7XG5cbi8qIGdsb2JhbC1tb2R1bGUgKi9cbmNsYXNzIE9jclJlc3VsdFBhcnNlciB7XG4gIF9fb2NyVHlwZUxpc3QgPSBbJ2lkY2FyZCcsICdkcml2ZXInLCAncGFzc3BvcnQnLCAnZm9yZWlnbi1wYXNzcG9ydCcsICdhbGllbicsICdjcmVkaXQnLCAnaWRjYXJkLXNzYScsICdkcml2ZXItc3NhJywgJ3Bhc3Nwb3J0LXNzYScsICdmb3JlaWduLXBhc3Nwb3J0LXNzYScsICdhbGllbi1zc2EnLCAnY3JlZGl0LXNzYSddO1xuICBNQVNLX0lORk8gPSBbJ3JlY3RfaWRfaXNzdWVfZGF0ZScsICdyZWN0X2lkX251bWJlcicsICdyZWN0X2tvcl9wZXJzb25hbF9udW1iZXInLCAncmVjdF9saWNlbnNlX251bWJlcicsICdyZWN0X292ZXJzZWFzX3Jlc2lkZW50cycsICdyZWN0X3Bhc3Nwb3J0X2p1bWluX251bWJlcicsICdyZWN0X3Bhc3Nwb3J0X251bWJlcicsICdyZWN0X3Bhc3Nwb3J0X251bWJlcl9tcnonXTtcbiAgUkVTVUxUX1NDQU5fVFlQRV9NQVAgPSB7XG4gICAgUkVTSURFTlRfUkVHSVNUUkFUSU9OOiAnMScsXG4gICAgRFJJVkVSX0xJQ0VOU0U6ICcyJyxcbiAgICBQQVNTUE9SVDogJzMnLFxuICAgIFBBU1NQT1JUX09WRVJTRUE6ICc0JyxcbiAgICAvLyBUT0RPIO2YhOyerCBTRVJWRVIgU0RLIOq1rOu2hOyViO2VqFxuICAgIEFMSUVOX1JFR0lTVFJBVElPTjogJzUnLFxuICAgIEFMSUVOX1JFR0lTVFJBVElPTl8xOiAnNS0xJyxcbiAgICAvLyBUT0RPIO2YhOyerCBTRVJWRVIgU0RLIOq1rOu2hOyViO2VqFxuICAgIEFMSUVOX1JFR0lTVFJBVElPTl8yOiAnNS0yJyxcbiAgICAvLyBUT0RPIO2YhOyerCBTRVJWRVIgU0RLIOq1rOu2hOyViO2VqFxuICAgIEFMSUVOX1JFR0lTVFJBVElPTl8zOiAnNS0zJyAvLyBUT0RPIO2YhOyerCBTRVJWRVIgU0RLIOq1rOu2hOyViO2VqFxuICB9O1xuXG4gIFJFU1VMVF9NQVNLSU5HX1RZUEVfTUFQID0ge1xuICAgIDE6ICdrb3InLFxuICAgIDI6ICdkcml2ZXInLFxuICAgIDM6ICdwYXNzcG9ydCcsXG4gICAgNDogJ3Bhc3Nwb3J0LW92ZXJzZWEnLFxuICAgIC8vIFRPRE8g7ZiE7J6sIFNFUlZFUiBTREsg6rWs67aE7JWI7ZWoXG4gICAgNTogJ2FsaWVuJ1xuICB9O1xuICBwYXJzZU9jclJlc3VsdChvY3JUeXBlLCBzc2FNb2RlLCBvY3JSZXN1bHQpIHtcbiAgICBpZiAoIXRoaXMuX19vY3JUeXBlTGlzdC5pbmNsdWRlcyhvY3JUeXBlKSkgdGhyb3cgbmV3IEVycm9yKCdSZXN1bHRQYXJzZXIgOjogVW5zdXBwb3J0ZWQgT0NSIHR5cGUnKTtcbiAgICBjb25zdCBsZWdhY3lGb3JtYXQgPSB7fSxcbiAgICAgIG5ld0Zvcm1hdCA9IHt9LFxuICAgICAgbWFza0luZm8gPSB7fSxcbiAgICAgIGJhc2U2NEltYWdlUmVzdWx0ID0ge307XG5cbiAgICAvLyBiYXNlNjQg7LKY66asXG4gICAgdGhpcy5fX3BhcnNlQmFzZTY0SW1hZ2VSZXN1bHQob2NyUmVzdWx0LCBiYXNlNjRJbWFnZVJlc3VsdCk7XG4gICAgc3dpdGNoIChvY3JUeXBlKSB7XG4gICAgICBjYXNlICdpZGNhcmQnOlxuICAgICAgY2FzZSAnZHJpdmVyJzpcbiAgICAgIGNhc2UgJ2lkY2FyZC1zc2EnOlxuICAgICAgY2FzZSAnZHJpdmVyLXNzYSc6XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX19wYXJzZUlkRHJpdmVyKG9jclJlc3VsdCk7XG4gICAgICAgIF8uYXNzaWduKG5ld0Zvcm1hdCwgcmVzdWx0Lm5ld0Zvcm1hdCk7XG4gICAgICAgIF8uYXNzaWduKGxlZ2FjeUZvcm1hdCwgcmVzdWx0LmxlZ2FjeUZvcm1hdCk7XG4gICAgICAgIF8uYXNzaWduKG1hc2tJbmZvLCByZXN1bHQubWFza0luZm8pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcbiAgICAgIGNhc2UgJ3Bhc3Nwb3J0LXNzYSc6XG4gICAgICBjYXNlICdmb3JlaWduLXBhc3Nwb3J0JzpcbiAgICAgIGNhc2UgJ2ZvcmVpZ24tcGFzc3BvcnQtc3NhJzpcbiAgICAgICAgY29uc3QgcGFzc3BvcnRfcmVzdWx0ID0gdGhpcy5fX3BhcnNlUGFzc3BvcnQob2NyUmVzdWx0KTsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIF8uYXNzaWduKG5ld0Zvcm1hdCwgcGFzc3BvcnRfcmVzdWx0Lm5ld0Zvcm1hdCk7XG4gICAgICAgIF8uYXNzaWduKGxlZ2FjeUZvcm1hdCwgcGFzc3BvcnRfcmVzdWx0LmxlZ2FjeUZvcm1hdCk7XG4gICAgICAgIF8uYXNzaWduKG1hc2tJbmZvLCBwYXNzcG9ydF9yZXN1bHQubWFza0luZm8pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FsaWVuJzpcbiAgICAgIGNhc2UgJ2FsaWVuLXNzYSc6XG4gICAgICAgIGNvbnN0IGFsaWVuX3Jlc3VsdCA9IHRoaXMuX19wYXJzZUFsaWVuKG9jclJlc3VsdCk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBfLmFzc2lnbihuZXdGb3JtYXQsIGFsaWVuX3Jlc3VsdC5uZXdGb3JtYXQpO1xuICAgICAgICBfLmFzc2lnbihsZWdhY3lGb3JtYXQsIGFsaWVuX3Jlc3VsdC5sZWdhY3lGb3JtYXQpO1xuICAgICAgICBfLmFzc2lnbihtYXNrSW5mbywgYWxpZW5fcmVzdWx0Lm1hc2tJbmZvKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjcmVkaXQnOlxuICAgICAgY2FzZSAnY3JlZGl0LXNzYSc6XG4gICAgICAgIHRoaXMuX19wYXJzZUNyZWRpdChvY3JSZXN1bHQsIGxlZ2FjeUZvcm1hdCwgbmV3Rm9ybWF0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIE9DUiB0eXBlJyk7XG4gICAgfVxuXG4gICAgLy8gU1NBIOyymOumrFxuICAgIGlmICghc3NhTW9kZSkge1xuICAgICAgZGVsZXRlIGxlZ2FjeUZvcm1hdC50cnV0aDtcbiAgICAgIGRlbGV0ZSBsZWdhY3lGb3JtYXQudHJ1dGhDb25maWRlbmNlO1xuICAgICAgZGVsZXRlIGxlZ2FjeUZvcm1hdC50cnV0aFJldHJ5Q291bnQ7XG4gICAgICBkZWxldGUgbmV3Rm9ybWF0LmlkX3RydXRoO1xuICAgICAgZGVsZXRlIG5ld0Zvcm1hdC5mZF9jb25maWRlbmNlO1xuICAgICAgZGVsZXRlIG5ld0Zvcm1hdC5pZF90cnV0aF9yZXRyeV9jb3VudDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZ2FjeUZvcm1hdCxcbiAgICAgIG5ld0Zvcm1hdCxcbiAgICAgIGJhc2U2NEltYWdlUmVzdWx0LFxuICAgICAgbWFza0luZm9cbiAgICB9O1xuICB9XG4gIF9fcGFyc2VCYXNlNjRJbWFnZVJlc3VsdChvY3JSZXN1bHQsIGJhc2U2NEltYWdlUmVzdWx0KSB7XG4gICAgaWYgKG9jclJlc3VsdC5pbWFnZV9iYXNlNjRfbWFzayAmJiAhb2NyUmVzdWx0LmltYWdlX2Jhc2U2NF9tYXNrLnN0YXJ0c1dpdGgoJ2RhdGE6aW1hZ2UnKSkge1xuICAgICAgb2NyUmVzdWx0LmltYWdlX2Jhc2U2NF9tYXNrID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIG9jclJlc3VsdC5pbWFnZV9iYXNlNjRfbWFzaztcbiAgICB9XG4gICAgaWYgKG9jclJlc3VsdC5pbWFnZV9iYXNlNjRfZmFjZSAmJiAhb2NyUmVzdWx0LmltYWdlX2Jhc2U2NF9mYWNlLnN0YXJ0c1dpdGgoJ2RhdGE6aW1hZ2UnKSkge1xuICAgICAgb2NyUmVzdWx0LmltYWdlX2Jhc2U2NF9mYWNlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIG9jclJlc3VsdC5pbWFnZV9iYXNlNjRfZmFjZTtcbiAgICB9XG4gICAgY29uc3QgbmV3Rm9ybWF0S2V5TWFwQmFzZTY0SW1hZ2UgPSB7XG4gICAgICBpbWFnZV9iYXNlNjRfbWFzazogJ29jcl9tYXNraW5nX2ltYWdlJyxcbiAgICAgIGltYWdlX2Jhc2U2NF9mYWNlOiAnb2NyX2ZhY2VfaW1hZ2UnXG4gICAgfTtcbiAgICB0aGlzLl9fY29udmVydFNlcnZlclRvV2FzbUZvcm1hdChvY3JSZXN1bHQsIGJhc2U2NEltYWdlUmVzdWx0LCBuZXdGb3JtYXRLZXlNYXBCYXNlNjRJbWFnZSk7XG4gIH1cbiAgX19jb252ZXJ0TGVnYWN5Rm9ybWF0KG9iaiwgbGVnYWN5Rm9ybWF0LCBtYXApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXApIHtcbiAgICAgIGxlZ2FjeUZvcm1hdFtrZXldID0gdHlwZW9mIG9ialttYXBba2V5XV0gPT09ICdvYmplY3QnID8ge1xuICAgICAgICAuLi5vYmpbbWFwW2tleV1dXG4gICAgICB9IDogb2JqW21hcFtrZXldXTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZ2FjeUZvcm1hdDtcbiAgfVxuICBfX2NvbnZlcnRTZXJ2ZXJUb1dhc21Gb3JtYXQob2JqLCB3YXNtRm9ybWF0LCBtYXApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXApIHtcbiAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gb2JqZWN0VXRpbC5nZXRPYmplY3RWYWx1ZVdpdGhEb3Qob2JqLCBrZXkpO1xuICAgICAgY29uc3QgdGFyZ2V0T2JqID0ge307XG4gICAgICBvYmplY3RVdGlsLm1ha2VPYmplY3RXaXRoRG90KHRhcmdldE9iaiwgbWFwW2tleV0sIHRhcmdldFZhbHVlKTtcbiAgICAgIG9iamVjdFV0aWwub2JqZWN0RGVlcE1lcmdlKHdhc21Gb3JtYXQsIHRhcmdldE9iaik7XG4gICAgfVxuICAgIHJldHVybiB3YXNtRm9ybWF0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gb2NyUmVzdWx0XG4gICAqIEByZXR1cm4geyBuZXdGb3JtYXQsIGxlZ2FjeUZvcm1hdCwgbWFza0luZm8gfVxuICAgKi9cbiAgX19wYXJzZUlkRHJpdmVyKG9jclJlc3VsdCkge1xuICAgIC8vIFRPRE8gd2FzbeyXkOyEnCDsp4Dsm5DtlbTso7zripQgaWRUeXBlIOqwkuydtCDsl4bslrQg7J6E7J2YIOunpO2VkSAo7ZW07Jm4IOyXrOq2jOydtOuekSDsmbjqta3snbjrk7HroZ3spp0g6rWs67aE7JWI65CY64qUIOusuOygnCDsnojsnYwpXG4gICAgY29uc3QgaWRUeXBlID0gdGhpcy5SRVNVTFRfU0NBTl9UWVBFX01BUFtvY3JSZXN1bHQucmVzdWx0X3NjYW5fdHlwZV07XG4gICAgY29uc3QgZmxhdCA9IHRoaXMuZmxhdE9iaihvY3JSZXN1bHQpO1xuXG4gICAgLy8g7KO866+867KI7Zi4IO2YleyLnSAwMDAwMDAtMDAwMDAwMFxuICAgIGNvbnN0IGp1bWluID0gdGhpcy5nZXRJZE51bWJlckZvcm1hdChmbGF0Lmp1bWluKTtcblxuICAgIC8vIG5ldyBmb3JtYXQgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgICAvLyBpZCDqsJ3ssrTsl5DshJwgZmxhdCDtlZjqsowg66eM65OkIOuMgOyDgeuTpFxuICAgIGNvbnN0IG5ld0Zvcm1hdEtleXMgPSBbJ2NvbXBsZXRlJywgJ25hbWUnLCAnanVtaW4nLCAnaXNzdWVkX2RhdGUnLCAncmVnaW9uJywgJ2ZvdW5kX2ZhY2UnLCAnc3BlY3VsYXJfcmF0aW8nLCAnaWRfdHJ1dGgnLCAnZmRfY29uZmlkZW5jZSddO1xuICAgIGNvbnN0IG5ld0Zvcm1hdCA9IF8ucGljayhmbGF0LCBuZXdGb3JtYXRLZXlzKTtcbiAgICBuZXdGb3JtYXQuY29tcGxldGUgPSBuZXdGb3JtYXQuY29tcGxldGUgKyAnJztcbiAgICBuZXdGb3JtYXQuanVtaW4gPSBqdW1pbjtcbiAgICBuZXdGb3JtYXQuaWRfdHJ1dGhfcmV0cnlfY291bnQgPSAwO1xuICAgIG5ld0Zvcm1hdC5yZXN1bHRfc2Nhbl90eXBlID0gaWRUeXBlO1xuICAgIG5ld0Zvcm1hdC5mZF9jb25maWRlbmNlID0gZmxhdC5mZF9jb25maWRlbmNlPy50b0ZpeGVkKDMpICsgJycgPz8gJyc7XG4gICAgbmV3Rm9ybWF0LmZvdW5kX2ZhY2UgPSBmbGF0LmZvdW5kX2ZhY2UgKyAnJztcbiAgICBuZXdGb3JtYXQuc3BlY3VsYXJfcmF0aW8gPSBmbGF0LnNwZWN1bGFyX3JhdGlvICsgJyc7XG5cbiAgICAvLyDso7zrr7zrk7HroZ3spp0g7LaU6rCAIOygleuztCDso7zsnoVcbiAgICBpZiAoaWRUeXBlID09PSAnMScpIG5ld0Zvcm1hdC5vdmVyc2Vhc19yZXNpZGVudCA9ICdmYWxzZSc7XG5cbiAgICAvLyDso7zrr7zrsojtmLgg7ZiV7IudIOumrO2EtOqwkiDtmJXsi50g67OA6rK9IC0gYmlydGgg7LaU6rCAIC8vIFRPRE8gOiDsl6zqtozsnYAgYmlydGhkYXk/XG4gICAgbmV3Rm9ybWF0LmJpcnRoID0ganVtaW4ubGVuZ3RoID49IDYgPyBqdW1pbi5zbGljZSgwLCA2KSA6ICcnO1xuXG4gICAgLy8g7Jq07KCE66m07ZeI7Kad7J2865WMIOy2lOqwgCDsoJXrs7Qg7KO87J6FXG4gICAgaWYgKGlkVHlwZSA9PT0gJzInKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZhbHVlXG4gICAgICB9ID0gdGhpcy5nZXREcml2ZXJMaWNlbnNlKGZsYXQuZHJpdmVyX251bWJlcik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgLy8gbmV3Rm9ybWF0LmlzX29sZF9mb3JtYXRfZHJpdmVyX251bWJlciA9IGlzT2xkRm9ybWF0O1xuICAgICAgbmV3Rm9ybWF0LmRyaXZlcl9udW1iZXIgPSB2YWx1ZTtcbiAgICAgIG5ld0Zvcm1hdC5kcml2ZXJfc2VyaWFsID0gZmxhdC5kcml2ZXJfc2VyaWFsO1xuICAgICAgbmV3Rm9ybWF0LmRyaXZlcl90eXBlID0gZmxhdC5kcml2ZXJfdHlwZTtcbiAgICB9XG5cbiAgICAvLyBsZWdhY3kgZm9ybWF0ICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4gICAgY29uc3QgbGVnYWN5Rm9ybWF0ID0ge1xuICAgICAgQ29tcGxldGVkOiBuZXdGb3JtYXQuY29tcGxldGUsXG4gICAgICB0eXBlOiBpZFR5cGUsXG4gICAgICBuYW1lOiBmbGF0Lm5hbWUsXG4gICAgICBudW1iZXI6IGp1bWluLFxuICAgICAgRGF0ZTogZmxhdC5pc3N1ZWRfZGF0ZSxcbiAgICAgIHJlZ2lvbjogZmxhdC5yZWdpb24sXG4gICAgICB0cnV0aDogZmxhdC5pZF90cnV0aCxcbiAgICAgIHRydXRoQ29uZmlkZW5jZTogbmV3Rm9ybWF0LmZkX2NvbmZpZGVuY2UsXG4gICAgICB0cnV0aFJldHJ5Q291bnQ6IDAsXG4gICAgICBmYWNlX3Njb3JlOiBuZXdGb3JtYXQuZm91bmRfZmFjZSxcbiAgICAgIHNwZWN1bGFyOiBuZXdGb3JtYXQuc3BlY3VsYXJfcmF0aW8sXG4gICAgICBpZF90eXBlOiBpZFR5cGVcbiAgICB9O1xuXG4gICAgLy8g7Jq07KCE66m07ZeI7Kad7J2865WMIOy2lOqwgCDsoJXrs7Qg7KO87J6FXG4gICAgbGVnYWN5Rm9ybWF0LmxpY2Vuc2VOdW1iZXIgPSBuZXdGb3JtYXQuZHJpdmVyX251bWJlcjtcbiAgICBsZWdhY3lGb3JtYXQuc2VyaWFsID0gbmV3Rm9ybWF0LmRyaXZlcl9zZXJpYWw7XG4gICAgbGVnYWN5Rm9ybWF0LmxpY2Vuc2VUeXBlID0gbmV3Rm9ybWF0LmRyaXZlcl90eXBlO1xuICAgIHJldHVybiB7XG4gICAgICBuZXdGb3JtYXQsXG4gICAgICBsZWdhY3lGb3JtYXQsXG4gICAgICBtYXNrSW5mbzogdGhpcy5nZXRNYXNrSW5mbyhmbGF0LCBpZFR5cGUpXG4gICAgfTtcbiAgfVxuICBfX3BhcnNlUGFzc3BvcnQob2NyUmVzdWx0KSB7XG4gICAgLy8gVE9ETyB3YXNt7JeQ7IScIOyngOybkO2VtOyjvOuKlCBpZFR5cGUg6rCS7J20IOyXhuyWtCDsnoTsnZgg66ek7ZWRICjtlbTsmbgg7Jes6raM7J20656RIOyZuOq1reyduOuTseuhneymnSDqtazrtoTslYjrkJjripQg66y47KCcIOyeiOydjClcbiAgICBjb25zdCBpZFR5cGUgPSB0aGlzLlJFU1VMVF9TQ0FOX1RZUEVfTUFQW29jclJlc3VsdC5yZXN1bHRfc2Nhbl90eXBlXTtcbiAgICBjb25zdCBmbGF0ID0gdGhpcy5mbGF0T2JqKG9jclJlc3VsdCk7XG5cbiAgICAvLyDso7zrr7zrsojtmLgg7ZiV7IudIDAwMDAwMC0wMDAwMDAwXG4gICAgY29uc3QganVtaW4gPSB0aGlzLmdldElkTnVtYmVyRm9ybWF0KGZsYXQuanVtaW4pO1xuXG4gICAgLy8gbmV3IGZvcm1hdCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgIC8vIGlkIOqwneyytOyXkOyEnCBmbGF0IO2VmOqyjCDrp4zrk6Qg64yA7IOB65OkXG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc3QgbmV3Rm9ybWF0S2V5cyA9IFsnY29tcGxldGUnLCAnbmFtZScsICdzdXJfbmFtZScsICdnaXZlbl9uYW1lJywgJ3Bhc3Nwb3J0X3R5cGUnLCAnaXNzdWluZ19jb3VudHJ5JywgJ3Bhc3Nwb3J0X251bWJlcicsICduYXRpb25hbGl0eScsICdpc3N1ZWRfZGF0ZScsICdzZXgnLCAnZXhwaXJ5X2RhdGUnLCAncGVyc29uYWxfbnVtYmVyJywgJ2p1bWluJywgJ2JpcnRoZGF5JywgJ25hbWVfa29yJywgJ2NvbG9yX3BvaW50JywgJ2ZvdW5kX2ZhY2UnLCAnc3BlY3VsYXJfcmF0aW8nLCAnbXJ6MScsICdtcnoyJywgJ2lkX3RydXRoJywgJ2ZkX2NvbmZpZGVuY2UnXTtcbiAgICBjb25zdCBuZXdGb3JtYXQgPSBfLnBpY2soZmxhdCwgbmV3Rm9ybWF0S2V5cyk7XG4gICAgbmV3Rm9ybWF0LmNvbXBsZXRlID0gbmV3Rm9ybWF0LmNvbXBsZXRlICsgJyc7XG4gICAgbmV3Rm9ybWF0Lmp1bWluID0ganVtaW47XG4gICAgbmV3Rm9ybWF0LmlkX3RydXRoX3JldHJ5X2NvdW50ID0gMDtcbiAgICBuZXdGb3JtYXQucmVzdWx0X3NjYW5fdHlwZSA9IGlkVHlwZTtcbiAgICBuZXdGb3JtYXQuZmRfY29uZmlkZW5jZSA9IGZsYXQuZmRfY29uZmlkZW5jZT8udG9GaXhlZCgzKSArICcnID8/ICcnO1xuICAgIG5ld0Zvcm1hdC5mb3VuZF9mYWNlID0gZmxhdC5mb3VuZF9mYWNlICsgJyc7XG4gICAgbmV3Rm9ybWF0LnNwZWN1bGFyX3JhdGlvID0gZmxhdC5zcGVjdWxhcl9yYXRpbyArICcnO1xuXG4gICAgLy8gbGVnYWN5IGZvcm1hdCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgIGNvbnN0IGxlZ2FjeUZvcm1hdCA9IHtcbiAgICAgIENvbXBsZXRlZDogbmV3Rm9ybWF0LmNvbXBsZXRlLFxuICAgICAgbmFtZTogZmxhdC5uYW1lLFxuICAgICAgc3VyTmFtZTogZmxhdC5zdXJfbmFtZSxcbiAgICAgIGdpdmVuTmFtZTogZmxhdC5naXZlbl9uYW1lLFxuICAgICAgdHlwZTogZmxhdC5wYXNzcG9ydF90eXBlLFxuICAgICAgaXNzdWluZ19jb3VudHJ5OiBmbGF0Lmlzc3VpbmdfY291bnRyeSxcbiAgICAgIHBhc3Nwb3J0X25vOiBmbGF0LnBhc3Nwb3J0X251bWJlcixcbiAgICAgIG5hdGlvbmFsaXR5OiBmbGF0Lm5hdGlvbmFsaXR5LFxuICAgICAgZGF0ZV9vZl9pc3N1ZTogZmxhdC5pc3N1ZWRfZGF0ZSxcbiAgICAgIHNleDogZmxhdC5zZXgsXG4gICAgICBkYXRlX29mX2V4cGlyeTogZmxhdC5leHBpcnlfZGF0ZSxcbiAgICAgIHBlcnNvbmFsX25vOiBmbGF0LnBlcnNvbmFsX251bWJlcixcbiAgICAgIG51bWJlcjoganVtaW4sXG4gICAgICBkYXRlX29mX2JpcnRoOiBmbGF0LmJpcnRoZGF5LFxuICAgICAgbmFtZV9rb3I6IGZsYXQubmFtZV9rb3IsXG4gICAgICBtcnoxOiBmbGF0Lm1yejEsXG4gICAgICBtcnoyOiBmbGF0Lm1yejIsXG4gICAgICBmYWNlX3Njb3JlOiBuZXdGb3JtYXQuZm91bmRfZmFjZSxcbiAgICAgIHNwZWN1bGFyOiBuZXdGb3JtYXQuc3BlY3VsYXJfcmF0aW8sXG4gICAgICBpZF90eXBlOiBpZFR5cGUsXG4gICAgICB0cnV0aDogZmxhdC5pZF90cnV0aCxcbiAgICAgIHRydXRoQ29uZmlkZW5jZTogbmV3Rm9ybWF0LmZkX2NvbmZpZGVuY2UsXG4gICAgICB0cnV0aFJldHJ5Q291bnQ6IDBcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBuZXdGb3JtYXQsXG4gICAgICBsZWdhY3lGb3JtYXQsXG4gICAgICBtYXNrSW5mbzogdGhpcy5nZXRNYXNrSW5mbyhmbGF0LCBpZFR5cGUpXG4gICAgfTtcbiAgfVxuICBfX3BhcnNlQWxpZW4ob2NyUmVzdWx0KSB7XG4gICAgLy8gVE9ETyB3YXNt7JeQ7IScIOyngOybkO2VtOyjvOuKlCBpZFR5cGUg6rCS7J20IOyXhuyWtCDsnoTsnZgg66ek7ZWRICjtlbTsmbgg7Jes6raM7J20656RIOyZuOq1reyduOuTseuhneymnSDqtazrtoTslYjrkJjripQg66y47KCcIOyeiOydjClcbiAgICBjb25zdCBpZFR5cGUgPSB0aGlzLlJFU1VMVF9TQ0FOX1RZUEVfTUFQW29jclJlc3VsdC5yZXN1bHRfc2Nhbl90eXBlXTtcbiAgICBjb25zdCBkZWZhdWx0T2JqID0ge1xuICAgICAgbmF0aW9uYWxpdHk6ICcnLFxuICAgICAgdmlzYV90eXBlOiAnJyxcbiAgICAgIG5hbWVfa29yOiAnJ1xuICAgIH07XG4gICAgY29uc3QgZmxhdCA9IF8uYXNzaWduKGRlZmF1bHRPYmosIHRoaXMuZmxhdE9iaihvY3JSZXN1bHQpKTtcblxuICAgIC8vIOyjvOuvvOuyiO2YuCDtmJXsi50gMDAwMDAwLTAwMDAwMDBcbiAgICBjb25zdCBqdW1pbiA9IHRoaXMuZ2V0SWROdW1iZXJGb3JtYXQoZmxhdC5qdW1pbik7XG5cbiAgICAvLyBuZXcgZm9ybWF0ICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4gICAgLy8gaWQg6rCd7LK07JeQ7IScIGZsYXQg7ZWY6rKMIOunjOuTpCDrjIDsg4Hrk6RcbiAgICBjb25zdCBuZXdGb3JtYXRLZXlzID0gWydjb21wbGV0ZScsICduYW1lJywgJ2p1bWluJywgJ2lzc3VlZF9kYXRlJywgJ25hdGlvbmFsaXR5JywgJ3Zpc2FfdHlwZScsICduYW1lX2tvcicsICdmb3VuZF9mYWNlJywgJ3NwZWN1bGFyX3JhdGlvJywgJ2lkX3RydXRoJywgJ2ZkX2NvbmZpZGVuY2UnXTtcbiAgICBjb25zdCBuZXdGb3JtYXQgPSBfLnBpY2soZmxhdCwgbmV3Rm9ybWF0S2V5cyk7XG4gICAgbmV3Rm9ybWF0LmNvbXBsZXRlID0gbmV3Rm9ybWF0LmNvbXBsZXRlICsgJyc7XG4gICAgbmV3Rm9ybWF0Lmp1bWluID0ganVtaW47XG4gICAgbmV3Rm9ybWF0LmlkX3RydXRoX3JldHJ5X2NvdW50ID0gMDtcbiAgICBuZXdGb3JtYXQucmVzdWx0X3NjYW5fdHlwZSA9IGlkVHlwZTtcbiAgICBuZXdGb3JtYXQuZmRfY29uZmlkZW5jZSA9IGZsYXQuZmRfY29uZmlkZW5jZT8udG9GaXhlZCgzKSArICcnID8/ICcnO1xuICAgIG5ld0Zvcm1hdC5mb3VuZF9mYWNlID0gZmxhdC5mb3VuZF9mYWNlICsgJyc7XG4gICAgbmV3Rm9ybWF0LnNwZWN1bGFyX3JhdGlvID0gZmxhdC5zcGVjdWxhcl9yYXRpbyArICcnO1xuICAgIGNvbnN0IGxlZ2FjeUZvcm1hdCA9IHtcbiAgICAgIENvbXBsZXRlZDogbmV3Rm9ybWF0LmNvbXBsZXRlLFxuICAgICAgbmFtZTogZmxhdC5uYW1lLFxuICAgICAgbnVtYmVyOiBqdW1pbixcbiAgICAgIERhdGU6IGZsYXQuaXNzdWVkX2RhdGUsXG4gICAgICBuYXRpb25hbGl0eTogZmxhdC5uYXRpb25hbGl0eSA/PyAnJyxcbiAgICAgIHZpc2FUeXBlOiBmbGF0LnZpc2FfdHlwZSA/PyAnJyxcbiAgICAgIG5hbWVfa29yOiBmbGF0Lm5hbWVfa29yID8/ICcnLFxuICAgICAgZmFjZV9zY29yZTogbmV3Rm9ybWF0LmZvdW5kX2ZhY2UsXG4gICAgICBzcGVjdWxhcjogbmV3Rm9ybWF0LnNwZWN1bGFyX3JhdGlvLFxuICAgICAgaWRfdHlwZTogaWRUeXBlLFxuICAgICAgdHJ1dGg6IGZsYXQuaWRfdHJ1dGgsXG4gICAgICB0cnV0aENvbmZpZGVuY2U6IG5ld0Zvcm1hdC5mZF9jb25maWRlbmNlLFxuICAgICAgdHJ1dGhSZXRyeUNvdW50OiAwXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgbmV3Rm9ybWF0LFxuICAgICAgbGVnYWN5Rm9ybWF0LFxuICAgICAgbWFza0luZm86IHRoaXMuZ2V0TWFza0luZm8oZmxhdCwgaWRUeXBlKVxuICAgIH07XG4gIH1cbiAgX19wYXJzZUNyZWRpdChvY3JSZXN1bHQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBjb25zdCByZXN1bHRTcGxpdCA9IG9jclJlc3VsdC5zcGxpdCgnLCcpO1xuICAgIGxldCByZXN1bHRJbmRleCA9IDA7XG4gICAgaWYgKHJlc3VsdEluZGV4IDwgcmVzdWx0U3BsaXQubGVuZ3RoKSB0YXJnZXQuQ29tcGxldGVkID0gcmVzdWx0U3BsaXRbcmVzdWx0SW5kZXhdLCByZXN1bHRJbmRleCsrO1xuICAgIGlmIChyZXN1bHRJbmRleCA8IHJlc3VsdFNwbGl0Lmxlbmd0aCkgdGFyZ2V0Lm51bWJlciA9IHJlc3VsdFNwbGl0W3Jlc3VsdEluZGV4XSwgcmVzdWx0SW5kZXgrKztcbiAgICBpZiAocmVzdWx0SW5kZXggPCByZXN1bHRTcGxpdC5sZW5ndGgpIHRhcmdldC5leHBfZGF0ZSA9IHJlc3VsdFNwbGl0W3Jlc3VsdEluZGV4XSwgcmVzdWx0SW5kZXgrKztcbiAgICByZXR1cm4gW3RhcmdldCwgdGFyZ2V0XTtcbiAgfVxuICBnZXRNYXNrSW5mbyhvYmosIGlkVHlwZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIHR5cGU6IHRoaXMuUkVTVUxUX01BU0tJTkdfVFlQRV9NQVBbaWRUeXBlICsgJyddXG4gICAgfTtcbiAgICB0aGlzLk1BU0tfSU5GTy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChfLmhhcyhvYmosIGVsKSAmJiBvYmpbZWxdICE9PSAnMCwwLDAsMCcpIHtcbiAgICAgICAgcmVzdWx0W2VsXSA9IG9ialtlbF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBnZXREcml2ZXJMaWNlbnNlKHZhbHVlKSB7XG4gICAgLy8g6rWs7ZiVIOuptO2XiOymnSDtj6zrqacg7YyQ7KCVIChleDog7KCc7KO8IDEzLTAwMTIzNC0xMiAtPiB0cnVlKVxuICAgIGNvbnN0IHJlZ2V4ID0gL1vqsIAt7Z6jXS9nO1xuICAgIGNvbnN0IGlzT2xkRm9ybWF0ID0gdmFsdWU/Lm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAoaXNPbGRGb3JtYXQpIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnICcsICctJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT2xkRm9ybWF0LFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgLy8g7KO866+867KI7Zi4IO2YleyLnSDrpqzthLTqsJIg7ZiV7IudIOuzgOqyvVxuICBnZXRJZE51bWJlckZvcm1hdCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZT8ubGVuZ3RoID09PSAxNCkgcmV0dXJuIHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZT8ubGVuZ3RoID09PSAxMyA/IHZhbHVlLnNsaWNlKDAsIDYpICsgJy0nICsgdmFsdWUuc2xpY2UoNiwgMTMpIDogJyc7XG4gIH1cbiAgZmxhdE9iaihvYmopIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUmVzdWx0ID0gdGhpcy5mbGF0T2JqKHZhbHVlKTtcbiAgICAgICAgXy5hc3NpZ24ocmVzdWx0LCBpbm5lclJlc3VsdCk7XG4gICAgICB9IGVsc2UgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IE9jclJlc3VsdFBhcnNlcigpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxPQUFPQSxVQUFVLE1BQU0sa0JBQWtCOztBQUV6QztBQUNBLE1BQU1DLGVBQWUsQ0FBQztFQUFBQyxZQUFBO0lBQUFDLGVBQUEsd0JBQ0osQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7SUFBQUEsZUFBQSxvQkFDMUssQ0FBQyxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSwwQkFBMEIsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSxzQkFBc0IsRUFBRSwwQkFBMEIsQ0FBQztJQUFBQSxlQUFBLCtCQUM3TDtNQUNyQkMscUJBQXFCLEVBQUUsR0FBRztNQUMxQkMsY0FBYyxFQUFFLEdBQUc7TUFDbkJDLFFBQVEsRUFBRSxHQUFHO01BQ2JDLGdCQUFnQixFQUFFLEdBQUc7TUFDckI7TUFDQUMsa0JBQWtCLEVBQUUsR0FBRztNQUN2QkMsb0JBQW9CLEVBQUUsS0FBSztNQUMzQjtNQUNBQyxvQkFBb0IsRUFB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
