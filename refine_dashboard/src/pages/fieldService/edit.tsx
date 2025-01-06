import React from 'react'
import { FieldserviceList } from './list'
import { Form, Input, Modal, Select } from 'antd'
import { useModalForm } from '@refinedev/antd'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Edit = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const { formProps, modalProps } = useModalForm({
    action: 'edit',
    defaultVisible: true,
    resource: 'fieldservice',
    redirect: false,
    mutationMode: 'pessimistic',
    meta: {
        id: id
    },
    onMutationSuccess: async () => {
      try {
        navigate('/')
        console.log("Mutation successful");
      } catch (error) {
          console.error("Error handling mutation success:", error);
      }
    },

  })

  return (
    <FieldserviceList>
      <Modal
        {...modalProps}
        mask={true}
        onCancel={() => navigate('/')}
        title="Edit Field Service"
        width={512}
      >
        <Form {...formProps} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{required: true}]}
          >
            <Input placeholder="Please enter a company name" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{required: true}]}
          >
            <Input placeholder="Please enter a company name" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="imageURL"
            rules={[{required: true}]}
          >
            <Input placeholder="Please enter a Image URL" />
          </Form.Item>
        </Form>
      </Modal>
    </FieldserviceList>
  )
}

export default Edit