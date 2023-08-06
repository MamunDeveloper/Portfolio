import React from 'react'
import styles from "@/app/services/services.module.css"
import Image from 'next/image'

function ServiceCard({heading, text, src, flexDirection}) {

    const mainDivClass = flexDirection ? styles[`${flexDirection}`] : '';

    return (
        <div className={`flex ${styles.serviceBox} ${mainDivClass} `} id={styles.mainDiv} >
            <div className={styles.text} >
                <h3>{heading}</h3> <br />
                <p>{text} </p>
            </div>
            <Image className={styles.serviceBoxImg} src={src} width={400} height={250} alt='Service image' />
        </div>
    )
}

export default ServiceCard