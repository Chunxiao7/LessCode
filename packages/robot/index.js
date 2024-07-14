/**
 * 频道id 13975330381362823216
 */
const fs = require("fs")
const filePath = "./record/store.txt"
const guildId = '13975330381362823216'
const channelId = '655874900'

let record = ''
let latestCommits = []
fs.access(filePath, fs.constants.F_OK, (err) => {
  _writeFile('')
  fs.readFile(filePath, 'utf-8', (readErr, data) => {
    if (readErr) {
      console.error('读取文件时出错:', readErr);
    } else {
      record = data
    }
  });

});
console.log("提交唯一标识：", record)

const { createOpenAPI, createWebsocket } = require('qq-guild-bot');

const testConfig = {
  appID: '', // 申请机器人时获取到的机器人 BotAppID
  token: '', // 申请机器人时获取到的机器人 BotToken
  intents: [], // 事件订阅,用于开启可接收的消息类型
  sandbox: true, // 沙箱支持，可选，默认false. v2.7.0+
};

setInterval(() => {
  fetch("https://api.github.com/repos/Chunxiao7/LessCode/commits", {
    headers: {
      Authorization: ''
    }
  }).then(res => {
    return res.json()
  }).then(res => {
    if (!res.length || record === res[0].sha) return;
    _writeFile(res[0].sha)
    for (let i = 0; i < res.length; i++) {
      if (res[i].sha !== record) {
        latestCommits.push({
          date: convertUTCToBeijingTime(res[i].commit.author.date),
          name: res[i].commit.author.name,
          message: res[i].commit.message,
        })
      } else {
        break
      }
    }
    if (latestCommits.length) {
      record = res[0].sha
      sendMessage(formatData(latestCommits))
      latestCommits = []
    }
  })
}, 10 * 1000)

// 创建 websocket 连接
const ws = createWebsocket(testConfig);

// 消息监听
ws.on('READY', (wsdata) => {
  console.log('[READY] 事件接收 :', wsdata);
});
ws.on('ERROR', (data) => {
  console.log('[ERROR] 事件接收 :', data);
});
ws.on('GUILDS', (data) => {
  console.log('[GUILDS] 事件接收 :', data);
});
ws.on('GUILD_MEMBERS', (data) => {
  console.log('[GUILD_MEMBERS] 事件接收 :', data);
});
ws.on('GUILD_MESSAGES', (data) => {
  console.log('[GUILD_MESSAGES] 事件接收 :', data);
  client.messageApi.postMessage(channelId, {
    content: '你干嘛哎呦'
  }).catch(e => {
    console.log(e);
  })
});
ws.on('GUILD_MESSAGE_REACTIONS', (data) => {
  console.log('[GUILD_MESSAGE_REACTIONS] 事件接收 :', data);
});
ws.on('DIRECT_MESSAGE', (data) => {
  console.log('[DIRECT_MESSAGE] 事件接收 :', data);
});
ws.on('INTERACTION', (data) => {
  console.log('[INTERACTION] 事件接收 :', data);
});
ws.on('MESSAGE_AUDIT', (data) => {
  console.log('[MESSAGE_AUDIT] 事件接收 :', data);
});
ws.on('FORUMS_EVENT', (data) => {
  console.log('[FORUMS_EVENT] 事件接收 :', data);
});
ws.on('AUDIO_ACTION', (data) => {
  console.log('[AUDIO_ACTION] 事件接收 :', data);
});
ws.on('PUBLIC_GUILD_MESSAGES', async (eventData) => {
  console.log('[PUBLIC_GUILD_MESSAGES] 事件接收 :', eventData);
  const { data } = await client.messageApi.postMessage('', {
    content: 'test'
  })
  console.log(data);
});

ws.on('DIRECT_MESSAGE_CREATE', async (data) => {
  console.log('[DIRECT_MESSAGE_CREATE] 事件接收 :', data);

});
ws.on('MESSAGE_CREATE', async (data) => {
  console.log('[DIRECT_MESSAGE_CREATE] 事件接收 :', data);
});

// 创建 client
const client = createOpenAPI(testConfig);
// client.meApi.me()
//   .then(res => {
//     // 数据存储在data中
//     console.log("meApi", res.data);
//   })
//   .catch(err => {
//     // err信息错误码请参考API文档错误码描述
//     console.log(err);
//   });
// client.meApi.meGuilds()
//   .then(res => {
//     // 数据存储在data中
//     console.log("meGuilds", res.data);
//   })
//   .catch(err => {
//     // err信息错误码请参考API文档错误码描述
//     console.log(err);
//   });
// client.guildApi.guild("13975330381362823216")
//   .then(res => {
//     // 数据存储在data中
//     console.log("guildApi", res.data);
//   })
//   .catch(err => {
//     // err信息错误码请参考API文档错误码描述
//     console.log(err);
//   });

// client.channelApi.channels(guildId).then(res => {
//   // 数据存储在data中
//   console.log("channels", res.data);
// })
//   .catch(err => {
//     // err信息错误码请参考API文档错误码描述
//     console.log(err);
//   });
// client.channelApi.channel(channelId).then(res => {
//   // 数据存储在data中
//   console.log("channel", res.data);
// })
//   .catch(err => {
//     // err信息错误码请参考API文档错误码描述
//     console.log(err);
//   });
// client.guildApi.guildMembers(guildId).then(res => {
//   // 数据存储在data中
//   console.log("guildMembers", res.data);
// })
//   .catch(err => {
//     // err信息错误码请参考API文档错误码描述
//     console.log(err);
//   });

sendMessage("启动、信息推送延迟为10s")
function sendMessage(content) {
  client.messageApi.postMessage(channelId, {
    content: content
  }).then(res => {
    // 数据存储在data中
    console.log("postMessage", res.data);
  })
    .catch(err => {
      // err信息错误码请参考API文档错误码描述
      console.log(err);
    });
}
function _writeFile(content) {
  fs.writeFile(filePath, content, (writeErr) => {
    if (writeErr) {
      console.error('写入文件时出错:', writeErr);
    } else {
      console.log('文件创建并写入数据成功');
    }
  });
}
function formatData(data) {
  if (typeof data === 'string') return data
  let  = ''
  data.forEach(item => {
    s += `${item.date}:\n创建人:  ${item.name}\n提交信息: ${item.message.replace(/github/g, '[G]')}\n`
  })
  console.log("format", s);
  return
}
function convertUTCToBeijingTime(utcTimeStr) {
  const utcDate = new Date(utcTimeStr);
  const beijingDate = new Date(utcDate.getTime());
  const year = beijingDate.getFullYear();
  const month = String(beijingDate.getMonth() + 1).padStart(2, '0');
  const day = String(beijingDate.getDate()).padStart(2, '0');
  const hours = String(beijingDate.getHours()).padStart(2, '0');
  const minutes = String(beijingDate.getMinutes()).padStart(2, '0');
  const seconds = String(beijingDate.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
