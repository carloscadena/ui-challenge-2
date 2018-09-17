'use strict';

$('.cb-div').on('click', function() {
  $(this).toggleClass('cb-div checkbox-checked')
})

$('button').on('click', function() {
  $(this).toggleClass('button-dark')
})

$('.radio-button').on('click', function() {
  if($(this).hasClass('radio-unclicked')){
    $('.radio-button').toggleClass('radio-1 radio-clicked radio-2 radio-unclicked')
  }
})