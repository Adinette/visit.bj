<template>
    <DefaultLayout>
      <div class="category">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 text-center mb-5">
              <h2>Découvrir le Bénin</h2>
            </div>
            <div class="col-12 mb-5">
              <slide-element :className="'categoryliste nav'">
                <swiper-slide class="category-blog">
                  <div>
                    <div class="mb-2">
                      <svg class="svg" width="52" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M30.1237 2.10078C30.8756 2.10078 31.5559 2.41683 32.0482 2.92808C32.5405 3.43933 32.8449 4.14579 32.8449 4.92661C32.8449 5.70744 32.5405 6.41389 32.0482 6.92515C31.5559 7.4364 30.8756 7.75245 30.1237 7.75245C29.3718 7.75245 28.6915 7.4364 28.1991 6.92515C27.7068 6.41389 27.4025 5.70744 27.4025 4.92661C27.4025 4.14579 27.7068 3.43933 28.1991 2.92808C28.687 2.42148 29.3718 2.10078 30.1237 2.10078ZM42.0513 27.9609C40.9279 26.8361 39.8493 25.7811 39.4778 25.558C38.6005 25.0374 36.5776 23.6013 35.6869 23.6199C35.0335 23.6385 34.4203 24.0196 33.8474 24.8004L30.8487 29.4946L30.2848 30.0988L29.7209 29.4946L26.7222 24.8004C26.1493 24.0196 25.5361 23.6338 24.8827 23.6199C23.992 23.6013 21.969 25.0374 21.0918 25.558L19.0061 26.7896L4.56768 30.0709C3.63674 30.7867 -2.50385 37.7537 -1.35809 38H24.1487H24.1666H29.5373H53.5V32.2368L49.1049 30.0849C47.6906 29.3924 46.2271 30.5404 45.4573 30.9261V22.3603H52.7123C53.4373 22.272 53.6029 21.3564 53.2717 20.9567L52.8287 20.4222L48.805 15.5142H51.486C52.1215 15.3887 52.4035 14.4777 51.8485 13.9107L47.2341 8.29623H48.4515C49.3018 8.29623 49.7181 7.534 49.2302 6.80431L44.7277 1.34785C44.4681 1.03645 44.2085 0.613503 43.7744 0.59956C43.2731 0.585616 42.9598 1.11081 42.6734 1.46869L38.435 6.69276C37.8889 7.45499 38.0993 8.27299 38.9496 8.24511H40.3058L35.66 13.9154C35.1498 14.5753 35.4631 15.5142 36.3001 15.3887H38.6095L38.7348 15.5188L34.4203 20.7754C33.9369 21.547 34.1652 22.4719 35.2975 22.365H42.0513V27.9609ZM13.5682 2.20768C14.2888 1.95205 15.0452 2.02642 15.6807 2.34711C16.3163 2.66781 16.8354 3.24878 17.0816 3.99706C17.3278 4.74535 17.2606 5.53082 16.9473 6.1908C16.6385 6.85078 16.0791 7.38992 15.3585 7.64555C14.6379 7.90117 13.8815 7.83146 13.246 7.50611C12.6104 7.18542 12.0913 6.60445 11.8451 5.85616C11.5989 5.10788 11.6661 4.32241 11.9794 3.66243C12.2927 3.00245 12.8432 2.46795 13.5682 2.20768ZM20.7158 10.2436C20.6084 9.83464 20.8456 9.41169 21.2395 9.30479C21.6333 9.19325 22.0406 9.43958 22.1436 9.84858L22.3808 10.7595L22.4121 10.7456L22.4211 10.7409C22.703 10.6433 23.0298 10.7038 23.3162 10.8804C23.5221 11.0059 23.7056 11.1871 23.8354 11.4149C23.9696 11.6426 24.0502 11.9122 24.0502 12.2096C24.0457 12.6372 23.8667 13.1113 23.4102 13.5854C23.3923 13.604 23.3699 13.6226 23.343 13.6272L23.1416 13.7109L25.2542 21.8909C25.1199 21.8723 24.9811 21.8537 24.8469 21.8537C24.5201 21.8444 24.1531 21.9327 23.7727 22.0722L21.7587 14.2779L21.2395 14.4917L21.047 14.566C19.9236 14.9797 19.1046 15.2818 17.6769 14.9146C17.6679 14.91 17.659 14.91 17.6455 14.9053C16.6475 14.5056 16.1283 13.9432 15.627 13.3948L15.5554 13.3158L14.9154 17.536C15.4883 17.9078 16.0567 18.1866 16.5938 18.4469C18.2274 19.237 19.5701 19.8924 19.861 22.5555C19.9147 23.0342 19.8878 23.4851 19.8655 23.9731V23.9824C19.861 24.0521 19.8565 24.1265 19.852 24.3031L19.2299 24.6703C18.5228 24.7167 17.7261 24.8748 16.8847 25.1071C16.8981 24.7539 16.916 24.4053 16.9339 24.0567L16.9473 23.8151C16.9608 23.5362 16.9742 23.2806 16.9608 23.0389C16.9473 22.8112 16.9071 22.5974 16.8131 22.3882L16.7862 22.3324C16.6833 22.1047 16.5893 21.8863 16.4505 21.8212C16.1686 21.6864 15.73 21.5191 15.2242 21.3471C14.6469 21.1473 14.0024 20.9474 13.4339 20.7847C13.0177 22.2209 12.4493 23.169 11.8451 24.819C11.6347 25.386 11.4244 25.9437 11.2051 26.4782C10.9992 26.5712 10.8067 26.6595 10.6188 26.7478C9.68783 27.18 9.04333 27.5147 8.05421 27.2962C7.95127 27.273 7.84386 27.2544 7.73644 27.2312C8.13478 26.1575 8.55549 24.9445 8.96725 23.7221C9.58489 21.8909 10.1757 20.8033 10.6098 19.3068C10.3502 18.9768 10.1041 18.6096 9.93399 18.2006C9.74601 17.7544 9.6565 17.2664 9.75049 16.7458L10.659 11.638L10.6098 11.6333C10.292 11.6194 10.0325 11.6054 9.73258 11.7449C9.31635 11.9354 8.9941 12.3165 8.6271 12.7441C8.4794 12.9161 8.32723 13.0974 8.15268 13.2786L8.13925 13.2879C8.00946 13.4273 7.87519 13.5714 7.74539 13.7062L6.13863 15.3933C6.06702 15.4677 5.95961 15.4677 5.888 15.3933L4.13802 13.4831C4.07088 13.4088 4.07088 13.2926 4.14249 13.2228L5.74478 11.5404C5.88352 11.3963 6.00436 11.2661 6.11626 11.1453L6.13416 11.1267C6.85474 10.3087 7.44553 9.64873 8.19743 9.20719C8.96277 8.76101 9.8758 8.53327 11.2454 8.59834H11.2498C11.7377 8.60298 12.315 8.65876 12.7895 8.70523C13.0088 8.72383 13.2102 8.74706 13.3758 8.75636C15.6807 8.91438 16.7638 10.1739 17.6008 11.1546C17.9723 11.5868 18.29 11.9633 18.6391 12.1353C18.8003 12.2143 19.0598 12.1027 19.3508 11.9773C19.5253 11.8982 19.7133 11.8192 19.9102 11.7635C20.04 11.7123 20.1071 11.6844 20.1609 11.6659C20.2325 11.638 20.2772 11.6194 20.3086 11.6054L20.9933 11.3219L20.7158 10.2436ZM27.6889 1.05969C27.6039 0.910959 27.6531 0.715753 27.8008 0.627446C27.944 0.539139 28.132 0.590264 28.217 0.74364L28.6064 1.44545C28.6915 1.59418 28.6422 1.78938 28.4945 1.87769C28.3468 1.966 28.1633 1.91487 28.0783 1.7615L27.6889 1.05969ZM29.8775 0.316047C29.8775 0.139432 30.0118 0 30.1818 0C30.3519 0 30.4862 0.14408 30.4862 0.316047V1.1294C30.4862 1.30602 30.3519 1.44545 30.1818 1.44545C30.0118 1.44545 29.8775 1.30137 29.8775 1.1294V0.316047ZM32.1332 0.808708C32.2183 0.65998 32.4018 0.604207 32.5495 0.692515C32.6927 0.780822 32.7464 0.97138 32.6614 1.12476L32.272 1.82657C32.1869 1.97994 32.0034 2.03107 31.8557 1.94276C31.708 1.85445 31.6588 1.66389 31.7438 1.51052L32.1332 0.808708ZM33.8474 2.40753C33.9951 2.31923 34.1786 2.37035 34.2636 2.52373C34.3487 2.67246 34.2994 2.86766 34.1518 2.95597L33.4759 3.36032C33.3327 3.44863 33.1447 3.3975 33.0597 3.24413C32.9747 3.0954 33.0239 2.9002 33.1716 2.81189L33.8474 2.40753ZM34.5635 4.68028C34.7336 4.68028 34.8679 4.81972 34.8679 4.99633C34.8679 5.17295 34.7291 5.31238 34.5635 5.31238H33.7803C33.6102 5.31238 33.4759 5.17295 33.4759 4.99633C33.4759 4.81972 33.6102 4.68028 33.7803 4.68028H34.5635ZM34.0891 7.02275C34.2323 7.11106 34.286 7.30161 34.201 7.45499C34.1159 7.60372 33.9324 7.65949 33.7847 7.57118L33.1089 7.16683C32.9657 7.07852 32.912 6.88796 32.997 6.73459C33.0821 6.58121 33.2656 6.53009 33.4133 6.61839L34.0891 7.02275ZM32.5539 8.80284C32.639 8.95157 32.5897 9.14677 32.442 9.23508C32.2988 9.32339 32.1109 9.27226 32.0258 9.11889L31.6364 8.41707C31.5514 8.26835 31.6006 8.07314 31.7483 7.98483C31.8915 7.89653 32.0795 7.94765 32.1646 8.10103L32.5539 8.80284ZM30.3653 9.54648C30.3653 9.72309 30.2266 9.86252 30.061 9.86252C29.8909 9.86252 29.7567 9.71844 29.7567 9.54648V8.73312C29.7567 8.55651 29.8909 8.41707 30.061 8.41707C30.2311 8.41707 30.3653 8.55651 30.3653 8.73312V9.54648ZM28.1096 9.05382C28.0246 9.20254 27.8411 9.25832 27.6934 9.17001C27.5502 9.0817 27.4965 8.89114 27.5815 8.73777L27.9709 8.03596C28.0559 7.88723 28.2394 7.83146 28.3871 7.91977C28.5348 8.00807 28.584 8.19863 28.499 8.35201L28.1096 9.05382ZM26.3954 7.45499C26.2522 7.5433 26.0642 7.49217 25.9792 7.3388C25.8942 7.19007 25.9434 6.99486 26.0911 6.90656L26.7669 6.5022C26.9101 6.41389 27.0981 6.46502 27.1832 6.61839C27.2682 6.76712 27.219 6.96233 27.0713 7.05064L26.3954 7.45499ZM25.6793 5.18224C25.5093 5.18224 25.375 5.03816 25.375 4.86619C25.375 4.68958 25.5137 4.55015 25.6793 4.55015H26.4626C26.6327 4.55015 26.7669 4.68958 26.7669 4.86619C26.7669 5.04281 26.6327 5.18224 26.4626 5.18224H25.6793ZM26.1538 2.83977C26.0105 2.75147 25.9568 2.56091 26.0419 2.40753C26.1269 2.25881 26.3104 2.20303 26.4581 2.29134L27.1339 2.69569C27.2816 2.784 27.3309 2.97456 27.2458 3.12794C27.1608 3.27666 26.9773 3.33244 26.8296 3.24413L26.1538 2.83977Z"
                          fill="#FF8800"/>
                      </svg>
                    </div>
                    <div>Nature</div>
                  </div>
                </swiper-slide>
              </slide-element> 
            </div>
            <div class="col-12 mb-5">
              <form>
                <div class="d-flex flex-column flex-md-row justify-content-center" >
                  <div class="mb-4 mb-md-0 mr-0 mr-lg-3">
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Rechercher une destination"
                      required
                    />
                  </div>
                  <div class="mb-4 mb-md-0 mr-0 mr-lg-3">
                    <select class="form-select">
                      <option selected>Arrivée</option>
                      <!-- Ajoutez vos options de pays ici -->
                    </select>
                  </div>
                  <div class="mb-4 mb-md-0 mr-0 mr-lg-3">
                    <select class="form-select">
                      <option selected>Départ</option>
                      <!-- Ajoutez vos options de ville ici -->
                    </select>
                  </div>
                  <div class="mb-4 mb-md-0 mr-0 mr-lg-3">
                    <select class="form-select">
                      <option selected>Nombre de participants</option>
                      <!-- Ajoutez vos options de catégorie ici -->
                    </select>
                  </div>
                  <div>
                    <button type="submit" class="btn btn-primary">
                      <span class="d-none d-lg-inline-block"
                        ><i class="bi bi-search"></i
                      ></span>
                      Rechercher
                    </button>
                  </div>
                </div>
              </form>
              <!-- form -->
            </div>
            <div class="col-11">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="content1"
                  role="tabpanel"
                  aria-labelledby="content1-tab" >
                  <div class="row">
                    <!-- card-1 -->
                    <div class="col-sm-12 col-md-4 col-lg-4 mb-5">
                      <div class="card">
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
                              <span class="star"
                                ><i class="bi bi-star-fill"></i
                              ></span>
                              4.1
                            </div>
                          </div>
                          <a href="#" class="d-block btn btn-primary"
                            >Je réserve</a
                          >
                        </div>
                      </div>
                    </div>
  
                    <div class="col-12 text-center">
                      <a class="btn btn-outline-primary mb-11" href="#" >Afficher plus <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M18.9815 3.93538C19.1394 4.09322 19.2342 4.30323 19.2482 4.52601C19.2622 4.74878 19.1944 4.96901 19.0576 5.14538L18.9815 5.23155L11.6482 12.5649C11.4904 12.7227 11.2804 12.8175 11.0576 12.8315C10.8348 12.8455 10.6146 12.7778 10.4382 12.641L10.352 12.5649L3.01871 5.23155C2.85431 5.06658 2.75886 4.84523 2.75175 4.61244C2.74464 4.37966 2.82641 4.15289 2.98044 3.97821C3.13447 3.80352 3.34922 3.69402 3.58106 3.67193C3.81291 3.64984 4.04447 3.71683 4.22871 3.8593L4.31488 3.93538L11.0001 10.6206L17.6854 3.93538C17.8573 3.76353 18.0904 3.66699 18.3335 3.66699C18.5765 3.66699 18.8096 3.76353 18.9815 3.93538Z" fill="#FF8800"/>
  <path d="M19.2482 10.026C19.2342 9.80323 19.1394 9.59322 18.9815 9.43538C18.8096 9.26353 18.5765 9.16699 18.3335 9.16699C18.0904 9.16699 17.8573 9.26353 17.6854 9.43538L11.0001 16.1206L4.31488 9.43538L4.22871 9.3593C4.04447 9.21683 3.81291 9.14984 3.58106 9.17193C3.34922 9.19402 3.13447 9.30352 2.98044 9.47821C2.82641 9.65289 2.74464 9.87966 2.75175 10.1124C2.75886 10.3452 2.85431 10.5666 3.01871 10.7315L10.352 18.0649L10.4382 18.141C10.6146 18.2778 10.8348 18.3455 11.0576 18.3315C11.2804 18.3175 11.4904 18.2227 11.6482 18.0649L18.9815 10.7315L19.0576 10.6454C19.1944 10.469 19.2622 10.2488 19.2482 10.026Z" fill="#FF8800"/>
</svg></a>
                    </div>
                  </div>
                </div>
                <!-- tabs Nature -->
                <div
                  class="tab-pane fade"
                  id="content2"
                  role="tabpanel"
                  aria-labelledby="content2-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Divertissement</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Divertissement -->
                <div
                  class="tab-pane fade"
                  id="content3"
                  role="tabpanel"
                  aria-labelledby="content3-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Évènementiel</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Évènementiel -->
                <div
                  class="tab-pane fade"
                  id="content4"
                  role="tabpanel"
                  aria-labelledby="content4-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Bien-être, Relaxation</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Bien-être, Relaxation -->
                <div
                  class="tab-pane fade"
                  id="content5"
                  role="tabpanel"
                  aria-labelledby="content5-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Culture</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Culture -->
                <div
                  class="tab-pane fade"
                  id="content6"
                  role="tabpanel"
                  aria-labelledby="content6-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Gastronomie</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Gastronomie -->
                <div
                  class="tab-pane fade"
                  id="content7"
                  role="tabpanel"
                  aria-labelledby="content7-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Réligion & Famille</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Réligion & Famille -->
                <div
                  class="tab-pane fade"
                  id="content8"
                  role="tabpanel"
                  aria-labelledby="content8-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Sport</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Sport -->
                <div
                  class="tab-pane fade"
                  id="content9"
                  role="tabpanel"
                  aria-labelledby="content9-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Industrie</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Industrie -->
                <div
                  class="tab-pane fade"
                  id="content10"
                  role="tabpanel"
                  aria-labelledby="content10-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Social & solidarité</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Social & solidarité -->
                <div
                  class="tab-pane fade"
                  id="content11"
                  role="tabpanel"
                  aria-labelledby="content11-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Éco-tourisme</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Éco-tourisme-->
                <div
                  class="tab-pane fade"
                  id="content12"
                  role="tabpanel"
                  aria-labelledby="content12-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Artisanat & Commerce</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Artisanat & Commerce-->
                <div
                  class="tab-pane fade"
                  id="content13"
                  role="tabpanel"
                  aria-labelledby="content13-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Affaire</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Affaire-->
                <div
                  class="tab-pane fade"
                  id="content14"
                  role="tabpanel"
                  aria-labelledby="content14-tab"
                >
                  <div class="container">
                    <div class="row">
                      <div class="text-center">
                        <h4>Contenu de l'onglet Science</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tabs Science-->
              </div>
            </div>
            <!-- container of category-->
          </div>
        </div>
      </div> 
    </DefaultLayout>
  </template>
  
  <script setup>
  import DefaultLayout from "@/layout/default.vue";
  </script>
  