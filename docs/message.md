<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Message</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Message</span> allows to communicate information to the user. Messages can act as notifications or other kinds of alert messages.
</p>
<hr class="is-visible is-size-3"><br>

<div class="box is-well is-relaxed is-marginless">
    <div class="message">
        <div class="message-body">
            A message can act as a small <strong>note</strong>.
        </div>
    </div>
    <hr class="is-small">
    <div class="message is-info">
        <div class="message-header">
            Or as an information notice
        </div>
        <div class="message-body">
            Put some useful information here.
        </div>
    </div>
</div>

    <div class="message">
        <div class="message-body">
            A message can act as a <strong>notification</strong>.
        </div>
    </div>
    <div class="message is-info">
        <div class="message-header">
            Or as an information notice
        </div>
        <div class="message-body">
            Put some useful information here.
        </div>
    </div>
<br>

<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Colors and sizes</h2>

Messages support modifiers `is-info`, `is-danger`, `is-warning`, `is-success` as well as size modifiers `is-small` and `is-large`.

<br><br>

<div class="message is-small is-dark">
    <div class="message-body">
        A small <strong>dark</strong> message&nbsp; 👀
    </div>
</div>
<div class="message is-info">
    <div class="message-body">
        A regular <strong>info</strong> message&nbsp; 💁‍♂️
    </div>
</div>
<div class="message is-large is-success">
    <div class="message-body">
        A large <strong>success</strong> message 👍
    </div>
</div>

<hr class="is-visible is-size-1">

<h2 class="title is-3 is-family-sans-serif">Notification message</h2>

A Message can act as a notification when combined with a Modal. Add `is-noti` and put the message in a <a href="#/modal">simple Modal</a> to create an overlayed notification message.

<br><br>

<div class="box is-well is-medium is-marginless">
    <div class="button is-light" onclick="openModal('3')">Show Default Noti</div>&nbsp; 
    <div class="button is-info is-light" onclick="openModal('4')">Show Small Noti</div>&nbsp;
    <div class="button is-primary is-light" onclick="openModal('5')">Show Medium Noti</div>
</div>

<div id="js-modal3" class="modal" onclick="closeModal('3')">
    <div class="message is-noti">
        <div class="message-body">
            <strong>You Clicked!</strong>
        </div>
    </div>
</div>
<div id="js-modal4" class="modal" onclick="closeModal('4')">
    <div class="message is-noti is-success is-small">
        <div class="message-body">
            Hi there 👋
        </div>
    </div>
</div>
<div id="js-modal5" class="modal" onclick="closeModal('5')">
    <div class="message is-noti is-primary is-medium">
        <div class="message-body">
            <h1 class="title is-4 has-text-weight-bold">Hurray 🎉</h1>
            You just triggered a noti.
        </div>
    </div>
</div>

    <div class="modal">
        <div class="message is-noti">
            <div class="message-body">
                Place noti message here
            </div>  
        </div>
    </div>
<br>

?> Small and normal-sized notifactions don't have the moving in animation.

<hr>

<a href="https://bulma.io/documentation/components/message/" target="blank" class="box is-bordered">
    More variations on &nbsp;→&nbsp; <strong class="has-text-primary">Bulma / Message</strong>
</a>
