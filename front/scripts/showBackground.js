const mostrar = $('.containerCards').on('mouseleave', '.card', function() {
  
    $('body').css('background-image', 'none');
    $('article').css('opacity', 1); 
  
  });

  module.exports = mostrar;