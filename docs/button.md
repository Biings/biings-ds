<h6 class="is-uppercase is-dimmed has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Button & Link</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Buttons</span> and <span class="has-text-weight-semibold">Links</span> allow users to take actions, make choices or navigate within a product or website.
</p>
<hr class="is-visible is-size-3"><br>

<h3 class="title is-family-primary has-text-weight-bold">Button defaults</h3>

<br>

<div class="table-container">
    <table class="table is-fullwidth is-bordered">
        <tbody>
            <tr>
                <td class="has-text-centered" style="width: 20%; min-width: 12rem;"><br><button class="button">Button</button><br><br></td>
                <td class="has-text-centered" style="width: 15%; min-width: 10rem;"><hr><code>button</code></td>
                <td><hr>For standard controls, like Dropdowns.</td>
            </tr>
            <tr>
                <td class="has-text-centered"><hr class="is-smaller"><button class="button is-primary">Primary</button><br><br></td>
                <td class="has-text-centered"><hr><code>is-primary</code></td>
                <td><hr>For primary actions, like "Save".</td>
            </tr>
            <tr>
                <td class="has-text-centered"><hr class="is-smaller"><button class="button is-secondary">Secondary</button><br><br></td>
                <td class="has-text-centered"><hr><code>is-secondary</code></td>
                <td><hr>For secondary actions, like "Cancel".</td>
            </tr>
            <tr>
                <td class="has-text-centered"><br><div class="button is-text">Text</div><br><br></td>
                <td class="has-text-centered"><hr><code>is-text</code></td>
                <td><hr>For tertiary actions, like "See more".</td>
            </tr>
            <tr>
                <td class="has-text-centered"><br><div class="button is-ghost">Ghost</div><br><br></td>
                <td class="has-text-centered"><hr><code>is-ghost</code></td>
                <td><hr>For link buttons, like "Browse all features".</td>
            </tr>
            <tr>
                <td class="has-text-centered"><br><div class="button is-dark">Dark</div><br><br></td>
                <td class="has-text-centered"><hr><code>is-dark</code></td>
                <td><hr>Dark looking button.</td>
            </tr>
            <tr>
                <td class="has-text-centered"><br><div class="button is-light">Light</div><br><div class="button is-light is-primary is-small m-1">Pri Light</div><div class="button is-light is-warning is-small m-1">War Light</div><div class="button is-light is-info is-small m-1">Inf Light</div><br><br></td>
                <td class="has-text-centered"><br><code>is-light</code></td>
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
                <td class="has-text-centered"><br><div class="button is-danger">Danger</div><br><br></td>
                <td class="has-text-centered"><hr><code>is-danger</code></td>
                <td><hr>For dangerous actions, like "Delete".</td>
            </tr>
            <tr>
                <td class="has-text-centered"><br><div class="button is-static">Static</div><br><br></td>
                <td class="has-text-centered"><br><code>is-static</code></td>
                <td><br>A non-interactive button.</td>
            </tr>
        </tbody>
    </table>
</div>

<hr class="is-size-1 is-visible">

<h3 class="title is-family-primary has-text-weight-bold">Link</h3>

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

<h3 class="title is-family-primary has-text-weight-bold">Block Link</h3>

Use `has-blocklink` to expand the clicking area of a link to its relative parent. The parent needs to be a block element with a relative positioning (`is-relative`).

<br>

<div class="box is-well is-large is-radiusless-b is-marginless">
    <div class="box is-raised is-relative">
        This entire box is clickable and will link to the url of <a class="has-blocklink is-underlined is-ghost has-text-primary">this link.</a>
    </div>
</div>
    
    <div class="box is-relative">
        This box is clickable because of <a class="has-blocklink">this link.</a>
    </div>
    
<hr class="is-size-1 is-visible">

<h3 class="title is-family-primary has-text-weight-bold">Sizes, states and shapes</h3>

<hr>

<table class="table is-bordered">
    <tbody>
        <tr>
            <td class="has-text-centered"><br><div class="button is-small">Small</div><br><br></td>
            <td><hr><code>is-small</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-medium">Medium</div><br><br></td>
            <td><hr><code>is-medium</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-large">Large</div><br><br></td>
            <td><hr><code>is-large</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-responsive">Responsive</div><br><br></td>
            <td><hr><code>is-responsive</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-primary is-glowing">Glowing</div><br><br></td>
            <td><hr><code>is-glowing</code> + <code>is-[primary,danger or success]</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-primary is-outlined">Outlined</div><br><br></td>
            <td><hr><code>is-outlined</code> (+ a color)</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-dashed is-outlined is-small">Dashed</div><br><br></td>
            <td><hr><code>is-dashed</code> (+ <code>is-outlined</code> + <code>is-small</code>)</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-beefy">Beefy</div><br><br></td>
            <td><hr><code>is-beefy</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-rounded">Rounded</div><br><br></td>
            <td><hr><code>is-rounded</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-square">Sq</div><br><br></td>
            <td><hr><code>is-square</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-loading">Loading</div><br><br></td>
            <td><hr><code>is-loading</code></td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button" disabled>Disabled</div><br><br></td>
            <td><br><code>disabled</code> attribute<br>Should be used only on <code>&lt;button&gt;</code>, add <code>is-static</code> when used on a div.</td>
        </tr>
    </tbody>
</table>

<hr class="is-size-1 is-visible">

<h3 class="title is-family-primary has-text-weight-bold">Icon Button</h3>

Buttons can be enhanced by adding an icon or be an icon button.  
Simply insert an svg with class `.icon` and wrap the optional text in a `span`.

<br>

<div class="box is-raised is-large is-radiusless-b is-marginless">
    <div class="level">
        <div class="level-item">
            <div class="button">
                <svg class="icon"><use xlink:href="media/bds-icons.min.svg#today-g"></use></svg>
                <span>Today!</span>
            </div>
        </div>
        <div class="level-item">
            <div class="button is-square is-light">
                <svg class="icon"><use xlink:href="media/bds-icons.min.svg#edit-bold-g"></use></svg>
            </div>
        </div>
        <div class="level-item">
            <div class="button is-outlined is-square">
                <svg class="icon is-danger"><use xlink:href="media/bds-icons.min.svg#trash-g"></use></svg>
            </div>
        </div>
        <div class="level-item">
            <div class="button is-text is-square is-rounded">
                <svg class="icon is-size-bigger"><use xlink:href="media/bds-icons.min.svg#dots-g"></use></svg>
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

<h3 class="title is-family-primary has-text-weight-bold">Button Group and Addons</h3>

Buttons can be grouped together or with a button.

<hr>

<div class="box is-raised is-radiusless-b is-marginless is-large">
    <div class="field has-addons">
        <p class="control">
            <a class="button">Red</a>
        </p>
        <p class="control">
            <a class="button">Purple</a>
        </p>
        <p class="control">
            <a class="button">None</a>
        </p>
    </div>
    <div class="field has-addons">
        <p class="control">
            <input class="input" type="text" placeholder="Attach controls to me, like a :">
        </p>
        <p class="control">
            <input class="input" type="text" placeholder="Readonly input" readonly>
        </p>
        
    </div>
</div>

    <div class="field has-addons">
        <p class="control">
            <a class="button">Red</a>
        </p>
        <p class="control">
            <a class="button">Purple</a>
        </p>
        <p class="control">
            <a class="button">None</a>
        </p>
        // Inputs
        <p class="control">
            <input class="input" type="text" placeholder="Attach controls to me, like a :">
        </p>
        <p class="control">
            <input class="input" type="text" placeholder="Readonly input" readonly>
        </p>
    </div>
