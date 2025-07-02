gdjs.StudioCode = {};
gdjs.StudioCode.localVariables = [];
gdjs.StudioCode.GDBackgroundObjects1= [];
gdjs.StudioCode.GDBackgroundObjects2= [];
gdjs.StudioCode.GDCriarObjects1= [];
gdjs.StudioCode.GDCriarObjects2= [];
gdjs.StudioCode.GDCriar_9595TextObjects1= [];
gdjs.StudioCode.GDCriar_9595TextObjects2= [];
gdjs.StudioCode.GDQuiosqueIconObjects1= [];
gdjs.StudioCode.GDQuiosqueIconObjects2= [];
gdjs.StudioCode.GDghObjects1= [];
gdjs.StudioCode.GDghObjects2= [];
gdjs.StudioCode.GDCreateObjects1= [];
gdjs.StudioCode.GDCreateObjects2= [];
gdjs.StudioCode.GDSquareWhiteToggleObjects1= [];
gdjs.StudioCode.GDSquareWhiteToggleObjects2= [];
gdjs.StudioCode.GDHelpObjects1= [];
gdjs.StudioCode.GDHelpObjects2= [];
gdjs.StudioCode.GDText_9595showObjects1= [];
gdjs.StudioCode.GDText_9595showObjects2= [];
gdjs.StudioCode.GDQuiosqueInfoObjects1= [];
gdjs.StudioCode.GDQuiosqueInfoObjects2= [];
gdjs.StudioCode.GDnomeObjects1= [];
gdjs.StudioCode.GDnomeObjects2= [];
gdjs.StudioCode.GDIDObjects1= [];
gdjs.StudioCode.GDIDObjects2= [];
gdjs.StudioCode.GDCreate2Objects1= [];
gdjs.StudioCode.GDCreate2Objects2= [];
gdjs.StudioCode.GDEntrarObjects1= [];
gdjs.StudioCode.GDEntrarObjects2= [];
gdjs.StudioCode.GDEditarObjects1= [];
gdjs.StudioCode.GDEditarObjects2= [];
gdjs.StudioCode.GDCollisiionObjects1= [];
gdjs.StudioCode.GDCollisiionObjects2= [];
gdjs.StudioCode.GDiconObjects1= [];
gdjs.StudioCode.GDiconObjects2= [];
gdjs.StudioCode.GDborder3Objects1= [];
gdjs.StudioCode.GDborder3Objects2= [];
gdjs.StudioCode.GDNewSprite2Objects1= [];
gdjs.StudioCode.GDNewSprite2Objects2= [];
gdjs.StudioCode.GDStObjects1= [];
gdjs.StudioCode.GDStObjects2= [];
gdjs.StudioCode.GDNewSprite3Objects1= [];
gdjs.StudioCode.GDNewSprite3Objects2= [];
gdjs.StudioCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.StudioCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.StudioCode.GDborderObjects1= [];
gdjs.StudioCode.GDborderObjects2= [];
gdjs.StudioCode.GDborder2Objects1= [];
gdjs.StudioCode.GDborder2Objects2= [];
gdjs.StudioCode.GDbuttonPlaceObjects1= [];
gdjs.StudioCode.GDbuttonPlaceObjects2= [];
gdjs.StudioCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.StudioCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.StudioCode.GDbuttonPlace2Objects1= [];
gdjs.StudioCode.GDbuttonPlace2Objects2= [];


gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDQuiosqueIconObjects1ObjectsGDgdjs_9546StudioCode_9546GDCriarObjects1ObjectsGDgdjs_9546StudioCode_9546GDHelpObjects1ObjectsGDgdjs_9546StudioCode_9546GDCreate2Objects1ObjectsGDgdjs_9546StudioCode_9546GDEntrarObjects1ObjectsGDgdjs_9546StudioCode_9546GDEditarObjects1ObjectsGDgdjs_9546StudioCode_9546GDNewSprite2Objects1ObjectsGDgdjs_9546StudioCode_9546GDIcone_95959595configura_959595231_959595227oObjects1Objects = Hashtable.newFrom({"QuiosqueIcon": gdjs.StudioCode.GDQuiosqueIconObjects1, "Criar": gdjs.StudioCode.GDCriarObjects1, "Help": gdjs.StudioCode.GDHelpObjects1, "Create2": gdjs.StudioCode.GDCreate2Objects1, "Entrar": gdjs.StudioCode.GDEntrarObjects1, "Editar": gdjs.StudioCode.GDEditarObjects1, "NewSprite2": gdjs.StudioCode.GDNewSprite2Objects1, "Icone_configuração": gdjs.StudioCode.GDIcone_9595configura_95231_95227oObjects1});
gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDQuiosqueIconObjects1Objects = Hashtable.newFrom({"QuiosqueIcon": gdjs.StudioCode.GDQuiosqueIconObjects1});
gdjs.StudioCode.asyncCallback15835556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StudioCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("QuiosqueIcon"), gdjs.StudioCode.GDQuiosqueIconObjects2);

{for(var i = 0, len = gdjs.StudioCode.GDQuiosqueIconObjects2.length ;i < len;++i) {
    gdjs.StudioCode.GDQuiosqueIconObjects2[i].rotate(-(10), runtimeScene);
}
}gdjs.StudioCode.localVariables.length = 0;
}
gdjs.StudioCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StudioCode.localVariables);
for (const obj of gdjs.StudioCode.GDQuiosqueIconObjects1) asyncObjectsList.addObject("QuiosqueIcon", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StudioCode.asyncCallback15835556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StudioCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Criar_Text"), gdjs.StudioCode.GDCriar_9595TextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDCriar_9595TextObjects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDCriar_9595TextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDCriar_9595TextObjects1[k] = gdjs.StudioCode.GDCriar_9595TextObjects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDCriar_9595TextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "criar menu");
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

gdjs.copyArray(runtimeScene.getObjects("Create2"), gdjs.StudioCode.GDCreate2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Criar"), gdjs.StudioCode.GDCriarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Editar"), gdjs.StudioCode.GDEditarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Entrar"), gdjs.StudioCode.GDEntrarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Help"), gdjs.StudioCode.GDHelpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icone_configuração"), gdjs.StudioCode.GDIcone_9595configura_95231_95227oObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StudioCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuiosqueIcon"), gdjs.StudioCode.GDQuiosqueIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDQuiosqueIconObjects1ObjectsGDgdjs_9546StudioCode_9546GDCriarObjects1ObjectsGDgdjs_9546StudioCode_9546GDHelpObjects1ObjectsGDgdjs_9546StudioCode_9546GDCreate2Objects1ObjectsGDgdjs_9546StudioCode_9546GDEntrarObjects1ObjectsGDgdjs_9546StudioCode_9546GDEditarObjects1ObjectsGDgdjs_9546StudioCode_9546GDNewSprite2Objects1ObjectsGDgdjs_9546StudioCode_9546GDIcone_95959595configura_959595231_959595227oObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
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
gdjs.copyArray(runtimeScene.getObjects("Editar"), gdjs.StudioCode.GDEditarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Entrar"), gdjs.StudioCode.GDEntrarObjects1);
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.StudioCode.GDEditarObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDEditarObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StudioCode.GDEntrarObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDEntrarObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.StudioCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDSquareWhiteToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDSquareWhiteToggleObjects1[k] = gdjs.StudioCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text_show"), gdjs.StudioCode.GDText_9595showObjects1);
{for(var i = 0, len = gdjs.StudioCode.GDText_9595showObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDText_9595showObjects1[i].getBehavior("Text").setText("Visual Editor");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.StudioCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.StudioCode.GDSquareWhiteToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDSquareWhiteToggleObjects1[k] = gdjs.StudioCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text_show"), gdjs.StudioCode.GDText_9595showObjects1);
{for(var i = 0, len = gdjs.StudioCode.GDText_9595showObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDText_9595showObjects1[i].getBehavior("Text").setText("Code Editor");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Editar"), gdjs.StudioCode.GDEditarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDEditarObjects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDEditarObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDEditarObjects1[k] = gdjs.StudioCode.GDEditarObjects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDEditarObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Create");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Entrar"), gdjs.StudioCode.GDEntrarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDEntrarObjects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDEntrarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDEntrarObjects1[k] = gdjs.StudioCode.GDEntrarObjects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDEntrarObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "inicial");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "QuiosqueCreation", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= 570);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() != 0);
}
}
}
}
if (isConditionTrue_0) {
gdjs.StudioCode.GDQuiosqueIconObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDQuiosqueIconObjects1Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "QuiosqueIcon");
}{for(var i = 0, len = gdjs.StudioCode.GDQuiosqueIconObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDQuiosqueIconObjects1[i].returnVariable(gdjs.StudioCode.GDQuiosqueIconObjects1[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), "background", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.StudioCode.GDQuiosqueIconObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDQuiosqueIconObjects1[i].setColor(runtimeScene.getScene().getVariables().getFromIndex(7).getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(152);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 570);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() != 560);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(24);
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(213);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Collisiion"), gdjs.StudioCode.GDCollisiionObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuiosqueIcon"), gdjs.StudioCode.GDQuiosqueIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuiosqueInfo"), gdjs.StudioCode.GDQuiosqueInfoObjects1);
{for(var i = 0, len = gdjs.StudioCode.GDQuiosqueIconObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDQuiosqueIconObjects1[i].getBehavior("Resizable").setSize(130, 191);
}
}{for(var i = 0, len = gdjs.StudioCode.GDQuiosqueInfoObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDQuiosqueInfoObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() + "\n" + runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.StudioCode.GDCollisiionObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDCollisiionObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuiosqueIcon"), gdjs.StudioCode.GDQuiosqueIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDQuiosqueIconObjects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDQuiosqueIconObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDQuiosqueIconObjects1[k] = gdjs.StudioCode.GDQuiosqueIconObjects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDQuiosqueIconObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Editar"), gdjs.StudioCode.GDEditarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Entrar"), gdjs.StudioCode.GDEntrarObjects1);
/* Reuse gdjs.StudioCode.GDQuiosqueIconObjects1 */
{gdjs.evtTools.firebaseTools.database.getField(((gdjs.StudioCode.GDQuiosqueIconObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.StudioCode.GDQuiosqueIconObjects1[0].getVariables()).getFromIndex(0).getAsString(), "Name", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), ((gdjs.StudioCode.GDQuiosqueIconObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.StudioCode.GDQuiosqueIconObjects1[0].getVariables()).getFromIndex(0).getAsString() + "ID", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.StudioCode.GDEditarObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDEditarObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StudioCode.GDEntrarObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDEntrarObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StudioCode.GDQuiosqueIconObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDQuiosqueIconObjects1[i].rotate(10, runtimeScene);
}
}
{ //Subevents
gdjs.StudioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StudioCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDNewSprite2Objects1[k] = gdjs.StudioCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Create2"), gdjs.StudioCode.GDCreate2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ID"), gdjs.StudioCode.GDIDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDCreate2Objects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDCreate2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDCreate2Objects1[k] = gdjs.StudioCode.GDCreate2Objects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDCreate2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDIDObjects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDIDObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDIDObjects1[k] = gdjs.StudioCode.GDIDObjects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDIDObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Criar_Text"), gdjs.StudioCode.GDCriar_9595TextObjects1);
/* Reuse gdjs.StudioCode.GDIDObjects1 */
{gdjs.evtTools.firebaseTools.database.getField((( gdjs.StudioCode.GDIDObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDIDObjects1[0].getBehavior("Text").getText()), "Usado", runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.StudioCode.GDCriar_9595TextObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDCriar_9595TextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Create2"), gdjs.StudioCode.GDCreate2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsString() == "0");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDCreate2Objects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDCreate2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDCreate2Objects1[k] = gdjs.StudioCode.GDCreate2Objects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDCreate2Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ID"), gdjs.StudioCode.GDIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.StudioCode.GDnomeObjects1);
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Usado", "True", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + "ID", (( gdjs.StudioCode.GDIDObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDIDObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "FunçõesContendo", "", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField((( gdjs.StudioCode.GDIDObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDIDObjects1[0].getBehavior("Text").getText()), "Name", (( gdjs.StudioCode.GDnomeObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDnomeObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), (( gdjs.StudioCode.GDnomeObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDnomeObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Thumb", gdjs.evtTools.common.toString(gdjs.random(255)) + ";" + gdjs.evtTools.common.toString(gdjs.random(255)) + ";" + gdjs.evtTools.common.toString(gdjs.random(255)) + ";", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.StudioCode.GDIDObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDIDObjects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Create");
}}

}


};

gdjs.StudioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StudioCode.GDBackgroundObjects1.length = 0;
gdjs.StudioCode.GDBackgroundObjects2.length = 0;
gdjs.StudioCode.GDCriarObjects1.length = 0;
gdjs.StudioCode.GDCriarObjects2.length = 0;
gdjs.StudioCode.GDCriar_9595TextObjects1.length = 0;
gdjs.StudioCode.GDCriar_9595TextObjects2.length = 0;
gdjs.StudioCode.GDQuiosqueIconObjects1.length = 0;
gdjs.StudioCode.GDQuiosqueIconObjects2.length = 0;
gdjs.StudioCode.GDghObjects1.length = 0;
gdjs.StudioCode.GDghObjects2.length = 0;
gdjs.StudioCode.GDCreateObjects1.length = 0;
gdjs.StudioCode.GDCreateObjects2.length = 0;
gdjs.StudioCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.StudioCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.StudioCode.GDHelpObjects1.length = 0;
gdjs.StudioCode.GDHelpObjects2.length = 0;
gdjs.StudioCode.GDText_9595showObjects1.length = 0;
gdjs.StudioCode.GDText_9595showObjects2.length = 0;
gdjs.StudioCode.GDQuiosqueInfoObjects1.length = 0;
gdjs.StudioCode.GDQuiosqueInfoObjects2.length = 0;
gdjs.StudioCode.GDnomeObjects1.length = 0;
gdjs.StudioCode.GDnomeObjects2.length = 0;
gdjs.StudioCode.GDIDObjects1.length = 0;
gdjs.StudioCode.GDIDObjects2.length = 0;
gdjs.StudioCode.GDCreate2Objects1.length = 0;
gdjs.StudioCode.GDCreate2Objects2.length = 0;
gdjs.StudioCode.GDEntrarObjects1.length = 0;
gdjs.StudioCode.GDEntrarObjects2.length = 0;
gdjs.StudioCode.GDEditarObjects1.length = 0;
gdjs.StudioCode.GDEditarObjects2.length = 0;
gdjs.StudioCode.GDCollisiionObjects1.length = 0;
gdjs.StudioCode.GDCollisiionObjects2.length = 0;
gdjs.StudioCode.GDiconObjects1.length = 0;
gdjs.StudioCode.GDiconObjects2.length = 0;
gdjs.StudioCode.GDborder3Objects1.length = 0;
gdjs.StudioCode.GDborder3Objects2.length = 0;
gdjs.StudioCode.GDNewSprite2Objects1.length = 0;
gdjs.StudioCode.GDNewSprite2Objects2.length = 0;
gdjs.StudioCode.GDStObjects1.length = 0;
gdjs.StudioCode.GDStObjects2.length = 0;
gdjs.StudioCode.GDNewSprite3Objects1.length = 0;
gdjs.StudioCode.GDNewSprite3Objects2.length = 0;
gdjs.StudioCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.StudioCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.StudioCode.GDborderObjects1.length = 0;
gdjs.StudioCode.GDborderObjects2.length = 0;
gdjs.StudioCode.GDborder2Objects1.length = 0;
gdjs.StudioCode.GDborder2Objects2.length = 0;
gdjs.StudioCode.GDbuttonPlaceObjects1.length = 0;
gdjs.StudioCode.GDbuttonPlaceObjects2.length = 0;
gdjs.StudioCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.StudioCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.StudioCode.GDbuttonPlace2Objects1.length = 0;
gdjs.StudioCode.GDbuttonPlace2Objects2.length = 0;

gdjs.StudioCode.eventsList1(runtimeScene);
gdjs.StudioCode.GDBackgroundObjects1.length = 0;
gdjs.StudioCode.GDBackgroundObjects2.length = 0;
gdjs.StudioCode.GDCriarObjects1.length = 0;
gdjs.StudioCode.GDCriarObjects2.length = 0;
gdjs.StudioCode.GDCriar_9595TextObjects1.length = 0;
gdjs.StudioCode.GDCriar_9595TextObjects2.length = 0;
gdjs.StudioCode.GDQuiosqueIconObjects1.length = 0;
gdjs.StudioCode.GDQuiosqueIconObjects2.length = 0;
gdjs.StudioCode.GDghObjects1.length = 0;
gdjs.StudioCode.GDghObjects2.length = 0;
gdjs.StudioCode.GDCreateObjects1.length = 0;
gdjs.StudioCode.GDCreateObjects2.length = 0;
gdjs.StudioCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.StudioCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.StudioCode.GDHelpObjects1.length = 0;
gdjs.StudioCode.GDHelpObjects2.length = 0;
gdjs.StudioCode.GDText_9595showObjects1.length = 0;
gdjs.StudioCode.GDText_9595showObjects2.length = 0;
gdjs.StudioCode.GDQuiosqueInfoObjects1.length = 0;
gdjs.StudioCode.GDQuiosqueInfoObjects2.length = 0;
gdjs.StudioCode.GDnomeObjects1.length = 0;
gdjs.StudioCode.GDnomeObjects2.length = 0;
gdjs.StudioCode.GDIDObjects1.length = 0;
gdjs.StudioCode.GDIDObjects2.length = 0;
gdjs.StudioCode.GDCreate2Objects1.length = 0;
gdjs.StudioCode.GDCreate2Objects2.length = 0;
gdjs.StudioCode.GDEntrarObjects1.length = 0;
gdjs.StudioCode.GDEntrarObjects2.length = 0;
gdjs.StudioCode.GDEditarObjects1.length = 0;
gdjs.StudioCode.GDEditarObjects2.length = 0;
gdjs.StudioCode.GDCollisiionObjects1.length = 0;
gdjs.StudioCode.GDCollisiionObjects2.length = 0;
gdjs.StudioCode.GDiconObjects1.length = 0;
gdjs.StudioCode.GDiconObjects2.length = 0;
gdjs.StudioCode.GDborder3Objects1.length = 0;
gdjs.StudioCode.GDborder3Objects2.length = 0;
gdjs.StudioCode.GDNewSprite2Objects1.length = 0;
gdjs.StudioCode.GDNewSprite2Objects2.length = 0;
gdjs.StudioCode.GDStObjects1.length = 0;
gdjs.StudioCode.GDStObjects2.length = 0;
gdjs.StudioCode.GDNewSprite3Objects1.length = 0;
gdjs.StudioCode.GDNewSprite3Objects2.length = 0;
gdjs.StudioCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.StudioCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.StudioCode.GDborderObjects1.length = 0;
gdjs.StudioCode.GDborderObjects2.length = 0;
gdjs.StudioCode.GDborder2Objects1.length = 0;
gdjs.StudioCode.GDborder2Objects2.length = 0;
gdjs.StudioCode.GDbuttonPlaceObjects1.length = 0;
gdjs.StudioCode.GDbuttonPlaceObjects2.length = 0;
gdjs.StudioCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.StudioCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.StudioCode.GDbuttonPlace2Objects1.length = 0;
gdjs.StudioCode.GDbuttonPlace2Objects2.length = 0;


return;

}

gdjs['StudioCode'] = gdjs.StudioCode;
