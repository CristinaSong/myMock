<template>
  <div>
    父组件:<input
      v-model="inputName"
      type="text" >
    <child :input-name.sync="inputName"/>
  </div>
</template>

<script>
import child from '@/page/child';
export default {
    components: {
        child
    },
    data () {
        return {
            inputName: ''
        };
    }
};
</script>
