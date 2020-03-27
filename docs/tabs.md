<h6 class="is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Tabs</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Tabs</span> are used to quickly navigate between views within the same context.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-well is-marginless is-large">
    <div class="tabs">
        <ul>
            <li><a>Pilot</a></li>
            <li class="is-active"><a>Care</a></li>
            <li><a>Plan</a></li>
            <li><a>Claim</a></li>
        </ul>
    </div>
</div>

    <div class="tabs">
        <ul>
            <li><a>Pilot</a></li>
            <li class="is-active"><a>Care</a></li>
            <li><a>Plan</a></li>
            <li><a>Claim</a></li>
        </ul>
    </div>
<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Hanging Tabs</h2>

Hanging Tabs have their active line placed above each item.

<br>

<div class="box is-well is-marginless is-medium" style="padding-top: 0;">
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
                        <div class="box is-white is-floating">Hey!<br><span class="is-size-7 has-text-grey">Just to show you can also<br>put sub-menus here 😉</span></div>
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

<h2 class="title is-3 is-family-sans-serif">Boxed Tabs</h2>

Give your Tabs a bolder look by using `is-boxed` in combinaision with a box component immediately after.

<br><br>

<div class="box is-well is-large is-marginless">
    <div class="tabs is-boxed is-marginless">
        <ul>
            <li><a>Employer</a></li>
            <li class="is-active"><a>Insured</a></li>
            <li><a>Incapacity</a></li>
            <li><a>Certificates</a></li>
        </ul>
    </div>
    <div class="box is-white is-large is-floating has-text-grey-dark">
        Boxed content<br><i>Use Javascript for the tab switching behaviour.</i>
    </div>
</div>

    <div class="tabs is-boxed is-marginless">
        <ul>
            <li><a>Employer</a></li>
            <li class="is-active"><a>Insured</a></li>
            <li><a>Incapacity</a></li>
            <li><a>Certificates</a></li>
        </ul>
    </div>
    <div class="box is-white is-floating">
        ...
    </div>
