$(document).ready(function () {

    // This captures the menu into a variable
    var menuHold = $(".menu").html();
    // Creates the menu anytime it's called
    function menuGenerate() {
        // This places the main background
        $("body").addClass("home");
        $(".menu").empty();
        $(".menu").append(menuHold);
    }
    // Start Game page
    function startGame(){
        // Clear Menu
        $(".menu, .stageLabel").empty();
        // This changes the background
        $("body").removeClass("home").addClass("fight");
        // Load Players and assign attribute value = 0,1,2,3,
        for(var i=0;i<fighters.length; i++){
            var imagePath=('<img class = "playerMain" src="assets/images/' + fighters[i].imgSource +' "/>');
            var imageHeader=('<h3 class="capt-mod players text-white">'+ fighters[i].name+'</h3>');
            $(".listPlayers").append('<div class="img-mod img-format text-white" value="'+i+'">'+imagePath+imageHeader+'</div>');
        }
    }
    // ******** SPACE FIGHTERS *********//
    function spaceFighter(name, imgSource, hp, attack ){
            this.name = name;
            this.imgSource = imgSource;
            this.hp = hp;
            this.attack = attack;
    }
    // Create players
    var prometheus = new spaceFighter("Earth","prometheus.jpg",200,6);
    var orai = new spaceFighter("Orai","orai.jpg",200,6);
    var goauld = new spaceFighter("Goa'uld","goauld.jpeg",200,6);
    var asguard = new spaceFighter("Asguard","asguard.jpg",200,6);
    // Dump players into array
    //                 0        1       2       3
    var fighters = [prometheus, orai, goauld, asguard];

    // **********START MENUA*************//
    menuGenerate();
    // ********** CLICK EVENTS **********//

    // Initiate Game Background
    $("body").on("click", ".launch", function () {
        // launch the players
        startGame();
        $(".stageLabel").html("Choose Your Player");
        // OTHR MENU OPTIONS
    }).on("click", ".instruct", function () {
        // This will temporarily create a instruction div and a back button
        var instructMSG = ("Welcome to the HyperSpace! <br> Join the Fight for Intergalactic Freedom! <br><br> There's not much to it. You will have to beat three opponents! Each time you click the 'Fire!' button, you will get stronger so think strategically!")
        // This empties the menu
        $(".menu").empty();
        // This creates the instruction area
        var Instruct = $("<p>").addClass("rules-data text-white");
        Instruct.html(instructMSG)
        $(".menu").append(Instruct);
        // Create Button that initiates Menu again
        var menuBtn = $("<button>Back</button>").addClass("menu-btn back-btn text-white");
        $(".menu").append(menuBtn);
    }).on("click", ".bioLink", function () {
        // This will take you to the responsive portfolio page
    }).on("click", ".back-btn", function () {
        //construct menu from instruction page
        menuGenerate();
    });

    // Help the Player choose the order they would like to fight
    var action = 1;
    $("body").on("click",".img-mod", function () {
        if (action === 1){
            // set HP of attacker 
            $(".Attacker").append('<progress id="attackHealth" value="200" max="200"></progress>');
        
            $(".playerTitle").html("Player");
            $(".stageLabel").html("Choose Your First Oppenent");
            $(this).addClass("attacker-format");
            $(this).appendTo(".Attacker");
            action ++;
        }else if(action === 2){
            $(".Defender").append('<progress id="defendHealth" value="100" max="100"></progress>');
        
            $(".defenderTitle").html("Enemy");
            $(".stageLabel").html("Choose Your Second Oppenent");
            $(this).addClass("defender-format");
            $(this).appendTo(".Defender");
            action ++;
        }else if(action === 3){
            $(".stageLabel").html("Choose Your Third Oppenent");
             $(this).appendTo(".Waitlist");
             $(this).addClass("waitlist-1");
             action ++;
        }else if(action === 4){
            $(this).appendTo(".Waitlist");
            $(this).addClass("waitlist-2");
            action ++;
        }
        // Attack button generates once they have chosen
        if (action === 5){
            $(".stageLabel").html("Ready to Fire");
            $(".listPlayers").append('<i class="fa fa-ge attack-button" style="font-size:90px"></i>');
            action ++;
        }
    });

    $("body").on("click",".attack-button", function () {
        $(".stageLabel").html("Fire!");
        
    });



});