import React from "react";
import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
import * as esriIntl from '@arcgis/core/intl'
import esriConfig from "@arcgis/core/config"

esriIntl.setLocale('zh-cn')
// esriConfig.assetsPath = "https://rqawinbi01pt.ags.esri.com/gis/jsapi/jsapi4/@arcgis/core/assets"
esriConfig.assetsPath = "https://jsdev.arcgis.com/4.31/@arcgis/core/assets"

/**
 * Use onArcgisViewReadyChange
 */
export function App() {
  const legendRef = React.useRef<any>(null)

  const onArcgisViewReadyChange = (event: CustomEvent) => {
    if (!event.target || !legendRef.current) {
      return
    }
    legendRef.current.view = (event.target as any).view
  }

  return <React.StrictMode>
    <ArcgisMap item-id="d5dda743788a4b0688fe48f43ae7beb9" onArcgisViewReadyChange={onArcgisViewReadyChange}>
    </ArcgisMap>

    {<ArcgisLegend ref={legendRef} style={{position: 'absolute', bottom: 10, left: 10}}></ArcgisLegend>}
  </React.StrictMode>
}