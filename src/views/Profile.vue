<template>
    <div class="profile-page">
        <div class="profile">
            <div class="profile-a-side">
                <div class="widget">
                    <div class="user-card">
                        <div class="user-card__header">
                            <div class="user-card__ava">
                                <img src="@/assets/user.jpg" alt="photo" class="user-card__photo">
                            </div>
                            <div class="user-card__data">
                                <p class="user-card__name">Иванов Иван Иванович</p>
                                <p class="user-card__group">Группа ЭД-192 <span class="user-card__status user-card__status--red user-card__status--green user-card__status--blue">Действующий</span></p>
                                <p><a href="#" class="user-card__edit">Редактировать профиль</a></p>
                                <div class="user-card__contacts">
                                    <p class="user-card__phone">
                                        <icon-phone/>
                                        +7 (900) 555-35-35
                                    </p>
                                    <p class="user-card__email">
                                        <icon-email/>
                                        contact@pochta.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="user-card__body">
                            <ul class="user-worksheet">
                                <li class="user-worksheet__item">
                                    <div class="user-worksheet__question">День рождения</div>
                                    <div class="user-worksheet__answer">23 апреля 1994 <span class="user-worksheet__detail">(25 лет)</span></div>
                                </li>
                                <li class="user-worksheet__item">
                                    <div class="user-worksheet__question">Специальность</div>
                                    <div class="user-worksheet__answer">Название отделения/специальности</div>
                                </li>
                                <li class="user-worksheet__item">
                                    <div class="user-worksheet__question">Родной город</div>
                                    <div class="user-worksheet__answer">Омск, Свердловская область</div>
                                </li>
                                <li class="user-worksheet__item">
                                    <div class="user-worksheet__question">Годы обучения</div>
                                    <div class="user-worksheet__answer">01.09.19 – 30.06.2023 <span class="user-worksheet__detail">(4й курс)</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
                <div class="widget widget-progress">
                    <div class="user-progress">
                        <p class="profile-title">Список достижений</p>
                        <custom-scrollbar>
                            <div class="user-progress__list">
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                                <div class="user-progress__item">
                                    <img src="@/assets/user-progress.jpg" alt="" class="user-progress__image">
                                </div>
                            </div>
                        </custom-scrollbar>    
                    </div>
                </div>
            </div>
            <div class="profile-b-side">
                <div class="widget widget-teacher">
                    <custom-scrollbar>
                        <div class="teacher__panel">
                            <div class="teacher__list">
                                <div class="teacher-item">
                                    <p class="profile-title">Заведующий отделения</p>
                                    <div class="teacher-item__body">
                                        <div class="teacher-item__ava">
                                            <img src="@/assets/user.jpg" alt="photo" class="teacher-item__photo">
                                        </div>
                                        <div class="teacher-item__data">
                                            <p class="teacher-item__name">Иванов Иван Иванович</p>
                                            <p class="teacher-item__specialization">Преподаватель русского языка</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="teacher-item">
                                    <p class="profile-title">Заведующий отделения</p>
                                    <div class="teacher-item__body">
                                        <div class="teacher-item__ava">
                                            <img src="@/assets/user.jpg" alt="photo" class="teacher-item__photo">
                                        </div>
                                        <div class="teacher-item__data">
                                            <p class="teacher-item__name">Иванов Иван Иванович</p>
                                            <p class="teacher-item__specialization">Преподаватель русского языка</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="teacher-item">
                                    <p class="profile-title">Заведующий отделения</p>
                                    <div class="teacher-item__body">
                                        <div class="teacher-item__ava">
                                            <img src="@/assets/user.jpg" alt="photo" class="teacher-item__photo">
                                        </div>
                                        <div class="teacher-item__data">
                                            <p class="teacher-item__name">Иванов Иван Иванович</p>
                                            <p class="teacher-item__specialization">Преподаватель русского языка</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="teacher-item">
                                    <p class="profile-title">Заведующий отделения</p>
                                    <div class="teacher-item__body">
                                        <div class="teacher-item__ava">
                                            <img src="@/assets/user.jpg" alt="photo" class="teacher-item__photo">
                                        </div>
                                        <div class="teacher-item__data">
                                            <p class="teacher-item__name">Иванов Иван Иванович</p>
                                            <p class="teacher-item__specialization">Преподаватель русского языка</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="teacher-item">
                                    <p class="profile-title">Заведующий отделения</p>
                                    <div class="teacher-item__body">
                                        <div class="teacher-item__ava">
                                            <img src="@/assets/user.jpg" alt="photo" class="teacher-item__photo">
                                        </div>
                                        <div class="teacher-item__data">
                                            <p class="teacher-item__name">Иванов Иван Иванович</p>
                                            <p class="teacher-item__specialization">Преподаватель русского языка</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="teacher-item">
                                    <p class="profile-title">Заведующий отделения</p>
                                    <div class="teacher-item__body">
                                        <div class="teacher-item__ava">
                                            <img src="@/assets/user.jpg" alt="photo" class="teacher-item__photo">
                                        </div>
                                        <div class="teacher-item__data">
                                            <p class="teacher-item__name">Иванов Иван Иванович</p>
                                            <p class="teacher-item__specialization">Преподаватель русского языка</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="teacher-item">
                                    <p class="profile-title">Заведующий отделения</p>
                                    <div class="teacher-item__body">
                                        <div class="teacher-item__ava">
                                            <img src="@/assets/user.jpg" alt="photo" class="teacher-item__photo">
                                        </div>
                                        <div class="teacher-item__data">
                                            <p class="teacher-item__name">Иванов Иван Иванович</p>
                                            <p class="teacher-item__specialization">Преподаватель русского языка</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="teacher-item">
                                    <p class="profile-title">Заведующий отделения</p>
                                    <div class="teacher-item__body">
                                        <div class="teacher-item__ava">
                                            <img src="@/assets/user.jpg" alt="photo" class="teacher-item__photo">
                                        </div>
                                        <div class="teacher-item__data">
                                            <p class="teacher-item__name">Иванов Иван Иванович</p>
                                            <p class="teacher-item__specialization">Преподаватель русского языка</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="teacher-item">
                                    <p class="profile-title">Заведующий отделения</p>
                                    <div class="teacher-item__body">
                                        <div class="teacher-item__ava">
                                            <img src="@/assets/user.jpg" alt="photo" class="teacher-item__photo">
                                        </div>
                                        <div class="teacher-item__data">
                                            <p class="teacher-item__name">Иванов Иван Иванович</p>
                                            <p class="teacher-item__specialization">Преподаватель русского языка</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </custom-scrollbar>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import IconEmail from '../components/icons/IconEmail'
    import IconPhone from '../components/icons/IconPhone'
    import CustomScrollbar from '../components/CustomScollbar';

    export default {
        name: "profile",
        components: {
            IconEmail,
            IconPhone,
            CustomScrollbar
        },
        data() {
            return {
            
            }
        },
    
        mounted() {

        }
    };
</script>
