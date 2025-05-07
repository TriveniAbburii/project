import React from 'react'
import { useState } from 'react';

const LeftSideSection = () => {

    const [open, setOpen] = useState(null);
    const SideBarData = [
        { title: "IDEAL FOR", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
        { title: "OCCASION", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
        { title: "WORK", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
        { title: "FABRIC", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
        { title: "OCCASION", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
        { title: "FABRIC", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
        { title: "WORK", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
        { title: "IDEAL FOR", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
        { title: "WORK", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
        { title: "WORK", answer: [{ ans: "Value 1" }, { ans: "Value 2" }, { ans: "Value 3" }] },
    ];

    const handleOpen = (index) => {
        setOpen(open === index ? null : index);
    };
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-wrapper">
                    <div className="search-box">
                        <input type="text" placeholder="Search for filters" className="search-input" />
                    </div>
                    <div className="filter-box">

                        {SideBarData.map((item, index) => (
                            <div key={index}>
                                <div
                                    className="filter-item"
                                    onClick={() => handleOpen(index)}
                                >
                                    <span className="arrow">
                                        {open === index ? "▼" : "▶"}
                                    </span>
                                    <span className="item-title">{item.title}</span>
                                   
                                </div>
                                
                                {open === index && (
                                    <div className="subitems-container">
                                        {item.answer.map((subitem, idx) => (
                                            <label className="subitem" key={idx}>
                                                <input type="checkbox" name={`option-${index}`} defaultChecked={idx === 0} />
                                                {subitem.ans}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default LeftSideSection;