  <template>
    <DefaultLayout>
      <div class="container">
        <div class="row">
          <div class="follow-up-link">
            <span>Découvrir le Bénin</span>
            <nuxt-img src="row-right.svg" class="mx-2" alt="hebergement" />
            <span>Culture moderne bronze</span>
          </div>
          <div class="clearfix">
            <h2 class="float-start m-0">Culture moderne bronze</h2>
            <div class="float-end">
              <a href="#" class="btn btn-primary">Résever</a>
            </div>
          </div>
          <div class="address">
            <span>Porto-Novo, Bénin</span>
            <i class="bi bi-clock star ml-2"></i>
            <span>4 jours</span>
            <i class="bi bi-star-fill star ml-2"></i>
            <span> 4.8/600 Avis</span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 pr-lg-3">
            <nuxt-img
              src="discover_1.png"
              class="image-content img-height"
              alt="img-culture-moderne"
            />
          </div>
          <div class="col-lg-4 pl-lg-0 mt-3 mt-lg-0">
            <nuxt-img
              src="discover_1.png"
              class="img-height2 image-content"
              alt="img-culture-moderne"
            />
            <div class="row">
              <div class="col pt-3 pr-lg-3">
                <nuxt-img
                  src="discover_1.png"
                  class="image-content img-height2"
                  alt="img-culture-moderne"
                />
              </div>
              <div class="col pt-3 pl-lg-0">
                <div class="position-relative">
                  <nuxt-img
                    src="discover_1.png"
                    alt="img-culture-moderne"
                    class="image-content img-height2"
                  />
                  <div
                    class="bg-shadow d-flex justify-content-center align-items-center"
                  >
                    <span>+14 photos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientOnly>
        <nav-tabs :queryName="'tab-culture'" >
          <template v-slot:header >
            <nav-header title="Apercu" :role="'view'" />
            <nav-header title="Programme" :role="'programs'" />
            <nav-header title="Hébergements" :role="'housing'" />
            <nav-header title="Avis" :role="'avis'" />
          </template>
          <template v-slot:content>
            <nav-content :attr="'view'">
              <div
                class="tab-pane fade show active tab-detaill"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <p>
                  Plongez au cœur d'une aventure culturelle inoubliable. Ce voyage
                  exceptionnel vous transporte à travers les trésors historiques,
                  les traditions vivantes et les arts vibrants de ce pays
                  d'Afrique de l'Ouest. Jour après jour, vous serez immergé dans
                  la richesse culturelle du Bénin, découvrant des sites
                  emblématiques, rencontrant des artisans talentueux et vous
                  imprégnant de la magie des traditions locales.
                </p>
                <h3>Les inclusions</h3>
                <div class="row">
                  <div class="col-auto">
                    <ul class="check">
                      <li>
                        <nuxt-img
                          src="check.svg"
                          class="icon-check"
                          alt="check"
                        />
                        Le transport local
                      </li>
                      <li>
                        <nuxt-img
                          src="check.svg"
                          class="icon-check"
                          alt="check"
                        />Les repas mentionnés au programme
                      </li>
                      <li>
                        <nuxt-img
                          src="check.svg"
                          class="icon-check"
                          alt="check"
                        />L'hébergement en chambre
                      </li>
                      <li>
                        <nuxt-img
                          src="check.svg"
                          class="icon-check"
                          alt="check"
                        />Les visites mentionnées au programme
                      </li>
                      <li>
                        <nuxt-img
                          src="check.svg"
                          class="icon-check"
                          alt="check"
                        />Un guide accompagnateur
                      </li>
                      <li>
                        <nuxt-img
                          src="check.svg"
                          class="icon-check"
                          alt="check"
                        />La connexion Wi-Fi
                      </li>
                    </ul>
                  </div>
                  <div class="col-auto">
                    <ul class="check">
                      <li>
                        <nuxt-img
                          src="close.svg"
                          class="icon-check"
                          alt="check"
                        />Les dépenses personnelles
                      </li>
                      <li>
                        <nuxt-img
                          src="close.svg"
                          class="icon-check"
                          alt="check"
                        />Les boissons (hors eau minérale)
                      </li>
                      <li>
                        <nuxt-img
                          src="close.svg"
                          class="icon-check"
                          alt="check"
                        />Les excursions non mentionnées au programme
                      </li>
                      <li>
                        <nuxt-img
                          src="close.svg"
                          class="icon-check"
                          alt="check"
                        />Les repas non mentionnées au programme
                      </li>
                      <li>
                        <nuxt-img
                          src="close.svg"
                          class="icon-check"
                          alt="check"
                        />L'assurance ou l'assistance internationale
                      </li>
                      <li>
                        <nuxt-img
                          src="close.svg"
                          class="icon-check"
                          alt="check"
                        />Les pourboires
                      </li>
                    </ul>
                  </div>
                  <div class="col"></div>
                </div>
                <h3 class="my-2">Les lieux que vous visiterez</h3>
                <div class="row text-white my-4">
                  <!-- lieu-1 -->
                  <div class="col-lg-4 mb-3 mb-lg-0">
                    <div class="lieu-blog">
                      <nuxt-img
                        src="auth.png"
                        class="image-content"
                        alt="toffa"
                      />
                      <span class="lieu-name">Culture</span>
                      <div class="lieu-blog-mini">
                        <h4>La statue du roi Toffa 1er</h4>
                      </div>
                    </div>
                  </div>
                  <!-- lieu-2 -->
                  <div class="col-lg-4 mb-3 mb-lg-0">
                    <div class="lieu-blog">
                      <nuxt-img
                        src="pack_1.png"
                        class="image-content"
                        alt="toffa"
                      />
                      <span class="lieu-name">Culture</span>
                      <div class="lieu-blog-mini">
                        <h5>Le palais royal de Honmè</h5>
                      </div>
                    </div>
                  </div>
                  <!-- lieu-3 -->
                  <div class="col-lg-4 mb-3 mb-lg-0">
                    <div class="lieu-blog">
                      <nuxt-img
                        src="articlehistory.png"
                        class="image-content"
                        alt="toffa"
                      />
                      <span class="lieu-name">Culture</span>
                      <div class="lieu-blog-mini">
                        <h4>La grande mosquée de Porto-Novo</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 class="my-2">Les plats que vous découvrerez</h3>
                <div class="row my-4">
                  <!-- plat-1 -->
                  <div class="col-lg-4 mb-3 mb-lg-0 text-center">
                    <div class="plat">
                      <nuxt-img
                        src="pack_2.png"
                        class="image-content"
                        alt="hanlan"
                      />
                    </div>
                    <h5 class="mt-3">PIRON + HANLAN KPETE</h5>
                    <span>Porto -Novo, Bénin</span>
                  </div>
                  <!-- plat-2 -->
                  <div class="col-lg-4 mb-3 mb-lg-0 text-center">
                    <div class="plat">
                      <nuxt-img
                        src="discover_2.png"
                        class="image-content"
                        alt="riz"
                      />
                    </div>
                    <h5 class="mt-3">Feijoada au riz</h5>
                    <span>Ouidah, Bénin</span>
                  </div>
                  <!-- plat-3 -->
                  <div class="col-lg-4 mb-3 mb-lg-0 text-center">
                    <div class="plat">
                      <nuxt-img
                        src="discover_2.png"
                        class="image-content"
                        alt="crincrin"
                      />
                      <h5 class="mt-3">Pâte blanche + Crincrin</h5>
                      <span>Ouidah, Bénin</span>
                    </div>
                  </div>
                </div>
                <!-- book-now -->
                <div class="row align-items-center mt-10 mb-6">
                  <div class="col-auto reservation mr-3 mx-auto mx-xl-0">
                    <span
                      >Intéressé(e) par une visite détaillée de Porto Novo dans la
                      joie et la bonne humeur ?
                    </span>
                  </div>
                  <a
                    href="#"
                    class="btn btn-primary col-lg-4 mx-auto mx-xl-0 my-2 my-lg-0"
                    >Je réserve maintenant</a
                  >
                </div>
              </div>
            </nav-content>
            <nav-content :attr="'programs'">
              <div
                class="tab-pane fade show"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                <!-- day1 -->
                <div>
                  <div class="day ml-md-4">
                    <span>Jour 1 </span>
                    <nuxt-img
                      src="icon-down.svg"
                      class="mx-2 icon-width"
                      alt="icon-down"
                    />
                  </div>
                  <span class="d-block ml-md-4">4 arrêts</span>
                  <div class="row mt-2">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">1</span>
                    </div>
                    <div class="col p-0">
                      <span>Arrivée à Porto-Novo & installation à l’hôtel</span>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">2</span>
                    </div>
                    <div class="col p-0">
                      <span>Visite de la statut de TOFFA 1er</span>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">3</span>
                    </div>
                    <div class="col p-0">
                      <span
                        >Exploration du Musée Honmè, qui abrite une riche
                        collection d'artefacts culturels et historiques
                        béninois</span
                      >
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">4</span>
                    </div>
                    <div class="col p-0">
                      <span
                        >Dîner dans un restaurant local pour déguster des plats
                        traditionnels béninois</span
                      >
                    </div>
                  </div>
                </div>
                <!-- day2 -->
                <div>
                  <div class="day ml-md-4">
                    <span>Jour 2</span>
                    <nuxt-img
                      src="icon-down.svg"
                      class="mx-2 icon-width"
                      alt="icon-down"
                    />
                  </div>
                  <span class="d-block ml-md-4">3 arrêts</span>
                  <div class="row mt-2">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">1</span>
                    </div>
                    <div class="col p-0">
                      <span
                        >Visite du Musée Ethnographique de Porto-Novo pour en
                        apprendre davantage sur les différentes ethnies du Bénin
                        et leur patrimoine culturel</span
                      >
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">2</span>
                    </div>
                    <div class="col p-0">
                      <span
                        >Découverte & achat au centre artisanal de Porto
                        Novo</span
                      >
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">3</span>
                    </div>
                    <div class="col p-0">
                      <span>Escale à la place Chacha</span>
                    </div>
                  </div>
                </div>
                <!-- day3 -->
                <div>
                  <div class="day ml-md-4">
                    <span>Jour 3 </span>
                    <nuxt-img
                      src="icon-down.svg"
                      class="mx-2 icon-width"
                      alt="icon-down"
                    />
                  </div>
                  <span class="d-block ml-md-4">3 arrêts</span>
                  <div class="row mt-2">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">1</span>
                    </div>
                    <div class="col p-0">
                      <span>Visite du jardin de la place Jean Bayol</span>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">2</span>
                    </div>
                    <div class="col p-0">
                      <span>Visite du Musée da Silva</span>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">3</span>
                    </div>
                    <div class="col p-0">
                      <span>Visiter le centre Songhaï</span>
                    </div>
                  </div>
                </div>
                <!-- day4 -->
                <div>
                  <div class="day ml-md-4">
                    <span>Jour 4 </span>
                    <nuxt-img
                      src="icon-down.svg"
                      class="mx-2 icon-width"
                      alt="icon-down"
                    />
                  </div>
                  <span class="d-block ml-md-4">3 arrêts</span>
                  <div class="row mt-2">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">1</span>
                    </div>
                    <div class="col p-0">
                      <span
                        >Découverte des danses traditionnelles de Porto Novo</span
                      >
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">2</span>
                    </div>
                    <div class="col p-0">
                      <span>Prise de vues</span>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-auto ml-md-7">
                      <span class="number-programme text-center">3</span>
                    </div>
                    <div class="col p-0">
                      <span>Echanges & jeux sanctionnés de plusieurs lots</span>
                    </div>
                  </div>
                </div>
                <!-- book-now -->
                <div class="row align-items-center mt-10 mb-6">
                  <div class="col-auto reservation mr-3 mx-auto mx-xl-0">
                    <span
                      >Intéressé(e) par une visite détaillée de Porto Novo dans la
                      joie et la bonne humeur ?
                    </span>
                  </div>
                  <a
                    href="#"
                    class="btn btn-primary col-lg-4 mx-auto mx-xl-0 my-2 my-lg-0"
                    >Je réserve maintenant</a
                  >
                </div>
              </div>
            </nav-content>
            <nav-content :attr="'housing'">
              <div
                class="tab-pane fade show hebergement"
                id="ex1-tabs-3"
                role="tabpanel"
                aria-labelledby="ex1-tab-3"
              >
                <p>
                  L'hôtel Mosaly, une oasis de tranquillité et de confort au cœur
                  de Porto-Novo, la capitale historique et culturelle du Bénin.
                  Cet établissement moderne et élégant offre à ses clients une
                  expérience exceptionnelle alliant hospitalité chaleureuse,
                  installations de qualité et service personnalisé.
                </p>
                <div class="col-12 mx-auto height-img-hebergement">
                  <nuxt-img
                    src="img-hebergement.png"
                    class="image-content rounded-0"
                    alt="hebergement"
                  />
                </div>
                <div class="d-md-inline-flex align-items-center mt-3 mb-5 hotel">
                  <h4>Hôtel Mosaly</h4>
                  <span class="d-block mx-3">Porto-Novo/Bénin</span
                  ><span
                    ><i class="bi bi-star-fill star ml-2"></i> 4.8/600 Avis</span
                  >
                </div>
                <p class="mb-5">Type de chambres & Commodités</p>
                <div class="row">
                  <div class="col-lg-6 room">
                    <div class="img-room">
                      <nuxt-img
                        src="pack_1.png"
                        class="image-content rounded-0"
                        alt="hebergement"
                      />
                    </div>
                    <h4 class="mt-4">Chambre Double Deluxe</h4>
                    <span>Equipements de chambre</span>
                    <div class="mb-4 mt-2">
                      <nuxt-img
                        src="balcony.svg"
                        alt="balcony"
                        class="icon-width"
                      />
                      <nuxt-img
                        src="shower-head.svg"
                        alt="shower-head"
                        class="icon-width"
                      />
                      <nuxt-img src="phone.svg" alt="phone" class="icon-width" />
                      <nuxt-img
                        src="television.svg"
                        alt="television"
                        class="icon-width"
                      />
                      <nuxt-img src="wifi.svg" alt="wifi" class="icon-width" />
                      <nuxt-img src="yoga.svg" alt="yoga" class="icon-width" />
                    </div>
                  </div>
                  <div class="col-lg-6 room">
                    <div class="img-room">
                      <nuxt-img
                        src="pack_1.png"
                        class="image-content rounded-0"
                        alt="hebergement"
                      />
                    </div>
                    <h4 class="mt-4">Chambre Double Deluxe</h4>
                    <span>Equipements de chambre</span>
                    <div class="mb-4 mt-2">
                      <nuxt-img
                        src="balcony.svg"
                        alt="balcony"
                        class="icon-width"
                      />
                      <nuxt-img
                        src="shower-head.svg"
                        alt="shower-head"
                        class="icon-width"
                      />
                      <nuxt-img src="phone.svg" alt="phone" class="icon-width" />
                      <nuxt-img
                        src="television.svg"
                        alt="television"
                        class="icon-width"
                      />
                      <nuxt-img src="wifi.svg" alt="wifi" class="icon-width" />
                      <nuxt-img src="yoga.svg" alt="yoga" class="icon-width" />
                    </div>
                  </div>
                </div>
                <h4 class="my-4">Localisation</h4>
                <div class="row">
                  <img src="images/Location.png" alt="Location" />
                </div>
                <h4 class="my-4">Condition d’annulation</h4>
                <p>
                  Annulez 30 jours avant la date de votre départ pour obtenir un
                  remboursement intégral.
                </p>
                <!-- book-now -->
                <div class="row align-items-center mt-10 mb-6">
                  <div class="col-auto reservation mr-3 mx-auto mx-xl-0">
                    <span
                      >Intéressé(e) par une visite détaillée de Porto Novo dans la
                      joie et la bonne humeur ?
                    </span>
                  </div>
                  <a
                    href="#"
                    class="btn btn-primary col-lg-4 mx-auto mx-xl-0 my-2 my-lg-0"
                    >Je réserve maintenant</a
                  >
                </div>
              </div>
            </nav-content>
            <nav-content :attr="'avis'">
              <div
                class="tab-pane fade show"
                id="ex1-tabs-4"
                role="tabpanel"
                aria-labelledby="ex1-tab-4"
              >
                <div class="row">
                  <div class="col-lg-4 mb-3 mb-lg-0">
                    <div class="avis">
                      <div class="d-flex align-items-center mb-3">
                        <nuxt-img
                          src="articlehistory.png"
                          alt="profil-avis"
                          class="profil-avis"
                        />
                        <h4>Maxwell</h4>
                      </div>
                      <div class="position-relative">
                        <nuxt-img
                          src="quote-left.svg"
                          alt="quote-left"
                          class="icon-width"
                        />
                        <p>
                          Le pack Tourisme Culturel au Bénin a dépassé toutes mes
                          attentes. J'ai été émerveillé par la diversité des
                          activités culturelles proposées. J'ai visité des musées,
                          assisté à des performances artistiques traditionnelles
                          et même participé à des ateliers d'artisanat. Les
                          hébergements étaient confortables et offraient une vue
                          imprenable sur les paysages environnants. Je recommande
                          vivement cette expérience unique !
                        </p>
                        <nuxt-img
                          src="quote-right.svg"
                          alt="quote-right"
                          class="position-absolute bottom-0 end-0 icon-width"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-3 mb-lg-0">
                    <div class="avis">
                      <div class="d-flex align-items-center mb-3">
                        <nuxt-img
                          src="articlehistory.png"
                          alt="profil-avis"
                          class="profil-avis"
                        />
                        <h4>Maxwell</h4>
                      </div>
                      <div class="position-relative">
                        <nuxt-img
                          src="quote-left.svg"
                          alt="quote-left"
                          class="icon-width"
                        />
                        <p>
                          Le pack Tourisme Culturel au Bénin a dépassé toutes mes
                          attentes. J'ai été émerveillé par la diversité des
                          activités culturelles proposées. J'ai visité des musées,
                          assisté à des performances artistiques traditionnelles
                          et même participé à des ateliers d'artisanat. Les
                          hébergements étaient confortables et offraient une vue
                          imprenable sur les paysages environnants. Je recommande
                          vivement cette expérience unique !
                        </p>
                        <nuxt-img
                          src="quote-right.svg"
                          alt="quote-right"
                          class="position-absolute bottom-0 end-0 icon-width"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-3 mb-lg-0">
                    <div class="avis">
                      <div class="d-flex align-items-center mb-3">
                        <nuxt-img
                          src="articlehistory.png"
                          alt="profil-avis"
                          class="profil-avis"
                        />
                        <h4>Maxwell</h4>
                      </div>
                      <div class="position-relative">
                        <nuxt-img
                          src="quote-left.svg"
                          alt="quote-left"
                          class="icon-width"
                        />
                        <p>
                          Le pack Tourisme Culturel au Bénin a dépassé toutes mes
                          attentes. J'ai été émerveillé par la diversité des
                          activités culturelles proposées. J'ai visité des musées,
                          assisté à des performances artistiques traditionnelles
                          et même participé à des ateliers d'artisanat. Les
                          hébergements étaient confortables et offraient une vue
                          imprenable sur les paysages environnants. Je recommande
                          vivement cette expérience unique !
                        </p>
                        <nuxt-img
                          src="quote-right.svg"
                          alt="quote-right"
                          class="position-absolute bottom-0 end-0 icon-width"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center my-6">
                  <ul class="col-auto pagination">
                    <li class="page-item my-auto">
                      <a href="#">
                        <nuxt-img 
                        src="arrow-left.svg" 
                        alt="arrow-left"
                        class="icon-width"
                      /></a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link-avis" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link-avis" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link-avis" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link-avis" href="#">4</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link-avis" href="#">
                        <nuxt-img 
                        src="dot.svg" 
                        alt="dot"
                        class="icon-width"
                      />
                      </a>
                    </li>
                    <li class="page-item my-auto">
                      <a href="#">
                        <nuxt-img 
                        src="arrow-right.svg" 
                        alt="arrow-right"
                        class="icon-width"
                      /></a>
                    </li>
                  </ul>
                </div>
                <h3>Donner un avis:</h3>
                <div class="col-10 mx-auto text-center">
                  <textarea name="Avis" id="" cols="30" rows="8" class="w-100">
                  </textarea>
                  <a
                    href="#"
                    class="py-3 fs-3 my-3 btn btn-primary rounded-0 col-6"
                    >Envoyez</a
                  >
                </div>
              </div>
            </nav-content>
          </template>
        </nav-tabs>
      </ClientOnly>
      
    </DefaultLayout>
  </template>
  
  <script setup>
  import DefaultLayout from "@/layout/default.vue";
  import NavTabs from "@/components/widget/NavTabs/NavTabs.vue";
  import NavContent from "@/components/widget/NavTabs/NavContent.vue";
  import NavHeader from "@/components/widget/NavTabs/NavHeader.vue";
  </script>
  