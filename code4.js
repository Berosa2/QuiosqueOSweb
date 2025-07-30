gdjs.CreateCode = {};
gdjs.CreateCode.localVariables = [];
gdjs.CreateCode.GDTextoObjects1= [];
gdjs.CreateCode.GDTextoObjects2= [];
gdjs.CreateCode.GDimgObjects1= [];
gdjs.CreateCode.GDimgObjects2= [];
gdjs.CreateCode.GDlinkObjects1= [];
gdjs.CreateCode.GDlinkObjects2= [];
gdjs.CreateCode.GDTexto2Objects1= [];
gdjs.CreateCode.GDTexto2Objects2= [];
gdjs.CreateCode.GDTexto1Objects1= [];
gdjs.CreateCode.GDTexto1Objects2= [];
gdjs.CreateCode.GDTexto3Objects1= [];
gdjs.CreateCode.GDTexto3Objects2= [];
gdjs.CreateCode.GDlink1pagObjects1= [];
gdjs.CreateCode.GDlink1pagObjects2= [];
gdjs.CreateCode.GDLink1NameObjects1= [];
gdjs.CreateCode.GDLink1NameObjects2= [];
gdjs.CreateCode.GDimg3Objects1= [];
gdjs.CreateCode.GDimg3Objects2= [];
gdjs.CreateCode.GDimg4Objects1= [];
gdjs.CreateCode.GDimg4Objects2= [];
gdjs.CreateCode.GDNewSpriteObjects1= [];
gdjs.CreateCode.GDNewSpriteObjects2= [];
gdjs.CreateCode.GDSaveObjects1= [];
gdjs.CreateCode.GDSaveObjects2= [];
gdjs.CreateCode.GDPublishObjects1= [];
gdjs.CreateCode.GDPublishObjects2= [];
gdjs.CreateCode.GDnomeObjects1= [];
gdjs.CreateCode.GDnomeObjects2= [];
gdjs.CreateCode.GDcoNFObjects1= [];
gdjs.CreateCode.GDcoNFObjects2= [];
gdjs.CreateCode.GDlink2Objects1= [];
gdjs.CreateCode.GDlink2Objects2= [];
gdjs.CreateCode.GDlink2nameObjects1= [];
gdjs.CreateCode.GDlink2nameObjects2= [];
gdjs.CreateCode.GDlink2pagObjects1= [];
gdjs.CreateCode.GDlink2pagObjects2= [];
gdjs.CreateCode.GDdeputationObjects1= [];
gdjs.CreateCode.GDdeputationObjects2= [];
gdjs.CreateCode.GDimg2Objects1= [];
gdjs.CreateCode.GDimg2Objects2= [];
gdjs.CreateCode.GDBackgroundObjects1= [];
gdjs.CreateCode.GDBackgroundObjects2= [];
gdjs.CreateCode.GDSalvarObjects1= [];
gdjs.CreateCode.GDSalvarObjects2= [];
gdjs.CreateCode.GDNewTextObjects1= [];
gdjs.CreateCode.GDNewTextObjects2= [];
gdjs.CreateCode.GDPrincipal2Objects1= [];
gdjs.CreateCode.GDPrincipal2Objects2= [];
gdjs.CreateCode.GDFun_952314oesObjects1= [];
gdjs.CreateCode.GDFun_952314oesObjects2= [];
gdjs.CreateCode.GDcoNF2Objects1= [];
gdjs.CreateCode.GDcoNF2Objects2= [];
gdjs.CreateCode.GDRedditLogoObjects1= [];
gdjs.CreateCode.GDRedditLogoObjects2= [];
gdjs.CreateCode.GDaaaObjects1= [];
gdjs.CreateCode.GDaaaObjects2= [];
gdjs.CreateCode.GDbar_9595functionObjects1= [];
gdjs.CreateCode.GDbar_9595functionObjects2= [];
gdjs.CreateCode.GDbarObjects1= [];
gdjs.CreateCode.GDbarObjects2= [];
gdjs.CreateCode.GDRedditLogo2Objects1= [];
gdjs.CreateCode.GDRedditLogo2Objects2= [];
gdjs.CreateCode.GDbutton_9595fun_95231_9595esObjects1= [];
gdjs.CreateCode.GDbutton_9595fun_95231_9595esObjects2= [];
gdjs.CreateCode.GDMouseObjects1= [];
gdjs.CreateCode.GDMouseObjects2= [];
gdjs.CreateCode.GDTextoFun_95231_95245esClickObjects1= [];
gdjs.CreateCode.GDTextoFun_95231_95245esClickObjects2= [];
gdjs.CreateCode.GDMouse2Objects1= [];
gdjs.CreateCode.GDMouse2Objects2= [];
gdjs.CreateCode.GDid_9595img1Objects1= [];
gdjs.CreateCode.GDid_9595img1Objects2= [];
gdjs.CreateCode.GDid_9595img2Objects1= [];
gdjs.CreateCode.GDid_9595img2Objects2= [];
gdjs.CreateCode.GDid_9595link1Objects1= [];
gdjs.CreateCode.GDid_9595link1Objects2= [];
gdjs.CreateCode.GDid_9595link2Objects1= [];
gdjs.CreateCode.GDid_9595link2Objects2= [];
gdjs.CreateCode.GDid_9595abrirObjects1= [];
gdjs.CreateCode.GDid_9595abrirObjects2= [];
gdjs.CreateCode.GDDowloadObjects1= [];
gdjs.CreateCode.GDDowloadObjects2= [];
gdjs.CreateCode.GDborder3Objects1= [];
gdjs.CreateCode.GDborder3Objects2= [];
gdjs.CreateCode.GDNewSprite2Objects1= [];
gdjs.CreateCode.GDNewSprite2Objects2= [];
gdjs.CreateCode.GDStObjects1= [];
gdjs.CreateCode.GDStObjects2= [];
gdjs.CreateCode.GDNewSprite3Objects1= [];
gdjs.CreateCode.GDNewSprite3Objects2= [];
gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.CreateCode.GDborderObjects1= [];
gdjs.CreateCode.GDborderObjects2= [];
gdjs.CreateCode.GDborder2Objects1= [];
gdjs.CreateCode.GDborder2Objects2= [];
gdjs.CreateCode.GDbuttonPlaceObjects1= [];
gdjs.CreateCode.GDbuttonPlaceObjects2= [];
gdjs.CreateCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.CreateCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.CreateCode.GDbuttonPlace2Objects1= [];
gdjs.CreateCode.GDbuttonPlace2Objects2= [];


gdjs.CreateCode.userFunc0xa3c090 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Crie o elemento input do tipo "file"
let input2 = document.createElement('input');
input2.type = 'file';
input2.id = 'fileInput2'; // Defina um ID diferente para facilitar o acesso
input2.accept = 'image/*'; // Aceita apenas arquivos de imagem
input2.style.display = 'none'; // Oculta o elemento

// Adicione o elemento ao corpo do documento
document.body.appendChild(input2);

// Adicione um listener para quando um arquivo for selecionado
input2.addEventListener('change', function(e) {
  const file = e.target.files[0];

  if (file) {
    // Extrai o nome do arquivo
    const fileName2 = file.name;

    const reader2 = new FileReader();

    reader2.onload = function(readerEvent2) {
      const dataURL2 = readerEvent2.target.result;
      // dataURL contém a imagem como uma string base64
      // Use uma variável de cena para passar o dataURL para o GDevelop
      runtimeScene.getVariables().get("imageDataURL2").setString(dataURL2);
      runtimeScene.getVariables().get("NomeArquive").setString(fileName2);
    }
    reader2.readAsDataURL(file);
  }
});
};
gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDTexto1Objects1ObjectsGDgdjs_9546CreateCode_9546GDTexto3Objects1ObjectsGDgdjs_9546CreateCode_9546GDlink1pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDLink1NameObjects1ObjectsGDgdjs_9546CreateCode_9546GDimg3Objects1ObjectsGDgdjs_9546CreateCode_9546GDimg4Objects1ObjectsGDgdjs_9546CreateCode_9546GDSaveObjects1ObjectsGDgdjs_9546CreateCode_9546GDPublishObjects1ObjectsGDgdjs_9546CreateCode_9546GDnomeObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2nameObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDNewSpriteObjects1ObjectsGDgdjs_9546CreateCode_9546GDSalvarObjects1ObjectsGDgdjs_9546CreateCode_9546GDBackgroundObjects1ObjectsGDgdjs_9546CreateCode_9546GDPrincipal2Objects1ObjectsGDgdjs_9546CreateCode_9546GDFun_9595952314oesObjects1ObjectsGDgdjs_9546CreateCode_9546GDbar_95959595functionObjects1Objects = Hashtable.newFrom({"Texto1": gdjs.CreateCode.GDTexto1Objects1, "Texto3": gdjs.CreateCode.GDTexto3Objects1, "link1pag": gdjs.CreateCode.GDlink1pagObjects1, "Link1Name": gdjs.CreateCode.GDLink1NameObjects1, "img3": gdjs.CreateCode.GDimg3Objects1, "img4": gdjs.CreateCode.GDimg4Objects1, "Save": gdjs.CreateCode.GDSaveObjects1, "Publish": gdjs.CreateCode.GDPublishObjects1, "nome": gdjs.CreateCode.GDnomeObjects1, "link2name": gdjs.CreateCode.GDlink2nameObjects1, "link2pag": gdjs.CreateCode.GDlink2pagObjects1, "NewSprite": gdjs.CreateCode.GDNewSpriteObjects1, "Salvar": gdjs.CreateCode.GDSalvarObjects1, "Background": gdjs.CreateCode.GDBackgroundObjects1, "Principal2": gdjs.CreateCode.GDPrincipal2Objects1, "Funç4oes": gdjs.CreateCode.GDFun_952314oesObjects1, "bar_function": gdjs.CreateCode.GDbar_9595functionObjects1});
gdjs.CreateCode.userFunc0xcf12b8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Simula um clique no elemento input do tipo "file"
document.getElementById('fileInput2').click();
};
gdjs.CreateCode.eventsList0 = function(runtimeScene) {

{


gdjs.CreateCode.userFunc0xcf12b8(runtimeScene);

}


};gdjs.CreateCode.eventsList1 = function(runtimeScene) {

{


gdjs.CreateCode.userFunc0xa3c090(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreateCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Funç4oes"), gdjs.CreateCode.GDFun_952314oesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Link1Name"), gdjs.CreateCode.GDLink1NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.CreateCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Principal2"), gdjs.CreateCode.GDPrincipal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Publish"), gdjs.CreateCode.GDPublishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Salvar"), gdjs.CreateCode.GDSalvarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Save"), gdjs.CreateCode.GDSaveObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto1"), gdjs.CreateCode.GDTexto1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Texto3"), gdjs.CreateCode.GDTexto3Objects1);
gdjs.copyArray(runtimeScene.getObjects("bar_function"), gdjs.CreateCode.GDbar_9595functionObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.CreateCode.GDimg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("img3"), gdjs.CreateCode.GDimg3Objects1);
gdjs.copyArray(runtimeScene.getObjects("img4"), gdjs.CreateCode.GDimg4Objects1);
gdjs.copyArray(runtimeScene.getObjects("link1pag"), gdjs.CreateCode.GDlink1pagObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2name"), gdjs.CreateCode.GDlink2nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2pag"), gdjs.CreateCode.GDlink2pagObjects1);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CreateCode.GDnomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDimg2Objects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDimg2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDimg2Objects1[k] = gdjs.CreateCode.GDimg2Objects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDimg2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "conf"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDimg2Objects1.length;i<l;++i) {
    if ( !(gdjs.CreateCode.GDimg2Objects1[i].getBehavior("Arrastável").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDimg2Objects1[k] = gdjs.CreateCode.GDimg2Objects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDimg2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDTexto1Objects1ObjectsGDgdjs_9546CreateCode_9546GDTexto3Objects1ObjectsGDgdjs_9546CreateCode_9546GDlink1pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDLink1NameObjects1ObjectsGDgdjs_9546CreateCode_9546GDimg3Objects1ObjectsGDgdjs_9546CreateCode_9546GDimg4Objects1ObjectsGDgdjs_9546CreateCode_9546GDSaveObjects1ObjectsGDgdjs_9546CreateCode_9546GDPublishObjects1ObjectsGDgdjs_9546CreateCode_9546GDnomeObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2nameObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDNewSpriteObjects1ObjectsGDgdjs_9546CreateCode_9546GDSalvarObjects1ObjectsGDgdjs_9546CreateCode_9546GDBackgroundObjects1ObjectsGDgdjs_9546CreateCode_9546GDPrincipal2Objects1ObjectsGDgdjs_9546CreateCode_9546GDFun_9595952314oesObjects1ObjectsGDgdjs_9546CreateCode_9546GDbar_95959595functionObjects1Objects, runtimeScene, true, true);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CreateCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.CreateCode.userFunc0xcad310 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Crie o elemento input do tipo "file"
let input = document.createElement('input');
input.type = 'file';
input.id = 'fileInput'; // Defina um ID para facilitar o acesso
input.accept = 'image/*'; // Aceita apenas arquivos de imagem
input.style.display = 'none'; // Oculta o elemento

// Adicione o elemento ao corpo do documento
document.body.appendChild(input);

// Adicione um listener para quando um arquivo for selecionado
input.addEventListener('change', function(e) {
  const file = e.target.files[0];

  if (file) {
    // Extrai o nome do arquivo
    const fileName = file.name;

    const reader = new FileReader();

    reader.onload = function(readerEvent) {
      const dataURL = readerEvent.target.result;
      // dataURL contém a imagem como uma string base64
      // Use uma variável de cena para passar o dataURL para o GDevelop
      runtimeScene.getVariables().get("imageDataURL").setString(dataURL);
      runtimeScene.getVariables().get("NomeArquive").setString(fileName);
    }
    reader.readAsDataURL(file);
  }
});
};
gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDTexto1Objects1ObjectsGDgdjs_9546CreateCode_9546GDTexto3Objects1ObjectsGDgdjs_9546CreateCode_9546GDlink1pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDLink1NameObjects1ObjectsGDgdjs_9546CreateCode_9546GDimg3Objects1ObjectsGDgdjs_9546CreateCode_9546GDimg4Objects1ObjectsGDgdjs_9546CreateCode_9546GDSaveObjects1ObjectsGDgdjs_9546CreateCode_9546GDPublishObjects1ObjectsGDgdjs_9546CreateCode_9546GDnomeObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2nameObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDNewSpriteObjects1ObjectsGDgdjs_9546CreateCode_9546GDSalvarObjects1ObjectsGDgdjs_9546CreateCode_9546GDBackgroundObjects1ObjectsGDgdjs_9546CreateCode_9546GDPrincipal2Objects1ObjectsGDgdjs_9546CreateCode_9546GDFun_9595952314oesObjects1ObjectsGDgdjs_9546CreateCode_9546GDbar_95959595functionObjects1Objects = Hashtable.newFrom({"Texto1": gdjs.CreateCode.GDTexto1Objects1, "Texto3": gdjs.CreateCode.GDTexto3Objects1, "link1pag": gdjs.CreateCode.GDlink1pagObjects1, "Link1Name": gdjs.CreateCode.GDLink1NameObjects1, "img3": gdjs.CreateCode.GDimg3Objects1, "img4": gdjs.CreateCode.GDimg4Objects1, "Save": gdjs.CreateCode.GDSaveObjects1, "Publish": gdjs.CreateCode.GDPublishObjects1, "nome": gdjs.CreateCode.GDnomeObjects1, "link2name": gdjs.CreateCode.GDlink2nameObjects1, "link2pag": gdjs.CreateCode.GDlink2pagObjects1, "NewSprite": gdjs.CreateCode.GDNewSpriteObjects1, "Salvar": gdjs.CreateCode.GDSalvarObjects1, "Background": gdjs.CreateCode.GDBackgroundObjects1, "Principal2": gdjs.CreateCode.GDPrincipal2Objects1, "Funç4oes": gdjs.CreateCode.GDFun_952314oesObjects1, "bar_function": gdjs.CreateCode.GDbar_9595functionObjects1});
gdjs.CreateCode.userFunc0xcae0f0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Simula um clique no elemento input do tipo "file"
document.getElementById('fileInput').click();
};
gdjs.CreateCode.eventsList2 = function(runtimeScene) {

{


gdjs.CreateCode.userFunc0xcae0f0(runtimeScene);

}


};gdjs.CreateCode.eventsList3 = function(runtimeScene) {

{


gdjs.CreateCode.userFunc0xcad310(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreateCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Funç4oes"), gdjs.CreateCode.GDFun_952314oesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Link1Name"), gdjs.CreateCode.GDLink1NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.CreateCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Principal2"), gdjs.CreateCode.GDPrincipal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Publish"), gdjs.CreateCode.GDPublishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Salvar"), gdjs.CreateCode.GDSalvarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Save"), gdjs.CreateCode.GDSaveObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto1"), gdjs.CreateCode.GDTexto1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Texto3"), gdjs.CreateCode.GDTexto3Objects1);
gdjs.copyArray(runtimeScene.getObjects("bar_function"), gdjs.CreateCode.GDbar_9595functionObjects1);
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.CreateCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img3"), gdjs.CreateCode.GDimg3Objects1);
gdjs.copyArray(runtimeScene.getObjects("img4"), gdjs.CreateCode.GDimg4Objects1);
gdjs.copyArray(runtimeScene.getObjects("link1pag"), gdjs.CreateCode.GDlink1pagObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2name"), gdjs.CreateCode.GDlink2nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2pag"), gdjs.CreateCode.GDlink2pagObjects1);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CreateCode.GDnomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDimgObjects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDimgObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDimgObjects1[k] = gdjs.CreateCode.GDimgObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDimgObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "conf"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDimgObjects1.length;i<l;++i) {
    if ( !(gdjs.CreateCode.GDimgObjects1[i].getBehavior("Arrastável").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDimgObjects1[k] = gdjs.CreateCode.GDimgObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDimgObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDTexto1Objects1ObjectsGDgdjs_9546CreateCode_9546GDTexto3Objects1ObjectsGDgdjs_9546CreateCode_9546GDlink1pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDLink1NameObjects1ObjectsGDgdjs_9546CreateCode_9546GDimg3Objects1ObjectsGDgdjs_9546CreateCode_9546GDimg4Objects1ObjectsGDgdjs_9546CreateCode_9546GDSaveObjects1ObjectsGDgdjs_9546CreateCode_9546GDPublishObjects1ObjectsGDgdjs_9546CreateCode_9546GDnomeObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2nameObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDNewSpriteObjects1ObjectsGDgdjs_9546CreateCode_9546GDSalvarObjects1ObjectsGDgdjs_9546CreateCode_9546GDBackgroundObjects1ObjectsGDgdjs_9546CreateCode_9546GDPrincipal2Objects1ObjectsGDgdjs_9546CreateCode_9546GDFun_9595952314oesObjects1ObjectsGDgdjs_9546CreateCode_9546GDbar_95959595functionObjects1Objects, runtimeScene, true, true);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CreateCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimg2Objects1Objects = Hashtable.newFrom({"img2": gdjs.CreateCode.GDimg2Objects1});
gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimgObjects1Objects = Hashtable.newFrom({"img": gdjs.CreateCode.GDimgObjects1});
gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimgObjects1Objects = Hashtable.newFrom({"img": gdjs.CreateCode.GDimgObjects1});
gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimg2Objects1Objects = Hashtable.newFrom({"img2": gdjs.CreateCode.GDimg2Objects1});
gdjs.CreateCode.asyncCallback17216188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreateCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreateCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Link1Name"), gdjs.CreateCode.GDLink1NameObjects2);
gdjs.copyArray(runtimeScene.getObjects("Texto1"), gdjs.CreateCode.GDTexto1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Texto3"), gdjs.CreateCode.GDTexto3Objects2);
gdjs.copyArray(runtimeScene.getObjects("id_abrir"), gdjs.CreateCode.GDid_9595abrirObjects2);
gdjs.copyArray(runtimeScene.getObjects("id_img1"), gdjs.CreateCode.GDid_9595img1Objects2);
gdjs.copyArray(runtimeScene.getObjects("id_img2"), gdjs.CreateCode.GDid_9595img2Objects2);
gdjs.copyArray(runtimeScene.getObjects("link1pag"), gdjs.CreateCode.GDlink1pagObjects2);
gdjs.copyArray(runtimeScene.getObjects("link2name"), gdjs.CreateCode.GDlink2nameObjects2);
gdjs.copyArray(runtimeScene.getObjects("link2pag"), gdjs.CreateCode.GDlink2pagObjects2);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CreateCode.GDnomeObjects2);
{for(var i = 0, len = gdjs.CreateCode.GDTexto1Objects2.length ;i < len;++i) {
    gdjs.CreateCode.GDTexto1Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDnomeObjects2.length ;i < len;++i) {
    gdjs.CreateCode.GDnomeObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDTexto3Objects2.length ;i < len;++i) {
    gdjs.CreateCode.GDTexto3Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDlink2nameObjects2.length ;i < len;++i) {
    gdjs.CreateCode.GDlink2nameObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDLink1NameObjects2.length ;i < len;++i) {
    gdjs.CreateCode.GDLink1NameObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(10).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDlink2pagObjects2.length ;i < len;++i) {
    gdjs.CreateCode.GDlink2pagObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDlink1pagObjects2.length ;i < len;++i) {
    gdjs.CreateCode.GDlink1pagObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(9).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.CreateCode.GDBackgroundObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(13).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDid_9595img1Objects2.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595img1Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(19).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDid_9595img2Objects2.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595img2Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(21).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDid_9595abrirObjects2.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595abrirObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(20).getAsString());
}
}gdjs.CreateCode.localVariables.length = 0;
}
gdjs.CreateCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreateCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CreateCode.asyncCallback17216188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDTexto1Objects1ObjectsGDgdjs_9546CreateCode_9546GDTexto3Objects1ObjectsGDgdjs_9546CreateCode_9546GDlink1pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDLink1NameObjects1ObjectsGDgdjs_9546CreateCode_9546GDimg3Objects1ObjectsGDgdjs_9546CreateCode_9546GDimg4Objects1ObjectsGDgdjs_9546CreateCode_9546GDSaveObjects1ObjectsGDgdjs_9546CreateCode_9546GDPublishObjects1ObjectsGDgdjs_9546CreateCode_9546GDnomeObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2nameObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDNewSpriteObjects1ObjectsGDgdjs_9546CreateCode_9546GDSalvarObjects1ObjectsGDgdjs_9546CreateCode_9546GDBackgroundObjects1ObjectsGDgdjs_9546CreateCode_9546GDPrincipal2Objects1ObjectsGDgdjs_9546CreateCode_9546GDFun_9595952314oesObjects1ObjectsGDgdjs_9546CreateCode_9546GDbar_95959595functionObjects1Objects = Hashtable.newFrom({"Texto1": gdjs.CreateCode.GDTexto1Objects1, "Texto3": gdjs.CreateCode.GDTexto3Objects1, "link1pag": gdjs.CreateCode.GDlink1pagObjects1, "Link1Name": gdjs.CreateCode.GDLink1NameObjects1, "img3": gdjs.CreateCode.GDimg3Objects1, "img4": gdjs.CreateCode.GDimg4Objects1, "Save": gdjs.CreateCode.GDSaveObjects1, "Publish": gdjs.CreateCode.GDPublishObjects1, "nome": gdjs.CreateCode.GDnomeObjects1, "link2name": gdjs.CreateCode.GDlink2nameObjects1, "link2pag": gdjs.CreateCode.GDlink2pagObjects1, "NewSprite": gdjs.CreateCode.GDNewSpriteObjects1, "Salvar": gdjs.CreateCode.GDSalvarObjects1, "Background": gdjs.CreateCode.GDBackgroundObjects1, "Principal2": gdjs.CreateCode.GDPrincipal2Objects1, "Funç4oes": gdjs.CreateCode.GDFun_952314oesObjects1, "bar_function": gdjs.CreateCode.GDbar_9595functionObjects1});
gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimgObjects1ObjectsGDgdjs_9546CreateCode_9546GDimg2Objects1Objects = Hashtable.newFrom({"img": gdjs.CreateCode.GDimgObjects1, "img2": gdjs.CreateCode.GDimg2Objects1});
gdjs.CreateCode.eventsList5 = function(runtimeScene) {

{


gdjs.CreateCode.eventsList1(runtimeScene);
}


{


gdjs.CreateCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Link1Name"), gdjs.CreateCode.GDLink1NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto"), gdjs.CreateCode.GDTextoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto1"), gdjs.CreateCode.GDTexto1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Texto2"), gdjs.CreateCode.GDTexto2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Texto3"), gdjs.CreateCode.GDTexto3Objects1);
gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.CreateCode.GDlinkObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2"), gdjs.CreateCode.GDlink2Objects1);
gdjs.copyArray(runtimeScene.getObjects("link2name"), gdjs.CreateCode.GDlink2nameObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDTextoObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDTextoObjects1[i].getBehavior("Text").setText((( gdjs.CreateCode.GDTexto1Objects1.length === 0 ) ? "" :gdjs.CreateCode.GDTexto1Objects1[0].getBehavior("Text").getText()));
}
}{for(var i = 0, len = gdjs.CreateCode.GDTexto2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDTexto2Objects1[i].getBehavior("Text").setText((( gdjs.CreateCode.GDTexto3Objects1.length === 0 ) ? "" :gdjs.CreateCode.GDTexto3Objects1[0].getBehavior("Text").getText()));
}
}{for(var i = 0, len = gdjs.CreateCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDlinkObjects1[i].getBehavior("Text").setText((( gdjs.CreateCode.GDLink1NameObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDLink1NameObjects1[0].getBehavior("Text").getText()));
}
}{for(var i = 0, len = gdjs.CreateCode.GDlink2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDlink2Objects1[i].getBehavior("Text").setText((( gdjs.CreateCode.GDlink2nameObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink2nameObjects1[0].getBehavior("Text").getText()));
}
}{gdjs.evtTools.camera.setLayerDefaultZOrder(runtimeScene, "", -(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "ImageRepeat", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.CreateCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.CreateCode.GDimg2Objects1);
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimg2Objects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimgObjects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Save"), gdjs.CreateCode.GDSaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDSaveObjects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDSaveObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDSaveObjects1[k] = gdjs.CreateCode.GDSaveObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDSaveObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Link1Name"), gdjs.CreateCode.GDLink1NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto"), gdjs.CreateCode.GDTextoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto2"), gdjs.CreateCode.GDTexto2Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_abrir"), gdjs.CreateCode.GDid_9595abrirObjects1);
gdjs.copyArray(runtimeScene.getObjects("id_img1"), gdjs.CreateCode.GDid_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_img2"), gdjs.CreateCode.GDid_9595img2Objects1);
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.CreateCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.CreateCode.GDimg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("link1pag"), gdjs.CreateCode.GDlink1pagObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2name"), gdjs.CreateCode.GDlink2nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2pag"), gdjs.CreateCode.GDlink2pagObjects1);
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", (( gdjs.CreateCode.GDTextoObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDTextoObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", (( gdjs.CreateCode.GDTexto2Objects1.length === 0 ) ? "" :gdjs.CreateCode.GDTexto2Objects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", (( gdjs.CreateCode.GDlink2pagObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink2pagObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", (( gdjs.CreateCode.GDlink1pagObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink1pagObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", (( gdjs.CreateCode.GDLink1NameObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDLink1NameObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", (( gdjs.CreateCode.GDlink2nameObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink2nameObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1X", gdjs.evtTools.common.toString((( gdjs.CreateCode.GDimgObjects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimgObjects1[0].getPointX(""))), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1Y", gdjs.evtTools.common.toString((( gdjs.CreateCode.GDimgObjects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimgObjects1[0].getPointY(""))), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2Y", gdjs.evtTools.common.toString((( gdjs.CreateCode.GDimg2Objects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimg2Objects1[0].getPointY(""))), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2X", gdjs.evtTools.common.toString((( gdjs.CreateCode.GDimg2Objects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimg2Objects1[0].getPointX(""))), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", (( gdjs.CreateCode.GDid_9595img1Objects1.length === 0 ) ? "" :gdjs.CreateCode.GDid_9595img1Objects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg2", (( gdjs.CreateCode.GDid_9595img2Objects1.length === 0 ) ? "" :gdjs.CreateCode.GDid_9595img2Objects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunQuandoAbriQui", (( gdjs.CreateCode.GDid_9595abrirObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDid_9595abrirObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Publish"), gdjs.CreateCode.GDPublishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDPublishObjects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDPublishObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDPublishObjects1[k] = gdjs.CreateCode.GDPublishObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDPublishObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Link1Name"), gdjs.CreateCode.GDLink1NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto"), gdjs.CreateCode.GDTextoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto2"), gdjs.CreateCode.GDTexto2Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_abrir"), gdjs.CreateCode.GDid_9595abrirObjects1);
gdjs.copyArray(runtimeScene.getObjects("id_img1"), gdjs.CreateCode.GDid_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_img2"), gdjs.CreateCode.GDid_9595img2Objects1);
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.CreateCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.CreateCode.GDimg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("link1pag"), gdjs.CreateCode.GDlink1pagObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2name"), gdjs.CreateCode.GDlink2nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2pag"), gdjs.CreateCode.GDlink2pagObjects1);
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", (( gdjs.CreateCode.GDTextoObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDTextoObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", (( gdjs.CreateCode.GDTexto2Objects1.length === 0 ) ? "" :gdjs.CreateCode.GDTexto2Objects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", (( gdjs.CreateCode.GDlink2pagObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink2pagObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", (( gdjs.CreateCode.GDlink1pagObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink1pagObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", (( gdjs.CreateCode.GDLink1NameObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDLink1NameObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", (( gdjs.CreateCode.GDlink2nameObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink2nameObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1X", gdjs.evtTools.common.toString((( gdjs.CreateCode.GDimgObjects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimgObjects1[0].getPointX(""))), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1Y", gdjs.evtTools.common.toString((( gdjs.CreateCode.GDimgObjects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimgObjects1[0].getPointY(""))), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2Y", gdjs.evtTools.common.toString((( gdjs.CreateCode.GDimg2Objects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimg2Objects1[0].getPointY(""))), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2X", gdjs.evtTools.common.toString((( gdjs.CreateCode.GDimg2Objects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimg2Objects1[0].getPointX(""))), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", (( gdjs.CreateCode.GDid_9595img1Objects1.length === 0 ) ? "" :gdjs.CreateCode.GDid_9595img1Objects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg2", (( gdjs.CreateCode.GDid_9595img2Objects1.length === 0 ) ? "" :gdjs.CreateCode.GDid_9595img2Objects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunQuandoAbriQui", (( gdjs.CreateCode.GDid_9595abrirObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDid_9595abrirObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "tela de quiosque");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Funç4oes"), gdjs.CreateCode.GDFun_952314oesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Principal2"), gdjs.CreateCode.GDPrincipal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("coNF2"), gdjs.CreateCode.GDcoNF2Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_abrir"), gdjs.CreateCode.GDid_9595abrirObjects1);
gdjs.copyArray(runtimeScene.getObjects("id_img1"), gdjs.CreateCode.GDid_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_img2"), gdjs.CreateCode.GDid_9595img2Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_link1"), gdjs.CreateCode.GDid_9595link1Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_link2"), gdjs.CreateCode.GDid_9595link2Objects1);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CreateCode.GDnomeObjects1);
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Name", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.CreateCode.GDnomeObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDnomeObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.CreateCode.GDPrincipal2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDPrincipal2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.CreateCode.GDFun_952314oesObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDFun_952314oesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CreateCode.GDcoNF2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDcoNF2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.CreateCode.GDid_9595img1Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595img1Objects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595link1Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595link1Objects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595img2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595img2Objects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595link2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595link2Objects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595abrirObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595abrirObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.CreateCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.CreateCode.GDimg2Objects1);
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Name", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1X", runtimeScene.getScene().getVariables().getFromIndex(14), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1Y", runtimeScene.getScene().getVariables().getFromIndex(15), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2Y", runtimeScene.getScene().getVariables().getFromIndex(16), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2X", runtimeScene.getScene().getVariables().getFromIndex(17), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(10), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(11), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(13), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", runtimeScene.getScene().getVariables().getFromIndex(19), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg2", runtimeScene.getScene().getVariables().getFromIndex(21), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunQuandoAbriQui", runtimeScene.getScene().getVariables().getFromIndex(20), gdjs.VariablesContainer.badVariable);
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5).getAsString(), gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimgObjects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.CreateCode.GDimgObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDimgObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}{for(var i = 0, len = gdjs.CreateCode.GDimgObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDimgObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber());
}
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(12).getAsString(), gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimg2Objects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.CreateCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("deputation"), gdjs.CreateCode.GDdeputationObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDdeputationObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDdeputationObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.CreateCode.GDMouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouse2"), gdjs.CreateCode.GDMouse2Objects1);
gdjs.copyArray(runtimeScene.getObjects("bar"), gdjs.CreateCode.GDbarObjects1);
gdjs.copyArray(runtimeScene.getObjects("bar_function"), gdjs.CreateCode.GDbar_9595functionObjects1);
gdjs.copyArray(runtimeScene.getObjects("coNF"), gdjs.CreateCode.GDcoNFObjects1);
gdjs.copyArray(runtimeScene.getObjects("deputation"), gdjs.CreateCode.GDdeputationObjects1);
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.CreateCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.CreateCode.GDimg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CreateCode.GDnomeObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDdeputationObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDdeputationObjects1[i].getBehavior("Text").setText("Img1Url: " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + "\nImg2Url: " + runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}{for(var i = 0, len = gdjs.CreateCode.GDcoNFObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDcoNFObjects1[i].getBehavior("Text").setText("Configurações de " + (( gdjs.CreateCode.GDnomeObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDnomeObjects1[0].getBehavior("Text").getText()));
}
}{for(var i = 0, len = gdjs.CreateCode.GDbarObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDbarObjects1[i].setPosition((( gdjs.CreateCode.GDbar_9595functionObjects1.length === 0 ) ? 0 :gdjs.CreateCode.GDbar_9595functionObjects1[0].getPointX("Txt")),(( gdjs.CreateCode.GDbar_9595functionObjects1.length === 0 ) ? 0 :gdjs.CreateCode.GDbar_9595functionObjects1[0].getPointY("Txt")));
}
}{for(var i = 0, len = gdjs.CreateCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDMouseObjects1[i].setPosition((( gdjs.CreateCode.GDimgObjects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimgObjects1[0].getPointX("PontoMouse")),(( gdjs.CreateCode.GDimgObjects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimgObjects1[0].getPointY("PontoMouse")));
}
}{for(var i = 0, len = gdjs.CreateCode.GDMouse2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDMouse2Objects1[i].setPosition((( gdjs.CreateCode.GDimg2Objects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimg2Objects1[0].getPointX("PontoMouse")),(( gdjs.CreateCode.GDimg2Objects1.length === 0 ) ? 0 :gdjs.CreateCode.GDimg2Objects1[0].getPointY("PontoMouse")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icone_configuração"), gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects1[k] = gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "conf");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "creation");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Salvar"), gdjs.CreateCode.GDSalvarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDSalvarObjects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDSalvarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDSalvarObjects1[k] = gdjs.CreateCode.GDSalvarObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDSalvarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreateCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CreateCode.GDnomeObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "conf");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "creation");
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", (( gdjs.CreateCode.GDBackgroundObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDBackgroundObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Name", (( gdjs.CreateCode.GDnomeObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDnomeObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, (( gdjs.CreateCode.GDBackgroundObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDBackgroundObjects1[0].getBehavior("Text").getText()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Funç4oes"), gdjs.CreateCode.GDFun_952314oesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDFun_952314oesObjects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDFun_952314oesObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDFun_952314oesObjects1[k] = gdjs.CreateCode.GDFun_952314oesObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDFun_952314oesObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreateCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("coNF"), gdjs.CreateCode.GDcoNFObjects1);
gdjs.copyArray(runtimeScene.getObjects("id_abrir"), gdjs.CreateCode.GDid_9595abrirObjects1);
gdjs.copyArray(runtimeScene.getObjects("id_img1"), gdjs.CreateCode.GDid_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_img2"), gdjs.CreateCode.GDid_9595img2Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_link1"), gdjs.CreateCode.GDid_9595link1Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_link2"), gdjs.CreateCode.GDid_9595link2Objects1);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CreateCode.GDnomeObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDBackgroundObjects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDcoNFObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDcoNFObjects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDnomeObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDnomeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CreateCode.GDid_9595img1Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595img1Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595link1Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595link1Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595img2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595img2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595link2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595link2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595abrirObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595abrirObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Principal2"), gdjs.CreateCode.GDPrincipal2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDPrincipal2Objects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDPrincipal2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDPrincipal2Objects1[k] = gdjs.CreateCode.GDPrincipal2Objects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDPrincipal2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreateCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("coNF"), gdjs.CreateCode.GDcoNFObjects1);
gdjs.copyArray(runtimeScene.getObjects("id_abrir"), gdjs.CreateCode.GDid_9595abrirObjects1);
gdjs.copyArray(runtimeScene.getObjects("id_img1"), gdjs.CreateCode.GDid_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_img2"), gdjs.CreateCode.GDid_9595img2Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_link1"), gdjs.CreateCode.GDid_9595link1Objects1);
gdjs.copyArray(runtimeScene.getObjects("id_link2"), gdjs.CreateCode.GDid_9595link2Objects1);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CreateCode.GDnomeObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDid_9595img1Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595img1Objects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595link1Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595link1Objects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595img2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595img2Objects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595link2Objects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595link2Objects1[i].hide();
}
for(var i = 0, len = gdjs.CreateCode.GDid_9595abrirObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDid_9595abrirObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CreateCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDBackgroundObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.CreateCode.GDcoNFObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDcoNFObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.CreateCode.GDnomeObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDnomeObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bar_function"), gdjs.CreateCode.GDbar_9595functionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDbar_9595functionObjects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDbar_9595functionObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDbar_9595functionObjects1[k] = gdjs.CreateCode.GDbar_9595functionObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDbar_9595functionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("border"), gdjs.CreateCode.GDborderObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDborderObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDborderObjects1[i].setX(0);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "creation");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "FuncoesScreen");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "CenaRepeat", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreateCode.GDBackgroundObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, (( gdjs.CreateCode.GDBackgroundObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDBackgroundObjects1[0].getBehavior("Text").getText()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bar_function"), gdjs.CreateCode.GDbar_9595functionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDbar_9595functionObjects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDbar_9595functionObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDbar_9595functionObjects1[k] = gdjs.CreateCode.GDbar_9595functionObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDbar_9595functionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Link1Name"), gdjs.CreateCode.GDLink1NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto"), gdjs.CreateCode.GDTextoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto2"), gdjs.CreateCode.GDTexto2Objects1);
gdjs.copyArray(runtimeScene.getObjects("link1pag"), gdjs.CreateCode.GDlink1pagObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2name"), gdjs.CreateCode.GDlink2nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2pag"), gdjs.CreateCode.GDlink2pagObjects1);
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", (( gdjs.CreateCode.GDTextoObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDTextoObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", (( gdjs.CreateCode.GDTexto2Objects1.length === 0 ) ? "" :gdjs.CreateCode.GDTexto2Objects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", (( gdjs.CreateCode.GDlink2pagObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink2pagObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", (( gdjs.CreateCode.GDlink1pagObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink1pagObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", (( gdjs.CreateCode.GDLink1NameObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDLink1NameObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", (( gdjs.CreateCode.GDlink2nameObjects1.length === 0 ) ? "" :gdjs.CreateCode.GDlink2nameObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Funções");
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreateCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Funç4oes"), gdjs.CreateCode.GDFun_952314oesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Link1Name"), gdjs.CreateCode.GDLink1NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.CreateCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Principal2"), gdjs.CreateCode.GDPrincipal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Publish"), gdjs.CreateCode.GDPublishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Salvar"), gdjs.CreateCode.GDSalvarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Save"), gdjs.CreateCode.GDSaveObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto1"), gdjs.CreateCode.GDTexto1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Texto3"), gdjs.CreateCode.GDTexto3Objects1);
gdjs.copyArray(runtimeScene.getObjects("bar_function"), gdjs.CreateCode.GDbar_9595functionObjects1);
gdjs.copyArray(runtimeScene.getObjects("img3"), gdjs.CreateCode.GDimg3Objects1);
gdjs.copyArray(runtimeScene.getObjects("img4"), gdjs.CreateCode.GDimg4Objects1);
gdjs.copyArray(runtimeScene.getObjects("link1pag"), gdjs.CreateCode.GDlink1pagObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2name"), gdjs.CreateCode.GDlink2nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2pag"), gdjs.CreateCode.GDlink2pagObjects1);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CreateCode.GDnomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDTexto1Objects1ObjectsGDgdjs_9546CreateCode_9546GDTexto3Objects1ObjectsGDgdjs_9546CreateCode_9546GDlink1pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDLink1NameObjects1ObjectsGDgdjs_9546CreateCode_9546GDimg3Objects1ObjectsGDgdjs_9546CreateCode_9546GDimg4Objects1ObjectsGDgdjs_9546CreateCode_9546GDSaveObjects1ObjectsGDgdjs_9546CreateCode_9546GDPublishObjects1ObjectsGDgdjs_9546CreateCode_9546GDnomeObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2nameObjects1ObjectsGDgdjs_9546CreateCode_9546GDlink2pagObjects1ObjectsGDgdjs_9546CreateCode_9546GDNewSpriteObjects1ObjectsGDgdjs_9546CreateCode_9546GDSalvarObjects1ObjectsGDgdjs_9546CreateCode_9546GDBackgroundObjects1ObjectsGDgdjs_9546CreateCode_9546GDPrincipal2Objects1ObjectsGDgdjs_9546CreateCode_9546GDFun_9595952314oesObjects1ObjectsGDgdjs_9546CreateCode_9546GDbar_95959595functionObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.CreateCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.CreateCode.GDimg2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDimgObjects1ObjectsGDgdjs_9546CreateCode_9546GDimg2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "grabbing", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.CreateCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.CreateCode.GDimg2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDimg2Objects1.length;i<l;++i) {
    if ( !(gdjs.CreateCode.GDimg2Objects1[i].getBehavior("Arrastável").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDimg2Objects1[k] = gdjs.CreateCode.GDimg2Objects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDimg2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDimgObjects1.length;i<l;++i) {
    if ( !(gdjs.CreateCode.GDimgObjects1[i].getBehavior("Arrastável").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDimgObjects1[k] = gdjs.CreateCode.GDimgObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDimgObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "both", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "creation", "both", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dowload"), gdjs.CreateCode.GDDowloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreateCode.GDDowloadObjects1.length;i<l;++i) {
    if ( gdjs.CreateCode.GDDowloadObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreateCode.GDDowloadObjects1[k] = gdjs.CreateCode.GDDowloadObjects1[i];
        ++k;
    }
}
gdjs.CreateCode.GDDowloadObjects1.length = k;
if (isConditionTrue_0) {
}

}


};

gdjs.CreateCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreateCode.GDTextoObjects1.length = 0;
gdjs.CreateCode.GDTextoObjects2.length = 0;
gdjs.CreateCode.GDimgObjects1.length = 0;
gdjs.CreateCode.GDimgObjects2.length = 0;
gdjs.CreateCode.GDlinkObjects1.length = 0;
gdjs.CreateCode.GDlinkObjects2.length = 0;
gdjs.CreateCode.GDTexto2Objects1.length = 0;
gdjs.CreateCode.GDTexto2Objects2.length = 0;
gdjs.CreateCode.GDTexto1Objects1.length = 0;
gdjs.CreateCode.GDTexto1Objects2.length = 0;
gdjs.CreateCode.GDTexto3Objects1.length = 0;
gdjs.CreateCode.GDTexto3Objects2.length = 0;
gdjs.CreateCode.GDlink1pagObjects1.length = 0;
gdjs.CreateCode.GDlink1pagObjects2.length = 0;
gdjs.CreateCode.GDLink1NameObjects1.length = 0;
gdjs.CreateCode.GDLink1NameObjects2.length = 0;
gdjs.CreateCode.GDimg3Objects1.length = 0;
gdjs.CreateCode.GDimg3Objects2.length = 0;
gdjs.CreateCode.GDimg4Objects1.length = 0;
gdjs.CreateCode.GDimg4Objects2.length = 0;
gdjs.CreateCode.GDNewSpriteObjects1.length = 0;
gdjs.CreateCode.GDNewSpriteObjects2.length = 0;
gdjs.CreateCode.GDSaveObjects1.length = 0;
gdjs.CreateCode.GDSaveObjects2.length = 0;
gdjs.CreateCode.GDPublishObjects1.length = 0;
gdjs.CreateCode.GDPublishObjects2.length = 0;
gdjs.CreateCode.GDnomeObjects1.length = 0;
gdjs.CreateCode.GDnomeObjects2.length = 0;
gdjs.CreateCode.GDcoNFObjects1.length = 0;
gdjs.CreateCode.GDcoNFObjects2.length = 0;
gdjs.CreateCode.GDlink2Objects1.length = 0;
gdjs.CreateCode.GDlink2Objects2.length = 0;
gdjs.CreateCode.GDlink2nameObjects1.length = 0;
gdjs.CreateCode.GDlink2nameObjects2.length = 0;
gdjs.CreateCode.GDlink2pagObjects1.length = 0;
gdjs.CreateCode.GDlink2pagObjects2.length = 0;
gdjs.CreateCode.GDdeputationObjects1.length = 0;
gdjs.CreateCode.GDdeputationObjects2.length = 0;
gdjs.CreateCode.GDimg2Objects1.length = 0;
gdjs.CreateCode.GDimg2Objects2.length = 0;
gdjs.CreateCode.GDBackgroundObjects1.length = 0;
gdjs.CreateCode.GDBackgroundObjects2.length = 0;
gdjs.CreateCode.GDSalvarObjects1.length = 0;
gdjs.CreateCode.GDSalvarObjects2.length = 0;
gdjs.CreateCode.GDNewTextObjects1.length = 0;
gdjs.CreateCode.GDNewTextObjects2.length = 0;
gdjs.CreateCode.GDPrincipal2Objects1.length = 0;
gdjs.CreateCode.GDPrincipal2Objects2.length = 0;
gdjs.CreateCode.GDFun_952314oesObjects1.length = 0;
gdjs.CreateCode.GDFun_952314oesObjects2.length = 0;
gdjs.CreateCode.GDcoNF2Objects1.length = 0;
gdjs.CreateCode.GDcoNF2Objects2.length = 0;
gdjs.CreateCode.GDRedditLogoObjects1.length = 0;
gdjs.CreateCode.GDRedditLogoObjects2.length = 0;
gdjs.CreateCode.GDaaaObjects1.length = 0;
gdjs.CreateCode.GDaaaObjects2.length = 0;
gdjs.CreateCode.GDbar_9595functionObjects1.length = 0;
gdjs.CreateCode.GDbar_9595functionObjects2.length = 0;
gdjs.CreateCode.GDbarObjects1.length = 0;
gdjs.CreateCode.GDbarObjects2.length = 0;
gdjs.CreateCode.GDRedditLogo2Objects1.length = 0;
gdjs.CreateCode.GDRedditLogo2Objects2.length = 0;
gdjs.CreateCode.GDbutton_9595fun_95231_9595esObjects1.length = 0;
gdjs.CreateCode.GDbutton_9595fun_95231_9595esObjects2.length = 0;
gdjs.CreateCode.GDMouseObjects1.length = 0;
gdjs.CreateCode.GDMouseObjects2.length = 0;
gdjs.CreateCode.GDTextoFun_95231_95245esClickObjects1.length = 0;
gdjs.CreateCode.GDTextoFun_95231_95245esClickObjects2.length = 0;
gdjs.CreateCode.GDMouse2Objects1.length = 0;
gdjs.CreateCode.GDMouse2Objects2.length = 0;
gdjs.CreateCode.GDid_9595img1Objects1.length = 0;
gdjs.CreateCode.GDid_9595img1Objects2.length = 0;
gdjs.CreateCode.GDid_9595img2Objects1.length = 0;
gdjs.CreateCode.GDid_9595img2Objects2.length = 0;
gdjs.CreateCode.GDid_9595link1Objects1.length = 0;
gdjs.CreateCode.GDid_9595link1Objects2.length = 0;
gdjs.CreateCode.GDid_9595link2Objects1.length = 0;
gdjs.CreateCode.GDid_9595link2Objects2.length = 0;
gdjs.CreateCode.GDid_9595abrirObjects1.length = 0;
gdjs.CreateCode.GDid_9595abrirObjects2.length = 0;
gdjs.CreateCode.GDDowloadObjects1.length = 0;
gdjs.CreateCode.GDDowloadObjects2.length = 0;
gdjs.CreateCode.GDborder3Objects1.length = 0;
gdjs.CreateCode.GDborder3Objects2.length = 0;
gdjs.CreateCode.GDNewSprite2Objects1.length = 0;
gdjs.CreateCode.GDNewSprite2Objects2.length = 0;
gdjs.CreateCode.GDStObjects1.length = 0;
gdjs.CreateCode.GDStObjects2.length = 0;
gdjs.CreateCode.GDNewSprite3Objects1.length = 0;
gdjs.CreateCode.GDNewSprite3Objects2.length = 0;
gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.CreateCode.GDborderObjects1.length = 0;
gdjs.CreateCode.GDborderObjects2.length = 0;
gdjs.CreateCode.GDborder2Objects1.length = 0;
gdjs.CreateCode.GDborder2Objects2.length = 0;
gdjs.CreateCode.GDbuttonPlaceObjects1.length = 0;
gdjs.CreateCode.GDbuttonPlaceObjects2.length = 0;
gdjs.CreateCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.CreateCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.CreateCode.GDbuttonPlace2Objects1.length = 0;
gdjs.CreateCode.GDbuttonPlace2Objects2.length = 0;

gdjs.CreateCode.eventsList5(runtimeScene);
gdjs.CreateCode.GDTextoObjects1.length = 0;
gdjs.CreateCode.GDTextoObjects2.length = 0;
gdjs.CreateCode.GDimgObjects1.length = 0;
gdjs.CreateCode.GDimgObjects2.length = 0;
gdjs.CreateCode.GDlinkObjects1.length = 0;
gdjs.CreateCode.GDlinkObjects2.length = 0;
gdjs.CreateCode.GDTexto2Objects1.length = 0;
gdjs.CreateCode.GDTexto2Objects2.length = 0;
gdjs.CreateCode.GDTexto1Objects1.length = 0;
gdjs.CreateCode.GDTexto1Objects2.length = 0;
gdjs.CreateCode.GDTexto3Objects1.length = 0;
gdjs.CreateCode.GDTexto3Objects2.length = 0;
gdjs.CreateCode.GDlink1pagObjects1.length = 0;
gdjs.CreateCode.GDlink1pagObjects2.length = 0;
gdjs.CreateCode.GDLink1NameObjects1.length = 0;
gdjs.CreateCode.GDLink1NameObjects2.length = 0;
gdjs.CreateCode.GDimg3Objects1.length = 0;
gdjs.CreateCode.GDimg3Objects2.length = 0;
gdjs.CreateCode.GDimg4Objects1.length = 0;
gdjs.CreateCode.GDimg4Objects2.length = 0;
gdjs.CreateCode.GDNewSpriteObjects1.length = 0;
gdjs.CreateCode.GDNewSpriteObjects2.length = 0;
gdjs.CreateCode.GDSaveObjects1.length = 0;
gdjs.CreateCode.GDSaveObjects2.length = 0;
gdjs.CreateCode.GDPublishObjects1.length = 0;
gdjs.CreateCode.GDPublishObjects2.length = 0;
gdjs.CreateCode.GDnomeObjects1.length = 0;
gdjs.CreateCode.GDnomeObjects2.length = 0;
gdjs.CreateCode.GDcoNFObjects1.length = 0;
gdjs.CreateCode.GDcoNFObjects2.length = 0;
gdjs.CreateCode.GDlink2Objects1.length = 0;
gdjs.CreateCode.GDlink2Objects2.length = 0;
gdjs.CreateCode.GDlink2nameObjects1.length = 0;
gdjs.CreateCode.GDlink2nameObjects2.length = 0;
gdjs.CreateCode.GDlink2pagObjects1.length = 0;
gdjs.CreateCode.GDlink2pagObjects2.length = 0;
gdjs.CreateCode.GDdeputationObjects1.length = 0;
gdjs.CreateCode.GDdeputationObjects2.length = 0;
gdjs.CreateCode.GDimg2Objects1.length = 0;
gdjs.CreateCode.GDimg2Objects2.length = 0;
gdjs.CreateCode.GDBackgroundObjects1.length = 0;
gdjs.CreateCode.GDBackgroundObjects2.length = 0;
gdjs.CreateCode.GDSalvarObjects1.length = 0;
gdjs.CreateCode.GDSalvarObjects2.length = 0;
gdjs.CreateCode.GDNewTextObjects1.length = 0;
gdjs.CreateCode.GDNewTextObjects2.length = 0;
gdjs.CreateCode.GDPrincipal2Objects1.length = 0;
gdjs.CreateCode.GDPrincipal2Objects2.length = 0;
gdjs.CreateCode.GDFun_952314oesObjects1.length = 0;
gdjs.CreateCode.GDFun_952314oesObjects2.length = 0;
gdjs.CreateCode.GDcoNF2Objects1.length = 0;
gdjs.CreateCode.GDcoNF2Objects2.length = 0;
gdjs.CreateCode.GDRedditLogoObjects1.length = 0;
gdjs.CreateCode.GDRedditLogoObjects2.length = 0;
gdjs.CreateCode.GDaaaObjects1.length = 0;
gdjs.CreateCode.GDaaaObjects2.length = 0;
gdjs.CreateCode.GDbar_9595functionObjects1.length = 0;
gdjs.CreateCode.GDbar_9595functionObjects2.length = 0;
gdjs.CreateCode.GDbarObjects1.length = 0;
gdjs.CreateCode.GDbarObjects2.length = 0;
gdjs.CreateCode.GDRedditLogo2Objects1.length = 0;
gdjs.CreateCode.GDRedditLogo2Objects2.length = 0;
gdjs.CreateCode.GDbutton_9595fun_95231_9595esObjects1.length = 0;
gdjs.CreateCode.GDbutton_9595fun_95231_9595esObjects2.length = 0;
gdjs.CreateCode.GDMouseObjects1.length = 0;
gdjs.CreateCode.GDMouseObjects2.length = 0;
gdjs.CreateCode.GDTextoFun_95231_95245esClickObjects1.length = 0;
gdjs.CreateCode.GDTextoFun_95231_95245esClickObjects2.length = 0;
gdjs.CreateCode.GDMouse2Objects1.length = 0;
gdjs.CreateCode.GDMouse2Objects2.length = 0;
gdjs.CreateCode.GDid_9595img1Objects1.length = 0;
gdjs.CreateCode.GDid_9595img1Objects2.length = 0;
gdjs.CreateCode.GDid_9595img2Objects1.length = 0;
gdjs.CreateCode.GDid_9595img2Objects2.length = 0;
gdjs.CreateCode.GDid_9595link1Objects1.length = 0;
gdjs.CreateCode.GDid_9595link1Objects2.length = 0;
gdjs.CreateCode.GDid_9595link2Objects1.length = 0;
gdjs.CreateCode.GDid_9595link2Objects2.length = 0;
gdjs.CreateCode.GDid_9595abrirObjects1.length = 0;
gdjs.CreateCode.GDid_9595abrirObjects2.length = 0;
gdjs.CreateCode.GDDowloadObjects1.length = 0;
gdjs.CreateCode.GDDowloadObjects2.length = 0;
gdjs.CreateCode.GDborder3Objects1.length = 0;
gdjs.CreateCode.GDborder3Objects2.length = 0;
gdjs.CreateCode.GDNewSprite2Objects1.length = 0;
gdjs.CreateCode.GDNewSprite2Objects2.length = 0;
gdjs.CreateCode.GDStObjects1.length = 0;
gdjs.CreateCode.GDStObjects2.length = 0;
gdjs.CreateCode.GDNewSprite3Objects1.length = 0;
gdjs.CreateCode.GDNewSprite3Objects2.length = 0;
gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.CreateCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.CreateCode.GDborderObjects1.length = 0;
gdjs.CreateCode.GDborderObjects2.length = 0;
gdjs.CreateCode.GDborder2Objects1.length = 0;
gdjs.CreateCode.GDborder2Objects2.length = 0;
gdjs.CreateCode.GDbuttonPlaceObjects1.length = 0;
gdjs.CreateCode.GDbuttonPlaceObjects2.length = 0;
gdjs.CreateCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.CreateCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.CreateCode.GDbuttonPlace2Objects1.length = 0;
gdjs.CreateCode.GDbuttonPlace2Objects2.length = 0;


return;

}

gdjs['CreateCode'] = gdjs.CreateCode;
