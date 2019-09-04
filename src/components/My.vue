<template>
  <div>
    头像：{{ $store.state.head }}
    <br />
    姓名：{{ $store.state.name }}
    <br />
    电话：{{ $store.state.tel }}
  </div>
</template>

<script>
export default {
  name: "My"
};
</script>