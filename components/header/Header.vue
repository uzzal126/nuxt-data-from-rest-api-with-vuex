<template>
    <div class="header-main bg-white-light">
        <div class="header-bottom py-3 lg:py-0">
            <div class="container">
                <div class="grid-cols-12 flex justify-between items-center">
                    <div class="col-span-8 md:col-span-4">
                        <div class="logo col-span-6 md:col-span-3">
                            <n-link to="/">
                                <img src="/images/logo/logo.png" alt="Logo">
                            </n-link>
                        </div>
                    </div>

                    <div class="col-span-4 md:col-span-8">
                        <Navigation class="hidden lg:block" />
                        <div class="mobile-button block lg:hidden">
                            <button class="text-xl w-11 h-11 leading-10 rounded-md border-[1px] border-[#ddd] hover:bg-flesh hover:border-flesh transition-all">
                                <i class="icofont-transparent"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("~/components/header/Navigation"),
        },
    }
</script>