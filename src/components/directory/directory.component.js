import React, { useState } from "react";
import { useSelector } from "react-redux"
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss"

export default function Directory() {
  const sections = useSelector((state => state.menu.sections))
  return (
      <div className="directory-menu">
        {sections.map(({id,...propsSection}) => (
          <MenuItem key={id} {...propsSection}/>
        ))}
      </div>
  );
}
