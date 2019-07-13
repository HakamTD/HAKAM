$(function(){
  new WOW().init();
  $('.sidenav').sidenav();
  $('.carousel').carousel();
  $('.dropdown-trigger').dropdown({
    closeOnClick: false
  });
  $('.tabs').tabs();
  $('.collapsible').collapsible();
  $('.fixed-action-btn').floatingActionButton({
    direction: 'bottom',
    hoverEnabled: false
  });
  $('.modal').modal();
  $('input#input_text, textarea#message').characterCounter();
  
  // --------------------------------- navbar on large screen after scrolling
  $(window).scroll(function() {
    if($(document).scrollTop() > 500){
      $('.navbar').css("display","none");
      $('.nav_after_scroll').css("display", "block");
    }
    else{
      $('.navbar').css("display","block");
      $('.nav_after_scroll').css("display", "none");
    }
  });
  
  
  
    // ------------------------------- order counter -------------------------------
    // This button will increment the value
    $('.plus').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($(this).parents("form").find("[type=text]").val());
      // If is not undefined
      if (!isNaN(currentVal)) {
          // Increment
          $(this).parents("form").find("[type=text]").val(currentVal + 1);
      } else {
          // Otherwise put a 0 there
          $(this).parents("form").find("[type=text]").val(0);
      }
  });
  // This button will decrement the value till 0
  $(".minus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($(this).parent("form").find("[type=text]").val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
          // Decrement one
          $(this).parents("form").find("[type=text]").val(currentVal - 1);
      } else {
          // Otherwise put a 0 there
          $(this).parents("form").find("[type=text]").val(0);
      }
  });

  // for language
  $('.language-sw').click(function() {
    if (window.location.pathname.search('/en/') == -1) {
      var location = window.location.pathname
      var newLoc = location.replace('/ar/', '/en/')
      window.location = newLoc
    } else {
      var location = window.location.pathname
      var newLoc = location.replace('/en/', '/ar/')
      window.location = newLoc    
    }
  })
      
      // ---------- nice scroll
      $('#test-swipe-2').niceScroll({
        background: "rgba(20,20,20,.3)"
      });
    })