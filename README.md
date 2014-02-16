# Red Carpet
##A jQuery plugin that lets you create touch enabled expanding carousels.

###Features:
* Responsive
* Touch Events
* Mouse Slide Events
* Fully Customizable
* Choose the number of items to be displayed
* Multiple Sliders
* CSS3 3d Transitions
* Custimizable controls
* JSON 
* Custom events
* Helpful callbacks

### 1.Getting Started
Include RedCarpet and it's themes

```html
<!-- Basic stylesheet -->
<link rel="stylesheet" href="redcarpet/redcarpet.css">
 
 <!-- Default Theme -->
<link rel="stylesheet" href="redcarpet/redcarpet.theme.css">
 
<!-- Include js plugin -->
<script src="redcarpet/redcarpet.js"></script>
```
### 2.Set up your HTML
Simply use this strucute. Repeat the "item" divs for your content. In this demo I used [Mustache](http://mustache.github.io/).
```html
<div class="red-carousel">

  <div class="item">
    <div class="imgbk">
      <div style="background-image:url(image.jpg)" id="img01"></div>
    </div>
    <div class="item-details" id="piece01">
      <div class="item-details-inner">
        <button type="button" class="closebtn">&times;</button>
        <p class="item-description">
          <h2>Cool Pic, huh?</h2>
          <span class="features-title">Description:</span> A photo of us on vacation.
        </p>
      </div>
    </div>
  </div>

</div>
```
### 3.Call the plugin
Now call the Owl initializer function and your carousel is ready.

```html
$(document).ready(function() {
  $("#red-demo").redCarousel({
    responsive: true,
    expand: true,
    expandWidth: 2, // number of slides to expand
    expandElement: ".imgbtn", // What element acts as a button to expand
    expandClose: ".closebtn", //an element to close the expand
  });
});
```

Based on the fantasic [OwlCarousel](https://github.com/OwlFonk/OwlCarousel)

License
------------
The MIT License (MIT)