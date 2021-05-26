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
    <div class="avatar"><div class="has-background-primary-lighter">JD</div></div><span class="subtitle has-text-dark is-5">John Doe</span>
</div>
<hr class="is-marginless is-visible">

    <div class="avatar">
        <div class="has-background-grey-light">JD</div>
    </div>
    <span>John Doe</span>
<br>

<hr class="is-size-1 is-visible">

<h3 class="title is-family-primary">Sizes</h3>

In addition to the default size, use classes `is-[tiny,mini,small,medium,large,huge]` to adjust the size of an avatar.
<hr class="is-small">
<div class="box is-raised py-6">
    <div class="level">
        <div class="level-item has-text-left"><div class="avatar is-tiny"><div class="has-background-green-light">TY</div></div><span class="is-size-7">Tiny</span></div>
        <div class="level-item has-text-left"><div class="avatar is-mini"><div class="has-background-red-lighter">MI</div></div><span class="is-size-7">Mini</span></div>
        <div class="level-item has-text-left"><div class="avatar is-small"><div class="has-background-turquoise-lighter">SL</div></div><span class="is-size-7">Small</span></div>
        <div class="level-item"><div class="avatar is-medium"><div class="has-background-primary-lighter">ME</div></div><span class="is-size-6">Medium</span></div>
        <div class="level-item"><div class="avatar is-large"><div class="has-background-turquoise-lighter">LA</div></div><span class="is-size-5">Large</span></div>
        <div class="level-item"><div class="avatar is-huge"><div class="has-background-secondary-lighter">HU</div></div><span class="is-size-3">Huge</span></div>
    </div>
</div>

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Photo Avatar</h3>

Avatars can nest an image to act as a person's photo.

<hr class="is-small">

<div class="box is-raised is-medium is-marginless is-radiusless-b">
    <div class="avatar"><img src="https://www.gravatar.com/avatar/68a50e21ee0b66aafee1831d3c6f130c?size=200&d=blank"></div><span class="subtitle has-text-dark">Padukone, Deepika</span>
</div>

    <div class="avatar">
        <img src="https://www.gravatar.com/avatar/padukone.png">
    </div>
    <span class="subtitle is-5">Padukone, Deepika</span>
<hr class="is-size-1 is-visible">

<h3 class="title is-family-primary">Status</h3>

Use the modifier syntax `.is-status-[color]` to add a color badge to an Avatar. Available colors are: <span class="has-text-purple">purple</span>, <span class="has-text-cyan">cyan</span>, <span class="has-text-blue">blue</span>, <span class="has-text-pink">pink</span>, <span class="has-text-red">red</span>, <span class="has-text-orange">orange</span>, <span class="has-text-yellow">yellow</span>, <span class="has-text-turquoise">turquoise</span>, <span class="has-text-green">green</span>, <span class="has-text-grey">grey</span>, <span class="has-text-dark">dark</span> and white.

<hr class="is-small">

<div class="box is-raised is-large is-marginless is-radiusless-b">
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
