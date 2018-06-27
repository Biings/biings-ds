<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold">Component</h6><h1 class="title is-1">Dropdown</h1>
<p class="subtitle is-5">
    The <span class="has-text-weight-semibold">dropdown</span> allow users to choose from a list of different actions or choices.
</p>

<hr class="is-large is-visible">

<h2 class="title is-4 has-text-weight-semibold">Basic usage</h2>

<div class="box is-well is-relaxed">

    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
        <div class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            Dropdown &nbsp;&nbsp; <svg class="icon"><use xlink:href="media/bds-icons.min.svg#calendar"></use></svg>&nbsp;
        </div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a href="#" class="dropdown-item">This Works!</a>
                <a class="dropdown-item">Without</a>
                <a href="#" class="dropdown-item is-active">Any</a>
                <a href="#" class="dropdown-item">Javascript &nbsp;😉</a>
            </div>
        </div>
    </div>

</div>