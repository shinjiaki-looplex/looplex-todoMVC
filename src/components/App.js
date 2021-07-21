// import logo from './logo.svg';
import { List, Button, Checkbox, Input } from 'antd'
import './App.css';
import Todo from '../models/Todo'
import { DeleteOutlined } from '@ant-design/icons'

const data = [
  {
    content: 'Ant Design content 1',
  },
  {
    content: 'Ant Design content 2',
  },
  {
    content: 'Ant Design content 3',
  },
  {
    content: 'Ant Design content 4',
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <img id="logo" src="https://todomvc.com/site-assets/logo-icon.png" alt="logo-icon" />
        <h1 id="title" >Looplex TodoMVC</h1>
      </header>

      <List
        className="list"
        header={ <Input className="input" placeholder="What needs to be done?" /> }
        itemLayout="vertical"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
            />
            <Checkbox>{item.content}</Checkbox>
            <Button type="danger"><DeleteOutlined /></Button>
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
