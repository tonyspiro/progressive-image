# [dynamic-image](http://tonyspiro.com)
A JQuery plugin that dymanically adjusts the source of your images for different browser widths.  Just start with your three image sizes and it loads the images in order of size (small to large) when they are fully loaded into the page:

1. Src Version
2. Mobile Version
3. Tablet Version
4. Full Version

This creates a blurr to in focus effect which is a better alternative to longer loading times and loading down.  Useful if you want to serve large images and don't want the loading down effect that comes with them.

Plus, it will serve the correct image size to the user based on their browser size, thus eliminating unnessessarily large images and slow loading for mobile devices.

Dynamic Image dynamically serves images to the user based on their browser size.

Easy to use:
-------
``` html
<html>
<head>
</head>
<body>
<img class="dynamic-image" src="http://tonyspiro.com/wp-content/uploads/2014/02/gretch-500x500.jpg" img-mobile="http://tonyspiro.com/wp-content/uploads/2014/02/gretch-500x500.jpg" img-tablet="http://tonyspiro.com/wp-content/uploads/2014/02/gretch-1000x1000.jpg" img-full="http://tonyspiro.com/wp-content/uploads/2014/02/gretch.jpg" />
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
<script src='dynamic-image.js'></script>
<script>
$(function(){
  $(".dynamic-image").dynamicImage(); 
});
</script>
</body>
</html>
```
