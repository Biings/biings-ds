<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Form</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    <span class="has-text-weight-semibold">Forms</span> are used for submitting data. Forms tend to become hard to navigate, use visually consistant fields to help users understand where to input text or select options.
</p>
<p class="subtitle is-family-secondary has-text-dark">Wrap any [Input](input), [Select list](dropdown#selectlist), [Checkbox](checkbox) or [Radio button](radio) in a Form field to present it in a <strong>consistent manner</strong> throughout a form.</p>
<hr class="is-visible is-size-4"><br>

<h4 class="title is-family-primary"><strong>Input field</strong></h4>

Use modifiers `is-warning`, `is-info`, `is-danger` etc. to the `.field` div to change the status.

<br>

<form class="box is-well is-large is-marginless is-radiusless-b" spellcheck="false" autocomplete="on" action="/action_page.php" method="get">
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
        <input id="dangerfield" class="input" type="text" placeholder="Really, this should not be empty!">
    </div>
    <div class="field is-info">
        <label for="infofield" class="label">The Occasional Blue Field</label>
        <input id="infofield" class="input" type="text" placeholder="Even the input text is blue.">
    </div>
    <div class="field is-required">
        <label for="textfield" class="label">Textarea Field</label>
        <textarea id="textfield" rows="2" class="textarea" placeholder="This one is also required"></textarea>
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
        <div class="field is-info">
            <label for="warnfield" class="label">The Occasional Blue Field</label>
            <input id="warnfield" class="input" type="text" placeholder="Even the input text is blue.">
        </div>
        <div class="field is-required">
            <label for="textfield" class="label">Textarea</label>
            <textarea id="textfield" class="textarea" placeholder="..."></textarea>
        </div>
    </form>
<hr class="is-visible is-size-1">
<h4 class="title is-family-primary"><strong>Required or Optional</strong></h4>

In most cases it is better to indicate the optional fields rather than the required ones. Add a `span` inside the label saying "Optional" is the way to go.

<br>You can also add the class `is-required` to the field you wish to display more strongly.

<hr>

<div class="box is-well is-medium is-marginless is-radiusless-b">
    <form class="columns">
        <div class="column is-4">
            <div class="field">
                <label for="textfieldOp" class="label">Something <span>– optional</span></label>
                <input id="textfieldOp" class="input" placeholder="Nice to have stuff"></textarea>
            </div>
        </div>
        <div class="column is-4">
            <div class="field is-required">
                <label for="textfieldRe" class="label">Something required</label>
                <input id="textfieldRe" class="input" placeholder="Please fill this input"></textarea>
            </div>
        </div>
        <div class="column is-4">
            <div class="field is-required is-warning">
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
        <input id="textfieldRe" class="input" placeholder="Please fill in"></textarea>
    </div>
    <div class="field is-required is-warning">
        <label for="textfieldRe" class="label">Something required</label>
        <input id="textfieldRe" class="input" placeholder="Very important stuff"></textarea>
    </div>
<hr class="is-visible is-size-1">

<h4 class="title is-family-primary"><strong>Select field</strong></h4>

<br><form class="box is-well is-radiusless-b is-large is-marginless">
    <div class="field select is-warning">
        <label for="selectId" class="label">Select list</label>
        <select id="selectId">
            <option value="1">Please choose!</option>
            <option value="2">System</option>
            <option value="3">Select</option>
            <option value="4">List</option>
        </select>
    </div>
</form>
<hr class="is-marginless is-visible">

    <div class="field select">
        <label for="selectId" class="label">Select list</label>
        <select id="selectId">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
<hr class="is-visible is-size-1">

<h4 class="title is-family-primary"><strong>Dropdown Field</strong></h4>

<br><form class="box is-well is-large is-marginless is-radiusless-b">
    <div class="dropdown is-hoverable is-fullwidth is-iconless">
        <div class="dropdown-trigger">
            <div class="field select">
                <label for="dropFieldIn" class="label">Read-only Input</label>
                <input id="dropFieldIn" class="input" readonly placeholder="Select from dropdown"></textarea>
            </div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">This works</a>
                <a class="dropdown-item">Without</a>
                <a class="dropdown-item">Any</a>
                <a class="dropdown-item">Javascript</a>
            </div>
        </div>
    </div>
</form>
<hr class="is-visible is-marginless">

    <div class="dropdown is-fullwidth is-iconless">
        <div class="dropdown-trigger">
            <div class="field select">
                <label for="fieldId" class="label">Read-only Input</label>
                <input id="fieldId" class="input" readonly></textarea>
            </div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">...</a>
                <a class="dropdown-item">...</a>
            </div>
        </div>
    </div>
<hr class="is-visible is-size-1">

<h4 class="title is-family-primary"><strong>Checkbox / Radio field</strong></h4>

<br><form class="box is-well is-large is-marginless is-radiusless-b">
    <div class="columns is-multiline is-small">
        <div class="column is-6">
            <div class="field">
                <label class="checkbox">
                    <input type="checkbox"><span class="checkbox-mark"></span>
                    <span>Check me</span>
                </label>
            </div>
        </div>
        <div class="column is-6">
            <div class="field">
                <label class="checkbox is-toggle is-right">
                    <input type="checkbox"><span class="checkbox-mark"></span>
                    <span>Toggle me</span>
                </label>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="field">
                <label class="radio">
                    <input type="radio" name="answer"><span class="radio-mark"></span>
                    <span>Choice One</span>
                </label>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="field">
                <label class="radio">
                    <input type="radio" name="answer"><span class="radio-mark"></span>
                    <span>Choice Two</span>
                </label>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="field">
                <label class="radio">
                    <input type="radio" name="answer"><span class="radio-mark"></span>
                    <span>Choice Three</span>
                </label>
            </div>
        </div>
    </div>
</form>
<hr class="is-marginless is-visible">

    <div class="field">
        <label class="checkbox">
            <input type="checkbox"><span class="checkbox-mark"></span>
            <span>Check me!</span>
        </label>
    </div>
    <!-- Right aligned toggle -->
    <div class="field">
        <label class="checkbox is-toggle">
            Toggle Me.
            <input type="checkbox"><span class="checkbox-mark"></span>
        </label>
    </div>
    <!-- Radio option -->
    <div class="field">
        <label class="radio">
            <input type="radio" name="answer"><span class="radio-mark"></span>
            <span>Choice One</span>
        </label>
    </div>
<hr class="is-visible is-size-1">

<h4 class="title is-family-primary"><strong>Compact Form</strong></h4>

Group similar field together by adding `is-gapless` to the wrapping `columns` container.

<br><form class="box is-well is-large is-marginless is-radiusless-b">
    <div class="columns is-gapless is-multiline">
        <div class="column is-3">
            <div class="field">
                <label for="compact1" class="label">Compact Field</label>
                <input id="compact2" class="input   "></input>
            </div>
        </div>
        <div class="column is-9">
            <div class="field is-warning is-required">
                <label for="compact1" class="label">Compact Field</label>
                <input id="compact2" class="input"></input>
            </div>
        </div>
        <div class="column is-12">
            <div class="field">
                <label class="checkbox is-toggle is-right">
                    <input type="checkbox"><span class="checkbox-mark"></span>
                    <span>Toggle me</span>
                </label>
            </div>
        </div>
        <div class="column is-4">
            <div class="field">
                <label class="radio">
                    <input type="radio" name="compact-radio"><span class="radio-mark"></span>
                    <span>Choose me</span>
                </label>
            </div>
        </div>
        <div class="column is-4">
            <div class="field">
                <label class="radio">
                    <input type="radio" name="compact-radio"><span class="radio-mark"></span>
                    <span>Check me</span>
                </label>
            </div>
        </div>
        <div class="column is-4">
            <div class="field">
                <label class="radio">
                    <input type="radio" name="compact-radio"><span class="radio-mark"></span>
                    <span>Click me</span>
                </label>
            </div>
        </div>
        <div class="column is-12">
            <div class="field">
                <label for="compact1" class="label">Twelve Textarea</label>
                <textarea id="compact2" class="textarea" rows="2"></textarea>
            </div>
        </div>
        <div class="column is-6">
            <div class="field select">
                <label for="compact1" class="label">Compact Field</label>
                <select id="compact1">
                    <option value="1">Choice 1</option>
                    <option value="2">Choice 2</option>
                    <option value="3">Choice 3</option>
                </select>
            </div>
        </div>
        <div class="column is-6">
            <div class="field select">
                <label for="compact1" class="label">Compact Field</label>
                <select id="compact1">
                    <option value="1">Option A</option>
                    <option value="2">Option B</option>
                    <option value="3">Option C</option>
                </select>
            </div>
        </div>
    </div>
</form>
<hr class="is-marginless is-visible">

    <form class="columns is-gapless is-multiline">
        <div class="column is-6">
            <div class="field">
                <label for="compact1" class="label">Compact Field</label>
                <input id="compact2" class="input"></textarea>
            </div>
        </div>
        <!-- ETC -->
    </form>
<hr>
<br>

<div class="box is-well has-text-grey-dark">
    For stand-alone input field use &nbsp;→&nbsp; <a href="#/input"><strong>Input</strong></a>
    <hr class="is-marginless">
    <hr class="is-marginless">
    For simple dropdown lists use &nbsp;→&nbsp; <a href="#/dropdown"><strong>Dropdown</strong></a>
</div>