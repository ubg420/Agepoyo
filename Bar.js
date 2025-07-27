phina.define("Bar", {
    superClass: "RectangleShape",
    init: function(X,Y,width,Speed) {
      this.superInit({
        width: width,
        height: 4,
        fill: "#262D18",
        stroke: null,

      });

        this.x = X;
        this.y = Y;

        var harf = width /2;

        var max = SCREEN_WIDTH - harf;
        var min = harf;
        var rand = Math.floor( Math.random() * (max + 1 -min)) + min;

        this.x = rand;



        this.tag = "Bar"
        this.vx = Speed;


        this.vy = 0;
        this.g  = 0;

        this.HitFLG = false;

        this.MoveMode = "Normal";

    },

    update: function(app) {

      this.x += this.vx;
      this.y += WorldVY;


      if(this.x + (this.width /2)> SCREEN_WIDTH){
        this.vx *= -1;
        this.x = SCREEN_WIDTH - (this.width / 2);

      }
      if(this.x - (this.width /2)< 0){
        this.x = 0 +  (this.width /2);
        this.vx *= -1;
      }

      if(this.y > SCREEN_HEIGHT){
        this.remove();
      }


    },

    Hit: function(){
    //  this.fill = "#19935C"
    },

    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;





});
