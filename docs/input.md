<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Input</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    <span class="has-text-weight-semibold">Input fields</span> enable users to provide information.
</p>
<hr class="is-visible is-size-4">

?> **Building a big fat form?**<br>Use <a href="#/form" class="is-underlined">Form fields</a> for better readability.

<hr class="is-size-4">

<h4 class="title is-family-primary"><strong>Input field variations</strong></h4>

<br><form class="box is-well is-large is-marginless is-radiusless-b" spellcheck="false">
    <input class="input is-small" type="tel" placeholder="Small input">
    <hr class="is-size-7">
    <div class="control is-loading is-primary">
        <input class="input" type="tel" placeholder="Default and loading . .">
    </div>
    <hr class="is-size-7">
    <input class="input is-medium" type="email" placeholder="Medium and readonly input" readonly>
    <hr class="is-size-7">
    <input class="input is-danger" placeholder="With class is-danger">
    <p class="help">A clear error message</p>
    <hr class="is-size-7">
    <label for="defaultfield" class="label">With a label</label>
    <div class="control has-icons-right">
        <input id="defaultfield" class="input" type="email" value="A label helps when the input is filled" placeholder="Placeholder is used to give exemples.">
        <svg class="icon is-right has-fill-success"><use xlink:href="media/bds-icons.min.svg#check-g"></use></svg>
    </div>
    <p class="help has-text-success-dark">Saved.</p>
</form>
<hr class="is-thin is-visible">

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

<h4 class="title is-family-primary"><strong>With Icons</strong></h4>

You can add one or two icons inside the input.

<hr>

<div class="box is-well is-large is-marginless is-radiusless-b">
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

    <p class="control has-icons-left has-icons-right">
        <input class="input">
        <svg class="icon is-left"><use xlink:href="media/bds-icons.min.svg#mail-g"></use></svg>
    </p>

    <p class="control has-icons-left">
        <input class="input is-rounded">
        <svg class="icon is-left"><use xlink:href="media/bds-icons.min.svg#search-g"></use></svg>
        <svg class="icon is-right"><use xlink:href="media/bds-icons.min.svg#cross-g"></use></svg>
    </p>
!> The icon tag should always be put right after the input tag.
<hr>

<a class="box is-well has-text-grey-dark" href="https://bulma.io/documentation/form/input/" target="blank">
    More options on &nbsp;→&nbsp; <strong class="has-text-primary">Bulma / Input</strong>
</a>