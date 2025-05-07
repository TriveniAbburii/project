


import React, { useState, useEffect, useRef } from "react";
import Arrowleft from "../../assets/arrow-left.png";
import image from "../../assets/image.png"
import heart from "../../assets/heart.png";



const BlogSection = [
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
    { img: image, title: "Product Name", para: "Sign in or Create an account to see pricing" },
];

const RightsideSection = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const loadMoreRef = useRef(null);
    const firstItemsRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && visibleCount < BlogSection.length) {
                    setVisibleCount((prev) => Math.min(prev + 3, BlogSection.length));
                }
            });
        }, { threshold: 0.1 });

        if (loadMoreRef.current) observer.observe(loadMoreRef.current);
        firstItemsRefs.current.slice(0, 3).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
            firstItemsRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [visibleCount]);

    return (
        <div className="blog-section">

            <div className="card-grid">
                {BlogSection.slice(0, visibleCount).map((blog, index) => (
                    <div
                        key={index}
                        ref={(el) => (firstItemsRefs.current[index] = el)}
                        className="blog-card"
                    >
                        <img src={blog.img} alt="blog" className="card-img" />
                        <div className="card-content">
                            <p className="card-title">{blog.title}</p>
                            <div style={{display:'flex' ,flexDirection:'row' ,justifyContent:'space-evenly',}}>
                                <p className="card-para">{blog.para}</p>
                                <img src={heart} style={{width:"20px",height:'20px',position:'relative',top:"10px"}}/>
                            </div>
                            <div className="card-footer">
                                <span className="newsroom-text">News room</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RightsideSection;

