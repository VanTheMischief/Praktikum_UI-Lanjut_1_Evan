import { computed, ref, watch } from 'vue'

const EVENTS_KEY = 'gatherly_events'
const REGISTRATIONS_KEY = 'gatherly_registrations'

function readArray(key) {
  if (typeof window === 'undefined') return []
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || '[]')
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

const events = ref(readArray(EVENTS_KEY).map((event) => {
  const capacity = Number(event.capacity) > 0 ? Number(event.capacity) : Math.max(50, Number(event.seatsLeft) || 0)
  return { ...event, capacity, seatsLeft: Number.isFinite(Number(event.seatsLeft)) ? Number(event.seatsLeft) : capacity }
}))
const userRegistrations = ref(readArray(REGISTRATIONS_KEY))

if (typeof window !== 'undefined') {
  watch(events, (value) => window.localStorage.setItem(EVENTS_KEY, JSON.stringify(value)), { deep: true })
  watch(userRegistrations, (value) => window.localStorage.setItem(REGISTRATIONS_KEY, JSON.stringify(value)), { deep: true })
}

const totalEvents = computed(() => events.value.length)
const activeEvents = computed(() => events.value.filter((event) => !event.done))
const completedEvents = computed(() => events.value.filter((event) => event.done))
const totalRegistrations = computed(() => userRegistrations.value.length)

function createEvent(data) {
  const capacity = Math.max(1, Number(data.capacity) || 50)
  events.value.unshift({
    id: Date.now(), title: data.title.trim(), category: data.category.trim(), date: data.date,
    location: data.location.trim(), price: data.price.trim() || 'Free', desc: data.desc.trim(),
    capacity, seatsLeft: capacity, done: false,
  })
}

function completeEvent(id) {
  const event = events.value.find((item) => item.id === Number(id))
  if (event) event.done = true
}

function deleteEvent(id) {
  const eventId = Number(id)
  const index = events.value.findIndex((item) => item.id === eventId)
  if (index !== -1) events.value.splice(index, 1)
  userRegistrations.value = userRegistrations.value.filter((registration) => Number(registration.eventId) !== eventId)
}

function getEventById(id) {
  return events.value.find((event) => event.id === Number(id))
}

function isUserRegistered(eventId) {
  return userRegistrations.value.some((registration) => Number(registration.eventId) === Number(eventId))
}

function getRegistrationById(id) {
  return userRegistrations.value.find((registration) => registration.id === String(id) || registration.reference === String(id))
}

function registerAttendee(eventId, attendee) {
  const event = getEventById(eventId)
  if (!event) return { ok: false, message: 'This event could not be found.' }
  if (event.done) return { ok: false, message: 'Registration for this event is closed.' }
  if (isUserRegistered(eventId)) return { ok: false, message: 'You are already registered for this event.' }
  if (event.seatsLeft <= 0) return { ok: false, message: 'This event is sold out.' }

  const reference = `GY-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`
  const registration = {
    id: reference,
    reference,
    eventId: event.id,
    attendee: { ...attendee },
    createdAt: new Date().toISOString(),
  }
  event.seatsLeft -= 1
  userRegistrations.value.unshift(registration)
  return { ok: true, registration }
}

function cancelRegistration(registrationId) {
  const index = userRegistrations.value.findIndex((item) => item.id === String(registrationId) || item.reference === String(registrationId))
  if (index === -1) return false
  const [registration] = userRegistrations.value.splice(index, 1)
  const event = getEventById(registration.eventId)
  if (event && !event.done) event.seatsLeft = Math.min(event.capacity, event.seatsLeft + 1)
  return true
}

function isEventDone(eventId) {
  return Boolean(getEventById(eventId)?.done)
}

export function useEvents() {
  return {
    events, totalEvents, activeEvents, completedEvents, userRegistrations, totalRegistrations,
    createEvent, completeEvent, deleteEvent, getEventById, registerAttendee,
    isUserRegistered, getRegistrationById, cancelRegistration, isEventDone,
  }
}
