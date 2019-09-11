<template>
    <div class="widget events">
        <div class="widget__header">
            <h4 class="widget__title">События</h4>
            <div class="widget__controls">
                <a href="#" class="widget__link">Показать все</a>
                <button class="widget__settings"><icon-settings/></button>
            </div>
        </div>

        <custom-scrollbar clipperCls="widget__clipper">
            <div class="events-list">
                <a href="#" class="event-item">
                <span class="event-item__left">
                    <span class="event-item__name">Мероприятие в отделе продаж для всех сотрудников</span>
                    <span class="event-item__status event-item__status--red">Важное событие</span>
                </span>
                    <span class="event-item__right">
                    <span class="event-item__date">09.09.19</span>
                    <span class="event-item__time">16:20</span>
                </span>
                </a>
                <a href="#" class="event-item">
                <span class="event-item__left">
                    <span class="event-item__name">Экзамен для преподавателей в кабинете №307</span>
                    <span class="event-item__status event-item__status--red">Важное событие</span>
                </span>
                    <span class="event-item__right">
                    <span class="event-item__date">Сегодня</span>
                    <span class="event-item__time">16:50</span>
                </span>
                </a>
                <a href="#" class="event-item">
                <span class="event-item__left">
                    <span class="event-item__name">Экзамен для преподавателей в кабинете №307</span>
                    <span class="event-item__status event-item__status--green">Мероприятие</span>
                </span>
                    <span class="event-item__right">
                    <span class="event-item__date">Завтра</span>
                    <span class="event-item__time">16:20</span>
                </span>
                </a>
                <a href="#" class="event-item">
                <span class="event-item__left">
                    <span class="event-item__name">Экзамен для преподавателей в кабинете №307</span>
                    <span class="event-item__status">Общая информация</span>
                </span>
                    <span class="event-item__right">
                    <span class="event-item__date">13.09.19</span>
                    <span class="event-item__time">9:00</span>
                </span>
                </a>
                <a href="#" class="event-item">
                <span class="event-item__left">
                    <span class="event-item__name">Экзамен для преподавателей в кабинете №307</span>
                    <span class="event-item__status event-item__status--red">Экзамен</span>
                </span>
                    <span class="event-item__right">
                    <span class="event-item__date">14.09.19</span>
                    <span class="event-item__time">12:40</span>
                </span>
                </a>
                <a href="#" class="event-item">
                <span class="event-item__left">
                    <span class="event-item__name">Экзамен для преподавателей в кабинете №307</span>
                    <span class="event-item__status event-item__status--red">Мероприятие</span>
                </span>
                    <span class="event-item__right">
                    <span class="event-item__date">15.09.19</span>
                    <span class="event-item__time">11:10 </span>
                </span>
                </a>
                <a href="#" class="event-item">
                <span class="event-item__left">
                    <span class="event-item__name">Мероприятие в отделе продаж для всех сотрудников</span>
                    <span class="event-item__status event-item__status--red">Важное событие</span>
                </span>
                    <span class="event-item__right">
                    <span class="event-item__date">09.09.19</span>
                    <span class="event-item__time">16:20</span>
                </span>
                </a>
            </div>
        </custom-scrollbar>
    </div>
</template>

<script>
    import IconSettings from './icons/IconSettings.vue'
    import CustomScrollbar from './CustomScollbar'

    export default {
        name: 'Events',
        components: {
            IconSettings,
            CustomScrollbar
        }
    }
</script>