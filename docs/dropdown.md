<h6 class="is-uppercase has-text-grey has-text-weight-medium">Component</h6><h1 class="title is-family-secondary">Dropdown</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-4 is-family-secondary">
    A <span class="has-text-weight-semibold">dropdown</span> presents either a list of actions or a tooltip with extra contextual information.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box has-background-white-bis is-large is-marginless">
    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="button">Hover me</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a class="dropdown-item">With class <code>is-hoverable</code></a>
                <a class="dropdown-item">It Works</a>
                <a class="dropdown-item is-active">Without Any</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                    <span class="is-size-6 has-text-grey">(You can also have stuff here)</span>
                    <br>Javascript &nbsp;😉</a>
            </div>
        </div>
    </div>
    <div class="dropdown is-active is-pulled-right is-right">
        <div class="dropdown-trigger">
            <div class="button">Opened Dropdown</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Add class <code>is-active</code></a>
                <a class="dropdown-item">top open the dropdown</a>
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
                    <span class="is-size-6 has-text-grey">Stuff here</span>
                    <br>Javascript
                </a>
            </div>
        </div>
    </div>
<hr class="is-visible is-size-1">

<h3 class="title"><strong>Sizes</strong></h3>
    
Dropdown can adapt to the size of their trigger component. Use the size modifier `is-size-[1–7]` to adjust the size of the arrow.

<br>

<div class="box has-background-white-bis is-large is-marginless">
    <div class="dropdown is-hoverable is-size-5">
        <div class="dropdown-trigger">
            <div class="button is-medium">Medium button dropdown</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Just add the class</a>
                <a class="dropdown-item"><code>is-size-5</code> to the dropdown.</a>
            </div>
        </div>
    </div>
    <div class="dropdown is-hoverable is-size-6 is-pulled-right is-right">
        <div class="dropdown-trigger">
            <div class="button is-small is-text">Small text drp</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Just add the class</a>
                <a class="dropdown-item"><code>is-size-6</code> to the dropdown.</a>
            </div>
        </div>
    </div>
</div>

<hr class="is-visible is-size-1">

<h3 class="title"><strong>Tooltips</strong></h3>

Add class `has-arrow` to clearly indicate the element the dropdown is attached to. Use modifiers `is-centered` and `is-right` to change the alignement of the dropdown (and its arrow).

<br>

<strong>Create tooltips</strong> looking dropdown by wrapping any element in a `.dropdown-trigger` combined with `has-arrow`.

<hr>

<div class="box has-background-white-bis is-medium is-marginless">
    <div class="level">
        <div class="level-item">
            <div class="dropdown is-iconless is-hoverable has-arrow">
                <div class="dropdown-trigger">
                    <div class="button is-static is-dark is-paddingless">Tooltip-Style</div>
                </div>
                <div class="dropdown-menu">
                    <div class="box is-white is-floating is-size-6">This is actually a <code>box</code> put inside the <code>dropdown-menu</code> :)</div>
                </div>
            </div>
        </div>
        <div class="level-item ">
            <div class="dropdown is-iconless is-up is-centered is-hoverable has-arrow">
                <div class="dropdown-trigger has-text-centered">
                    <div class="button is-static is-paddingless is-fullwidth">Dropup!</div>
                </div>
                <div class="dropdown-menu">
                    <div class="box is-white has-background-black is-floating is-size-6 has-text-white">
                        This one has both class <code>is-up</code> and <code>is-centered</code>
                    </div>
                </div>
            </div>
        </div>
        <div class="level-item">
            <div class="dropdown is-hoverable is-iconless is-centered has-arrow">
                <div class="dropdown-trigger">
                    <div class="button is-static is-paddingless is-fullwidth has-text-primary">Colored</div>
                </div>
                <div class="dropdown-menu">
                    <div class="box is-white is-floating is-size-6 has-background-primary has-text-white">
                        This one contains a div with <strong>has-background-primary</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="level-item">
            <div class="dropdown is-hoverable is-iconless has-arrow is-right is-up">
                <div class="dropdown-trigger">
                    <div class="button is-static is-paddingless is-fullwidth has-text-info">Right Info</div>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="box is-floating is-size-6 has-background-info has-text-white has-text-right">
                        This <strong>is-right</strong>, <strong>is-up</strong> and contains a div with <strong>has-background-info</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="level-item">
            <div class="dropdown is-hoverable is-iconless has-arrow is-centered is-up">
                <div class="dropdown-trigger">
                    <svg class="icon has-fill-grey-light"><use xlink:href="media/bds-icons.min.svg#info-bold-g"></use></svg>
                </div>
                <div class="dropdown-menu is-size-6" id="dropdown-menu" role="menu">
                    <div class="box is-small is-raised has-background-blck has-text-whie has-text-centered">
                        Tooltip 😇
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <!-- Blue tootlip, Right aligned and Up  -->
    <div class="dropdown is-hoverable is-iconless has-arrow is-right is-up">
        <div class="dropdown-trigger">
            <!-- Put anything you want here, it will trigger the dropdown/tooltip -->
        </div>
        <div class="dropdown-menu">
            <div class="box has-background-info has-text-white  has-text-right is-floating">
                <!-- Your content -->
            </div>
        </div>
    </div>
<hr class="is-visible is-size-1">

<h3 class="title"><strong>Searchable list</strong></h3>

You can add a search field to a dropdown. Use javascript to trigger the search and populate the dropdown list.

<hr>

<div class="box has-background-white-bis is-large is-marginless">
    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="button is-light">Choose a value</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="dropdown-item">
                    <input class="input is-small is-borderless is-paddingless has-background-white" type="text" placeholder="Search the list">
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
            <div class="button is-light">Choose a value</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <div class="dropdown-item">
                    <input class="input is-small is-borderless is-paddingless has-background-white" 
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
<hr class="is-visible is-size-1">

<h3 class="title"><strong>Custom icon</strong></h3>

Use `is-iconless` if you want to remove the default arrow icon and replace it with your own (or not). Or `is-inverted` to make the arrow white.

<hr>

<div class="box has-background-white-bis is-large is-marginless">

    <div class="dropdown is-hoverable is-iconless has-arrow">
        <div class="dropdown-trigger">
            <div class="button is-light">
                <span>With custom icon&nbsp;</span>
                <svg class="icon"><use xlink:href="media/bds-icons.min.svg#today-g"></use></svg>
            </div>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="box has-text-grey has-text-centered">
                    <div class="loader is-inline is-size-3"></div>
                    <br>
                    Loading state...
                </div>
            </div>
        </div>
    </div>
    &nbsp;
    <div class="dropdown is-hoverable is-inverted has-arrow">
        <div class="dropdown-trigger">
            <div class="button is-dark">Inverted Dropdown</div>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="box has-background-dark has-text-white has-text-centered">
                <div class="loader is-inline is-inverted is-size-3"></div>
                <br>
                Loading state...
            </div>
        </div>
    </div>

</div>

    <div class="dropdown is-hoverable is-iconless has-arrow">
        <div class="dropdown-trigger">
            <div class="button">
                <span>With custom icon</span>
                <svg class="icon has-fill-primary"><use xlink:href="media/bds-icons.min.svg#today-g"></use></svg>
            </div>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="box has-text-grey has-text-centered">
                    <div class="loader is-inline is-size-3"></div>
                    <br>
                    Loading state...
                </div>
            </div>
        </div>
    </div>
<a id="selectlist"></a>
<hr class="is-visible is-size-1">

<h3 class="title"><strong>Select list</strong></h3>

Create a system default select list just by wrapping it with a `.select` div.

<hr>

<div class="box has-background-white-bis is-large is-marginless">
    <div class="select is-small is-danger">
        <select>
            <option value="">Small</option>
            <option value="">Danger</option>
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
    </div> &nbsp; &nbsp;
    <div class="select is-medium is-warning">
        <select>
            <option value="">Medium</option>
            <option value="">Warning</option>
            <option value="">Select</option>
            <option value="">List</option>
        </select>
    </div>
    &nbsp; &nbsp;
    <div class="select is-large is-info">
        <select>
            <option value="">Large</option>
            <option value="">Info</option>
            <option value="">Select</option>
            <option value="">List</option>
        </select>
    </div>
</div>

    <div class="select is-medium is-info">
        <select>
            <option value="1">Default</option>
            <option value="2">System</option>
            <option value="3">Select</option>
            <option value="4">List</option>
        </select>
    </div>
<br>

?> Modifiers like `is-small`, `is-medium`, `is-info`, etc are also supported.

<hr>

<div class="box is-well has-text-grey">
    More possibilities on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/components/dropdown/" target="blank">Bulma / <strong>Dropdown</strong></a> &nbsp;and&nbsp; <a href="https://bulma.io/documentation/form/select/">Bulma / <strong>Select</strong></a>
</div>
