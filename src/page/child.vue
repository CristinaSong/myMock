<template>
  <div>
    子组件：<span>{{inputName}}</span>
    <div>
      <input
        type="button"
        value="给父组件传值"
        @click="childClick"
      />
    </div>
  </div>
</template>

<script>
export default {
    // 接收父组件的值,props里面值不能改变
    props: { // 对象写法
        inputName: {
            type: String,
            require: true
        }
    },
    data () {
        return {
            childValue: '我是子组件的数据'
        };
    },
    methods: {
        childClick () {
            this.$emit('update:inputName', this.childValue);
        }
    }
};
</script>
