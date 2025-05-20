gdjs.inicialCode = {};
gdjs.inicialCode.localVariables = [];
gdjs.inicialCode.GDTextoObjects1= [];
gdjs.inicialCode.GDTextoObjects2= [];
gdjs.inicialCode.GDimgObjects1= [];
gdjs.inicialCode.GDimgObjects2= [];
gdjs.inicialCode.GDlinkObjects1= [];
gdjs.inicialCode.GDlinkObjects2= [];
gdjs.inicialCode.GDimg2Objects1= [];
gdjs.inicialCode.GDimg2Objects2= [];
gdjs.inicialCode.GDTexto2Objects1= [];
gdjs.inicialCode.GDTexto2Objects2= [];
gdjs.inicialCode.GDlink2Objects1= [];
gdjs.inicialCode.GDlink2Objects2= [];
gdjs.inicialCode.GDNewPanelSpriteObjects1= [];
gdjs.inicialCode.GDNewPanelSpriteObjects2= [];
gdjs.inicialCode.GDNewSprite2Objects1= [];
gdjs.inicialCode.GDNewSprite2Objects2= [];
gdjs.inicialCode.GDStObjects1= [];
gdjs.inicialCode.GDStObjects2= [];
gdjs.inicialCode.GDNewSprite3Objects1= [];
gdjs.inicialCode.GDNewSprite3Objects2= [];
gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.inicialCode.GDborderObjects1= [];
gdjs.inicialCode.GDborderObjects2= [];
gdjs.inicialCode.GDborder2Objects1= [];
gdjs.inicialCode.GDborder2Objects2= [];


gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimg2Objects1Objects = Hashtable.newFrom({"img2": gdjs.inicialCode.GDimg2Objects1});
gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimgObjects1Objects = Hashtable.newFrom({"img": gdjs.inicialCode.GDimgObjects1});
gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimg2Objects1Objects = Hashtable.newFrom({"img2": gdjs.inicialCode.GDimg2Objects1});
gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimgObjects1Objects = Hashtable.newFrom({"img": gdjs.inicialCode.GDimgObjects1});
gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimg2Objects2Objects = Hashtable.newFrom({"img2": gdjs.inicialCode.GDimg2Objects2});
gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimgObjects2Objects = Hashtable.newFrom({"img": gdjs.inicialCode.GDimgObjects2});
gdjs.inicialCode.asyncCallback13832916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.inicialCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.inicialCode.GDimgObjects2);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.inicialCode.GDimg2Objects2);
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimg2Objects2Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimgObjects2Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}gdjs.inicialCode.localVariables.length = 0;
}
gdjs.inicialCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.inicialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.inicialCode.asyncCallback13832916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.inicialCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icone_configuração"), gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects1.length;i<l;++i) {
    if ( gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects1[k] = gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects1[i];
        ++k;
    }
}
gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Configurações");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.inicialCode.GDlinkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicialCode.GDlinkObjects1.length;i<l;++i) {
    if ( gdjs.inicialCode.GDlinkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicialCode.GDlinkObjects1[k] = gdjs.inicialCode.GDlinkObjects1[i];
        ++k;
    }
}
gdjs.inicialCode.GDlinkObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.inicialCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.inicialCode.GDimg2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimg2Objects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimgObjects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("link2"), gdjs.inicialCode.GDlink2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicialCode.GDlink2Objects1.length;i<l;++i) {
    if ( gdjs.inicialCode.GDlink2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicialCode.GDlink2Objects1[k] = gdjs.inicialCode.GDlink2Objects1[i];
        ++k;
    }
}
gdjs.inicialCode.GDlink2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.inicialCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.inicialCode.GDimg2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimg2Objects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), gdjs.inicialCode.mapOfGDgdjs_9546inicialCode_9546GDimgObjects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Texto"), gdjs.inicialCode.GDTextoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto2"), gdjs.inicialCode.GDTexto2Objects1);
gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.inicialCode.GDlinkObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2"), gdjs.inicialCode.GDlink2Objects1);
{for(var i = 0, len = gdjs.inicialCode.GDTextoObjects1.length ;i < len;++i) {
    gdjs.inicialCode.GDTextoObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.inicialCode.GDTexto2Objects1.length ;i < len;++i) {
    gdjs.inicialCode.GDTexto2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.inicialCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.inicialCode.GDlinkObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.inicialCode.GDlink2Objects1.length ;i < len;++i) {
    gdjs.inicialCode.GDlink2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.inicialCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.inicialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicialCode.GDTextoObjects1.length = 0;
gdjs.inicialCode.GDTextoObjects2.length = 0;
gdjs.inicialCode.GDimgObjects1.length = 0;
gdjs.inicialCode.GDimgObjects2.length = 0;
gdjs.inicialCode.GDlinkObjects1.length = 0;
gdjs.inicialCode.GDlinkObjects2.length = 0;
gdjs.inicialCode.GDimg2Objects1.length = 0;
gdjs.inicialCode.GDimg2Objects2.length = 0;
gdjs.inicialCode.GDTexto2Objects1.length = 0;
gdjs.inicialCode.GDTexto2Objects2.length = 0;
gdjs.inicialCode.GDlink2Objects1.length = 0;
gdjs.inicialCode.GDlink2Objects2.length = 0;
gdjs.inicialCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.inicialCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.inicialCode.GDNewSprite2Objects1.length = 0;
gdjs.inicialCode.GDNewSprite2Objects2.length = 0;
gdjs.inicialCode.GDStObjects1.length = 0;
gdjs.inicialCode.GDStObjects2.length = 0;
gdjs.inicialCode.GDNewSprite3Objects1.length = 0;
gdjs.inicialCode.GDNewSprite3Objects2.length = 0;
gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.inicialCode.GDborderObjects1.length = 0;
gdjs.inicialCode.GDborderObjects2.length = 0;
gdjs.inicialCode.GDborder2Objects1.length = 0;
gdjs.inicialCode.GDborder2Objects2.length = 0;

gdjs.inicialCode.eventsList1(runtimeScene);
gdjs.inicialCode.GDTextoObjects1.length = 0;
gdjs.inicialCode.GDTextoObjects2.length = 0;
gdjs.inicialCode.GDimgObjects1.length = 0;
gdjs.inicialCode.GDimgObjects2.length = 0;
gdjs.inicialCode.GDlinkObjects1.length = 0;
gdjs.inicialCode.GDlinkObjects2.length = 0;
gdjs.inicialCode.GDimg2Objects1.length = 0;
gdjs.inicialCode.GDimg2Objects2.length = 0;
gdjs.inicialCode.GDTexto2Objects1.length = 0;
gdjs.inicialCode.GDTexto2Objects2.length = 0;
gdjs.inicialCode.GDlink2Objects1.length = 0;
gdjs.inicialCode.GDlink2Objects2.length = 0;
gdjs.inicialCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.inicialCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.inicialCode.GDNewSprite2Objects1.length = 0;
gdjs.inicialCode.GDNewSprite2Objects2.length = 0;
gdjs.inicialCode.GDStObjects1.length = 0;
gdjs.inicialCode.GDStObjects2.length = 0;
gdjs.inicialCode.GDNewSprite3Objects1.length = 0;
gdjs.inicialCode.GDNewSprite3Objects2.length = 0;
gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.inicialCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.inicialCode.GDborderObjects1.length = 0;
gdjs.inicialCode.GDborderObjects2.length = 0;
gdjs.inicialCode.GDborder2Objects1.length = 0;
gdjs.inicialCode.GDborder2Objects2.length = 0;


return;

}

gdjs['inicialCode'] = gdjs.inicialCode;
