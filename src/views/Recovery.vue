<template>
    <div class="login-page">
        <a href="#" class="login-page__logo"></a>
        <h1 class="text-primary login-page__title">Восстановление пароля</h1>
        <form class="login-page__form">
            <div class="form-group mb-10">
                <input type="email" class="form-control" id="email-input" placeholder="Введите e-mail">
            </div>
            <div class="form-group mb-9">
                <input type="submit" class="btn btn-primary w-100 login-page__btn" value="Восстановить пароль">
            </div>
            <div class="form-group text-light mb-5">
                Новый пароль будет отправлен вам на e-mail.
            </div>
            <div class="form-group">
                <router-link to="/login">Перейти к авторизации</router-link>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "recovery"
    };
</script>
