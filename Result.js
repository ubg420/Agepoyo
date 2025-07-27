phina.define("Result", {
    superClass: "DisplayElement",
    init: function() {
      this.superInit({
        width: 0,
        height: 0,
      });

      this.x = 0;
      this.y = 0;


      GameMain.Score.tweener
      .clear()
      .to({x:GameMain.gridX.center(),y:300,scaleX:3,scaleY:3}, 1300,"easeOutQuart");


      this.RankCheck();

      this.ranklabel = Label(this.rank).addChildTo(this);
      this.ranklabel.setPosition(GameMain.gridX.center(0),GameMain.gridY.center(-10));
      this.ranklabel.fill = '#262D18'; // 色を変更
      this.ranklabel.strokeWidth = 8;
      this.ranklabel.fontSize = 64; // フォントサイズを変更
      this.ranklabel.tweener
        .clear()
        .wait(500)
        .to({y:GameMain.gridY.center(-2)}, 1300,"easeOutQuart");




      var tweet = Sprite('Tweet',200,70).addChildTo(this);

      var url = "http://cachacacha.com/GAME/UP2/";
      var score = 0;
      this.ResultTxt = "";

      var Tweettxt = encodeURIComponent("スコア:" + GameMain.point + "m  " +  this.rank + "  " + url + "  #あげぽよ～ #かちゃコム");

      tweet.x = GameMain.gridX.center(3);
      tweet.y = -100;
      tweet.scaleX = 1.3;
      tweet.scaleY = 1.3;
      tweet.tweener
      .clear()
      .wait(1000)
      .to({y:700}, 1300,"easeOutQuart");
      // タッチ判定を有効に
      tweet.setInteractive(true);
      // タッチ終了時に発火
      tweet.onclick = function() {
        // 自身を削除
        window.open("http://twitter.com/intent/tweet?text=" + Tweettxt);
      };

      var retry = Sprite('Retry',200,70).addChildTo(this);
      retry.x = GameMain.gridX.center(-3);
      retry.y = -100;
      retry.scaleX = 1.3;
      retry.scaleY = 1.3;

      retry.tweener
      .clear()
      .wait(1100)
      .to({y:700}, 1300,"easeOutQuart");
      // タッチ判定を有効に
      retry.setInteractive(true);
      // タッチ終了時に発火
      retry.onclick = function() {
        // 自身を削除
        GameMain.Retry();

      };

      var cachacacha = Sprite('cachacacha').addChildTo(this);
      cachacacha.x = GameMain.gridX.center(15);
      cachacacha.y = GameMain.gridY.center(4);
      cachacacha.scaleX = 1.5;
      cachacacha.scaleY = 1.5;

      cachacacha.tweener
      .clear()
      .wait(1700)
      .to({x:GameMain.gridX.center()}, 1300,"easeOutQuart");
      // タッチ判定を有効に
      cachacacha.setInteractive(true);
      // タッチ終了時に発火
      cachacacha.onclick = function() {
        // 自身を削除
        window.open("http://www.cachacacha.com/");
      };






    },

    update: function(app) {

    },


    RankCheck:function(){
      switch (GameMain.GameLevel) {
        case 1:
          this.rank = "はじめのいっぽ";
        break;

        case 2:
          this.rank = "はなたれ";
        break;

        case 3:
          this.rank = "かけだし";
        break;

        case 4:
          this.rank = "かばんもち";
        break;

        case 5:
          this.rank = "るーきー";
        break;

        case 6:
          this.rank = "せんぱいかぜ";
        break;

        case 7:
          this.rank = "がんばりやさん";
        break;

        case 8:
          this.rank = "いっちょまえ";
        break;

        case 9:
          this.rank = "べてらん";
        break;

        case 10:
          this.rank = "おやぶん";
        break;

        case 11:
          this.rank = "本当のはじまり";
        break;

        case 12:
          this.rank = "求道者";
        break;

        case 13:
          this.rank = "修験者";
        break;

        case 14:
          this.rank = "覚醒者";
        break;

        case 15:
          this.rank = "烏天狗";
        break;

        case 16:
          this.rank = "昇り龍";
        break;

        case 17:
          this.rank = "修験の極み";
        break;

        case 18:
          this.rank = "天下人";
        break;

        case 19:
          this.rank = "天空王";
        break;

        case 20:
          this.rank = "竜神王";
        break;


        default:

      }

      if(GameMain.GameLevel > 20){
        this.rank = "釈迦";
      }



    },




        RankCheck2:function(){
          switch (GameMain.GameLevel) {
            case 1:
              this.rank = "非モテ";
            break;

            case 2:
              this.rank = "ややモテ";
            break;

            case 3:
              this.rank = "モテの目覚め";
            break;

            case 4:
              this.rank = "クラスの人気者";
            break;

            case 5:
              this.rank = "気になるあの人";
            break;

            case 6:
              this.rank = "あこがれの先輩";
            break;

            case 7:
              this.rank = "まごうことなきイケメン";
            break;

            case 8:
              this.rank = "学園のアイドル";
            break;

            case 9:
              this.rank = "激モテ";
            break;

            case 10:
              this.rank = "No1ホスト";
            break;

            case 11:
              this.rank = "アントニオ・バンデラス";
            break;

            case 12:
              this.rank = "モテの求道者";
            break;

            case 13:
              this.rank = "モテ鬼(モテオーガ)";
            break;

            case 14:
              this.rank = "モテケラトプス";
            break;

            case 15:
              this.rank = "モテ大僧正";
            break;

            case 16:
              this.rank = "モテモテドラゴン";
            break;

            case 17:
              this.rank = "モテの極み";
            break;

            case 18:
              this.rank = "ジョージクルーニー";
            break;

            case 19:
              this.rank = "モテキング";
            break;

            case 20:
              this.rank = "モテゴッド";
            break;


            default:

          }

          if(GameMain.GameLevel > 20){
            this.rank = "モテという概念";
          }



        },



});
