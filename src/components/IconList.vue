<template>
    <div class="icon-list">
        <div class="icon-item">
            <icon-base icon-name="search"><icon-faq/></icon-base>
        </div>
        <div class="icon-item">
            <icon-base icon-name="search" viewBox="0 0 20 16"><icon-mail/></icon-base>
        </div>
        <div class="icon-item">
            <icon-base icon-name="search"><icon-search/></icon-base>
        </div>
        <div class="icon-item">
            <icon-base icon-name="search" viewBox="0 0 19 20"><icon-support/></icon-base>
        </div>
        <div class="icon-item">
            <icon-base icon-name="search" viewBox="0 0 22 18"><icon-back/></icon-base>
        </div>
    </div>
</template>

<script>
    import IconBase from './IconBase'
    import IconFaq from './icons/IconFaq'
    import IconMail from './icons/IconMail'
    import IconSearch from './icons/IconSearch'
    import IconSupport from './icons/IconSupport'
    import IconBack from './icons/IconBack'

    export default {
        components: {
            IconBase,
            IconFaq,
            IconMail,
            IconSearch
        }
    }
</script>
