import React from "react";
import { Link } from "react-router-dom";
import { TbBrandReact } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-header">
          <h1 className="hero__title">Rick and Morty Characters</h1>
          <p className="hero__desc">Find your favorite Rick and Morty character here!</p>
        </div>
        <div className="hero-body">
          <Link to="/characters/page/1" className="hero-action btn btn-blue">Get started</Link>
        </div>
        <div className="hero-footer">
            <p className="hero__tip">This site was built with</p>
            <div className="hero-footer-icons">
                <span className="hero-icon"><TbBrandReact /></span>
                <span className="hero-icon"><TbBrandRedux /></span>
                <span className="hero-icon"><SiReactrouter/></span>
            </div>
            <div className="hero-social">
                <span><FaGithubAlt/></span>
                <Link to={"https://github.com/hindrav/rickandmorty"} className="hero-link">View project</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
