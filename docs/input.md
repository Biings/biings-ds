<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-7-mobile">Component</h6><h1 class="title is-family-secondary is-size-2-mobile">Input</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-size-4-tablet is-family-secondary">
    <span class="has-text-weight-semibold">Input fields</span> enable users to provide information.
</p>
<hr class="is-visible is-size-3">

?> **Building a big fat form?**<br>Use <a href="#/form" class="is-underlined">Form fields</a> for better readability.

<hr class="is-size-4">

<h3 class="title"><strong>Input field variations</strong></h3>

<br><form class="box is-large has-background-white-bis is-marginless is-radiusless-bl is-radiusless-br" spellcheck="false">
    <input class="input is-small" type="tel" placeholder="Small input">
    <hr class="is-size-7">
    <input class="input" type="tel" placeholder="Default and loading input">
    <hr class="is-size-7">
    <input class="input is-medium" type="email" placeholder="Medium and danger input">
    <hr class="is-size-7">
    <label for="defaultfield" class="label">With a label</label>
    <input id="defaultfield" class="input" type="email" value="A label helps when the input is filled" placeholder="Placeholder is used to give exemples.">
    <hr class="is-size-7">
    <div class="columns is-variable is-2">
        <div class="column is-10">
            <input class="input is-danger" placeholder="With class is-danger">
            <p class="help">A clear error message</p>
        </div>
        <div class="column is-2"><div class="button is-danger is-beefy is-fullwidth">Submit</div></div>
    </div>
</form>

    <input class="input is-small" type="text" placeholder="..">
    <input class="input" type="text">
    <input class="input is-medium is-danger" type="text">
    <!-- With Label -->
    <label for="inputId" class="label">Label</label>
    <input id="inputId" class="input" type="text">
    <!-- With Error message -->
    <input class="input is-danger">
    <p class="help">A clear error message</p>
!> Labels should always have a `for=""` attribute corresponding to the input ID it is refering to.

<hr class="is-visible is-size-1">

<h3 class="title"><strong>With Icons</strong></h3>

You can add one or two icons inside the input.

<hr>

<div class="box has-background-white-bis is-large is-marginless is-radiusless-bl is-radiusless-br">
    <div class="columns is-variable is-5">
        <div class="column is-6">
            <p class="control has-icons-left">
                <input class="input"placeholder="Icon input">
                <svg class="icon is-left"><use xlink:href="media/bds-icons.min.svg#mail-g"></use></svg>
            </p>
        </div>
        <div class="column is-6">
            <p class="control has-icons-left has-icons-right">
                <input class="input is-rounded" type="tel" placeholder="Input with 2 icons">
                <svg class="icon is-left"><use xlink:href="media/bds-icons.min.svg#search-g"></use></svg>
                <svg class="icon is-right has-fill-grey-light"><use xlink:href="media/bds-icons.min.svg#cross-g"></use></svg>
            </p>
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