import {defineStore} from 'pinia'
export const useallSchoolStore = defineStore('counter', () => {
    const jsonData = ref({});

      async function setData() {
        const response = await useFetch('/api/fetchAll', {

          });

        console.log(response.data.value);

        jsonData.value=response.data.value;
      }
  
    return {jsonData, setData }
  })