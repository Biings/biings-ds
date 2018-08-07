<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold">Component</h6><h1 class="title is-1 has-text-weight-bold">Button</h1>
<p class="subtitle is-5">
    <span class="has-text-weight-semibold">Buttons</span> allow users to take actions, and make choices.
</p>

<hr class="is-large is-visible">

<h2 class="title is-4">Types & States</h2>

<table class="table is-bordered is-fullwidth">
    <thead>
        <tr class="has-background-light">
            <th></th>
            <th>When to use it</th>
            <th>Class</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="has-text-centered"><br><div class="button">Button</div><br><br></td>
            <td><br>For controls, like Dropdowns</td>
            <td>`button`</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-primary">Primary</div><br><br></td>
            <td><br>For primary actions, like **Save**</td>
            <td>`button is-primary`</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-secondary">Secondary</div><br><br></td>
            <td><br>For secondary actions, like **Cancel**</td>
            <td>`is-secondary`</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-danger">Dangerous</div><br><br></td>
            <td><br>For primary dangerous actions</td>
            <td>`button is-danger`</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-text">Text</div><br><br></td>
            <td><br>For texts behaving like a button.</td>
            <td>`is-text`</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button is-loading">Hidden text</div><br><br></td>
            <td><br>Loading state.</td>  
            <td>`is-loading`</td>
        </tr>
        <tr>
            <td class="has-text-centered"><br><div class="button" disabled>Disabled</div><br><br></td>
            <td><br>Disabled or non-interactive state.</td>
            <td>`disabled` attribute</td>
        </tr>
    </tbody>
</table>

<hr class="is-large is-visible">

<h2 class="title is-4">Sizes and shapes</h2>

Use classes starting with `is-[size or shape]` to change the style of a button.

<hr class="is-small">

<div class="box is-well is-large">
    <span class="button is-small">Small</span> &nbsp; 
    <span class="button">Normal</span> &nbsp; 
    <span class="button is-medium">Medium</span> &nbsp; 
    <span class="button is-large">Large</span>
    <hr class="is-small">
    <div class="button is-beefy is-primary">Beefy</div> &nbsp;&nbsp; 
    <div class="button is-rounded is-medium">Rounded</div>
</div>

<hr class="is-large is-visible">

<h2 class="title is-4">Button Group</h2>

<div class="box is-well is-marginless is-large">
        <div class="field has-addons">
                <p class="control">
                    <a class="button">Yes</a>
                </p>
                <p class="control">
                    <a class="button">No</a>
                </p>
                <p class="control">
                    <a class="button">Maybe</a>
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
            <a class="button">Maybe</a>
        </p>
    </div>
