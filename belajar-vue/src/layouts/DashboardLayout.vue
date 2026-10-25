<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="dashboard-layout">
    <aside class="dashboard-rail">
      <RouterLink to="/dashboard" class="rail-brand"><span class="brand-mark">G</span><span>Gatherly<span class="brand-subtitle">Organizer</span></span></RouterLink>
      <p class="rail-label">WORKSPACE</p>
      <nav class="rail-nav" aria-label="Organizer navigation">
        <RouterLink to="/dashboard" exact-active-class="active" class="rail-link"><span>?</span> Dashboard</RouterLink>
        <RouterLink to="/dashboard/events" active-class="active" class="rail-link"><span>?</span> Event Management</RouterLink>
      </nav>
      <div class="rail-footer"><RouterLink to="/browse/events" class="rail-link"><span>?</span> Back to Public</RouterLink></div>
    </aside>
    <main class="dashboard-pane">
      <header class="pane-header"><div><span class="eyebrow">GATHERLY WORKSPACE</span><h1>Organizer Studio</h1></div><div class="profile-chip"><span class="profile-avatar">A</span><span>Admin</span></div></header>
      <div class="pane-content"><RouterView /></div>
    </main>
  </div>
</template>

<style scoped>
.dashboard-layout { --ink: #211d47; --muted: #77778b; --line: #ececf3; --primary: #6748ed; display: flex; min-height: 100vh; background: #f7f7fb; color: var(--ink); }
.dashboard-rail { position: sticky; top: 0; display: flex; flex: 0 0 250px; flex-direction: column; height: 100vh; padding: 1.5rem 1rem; color: #fff; background: #211d47; }
.rail-brand { display: flex; align-items: center; gap: .7rem; padding: .4rem .5rem 2rem; color: white; text-decoration: none; font-size: 1.05rem; font-weight: 800; }
.brand-mark { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 13px; background: #795fff; font-size: 1.2rem; }
.brand-subtitle { display: block; margin-top: 1px; color: #aeabc8; font-size: .72rem; font-weight: 500; }
.rail-label { margin: 0 0 .7rem .7rem; color: #8e8aa9; font-size: .65rem; font-weight: 800; letter-spacing: .13em; }
.rail-nav { display: grid; gap: .35rem; }
.rail-link { display: flex; align-items: center; gap: .8rem; padding: .8rem .85rem; border-radius: 11px; color: #c5c2d8; text-decoration: none; font-size: .88rem; font-weight: 650; transition: .18s ease; }
.rail-link span { width: 20px; font-size: 1.05rem; text-align: center; }
.rail-link:hover { color: #fff; background: rgba(255,255,255,.08); }
.rail-link.active { color: #fff; background: #6748ed; box-shadow: 0 8px 22px #130d3b66; }
.rail-footer { margin-top: auto; padding-top: 1rem; border-top: 1px solid #ffffff1c; }
.dashboard-pane { flex: 1; min-width: 0; }
.pane-header { display: flex; justify-content: space-between; align-items: center; min-height: 92px; padding: 1rem clamp(1.25rem, 4vw, 3rem); border-bottom: 1px solid var(--line); background: #fff; }
.eyebrow { color: #9291a3; font-size: .65rem; font-weight: 800; letter-spacing: .15em; }
.pane-header h1 { margin: .2rem 0 0; font-size: 1.18rem; font-weight: 750; }
.profile-chip { display: flex; align-items: center; gap: .6rem; color: #54536a; font-size: .84rem; font-weight: 650; }
.profile-avatar { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; color: #fff; background: #ff966a; font-weight: 800; }
.pane-content { max-width: 1400px; margin: 0 auto; padding: clamp(1.25rem, 4vw, 3rem); }
@media (max-width: 720px) { .dashboard-layout { display: block; } .dashboard-rail { position: relative; height: auto; padding: .8rem; } .rail-brand { padding: .25rem .45rem .8rem; } .rail-label, .rail-footer { display: none; } .rail-nav { grid-template-columns: repeat(2,1fr); } .rail-link { justify-content: center; padding: .65rem .4rem; font-size: .76rem; } .pane-header { min-height: 72px; } }
</style>
