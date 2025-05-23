"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchHello = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_REST_API_URL}/hello?name=홍길동`
        );
        if (!response.ok) {
          throw new Error("REST API 요청 실패!");
        }
        const result = await response.text();
        setMessage(result);

      } catch (error) {
        console.log(error);
      }
    };
    fetchHello();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg">{message}</p>
    </div>
  );
}
