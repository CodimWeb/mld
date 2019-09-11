<template>
    <nav class="schedule-nav">
        <div class="schedule-nav__control">
            <button class="schedule-nav__btn"><icon-arrow-left/></button>
            <span class="schedule-nav__week">32 неделя</span>
            <button class="schedule-nav__btn"><icon-arrow-right/></button>
        </div>
        <div class="schedule-nav__list">
            <span class="schedule-nav__link schedule-nav__link--current">Понедельник<br>20.05</span>
            <a href="#" class="schedule-nav__link">Вторник<br>21.05</a>
            <a href="#" class="schedule-nav__link">Среда<br>22.05</a>
            <a href="#" class="schedule-nav__link">Четверг<br>23.05</a>
            <a href="#" class="schedule-nav__link">Пятница<br>24.05</a>
            <a href="#" class="schedule-nav__link">Суббота<br>25.05</a>
        </div>
    </nav>
</template>

<script>
    import IconArrowLeft from './icons/IconArrowLeft'
    import IconArrowRight from './icons/IconArrowRight'

    export default {
        name: 'schedule-nav',
        components: {
            IconArrowLeft,
            IconArrowRight
        },
        data() {
            return {

            }
        }
    }
</script>