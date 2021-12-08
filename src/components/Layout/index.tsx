import { FC, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { Drawer, Layout as AntdLayout } from "antd";
import { ConfigProvider as AntdConfigProvider } from "antd";
import { TFunction, useTranslation } from "react-i18next";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import useMediaQuery from "hooks/useMediaQuery";
import { SIDEBAR_QUERY } from "utils/mediaQuery";
import clsx from "clsx";

const getValidateMessages = (t: TFunction<"translation">) => ({
  required: `* \${label} ${t("form.validate.required")}`,
  whitespace: "${name} cannot be empty 123",
});

export const Layout: FC = ({ children }) => {
  const { t } = useTranslation();
  const validateMessages = useMemo(() => getValidateMessages(t), [t]);
  const drawerSideBarQuery = useMediaQuery(SIDEBAR_QUERY);
  const [drawerSideBarVisible, setDrawerSideBarVisible] =
    useState<boolean>(false);

  const onCloseSideBar = () => {
    setDrawerSideBarVisible(false);
  };

  const onOpenSideBar = () => {
    setDrawerSideBarVisible(true);
  };

  return (
    <AntdConfigProvider
      form={{
        validateMessages,
      }}
    >
      <AntdLayout className={styles.root}>
        {!drawerSideBarQuery && <SideBar />}
        <main
          className={clsx(
            styles.wrapper,
            drawerSideBarQuery ? styles.wrapperFluid : undefined
          )}
        >
          <TopBar onOpenSideBar={onOpenSideBar} />
          <div className={styles.page}>{children}</div>
        </main>
        <Drawer
          title={null}
          placement={"left"}
          closable={false}
          onClose={onCloseSideBar}
          visible={drawerSideBarVisible}
          // key={"left"}
        >
          <SideBar />
        </Drawer>
      </AntdLayout>
    </AntdConfigProvider>
  );
};
