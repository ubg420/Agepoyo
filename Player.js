phina.define("Player", {
    superClass: "DisplayElement",
    init: function(X,Y) {
      this.superInit();

        this.x = SCREEN_WIDTH /2 ;
        this.y = 1185;

        this.vx = 0;
        this.vy = 0;
        this.g  = 2;


        this.JumpPower = -33;
        this.TameJumpPower = -45;


        this.vyMAX = 20;

        this.width = 20;
        this.height = 20;

        this.MoveMode = "Normal"

        this.Player = Sprite('Player').addChildTo(this);
        this.PlayerSS = FrameAnimation('PlayerSS');
        this.PlayerSS.attachTo(this.Player);
        this.PlayerSS.gotoAndPlay('Normal');
        this.PlayerSS.fit = false;
        this.Player.setSize(65, 65);
        this.Player.y = -14;
        this.Player.x = 1;

        this.scaleX = 1;
        this.scaleY = 1;

        this.setBoundingType("rect");
        this.color = "hsla(133, 100%, 50%, 1)";
        this.ColisionFLG = false;

        //コリジョン
        this.colision = RectangleShape().addChildTo(this);
        this.colision.width = this.width;
        this.colision.height = this.height;
        this.colision.alpha = 0; //コリジョン可視化 = 1

        this.HitFLG = false;



        this.bar;



        this.HunbariTimer = 0;
        this.HunbariRemit = 20;
        this.TameJumpFLG = false;

        this.HunbariJumpMax = 3;
        this.HunbariJumpCnt = 0;

    },

    update: function(app) {
      this.colision.width = this.width;
      this.colision.height = this.height;

      switch (this.MoveMode) {
        case "Normal":
        this.x += this.bar.vx;

        break;



        case "Hunbari":


          if(this.TameJumpFLG == false){
              this.HunbariTimer++;
              if(this.HunbariTimer > this.HunbariRemit){
                this.TameJumpFLG = true;
                this.PlayerSS.gotoAndPlay('Tame');
              }
          }


          this.x += this.bar.vx;
          break;




        case "Hit":
          this.x += this.vx;
          this.y += this.vy;
          this.vy += this.g;

          break;

        case "Jump":

            if(this.y < RemitY && this.vy < 0){
                WorldVY = -this.vy;
                this.yuka += WorldVY;
            }
            else{
                WorldVY = 0;
                this.y += this.vy;
            }
            if(this.x <  0){
              this.x = 0;
              this.vx *= -1;
            }
            if(this.x >  SCREEN_WIDTH){
              this.x = SCREEN_WIDTH;
              this.vx *= -1;
            }


          this.x += this.vx;



          this.vy += this.g;

          if(this.vy > this.vyMAX){
            this.vy = this.vyMAX;
          }
          this.HitCheck();

          break;

      }

      if(this.y - this.height> SCREEN_HEIGHT){
        GameMain.GameOver();
        this.remove();
      }



    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;

    },

    HitCheck: function(){
      //当たり判定
      var og = ObjectGroup.children;
      var self = this;
      og.each(function(Object) {
          if(self.hitTestElement(Object)){
            switch (Object.tag) {
              case "Bar":
                if(self.vy > 0){
                  self.JumpEnd();
                  self.y = Object.y - (Object.height /2) - (self.height /2);
                  self.vy = 0;
                  WorldVY = 0;
                  Object.Hit();
                  self.bar = Object;
                }

                break;
            }
          }

      });
    },

    Hit: function(){
      switch (this.MoveMode) {
        case "Normal":
          this.vx = -10;
          this.vy = -15;
          this.g  = 1;
          this.MoveMode = "Hit";

          break;
        }

    },

    Hunbari: function(){


        this.HunbariTimer = 0;
        this.TameJumpFLG = false;
        this.HunbariJumpCnt = 0;


        this.MoveMode = "Hunbari";
        this.PlayerSS.gotoAndPlay('Hunbari');
    },

    HunbariJump: function(rot){

        if(this.HunbariJumpCnt < this.HunbariJumpMax){

          this.PlayerSS.gotoAndPlay('HunbariJump');
        //  this.vy = -10;

          var power = 10;

          var dx = Math.cos( rot * Math.PI / 180 ) * (power * 1);
          var dy = Math.sin( rot * Math.PI / 180 ) * power;
  //        this.vy = -dy;

          if(this.vy > 0){
            this.vy = -power;
          }else{
            this.vy -= power;
          }
          this.vx = dx;
          this.HunbariJumpCnt++;


        }

    },

    HunbariJump2: function(rot){

      if(this.HunbariJumpCnt < this.HunbariJumpMax){

        this.PlayerSS.gotoAndPlay('HunbariJump');

        var power = 5;
/*
        if(this.HunbariJumpCnt == 0){
          power = 7;
        }
        if(this.HunbariJumpCnt == 1){
          power = 3;
        }
*/

        this.vy -= power;
        if(this.vy > 0){
          this.vy -= 5;
        }


        this.vx = this.vx / 2;
        this.HunbariJumpCnt++;

      }

    },

    JumpEnd: function(){
      this.MoveMode = "Normal";
      this.PlayerSS.gotoAndPlay('Tyakuti');

    },

    Jump: function(rot){

        var power;

        if(this.TameJumpFLG){
          power = this.TameJumpPower
        }else{
          power = this.JumpPower
        }



        var dx = Math.cos( rot * Math.PI / 180 ) * (power * 0.8);
        var dy = Math.sin( rot * Math.PI / 180 ) * power;
//        this.vy = -dy;
        this.vy = power;

        this.vx = -dx;

  //      console.log(Math.floor(dx));


        this.MoveMode = "Jump";
        this.PlayerSS.gotoAndPlay('Jump');

    },

    JumpCansel: function(){
      this.MoveMode = "Normal";
      this.PlayerSS.gotoAndPlay('Normal');
    }


});
