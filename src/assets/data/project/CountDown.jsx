/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import contract_abi from '../../../contracts/IDO_abi.json';

export default function CountDown({ data }) {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isOpen, setOpen] = useState(false);
  const IDOContractAddress = "0x9E0A160597a3d67cbE56218e783BC17D37b74362";
  let current = 0;
  let duration = 0;
  
  useEffect(() => {
    if(typeof window.ethereum !== undefined) {
        async function contract() {
          await window.ethereum.enable();

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const IDOContract = new ethers.Contract(IDOContractAddress, contract_abi, signer);
          let now = await IDOContract.getBlockTimestamp();
          current = now.toString();
        }

        contract();

        const now = setInterval(() => {
          current = current*1 + 1;
        }, 1000);
    
        return () => clearInterval(now);
    }
  }, []);

  const countdownTime = (diff) => {
    const d = Math.floor(diff / (3600 * 24));
    const h = Math.floor((diff % (3600 * 24)) / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = Math.floor(diff % 60);
    setDays(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const start = current;
      const end = data;
      const diff = end*1 - start;
      duration = diff;
      if(duration > 0) {
        countdownTime(duration);
        setOpen(false);
      } else {
        setOpen(true);
      }
    }, 1000);
    
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <li>
      <span>Starts In</span>
      {!isOpen ? (
        <span>
          {hours}Hours : {minutes}Minutes : {seconds}seconds
        </span>
      ) : (
        <span>Started</span>
      )}
    </li>
  );
}
