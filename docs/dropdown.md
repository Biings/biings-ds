<h6 class="is-uppercase is-dimmed has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Dropdown</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    A <span class="has-text-weight-semibold">dropdown</span> presents either a list of actions or a tooltip with extra contextual information.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-raised is-radiusless-b is-medium is-marginless">
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
    <div class="dropdown is-active is-pulled-right is-right is-size-7 mt-1">
        <div class="dropdown-trigger">
            <div class="button is-small">Opened Dropdown</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Add class <code class="is-size-7">is-active</code></a>
                <a class="dropdown-item">top open the dropdown</a>
                <a class="dropdown-item has-text-danger has-color-onhover">
                    <svg class="icon has-fill-red"><use xlink:href="media/bds-icons.min.svg#trash-g"></use></svg>
                    It supports icons too!
                </a>
            </div>
        </div>
    </div>
</div>

    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="button is-secondary">Default Dropdown</div>
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
                <a class="dropdown-item has-text-danger has-color-onhover">
                    <icon/>>
                    It supports icons too!
                </a>
            </div>
        </div>
    </div>
<br>

?> Use the size modifiers `is-size-[1–7]` to adapt the size of the arrow in relation with the size of the trigger element.

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Pointing arrows</h3>

<ul class="list">
    <li>Add class <code>has-arrow</code> to clearly indicate the element the dropdown is attached to.</li>
    <li>Add class <code>is-right</code> and <code>is-up</code> to change the alignement of the dropdown (and its arrow).</li>
    <li>Add class <code>is-iconless</code> to remove the dropdown chevron from the trigger zone.</li>
    <li>Add class <code>is-inverted</code> when the trigger has a dark design.</li>
</ul>

<hr>

<div class="box is-raised is-medium is-radiusless-b is-marginless">
    <div class="level">
        <div class="level-item">
            <div class="dropdown is-inverted is-hoverable has-arrow">
                <div class="dropdown-trigger">
                    <div class="button is-dark">Dropdown button</div>
                </div>
                <div class="dropdown-menu">
                    <div class="box has-background-primary-dark has-text-white is-size-6">This is actually a <code>box</code> put inside the <code>dropdown-menu</code> 😊</div>
                </div>
            </div>
        </div>
        <div class="level-item ">
            <div class="dropdown is-iconless is-up is-right is-hoverable has-arrow">
                <div class="dropdown-trigger has-text-centered">
                    <div class="button is-dark">Dropup button</div>
                </div>
                <div class="dropdown-menu">
                    <div class="box is-floating is-size-6">
                        This one has both class <code>has-arrow</code> and <code>is-up</code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <!-- Blue tootlip, Right aligned and Up  -->
    <div class="dropdown is-hoverable is-iconless has-arrow is-right is-up">
        <div class="dropdown-trigger">
            <!-- Put anything you want here, it will trigger the dropdown -->
        </div>
        <div class="dropdown-menu">
            <!-- Your content -->
        </div>
    </div>
<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Shifted</h3>

Sometimes it isn't necessary to keep the dropdown trigger visible, or screen real estate is simply to limited for it to stay visible. In those situations add class `is-shifted` in order to display the dropdown list right under the cursor once openened.
<br><br>
Use `is-shifted-left` or `is-shifted-right` to manage positions and shift dropdowns to either side.

<hr>

<div class="box is-raised is-radiusless-b is-medium is-marginless">
    <div id="js-drpdwn1" class="dropdown is-shifted">
        <div class="dropdown-trigger">
            <div class="button is-secondary" onclick="openDropdown('1')">Dropdwn Shifted</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content" onclick="closeDropdown('1')">
                <div class="dropdown-item is-paddingless">
                    <input class="input is-small is-backgroundless is-borderless" type="text" placeholder="Search the list">
                </div>
                <div class="dropdown-divider my0 mx-2 mt-1"></div>
                <a class="dropdown-item">Show</a>
                <a class="dropdown-item">results</a>
                <a class="dropdown-item">here.</a>
                <a class="dropdown-item">This list</a>
                <a class="dropdown-item">can have</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">result</a>
                <a class="dropdown-item">items.</a>
            </div>
        </div>
    </div>
    <div id="js-drpdwn3" class="dropdown is-shifted is-shifted-right">
        <div class="dropdown-trigger">
            <div class="button is-secondary" onclick="openDropdown('3')">Dropdwn and right</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content" onclick="closeDropdown('3')">
                <div class="dropdown-item is-paddingless">
                    <input class="input is-small is-backgroundless is-borderless" type="text" placeholder="Search the list">
                </div>
                <div class="dropdown-divider my0 mx-2 mt-1"></div>
                <a class="dropdown-item">Show</a>
                <a class="dropdown-item">results</a>
                <a class="dropdown-item">here.</a>
                <a class="dropdown-item">This list</a>
                <a class="dropdown-item">can have</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">result</a>
                <a class="dropdown-item">items.</a>
            </div>
        </div>
    </div>
    <div id="js-drpdwn2" class="dropdown is-shifted is-up is-shifted-left is-pulled-right">
        <div class="dropdown-trigger">
            <div class="button is-secondary" onclick="openDropdown('2')">Drop-up and left</div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content" onclick="closeDropdown('2')">
                <div class="dropdown-item is-paddingless">
                    <input class="input is-small is-backgroundless is-borderless" type="text" placeholder="Search the list">
                </div>
                <div class="dropdown-divider my0 mx-2 mt-1"></div>
                <a class="dropdown-item">Show</a>
                <a class="dropdown-item">results</a>
                <a class="dropdown-item">here.</a>
                <a class="dropdown-item">This list</a>
                <a class="dropdown-item">can have</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">many</a>
                <a class="dropdown-item">result</a>
                <a class="dropdown-item">items.</a>
            </div>
        </div>
    </div>
</div>

    <div class="dropdown is-shifted is-up is-shifted-left">
        <div class="dropdown-trigger">
            <div class="button is-light">Drop-up and left</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <div class="dropdown-item is-paddingless">
                    <input class="input is-small is-backgroundless is-borderless" type="text">
                </div>
                <div class="dropdown-divider my0 mx-2 mt-1"/>
                <a class="dropdown-item">..</a>
                <a class="dropdown-item">..</a>
                <a class="dropdown-item">..</a>
            </div>
        </div>
    </div>
<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Nested</h3>

A dropdown can be nested inside another one in order to create sub-menus. Combine it with shifted dropdowns to manage positioning and avoid overlaps.

<br>

<div class="box is-raised is-medium is-marginless is-radiusless-b">
    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="button is-secondary">Nested Dropdowns</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Option A</a>
                <a class="dropdown-item">Option B</a>
                <a class="dropdown-item">Option C</a>
                <a class="dropdown-item">Option D</a>
                <div class="dropdown is-hoverable is-fullwidth is-shifted is-shifted-right is-size-7">
                    <div class="dropdown-trigger">
                        <a class="dropdown-item">Option E</a>
                    </div>
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <a class="dropdown-item">Sub-option A</a>
                            <a class="dropdown-item">Sub-option B</a>
                            <a class="dropdown-item">Sub-option C</a>
                            <a class="dropdown-item">Sub-option D</a>
                            <div class="dropdown is-hoverable is-fullwidth is-shifted is-shifted-left is-size-7">
                                <div class="dropdown-trigger">
                                    <a class="dropdown-item">Sub-option E</a>
                                </div>
                                <div class="dropdown-menu">
                                    <div class="dropdown-content">
                                        <a class="dropdown-item">Final-option A</a>
                                        <a class="dropdown-item">Final-option B</a>
                                        <a class="dropdown-item">Final-option C</a>
                                    </div>
                                </div>
                            </div>
                            <a class="dropdown-item">Sub-option F</a>
                            <a class="dropdown-item">Sub-option G</a>
                        </div>
                    </div>
                </div>
                <a class="dropdown-item">Option F</a>
                <a class="dropdown-item">Option G</a>
                <a class="dropdown-item">Option H</a>
            </div>
        </div>
    </div>
</div>

    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="button">Main menu</div>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item">Option A</a>
                <a class="dropdown-item">Option B</a>
                <a class="dropdown-item">Option C</a>
                <div class="dropdown is-hoverable is-fullwidth is-shifted is-shifted-left is-size-7">
                    <div class="dropdown-trigger">
                        <a class="dropdown-item">Option D</a>
                    </div>
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <a class="dropdown-item">Sub-option A</a>
                            <a class="dropdown-item">Sub-option B</a>
                            <a class="dropdown-item">Sub-option C</a>
                            <a class="dropdown-item">Sub-option D</a>
                        </div>
                    </div>
                </div>
                <a class="dropdown-item">Option E</a>
                <a class="dropdown-item">Option F</a>
                <a class="dropdown-item">Option G</a>
            </div>
        </div>
    </div>
<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Dropdown menu</h3>

Combine dropdowns with <a href="#/menu" class="is-underlined">menus</a> when your dropdown needs to be more than just a list.

<hr>

<div class="box is-raised is-radiusless-b is-large is-marginless">
    <div class="dropdown is-hoverable is-inverted">
        <div class="dropdown-trigger">
            <div class="button is-primary">Action menu</div>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content has-background-primary-gradient">
                <div class="menu is-small is-inverted">
                    <ul class="menu-list pt-1">
                        <li class="columns is-variable is-1 mx-0">
                            <div class="column is-6">
                                <a class="is-passive has-text-centered">
                                    <svg class="icon has-fill-white is-size-4 mx-0"><use xlink:href="media/bds-icons.min.svg#cross-g"></use></svg>
                                    <br>
                                    Cancel
                                </a>
                            </div>
                            <div class="column is-6">
                                <a class="is-passive has-text-centered">
                                    <svg class="icon has-fill-white is-size-4"><use xlink:href="media/bds-icons.min.svg#reload-g"></use></svg>
                                    Reload
                                </a>
                            </div>
                        </li>
                    </ul>
                    <p class="menu-label">Other actions</p>
                    <ul class="menu-list">
                        <li>
                            <a>
                                <svg class="icon has-fill-white"><use xlink:href="media/bds-icons.min.svg#check-bold-g"></use></svg>
                                Check
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg class="icon has-fill-white"><use xlink:href="media/bds-icons.min.svg#cloud-off-bold-g"></use></svg>
                                Disconnect
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg class="icon has-fill-white"><use xlink:href="media/bds-icons.min.svg#trash-bold-g"></use></svg>
                                Trash
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    &nbsp;
    <div class="dropdown is-hoverable is-inverted is-up has-arrow">
        <div class="dropdown-trigger">
            <div class="button is-primary">Menu dropup</div>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content box is-small is-size-7 has-background-primary-dark">
                <div class="menu is-small is-inverted">
                    <ul class="menu-list">
                        <li><a class="is-active">Biodata</a></li>
                        <li><a>Timelines</a></li>
                        <li><a>Follow-ups</a></li>
                    </ul>
                    <p class="menu-label">Coverages</p>
                    <ul class="menu-list">
                        <li>
                            <ul>
                                <li><a>Illness</a></li>
                                <li><a>Pro</a></li>
                                <li><a class="is-passive">Other</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>

    <div class="dropdown is-inverted">
        <div class="dropdown-trigger">
            <!-- Some trigger -->
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="menu is-small is-inverted">
                    <ul class="menu-list">
                        <li class="columns is-variable is-1 mx-0">
                            <div class="column is-6">
                                <a class="is-passive has-text-centered">
                                    <!-- Icon -->
                                    <!-- Text -->
                                </a>
                            </div>
                            <div class="column is-6">
                                <a class="is-passive has-text-centered">
                                    <!-- Icon -->
                                    <!-- Text -->
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
<a id="selectlist"></a>
<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Select list</h3>

Create a system default select list just by wrapping it with a `.select` div. Modifiers like `is-small`, `is-medium`, `is-info`, etc are also supported.

<br>

?> A default value styling can be attaigned with the `required` attribute along with the first `<option>` having `disabled selected hidden` attributes (see example below).

<hr>

<div class="box is-raised is-radiusless-b is-large is-marginless">
    <div class="select is-small">
        <select class="button is-light">
            <option value="">Small</option>
            <option value="">Select Button</option>
            <option value="">List</option>
        </select>
    </div> &nbsp; &nbsp;
    <div class="select">
        <select required>
            <option value="" disabled selected hidden>Default</option>
            <option value="">System</option>
            <option value="">Select</option>
            <option value="">List</option>
        </select>
    </div> &nbsp; &nbsp;
    <div class="select is-medium is-warning">
        <select disabled>
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

    // Select on a button
    <div class="select is-small">
        <select class="button is-light" required>
            <option value="" disabled selected hidden>Default</option>
            <option value="1">System</option>
            <option value="2">Select</option>
            <option value="3">List</option>
        </select>
    </div>
    // Medium select
    <div class="select is-medium is-info">
        <select required>
            <option value="" disabled selected hidden>Default</option>
            <option value="1">System</option>
            <option value="2">Select</option>
            <option value="3">List</option>
        </select>
    </div>
<br>

<hr><br>

<div class="message is-block is-info">
    More possibilities on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/components/dropdown/" class="is-underlined" target="blank">Bulma / <strong>Dropdown</strong></a> &nbsp;and&nbsp; <a href="https://bulma.io/documentation/form/select/" class="is-underlined">Bulma / <strong>Select</strong></a>
</div>
