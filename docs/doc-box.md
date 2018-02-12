<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold"> Layout</h6><h1 class="title is-1">Box</h1>
<hr class="is-small">
<p class="subtitle is-5 has-text-weight-semibold">
    <span class="has-text-primary has-text-weight-bold">Box</span> is a visual motif used to create groupings of content related to a same entity or subject as well as focus through depth.
</p>

<hr>

<div class="box is-well is-marginless">
    <div class="box is-ground">
        <div class="box is-floating">Boxed content about an entity or subject.</div>
    </div>
</div>

```
<div class="box is-floating hover-to-popping">
        <!-- Boxed content.. -->
</div>
```

<hr class="is-large">

<h2 class="title is-4 has-text-weight-normal">Box depths</h2>

You can alter or bring focus to a box by adding a `is-[type]` class.<br><br>

<div class="box is-well">
<div class="section">

<div class="box">
    <div class="subtitle has-text-grey-dark is-6">**Box** &nbsp;/&nbsp; base type</div>
</div>
<div class="box is-ground">
    <div class="subtitle has-text-grey-dark is-6">**Ground**</div>
</div>
<div class="box is-well">
    <div class="subtitle has-text-grey-dark is-6">**Well**</div>
</div>
<div class="box is-raised">
    <div class="subtitle has-text-grey-dark is-6">**Raised**</div>
</div>

<div class="box is-floating">
    <div class="subtitle has-text-grey-dark is-6">**Floating**</div>
</div>

<div class="box is-popping">
    <div class="subtitle has-text-grey-dark is-6">**Popping**</div>
</div>
</div>
</div>

<hr class="is-large">

<h2 class="title is-4 has-text-weight-normal">Depth transition</h2>

You can add an effect to <strong>change the depth on hover</strong> by using one of the following classes :

<ul class="list">
    <li>`hover-to-box`</li>
    <li>`hover-to-ground`</li>
    <li>`hover-to-well`</li>
    <li>`hover-to-raised`</li>
    <li>`hover-to-floating`</li>
    <li>`hover-to-popping`</li>
</ul>

<div class="box is-well is-marginless">
    <div class="box is-ground">
        <div class="box is-raised hover-to-popping">Box with depth transition effect ( hover me )</div>
    </div>
</div>
```
<div class="box is-floating hover-to-popping">
        •••
</div>
```