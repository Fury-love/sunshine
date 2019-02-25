import Vue from 'vue'
import axios from 'axios'

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json";
