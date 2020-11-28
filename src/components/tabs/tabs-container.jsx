import React, {useState, useCallback} from "react";
import Tabs from "./tabs";
import filmProp from "../../film-prop";
import {FilmTab} from "../../const";

const TabsContainer = (props) => {
  const {film} = props;

  const [activeTab, setActiveTab] = useState(FilmTab.OVERVIEW);

  const handleActiveTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <Tabs
      film={film}
      handleActiveTab={handleActiveTab}
      activeTab={activeTab}
    />
  );
};

TabsContainer.propTypes = {
  film: filmProp
};

export default TabsContainer;
