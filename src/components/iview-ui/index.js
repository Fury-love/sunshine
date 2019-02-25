//按需引入iview组件，减少打包文件大小

import Vue from 'vue'

import {
  Form,
  FormItem,
  Input,
  Icon,
  Button,
  Layout
} from 'iview';

Vue.component('Form',Form);
Vue.component('FormItem',FormItem);
Vue.component('Input',Input);
Vue.component('Icon',Icon);
Vue.component('Button',Button);
Vue.component('Layout',Layout);
