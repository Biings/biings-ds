<h6 class="is-uppercase is-dimmed has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Message</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Message</span> allows to communicate information to the user. Messages can act as notifications or other kinds of alert messages.
</p>
<hr class="is-visible is-size-3"><br>

<h3 class="title is-family-primary">Default colors and sizes</h3>

Messages support modifiers `is-primary`, `is-info`, `is-success`, `is-warning`, `is-danger`, `is-dark` as well as size modifiers `is-size-[1-7]`.

<br><br>

<div class="box is-raised has-background-white-bis is-large is-marginless is-radiusless-b">
    <div class="message">Default Message.</div>
    <br>
    <div class="message is-primary"><strong>Primary</strong> message</div>
    <br>
    <div class="message is-info"><strong>Info</strong> message&nbsp; 💁‍♂️</div>
    <br>
    <div class="message is-warning"><strong>Warning</strong> message</div>
    <br>
    <div class="message is-danger"><strong>Dangerous</strong> message!</div>
    <br>
    <div class="message is-size-4 is-success">Big <strong>success</strong> message</div>
    <br>
    <div class="message is-dark is-size-6">A small <strong>dark</strong> message&nbsp; 👀</div>
</div>

    <div class="message">Default Message.</div>
    <div class="message is-info">An info message 💁‍♂️</div>
    <div class="message is-success is-size-4">Big success message.</div>
    etc...
<hr class="is-visible is-size-1">

<h3 class="title is-family-primary">Toast notification</h3>

A Message can act as a toast notification when combined with a Modal. Put the message in a <a href="#/modal">Modal</a> (with class `.has-noti`) to create an overlayed notification message.

<br><br>

<div class="box is-raised is-large is-marginless has-text-centered is-radiusless-b">
    <div class="button is-light" onclick="openModal('3')">Default Noti</div>&nbsp; &nbsp;
    <div class="button is-success" onclick="openModal('9')">Success Noti</div>&nbsp; &nbsp;
    <div class="button is-dark" onclick="openModal('4')">Dark small Noti</div>&nbsp; &nbsp;
    <div class="button is-primary" onclick="openModal('5')">Primary medium Noti</div>
</div>
<hr class="is-marginless is-visible">

<div id="js-modal3" class="modal has-noti" onclick="closeModal('3')">
    <div class="message">
        Hi there 👋
    </div>
</div>
<div id="js-modal9" class="modal has-noti" onclick="closeModal('9')">
    <div class="message is-success">
        📦 Saved! 
    </div>
</div>
<div id="js-modal4" class="modal has-noti" onclick="closeModal('4')">
    <div class="message is-dark is-size-6 has-text-weight-medium">
        <svg class="icon has-fill-success-light mr-1"><use xlink:href="media/bds-icons.min.svg#check-bold-g"></use></svg>Great, we kept this change
    </div>
</div>
<div id="js-modal5" class="modal has-noti" onclick="closeModal('5')">
    <div class="message is-primary is-medium">
        <h1 class="title is-4 has-text-weight-bold has-text-white">Hurray 🎉</h1>
        You just triggered a noti.
    </div>
</div>

    <div class="modal has-noti">
        <div class="message">
            Place noti message here
        </div>  
    </div>
<br>

?> Small and normal-sized notifactions don't have the moving in animation.

<hr>
