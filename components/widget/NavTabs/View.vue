<template>
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
</template>
<script setup> 
import NavContent from "@/components/widget/NavTabs/NavContent.vue"; 
</script>