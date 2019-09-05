<template>
  <div id="todoList">
      <HeaderComponent />
      <CheckboxComponent />
      <BottomComponent />
    </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import CheckboxComponent from "./CheckboxComponent";
import BottomComponent from "./BottomComponent";

export default {
  name: "todoList",
  components: {
    HeaderComponent,
    CheckboxComponent,
    BottomComponent
  }
};
</script>
<style>

</style>
