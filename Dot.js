phina.define("Dot", {
    superClass: "DisplayElement",
    init: function(type) {
      this.superInit({
        width: 65,
        height: 100,
        fill: "green",
        stroke: null,

      });

        this.x = SCREEN_WIDTH;
        this.y = 550;

        this.tag = "enemy";

        this.speed = 10;
        this.vx = 1;
        this.vy = 1;




        this.setBoundingType("rect");
        this.color =  "#262D18";

        this.ColisionFLG = false;

        switch (type) {
          case "jump":

            //コリジョン
            this.dot1 = RectangleShape().addChildTo(this);
            this.dot1.width = 5;
            this.dot1.height =5;
            this.dot1.x = 0;
            this.dot1.y = 15;

            this.dot1.fill =  "#262D18";
            this.dot1.strokeWidth = 0;

            this.dot2 = RectangleShape().addChildTo(this);
            this.dot2.width = 5;
            this.dot2.height =5;
            this.dot2.x = 0;
            this.dot2.y = 15;

            this.dot2.fill =  "#262D18";
            this.dot2.strokeWidth = 0;

            this.dot1.tweener
            .clear()
            .to({x:-50,y:-60}, 300,"easeOutSine")
            .wait(100)

            .to({x:-60,y:20,alpha:0}, 400,"easeInSine")

            this.dot2.tweener
            .clear()
            .to({x:50,y:-60}, 300,"easeOutSine")
            .wait(100)

            .to({x:60,y:20,alpha:0}, 400,"easeInSine")



            break;

          case "hunbari":

            this.dot1 = RectangleShape().addChildTo(this);
            this.dot1.width = 6;
            this.dot1.height =4;
            this.dot1.x = -5;
            this.dot1.fill =  "#262D18";
            this.dot1.strokeWidth = 0;

            this.dot2 = RectangleShape().addChildTo(this);
            this.dot2.width = 6;
            this.dot2.height =4;
            this.dot2.x = 5;
            this.dot2.fill =  "#262D18";
            this.dot2.strokeWidth = 0;


            this.dot1.tweener
            .clear()
            .to({x:-40,alpha:0}, 400,"easeOutSine")

            this.dot2.tweener
            .clear()
            .to({x:40,alpha:0}, 400,"easeOutSine")

            break;

            case "tyakuti":

              this.dot1 = RectangleShape().addChildTo(this);
              this.dot1.width = 6;
              this.dot1.height =6;
              this.dot1.x = -20;
              this.dot1.fill =  "#262D18";
              this.dot1.strokeWidth = 0;

              this.dot2 = RectangleShape().addChildTo(this);
              this.dot2.width = 6;
              this.dot2.height =6;
              this.dot2.x = 20;
              this.dot2.fill =  "#262D18";
              this.dot2.strokeWidth = 0;


              this.dot1.tweener
              .clear()
              .to({x:-70,y: -10},200,"easeOutSine")
              .wait(100)
              .to({alpha:0}, 300,"easeOutSine")


              this.dot2.tweener
              .clear()
              .to({x:70,y:-10},200,"easeOutSine")
              .wait(100)
              .to({alpha:0}, 300,"easeOutSine")

              break;



          default:

        }


        //コリジョン







        this.HitFLG = false;

        this.MoveMode = "Normal";
        this.timer = 50;



    },

    update: function(app) {

      this.timer--;
      if(this.timer < 0){
        this.remove();
      }


      this.y += WorldVY;




    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;

    },



});
