<template>
  <div tabindex="0" class="collapse collapse-open  border border-base-300  rounded-box w-full bg-gray-100"
    @click="toggle">
    <div class="collapse-title text-xl font-medium cursor-pointer " @click="isHidden = !isHidden">
      Description
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 inline-block float-right" v-if="showSvg1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 inline-block float-right" v-if="showSvg2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>

    </div>
    <div class="collapse-content" v-if="isHidden">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <!-- Table -->
            <table class="rounded-t-lg m-5 w-full mx-auto bg-white text-gray-800 ">
              <tr class="text-left border-b-2 border-gray-300">
                <td class="px-4 py-3">
                  <p v-if="school?.school_desc !== ''" v-html="school?.school_desc"></p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
      
<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
const schoolStore = useSchoolStore();
const school = schoolStore.jsonData;
const isHidden = ref(true);
const showSvg1 = ref(true); //minus
const showSvg2 = ref(false); //plus
function toggle() {
  if (!showSvg2.value) {
    showSvg2.value = true;
    showSvg1.value = false;
  } else {
    showSvg2.value = false;
    showSvg1.value = true;
  }
}
</script>
      
<style scoped>

</style>