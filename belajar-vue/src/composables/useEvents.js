import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'gatherly_events'

function readSavedEvents() {
  if (typeof window === 'undefined') return []

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    const parsed = saved ? JSON.parse(saved) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

// Module-level state keeps every consumer on the same source of truth.
const events = ref(readSavedEvents())

if (typeof window !== 'undefined') {
  watch(events, (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch (error) {
      console.warn('Unable to save Gatherly events locally.', error)
    }
  }, { deep: true })
}

const totalEvents = computed(() => events.value.length)
const activeEvents = computed(() => events.value.filter((event) => !event.done))
const completedEvents = computed(() => events.value.filter((event) => event.done))

function createEvent(data) {
  events.value.unshift({
    id: Date.now(),
    title: data.title.trim(),
    category: data.category.trim(),
    date: data.date,
    location: data.location.trim(),
    price: data.price.trim() || 'Free',
    desc: data.desc.trim(),
    done: false,
  })
}

function completeEvent(id) {
  const event = events.value.find((item) => item.id === Number(id))
  if (event) event.done = true
}

function deleteEvent(id) {
  const index = events.value.findIndex((item) => item.id === Number(id))
  if (index !== -1) events.value.splice(index, 1)
}

function getEventById(id) {
  return events.value.find((event) => event.id === Number(id))
}

export function useEvents() {
  return { events, totalEvents, activeEvents, completedEvents, createEvent, completeEvent, deleteEvent, getEventById }
}
