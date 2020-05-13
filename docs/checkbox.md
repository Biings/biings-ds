<h6 class="is-uppercase has-text-grey has-text-weight-medium">Component</h6><h1 class="title is-0 is-family-secondary is-size-1-mobile">Checkbox</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-4 is-size-5-mobile is-family-secondary">
    <span class="has-text-weight-semibold">Checkboxes</span> are used when there is a list of options and the user may select multiple options, including all or none.
</p>
<hr class="is-visible is-size-2"><br>

<div class="box has-background-white-bis is-marginless is-large">
    <label class="checkbox">
        <input type="checkbox"><span class="checkbox-mark"></span>
        Check me!
    </label>
    <hr>
    <label class="checkbox">
        <input type="checkbox" checked><span class="checkbox-mark"></span>
        I'm already checked.
    </label>
    <hr>
    <label class="checkbox" disabled>
        <input type="checkbox" disabled><span class="checkbox-mark"></span>
        I'm disabled
    </label>
    <hr>
    <label class="checkbox" disabled>
        <input type="checkbox" disabled checked><span class="checkbox-mark"></span>
        I'm checked but disabled
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

    <label class="checkbox" disabled>
        <input type="checkbox" disabled checked><span class="checkbox-mark"></span>
        I'm checked but disabled
    </label>
<br>

?> **A checkbox's label should always toggle the checkbox when clicked!**<br>Make sure the label's text is a direct child of `.checkbox`

<hr class="is-size-1 is-visible">

<h2 class="title is-3"><strong>Toggle</strong></h2>

A checkbox can become a toggle button. Just add `is-toggle`.<br><br>

<div class="box has-background-white-bis is-marginless is-large">
    <label class="checkbox is-toggle">
        <input type="checkbox"><span class="checkbox-mark"></span>
        I'm a toggle (but I'm still a checkbox)
    </label>
    <hr class="is-visible is-size-4">
    <label class="checkbox is-toggle is-large">
        <input type="checkbox"><span class="checkbox-mark"></span>
        I can be larger!
    </label>
</div>

    <label class="checkbox is-toggle">
        <input type="checkbox"><span class="checkbox-mark"></span>
        I'm a toggle
    </label>
    <label class="checkbox is-toggle is-large">
        <input type="checkbox"><span class="checkbox-mark"></span>
        Larger
    </label>
<hr>

<a href="#/radio" class="box is-well has-text-grey">
    For mutually exclusive options use &nbsp;→&nbsp; <strong class="has-text-primary">Radio buttons</strong>
</a>