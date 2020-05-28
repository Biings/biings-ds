<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Button & Link</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    <span class="has-text-weight-semibold">Buttons</span> and <span class="has-text-weight-semibold">Links</span> allow users to take actions, make choices or navigate within a product or website.
</p>
<hr class="is-visible is-size-4"><br>

<h4 class="title is-family-primary"><strong>Button defaults</strong></h4>

<br>

<div class="table-container">
    <table class="table is-fullwidth is-bordered">
        <tbody>
            <tr>
                <td class="has-text-centered" style="width: 20%; min-width: 12rem;"><br><div class="button">Button</div><br><br></td>
                <td class="has-text-centered" style="width: 15%; min-width: 10rem;"><hr><code>button</code></td>
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
                <td class="has-text-centered"><br><code>is-light<br>(is-[color]) </code></td>
                <td><br>Light looking button (applicable to any color button).</td>
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
                <td class="has-text-centered"><br><code>is-static</code></td>
                <td><br>A non-interactive button. Typically used between buttons, like for the "or".</td>
            </tr>
        </tbody>
    </table>
</div>

<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Link</strong></h4>

Use a Link instead of a button when navigating or when the action is not primary.

<br>

<table class="table is-bordered">
    <tbody>
        <tr>
            <td class="has-text-centered"><a>Regular</a></td>
            <td><code>&lt;a></code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><a class="is-ghost">Ghost</a></td class="has-text-centered">
            <td><code>is-ghost</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><a class="is-underlined">Underlined</a></td class="has-text-centered">
            <td><code>is-underlined</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><a class="is-regular is-underlined">Regular Underlined</a></td class="has-text-centered">
            <td><code>is-underlined</code> + <code>is-regular</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><a class="is-ghost is-underlined">Underlined Ghost</a></td class="has-text-centered">
            <td><code>is-ghost</code> + <code>is-underlined</code></td>
        </tr>
    </tbody>
</table>


<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Sizes, states and shapes</strong></h4>

<hr>

<table class="table is-bordered">
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
            <td class="has-text-centered"><br><div class="button is-primary is-shadowed">Shadowed</div><br><br></td>
            <td><hr><code>is-shadowed</code></td>
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
            <td class="has-text-centered"><br><div class="button is-light is-square">Sq</div><br><br></td>
            <td><hr><code>is-square</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-light is-loading is-indeterminate">Loading</div><br><br></td>
            <td><hr><code>is-loading</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-light" disabled>Disabled</div><br><br></td>
            <td><hr><code>disabled</code> attribute</td>
        </tr>
        <tr>
            <td class="has-text-centered has-background-black-ter"><br><div class="button is-inverted is-outlined is-primary">Inverted</div><br><br></td>
            <td><hr><code>is-inverted is-primary is-outlined</code> attribute</td>
        </tr>
    </tbody>
</table>

<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Icon Button</strong></h4>

Buttons can be enhanced by adding an icon or be an icon button.  
Simply insert an svg with class `.icon` and wrap the optional text in a `span`.

<br>

<div class="box is-well is-large is-radiusless-b is-marginless">
    <div class="level">
        <div class="level-item">
            <div class="button">
                <svg class="icon"><use xlink:href="media/bds-icons.min.svg#today-g"></use></svg>
                <span>Today!</span>
            </div>
        </div>
        <div class="level-item">
            <div class="button is-square">
                <svg class="icon is-light"><use xlink:href="media/bds-icons.min.svg#edit-g"></use></svg>
            </div>
        </div>
        <div class="level-item">
            <div class="button is-borderless is-square">
                <svg class="icon is-danger"><use xlink:href="media/bds-icons.min.svg#trash-bold-g"></use></svg>
            </div>
        </div>
        <div class="level-item">
            <div class="button is-info">
                <svg class="icon"><use xlink:href="media/bds-icons.min.svg#download-g"></use></svg>
                <span>Download</span>
            </div>
        </div>
        <div class="level-item">
            <div class="button is-success is-square is-shadowed is-rounded">
                <svg class="icon"><use xlink:href="media/bds-icons.min.svg#send-g"></use></svg>
            </div>
        </div>
        <div class="level-item">
            <div class="button is-borderless is-square is-rounded">
                <svg class="icon is-medium"><use xlink:href="media/bds-icons.min.svg#dots-g"></use></svg>
            </div>
        </div>
    </div>
</div>

    <div class="button">
        <svg class="icon"><use xlink:href="bds.min.svg#icon_name"></use></svg>
        <span>Today</span>
    </div>
    <div class="button is-square">
        <svg class="icon"><use xlink:href="bds.min.svg#icon_name"></use></svg>
    </div>
    <div class="button is-square is-borderless">
        <svg class="icon is-danger"><use xlink:href="bds.min.svg#icon_name"></use></svg>
    </div>
    <div class="button is-info is-beefy">
        <svg class="icon has-text-fill-white"><use xlink:href="bds.min.svg#icon_name"></use></svg>
        <span>Download</span>
    </div>
    <div class="button is-borderless is-square is-rounded">
        ···
    </div>
<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Button Group</strong></h4>

Buttons can be grouped together.

<hr>

<div class="box is-well is-radiusless-b is-marginless is-large">
    <div class="field has-addons">
        <p class="control">
            <a class="button">Red</a>
        </p>
        <p class="control">
            <a class="button is-active">Purple</a>
        </p>
        <p class="control">
            <a class="button">None</a>
        </p>
    </div>
</div>

    <div class="field has-addons">
        <p class="control">
            <a class="button">Red</a>
        </p>
        <p class="control">
            <a class="button is-active">Purple</a>
        </p>
        <p class="control">
            <a class="button">None</a>
        </p>
    </div>
