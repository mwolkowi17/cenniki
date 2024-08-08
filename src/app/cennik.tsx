import axios from "axios";
//import { useEffect, useState } from "react";

const baseURL =
  "http://localhost/school1//wp-json/wp/v2/wyjazd_zimowy?acf_format=standard";

export default function Cennik({ number }: { number: number }) {
  return (
    <>
      <p>test</p>
      <p>{number}</p>
    </>
  );
}
