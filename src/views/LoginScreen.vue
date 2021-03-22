<template>
    <div class="login-screen">
        <div class="box">
            <div class="heading"></div>
            <form class="login-form">
                <div class="field">
                    <input type="name" v-model="username" placeholder="Phone number, username, or email"/>
                </div>
                <div class="field">
                    <input type="password" v-model="password" placeholder="password" />
                </div>
                    <q-btn :disable="!passsword && !username" unelevated class="login-button" label="Log In" />
                    <div class="separator">
                        <div class="line"></div>
                        <p>OR</p>
                        <div class="line"></div>
                    </div>
                <div class="other">
                    <button disabled class="fb-login-btn" type="button">
                    <i class="fa fa-facebook-official fb-icon"></i>
                    <span class="">Log in with Facebook</span>
                    </button>
                    <a class="forgot-password" href="#">Forgot password?</a>
                </div>
            </form>
        </div>
        <div class="box">
            <p>Don't have an account? <a class="signup" href="#">Sign Up</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginScreen',
        data() {
            return {
                username: '',
                password: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }

    .login-screen {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
        font-size: 14px;
    }

    .box {
        max-width: 450px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #ffff;
        border: 1px solid #e6e6e6;
        border-radius: 1px;
        margin: 0 0 10px;
        padding: 10px 0;
        flex-grow: 1;
    }

    .heading {
        margin: 22px auto 12px;
        background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_b20f2a3cd7e4.png/b20f2a3cd7e4.png");
        background-position: -98px 0;
        height: 51px;
        width: 177px;
        overflow: hidden;
    }

    .field {
        margin: 1em 0;
        position: relative;
        font-size: 1rem;
        width: 100%;
        text-overflow: ellipsis;
    }

    input {
        // padding: 9px 0px 7px 9px;
        padding: 1em;
        font-size: .9rem;
        width: 22rem;
        outline: none;
        background: #fafafa;
        border-radius: 3px;
        border: 1px solid #efefef;
    }

    /* label intial position*/

    label {
        position: absolute;
        pointer-events: none;
        left: 10px;
        padding-bottom: 15px;
        transform: translateY(10px);
        line-height: 6px;
        transition: all ease-out 0.1s;
        font-size: 14px;
        color: #999;
        padding-top: 6px;
    }

    .login-form ::-moz-placeholder {
        color: transparent;
    }

    .login-button {
        width: 100%;
        padding: 0.3rem;
        border: 1px solid transparent;
        background-color: #3897f0;
        color: #fff;
        font-weight: 600;
    }

    .separator {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #999;
        margin-top: 6px;
    }

    .separator .line {
        height: 1px;
        width: 40%;
        background-color: #dbdbdb;
    }

    .other {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .fb-login-btn {
        margin: 1rem;
        border: 0;
        cursor: pointer;
        font-size: 14px;
        color: #385185;
        font-weight: 600;
        background: transparent;
    }

    .fb-icon {
        color: #385185;
        font-size: 1rem;
        padding-right: 1px;
    }

    .forgot-password {
        font-size: 11px;
        color: #003569;
    }

    .signup {
        color: #3897f0;
        font-weight: 600;
    }
</style>