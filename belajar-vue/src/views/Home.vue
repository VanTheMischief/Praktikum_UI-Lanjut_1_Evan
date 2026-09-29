<template>
    <div class="home-page">
        <section class="hero">
            <div class="hero-content">
                <span class="badge">Welcome to Gatherly</span>
                <h1 class="hero-title">Connect, Discover, and Experience</h1>
                <p class="hero-subtitle">
                    Join our vibrant community to explore the best events tailored for you,
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, placeat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, beatae?
                </p>
                <div class="hero-action">
                    <router-link to="/browse/events" class="btn btn-primary">Discover events</router-link>
                    <router-link to="/about" class="btn btn-secondary">Learn more</router-link>
                </div>
            </div>
        </section>

        <section class="features">
            <div class="feature-card" v-for="i in 3" :key="i">
                <div class="feature-icon">{{ ['?', '??', '??'][i-1] }}</div>
                <h3>{{ ['Curated Events', 'Global Reach', 'Community Driven'][i-1] }}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, corrupti.</p>
            </div>
        </section>
        <section class="sitemap-visual">
            <h2>Website structure / Site-Map</h2>
            <p class="sitemap-desc">A quick overview of how this application is structured via Vue Router</p>
            <ul class="tree">
                <li>
                    <router-link to="/">Home</router-link>
                    <ul>
                        <li><router-link to="/about">About</router-link></li>
                        <li>
                            <router-link to="/browse">Browse</router-link>
                            <ul>
                                <li>
                                    <router-link to="/browse/events/">Event list</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/browse/category">Category</router-link></li>
                    </ul>
                </li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </section>
    </div>
</template>

