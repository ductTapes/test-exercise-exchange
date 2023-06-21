'use client'

export default function ErrorHome({ error }: { error: Error }) {
  return (
    <div>
      <h1>Oops! {error.message}</h1>
      <button
        onClick={() => {
          location.reload()
        }}
      >
        reload
      </button>
    </div>
  )
}
