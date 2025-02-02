<template>
  <div>
    <form class="max-w-128 lg:ml-96" name="addEventForm">
      <div class="space-y-12">
        <div class="pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 grid-cols-6">
            <div class="col-span-4">
              <div
                v-if="showsSuccessMessage"
                class="bg-green-500 text-white p-4 rounded-lg shadow-md flex items-center space-x-2"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Successfully added!</span>
              </div>
              <div
                v-if="showErrorMessage"
                class="bg-red-500 text-white p-4 rounded-lg shadow-md flex items-center space-x-2"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <span>Error, match date is required!</span>
              </div>
              <label for="username" class="block text/6 font-medium text-gray-900"></label>
              <div class="mt-2">
                <div
                  class="flex rounded bg-white shadow ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500 text"></span>
                  <input
                    type="date"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text/6"
                    placeholder="Select date"
                    v-model="eventDetail.matchDate"
                    name="dateField"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div
                  class="flex rounded bg-white shadow ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500 text"></span>
                  <input
                    type="time"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text/6"
                    placeholder="Select start time"
                    v-model="eventDetail.startTime"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div
                  class="flex rounded bg-white shadow ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500 text"></span>
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text/6"
                    placeholder="Add home country"
                    v-model="eventDetail.countryOfHomeTeam"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div
                  class="flex rounded bg-white shadow ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500 text"></span>
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text/6"
                    placeholder="Add home competitor"
                    v-model="eventDetail.homeTeam"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div
                  class="flex rounded bg-white shadow ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500 text"></span>
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text/6"
                    placeholder="Add away country"
                    v-model="eventDetail.countryOfAwayTeam"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div
                  class="flex rounded bg-white shadow ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500 text"></span>
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text/6"
                    placeholder="Add away competitor"
                    v-model="eventDetail.awayTeam"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div
                  class="flex rounded bg-white shadow ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500 text"></span>
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text/6"
                    placeholder="Add competetion"
                    v-model="eventDetail.nameOfCompetetion"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div
                  class="flex rounded bg-white shadow ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500 text"></span>
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text/6"
                    placeholder="Add stage"
                    v-model="eventDetail.stageOfCompetetion"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div
                  class="flex rounded bg-white shadow ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w"
                >
                  <span class="flex select-none items-center pl-3 text-gray-500 text"></span>
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text/6"
                    placeholder="Add stadium"
                    v-model="eventDetail.stadium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center gap-x-6 grid grid-cols-2 w-fit">
        <button
          type="button"
          @click="cancel"
          class="rounded bg-yellow-300 px-3 py-2 text font-semibold text-black shadow hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          @click="submit"
          class="rounded bg-indigo-600 px-3 py-2 text font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, ref } from 'vue'
import EventDetails from './EventDetails.ts'

export default {
  setup() {
    const data = ref(null)
    const eventDetail = ref(new EventDetails())

    const showsSuccessMessage = ref(false)

    const showErrorMessage = ref(false)

    const cancel = () => {
      eventDetail.value = new EventDetails()
      showsSuccessMessage.value = false
      showErrorMessage.value = false
    }

    const submit = (event) => {
      event.preventDefault()
      const isValidated = validateForm()
      if (isValidated) {
        const newEventDetailID = data.value.length + 1
        eventDetail.value.id = newEventDetailID

        data.value.push(eventDetail.value)
        localStorage.setItem('sportData', JSON.stringify(data.value))
        showsSuccessMessage.value = true
        showErrorMessage.value = false
      } else {
        showErrorMessage.value = true
      }
    }

    const validateForm = () => {
      let x = document.forms['addEventForm']['dateField'].value
      if (x === '') {
        return false
      }
      return true
    }

    onBeforeMount(() => {
      const localData = localStorage.getItem('sportData')

      if (localData) data.value = JSON.parse(localData)
    })
    return { showsSuccessMessage, data, eventDetail, cancel, submit, showErrorMessage }
  },
}
</script>
