<template>
    <div class="home-page">
        <schedule></schedule>
        <div class="banner">
            <a href="#" class="banner__link">
                <img src="@/assets/home-banner.png" alt="Будущее в твоих руках" class="banner__img">
            </a>
        </div>
        <div class="row widgets-row">
            <div class="col-lg-6 widgets-col">
                <classmates></classmates>
            </div>
            <div class="col-lg-6 widgets-col">
                <pass-homework></pass-homework>
            </div>
        </div>
        <div class="row widgets-row">
            <div class="col-lg-6 widgets-col">
                <events></events>
            </div>
            <div class="col-lg-6 widgets-col">
                <news></news>
            </div>
        </div>
    </div>
</template>

<script>
    import Schedule from '../components/Schedule.vue'
    import Classmates from '../components/Classmates.vue'
    import PassHomework from '../components/PassHomework.vue'
    import Events from '../components/Events.vue'
    import News from '../components/News.vue'

    export default {
        name: "home",
        components: {
            Schedule,
            Classmates,
            PassHomework,
            Events,
            News
        }
    };
</script>
