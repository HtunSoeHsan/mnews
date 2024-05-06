"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { getNews } from "../services/news";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ItemCard from "@/components/ItemCard";
import { item } from "@/types/item";
import Loading from "../components/Loading";
export default function Home() {
  const [loading, setLoding] = useState(false);
  const [data, setData] = useState<item[]>([]);
  const handleNews = async () => {
    setLoding(false);
    const data = await getNews();
    console.log(data);
    
    setData(data);
    setLoding(true);
  };

  useEffect(() => {
    handleNews();
    console.log(data);
  }, []);
  
  return (
    <main className={styles.main}>
      <Box className={styles.description}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {loading ? <ItemCard items={data} /> : <Loading />}
        </Box>
      </Box>
    </main>
  );
}
