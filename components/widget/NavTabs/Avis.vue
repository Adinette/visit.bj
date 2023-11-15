<template>
    <nav-content :attr="'avis'">
              <div
                class="tab-pane fade show"
                id="ex1-tabs-4"
                role="tabpanel"
                aria-labelledby="ex1-tab-4" >
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
<script setup> 
import NavContent from "@/components/widget/NavTabs/NavContent.vue"; 
</script>