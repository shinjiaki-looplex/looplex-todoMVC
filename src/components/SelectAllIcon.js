import { observer } from 'mobx-react-lite'

import { CheckSquareOutlined, CheckSquareFilled } from '@ant-design/icons'

const SelectAllIcon = observer(({ store }) => {
  if (store.itemsLeft === 0) {
    return (
      <CheckSquareFilled style={{ fontSize: '18px' }} />
    )
  } else {
    return (
      <CheckSquareOutlined style={{ fontSize: '18px' }} />
    )
  }
})

export default SelectAllIcon
