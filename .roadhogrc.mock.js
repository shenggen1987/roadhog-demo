const Mock = require('mockjs')
export default {
    'GET /api/users': Mock.mock({
        'data|100': [{
            'id|+1': 1,
            name: '@cname',
            nickName: '@last',
            phone: /^1[34578]\d{9}$/,
            'age|11-99': 1,
            address: '@county(true)',
            isMale: '@boolean',
            email: '@email',
            createTime: '@datetime',
            avatar: function() {
                return Mock.Random.image('100x100', Mock.Random.color(), "#757575", 'png', this.nickName.substr(0, 1))
            }
        }],
        page: {
            total: 100,
            current: 1
        },
        success: true
    }),
    'GET /users1': [{name:'sorrycc'}, {name:'pigcan'}],
    'GET /api/order': Mock.mock({
        'data|10': [{
            'key|+1': 1,
            'id|+1': 1,
            name: '@cname',
            nickName: '@last',
            phone: /^1[34578]\d{9}$/,
            'age|11-99': 1,
            address: '@county(true)',
            isMale: '@boolean',
            email: '@email',
            createTime: '@datetime',
            avatar: function() {
                return Mock.Random.image('100x100', Mock.Random.color(), "#757575", 'png', this.nickName.substr(0, 1))
            }
        }],
        page: {
            total: 100,
            current: 1
        },
        success: true
    }),
    'GET /api/ordersCondition': Mock.mock({
        data: {
            status: [{text: '审核中', value: 'auditing'}, {text: '审核通过', value : 'pass'}]
        },
        success: true
    }),
}
