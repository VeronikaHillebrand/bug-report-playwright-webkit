<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const searchTerm = ref<string | any>("");
const loading = ref(false);
const options = ref([]);
const {t: $t} = useI18n()
</script>

<template>
  <h1>Test</h1>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="searchTerm"
      editable
      :loading="loading"
      :options="options"
      :option-label="(c: any) => `${c.unit} ${c.name}`"
      :option-value="(c: any) => c"
      class="w-full"
      dropdown-icon="pi pi-search"
      :data-testid="'start-page-commune-selection-input'"
    >
      <template #empty>
        {{
          loading
            ? $t("startpage.search_input.empty_text_loading")
            : searchTerm
            ? $t("startpage.search_input.empty_text")
            : $t("startpage.search_input.empty_text_no_search_term")
        }}
      </template>
    </Dropdown>
  </div>
</template>
