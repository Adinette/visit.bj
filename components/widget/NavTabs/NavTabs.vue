<template>
  <div class="nav-tabs container">
    <div class="nav nav-tabs mb-3" id="ex1" ref="header">
      <slot name="header" />
    </div>
    <div class="tab-content" ref="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
const header = ref();
const content = ref();
const headerReactive = reactive(header);
const contentPreload = reactive(content);

let contentElement: HTMLElement | undefined;

onMounted(() => {
  if (contentPreload.value as HTMLElement) {
    contentElement = contentPreload.value;
  }
  if (headerReactive.value) {
    const elementHeader = headerReactive.value as HTMLElement;

    if (elementHeader && elementHeader.children.length !== 0) {
      Object.entries(elementHeader.children).forEach((e) => {
        e[1].addEventListener("click", (item) => {
          Object.entries(elementHeader.children).forEach((itemHeader) => {
            itemHeader[1].classList.remove("active");
          });

          e[1].classList.add("active");
          
          const buttonRole = e[1].getAttribute("role");
          
          if (contentElement) {
            Object.entries(contentElement.children).forEach((el) => {
              const elementContentChildren = el[1] as HTMLElement;

              const contentRole =
                elementContentChildren.getAttribute("aria-tabs");

              if (contentRole === buttonRole) {
                elementContentChildren.classList.add("show", "active");
              } else {
                elementContentChildren.classList.remove("show", "active");
              }
            });
          }
        });
      });
    }
  }
});
</script>
