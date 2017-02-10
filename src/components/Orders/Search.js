import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class Search extends Component {

  constructor(props) {
    super(props);
  }

  	okHandler = (e) => {
	    e.preventDefault();
	    const { onOk } = this.props;
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        onOk(values);
	      }
	    });
	  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };
    const {loading, status, query} = this.props;
    return (
        <Form className="ant-advanced-search-form" onSubmit={this.okHandler}>
        <Row >


        	<Col span={12} key={1}>
	        	<FormItem {...formItemLayout} label="name">
	              {
	                getFieldDecorator('name', {
	                  initialValue: query.name,
	                })(<Input />)
	              }
	          </FormItem>
          </Col>
          <Col span={12} key={2}>
	        	<FormItem {...formItemLayout} label="title">
	              {
	                getFieldDecorator('title', {
            rules: [
              { required: true, type: 'string' },
            ],
            initialValue: query.title,
          })(<Input />)
	              }
	          </FormItem>
          </Col>
          <Col span={12} key={3}>
            <FormItem
              {...formItemLayout}
              label="Select"
              hasFeedback
            >
              {getFieldDecorator('select', {
                rules: [
                  { required: true, message: 'Please select your country!' },
                ],
                initialValue: query.select,
              })(
                <Select placeholder="Please select a country">
                  <Option value="china">China</Option>
                  <Option value="use">U.S.A</Option>
                  {status.map(d => <Option key={d.value}>{d.text}</Option>)}
                </Select>
              )}
            </FormItem>
          </Col>

          
          <Col span={24} style={{ 'textAlign': 'center'}}>
            <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(Search);
