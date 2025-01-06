import { ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  {
    name: 'fieldservice',
    list: '/fieldservice',
    show: '/fieldservice/:id',
    create: '/fieldservice/new',
    edit: '/fieldservice/edit/:id',
    meta: {
      label: 'Field Service',
      icon: <ShopOutlined />
    }
  },
]