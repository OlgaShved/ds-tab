$('#tabs').on('click', '.title', function() {
  $('.title').removeClass('active');
  $('.content').removeClass('active');
  $(this).addClass('active');
  var tabId = $(this).attr('href');
  $(tabId).addClass('active');
});
