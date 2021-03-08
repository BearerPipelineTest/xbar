// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

const backend = {
  "main": {
    "CategoriesService": {
      /**
       * GetCategories
       * @returns {Promise<Array.<any>|Error>}  - Go Type: []main.Category
       */
      "GetCategories": () => {
        return window.backend.main.CategoriesService.GetCategories();
      },
    }
    "CommandService": {
      /**
       * OpenFile
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<Error>}  - Go Type: error
       */
      "OpenFile": (arg1) => {
        return window.backend.main.CommandService.OpenFile(arg1);
      },
      /**
       * OpenPath
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<Error>}  - Go Type: error
       */
      "OpenPath": (arg1) => {
        return window.backend.main.CommandService.OpenPath(arg1);
      },
      /**
       * OpenURL
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<Error>}  - Go Type: error
       */
      "OpenURL": (arg1) => {
        return window.backend.main.CommandService.OpenURL(arg1);
      },
    }
    "PersonService": {
      /**
       * GetPersonDetails
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<any|Error>}  - Go Type: *main.PersonDetails
       */
      "GetPersonDetails": (arg1) => {
        return window.backend.main.PersonService.GetPersonDetails(arg1);
      },
    }
    "PluginsService": {
      /**
       * GetFeaturedPlugins
       * @returns {Promise<Array.<any>|Error>}  - Go Type: []metadata.Plugin
       */
      "GetFeaturedPlugins": () => {
        return window.backend.main.PluginsService.GetFeaturedPlugins();
      },
      /**
       * GetInstalledPluginMetadata
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<any|Error>}  - Go Type: *main.InstalledPluginMetadata
       */
      "GetInstalledPluginMetadata": (arg1) => {
        return window.backend.main.PluginsService.GetInstalledPluginMetadata(arg1);
      },
      /**
       * GetInstalledPlugins
       * @returns {Promise<Array.<any>|Error>}  - Go Type: []plugins.InstalledPlugin
       */
      "GetInstalledPlugins": () => {
        return window.backend.main.PluginsService.GetInstalledPlugins();
      },
      /**
       * GetPlugin
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<any|Error>}  - Go Type: *metadata.Plugin
       */
      "GetPlugin": (arg1) => {
        return window.backend.main.PluginsService.GetPlugin(arg1);
      },
      /**
       * GetPlugins
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<Array.<any>|Error>}  - Go Type: []metadata.Plugin
       */
      "GetPlugins": (arg1) => {
        return window.backend.main.PluginsService.GetPlugins(arg1);
      },
      /**
       * InstallPlugin
       * @param {any} arg1 - Go Type: metadata.Plugin
       * @returns {Promise<string|Error>}  - Go Type: string
       */
      "InstallPlugin": (arg1) => {
        return window.backend.main.PluginsService.InstallPlugin(arg1);
      },
      /**
       * LoadVariableValues
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<any|Error>}  - Go Type: map[string]interface {}
       */
      "LoadVariableValues": (arg1) => {
        return window.backend.main.PluginsService.LoadVariableValues(arg1);
      },
      /**
       * SaveVariableValues
       * @param {string} arg1 - Go Type: string
       * @param {any} arg2 - Go Type: map[string]interface {}
       * @returns {Promise<Error>}  - Go Type: error
       */
      "SaveVariableValues": (arg1, arg2) => {
        return window.backend.main.PluginsService.SaveVariableValues(arg1, arg2);
      },
      /**
       * SetEnabled
       * @param {string} arg1 - Go Type: string
       * @param {boolean} arg2 - Go Type: bool
       * @returns {Promise<string|Error>}  - Go Type: string
       */
      "SetEnabled": (arg1, arg2) => {
        return window.backend.main.PluginsService.SetEnabled(arg1, arg2);
      },
      /**
       * SetRefreshInterval
       * @param {string} arg1 - Go Type: string
       * @param {any} arg2 - Go Type: plugins.RefreshInterval
       * @returns {Promise<any|Error>}  - Go Type: *main.SetRefreshIntervalResult
       */
      "SetRefreshInterval": (arg1, arg2) => {
        return window.backend.main.PluginsService.SetRefreshInterval(arg1, arg2);
      },
      /**
       * UninstallPlugin
       * @param {any} arg1 - Go Type: main.UninstallPluginRequest
       * @returns {Promise<Error>}  - Go Type: error
       */
      "UninstallPlugin": (arg1) => {
        return window.backend.main.PluginsService.UninstallPlugin(arg1);
      },
    }
  }

};
export default backend;
