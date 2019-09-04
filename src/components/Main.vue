<template>
  <div>
    返回：
    <button @click="toReturn">🔙</button>
    欢迎：{{message}}
    <div id="main">
      <img src="../assets/logo.png" />
      <TitleComponent />
      <HeaderComponent />
      <CheckboxComponent />
      <BottomComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import CheckboxComponent from "./CheckboxComponent";
import TitleComponent from "./TitleComponent";
import BottomComponent from "./BottomComponent";

export default {
  name: "main",
  components: {
    HeaderComponent,
    CheckboxComponent,
    TitleComponent,
    BottomComponent
  },
  props: {
    message: String
  },
  methods: {
    toReturn: function() {
      this.$router.push({
        path: "/"
      });
    }
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
