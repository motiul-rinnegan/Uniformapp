<template>
    <div class="text-center">
        <p>Jump to CGPA to
            Percentage Converter</p>
    </div>
    <div class="text-center">
        <h1 class="head">CGPA Calculator- CGPA Converter</h1>
        <p>Calculate CGPA or Percentage as per your choice</p>
    </div>
    <div class="col-xs-15 col-md-6 text-center">
        <h2>According to Marks</h2>
        <div class="flex flex-col items-center py-0 justify-center">
            <input id="last_name" v-model="num1" type="number"
                class="w-64 input-borderedw-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
        </div><br>
        <div class="flex flex-col items-center py-0 justify-center">
            <input id="last_name" v-model="num2" type="number"
                class="w-64 input-borderedw-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
        </div><br>
        <div class="flex flex-col items-center py-0 justify-center">
            <input id="last_name" v-model="num3" type="number"
                class="w-64 input-borderedw-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
        </div><br>
        <div class="flex flex-col items-center py-0 justify-center">
            <input id="last_name" v-model="num4" type="number"
                class="w-64 input-borderedw-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
        </div><br>
        <div class="flex flex-col items-center py-0 justify-center">
            <input id="last_name" v-model="num5" type="number"
                class="w-64 input-borderedw-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
        </div><br>
        <div class="flex flex-col items-center py-0 justify-center">
            <input id="last_name" v-model="num6" type="number"
                class="w-64 input-borderedw-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
        </div><br>
        <div class="flex justify-center">
            <button
                class="w-64 text-white bg-red-500 hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                @click="Calculate">Calculate</button><br><br>
        </div>
    </div>
    <div class="col-xs-15 col-md-6" align="center">
        <h2>According to Grades</h2>

            <p> Subject 1 <select v-model="s1" class="select select-ghost w-full max-w-xs">
                    <option value="10">A1</option>
                    <option value="9">A2</option>
                    <option value="8">B1</option>
                    <option value="7">B2</option>
                    <option value="6">C1</option>
                    <option value="5">C2</option>
                    <option value="4">D</option>
                    <option value="0">E1</option>
                    <option value="0">E2</option>
                </select>
            </p>
            <p> Subject 2 <select v-model="s2" class="select select-ghost w-full max-w-xs">
                    <option value="10">A1</option>
                    <option value="9">A2</option>
                    <option value="8">B1</option>
                    <option value="7">B2</option>
                    <option value="6">C1</option>
                    <option value="5">C2</option>
                    <option value="4">D</option>
                    <option value="0">E1</option>
                    <option value="0">E2</option>
                </select>
            </p>
            <p>Subject 3 <select v-model="s3" class="select select-ghost w-full max-w-xs">
                    <option value="10">A1</option>
                    <option value="9">A2</option>
                    <option value="8">B1</option>
                    <option value="7">B2</option>
                    <option value="6">C1</option>
                    <option value="5">C2</option>
                    <option value="4">D</option>
                    <option value="0">E1</option>
                    <option value="0">E2</option>
                </select>
            </p>
            <p> Subject 4 <select v-model="s4" class="select select-ghost w-full max-w-xs">
                    <option value="10">A1</option>
                    <option value="9">A2</option>
                    <option value="8">B1</option>
                    <option value="7">B2</option>
                    <option value="6">C1</option>
                    <option value="5">C2</option>
                    <option value="4">D</option>
                    <option value="0">E1</option>
                    <option value="0">E2</option>
                </select>
            </p>
            <p>Subject 5 <select v-model="s5" class="select select-ghost w-full max-w-xs">
                    <option value="10">A1</option>
                    <option value="9">A2</option>
                    <option value="8">B1</option>
                    <option value="7">B2</option>
                    <option value="6">C1</option>
                    <option value="5">C2</option>
                    <option value="4">D</option>
                    <option value="0">E1</option>
                    <option value="0">E2</option>
                </select>
            </p>
            <p>Subject 6 <select v-model="s6" class="select select-ghost w-full max-w-xs" >

                    <option value="" readonly>Select Grades (Optional) </option>
                    <option value="10">A1</option>
                    <option value="9">A2</option>
                    <option value="8">B1</option>
                    <option value="7">B2</option>
                    <option value="6">C1</option>
                    <option value="5">C2</option>
                    <option value="4">D</option>
                    <option value="0">E1</option>
                    <option value="0">E2</option>
                </select>
            </p>
            <div class="flex justify-center">
            <button
                class="w-64 text-white bg-red-500 hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                @click="Calculation">Calculate</button>
        </div>
        
    </div>
{{ grade }}
</template>

<script setup lang="ts">
const num1 = ref('');
const num2 = ref('');
const num3 = ref('');
const num4 = ref('');
const num5 = ref('');
const num6 = ref('');
const s1 = ref('');
const s2 = ref('');
const s3 = ref('');
const s4 = ref('');
const s5 = ref('');
const s6 = ref('');
const sumNum = ref('');
const sum= ref('');
const cgpa = ref('');
const grade = ref('');
function Calculate() {
    if (num6.value !== '') {
        sumNum.value = num1.value + num2.value + num3.value + num4.value + num5.value + num6.value;
        cgpa.value = sumNum.value / 6;
    }
    else {
        sumNum.value = num1.value + num2.value + num3.value + num4.value + num5.value;
        cgpa.value = sumNum.value / 5;
    }
}
function Calculation() {
    if(s1.value !== '' && s2.value!=='' && s3.value !=='' && s4.value !== '' && s5.value !==''){
        if (s6.value !== '') {
            sum.value = Number(s1.value) + Number(s2.value) + Number(s3.value) + Number(s4.value) + Number(s5.value) + Number(s6.value);
            grade.value = sum.value / 6;
        }
        else {
            sum.value = Number(s1.value) + Number(s2.value) + Number(s3.value) + Number(s4.value) + Number(s5.value);
            grade.value = sum.value / 5;
        }
    }
    else{
        alert("Please Select Grades");
    }
}
</script>

<style scoped>

</style>