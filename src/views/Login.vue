<template>
    <div class="login-page">
        <a href="#" class="login-page__logo"></a>
        <h1 class="text-primary login-page__title">Авторизация</h1>
        <form class="login-page__form">
            <div class="form-group">
                <label for="email-input">E-mail</label>
                <input type="email" class="form-control" id="email-input" placeholder="example@email.com">
            </div>
            <div class="form-group mb-10">
                <label for="password-input">Password</label>
                <input type="password" class="form-control" id="password-input">
            </div>
            <div class="form-group mb-9">
                <input type="submit" class="btn btn-primary w-100 login-page__btn" value="Войти">
            </div>
            <div class="form-group mb-5 text-light">
                <router-link to="/register">Зарегистрируйтесь</router-link>
                и получите доступ к порталу.
            </div>
            <div class="form-group">
                <router-link to="/recovery">Забыли пароль?</router-link>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "login"
    };
</script>
