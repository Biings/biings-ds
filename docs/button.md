<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Button / Link</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Buttons</span> and <span class="has-text-weight-semibold">Links</span> allow users to take actions, make choices or navigate within a product or website.
</p>
<hr class="is-visible is-size-3"><br>

<h2 class="title is-3 is-family-sans-serif">Defaults</h2>

<table class="table is-fullwidth is-bordered">
    <tbody>
        <tr>
            <td class="has-text-centered"><br><div class="button">Button</div><br><br></td>
            <td class="has-text-centered"><hr><code>button</code></td>
            <td><hr>For standard controls, like Dropdowns.</td>
        </tr>
        <tr>
            <td class="has-text-centered"><hr class="is-smaller"><div class="button is-primary">Primary</div><br><br></td>
            <td class="has-text-centered"><hr><code>is-primary</code></td>
            <td><hr>For primary actions, like "Save".</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-text">Text</div><br><br></td>
            <td class="has-text-centered"><hr><code>is-text</code></td>
            <td><hr>For secondary actions, like "Cancel".</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-dark">Dark</div><br><br></td>
            <td class="has-text-centered"><hr><code>is-dark</code></td>
            <td><hr>Dark looking button.</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-primary is-light">Light</div><br><br></td>
            <td class="has-text-centered"><hr><code>is-light<br>(is-[color]) </code></td>
            <td><hr>Light looking button (applicable to any color button).</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-success">Success</div><br><br></td>
            <td class="has-text-centered"><hr><code>is-success</code></td>
            <td><hr>For success related things, like "Win a price!".</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-info">Info</div><br><br></td>
            <td class="has-text-centered"><hr><code>is-info</code></td>
            <td><hr>For informational related links, learn "Learn more".</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-warning">Warning</div><br><br></td>
            <td class="has-text-centered"><hr><code>is-warning</code></td>
            <td><hr>For important actions or links, like "Send a claim".</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-danger">Dangerous</div><br><br></td>
            <td class="has-text-centered"><hr><code>is-danger</code></td>
            <td><hr>For dangerous actions, like "Delete".</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-static">Static</div><br><br></td>
            <td class="has-text-centered"><hr><code>is-static</code></td>
            <td><hr>A non-interactive button. Typically used between buttons, like for the "or".</td>
        </tr>
    </tbody>
</table>

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Sizes, states and shapes</h2>

<hr>

<table class="table is-fullwidth is-bordered">
    <tbody>
        <tr>
            <td class="has-text-centered"><br><div class="button is-light is-small">Sml</div><br><br></td>
            <td><hr><code>is-small</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-light is-medium">Med</div><br><br></td>
            <td><hr><code>is-medium</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-light is-large">Lrg</div><br><br></td>
            <td><hr><code>is-large</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-primary is-glowing">Glowing</div><br><br></td>
            <td><hr><code>is-glowing</code> + <code>is-[primary,danger or success]</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-primary is-outlined">Outlined</div><br><br></td>
            <td><hr><code>is-outlined</code> + a color</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-light is-beefy">Beefy</div><br><br></td>
            <td><hr><code>is-beefy</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-light is-rounded">Rounded</div><br><br></td>
            <td><hr><code>is-rounded</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><button class="button is-light is-loading">Loading</button><br><br></td>
            <td><hr><code>is-loading</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-light" disabled>Disabled</div><br><br></td>
            <td><hr><code>disabled</code> attribute</td>
        </tr>
    </tbody>
</table>

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Clicked Effect</h2>

Using the `<button>` tag with the `button` class will add a remanent effect once the button is clicked.

<hr>

<div class="box is-well is-marginless is-large">
    <button class="button is-medium">Click Effect</button><div class="button is-static">or</div><div class="button is-text">No Click Effect</div>
</div>

    <button class="button">Button</button>
    <div class="button is-static">or</div>
    <div class="button is-text">No Click Effect</div>
<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Button Group</h2>

<div class="box is-well is-marginless is-large">
    <div class="field has-addons">
        <p class="control">
            <a class="button">Yes</a>
        </p>
        <p class="control">
            <a class="button">No</a>
        </p>
        <p class="control">
            <a class="button has-text-primary">Maybe</a>
        </p>
    </div>
</div>

    <div class="field has-addons">
        <p class="control">
            <a class="button">Yes</a>
        </p>
        <p class="control">
            <a class="button">No</a>
        </p>
        <p class="control">
            <a class="button has-text-primary">Maybe</a>
        </p>
    </div>
<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Links</h2>

Use a Link instead of a button when navigating or when the action is tertiary.

<hr>

<div class="box is-well is-marginless is-large">
    <div class="level">
        <div class="level-item"><a href="">Regular</a></div>
        <div class="level-item"><a href="" class="is-underlined is-regular">Regular Underlined</a></div>
        <div class="level-item"><a href="" class="is-ghost">Ghost link</a></div>
        <div class="level-item"><a href="" class="is-underlined">Underlined</a></div>
        <div class="level-item"><a href="" class="is-ghost is-underlined">Underlined Ghost</a></div>
    </div>
</div>

    <a>Regular Link</a>
    <a class="is-underlined is-regular">Regular Underlined</a>
    <a class="is-ghost">Ghost</a>
    <a class="is-underlined">Underlined</a>
    <a class="is-ghost is-underlined">Underlined Ghost</a>
