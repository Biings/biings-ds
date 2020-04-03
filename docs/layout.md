<h6 class="is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Layout</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Layout</span> is the page structure in which content and components live.
</p>
<hr class="is-visible is-size-3"><br>

<h2 class="title is-3 is-family-sans-serif">Container</h2>

Container is used to center your content horizontally. Alter the max width with the following modifiers:
<br><br>
<table class="table is-bordered">
  <tr>
      <td class="is-narrow"><code>container</code></td>
      <td>Max <strong>1248px</strong>, with breakpoints</td>
  </tr>
  <tr>
      <td class="is-narrow"><code>container</code> <code>is-desktop</code></td>
      <td>Max <strong>960px</strong> (the desktop breakpoint)</td>
  </tr>
  <tr>
      <td class="is-narrow"><code>container</code> <code>is-tablet</code></td>
      <td>Max <strong>769px</strong> (the tablet breakpoint)</td>
  </tr>
  <tr>
    <td class="is-narrow"><code>container</code> <code>is-modal</code></td>
    <td>Max <strong>560px</strong> (the modal max width)</td>
  </tr>
</table>

<br>
<a href="https://bulma.io/documentation/layout/container/" target="blank" class="box is-bordered">
    More possibilities on &nbsp;→&nbsp; <strong class="has-text-primary">Bulma / Container</strong>
</a>

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Section</h2>

Sections are used to handle **vertical spacing** as well as ensuring a minimum horizontal padding from the window. 
Add class `is-medium` or `is-large` to fruther increase the vertical space.

<hr class="is-small">

<div class="box has-background-white-bis is-marginless is-relaxed">
    <div class="section has-background-turquoise-light">
        Normal size
    </div>
    <div class="section is-medium has-background-cyan-lighter">
        Medium size
    </div>
</div>

    <div class="section is-large">
        Large size
    </div>
<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Columns</h2>

Columns are used to structure content horizontally. Biings DS uses a responsive fluid system that automatically scales up to 12 columns.

<hr class="is-small">

<div class="box has-background-white-bis is-marginless is-relaxed">
  <div class="columns has-text-white has-text-centered">
      <div class="column">
        <div class="message has-background-orange-light has-text-weight-semibold"><br>First<br><br></div>
      </div>
      <div class="column">
        <div class="message has-background-purple-light has-text-weight-semibold"><br>Second<br><br></div>
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
  
<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Level</h2>

Use **Level items** when you need to vertically center elements on one line.

<hr class="is-small">

<div class="box has-background-white-bis is-marginless is-relaxed">
  <div class="level has-text-white">
    <div class="level-left">
      <div class="level-item"><div class="message has-background-red has-text-weight-semibold"><br>&nbsp; &nbsp; Item 1 &nbsp; &nbsp;<br><br></div></div>
      <div class="level-item"><div class="message has-background-red-light has-text-weight-semibold"><br>&nbsp; &nbsp; Item 2 &nbsp; &nbsp;<br><br></div></div>
      <div class="level-item"><div class="message has-background-red-lighter has-text-weight-semibold"><br>&nbsp; &nbsp; Item 3 &nbsp; &nbsp;<br><br></div></div>
    </div>
    <div class="level-right">
        <div class="level-item"><div class="message has-background-green-lighter has-text-weight-semibold"><br>&nbsp; &nbsp; Item 4 &nbsp; &nbsp;<br><br></div></div>
        <div class="level-item"><div class="message has-background-green-light has-text-weight-semibold"><br>&nbsp; &nbsp; Item 5 &nbsp; &nbsp;<br><br></div></div>
        <div class="level-item"><div class="message has-background-green has-text-weight-semibold"><br>&nbsp; &nbsp; Item 6 &nbsp; &nbsp;<br><br></div></div>
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
          <div class="level-item">Item 6</div>
      </div>
    </div>
<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Spacer</h2>

Use a **Spacer** (or Divider) as a visual help for grouping related content together. It is used to define thematic changes in a layout.

<br>

?> By default a spacer uses negative space to create a seperation. Use the `is-visible` class to show a line division.

<br>

?> Increase or decrease the size of a spacer using the text size classes, ex : `is-size-1`, `is-size-7`, etc. Use class `is-thin` to completly remove the space surrounding the spacer.

<hr>

<div class="box has-background-white-bis is-large is-marginless">
    <hr class="is-visible">
    <br>
    <hr class="is-visible is-soft">
    <br>
    <hr class="is-visible is-wavy">
</div>
  
      <hr class="is-visible">
      <hr class="is-visible is-wavy">
  <br>
