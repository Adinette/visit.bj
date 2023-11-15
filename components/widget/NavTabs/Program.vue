<template >
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
</template>  
<script setup> 
import NavContent from "@/components/widget/NavTabs/NavContent.vue"; 
</script> 