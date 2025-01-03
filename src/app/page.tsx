import { PageMetadata } from "@/data/metadata";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: PageMetadata.name,
  description: PageMetadata.description
}

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <h1>
          Hello world
        </h1>
      </div>
    </div>
  );
}
