<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Checkbox</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Checkboxes</span> are used when there is a list of options and the user may select multiple options, including all or none.
</p>
<hr class="is-visible is-size-3"><br>

<h2 class="title"><span class="is-size-smaller">Standard states</span></h2>

The checkbox label should always toggle the checkbox when clicked! Make sure the label's text is a direct child of `.checkbox`

<br><div class="box is-raised is-radiusless-b is-marginless is-large">
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
    <hr class="is-visible is-size-3">
    <label class="checkbox" onclick="makeIndeterminate(123)">
        <input id="123" type="checkbox"><span class="checkbox-mark"></span>
        Make me indeterminate.. JS only: <code class="is-size-7">checkbox.indeterminate = true;</code>
    </label>
</div>
<hr class="is-marginless is-visible">

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

<h2 class="title"><span class="is-size-smaller">Small size</span></h2>

For UI controls, a smaller checkbox (`.is-small`) is recommended.

<br><div class="box is-raised px-6">
    <label class="checkbox is-small">
        <input type="checkbox"><span class="checkbox-mark"></span>
        Small
    </label><br>
    <label class="checkbox is-small">
        <input type="checkbox"><span class="checkbox-mark"></span>
        Control
    </label><br>
    <label class="checkbox is-small">
        <input type="checkbox"><span class="checkbox-mark"></span>
        Checkbox
    </label>
</div>

<hr class="is-size-1 is-visible">

<h2 class="title"><span class="is-size-smaller">Toggle</span></h2>

A checkbox can become a toggle button. Just add `is-toggle`. Toggle values should be saved immediately upon switching.<br><br>

<div class="box is-raised is-radiusless-b is-marginless is-large">
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

<a href="#/radio" class="message is-info is-block">
    For mutually exclusive options use &nbsp;→&nbsp; <strong class="is-link is-underlined">Radio buttons</strong>
</a>