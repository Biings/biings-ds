<h6 class="is-uppercase has-text-grey has-text-weight-medium">Component</h6><h1 class="title is-0 is-family-secondary is-size-1-mobile">Box</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-4 is-size-5-mobile is-family-secondary">
    <span class="has-text-weight-semibold">Box</span> is a visual motif used to create groupings of content related to a same entity or subject as well as focus through depth.
</p>
<hr class="is-visible is-size-2"><br>

<div class="box has-background-white-bis is-marginless is-large">
    <div class="box is-floating is-large">Boxed content about an entity or subject.</div>
</div>

    <div class="box is-floating">
        <!-- Boxed content.. -->
    </div>
<hr class="is-size-1 is-visible">

<h2 class="title is-3"><strong>Box depths</strong></h2>

You can alter or bring focus to a box by adding a `is-[type]` class.<br><br>

<div class="box has-background-white-bis is-large">

<div class="box">
    <div class="subtitle has-text-grey-dark is-6"><strong>Box</strong> &nbsp; ( default )</div>
</div>
<br>
<div class="box is-bordered has-text-grey is-medium">
    <div class="subtitle has-text-grey-dark is-6"><strong>Bordered</strong></div>
</div>
<br>
<div class="box is-well has-text-grey is-medium">
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

<h2 class="title is-3"><strong>Depth transition</strong></h2>

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

<div class="box has-background-white-bis is-marginless">
    <div class="box">
        <div class="box is-floating hover-to-popping">Box with depth transition effect ( hover me )</div>
    </div>
</div>

    <div class="box is-well hover-to-popping">
            •••
    </div>
<hr class="is-size-1 is-visible">

<h2 class="title is-3"><strong>Sizes</strong></h2>

You can adjust the padding by adding class `is-small`, `is-medium`, `is-large` or `is-larger` to the box.

<br>

<div class="box has-background-white-bis is-marginless">
    <div class="level">
        <div class="level-item"><div class="box is-raised is-small">Small</div></div>
        <div class="level-item"><div class="box is-raised has-text-grey">Normal</div></div>
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

<h2 class="title is-3"><strong>Expandable box</strong></h2>

Add class `is-expandable` to boxes that can expand inline.<br>Then add the class `is-expanded` to a box that has been expanded.

<br>

<div class="box has-background-white-bis is-marginless ">
    <div class="box">
        <div id="ebox" class="box is-large is-floating is-expandable is-unselectable" onclick="toggleExpand('ebox')">
            <span class="title is-4 has-text-grey-darker">I'm expandable <span class="has-text-grey has-text-weight-normal">(click me)</span></span>
            <div class="expanded-content">
                <hr class="is-small">
                <div class="subtitle is-5 is-family-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. An vero, inquit, quisquam potest probare, quod perceptfum, quod.<br><br>Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri. Quis est enim, in quo sit cupiditas, quin recte cupidus dici possit? Quae contraria sunt his, malane? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia?</div>
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
