<template>
  <Head>
    <Title>Uniform Application | {{ school?.school_name }}</Title>
    <Meta name="description" :content="school?.alt_name" />
  </Head>
  <div>
  <SchoolDetails />
  </div>
  <div class="py-2">
  <FeeStructure />
  </div>
  <div v-if="showAdm" class="py-2">
  <Admission />
  </div>
  <div v-if="showDesc" class="py-2">
  <Description />
  </div>
  <div class="py-2">
  <ContactDetails />
  </div>
  <div class="py-2">
  <Reviews />
  </div>

</template>
<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
const route = useRoute();
const slug = route.params.slug;
const url = `http://localhost:3000/${slug}`;
const schoolStore = useSchoolStore();
schoolStore.setData(slug as string);
const school = schoolStore.jsonData;
school === "" && useRouter().push("/404Error");

const showDesc=ref(true);
const showAdm=ref(true);
if(school?.school?.school_desc == ''){
  showDesc.value=false;
}
if(school?.school?.school_update == '' && school?.school?.school_update_new == '' && school?.school?.school_crit == ''){
  showAdm.value=false;
}
</script>
<style scoped></style>