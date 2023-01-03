<template>
  <div tabindex="0" class="collapse collapse-open border border-base-300  rounded-box w-full bg-gray-100">
    <div class="collapse-title text-xl font-medium ">Fee Structure</div>
    <div class="collapse-content ">
      <div class="flex flex-col gap-8 py-2 m-auto md:flex-row">
        <!-- Card-1 -->
        <div class="grid grid-rows-2 grid-flow-col gap-2">
          <div class="stats shadow overflow-hidden md:w-48 w-42 justify-center md:justify-between">
            <div class="stat">
              <div class="stat-title text-xl text-red-600">Total Cost</div>
              <div class="stat-value text-lg"
                v-if="school?.avg_fees_day == 'None' && school?.avg_fees_residential !== 'None'"
                v-html="school?.avg_fees_residential * 12"></div>
              <div class="stat-value text-lg"
                v-if="school?.avg_fees_day !== 'None' && school?.avg_fees_residential == 'None'"
                v-html="school?.avg_fees_day * 12"></div>
              <div class="stat-value text-lg"
                v-if="school?.avg_fees_day == 'None' && school?.avg_fees_residential == 'None'"
                v-html="school?.avg_fees_residential"></div>
              <div class="stat-value text-lg"
                v-if="school?.avg_fees_day !== 'None' && school?.avg_fees_residential !== 'None'"
                v-html="school?.avg_fees_residential * 12"></div>
              <div class="stat-desc text-sm text-blue-400">What is total cost?</div>
            </div>
          </div>
          <div class="stats shadow overflow-hidden md:w-48 w-42 justify-center md:justify-between">
            <div class="stat">
              <div class="stat-title text-xl text-red-600">Monthly Cost</div>
              <div class="stat-value text-lg"
                v-if="school?.avg_fees_day == 'None' && school?.avg_fees_residential !== 'None'"
                v-html="school?.avg_fees_residential"></div>
              <div class="stat-value text-lg"
                v-if="school?.avg_fees_residential == 'None' && school?.avg_fees_day !== 'None'"
                v-html="school?.avg_fees_day"></div>
              <div class="stat-value text-lg"
                v-if="school?.avg_fees_day == 'None' && school?.avg_fees_residential == 'None'"
                v-html="school?.avg_fees_residential"></div>
              <div class="stat-value text-lg"
                v-if="school?.avg_fees_day !== 'None' && school?.avg_fees_residential !== 'None'"
                v-html="school?.avg_fees_residential"></div>
              <div class="stat-desc text-sm text-blue-400">What is monthly cost?</div>
            </div>
          </div>
        </div>
        <div class="stats overflow-hidden w-full">
          <table class="container rounded-t-lg md:w-full border border-base-100">
            <thead class="bg-gray-200 ">
              <tr class=" hover:shadow-lg hover:border-transparent">
                <th
                  class="text-left font-bold text-xl md:text-center text-sm font-medium text-gray-900 py-4 text-center">
                  Type</th>
                <th class="text-left font-bold text-xl md:text-center text-sm font-medium text-gray-900 ">Amount</th>
                <th class="text-left font-bold text-xl md:text-center text-sm font-medium text-gray-900 pl-2 ">Frequency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b hover:bg-red-500 hover:rounded-xl">
                <td class="py-2 md:text-center ">Day Fees</td>
                <td class="py-2 md:text-center" v-if="school?.day_fees == 'None'" v-html="school?.day_fees"></td>
                <td class="py-2 md:text-center" v-if="school?.day_fees !== 'None'" v-html="school?.day_fees"></td>
                <td class="py-2 md:text-center pl-2">One TIme</td>
              </tr>
              <tr class="bg-white border-b hover:bg-red-500 ">
                <td class="py-2 md:text-center">Residential Fees</td>
                <td class="py-2 md:text-center" v-if="school?.residential_fees == 'None'"
                  v-html="school?.residential_fees"></td>
                <td class="py-2 md:text-center" v-if="school?.residential_fees !== 'None'"
                  v-html="school?.residential_fees"></td>
                <td class="py-2 md:text-center pl-2">One Time</td>
              </tr>
              <tr class="bg-white border-b hover:bg-red-500 ">
                <td class="py-2 md:text-center">Average Fees(Day)</td>
                <td class="py-2 md:text-center" v-if="school?.avg_fees_day == 'None'" v-html="school?.avg_fees_day">
                </td>
                <td class="py-2 md:text-center" v-if="school?.avg_fees_day !== 'None'" v-html="school?.avg_fees_day * 12">
                </td>
                <td class="py-2 md:text-center pl-2">One Time</td>
              </tr>
              <tr class="bg-white border-b hover:bg-red-500 ">
                <td class="py-2 md:text-center">Average Fees(Residential)</td>
                <td class="py-2 md:text-center" v-if="school?.avg_fees_residential == 'None'"
                  v-html="school?.avg_fees_residential"></td>
                <td class="py-2 md:text-center" v-if="school?.avg_fees_residential !== 'None'"
                  v-html="school?.avg_fees_residential * 12"></td>
                <td class="py-2 md:text-center pl-2">One Time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
const schoolStore = useSchoolStore();
const school = schoolStore.jsonData;
</script>

<style scoped>
.grid {
  /* Mobile by default as Roy pointed out */
  display: flex;
  flex-direction: row;

}

@media (min-width: 768px) {

  /* For desktops */
  .grid {
    flex-direction: column;
  }
}
</style>