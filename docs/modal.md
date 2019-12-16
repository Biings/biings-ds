<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Modal</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Modals</span> communicate information via a overlayed window and allow the user to maintain the context of a particular task. Modals strongly interrupts user workflow and should be used sparingly.</span>
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-well is-large has-text-centered is-marginless">
    <div onclick="openModal('')" class="button is-primary is-beefy is-glowing">Open Modal</div>
</div>
<div id="js-modal" class="modal">
    <div class="modal-background" onclick="closeModal('')"></div>
    <div class="modal-content">
        <div class="box is-white is-large has-text-centered">
            <div class="title is-spaced is-2">Bravo!</div>
            <div class="subtitle is-6">This <strong>Modal</strong> was open just by adding the class `is-active` to the modal div.</div>
            <p class="has-text-grey has-text-weight-semibold">Use the button on the top right corner to close.</p>
        </div>
    </div>
    <button onclick="closeModal('')" class="modal-close is-large" aria-label="close"></button>
</div>

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other components. -->
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
<br>

?> Don't forget to add `.is-clipped` to the `<html>` tag in order to prevent background scrolling.

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Modal Card</h2>

<div class="box is-well is-large has-text-centered is-marginless">
    <div onclick="openModal(1)" class="button is-beefy is-dark is-glowing">Open Card</div>
</div>
<div id="js-modal1" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <div class="modal-card-title">
                Modal card title
            </div>
            <button onclick="closeModal(1)" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
            <h2 class="title">Some modal card content</h2>
            <p class="subtitle is-italic is-size-5 has-text-grey">Can be a form or anything else.</p>
        </section>
        <footer class="modal-card-foot has-text-right">
            <div class="button is-primary is-beefy">Primary Action</div>
            <div class="button is-static">or</div>
            <div onclick="closeModal(1)" class="button is-text">Cancel</div>
        </footer>
    </div>
</div>

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <div class="modal-card-title">Modal title</div>
                <button class="modal-close" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                ...
            </section>
        </div>
    </div>
<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Pin to top</h2>

Use `is-pinned` to prevent the modal from re-centering itself when its content change.
