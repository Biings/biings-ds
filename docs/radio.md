<h6 class="subtitle is-5 has-text-grey">Component</h6><h1 class="title is-serif is-1 has-text-weight-bold">Radio button</h1>
<p class="subtitle is-5">
    <span class="has-text-weight-semibold">Radio buttons</span> are used when a list of two or more options are mutually exclusive, meaning the user must select only one option.
</p>

<hr class="is-large is-visible">

<div class="box is-well is-marginless is-large">
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
        <input type="radio" name="answer" disabled><span class="radio-mark"></span>
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

<div class="box is-bordered">
    For multiple options use &nbsp;→&nbsp; <a href="#/checkbox">**Checkboxes**</a>.
</div>