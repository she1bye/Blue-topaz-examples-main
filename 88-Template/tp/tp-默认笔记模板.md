---
<%-*
var cleanTitle = tp.user.getTitleSnippet(tp.file.title) 
var title = `${cleanTitle}`;
await tp.file.rename(`${title}`);
-%>

alias: 
tags: 
cdate: <% tp.file.creation_date() %>
uid: <% tp.date.now("YYYYMMDDHHmmss") %> 
Update: <%+ tp.file.last_modified_date("YYYY-MM-DD dddd HH:mm:ss") %>
cssclass: 
Cover: 
---

## Metadata
Status::    <% tp.system.suggester(["ð±åè½ç¶æ", "ðª´å¹è²ç¶æ", "ð²é¿éç¶æ"], ["#ç¬è®°ç¶æ/ð±åè½", "#ç¬è®°ç¶æ/ðª´å¹è²","#ç¬è®°ç¶æ/ð²é¿é"],false, "ç¬è®°ç¶ææ¯ï¼") %>
Source Type::  <% tp.system.suggester(["ð­æ³æ³", "ðä¹¦ç±", "ð°ï¸æç« ", "ð£ï¸èå¤©", "ð»æå­¦", "â¶ï¸è§é¢", "ð§ï¸æ­å®¢"], ["#ð¥/ð­æ³æ³ ", "#ð¥/ðä¹¦ç± ", "#ð¥/ð°ï¸æç« ", "#ð¥/ð£ï¸èå¤© ", " #ð¥/ð»æå­¦", "#ð¥/â¶ï¸è§é¢", "#ð¥/ð§ï¸æ­å®¢"],false, "ç¬è®°æºèªåªéï¼") %>
Note Type::  <% tp.system.suggester(["ç¬è®°", "MOC"], ["#ç¬è®°", "#MOC"],false, "ç¬è®°ç±»åæ¯ï¼") %>
Topic:: [[<% tp.system.prompt("è¿ä¸ªç¬è®°å¯¹åºçä¸»é¢MOC ", "æ¯å¦ï¼æ¶é´ç®¡ç") %>]]
Author:: {åèµè®¯çä½èæèå¯¹è¯çäººæèå¼èµ·æç§æ³æ³çåå }


<%-*  let filetype = await tp.system.suggester(["æ¾å¥å·¥ä½", "æ¾å¥å­¦ä¹ ", "å½å¥äººè"], ["å·¥ä½", "å­¦ä¹ ", "äººè"], false, "Which template do you want to use?") 
if (filetype === "å·¥ä½") { 
myFilePath = "/20 - å·¥ä½/" +  `${title}`;
await tp.file.move(`${myFilePath}`);
} else if (filetype === "å­¦ä¹ ") { 
myFilePath = "/30 - å­¦ä¹ /" +  `${title}`;
await tp.file.move(`${myFilePath}`);
} else if (filetype === "äººè") {
myFilePath = "/50 - äººè/02 å¶ä»/" +  `${title}`;
await tp.file.move(`${myFilePath}`);
} else { 
tp.file.cursor(1)
} -%>