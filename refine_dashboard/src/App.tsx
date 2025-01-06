import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "@refinedev/antd/dist/reset.css";

import { restAPIProvider } from "./providers";
import { FieldserviceList } from "./pages";

import { resources } from "./config/resources";
import Layout from "./components/layout";
import Create from "./pages/fieldService/create";
import Edit from "./pages/fieldService/edit";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={restAPIProvider('')}
                notificationProvider={useNotificationProvider}
                resources={resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "WVyLEd-4karEq-tItoeC",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  <Route path="/"
                    element={
                      <Layout>
                        <Outlet />
                      </Layout>
                    }
                  >
                    <Route index element={<FieldserviceList />} />
                    <Route path="fieldservice/new" element={<Create />} />
                    <Route path="fieldservice/edit/:id" element={<Edit />} />
                  </Route>
                </Routes>
                <RefineKbar />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
