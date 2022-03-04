"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDialog = useDialog;
exports.useIcons = useIcons;
exports.EMPTY_OPTION = void 0;

var _react = require("react");

var _shortid = require("shortid");

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _excluded = ["primary"],
    _excluded2 = ["primary"],
    _excluded3 = ["primary"],
    _excluded4 = ["primary"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ICONS = ["access_alarm", "access_alarms", "accessibility", "accessibility_new", "accessible", "accessible_forward", "access_time", "account_balance", "account_balance_wallet", "account_box", "account_circle", "account_tree", "ac_unit", "adb", "add", "add_alarm", "add_alert", "add_aphoto", "add_box", "add_circle", "add_circle_outline", "add_comment", "add_ic_call", "add_location", "add_photo_alternate", "add_shopping_cart", "add_to_home_screen", "add_to_photos", "add_to_queue", "adjust", "airline_seat_flat", "airline_seat_flat_angled", "airline_seat_individual_suite", "airline_seat_legroom_extra", "airline_seat_legroom_normal", "airline_seat_legroom_reduced", "airline_seat_recline_extra", "airline_seat_recline_normal", "airplanemode_active", "airplanemode_inactive", "airplay", "airport_shuttle", "alarm", "alarm_add", "alarm_off", "alarm_on", "album", "all_inbox", "all_inclusive", "all_out", "alternate_email", "amp_stories", "android", "announcement", "apartment", "apple", "apps", "archive", "arrow_back", "arrow_back_ios", "arrow_downward", "arrow_drop_down", "arrow_drop_down_circle", "arrow_drop_up", "arrow_forward", "arrow_forward_ios", "arrow_left", "arrow_right", "arrow_right_alt", "arrow_upward", "art_track", "aspect_ratio", "assessment", "assignment", "assignment_ind", "assignment_late", "assignment_return", "assignment_returned", "assignment_turned_in", "assistant", "assistant_photo", "atm", "attach_file", "attachment", "attach_money", "audiotrack", "autorenew", "av_timer", "backspace", "backup", "ballot", "bar_chart", "bathtub", "battery20", "battery30", "battery50", "battery60", "battery80", "battery90", "battery_alert", "battery_charging20", "battery_charging30", "battery_charging50", "battery_charging60", "battery_charging80", "battery_charging90", "battery_charging_full", "battery_full", "battery_std", "battery_unknown", "beach_access", "beenhere", "block", "bluetooth", "bluetooth_audio", "bluetooth_connected", "bluetooth_disabled", "bluetooth_searching", "blur_circular", "blur_linear", "blur_off", "blur_on", "book", "bookmark", "bookmark_border", "bookmarks", "border_all", "border_bottom", "border_clear", "border_color", "border_horizontal", "border_inner", "border_left", "border_outer", "border_right", "border_style", "border_top", "border_vertical", "branding_watermark", "brightness1", "brightness2", "brightness3", "brightness4", "brightness5", "brightness6", "brightness7", "brightness_auto", "brightness_high", "brightness_low", "brightness_medium", "broken_image", "brush", "bubble_chart", "bug_report", "build", "burst_mode", "business", "business_center", "cached", "cake", "calendar_today", "calendar_view_day", "call", "call_end", "call_made", "call_merge", "call_missed", "call_missed_outgoing", "call_received", "call_split", "call_to_action", "camera", "camera_alt", "camera_enhance", "camera_front", "camera_rear", "camera_roll", "cancel", "cancel_presentation", "cancel_schedule_send", "card_giftcard", "card_membership", "card_travel", "casino", "cast", "cast_connected", "cast_for_education", "category", "cell_wifi", "center_focus_strong", "center_focus_weak", "change_history", "chat", "chat_bubble", "chat_bubble_outline", "check", "check_box", "check_box_outline_blank", "check_circle", "check_circle_outline", "chevron_left", "chevron_right", "child_care", "child_friendly", "chrome_reader_mode", "class", "clear", "clear_all", "close", "closed_caption", "cloud", "cloud_circle", "cloud_done", "cloud_download", "cloud_off", "cloud_queue", "cloud_upload", "code", "collections", "collections_bookmark", "colorize", "color_lens", "comment", "commute", "compare", "compare_arrows", "compass_calibration", "computer", "confirmation_number", "contactless", "contact_mail", "contact_phone", "contacts", "contact_support", "control_camera", "control_point", "control_point_duplicate", "copyright", "create", "create_new_folder", "credit_card", "crop", "crop169", "crop32", "crop54", "crop75", "crop_din", "crop_free", "crop_landscape", "crop_original", "crop_portrait", "crop_rotate", "crop_square", "dashboard", "data_usage", "date_range", "deck", "dehaze", "delete", "delete_forever", "delete_outline", "delete_sweep", "departure_board", "description", "desktop_access_disabled", "desktop_mac", "desktop_windows", "details", "developer_board", "developer_mode", "device_hub", "devices", "devices_other", "device_unknown", "dialer_sip", "dialpad", "directions", "directions_bike", "directions_boat", "directions_bus", "directions_car", "directions_railway", "directions_run", "directions_subway", "directions_transit", "directions_walk", "disc_full", "dns", "dock", "domain", "domain_disabled", "done", "done_all", "done_outline", "donut_large", "donut_small", "double_arrow", "drafts", "drag_handle", "drag_indicator", "drive_eta", "duo", "dvr", "dynamic_feed", "eco", "edit", "edit_attributes", "edit_location", "eject", "email", "emoji_emotions", "emoji_events", "emoji_flags", "emoji_food_beverage", "emoji_nature", "emoji_objects", "emoji_people", "emoji_symbols", "emoji_transportation", "enhanced_encryption", "equalizer", "error", "error_outline", "euro", "euro_symbol", "event", "event_available", "event_busy", "event_note", "event_seat", "ev_station", "exit_to_app", "expand_less", "expand_more", "explicit", "explore", "explore_off", "exposure", "exposure_neg1", "exposure_neg2", "exposure_plus1", "exposure_plus2", "exposure_zero", "extension", "face", "facebook", "fastfood", "fast_forward", "fast_rewind", "favorite", "favorite_border", "featured_play_list", "featured_video", "feedback", "fiber_dvr", "fiber_manual_record", "fiber_new", "fiber_pin", "fiber_smart_record", "file_copy", "filter", "filter1", "filter2", "filter3", "filter4", "filter5", "filter6", "filter7", "filter8", "filter9", "filter9plus", "filter_band_w", "filter_center_focus", "filter_drama", "filter_frames", "filter_hdr", "filter_list", "filter_none", "filter_tilt_shift", "filter_vintage", "find_in_page", "find_replace", "fingerprint", "fireplace", "first_page", "fitness_center", "flag", "flare", "flash_auto", "flash_off", "flash_on", "flight", "flight_land", "flight_takeoff", "flip", "flip_camera_android", "flip_camera_ios", "flip_to_back", "flip_to_front", "folder", "folder_open", "folder_shared", "folder_special", "font_download", "format_align_center", "format_align_justify", "format_align_left", "format_align_right", "format_bold", "format_clear", "format_color_fill", "format_color_reset", "format_color_text", "format_indent_decrease", "format_indent_increase", "format_italic", "format_line_spacing", "format_list_bulleted", "format_list_numbered", "format_list_numbered_rtl", "format_paint", "format_quote", "format_shapes", "format_size", "format_strikethrough", "format_textdirection_lto_r", "format_textdirection_rto_l", "format_underlined", "forum", "forward", "forward10", "forward30", "forward5", "four_k", "free_breakfast", "fullscreen", "fullscreen_exit", "functions", "gamepad", "games", "gavel", "gesture", "get_app", "gif", "git_hub", "golf_course", "gps_fixed", "gps_not_fixed", "gps_off", "grade", "gradient", "grain", "graphic_eq", "grid_off", "grid_on", "group", "group_add", "group_work", "g_translate", "hd", "hdr_off", "hdr_on", "hdr_strong", "hdr_weak", "headset", "headset_mic", "healing", "hearing", "height", "help", "help_outline", "highlight", "highlight_off", "high_quality", "history", "home", "home_work", "horizontal_split", "hotel", "hot_tub", "hourglass_empty", "hourglass_full", "house", "how_to_reg", "how_to_vote", "http", "https", "image", "image_aspect_ratio", "image_search", "important_devices", "import_contacts", "import_export", "inbox", "indeterminate_check_box", "info", "input", "insert_chart", "insert_comment", "insert_drive_file", "insert_emoticon", "insert_invitation", "insert_link", "insert_photo", "instagram", "invert_colors", "invert_colors_off", "iso", "keyboard", "keyboard_arrow_down", "keyboard_arrow_left", "keyboard_arrow_right", "keyboard_arrow_up", "keyboard_backspace", "keyboard_capslock", "keyboard_hide", "keyboard_return", "keyboard_tab", "keyboard_voice", "king_bed", "kitchen", "label", "label_important", "label_off", "landscape", "language", "laptop", "laptop_chromebook", "laptop_mac", "laptop_windows", "last_page", "launch", "layers", "layers_clear", "leak_add", "leak_remove", "lens", "library_add", "library_add_check", "library_books", "library_music", "linear_scale", "line_style", "line_weight", "link", "linked_camera", "linked_in", "link_off", "list", "list_alt", "live_help", "live_tv", "local_activity", "local_airport", "local_atm", "local_bar", "local_cafe", "local_car_wash", "local_convenience_store", "local_dining", "local_drink", "local_florist", "local_gas_station", "local_grocery_store", "local_hospital", "local_hotel", "local_laundry_service", "local_library", "local_mall", "local_movies", "local_offer", "local_parking", "local_pharmacy", "local_phone", "local_pizza", "local_play", "local_post_office", "local_printshop", "local_see", "local_shipping", "local_taxi", "location_city", "location_disabled", "location_off", "location_on", "location_searching", "lock", "lock_open", "looks", "looks3", "looks4", "looks5", "looks6", "looks_one", "looks_two", "loop", "loupe", "low_priority", "loyalty", "mail", "mail_outline", "map", "markunread", "markunread_mailbox", "maximize", "meeting_room", "memory", "menu", "menu_book", "menu_open", "merge_type", "message", "mic", "mic_none", "mic_off", "minimize", "missed_video_call", "mms", "mobile_friendly", "mobile_off", "mobile_screen_share", "mode_comment", "monetization_on", "money", "money_off", "monochrome_photos", "mood", "mood_bad", "more", "more_horiz", "more_vert", "motorcycle", "mouse", "move_to_inbox", "movie", "movie_creation", "movie_filter", "multiline_chart", "museum", "music_note", "music_off", "music_video", "my_location", "nature", "nature_people", "navigate_before", "navigate_next", "navigation", "near_me", "network_cell", "network_check", "network_locked", "network_wifi", "new_releases", "next_week", "nfc", "nights_stay", "no_encryption", "no_meeting_room", "no_sim", "note", "note_add", "notes", "notification_important", "notifications", "notifications_active", "notifications_none", "notifications_off", "notifications_paused", "not_interested", "not_listed_location", "offline_bolt", "offline_pin", "ondemand_video", "opacity", "open_in_browser", "open_in_new", "open_with", "outdoor_grill", "outlined_flag", "pages", "pageview", "palette", "panorama", "panorama_fish_eye", "panorama_horizontal", "panorama_vertical", "panorama_wide_angle", "pan_tool", "party_mode", "pause", "pause_circle_filled", "pause_circle_outline", "pause_presentation", "payment", "people", "people_alt", "people_outline", "perm_camera_mic", "perm_contact_calendar", "perm_data_setting", "perm_device_information", "perm_identity", "perm_media", "perm_phone_msg", "perm_scan_wifi", "person", "person_add", "person_add_disabled", "personal_video", "person_outline", "person_pin", "person_pin_circle", "pets", "phone", "phone_android", "phone_bluetooth_speaker", "phone_callback", "phone_disabled", "phone_enabled", "phone_forwarded", "phone_in_talk", "phone_iphone", "phonelink", "phonelink_erase", "phonelink_lock", "phonelink_off", "phonelink_ring", "phonelink_setup", "phone_locked", "phone_missed", "phone_paused", "photo", "photo_album", "photo_camera", "photo_filter", "photo_library", "photo_size_select_actual", "photo_size_select_large", "photo_size_select_small", "picture_as_pdf", "picture_in_picture", "picture_in_picture_alt", "pie_chart", "pin_drop", "pinterest", "place", "play_arrow", "play_circle_filled", "play_circle_filled_white", "play_circle_outline", "play_for_work", "playlist_add", "playlist_add_check", "playlist_play", "plus_one", "policy", "poll", "polymer", "pool", "portable_wifi_off", "portrait", "post_add", "power", "power_input", "power_off", "power_settings_new", "pregnant_woman", "present_to_all", "print", "print_disabled", "priority_high", "public", "publish", "query_builder", "question_answer", "queue", "queue_music", "queue_play_next", "radio", "radio_button_checked", "radio_button_unchecked", "rate_review", "receipt", "recent_actors", "record_voice_over", "reddit", "redeem", "redo", "refresh", "remove", "remove_circle", "remove_circle_outline", "remove_from_queue", "remove_red_eye", "remove_shopping_cart", "reorder", "repeat", "repeat_one", "replay", "replay10", "replay30", "replay5", "reply", "reply_all", "report", "report_off", "report_problem", "restaurant", "restaurant_menu", "restore", "restore_from_trash", "restore_page", "ring_volume", "room", "room_service", "rotate90degrees_ccw", "rotate_left", "rotate_right", "rounded_corner", "router", "rowing", "rss_feed", "rv_hookup", "satellite", "save", "save_alt", "scanner", "scatter_plot", "schedule", "school", "score", "screen_lock_landscape", "screen_lock_portrait", "screen_lock_rotation", "screen_rotation", "screen_share", "sd_card", "sd_storage", "search", "security", "select_all", "send", "sentiment_dissatisfied", "sentiment_satisfied", "sentiment_satisfied_alt", "sentiment_very_dissatisfied", "sentiment_very_satisfied", "settings", "settings_applications", "settings_backup_restore", "settings_bluetooth", "settings_brightness", "settings_cell", "settings_ethernet", "settings_input_antenna", "settings_input_component", "settings_input_composite", "settings_input_hdmi", "settings_input_svideo", "settings_overscan", "settings_phone", "settings_power", "settings_remote", "settings_system_daydream", "settings_voice", "share", "shop", "shopping_basket", "shopping_cart", "shop_two", "short_text", "show_chart", "shuffle", "shutter_speed", "signal_cellular0bar", "signal_cellular1bar", "signal_cellular2bar", "signal_cellular3bar", "signal_cellular4bar", "signal_cellular_alt", "signal_cellular_connected_no_internet0bar", "signal_cellular_connected_no_internet1bar", "signal_cellular_connected_no_internet2bar", "signal_cellular_connected_no_internet3bar", "signal_cellular_connected_no_internet4bar", "signal_cellular_no_sim", "signal_cellular_null", "signal_cellular_off", "signal_wifi0bar", "signal_wifi1bar", "signal_wifi1bar_lock", "signal_wifi2bar", "signal_wifi2bar_lock", "signal_wifi3bar", "signal_wifi3bar_lock", "signal_wifi4bar", "signal_wifi4bar_lock", "signal_wifi_off", "sim_card", "single_bed", "skip_next", "skip_previous", "slideshow", "slow_motion_video", "smartphone", "smoke_free", "smoking_rooms", "sms", "sms_failed", "snooze", "sort", "sort_by_alpha", "spa", "space_bar", "speaker", "speaker_group", "speaker_notes", "speaker_notes_off", "speaker_phone", "speed", "spellcheck", "sports", "sports_baseball", "sports_basketball", "sports_cricket", "sports_esports", "sports_football", "sports_golf", "sports_handball", "sports_hockey", "sports_kabaddi", "sports_mma", "sports_motorsports", "sports_rugby", "sports_soccer", "sports_tennis", "sports_volleyball", "square_foot", "star", "star_border", "star_half", "star_outline", "star_rate", "stars", "stay_current_landscape", "stay_current_portrait", "stay_primary_landscape", "stay_primary_portrait", "stop", "stop_screen_share", "storage", "store", "storefront", "store_mall_directory", "straighten", "streetview", "strikethrough_s", "style", "subdirectory_arrow_left", "subdirectory_arrow_right", "subject", "subscriptions", "subtitles", "subway", "supervised_user_circle", "supervisor_account", "surround_sound", "swap_calls", "swap_horiz", "swap_horizontal_circle", "swap_vert", "swap_vertical_circle", "switch_camera", "switch_video", "sync", "sync_alt", "sync_disabled", "sync_problem", "system_update", "system_update_alt", "tab", "table_chart", "tablet", "tablet_android", "tablet_mac", "tab_unselected", "tag_faces", "tap_and_play", "telegram", "terrain", "text_fields", "text_format", "text_rotate_up", "text_rotate_vertical", "text_rotation_angledown", "text_rotation_angleup", "text_rotation_down", "text_rotation_none", "textsms", "texture", "theaters", "three_drotation", "three_sixty", "thumb_down", "thumb_down_alt", "thumbs_up_down", "thumb_up", "thumb_up_alt", "timelapse", "timeline", "timer", "timer10", "timer3", "timer_off", "time_to_leave", "title", "toc", "today", "toggle_off", "toggle_on", "toll", "tonality", "touch_app", "toys", "track_changes", "traffic", "train", "tram", "transfer_within_astation", "transform", "transit_enterexit", "translate", "trending_down", "trending_flat", "trending_up", "trip_origin", "tune", "turned_in", "turned_in_not", "tv", "tv_off", "twitter", "two_wheeler", "unarchive", "undo", "unfold_less", "unfold_more", "unsubscribe", "update", "usb", "verified_user", "vertical_align_bottom", "vertical_align_center", "vertical_align_top", "vertical_split", "vibration", "video_call", "videocam", "videocam_off", "videogame_asset", "video_label", "video_library", "view_agenda", "view_array", "view_carousel", "view_column", "view_comfy", "view_compact", "view_day", "view_headline", "view_list", "view_module", "view_quilt", "view_stream", "view_week", "vignette", "visibility", "visibility_off", "voice_chat", "voicemail", "voice_over_off", "volume_down", "volume_mute", "volume_off", "volume_up", "vpn_key", "vpn_lock", "wallpaper", "warning", "watch", "watch_later", "waves", "wb_auto", "wb_cloudy", "wb_incandescent", "wb_iridescent", "wb_sunny", "wc", "web", "web_asset", "weekend", "whats_app", "whatshot", "where_to_vote", "widgets", "wifi", "wifi_lock", "wifi_off", "wifi_tethering", "work", "work_off", "work_outline", "wrap_text", "you_tube", "youtube_searched_for", "zoom_in", "zoom_out", "zoom_out_map"];
var EMPTY_OPTION = "EMPTY-".concat((0, _shortid.generate)());
exports.EMPTY_OPTION = EMPTY_OPTION;

function useDialog(type, defaultValue, onChange) {
  var initValue = (0, _react.useMemo)(function () {
    return JSON.parse(JSON.stringify(defaultValue));
  }, []);

  var _useState = (0, _react.useState)(initValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return [value, (0, _react.useMemo)(function () {
    return JSON.stringify(initValue) !== JSON.stringify(value);
  }, [initValue, value]), {
    add: (0, _react.useCallback)(function () {
      return setValue(function (_ref) {
        var primary = _ref.primary,
            option = _objectWithoutProperties(_ref, _excluded);

        return _objectSpread(_objectSpread({}, option), {}, {
          primary: _objectSpread(_objectSpread({}, primary), {}, _defineProperty({}, EMPTY_OPTION, ''))
        });
      });
    }, [setValue]),
    remove: (0, _react.useCallback)(function (_ref2) {
      var currentTarget = _ref2.currentTarget;
      return setValue(function (_ref3) {
        var primary = _ref3.primary,
            option = _objectWithoutProperties(_ref3, _excluded2);

        // eslint-disable-next-line no-param-reassign
        delete primary[currentTarget.dataset.lang];
        return _objectSpread(_objectSpread({}, option), {}, {
          primary: primary
        });
      });
    }, [setValue]),
    lang: (0, _react.useCallback)(function (_ref4) {
      var _ref4$target = _ref4.target,
          lastLang = _ref4$target.name,
          newLang = _ref4$target.value;
      return setValue(function (_ref5) {
        var _ref5$primary = _ref5.primary,
            lang = _ref5$primary[lastLang],
            $primary = _objectWithoutProperties(_ref5$primary, [lastLang].map(_toPropertyKey)),
            option = _objectWithoutProperties(_ref5, _excluded3);

        return _objectSpread(_objectSpread({}, option), {}, {
          primary: (0, _set2["default"])($primary, newLang, lang)
        });
      });
    }, [setValue]),
    primary: (0, _react.useCallback)(function (_ref6) {
      var _ref6$target = _ref6.target,
          lang = _ref6$target.name,
          primary = _ref6$target.value;
      return setValue(function (_ref7) {
        var $primary = _ref7.primary,
            option = _objectWithoutProperties(_ref7, _excluded4);

        return _objectSpread(_objectSpread({}, option), {}, {
          primary: (0, _set2["default"])($primary, lang, primary)
        });
      });
    }, [setValue]),
    icon: (0, _react.useCallback)(function (_ref8) {
      var dataset = _ref8.currentTarget.dataset;
      return setValue(function (option) {
        var iconType = dataset.type,
            name = dataset.name;
        return _objectSpread(_objectSpread({}, option), {}, {
          icon: {
            type: iconType,
            name: name
          }
        });
      });
    }, [setValue]),
    confirm: (0, _react.useCallback)(function (e) {
      e.preventDefault();
      onChange instanceof Function && onChange(type, value);
    }, [type, value, onChange])
  }];
}

function useIcons(icons) {
  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      keyword = _useState4[0],
      setKeyword = _useState4[1];

  var list = (0, _react.useMemo)(function () {
    return Object.entries(icons || {}).reduce(function (result, _ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          type = _ref10[0],
          $icons = _ref10[1];

      return result.concat($icons.map(function (name) {
        return {
          key: "".concat(type, "-").concat(name),
          type: type,
          name: name
        };
      }));
    }, ICONS.map(function (name) {
      return {
        key: "mui-".concat(name),
        type: 'mui',
        name: name
      };
    }));
  }, [icons]);
  return [(0, _react.useMemo)(function () {
    return (!keyword.trim() ? list : list.filter(function (_ref11) {
      var key = _ref11.key;
      return key.toLowerCase().includes(keyword.toLowerCase());
    })).slice(0, 100);
  }, [list, keyword]), // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _react.useCallback)((0, _debounce2["default"])(function (_ref12) {
    var value = _ref12.target.value;
    return setKeyword(value);
  }, 800), [])];
}