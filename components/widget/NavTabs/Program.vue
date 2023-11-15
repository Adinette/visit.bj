<template >
  <nav-content :attr="'programs'">
    <div
      class="tab-pane fade show"
      id="ex1-tabs-2"
      role="tabpanel"
      NavAccordion
      aria-labelledby="ex1-tab-2"
    >
      <nav-accordion
        :programs="accordionItems"
        accordionId="accordionPanelsStayOpenExample"
      />

      <!-- book-now -->
      <div class="row align-items-center mt-10 mb-6">
        <div class="col-auto reservation mr-3 mx-auto mx-xl-0">
          <span
            >Intéressé(e) par une visite détaillée de Porto Novo dans la joie et
            la bonne humeur ?
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
import NavAccordion from "./NavAccordion.vue";

const accordionItems = [
  {
    title: "Jour 1",
    subtitle: "4 arrêts",
    details: [
      "Arrivée à Porto-Novo & installation à l’hôtel",
      "Visite de la statut de TOFFA 1er",
      "Exploration du Musée Honmè, qui abrite une riche collection d'artefacts culturels et historiques béninois",
      "Dîner dans un restaurant local pour déguster des plats traditionnels béninois",
    ],
  },
  {
    title: "Jour 2",
    subtitle: "3 arrêts",
    details: [
      "Visite du Musée Ethnographique de Porto-Novo pour en apprendre davantage sur les différentes ethnies du Bénin et leur patrimoine culturel",
      "Découverte & achat au centre artisanal de Porto Novo",
      "Escale à la place Chacha",
    ],
  },
  {
    title: "Jour 3",
    subtitle: "3 arrêts",
    details: [
      "Visite du  jardin de la place Jean Bayol",
      "Visite du Musée da Silva",
      "Visiter le centre Songhaï",
    ],
  },
  {
    title: "Jour 4",
    subtitle: "4 arrêts",
    details: [
      "Découverte des danses traditionnelles de Porto Novo",
      "Prise de vues",
      "Echanges & jeux sanctionnés de plusieurs lots",
    ],
  },
];
</script> 