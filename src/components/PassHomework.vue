<template>
    <div class="widget pass-homework">
        <div class="widget__header">
            <h4 class="widget__title">Домашнее задание</h4>
            <div class="widget__controls">
                <button class="widget__settings"><icon-settings/></button>
            </div>
        </div>
        <div class="pass-homework__body">
            <button class="btn btn-primary btn-rounded pass-homework__btn">Сдать домашнее задание</button>
        </div>
    </div>
</template>

<script>
    import IconSettings from './icons/IconSettings.vue'

    export default {
        name: 'passHomework',
        components: {
            IconSettings
        }
    }
</script>