Progressive Image
=============
Progressive Image is a JQuery plugin that progressively adds larger images based on the current browser width.  It starts from mobile and progressively builds to tablet then to full size.  

If viewing from a mobile device, Progressive Image will load only the mobile version.  If viewing from a tablet the mobile version is loaded first and then the tablet version.  If viewing desktop, the mobile version is loaded then tablet and finally the full version.

This creates a "blur" to "in focus" effect which is a better alternative than longer loading times and visually loading down a large image.

This serves the correct image size to the user based on their browser size, which allows for faster page load.

Easy to use:
-------
```html
<!DOCTYPE html>
<html>
  <head>
  <style>
  body{
    margin: 0;
  }
  img{
    vertical-align: top;
  }
  </style>
  </head>
  <body>
  <img width="100%" class="progressive-image" src="images/mobile/1.jpg" img-mobile="images/mobile/1.jpg" img-tablet="images/tablet/1.jpg" img-full="images/full/1.jpg" />

  <img width="100%" class="progressive-image" src="images/mobile/2.jpg" img-mobile="images/mobile/2.jpg" img-tablet="images/tablet/2.jpg" img-full="images/full/2.jpg" />

  <img width="100%" class="progressive-image" src="images/mobile/3.jpg" img-mobile="images/mobile/3.jpg" img-tablet="images/tablet/3.jpg" img-full="images/full/3.jpg" />
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="progressive-image.js"></script>
  <script>
    $(function(){
      $('.progressive-image').progressiveImage(); 
    });
    $(window).on('resize', function(){
      $('.progressive-image').progressiveImage(); 
    });
  </script>
  </body>
</html>
```
