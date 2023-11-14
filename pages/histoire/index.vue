<template>
  <DefaultLayout>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 mb-3">
          <h6 class="fw-semi-bold ml-3">Articles à la une</h6>
        </div>
        <div class="col-12 d-md-flex">
          <div class="col-md-7 mb-5">
            <CardInfos />

            <div class="col-md-5 mb-5">
              <CardInfos />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 mb-3">
            <h6 class="fw-semi-bold ml-3">Articles récents</h6>
          </div>
          <div class="col-12 d-md-flex">
            <div class="col-md-6 mb-5">
              <CardArticle />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="discover">
      <div class="container">
        <div class="row justify-content-center">
          <div class="text-start mb-5">
            <h4>Top Destinations</h4>
          </div>
          <div>
            <slide-element :className="'discover-blog'">
              <swiper-slide :class="'card'">
                <nuxt-img
                  src="discover_1.png"
                  class="card-img-top"
                  alt="discover-1"
                />
                <div class="card-body">
                  <h5 class="card-title">Culture Moderne Bronze</h5>
                  <p class="card-text">PORTO-NOVO, Bénin</p>
                  <div class="d-flex mb-3 justify-content-between">
                    <div class="special d-flex">
                      <div>100.000 FCFA</div>
                    </div>
                    <div>
                      <span class="star"><i class="bi bi-star-fill"></i></span>
                      4.1
                    </div>
                  </div>
                  <a href="#" class="d-block btn btn-primary">Je réserve</a>
                </div>
              </swiper-slide>
              <swiper-slide :class="'card'">
                <nuxt-img
                  src="discover_1.png"
                  class="card-img-top"
                  alt="discover-1"
                />
                <div class="card-body">
                  <h5 class="card-title">Culture</h5>
                  <p class="card-text">PORTO-NOVO, Bénin</p>
                  <div class="d-flex mb-3 justify-content-between">
                    <div class="special d-flex">
                      <div>100.000 FCFA</div>
                    </div>
                    <div>
                      <span class="star"><i class="bi bi-star-fill"></i></span>
                      4.1
                    </div>
                  </div>
                  <a href="#" class="d-block btn btn-primary">Je réserve</a>
                </div>
              </swiper-slide>
              <swiper-slide :class="'card'">
                <nuxt-img
                  src="discover_1.png"
                  class="card-img-top"
                  alt="discover-1"
                />
                <div class="card-body">
                  <h5 class="card-title">Culture Moderne Bronze</h5>
                  <p class="card-text">PORTO-NOVO, Bénin</p>
                  <div class="d-flex mb-3 justify-content-between">
                    <div class="special d-flex">
                      <div>100.000 FCFA</div>
                    </div>
                    <div>
                      <span class="star"><i class="bi bi-star-fill"></i></span>
                      4.1
                    </div>
                  </div>
                  <a href="#" class="d-block btn btn-primary">Je réserve</a>
                </div>
              </swiper-slide>
            </slide-element>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layout/default.vue";
</script>
