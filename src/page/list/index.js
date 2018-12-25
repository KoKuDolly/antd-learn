// import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';
import SampleChart from '../../components/SampleChart';

const FormItem = Form.Item;

function mapStateToProps(state) {
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects['cards/queryList'], // 这句没懂loading没找到
    statistic: state.cards.statistic,
  };
}

class List extends React.Component {
  state = {
    visible: false,
    id: null,
    statisticVisible: false
  };

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>
    },
    {
      title: '',
      dataIndex: '_',
      render: (_, { id }) => {
        // console.log(id);
        return (
          <Button onClick={() => { this.showStatistic(id); }}>图表</Button>
        );
      }
    }
  ];
  showStatistic = (id) => {
    this.props.dispatch({
      type: 'cards/getStatistic',
      payload: id
    });
    this.setState({ id, statisticVisible: true });
  }
  handleStatisticCancle = () => {
    this.setState({
      statisticVisible: false,
    });
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  handleOk = () => {
    const { dispatch, form: { validateFields } } = this.props;
    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'cards/addOne',
          payload: values
        });
        this.setState({ visible: false });
      }
    });
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'cards/queryList',
    });
  };
  render() {
    const { visible, statisticVisible, id } = this.state;
    const { cardsList, cardsLoading, form: { getFieldDecorator }, statistic } = this.props;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    }
    return (
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id"></Table>
        <Button onClick={this.showModal}>新建</Button>
        <Modal
          title="新建记录"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form layout="horizontal">
            <FormItem
              label="名称"
              {...formItemLayout}
            >
              {getFieldDecorator('name', {
                rules: [{ required: true }]
              })(
                <Input/>
              )}
            </FormItem>
            <FormItem label="描述" {...formItemLayout}>
              {getFieldDecorator('desc')(<Input/>)}
            </FormItem>
            <FormItem label="链接" {...formItemLayout}>
              {getFieldDecorator('url', {
                rules: [{ type: 'url' }]
              })(
                  <Input/>
                )}
            </FormItem>
          </Form>
        </Modal>
        <Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancle}>
          <SampleChart data={statistic[id]}/>
        </Modal>
      </div>
    );
  };
}

export default connect(mapStateToProps)(Form.create()(List));
