<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Input</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Input fields</span> enable users to provide information.
</p>
<hr class="is-visible is-size-3"><br>

<h2 class="title is-3 is-family-sans-serif">Stand-alone input field</h2>

<form class="box is-large is-well is-marginless" spellcheck="false">
    <input class="input is-small" type="tel" placeholder="Small input">
    <hr class="is-size-8">
    <input class="input" type="tel" placeholder="Default input">
    <hr class="is-size-8">
    <input class="input is-medium is-danger" type="email" placeholder="Medium and danger input">
    <hr class="is-size-8">
    <label for="defaultfield" class="label">Has a label</label>
    <input id="defaultfield" class="input" type="email" placeholder="Medium and danger input">
</form>

    <input class="input is-small" type="text" placeholder="..">
    <input class="input" type="text" placeholder="..">
    <input class="input is-medium is-danger" type="text" placeholder="..">
    <label for="inputId" class="label">Label</label>
    <input id="inputId" class="input" type="text" placeholder="..">
!> Labels should always have a `for=""` attribute corresponding to the input ID it is refering to.

<hr>

<div class="box is-bordered">
    More options on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/form/input/" target="blank">Bulma / <strong>Input</strong></a>
    <br>
    Looking for <strong>Select lists</strong>? Check here &nbsp;→&nbsp; <a href="#/dropdown#selectlist"><strong>Dropdown</strong></a>
</div>