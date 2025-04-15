<h6 class="is-uppercase is-dimmed has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Tabs</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Tabs</span> are used to quickly navigate between views within the same context.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-raised is-marginless is-large is-radiusless-b">
    <div class="tabs is-fullwidh my-0 is-small">
        <ul>
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
    <hr class="is-visible">
<hr class="is-visible is-size-1">

<h3 class="title is-family-primary has-text-weight-bold">Toggle Tabs</h3>

Make your Tabs acts as Togglers between different states (or tabs) by combining `is-toggle`, `is-small`, `is-fullwidth` and `is-toggle-rounded` and `is-transparent`.
<br><br>
Toggle tabs can also appear on a horizontal line, just add class `has-hr`.

<br><br>

<div class="box is-bordered is-large is-marginless is-radiusless-b">
    <div class="tabs is-toggle">
        <ul>
            <li><a>Let</a></li>
            <li><a>Your</a></li>
            <li><a>Customers</a></li>
            <li class="is-active"><a>Outgrow</a></li>
            <li><a>You</a></li>
        </ul>
    </div>
    <hr class="my-4">
    <div class="tabs is-toggle has-hr">
        <ul>
            <li id="js-tab-1"><a onclick="toggleTab(1)">All</a></li>
            <li id="js-tab-2"><a onclick="toggleTab(2)">Toggle Tabs</a></li>
            <li id="js-tab-3"><a onclick="toggleTab(3)">On a</a></li>
            <li id="js-tab-4" class="is-active"><a onclick="toggleTab(4)">Horizontal</a></li>
            <li id="js-tab-5"><a onclick="toggleTab(5)">Background Line (HR)</a></li>
        </ul>
    </div>
</div>

    <div class="tabs is-toggle is-fullwidth is-small is-toggle-rounded">
        <ul>
            <li class="is-active"><a>Insured</a></li>
            <li><a>Employer</a></li>
            <li><a>Incapacity</a></li>
        </ul>
    </div>
<hr>

<hr class="is-visible is-size-1">

<h3 class="title is-family-primary has-text-weight-bold">Boxed Tabs</h3>

Give your Tabs a bolder look by using `is-boxed` in combinaision with a box component immediately after.

<br><br>

<div class="box is-bordered is-large is-marginless is-radiusless-b">
    <div class="tabs is-boxed is-centered">
        <ul>
            <li id="js-tab-11" class="is-active"><a onclick="toggleTab(11)">Insured</a></li>
            <li id="js-tab-12"><a onclick="toggleTab(12)">Employer</a></li>
            <li id="js-tab-13"><a onclick="toggleTab(13)">Incapacity</a></li>
            <li id="js-tab-14"><a onclick="toggleTab(14)">Certificates</a></li>
        </ul>
    </div>
</div>

    <div class="tabs is-boxed">
        <ul>
            <li><a>Employer</a></li>
            <li class="is-active"><a>Insured</a></li>
            <li><a>Incapacity</a></li>
            <li><a>Certificates</a></li>
        </ul>
    </div>
