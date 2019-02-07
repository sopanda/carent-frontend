import styled from "styled-components";
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel
} from "react-tabs";

const Tabs = styled(UnstyledTabs)`
  display: flex;
`;

const TabList = styled(UnstyledTabList)`
  display: flex;
  padding: 0;
  flex-direction: column;
  text-align: center;
  background-color: #082336;
  border-radius: 2%;
`;

const TabPanel = styled(UnstyledTabPanel)`
  background-color: #082336;
  border-radius: 2%;
`;

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: "is-selected"
})`
  flex-grow: 1;
  text-align: center;
  list-style: none;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 2%;

  &:first-child {
    border-left: none;
  }

  &.is-selected {
    background-color: #3de6af;
    color: #001220;
  }

  &.disabled {
    color: #e0e0e0;
    cursor: not-allowed;
  }
`;

Tab.tabsRole = "Tab";
Tabs.tabsRole = "Tabs";
TabPanel.tabsRole = "TabPanel";
TabList.tabsRole = "TabList";

export { Tab, TabList, Tabs, TabPanel };
