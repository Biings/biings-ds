<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Avatar</h1>
<hr class="is-visible is-size-3">
<p class="is-size-5 is-family-secondary">
    <span class="has-text-weight-semibold">Avatar</span> is used to display a picture, typically next to a person's name.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-well is-relaxed is-marginless">
    <div class="avatar"><div class="has-background-grey-light">JD</div></div><span class="subtitle is-5">John Doe</span>
</div>


    <div class="avatar">
        <div class="has-background-grey-light">JD</div>
    </div>
    <span>John Doe</span>
<br>

?> For flexibility purpose the background defaults to "transparent" and should be set manually.

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Sizes</h2>

In addition to the default size, use classes `is-small`, `is-medium`, `is-large` and `is-huge` to adjust the size of an avatar.
<hr class="is-small">
<div class="level">
    <div class="level-item has-text-left"><div class="avatar is-small"><div class="has-background-primary">S</div></div><span class="is-size-7">Small</span></div>
    <div class="level-item"><div class="avatar is-medium"><div class="has-background-primary">M</div></div><span class="is-size-6">Medium</span></div>
    <div class="level-item"><div class="avatar is-large"><div class="has-background-primary">L</div></div><span class="is-size-5">Large</span></div>
    <div class="level-item"><div class="avatar is-huge"><div class="has-background-primary">H</div></div><span class="is-size-3">Huge</span></div>
</div>

<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Photo Avatar</h2>

Avatars can nest an image to act as a person's photo.

<hr class="is-small">

<div class="box is-well is-relaxed is-marginless">
    <div class="avatar is-large"><img src="https://www.gravatar.com/avatar/1139aec0d65f8e3735d9a142e99ca804?size=100&d=blank"></div><span class="subtitle is-5"><strong>Redford, Robert</strong></span>
</div>

    <div class="avatar is-medium">
        <img src="https://www.gravatar.com/avatar/aamir.gif">
    </div>
    <span class="subtitle is-5">Redford, Robert</span>
<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Status</h2>

Use the modifier syntax `.is-status-[color]` to add a color badge to an Avatar. Available colors are: <span class="has-text-purple">purple</span>, <span class="has-text-cyan">cyan</span>, <span class="has-text-blue">blue</span>, <span class="has-text-pink">pink</span>, <span class="has-text-red">red</span>, <span class="has-text-orange">orange</span>, <span class="has-text-yellow">yellow</span>, <span class="has-text-turquoise">turquoise</span>, <span class="has-text-green">green</span>, <span class="has-text-grey">grey</span>, <span class="has-text-black">black</span> and white.

<hr class="is-small">

<div class="box is-large is-well is-marginless">
    <div class="avatar is-status-green is-medium"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    <span class="subtitle is-5"><strong>Aamir</strong> is online</span>
</div>

    <div class="avatar is-status-green">
        <!-- <div> or <image> -->
    <div>
