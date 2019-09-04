<template>
  <div id="todoList">
      <img src="../assets/logo.png" />
      <TitleComponent />
      <HeaderComponent />
      <CheckboxComponent />
      <BottomComponent />
    </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import CheckboxComponent from "./CheckboxComponent";
import TitleComponent from "./TitleComponent";
import BottomComponent from "./BottomComponent";

export default {
  name: "todoList",
  components: {
    HeaderComponent,
    CheckboxComponent,
    TitleComponent,
    BottomComponent
  }
};
</script>
<style>
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
