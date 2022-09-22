import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Badge, Menu, Dropdown, Space, TreeSelect, Tree, DatePicker, ConfigProvider, Select, Button, Checkbox, Tooltip, Breadcrumb } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ruRU from 'antd/lib/locale/ru_RU';
import moment from 'moment';
import {  
  UserOutlined
} from '@ant-design/icons';

// const menu = (
//   <Menu>
//     <Menu.Item>Action 1</Menu.Item>
//     <Menu.Item>Action 2</Menu.Item>
//   </Menu>
// );

//для селекта 
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

//Табличка с раскрывающейся подтабличкой
function NestedTable() {
  const expandedRowRender = () => {
    const columns = [
      { title: 'Номер', dataIndex: 'date', key: 'date' },
      { title: 'Наименование', dataIndex: 'name', key: 'name' },
      // {
      //   title: 'Status',
      //   key: 'state',
      //   render: () => (
      //     <span>
      //       <Badge status="success" />
      //       Finished
      //     </span>
      //   ),
      // },
      { title: 'Тепло', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: '',
        dataIndex: 'operation',
        key: 'operation',
        align: 'center',
        render: () => (
          <Space size="middle">
            {/* <a>Ведомость</a> */}
            <Button size="small">Ведомость</Button>
            {/* <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown> */}
          </Space>
        ),
      },
    ];

    const data = [
      {
        key:1,
        date: 'ДОМ №9 ЦО',
        name: 'ДОМ №9 ЦО',
        upgradeNum: '0', 
      },
      {
        key:2,
        date: 'ДОМ №7 ГВС',
        name: 'ДОМ №7 ГВС',
        upgradeNum: '3,7', 
      },
      {
        key:3,
        date: 'ДОМ №2 ГВС',
        name: 'ДОМ №2 ГВС',
        upgradeNum: '3,2', 
      },
      {
        key:4,
        date: 'ДОМ №1 ГВС',
        name: 'ДОМ №1 ГВС',
        upgradeNum: '2,3', 
      }


    ];

    // for (let i = 0; i < 3; ++i) {
    //   data.push({
    //     key: i,
    //     date: '2014-12-24 23:12:00',
    //     name: 'This is production name',
    //     upgradeNum: 'Upgraded: 56',
    //   });
    // }
    return <Table columns={columns} dataSource={data} pagination={false} bordered style={{ width: '700px' }}/>;
  };

  const columns = [
    { title: 'Тепло', dataIndex: 'name', key: 'name' },
    { title: 'Количество ТУ', dataIndex: 'platform', key: 'platform', align: 'center' },
    // { title: 'Пока', dataIndex: 'version', key: 'version' },
    // { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    // { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    // { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: '', key: 'view', render: () => <a>Показать</a>, align: 'center' },
    { title: '', key: 'operation', render: () => <Button size="small">Сохранить</Button>, align: 'center' },
  ];

  const data = [
    {
      key: 1,
      name: 'Тепло = 0',
      platform: '9',
    },
    {
      key: 2,
      name: '0 < Тепло < 20',
      platform: '8',
    },
    {
      key: 3,
      name: 'Недостоверно',
      platform: '7',
    },
    {
      key: 4,
      name: 'Всего',
      platform: '25',
    }
  ];
  // for (let i = 0; i < 3; ++i) {
  //   data.push({
  //     key: i,
  //     name: 'Screem',
  //     platform: 'iOS',
  //     version: '10.3.4.5654',
  //     upgradeNum: 500,
  //     creator: 'Jack',
  //     createdAt: '2014-12-24 23:12:00',
  //   });
  // }

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
      style={{ width: '700px' }}
      //bordered
    />
  );
}

const treeData1 = [
  {
    title: 'Группы',
    key: '0-0',
    value: '0-0',
    children: [
      {
        title: 'Договор',
        key: '0-0-0',
        value: '0-0-0',
        children: [
          {
            title: 'ЖК_Гарден Парк',
            key: '0-0-0-0',
            value: '0-0-0-0',
          },
          {
            title: 'ЖК_Легенда',
            key: '0-0-0-1',
            value: '0-0-0-1',
          },
          {
            title: 'ЖК_Эдальго',
            key: '0-0-0-2',
            value: '0-0-0-2',
          },
        ],
      },
      {
        title: 'Электрогорск',
        key: '0-0-1',
        value: '0-0-1',
        children: [
          {
            title: 'ЦДО "Истоки"',
            key: '0-0-1-0',
            value: '0-0-1-0',
          },
          {
            title: 'ЦДО"Истоки"',
            key: '0-0-1-1',
            value: '0-0-1-1',
          },
        ],
      },
      {
      title: 'ЛК МОЭК',
      key: '0-0-2',
      value: '0-0-2',
      children: [
        {
          title: '0150/004',
          key: '0-0-2-0',
          value: '0-0-2-0',
        },
        {
          title: '0303/047',
          key: '0-0-2-1',
          value: '0-0-2-1',
        },
        {
          title: 'ЦСКА',
          key: '0-0-2-3',
          value: '0-0-2-3',
        },
      ],
      },
      {
        title: '0003/004',
        key: '0-0-3',
        value: '0-0-3',
      },
    ],
  },
];

//Выбор групп
class Groups extends React.Component {
  state = {
     value: ['0-0'],
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData1}
        placeholder="Выберите группу"
        //treeDefaultExpandAll
        onChange={this.onChange}
        treeCheckable
        maxTagCount={1}
        size="small"
       
      />
    );
  }
}

//Выбор ресурсов
class Resources extends React.Component {
  state = {
     value: ['0-0'],
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData2}
        placeholder="Выберите ресурс"
        //treeDefaultExpandAll
        onChange={this.onChange}
        treeCheckable
        maxTagCount={1}
        size="small"
       
      />
    );
  }
}

const treeData2 = [
  {
    title: 'Ресурсы',
    key: '0-0',
    children: [
      {
        title: 'ТЭ',
        key: '0-0-0',
      },
       {
        title: 'ЦО',
        key: '0-0-1',
      },
       {
        title: 'ГВС',
        key: '0-0-2',
      },
       {
        title: 'Вент',
        key: '0-0-3',
      },
       {
        title: 'ХВС',
        key: '0-0-4',
      },
       {
        title: 'ЭЭ',
        key: '0-0-5',
      },
       {
        title: 'Газ',
        key: '0-0-6',
      },
       {
        title: 'Пар',
        key: '0-0-7',
      },
    ],  
  },    
];

const { RangePicker } = DatePicker;

function onChangeData(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

function onChangeCheckbox(e) {
  console.log(`checked = ${e.target.checked}`);
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Настройки
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Выход
      </a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <ConfigProvider locale={ruRU}>
  <Space direction="vertical" size="middle" align="center">
    {/* Меню-фильтр-шапка */}
    <Space>
      <Space direction="vertical" align="center">
        Группы
        <Groups style={{ width: '150px' }}/>
      </Space>
      <Space direction="vertical" align="center">
        Ресурсы
        <Resources />
      </Space>
      <Space direction="vertical" align="center">
        Условие анализа
        <Select defaultValue="Потребление тепла за период" size="small" onChange={handleChange} style={{ width: '150px' }}>
          <Option value="sms">Потребление тепла за период</Option>
          <Option value="sms">Температура подающая t1</Option>
          <Option value="e-mail">Температура обратная t2</Option>
          <Option value="e-mail">Утечка М1-М2 за период</Option>
          <Option value="e-mail">Время отказа за период</Option>
          <Option value="e-mail">Время наработки за период</Option>
        </Select>
      </Space>
      <Space direction="vertical" align="center">
        Период анализа
        <Select defaultValue="Прошедшие сутки" size="small" onChange={handleChange}>
          <Option value="sms">Прошедшие сутки</Option>
          <Option value="e-mail">Истекшая часть месяца</Option>
          <Option value="e-mail">Расчетный период</Option>
          <Option value="e-mail">Произвольный период</Option>
        </Select>
      </Space>
      <Space direction="vertical" align="center" size="small"> 
        Диапазон дат
        <RangePicker
          ranges={{
            Сегодня: [moment(), moment()],
            'Этот месяц': [moment().startOf('месяц'), moment().endOf('month')],
          }}
          onChange={onChangeData}
          size="small"
          style={{ width: '170px' }}
          format="DD.MM.YY"
        />
        {/* <RangePicker size="small" /> */}
      </Space>
      <Space direction="vertical" align="center" size="small">
        {/* <Button size="small">Провести анализ</Button> */}
        <Button type="primary" shape="round"  size="large">Провести анализ</Button>
        {/* <Checkbox onChange={onChangeCheckbox}>Показывать наименования ТУ</Checkbox> */}
        
      </Space>
      {/* <Tooltip placement="bottomRight" title={<a href="">Выход</a>}>
        <UserOutlined />БИАТ
      </Tooltip> */}
      {/* <Breadcrumb>
        <Breadcrumb.Item overlay={menu}>
          <a href=""><Tooltip title={<a href="">Пользователь: БИАТ</a>}>
        <UserOutlined />БИАТ
      </Tooltip></a>
        </Breadcrumb.Item>
      </Breadcrumb> */}
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <Tooltip title={<a href="">Пользователь: БИАТ</a>}>
        <UserOutlined />БИАТ
      </Tooltip><DownOutlined />
        </a>
      </Dropdown>
      </Space>
    <Space>
    Результат анализа учетных данных c 02.06.2021 по 02.06.2021 <a>Сохранить в формате Excel</a>
    </Space>
    <NestedTable />

    {/* <Space direction="vertical" size="middle" align="center">
      Результат анализа учетных данных c 02.06.2021 по 02.06.2021
      <a>Сохранить в формате Excel</a>
      <NestedTable />
    </Space> */}
  </Space>  
  </ConfigProvider>
  ,
 
document.getElementById('container'));