<template>
    <div class="order-page">
        <div class="widget">
            <div class="widget__header">
                <h4 class="widget__title">Заказать справку</h4>
            </div>
            <form action="" class="order-form">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label for="" class="order-form__label">Название справки</label>
                            <div>
                                <search-select 
                                    :list="[
                                        'Справка для поступления в ПМК',
                                        'Справка о восствновление из академ. отпуска',
                                        'Справка об академическом отпуске',
                                        'Справка об обучении + стипендия',
                                        'Справка об обучении в военкомат',
                                        'Справка об обучении для ЕГЭ',
                                        'Справка об обучении',
                                        'Выписка оценок',
                                        'Справка вызов по студенту'
                                    ]"
                                >
                                </search-select>
                            </div>    
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label for="" class="order-form__label">Имя</label>
                            <input type="text" class="form-control order-form__field" placeholder="Иванов Иван Иванович">
                        </div>
                        <div class="form-group">
                            <label for="" class="order-form__label">Группа</label>
                            <input type="text" class="form-control order-form__field" placeholder="ЭД-192">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-rounded pass-homework__btn btn-block" disabled>Отправить заявку</button>
                        </div>                            
                    </div>
                </div>
            </form>
        </div>
        <div class="banner">
            <a href="#" class="banner__link">
                <img src="@/assets/home-banner.png" alt="Будущее в твоих руках" class="banner__img">
            </a>
        </div>
    </div>
</template>

<script>
    import SearchSelect from '../components/SearchSelect';

    export default {
        name: "order",
        components: {
            SearchSelect
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
    };
</script>
