<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold">Component</h6><h1 class="title is-1 has-text-weight-bold">Modal</h1>
<p class="subtitle is-5"><span class="has-text-weight-semibold">Modals</span> communicate information via a overlayed window and allow the user to maintain the context of a particular task. Modals strongly interrupts user workflow and should be used sparingly.</span></p>

<hr class="is-visible is-large">


<div class="box is-well is-large has-text-centered is-marginless">
    <div onclick="openModal('')" class="button is-primary">Open Modal</div>
</div>
<div id="js-modal" class="modal">
    <div class="modal-background" onclick="closeModal('')"></div>
    <div class="modal-content">
        <div class="box is-white is-relaxed has-text-centered">
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

<hr class="is-large is-visible">

<h2 class="title is-4">Modal Card</h2>

<div class="box is-well is-large has-text-centered is-marginless">
    <button onclick="openModal(1)" class="button">Open Card</button>
</div>
<div id="js-modal1" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <div class="modal-card-title">
                <div class="title">Modal Card</div>
                 <div class="subtitle is-6 has-text-grey">The close button is optional</div>
            </div>
            <button onclick="closeModal(1)" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-centered">
            <div class="box is-white">*Place your form here<br>(or other interactions)*</div>
        </section>
        <footer class="modal-card-foot">
            <button class="button is-primary">Primary Action</button>
            <button  onclick="closeModal(1)" class="button is-secondary">Cancel</button>
        </footer>
    </div>
</div>

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <div class="modal-card-title">
                    <div class="title">Modal title</div>
                    <div class="subtitle is-6">Subtitle</div>
                </div>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                ...
            </section>
            <footer class="modal-card-foot">
                ...
            </footer>
        </div>
    </div>

<hr class="is-large is-visible">

<h2 class="title is-4">Pin to top</h2>

Use `is-pinned` to prevent the modal from re-centering itself when its content change.
