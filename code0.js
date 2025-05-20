gdjs.Cena_32sem_32t_237tuloCode = {};
gdjs.Cena_32sem_32t_237tuloCode.localVariables = [];
gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewPanelSpriteObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewPanelSpriteObjects2= [];
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


gdjs.Cena_32sem_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1[i].hide();
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

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E_Mail"), gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1);
{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1.length === 0 ) ? "" :gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1[0].getBehavior("Text").getText()), (( gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1.length === 0 ) ? "" :gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", "0", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProjFavo", "0", gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
}

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
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewPanelSpriteObjects2.length = 0;
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

gdjs.Cena_32sem_32t_237tuloCode.eventsList0(runtimeScene);
gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDE_9595MailObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSenhaObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite4Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSprite5Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewPanelSpriteObjects2.length = 0;
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


return;

}

gdjs['Cena_32sem_32t_237tuloCode'] = gdjs.Cena_32sem_32t_237tuloCode;
