phina.define('TutorialScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#ACCB6D';


    this.bggroup = DisplayElement().addChildTo(this);

    var self = this;

    var bg0 = Sprite('Title').addChildTo(this.bggroup);
    bg0.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    bg0.setPosition(this.gridX.center(),this.gridY.center());






    var bg = Sprite('Setumei01').addChildTo(this.bggroup);
    bg.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    bg.setPosition(this.gridX.center(18),this.gridY.center());
    bg.tweener
      .clear()
      .to({x:self.gridX.center()}, 700,"easeOutSine");


    var OK = Sprite('OK').addChildTo(this)
    OK.setPosition(this.gridX.center(),this.gridY.center(7));
    OK.setInteractive(true);
    this.pagecnt = 0;


    OK.onpointend = function(e) {
      if(self.pagecnt == 0){
        var bg = Sprite('Setumei02').addChildTo(self.bggroup);
        bg.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        bg.setPosition(self.gridX.center(12),self.gridY.center());
        bg.tweener
          .clear()
          .to({x:self.gridX.center()}, 700,"easeOutSine");
        self.pagecnt++;
      }
      else if(self.pagecnt == 1){

        var bg = Sprite('Setumei04').addChildTo(self.bggroup);
        bg.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        bg.setPosition(self.gridX.center(12),self.gridY.center());
        bg.tweener
          .clear()
          .to({x:self.gridX.center()}, 700,"easeOutSine");
        self.pagecnt++;

      }
      else if(self.pagecnt == 2){

            self.exit();

      }

    };



  },

  update: function(app){

  },

  update: function(app){

  },

  onpointend: function(){

  },

  Start: function(){
    this.exit();
  },

});


phina.define("OKButton", {
    superClass: "DisplayElement",
    init: function(X,Y) {
      this.superInit();

        this.x = SCREEN_WIDTH /2 ;
        this.y = 1185;
        this.sprite = Sprite('OK').addChildTo(this);

    },

    update: function(app) {

    },


    onpointend: function(){

    },

});


    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;
