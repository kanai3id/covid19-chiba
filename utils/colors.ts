export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#00aaff',
  fillColor: '#00aaff'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#0077ff',
  fillColor: '#0077ff'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#0000ff',
  fillColor: '#0000ff'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleB]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
