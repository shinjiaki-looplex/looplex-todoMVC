import { observer } from 'mobx-react-lite'

import { CheckSquareOutlined, CheckSquareFilled } from '@ant-design/icons'

const selectAllStyles = { fontSize: '18px' }

const SelectAllIcon = observer(({ store }) => {
  if (store.itemsLeft === 0) {
    return (
      <CheckSquareFilled style={selectAllStyles} />
    )
  } else {
    return (
      <CheckSquareOutlined style={selectAllStyles} />
    )
  }
})

export default SelectAllIcon
