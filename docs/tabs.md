<h6 class="is-uppercase is-dimmed has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Tabs</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Tabs</span> are used to quickly navigate between views within the same context.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-raised is-marginless is-large is-radiusless-b">
    <div class="tabs is-fullwidth my-0">
        <ul class="is-backgroundless">
            <li><a>Pilot</a></li>
            <li><a>Care</a></li>
            <li><a>Claim</a></li>
            <li class="is-active"><a>Full Package</a></li>
        </ul>
    </div>
    <hr class="is-visible">
</div>

    <div class="tabs is-fullwidth">
        <ul>
            <li><a>Pilot</a></li>
            <li class="is-active"><a>Care</a></li>
            <li><a>Claim</a></li>
            <li><a>Full Package</a></li>
        </ul>
    </div>
<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Hanging Tabs</h3>

Hanging Tabs have their active line placed above each item.

<br>

<div class="box is-raised is-marginless is-radiusless-b" style="padding-top: 0;">
    <div class="tabs is-hanging">
        <ul class="is-borderless">
            <li><a>These</a></li>
            <li><a>Are</a></li>
            <li class="is-active"><a>Hanging</a></li>
            <li><a>Tabs</a></li>
            <li>
                <a class="dropdown is-hoverable is-iconless has-arrow">
                    <div class="dropdown-trigger">•••</div>
                    <div class="dropdown-menu is-paddingless">
                        <div class="box is-white is-floating">Hey!<div class="subtitle is-6 has-text-grey">Just to show you can also<br>put sub-menus here 😉</div></div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>

    <div class="tabs is-hanging">
        <ul class="is-borderless">
            <li><a>Pilot</a></li>
            <li class="is-active"><a>Care</a></li>
            <li><a>Plan</a></li>
            <li><a>Claim</a></li>
        </ul>
    </div>
<br>

?> You can also remove the tabs line by adding `is-borderless` to the ul tag.

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Toggle Tabs</h3>

Make your Tabs acts as Togglers between different states (or tabs) by combining `is-toggle`, `is-fullwidth`, `is-toggle-rounded` and `is-transparent` classes.

<br><br>

<div class="box is-raised is-large is-marginless is-radiusless-b">
    <div class="tabs is-toggle is-fullwidth">
        <ul>
            </li><li><a>Employer</a></li>
            <li class="is-active"><a>Insured</a>
            <li><a>Incapacity</a></li>
        </ul>
    </div>
    <hr>
    <div class="tabs is-toggle is-small is-toggle-rounded">
        <ul>
            <li class="is-active"><a>Insured</a>
            </li><li><a>Employer</a></li>
            <li><a>Incapacity</a></li>
        </ul>
    </div>
</div>

    <div class="tabs is-toggle is-fullwidth is-small is-toggle-rounded">
        <ul>
            <li class="is-active"><a>Insured</a>
            </li><li><a>Employer</a></li>
            <li><a>Incapacity</a></li>
        </ul>
    </div>
<hr>

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Animated toggle tabs</h3>

Animate the tab selector by adding `has-hr` and an `<hr>` tag after the last `<li></li>`.

<br>

<div class="box is-raised is-large is-marginless is-radiusless-b">
    <div class="tabs is-toggle is-fullwidth has-hr">
        <ul>
            <li id="js-tab-1" class="is-active"><a onclick="toggleTab(1)">Option A</a></li>
            <li id="js-tab-2" class=""><a onclick="toggleTab(2)">Option B</a></li>
            <li id="js-tab-3" class=""><a onclick="toggleTab(3)">Option C</a></li>
            <hr>
        </ul>
    </div>
    <hr>
    <div class="tabs is-toggle is-fullwidth has-hr is-small is-toggle-rounded">
        <ul>
            <li id="js-tab-4" class="is-active"><a onclick="toggleTab(4)">Option A</a></li>
            <li id="js-tab-5" class=""><a onclick="toggleTab(5)">Option B</a></li>
            <li id="js-tab-6" class=""><a onclick="toggleTab(6)">Option C</a></li>
            <hr>
        </ul>
    </div>
</div>

    <div class="tabs is-toggle is-fullwidth has-hr">
        <ul>
            <li class="is-active"><a>Option A</a></li>
            <li><a>Option B</a></li>
            <li><a>Option C</a></li>
            
            <hr> <!-- Don't forget that <hr> -->
        </ul>
    </div>
    
    <div class="tabs is-toggle is-fullwidth has-hr is-small is-toggle-rounded">
        <ul>
            <li><a> A </a></li>
            <li><a> B </a></li>
            <li><a> C </a></li>
            <hr>
        </ul>
    </div>

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Boxed Tabs</h3>

Give your Tabs a bolder look by using `is-boxed` in combinaision with a box component immediately after.

<br><br>

<div class="box is-well is-large is-marginless is-radiusless-b">
    <div class="tabs is-boxed is-marginless is-centered">
        <ul class="is-borderless">
            <li class="is-active"><a>Insured</a>
            </li><li><a>Employer</a></li>
            <li><a>Incapacity</a></li>
            <li><a>Certificates</a></li>
        </ul>
    </div>
    <div class="box is-raised is-large is-bordered has-text-grey-dark">
        Boxed content<br><i>Use Javascript for the tab switching behaviour.</i>
    </div>
</div>

    <div class="tabs is-boxed is-marginless">
        <ul class="is-borderless">
            <li><a>Employer</a></li>
            <li class="is-active"><a>Insured</a></li>
            <li><a>Incapacity</a></li>
            <li><a>Certificates</a></li>
        </ul>
    </div>
    <div class="box is-white is-floating">
        ...
    </div>
