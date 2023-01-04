import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './ProductCard.module.scss'
export default function ProductCard({content}) {
  const {title, thumbnail, link} = content
  return (
    <Link className={styles.container_link} href={link}>
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.image_wrapper}>
        <Image 
          src={thumbnail.url}
          alt={thumbnail.alt}
          fill
          className={styles.image}
        />
      </div>
    </div>
    </Link>
  )
}
