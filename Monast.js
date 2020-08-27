 $(document).ready(function() {

     //Accordion for About Us page
     $("#accordion").accordion ({
         active: false,
         heightStyle: "content",
         collapsible: true
     }); //end accordion

     /*******************************************************************************************************/

     //blur banner image on Home page when scrolling
     $(window).scroll(function () {
         var scroll = $(window).scrollTop();
         $('.img-blur').css({
             filter: "blur(" + (scroll/80) + "px)"
         });
     }); //end scroll

 });//end ready
