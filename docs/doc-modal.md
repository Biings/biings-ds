<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold">Foundation</h6><h1 class="title is-1 has-text-weight-bold">Modal</h1>
<p class="subtitle is-5"><span class="has-text-weight-semibold">Modals</span> communicate information via a overlayed window and allow the user to maintain the context of a particular task.</span></p>

<hr class="is-visible is-large">


<button onclick="openModal()" class="button is-rounded is-outlined is-primary">Open Modal</button>

<hr class="is-small">

<div id="js-modal" class="modal">
    <div class="modal-background" onclick="closeModal()"></div>
    <div class="modal-content">
        <div class="box is-white is-relaxed has-text-centered">
            <div class="title is-spaced is-2">Bravo!</div>
            <div class="subtitle is-5">This <strong>Modal</strong> was open just by adding the class `is-active` to the modal div.</div>
            <p class="has-text-grey has-text-weight-semibold">Use the button on the top right corner to close.</p>
        </div>
    </div>
    <button onclick="closeModal()" class="modal-close is-large" aria-label="close"></button>
</div>

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other components. -->
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>


!> Keep in mind that a Modal strongly interrupts user workflow.


<hr class="is-large ">

<div class="box is-bordered">
    Find more possibilities on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/components/modal/" target="blank">Bulma / <strong>Modal</strong></a>
</div>