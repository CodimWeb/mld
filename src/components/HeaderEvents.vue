<template>
    <custom-scrollbar>
        <div class="header-events">
            <b-tabs class="custom-tabs">
                <b-tab title="Сегодня" active>
                    <ul class="header-events__list">
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Экзамен «Название предмета»</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Событие</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Мероприятие</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Экзамен «Ежегодный»</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Экзамен «Название предмета»</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Событие</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Мероприятие</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Экзамен «Ежегодный»</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Экзамен «Название предмета»</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Событие</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Мероприятие</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Экзамен «Ежегодный»</a>
                        </li>
                    </ul>
                </b-tab>
                <b-tab title="Завтра">
                    <ul class="header-events__list">
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Мероприятие</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Экзамен «Ежегодный»</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Экзамен «Название предмета»</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Событие</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Мероприятие</a>
                        </li>
                        <li class="header-events__item">
                            <a href="#" class="header-events__link">Экзамен «Ежегодный»</a>
                        </li>
                    </ul>
                </b-tab>
            </b-tabs>
        </div>    
    </custom-scrollbar>
</template>

<script>
    import CustomScrollbar from './CustomScollbar';

    export default {
        name: 'HeaderEvents',
        components: {
            CustomScrollbar
        }
    }
</script>