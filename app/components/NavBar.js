import React from "react"
import { Link, navigate } from "gatsby"

export default (props) => {

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        borderBottom: "1px dashed #d1c1e0",
        borderTop: "1px dashed #d1c1e0",
        backgroundColor: "#d8d8d8",
        marginBottom: "20px",
        fontSize: ".7rem",
        textTransform: "uppercase",
        color: "#6c6c6c",
        padding: "2px 5px"
      }}
    >
      <span><Link to="/members/">Members</Link> {">"} {props.level} {">"} {props.category} {">"} {props.lesson}</span>

    </div>
  )
}