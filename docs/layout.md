<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-serif is-1 has-text-weight-bold">Layout</h1>
<p class="subtitle is-5">
    <span class="has-text-weight-semibold">Layout</span> is the page structure in which content and components live.
</p>

<hr class="is-large is-visible">

<h2 class="title is-4 is-family-sans-serif">Columns</h2>

Columns are used to structure content horizontally. Biings DS uses a responsive fluid system that automatically scales up to 12 columns.

<hr class="is-small">

<div class="box is-well is-marginless is-relaxed">
  <div class="columns has-text-white has-text-centered">
      <div class="column">
        <div class="message has-background-orange-light has-text-weight-semibold"><br>First<br><br></div>
      </div>
      <div class="column">
        <div class="message has-background-pink-light has-text-weight-semibold"><br>Second<br><br></div>
      </div>
      <div class="column">
        <div class="message has-background-turquoise has-text-weight-semibold"><br>Third<br><br></div>
      </div>
      <div class="column">
        <div class="message has-background-cyan has-text-weight-semibold"><br>Fourth<br><br></div>
      </div>
    </div>
  </div>
  
      <div class="columns">
        <div class="column">First</div>
        <div class="column">Second</div>
        <div class="column">Third</div>
        <div class="column">Fourth</div>
      </div>

<br>
<a href="https://bulma.io/documentation/columns/" target="blank" class="box is-bordered">
    More possibilities on &nbsp;→&nbsp; <strong class="has-text-primary">Bulma / Columns</strong>
</a>
  
<hr class="is-large is-visible">
<h2 class="title is-4 is-family-sans-serif">Level</h2>

Use **Level items** when you need to vertically center elements on one line.

<hr class="is-small">

<div class="box is-well is-marginless is-relaxed">
  <div class="level has-text-white">
    <div class="level-left">
      <div class="level-item"><div class="message has-background-red has-text-weight-semibold"><br>&nbsp; &nbsp; Item 1 &nbsp; &nbsp;<br><br></div></div>
      <div class="level-item"><div class="message has-background-red-light has-text-weight-semibold"><br>&nbsp; &nbsp; Item 2 &nbsp; &nbsp;<br><br></div></div>
      <div class="level-item"><div class="message has-background-red-lighter has-text-weight-semibold"><br>&nbsp; &nbsp; Item 3 &nbsp; &nbsp;<br><br></div></div>
    </div>
    <div class="level-right">
        <div class="level-item"><div class="message has-background-green-light has-text-weight-semibold"><br>&nbsp; &nbsp; Item 4 &nbsp; &nbsp;<br><br></div></div>
        <div class="level-item"><div class="message has-background-green has-text-weight-semibold"><br>&nbsp; &nbsp; Item 5 &nbsp; &nbsp;<br><br></div></div>
    </div>
  </div>
</div>

    <div class="level">
      <div class="level-left">
        <div class="level-item">Item 1</div>
        <div class="level-item">Item 2</div>
        <div class="level-item">Item 3</div>
      </div>
      <div class="level-right">
          <div class="level-item">Item 4</div>
          <div class="level-item">Item 5</div>
      </div>
    </div>

<br>
<a href="https://bulma.io/documentation/layout/level/" target="blank" class="box is-bordered">
    More possibilities on &nbsp;→&nbsp; <strong class="has-text-primary">Bulma / Level</strong></a>
</div>

<hr class="is-large is-visible">
<h2 class="title is-4 is-family-sans-serif">Content Layout</h2>

<div class="columns has-text-centered">
  <div class="column is-4"><img src="media/layout_1.png"><a href="#/layout?id=basic">Basic</a></div>
  <div class="column is-4"><img src="media/layout_2.png"><a href="#/layout?id=page">Page</a></div>
  <div class="column is-4"><img src="media/layout_3.png"><a href="#/layout?id=menu">Page with Menu</a></div>
</div>

!> **Content Layout** is used only in a Biings Desktop or Tablet app.

<hr class="is-small">

<a id="basic"></a>

<h2 class="title is-5">Basic</h2>

A **Basic** layout has no margin or padding and allows the content to stretch and fill the entire stage.

<hr class="is-small">

<div class="box is-well is-marginless"><img src="media/layout_1.png"></div>

    <div class="layout">
      <div class="nav">...</div>

      <div class="content">
          ...
      </div>

    </div>
<a id="page"></a>
<hr>

<h2 class="title is-5">Page</h2>

A **Page layout** has responsive padded content. Add `.is-centered` for fixed width centered content.

<hr class="is-small">

<div class="box is-well is-marginless"><img src="media/layout_2.png"></div>

    <div class="layout">
      <div class="nav">...</div>

      <div class="content">
        <div class="page">
          ...
        </div>
      </div>

    </div>
<a id="menu"></a>

<hr>
<h2 class="title is-5">Page with Menu</h2>
Similar to the Page layout with an additional **Side-menu** for quick navigation.

<hr class="is-small">

<div class="box is-well is-marginless"><img src="media/layout_3.png"></div>

    <div class="layout">
      <div class="nav">...</div>

      <div class="content has-side-menu">
        <div class="side-menu">
          ...
        </div>
        <div class="page">
          ...
        </div>
      </div>

    </div>
