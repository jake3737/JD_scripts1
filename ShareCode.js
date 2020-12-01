// 助力码辅助生成
class ShareCode {
    constructor(username, fruits, pet, plantBean, ddfactory, jxfactory) {
        this._username = username
        // 东东农场互助码
        this._fruits = fruits
        // 东东萌宠互助码
        this._pet = pet
        // 种豆得豆互助码
        this._plantBean = plantBean
        // 东东工厂互助码
        this._ddfactory = ddfactory
        // 京喜工厂互助码
        this._jxfactory = jxfactory
    }

    get username() {
        return this._username
    }

    get fruits() {
        return this._fruits
    }

    get pet() {
        return this._pet
    }

    get plantBean() {
        return this._plantBean
    }

    get ddfactory() {
        return this._ddfactory
    }

    get jxfactory() {
        return this._jxfactory
    }
}

const shareCodes = [
    new ShareCode(
        'jd未知jd',
        'a399af032b1643f3b1359f4f24af39e1',
        'MTE1NDQ5MzYwMDAwMDAwMzcyMTg1MjU=',
        '',
        'P04z54XCjVWnYaS5m9cZz2muSkS_NgjbZnSzA',
        ''
    ),
    new ShareCode(
        '大咪嗷嗷1',
        '987ee04888b64f0597b13049853caca4',
        'MTE1NDAxNzgwMDAwMDAwNDAwMzg2Mjk=',
        'bknudbr7e4sqwbhh4kxjg7vthwtj3ctybaw66uy',
        'P04z54XCjVWnYaS5m9cZxa_rCUbw1uYn51X5g',
    ),
    new ShareCode(
        '高敏',
        '32b5348df6374239964194e187fa187c',
        'MTE1NDUwMTI0MDAwMDAwMDQwNDcxOTYx',
        'mv3riww4sqy5f53abjy63rud3qz6gsx6f7h3czq',
    ),
    new ShareCode(
        '大咪嗷嗷2',
        '97d2efe84bd74bf8aacacb9b9bac20fd',
        'MTEzMzI0OTE0NTAwMDAwMDA0MTU3ODg3OQ==',
        'gou7sxm3hztwosdrlp4mnrat6ypjtw3b5ukpqpq',
        'P04z54XCjVWnYaS5m9cZyaNjzQOxlCuj5XW6w',
        'tvUf4vUpkLF9KyitjqKI3A=='
    ),
    new ShareCode(
        '大咪嗷嗷3',
        undefined,
        undefined,
        'pt_key=AAJfw5oZADCBdZciQl2_tzrlQQ3HYQYfbREj3YIOioHQoGyjc4-G4tgqb6F4NdHKEpyhiY7ar1g; pt_pin=jd_KWhQIuTtixQJ;'
    ),
    new ShareCode(
        '查钧译',
        '9a07bef4e7ad49ae8fdaf113de817a1b',
        'MTE1NDUyMjEwMDAwMDAwNDAwMTQ1NjM=',
        'mlrdw3aw26j3xhxesrqelkqhmqott5jmflm63ha'
    ),
    new ShareCode(
        '刘奕',
        '800d1ec39dbd473bbcf2f35667b78b02',
        'MTAxODc2NTEzNTAwMDAwMDAyOTAxMTkwMQ==',
        'q74cnfebbilqdntxbtix6cx5a4'
    ),
    new ShareCode(
        '查钧译的老婆',
        'c168e10ee28248e79defbf76bd098e35',
        'MTE1NDQ5OTIwMDAwMDAwNDAxNjc4MzU=',
        'mlrdw3aw26j3wscxylsmq7u37f2s7oeysmjexxa'
    ),
    new ShareCode(
        '刘奕1',
        'd241a66537244934ba66d40701231a82',
        'MTE1NDAxNzgwMDAwMDAwNDAzMDE1Mzk=',
        '4npkonnsy7xi3utpy37pb3qc2vwdg4im4ts6rfa'
    ),
    new ShareCode(
        'hema3210',
        '4cbf9b4070b14efa853ee3e3ea0a97db',
        'MTE1NDUyMjEwMDAwMDAwNDAwMzgwOTU=',
        'lqvulo4mnacvkub4mrvr2u3qba'
    )
]

module.exports = {
    ShareCode,
    shareCodes
}
