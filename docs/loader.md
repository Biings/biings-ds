<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Loader</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Loaders</span> are used when performing slow computations, notifying users that loading is underway.

?> For page loading, a <a href="#/skeleton">Skeleton</a> screen is probably a better option.
</p>
<hr class="is-visible is-size-3">

<h2 class="title is-3 is-family-sans-serif">Sizes</h2>

Loaders come in 3 different sizes: `is-small`, `is-large` and the default size.

<br>

<div class="box is-well is-large is-marginless">
    &nbsp;
    <div class="level">
        <div class="level-item is-relative"><div class="loader is-small"></div></div>
        <div class="level-item is-relative"><div class="loader"></div></div>
        <div class="level-item is-relative"><div class="loader is-large"></div></div>
    </div>
    &nbsp;
</div>
    
    <div class="loader is-small">
    <div class="loader">
    <div class="loader is-large">
<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Centered</h2>

Add class `is-centered` when you want to display the loader at the center of its containing element.

<br>

<div class="box is-well is-large is-relative">
    &nbsp;<br><br>&nbsp;<div class="loader is-centered"></div>&nbsp;<br><br>&nbsp;
</div>

?> The loader will center itself to the closest parent having `position: relative;`. You can use `is-relative` on the
parent element you wish the loader to center itself against.

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Colorful</h2>

Add class `is-colorful` to give the loader a unique Biings look.

<br>

<div class="box is-well is-large is-relative">
    &nbsp;<div class="loader is-colorful is-centered"></div>&nbsp;
</div>

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Inverted</h2>

Add class `is-inverted` when displayed <strong>on a dark background</strong>.

<hr class="is-small">

<div class="box has-background-black-ter is-large is-relative">
    &nbsp;<div class="loader is-inverted is-centered"></div>&nbsp;
</div>
