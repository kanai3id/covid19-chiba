// import dayjs from 'dayjs'

const headers = [
  { text: 'No', value: 'No' },
  { text: '市町村', value: '市町村' },
  { text: '感染者数', value: '感染者数' },
  { text: '増加', value: '増加' }
]

type DataType = {
  No: number
  市町村: string
  感染者数: number
  増加: number
  [key: string]: any
}

type TableDataType = {
  No: DataType['No']
  市町村: DataType['市町村']
  感染者数: DataType['感染者数']
  増加: DataType['増加']
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      No: d['No'],
      市町村: d['市町村'],
      感染者数: d['感染者数'],
      増加: d['増加']
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) =>
    a.感染者数 === b.感染者数 ? 0 : a.感染者数 < b.感染者数 ? 1 : -1
  )
  return tableDate
}
