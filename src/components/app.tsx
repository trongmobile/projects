import React from "react";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";
import { RecoilRoot } from "recoil";
import { getConfig } from "utils/config";
import { Layout } from "./layout";
import { ConfigProvider } from "./config-provider";

const MyApp = () => {
  return (
    <RecoilRoot>
      <ConfigProvider
        cssVariables={{
          "--zmp-primary-color": getConfig((c) => c.template.primaryColor),
          "--zmp-background-color": "#f4f5f6",
        }}
      >
        <App>
          {/* <SnackbarProvider> */}
          <ZMPRouter>
            <Layout />
          </ZMPRouter>
          {/* </SnackbarProvider> */}
        </App>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default MyApp;
