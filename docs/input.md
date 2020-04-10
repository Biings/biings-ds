<h6 class="is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Input</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Input fields</span> enable users to provide information.
</p>

?> **Making a big fat form?** Use <a href="#/form" class="is-underlined">Form fields</a> for better readability.

<hr class="is-visible is-size-3"><br>

<h2 class="title is-3 is-family-sans-serif">Stand-alone input field</h2>

<form class="box is-large has-background-white-bis is-marginless" spellcheck="false">
    <input class="input is-small" type="tel" placeholder="Small input">
    <hr class="is-size-8">
    <input class="input" type="tel" placeholder="Default and loading input">
    <hr class="is-size-8">
    <input class="input is-medium" type="email" placeholder="Medium and danger input">
    <hr class="is-size-8">
    <input class="input is-large" type="email" placeholder="Large input (to use very occasionally)">
    <hr class="is-size-8">
    <label for="defaultfield" class="label">With a label</label>
    <input id="defaultfield" class="input" type="email" value="A label helps when the input is filled" placeholder="Placeholder is used to give exemples.">
    <hr class="is-size-8">
    <div class="columns is-variable is-2">
        <div class="column is-10"><input class="input is-danger" placeholder="With class is-danger"></div>
        <div class="column is-2"><div class="button is-danger is-beefy is-fullwidth">Submit</div></div>
    </div>
</form>

    <input class="input is-small" type="text" placeholder="..">
    <input class="input" type="text" placeholder="..">
    <input class="input is-medium is-danger" type="text" placeholder="..">
    <label for="inputId" class="label">Label</label>
    <input id="inputId" class="input" type="text" placeholder="..">
!> Labels should always have a `for=""` attribute corresponding to the input ID it is refering to.

<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">With Icons</h2>

You can add one or two icons inside the input.

<hr>

<div class="box has-background-white-bis is-large is-marginless">
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

<a class="box is-bordered" href="https://bulma.io/documentation/form/input/" target="blank">
    More options on &nbsp;→&nbsp; Bulma / <strong class="has-text-primary">Input</strong>
</a>