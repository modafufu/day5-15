//在这个js文件中，专门来创建store的实例对象
import {action, observable} from 'mobx-miniprogram'

export const store=observable({
  numA:1,
  numB:2,
  get sum(){//计算属性get 只读
    return this.numA+this.numB
  },
  //action 用来修改数据 store中的值
  updataNum1:action(function(step){
    this.numA+=step
  }),
  updataNum2:action(function(step){
    this.numB+=step
  })
})