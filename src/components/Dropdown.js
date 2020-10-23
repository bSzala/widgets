import React, {useState} from "react";

const Dropdown = ({options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false);

    const renderOptions = options.map(o => {
        if(o.value === selected.value)
            return null;
       return (
            <div key={o.value} className="item" onClick={() => onSelectedChange(o)}>
                {o.label}
            </div>
       );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="" className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)}
                     className={`ui selection dropdown ${open ? 'visible active': ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
