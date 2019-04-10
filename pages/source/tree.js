//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        value: [
            {

                Key: 'doc/',
                Type: 'folder',
                children: [
                    {
                        Key: 'map/',
                        Type: 'folder',
                        children: [
                            {
                                Key: 'map.html',
                                Type: 'code',
                            },
                            {
                                Key: 'map.html',
                                Type: 'zip',
                            },
                            {
                                Key: 'map.html',
                                Type: 'pdf',
                            }
                        ]
                    },
                    {
                        Key: 'qw/',
                        Type: 'folder',
                        children: [
                            {
                                Key: 'map.xsl',
                                Type: 'excel',
                            }
                        ]
                    }
                ]
            },
            {
                Key: 'img/',
                Type: 'folder',
                children: [
                    {
                        Key: 'Screenshot from 2019-04-09 14-05-04.png',
                        Type: 'img',
                    }
                ]
            },
            {
                Key: 'ppt/',
                Type: 'folder',
                children: [
                    {
                        Key: 'map.ppt',
                        Type: 'ppt',
                    }
                ]
            }
        ],
    },

    onLoad: function () {
    },
});
