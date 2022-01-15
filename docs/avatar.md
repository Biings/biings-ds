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
        <div class="level-item has-text-left"><div class="avatar is-tiny"><div class="has-background-green-lighter">TY</div></div><span class="is-size-7">Tiny</span></div>
        <div class="level-item has-text-left"><div class="avatar is-mini"><div class="has-background-red-lighter">MI</div></div><span class="is-size-7">Mini</span></div>
        <div class="level-item has-text-left"><div class="avatar is-small"><div class="has-background-cyan-lighter">SL</div></div><span class="is-size-7">Small</span></div>
        <div class="level-item"><div class="avatar is-medium"><div class="has-background-secondary-lighter">ME</div></div><span class="is-size-6">Medium</span></div>
        <div class="level-item"><div class="avatar is-large"><div class="has-background-primary-lighter">LA</div></div><span class="is-size-5">Large</span></div>
        <div class="level-item"><div class="avatar is-huge"><div class="has-background-blue-lighter">HU</div></div><span class="is-size-3">Huge</span></div>
    </div>
</div>

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Photo Avatar</h3>

Avatars can nest an image to act as a person's photo.

<hr class="is-small">

<div class="box is-raised is-medium is-marginless is-radiusless-b">
    <div class="avatar"><img src="https://www.gravatar.com/avatar/68a50e21ee0b66aafee1831d3c6f130c?size=200&d=blank"></div>
    <span class="subtitle has-text-dark">Padukone, D.</span>
</div>

    <div class="avatar">
        <img src="https://www.gravatar.com/avatar.png">
    </div>
<hr class="is-size-1 is-visible">

<h3 class="title is-family-primary">Status</h3>

Use the modifier syntax `.is-status-[color]` to add a color badge to an Avatar. Available colors are: <span class="has-text-purple">purple</span>, <span class="has-text-cyan">cyan</span>, <span class="has-text-blue">blue</span>, <span class="has-text-pink">pink</span>, <span class="has-text-red">red</span>, <span class="has-text-orange">orange</span>, <span class="has-text-yellow">yellow</span>, <span class="has-text-turquoise">turquoise</span>, <span class="has-text-green">green</span>, <span class="has-text-grey">grey</span>, <span class="has-text-dark">dark</span> and white.

<hr class="is-small">

<div class="box is-raised is-large is-marginless is-radiusless-b">
    <div class="avatar is-status-turquoise is-huge"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></div>
    <span class="subtitle is-4"><strong>Aamir</strong> is online.</span>
    <hr>
    <div class="avatar is-status-green"><div class="has-background-light">GR</div></div>
    &nbsp;
    <div class="avatar is-status-yellow"><div class="has-background-light">YE</div></div>
    &nbsp;
    <div class="avatar is-status-orange"><div class="has-background-light">OR</div></div>
    &nbsp;
    <div class="avatar is-status-red"><div class="has-background-light">RE</div></div>
    &nbsp;
    <div class="avatar is-status-pink"><div class="has-background-light">PI</div></div>
    &nbsp;
    <div class="avatar is-status-purple"><div class="has-background-light">PU</div></div>
    &nbsp;
    <div class="avatar is-status-primary"><div class="has-background-light">PR</div></div>
    &nbsp;
    <div class="avatar is-status-blue"><div class="has-background-light">BL</div></div>
    &nbsp;
    <div class="avatar is-status-cyan"><div class="has-background-light">CY</div></div>
    &nbsp;
    <div class="avatar is-status-dark"><div class="has-background-light">DA</div></div>
    &nbsp;
    <div class="avatar is-status-grey"><div class="has-background-light">GR</div></div>
</div>

<hr class="is-size-1 is-visible">

<h3 class="title is-family-primary">Tilted</h3>

Avatars can be tilted the same way the Biings logo is. Just add class `is-tilted` and make sure to wrap initials in an extra `<div>` or images in a `<picture>` tag.

<hr class="is-small">

<div class="box is-raised is-large is-marginless is-radiusless-b">
    <div class="level">
        <div class="level-item"><div class="avatar is-tiny is-tilted"><div class="has-background-grey-lighter"><div>TT</div></div></div><span class="is-size-7">Tiny Tilted</span></div>
        <div class="level-item"><div class="avatar is-tilted"><div class="has-background-primary-lighter"><div>DT</div></div></div><span>Default Tilted</span></div>
        <div class="level-item"><div class="avatar is-status-grey is-large is-tilted"><picture><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?s=200&d=blank&r=g"></picture></div><span class="is-size-4">Large Tilted Picture</span></div>
    </div>
</div>

    <div class="avatar is-tilted">
        <div class="has-background-primary">
            <div>DT</div>
        </div>
    </div>

    <div class="avatar is-tilted">
        <picture>
            <img src="...">
        </picture>
    </div>
