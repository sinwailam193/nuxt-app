<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">about</NuxtLink></li>
                    <li><NuxtLink to="/products/123">Product 123</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div>
            <slot />
        </div>
    </div>
</template>

<style scope>
.router-link-exact-active {
    color: #12b488;
}
</style>
