<h6 class="subtitle is-5 has-text-grey">Component</h6><h1 class="title is-1 has-text-weight-bold">Layout</h1>
<p class="subtitle is-5">
    <span class="has-text-weight-semibold">Layout</span> is the page structure in which content and components live.
</p>

<hr class="is-large is-visible">

<div class="columns has-text-centered">
  <div class="column is-4"><img src="media/layout_1.png"><a href="#/layout?id=basic">Basic</a></div>
  <div class="column is-4"><img src="media/layout_2.png"><a href="#/layout?id=tabs">with Tabs</a></div>
  <div class="column is-4"><img src="media/layout_3.png"><a href="#/layout?id=menu">with Side menu</a></div>
</div>

!> Layout is used only in a Biings Desktop or Tablet app.

<a id="basic"></a>
<hr class="is-large is-visible">

<h2 class="title is-4">Basic</h2>

Both `.page-header` and `.page-content` are optional. They are used <u>together or not at all</u>.

<hr class="is-small">

<div class="box is-well is-marginless"><img src="media/layout_1.png"></div>

    <div class="layout">
      <div class="nav">...</div>
      <div class="content">
        <div class="page">
          <div class="page-header">...</div> // optional
          <div class="page-content">...</div> // optional
        </div>
      </div>
    </div>

<a id="tabs"></a>
<hr class="is-large is-visible">

<h2 class="title is-4">With Tabs</h2>

The page header acts as a menu with tabs.<br>Neither `.page-header` or `.page-content` should be used with tabs.

<hr class="is-small">

<div class="box is-well is-marginless"><img src="media/layout_2.png"></div>

    <div class="layout">
      <div class="nav">...</div>
      <div class="content">
        <div class="tabs-menu">...</div>
        <div class="page">...</div>
      </div>
    </div>

<a id="menu"></a>
<hr class="is-large is-visible">

<h2 class="title is-4">With Side-menu</h2>
Same as the basic layout but with a side menu on the left.

<hr class="is-small">

<div class="box is-well is-marginless"><img src="media/layout_3.png"></div>

    <div class="layout">
      <div class="nav">...</div>
      <div class="content">
        <div class="side-menu">
          ...
        </div>
        <div class="page">
          ...
        </div>
      </div>
    </div>

<hr>

?> Build any kind of page by combining <strong>Layout</strong> with → <a href="#/column">**Columns**</a>
