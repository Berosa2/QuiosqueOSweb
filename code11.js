gdjs.HellWeahCode = {};
gdjs.HellWeahCode.localVariables = [];
gdjs.HellWeahCode.GDCOnfigura_95231_95227o_9595Avan_95231adaObjects1= [];
gdjs.HellWeahCode.GDCOnfigura_95231_95227o_9595Avan_95231adaObjects2= [];
gdjs.HellWeahCode.GDNewTextObjects1= [];
gdjs.HellWeahCode.GDNewTextObjects2= [];
gdjs.HellWeahCode.GDC4Objects1= [];
gdjs.HellWeahCode.GDC4Objects2= [];
gdjs.HellWeahCode.GDC5Objects1= [];
gdjs.HellWeahCode.GDC5Objects2= [];
gdjs.HellWeahCode.GDC6Objects1= [];
gdjs.HellWeahCode.GDC6Objects2= [];
gdjs.HellWeahCode.GDborder3Objects1= [];
gdjs.HellWeahCode.GDborder3Objects2= [];
gdjs.HellWeahCode.GDNewSprite2Objects1= [];
gdjs.HellWeahCode.GDNewSprite2Objects2= [];
gdjs.HellWeahCode.GDStObjects1= [];
gdjs.HellWeahCode.GDStObjects2= [];
gdjs.HellWeahCode.GDNewSprite3Objects1= [];
gdjs.HellWeahCode.GDNewSprite3Objects2= [];
gdjs.HellWeahCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.HellWeahCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.HellWeahCode.GDborderObjects1= [];
gdjs.HellWeahCode.GDborderObjects2= [];
gdjs.HellWeahCode.GDborder2Objects1= [];
gdjs.HellWeahCode.GDborder2Objects2= [];
gdjs.HellWeahCode.GDbuttonPlaceObjects1= [];
gdjs.HellWeahCode.GDbuttonPlaceObjects2= [];
gdjs.HellWeahCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.HellWeahCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.HellWeahCode.GDbuttonPlace2Objects1= [];
gdjs.HellWeahCode.GDbuttonPlace2Objects2= [];


gdjs.HellWeahCode.asyncCallback17670164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HellWeahCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.HellWeahCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.HellWeahCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.HellWeahCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.HellWeahCode.GDNewTextObjects2[i].getBehavior("Text").getText() + (" " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()));
}
}gdjs.HellWeahCode.localVariables.length = 0;
}
gdjs.HellWeahCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HellWeahCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HellWeahCode.asyncCallback17670164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HellWeahCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("ConfAva", "Nivel", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField("ConfAva", "C1", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField("ConfAva", "C2", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField("ConfAva", "C3", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Senha", runtimeScene.getScene().getVariables().getFromIndex(4), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.HellWeahCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("C4"), gdjs.HellWeahCode.GDC4Objects1);
gdjs.copyArray(runtimeScene.getObjects("C5"), gdjs.HellWeahCode.GDC5Objects1);
gdjs.copyArray(runtimeScene.getObjects("C6"), gdjs.HellWeahCode.GDC6Objects1);
{for(var i = 0, len = gdjs.HellWeahCode.GDC4Objects1.length ;i < len;++i) {
    gdjs.HellWeahCode.GDC4Objects1[i].SetLabelText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.HellWeahCode.GDC5Objects1.length ;i < len;++i) {
    gdjs.HellWeahCode.GDC5Objects1[i].SetLabelText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.HellWeahCode.GDC6Objects1.length ;i < len;++i) {
    gdjs.HellWeahCode.GDC6Objects1[i].SetLabelText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("C4"), gdjs.HellWeahCode.GDC4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellWeahCode.GDC4Objects1.length;i<l;++i) {
    if ( gdjs.HellWeahCode.GDC4Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HellWeahCode.GDC4Objects1[k] = gdjs.HellWeahCode.GDC4Objects1[i];
        ++k;
    }
}
gdjs.HellWeahCode.GDC4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "Deletar Conta");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.userManagement.dangerous.deleteUser(gdjs.evtTools.firebaseTools.auth.userManagement.getEmail(), runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.deleteVariable(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("C5"), gdjs.HellWeahCode.GDC5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellWeahCode.GDC5Objects1.length;i<l;++i) {
    if ( gdjs.HellWeahCode.GDC5Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HellWeahCode.GDC5Objects1[k] = gdjs.HellWeahCode.GDC5Objects1[i];
        ++k;
    }
}
gdjs.HellWeahCode.GDC5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "Registros Avançados");
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), gdjs.evtTools.firebaseTools.auth.userManagement.getEmail() + "\n" + gdjs.evtTools.firebaseTools.auth.userManagement.getCreationTime() + "\n" + gdjs.evtTools.firebaseTools.auth.token(gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName()) + "\n" + gdjs.evtTools.firebaseTools.auth.userManagement.getLastLoginTime() + "\n" + gdjs.evtTools.firebaseTools.auth.userManagement.getPhoneNumber() + "\n" + gdjs.evtTools.firebaseTools.auth.userManagement.getPhotoURL() + "\n" + gdjs.evtTools.firebaseTools.auth.userManagement.getRefreshToken() + "\n" + gdjs.evtTools.firebaseTools.auth.userManagement.getTenantID() + "\n" + gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName() + "\n" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID() + "\n" + gdjs.evtTools.firebaseTools.firestore.getServerTimestamp(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("C5"), gdjs.HellWeahCode.GDC5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellWeahCode.GDC5Objects1.length;i<l;++i) {
    if ( gdjs.HellWeahCode.GDC5Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HellWeahCode.GDC5Objects1[k] = gdjs.HellWeahCode.GDC5Objects1[i];
        ++k;
    }
}
gdjs.HellWeahCode.GDC5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(3).getAsString()).endsWith("Vlog"));
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, "Vlog " + gdjs.evtTools.firebaseTools.auth.userManagement.getLastLoginTime() + " " + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Vlog teste, esse codigo e para uma futura inteligencia que fazera um resumo do que você(" + gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName() + ") fez.\nApenas posso pegar seu UID (" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID() + ") e outras poucas coisas.\nSeu numero de telefone e " + gdjs.evtTools.firebaseTools.auth.userManagement.getPhoneNumber() + "?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.HellWeahCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HellWeahCode.GDCOnfigura_95231_95227o_9595Avan_95231adaObjects1.length = 0;
gdjs.HellWeahCode.GDCOnfigura_95231_95227o_9595Avan_95231adaObjects2.length = 0;
gdjs.HellWeahCode.GDNewTextObjects1.length = 0;
gdjs.HellWeahCode.GDNewTextObjects2.length = 0;
gdjs.HellWeahCode.GDC4Objects1.length = 0;
gdjs.HellWeahCode.GDC4Objects2.length = 0;
gdjs.HellWeahCode.GDC5Objects1.length = 0;
gdjs.HellWeahCode.GDC5Objects2.length = 0;
gdjs.HellWeahCode.GDC6Objects1.length = 0;
gdjs.HellWeahCode.GDC6Objects2.length = 0;
gdjs.HellWeahCode.GDborder3Objects1.length = 0;
gdjs.HellWeahCode.GDborder3Objects2.length = 0;
gdjs.HellWeahCode.GDNewSprite2Objects1.length = 0;
gdjs.HellWeahCode.GDNewSprite2Objects2.length = 0;
gdjs.HellWeahCode.GDStObjects1.length = 0;
gdjs.HellWeahCode.GDStObjects2.length = 0;
gdjs.HellWeahCode.GDNewSprite3Objects1.length = 0;
gdjs.HellWeahCode.GDNewSprite3Objects2.length = 0;
gdjs.HellWeahCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.HellWeahCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.HellWeahCode.GDborderObjects1.length = 0;
gdjs.HellWeahCode.GDborderObjects2.length = 0;
gdjs.HellWeahCode.GDborder2Objects1.length = 0;
gdjs.HellWeahCode.GDborder2Objects2.length = 0;
gdjs.HellWeahCode.GDbuttonPlaceObjects1.length = 0;
gdjs.HellWeahCode.GDbuttonPlaceObjects2.length = 0;
gdjs.HellWeahCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.HellWeahCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.HellWeahCode.GDbuttonPlace2Objects1.length = 0;
gdjs.HellWeahCode.GDbuttonPlace2Objects2.length = 0;

gdjs.HellWeahCode.eventsList1(runtimeScene);
gdjs.HellWeahCode.GDCOnfigura_95231_95227o_9595Avan_95231adaObjects1.length = 0;
gdjs.HellWeahCode.GDCOnfigura_95231_95227o_9595Avan_95231adaObjects2.length = 0;
gdjs.HellWeahCode.GDNewTextObjects1.length = 0;
gdjs.HellWeahCode.GDNewTextObjects2.length = 0;
gdjs.HellWeahCode.GDC4Objects1.length = 0;
gdjs.HellWeahCode.GDC4Objects2.length = 0;
gdjs.HellWeahCode.GDC5Objects1.length = 0;
gdjs.HellWeahCode.GDC5Objects2.length = 0;
gdjs.HellWeahCode.GDC6Objects1.length = 0;
gdjs.HellWeahCode.GDC6Objects2.length = 0;
gdjs.HellWeahCode.GDborder3Objects1.length = 0;
gdjs.HellWeahCode.GDborder3Objects2.length = 0;
gdjs.HellWeahCode.GDNewSprite2Objects1.length = 0;
gdjs.HellWeahCode.GDNewSprite2Objects2.length = 0;
gdjs.HellWeahCode.GDStObjects1.length = 0;
gdjs.HellWeahCode.GDStObjects2.length = 0;
gdjs.HellWeahCode.GDNewSprite3Objects1.length = 0;
gdjs.HellWeahCode.GDNewSprite3Objects2.length = 0;
gdjs.HellWeahCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.HellWeahCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.HellWeahCode.GDborderObjects1.length = 0;
gdjs.HellWeahCode.GDborderObjects2.length = 0;
gdjs.HellWeahCode.GDborder2Objects1.length = 0;
gdjs.HellWeahCode.GDborder2Objects2.length = 0;
gdjs.HellWeahCode.GDbuttonPlaceObjects1.length = 0;
gdjs.HellWeahCode.GDbuttonPlaceObjects2.length = 0;
gdjs.HellWeahCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.HellWeahCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.HellWeahCode.GDbuttonPlace2Objects1.length = 0;
gdjs.HellWeahCode.GDbuttonPlace2Objects2.length = 0;


return;

}

gdjs['HellWeahCode'] = gdjs.HellWeahCode;
