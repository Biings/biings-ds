<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Foundation</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Typography</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-size-4-tablet is-family-secondary">
    Use <strong>typography</strong> to create clear hierarchies to guide users through the product and experience. It is the core structure of any well designed interface.
</p>
<hr class="is-visible is-size-2"><br>

<h3 class="title"><strong>Font family</strong></h3>

<ul class="list">
    <li>For maximum legibility Biings DS uses <span class="is-family-primary has-text-weight-semibold">Averta</span> as its main font family (with a purchased licence).</li>
    <li>For important headings use <strong class="is-family-secondary has-text-weight-semibold is-size-5">Crimson Pro</strong> with modifier <code>is-family-secondary</code></li>
    <li>When a Monospace font is required use <strong class="is-family-monospace has-text-weight-bold">Roboto Mono</strong> with modifier <code>is-family-monospace</code></li>
    <li>For hand-drawn text use <strong class="is-family-hand is-size-4">Caveat</strong> with modifier <code>is-family-hand</code></li>
</ul>

!> Any text immediatly following a <span class="is-family-secondary">Crimson Pro</span> header should <span style="text-decoration: underline;">always</span> use <span class="has-text-weight-bold">Averta</span>.

<hr class="is-size-1 is-visible">
<h3 class="title"><strong>Font weights</strong></h3>

Use font weights to emphasize or differentiate content hierarchy.  
Example: `has-text-weight-semibold`

<ul class="list is-size-5">
    <li><span class="has-text-weight-light">300 — Light</span></li>
    <li><span class="has-text-weight-normal">400 — Normal / <span class="is-family-secondary">Light Serif</span></span></li>
    <li><span class="has-text-weight-medium">500 — Medium / <span class="is-family-secondary">Medium Serif</span></span></li>
    <li><span class="has-text-weight-semibold">600 — Semibold / <span class="is-family-secondary">Semibold Serif</span></span></li>
    <li><span class="has-text-weight-bold">800 — Bold</span></li>
    <li><span class="has-text-weight-bolder">900 — Bolder / <span class="is-family-secondary">Bolder Serif</span></span></li>
</ul>

<hr class="is-size-1 is-visible">
<h3 class="title"><strong>Scales</strong></h3>

Titles and subtitles have sizes ranging from 1 (biggest) to 6 (smallest). Use the modifier syntax <code>is-[1-6]</code> for titles, and <code>is-size-[1-7]</code> for texts.

<hr>

<div class="box is-bordered is-larger">
    <h1 class="title is-1 is-family-secondary">H1 Title</h1><div class="subtitle is-4 has-text-grey">Larger text size</div>
    <hr class="is-smaller">
    <h2 class="title is-2 is-family-secondary">H2 Title</h2><div class="subtitle has-text-grey">Default Subtitle</div>
    <hr class="is-smaller">
    <h3 class="title is-3 is-family-secondary">H3 Title</h3><div class="subtitle is-5 has-text-grey">Normal text size</div>
    <hr class="is-smaller">
    <h4 class="title is-4 is-family-secondary">H4 Title</h4><div class="subtitle is-6 has-text-grey">Small text size</div>
    <hr class="is-smaller">
    <h5 class="title is-5">H5 Title</h5><div class="subtitle is-size-7 has-text-grey">Tiny text size</div>
    <hr class="is-smaller">
    <h6 class="title is-6">H6 Title</h6><div class="subtitle is-size-7 has-text-grey">Tiny text size</div>
</div>

?> Texts have an extra 7th size for use in special commponents.

<hr class="is-size-1 is-visible">
<h3 class="title"><strong>Emphasizers</strong></h3>

Use one of the following classes to emphasize words or part of a text.


<hr class="is-small">

<div class="box is-medium has-background-light is-marginless is-size-3 is-family-hand is-radiusless-bl is-radiusless-br">
    Let's <u>underline that!</u>
</div>

    Let's <u>underline that!</u>
<hr class="is-small">

<div class="level is-marginless is-size-4 is-family-secondary">
    <div class="level-item is-marginless">
        <div class="box has-background-light is-large is-radiusless-tr is-radiusless-bl is-radiusless-br">
            Let's<em> highlight this part </em>..
        </div>
    </div>
    <div class="level-item is-large is-marginless">
        <div class="box is-large has-background-black-ter has-text-white is-radiusless-tl is-radiusless-bl is-radiusless-br">
            Or <em class="is-primary">that on a dark background</em>.
        </div>
    </div>
</div>
    
    Let's <em>highlight this in yellow</em>..
    Or <em class="is-primary">some of that in purple</em>.
<hr class="is-small">

<div class="box is-medium has-background-light is-marginless is-size-4 is-family-secondary is-radiusless-bl is-radiusless-br">
    <p class="is-capitalized">this is capitalized</p>
</div>

    <p class="is-capitalized">this is capitalized</p>
<hr class="is-small">

<div class="box is-medium has-background-light is-marginless is-size-5 is-radiusless-bl is-radiusless-br">
    <p class="is-italic">Lorem ipsum dolor sit amet.<p>
</div>

    <p class="is-italic">Lorem ipsum dolor sit amet.<p>
<hr><br>

<a href="http://bulma.io/documentation/modifiers/typography-helpers/" target="blank" class="box is-well has-text-grey-dark">
    More information on &nbsp;→&nbsp; <span class="is-link has-text-primary">Bulma / <strong>Typography helpers</strong></span>
</a>
