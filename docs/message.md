<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Message</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    <span class="has-text-weight-semibold">Message</span> allows to communicate information to the user. Messages can act as notifications or other kinds of alert messages.
</p>
<hr class="is-visible is-size-4"><br>

<h4 class="title is-family-primary"><strong>Default colors and sizes</strong></h4>

Messages support modifiers `is-primary`, `is-info`, `is-success`, `is-warning`, `is-danger`, `is-dark` as well as size modifiers `is-size-[1-7]`.

<br><br>

<div class="box is-raised is-large is-marginless is-radiusless-b">
    <div class="message">Default Message.</div>
    <br>
    <div class="message is-info">A regular <strong>info</strong> message&nbsp; 💁‍♂️</div>
    <br>
    <div class="message is-size-4 is-success">Big success message</div>
    <br>
    <div class="message is-dark is-size-6">A small <strong>dark</strong> message&nbsp; 👀</div>
</div>

    <div class="message">Default Message.</div>
    <div class="message is-info">An info message 💁‍♂️</div>
    <div class="message is-warning is-size-4">Big warning message.</div>
    etc...
<hr class="is-visible is-size-1">

<h4 class="title is-family-primary"><strong>Notification message</strong></h4>

A Message can act as a notification when combined with a Modal. Put the message in a <a href="#/modal">simple Modal</a> to create an overlayed notification message.

<br><br>

<div class="box is-raised is-large is-marginless has-text-centered is-radiusless-b">
    <div class="button is-white is-shadowed" onclick="openModal('3')">Default Noti</div>&nbsp; &nbsp;
    <div class="button is-success is-shadowed" onclick="openModal('9')">Success Noti</div>&nbsp; &nbsp;
    <div class="button is-danger is-shadowed" onclick="openModal('4')">Small Noti</div>&nbsp; &nbsp;
    <div class="button is-primary is-shadowed" onclick="openModal('5')">Medium Noti</div>
</div>
<hr class="is-marginless is-visible">

<div id="js-modal3" class="modal" onclick="closeModal('3')">
    <div class="message">
        Hi there 👋
    </div>
</div>
<div id="js-modal9" class="modal" onclick="closeModal('9')">
    <div class="message is-success">
        📦 Saved! 
    </div>
</div>
<div id="js-modal4" class="modal" onclick="closeModal('4')">
    <div class="message is-danger is-size-6">
        Deleted..
    </div>
</div>
<div id="js-modal5" class="modal" onclick="closeModal('5')">
    <div class="message is-primary is-medium">
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
