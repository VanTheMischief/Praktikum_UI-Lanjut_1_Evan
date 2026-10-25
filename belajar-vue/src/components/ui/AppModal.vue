<script setup>
defineProps({
  isopen: { type: Boolean, default: false },
  title: { type: String, default: 'Action confirmation' },
  message: { type: String, default: 'Are you sure you want to proceed?' },
  confirmText: { type: String, default: 'Confirm' },
  cancelText: { type: String, default: 'Cancel' },
})

defineEmits(['confirm', 'close'])
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="isopen" class="modal-overlay" @click.self="$emit('close')" @keydown.esc="$emit('close')">
      <section class="modal-card" role="dialog" aria-modal="true" :aria-label="title">
        <div class="modal-icon" aria-hidden="true">!</div>
        <h2 class="modal-title">{{ title }}</h2>
        <p class="modal-message">{{ message }}</p>
        <div class="modal-footer">
          <button class="modal-button modal-button--quiet" type="button" @click="$emit('close')">{{ cancelText }}</button>
          <button class="modal-button modal-button--danger" type="button" @click="$emit('confirm')">{{ confirmText }}</button>
        </div>
      </section>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay { position: fixed; inset: 0; z-index: 9999; display: grid; place-items: center; padding: 1rem; background: rgba(16, 22, 42, .38); backdrop-filter: blur(8px); }
.modal-card { width: min(100%, 430px); padding: 2rem; border: 1px solid #ececf4; border-radius: 22px; background: #fff; box-shadow: 0 24px 80px rgba(25, 22, 58, .22); text-align: center; }
.modal-icon { display: grid; place-items: center; width: 48px; height: 48px; margin: 0 auto 1rem; border-radius: 16px; color: #b54708; background: #fff3df; font-size: 1.4rem; font-weight: 800; }
.modal-title { margin: 0 0 .6rem; color: #211d47; font-size: 1.3rem; font-weight: 750; }
.modal-message { margin: 0; color: #69697b; line-height: 1.65; }
.modal-footer { display: flex; justify-content: center; gap: .75rem; margin-top: 1.6rem; }
.modal-button { min-height: 44px; padding: 0 1.1rem; border: 0; border-radius: 12px; font: inherit; font-weight: 700; cursor: pointer; }
.modal-button--quiet { color: #46445b; background: #f3f3f8; }
.modal-button--danger { color: #fff; background: #c2415d; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity .2s ease, transform .2s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-from .modal-card, .modal-fade-leave-to .modal-card { transform: translateY(8px) scale(.98); }
</style>
