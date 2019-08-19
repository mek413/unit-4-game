
// $(document).ready(function(){
//     // var thor = {};
//     // var thanos = {};
//     // var spiderMan = {};
//     // var hulk = {};
//     // var thorLP = 160;
//     // var thanosLP = 200;
//     // var spiderManLP = 120;
//     // var hulkLP = 150;
//     // var userHit = 1;
//     // var defenderHit = 1;
//     // var battle = "";
//     // var thorClicked = false;
//     // var smClicked = false;
//     // var thanosClicked = false;
//     // var hulkClicked = false;
//     // var thorDefeated = false;
//     // var thanosDefeated = false;
//     // var spiderManDefeated = false;
//     // var hulkDefeated = false;
//     // var upNext = false;
//     // var lastFight = false;
//     var thor = {
//         thorLP: 160,
//         thorClicked: false,
//         thorDefeated: false,
//     };
//     var thanos = {
//         thanosLP: 200,
//         thanosClicked: false,
//         thanosDefeated: false,
//     };
//     var spiderMan = {
//         spiderManLP: 120,
//         spiderManDefeated: false,
//         smClicked: false,
//     };
//     var hulk = {
//         hulkLP: 150,
//         hulkClicked: false,
//         hulkDefeated: false,
//     };
//     var userHit = 1;
//     var defenderHit = 1;
//     var battle = "";
//     var upNext = false;
//     var lastFight = false;
//     function initialize(){
    
//     };
//     function userDamage() {
//       userHit = Math.floor(Math.random()*51);
//     };
//     function battleDamage() {
//         defenderHit = 5;
//       };
    
//         thor = $(".thor").on("click", function(){
//             $(".thor").css("position", "absolute");
    
//             $(".hulk").css("position", "relative");
//             $(".hulk").css("top", "330px");
//             $(".hulk").css("background", "red");
//             $(".hulk").css();
    
//             $(".thanos").css("position", "relative");
//             $(".thanos").css("top", "330px");
//             $(".thanos").css("background", "red");
    
//             $(".spiderman").css("position", "relative");
//             $(".spiderman").css("top", "330px");
//             $(".spiderman").css("background", "red");
    
//             $(".thor").append(thor);
//             thorClicked = true;
//         });
//         thanos = $(".thanos").on("click", function(){
//             $(".thanos").css("position", "absolute");
//             $(".thanos").css("top", "50%");
    
//             $(".thor").css("position", "relative");
//             $(".thor").css("top", "700px");
    
//             $(".spiderman").css("position", "relative");
//             $(".spiderman").css("top","700px");
    
//             $(".hulk").css("position", "relative");
//             $(".hulk").css("top", "700px");
    
//             $(".thanos").append(thanos);
//             thanosClicked = true;
//         });
//         spiderMan = $(".spiderman").on("click", function(){
//             $(".spiderman").css("position", "absolute");
//             $(".spiderman").css("top", "50%");
    
//             $(".hulk").css("position", "relative");
//             $(".hulk").css("top", "700px");
    
//             $(".thanos").css("position", "relative");
//             $(".thanos").css("top", "700px");
    
//             $(".thor").css("position", "relative");
//             $(".thor").css("top", "700px");
    
//             $(".spiderman").append(spiderMan);
//             smClicked = true;
//         });
//         hulk = $(".hulk").on("click", function(){
//             $(".hulk").css("position", "absolute");
//             $(".hulk").css("top", "50%");
    
//             $(".thor").css("position", "relative");
//             $(".thor").css("top", "700px");
    
//             $(".spiderman").css("position", "relative");
//             $(".spiderman").css("top","700px");
    
//             $(".thanos").css("position", "relative");
//             $(".thanos").css("top", "700px");
    
//             $(".hulk").append(hulk);
//             hulkClicked = true;
//         });
    
//     battle = $(".button").on("click", function(){
//         battleDamage();
//         userDamage();
//         $(".damage").html("Your attack deals " + userHit + " damage!");
//         $(".damagetaken").html("You take " + defenderHit + " damage!");
//         console.log(userHit);
//         if (thorClicked === true) {
//             thorLP = thorLP - defenderHit;
//             $(".thor-lifepoints").text(thorLP);
//             thanosLP = thanosLP - userHit;
//             $(".thanos-lifepoints").text(thanosLP);
//             if (thorLP < 1) {
//                 thorDefeated = true;
//                 if (thorDefeated === true) {
//                     thorLP = 0;
//                     $(".thor-lifepoints").text(thorLP);
//                     alert("You have been defeated! Try again!")
//                     initialize();
//                 }
//             }
//             if (thanosLP < 1) {
//                 thanosDefeated = true;
//                 thanosLP = 1000;
//             };
//             if (thanosDefeated === true) {
//                 thorLP = thorLP + 100;
//                 alert("You beat Thanos!");
//                 alert("You heal by 100 lifepoints!")
//                 $(".thor-lifepoints").text(thorLP);
//                 $(".thanos").css("display", "none");
//                 $(".spiderman").css("background", "white");
//                 thanosDefeated = false;
//                 upNext = true;
//             };
//                 if (upNext === true) {
//                 spiderManLP = spiderManLP - userHit;
//                 $(".sm-lifepoints").text(spiderManLP);
//                 if (spiderManLP < 1) {
//                 upNext = false;
//                 spiderManDefeated = true;
//                 spiderManLP = 1000;
//                 }
//               }
//               if (spiderManDefeated === true) {
//                 thorLP = thorLP + 100;
//                 alert("You beat Spider-Man!");
//                 alert("You heal by 100 lifepoints!")
//                 $(".thor-lifepoints").text(thorLP);
//                 $(".spiderman").css("display", "none");
//                 $(".hulk").css("background", "white");
//                 spiderManDefeated = false;
//                 lastFight = true;
//               }
//               if (lastFight === true) {
//                   hulkLP = hulkLP - userHit;
//                   $(".hulk-lifepoints").text(hulkLP);
//                   if (hulkLP < 1) {
//                       hulkDefeated = true;
//                       alert("You win! You're the ultimate Avenger!")
//                       $(".hulk").css("display", "none");
//                       initialize();
//                   }
//               }
//             }
            
        
//         if (smClicked === true) {
//             spiderManLP = spiderManLP - defenderHit;
//             $(".sm-lifepoints").text(spiderManLP);    
//         }
//         if (thanosClicked === true) {
//             thanosLP = thanosLP - defenderHit;
//             $(".thanos-lifepoints").text(thanosLP);    
//         }
//         if (hulkClicked === true) {
//             hulkLP = hulkLP - defenderHit;
//             $(".hulk-lifepoints").text(hulkLP);    
//         }
//     });
//     });
    