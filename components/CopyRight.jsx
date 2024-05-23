import React from 'react';

const CopyRight = () => {
  const today = new Date();
  const day = today.toLocaleDateString('default', { weekday: 'long' });

  return (
    <div className="copyright">
      <p>
        Janet Ogenyi <span> . </span> @ {today.getFullYear()}
      </p>
    </div>
  );
};

export default CopyRight;
