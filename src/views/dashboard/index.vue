<template>
  <div class="dashboard-container">
 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {getName} from '@/utils/auth'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ]),
    getUserName(){
        return getName()
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text,&-h2{
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
