import React from 'react';
 import { useCollapse } from 'react-collapsed';
 
function Collapsibl() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible ">
        <button className="header btn btn-primary" {...getToggleProps()}>
            {isExpanded ? 'hide' : 'show'}
        </button>
        <div {...getCollapseProps()}>
            <div className="content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>
    );
}
export default Collapsibl