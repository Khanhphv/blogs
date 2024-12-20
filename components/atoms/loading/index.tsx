'use client'
import { ReloadIcon } from '@radix-ui/react-icons'
import styles from './loading.module.scss'

export default function Loading() {
  return (
    <div className="h-full w-full">
      <div className={styles.centerScreen}>
        <ReloadIcon height={50} width={50} className={`animate-spin`} />
      </div>
    </div>
  )
}
