function createElement(type,text,color){
    const el = document.createElement(type);
    el.innerText=text;
    el.style.color=color;
    document.body.append(el)
    return{
     el, setText(text){
     el.innerText = text
    },
     setColor(color){
      el.style.color= color
     }
    }
   }

   const title = "hello world"
   const intro  = ("The start off, my journey has been okay, but as I'am getting the hang of things, things have started to click. I will be walking you through this as a best as I can roughly explaining through a novice's point of understanding, which is me, on the inner workings of my code.")
   
   const h = createElement('h2',title,'black')
   const h3 = createElement('h3',intro, 'black')