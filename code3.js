gdjs.inicial_32DemoCode = {};
gdjs.inicial_32DemoCode.localVariables = [];
gdjs.inicial_32DemoCode.GDTextoObjects1= [];
gdjs.inicial_32DemoCode.GDTextoObjects2= [];
gdjs.inicial_32DemoCode.GDTextoObjects3= [];
gdjs.inicial_32DemoCode.GDimgObjects1= [];
gdjs.inicial_32DemoCode.GDimgObjects2= [];
gdjs.inicial_32DemoCode.GDimgObjects3= [];
gdjs.inicial_32DemoCode.GDlinkObjects1= [];
gdjs.inicial_32DemoCode.GDlinkObjects2= [];
gdjs.inicial_32DemoCode.GDlinkObjects3= [];
gdjs.inicial_32DemoCode.GDimg2Objects1= [];
gdjs.inicial_32DemoCode.GDimg2Objects2= [];
gdjs.inicial_32DemoCode.GDimg2Objects3= [];
gdjs.inicial_32DemoCode.GDTexto2Objects1= [];
gdjs.inicial_32DemoCode.GDTexto2Objects2= [];
gdjs.inicial_32DemoCode.GDTexto2Objects3= [];
gdjs.inicial_32DemoCode.GDlink2Objects1= [];
gdjs.inicial_32DemoCode.GDlink2Objects2= [];
gdjs.inicial_32DemoCode.GDlink2Objects3= [];
gdjs.inicial_32DemoCode.GDcompartilharObjects1= [];
gdjs.inicial_32DemoCode.GDcompartilharObjects2= [];
gdjs.inicial_32DemoCode.GDcompartilharObjects3= [];
gdjs.inicial_32DemoCode.GDNewTextObjects1= [];
gdjs.inicial_32DemoCode.GDNewTextObjects2= [];
gdjs.inicial_32DemoCode.GDNewTextObjects3= [];
gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects1= [];
gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects2= [];
gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects3= [];
gdjs.inicial_32DemoCode.GDborder3Objects1= [];
gdjs.inicial_32DemoCode.GDborder3Objects2= [];
gdjs.inicial_32DemoCode.GDborder3Objects3= [];
gdjs.inicial_32DemoCode.GDNewSprite2Objects1= [];
gdjs.inicial_32DemoCode.GDNewSprite2Objects2= [];
gdjs.inicial_32DemoCode.GDNewSprite2Objects3= [];
gdjs.inicial_32DemoCode.GDStObjects1= [];
gdjs.inicial_32DemoCode.GDStObjects2= [];
gdjs.inicial_32DemoCode.GDStObjects3= [];
gdjs.inicial_32DemoCode.GDNewSprite3Objects1= [];
gdjs.inicial_32DemoCode.GDNewSprite3Objects2= [];
gdjs.inicial_32DemoCode.GDNewSprite3Objects3= [];
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects3= [];
gdjs.inicial_32DemoCode.GDborderObjects1= [];
gdjs.inicial_32DemoCode.GDborderObjects2= [];
gdjs.inicial_32DemoCode.GDborderObjects3= [];
gdjs.inicial_32DemoCode.GDborder2Objects1= [];
gdjs.inicial_32DemoCode.GDborder2Objects2= [];
gdjs.inicial_32DemoCode.GDborder2Objects3= [];
gdjs.inicial_32DemoCode.GDbuttonPlaceObjects1= [];
gdjs.inicial_32DemoCode.GDbuttonPlaceObjects2= [];
gdjs.inicial_32DemoCode.GDbuttonPlaceObjects3= [];
gdjs.inicial_32DemoCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.inicial_32DemoCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.inicial_32DemoCode.GDGreyButtonWithShadow3Objects3= [];
gdjs.inicial_32DemoCode.GDbuttonPlace2Objects1= [];
gdjs.inicial_32DemoCode.GDbuttonPlace2Objects2= [];
gdjs.inicial_32DemoCode.GDbuttonPlace2Objects3= [];


gdjs.inicial_32DemoCode.mapOfGDgdjs_9546inicial_959532DemoCode_9546GDimgObjects1Objects = Hashtable.newFrom({"img": gdjs.inicial_32DemoCode.GDimgObjects1});
gdjs.inicial_32DemoCode.mapOfGDgdjs_9546inicial_959532DemoCode_9546GDimg2Objects1Objects = Hashtable.newFrom({"img2": gdjs.inicial_32DemoCode.GDimg2Objects1});
gdjs.inicial_32DemoCode.asyncCallback17114132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.inicial_32DemoCode.localVariables);
gdjs.inicial_32DemoCode.localVariables.length = 0;
}
gdjs.inicial_32DemoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.inicial_32DemoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__Share__Share.func(runtimeScene, "Veja esse Quiosque, id dele é " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "", "Me ajude no Projeto compartilhando ele.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.inicial_32DemoCode.asyncCallback17114132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.inicial_32DemoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(19).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(20).getAsString() == "SairQui");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(19).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(20).getAsString() == "AbriSite");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL(runtimeScene.getScene().getVariables().getFromIndex(21).getAsString(), runtimeScene);
}{runtimeScene.getScene().getVariables().getFromIndex(19).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(19).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(20).getAsString() == "MudarTxt");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(21).getAsString() == "1");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(22).getAsString());
}{runtimeScene.getScene().getVariables().getFromIndex(19).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(19).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(20).getAsString() == "MudarTxt");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(21).getAsString() == "2");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(runtimeScene.getScene().getVariables().getFromIndex(22).getAsString());
}{runtimeScene.getScene().getVariables().getFromIndex(19).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(19).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(20).getAsString() == "AbriQui");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(21).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunQuandoAbriQui", runtimeScene.getScene().getVariables().getFromIndex(18), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2X", runtimeScene.getScene().getVariables().getFromIndex(12), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2Y", runtimeScene.getScene().getVariables().getFromIndex(13), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1Y", runtimeScene.getScene().getVariables().getFromIndex(11), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1X", runtimeScene.getScene().getVariables().getFromIndex(10), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg2", runtimeScene.getScene().getVariables().getFromIndex(17), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", runtimeScene.getScene().getVariables().getFromIndex(16), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.inicial_32DemoCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.inicial_32DemoCode.GDimgObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimgObjects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimgObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimgObjects2[k] = gdjs.inicial_32DemoCode.GDimgObjects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimgObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(24).getAsString() == "SairQui");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.inicial_32DemoCode.GDimgObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimgObjects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimgObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimgObjects2[k] = gdjs.inicial_32DemoCode.GDimgObjects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimgObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(24).getAsString() == "MudarTxt");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(26).getAsString() == "2");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(25).getAsString());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.inicial_32DemoCode.GDimgObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimgObjects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimgObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimgObjects2[k] = gdjs.inicial_32DemoCode.GDimgObjects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimgObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(24).getAsString() == "MudarTxt");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(26).getAsString() == "1");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(runtimeScene.getScene().getVariables().getFromIndex(25).getAsString());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.inicial_32DemoCode.GDimgObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimgObjects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimgObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimgObjects2[k] = gdjs.inicial_32DemoCode.GDimgObjects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimgObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(24).getAsString() == "AbriSite");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL(runtimeScene.getScene().getVariables().getFromIndex(26).getAsString(), runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.inicial_32DemoCode.GDimgObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimgObjects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimgObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimgObjects2[k] = gdjs.inicial_32DemoCode.GDimgObjects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimgObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(24).getAsString() == "AbriQui");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(27).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunQuandoAbriQui", runtimeScene.getScene().getVariables().getFromIndex(18), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2X", runtimeScene.getScene().getVariables().getFromIndex(12), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2Y", runtimeScene.getScene().getVariables().getFromIndex(13), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1Y", runtimeScene.getScene().getVariables().getFromIndex(11), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1X", runtimeScene.getScene().getVariables().getFromIndex(10), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg2", runtimeScene.getScene().getVariables().getFromIndex(17), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", runtimeScene.getScene().getVariables().getFromIndex(16), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.inicial_32DemoCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.inicial_32DemoCode.GDimg2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimg2Objects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimg2Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimg2Objects2[k] = gdjs.inicial_32DemoCode.GDimg2Objects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimg2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsString() == "SairQui");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.inicial_32DemoCode.GDimg2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimg2Objects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimg2Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimg2Objects2[k] = gdjs.inicial_32DemoCode.GDimg2Objects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimg2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsString() == "AbriSite");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL(runtimeScene.getScene().getVariables().getFromIndex(27).getAsString(), runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.inicial_32DemoCode.GDimg2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimg2Objects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimg2Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimg2Objects2[k] = gdjs.inicial_32DemoCode.GDimg2Objects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimg2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsString() == "MudarTxt");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(28).getAsString() == "2");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(28).getAsString());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.inicial_32DemoCode.GDimg2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimg2Objects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimg2Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimg2Objects2[k] = gdjs.inicial_32DemoCode.GDimg2Objects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimg2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsString() == "MudarTxt");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(28).getAsString() == "1");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(runtimeScene.getScene().getVariables().getFromIndex(28).getAsString());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.inicial_32DemoCode.GDimg2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDimg2Objects2.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDimg2Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDimg2Objects2[k] = gdjs.inicial_32DemoCode.GDimg2Objects2[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDimg2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsString() == "AbriQui");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(27).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunQuandoAbriQui", runtimeScene.getScene().getVariables().getFromIndex(18), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2X", runtimeScene.getScene().getVariables().getFromIndex(12), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2Y", runtimeScene.getScene().getVariables().getFromIndex(13), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1Y", runtimeScene.getScene().getVariables().getFromIndex(11), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1X", runtimeScene.getScene().getVariables().getFromIndex(10), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg2", runtimeScene.getScene().getVariables().getFromIndex(17), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", runtimeScene.getScene().getVariables().getFromIndex(16), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.inicial_32DemoCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunQuandoAbriQui", runtimeScene.getScene().getVariables().getFromIndex(18), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getScene().getVariables().getFromIndex(19).setBoolean(true);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", runtimeScene.getScene().getVariables().getFromIndex(16), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg2", runtimeScene.getScene().getVariables().getFromIndex(17), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", runtimeScene.getScene().getVariables().getFromIndex(23), gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icone_configuração"), gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects1.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects1[k] = gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects1[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Configurações");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.inicial_32DemoCode.GDlinkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDlinkObjects1.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDlinkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDlinkObjects1[k] = gdjs.inicial_32DemoCode.GDlinkObjects1[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDlinkObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunQuandoAbriQui", runtimeScene.getScene().getVariables().getFromIndex(18), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg2", runtimeScene.getScene().getVariables().getFromIndex(17), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", runtimeScene.getScene().getVariables().getFromIndex(16), gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("link2"), gdjs.inicial_32DemoCode.GDlink2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDlink2Objects1.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDlink2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDlink2Objects1[k] = gdjs.inicial_32DemoCode.GDlink2Objects1[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDlink2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunQuandoAbriQui", runtimeScene.getScene().getVariables().getFromIndex(18), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Views", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img1", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_name", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_name", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link1_pag", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "link2_pag", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Texto1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "img2", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg2", runtimeScene.getScene().getVariables().getFromIndex(17), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunImg1", runtimeScene.getScene().getVariables().getFromIndex(16), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Texto"), gdjs.inicial_32DemoCode.GDTextoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto2"), gdjs.inicial_32DemoCode.GDTexto2Objects1);
gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.inicial_32DemoCode.GDlinkObjects1);
gdjs.copyArray(runtimeScene.getObjects("link2"), gdjs.inicial_32DemoCode.GDlink2Objects1);
{for(var i = 0, len = gdjs.inicial_32DemoCode.GDTextoObjects1.length ;i < len;++i) {
    gdjs.inicial_32DemoCode.GDTextoObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.inicial_32DemoCode.GDTexto2Objects1.length ;i < len;++i) {
    gdjs.inicial_32DemoCode.GDTexto2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.inicial_32DemoCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.inicial_32DemoCode.GDlinkObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.inicial_32DemoCode.GDlink2Objects1.length ;i < len;++i) {
    gdjs.inicial_32DemoCode.GDlink2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "GenerateIMG", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background_Ipad"), gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects1);
gdjs.copyArray(runtimeScene.getObjects("img"), gdjs.inicial_32DemoCode.GDimgObjects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.inicial_32DemoCode.GDimg2Objects1);
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), gdjs.inicial_32DemoCode.mapOfGDgdjs_9546inicial_959532DemoCode_9546GDimgObjects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), gdjs.inicial_32DemoCode.mapOfGDgdjs_9546inicial_959532DemoCode_9546GDimg2Objects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects1.length ;i < len;++i) {
    gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects1[i].setColor(runtimeScene.getScene().getVariables().getFromIndex(9).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("compartilhar"), gdjs.inicial_32DemoCode.GDcompartilharObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDcompartilharObjects1.length;i<l;++i) {
    if ( gdjs.inicial_32DemoCode.GDcompartilharObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDcompartilharObjects1[k] = gdjs.inicial_32DemoCode.GDcompartilharObjects1[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDcompartilharObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.inicial_32DemoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(19).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(18).getAsString(), "par1", runtimeScene.getScene().getVariables().getFromIndex(21), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(18).getAsString(), "par2", runtimeScene.getScene().getVariables().getFromIndex(22), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(18).getAsString(), "Tipo", runtimeScene.getScene().getVariables().getFromIndex(20), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17116940);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(16).getAsString(), "par1", runtimeScene.getScene().getVariables().getFromIndex(26), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(16).getAsString(), "par2", runtimeScene.getScene().getVariables().getFromIndex(25), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(16).getAsString(), "Tipo", runtimeScene.getScene().getVariables().getFromIndex(24), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17118436);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(16).getAsString(), "par1", runtimeScene.getScene().getVariables().getFromIndex(27), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(16).getAsString(), "par2", runtimeScene.getScene().getVariables().getFromIndex(28), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(16).getAsString(), "Tipo", runtimeScene.getScene().getVariables().getFromIndex(29), gdjs.VariablesContainer.badVariable);
}}

}


{


gdjs.inicial_32DemoCode.eventsList1(runtimeScene);
}


{


gdjs.inicial_32DemoCode.eventsList2(runtimeScene);
}


{


gdjs.inicial_32DemoCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.inicial_32DemoCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.inicial_32DemoCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.inicial_32DemoCode.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(16).getAsString() + "\n" + runtimeScene.getScene().getVariables().getFromIndex(24).getAsString() + "\n" + runtimeScene.getScene().getVariables().getFromIndex(26).getAsString() + "\n" + runtimeScene.getScene().getVariables().getFromIndex(25).getAsString() + "\n\n" + runtimeScene.getScene().getVariables().getFromIndex(17).getAsString() + "\n" + runtimeScene.getScene().getVariables().getFromIndex(29).getAsString() + "\n" + runtimeScene.getScene().getVariables().getFromIndex(27).getAsString() + "\n" + runtimeScene.getScene().getVariables().getFromIndex(28).getAsString());
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Texto2"), gdjs.inicial_32DemoCode.GDTexto2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicial_32DemoCode.GDTexto2Objects1.length;i<l;++i) {
    if ( (gdjs.inicial_32DemoCode.GDTexto2Objects1[i].getBehavior("Text").getText()).startsWith("Ini") ) {
        isConditionTrue_0 = true;
        gdjs.inicial_32DemoCode.GDTexto2Objects1[k] = gdjs.inicial_32DemoCode.GDTexto2Objects1[i];
        ++k;
    }
}
gdjs.inicial_32DemoCode.GDTexto2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://sites.google.com/bomjesus.br/feiras-cientificas-ficef-ficem/ficef-e-ficem", runtimeScene);
}}

}


};

gdjs.inicial_32DemoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicial_32DemoCode.GDTextoObjects1.length = 0;
gdjs.inicial_32DemoCode.GDTextoObjects2.length = 0;
gdjs.inicial_32DemoCode.GDTextoObjects3.length = 0;
gdjs.inicial_32DemoCode.GDimgObjects1.length = 0;
gdjs.inicial_32DemoCode.GDimgObjects2.length = 0;
gdjs.inicial_32DemoCode.GDimgObjects3.length = 0;
gdjs.inicial_32DemoCode.GDlinkObjects1.length = 0;
gdjs.inicial_32DemoCode.GDlinkObjects2.length = 0;
gdjs.inicial_32DemoCode.GDlinkObjects3.length = 0;
gdjs.inicial_32DemoCode.GDimg2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDimg2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDimg2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDTexto2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDTexto2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDTexto2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDlink2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDlink2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDlink2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDcompartilharObjects1.length = 0;
gdjs.inicial_32DemoCode.GDcompartilharObjects2.length = 0;
gdjs.inicial_32DemoCode.GDcompartilharObjects3.length = 0;
gdjs.inicial_32DemoCode.GDNewTextObjects1.length = 0;
gdjs.inicial_32DemoCode.GDNewTextObjects2.length = 0;
gdjs.inicial_32DemoCode.GDNewTextObjects3.length = 0;
gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects1.length = 0;
gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects2.length = 0;
gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects3.length = 0;
gdjs.inicial_32DemoCode.GDborder3Objects1.length = 0;
gdjs.inicial_32DemoCode.GDborder3Objects2.length = 0;
gdjs.inicial_32DemoCode.GDborder3Objects3.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDStObjects1.length = 0;
gdjs.inicial_32DemoCode.GDStObjects2.length = 0;
gdjs.inicial_32DemoCode.GDStObjects3.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite3Objects1.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite3Objects2.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite3Objects3.length = 0;
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects3.length = 0;
gdjs.inicial_32DemoCode.GDborderObjects1.length = 0;
gdjs.inicial_32DemoCode.GDborderObjects2.length = 0;
gdjs.inicial_32DemoCode.GDborderObjects3.length = 0;
gdjs.inicial_32DemoCode.GDborder2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDborder2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDborder2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlaceObjects1.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlaceObjects2.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlaceObjects3.length = 0;
gdjs.inicial_32DemoCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.inicial_32DemoCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.inicial_32DemoCode.GDGreyButtonWithShadow3Objects3.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlace2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlace2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlace2Objects3.length = 0;

gdjs.inicial_32DemoCode.eventsList4(runtimeScene);
gdjs.inicial_32DemoCode.GDTextoObjects1.length = 0;
gdjs.inicial_32DemoCode.GDTextoObjects2.length = 0;
gdjs.inicial_32DemoCode.GDTextoObjects3.length = 0;
gdjs.inicial_32DemoCode.GDimgObjects1.length = 0;
gdjs.inicial_32DemoCode.GDimgObjects2.length = 0;
gdjs.inicial_32DemoCode.GDimgObjects3.length = 0;
gdjs.inicial_32DemoCode.GDlinkObjects1.length = 0;
gdjs.inicial_32DemoCode.GDlinkObjects2.length = 0;
gdjs.inicial_32DemoCode.GDlinkObjects3.length = 0;
gdjs.inicial_32DemoCode.GDimg2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDimg2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDimg2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDTexto2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDTexto2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDTexto2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDlink2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDlink2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDlink2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDcompartilharObjects1.length = 0;
gdjs.inicial_32DemoCode.GDcompartilharObjects2.length = 0;
gdjs.inicial_32DemoCode.GDcompartilharObjects3.length = 0;
gdjs.inicial_32DemoCode.GDNewTextObjects1.length = 0;
gdjs.inicial_32DemoCode.GDNewTextObjects2.length = 0;
gdjs.inicial_32DemoCode.GDNewTextObjects3.length = 0;
gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects1.length = 0;
gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects2.length = 0;
gdjs.inicial_32DemoCode.GDBackground_9595IpadObjects3.length = 0;
gdjs.inicial_32DemoCode.GDborder3Objects1.length = 0;
gdjs.inicial_32DemoCode.GDborder3Objects2.length = 0;
gdjs.inicial_32DemoCode.GDborder3Objects3.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDStObjects1.length = 0;
gdjs.inicial_32DemoCode.GDStObjects2.length = 0;
gdjs.inicial_32DemoCode.GDStObjects3.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite3Objects1.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite3Objects2.length = 0;
gdjs.inicial_32DemoCode.GDNewSprite3Objects3.length = 0;
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.inicial_32DemoCode.GDIcone_9595configura_95231_95227oObjects3.length = 0;
gdjs.inicial_32DemoCode.GDborderObjects1.length = 0;
gdjs.inicial_32DemoCode.GDborderObjects2.length = 0;
gdjs.inicial_32DemoCode.GDborderObjects3.length = 0;
gdjs.inicial_32DemoCode.GDborder2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDborder2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDborder2Objects3.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlaceObjects1.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlaceObjects2.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlaceObjects3.length = 0;
gdjs.inicial_32DemoCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.inicial_32DemoCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.inicial_32DemoCode.GDGreyButtonWithShadow3Objects3.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlace2Objects1.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlace2Objects2.length = 0;
gdjs.inicial_32DemoCode.GDbuttonPlace2Objects3.length = 0;


return;

}

gdjs['inicial_32DemoCode'] = gdjs.inicial_32DemoCode;
