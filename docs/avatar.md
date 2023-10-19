<h6 class="is-uppercase is-dimmed has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Avatar</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Avatar</span> is used to display a picture, typically next to a person's name.
</p>
<hr class="is-visible is-size-3"><br>

<h3 class="title is-family-primary">Default</h3>

Avatar's default background is transparent. Set it manually to achieve the below look.

<br><div class="box is-raised is-medium is-marginless is-radiusless-b">
    <div class="avatar"><div>JD</div></div><span class="subtitle has-text-dark is-5">John Doe</span>
</div>
<hr class="is-marginless is-visible">

    <div class="avatar">
        <div>JD</div>
    </div>
    <span>John Doe</span>
<br>

<hr class="is-size-1 is-visible">

<h3 class="title is-family-primary">Sizes</h3>

In addition to the default size, use classes `is-[tiny,mini,small,medium,large,huge]` to adjust the size of an avatar.
<hr class="is-small">
<div class="box is-raised py-6">
    <div class="level">
        <div class="level-item has-text-left"><div class="avatar is-tiny"><div class="has-background-green-lighter">T</div></div><span class="is-size-7">Tiny</span></div>
        <div class="level-item has-text-left"><div class="avatar is-mini"><div class="has-background-red-lighter">MI</div></div><span class="is-size-7">Mini</span></div>
        <div class="level-item has-text-left"><div class="avatar is-small"><div class="has-background-blue-lighter">SM</div></div><span class="is-size-7">Small</span></div>
        <div class="level-item"><div class="avatar is-medium"><div class="has-background-secondary-lighter">ME</div></div><span class="is-size-6">Medium</span></div>
        <div class="level-item"><div class="avatar is-large"><div class="has-background-primary-lighter">LA</div></div><span class="is-size-5">Large</span></div>
        <div class="level-item"><div class="avatar is-huge"><div>HU</div></div><span class="is-size-3">Huge</span></div>
    </div>
</div>

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Photo Avatar</h3>

Avatars can nest an image to act as a person's photo.

<hr class="is-small">

<div class="box is-raised is-medium is-marginless is-radiusless-b">
    <div class="avatar is-large"><img src="https://cdn.bollywoodmdb.com/resource/image1/5a83e7a99221e_aamir-khan-celebrates-valentine-s-day-by-listening-to-pehla-nasha.jpg"></div>
    <span class="subtitle is-4"><strong>Khan</strong>, Aamir</span>
</div>

    <div class="avatar">
        <img src="https://www.gravatar.com/avatar.png">
    </div>
<hr class="is-size-1 is-visible">

<h3 class="title is-family-primary">Status</h3>

Use the modifier syntax `.is-status-[color]` to add a color badge to an Avatar. Available colors are: <span class="has-text-purple">purple</span>, <span class="has-text-cyan">cyan</span>, <span class="has-text-blue">blue</span>, <span class="has-text-pink">pink</span>, <span class="has-text-red">red</span>, <span class="has-text-orange">orange</span>, <span class="has-text-yellow">yellow</span>, <span class="has-text-turquoise">turquoise</span>, <span class="has-text-green">green</span>, <span class="has-text-grey">grey</span>, <span class="has-text-dark">dark</span>, white, success and warning.

<hr class="is-small">

<div class="box is-raised is-large is-marginless is-backgroundless has-text-centered">
    <div class="avatar is-status-success is-large"><img src="https://cdn.bollywoodmdb.com/resource/image1/5a83e7a99221e_aamir-khan-celebrates-valentine-s-day-by-listening-to-pehla-nasha.jpg"></div>
    <span class="subtitle is-4"><strong>Aamir</strong> is online, using `is-status-success`</span>
    <hr class="is-visible is-soft is-size-2">
    <div class="avatar is-status-green is-large mr-5"><div>GR</div></div>
    &nbsp;
    <div class="avatar is-status-yellow is-large mr-5"><div>YE</div></div>
    &nbsp;
    <div class="avatar is-status-orange is-large"><div>OR</div></div>
    <hr>
    <div class="avatar is-status-red is-medium mr-5"><div>RE</div></div>
    &nbsp;
    <div class="avatar is-status-pink is-medium mr-5"><div>PI</div></div>
    &nbsp;
    <div class="avatar is-status-purple is-medium"><div>PU</div></div>
    <hr>
    <div class="avatar is-status-primary mr-5"><div>PR</div></div>
    &nbsp;
    <div class="avatar is-status-blue mr-5"><div>BL</div></div>
    &nbsp;
    <div class="avatar is-status-cyan"><div>CY</div></div>
    <hr>
    <div class="avatar is-status-warning is-small mr-4"><div>WA</div></div>
    &nbsp;
    <div class="avatar is-status-dark is-small mr-4"><div>DA</div></div>
    &nbsp;
    <div class="avatar is-status-grey is-small"><div>GR</div></div>
</div>
