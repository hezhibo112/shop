import AMap from "AMap";
const map = new AMap.Map("container");
export const getMap = (pluginsname, options) => {
    return new Promise((resolve) => {
        AMap.plugin(pluginsname, function () {
            let newPluginsname = pluginsname.split('.')[1]
            var Plugins = new AMap[newPluginsname](options);
            map.addControl(Plugins);
            resolve(Plugins)
        });
    })
}