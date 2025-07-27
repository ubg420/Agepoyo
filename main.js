phina.globalize();

var SCREEN_WIDTH    = 920;
var SCREEN_HEIGHT   = 1280;
var Group;
var ObjectGroup;
var DotGroup;

var GameMain;
var WorldVY;
var RemitY = 600;



var ASSETS = {
  image: {
    'Player': 'img/Player.png',
    'cachacacha':'img/logo.png',
    'Retry':'img/Retry.png',
    'Tweet':'img/Tweet.png',
    'Setumei01':'img/setumei1.png',
    'Setumei02':'img/setumei2.png',
    'Setumei03':'img/setumei3.png',
    'Setumei04':'img/setumei4.png',


    'Title':'img/title4.png',

    'OK':'img/OKButton.png',



  },
  spritesheet: {
    'PlayerSS': 'spriteSS/PlayerSS.ss',
  },
  sound: {

  },
};

phina.main(function() {
  var app = GameApp({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    assets: ASSETS,
  });
  app.replaceScene(SceneSequence());
  app.run();
});

// SceneSequenceクラス
phina.define("SceneSequence", {
  superClass: "phina.game.ManagerScene",

  // 初期化
  init: function() {
    this.superInit({
      scenes: [

        {
          label: "Loading", // ラベル。参照用
          className: "LoadingScene", // シーンAのクラス名
          nextLabel:"Title",
        },

        {
          label: "Title", // ラベル。参照用
          className: "TitleScene", // シーンAのクラス名
          nextLabel:"Tutorial",
    //      nextLabel:"Main",

        },

        {
          label: "Tutorial", // ラベル。参照用
          className: "TutorialScene", // シーンAのクラス名
          nextLabel:"Main",
        },

        {
          label: "Main",
          className: "MainScene",
        },

        {
          label: "Result",
          className: "ResultScene",
        }

      ]
    });
  }
});

phina.define("LoadingScene", {
  superClass: "phina.game.LoadingScene",

  init: function(params) {
    this.superInit({
      assets: ASSETS,
      exitType: "auto",

    });

  }

});

phina.define('ResultScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit();
  },
});
