
var SCREEN_WIDTH = 1024;
var SCREEN_HEIGHT = 768;
var MARKER_RADIUS = 70;
var MARKER_STROKE_WIDTH = 8;

var TRACK_NUM = 12;
var ICON_INTERVAL_DEGREE = 360 / (TRACK_NUM); // 22.5

var MARKER_APPEARANCE_DELTA = 1000; // ノーツ出現時間(ms): 大きくするほど低速
var UNIT_ARRANGE_RADIUS = SCREEN_WIDTH * 0.41 | 0;
var MUSIC_START_DELAY = 2000;

var inShift = 0;
var inCtrl = 0;

var RATING_TABLE = {
  perfect: {
    score: 1000,
    range: 34, //ms
  },
  great: {
    score: 500,
    range: 64, //ms
  },
  good: {
    score: 100,
    range: 90, //ms
  },
  miss: {
    score: 0,
    range: 134, //ms
  },
};

// キーボード操作用
var KEYCODE_TO_KEYDATA_MAP = {
  67: {key:"c", id:0},
  71: {key:"g", id:1},
  68: {key:"d", id:2},
  65: {key:"a", id:3},
  69: {key:"e", id:4},
  // 32: {key:"sp", id:4},
  66: {key:"b", id:5},
  70: {key:"f", id:11},
};
var KEYCODE_TO_KEYDATA_MAP_ctrl = {
  // 32: {key:"sp", id:4},
  71: {key:"g♭", id:6},
  68: {key:"d♭", id:7},
  65: {key:"a♭", id:8},
  69: {key:"e♭", id:9},
  66: {key:"b♭", id:10},
};
var KEYCODE_TO_KEYDATA_MAP_shift = {
  67: {key:"c", id:20},
  71: {key:"g", id:21},
  68: {key:"d", id:22},
  65: {key:"a", id:23},
  69: {key:"e", id:24},
  // 32: {key:"sp", id:4},
  66: {key:"b", id:25},
  70: {key:"f", id:31},
};
var KEYCODE_TO_KEYDATA_MAP_ctrl_shift = {
  // 32: {key:"sp", id:4},
  71: {key:"g♭", id:26},
  68: {key:"d♭", id:27},
  65: {key:"a♭", id:28},
  69: {key:"e♭", id:29},
  66: {key:"b♭", id:30},
};
var INDEX_TO_KEY_MAP = {};
KEYCODE_TO_KEYDATA_MAP.forIn(function(key, val) {
  INDEX_TO_KEY_MAP[val.id] = val.key;
});
KEYCODE_TO_KEYDATA_MAP_ctrl.forIn(function(key, val) {
  INDEX_TO_KEY_MAP[val.id] = val.key;
});
KEYCODE_TO_KEYDATA_MAP_shift.forIn(function(key, val) {
  INDEX_TO_KEY_MAP[val.id] = val.key;
});
KEYCODE_TO_KEYDATA_MAP_ctrl_shift.forIn(function(key, val) {
  INDEX_TO_KEY_MAP[val.id] = val.key;
});

var ASSETS = {
  sound: {
    music: "./assets/grandfather-clock.mp3",
    ring: "./assets/tamborine.mp3",
  },
  json: {
    beatmap: "./assets/grandfather-clock.json"
  }
};

// テスト用譜面
// var DEBUG_BEATMAP = {
//   offset: 0,
//   notes: [],
// };
// (100).times(function(i) {
//   DEBUG_BEATMAP.notes.push({
//     track: i%9,
//     targetTime: 500*i
//   });
// });
