import React, { useState } from "react";
import dataMenu from "../../data/menu";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss"

export default function Directory() {
  const [sections, setSections] = useState(dataMenu.menu);
  return (
      <div className="directory-menu">
        {sections.map((section) => (
          <MenuItem key={section.id} title={section.title} image={section.imageUrl} size={section.size} />
        ))}
      </div>
  );
}
