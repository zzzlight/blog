/**
 *
 * @Description 邮件发送
 * 调用方法:sendMail('718391591@qq.com','这是测试邮件', 'Hi ,这是一封测试邮件');
 
 *
 */

const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const config = {
  email: {
    service: 'QQ', // 邮箱类别，固定QQ
    user: '718391591@qq.com', // QQ邮箱，用来发送回复邮件
    pass: 'yourcode', // QQ邮箱授权码
  },
}

sendSmtpTransport = nodemailer.createTransport(
  smtpTransport({
    service: config.email.service,
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  })
)

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function (replyObj) {
  sendSmtpTransport.sendMail(
    {
      from: config.email.user,
      to: replyObj.recipient,
      subject: `${replyObj.subject} 你好! 你有新邮件了, 请查收`,
      html: replyObj.html,
    },
    function (error, response) {
      if (error) {
        console.log(error)
      }
      console.log('发送成功')
    }
  )
}

module.exports = sendMail
