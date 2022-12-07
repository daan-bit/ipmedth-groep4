import React from 'react'
import '../../css/components/collapsible.css'
import Collapsible from 'react-collapsible';

function CustomCollapsible({children, trigger}) {
  return (
    <Collapsible trigger={trigger}>
      {children}
    </Collapsible>
    
  )
}

export default CustomCollapsible