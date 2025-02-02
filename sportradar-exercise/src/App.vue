<template>
  <header>
    <div class="wrapper">
      <nav class="bg-indigo-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Menu</span>

                <svg
                  class="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  class="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex shrink-0 items-center">
                <img
                  class="h-8 w-auto"
                  src="https://cdn-ilbncnn.nitrocdn.com/DPmYvNpoKujWQybCKacXenezezvtijDX/assets/images/source/rev-f4476db/sportradar.com/wp-content/uploads/2023/11/Sportradar-Brand-Line_Color_Black.svg"
                  alt="Your Company"
                />
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <RouterLink class="rounded-md px-3 py-2 text-sm font-medium text-white" to="/"
                    >Event Calendar</RouterLink
                  >
                  <RouterLink
                    class="rounded-md px-3 py-2 text-sm font-medium text-white"
                    to="/add-event"
                    >Add Event</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <RouterLink class="block rounded-md px-3 py-2 text-base font-medium text-white" to="/"
              >Event Calendar</RouterLink
            >
            <RouterLink
              class="block rounded-md px-3 py-2 text-base font-medium text-white"
              to="/add-event"
              >Add Event</RouterLink
            >
          </div>
        </div>
      </nav>
    </div>
  </header>
  <body>
    <div class="pt-6 pl-10 pr-10 pb-8 bg-indigo-100 min-h-screen">
      <RouterView></RouterView>
    </div>
  </body>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import sportdata from './sportData.json'
import { onBeforeMount, ref } from 'vue'
import EventDetails from './views/EventDetails.ts'
export default {
  components: {
    RouterLink,
    RouterView,
  },
  setup() {
    const data = ref(sportdata)
    const modifiedData = ref([])

    onBeforeMount(() => {
      const sportDataArray = JSON.parse(localStorage.getItem('sportData'))
      if (!sportDataArray) {
        modifiedData.value = data.value.data.map((e) => {
          return new EventDetails(
            e?.id,
            e?.dateVenue,
            e?.timeVenueUTC,
            e?.stadium,
            e?.homeTeam?.officialName,
            e?.awayTeam?.officialName,
            e?.stage?.name,
            e?.originCompetitionName,
            e?.homeTeam?.teamCountryCode,
            e?.awayTeam?.teamCountryCode,
          )
        })

        localStorage.setItem('sportData', JSON.stringify(modifiedData.value))
      }
    })

    return { modifiedData }
  },
}
</script>
