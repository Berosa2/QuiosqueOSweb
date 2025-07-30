
gdjs.evtsExt__Icones__COnfigura_231_227o_Avan_231ada = gdjs.evtsExt__Icones__COnfigura_231_227o_Avan_231ada || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__Icones__COnfigura_231_227o_Avan_231ada.COnfiguração_Avançada = class COnfiguração_Avançada extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:

gdjs.evtsExt__Icones__COnfigura_231_227o_Avan_231ada.COnfiguração_Avançada.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("Icones::COnfiguração_Avançada", gdjs.evtsExt__Icones__COnfigura_231_227o_Avan_231ada.COnfiguração_Avançada);
