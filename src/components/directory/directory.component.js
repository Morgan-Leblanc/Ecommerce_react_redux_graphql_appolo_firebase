import React, { useState } from "react";
import dataMenu from "../../data/menuItem";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss"

export default function Directory() {
  const [sections, setSections] = useState(dataMenu.menu);
  return (
      <div className="directory-menu">
        {sections.map(({id,...propsSection}) => (
          <MenuItem key={id} {...propsSection}/>
        ))}
      </div>
  );
}
