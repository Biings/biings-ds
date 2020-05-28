<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Checkbox</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    <span class="has-text-weight-semibold">Checkboxes</span> are used when there is a list of options and the user may select multiple options, including all or none.
</p>
<hr class="is-visible is-size-4"><br>

<h4 class="title is-family-primary"><strong>Standard states</strong></h4>

The checkbox label should always toggle the checkbox when clicked! Make sure the label's text is a direct child of `.checkbox`

<br><div class="box is-well is-radiusless-b is-marginless is-large">
    <label class="checkbox">
        <input type="checkbox"><span class="checkbox-mark"></span>
        Check me!
    </label>
    <hr>
    <label class="checkbox" >
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
    <hr>
    <label class="checkbox is-right is-block">
        I'm right aligned →
        <input type="checkbox"><span class="checkbox-mark"></span>
    </label>
    <hr class="is-visible is-size-4">
    <label class="checkbox" onclick="makeIndeterminate(123)">
        <input id="123" type="checkbox"><span class="checkbox-mark"></span>
        Make me indeterminate.. JS only: <code class="is-size-7">checkbox.indeterminate = true;</code>
    </label>
</div>
<hr class="is-thin is-visible">

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

    <label class="checkbox is-right is-block">
        I'm right aligned →
        <input type="checkbox"><span class="checkbox-mark"></span>
    </label>
<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Toggle</strong></h4>

A checkbox can become a toggle button. Just add `is-toggle`.<br><br>

<div class="box is-well is-radiusless-b is-marginless is-large">
    <label class="checkbox is-toggle">
        <input type="checkbox"><span class="checkbox-mark"></span>
        I'm a toggle (but I'm still a checkbox)
    </label>
    <hr class="is-visible">
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

<a href="#/radio" class="box is-well has-text-grey-dark">
    For mutually exclusive options use &nbsp;→&nbsp; <strong class="has-text-primary">Radio buttons</strong>
</a>