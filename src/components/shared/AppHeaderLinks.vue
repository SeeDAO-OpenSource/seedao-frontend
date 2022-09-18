<script>
import { useI18n } from "vue-i18n"

export default {
  props: ["showModal", "isOpen"],
  setup() {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  }
}
</script>

<template>
  <!-- Header links -->
  <div
    :class="`m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
      ${isOpen ? 'block' : 'hidden'}
    `"
  >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      :aria-label="t('header.home')"
      >{{ t("header.home") }}</router-link
    >
    <router-link
      to="/activity"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      :aria-label="t('header.event')"
      >{{ t("header.event") }}</router-link
    >
    <a
      href="https://deschool.app/"
      target="_blank"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      :aria-label="t('header.deschool')"
      >{{ t("header.deschool") }}</a
    >
    <a
      target="_blank"
      href="https://forum.seedao.xyz/"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      :aria-label="t('header.govern')"
      >{{ t("header.govern") }}</a
    >
    <router-link
      to="/nft"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      :aria-label="t('header.nft')"
      >{{ t("header.nft") }}</router-link
    >
    <router-link
      to="/hall"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      :aria-label="t('header.hall')"
      >{{ t("header.hall") }}</router-link
    >
    <a
      href="https://beta.seedao.cc/"
      target="_blank"
      class="italic font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      :aria-label="t('header.seedhack')"
      >{{ t("header.seedhack") }}</a
    >
    <div
      class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
    >
      <button
        class="font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
        aria-label="接入錢包"
      >
        接入錢包
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
