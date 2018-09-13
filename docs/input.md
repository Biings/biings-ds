<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold">Component</h6><h1 class="title is-1 has-text-weight-bold">Input</h1>
<p class="subtitle is-5"><span class="has-text-weight-semibold">Input fields</span> enable users to provide information.</p>

<hr class="is-visible is-large">

<form class="box is-relaxed is-well is-marginless" spellcheck="false">
    <input class="input is-small is-warning" type="tel" placeholder="Small warning input">
    <hr class="is-small">
    <input class="input" type="tel" placeholder="Normal input">
    <hr class="is-small">
    <input class="input is-medium is-danger" type="email" placeholder="Medium input">
</form>

    <input class="input is-small is-warning" type="text" placeholder="..">
    <input class="input" type="text" placeholder="..">
    <input class="input is-medium is-danger" type="text" placeholder="..">


<hr class="is-visible is-large">

<h2 class="title is-4">Form fields</h2>

<form class="box is-well is-relaxed is-marginless" spellcheck="false">
    <div class="field">
        <label for="demofield" class="label">With a label</label>
        <input id="demofield" class="input" type="text" placeholder="Some input">
    </div>
    <div class="field">
        <label for="textfield" class="label">Textarea</label>
        <textarea id="textfield" class="textarea" placeholder="For looong text inputs.."></textarea>
    </div>
</form>

    <form>
        <div class="field">
            <label for="demofield" class="label">Label</label>
            <input id="demofield" class="input" type="text">
        </div>
        <div class="field">
            <label for="textfield" class="label">Textarea</label>
            <textarea id="textfield" class="textarea" placeholder="..."></textarea>
        </div>
    </form>

!> A field's Label should always have a `for="..."` attribute corresponding to the field ID it is refering to.

<hr>

<div class="box is-bordered">
    More options on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/form/input/" target="blank">Bulma / <strong>Input</strong></a>
    <br>
    Looking for <strong>Select lists</strong>? Check here &nbsp;→&nbsp; <a href="#/dropdown#selectlist" target="blank"><strong>Dropdown</strong></a>
</div>