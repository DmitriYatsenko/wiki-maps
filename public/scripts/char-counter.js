const charCounter = () => {
  $(document).ready(function() {
  // counts the characters in the textarea
  $('textarea').keyup(function() {
    let text = $(this).val();
    console.log(this);
    let textLength = text.length;
    let textRemaining = 140 - textLength;
    $('.counter').text(textRemaining);
    if (textRemaining < 0){
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
  });
});
}
