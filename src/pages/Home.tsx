import React from "react";
import { Select } from "antd";
import CompaniesInfos from "../components/CompaniesInfos.tsx";
import styles from "./Home.module.css";
import { CompanyInterface } from "../commons/types.tsx";
import AddInfo from "../components/AddInfo.tsx";
import { CompanyContext } from "../contexts/CompanyContext.tsx";

function Home() {
  const {
    companies,
    companiesSelectOptions,
    setFilteredCompanyId,
    getCompanies,
  } = React.useContext(CompanyContext);

  function selectCompany(value: number) {
    let companyId: number | null = null;
    if (value) {
      companyId = companies.filter(
        (company: CompanyInterface) => company.id === value
      )[0].id;
    }
    setFilteredCompanyId(companyId);
  }

  React.useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.companySearch}>
        <h1>Companies</h1>
        <Select
          className={styles.selectBox}
          showSearch
          allowClear
          placeholder="Filter by company"
          options={companiesSelectOptions}
          onChange={selectCompany}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />
      </div>
      <AddInfo />
      <CompaniesInfos />
    </div>
  );
}

export default Home;
