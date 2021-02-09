<template>
    <div id="app">
        <h1>Todo application</h1>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}
body {
    background-color: #2c2f33;
}
h1, h2, p {
    color: white;
}
a {
    color: white;
}
a:hover {
    color: #FF6700;
    transition-duration: 250ms;
}
button {
    cursor: pointer;
    border: none; 
    outline: none;
}
</style>
