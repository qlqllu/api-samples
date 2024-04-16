import React from "react";
import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
import * as esriIntl from '@arcgis/core/intl'
import esriConfig from "@arcgis/core/config"

esriIntl.setLocale('zh-cn')
esriConfig.assetsPath = "https://rqawinbi01pt.ags.esri.com/gis/jsapi/jsapi4/@arcgis/core/assets"

export function App() {
  return <React.StrictMode>
    <ArcgisMap item-id="d5dda743788a4b0688fe48f43ae7beb9">
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>
    </ArcgisMap>
  </React.StrictMode>
}