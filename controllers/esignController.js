const crypto = require('crypto')

exports.generateKeyPair = async (req, res) => {
    const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
        modulusLength: 700, 
        publicKeyEncoding: {
            type: 'spki',
            format: 'der'
        }, 
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'der'
        }
    })

    res.send({publicKey: publicKey.toString('base64'), privateKey: privateKey.toString('base64')})
}

exports.sign = async (req, res) => {
    debugger
    let { data } = req.body
    let {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
        modulusLength: 700, 
        publicKeyEncoding: {
            type: 'spki',
            format: 'der'
        }, 
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'der'
        }
    })

    publicKey = publicKey.toString('base64')
    privateKey = privateKey.toString('base64')

    privateKey = crypto.createPrivateKey({
        key: Buffer.from(privateKey, 'base64'),
        type: 'pkcs8',
        format: 'der'
    })

    const sign = crypto.createSign('SHA256')
    sign.update(data)
    sign.end()
    const signature = sign.sign(privateKey).toString('base64')

    res.send({publicKey: publicKey, signature: signature})
}

exports.verify = async (req, res) => {
    let {data, publicKey, signature} = req.body
    publicKey = crypto.createPublicKey({
        key: Buffer.from(publicKey, 'base64'),
        type: 'spki',
        format: 'der'
    })

    const verify = crypto.createVerify('SHA256')
    verify.update(data)
    verify.end()

    let result = verify.verify(publicKey, Buffer.from(signature, 'base64'))

    res.send({verify: result}) 
}

