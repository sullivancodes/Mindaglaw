function renderGrid(){
    
     $(".menu-col").click(function() {
        $(".mobile-nav").animate({
            left: "0"
        })
    })
    $(".clear-icon").click(function() {
        $(".mobile-nav").animate({
            left: "-250px"
        })
    })
	var blocks = document.getElementById("grid_container").children;
	var pad = 20, cols = 3, newleft, newtop;
    
    
    const mq1 = window.matchMedia( "(min-width: 939px)" );
    const mq2 = window.matchMedia( "(max-width: 938px)" );
    const mq3 = window.matchMedia( "(max-width: 414px)" );
    
    if(mq3.matches){
        cols = 1;
    }
    
	for(var i = 1; i < blocks.length; i++){
		if (i % cols == 0) {
			newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
		    blocks[i].style.top = newtop+"px";
		} else {
			if(blocks[i-cols]){
				newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
				blocks[i].style.top = newtop+"px";
			}
			newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
			blocks[i].style.left = newleft+"px";	
		}
    }
    
    
}
window.addEventListener("load", renderGrid, false);
window.addEventListener("resize", renderGrid, false);