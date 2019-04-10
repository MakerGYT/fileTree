Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        value: {
            type: Array,
            value: [],
            observer() {
                this.initView();
            }
        },
        fatherKey: {
            type: String,
            value: 'pid'
        },
        contentKey: {
            type: String,
            value: 'Key'
        },
        contentType: {
            type: String,
            value: 'Type'
        }
    },
    data: {
        outValue: [],
        currentPath: [],
        isChange: false,
        normalValue: [],
        currentFatherId: null,
    },
    methods: {
        initView() {
            // 优先使用value
            if (this.properties.value.length > 0) {
                this.setData({
                    normalValue: this.properties.value,
                });
            } else {
                console.warn("no data")
            }
            this.setData({
                outValue: this.data.normalValue,
            });


        },
        tapItem(e) {
            if (this.data.isChange) {
                this.setData({
                    isChange: true
                });
            }
            // 获取当前点击的索引
            const currentIndex = e.currentTarget.dataset.index;
            const currentText = e.currentTarget.dataset.text;
            // 如果当前点击的标签还有下一级，就将路径改变
            if (this.data.outValue[currentIndex].children) {
                // 添加索引如路径
                this.setData({
                    currentPath: [
                        ...this.data.currentPath,
                        { text: currentText, index: currentIndex }
                    ]
                });
                this.selPath();
            }
            this.setData({
                isChange: false
            });


        },
        // 选择路径
        // pathsIndex 是 paths 的索引
        selPath(pathsIndex = this.data.currentPath.length - 1) {
            // 根据路径修改 outValue
            let tmpValue = this.data.normalValue;
            // 如果 pathsIndex 是 -1 就应该要回到第一级
            if (pathsIndex === -1) {
                this.setData({
                    currentPath: [],
                    outValue: tmpValue
                });
                return;
            }
            for (let i = 0; i <= pathsIndex; i++) {
                let item = this.data.currentPath[i].index;
                tmpValue = tmpValue[item]['children'];
            }
            // 更新 outValue , currentPath
            let endIndex = pathsIndex + 1;
            this.setData({
                outValue: tmpValue,
                currentPath: this.data.currentPath.slice(0, endIndex)
            });
        },
        toPath(e) {
            // 如果正在执行修改路径的方法
            if (this.data.isChange) {
                this.setData({
                    isChange: true
                });
            }
            // 获取当前点击的索引
            const index =
                e.currentTarget.dataset.index != undefined
                    ? e.currentTarget.dataset.index
                    : this.data.currentPath.length - 1;
            this.selPath(index - 1);
            console.log(this.data);
        },
        renderIcon() {
            console.log(this.data.outValue)
        }
    }
})
