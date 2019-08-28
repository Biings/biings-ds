<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Layout</h1>
<hr class="is-visible">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Layout</span> is the page structure in which content and components live.
</p>

<hr class="is-visible"><br>

<h2 class="title is-4 is-family-sans-serif">Section</h2>

Sections are used to handle **vertical spacing**.  
Add class `is-medium` or `is-large` to fruther increase the vertical space.

<hr class="is-small">

<div class="box is-well is-marginless is-relaxed">
    <div class="section has-background-grey-lighter">
        Normal size
    </div>
    <div class="section is-medium has-background-grey-light">
        Medium size
    </div>
</div>

    <div class="section is-large">
        Large size
    </div>
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

<hr class="is-large is-visible">

<h2 class="title is-4 is-family-sans-serif">Spacer</h2>

Use a **Spacer** – aka HR or Divider – as a visual help for grouping related content together. It is used to define thematic changes in a layout.

<hr class="is-small">

<div class="box is-well is-large is-marginless">
    <hr class="is-visible">
</div>
  
      <hr class="is-visible">
  <br>
  
?> By default a spacer uses negative space to create a seperation. Use the `is-visible` class to show an explicit line division (divider).
You can increase or decrease the size of a spacer using `is-thin`, `is-smaller`, `is-small` or `is-large`.
