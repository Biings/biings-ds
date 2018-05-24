<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold">Components</h6><h1 class="title is-1 has-text-weight-bold">Panel</h1>
<p class="subtitle is-5">A <span class="has-text-weight-semibold">panel</span> shows content divided into section. Panels can also allow the user to expand and collapse each section (javascript required).</p>

<hr class="is-large is-visible">

<h2 class="title is-4 has-text-weight-semibold">Usage</h2>

<div class="columns">
    <div class="column is-two-thirds">
        <nav class="panel">
            <div class="panel-tabs is-size-6 has-text-weight-semibold">
                <a class="is-active">All</a>
                <a>Bio</a>
                <a>Notes</a>
            </div> 
        <div class="panel-block">
            <div class="box is-small">Collapsed content</div>
        </div>
        <div class="panel-block">
            <div class="box is-small">
            <div class="title is-6 has-text-weight-semibold">Expanded content</div>
            <div class="subtitle is-6">Showing more,<br>and more content..</div>
            </div>
        </div>
        <div class="panel-block is-active">
            <div class="box is-small">Collapsed <strong class="has-text-primary">is-active</strong> content</div>
        </div>
        <a class="panel-block">
            <div class="box is-ground is-small">Collapsed only, can also be a link.</div>
        </a>
        </nav>
    </div>
</div>

<hr class="is-small">

```
<nav class="panel">
    <div class="panel-tabs">
        <a class="is-active">All</a>
        <a>Bio</a>
        <a>Notes</a>
    </div>
    <div class="panel-block">
        Content..
    </div>
    <div class="panel-block is-active">
        Content..
    </div>
    <a class="panel-block">
        Link content..
    </a>
</nav>
```