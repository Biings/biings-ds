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

<h2 class="title is-4 has-text-weight-semibold">Sizes</h2>
Use classes `is-small`, `is-large` and `is-huge` to change the size of an avatar.
<hr>
<div class="box">
    <div class="columns is-gapless">
        <div class="column is-3"><div class="avatar is-small"><div>S</div></div><span class="subtitle is-6">Small</span></div>
        <div class="column"><div class="avatar is-large"><div>L</div></div><span class="subtitle is-5">Large</span></div>
        <div class="column"><div class="avatar is-huge"><div>H</div></div><span class="subtitle is-4">Huge</span></div>
    </div>
</div>

<hr class="is-visible">

<h2 class="title is-4 has-text-weight-semibold">Photo Avatar</h2>
Avatars can nest an image to act as the person's photo.<br><br>

<div class="box is-well is-relaxed is-marginless">
        <div class="avatar is-large"><img src="https://www.gravatar.com/avatar/7c8b112654185af6614a3df144135b0d?size=100&d=blank"></div><span class="subtitle is-5">Aamir Khan</span>
</div>

```
<div class="avatar is-large">
    <img src="https://www.gravatar.com/avatar/aamir.gif">
</div>
<span class="subtitle is-5">Aamir Khan</span>
```
