import axios from 'axios';
import { DataProvider } from '@refinedev/core'
// export const API_BASE_URL = 'https://api.crm.refine.dev'
// export const WS_URL = 'wss://api.crm.refine.dev/graphql'

export const API_BASE_URL = 'http://localhost:3000'

export const restAPIProvider = (url: string): DataProvider => ({
  getOne: async () => {
    throw new Error("Not implemented");
  },
  create: async (params: any) => {
    try {
      const { variables, resource } = params;

      const formData = await axios.post(`${API_BASE_URL}/api/${resource}`, variables);
      return formData.data

    } catch (error) {
      console.log("Error while creating data in db", error)
    }
  },
  update: async (params: any) => {
    try {
      const { variables, resource, meta } = params;

      const formData = await axios.put(`${API_BASE_URL}/api/${resource}/${meta.id}`, variables);
      return formData.data;
     } catch (error) {
      throw new Error(`Error while updating data ${error}`)
     }
  },
  deleteOne: async (params: any) => {
    try {
      const { id, resource } = params
      const response = await axios.delete(`${API_BASE_URL}/api/${resource}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error while updating data ${error}`)
    }
  },
  getList: async (params: any) => {
    try {
      const { resource } = params
      const response = await axios.get(`${API_BASE_URL}/api/${resource}`);

      return  {
        data: response.data,
        total: 10
      }
    
    } catch (error) {
      throw new Error("Not implemented");
    }    
  },
  getApiUrl: () => {
    throw new Error("Not implemented");
  },
})