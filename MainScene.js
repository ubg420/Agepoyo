phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#ACCB6D';

    GameMain = this;
    WorldVY = 0;
    ObjectGroup = DisplayElement().addChildTo(this);
    DotGroup = DisplayElement().addChildTo(this);

    this.point = 0;

    var ground = Bar(0,1200,SCREEN_WIDTH,0).addChildTo(ObjectGroup);

    this.Player = Player().addChildTo(this);
    this.Player.bar = ground;



    var bar = Bar(300,900,200,0).addChildTo(ObjectGroup);
    var bar = Bar(300,900,200,0).addChildTo(ObjectGroup);
    var bar = Bar(300,800,200,0).addChildTo(ObjectGroup);
    var bar = Bar(300,700,200,0).addChildTo(ObjectGroup);
    var bar = Bar(300,600,200,0).addChildTo(ObjectGroup);
    var bar = Bar(300,500,100,0).addChildTo(ObjectGroup);
    var bar = Bar(300,400,200,0).addChildTo(ObjectGroup);
    var bar = Bar(300,300,300,0).addChildTo(ObjectGroup);
    var bar = Bar(300,200,100,0).addChildTo(ObjectGroup);
    var bar = Bar(300,100,200,0).addChildTo(ObjectGroup);

    var bar = Bar(300,1000,200,0).addChildTo(ObjectGroup);
    var bar = Bar(300,1100,200,0).addChildTo(ObjectGroup);


    var self = this;

    this.timer = 0;

    this.WorldY = 0;

    this.NextBarY = 19;


    this.Score = Label('0M').addChildTo(this);
    this.Score.setPosition(100,50);
    this.Score.fill = '#262D18'; // 色を変更
    this.Score.strokeWidth = 8;
    this.Score.fontSize = 64; // フォントサイズを変更

    this.barSize = 150;
    this.barSizeMin = 55;





    this.GameLevel = 1;
    this.LevelUpdate(this.GameLevel);
    this.NextLevelPoint = 50;



    var flickable = Flickable().attachTo(this);
    // 横のみ許可
    flickable.horizontal = false;
    flickable.vertical = false;
    var self = this;

    this.TouchFLG = false;

    flickable.onflickstart = function(e) {
      switch (self.Player.MoveMode) {
        case "Hunbari":
          // キャンセル
          this.cancel();

          var angle = e.direction.toAngle().toDegree()|0;

          var top_u = 280;
          var top_l = 260;
          var left = 180;
          var right = 360

          //上
          if (left < angle && angle < right) {

            self.Player.Jump(Math.floor(angle));


          }
          else{
            self.Player.JumpCansel();

          }
/*
          //下
          if (80 < angle && angle < 100) {
          //  self.onenter();
          }
          //上
          else if (top_l < angle && angle < top_u) {

            self.Player.Jump(270);

          }
          //左
          else if (left < angle && angle < top_l) {
            self.Player.Jump(angle);

          }
          //左
          else if (right > angle && angle > top_u) {
            self.Player.Jump(angle);

          }
          else{
            self.Player.JumpCansel();

          }
*/

        // 角度を表示
          break;

          case "Jump":
            // キャンセル
            this.cancel();

            var angle = e.direction.toAngle().toDegree()|0;

            var top_u = 280;
            var top_l = 260;
            var left = 180;
            var right = 360

            //上
            if (left < angle && angle < right) {

             self.Player.HunbariJump(Math.floor(angle));






            }
            else{
              //self.Player.JumpCansel();

            }


          // 角度を表示
            break;
        default:
      }
    };

    flickable.onflickcancel = function(e) {
      this.cancel();
      switch (self.Player.MoveMode) {
        case "Hunbari":
          self.Player.JumpCansel();

          break;
        default:
      }



    };






  },

  update: function(app){
    this.timer++;
    this.WorldY += WorldVY;

    if(this.WorldY > this.NextBarY){
      this.CreateBar();
    }

    this.ScoreUpdate();
    this.LevelCheck();
    this.drawTrajectory();

  },


  LevelCheck(){


    if(this.point > this.NextLevelPoint){
      this.GameLevel++;
      this.LevelUpdate(this.GameLevel);
      this.NextLevelPoint += 50;
    }

  },

  LevelUpdate(level){
    switch (level) {
      case 1:
          this.barSize = 140;
          this.barSizeMin = 55;
          this.HighBarFLG = false;
          this.MoveBarFLG = false;
          this.BarInterval = 95;


        break;

      case 2:
          this.barSize = 150;
          this.barSizeMin = 55;
          this.HighBarFLG = false;
          this.MoveBarFLG = true;
          this.MoveBarProbability = 5;
          this.barSpeed = 5;
          this.BarInterval = 110;



        break;


        case 3:


          this.barSize = 150;
          this.barSizeMin = 55;
          this.HighBarFLG = true;
          this.MoveBarFLG = false;
          this.BarInterval = 110;
          this.HighBarInterval = 400;
          this.HighBarProbability = 8;
        break;


        case 4:

          this.barSize = 130;
          this.barSizeMin = 50;
          this.BarInterval = 130;
          this.HighBarFLG = false;
          this.MoveBarFLG = false;
        break;

        case 5:


          this.barSize = 130;
          this.barSizeMin = 55;
          this.HighBarFLG = true;
          this.HighBarInterval = 400;
          this.HighBarProbability = 8;
          this.MoveBarFLG = true;
          this.MoveBarProbability = 5;
          this.barSpeed = 5;
          this.BarInterval = 140;

        break;


        case 6:
          this.barSize = 100;
          this.barSizeMin = 50;
          this.BarInterval = 100;
          this.HighBarFLG = false;
          this.MoveBarFLG = true;
          this.MoveBarProbability = 4;
          this.barSpeed = 5;
           break;


       case 7:
         this.barSize = 120;
         this.barSizeMin = 50;
         this.BarInterval = 130;
         this.HighBarFLG = true;
         this.HighBarInterval = 500;
         this.HighBarProbability = 5;
         this.MoveBarFLG = false;
      break;

      case 8:
        this.barSize = 120;
        this.barSizeMin = 50;
        this.BarInterval = 150;
        this.HighBarFLG = true;
        this.HighBarInterval = 500;
        this.HighBarProbability = 5;
        this.MoveBarFLG = true;
        this.MoveBarProbability = 4;
        this.barSpeed = 5;
       break;


       case 9:

         this.barSize = 90;
         this.barSizeMin = 50;
         this.BarInterval = 90;
         this.HighBarFLG = false;
         this.MoveBarFLG = false;
       break;


       case 10:

         this.barSize = 100;
         this.barSizeMin = 50;
         this.BarInterval = 180;
         this.HighBarFLG = false;
         this.MoveBarFLG = true;
         this.MoveBarProbability = 2;
         this.barSpeed = 5;

      break;

      case 11:

        this.barSize = 60;
        this.barSizeMin = 50;
        this.BarInterval = 110;
        this.HighBarFLG = true;
        this.HighBarInterval = 510;
        this.HighBarProbability = 5;

        this.MoveBarFLG = false;

     break;

     case 12:

       this.barSize = 80;
       this.barSizeMin = 50;
       this.BarInterval = 200;
       this.HighBarFLG = true;
       this.HighBarInterval = 510;
       this.HighBarProbability = 5;
       this.MoveBarFLG = true;
       this.MoveBarProbability = 3;
       this.barSpeed = 5;

    break;

    case 13:

      this.barSize = 50;
      this.barSizeMin = 50;
      this.BarInterval = 110;
      this.HighBarFLG = false;
      this.MoveBarFLG = true;
      this.MoveBarProbability = 3;
      this.barSpeed = 5;
      break;



    case 14:

      this.barSize = 70;
      this.barSizeMin = 50;
      this.BarInterval = 250;
      this.HighBarFLG = false;
      this.MoveBarFLG = true;
      this.MoveBarProbability = 3;
      this.barSpeed = 5;
    break;


    case 15:

      this.barSize = 60;
      this.barSizeMin = 50;
      this.BarInterval = 250;
      this.HighBarFLG = false;
      this.MoveBarFLG = false;
    break;


    case 16:

      this.barSize = 40;
      this.barSizeMin = 50;
      this.BarInterval = 110;
      this.HighBarFLG = true;
      this.HighBarInterval = 510;
      this.HighBarProbability = 5;
      this.MoveBarFLG = false;


    break;

    case 17:

      this.barSize = 50;
      this.barSizeMin = 50;
      this.BarInterval = 250;
      this.HighBarFLG = true;
      this.HighBarInterval = 510;
      this.HighBarProbability = 5;
      this.MoveBarFLG = true;
      this.MoveBarProbability = 3;
      this.barSpeed = 5;
   break;



    case 18:

        this.barSize = 30;
        this.barSizeMin = 50;
        this.BarInterval = 250;
        this.HighBarFLG = false;
        this.MoveBarFLG = false;

    break;


    case 19:

    this.barSize = 20;
    this.barSizeMin = 50;
    this.BarInterval = 250;
    this.HighBarFLG = true;
    this.HighBarInterval = 510;
    this.HighBarProbability = 5;
    this.MoveBarFLG = true;
    this.MoveBarProbability = 3;
    this.barSpeed = 5;
    break;


    case 20:

    this.barSize = 15;
    this.barSizeMin = 50;
    this.BarInterval = 130;
    this.HighBarFLG = false;
    this.MoveBarFLG = true;
    this.MoveBarProbability = 3;
    this.barSpeed = 5;

    break;









      default:

    }
  },

  ScoreUpdate:function(){

    this.point = Math.floor(this.WorldY / 100);
    this.Score.text = this.point + "m";

  },

  CreateBar: function(){


    //this.barSpeed += 0.5;
    if(this.SpeedMax < this.barSpeed){
      this.barSpeed = this.SpeedMax;
    }


    var Speed;
    if(this.MoveBarFLG){
      var rm = Math.floor( Math.random() * this.MoveBarProbability);
      if(rm == 1){
        Speed = Math.floor( Math.random() * this.barSpeed ) + 5;
      }
      else{
        Speed = 0;
      }
    }
    else{
      Speed = 0;
    }

    var randSize = Math.floor( Math.random() * this.barSize ) + this.barSize;

    var randv = Math.floor( Math.random() * 2);
    if(randv == 1){
      var bar = Bar(300,0,randSize,Speed).addChildTo(ObjectGroup);
    }
    else{
      var bar = Bar(300,0,randSize,Speed).addChildTo(ObjectGroup);

    }


    if(this.HighBarFLG){
      var r = Math.floor( Math.random() * this.HighBarProbability);
      if(r == 1){
        this.NextBarY += this.HighBarInterval;
      }
      else{
        this.NextBarY += this.BarInterval;
      }
    }
    else{
      this.NextBarY += this.BarInterval;
    }


  },

  onpointstart: function(){
    switch (this.Player.MoveMode) {
      case "Normal":
        this.Player.Hunbari();

        break;

      case "Jump":
        //this.Player.HunbariJump2();

        break;
      default:

    }



  },

  onpointend: function(){
    switch (this.Player.MoveMode) {
      case "Hunbari":
    //    this.Player.Jump();
      //    this.Player.JumpCansel();

        break;
      default:

    }
  },


  GameOver: function(){
    var result = Result().addChildTo(this);
  },

  Retry: function(){
    this.exit("Main");
  },

  drawTrajectory: function(){
        // Calculate a time offset. This offset is used to alter the starting
        // time of the draw loop so that the dots are offset a little bit each
        // frame. It gives the trajectory a "marching ants" style animation.
        var MARCH_SPEED = 40; // Smaller is faster
        this.timeOffset = this.timeOffset + 1 || 0;
        this.timeOffset = this.stimeOffset % MARCH_SPEED;


        this.BULLET_SPEED = 10;

        this.GRAVITY =1;
        // Just a variable to make the trajectory match the actual track a little better.
        // The mismatch is probably due to rounding or the physics engine making approximations.
        var correctionFactor = 0.99;



        // Draw the trajectory
        // http://en.wikipedia.org/wiki/Trajectory_of_a_projectile#Angle_required_to_hit_coordinate_.28x.2Cy.29
        var theta = -11;
        var x = 0, y = 0;
        for(var t = 0 + this.timeOffset/(1000*MARCH_SPEED/60); t < 3; t += 0.03) {
      //      console.log('test');

            x = this.BULLET_SPEED * t * Math.cos(theta) * correctionFactor;
            y = this.BULLET_SPEED * t * Math.sin(theta) * correctionFactor - 0.5 * this.GRAVITY * t * t;
            var circle = CircleShape().addChildTo(this);
            circle.setPosition(x + this.Player.x, this.Player.y - y);

            if (y < -15) break;
        }

    }



});
