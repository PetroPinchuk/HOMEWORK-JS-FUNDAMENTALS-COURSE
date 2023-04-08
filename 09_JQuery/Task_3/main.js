$(document).ready(function() {
    console.log('%c ---------------Task 3---------------', 'background-color: yellow; font-weight: bold; color:red');
    
    $('h3').each(function() {
        let currentDiv = $(this).next('div');
        $(this).before(currentDiv);
      });
      
});