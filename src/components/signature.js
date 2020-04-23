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
        I'm a <Link to="/resume">Data Engineer</Link> and{" "}
        <OutsideLink to="https://www.wanderingleafstudios.com/">
          data analytics consultant
        </OutsideLink>
        .
        <span aria-label="geek face" role="img">
          🤓
        </span>
      </span>
      <span>
        {" "}
        My mission is to tell stories with data with empathy and collaboration.{" "}
        <span aria-label="collaborative handshake" role="img">
          🤝
        </span>
      </span>
      <span>
        {" "}
        I'm a remote and distributed team advocate.{" "}
        <span aria-label="house" role="img">
          🏠
        </span>
      </span>
      <span>
        {" "}
        I maintain the{" "}
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
        <OutsideLink to="https://instagram.com/chrisjm">Instagram</OutsideLink>,{" "}
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
