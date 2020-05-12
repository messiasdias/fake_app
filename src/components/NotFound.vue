<template>
    <div class="container">
        <h1>Page Not Found!</h1>
        <a @click.prevent="$store.dispatch('navegation', 'list')"  >Back to List</a>
    </div>
</template>
<script>
export default {
    name : "NotFound",
}
</script>