---

<%-*
let banner= await tp.user.getrandomImage("99-Attachment/banner")
let weather = await tp.user.getweather("")
-%>
UID: <% tp.date.now("YYYYMMDDHHmm")%> 
alias:
banner: <% banner %>
```js quickadd
const suggester = await this.quickAddApi.suggester(["ๅผๅฟ๐", "ไฝ่ฝ๐", "็ฒๆซ๐ช","็ฝ๐","ๅนณ้๐ถ"], ["๐", "๐", "๐ช", "๐", "๐ถ"]) 
return `banner_icon: ${suggester}`;
```
Banner style: Solid
cssclass: mynote,noyaml
---
> [!blank] 
> [timeline{{DATE:DDD}}::timeline]
```ad-flex
(Weather::<% `${weather}` %>)
> [!infobox|noicon]- ๐ ๅฝๅคฉๅๅปบ็ๆไปถ
> ```dataviewjs 
const filename=dv.current().file.name;
dv.list(dv.pages().where(p => p.file.cday.toISODate() === filename).sort(p => p.file.ctime, 'desc').file.link) 
>```
```
## โ้็ฌๆๆ