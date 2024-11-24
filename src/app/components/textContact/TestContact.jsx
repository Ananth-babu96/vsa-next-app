"use client";

import React, { useState } from "react";
import Form from "next/form";

const TestContact = () => {
   const [input, setInput] = useState("");

   return (
      <div>
         <Form>
            <input type="text" />
         </Form>
      </div>
   );
};

export default TestContact;
