<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-serif is-1">Dropdown</h1>
<hr class="is-visible">
<p class="subtitle is-5 is-family-secondary">
    The <span class="has-text-weight-semibold">dropdown</span> allow users to choose from a list of different actions or choices.
</p>

<hr class="is-visible"><br>

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
    
<hr class="is-visible is-large">

<h2 class="title is-4 is-family-sans-serif">Use a custom icon</h2>

Use `is-iconless` if you want to use your own icon in the dropdown button.

<hr class="is-small">

<div class="box is-well is-relaxed is-marginless">

    <div class="dropdown is-hoverable is-iconless">
        <div class="dropdown-trigger">
            <div class="button">
                <span>With custom icon &nbsp;</span>
                <svg class="icon has-fill-green"><use xlink:href="media/bds-icons.min.svg#help"></use></svg>&nbsp;
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

<h2 class="title is-4 is-family-sans-serif">Changer the trigger</h2>

Any element or component can trigger a dropdown when placed inside the `.dropdown-trigger` div.

<hr class="is-small">

<div class="box is-well is-relaxed">

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
    <hr>
</div>

?> Use the class `.is-active` if you want to control the dropdown with javascript.<br>For CSS only, use `.is-hoverable`.

<hr class="is-visible is-large">

<h2 class="title is-4 is-family-sans-serif">Searchable list</h2>

You can add a search field to a dropdown. Use javascript to trigger the search and populate the dropdown list.

<hr class="is-small">

<div class="box is-well is-large is-marginless">
    <div class="dropdown is-hoverable is-small">
        <div class="dropdown-trigger">
            <div class="button is-small is-secondary">Choose a value</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="dropdown-item ">
                    <input class="input is-small is-paddingless is-borderless is-shadowless" type="text" placeholder="Search the list">
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">Show</a>
                <a class="dropdown-item is-active">results</a>
                <a class="dropdown-item">here</a>
            </div>
        </div>
    </div>
</div>

    <div class="dropdown">
        <div class="dropdown-trigger">
            <div class="button is-secondary">Choose a value</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <div class="dropdown-item ">
                    <input class="input is-small is-paddingless has-background-white" 
                           type="text"
                           placeholder="Search the list">
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">..</a>
                <a class="dropdown-item">..</a>
                <a class="dropdown-item">..</a>
            </div>
        </div>
    </div>
<a id="selectlist"></a>
<hr class="is-visible is-large">

<h2 class="title is-4 is-family-sans-serif">Select list</h2>

Create a system default select list just by wrapping it with a `.select` div.

<hr class="is-small">

<div class="box is-well is-large is-marginless">
    <div class="select is-small">
        <select>
            <option value="">Small</option>
            <option value="">System</option>
            <option value="">Select</option>
            <option value="">List</option>
        </select>
    </div> &nbsp; &nbsp;
    <div class="select">
        <select>
            <option value="">Default</option>
            <option value="">System</option>
            <option value="">Select</option>
            <option value="">List</option>
        </select>
    </div>
    &nbsp; &nbsp;
    <div class="select is-medium">
            <select>
                <option value="">Medium</option>
                <option value="">System</option>
                <option value="">Select</option>
                <option value="">List</option>
            </select>
        </div>
</div>

    <div class="select is-medium">
        <select>
            <option value="1">Default</option>
            <option value="2">System</option>
            <option value="3">Select</option>
            <option value="4">List</option>
        </select>
    </div>
<br>

?> Size modifiers `is-small`, `is-medium` are also supported.

<hr>

<div class="box is-bordered is-link">
    More possibilities on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/components/dropdown/" target="blank">Bulma / <strong>Dropdown</strong></a> &nbsp;and&nbsp; <a href="https://bulma.io/documentation/form/select/">Bulma / <strong>Select</strong></a>
</div>
