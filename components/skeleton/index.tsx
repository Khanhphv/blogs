import { Skeleton as SkeletonUI } from '../ui/skeleton'

export default function Skeleton() {
  return (
    <>
      <div className="space-y-2">
        <SkeletonUI className="h-10 w-full" />
        <SkeletonUI className="h-10 w-11/12" />
        <SkeletonUI className="h-10 w-10/12" />
        <SkeletonUI className="h-10 w-9/12" />
      </div>
    </>
  )
}
