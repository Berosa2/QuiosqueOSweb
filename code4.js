gdjs.StudioCode = {};
gdjs.StudioCode.localVariables = [];
gdjs.StudioCode.GDBackgroundObjects1= [];
gdjs.StudioCode.GDBackgroundObjects2= [];
gdjs.StudioCode.GDCriarObjects1= [];
gdjs.StudioCode.GDCriarObjects2= [];
gdjs.StudioCode.GDCriar_9595TextObjects1= [];
gdjs.StudioCode.GDCriar_9595TextObjects2= [];
gdjs.StudioCode.GDNewSprite4Objects1= [];
gdjs.StudioCode.GDNewSprite4Objects2= [];
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
gdjs.StudioCode.GDJsonObjects1= [];
gdjs.StudioCode.GDJsonObjects2= [];
gdjs.StudioCode.GDnomeObjects1= [];
gdjs.StudioCode.GDnomeObjects2= [];
gdjs.StudioCode.GDIDObjects1= [];
gdjs.StudioCode.GDIDObjects2= [];
gdjs.StudioCode.GDCreate2Objects1= [];
gdjs.StudioCode.GDCreate2Objects2= [];
gdjs.StudioCode.GDNewPanelSpriteObjects1= [];
gdjs.StudioCode.GDNewPanelSpriteObjects2= [];
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


gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.StudioCode.GDNewSprite4Objects1});
gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.StudioCode.GDNewSprite4Objects1});
gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDghObjects2Objects = Hashtable.newFrom({"gh": gdjs.StudioCode.GDghObjects2});
gdjs.StudioCode.asyncCallback13997044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StudioCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.StudioCode.GDNewSprite4Objects2);

gdjs.StudioCode.GDghObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDghObjects2Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "");
}{for(var i = 0, len = gdjs.StudioCode.GDghObjects2.length ;i < len;++i) {
    gdjs.StudioCode.GDghObjects2[i].setPosition((( gdjs.StudioCode.GDNewSprite4Objects2.length === 0 ) ? 0 :gdjs.StudioCode.GDNewSprite4Objects2[0].getPointX("Point")),(( gdjs.StudioCode.GDNewSprite4Objects2.length === 0 ) ? 0 :gdjs.StudioCode.GDNewSprite4Objects2[0].getPointY("Point")));
}
}{for(var i = 0, len = gdjs.StudioCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.StudioCode.GDNewSprite4Objects2[i].returnVariable(gdjs.StudioCode.GDNewSprite4Objects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
}{for(var i = 0, len = gdjs.StudioCode.GDghObjects2.length ;i < len;++i) {
    gdjs.StudioCode.GDghObjects2[i].getBehavior("Text").setText("Nome: " + runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() + "\nID: " + runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
}gdjs.StudioCode.localVariables.length = 0;
}
gdjs.StudioCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StudioCode.localVariables);
for (const obj of gdjs.StudioCode.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.StudioCode.asyncCallback13997044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StudioCode.asyncCallback14002844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StudioCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Create");
}gdjs.StudioCode.localVariables.length = 0;
}
gdjs.StudioCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StudioCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StudioCode.asyncCallback14002844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StudioCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.StudioCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Criar_Text"), gdjs.StudioCode.GDCriar_9595TextObjects1);
/* Reuse gdjs.StudioCode.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.StudioCode.GDCriar_9595TextObjects1.length ;i < len;++i) {
    gdjs.StudioCode.GDCriar_9595TextObjects1[i].getBehavior("Text").setText(((gdjs.StudioCode.GDNewSprite4Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.StudioCode.GDNewSprite4Objects1[0].getVariables()).getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.StudioCode.GDNewSprite4Objects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() + "ID", runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StudioCode.mapOfGDgdjs_9546StudioCode_9546GDNewSprite4Objects1Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "");
}{for(var i = 0, len = gdjs.StudioCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.StudioCode.GDNewSprite4Objects1[i].setColor(gdjs.evtTools.common.toString(gdjs.random(255)) + ";" + gdjs.evtTools.common.toString(gdjs.random(255)) + ";" + gdjs.evtTools.common.toString(gdjs.random(255)));
}
}{for(var i = 0, len = gdjs.StudioCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.StudioCode.GDNewSprite4Objects1[i].getBehavior("Resizable").setSize(97, 134);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(144);
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString(), "Nome", runtimeScene.getScene().getVariables().getFromIndex(7), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.StudioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Criar"), gdjs.StudioCode.GDCriarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDCriarObjects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDCriarObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDCriarObjects1[k] = gdjs.StudioCode.GDCriarObjects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDCriarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "criar menu");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 1);
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

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.StudioCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StudioCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.StudioCode.GDNewSprite4Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StudioCode.GDNewSprite4Objects1[k] = gdjs.StudioCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.StudioCode.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StudioCode.GDNewSprite4Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(((gdjs.StudioCode.GDNewSprite4Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.StudioCode.GDNewSprite4Objects1[0].getVariables()).getFromIndex(0).getAsString());
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Create");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}}

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
/* Reuse gdjs.StudioCode.GDIDObjects1 */
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.StudioCode.GDnomeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.StudioCode.GDIDObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDIDObjects1[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), (( gdjs.StudioCode.GDnomeObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDnomeObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField((( gdjs.StudioCode.GDIDObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDIDObjects1[0].getBehavior("Text").getText()), "Name", (( gdjs.StudioCode.GDnomeObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDnomeObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + "ID", (( gdjs.StudioCode.GDIDObjects1.length === 0 ) ? "" :gdjs.StudioCode.GDIDObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.StudioCode.eventsList1(runtimeScene);} //End of subevents
}

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
gdjs.StudioCode.GDNewSprite4Objects1.length = 0;
gdjs.StudioCode.GDNewSprite4Objects2.length = 0;
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
gdjs.StudioCode.GDJsonObjects1.length = 0;
gdjs.StudioCode.GDJsonObjects2.length = 0;
gdjs.StudioCode.GDnomeObjects1.length = 0;
gdjs.StudioCode.GDnomeObjects2.length = 0;
gdjs.StudioCode.GDIDObjects1.length = 0;
gdjs.StudioCode.GDIDObjects2.length = 0;
gdjs.StudioCode.GDCreate2Objects1.length = 0;
gdjs.StudioCode.GDCreate2Objects2.length = 0;
gdjs.StudioCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.StudioCode.GDNewPanelSpriteObjects2.length = 0;
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

gdjs.StudioCode.eventsList2(runtimeScene);
gdjs.StudioCode.GDBackgroundObjects1.length = 0;
gdjs.StudioCode.GDBackgroundObjects2.length = 0;
gdjs.StudioCode.GDCriarObjects1.length = 0;
gdjs.StudioCode.GDCriarObjects2.length = 0;
gdjs.StudioCode.GDCriar_9595TextObjects1.length = 0;
gdjs.StudioCode.GDCriar_9595TextObjects2.length = 0;
gdjs.StudioCode.GDNewSprite4Objects1.length = 0;
gdjs.StudioCode.GDNewSprite4Objects2.length = 0;
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
gdjs.StudioCode.GDJsonObjects1.length = 0;
gdjs.StudioCode.GDJsonObjects2.length = 0;
gdjs.StudioCode.GDnomeObjects1.length = 0;
gdjs.StudioCode.GDnomeObjects2.length = 0;
gdjs.StudioCode.GDIDObjects1.length = 0;
gdjs.StudioCode.GDIDObjects2.length = 0;
gdjs.StudioCode.GDCreate2Objects1.length = 0;
gdjs.StudioCode.GDCreate2Objects2.length = 0;
gdjs.StudioCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.StudioCode.GDNewPanelSpriteObjects2.length = 0;
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


return;

}

gdjs['StudioCode'] = gdjs.StudioCode;
