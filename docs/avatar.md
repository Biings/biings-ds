<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold">Components</h6><h1 class="title is-1 has-text-weight-bold">Avatar</h1>
<p class="subtitle is-5">
    <span class="has-text-weight-semibold">Avatar</span> is used to display a picture, typically next to a person's name.
</p>

<hr class="is-large is-visible">

<div class="box is-well is-relaxed is-marginless">
    <div class="avatar"><div>JD</div></div><span class="subtitle is-5">John Doe</span>
</div>

```
<div class="avatar">
    <div>JD</div>
</div>
<span>John Doe</span>
```

<hr class="is-large is-visible">

<h2 class="title is-4">Sizes</h2>

Use classes `is-small`, `is-large` and `is-huge` to change the size of an avatar.
<hr class="is-small">
<div class="level">
    <div class="level-item has-text-left"><div class="avatar is-small"><div>S</div></div><span class="is-size-7">Small</span></div>
    <div class="level-item"><div class="avatar"><div>D</div></div><span class="is-size-6 has-text-grey">Default</span></div>
    <div class="level-item"><div class="avatar is-large"><div>L</div></div><span class="is-size-5">Large</span></div>
    <div class="level-item"><div class="avatar is-huge"><div>H</div></div><span class="is-size-4">Huge</span></div>
</div>

<hr class="is-visible is-large">

<h2 class="title is-4">Photo Avatar</h2>

Avatars can nest an image to act as a person's photo.
<hr class="is-small">
<div class="box is-well is-relaxed is-marginless">
    <div class="avatar"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?size=100&d=blank"></div><span class="subtitle is-5">**Aamir Khan**</span>
</div>


```
<div class="avatar is-large">
    <img src="https://www.gravatar.com/avatar/aamir.gif">
</div>
<span class="subtitle is-5">Aamir Khan</span>
```

<hr class="is-large is-visible">

<h2 class="title is-4">Status</h2>

Use the modifier syntax `.is-status-[color]` to add a color badge to an Avatar.
<hr class="is-small">
<div class="box is-large is-well is-marginless">
    <div class="avatar is-status-green"><img src="https://www.gravatar.com/avatar/ded2d271be31a09049209089b50cb882?s=200&d=blank&r=g"></div>
    <span class="subtitle is-5">**Tom** is online</span>
</div>

    <div class="avatar is-status-green">
        <!-- <div> or <image> -->
    <div>

<br>

?> **Available colors are:**<br><span class="has-text-purple">purple</span>, <span class="has-text-cyan">cyan</span>, <span class="has-text-blue">blue</span>, <span class="has-text-pink">pink</span>, <span class="has-text-red">red</span>, <span class="has-text-orange">orange</span>, <span class="has-text-yellow">yellow</span>, <span class="has-text-turquoise">turquoise</span>, <span class="has-text-green">green</span>, <span class="has-text-grey">grey</span>, <span class="has-text-black">black</span> and <span class="has-text-white has-background-cyan-dark">white</span>.
