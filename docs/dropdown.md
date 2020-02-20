<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Dropdown</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    A <span class="has-text-weight-semibold">dropdown</span> presents either a list of actions or a tooltip with extra contextual information.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-well is-large is-marginless">
    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="button">Hover Me</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a class="dropdown-item">With class <code>is-hoverable</code></a>
                <a class="dropdown-item">It Works</a>
                <a class="dropdown-item is-active">Without Any</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                    <span class="is-size-7 has-text-grey">(You can also have stuff here)</span>
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
                    <span class="is-size-7 has-text-grey">Stuff here</span>
                    <br>Javascript
                </a>
            </div>
        </div>
    </div>
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

<h2 class="title is-3 is-family-sans-serif">Custom icon</h2>

Use `is-iconless` if you want to remove the default arrow icon and replace it with your own (or not).

<hr>

<div class="box is-well is-large is-marginless">

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
<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Tooltips</h2>

Add class `has-arrow` to clearly indicate the element the dropdown is attached to. Use modifiers `is-centered` and `is-right` to change the alignement of the dropdown (and its arrow).

<br>

<strong>Create tooltips</strong> looking dropdown by wrapping any element in a `.dropdown-trigger` combined with `has-arrow`.

<hr>

<div class="box is-well is-medium is-marginless">
    <div class="level">
        <div class="level-item">
            <div class="dropdown is-iconless is-hoverable has-arrow">
                <div class="dropdown-trigger">
                    <div class="button is-static is-dark is-paddingless">Tooltip-Style</div>
                </div>
                <div class="dropdown-menu">
                    <div class="box is-white is-floating is-size-7">This is actually a <code>box</code> put inside the <code>dropdown-menu</code> :)</div>
                </div>
            </div>
        </div>
        <div class="level-item ">
            <div class="dropdown is-iconless is-up is-centered is-hoverable has-arrow">
                <div class="dropdown-trigger has-text-centered">
                    <div class="button is-static is-paddingless is-fullwidth">Dropup!</div>
                </div>
                <div class="dropdown-menu" style="margin-left: -100%;">
                    <div class="box is-white is-floating is-size-7">
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
                <div class="dropdown-menu" style="margin-left: -100%;">
                    <div class="box is-white is-floating is-size-7 has-background-primary has-text-white">
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
                    <div class="box is-floating is-size-7 has-background-info has-text-white has-text-right">
                        This <strong>is-right</strong>, <strong>is-up</strong> and contains a div with <strong>has-background-info</strong>
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
            <div class="button is-light">Choose a value</div>
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
    <div class="select is-medium is-warning">
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
