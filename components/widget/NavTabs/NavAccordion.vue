<template>
  <div class="accordion" :id="accordionId">
    <div v-for="(item, index) in programs" :key="index" class="accordion-item">
      <h2 class="accordion-header" :id="getHeaderId(index)">
        <button
          class="accordion-button"
          :class="{ collapsed: !isPanelOpen(index) }"
          type="button"
          @click="toggleAccordion(index)"
          :aria-expanded="isPanelOpen(index)"
          :aria-controls="getCollapseId(index)"
        >
          {{ item.title }}
        </button>
      </h2>
      <div
        :id="getCollapseId(index)"
        class="accordion-collapse collapse"
        :class="{ show: isPanelOpen(index) }"
        :aria-labelledby="getHeaderId(index)"
      >
        <div class="accordion-body py-0">
          <span class="d-block ml-md-4">{{ item.subtitle }}</span>
          <div
            v-for="(detail, subIndex) in item.details"
            :key="subIndex"
            class="row my-4"
          >
            <div class="col-auto ml-md-7">
              <span class="number-programme text-center">{{
                subIndex + 1
              }}</span>
            </div>
            <div class="col p-0">
              <span>{{ detail }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    programs: {
      type: Array,
      required: true,
    },
    accordionId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      openPanels: [0],
    };
  },
  methods: {
    toggleAccordion(index) {
      const isOpen = this.isPanelOpen(index);
      if (isOpen) {
        this.openPanels = this.openPanels.filter(
          (panelIndex) => panelIndex !== index
        );
      } else {
        this.openPanels.push(index);
      }
    },
    isPanelOpen(index) {
      return this.openPanels.includes(index);
    },
    getHeaderId(index) {
      return `accordionHeader-${index}`;
    },
    getCollapseId(index) {
      return `accordionCollapse-${index}`;
    },
  },
};
</script>

  