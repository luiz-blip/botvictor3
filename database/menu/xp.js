const xp = (prefix, botName, ownerName) => {
        return `
ใ *${botName}* ใ

๐ *๏ฟฝ๐๐๐๐๐๐๐๐๐๐*
  ๐ Prefix: ใ  ${prefix}  ใ
  ๐ Creator: ${ownerName}
  ๐ Version: 3.0
๐ *๐๐๐๐๐*
  โ
  โโ ๐ ${prefix}info
  โโ ๐ ${prefix}blocklist
  โโ ๐ ${prefix}chatlist
  โโ ๐ ${prefix}ping
  โโ ๐ ${prefix}bugreport
๐ *๐๐*
  โ
  โโ ๐ ${prefix}leveling
  โโ ๐ ${prefix}level
  โโ ๐ ${prefix}mining
--------------------------------
Nota: Vocรช pode coletar XP e aumentar seu nรญvel conversando com qualquer pessoa do grupo que ativou o recurso de nivel`
}
exports.xp = xp
