gdjs.DemoCode = {};
gdjs.DemoCode.localVariables = [];
gdjs.DemoCode.GDLoadObjects1= [];
gdjs.DemoCode.GDLoadObjects2= [];
gdjs.DemoCode.GDNewTextObjects1= [];
gdjs.DemoCode.GDNewTextObjects2= [];
gdjs.DemoCode.GDborder3Objects1= [];
gdjs.DemoCode.GDborder3Objects2= [];
gdjs.DemoCode.GDNewSprite2Objects1= [];
gdjs.DemoCode.GDNewSprite2Objects2= [];
gdjs.DemoCode.GDStObjects1= [];
gdjs.DemoCode.GDStObjects2= [];
gdjs.DemoCode.GDNewSprite3Objects1= [];
gdjs.DemoCode.GDNewSprite3Objects2= [];
gdjs.DemoCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.DemoCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.DemoCode.GDborderObjects1= [];
gdjs.DemoCode.GDborderObjects2= [];
gdjs.DemoCode.GDborder2Objects1= [];
gdjs.DemoCode.GDborder2Objects2= [];
gdjs.DemoCode.GDbuttonPlaceObjects1= [];
gdjs.DemoCode.GDbuttonPlaceObjects2= [];
gdjs.DemoCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.DemoCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.DemoCode.GDbuttonPlace2Objects1= [];
gdjs.DemoCode.GDbuttonPlace2Objects2= [];


gdjs.DemoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "inicial Demo");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Demo1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Load"), gdjs.DemoCode.GDLoadObjects1);
{for(var i = 0, len = gdjs.DemoCode.GDLoadObjects1.length ;i < len;++i) {
    gdjs.DemoCode.GDLoadObjects1[i].play();
}
}}

}


};

gdjs.DemoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DemoCode.GDLoadObjects1.length = 0;
gdjs.DemoCode.GDLoadObjects2.length = 0;
gdjs.DemoCode.GDNewTextObjects1.length = 0;
gdjs.DemoCode.GDNewTextObjects2.length = 0;
gdjs.DemoCode.GDborder3Objects1.length = 0;
gdjs.DemoCode.GDborder3Objects2.length = 0;
gdjs.DemoCode.GDNewSprite2Objects1.length = 0;
gdjs.DemoCode.GDNewSprite2Objects2.length = 0;
gdjs.DemoCode.GDStObjects1.length = 0;
gdjs.DemoCode.GDStObjects2.length = 0;
gdjs.DemoCode.GDNewSprite3Objects1.length = 0;
gdjs.DemoCode.GDNewSprite3Objects2.length = 0;
gdjs.DemoCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.DemoCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.DemoCode.GDborderObjects1.length = 0;
gdjs.DemoCode.GDborderObjects2.length = 0;
gdjs.DemoCode.GDborder2Objects1.length = 0;
gdjs.DemoCode.GDborder2Objects2.length = 0;
gdjs.DemoCode.GDbuttonPlaceObjects1.length = 0;
gdjs.DemoCode.GDbuttonPlaceObjects2.length = 0;
gdjs.DemoCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.DemoCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.DemoCode.GDbuttonPlace2Objects1.length = 0;
gdjs.DemoCode.GDbuttonPlace2Objects2.length = 0;

gdjs.DemoCode.eventsList0(runtimeScene);
gdjs.DemoCode.GDLoadObjects1.length = 0;
gdjs.DemoCode.GDLoadObjects2.length = 0;
gdjs.DemoCode.GDNewTextObjects1.length = 0;
gdjs.DemoCode.GDNewTextObjects2.length = 0;
gdjs.DemoCode.GDborder3Objects1.length = 0;
gdjs.DemoCode.GDborder3Objects2.length = 0;
gdjs.DemoCode.GDNewSprite2Objects1.length = 0;
gdjs.DemoCode.GDNewSprite2Objects2.length = 0;
gdjs.DemoCode.GDStObjects1.length = 0;
gdjs.DemoCode.GDStObjects2.length = 0;
gdjs.DemoCode.GDNewSprite3Objects1.length = 0;
gdjs.DemoCode.GDNewSprite3Objects2.length = 0;
gdjs.DemoCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.DemoCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.DemoCode.GDborderObjects1.length = 0;
gdjs.DemoCode.GDborderObjects2.length = 0;
gdjs.DemoCode.GDborder2Objects1.length = 0;
gdjs.DemoCode.GDborder2Objects2.length = 0;
gdjs.DemoCode.GDbuttonPlaceObjects1.length = 0;
gdjs.DemoCode.GDbuttonPlaceObjects2.length = 0;
gdjs.DemoCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.DemoCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.DemoCode.GDbuttonPlace2Objects1.length = 0;
gdjs.DemoCode.GDbuttonPlace2Objects2.length = 0;


return;

}

gdjs['DemoCode'] = gdjs.DemoCode;
