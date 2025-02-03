import React from "react"
import styles from "./page.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import Product from "@/components/product/product"


export default function Home() {
  return (
   
    <div className={styles.container}>
      <CategoryList/> 
      <div className={styles.content}>
      <Product/> 
      <Product/> 
      <Product/> 
      <Product/> 
      </div>
    </div>
  );
}
 