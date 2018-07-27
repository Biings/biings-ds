<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold">Component</h6><h1 class="title is-1">Dropdown</h1>
<p class="subtitle is-5">
    The <span class="has-text-weight-semibold">dropdown</span> allow users to choose from a list of different actions or choices.
</p>

<hr class="is-large is-visible">



<div class="box is-well is-relaxed is-marginless">

    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="button">Default dropdown</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a class="dropdown-item">This works</a>
                <a class="dropdown-item is-active">Without</a>
                <a class="dropdown-item">Any</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                    <span class="is-size-7 has-text-grey">You can also have stuff here</span>
                    <br>Javascript &nbsp;😉</a>
            </div>
        </div>
    </div>

</div>
```html
<div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
        <div class="button">Default Dropdown</div>
    </div>
    <div class="dropdown-menu">
        <div class="dropdown-content">
            <a class="dropdown-item">This works</a>
            <a class="dropdown-item">Without</a>
            <a class="dropdown-item is-active">Any</a>
            <hr class="dropdown-divider">
            <a class="dropdown-item">
                <span class="is-size-7 has-text-grey">Stuff here</span>
                <br>Javascript
            </a>
        </div>
    </div>
</div>
```

<hr class="is-visible is-large">

<h2 class="title is-4">Use a custom icon</h2>

Use `is-iconless` if you want to use your own icon in the dropdown button.

<hr class="is-small">

<div class="box is-well is-relaxed is-marginless">

    <div class="dropdown is-hoverable is-iconless">
        <div class="dropdown-trigger">
            <div class="button">
                <span>With custom icon &nbsp;</span>
                <svg class="icon has-fill-green"><use xlink:href="media/bds-icons.min.svg#circle-plus"></use></svg>&nbsp;
            </div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a class="dropdown-item">This has its </a>
                <a class="dropdown-item">Own Icon</a>
            </div>
        </div>
    </div>

</div>

<hr class="is-visible is-large">

<h2 class="title is-4">Changer the trigger</h2>

Any element or component can trigger a dropdown when placed inside the `.dropdown-trigger` div.
<br><br>
Use the class `.is-active` if you want to control the dropdown with javascript (otherwise use `.is-hoverable`).

<hr class="is-small">

<div class="box is-well is-relaxed is-marginless">

    <div class="dropdown is-hoverable is-iconless is-active">
        <div class="dropdown-trigger">
            <div class="avatar"><img src="https://www.gravatar.com/avatar/68a50e21ee0b66aafee1831d3c6f130c?size=200&d=blank"></div>
            <span class="title is-6 has-text-grey">Even this can have a dropdown menu.</span>
            <br><br>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a class="dropdown-item">This already has</a>
                <a class="dropdown-item">The class `is-active`</a>
            </div>
        </div>
    </div>

</div>

<br><br>

<hr class="is-visible is-large">

<h2 class="title is-4">Searchable list</h2>

You can add a search field to a dropdown. Use javascript to trigger the search and populate the dropdown list.

<hr class="is-small">

<div class="dropdown is-active is-small">
    <div class="dropdown-trigger">
        <div class="button is-small is-secondary">Choose a value</div>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
            <div class="dropdown-item ">
                <input class="input is-small is-paddingless has-background-white" type="text" placeholder="Search the list">
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item is-large">Show</a>
            <a class="dropdown-item is-active">results</a>
            <a class="dropdown-item">here</a>
        </div>
    </div>
</div>

<hr class="is-large">
<br>
<hr class="is-large">

<div class="box is-bordered">
    More possibilities on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/components/dropdown/" target="blank">Bulma / <strong>Dropdown</strong></a>
</div>
