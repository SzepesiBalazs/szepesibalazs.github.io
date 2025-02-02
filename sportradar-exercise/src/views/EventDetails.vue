<template>
  <div class="pt-6 pl-10 pr-10 pb-8 text-center">
    <div class="row-span-1 grid grid-cols-2 text-2xl pb-20">
      <h1 class="lg:text-right pr-3 font-bold">{{ currentEvent.matchDate }}</h1>
      <h2 class="lg:text-left pl-3 font-bold">{{ currentEvent.startTime }}</h2>
    </div>
    <div class="row-span-1 grid grid-cols-5 text-2xl pb-20">
      <p class="lg:text-right font-bold uppercase">({{ currentEvent.countryOfHomeTeam }})</p>
      <p class="lg:text-right font-bold uppercase">{{ currentEvent.homeTeam }}</p>
      <p class="lg:text-center font-semibold uppercase">vs</p>
      <p class="lg:text-left font-bold uppercase">{{ currentEvent.awayTeam }}</p>
      <p class="lg:text-left font-bold uppercase">({{ currentEvent.countryOfAwayTeam }})</p>
    </div>
    <div>
      <p class="lg:text-center font-extrabold pb-1">{{ currentEvent.nameOfCompetetion }}</p>
      <p class="lg:text-center font-semibold">{{ currentEvent.stageOfCompetetion }}</p>
      <p class="lg:text-center font-semibold">{{ currentEvent.stadium }}</p>
      <button
        type="submit"
        @click="deleteEvent"
        class="rounded bg-red-600 mt-5 px-3 py-2 text font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EventDetails from './EventDetails'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const data = ref(null)
    const eventId = computed(() => route.params.id)
    const currentEvent = ref(new EventDetails())

    const deleteEvent = () => {
      const findIndex = data.value.findIndex((e) => parseInt(e.id) === parseInt(eventId.value))
      data.value.splice(findIndex, 1)
      localStorage.setItem('sportData', JSON.stringify(data.value))
      router.push('/')
    }

    onBeforeMount(() => {
      const localData = localStorage.getItem('sportData')

      if (localData) {
        data.value = JSON.parse(localData)

        const localEvent = data.value.find((e) => parseInt(e.id) === parseInt(eventId.value))
        if (localEvent) {
          currentEvent.value = localEvent
        }
      }
    })

    return { currentEvent, deleteEvent }
  },
}
</script>
