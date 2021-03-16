<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Loader</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Loaders</span> are used when performing slow computations, notifying users that loading is underway.
</p>
<hr class="is-visible is-size-3">

<div class="message is-info">
    <strong>Loading an entire page?</strong><br>A <a href="#/skeleton" class="is-underlined">Skeleton</a> screen might be a better option.
</div>

<hr class="is-size-4">

<h2 class="title"><span class="is-size-smaller">Sizes</span></h2>

Loaders automatically adapt to text size.<br>Use text size modifier classes `is-size-[1-7]` if you want to apply a particular size to the loader.

<br>

<div class="box is-raised is-larger is-marginless is-radiusless-b">
    <div class="level mt-5 mb-6">
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

<h2 class="title"><span class="is-size-smaller">Inline</span></h2>

Add class `is-inline` to remove the auto-centering of the loader.

<br>

<div class="box is-raised is-medium is-relative has-text-grey is-italic is-marginless is-radiusless-b">
    <div class="columns is-vcentered is-centered">
        <div class="column is-4"><div class="loader is-inline"></div> Loading...</div>
        <div class="column is-4">
            <div class="loader is-inline is-size-7"></div><div class="loader is-inline is-size-7"></div><div class="loader is-inline is-size-7"></div>
        </div>
        <div class="column is-3">
            <div class="button is-rounded is-primary is-fullwidth"><div class="loader is-inline is-inverted is-size-7"></div><div class="loader is-inline is-inverted is-size-7"></div></div>
        </div>
    </div>
</div>

    <div class="loader is-inline"></div> Loading...
    <div class="loader is-inline"></div><div class="loader is-inline"></div><div class="loader is-inline"></div>
    <div class="button">
        <div class="loader is-inline is-size-7"></div>
        <div class="loader is-inline is-size-7"></div>
    </div>
<hr class="is-size-1 is-visible">

<h2 class="title"><span class="is-size-smaller">Colorful</span></h2>

Add class `is-primary` or `is-secondary` to give the loader a unique Biings look.

<br>

<div class="box is-raised is-large is-relative has-text-centered">
    <div class="loader is-primary is-inline is-size-3"></div>
    <div class="loader is-success is-inline is-size-3"></div>
    <div class="loader is-secondary is-inline is-size-3"></div>
</div>

<hr class="is-size-1 is-visible">

<h2 class="title"><span class="is-size-smaller">Inverted</span></h2>

Add class `is-inverted` when displayed <strong>on a dark background</strong>.

<hr class="is-small">

<div class="box has-background-black-ter is-large is-relative">
    <div class="loader is-inverted is-size-2"></div>
</div>

<hr class="is-size-1 is-visible">

<h2 class="title"><span class="is-size-smaller">Indeterminate</span></h2>

Add class `is-indeterminate` to express an long or an unknown loading duration.

<hr class="is-small">

<div class="box is-raised is-large is-relative">
    <div class="loader is-indeterminate is-size-3"></div>
</div>

<hr class="is-size-1 is-visible">

<h2 class="title"><span class="is-size-smaller">Progress Bar</span></h2>

A native progress bar can replace a loader.

<hr class="is-small">

<div class="box is-raised is-large is-marginless is-radiusless-b">
    <progress class="progress is-primary" value="30" max="100">25%</progress>
    <progress class="progress is-info is-small" value="45" max="100">30%</progress>
    <progress class="progress is-dark is-thin" value="70" max="100">60%</progress>
    <progress class="progress is-thin" max="100">25%</progress>
    <progress class="progress is-warning is-small" max="100">25%</progress>
    <progress class="progress is-primary" max="100">25%</progress>
    <progress class="progress is-success is-medium" max="100">25%</progress>
    <progress class="progress is-info is-large" max="100">25%</progress>
</div>

    <progress class="progress is-dark is-thin" max="100">25%</progress>
    <progress class="progress is-success is-small" value="30" max="100">30%</progress>
    <progress class="progress is-primary is-large" value="60" max="100">60%</progress>
<br>
