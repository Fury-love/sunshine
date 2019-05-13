import Vue from 'vue'
import axios from 'axios'

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json";
// 配置程序基础路径
axios.defaults.baseURL = urls.base
