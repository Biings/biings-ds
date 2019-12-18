<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Dropdown</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    A <span class="has-text-weight-semibold">dropdown</span> presents either a menu of discoverable content, or a list of actions.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-well is-large is-marginless">
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

<br>

?> Use the class `.is-active` if you want to control the dropdown with javascript. For CSS only, use `.is-hoverable`.

<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Sizes</h2>
    
Dropdown can adapt to the size of their trigger component. Supported sizes are : `is-small` and `is-medium`.

<br>

<div class="box is-well is-large is-marginless">
    <div class="dropdown is-hoverable is-small">
        <div class="dropdown-trigger">
            <div class="button is-small">Small dropdown</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Just add the class</a>
                <a class="dropdown-item"><code>is-small</code> to the dropdown.</a>
            </div>
        </div>
    </div>
    &nbsp; &nbsp;
    <div class="dropdown is-hoverable is-medium">
        <div class="dropdown-trigger">
            <div class="button is-medium">Medium dropdown</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Just add the class</a>
                <a class="dropdown-item"><code>is-medium</code> to the dropdown.</a>
            </div>
        </div>
    </div>
</div>

    
<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Use a custom icon</h2>

Use `is-iconless` if you want to use your own icon in the dropdown button.

<hr>

<div class="box is-well is-large is-marginless">

    <div class="dropdown is-hoverable is-iconless has-arrow">
        <div class="dropdown-trigger">
            <div class="button">
                <span>With custom icon &nbsp;</span>
                <svg class="icon has-fill-primary"><use xlink:href="media/bds-icons.min.svg#rest-g"></use></svg>&nbsp;&nbsp;
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

<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Attached arrow</h2>

Add class `.has-arrow` when you want to clearly indicate the element the dropdown is attached to.  
Use `is-centered` and `is-right` to change where the arrow is.

<hr>

<div class="box is-well is-large">

    <div class="level">
        <div class="level-left">
            <div class="dropdown is-hoverable is-iconless is-active has-arrow is-centered">
                <div class="dropdown-trigger">
                    <div class="avatar is-small"><div class="has-background-red-light">A</div></div><span class="is-size-6 has-text-grey">A dropdown with a centered arrow</span>
                    <hr class="is-thin is-wavy">
                </div>
                <div class="dropdown-menu"
                     id="dropdown-menu"
                     role="menu">
                    <div class="dropdown-content">
                        <a class="dropdown-item">Add <code>is-active</code> class</a>
                        <a class="dropdown-item">for the dropdown to be open.</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="level-right">
            <div class="dropdown is-hoverable is-iconless has-arrow is-right">
                <div class="dropdown-trigger">
                    <div class="avatar is-small"><div class="has-background-turquoise-light">R</div></div><span class="has-text-grey">Also works with `is-right`</span>
                    <hr class="is-thin is-wavy">
                </div>
                <div class="dropdown-menu"
                     id="dropdown-menu"
                     role="menu">
                    <div class="dropdown-content">
                        <a class="dropdown-item">Add <code>is-right</code> class</a>
                        <a class="dropdown-item">for a right aligned dropdown.</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
</div>

?> Any element can act as a dropdown trigger. Simply place it inside the `.dropdown-trigger` tag.

<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Searchable list</h2>

You can add a search field to a dropdown. Use javascript to trigger the search and populate the dropdown list.

<hr>

<div class="box is-well is-large is-marginless">
    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="button is-light">Choose a value</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="dropdown-item ">
                    <input class="input is-small is-paddingless is-borderless is-shadowless" type="text" placeholder="Search the list">
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">Show</a>
                <a class="dropdown-item">results</a>
                <a class="dropdown-item">here.</a>
                <a class="dropdown-item">This list</a>
                <a class="dropdown-item">can have</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">result</a>
                <a class="dropdown-item">items</a>
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
<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Select list</h2>

Create a system default select list just by wrapping it with a `.select` div.

<hr>

<div class="box is-well is-large is-marginless">
    <div class="select is-small">
        <select>
            <option value="">Small</option>
            <option value="">System</option>
            <option value="">Select</option>
            <option value="">List</option>
        </select>
    </div> &nbsp; &nbsp;
    <div class="select is-primary">
        <select>
            <option value="">Default</option>
            <option value="">System</option>
            <option value="">Select</option>
            <option value="">List</option>
        </select>
    </div>
    &nbsp; &nbsp;
    <div class="select is-medium is-success">
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

<div class="box is-bordered">
    More possibilities on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/components/dropdown/" target="blank">Bulma / <strong>Dropdown</strong></a> &nbsp;and&nbsp; <a href="https://bulma.io/documentation/form/select/">Bulma / <strong>Select</strong></a>
</div>
