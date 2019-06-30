<h1 class="title is-2 is-serif">How to contribute</h1>
<hr class="is-visible">
<p class="subtitle is-5 is-family-secondary">
    We welcome all feedback and ideas in order to produce the best possible experience for our users!
</p>

<hr class="is-visible"><br>

<p class="has-text-weight-semibold">1 )&nbsp; Checkout the repository &nbsp;→&nbsp; <a href="https://github.com/ForsysInteractive/biings-ds">https://github.com/ForsysInteractive/biings-ds</a></p>
<br>
<p class="has-text-weight-semibold">2 )&nbsp; Make your changes</p>
<ul class="list">
    <li>Styles – all BDS components in <code>src/styles/..</code></li>
    <li>Bulma for BDS – Bulma Sass files in <code>src/styles/bulma/..</code></li>
    <li>Icon set – SVG icon files in <code>src/icons/..</code></li>
</ul>
<br>
<div class="has-text-weight-semibold">3 )&nbsp; Build it!</div>
<br>
<pre data-lang="bash">npm run build</pre>
<br>
<p>You can also build a specific part by calling the command directly:</p><br>
<pre data-lang="bash">npm run icons</pre>
<br>
<pre data-lang="bash">npm run styles</pre>

<br>
<p class="has-text-weight-semibold">4 )&nbsp; Commit your code and tag a new version</p>
<br>
<pre data-lang="bash">npm version x.x.x</pre>

<br>
<p class="has-text-weight-semibold">5 )&nbsp; Make it available</p>
<br>
<pre data-lang="bash">npm login // you need an NPM account first</pre>
<br>
<pre data-lang="bash">npm publish</pre>