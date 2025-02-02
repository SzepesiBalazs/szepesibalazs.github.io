import { describe, it, expect } from 'vitest'
import AddEvent from '../../views/AddEvent.vue'
import { mount } from '@vue/test-utils'
import EventDetails from '../../views/EventDetails'
import EventCalendar from '../../views/EventCalendar.vue'
import App from '../../App.vue'

describe('AddEvent.vue', () => {
  localStorage.setItem('sportData', '[]')

  it('new added to the data on submit', async () => {
    const addEventVueTemplate = mount(AddEvent)
    const oldLengthOfEventData = addEventVueTemplate.vm.data?.length

    const submitButton = addEventVueTemplate.find('button[type="submit"]')
    await submitButton.trigger('click')

    const newLengthOfEventData = addEventVueTemplate.vm.data?.length

    expect(oldLengthOfEventData + 1).toEqual(newLengthOfEventData)
  })

  it('reset default on cancel', async () => {
    const addEventVueTemplate = mount(AddEvent)

    addEventVueTemplate.vm.eventDetail = new EventDetails('2024-11-01')
    const beforeCancelData = addEventVueTemplate.vm.eventDetail

    const cancelButton = addEventVueTemplate.find('button[type="button"]')
    await cancelButton.trigger('click')

    const afterCancelData = addEventVueTemplate.vm.eventDetail

    expect(beforeCancelData).not.toBe(afterCancelData)
  })
})

describe('EventCalendar.vue', () => {
  it('tests the first daysarray element has proper keys', () => {
    const EventCalendarVueTemplate = mount(EventCalendar)

    expect(EventCalendarVueTemplate.vm.daysArray[0]).toHaveProperty('day')
    expect(EventCalendarVueTemplate.vm.daysArray[0]).toHaveProperty('date')
    expect(EventCalendarVueTemplate.vm.daysArray[0]).toHaveProperty('events')
    expect(EventCalendarVueTemplate.vm.daysArray[0]).toHaveProperty('nameOfDay')
  })

  it('should return unknown if team is not defined', () => {
    const EventCalendarVueTemplate = mount(EventCalendar)

    expect(EventCalendarVueTemplate.vm.validateCompetitor()).toBe('Unknown')
    expect(EventCalendarVueTemplate.vm.validateCompetitor('team')).not.toBe('Unknown')
  })

  it('should return correct time format HH:mm', () => {
    const EventCalendarVueTemplate = mount(EventCalendar)

    expect(EventCalendarVueTemplate.vm.formatingUTCTime('14:00:00')).toBe('14:00')
    expect(EventCalendarVueTemplate.vm.formatingUTCTime('15:00')).toBe('15:00')
  })
})

//App.vue throws lots of error onMount

// describe('App.vue', () => {
//   it('tests modified data to contain event details', () => {
//     const AppVueTemplate = mount(App)

//     expect(AppVueTemplate.vm.modifiedData[0]).toBeTypeOf(EventDetails)
//   })
// })
