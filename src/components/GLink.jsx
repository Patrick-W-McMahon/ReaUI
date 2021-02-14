import React from 'react';

const GLink = ({ to, children  }) => <a href={to} rel="noopener noreferrer" target="_blank">{children}</a>;
export default GLink;