/*html: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="annatrunk.js"></script>*/

$(document).ready(function() {

    console.log("page ready");

    
    $("body").mousemove(function(event) {
    	
        //console.log(event.originalEvent.pageX, event.originalEvent.pageY);
        
        var mouseX = event.originalEvent.pageX;  
    });
    
    $(window).scroll(function(event) {
    	
        //console.log("scrolling");
        
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        
        $(".circle").css("transform", "rotate(" + (scroll/2) + "deg)");
        
    });

});