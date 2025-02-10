export default async function Checkout({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <>
      <h1>Checkout {id}</h1>
    </>
  )
}
