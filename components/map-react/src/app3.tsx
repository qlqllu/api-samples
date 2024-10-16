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
  const [view, setView] = React.useState<any>(null)
  const mapRef = React.useRef<any>(null)

  // This is required to re-render the legend when the view changes.
  const onArcgisViewReadyChange = (event: CustomEvent) => {
    if (!event.target) {
      return
    }
    setView((event.target as any).view)
  }

  return <React.StrictMode>
    <ArcgisMap ref={mapRef} item-id="d5dda743788a4b0688fe48f43ae7beb9" onArcgisViewReadyChange={onArcgisViewReadyChange}>
    </ArcgisMap>

    {<ArcgisLegend style={{position: 'absolute', bottom: 10, left: 10}} referenceElement={mapRef.current}></ArcgisLegend>}
  </React.StrictMode>
}