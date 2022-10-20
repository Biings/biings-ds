<h6 class="is-uppercase is-dimmed has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary">Tooltip</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Tooltips</span> display additional information upon hover. The information should be contextual, useful, and nonessential.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-raised is-medium is-marginless is-radiusless-b">
    Anything can have a <span class="tooltip" data-tooltip="Just like this one.">Tooltip</span>.<br>Simply put your tooltip text in the <code>data-tooltip</code> attribute and add the class <code>tooltip</code>.
</div>

    <span class="tooltip" data-tooltip="Just like this one.">Any element</span>
<br>

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Variations</h3>

You can change the tooltip position, color and arrow.

<br>

?> <strong>Tip for multiline tooltips:</strong><br>Either use the `has-tooltip-multiline` class or include a `&NewLine;` entity in the tooltip text.

<br>

<div class="box is-raised is-large mb-0 is-radiusless-b">
    Right positioned <span class="tooltip has-tooltip-arrow has-tooltip-right has-tooltip-dark" data-tooltip="This is on the left. The content can also be pretty long.&NewLine;However no formatting is allowed within the tooltip.">tooltip</span>.
    <hr class="my-2">
    Colored <span class="tooltip has-tooltip-arrow has-tooltip-danger has-tooltip-fade has-tooltip-text-centered" data-tooltip="This is red/danger &NewLine; and fades in as well">tooltip</span>.
    <hr class="my-2">
    A tooltip can be aligned to the <span class="tooltip has-tooltip-arrow has-tooltip-warning has-tooltip-right-aligned" data-tooltip="With has-tooltip-right-aligned">left or right</span> of the target.
    <hr class="my-2">
    A tooltip can be <span class="tooltip has-tooltip-arrow has-tooltip-info has-tooltip-active has-tooltip-bottom" data-tooltip="To show a quick, useful&NewLine;and contextual information">always active</span>.
</div>

    <span
        class="tooltip
        has-tooltip-arrow
        has-tooltip-info
        has-tooltip-left
        has-tooltip-left-aligned
        has-tooltip-active
        has-tooltip-fade"
        data-tooltip="Tooltip content, use the &NewLine; html entity for multi-line content"
    >
        Tooltip target
    </span>
<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Delay</h3>

You can delay the display of the tooltip with the class `.is-delayed`. Useful to prevent accidental triggers.

<br>

<div class="box is-raised is-large mb-0 is-radiusless-b">
    Wait to see the 
    <span class="tooltip is-delayed has-tooltip-fade has-tooltip-arrow has-tooltip-text-centered" data-tooltip="Delayed tooltip&NewLine;..sorry.">tooltip</span> ..
</div>

    <span
        class="tooltip is-delayed has-tooltip-text-centered has-tooltip-arrow"
        data-tooltip="Delayed tooltip.&NewLine;Sorry."
    >
        Wait to see the tooltip..
    </span>

<hr>

<a href="https://bulma-tooltip.netlify.app/get-started/" target="blank" class="message is-info is-block">
    More variations on &nbsp;→&nbsp; <strong class="is-link is-underlined">Bulma Extension / Tooltip</strong></a>
</a>
