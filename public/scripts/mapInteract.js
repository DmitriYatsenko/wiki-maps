const shadowInteract = function() {
  $(document).ready(function() {
    $('.map').hover(function() {
      $(this).css('box-shadow', '0.2em 0.2em 5px');

    }, function() {
      $(this).css('box-shadow', 'none');

    });
  })
}

shadowInteract();
