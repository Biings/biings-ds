<h6 class="is-uppercase is-dimmed has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Input</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Input fields</span> enable users to provide information.
</p>
<hr class="is-visible is-size-3">

<div class="message is-info">
    <strong>Building a big fat form?</strong><br>Use <a href="#/form" class="is-underlined">Form fields</a> for better readability.
</div>

<hr class="is-size-4">

<h3 class="title is-family-primary has-text-weight-bold">Input field variations</h3>

<br><form class="box is-raised has-background-white-bis is-large is-marginless is-radiusless-b" spellcheck="false">
    <input class="input is-small" type="tel" placeholder="Small input">
    <hr class="is-size-7">
    <div class="control is-loading is-primary">
        <input class="input" type="tel" placeholder="Default and loading . .">
    </div>
    <hr class="is-size-7">
    <input class="input is-medium" type="email" placeholder="Readonly medium input" value="Readonly medium input" readonly>
    <hr class="is-size-7">
    <div class="control has-icons-right is-danger">
        <input class="input is-danger" placeholder="With class is-danger" value="bad input">
        <svg class="icon is-right has-fill-danger"><use xlink:href="media/bds-icons.min.svg#warning-bold-g"></use></svg>
    </div>
    <p class="help">A clear error message</p>
    <hr class="is-size-7">
    <label for="defaultfield" class="label">With a label</label>
    <div class="control has-icons-right">
        <input id="defaultfield" class="input is-success" type="email" value="A label helps when the input is filled" placeholder="Placeholder is used to give exemples.">
        <svg class="icon is-right has-fill-success-light"><use xlink:href="media/bds-icons.min.svg#check-bold-g"></use></svg>
    </div>
    <p class="help has-text-success-dark">Saved.</p>
    <hr class="is-size-7">
    <label for="tafield" class="label">Text area</label>
    <textarea id="tafield" class="textarea is-info" rows="2" placeholder="With class is-info"></textarea>
</form>
<hr class="is-marginless is-visible">

    <input class="input is-small" type="text" placeholder="..">
    <div class="control is-loading">
        <input class="input" type="text" placeholder="Loading..">
    </div>
    <input class="input is-medium is-danger" type="text">
    <!-- With Label -->
    <label for="inputId" class="label">Label</label>
    <input id="inputId" class="input" type="text">
    <!-- With Error message -->
    <input class="input is-danger">
    <p class="help">A clear error message</p>
!> Labels should always have a `for=""` attribute corresponding to the input ID it is refering to.

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary has-text-weight-bold">With Icons</h3>

You can add one or two icons inside the input.

<hr>

<div class="box is-raised is-large is-marginless is-radiusless-b">
    <div class="columns is-variable is-5">
        <div class="column is-6">
            <p class="control has-icons-left">
                <input class="input"placeholder="Icon input">
                <svg class="icon is-left"><use xlink:href="media/bds-icons.min.svg#mail-g"></use></svg>
            </p>
        </div>
        <div class="column is-6">
            <div class="control has-icons-left has-icons-right">
                <input class="input is-rounded" type="tel" placeholder="Input with 2 icons">
                <svg class="icon is-left"><use xlink:href="media/bds-icons.min.svg#search-g"></use></svg>
                <svg class="icon is-right has-fill-grey"><use xlink:href="media/bds-icons.min.svg#cross-g"></use></svg>
            </div>
        </div>
    </div>
</div>

    <p class="control has-icons-left">
        <input class="input">
        <svg class="icon is-left"><use xlink:href="media/bds-icons.min.svg#mail-g"></use></svg>
    </p>

    <p class="control has-icons-left has-icons-right">
        <input class="input is-rounded">
        <svg class="icon is-left"><use xlink:href="media/bds-icons.min.svg#search-g"></use></svg>
        <svg class="icon is-right"><use xlink:href="media/bds-icons.min.svg#cross-g"></use></svg>
    </p>
!> The icon tag should always be put right after the input tag.
<hr>

<a class="message is-info is-block" href="https://bulma.io/documentation/form/input/" target="blank">
    More options on &nbsp;→&nbsp; <strong class="is-link is-underlined">Bulma / Input</strong>
</a>