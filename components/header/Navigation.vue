<template>
    <nav class="navigation-menu">
        <ul class="flex justify-end">
            <li class="relative mr-12 group">
                <n-link to="/" class="block group-hover:text-flesh py-[30px]">Home</n-link>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/" class="block py-1 px-4 hover:text-flesh">Home</n-link>
                    </li>
                    <li>
                        <n-link to="/" class="block py-1 px-4 hover:text-flesh">Home Two</n-link>
                    </li>
                    <li>
                        <n-link to="/" class="block py-1 px-4 hover:text-flesh">Home Three</n-link>
                    </li>
                </ul>
            </li>
            <li class="relative mr-12 group">
                <n-link to="/about" class="block group-hover:text-flesh py-[30px]">About</n-link>
            </li>
            <li class="relative mr-12 group">
                <n-link to="/" class="block group-hover:text-flesh py-[30px]">Category</n-link>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/" class="block py-1 px-4 hover:text-flesh">Category One</n-link>
                    </li>
                    <li>
                        <n-link to="/" class="block py-1 px-4 hover:text-flesh">Category Two</n-link>
                    </li>
                    <li>
                        <n-link to="/" class="block py-1 px-4 hover:text-flesh">Category Three</n-link>
                    </li>
                </ul>
            </li>
            <li class="relative mr-12 group">
                <n-link to="/" class="block group-hover:text-flesh py-[30px]">Pages</n-link>
            </li>
            <li class="relative mr-12 group">
                <n-link to="/" class="block group-hover:text-flesh py-[30px]">Contact</n-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .sub-menu {
        @apply top-full left-0 absolute w-[200px] bg-white border-b-[3px] border-flesh py-4 shadow-md shadow-black/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-[20px] group-hover:translate-y-0;
    }
</style>