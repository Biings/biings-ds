<h6 class="subtitle is-6 is-uppercase has-text-grey">Component</h6><h1 class="title is-1 is-family-secondary">Modal</h1>
<hr class="is-visible is-size-3">
<p class="subtitle is-5 is-family-secondary">
    <span class="has-text-weight-semibold">Modals</span> communicate information via a overlayed window and allow the user to maintain the context of a particular task. Modals strongly interrupts user workflow and should be used sparingly.</span>
</p>
<hr class="is-visible is-size-3"><br>

<h2 class="title is-3 is-family-sans-serif">Basic usage</h2>

<div class="box is-well is-large has-text-centered is-marginless">
    <div onclick="openModal('')" class="button is-beefy">Open Modal</div>
</div>
<div id="js-modal" class="modal">
    <div class="modal-background" onclick="closeModal('')"></div>
    <div class="modal-content">
        <div class="box is-white is-large has-text-centered">
            <div class="title is-spaced is-2">Bravo!</div>
            <div class="subtitle is-6">This <strong>Modal</strong> was open just by adding the class <code>is-active</code> to the modal div.</div>
            <p class="has-text-grey has-text-weight-semibold">Use the button on the top right corner to close.</p>
        </div>
    </div>
    <button onclick="closeModal('')" class="modal-close is-large" aria-label="close"></button>
</div>

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other components. -->
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
!> Don't forget to add `.is-clipped` to the `<html>` tag in order to prevent background scrolling.

?> Use `is-pinned` to prevent the modal from re-centering itself when its content change.

<hr class="is-size-1 is-visible">

<h2 class="title is-3 is-family-sans-serif">Modal Card</h2>

Use modal cards when displaying a form or when lots of interaction is involved.

!> <strong>Button alignement</strong><br>Buttons should be aligned to the right for small modals. Align to the left when the form is longer.

<div class="box is-well is-large has-text-centered is-marginless">
    <div onclick="openModal(1)" class="button is-beefy is-dark is-glowing">Modal Card Example 1</div>
    &nbsp; 
    <div onclick="openModal(2)" class="button is-beefy is-primary is-glowing">Modal Card Example 2</div>
</div>
<div id="js-modal1" class="modal">
    <div class="modal-background" onclick="closeModal(1)"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <div class="modal-card-title">
                Modal Card Example
            </div>
            <button onclick="closeModal(1)" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
            <hr>
            <h2 class="title">Some modal card content</h2>
            <p class="subtitle is-italic is-size-5 has-text-grey">Can handle of lot of content.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si stante, hoc natura videlicet vult, salvam esse se, quod
                concedimus; Laboro autem non sine causa; Beatus autem esse in maximarum rerum timore nemo potest. Progredientibus autem
                aetatibus sensim tardeve potius quasi nosmet ipsos cognoscimus. Duo Reges: constructio interrete. Quis enim redargueret?
                Ergo ita: non posse honeste vivi, nisi honeste vivatur?
            </p>
            <br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magni enim aestimabat pecuniam non modo non contra leges, sed
                etiam legibus partam. Ergo id est convenienter naturae vivere, a natura discedere. At certe gravius. Huic mori optimum
                esse propter desperationem sapientiae, illi propter spem vivere. Paupertas si malum est, mendicus beatus esse nemo
                potest, quamvis sit sapiens. Non est ista, inquam, Piso, magna dissensio.
                
                Te enim iudicem aequum puto, modo quae dicat ille bene noris. Sed quot homines, tot sententiae; Duo Reges: constructio
                interrete. Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius, tamen expetitur propter voluptatem.
                
                Quicquid porro animo cernimus, id omne oritur a sensibus; Vitiosum est enim in dividendo partem in genere numerare. Hoc
                ne statuam quidem dicturam pater aiebat, si loqui posset. Est tamen ea secundum naturam multoque nos ad se expetendam
                magis hortatur quam superiora omnia. Si qua in iis corrigere voluit, deteriora fecit. Ut placet, inquit, etsi enim illud
                erat aptius, aequum cuique concedere. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Sic, et
                quidem diligentius saepiusque ista loquemur inter nos agemusque communiter.
                
                Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? Octavio fuit, cum illam severitatem in eo filio
                adhibuit, quem in adoptionem D. Iam doloris medicamenta illa Epicurea tamquam de narthecio proment: Si gravis, brevis;
                Verba tu fingas et ea dicas, quae non sentias? Atque ab his initiis profecti omnium virtutum et originem et
                progressionem persecuti sunt. Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. Videmus
                igitur ut conquiescere ne infantes quidem possint.
                
                Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Sed tu istuc dixti bene Latine, parum
                plane. Quid, quod res alia tota est? Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Ego vero volo
                in virtute vim esse quam maximam; Eaedem enim utilitates poterunt eas labefactare atque pervertere. Quid enim de
                amicitia statueris utilitatis causa expetenda vides. Mihi quidem Antiochum, quem audis, satis belle videris attendere.
            </p>
            <hr>
        </section>
        <footer class="modal-card-foot">
            <div class="button is-dark">Footer Action</div><div class="button is-static">or</div><div class="button is-text" onclick="closeModal(1)">Close</div>
        </footer>
    </div>
</div>
<div id="js-modal2" class="modal">
    <div class="modal-background" onclick="closeModal(2)"></div>
    <div class="modal-card">
        <section class="modal-card-body has-text-centered">
            <button onclick="closeModal(2)" class="delete" aria-label="close"></button>
            <svg class="image is-48x48 has-fill-primary"><use xlink:href="media/bds-icons.min.svg#chart"></use></svg>
            <hr class="is-size-8">
            <h2 class="title">Modal Card Example</h2>
            <p class="subtitle is-6 has-text-grey">You could also insert centered tabs to make<br>this modal even more versatile.</p>
            <div class="tabs is-centered is-small">
                <ul>
                    <li class="is-active"><a>One</a></li>
                    <li><a>Two</a></li>
                    <li><a>Forty Six</a></li>
                </ul>
            </div>
            <form class="box is-well">
                <div class="field">
                    <label for="fieldId" class="label">Field example 2</label>
                    <input id="fieldId" class="input" type="text" placeholder="Some input">
                </div>
                <div class="field">
                    <label for="fieldId" class="label">Field example 2</label>
                    <input id="fieldId" class="input" type="text" placeholder="Another input">
                </div>
            </form>
            <div class="message is-info is-small">
                <div class="message-body">
                    The Header and Footer can be removed for a slimer design.
                </div>
            </div>
            <br>
        </section>
        <footer class="modal-card-foot has-text-right">
            <div class="button">Cancel</div>
            <div class="button is-primary">Primary Action</div>
        </footer>
    </div>
</div>

    <!-- Example 1 -->
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <div class="modal-card-title">Modal title</div>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <hr>
                ...
                <hr>
            </section>
            <footer class="modal-card-foot">
                <div class="button is-dark">Footer Action</div>
                <div class="button is-static">or</div>
                <div class="button is-text">Close</div>
            </footer>
        </div>
    </div>
    <!-- Example 2 -->
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <section class="modal-card-body has-text-centered">
                <button class="delete" aria-label="close"></button>
                <svg><use xlink:href="path_to_bds-icons.min.svg#icon_name"></use></svg>
                <h2 class="title">Title</h2>
                <p class="subtitle">A text...</p>
                <div class="field">
                    <label for="fieldId" class="label">Field example</label>
                    <input id="fieldId" class="input" type="text">
                </div>
                <form class="box is-well">
                    <div class="field">
                        <label for="fieldId2" class="label">Field example</label>
                        <input id="fieldId2" class="input" type="text" placeholder="Some input">
                    </div>
                </form>
                <br>
            </section>
            <footer class="modal-card-foot">
                <div class="button is-fullwidth">Primary Action</div>
            </footer>
        </div>
    </div>
<br>
