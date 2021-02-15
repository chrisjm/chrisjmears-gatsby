import React from "react"
import OutsideLink from "./outside-link"
import { Link } from "gatsby"

function Signature() {
  return (
    <div className="signature text-base border rounded p-6 mb-10 mx-auto max-w-3xl">
      <span>
        Hi, there! I'm Chris J Mears.{" "}
        <span aria-label="waving hand" role="img">
          👋
        </span>
      </span>
      <span>
        {" "}
        I'm a <Link to="/resume">Data Scientist</Link> and{" "}
        <OutsideLink to="https://www.wanderingleafstudios.com/">
          consultant
        </OutsideLink>
        .{" "}
        <span aria-label="geek face" role="img">
          🤓
        </span>
      </span>
      <span>
        {" "}
        I have over 15 years of technical and software engineering experience in
        the software-as-a-service (SaaS) and digital marketing domains.{" "}
        <span aria-label="collaborative handshake" role="img">
          💼
        </span>
      </span>
      <span>
        {" "}
        I created and maintain the{" "}
        <OutsideLink to="https://www.openbrewerydb.org/">
          Open Brewery DB
        </OutsideLink>{" "}
        open-source project.{" "}
        <span aria-label="beer cheers" role="img">
          🍻
        </span>
      </span>
      <span>
        {" "}
        I have a rescue dog named Cooper.{" "}
        <span aria-label="dog" role="img">
          🐶
        </span>
      </span>
      <span>
        {" "}
        You can follow me on{" "}
        <OutsideLink to="https://github.com/chrisjm">Github</OutsideLink>,{" "}
        <OutsideLink to="https://twitter.com/chrisjm">Twitter</OutsideLink>, and{" "}
        <OutsideLink to="https://www.linkedin.com/in/chrisjm80/">
          LinkedIn
        </OutsideLink>
        .{" "}
        <span aria-label="thank you" role="img">
          🙏
        </span>
      </span>
    </div>
  )
}

export default Signature
