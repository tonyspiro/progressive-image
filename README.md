# [Dynamic Image](http://tonyspiro.com)
View a demo <a target="_blank" href="http://dev.tonyspiro.com/dynamic-image/">here</a>.

Dynamic Image is a JQuery plugin that dynamically adjusts the source of images for different browser widths and progressively adds them into the page.  Just start with three image sizes and it loads the images in order of size (small to large) when they are fully loaded into the page:

1. Src Version
2. Mobile Version
3. Tablet Version
4. Full Version

This creates a "blurr" to "in focus" effect which is a better alternative than longer loading times and visually loading down a large image.

Plus, it will serve the correct image size to the user based on their browser size, thus eliminating unnecessarily large images and slow loading for mobile devices.

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
