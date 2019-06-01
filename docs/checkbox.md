<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-serif is-1 has-text-weight-bold">Checkbox</h1>
<p class="subtitle is-5">
    <span class="has-text-weight-semibold">Checkboxes</span> are used when there is a list of options and the user may select multiple options, including all or none.
</p>

<hr class="is-large is-visible">

<div class="box is-well is-marginless is-large">
    <label class="checkbox">
        <input type="checkbox"><span class="checkbox-mark"></span>
        Check me!
    </label>
    <hr class="is-smaller">
    <label class="checkbox">
        <input type="checkbox" checked><span class="checkbox-mark"></span>
        I'm already checked.
    </label>
    <hr class="is-smaller">
    <label class="checkbox" disabled>
        <input type="checkbox" disabled><span class="checkbox-mark"></span>
        I'm disabled
    </label>
</div>

    <label class="checkbox">
        <input type="checkbox"><span class="checkbox-mark"></span>
        Check me!
    </label>

    <label class="checkbox">
        <input type="checkbox" checked><span class="checkbox-mark"></span>
        I'm already checked
    </label>

    <label class="checkbox" disabled>
        <input type="checkbox" disabled><span class="checkbox-mark"></span>
        I'm disabled.
    </label>
<br>

?> **A checkbox's label should always toggle the checkbox when clicked!**<br>Make sure the label's text is a direct child of `.checkbox`

<hr class="is-large is-visible">

<h2 class="title is-4 is-family-sans-serif">Toggle</h2>

A checkbox can become a toggle button. Just add `is-toggle`.<br><br>

<div class="box is-well is-marginless is-large">
    <label class="checkbox is-toggle">
        <input type="checkbox"><span class="checkbox-mark"></span>
        I'm a toggle (but I'm still a checkbox)
    </label>
</div>

    <label class="checkbox is-toggle">
        <input type="checkbox"><span class="checkbox-mark"></span>
        I'm a toggle
    </label>

<hr>

<a href="#/radio" class="box is-bordered">
    For mutually exclusive options use &nbsp;→&nbsp; <strong class="has-text-primary">Radio buttons</strong>
</a>