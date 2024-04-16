import React from "react";
import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
import * as esriIntl from '@arcgis/core/intl'
import esriConfig from "@arcgis/core/config"

esriIntl.setLocale('zh-cn')
// esriConfig.assetsPath = "https://rqawinbi01pt.ags.esri.com/gis/jsapi/jsapi4/@arcgis/core/assets"
esriConfig.assetsPath = "https://js.arcgis.com/4.29/@arcgis/core/assets"

/**
 * Use onArcgisViewReadyChange and onArcgisLegendReady.
 */
export function App() {
  const [view, setView] = React.useState<any>(null)

  const onArcgisViewReadyChange = (event: CustomEvent) => {
    if (!event.target) {
      return
    }
    setView((event.target as any).view)
  }
  const onArcgisLegendReady = (event: CustomEvent) => {
    if (!event.target) {
      return
    }

    (event.target as any).view = view
  }

  return <React.StrictMode>
    <ArcgisMap item-id="d5dda743788a4b0688fe48f43ae7beb9" onArcgisViewReadyChange={onArcgisViewReadyChange}>
    </ArcgisMap>

    {view && <ArcgisLegend onArcgisLegendReady={onArcgisLegendReady}></ArcgisLegend>}
  </React.StrictMode>
}