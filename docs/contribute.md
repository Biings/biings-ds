<h1 class="title is-1 is-serif">How to contribute</h1>
<p class="subtitle is-5">
    We welcome all feedback and ideas in order to produce the best possible experience for our users.
</p>

<hr class="is-visible">

<p class="title is-6 has-text-weight-semibold">1 )&nbsp; Checkout the repository &nbsp;→&nbsp; <a href="https://github.com/ForsysInteractive/biings-ds">https://github.com/ForsysInteractive/biings-ds</a></p>

<p class="title is-6 has-text-weight-semibold">2 )&nbsp; Make your changes</p>
<ul class="list">
    <li>Styles – all BDS components in `src/styles/..`</li>
    <li>Bulma for BDS – Bulma Sass files in `src/styles/bulma/..`</li>
    <li>Icon set – SVG icon files in `src/icons/..`</li>
</ul>

<p class="title is-6 has-text-weight-semibold">3 )&nbsp; Build it!</p>
<pre data-lang="bash">npm run build</pre>
<br>
<p>You can also build a specific part by calling the command directly:</p><br>
<pre data-lang="bash">npm run icons</pre>
<br>
<pre data-lang="bash">npm run styles</pre>
<br>
<pre data-lang="bash">npm run stylesdoc // to update the styles of this doc</pre>

<hr class="is-small">

<p class="title is-6 has-text-weight-semibold">4 )&nbsp; Commit your code and tag a new version</p>
<pre data-lang="bash">npm version x.x.x</pre>

<hr class="is-small">

<p class="title is-6 has-text-weight-semibold">5 )&nbsp; Make it available</p>

<pre data-lang="bash">npm login // you need an NPM account first</pre>
<br>
<pre data-lang="bash">npm publish</pre>