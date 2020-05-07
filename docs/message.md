<h6 class="is-uppercase has-text-grey">Component</h6><h1 class="title is-0 is-family-secondary is-size-1-mobile">Message</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-4 is-family-secondary">
    <span class="has-text-weight-semibold">Message</span> allows to communicate information to the user. Messages can act as notifications or other kinds of alert messages.
</p>
<hr class="is-visible is-size-3"><br>

<h2 class="title is-3 is-family-sans-serif">Default colors and sizes</h2>

Messages support modifiers `is-primary`, `is-info`, `is-success`, `is-warning`, `is-danger`, `is-dark` as well as size modifiers `is-size-[0-7]`.

<br><br>

<div class="box is-medium has-background-white-bis is-marginless">
    <div class="message">Default Message.</div>
    <br>
    <div class="message is-info">A regular <strong>info</strong> message&nbsp; 💁‍♂️</div>
    <br>
    <div class="message is-size-4 is-success">Big success message</div>
    <br>
    <div class="message is-dark is-size-7">A small <strong>dark</strong> message&nbsp; 👀</div>
</div>

    <div class="message">Default Message.</div>
    <div class="message is-info">An info message 💁‍♂️</div>
    <div class="message is-warning is-size-4">Big warning message.</div>
    etc...
<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Notification message</h2>

A Message can act as a notification when combined with a Modal. Add `is-noti` and put the message in a <a href="#/modal">simple Modal</a> to create an overlayed notification message.

<br><br>

<div class="box has-background-white-bis is-medium is-marginless has-text-centered">
    <div class="button is-rounded" onclick="openModal('3')">Default Noti</div>&nbsp; &nbsp;
    <div class="button is-success is-rounded" onclick="openModal('9')">Success Noti</div>&nbsp; &nbsp;
    <div class="button is-danger is-rounded" onclick="openModal('4')">Small Noti</div>&nbsp; &nbsp;
    <div class="button is-primary is-shadowed is-rounded" onclick="openModal('5')">Medium Noti</div>
</div>

<div id="js-modal3" class="modal" onclick="closeModal('3')">
    <div class="message is-noti">
        Hi there 👋
    </div>
</div>
<div id="js-modal9" class="modal" onclick="closeModal('9')">
    <div class="message is-noti is-success is-size-5">
        📦 Saved! 
    </div>
</div>
<div id="js-modal4" class="modal" onclick="closeModal('4')">
    <div class="message is-noti is-danger is-size-7">
        Deleted..
    </div>
</div>
<div id="js-modal5" class="modal" onclick="closeModal('5')">
    <div class="message is-noti is-primary is-medium">
        <h1 class="title is-4 has-text-weight-bold">Hurray 🎉</h1>
        You just triggered a noti.
    </div>
</div>

    <div class="modal">
        <div class="message">
            Place noti message here
        </div>  
    </div>
<br>

?> Small and normal-sized notifactions don't have the moving in animation.

<hr>

<a href="https://bulma.io/documentation/components/message/" target="blank" class="box is-well has-text-grey">
    More variations on &nbsp;→&nbsp; <strong class="has-text-primary">Bulma / Message</strong>
</a>
