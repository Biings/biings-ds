<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Dropdown</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    A <span class="has-text-weight-semibold">dropdown</span> presents either a list of actions or a tooltip with extra contextual information.
</p>
<hr class="is-visible is-size-4"><br>

<div class="box is-well is-radiusless-b is-large is-marginless">
    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="button">Hover me</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a class="dropdown-item">With class <code class="is-size-7">is-hoverable</code></a>
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
                <a class="dropdown-item">Add class <code class="is-size-7">is-active</code></a>
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

<h4 class="title is-family-primary"><strong>Sizes</strong></h4>
    
Dropdown can adapt to the size of their trigger component. Use the size modifier `is-size-[1–7]` to adjust the size of the arrow.

<br>

<div class="box is-well is-large is-marginless">
    <div class="dropdown is-hoverable is-size-5">
        <div class="dropdown-trigger">
            <div class="button is-medium">Medium button dropdown</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Just add class</a>
                <a class="dropdown-item">class <code class="is-size-7">is-size-5</code></a>
                <a class="dropdown-item">to the dropdown.</a>
            </div>
        </div>
    </div>
    <div class="dropdown is-hoverable is-size-7 is-pulled-right is-right">
        <div class="dropdown-trigger">
            <div class="button is-small is-inverted is-dark">Small text drp</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Just add class</a>
                <a class="dropdown-item">class <code class="is-size-7">is-size-7</code></a>
                <a class="dropdown-item">to the dropdown</a>
                <a class="dropdown-item">and class <code class="is-size-7">is-small</code></a>
                <a class="dropdown-item">to the button.</a>
            </div>
        </div>
    </div>
</div>

<hr class="is-visible is-size-1">

<h4 class="title is-family-primary"><strong>Tooltips</strong></h4>

Add class `has-arrow` to clearly indicate the element the dropdown is attached to. Use modifiers `is-centered` and `is-right` to change the alignement of the dropdown (and its arrow).

<br>

<strong>Create tooltips</strong> looking dropdown by wrapping any element in a `.dropdown-trigger` combined with `has-arrow`.

<hr>

<div class="box is-well is-large is-radiusless-b is-marginless">
    <div class="level">
        <div class="level-item">
            <div class="dropdown is-iconless is-hoverable has-arrow">
                <div class="dropdown-trigger">
                    <div class="button is-static is-dark is-paddingless">Tooltip-Style</div>
                </div>
                <div class="dropdown-menu">
                    <div class="box is-white is-floating is-size-6">This is actually a <code class="is-size-7">box</code> put inside the <code class="is-size-7">dropdown-menu</code> :)</div>
                </div>
            </div>
        </div>
        <div class="level-item ">
            <div class="dropdown is-iconless is-up is-centered is-hoverable has-arrow">
                <div class="dropdown-trigger has-text-centered">
                    <div class="button is-static is-paddingless is-fullwidth">Dropup!</div>
                </div>
                <div class="dropdown-menu">
                    <div class="box is-white has-background-primary-gradient is-floating is-size-6 has-text-white">
                        This one has both class <code class="is-size-7 has-text-white">is-up</code> and <code class="is-size-7 has-text-white">is-centered</code>
                    </div>
                </div>
            </div>
        </div>
        <div class="level-item">
            <div class="dropdown is-hoverable is-iconless is-centered has-arrow">
                <div class="dropdown-trigger">
                    <div class="button is-static is-paddingless is-fullwidth has-text-success">Colored</div>
                </div>
                <div class="dropdown-menu">
                    <div class="box is-white is-floating is-size-6 has-background-care-gradient has-text-white">
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
                    <div class="box is-small is-raised has-background-black has-text-white has-text-centered">
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

<h4 class="title is-family-primary"><strong>Searchable list</strong></h4>

You can add a search field to a dropdown. Use javascript to trigger the search and populate the dropdown list.

<hr>

<div class="box is-well is-radiusless-b is-large is-marginless">
    <div class="dropdown is-hoverable is-inverted">
        <div class="dropdown-trigger">
            <div class="button is-light">Choose a value</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content has-background-primary-gradient">
                <div class="dropdown-item is-paddingless">
                    <input class="input is-small has-text-white-bis has-background-white is-dimmed" type="text" placeholder="Search the list">
                </div>
                <hr class="is-marginless is-wavy">
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
                <div class="dropdown-item is-paddingless">
                    <input class="input is-small" type="text">
                </div>
                <hr class="is-marginless is-wavy">
                <a class="dropdown-item">..</a>
                <a class="dropdown-item">..</a>
                <a class="dropdown-item">..</a>
            </div>
        </div>
    </div>
<hr class="is-visible is-size-1">

<h4 class="title is-family-primary"><strong>Custom icon</strong></h4>

Use `is-iconless` if you want to remove the default arrow icon and replace it with your own (or not). Or `is-inverted` to make the arrow white.

<hr>

<div class="box is-well is-radiusless-b is-large is-marginless">

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
    <div class="dropdown is-hoverable is-inverted">
        <div class="dropdown-trigger">
            <div class="button is-dark">Inverted Dropdown</div>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="box is-size-7 has-background-primary-gradient">
                <div class="columns is-smaller is-multiline has-text-weight-medium">
                    <div class="column is-6">
                        <a class="dropdown-item has-text-centered has-background-white is-dimmed">
                            <svg class="icon has-fill-white is-size-4"><use xlink:href="media/bds-icons.min.svg#cross-g"></use></svg>
                            <br>
                            Hey
                        </a>
                    </div>
                    <div class="column is-6">
                        <a class="dropdown-item has-text-centered has-background-white is-dimmed">
                            <svg class="icon has-fill-white is-size-4"><use xlink:href="media/bds-icons.min.svg#reload-g"></use></svg>
                            <br>
                            Hey
                        </a>
                    </div>
                    <div class="column is-12">
                        <a class="dropdown-item">
                            <svg class="icon has-fill-white"><use xlink:href="media/bds-icons.min.svg#check-bold-g"></use></svg>
                            Approve
                        </a>
                    </div>
                    <div class="column is-12">
                        <a class="dropdown-item">
                            <svg class="icon has-fill-white"><use xlink:href="media/bds-icons.min.svg#trash-bold-g"></use></svg>
                            Trash
                        </a>
                    </div>
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
<a id="selectlist"></a>
<hr class="is-visible is-size-1">

<h4 class="title is-family-primary"><strong>Select list</strong></h4>

Create a system default select list just by wrapping it with a `.select` div.

<hr>

<div class="box is-well is-radiusless-b is-large is-marginless">
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

<div class="box is-well has-text-grey-dark">
    More possibilities on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/components/dropdown/" target="blank">Bulma / <strong>Dropdown</strong></a> &nbsp;and&nbsp; <a href="https://bulma.io/documentation/form/select/">Bulma / <strong>Select</strong></a>
</div>
