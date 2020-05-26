<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Skeleton</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-size-4-tablet is-family-secondary">
    <span class="has-text-weight-semibold">Squeleton</span> is a blank version of a component that has not been loaded yet. Unlike Loaders, a skeleton screen visually tells users what to expect and make them focus on the progress, rather than the wait time.
</p>
<hr class="is-visible is-size-2"><br>

<div class="box is-large has-background-white-bis is-medium is-marginless is-radiusless-bl is-radiusless-br">
    <div class="has-skeleton"></div>
</div>

    <div class="has-skeleton"></div>
!> Do **NOT** use Skeleton when listing an undetermined number of items. Use a <a href="#/loader" class="is-underlined">Loader</a> instead.

<hr class="is-size-1 is-visible">

<h3 class="title"><strong>Anything can be a Skeleton</strong></h3>

Add class `has-skeleton` to any empty component to show its skeleton.

<hr class="is-small">

<div class="box has-background-white-bis is-medium is-marginless is-radiusless-bl is-radiusless-br">
    <div class="box has-skeleton"></div>
    <div class="box has-skeleton"></div>
    <div class="box has-skeleton"></div>
    <div class="avatar"><div class="has-skeleton"></div></div><br><br>
    <div class="box message has-skeleton is-danger is-size-6">
        The skeleton is visible <strong>only if the content is empty</strong>.
    </div>
</div>

    <div class="avatar"><div class="has-skeleton"></div></div>
    <div class="box has-skeleton"></div>
    <div class="box has-skeleton"></div>
    <div class="box has-skeleton"></div>
    <div class="message has-skeleton">
        The skeleton is visible only if the content is empty.
    </div>
