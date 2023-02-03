$(document).ready(function(){
  //load first image into gallery
  $(".photogallery menu li:first-child img").addClass("activeImage");
  var src = $(".photogallery menu li:first-child img")[0].src;
  $(".photogallery .galleryimage")[0].src = src;
  var text = $(".photogallery menu li:first-child span").text();
  $(".photogallery .gallerydescription").text(text);
  

  $(".photogallery menu img").click(function(){
    $(".activeImage").removeClass("activeImage");
    $(this).addClass("activeImage");
    var imageSrc = $(this)[0].src;
    var description = $(this).next().text();
    $(".photogallery .galleryimage")[0]. src = imageSrc;
    $(".photogallery .gallerydescription").text(description);
    clearInterval(galleryInterval);
  });
  
  var galleryInterval = setInterval(nextImage,3000);
});



function nextImage(){
  
  var current = $(".activeImage");
  current.removeClass("activeImage");
  //console.log(current.parent().next().length);
  if(current.parent().next().length >= 1){
    current.parent().next().children().addClass("activeImage");
    var img = current.parent().next().children("img");
    var text = current.parent().next().children("span");
  }
  else{
    $(".photogallery menu li:first-child img").addClass("activeImage");
    var img = $(".photogallery menu li:first-child img");
    var text = $(".photogallery menu li:first-child span");
  }
  $(".photogallery .galleryimage")[0]. src = img[0].src;
  $(".photogallery .gallerydescription").text(text.text());
}