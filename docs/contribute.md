<h1 class="title is-0 is-family-secondary is-size-1-mobile has-text-weight-medium">How to contribute?</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-4 is-size-5-mobile is-family-secondary">
    We welcome all feedback and ideas in order to produce the best possible experience for our users!
</p>

<hr class="is-visible is-size-2"><br>

<p class="has-text-weight-semibold">1 )&nbsp; Checkout the repository &nbsp;→&nbsp; <a href="https://github.com/biings/biings-ds" class="is-underlined">https://github.com/biings/biings-ds</a></p>
<br>
<p class="has-text-weight-semibold">2 )&nbsp; Make your changes</p>
<ul class="list">
    <li>Styles – all BDS components in <code>src/styles/bds/..</code></li>
    <li>Bulma base variables <code>src/styles/bulma.sass</code></li>
    <li>Icon set – SVG icon files in <code>src/icons/..</code></li>
</ul>
<br>
<div class="has-text-weight-semibold">3 )&nbsp; Build it!</div>
<br>
<pre data-lang="bash">npm run build</pre>
<br>
<p>You can also build a specific part by calling the command directly:</p><br>
<pre data-lang="bash">npm run styles</pre>
<br>
<pre data-lang="bash">npm run icons</pre>

<br>
<p class="has-text-weight-semibold">4 )&nbsp; Commit your code – Push! – and tag a new version</p>
<br>
<pre data-lang="bash">npm version x.x.x</pre>

<br>
<p class="has-text-weight-semibold">5 )&nbsp; Make it available</p>
<br>
<pre data-lang="bash">npm login // you need an NPM account first</pre>
<br>
<pre data-lang="bash">npm publish</pre>
<br>
<p class="has-text-weight-semibold">5 )&nbsp; Done. You can now tell everyone to "`npm update biings-ds`" 😇</p>