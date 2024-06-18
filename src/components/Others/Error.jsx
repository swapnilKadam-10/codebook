

export const Error = ({error}) => {
   const { message } = error;
   
  return (
    <>
      <section>
        <div className="border shadow-xl min-w-96 min-h-80 p-10 flex flex-col justify-center rounded-xl  ">
           <span className="dark:text-white m-auto">
           <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
           </span>
          
           <h1 className="text-4xl dark:text-white m-auto items-center">{message}</h1>
           
        </div>
      </section>
    </>
  )
}
