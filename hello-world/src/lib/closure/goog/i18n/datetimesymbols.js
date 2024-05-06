/**
 * @license
 * Copyright The Closure Library Authors.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview Date/time formatting symbols for all locales.
 *
 * File generated from CLDR ver. 43
 *
 * To reduce the file size (which may cause issues in some JS
 * developing environments), this file will only contain locales
 * that are frequently used by web applications. This is defined as
 * proto/closure_locales_data.txt and will change (most likely addition)
 * over time.  Rest of the data can be found in another file named
 * "datetimesymbolsext.js", which will be generated at
 * the same time together with this file.
 *
 * @suppress {const,useOfGoogProvide}
 */

// clang-format off

goog.provide('goog.i18n.DateTimeSymbols');
goog.provide('goog.i18n.DateTimeSymbolsType');
goog.provide('goog.i18n.DateTimeSymbols_af');
goog.provide('goog.i18n.DateTimeSymbols_am');
goog.provide('goog.i18n.DateTimeSymbols_ar');
goog.provide('goog.i18n.DateTimeSymbols_ar_DZ');
goog.provide('goog.i18n.DateTimeSymbols_ar_EG');
goog.provide('goog.i18n.DateTimeSymbols_az');
goog.provide('goog.i18n.DateTimeSymbols_be');
goog.provide('goog.i18n.DateTimeSymbols_bg');
goog.provide('goog.i18n.DateTimeSymbols_bn');
goog.provide('goog.i18n.DateTimeSymbols_br');
goog.provide('goog.i18n.DateTimeSymbols_bs');
goog.provide('goog.i18n.DateTimeSymbols_ca');
goog.provide('goog.i18n.DateTimeSymbols_chr');
goog.provide('goog.i18n.DateTimeSymbols_cs');
goog.provide('goog.i18n.DateTimeSymbols_cy');
goog.provide('goog.i18n.DateTimeSymbols_da');
goog.provide('goog.i18n.DateTimeSymbols_de');
goog.provide('goog.i18n.DateTimeSymbols_de_AT');
goog.provide('goog.i18n.DateTimeSymbols_de_CH');
goog.provide('goog.i18n.DateTimeSymbols_el');
goog.provide('goog.i18n.DateTimeSymbols_en');
goog.provide('goog.i18n.DateTimeSymbols_en_AU');
goog.provide('goog.i18n.DateTimeSymbols_en_CA');
goog.provide('goog.i18n.DateTimeSymbols_en_GB');
goog.provide('goog.i18n.DateTimeSymbols_en_IE');
goog.provide('goog.i18n.DateTimeSymbols_en_IN');
goog.provide('goog.i18n.DateTimeSymbols_en_ISO');
goog.provide('goog.i18n.DateTimeSymbols_en_SG');
goog.provide('goog.i18n.DateTimeSymbols_en_US');
goog.provide('goog.i18n.DateTimeSymbols_en_ZA');
goog.provide('goog.i18n.DateTimeSymbols_es');
goog.provide('goog.i18n.DateTimeSymbols_es_419');
goog.provide('goog.i18n.DateTimeSymbols_es_ES');
goog.provide('goog.i18n.DateTimeSymbols_es_MX');
goog.provide('goog.i18n.DateTimeSymbols_es_US');
goog.provide('goog.i18n.DateTimeSymbols_et');
goog.provide('goog.i18n.DateTimeSymbols_eu');
goog.provide('goog.i18n.DateTimeSymbols_fa');
goog.provide('goog.i18n.DateTimeSymbols_fi');
goog.provide('goog.i18n.DateTimeSymbols_fil');
goog.provide('goog.i18n.DateTimeSymbols_fr');
goog.provide('goog.i18n.DateTimeSymbols_fr_CA');
goog.provide('goog.i18n.DateTimeSymbols_ga');
goog.provide('goog.i18n.DateTimeSymbols_gl');
goog.provide('goog.i18n.DateTimeSymbols_gsw');
goog.provide('goog.i18n.DateTimeSymbols_gu');
goog.provide('goog.i18n.DateTimeSymbols_haw');
goog.provide('goog.i18n.DateTimeSymbols_he');
goog.provide('goog.i18n.DateTimeSymbols_hi');
goog.provide('goog.i18n.DateTimeSymbols_hr');
goog.provide('goog.i18n.DateTimeSymbols_hu');
goog.provide('goog.i18n.DateTimeSymbols_hy');
goog.provide('goog.i18n.DateTimeSymbols_id');
goog.provide('goog.i18n.DateTimeSymbols_in');
goog.provide('goog.i18n.DateTimeSymbols_is');
goog.provide('goog.i18n.DateTimeSymbols_it');
goog.provide('goog.i18n.DateTimeSymbols_iw');
goog.provide('goog.i18n.DateTimeSymbols_ja');
goog.provide('goog.i18n.DateTimeSymbols_ka');
goog.provide('goog.i18n.DateTimeSymbols_kk');
goog.provide('goog.i18n.DateTimeSymbols_km');
goog.provide('goog.i18n.DateTimeSymbols_kn');
goog.provide('goog.i18n.DateTimeSymbols_ko');
goog.provide('goog.i18n.DateTimeSymbols_ky');
goog.provide('goog.i18n.DateTimeSymbols_ln');
goog.provide('goog.i18n.DateTimeSymbols_lo');
goog.provide('goog.i18n.DateTimeSymbols_lt');
goog.provide('goog.i18n.DateTimeSymbols_lv');
goog.provide('goog.i18n.DateTimeSymbols_mk');
goog.provide('goog.i18n.DateTimeSymbols_ml');
goog.provide('goog.i18n.DateTimeSymbols_mn');
goog.provide('goog.i18n.DateTimeSymbols_mo');
goog.provide('goog.i18n.DateTimeSymbols_mr');
goog.provide('goog.i18n.DateTimeSymbols_ms');
goog.provide('goog.i18n.DateTimeSymbols_mt');
goog.provide('goog.i18n.DateTimeSymbols_my');
goog.provide('goog.i18n.DateTimeSymbols_nb');
goog.provide('goog.i18n.DateTimeSymbols_ne');
goog.provide('goog.i18n.DateTimeSymbols_nl');
goog.provide('goog.i18n.DateTimeSymbols_no');
goog.provide('goog.i18n.DateTimeSymbols_no_NO');
goog.provide('goog.i18n.DateTimeSymbols_or');
goog.provide('goog.i18n.DateTimeSymbols_pa');
goog.provide('goog.i18n.DateTimeSymbols_pl');
goog.provide('goog.i18n.DateTimeSymbols_pt');
goog.provide('goog.i18n.DateTimeSymbols_pt_BR');
goog.provide('goog.i18n.DateTimeSymbols_pt_PT');
goog.provide('goog.i18n.DateTimeSymbols_ro');
goog.provide('goog.i18n.DateTimeSymbols_ru');
goog.provide('goog.i18n.DateTimeSymbols_sh');
goog.provide('goog.i18n.DateTimeSymbols_si');
goog.provide('goog.i18n.DateTimeSymbols_sk');
goog.provide('goog.i18n.DateTimeSymbols_sl');
goog.provide('goog.i18n.DateTimeSymbols_sq');
goog.provide('goog.i18n.DateTimeSymbols_sr');
goog.provide('goog.i18n.DateTimeSymbols_sr_Latn');
goog.provide('goog.i18n.DateTimeSymbols_sv');
goog.provide('goog.i18n.DateTimeSymbols_sw');
goog.provide('goog.i18n.DateTimeSymbols_ta');
goog.provide('goog.i18n.DateTimeSymbols_te');
goog.provide('goog.i18n.DateTimeSymbols_th');
goog.provide('goog.i18n.DateTimeSymbols_tl');
goog.provide('goog.i18n.DateTimeSymbols_tr');
goog.provide('goog.i18n.DateTimeSymbols_uk');
goog.provide('goog.i18n.DateTimeSymbols_ur');
goog.provide('goog.i18n.DateTimeSymbols_uz');
goog.provide('goog.i18n.DateTimeSymbols_vi');
goog.provide('goog.i18n.DateTimeSymbols_zh');
goog.provide('goog.i18n.DateTimeSymbols_zh_CN');
goog.provide('goog.i18n.DateTimeSymbols_zh_HK');
goog.provide('goog.i18n.DateTimeSymbols_zh_TW');
goog.provide('goog.i18n.DateTimeSymbols_zu');
/**
 * Date/time formatting symbols for locale en_ISO.
 * @const {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en_ISO = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  STANDALONEMONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  WEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  STANDALONEWEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  SHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  STANDALONESHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, y MMMM dd', 'y MMMM d', 'y MMM d', 'yyyy-MM-dd'],
  TIMEFORMATS: ['HH:mm:ss v', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  AVAILABLEFORMATS: {'Md': 'M/d', 'MMMMd': 'MMMM d', 'MMMd': 'MMM d'},
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};

/**
 * Date/time formatting symbols for locale af.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_af = {
  ERAS: ['v.C.', 'n.C.'],
  ERANAMES: ['voor Christus', 'na Christus'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
  STANDALONEMONTHS: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
  SHORTMONTHS: ['Jan.', 'Feb.', 'Mrt.', 'Apr.', 'Mei', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Des.'],
  STANDALONESHORTMONTHS: ['Jan.', 'Feb.', 'Mrt.', 'Apr.', 'Mei', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Des.'],
  WEEKDAYS: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
  STANDALONEWEEKDAYS: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
  SHORTWEEKDAYS: ['So.', 'Ma.', 'Di.', 'Wo.', 'Do.', 'Vr.', 'Sa.'],
  STANDALONESHORTWEEKDAYS: ['So.', 'Ma.', 'Di.', 'Wo.', 'Do.', 'Vr.', 'Sa.'],
  NARROWWEEKDAYS: ['S', 'M', 'D', 'W', 'D', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'D', 'W', 'D', 'V', 'S'],
  SHORTQUARTERS: ['K1', 'K2', 'K3', 'K4'],
  QUARTERS: ['1ste kwartaal', '2de kwartaal', '3de kwartaal', '4de kwartaal'],
  AMPMS: ['vm.', 'nm.'],
  DATEFORMATS: ['EEEE dd MMMM y', 'dd MMMM y', 'dd MMM y', 'y-MM-dd'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'om\' {0}', '{1} \'om\' {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale am.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_am = {
  ERAS: ['ዓ/ዓ', 'ዓ/ም'],
  ERANAMES: ['ዓመተ ዓለም', 'ዓመተ ምሕረት'],
  NARROWMONTHS: ['ጃ', 'ፌ', 'ማ', 'ኤ', 'ሜ', 'ጁ', 'ጁ', 'ኦ', 'ሴ', 'ኦ', 'ኖ', 'ዲ'],
  STANDALONENARROWMONTHS: ['ጃ', 'ፌ', 'ማ', 'ኤ', 'ሜ', 'ጁ', 'ጁ', 'ኦ', 'ሴ', 'ኦ', 'ኖ', 'ዲ'],
  MONTHS: ['ጃንዩወሪ', 'ፌብሩወሪ', 'ማርች', 'ኤፕሪል', 'ሜይ', 'ጁን', 'ጁላይ', 'ኦገስት', 'ሴፕቴምበር', 'ኦክቶበር', 'ኖቬምበር', 'ዲሴምበር'],
  STANDALONEMONTHS: ['ጃንዩወሪ', 'ፌብሩወሪ', 'ማርች', 'ኤፕሪል', 'ሜይ', 'ጁን', 'ጁላይ', 'ኦገስት', 'ሴፕቴምበር', 'ኦክቶበር', 'ኖቬምበር', 'ዲሴምበር'],
  SHORTMONTHS: ['ጃንዩ', 'ፌብሩ', 'ማርች', 'ኤፕሪ', 'ሜይ', 'ጁን', 'ጁላይ', 'ኦገስ', 'ሴፕቴ', 'ኦክቶ', 'ኖቬም', 'ዲሴም'],
  STANDALONESHORTMONTHS: ['ጃንዩ', 'ፌብሩ', 'ማርች', 'ኤፕሪ', 'ሜይ', 'ጁን', 'ጁላይ', 'ኦገስ', 'ሴፕቴ', 'ኦክቶ', 'ኖቬም', 'ዲሴም'],
  WEEKDAYS: ['እሑድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'],
  STANDALONEWEEKDAYS: ['እሑድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'],
  SHORTWEEKDAYS: ['እሑድ', 'ሰኞ', 'ማክሰ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'],
  STANDALONESHORTWEEKDAYS: ['እሑድ', 'ሰኞ', 'ማክሰ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'],
  NARROWWEEKDAYS: ['እ', 'ሰ', 'ማ', 'ረ', 'ሐ', 'ዓ', 'ቅ'],
  STANDALONENARROWWEEKDAYS: ['እ', 'ሰ', 'ማ', 'ረ', 'ሐ', 'ዓ', 'ቅ'],
  SHORTQUARTERS: ['ሩብ1', 'ሩብ2', 'ሩብ3', 'ሩብ4'],
  QUARTERS: ['1ኛው ሩብ', '2ኛው ሩብ', '3ኛው ሩብ', '4ኛው ሩብ'],
  AMPMS: ['ጥዋት', 'ከሰዓት'],
  DATEFORMATS: ['y MMMM d, EEEE', 'd MMMM y', 'd MMM y', 'dd/MM/y'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale ar.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ar = {
  ERAS: ['ق.م', 'م'],
  ERANAMES: ['قبل الميلاد', 'ميلادي'],
  NARROWMONTHS: ['ي', 'ف', 'م', 'أ', 'و', 'ن', 'ل', 'غ', 'س', 'ك', 'ب', 'د'],
  STANDALONENARROWMONTHS: ['ي', 'ف', 'م', 'أ', 'و', 'ن', 'ل', 'غ', 'س', 'ك', 'ب', 'د'],
  MONTHS: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  STANDALONEMONTHS: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  SHORTMONTHS: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  STANDALONESHORTMONTHS: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  WEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  STANDALONEWEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  SHORTWEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  STANDALONESHORTWEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  NARROWWEEKDAYS: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  STANDALONENARROWWEEKDAYS: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  SHORTQUARTERS: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع'],
  QUARTERS: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع'],
  AMPMS: ['ص', 'م'],
  DATEFORMATS: ['EEEE، d MMMM y', 'd MMMM y', 'dd‏/MM‏/y', 'd‏/M‏/y'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} في {0}', '{1} في {0}', '{1}، {0}', '{1}، {0}'],
  FIRSTDAYOFWEEK: 5,
  WEEKENDRANGE: [4, 5],
  FIRSTWEEKCUTOFFDAY: 4
};


/**
 * Date/time formatting symbols for locale ar_DZ.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ar_DZ = {
  ERAS: ['ق.م', 'م'],
  ERANAMES: ['قبل الميلاد', 'ميلادي'],
  NARROWMONTHS: ['ج', 'ف', 'م', 'أ', 'م', 'ج', 'ج', 'أ', 'س', 'أ', 'ن', 'د'],
  STANDALONENARROWMONTHS: ['ج', 'ف', 'م', 'أ', 'م', 'ج', 'ج', 'أ', 'س', 'أ', 'ن', 'د'],
  MONTHS: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  STANDALONEMONTHS: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  SHORTMONTHS: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  STANDALONESHORTMONTHS: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  WEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  STANDALONEWEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  SHORTWEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  STANDALONESHORTWEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  NARROWWEEKDAYS: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  STANDALONENARROWWEEKDAYS: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  SHORTQUARTERS: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع'],
  QUARTERS: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع'],
  AMPMS: ['ص', 'م'],
  DATEFORMATS: ['EEEE، d MMMM y', 'd MMMM y', 'dd‏/MM‏/y', 'd‏/M‏/y'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} في {0}', '{1} في {0}', '{1}، {0}', '{1}، {0}'],
  FIRSTDAYOFWEEK: 5,
  WEEKENDRANGE: [4, 5],
  FIRSTWEEKCUTOFFDAY: 4
};


/**
 * Date/time formatting symbols for locale ar_EG.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ar_EG = {
  ZERODIGIT: 0x0660,
  ERAS: ['ق.م', 'م'],
  ERANAMES: ['قبل الميلاد', 'ميلادي'],
  NARROWMONTHS: ['ي', 'ف', 'م', 'أ', 'و', 'ن', 'ل', 'غ', 'س', 'ك', 'ب', 'د'],
  STANDALONENARROWMONTHS: ['ي', 'ف', 'م', 'أ', 'و', 'ن', 'ل', 'غ', 'س', 'ك', 'ب', 'د'],
  MONTHS: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  STANDALONEMONTHS: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  SHORTMONTHS: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  STANDALONESHORTMONTHS: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  WEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  STANDALONEWEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  SHORTWEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  STANDALONESHORTWEEKDAYS: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  NARROWWEEKDAYS: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  STANDALONENARROWWEEKDAYS: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  SHORTQUARTERS: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع'],
  QUARTERS: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع'],
  AMPMS: ['ص', 'م'],
  DATEFORMATS: ['EEEE، d MMMM y', 'd MMMM y', 'dd‏/MM‏/y', 'd‏/M‏/y'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} في {0}', '{1} في {0}', '{1}، {0}', '{1}، {0}'],
  FIRSTDAYOFWEEK: 5,
  WEEKENDRANGE: [4, 5],
  FIRSTWEEKCUTOFFDAY: 4
};


/**
 * Date/time formatting symbols for locale az.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_az = {
  ERAS: ['e.ə.', 'y.e.'],
  ERANAMES: ['eramızdan əvvəl', 'yeni era'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'],
  STANDALONEMONTHS: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'],
  SHORTMONTHS: ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avq', 'sen', 'okt', 'noy', 'dek'],
  STANDALONESHORTMONTHS: ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avq', 'sen', 'okt', 'noy', 'dek'],
  WEEKDAYS: ['bazar', 'bazar ertəsi', 'çərşənbə axşamı', 'çərşənbə', 'cümə axşamı', 'cümə', 'şənbə'],
  STANDALONEWEEKDAYS: ['bazar', 'bazar ertəsi', 'çərşənbə axşamı', 'çərşənbə', 'cümə axşamı', 'cümə', 'şənbə'],
  SHORTWEEKDAYS: ['B.', 'B.e.', 'Ç.a.', 'Ç.', 'C.a.', 'C.', 'Ş.'],
  STANDALONESHORTWEEKDAYS: ['B.', 'B.E.', 'Ç.A.', 'Ç.', 'C.A.', 'C.', 'Ş.'],
  NARROWWEEKDAYS: ['7', '1', '2', '3', '4', '5', '6'],
  STANDALONENARROWWEEKDAYS: ['7', '1', '2', '3', '4', '5', '6'],
  SHORTQUARTERS: ['1-ci kv.', '2-ci kv.', '3-cü kv.', '4-cü kv.'],
  QUARTERS: ['1-ci kvartal', '2-ci kvartal', '3-cü kvartal', '4-cü kvartal'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['d MMMM y, EEEE', 'd MMMM y', 'd MMM y', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}/{0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale be.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_be = {
  ERAS: ['да н.э.', 'н.э.'],
  ERANAMES: ['да нараджэння Хрыстова', 'ад нараджэння Хрыстова'],
  NARROWMONTHS: ['с', 'л', 'с', 'к', 'м', 'ч', 'л', 'ж', 'в', 'к', 'л', 'с'],
  STANDALONENARROWMONTHS: ['с', 'л', 'с', 'к', 'м', 'ч', 'л', 'ж', 'в', 'к', 'л', 'с'],
  MONTHS: ['студзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня', 'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'],
  STANDALONEMONTHS: ['студзень', 'люты', 'сакавік', 'красавік', 'май', 'чэрвень', 'ліпень', 'жнівень', 'верасень', 'кастрычнік', 'лістапад', 'снежань'],
  SHORTMONTHS: ['сту', 'лют', 'сак', 'кра', 'мая', 'чэр', 'ліп', 'жні', 'вер', 'кас', 'ліс', 'сне'],
  STANDALONESHORTMONTHS: ['сту', 'лют', 'сак', 'кра', 'май', 'чэр', 'ліп', 'жні', 'вер', 'кас', 'ліс', 'сне'],
  WEEKDAYS: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацвер', 'пятніца', 'субота'],
  STANDALONEWEEKDAYS: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацвер', 'пятніца', 'субота'],
  SHORTWEEKDAYS: ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб'],
  STANDALONESHORTWEEKDAYS: ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб'],
  NARROWWEEKDAYS: ['н', 'п', 'а', 'с', 'ч', 'п', 'с'],
  STANDALONENARROWWEEKDAYS: ['н', 'п', 'а', 'с', 'ч', 'п', 'с'],
  SHORTQUARTERS: ['1-шы кв.', '2-гі кв.', '3-ці кв.', '4-ты кв.'],
  QUARTERS: ['1-шы квартал', '2-гі квартал', '3-ці квартал', '4-ты квартал'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d MMMM y \'г\'.', 'd MMMM y \'г\'.', 'd MMM y \'г\'.', 'd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss, zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'у\' {0}', '{1} \'у\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale bg.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_bg = {
  ERAS: ['пр.Хр.', 'сл.Хр.'],
  ERANAMES: ['преди Христа', 'след Христа'],
  NARROWMONTHS: ['я', 'ф', 'м', 'а', 'м', 'ю', 'ю', 'а', 'с', 'о', 'н', 'д'],
  STANDALONENARROWMONTHS: ['я', 'ф', 'м', 'а', 'м', 'ю', 'ю', 'а', 'с', 'о', 'н', 'д'],
  MONTHS: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'],
  STANDALONEMONTHS: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'],
  SHORTMONTHS: ['яну', 'фев', 'март', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек'],
  STANDALONESHORTMONTHS: ['яну', 'фев', 'март', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек'],
  WEEKDAYS: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'],
  STANDALONEWEEKDAYS: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'],
  SHORTWEEKDAYS: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  STANDALONESHORTWEEKDAYS: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  NARROWWEEKDAYS: ['н', 'п', 'в', 'с', 'ч', 'п', 'с'],
  STANDALONENARROWWEEKDAYS: ['н', 'п', 'в', 'с', 'ч', 'п', 'с'],
  SHORTQUARTERS: ['1. трим.', '2. трим.', '3. трим.', '4. трим.'],
  QUARTERS: ['1. тримесечие', '2. тримесечие', '3. тримесечие', '4. тримесечие'],
  AMPMS: ['пр.об.', 'сл.об.'],
  DATEFORMATS: ['EEEE, d MMMM y \'г\'.', 'd MMMM y \'г\'.', 'd.MM.y \'г\'.', 'd.MM.yy \'г\'.'],
  TIMEFORMATS: ['H:mm:ss \'ч\'. zzzz', 'H:mm:ss \'ч\'. z', 'H:mm:ss \'ч\'.', 'H:mm \'ч\'.'],
  DATETIMEFORMATS: ['{1} \'в\' {0}', '{1} \'в\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale bn.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_bn = {
  ZERODIGIT: 0x09E6,
  ERAS: ['খ্রিস্টপূর্ব', 'খৃষ্টাব্দ'],
  ERANAMES: ['খ্রিস্টপূর্ব', 'খ্রীষ্টাব্দ'],
  NARROWMONTHS: ['জা', 'ফে', 'মা', 'এ', 'মে', 'জুন', 'জু', 'আ', 'সে', 'অ', 'ন', 'ডি'],
  STANDALONENARROWMONTHS: ['জা', 'ফে', 'মা', 'এ', 'মে', 'জুন', 'জু', 'আ', 'সে', 'অ', 'ন', 'ডি'],
  MONTHS: ['জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
  STANDALONEMONTHS: ['জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
  SHORTMONTHS: ['জানু', 'ফেব', 'মার্চ', 'এপ্রি', 'মে', 'জুন', 'জুল', 'আগ', 'সেপ', 'অক্টো', 'নভে', 'ডিসে'],
  STANDALONESHORTMONTHS: ['জানু', 'ফেব', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
  WEEKDAYS: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
  STANDALONEWEEKDAYS: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
  SHORTWEEKDAYS: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'],
  STANDALONESHORTWEEKDAYS: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'],
  NARROWWEEKDAYS: ['র', 'সো', 'ম', 'বু', 'বৃ', 'শু', 'শ'],
  STANDALONENARROWWEEKDAYS: ['র', 'সো', 'ম', 'বু', 'বৃ', 'শু', 'শ'],
  SHORTQUARTERS: ['ত্রৈমাসিক', 'দ্বিতীয় ত্রৈমাসিক', 'তৃতীয় ত্রৈমাসিক', 'চতুর্থ ত্রৈমাসিক'],
  QUARTERS: ['ত্রৈমাসিক', 'দ্বিতীয় ত্রৈমাসিক', 'তৃতীয় ত্রৈমাসিক', 'চতুর্থ ত্রৈমাসিক'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d MMMM, y', 'd MMMM, y', 'd MMM, y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} এ {0}', '{1} এ {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale br.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_br = {
  ERAS: ['a-raok J.K.', 'goude J.K.'],
  ERANAMES: ['a-raok Jezuz-Krist', 'goude Jezuz-Krist'],
  NARROWMONTHS: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  MONTHS: ['Genver', 'Cʼhwevrer', 'Meurzh', 'Ebrel', 'Mae', 'Mezheven', 'Gouere', 'Eost', 'Gwengolo', 'Here', 'Du', 'Kerzu'],
  STANDALONEMONTHS: ['Genver', 'Cʼhwevrer', 'Meurzh', 'Ebrel', 'Mae', 'Mezheven', 'Gouere', 'Eost', 'Gwengolo', 'Here', 'Du', 'Kerzu'],
  SHORTMONTHS: ['Gen.', 'Cʼhwe.', 'Meur.', 'Ebr.', 'Mae', 'Mezh.', 'Goue.', 'Eost', 'Gwen.', 'Here', 'Du', 'Kzu.'],
  STANDALONESHORTMONTHS: ['Gen.', 'Cʼhwe.', 'Meur.', 'Ebr.', 'Mae', 'Mezh.', 'Goue.', 'Eost', 'Gwen.', 'Here', 'Du', 'Kzu.'],
  WEEKDAYS: ['Sul', 'Lun', 'Meurzh', 'Mercʼher', 'Yaou', 'Gwener', 'Sadorn'],
  STANDALONEWEEKDAYS: ['Sul', 'Lun', 'Meurzh', 'Mercʼher', 'Yaou', 'Gwener', 'Sadorn'],
  SHORTWEEKDAYS: ['Sul', 'Lun', 'Meu.', 'Mer.', 'Yaou', 'Gwe.', 'Sad.'],
  STANDALONESHORTWEEKDAYS: ['Sul', 'Lun', 'Meu.', 'Mer.', 'Yaou', 'Gwe.', 'Sad.'],
  NARROWWEEKDAYS: ['Su', 'L', 'Mz', 'Mc', 'Y', 'G', 'Sa'],
  STANDALONENARROWWEEKDAYS: ['Su', 'L', 'Mz', 'Mc', 'Y', 'G', 'Sa'],
  SHORTQUARTERS: ['1añ trim.', '2l trim.', '3e trim.', '4e trim.'],
  QUARTERS: ['1añ trimiziad', '2l trimiziad', '3e trimiziad', '4e trimiziad'],
  AMPMS: ['A.M.', 'G.M.'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'da\' {0}', '{1} \'da\' {0}', '{1}, {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale bs.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_bs = {
  ERAS: ['p. n. e.', 'n. e.'],
  ERANAMES: ['prije nove ere', 'nove ere'],
  NARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  STANDALONENARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  MONTHS: ['januar', 'februar', 'mart', 'april', 'maj', 'juni', 'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar'],
  STANDALONEMONTHS: ['januar', 'februar', 'mart', 'april', 'maj', 'juni', 'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar'],
  SHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  STANDALONESHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  WEEKDAYS: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
  STANDALONEWEEKDAYS: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
  SHORTWEEKDAYS: ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'],
  STANDALONESHORTWEEKDAYS: ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'],
  NARROWWEEKDAYS: ['N', 'P', 'U', 'S', 'Č', 'P', 'S'],
  STANDALONENARROWWEEKDAYS: ['n', 'p', 'u', 's', 'č', 'p', 's'],
  SHORTQUARTERS: ['KV1', 'KV2', 'KV3', 'KV4'],
  QUARTERS: ['Prvi kvartal', 'Drugi kvartal', 'Treći kvartal', 'Četvrti kvartal'],
  AMPMS: ['prijepodne', 'popodne'],
  DATEFORMATS: ['EEEE, d. MMMM y.', 'd. MMMM y.', 'd. MMM y.', 'd. M. y.'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'u\' {0}', '{1} \'u\' {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale ca.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ca = {
  ERAS: ['aC', 'dC'],
  ERANAMES: ['abans de Crist', 'després de Crist'],
  NARROWMONTHS: ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
  STANDALONENARROWMONTHS: ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
  MONTHS: ['de gener', 'de febrer', 'de març', 'd’abril', 'de maig', 'de juny', 'de juliol', 'd’agost', 'de setembre', 'd’octubre', 'de novembre', 'de desembre'],
  STANDALONEMONTHS: ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre'],
  SHORTMONTHS: ['de gen.', 'de febr.', 'de març', 'd’abr.', 'de maig', 'de juny', 'de jul.', 'd’ag.', 'de set.', 'd’oct.', 'de nov.', 'de des.'],
  STANDALONESHORTMONTHS: ['gen.', 'febr.', 'març', 'abr.', 'maig', 'juny', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'des.'],
  WEEKDAYS: ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'],
  STANDALONEWEEKDAYS: ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'],
  SHORTWEEKDAYS: ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.'],
  STANDALONESHORTWEEKDAYS: ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.'],
  NARROWWEEKDAYS: ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'],
  STANDALONENARROWWEEKDAYS: ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'],
  SHORTQUARTERS: ['1T', '2T', '3T', '4T'],
  QUARTERS: ['1r trimestre', '2n trimestre', '3r trimestre', '4t trimestre'],
  AMPMS: ['a. m.', 'p. m.'],
  DATEFORMATS: ['EEEE, d MMMM \'de\' y', 'd MMMM \'de\' y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['H:mm:ss (zzzz)', 'H:mm:ss z', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1}, \'a\' \'les\' {0}', '{1}, \'a\' \'les\' {0}', '{1}, {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale chr.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_chr = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['ᏧᏓᎷᎸ ᎤᎷᎯᏍᏗ ᎦᎶᏁᏛ', 'ᎠᏃ ᏙᎻᏂ'],
  NARROWMONTHS: ['Ꭴ', 'Ꭷ', 'Ꭰ', 'Ꭷ', 'Ꭰ', 'Ꮥ', 'Ꭻ', 'Ꭶ', 'Ꮪ', 'Ꮪ', 'Ꮕ', 'Ꭵ'],
  STANDALONENARROWMONTHS: ['Ꭴ', 'Ꭷ', 'Ꭰ', 'Ꭷ', 'Ꭰ', 'Ꮥ', 'Ꭻ', 'Ꭶ', 'Ꮪ', 'Ꮪ', 'Ꮕ', 'Ꭵ'],
  MONTHS: ['ᎤᏃᎸᏔᏅ', 'ᎧᎦᎵ', 'ᎠᏅᏱ', 'ᎧᏬᏂ', 'ᎠᏂᏍᎬᏘ', 'ᏕᎭᎷᏱ', 'ᎫᏰᏉᏂ', 'ᎦᎶᏂ', 'ᏚᎵᏍᏗ', 'ᏚᏂᏅᏗ', 'ᏅᏓᏕᏆ', 'ᎥᏍᎩᏱ'],
  STANDALONEMONTHS: ['ᎤᏃᎸᏔᏅ', 'ᎧᎦᎵ', 'ᎠᏅᏱ', 'ᎧᏬᏂ', 'ᎠᏂᏍᎬᏘ', 'ᏕᎭᎷᏱ', 'ᎫᏰᏉᏂ', 'ᎦᎶᏂ', 'ᏚᎵᏍᏗ', 'ᏚᏂᏅᏗ', 'ᏅᏓᏕᏆ', 'ᎥᏍᎩᏱ'],
  SHORTMONTHS: ['ᎤᏃ', 'ᎧᎦ', 'ᎠᏅ', 'ᎧᏬ', 'ᎠᏂ', 'ᏕᎭ', 'ᎫᏰ', 'ᎦᎶ', 'ᏚᎵ', 'ᏚᏂ', 'ᏅᏓ', 'ᎥᏍ'],
  STANDALONESHORTMONTHS: ['ᎤᏃ', 'ᎧᎦ', 'ᎠᏅ', 'ᎧᏬ', 'ᎠᏂ', 'ᏕᎭ', 'ᎫᏰ', 'ᎦᎶ', 'ᏚᎵ', 'ᏚᏂ', 'ᏅᏓ', 'ᎥᏍ'],
  WEEKDAYS: ['ᎤᎾᏙᏓᏆᏍᎬ', 'ᎤᎾᏙᏓᏉᏅᎯ', 'ᏔᎵᏁᎢᎦ', 'ᏦᎢᏁᎢᎦ', 'ᏅᎩᏁᎢᎦ', 'ᏧᎾᎩᎶᏍᏗ', 'ᎤᎾᏙᏓᏈᏕᎾ'],
  STANDALONEWEEKDAYS: ['ᎤᎾᏙᏓᏆᏍᎬ', 'ᎤᎾᏙᏓᏉᏅᎯ', 'ᏔᎵᏁᎢᎦ', 'ᏦᎢᏁᎢᎦ', 'ᏅᎩᏁᎢᎦ', 'ᏧᎾᎩᎶᏍᏗ', 'ᎤᎾᏙᏓᏈᏕᎾ'],
  SHORTWEEKDAYS: ['ᏆᏍᎬ', 'ᏉᏅᎯ', 'ᏔᎵᏁ', 'ᏦᎢᏁ', 'ᏅᎩᏁ', 'ᏧᎾᎩ', 'ᏈᏕᎾ'],
  STANDALONESHORTWEEKDAYS: ['ᏆᏍᎬ', 'ᏉᏅᎯ', 'ᏔᎵᏁ', 'ᏦᎢᏁ', 'ᏅᎩᏁ', 'ᏧᎾᎩ', 'ᏈᏕᎾ'],
  NARROWWEEKDAYS: ['Ꮖ', 'Ꮙ', 'Ꮤ', 'Ꮶ', 'Ꮕ', 'Ꮷ', 'Ꭴ'],
  STANDALONENARROWWEEKDAYS: ['Ꮖ', 'Ꮙ', 'Ꮤ', 'Ꮶ', 'Ꮕ', 'Ꮷ', 'Ꭴ'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st ᎩᏄᏙᏗ', '2nd ᎩᏄᏙᏗ', '3rd ᎩᏄᏙᏗ', '4th ᎩᏄᏙᏗ'],
  AMPMS: ['ᏌᎾᎴ', 'ᏒᎯᏱᎢᏗᏢ'],
  DATEFORMATS: ['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'M/d/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} ᎤᎾᎢ {0}', '{1} ᎤᎾᎢ {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale cs.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_cs = {
  ERAS: ['př. n. l.', 'n. l.'],
  ERANAMES: ['před naším letopočtem', 'našeho letopočtu'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'],
  STANDALONEMONTHS: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
  SHORTMONTHS: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
  STANDALONESHORTMONTHS: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
  WEEKDAYS: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
  STANDALONEWEEKDAYS: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
  SHORTWEEKDAYS: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  STANDALONESHORTWEEKDAYS: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  NARROWWEEKDAYS: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
  STANDALONENARROWWEEKDAYS: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1. čtvrtletí', '2. čtvrtletí', '3. čtvrtletí', '4. čtvrtletí'],
  AMPMS: ['dop.', 'odp.'],
  DATEFORMATS: ['EEEE d. MMMM y', 'd. MMMM y', 'd. M. y', 'dd.MM.yy'],
  TIMEFORMATS: ['H:mm:ss, zzzz', 'H:mm:ss z', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1} \'v\' {0}', '{1} \'v\' {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale cy.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_cy = {
  ERAS: ['CC', 'OC'],
  ERANAMES: ['Cyn Crist', 'Oed Crist'],
  NARROWMONTHS: ['I', 'Ch', 'M', 'E', 'M', 'M', 'G', 'A', 'M', 'H', 'T', 'Rh'],
  STANDALONENARROWMONTHS: ['I', 'Ch', 'M', 'E', 'M', 'M', 'G', 'A', 'M', 'H', 'T', 'Rh'],
  MONTHS: ['Ionawr', 'Chwefror', 'Mawrth', 'Ebrill', 'Mai', 'Mehefin', 'Gorffennaf', 'Awst', 'Medi', 'Hydref', 'Tachwedd', 'Rhagfyr'],
  STANDALONEMONTHS: ['Ionawr', 'Chwefror', 'Mawrth', 'Ebrill', 'Mai', 'Mehefin', 'Gorffennaf', 'Awst', 'Medi', 'Hydref', 'Tachwedd', 'Rhagfyr'],
  SHORTMONTHS: ['Ion', 'Chwef', 'Maw', 'Ebr', 'Mai', 'Meh', 'Gorff', 'Awst', 'Medi', 'Hyd', 'Tach', 'Rhag'],
  STANDALONESHORTMONTHS: ['Ion', 'Chw', 'Maw', 'Ebr', 'Mai', 'Meh', 'Gor', 'Awst', 'Medi', 'Hyd', 'Tach', 'Rhag'],
  WEEKDAYS: ['Dydd Sul', 'Dydd Llun', 'Dydd Mawrth', 'Dydd Mercher', 'Dydd Iau', 'Dydd Gwener', 'Dydd Sadwrn'],
  STANDALONEWEEKDAYS: ['Dydd Sul', 'Dydd Llun', 'Dydd Mawrth', 'Dydd Mercher', 'Dydd Iau', 'Dydd Gwener', 'Dydd Sadwrn'],
  SHORTWEEKDAYS: ['Sul', 'Llun', 'Maw', 'Mer', 'Iau', 'Gwen', 'Sad'],
  STANDALONESHORTWEEKDAYS: ['Sul', 'Llun', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
  NARROWWEEKDAYS: ['S', 'Ll', 'M', 'M', 'I', 'G', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'Ll', 'M', 'M', 'I', 'G', 'S'],
  SHORTQUARTERS: ['Ch1', 'Ch2', 'Ch3', 'Ch4'],
  QUARTERS: ['chwarter 1af', '2il chwarter', '3ydd chwarter', '4ydd chwarter'],
  AMPMS: ['yb', 'yh'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'am\' {0}', '{1} \'am\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale da.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_da = {
  ERAS: ['f.Kr.', 'e.Kr.'],
  ERANAMES: ['før Kristus', 'efter Kristus'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'],
  STANDALONEMONTHS: ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'],
  SHORTMONTHS: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
  STANDALONESHORTMONTHS: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
  WEEKDAYS: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  STANDALONEWEEKDAYS: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  SHORTWEEKDAYS: ['søn.', 'man.', 'tirs.', 'ons.', 'tors.', 'fre.', 'lør.'],
  STANDALONESHORTWEEKDAYS: ['søn.', 'man.', 'tirs.', 'ons.', 'tors.', 'fre.', 'lør.'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  SHORTQUARTERS: ['1. kvt.', '2. kvt.', '3. kvt.', '4. kvt.'],
  QUARTERS: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE \'den\' d. MMMM y', 'd. MMMM y', 'd. MMM y', 'dd.MM.y'],
  TIMEFORMATS: ['HH.mm.ss zzzz', 'HH.mm.ss z', 'HH.mm.ss', 'HH.mm'],
  DATETIMEFORMATS: ['{1} \'kl\'. {0}', '{1} \'kl\'. {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale de.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_de = {
  ERAS: ['v. Chr.', 'n. Chr.'],
  ERANAMES: ['v. Chr.', 'n. Chr.'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  STANDALONEMONTHS: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  SHORTMONTHS: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  WEEKDAYS: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  STANDALONEWEEKDAYS: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  SHORTWEEKDAYS: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  STANDALONESHORTWEEKDAYS: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  NARROWWEEKDAYS: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d. MMMM y', 'd. MMMM y', 'dd.MM.y', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'um\' {0}', '{1} \'um\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale de_AT.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_de_AT = {
  ERAS: ['v. Chr.', 'n. Chr.'],
  ERANAMES: ['v. Chr.', 'n. Chr.'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  STANDALONEMONTHS: ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  SHORTMONTHS: ['Jän.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
  STANDALONESHORTMONTHS: ['Jän', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  WEEKDAYS: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  STANDALONEWEEKDAYS: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  SHORTWEEKDAYS: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  STANDALONESHORTWEEKDAYS: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  NARROWWEEKDAYS: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d. MMMM y', 'd. MMMM y', 'dd.MM.y', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'um\' {0}', '{1} \'um\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale de_CH.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_de_CH = goog.i18n.DateTimeSymbols_de;


/**
 * Date/time formatting symbols for locale el.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_el = {
  ERAS: ['π.Χ.', 'μ.Χ.'],
  ERANAMES: ['προ Χριστού', 'μετά Χριστόν'],
  NARROWMONTHS: ['Ι', 'Φ', 'Μ', 'Α', 'Μ', 'Ι', 'Ι', 'Α', 'Σ', 'Ο', 'Ν', 'Δ'],
  STANDALONENARROWMONTHS: ['Ι', 'Φ', 'Μ', 'Α', 'Μ', 'Ι', 'Ι', 'Α', 'Σ', 'Ο', 'Ν', 'Δ'],
  MONTHS: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'],
  STANDALONEMONTHS: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
  SHORTMONTHS: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαΐ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
  STANDALONESHORTMONTHS: ['Ιαν', 'Φεβ', 'Μάρ', 'Απρ', 'Μάι', 'Ιούν', 'Ιούλ', 'Αύγ', 'Σεπ', 'Οκτ', 'Νοέ', 'Δεκ'],
  WEEKDAYS: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
  STANDALONEWEEKDAYS: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
  SHORTWEEKDAYS: ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ'],
  STANDALONESHORTWEEKDAYS: ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ'],
  NARROWWEEKDAYS: ['Κ', 'Δ', 'Τ', 'Τ', 'Π', 'Π', 'Σ'],
  STANDALONENARROWWEEKDAYS: ['Κ', 'Δ', 'Τ', 'Τ', 'Π', 'Π', 'Σ'],
  SHORTQUARTERS: ['Τ1', 'Τ2', 'Τ3', 'Τ4'],
  QUARTERS: ['1ο τρίμηνο', '2ο τρίμηνο', '3ο τρίμηνο', '4ο τρίμηνο'],
  AMPMS: ['π.μ.', 'μ.μ.'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} στις {0}', '{1} στις {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale en.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  STANDALONEMONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  WEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  STANDALONEWEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  SHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  STANDALONESHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'M/d/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale en_AU.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en_AU = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  STANDALONEMONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  WEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  STANDALONEWEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  SHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  STANDALONESHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  NARROWWEEKDAYS: ['Su.', 'M.', 'Tu.', 'W.', 'Th.', 'F.', 'Sa.'],
  STANDALONENARROWWEEKDAYS: ['Su.', 'M.', 'Tu.', 'W.', 'Th.', 'F.', 'Sa.'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  AMPMS: ['am', 'pm'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale en_CA.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en_CA = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['before Christ', 'Anno Domini'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  STANDALONEMONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  WEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  STANDALONEWEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  SHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  STANDALONESHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  AMPMS: ['a.m.', 'p.m.'],
  DATEFORMATS: ['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'y-MM-dd'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale en_GB.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en_GB = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  STANDALONEMONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  WEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  STANDALONEWEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  SHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  STANDALONESHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  AMPMS: ['am', 'pm'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale en_IE.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en_IE = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  STANDALONEMONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  WEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  STANDALONEWEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  SHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  STANDALONESHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  AMPMS: ['a.m.', 'p.m.'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale en_IN.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en_IN = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  STANDALONEMONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  WEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  STANDALONEWEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  SHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  STANDALONESHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  AMPMS: ['am', 'pm'],
  DATEFORMATS: ['EEEE, d MMMM, y', 'd MMMM y', 'dd-MMM-y', 'dd/MM/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale en_SG.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en_SG = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  STANDALONEMONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  WEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  STANDALONEWEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  SHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  STANDALONESHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  AMPMS: ['am', 'pm'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale en_US.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en_US = goog.i18n.DateTimeSymbols_en;


/**
 * Date/time formatting symbols for locale en_ZA.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_en_ZA = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  STANDALONEMONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  WEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  STANDALONEWEEKDAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  SHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  STANDALONESHORTWEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  AMPMS: ['am', 'pm'],
  DATEFORMATS: ['EEEE, dd MMMM y', 'dd MMMM y', 'dd MMM y', 'y/MM/dd'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale es.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_es = {
  ERAS: ['a. C.', 'd. C.'],
  ERANAMES: ['antes de Cristo', 'después de Cristo'],
  NARROWMONTHS: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  STANDALONEMONTHS: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  SHORTMONTHS: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
  STANDALONESHORTMONTHS: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
  WEEKDAYS: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  STANDALONEWEEKDAYS: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  SHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  STANDALONESHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1.er trimestre', '2.º trimestre', '3.er trimestre', '4.º trimestre'],
  AMPMS: ['a. m.', 'p. m.'],
  DATEFORMATS: ['EEEE, d \'de\' MMMM \'de\' y', 'd \'de\' MMMM \'de\' y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['H:mm:ss (zzzz)', 'H:mm:ss z', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale es_419.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_es_419 = {
  ERAS: ['a.C.', 'd.C.'],
  ERANAMES: ['antes de Cristo', 'después de Cristo'],
  NARROWMONTHS: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  STANDALONEMONTHS: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  SHORTMONTHS: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
  STANDALONESHORTMONTHS: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
  WEEKDAYS: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  STANDALONEWEEKDAYS: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  SHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  STANDALONESHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1.º trimestre', '2.º trimestre', '3.º trimestre', '4.º trimestre'],
  AMPMS: ['a. m.', 'p. m.'],
  DATEFORMATS: ['EEEE, d \'de\' MMMM \'de\' y', 'd \'de\' MMMM \'de\' y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale es_ES.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_es_ES = goog.i18n.DateTimeSymbols_es;


/**
 * Date/time formatting symbols for locale es_MX.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_es_MX = {
  ERAS: ['a.C.', 'd.C.'],
  ERANAMES: ['antes de Cristo', 'después de Cristo'],
  NARROWMONTHS: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  STANDALONEMONTHS: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  SHORTMONTHS: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
  STANDALONESHORTMONTHS: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
  WEEKDAYS: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  STANDALONEWEEKDAYS: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  SHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  STANDALONESHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1.er trimestre', '2.º trimestre', '3.er trimestre', '4.º trimestre'],
  AMPMS: ['a. m.', 'p. m.'],
  DATEFORMATS: ['EEEE, d \'de\' MMMM \'de\' y', 'd \'de\' MMMM \'de\' y', 'd MMM y', 'dd/MM/yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale es_US.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_es_US = {
  ERAS: ['a.C.', 'd.C.'],
  ERANAMES: ['antes de Cristo', 'después de Cristo'],
  NARROWMONTHS: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  STANDALONEMONTHS: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  SHORTMONTHS: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
  STANDALONESHORTMONTHS: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
  WEEKDAYS: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  STANDALONEWEEKDAYS: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  SHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  STANDALONESHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1er trimestre', '2.º trimestre', '3.º trimestre', '4.º trimestre'],
  AMPMS: ['a. m.', 'p. m.'],
  DATEFORMATS: ['EEEE, d \'de\' MMMM \'de\' y', 'd \'de\' MMMM \'de\' y', 'd MMM y', 'd/M/y'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale et.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_et = {
  ERAS: ['eKr', 'pKr'],
  ERANAMES: ['enne Kristust', 'pärast Kristust'],
  NARROWMONTHS: ['J', 'V', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'V', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'],
  STANDALONEMONTHS: ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'],
  SHORTMONTHS: ['jaan', 'veebr', 'märts', 'apr', 'mai', 'juuni', 'juuli', 'aug', 'sept', 'okt', 'nov', 'dets'],
  STANDALONESHORTMONTHS: ['jaan', 'veebr', 'märts', 'apr', 'mai', 'juuni', 'juuli', 'aug', 'sept', 'okt', 'nov', 'dets'],
  WEEKDAYS: ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'],
  STANDALONEWEEKDAYS: ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'],
  SHORTWEEKDAYS: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
  STANDALONESHORTWEEKDAYS: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
  NARROWWEEKDAYS: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
  STANDALONENARROWWEEKDAYS: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
  SHORTQUARTERS: ['K1', 'K2', 'K3', 'K4'],
  QUARTERS: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d. MMMM y', 'd. MMMM y', 'd. MMM y', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, \'kell\' {0}', '{1}, \'kell\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale eu.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_eu = {
  ERAS: ['K.a.', 'K.o.'],
  ERANAMES: ['K.a.', 'Kristo ondoren'],
  NARROWMONTHS: ['U', 'O', 'M', 'A', 'M', 'E', 'U', 'A', 'I', 'U', 'A', 'A'],
  STANDALONENARROWMONTHS: ['U', 'O', 'M', 'A', 'M', 'E', 'U', 'A', 'I', 'U', 'A', 'A'],
  MONTHS: ['urtarrila', 'otsaila', 'martxoa', 'apirila', 'maiatza', 'ekaina', 'uztaila', 'abuztua', 'iraila', 'urria', 'azaroa', 'abendua'],
  STANDALONEMONTHS: ['urtarrila', 'otsaila', 'martxoa', 'apirila', 'maiatza', 'ekaina', 'uztaila', 'abuztua', 'iraila', 'urria', 'azaroa', 'abendua'],
  SHORTMONTHS: ['urt.', 'ots.', 'mar.', 'api.', 'mai.', 'eka.', 'uzt.', 'abu.', 'ira.', 'urr.', 'aza.', 'abe.'],
  STANDALONESHORTMONTHS: ['urt.', 'ots.', 'mar.', 'api.', 'mai.', 'eka.', 'uzt.', 'abu.', 'ira.', 'urr.', 'aza.', 'abe.'],
  WEEKDAYS: ['igandea', 'astelehena', 'asteartea', 'asteazkena', 'osteguna', 'ostirala', 'larunbata'],
  STANDALONEWEEKDAYS: ['igandea', 'astelehena', 'asteartea', 'asteazkena', 'osteguna', 'ostirala', 'larunbata'],
  SHORTWEEKDAYS: ['ig.', 'al.', 'ar.', 'az.', 'og.', 'or.', 'lr.'],
  STANDALONESHORTWEEKDAYS: ['ig.', 'al.', 'ar.', 'az.', 'og.', 'or.', 'lr.'],
  NARROWWEEKDAYS: ['I', 'A', 'A', 'A', 'O', 'O', 'L'],
  STANDALONENARROWWEEKDAYS: ['I', 'A', 'A', 'A', 'O', 'O', 'L'],
  SHORTQUARTERS: ['1Hh', '2Hh', '3Hh', '4Hh'],
  QUARTERS: ['1. hiruhilekoa', '2. hiruhilekoa', '3. hiruhilekoa', '4. hiruhilekoa'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['y(\'e\')\'ko\' MMMM\'ren\' d(\'a\'), EEEE', 'y(\'e\')\'ko\' MMMM\'ren\' d(\'a\')', 'y(\'e\')\'ko\' MMM d(\'a\')', 'yy/M/d'],
  TIMEFORMATS: ['HH:mm:ss (zzzz)', 'HH:mm:ss (z)', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} ({0})', '{1} ({0})', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale fa.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_fa = {
  ZERODIGIT: 0x06F0,
  ERAS: ['ق.م.', 'م.'],
  ERANAMES: ['قبل از میلاد', 'میلادی'],
  NARROWMONTHS: ['ژ', 'ف', 'م', 'آ', 'م', 'ژ', 'ژ', 'ا', 'س', 'ا', 'ن', 'د'],
  STANDALONENARROWMONTHS: ['ژ', 'ف', 'م', 'آ', 'م', 'ژ', 'ژ', 'ا', 'س', 'ا', 'ن', 'د'],
  MONTHS: ['ژانویهٔ', 'فوریهٔ', 'مارس', 'آوریل', 'مهٔ', 'ژوئن', 'ژوئیهٔ', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
  STANDALONEMONTHS: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
  SHORTMONTHS: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
  STANDALONESHORTMONTHS: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
  WEEKDAYS: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  STANDALONEWEEKDAYS: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  SHORTWEEKDAYS: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  STANDALONESHORTWEEKDAYS: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  NARROWWEEKDAYS: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  STANDALONENARROWWEEKDAYS: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  SHORTQUARTERS: ['س‌م۱', 'س‌م۲', 'س‌م۳', 'س‌م۴'],
  QUARTERS: ['سه‌ماههٔ اول', 'سه‌ماههٔ دوم', 'سه‌ماههٔ سوم', 'سه‌ماههٔ چهارم'],
  AMPMS: ['قبل‌ازظهر', 'بعدازظهر'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'y/M/d'],
  TIMEFORMATS: ['H:mm:ss (zzzz)', 'H:mm:ss (z)', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1} ساعت {0}', '{1} ساعت {0}', '{1}، {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 5,
  WEEKENDRANGE: [4, 4],
  FIRSTWEEKCUTOFFDAY: 4
};


/**
 * Date/time formatting symbols for locale fi.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_fi = {
  ERAS: ['eKr.', 'jKr.'],
  ERANAMES: ['ennen Kristuksen syntymää', 'jälkeen Kristuksen syntymän'],
  NARROWMONTHS: ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
  STANDALONENARROWMONTHS: ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
  MONTHS: ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'],
  STANDALONEMONTHS: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
  SHORTMONTHS: ['tammik.', 'helmik.', 'maalisk.', 'huhtik.', 'toukok.', 'kesäk.', 'heinäk.', 'elok.', 'syysk.', 'lokak.', 'marrask.', 'jouluk.'],
  STANDALONESHORTMONTHS: ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
  WEEKDAYS: ['sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina', 'lauantaina'],
  STANDALONEWEEKDAYS: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'],
  SHORTWEEKDAYS: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
  STANDALONESHORTWEEKDAYS: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'K', 'T', 'P', 'L'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'K', 'T', 'P', 'L'],
  SHORTQUARTERS: ['1. nelj.', '2. nelj.', '3. nelj.', '4. nelj.'],
  QUARTERS: ['1. neljännes', '2. neljännes', '3. neljännes', '4. neljännes'],
  AMPMS: ['ap.', 'ip.'],
  DATEFORMATS: ['cccc d. MMMM y', 'd. MMMM y', 'd.M.y', 'd.M.y'],
  TIMEFORMATS: ['H.mm.ss zzzz', 'H.mm.ss z', 'H.mm.ss', 'H.mm'],
  DATETIMEFORMATS: ['{1} \'klo\' {0}', '{1} \'klo\' {0}', '{1} \'klo\' {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale fil.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_fil = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  STANDALONENARROWMONTHS: ['E', 'P', 'M', 'A', 'M', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  MONTHS: ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
  STANDALONEMONTHS: ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
  SHORTMONTHS: ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  STANDALONESHORTMONTHS: ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  WEEKDAYS: ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'],
  STANDALONEWEEKDAYS: ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'],
  SHORTWEEKDAYS: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  STANDALONESHORTWEEKDAYS: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  NARROWWEEKDAYS: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  STANDALONENARROWWEEKDAYS: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['ika-1 quarter', 'ika-2 quarter', 'ika-3 quarter', 'ika-4 na quarter'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'M/d/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} \'nang\' {0}', '{1} \'nang\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale fr.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_fr = {
  ERAS: ['av. J.-C.', 'ap. J.-C.'],
  ERANAMES: ['avant Jésus-Christ', 'après Jésus-Christ'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  STANDALONEMONTHS: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  SHORTMONTHS: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  STANDALONESHORTMONTHS: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  WEEKDAYS: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  STANDALONEWEEKDAYS: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  SHORTWEEKDAYS: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  STANDALONESHORTWEEKDAYS: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1er trimestre', '2e trimestre', '3e trimestre', '4e trimestre'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'à\' {0}', '{1} \'à\' {0}', '{1}, {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale fr_CA.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_fr_CA = {
  ERAS: ['av. J.-C.', 'ap. J.-C.'],
  ERANAMES: ['avant Jésus-Christ', 'après Jésus-Christ'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  STANDALONEMONTHS: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  SHORTMONTHS: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  STANDALONESHORTMONTHS: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  WEEKDAYS: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  STANDALONEWEEKDAYS: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  SHORTWEEKDAYS: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  STANDALONESHORTWEEKDAYS: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1er trimestre', '2e trimestre', '3e trimestre', '4e trimestre'],
  AMPMS: ['a.m.', 'p.m.'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'y-MM-dd'],
  TIMEFORMATS: ['HH \'h\' mm \'min\' ss \'s\' zzzz', 'HH \'h\' mm \'min\' ss \'s\' z', 'HH \'h\' mm \'min\' ss \'s\'', 'HH \'h\' mm'],
  DATETIMEFORMATS: ['{1} \'à\' {0}', '{1} \'à\' {0}', '{1}, {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale ga.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ga = {
  ERAS: ['RC', 'AD'],
  ERANAMES: ['Roimh Chríost', 'Anno Domini'],
  NARROWMONTHS: ['E', 'F', 'M', 'A', 'B', 'M', 'I', 'L', 'M', 'D', 'S', 'N'],
  STANDALONENARROWMONTHS: ['E', 'F', 'M', 'A', 'B', 'M', 'I', 'L', 'M', 'D', 'S', 'N'],
  MONTHS: ['Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Meitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deireadh Fómhair', 'Samhain', 'Nollaig'],
  STANDALONEMONTHS: ['Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Meitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deireadh Fómhair', 'Samhain', 'Nollaig'],
  SHORTMONTHS: ['Ean', 'Feabh', 'Márta', 'Aib', 'Beal', 'Meith', 'Iúil', 'Lún', 'MFómh', 'DFómh', 'Samh', 'Noll'],
  STANDALONESHORTMONTHS: ['Ean', 'Feabh', 'Márta', 'Aib', 'Beal', 'Meith', 'Iúil', 'Lún', 'MFómh', 'DFómh', 'Samh', 'Noll'],
  WEEKDAYS: ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Sathairn'],
  STANDALONEWEEKDAYS: ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Sathairn'],
  SHORTWEEKDAYS: ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'],
  STANDALONESHORTWEEKDAYS: ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'C', 'D', 'A', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'C', 'D', 'A', 'S'],
  SHORTQUARTERS: ['R1', 'R2', 'R3', 'R4'],
  QUARTERS: ['1ú ráithe', '2ú ráithe', '3ú ráithe', '4ú ráithe'],
  AMPMS: ['r.n.', 'i.n.'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'ag\' {0}', '{1} \'ag\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale gl.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_gl = {
  ERAS: ['a.C.', 'd.C.'],
  ERANAMES: ['antes de Cristo', 'despois de Cristo'],
  NARROWMONTHS: ['x.', 'f.', 'm.', 'a.', 'm.', 'x.', 'x.', 'a.', 's.', 'o.', 'n.', 'd.'],
  STANDALONENARROWMONTHS: ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['xaneiro', 'febreiro', 'marzo', 'abril', 'maio', 'xuño', 'xullo', 'agosto', 'setembro', 'outubro', 'novembro', 'decembro'],
  STANDALONEMONTHS: ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'],
  SHORTMONTHS: ['xan.', 'feb.', 'mar.', 'abr.', 'maio', 'xuño', 'xul.', 'ago.', 'set.', 'out.', 'nov.', 'dec.'],
  STANDALONESHORTMONTHS: ['Xan.', 'Feb.', 'Mar.', 'Abr.', 'Maio', 'Xuño', 'Xul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dec.'],
  WEEKDAYS: ['domingo', 'luns', 'martes', 'mércores', 'xoves', 'venres', 'sábado'],
  STANDALONEWEEKDAYS: ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'],
  SHORTWEEKDAYS: ['dom.', 'luns', 'mar.', 'mér.', 'xov.', 'ven.', 'sáb.'],
  STANDALONESHORTWEEKDAYS: ['Dom.', 'Luns', 'Mar.', 'Mér.', 'Xov.', 'Ven.', 'Sáb.'],
  NARROWWEEKDAYS: ['d.', 'l.', 'm.', 'm.', 'x.', 'v.', 's.'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'X', 'V', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1.º trimestre', '2.º trimestre', '3.º trimestre', '4.º trimestre'],
  AMPMS: ['a.m.', 'p.m.'],
  DATEFORMATS: ['EEEE, d \'de\' MMMM \'de\' y', 'd \'de\' MMMM \'de\' y', 'd \'de\' MMM \'de\' y', 'dd/MM/yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale gsw.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_gsw = {
  ERAS: ['v. Chr.', 'n. Chr.'],
  ERANAMES: ['v. Chr.', 'n. Chr.'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'Auguscht', 'Septämber', 'Oktoober', 'Novämber', 'Dezämber'],
  STANDALONEMONTHS: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'Auguscht', 'Septämber', 'Oktoober', 'Novämber', 'Dezämber'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  WEEKDAYS: ['Sunntig', 'Määntig', 'Ziischtig', 'Mittwuch', 'Dunschtig', 'Friitig', 'Samschtig'],
  STANDALONEWEEKDAYS: ['Sunntig', 'Määntig', 'Ziischtig', 'Mittwuch', 'Dunschtig', 'Friitig', 'Samschtig'],
  SHORTWEEKDAYS: ['Su.', 'Mä.', 'Zi.', 'Mi.', 'Du.', 'Fr.', 'Sa.'],
  STANDALONESHORTWEEKDAYS: ['Su.', 'Mä.', 'Zi.', 'Mi.', 'Du.', 'Fr.', 'Sa.'],
  NARROWWEEKDAYS: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal'],
  AMPMS: ['am Vormittag', 'am Namittag'],
  DATEFORMATS: ['EEEE, d. MMMM y', 'd. MMMM y', 'dd.MM.y', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale gu.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_gu = {
  ERAS: ['ઈ.સ.પૂર્વે', 'ઈ.સ.'],
  ERANAMES: ['ઈસવીસન પૂર્વે', 'ઇસવીસન'],
  NARROWMONTHS: ['જા', 'ફે', 'મા', 'એ', 'મે', 'જૂ', 'જુ', 'ઑ', 'સ', 'ઑ', 'ન', 'ડિ'],
  STANDALONENARROWMONTHS: ['જા', 'ફે', 'મા', 'એ', 'મે', 'જૂ', 'જુ', 'ઑ', 'સ', 'ઑ', 'ન', 'ડિ'],
  MONTHS: ['જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઑગસ્ટ', 'સપ્ટેમ્બર', 'ઑક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર'],
  STANDALONEMONTHS: ['જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઑગસ્ટ', 'સપ્ટેમ્બર', 'ઑક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર'],
  SHORTMONTHS: ['જાન્યુ', 'ફેબ્રુ', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઑગસ્ટ', 'સપ્ટે', 'ઑક્ટો', 'નવે', 'ડિસે'],
  STANDALONESHORTMONTHS: ['જાન્યુ', 'ફેબ્રુ', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઑગસ્ટ', 'સપ્ટે', 'ઑક્ટો', 'નવે', 'ડિસે'],
  WEEKDAYS: ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'],
  STANDALONEWEEKDAYS: ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'],
  SHORTWEEKDAYS: ['રવિ', 'સોમ', 'મંગળ', 'બુધ', 'ગુરુ', 'શુક્ર', 'શનિ'],
  STANDALONESHORTWEEKDAYS: ['રવિ', 'સોમ', 'મંગળ', 'બુધ', 'ગુરુ', 'શુક્ર', 'શનિ'],
  NARROWWEEKDAYS: ['ર', 'સો', 'મં', 'બુ', 'ગુ', 'શુ', 'શ'],
  STANDALONENARROWWEEKDAYS: ['ર', 'સો', 'મં', 'બુ', 'ગુ', 'શુ', 'શ'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1લો ત્રિમાસ', '2જો ત્રિમાસ', '3જો ત્રિમાસ', '4થો ત્રિમાસ'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d MMMM, y', 'd MMMM, y', 'd MMM, y', 'd/M/yy'],
  TIMEFORMATS: ['hh:mm:ss a zzzz', 'hh:mm:ss a z', 'hh:mm:ss a', 'hh:mm a'],
  DATETIMEFORMATS: ['{1} એ {0} વાગ્યે', '{1} એ {0} વાગ્યે', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale haw.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_haw = {
  ERAS: ['BCE', 'CE'],
  ERANAMES: ['BCE', 'CE'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['Ianuali', 'Pepeluali', 'Malaki', 'ʻApelila', 'Mei', 'Iune', 'Iulai', 'ʻAukake', 'Kepakemapa', 'ʻOkakopa', 'Nowemapa', 'Kekemapa'],
  STANDALONEMONTHS: ['Ianuali', 'Pepeluali', 'Malaki', 'ʻApelila', 'Mei', 'Iune', 'Iulai', 'ʻAukake', 'Kepakemapa', 'ʻOkakopa', 'Nowemapa', 'Kekemapa'],
  SHORTMONTHS: ['Ian.', 'Pep.', 'Mal.', 'ʻAp.', 'Mei', 'Iun.', 'Iul.', 'ʻAu.', 'Kep.', 'ʻOk.', 'Now.', 'Kek.'],
  STANDALONESHORTMONTHS: ['Ian.', 'Pep.', 'Mal.', 'ʻAp.', 'Mei', 'Iun.', 'Iul.', 'ʻAu.', 'Kep.', 'ʻOk.', 'Now.', 'Kek.'],
  WEEKDAYS: ['Lāpule', 'Poʻakahi', 'Poʻalua', 'Poʻakolu', 'Poʻahā', 'Poʻalima', 'Poʻaono'],
  STANDALONEWEEKDAYS: ['Lāpule', 'Poʻakahi', 'Poʻalua', 'Poʻakolu', 'Poʻahā', 'Poʻalima', 'Poʻaono'],
  SHORTWEEKDAYS: ['LP', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6'],
  STANDALONESHORTWEEKDAYS: ['LP', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale he.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_he = {
  ERAS: ['לפנה״ס', 'לספירה'],
  ERANAMES: ['לפני הספירה', 'לספירה'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
  STANDALONEMONTHS: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
  SHORTMONTHS: ['ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'],
  STANDALONESHORTMONTHS: ['ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'],
  WEEKDAYS: ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'],
  STANDALONEWEEKDAYS: ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'],
  SHORTWEEKDAYS: ['יום א׳', 'יום ב׳', 'יום ג׳', 'יום ד׳', 'יום ה׳', 'יום ו׳', 'שבת'],
  STANDALONESHORTWEEKDAYS: ['יום א׳', 'יום ב׳', 'יום ג׳', 'יום ד׳', 'יום ה׳', 'יום ו׳', 'שבת'],
  NARROWWEEKDAYS: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
  STANDALONENARROWWEEKDAYS: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['רבעון 1', 'רבעון 2', 'רבעון 3', 'רבעון 4'],
  AMPMS: ['לפנה״צ', 'אחה״צ'],
  DATEFORMATS: ['EEEE, d בMMMM y', 'd בMMMM y', 'd בMMM y', 'd.M.y'],
  TIMEFORMATS: ['H:mm:ss zzzz', 'H:mm:ss z', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1} בשעה {0}', '{1} בשעה {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [4, 5],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale hi.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_hi = {
  ERAS: ['ईसा-पूर्व', 'ईस्वी'],
  ERANAMES: ['ईसा-पूर्व', 'ईसवी सन'],
  NARROWMONTHS: ['ज', 'फ़', 'मा', 'अ', 'म', 'जू', 'जु', 'अ', 'सि', 'अ', 'न', 'दि'],
  STANDALONENARROWMONTHS: ['ज', 'फ़', 'मा', 'अ', 'म', 'जू', 'जु', 'अ', 'सि', 'अ', 'न', 'दि'],
  MONTHS: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्तूबर', 'नवंबर', 'दिसंबर'],
  STANDALONEMONTHS: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्तूबर', 'नवंबर', 'दिसंबर'],
  SHORTMONTHS: ['जन॰', 'फ़र॰', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुल॰', 'अग॰', 'सित॰', 'अक्तू॰', 'नव॰', 'दिस॰'],
  STANDALONESHORTMONTHS: ['जन॰', 'फ़र॰', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुल॰', 'अग॰', 'सित॰', 'अक्तू॰', 'नव॰', 'दिस॰'],
  WEEKDAYS: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
  STANDALONEWEEKDAYS: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
  SHORTWEEKDAYS: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
  STANDALONESHORTWEEKDAYS: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
  NARROWWEEKDAYS: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  STANDALONENARROWWEEKDAYS: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  SHORTQUARTERS: ['ति1', 'ति2', 'ति3', 'ति4'],
  QUARTERS: ['पहली तिमाही', 'दूसरी तिमाही', 'तीसरी तिमाही', 'चौथी तिमाही'],
  AMPMS: ['am', 'pm'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} को {0} बजे', '{1} को {0} बजे', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale hr.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_hr = {
  ERAS: ['pr. Kr.', 'po. Kr.'],
  ERANAMES: ['prije Krista', 'poslije Krista'],
  NARROWMONTHS: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  STANDALONENARROWMONTHS: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  MONTHS: ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenoga', 'prosinca'],
  STANDALONEMONTHS: ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'],
  SHORTMONTHS: ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro'],
  STANDALONESHORTMONTHS: ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro'],
  WEEKDAYS: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
  STANDALONEWEEKDAYS: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
  SHORTWEEKDAYS: ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'],
  STANDALONESHORTWEEKDAYS: ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'],
  NARROWWEEKDAYS: ['N', 'P', 'U', 'S', 'Č', 'P', 'S'],
  STANDALONENARROWWEEKDAYS: ['n', 'p', 'u', 's', 'č', 'p', 's'],
  SHORTQUARTERS: ['1kv', '2kv', '3kv', '4kv'],
  QUARTERS: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d. MMMM y.', 'd. MMMM y.', 'd. MMM y.', 'dd. MM. y.'],
  TIMEFORMATS: ['HH:mm:ss (zzzz)', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'u\' {0}', '{1} \'u\' {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale hu.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_hu = {
  ERAS: ['i. e.', 'i. sz.'],
  ERANAMES: ['Krisztus előtt', 'időszámításunk szerint'],
  NARROWMONTHS: ['J', 'F', 'M', 'Á', 'M', 'J', 'J', 'A', 'Sz', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'Á', 'M', 'J', 'J', 'A', 'Sz', 'O', 'N', 'D'],
  MONTHS: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
  STANDALONEMONTHS: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
  SHORTMONTHS: ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'],
  STANDALONESHORTMONTHS: ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'],
  WEEKDAYS: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
  STANDALONEWEEKDAYS: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
  SHORTWEEKDAYS: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
  STANDALONESHORTWEEKDAYS: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
  NARROWWEEKDAYS: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
  STANDALONENARROWWEEKDAYS: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
  SHORTQUARTERS: ['I. n.év', 'II. n.év', 'III. n.év', 'IV. n.év'],
  QUARTERS: ['I. negyedév', 'II. negyedév', 'III. negyedév', 'IV. negyedév'],
  AMPMS: ['de.', 'du.'],
  DATEFORMATS: ['y. MMMM d., EEEE', 'y. MMMM d.', 'y. MMM d.', 'y. MM. dd.'],
  TIMEFORMATS: ['H:mm:ss zzzz', 'H:mm:ss z', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale hy.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_hy = {
  ERAS: ['մ.թ.ա.', 'մ.թ.'],
  ERANAMES: ['Քրիստոսից առաջ', 'Քրիստոսից հետո'],
  NARROWMONTHS: ['Հ', 'Փ', 'Մ', 'Ա', 'Մ', 'Հ', 'Հ', 'Օ', 'Ս', 'Հ', 'Ն', 'Դ'],
  STANDALONENARROWMONTHS: ['Հ', 'Փ', 'Մ', 'Ա', 'Մ', 'Հ', 'Հ', 'Օ', 'Ս', 'Հ', 'Ն', 'Դ'],
  MONTHS: ['հունվարի', 'փետրվարի', 'մարտի', 'ապրիլի', 'մայիսի', 'հունիսի', 'հուլիսի', 'օգոստոսի', 'սեպտեմբերի', 'հոկտեմբերի', 'նոյեմբերի', 'դեկտեմբերի'],
  STANDALONEMONTHS: ['հունվար', 'փետրվար', 'մարտ', 'ապրիլ', 'մայիս', 'հունիս', 'հուլիս', 'օգոստոս', 'սեպտեմբեր', 'հոկտեմբեր', 'նոյեմբեր', 'դեկտեմբեր'],
  SHORTMONTHS: ['հնվ', 'փտվ', 'մրտ', 'ապր', 'մյս', 'հնս', 'հլս', 'օգս', 'սեպ', 'հոկ', 'նոյ', 'դեկ'],
  STANDALONESHORTMONTHS: ['հնվ', 'փտվ', 'մրտ', 'ապր', 'մյս', 'հնս', 'հլս', 'օգս', 'սեպ', 'հոկ', 'նոյ', 'դեկ'],
  WEEKDAYS: ['կիրակի', 'երկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի', 'հինգշաբթի', 'ուրբաթ', 'շաբաթ'],
  STANDALONEWEEKDAYS: ['կիրակի', 'երկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի', 'հինգշաբթի', 'ուրբաթ', 'շաբաթ'],
  SHORTWEEKDAYS: ['կիր', 'երկ', 'երք', 'չրք', 'հնգ', 'ուր', 'շբթ'],
  STANDALONESHORTWEEKDAYS: ['կիր', 'երկ', 'երք', 'չրք', 'հնգ', 'ուր', 'շբթ'],
  NARROWWEEKDAYS: ['Կ', 'Ե', 'Ե', 'Չ', 'Հ', 'Ո', 'Շ'],
  STANDALONENARROWWEEKDAYS: ['Կ', 'Ե', 'Ե', 'Չ', 'Հ', 'Ո', 'Շ'],
  SHORTQUARTERS: ['1-ին եռմս.', '2-րդ եռմս.', '3-րդ եռմս.', '4-րդ եռմս.'],
  QUARTERS: ['1-ին եռամսյակ', '2-րդ եռամսյակ', '3-րդ եռամսյակ', '4-րդ եռամսյակ'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['y թ. MMMM d, EEEE', 'dd MMMM, y թ.', 'dd MMM, y թ.', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale id.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_id = {
  ERAS: ['SM', 'M'],
  ERANAMES: ['Sebelum Masehi', 'Masehi'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  STANDALONEMONTHS: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
  WEEKDAYS: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  STANDALONEWEEKDAYS: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  SHORTWEEKDAYS: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  STANDALONESHORTWEEKDAYS: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  NARROWWEEKDAYS: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
  STANDALONENARROWWEEKDAYS: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
  SHORTQUARTERS: ['K1', 'K2', 'K3', 'K4'],
  QUARTERS: ['Kuartal ke-1', 'Kuartal ke-2', 'Kuartal ke-3', 'Kuartal ke-4'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, dd MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/yy'],
  TIMEFORMATS: ['HH.mm.ss zzzz', 'HH.mm.ss z', 'HH.mm.ss', 'HH.mm'],
  DATETIMEFORMATS: ['{1} \'pukul\' {0}', '{1} \'pukul\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale in.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_in = {
  ERAS: ['SM', 'M'],
  ERANAMES: ['Sebelum Masehi', 'Masehi'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  STANDALONEMONTHS: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
  WEEKDAYS: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  STANDALONEWEEKDAYS: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  SHORTWEEKDAYS: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  STANDALONESHORTWEEKDAYS: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  NARROWWEEKDAYS: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
  STANDALONENARROWWEEKDAYS: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
  SHORTQUARTERS: ['K1', 'K2', 'K3', 'K4'],
  QUARTERS: ['Kuartal ke-1', 'Kuartal ke-2', 'Kuartal ke-3', 'Kuartal ke-4'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, dd MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/yy'],
  TIMEFORMATS: ['HH.mm.ss zzzz', 'HH.mm.ss z', 'HH.mm.ss', 'HH.mm'],
  DATETIMEFORMATS: ['{1} \'pukul\' {0}', '{1} \'pukul\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale is.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_is = {
  ERAS: ['f.Kr.', 'e.Kr.'],
  ERANAMES: ['fyrir Krist', 'eftir Krist'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'Á', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'Á', 'S', 'O', 'N', 'D'],
  MONTHS: ['janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember'],
  STANDALONEMONTHS: ['janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember'],
  SHORTMONTHS: ['jan.', 'feb.', 'mar.', 'apr.', 'maí', 'jún.', 'júl.', 'ágú.', 'sep.', 'okt.', 'nóv.', 'des.'],
  STANDALONESHORTMONTHS: ['jan.', 'feb.', 'mar.', 'apr.', 'maí', 'jún.', 'júl.', 'ágú.', 'sep.', 'okt.', 'nóv.', 'des.'],
  WEEKDAYS: ['sunnudagur', 'mánudagur', 'þriðjudagur', 'miðvikudagur', 'fimmtudagur', 'föstudagur', 'laugardagur'],
  STANDALONEWEEKDAYS: ['sunnudagur', 'mánudagur', 'þriðjudagur', 'miðvikudagur', 'fimmtudagur', 'föstudagur', 'laugardagur'],
  SHORTWEEKDAYS: ['sun.', 'mán.', 'þri.', 'mið.', 'fim.', 'fös.', 'lau.'],
  STANDALONESHORTWEEKDAYS: ['sun.', 'mán.', 'þri.', 'mið.', 'fim.', 'fös.', 'lau.'],
  NARROWWEEKDAYS: ['S', 'M', 'Þ', 'M', 'F', 'F', 'L'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'Þ', 'M', 'F', 'F', 'L'],
  SHORTQUARTERS: ['F1', 'F2', 'F3', 'F4'],
  QUARTERS: ['1. fjórðungur', '2. fjórðungur', '3. fjórðungur', '4. fjórðungur'],
  AMPMS: ['f.h.', 'e.h.'],
  DATEFORMATS: ['EEEE, d. MMMM y', 'd. MMMM y', 'd. MMM y', 'd.M.y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'kl\'. {0}', '{1} \'kl\'. {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale it.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_it = {
  ERAS: ['a.C.', 'd.C.'],
  ERANAMES: ['avanti Cristo', 'dopo Cristo'],
  NARROWMONTHS: ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
  STANDALONEMONTHS: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
  SHORTMONTHS: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
  STANDALONESHORTMONTHS: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
  WEEKDAYS: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
  STANDALONEWEEKDAYS: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
  SHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  STANDALONESHORTWEEKDAYS: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'alle\' \'ore\' {0}', '{1} \'alle\' \'ore\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale iw.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_iw = {
  ERAS: ['לפנה״ס', 'לספירה'],
  ERANAMES: ['לפני הספירה', 'לספירה'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
  STANDALONEMONTHS: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
  SHORTMONTHS: ['ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'],
  STANDALONESHORTMONTHS: ['ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'],
  WEEKDAYS: ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'],
  STANDALONEWEEKDAYS: ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'],
  SHORTWEEKDAYS: ['יום א׳', 'יום ב׳', 'יום ג׳', 'יום ד׳', 'יום ה׳', 'יום ו׳', 'שבת'],
  STANDALONESHORTWEEKDAYS: ['יום א׳', 'יום ב׳', 'יום ג׳', 'יום ד׳', 'יום ה׳', 'יום ו׳', 'שבת'],
  NARROWWEEKDAYS: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
  STANDALONENARROWWEEKDAYS: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['רבעון 1', 'רבעון 2', 'רבעון 3', 'רבעון 4'],
  AMPMS: ['לפנה״צ', 'אחה״צ'],
  DATEFORMATS: ['EEEE, d בMMMM y', 'd בMMMM y', 'd בMMM y', 'd.M.y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1} בשעה {0}', '{1} בשעה {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [4, 5],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale ja.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ja = {
  ERAS: ['紀元前', '西暦'],
  ERANAMES: ['紀元前', '西暦'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  STANDALONEMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  SHORTMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  STANDALONESHORTMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  WEEKDAYS: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  STANDALONEWEEKDAYS: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  SHORTWEEKDAYS: ['日', '月', '火', '水', '木', '金', '土'],
  STANDALONESHORTWEEKDAYS: ['日', '月', '火', '水', '木', '金', '土'],
  NARROWWEEKDAYS: ['日', '月', '火', '水', '木', '金', '土'],
  STANDALONENARROWWEEKDAYS: ['日', '月', '火', '水', '木', '金', '土'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['第1四半期', '第2四半期', '第3四半期', '第4四半期'],
  AMPMS: ['午前', '午後'],
  DATEFORMATS: ['y年M月d日EEEE', 'y年M月d日', 'y/MM/dd', 'y/MM/dd'],
  TIMEFORMATS: ['H時mm分ss秒 zzzz', 'H:mm:ss z', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale ka.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ka = {
  ERAS: ['ძვ. წ.', 'ახ. წ.'],
  ERANAMES: ['ძველი წელთაღრიცხვით', 'ახალი წელთაღრიცხვით'],
  NARROWMONTHS: ['ი', 'თ', 'მ', 'ა', 'მ', 'ი', 'ი', 'ა', 'ს', 'ო', 'ნ', 'დ'],
  STANDALONENARROWMONTHS: ['ი', 'თ', 'მ', 'ა', 'მ', 'ი', 'ი', 'ა', 'ს', 'ო', 'ნ', 'დ'],
  MONTHS: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
  STANDALONEMONTHS: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
  SHORTMONTHS: ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'],
  STANDALONESHORTMONTHS: ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'],
  WEEKDAYS: ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'],
  STANDALONEWEEKDAYS: ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'],
  SHORTWEEKDAYS: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
  STANDALONESHORTWEEKDAYS: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
  NARROWWEEKDAYS: ['კ', 'ო', 'ს', 'ო', 'ხ', 'პ', 'შ'],
  STANDALONENARROWWEEKDAYS: ['კ', 'ო', 'ს', 'ო', 'ხ', 'პ', 'შ'],
  SHORTQUARTERS: ['I კვ.', 'II კვ.', 'III კვ.', 'IV კვ.'],
  QUARTERS: ['I კვარტალი', 'II კვარტალი', 'III კვარტალი', 'IV კვარტალი'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, dd MMMM, y', 'd MMMM, y', 'd MMM. y', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale kk.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_kk = {
  ERAS: ['б.з.д.', 'б.з.'],
  ERANAMES: ['Біздің заманымызға дейін', 'біздің заманымыз'],
  NARROWMONTHS: ['Қ', 'А', 'Н', 'С', 'М', 'М', 'Ш', 'Т', 'Қ', 'Қ', 'Қ', 'Ж'],
  STANDALONENARROWMONTHS: ['Қ', 'А', 'Н', 'С', 'М', 'М', 'Ш', 'Т', 'Қ', 'Қ', 'Қ', 'Ж'],
  MONTHS: ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан'],
  STANDALONEMONTHS: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
  SHORTMONTHS: ['қаң.', 'ақп.', 'нау.', 'сәу.', 'мам.', 'мау.', 'шіл.', 'там.', 'қыр.', 'қаз.', 'қар.', 'жел.'],
  STANDALONESHORTMONTHS: ['қаң.', 'ақп.', 'нау.', 'сәу.', 'мам.', 'мау.', 'шіл.', 'там.', 'қыр.', 'қаз.', 'қар.', 'жел.'],
  WEEKDAYS: ['жексенбі', 'дүйсенбі', 'сейсенбі', 'сәрсенбі', 'бейсенбі', 'жұма', 'сенбі'],
  STANDALONEWEEKDAYS: ['жексенбі', 'дүйсенбі', 'сейсенбі', 'сәрсенбі', 'бейсенбі', 'жұма', 'сенбі'],
  SHORTWEEKDAYS: ['жс', 'дс', 'сс', 'ср', 'бс', 'жм', 'сб'],
  STANDALONESHORTWEEKDAYS: ['жс', 'дс', 'сс', 'ср', 'бс', 'жм', 'сб'],
  NARROWWEEKDAYS: ['Ж', 'Д', 'С', 'С', 'Б', 'Ж', 'С'],
  STANDALONENARROWWEEKDAYS: ['Ж', 'Д', 'С', 'С', 'Б', 'Ж', 'С'],
  SHORTQUARTERS: ['І тқс.', 'ІІ тқс.', 'ІІІ тқс.', 'IV тқс.'],
  QUARTERS: ['І тоқсан', 'ІІ тоқсан', 'ІІІ тоқсан', 'IV тоқсан'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['y \'ж\'. d MMMM, EEEE', 'y \'ж\'. d MMMM', 'y \'ж\'. dd MMM', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale km.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_km = {
  ERAS: ['មុន គ.ស.', 'គ.ស.'],
  ERANAMES: ['មុន​គ្រិស្តសករាជ', 'គ្រិស្តសករាជ'],
  NARROWMONTHS: ['ម', 'ក', 'ម', 'ម', 'ឧ', 'ម', 'ក', 'ស', 'ក', 'ត', 'វ', 'ធ'],
  STANDALONENARROWMONTHS: ['ម', 'ក', 'ម', 'ម', 'ឧ', 'ម', 'ក', 'ស', 'ក', 'ត', 'វ', 'ធ'],
  MONTHS: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
  STANDALONEMONTHS: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
  SHORTMONTHS: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
  STANDALONESHORTMONTHS: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
  WEEKDAYS: ['អាទិត្យ', 'ច័ន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍'],
  STANDALONEWEEKDAYS: ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍'],
  SHORTWEEKDAYS: ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហ', 'សុក្រ', 'សៅរ៍'],
  STANDALONESHORTWEEKDAYS: ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហ', 'សុក្រ', 'សៅរ៍'],
  NARROWWEEKDAYS: ['អ', 'ច', 'អ', 'ព', 'ព', 'ស', 'ស'],
  STANDALONENARROWWEEKDAYS: ['អ', 'ច', 'អ', 'ព', 'ព', 'ស', 'ស'],
  SHORTQUARTERS: ['ត្រីមាសទី 1', 'ត្រីមាសទី 2', 'ត្រីមាសទី 3', 'ត្រីមាសទី 4'],
  QUARTERS: ['ត្រីមាសទី 1', 'ត្រីមាសទី 2', 'ត្រីមាសទី 3', 'ត្រីមាសទី 4'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} នៅ​ម៉ោង {0}', '{1} នៅ​ម៉ោង {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale kn.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_kn = {
  ERAS: ['ಕ್ರಿ.ಪೂ', 'ಕ್ರಿ.ಶ'],
  ERANAMES: ['ಕ್ರಿಸ್ತ ಪೂರ್ವ', 'ಕ್ರಿಸ್ತ ಶಕ'],
  NARROWMONTHS: ['ಜ', 'ಫೆ', 'ಮಾ', 'ಏ', 'ಮೇ', 'ಜೂ', 'ಜು', 'ಆ', 'ಸೆ', 'ಅ', 'ನ', 'ಡಿ'],
  STANDALONENARROWMONTHS: ['ಜ', 'ಫೆ', 'ಮಾ', 'ಏ', 'ಮೇ', 'ಜೂ', 'ಜು', 'ಆ', 'ಸೆ', 'ಅ', 'ನ', 'ಡಿ'],
  MONTHS: ['ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿಲ್', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂಬರ್', 'ಅಕ್ಟೋಬರ್', 'ನವೆಂಬರ್', 'ಡಿಸೆಂಬರ್'],
  STANDALONEMONTHS: ['ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿಲ್', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂಬರ್', 'ಅಕ್ಟೋಬರ್', 'ನವೆಂಬರ್', 'ಡಿಸೆಂಬರ್'],
  SHORTMONTHS: ['ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿ', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂ', 'ಅಕ್ಟೋ', 'ನವೆಂ', 'ಡಿಸೆಂ'],
  STANDALONESHORTMONTHS: ['ಜನ', 'ಫೆಬ್ರ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿ', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗ', 'ಸೆಪ್ಟೆಂ', 'ಅಕ್ಟೋ', 'ನವೆಂ', 'ಡಿಸೆಂ'],
  WEEKDAYS: ['ಭಾನುವಾರ', 'ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ'],
  STANDALONEWEEKDAYS: ['ಭಾನುವಾರ', 'ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ'],
  SHORTWEEKDAYS: ['ಭಾನು', 'ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ'],
  STANDALONESHORTWEEKDAYS: ['ಭಾನು', 'ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ'],
  NARROWWEEKDAYS: ['ಭಾ', 'ಸೋ', 'ಮಂ', 'ಬು', 'ಗು', 'ಶು', 'ಶ'],
  STANDALONENARROWWEEKDAYS: ['ಭಾ', 'ಸೋ', 'ಮಂ', 'ಬು', 'ಗು', 'ಶು', 'ಶ'],
  SHORTQUARTERS: ['ತ್ರೈ 1', 'ತ್ರೈ 2', 'ತ್ರೈ 3', 'ತ್ರೈ 4'],
  QUARTERS: ['1ನೇ ತ್ರೈಮಾಸಿಕ', '2ನೇ ತ್ರೈಮಾಸಿಕ', '3ನೇ ತ್ರೈಮಾಸಿಕ', '4ನೇ ತ್ರೈಮಾಸಿಕ'],
  AMPMS: ['ಪೂರ್ವಾಹ್ನ', 'ಅಪರಾಹ್ನ'],
  DATEFORMATS: ['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'd/M/yy'],
  TIMEFORMATS: ['hh:mm:ss a zzzz', 'hh:mm:ss a z', 'hh:mm:ss a', 'hh:mm a'],
  DATETIMEFORMATS: ['{1} ರಂದು {0} ಸಮಯಕ್ಕೆ', '{1} ರಂದು {0} ಸಮಯಕ್ಕೆ', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale ko.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ko = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['기원전', '서기'],
  NARROWMONTHS: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  STANDALONENARROWMONTHS: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  MONTHS: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  STANDALONEMONTHS: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  SHORTMONTHS: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  STANDALONESHORTMONTHS: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  WEEKDAYS: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  STANDALONEWEEKDAYS: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  SHORTWEEKDAYS: ['일', '월', '화', '수', '목', '금', '토'],
  STANDALONESHORTWEEKDAYS: ['일', '월', '화', '수', '목', '금', '토'],
  NARROWWEEKDAYS: ['일', '월', '화', '수', '목', '금', '토'],
  STANDALONENARROWWEEKDAYS: ['일', '월', '화', '수', '목', '금', '토'],
  SHORTQUARTERS: ['1분기', '2분기', '3분기', '4분기'],
  QUARTERS: ['제 1/4분기', '제 2/4분기', '제 3/4분기', '제 4/4분기'],
  AMPMS: ['오전', '오후'],
  DATEFORMATS: ['y년 M월 d일 EEEE', 'y년 M월 d일', 'y. M. d.', 'yy. M. d.'],
  TIMEFORMATS: ['a h시 m분 s초 zzzz', 'a h시 m분 s초 z', 'a h:mm:ss', 'a h:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale ky.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ky = {
  ERAS: ['б.з.ч.', 'б.з.'],
  ERANAMES: ['биздин заманга чейин', 'биздин заман'],
  NARROWMONTHS: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  STANDALONENARROWMONTHS: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  MONTHS: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
  STANDALONEMONTHS: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  SHORTMONTHS: ['янв.', 'фев.', 'мар.', 'апр.', 'май', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'],
  STANDALONESHORTMONTHS: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  WEEKDAYS: ['жекшемби', 'дүйшөмбү', 'шейшемби', 'шаршемби', 'бейшемби', 'жума', 'ишемби'],
  STANDALONEWEEKDAYS: ['жекшемби', 'дүйшөмбү', 'шейшемби', 'шаршемби', 'бейшемби', 'жума', 'ишемби'],
  SHORTWEEKDAYS: ['жек.', 'дүй.', 'шейш.', 'шарш.', 'бейш.', 'жума', 'ишм.'],
  STANDALONESHORTWEEKDAYS: ['жек.', 'дүй.', 'шейш.', 'шарш.', 'бейш.', 'жума', 'ишм.'],
  NARROWWEEKDAYS: ['Ж', 'Д', 'Ш', 'Ш', 'Б', 'Ж', 'И'],
  STANDALONENARROWWEEKDAYS: ['Ж', 'Д', 'Ш', 'Ш', 'Б', 'Ж', 'И'],
  SHORTQUARTERS: ['1-чей.', '2-чей.', '3-чей.', '4-чей.'],
  QUARTERS: ['1-чейрек', '2-чейрек', '3-чейрек', '4-чейрек'],
  AMPMS: ['таңкы', 'түштөн кийинки'],
  DATEFORMATS: ['y-\'ж\'., d-MMMM, EEEE', 'y-\'ж\'., d-MMMM', 'y-\'ж\'., d-MMM', 'd/M/yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale ln.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ln = {
  ERAS: ['libóso ya', 'nsima ya Y'],
  ERANAMES: ['Yambo ya Yézu Krís', 'Nsima ya Yézu Krís'],
  NARROWMONTHS: ['y', 'f', 'm', 'a', 'm', 'y', 'y', 'a', 's', 'ɔ', 'n', 'd'],
  STANDALONENARROWMONTHS: ['y', 'f', 'm', 'a', 'm', 'y', 'y', 'a', 's', 'ɔ', 'n', 'd'],
  MONTHS: ['sánzá ya yambo', 'sánzá ya míbalé', 'sánzá ya mísáto', 'sánzá ya mínei', 'sánzá ya mítáno', 'sánzá ya motóbá', 'sánzá ya nsambo', 'sánzá ya mwambe', 'sánzá ya libwa', 'sánzá ya zómi', 'sánzá ya zómi na mɔ̌kɔ́', 'sánzá ya zómi na míbalé'],
  STANDALONEMONTHS: ['sánzá ya yambo', 'sánzá ya míbalé', 'sánzá ya mísáto', 'sánzá ya mínei', 'sánzá ya mítáno', 'sánzá ya motóbá', 'sánzá ya nsambo', 'sánzá ya mwambe', 'sánzá ya libwa', 'sánzá ya zómi', 'sánzá ya zómi na mɔ̌kɔ́', 'sánzá ya zómi na míbalé'],
  SHORTMONTHS: ['yan', 'fbl', 'msi', 'apl', 'mai', 'yun', 'yul', 'agt', 'stb', 'ɔtb', 'nvb', 'dsb'],
  STANDALONESHORTMONTHS: ['yan', 'fbl', 'msi', 'apl', 'mai', 'yun', 'yul', 'agt', 'stb', 'ɔtb', 'nvb', 'dsb'],
  WEEKDAYS: ['eyenga', 'mokɔlɔ mwa yambo', 'mokɔlɔ mwa míbalé', 'mokɔlɔ mwa mísáto', 'mokɔlɔ ya mínéi', 'mokɔlɔ ya mítáno', 'mpɔ́sɔ'],
  STANDALONEWEEKDAYS: ['eyenga', 'mokɔlɔ mwa yambo', 'mokɔlɔ mwa míbalé', 'mokɔlɔ mwa mísáto', 'mokɔlɔ ya mínéi', 'mokɔlɔ ya mítáno', 'mpɔ́sɔ'],
  SHORTWEEKDAYS: ['eye', 'ybo', 'mbl', 'mst', 'min', 'mtn', 'mps'],
  STANDALONESHORTWEEKDAYS: ['eye', 'ybo', 'mbl', 'mst', 'min', 'mtn', 'mps'],
  NARROWWEEKDAYS: ['e', 'y', 'm', 'm', 'm', 'm', 'p'],
  STANDALONENARROWWEEKDAYS: ['e', 'y', 'm', 'm', 'm', 'm', 'p'],
  SHORTQUARTERS: ['SM1', 'SM2', 'SM3', 'SM4'],
  QUARTERS: ['sánzá mísáto ya yambo', 'sánzá mísáto ya míbalé', 'sánzá mísáto ya mísáto', 'sánzá mísáto ya mínei'],
  AMPMS: ['ntɔ́ngɔ́', 'mpókwa'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'd/M/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale lo.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_lo = {
  ERAS: ['ກ່ອນ ຄ.ສ.', 'ຄ.ສ.'],
  ERANAMES: ['ກ່ອນຄຣິດສັກກະລາດ', 'ຄຣິດສັກກະລາດ'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['ມັງກອນ', 'ກຸມພາ', 'ມີນາ', 'ເມສາ', 'ພຶດສະພາ', 'ມິຖຸນາ', 'ກໍລະກົດ', 'ສິງຫາ', 'ກັນຍາ', 'ຕຸລາ', 'ພະຈິກ', 'ທັນວາ'],
  STANDALONEMONTHS: ['ມັງກອນ', 'ກຸມພາ', 'ມີນາ', 'ເມສາ', 'ພຶດສະພາ', 'ມິຖຸນາ', 'ກໍລະກົດ', 'ສິງຫາ', 'ກັນຍາ', 'ຕຸລາ', 'ພະຈິກ', 'ທັນວາ'],
  SHORTMONTHS: ['ມ.ກ.', 'ກ.ພ.', 'ມ.ນ.', 'ມ.ສ.', 'ພ.ພ.', 'ມິ.ຖ.', 'ກ.ລ.', 'ສ.ຫ.', 'ກ.ຍ.', 'ຕ.ລ.', 'ພ.ຈ.', 'ທ.ວ.'],
  STANDALONESHORTMONTHS: ['ມ.ກ.', 'ກ.ພ.', 'ມ.ນ.', 'ມ.ສ.', 'ພ.ພ.', 'ມິ.ຖ.', 'ກ.ລ.', 'ສ.ຫ.', 'ກ.ຍ.', 'ຕ.ລ.', 'ພ.ຈ.', 'ທ.ວ.'],
  WEEKDAYS: ['ວັນອາທິດ', 'ວັນຈັນ', 'ວັນອັງຄານ', 'ວັນພຸດ', 'ວັນພະຫັດ', 'ວັນສຸກ', 'ວັນເສົາ'],
  STANDALONEWEEKDAYS: ['ວັນອາທິດ', 'ວັນຈັນ', 'ວັນອັງຄານ', 'ວັນພຸດ', 'ວັນພະຫັດ', 'ວັນສຸກ', 'ວັນເສົາ'],
  SHORTWEEKDAYS: ['ອາທິດ', 'ຈັນ', 'ອັງຄານ', 'ພຸດ', 'ພະຫັດ', 'ສຸກ', 'ເສົາ'],
  STANDALONESHORTWEEKDAYS: ['ອາທິດ', 'ຈັນ', 'ອັງຄານ', 'ພຸດ', 'ພະຫັດ', 'ສຸກ', 'ເສົາ'],
  NARROWWEEKDAYS: ['ອາ', 'ຈ', 'ອ', 'ພ', 'ພຫ', 'ສຸ', 'ສ'],
  STANDALONENARROWWEEKDAYS: ['ອາ', 'ຈ', 'ອ', 'ພ', 'ພຫ', 'ສຸ', 'ສ'],
  SHORTQUARTERS: ['ຕມ1', 'ຕມ2', 'ຕມ3', 'ຕມ4'],
  QUARTERS: ['ໄຕຣມາດ 1', 'ໄຕຣມາດ 2', 'ໄຕຣມາດ 3', 'ໄຕຣມາດ 4'],
  AMPMS: ['ກ່ອນທ່ຽງ', 'ຫຼັງທ່ຽງ'],
  DATEFORMATS: ['EEEE ທີ d MMMM G y', 'd MMMM y', 'd MMM y', 'd/M/y'],
  TIMEFORMATS: ['H ໂມງ m ນາທີ ss ວິນາທີ zzzz', 'H ໂມງ m ນາທີ ss ວິນາທີ z', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale lt.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_lt = {
  ERAS: ['pr. Kr.', 'po Kr.'],
  ERANAMES: ['prieš Kristų', 'po Kristaus'],
  NARROWMONTHS: ['S', 'V', 'K', 'B', 'G', 'B', 'L', 'R', 'R', 'S', 'L', 'G'],
  STANDALONENARROWMONTHS: ['S', 'V', 'K', 'B', 'G', 'B', 'L', 'R', 'R', 'S', 'L', 'G'],
  MONTHS: ['sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio', 'liepos', 'rugpjūčio', 'rugsėjo', 'spalio', 'lapkričio', 'gruodžio'],
  STANDALONEMONTHS: ['sausis', 'vasaris', 'kovas', 'balandis', 'gegužė', 'birželis', 'liepa', 'rugpjūtis', 'rugsėjis', 'spalis', 'lapkritis', 'gruodis'],
  SHORTMONTHS: ['saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.', 'lapkr.', 'gruod.'],
  STANDALONESHORTMONTHS: ['saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.', 'lapkr.', 'gruod.'],
  WEEKDAYS: ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis'],
  STANDALONEWEEKDAYS: ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis'],
  SHORTWEEKDAYS: ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
  STANDALONESHORTWEEKDAYS: ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
  NARROWWEEKDAYS: ['S', 'P', 'A', 'T', 'K', 'P', 'Š'],
  STANDALONENARROWWEEKDAYS: ['S', 'P', 'A', 'T', 'K', 'P', 'Š'],
  SHORTQUARTERS: ['I k.', 'II k.', 'III k.', 'IV k.'],
  QUARTERS: ['I ketvirtis', 'II ketvirtis', 'III ketvirtis', 'IV ketvirtis'],
  AMPMS: ['priešpiet', 'popiet'],
  DATEFORMATS: ['y \'m\'. MMMM d \'d\'., EEEE', 'y \'m\'. MMMM d \'d\'.', 'y-MM-dd', 'y-MM-dd'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale lv.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_lv = {
  ERAS: ['p.m.ē.', 'm.ē.'],
  ERANAMES: ['pirms mūsu ēras', 'mūsu ērā'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris'],
  STANDALONEMONTHS: ['janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris'],
  SHORTMONTHS: ['janv.', 'febr.', 'marts', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.', 'dec.'],
  STANDALONESHORTMONTHS: ['janv.', 'febr.', 'marts', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.', 'dec.'],
  WEEKDAYS: ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena'],
  STANDALONEWEEKDAYS: ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena'],
  SHORTWEEKDAYS: ['svētd.', 'pirmd.', 'otrd.', 'trešd.', 'ceturtd.', 'piektd.', 'sestd.'],
  STANDALONESHORTWEEKDAYS: ['Svētd.', 'Pirmd.', 'Otrd.', 'Trešd.', 'Ceturtd.', 'Piektd.', 'Sestd.'],
  NARROWWEEKDAYS: ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
  SHORTQUARTERS: ['1. cet.', '2. cet.', '3. cet.', '4. cet.'],
  QUARTERS: ['1. ceturksnis', '2. ceturksnis', '3. ceturksnis', '4. ceturksnis'],
  AMPMS: ['priekšpusdienā', 'pēcpusdienā'],
  DATEFORMATS: ['EEEE, y. \'gada\' d. MMMM', 'y. \'gada\' d. MMMM', 'y. \'gada\' d. MMM', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale mk.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_mk = {
  ERAS: ['п.н.е.', 'н.е.'],
  ERANAMES: ['пред нашата ера', 'од нашата ера'],
  NARROWMONTHS: ['ј', 'ф', 'м', 'а', 'м', 'ј', 'ј', 'а', 'с', 'о', 'н', 'д'],
  STANDALONENARROWMONTHS: ['ј', 'ф', 'м', 'а', 'м', 'ј', 'ј', 'а', 'с', 'о', 'н', 'д'],
  MONTHS: ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември'],
  STANDALONEMONTHS: ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември'],
  SHORTMONTHS: ['јан.', 'фев.', 'мар.', 'апр.', 'мај', 'јун.', 'јул.', 'авг.', 'септ.', 'окт.', 'ноем.', 'дек.'],
  STANDALONESHORTMONTHS: ['јан.', 'фев.', 'мар.', 'апр.', 'мај', 'јун.', 'јул.', 'авг.', 'септ.', 'окт.', 'ноем.', 'дек.'],
  WEEKDAYS: ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота'],
  STANDALONEWEEKDAYS: ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота'],
  SHORTWEEKDAYS: ['нед.', 'пон.', 'вто.', 'сре.', 'чет.', 'пет.', 'саб.'],
  STANDALONESHORTWEEKDAYS: ['нед.', 'пон.', 'вто.', 'сре.', 'чет.', 'пет.', 'саб.'],
  NARROWWEEKDAYS: ['н', 'п', 'в', 'с', 'ч', 'п', 'с'],
  STANDALONENARROWWEEKDAYS: ['н', 'п', 'в', 'с', 'ч', 'п', 'с'],
  SHORTQUARTERS: ['јан – мар', 'апр – јун', 'јул – септ', 'окт – дек'],
  QUARTERS: ['прво тримесечје', 'второ тримесечје', 'трето тримесечје', 'четврто тримесечје'],
  AMPMS: ['претпл.', 'попл.'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd.M.y', 'd.M.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, \'во\' {0}', '{1}, \'во\' {0}', '{1}, \'во\' {0}', '{1}, \'во\' {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale ml.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ml = {
  ERAS: ['ക്രി.മു.', 'എഡി'],
  ERANAMES: ['ക്രിസ്‌തുവിന് മുമ്പ്', 'ആന്നോ ഡൊമിനി'],
  NARROWMONTHS: ['ജ', 'ഫെ', 'മാ', 'ഏ', 'മെ', 'ജൂൺ', 'ജൂ', 'ഓ', 'സെ', 'ഒ', 'ന', 'ഡി'],
  STANDALONENARROWMONTHS: ['ജ', 'ഫെ', 'മാ', 'ഏ', 'മെ', 'ജൂൺ', 'ജൂ', 'ഓ', 'സെ', 'ഒ', 'ന', 'ഡി'],
  MONTHS: ['ജനുവരി', 'ഫെബ്രുവരി', 'മാർച്ച്', 'ഏപ്രിൽ', 'മേയ്', 'ജൂൺ', 'ജൂലൈ', 'ഓഗസ്റ്റ്', 'സെപ്റ്റംബർ', 'ഒക്‌ടോബർ', 'നവംബർ', 'ഡിസംബർ'],
  STANDALONEMONTHS: ['ജനുവരി', 'ഫെബ്രുവരി', 'മാർച്ച്', 'ഏപ്രിൽ', 'മേയ്', 'ജൂൺ', 'ജൂലൈ', 'ഓഗസ്റ്റ്', 'സെപ്റ്റംബർ', 'ഒക്‌ടോബർ', 'നവംബർ', 'ഡിസംബർ'],
  SHORTMONTHS: ['ജനു', 'ഫെബ്രു', 'മാർ', 'ഏപ്രി', 'മേയ്', 'ജൂൺ', 'ജൂലൈ', 'ഓഗ', 'സെപ്റ്റം', 'ഒക്ടോ', 'നവം', 'ഡിസം'],
  STANDALONESHORTMONTHS: ['ജനു', 'ഫെബ്രു', 'മാർ', 'ഏപ്രി', 'മേയ്', 'ജൂൺ', 'ജൂലൈ', 'ഓഗ', 'സെപ്റ്റം', 'ഒക്ടോ', 'നവം', 'ഡിസം'],
  WEEKDAYS: ['ഞായറാഴ്‌ച', 'തിങ്കളാഴ്‌ച', 'ചൊവ്വാഴ്ച', 'ബുധനാഴ്‌ച', 'വ്യാഴാഴ്‌ച', 'വെള്ളിയാഴ്‌ച', 'ശനിയാഴ്‌ച'],
  STANDALONEWEEKDAYS: ['ഞായറാഴ്‌ച', 'തിങ്കളാഴ്‌ച', 'ചൊവ്വാഴ്‌ച', 'ബുധനാഴ്‌ച', 'വ്യാഴാഴ്‌ച', 'വെള്ളിയാഴ്‌ച', 'ശനിയാഴ്‌ച'],
  SHORTWEEKDAYS: ['ഞായർ', 'തിങ്കൾ', 'ചൊവ്വ', 'ബുധൻ', 'വ്യാഴം', 'വെള്ളി', 'ശനി'],
  STANDALONESHORTWEEKDAYS: ['ഞായർ', 'തിങ്കൾ', 'ചൊവ്വ', 'ബുധൻ', 'വ്യാഴം', 'വെള്ളി', 'ശനി'],
  NARROWWEEKDAYS: ['ഞ', 'തി', 'ചൊ', 'ബു', 'വ്യാ', 'വെ', 'ശ'],
  STANDALONENARROWWEEKDAYS: ['ഞാ', 'തി', 'ചൊ', 'ബു', 'വ്യാ', 'വെ', 'ശ'],
  SHORTQUARTERS: ['ഒന്നാം പാദം', 'രണ്ടാം പാദം', 'മൂന്നാം പാദം', 'നാലാം പാദം'],
  QUARTERS: ['ഒന്നാം പാദം', 'രണ്ടാം പാദം', 'മൂന്നാം പാദം', 'നാലാം പാദം'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['y, MMMM d, EEEE', 'y, MMMM d', 'y, MMM d', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale mn.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_mn = {
  ERAS: ['МЭӨ', 'МЭ'],
  ERANAMES: ['манай эриний өмнөх', 'манай эриний'],
  NARROWMONTHS: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
  STANDALONENARROWMONTHS: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
  MONTHS: ['нэгдүгээр сар', 'хоёрдугаар сар', 'гуравдугаар сар', 'дөрөвдүгээр сар', 'тавдугаар сар', 'зургаадугаар сар', 'долоодугаар сар', 'наймдугаар сар', 'есдүгээр сар', 'аравдугаар сар', 'арван нэгдүгээр сар', 'арван хоёрдугаар сар'],
  STANDALONEMONTHS: ['Нэгдүгээр сар', 'Хоёрдугаар сар', 'Гуравдугаар сар', 'Дөрөвдүгээр сар', 'Тавдугаар сар', 'Зургаадугаар сар', 'Долоодугаар сар', 'Наймдугаар сар', 'Есдүгээр сар', 'Аравдугаар сар', 'Арван нэгдүгээр сар', 'Арван хоёрдугаар сар'],
  SHORTMONTHS: ['1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'],
  STANDALONESHORTMONTHS: ['1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'],
  WEEKDAYS: ['ням', 'даваа', 'мягмар', 'лхагва', 'пүрэв', 'баасан', 'бямба'],
  STANDALONEWEEKDAYS: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'],
  SHORTWEEKDAYS: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  STANDALONESHORTWEEKDAYS: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  NARROWWEEKDAYS: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  STANDALONENARROWWEEKDAYS: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  SHORTQUARTERS: ['I улирал', 'II улирал', 'III улирал', 'IV улирал'],
  QUARTERS: ['1-р улирал', '2-р улирал', '3-р улирал', '4-р улирал'],
  AMPMS: ['ү.ө.', 'ү.х.'],
  DATEFORMATS: ['y \'оны\' MMMM\'ын\' d, EEEE \'гараг\'', 'y \'оны\' MMMM\'ын\' d', 'y \'оны\' MMM\'ын\' d', 'y.MM.dd'],
  TIMEFORMATS: ['HH:mm:ss (zzzz)', 'HH:mm:ss (z)', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale mo.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_mo = {
  ERAS: ['î.Hr.', 'd.Hr.'],
  ERANAMES: ['înainte de Hristos', 'după Hristos'],
  NARROWMONTHS: ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
  STANDALONEMONTHS: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
  SHORTMONTHS: ['ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'],
  STANDALONESHORTMONTHS: ['ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'],
  WEEKDAYS: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
  STANDALONEWEEKDAYS: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
  SHORTWEEKDAYS: ['dum.', 'lun.', 'mar.', 'mie.', 'joi', 'vin.', 'sâm.'],
  STANDALONESHORTWEEKDAYS: ['dum.', 'lun.', 'mar.', 'mie.', 'joi', 'vin.', 'sâm.'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  SHORTQUARTERS: ['trim. I', 'trim. II', 'trim. III', 'trim. IV'],
  QUARTERS: ['trimestrul I', 'trimestrul al II-lea', 'trimestrul al III-lea', 'trimestrul al IV-lea'],
  AMPMS: ['a.m.', 'p.m.'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'dd.MM.y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'la\' {0}', '{1} \'la\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale mr.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_mr = {
  ZERODIGIT: 0x0966,
  ERAS: ['ई. स. पू.', 'इ. स.'],
  ERANAMES: ['ईसवीसनपूर्व', 'ईसवीसन'],
  NARROWMONTHS: ['जा', 'फे', 'मा', 'ए', 'मे', 'जू', 'जु', 'ऑ', 'स', 'ऑ', 'नो', 'डि'],
  STANDALONENARROWMONTHS: ['जा', 'फे', 'मा', 'ए', 'मे', 'जू', 'जु', 'ऑ', 'स', 'ऑ', 'नो', 'डि'],
  MONTHS: ['जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'],
  STANDALONEMONTHS: ['जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'],
  SHORTMONTHS: ['जाने', 'फेब्रु', 'मार्च', 'एप्रि', 'मे', 'जून', 'जुलै', 'ऑग', 'सप्टें', 'ऑक्टो', 'नोव्हें', 'डिसें'],
  STANDALONESHORTMONTHS: ['जाने', 'फेब्रु', 'मार्च', 'एप्रि', 'मे', 'जून', 'जुलै', 'ऑग', 'सप्टें', 'ऑक्टो', 'नोव्हें', 'डिसें'],
  WEEKDAYS: ['रविवार', 'सोमवार', 'मंगळवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
  STANDALONEWEEKDAYS: ['रविवार', 'सोमवार', 'मंगळवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
  SHORTWEEKDAYS: ['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
  STANDALONESHORTWEEKDAYS: ['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
  NARROWWEEKDAYS: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  STANDALONENARROWWEEKDAYS: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  SHORTQUARTERS: ['ति१', 'ति२', 'ति३', 'ति४'],
  QUARTERS: ['प्रथम तिमाही', 'द्वितीय तिमाही', 'तृतीय तिमाही', 'चतुर्थ तिमाही'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d MMMM, y', 'd MMMM, y', 'd MMM, y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} रोजी {0}', '{1} रोजी {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale ms.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ms = {
  ERAS: ['S.M.', 'TM'],
  ERANAMES: ['S.M.', 'TM'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'O', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'O', 'S', 'O', 'N', 'D'],
  MONTHS: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
  STANDALONEMONTHS: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'],
  WEEKDAYS: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  STANDALONEWEEKDAYS: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  SHORTWEEKDAYS: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
  STANDALONESHORTWEEKDAYS: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
  NARROWWEEKDAYS: ['A', 'I', 'S', 'R', 'K', 'J', 'S'],
  STANDALONENARROWWEEKDAYS: ['A', 'I', 'S', 'R', 'K', 'J', 'S'],
  SHORTQUARTERS: ['S1', 'S2', 'S3', 'S4'],
  QUARTERS: ['Suku pertama', 'Suku Ke-2', 'Suku Ke-3', 'Suku Ke-4'],
  AMPMS: ['PG', 'PTG'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'd/MM/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} \'pada\' {0}', '{1} \'pada\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale mt.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_mt = {
  ERAS: ['QK', 'WK'],
  ERANAMES: ['Qabel Kristu', 'Wara Kristu'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'Ġ', 'L', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['Jn', 'Fr', 'Mz', 'Ap', 'Mj', 'Ġn', 'Lj', 'Aw', 'St', 'Ob', 'Nv', 'Dċ'],
  MONTHS: ['Jannar', 'Frar', 'Marzu', 'April', 'Mejju', 'Ġunju', 'Lulju', 'Awwissu', 'Settembru', 'Ottubru', 'Novembru', 'Diċembru'],
  STANDALONEMONTHS: ['Jannar', 'Frar', 'Marzu', 'April', 'Mejju', 'Ġunju', 'Lulju', 'Awwissu', 'Settembru', 'Ottubru', 'Novembru', 'Diċembru'],
  SHORTMONTHS: ['Jan', 'Fra', 'Mar', 'Apr', 'Mej', 'Ġun', 'Lul', 'Aww', 'Set', 'Ott', 'Nov', 'Diċ'],
  STANDALONESHORTMONTHS: ['Jan', 'Fra', 'Mar', 'Apr', 'Mej', 'Ġun', 'Lul', 'Aww', 'Set', 'Ott', 'Nov', 'Diċ'],
  WEEKDAYS: ['Il-Ħadd', 'It-Tnejn', 'It-Tlieta', 'L-Erbgħa', 'Il-Ħamis', 'Il-Ġimgħa', 'Is-Sibt'],
  STANDALONEWEEKDAYS: ['Il-Ħadd', 'It-Tnejn', 'It-Tlieta', 'L-Erbgħa', 'Il-Ħamis', 'Il-Ġimgħa', 'Is-Sibt'],
  SHORTWEEKDAYS: ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'],
  STANDALONESHORTWEEKDAYS: ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'],
  NARROWWEEKDAYS: ['Ħd', 'T', 'Tl', 'Er', 'Ħm', 'Ġm', 'Sb'],
  STANDALONENARROWWEEKDAYS: ['Ħd', 'Tn', 'Tl', 'Er', 'Ħm', 'Ġm', 'Sb'],
  SHORTQUARTERS: ['K1', 'K2', 'K3', 'K4'],
  QUARTERS: ['1el kwart', '2ni kwart', '3et kwart', '4ba’ kwart'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d \'ta\'’ MMMM y', 'd \'ta\'’ MMMM y', 'dd MMM y', 'dd/MM/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale my.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_my = {
  ZERODIGIT: 0x1040,
  ERAS: ['ဘီစီ', 'အဒေီ'],
  ERANAMES: ['ခရစ်တော် မပေါ်မီနှစ်', 'ခရစ်နှစ်'],
  NARROWMONTHS: ['ဇ', 'ဖ', 'မ', 'ဧ', 'မ', 'ဇ', 'ဇ', 'ဩ', 'စ', 'အ', 'န', 'ဒ'],
  STANDALONENARROWMONTHS: ['ဇ', 'ဖ', 'မ', 'ဧ', 'မ', 'ဇ', 'ဇ', 'ဩ', 'စ', 'အ', 'န', 'ဒ'],
  MONTHS: ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီ', 'မတ်', 'ဧပြီ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'ဩဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'],
  STANDALONEMONTHS: ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီ', 'မတ်', 'ဧပြီ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'ဩဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'],
  SHORTMONTHS: ['ဇန်', 'ဖေ', 'မတ်', 'ဧ', 'မေ', 'ဇွန်', 'ဇူ', 'ဩ', 'စက်', 'အောက်', 'နို', 'ဒီ'],
  STANDALONESHORTMONTHS: ['ဇန်', 'ဖေ', 'မတ်', 'ဧ', 'မေ', 'ဇွန်', 'ဇူ', 'ဩ', 'စက်', 'အောက်', 'နို', 'ဒီ'],
  WEEKDAYS: ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'],
  STANDALONEWEEKDAYS: ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'],
  SHORTWEEKDAYS: ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'],
  STANDALONESHORTWEEKDAYS: ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'],
  NARROWWEEKDAYS: ['တ', 'တ', 'အ', 'ဗ', 'က', 'သ', 'စ'],
  STANDALONENARROWWEEKDAYS: ['တ', 'တ', 'အ', 'ဗ', 'က', 'သ', 'စ'],
  SHORTQUARTERS: ['ပထမ သုံးလပတ်', 'ဒုတိယ သုံးလပတ်', 'တတိယ သုံးလပတ်', 'စတုတ္ထ သုံးလပတ်'],
  QUARTERS: ['ပထမ သုံးလပတ်', 'ဒုတိယ သုံးလပတ်', 'တတိယ သုံးလပတ်', 'စတုတ္ထ သုံးလပတ်'],
  AMPMS: ['နံနက်', 'ညနေ'],
  DATEFORMATS: ['y၊ MMMM d၊ EEEE', 'y၊ MMMM d', 'y၊ MMM d', 'd/M/yy'],
  TIMEFORMATS: ['zzzz HH:mm:ss', 'z HH:mm:ss', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale nb.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_nb = {
  ERAS: ['f.Kr.', 'e.Kr.'],
  ERANAMES: ['før Kristus', 'etter Kristus'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
  STANDALONEMONTHS: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
  SHORTMONTHS: ['jan.', 'feb.', 'mars', 'apr.', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'],
  STANDALONESHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'],
  WEEKDAYS: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  STANDALONEWEEKDAYS: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  SHORTWEEKDAYS: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
  STANDALONESHORTWEEKDAYS: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  SHORTQUARTERS: ['K1', 'K2', 'K3', 'K4'],
  QUARTERS: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal'],
  AMPMS: ['a.m.', 'p.m.'],
  DATEFORMATS: ['EEEE d. MMMM y', 'd. MMMM y', 'd. MMM y', 'dd.MM.y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'kl\'. {0}', '{1} \'kl\'. {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale ne.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ne = {
  ZERODIGIT: 0x0966,
  ERAS: ['ईसा पूर्व', 'सन्'],
  ERANAMES: ['ईसा पूर्व', 'सन्'],
  NARROWMONTHS: ['जन', 'फेब', 'मार्च', 'अप्र', 'मे', 'जुन', 'जुल', 'अग', 'सेप', 'अक्टो', 'नोभे', 'डिसे'],
  STANDALONENARROWMONTHS: ['जन', 'फेेब', 'मार्च', 'अप्र', 'मे', 'जुन', 'जुल', 'अग', 'सेप', 'अक्टो', 'नोभे', 'डिसे'],
  MONTHS: ['जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'],
  STANDALONEMONTHS: ['जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'],
  SHORTMONTHS: ['जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'],
  STANDALONESHORTMONTHS: ['जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'],
  WEEKDAYS: ['आइतबार', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'],
  STANDALONEWEEKDAYS: ['आइतबार', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'],
  SHORTWEEKDAYS: ['आइत', 'सोम', 'मङ्गल', 'बुध', 'बिहि', 'शुक्र', 'शनि'],
  STANDALONESHORTWEEKDAYS: ['आइत', 'सोम', 'मङ्गल', 'बुध', 'बिहि', 'शुक्र', 'शनि'],
  NARROWWEEKDAYS: ['आ', 'सो', 'म', 'बु', 'बि', 'शु', 'श'],
  STANDALONENARROWWEEKDAYS: ['आ', 'सो', 'म', 'बु', 'बि', 'शु', 'श'],
  SHORTQUARTERS: ['पहिलो सत्र', 'दोस्रो सत्र', 'तेस्रो सत्र', 'चौथो सत्र'],
  QUARTERS: ['पहिलो सत्र', 'दोस्रो सत्र', 'तेस्रो सत्र', 'चौथो सत्र'],
  AMPMS: ['पूर्वाह्न', 'अपराह्न'],
  DATEFORMATS: ['y MMMM d, EEEE', 'y MMMM d', 'y MMM d', 'yy/M/d'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}: {0}', '{1}: {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale nl.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_nl = {
  ERAS: ['v.Chr.', 'n.Chr.'],
  ERANAMES: ['voor Christus', 'na Christus'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  STANDALONEMONTHS: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  SHORTMONTHS: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  STANDALONESHORTMONTHS: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  WEEKDAYS: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
  STANDALONEWEEKDAYS: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
  SHORTWEEKDAYS: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
  STANDALONESHORTWEEKDAYS: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
  NARROWWEEKDAYS: ['Z', 'M', 'D', 'W', 'D', 'V', 'Z'],
  STANDALONENARROWWEEKDAYS: ['Z', 'M', 'D', 'W', 'D', 'V', 'Z'],
  SHORTQUARTERS: ['K1', 'K2', 'K3', 'K4'],
  QUARTERS: ['1e kwartaal', '2e kwartaal', '3e kwartaal', '4e kwartaal'],
  AMPMS: ['a.m.', 'p.m.'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'dd-MM-y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'om\' {0}', '{1} \'om\' {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale no.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_no = {
  ERAS: ['f.Kr.', 'e.Kr.'],
  ERANAMES: ['før Kristus', 'etter Kristus'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
  STANDALONEMONTHS: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
  SHORTMONTHS: ['jan.', 'feb.', 'mars', 'apr.', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'],
  STANDALONESHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'],
  WEEKDAYS: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  STANDALONEWEEKDAYS: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  SHORTWEEKDAYS: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
  STANDALONESHORTWEEKDAYS: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  SHORTQUARTERS: ['K1', 'K2', 'K3', 'K4'],
  QUARTERS: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal'],
  AMPMS: ['a.m.', 'p.m.'],
  DATEFORMATS: ['EEEE d. MMMM y', 'd. MMMM y', 'd. MMM y', 'dd.MM.y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'kl\'. {0}', '{1} \'kl\'. {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale no_NO.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_no_NO = goog.i18n.DateTimeSymbols_no;


/**
 * Date/time formatting symbols for locale or.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_or = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['ଖ୍ରୀଷ୍ଟପୂର୍ବ', 'ଖ୍ରୀଷ୍ଟାବ୍ଦ'],
  NARROWMONTHS: ['ଜା', 'ଫେ', 'ମା', 'ଅ', 'ମଇ', 'ଜୁ', 'ଜୁ', 'ଅ', 'ସେ', 'ଅ', 'ନ', 'ଡି'],
  STANDALONENARROWMONTHS: ['ଜା', 'ଫେ', 'ମା', 'ଅ', 'ମଇ', 'ଜୁ', 'ଜୁ', 'ଅ', 'ସେ', 'ଅ', 'ନ', 'ଡି'],
  MONTHS: ['ଜାନୁଆରୀ', 'ଫେବୃଆରୀ', 'ମାର୍ଚ୍ଚ', 'ଅପ୍ରେଲ', 'ମଇ', 'ଜୁନ', 'ଜୁଲାଇ', 'ଅଗଷ୍ଟ', 'ସେପ୍ଟେମ୍ବର', 'ଅକ୍ଟୋବର', 'ନଭେମ୍ବର', 'ଡିସେମ୍ବର'],
  STANDALONEMONTHS: ['ଜାନୁଆରୀ', 'ଫେବୃଆରୀ', 'ମାର୍ଚ୍ଚ', 'ଅପ୍ରେଲ', 'ମଇ', 'ଜୁନ', 'ଜୁଲାଇ', 'ଅଗଷ୍ଟ', 'ସେପ୍ଟେମ୍ବର', 'ଅକ୍ଟୋବର', 'ନଭେମ୍ବର', 'ଡିସେମ୍ବର'],
  SHORTMONTHS: ['ଜାନୁଆରୀ', 'ଫେବୃଆରୀ', 'ମାର୍ଚ୍ଚ', 'ଅପ୍ରେଲ', 'ମଇ', 'ଜୁନ', 'ଜୁଲାଇ', 'ଅଗଷ୍ଟ', 'ସେପ୍ଟେମ୍ବର', 'ଅକ୍ଟୋବର', 'ନଭେମ୍ବର', 'ଡିସେମ୍ବର'],
  STANDALONESHORTMONTHS: ['ଜାନୁଆରୀ', 'ଫେବୃଆରୀ', 'ମାର୍ଚ୍ଚ', 'ଅପ୍ରେଲ', 'ମଇ', 'ଜୁନ', 'ଜୁଲାଇ', 'ଅଗଷ୍ଟ', 'ସେପ୍ଟେମ୍ବର', 'ଅକ୍ଟୋବର', 'ନଭେମ୍ବର', 'ଡିସେମ୍ବର'],
  WEEKDAYS: ['ରବିବାର', 'ସୋମବାର', 'ମଙ୍ଗଳବାର', 'ବୁଧବାର', 'ଗୁରୁବାର', 'ଶୁକ୍ରବାର', 'ଶନିବାର'],
  STANDALONEWEEKDAYS: ['ରବିବାର', 'ସୋମବାର', 'ମଙ୍ଗଳବାର', 'ବୁଧବାର', 'ଗୁରୁବାର', 'ଶୁକ୍ରବାର', 'ଶନିବାର'],
  SHORTWEEKDAYS: ['ରବି', 'ସୋମ', 'ମଙ୍ଗଳ', 'ବୁଧ', 'ଗୁରୁ', 'ଶୁକ୍ର', 'ଶନି'],
  STANDALONESHORTWEEKDAYS: ['ରବି', 'ସୋମ', 'ମଙ୍ଗଳ', 'ବୁଧ', 'ଗୁରୁ', 'ଶୁକ୍ର', 'ଶନି'],
  NARROWWEEKDAYS: ['ର', 'ସୋ', 'ମ', 'ବୁ', 'ଗୁ', 'ଶୁ', 'ଶ'],
  STANDALONENARROWWEEKDAYS: ['ର', 'ସୋ', 'ମ', 'ବୁ', 'ଗୁ', 'ଶୁ', 'ଶ'],
  SHORTQUARTERS: ['1ମ ତ୍ରୟମାସ', '2ୟ ତ୍ରୟମାସ', '3ୟ ତ୍ରୟମାସ', '4ର୍ଥ ତ୍ରୟମାସ'],
  QUARTERS: ['1ମ ତ୍ରୟମାସ', '2ୟ ତ୍ରୟମାସ', '3ୟ ତ୍ରୟମାସ', '4ର୍ଥ ତ୍ରୟମାସ'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'M/d/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{0} ଠାରେ {1}', '{0} ଠାରେ {1}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale pa.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_pa = {
  ERAS: ['ਈ. ਪੂ.', 'ਸੰਨ'],
  ERANAMES: ['ਈਸਵੀ ਪੂਰਵ', 'ਈਸਵੀ ਸੰਨ'],
  NARROWMONTHS: ['ਜ', 'ਫ਼', 'ਮਾ', 'ਅ', 'ਮ', 'ਜੂ', 'ਜੁ', 'ਅ', 'ਸ', 'ਅ', 'ਨ', 'ਦ'],
  STANDALONENARROWMONTHS: ['ਜ', 'ਫ਼', 'ਮਾ', 'ਅ', 'ਮ', 'ਜੂ', 'ਜੁ', 'ਅ', 'ਸ', 'ਅ', 'ਨ', 'ਦ'],
  MONTHS: ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'],
  STANDALONEMONTHS: ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'],
  SHORTMONTHS: ['ਜਨ', 'ਫ਼ਰ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾ', 'ਅਗ', 'ਸਤੰ', 'ਅਕਤੂ', 'ਨਵੰ', 'ਦਸੰ'],
  STANDALONESHORTMONTHS: ['ਜਨ', 'ਫ਼ਰ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾ', 'ਅਗ', 'ਸਤੰ', 'ਅਕਤੂ', 'ਨਵੰ', 'ਦਸੰ'],
  WEEKDAYS: ['ਐਤਵਾਰ', 'ਸੋਮਵਾਰ', 'ਮੰਗਲਵਾਰ', 'ਬੁੱਧਵਾਰ', 'ਵੀਰਵਾਰ', 'ਸ਼ੁੱਕਰਵਾਰ', 'ਸ਼ਨਿੱਚਰਵਾਰ'],
  STANDALONEWEEKDAYS: ['ਐਤਵਾਰ', 'ਸੋਮਵਾਰ', 'ਮੰਗਲਵਾਰ', 'ਬੁੱਧਵਾਰ', 'ਵੀਰਵਾਰ', 'ਸ਼ੁੱਕਰਵਾਰ', 'ਸ਼ਨਿੱਚਰਵਾਰ'],
  SHORTWEEKDAYS: ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁੱਧ', 'ਵੀਰ', 'ਸ਼ੁੱਕਰ', 'ਸ਼ਨਿੱਚਰ'],
  STANDALONESHORTWEEKDAYS: ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁੱਧ', 'ਵੀਰ', 'ਸ਼ੁੱਕਰ', 'ਸ਼ਨਿੱਚਰ'],
  NARROWWEEKDAYS: ['ਐ', 'ਸੋ', 'ਮੰ', 'ਬੁੱ', 'ਵੀ', 'ਸ਼ੁੱ', 'ਸ਼'],
  STANDALONENARROWWEEKDAYS: ['ਐ', 'ਸੋ', 'ਮੰ', 'ਬੁੱ', 'ਵੀ', 'ਸ਼ੁੱ', 'ਸ਼'],
  SHORTQUARTERS: ['ਤਿਮਾਹੀ1', 'ਤਿਮਾਹੀ2', 'ਤਿਮਾਹੀ3', 'ਤਿਮਾਹੀ4'],
  QUARTERS: ['ਪਹਿਲੀ ਤਿਮਾਹੀ', 'ਦੂਜੀ ਤਿਮਾਹੀ', 'ਤੀਜੀ ਤਿਮਾਹੀ', 'ਚੌਥੀ ਤਿਮਾਹੀ'],
  AMPMS: ['ਪੂ.ਦੁ.', 'ਬਾ.ਦੁ.'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale pl.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_pl = {
  ERAS: ['p.n.e.', 'n.e.'],
  ERANAMES: ['przed naszą erą', 'naszej ery'],
  NARROWMONTHS: ['s', 'l', 'm', 'k', 'm', 'c', 'l', 's', 'w', 'p', 'l', 'g'],
  STANDALONENARROWMONTHS: ['S', 'L', 'M', 'K', 'M', 'C', 'L', 'S', 'W', 'P', 'L', 'G'],
  MONTHS: ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'],
  STANDALONEMONTHS: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
  SHORTMONTHS: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  STANDALONESHORTMONTHS: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  WEEKDAYS: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
  STANDALONEWEEKDAYS: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
  SHORTWEEKDAYS: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
  STANDALONESHORTWEEKDAYS: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
  NARROWWEEKDAYS: ['n', 'p', 'w', 'ś', 'c', 'p', 's'],
  STANDALONENARROWWEEKDAYS: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
  SHORTQUARTERS: ['I kw.', 'II kw.', 'III kw.', 'IV kw.'],
  QUARTERS: ['I kwartał', 'II kwartał', 'III kwartał', 'IV kwartał'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'd.MM.y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale pt.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_pt = {
  ERAS: ['a.C.', 'd.C.'],
  ERANAMES: ['antes de Cristo', 'depois de Cristo'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  STANDALONEMONTHS: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  SHORTMONTHS: ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'],
  STANDALONESHORTMONTHS: ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'],
  WEEKDAYS: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  STANDALONEWEEKDAYS: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  SHORTWEEKDAYS: ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'],
  STANDALONESHORTWEEKDAYS: ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'],
  NARROWWEEKDAYS: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d \'de\' MMMM \'de\' y', 'd \'de\' MMMM \'de\' y', 'd \'de\' MMM \'de\' y', 'dd/MM/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'às\' {0}', '{1} \'às\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale pt_BR.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_pt_BR = goog.i18n.DateTimeSymbols_pt;


/**
 * Date/time formatting symbols for locale pt_PT.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_pt_PT = {
  ERAS: ['a.C.', 'd.C.'],
  ERANAMES: ['antes de Cristo', 'depois de Cristo'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  STANDALONEMONTHS: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  SHORTMONTHS: ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'],
  STANDALONESHORTMONTHS: ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'],
  WEEKDAYS: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  STANDALONEWEEKDAYS: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  SHORTWEEKDAYS: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
  STANDALONESHORTWEEKDAYS: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
  NARROWWEEKDAYS: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  SHORTQUARTERS: ['T1', 'T2', 'T3', 'T4'],
  QUARTERS: ['1.º trimestre', '2.º trimestre', '3.º trimestre', '4.º trimestre'],
  AMPMS: ['da manhã', 'da tarde'],
  DATEFORMATS: ['EEEE, d \'de\' MMMM \'de\' y', 'd \'de\' MMMM \'de\' y', 'dd/MM/y', 'dd/MM/yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'às\' {0}', '{1} \'às\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 2
};


/**
 * Date/time formatting symbols for locale ro.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ro = {
  ERAS: ['î.Hr.', 'd.Hr.'],
  ERANAMES: ['înainte de Hristos', 'după Hristos'],
  NARROWMONTHS: ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
  STANDALONEMONTHS: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
  SHORTMONTHS: ['ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'],
  STANDALONESHORTMONTHS: ['ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'],
  WEEKDAYS: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
  STANDALONEWEEKDAYS: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
  SHORTWEEKDAYS: ['dum.', 'lun.', 'mar.', 'mie.', 'joi', 'vin.', 'sâm.'],
  STANDALONESHORTWEEKDAYS: ['dum.', 'lun.', 'mar.', 'mie.', 'joi', 'vin.', 'sâm.'],
  NARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  STANDALONENARROWWEEKDAYS: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  SHORTQUARTERS: ['trim. I', 'trim. II', 'trim. III', 'trim. IV'],
  QUARTERS: ['trimestrul I', 'trimestrul al II-lea', 'trimestrul al III-lea', 'trimestrul al IV-lea'],
  AMPMS: ['a.m.', 'p.m.'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'dd.MM.y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'la\' {0}', '{1} \'la\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale ru.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ru = {
  ERAS: ['до н. э.', 'н. э.'],
  ERANAMES: ['до Рождества Христова', 'от Рождества Христова'],
  NARROWMONTHS: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  STANDALONENARROWMONTHS: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  MONTHS: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  STANDALONEMONTHS: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
  SHORTMONTHS: ['янв.', 'февр.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  STANDALONESHORTMONTHS: ['янв.', 'февр.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  WEEKDAYS: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  STANDALONEWEEKDAYS: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  SHORTWEEKDAYS: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  STANDALONESHORTWEEKDAYS: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  NARROWWEEKDAYS: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  STANDALONENARROWWEEKDAYS: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  SHORTQUARTERS: ['1-й кв.', '2-й кв.', '3-й кв.', '4-й кв.'],
  QUARTERS: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d MMMM y \'г\'.', 'd MMMM y \'г\'.', 'd MMM y \'г\'.', 'dd.MM.y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'в\' {0}', '{1} \'в\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale sh.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_sh = {
  ERAS: ['p. n. e.', 'n. e.'],
  ERANAMES: ['pre nove ere', 'nove ere'],
  NARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  STANDALONENARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  MONTHS: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
  STANDALONEMONTHS: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
  SHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  STANDALONESHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  WEEKDAYS: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
  STANDALONEWEEKDAYS: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
  SHORTWEEKDAYS: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  STANDALONESHORTWEEKDAYS: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  NARROWWEEKDAYS: ['n', 'p', 'u', 's', 'č', 'p', 's'],
  STANDALONENARROWWEEKDAYS: ['n', 'p', 'u', 's', 'č', 'p', 's'],
  SHORTQUARTERS: ['1. kv.', '2. kv.', '3. kv.', '4. kv.'],
  QUARTERS: ['prvi kvartal', 'drugi kvartal', 'treći kvartal', 'četvrti kvartal'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d. MMMM y.', 'd. MMMM y.', 'd. M. y.', 'd.M.yy.'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale si.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_si = {
  ERAS: ['ක්‍රි.පූ.', 'ක්‍රි.ව.'],
  ERANAMES: ['ක්‍රිස්තු පූර්ව', 'ක්‍රිස්තු වර්ෂ'],
  NARROWMONTHS: ['ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ', 'නෙ', 'දෙ'],
  STANDALONENARROWMONTHS: ['ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ', 'නෙ', 'දෙ'],
  MONTHS: ['ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'],
  STANDALONEMONTHS: ['ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'],
  SHORTMONTHS: ['ජන', 'පෙබ', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ', 'දෙසැ'],
  STANDALONESHORTMONTHS: ['ජන', 'පෙබ', 'මාර්', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ', 'දෙසැ'],
  WEEKDAYS: ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'],
  STANDALONEWEEKDAYS: ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'],
  SHORTWEEKDAYS: ['ඉරිදා', 'සඳුදා', 'අඟහ', 'බදාදා', 'බ්‍රහස්', 'සිකු', 'සෙන'],
  STANDALONESHORTWEEKDAYS: ['ඉරිදා', 'සඳුදා', 'අඟහ', 'බදාදා', 'බ්‍රහස්', 'සිකු', 'සෙන'],
  NARROWWEEKDAYS: ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'],
  STANDALONENARROWWEEKDAYS: ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'],
  SHORTQUARTERS: ['කාර්:1', 'කාර්:2', 'කාර්:3', 'කාර්:4'],
  QUARTERS: ['1 වන කාර්තුව', '2 වන කාර්තුව', '3 වන කාර්තුව', '4 වන කාර්තුව'],
  AMPMS: ['පෙ.ව.', 'ප.ව.'],
  DATEFORMATS: ['y MMMM d, EEEE', 'y MMMM d', 'y MMM d', 'y-MM-dd'],
  TIMEFORMATS: ['HH.mm.ss zzzz', 'HH.mm.ss z', 'HH.mm.ss', 'HH.mm'],
  DATETIMEFORMATS: ['{1} දින {0}', '{1} දින {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale sk.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_sk = {
  ERAS: ['pred Kr.', 'po Kr.'],
  ERANAMES: ['pred Kristom', 'po Kristovi'],
  NARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  STANDALONENARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  MONTHS: ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'],
  STANDALONEMONTHS: ['január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december'],
  SHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
  STANDALONESHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
  WEEKDAYS: ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'],
  STANDALONEWEEKDAYS: ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'],
  SHORTWEEKDAYS: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
  STANDALONESHORTWEEKDAYS: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
  NARROWWEEKDAYS: ['n', 'p', 'u', 's', 'š', 'p', 's'],
  STANDALONENARROWWEEKDAYS: ['n', 'p', 'u', 's', 'š', 'p', 's'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['1. štvrťrok', '2. štvrťrok', '3. štvrťrok', '4. štvrťrok'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE d. MMMM y', 'd. MMMM y', 'd. M. y', 'd. M. y'],
  TIMEFORMATS: ['H:mm:ss zzzz', 'H:mm:ss z', 'H:mm:ss', 'H:mm'],
  DATETIMEFORMATS: ['{1} \'o\' {0}', '{1} \'o\' {0}', '{1}, {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale sl.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_sl = {
  ERAS: ['pr. Kr.', 'po Kr.'],
  ERANAMES: ['pred Kristusom', 'po Kristusu'],
  NARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  STANDALONENARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  MONTHS: ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'],
  STANDALONEMONTHS: ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'],
  SHORTMONTHS: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
  STANDALONESHORTMONTHS: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
  WEEKDAYS: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota'],
  STANDALONEWEEKDAYS: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota'],
  SHORTWEEKDAYS: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  STANDALONESHORTWEEKDAYS: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  NARROWWEEKDAYS: ['n', 'p', 't', 's', 'č', 'p', 's'],
  STANDALONENARROWWEEKDAYS: ['n', 'p', 't', 's', 'č', 'p', 's'],
  SHORTQUARTERS: ['1. čet.', '2. čet.', '3. čet.', '4. čet.'],
  QUARTERS: ['1. četrtletje', '2. četrtletje', '3. četrtletje', '4. četrtletje'],
  AMPMS: ['dop.', 'pop.'],
  DATEFORMATS: ['EEEE, d. MMMM y', 'd. MMMM y', 'd. MMM y', 'd. MM. yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'ob\' {0}', '{1} \'ob\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale sq.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_sq = {
  ERAS: ['p.K.', 'mb.K.'],
  ERANAMES: ['para Krishtit', 'mbas Krishtit'],
  NARROWMONTHS: ['j', 'sh', 'm', 'p', 'm', 'q', 'k', 'g', 'sh', 't', 'n', 'dh'],
  STANDALONENARROWMONTHS: ['j', 'sh', 'm', 'p', 'm', 'q', 'k', 'g', 'sh', 't', 'n', 'dh'],
  MONTHS: ['janar', 'shkurt', 'mars', 'prill', 'maj', 'qershor', 'korrik', 'gusht', 'shtator', 'tetor', 'nëntor', 'dhjetor'],
  STANDALONEMONTHS: ['janar', 'shkurt', 'mars', 'prill', 'maj', 'qershor', 'korrik', 'gusht', 'shtator', 'tetor', 'nëntor', 'dhjetor'],
  SHORTMONTHS: ['jan', 'shk', 'mar', 'pri', 'maj', 'qer', 'korr', 'gush', 'sht', 'tet', 'nën', 'dhj'],
  STANDALONESHORTMONTHS: ['jan', 'shk', 'mar', 'pri', 'maj', 'qer', 'korr', 'gush', 'sht', 'tet', 'nën', 'dhj'],
  WEEKDAYS: ['e diel', 'e hënë', 'e martë', 'e mërkurë', 'e enjte', 'e premte', 'e shtunë'],
  STANDALONEWEEKDAYS: ['e diel', 'e hënë', 'e martë', 'e mërkurë', 'e enjte', 'e premte', 'e shtunë'],
  SHORTWEEKDAYS: ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht'],
  STANDALONESHORTWEEKDAYS: ['die', 'hën', 'mar', 'mër', 'enj', 'pre', 'sht'],
  NARROWWEEKDAYS: ['d', 'h', 'm', 'm', 'e', 'p', 'sh'],
  STANDALONENARROWWEEKDAYS: ['d', 'h', 'm', 'm', 'e', 'p', 'sh'],
  SHORTQUARTERS: ['tremujori I', 'tremujori II', 'tremujori III', 'tremujori IV'],
  QUARTERS: ['tremujori i parë', 'tremujori i dytë', 'tremujori i tretë', 'tremujori i katërt'],
  AMPMS: ['e paradites', 'e pasdites'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'd.M.yy'],
  TIMEFORMATS: ['h:mm:ss a, zzzz', 'h:mm:ss a, z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} \'në\' {0}', '{1} \'në\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale sr.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_sr = {
  ERAS: ['п. н. е.', 'н. е.'],
  ERANAMES: ['пре нове ере', 'нове ере'],
  NARROWMONTHS: ['ј', 'ф', 'м', 'а', 'м', 'ј', 'ј', 'а', 'с', 'о', 'н', 'д'],
  STANDALONENARROWMONTHS: ['ј', 'ф', 'м', 'а', 'м', 'ј', 'ј', 'а', 'с', 'о', 'н', 'д'],
  MONTHS: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
  STANDALONEMONTHS: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
  SHORTMONTHS: ['јан', 'феб', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'нов', 'дец'],
  STANDALONESHORTMONTHS: ['јан', 'феб', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'нов', 'дец'],
  WEEKDAYS: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
  STANDALONEWEEKDAYS: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
  SHORTWEEKDAYS: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  STANDALONESHORTWEEKDAYS: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  NARROWWEEKDAYS: ['н', 'п', 'у', 'с', 'ч', 'п', 'с'],
  STANDALONENARROWWEEKDAYS: ['н', 'п', 'у', 'с', 'ч', 'п', 'с'],
  SHORTQUARTERS: ['1. кв.', '2. кв.', '3. кв.', '4. кв.'],
  QUARTERS: ['први квартал', 'други квартал', 'трећи квартал', 'четврти квартал'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d. MMMM y.', 'd. MMMM y.', 'd. M. y.', 'd.M.yy.'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale sr_Latn.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_sr_Latn = {
  ERAS: ['p. n. e.', 'n. e.'],
  ERANAMES: ['pre nove ere', 'nove ere'],
  NARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  STANDALONENARROWMONTHS: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  MONTHS: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
  STANDALONEMONTHS: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
  SHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  STANDALONESHORTMONTHS: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  WEEKDAYS: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
  STANDALONEWEEKDAYS: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
  SHORTWEEKDAYS: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  STANDALONESHORTWEEKDAYS: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  NARROWWEEKDAYS: ['n', 'p', 'u', 's', 'č', 'p', 's'],
  STANDALONENARROWWEEKDAYS: ['n', 'p', 'u', 's', 'č', 'p', 's'],
  SHORTQUARTERS: ['1. kv.', '2. kv.', '3. kv.', '4. kv.'],
  QUARTERS: ['prvi kvartal', 'drugi kvartal', 'treći kvartal', 'četvrti kvartal'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d. MMMM y.', 'd. MMMM y.', 'd. M. y.', 'd.M.yy.'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale sv.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_sv = {
  ERAS: ['f.Kr.', 'e.Kr.'],
  ERANAMES: ['före Kristus', 'efter Kristus'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
  STANDALONEMONTHS: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
  SHORTMONTHS: ['jan.', 'feb.', 'mars', 'apr.', 'maj', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
  STANDALONESHORTMONTHS: ['jan.', 'feb.', 'mars', 'apr.', 'maj', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
  WEEKDAYS: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
  STANDALONEWEEKDAYS: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
  SHORTWEEKDAYS: ['sön', 'mån', 'tis', 'ons', 'tors', 'fre', 'lör'],
  STANDALONESHORTWEEKDAYS: ['sön', 'mån', 'tis', 'ons', 'tors', 'fre', 'lör'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  SHORTQUARTERS: ['K1', 'K2', 'K3', 'K4'],
  QUARTERS: ['1:a kvartalet', '2:a kvartalet', '3:e kvartalet', '4:e kvartalet'],
  AMPMS: ['fm', 'em'],
  DATEFORMATS: ['EEEE d MMMM y', 'd MMMM y', 'd MMM y', 'y-MM-dd'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'kl\'. {0}', '{1} \'kl\'. {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 3
};


/**
 * Date/time formatting symbols for locale sw.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_sw = {
  ERAS: ['KK', 'BK'],
  ERANAMES: ['Kabla ya Kristo', 'Baada ya Kristo'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['Januari', 'Februari', 'Machi', 'Aprili', 'Mei', 'Juni', 'Julai', 'Agosti', 'Septemba', 'Oktoba', 'Novemba', 'Desemba'],
  STANDALONEMONTHS: ['Januari', 'Februari', 'Machi', 'Aprili', 'Mei', 'Juni', 'Julai', 'Agosti', 'Septemba', 'Oktoba', 'Novemba', 'Desemba'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ago', 'Sep', 'Okt', 'Nov', 'Des'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ago', 'Sep', 'Okt', 'Nov', 'Des'],
  WEEKDAYS: ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi'],
  STANDALONEWEEKDAYS: ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi'],
  SHORTWEEKDAYS: ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi'],
  STANDALONESHORTWEEKDAYS: ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['Robo ya 1', 'Robo ya 2', 'Robo ya 3', 'Robo ya 4'],
  QUARTERS: ['Robo ya 1', 'Robo ya 2', 'Robo ya 3', 'Robo ya 4'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, d MMMM y', 'd MMMM y', 'd MMM y', 'dd/MM/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale ta.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ta = {
  ERAS: ['கி.மு.', 'கி.பி.'],
  ERANAMES: ['கிறிஸ்துவுக்கு முன்', 'அன்னோ டோமினி'],
  NARROWMONTHS: ['ஜ', 'பி', 'மா', 'ஏ', 'மே', 'ஜூ', 'ஜூ', 'ஆ', 'செ', 'அ', 'ந', 'டி'],
  STANDALONENARROWMONTHS: ['ஜ', 'பி', 'மா', 'ஏ', 'மே', 'ஜூ', 'ஜூ', 'ஆ', 'செ', 'அ', 'ந', 'டி'],
  MONTHS: ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'],
  STANDALONEMONTHS: ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'],
  SHORTMONTHS: ['ஜன.', 'பிப்.', 'மார்.', 'ஏப்.', 'மே', 'ஜூன்', 'ஜூலை', 'ஆக.', 'செப்.', 'அக்.', 'நவ.', 'டிச.'],
  STANDALONESHORTMONTHS: ['ஜன.', 'பிப்.', 'மார்.', 'ஏப்.', 'மே', 'ஜூன்', 'ஜூலை', 'ஆக.', 'செப்.', 'அக்.', 'நவ.', 'டிச.'],
  WEEKDAYS: ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'],
  STANDALONEWEEKDAYS: ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'],
  SHORTWEEKDAYS: ['ஞாயி.', 'திங்.', 'செவ்.', 'புத.', 'வியா.', 'வெள்.', 'சனி'],
  STANDALONESHORTWEEKDAYS: ['ஞாயி.', 'திங்.', 'செவ்.', 'புத.', 'வியா.', 'வெள்.', 'சனி'],
  NARROWWEEKDAYS: ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'],
  STANDALONENARROWWEEKDAYS: ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'],
  SHORTQUARTERS: ['காலா.1', 'காலா.2', 'காலா.3', 'காலா.4'],
  QUARTERS: ['ஒன்றாம் காலாண்டு', 'இரண்டாம் காலாண்டு', 'மூன்றாம் காலாண்டு', 'நான்காம் காலாண்டு'],
  AMPMS: ['முற்பகல்', 'பிற்பகல்'],
  DATEFORMATS: ['EEEE, d MMMM, y', 'd MMMM, y', 'd MMM, y', 'd/M/yy'],
  TIMEFORMATS: ['a h:mm:ss zzzz', 'a h:mm:ss z', 'a h:mm:ss', 'a h:mm'],
  DATETIMEFORMATS: ['{1} அன்று {0}', '{1} அன்று {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale te.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_te = {
  ERAS: ['క్రీపూ', 'క్రీశ'],
  ERANAMES: ['క్రీస్తు పూర్వం', 'క్రీస్తు శకం'],
  NARROWMONTHS: ['జ', 'ఫి', 'మా', 'ఏ', 'మే', 'జూ', 'జు', 'ఆ', 'సె', 'అ', 'న', 'డి'],
  STANDALONENARROWMONTHS: ['జ', 'ఫి', 'మా', 'ఏ', 'మే', 'జూ', 'జు', 'ఆ', 'సె', 'అ', 'న', 'డి'],
  MONTHS: ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జులై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'],
  STANDALONEMONTHS: ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జులై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'],
  SHORTMONTHS: ['జన', 'ఫిబ్ర', 'మార్చి', 'ఏప్రి', 'మే', 'జూన్', 'జులై', 'ఆగ', 'సెప్టెం', 'అక్టో', 'నవం', 'డిసెం'],
  STANDALONESHORTMONTHS: ['జన', 'ఫిబ్ర', 'మార్చి', 'ఏప్రి', 'మే', 'జూన్', 'జులై', 'ఆగ', 'సెప్టెం', 'అక్టో', 'నవం', 'డిసెం'],
  WEEKDAYS: ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'],
  STANDALONEWEEKDAYS: ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'],
  SHORTWEEKDAYS: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'],
  STANDALONESHORTWEEKDAYS: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'],
  NARROWWEEKDAYS: ['ఆ', 'సో', 'మ', 'బు', 'గు', 'శు', 'శ'],
  STANDALONENARROWWEEKDAYS: ['ఆ', 'సో', 'మ', 'బు', 'గు', 'శు', 'శ'],
  SHORTQUARTERS: ['త్రై1', 'త్రై2', 'త్రై3', 'త్రై4'],
  QUARTERS: ['1వ త్రైమాసికం', '2వ త్రైమాసికం', '3వ త్రైమాసికం', '4వ త్రైమాసికం'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['d, MMMM y, EEEE', 'd MMMM, y', 'd MMM, y', 'dd-MM-yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} {0}కి', '{1} {0}కి', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [6, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale th.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_th = {
  ERAS: ['ก่อน ค.ศ.', 'ค.ศ.'],
  ERANAMES: ['ปีก่อนคริสตกาล', 'คริสต์ศักราช'],
  NARROWMONTHS: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  STANDALONENARROWMONTHS: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  MONTHS: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  STANDALONEMONTHS: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  SHORTMONTHS: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  STANDALONESHORTMONTHS: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  WEEKDAYS: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
  STANDALONEWEEKDAYS: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
  SHORTWEEKDAYS: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  STANDALONESHORTWEEKDAYS: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  NARROWWEEKDAYS: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
  STANDALONENARROWWEEKDAYS: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
  SHORTQUARTERS: ['ไตรมาส 1', 'ไตรมาส 2', 'ไตรมาส 3', 'ไตรมาส 4'],
  QUARTERS: ['ไตรมาส 1', 'ไตรมาส 2', 'ไตรมาส 3', 'ไตรมาส 4'],
  AMPMS: ['ก่อนเที่ยง', 'หลังเที่ยง'],
  DATEFORMATS: ['EEEEที่ d MMMM G y', 'd MMMM G y', 'd MMM y', 'd/M/yy'],
  TIMEFORMATS: ['H นาฬิกา mm นาที ss วินาที zzzz', 'H นาฬิกา mm นาที ss วินาที z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} เวลา {0}', '{1} เวลา {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale tl.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_tl = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['Before Christ', 'Anno Domini'],
  NARROWMONTHS: ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  STANDALONENARROWMONTHS: ['E', 'P', 'M', 'A', 'M', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  MONTHS: ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
  STANDALONEMONTHS: ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
  SHORTMONTHS: ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  STANDALONESHORTMONTHS: ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  WEEKDAYS: ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'],
  STANDALONEWEEKDAYS: ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'],
  SHORTWEEKDAYS: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  STANDALONESHORTWEEKDAYS: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  NARROWWEEKDAYS: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  STANDALONENARROWWEEKDAYS: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['ika-1 quarter', 'ika-2 quarter', 'ika-3 quarter', 'ika-4 na quarter'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'M/d/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} \'nang\' {0}', '{1} \'nang\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale tr.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_tr = {
  ERAS: ['MÖ', 'MS'],
  ERANAMES: ['Milattan Önce', 'Milattan Sonra'],
  NARROWMONTHS: ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', 'A'],
  STANDALONENARROWMONTHS: ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', 'A'],
  MONTHS: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  STANDALONEMONTHS: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  SHORTMONTHS: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  STANDALONESHORTMONTHS: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  WEEKDAYS: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  STANDALONEWEEKDAYS: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  SHORTWEEKDAYS: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
  STANDALONESHORTWEEKDAYS: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
  NARROWWEEKDAYS: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
  STANDALONENARROWWEEKDAYS: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
  SHORTQUARTERS: ['Ç1', 'Ç2', 'Ç3', 'Ç4'],
  QUARTERS: ['1. çeyrek', '2. çeyrek', '3. çeyrek', '4. çeyrek'],
  AMPMS: ['ÖÖ', 'ÖS'],
  DATEFORMATS: ['d MMMM y EEEE', 'd MMMM y', 'd MMM y', 'd.MM.y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale uk.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_uk = {
  ERAS: ['до н. е.', 'н. е.'],
  ERANAMES: ['до нашої ери', 'нашої ери'],
  NARROWMONTHS: ['с', 'л', 'б', 'к', 'т', 'ч', 'л', 'с', 'в', 'ж', 'л', 'г'],
  STANDALONENARROWMONTHS: ['С', 'Л', 'Б', 'К', 'Т', 'Ч', 'Л', 'С', 'В', 'Ж', 'Л', 'Г'],
  MONTHS: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
  STANDALONEMONTHS: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'],
  SHORTMONTHS: ['січ.', 'лют.', 'бер.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'вер.', 'жовт.', 'лист.', 'груд.'],
  STANDALONESHORTMONTHS: ['січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру'],
  WEEKDAYS: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'],
  STANDALONEWEEKDAYS: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'],
  SHORTWEEKDAYS: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  STANDALONESHORTWEEKDAYS: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  NARROWWEEKDAYS: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  STANDALONENARROWWEEKDAYS: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  SHORTQUARTERS: ['1-й кв.', '2-й кв.', '3-й кв.', '4-й кв.'],
  QUARTERS: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал'],
  AMPMS: ['дп', 'пп'],
  DATEFORMATS: ['EEEE, d MMMM y \'р\'.', 'd MMMM y \'р\'.', 'd MMM y \'р\'.', 'dd.MM.yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} \'о\' {0}', '{1} \'о\' {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale ur.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_ur = {
  ERAS: ['قبل مسیح', 'عیسوی'],
  ERANAMES: ['قبل مسیح', 'عیسوی'],
  NARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  STANDALONEMONTHS: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  SHORTMONTHS: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  STANDALONESHORTMONTHS: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  WEEKDAYS: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  STANDALONEWEEKDAYS: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  SHORTWEEKDAYS: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  STANDALONESHORTWEEKDAYS: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  NARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  SHORTQUARTERS: ['پہلی سہ ماہی', 'دوسری سہ ماہی', 'تیسری سہ ماہی', 'چوتهی سہ ماہی'],
  QUARTERS: ['پہلی سہ ماہی', 'دوسری سہ ماہی', 'تیسری سہ ماہی', 'چوتهی سہ ماہی'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE، d MMMM، y', 'd MMMM، y', 'd MMM، y', 'd/M/yy'],
  TIMEFORMATS: ['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'],
  DATETIMEFORMATS: ['{1} کو {0}', '{1} کو {0}', '{1}، {0}', '{1}، {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale uz.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_uz = {
  ERAS: ['m.a.', 'milodiy'],
  ERANAMES: ['miloddan avvalgi', 'milodiy'],
  NARROWMONTHS: ['Y', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['Y', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'],
  STANDALONEMONTHS: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
  SHORTMONTHS: ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avg', 'sen', 'okt', 'noy', 'dek'],
  STANDALONESHORTMONTHS: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn', 'Iyl', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'],
  WEEKDAYS: ['yakshanba', 'dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba'],
  STANDALONEWEEKDAYS: ['yakshanba', 'dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba'],
  SHORTWEEKDAYS: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
  STANDALONESHORTWEEKDAYS: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
  NARROWWEEKDAYS: ['Y', 'D', 'S', 'C', 'P', 'J', 'S'],
  STANDALONENARROWWEEKDAYS: ['Y', 'D', 'S', 'C', 'P', 'J', 'S'],
  SHORTQUARTERS: ['1-ch', '2-ch', '3-ch', '4-ch'],
  QUARTERS: ['1-chorak', '2-chorak', '3-chorak', '4-chorak'],
  AMPMS: ['TO', 'TK'],
  DATEFORMATS: ['EEEE, d-MMMM, y', 'd-MMMM, y', 'd-MMM, y', 'dd/MM/yy'],
  TIMEFORMATS: ['H:mm:ss (zzzz)', 'H:mm:ss (z)', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1}, {0}', '{1}, {0}', '{1}, {0}', '{1}, {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale vi.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_vi = {
  ERAS: ['TCN', 'CN'],
  ERANAMES: ['Trước Thiên Chúa', 'Sau Công Nguyên'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'],
  STANDALONEMONTHS: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
  SHORTMONTHS: ['thg 1', 'thg 2', 'thg 3', 'thg 4', 'thg 5', 'thg 6', 'thg 7', 'thg 8', 'thg 9', 'thg 10', 'thg 11', 'thg 12'],
  STANDALONESHORTMONTHS: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
  WEEKDAYS: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
  STANDALONEWEEKDAYS: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
  SHORTWEEKDAYS: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
  STANDALONESHORTWEEKDAYS: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
  NARROWWEEKDAYS: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  STANDALONENARROWWEEKDAYS: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'],
  AMPMS: ['SA', 'CH'],
  DATEFORMATS: ['EEEE, d MMMM, y', 'd MMMM, y', 'd MMM, y', 'dd/MM/y'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['\'lúc\' {0} {1}', '\'lúc\' {0} {1}', '{0} {1}', '{0} {1}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale zh.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_zh = {
  ERAS: ['公元前', '公元'],
  ERANAMES: ['公元前', '公元'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  STANDALONEMONTHS: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  SHORTMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  STANDALONESHORTMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  WEEKDAYS: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  STANDALONEWEEKDAYS: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  SHORTWEEKDAYS: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  STANDALONESHORTWEEKDAYS: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  NARROWWEEKDAYS: ['日', '一', '二', '三', '四', '五', '六'],
  STANDALONENARROWWEEKDAYS: ['日', '一', '二', '三', '四', '五', '六'],
  SHORTQUARTERS: ['1季度', '2季度', '3季度', '4季度'],
  QUARTERS: ['第一季度', '第二季度', '第三季度', '第四季度'],
  AMPMS: ['上午', '下午'],
  DATEFORMATS: ['y年M月d日EEEE', 'y年M月d日', 'y年M月d日', 'y/M/d'],
  TIMEFORMATS: ['zzzz HH:mm:ss', 'z HH:mm:ss', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 0,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 6
};


/**
 * Date/time formatting symbols for locale zh_CN.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_zh_CN = goog.i18n.DateTimeSymbols_zh;


/**
 * Date/time formatting symbols for locale zh_HK.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_zh_HK = {
  ERAS: ['公元前', '公元'],
  ERANAMES: ['公元前', '公元'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  STANDALONEMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  SHORTMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  STANDALONESHORTMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  WEEKDAYS: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  STANDALONEWEEKDAYS: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  SHORTWEEKDAYS: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  STANDALONESHORTWEEKDAYS: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  NARROWWEEKDAYS: ['日', '一', '二', '三', '四', '五', '六'],
  STANDALONENARROWWEEKDAYS: ['日', '一', '二', '三', '四', '五', '六'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['第1季', '第2季', '第3季', '第4季'],
  AMPMS: ['上午', '下午'],
  DATEFORMATS: ['y年M月d日EEEE', 'y年M月d日', 'y年M月d日', 'd/M/y'],
  TIMEFORMATS: ['ah:mm:ss [zzzz]', 'ah:mm:ss [z]', 'ah:mm:ss', 'ah:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale zh_TW.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_zh_TW = {
  ERAS: ['西元前', '西元'],
  ERANAMES: ['西元前', '西元'],
  NARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  STANDALONENARROWMONTHS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  STANDALONEMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  SHORTMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  STANDALONESHORTMONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  WEEKDAYS: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  STANDALONEWEEKDAYS: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  SHORTWEEKDAYS: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  STANDALONESHORTWEEKDAYS: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  NARROWWEEKDAYS: ['日', '一', '二', '三', '四', '五', '六'],
  STANDALONENARROWWEEKDAYS: ['日', '一', '二', '三', '四', '五', '六'],
  SHORTQUARTERS: ['第1季', '第2季', '第3季', '第4季'],
  QUARTERS: ['第1季', '第2季', '第3季', '第4季'],
  AMPMS: ['上午', '下午'],
  DATEFORMATS: ['y年M月d日 EEEE', 'y年M月d日', 'y年M月d日', 'y/M/d'],
  TIMEFORMATS: ['Bh:mm:ss [zzzz]', 'Bh:mm:ss [z]', 'Bh:mm:ss', 'Bh:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};


/**
 * Date/time formatting symbols for locale zu.
 * @const
 * @type {!goog.i18n.DateTimeSymbolsType}
 */
goog.i18n.DateTimeSymbols_zu = {
  ERAS: ['BC', 'AD'],
  ERANAMES: ['BC', 'AD'],
  NARROWMONTHS: ['J', 'F', 'M', 'E', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  STANDALONENARROWMONTHS: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  MONTHS: ['Januwari', 'Februwari', 'Mashi', 'Ephreli', 'Meyi', 'Juni', 'Julayi', 'Agasti', 'Septhemba', 'Okthoba', 'Novemba', 'Disemba'],
  STANDALONEMONTHS: ['Januwari', 'Februwari', 'Mashi', 'Ephreli', 'Meyi', 'Juni', 'Julayi', 'Agasti', 'Septhemba', 'Okthoba', 'Novemba', 'Disemba'],
  SHORTMONTHS: ['Jan', 'Feb', 'Mas', 'Eph', 'Mey', 'Jun', 'Jul', 'Aga', 'Sep', 'Okt', 'Nov', 'Dis'],
  STANDALONESHORTMONTHS: ['Jan', 'Feb', 'Mas', 'Eph', 'Mey', 'Jun', 'Jul', 'Aga', 'Sep', 'Okt', 'Nov', 'Dis'],
  WEEKDAYS: ['ISonto', 'UMsombuluko', 'ULwesibili', 'ULwesithathu', 'ULwesine', 'ULwesihlanu', 'UMgqibelo'],
  STANDALONEWEEKDAYS: ['ISonto', 'UMsombuluko', 'ULwesibili', 'ULwesithathu', 'ULwesine', 'ULwesihlanu', 'UMgqibelo'],
  SHORTWEEKDAYS: ['Son', 'Mso', 'Bil', 'Tha', 'Sin', 'Hla', 'Mgq'],
  STANDALONESHORTWEEKDAYS: ['Son', 'Mso', 'Bil', 'Tha', 'Sin', 'Hla', 'Mgq'],
  NARROWWEEKDAYS: ['S', 'M', 'B', 'T', 'S', 'H', 'M'],
  STANDALONENARROWWEEKDAYS: ['S', 'M', 'B', 'T', 'S', 'H', 'M'],
  SHORTQUARTERS: ['Q1', 'Q2', 'Q3', 'Q4'],
  QUARTERS: ['ikota yesi-1', 'ikota yesi-2', 'ikota yesi-3', 'ikota yesi-4'],
  AMPMS: ['AM', 'PM'],
  DATEFORMATS: ['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'M/d/yy'],
  TIMEFORMATS: ['HH:mm:ss zzzz', 'HH:mm:ss z', 'HH:mm:ss', 'HH:mm'],
  DATETIMEFORMATS: ['{1} {0}', '{1} {0}', '{1} {0}', '{1} {0}'],
  FIRSTDAYOFWEEK: 6,
  WEEKENDRANGE: [5, 6],
  FIRSTWEEKCUTOFFDAY: 5
};

/**
 * @record
 * @struct
 */
goog.i18n.DateTimeSymbolsType = function() {};

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.ERAS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.ERANAMES;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.NARROWMONTHS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.STANDALONENARROWMONTHS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.MONTHS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.STANDALONEMONTHS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.SHORTMONTHS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.STANDALONESHORTMONTHS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.WEEKDAYS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.SHORTWEEKDAYS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.STANDALONESHORTWEEKDAYS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.STANDALONEWEEKDAYS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.NARROWWEEKDAYS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.STANDALONENARROWWEEKDAYS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.SHORTQUARTERS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.QUARTERS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.AMPMS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.DATEFORMATS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.TIMEFORMATS;

/** @type {!Array<string>} */
goog.i18n.DateTimeSymbolsType.prototype.DATETIMEFORMATS;

/** @type {number|undefined} */
goog.i18n.DateTimeSymbolsType.prototype.ZERODIGIT;

/** @type {number} */
goog.i18n.DateTimeSymbolsType.prototype.FIRSTDAYOFWEEK;

/** @type {!Array<number>} */
goog.i18n.DateTimeSymbolsType.prototype.WEEKENDRANGE;

/** @type {number} */
goog.i18n.DateTimeSymbolsType.prototype.FIRSTWEEKCUTOFFDAY;


/** @type {!goog.i18n.DateTimeSymbolsType} */
goog.i18n.DateTimeSymbols;


/**
 * Selected date/time formatting symbols by locale.
 */
goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en;

switch (goog.LOCALE) {
  case 'en_ISO':
  case 'en-ISO':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_ISO;
    break;
  case 'af':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_af;
    break;
  case 'am':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_am;
    break;
  case 'ar':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ar;
    break;
  case 'ar_DZ':
  case 'ar-DZ':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ar_DZ;
    break;
  case 'ar_EG':
  case 'ar-EG':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ar_EG;
    break;
  case 'az':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_az;
    break;
  case 'be':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_be;
    break;
  case 'bg':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_bg;
    break;
  case 'bn':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_bn;
    break;
  case 'br':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_br;
    break;
  case 'bs':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_bs;
    break;
  case 'ca':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ca;
    break;
  case 'chr':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_chr;
    break;
  case 'cs':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_cs;
    break;
  case 'cy':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_cy;
    break;
  case 'da':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_da;
    break;
  case 'de':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_de;
    break;
  case 'de_AT':
  case 'de-AT':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_de_AT;
    break;
  case 'de_CH':
  case 'de-CH':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_de_CH;
    break;
  case 'el':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_el;
    break;
  case 'en':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en;
    break;
  case 'en_AU':
  case 'en-AU':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_AU;
    break;
  case 'en_CA':
  case 'en-CA':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_CA;
    break;
  case 'en_GB':
  case 'en-GB':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_GB;
    break;
  case 'en_IE':
  case 'en-IE':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_IE;
    break;
  case 'en_IN':
  case 'en-IN':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_IN;
    break;
  case 'en_SG':
  case 'en-SG':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_SG;
    break;
  case 'en_US':
  case 'en-US':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_US;
    break;
  case 'en_ZA':
  case 'en-ZA':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_ZA;
    break;
  case 'es':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es;
    break;
  case 'es_419':
  case 'es-419':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es_419;
    break;
  case 'es_ES':
  case 'es-ES':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es_ES;
    break;
  case 'es_MX':
  case 'es-MX':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es_MX;
    break;
  case 'es_US':
  case 'es-US':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es_US;
    break;
  case 'et':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_et;
    break;
  case 'eu':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_eu;
    break;
  case 'fa':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fa;
    break;
  case 'fi':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fi;
    break;
  case 'fil':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fil;
    break;
  case 'fr':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fr;
    break;
  case 'fr_CA':
  case 'fr-CA':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fr_CA;
    break;
  case 'ga':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ga;
    break;
  case 'gl':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_gl;
    break;
  case 'gsw':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_gsw;
    break;
  case 'gu':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_gu;
    break;
  case 'haw':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_haw;
    break;
  case 'he':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_he;
    break;
  case 'hi':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_hi;
    break;
  case 'hr':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_hr;
    break;
  case 'hu':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_hu;
    break;
  case 'hy':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_hy;
    break;
  case 'id':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_id;
    break;
  case 'in':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_in;
    break;
  case 'is':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_is;
    break;
  case 'it':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_it;
    break;
  case 'iw':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_iw;
    break;
  case 'ja':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ja;
    break;
  case 'ka':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ka;
    break;
  case 'kk':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_kk;
    break;
  case 'km':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_km;
    break;
  case 'kn':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_kn;
    break;
  case 'ko':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ko;
    break;
  case 'ky':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ky;
    break;
  case 'ln':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ln;
    break;
  case 'lo':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_lo;
    break;
  case 'lt':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_lt;
    break;
  case 'lv':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_lv;
    break;
  case 'mk':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mk;
    break;
  case 'ml':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ml;
    break;
  case 'mn':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mn;
    break;
  case 'mo':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mo;
    break;
  case 'mr':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mr;
    break;
  case 'ms':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ms;
    break;
  case 'mt':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mt;
    break;
  case 'my':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_my;
    break;
  case 'nb':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_nb;
    break;
  case 'ne':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ne;
    break;
  case 'nl':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_nl;
    break;
  case 'no':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_no;
    break;
  case 'no_NO':
  case 'no-NO':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_no_NO;
    break;
  case 'or':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_or;
    break;
  case 'pa':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pa;
    break;
  case 'pl':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pl;
    break;
  case 'pt':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pt;
    break;
  case 'pt_BR':
  case 'pt-BR':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pt_BR;
    break;
  case 'pt_PT':
  case 'pt-PT':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pt_PT;
    break;
  case 'ro':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ro;
    break;
  case 'ru':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ru;
    break;
  case 'sh':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sh;
    break;
  case 'si':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_si;
    break;
  case 'sk':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sk;
    break;
  case 'sl':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sl;
    break;
  case 'sq':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sq;
    break;
  case 'sr':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sr;
    break;
  case 'sr_Latn':
  case 'sr-Latn':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sr_Latn;
    break;
  case 'sv':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sv;
    break;
  case 'sw':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sw;
    break;
  case 'ta':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ta;
    break;
  case 'te':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_te;
    break;
  case 'th':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_th;
    break;
  case 'tl':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_tl;
    break;
  case 'tr':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_tr;
    break;
  case 'uk':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_uk;
    break;
  case 'ur':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ur;
    break;
  case 'uz':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_uz;
    break;
  case 'vi':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_vi;
    break;
  case 'zh':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zh;
    break;
  case 'zh_CN':
  case 'zh-CN':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zh_CN;
    break;
  case 'zh_HK':
  case 'zh-HK':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zh_HK;
    break;
  case 'zh_TW':
  case 'zh-TW':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zh_TW;
    break;
  case 'zu':
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zu;
    break;
}
