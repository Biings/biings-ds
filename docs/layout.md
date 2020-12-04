<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Foundation</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Layout</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Layout</span> is the page structure in which content and components live.
</p>
<hr class="is-visible is-size-3"><br>

<h4 class="title is-family-primary"><strong>Container</strong></h4>

Container is used to center your content horizontally. Alter the max width with the following modifiers:
<br><br>
<table class="table is-bordered is-hoverable">
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
    <td>Max <strong>528px</strong> (the modal max width)</td>
  </tr>
</table>

<br>
<a href="https://bulma.io/documentation/layout/container/" target="blank" class="box is-well has-text-grey">
    More possibilities on &nbsp;→&nbsp; <strong class="has-text-primary">Bulma / Container</strong>
</a>

<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Section</strong></h4>

Sections are used to handle **vertical spacing** as well as ensuring a minimum horizontal padding from the window. 
Add class `is-medium` or `is-large` to further increase the vertical space.

<hr class="is-small">

<div class="box is-raised is-medium is-marginless is-medium is-radiusless-b">
    <div class="section has-background-blue-lighter">
        Normal size
    </div>
    <div class="section is-medium has-background-turquoise-lighter">
        Medium size
    </div>
</div>

    <div class="section is-large">
        Large size
    </div>
<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Columns</strong></h4>

Columns are used to structure content horizontally. Biings DS uses a responsive fluid system that automatically scales up to 12 columns.

<hr class="is-small">

<div class="box is-raised is-marginless is-medium is-radiusless-b">
  <div class="columns is-multiline is-small has-text-white has-text-centered">
      <div class="column is-4">
        <div class="message is-twisted has-background-orange-light has-text-weight-semibold"><br>First<br><br></div>
      </div>
      <div class="column is-4">
        <div class="message is-twisted-bis has-background-purple-light has-text-weight-semibold"><br>Second<br><br></div>
      </div>
      <div class="column is-4">
        <div class="message is-twisted-ter has-background-turquoise has-text-weight-semibold"><br>Third<br><br></div>
      </div>
      <div class="column is-4">
        <div class="message is-twisted-quater has-background-cyan has-text-weight-semibold"><br>Fourth<br><br></div>
      </div>
      <div class="column is-6 is-twisted">
        <div class="message has-background-blue-light has-text-weight-semibold"><br>Fifth<br><br></div>
      </div>
      <div class="column is-3 is-twisted">
        <div class="message has-background-care-light has-text-weight-semibold"><br>Sixth<br><br></div>
      </div>
      <div class="column is-3 is-twisted-bis">
        <div class="message has-background-yellow-light has-text-weight-semibold"><br>Seventh<br><br></div>
      </div>
    </div>
  </div>
  
      <div class="columns is-multiline is-small">
        <div class="column is-4">First</div>
        <div class="column is-4">Second</div>
        <div class="column is-4">Third</div>
        <div class="column is-4">Fourth</div>
        <div class="column is-6">Fifth</div>
        <div class="column is-3">Sixth</div>
        <div class="column is-3">Seventh</div>
      </div>
<br>

?> Column gap can be adjusted with modifier `is-gapless`, `is-smaller`, `is-small`, `is-large`.

<br>
<a href="https://bulma.io/documentation/columns/" target="blank" class="box is-raised has-text-grey">
    More possibilities on &nbsp;→&nbsp; <strong class="has-text-primary">Bulma / Columns</strong>
</a>
  
<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Level</strong></h4>

Use **Level items** when you need to vertically center elements on one line.

<hr class="is-small">

<div class="box is-raised is-marginless is-medium is-radiusless-b">
  <div class="level has-text-white">
    <div class="level-left">
      <div class="level-item"><div class="message has-background-red has-text-weight-semibold"><br>Item 1<br><br></div></div>
      <div class="level-item"><div class="message has-background-red-light has-text-weight-semibold"><br>Item 2<br><br></div></div>
      <div class="level-item"><div class="message has-background-red-lighter has-text-weight-semibold"><br>Item 3<br><br></div></div>
    </div>
    <div class="level-right">
        <div class="level-item"><div class="message has-background-green-lighter has-text-weight-semibold"><br>Item 4<br><br></div></div>
        <div class="level-item"><div class="message has-background-green-light has-text-weight-semibold"><br>Item 5<br><br></div></div>
        <div class="level-item"><div class="message has-background-green has-text-weight-semibold"><br>Item 6<br><br></div></div>
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

<h4 class="title is-family-primary"><strong>HR / Spacer</strong></h4>

Use a **Spacer** (or horizontal rule) as a visual help to seperate groups of elements from each other. Use it to define thematic changes in a layout.

<br>By default negative space is used to create a seperation. Use the `is-visible` class to show a line division.

<br>

?> Use <a href="#/modifiers" class="is-underlined">Spacing modifiers</a> to alter the HR margins.

<hr>

<div class="box is-raised is-large is-marginless is-radiusless-b">
    <hr class="is-visible">
    <br>
    <hr class="is-visible is-soft">
    <br>
    <hr class="is-visible is-wavy">
    <br>
    <hr class="is-visible has-background-primary-care-gradient">
    <br>
    <hr class="is-visible has-background-primary-claim-gradient">
</div>
  
      <hr class="is-visible">
      <hr class="is-visible is-soft">
      <hr class="is-visible is-wavy">
      <hr class="is-visible has-background-primary-care-gradient">
      <hr class="is-visible has-background-primary-claim-gradient">
  <br>
