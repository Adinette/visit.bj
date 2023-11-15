<template>
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
</template>
<script setup> 
import NavContent from "@/components/widget/NavTabs/NavContent.vue"; 
</script>