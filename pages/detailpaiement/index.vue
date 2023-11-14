<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand">
        <nuxt-img src="logo.png" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mr-3">
            <a class="nav-link" href="/destination.html">Découvrir le Bénin</a>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="/history.html">Nos histoires</a>
          </li>
        </ul>
        <div>
          <nuxt-img src="pack_1.png" class="profil" />
          <span>Wilfried GOGAN</span>
        </div>
      </div>
    </nav>
  </div>

  <div class="info-paiement">
    <div class="container">
      <div class="row my-6">
        <div class="col-lg-7">
          <div class="px-lg-14 personal-info">
            <div class="row justify-content-between align-items-center">
              <h3 class="col-auto">Compte</h3>
              <span class="bar w-100 col"></span>
              <span class="col-auto text-center p-0" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM9.003 14L16.073 6.929L14.659 5.515L9.003 11.172L6.174 8.343L4.76 9.757L9.003 14Z" fill="#FF8800"/>
</svg></span>
              <span class="bar col"></span>
              <h3 class="col">Paiement</h3>
            </div>
            <h3 class="my-5">Détails de paiement</h3>
            <h3 class="">Choisir une méthode de paiement</h3>
            <div class="mt-3">
              <input
                type="radio"
                name="ratio"
                @click="toggleContenu2"
                class="mr-2"
              />
              <span>Carte de crédit</span>
              <input
                type="radio"
                name="ratio"
                @click="toggleContenu1"
                class="mx-2"
              />
              <span>Mobile Money</span>
            </div>

            <div class="  " v-if="contenuVisible1">
              <div class="d-block my-4">
                <nuxt-img src="mtn.png" />
                <nuxt-img src="moov.png" class="mx-3" />
              </div>

              <div class="position-relative mb-3">
                <input
                  class="floating-input form-control pl-10"
                  type="number"
                  id="email"
                  placeholder="67 35 35 35"
                  required
                />
                <span class="code-country">+229</span>
                <label class="floating-label">Numéro de téléphone</label>
              </div>
            </div>

            <div v-if="contenuVisible2">
              <div class="d-block my-4">
                <nuxt-img src="cb.png" />
                <nuxt-img src="visa.png" />
                <nuxt-img src="mastercard.png" />
              </div>
              <div class="position-relative mb-4">
                <input
                  class="floating-input form-control"
                  type="text"
                  id="name"
                  placeholder="Nom"
                  required
                />
                <label class="floating-label">Nom</label>
              </div>
              <div class="position-relative mb-3">
                <input
                  class="floating-input form-control"
                  type="number"
                  id="email"
                  placeholder="Numéro de carte"
                  required
                />
                <label class="floating-label">Numéro de carte</label>
              </div>
              <div class="row">
                <div class="position-relative mb-3 col">
                  <input
                    class="floating-input form-control"
                    type="date"
                    id="expiration"
                    placeholder="Expiration"
                    required
                  />
                  <label class="floating-label">Expiration</label>
                </div>
                <div class="position-relative mb-3 col">
                  <input
                    class="floating-input form-control"
                    type="number"
                    id="cvc"
                    placeholder="123"
                    required
                  />
                  <label class="floating-label">cvc</label>
                </div>
              </div>
            </div>
            <div class="bar2 my-10"></div>

            <div class="w-100 mx-auto text-center">
              <a href="#" class="text-black mr-md-6">Annuler commande</a>
              <a href="#" class="btn btn-primary">Procéder au paiement</a>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="resume-paiement px-lg-8">
            <h3 class="text-black">Résumé de votre commande</h3>
            <nuxt-img
              src="articlehistory2.png"
              class="image-content img-order img-heaight-order rounded-0"
            />
            <div class="row align-items-center my-4">
              <div class="col">
                <h5>Culture Moderne Bronze</h5>
                <h5 class="fw-bold">CFA 100.000</h5>
              </div>
              <div class="col-auto">
                <ul class="pagination justify-content-end">
                  <li class="page-item active">
                    <a class="page-link-paiement" href="#">-</a>
                  </li>
                  <li class="my-auto"><span>1</span></li>
                  <li class="page-item">
                    <a class="page-link-paiement" href="#">+</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="position-relative">
                  <input
                    class="floating-input form-control"
                    type="text"
                    id="promo-code"
                    placeholder="Code Promo"
                    required
                  />
                  <label class="floating-label">Code Promo</label>
                </div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-primary py-3 float-end">
                  Appliquer</a
                >
              </div>
            </div>
            <div class="d-flex justify-content-between mt-8">
              <h6 class="">Sous total</h6>
              <h6 class="">CFA 95.000</h6>
            </div>
            <div class="d-flex justify-content-between my-4">
              <h6 class="float-start">TVA</h6>
              <h6 class="float-end">CFA 5.000</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6 class="fw-bold">Total</h6>
              <h6 class="">CFA 100.000</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ClientOnly> </ClientOnly>
</template>

<script>
export default {
  data() {
    return {
      contenuVisible1: false,
      contenuVisible2: true,
    };
  },
  methods: {
    toggleContenu1() {
      this.contenuVisible1 = true;
      this.contenuVisible2 = false;
    },
    toggleContenu2() {
      this.contenuVisible1 = false;
      this.contenuVisible2 = true;
    },
  },
};
</script>
