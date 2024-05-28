import { response } from "express";
import { useState,useEffect } from "react";

export default function Books() {

  useEffect(
    ()=>{
      fetch('book/hello')
      .then(response=>response.json())
      .then(data=>console.log(data))
    },[]
  )
  const [message, setMessage] = useState('');

  return (
    <>
      <section>
        <h1>{message}</h1>
      </section>
    </>
  );
}