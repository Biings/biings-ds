<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Avatar</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    <span class="has-text-weight-semibold">Avatar</span> is used to display a picture, typically next to a person's name.
</p>
<hr class="is-visible is-size-4"><br>

<h4 class="title is-family-primary"><strong>Default</strong></h4>

Avatar's default background is transparent. Set it manually to achieve the below look.

<br><div class="box is-well is-medium is-marginless is-radiusless-b">
    <div class="avatar"><div class="has-background-grey-light">JD</div></div><span class="subtitle is-5">John Doe</span>
</div>
<hr class="is-thin is-visible">

    <div class="avatar">
        <div class="has-background-grey-light">JD</div>
    </div>
    <span>John Doe</span>
<br>

?> 

<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Sizes</strong></h4>

In addition to the default size, use classes `is-small`, `is-medium`, `is-large` and `is-huge` to adjust the size of an avatar.
<hr class="is-small">
<div class="box is-well is-large">
    <div class="level">
        <div class="level-item has-text-left"><div class="avatar is-small"><div class="has-background-primary-light">S</div></div><span class="is-size-7">Small</span></div>
        <div class="level-item"><div class="avatar is-medium"><div class="has-background-primary-light">M</div></div><span class="is-size-6">Medium</span></div>
        <div class="level-item"><div class="avatar is-large"><div class="has-background-primary-light">L</div></div><span class="is-size-5">Large</span></div>
        <div class="level-item"><div class="avatar is-huge"><div class="has-background-primary-light">H</div></div><span class="is-size-3">Huge</span></div>
    </div>
</div>

<hr class="is-visible is-size-1">

<h4 class="title is-family-primary"><strong>Photo Avatar</strong></h4>

Avatars can nest an image to act as a person's photo.

<hr class="is-small">

<div class="box is-well is-medium is-marginless is-radiusless-b">
    <div class="avatar"><img src="https://www.gravatar.com/avatar/68a50e21ee0b66aafee1831d3c6f130c?size=200&d=blank"></div><span class="subtitle">Padukone, Deepika</span>
</div>

    <div class="avatar">
        <img src="https://www.gravatar.com/avatar/padukone.png">
    </div>
    <span class="subtitle is-5">Padukone, Deepika</span>
<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Status</strong></h4>

Use the modifier syntax `.is-status-[color]` to add a color badge to an Avatar. Available colors are: <span class="has-text-purple">purple</span>, <span class="has-text-cyan">cyan</span>, <span class="has-text-blue">blue</span>, <span class="has-text-pink">pink</span>, <span class="has-text-red">red</span>, <span class="has-text-orange">orange</span>, <span class="has-text-yellow">yellow</span>, <span class="has-text-turquoise">turquoise</span>, <span class="has-text-green">green</span>, <span class="has-text-grey">grey</span>, <span class="has-text-dark">dark</span> and white.

<hr class="is-small">

<div class="box is-well is-large is-marginless is-radiusless-b">
    <div class="avatar is-status-turquoise is-huge"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    <span class="subtitle is-4 has-text-turquoise-dark"><strong>Aamir</strong> is online, or..</span>
    <hr>
    <div class="avatar is-medium is-status-green"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-yellow"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-orange"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-red"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-pink"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-purple"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-primary"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-blue"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-cyan"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-dark"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    &nbsp;
    <div class="avatar is-medium is-status-grey"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
</div>

    <div class="avatar is-status-turquoise">
        <!-- <div> or <image> -->
    <div>
    // etc..
