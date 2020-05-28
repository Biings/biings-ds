<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Radio button</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    <span class="has-text-weight-semibold">Radio buttons</span> are used when a list of two or more options are mutually exclusive, meaning the user must select only one option.
</p>
<hr class="is-visible is-size-4"><br>

<div class="box is-well is-marginless is-large is-radiusless-b">
    <label class="radio">
        <input type="radio" name="answer"><span class="radio-mark"></span>
        Yes
    </label>
    &nbsp;
    <label class="radio">
        <input type="radio" name="answer"><span class="radio-mark"></span>
        No
    </label>
    &nbsp;
    <label class="radio" disabled>
        <input type="radio" name="answer" disabled checked><span class="radio-mark"></span>
        Maybe
    </label>
</div>

    <label class="radio">
        <input type="radio" name="answer"><span class="radio-mark"></span>
        Yes
    </label>
    <label class="radio">
        <input type="radio" name="answer"><span class="radio-mark"></span>
        No
    </label>
    <label class="radio" disabled>
        <input type="radio" name="answer" disabled><span class="radio-mark"></span>
        Maybe
    </label>
<br>

?> **A radio button's label should always select the radio button when clicked!**<br>Make sure the label's text is a direct child of `.radio`

<hr>

<a href="#/checkbox" class="box is-well has-text-grey-dark">
    For multiple options use &nbsp;→&nbsp; <strong class="has-text-primary">Checkboxes</strong>
</a>