(function () {
    var gt = window.gtranslateSettings || {};
    gt = gt[document.currentScript.getAttribute('data-gt-widget-id')] || gt;
    var lang_array_english = {
        "af": "Afrikaans",
        "sq": "Albanian",
        "am": "Amharic",
        "ar": "Arabic",
        "hy": "Armenian",
        "az": "Azerbaijani",
        "eu": "Basque",
        "be": "Belarusian",
        "bn": "Bengali",
        "bs": "Bosnian",
        "bg": "Bulgarian",
        "ca": "Catalan",
        "ceb": "Cebuano",
        "ny": "Chichewa",
        "zh-CN": "Chinese (Simplified)",
        "zh-TW": "Chinese (Traditional)",
        "co": "Corsican",
        "hr": "Croatian",
        "cs": "Czech",
        "da": "Danish",
        "nl": "Dutch",
        "en": "English",
        "eo": "Esperanto",
        "et": "Estonian",
        "tl": "Filipino",
        "fi": "Finnish",
        "fr": "French",
        "fy": "Frisian",
        "gl": "Galician",
        "ka": "Georgian",
        "de": "German",
        "el": "Greek",
        "gu": "Gujarati",
        "ht": "Haitian Creole",
        "ha": "Hausa",
        "haw": "Hawaiian",
        "iw": "Hebrew",
        "hi": "Hindi",
        "hmn": "Hmong",
        "hu": "Hungarian",
        "is": "Icelandic",
        "ig": "Igbo",
        "id": "Indonesian",
        "ga": "Irish",
        "it": "Italian",
        "ja": "Japanese",
        "jw": "Javanese",
        "kn": "Kannada",
        "kk": "Kazakh",
        "km": "Khmer",
        "ko": "Korean",
        "ku": "Kurdish (Kurmanji)",
        "ky": "Kyrgyz",
        "lo": "Lao",
        "la": "Latin",
        "lv": "Latvian",
        "lt": "Lithuanian",
        "lb": "Luxembourgish",
        "mk": "Macedonian",
        "mg": "Malagasy",
        "ms": "Malay",
        "ml": "Malayalam",
        "mt": "Maltese",
        "mi": "Maori",
        "mr": "Marathi",
        "mn": "Mongolian",
        "my": "Myanmar (Burmese)",
        "ne": "Nepali",
        "no": "Norwegian",
        "ps": "Pashto",
        "fa": "Persian",
        "pl": "Polish",
        "pt": "Portuguese",
        "pa": "Punjabi",
        "ro": "Romanian",
        "ru": "Russian",
        "sm": "Samoan",
        "gd": "Scottish Gaelic",
        "sr": "Serbian",
        "st": "Sesotho",
        "sn": "Shona",
        "sd": "Sindhi",
        "si": "Sinhala",
        "sk": "Slovak",
        "sl": "Slovenian",
        "so": "Somali",
        "es": "Spanish",
        "su": "Sundanese",
        "sw": "Swahili",
        "sv": "Swedish",
        "tg": "Tajik",
        "ta": "Tamil",
        "te": "Telugu",
        "th": "Thai",
        "tr": "Turkish",
        "uk": "Ukrainian",
        "ur": "Urdu",
        "uz": "Uzbek",
        "vi": "Vietnamese",
        "cy": "Welsh",
        "xh": "Xhosa",
        "yi": "Yiddish",
        "yo": "Yoruba",
        "zu": "Zulu"
    };
    var lang_array_native = {
        "af": "Afrikaans",
        "sq": "Shqip",
        "am": "አማርኛ",
        "ar": "العربية",
        "hy": "Հայերեն",
        "az": "Azərbaycan dili",
        "eu": "Euskara",
        "be": "Беларуская мова",
        "bn": "বাংলা",
        "bs": "Bosanski",
        "bg": "Български",
        "ca": "Català",
        "ceb": "Cebuano",
        "ny": "Chichewa",
        "zh-CN": "简体中文",
        "zh-TW": "繁體中文",
        "co": "Corsu",
        "hr": "Hrvatski",
        "cs": "Čeština‎",
        "da": "Dansk",
        "nl": "Nederlands",
        "en": "English",
        "eo": "Esperanto",
        "et": "Eesti",
        "tl": "Filipino",
        "fi": "Suomi",
        "fr": "Français",
        "fy": "Frysk",
        "gl": "Galego",
        "ka": "ქართული",
        "de": "Deutsch",
        "el": "Ελληνικά",
        "gu": "ગુજરાતી",
        "ht": "Kreyol ayisyen",
        "ha": "Harshen Hausa",
        "haw": "Ōlelo Hawaiʻi",
        "iw": "עִבְרִית",
        "hi": "हिन्दी",
        "hmn": "Hmong",
        "hu": "Magyar",
        "is": "Íslenska",
        "ig": "Igbo",
        "id": "Bahasa Indonesia",
        "ga": "Gaeilge",
        "it": "Italiano",
        "ja": "日本語",
        "jw": "Basa Jawa",
        "kn": "ಕನ್ನಡ",
        "kk": "Қазақ тілі",
        "km": "ភាសាខ្មែរ",
        "ko": "한국어",
        "ku": "كوردی‎",
        "ky": "Кыргызча",
        "lo": "ພາສາລາວ",
        "la": "Latin",
        "lv": "Latviešu valoda",
        "lt": "Lietuvių kalba",
        "lb": "Lëtzebuergesch",
        "mk": "Македонски јазик",
        "mg": "Malagasy",
        "ms": "Bahasa Melayu",
        "ml": "മലയാളം",
        "mt": "Maltese",
        "mi": "Te Reo Māori",
        "mr": "मराठी",
        "mn": "Монгол",
        "my": "ဗမာစာ",
        "ne": "नेपाली",
        "no": "Norsk bokmål",
        "ps": "پښتو",
        "fa": "فارسی",
        "pl": "Polski",
        "pt": "Português",
        "pa": "ਪੰਜਾਬੀ",
        "ro": "Română",
        "ru": "Русский",
        "sm": "Samoan",
        "gd": "Gàidhlig",
        "sr": "Српски језик",
        "st": "Sesotho",
        "sn": "Shona",
        "sd": "سنڌي",
        "si": "සිංහල",
        "sk": "Slovenčina",
        "sl": "Slovenščina",
        "so": "Afsoomaali",
        "es": "Español",
        "su": "Basa Sunda",
        "sw": "Kiswahili",
        "sv": "Svenska",
        "tg": "Тоҷикӣ",
        "ta": "தமிழ்",
        "te": "తెలుగు",
        "th": "ไทย",
        "tr": "Türkçe",
        "uk": "Українська",
        "ur": "اردو",
        "uz": "O‘zbekcha",
        "vi": "Tiếng Việt",
        "cy": "Cymraeg",
        "xh": "isiXhosa",
        "yi": "יידיש",
        "yo": "Yorùbá",
        "zu": "Zulu"
    };
    var default_language = gt.default_language || 'auto';
    var languages = gt.languages || Object.keys(lang_array_english);
    var alt_flags = gt.alt_flags || {};
    var flag_size = gt.flag_size || 32;
    var flag_style = gt.flag_style || '2d';
    var flags_location = gt.flags_location || 'https://cdn.gtranslate.net/flags/';
    var url_structure = gt.url_structure || 'none';
    var custom_domains = gt.custom_domains || {};
    var horizontal_position = gt.horizontal_position || 'inline';
    var vertical_position = gt.vertical_position || null;
    var native_language_names = gt.native_language_names || false;
    var detect_browser_language = gt.detect_browser_language || false;
    var wrapper_selector = gt.wrapper_selector || '.gtranslate_wrapper';
    var custom_css = gt.custom_css || '';
    var lang_array = native_language_names && lang_array_native || lang_array_english;
    var u_class = '.gt_container-' + Array.from('flags' + wrapper_selector).reduce(function (h, c) {
        return 0 | (31 * h + c.charCodeAt(0))
    }, 0).toString(36);
    var widget_code = '<!-- GTranslate: https://gtranslate.com -->';
    var widget_css = custom_css;
    flags_location += (flag_style == '3d' ? flag_size : 'svg') + '/';
    var flag_ext = flag_style == '3d' ? '.png' : '.svg';

    function get_flag_src(lang) {
        if (!alt_flags[lang])
            return flags_location + lang + flag_ext;
        else if (alt_flags[lang] == 'usa')
            return flags_location + 'en-us' + flag_ext;
        else if (alt_flags[lang] == 'canada')
            return flags_location + 'en-ca' + flag_ext;
        else if (alt_flags[lang] == 'brazil')
            return flags_location + 'pt-br' + flag_ext;
        else if (alt_flags[lang] == 'mexico')
            return flags_location + 'es-mx' + flag_ext;
        else if (alt_flags[lang] == 'argentina')
            return flags_location + 'es-ar' + flag_ext;
        else if (alt_flags[lang] == 'colombia')
            return flags_location + 'es-co' + flag_ext;
        else if (alt_flags[lang] == 'quebec')
            return flags_location + 'fr-qc' + flag_ext;
        else
            return alt_flags[lang];
    }

    function get_lang_href(lang) {
        var href = '#';
        if (url_structure == 'sub_directory') {
            var gt_request_uri = (document.currentScript.getAttribute('data-gt-orig-url') || (location.pathname.startsWith('/' + current_lang + '/') && '/' + location.pathname.split('/').slice(2).join('/') || location.pathname)) + location.search + location.hash;
            href = (lang == default_language) && location.protocol + '//' + location.hostname + gt_request_uri || location.protocol + '//' + location.hostname + '/' + lang + gt_request_uri;
        } else if (url_structure == 'sub_domain') {
            var gt_request_uri = (document.currentScript.getAttribute('data-gt-orig-url') || location.pathname) + location.search + location.hash;
            var domain = document.currentScript.getAttribute('data-gt-orig-domain') || location.hostname;
            if (typeof custom_domains == 'object' && custom_domains[lang])
                href = (lang == default_language) && location.protocol + '//' + domain + gt_request_uri || location.protocol + '//' + custom_domains[lang] + gt_request_uri;
            else
                href = (lang == default_language) && location.protocol + '//' + domain + gt_request_uri || location.protocol + '//' + lang + '.' + domain.replace(/^www\./, '') + gt_request_uri;
        }
        return href;
    }
    widget_css += "a.glink{text-decoration:none}";
    widget_css += "a.glink img{vertical-align:middle;display:inline;border:0;padding:0;margin:0;opacity:0.8;margin-right:2px}";
    widget_css += "a.glink:hover img{opacity:1}";
    var current_lang = document.querySelector('html').getAttribute('lang') || default_language;
    if (url_structure == 'none') {
        var googtrans_matches = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');
        current_lang = googtrans_matches && googtrans_matches[2].split('/')[2] || current_lang;
    }
    if (!lang_array[current_lang])
        current_lang = default_language;
    languages.forEach(function (lang) {
        var el_a = document.createElement('a');
        el_a.href = get_lang_href(lang);
        el_a.title = lang_array[lang];
        el_a.setAttribute('data-gt-lang', lang);
        el_a.classList.add('glink', 'nturl', 'notranslate');
        lang == current_lang && el_a.classList.add('gt-current-lang');
        var el_img = document.createElement('img');
        el_img.setAttribute('loading', 'lazy');
        el_img.src = get_flag_src(lang);
        el_img.height = el_img.width = flag_size;
        el_img.alt = lang;
        el_a.appendChild(el_img);
        widget_code += el_a.outerHTML;
    });
    if (url_structure == 'none') {
        widget_code += '<div id="google_translate_element2"></div>';
        widget_css += "div.skiptranslate,#google_translate_element2{display:none!important}";
        widget_css += "body{top:0!important}";
    }
    if (horizontal_position != 'inline')
        widget_code = '<div class="gt_switcher_wrapper" style="position:fixed;' + vertical_position + ':15px;' + horizontal_position + ':15px;z-index:999999;">' + widget_code + '</div>';
    var add_css = document.createElement('style');
    add_css.classList.add('gtranslate_css');
    add_css.textContent = widget_css;
    document.head.appendChild(add_css);
    document.querySelectorAll(wrapper_selector).forEach(function (e) {
        e.classList.add(u_class.substring(1));
        e.innerHTML += widget_code
    });
    if (url_structure == 'none') {
        function get_current_lang() {
            var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');
            return keyValue ? keyValue[2].split('/')[2] : null;
        }

        function fire_event(element, event) {
            try {
                if (document.createEventObject) {
                    var evt = document.createEventObject();
                    element.fireEvent('on' + event, evt)
                } else {
                    var evt = document.createEvent('HTMLEvents');
                    evt.initEvent(event, true, true);
                    element.dispatchEvent(evt)
                }
            } catch (e) {}
        }

        function load_tlib() {
            if (!window.gt_translate_script) {
                window.gt_translate_script = document.createElement('script');
                gt_translate_script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2';
                document.body.appendChild(gt_translate_script);
            }
        }
        window.doGTranslate = function (lang_pair) {
            if (lang_pair.value) lang_pair = lang_pair.value;
            if (lang_pair == '') return;
            var lang = lang_pair.split('|')[1];
            if (get_current_lang() == null && lang == lang_pair.split('|')[0]) return;
            var teCombo;
            var sel = document.getElementsByTagName('select');
            for (var i = 0; i < sel.length; i++)
                if (sel[i].className.indexOf('goog-te-combo') != -1) {
                    teCombo = sel[i];
                    break;
                } if (document.getElementById('google_translate_element2') == null || document.getElementById('google_translate_element2').innerHTML.length == 0 || teCombo.length == 0 || teCombo.innerHTML.length == 0) {
                setTimeout(function () {
                    doGTranslate(lang_pair)
                }, 500)
            } else {
                teCombo.value = lang;
                fire_event(teCombo, 'change');
                fire_event(teCombo, 'change')
            }
        }
        window.googleTranslateElementInit2 = function () {
            new google.translate.TranslateElement({
                pageLanguage: default_language,
                autoDisplay: false
            }, 'google_translate_element2')
        };
        if (current_lang != default_language)
            load_tlib();
        else
            document.querySelectorAll(u_class).forEach(function (e) {
                e.addEventListener('pointerenter', load_tlib)
            });
        document.querySelectorAll(u_class + ' a[data-gt-lang]').forEach(function (e) {
            e.addEventListener('click', function (evt) {
                evt.preventDefault();
                document.querySelectorAll(u_class + ' a.gt-current-lang').forEach(function (e) {
                    e.classList.remove('gt-current-lang')
                });
                e.classList.add('gt-current-lang');
                doGTranslate(default_language + '|' + e.getAttribute('data-gt-lang'));
            })
        });
    }
    if (detect_browser_language && window.sessionStorage && window.navigator && sessionStorage.getItem('gt_autoswitch') == null && !/bot|spider|slurp|facebook/i.test(navigator.userAgent)) {
        var accept_language = (navigator.language || navigator.userLanguage).toLowerCase();
        switch (accept_language) {
        case 'zh':
        case 'zh-cn':
            var preferred_language = 'zh-CN';
            break;
        case 'zh-tw':
        case 'zh-hk':
            var preferred_language = 'zh-TW';
            break;
        case 'he':
            var preferred_language = 'iw';
            break;
        default:
            var preferred_language = accept_language.substr(0, 2);
            break;
        }
        if (current_lang == default_language && preferred_language != default_language && languages.includes(preferred_language)) {
            if (url_structure == 'none') {
                load_tlib();
                window.gt_translate_script.onload = function () {
                    doGTranslate(default_language + '|' + preferred_language);
                    document.querySelectorAll(u_class + ' a.gt-current-lang').forEach(function (e) {
                        e.classList.remove('gt-current-lang')
                    });
                    document.querySelector(u_class + ' a[data-gt-lang="' + preferred_language + '"]').classList.add('gt-current-lang');
                };
            } else
                document.querySelectorAll(u_class + ' a[data-gt-lang="' + preferred_language + '"]').forEach(function (e) {
                    location.href = e.href
                });
        }
        sessionStorage.setItem('gt_autoswitch', 1);
    }
})();
