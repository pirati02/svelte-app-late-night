<script>
    import {onDestroy} from 'svelte'
    import {Router, Link, Route, navigate} from "svelte-routing";
    import Contact from "./routes/contact/Contact.svelte";
    import Deal from "./routes/deal/Deal.svelte";
    import Auth from "./routes/auth/Auth.svelte";
    import Dashboard from "./routes/dashboard/Dashboard.svelte";
    import {authInfo} from "./http/auth/auth.store";

    export let url;

    let authUser = null
    const loginSubscribed = authInfo.subscribe(li => {
        authUser = li
    })

    $: {
        url = authUser?.id ? '/' : 'auth'
        navigate(url)
    }

    onDestroy(loginSubscribed)
</script>

<style>
    .authorized-user {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-end;
    }
</style>

<Router>
    {#if !!authUser.id}
        <nav>
            <Link to="/">Dashboad</Link>
            <Link to="contact">Contact</Link>
            <Link to="deal">Deal</Link>

            <div class="authorized-user">
                <h3>Hello {authUser.userName}</h3>
                <Link on:click={() => authInfo.set({ id: null })}>

                    Log out
                </Link>
            </div>
        </nav>
    {/if}
    <Route path="contact" component="{Contact}"/>
    <Route path="deal" component="{Deal}"/>
    <Route path="/">
        <Dashboard/>
    </Route>
    <Route path="auth">
        <Auth/>
    </Route>
</Router>
