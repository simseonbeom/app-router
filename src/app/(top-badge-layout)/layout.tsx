function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <p
        className="bg-fuchsia-500 text-center py-2 rounded m-2 text-xs"
      >🌄 Lorem Picsum 🏞️</p>
      {children}
    </div>
  )
}

export default Layout


