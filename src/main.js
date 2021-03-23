import App from './App.svelte';
import {interceptContentTypes} from "./http/fetch.interceptor";

interceptContentTypes()
app = new App({
    target: document.body
});

export default app;
