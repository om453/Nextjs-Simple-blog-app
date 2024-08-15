
function Container({children}: {children: React.ReactNode}) {
  return  <div className=" max-w-[1100px] mx-auto min-h-screen flex flex-col border-r border-l">{children}</div>;
}

export default Container