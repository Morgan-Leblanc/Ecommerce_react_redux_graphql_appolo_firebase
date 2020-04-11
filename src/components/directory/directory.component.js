import React, { useState } from "react";
import dataMenu from "../../data/menu";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss"

export default function Directory() {
  const [sections, setSections] = useState(dataMenu.menu);

  console.log(" prout", sections);
  return (
    <div>
      <div className="directory-menu">
        {sections.map((section) => (
          <div>
          <MenuItem key={section.id} title={section.title} image={section.imageUrl} size={section.size} />
          </div>
        ))}
      </div>
    </div>
  );
}
