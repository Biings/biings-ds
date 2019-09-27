<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Box</h1>
<hr class="is-visible">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Box</span> is a visual motif used to create groupings of content related to a same entity or subject as well as focus through depth.
</p>

<hr class="is-visible"><br>

<div class="box is-well is-marginless">
    <div class="box">
        <div class="box is-floating">Boxed content about an entity or subject.</div>
    </div>
</div>

    <div class="box is-floating">
        <!-- Boxed content.. -->
    </div>
<hr class="is-large is-visible">

<h2 class="title is-4 is-family-sans-serif">Box depths</h2>

You can alter or bring focus to a box by adding a `is-[type]` class.<br><br>

<div class="box is-well is-large">

<div class="box">
    <div class="subtitle has-text-grey-dark is-6"><strong>Box</strong> &nbsp; ( default )</div>
</div>
<div class="box is-bordered">
    <div class="subtitle has-text-grey-dark is-6"><strong>Bordered</strong></div>
</div>
<div class="box is-well">
    <div class="subtitle has-text-grey-dark is-6"><strong>Well</strong></div>
</div>
<div class="box is-white">
    <div class="subtitle has-text-grey-dark is-6"><strong>White</strong></div>
</div>
<div class="box is-raised">
    <div class="subtitle has-text-grey-dark is-6"><strong>Raised</strong></div>
</div>
<div class="box is-floating">
    <div class="subtitle has-text-grey-dark is-6"><strong>Floating</strong></div>
</div>
<div class="box is-popping">
    <div class="subtitle has-text-grey-dark is-6"><strong>Popping</strong></div>
</div>
</div>

<hr class="is-large is-visible">

<h2 class="title is-4 is-family-sans-serif">Depth transition</h2>

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

<div class="box is-well is-marginless">
    <div class="box">
        <div class="box is-well hover-to-popping">Box with depth transition effect ( hover me )</div>
    </div>
</div>

    <div class="box is-well hover-to-popping">
            •••
    </div>
<hr class="is-large is-visible">

<h2 class="title is-4 is-family-sans-serif">Expandable box</h2>

Add class `is-expandable` to boxes that can expand inline.<br>Then add the class `is-expanded` to a box that has been expanded.

<br>

<div class="box is-well is-marginless ">
    <div class="box">
        <div id="ebox" class="box is-large is-white hover-to-popping is-expandable is-unselectable" onclick="toggleExpand('ebox')">
            <span class="title is-4 has-text-grey-darker">I'm expandable <span class="has-text-grey has-text-weight-normal">(click me)</span></span>
            <div class="expanded-content">
                <hr class="is-small">
                <div class="subtitle is-5 has-text-grey-darker">Lorem ipsum dolor sit amet, consectetur adipiscing elit. An vero, inquit, quisquam potest probare, quod perceptfum, quod.<br><br>Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri. Quis est enim, in quo sit cupiditas, quin recte cupidus dici possit? Quae contraria sunt his, malane? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia?</div>
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
<hr class="is-large is-visible">

<h2 class="title is-4 is-family-sans-serif">Link box</h2>

Add class `is-link` to make a box behave like a link.

<br>

<div class="box is-well is-large is-marginless">
    <div class="box has-background-primary-lighter is-link">I behave like a link!</div>
</div>

    <div class="box is-white is-link">
        I behave like a link!
    </div>
