export default ()=>{
    const fn = () => {
        const el = document.querySelector('#app')! as HTMLDivElement
        console.log(el)
       el.addEventListener('mouseenter', ()=>{
           window.api.setIgnoreMouseEvents(false)
       })
       document.body.addEventListener('mouseover', (event:MouseEvent)=>{
           if(event.target === document.body){
            window.api.setIgnoreMouseEvents(true,{forward:true})
           }
       })
    }
    return {fn}
}