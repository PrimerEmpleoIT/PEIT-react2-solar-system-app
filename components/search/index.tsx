import Image from "next/image";
import React, { useState } from "react";
import style from "./search.module.css";
import data from "./Data.json"
import Link from "next/link";

interface DataSearch{
  id: number | string;
  first_name: string;
  image?: string;
}


export default function Search() {
  const [filteredData, setFilteredData] =  useState<Array<DataSearch>>([])
  const [search, setSearch] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>){
    const searchWord = e.target.value
    const newFilter = data.filter((value) => {
      return value.first_name.toLowerCase().includes(searchWord)
    });
    if(searchWord === ""){
      setFilteredData([])
    }else {
      setFilteredData(newFilter)
    }
    
  }
  
  return (
    <div className={style.box}>
      
      <input
        autoComplete="off"
        spellCheck="false"
        className={style.search}
        type="search"
        name="keywords"
        placeholder="Buscar"
        onChange={handleSearch}
      />
      <span className={style.btn_search}>
        <Image
          src="/search.svg"
          alt="magnifying glass"
          width={15}
          height={15}
        />
      </span>
      { filteredData.length != 0 && (
        <div className={style.dataResult}>
          {filteredData.map((value) => {
          return <a href="/gallery" key={value.id} className={style.dataItem}> <p>{value.first_name}</p></a>
        })}
        </div>
      )}
      
    </div>
  );
}
