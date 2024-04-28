document.addEventListener('DOMContentLoaded', function () {
    var pet_btn = document.getElementById('pet');
    var feed_btn = document.getElementById('treat');


    var hap_bar = document.getElementById('hap-bar');
    var hunger_bar = document.getElementById('hunger-bar');

    
    //check if hunger_bar style width exists, if it doesn't make it 100
    //var happiness = hap_bar.style.width;

    if (!hunger_bar.style.width) {
        hunger_bar.style.width = "0%";
    } 
    var hunger = Math.floor(hunger_bar.style.width.split("%")[0]);

    if (!hap_bar.style.width) {
        hap_bar.style.width = "0%";
    }

    var happiness = Math.floor(hap_bar.style.width.split("%")[0]);


    console.log("hello", hunger);
    console.log("hello", happiness);

    //var width_ratio = 

    pet_btn.addEventListener('click', function() {
        //console.log("clicked");
        happiness = Math.floor(hap_bar.style.width.split("%")[0]);
        if (!(happiness >= 100)) {
            console.log('in if');
            
            happiness += 10;
            hap_bar.style.width = `${happiness}%`

            // is this correct syntax???
        }
    });

    feed_btn.addEventListener('click', function() {
        hunger = Math.floor(hunger_bar.style.width.split('%')[0]);
        
        if (!(hunger >= 100)) {
            console.log('hello');
            
            hunger += 10;
            hunger_bar.style.width = `${hunger}%`
        }

    });

    function depleteHunger() {
        hunger = Math.floor(hunger_bar.style.width.split('%')[0]);
        
        if(hunger >= 0) {
            hunger -= 10;
            hunger_bar.style.width = `${hunger}%`;
        };
    };

    function depleteHappiness() {
        happiness = Math.floor(hap_bar.style.width.split('%')[0])
        
        if (happiness >0) {
            happiness -= 10;
            hap_bar.style.width = `${happiness}%`;
        };
    };

    // doesn't work????
    setInterval(depleteHunger(), 10);
    setInterval(depleteHappiness(),10);

    

});