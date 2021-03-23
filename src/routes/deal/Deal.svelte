<script>
    let key;
    let keyCode;

    function handleKeydown(event) {
        key = event.key;
        keyCode = event.keyCode;
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div style="text-align: center">
    {#if key}
        <kbd>{key === ' ' ? 'Space' : key}</kbd>
        <p>{keyCode}</p>
    {:else}
        <p>Focus this window and press any key</p>
    {/if}
</div>
