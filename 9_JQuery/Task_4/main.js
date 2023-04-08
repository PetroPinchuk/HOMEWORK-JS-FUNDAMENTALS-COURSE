$(document).ready(function() {
    console.log('%c ---------------Task 4---------------', 'background-color: yellow; font-weight: bold; color:red');
    
    let checkboxes = $('input[type="checkbox"]');

    checkboxes.change(function() {
        let checked_boxes = $('input[type="checkbox"]:checked');

        if (checked_boxes.length >= 3) {
            checkboxes.attr('disabled', true);
        }
    });
      
});