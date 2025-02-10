export default function Checkout({ params }: { params: { id: string } }) {
  const { id } = params
  return (
    <>
      <h1>Checkout {id}</h1>
    </>
  )
}
