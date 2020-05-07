<h6 class="is-uppercase has-text-grey">Component</h6><h1 class="title is-0 is-family-secondary is-size-1-mobile">Loader</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-4 is-family-secondary">
    <span class="has-text-weight-semibold">Loaders</span> are used when performing slow computations, notifying users that loading is underway.

?> For entire page loading, a <a href="#/skeleton" class="is-underlined">Skeleton</a> screen is probably a better option.
</p>
<hr class="is-visible is-size-3">

<h2 class="title is-3 is-family-sans-serif">Sizes</h2>

Loaders automatically adapt to text size.<br>Use text size modifier classes `is-size-[1-8]` if you want to apply a particular size to the loader.

<br>

<div class="box has-background-white-bis is-larger is-marginless">
    <div class="level">
        <div class="level-item is-relative"><div class="loader"></div></div>
        <div class="level-item is-relative"><div class="loader is-size-3"></div></div>
        <div class="level-item is-relative"><div class="loader is-size-1"></div></div>
    </div>
</div>
    
    <div class="loader">
    <div class="loader is-size-4">
    <div class="loader is-size-1">
!> Loaders will center themselves to their closest parent having `position: relative;`. Use modifier `is-relative` on the
element you wish the loader to center itself to.

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Inline</h2>

Add class `is-inline` to remove the auto-centering of the loader.

<br>

<div class="box has-background-white-bis is-medium is-relative has-text-grey is-italic is-marginless">
    <div class="loader is-inline"></div> Loading...
</div>

    <div class="loader is-inline"></div> Loading...
<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Colorful</h2>

Add class `is-colorful` to give the loader a unique Biings look.

<br>

<div class="box has-background-white-bis is-large is-relative">
    <div class="loader is-colorful is-size-2"></div>
</div>

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Inverted</h2>

Add class `is-inverted` when displayed <strong>on a dark background</strong>.

<hr class="is-small">

<div class="box has-background-black-ter is-large is-relative">
    <div class="loader is-inverted is-size-2"></div>
</div>

is-indeterminate

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Indeterminate</h2>

Add class `is-indeterminate` to express an long or an unknown loading duration.

<hr class="is-small">

<div class="box has-background-white-bis is-large is-relative">
    <div class="loader is-indeterminate is-size-3"></div>
</div>

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Progress Bar</h2>

A native progress bar can replace a loader.

<hr class="is-small">

<div class="box has-background-white-bis is-large is-marginless">
    <progress class="progress is-dark is-thin" max="100">25%</progress>
    <progress class="progress is-success is-small" value="30" max="100">30%</progress>
    <progress class="progress is-primary is-large" value="60" max="100">60%</progress>
</div>

    <progress class="progress is-dark is-thin" max="100">25%</progress>
    <progress class="progress is-success is-small" value="30" max="100">30%</progress>
    <progress class="progress is-primary is-large" value="60" max="100">60%</progress>
<br>
