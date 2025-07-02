gdjs.Cena_32sem_32t_237tuloCode = {};
gdjs.Cena_32sem_32t_237tuloCode.localVariables = [];
gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewText2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewText2Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDborder3Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDborder3Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDStObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDStObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite3Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite3Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDborderObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDborderObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDborder2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDborder2Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlaceObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlaceObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlace2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlace2Objects2= [];


gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDNewSprite2Objects1ObjectsGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDcriarObjects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1, "criar": gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1});
gdjs.Cena_32sem_32t_237tuloCode.mapOf = Hashtable.newFrom({});
gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDCriarObjects1Objects = Hashtable.newFrom({"Criar": gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1});
gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDConnectObjects1Objects = Hashtable.newFrom({"Connect": gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1});
gdjs.Cena_32sem_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("criar"), gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "tela de quiosque");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E_Mail"), gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1.length === 0 ) ? "" :gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1[0].getBehavior("Text").getText()), (( gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1.length === 0 ) ? "" :gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
}

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

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("criar"), gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDNewSprite2Objects1ObjectsGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDcriarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOf, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("criar"), gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E_Mail"), gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1);
{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1.length === 0 ) ? "" :gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1[0].getBehavior("Text").getText()), (( gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1.length === 0 ) ? "" :gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", "0", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProjFavo", "0", gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Criar"), gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDCriarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1[i].setCharacterSize(47);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Criar"), gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1[i].setCharacterSize(50);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Connect"), gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1[i].setCharacterSize(50);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Connect"), gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDConnectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1[i].setCharacterSize(47);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "tela de quiosque");
}}

}


};

gdjs.Cena_32sem_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewText2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewText2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborder3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborder3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborderObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborderObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborder2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborder2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlaceObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlaceObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlace2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlace2Objects2.length = 0;

gdjs.Cena_32sem_32t_237tuloCode.eventsList0(runtimeScene);
gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcriarObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewText2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewText2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDCriarObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDConnectObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborder3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborder3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborderObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborderObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborder2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDborder2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlaceObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlaceObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlace2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDbuttonPlace2Objects2.length = 0;


return;

}

gdjs['Cena_32sem_32t_237tuloCode'] = gdjs.Cena_32sem_32t_237tuloCode;
