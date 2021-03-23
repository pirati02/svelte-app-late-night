<script>
    import jwt_decode from 'jwt-decode'
    import {authInfo} from "../../http/auth/auth.store";
    import {AuthService} from '../../http/auth/auth.service'
    import {UserManagementService} from '../../http/user/user-management.service'
    import {interceptToken} from "../../http/fetch.interceptor";

    const authService = new AuthService();
    const userManagementService = new UserManagementService();

    const loginModel = {
        userName: 'gmurvelashvili',
        password: 'paroli6^'
    }

    async function login() {
        const loginResult = await authService.login(loginModel)

        const act = loginResult?.body?.payload?.accessToken;

        if (!!act) {
            localStorage.setItem('ACT', act)
            interceptToken()
            const decodedToken = jwt_decode(act)
            const userInfo = (await userManagementService.getUserInfo(decodedToken.sub))?.body?.payload
            authInfo.set(userInfo)
        }
    }
</script>

<style>
    .login-form {
        height: 100vh;
        width: 100vw;
        display: flex;
        margin: 0 auto;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
</style>

<div class="login-form">
    <input type="text" bind:value={loginModel.userName}/>
    <input type="password" bind:value={loginModel.password}/>
    <button on:click={login}>Log in</button>
</div>


