import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CustomDiv = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

function CompanyProfile({ companyData }) {
  const [data, setData] = useState("");

  console.log(companyData);

  useEffect(() => {
    setData("Nissi Bintaro Campus");
  }, []);

  return (
    <CustomDiv>
      <p
        style={{
          fontSize: "24px",
          color: "blue",
        }}
      >
        Company Profile
      </p>
      <h1>
        Company Name: {companyData.name} | {data}
      </h1>
      <h2>Company Address: {companyData.address}</h2>
      <button onClick={() => setData("DataOn")}>
        Add Company Name
      </button>
    </CustomDiv>
  );
}

export default CompanyProfile;
