# 依赖关系
tree组件调用了icon组件
# 调整
1. icon默认颜色调整 
```css
/* /icon/index.wxss*/

.my-icon-folder:before {
  content: "\e602";
  color: grey;
}
```
也可在调用时设置颜色
<my-icon name="" color="" />
2. icon替换
在[阿里巴巴矢量图标库](https://www.iconfont.cn)新建项目并引入图标后下载至本地，将iconfont.css内容复制到index.wxss
3. 层次数据
```js
// pages/source/tree.js
    value: [
        {

            Key: 'doc/',
            Type: 'folder',
            children: [
                {
                   
                }
            ]
        }
    ]
```

# 改进
根据文件名自动配置type