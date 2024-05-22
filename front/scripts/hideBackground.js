
const ocultar = $('.containerCards').on('mouseenter', '.card', function() {
    
    const imageUrl = $(this).find('img').attr('src');
    $('body').css('background-image', `url(${imageUrl})`);
    $('article').css('opacity', 0); 

  });
  

  

module.exports = ocultar;

