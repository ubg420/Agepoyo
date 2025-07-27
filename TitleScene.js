phina.define('TitleScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#ACCB6D';

    var bg = Sprite('Title').addChildTo(this);
    bg.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    bg.setPosition(this.gridX.center(),this.gridY.center());


    // ラベルを表示
    this.startlabel = Label('スタート').addChildTo(this);
    this.startlabel.setPosition(this.gridX.center(0),this.gridY.center(6.3));
    this.startlabel.fill = '#262D18'; // 色を変更
    this.startlabel.strokeWidth = 8;
    this.startlabel.fontSize = 64; // フォントサイズを変更
    this.startlabel.tweener
      .clear()
      .to({alpha:1,scaleX:1,scaleY:1}, 700,"easeOutSine")
      .wait(400)
      .to({alpha:0,scaleX:0.8,scaleY:0.8}, 700,"easeInSine")
      .setLoop(true);




    this.StartFLG = false;

    this.flg = false;
  },

  update: function(app){

  },

  onpointend: function(){

    if(!this.StartFLG){
      this.Start();
      this.StartFLG = true;

      //Debug
      //this.exit();
      //
    }
  },

  Start: function(){
    this.exit();
  },

});
