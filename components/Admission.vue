<template>
  <div tabindex="0" class="collapse  border border-base-300  rounded-box w-full bg-gray-100 inline-block">
    <div class="collapse-title text-xl font-medium ">
      Admission Details
    </div>
    <div class="collapse-content">
      <div
        class="bg-white  py-4 max-w-64 p-6  border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <ul class=" list-reset flex flex-col">
          <li v-if="showDiv" class=" rounded-t relative -mb-px block border p-4 border-grey">
            <div class="font-bold text-center">Admission Update</div>
            <!-- <div v-if="school?.admission_update == ''" class="text-center">Coming Soon</div> -->
            <div v-if="school?.admission_update !== ''" v-html="school?.admission_update" class="text-center"></div>
          </li>
          <li v-if="showDiv2" class="relative -mb-px block border p-4 border-grey">
            <div class="font-bold text-center">Admission Update(New)</div>
            <div v-if="school?.admission_update_new == ''" class="text-center">---</div>
            <div v-if="school?.admission_update_new !== ''" class="text-center" v-html="school?.admission_update_new">
            </div>
          </li>
          <li v-if="showDiv3" class="relative -mb-px block border p-4 border-grey">
            <div class="font-bold text-center">Admission Criteria</div>
            <div v-if="school?.admission_crit == ''" class="text-center">---</div>
            <div v-if="school?.admission_crit !== ''" v-html="school?.admission_crit" class="text-center"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
const schoolStore = useSchoolStore();
const school = schoolStore.jsonData;
const showDiv = ref(true);
const showDiv2 = ref(true);
const showDiv3 = ref(true);
if (school?.admission_update == '') {
  showDiv.value = false;
}
if (school?.admission_update_new == '') {
  showDiv2.value = false;
}
if (school?.admission_crit == '') {
  showDiv3.value = false;
}
</script>
    
<style scoped>

</style>