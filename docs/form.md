<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Form</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Forms</span> are used for submitting data. Forms tend to become hard to navigate, use visually consistant fields to help users understand where to input text or select options.<br><br>Wrap any [Input](input), [Select list](dropdown#selectlist), [Checkbox](checkbox) or [Radio button](radio) in a Form field to present it in a <strong>consistent manner</strong> throughout a form.
</p>
<hr class="is-visible is-size-3"><br>

<h2 class="title is-3 is-family-sans-serif">Input field</h2>

<form class="box is-well is-large is-marginless" spellcheck="false" autocomplete="on" action="/action_page.php" method="get">
    <div class="field">
        <label for="email" class="label">Input field</label>
        <input id="email" name="email" class="input" type="text" placeholder="Some input">
    </div>
    <div class="field is-warning">
        <label for="warnfield" class="label">Input Field with Warning</label>
        <input id="warnfield" class="input" type="text" placeholder="Should not be empty">
    </div>
    <div class="field is-danger">
        <label for="dangerfield" class="label">Input Field with serious warning</label>
        <input id="dangerfield" class="input is-danger" type="text" placeholder="Really, this should not be empty!">
    </div>
    <div class="field">
        <label for="textfield" class="label">Textarea Field</label>
        <textarea id="textfield" class="textarea" placeholder="For looong text inputs.."></textarea>
    </div>
</form>

    <form>
        <div class="field">
            <label for="fieldId" class="label">Label</label>
            <input id="fieldId" class="input" type="text">
        </div>
        <div class="field is-warning">
            <label for="warnfield" class="label">Input Field with warning</label>
            <input id="warnfield" class="input" type="text" placeholder="Should not be empty">
        </div>
        <div class="field is-danger">
            <label for="warnfield" class="label">Input Field with serious warning</label>
            <input id="warnfield" class="input" type="text" placeholder="Really, this should not be empty!">
        </div>
        <div class="field">
            <label for="textfield" class="label">Textarea</label>
            <textarea id="textfield" class="textarea" placeholder="..."></textarea>
        </div>
    </form>
<br>

?> Add `is-warning` or `is-danger` to the `.field` div to change the status.

<hr class="is-visible is-size-1">
<h2 class="title is-3 is-family-sans-serif">Required or Optional</h2>

In most cases it is better to indicate the optional fields rather than the required ones. Add a `span` inside the label saying "Optional" is the way to go. But you can also add the class `is-required` to the field you wish to display more strongly.

<hr class="is-size-8">

<div class="box is-well is-large is-marginless">
    <form class="columns is-variable is-4">
        <div class="column is-6">
            <div class="field">
                <label for="textfieldOp" class="label">Some label <span>– optional</span></label>
                <input id="textfieldOp" class="input" placeholder="Nice to have stuff"></textarea>
            </div>
        </div>
        <div class="column is-6">
            <div class="field is-required">
                <label for="textfieldRe" class="label">Something required</label>
                <input id="textfieldRe" class="input" placeholder="Very important stuff"></textarea>
            </div>
        </div>
    </form>
</div>

    <div class="field">
        <label for="textfieldOp" class="label">Some label <span>– Optional</span></label>
        <input id="textfieldOp" class="input" placeholder="Nice to have stuff"></textarea>
    </div>
    <div class="field is-required">
        <label for="textfieldRe" class="label">Something required</label>
        <input id="textfieldORe" class="input" placeholder="Very important stuff"></textarea>
    </div>
<hr class="is-visible is-size-1">
<h2 class="title is-3 is-family-sans-serif">Select field</h2>

<form class="box is-well is-large is-marginless">
    <div class="field select">
        <label for="selectId" class="label">Select list</label>
        <select id="selectId">
            <option value="1">Default</option>
            <option value="2">System</option>
            <option value="3">Select</option>
            <option value="4">List</option>
        </select>
    </div>
</form>

    <div class="field select">
        <label for="selectId" class="label">Select list</label>
        <select id="selectId">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Checkbox / Radio field</h2>

<form class="box is-well is-large is-marginless">
    <div class="field">
        <label class="checkbox">
            <input type="checkbox"><span class="checkbox-mark"></span>
            Check me!
        </label>
    </div>
    <div class="columns">
        <div class="column is-one-third">
            <div class="field">
                <label class="radio">
                    <input type="radio" name="answer"><span class="radio-mark"></span>
                    Choice One
                </label>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="field">
                <label class="radio">
                    <input type="radio" name="answer"><span class="radio-mark"></span>
                    Choice Two
                </label>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="field">
                <label class="radio">
                    <input type="radio" name="answer"><span class="radio-mark"></span>
                    Choice Three
                </label>
            </div>
        </div>
    </div>
</form>

    <div class="field">
        <label class="checkbox">
            <input type="checkbox"><span class="checkbox-mark"></span>
            Check me!
        </label>
    </div>
    <!-- Radio option -->
    <div class="field">
        <label class="radio">
            <input type="radio" name="answer"><span class="radio-mark"></span>
            Choice One
        </label>
    </div>
<hr>
<br>

<div class="box is-bordered">
    For stand-alone input field use &nbsp;→&nbsp; <a href="#/input"><strong>Input</strong></a>
    <br>
    For simple dropdown lists use &nbsp;→&nbsp; <a href="#/dropdown"><strong>Dropdown</strong></a>
</div>