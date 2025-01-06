import CustomAvatar from '@/components/custom-avatar';
import { Text } from '@/components/text';
import { SearchOutlined } from '@ant-design/icons';
import { CreateButton, DeleteButton, EditButton, List, useTable } from '@refinedev/antd'
import { HttpError, useGo  } from '@refinedev/core'
import { Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

export const FieldserviceList = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const { tableProps, filters } = useTable<
      HttpError
  >({
    resource: 'fieldservice',
    onSearch: (values: any) => {
      return [
        {
          field: 'name',
          operator: 'contains',
          value: values.name
        }
      ]
    },
    pagination: {
      pageSize: 12,
    },
    sorters: {
      initial: [
        {
          field: 'createdAt',
          order: 'desc'
        }
      ]
    },
    filters: {
      initial: [
        {
          field: 'name',
          operator: 'contains',
          value: undefined
        }
      ]
    }
  })

  return (
  <div>
    <List
      breadcrumb={false}
      headerButtons={() => (
        <CreateButton 
          onClick={() => {
            navigate('/fieldservice/new')
          }}
        />
      )}
    >
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
        }}
      >
        <Table.Column<any>
          dataIndex="name"
          title="Fieldservie Name"
          filterIcon={<SearchOutlined />}
          render={(value, record) => (
            <Space>
              <CustomAvatar shape="square" name={record.name} src={record.avatarUrl} />
              <Text style={{ whiteSpace: 'nowrap' }}>
              {record.name}
              </Text>
            </Space>
          )}
        />
        <Table.Column<any>
          dataIndex="address"
          title="Address"
          render={(value, record) => (
            <Text>
              {record.address}
            </Text>
          )}
        />
        <Table.Column<any>
          dataIndex="imageURL"
          title="ImageURL"
          render={(value, record) => (
            <Text>
              {record.imageURL}
            </Text>
          )}
        />
        <Table.Column<any>
          dataIndex="id"
          title="Actions"
          fixed="right"
          render={(value) => (
            <Space>
              <EditButton hideText size="small" onClick={() => navigate(`/fieldservice/edit/${value}`)} />
              <DeleteButton hideText size="small" recordItemId={value} />
            </Space>
          )}
        />
      </Table>
    </List>
    {children}
    </div>
  )
}
