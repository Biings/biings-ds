<h6 class="is-uppercase has-text-grey has-text-weight-medium">Component</h6><h1 class="title is-0 is-family-secondary is-size-1-mobile">Radio button</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-4 is-size-5-mobile is-family-secondary">
    <span class="has-text-weight-semibold">Radio buttons</span> are used when a list of two or more options are mutually exclusive, meaning the user must select only one option.
</p>
<hr class="is-visible is-size-2"><br>

<div class="box has-background-white-bis is-marginless is-large">
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

<a href="#/checkbox" class="box is-well has-text-grey">
    For multiple options use &nbsp;→&nbsp; <strong class="has-text-primary">Checkboxes</strong>
</a>