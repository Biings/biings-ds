<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Foundation</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Typography</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    Use <strong>typography</strong> to create clear hierarchies to guide users through the product and experience. It is the core structure of any well designed interface.
</p>
<hr class="is-visible is-size-3"><br>

<h4 class="title is-family-primary"><strong>Font family</strong></h4>

<ul class="list">
    <li>For maximum legibility Biings DS uses <span class="is-family-primary has-text-weight-medium">Averta</span> as its primary font family (with a purchased licence).</li>
    <li>For important headings use <span class="is-family-secondary is-size-5">Crimson Pro</span> with modifier <code>is-family-secondary</code></li>
    <li>When a Monospace font is required use <span class="is-family-monospace">Roboto Mono</span> with modifier <code>is-family-monospace</code></li>
    <li>For hand-drawn text use <span class="is-family-hand">Caveat</span> with modifier <code>is-family-hand</code></li>
</ul>

?> Use class `is-italic` for italic variations – only available for the Primary family.

<hr class="is-size-1 is-visible">
<h4 class="title is-family-primary"><strong>Scales</strong></h4>

All texts can be sized ranging from 1 (largest) to 6 (smallest). Headers should use sizes 1, 2 or 3 ; texts should use sizes 4, 5 or 6. An extra <u>7th size</u> can be used in special components.

<br>

?> Headers tags `h1` to `h6` with class `title` will be sized automatically.

<hr>

<div class="box is-well is-larger">
    <h1 class="title is-1 is-family-secondary">Header 1</h1><div class="subtitle has-text-grey">Hero title size</div>
    <hr>
    <h2 class="title is-2 is-family-secondary">Header 2</h2><div class="subtitle is-5 has-text-grey">Larger title size</div>
    <hr>
    <h3 class="title is-3 is-family-secondary">Header 3</h3><div class="subtitle is-6 has-text-grey">Default title size</div>
    <hr>
    <h4 class="title is-4 is-family-secondary">Header 4</h4><div class="subtitle is-6 has-text-grey">Default subtitle size</div>
    <hr>
    <h5 class="title is-5">Header 5</h5><div class="subtitle is-size-7 has-text-grey">Default body text size</div>
    <hr>
    <h6 class="title is-6">Header 6</h6><div class="subtitle is-size-7 has-text-grey">Smaller body text size</div>
</div>

<hr class="is-size-1 is-visible">
<h4 class="title is-family-primary"><strong>Font weights</strong></h4>

Use font weights to emphasize or differentiate content hierarchy.  
<i>Example:</i> `has-text-weight-semibold`

<ul class="list is-size-5">
    <li><span class="has-text-weight-light">300 — Light / <span class="is-family-secondary is-size-5">Light Serif</span></span></li>
    <li><span class="has-text-weight-normal">400 — Normal / <span class="is-family-secondary is-size-5">Normal Serif</span></span></li>
    <li><span class="has-text-weight-medium">500 — Medium / <span class="is-family-secondary is-size-5">Medium Serif</span></span></li>
    <li><span class="has-text-weight-semibold">600 — Semibold / <span class="is-family-secondary is-size-5">Semibold Serif</span></span></li>
    <li><span class="has-text-weight-bold">800 — Bold / <span class="is-family-secondary is-size-5">Bold Serif</span></span></li>
    <li><span class="has-text-weight-bolder">900 — Bolder / <span class="is-family-secondary is-size-5">Bolder Serif</span></span></li>
</ul>

<hr class="is-size-1 is-visible">
<h4 class="title is-family-primary"><strong>Emphasizers</strong></h4>

Use one of the following tags to emphasize words or part of a text.


<hr class="is-small">

<div class="box is-raised is-medium is-marginless is-size-3 is-family-hand is-radiusless-b">
    Let's <u>underline that!</u>
</div>

    Let's <u>underline that!</u>
<hr class="is-small">

<div class="columns is-gapless is-marginless is-size-4 is-family-secondary">
    <div class="column is-6">
        <div class="box is-raised is-large is-radiusless-tr is-radiusless-b">
            Let's<em> highlight this part </em>..
        </div>
    </div>
    <div class="column is-6">
        <div class="box is-large is-raised has-background-black-ter has-text-white is-radiusless-tl is-radiusless-b">
            Or <em class="is-primary">that on a dark background</em>.
        </div>
    </div>
</div>
<hr class="is-marginless is-visible">
    
    Let's <em>highlight this in yellow</em>..
    Or <em class="is-primary">some of that in purple</em>.
<hr><br>

<a href="http://bulma.io/documentation/modifiers/typography-helpers/" target="blank" class="message is-info is-block">
    More information on &nbsp;→&nbsp; <span class="is-link is-underlined">Bulma / <strong>Typography helpers</strong></span>
</a>
