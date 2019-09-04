<template>
  <div id="app">
      <img src="./assets/logo.png">
    <TitleComponent />
    <HeaderComponent />
    <CheckboxComponent />
    <BottomComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import CheckboxComponent from "./components/CheckboxComponent";
import TitleComponent from "./components/TitleComponent";
import BottomComponent from "./components/BottomComponent";

export default {
  name: "app",
  components: {
    HeaderComponent,
    CheckboxComponent,
    TitleComponent,
    BottomComponent
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
