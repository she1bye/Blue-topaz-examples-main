<%* 
let content=`---
cssclass: kanban gridlist noyaml
tag: moc
obsidianUIMode: preview
--- `;
content +=   "`button-homewp`  `button-browsevault`  `button-browsenext` `button-browserefresh` \n"
content +=   "%% moc %%"
const folders = this.app.vault.getAllLoadedFiles().filter(i => i.children).map(folder => folder.path);
const selfolder=folders.map((item)=>{
    item='ð '+item;
    return item;
});
const folderChoicePath = await tp.system.suggester(selfolder, folders,false,"Select the folder to generate the MOC");
if (folderChoicePath != null) {
	new Notice(`Folder selected: ${folderChoicePath}`, 5000);
		folders.map(async function (folder) {
		if(folder.includes(folderChoicePath))  //åªå¯¹å½åéæ©çç®å½ä»¥åå­ç®å½çæmoc
			{
			let foldername =folder.replace(/(.*\/)*([^.]+)/i,"$2");
			let overwrite =''
			const Path = (folder== '/' ? '' : folder + '/') + foldername ;  
			if(tp.file.exists(Path))
			{overwrite = await tp.system.suggester(['yes','no'], ['yes','no'],false,"Does it overwrite files ''"+ Path +"''?");
				if(overwrite==="yes"){ await app.vault.delete(tp.file.find_tfile(Path)) 
					 await tp.file.create_new(content,Path) }}
			else await tp.file.create_new(content,Path)}})}else {
	new Notice(`No folder selected`, 5000);}%>