import React from "react";
import SOCIALS from "../data/social";

const Social = (props) => {
  const { icon, link } = props.social;

  return (
    <span>
      <a href={link}>
        <img
          src={icon}
          alt="icon"
          style={{ width: 35, height: 35, margin: 10 }}
        />
      </a>
    </span>
  );

}

const Socials = () => (
  <div>
    <h4>Social Media</h4>
    <div>
      {SOCIALS.map(SOCIAL => {
        return <Social key={SOCIAL.id} social={SOCIAL} />;
      })}
    </div>
  </div>
)

export default Socials;
