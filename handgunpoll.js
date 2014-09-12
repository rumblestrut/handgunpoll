/**
 * Selects the Can you tell which handgun is real images with the radio button
 */
  $( document ).ready( function() {
    // $("div#edit-choice-1-wrapper").click(function(){
    //   $("input#edit-choice-1").click();
    // });

    $('div[id^="edit-choice-"]:nth-child(1)').click(function(){
      $('div[id^="edit-choice-"]:nth-child(1) input').click();
    });
    $('div[id^="edit-choice-"]:nth-child(2)').click(function(){
      $('div[id^="edit-choice-"]:nth-child(2) input').click();
    });
    $('div[id^="edit-choice-"]:nth-child(3)').click(function(){
      $('div[id^="edit-choice-"]:nth-child(3) input').click();
    });
    $('div[id^="edit-choice-"]:nth-child(4)').click(function(){
      $('div[id^="edit-choice-"]:nth-child(4) input').click();
    });
    $('div[id^="edit-choice-"]:nth-child(5)').click(function(){
      $('div[id^="edit-choice-"]:nth-child(5) input').click();
    });
  });
