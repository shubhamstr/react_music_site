const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const key = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDoks9ydTUVrjlv
oMPuykq70D6Ynyw7TUaZ3ToCjkCLjFpzdB+MwslbqWTGM4LUnwm4yd1mmreG15bk
lkVkRHSVW1TYE517yeOjJ7PwWA16UVXv4rcun/pd3C6yAa902gPcpluEsEsIeS7q
EhoLAjzgUCQ6X8Wx8OTEybQOlZ9KmA+ZZBeT0Leyfq/qKvmx7ZPFvkmpc5wqkoPD
8+bVdSuavDcDmPWMZ5UwEGVhWOMIrxb1dAY8OudG206KCzPAGvLcjmBe6a5Z4zxy
d0xvHfiUIohDjWCs/5OUVEkAken3LnE5NMxmK8odgrU68/y/UN9KFTlEDn4Nx0Mi
FUy7ij91AgMBAAECggEAF+vPv/1LtDrrB+8AcB1o8efhpFeM2F2iox1Ew/IHNAM/
42ugeh0n0lB6P8OZE473FEVZCx5jPZCLod/N69n5psoR0Da2Rj719bhV8uTPoBLh
FK8cOcS1HvXQbLktJ4bsCkQnGh763LiAKY2qlZLJmaXMkB99KUf2c8IuTai4jVaj
31v0u3/eDr1zZlugQEz+1dqAiQO7Jz8zdXrONFkwaHCQEmffDNvIZ2EFC+F/f4cy
2ztby4aSLfiy2qJXWcLdpwUrsp76D/hnkOzC1+yD1kpS0z0Pem1DxSbkfZ+iNFQH
AYWJPEBasvmmcCn+8BUC5dUwBoc7WSAZ0U6IOusU2QKBgQD60+v67+QQbi3TDF24
KuPUgoHVvxD3QfQOFvd5VD0EDR1Z1P2IoyGAgqtscmlY82WJaxagDFdWlVFUS1xP
EhJKjwGs/eG5WDZox3lYFK1+JCDuzy7mBVIQcu5MTZSKg64lNalB7uFCephWSAp7
D9cVSunZZ9rQvBU6pkuCkv8JeQKBgQDtXobkLaNkR3VOiq+emGTmCM3AUS58C5Lg
ySVrAHpjSaQfncB3EjOMC6FSfTpcTyiENcUutKVgw4HWfrTk9fS0Ct30rjljTlqX
+RmrEVi92xapz6wlNH2peO5yLvRg7J0UvpqeLNT4jSZ+SapzJXwWZTaGwDsWYZAL
hnmqDMUi3QKBgQDmSmpwE46WU0J5cfIeJCrXsxcXs3wVOBWmVgnS+Leon43iK363
0+bvgYl4YTc99wKzf4HfYlVR5ngsZ6CR7Gqkz9XfCZ4UONyDqRlM+HctyGgAOnK5
uArXlV4a6mPGJQ5flXwYUAW7rqltFmmhATMdlpFMDWFGoljvZz0O3n2QKQKBgQCs
ObzHzHFT7iEoJqo7+TikS1j2JDEFIeSlImz60TL73U+u/OfLvTIXd8zKLEBu/6RX
ISh7teiUZ+ZJ+k9IHUk6ZPQcd1j+O7ixsbS1EXYA8vjjpuGxcP+IOk1QHc+Ej8l9
ZrqK795qpQd78/kvaNA68573cHyuxYUdR6n4/yD+JQKBgAWDNJ42ZIOpAfT2UCW8
gFEockq8R0qsBmO4Oit02BBpUCsSvaFeMhYwMnCUhrjBMGERJ5MjFeG91MJT4APA
cbh07JGZrRcI+RAH6nmX9r8rJVXUk0k+jvn/qylP8oAWrjwoGCgFCmtDSsdoC9Gs
Qw6HXRrWBnHJDUs5CHQUt7qt
-----END PRIVATE KEY-----`;

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id, firstName: this.firstName}, key, {expiresIn: "1d"});
    return token;
}

const User = mongoose.model("user", userSchema);

const validateRegister = (data) => {
    const schema = joi.object({
        firstName: joi.string().required().label("firstName"),
        lastName: joi.string().required().label("lastName"),
        email: joi.string().email().required().label("email"),
        password: passwordComplexity().required().label("password")
    });
    return schema.validate(data);
}

const validateLogin = (data) => {
    const schema = joi.object({
        email: joi.string().email().required().label("Email"),
        password: joi.string().required().label("password")
    });
    return schema.validate(data);
}

module.exports = {User, validateRegister, validateLogin};