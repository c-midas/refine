import React from 'react'
import { FieldserviceList } from './list'
import { Form, Input, Modal } from 'antd'
import { useModalForm } from '@refinedev/antd'
import { useNavigate } from 'react-router-dom'


const Create = () => {

  const navigate = useNavigate()

  const { formProps, modalProps } = useModalForm({
    action: 'create',
    defaultVisible: true,
    resource: 'fieldservice',
    redirect: false,
    mutationMode: 'pessimistic',
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
        title="Create Field Service"
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

export default Create