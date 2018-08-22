<h6 class="subtitle is-5 has-text-grey has-text-weight-semibold">Component</h6><h1 class="title is-1 has-text-weight-bold">Message</h1>
<p class="subtitle is-5">
    <span class="has-text-weight-semibold">Message</span> allows to communicate information to the user. Messages can act as notifications or other kinds of alert messages.
</p>

<hr class="is-large is-visible">

<div class="box has-background-grey-lighter is-relaxed is-marginless">
    <div class="message">
        <div class="message-body">
            A message can act as a small <strong>note</strong>.
        </div>
    </div>
    <hr class="is-small">
    <div class="message is-info">
        <div class="message-header">
            Or as a has an information notice
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
            Or as a has an information notice
        </div>
        <div class="message-body">
            Put some useful information here.
        </div>
    </div>

<br>

<hr class="is-visible is-large">

<h2 class="title is-4">Colors and sizes</h2>

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

<hr class="is-visible is-large">

<h2 class="title is-4">Notification message</h2>

A Message can act as a notification when combined with a Modal. Add `is-noti` and put the message in a <a href="#/modal">simple Modal</a> to create an overlayed notification message.

<br><br>

<div class="box has-background-light is-large is-marginless has-text-centered">
    <div class="button is-sucess" onclick="openModal('3')">Show notification</div>
</div>

<div id="js-modal3" class="modal" onclick="closeModal('3')">
    <div class="modal-content">
        <div class="message is-noti">
            <div class="title has-text-purple">Hey!</div>
            <div class="subtitle has-text-grey-dark">This is just a<br>brief notification</div>
        </div>
    </div>
</div>

    <div class="modal">
        <div class="modal-content">
            <div class="message">
                <div class="title has-text-primary">Hey!</div>
                <div class="subtitle has-text-grey">This is just a<br>brief notification</div>
            </div>
        </div>
    </div>

<br>

?> Add modifier `is-danger` for failure notifications. 

<hr>

<div class="box is-bordered">
    More variations on &nbsp;→&nbsp; <a href="https://bulma.io/documentation/components/message/" target="blank">Bulma / <strong>Message</strong></a>
</div>
