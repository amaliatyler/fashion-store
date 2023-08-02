import React from "react";

import dissapointedFace from './dissapointedface.svg';

export const UserActionsInfo = ( { message, icon = dissapointedFace} ) => {
  return (
    <div className="section-empty">
      <p className="section-empty__text empty-section">{message}</p>
      <img
        className="section-empty__img"
        src={icon}
        alt="Dissapointed emoji"
      />
    </div>
  );
};
