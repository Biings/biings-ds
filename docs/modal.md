<h6 class="is-uppercase has-text-grey has-text-weight-medium is-size-6 is-size-7-mobile">Component</h6>
<h1 class="title is-family-secondary is-size-2-mobile">Modal</h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    <span class="has-text-weight-semibold">Modals</span> communicate information via a overlayed window and allow the user to maintain the context of a particular task. Modals strongly interrupts user workflow and should be used sparingly.</span>
</p>
<hr class="is-visible is-size-3"><br>

<h4 class="title is-family-primary"><strong>Basic usage</strong></h4>

Add class `is-active` to the main modal along with `is-clipped` to the root `<html>` tag to prevent background scrolling.

<br><br>
<div class="box is-raised is-large has-text-centered is-marginless is-radiusless-b">
    <div onclick="openModal('')" class="button is-beefy is-dark is-outlined">Open Modal</div>
</div>
<div id="js-modal" class="modal">
    <div class="modal-background has-background-white has-background-blur" onclick="closeModal('')"></div>
    <div class="modal-content has-text-centered">
        <div class="title is-spaced is-1 is-size-1-mobile is-family-secondary"><strong>Nice!</strong></div>
        <div class="subtitle is-5 is-size-6-mobile">This opens just by adding the <code>is-active</code> to the modal div.</div>
        <hr>
        <span class="tag has-text-grey">Use the button on the top right corner to close.</span>
    </div>
    <button onclick="closeModal('')" class="modal-close is-huge" aria-label="close"></button>
</div>
<hr class="is-marginless is-visible">

    <div class="modal">
        <div class="modal-background has-background-white"></div>
        <div class="modal-content">
            <!-- Any other components. -->
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
<br>

?> Use `is-pinned` to prevent the modal from re-centering itself when its content change.

<hr class="is-size-1 is-visible">

<h4 class="title is-family-primary"><strong>Modal Card</strong></h4>

Use modal cards when displaying a form or when lots of interaction is involved.

<br>

<div class="box is-raised is-large has-text-centered is-marginless is-radiusless-b">
    <div onclick="openModal(1)" class="button is-dark is-shadowed is-rounded">Modal Card 1</div>
    &nbsp; &nbsp; 
    <div onclick="openModal(2)" class="button is-primary is-shadowed is-rounded">Modal Card 2</div>
</div>
<hr class="is-marginless is-visible">
<div id="js-modal1" class="modal">
    <div class="modal-background" onclick="closeModal(1)"></div>
    <div class="modal-card">
        <header class="modal-card-head has-border">
            <button onclick="closeModal(1)" class="delete is-large is-inverted" aria-label="close"></button>
            <svg class="icon has-fill-primary is-size-4"><use xlink:href="media/bds-icons.min.svg#today-g"></use></svg>
            <div class="modal-card-title">
                Modal Card Example
            </div>
        </header>
        <section class="modal-card-body has-background-white">
            <h4 class="title is-family-primary"><strong>Can handle of lot of content..</strong></h4>
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
        <footer class="modal-card-foot has-border">
            <div class="button is-dark">Footer Action</div>
            <div class="button is-static">or</div>
            <a class="button is-text" onclick="closeModal(1)"><span class="is-link is-underlined">Close</span></a>
        </footer>
    </div>
</div>
<div id="js-modal2" class="modal">
    <div class="modal-background" onclick="closeModal(2)"></div>
    <div class="modal-card">
        <section class="modal-card-body has-text-centered">
            <button onclick="closeModal(2)" class="delete is-large is-inverted" aria-label="close"></button>
            <div class="modal-card-title mb-4">
                <svg class="icon is-size-3 has-fill-primary"><use xlink:href="media/bds-icons.min.svg#chart"></use></svg>
                <hr class="is-marginless is-wavy">
                <h3 class="title is-family-secondary">Modal Card Example</h3>
            </div>
            <p class="subtitle is-5">You could also insert centered tabs to make<br>this modal even more versatile.</p>
            <div class="tabs is-centered is-small">
                <ul>
                    <li class="is-active"><a>One</a></li>
                    <li><a>Two</a></li>
                    <li><a>Forty Six</a></li>
                </ul>
            </div>
            <form class="mt-5">
                <div class="py-6 is-size-4 has-text-grey-light has-text-weight-medium">
                    Put your content here.
                </div>
            </form>
        </section>
        <footer class="modal-card-foot has-border">
            <div class="button is-text">Save</div>
            <div class="button is-text has-text-grey">Cancel</div>
        </footer>
    </div>
</div>

    <!-- Example 1 -->
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <button class="delete is-inverted is-large" aria-label="close"></button>
                <svg class="icon has-fill-primary is-size-4"><use xlink:href="media/bds-icons.min.svg#today-g"></use></svg>
                <div class="modal-card-title">
                    Modal Card Example
                </div>
            </header>
            <section class="modal-card-body">
                <hr>
                ...
                <hr>
            </section>
            <footer class="modal-card-foot has-border">
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
                <button class="delete is-inverted is-large" aria-label="close"></button>
                <svg><use xlink:href="path_to_bds-icons.min.svg#icon_name"></use></svg>
                <h3 class="title">...</h3>
                <p class="subtitle">...</p>
                <div class="tabs is-centered is-small">
                    <ul>
                        <li><a>Tab 1</a></li>
                        <li><a>Tab 2</a></li>
                        <li><a>Tab 3</a></li>
                    </ul>
                </div>
                <form>
                    <!-- Put Your Content Here -->
                </form>
                <div class="button is-text">Primary Action</div>
                <div class="button is-text">Cancel</div>
            </section>
        </div>
    </div>
<br>
