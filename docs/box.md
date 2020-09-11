<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Box</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    <span class="has-text-weight-semibold">Box</span> is a visual motif used to create groupings of content related to a same entity or subject as well as focus through depth.
</p>
<hr class="is-visible is-size-4"><br>

<div class="box is-well is-radiusless-b is-marginless is-large">
    <div class="box is-floating is-large">Boxed content about an entity or subject.</div>
</div>

    <div class="box is-floating">
        <!-- Boxed content.. -->
    </div>
<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Box depths</strong></h4>

You can alter or bring focus to a box by adding a `is-[type]` class.

<br><br>

<div class="box is-well is-large">

<div class="box">
    <div class="subtitle has-text-grey-dark is-6"><strong>Box</strong> &nbsp; ( default )</div>
</div>
<br>
<div class="box is-bordered has-text-grey is-medium">
    <div class="subtitle has-text-grey-dark is-6"><strong>Bordered</strong></div>
</div>
<br>
<div class="box is-well is-link has-text-grey is-medium">
    <div class="subtitle has-text-grey-dark is-6"><strong>Well</strong></div>
</div>
<br>
<div class="box is-white is-medium">
    <div class="subtitle has-text-grey-dark is-6"><strong>White</strong></div>
</div>
<br>
<div class="box is-raised is-medium">
    <div class="subtitle has-text-grey-dark is-6"><strong>Raised</strong></div>
</div>
<br>
<div class="box is-floating is-medium">
    <div class="subtitle has-text-grey-dark is-6"><strong>Floating</strong></div>
</div>
<br>
<div class="box is-popping is-medium">
    <div class="subtitle has-text-grey-dark is-6"><strong>Popping</strong></div>
</div>
</div>

<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Depth transition</strong></h4>

You can add an effect to <strong>change the depth on hover</strong> by using one of the following classes :

<ul class="list">
    <li><code>hover-to-box</code></li>
    <li><code>hover-to-bordered</code></li>
    <li><code>hover-to-well</code></li>
    <li><code>hover-to-white</code></li>
    <li><code>hover-to-raised</code></li>
    <li><code>hover-to-floating</code></li>
    <li><code>hover-to-popping</code></li>
</ul>

<div class="box is-large is-white is-radiusless-b is-marginless">
    <div class="box is-raised hover-to-floating">Box with depth transition effect ( hover me )</div>
    <hr>
    <div class="box is-paddingless is-raised">
        <div class="box is-marginless hover-to-bordered">Link Box use case</div>
    </div>
</div>

    <div class="box is-raised hover-to-popping">
        <!-- Box content -->
    </div>
    <div class="box is-floating is-paddingless">
        <div class="box hover-to-bordered is-marginless">
            <!-- Link content -->
        </div>
    </div>
<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Sizes</strong></h4>

You can adjust the padding by adding class `is-small`, `is-medium`, `is-large` or `is-larger` to the box.

<br>

<div class="box is-well is-radiusless-b is-marginless">
    <div class="level">
        <div class="level-item"><div class="box is-raised is-small is-size-6">Small</div></div>
        <div class="level-item"><div class="box is-raised ">Normal</div></div>
        <div class="level-item"><div class="box is-raised is-medium">Medium</div></div>
        <div class="level-item"><div class="box is-raised is-large">Large</div></div>
        <div class="level-item"><div class="box is-raised is-larger">Larger!</div></div>
    </div>
</div>

    <div class="box is-small">Small</div>
    <div class="box">Normal</div>
    <div class="box is-medium">Medium</div>
    <div class="box is-large">Large</div>
    <div class="box is-larger">Larger!</div>
<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Expandable box</strong></h4>

Use class `is-expandable` for boxes that can expand inline. Add the class `is-expanded` to expand it, the immidiate child element with class `expanded-content` will be then shown.

<br><br>

<div class="box is-well is-radiusless-b is-marginless ">
    <div class="box">
        <div id="ebox" class="box is-large has-background-black-ter is-floating is-expandable is-unselectable is-relative" onclick="toggleExpand('ebox')">
            <span class="title is-3 has-text-white is-spaced has-text-weight-bold">I'm expandable <span class="has-text-grey has-text-weight-normal">(click me)</span></span>
            <div class="expanded-content">
                <hr class="is-visible is-size-3 is-size-4-mobile has-background-primary-claim-gradient">
                <div class="subtitle has-text-white is-4 is-family-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. An vero, inquit, quisquam potest probare, quod perceptfum, quod.<br><br>Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri. Quis est enim, in quo sit cupiditas, quin recte cupidus dici possit? Quae contraria sunt his, malane? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia?</div>
                <hr class="is-size-5">
                <hr class="is-visible is-marginless has-background-primary-care-gradient">
            </div>
        </div>
    </div>
</div>

    <div class="box is-expandable is-unselectable">
        I'm expandable (click me)
        <div class="expanded-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            An vero, inquit, quisquam potest probare, quod perceptfum, quod.
            Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri.
        </div>
    </div>
