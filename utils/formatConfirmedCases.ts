type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '療養中患者数'
          value: number
        },
        {
          attr: '入院中'
          value: number
        },
        {
          attr: '重症'
          value: number
        },
        {
          attr: 'ホテル療養'
          value: number
        },
        {
          attr: '宅療養'
          value: number
        },
        {
          attr: '施設内療養'
          value: number
        },
        {
          attr: '調整中'
          value: number
        },
        {
          attr: 'その他'
          value: number
        },
        {
          attr: '退院'
          value: number
        },
        {
          attr: '療養解除'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施人数: number
  陽性患者数: number
  療養中患者数: number
  入院中: number
  重症: number
  ホテル療養: number
  自宅療養: number
  施設内療養: number
  調整中: number
  その他: number
  退院: number
  療養解除: number
  死亡: number
}

interface ChildData {
  attr: string
  value: number
}

type ChildDataType = {
  attr?: string
  value?: number
  children?: ChildData[]
}

function getSelectedItem(data: DataType, key: string) {
  let result: number | undefined
  const recursiveSearch = (data: ChildDataType) => {
    if (result) {
      return
    }
    if (data.attr === key) {
      result = data.value
    } else if (data.children) {
      data.children.forEach((child: ChildDataType) => {
        if (result) {
          return
        }
        recursiveSearch(child)
      })
    }
  }
  recursiveSearch(data)

  return result || 0
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  return {
    検査実施人数: getSelectedItem(data, '検査実施人数'),
    陽性患者数: getSelectedItem(data, '陽性患者数'),
    療養中患者数: getSelectedItem(data, '療養中患者数'),
    入院中: getSelectedItem(data, '入院中'),
    重症: getSelectedItem(data, '重症'),
    ホテル療養: getSelectedItem(data, 'ホテル療養'),
    自宅療養: getSelectedItem(data, '自宅療養'),
    施設内療養: getSelectedItem(data, '施設内療養'),
    調整中: getSelectedItem(data, '調整中'),
    その他: getSelectedItem(data, 'その他'),
    退院: getSelectedItem(data, '退院'),
    療養解除: getSelectedItem(data, '療養解除'),
    死亡: getSelectedItem(data, '死亡')
  } as ConfirmedCasesType
}
