<template>
    <div class="login-page">
        <a href="#" class="login-page__logo"></a>
        <h1 class="text-primary login-page__title">Регистрация нового студента</h1>
        <form class="login-page__form">
            <div class="form-group mb-10">
                <input type="text" class="form-control" id="student-num-input" placeholder="Номер зачетной книжки">
            </div>
            <div class="form-group mb-10">
                <input type="text" class="form-control" id="name-input" placeholder="Фамилия">
            </div>
            <div class="form-group mb-10">
                <input type="email" class="form-control" id="email-input" placeholder="E-mail">
            </div>
            <div class="form-group mb-9">
                <input type="submit" class="btn btn-primary w-100 login-page__btn" value="Зарегистрироваться">
            </div>
            <div class="form-group text-light">
                Пароль придет на указанный e-mail.
                <router-link to="/login">Уже зарегистрированы?</router-link>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "register"
    };
</script>
