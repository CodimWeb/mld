<template>
    <div class="widget pass-homework">
        <div class="widget__header">
            <h4 class="widget__title">Новости</h4>
            <div class="widget__controls">
                <a href="#" class="widget__link">Показать все</a>
                <button class="widget__settings"><icon-settings/></button>
            </div>
        </div>
        <custom-scrollbar clipperCls="widget__clipper">
            <div class="news-list">
                <a href="#" class="news-item">
                <span class="news-item__img-wrap">
                    <img src="https://via.placeholder.com/240x114" class="news-item__img">
                    <span class="news-item__date">09.09.19</span>
                </span>
                    <span class="news-item__name">Активисты организуют II акцию «УтилиZация» в Первоуральске</span>
                </a>
                <a href="#" class="news-item">
                <span class="news-item__img-wrap">
                    <img src="https://via.placeholder.com/240x114" class="news-item__img">
                    <span class="news-item__date">09.09.19</span>
                </span>
                    <span class="news-item__name">Будущие белые металлурги постигают военную науку в подшефной части пос. Горный Щит</span>
                </a>
                <a href="#" class="news-item">
                <span class="news-item__img-wrap">
                    <img src="https://via.placeholder.com/240x114" class="news-item__img">
                    <span class="news-item__date">09.09.19</span>
                </span>
                    <span class="news-item__name">Активисты организуют II акцию «УтилиZация» в Первоуральске</span>
                </a>
                <a href="#" class="news-item">
                <span class="news-item__img-wrap">
                    <img src="https://via.placeholder.com/240x114" class="news-item__img">
                    <span class="news-item__date">09.09.19</span>
                </span>
                    <span class="news-item__name">Активисты организуют II акцию «УтилиZация» в Первоуральске</span>
                </a>
                <a href="#" class="news-item">
                <span class="news-item__img-wrap">
                    <img src="https://via.placeholder.com/240x114" class="news-item__img">
                    <span class="news-item__date">09.09.19</span>
                </span>
                    <span class="news-item__name">Активисты организуют II акцию «УтилиZация» в Первоуральске</span>
                </a>
                <a href="#" class="news-item">
                <span class="news-item__img-wrap">
                    <img src="https://via.placeholder.com/240x114" class="news-item__img">
                    <span class="news-item__date">09.09.19</span>
                </span>
                    <span class="news-item__name">Активисты организуют II акцию «УтилиZация» в Первоуральске</span>
                </a>
            </div>
        </custom-scrollbar>
    </div>
</template>

<script>
    import IconSettings from './icons/IconSettings.vue'
    import CustomScrollbar from './CustomScollbar'

    export default {
        name: 'News',
        components: {
            IconSettings,
            CustomScrollbar
        }
    }
</script>