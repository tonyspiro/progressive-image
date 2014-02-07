# [dynamic-image](http://tonyspiro.com)
A JQuery plugin that dymanically adjusts the source of your images (small to large) for different browser widths.

Easy to use:
-------
``` html
<html>
<head>
</head>
<body>
<img class="my-image" src="http://tonyspiro.com/wp-content/uploads/2014/02/gretch-500x500.jpg" img-mobile="http://tonyspiro.com/wp-content/uploads/2014/02/gretch-500x500.jpg" img-tablet="http://tonyspiro.com/wp-content/uploads/2014/02/gretch-1000x1000.jpg" img-full="http://tonyspiro.com/wp-content/uploads/2014/02/gretch.jpg" />
<script src='jquery.js'></script>
<script src='dynamic-image.js'></script>
<script>
$(function(){
  $(".my-image").dynamicImage(); 
});
</script>
</body>
</html>
```
