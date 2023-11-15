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
            <View/>
            <Program/>
            <Housing/>
            <Avis/> 
          </template>
        </nav-tabs>
      </ClientOnly>
      
    </DefaultLayout>
  </template>
  
  <script setup>
  import DefaultLayout from "@/layout/default.vue";
  import NavTabs from "@/components/widget/NavTabs/NavTabs.vue"; 
  import NavHeader from "@/components/widget/NavTabs/NavHeader.vue";
  import View from "@/components/widget/NavTabs/View.vue";
  import Program from "@/components/widget/NavTabs/Program.vue";
  import Housing from "@/components/widget/NavTabs/Housing.vue";
  import Avis from "@/components/widget/NavTabs/Avis.vue";
  </script>
  