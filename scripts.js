$('.toggle-container').click(function(){
    console.log("click")
    $('body').toggleClass('dark');
    $(this).toggleClass('dark-mode-active')
  });

  console.log("jsloaded")