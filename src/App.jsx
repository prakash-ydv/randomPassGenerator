import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState(""); 
  let [range, setRange] = useState(6);
  let [isNumRequird, setIsNumRequired] = useState(false);
  let [isUpRequired, setIsUpRequired] = useState(true);
  let [isLowRequired, setIsLowRequired] = useState(true);
  let [isCharRequired, setIsCharRequired] = useState(false);
  let [pass, setPass] = useState("");
  let [buttonText, setButtonText] = useState("Copy");


  // generate facts

  const passwordFacts = {
    1: "1 in 4 people reuse passwords across multiple sites, increasing the risk of hacking.",
    2: "Over 80% of hacking-related breaches involve weak or stolen passwords, according to Verizon’s 2020 report.",
    3: "\"123456\" is the most common password, used by millions of people worldwide.",
    4: "71% of people reuse passwords for personal and work accounts, making them more vulnerable to attacks.",
    5: "Google reports that MFA reduces the chances of account hacks by 99.9%.",
    6: "More than 1 billion passwords were leaked in data breaches in 2020 alone.",
    7: "A 2021 study showed that more than 50% of people still rely on passwords, despite alternatives.",
    8: "Around 90% of data breaches are caused by weak or compromised passwords, according to IBM.",
    9: "Twitter recommends changing passwords if your email address or password appears in a data breach.",
    10: "Hackers can crack a 6-character password in under 2 hours using modern brute-force tools.",
    11: "Password managers can help users create, store, and remember complex passwords securely.",
    12: "MFA is used by over 80% of Facebook and Google users to secure accounts.",
    13: "The most common password mistake is using easily guessable information like pet names or birthdates.",
    14: "Password recovery features are often the weakest part of an account’s security.",
    15: "More than 60% of users use passwords based on personal information, such as names or hobbies.",
    16: "70% of users admit to writing their passwords down or storing them insecurely.",
    17: "\"qwerty\" is one of the most common password choices, despite being easy for hackers to guess.",
    18: "Data breaches in 2021 exposed over 22 billion records, many of which contained passwords.",
    19: "Complex passwords (12+ characters) are significantly harder to crack than shorter ones.",
    20: "Breached accounts are often used in subsequent attacks, like credential stuffing, to access multiple sites."
};
 
const FactGenerator = () =>{
  let key = Math.floor(Math.random()*20 + 1)
  let fact = passwordFacts[key]
  setFact(fact)
} 

   

  useEffect(() => {
    randomPassGenerator();
  }, [range, isCharRequired, isNumRequird, isLowRequired, isUpRequired]);

  useEffect(() => {
    FactGenerator()
  }, [])
  

  const toggleNumReq = () => {
    setIsNumRequired((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  const toggleCharReq = () => {
    setIsCharRequired((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  const toggleUpReq = () => {
    setIsUpRequired((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  const toggleLowReq = () => {
    setIsLowRequired((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  const randomPassGenerator = () => {
    let letters = "";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const chars = "!.@#$%-/";

    if (isNumRequird) letters += numbers;
    if (isCharRequired) letters += chars;
    if (isUpRequired) letters += upperCase;
    if (isLowRequired) letters += lowerCase;

    let newPass = "";

    if (isCharRequired || isCharRequired || isUpRequired || isLowRequired || isNumRequird) {
      for (let i = 0; i < range; i++) {
        let randomValue = Math.floor(Math.random() * letters.length);
        newPass += letters[randomValue];
      }
      setPass(newPass);
    } else {
      alert("Select at least one box to generate password")
    }
  };

  const handleCopy = (e) => {
    if (pass) {
      navigator.clipboard.writeText(pass);

      setButtonText("Copied");
      setTimeout(() => {
        setButtonText("Copy");
      }, 2000);
    } else {
      alert("Generate a password first!");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-800 flex gap-6 flex-col justify-start items-center p-5">
      <h1 className="text-white text-center font-semibold text-2xl mt-">
        Random Password Generator
      </h1>
      <div className="bg-gray-300 flex flex-col gap-5 h-fit w-fit rounded-lg py-3 px-6">
        <div className="mt-6 mx-auto flex w-full">
          <input
            value={pass}
            className="outline-none px-2 p-1 w-45 mx-auto lg:w-60 "
            type="text"
            readOnly
          />
          <button onClick={handleCopy} className="bg-blue-300 p-1 px-2 w-24 md:w-28">
            {buttonText}
          </button>
        </div>

        <div className="flex justify-between flex-col gap-4">
          <label className="font-semibold">Length : {range}</label>
          <input
            className="outline-none"
            type="range"
            min={4}
            max={16}
            defaultValue={6}
            onChange={(e) => setRange(Number(e.target.value))}
          />

          <div className="flex flex-col items-center justify-center mt-4 flex-wrap">
            <div className="flex w-full items-center gap-4 ">
              <input onChange={toggleNumReq} type="checkbox" />
              <label className="font-semibold">Num3ers</label>
            </div>

            <div className="flex w-full items-center gap-4 ">
              <input onChange={toggleCharReq} type="checkbox" />
              <label className="font-semibold">C#aracter$</label>
            </div>

            <div className="flex w-full items-center gap-4 ">
              <input onChange={toggleUpReq} type="checkbox" defaultChecked />
              <label className="font-semibold">UPPER</label>
            </div>

            <div className="flex w-full items-center gap-4 ">
              <input onChange={toggleLowReq} type="checkbox" defaultChecked />
              <label className="font-semibold">lower</label>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={randomPassGenerator}
        className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-white font-semibold"
        >
        Generate New
      </button>

      <div className="border-2 text-gray-200 border-white flex flex-col gap-5 min-h-60 w-80 rounded-lg py-3 px-6 justify-center items-center relative">
        <h1 className="absolute top-2 text-gray-300 text-2xl">Do you know ?</h1>
        <h1>{fact}</h1>
      </div>
    </div>
  );
}

export default App;
