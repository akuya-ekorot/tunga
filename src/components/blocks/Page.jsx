const Page = (props) => {
  return (
    <div className="relative w-[612px] h-[792px] break-after-page" {...props.attributes}>
      {props.children}
    </div>
  )
}

export default Page;
